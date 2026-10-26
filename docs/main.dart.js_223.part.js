((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cds:function cds(){},
hng(d){var x=null,w=new B.b0n(d,D.dQP,new A.oQ(x,x,y.c6),new A.oQ(x,x,y.B))
w.brW(d)
return w},
b0n:function b0n(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cdn:function cdn(d){this.a=d},
cdo:function cdo(d){this.a=d},
cdp:function cdp(d){this.a=d},
cdm:function cdm(d){this.a=d},
cdq:function cdq(d){this.a=d},
hnh(d,e){var x=y.N
x=new B.b0o(d,e,A.S(x,y.e),A.S(x,y.z))
x.brX(d,e)
return x},
b0o:function b0o(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cdt:function cdt(d){this.a=d},
cdu:function cdu(d){this.a=d},
cdv:function cdv(d){this.a=d},
cdw:function cdw(d){this.a=d},
cdx:function cdx(d){this.a=d},
cdy:function cdy(d){this.a=d},
cdz:function cdz(d){this.a=d},
cdA:function cdA(d){this.a=d},
fFd(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.P(A.b9("IndexedDB not available"))
return C.xk.Kl(x,"ngmy_doc_share_v1",new B.f3B(),1)},
htK(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.B0(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
Pf(d,e){return B.hIf(d,e)},
hIf(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKn
x=7
return A.b(o==null?$.aKn=B.fFd():o,$async$Pf)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mg(s,"blobs","readwrite")
C.ip.lL(J.me(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$Pf)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
$.ak.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pf,w)},
Pe(d){return B.hIe(d)},
hIe(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKn
x=7
return A.b(o==null?$.aKn=B.fFd():o,$async$Pe)
case 7:s=f
r=J.mg(s,"blobs","readonly")
x=8
return A.b(C.ip.yw(J.me(r,"blobs"),d),$async$Pe)
case 8:q=f
x=9
return A.b(J.oY(r),$async$Pe)
case 9:o=B.htK(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
$.ak.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pe,w)},
aen(d){return B.hId(d)},
hId(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aen=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKn
x=7
return A.b(p==null?$.aKn=B.fFd():p,$async$aen)
case 7:s=f
r=J.mg(s,"blobs","readwrite")
C.ip.Eq(J.me(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$aen)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
$.ak.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aen,w)},
f3B:function f3B(){},
hvW(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkx(w,v))}return u},
h3s(d,e){var x,w={},v=A.aSw("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fon(w,v,e)
C.uG.xp(v,"change",new B.fop(w,v,!1))
C.uG.xp(v,"cancel",new B.foo(w))
$.eI.lU()
v.click()
A.bK(C.abF,new B.fom(w),y.H)},
fon:function fon(d,e,f){this.a=d
this.b=e
this.c=f},
fop:function fop(d,e,f){this.a=d
this.b=e
this.c=f},
foo:function foo(d){this.a=d},
fom:function fom(d){this.a=d},
BK(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRL()?3:4
break
case 3:x=5
return A.b(B.fZH(e,d,s,!0,!1,f,g,h,!1,i),$async$BK)
case 5:x=1
break
case 4:x=6
return A.b(B.OU(d,s,f,g,h,i),$async$BK)
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
return A.b(B.GQ(s,d),$async$BK)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f_a(s,d),$async$BK)
case 14:x=12
return A.b(r.fZH(q,p,o,n,m,l,k,j,a1,i),$async$BK)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cs(A.eH(new B.foD(s,i,d,f,g,h),!1,null,y.H)),$async$BK)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cs(A.eH(new B.foE(s,i,d,f,g,h),!1,null,y.H)),$async$BK)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BK,w)},
OU(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OU=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWa(e),$async$OU)
case 3:u=k
x=4
return A.b(B.amn(d,e,!1),$async$OU)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GQ(e,d),$async$OU)
case 7:if(k){v=D.a55
x=1
break}x=8
return A.b(B.SO(e),$async$OU)
case 8:v=t?D.Rt:D.a56
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aW8(d,e)){v=D.a55
x=1
break}x=11
return A.b(B.SO(e),$async$OU)
case 11:v=t?D.Rt:D.a56
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fAt(d,e)){v=D.a55
x=1
break}x=14
return A.b(B.SO(e),$async$OU)
case 14:v=D.Rt
x=1
break
case 13:v=t?D.Rt:D.a56
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OU,w)},
f_a(d,e){var x=0,w=A.j(y.y),v
var $async$f_a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aW8(e,d)){v=!1
x=1
break}x=3
return A.b(B.aWa(d),$async$f_a)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f_a,w)},
fZH(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cs(A.eH(new B.f4U(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fUW(d,e,f,g,h,i,j){return new B.WW(e,j,d,g,h,i,f,null)},
f6Q(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f6Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6T(A.L(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f6Q)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6Q,w)},
f7k(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f7k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f7m(A.L(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f7k)
case 3:q=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
r.R$=u
r.O$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f7k,w)},
fFl(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bl(x,new A.b1(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fgY(d,e){var x=0,w=A.j(y.H),v
var $async$fgY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SO(e),$async$fgY)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eD()
case 1:return A.h(v,w)}})
return A.i($async$fgY,w)},
foD:function foD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foE:function foE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9N:function a9N(d,e){this.a=d
this.b=e},
f4U:function f4U(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WW:function WW(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awf:function awf(){this.c=this.a=this.d=null},
cWK:function cWK(d,e){this.a=d
this.b=e},
cWH:function cWH(d){this.a=d},
cWJ:function cWJ(d){this.a=d},
cWI:function cWI(d){this.a=d},
cWM:function cWM(){},
cWL:function cWL(d){this.a=d},
aae:function aae(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayJ:function ayJ(d,e){this.a=d
this.b=e},
aBQ:function aBQ(d,e,f){this.a=d
this.b=e
this.c=f},
f6T:function f6T(d,e,f){this.a=d
this.b=e
this.c=f},
f6R:function f6R(d){this.a=d},
f6S:function f6S(d,e,f){this.a=d
this.b=e
this.c=f},
f7m:function f7m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7l:function f7l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c28(d,e,f,g,h){return B.hid(d,e,f,g,h)},
hid(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c28=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gH(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.di(d,new B.c29(s,e,h,g,f,q),y.g),y.l),$async$c28)
case 3:r=p.aU(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c28,w)},
aW5(d,e,f,g,h){return B.hie(d,e,f,g,h)},
hie(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aW5=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arB("GET",d)
o=A.fx_()
if(o==null)o=new A.K3(A.a([],y.W))
x=7
return A.b(o.eM(0,s).cJ(0,C.Dq),$async$aW5)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Bc(),$async$aW5)
case 8:q=j
if(J.a9(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ap(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
$.ak.$1("[doc share pull url web] "+f+": "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aW5,w)},
aW4(d){return B.hib(d)},
hib(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aW4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ux(d,null).cJ(0,C.ng),$async$aW4)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aD(0,A.io(A.im(p.e)).c6(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
$.ak.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aW4,w)},
c27(d){return B.hic(d)},
hic(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c27=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ux(d,null).cJ(0,C.oV),$async$c27)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.io(A.im(q.e)).c6(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a4(o)
$.ak.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c27,w)},
c29:function c29(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j8:function j8(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
GO(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hij(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GO(C.a.aV(u,v.length))}return null},
hik(d){var x=B.GO(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hif(){var x,w=$.oW(),v=J.dZ(5,y.S)
for(x=0;x<5;++x)v[x]=w.aA(10)
return C.d.fM(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(24)]},
a4A(d){return B.hig(d)},
hig(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eT(d,null,!1,C.bD),$async$a4A)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.ak.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4A,w)},
a4B(d,e){return B.hih(d,e)},
hih(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4B=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hr(d,e,!1,!1,C.cz,null),$async$a4B)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.ak.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4B,w)},
Ao(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ao=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aw(),$async$Ao)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GO(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4C(r),$async$Ao)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4A("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ao)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GO(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ao)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hif()
x=14
return A.b(B.a4C(m),$async$Ao)
case 14:if(f!=null){x=12
break}l=new A.O(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4B("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ao)
case 15:k=f
x=16
return A.b(B.a4B("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ao)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ao)
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
return A.i($async$Ao,w)},
a4C(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GO(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4A("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4C)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4C,w)},
a4D(d,e,f,g){return B.hil(d,e,f,g)},
hil(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4D=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GO(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4C(r),$async$a4D)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c2f())>1048576||g.bf(d,new B.c2g())){v=B.D8(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4O("myCode",d,a0),$async$a4D)
case 4:u=a3
try{t=C.Q.aD(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ci(s)||J.a9(s)!==g.gH(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.a9(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D8(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aWd(u,g.gH(d),a0),$async$a4D)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oW().aA(9999)
k=n.b
j=g.gH(d)
i=y.N
h=g.di(d,new B.c2h(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aW6(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4D)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gH(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4D,w)},
D8(d,e,f,g,h){return B.hii(d,e,f,g,h)},
hii(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D8=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$D8)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c2b())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oW().aA(9999)
h=Date.now()
g=""+1000*h+"_"+C.cA.aA(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aI(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GS(a9,q)
a0=new A.IF(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D8)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.a9(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.op(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a84(a1.a,a4,"media",a1.d,a2).w5(m,n,new A.Cu(!0,q.c)),$async$D8)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$D8)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMN(r),$async$D8)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gH(a6)
a1=l.di(a6,new B.c2c(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aW6(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D8)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMN(r),$async$D8)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gH(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D8,w)},
aW6(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aW6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4A(t),$async$aW6)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c2a(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4B(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW6,w)},
LA(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$LA=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4A("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$LA)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aU(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.Z(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aW7(k,a0),$async$LA)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.O(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aWc(h),$async$LA)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SV(g,a0),$async$LA)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.a9(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.O(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("F.E")
e=A.z(new A.a5(r,new B.c2d(),q),n)
d=A.z(new A.a5(r,new B.c2e(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a4B("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$LA)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$LA,w)},
aW7(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aW7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aU(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a6(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aQ(o.h(p,"partCount"))
j=o==null?null:C.k.L(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hM0(k,j)
C.d.v(s,i)
x=5
return A.b(B.BI(l,m,"Received via My Code",t,e,i),$async$aW7)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMN(s),$async$aW7)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW7,w)},
c2f:function c2f(){},
c2g:function c2g(){},
c2h:function c2h(){},
c2b:function c2b(){},
c2c:function c2c(){},
c2a:function c2a(){},
c2d:function c2d(){},
c2e:function c2e(){},
foA(d,e){var x=0,w=A.j(y.H)
var $async$foA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cs(A.eH(new B.foB(e),!1,null,y.H)),$async$foA)
case 2:return A.h(null,w)}})
return A.i($async$foA,w)},
bz1(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bz1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cs(A.eH(new B.foC(g,e,f),!1,null,y.y)),$async$bz1)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bz1,w)},
foB:function foB(d){this.a=d},
foC:function foC(d,e,f){this.a=d
this.b=e
this.c=f},
SL:function SL(d,e){this.c=d
this.a=e},
aA5:function aA5(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dGj:function dGj(d,e){this.a=d
this.b=e},
SP:function SP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA8:function aA8(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dHs:function dHs(d){this.a=d},
dHt:function dHt(d){this.a=d},
dHu:function dHu(d){this.a=d},
dHr:function dHr(d,e){this.a=d
this.b=e},
dHv:function dHv(d){this.a=d},
dHw:function dHw(d){this.a=d},
dHx:function dHx(d,e){this.a=d
this.b=e},
dHy:function dHy(d,e){this.a=d
this.b=e},
dHz:function dHz(d,e){this.a=d
this.b=e},
dHA:function dHA(d){this.a=d},
dHD:function dHD(){},
dHB:function dHB(d){this.a=d},
dHC:function dHC(d,e){this.a=d
this.b=e},
beU:function beU(){},
SM:function SM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA6:function aA6(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dGk:function dGk(d){this.a=d},
dGl:function dGl(d){this.a=d},
fAu(d){var x=d.hC
if(x>=0)return C.o.L(x)
return 10},
hin(d){var x=d.k9
if(x>=0)return x
return 4.99},
him(d){var x=d.kS,w=y.N
w=x.iE(x,new B.c2j(),w,w)
return w},
fQ4(d){var x=d.ka,w=y.N
w=x.iE(x,new B.c2k(),w,w)
return w},
aWa(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aWa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aWa)
case 7:s=f
r=A.t(p)
r=A.aR(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aWa,w)},
a4F(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$a4F)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4F)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4F,w)},
SO(d){var x=0,w=A.j(y.H),v,u
var $async$SO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$SO)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
fAt(d,e){var x,w,v
if(B.hin(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.him(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.c8(new A.O(Date.now(),0,!1))},
aW8(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fQ4(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.c8(new A.O(Date.now(),0,!1))},
fQ5(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fQ4(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.c8(new A.O(Date.now(),0,!1))?v:new A.O(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amo(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amo)
case 7:s=f
r=A.t(p)
r=A.eW(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amo,w)},
amp(d){var x=0,w=A.j(y.H),v,u,t
var $async$amp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amo(d),$async$amp)
case 3:u=f
x=5
return A.b(A.aw(),$async$amp)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$amp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amp,w)},
amn(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fAu(d)
if(u<=0){v=!1
x=1
break}if(B.fAt(d,e)){v=!1
x=1
break}x=3
return A.b(B.amo(e),$async$amn)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amn,w)},
aW9(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aW9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GQ(e,d),$async$aW9)
case 3:if(g){v=-1
x=1
break}u=B.fAu(d)
if(u<=0){v=-1
x=1
break}if(B.fAt(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amo(e),$async$aW9)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW9,w)},
c2m(d,e,f){var x=0,w=A.j(y.y),v
var $async$c2m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GQ(e,d),$async$c2m)
case 3:if(h){v=!1
x=1
break}v=B.amn(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2m,w)},
c2l(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c2l=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c2m(d,u,i.gRL()),$async$c2l)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2l,w)},
a4E(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4E=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRL()){v=!0
x=1
break}if(B.aW8(d,u)){v=!0
x=1
break}x=5
return A.b(A.kZ(u,C.P5),$async$a4E)
case 5:x=k?3:4
break
case 3:B.fQ5(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4E)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kE(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.P5,"Doc Share for Organizations"),$async$a4E)
case 7:if(!k){v=!1
x=1
break}B.fQ5(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4E)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4E,w)},
c2j:function c2j(){},
c2k:function c2k(){},
fp5(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fp5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fp5)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eWX.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hB([r],e.c))
s.toString
$.eWX.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fp5,w)},
hO7(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eWX.bm($.eWX,new B.fp7(d))},
fp7:function fp7(d){this.a=d},
eYh(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eYh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aI(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hB([d],f))
s.toString
u=A.mH(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.jb,null,y.H),$async$eYh)
case 3:C.yy.f0(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lU()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYh,w)},
adg(d,e,f){var x=0,w=A.j(y.H),v
var $async$adg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eXt.m(0,d,new B.a9u(A.bh(e,!0,v)))
x=3
return A.b(A.aw(),$async$adg)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.E(["parts",e,"size",f],v,y.C),null)),$async$adg)
case 2:return A.h(null,w)}})
return A.i($async$adg,w)},
ada(d){return B.hxD(d)},
hxD(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ada=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eXt.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ada)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aD(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b4(s,new B.f0O(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.L(o)
q=m==null?0:m
p=new B.a9u(r)
$.eXt.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ada,w)},
OK(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EJ.m(0,d,u)
x=3
return A.b(B.Pf(d,u),$async$OK)
case 3:t=g
if(!t)$.ak.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OK,w)},
aKH(d){return B.hxB(d)},
hxB(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EJ.h(0,d)
if(n!=null&&!C.aE.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pe(d),$async$aKH)
case 3:p=f
if(p!=null&&!C.aE.gah(p)){$.EJ.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKH)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aF(r)
x=!J.ci(q)?9:10
break
case 9:B.OK(d,q)
x=11
return A.b(J.hA(s,d),$async$aKH)
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
return A.i($async$aKH,w)},
hu4(d){if(d==null)return A.f6(null,y.K)
if(y.J.b(d))return A.f6(new Uint8Array(A.cl(J.eO(d,0,null))),y.K)
if(y.D.b(d))return A.f6(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f6(new Uint8Array(A.cl(A.B0(d,0,null))),y.K)
if(y.I.b(d))return A.f6(new Uint8Array(A.cl(d)),y.K)
return A.f6(null,y.K)},
a_l(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bL(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f55(r,t),!1,s)
A.fA(r,"error",new B.f56(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.Jz,new B.f57())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_l,w)},
aL0(d,e,f){return B.hzP(d,e,f)},
hzP(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aL0=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.U(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a_l(i),$async$aL0)
case 10:p=a0
if(p==null||p.length===0){$.ak.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.a9(j)
x=11
return A.b(B.Pf(o,p),$async$aL0)
case 11:n=a0
if(!n){$.ak.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.a9(j)===0){x=1
break}x=12
return A.b(B.adg(k,j,s),$async$aL0)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a4(h)
$.ak.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aL0,w)},
aL_(d,e,f){return B.hzO(d,e,f)},
hzO(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aL_=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aL0(d,e,f),$async$aL_)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_l(f),$async$aL_)
case 10:r=h
if(r==null||r.length===0){$.ak.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EJ.m(0,s,r)
$.P0.m(0,s,r)
x=11
return A.b(B.OK(s,r),$async$aL_)
case 11:q=h
if(!q)$.ak.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a4(m)
$.ak.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aL_,w)},
Ap(d,e,f,g,h,i){return B.hiw(d,e,f,g,h,i)},
hiw(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ap=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cA.aA(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j8(p,q,o,n,new A.O(Date.now(),0,!1).a4().aa(),a0,f,B.aWg(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OK(s,d),$async$Ap)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aw(),$async$Ap)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cM.gcr().aF(d)),$async$Ap)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.ak.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.zu(e),$async$Ap)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.ET(e,j),$async$Ap)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ap,w)},
SQ(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SQ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zu(d),$async$SQ)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cA.aA(99999)
n=p.b
l=o.type
l.toString
k=B.fQ7(n,null,l)
l=o.size
l.toString
j=new A.O(Date.now(),0,!1).a4().aa()
i=new B.j8(m,n,k,l,j,"From folder",null,B.aWg(),null)
$.adJ.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_l(o),$async$SQ)
case 7:g=a1
x=g!=null&&!C.aE.gah(g)?8:10
break
case 8:$.EJ.m(0,h,g)
$.P0.m(0,h,g)
B.OK(h,g)
x=9
break
case 10:x=11
return A.b(B.aL_(d,m,o),$async$SQ)
case 11:case 9:r.G(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.ET(d,t),$async$SQ)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SQ,w)},
fAy(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fAy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fQ7(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GR(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aE.gah(s)){v=B.Ap(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAy,w)},
GR(d,e,f,g,h,i){return B.hiv(d,e,f,g,h,i)},
hiv(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GR=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cA.aA(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.IF(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GR)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ci(m)){x=6
break}J.fS(n,m)
o+=J.a9(m)
case 9:if(!(J.a9(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PN(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kn(0,1048576,J.a9(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pf(k,l),$async$GR)
case 11:J.cf(q,k);++p
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
return A.b(j.a9(0),$async$GR)
case 12:x=s.pop()
break
case 5:x=J.a9(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pf(k,new Uint8Array(A.cl(n))),$async$GR)
case 15:J.cf(q,k)
case 14:if(J.a9(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.adg(r,q,g),$async$GR)
case 16:f=new B.j8(i,a1,a0,g,new A.O(Date.now(),0,!1).a4().aa(),a2,null,B.aWg(),null)
x=17
return A.b(B.zu(d),$async$GR)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.ET(d,e),$async$GR)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GR,w)},
SS(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SS=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adJ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_l(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ada(s),$async$SS)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pe(u[o]),$async$SS)
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
v=A.B0(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.P0.h(0,s)
if(i==null)i=$.EJ.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qM(d,e),$async$SS)
case 12:i=a0
if(i!=null&&!C.aE.gah(i))$.P0.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.B0(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SS,w)},
fQ7(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gai(x):""
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
qM(d,e){return B.hix(d,e)},
hix(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qM=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.P0.h(0,f)
if(e==null)e=$.EJ.h(0,f)
if(e!=null&&!C.aE.gah(e)){v=e
x=1
break}s=$.adJ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_l(s),$async$qM)
case 9:r=a3
if(r!=null&&!C.aE.gah(r)){$.EJ.m(0,f,r)
$.P0.m(0,f,r)
B.OK(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a4(d)
$.ak.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ada(f),$async$qM)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.av3(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pe(g[l]),$async$qM)
case 16:k=a3
if(k!=null&&!C.aE.gah(k))n.G(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.akS()
if(!C.aE.gah(r)){$.EJ.m(0,f,r)
$.P0.m(0,f,r)
v=r
x=1
break}$.ak.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKH(f),$async$qM)
case 17:j=a3
if(j!=null&&!C.aE.gah(j)){$.P0.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SS(a0,a1,0,g),$async$qM)
case 20:i=a3
if(i!=null&&!C.aE.gah(i)){h=new Uint8Array(A.cl(i))
$.EJ.m(0,f,h)
$.P0.m(0,f,h)
B.OK(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qM,w)},
hiA(d){var x,w,v=$.adJ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hiB(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hB([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hiy(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amv(d,e,f,g,h){return B.hiz(d,e,f,g,h)},
hiz(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amv=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adJ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_l(s),$async$amv)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qM(g,e),$async$amv)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.a9(r)/2|0,J.a9(r))
n=$.eM().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w5(h,r,new A.Cu(!0,e.c)),$async$amv)
case 12:f.$2(J.a9(r),J.a9(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
$.ak.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amv,w)},
fQ9(d,e,f,g,h){var x,w,v,u,t=$.fQ8
$.fQ8=t+1
x=Date.now()
w=""+1000*x+"_"+C.cA.aA(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2x.m(0,t,new B.br8(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.av3(u)))
return t},
fAz(d){var x=0,w=A.j(y.H)
var $async$fAz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fAz,w)},
GS(d,e){var $async$GS=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adJ.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.U(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.py(B.SS(d,e,p,o<q?o:q),$async$GS,w)
case 8:n=a1
x=n!=null&&!C.aE.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.py(A.Ei(n),$async$GS,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.py(B.ada("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GS,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.py(B.Pe(h[l]),$async$GS,w)
case 18:k=a1
x=k!=null&&!C.aE.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.py(A.Ei(k),$async$GS,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.py(B.qM(d,e),$async$GS,w)
case 22:j=a1
x=j!=null&&!C.aE.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.py(A.Ei(A.B0(j,p,o<i?o:i)),$async$GS,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.py(null,0,w)
case 2:return A.py(t.at(-1),1,w)}})
var x=0,w=A.fYB($async$GS,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h_o(w)},
aWi(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2x.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.G(0,e)
case 3:if(!(u.gH(u)>=1048576)){x=4
break}x=5
return A.b(t.a24(),$async$aWi)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWi,w)},
SR(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2x.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a24(),$async$SR)
case 3:u=r.w
if(u.length===0||r.z<=0){$.ak.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.adg(r.c,u,r.z),$async$SR)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.O(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aWg(),null)
u=r.a
x=5
return A.b(B.zu(u),$async$SR)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.ET(u,s),$async$SR)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SR,w)},
a4L(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2x.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aen(u[s]),$async$a4L)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4L,w)},
c2z(d,e,f){var x=0,w=A.j(y.H)
var $async$c2z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw8(d,e,f),$async$c2z)
case 2:return A.h(null,w)}})
return A.i($async$c2z,w)},
c2A(d,e,f){var x=0,w=A.j(y.H)
var $async$c2A=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw9(d,e,f),$async$c2A)
case 2:return A.h(null,w)}})
return A.i($async$c2A,w)},
D9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zu(d),$async$D9)
case 2:p=g
J.n_(p,new B.c2y(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EJ.W(0,v)
$.adJ.W(0,e)
x=3
return A.b(B.ada(v),$async$D9)
case 3:u=g
$.eXt.W(0,v)
x=4
return A.b(A.aw(),$async$D9)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$D9)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$D9)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aen(s[q]),$async$D9)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aen(v),$async$D9)
case 13:x=14
return A.b(B.ET(d,p),$async$D9)
case 14:return A.h(null,w)}})
return A.i($async$D9,w)},
aWh(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qM(d,e),$async$aWh)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eYh(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWh,w)},
zu(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$zu)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aD(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f58(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zu,w)},
ET(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$ET=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$ET)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.f91(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$ET)
case 3:return A.h(null,w)}})
return A.i($async$ET,w)},
bw8(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zu(d),$async$bw8)
case 3:u=h
t=J.cB(u)
s=t.bg(u,new B.f3N(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azS(f))
x=4
return A.b(B.ET(d,u),$async$bw8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw8,w)},
bw9(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zu(d),$async$bw9)
case 3:u=h
t=J.cB(u)
s=t.bg(u,new B.f3O(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cyB(f))
x=4
return A.b(B.ET(d,u),$async$bw9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw9,w)},
a9u:function a9u(d){this.a=d},
f0O:function f0O(){},
f55:function f55(d,e){this.a=d
this.b=e},
f56:function f56(d){this.a=d},
f57:function f57(){},
c2y:function c2y(d){this.a=d},
br8:function br8(d,e,f,g,h,i,j,k,l){var _=this
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
f58:function f58(){},
f91:function f91(){},
f3N:function f3N(d){this.a=d},
f3O:function f3O(d){this.a=d},
a4M(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bf(d,new B.c2D())?3:4
break
case 3:x=5
return A.b(B.aWj(d,e),$async$a4M)
case 5:u=g
if(u!=null){t=u.c
B.LC(d,u.b,e,t)}v=u
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
return A.b(B.aWe(s),$async$a4M)
case 10:case 9:if(g){v=new A.O7(1,D.OJ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.ST(d,e),$async$a4M)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SY(!0,!0,d,e),$async$a4M)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.LC(d,D.xQ,e,t)
v=new A.O7(p,D.xQ,t)
x=1
break}v=B.c2C(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4M,w)},
ST(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$ST=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4O(null,d,e),$async$ST)
case 3:p=g
try{u=C.Q.aD(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.a9(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aWd(p,d.length,e),$async$ST)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2A(e,C.d.gI(d).a,r.b),$async$ST)
case 7:case 6:q=r.a
x=8
return A.b(B.LC(d,D.OJ,e,q),$async$ST)
case 8:v=new A.O7(d.length,D.OJ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ST,w)},
SU(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lZ(D.m2)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4N(d,e),$async$SU)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c2v(s,d,e,t),$async$SU)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aWe(t),$async$SU)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qM(e,d),$async$SU)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.ST(A.a([d],y.r),e),$async$SU)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SU,w)},
SW(){var x=0,w=A.j(y.H)
var $async$SW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fAs(),$async$SW)
case 2:x=3
return A.b(B.aN3(),$async$SW)
case 3:return A.h(null,w)}})
return A.i($async$SW,w)},
a4N(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWg()
x=3
return A.b(B.c2z(e,d.a,u),$async$a4N)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4N,w)},
LC(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$LC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OJ&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4N(p,f),$async$LC)
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
return A.b(B.c2u(o,p,u,f),$async$LC)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c2v(o,p,f,t),$async$LC)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c2t(o,u,p,f),$async$LC)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$LC,w)},
aWj(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2B(e,d),$async$aWj)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SY(!1,!0,d,e),$async$aWj)
case 4:u=g
if(u!=null){t=u.b
v=new A.O7(u.a,D.xQ,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWj,w)},
c2B(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SS(d,s,0,1),$async$c2B)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.K)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2B,w)},
c2C(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4O(null,d,e),$async$c2C)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fQ6(u)
if(t.length>800){v=null
x=1
break}v=new A.O7(d.length,D.dda,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2C,w)},
amw(d,e,f){return B.hiE(d,e,f)},
hiE(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amw=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.mf(g,1)
x=B.fAx(g)?3:4
break
case 3:x=5
return A.b(B.c2w(g),$async$amw)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cS(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mf(g,13))
try{k=B.Da(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a4(a1)
$.ak.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cS(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mf(g,13))
u=9
x=12
return A.b(B.aWc(q),$async$amw)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SV(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a4(f)
$.ak.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fAw(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SV(n,a0)
v=k
x=1
break}catch(a1){m=A.a4(a1)
$.ak.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cS(g,"N2|")){v=B.GT(C.a.i(J.mf(g,3)),d,a0)
x=1
break}if(J.cS(g,"NGMYDOCSYNC2|")){v=B.GT(C.a.i(J.mf(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GT(h,d,a0)
x=1
break}if(J.eQ(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SV(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amw,w)},
GT(d,e,f){return B.hiC(d,e,f)},
hiC(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GT=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cq(A.t(s)+"/manifest.json",0,null)
q=A.cq(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aW4(r),$async$GT)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aW4(A.cq(s,0,null)),$async$GT)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c28(o,r,a1,n,a2),$async$GT)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.c27(q),$async$GT)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SV(l,a2),$async$GT)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ci(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a4(d)
$.ak.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GT,w)},
a4O(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4O=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qM(f,r),$async$a4O)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcr().aF(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.O(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.aj(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4O,w)},
SV(d,e){return B.hiD(d,e)},
hiD(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SV=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aD(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.q(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.q(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.q(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.q(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.y(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aU(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.a9(j)===0){x=7
break}i=C.cw.aF(j)
d=J.a9(q)!==0?q:null
x=9
return A.b(B.Ap(i,a3,d,k,l,o),$async$SV)
case 9:h=a5
if(h!=null)J.cf(n,h)
x=7
break
case 8:f=J.a9(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a4(a1)
$.ak.$1("[doc share bundle] "+A.t(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SV,w)},
LB:function LB(d,e){this.a=d
this.b=e},
c2D:function c2D(){},
ZW(d){var x=A.L(d).ax.a===C.H,w=x?D.a9A:D.a7V,v=x?D.aaY:C.c,u=x?C.aO:C.M,t=x?C.bP:C.al,s=x?D.a8T:C.aJ
return new A.aD1([w,s,v,u,t,x?C.eY:C.bR])},
h49(d,e){var x=e?C.w.j(0.72):C.aV
return A.ce(null,x,!0,null,new B.ft2(e),d,null,!0,!0,y.N)},
c2i(d,e,f,g,h,i,j,k,l){return new B.SN(e,l,d,f,k,j,g,h,i,null)},
WY(d,e,f,g,h,i,j){return new B.b9C(g,h,j,e,i,d,f,null)},
ft2:function ft2(d){this.a=d},
WV:function WV(d,e){this.c=d
this.a=e},
awe:function awe(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cWG:function cWG(d){this.a=d},
cWE:function cWE(d){this.a=d},
cWF:function cWF(d){this.a=d},
bqO:function bqO(){},
SN:function SN(d,e,f,g,h,i,j,k,l,m){var _=this
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
aA7:function aA7(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dHq:function dHq(d){this.a=d},
dGO:function dGO(d,e){this.a=d
this.b=e},
dGP:function dGP(d,e){this.a=d
this.b=e},
dGn:function dGn(d,e,f){this.a=d
this.b=e
this.c=f},
dGm:function dGm(d){this.a=d},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGt:function dGt(d,e,f){this.a=d
this.b=e
this.c=f},
dGs:function dGs(d){this.a=d},
dHe:function dHe(d,e){this.a=d
this.b=e},
dHf:function dHf(d){this.a=d},
dGL:function dGL(d,e,f){this.a=d
this.b=e
this.c=f},
dGI:function dGI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dGr:function dGr(d){this.a=d},
dGT:function dGT(d){this.a=d},
dGS:function dGS(){},
dGx:function dGx(d){this.a=d},
dHb:function dHb(d,e){this.a=d
this.b=e},
dHc:function dHc(d,e){this.a=d
this.b=e},
dHd:function dHd(d,e){this.a=d
this.b=e},
dGJ:function dGJ(d,e){this.a=d
this.b=e},
dGK:function dGK(d,e){this.a=d
this.b=e},
dH4:function dH4(d,e){this.a=d
this.b=e},
dH0:function dH0(d){this.a=d},
dH_:function dH_(d){this.a=d},
dH1:function dH1(){},
dH2:function dH2(){},
dH3:function dH3(d,e){this.a=d
this.b=e},
dH5:function dH5(){},
dH6:function dH6(d){this.a=d},
dGZ:function dGZ(d,e){this.a=d
this.b=e},
dGU:function dGU(d){this.a=d},
dGV:function dGV(d){this.a=d},
dGW:function dGW(d){this.a=d},
dGX:function dGX(d){this.a=d},
dGY:function dGY(d){this.a=d},
dGu:function dGu(){},
dGv:function dGv(d){this.a=d},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGp:function dGp(d,e,f){this.a=d
this.b=e
this.c=f},
dGM:function dGM(d){this.a=d},
dGN:function dGN(d,e,f){this.a=d
this.b=e
this.c=f},
dGG:function dGG(d,e){this.a=d
this.b=e},
dGC:function dGC(d){this.a=d},
dGz:function dGz(d,e,f){this.a=d
this.b=e
this.c=f},
dGD:function dGD(d){this.a=d},
dGE:function dGE(d){this.a=d},
dGF:function dGF(){},
dGH:function dGH(d,e){this.a=d
this.b=e},
dGA:function dGA(d){this.a=d},
dGy:function dGy(d,e,f){this.a=d
this.b=e
this.c=f},
dGB:function dGB(){},
dGR:function dGR(d){this.a=d},
dGQ:function dGQ(d,e){this.a=d
this.b=e},
dHa:function dHa(d,e){this.a=d
this.b=e},
dH7:function dH7(d){this.a=d},
dH8:function dH8(d,e){this.a=d
this.b=e},
dH9:function dH9(d){this.a=d},
dHn:function dHn(d){this.a=d},
dHl:function dHl(d){this.a=d},
dHm:function dHm(d){this.a=d},
dHo:function dHo(){},
dHp:function dHp(d,e){this.a=d
this.b=e},
dHh:function dHh(d,e){this.a=d
this.b=e},
dHi:function dHi(d,e,f){this.a=d
this.b=e
this.c=f},
dHg:function dHg(d,e,f){this.a=d
this.b=e
this.c=f},
dHj:function dHj(d,e){this.a=d
this.b=e},
dHk:function dHk(d,e){this.a=d
this.b=e},
awb:function awb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9B:function b9B(d,e,f){this.c=d
this.d=e
this.a=f},
cWC:function cWC(){},
cWD:function cWD(){},
a9O:function a9O(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cX_:function cX_(){},
cWZ:function cWZ(d){this.a=d},
WX:function WX(d,e,f){this.c=d
this.d=e
this.a=f},
awg:function awg(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWW:function cWW(d){this.a=d},
cWX:function cWX(d,e,f){this.a=d
this.b=e
this.c=f},
cWY:function cWY(d,e){this.a=d
this.b=e},
cWU:function cWU(d,e){this.a=d
this.b=e},
cWS:function cWS(d){this.a=d},
cWQ:function cWQ(d){this.a=d},
cWN:function cWN(d){this.a=d},
cWT:function cWT(d){this.a=d},
cWP:function cWP(d){this.a=d},
cWV:function cWV(d){this.a=d},
cWR:function cWR(d){this.a=d},
cWO:function cWO(d){this.a=d},
WU:function WU(d,e,f){this.c=d
this.d=e
this.a=f},
awd:function awd(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cWz:function cWz(d){this.a=d},
cWy:function cWy(d,e){this.a=d
this.b=e},
cWA:function cWA(d){this.a=d},
cWx:function cWx(d,e){this.a=d
this.b=e},
cWB:function cWB(d){this.a=d},
cWw:function cWw(d,e){this.a=d
this.b=e},
cWs:function cWs(d){this.a=d},
cWt:function cWt(d){this.a=d},
cWu:function cWu(d,e){this.a=d
this.b=e},
cWv:function cWv(d){this.a=d},
NL:function NL(d,e,f){this.c=d
this.d=e
this.a=f},
awj:function awj(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cXc:function cXc(d){this.a=d},
cXd:function cXd(d){this.a=d},
cXe:function cXe(d){this.a=d},
cXf:function cXf(d){this.a=d},
cXg:function cXg(d,e){this.a=d
this.b=e},
cXh:function cXh(d){this.a=d},
cXj:function cXj(d){this.a=d},
cXi:function cXi(d){this.a=d},
WZ:function WZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
awh:function awh(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cX8:function cX8(d,e){this.a=d
this.b=e},
cX9:function cX9(d,e){this.a=d
this.b=e},
cX0:function cX0(d,e,f){this.a=d
this.b=e
this.c=f},
cX1:function cX1(d){this.a=d},
cX2:function cX2(){},
cX7:function cX7(){},
cX3:function cX3(d,e){this.a=d
this.b=e},
cX4:function cX4(d,e){this.a=d
this.b=e},
cX5:function cX5(d,e){this.a=d
this.b=e},
cX6:function cX6(d,e){this.a=d
this.b=e},
a9M:function a9M(d,e){this.c=d
this.a=e},
cWr:function cWr(d){this.a=d},
WT:function WT(d){this.a=d},
awc:function awc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
X_:function X_(d,e){this.c=d
this.a=e},
awi:function awi(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cXb:function cXb(d){this.a=d},
cXa:function cXa(d){this.a=d},
b9C:function b9C(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hiF(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"VT"+C.d.fM(v)},
LD(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$LD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$LD)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_video_relay_v1",null,!1,C.bD),$async$LD)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a4(n)
$.ak.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$LD,w)},
a4P(d){return B.hiG(d)},
hiG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$a4P)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cz,null),$async$a4P)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.ak.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4P,w)},
SX(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LD(),$async$SX)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dR(A.Z(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.O(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4P(s),$async$SX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SX,w)},
SY(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SY=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bU(),$async$SY)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bh(f,!0,y.U)
else{t=A.T(f).k("a5<1>")
u=A.z(new A.a5(f,new B.c2F(),t),t.k("F.E"))}if(u.length===0){v=null
x=1
break}s=B.hiF()
t=A.T(u).k("J<1,a0<n,aB>>")
r=A.z(new A.J(u,new B.c2G(s),t),t.k("ai.E"))
x=6
return A.b(B.LD(),$async$SY)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4P(q),$async$SY)
case 7:x=8
return A.b(B.a4Q(r,u,g,s),$async$SY)
case 8:v=new A.bkZ(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SY,w)},
amx(d){var x=0,w=A.j(y.y),v,u,t
var $async$amx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.LD(),$async$amx)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amx,w)},
c2H(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.LD(),$async$c2H)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2H,w)},
a4Q(d,e,f,g){return B.hiH(d,e,f,g)},
hiH(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4Q=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.a9(q)===0){x=8
break}x=10
return A.b(B.amv("media",r,new B.c2E(s,e,g),f,q),$async$a4Q)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SX(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4Q)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SX(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4Q)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
$.ak.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SX(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4Q)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4Q,w)},
Da(d,e,f){return B.hiI(d,e,f)},
hiI(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Da=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bU(),$async$Da)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amx(b3),$async$Da)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kV,null,g),$async$Da)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amx(b3),$async$Da)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.LD(),$async$Da)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.L(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ci(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gH(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a6(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.a9(m)===0){x=11
break}u=14
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.op(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a84(a8.a,b0,"media",a8.d,a9).Bw(m)
k=A.cq(l,0,null)
x=17
return A.b(B.aW5(k,n,o,s,b7),$async$Da)
case 17:j=c0
if(j!=null){J.cf(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a4(b4)
$.ak.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.a9(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gag(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.a9(h)!==0?25:26
break
case 25:u=28
a2=$.eM().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.op(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a84(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Da)
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
a0=A.dR(A.Z(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4P(e),$async$Da)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Da,w)},
c2F:function c2F(){},
c2G:function c2G(d){this.a=d},
c2E:function c2E(d,e,f){this.a=d
this.b=e
this.c=f},
aN3(){var x=0,w=A.j(y.H),v,u
var $async$aN3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.htx=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aN3)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aN3)
case 3:u=$.fFx
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aN3)
case 4:$.fFx=$.hBz=$.hBA=null
return A.h(null,w)}})
return A.i($async$aN3,w)},
f8E(d){var x=0,w=A.j(y.H),v,u
var $async$f8E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2c){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f8F(new A.bL(u,y.aY))
x=3
return A.b(u.i0(0,C.hs,new B.f8G()),$async$f8E)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f8E,w)},
hBx(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hip(x):x},
fFB(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amz(u)
x=1
break}v=B.fAw(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFB,w)},
fFA(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.amA(u)
x=1
break}v=B.fAw(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFA,w)},
foR(d){var x=0,w=A.j(y.T),v
var $async$foR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amA(d),$async$foR)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foR,w)},
bx_(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bx_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fFA(d),$async$bx_)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aD(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.a9(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx_,w)},
eZ5(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eZ5=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SR(g)
x=1
break}if(d.gH(d)<=0){v=null
x=1
break}v=B.Ap(d.akS(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZ5,w)},
EV(d,e,f){return B.hDM(d,e,f)},
hDM(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EV=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fFB(a1),$async$EV)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aD(0,e,null)
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
break}p=J.a9(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h5X().aA6(D.d1X,null),$async$EV)
case 4:l=d.fFx=a4
f.a="file"
f.b="application/octet-stream"
k=new A.av3(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f98(f,k,new B.f99(f,a2,k,j,a0,p),a2,j,a0,p,new A.bL(t,y.ch))
x=5
return A.b(l.a4V(0,new B.V3(r,"offer")),$async$EV)
case 5:d=l
x=7
return A.b(l.ahM(0),$async$EV)
case 7:x=6
return A.b(d.a4N(0,a4),$async$EV)
case 6:x=8
return A.b(B.f8E(l),$async$EV)
case 8:x=9
return A.b(l.alC(),$async$EV)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hBx(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amB(m,h),$async$EV)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fQ6(h)
case 11:v=new A.bkh(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EV,w)},
f8F:function f8F(d){this.a=d},
f8G:function f8G(){},
f99:function f99(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f98:function f98(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f97:function f97(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hFy(d){switch(d){case"new":return D.dQQ
case"checking":return D.dQR
case"connected":return D.dQT
case"completed":return D.dQS
case"failed":return D.dQV
case"disconnected":return D.dQW
case"closed":return D.aFC
case"count":return D.dQU}return D.aFC},
hFz(d){switch(d){case"new":return D.aFD
case"gathering":return D.dQX
case"complete":return D.a2c}return D.aFD},
hPA(d){switch(d){case"stable":return D.dQY
case"have-local-offer":return D.dQZ
case"have-local-pranswer":return D.dR0
case"have-remote-offer":return D.dR_
case"have-remote-pranswer":return D.dR1
case"closed":return D.aFJ}return D.aFJ},
hNU(d){switch(d){case"new":return D.aFG
case"connecting":return D.aFH
case"connected":return D.aFI
case"closed":return D.a2d
case"disconnected":return D.aFF
case"failed":return D.aFE}return D.a2d},
a73:function a73(d,e){this.a=d
this.b=e},
MD:function MD(d,e){this.a=d
this.b=e},
V2:function V2(d,e){this.a=d
this.b=e},
MC:function MC(d,e){this.a=d
this.b=e},
DD:function DD(d,e){this.a=d
this.b=e},
cdr:function cdr(){},
fCc(d){var x=new B.DC()
x.a=d
x.b=!0
return x},
DC:function DC(){this.b=this.a=$},
a72:function a72(){},
aqM:function aqM(){},
V3:function V3(d,e){this.a=d
this.b=e},
fAs(){var x=0,w=A.j(y.H)
var $async$fAs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fAs,w)},
fAv(d,e,f){var x=0,w=A.j(y.T),v
var $async$fAv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lZ(D.m2))){v=null
x=1
break}v=B.fp5(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAv,w)},
fQ6(d){var x,w=F.a7r.a1P(C.dB.aF(d),null)
if(w.length===0){x=C.dB.aF(d)
return C.cM.gcr().aF(x)}return C.cM.gcr().aF(w)},
hio(d){var x,w,v=C.cw.aF(d)
try{x=C.c0.c6(0,F.a7q.b77(v,!1))
return x}catch(w){x=C.c0.c6(0,v)
return x}},
fAw(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hio(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c0.c6(0,C.cw.aF(x))
return v}catch(u){return x}}return null},
hip(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hiq(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"DS"+C.d.fM(v)},
aWb(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aWb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bD),$async$aWb)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
$.ak.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aWb,w)},
c2n(d,e){return B.hir(d,e)},
hir(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c2n=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cz,null),$async$c2n)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
$.ak.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2n,w)},
aWe(d){var x=0,w=A.j(y.y),v,u,t
var $async$aWe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWb(d),$async$aWe)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWe,w)},
aWd(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aWd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hiq()
r=C.a.i(f)
t=C.dB.aF(s)
x=3
return A.b(B.c2n(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcr().aF(t),"usesRemaining",999999,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aWd)
case 3:if(!h){v=null
x=1
break}v=new A.Z_("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWd,w)},
aWc(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aWc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.a9(o)===0){v=null
x=1
break}x=3
return A.b(B.aWb(o),$async$aWc)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.a9(u)===0){v=null
x=1
break}try{t=C.c0.c6(0,C.cw.aF(u))
if(J.iK(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a4(n)
$.ak.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aWc,w)},
c2o(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c2o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.a9(q)===0){x=1
break}u=4
x=7
return A.b(X.bxV("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cz),$async$c2o)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.ak.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2o,w)},
aWf(d){var x=0,w=A.j(y.h),v,u,t
var $async$aWf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GP(),$async$aWf)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWf,w)},
ams(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ams=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$ams)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aWf(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ams,w)},
amq(d,e){var x=0,w=A.j(y.H)
var $async$amq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amq)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amq)
case 2:return A.h(null,w)}})
return A.i($async$amq,w)},
a4H(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4H=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$a4H)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GP(),$async$a4H)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4G(s),$async$a4H)
case 5:x=6
return A.b(B.amq(f,u),$async$a4H)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
a4I(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4I=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$a4I)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GP(),$async$a4I)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.Z(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.m(0,"schoolName",q)
p.m(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.m(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.m(0,"loginCode",q)
s.W(u,t)
s.m(u,o,p)
x=8
return A.b(B.amq(g,q),$async$a4I)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4G(u),$async$a4I)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4I,w)},
a4J(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4J=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$a4J)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GP(),$async$a4J)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aW8(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aw(),$async$a4J)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.O(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4J)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4J,w)},
c2p(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c2p=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.a9(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c2p)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aD(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.Z(q,y.N,y.z)
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
return A.i($async$c2p,w)},
GQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2p(d),$async$GQ)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aWf(t),$async$GQ)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amr(d),$async$GQ)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aW8(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amr(d),$async$GQ)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GQ,w)},
amr(d){var x=0,w=A.j(y.H)
var $async$amr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amr)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amr)
case 2:return A.h(null,w)}})
return A.i($async$amr,w)},
aWg(){var x,w=$.oW(),v=J.dZ(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(32)]
return C.d.fM(v)},
a4K(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fAx(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c2s(d){return B.hit(d)},
hit(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c2s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4K(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bD),$async$c2s)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
$.ak.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2s,w)},
amu(d,e){return B.hiu(d,e)},
hiu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4K(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cz,null),$async$amu)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
$.ak.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amu,w)},
c2u(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2u=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4K(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amu(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2u)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2u,w)},
c2t(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4K(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amu(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2t)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2t,w)},
c2v(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c2v=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4K(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amu(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2v,w)},
c2w(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c2w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fAx(d)){v=null
x=1
break}x=3
return A.b(B.c2s(d),$async$c2w)
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
return A.i($async$c2w,w)},
a4R(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4R=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$a4R)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bD),$async$a4R)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a4(n)
$.ak.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4R,w)},
amy(d){return B.hiJ(d)},
hiJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bU(),$async$amy)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cz,null),$async$amy)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.ak.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amy,w)},
amz(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.a9(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bU(),$async$amz)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4R(),$async$amz)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.a9(q)===0){v=null
x=1
break}u=6
p=C.c0.c6(0,C.cw.aF(q))
if(J.iK(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.Z(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.O(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amy(s),$async$amz)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a4(i)
$.ak.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amz,w)},
amB(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bU(),$async$amB)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4R(),$async$amB)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dR(A.Z(s,r,q),r,q)
r=C.dB.aF(C.a.i(e))
q.m(0,"answer",C.cM.gcr().aF(r))
q.m(0,"answerAt",new A.O(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amy(u),$async$amB)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amB,w)},
amA(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bU(),$async$amA)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4R(),$async$amA)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.a9(u)===0){v=null
x=1
break}try{r=C.c0.c6(0,C.cw.aF(u))
v=r
x=1
break}catch(n){t=A.a4(n)
$.ak.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amA,w)},
alB(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alB)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fI),$async$alB)
case 7:q=g
o=q
o=o==null?null:J.f1(J.w_(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.p()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$alB,w)},
hM0(d,e){var x,w,v=J.dZ(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fnu(d){return B.hM2(d)},
hM2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fnu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Je(d,3600),$async$fnu)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.ak.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fnu,w)},
BI(d,e,f,g,h,i){var x=null
return B.hM_(d,e,f,g,h,i)},
hM_(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BI=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fQ9(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fAz(r),$async$BI)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fnu(o),$async$BI)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4L(r),$async$BI)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIs)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.K3(A.a([],g))
x=15
return A.b(d.eM(0,A.arB("GET",A.cq(n,0,null))).cJ(0,C.Dq),$async$BI)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4L(r),$async$BI)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.IF(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BI)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.a9(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWi(r,k),$async$BI)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BI)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.SR(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a4(a4)
$.ak.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4L(r),$async$BI)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BI,w)},
aMN(d){return B.hM1(d)},
hM1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMN)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.ak.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMN,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[210]
H=c[101]
P=c[191]
E=c[183]
G=c[83]
Q=c[155]
R=c[102]
S=c[189]
I=c[215]
K=c[221]
B=a.updateHolder(c[21],B)
D=c[219]
T=c[154]
L=c[173]
U=c[62]
V=c[222]
W=c[68]
X=c[53]
M=c[82]
Y=c[220]
N=c[112]
B.cds.prototype={
aA6(d,e){return this.cA6(d,e)},
cA6(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aA6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.S(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.k2(A.cu(t)))
t=J.k(u)
v=B.hnh(C.cM.gcr().aF(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aA6,w)}}
B.b0n.prototype={
brW(d){var x=this,w=x.w
w.onclose=A.h6(new B.cdn(x))
w.onopen=A.h6(new B.cdo(x))
w.onmessage=A.h6(new B.cdp(x))
w.onbufferedamountlow=A.h6(new B.cdq(x))},
gdh(d){return this.x},
ae9(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ae9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.DC()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fCc(J.f1(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ae9)
case 8:v=t.fCc(s.akP(f,0,null))
x=1
break
case 7:case 4:v=B.fCc(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ae9,w)}}
B.b0o.prototype={
brX(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h6(new B.cdt(x)))
w.addEventListener("icecandidate",A.h6(new B.cdu(x)))
w.addEventListener("iceconnectionstatechange",A.h6(new B.cdv(x)))
w.onicegatheringstatechange=A.h6(new B.cdw(x))
w.addEventListener("signalingstatechange",A.h6(new B.cdx(x)))
if(!$.fJ_())w.addEventListener("connectionstatechange",A.h6(new B.cdy(x)))
w.addEventListener("negotiationneeded",A.h6(new B.cdz(x)))
w.addEventListener("track",A.h6(new B.cdA(x)))},
ahM(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k2(A.cu(A.S(y.N,y.z)))),y.aQ),$async$ahM)
case 3:t=f
v=new B.V3(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
a4N(d,e){return this.bhA(0,e)},
bhA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4N)
case 2:return A.h(null,w)}})
return A.i($async$a4N,w)},
a4V(d,e){return this.bhQ(0,e)},
bhQ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4V)
case 2:return A.h(null,w)}})
return A.i($async$a4V,w)},
alC(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.V3(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alC,w)},
bx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f6(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx,w)}}
B.a9N.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WW.prototype={
S(){return new B.awf()},
gd6(){return this.c}}
B.awf.prototype={
Z(){this.a0()
this.ab_()},
ab_(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aW9(u.e,u.c),$async$ab_)
case 2:t=e
if(v.c!=null)v.n(new B.cWK(v,t))
return A.h(null,w)}})
return A.i($async$ab_,w)},
Om(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Om=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amn(t.e,t.c,!1),$async$Om)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ese)
x=1
break}x=4
return A.b(B.a4F(u.a.c,"individual"),$async$Om)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3l(A.eH(new B.cWH(u),!1,null,y.H)),$async$Om)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
HF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f6Q(o),$async$HF)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4J(o.e,r,s,q),$async$HF)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.epj)
x=1
break}x=5
return A.b(B.a4F(u.a.c,"member"),$async$HF)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3l(A.eH(new B.cWJ(u),!1,null,y.H)),$async$HF)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HF,w)},
wW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4E(t.e,o,t.f,t.r,t.w,s),$async$wW)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4F(u.a.c,"org_owner"),$async$wW)
case 4:x=5
return A.b(B.ams(u.a.c),$async$wW)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f7k(o),$async$wW)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4H(s,t,o,q.c),$async$wW)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.epg)
x=1
break}x=10
return A.b(B.ams(u.a.c),$async$wW)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3l(A.eH(new B.cWI(u),!1,null,y.H)),$async$wW)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wW,w)},
B(d){var x,w,v,u=this,t=null,s=A.L(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fAu(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.fz,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eK0,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.f0v,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bHq,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lk(new B.cWM(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ab)
if(!u.a.x)C.d.v(p,A.a([new B.aae(C.eG,C.asL,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc5h(),t),C.ab],v))
p.push(new B.aae(C.o5,C.Zi,"Team Member","Sign in with your organization access code + password",u.gc66(),t))
p.push(C.ab)
p.push(new B.aae(C.afW,C.a_E,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5D(),t))
return A.cg(t,r,A.br(!0,A.ch(A.u(p,C.ad,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adl,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aae.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.eq(A.B(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a1,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.en,A.D(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.op,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.L(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A4,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayJ.prototype={}
B.aBQ.prototype={}
B.j8.prototype={
lZ(d){var x=this.b,w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gamd(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ac(){var x,w=this,v=A.S(y.N,y.z)
v.m(0,"id",w.a)
v.m(0,"name",w.b)
v.m(0,"mime",w.c)
v.m(0,"sizeBytes",w.d)
v.m(0,"createdAt",w.e)
x=w.f
if(x!=null&&C.a.i(x).length!==0)v.m(0,"note",x)
x=w.r
if(x!=null&&C.a.i(x).length!==0)v.m(0,"fromSender",x)
x=w.w
if(x!=null&&C.a.i(x).length!==0)v.m(0,"shortCode",x)
x=w.x
if(x!=null&&C.a.i(x).length!==0)v.m(0,"stashToken",x)
return v},
b6E(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cyB(d){return this.b6E(null,d)},
azS(d){return this.b6E(d,null)}}
B.SL.prototype={
S(){return new B.aA5(new A.cn(null,y.A))},
gd6(){return this.c}}
B.aA5.prototype={
Z(){this.a0()
this.ab0()},
ab0(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ao(u.a.c),$async$ab0)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dGj(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ab0,w)},
ab1(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ab1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$ab1)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.et8)
case 1:return A.h(v,w)}})
return A.i($async$ab1,w)},
Xo(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xo=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alB(s.d,4),$async$Xo)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_my_code_"+m+".png"),$async$Xo)
case 8:q=e
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a4(l)
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xo,w)},
aeC(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7E("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeC)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeC,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===C.H,n=o?C.iT:C.oO,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.as(new A.C(C.em,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZH,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a1,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.acW,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.G,C.aB.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.ch(A.u(A.a([x,C.ma,w,C.kb,new A.en(A.p(p,A.pi(p,p,!1,B.hik(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.ab,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kb,A.B(A.a([A.D(A.ey(M.Aj,C.R_,q.gbZv(),p),1),C.av,A.D(A.dk(C.xj,C.a4s,q.gbZw(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ey(L.Ya,D.eXK,q.gckd(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JZ,p,p,C.ah)
x=r}return A.cg(l,n,x,p,!1,!1,p,p)}}
B.SP.prototype={
S(){return new B.aA8(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aA8.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GO(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
Xp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GO(u.d.a.a)
if(t==null){u.n(new B.dHs(u))
x=1
break}u.n(new B.dHt(u))
s=u.a
r=s.c
x=3
return A.b(B.a4D(s.d,new B.dHu(u),t,r),$async$Xp)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dHv(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xp,w)},
a_t(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_t=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.n(new B.dHw(r))
u=4
q=J.fg(r.a.d)
x=7
return A.b(B.qM(r.a.c,q),$async$a_t)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dHx(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.a9(r.a.d)>1?"NGMY Doc Share ("+J.a9(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.af6(p,m,l,j,k),$async$a_t)
case 8:o=e
if(r.c!=null)r.n(new B.dHy(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a4(h)
if(r.c!=null)r.n(new B.dHz(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dHA(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_t,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===C.H,i=j?D.a9A:D.a7V,h=j?D.aaY:C.c,g=j?C.aO:C.M,f=j?C.bP:C.al,e=j?D.a8T:C.aJ
i=[i,e,h,g,f,j?C.eY:C.bR]
x=A.L(d).ax.a===C.H
w=J.a9(l.a.d)
h=i[0]
g=i[3]
g=A.eA(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e3(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e3(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bwv,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.en,A.D(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZH,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tD(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.beU()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bl(k,k,k,C.JS,k,k,"",k,!0,new A.b1(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b1(4,A.m(18),new A.ax(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.af,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dHB(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JI(l.a.d,4)
m=A.z(new A.J(m,new B.dHC(x,new A.aD1(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.a9(l.a.d)>4)m.push(new A.C(C.nk,A.d("+ "+(J.a9(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bs,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.enR)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dg(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.id,k,k,k,C.eF,k,k,k)],r))}e=A.D(A.ch(A.u(e,C.ad,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bhF,k,k,C.ah),1)
u=l.f?k:l.gcke()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(L.Ya,D.eYE,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ca,k,new A.b5(q,C.W),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZx()
t=A.bk(C.aB,k,k,0,C.c,k,C.mw,k,new A.b5(A.m(16),C.W),k,k,k)
return A.cg(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mx(new B.dHD(),A.u(A.a([e,new A.C(D.bh9,A.u(A.a([s,C.P,i,C.ab,A.bH(l.f?C.qN:D.eX9,u,t)],r),C.ad,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UE,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.beU.prototype={
nV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f3(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h0(C.bp,v.length),C.aL)}}
B.SM.prototype={
S(){return new B.aA6()}}
B.aA6.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,C.b_,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.bb(x,C.b_,C.aL),v)
u.f!==$&&A.aO()
u.f=new A.ao(C.aq,v)},
p(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.at()
v.O$=0
v=w.e
v===$&&A.c()
v.R$=x
v.O$=0
v=w.f
v===$&&A.c()
v.R$=x
v.O$=0
w.a2()},
ab2(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ab2=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dGk(r))
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
return A.b(B.a4I(p,m,n,o,C.a.i(l).length===0?null:l),$async$ab2)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.esK)
s=[1]
x=4
break}p.F(y.q).f.P(D.ern)
p=r.c
p.toString
A.a7(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dGl(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ab2,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax.a===C.H?C.iT:C.oO,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eQm,s,s,s,1,s,!0),p=A.p(s,D.baE,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.ES,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bDc,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bD8,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bDm,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
v=t.r?s:t.gbZy()
u=A.bk(C.aB,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cg(q,r,A.ch(A.u(A.a([p,C.d1,o,C.ab,x,C.ab,w,C.ma,A.bH(t.r?C.qN:C.aKY,v,u)],y.p),C.ad,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.a9u.prototype={}
B.br8.prototype={
a24(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a24=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gH(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akS()))
x=3
return A.b(B.Pf(t,s),$async$a24)
case 3:if(!e){$.ak.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a24,w)},
gd6(){return this.a}}
B.LB.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WV.prototype={
S(){return new B.awe(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.awe.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cWG(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZE(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZW(d),u=x.a.c,t=u?C.hm:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.G,C.aB.j(u?0.25:0.12),C.fz,32)],n),l=A.p(w,T.aiw,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.G,C.aB.j(0.4),C.cv,16)],n),C.aji,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tD(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqO()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bl(w,w,w,C.DC,w,w,"",w,!0,new A.b1(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b1(4,A.m(16),D.aPS),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.af,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cWE(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lA,w,w,w,w)
f=f[1]
f=A.D(A.dU(C.mW,new B.cWF(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.ca,w,new A.b5(A.m(14),C.W),new A.ax(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.cG,12)],n)
g=y.p
return A.ev(w,C.K,new A.cZ(Q.Ib,A.bQ(new A.C(C.wu,A.u(A.a([l,C.aN,k,C.P,j,C.dW,i,C.dW,A.B(A.a([f,C.av,A.D(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dM4,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZD(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LD,C.n),C.b7),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b7),w),w,w,w,C.K0,C.cX,w,w,w)}}
B.bqO.prototype={
nV(d,e){return e.ahH(e.a.toUpperCase())}}
B.SN.prototype={
S(){return new B.aA7(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.aA7.prototype={
Z(){var x=this
x.a0()
x.rQ()
x.w=A.dD(C.iW,new B.dHq(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SW()
this.a2()},
Zm(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LA(u.a.c),$async$Zm)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zu(u.a.c),$async$Zm)
case 4:u.n(new s.dGO(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zm,w)},
rQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LA(u.a.c),$async$rQ)
case 3:t=e
x=4
return A.b(B.zu(u.a.c),$async$rQ)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dGP(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LR(u.d)
B.Ao(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rQ,w)},
LR(d){return this.bvM(d)},
bvM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4N(r,u.a.c),$async$LR)
case 8:p=f
if(u.c==null){x=1
break}new B.dGn(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.lZ(D.m2))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SU(r,u.a.c),$async$LR)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zu(u.a.c),$async$LR)
case 12:u.n(new o.dGo(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LR,w)},
Md(d){return this.bBM(d)},
bBM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Md=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4N(d,u.a.c),$async$Md)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dGt(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$Md)
case 6:u.hM("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$Md)
case 7:u.hM("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Md,w)},
hM(d){var x=null,w=this.c
if(w==null)return
w.F(y.q).f.P(A.b_(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rR(d,e){return this.cuk(d,e)},
cuk(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dHe(r,e))
u=3
x=6
return A.b(d.$0(),$async$rR)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dHf(r))
$.eI.lU()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rR,w)},
gaQy(){var x=this.a
return x.f||x.r||x.w},
GH(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQy()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c2l(s,n,r,q,o,t),$async$GH)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fgY(o,u.a.c),$async$GH)
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
return A.b(B.BK(s,o,r,q,n,t),$async$GH)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GH,w)},
Yt(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ams(u.a.c),$async$Yt)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hM("No organization portal found.")
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
return A.b(A.a7(t,!1).cs(A.eH(new B.dGL(u,r,q),!1,null,y.H)),$async$Yt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yt,w)},
Zx(d){return this.ce1(d)},
ce0(){return this.Zx(1)},
ce1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQy()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amp(u.a.c),$async$Zx)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zx,w)},
a96(d,e,f){return this.bRQ(d,e,f)},
bRQ(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a96=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rR(new B.dGI(u,d,null,e,f),"Uploading\u2026"),$async$a96)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a96,w)},
bvV(){B.h3s(!1,new B.dGr(this))
return},
ciR(){this.n(new B.dGT(this))},
auC(){var x=0,w=A.j(y.H),v=this
var $async$auC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvV()
return A.h(null,w)}})
return A.i($async$auC,w)},
a92(){var x=0,w=A.j(y.H),v=this
var $async$a92=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGx(v),"Importing\u2026"),$async$a92)
case 2:return A.h(null,w)}})
return A.i($async$a92,w)},
Ql(d){return this.ctO(d)},
ctO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ql=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lZ(D.m2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cs(A.eH(new B.dHb(u,d),!1,null,y.H)),$async$Ql)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lZ(D.Nw)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cs(A.eH(new B.dHc(u,d),!1,null,y.H)),$async$Ql)
case 8:x=1
break
case 7:x=u.bSx(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cs(A.eH(new B.dHd(u,d),!1,null,y.H)),$async$Ql)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Ql,w)},
bSx(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.con,C.a.aV(x,w+1).toLowerCase())},
acm(d){return this.c5l(d)},
c5l(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lZ(D.m2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cs(A.eH(new B.dGJ(u,d),!1,null,y.H)),$async$acm)
case 5:x=1
break
case 4:u.n(new B.dGK(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acm,w)},
PK(d){return this.clE(d)},
clE(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$PK)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dH4(u,d),"Preparing QR\u2026"),$async$PK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
af0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$af0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dH5(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.z(new A.a5(t,new B.dH6(q),s),s.k("F.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PK(r),$async$af0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$af0,w)},
aeU(d){return this.cld(d)},
cld(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZW(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGZ(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeU)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Ql(d)
break
case"qr":u.PK(A.a([d],y.r))
break
case"send_my_code":u.c5W(A.a([d],y.r))
break
case"save":u.aeg(d)
break
case"delete":u.Hp(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeU,w)},
Vq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dGu(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.z(new A.a5(t,new B.dGv(q),s),s.k("F.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$Vq)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dGw(u,r),"Preparing file\u2026"),$async$Vq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vq,w)},
adt(d){return this.ccx(d)},
ccx(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h49(d,!1),$async$adt)
case 3:s=f
r=s==null
q=B.a4K(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adt,w)},
acs(){var x=0,w=A.j(y.H),v=this,u
var $async$acs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.foA(u,v.a.c),$async$acs)
case 2:return A.h(null,w)}})
return A.i($async$acs,w)},
bvU(){B.h3s(!1,new B.dGq(this,null))
return},
HE(d,e){return this.c5X(d,e)},
aW3(d){return this.HE(null,d)},
c5W(d){return this.HE(d,null)},
c5X(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a5<1>")
k=A.z(new A.a5(p,new B.dGM(s),o),o.k("F.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wh.c2().akd(!0,C.Wj,!1),$async$HE)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.rR(new B.dGN(l,s,r),"Preparing\u2026"),$async$HE)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a4(j)
$.ak.$1("[doc share send my code pick] "+A.t(q))
s.hM("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hM("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bz1(p,l,e,s.a.c),$async$HE)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HE,w)},
GW(d){return this.bRD(d)},
bRD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hij(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aW3(t),$async$GW)
case 8:x=6
break
case 7:u.hM("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ad("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hM("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.rR(new B.dGG(u,d),"Receiving video\u2026"),$async$GW)
case 11:x=1
break
case 10:x=12
return A.b(u.rR(new B.dGH(u,d),"Receiving\u2026"),$async$GW)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GW,w)},
CY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BE()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adt(t),$async$CY)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GW(s),$async$CY)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cs(A.eH(new B.dGR(u),!1,null,y.N)),$async$CY)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rQ(),$async$CY)
case 10:x=1
break
case 9:x=11
return A.b(u.GW(C.a.i(r)),$async$CY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CY,w)},
aeg(d){return this.chs(d)},
chs(d){var x=0,w=A.j(y.H),v=this
var $async$aeg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGQ(v,d),"Saving\u2026"),$async$aeg)
case 2:return A.h(null,w)}})
return A.i($async$aeg,w)},
Hp(d){return this.bE3(d)},
bE3(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hp)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c2o(t),$async$Hp)
case 6:case 5:s=d.a
x=7
return A.b(B.D9(u.a.c,s),$async$Hp)
case 7:u.r.W(0,s)
x=8
return A.b(u.rQ(),$async$Hp)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hp,w)},
af6(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZW(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dHa(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$af6)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acs()
break
case"import":u.a92()
break}case 1:return A.h(v,w)}})
return A.i($async$af6,w)},
bZB(d){var x=d.c
if(C.a.a_(x,"video/")||d.lZ(D.m2))return C.pa
if(C.a.a_(x,"image/")||d.lZ(D.Nw))return C.rT
if(C.a.q(x,"pdf"))return E.Lc
return D.agl},
B(d){var x,w,v=this,u=null,t=B.ZW(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EL,u,u,u,new B.dHl(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bx0,u,u,u,v.e?u:v.gc5E(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gciQ()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.brq:E.agK,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y7,u,u,u,v.e?u:v.gbZC(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.ns,u,u,u,v.e?u:v.gaX6(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.byF,u,u,u,v.e?u:new B.dHm(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lk(new B.dHn(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([p.j(A.L(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([C.aB.j(A.L(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mR(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.awb(C.j0,s,!0,t,w?u:v.gclF(),u),1)
x.push(new A.C(D.bfW,A.mx(new B.dHo(),A.B(A.a([s,C.av,A.D(new B.awb(C.ur,"Export",!1,t,w?u:v.gbHs(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ig,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9B(t,v.e?u:v.gaX6(),u)
else s=A.jT(!0,u,u,new B.dHp(v,t),s,u,D.bfO,u,u,!1,!1)
x.push(A.D(s,1))
return A.cg(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.awb.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.ua,t,new A.b5(s,C.W),t,t,t)
return A.dk(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ua,t,new A.b5(s,C.W),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ey(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eK,t,t,t),u.r,v)}}
B.b9B.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mx(new B.cWC(),new A.C(E.Vw,A.u(A.a([A.mx(new B.cWD(),A.p(x,A.V(C.wP,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ex,C.ih,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dk(C.ns,D.f0N,this.d,A.bk(C.aB,x,x,x,C.c,x,C.Vr,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zr,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9O.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aB.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lZ(D.m2))p=D.cTB
else{p=C.a.a_(p,"image/")||i.lZ(D.Nw)
n=y.O
p=p?A.a([C.cW,C.aB],n):A.a([C.aK.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gamd()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lZ(D.m2))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.D(A.u(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fx,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lZ(D.m2)))l.push(A.fyj(C.aB,!1,j,j,j,!1,j,j,new B.cWZ(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.np,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mx(new B.cX_(),new A.C(C.dZ,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.C(C.UY,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ax(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WX.prototype={
S(){return new B.awg()},
gd6(){return this.c}}
B.awg.prototype={
Z(){this.a0()
this.wN()},
p(){B.hiy(this.e)
this.a2()},
wN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qM(o.c,o.d),$async$wN)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aE.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hiB(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hiA(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWW(s))
x=1
break}s.n(new B.cWX(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a4(l)
if(s.c==null){x=1
break}s.n(new B.cWY(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wN,w)},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qM(t.c,t.d),$async$a_s)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.epQ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.af6(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_s)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
bRw(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k7(u,C.B,v,new B.cWU(w,t),C.fG,C.dn,!0,v,v,v,v)
else if(t!=null&&!C.aE.gah(t))x=A.fC(t,C.B,v,new B.cWV(w),C.fG,C.dn,!0,v,!1,v,v)
else return C.bF
return A.tM(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZW(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ak,u,u,u,v.gb_P(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cw
else{q=v.r
if(q!=null)t=new A.C(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.em,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dk(C.Ak,D.eM8,v.gb_P(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRw()}return A.cg(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WU.prototype={
S(){return new B.awd(A.afS(),C.bu,C.bu)},
gd6(){return this.c}}
B.awd.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fm(w,A.a2(w).k("fm<1>")).hX(new B.cWz(v))
x.gcHc().hX(new B.cWA(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fm(x,A.a2(x).k("fm<1>"))}if(x==null)x=C.aVH
x.hX(new B.cWB(v))
v.wN()},
wN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qM(p.c,p.d),$async$wN)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cWs(s))
x=1
break}x=8
return A.b(s.d.B0(0,new A.a13(r,s.a.d.c)),$async$wN)
case 8:if(s.c==null){x=1
break}s.n(new B.cWt(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
if(s.c==null){x=1
break}s.n(new B.cWu(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wN,w)},
Xq(){var x=0,w=A.j(y.H),v=this,u
var $async$Xq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$Xq)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xq)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xq,w)},
aOv(d){var x=d.a
return C.a.aT(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZW(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cw
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bso,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LD,C.n),o,88,o,o,o,o,o,88)
t=A.m8(C.aB,o,o,m,0,new B.cWv(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOv(p.w)+" / "+p.aOv(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.emq,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.wZ:C.iG,o,o,o,o,o)
x=A.u(A.a([u,C.kb,t,x,C.d1,A.dk(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZF(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cg(v,w,A.as(new A.C(C.ue,x,o),o,o,o),o,!1,!1,o,o)}}
B.NL.prototype={
S(){return new B.awj()},
gd6(){return this.c}}
B.awj.prototype={
Z(){this.a0()
this.NI()},
NI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fAv(o.c,o.d,new B.cXc(s)),$async$NI)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cXd(s))
x=1
break}s.e=r
q=O.hEA(r)
if(q==null){s.n(new B.cXe(s))
x=1
break}s.d=q
q.aJ(0,s.gaVT())
x=8
return A.b(q.hW(0).cJ(0,C.rz),$async$NI)
case 8:if(s.c==null){x=1
break}s.n(new B.cXf(s))
x=9
return A.b(q.p5(0),$async$NI)
case 9:q.rr(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
if(s.c==null){x=1
break}s.n(new B.cXg(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NI,w)},
c4_(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cXh(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BJ(0,x.gaVT())
w=x.d
if(w!=null)w.p()
B.hO7(x.e)
x.a2()},
ab5(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWh(u.c,u.d),$async$ab5)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ab5,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZW(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.ob,t,t,t,u.gbZz(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i6(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cw
else{q=u.r
if(q!=null)s=new A.C(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afm(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fM(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.z1(s,t),A.aJ(t,A.Fp(A.p(t,A.V(q?H.wZ:C.iG,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b9,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cXj(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cg(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WZ.prototype={
S(){return new B.awh(new A.cn(null,y.A))}}
B.awh.prototype={
gcu4(){var x,w,v=this.a
if(v.e!==D.OK)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gctM(){var x,w,v=this.a
if(v.e!==D.xQ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcu4()
if(x!=null){v.OL(x)
v.e=A.dD(R.Dt,new B.cX8(v,x))}w=v.gctM()
if(w!=null){v.OK(w)
v.f=A.dD(C.h_,new B.cX9(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OK(d){return this.caO(d)},
caO(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amx(d),$async$OK)
case 3:t=f
x=4
return A.b(B.c2H(d),$async$OK)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cX0(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OK,w)},
OL(d){return this.caP(d)},
caP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.foR(d),$async$OL)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bx_(t),$async$OL)
case 4:if(u.c==null){x=1
break}u.n(new B.cX1(u))
u.c.F(y.q).f.P(D.aI3)
case 1:return A.h(v,w)}})
return A.i($async$OL,w)},
gbWn(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZA(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_e(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BE()){t=u.c
if(t!=null)t.F(y.q).f.P(D.esU)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cs(A.eH(new B.cX2(),!1,null,y.N)),$async$a_e)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bx_(s),$async$a_e)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aI3)
case 1:return A.h(v,w)}})
return A.i($async$a_e,w)},
a72(d){return this.bBN(d)},
bBN(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a72=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aG(t,", "))),$async$a72)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b_(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a72,w)},
ab3(d){return this.bBx(d)},
bBx(d){var x=0,w=A.j(y.H),v=this
var $async$ab3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$ab3)
case 2:if(d.e!=null)d.F(y.q).f.P(D.eqi)
return A.h(null,w)}})
return A.i($async$ab3,w)},
a_9(d){return this.chu(d)},
chu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alB(s.d,4),$async$a_9)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_doc_share_qr.png"),$async$a_9)
case 8:q=f
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a4(n)
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_9,w)},
gaRB(){var x,w=this.a
if(w.e!==D.FT)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a7_(d){return this.bBG(d)},
bBG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRB()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a7_)
case 3:if(d.e!=null)d.F(y.q).f.P(D.erU)
case 1:return A.h(v,w)}})
return A.i($async$a7_,w)},
ab4(){var x=0,w=A.j(y.H),v=this,u
var $async$ab4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SW(),$async$ab4)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$ab4,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZW(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FT&&i!==D.OK&&i!==D.xQ
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FT||t===D.OK||t===D.xQ?l:A.aF(l,l,l,l,C.kA,l,l,l,m.gaUb(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bs,A.d(""+q.d+" file(s) \xb7 "+m.gbWn(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FT){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mx,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gbZA(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bCh,D.eUz,new B.cX3(m,d),l)],p))}if(m.a.e===D.FT&&m.gaRB()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a0,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bz_,D.eRD,new B.cX4(m,d),l)],p))
if(m.a.e===D.xQ){x=(m.w?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cz:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mx,l,l,l)],p))}if(m.a.e===D.OK){x=(m.r?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cz:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mx,l,l,l),C.ab,A.dk(D.buR,D.eXs,m.gchS(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.cg(v,w,new A.C(C.a8,A.u(A.a([A.D(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ab,A.B(A.a([A.D(A.ey(M.Aj,C.R_,new B.cX5(m,d),l),1),C.av,A.D(A.dk(C.xj,C.a4s,new B.cX6(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bH(C.yj,m.gaUb(),A.bk(C.aK,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cX7(),y.C)}}
B.a9M.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ch(A.u(A.a([w,C.aN,A.p(x,A.pi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ah)
return A.eo(A.a([A.bH(C.BT,new B.cWr(d),x)],u),x,x,C.mj,v,x,x,x,x,D.eLc,x)}}
B.WT.prototype={
S(){return new B.awc(A.ya(C.wb,C.n2,C.t2))}}
B.awc.prototype={
p(){this.d.p()
this.a2()},
atl(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).K(t)
return}}},
B(d){var x=null
return A.cg(A.eA(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eS2,x,x,x,1,x,!0),C.w,A.y9(this.d,C.bN,this.gatk()),x,!1,!1,x,x)}}
B.X_.prototype={
S(){return new B.awi(A.ya(C.wb,C.n2,C.t2))},
gd6(){return this.c}}
B.awi.prototype={
bSz(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acP(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Qd("text/plain"),$async$acP)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.esO)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acP,w)},
a7N(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h49(p,!0),$async$a7N)
case 3:t=e
p=t==null
s=B.a4K(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.epq)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7N,w)},
p(){this.d.p()
this.a2()},
atl(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSz(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahC,v,v,v,w.gbH0(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Ye,v,v,v,w.gc8e(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rR:P.KY,v,v,v,v,v),v,v,v,new B.cXb(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eYd,v,v,v,1,v,!0)
u=A.y9(w.d,C.bN,w.gatk())
x=A.m(20)
return A.cg(t,C.w,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dQx],s),v),v,!1,!1,v,v)}}
B.b9C.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nW
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nW:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.C(C.VC,A.B(A.a([u,C.ba,A.D(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ek,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a73.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.MD.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.V2.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.MC.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.DD.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cdr.prototype={}
B.DC.prototype={}
B.a72.prototype={}
B.aqM.prototype={}
B.V3.prototype={}
var z=a.updateTypes(["au<~>()","R(j8)","n(j8)","SN(X)","~()","WW(X)","I(I,j8)","NL(X)","~(lE)","co(DC)","au<j8?>(@)","SL(X)","SP(X)","C(j8)","j8(@)","a0<n,@>(j8)","WV(X)","SM(X)","WX(X)","WU(X)","WZ(X)","a9M(X)","al<j8>()","X_(X)","a9O(X,I)","WT(X)","a0<n,aB>(j8)","co(V2)","co(a72)","au<co>(DC)"])
B.cdn.prototype={
$1(d){var x=this.a
x.x=D.aFB
x.y.G(0,D.aFB)},
$S:68}
B.cdo.prototype={
$1(d){var x=this.a
x.x=D.aFA
x.y.G(0,D.aFA)},
$S:68}
B.cdp.prototype={
$1(d){var x=this.a
x.ae9(A.aLx(d.data)).bw(new B.cdm(x),y.b)},
$S:68}
B.cdm.prototype={
$1(d){var x=this.a
x.z.G(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cdq.prototype={
$1(d){},
$S:68}
B.cdt.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hng(d.channel))},
$S:15}
B.cdu.prototype={
$1(d){},
$S:15}
B.cdv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFy(w.iceConnectionState)
x.cx=w
if($.fJ_())switch(w.a){case 0:x.cy=D.aFG
break
case 1:x.cy=D.aFH
break
case 3:x.cy=D.aFI
break
case 5:x.cy=D.aFE
break
case 6:x.cy=D.aFF
break
case 7:x.cy=D.a2d
break
default:break}},
$S:142}
B.cdw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFz(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.cdx.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hPA(w.signalingState)},
$S:142}
B.cdy.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hNU(w.connectionState)},
$S:142}
B.cdz.prototype={
$1(d){},
$S:142}
B.cdA.prototype={
$1(d){},
$S:15}
B.f3B.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"blobs")
if(!w)C.w8.Jc(x,"blobs")},
$S:198}
B.fon.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uG.f0(this.b)
$.eI.lU()
this.c.$1(d)},
$S:450}
B.fop.prototype={
$1(d){return this.a.$1(B.hvW(this.b,this.c))},
$S:31}
B.foo.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fom.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.foD.prototype={
$1(d){var x=this
return B.fUW(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.foE.prototype={
$1(d){var x=this
return B.fUW(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f4U.prototype={
$1(d){var x=this
return B.c2i(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWK.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWH.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2i(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWJ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2i(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWI.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2i(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWM.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.B(A.a([A.aF(x,x,x,x,D.btt,x,x,x,new B.cWL(d),x,x,x,x,x,x),A.D(A.Do(D.Nj,!0,x,C.Xh,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nj,x,g,C.adF,0,e,f)},
$C:"$4",
$R:4,
$S:431}
B.cWL.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6T.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eo,y.o).w,t=this.a,s=t?C.hm:C.c,r=A.m(28),q=A.p(v,D.baX,C.h,v,v,D.aRu,v,v,v,v,D.adw,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxz,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.C(new A.M(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.C(C.zH,A.u(A.a([o,C.ab,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahR,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v),C.bs,A.B(A.a([A.D(A.dU(C.dd,new B.f6R(d),v),1),C.av,A.D(A.bH(D.eQG,new B.f6S(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JH,v,v,v,v),v)},
$S:57}
B.f6R.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6S.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eqx)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayJ(v,x))},
$S:0}
B.f7m.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eo,y.o).w,u=x.a,t=u?C.hm:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.M(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.baM,C.h,w,w,D.aSQ,w,w,w,w,D.adw,w,w,1/0),new A.C(C.zH,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fFl(u,"Organization name",C.E5,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fFl(u,"Access code",C.mB,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fFl(u,"Member password",N.EG,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.bs,A.bH(D.eYh,new B.f7l(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JH,w,w,w,w),w)},
$S:57}
B.f7l.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eqC)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBQ(u,x,w))},
$S:0}
B.c29.prototype={
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
p=C.a.a_(j,"http")?A.cq(j,0,null):s.b.aP(j)
u=4
x=7
return A.b(A.ux(p,null).cJ(0,C.UD),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ap(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a4(h)
$.ak.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c2f.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2g.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c2h.prototype={
$1(d){return d.b},
$S:z+2}
B.c2b.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2c.prototype={
$1(d){return d.b},
$S:z+2}
B.c2a.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c2d.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c2e.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.foB.prototype={
$1(d){return new B.SL(this.a,null)},
$S:z+11}
B.foC.prototype={
$1(d){return new B.SP(this.a,this.b,this.c,null)},
$S:z+12}
B.dGj.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dHs.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dHt.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dHu.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dHr(x,d))},
$S:2}
B.dHr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHv.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHw.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dHx.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dHy.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHz.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dHA.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHD.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.dHB.prototype={
$1(d){var x=this.a
return x.f?null:x.Xp()},
$S:2}
B.dHC.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lZ(D.Nw))s=C.rT
else s=C.a.a_(s,"video/")||d.lZ(D.m2)?C.pa:D.agl
x=this.b.a
w=y.p
return new A.C(C.ll,A.B(A.a([A.p(v,A.V(s,C.aB,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gamd(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dGk.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dGl.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c2j.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.c2k.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.fp7.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f0O.prototype={
$1(d){return J.k(d)},
$S:17}
B.f55.prototype={
$1(d){var x=this.b
B.hu4(C.DT.ga3D(this.a)).bw(x.gcwZ(x),y.H)},
$S:120}
B.f56.prototype={
$1(d){return this.a.d0(0,null)},
$S:120}
B.f57.prototype={
$0(){return null},
$S:11}
B.c2y.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f58.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Z(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.L(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.O(Date.now(),0,!1).a4().aa():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.j8(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f91.prototype={
$1(d){return d.ac()},
$S:z+15}
B.f3N.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3O.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2D.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.ft2.prototype={
$1(d){return new B.WV(this.a,null)},
$S:z+16}
B.cWG.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:8}
B.cWE.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cWF.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dHq.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zm()},
$S:14}
B.dGO.prototype={
$0(){var x=J.bA3(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGP.prototype={
$0(){var x=J.bA3(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGn.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dGm(this.b))
if(w>=0){x=x.d
x[w]=x[w].azS(this.c)}},
$S:0}
B.dGm.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGo.prototype={
$0(){var x=J.bA3(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGt.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dGs(this.b))
if(w>=0){x=x.d
x[w]=x[w].azS(this.c)}},
$S:0}
B.dGs.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHe.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dHf.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dGL.prototype={
$1(d){return new B.SM(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dGI.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GH(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SQ(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rQ(),$async$$0)
case 5:s=J.a6(t)
x=s.gci(t)?6:7
break
case 6:x=8
return A.b(r.Zx(s.gH(t)),$async$$0)
case 8:case 7:r.hM(s.gah(t)?u.d:u.e+" "+s.gH(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGr.prototype={
$1(d){this.a.a96(d,"No files selected.","Added")},
$S:450}
B.dGT.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dGS(),A.T(x).k("J<1,n>")))},
$S:0}
B.dGS.prototype={
$1(d){return d.a},
$S:z+2}
B.dGx.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wh.c2().cJ6(C.Wj,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fg(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aE.gah(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jd(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a4(j)
$.ak.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hM("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hM("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.amw(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ci(l)){o.hM("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rQ(),$async$$0)
case 9:o.hM("Imported "+J.a9(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dHb.prototype={
$1(d){return new B.NL(this.a.a.c,this.b,null)},
$S:z+7}
B.dHc.prototype={
$1(d){return new B.WX(this.a.a.c,this.b,null)},
$S:z+18}
B.dHd.prototype={
$1(d){return new B.WU(this.a.a.c,this.b,null)},
$S:z+19}
B.dGJ.prototype={
$1(d){return new B.NL(this.a.a.c,this.b,null)},
$S:z+7}
B.dGK.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.G(0,w)},
$S:0}
B.dH4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GH(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4M(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ce0(),$async$$0)
case 5:x=6
return A.b(p.rQ(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dH0(p),r),new B.dH1(),r.k("J<ai.E,n>")).bZ(0,new B.dH2())
q=A.z(r,r.$ti.k("F.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cs(A.eH(new B.dH3(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SW(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH0.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dH_(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dH_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dH1.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dH2.prototype={
$1(d){return d.length!==0},
$S:3}
B.dH3.prototype={
$1(d){var x=this.a
return new B.WZ(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dH5.prototype={
$1(d){return d.a},
$S:z+2}
B.dH6.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGZ.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.as(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kr,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gamd(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lZ(D.m2)?C.rV:C.o9
p=!x||p.lZ(D.m2)?"Play video":"View"
return A.bQ(A.br(!0,new A.C(C.zD,A.u(A.a([q,o,t,C.ay,B.WY(!1,u,!1,w,p,new B.dGU(d),v),B.WY(!1,u,!1,C.j0,"Share via QR",new B.dGV(d),"Letters/numbers QR code"),B.WY(!1,u,!1,D.Xm,"Send to their Code",new B.dGW(d),"Enter someone else's personal code"),B.WY(!1,u,!1,C.hh,"Download / save",new B.dGX(d),v),C.ar,B.WY(!1,u,!0,C.e4,"Delete",new B.dGY(d),v)],y.p),C.ad,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c1(new A.ax(r,1,C.r,-1),C.W,C.W,C.W),C.kh,v,v,C.n),C.b7)},
$S:684}
B.dGU.prototype={
$0(){A.a7(this.a,!1).K("view")
return null},
$S:0}
B.dGV.prototype={
$0(){A.a7(this.a,!1).K("qr")
return null},
$S:0}
B.dGW.prototype={
$0(){A.a7(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dGX.prototype={
$0(){A.a7(this.a,!1).K("save")
return null},
$S:0}
B.dGY.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
B.dGu.prototype={
$1(d){return d.a},
$S:z+2}
B.dGv.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGw.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4O(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.EY(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oz(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGq.prototype={
$1(d){var x=this.a
x.rR(new B.dGp(x,d,this.b),"Preparing\u2026")},
$S:450}
B.dGp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SQ(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bz1(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGM.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dGN.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fAy(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.G(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EV(new B.dGC(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.dGD(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dGE(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dq,new B.dGF()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rQ(),$async$$0)
case 9:s.hM("Received "+q.gH(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGC.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGz(x,d,e))},
$S:132}
B.dGz.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGD.prototype={
$1(d){return new B.a9M(this.a.a,null)},
$S:z+21}
B.dGE.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dGF.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dGH.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GO(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4C(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aW3(B.GO(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amw(new B.dGA(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.fAx(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rQ(),$async$$0)
case 10:o=J.cB(r)
p=o.eE(r,new B.dGB()).gH(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gH(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGA.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGy(x,d,e))},
$S:132}
B.dGy.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGB.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.dGR.prototype={
$1(d){return new B.X_(this.a.a.c,null)},
$S:z+23}
B.dGQ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWh(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHa.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aB.j(0.35)
return A.bQ(A.br(!0,new A.C(C.zD,A.u(A.a([A.as(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kr,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.WY(!0,w,!1,C.mB,"My Code",new B.dH7(d),"Your personal code & QR \u2014 others send docs to you"),B.WY(!1,w,!1,D.Xm,"Send to their Code",new B.dH8(this.a,d),"Enter someone else's 5-digit code + letter"),B.WY(!1,w,!1,S.x8,"Import backup",new B.dH9(d),".ngmydoc file from another device")],y.p),C.ad,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c1(new A.ax(t,1,C.r,-1),C.W,C.W,C.W),C.kh,x,x,C.n),C.b7)},
$S:684}
B.dH7.prototype={
$0(){A.a7(this.a,!1).K("my_code")
return null},
$S:0}
B.dH8.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.bvU()},
$S:0}
B.dH9.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dHn.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.GX(D.Nj,x,C.Xh,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cJ(C.d.gI(D.Nj).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dHl.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dHm.prototype={
$0(){this.a.af6()
return null},
$S:0}
B.dHo.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:107}
B.dHp.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9O(e,w,v,this.b,x.e,x.bZB(w),new B.dHh(x,w),new B.dHi(x,v,w),new B.dHj(x,w),new B.dHk(x,w),null)},
$S:z+24}
B.dHh.prototype={
$0(){this.a.acm(this.b)
return null},
$S:0}
B.dHi.prototype={
$0(){var x=this.a
return x.n(new B.dHg(x,this.b,this.c))},
$S:0}
B.dHg.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.G(0,w)},
$S:0}
B.dHj.prototype={
$0(){this.a.Md(this.b)
return null},
$S:0}
B.dHk.prototype={
$0(){this.a.aeU(this.b)
return null},
$S:0}
B.cWC.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:107}
B.cWD.prototype={
$3(d,e,f){return A.e5(C.B,f,e,null,null)},
$S:134}
B.cX_.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.cWZ.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cWW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWX.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWU.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aE.gah(w))return A.fC(w,C.B,x,new B.cWS(this.a),C.fG,C.dn,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWT(this.a))
return C.bF},
$S:140}
B.cWS.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWQ(this.a))
return C.bF},
$S:186}
B.cWQ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWN(x))},
$S:8}
B.cWN.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWT.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWP(x))},
$S:8}
B.cWP.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWV.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWR(this.a))
return C.bF},
$S:186}
B.cWR.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWO(x))},
$S:8}
B.cWO.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWz.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWy(x,d))},
$S:1737}
B.cWy.prototype={
$0(){return this.a.f=this.b===C.tq},
$S:0}
B.cWA.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWx(x,d))},
$S:8}
B.cWx.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cWB.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWw(x,d))},
$S:8}
B.cWw.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cWs.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cWt.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cWu.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cWv.prototype={
$1(d){return this.a.d.Lf(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cXc.prototype={
$0(){var x=this.a.a
return B.qM(x.c,x.d)},
$S:1738}
B.cXd.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cXe.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cXf.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cXg.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cXh.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cXj.prototype={
$0(){var x=this.a
x.n(new B.cXi(x))},
$S:0}
B.cXi.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cX8.prototype={
$1(d){return this.a.OL(this.b)},
$S:14}
B.cX9.prototype={
$1(d){return this.a.OK(this.b)},
$S:14}
B.cX0.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cX1.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cX2.prototype={
$1(d){return D.fao},
$S:z+25}
B.cX7.prototype={
$2(d,e){if(d)B.SW()},
$S:118}
B.cX3.prototype={
$0(){return this.a.a72(this.b)},
$S:0}
B.cX4.prototype={
$0(){return this.a.a7_(this.b)},
$S:0}
B.cX5.prototype={
$0(){return this.a.ab3(this.b)},
$S:0}
B.cX6.prototype={
$0(){return this.a.a_9(this.b)},
$S:0}
B.cWr.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cXb.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cXa(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cXa.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2F.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.c2G.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2E.prototype={
$2(d,e){return this.bdD(d,e)},
bdD(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SX(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1739}
B.f8F.prototype={
$1(d){if(d===D.a2c&&(this.a.a.a&30)===0)this.a.fB(0)},
$S:z+27}
B.f8G.prototype={
$0(){},
$S:11}
B.f99.prototype={
bfb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eZ5(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fQ9(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bfb(d,e)},
$S:522}
B.f98.prototype={
$1(d){var x=this
d.b=new B.f97(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f97.prototype={
$1(d){return this.bfa(d)},
bfa(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWi(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.G(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aD(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.y(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.y(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.eZ5(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d0(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a4(j)
$.ak.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4L(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d0(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.awf.prototype,"gc5h","Om",0)
x(v,"gc66","HF",0)
x(v,"gc5D","wW",0)
x(v=B.aA5.prototype,"gbZv","ab1",0)
x(v,"gbZw","Xo",0)
x(v,"gckd","aeC",0)
x(v=B.aA8.prototype,"gbZx","Xp",0)
x(v,"gcke","a_t",0)
x(B.aA6.prototype,"gbZy","ab2",0)
x(B.awe.prototype,"gbZD","bZE",4)
x(v=B.aA7.prototype,"gc5E","Yt",0)
x(v,"gciQ","ciR",4)
x(v,"gaX6","auC",0)
x(v,"gclF","af0",0)
x(v,"gbHs","Vq",0)
x(v,"gbZC","CY",0)
x(B.awg.prototype,"gb_P","a_s",0)
x(B.awd.prototype,"gbZF","Xq",0)
x(v=B.awj.prototype,"gaVT","c4_",4)
x(v,"gbZz","ab5",0)
x(v=B.awh.prototype,"gchS","a_e",0)
x(v,"gaUb","ab4",0)
w(B.awc.prototype,"gatk","atl",8)
x(v=B.awi.prototype,"gc8e","acP",0)
x(v,"gbH0","a7N",0)
w(v,"gatk","atl",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.cdr,B.a72,B.aqM,B.ayJ,B.aBQ,B.j8,B.a9u,B.br8,B.DC,B.V3])
w(B.cds,B.cdr)
w(B.b0n,B.a72)
x(A.i2,[B.cdn,B.cdo,B.cdp,B.cdm,B.cdq,B.cdt,B.cdu,B.cdv,B.cdw,B.cdx,B.cdy,B.cdz,B.cdA,B.f3B,B.fon,B.fop,B.foo,B.foD,B.foE,B.f4U,B.cWH,B.cWJ,B.cWI,B.cWM,B.f6T,B.f7m,B.c29,B.c2g,B.c2h,B.c2c,B.c2a,B.c2d,B.c2e,B.foB,B.foC,B.dHu,B.dHD,B.dHB,B.dHC,B.f0O,B.f55,B.f56,B.c2y,B.f58,B.f91,B.f3N,B.f3O,B.c2D,B.ft2,B.cWG,B.cWE,B.dHq,B.dGm,B.dGs,B.dGL,B.dGr,B.dGS,B.dHb,B.dHc,B.dHd,B.dGJ,B.dH0,B.dH_,B.dH1,B.dH2,B.dH3,B.dH5,B.dH6,B.dGZ,B.dGu,B.dGv,B.dGq,B.dGM,B.dGD,B.dGB,B.dGR,B.dHa,B.dHn,B.dHo,B.cWC,B.cWD,B.cX_,B.cWZ,B.cWU,B.cWS,B.cWQ,B.cWT,B.cWV,B.cWR,B.cWz,B.cWA,B.cWB,B.cWv,B.cX8,B.cX9,B.cX2,B.c2F,B.c2G,B.f8F,B.f98,B.f97])
w(B.b0o,B.aqM)
x(A.jk,[B.fom,B.cWK,B.cWL,B.f6R,B.f6S,B.f7l,B.dGj,B.dHs,B.dHt,B.dHr,B.dHv,B.dHw,B.dHx,B.dHy,B.dHz,B.dHA,B.dGk,B.dGl,B.f57,B.cWF,B.dGO,B.dGP,B.dGn,B.dGo,B.dGt,B.dHe,B.dHf,B.dGI,B.dGT,B.dGx,B.dGK,B.dH4,B.dGU,B.dGV,B.dGW,B.dGX,B.dGY,B.dGw,B.dGp,B.dGN,B.dGG,B.dGz,B.dGE,B.dGF,B.dGH,B.dGy,B.dGQ,B.dH7,B.dH8,B.dH9,B.dHl,B.dHm,B.dHh,B.dHi,B.dHg,B.dHj,B.dHk,B.cWW,B.cWX,B.cWY,B.cWN,B.cWP,B.cWO,B.cWy,B.cWx,B.cWw,B.cWs,B.cWt,B.cWu,B.cXc,B.cXd,B.cXe,B.cXf,B.cXg,B.cXh,B.cXj,B.cXi,B.cX0,B.cX1,B.cX3,B.cX4,B.cX5,B.cX6,B.cWr,B.cXb,B.cXa,B.f8G])
x(A.mb,[B.a9N,B.LB,B.a73,B.MD,B.V2,B.MC,B.DD])
x(A.ae,[B.WW,B.SL,B.SP,B.SM,B.WV,B.SN,B.WX,B.WU,B.NL,B.WZ,B.WT,B.X_])
x(A.ag,[B.awf,B.aA5,B.aA8,B.aA6,B.awe,B.aA7,B.awg,B.awd,B.awj,B.awh,B.awc,B.awi])
x(A.ar,[B.aae,B.awb,B.b9B,B.a9O,B.a9M,B.b9C])
x(A.kx,[B.c2f,B.c2b,B.c2j,B.c2k,B.fp7,B.dGC,B.dGA,B.dHp,B.cX7,B.c2E,B.f99])
x(A.iG,[B.beU,B.bqO])})()
A.kd(b.typeUniverse,JSON.parse('{"b0n":{"a72":[]},"b0o":{"aqM":[]},"WW":{"ae":[],"r":[]},"awf":{"ag":["WW"]},"aae":{"ar":[],"r":[]},"SL":{"ae":[],"r":[]},"SP":{"ae":[],"r":[]},"aA5":{"ag":["SL"]},"aA8":{"ag":["SP"]},"beU":{"iG":[]},"SM":{"ae":[],"r":[]},"aA6":{"ag":["SM"]},"WV":{"ae":[],"r":[]},"SN":{"ae":[],"r":[]},"a9O":{"ar":[],"r":[]},"WX":{"ae":[],"r":[]},"WU":{"ae":[],"r":[]},"NL":{"ae":[],"r":[]},"WZ":{"ae":[],"r":[]},"a9M":{"ar":[],"r":[]},"WT":{"ae":[],"r":[]},"X_":{"ae":[],"r":[]},"awe":{"ag":["WV"]},"bqO":{"iG":[]},"aA7":{"ag":["SN"]},"awb":{"ar":[],"r":[]},"b9B":{"ar":[],"r":[]},"awg":{"ag":["WX"]},"awd":{"ag":["WU"]},"awj":{"ag":["NL"]},"awh":{"ag":["WZ"]},"awc":{"ag":["WT"]},"awi":{"ag":["X_"]},"b9C":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tv"),k:x("K7()"),m:x("bt<n,n>"),F:x("qp"),g:x("au<j8?>"),x:x("au<~>"),V:x("N<aa>"),O:x("N<x>"),W:x("N<be>"),Y:x("N<a0<n,R>>"),t:x("N<a0<n,@>>"),r:x("N<j8>"),w:x("N<+file,name(lf,n)>"),u:x("N<cJ>"),s:x("N<n>"),E:x("N<iG>"),a:x("N<dz>"),p:x("N<r>"),Z:x("N<I>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("al<j8>"),j:x("al<@>"),I:x("al<I>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hTn"),af:x("CS"),U:x("j8"),b:x("co"),C:x("aB"),aK:x("vh"),ab:x("DC"),br:x("aqM"),v:x("V3"),N:x("n"),X:x("bm<Q>"),Q:x("lq"),D:x("dz"),aw:x("cv<n>"),cd:x("a5<a0<n,@>>"),c7:x("r"),ch:x("bL<al<j8>>"),aW:x("bL<dz?>"),aY:x("bL<~>"),cx:x("a9N"),b1:x("bd<al<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayJ"),bG:x("aBQ"),q:x("mz"),B:x("oQ<DC>"),c6:x("oQ<a73>"),y:x("R"),i:x("Q"),z:x("@"),S:x("I"),aQ:x("be?"),_:x("al<j8>?"),aL:x("al<@>?"),h:x("a0<n,@>?"),l:x("j8?"),R:x("aB?"),c:x("V3?"),d:x("+answerQr,transfer(n,au<al<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,LB,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9u?"),bk:x("ayJ?"),ag:x("aBQ?"),dd:x("Q?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPS=new A.ax(C.aB,2,C.r,-1)
D.bFH=new A.a8(C.a1,C.a7,C.x,C.Zi,null,null)
D.aRu=new A.o(null,null,null,C.mg,null,D.bFH,C.n)
D.aSQ=new A.o(null,null,null,C.mg,null,E.ES,C.n)
D.a7V=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8T=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9A=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaY=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eM2=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eZ8=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cMz=x([D.eM2,C.ar,D.eZ8],y.p)
D.baE=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cMz,null)
D.f23=new A.w("Create your organization",null,C.h9,null,null,null,null,null,null,null,null,null)
D.eQ_=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.d_2=x([D.f23,C.ar,D.eQ_],y.p)
D.baM=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d_2,null)
D.eZG=new A.w("Team Member sign-in",null,C.h9,null,null,null,null,null,null,null,null,null)
D.eTt=new A.w("Enter the access code and password from your organization.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cYd=x([D.eZG,C.ar,D.eTt],y.p)
D.baX=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYd,null)
D.bfO=new A.M(16,10,16,28)
D.bfW=new A.M(16,14,16,4)
D.bh9=new A.M(20,0,20,16)
D.bhF=new A.M(20,8,20,16)
D.adw=new A.M(24,22,24,20)
D.Xm=new A.a_(63394,"MaterialIcons",!1)
D.agl=new A.a_(63515,"MaterialIcons",!1)
D.brq=new A.a_(983813,"MaterialIcons",!1)
D.boH=new A.a_(62867,"MaterialIcons",!1)
D.bso=new A.ac(D.boH,44,C.c,null,null,null)
D.btt=new A.ac(C.rN,null,C.aj,null,null,null)
D.buR=new A.ac(C.iH,18,null,null,null,null)
D.bwv=new A.ac(D.Xm,26,C.c,null,null,null)
D.bx0=new A.ac(C.Ew,null,null,null,null,null)
D.bxz=new A.ac(C.xa,null,null,null,null,null)
D.byF=new A.ac(W.Lb,null,null,null,null,null)
D.bz_=new A.ac(C.h4,16,null,null,null,null)
D.bCh=new A.ac(C.qk,16,null,null,null,null)
D.bsG=new A.ac(C.mB,null,null,null,null,null)
D.bD8=new A.e0(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.by5=new A.ac(C.E5,null,null,null,null,null)
D.bDc=new A.e0(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.by5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bt0=new A.ac(N.EG,null,null,null,null,null)
D.bDm=new A.e0(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bt0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.coR=x([C.eY,C.aW,C.aB],y.O)
D.bHq=new A.a8(C.ax,C.aC,C.x,D.coR,null,null)
D.con=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nj=x([C.eY,C.aB],y.O)
D.Nw=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m2=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cTB=x([C.q2,C.aB],y.O)
D.dHL={iceServers:0}
D.aAy={urls:0}
D.d2C=new A.bt(D.aAy,["stun:stun.l.google.com:19302"],y.m)
D.d2B=new A.bt(D.aAy,["stun:stun1.l.google.com:19302"],y.m)
D.cDS=x([D.d2C,D.d2B],A.az("N<a0<n,n>>"))
D.d1X=new A.bt(D.dHL,[D.cDS],A.az("bt<n,@>"))
D.FT=new B.LB(0,"lanDirect")
D.OJ=new B.LB(1,"cloudStash")
D.dda=new B.LB(2,"inlineInstant")
D.OK=new B.LB(3,"webrtcLink")
D.xQ=new B.LB(4,"videoCloud")
D.eZ7=new A.w("Receive file",null,C.mT,null,null,null,null,null,null,null,null,null)
D.ceC=x([E.ai_,C.aa,D.eZ7],y.p)
D.eiS=new A.cC(C.aY,C.b5,C.j,C.m,null,C.p,null,0,D.ceC,null)
D.dM4=new A.C(C.ca,D.eiS,null)
D.eDB=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZV,null,null,null)
D.eMy=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eDB,null,C.L,null,null,null,null,null,null,null)
D.dLq=new A.C(C.zK,D.eMy,null)
D.aWQ=new A.cw(C.B,null,null,D.dLq,null)
D.dQx=new A.cE(0,null,0,28,null,null,D.aWQ,null)
D.dQP=new B.a73(0,"RTCDataChannelConnecting")
D.aFA=new B.a73(1,"RTCDataChannelOpen")
D.aFB=new B.a73(3,"RTCDataChannelClosed")
D.dQQ=new B.DD(0,"RTCIceConnectionStateNew")
D.dQR=new B.DD(1,"RTCIceConnectionStateChecking")
D.dQS=new B.DD(2,"RTCIceConnectionStateCompleted")
D.dQT=new B.DD(3,"RTCIceConnectionStateConnected")
D.dQU=new B.DD(4,"RTCIceConnectionStateCount")
D.dQV=new B.DD(5,"RTCIceConnectionStateFailed")
D.dQW=new B.DD(6,"RTCIceConnectionStateDisconnected")
D.aFC=new B.DD(7,"RTCIceConnectionStateClosed")
D.aFD=new B.V2(0,"RTCIceGatheringStateNew")
D.dQX=new B.V2(1,"RTCIceGatheringStateGathering")
D.a2c=new B.V2(2,"RTCIceGatheringStateComplete")
D.a2d=new B.MC(0,"RTCPeerConnectionStateClosed")
D.aFE=new B.MC(1,"RTCPeerConnectionStateFailed")
D.aFF=new B.MC(2,"RTCPeerConnectionStateDisconnected")
D.aFG=new B.MC(3,"RTCPeerConnectionStateNew")
D.aFH=new B.MC(4,"RTCPeerConnectionStateConnecting")
D.aFI=new B.MC(5,"RTCPeerConnectionStateConnected")
D.dQY=new B.MD(0,"RTCSignalingStateStable")
D.dQZ=new B.MD(1,"RTCSignalingStateHaveLocalOffer")
D.dR_=new B.MD(2,"RTCSignalingStateHaveRemoteOffer")
D.dR0=new B.MD(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dR1=new B.MD(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFJ=new B.MD(5,"RTCSignalingStateClosed")
D.emq=new A.ap(160,48)
D.aXY=new A.f9(2,null,null,null,null,C.aB,null,null,null,null)
D.enR=new A.a3(16,16,D.aXY,null)
D.ePr=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.epg=new A.aY(D.ePr,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWe=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.epj=new A.aY(D.eWe,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f33=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.epq=new A.aY(D.f33,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eP4=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.epQ=new A.aY(D.eP4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eZP=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aI3=new A.aY(D.eZP,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f04=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eqi=new A.aY(D.f04,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f4l=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eqx=new A.aY(D.f4l,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f2v=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eqC=new A.aY(D.f2v,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f3D=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ern=new A.aY(D.f3D,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNO=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.erU=new A.aY(D.eNO,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXV=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ese=new A.aY(D.eXV,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRt=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.esK=new A.aY(D.eRt,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f4r=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.esO=new A.aY(D.f4r,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eO3=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.esU=new A.aY(D.eO3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eMS=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.et8=new A.aY(D.eMS,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eK0=new A.w("NGMY DOC SHARE",null,C.aJj,null,null,null,null,null,null,null,null,null)
D.eLc=new A.w("Show this to sender",null,C.kd,null,null,null,null,null,null,null,null,null)
D.eM8=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eQm=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eQG=new A.w("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eRD=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eS2=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eUz=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eX9=new A.w("Send to their Doc Share",null,C.mS,null,null,null,null,null,null,null,null,null)
D.eXs=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eXK=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eYd=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eYh=new A.w("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eYE=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eK,null,null,null,null,null,null,null,null,null)
D.f0v=new A.w("Share files & videos\nwith a scan.",null,C.aJk,null,null,null,null,null,null,null,null,null)
D.f0N=new A.w("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fao=new B.WT(null)
D.a55=new B.a9N(0,"docShare")
D.a56=new B.a9N(1,"gate")
D.Rt=new B.a9N(2,"gateNoIndividual")})();(function staticFields(){$.aKn=null
$.eWX=function(){var x=y.N
return A.S(x,x)}()
$.EJ=A.S(y.N,y.D)
$.adJ=A.S(y.N,A.az("lf"))
$.P0=A.S(y.N,y.D)
$.eXt=A.S(y.N,A.az("a9u"))
$.c2x=A.S(y.S,A.az("br8"))
$.fQ8=1
$.hBA=null
$.hBz=null
$.htx=null
$.fFx=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hTS","h5X",()=>new B.cds())
x($,"hRN","fJ_",()=>C.a.q(A.bp(A.bp(A.bp(A.Fg(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["V+fHVBZACtFpgB6vIp6jEHQAFYE="]=a.current})($__dart_deferred_initializers__);