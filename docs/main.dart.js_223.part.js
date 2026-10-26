((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cdj:function cdj(){},
hmU(d){var x=null,w=new B.b0g(d,D.dQi,new A.oQ(x,x,y.c6),new A.oQ(x,x,y.B))
w.brU(d)
return w},
b0g:function b0g(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cde:function cde(d){this.a=d},
cdf:function cdf(d){this.a=d},
cdg:function cdg(d){this.a=d},
cdd:function cdd(d){this.a=d},
cdh:function cdh(d){this.a=d},
hmV(d,e){var x=y.N
x=new B.b0h(d,e,A.R(x,y.e),A.R(x,y.z))
x.brV(d,e)
return x},
b0h:function b0h(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cdk:function cdk(d){this.a=d},
cdl:function cdl(d){this.a=d},
cdm:function cdm(d){this.a=d},
cdn:function cdn(d){this.a=d},
cdo:function cdo(d){this.a=d},
cdp:function cdp(d){this.a=d},
cdq:function cdq(d){this.a=d},
cdr:function cdr(d){this.a=d},
fEU(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.P(A.b9("IndexedDB not available"))
return C.xj.Kl(x,"ngmy_doc_share_v1",new B.f3l(),1)},
htn(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.AY(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
Pb(d,e){return B.hHT(d,e)},
hHT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKi
x=7
return A.b(o==null?$.aKi=B.fEU():o,$async$Pb)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mg(s,"blobs","readwrite")
C.io.lL(J.me(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$Pb)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
$.al.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pb,w)},
Pa(d){return B.hHS(d)},
hHS(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKi
x=7
return A.b(o==null?$.aKi=B.fEU():o,$async$Pa)
case 7:s=f
r=J.mg(s,"blobs","readonly")
x=8
return A.b(C.io.yv(J.me(r,"blobs"),d),$async$Pa)
case 8:q=f
x=9
return A.b(J.oY(r),$async$Pa)
case 9:o=B.htn(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
$.al.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pa,w)},
aej(d){return B.hHR(d)},
hHR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aej=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKi
x=7
return A.b(p==null?$.aKi=B.fEU():p,$async$aej)
case 7:s=f
r=J.mg(s,"blobs","readwrite")
C.io.Eq(J.me(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$aej)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
$.al.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aej,w)},
f3l:function f3l(){},
hvz(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkp(w,v))}return u},
h36(d,e){var x,w={},v=A.aSp("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fo3(w,v,e)
C.uG.xn(v,"change",new B.fo5(w,v,!1))
C.uG.xn(v,"cancel",new B.fo4(w))
$.eI.lU()
v.click()
A.bK(C.abA,new B.fo2(w),y.H)},
fo3:function fo3(d,e,f){this.a=d
this.b=e
this.c=f},
fo5:function fo5(d,e,f){this.a=d
this.b=e
this.c=f},
fo4:function fo4(d){this.a=d},
fo2:function fo2(d){this.a=d},
BH(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BH=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRI()?3:4
break
case 3:x=5
return A.b(B.fZm(e,d,s,!0,!1,f,g,h,!1,i),$async$BH)
case 5:x=1
break
case 4:x=6
return A.b(B.OP(d,s,f,g,h,i),$async$BH)
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
return A.b(B.GM(s,d),$async$BH)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.eZV(s,d),$async$BH)
case 14:x=12
return A.b(r.fZm(q,p,o,n,m,l,k,j,a1,i),$async$BH)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cs(A.eH(new B.foi(s,i,d,f,g,h),!1,null,y.H)),$async$BH)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cs(A.eH(new B.foj(s,i,d,f,g,h),!1,null,y.H)),$async$BH)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BH,w)},
OP(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OP=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aW3(e),$async$OP)
case 3:u=k
x=4
return A.b(B.ami(d,e,!1),$async$OP)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GM(e,d),$async$OP)
case 7:if(k){v=D.a52
x=1
break}x=8
return A.b(B.SI(e),$async$OP)
case 8:v=t?D.Rt:D.a53
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aW1(d,e)){v=D.a52
x=1
break}x=11
return A.b(B.SI(e),$async$OP)
case 11:v=t?D.Rt:D.a53
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fA9(d,e)){v=D.a52
x=1
break}x=14
return A.b(B.SI(e),$async$OP)
case 14:v=D.Rt
x=1
break
case 13:v=t?D.Rt:D.a53
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OP,w)},
eZV(d,e){var x=0,w=A.j(y.y),v
var $async$eZV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aW1(e,d)){v=!1
x=1
break}x=3
return A.b(B.aW3(d),$async$eZV)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZV,w)},
fZm(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cs(A.eH(new B.f4E(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fUC(d,e,f,g,h,i,j){return new B.WQ(e,j,d,g,h,i,f,null)},
f6A(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f6A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6D(A.L(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f6A)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6A,w)},
f74(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f74=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f76(A.L(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f74)
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
return A.i($async$f74,w)},
fF1(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bl(x,new A.b1(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fgG(d,e){var x=0,w=A.j(y.H),v
var $async$fgG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SI(e),$async$fgG)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eC()
case 1:return A.h(v,w)}})
return A.i($async$fgG,w)},
foi:function foi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foj:function foj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9J:function a9J(d,e){this.a=d
this.b=e},
f4E:function f4E(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WQ:function WQ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awa:function awa(){this.c=this.a=this.d=null},
cWB:function cWB(d,e){this.a=d
this.b=e},
cWy:function cWy(d){this.a=d},
cWA:function cWA(d){this.a=d},
cWz:function cWz(d){this.a=d},
cWD:function cWD(){},
cWC:function cWC(d){this.a=d},
aaa:function aaa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayE:function ayE(d,e){this.a=d
this.b=e},
aBL:function aBL(d,e,f){this.a=d
this.b=e
this.c=f},
f6D:function f6D(d,e,f){this.a=d
this.b=e
this.c=f},
f6B:function f6B(d){this.a=d},
f6C:function f6C(d,e,f){this.a=d
this.b=e
this.c=f},
f76:function f76(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f75:function f75(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2_(d,e,f,g,h){return B.hhS(d,e,f,g,h)},
hhS(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c2_=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gH(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.di(d,new B.c20(s,e,h,g,f,q),y.g),y.l),$async$c2_)
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
return A.i($async$c2_,w)},
aVZ(d,e,f,g,h){return B.hhT(d,e,f,g,h)},
hhT(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVZ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arw("GET",d)
o=A.fwG()
if(o==null)o=new A.JY(A.a([],y.W))
x=7
return A.b(o.eL(0,s).cJ(0,C.Dl),$async$aVZ)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ba(),$async$aVZ)
case 8:q=j
if(J.a9(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.An(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
$.al.$1("[doc share pull url web] "+f+": "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVZ,w)},
aVY(d){return B.hhQ(d)},
hhQ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uv(d,null).cJ(0,C.ng),$async$aVY)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aE(0,A.io(A.im(p.e)).c6(0,p.w),null)
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
$.al.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVY,w)},
c1Z(d){return B.hhR(d)},
hhR(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uv(d,null).cJ(0,C.oV),$async$c1Z)
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
$.al.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1Z,w)},
c20:function c20(d,e,f,g,h,i){var _=this
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
GK(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hhY(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GK(C.a.aV(u,v.length))}return null},
hhZ(d){var x=B.GK(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hhU(){var x,w=$.oW(),v=J.dZ(5,y.S)
for(x=0;x<5;++x)v[x]=w.aA(10)
return C.d.fM(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(24)]},
a4w(d){return B.hhV(d)},
hhV(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eT(d,null,!1,C.bD),$async$a4w)
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
$.al.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4w,w)},
a4x(d,e){return B.hhW(d,e)},
hhW(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4x=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hr(d,e,!1,!1,C.cy,null),$async$a4x)
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
$.al.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4x,w)},
Am(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Am=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aw(),$async$Am)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GK(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4y(r),$async$Am)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4w("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Am)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GK(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Am)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hhU()
x=14
return A.b(B.a4y(m),$async$Am)
case 14:if(f!=null){x=12
break}l=new A.O(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4x("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Am)
case 15:k=f
x=16
return A.b(B.a4x("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Am)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Am)
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
return A.i($async$Am,w)},
a4y(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GK(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4w("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4y)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4y,w)},
a4z(d,e,f,g){return B.hi_(d,e,f,g)},
hi_(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4z=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GK(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4y(r),$async$a4z)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c26())>1048576||g.bf(d,new B.c27())){v=B.D4(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4K("myCode",d,a0),$async$a4z)
case 4:u=a3
try{t=C.Q.aE(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ci(s)||J.a9(s)!==g.gH(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.a9(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D4(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aW6(u,g.gH(d),a0),$async$a4z)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oW().aA(9999)
k=n.b
j=g.gH(d)
i=y.N
h=g.di(d,new B.c28(),i)
h=A.A(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aW_(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4z)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gH(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4z,w)},
D4(d,e,f,g,h){return B.hhX(d,e,f,g,h)},
hhX(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D4=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$D4)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c22())
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
a1=B.GO(a9,q)
a0=new A.IA(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D4)
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
return A.b(new A.a80(a1.a,a4,"media",a1.d,a2).w3(m,n,new A.Cr(!0,q.c)),$async$D4)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$D4)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMH(r),$async$D4)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gH(a6)
a1=l.di(a6,new B.c23(),e)
a1=A.A(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aW_(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D4)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMH(r),$async$D4)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gH(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D4,w)},
aW_(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aW_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4w(t),$async$aW_)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c21(),y.P)
r=A.A(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4x(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW_,w)},
Lu(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lu=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4w("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lu)
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
return A.b(B.aW0(k,a0),$async$Lu)
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
return A.b(B.aW5(h),$async$Lu)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SP(g,a0),$async$Lu)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.a9(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.O(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.A(new A.a5(r,new B.c24(),q),n)
d=A.A(new A.a5(r,new B.c25(),q),n)
q=A.A(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a4x("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$Lu)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lu,w)},
aW0(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aW0=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.hLB(k,j)
C.d.v(s,i)
x=5
return A.b(B.BF(l,m,"Received via My Code",t,e,i),$async$aW0)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMH(s),$async$aW0)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW0,w)},
c26:function c26(){},
c27:function c27(){},
c28:function c28(){},
c22:function c22(){},
c23:function c23(){},
c21:function c21(){},
c24:function c24(){},
c25:function c25(){},
fof(d,e){var x=0,w=A.j(y.H)
var $async$fof=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cs(A.eH(new B.fog(e),!1,null,y.H)),$async$fof)
case 2:return A.h(null,w)}})
return A.i($async$fof,w)},
byT(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cs(A.eH(new B.foh(g,e,f),!1,null,y.y)),$async$byT)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byT,w)},
fog:function fog(d){this.a=d},
foh:function foh(d,e,f){this.a=d
this.b=e
this.c=f},
SF:function SF(d,e){this.c=d
this.a=e},
aA0:function aA0(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dG3:function dG3(d,e){this.a=d
this.b=e},
SJ:function SJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA3:function aA3(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dHc:function dHc(d){this.a=d},
dHd:function dHd(d){this.a=d},
dHe:function dHe(d){this.a=d},
dHb:function dHb(d,e){this.a=d
this.b=e},
dHf:function dHf(d){this.a=d},
dHg:function dHg(d){this.a=d},
dHh:function dHh(d,e){this.a=d
this.b=e},
dHi:function dHi(d,e){this.a=d
this.b=e},
dHj:function dHj(d,e){this.a=d
this.b=e},
dHk:function dHk(d){this.a=d},
dHn:function dHn(){},
dHl:function dHl(d){this.a=d},
dHm:function dHm(d,e){this.a=d
this.b=e},
beM:function beM(){},
SG:function SG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA1:function aA1(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dG4:function dG4(d){this.a=d},
dG5:function dG5(d){this.a=d},
fAa(d){var x=d.hC
if(x>=0)return C.o.L(x)
return 10},
hi1(d){var x=d.k9
if(x>=0)return x
return 4.99},
hi0(d){var x=d.kR,w=y.N
w=x.iD(x,new B.c2a(),w,w)
return w},
fPL(d){var x=d.ka,w=y.N
w=x.iD(x,new B.c2b(),w,w)
return w},
aW3(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aW3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aW3)
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
return A.i($async$aW3,w)},
a4B(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$a4B)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4B)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
SI(d){var x=0,w=A.j(y.H),v,u
var $async$SI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$SI)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
fA9(d,e){var x,w,v
if(B.hi1(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hi0(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.c8(new A.O(Date.now(),0,!1))},
aW1(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fPL(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.c8(new A.O(Date.now(),0,!1))},
fPM(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fPL(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.c8(new A.O(Date.now(),0,!1))?v:new A.O(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amj(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amj)
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
return A.i($async$amj,w)},
amk(d){var x=0,w=A.j(y.H),v,u,t
var $async$amk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amj(d),$async$amk)
case 3:u=f
x=5
return A.b(A.aw(),$async$amk)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$amk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amk,w)},
ami(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ami=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fAa(d)
if(u<=0){v=!1
x=1
break}if(B.fA9(d,e)){v=!1
x=1
break}x=3
return A.b(B.amj(e),$async$ami)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ami,w)},
aW2(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aW2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GM(e,d),$async$aW2)
case 3:if(g){v=-1
x=1
break}u=B.fAa(d)
if(u<=0){v=-1
x=1
break}if(B.fA9(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amj(e),$async$aW2)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW2,w)},
c2d(d,e,f){var x=0,w=A.j(y.y),v
var $async$c2d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GM(e,d),$async$c2d)
case 3:if(h){v=!1
x=1
break}v=B.ami(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2d,w)},
c2c(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c2c=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c2d(d,u,i.gRI()),$async$c2c)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2c,w)},
a4A(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4A=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRI()){v=!0
x=1
break}if(B.aW1(d,u)){v=!0
x=1
break}x=5
return A.b(A.kZ(u,C.P5),$async$a4A)
case 5:x=k?3:4
break
case 3:B.fPM(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4A)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kE(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.P5,"Doc Share for Organizations"),$async$a4A)
case 7:if(!k){v=!1
x=1
break}B.fPM(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4A)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4A,w)},
c2a:function c2a(){},
c2b:function c2b(){},
foM(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$foM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$foM)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eWH.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hB([r],e.c))
s.toString
$.eWH.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foM,w)},
hNI(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eWH.bm($.eWH,new B.foO(d))},
foO:function foO(d){this.a=d},
eY1(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eY1=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bK(C.jc,null,y.H),$async$eY1)
case 3:C.yx.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lU()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eY1,w)},
adc(d,e,f){var x=0,w=A.j(y.H),v
var $async$adc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eXd.m(0,d,new B.a9q(A.bh(e,!0,v)))
x=3
return A.b(A.aw(),$async$adc)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.E(["parts",e,"size",f],v,y.C),null)),$async$adc)
case 2:return A.h(null,w)}})
return A.i($async$adc,w)},
ad6(d){return B.hxg(d)},
hxg(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ad6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eXd.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ad6)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aE(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b4(s,new B.f0y(),y.N)
n=A.A(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.L(o)
q=m==null?0:m
p=new B.a9q(r)
$.eXd.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ad6,w)},
OF(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EF.m(0,d,u)
x=3
return A.b(B.Pb(d,u),$async$OF)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OF,w)},
aKC(d){return B.hxe(d)},
hxe(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EF.h(0,d)
if(n!=null&&!C.aE.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pa(d),$async$aKC)
case 3:p=f
if(p!=null&&!C.aE.gah(p)){$.EF.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKC)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aF(r)
x=!J.ci(q)?9:10
break
case 9:B.OF(d,q)
x=11
return A.b(J.hA(s,d),$async$aKC)
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
return A.i($async$aKC,w)},
htI(d){if(d==null)return A.f6(null,y.K)
if(y.J.b(d))return A.f6(new Uint8Array(A.cl(J.eO(d,0,null))),y.K)
if(y.D.b(d))return A.f6(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f6(new Uint8Array(A.cl(A.AY(d,0,null))),y.K)
if(y.I.b(d))return A.f6(new Uint8Array(A.cl(d)),y.K)
return A.f6(null,y.K)},
a_f(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bL(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f4Q(r,t),!1,s)
A.fA(r,"error",new B.f4R(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.Jx,new B.f4S())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_f,w)},
aKW(d,e,f){return B.hzs(d,e,f)},
hzs(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKW=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_f(i),$async$aKW)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.a9(j)
x=11
return A.b(B.Pb(o,p),$async$aKW)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.a9(j)===0){x=1
break}x=12
return A.b(B.adc(k,j,s),$async$aKW)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a4(h)
$.al.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKW,w)},
aKV(d,e,f){return B.hzr(d,e,f)},
hzr(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKV=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKW(d,e,f),$async$aKV)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_f(f),$async$aKV)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EF.m(0,s,r)
$.OX.m(0,s,r)
x=11
return A.b(B.OF(s,r),$async$aKV)
case 11:q=h
if(!q)$.al.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a4(m)
$.al.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKV,w)},
An(d,e,f,g,h,i){return B.hia(d,e,f,g,h,i)},
hia(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$An=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cA.aA(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j8(p,q,o,n,new A.O(Date.now(),0,!1).a4().aa(),a0,f,B.aW9(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OF(s,d),$async$An)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aw(),$async$An)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cM.gcr().aF(d)),$async$An)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.al.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.zr(e),$async$An)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.EP(e,j),$async$An)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$An,w)},
SK(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zr(d),$async$SK)
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
k=B.fPO(n,null,l)
l=o.size
l.toString
j=new A.O(Date.now(),0,!1).a4().aa()
i=new B.j8(m,n,k,l,j,"From folder",null,B.aW9(),null)
$.adF.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_f(o),$async$SK)
case 7:g=a1
x=g!=null&&!C.aE.gah(g)?8:10
break
case 8:$.EF.m(0,h,g)
$.OX.m(0,h,g)
B.OF(h,g)
x=9
break
case 10:x=11
return A.b(B.aKV(d,m,o),$async$SK)
case 11:case 9:r.G(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EP(d,t),$async$SK)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
fAe(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fAe=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fPO(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GN(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aE.gah(s)){v=B.An(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAe,w)},
GN(d,e,f,g,h,i){return B.hi9(d,e,f,g,h,i)},
hi9(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GN=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cA.aA(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.IA(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GN)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ci(m)){x=6
break}J.fS(n,m)
o+=J.a9(m)
case 9:if(!(J.a9(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PI(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kn(0,1048576,J.a9(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pb(k,l),$async$GN)
case 11:J.ch(q,k);++p
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
return A.b(j.a9(0),$async$GN)
case 12:x=s.pop()
break
case 5:x=J.a9(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pb(k,new Uint8Array(A.cl(n))),$async$GN)
case 15:J.ch(q,k)
case 14:if(J.a9(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.adc(r,q,g),$async$GN)
case 16:f=new B.j8(i,a1,a0,g,new A.O(Date.now(),0,!1).a4().aa(),a2,null,B.aW9(),null)
x=17
return A.b(B.zr(d),$async$GN)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.EP(d,e),$async$GN)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GN,w)},
SM(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SM=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adF.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_f(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ad6(s),$async$SM)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pa(u[o]),$async$SM)
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
v=A.AY(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.OX.h(0,s)
if(i==null)i=$.EF.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qM(d,e),$async$SM)
case 12:i=a0
if(i!=null&&!C.aE.gah(i))$.OX.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AY(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SM,w)},
fPO(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qM(d,e){return B.hib(d,e)},
hib(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qM=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OX.h(0,f)
if(e==null)e=$.EF.h(0,f)
if(e!=null&&!C.aE.gah(e)){v=e
x=1
break}s=$.adF.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_f(s),$async$qM)
case 9:r=a3
if(r!=null&&!C.aE.gah(r)){$.EF.m(0,f,r)
$.OX.m(0,f,r)
B.OF(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a4(d)
$.al.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ad6(f),$async$qM)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auZ(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pa(g[l]),$async$qM)
case 16:k=a3
if(k!=null&&!C.aE.gah(k))n.G(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.akQ()
if(!C.aE.gah(r)){$.EF.m(0,f,r)
$.OX.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKC(f),$async$qM)
case 17:j=a3
if(j!=null&&!C.aE.gah(j)){$.OX.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SM(a0,a1,0,g),$async$qM)
case 20:i=a3
if(i!=null&&!C.aE.gah(i)){h=new Uint8Array(A.cl(i))
$.EF.m(0,f,h)
$.OX.m(0,f,h)
B.OF(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qM,w)},
hie(d){var x,w,v=$.adF.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hif(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hB([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hic(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amq(d,e,f,g,h){return B.hid(d,e,f,g,h)},
hid(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amq=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adF.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_f(s),$async$amq)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qM(g,e),$async$amq)
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
return A.b(n.hV(d).w3(h,r,new A.Cr(!0,e.c)),$async$amq)
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
$.al.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amq,w)},
fPQ(d,e,f,g,h){var x,w,v,u,t=$.fPP
$.fPP=t+1
x=Date.now()
w=""+1000*x+"_"+C.cA.aA(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2o.m(0,t,new B.br0(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auZ(u)))
return t},
fAf(d){var x=0,w=A.j(y.H)
var $async$fAf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fAf,w)},
GO(d,e){var $async$GO=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adF.h(0,h)
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
return A.py(B.SM(d,e,p,o<q?o:q),$async$GO,w)
case 8:n=a1
x=n!=null&&!C.aE.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.py(A.Ee(n),$async$GO,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.py(B.ad6("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GO,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.py(B.Pa(h[l]),$async$GO,w)
case 18:k=a1
x=k!=null&&!C.aE.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.py(A.Ee(k),$async$GO,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.py(B.qM(d,e),$async$GO,w)
case 22:j=a1
x=j!=null&&!C.aE.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.py(A.Ee(A.AY(j,p,o<i?o:i)),$async$GO,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.py(null,0,w)
case 2:return A.py(t.at(-1),1,w)}})
var x=0,w=A.fYg($async$GO,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h_3(w)},
aWb(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2o.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.G(0,e)
case 3:if(!(u.gH(u)>=1048576)){x=4
break}x=5
return A.b(t.a21(),$async$aWb)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWb,w)},
SL(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2o.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a21(),$async$SL)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.adc(r.c,u,r.z),$async$SL)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.O(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aW9(),null)
u=r.a
x=5
return A.b(B.zr(u),$async$SL)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.EP(u,s),$async$SL)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
a4H(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2o.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aej(u[s]),$async$a4H)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
c2q(d,e,f){var x=0,w=A.j(y.H)
var $async$c2q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw0(d,e,f),$async$c2q)
case 2:return A.h(null,w)}})
return A.i($async$c2q,w)},
c2r(d,e,f){var x=0,w=A.j(y.H)
var $async$c2r=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw1(d,e,f),$async$c2r)
case 2:return A.h(null,w)}})
return A.i($async$c2r,w)},
D5(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zr(d),$async$D5)
case 2:p=g
J.n_(p,new B.c2p(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EF.W(0,v)
$.adF.W(0,e)
x=3
return A.b(B.ad6(v),$async$D5)
case 3:u=g
$.eXd.W(0,v)
x=4
return A.b(A.aw(),$async$D5)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$D5)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$D5)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aej(s[q]),$async$D5)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aej(v),$async$D5)
case 13:x=14
return A.b(B.EP(d,p),$async$D5)
case 14:return A.h(null,w)}})
return A.i($async$D5,w)},
aWa(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qM(d,e),$async$aWa)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eY1(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWa,w)},
zr(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$zr)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aE(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f4T(),y.U)
r=A.A(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zr,w)},
EP(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$EP)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.f8M(),y.P)
t=A.A(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$EP)
case 3:return A.h(null,w)}})
return A.i($async$EP,w)},
bw0(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bw0)
case 3:u=h
t=J.cB(u)
s=t.bg(u,new B.f3x(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azQ(f))
x=4
return A.b(B.EP(d,u),$async$bw0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw0,w)},
bw1(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bw1)
case 3:u=h
t=J.cB(u)
s=t.bg(u,new B.f3y(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cyw(f))
x=4
return A.b(B.EP(d,u),$async$bw1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw1,w)},
a9q:function a9q(d){this.a=d},
f0y:function f0y(){},
f4Q:function f4Q(d,e){this.a=d
this.b=e},
f4R:function f4R(d){this.a=d},
f4S:function f4S(){},
c2p:function c2p(d){this.a=d},
br0:function br0(d,e,f,g,h,i,j,k,l){var _=this
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
f4T:function f4T(){},
f8M:function f8M(){},
f3x:function f3x(d){this.a=d},
f3y:function f3y(d){this.a=d},
a4I(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bf(d,new B.c2u())?3:4
break
case 3:x=5
return A.b(B.aWc(d,e),$async$a4I)
case 5:u=g
if(u!=null){t=u.c
B.Lw(d,u.b,e,t)}v=u
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
return A.b(B.aW7(s),$async$a4I)
case 10:case 9:if(g){v=new A.O2(1,D.OJ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SN(d,e),$async$a4I)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SS(!0,!0,d,e),$async$a4I)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Lw(d,D.xP,e,t)
v=new A.O2(p,D.xP,t)
x=1
break}v=B.c2t(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4I,w)},
SN(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4K(null,d,e),$async$SN)
case 3:p=g
try{u=C.Q.aE(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.a9(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aW6(p,d.length,e),$async$SN)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2r(e,C.d.gI(d).a,r.b),$async$SN)
case 7:case 6:q=r.a
x=8
return A.b(B.Lw(d,D.OJ,e,q),$async$SN)
case 8:v=new A.O2(d.length,D.OJ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
SO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lZ(D.m1)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4J(d,e),$async$SO)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c2m(s,d,e,t),$async$SO)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aW7(t),$async$SO)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qM(e,d),$async$SO)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SN(A.a([d],y.r),e),$async$SO)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
SQ(){var x=0,w=A.j(y.H)
var $async$SQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fA8(),$async$SQ)
case 2:x=3
return A.b(B.aMY(),$async$SQ)
case 3:return A.h(null,w)}})
return A.i($async$SQ,w)},
a4J(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aW9()
x=3
return A.b(B.c2q(e,d.a,u),$async$a4J)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4J,w)},
Lw(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lw=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OJ&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4J(p,f),$async$Lw)
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
return A.b(B.c2l(o,p,u,f),$async$Lw)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c2m(o,p,f,t),$async$Lw)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c2k(o,u,p,f),$async$Lw)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lw,w)},
aWc(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2s(e,d),$async$aWc)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SS(!1,!0,d,e),$async$aWc)
case 4:u=g
if(u!=null){t=u.b
v=new A.O2(u.a,D.xP,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWc,w)},
c2s(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SM(d,s,0,1),$async$c2s)
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
return A.i($async$c2s,w)},
c2t(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4K(null,d,e),$async$c2t)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fPN(u)
if(t.length>800){v=null
x=1
break}v=new A.O2(d.length,D.dcG,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2t,w)},
amr(d,e,f){return B.hii(d,e,f)},
hii(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amr=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.mf(g,1)
x=B.fAd(g)?3:4
break
case 3:x=5
return A.b(B.c2n(g),$async$amr)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cS(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mf(g,13))
try{k=B.D6(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a4(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cS(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mf(g,13))
u=9
x=12
return A.b(B.aW5(q),$async$amr)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SP(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a4(f)
$.al.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fAc(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SP(n,a0)
v=k
x=1
break}catch(a1){m=A.a4(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cS(g,"N2|")){v=B.GP(C.a.i(J.mf(g,3)),d,a0)
x=1
break}if(J.cS(g,"NGMYDOCSYNC2|")){v=B.GP(C.a.i(J.mf(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GP(h,d,a0)
x=1
break}if(J.eQ(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SP(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amr,w)},
GP(d,e,f){return B.hig(d,e,f)},
hig(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GP=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.aVY(r),$async$GP)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVY(A.cq(s,0,null)),$async$GP)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c2_(o,r,a1,n,a2),$async$GP)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.c1Z(q),$async$GP)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SP(l,a2),$async$GP)
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
$.al.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GP,w)},
a4K(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4K=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qM(f,r),$async$a4K)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcr().aF(q)],t,s))
x=3
break
case 4:u=A.R(t,y.C)
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
return A.i($async$a4K,w)},
SP(d,e){return B.hih(d,e)},
hih(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SP=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aE(0,a2,null)
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
return A.b(B.An(i,a3,d,k,l,o),$async$SP)
case 9:h=a5
if(h!=null)J.ch(n,h)
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
$.al.$1("[doc share bundle] "+A.t(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SP,w)},
Lv:function Lv(d,e){this.a=d
this.b=e},
c2u:function c2u(){},
ZQ(d){var x=A.L(d).ax.a===C.H,w=x?D.a9w:D.a7S,v=x?D.aaT:C.c,u=x?C.aO:C.M,t=x?C.bP:C.al,s=x?D.a8P:C.aJ
return new A.aCX([w,s,v,u,t,x?C.eY:C.bR])},
h3O(d,e){var x=e?C.w.j(0.72):C.aV
return A.ce(null,x,!0,null,new B.fsJ(e),d,null,!0,!0,y.N)},
c29(d,e,f,g,h,i,j,k,l){return new B.SH(e,l,d,f,k,j,g,h,i,null)},
WS(d,e,f,g,h,i,j){return new B.b9v(g,h,j,e,i,d,f,null)},
fsJ:function fsJ(d){this.a=d},
WP:function WP(d,e){this.c=d
this.a=e},
aw9:function aw9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cWx:function cWx(d){this.a=d},
cWv:function cWv(d){this.a=d},
cWw:function cWw(d){this.a=d},
bqG:function bqG(){},
SH:function SH(d,e,f,g,h,i,j,k,l,m){var _=this
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
aA2:function aA2(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dHa:function dHa(d){this.a=d},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGz:function dGz(d,e){this.a=d
this.b=e},
dG7:function dG7(d,e,f){this.a=d
this.b=e
this.c=f},
dG6:function dG6(d){this.a=d},
dG8:function dG8(d,e){this.a=d
this.b=e},
dGd:function dGd(d,e,f){this.a=d
this.b=e
this.c=f},
dGc:function dGc(d){this.a=d},
dGZ:function dGZ(d,e){this.a=d
this.b=e},
dH_:function dH_(d){this.a=d},
dGv:function dGv(d,e,f){this.a=d
this.b=e
this.c=f},
dGs:function dGs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dGb:function dGb(d){this.a=d},
dGD:function dGD(d){this.a=d},
dGC:function dGC(){},
dGh:function dGh(d){this.a=d},
dGW:function dGW(d,e){this.a=d
this.b=e},
dGX:function dGX(d,e){this.a=d
this.b=e},
dGY:function dGY(d,e){this.a=d
this.b=e},
dGt:function dGt(d,e){this.a=d
this.b=e},
dGu:function dGu(d,e){this.a=d
this.b=e},
dGP:function dGP(d,e){this.a=d
this.b=e},
dGL:function dGL(d){this.a=d},
dGK:function dGK(d){this.a=d},
dGM:function dGM(){},
dGN:function dGN(){},
dGO:function dGO(d,e){this.a=d
this.b=e},
dGQ:function dGQ(){},
dGR:function dGR(d){this.a=d},
dGJ:function dGJ(d,e){this.a=d
this.b=e},
dGE:function dGE(d){this.a=d},
dGF:function dGF(d){this.a=d},
dGG:function dGG(d){this.a=d},
dGH:function dGH(d){this.a=d},
dGI:function dGI(d){this.a=d},
dGe:function dGe(){},
dGf:function dGf(d){this.a=d},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
dG9:function dG9(d,e,f){this.a=d
this.b=e
this.c=f},
dGw:function dGw(d){this.a=d},
dGx:function dGx(d,e,f){this.a=d
this.b=e
this.c=f},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGm:function dGm(d){this.a=d},
dGj:function dGj(d,e,f){this.a=d
this.b=e
this.c=f},
dGn:function dGn(d){this.a=d},
dGo:function dGo(d){this.a=d},
dGp:function dGp(){},
dGr:function dGr(d,e){this.a=d
this.b=e},
dGk:function dGk(d){this.a=d},
dGi:function dGi(d,e,f){this.a=d
this.b=e
this.c=f},
dGl:function dGl(){},
dGB:function dGB(d){this.a=d},
dGA:function dGA(d,e){this.a=d
this.b=e},
dGV:function dGV(d,e){this.a=d
this.b=e},
dGS:function dGS(d){this.a=d},
dGT:function dGT(d,e){this.a=d
this.b=e},
dGU:function dGU(d){this.a=d},
dH7:function dH7(d){this.a=d},
dH5:function dH5(d){this.a=d},
dH6:function dH6(d){this.a=d},
dH8:function dH8(){},
dH9:function dH9(d,e){this.a=d
this.b=e},
dH1:function dH1(d,e){this.a=d
this.b=e},
dH2:function dH2(d,e,f){this.a=d
this.b=e
this.c=f},
dH0:function dH0(d,e,f){this.a=d
this.b=e
this.c=f},
dH3:function dH3(d,e){this.a=d
this.b=e},
dH4:function dH4(d,e){this.a=d
this.b=e},
aw6:function aw6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9u:function b9u(d,e,f){this.c=d
this.d=e
this.a=f},
cWt:function cWt(){},
cWu:function cWu(){},
a9K:function a9K(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWR:function cWR(){},
cWQ:function cWQ(d){this.a=d},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
awb:function awb(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWN:function cWN(d){this.a=d},
cWO:function cWO(d,e,f){this.a=d
this.b=e
this.c=f},
cWP:function cWP(d,e){this.a=d
this.b=e},
cWL:function cWL(d,e){this.a=d
this.b=e},
cWJ:function cWJ(d){this.a=d},
cWH:function cWH(d){this.a=d},
cWE:function cWE(d){this.a=d},
cWK:function cWK(d){this.a=d},
cWG:function cWG(d){this.a=d},
cWM:function cWM(d){this.a=d},
cWI:function cWI(d){this.a=d},
cWF:function cWF(d){this.a=d},
WO:function WO(d,e,f){this.c=d
this.d=e
this.a=f},
aw8:function aw8(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cWq:function cWq(d){this.a=d},
cWp:function cWp(d,e){this.a=d
this.b=e},
cWr:function cWr(d){this.a=d},
cWo:function cWo(d,e){this.a=d
this.b=e},
cWs:function cWs(d){this.a=d},
cWn:function cWn(d,e){this.a=d
this.b=e},
cWj:function cWj(d){this.a=d},
cWk:function cWk(d){this.a=d},
cWl:function cWl(d,e){this.a=d
this.b=e},
cWm:function cWm(d){this.a=d},
NF:function NF(d,e,f){this.c=d
this.d=e
this.a=f},
awe:function awe(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cX3:function cX3(d){this.a=d},
cX4:function cX4(d){this.a=d},
cX5:function cX5(d){this.a=d},
cX6:function cX6(d){this.a=d},
cX7:function cX7(d,e){this.a=d
this.b=e},
cX8:function cX8(d){this.a=d},
cXa:function cXa(d){this.a=d},
cX9:function cX9(d){this.a=d},
WT:function WT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
awc:function awc(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cX_:function cX_(d,e){this.a=d
this.b=e},
cX0:function cX0(d,e){this.a=d
this.b=e},
cWS:function cWS(d,e,f){this.a=d
this.b=e
this.c=f},
cWT:function cWT(d){this.a=d},
cWU:function cWU(){},
cWZ:function cWZ(){},
cWV:function cWV(d,e){this.a=d
this.b=e},
cWW:function cWW(d,e){this.a=d
this.b=e},
cWX:function cWX(d,e){this.a=d
this.b=e},
cWY:function cWY(d,e){this.a=d
this.b=e},
a9I:function a9I(d,e){this.c=d
this.a=e},
cWi:function cWi(d){this.a=d},
WN:function WN(d){this.a=d},
aw7:function aw7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WU:function WU(d,e){this.c=d
this.a=e},
awd:function awd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cX2:function cX2(d){this.a=d},
cX1:function cX1(d){this.a=d},
b9v:function b9v(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hij(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"VT"+C.d.fM(v)},
Lx(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$Lx)
case 3:if(!e){v=A.R(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_video_relay_v1",null,!1,C.bD),$async$Lx)
case 8:s=e
if(s==null){v=A.R(y.N,y.z)
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
$.al.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.R(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Lx,w)},
a4L(d){return B.hik(d)},
hik(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4L)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4L)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.al.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4L,w)},
SR(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lx(),$async$SR)
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
return A.b(B.a4L(s),$async$SR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SR,w)},
SS(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bW(),$async$SS)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bh(f,!0,y.U)
else{t=A.T(f).k("a5<1>")
u=A.A(new A.a5(f,new B.c2w(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hij()
t=A.T(u).k("J<1,a0<n,aB>>")
r=A.A(new A.J(u,new B.c2x(s),t),t.k("ai.E"))
x=6
return A.b(B.Lx(),$async$SS)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4L(q),$async$SS)
case 7:x=8
return A.b(B.a4M(r,u,g,s),$async$SS)
case 8:v=new A.bkR(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SS,w)},
ams(d){var x=0,w=A.j(y.y),v,u,t
var $async$ams=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lx(),$async$ams)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ams,w)},
c2y(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lx(),$async$c2y)
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
return A.i($async$c2y,w)},
a4M(d,e,f,g){return B.hil(d,e,f,g)},
hil(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4M=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.a9(q)===0){x=8
break}x=10
return A.b(B.amq("media",r,new B.c2v(s,e,g),f,q),$async$a4M)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SR(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4M)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SR(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4M)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SR(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4M)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4M,w)},
D6(d,e,f){return B.him(d,e,f)},
him(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D6=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$D6)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ams(b3),$async$D6)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kV,null,g),$async$D6)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ams(b3),$async$D6)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lx(),$async$D6)
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
l=new A.a80(a8.a,b0,"media",a8.d,a9).Bu(m)
k=A.cq(l,0,null)
x=17
return A.b(B.aVZ(k,n,o,s,b7),$async$D6)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a4(b4)
$.al.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
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
return A.b(new A.a80(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D6)
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
return A.b(B.a4L(e),$async$D6)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D6,w)},
c2w:function c2w(){},
c2x:function c2x(d){this.a=d},
c2v:function c2v(d,e,f){this.a=d
this.b=e
this.c=f},
aMY(){var x=0,w=A.j(y.H),v,u
var $async$aMY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hta=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aMY)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aMY)
case 3:u=$.fFd
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aMY)
case 4:$.fFd=$.hBc=$.hBd=null
return A.h(null,w)}})
return A.i($async$aMY,w)},
f8o(d){var x=0,w=A.j(y.H),v,u
var $async$f8o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2a){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f8p(new A.bL(u,y.aY))
x=3
return A.b(u.i0(0,C.hr,new B.f8q()),$async$f8o)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f8o,w)},
hBa(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hi3(x):x},
fFh(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amu(u)
x=1
break}v=B.fAc(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFh,w)},
fFg(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.amv(u)
x=1
break}v=B.fAc(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFg,w)},
fox(d){var x=0,w=A.j(y.T),v
var $async$fox=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amv(d),$async$fox)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fox,w)},
bwS(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fFg(d),$async$bwS)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aE(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.a9(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwS,w)},
eYQ(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eYQ=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SL(g)
x=1
break}if(d.gH(d)<=0){v=null
x=1
break}v=B.An(d.akQ(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYQ,w)},
ER(d,e,f){return B.hDp(d,e,f)},
hDp(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ER=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fFh(a1),$async$ER)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aE(0,e,null)
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
return A.b($.h5B().aA4(D.d1s,null),$async$ER)
case 4:l=d.fFd=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auZ(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f8T(f,k,new B.f8U(f,a2,k,j,a0,p),a2,j,a0,p,new A.bL(t,y.ch))
x=5
return A.b(l.a4S(0,new B.UY(r,"offer")),$async$ER)
case 5:d=l
x=7
return A.b(l.ahK(0),$async$ER)
case 7:x=6
return A.b(d.a4K(0,a4),$async$ER)
case 6:x=8
return A.b(B.f8o(l),$async$ER)
case 8:x=9
return A.b(l.alA(),$async$ER)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hBa(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amw(m,h),$async$ER)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fPN(h)
case 11:v=new A.bk9(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ER,w)},
f8p:function f8p(d){this.a=d},
f8q:function f8q(){},
f8U:function f8U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8T:function f8T(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f8S:function f8S(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hFb(d){switch(d){case"new":return D.dQj
case"checking":return D.dQk
case"connected":return D.dQm
case"completed":return D.dQl
case"failed":return D.dQo
case"disconnected":return D.dQp
case"closed":return D.aFw
case"count":return D.dQn}return D.aFw},
hFc(d){switch(d){case"new":return D.aFx
case"gathering":return D.dQq
case"complete":return D.a2a}return D.aFx},
hPa(d){switch(d){case"stable":return D.dQr
case"have-local-offer":return D.dQs
case"have-local-pranswer":return D.dQu
case"have-remote-offer":return D.dQt
case"have-remote-pranswer":return D.dQv
case"closed":return D.aFD}return D.aFD},
hNu(d){switch(d){case"new":return D.aFA
case"connecting":return D.aFB
case"connected":return D.aFC
case"closed":return D.a2b
case"disconnected":return D.aFz
case"failed":return D.aFy}return D.a2b},
a7_:function a7_(d,e){this.a=d
this.b=e},
Mx:function Mx(d,e){this.a=d
this.b=e},
UX:function UX(d,e){this.a=d
this.b=e},
Mw:function Mw(d,e){this.a=d
this.b=e},
Dz:function Dz(d,e){this.a=d
this.b=e},
cdi:function cdi(){},
fBT(d){var x=new B.Dy()
x.a=d
x.b=!0
return x},
Dy:function Dy(){this.b=this.a=$},
a6Z:function a6Z(){},
aqH:function aqH(){},
UY:function UY(d,e){this.a=d
this.b=e},
fA8(){var x=0,w=A.j(y.H)
var $async$fA8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fA8,w)},
fAb(d,e,f){var x=0,w=A.j(y.T),v
var $async$fAb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lZ(D.m1))){v=null
x=1
break}v=B.foM(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAb,w)},
fPN(d){var x,w=F.a7o.a1M(C.dB.aF(d),null)
if(w.length===0){x=C.dB.aF(d)
return C.cM.gcr().aF(x)}return C.cM.gcr().aF(w)},
hi2(d){var x,w,v=C.cw.aF(d)
try{x=C.c0.c6(0,F.a7n.b75(v,!1))
return x}catch(w){x=C.c0.c6(0,v)
return x}},
fAc(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hi2(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c0.c6(0,C.cw.aF(x))
return v}catch(u){return x}}return null},
hi3(d){var x,w,v,u,t,s=A.a([],y.s)
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
hi4(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"DS"+C.d.fM(v)},
aW4(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aW4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bD),$async$aW4)
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
$.al.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aW4,w)},
c2e(d,e){return B.hi5(d,e)},
hi5(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c2e=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c2e)
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
$.al.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2e,w)},
aW7(d){var x=0,w=A.j(y.y),v,u,t
var $async$aW7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aW4(d),$async$aW7)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW7,w)},
aW6(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aW6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hi4()
r=C.a.i(f)
t=C.dB.aF(s)
x=3
return A.b(B.c2e(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcr().aF(t),"usesRemaining",999999,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aW6)
case 3:if(!h){v=null
x=1
break}v=new A.YU("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW6,w)},
aW5(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aW5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.a9(o)===0){v=null
x=1
break}x=3
return A.b(B.aW4(o),$async$aW5)
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
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aW5,w)},
c2f(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c2f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.a9(q)===0){x=1
break}u=4
x=7
return A.b(X.bxN("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c2f)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.al.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2f,w)},
aW8(d){var x=0,w=A.j(y.h),v,u,t
var $async$aW8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GL(),$async$aW8)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW8,w)},
amn(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amn)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aW8(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amn,w)},
aml(d,e){var x=0,w=A.j(y.H)
var $async$aml=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$aml)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aml)
case 2:return A.h(null,w)}})
return A.i($async$aml,w)},
a4D(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4D=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4D)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GL(),$async$a4D)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4C(s),$async$a4D)
case 5:x=6
return A.b(B.aml(f,u),$async$a4D)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4D,w)},
a4E(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4E=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4E)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GL(),$async$a4E)
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
return A.b(B.aml(g,q),$async$a4E)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4C(u),$async$a4E)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4E,w)},
a4F(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4F=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4F)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GL(),$async$a4F)
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
s=B.aW1(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aw(),$async$a4F)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.O(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4F)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4F,w)},
c2g(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c2g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.a9(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c2g)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aE(0,r,null)
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
return A.i($async$c2g,w)},
GM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2g(d),$async$GM)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aW8(t),$async$GM)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amm(d),$async$GM)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aW1(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amm(d),$async$GM)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GM,w)},
amm(d){var x=0,w=A.j(y.H)
var $async$amm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amm)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amm)
case 2:return A.h(null,w)}})
return A.i($async$amm,w)},
aW9(){var x,w=$.oW(),v=J.dZ(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(32)]
return C.d.fM(v)},
a4G(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fAd(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c2j(d){return B.hi7(d)},
hi7(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c2j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4G(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bD),$async$c2j)
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
$.al.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2j,w)},
amp(d,e){return B.hi8(d,e)},
hi8(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4G(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$amp)
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
$.al.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amp,w)},
c2l(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4G(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amp(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2l)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2l,w)},
c2k(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2k=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4G(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amp(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2k)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2k,w)},
c2m(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c2m=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4G(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amp(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2m,w)},
c2n(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c2n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fAd(d)){v=null
x=1
break}x=3
return A.b(B.c2j(d),$async$c2n)
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
return A.i($async$c2n,w)},
a4N(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4N=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4N)
case 3:if(!e){v=A.R(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bD),$async$a4N)
case 8:s=e
if(s==null){v=A.R(y.N,y.z)
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
$.al.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.R(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4N,w)},
amt(d){return B.hin(d)},
hin(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$amt)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amt)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.al.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amt,w)},
amu(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.a9(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$amu)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4N(),$async$amu)
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
return A.b(B.amt(s),$async$amu)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a4(i)
$.al.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amu,w)},
amw(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bW(),$async$amw)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4N(),$async$amw)
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
return A.b(B.amt(u),$async$amw)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amw,w)},
amv(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bW(),$async$amv)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4N(),$async$amv)
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
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amv,w)},
alw(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alw)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fI),$async$alw)
case 7:q=g
o=q
o=o==null?null:J.f1(J.vY(o))
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
return A.i($async$alw,w)},
hLB(d,e){var x,w,v=J.dZ(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fna(d){return B.hLD(d)},
hLD(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fna=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Je(d,3600),$async$fna)
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
$.al.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fna,w)},
BF(d,e,f,g,h,i){var x=null
return B.hLA(d,e,f,g,h,i)},
hLA(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BF=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fPQ(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fAf(r),$async$BF)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fna(o),$async$BF)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4H(r),$async$BF)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIl)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JY(A.a([],g))
x=15
return A.b(d.eL(0,A.arw("GET",A.cq(n,0,null))).cJ(0,C.Dl),$async$BF)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4H(r),$async$BF)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.IA(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BF)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.a9(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWb(r,k),$async$BF)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BF)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.SL(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a4(a4)
$.al.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4H(r),$async$BF)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BF,w)},
aMH(d){return B.hLC(d)},
hLC(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMH)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.al.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMH,w)}},D,T,L,U,V,W,X,M,Y,N
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
B.cdj.prototype={
aA4(d,e){return this.cA0(d,e)},
cA0(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aA4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.R(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.k2(A.ct(t)))
t=J.k(u)
v=B.hmV(C.cM.gcr().aF(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aA4,w)}}
B.b0g.prototype={
brU(d){var x=this,w=x.w
w.onclose=A.h6(new B.cde(x))
w.onopen=A.h6(new B.cdf(x))
w.onmessage=A.h6(new B.cdg(x))
w.onbufferedamountlow=A.h6(new B.cdh(x))},
gdh(d){return this.x},
ae7(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ae7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dy()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fBT(J.f1(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ae7)
case 8:v=t.fBT(s.akK(f,0,null))
x=1
break
case 7:case 4:v=B.fBT(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ae7,w)}}
B.b0h.prototype={
brV(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h6(new B.cdk(x)))
w.addEventListener("icecandidate",A.h6(new B.cdl(x)))
w.addEventListener("iceconnectionstatechange",A.h6(new B.cdm(x)))
w.onicegatheringstatechange=A.h6(new B.cdn(x))
w.addEventListener("signalingstatechange",A.h6(new B.cdo(x)))
if(!$.fIG())w.addEventListener("connectionstatechange",A.h6(new B.cdp(x)))
w.addEventListener("negotiationneeded",A.h6(new B.cdq(x)))
w.addEventListener("track",A.h6(new B.cdr(x)))},
ahK(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k2(A.ct(A.R(y.N,y.z)))),y.aQ),$async$ahK)
case 3:t=f
v=new B.UY(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahK,w)},
a4K(d,e){return this.bhy(0,e)},
bhy(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4K)
case 2:return A.h(null,w)}})
return A.i($async$a4K,w)},
a4S(d,e){return this.bhO(0,e)},
bhO(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4S)
case 2:return A.h(null,w)}})
return A.i($async$a4S,w)},
alA(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.UY(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alA,w)},
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
B.a9J.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WQ.prototype={
S(){return new B.awa()},
gd6(){return this.c}}
B.awa.prototype={
Z(){this.a0()
this.aaY()},
aaY(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aW2(u.e,u.c),$async$aaY)
case 2:t=e
if(v.c!=null)v.n(new B.cWB(v,t))
return A.h(null,w)}})
return A.i($async$aaY,w)},
Ok(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ok=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ami(t.e,t.c,!1),$async$Ok)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.erJ)
x=1
break}x=4
return A.b(B.a4B(u.a.c,"individual"),$async$Ok)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3i(A.eH(new B.cWy(u),!1,null,y.H)),$async$Ok)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ok,w)},
HF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f6A(o),$async$HF)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4F(o.e,r,s,q),$async$HF)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.eoO)
x=1
break}x=5
return A.b(B.a4B(u.a.c,"member"),$async$HF)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3i(A.eH(new B.cWA(u),!1,null,y.H)),$async$HF)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HF,w)},
wV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4A(t.e,o,t.f,t.r,t.w,s),$async$wV)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4B(u.a.c,"org_owner"),$async$wV)
case 4:x=5
return A.b(B.amn(u.a.c),$async$wV)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f74(o),$async$wV)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4D(s,t,o,q.c),$async$wV)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.eoL)
x=1
break}x=10
return A.b(B.amn(u.a.c),$async$wV)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3i(A.eH(new B.cWz(u),!1,null,y.H)),$async$wV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wV,w)},
B(d){var x,w,v,u=this,t=null,s=A.L(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fAa(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.fz,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eJw,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.f0_,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bH0,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lk(new B.cWD(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aaa(C.eF,C.asF,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc5d(),t),C.aa],v))
p.push(new B.aaa(C.o4,C.Zg,"Team Member","Sign in with your organization access code + password",u.gc62(),t))
p.push(C.aa)
p.push(new B.aaa(C.afR,C.a_C,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5z(),t))
return A.cf(t,r,A.br(!0,A.cg(A.u(p,C.ad,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adg,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aaa.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.eq(A.B(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a1,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.en,A.D(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.op,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.L(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A1,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayE.prototype={}
B.aBL.prototype={}
B.j8.prototype={
lZ(d){var x=this.b,w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gamb(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.R(y.N,y.z)
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
b6C(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cyw(d){return this.b6C(null,d)},
azQ(d){return this.b6C(d,null)}}
B.SF.prototype={
S(){return new B.aA0(new A.cn(null,y.A))},
gd6(){return this.c}}
B.aA0.prototype={
Z(){this.a0()
this.aaZ()},
aaZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Am(u.a.c),$async$aaZ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dG3(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaZ,w)},
ab_(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ab_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$ab_)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.esD)
case 1:return A.h(v,w)}})
return A.i($async$ab_,w)},
Xk(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xk=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alw(s.d,4),$async$Xk)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_my_code_"+m+".png"),$async$Xk)
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
return A.i($async$Xk,w)},
aeA(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7A("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeA,w)},
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
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZF,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a1,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.acR,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.G,C.aB.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.cg(A.u(A.a([x,C.m9,w,C.ka,new A.en(A.p(p,A.pi(p,p,!1,B.hhZ(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ka,A.B(A.a([A.D(A.ey(M.Ag,C.R_,q.gbZr(),p),1),C.av,A.D(A.dk(C.xi,C.a4p,q.gbZs(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ey(L.Y9,D.eXe,q.gck9(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JX,p,p,C.ah)
x=r}return A.cf(l,n,x,p,!1,!1,p,p)}}
B.SJ.prototype={
S(){return new B.aA3(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aA3.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GK(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
Xl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GK(u.d.a.a)
if(t==null){u.n(new B.dHc(u))
x=1
break}u.n(new B.dHd(u))
s=u.a
r=s.c
x=3
return A.b(B.a4z(s.d,new B.dHe(u),t,r),$async$Xl)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dHf(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xl,w)},
a_q(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.n(new B.dHg(r))
u=4
q=J.fg(r.a.d)
x=7
return A.b(B.qM(r.a.c,q),$async$a_q)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dHh(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.a9(r.a.d)>1?"NGMY Doc Share ("+J.a9(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.af2(p,m,l,j,k),$async$a_q)
case 8:o=e
if(r.c!=null)r.n(new B.dHi(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a4(h)
if(r.c!=null)r.n(new B.dHj(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dHk(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_q,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===C.H,i=j?D.a9w:D.a7S,h=j?D.aaT:C.c,g=j?C.aO:C.M,f=j?C.bP:C.al,e=j?D.a8P:C.aJ
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
t=A.p(k,A.B(A.a([A.p(k,D.bw6,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.en,A.D(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZF,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tB(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.beM()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bl(k,k,k,C.JQ,k,k,"",k,!0,new A.b1(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b1(4,A.m(18),new A.ax(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ae,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dHl(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JC(l.a.d,4)
m=A.A(new A.J(m,new B.dHm(x,new A.aCX(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.a9(l.a.d)>4)m.push(new A.C(C.nk,A.d("+ "+(J.a9(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bs,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.enl)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dg(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.ic,k,k,k,C.eE,k,k,k)],r))}e=A.D(A.cg(A.u(e,C.ad,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bho,k,k,C.ah),1)
u=l.f?k:l.gcka()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(L.Y9,D.eY8,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ca,k,new A.b5(q,C.W),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZt()
t=A.bk(C.aB,k,k,0,C.c,k,C.mv,k,new A.b5(A.m(16),C.W),k,k,k)
return A.cf(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mx(new B.dHn(),A.u(A.a([e,new A.C(D.bgT,A.u(A.a([s,C.P,i,C.aa,A.bI(l.f?C.qN:D.eWE,u,t)],r),C.ad,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UD,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.beM.prototype={
nV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f3(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h0(C.bo,v.length),C.aL)}}
B.SG.prototype={
S(){return new B.aA1()}}
B.aA1.prototype={
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
ab0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ab0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dG4(r))
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
return A.b(B.a4E(p,m,n,o,C.a.i(l).length===0?null:l),$async$ab0)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.ese)
s=[1]
x=4
break}p.F(y.q).f.P(D.eqS)
p=r.c
p.toString
A.a7(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dG5(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ab0,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax.a===C.H?C.iT:C.oO,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.ePS,s,s,s,1,s,!0),p=A.p(s,D.baq,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.EN,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bCO,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCK,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bCY,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
v=t.r?s:t.gbZu()
u=A.bk(C.aB,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cf(q,r,A.cg(A.u(A.a([p,C.d1,o,C.aa,x,C.aa,w,C.m9,A.bI(t.r?C.qN:C.aKS,v,u)],y.p),C.ad,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.a9q.prototype={}
B.br0.prototype={
a21(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a21=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gH(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akQ()))
x=3
return A.b(B.Pb(t,s),$async$a21)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a21,w)},
gd6(){return this.a}}
B.Lv.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WP.prototype={
S(){return new B.aw9(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aw9.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cWx(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZA(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZQ(d),u=x.a.c,t=u?C.hm:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.G,C.aB.j(u?0.25:0.12),C.fz,32)],n),l=A.p(w,T.air,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.G,C.aB.j(0.4),C.cv,16)],n),C.ajd,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tB(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqG()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bl(w,w,w,C.Dy,w,w,"",w,!0,new A.b1(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b1(4,A.m(16),D.aPM),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ae,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cWv(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lA,w,w,w,w)
f=f[1]
f=A.D(A.dU(C.mW,new B.cWw(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.ca,w,new A.b5(A.m(14),C.W),new A.ax(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.cG,12)],n)
g=y.p
return A.ev(w,C.K,new A.d2(Q.I8,A.bQ(new A.C(C.wu,A.u(A.a([l,C.aN,k,C.P,j,C.dW,i,C.dW,A.B(A.a([f,C.av,A.D(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dLA,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZz(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LD,C.n),C.b7),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b7),w),w,w,w,C.JZ,C.cX,w,w,w)}}
B.bqG.prototype={
nV(d,e){return e.ahF(e.a.toUpperCase())}}
B.SH.prototype={
S(){return new B.aA2(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.aA2.prototype={
Z(){var x=this
x.a0()
x.rQ()
x.w=A.dD(C.iW,new B.dHa(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SQ()
this.a2()},
Zi(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lu(u.a.c),$async$Zi)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zr(u.a.c),$async$Zi)
case 4:u.n(new s.dGy(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zi,w)},
rQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lu(u.a.c),$async$rQ)
case 3:t=e
x=4
return A.b(B.zr(u.a.c),$async$rQ)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dGz(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LR(u.d)
B.Am(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rQ,w)},
LR(d){return this.bvK(d)},
bvK(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4J(r,u.a.c),$async$LR)
case 8:p=f
if(u.c==null){x=1
break}new B.dG7(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.lZ(D.m1))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SO(r,u.a.c),$async$LR)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zr(u.a.c),$async$LR)
case 12:u.n(new o.dG8(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LR,w)},
Mc(d){return this.bBJ(d)},
bBJ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4J(d,u.a.c),$async$Mc)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dGd(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$Mc)
case 6:u.hM("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$Mc)
case 7:u.hM("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Mc,w)},
hM(d){var x=null,w=this.c
if(w==null)return
w.F(y.q).f.P(A.b_(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rR(d,e){return this.cug(d,e)},
cug(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGZ(r,e))
u=3
x=6
return A.b(d.$0(),$async$rR)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dH_(r))
$.eI.lU()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rR,w)},
gaQw(){var x=this.a
return x.f||x.r||x.w},
GH(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQw()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c2c(s,n,r,q,o,t),$async$GH)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fgG(o,u.a.c),$async$GH)
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
return A.b(B.BH(s,o,r,q,n,t),$async$GH)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GH,w)},
Yp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amn(u.a.c),$async$Yp)
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
return A.b(A.a7(t,!1).cs(A.eH(new B.dGv(u,r,q),!1,null,y.H)),$async$Yp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yp,w)},
Zt(d){return this.cdY(d)},
cdX(){return this.Zt(1)},
cdY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQw()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amk(u.a.c),$async$Zt)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zt,w)},
a93(d,e,f){return this.bRM(d,e,f)},
bRM(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a93=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rR(new B.dGs(u,d,null,e,f),"Uploading\u2026"),$async$a93)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a93,w)},
bvT(){B.h36(!1,new B.dGb(this))
return},
ciN(){this.n(new B.dGD(this))},
auA(){var x=0,w=A.j(y.H),v=this
var $async$auA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvT()
return A.h(null,w)}})
return A.i($async$auA,w)},
a9_(){var x=0,w=A.j(y.H),v=this
var $async$a9_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGh(v),"Importing\u2026"),$async$a9_)
case 2:return A.h(null,w)}})
return A.i($async$a9_,w)},
Qi(d){return this.ctK(d)},
ctK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lZ(D.m1)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cs(A.eH(new B.dGW(u,d),!1,null,y.H)),$async$Qi)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lZ(D.Nw)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cs(A.eH(new B.dGX(u,d),!1,null,y.H)),$async$Qi)
case 8:x=1
break
case 7:x=u.bSt(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cs(A.eH(new B.dGY(u,d),!1,null,y.H)),$async$Qi)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qi,w)},
bSt(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cnY,C.a.aV(x,w+1).toLowerCase())},
ack(d){return this.c5h(d)},
c5h(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ack=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lZ(D.m1)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cs(A.eH(new B.dGt(u,d),!1,null,y.H)),$async$ack)
case 5:x=1
break
case 4:u.n(new B.dGu(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ack,w)},
PH(d){return this.clA(d)},
clA(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$PH)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dGP(u,d),"Preparing QR\u2026"),$async$PH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PH,w)},
aeZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aeZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dGQ(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.A(new A.a5(t,new B.dGR(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PH(r),$async$aeZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeZ,w)},
aeS(d){return this.cl9(d)},
cl9(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZQ(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGJ(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeS)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qi(d)
break
case"qr":u.PH(A.a([d],y.r))
break
case"send_my_code":u.c5S(A.a([d],y.r))
break
case"save":u.aee(d)
break
case"delete":u.Hp(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeS,w)},
Vn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dGe(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.A(new A.a5(t,new B.dGf(q),s),s.k("G.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$Vn)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dGg(u,r),"Preparing file\u2026"),$async$Vn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vn,w)},
adr(d){return this.cct(d)},
cct(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h3O(d,!1),$async$adr)
case 3:s=f
r=s==null
q=B.a4G(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adr,w)},
acq(){var x=0,w=A.j(y.H),v=this,u
var $async$acq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fof(u,v.a.c),$async$acq)
case 2:return A.h(null,w)}})
return A.i($async$acq,w)},
bvS(){B.h36(!1,new B.dGa(this,null))
return},
HE(d,e){return this.c5T(d,e)},
aW1(d){return this.HE(null,d)},
c5S(d){return this.HE(d,null)},
c5T(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a5<1>")
k=A.A(new A.a5(p,new B.dGw(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wf.c2().akb(!0,C.Wi,!1),$async$HE)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.rR(new B.dGx(l,s,r),"Preparing\u2026"),$async$HE)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a4(j)
$.al.$1("[doc share send my code pick] "+A.t(q))
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
return A.b(B.byT(p,l,e,s.a.c),$async$HE)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HE,w)},
GW(d){return this.bRz(d)},
bRz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hhY(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aW1(t),$async$GW)
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
return A.b(u.rR(new B.dGq(u,d),"Receiving video\u2026"),$async$GW)
case 11:x=1
break
case 10:x=12
return A.b(u.rR(new B.dGr(u,d),"Receiving\u2026"),$async$GW)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GW,w)},
CV(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BB()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adr(t),$async$CV)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GW(s),$async$CV)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cs(A.eH(new B.dGB(u),!1,null,y.N)),$async$CV)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rQ(),$async$CV)
case 10:x=1
break
case 9:x=11
return A.b(u.GW(C.a.i(r)),$async$CV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CV,w)},
aee(d){return this.cho(d)},
cho(d){var x=0,w=A.j(y.H),v=this
var $async$aee=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGA(v,d),"Saving\u2026"),$async$aee)
case 2:return A.h(null,w)}})
return A.i($async$aee,w)},
Hp(d){return this.bE0(d)},
bE0(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(B.c2f(t),$async$Hp)
case 6:case 5:s=d.a
x=7
return A.b(B.D5(u.a.c,s),$async$Hp)
case 7:u.r.W(0,s)
x=8
return A.b(u.rQ(),$async$Hp)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hp,w)},
af4(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZQ(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGV(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$af4)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acq()
break
case"import":u.a9_()
break}case 1:return A.h(v,w)}})
return A.i($async$af4,w)},
bZx(d){var x=d.c
if(C.a.a_(x,"video/")||d.lZ(D.m1))return C.pa
if(C.a.a_(x,"image/")||d.lZ(D.Nw))return C.rT
if(C.a.q(x,"pdf"))return E.Lb
return D.agg},
B(d){var x,w,v=this,u=null,t=B.ZQ(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EG,u,u,u,new B.dH5(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwC,u,u,u,v.e?u:v.gc5A(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gciM()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.br0:E.agF,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y6,u,u,u,v.e?u:v.gbZy(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.ns,u,u,u,v.e?u:v.gaX4(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.byg,u,u,u,v.e?u:new B.dH6(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lk(new B.dH7(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([p.j(A.L(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([C.aB.j(A.L(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mR(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.aw6(C.j1,s,!0,t,w?u:v.gclB(),u),1)
x.push(new A.C(D.bfF,A.mx(new B.dH8(),A.B(A.a([s,C.av,A.D(new B.aw6(C.ur,"Export",!1,t,w?u:v.gbHp(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ie,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9u(t,v.e?u:v.gaX4(),u)
else s=A.jT(!0,u,u,new B.dH9(v,t),s,u,D.bfx,u,u,!1,!1)
x.push(A.D(s,1))
return A.cf(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aw6.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.ua,t,new A.b5(s,C.W),t,t,t)
return A.dk(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ua,t,new A.b5(s,C.W),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ey(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eJ,t,t,t),u.r,v)}}
B.b9u.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mx(new B.cWt(),new A.C(E.Vv,A.u(A.a([A.mx(new B.cWu(),A.p(x,A.V(C.wP,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ev,C.ig,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dk(C.ns,D.f0h,this.d,A.bk(C.aB,x,x,x,C.c,x,C.Vq,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zp,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9K.prototype={
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
if(!o||i.lZ(D.m1))p=D.cT7
else{p=C.a.a_(p,"image/")||i.lZ(D.Nw)
n=y.O
p=p?A.a([C.cW,C.aB],n):A.a([C.aK.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gamb()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lZ(D.m1))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.D(A.u(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fx,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lZ(D.m1)))l.push(A.fy_(C.aB,!1,j,j,j,!1,j,j,new B.cWQ(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.np,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mx(new B.cWR(),new A.C(C.dZ,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.C(C.UX,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ax(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WR.prototype={
S(){return new B.awb()},
gd6(){return this.c}}
B.awb.prototype={
Z(){this.a0()
this.wM()},
p(){B.hic(this.e)
this.a2()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qM(o.c,o.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aE.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hif(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hie(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWN(s))
x=1
break}s.n(new B.cWO(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a4(l)
if(s.c==null){x=1
break}s.n(new B.cWP(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
a_p(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qM(t.c,t.d),$async$a_p)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.epk)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.af2(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_p)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_p,w)},
bRs(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k7(u,C.B,v,new B.cWL(w,t),C.fG,C.dn,!0,v,v,v,v)
else if(t!=null&&!C.aE.gah(t))x=A.fC(t,C.B,v,new B.cWM(w),C.fG,C.dn,!0,v,!1,v,v)
else return C.bF
return A.tK(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZQ(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ah,u,u,u,v.gb_N(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cr
else{q=v.r
if(q!=null)t=new A.C(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.em,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dk(C.Ah,D.eLE,v.gb_N(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRs()}return A.cf(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WO.prototype={
S(){return new B.aw8(A.afO(),C.bu,C.bu)},
gd6(){return this.c}}
B.aw8.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fm(w,A.a2(w).k("fm<1>")).hX(new B.cWq(v))
x.gcH6().hX(new B.cWr(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fm(x,A.a2(x).k("fm<1>"))}if(x==null)x=C.aVB
x.hX(new B.cWs(v))
v.wM()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qM(p.c,p.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cWj(s))
x=1
break}x=8
return A.b(s.d.AZ(0,new A.a1_(r,s.a.d.c)),$async$wM)
case 8:if(s.c==null){x=1
break}s.n(new B.cWk(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
if(s.c==null){x=1
break}s.n(new B.cWl(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
Xm(){var x=0,w=A.j(y.H),v=this,u
var $async$Xm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$Xm)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xm)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xm,w)},
aOt(d){var x=d.a
return C.a.aT(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZQ(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cr
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.brZ,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LD,C.n),o,88,o,o,o,o,o,88)
t=A.m8(C.aB,o,o,m,0,new B.cWm(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOt(p.w)+" / "+p.aOt(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.elV,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.wZ:C.iE,o,o,o,o,o)
x=A.u(A.a([u,C.ka,t,x,C.d1,A.dk(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZB(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cf(v,w,A.as(new A.C(C.ue,x,o),o,o,o),o,!1,!1,o,o)}}
B.NF.prototype={
S(){return new B.awe()},
gd6(){return this.c}}
B.awe.prototype={
Z(){this.a0()
this.NG()},
NG(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fAb(o.c,o.d,new B.cX3(s)),$async$NG)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cX4(s))
x=1
break}s.e=r
q=O.hEd(r)
if(q==null){s.n(new B.cX5(s))
x=1
break}s.d=q
q.aJ(0,s.gaVR())
x=8
return A.b(q.hW(0).cJ(0,C.rz),$async$NG)
case 8:if(s.c==null){x=1
break}s.n(new B.cX6(s))
x=9
return A.b(q.p5(0),$async$NG)
case 9:q.rr(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
if(s.c==null){x=1
break}s.n(new B.cX7(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NG,w)},
c3W(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cX8(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BH(0,x.gaVR())
w=x.d
if(w!=null)w.p()
B.hNI(x.e)
x.a2()},
ab3(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWa(u.c,u.d),$async$ab3)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ab3,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZQ(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.oa,t,t,t,u.gbZv(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i6(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cr
else{q=u.r
if(q!=null)s=new A.C(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afi(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fM(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.yZ(s,t),A.aJ(t,A.Fk(A.p(t,A.V(q?H.wZ:C.iE,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b9,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cXa(u),t,t,t,t,t,t,!1,C.af)],o),t),t)}else s=C.bF}}return A.cf(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WT.prototype={
S(){return new B.awc(new A.cn(null,y.A))}}
B.awc.prototype={
gcu0(){var x,w,v=this.a
if(v.e!==D.OK)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gctI(){var x,w,v=this.a
if(v.e!==D.xP)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcu0()
if(x!=null){v.OJ(x)
v.e=A.dD(R.Do,new B.cX_(v,x))}w=v.gctI()
if(w!=null){v.OI(w)
v.f=A.dD(C.h_,new B.cX0(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OI(d){return this.caK(d)},
caK(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ams(d),$async$OI)
case 3:t=f
x=4
return A.b(B.c2y(d),$async$OI)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWS(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
OJ(d){return this.caL(d)},
caL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fox(d),$async$OJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwS(t),$async$OJ)
case 4:if(u.c==null){x=1
break}u.n(new B.cWT(u))
u.c.F(y.q).f.P(D.aHX)
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
gbWj(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZw(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_a(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BB()){t=u.c
if(t!=null)t.F(y.q).f.P(D.eso)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cs(A.eH(new B.cWU(),!1,null,y.N)),$async$a_a)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwS(s),$async$a_a)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aHX)
case 1:return A.h(v,w)}})
return A.i($async$a_a,w)},
a7_(d){return this.bBK(d)},
bBK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aG(t,", "))),$async$a7_)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b_(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7_,w)},
ab1(d){return this.bBu(d)},
bBu(d){var x=0,w=A.j(y.H),v=this
var $async$ab1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$ab1)
case 2:if(d.e!=null)d.F(y.q).f.P(D.epN)
return A.h(null,w)}})
return A.i($async$ab1,w)},
a_5(d){return this.chq(d)},
chq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alw(s.d,4),$async$a_5)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_doc_share_qr.png"),$async$a_5)
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
return A.i($async$a_5,w)},
gaRz(){var x,w=this.a
if(w.e!==D.FO)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6X(d){return this.bBD(d)},
bBD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRz()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6X)
case 3:if(d.e!=null)d.F(y.q).f.P(D.ero)
case 1:return A.h(v,w)}})
return A.i($async$a6X,w)},
ab2(){var x=0,w=A.j(y.H),v=this,u
var $async$ab2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SQ(),$async$ab2)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$ab2,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZQ(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FO&&i!==D.OK&&i!==D.xP
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FO||t===D.OK||t===D.xP?l:A.aF(l,l,l,l,C.kA,l,l,l,m.gaU9(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bs,A.d(""+q.d+" file(s) \xb7 "+m.gbWj(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FO){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gbZw(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bBT,D.eU3,new B.cWV(m,d),l)],p))}if(m.a.e===D.FO&&m.gaRz()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a0,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.byB,D.eR7,new B.cWW(m,d),l)],p))
if(m.a.e===D.xP){x=(m.w?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cu:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}if(m.a.e===D.OK){x=(m.r?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cu:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l),C.aa,A.dk(D.bus,D.eWX,m.gchO(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.cf(v,w,new A.C(C.a8,A.u(A.a([A.D(A.p(l,A.u(q,C.m,l,C.b4,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.B(A.a([A.D(A.ey(M.Ag,C.R_,new B.cWX(m,d),l),1),C.av,A.D(A.dk(C.xi,C.a4p,new B.cWY(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bI(C.yi,m.gaU9(),A.bk(C.aK,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWZ(),y.C)}}
B.a9I.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cg(A.u(A.a([w,C.aN,A.p(x,A.pi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ah)
return A.eo(A.a([A.bI(C.BO,new B.cWi(d),x)],u),x,x,C.mi,v,x,x,x,x,D.eKI,x)}}
B.WN.prototype={
S(){return new B.aw7(A.y7(C.wb,C.n2,C.t2))}}
B.aw7.prototype={
p(){this.d.p()
this.a2()},
atj(d){var x,w,v,u,t
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
return A.cf(A.eA(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eRx,x,x,x,1,x,!0),C.w,A.y6(this.d,C.bM,this.gati()),x,!1,!1,x,x)}}
B.WU.prototype={
S(){return new B.awd(A.y7(C.wb,C.n2,C.t2))},
gd6(){return this.c}}
B.awd.prototype={
bSv(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q8("text/plain"),$async$acN)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.esi)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acN,w)},
a7K(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h3O(p,!0),$async$a7K)
case 3:t=e
p=t==null
s=B.a4G(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.eoV)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7K,w)},
p(){this.d.p()
this.a2()},
atj(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSv(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahx,v,v,v,w.gbGY(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yd,v,v,v,w.gc8a(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rR:P.KX,v,v,v,v,v),v,v,v,new B.cX2(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eXI,v,v,v,1,v,!0)
u=A.y6(w.d,C.bM,w.gati())
x=A.m(20)
return A.cf(t,C.w,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dQ0],s),v),v,!1,!1,v,v)}}
B.b9v.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nV
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nV:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.C(C.VB,A.B(A.a([u,C.ba,A.D(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ek,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a7_.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mx.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UX.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mw.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dz.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cdi.prototype={}
B.Dy.prototype={}
B.a6Z.prototype={}
B.aqH.prototype={}
B.UY.prototype={}
var z=a.updateTypes(["au<~>()","S(j8)","n(j8)","SH(Y)","~()","WQ(Y)","I(I,j8)","NF(Y)","~(lE)","co(Dy)","au<j8?>(@)","SF(Y)","SJ(Y)","C(j8)","j8(@)","a0<n,@>(j8)","WP(Y)","SG(Y)","WR(Y)","WO(Y)","WT(Y)","a9I(Y)","ak<j8>()","WU(Y)","a9K(Y,I)","WN(Y)","a0<n,aB>(j8)","co(UX)","co(a6Z)","au<co>(Dy)"])
B.cde.prototype={
$1(d){var x=this.a
x.x=D.aFv
x.y.G(0,D.aFv)},
$S:68}
B.cdf.prototype={
$1(d){var x=this.a
x.x=D.aFu
x.y.G(0,D.aFu)},
$S:68}
B.cdg.prototype={
$1(d){var x=this.a
x.ae7(A.aLr(d.data)).bw(new B.cdd(x),y.b)},
$S:68}
B.cdd.prototype={
$1(d){var x=this.a
x.z.G(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cdh.prototype={
$1(d){},
$S:68}
B.cdk.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hmU(d.channel))},
$S:15}
B.cdl.prototype={
$1(d){},
$S:15}
B.cdm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFb(w.iceConnectionState)
x.cx=w
if($.fIG())switch(w.a){case 0:x.cy=D.aFA
break
case 1:x.cy=D.aFB
break
case 3:x.cy=D.aFC
break
case 5:x.cy=D.aFy
break
case 6:x.cy=D.aFz
break
case 7:x.cy=D.a2b
break
default:break}},
$S:142}
B.cdn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFc(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.cdo.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hPa(w.signalingState)},
$S:142}
B.cdp.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hNu(w.connectionState)},
$S:142}
B.cdq.prototype={
$1(d){},
$S:142}
B.cdr.prototype={
$1(d){},
$S:15}
B.f3l.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"blobs")
if(!w)C.w8.Jc(x,"blobs")},
$S:198}
B.fo3.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uG.f1(this.b)
$.eI.lU()
this.c.$1(d)},
$S:450}
B.fo5.prototype={
$1(d){return this.a.$1(B.hvz(this.b,this.c))},
$S:31}
B.fo4.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fo2.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.foi.prototype={
$1(d){var x=this
return B.fUC(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.foj.prototype={
$1(d){var x=this
return B.fUC(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f4E.prototype={
$1(d){var x=this
return B.c29(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWB.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWy.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c29(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWA.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c29(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWz.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c29(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWD.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.B(A.a([A.aF(x,x,x,x,D.bt4,x,x,x,new B.cWC(d),x,x,x,x,x,x),A.D(A.Dk(D.Nj,!0,x,C.Xg,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nj,x,g,C.adA,0,e,f)},
$C:"$4",
$R:4,
$S:431}
B.cWC.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6D.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eo,y.o).w,t=this.a,s=t?C.hm:C.c,r=A.m(28),q=A.p(v,D.baJ,C.h,v,v,D.aRo,v,v,v,v,D.adr,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxa,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ae,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.C(new A.M(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.C(C.zE,A.u(A.a([o,C.aa,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahM,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ae,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v),C.bs,A.B(A.a([A.D(A.dU(C.dd,new B.f6B(d),v),1),C.av,A.D(A.bI(D.eQa,new B.f6C(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JF,v,v,v,v),v)},
$S:57}
B.f6B.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6C.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eq1)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayE(v,x))},
$S:0}
B.f76.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eo,y.o).w,u=x.a,t=u?C.hm:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.M(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.bay,C.h,w,w,D.aSK,w,w,w,w,D.adr,w,w,1/0),new A.C(C.zE,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fF1(u,"Organization name",C.E0,w),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fF1(u,"Access code",C.mB,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fF1(u,"Member password",N.EB,w),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.bs,A.bI(D.eXM,new B.f75(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JF,w,w,w,w),w)},
$S:57}
B.f75.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eq6)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBL(u,x,w))},
$S:0}
B.c20.prototype={
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
return A.b(A.uv(p,null).cJ(0,C.UC),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.An(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.al.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c26.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c27.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c28.prototype={
$1(d){return d.b},
$S:z+2}
B.c22.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c23.prototype={
$1(d){return d.b},
$S:z+2}
B.c21.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c24.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c25.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fog.prototype={
$1(d){return new B.SF(this.a,null)},
$S:z+11}
B.foh.prototype={
$1(d){return new B.SJ(this.a,this.b,this.c,null)},
$S:z+12}
B.dG3.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dHc.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dHd.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dHe.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dHb(x,d))},
$S:2}
B.dHb.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHf.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHg.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dHh.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dHi.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHj.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dHk.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHn.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.dHl.prototype={
$1(d){var x=this.a
return x.f?null:x.Xl()},
$S:2}
B.dHm.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lZ(D.Nw))s=C.rT
else s=C.a.a_(s,"video/")||d.lZ(D.m1)?C.pa:D.agg
x=this.b.a
w=y.p
return new A.C(C.ll,A.B(A.a([A.p(v,A.V(s,C.aB,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gamb(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dG4.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dG5.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c2a.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.c2b.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.foO.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f0y.prototype={
$1(d){return J.k(d)},
$S:17}
B.f4Q.prototype={
$1(d){var x=this.b
B.htI(C.DO.ga3A(this.a)).bw(x.gcwV(x),y.H)},
$S:120}
B.f4R.prototype={
$1(d){return this.a.d0(0,null)},
$S:120}
B.f4S.prototype={
$0(){return null},
$S:11}
B.c2p.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f4T.prototype={
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
B.f8M.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f3x.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3y.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2u.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m1)},
$S:z+1}
B.fsJ.prototype={
$1(d){return new B.WP(this.a,null)},
$S:z+16}
B.cWx.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:8}
B.cWv.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cWw.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dHa.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zi()},
$S:14}
B.dGy.prototype={
$0(){var x=J.bzV(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGz.prototype={
$0(){var x=J.bzV(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dG7.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dG6(this.b))
if(w>=0){x=x.d
x[w]=x[w].azQ(this.c)}},
$S:0}
B.dG6.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dG8.prototype={
$0(){var x=J.bzV(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGd.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dGc(this.b))
if(w>=0){x=x.d
x[w]=x[w].azQ(this.c)}},
$S:0}
B.dGc.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGZ.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dH_.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dGv.prototype={
$1(d){return new B.SG(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dGs.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GH(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SK(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rQ(),$async$$0)
case 5:s=J.a6(t)
x=s.gcg(t)?6:7
break
case 6:x=8
return A.b(r.Zt(s.gH(t)),$async$$0)
case 8:case 7:r.hM(s.gah(t)?u.d:u.e+" "+s.gH(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGb.prototype={
$1(d){this.a.a93(d,"No files selected.","Added")},
$S:450}
B.dGD.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dGC(),A.T(x).k("J<1,n>")))},
$S:0}
B.dGC.prototype={
$1(d){return d.a},
$S:z+2}
B.dGh.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wf.c2().cJ0(C.Wi,!0),$async$$0)
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
$.al.$1("[doc share import] "+A.t(p))
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
return A.b(B.amr(null,m,o.a.c),$async$$0)
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
B.dGW.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dGX.prototype={
$1(d){return new B.WR(this.a.a.c,this.b,null)},
$S:z+18}
B.dGY.prototype={
$1(d){return new B.WO(this.a.a.c,this.b,null)},
$S:z+19}
B.dGt.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dGu.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.G(0,w)},
$S:0}
B.dGP.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GH(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4I(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cdX(),$async$$0)
case 5:x=6
return A.b(p.rQ(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dGL(p),r),new B.dGM(),r.k("J<ai.E,n>")).bZ(0,new B.dGN())
q=A.A(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cs(A.eH(new B.dGO(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SQ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGL.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dGK(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dGK.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGM.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dGN.prototype={
$1(d){return d.length!==0},
$S:3}
B.dGO.prototype={
$1(d){var x=this.a
return new B.WT(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dGQ.prototype={
$1(d){return d.a},
$S:z+2}
B.dGR.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGJ.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.as(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kq,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gamb(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lZ(D.m1)?C.rV:C.o8
p=!x||p.lZ(D.m1)?"Play video":"View"
return A.bQ(A.br(!0,new A.C(C.zA,A.u(A.a([q,o,t,C.ay,B.WS(!1,u,!1,w,p,new B.dGE(d),v),B.WS(!1,u,!1,C.j1,"Share via QR",new B.dGF(d),"Letters/numbers QR code"),B.WS(!1,u,!1,D.Xl,"Send to their Code",new B.dGG(d),"Enter someone else's personal code"),B.WS(!1,u,!1,C.hh,"Download / save",new B.dGH(d),v),C.ar,B.WS(!1,u,!0,C.e4,"Delete",new B.dGI(d),v)],y.p),C.ad,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c2(new A.ax(r,1,C.r,-1),C.W,C.W,C.W),C.kg,v,v,C.n),C.b7)},
$S:684}
B.dGE.prototype={
$0(){A.a7(this.a,!1).K("view")
return null},
$S:0}
B.dGF.prototype={
$0(){A.a7(this.a,!1).K("qr")
return null},
$S:0}
B.dGG.prototype={
$0(){A.a7(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dGH.prototype={
$0(){A.a7(this.a,!1).K("save")
return null},
$S:0}
B.dGI.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
B.dGe.prototype={
$1(d){return d.a},
$S:z+2}
B.dGf.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGg.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4K(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.EU(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oz(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGa.prototype={
$1(d){var x=this.a
x.rR(new B.dG9(x,d,this.b),"Preparing\u2026")},
$S:450}
B.dG9.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SK(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byT(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGw.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dGx.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fAe(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.G(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGq.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.ER(new B.dGm(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.dGn(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dGo(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dl,new B.dGp()),$async$$0)
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
B.dGm.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGj(x,d,e))},
$S:132}
B.dGj.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGn.prototype={
$1(d){return new B.a9I(this.a.a,null)},
$S:z+21}
B.dGo.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dGp.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dGr.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GK(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4y(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aW1(B.GK(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amr(new B.dGk(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.fAd(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rQ(),$async$$0)
case 10:o=J.cB(r)
p=o.eD(r,new B.dGl()).gH(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gH(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGk.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGi(x,d,e))},
$S:132}
B.dGi.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGl.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m1)},
$S:z+1}
B.dGB.prototype={
$1(d){return new B.WU(this.a.a.c,null)},
$S:z+23}
B.dGA.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWa(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGV.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aB.j(0.35)
return A.bQ(A.br(!0,new A.C(C.zA,A.u(A.a([A.as(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kq,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.WS(!0,w,!1,C.mB,"My Code",new B.dGS(d),"Your personal code & QR \u2014 others send docs to you"),B.WS(!1,w,!1,D.Xl,"Send to their Code",new B.dGT(this.a,d),"Enter someone else's 5-digit code + letter"),B.WS(!1,w,!1,S.x7,"Import backup",new B.dGU(d),".ngmydoc file from another device")],y.p),C.ad,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c2(new A.ax(t,1,C.r,-1),C.W,C.W,C.W),C.kg,x,x,C.n),C.b7)},
$S:684}
B.dGS.prototype={
$0(){A.a7(this.a,!1).K("my_code")
return null},
$S:0}
B.dGT.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.bvS()},
$S:0}
B.dGU.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dH7.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.GT(D.Nj,x,C.Xg,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nj).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dH5.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dH6.prototype={
$0(){this.a.af4()
return null},
$S:0}
B.dH8.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:107}
B.dH9.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9K(e,w,v,this.b,x.e,x.bZx(w),new B.dH1(x,w),new B.dH2(x,v,w),new B.dH3(x,w),new B.dH4(x,w),null)},
$S:z+24}
B.dH1.prototype={
$0(){this.a.ack(this.b)
return null},
$S:0}
B.dH2.prototype={
$0(){var x=this.a
return x.n(new B.dH0(x,this.b,this.c))},
$S:0}
B.dH0.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.G(0,w)},
$S:0}
B.dH3.prototype={
$0(){this.a.Mc(this.b)
return null},
$S:0}
B.dH4.prototype={
$0(){this.a.aeS(this.b)
return null},
$S:0}
B.cWt.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:107}
B.cWu.prototype={
$3(d,e,f){return A.e5(C.B,f,e,null,null)},
$S:134}
B.cWR.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.cWQ.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cWN.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWO.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWP.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWL.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aE.gah(w))return A.fC(w,C.B,x,new B.cWJ(this.a),C.fG,C.dn,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWK(this.a))
return C.bF},
$S:140}
B.cWJ.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWH(this.a))
return C.bF},
$S:186}
B.cWH.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWE(x))},
$S:8}
B.cWE.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWK.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWG(x))},
$S:8}
B.cWG.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWM.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWI(this.a))
return C.bF},
$S:186}
B.cWI.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWF(x))},
$S:8}
B.cWF.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWq.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWp(x,d))},
$S:1735}
B.cWp.prototype={
$0(){return this.a.f=this.b===C.tq},
$S:0}
B.cWr.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWo(x,d))},
$S:8}
B.cWo.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cWs.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWn(x,d))},
$S:8}
B.cWn.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cWj.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cWk.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cWl.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cWm.prototype={
$1(d){return this.a.d.Lf(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cX3.prototype={
$0(){var x=this.a.a
return B.qM(x.c,x.d)},
$S:1736}
B.cX4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cX5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cX6.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cX7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cX8.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cXa.prototype={
$0(){var x=this.a
x.n(new B.cX9(x))},
$S:0}
B.cX9.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cX_.prototype={
$1(d){return this.a.OJ(this.b)},
$S:14}
B.cX0.prototype={
$1(d){return this.a.OI(this.b)},
$S:14}
B.cWS.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWT.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWU.prototype={
$1(d){return D.f9R},
$S:z+25}
B.cWZ.prototype={
$2(d,e){if(d)B.SQ()},
$S:118}
B.cWV.prototype={
$0(){return this.a.a7_(this.b)},
$S:0}
B.cWW.prototype={
$0(){return this.a.a6X(this.b)},
$S:0}
B.cWX.prototype={
$0(){return this.a.ab1(this.b)},
$S:0}
B.cWY.prototype={
$0(){return this.a.a_5(this.b)},
$S:0}
B.cWi.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cX2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cX1(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cX1.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2w.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m1)},
$S:z+1}
B.c2x.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2v.prototype={
$2(d,e){return this.bdB(d,e)},
bdB(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SR(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1737}
B.f8p.prototype={
$1(d){if(d===D.a2a&&(this.a.a.a&30)===0)this.a.fB(0)},
$S:z+27}
B.f8q.prototype={
$0(){},
$S:11}
B.f8U.prototype={
bf9(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eYQ(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fPQ(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bf9(d,e)},
$S:522}
B.f8T.prototype={
$1(d){var x=this
d.b=new B.f8S(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f8S.prototype={
$1(d){return this.bf8(d)},
bf8(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWb(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.G(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aE(0,n,null)
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
return A.b(B.eYQ(l,n.b,m,n.c,s.d),$async$$1)
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
$.al.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4H(m),$async$$1)
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
x(v=B.awa.prototype,"gc5d","Ok",0)
x(v,"gc62","HF",0)
x(v,"gc5z","wV",0)
x(v=B.aA0.prototype,"gbZr","ab_",0)
x(v,"gbZs","Xk",0)
x(v,"gck9","aeA",0)
x(v=B.aA3.prototype,"gbZt","Xl",0)
x(v,"gcka","a_q",0)
x(B.aA1.prototype,"gbZu","ab0",0)
x(B.aw9.prototype,"gbZz","bZA",4)
x(v=B.aA2.prototype,"gc5A","Yp",0)
x(v,"gciM","ciN",4)
x(v,"gaX4","auA",0)
x(v,"gclB","aeZ",0)
x(v,"gbHp","Vn",0)
x(v,"gbZy","CV",0)
x(B.awb.prototype,"gb_N","a_p",0)
x(B.aw8.prototype,"gbZB","Xm",0)
x(v=B.awe.prototype,"gaVR","c3W",4)
x(v,"gbZv","ab3",0)
x(v=B.awc.prototype,"gchO","a_a",0)
x(v,"gaU9","ab2",0)
w(B.aw7.prototype,"gati","atj",8)
x(v=B.awd.prototype,"gc8a","acN",0)
x(v,"gbGY","a7K",0)
w(v,"gati","atj",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.cdi,B.a6Z,B.aqH,B.ayE,B.aBL,B.j8,B.a9q,B.br0,B.Dy,B.UY])
w(B.cdj,B.cdi)
w(B.b0g,B.a6Z)
x(A.i2,[B.cde,B.cdf,B.cdg,B.cdd,B.cdh,B.cdk,B.cdl,B.cdm,B.cdn,B.cdo,B.cdp,B.cdq,B.cdr,B.f3l,B.fo3,B.fo5,B.fo4,B.foi,B.foj,B.f4E,B.cWy,B.cWA,B.cWz,B.cWD,B.f6D,B.f76,B.c20,B.c27,B.c28,B.c23,B.c21,B.c24,B.c25,B.fog,B.foh,B.dHe,B.dHn,B.dHl,B.dHm,B.f0y,B.f4Q,B.f4R,B.c2p,B.f4T,B.f8M,B.f3x,B.f3y,B.c2u,B.fsJ,B.cWx,B.cWv,B.dHa,B.dG6,B.dGc,B.dGv,B.dGb,B.dGC,B.dGW,B.dGX,B.dGY,B.dGt,B.dGL,B.dGK,B.dGM,B.dGN,B.dGO,B.dGQ,B.dGR,B.dGJ,B.dGe,B.dGf,B.dGa,B.dGw,B.dGn,B.dGl,B.dGB,B.dGV,B.dH7,B.dH8,B.cWt,B.cWu,B.cWR,B.cWQ,B.cWL,B.cWJ,B.cWH,B.cWK,B.cWM,B.cWI,B.cWq,B.cWr,B.cWs,B.cWm,B.cX_,B.cX0,B.cWU,B.c2w,B.c2x,B.f8p,B.f8T,B.f8S])
w(B.b0h,B.aqH)
x(A.jk,[B.fo2,B.cWB,B.cWC,B.f6B,B.f6C,B.f75,B.dG3,B.dHc,B.dHd,B.dHb,B.dHf,B.dHg,B.dHh,B.dHi,B.dHj,B.dHk,B.dG4,B.dG5,B.f4S,B.cWw,B.dGy,B.dGz,B.dG7,B.dG8,B.dGd,B.dGZ,B.dH_,B.dGs,B.dGD,B.dGh,B.dGu,B.dGP,B.dGE,B.dGF,B.dGG,B.dGH,B.dGI,B.dGg,B.dG9,B.dGx,B.dGq,B.dGj,B.dGo,B.dGp,B.dGr,B.dGi,B.dGA,B.dGS,B.dGT,B.dGU,B.dH5,B.dH6,B.dH1,B.dH2,B.dH0,B.dH3,B.dH4,B.cWN,B.cWO,B.cWP,B.cWE,B.cWG,B.cWF,B.cWp,B.cWo,B.cWn,B.cWj,B.cWk,B.cWl,B.cX3,B.cX4,B.cX5,B.cX6,B.cX7,B.cX8,B.cXa,B.cX9,B.cWS,B.cWT,B.cWV,B.cWW,B.cWX,B.cWY,B.cWi,B.cX2,B.cX1,B.f8q])
x(A.mb,[B.a9J,B.Lv,B.a7_,B.Mx,B.UX,B.Mw,B.Dz])
x(A.ae,[B.WQ,B.SF,B.SJ,B.SG,B.WP,B.SH,B.WR,B.WO,B.NF,B.WT,B.WN,B.WU])
x(A.ag,[B.awa,B.aA0,B.aA3,B.aA1,B.aw9,B.aA2,B.awb,B.aw8,B.awe,B.awc,B.aw7,B.awd])
x(A.ar,[B.aaa,B.aw6,B.b9u,B.a9K,B.a9I,B.b9v])
x(A.kx,[B.c26,B.c22,B.c2a,B.c2b,B.foO,B.dGm,B.dGk,B.dH9,B.cWZ,B.c2v,B.f8U])
x(A.iG,[B.beM,B.bqG])})()
A.kd(b.typeUniverse,JSON.parse('{"b0g":{"a6Z":[]},"b0h":{"aqH":[]},"WQ":{"ae":[],"r":[]},"awa":{"ag":["WQ"]},"aaa":{"ar":[],"r":[]},"SF":{"ae":[],"r":[]},"SJ":{"ae":[],"r":[]},"aA0":{"ag":["SF"]},"aA3":{"ag":["SJ"]},"beM":{"iG":[]},"SG":{"ae":[],"r":[]},"aA1":{"ag":["SG"]},"WP":{"ae":[],"r":[]},"SH":{"ae":[],"r":[]},"a9K":{"ar":[],"r":[]},"WR":{"ae":[],"r":[]},"WO":{"ae":[],"r":[]},"NF":{"ae":[],"r":[]},"WT":{"ae":[],"r":[]},"a9I":{"ar":[],"r":[]},"WN":{"ae":[],"r":[]},"WU":{"ae":[],"r":[]},"aw9":{"ag":["WP"]},"bqG":{"iG":[]},"aA2":{"ag":["SH"]},"aw6":{"ar":[],"r":[]},"b9u":{"ar":[],"r":[]},"awb":{"ag":["WR"]},"aw8":{"ag":["WO"]},"awe":{"ag":["NF"]},"awc":{"ag":["WT"]},"aw7":{"ag":["WN"]},"awd":{"ag":["WU"]},"b9v":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tu"),k:x("K1()"),m:x("bt<n,n>"),F:x("qp"),g:x("au<j8?>"),x:x("au<~>"),V:x("N<aa>"),O:x("N<x>"),W:x("N<be>"),Y:x("N<a0<n,S>>"),t:x("N<a0<n,@>>"),r:x("N<j8>"),w:x("N<+file,name(lf,n)>"),u:x("N<cI>"),s:x("N<n>"),E:x("N<iG>"),a:x("N<dz>"),p:x("N<r>"),Z:x("N<I>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("ak<j8>"),j:x("ak<@>"),I:x("ak<I>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hSY"),af:x("CO"),U:x("j8"),b:x("co"),C:x("aB"),aK:x("vf"),ab:x("Dy"),br:x("aqH"),v:x("UY"),N:x("n"),X:x("bm<Q>"),Q:x("lq"),D:x("dz"),aw:x("cv<n>"),cd:x("a5<a0<n,@>>"),c7:x("r"),ch:x("bL<ak<j8>>"),aW:x("bL<dz?>"),aY:x("bL<~>"),cx:x("a9J"),b1:x("bd<ak<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayE"),bG:x("aBL"),q:x("mz"),B:x("oQ<Dy>"),c6:x("oQ<a7_>"),y:x("S"),i:x("Q"),z:x("@"),S:x("I"),aQ:x("be?"),_:x("ak<j8>?"),aL:x("ak<@>?"),h:x("a0<n,@>?"),l:x("j8?"),R:x("aB?"),c:x("UY?"),d:x("+answerQr,transfer(n,au<ak<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,Lv,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9q?"),bk:x("ayE?"),ag:x("aBL?"),dd:x("Q?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPM=new A.ax(C.aB,2,C.r,-1)
D.bFh=new A.a8(C.a1,C.a7,C.x,C.Zg,null,null)
D.aRo=new A.o(null,null,null,C.mf,null,D.bFh,C.n)
D.aSK=new A.o(null,null,null,C.mf,null,E.EN,C.n)
D.a7S=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8P=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9w=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaT=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eLy=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eYD=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.H8,null,null,null,null,null,null,null,null,null)
D.cM7=x([D.eLy,C.ar,D.eYD],y.p)
D.baq=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cM7,null)
D.f1x=new A.w("Create your organization",null,C.h8,null,null,null,null,null,null,null,null,null)
D.ePv=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.H8,null,null,null,null,null,null,null,null,null)
D.cZy=x([D.f1x,C.ar,D.ePv],y.p)
D.bay=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cZy,null)
D.eZa=new A.w("Team Member sign-in",null,C.h8,null,null,null,null,null,null,null,null,null)
D.eSY=new A.w("Enter the access code and password from your organization.",null,G.H8,null,null,null,null,null,null,null,null,null)
D.cXJ=x([D.eZa,C.ar,D.eSY],y.p)
D.baJ=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cXJ,null)
D.bfx=new A.M(16,10,16,28)
D.bfF=new A.M(16,14,16,4)
D.bgT=new A.M(20,0,20,16)
D.bho=new A.M(20,8,20,16)
D.adr=new A.M(24,22,24,20)
D.Xl=new A.a_(63394,"MaterialIcons",!1)
D.agg=new A.a_(63515,"MaterialIcons",!1)
D.br0=new A.a_(983813,"MaterialIcons",!1)
D.boh=new A.a_(62867,"MaterialIcons",!1)
D.brZ=new A.ac(D.boh,44,C.c,null,null,null)
D.bt4=new A.ac(C.rN,null,C.ak,null,null,null)
D.bus=new A.ac(C.iF,18,null,null,null,null)
D.bw6=new A.ac(D.Xl,26,C.c,null,null,null)
D.bwC=new A.ac(C.Er,null,null,null,null,null)
D.bxa=new A.ac(C.x9,null,null,null,null,null)
D.byg=new A.ac(W.La,null,null,null,null,null)
D.byB=new A.ac(C.h3,16,null,null,null,null)
D.bBT=new A.ac(C.qk,16,null,null,null,null)
D.bsg=new A.ac(C.mB,null,null,null,null,null)
D.bCK=new A.e0(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxH=new A.ac(C.E0,null,null,null,null,null)
D.bCO=new A.e0(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsB=new A.ac(N.EB,null,null,null,null,null)
D.bCY=new A.e0(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cor=x([C.eY,C.aW,C.aB],y.O)
D.bH0=new A.a8(C.ax,C.aC,C.x,D.cor,null,null)
D.cnY=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nj=x([C.eY,C.aB],y.O)
D.Nw=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m1=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cT7=x([C.q2,C.aB],y.O)
D.dHg={iceServers:0}
D.aAs={urls:0}
D.d27=new A.bt(D.aAs,["stun:stun.l.google.com:19302"],y.m)
D.d26=new A.bt(D.aAs,["stun:stun1.l.google.com:19302"],y.m)
D.cDq=x([D.d27,D.d26],A.aA("N<a0<n,n>>"))
D.d1s=new A.bt(D.dHg,[D.cDq],A.aA("bt<n,@>"))
D.FO=new B.Lv(0,"lanDirect")
D.OJ=new B.Lv(1,"cloudStash")
D.dcG=new B.Lv(2,"inlineInstant")
D.OK=new B.Lv(3,"webrtcLink")
D.xP=new B.Lv(4,"videoCloud")
D.eYC=new A.w("Receive file",null,C.mT,null,null,null,null,null,null,null,null,null)
D.cec=x([E.ahV,C.ab,D.eYC],y.p)
D.eim=new A.cC(C.aY,C.b4,C.j,C.m,null,C.p,null,0,D.cec,null)
D.dLA=new A.C(C.ca,D.eim,null)
D.eD6=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZT,null,null,null)
D.eM3=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eD6,null,C.L,null,null,null,null,null,null,null)
D.dKW=new A.C(C.zH,D.eM3,null)
D.aWK=new A.cw(C.B,null,null,D.dKW,null)
D.dQ0=new A.cE(0,null,0,28,null,null,D.aWK,null)
D.dQi=new B.a7_(0,"RTCDataChannelConnecting")
D.aFu=new B.a7_(1,"RTCDataChannelOpen")
D.aFv=new B.a7_(3,"RTCDataChannelClosed")
D.dQj=new B.Dz(0,"RTCIceConnectionStateNew")
D.dQk=new B.Dz(1,"RTCIceConnectionStateChecking")
D.dQl=new B.Dz(2,"RTCIceConnectionStateCompleted")
D.dQm=new B.Dz(3,"RTCIceConnectionStateConnected")
D.dQn=new B.Dz(4,"RTCIceConnectionStateCount")
D.dQo=new B.Dz(5,"RTCIceConnectionStateFailed")
D.dQp=new B.Dz(6,"RTCIceConnectionStateDisconnected")
D.aFw=new B.Dz(7,"RTCIceConnectionStateClosed")
D.aFx=new B.UX(0,"RTCIceGatheringStateNew")
D.dQq=new B.UX(1,"RTCIceGatheringStateGathering")
D.a2a=new B.UX(2,"RTCIceGatheringStateComplete")
D.a2b=new B.Mw(0,"RTCPeerConnectionStateClosed")
D.aFy=new B.Mw(1,"RTCPeerConnectionStateFailed")
D.aFz=new B.Mw(2,"RTCPeerConnectionStateDisconnected")
D.aFA=new B.Mw(3,"RTCPeerConnectionStateNew")
D.aFB=new B.Mw(4,"RTCPeerConnectionStateConnecting")
D.aFC=new B.Mw(5,"RTCPeerConnectionStateConnected")
D.dQr=new B.Mx(0,"RTCSignalingStateStable")
D.dQs=new B.Mx(1,"RTCSignalingStateHaveLocalOffer")
D.dQt=new B.Mx(2,"RTCSignalingStateHaveRemoteOffer")
D.dQu=new B.Mx(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dQv=new B.Mx(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFD=new B.Mx(5,"RTCSignalingStateClosed")
D.elV=new A.ap(160,48)
D.aXS=new A.f9(2,null,null,null,null,C.aB,null,null,null,null)
D.enl=new A.a3(16,16,D.aXS,null)
D.eOX=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eoL=new A.aY(D.eOX,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVJ=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eoO=new A.aY(D.eVJ,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f2x=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eoV=new A.aY(D.f2x,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eOA=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.epk=new A.aY(D.eOA,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eZj=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aHX=new A.aY(D.eZj,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f_z=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.epN=new A.aY(D.f_z,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f3P=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eq1=new A.aY(D.f3P,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f1Z=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eq6=new A.aY(D.f1Z,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f36=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eqS=new A.aY(D.f36,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNj=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ero=new A.aY(D.eNj,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXp=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.erJ=new A.aY(D.eXp,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQY=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ese=new A.aY(D.eQY,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f3V=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.esi=new A.aY(D.f3V,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNz=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eso=new A.aY(D.eNz,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eMn=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.esD=new A.aY(D.eMn,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eJw=new A.w("NGMY DOC SHARE",null,C.aJd,null,null,null,null,null,null,null,null,null)
D.eKI=new A.w("Show this to sender",null,C.kc,null,null,null,null,null,null,null,null,null)
D.eLE=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.ePS=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eQa=new A.w("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eR7=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eRx=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eU3=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eWE=new A.w("Send to their Doc Share",null,C.mS,null,null,null,null,null,null,null,null,null)
D.eWX=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eXe=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eXI=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eXM=new A.w("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eY8=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eJ,null,null,null,null,null,null,null,null,null)
D.f0_=new A.w("Share files & videos\nwith a scan.",null,C.aJe,null,null,null,null,null,null,null,null,null)
D.f0h=new A.w("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.f9R=new B.WN(null)
D.a52=new B.a9J(0,"docShare")
D.a53=new B.a9J(1,"gate")
D.Rt=new B.a9J(2,"gateNoIndividual")})();(function staticFields(){$.aKi=null
$.eWH=function(){var x=y.N
return A.R(x,x)}()
$.EF=A.R(y.N,y.D)
$.adF=A.R(y.N,A.aA("lf"))
$.OX=A.R(y.N,y.D)
$.eXd=A.R(y.N,A.aA("a9q"))
$.c2o=A.R(y.S,A.aA("br0"))
$.fPP=1
$.hBd=null
$.hBc=null
$.hta=null
$.fFd=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hTs","h5B",()=>new B.cdj())
x($,"hRn","fIG",()=>C.a.q(A.bp(A.bp(A.bp(A.Fb(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["Z4iz6fTgba+5MPVKMt82TLkqwl8="]=a.current})($__dart_deferred_initializers__);