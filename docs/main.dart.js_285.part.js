((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,F,H,O,P,E,G,Q,R,S,I,K,B={ctd:function ctd(){},
i2c(d){var x=null,w=new B.b6U(d,D.eFD,new A.pX(x,x,y.c6),new A.pX(x,x,y.B))
w.bCR(d)
return w},
b6U:function b6U(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ct8:function ct8(d){this.a=d},
ct9:function ct9(d){this.a=d},
cta:function cta(d){this.a=d},
ct7:function ct7(d){this.a=d},
ctb:function ctb(d){this.a=d},
i2d(d,e){var x=y.N
x=new B.b6V(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCS(d,e)
return x},
b6V:function b6V(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cte:function cte(d){this.a=d},
ctf:function ctf(d){this.a=d},
ctg:function ctg(d){this.a=d},
cth:function cth(d){this.a=d},
cti:function cti(d){this.a=d},
ctj:function ctj(d){this.a=d},
ctk:function ctk(d){this.a=d},
ctl:function ctl(d){this.a=d},
hgt(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.x8.GW(x,"ngmy_doc_share_v1",new B.fyC(),1)},
i8V(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.er(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wV(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cJ.aL(d)
return x}catch(w){return v}return v},
Sr(d,e){return B.iot(d,e)},
iot(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sr=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQg
x=7
return A.b(o==null?$.aQg=B.hgt():o,$async$Sr)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mp(s,"blobs","readwrite")
C.iE.mh(J.mo(q,"blobs"),r,d)
x=8
return A.b(J.oC(q),$async$Sr)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
Sq(d){return B.ios(d)},
ios(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQg
x=7
return A.b(o==null?$.aQg=B.hgt():o,$async$Sq)
case 7:s=f
r=J.mp(s,"blobs","readonly")
x=8
return A.b(C.iE.xP(J.mo(r,"blobs"),d),$async$Sq)
case 8:q=f
x=9
return A.b(J.oC(r),$async$Sq)
case 9:o=B.i8V(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
ait(d){return B.ior(d)},
ior(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ait=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQg
x=7
return A.b(p==null?$.aQg=B.hgt():p,$async$ait)
case 7:s=f
r=J.mp(s,"blobs","readwrite")
C.iE.Gr(J.mo(r,"blobs"),d)
x=8
return A.b(J.oC(r),$async$ait)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ait,w)},
fyC:function fyC(){},
ibn(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brI(w,v))}return u},
hI5(d,e){var x,w={},v=A.aYW("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fYl(w,v,e)
C.xa.zd(v,"change",new B.fYn(w,v,!1))
C.xa.zd(v,"cancel",new B.fYm(w))
$.eY.mJ()
v.click()
A.bO(C.amf,new B.fYk(w),y.H)},
fYl:function fYl(d,e,f){this.a=d
this.b=e
this.c=f},
fYn:function fYn(d,e,f){this.a=d
this.b=e
this.c=f},
fYm:function fYm(d){this.a=d},
fYk:function fYk(d){this.a=d},
DN(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DN=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUK()?3:4
break
case 3:x=5
return A.b(B.hCI(e,d,s,!0,!1,f,g,h,!1,i),$async$DN)
case 5:x=1
break
case 4:x=6
return A.b(B.S1(d,s,f,g,h,i),$async$DN)
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
return A.b(B.Jr(s,d),$async$DN)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.ftZ(s,d),$async$DN)
case 14:x=12
return A.b(r.hCI(q,p,o,n,m,l,k,j,a1,i),$async$DN)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ef(new B.fYA(s,i,d,f,g,h),!1,null,y.H)),$async$DN)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ef(new B.fYB(s,i,d,f,g,h),!1,null,y.H)),$async$DN)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DN,w)},
S1(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S1=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1F(e),$async$S1)
case 3:u=k
x=4
return A.b(B.arb(d,e,!1),$async$S1)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jr(e,d),$async$S1)
case 7:if(k){v=D.adL
x=1
break}x=8
return A.b(B.Wl(e),$async$S1)
case 8:v=t?D.Xb:D.adM
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1D(d,e)){v=D.adL
x=1
break}x=11
return A.b(B.Wl(e),$async$S1)
case 11:v=t?D.Xb:D.adM
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hbh(d,e)){v=D.adL
x=1
break}x=14
return A.b(B.Wl(e),$async$S1)
case 14:v=D.Xb
x=1
break
case 13:v=t?D.Xb:D.adM
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
ftZ(d,e){var x=0,w=A.j(y.y),v
var $async$ftZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1D(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1F(d),$async$ftZ)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftZ,w)},
hCI(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ef(new B.fBh(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hxw(d,e,f,g,h,i,j){return new B.a_A(e,j,d,g,h,i,f,null)},
fDb(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fDb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDe(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fDb)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDb,w)},
fDG(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fDG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDI(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fDG)
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
return A.i($async$fDG,w)},
hgF(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fQy(d,e){var x=0,w=A.j(y.H),v
var $async$fQy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wl(e),$async$fQy)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).ek()
case 1:return A.h(v,w)}})
return A.i($async$fQy,w)},
fYA:function fYA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYB:function fYB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adI:function adI(d,e){this.a=d
this.b=e},
fBh:function fBh(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_A:function a_A(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBD:function aBD(){this.c=this.a=this.d=null},
ddM:function ddM(d,e){this.a=d
this.b=e},
ddJ:function ddJ(d){this.a=d},
ddL:function ddL(d){this.a=d},
ddK:function ddK(d){this.a=d},
ddO:function ddO(){},
ddN:function ddN(d){this.a=d},
aeb:function aeb(d,e,f,g,h,i){var _=this
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
fDe:function fDe(d,e,f){this.a=d
this.b=e
this.c=f},
fDc:function fDc(d){this.a=d},
fDd:function fDd(d,e,f){this.a=d
this.b=e
this.c=f},
fDI:function fDI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDH:function fDH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceT(d,e,f,g,h){return B.hY3(d,e,f,g,h)},
hY3(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ceT=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.dN(d,new B.ceU(s,e,h,g,f,q),y.g),y.l),$async$ceT)
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
return A.i($async$ceT,w)},
b1A(d,e,f,g,h){return B.hY4(d,e,f,g,h)},
hY4(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1A=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awI("GET",d)
o=A.h7H()
if(o==null)o=new A.MN(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.H3),$async$b1A)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D1(),$async$b1A)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cm(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$b1A,w)},
b1z(d){return B.hY1(d)},
hY1(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vU(d,null).dg(0,C.ov),$async$b1z)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.mj(A.mg(p.e)).cD(0,p.w),null)
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
return A.i($async$b1z,w)},
ceS(d){return B.hY2(d)},
hY2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ceS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vU(d,null).dg(0,C.qE),$async$ceS)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mj(A.mg(q.e)).cD(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ac(o)
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
return A.i($async$ceS,w)},
ceU:function ceU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jK:function jK(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jp(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hY9(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Z(t,u))return B.Jp(C.a.b0(t,u.length))}return null},
hYa(d){var x=B.Jp(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hY5(){var x,w=$.oz(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8f(d){return B.hY6(d)},
hY6(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bN),$async$a8f)
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
a8g(d,e){return B.hY7(d,e)},
hY7(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8g=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hQ(d,e,!1,!1,C.cQ,null),$async$a8g)
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
Cl(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cl)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.u(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jp(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8h(r),$async$Cl)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8f("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cl)
case 7:q=f
s=q==null?null:J.u(q,"code")
p=B.Jp(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cl)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hY5()
x=14
return A.b(B.a8h(m),$async$Cl)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8g("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 15:k=f
x=16
return A.b(B.a8g("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cl)
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
return A.i($async$Cl,w)},
a8h(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jp(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8f("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8h)
case 3:u=f
t=u==null?null:J.u(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
a8i(d,e,f,g){return B.hYb(d,e,f,g)},
hYb(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
break}if(g.cB(d,0,new B.cf_())>1048576||g.aU(d,new B.cf0())){v=B.Fm(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8t("myCode",d,a0),$async$a8i)
case 4:u=a3
try{t=C.W.aP(0,u,null)
if(y.f.b(t)){s=J.u(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fm(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1I(u,g.gJ(d),a0),$async$a8i)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oz().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.cf1(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1B(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8i)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
Fm(d,e,f,g,h){return B.hY8(d,e,f,g,h)},
hY8(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fm=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fm)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cB(a6,0,new B.ceW())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oz().aw(9999)
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
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jt(a9,q)
a0=new A.Lh(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fm)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.f1().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pt(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abX(a1.a,a4,"media",a1.d,a2).xM(m,n,new A.ED(!0,q.c)),$async$Fm)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fm)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSU(r),$async$Fm)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.ceX(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1B(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fm)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSU(r),$async$Fm)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fm,w)},
b1B(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8f(t),$async$b1B)
case 3:s=g
r=y.aL.a(J.u(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.ceV(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8g(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1B,w)},
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
break}s=J.u(t,"deliveries")
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
return A.b(B.b1C(k,a0),$async$Oo)
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
return A.b(B.b1H(h),$async$Oo)
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
e=A.C(new A.Y(r,new B.ceY(),q),n)
d=A.C(new A.Y(r,new B.ceZ(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cY(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8g("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Oo)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1C(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1C=A.e(function(f,g){if(f===1)return A.f(g,w)
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
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.isw(k,j)
C.d.u(s,i)
x=5
return A.b(B.DL(l,m,"Received via My Code",t,e,i),$async$b1C)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSU(s),$async$b1C)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1C,w)},
cf_:function cf_(){},
cf0:function cf0(){},
cf1:function cf1(){},
ceW:function ceW(){},
ceX:function ceX(){},
ceV:function ceV(){},
ceY:function ceY(){},
ceZ:function ceZ(){},
fYx(d,e){var x=0,w=A.j(y.H)
var $async$fYx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ef(new B.fYy(e),!1,null,y.H)),$async$fYx)
case 2:return A.h(null,w)}})
return A.i($async$fYx,w)},
bGT(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ef(new B.fYz(g,e,f),!1,null,y.y)),$async$bGT)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGT,w)},
fYy:function fYy(d){this.a=d},
fYz:function fYz(d,e,f){this.a=d
this.b=e
this.c=f},
Wi:function Wi(d,e){this.c=d
this.a=e},
aFE:function aFE(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e_x:function e_x(d,e){this.a=d
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
e0G:function e0G(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0O:function e0O(d){this.a=d},
e0R:function e0R(){},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
blP:function blP(){},
Wj:function Wj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFF:function aFF(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e_y:function e_y(d){this.a=d},
e_z:function e_z(d){this.a=d},
hbi(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hYd(d){var x=d.l5
if(x>=0)return x
return 4.99},
hYc(d){var x=d.lL,w=y.N
w=x.jp(x,new B.cf3(),w,w)
return w},
hsw(d){var x=d.kI,w=y.N
w=x.jp(x,new B.cf4(),w,w)
return w},
b1F(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1F)
case 7:s=f
r=A.w(p)
r=A.aV(J.u(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b1F,w)},
a8k(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a8k)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a8k)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
Wl(d){var x=0,w=A.j(y.H),v,u
var $async$Wl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wl)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
hbh(d,e){var x,w,v
if(B.hYd(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hYc(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bk(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1D(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hsw(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bk(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
hsx(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hsw(d),x,x)
x=w.h(0,t)
v=A.bk(x==null?"":x)
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
return A.b(A.aA(),$async$arc)
case 7:s=f
r=A.w(p)
r=A.eq(J.u(s.a,"ngmy_doc_share_usage_"+r))
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
return A.b(A.aA(),$async$ard)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$ard)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ard,w)},
arb(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hbi(d)
if(u<=0){v=!1
x=1
break}if(B.hbh(d,e)){v=!1
x=1
break}x=3
return A.b(B.arc(e),$async$arb)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arb,w)},
b1E(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jr(e,d),$async$b1E)
case 3:if(g){v=-1
x=1
break}u=B.hbi(d)
if(u<=0){v=-1
x=1
break}if(B.hbh(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arc(e),$async$b1E)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1E,w)},
cf6(d,e,f){var x=0,w=A.j(y.y),v
var $async$cf6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jr(e,d),$async$cf6)
case 3:if(h){v=!1
x=1
break}v=B.arb(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf6,w)},
cf5(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cf5=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cf6(d,u,i.gUK()),$async$cf5)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf5,w)},
a8j(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8j=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUK()){v=!0
x=1
break}if(B.b1D(d,u)){v=!0
x=1
break}x=5
return A.b(A.lH(u,C.Ut),$async$a8j)
case 5:x=k?3:4
break
case 3:B.hsx(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8j)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lm(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Ut,"Doc Share for Organizations"),$async$a8j)
case 7:if(!k){v=!1
x=1
break}B.hsx(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8j)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
cf3:function cf3(){},
cf4:function cf4(){},
fZx(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fZx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fZx)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fqg.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fqg.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZx,w)},
iuF(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fqg.bq($.fqg,new B.fZz(d))},
fZz:function fZz(d){this.a=d},
frT(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$frT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$frT)
case 3:C.Bv.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frT,w)},
ahn(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fqX.n(0,d,new B.adp(A.br(e,!0,v)))
x=3
return A.b(A.aA(),$async$ahn)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahn)
case 2:return A.h(null,w)}})
return A.i($async$ahn,w)},
ahh(d){return B.idh(d)},
idh(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fqX.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ahh)
case 3:u=j.aV(i.u(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.u(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fvF(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.u(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.adp(r)
$.fqX.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahh,w)},
RS(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.H8.n(0,d,u)
x=3
return A.b(B.Sr(d,u),$async$RS)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RS,w)},
aQB(d){return B.idf(d)},
idf(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H8.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sq(d),$async$aQB)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H8.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQB)
case 4:s=f
r=A.aV(J.u(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cJ.aL(r)
x=!J.ct(q)?9:10
break
case 9:B.RS(d,q)
x=11
return A.b(J.h7(s,d),$async$aQB)
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
return A.i($async$aQB,w)},
i9m(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cc(J.er(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cc(A.wV(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cc(d)),y.K)
return A.f4(null,y.K)},
a35(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a35=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bm($.bF,y.cf)
t=new A.c4(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fBt(r,t),!1,s)
A.fC(r,"error",new B.fBu(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iL(0,C.Ol,new B.fBv())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a35,w)},
aQV(d,e,f){return B.ifE(d,e,f)},
ifE(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQV=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a35(i),$async$aQV)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sr(o,p),$async$aQV)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahn(k,j,s),$async$aQV)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQV,w)},
aQU(d,e,f){return B.ifD(d,e,f)},
ifD(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQU=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQV(d,e,f),$async$aQU)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a35(f),$async$aQU)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H8.n(0,s,r)
$.Sa.n(0,s,r)
x=11
return A.b(B.RS(s,r),$async$aQU)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQU,w)},
Cm(d,e,f,g,h,i){return B.hYm(d,e,f,g,h,i)},
hYm(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cm=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jK(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1L(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RS(s,d),$async$Cm)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cm)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cK.gcn().aL(d)),$async$Cm)
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
return A.b(B.Bf(e),$async$Cm)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hi(e,j),$async$Cm)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cm,w)},
Wn(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wn=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bf(d),$async$Wn)
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
k=B.hsz(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jK(m,n,k,l,j,"From folder",null,B.b1L(),null)
$.ahN.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a35(o),$async$Wn)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H8.n(0,h,g)
$.Sa.n(0,h,g)
B.RS(h,g)
x=9
break
case 10:x=11
return A.b(B.aQU(d,m,o),$async$Wn)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hi(d,t),$async$Wn)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
hbm(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hbm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hsz(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Js(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cm(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbm,w)},
Js(d,e,f,g,h,i){return B.hYl(d,e,f,g,h,i)},
hYl(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
j=new A.Lh(A.dD(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Js)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h1(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SZ(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kQ(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sr(k,l),$async$Js)
case 11:J.c5(q,k);++p
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
return A.b(B.Sr(k,new Uint8Array(A.cc(n))),$async$Js)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahn(r,q,g),$async$Js)
case 16:f=new B.jK(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1L(),null)
x=17
return A.b(B.Bf(d),$async$Js)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hi(d,e),$async$Js)
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
t=$.ahN.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a35(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahh(s),$async$Wp)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sq(u[o]),$async$Wp)
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
v=A.wV(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Sa.h(0,s)
if(i==null)i=$.H8.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t_(d,e),$async$Wp)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.Sa.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wV(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
hsz(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t_(d,e){return B.hYn(d,e)},
hYn(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t_=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Sa.h(0,f)
if(e==null)e=$.H8.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahN.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a35(s),$async$t_)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H8.n(0,f,r)
$.Sa.n(0,f,r)
B.RS(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahh(f),$async$t_)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAn(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sq(g[l]),$async$t_)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqi()
if(!C.aI.gau(r)){$.H8.n(0,f,r)
$.Sa.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQB(f),$async$t_)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.Sa.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wp(a0,a1,0,g),$async$t_)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.H8.n(0,f,h)
$.Sa.n(0,f,h)
B.RS(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t_,w)},
hYq(d){var x,w,v=$.ahN.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hYr(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hYo(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arj(d,e,f,g,h){return B.hYp(d,e,f,g,h)},
hYp(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arj=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahN.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a35(s),$async$arj)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t_(g,e),$async$arj)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f1().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.iE(d).xM(h,r,new A.ED(!0,e.c)),$async$arj)
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
hsB(d,e,f,g,h){var x,w,v,u,t=$.hsA
$.hsA=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfh.n(0,t,new B.byK(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAn(u)))
return t},
hbn(d){var x=0,w=A.j(y.H)
var $async$hbn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbn,w)},
Jt(d,e){var $async$Jt=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahN.h(0,h)
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
return A.qC(B.Wp(d,e,p,o<q?o:q),$async$Jt,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qC(A.GG(n),$async$Jt,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qC(B.ahh("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jt,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qC(B.Sq(h[l]),$async$Jt,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qC(A.GG(k),$async$Jt,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qC(B.t_(d,e),$async$Jt,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qC(A.GG(A.wV(j,p,o<i?o:i)),$async$Jt,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qC(null,0,w)
case 2:return A.qC(t.at(-1),1,w)}})
var x=0,w=A.hBx($async$Jt,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hDs(w)},
b1N(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfh.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5Z(),$async$b1N)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1N,w)},
Wo(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfh.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5Z(),$async$Wo)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahn(r.c,u,r.z),$async$Wo)
case 4:t=new B.jK(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1L(),null)
u=r.a
x=5
return A.b(B.Bf(u),$async$Wo)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hi(u,s),$async$Wo)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wo,w)},
a8q(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfh.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ait(u[s]),$async$a8q)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8q,w)},
cfj(d,e,f){var x=0,w=A.j(y.H)
var $async$cfj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDN(d,e,f),$async$cfj)
case 2:return A.h(null,w)}})
return A.i($async$cfj,w)},
cfk(d,e,f){var x=0,w=A.j(y.H)
var $async$cfk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDO(d,e,f),$async$cfk)
case 2:return A.h(null,w)}})
return A.i($async$cfk,w)},
Fn(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bf(d),$async$Fn)
case 2:p=g
J.nY(p,new B.cfi(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H8.W(0,v)
$.ahN.W(0,e)
x=3
return A.b(B.ahh(v),$async$Fn)
case 3:u=g
$.fqX.W(0,v)
x=4
return A.b(A.aA(),$async$Fn)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fn)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fn)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ait(s[q]),$async$Fn)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ait(v),$async$Fn)
case 13:x=14
return A.b(B.Hi(d,p),$async$Fn)
case 14:return A.h(null,w)}})
return A.i($async$Fn,w)},
b1M(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t_(d,e),$async$b1M)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.frT(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1M,w)},
Bf(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bf)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.u(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fBw(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bf,w)},
Hi(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hi)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fFH(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hi)
case 3:return A.h(null,w)}})
return A.i($async$Hi,w)},
bDN(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bf(d),$async$bDN)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzG(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGr(f))
x=4
return A.b(B.Hi(d,u),$async$bDN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDN,w)},
bDO(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bf(d),$async$bDO)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzH(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPA(f))
x=4
return A.b(B.Hi(d,u),$async$bDO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDO,w)},
adp:function adp(d){this.a=d},
fvF:function fvF(){},
fBt:function fBt(d,e){this.a=d
this.b=e},
fBu:function fBu(d){this.a=d},
fBv:function fBv(){},
cfi:function cfi(d){this.a=d},
byK:function byK(d,e,f,g,h,i,j,k,l){var _=this
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
fBw:function fBw(){},
fFH:function fFH(){},
fzG:function fzG(d){this.a=d},
fzH:function fzH(d){this.a=d},
a8r(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.cfn())?3:4
break
case 3:x=5
return A.b(B.b1O(d,e),$async$a8r)
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
return A.b(B.b1J(s),$async$a8r)
case 10:case 9:if(g){v=new A.Re(1,D.U6,"NGMYDOCSYNC1|"+s)
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
B.Oq(d,D.Ax,e,t)
v=new A.Re(p,D.Ax,t)
x=1
break}v=B.cfm(d,e)
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
t=y.f.b(u)?J.u(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1I(p,d.length,e),$async$Wq)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfk(e,C.d.gH(d).a,r.b),$async$Wq)
case 7:case 6:q=r.a
x=8
return A.b(B.Oq(d,D.U6,e,q),$async$Wq)
case 8:v=new A.Re(d.length,D.U6,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
Wr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Z(d.c,"video/")||d.mQ(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8s(d,e),$async$Wr)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cff(s,d,e,t),$async$Wr)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1J(t),$async$Wr)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t_(e,d),$async$Wr)
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
return A.b(B.hbg(),$async$Wt)
case 2:x=3
return A.b(B.aTg(),$async$Wt)
case 3:return A.h(null,w)}})
return A.i($async$Wt,w)},
a8s(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1L()
x=3
return A.b(B.cfj(e,d.a,u),$async$a8s)
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
t=e===D.U6&&C.a.Z(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b0(u,13)):null
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
return A.b(B.cfe(o,p,u,f),$async$Oq)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cff(o,p,f,t),$async$Oq)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfd(o,u,p,f),$async$Oq)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oq,w)},
b1O(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfl(e,d),$async$b1O)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wv(!1,!0,d,e),$async$b1O)
case 4:u=g
if(u!=null){t=u.b
v=new A.Re(u.a,D.Ax,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1O,w)},
cfl(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wp(d,s,0,1),$async$cfl)
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
return A.i($async$cfl,w)},
cfm(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8t(null,d,e),$async$cfm)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hsy(u)
if(t.length>800){v=null
x=1
break}v=new A.Re(d.length,D.dVG,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfm,w)},
ark(d,e,f){return B.hYu(d,e,f)},
hYu(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ark=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nv(g,1)
x=B.hbl(g)?3:4
break
case 3:x=5
return A.b(B.cfg(g),$async$ark)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nv(g,13))
try{k=B.Fo(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nv(g,13))
u=9
x=12
return A.b(B.b1H(q),$async$ark)
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
o=A.ac(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.hbk(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ws(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Ju(C.a.i(J.nv(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Ju(C.a.i(J.nv(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.aA(k,0,k.length-1)
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
return A.i($async$ark,w)},
Ju(d,e,f){return B.hYs(d,e,f)},
hYs(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ju=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Z(e,"N2|"))e=C.a.i(C.a.b0(e,3))
if(C.a.Z(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b0(e,13))
if(!C.a.Z(e,"http://")&&!C.a.Z(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1z(r),$async$Ju)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1z(A.cD(s,0,null)),$async$Ju)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.u(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.u(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ceT(o,r,a1,n,a2),$async$Ju)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ceS(q),$async$Ju)
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
k=A.ac(d)
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
return A.b(B.t_(f,r),$async$a8t)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cK.gcn().aL(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
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
Ws(d,e){return B.hYt(d,e)},
hYt(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ws=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.W.aP(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.u(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.u(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.u(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.u(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aT(r)
case 7:if(!e.C()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.u(m,"name")
l=J.k(d==null?"file":d)
d=J.u(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.u(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cJ.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cm(i,a3,d,k,l,o),$async$Ws)
case 9:h=a5
if(h!=null)J.c5(n,h)
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
cfn:function cfn(){},
a2E(d){var x=A.P(d).ax.a===C.I,w=x?D.aju:D.agY,v=x?D.alf:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.ais:C.bm
return new A.aII([w,s,v,u,t,x?C.fq:C.bQ])},
hJ7(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h2P(e),d,null,!0,!0,y.N)},
cf2(d,e,f,g,h,i,j,k,l){return new B.Wk(e,l,d,f,k,j,g,h,i,null)},
a_C(d,e,f,g,h,i,j){return new B.bgm(g,h,j,e,i,d,f,null)},
h2P:function h2P(d){this.a=d},
a_z:function a_z(d,e){this.c=d
this.a=e},
aBC:function aBC(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ddI:function ddI(d){this.a=d},
ddG:function ddG(d){this.a=d},
ddH:function ddH(d){this.a=d},
bym:function bym(){},
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
e0E:function e0E(d){this.a=d},
e01:function e01(d,e){this.a=d
this.b=e},
e02:function e02(d,e){this.a=d
this.b=e},
e_B:function e_B(d,e,f){this.a=d
this.b=e
this.c=f},
e_A:function e_A(d){this.a=d},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_H:function e_H(d,e,f){this.a=d
this.b=e
this.c=f},
e_G:function e_G(d){this.a=d},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0t:function e0t(d){this.a=d},
e_Z:function e_Z(d,e,f){this.a=d
this.b=e
this.c=f},
e_W:function e_W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_F:function e_F(d){this.a=d},
e06:function e06(d){this.a=d},
e05:function e05(){},
e_L:function e_L(d){this.a=d},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0q:function e0q(d,e){this.a=d
this.b=e},
e0r:function e0r(d,e){this.a=d
this.b=e},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e0i:function e0i(d,e){this.a=d
this.b=e},
e0e:function e0e(d){this.a=d},
e0d:function e0d(d){this.a=d},
e0f:function e0f(){},
e0g:function e0g(){},
e0h:function e0h(d,e){this.a=d
this.b=e},
e0j:function e0j(){},
e0k:function e0k(d){this.a=d},
e0c:function e0c(d,e){this.a=d
this.b=e},
e07:function e07(d){this.a=d},
e08:function e08(d){this.a=d},
e09:function e09(d){this.a=d},
e0a:function e0a(d){this.a=d},
e0b:function e0b(d){this.a=d},
e_I:function e_I(){},
e_J:function e_J(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_D:function e_D(d,e,f){this.a=d
this.b=e
this.c=f},
e0_:function e0_(d){this.a=d},
e00:function e00(d,e,f){this.a=d
this.b=e
this.c=f},
e_U:function e_U(d,e){this.a=d
this.b=e},
e_Q:function e_Q(d){this.a=d},
e_N:function e_N(d,e,f){this.a=d
this.b=e
this.c=f},
e_R:function e_R(d){this.a=d},
e_S:function e_S(d){this.a=d},
e_T:function e_T(){},
e_V:function e_V(d,e){this.a=d
this.b=e},
e_O:function e_O(d){this.a=d},
e_M:function e_M(d,e,f){this.a=d
this.b=e
this.c=f},
e_P:function e_P(){},
e04:function e04(d){this.a=d},
e03:function e03(d,e){this.a=d
this.b=e},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0l:function e0l(d){this.a=d},
e0m:function e0m(d,e){this.a=d
this.b=e},
e0n:function e0n(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0C:function e0C(){},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0w:function e0w(d,e,f){this.a=d
this.b=e
this.c=f},
e0u:function e0u(d,e,f){this.a=d
this.b=e
this.c=f},
e0x:function e0x(d,e){this.a=d
this.b=e},
e0y:function e0y(d,e){this.a=d
this.b=e},
aBz:function aBz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgl:function bgl(d,e,f){this.c=d
this.d=e
this.a=f},
ddE:function ddE(){},
ddF:function ddF(){},
adJ:function adJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
de1:function de1(){},
de0:function de0(d){this.a=d},
a_B:function a_B(d,e,f){this.c=d
this.d=e
this.a=f},
aBE:function aBE(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
ddY:function ddY(d){this.a=d},
ddZ:function ddZ(d,e,f){this.a=d
this.b=e
this.c=f},
de_:function de_(d,e){this.a=d
this.b=e},
ddW:function ddW(d,e){this.a=d
this.b=e},
ddU:function ddU(d){this.a=d},
ddS:function ddS(d){this.a=d},
ddP:function ddP(d){this.a=d},
ddV:function ddV(d){this.a=d},
ddR:function ddR(d){this.a=d},
ddX:function ddX(d){this.a=d},
ddT:function ddT(d){this.a=d},
ddQ:function ddQ(d){this.a=d},
a_y:function a_y(d,e,f){this.c=d
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
ddB:function ddB(d){this.a=d},
ddA:function ddA(d,e){this.a=d
this.b=e},
ddC:function ddC(d){this.a=d},
ddz:function ddz(d,e){this.a=d
this.b=e},
ddD:function ddD(d){this.a=d},
ddy:function ddy(d,e){this.a=d
this.b=e},
ddu:function ddu(d){this.a=d},
ddv:function ddv(d){this.a=d},
ddw:function ddw(d,e){this.a=d
this.b=e},
ddx:function ddx(d){this.a=d},
QM:function QM(d,e,f){this.c=d
this.d=e
this.a=f},
aBH:function aBH(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dee:function dee(d){this.a=d},
def:function def(d){this.a=d},
deg:function deg(d){this.a=d},
deh:function deh(d){this.a=d},
dei:function dei(d,e){this.a=d
this.b=e},
dej:function dej(d){this.a=d},
del:function del(d){this.a=d},
dek:function dek(d){this.a=d},
a_D:function a_D(d,e,f,g,h){var _=this
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
dea:function dea(d,e){this.a=d
this.b=e},
deb:function deb(d,e){this.a=d
this.b=e},
de2:function de2(d,e,f){this.a=d
this.b=e
this.c=f},
de3:function de3(d){this.a=d},
de4:function de4(){},
de9:function de9(){},
de5:function de5(d,e){this.a=d
this.b=e},
de6:function de6(d,e){this.a=d
this.b=e},
de7:function de7(d,e){this.a=d
this.b=e},
de8:function de8(d,e){this.a=d
this.b=e},
adH:function adH(d,e){this.c=d
this.a=e},
ddt:function ddt(d){this.a=d},
a_x:function a_x(d){this.a=d},
aBA:function aBA(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_E:function a_E(d,e){this.c=d
this.a=e},
aBG:function aBG(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ded:function ded(d){this.a=d},
dec:function dec(d){this.a=d},
bgm:function bgm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hYv(){var x,w=$.oz(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
Or(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Or=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Or)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Or)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.u(s,"relays")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
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
return A.i($async$Or,w)},
a8u(d){return B.hYw(d)},
hYw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8u)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hQ("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$a8u)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
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
t=A.dL(A.a1(q,u,t),u,t)
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
break}if(d)u=A.br(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cfp(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hYv()
t=A.U(u).k("N<1,a9<n,aF>>")
r=A.C(new A.N(u,new B.cfq(s),t),t.k("ak.E"))
x=6
return A.b(B.Or(),$async$Wv)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8u(q),$async$Wv)
case 7:x=8
return A.b(B.a8v(r,u,g,s),$async$Wv)
case 8:v=new A.bsc(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wv,w)},
arl(d){var x=0,w=A.j(y.y),v,u,t
var $async$arl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Or(),$async$arl)
case 3:u=t.u(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.u(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arl,w)},
cfr(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Or(),$async$cfr)
case 3:s=r.u(f,C.a.i(d))
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
return A.i($async$cfr,w)},
a8v(d,e,f,g){return B.hYx(d,e,f,g)},
hYx(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8v=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.u(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arj("media",r,new B.cfo(s,e,g),f,q),$async$a8v)
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
o=A.ac(l)
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
Fo(d,e,f){return B.hYy(d,e,f)},
hYy(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fo=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Z(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fo)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arl(b3),$async$Fo)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iR,null,g),$async$Fo)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arl(b3),$async$Fo)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Or(),$async$Fo)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
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
a8=$.f1().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pt(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abX(a8.a,b0,"media",a8.d,a9).Dm(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1A(k,n,o,s,b7),$async$Fo)
case 17:j=c0
if(j!=null){J.c5(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
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
case 23:a2=J.u(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f1().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pt(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abX(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fo)
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
a0=A.dL(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8u(e),$async$Fo)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fo,w)},
cfp:function cfp(){},
cfq:function cfq(d){this.a=d},
cfo:function cfo(d,e,f){this.a=d
this.b=e
this.c=f},
aTg(){var x=0,w=A.j(y.H),v,u
var $async$aTg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i8F=null
v=y.H
u=A.dN(null,v)
x=2
return A.b(u,$async$aTg)
case 2:u=A.dN(null,v)
x=3
return A.b(u,$async$aTg)
case 3:u=$.hgR
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dN(u,v),$async$aTg)
case 4:$.hgR=$.ihs=$.iht=null
return A.h(null,w)}})
return A.i($async$aTg,w)},
fFi(d){var x=0,w=A.j(y.H),v,u
var $async$fFi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aao){x=1
break}u=new A.bm($.bF,y.d4)
d.c=new B.fFj(new A.c4(u,y.aY))
x=3
return A.b(u.iL(0,C.id,new B.fFk()),$async$fFi)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fFi,w)},
ihq(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hYf(x):x},
hgV(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Z(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.Z(u,"WR")){v=B.arn(u)
x=1
break}v=B.hbk(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgV,w)},
hgU(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Z(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.Z(u,"WR")){v=B.aro(u)
x=1
break}v=B.hbk(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgU,w)},
fZg(d){var x=0,w=A.j(y.T),v
var $async$fZg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aro(d),$async$fZg)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZg,w)},
bEJ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hgU(d),$async$bEJ)
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
return A.i($async$bEJ,w)},
fsG(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fsG=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wo(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cm(d.aqi(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsG,w)},
Hk(d,e,f){return B.ijI(d,e,f)},
ijI(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hk=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hgV(a1),$async$Hk)
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
if(C.a.Z(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b0(o,13))
m=C.a.Z(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hL7().aGI(D.dHR,null),$async$Hk)
case 4:l=d.hgR=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAn(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bm($.bF,y.b1)
l.y=new B.fFU(f,k,new B.fFV(f,a2,k,j,a0,p),a2,j,a0,p,new A.c4(t,y.ch))
x=5
return A.b(l.a91(0,new B.YE(r,"offer")),$async$Hk)
case 5:d=l
x=7
return A.b(l.amI(0),$async$Hk)
case 7:x=6
return A.b(d.a8U(0,a4),$async$Hk)
case 6:x=8
return A.b(B.fFi(l),$async$Hk)
case 8:x=9
return A.b(l.ar4(),$async$Hk)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ihq(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arp(m,h),$async$Hk)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hsy(h)
case 11:v=new A.brs(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hk,w)},
fFj:function fFj(d){this.a=d},
fFk:function fFk(){},
fFV:function fFV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFU:function fFU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fFT:function fFT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ilN(d){switch(d){case"new":return D.eFE
case"checking":return D.eFF
case"connected":return D.eFH
case"completed":return D.eFG
case"failed":return D.eFJ
case"disconnected":return D.eFK
case"closed":return D.aSn
case"count":return D.eFI}return D.aSn},
ilO(d){switch(d){case"new":return D.aSo
case"gathering":return D.eFL
case"complete":return D.aao}return D.aSo},
iwd(d){switch(d){case"stable":return D.eFM
case"have-local-offer":return D.eFN
case"have-local-pranswer":return D.eFP
case"have-remote-offer":return D.eFO
case"have-remote-pranswer":return D.eFQ
case"closed":return D.aSu}return D.aSu},
ium(d){switch(d){case"new":return D.aSr
case"connecting":return D.aSs
case"connected":return D.aSt
case"closed":return D.aap
case"disconnected":return D.aSq
case"failed":return D.aSp}return D.aap},
aaT:function aaT(d,e){this.a=d
this.b=e},
Px:function Px(d,e){this.a=d
this.b=e},
YD:function YD(d,e){this.a=d
this.b=e},
Pw:function Pw(d,e){this.a=d
this.b=e},
FT:function FT(d,e){this.a=d
this.b=e},
ctc:function ctc(){},
hd5(d){var x=new B.FS()
x.a=d
x.b=!0
return x},
FS:function FS(){this.b=this.a=$},
aaS:function aaS(){},
avT:function avT(){},
YE:function YE(d,e){this.a=d
this.b=e},
hbg(){var x=0,w=A.j(y.H)
var $async$hbg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbg,w)},
hbj(d,e,f){var x=0,w=A.j(y.T),v
var $async$hbj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Z(e.c,"video/")||e.mQ(D.n7))){v=null
x=1
break}v=B.fZx(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbj,w)},
hsy(d){var x,w=F.agm.a5I(C.dV.aL(d),null)
if(w.length===0){x=C.dV.aL(d)
return C.cK.gcn().aL(x)}return C.cK.gcn().aL(w)},
hYe(d){var x,w,v=C.cJ.aL(d)
try{x=C.cb.cD(0,F.agl.bgA(v,!1))
return x}catch(w){x=C.cb.cD(0,v)
return x}},
hbk(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Z(t,s))return B.hYe(C.a.b0(t,s.length))
w=e+"|"
if(C.a.Z(t,w)){x=C.a.b0(t,w.length)
try{v=C.cb.cD(0,C.cJ.aL(x))
return v}catch(u){return x}}return null},
hYf(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.Z(t,"a=extmap"))continue
if(C.a.Z(t,"a=ssrc"))continue
if(C.a.Z(t,"a=msid"))continue
if(C.a.Z(t,"a=rtcp"))continue
if(C.a.Z(t,"a=rtpmap"))continue
if(C.a.Z(t,"a=fmtp"))continue
if(C.a.Z(t,"a=rtcp-fb"))continue
if(C.a.Z(t,"a=mid:"))continue
if(C.a.Z(t,"a=group:"))continue
if(C.a.Z(t,"a=setup:"))continue
if(C.a.Z(t,"a=ice-options:"))continue
if(C.a.Z(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hYg(){var x,w=$.oz(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1G(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1G)
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
return A.i($async$b1G,w)},
cf7(d,e){return B.hYh(d,e)},
hYh(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cf7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hQ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cQ,null),$async$cf7)
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
return A.i($async$cf7,w)},
b1J(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1G(d),$async$b1J)
case 3:t=f
if(t!=null){u=J.u(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1J,w)},
b1I(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1I=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hYg()
r=C.a.i(f)
t=C.dV.aL(s)
x=3
return A.b(B.cf7(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cK.gcn().aL(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1I)
case 3:if(!h){v=null
x=1
break}v=new A.a1E("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1I,w)},
b1H(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1G(o),$async$b1H)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.u(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cD(0,C.cJ.aL(u))
if(J.j6(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1H,w)},
cf8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cf8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bFF("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cQ),$async$cf8)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cf8,w)},
b1K(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jq(),$async$b1K)
case 3:u=t.u(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1K,w)},
arg(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$arg)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.u(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1K(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arg,w)},
are(d,e){var x=0,w=A.j(y.H)
var $async$are=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$are)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$are)
case 2:return A.h(null,w)}})
return A.i($async$are,w)},
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
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8l(s),$async$a8m)
case 5:x=6
return A.b(B.are(f,u),$async$a8m)
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
break}q=J.u(r,"ownerEmail")
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
return A.b(B.are(g,q),$async$a8n)
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
case 4:u=o.u(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1D(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8o)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8o)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
cf9(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cf9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cf9)
case 7:s=f
p=A.w(n)
r=A.aV(J.u(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cf9,w)},
Jr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cf9(d),$async$Jr)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.u(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1K(t),$async$Jr)
case 4:s=g
x=s==null||!J.z(J.u(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arf(d),$async$Jr)
case 7:v=!1
x=1
break
case 6:u=J.u(s,"ownerEmail")
u=B.b1D(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arf(d),$async$Jr)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jr,w)},
arf(d){var x=0,w=A.j(y.H)
var $async$arf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$arf)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arf)
case 2:return A.h(null,w)}})
return A.i($async$arf,w)},
b1L(){var x,w=$.oz(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8p(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hbl(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfc(d){return B.hYj(d)},
hYj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8p(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfc)
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
return A.i($async$cfc,w)},
ari(d,e){return B.hYk(d,e)},
hYk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ari=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8p(d)
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
s=A.ac(o)
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
cfe(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8p(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ari(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfe)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfe,w)},
cfd(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfd=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8p(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ari(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfd,w)},
cff(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cff=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8p(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ari(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cff,w)},
cfg(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hbl(d)){v=null
x=1
break}x=3
return A.b(B.cfc(d),$async$cfg)
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
return A.i($async$cfg,w)},
a8w(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8w=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8w)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8w)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.u(s,"signals")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
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
return A.i($async$a8w,w)},
arm(d){return B.hYz(d)},
hYz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
s=A.ac(q)
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
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arn)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8w(),$async$arn)
case 4:s=f
r=J.u(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.u(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cD(0,C.cJ.aL(q))
if(J.j6(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a1(r,m,l),m,l)
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
n=A.ac(i)
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
return A.b(B.a8w(),$async$arp)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a1(s,r,q),r,q)
r=C.dV.aL(C.a.i(e))
q.n(0,"answer",C.cK.gcn().aL(r))
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
return A.b(B.a8w(),$async$aro)
case 4:s=o.u(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.u(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cD(0,C.cJ.aL(u))
v=r
x=1
break}catch(n){t=A.ac(n)
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
if(!(p instanceof A.qr)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$aqf)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aqf)
case 7:q=g
o=q
o=o==null?null:J.eR(J.tw(o))
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
isw(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fXr(d){return B.isy(d)},
isy(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fXr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").Lz(d,3600),$async$fXr)
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
return A.i($async$fXr,w)},
DL(d,e,f,g,h,i){var x=null
return B.isv(d,e,f,g,h,i)},
isv(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DL=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hsB(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hbn(r),$async$DL)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fXr(o),$async$DL)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8q(r),$async$DL)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aW2)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MN(A.a([],g))
x=15
return A.b(d.f9(0,A.awI("GET",A.cD(n,0,null))).dg(0,C.H3),$async$DL)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8q(r),$async$DL)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lh(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DL)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1N(r,k),$async$DL)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DL)
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
j=A.ac(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a8q(r),$async$DL)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DL,w)},
aSU(d){return B.isx(d)},
isx(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").W(0,d),$async$aSU)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSU,w)}},D,T,L,U,V,W,X,M,Y
J=c[1]
A=c[0]
C=c[2]
N=c[48]
F=c[271]
H=c[153]
O=c[240]
P=c[241]
E=c[231]
G=c[96]
Q=c[201]
R=c[154]
S=c[238]
I=c[276]
K=c[284]
B=a.updateHolder(c[22],B)
D=c[282]
T=c[200]
L=c[221]
U=c[75]
V=c[265]
W=c[81]
X=c[63]
M=c[95]
Y=c[283]
B.ctd.prototype={
aGI(d,e){return this.cR4(d,e)},
cR4(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.u(0,d)
u=new q(A.kn(A.cv(t)))
t=J.k(u)
v=B.i2d(C.cK.gcn().aL(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGI,w)}}
B.b6U.prototype={
bCR(d){var x=this,w=x.w
w.onclose=A.hw(new B.ct8(x))
w.onopen=A.hw(new B.ct9(x))
w.onmessage=A.hw(new B.cta(x))
w.onbufferedamountlow=A.hw(new B.ctb(x))},
gd2(d){return this.x},
aiX(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FS()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hd5(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$aiX)
case 8:v=t.hd5(s.apo(f,0,null))
x=1
break
case 7:case 4:v=B.hd5(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiX,w)}}
B.b6V.prototype={
bCS(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hw(new B.cte(x)))
w.addEventListener("icecandidate",A.hw(new B.ctf(x)))
w.addEventListener("iceconnectionstatechange",A.hw(new B.ctg(x)))
w.onicegatheringstatechange=A.hw(new B.cth(x))
w.addEventListener("signalingstatechange",A.hw(new B.cti(x)))
if(!$.hl1())w.addEventListener("connectionstatechange",A.hw(new B.ctj(x)))
w.addEventListener("negotiationneeded",A.hw(new B.ctk(x)))
w.addEventListener("track",A.hw(new B.ctl(x)))},
amI(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kn(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amI)
case 3:t=f
v=new B.YE(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amI,w)},
a8U(d,e){return this.brN(0,e)},
brN(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8U)
case 2:return A.h(null,w)}})
return A.i($async$a8U,w)},
a91(d,e){return this.bs7(0,e)},
bs7(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a91=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a91)
case 2:return A.h(null,w)}})
return A.i($async$a91,w)},
ar4(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ar4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YE(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar4,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f4(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.adI.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_A.prototype={
S(){return new B.aBD()},
gd1(){return this.c}}
B.aBD.prototype={
Y(){this.a3()
this.afs()},
afs(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1E(u.e,u.c),$async$afs)
case 2:t=e
if(v.c!=null)v.m(new B.ddM(v,t))
return A.h(null,w)}})
return A.i($async$afs,w)},
Rb(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arb(t.e,t.c,!1),$async$Rb)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.ftu)
x=1
break}x=4
return A.b(B.a8k(u.a.c,"individual"),$async$Rb)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7g(A.ef(new B.ddJ(u),!1,null,y.H)),$async$Rb)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rb,w)},
JU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fDb(o),$async$JU)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8o(o.e,r,s,q),$async$JU)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqt)
x=1
break}x=5
return A.b(B.a8k(u.a.c,"member"),$async$JU)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7g(A.ef(new B.ddL(u),!1,null,y.H)),$async$JU)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JU,w)},
yK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8j(t.e,o,t.f,t.r,t.w,s),$async$yK)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8k(u.a.c,"org_owner"),$async$yK)
case 4:x=5
return A.b(B.arg(u.a.c),$async$yK)
case 5:r=e
x=r==null||!J.z(J.u(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fDG(o),$async$yK)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8m(s,t,o,q.c),$async$yK)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqp)
x=1
break}x=10
return A.b(B.arg(u.a.c),$async$yK)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7g(A.ef(new B.ddK(u),!1,null,y.H)),$async$yK)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yK,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I,q=r?C.ny:C.qr,p=B.hbi(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fND,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hl,s,s,s),C.aB,D.h6G,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.ccu,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m4(new B.ddO(),s),C.P,v,C.e4,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeb(C.eY,C.aES,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gck6(),s),C.af],u))
w.push(new B.aeb(C.pA,C.a5M,"Team Member","Sign in with your organization access code + password",t.gckY(),s))
w.push(C.af)
w.push(new B.aeb(C.aqR,C.a7r,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckt(),s))
return A.c6(s,q,A.bn(!0,A.ca(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.Q(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeb.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.lZ,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zs,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bT,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEh.prototype={}
B.aHs.prototype={}
B.jK.prototype={
mQ(d){var x=this.b,w=C.a.pe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b0(x,w+1).toLowerCase())},
garM(){var x=this.d
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
bg3(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jK(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPA(d){return this.bg3(null,d)},
aGr(d){return this.bg3(d,null)}}
B.Wi.prototype={
S(){return new B.aFE(new A.cx(null,y.A))},
gd1(){return this.c}}
B.aFE.prototype={
Y(){this.a3()
this.aft()},
aft(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aft=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cl(u.a.c),$async$aft)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e_x(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aft,w)},
afu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fx(s)),$async$afu)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fup)
case 1:return A.h(v,w)}})
return A.i($async$afu,w)},
a_V(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_V=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqf(s.d,4),$async$a_V)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rq(r,"ngmy_my_code_"+m+".png"),$async$a_V)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_V,w)},
ajo(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abw("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajo,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.ny:C.qr,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,I.a6c,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.ant,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nd,w,C.lb,new A.e8(A.p(p,A.qj(p,p,!1,B.hYa(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bT,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.ep(M.DD,p,C.Wy,q.gccm(),p),1),C.as,A.E(A.df(C.zU,p,C.acK,q.gccn(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.T,new A.a5(1/0,p,A.ep(L.a4x,p,D.h2d,q.gczR(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,U.ao1,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.Wm.prototype={
S(){return new B.aFH(new A.au(C.aw,$.ax()),A.kf(!0,null,!0,!0,null,null,!1))}}
B.aFH.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jp(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a2()},
a_W(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_W=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jp(u.d.a.a)
if(t==null){u.m(new B.e0G(u))
x=1
break}u.m(new B.e0H(u))
s=u.a
r=s.c
x=3
return A.b(B.a8i(s.d,new B.e0I(u),t,r),$async$a_W)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e0J(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_W,w)},
a39(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a39=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e0K(r))
u=4
q=J.fn(r.a.d)
x=7
return A.b(B.t_(r.a.c,q),$async$a39)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e0L(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajc(p,m,l,j,k),$async$a39)
case 8:o=e
if(r.c!=null)r.m(new B.e0M(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e0N(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e0O(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a39,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aju:D.agY,h=j?D.alf:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.ais:C.bm
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eS(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c_v,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,I.a6c,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uZ(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blP()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.OH,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e0P(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mB,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Ms(l.a.d,4)
m=A.C(new A.N(m,new B.e0Q(x,new A.aII(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.p(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.foV)
else q.push(A.X(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cU(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.o(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bHU,k,k,C.ah),1)
u=l.f?k:l.gczS()
t=i[3]
s=i[1]
q=A.l(16)
s=A.ep(L.a4x,k,D.h3k,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.ba(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcco()
t=A.bp(C.aD,k,k,0,C.c,k,C.nF,k,new A.ba(A.l(16),C.a1),k,k,k)
return A.c6(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bn(!0,A.lJ(new B.e0R(),A.x(A.a([e,new A.D(D.bHn,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.tY:D.h1A,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.ck,C.a0O,k,k,new A.bs(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blP.prototype={
pa(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.ho(C.bB,v.length),C.aP)}}
B.Wj.prototype={
S(){return new B.aFF()}}
B.aFF.prototype={
Y(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.bb(w,C.b7,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.bb(x,C.b7,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.aw,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.V$=$.ax()
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
afv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e_y(r))
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
return A.b(B.a8n(p,m,n,o,C.a.i(l).length===0?null:l),$async$afv)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fu0)
s=[1]
x=4
break}p.K(y.q).f.T(D.fsC)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e_z(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afv,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.ny:C.qr,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fUW,s,s,s,1,s,!0),p=A.p(s,D.bzp,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.Is,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c6R,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c71,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gccp()
u=A.bp(C.aD,s,s,s,s,C.hg,s,s,s,s,s,s)
return A.c6(q,r,A.ca(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bJ(t.r?C.tY:C.aYT,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adp.prototype={}
B.byK.prototype={
a5Z(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5Z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.aqi()))
x=3
return A.b(B.Sr(t,s),$async$a5Z)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5Z,w)},
gd1(){return this.a}}
B.Op.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_z.prototype={
S(){return new B.aBC(new A.au(C.aw,$.ax()),A.kf(!0,null,!0,!0,null,null,!1))}}
B.aBC.prototype={
Y(){this.a3()
$.aU.x1$.push(new B.ddI(this))},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a2()},
ccv(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2E(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.aty,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.aun,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uZ(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bym()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CM,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b75),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.ddG(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mB,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cN(Q.Mq,new A.bN(new A.o(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wJ,A.x(A.a([l,C.aO,k,C.P,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dW(C.o7,new B.ddH(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.ba(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bN(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aD.j(0.35),C.cM,12)],n),K.QI,C.n),C.bk,A.aG(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ez1,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccu(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OQ,w,C.d7,w,w,w)}}
B.bym.prototype={
pa(d,e){return e.amC(e.a.toUpperCase())}}
B.Wk.prototype={
S(){return new B.aFG(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFG.prototype={
Y(){var x=this
x.a3()
x.us()
x.w=A.dh(C.jJ,new B.e0E(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wt()
this.a2()},
a22(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a22=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oo(u.a.c),$async$a22)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bf(u.a.c),$async$a22)
case 4:u.m(new s.e01(u,e))
u.ip("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a22,w)},
us(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$us=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oo(u.a.c),$async$us)
case 3:t=e
x=4
return A.b(B.Bf(u.a.c),$async$us)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e02(u,s))
if(t>0)u.ip("Received "+A.w(t)+" file(s) via My Code.")
u.Ol(u.d)
B.Cl(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$us,w)},
Ol(d){return this.bGU(d)},
bGU(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ol=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8s(r,u.a.c),$async$Ol)
case 8:p=f
if(u.c==null){x=1
break}new B.e_B(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.Z(r.c,"video/")||r.mQ(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wr(r,u.a.c),$async$Ol)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bf(u.a.c),$async$Ol)
case 12:u.m(new o.e_C(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Ol,w)},
OL(d){return this.bNf(d)},
bNf(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8s(d,u.a.c),$async$OL)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e_H(u,d,t))
x=6
return A.b(A.fI(new A.fx(t)),$async$OL)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fx(r.toUpperCase())),$async$OL)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OL,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
ut(d,e){return this.cKP(d,e)},
cKP(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ut=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e0s(r,e))
u=3
x=6
return A.b(d.$0(),$async$ut)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e0t(r))
$.eY.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ut,w)},
gaYf(){var x=this.a
return x.f||x.r||x.w},
IK(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYf()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cf5(s,n,r,q,o,t),$async$IK)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fQy(o,u.a.c),$async$IK)
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
return A.b(B.DN(s,o,r,q,n,t),$async$IK)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IK,w)},
a16(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a16=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arg(u.a.c),$async$a16)
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
return A.b(A.a6(t,!1).ce(A.ef(new B.e_Z(u,r,q),!1,null,y.H)),$async$a16)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a16,w)},
a2c(d){return this.cto(d)},
ctn(){return this.a2c(1)},
cto(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYf()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ard(u.a.c),$async$a2c)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2c,w)},
adk(d,e,f){return this.c3g(d,e,f)},
c3g(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.ut(new B.e_W(u,d,null,e,f),"Uploading\u2026"),$async$adk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adk,w)},
bH2(){B.hI5(!1,new B.e_F(this))
return},
cys(){this.m(new B.e06(this))},
aAV(){var x=0,w=A.j(y.H),v=this
var $async$aAV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bH2()
return A.h(null,w)}})
return A.i($async$aAV,w)},
adg(){var x=0,w=A.j(y.H),v=this
var $async$adg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e_L(v),"Importing\u2026"),$async$adg)
case 2:return A.h(null,w)}})
return A.i($async$adg,w)},
Tf(d){return this.cK8(d)},
cK8(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Z(t,"video/")||d.mQ(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ef(new B.e0p(u,d),!1,null,y.H)),$async$Tf)
case 5:x=1
break
case 4:x=C.a.Z(t,"image/")||d.mQ(D.SK)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ef(new B.e0q(u,d),!1,null,y.H)),$async$Tf)
case 8:x=1
break
case 7:x=u.c3Z(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ef(new B.e0r(u,d),!1,null,y.H)),$async$Tf)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tf,w)},
c3Z(d){var x,w
if(C.a.Z(d.c,"audio/"))return!0
x=d.b
w=C.a.pe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cVW,C.a.b0(x,w+1).toLowerCase())},
ah6(d){return this.cka(d)},
cka(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ah6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Z(d.c,"video/")||d.mQ(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ef(new B.e_X(u,d),!1,null,y.H)),$async$ah6)
case 5:x=1
break
case 4:u.m(new B.e_Y(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ah6,w)},
SB(d){return this.cBl(d)},
cBl(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pF(t,s.c,s.f),$async$SB)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e0i(u,d),"Preparing QR\u2026"),$async$SB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SB,w)},
ajO(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0j(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e0k(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SB(r),$async$ajO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajO,w)},
ajH(d){return this.cAT(d)},
cAT(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2E(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0c(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajH)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tf(d)
break
case"qr":u.SB(A.a([d],y.r))
break
case"send_my_code":u.ckN(A.a([d],y.r))
break
case"save":u.aj4(d)
break
case"delete":u.JD(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajH,w)},
YG(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_I(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_J(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pF(t,s.c,s.f),$async$YG)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e_K(u,r),"Preparing file\u2026"),$async$YG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YG,w)},
aib(d){return this.crH(d)},
crH(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aib=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hJ7(d,!1),$async$aib)
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
return A.i($async$aib,w)},
ahc(){var x=0,w=A.j(y.H),v=this,u
var $async$ahc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fYx(u,v.a.c),$async$ahc)
case 2:return A.h(null,w)}})
return A.i($async$ahc,w)},
bH1(){B.hI5(!1,new B.e_E(this,null))
return},
JT(d,e){return this.ckO(d,e)},
b3P(d){return this.JT(null,d)},
ckN(d){return this.JT(d,null)},
ckO(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e0_(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xS.cq().apo(!0,C.a2z,!1),$async$JT)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.ut(new B.e00(l,s,r),"Preparing\u2026"),$async$JT)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
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
return A.b(B.bGT(p,l,e,s.a.c),$async$JT)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JT,w)},
J_(d){return this.c33(d)},
c33(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Z(q,"NGMYDOCRCV|")||C.a.Z(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hY9(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3P(t),$async$J_)
case 8:x=6
break
case 7:u.ip("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ip("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Z(d,"NGMYDOCSYNC3|")||C.a.Z(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.ut(new B.e_U(u,d),"Receiving video\u2026"),$async$J_)
case 11:x=1
break
case 10:x=12
return A.b(u.ut(new B.e_V(u,d),"Receiving\u2026"),$async$J_)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J_,w)},
EQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DG()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aib(t),$async$EQ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J_(s),$async$EQ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ef(new B.e04(u),!1,null,y.N)),$async$EQ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.us(),$async$EQ)
case 10:x=1
break
case 9:x=11
return A.b(u.J_(C.a.i(r)),$async$EQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EQ,w)},
aj4(d){return this.cx_(d)},
cx_(d){var x=0,w=A.j(y.H),v=this
var $async$aj4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e03(v,d),"Saving\u2026"),$async$aj4)
case 2:return A.h(null,w)}})
return A.i($async$aj4,w)},
JD(d){return this.bPB(d)},
bPB(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lv(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JD)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cf8(t),$async$JD)
case 6:case 5:s=d.a
x=7
return A.b(B.Fn(u.a.c,s),$async$JD)
case 7:u.r.W(0,s)
x=8
return A.b(u.us(),$async$JD)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JD,w)},
ajU(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2E(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0o(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajU)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahc()
break
case"import":u.adg()
break}case 1:return A.h(v,w)}})
return A.i($async$ajU,w)},
ccs(d){var x=d.c
if(C.a.Z(x,"video/")||d.mQ(D.n7))return C.qW
if(C.a.Z(x,"image/")||d.mQ(D.SK))return C.v4
if(C.a.q(x,"pdf"))return P.I8
return D.arf},
B(d){var x,w,v=this,u=null,t=B.a2E(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.Ik,u,u,u,new B.e0z(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c05,u,u,u,v.e?u:v.gcku(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyr()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bVi:E.arD,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a4u,u,u,u,v.e?u:v.gcct(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb4V(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c1T,u,u,u,v.e?u:new B.e0A(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m4(new B.e0B(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kw(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBz(C.ju,s,!0,t,w?u:v.gcBm(),u),1)
x.push(new A.D(D.bG7,A.lJ(new B.e0C(),A.A(A.a([s,C.as,A.E(new B.aBz(C.tl,"Export",!1,t,w?u:v.gbTu(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.ck,C.iB,u,u,new A.bs(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgl(t,v.e?u:v.gb4V(),u)
else s=A.kx(!0,u,u,new B.e0D(v,t),s,u,D.bG_,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBz.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.t8,t,new A.ba(s,C.a1),t,t,t)
return A.df(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t8,t,new A.ba(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ep(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgl.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lJ(new B.ddE(),new A.D(E.a1G,A.x(A.a([A.lJ(new B.ddF(),A.p(x,A.X(C.zw,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ed,C.hO,x,x,new A.bs(0.86,1,w),s),C.e4,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.df(C.oQ,x,D.h7_,this.d,A.bp(C.aD,x,x,x,C.c,x,C.OO,x,new A.ba(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.Cy,x,x,new A.bs(0,1,w),s),x,x,x)}}
B.adJ.prototype={
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
o=!C.a.Z(p,"video/")
if(!o||i.mQ(D.n7))p=D.dwB
else{p=C.a.Z(p,"image/")||i.mQ(D.SK)
n=y.O
p=p?A.a([C.cW,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garM()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.ax,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mQ(D.n7)))l.push(A.h91(C.aD,!1,j,j,j,!1,j,j,new B.de0(k),j,j,new A.ba(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oI,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lJ(new B.de1(),new A.D(C.el,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a19,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.ck,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bs(0,1,y.X),y.i)}}
B.a_B.prototype={
S(){return new B.aBE()},
gd1(){return this.c}}
B.aBE.prototype={
Y(){this.a3()
this.yA()},
t(){B.hYo(this.e)
this.a2()},
yA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t_(o.c,o.d),$async$yA)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hYr(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hYq(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.ddY(s))
x=1
break}s.m(new B.ddZ(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.de_(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yA,w)},
a38(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a38=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t_(t.c,t.d),$async$a38)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fr_)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajc(q,s,t.length===0?"image/jpeg":t,null,s),$async$a38)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a38,w)},
c2X(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kK(u,C.z,v,new B.ddW(w,t),C.h2,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fX(t,C.z,v,new B.ddX(w),C.h2,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v4(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2E(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DF,u,u,u,v.gb8H(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FY
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.df(C.DF,u,D.fQ5,v.gb8H(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c2X()}return A.c6(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_y.prototype={
S(){return new B.aBB(A.aka(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBB.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a3(w).k("fB<1>")).iF(new B.ddB(v))
x.gcYI().iF(new B.ddC(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a3(x).k("fB<1>"))}if(x==null)x=C.bdv
x.iF(new B.ddD(v))
v.yA()},
yA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t_(p.c,p.d),$async$yA)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.ddu(s))
x=1
break}x=8
return A.b(s.d.vv(0,new A.a4O(r,s.a.d.c)),$async$yA)
case 8:if(s.c==null){x=1
break}s.m(new B.ddv(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.ddw(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yA,w)},
a_X(){var x=0,w=A.j(y.H),v=this,u
var $async$a_X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a_X)
case 5:x=3
break
case 4:x=6
return A.b(u.iK(0),$async$a_X)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_X,w)},
aW3(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2E(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FY
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bWe,C.f,o,o,new A.o(o,o,o,A.l(24),o,K.QI,C.n),o,88,o,o,o,o,o,88)
t=A.l5(C.aD,o,o,m,0,new B.ddx(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aW3(p.w)+" / "+p.aW3(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.fnl,o,o,o,o,o,o)
r=p.f
q=A.X(r?H.v8:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.df(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccw(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c6(v,w,A.as(new A.D(C.qJ,x,o),o,o,o),o,!1,!1,o,o)}}
B.QM.prototype={
S(){return new B.aBH()},
gd1(){return this.c}}
B.aBH.prototype={
Y(){this.a3()
this.Qt()},
Qt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hbj(o.c,o.d,new B.dee(s)),$async$Qt)
case 7:r=e
if(r==null||r.length===0){s.m(new B.def(s))
x=1
break}s.e=r
q=N.ikD(r)
if(q==null){s.m(new B.deg(s))
x=1
break}s.d=q
q.aV(0,s.gb3D())
x=8
return A.b(q.iY(0).dg(0,C.t4),$async$Qt)
case 8:if(s.c==null){x=1
break}s.m(new B.deh(s))
x=9
return A.b(q.qv(0),$async$Qt)
case 9:q.u2(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.dei(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qt,w)},
ciJ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dej(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DB(0,x.gb3D())
w=x.d
if(w!=null)w.t()
B.iuF(x.e)
x.a2()},
afy(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1M(u.c,u.d),$async$afy)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afy,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2E(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aI(t,t,t,t,C.oP,t,t,t,u.gccq(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.im(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FY
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajB(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AL(s,t),A.az(t,A.xA(A.p(t,A.X(q?H.v8:C.he,C.c,t,t,t,48),C.f,t,t,new A.o(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bT,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.del(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c6(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_D.prototype={
S(){return new B.aBF(new A.cx(null,y.A))}}
B.aBF.prototype={
gcKw(){var x,w,v=this.a
if(v.e!==D.U7)return null
x=C.a.i(v.c)
if(!C.a.Z(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.Z(w,"WR"))return w
return null},
gcK6(){var x,w,v=this.a
if(v.e!==D.Ax)return null
x=C.a.i(v.c)
if(!C.a.Z(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.Z(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcKw()
if(x!=null){v.RC(x)
v.e=A.dh(R.H6,new B.dea(v,x))}w=v.gcK6()
if(w!=null){v.RB(w)
v.f=A.dh(C.fM,new B.deb(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RB(d){return this.cpU(d)},
cpU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arl(d),$async$RB)
case 3:t=f
x=4
return A.b(B.cfr(d),$async$RB)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.de2(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RB,w)},
RC(d){return this.cpV(d)},
cpV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fZg(d),$async$RC)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEJ(t),$async$RC)
case 4:if(u.c==null){x=1
break}u.m(new B.de3(u))
u.c.K(y.q).f.T(D.aVC)
case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
gc8g(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccr(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2V(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2V=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DG()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fua)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ef(new B.de4(),!1,null,y.N)),$async$a2V)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEJ(s),$async$a2V)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aVC)
case 1:return A.h(v,w)}})
return A.i($async$a2V,w)},
ab8(d){return this.bNg(d)},
bNg(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fx(C.d.aN(t,", "))),$async$ab8)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ab8,w)},
afw(d){return this.bMZ(d)},
bMZ(d){var x=0,w=A.j(y.H),v=this
var $async$afw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fx(v.a.c)),$async$afw)
case 2:if(d.e!=null)d.K(y.q).f.T(D.frt)
return A.h(null,w)}})
return A.i($async$afw,w)},
a2P(d){return this.cx1(d)},
cx1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqf(s.d,4),$async$a2P)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rq(r,"ngmy_doc_share_qr.png"),$async$a2P)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2P,w)},
gaZv(){var x,w=this.a
if(w.e!==D.Jz)return null
x=C.a.i(w.c)
if(C.a.Z(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.Z(x,"http://")||C.a.Z(x,"https://"))return x
if(C.a.Z(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
ab5(d){return this.bN9(d)},
bN9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZv()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fx(C.a.Z(t,"http")?t:"N2|"+t)),$async$ab5)
case 3:if(d.e!=null)d.K(y.q).f.T(D.ft9)
case 1:return A.h(v,w)}})
return A.i($async$ab5,w)},
afx(){var x=0,w=A.j(y.H),v=this,u
var $async$afx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wt(),$async$afx)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afx,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2E(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jz&&i!==D.U7&&i!==D.Ax
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jz||t===D.U7||t===D.Ax?l:A.aI(l,l,l,l,C.ls,l,l,l,m.gb1A(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qj(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8g(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jz){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccr(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c5U,D.fZK,new B.de5(m,d),l)],p))}if(m.a.e===D.Jz&&m.gaZv()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c2e,D.fWk,new B.de6(m,d),l)],p))
if(m.a.e===D.Ax){x=(m.w?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.h.ad(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.G1:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}if(m.a.e===D.U7){x=(m.r?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.G1:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l),C.af,A.df(D.bYH,l,D.h1U,m.gcxo(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oU(i,A.c6(v,w,new A.D(C.ac,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b9,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(M.DD,l,C.Wy,new B.de7(m,d),l),1),C.as,A.E(A.df(C.zU,l,C.acK,new B.de8(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bb,l,m.gb1A(),A.bp(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.de9(),y.C)}}
B.adH.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.p(x,A.qj(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bJ(C.Bc,x,new B.ddt(d),x)],u),x,x,C.no,v,x,x,x,x,D.fP3,x)}}
B.a_x.prototype={
S(){return new B.aBA(A.zV(C.yO,C.oe,C.vl))}}
B.aBA.prototype={
t(){this.d.t()
this.a2()},
azu(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Z(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c6(A.eS(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fWS,x,x,x,1,x,!0),C.w,A.zU(this.d,C.bX,this.gazt()),x,!1,!1,x,x)}}
B.a_E.prototype={
S(){return new B.aBG(A.zV(C.yO,C.oe,C.vl))},
gd1(){return this.c}}
B.aBG.prototype={
c40(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Z(x,"NGMYDOCSYNC")||C.a.Z(x,"N2|")||C.a.Z(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahz(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MT("text/plain"),$async$ahz)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fu4)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahz,w)},
abX(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hJ7(p,!0),$async$abX)
case 3:t=e
p=t==null
s=B.a8p(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fqA)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$abX,w)},
t(){this.d.t()
this.a2()},
azu(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c40(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.asD,v,v,v,w.gbSY(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4B,v,v,v,w.gcnf(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.v0:O.PX,v,v,v,v,v),v,v,v,new B.ded(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h2P,v,v,v,1,v,!0)
u=A.zU(w.d,C.bX,w.gazt())
x=A.l(20)
return A.c6(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eFj],s),v),v,!1,!1,v,v)}}
B.bgm.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pq
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pq:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1M,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aaT.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Px.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YD.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pw.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FT.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ctc.prototype={}
B.FS.prototype={}
B.aaS.prototype={}
B.avT.prototype={}
B.YE.prototype={}
var z=a.updateTypes(["aB<~>()","R(jK)","n(jK)","Wk(Z)","~()","a_A(Z)","G(G,jK)","QM(Z)","~(mr)","cu(FS)","aB<jK?>(@)","Wi(Z)","Wm(Z)","D(jK)","jK(@)","a9<n,@>(jK)","a_z(Z)","Wj(Z)","a_B(Z)","a_y(Z)","a_D(Z)","adH(Z)","ai<jK>()","a_E(Z)","adJ(Z,G)","a_x(Z)","a9<n,aF>(jK)","cu(YD)","cu(aaS)","aB<cu>(FS)"])
B.ct8.prototype={
$1(d){var x=this.a
x.x=D.aSm
x.y.I(0,D.aSm)},
$S:74}
B.ct9.prototype={
$1(d){var x=this.a
x.x=D.aSl
x.y.I(0,D.aSl)},
$S:74}
B.cta.prototype={
$1(d){var x=this.a
x.aiX(A.ahZ(d.data)).bG(new B.ct7(x),y.b)},
$S:74}
B.ct7.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ctb.prototype={
$1(d){},
$S:74}
B.cte.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i2c(d.channel))},
$S:16}
B.ctf.prototype={
$1(d){},
$S:16}
B.ctg.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ilN(w.iceConnectionState)
x.cx=w
if($.hl1())switch(w.a){case 0:x.cy=D.aSr
break
case 1:x.cy=D.aSs
break
case 3:x.cy=D.aSt
break
case 5:x.cy=D.aSp
break
case 6:x.cy=D.aSq
break
case 7:x.cy=D.aap
break
default:break}},
$S:107}
B.cth.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ilO(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.cti.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iwd(w.signalingState)},
$S:107}
B.ctj.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ium(w.connectionState)},
$S:107}
B.ctk.prototype={
$1(d){},
$S:107}
B.ctl.prototype={
$1(d){},
$S:16}
B.fyC.prototype={
$1(d){var x=y.F.a(new A.qz([],[]).o4(d.target.result,!1)),w=C.wA.q(x.objectStoreNames,"blobs")
if(!w)C.wx.Gm(x,"blobs")},
$S:161}
B.fYl.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xa.fs(this.b)
$.eY.mJ()
this.c.$1(d)},
$S:429}
B.fYn.prototype={
$1(d){return this.a.$1(B.ibn(this.b,this.c))},
$S:30}
B.fYm.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fYk.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fYA.prototype={
$1(d){var x=this
return B.hxw(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fYB.prototype={
$1(d){var x=this
return B.hxw(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fBh.prototype={
$1(d){var x=this
return B.cf2(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.ddM.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ddJ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf2(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.ddL.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf2(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.ddK.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf2(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.ddO.prototype={
$4(d,e,f,g){var x=null
return A.k5(A.A(A.a([A.aI(x,x,x,x,D.bXj,x,x,x,new B.ddN(d),x,x,x,x,x,x),A.E(A.FE(D.St,!0,x,!1,C.a3E,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.St,x,g,C.aoi,0,e,f)},
$C:"$4",
$R:4,
$S:419}
B.ddN.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDe.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eU,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.p(v,D.bzJ,C.f,v,v,D.b8L,v,v,v,v,D.ao7,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0H,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.CO,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asT,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dW(C.ds,new B.fDc(d),v),1),C.as,A.E(A.bJ(D.fVj,v,new B.fDd(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.H9,v,v,v,v),v)},
$S:63}
B.fDc.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDd.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.frK)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEh(v,x))},
$S:0}
B.fDI.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eU,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bzz,C.f,w,w,D.bag,w,w,w,w,D.ao7,w,w,1/0),new A.D(C.CO,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hgF(u,"Organization name",C.HI,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hgF(u,"Access code",C.mk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hgF(u,"Member password",C.DC,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h2W,w,new B.fDH(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.H9,w,w,w,w),w)},
$S:63}
B.fDH.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.frP)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHs(u,x,w))},
$S:0}
B.ceU.prototype={
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
p=C.a.Z(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vU(p,null).dg(0,C.a0N),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cm(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cf_.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cf0.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cf1.prototype={
$1(d){return d.b},
$S:z+2}
B.ceW.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceX.prototype={
$1(d){return d.b},
$S:z+2}
B.ceV.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.ceY.prototype={
$1(d){var x=J.u(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.ceZ.prototype={
$1(d){var x=J.u(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fYy.prototype={
$1(d){return new B.Wi(this.a,null)},
$S:z+11}
B.fYz.prototype={
$1(d){return new B.Wm(this.a,this.b,this.c,null)},
$S:z+12}
B.e_x.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e0G.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e0H.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e0I.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e0F(x,d))},
$S:2}
B.e0F.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0J.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0K.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e0L.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e0M.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0N.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e0O.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0R.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:103}
B.e0P.prototype={
$1(d){var x=this.a
return x.f?null:x.a_W()},
$S:2}
B.e0Q.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.Z(s,"image/")||d.mQ(D.SK))s=C.v4
else s=C.a.Z(s,"video/")||d.mQ(D.n7)?C.qW:D.arf
x=this.b.a
w=y.p
return new A.D(C.kC,A.A(A.a([A.p(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garM(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e_y.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e_z.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cf3.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.cf4.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.fZz.prototype={
$2(d,e){return e===this.a},
$S:339}
B.fvF.prototype={
$1(d){return J.k(d)},
$S:17}
B.fBt.prototype={
$1(d){var x=this.b
B.i9m(C.Hv.ga7B(this.a)).bG(x.gCb(x),y.H)},
$S:130}
B.fBu.prototype={
$1(d){return this.a.dd(0,null)},
$S:130}
B.fBv.prototype={
$0(){return null},
$S:11}
B.cfi.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fBw.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
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
return new B.jK(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fFH.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fzG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzH.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfn.prototype={
$1(d){return C.a.Z(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.h2P.prototype={
$1(d){return new B.a_z(this.a,null)},
$S:z+16}
B.ddI.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:8}
B.ddG.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.ddH.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0E.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a22()},
$S:12}
B.e01.prototype={
$0(){var x=J.bHY(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e02.prototype={
$0(){var x=J.bHY(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_B.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_A(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGr(this.c)}},
$S:0}
B.e_A.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_C.prototype={
$0(){var x=J.bHY(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_H.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_G(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGr(this.c)}},
$S:0}
B.e_G.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0s.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e0t.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e_Z.prototype={
$1(d){return new B.Wj(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e_W.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IK(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wn(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.us(),$async$$0)
case 5:s=J.a8(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a2c(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_F.prototype={
$1(d){this.a.adk(d,"No files selected.","Added")},
$S:429}
B.e06.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e05(),A.U(x).k("N<1,n>")))},
$S:0}
B.e05.prototype={
$1(d){return d.a},
$S:z+2}
B.e_L.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xS.cq().d_G(C.a2z,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jP(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ac(j)
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ip("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Z(m,"NGMYDOCSYNC")&&!C.a.Z(m,"{")){s.a.ip("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ark(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.us(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e0p.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e0q.prototype={
$1(d){return new B.a_B(this.a.a.c,this.b,null)},
$S:z+18}
B.e0r.prototype={
$1(d){return new B.a_y(this.a.a.c,this.b,null)},
$S:z+19}
B.e_X.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e_Y.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0i.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IK(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8r(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ctn(),$async$$0)
case 5:x=6
return A.b(p.us(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e0e(p),r),new B.e0f(),r.k("N<ak.E,n>")).c_(0,new B.e0g())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ef(new B.e0h(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pE(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wt(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0e.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e0d(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e0d.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0f.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e0g.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0h.prototype={
$1(d){var x=this.a
return new B.a_D(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e0j.prototype={
$1(d){return d.a},
$S:z+2}
B.e0k.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0c.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kB,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garM(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Z(p.c,"video/")
w=!x||p.mQ(D.n7)?C.tp:C.nP
p=!x||p.mQ(D.n7)?"Play video":"View"
return new A.bN(new A.o(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bn(!0,new A.D(C.CK,A.x(A.a([q,o,t,C.aB,B.a_C(!1,u,!1,w,p,new B.e07(d),v),B.a_C(!1,u,!1,C.ju,"Share via QR",new B.e08(d),"Letters/numbers QR code"),B.a_C(!1,u,!1,D.a3J,"Send to their Code",new B.e09(d),"Enter someone else's personal code"),B.a_C(!1,u,!1,C.hC,"Download / save",new B.e0a(d),v),C.am,B.a_C(!1,u,!0,C.ej,"Delete",new B.e0b(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:588}
B.e07.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e08.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e09.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e0a.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e0b.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e_I.prototype={
$1(d){return d.a},
$S:z+2}
B.e_J.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_K.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8t(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hm(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pE(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_E.prototype={
$1(d){var x=this.a
x.ut(new B.e_D(x,d,this.b),"Preparing\u2026")},
$S:429}
B.e_D.prototype={
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
return A.b(B.bGT(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0_.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e00.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hbm(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_U.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hk(new B.e_Q(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e_R(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e_S(s))
case 5:x=8
return A.b(r.b.iL(0,C.H3,new B.e_T()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.us(),$async$$0)
case 9:s.ip("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_Q.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_N(x,d,e))},
$S:239}
B.e_N.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_R.prototype={
$1(d){return new B.adH(this.a.a,null)},
$S:z+21}
B.e_S.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e_T.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e_V.prototype={
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
return A.b(u.a.b3P(B.Jp(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ark(new B.e_O(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hbl(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Z(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.us(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e_P()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_O.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_M(x,d,e))},
$S:239}
B.e_M.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_P.prototype={
$1(d){return C.a.Z(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.e04.prototype={
$1(d){return new B.a_E(this.a.a.c,null)},
$S:z+23}
B.e03.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1M(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0o.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.o(v[2],x,new A.bH(new A.ay(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bn(!0,new A.D(C.CK,A.x(A.a([A.as(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kB,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_C(!0,w,!1,C.mk,"My Code",new B.e0l(d),"Your personal code & QR \u2014 others send docs to you"),B.a_C(!1,w,!1,D.a3J,"Send to their Code",new B.e0m(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_C(!1,w,!1,S.zM,"Import backup",new B.e0n(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:588}
B.e0l.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e0m.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bH1()},
$S:0}
B.e0n.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e0B.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jz(D.St,x,C.a3E,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cT(C.d.gH(D.St).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:500}
B.e0z.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0A.prototype={
$0(){this.a.ajU()
return null},
$S:0}
B.e0C.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*10)),e)},
$S:103}
B.e0D.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adJ(e,w,v,this.b,x.e,x.ccs(w),new B.e0v(x,w),new B.e0w(x,v,w),new B.e0x(x,w),new B.e0y(x,w),null)},
$S:z+24}
B.e0v.prototype={
$0(){this.a.ah6(this.b)
return null},
$S:0}
B.e0w.prototype={
$0(){var x=this.a
return x.m(new B.e0u(x,this.b,this.c))},
$S:0}
B.e0u.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0x.prototype={
$0(){this.a.OL(this.b)
return null},
$S:0}
B.e0y.prototype={
$0(){this.a.ajH(this.b)
return null},
$S:0}
B.ddE.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*18)),e)},
$S:103}
B.ddF.prototype={
$3(d,e,f){return A.e4(C.z,f,e,null,null)},
$S:110}
B.de1.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:103}
B.de0.prototype={
$1(d){return this.a.y.$0()},
$S:85}
B.ddY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.ddZ.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.de_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.ddW.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fX(w,C.z,x,new B.ddU(this.a),C.h2,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.ddV(this.a))
return C.bM},
$S:136}
B.ddU.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddS(this.a))
return C.bM},
$S:200}
B.ddS.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddP(x))},
$S:8}
B.ddP.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddV.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddR(x))},
$S:8}
B.ddR.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddX.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddT(this.a))
return C.bM},
$S:200}
B.ddT.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddQ(x))},
$S:8}
B.ddQ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddB.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddA(x,d))},
$S:1774}
B.ddA.prototype={
$0(){return this.a.f=this.b===C.vI},
$S:0}
B.ddC.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddz(x,d))},
$S:8}
B.ddz.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ddD.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddy(x,d))},
$S:8}
B.ddy.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ddu.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.ddv.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ddw.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.ddx.prototype={
$1(d){return this.a.d.NG(0,A.dx(0,0,0,C.h.U(d),0,0))},
$S:6}
B.dee.prototype={
$0(){var x=this.a.a
return B.t_(x.c,x.d)},
$S:1775}
B.def.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.deg.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.deh.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dei.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dej.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.del.prototype={
$0(){var x=this.a
x.m(new B.dek(x))},
$S:0}
B.dek.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.dea.prototype={
$1(d){return this.a.RC(this.b)},
$S:12}
B.deb.prototype={
$1(d){return this.a.RB(this.b)},
$S:12}
B.de2.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.de3.prototype={
$0(){return this.a.r=!0},
$S:0}
B.de4.prototype={
$1(d){return D.hEB},
$S:z+25}
B.de9.prototype={
$2(d,e){if(d)B.Wt()},
$S:124}
B.de5.prototype={
$0(){return this.a.ab8(this.b)},
$S:0}
B.de6.prototype={
$0(){return this.a.ab5(this.b)},
$S:0}
B.de7.prototype={
$0(){return this.a.afw(this.b)},
$S:0}
B.de8.prototype={
$0(){return this.a.a2P(this.b)},
$S:0}
B.ddt.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.ded.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.dec(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dec.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfp.prototype={
$1(d){return C.a.Z(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.cfq.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfo.prototype={
$2(d,e){return this.bnB(d,e)},
bnB(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wu(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1776}
B.fFj.prototype={
$1(d){if(d===D.aao&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fFk.prototype={
$0(){},
$S:11}
B.fFV.prototype={
bpb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fsG(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hsB(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpb(d,e)},
$S:722}
B.fFU.prototype={
$1(d){var x=this
d.b=new B.fFT(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fFT.prototype={
$1(d){return this.bpa(d)},
bpa(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1N(n,m),$async$$1)
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
break}n=J.u(r,"type")
q=J.k(n==null?"":n)
x=J.z(q,"meta")?13:15
break
case 13:n=J.u(r,"name")
n=J.k(n==null?"file":n)
m=J.u(r,"mime")
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
return A.b(B.fsG(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.ac(j)
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
x(v=B.aBD.prototype,"gck6","Rb",0)
x(v,"gckY","JU",0)
x(v,"gckt","yK",0)
x(v=B.aFE.prototype,"gccm","afu",0)
x(v,"gccn","a_V",0)
x(v,"gczR","ajo",0)
x(v=B.aFH.prototype,"gcco","a_W",0)
x(v,"gczS","a39",0)
x(B.aFF.prototype,"gccp","afv",0)
x(B.aBC.prototype,"gccu","ccv",4)
x(v=B.aFG.prototype,"gcku","a16",0)
x(v,"gcyr","cys",4)
x(v,"gb4V","aAV",0)
x(v,"gcBm","ajO",0)
x(v,"gbTu","YG",0)
x(v,"gcct","EQ",0)
x(B.aBE.prototype,"gb8H","a38",0)
x(B.aBB.prototype,"gccw","a_X",0)
x(v=B.aBH.prototype,"gb3D","ciJ",4)
x(v,"gccq","afy",0)
x(v=B.aBF.prototype,"gcxo","a2V",0)
x(v,"gb1A","afx",0)
w(B.aBA.prototype,"gazt","azu",8)
x(v=B.aBG.prototype,"gcnf","ahz",0)
x(v,"gbSY","abX",0)
w(v,"gazt","azu",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.ctc,B.aaS,B.avT,B.aEh,B.aHs,B.jK,B.adp,B.byK,B.FS,B.YE])
w(B.ctd,B.ctc)
w(B.b6U,B.aaS)
x(A.ht,[B.ct8,B.ct9,B.cta,B.ct7,B.ctb,B.cte,B.ctf,B.ctg,B.cth,B.cti,B.ctj,B.ctk,B.ctl,B.fyC,B.fYl,B.fYn,B.fYm,B.fYA,B.fYB,B.fBh,B.ddJ,B.ddL,B.ddK,B.ddO,B.fDe,B.fDI,B.ceU,B.cf0,B.cf1,B.ceX,B.ceV,B.ceY,B.ceZ,B.fYy,B.fYz,B.e0I,B.e0R,B.e0P,B.e0Q,B.fvF,B.fBt,B.fBu,B.cfi,B.fBw,B.fFH,B.fzG,B.fzH,B.cfn,B.h2P,B.ddI,B.ddG,B.e0E,B.e_A,B.e_G,B.e_Z,B.e_F,B.e05,B.e0p,B.e0q,B.e0r,B.e_X,B.e0e,B.e0d,B.e0f,B.e0g,B.e0h,B.e0j,B.e0k,B.e0c,B.e_I,B.e_J,B.e_E,B.e0_,B.e_R,B.e_P,B.e04,B.e0o,B.e0B,B.e0C,B.ddE,B.ddF,B.de1,B.de0,B.ddW,B.ddU,B.ddS,B.ddV,B.ddX,B.ddT,B.ddB,B.ddC,B.ddD,B.ddx,B.dea,B.deb,B.de4,B.cfp,B.cfq,B.fFj,B.fFU,B.fFT])
w(B.b6V,B.avT)
x(A.iT,[B.fYk,B.ddM,B.ddN,B.fDc,B.fDd,B.fDH,B.e_x,B.e0G,B.e0H,B.e0F,B.e0J,B.e0K,B.e0L,B.e0M,B.e0N,B.e0O,B.e_y,B.e_z,B.fBv,B.ddH,B.e01,B.e02,B.e_B,B.e_C,B.e_H,B.e0s,B.e0t,B.e_W,B.e06,B.e_L,B.e_Y,B.e0i,B.e07,B.e08,B.e09,B.e0a,B.e0b,B.e_K,B.e_D,B.e00,B.e_U,B.e_N,B.e_S,B.e_T,B.e_V,B.e_M,B.e03,B.e0l,B.e0m,B.e0n,B.e0z,B.e0A,B.e0v,B.e0w,B.e0u,B.e0x,B.e0y,B.ddY,B.ddZ,B.de_,B.ddP,B.ddR,B.ddQ,B.ddA,B.ddz,B.ddy,B.ddu,B.ddv,B.ddw,B.dee,B.def,B.deg,B.deh,B.dei,B.dej,B.del,B.dek,B.de2,B.de3,B.de5,B.de6,B.de7,B.de8,B.ddt,B.ded,B.dec,B.fFk])
x(A.l8,[B.adI,B.Op,B.aaT,B.Px,B.YD,B.Pw,B.FT])
x(A.af,[B.a_A,B.Wi,B.Wm,B.Wj,B.a_z,B.Wk,B.a_B,B.a_y,B.QM,B.a_D,B.a_x,B.a_E])
x(A.ah,[B.aBD,B.aFE,B.aFH,B.aFF,B.aBC,B.aFG,B.aBE,B.aBB,B.aBH,B.aBF,B.aBA,B.aBG])
x(A.aw,[B.aeb,B.aBz,B.bgl,B.adJ,B.adH,B.bgm])
x(A.jE,[B.cf_,B.ceW,B.cf3,B.cf4,B.fZz,B.e_Q,B.e_O,B.e0D,B.de9,B.cfo,B.fFV])
x(A.jc,[B.blP,B.bym])})()
A.j1(b.typeUniverse,JSON.parse('{"b6U":{"aaS":[]},"b6V":{"avT":[]},"a_A":{"af":[],"v":[]},"aBD":{"ah":["a_A"]},"aeb":{"aw":[],"v":[]},"Wi":{"af":[],"v":[]},"Wm":{"af":[],"v":[]},"aFE":{"ah":["Wi"]},"aFH":{"ah":["Wm"]},"blP":{"jc":[]},"Wj":{"af":[],"v":[]},"aFF":{"ah":["Wj"]},"a_z":{"af":[],"v":[]},"Wk":{"af":[],"v":[]},"adJ":{"aw":[],"v":[]},"a_B":{"af":[],"v":[]},"a_y":{"af":[],"v":[]},"QM":{"af":[],"v":[]},"a_D":{"af":[],"v":[]},"adH":{"aw":[],"v":[]},"a_x":{"af":[],"v":[]},"a_E":{"af":[],"v":[]},"aBC":{"ah":["a_z"]},"bym":{"jc":[]},"aFG":{"ah":["Wk"]},"aBz":{"aw":[],"v":[]},"bgl":{"aw":[],"v":[]},"aBE":{"ah":["a_B"]},"aBB":{"ah":["a_y"]},"aBH":{"ah":["QM"]},"aBF":{"ah":["a_D"]},"aBA":{"ah":["a_x"]},"aBG":{"ah":["a_E"]},"bgm":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("mL"),k:x("MR()"),o:x("bq<n,n>"),F:x("rz"),g:x("aB<jK?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<t>"),W:x("O<bl>"),Y:x("O<a9<n,R>>"),t:x("O<a9<n,@>>"),r:x("O<jK>"),w:x("O<+file,name(lY,n)>"),u:x("O<cT>"),s:x("O<n>"),E:x("O<jc>"),a:x("O<dH>"),p:x("O<v>"),Z:x("O<G>"),G:x("bl"),A:x("cx<ah<af>>"),n:x("ai<jK>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bB<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iC"),e:x("iAh"),af:x("F3"),U:x("jK"),b:x("cu"),C:x("aF"),aK:x("wI"),ab:x("FS"),br:x("avT"),v:x("YE"),N:x("n"),X:x("bs<F>"),Q:x("ma"),D:x("dH"),aw:x("bg<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c4<ai<jK>>"),aW:x("c4<dH?>"),aY:x("c4<~>"),cx:x("adI"),b1:x("bm<ai<jK>>"),cf:x("bm<dH?>"),d4:x("bm<~>"),c4:x("aEh"),bG:x("aHs"),q:x("mf"),B:x("pX<FS>"),c6:x("pX<aaT>"),y:x("R"),i:x("F"),z:x("@"),S:x("G"),aQ:x("bl?"),_:x("ai<jK>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jK?"),R:x("aF?"),c:x("YE?"),d:x("+answerQr,transfer(n,aB<ai<jK>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Op,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dH?"),cm:x("adp?"),bk:x("aEh?"),ag:x("aHs?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b75=new A.ay(C.aD,2,C.r,-1)
D.cax=new A.a7(C.a5,C.a9,C.x,C.a5M,null,null)
D.b8L=new A.o(null,null,null,C.mJ,null,D.cax,C.n)
D.bag=new A.o(null,null,null,C.mJ,null,E.Is,C.n)
D.agY=new A.t(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ais=new A.t(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aju=new A.t(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alf=new A.t(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fPY=new A.B("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h3T=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.Fd,null,null,null,null,null,null,null,null,null)
D.dnq=x([D.fPY,C.am,D.h3T],y.p)
D.bzp=new A.fp(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dnq,null)
D.h8o=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fUv=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Fd,null,null,null,null,null,null,null,null,null)
D.dES=x([D.h8o,C.am,D.fUv],y.p)
D.bzz=new A.fp(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dES,null)
D.h4y=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fYt=new A.B("Enter the access code and password from your organization.",null,G.Fd,null,null,null,null,null,null,null,null,null)
D.dCA=x([D.h4y,C.am,D.fYt],y.p)
D.bzJ=new A.fp(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCA,null)
D.bG_=new A.Q(16,10,16,28)
D.bG7=new A.Q(16,14,16,4)
D.bHn=new A.Q(20,0,20,16)
D.bHU=new A.Q(20,8,20,16)
D.ao7=new A.Q(24,22,24,20)
D.a3J=new A.a_(63394,"MaterialIcons",!1)
D.arf=new A.a_(63515,"MaterialIcons",!1)
D.bVi=new A.a_(983813,"MaterialIcons",!1)
D.bSq=new A.a_(62867,"MaterialIcons",!1)
D.bWe=new A.ae(D.bSq,44,C.c,null,null,null)
D.bXj=new A.ae(C.kb,null,C.ab,null,null,null)
D.bYH=new A.ae(C.jv,18,null,null,null,null)
D.c_v=new A.ae(D.a3J,26,C.c,null,null,null)
D.c05=new A.ae(C.Dr,null,null,null,null,null)
D.c0H=new A.ae(C.Dz,null,null,null,null,null)
D.c1T=new A.ae(W.a3U,null,null,null,null,null)
D.c2e=new A.ae(C.hR,16,null,null,null,null)
D.c5U=new A.ae(C.to,16,null,null,null,null)
D.bWw=new A.ae(C.mk,null,null,null,null,null)
D.c6M=new A.e9(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1e=new A.ae(C.HI,null,null,null,null,null)
D.c6R=new A.e9(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c1e,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bWR=new A.ae(C.DC,null,null,null,null,null)
D.c71=new A.e9(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cWx=x([C.fq,C.b2,C.aD],y.O)
D.ccu=new A.a7(C.ay,C.aC,C.x,D.cWx,null,null)
D.cVW=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.St=x([C.fq,C.aD],y.O)
D.SK=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dwB=x([C.mR,C.aD],y.O)
D.erx={iceServers:0}
D.aMS={urls:0}
D.dIL=new A.bq(D.aMS,["stun:stun.l.google.com:19302"],y.o)
D.dIK=new A.bq(D.aMS,["stun:stun1.l.google.com:19302"],y.o)
D.dcH=x([D.dIL,D.dIK],A.at("O<a9<n,n>>"))
D.dHR=new A.bq(D.erx,[D.dcH],A.at("bq<n,@>"))
D.Jz=new B.Op(0,"lanDirect")
D.U6=new B.Op(1,"cloudStash")
D.dVG=new B.Op(2,"inlineInstant")
D.U7=new B.Op(3,"webrtcLink")
D.Ax=new B.Op(4,"videoCloud")
D.h3S=new A.B("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLC=x([E.at1,C.ae,D.h3S],y.p)
D.fif=new A.c8(C.aM,C.b9,C.i,C.l,null,C.p,null,0,D.cLC,null)
D.ez1=new A.D(C.co,D.fif,null)
D.fGk=new A.H(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.IX,null,null,null)
D.fQx=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fGk,null,C.K,null,null,null,null,null,null,null)
D.eyc=new A.D(C.CR,D.fQx,null)
D.beQ=new A.cj(C.z,null,null,D.eyc,null)
D.eFj=new A.cK(0,null,0,28,null,null,D.beQ,null)
D.eFD=new B.aaT(0,"RTCDataChannelConnecting")
D.aSl=new B.aaT(1,"RTCDataChannelOpen")
D.aSm=new B.aaT(3,"RTCDataChannelClosed")
D.eFE=new B.FT(0,"RTCIceConnectionStateNew")
D.eFF=new B.FT(1,"RTCIceConnectionStateChecking")
D.eFG=new B.FT(2,"RTCIceConnectionStateCompleted")
D.eFH=new B.FT(3,"RTCIceConnectionStateConnected")
D.eFI=new B.FT(4,"RTCIceConnectionStateCount")
D.eFJ=new B.FT(5,"RTCIceConnectionStateFailed")
D.eFK=new B.FT(6,"RTCIceConnectionStateDisconnected")
D.aSn=new B.FT(7,"RTCIceConnectionStateClosed")
D.aSo=new B.YD(0,"RTCIceGatheringStateNew")
D.eFL=new B.YD(1,"RTCIceGatheringStateGathering")
D.aao=new B.YD(2,"RTCIceGatheringStateComplete")
D.aap=new B.Pw(0,"RTCPeerConnectionStateClosed")
D.aSp=new B.Pw(1,"RTCPeerConnectionStateFailed")
D.aSq=new B.Pw(2,"RTCPeerConnectionStateDisconnected")
D.aSr=new B.Pw(3,"RTCPeerConnectionStateNew")
D.aSs=new B.Pw(4,"RTCPeerConnectionStateConnecting")
D.aSt=new B.Pw(5,"RTCPeerConnectionStateConnected")
D.eFM=new B.Px(0,"RTCSignalingStateStable")
D.eFN=new B.Px(1,"RTCSignalingStateHaveLocalOffer")
D.eFO=new B.Px(2,"RTCSignalingStateHaveRemoteOffer")
D.eFP=new B.Px(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eFQ=new B.Px(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSu=new B.Px(5,"RTCSignalingStateClosed")
D.fnl=new A.av(160,48)
D.bg5=new A.fi(2,null,null,null,null,C.aD,null,null,null,null)
D.foV=new A.a5(16,16,D.bg5,null)
D.fTQ=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fqp=new A.b0(D.fTQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0x=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fqt=new A.b0(D.h0x,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9r=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fqA=new A.b0(D.h9r,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTq=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new A.b0(D.fTq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4J=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVC=new A.b0(D.h4J,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6a=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.frt=new A.b0(D.h6a,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haV=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.frK=new A.b0(D.haV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8R=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.frP=new A.b0(D.h8R,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.ha5=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fsC=new A.b0(D.ha5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fS_=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ft9=new A.b0(D.fS_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2r=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ftu=new A.b0(D.h2r,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fW9=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fu0=new A.b0(D.fW9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hb_=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fu4=new A.b0(D.hb_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSf=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fua=new A.b0(D.fSf,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQU=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fup=new A.b0(D.fQU,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fND=new A.B("NGMY DOC SHARE",null,C.aX1,null,null,null,null,null,null,null,null,null)
D.fP3=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fQ5=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fUW=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fVj=new A.B("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fWk=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fWS=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZK=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h1A=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.h1U=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2d=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h2P=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2W=new A.B("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.h3k=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h6G=new A.B("Share files & videos\nwith a scan.",null,C.aX4,null,null,null,null,null,null,null,null,null)
D.h7_=new A.B("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hEB=new B.a_x(null)
D.adL=new B.adI(0,"docShare")
D.adM=new B.adI(1,"gate")
D.Xb=new B.adI(2,"gateNoIndividual")})();(function staticFields(){$.aQg=null
$.fqg=function(){var x=y.N
return A.T(x,x)}()
$.H8=A.T(y.N,y.D)
$.ahN=A.T(y.N,A.at("lY"))
$.Sa=A.T(y.N,y.D)
$.fqX=A.T(y.N,A.at("adp"))
$.cfh=A.T(y.S,A.at("byK"))
$.hsA=1
$.iht=null
$.ihs=null
$.i8F=null
$.hgR=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iAM","hL7",()=>new B.ctd())
x($,"iyG","hl1",()=>C.a.q(A.bC(A.bC(A.bC(A.HH(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["hPtER0WuNtYJqd+XpGfitbCcF3I="]=a.current})($__dart_deferred_initializers__);