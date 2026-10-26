((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cd5:function cd5(){},
hms(d){var x=null,w=new B.b0b(d,D.dRh,new A.oR(x,x,y.c6),new A.oR(x,x,y.B))
w.brM(d)
return w},
b0b:function b0b(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cd0:function cd0(d){this.a=d},
cd1:function cd1(d){this.a=d},
cd2:function cd2(d){this.a=d},
cd_:function cd_(d){this.a=d},
cd3:function cd3(d){this.a=d},
hmt(d,e){var x=y.N
x=new B.b0c(d,e,A.R(x,y.e),A.R(x,y.z))
x.brN(d,e)
return x},
b0c:function b0c(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cd6:function cd6(d){this.a=d},
cd7:function cd7(d){this.a=d},
cd8:function cd8(d){this.a=d},
cd9:function cd9(d){this.a=d},
cda:function cda(d){this.a=d},
cdb:function cdb(d){this.a=d},
cdc:function cdc(d){this.a=d},
cdd:function cdd(d){this.a=d},
fEy(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xl.Kl(x,"ngmy_doc_share_v1",new B.f2Z(),1)},
hsW(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.AY(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
Pb(d,e){return B.hHq(d,e)},
hHq(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKd
x=7
return A.b(o==null?$.aKd=B.fEy():o,$async$Pb)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mg(s,"blobs","readwrite")
C.im.lL(J.me(q,"blobs"),r,d)
x=8
return A.b(J.oZ(q),$async$Pb)
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
return A.i($async$Pb,w)},
Pa(d){return B.hHp(d)},
hHp(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKd
x=7
return A.b(o==null?$.aKd=B.fEy():o,$async$Pa)
case 7:s=f
r=J.mg(s,"blobs","readonly")
x=8
return A.b(C.im.yu(J.me(r,"blobs"),d),$async$Pa)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$Pa)
case 9:o=B.hsW(q)
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
return A.i($async$Pa,w)},
aeh(d){return B.hHo(d)},
hHo(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aeh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKd
x=7
return A.b(p==null?$.aKd=B.fEy():p,$async$aeh)
case 7:s=f
r=J.mg(s,"blobs","readwrite")
C.im.Ep(J.me(r,"blobs"),d)
x=8
return A.b(J.oZ(r),$async$aeh)
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
return A.i($async$aeh,w)},
f2Z:function f2Z(){},
hv7(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkj(w,v))}return u},
h2E(d,e){var x,w={},v=A.aSj("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fnH(w,v,e)
C.uI.xm(v,"change",new B.fnJ(w,v,!1))
C.uI.xm(v,"cancel",new B.fnI(w))
$.eI.lU()
v.click()
A.bK(C.abF,new B.fnG(w),y.H)},
fnH:function fnH(d,e,f){this.a=d
this.b=e
this.c=f},
fnJ:function fnJ(d,e,f){this.a=d
this.b=e
this.c=f},
fnI:function fnI(d){this.a=d},
fnG:function fnG(d){this.a=d},
BH(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BH=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRJ()?3:4
break
case 3:x=5
return A.b(B.fYU(e,d,s,!0,!1,f,g,h,!1,i),$async$BH)
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
return A.b(B.eZy(s,d),$async$BH)
case 14:x=12
return A.b(r.fYU(q,p,o,n,m,l,k,j,a1,i),$async$BH)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cr(A.eH(new B.fnW(s,i,d,f,g,h),!1,null,y.H)),$async$BH)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cr(A.eH(new B.fnX(s,i,d,f,g,h),!1,null,y.H)),$async$BH)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BH,w)},
OP(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OP=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVY(e),$async$OP)
case 3:u=k
x=4
return A.b(B.amg(d,e,!1),$async$OP)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GM(e,d),$async$OP)
case 7:if(k){v=D.a58
x=1
break}x=8
return A.b(B.SI(e),$async$OP)
case 8:v=t?D.RC:D.a59
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aVW(d,e)){v=D.a58
x=1
break}x=11
return A.b(B.SI(e),$async$OP)
case 11:v=t?D.RC:D.a59
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fzP(d,e)){v=D.a58
x=1
break}x=14
return A.b(B.SI(e),$async$OP)
case 14:v=D.RC
x=1
break
case 13:v=t?D.RC:D.a59
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OP,w)},
eZy(d,e){var x=0,w=A.j(y.y),v
var $async$eZy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aVW(e,d)){v=!1
x=1
break}x=3
return A.b(B.aVY(d),$async$eZy)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZy,w)},
fYU(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cr(A.eH(new B.f4h(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fU9(d,e,f,g,h,i,j){return new B.WQ(e,j,d,g,h,i,f,null)},
f6d(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f6d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6g(A.K(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f6d)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6d,w)},
f6I(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f6I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6K(A.K(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f6I)
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
return A.i($async$f6I,w)},
fEG(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bl(x,new A.b1(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fgj(d,e){var x=0,w=A.j(y.H),v
var $async$fgj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SI(e),$async$fgj)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eB()
case 1:return A.h(v,w)}})
return A.i($async$fgj,w)},
fnW:function fnW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnX:function fnX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9H:function a9H(d,e){this.a=d
this.b=e},
f4h:function f4h(d,e,f,g,h,i,j,k,l){var _=this
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
aw6:function aw6(){this.c=this.a=this.d=null},
cWf:function cWf(d,e){this.a=d
this.b=e},
cWc:function cWc(d){this.a=d},
cWe:function cWe(d){this.a=d},
cWd:function cWd(d){this.a=d},
cWh:function cWh(){},
cWg:function cWg(d){this.a=d},
aa8:function aa8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayA:function ayA(d,e){this.a=d
this.b=e},
aBH:function aBH(d,e,f){this.a=d
this.b=e
this.c=f},
f6g:function f6g(d,e,f){this.a=d
this.b=e
this.c=f},
f6e:function f6e(d){this.a=d},
f6f:function f6f(d,e,f){this.a=d
this.b=e
this.c=f},
f6K:function f6K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6J:function f6J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1Q(d,e,f,g,h){return B.hht(d,e,f,g,h)},
hht(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c1Q=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gG(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.di(d,new B.c1R(s,e,h,g,f,q),y.g),y.l),$async$c1Q)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1Q,w)},
aVT(d,e,f,g,h){return B.hhu(d,e,f,g,h)},
hhu(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVT=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ars("GET",d)
o=A.fwj()
if(o==null)o=new A.JX(A.a([],y.W))
x=7
return A.b(o.eK(0,s).cJ(0,C.Do),$async$aVT)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ba(),$async$aVT)
case 8:q=j
if(J.aa(q)===0){v=null
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
return A.i($async$aVT,w)},
aVS(d){return B.hhr(d)},
hhr(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ut(d,null).cJ(0,C.ng),$async$aVS)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aC(0,A.io(A.im(p.e)).c4(0,p.w),null)
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
return A.i($async$aVS,w)},
c1P(d){return B.hhs(d)},
hhs(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ut(d,null).cJ(0,C.oV),$async$c1P)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.io(A.im(q.e)).c4(0,q.w)
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
return A.i($async$c1P,w)},
c1R:function c1R(d,e,f,g,h,i){var _=this
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
hhz(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GK(C.a.aU(u,v.length))}return null},
hhA(d){var x=B.GK(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hhv(){var x,w=$.oX(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.aG(10)
return C.d.fL(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aG(24)]},
a4u(d){return B.hhw(d)},
hhw(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bD),$async$a4u)
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
return A.i($async$a4u,w)},
a4v(d,e){return B.hhx(d,e)},
hhx(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4v=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hs(d,e,!1,!1,C.cy,null),$async$a4v)
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
return A.i($async$a4v,w)},
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
return A.b(B.a4w(r),$async$Am)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4u("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Am)
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
break}m=B.hhv()
x=14
return A.b(B.a4w(m),$async$Am)
case 14:if(f!=null){x=12
break}l=new A.N(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4v("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Am)
case 15:k=f
x=16
return A.b(B.a4v("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Am)
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
a4w(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GK(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4u("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4w)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4w,w)},
a4x(d,e,f,g){return B.hhB(d,e,f,g)},
hhB(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4x=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GK(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4w(r),$async$a4x)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c1X())>1048576||g.be(d,new B.c1Y())){v=B.D4(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4I("myCode",d,a0),$async$a4x)
case 4:u=a3
try{t=C.Q.aC(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ch(s)||J.aa(s)!==g.gG(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D4(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aW0(u,g.gG(d),a0),$async$a4x)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oX().aG(9999)
k=n.b
j=g.gG(d)
i=y.N
h=g.di(d,new B.c1Z(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aVU(A.D(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4x)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gG(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4x,w)},
D4(d,e,f,g,h){return B.hhy(d,e,f,g,h)},
hhy(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D4=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$D4)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c1T())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oX().aG(9999)
h=Date.now()
g=""+1000*h+"_"+C.cA.aG(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
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
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oq(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a7Z(a1.a,a4,"media",a1.d,a2).w3(m,n,new A.Cr(!0,q.c)),$async$D4)
case 12:J.ci(r,m);++o
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
return A.b(B.aMB(r),$async$D4)
case 16:v=!1
x=1
break
case 15:f.push(A.D(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gG(a6)
a1=l.di(a6,new B.c1U(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aVU(A.D(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D4)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMB(r),$async$D4)
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
aVU(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aVU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4u(t),$async$aVU)
case 3:s=g
r=y.aL.a(J.q(s==null?A.D(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c1S(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4v(t,A.D(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVU,w)},
Lt(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lt=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4u("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lt)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ch(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aVV(k,a0),$async$Lt)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aW_(h),$async$Lt)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SP(g,a0),$async$Lt)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("F.E")
e=A.z(new A.a5(r,new B.c1V(),q),n)
d=A.z(new A.a5(r,new B.c1W(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a4v("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.D(["deliveries",q],p,o)),$async$Lt)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lt,w)},
aVV(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aVV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ch(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
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
j=o==null?null:C.k.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hL8(k,j)
C.d.v(s,i)
x=5
return A.b(B.BF(l,m,"Received via My Code",t,e,i),$async$aVV)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMB(s),$async$aVV)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVV,w)},
c1X:function c1X(){},
c1Y:function c1Y(){},
c1Z:function c1Z(){},
c1T:function c1T(){},
c1U:function c1U(){},
c1S:function c1S(){},
c1V:function c1V(){},
c1W:function c1W(){},
fnT(d,e){var x=0,w=A.j(y.H)
var $async$fnT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cr(A.eH(new B.fnU(e),!1,null,y.H)),$async$fnT)
case 2:return A.h(null,w)}})
return A.i($async$fnT,w)},
byL(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cr(A.eH(new B.fnV(g,e,f),!1,null,y.y)),$async$byL)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byL,w)},
fnU:function fnU(d){this.a=d},
fnV:function fnV(d,e,f){this.a=d
this.b=e
this.c=f},
SF:function SF(d,e){this.c=d
this.a=e},
azX:function azX(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dFH:function dFH(d,e){this.a=d
this.b=e},
SJ:function SJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA_:function aA_(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dGQ:function dGQ(d){this.a=d},
dGR:function dGR(d){this.a=d},
dGS:function dGS(d){this.a=d},
dGP:function dGP(d,e){this.a=d
this.b=e},
dGT:function dGT(d){this.a=d},
dGU:function dGU(d){this.a=d},
dGV:function dGV(d,e){this.a=d
this.b=e},
dGW:function dGW(d,e){this.a=d
this.b=e},
dGX:function dGX(d,e){this.a=d
this.b=e},
dGY:function dGY(d){this.a=d},
dH0:function dH0(){},
dGZ:function dGZ(d){this.a=d},
dH_:function dH_(d,e){this.a=d
this.b=e},
beG:function beG(){},
SG:function SG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azY:function azY(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dFI:function dFI(d){this.a=d},
dFJ:function dFJ(d){this.a=d},
fzQ(d){var x=d.hC
if(x>=0)return C.o.M(x)
return 10},
hhD(d){var x=d.k9
if(x>=0)return x
return 4.99},
hhC(d){var x=d.kR,w=y.N
w=x.iC(x,new B.c20(),w,w)
return w},
fPk(d){var x=d.ka,w=y.N
w=x.iC(x,new B.c21(),w,w)
return w},
aVY(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aVY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aVY)
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
return A.i($async$aVY,w)},
a4z(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$a4z)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4z,w)},
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
fzP(d,e){var x,w,v
if(B.hhD(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hhC(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.c9(new A.N(Date.now(),0,!1))},
aVW(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fPk(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.c9(new A.N(Date.now(),0,!1))},
fPl(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fPk(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.c9(new A.N(Date.now(),0,!1))?v:new A.N(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amh(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amh)
case 7:s=f
r=A.t(p)
r=A.eX(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amh,w)},
ami(d){var x=0,w=A.j(y.H),v,u,t
var $async$ami=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amh(d),$async$ami)
case 3:u=f
x=5
return A.b(A.aw(),$async$ami)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$ami)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ami,w)},
amg(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fzQ(d)
if(u<=0){v=!1
x=1
break}if(B.fzP(d,e)){v=!1
x=1
break}x=3
return A.b(B.amh(e),$async$amg)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amg,w)},
aVX(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aVX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GM(e,d),$async$aVX)
case 3:if(g){v=-1
x=1
break}u=B.fzQ(d)
if(u<=0){v=-1
x=1
break}if(B.fzP(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amh(e),$async$aVX)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVX,w)},
c23(d,e,f){var x=0,w=A.j(y.y),v
var $async$c23=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GM(e,d),$async$c23)
case 3:if(h){v=!1
x=1
break}v=B.amg(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c23,w)},
c22(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c22=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c23(d,u,i.gRJ()),$async$c22)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c22,w)},
a4y(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4y=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRJ()){v=!0
x=1
break}if(B.aVW(d,u)){v=!0
x=1
break}x=5
return A.b(A.kZ(u,C.Pe),$async$a4y)
case 5:x=k?3:4
break
case 3:B.fPl(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4y)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kD(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Pe,"Doc Share for Organizations"),$async$a4y)
case 7:if(!k){v=!1
x=1
break}B.fPl(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4y)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4y,w)},
c20:function c20(){},
c21:function c21(){},
foo(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$foo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$foo)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eWk.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hC([r],e.c))
s.toString
$.eWk.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foo,w)},
hNf(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eWk.bl($.eWk,new B.foq(d))},
foq:function foq(d){this.a=d},
eXF(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eXF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aI(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],f))
s.toString
u=A.mH(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.jd,null,y.H),$async$eXF)
case 3:C.yz.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lU()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eXF,w)},
ada(d,e,f){var x=0,w=A.j(y.H),v
var $async$ada=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eWR.m(0,d,new B.a9o(A.bi(e,!0,v)))
x=3
return A.b(A.aw(),$async$ada)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.D(["parts",e,"size",f],v,y.C),null)),$async$ada)
case 2:return A.h(null,w)}})
return A.i($async$ada,w)},
ad4(d){return B.hwP(d)},
hwP(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ad4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eWR.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ad4)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aC(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b4(s,new B.f0b(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.a9o(r)
$.eWR.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ad4,w)},
OF(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EF.m(0,d,u)
x=3
return A.b(B.Pb(d,u),$async$OF)
case 3:t=g
if(!t)$.ak.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OF,w)},
aKx(d){return B.hwN(d)},
hwN(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EF.h(0,d)
if(n!=null&&!C.aE.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pa(d),$async$aKx)
case 3:p=f
if(p!=null&&!C.aE.gah(p)){$.EF.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKx)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aE(r)
x=!J.ch(q)?9:10
break
case 9:B.OF(d,q)
x=11
return A.b(J.hB(s,d),$async$aKx)
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
return A.i($async$aKx,w)},
htg(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.cl(J.eP(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.cl(A.AY(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
return A.f7(null,y.K)},
a_e(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bM(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.f4t(r,t),!1,s)
A.fB(r,"error",new B.f4u(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.JC,new B.f4v())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_e,w)},
aKR(d,e,f){return B.hz0(d,e,f)},
hz0(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKR=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_e(i),$async$aKR)
case 10:p=a0
if(p==null||p.length===0){$.ak.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Pb(o,p),$async$aKR)
case 11:n=a0
if(!n){$.ak.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.ada(k,j,s),$async$aKR)
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
return A.i($async$aKR,w)},
aKQ(d,e,f){return B.hz_(d,e,f)},
hz_(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKQ=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKR(d,e,f),$async$aKQ)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_e(f),$async$aKQ)
case 10:r=h
if(r==null||r.length===0){$.ak.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EF.m(0,s,r)
$.OX.m(0,s,r)
x=11
return A.b(B.OF(s,r),$async$aKQ)
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
return A.i($async$aKQ,w)},
An(d,e,f,g,h,i){return B.hhM(d,e,f,g,h,i)},
hhM(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$An=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cA.aG(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j8(p,q,o,n,new A.N(Date.now(),0,!1).a4().aa(),a0,f,B.aW3(),null)
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
return A.b(r.an("String",s,C.cM.gcq().aE(d)),$async$An)
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
return A.b(B.zr(e),$async$An)
case 12:j=a2
J.ci(j,m)
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
m=""+1000*n+"_"+C.cA.aG(99999)
n=p.b
l=o.type
l.toString
k=B.fPn(n,null,l)
l=o.size
l.toString
j=new A.N(Date.now(),0,!1).a4().aa()
i=new B.j8(m,n,k,l,j,"From folder",null,B.aW3(),null)
$.adD.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_e(o),$async$SK)
case 7:g=a1
x=g!=null&&!C.aE.gah(g)?8:10
break
case 8:$.EF.m(0,h,g)
$.OX.m(0,h,g)
B.OF(h,g)
x=9
break
case 10:x=11
return A.b(B.aKQ(d,m,o),$async$SK)
case 11:case 9:r.H(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
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
fzU(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fzU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fPn(r,C.d.gai(r.split(".")),null)
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
return A.i($async$fzU,w)},
GN(d,e,f,g,h,i){return B.hhL(d,e,f,g,h,i)},
hhL(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GN=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cA.aG(99999)
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
if(J.ch(m)){x=6
break}J.fT(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PI(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kn(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pb(k,l),$async$GN)
case 11:J.ci(q,k);++p
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
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pb(k,new Uint8Array(A.cl(n))),$async$GN)
case 15:J.ci(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ada(r,q,g),$async$GN)
case 16:f=new B.j8(i,a1,a0,g,new A.N(Date.now(),0,!1).a4().aa(),a2,null,B.aW3(),null)
x=17
return A.b(B.zr(d),$async$GN)
case 17:e=a6
J.ci(e,f)
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
t=$.adD.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_e(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ad4(s),$async$SM)
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
case 7:u.length===q||(0,A.J)(u),++o
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
fPn(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qN(d,e){return B.hhN(d,e)},
hhN(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OX.h(0,f)
if(e==null)e=$.EF.h(0,f)
if(e!=null&&!C.aE.gah(e)){v=e
x=1
break}s=$.adD.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_e(s),$async$qN)
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
$.ak.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ad4(f),$async$qN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auV(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pa(g[l]),$async$qN)
case 16:k=a3
if(k!=null&&!C.aE.gah(k))n.H(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.akO()
if(!C.aE.gah(r)){$.EF.m(0,f,r)
$.OX.m(0,f,r)
v=r
x=1
break}$.ak.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKx(f),$async$qN)
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
hhQ(d){var x,w,v=$.adD.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hhR(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hC([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hhO(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amo(d,e,f,g,h){return B.hhP(d,e,f,g,h)},
hhP(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amo=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adD.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_e(s),$async$amo)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qN(g,e),$async$amo)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eM().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w3(h,r,new A.Cr(!0,e.c)),$async$amo)
case 12:f.$2(J.aa(r),J.aa(r))
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
return A.i($async$amo,w)},
fPp(d,e,f,g,h){var x,w,v,u,t=$.fPo
$.fPo=t+1
x=Date.now()
w=""+1000*x+"_"+C.cA.aG(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2e.m(0,t,new B.bqV(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auV(u)))
return t},
fzV(d){var x=0,w=A.j(y.H)
var $async$fzV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fzV,w)},
GO(d,e){var $async$GO=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adD.h(0,h)
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
return A.pz(B.SM(d,e,p,o<q?o:q),$async$GO,w)
case 8:n=a1
x=n!=null&&!C.aE.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pz(A.Ee(n),$async$GO,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pz(B.ad4("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GO,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pz(B.Pa(h[l]),$async$GO,w)
case 18:k=a1
x=k!=null&&!C.aE.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pz(A.Ee(k),$async$GO,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pz(B.qN(d,e),$async$GO,w)
case 22:j=a1
x=j!=null&&!C.aE.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pz(A.Ee(A.AY(j,p,o<i?o:i)),$async$GO,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pz(null,0,w)
case 2:return A.pz(t.at(-1),1,w)}})
var x=0,w=A.fXO($async$GO,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.fZB(w)},
aW5(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aW5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2e.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.H(0,e)
case 3:if(!(u.gG(u)>=1048576)){x=4
break}x=5
return A.b(t.a20(),$async$aW5)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW5,w)},
SL(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2e.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a20(),$async$SL)
case 3:u=r.w
if(u.length===0||r.z<=0){$.ak.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ada(r.c,u,r.z),$async$SL)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.N(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aW3(),null)
u=r.a
x=5
return A.b(B.zr(u),$async$SL)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.EP(u,s),$async$SL)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
a4F(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2e.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aeh(u[s]),$async$a4F)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4F,w)},
c2g(d,e,f){var x=0,w=A.j(y.H)
var $async$c2g=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvT(d,e,f),$async$c2g)
case 2:return A.h(null,w)}})
return A.i($async$c2g,w)},
c2h(d,e,f){var x=0,w=A.j(y.H)
var $async$c2h=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvU(d,e,f),$async$c2h)
case 2:return A.h(null,w)}})
return A.i($async$c2h,w)},
D5(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zr(d),$async$D5)
case 2:p=g
J.n_(p,new B.c2f(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EF.W(0,v)
$.adD.W(0,e)
x=3
return A.b(B.ad4(v),$async$D5)
case 3:u=g
$.eWR.W(0,v)
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
return A.b(B.aeh(s[q]),$async$D5)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aeh(v),$async$D5)
case 13:x=14
return A.b(B.EP(d,p),$async$D5)
case 14:return A.h(null,w)}})
return A.i($async$D5,w)},
aW4(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aW4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qN(d,e),$async$aW4)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eXF(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW4,w)},
zr(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$zr)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aC(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f4w(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
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
t=J.b4(e,new B.f8p(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$EP)
case 3:return A.h(null,w)}})
return A.i($async$EP,w)},
bvT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bvT)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.f3a(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azM(f))
x=4
return A.b(B.EP(d,u),$async$bvT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvT,w)},
bvU(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bvU)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.f3b(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cyp(f))
x=4
return A.b(B.EP(d,u),$async$bvU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvU,w)},
a9o:function a9o(d){this.a=d},
f0b:function f0b(){},
f4t:function f4t(d,e){this.a=d
this.b=e},
f4u:function f4u(d){this.a=d},
f4v:function f4v(){},
c2f:function c2f(d){this.a=d},
bqV:function bqV(d,e,f,g,h,i,j,k,l){var _=this
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
f4w:function f4w(){},
f8p:function f8p(){},
f3a:function f3a(d){this.a=d},
f3b:function f3b(d){this.a=d},
a4G(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.be(d,new B.c2k())?3:4
break
case 3:x=5
return A.b(B.aW6(d,e),$async$a4G)
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
return A.b(B.aW1(s),$async$a4G)
case 10:case 9:if(g){v=new A.O2(1,D.OS,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SN(d,e),$async$a4G)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SS(!0,!0,d,e),$async$a4G)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Lv(d,D.xR,e,t)
v=new A.O2(p,D.xR,t)
x=1
break}v=B.c2j(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4G,w)},
SN(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4I(null,d,e),$async$SN)
case 3:p=g
try{u=C.Q.aC(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ch(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aW0(p,d.length,e),$async$SN)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2h(e,C.d.gI(d).a,r.b),$async$SN)
case 7:case 6:q=r.a
x=8
return A.b(B.Lv(d,D.OS,e,q),$async$SN)
case 8:v=new A.O2(d.length,D.OS,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
SO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lZ(D.m3)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4H(d,e),$async$SO)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c2c(s,d,e,t),$async$SO)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aW1(t),$async$SO)
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
return A.b(B.fzO(),$async$SQ)
case 2:x=3
return A.b(B.aMS(),$async$SQ)
case 3:return A.h(null,w)}})
return A.i($async$SQ,w)},
a4H(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aW3()
x=3
return A.b(B.c2g(e,d.a,u),$async$a4H)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
Lv(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OS&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aU(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4H(p,f),$async$Lv)
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
return A.b(B.c2b(o,p,u,f),$async$Lv)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c2c(o,p,f,t),$async$Lv)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c2a(o,u,p,f),$async$Lv)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lv,w)},
aW6(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aW6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2i(e,d),$async$aW6)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SS(!1,!0,d,e),$async$aW6)
case 4:u=g
if(u!=null){t=u.b
v=new A.O2(u.a,D.xR,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW6,w)},
c2i(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SM(d,s,0,1),$async$c2i)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.J)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2i,w)},
c2j(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4I(null,d,e),$async$c2j)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fPm(u)
if(t.length>800){v=null
x=1
break}v=new A.O2(d.length,D.ddF,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2j,w)},
amp(d,e,f){return B.hhU(d,e,f)},
hhU(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amp=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.mf(g,1)
x=B.fzT(g)?3:4
break
case 3:x=5
return A.b(B.c2d(g),$async$amp)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cS(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mf(g,13))
try{k=B.D6(d,a0,s)
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
return A.b(B.aW_(q),$async$amp)
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
$.ak.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fzS(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SP(n,a0)
v=k
x=1
break}catch(a1){m=A.a4(a1)
$.ak.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cS(g,"N2|")){v=B.GP(C.a.i(J.mf(g,3)),d,a0)
x=1
break}if(J.cS(g,"NGMYDOCSYNC2|")){v=B.GP(C.a.i(J.mf(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GP(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SP(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amp,w)},
GP(d,e,f){return B.hhS(d,e,f)},
hhS(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GP=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aU(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aU(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cq(A.t(s)+"/manifest.json",0,null)
q=A.cq(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVS(r),$async$GP)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVS(A.cq(s,0,null)),$async$GP)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c1Q(o,r,a1,n,a2),$async$GP)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.c1P(q),$async$GP)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SP(l,a2),$async$GP)
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
return A.i($async$GP,w)},
a4I(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4I=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qN(f,r),$async$a4I)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.D(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcq().aE(q)],t,s))
x=3
break
case 4:u=A.R(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.N(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.aj(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4I,w)},
SP(d,e){return B.hhT(d,e)},
hhT(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SP=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aC(0,a2,null)
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
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cw.aE(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.An(i,a3,d,k,l,o),$async$SP)
case 9:h=a5
if(h!=null)J.ci(n,h)
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
return A.i($async$SP,w)},
Lu:function Lu(d,e){this.a=d
this.b=e},
c2k:function c2k(){},
ZP(d){var x=A.K(d).ax.a===C.H,w=x?D.a9B:D.a7Y,v=x?D.aaY:C.c,u=x?C.aO:C.M,t=x?C.bP:C.aj,s=x?D.a8U:C.aJ
return new A.aCT([w,s,v,u,t,x?C.eT:C.bQ])},
h3l(d,e){var x=e?C.w.j(0.72):C.aV
return A.cg(null,x,!0,null,new B.fsm(e),d,null,!0,!0,y.N)},
c2_(d,e,f,g,h,i,j,k,l){return new B.SH(e,l,d,f,k,j,g,h,i,null)},
WS(d,e,f,g,h,i,j){return new B.b9p(g,h,j,e,i,d,f,null)},
fsm:function fsm(d){this.a=d},
WP:function WP(d,e){this.c=d
this.a=e},
aw5:function aw5(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cWb:function cWb(d){this.a=d},
cW9:function cW9(d){this.a=d},
cWa:function cWa(d){this.a=d},
bqA:function bqA(){},
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
azZ:function azZ(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dGO:function dGO(d){this.a=d},
dGb:function dGb(d,e){this.a=d
this.b=e},
dGc:function dGc(d,e){this.a=d
this.b=e},
dFL:function dFL(d,e,f){this.a=d
this.b=e
this.c=f},
dFK:function dFK(d){this.a=d},
dFM:function dFM(d,e){this.a=d
this.b=e},
dFR:function dFR(d,e,f){this.a=d
this.b=e
this.c=f},
dFQ:function dFQ(d){this.a=d},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGD:function dGD(d){this.a=d},
dG8:function dG8(d,e,f){this.a=d
this.b=e
this.c=f},
dG5:function dG5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dFP:function dFP(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGf:function dGf(){},
dFV:function dFV(d){this.a=d},
dGz:function dGz(d,e){this.a=d
this.b=e},
dGA:function dGA(d,e){this.a=d
this.b=e},
dGB:function dGB(d,e){this.a=d
this.b=e},
dG6:function dG6(d,e){this.a=d
this.b=e},
dG7:function dG7(d,e){this.a=d
this.b=e},
dGs:function dGs(d,e){this.a=d
this.b=e},
dGo:function dGo(d){this.a=d},
dGn:function dGn(d){this.a=d},
dGp:function dGp(){},
dGq:function dGq(){},
dGr:function dGr(d,e){this.a=d
this.b=e},
dGt:function dGt(){},
dGu:function dGu(d){this.a=d},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGh:function dGh(d){this.a=d},
dGi:function dGi(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGl:function dGl(d){this.a=d},
dFS:function dFS(){},
dFT:function dFT(d){this.a=d},
dFU:function dFU(d,e){this.a=d
this.b=e},
dFO:function dFO(d,e){this.a=d
this.b=e},
dFN:function dFN(d,e,f){this.a=d
this.b=e
this.c=f},
dG9:function dG9(d){this.a=d},
dGa:function dGa(d,e,f){this.a=d
this.b=e
this.c=f},
dG3:function dG3(d,e){this.a=d
this.b=e},
dG_:function dG_(d){this.a=d},
dFX:function dFX(d,e,f){this.a=d
this.b=e
this.c=f},
dG0:function dG0(d){this.a=d},
dG1:function dG1(d){this.a=d},
dG2:function dG2(){},
dG4:function dG4(d,e){this.a=d
this.b=e},
dFY:function dFY(d){this.a=d},
dFW:function dFW(d,e,f){this.a=d
this.b=e
this.c=f},
dFZ:function dFZ(){},
dGe:function dGe(d){this.a=d},
dGd:function dGd(d,e){this.a=d
this.b=e},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGv:function dGv(d){this.a=d},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGx:function dGx(d){this.a=d},
dGL:function dGL(d){this.a=d},
dGJ:function dGJ(d){this.a=d},
dGK:function dGK(d){this.a=d},
dGM:function dGM(){},
dGN:function dGN(d,e){this.a=d
this.b=e},
dGF:function dGF(d,e){this.a=d
this.b=e},
dGG:function dGG(d,e,f){this.a=d
this.b=e
this.c=f},
dGE:function dGE(d,e,f){this.a=d
this.b=e
this.c=f},
dGH:function dGH(d,e){this.a=d
this.b=e},
dGI:function dGI(d,e){this.a=d
this.b=e},
aw2:function aw2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9o:function b9o(d,e,f){this.c=d
this.d=e
this.a=f},
cW7:function cW7(){},
cW8:function cW8(){},
a9I:function a9I(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWv:function cWv(){},
cWu:function cWu(d){this.a=d},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
aw7:function aw7(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWr:function cWr(d){this.a=d},
cWs:function cWs(d,e,f){this.a=d
this.b=e
this.c=f},
cWt:function cWt(d,e){this.a=d
this.b=e},
cWp:function cWp(d,e){this.a=d
this.b=e},
cWn:function cWn(d){this.a=d},
cWl:function cWl(d){this.a=d},
cWi:function cWi(d){this.a=d},
cWo:function cWo(d){this.a=d},
cWk:function cWk(d){this.a=d},
cWq:function cWq(d){this.a=d},
cWm:function cWm(d){this.a=d},
cWj:function cWj(d){this.a=d},
WO:function WO(d,e,f){this.c=d
this.d=e
this.a=f},
aw4:function aw4(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cW4:function cW4(d){this.a=d},
cW3:function cW3(d,e){this.a=d
this.b=e},
cW5:function cW5(d){this.a=d},
cW2:function cW2(d,e){this.a=d
this.b=e},
cW6:function cW6(d){this.a=d},
cW1:function cW1(d,e){this.a=d
this.b=e},
cVY:function cVY(d){this.a=d},
cVZ:function cVZ(d){this.a=d},
cW_:function cW_(d,e){this.a=d
this.b=e},
cW0:function cW0(d){this.a=d},
NF:function NF(d,e,f){this.c=d
this.d=e
this.a=f},
awa:function awa(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cWI:function cWI(d){this.a=d},
cWJ:function cWJ(d){this.a=d},
cWK:function cWK(d){this.a=d},
cWL:function cWL(d){this.a=d},
cWM:function cWM(d,e){this.a=d
this.b=e},
cWN:function cWN(d){this.a=d},
cWP:function cWP(d){this.a=d},
cWO:function cWO(d){this.a=d},
WT:function WT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aw8:function aw8(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cWE:function cWE(d,e){this.a=d
this.b=e},
cWF:function cWF(d,e){this.a=d
this.b=e},
cWw:function cWw(d,e,f){this.a=d
this.b=e
this.c=f},
cWx:function cWx(d){this.a=d},
cWy:function cWy(){},
cWD:function cWD(){},
cWz:function cWz(d,e){this.a=d
this.b=e},
cWA:function cWA(d,e){this.a=d
this.b=e},
cWB:function cWB(d,e){this.a=d
this.b=e},
cWC:function cWC(d,e){this.a=d
this.b=e},
a9G:function a9G(d,e){this.c=d
this.a=e},
cVX:function cVX(d){this.a=d},
WN:function WN(d){this.a=d},
aw3:function aw3(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WU:function WU(d,e){this.c=d
this.a=e},
aw9:function aw9(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cWH:function cWH(d){this.a=d},
cWG:function cWG(d){this.a=d},
b9p:function b9p(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hhV(){var x,w=$.oX(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aG(32)]
return"VT"+C.d.fL(v)},
Lw(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lw=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$Lw)
case 3:if(!e){v=A.R(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bD),$async$Lw)
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
$.ak.$1("[doc share video cloud] load: "+A.t(q))
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
a4J(d){return B.hhW(d)},
hhW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4J)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_video_relay_v1",A.D(["relays",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4J)
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
return A.i($async$a4J,w)},
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
t.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4J(s),$async$SR)
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
break}if(d)u=A.bi(f,!0,y.U)
else{t=A.T(f).k("a5<1>")
u=A.z(new A.a5(f,new B.c2m(),t),t.k("F.E"))}if(u.length===0){v=null
x=1
break}s=B.hhV()
t=A.T(u).k("I<1,a0<n,aC>>")
r=A.z(new A.I(u,new B.c2n(s),t),t.k("ai.E"))
x=6
return A.b(B.Lw(),$async$SS)
case 6:q=i
J.aE(q,s,A.D(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4J(q),$async$SS)
case 7:x=8
return A.b(B.a4K(r,u,g,s),$async$SS)
case 8:v=new A.bkL(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SS,w)},
amq(d){var x=0,w=A.j(y.y),v,u,t
var $async$amq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lw(),$async$amq)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amq,w)},
c2o(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lw(),$async$c2o)
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
return A.i($async$c2o,w)},
a4K(d,e,f,g){return B.hhX(d,e,f,g)},
hhX(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4K=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.amo("media",r,new B.c2l(s,e,g),f,q),$async$a4K)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SR(g,A.D(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4K)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SR(g,A.D(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4K)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
$.ak.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SR(g,A.D(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4K)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4K,w)},
D6(d,e,f){return B.hhY(d,e,f)},
hhY(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.amq(b3),$async$D6)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kV,null,g),$async$D6)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amq(b3),$async$D6)
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
a3=a2==null?null:C.k.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ch(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gG(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
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
if(J.aa(m)===0){x=11
break}u=14
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oq(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a7Z(a8.a,b0,"media",a8.d,a9).Bu(m)
k=A.cq(l,0,null)
x=17
return A.b(B.aVT(k,n,o,s,b7),$async$D6)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
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
case 12:if(J.aa(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.eM().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oq(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a7Z(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D6)
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
a0.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4J(e),$async$D6)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D6,w)},
c2m:function c2m(){},
c2n:function c2n(d){this.a=d},
c2l:function c2l(d,e,f){this.a=d
this.b=e
this.c=f},
aMS(){var x=0,w=A.j(y.H),v,u
var $async$aMS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hsJ=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aMS)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aMS)
case 3:u=$.fES
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aMS)
case 4:$.fES=$.hAL=$.hAM=null
return A.h(null,w)}})
return A.i($async$aMS,w)},
f81(d){var x=0,w=A.j(y.H),v,u
var $async$f81=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2g){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f82(new A.bM(u,y.aY))
x=3
return A.b(u.i0(0,C.hr,new B.f83()),$async$f81)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f81,w)},
hAJ(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hhF(x):x},
fEW(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aU(t,13))
if(C.a.a_(u,"WR")){v=B.ams(u)
x=1
break}v=B.fzS(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEW,w)},
fEV(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aU(t,14))
if(C.a.a_(u,"WR")){v=B.amt(u)
x=1
break}v=B.fzS(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEV,w)},
fo9(d){var x=0,w=A.j(y.T),v
var $async$fo9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amt(d),$async$fo9)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fo9,w)},
bwK(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fEV(d),$async$bwK)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aC(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwK,w)},
eYt(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eYt=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SL(g)
x=1
break}if(d.gG(d)<=0){v=null
x=1
break}v=B.An(d.akO(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYt,w)},
ER(d,e,f){return B.hCY(d,e,f)},
hCY(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ER=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fEW(a1),$async$ER)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aC(0,e,null)
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
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aU(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h58().aA0(D.d1V,null),$async$ER)
case 4:l=d.fES=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auV(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f8w(f,k,new B.f8x(f,a2,k,j,a0,p),a2,j,a0,p,new A.bM(t,y.ch))
x=5
return A.b(l.a4R(0,new B.UY(r,"offer")),$async$ER)
case 5:d=l
x=7
return A.b(l.ahI(0),$async$ER)
case 7:x=6
return A.b(d.a4J(0,a4),$async$ER)
case 6:x=8
return A.b(B.f81(l),$async$ER)
case 8:x=9
return A.b(l.aly(),$async$ER)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hAJ(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.D(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amu(m,h),$async$ER)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fPm(h)
case 11:v=new A.bk3(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ER,w)},
f82:function f82(d){this.a=d},
f83:function f83(){},
f8x:function f8x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8w:function f8w(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f8v:function f8v(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hEK(d){switch(d){case"new":return D.dRi
case"checking":return D.dRj
case"connected":return D.dRl
case"completed":return D.dRk
case"failed":return D.dRn
case"disconnected":return D.dRo
case"closed":return D.aFG
case"count":return D.dRm}return D.aFG},
hEL(d){switch(d){case"new":return D.aFH
case"gathering":return D.dRp
case"complete":return D.a2g}return D.aFH},
hOI(d){switch(d){case"stable":return D.dRq
case"have-local-offer":return D.dRr
case"have-local-pranswer":return D.dRt
case"have-remote-offer":return D.dRs
case"have-remote-pranswer":return D.dRu
case"closed":return D.aFN}return D.aFN},
hN1(d){switch(d){case"new":return D.aFK
case"connecting":return D.aFL
case"connected":return D.aFM
case"closed":return D.a2h
case"disconnected":return D.aFJ
case"failed":return D.aFI}return D.a2h},
a6Y:function a6Y(d,e){this.a=d
this.b=e},
Mx:function Mx(d,e){this.a=d
this.b=e},
UX:function UX(d,e){this.a=d
this.b=e},
Mw:function Mw(d,e){this.a=d
this.b=e},
Dz:function Dz(d,e){this.a=d
this.b=e},
cd4:function cd4(){},
fBx(d){var x=new B.Dy()
x.a=d
x.b=!0
return x},
Dy:function Dy(){this.b=this.a=$},
a6X:function a6X(){},
aqD:function aqD(){},
UY:function UY(d,e){this.a=d
this.b=e},
fzO(){var x=0,w=A.j(y.H)
var $async$fzO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fzO,w)},
fzR(d,e,f){var x=0,w=A.j(y.T),v
var $async$fzR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lZ(D.m3))){v=null
x=1
break}v=B.foo(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzR,w)},
fPm(d){var x,w=F.a7u.a1L(C.dB.aE(d),null)
if(w.length===0){x=C.dB.aE(d)
return C.cM.gcq().aE(x)}return C.cM.gcq().aE(w)},
hhE(d){var x,w,v=C.cw.aE(d)
try{x=C.c0.c4(0,F.a7t.b7_(v,!1))
return x}catch(w){x=C.c0.c4(0,v)
return x}},
fzS(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hhE(C.a.aU(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aU(t,w.length)
try{v=C.c0.c4(0,C.cw.aE(x))
return v}catch(u){return x}}return null},
hhF(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aF(s,"\n")},
hhG(){var x,w=$.oX(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aG(32)]
return"DS"+C.d.fL(v)},
aVZ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aVZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bD),$async$aVZ)
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
return A.i($async$aVZ,w)},
c24(d,e){return B.hhH(d,e)},
hhH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c24=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c24)
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
return A.i($async$c24,w)},
aW1(d){var x=0,w=A.j(y.y),v,u,t
var $async$aW1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVZ(d),$async$aW1)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW1,w)},
aW0(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aW0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hhG()
r=C.a.i(f)
t=C.dB.aE(s)
x=3
return A.b(B.c24(u,A.D(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcq().aE(t),"usesRemaining",999999,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aW0)
case 3:if(!h){v=null
x=1
break}v=new A.YT("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW0,w)},
aW_(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aW_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aVZ(o),$async$aW_)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.c0.c4(0,C.cw.aE(u))
if(J.iK(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a4(n)
$.ak.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aW_,w)},
c25(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c25=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.bxF("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c25)
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
return A.i($async$c25,w)},
aW2(d){var x=0,w=A.j(y.h),v,u,t
var $async$aW2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GL(),$async$aW2)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW2,w)},
aml(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aml=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$aml)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aW2(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aml,w)},
amj(d,e){var x=0,w=A.j(y.H)
var $async$amj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amj)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amj)
case 2:return A.h(null,w)}})
return A.i($async$amj,w)},
a4B(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4B=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4B)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GL(),$async$a4B)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.D(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4A(s),$async$a4B)
case 5:x=6
return A.b(B.amj(f,u),$async$a4B)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
a4C(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4C=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4C)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GL(),$async$a4C)
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
return A.b(B.amj(g,q),$async$a4C)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4A(u),$async$a4C)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4C,w)},
a4D(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4D=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4D)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GL(),$async$a4D)
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
s=B.aVW(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aw(),$async$a4D)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.D(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.N(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4D)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4D,w)},
c26(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c26=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c26)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aC(0,r,null)
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
return A.i($async$c26,w)},
GM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c26(d),$async$GM)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aW2(t),$async$GM)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amk(d),$async$GM)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aVW(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amk(d),$async$GM)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GM,w)},
amk(d){var x=0,w=A.j(y.H)
var $async$amk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amk)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amk)
case 2:return A.h(null,w)}})
return A.i($async$amk,w)},
aW3(){var x,w=$.oX(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aG(32)]
return C.d.fL(v)},
a4E(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fzT(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c29(d){return B.hhJ(d)},
hhJ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c29=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4E(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bD),$async$c29)
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
return A.i($async$c29,w)},
amn(d,e){return B.hhK(d,e)},
hhK(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4E(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$amn)
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
return A.i($async$amn,w)},
c2b(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4E(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amn(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2b)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2b,w)},
c2a(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2a=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4E(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amn(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2a)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2a,w)},
c2c(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c2c=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4E(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amn(u,A.D(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2c,w)},
c2d(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c2d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fzT(d)){v=null
x=1
break}x=3
return A.b(B.c29(d),$async$c2d)
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
return A.i($async$c2d,w)},
a4L(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4L=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$a4L)
case 3:if(!e){v=A.R(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bD),$async$a4L)
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
$.ak.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.R(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4L,w)},
amr(d){return B.hhZ(d)},
hhZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bV(),$async$amr)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_webrtc_signal_v1",A.D(["signals",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amr)
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
return A.i($async$amr,w)},
ams(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ams=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bV(),$async$ams)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4L(),$async$ams)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.c0.c4(0,C.cw.aE(q))
if(J.iK(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.Z(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.N(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amr(s),$async$ams)
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
return A.i($async$ams,w)},
amu(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bV(),$async$amu)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4L(),$async$amu)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dR(A.Z(s,r,q),r,q)
r=C.dB.aE(C.a.i(e))
q.m(0,"answer",C.cM.gcq().aE(r))
q.m(0,"answerAt",new A.N(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amr(u),$async$amu)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amu,w)},
amt(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bV(),$async$amt)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4L(),$async$amt)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.c0.c4(0,C.cw.aE(u))
v=r
x=1
break}catch(n){t=A.a4(n)
$.ak.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amt,w)},
alu(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q1)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alu)
case 3:r=g
u=4
x=7
return A.b(r.he(C.fI),$async$alu)
case 7:q=g
o=q
o=o==null?null:J.f2(J.vY(o))
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
return A.i($async$alu,w)},
hL8(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fmO(d){return B.hLa(d)},
hLa(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fmO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Je(d,3600),$async$fmO)
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
return A.i($async$fmO,w)},
BF(d,e,f,g,h,i){var x=null
return B.hL7(d,e,f,g,h,i)},
hL7(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BF=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fPp(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fzV(r),$async$BF)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fmO(o),$async$BF)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4F(r),$async$BF)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIv)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JX(A.a([],g))
x=15
return A.b(d.eK(0,A.ars("GET",A.cq(n,0,null))).cJ(0,C.Do),$async$BF)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4F(r),$async$BF)
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
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aW5(r,k),$async$BF)
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
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
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
$.ak.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4F(r),$async$BF)
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
aMB(d){return B.hL9(d)},
hL9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMB)
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
return A.i($async$aMB,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[208]
H=c[101]
P=c[189]
E=c[180]
G=c[83]
Q=c[153]
R=c[102]
S=c[187]
I=c[213]
K=c[219]
B=a.updateHolder(c[21],B)
D=c[217]
T=c[152]
L=c[170]
U=c[62]
V=c[220]
W=c[68]
X=c[53]
M=c[82]
Y=c[218]
N=c[112]
B.cd5.prototype={
aA0(d,e){return this.czU(d,e)},
czU(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aA0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.D(["mandatory",A.R(t,t),"optional",A.a([A.D(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.k2(A.ct(t)))
t=J.k(u)
v=B.hmt(C.cM.gcq().aE(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aA0,w)}}
B.b0b.prototype={
brM(d){var x=this,w=x.w
w.onclose=A.h7(new B.cd0(x))
w.onopen=A.h7(new B.cd1(x))
w.onmessage=A.h7(new B.cd2(x))
w.onbufferedamountlow=A.h7(new B.cd3(x))},
gdh(d){return this.x},
ae5(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ae5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dy()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fBx(J.f2(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ae5)
case 8:v=t.fBx(s.akI(f,0,null))
x=1
break
case 7:case 4:v=B.fBx(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ae5,w)}}
B.b0c.prototype={
brN(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.cd6(x)))
w.addEventListener("icecandidate",A.h7(new B.cd7(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.cd8(x)))
w.onicegatheringstatechange=A.h7(new B.cd9(x))
w.addEventListener("signalingstatechange",A.h7(new B.cda(x)))
if(!$.fIk())w.addEventListener("connectionstatechange",A.h7(new B.cdb(x)))
w.addEventListener("negotiationneeded",A.h7(new B.cdc(x)))
w.addEventListener("track",A.h7(new B.cdd(x)))},
ahI(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k2(A.ct(A.R(y.N,y.z)))),y.aQ),$async$ahI)
case 3:t=f
v=new B.UY(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahI,w)},
a4J(d,e){return this.bhr(0,e)},
bhr(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
a4R(d,e){return this.bhH(0,e)},
bhH(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
aly(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aly=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.i($async$aly,w)},
bx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx,w)}}
B.a9H.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WQ.prototype={
S(){return new B.aw6()},
gd6(){return this.c}}
B.aw6.prototype={
Z(){this.a0()
this.aaW()},
aaW(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVX(u.e,u.c),$async$aaW)
case 2:t=e
if(v.c!=null)v.n(new B.cWf(v,t))
return A.h(null,w)}})
return A.i($async$aaW,w)},
Ol(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ol=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amg(t.e,t.c,!1),$async$Ol)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ek6)
x=1
break}x=4
return A.b(B.a4z(u.a.c,"individual"),$async$Ol)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3h(A.eH(new B.cWc(u),!1,null,y.H)),$async$Ol)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ol,w)},
HE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f6d(o),$async$HE)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4D(o.e,r,s,q),$async$HE)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.ehb)
x=1
break}x=5
return A.b(B.a4z(u.a.c,"member"),$async$HE)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3h(A.eH(new B.cWe(u),!1,null,y.H)),$async$HE)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HE,w)},
wU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4y(t.e,o,t.f,t.r,t.w,s),$async$wU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4z(u.a.c,"org_owner"),$async$wU)
case 4:x=5
return A.b(B.aml(u.a.c),$async$wU)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f6I(o),$async$wU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4B(s,t,o,q.c),$async$wU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.eh8)
x=1
break}x=10
return A.b(B.aml(u.a.c),$async$wU)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3h(A.eH(new B.cWd(u),!1,null,y.H)),$async$wU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wU,w)},
B(d){var x,w,v,u=this,t=null,s=A.K(d).ax.a===C.H,r=s?C.iU:C.oO,q=B.fzQ(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.a9(0,C.G,C.aA.j(0.35),C.fz,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eBV,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.eTm,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bHb,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lk(new B.cWh(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aa8(C.eF,C.asP,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc55(),t),C.aa],v))
p.push(new B.aa8(C.o6,C.Zm,"Team Member","Sign in with your organization access code + password",u.gc5V(),t))
p.push(C.aa)
p.push(new B.aa8(C.afW,C.a_I,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5r(),t))
return A.ce(t,r,A.br(!0,A.cf(A.u(p,C.ad,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adl,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aa8.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.G(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.er(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a1,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.en,A.C(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.or,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.K(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A6,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayA.prototype={}
B.aBH.prototype={}
B.j8.prototype={
lZ(d){var x=this.b,w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aU(x,w+1).toLowerCase())},
gam9(){var x=this.d
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
b6w(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cyp(d){return this.b6w(null,d)},
azM(d){return this.b6w(d,null)}}
B.SF.prototype={
S(){return new B.azX(new A.cn(null,y.A))},
gd6(){return this.c}}
B.azX.prototype={
Z(){this.a0()
this.aaX()},
aaX(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Am(u.a.c),$async$aaX)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dFH(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaX,w)},
aaY(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fC(new A.fv(s)),$async$aaY)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.el0)
case 1:return A.h(v,w)}})
return A.i($async$aaY,w)},
Xj(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alu(s.d,4),$async$Xj)
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
aey(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aey=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7y("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aey)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aey,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===C.H,n=o?C.iU:C.oO,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.as(new A.B(C.em,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aA.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.G(C.aA.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZM,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a1,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.acW,p,p,1/0)
v=A.m(20)
u=A.a([new A.a9(0,C.G,C.aA.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.cf(A.u(A.a([x,C.mb,w,C.ka,new A.eo(A.p(p,A.pj(p,p,!1,B.hhA(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ka,A.A(A.a([A.C(A.ey(M.Ak,C.R8,q.gbZj(),p),1),C.av,A.C(A.dj(C.xk,C.a4v,q.gbZk(),A.bk(C.aA,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ey(L.Yf,D.ePB,q.gck1(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.K1,p,p,C.ah)
x=r}return A.ce(l,n,x,p,!1,!1,p,p)}}
B.SJ.prototype={
S(){return new B.aA_(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aA_.prototype={
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
if(t==null){u.n(new B.dGQ(u))
x=1
break}u.n(new B.dGR(u))
s=u.a
r=s.c
x=3
return A.b(B.a4x(s.d,new B.dGS(u),t,r),$async$Xk)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dGT(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xk,w)},
a_p(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_p=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.n(new B.dGU(r))
u=4
q=J.fh(r.a.d)
x=7
return A.b(B.qN(r.a.c,q),$async$a_p)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dGV(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.af0(p,m,l,j,k),$async$a_p)
case 8:o=e
if(r.c!=null)r.n(new B.dGW(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a4(h)
if(r.c!=null)r.n(new B.dGX(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dGY(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_p,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===C.H,i=j?D.a9B:D.a7Y,h=j?D.aaY:C.c,g=j?C.aO:C.M,f=j?C.bP:C.aj,e=j?D.a8U:C.aJ
i=[i,e,h,g,f,j?C.eT:C.bQ]
x=A.K(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eA(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([C.aA.j(x?0.12:0.08),C.aA.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.G(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bwi,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aA],e),k,k),C.n),k,52,k,k,k,k,k,52),C.en,A.C(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZM,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tB(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.beG()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bl(k,k,k,C.JV,k,k,"",k,!0,new A.b1(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b1(4,A.m(18),new A.ax(C.aA,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ae,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dGZ(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.G(i[1],C.r,1)
m=J.JB(l.a.d,4)
m=A.z(new A.I(m,new B.dH_(x,new A.aCT(i)),m.$ti.k("I<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.B(C.nk,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bs,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aA.j(x?0.16:0.1)
t=A.m(14)
s=A.G(C.aA.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.efJ)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.C(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.ib,k,k,k,C.eE,k,k,k)],r))}e=A.C(A.cf(A.u(e,C.ad,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bhx,k,k,C.ah),1)
u=l.f?k:l.gck2()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(L.Yf,D.eQv,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ca,k,new A.b5(q,C.W),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZl()
t=A.bk(C.aA,k,k,0,C.c,k,C.mx,k,new A.b5(A.m(16),C.W),k,k,k)
return A.ce(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mx(new B.dH0(),A.u(A.a([e,new A.B(D.bh1,A.u(A.a([s,C.P,i,C.aa,A.bJ(l.f?C.qN:D.eP0,u,t)],r),C.ad,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UJ,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.beG.prototype={
nV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f4(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h1(C.bo,v.length),C.aL)}}
B.SG.prototype={
S(){return new B.azY()}}
B.azY.prototype={
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
aaZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aaZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dFI(r))
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
return A.b(B.a4C(p,m,n,o,C.a.i(l).length===0?null:l),$async$aaZ)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.ekC)
s=[1]
x=4
break}p.F(y.q).f.P(D.ejf)
p=r.c
p.toString
A.a7(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dFJ(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aaZ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax.a===C.H?C.iU:C.oO,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eIe,s,s,s,1,s,!0),p=A.p(s,D.baA,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.EQ,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bD_,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCW,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bD9,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gbZm()
u=A.bk(C.aA,s,s,s,s,C.fV,s,s,s,s,s,s)
return A.ce(q,r,A.cf(A.u(A.a([p,C.d1,o,C.aa,x,C.aa,w,C.mb,A.bJ(t.r?C.qN:C.aL0,v,u)],y.p),C.ad,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.a9o.prototype={}
B.bqV.prototype={
a20(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gG(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akO()))
x=3
return A.b(B.Pb(t,s),$async$a20)
case 3:if(!e){$.ak.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a20,w)},
gd6(){return this.a}}
B.Lu.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WP.prototype={
S(){return new B.aw5(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aw5.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cWb(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZs(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZP(d),u=x.a.c,t=u?C.hn:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iU:v.a[0],p=A.m(24),o=A.G(C.aA.j(0.35),C.r,1),n=y.V,m=A.a([new A.a9(0,C.G,C.aA.j(u?0.25:0.12),C.fz,32)],n),l=A.p(w,T.aix,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.a9(0,C.G,C.aA.j(0.4),C.cv,16)],n),C.ajj,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tB(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqA()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bl(w,w,w,C.DB,w,w,"",w,!0,new A.b1(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b1(4,A.m(16),D.aPV),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ae,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cW9(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lA,w,w,w,w)
f=f[1]
f=A.C(A.dU(C.mX,new B.cWa(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.ca,w,new A.b5(A.m(14),C.W),new A.ax(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.a9(0,C.G,C.aA.j(0.35),C.cG,12)],n)
g=y.p
return A.eB(w,C.K,new A.d2(Q.Ib,A.bQ(new A.B(C.wu,A.u(A.a([l,C.aN,k,C.P,j,C.dW,i,C.dW,A.A(A.a([f,C.av,A.C(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dMz,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZr(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LK,C.n),C.b7),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b7),w),w,w,w,C.K3,C.cZ,w,w,w)}}
B.bqA.prototype={
nV(d,e){return e.ahD(e.a.toUpperCase())}}
B.SH.prototype={
S(){return new B.azZ(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.azZ.prototype={
Z(){var x=this
x.a0()
x.rQ()
x.w=A.dD(C.iW,new B.dGO(x))},
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
case 4:u.n(new s.dGb(u,e))
u.hL("Received "+A.t(t)+" file(s) via My Code.")
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
break}u.n(new B.dGc(u,s))
if(t>0)u.hL("Received "+A.t(t)+" file(s) via My Code.")
u.LR(u.d)
B.Am(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rQ,w)},
LR(d){return this.bvC(d)},
bvC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4H(r,u.a.c),$async$LR)
case 8:p=f
if(u.c==null){x=1
break}new B.dFL(u,r,p).$0()
u.c.e2()
case 7:if(!(C.a.a_(r.c,"video/")||r.lZ(D.m3))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SO(r,u.a.c),$async$LR)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zr(u.a.c),$async$LR)
case 12:u.n(new o.dFM(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LR,w)},
Mc(d){return this.bBB(d)},
bBB(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4H(d,u.a.c),$async$Mc)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dFR(u,d,t))
x=6
return A.b(A.fC(new A.fv(t)),$async$Mc)
case 6:u.hL("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fC(new A.fv(r.toUpperCase())),$async$Mc)
case 7:u.hL("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Mc,w)},
hL(d){var x=null,w=this.c
if(w==null)return
w.F(y.q).f.P(A.b_(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rR(d,e){return this.cu8(d,e)},
cu8(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGC(r,e))
u=3
x=6
return A.b(d.$0(),$async$rR)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dGD(r))
$.eI.lU()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rR,w)},
gaQs(){var x=this.a
return x.f||x.r||x.w},
GG(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQs()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c22(s,n,r,q,o,t),$async$GG)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hL("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fgj(o,u.a.c),$async$GG)
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
return A.b(B.BH(s,o,r,q,n,t),$async$GG)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GG,w)},
Yo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aml(u.a.c),$async$Yo)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hL("No organization portal found.")
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
return A.b(A.a7(t,!1).cr(A.eH(new B.dG8(u,r,q),!1,null,y.H)),$async$Yo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yo,w)},
Zs(d){return this.cdQ(d)},
cdP(){return this.Zs(1)},
cdQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQs()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ami(u.a.c),$async$Zs)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zs,w)},
a92(d,e,f){return this.bRE(d,e,f)},
bRE(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a92=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL(e)
x=1
break}x=3
return A.b(u.rR(new B.dG5(u,d,null,e,f),"Uploading\u2026"),$async$a92)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a92,w)},
bvL(){B.h2E(!1,new B.dFP(this))
return},
ciF(){this.n(new B.dGg(this))},
auw(){var x=0,w=A.j(y.H),v=this
var $async$auw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvL()
return A.h(null,w)}})
return A.i($async$auw,w)},
a8Z(){var x=0,w=A.j(y.H),v=this
var $async$a8Z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dFV(v),"Importing\u2026"),$async$a8Z)
case 2:return A.h(null,w)}})
return A.i($async$a8Z,w)},
Qj(d){return this.ctC(d)},
ctC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lZ(D.m3)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cr(A.eH(new B.dGz(u,d),!1,null,y.H)),$async$Qj)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lZ(D.NE)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cr(A.eH(new B.dGA(u,d),!1,null,y.H)),$async$Qj)
case 8:x=1
break
case 7:x=u.bSl(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cr(A.eH(new B.dGB(u,d),!1,null,y.H)),$async$Qj)
case 11:x=1
break
case 10:u.hL("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qj,w)},
bSl(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.co9,C.a.aU(x,w+1).toLowerCase())},
aci(d){return this.c59(d)},
c59(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aci=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lZ(D.m3)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cr(A.eH(new B.dG6(u,d),!1,null,y.H)),$async$aci)
case 5:x=1
break
case 4:u.n(new B.dG7(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aci,w)},
PI(d){return this.cls(d)},
cls(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oB(t,s.c,s.f),$async$PI)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dGs(u,d),"Preparing QR\u2026"),$async$PI)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PI,w)},
aeX(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aeX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dGt(),A.T(t).k("I<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.z(new A.a5(t,new B.dGu(q),s),s.k("F.E"))
if(r.length===0){u.hL("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PI(r),$async$aeX)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeX,w)},
aeQ(d){return this.cl1(d)},
cl1(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZP(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGm(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeQ)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qj(d)
break
case"qr":u.PI(A.a([d],y.r))
break
case"send_my_code":u.c5K(A.a([d],y.r))
break
case"save":u.aec(d)
break
case"delete":u.Ho(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeQ,w)},
Vn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dFS(),A.T(t).k("I<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.z(new A.a5(t,new B.dFT(q),s),s.k("F.E"))
if(r.length===0){u.hL("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oB(t,s.c,s.f),$async$Vn)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dFU(u,r),"Preparing file\u2026"),$async$Vn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vn,w)},
adp(d){return this.ccl(d)},
ccl(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h3l(d,!1),$async$adp)
case 3:s=f
r=s==null
q=B.a4E(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hL("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adp,w)},
aco(){var x=0,w=A.j(y.H),v=this,u
var $async$aco=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fnT(u,v.a.c),$async$aco)
case 2:return A.h(null,w)}})
return A.i($async$aco,w)},
bvK(){B.h2E(!1,new B.dFO(this,null))
return},
HD(d,e){return this.c5L(d,e)},
aVW(d){return this.HD(null,d)},
c5K(d){return this.HD(d,null)},
c5L(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a5<1>")
k=A.z(new A.a5(p,new B.dG9(s),o),o.k("F.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wf.c2().ak9(!0,C.Wo,!1),$async$HD)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.rR(new B.dGa(l,s,r),"Preparing\u2026"),$async$HD)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a4(j)
$.ak.$1("[doc share send my code pick] "+A.t(q))
s.hL("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hL("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.byL(p,l,e,s.a.c),$async$HD)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HD,w)},
GV(d){return this.bRr(d)},
bRr(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hhz(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aVW(t),$async$GV)
case 8:x=6
break
case 7:u.hL("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ad("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hL("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.rR(new B.dG3(u,d),"Receiving video\u2026"),$async$GV)
case 11:x=1
break
case 10:x=12
return A.b(u.rR(new B.dG4(u,d),"Receiving\u2026"),$async$GV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GV,w)},
CV(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BB()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adp(t),$async$CV)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GV(s),$async$CV)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cr(A.eH(new B.dGe(u),!1,null,y.N)),$async$CV)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rQ(),$async$CV)
case 10:x=1
break
case 9:x=11
return A.b(u.GV(C.a.i(r)),$async$CV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CV,w)},
aec(d){return this.chg(d)},
chg(d){var x=0,w=A.j(y.H),v=this
var $async$aec=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGd(v,d),"Saving\u2026"),$async$aec)
case 2:return A.h(null,w)}})
return A.i($async$aec,w)},
Ho(d){return this.bDT(d)},
bDT(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ho=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ho)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c25(t),$async$Ho)
case 6:case 5:s=d.a
x=7
return A.b(B.D5(u.a.c,s),$async$Ho)
case 7:u.r.W(0,s)
x=8
return A.b(u.rQ(),$async$Ho)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ho,w)},
af2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZP(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGy(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$af2)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aco()
break
case"import":u.a8Z()
break}case 1:return A.h(v,w)}})
return A.i($async$af2,w)},
bZp(d){var x=d.c
if(C.a.a_(x,"video/")||d.lZ(D.m3))return C.pb
if(C.a.a_(x,"image/")||d.lZ(D.NE))return C.rW
if(C.a.q(x,"pdf"))return E.Lg
return D.agl},
B(d){var x,w,v=this,u=null,t=B.ZP(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EJ,u,u,u,new B.dGJ(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwO,u,u,u,v.e?u:v.gc5s(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gciE()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.brd:E.agL,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Yc,u,u,u,v.e?u:v.gbZq(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.ns,u,u,u,v.e?u:v.gaWZ(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bys,u,u,u,v.e?u:new B.dGK(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lk(new B.dGL(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([p.j(A.K(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([C.aA.j(A.K(d).ax.a===C.H?0.12:0.08),C.aA.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mR(s[1].j(0.5),u,C.aA,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.C(new B.aw2(C.j1,s,!0,t,w?u:v.gclt(),u),1)
x.push(new A.B(D.bfO,A.mx(new B.dGM(),A.A(A.a([s,C.av,A.C(new B.aw2(C.uu,"Export",!1,t,w?u:v.gbHh(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.id,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9o(t,v.e?u:v.gaWZ(),u)
else s=A.jT(!0,u,u,new B.dGN(v,t),s,u,D.bfG,u,u,!1,!1)
x.push(A.C(s,1))
return A.ce(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aw2.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aA,t,t,0,C.c,t,C.ud,t,new A.b5(s,C.W),t,t,t)
return A.dj(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ud,t,new A.b5(s,C.W),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ey(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eJ,t,t,t),u.r,v)}}
B.b9o.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aA.j(0.16)],y.O),t=A.G(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mx(new B.cW7(),new A.B(E.VB,A.u(A.a([A.mx(new B.cW8(),A.p(x,A.V(C.wP,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ie,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dj(C.ns,D.eTE,this.d,A.bk(C.aA,x,x,x,C.c,x,C.Vw,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zt,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9I.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aA.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lZ(D.m3))p=D.cTx
else{p=C.a.a_(p,"image/")||i.lZ(D.NE)
n=y.O
p=p?A.a([C.cW,C.aA],n):A.a([C.aK.j(0.85),C.aA.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gam9()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lZ(D.m3))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.C(A.u(A.a([q,C.au,A.d(C.d.aF(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fx,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lZ(D.m3)))l.push(A.fxD(C.aA,!1,j,j,j,!1,j,j,new B.cWu(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.np,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mx(new B.cWv(),new A.B(C.dZ,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.B(C.V2,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ax(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WR.prototype={
S(){return new B.aw7()},
gd6(){return this.c}}
B.aw7.prototype={
Z(){this.a0()
this.wM()},
p(){B.hhO(this.e)
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
n=B.hhR(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hhQ(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWr(s))
x=1
break}s.n(new B.cWs(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a4(l)
if(s.c==null){x=1
break}s.n(new B.cWt(s,q))
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
break}t.F(y.q).f.P(D.ehI)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.af0(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_o)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_o,w)},
bRk(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k7(u,C.B,v,new B.cWp(w,t),C.fG,C.dp,!0,v,v,v,v)
else if(t!=null&&!C.aE.gah(t))x=A.fD(t,C.B,v,new B.cWq(w),C.fG,C.dp,!0,v,!1,v,v)
else return C.bF
return A.tK(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZP(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Al,u,u,u,v.gb_H(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cv
else{q=v.r
if(q!=null)t=new A.B(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.B(C.em,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dj(C.Al,D.eE1,v.gb_H(),A.bk(C.aA,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRk()}return A.ce(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WO.prototype={
S(){return new B.aw4(A.afM(),C.bu,C.bu)},
gd6(){return this.c}}
B.aw4.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fn(w,A.a2(w).k("fn<1>")).hX(new B.cW4(v))
x.gcH0().hX(new B.cW5(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fn(x,A.a2(x).k("fn<1>"))}if(x==null)x=C.aVK
x.hX(new B.cW6(v))
v.wM()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qN(p.c,p.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cVY(s))
x=1
break}x=8
return A.b(s.d.AZ(0,new A.a0Z(r,s.a.d.c)),$async$wM)
case 8:if(s.c==null){x=1
break}s.n(new B.cVZ(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
if(s.c==null){x=1
break}s.n(new B.cW_(s,q))
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
return A.b(u.fS(0),$async$Xl)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xl)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xl,w)},
aOp(d){var x=d.a
return C.a.aT(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZP(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cv
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bsb,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LK,C.n),o,88,o,o,o,o,o,88)
t=A.m8(C.aA,o,o,m,0,new B.cW0(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOp(p.w)+" / "+p.aOp(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aA,o,o,o,o,D.eei,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.x0:C.iF,o,o,o,o,o)
x=A.u(A.a([u,C.ka,t,x,C.d1,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZt(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.ce(v,w,A.as(new A.B(C.uh,x,o),o,o,o),o,!1,!1,o,o)}}
B.NF.prototype={
S(){return new B.awa()},
gd6(){return this.c}}
B.awa.prototype={
Z(){this.a0()
this.NH()},
NH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fzR(o.c,o.d,new B.cWI(s)),$async$NH)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cWJ(s))
x=1
break}s.e=r
q=O.hDM(r)
if(q==null){s.n(new B.cWK(s))
x=1
break}s.d=q
q.aJ(0,s.gaVL())
x=8
return A.b(q.hW(0).cJ(0,C.rC),$async$NH)
case 8:if(s.c==null){x=1
break}s.n(new B.cWL(s))
x=9
return A.b(q.p5(0),$async$NH)
case 9:q.rr(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
if(s.c==null){x=1
break}s.n(new B.cWM(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NH,w)},
c3O(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cWN(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BH(0,x.gaVL())
w=x.d
if(w!=null)w.p()
B.hNf(x.e)
x.a2()},
ab1(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aW4(u.c,u.d),$async$ab1)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ab1,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZP(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.oc,t,t,t,u.gbZn(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i5(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cv
else{q=u.r
if(q!=null)s=new A.B(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afg(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fN(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.yZ(s,t),A.aJ(t,A.Fk(A.p(t,A.V(q?H.x0:C.iF,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b9,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cWP(u),t,t,t,t,t,t,!1,C.af)],o),t),t)}else s=C.bF}}return A.ce(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WT.prototype={
S(){return new B.aw8(new A.cn(null,y.A))}}
B.aw8.prototype={
gctT(){var x,w,v=this.a
if(v.e!==D.OT)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aU(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gctA(){var x,w,v=this.a
if(v.e!==D.xR)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aU(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gctT()
if(x!=null){v.OK(x)
v.e=A.dD(R.Dr,new B.cWE(v,x))}w=v.gctA()
if(w!=null){v.OJ(w)
v.f=A.dD(C.h_,new B.cWF(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OJ(d){return this.caC(d)},
caC(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amq(d),$async$OJ)
case 3:t=f
x=4
return A.b(B.c2o(d),$async$OJ)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWw(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
OK(d){return this.caD(d)},
caD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fo9(d),$async$OK)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwK(t),$async$OK)
case 4:if(u.c==null){x=1
break}u.n(new B.cWx(u))
u.c.F(y.q).f.P(D.aI6)
case 1:return A.h(v,w)}})
return A.i($async$OK,w)},
gbWb(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZo(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_9(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BB()){t=u.c
if(t!=null)t.F(y.q).f.P(D.ekM)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cr(A.eH(new B.cWy(),!1,null,y.N)),$async$a_9)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwK(s),$async$a_9)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aI6)
case 1:return A.h(v,w)}})
return A.i($async$a_9,w)},
a6Z(d){return this.bBC(d)},
bBC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fC(new A.fv(C.d.aF(t,", "))),$async$a6Z)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b_(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6Z,w)},
ab_(d){return this.bBm(d)},
bBm(d){var x=0,w=A.j(y.H),v=this
var $async$ab_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fC(new A.fv(v.a.c)),$async$ab_)
case 2:if(d.e!=null)d.F(y.q).f.P(D.eia)
return A.h(null,w)}})
return A.i($async$ab_,w)},
a_4(d){return this.chi(d)},
chi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alu(s.d,4),$async$a_4)
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
gaRu(){var x,w=this.a
if(w.e!==D.FR)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aU(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aU(x,13))
return null},
a6W(d){return this.bBv(d)},
bBv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRu()
if(t==null){x=1
break}x=3
return A.b(A.fC(new A.fv(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6W)
case 3:if(d.e!=null)d.F(y.q).f.P(D.ejM)
case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
ab0(){var x=0,w=A.j(y.H),v=this,u
var $async$ab0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SQ(),$async$ab0)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$ab0,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZP(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FR&&i!==D.OT&&i!==D.xR
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FR||t===D.OT||t===D.xR?l:A.aF(l,l,l,l,C.kB,l,l,l,m.gaU3(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.G(C.aA.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pj(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bs,A.d(""+q.d+" file(s) \xb7 "+m.gbWb(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FR){t=C.aA.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.my,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gbZo(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aF(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bC4,D.eMr,new B.cWz(m,d),l)],p))}if(m.a.e===D.FR&&m.gaRu()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a0,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.byN,D.eJu,new B.cWA(m,d),l)],p))
if(m.a.e===D.xR){x=(m.w?C.dr:C.aA).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cy:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.my,l,l,l)],p))}if(m.a.e===D.OT){x=(m.r?C.dr:C.aA).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cy:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.my,l,l,l),C.aa,A.dj(D.buE,D.ePj,m.gchG(),A.bk(C.aA,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.ce(v,w,new A.B(C.a8,A.u(A.a([A.C(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.A(A.a([A.C(A.ey(M.Ak,C.R8,new B.cWB(m,d),l),1),C.av,A.C(A.dj(C.xk,C.a4v,new B.cWC(m,d),A.bk(C.aA,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bJ(C.yk,m.gaU3(),A.bk(C.aK,l,l,l,l,C.fV,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWD(),y.C)}}
B.a9G.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cf(A.u(A.a([w,C.aN,A.p(x,A.pj(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ah)
return A.ep(A.a([A.bJ(C.BS,new B.cVX(d),x)],u),x,x,C.mk,v,x,x,x,x,D.eD5,x)}}
B.WN.prototype={
S(){return new B.aw3(A.y7(C.wb,C.n3,C.t6))}}
B.aw3.prototype={
p(){this.d.p()
this.a2()},
atf(d){var x,w,v,u,t
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
return A.ce(A.eA(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eJU,x,x,x,1,x,!0),C.w,A.y6(this.d,C.bM,this.gate()),x,!1,!1,x,x)}}
B.WU.prototype={
S(){return new B.aw9(A.y7(C.wb,C.n3,C.t6))},
gd6(){return this.c}}
B.aw9.prototype={
bSn(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acL(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q8("text/plain"),$async$acL)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.ekG)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acL,w)},
a7J(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h3l(p,!0),$async$a7J)
case 3:t=e
p=t==null
s=B.a4E(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.ehi)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7J,w)},
p(){this.d.p()
this.a2()},
atf(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSn(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahD,v,v,v,w.gbGQ(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yj,v,v,v,w.gc82(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rU:P.L0,v,v,v,v,v),v,v,v,new B.cWH(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eQ4,v,v,v,1,v,!0)
u=A.y6(w.d,C.bM,w.gate())
x=A.m(20)
return A.ce(t,C.w,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.G(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dR_],s),v),v,!1,!1,v,v)}}
B.b9p.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nX
else x=s.w?C.aA:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aA.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nX:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.B(C.VH,A.A(A.a([u,C.ba,A.C(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ek,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a6Y.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mx.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UX.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mw.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dz.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cd4.prototype={}
B.Dy.prototype={}
B.a6X.prototype={}
B.aqD.prototype={}
B.UY.prototype={}
var z=a.updateTypes(["au<~>()","Q(j8)","n(j8)","SH(Y)","~()","WQ(Y)","H(H,j8)","NF(Y)","~(lE)","cp(Dy)","au<j8?>(@)","SF(Y)","SJ(Y)","B(j8)","j8(@)","a0<n,@>(j8)","WP(Y)","SG(Y)","WR(Y)","WO(Y)","WT(Y)","a9G(Y)","al<j8>()","WU(Y)","a9I(Y,H)","WN(Y)","a0<n,aC>(j8)","cp(UX)","cp(a6X)","au<cp>(Dy)"])
B.cd0.prototype={
$1(d){var x=this.a
x.x=D.aFF
x.y.H(0,D.aFF)},
$S:68}
B.cd1.prototype={
$1(d){var x=this.a
x.x=D.aFE
x.y.H(0,D.aFE)},
$S:68}
B.cd2.prototype={
$1(d){var x=this.a
x.ae5(A.aLm(d.data)).bw(new B.cd_(x),y.b)},
$S:68}
B.cd_.prototype={
$1(d){var x=this.a
x.z.H(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cd3.prototype={
$1(d){},
$S:68}
B.cd6.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hms(d.channel))},
$S:15}
B.cd7.prototype={
$1(d){},
$S:15}
B.cd8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hEK(w.iceConnectionState)
x.cx=w
if($.fIk())switch(w.a){case 0:x.cy=D.aFK
break
case 1:x.cy=D.aFL
break
case 3:x.cy=D.aFM
break
case 5:x.cy=D.aFI
break
case 6:x.cy=D.aFJ
break
case 7:x.cy=D.a2h
break
default:break}},
$S:142}
B.cd9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hEL(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.cda.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hOI(w.signalingState)},
$S:142}
B.cdb.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hN1(w.connectionState)},
$S:142}
B.cdc.prototype={
$1(d){},
$S:142}
B.cdd.prototype={
$1(d){},
$S:15}
B.f2Z.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"blobs")
if(!w)C.w8.Jc(x,"blobs")},
$S:196}
B.fnH.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uI.f1(this.b)
$.eI.lU()
this.c.$1(d)},
$S:449}
B.fnJ.prototype={
$1(d){return this.a.$1(B.hv7(this.b,this.c))},
$S:31}
B.fnI.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fnG.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fnW.prototype={
$1(d){var x=this
return B.fU9(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fnX.prototype={
$1(d){var x=this
return B.fU9(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f4h.prototype={
$1(d){var x=this
return B.c2_(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWf.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWc.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2_(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWe.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2_(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWd.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2_(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWh.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.A(A.a([A.aF(x,x,x,x,D.bth,x,x,x,new B.cWg(d),x,x,x,x,x,x),A.C(A.Dk(D.Nq,!0,x,C.Xm,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nq,x,g,C.adE,0,e,f)},
$C:"$4",
$R:4,
$S:429}
B.cWg.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6g.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eo,y.o).w,t=this.a,s=t?C.hn:C.c,r=A.m(28),q=A.p(v,D.baS,C.h,v,v,D.aRx,v,v,v,v,D.adv,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxm,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ae,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.B(new A.L(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.B(C.zI,A.u(A.a([o,C.aa,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahS,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ae,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bs,A.A(A.a([A.C(A.dU(C.de,new B.f6e(d),v),1),C.av,A.C(A.bJ(D.eIx,new B.f6f(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JK,v,v,v,v),v)},
$S:57}
B.f6e.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6f.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eip)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayA(v,x))},
$S:0}
B.f6K.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eo,y.o).w,u=x.a,t=u?C.hn:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.B(new A.L(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.baI,C.h,w,w,D.aST,w,w,w,w,D.adv,w,w,1/0),new A.B(C.zI,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fEG(u,"Organization name",C.E3,w),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fEG(u,"Access code",C.mD,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fEG(u,"Member password",N.EE,w),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bs,A.bJ(D.eQ8,new B.f6J(r,q,p,d),A.bk(C.aA,w,w,w,w,C.fV,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JK,w,w,w,w),w)},
$S:57}
B.f6J.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eiu)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBH(u,x,w))},
$S:0}
B.c1R.prototype={
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
p=C.a.a_(j,"http")?A.cq(j,0,null):s.b.aO(j)
u=4
x=7
return A.b(A.ut(p,null).cJ(0,C.UI),$async$$1)
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
B.c1X.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1Y.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c1Z.prototype={
$1(d){return d.b},
$S:z+2}
B.c1T.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1U.prototype={
$1(d){return d.b},
$S:z+2}
B.c1S.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c1V.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c1W.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fnU.prototype={
$1(d){return new B.SF(this.a,null)},
$S:z+11}
B.fnV.prototype={
$1(d){return new B.SJ(this.a,this.b,this.c,null)},
$S:z+12}
B.dFH.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dGQ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dGR.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dGS.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dGP(x,d))},
$S:2}
B.dGP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGT.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGU.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dGV.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dGW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGX.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dGY.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dH0.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.dGZ.prototype={
$1(d){var x=this.a
return x.f?null:x.Xk()},
$S:2}
B.dH_.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aA.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lZ(D.NE))s=C.rW
else s=C.a.a_(s,"video/")||d.lZ(D.m3)?C.pb:D.agl
x=this.b.a
w=y.p
return new A.B(C.lm,A.A(A.a([A.p(v,A.V(s,C.aA,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.C(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gam9(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dFI.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dFJ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c20.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.c21.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.foq.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f0b.prototype={
$1(d){return J.k(d)},
$S:17}
B.f4t.prototype={
$1(d){var x=this.b
B.htg(C.DR.ga3z(this.a)).bw(x.gcwO(x),y.H)},
$S:120}
B.f4u.prototype={
$1(d){return this.a.d_(0,null)},
$S:120}
B.f4v.prototype={
$0(){return null},
$S:11}
B.c2f.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f4w.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Z(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.N(Date.now(),0,!1).a4().aa():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.j8(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f8p.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f3a.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3b.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2k.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m3)},
$S:z+1}
B.fsm.prototype={
$1(d){return new B.WP(this.a,null)},
$S:z+16}
B.cWb.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:8}
B.cW9.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cWa.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGO.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zh()},
$S:14}
B.dGb.prototype={
$0(){var x=J.bzN(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGc.prototype={
$0(){var x=J.bzN(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFL.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dFK(this.b))
if(w>=0){x=x.d
x[w]=x[w].azM(this.c)}},
$S:0}
B.dFK.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFM.prototype={
$0(){var x=J.bzN(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFR.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dFQ(this.b))
if(w>=0){x=x.d
x[w]=x[w].azM(this.c)}},
$S:0}
B.dFQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGC.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dGD.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dG8.prototype={
$1(d){return new B.SG(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dG5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GG(),$async$$0)
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
case 8:case 7:r.hL(s.gah(t)?u.d:u.e+" "+s.gG(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFP.prototype={
$1(d){this.a.a92(d,"No files selected.","Added")},
$S:449}
B.dGg.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.I(x,new B.dGf(),A.T(x).k("I<1,n>")))},
$S:0}
B.dGf.prototype={
$1(d){return d.a},
$S:z+2}
B.dFV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wf.c2().cIV(C.Wo,!0),$async$$0)
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
$.ak.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hL("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hL("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.amp(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.hL("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rQ(),$async$$0)
case 9:o.hL("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dGz.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dGA.prototype={
$1(d){return new B.WR(this.a.a.c,this.b,null)},
$S:z+18}
B.dGB.prototype={
$1(d){return new B.WO(this.a.a.c,this.b,null)},
$S:z+19}
B.dG6.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dG7.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.H(0,w)},
$S:0}
B.dGs.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GG(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4G(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hL("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cdP(),$async$$0)
case 5:x=6
return A.b(p.rQ(),$async$$0)
case 6:r=A.T(t).k("I<1,n>")
r=new A.I(new A.I(t,new B.dGo(p),r),new B.dGp(),r.k("I<ai.E,n>")).bZ(0,new B.dGq())
q=A.z(r,r.$ti.k("F.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cr(A.eH(new B.dGr(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oA(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SQ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGo.prototype={
$1(d){var x=this.a,w=C.d.bf(x.d,new B.dGn(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dGn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGp.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dGq.prototype={
$1(d){return d.length!==0},
$S:3}
B.dGr.prototype={
$1(d){var x=this.a
return new B.WT(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dGt.prototype={
$1(d){return d.a},
$S:z+2}
B.dGu.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGm.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aA.j(0.35),q=A.as(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.ks,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gam9(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lZ(D.m3)?C.rY:C.oa
p=!x||p.lZ(D.m3)?"Play video":"View"
return A.bQ(A.br(!0,new A.B(C.zE,A.u(A.a([q,o,t,C.ay,B.WS(!1,u,!1,w,p,new B.dGh(d),v),B.WS(!1,u,!1,C.j1,"Share via QR",new B.dGi(d),"Letters/numbers QR code"),B.WS(!1,u,!1,D.Xr,"Send to their Code",new B.dGj(d),"Enter someone else's personal code"),B.WS(!1,u,!1,C.hi,"Download / save",new B.dGk(d),v),C.ar,B.WS(!1,u,!0,C.e4,"Delete",new B.dGl(d),v)],y.p),C.ad,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c2(new A.ax(r,1,C.r,-1),C.W,C.W,C.W),C.kh,v,v,C.n),C.b7)},
$S:684}
B.dGh.prototype={
$0(){A.a7(this.a,!1).K("view")
return null},
$S:0}
B.dGi.prototype={
$0(){A.a7(this.a,!1).K("qr")
return null},
$S:0}
B.dGj.prototype={
$0(){A.a7(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dGk.prototype={
$0(){A.a7(this.a,!1).K("save")
return null},
$S:0}
B.dGl.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
B.dFS.prototype={
$1(d){return d.a},
$S:z+2}
B.dFT.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFU.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4I(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.EU(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oA(s.c,s.f),$async$$0)
case 4:u.hL(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFO.prototype={
$1(d){var x=this.a
x.rR(new B.dFN(x,d,this.b),"Preparing\u2026")},
$S:449}
B.dFN.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hL("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SK(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.hL("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byL(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG9.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dGa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fzU(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.H(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG3.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.ER(new B.dG_(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hL("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dG0(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dG1(s))
case 5:x=8
return A.b(r.b.i0(0,C.Do,new B.dG2()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hL("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rQ(),$async$$0)
case 9:s.hL("Received "+q.gG(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG_.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFX(x,d,e))},
$S:132}
B.dFX.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dG0.prototype={
$1(d){return new B.a9G(this.a.a,null)},
$S:z+21}
B.dG1.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dG2.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dG4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GK(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4w(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aVW(B.GK(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amp(new B.dFY(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.fzT(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hL(q)
x=1
break}x=10
return A.b(s.rQ(),$async$$0)
case 10:o=J.cB(r)
p=o.eC(r,new B.dFZ()).gG(0)
s.hL(p>0?"Received "+p+" video(s).":"Restored "+o.gG(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFY.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFW(x,d,e))},
$S:132}
B.dFW.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFZ.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m3)},
$S:z+1}
B.dGe.prototype={
$1(d){return new B.WU(this.a.a.c,null)},
$S:z+23}
B.dGd.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aW4(u.a.c,v.b),$async$$0)
case 2:t.hL(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGy.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aA.j(0.35)
return A.bQ(A.br(!0,new A.B(C.zE,A.u(A.a([A.as(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.ks,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.WS(!0,w,!1,C.mD,"My Code",new B.dGv(d),"Your personal code & QR \u2014 others send docs to you"),B.WS(!1,w,!1,D.Xr,"Send to their Code",new B.dGw(this.a,d),"Enter someone else's 5-digit code + letter"),B.WS(!1,w,!1,S.x9,"Import backup",new B.dGx(d),".ngmydoc file from another device")],y.p),C.ad,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c2(new A.ax(t,1,C.r,-1),C.W,C.W,C.W),C.kh,x,x,C.n),C.b7)},
$S:684}
B.dGv.prototype={
$0(){A.a7(this.a,!1).K("my_code")
return null},
$S:0}
B.dGw.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.bvK()},
$S:0}
B.dGx.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dGL.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.GT(D.Nq,x,C.Xm,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nq).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:649}
B.dGJ.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGK.prototype={
$0(){this.a.af2()
return null},
$S:0}
B.dGM.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:107}
B.dGN.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9I(e,w,v,this.b,x.e,x.bZp(w),new B.dGF(x,w),new B.dGG(x,v,w),new B.dGH(x,w),new B.dGI(x,w),null)},
$S:z+24}
B.dGF.prototype={
$0(){this.a.aci(this.b)
return null},
$S:0}
B.dGG.prototype={
$0(){var x=this.a
return x.n(new B.dGE(x,this.b,this.c))},
$S:0}
B.dGE.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.H(0,w)},
$S:0}
B.dGH.prototype={
$0(){this.a.Mc(this.b)
return null},
$S:0}
B.dGI.prototype={
$0(){this.a.aeQ(this.b)
return null},
$S:0}
B.cW7.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:107}
B.cW8.prototype={
$3(d,e,f){return A.e4(C.B,f,e,null,null)},
$S:134}
B.cWv.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.cWu.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cWr.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWs.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWt.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWp.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aE.gah(w))return A.fD(w,C.B,x,new B.cWn(this.a),C.fG,C.dp,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWo(this.a))
return C.bF},
$S:140}
B.cWn.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWl(this.a))
return C.bF},
$S:186}
B.cWl.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWi(x))},
$S:8}
B.cWi.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWo.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWk(x))},
$S:8}
B.cWk.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWq.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWm(this.a))
return C.bF},
$S:186}
B.cWm.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWj(x))},
$S:8}
B.cWj.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cW4.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW3(x,d))},
$S:1734}
B.cW3.prototype={
$0(){return this.a.f=this.b===C.tu},
$S:0}
B.cW5.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW2(x,d))},
$S:8}
B.cW2.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cW6.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW1(x,d))},
$S:8}
B.cW1.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cVY.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cVZ.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cW_.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cW0.prototype={
$1(d){return this.a.d.Lf(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cWI.prototype={
$0(){var x=this.a.a
return B.qN(x.c,x.d)},
$S:1735}
B.cWJ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cWK.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cWL.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cWM.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cWN.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cWP.prototype={
$0(){var x=this.a
x.n(new B.cWO(x))},
$S:0}
B.cWO.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cWE.prototype={
$1(d){return this.a.OK(this.b)},
$S:14}
B.cWF.prototype={
$1(d){return this.a.OJ(this.b)},
$S:14}
B.cWw.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWx.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWy.prototype={
$1(d){return D.f2d},
$S:z+25}
B.cWD.prototype={
$2(d,e){if(d)B.SQ()},
$S:118}
B.cWz.prototype={
$0(){return this.a.a6Z(this.b)},
$S:0}
B.cWA.prototype={
$0(){return this.a.a6W(this.b)},
$S:0}
B.cWB.prototype={
$0(){return this.a.ab_(this.b)},
$S:0}
B.cWC.prototype={
$0(){return this.a.a_4(this.b)},
$S:0}
B.cVX.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cWH.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cWG(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cWG.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2m.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m3)},
$S:z+1}
B.c2n.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.D(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2l.prototype={
$2(d,e){return this.bdu(d,e)},
bdu(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SR(u.c,A.D(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1736}
B.f82.prototype={
$1(d){if(d===D.a2g&&(this.a.a.a&30)===0)this.a.fA(0)},
$S:z+27}
B.f83.prototype={
$0(){},
$S:11}
B.f8x.prototype={
bf2(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eYt(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fPp(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bf2(d,e)},
$S:525}
B.f8w.prototype={
$1(d){var x=this
d.b=new B.f8v(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f8v.prototype={
$1(d){return this.bf1(d)},
bf1(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aW5(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.H(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aC(0,n,null)
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
return A.b(B.eYt(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d_(0,s.e)
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
return A.b(B.a4F(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d_(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aw6.prototype,"gc55","Ol",0)
x(v,"gc5V","HE",0)
x(v,"gc5r","wU",0)
x(v=B.azX.prototype,"gbZj","aaY",0)
x(v,"gbZk","Xj",0)
x(v,"gck1","aey",0)
x(v=B.aA_.prototype,"gbZl","Xk",0)
x(v,"gck2","a_p",0)
x(B.azY.prototype,"gbZm","aaZ",0)
x(B.aw5.prototype,"gbZr","bZs",4)
x(v=B.azZ.prototype,"gc5s","Yo",0)
x(v,"gciE","ciF",4)
x(v,"gaWZ","auw",0)
x(v,"gclt","aeX",0)
x(v,"gbHh","Vn",0)
x(v,"gbZq","CV",0)
x(B.aw7.prototype,"gb_H","a_o",0)
x(B.aw4.prototype,"gbZt","Xl",0)
x(v=B.awa.prototype,"gaVL","c3O",4)
x(v,"gbZn","ab1",0)
x(v=B.aw8.prototype,"gchG","a_9",0)
x(v,"gaU3","ab0",0)
w(B.aw3.prototype,"gate","atf",8)
x(v=B.aw9.prototype,"gc82","acL",0)
x(v,"gbGQ","a7J",0)
w(v,"gate","atf",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cd4,B.a6X,B.aqD,B.ayA,B.aBH,B.j8,B.a9o,B.bqV,B.Dy,B.UY])
w(B.cd5,B.cd4)
w(B.b0b,B.a6X)
x(A.i1,[B.cd0,B.cd1,B.cd2,B.cd_,B.cd3,B.cd6,B.cd7,B.cd8,B.cd9,B.cda,B.cdb,B.cdc,B.cdd,B.f2Z,B.fnH,B.fnJ,B.fnI,B.fnW,B.fnX,B.f4h,B.cWc,B.cWe,B.cWd,B.cWh,B.f6g,B.f6K,B.c1R,B.c1Y,B.c1Z,B.c1U,B.c1S,B.c1V,B.c1W,B.fnU,B.fnV,B.dGS,B.dH0,B.dGZ,B.dH_,B.f0b,B.f4t,B.f4u,B.c2f,B.f4w,B.f8p,B.f3a,B.f3b,B.c2k,B.fsm,B.cWb,B.cW9,B.dGO,B.dFK,B.dFQ,B.dG8,B.dFP,B.dGf,B.dGz,B.dGA,B.dGB,B.dG6,B.dGo,B.dGn,B.dGp,B.dGq,B.dGr,B.dGt,B.dGu,B.dGm,B.dFS,B.dFT,B.dFO,B.dG9,B.dG0,B.dFZ,B.dGe,B.dGy,B.dGL,B.dGM,B.cW7,B.cW8,B.cWv,B.cWu,B.cWp,B.cWn,B.cWl,B.cWo,B.cWq,B.cWm,B.cW4,B.cW5,B.cW6,B.cW0,B.cWE,B.cWF,B.cWy,B.c2m,B.c2n,B.f82,B.f8w,B.f8v])
w(B.b0c,B.aqD)
x(A.jk,[B.fnG,B.cWf,B.cWg,B.f6e,B.f6f,B.f6J,B.dFH,B.dGQ,B.dGR,B.dGP,B.dGT,B.dGU,B.dGV,B.dGW,B.dGX,B.dGY,B.dFI,B.dFJ,B.f4v,B.cWa,B.dGb,B.dGc,B.dFL,B.dFM,B.dFR,B.dGC,B.dGD,B.dG5,B.dGg,B.dFV,B.dG7,B.dGs,B.dGh,B.dGi,B.dGj,B.dGk,B.dGl,B.dFU,B.dFN,B.dGa,B.dG3,B.dFX,B.dG1,B.dG2,B.dG4,B.dFW,B.dGd,B.dGv,B.dGw,B.dGx,B.dGJ,B.dGK,B.dGF,B.dGG,B.dGE,B.dGH,B.dGI,B.cWr,B.cWs,B.cWt,B.cWi,B.cWk,B.cWj,B.cW3,B.cW2,B.cW1,B.cVY,B.cVZ,B.cW_,B.cWI,B.cWJ,B.cWK,B.cWL,B.cWM,B.cWN,B.cWP,B.cWO,B.cWw,B.cWx,B.cWz,B.cWA,B.cWB,B.cWC,B.cVX,B.cWH,B.cWG,B.f83])
x(A.mb,[B.a9H,B.Lu,B.a6Y,B.Mx,B.UX,B.Mw,B.Dz])
x(A.ae,[B.WQ,B.SF,B.SJ,B.SG,B.WP,B.SH,B.WR,B.WO,B.NF,B.WT,B.WN,B.WU])
x(A.ag,[B.aw6,B.azX,B.aA_,B.azY,B.aw5,B.azZ,B.aw7,B.aw4,B.awa,B.aw8,B.aw3,B.aw9])
x(A.ar,[B.aa8,B.aw2,B.b9o,B.a9I,B.a9G,B.b9p])
x(A.kw,[B.c1X,B.c1T,B.c20,B.c21,B.foq,B.dG_,B.dFY,B.dGN,B.cWD,B.c2l,B.f8x])
x(A.iG,[B.beG,B.bqA])})()
A.kd(b.typeUniverse,JSON.parse('{"b0b":{"a6X":[]},"b0c":{"aqD":[]},"WQ":{"ae":[],"r":[]},"aw6":{"ag":["WQ"]},"aa8":{"ar":[],"r":[]},"SF":{"ae":[],"r":[]},"SJ":{"ae":[],"r":[]},"azX":{"ag":["SF"]},"aA_":{"ag":["SJ"]},"beG":{"iG":[]},"SG":{"ae":[],"r":[]},"azY":{"ag":["SG"]},"WP":{"ae":[],"r":[]},"SH":{"ae":[],"r":[]},"a9I":{"ar":[],"r":[]},"WR":{"ae":[],"r":[]},"WO":{"ae":[],"r":[]},"NF":{"ae":[],"r":[]},"WT":{"ae":[],"r":[]},"a9G":{"ar":[],"r":[]},"WN":{"ae":[],"r":[]},"WU":{"ae":[],"r":[]},"aw5":{"ag":["WP"]},"bqA":{"iG":[]},"azZ":{"ag":["SH"]},"aw2":{"ar":[],"r":[]},"b9o":{"ar":[],"r":[]},"aw7":{"ag":["WR"]},"aw4":{"ag":["WO"]},"awa":{"ag":["NF"]},"aw8":{"ag":["WT"]},"aw3":{"ag":["WN"]},"aw9":{"ag":["WU"]},"b9p":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tu"),k:x("K0()"),m:x("bt<n,n>"),F:x("qq"),g:x("au<j8?>"),x:x("au<~>"),V:x("M<a9>"),O:x("M<x>"),W:x("M<be>"),Y:x("M<a0<n,Q>>"),t:x("M<a0<n,@>>"),r:x("M<j8>"),w:x("M<+file,name(lf,n)>"),u:x("M<cI>"),s:x("M<n>"),E:x("M<iG>"),a:x("M<dz>"),p:x("M<r>"),Z:x("M<H>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("al<j8>"),j:x("al<@>"),I:x("al<H>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hSv"),af:x("CO"),U:x("j8"),b:x("cp"),C:x("aC"),aK:x("vf"),ab:x("Dy"),br:x("aqD"),v:x("UY"),N:x("n"),X:x("bm<P>"),Q:x("lq"),D:x("dz"),aw:x("cv<n>"),cd:x("a5<a0<n,@>>"),c7:x("r"),ch:x("bM<al<j8>>"),aW:x("bM<dz?>"),aY:x("bM<~>"),cx:x("a9H"),b1:x("bd<al<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayA"),bG:x("aBH"),q:x("mz"),B:x("oR<Dy>"),c6:x("oR<a6Y>"),y:x("Q"),i:x("P"),z:x("@"),S:x("H"),aQ:x("be?"),_:x("al<j8>?"),aL:x("al<@>?"),h:x("a0<n,@>?"),l:x("j8?"),R:x("aC?"),c:x("UY?"),d:x("+answerQr,transfer(n,au<al<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Lu,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9o?"),bk:x("ayA?"),ag:x("aBH?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPV=new A.ax(C.aA,2,C.r,-1)
D.bFs=new A.a8(C.a1,C.a7,C.x,C.Zm,null,null)
D.aRx=new A.o(null,null,null,C.mh,null,D.bFs,C.n)
D.aST=new A.o(null,null,null,C.mh,null,E.EQ,C.n)
D.a7Y=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8U=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9B=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaY=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eDW=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eR_=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cMr=x([D.eDW,C.ar,D.eR_],y.p)
D.baA=new A.fk(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cMr,null)
D.eUU=new A.w("Create your organization",null,C.h8,null,null,null,null,null,null,null,null,null)
D.eHS=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.d_0=x([D.eUU,C.ar,D.eHS],y.p)
D.baI=new A.fk(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d_0,null)
D.eRx=new A.w("Team Member sign-in",null,C.h8,null,null,null,null,null,null,null,null,null)
D.eLl=new A.w("Enter the access code and password from your organization.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cYb=x([D.eRx,C.ar,D.eLl],y.p)
D.baS=new A.fk(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYb,null)
D.bfG=new A.L(16,10,16,28)
D.bfO=new A.L(16,14,16,4)
D.bh1=new A.L(20,0,20,16)
D.bhx=new A.L(20,8,20,16)
D.adv=new A.L(24,22,24,20)
D.Xr=new A.a_(63394,"MaterialIcons",!1)
D.agl=new A.a_(63515,"MaterialIcons",!1)
D.brd=new A.a_(983813,"MaterialIcons",!1)
D.boq=new A.a_(62867,"MaterialIcons",!1)
D.bsb=new A.ac(D.boq,44,C.c,null,null,null)
D.bth=new A.ac(C.rQ,null,C.al,null,null,null)
D.buE=new A.ac(C.iG,18,null,null,null,null)
D.bwi=new A.ac(D.Xr,26,C.c,null,null,null)
D.bwO=new A.ac(C.Eu,null,null,null,null,null)
D.bxm=new A.ac(C.xb,null,null,null,null,null)
D.bys=new A.ac(W.Le,null,null,null,null,null)
D.byN=new A.ac(C.h3,16,null,null,null,null)
D.bC4=new A.ac(C.qk,16,null,null,null,null)
D.bst=new A.ac(C.mD,null,null,null,null,null)
D.bCW=new A.e0(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bst,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxT=new A.ac(C.E3,null,null,null,null,null)
D.bD_=new A.e0(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsO=new A.ac(N.EE,null,null,null,null,null)
D.bD9=new A.e0(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.coE=x([C.eT,C.aW,C.aA],y.O)
D.bHb=new A.a8(C.ax,C.aD,C.x,D.coE,null,null)
D.co9=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nq=x([C.eT,C.aA],y.O)
D.NE=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m3=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cTx=x([C.q3,C.aA],y.O)
D.dIe={iceServers:0}
D.aAC={urls:0}
D.d2A=new A.bt(D.aAC,["stun:stun.l.google.com:19302"],y.m)
D.d2z=new A.bt(D.aAC,["stun:stun1.l.google.com:19302"],y.m)
D.cDH=x([D.d2A,D.d2z],A.aA("M<a0<n,n>>"))
D.d1V=new A.bt(D.dIe,[D.cDH],A.aA("bt<n,@>"))
D.FR=new B.Lu(0,"lanDirect")
D.OS=new B.Lu(1,"cloudStash")
D.ddF=new B.Lu(2,"inlineInstant")
D.OT=new B.Lu(3,"webrtcLink")
D.xR=new B.Lu(4,"videoCloud")
D.eQZ=new A.w("Receive file",null,C.mU,null,null,null,null,null,null,null,null,null)
D.cen=x([E.ai0,C.ab,D.eQZ],y.p)
D.eaK=new A.cC(C.aY,C.b5,C.j,C.m,null,C.p,null,0,D.cen,null)
D.dMz=new A.B(C.ca,D.eaK,null)
D.evv=new A.E(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a__,null,null,null)
D.eEr=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.evv,null,C.L,null,null,null,null,null,null,null)
D.dLV=new A.B(C.zL,D.eEr,null)
D.aWT=new A.cw(C.B,null,null,D.dLV,null)
D.dR_=new A.cE(0,null,0,28,null,null,D.aWT,null)
D.dRh=new B.a6Y(0,"RTCDataChannelConnecting")
D.aFE=new B.a6Y(1,"RTCDataChannelOpen")
D.aFF=new B.a6Y(3,"RTCDataChannelClosed")
D.dRi=new B.Dz(0,"RTCIceConnectionStateNew")
D.dRj=new B.Dz(1,"RTCIceConnectionStateChecking")
D.dRk=new B.Dz(2,"RTCIceConnectionStateCompleted")
D.dRl=new B.Dz(3,"RTCIceConnectionStateConnected")
D.dRm=new B.Dz(4,"RTCIceConnectionStateCount")
D.dRn=new B.Dz(5,"RTCIceConnectionStateFailed")
D.dRo=new B.Dz(6,"RTCIceConnectionStateDisconnected")
D.aFG=new B.Dz(7,"RTCIceConnectionStateClosed")
D.aFH=new B.UX(0,"RTCIceGatheringStateNew")
D.dRp=new B.UX(1,"RTCIceGatheringStateGathering")
D.a2g=new B.UX(2,"RTCIceGatheringStateComplete")
D.a2h=new B.Mw(0,"RTCPeerConnectionStateClosed")
D.aFI=new B.Mw(1,"RTCPeerConnectionStateFailed")
D.aFJ=new B.Mw(2,"RTCPeerConnectionStateDisconnected")
D.aFK=new B.Mw(3,"RTCPeerConnectionStateNew")
D.aFL=new B.Mw(4,"RTCPeerConnectionStateConnecting")
D.aFM=new B.Mw(5,"RTCPeerConnectionStateConnected")
D.dRq=new B.Mx(0,"RTCSignalingStateStable")
D.dRr=new B.Mx(1,"RTCSignalingStateHaveLocalOffer")
D.dRs=new B.Mx(2,"RTCSignalingStateHaveRemoteOffer")
D.dRt=new B.Mx(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dRu=new B.Mx(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFN=new B.Mx(5,"RTCSignalingStateClosed")
D.eei=new A.ap(160,48)
D.aY0=new A.f9(2,null,null,null,null,C.aA,null,null,null,null)
D.efJ=new A.a3(16,16,D.aY0,null)
D.eHj=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eh8=new A.aY(D.eHj,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eO5=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ehb=new A.aY(D.eO5,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVU=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ehi=new A.aY(D.eVU,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eGX=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ehI=new A.aY(D.eGX,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRG=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aI6=new A.aY(D.eRG,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eSW=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eia=new A.aY(D.eSW,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXb=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eip=new A.aY(D.eXb,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVl=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eiu=new A.aY(D.eVl,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWt=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ejf=new A.aY(D.eWt,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eFH=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ejM=new A.aY(D.eFH,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.ePM=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ek6=new A.aY(D.ePM,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eJk=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ekC=new A.aY(D.eJk,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXh=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekG=new A.aY(D.eXh,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eFW=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ekM=new A.aY(D.eFW,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eEL=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.el0=new A.aY(D.eEL,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eBV=new A.w("NGMY DOC SHARE",null,C.aJm,null,null,null,null,null,null,null,null,null)
D.eD5=new A.w("Show this to sender",null,C.kc,null,null,null,null,null,null,null,null,null)
D.eE1=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eIe=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eIx=new A.w("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eJu=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eJU=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eMr=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eP0=new A.w("Send to their Doc Share",null,C.mT,null,null,null,null,null,null,null,null,null)
D.ePj=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ePB=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eQ4=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eQ8=new A.w("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eQv=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eJ,null,null,null,null,null,null,null,null,null)
D.eTm=new A.w("Share files & videos\nwith a scan.",null,C.aJn,null,null,null,null,null,null,null,null,null)
D.eTE=new A.w("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.f2d=new B.WN(null)
D.a58=new B.a9H(0,"docShare")
D.a59=new B.a9H(1,"gate")
D.RC=new B.a9H(2,"gateNoIndividual")})();(function staticFields(){$.aKd=null
$.eWk=function(){var x=y.N
return A.R(x,x)}()
$.EF=A.R(y.N,y.D)
$.adD=A.R(y.N,A.aA("lf"))
$.OX=A.R(y.N,y.D)
$.eWR=A.R(y.N,A.aA("a9o"))
$.c2e=A.R(y.S,A.aA("bqV"))
$.fPo=1
$.hAM=null
$.hAL=null
$.hsJ=null
$.fES=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hT_","h58",()=>new B.cd5())
x($,"hQV","fIk",()=>C.a.q(A.bp(A.bp(A.bp(A.Fb(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["8HXkC5qohPOaC5DFgDbnObd0qKw="]=a.current})($__dart_deferred_initializers__);