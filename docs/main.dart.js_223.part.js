((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cdk:function cdk(){},
hmW(d){var x=null,w=new B.b0h(d,D.dQg,new A.oQ(x,x,y.c6),new A.oQ(x,x,y.B))
w.brV(d)
return w},
b0h:function b0h(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cdf:function cdf(d){this.a=d},
cdg:function cdg(d){this.a=d},
cdh:function cdh(d){this.a=d},
cde:function cde(d){this.a=d},
cdi:function cdi(d){this.a=d},
hmX(d,e){var x=y.N
x=new B.b0i(d,e,A.R(x,y.e),A.R(x,y.z))
x.brW(d,e)
return x},
b0i:function b0i(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cdl:function cdl(d){this.a=d},
cdm:function cdm(d){this.a=d},
cdn:function cdn(d){this.a=d},
cdo:function cdo(d){this.a=d},
cdp:function cdp(d){this.a=d},
cdq:function cdq(d){this.a=d},
cdr:function cdr(d){this.a=d},
cds:function cds(d){this.a=d},
fEZ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.P(A.b9("IndexedDB not available"))
return C.xj.Kl(x,"ngmy_doc_share_v1",new B.f3o(),1)},
htp(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.AY(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
Pb(d,e){return B.hHV(d,e)},
hHV(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKk
x=7
return A.b(o==null?$.aKk=B.fEZ():o,$async$Pb)
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
Pa(d){return B.hHU(d)},
hHU(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKk
x=7
return A.b(o==null?$.aKk=B.fEZ():o,$async$Pa)
case 7:s=f
r=J.mg(s,"blobs","readonly")
x=8
return A.b(C.io.yu(J.me(r,"blobs"),d),$async$Pa)
case 8:q=f
x=9
return A.b(J.oY(r),$async$Pa)
case 9:o=B.htp(q)
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
aek(d){return B.hHT(d)},
hHT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aek=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKk
x=7
return A.b(p==null?$.aKk=B.fEZ():p,$async$aek)
case 7:s=f
r=J.mg(s,"blobs","readwrite")
C.io.Eq(J.me(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$aek)
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
return A.i($async$aek,w)},
f3o:function f3o(){},
hvB(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkr(w,v))}return u},
h35(d,e){var x,w={},v=A.aSq("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fo6(w,v,e)
C.uG.xm(v,"change",new B.fo8(w,v,!1))
C.uG.xm(v,"cancel",new B.fo7(w))
$.eI.lU()
v.click()
A.bK(C.abB,new B.fo5(w),y.H)},
fo6:function fo6(d,e,f){this.a=d
this.b=e
this.c=f},
fo8:function fo8(d,e,f){this.a=d
this.b=e
this.c=f},
fo7:function fo7(d){this.a=d},
fo5:function fo5(d){this.a=d},
BH(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BH=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRI()?3:4
break
case 3:x=5
return A.b(B.fZl(e,d,s,!0,!1,f,g,h,!1,i),$async$BH)
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
return A.b(B.eZY(s,d),$async$BH)
case 14:x=12
return A.b(r.fZl(q,p,o,n,m,l,k,j,a1,i),$async$BH)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cs(A.eH(new B.fol(s,i,d,f,g,h),!1,null,y.H)),$async$BH)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cs(A.eH(new B.fom(s,i,d,f,g,h),!1,null,y.H)),$async$BH)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BH,w)},
OP(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OP=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aW4(e),$async$OP)
case 3:u=k
x=4
return A.b(B.amj(d,e,!1),$async$OP)
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
case 9:if(B.aW2(d,e)){v=D.a52
x=1
break}x=11
return A.b(B.SI(e),$async$OP)
case 11:v=t?D.Rt:D.a53
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fAe(d,e)){v=D.a52
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
eZY(d,e){var x=0,w=A.j(y.y),v
var $async$eZY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aW2(e,d)){v=!1
x=1
break}x=3
return A.b(B.aW4(d),$async$eZY)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZY,w)},
fZl(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cs(A.eH(new B.f4H(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fUB(d,e,f,g,h,i,j){return new B.WQ(e,j,d,g,h,i,f,null)},
f6D(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f6D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6G(A.L(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f6D)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6D,w)},
f77(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f77=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f79(A.L(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f77)
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
return A.i($async$f77,w)},
fF6(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bl(x,new A.b1(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fgJ(d,e){var x=0,w=A.j(y.H),v
var $async$fgJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SI(e),$async$fgJ)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eC()
case 1:return A.h(v,w)}})
return A.i($async$fgJ,w)},
fol:function fol(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fom:function fom(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9K:function a9K(d,e){this.a=d
this.b=e},
f4H:function f4H(d,e,f,g,h,i,j,k,l){var _=this
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
cWC:function cWC(d,e){this.a=d
this.b=e},
cWz:function cWz(d){this.a=d},
cWB:function cWB(d){this.a=d},
cWA:function cWA(d){this.a=d},
cWE:function cWE(){},
cWD:function cWD(d){this.a=d},
aab:function aab(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayF:function ayF(d,e){this.a=d
this.b=e},
aBM:function aBM(d,e,f){this.a=d
this.b=e
this.c=f},
f6G:function f6G(d,e,f){this.a=d
this.b=e
this.c=f},
f6E:function f6E(d){this.a=d},
f6F:function f6F(d,e,f){this.a=d
this.b=e
this.c=f},
f79:function f79(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f78:function f78(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c21(d,e,f,g,h){return B.hhV(d,e,f,g,h)},
hhV(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c21=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gG(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.di(d,new B.c22(s,e,h,g,f,q),y.g),y.l),$async$c21)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c21,w)},
aW_(d,e,f,g,h){return B.hhW(d,e,f,g,h)},
hhW(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aW_=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arw("GET",d)
o=A.fwJ()
if(o==null)o=new A.JX(A.a([],y.W))
x=7
return A.b(o.eL(0,s).cJ(0,C.Dk),$async$aW_)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ba(),$async$aW_)
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
return A.i($async$aW_,w)},
aVZ(d){return B.hhT(d)},
hhT(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uv(d,null).cJ(0,C.ng),$async$aVZ)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aE(0,A.io(A.im(p.e)).c5(0,p.w),null)
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
return A.i($async$aVZ,w)},
c20(d){return B.hhU(d)},
hhU(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c20=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uv(d,null).cJ(0,C.oV),$async$c20)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.io(A.im(q.e)).c5(0,q.w)
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
return A.i($async$c20,w)},
c22:function c22(d,e,f,g,h,i){var _=this
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
hi0(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GK(C.a.aV(u,v.length))}return null},
hi1(d){var x=B.GK(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hhX(){var x,w=$.oW(),v=J.dZ(5,y.S)
for(x=0;x<5;++x)v[x]=w.aA(10)
return C.d.fM(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(24)]},
a4w(d){return B.hhY(d)},
hhY(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
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
a4x(d,e){return B.hhZ(d,e)},
hhZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
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
break}m=B.hhX()
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
a4z(d,e,f,g){return B.hi2(d,e,f,g)},
hi2(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
break}if(g.cI(d,0,new B.c28())>1048576||g.be(d,new B.c29())){v=B.D4(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4K("myCode",d,a0),$async$a4z)
case 4:u=a3
try{t=C.Q.aE(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ci(s)||J.a9(s)!==g.gG(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.a9(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D4(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aW7(u,g.gG(d),a0),$async$a4z)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oW().aA(9999)
k=n.b
j=g.gG(d)
i=y.N
h=g.di(d,new B.c2a(),i)
h=A.A(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aW0(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4z)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gG(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4z,w)},
D4(d,e,f,g,h){return B.hi_(d,e,f,g,h)},
hi_(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D4=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$D4)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c24())
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
a0=new A.Iz(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D4)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.a9(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.op(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a81(a1.a,a4,"media",a1.d,a2).w3(m,n,new A.Cr(!0,q.c)),$async$D4)
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
return A.b(B.aMI(r),$async$D4)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gG(a6)
a1=l.di(a6,new B.c25(),e)
a1=A.A(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aW0(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D4)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMI(r),$async$D4)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gG(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D4,w)},
aW0(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aW0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4w(t),$async$aW0)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c23(),y.P)
r=A.A(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4x(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW0,w)},
Lt(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lt=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4w("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lt)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aW1(k,a0),$async$Lt)
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
return A.b(B.aW6(h),$async$Lt)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SP(g,a0),$async$Lt)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.a9(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.O(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.A(new A.a5(r,new B.c26(),q),n)
d=A.A(new A.a5(r,new B.c27(),q),n)
q=A.A(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a4x("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$Lt)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lt,w)},
aW1(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aW1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
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
break}i=B.hLD(k,j)
C.d.v(s,i)
x=5
return A.b(B.BF(l,m,"Received via My Code",t,e,i),$async$aW1)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMI(s),$async$aW1)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW1,w)},
c28:function c28(){},
c29:function c29(){},
c2a:function c2a(){},
c24:function c24(){},
c25:function c25(){},
c23:function c23(){},
c26:function c26(){},
c27:function c27(){},
foi(d,e){var x=0,w=A.j(y.H)
var $async$foi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cs(A.eH(new B.foj(e),!1,null,y.H)),$async$foi)
case 2:return A.h(null,w)}})
return A.i($async$foi,w)},
byX(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byX=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cs(A.eH(new B.fok(g,e,f),!1,null,y.y)),$async$byX)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byX,w)},
foj:function foj(d){this.a=d},
fok:function fok(d,e,f){this.a=d
this.b=e
this.c=f},
SF:function SF(d,e){this.c=d
this.a=e},
aA1:function aA1(d){var _=this
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
aA4:function aA4(d,e){var _=this
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
beN:function beN(){},
SG:function SG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA2:function aA2(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dG4:function dG4(d){this.a=d},
dG5:function dG5(d){this.a=d},
fAf(d){var x=d.hD
if(x>=0)return C.o.L(x)
return 10},
hi4(d){var x=d.k9
if(x>=0)return x
return 4.99},
hi3(d){var x=d.kR,w=y.N
w=x.iD(x,new B.c2c(),w,w)
return w},
fPL(d){var x=d.ka,w=y.N
w=x.iD(x,new B.c2d(),w,w)
return w},
aW4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aW4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aW4)
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
return A.i($async$aW4,w)},
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
fAe(d,e){var x,w,v
if(B.hi4(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hi3(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.c9(new A.O(Date.now(),0,!1))},
aW2(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fPL(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.c9(new A.O(Date.now(),0,!1))},
fPM(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fPL(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.c9(new A.O(Date.now(),0,!1))?v:new A.O(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amk(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amk)
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
return A.i($async$amk,w)},
aml(d){var x=0,w=A.j(y.H),v,u,t
var $async$aml=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amk(d),$async$aml)
case 3:u=f
x=5
return A.b(A.aw(),$async$aml)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$aml)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aml,w)},
amj(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fAf(d)
if(u<=0){v=!1
x=1
break}if(B.fAe(d,e)){v=!1
x=1
break}x=3
return A.b(B.amk(e),$async$amj)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amj,w)},
aW3(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aW3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GM(e,d),$async$aW3)
case 3:if(g){v=-1
x=1
break}u=B.fAf(d)
if(u<=0){v=-1
x=1
break}if(B.fAe(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amk(e),$async$aW3)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW3,w)},
c2f(d,e,f){var x=0,w=A.j(y.y),v
var $async$c2f=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GM(e,d),$async$c2f)
case 3:if(h){v=!1
x=1
break}v=B.amj(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2f,w)},
c2e(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c2e=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c2f(d,u,i.gRI()),$async$c2e)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2e,w)},
a4A(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4A=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRI()){v=!0
x=1
break}if(B.aW2(d,u)){v=!0
x=1
break}x=5
return A.b(A.kZ(u,C.P6),$async$a4A)
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
return A.b(A.kE(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.P6,"Doc Share for Organizations"),$async$a4A)
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
c2c:function c2c(){},
c2d:function c2d(){},
foP(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$foP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$foP)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eWK.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hB([r],e.c))
s.toString
$.eWK.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foP,w)},
hNK(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eWK.bl($.eWK,new B.foR(d))},
foR:function foR(d){this.a=d},
eY4(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eY4=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bK(C.jc,null,y.H),$async$eY4)
case 3:C.yx.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lU()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eY4,w)},
add(d,e,f){var x=0,w=A.j(y.H),v
var $async$add=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eXg.m(0,d,new B.a9r(A.bj(e,!0,v)))
x=3
return A.b(A.aw(),$async$add)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.E(["parts",e,"size",f],v,y.C),null)),$async$add)
case 2:return A.h(null,w)}})
return A.i($async$add,w)},
ad7(d){return B.hxi(d)},
hxi(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ad7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eXg.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ad7)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aE(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b4(s,new B.f0B(),y.N)
n=A.A(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.L(o)
q=m==null?0:m
p=new B.a9r(r)
$.eXg.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ad7,w)},
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
aKE(d){return B.hxg(d)},
hxg(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EF.h(0,d)
if(n!=null&&!C.aE.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pa(d),$async$aKE)
case 3:p=f
if(p!=null&&!C.aE.gah(p)){$.EF.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKE)
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
return A.b(J.hA(s,d),$async$aKE)
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
return A.i($async$aKE,w)},
htK(d){if(d==null)return A.f6(null,y.K)
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
t=new A.bM(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f4T(r,t),!1,s)
A.fA(r,"error",new B.f4U(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.Jy,new B.f4V())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_f,w)},
aKY(d,e,f){return B.hzu(d,e,f)},
hzu(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKY=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_f(i),$async$aKY)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.a9(j)
x=11
return A.b(B.Pb(o,p),$async$aKY)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.a9(j)===0){x=1
break}x=12
return A.b(B.add(k,j,s),$async$aKY)
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
return A.i($async$aKY,w)},
aKX(d,e,f){return B.hzt(d,e,f)},
hzt(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKX=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKY(d,e,f),$async$aKX)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_f(f),$async$aKX)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EF.m(0,s,r)
$.OX.m(0,s,r)
x=11
return A.b(B.OF(s,r),$async$aKX)
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
return A.i($async$aKX,w)},
An(d,e,f,g,h,i){return B.hid(d,e,f,g,h,i)},
hid(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
m=new B.j8(p,q,o,n,new A.O(Date.now(),0,!1).a4().aa(),a0,f,B.aWa(),null)
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
i=new B.j8(m,n,k,l,j,"From folder",null,B.aWa(),null)
$.adG.m(0,m,o)
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
return A.b(B.aKX(d,m,o),$async$SK)
case 11:case 9:r.H(t,i)
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
fAj(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fAj=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.i($async$fAj,w)},
GN(d,e,f,g,h,i){return B.hic(d,e,f,g,h,i)},
hic(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
j=new A.Iz(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GN)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ci(m)){x=6
break}J.fT(n,m)
o+=J.a9(m)
case 9:if(!(J.a9(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PI(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.ko(0,1048576,J.a9(h),null,null)
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
return A.b(B.add(r,q,g),$async$GN)
case 16:f=new B.j8(i,a1,a0,g,new A.O(Date.now(),0,!1).a4().aa(),a2,null,B.aWa(),null)
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
t=$.adG.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_f(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ad7(s),$async$SM)
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
return A.b(B.qN(d,e),$async$SM)
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
qN(d,e){return B.hie(d,e)},
hie(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OX.h(0,f)
if(e==null)e=$.EF.h(0,f)
if(e!=null&&!C.aE.gah(e)){v=e
x=1
break}s=$.adG.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_f(s),$async$qN)
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
return A.b(B.ad7(f),$async$qN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auZ(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pa(g[l]),$async$qN)
case 16:k=a3
if(k!=null&&!C.aE.gah(k))n.H(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.akP()
if(!C.aE.gah(r)){$.EF.m(0,f,r)
$.OX.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKE(f),$async$qN)
case 17:j=a3
if(j!=null&&!C.aE.gah(j)){$.OX.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SM(a0,a1,0,g),$async$qN)
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
return A.i($async$qN,w)},
hih(d){var x,w,v=$.adG.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hii(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hB([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hif(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amr(d,e,f,g,h){return B.hig(d,e,f,g,h)},
hig(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amr=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adG.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_f(s),$async$amr)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qN(g,e),$async$amr)
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
return A.b(n.hV(d).w3(h,r,new A.Cr(!0,e.c)),$async$amr)
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
return A.i($async$amr,w)},
fPQ(d,e,f,g,h){var x,w,v,u,t=$.fPP
$.fPP=t+1
x=Date.now()
w=""+1000*x+"_"+C.cA.aA(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2q.m(0,t,new B.br2(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auZ(u)))
return t},
fAk(d){var x=0,w=A.j(y.H)
var $async$fAk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fAk,w)},
GO(d,e){var $async$GO=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adG.h(0,h)
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
return A.py(B.ad7("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GO,w)
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
return A.py(B.qN(d,e),$async$GO,w)
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
var x=0,w=A.fYf($async$GO,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h_2(w)},
aWc(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2q.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.H(0,e)
case 3:if(!(u.gG(u)>=1048576)){x=4
break}x=5
return A.b(t.a20(),$async$aWc)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWc,w)},
SL(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2q.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a20(),$async$SL)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.add(r.c,u,r.z),$async$SL)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.O(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aWa(),null)
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
for(;;)switch(x){case 0:r=$.c2q.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aek(u[s]),$async$a4H)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
c2s(d,e,f){var x=0,w=A.j(y.H)
var $async$c2s=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw4(d,e,f),$async$c2s)
case 2:return A.h(null,w)}})
return A.i($async$c2s,w)},
c2t(d,e,f){var x=0,w=A.j(y.H)
var $async$c2t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw5(d,e,f),$async$c2t)
case 2:return A.h(null,w)}})
return A.i($async$c2t,w)},
D5(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zr(d),$async$D5)
case 2:p=g
J.n_(p,new B.c2r(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EF.W(0,v)
$.adG.W(0,e)
x=3
return A.b(B.ad7(v),$async$D5)
case 3:u=g
$.eXg.W(0,v)
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
return A.b(B.aek(s[q]),$async$D5)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aek(v),$async$D5)
case 13:x=14
return A.b(B.EP(d,p),$async$D5)
case 14:return A.h(null,w)}})
return A.i($async$D5,w)},
aWb(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qN(d,e),$async$aWb)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eY4(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWb,w)},
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
break}r=J.b4(u,new B.f4W(),y.U)
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
t=J.b4(e,new B.f8P(),y.P)
t=A.A(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$EP)
case 3:return A.h(null,w)}})
return A.i($async$EP,w)},
bw4(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bw4)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.f3A(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azQ(f))
x=4
return A.b(B.EP(d,u),$async$bw4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw4,w)},
bw5(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bw5)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.f3B(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cyz(f))
x=4
return A.b(B.EP(d,u),$async$bw5)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw5,w)},
a9r:function a9r(d){this.a=d},
f0B:function f0B(){},
f4T:function f4T(d,e){this.a=d
this.b=e},
f4U:function f4U(d){this.a=d},
f4V:function f4V(){},
c2r:function c2r(d){this.a=d},
br2:function br2(d,e,f,g,h,i,j,k,l){var _=this
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
f4W:function f4W(){},
f8P:function f8P(){},
f3A:function f3A(d){this.a=d},
f3B:function f3B(d){this.a=d},
a4I(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.be(d,new B.c2w())?3:4
break
case 3:x=5
return A.b(B.aWd(d,e),$async$a4I)
case 5:u=g
if(u!=null){t=u.c
B.Lv(d,u.b,e,t)}v=u
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
return A.b(B.aW8(s),$async$a4I)
case 10:case 9:if(g){v=new A.O2(1,D.OK,"NGMYDOCSYNC1|"+s)
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
B.Lv(d,D.xP,e,t)
v=new A.O2(p,D.xP,t)
x=1
break}v=B.c2v(d,e)
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
return A.b(B.aW7(p,d.length,e),$async$SN)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2t(e,C.d.gI(d).a,r.b),$async$SN)
case 7:case 6:q=r.a
x=8
return A.b(B.Lv(d,D.OK,e,q),$async$SN)
case 8:v=new A.O2(d.length,D.OK,q)
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
return A.b(B.c2o(s,d,e,t),$async$SO)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aW8(t),$async$SO)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qN(e,d),$async$SO)
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
return A.b(B.fAd(),$async$SQ)
case 2:x=3
return A.b(B.aMZ(),$async$SQ)
case 3:return A.h(null,w)}})
return A.i($async$SQ,w)},
a4J(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWa()
x=3
return A.b(B.c2s(e,d.a,u),$async$a4J)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4J,w)},
Lv(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OK&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4J(p,f),$async$Lv)
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
return A.b(B.c2n(o,p,u,f),$async$Lv)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c2o(o,p,f,t),$async$Lv)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c2m(o,u,p,f),$async$Lv)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lv,w)},
aWd(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2u(e,d),$async$aWd)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SS(!1,!0,d,e),$async$aWd)
case 4:u=g
if(u!=null){t=u.b
v=new A.O2(u.a,D.xP,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWd,w)},
c2u(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SM(d,s,0,1),$async$c2u)
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
return A.i($async$c2u,w)},
c2v(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4K(null,d,e),$async$c2v)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fPN(u)
if(t.length>800){v=null
x=1
break}v=new A.O2(d.length,D.dcE,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2v,w)},
ams(d,e,f){return B.hil(d,e,f)},
hil(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ams=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.mf(g,1)
x=B.fAi(g)?3:4
break
case 3:x=5
return A.b(B.c2p(g),$async$ams)
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
return A.b(B.aW6(q),$async$ams)
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
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fAh(g,"NGMYDOCSYNC0")
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
if(C.a.c6(k,"/"))h=C.a.al(k,0,k.length-1)
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
return A.i($async$ams,w)},
GP(d,e,f){return B.hij(d,e,f)},
hij(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GP=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cq(A.t(s)+"/manifest.json",0,null)
q=A.cq(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVZ(r),$async$GP)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVZ(A.cq(s,0,null)),$async$GP)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c21(o,r,a1,n,a2),$async$GP)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.c20(q),$async$GP)
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
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qN(f,r),$async$a4K)
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
SP(d,e){return B.hik(d,e)},
hik(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
e=J.aV(r)
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
Lu:function Lu(d,e){this.a=d
this.b=e},
c2w:function c2w(){},
ZQ(d){var x=A.L(d).ax.a===C.H,w=x?D.a9x:D.a7U,v=x?D.aaU:C.c,u=x?C.aO:C.M,t=x?C.bP:C.al,s=x?D.a8Q:C.aJ
return new A.aCY([w,s,v,u,t,x?C.eY:C.bR])},
h3N(d,e){var x=e?C.w.j(0.72):C.aV
return A.cg(null,x,!0,null,new B.fsM(e),d,null,!0,!0,y.N)},
c2b(d,e,f,g,h,i,j,k,l){return new B.SH(e,l,d,f,k,j,g,h,i,null)},
WS(d,e,f,g,h,i,j){return new B.b9w(g,h,j,e,i,d,f,null)},
fsM:function fsM(d){this.a=d},
WP:function WP(d,e){this.c=d
this.a=e},
aw9:function aw9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cWy:function cWy(d){this.a=d},
cWw:function cWw(d){this.a=d},
cWx:function cWx(d){this.a=d},
bqI:function bqI(){},
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
aA3:function aA3(d,e){var _=this
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
b9v:function b9v(d,e,f){this.c=d
this.d=e
this.a=f},
cWu:function cWu(){},
cWv:function cWv(){},
a9L:function a9L(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWS:function cWS(){},
cWR:function cWR(d){this.a=d},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
awb:function awb(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWO:function cWO(d){this.a=d},
cWP:function cWP(d,e,f){this.a=d
this.b=e
this.c=f},
cWQ:function cWQ(d,e){this.a=d
this.b=e},
cWM:function cWM(d,e){this.a=d
this.b=e},
cWK:function cWK(d){this.a=d},
cWI:function cWI(d){this.a=d},
cWF:function cWF(d){this.a=d},
cWL:function cWL(d){this.a=d},
cWH:function cWH(d){this.a=d},
cWN:function cWN(d){this.a=d},
cWJ:function cWJ(d){this.a=d},
cWG:function cWG(d){this.a=d},
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
cWr:function cWr(d){this.a=d},
cWq:function cWq(d,e){this.a=d
this.b=e},
cWs:function cWs(d){this.a=d},
cWp:function cWp(d,e){this.a=d
this.b=e},
cWt:function cWt(d){this.a=d},
cWo:function cWo(d,e){this.a=d
this.b=e},
cWk:function cWk(d){this.a=d},
cWl:function cWl(d){this.a=d},
cWm:function cWm(d,e){this.a=d
this.b=e},
cWn:function cWn(d){this.a=d},
NF:function NF(d,e,f){this.c=d
this.d=e
this.a=f},
awe:function awe(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cX4:function cX4(d){this.a=d},
cX5:function cX5(d){this.a=d},
cX6:function cX6(d){this.a=d},
cX7:function cX7(d){this.a=d},
cX8:function cX8(d,e){this.a=d
this.b=e},
cX9:function cX9(d){this.a=d},
cXb:function cXb(d){this.a=d},
cXa:function cXa(d){this.a=d},
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
cX0:function cX0(d,e){this.a=d
this.b=e},
cX1:function cX1(d,e){this.a=d
this.b=e},
cWT:function cWT(d,e,f){this.a=d
this.b=e
this.c=f},
cWU:function cWU(d){this.a=d},
cWV:function cWV(){},
cX_:function cX_(){},
cWW:function cWW(d,e){this.a=d
this.b=e},
cWX:function cWX(d,e){this.a=d
this.b=e},
cWY:function cWY(d,e){this.a=d
this.b=e},
cWZ:function cWZ(d,e){this.a=d
this.b=e},
a9J:function a9J(d,e){this.c=d
this.a=e},
cWj:function cWj(d){this.a=d},
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
cX3:function cX3(d){this.a=d},
cX2:function cX2(d){this.a=d},
b9w:function b9w(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
him(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"VT"+C.d.fM(v)},
Lw(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lw=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$Lw)
case 3:if(!e){v=A.R(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_video_relay_v1",null,!1,C.bD),$async$Lw)
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
return A.i($async$Lw,w)},
a4L(d){return B.hin(d)},
hin(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4L)
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
return A.b(B.Lw(),$async$SR)
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
return A.b(A.bV(),$async$SS)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bj(f,!0,y.U)
else{t=A.T(f).k("a5<1>")
u=A.A(new A.a5(f,new B.c2y(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.him()
t=A.T(u).k("J<1,a0<n,aB>>")
r=A.A(new A.J(u,new B.c2z(s),t),t.k("ai.E"))
x=6
return A.b(B.Lw(),$async$SS)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4L(q),$async$SS)
case 7:x=8
return A.b(B.a4M(r,u,g,s),$async$SS)
case 8:v=new A.bkT(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SS,w)},
amt(d){var x=0,w=A.j(y.y),v,u,t
var $async$amt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lw(),$async$amt)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amt,w)},
c2A(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lw(),$async$c2A)
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
return A.i($async$c2A,w)},
a4M(d,e,f,g){return B.hio(d,e,f,g)},
hio(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4M=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.a9(q)===0){x=8
break}x=10
return A.b(B.amr("media",r,new B.c2x(s,e,g),f,q),$async$a4M)
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
D6(d,e,f){return B.hip(d,e,f)},
hip(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D6=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bV(),$async$D6)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amt(b3),$async$D6)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kV,null,g),$async$D6)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amt(b3),$async$D6)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lw(),$async$D6)
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
r=a1.gG(a4)
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
l=new A.a81(a8.a,b0,"media",a8.d,a9).Bu(m)
k=A.cq(l,0,null)
x=17
return A.b(B.aW_(k,n,o,s,b7),$async$D6)
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
return A.b(new A.a81(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D6)
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
c2y:function c2y(){},
c2z:function c2z(d){this.a=d},
c2x:function c2x(d,e,f){this.a=d
this.b=e
this.c=f},
aMZ(){var x=0,w=A.j(y.H),v,u
var $async$aMZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.htc=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aMZ)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aMZ)
case 3:u=$.fFi
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aMZ)
case 4:$.fFi=$.hBe=$.hBf=null
return A.h(null,w)}})
return A.i($async$aMZ,w)},
f8r(d){var x=0,w=A.j(y.H),v,u
var $async$f8r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2a){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f8s(new A.bM(u,y.aY))
x=3
return A.b(u.i0(0,C.hr,new B.f8t()),$async$f8r)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f8r,w)},
hBc(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hi6(x):x},
fFm(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amv(u)
x=1
break}v=B.fAh(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFm,w)},
fFl(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.amw(u)
x=1
break}v=B.fAh(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFl,w)},
foA(d){var x=0,w=A.j(y.T),v
var $async$foA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amw(d),$async$foA)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foA,w)},
bwW(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fFl(d),$async$bwW)
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
return A.i($async$bwW,w)},
eYT(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eYT=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SL(g)
x=1
break}if(d.gG(d)<=0){v=null
x=1
break}v=B.An(d.akP(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYT,w)},
ER(d,e,f){return B.hDr(d,e,f)},
hDr(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ER=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fFm(a1),$async$ER)
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
return A.b($.h5A().aA4(D.d1q,null),$async$ER)
case 4:l=d.fFi=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auZ(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f8W(f,k,new B.f8X(f,a2,k,j,a0,p),a2,j,a0,p,new A.bM(t,y.ch))
x=5
return A.b(l.a4R(0,new B.UY(r,"offer")),$async$ER)
case 5:d=l
x=7
return A.b(l.ahJ(0),$async$ER)
case 7:x=6
return A.b(d.a4J(0,a4),$async$ER)
case 6:x=8
return A.b(B.f8r(l),$async$ER)
case 8:x=9
return A.b(l.alz(),$async$ER)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hBc(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amx(m,h),$async$ER)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fPN(h)
case 11:v=new A.bkb(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ER,w)},
f8s:function f8s(d){this.a=d},
f8t:function f8t(){},
f8X:function f8X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8W:function f8W(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f8V:function f8V(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hFd(d){switch(d){case"new":return D.dQh
case"checking":return D.dQi
case"connected":return D.dQk
case"completed":return D.dQj
case"failed":return D.dQm
case"disconnected":return D.dQn
case"closed":return D.aFy
case"count":return D.dQl}return D.aFy},
hFe(d){switch(d){case"new":return D.aFz
case"gathering":return D.dQo
case"complete":return D.a2a}return D.aFz},
hPc(d){switch(d){case"stable":return D.dQp
case"have-local-offer":return D.dQq
case"have-local-pranswer":return D.dQs
case"have-remote-offer":return D.dQr
case"have-remote-pranswer":return D.dQt
case"closed":return D.aFF}return D.aFF},
hNw(d){switch(d){case"new":return D.aFC
case"connecting":return D.aFD
case"connected":return D.aFE
case"closed":return D.a2b
case"disconnected":return D.aFB
case"failed":return D.aFA}return D.a2b},
a70:function a70(d,e){this.a=d
this.b=e},
Mx:function Mx(d,e){this.a=d
this.b=e},
UX:function UX(d,e){this.a=d
this.b=e},
Mw:function Mw(d,e){this.a=d
this.b=e},
Dz:function Dz(d,e){this.a=d
this.b=e},
cdj:function cdj(){},
fBY(d){var x=new B.Dy()
x.a=d
x.b=!0
return x},
Dy:function Dy(){this.b=this.a=$},
a7_:function a7_(){},
aqH:function aqH(){},
UY:function UY(d,e){this.a=d
this.b=e},
fAd(){var x=0,w=A.j(y.H)
var $async$fAd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fAd,w)},
fAg(d,e,f){var x=0,w=A.j(y.T),v
var $async$fAg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lZ(D.m1))){v=null
x=1
break}v=B.foP(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAg,w)},
fPN(d){var x,w=F.a7q.a1L(C.dB.aF(d),null)
if(w.length===0){x=C.dB.aF(d)
return C.cM.gcr().aF(x)}return C.cM.gcr().aF(w)},
hi5(d){var x,w,v=C.cw.aF(d)
try{x=C.c0.c5(0,F.a7p.b76(v,!1))
return x}catch(w){x=C.c0.c5(0,v)
return x}},
fAh(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hi5(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c0.c5(0,C.cw.aF(x))
return v}catch(u){return x}}return null},
hi6(d){var x,w,v,u,t,s=A.a([],y.s)
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
hi7(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"DS"+C.d.fM(v)},
aW5(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aW5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bD),$async$aW5)
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
return A.i($async$aW5,w)},
c2g(d,e){return B.hi8(d,e)},
hi8(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c2g=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c2g)
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
return A.i($async$c2g,w)},
aW8(d){var x=0,w=A.j(y.y),v,u,t
var $async$aW8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aW5(d),$async$aW8)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW8,w)},
aW7(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aW7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hi7()
r=C.a.i(f)
t=C.dB.aF(s)
x=3
return A.b(B.c2g(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcr().aF(t),"usesRemaining",999999,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aW7)
case 3:if(!h){v=null
x=1
break}v=new A.YU("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW7,w)},
aW6(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aW6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.a9(o)===0){v=null
x=1
break}x=3
return A.b(B.aW5(o),$async$aW6)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.a9(u)===0){v=null
x=1
break}try{t=C.c0.c5(0,C.cw.aF(u))
if(J.iK(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a4(n)
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aW6,w)},
c2h(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c2h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.a9(q)===0){x=1
break}u=4
x=7
return A.b(X.bxR("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c2h)
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
return A.i($async$c2h,w)},
aW9(d){var x=0,w=A.j(y.h),v,u,t
var $async$aW9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GL(),$async$aW9)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW9,w)},
amo(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amo)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aW9(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amo,w)},
amm(d,e){var x=0,w=A.j(y.H)
var $async$amm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amm)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amm)
case 2:return A.h(null,w)}})
return A.i($async$amm,w)},
a4D(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4D=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4D)
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
return A.b(B.amm(f,u),$async$a4D)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4D,w)},
a4E(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4E=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4E)
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
return A.b(B.amm(g,q),$async$a4E)
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
return A.b(A.bV(),$async$a4F)
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
s=B.aW2(d,J.k(s==null?"":s))
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
c2i(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c2i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.a9(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c2i)
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
return A.i($async$c2i,w)},
GM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2i(d),$async$GM)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aW9(t),$async$GM)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amn(d),$async$GM)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aW2(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amn(d),$async$GM)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GM,w)},
amn(d){var x=0,w=A.j(y.H)
var $async$amn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amn)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amn)
case 2:return A.h(null,w)}})
return A.i($async$amn,w)},
aWa(){var x,w=$.oW(),v=J.dZ(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(32)]
return C.d.fM(v)},
a4G(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fAi(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c2l(d){return B.hia(d)},
hia(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c2l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4G(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bD),$async$c2l)
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
return A.i($async$c2l,w)},
amq(d,e){return B.hib(d,e)},
hib(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4G(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$amq)
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
return A.i($async$amq,w)},
c2n(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2n=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4G(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amq(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2n)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2n,w)},
c2m(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2m=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4G(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amq(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2m)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2m,w)},
c2o(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c2o=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4G(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amq(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2o,w)},
c2p(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c2p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fAi(d)){v=null
x=1
break}x=3
return A.b(B.c2l(d),$async$c2p)
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
return A.i($async$c2p,w)},
a4N(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4N=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4N)
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
amu(d){return B.hiq(d)},
hiq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$amu)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amu)
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
return A.i($async$amu,w)},
amv(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.a9(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bV(),$async$amv)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4N(),$async$amv)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.a9(q)===0){v=null
x=1
break}u=6
p=C.c0.c5(0,C.cw.aF(q))
if(J.iK(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.Z(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.O(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amu(s),$async$amv)
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
return A.i($async$amv,w)},
amx(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bV(),$async$amx)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4N(),$async$amx)
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
return A.b(B.amu(u),$async$amx)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amx,w)},
amw(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bV(),$async$amw)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4N(),$async$amw)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.a9(u)===0){v=null
x=1
break}try{r=C.c0.c5(0,C.cw.aF(u))
v=r
x=1
break}catch(n){t=A.a4(n)
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amw,w)},
alx(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alx=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alx)
case 3:r=g
u=4
x=7
return A.b(r.hg(C.fJ),$async$alx)
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
return A.i($async$alx,w)},
hLD(d,e){var x,w,v=J.dZ(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fnd(d){return B.hLF(d)},
hLF(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fnd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Je(d,3600),$async$fnd)
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
return A.i($async$fnd,w)},
BF(d,e,f,g,h,i){var x=null
return B.hLC(d,e,f,g,h,i)},
hLC(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BF=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fPQ(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fAk(r),$async$BF)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fnd(o),$async$BF)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4H(r),$async$BF)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIn)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JX(A.a([],g))
x=15
return A.b(d.eL(0,A.arw("GET",A.cq(n,0,null))).cJ(0,C.Dk),$async$BF)
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
d=new A.Iz(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BF)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.a9(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWc(r,k),$async$BF)
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
aMI(d){return B.hLE(d)},
hLE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMI)
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
return A.i($async$aMI,w)}},D,T,L,U,V,W,X,M,Y,N
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
B.cdk.prototype={
aA4(d,e){return this.cA3(d,e)},
cA3(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aA4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.R(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.k2(A.ct(t)))
t=J.k(u)
v=B.hmX(C.cM.gcr().aF(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aA4,w)}}
B.b0h.prototype={
brV(d){var x=this,w=x.w
w.onclose=A.h6(new B.cdf(x))
w.onopen=A.h6(new B.cdg(x))
w.onmessage=A.h6(new B.cdh(x))
w.onbufferedamountlow=A.h6(new B.cdi(x))},
gdh(d){return this.x},
ae6(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ae6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dy()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fBY(J.f1(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ae6)
case 8:v=t.fBY(s.akL(f,0,null))
x=1
break
case 7:case 4:v=B.fBY(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ae6,w)}}
B.b0i.prototype={
brW(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h6(new B.cdl(x)))
w.addEventListener("icecandidate",A.h6(new B.cdm(x)))
w.addEventListener("iceconnectionstatechange",A.h6(new B.cdn(x)))
w.onicegatheringstatechange=A.h6(new B.cdo(x))
w.addEventListener("signalingstatechange",A.h6(new B.cdp(x)))
if(!$.fIL())w.addEventListener("connectionstatechange",A.h6(new B.cdq(x)))
w.addEventListener("negotiationneeded",A.h6(new B.cdr(x)))
w.addEventListener("track",A.h6(new B.cds(x)))},
ahJ(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k2(A.ct(A.R(y.N,y.z)))),y.aQ),$async$ahJ)
case 3:t=f
v=new B.UY(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahJ,w)},
a4J(d,e){return this.bhy(0,e)},
bhy(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4J)
case 2:return A.h(null,w)}})
return A.i($async$a4J,w)},
a4R(d,e){return this.bhO(0,e)},
bhO(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4R)
case 2:return A.h(null,w)}})
return A.i($async$a4R,w)},
alz(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alz=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.i($async$alz,w)},
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
B.a9K.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WQ.prototype={
S(){return new B.awa()},
gd6(){return this.c}}
B.awa.prototype={
Z(){this.a0()
this.aaX()},
aaX(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aW3(u.e,u.c),$async$aaX)
case 2:t=e
if(v.c!=null)v.n(new B.cWC(v,t))
return A.h(null,w)}})
return A.i($async$aaX,w)},
Ok(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ok=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amj(t.e,t.c,!1),$async$Ok)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.erH)
x=1
break}x=4
return A.b(B.a4B(u.a.c,"individual"),$async$Ok)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3h(A.eH(new B.cWz(u),!1,null,y.H)),$async$Ok)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ok,w)},
HF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f6D(o),$async$HF)
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
break}if(!p){o.F(y.q).f.P(D.eoM)
x=1
break}x=5
return A.b(B.a4B(u.a.c,"member"),$async$HF)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3h(A.eH(new B.cWB(u),!1,null,y.H)),$async$HF)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HF,w)},
wU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4A(t.e,o,t.f,t.r,t.w,s),$async$wU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4B(u.a.c,"org_owner"),$async$wU)
case 4:x=5
return A.b(B.amo(u.a.c),$async$wU)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f77(o),$async$wU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4D(s,t,o,q.c),$async$wU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.eoJ)
x=1
break}x=10
return A.b(B.amo(u.a.c),$async$wU)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3h(A.eH(new B.cWA(u),!1,null,y.H)),$async$wU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wU,w)},
B(d){var x,w,v,u=this,t=null,s=A.L(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fAf(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.fz,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eJw,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.f_Y,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bH0,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lk(new B.cWE(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aab(C.eF,C.asH,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc5f(),t),C.aa],v))
p.push(new B.aab(C.o4,C.Zg,"Team Member","Sign in with your organization access code + password",u.gc64(),t))
p.push(C.aa)
p.push(new B.aab(C.afR,C.a_C,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5B(),t))
return A.ce(t,r,A.br(!0,A.cf(A.u(p,C.ad,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adh,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aab.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.eq(A.B(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a1,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.en,A.D(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.op,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.L(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A1,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayF.prototype={}
B.aBM.prototype={}
B.j8.prototype={
lZ(d){var x=this.b,w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gama(){var x=this.d
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
b6D(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cyz(d){return this.b6D(null,d)},
azQ(d){return this.b6D(d,null)}}
B.SF.prototype={
S(){return new B.aA1(new A.cn(null,y.A))},
gd6(){return this.c}}
B.aA1.prototype={
Z(){this.a0()
this.aaY()},
aaY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Am(u.a.c),$async$aaY)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dG3(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaY,w)},
aaZ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$aaZ)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.esB)
case 1:return A.h(v,w)}})
return A.i($async$aaZ,w)},
Xj(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alx(s.d,4),$async$Xj)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_my_code_"+m+".png"),$async$Xj)
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
return A.i($async$Xj,w)},
aez(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aez=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7B("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aez)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aez,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===C.H,n=o?C.iT:C.oO,m=o?C.c:C.M,l=A.ez(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZF,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a1,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.acS,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.G,C.aB.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.cf(A.u(A.a([x,C.m9,w,C.k9,new A.en(A.p(p,A.pi(p,p,!1,B.hi1(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.k9,A.B(A.a([A.D(A.ex(M.Af,C.R_,q.gbZt(),p),1),C.av,A.D(A.dj(C.xi,C.a4p,q.gbZu(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ex(L.Y9,D.eXc,q.gckb(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JY,p,p,C.ah)
x=r}return A.ce(l,n,x,p,!1,!1,p,p)}}
B.SJ.prototype={
S(){return new B.aA4(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aA4.prototype={
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
Xk(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GK(u.d.a.a)
if(t==null){u.n(new B.dHc(u))
x=1
break}u.n(new B.dHd(u))
s=u.a
r=s.c
x=3
return A.b(B.a4z(s.d,new B.dHe(u),t,r),$async$Xk)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dHf(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xk,w)},
a_p(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_p=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.n(new B.dHg(r))
u=4
q=J.fh(r.a.d)
x=7
return A.b(B.qN(r.a.c,q),$async$a_p)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dHh(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.a9(r.a.d)>1?"NGMY Doc Share ("+J.a9(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.af3(p,m,l,j,k),$async$a_p)
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
return A.i($async$a_p,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===C.H,i=j?D.a9x:D.a7U,h=j?D.aaU:C.c,g=j?C.aO:C.M,f=j?C.bP:C.al,e=j?D.a8Q:C.aJ
i=[i,e,h,g,f,j?C.eY:C.bR]
x=A.L(d).ax.a===C.H
w=J.a9(l.a.d)
h=i[0]
g=i[3]
g=A.ez(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e3(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e3(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bw7,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.en,A.D(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZF,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tB(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.beN()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bl(k,k,k,C.JR,k,k,"",k,!0,new A.b1(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b1(4,A.m(18),new A.ax(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.af,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dHl(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JB(l.a.d,4)
m=A.A(new A.J(m,new B.dHm(x,new A.aCY(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.a9(l.a.d)>4)m.push(new A.C(C.nk,A.d("+ "+(J.a9(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.br,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.enj)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dg(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.ic,k,k,k,C.eE,k,k,k)],r))}e=A.D(A.cf(A.u(e,C.ad,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bhq,k,k,C.ah),1)
u=l.f?k:l.gckc()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(L.Y9,D.eY6,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ca,k,new A.b5(q,C.W),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZv()
t=A.bk(C.aB,k,k,0,C.c,k,C.mv,k,new A.b5(A.m(16),C.W),k,k,k)
return A.ce(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mx(new B.dHn(),A.u(A.a([e,new A.C(D.bgV,A.u(A.a([s,C.P,i,C.aa,A.bJ(l.f?C.qN:D.eWC,u,t)],r),C.ad,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UD,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.beN.prototype={
nV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f3(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h0(C.bo,v.length),C.aL)}}
B.SG.prototype={
S(){return new B.aA2()}}
B.aA2.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,C.aZ,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.bb(x,C.aZ,C.aL),v)
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
ab_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ab_=A.e(function(d,e){if(d===1){t.push(e)
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
return A.b(B.a4E(p,m,n,o,C.a.i(l).length===0?null:l),$async$ab_)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.esc)
s=[1]
x=4
break}p.F(y.q).f.P(D.eqQ)
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
return A.i($async$ab_,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax.a===C.H?C.iT:C.oO,q=A.ez(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.ePR,s,s,s,1,s,!0),p=A.p(s,D.bas,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.EN,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bCP,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCL,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bCZ,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
v=t.r?s:t.gbZw()
u=A.bk(C.aB,s,s,s,s,C.fV,s,s,s,s,s,s)
return A.ce(q,r,A.cf(A.u(A.a([p,C.d1,o,C.aa,x,C.aa,w,C.m9,A.bJ(t.r?C.qN:C.aKU,v,u)],y.p),C.ad,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.a9r.prototype={}
B.br2.prototype={
a20(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gG(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akP()))
x=3
return A.b(B.Pb(t,s),$async$a20)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a20,w)},
gd6(){return this.a}}
B.Lu.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WP.prototype={
S(){return new B.aw9(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aw9.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cWy(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZC(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZQ(d),u=x.a.c,t=u?C.hm:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.G,C.aB.j(u?0.25:0.12),C.fz,32)],n),l=A.p(w,T.air,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.G,C.aB.j(0.4),C.cv,16)],n),C.ajd,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tB(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqI()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bl(w,w,w,C.Dx,w,w,"",w,!0,new A.b1(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b1(4,A.m(16),D.aPO),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.af,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cWw(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lA,w,w,w,w)
f=f[1]
f=A.D(A.dU(C.mW,new B.cWx(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.ca,w,new A.b5(A.m(14),C.W),new A.ax(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.cG,12)],n)
g=y.p
return A.eA(w,C.K,new A.d2(Q.I9,A.bQ(new A.C(C.wu,A.u(A.a([l,C.aN,k,C.P,j,C.dW,i,C.dW,A.B(A.a([f,C.av,A.D(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dLy,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZB(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LE,C.n),C.b7),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b7),w),w,w,w,C.K_,C.cZ,w,w,w)}}
B.bqI.prototype={
nV(d,e){return e.ahE(e.a.toUpperCase())}}
B.SH.prototype={
S(){return new B.aA3(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.aA3.prototype={
Z(){var x=this
x.a0()
x.rQ()
x.w=A.dD(C.iW,new B.dHa(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SQ()
this.a2()},
Zh(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lt(u.a.c),$async$Zh)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zr(u.a.c),$async$Zh)
case 4:u.n(new s.dGy(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zh,w)},
rQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lt(u.a.c),$async$rQ)
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
LR(d){return this.bvL(d)},
bvL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
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
Mc(d){return this.bBK(d)},
bBK(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
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
rR(d,e){return this.cui(d,e)},
cui(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
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
return A.b(B.c2e(s,n,r,q,o,t),$async$GH)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fgJ(o,u.a.c),$async$GH)
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
Yo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amo(u.a.c),$async$Yo)
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
return A.b(A.a7(t,!1).cs(A.eH(new B.dGv(u,r,q),!1,null,y.H)),$async$Yo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yo,w)},
Zs(d){return this.ce_(d)},
cdZ(){return this.Zs(1)},
ce_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQw()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aml(u.a.c),$async$Zs)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zs,w)},
a93(d,e,f){return this.bRN(d,e,f)},
bRN(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a93=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rR(new B.dGs(u,d,null,e,f),"Uploading\u2026"),$async$a93)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a93,w)},
bvU(){B.h35(!1,new B.dGb(this))
return},
ciP(){this.n(new B.dGD(this))},
auA(){var x=0,w=A.j(y.H),v=this
var $async$auA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvU()
return A.h(null,w)}})
return A.i($async$auA,w)},
a9_(){var x=0,w=A.j(y.H),v=this
var $async$a9_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGh(v),"Importing\u2026"),$async$a9_)
case 2:return A.h(null,w)}})
return A.i($async$a9_,w)},
Qi(d){return this.ctM(d)},
ctM(d){var x=0,w=A.j(y.H),v,u=this,t
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
case 4:x=C.a.a_(t,"image/")||d.lZ(D.Nx)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cs(A.eH(new B.dGX(u,d),!1,null,y.H)),$async$Qi)
case 8:x=1
break
case 7:x=u.bSu(d)?9:10
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
bSu(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cnY,C.a.aV(x,w+1).toLowerCase())},
acj(d){return this.c5j(d)},
c5j(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lZ(D.m1)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cs(A.eH(new B.dGt(u,d),!1,null,y.H)),$async$acj)
case 5:x=1
break
case 4:u.n(new B.dGu(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acj,w)},
PH(d){return this.clC(d)},
clC(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
aeY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aeY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dGQ(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.A(new A.a5(t,new B.dGR(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PH(r),$async$aeY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeY,w)},
aeR(d){return this.clb(d)},
clb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZQ(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGJ(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeR)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qi(d)
break
case"qr":u.PH(A.a([d],y.r))
break
case"send_my_code":u.c5U(A.a([d],y.r))
break
case"save":u.aed(d)
break
case"delete":u.Hp(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeR,w)},
Vm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vm=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.b(A.oA(t,s.c,s.f),$async$Vm)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dGg(u,r),"Preparing file\u2026"),$async$Vm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vm,w)},
adq(d){return this.ccv(d)},
ccv(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h3N(d,!1),$async$adq)
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
return A.i($async$adq,w)},
acp(){var x=0,w=A.j(y.H),v=this,u
var $async$acp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.foi(u,v.a.c),$async$acp)
case 2:return A.h(null,w)}})
return A.i($async$acp,w)},
bvT(){B.h35(!1,new B.dGa(this,null))
return},
HE(d,e){return this.c5V(d,e)},
aW2(d){return this.HE(null,d)},
c5U(d){return this.HE(d,null)},
c5V(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b($.wf.c3().aka(!0,C.Wi,!1),$async$HE)
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
return A.b(B.byX(p,l,e,s.a.c),$async$HE)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HE,w)},
GW(d){return this.bRA(d)},
bRA(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hi0(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aW2(t),$async$GW)
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
return A.b(u.adq(t),$async$CV)
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
aed(d){return this.chq(d)},
chq(d){var x=0,w=A.j(y.H),v=this
var $async$aed=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGA(v,d),"Saving\u2026"),$async$aed)
case 2:return A.h(null,w)}})
return A.i($async$aed,w)},
Hp(d){return this.bE1(d)},
bE1(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(B.c2h(t),$async$Hp)
case 6:case 5:s=d.a
x=7
return A.b(B.D5(u.a.c,s),$async$Hp)
case 7:u.r.W(0,s)
x=8
return A.b(u.rQ(),$async$Hp)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hp,w)},
af3(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZQ(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGV(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$af3)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acp()
break
case"import":u.a9_()
break}case 1:return A.h(v,w)}})
return A.i($async$af3,w)},
bZz(d){var x=d.c
if(C.a.a_(x,"video/")||d.lZ(D.m1))return C.pa
if(C.a.a_(x,"image/")||d.lZ(D.Nx))return C.rT
if(C.a.q(x,"pdf"))return E.Lc
return D.agg},
B(d){var x,w,v=this,u=null,t=B.ZQ(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EG,u,u,u,new B.dH5(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwD,u,u,u,v.e?u:v.gc5C(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gciO()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.br2:E.agF,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y6,u,u,u,v.e?u:v.gbZA(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.ns,u,u,u,v.e?u:v.gaX5(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.byh,u,u,u,v.e?u:new B.dH6(v),u,u,u,u,"More options",u))
q=A.ez(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lk(new B.dH7(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([p.j(A.L(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([C.aB.j(A.L(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mR(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.aw6(C.j1,s,!0,t,w?u:v.gclD(),u),1)
x.push(new A.C(D.bfH,A.mx(new B.dH8(),A.B(A.a([s,C.av,A.D(new B.aw6(C.ur,"Export",!1,t,w?u:v.gbHq(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ie,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9v(t,v.e?u:v.gaX5(),u)
else s=A.jT(!0,u,u,new B.dH9(v,t),s,u,D.bfz,u,u,!1,!1)
x.push(A.D(s,1))
return A.ce(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aw6.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.ua,t,new A.b5(s,C.W),t,t,t)
return A.dj(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ua,t,new A.b5(s,C.W),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ex(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eJ,t,t,t),u.r,v)}}
B.b9v.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mx(new B.cWu(),new A.C(E.Vv,A.u(A.a([A.mx(new B.cWv(),A.p(x,A.V(C.wP,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aD,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ev,C.ig,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dj(C.ns,D.f0f,this.d,A.bk(C.aB,x,x,x,C.c,x,C.Vq,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zp,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9L.prototype={
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
if(!o||i.lZ(D.m1))p=D.cT4
else{p=C.a.a_(p,"image/")||i.lZ(D.Nx)
n=y.O
p=p?A.a([C.cW,C.aB],n):A.a([C.aK.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gama()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lZ(D.m1))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.D(A.u(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fx,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lZ(D.m1)))l.push(A.fy2(C.aB,!1,j,j,j,!1,j,j,new B.cWR(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.np,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mx(new B.cWS(),new A.C(C.dZ,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.C(C.UX,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ax(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WR.prototype={
S(){return new B.awb()},
gd6(){return this.c}}
B.awb.prototype={
Z(){this.a0()
this.wM()},
p(){B.hif(this.e)
this.a2()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qN(o.c,o.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aE.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hii(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hih(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWO(s))
x=1
break}s.n(new B.cWP(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a4(l)
if(s.c==null){x=1
break}s.n(new B.cWQ(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
a_o(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qN(t.c,t.d),$async$a_o)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.epi)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.af3(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_o)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_o,w)},
bRt(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k7(u,C.B,v,new B.cWM(w,t),C.fH,C.dn,!0,v,v,v,v)
else if(t!=null&&!C.aE.gah(t))x=A.fC(t,C.B,v,new B.cWN(w),C.fH,C.dn,!0,v,!1,v,v)
else return C.bF
return A.tK(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZQ(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ag,u,u,u,v.gb_O(),u,u,u,u,"Share / save",u))
r=A.ez(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cq
else{q=v.r
if(q!=null)t=new A.C(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.em,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dj(C.Ag,D.eLD,v.gb_O(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRt()}return A.ce(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WO.prototype={
S(){return new B.aw8(A.afP(),C.bu,C.bu)},
gd6(){return this.c}}
B.aw8.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fm(w,A.a2(w).k("fm<1>")).hX(new B.cWr(v))
x.gcHa().hX(new B.cWs(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fm(x,A.a2(x).k("fm<1>"))}if(x==null)x=C.aVD
x.hX(new B.cWt(v))
v.wM()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qN(p.c,p.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cWk(s))
x=1
break}x=8
return A.b(s.d.AZ(0,new A.a10(r,s.a.d.c)),$async$wM)
case 8:if(s.c==null){x=1
break}s.n(new B.cWl(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
if(s.c==null){x=1
break}s.n(new B.cWm(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
Xl(){var x=0,w=A.j(y.H),v=this,u
var $async$Xl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fT(0),$async$Xl)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xl)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xl,w)},
aOt(d){var x=d.a
return C.a.aU(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZQ(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.ez(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cq
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bs0,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LE,C.n),o,88,o,o,o,o,o,88)
t=A.m8(C.aB,o,o,m,0,new B.cWn(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOt(p.w)+" / "+p.aOt(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.elT,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.wZ:C.iE,o,o,o,o,o)
x=A.u(A.a([u,C.k9,t,x,C.d1,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZD(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.ce(v,w,A.as(new A.C(C.ue,x,o),o,o,o),o,!1,!1,o,o)}}
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
return A.b(B.fAg(o.c,o.d,new B.cX4(s)),$async$NG)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cX5(s))
x=1
break}s.e=r
q=O.hEf(r)
if(q==null){s.n(new B.cX6(s))
x=1
break}s.d=q
q.aJ(0,s.gaVS())
x=8
return A.b(q.hW(0).cJ(0,C.rz),$async$NG)
case 8:if(s.c==null){x=1
break}s.n(new B.cX7(s))
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
break}s.n(new B.cX8(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NG,w)},
c3Y(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cX9(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BH(0,x.gaVS())
w=x.d
if(w!=null)w.p()
B.hNK(x.e)
x.a2()},
ab2(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWb(u.c,u.d),$async$ab2)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ab2,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZQ(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.ez(A.a([A.aF(t,t,t,t,C.oa,t,t,t,u.gbZx(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i6(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cq
else{q=u.r
if(q!=null)s=new A.C(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afj(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fM(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.yZ(s,t),A.aJ(t,A.Fk(A.p(t,A.V(q?H.wZ:C.iE,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b9,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cXb(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.ce(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WT.prototype={
S(){return new B.awc(new A.cn(null,y.A))}}
B.awc.prototype={
gcu2(){var x,w,v=this.a
if(v.e!==D.OL)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gctK(){var x,w,v=this.a
if(v.e!==D.xP)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcu2()
if(x!=null){v.OJ(x)
v.e=A.dD(R.Dn,new B.cX0(v,x))}w=v.gctK()
if(w!=null){v.OI(w)
v.f=A.dD(C.h_,new B.cX1(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OI(d){return this.caM(d)},
caM(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amt(d),$async$OI)
case 3:t=f
x=4
return A.b(B.c2A(d),$async$OI)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWT(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
OJ(d){return this.caN(d)},
caN(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.foA(d),$async$OJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwW(t),$async$OJ)
case 4:if(u.c==null){x=1
break}u.n(new B.cWU(u))
u.c.F(y.q).f.P(D.aHZ)
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
gbWk(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZy(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_9(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BB()){t=u.c
if(t!=null)t.F(y.q).f.P(D.esm)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cs(A.eH(new B.cWV(),!1,null,y.N)),$async$a_9)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwW(s),$async$a_9)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aHZ)
case 1:return A.h(v,w)}})
return A.i($async$a_9,w)},
a6Z(d){return this.bBL(d)},
bBL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aG(t,", "))),$async$a6Z)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b_(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6Z,w)},
ab0(d){return this.bBv(d)},
bBv(d){var x=0,w=A.j(y.H),v=this
var $async$ab0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$ab0)
case 2:if(d.e!=null)d.F(y.q).f.P(D.epL)
return A.h(null,w)}})
return A.i($async$ab0,w)},
a_4(d){return this.chs(d)},
chs(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alx(s.d,4),$async$a_4)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_doc_share_qr.png"),$async$a_4)
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
return A.i($async$a_4,w)},
gaRz(){var x,w=this.a
if(w.e!==D.FO)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6W(d){return this.bBE(d)},
bBE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRz()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6W)
case 3:if(d.e!=null)d.F(y.q).f.P(D.erm)
case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
ab1(){var x=0,w=A.j(y.H),v=this,u
var $async$ab1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SQ(),$async$ab1)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$ab1,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZQ(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FO&&i!==D.OL&&i!==D.xP
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.ez(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FO||t===D.OL||t===D.xP?l:A.aF(l,l,l,l,C.kA,l,l,l,m.gaUa(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.br,A.d(""+q.d+" file(s) \xb7 "+m.gbWk(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FO){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gbZy(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bBU,D.eU2,new B.cWW(m,d),l)],p))}if(m.a.e===D.FO&&m.gaRz()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a0,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.byC,D.eR6,new B.cWX(m,d),l)],p))
if(m.a.e===D.xP){x=(m.w?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ct:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}if(m.a.e===D.OL){x=(m.r?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ct:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l),C.aa,A.dj(D.but,D.eWV,m.gchQ(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.ce(v,w,new A.C(C.a8,A.u(A.a([A.D(A.p(l,A.u(q,C.m,l,C.b4,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.B(A.a([A.D(A.ex(M.Af,C.R_,new B.cWY(m,d),l),1),C.av,A.D(A.dj(C.xi,C.a4p,new B.cWZ(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bJ(C.yi,m.gaUa(),A.bk(C.aK,l,l,l,l,C.fV,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cX_(),y.C)}}
B.a9J.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cf(A.u(A.a([w,C.aN,A.p(x,A.pi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ah)
return A.eo(A.a([A.bJ(C.BN,new B.cWj(d),x)],u),x,x,C.mi,v,x,x,x,x,D.eKH,x)}}
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
return A.ce(A.ez(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eRw,x,x,x,1,x,!0),C.w,A.y6(this.d,C.bM,this.gati()),x,!1,!1,x,x)}}
B.WU.prototype={
S(){return new B.awd(A.y7(C.wb,C.n2,C.t2))},
gd6(){return this.c}}
B.awd.prototype={
bSw(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acM(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q8("text/plain"),$async$acM)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.esg)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acM,w)},
a7J(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h3N(p,!0),$async$a7J)
case 3:t=e
p=t==null
s=B.a4G(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.eoT)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7J,w)},
p(){this.d.p()
this.a2()},
atj(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSw(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahx,v,v,v,w.gbGZ(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yd,v,v,v,w.gc8c(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.ez(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rR:P.KY,v,v,v,v,v),v,v,v,new B.cX3(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eXG,v,v,v,1,v,!0)
u=A.y6(w.d,C.bM,w.gati())
x=A.m(20)
return A.ce(t,C.w,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dPZ],s),v),v,!1,!1,v,v)}}
B.b9w.prototype={
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
B.a70.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mx.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UX.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mw.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dz.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cdj.prototype={}
B.Dy.prototype={}
B.a7_.prototype={}
B.aqH.prototype={}
B.UY.prototype={}
var z=a.updateTypes(["au<~>()","S(j8)","n(j8)","SH(Y)","~()","WQ(Y)","I(I,j8)","NF(Y)","~(lE)","cp(Dy)","au<j8?>(@)","SF(Y)","SJ(Y)","C(j8)","j8(@)","a0<n,@>(j8)","WP(Y)","SG(Y)","WR(Y)","WO(Y)","WT(Y)","a9J(Y)","ak<j8>()","WU(Y)","a9L(Y,I)","WN(Y)","a0<n,aB>(j8)","cp(UX)","cp(a7_)","au<cp>(Dy)"])
B.cdf.prototype={
$1(d){var x=this.a
x.x=D.aFx
x.y.H(0,D.aFx)},
$S:69}
B.cdg.prototype={
$1(d){var x=this.a
x.x=D.aFw
x.y.H(0,D.aFw)},
$S:69}
B.cdh.prototype={
$1(d){var x=this.a
x.ae6(A.aLt(d.data)).bw(new B.cde(x),y.b)},
$S:69}
B.cde.prototype={
$1(d){var x=this.a
x.z.H(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cdi.prototype={
$1(d){},
$S:69}
B.cdl.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hmW(d.channel))},
$S:15}
B.cdm.prototype={
$1(d){},
$S:15}
B.cdn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFd(w.iceConnectionState)
x.cx=w
if($.fIL())switch(w.a){case 0:x.cy=D.aFC
break
case 1:x.cy=D.aFD
break
case 3:x.cy=D.aFE
break
case 5:x.cy=D.aFA
break
case 6:x.cy=D.aFB
break
case 7:x.cy=D.a2b
break
default:break}},
$S:149}
B.cdo.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFe(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:149}
B.cdp.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hPc(w.signalingState)},
$S:149}
B.cdq.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hNw(w.connectionState)},
$S:149}
B.cdr.prototype={
$1(d){},
$S:149}
B.cds.prototype={
$1(d){},
$S:15}
B.f3o.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"blobs")
if(!w)C.w8.Jc(x,"blobs")},
$S:198}
B.fo6.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uG.f1(this.b)
$.eI.lU()
this.c.$1(d)},
$S:449}
B.fo8.prototype={
$1(d){return this.a.$1(B.hvB(this.b,this.c))},
$S:31}
B.fo7.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fo5.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fol.prototype={
$1(d){var x=this
return B.fUB(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fom.prototype={
$1(d){var x=this
return B.fUB(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f4H.prototype={
$1(d){var x=this
return B.c2b(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWC.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWz.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2b(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWB.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2b(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWA.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2b(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWE.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.B(A.a([A.aF(x,x,x,x,D.bt6,x,x,x,new B.cWD(d),x,x,x,x,x,x),A.D(A.Dk(D.Nk,!0,x,C.Xg,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nk,x,g,C.adA,0,e,f)},
$C:"$4",
$R:4,
$S:430}
B.cWD.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6G.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eo,y.o).w,t=this.a,s=t?C.hm:C.c,r=A.m(28),q=A.p(v,D.baL,C.h,v,v,D.aRq,v,v,v,v,D.adr,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxb,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.C(new A.M(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.C(C.zE,A.u(A.a([o,C.aa,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahM,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v),C.br,A.B(A.a([A.D(A.dU(C.de,new B.f6E(d),v),1),C.av,A.D(A.bJ(D.eQ9,new B.f6F(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JG,v,v,v,v),v)},
$S:58}
B.f6E.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6F.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eq_)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayF(v,x))},
$S:0}
B.f79.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eo,y.o).w,u=x.a,t=u?C.hm:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.M(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.baA,C.h,w,w,D.aSM,w,w,w,w,D.adr,w,w,1/0),new A.C(C.zE,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fF6(u,"Organization name",C.E_,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fF6(u,"Access code",C.mB,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fF6(u,"Member password",N.EB,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.br,A.bJ(D.eXK,new B.f78(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fV,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JG,w,w,w,w),w)},
$S:58}
B.f78.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eq4)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBM(u,x,w))},
$S:0}
B.c22.prototype={
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
B.c28.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c29.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c2a.prototype={
$1(d){return d.b},
$S:z+2}
B.c24.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c25.prototype={
$1(d){return d.b},
$S:z+2}
B.c23.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c26.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c27.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.foj.prototype={
$1(d){return new B.SF(this.a,null)},
$S:z+11}
B.fok.prototype={
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
$S:104}
B.dHl.prototype={
$1(d){var x=this.a
return x.f?null:x.Xk()},
$S:2}
B.dHm.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lZ(D.Nx))s=C.rT
else s=C.a.a_(s,"video/")||d.lZ(D.m1)?C.pa:D.agg
x=this.b.a
w=y.p
return new A.C(C.ll,A.B(A.a([A.p(v,A.V(s,C.aB,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gama(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dG4.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dG5.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c2c.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:92}
B.c2d.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:92}
B.foR.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f0B.prototype={
$1(d){return J.k(d)},
$S:17}
B.f4T.prototype={
$1(d){var x=this.b
B.htK(C.DN.ga3z(this.a)).bw(x.gcwY(x),y.H)},
$S:118}
B.f4U.prototype={
$1(d){return this.a.d0(0,null)},
$S:118}
B.f4V.prototype={
$0(){return null},
$S:11}
B.c2r.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f4W.prototype={
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
B.f8P.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f3A.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3B.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2w.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m1)},
$S:z+1}
B.fsM.prototype={
$1(d){return new B.WP(this.a,null)},
$S:z+16}
B.cWy.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:8}
B.cWw.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cWx.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dHa.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zh()},
$S:14}
B.dGy.prototype={
$0(){var x=J.bzZ(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGz.prototype={
$0(){var x=J.bzZ(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dG7.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dG6(this.b))
if(w>=0){x=x.d
x[w]=x[w].azQ(this.c)}},
$S:0}
B.dG6.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dG8.prototype={
$0(){var x=J.bzZ(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGd.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dGc(this.b))
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
x=s.gcf(t)?6:7
break
case 6:x=8
return A.b(r.Zs(s.gG(t)),$async$$0)
case 8:case 7:r.hM(s.gah(t)?u.d:u.e+" "+s.gG(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGb.prototype={
$1(d){this.a.a93(d,"No files selected.","Added")},
$S:449}
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
return A.b($.wf.c3().cJ4(C.Wi,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fh(o.a)
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
return A.b(B.ams(null,m,o.a.c),$async$$0)
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
else x.H(0,w)},
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
return A.b(p.cdZ(),$async$$0)
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
$1(d){var x=this.a,w=C.d.bf(x.d,new B.dGK(d))
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
t=A.d(p.gama(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
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
$S:449}
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
return A.b(B.byX(q,s,u.c,t.a.c),$async$$0)
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
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fAj(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.H(q.a,t)
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
return A.b(A.cg(null,null,!1,null,new B.dGn(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dGo(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dk,new B.dGp()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rQ(),$async$$0)
case 9:s.hM("Received "+q.gG(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGm.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGj(x,d,e))},
$S:137}
B.dGj.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGn.prototype={
$1(d){return new B.a9J(this.a.a,null)},
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
return A.b(u.a.aW2(B.GK(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ams(new B.dGk(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.fAi(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rQ(),$async$$0)
case 10:o=J.cB(r)
p=o.eD(r,new B.dGl()).gG(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gG(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGk.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGi(x,d,e))},
$S:137}
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
return A.b(B.aWb(u.a.c,v.b),$async$$0)
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
this.a.bvT()},
$S:0}
B.dGU.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dH7.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.GT(D.Nk,x,C.Xg,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nk).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dH5.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dH6.prototype={
$0(){this.a.af3()
return null},
$S:0}
B.dH8.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:104}
B.dH9.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9L(e,w,v,this.b,x.e,x.bZz(w),new B.dH1(x,w),new B.dH2(x,v,w),new B.dH3(x,w),new B.dH4(x,w),null)},
$S:z+24}
B.dH1.prototype={
$0(){this.a.acj(this.b)
return null},
$S:0}
B.dH2.prototype={
$0(){var x=this.a
return x.n(new B.dH0(x,this.b,this.c))},
$S:0}
B.dH0.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.H(0,w)},
$S:0}
B.dH3.prototype={
$0(){this.a.Mc(this.b)
return null},
$S:0}
B.dH4.prototype={
$0(){this.a.aeR(this.b)
return null},
$S:0}
B.cWu.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:104}
B.cWv.prototype={
$3(d,e,f){return A.e5(C.B,f,e,null,null)},
$S:135}
B.cWS.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:104}
B.cWR.prototype={
$1(d){return this.a.y.$0()},
$S:77}
B.cWO.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWP.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWQ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWM.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aE.gah(w))return A.fC(w,C.B,x,new B.cWK(this.a),C.fH,C.dn,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWL(this.a))
return C.bF},
$S:125}
B.cWK.prototype={
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
B.cWL.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWH(x))},
$S:8}
B.cWH.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWN.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWJ(this.a))
return C.bF},
$S:186}
B.cWJ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWG(x))},
$S:8}
B.cWG.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWr.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWq(x,d))},
$S:1734}
B.cWq.prototype={
$0(){return this.a.f=this.b===C.tq},
$S:0}
B.cWs.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWp(x,d))},
$S:8}
B.cWp.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cWt.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWo(x,d))},
$S:8}
B.cWo.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cWk.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cWl.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cWm.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cWn.prototype={
$1(d){return this.a.d.Lf(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cX4.prototype={
$0(){var x=this.a.a
return B.qN(x.c,x.d)},
$S:1735}
B.cX5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cX6.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cX7.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cX8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cX9.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cXb.prototype={
$0(){var x=this.a
x.n(new B.cXa(x))},
$S:0}
B.cXa.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fT(0)
else x.p5(0)},
$S:0}
B.cX0.prototype={
$1(d){return this.a.OJ(this.b)},
$S:14}
B.cX1.prototype={
$1(d){return this.a.OI(this.b)},
$S:14}
B.cWT.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWU.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWV.prototype={
$1(d){return D.f9P},
$S:z+25}
B.cX_.prototype={
$2(d,e){if(d)B.SQ()},
$S:120}
B.cWW.prototype={
$0(){return this.a.a6Z(this.b)},
$S:0}
B.cWX.prototype={
$0(){return this.a.a6W(this.b)},
$S:0}
B.cWY.prototype={
$0(){return this.a.ab0(this.b)},
$S:0}
B.cWZ.prototype={
$0(){return this.a.a_4(this.b)},
$S:0}
B.cWj.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cX3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cX2(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cX2.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2y.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m1)},
$S:z+1}
B.c2z.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2x.prototype={
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
$S:1736}
B.f8s.prototype={
$1(d){if(d===D.a2a&&(this.a.a.a&30)===0)this.a.fB(0)},
$S:z+27}
B.f8t.prototype={
$0(){},
$S:11}
B.f8X.prototype={
bf9(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eYT(t,r.b,u,q,v.b),$async$$2)
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
$S:525}
B.f8W.prototype={
$1(d){var x=this
d.b=new B.f8V(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f8V.prototype={
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
return A.b(B.aWc(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.H(0,m)
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
return A.b(B.eYT(l,n.b,m,n.c,s.d),$async$$1)
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
x(v=B.awa.prototype,"gc5f","Ok",0)
x(v,"gc64","HF",0)
x(v,"gc5B","wU",0)
x(v=B.aA1.prototype,"gbZt","aaZ",0)
x(v,"gbZu","Xj",0)
x(v,"gckb","aez",0)
x(v=B.aA4.prototype,"gbZv","Xk",0)
x(v,"gckc","a_p",0)
x(B.aA2.prototype,"gbZw","ab_",0)
x(B.aw9.prototype,"gbZB","bZC",4)
x(v=B.aA3.prototype,"gc5C","Yo",0)
x(v,"gciO","ciP",4)
x(v,"gaX5","auA",0)
x(v,"gclD","aeY",0)
x(v,"gbHq","Vm",0)
x(v,"gbZA","CV",0)
x(B.awb.prototype,"gb_O","a_o",0)
x(B.aw8.prototype,"gbZD","Xl",0)
x(v=B.awe.prototype,"gaVS","c3Y",4)
x(v,"gbZx","ab2",0)
x(v=B.awc.prototype,"gchQ","a_9",0)
x(v,"gaUa","ab1",0)
w(B.aw7.prototype,"gati","atj",8)
x(v=B.awd.prototype,"gc8c","acM",0)
x(v,"gbGZ","a7J",0)
w(v,"gati","atj",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.cdj,B.a7_,B.aqH,B.ayF,B.aBM,B.j8,B.a9r,B.br2,B.Dy,B.UY])
w(B.cdk,B.cdj)
w(B.b0h,B.a7_)
x(A.i2,[B.cdf,B.cdg,B.cdh,B.cde,B.cdi,B.cdl,B.cdm,B.cdn,B.cdo,B.cdp,B.cdq,B.cdr,B.cds,B.f3o,B.fo6,B.fo8,B.fo7,B.fol,B.fom,B.f4H,B.cWz,B.cWB,B.cWA,B.cWE,B.f6G,B.f79,B.c22,B.c29,B.c2a,B.c25,B.c23,B.c26,B.c27,B.foj,B.fok,B.dHe,B.dHn,B.dHl,B.dHm,B.f0B,B.f4T,B.f4U,B.c2r,B.f4W,B.f8P,B.f3A,B.f3B,B.c2w,B.fsM,B.cWy,B.cWw,B.dHa,B.dG6,B.dGc,B.dGv,B.dGb,B.dGC,B.dGW,B.dGX,B.dGY,B.dGt,B.dGL,B.dGK,B.dGM,B.dGN,B.dGO,B.dGQ,B.dGR,B.dGJ,B.dGe,B.dGf,B.dGa,B.dGw,B.dGn,B.dGl,B.dGB,B.dGV,B.dH7,B.dH8,B.cWu,B.cWv,B.cWS,B.cWR,B.cWM,B.cWK,B.cWI,B.cWL,B.cWN,B.cWJ,B.cWr,B.cWs,B.cWt,B.cWn,B.cX0,B.cX1,B.cWV,B.c2y,B.c2z,B.f8s,B.f8W,B.f8V])
w(B.b0i,B.aqH)
x(A.jk,[B.fo5,B.cWC,B.cWD,B.f6E,B.f6F,B.f78,B.dG3,B.dHc,B.dHd,B.dHb,B.dHf,B.dHg,B.dHh,B.dHi,B.dHj,B.dHk,B.dG4,B.dG5,B.f4V,B.cWx,B.dGy,B.dGz,B.dG7,B.dG8,B.dGd,B.dGZ,B.dH_,B.dGs,B.dGD,B.dGh,B.dGu,B.dGP,B.dGE,B.dGF,B.dGG,B.dGH,B.dGI,B.dGg,B.dG9,B.dGx,B.dGq,B.dGj,B.dGo,B.dGp,B.dGr,B.dGi,B.dGA,B.dGS,B.dGT,B.dGU,B.dH5,B.dH6,B.dH1,B.dH2,B.dH0,B.dH3,B.dH4,B.cWO,B.cWP,B.cWQ,B.cWF,B.cWH,B.cWG,B.cWq,B.cWp,B.cWo,B.cWk,B.cWl,B.cWm,B.cX4,B.cX5,B.cX6,B.cX7,B.cX8,B.cX9,B.cXb,B.cXa,B.cWT,B.cWU,B.cWW,B.cWX,B.cWY,B.cWZ,B.cWj,B.cX3,B.cX2,B.f8t])
x(A.mb,[B.a9K,B.Lu,B.a70,B.Mx,B.UX,B.Mw,B.Dz])
x(A.ae,[B.WQ,B.SF,B.SJ,B.SG,B.WP,B.SH,B.WR,B.WO,B.NF,B.WT,B.WN,B.WU])
x(A.ag,[B.awa,B.aA1,B.aA4,B.aA2,B.aw9,B.aA3,B.awb,B.aw8,B.awe,B.awc,B.aw7,B.awd])
x(A.ar,[B.aab,B.aw6,B.b9v,B.a9L,B.a9J,B.b9w])
x(A.kx,[B.c28,B.c24,B.c2c,B.c2d,B.foR,B.dGm,B.dGk,B.dH9,B.cX_,B.c2x,B.f8X])
x(A.iG,[B.beN,B.bqI])})()
A.kd(b.typeUniverse,JSON.parse('{"b0h":{"a7_":[]},"b0i":{"aqH":[]},"WQ":{"ae":[],"r":[]},"awa":{"ag":["WQ"]},"aab":{"ar":[],"r":[]},"SF":{"ae":[],"r":[]},"SJ":{"ae":[],"r":[]},"aA1":{"ag":["SF"]},"aA4":{"ag":["SJ"]},"beN":{"iG":[]},"SG":{"ae":[],"r":[]},"aA2":{"ag":["SG"]},"WP":{"ae":[],"r":[]},"SH":{"ae":[],"r":[]},"a9L":{"ar":[],"r":[]},"WR":{"ae":[],"r":[]},"WO":{"ae":[],"r":[]},"NF":{"ae":[],"r":[]},"WT":{"ae":[],"r":[]},"a9J":{"ar":[],"r":[]},"WN":{"ae":[],"r":[]},"WU":{"ae":[],"r":[]},"aw9":{"ag":["WP"]},"bqI":{"iG":[]},"aA3":{"ag":["SH"]},"aw6":{"ar":[],"r":[]},"b9v":{"ar":[],"r":[]},"awb":{"ag":["WR"]},"aw8":{"ag":["WO"]},"awe":{"ag":["NF"]},"awc":{"ag":["WT"]},"aw7":{"ag":["WN"]},"awd":{"ag":["WU"]},"b9w":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tu"),k:x("K0()"),m:x("bt<n,n>"),F:x("qq"),g:x("au<j8?>"),x:x("au<~>"),V:x("N<aa>"),O:x("N<x>"),W:x("N<be>"),Y:x("N<a0<n,S>>"),t:x("N<a0<n,@>>"),r:x("N<j8>"),w:x("N<+file,name(lf,n)>"),u:x("N<cI>"),s:x("N<n>"),E:x("N<iG>"),a:x("N<dz>"),p:x("N<r>"),Z:x("N<I>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("ak<j8>"),j:x("ak<@>"),I:x("ak<I>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hT_"),af:x("CO"),U:x("j8"),b:x("cp"),C:x("aB"),aK:x("vf"),ab:x("Dy"),br:x("aqH"),v:x("UY"),N:x("n"),X:x("bm<Q>"),Q:x("lq"),D:x("dz"),aw:x("cv<n>"),cd:x("a5<a0<n,@>>"),c7:x("r"),ch:x("bM<ak<j8>>"),aW:x("bM<dz?>"),aY:x("bM<~>"),cx:x("a9K"),b1:x("bd<ak<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayF"),bG:x("aBM"),q:x("mz"),B:x("oQ<Dy>"),c6:x("oQ<a70>"),y:x("S"),i:x("Q"),z:x("@"),S:x("I"),aQ:x("be?"),_:x("ak<j8>?"),aL:x("ak<@>?"),h:x("a0<n,@>?"),l:x("j8?"),R:x("aB?"),c:x("UY?"),d:x("+answerQr,transfer(n,au<ak<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,Lu,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9r?"),bk:x("ayF?"),ag:x("aBM?"),dd:x("Q?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPO=new A.ax(C.aB,2,C.r,-1)
D.bFh=new A.a8(C.a1,C.a7,C.x,C.Zg,null,null)
D.aRq=new A.o(null,null,null,C.mf,null,D.bFh,C.n)
D.aSM=new A.o(null,null,null,C.mf,null,E.EN,C.n)
D.a7U=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8Q=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9x=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaU=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eLx=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eYB=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.H9,null,null,null,null,null,null,null,null,null)
D.cM4=x([D.eLx,C.ar,D.eYB],y.p)
D.bas=new A.fk(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cM4,null)
D.f1v=new A.w("Create your organization",null,C.h9,null,null,null,null,null,null,null,null,null)
D.ePu=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.H9,null,null,null,null,null,null,null,null,null)
D.cZw=x([D.f1v,C.ar,D.ePu],y.p)
D.baA=new A.fk(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cZw,null)
D.eZ8=new A.w("Team Member sign-in",null,C.h9,null,null,null,null,null,null,null,null,null)
D.eSX=new A.w("Enter the access code and password from your organization.",null,G.H9,null,null,null,null,null,null,null,null,null)
D.cXG=x([D.eZ8,C.ar,D.eSX],y.p)
D.baL=new A.fk(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cXG,null)
D.bfz=new A.M(16,10,16,28)
D.bfH=new A.M(16,14,16,4)
D.bgV=new A.M(20,0,20,16)
D.bhq=new A.M(20,8,20,16)
D.adr=new A.M(24,22,24,20)
D.Xl=new A.a_(63394,"MaterialIcons",!1)
D.agg=new A.a_(63515,"MaterialIcons",!1)
D.br2=new A.a_(983813,"MaterialIcons",!1)
D.boj=new A.a_(62867,"MaterialIcons",!1)
D.bs0=new A.ac(D.boj,44,C.c,null,null,null)
D.bt6=new A.ac(C.rN,null,C.ak,null,null,null)
D.but=new A.ac(C.iF,18,null,null,null,null)
D.bw7=new A.ac(D.Xl,26,C.c,null,null,null)
D.bwD=new A.ac(C.Er,null,null,null,null,null)
D.bxb=new A.ac(C.x9,null,null,null,null,null)
D.byh=new A.ac(W.Lb,null,null,null,null,null)
D.byC=new A.ac(C.h4,16,null,null,null,null)
D.bBU=new A.ac(C.ql,16,null,null,null,null)
D.bsi=new A.ac(C.mB,null,null,null,null,null)
D.bCL=new A.e0(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsi,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxI=new A.ac(C.E_,null,null,null,null,null)
D.bCP=new A.e0(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsD=new A.ac(N.EB,null,null,null,null,null)
D.bCZ=new A.e0(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cor=x([C.eY,C.aW,C.aB],y.O)
D.bH0=new A.a8(C.ax,C.aD,C.x,D.cor,null,null)
D.cnY=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nk=x([C.eY,C.aB],y.O)
D.Nx=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m1=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cT4=x([C.q3,C.aB],y.O)
D.dHe={iceServers:0}
D.aAu={urls:0}
D.d25=new A.bt(D.aAu,["stun:stun.l.google.com:19302"],y.m)
D.d24=new A.bt(D.aAu,["stun:stun1.l.google.com:19302"],y.m)
D.cDo=x([D.d25,D.d24],A.aA("N<a0<n,n>>"))
D.d1q=new A.bt(D.dHe,[D.cDo],A.aA("bt<n,@>"))
D.FO=new B.Lu(0,"lanDirect")
D.OK=new B.Lu(1,"cloudStash")
D.dcE=new B.Lu(2,"inlineInstant")
D.OL=new B.Lu(3,"webrtcLink")
D.xP=new B.Lu(4,"videoCloud")
D.eYA=new A.w("Receive file",null,C.mT,null,null,null,null,null,null,null,null,null)
D.cec=x([E.ahV,C.ab,D.eYA],y.p)
D.eik=new A.cC(C.aY,C.b4,C.j,C.m,null,C.p,null,0,D.cec,null)
D.dLy=new A.C(C.ca,D.eik,null)
D.eD6=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZT,null,null,null)
D.eM2=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eD6,null,C.L,null,null,null,null,null,null,null)
D.dKU=new A.C(C.zH,D.eM2,null)
D.aWM=new A.cw(C.B,null,null,D.dKU,null)
D.dPZ=new A.cE(0,null,0,28,null,null,D.aWM,null)
D.dQg=new B.a70(0,"RTCDataChannelConnecting")
D.aFw=new B.a70(1,"RTCDataChannelOpen")
D.aFx=new B.a70(3,"RTCDataChannelClosed")
D.dQh=new B.Dz(0,"RTCIceConnectionStateNew")
D.dQi=new B.Dz(1,"RTCIceConnectionStateChecking")
D.dQj=new B.Dz(2,"RTCIceConnectionStateCompleted")
D.dQk=new B.Dz(3,"RTCIceConnectionStateConnected")
D.dQl=new B.Dz(4,"RTCIceConnectionStateCount")
D.dQm=new B.Dz(5,"RTCIceConnectionStateFailed")
D.dQn=new B.Dz(6,"RTCIceConnectionStateDisconnected")
D.aFy=new B.Dz(7,"RTCIceConnectionStateClosed")
D.aFz=new B.UX(0,"RTCIceGatheringStateNew")
D.dQo=new B.UX(1,"RTCIceGatheringStateGathering")
D.a2a=new B.UX(2,"RTCIceGatheringStateComplete")
D.a2b=new B.Mw(0,"RTCPeerConnectionStateClosed")
D.aFA=new B.Mw(1,"RTCPeerConnectionStateFailed")
D.aFB=new B.Mw(2,"RTCPeerConnectionStateDisconnected")
D.aFC=new B.Mw(3,"RTCPeerConnectionStateNew")
D.aFD=new B.Mw(4,"RTCPeerConnectionStateConnecting")
D.aFE=new B.Mw(5,"RTCPeerConnectionStateConnected")
D.dQp=new B.Mx(0,"RTCSignalingStateStable")
D.dQq=new B.Mx(1,"RTCSignalingStateHaveLocalOffer")
D.dQr=new B.Mx(2,"RTCSignalingStateHaveRemoteOffer")
D.dQs=new B.Mx(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dQt=new B.Mx(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFF=new B.Mx(5,"RTCSignalingStateClosed")
D.elT=new A.ap(160,48)
D.aXU=new A.f9(2,null,null,null,null,C.aB,null,null,null,null)
D.enj=new A.a3(16,16,D.aXU,null)
D.eOW=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eoJ=new A.aY(D.eOW,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVH=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eoM=new A.aY(D.eVH,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f2v=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eoT=new A.aY(D.f2v,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eOz=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.epi=new A.aY(D.eOz,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eZh=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aHZ=new A.aY(D.eZh,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f_x=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.epL=new A.aY(D.f_x,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f3N=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eq_=new A.aY(D.f3N,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f1X=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eq4=new A.aY(D.f1X,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f34=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eqQ=new A.aY(D.f34,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNi=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.erm=new A.aY(D.eNi,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXn=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.erH=new A.aY(D.eXn,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQX=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.esc=new A.aY(D.eQX,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f3T=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.esg=new A.aY(D.f3T,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNy=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.esm=new A.aY(D.eNy,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eMm=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.esB=new A.aY(D.eMm,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eJw=new A.w("NGMY DOC SHARE",null,C.aJe,null,null,null,null,null,null,null,null,null)
D.eKH=new A.w("Show this to sender",null,C.kb,null,null,null,null,null,null,null,null,null)
D.eLD=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.ePR=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eQ9=new A.w("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eR6=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eRw=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eU2=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eWC=new A.w("Send to their Doc Share",null,C.mS,null,null,null,null,null,null,null,null,null)
D.eWV=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eXc=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eXG=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eXK=new A.w("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eY6=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eJ,null,null,null,null,null,null,null,null,null)
D.f_Y=new A.w("Share files & videos\nwith a scan.",null,C.aJf,null,null,null,null,null,null,null,null,null)
D.f0f=new A.w("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.f9P=new B.WN(null)
D.a52=new B.a9K(0,"docShare")
D.a53=new B.a9K(1,"gate")
D.Rt=new B.a9K(2,"gateNoIndividual")})();(function staticFields(){$.aKk=null
$.eWK=function(){var x=y.N
return A.R(x,x)}()
$.EF=A.R(y.N,y.D)
$.adG=A.R(y.N,A.aA("lf"))
$.OX=A.R(y.N,y.D)
$.eXg=A.R(y.N,A.aA("a9r"))
$.c2q=A.R(y.S,A.aA("br2"))
$.fPP=1
$.hBf=null
$.hBe=null
$.htc=null
$.fFi=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hTu","h5A",()=>new B.cdk())
x($,"hRp","fIL",()=>C.a.q(A.bp(A.bp(A.bp(A.Fb(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["HVoidVbTFq/hl8m+lwCYd6zTjuI="]=a.current})($__dart_deferred_initializers__);