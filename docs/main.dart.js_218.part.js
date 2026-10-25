((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,Q,R,S,G,I,K,B={ccx:function ccx(){},
hko(d){var x=null,w=new B.b_V(d,D.dPX,new A.oO(x,x,y.c6),new A.oO(x,x,y.B))
w.bqE(d)
return w},
b_V:function b_V(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ccs:function ccs(d){this.a=d},
cct:function cct(d){this.a=d},
ccu:function ccu(d){this.a=d},
ccr:function ccr(d){this.a=d},
ccv:function ccv(d){this.a=d},
hkp(d,e){var x=y.N
x=new B.b_W(d,e,A.Q(x,y.e),A.Q(x,y.z))
x.bqF(d,e)
return x},
b_W:function b_W(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ccy:function ccy(d){this.a=d},
ccz:function ccz(d){this.a=d},
ccA:function ccA(d){this.a=d},
ccB:function ccB(d){this.a=d},
ccC:function ccC(d){this.a=d},
ccD:function ccD(d){this.a=d},
ccE:function ccE(d){this.a=d},
ccF:function ccF(d){this.a=d},
fCG(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.ba("IndexedDB not available"))
return C.xc.Kc(x,"ngmy_doc_share_v1",new B.f1F(),1)},
hqS(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ck(d))
if(y.J.b(d))return new Uint8Array(A.ck(J.eQ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ck(A.AP(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ck(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
P4(d,e){return B.hFk(d,e)},
hFk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$P4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aJV
x=7
return A.b(o==null?$.aJV=B.fCG():o,$async$P4)
case 7:s=g
r=new Uint8Array(A.ck(e))
q=J.mb(s,"blobs","readwrite")
C.ih.lJ(J.m9(q,"blobs"),r,d)
x=8
return A.b(J.oX(q),$async$P4)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
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
return A.i($async$P4,w)},
P3(d){return B.hFj(d)},
hFj(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$P3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aJV
x=7
return A.b(o==null?$.aJV=B.fCG():o,$async$P3)
case 7:s=f
r=J.mb(s,"blobs","readonly")
x=8
return A.b(C.ih.yo(J.m9(r,"blobs"),d),$async$P3)
case 8:q=f
x=9
return A.b(J.oX(r),$async$P3)
case 9:o=B.hqS(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
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
return A.i($async$P3,w)},
ae3(d){return B.hFi(d)},
hFi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ae3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aJV
x=7
return A.b(p==null?$.aJV=B.fCG():p,$async$ae3)
case 7:s=f
r=J.mb(s,"blobs","readwrite")
C.ih.Ei(J.m9(r,"blobs"),d)
x=8
return A.b(J.oX(r),$async$ae3)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ae3,w)},
f1F:function f1F(){},
ht3(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bjY(w,v))}return u},
h0C(d,e){var x,w={},v=A.aS1("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.flX(w,v,e)
C.uC.xh(v,"change",new B.flZ(w,v,!1))
C.uC.xh(v,"cancel",new B.flY(w))
$.eG.lR()
v.click()
A.bK(C.abw,new B.flW(w),y.H)},
flX:function flX(d,e,f){this.a=d
this.b=e
this.c=f},
flZ:function flZ(d,e,f){this.a=d
this.b=e
this.c=f},
flY:function flY(d){this.a=d},
flW:function flW(d){this.a=d},
Bz(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Bz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd5()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRu()?3:4
break
case 3:x=5
return A.b(B.fWW(e,d,s,!0,!1,f,g,h,!1,i),$async$Bz)
case 5:x=1
break
case 4:x=6
return A.b(B.OI(d,s,f,g,h,i),$async$Bz)
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
return A.b(B.GE(s,d),$async$Bz)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.eYf(s,d),$async$Bz)
case 14:x=12
return A.b(r.fWW(q,p,o,n,m,l,k,j,a1,i),$async$Bz)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cz(A.eN(new B.fma(s,i,d,f,g,h),!1,null,y.H)),$async$Bz)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cz(A.eN(new B.fmb(s,i,d,f,g,h),!1,null,y.H)),$async$Bz)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Bz,w)},
OI(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OI=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVG(e),$async$OI)
case 3:u=k
x=4
return A.b(B.am1(d,e,!1),$async$OI)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GE(e,d),$async$OI)
case 7:if(k){v=D.a4W
x=1
break}x=8
return A.b(B.SF(e),$async$OI)
case 8:v=t?D.Rp:D.a4X
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aVE(d,e)){v=D.a4W
x=1
break}x=11
return A.b(B.SF(e),$async$OI)
case 11:v=t?D.Rp:D.a4X
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fy0(d,e)){v=D.a4W
x=1
break}x=14
return A.b(B.SF(e),$async$OI)
case 14:v=D.Rp
x=1
break
case 13:v=t?D.Rp:D.a4X
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
eYf(d,e){var x=0,w=A.j(y.y),v
var $async$eYf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aVE(e,d)){v=!1
x=1
break}x=3
return A.b(B.aVG(d),$async$eYf)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYf,w)},
fWW(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cz(A.eN(new B.f2Y(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fSd(d,e,f,g,h,i,j){return new B.WL(e,j,d,g,h,i,f,null)},
f4U(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f4U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.as()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,new B.f4X(A.K(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f4U)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f4U,w)},
f5o(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f5o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.as()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,new B.f5q(A.K(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f5o)
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
return A.i($async$f5o,w)},
fCO(d,e,f,g){var x=null,w=A.U(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b0(4,A.m(16),C.V),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
feF(d,e){var x=0,w=A.j(y.H),v
var $async$feF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SF(e),$async$feF)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eC()
case 1:return A.h(v,w)}})
return A.i($async$feF,w)},
fma:function fma(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fmb:function fmb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9w:function a9w(d,e){this.a=d
this.b=e},
f2Y:function f2Y(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WL:function WL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
avQ:function avQ(){this.c=this.a=this.d=null},
cVT:function cVT(d,e){this.a=d
this.b=e},
cVQ:function cVQ(d){this.a=d},
cVS:function cVS(d){this.a=d},
cVR:function cVR(d){this.a=d},
cVV:function cVV(){},
cVU:function cVU(d){this.a=d},
a9Y:function a9Y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayj:function ayj(d,e){this.a=d
this.b=e},
aBo:function aBo(d,e,f){this.a=d
this.b=e
this.c=f},
f4X:function f4X(d,e,f){this.a=d
this.b=e
this.c=f},
f4V:function f4V(d){this.a=d},
f4W:function f4W(d,e,f){this.a=d
this.b=e
this.c=f},
f5q:function f5q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5p:function f5p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1n(d,e,f,g,h){return B.hfp(d,e,f,g,h)},
hfp(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c1n=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gH(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.di(d,new B.c1o(s,e,h,g,f,q),y.g),y.l),$async$c1n)
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
return A.i($async$c1n,w)},
aVB(d,e,f,g,h){return B.hfq(d,e,f,g,h)},
hfq(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVB=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arb("GET",d)
o=A.fuv()
if(o==null)o=new A.JQ(A.a([],y.W))
x=7
return A.b(o.eK(0,s).cI(0,C.Dg),$async$aVB)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.B4(),$async$aVB)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ae(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
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
return A.i($async$aVB,w)},
aVA(d){return B.hfn(d)},
hfn(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.un(d,null).cI(0,C.nb),$async$aVA)
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
q=A.a5(n)
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
return A.i($async$aVA,w)},
c1m(d){return B.hfo(d)},
hfo(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.un(d,null).cI(0,C.oT),$async$c1m)
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
r=A.a5(o)
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
return A.i($async$c1m,w)},
c1o:function c1o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j7:function j7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
GC(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hfv(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GC(C.a.aV(u,v.length))}return null},
hfw(d){var x=B.GC(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hfr(){var x,w=$.oV(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aE(10)
return C.d.fJ(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aE(24)]},
a4l(d){return B.hfs(d)},
hfs(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bE),$async$a4l)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
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
return A.i($async$a4l,w)},
a4m(d,e){return B.hft(d,e)},
hft(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4m=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hr(d,e,!1,!1,C.cy,null),$async$a4m)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
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
return A.i($async$a4m,w)},
Ad(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ad=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.au(),$async$Ad)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GC(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4n(r),$async$Ad)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4l("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ad)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GC(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ad)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hfr()
x=14
return A.b(B.a4n(m),$async$Ad)
case 14:if(f!=null){x=12
break}l=new A.N(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4m("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ad)
case 15:k=f
x=16
return A.b(B.a4m("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ad)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ad)
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
return A.i($async$Ad,w)},
a4n(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GC(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4l("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4n)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4n,w)},
a4o(d,e,f,g){return B.hfx(d,e,f,g)},
hfx(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4o=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gag(d)){v=!1
x=1
break}r=B.GC(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4n(r),$async$a4o)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cO(d,0,new B.c1u())>1048576||g.bc(d,new B.c1v())){v=B.CY(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4z("myCode",d,a0),$async$a4o)
case 4:u=a3
try{t=C.Q.aC(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ch(s)||J.aa(s)!==g.gH(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.CY(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aVJ(u,g.gH(d),a0),$async$a4o)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oV().aE(9999)
k=n.b
j=g.gH(d)
i=y.N
h=g.di(d,new B.c1w(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aVC(A.D(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4o)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gH(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4o,w)},
CY(d,e,f,g,h){return B.hfu(d,e,f,g,h)},
hfu(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CY=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$CY)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cO(a6,0,new B.c1q())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oV().aE(9999)
h=Date.now()
g=""+1000*h+"_"+C.cz.aE(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GG(a9,q)
a0=new A.Ir(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$CY)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eJ().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.on(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a7O(a1.a,a4,"media",a1.d,a2).w_(m,n,new A.Ci(!0,q.c)),$async$CY)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$CY)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMk(r),$async$CY)
case 16:v=!1
x=1
break
case 15:f.push(A.D(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gH(a6)
a1=l.di(a6,new B.c1r(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aVC(A.D(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$CY)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMk(r),$async$CY)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gH(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CY,w)},
aVC(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aVC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4l(t),$async$aVC)
case 3:s=g
r=y.aL.a(J.q(s==null?A.D(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b3(r,new B.c1p(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4m(t,A.D(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVC,w)},
Ll(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ll=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4l("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ll)
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
break}k=A.Y(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aVD(k,a0),$async$Ll)
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
return A.b(B.aVI(h),$async$Ll)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SM(g,a0),$async$Ll)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("E.E")
e=A.z(new A.a3(r,new B.c1s(),q),n)
d=A.z(new A.a3(r,new B.c1t(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dg(d,0,A.dK(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a4m("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.D(["deliveries",q],p,o)),$async$Ll)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ll,w)},
aVD(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aVD=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}o=J.a4(p)
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
break}i=B.hJ0(k,j)
C.d.v(s,i)
x=5
return A.b(B.Bx(l,m,"Received via My Code",t,e,i),$async$aVD)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMk(s),$async$aVD)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVD,w)},
c1u:function c1u(){},
c1v:function c1v(){},
c1w:function c1w(){},
c1q:function c1q(){},
c1r:function c1r(){},
c1p:function c1p(){},
c1s:function c1s(){},
c1t:function c1t(){},
fm7(d,e){var x=0,w=A.j(y.H)
var $async$fm7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cz(A.eN(new B.fm8(e),!1,null,y.H)),$async$fm7)
case 2:return A.h(null,w)}})
return A.i($async$fm7,w)},
byj(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byj=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cz(A.eN(new B.fm9(g,e,f),!1,null,y.y)),$async$byj)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byj,w)},
fm8:function fm8(d){this.a=d},
fm9:function fm9(d,e,f){this.a=d
this.b=e
this.c=f},
SC:function SC(d,e){this.c=d
this.a=e},
azG:function azG(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dFg:function dFg(d,e){this.a=d
this.b=e},
SG:function SG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azJ:function azJ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dGp:function dGp(d){this.a=d},
dGq:function dGq(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGs:function dGs(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGu:function dGu(d,e){this.a=d
this.b=e},
dGv:function dGv(d,e){this.a=d
this.b=e},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGx:function dGx(d){this.a=d},
dGA:function dGA(){},
dGy:function dGy(d){this.a=d},
dGz:function dGz(d,e){this.a=d
this.b=e},
bel:function bel(){},
SD:function SD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azH:function azH(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dFh:function dFh(d){this.a=d},
dFi:function dFi(d){this.a=d},
fy1(d){var x=d.hC
if(x>=0)return C.o.L(x)
return 10},
hfz(d){var x=d.k8
if(x>=0)return x
return 4.99},
hfy(d){var x=d.kP,w=y.N
w=x.iC(x,new B.c1y(),w,w)
return w},
fNo(d){var x=d.k9,w=y.N
w=x.iC(x,new B.c1z(),w,w)
return w},
aVG(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aVG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.au(),$async$aVG)
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
return A.i($async$aVG,w)},
a4q(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.au(),$async$a4q)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4q,w)},
SF(d){var x=0,w=A.j(y.H),v,u
var $async$SF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.au(),$async$SF)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SF)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SF,w)},
fy0(d,e){var x,w,v
if(B.hfz(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hfy(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.ca(new A.N(Date.now(),0,!1))},
aVE(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fNo(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.ca(new A.N(Date.now(),0,!1))},
fNp(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Y(B.fNo(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.ca(new A.N(Date.now(),0,!1))?v:new A.N(Date.now(),0,!1)
w.m(0,t,u.bL(A.dA(f,0,0,0,0,0).a).a4().aa())
d.k9=w},
am2(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$am2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.au(),$async$am2)
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
return A.i($async$am2,w)},
am3(d){var x=0,w=A.j(y.H),v,u,t
var $async$am3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.am2(d),$async$am3)
case 3:u=f
x=5
return A.b(A.au(),$async$am3)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$am3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$am3,w)},
am1(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$am1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fy1(d)
if(u<=0){v=!1
x=1
break}if(B.fy0(d,e)){v=!1
x=1
break}x=3
return A.b(B.am2(e),$async$am1)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am1,w)},
aVF(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aVF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GE(e,d),$async$aVF)
case 3:if(g){v=-1
x=1
break}u=B.fy1(d)
if(u<=0){v=-1
x=1
break}if(B.fy0(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.am2(e),$async$aVF)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVF,w)},
c1B(d,e,f){var x=0,w=A.j(y.y),v
var $async$c1B=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GE(e,d),$async$c1B)
case 3:if(h){v=!1
x=1
break}v=B.am1(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1B,w)},
c1A(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c1A=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
x=3
return A.b(B.c1B(d,u,i.gRu()),$async$c1A)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1A,w)},
a4p(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4p=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
if(i.gRu()){v=!0
x=1
break}if(B.aVE(d,u)){v=!0
x=1
break}x=5
return A.b(A.kX(u,C.OZ),$async$a4p)
case 5:x=k?3:4
break
case 3:B.fNp(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4p)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kC(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.OZ,"Doc Share for Organizations"),$async$a4p)
case 7:if(!k){v=!1
x=1
break}B.fNp(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4p)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4p,w)},
c1y:function c1y(){},
c1z:function c1z(){},
fmD(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fmD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fmD)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eV8.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hC([r],e.c))
s.toString
$.eV8.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmD,w)},
hL4(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eV8.bk($.eV8,new B.fmF(d))},
fmF:function fmF(d){this.a=d},
eWt(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eWt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],f))
s.toString
u=A.mB(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.ja,null,y.H),$async$eWt)
case 3:C.ys.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eG.lR()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eWt,w)},
ad_(d,e,f){var x=0,w=A.j(y.H),v
var $async$ad_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eVF.m(0,d,new B.a9d(A.bi(e,!0,v)))
x=3
return A.b(A.au(),$async$ad_)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.ak(A.D(["parts",e,"size",f],v,y.C),null)),$async$ad_)
case 2:return A.h(null,w)}})
return A.i($async$ad_,w)},
acU(d){return B.huL(d)},
huL(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$acU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eVF.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.au(),$async$acU)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aC(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b3(s,new B.eZT(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.L(o)
q=m==null?0:m
p=new B.a9d(r)
$.eVF.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$acU,w)},
Oy(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Oy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ck(e))
$.Ey.m(0,d,u)
x=3
return A.b(B.P4(d,u),$async$Oy)
case 3:t=g
if(!t)$.ak.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
aKe(d){return B.huJ(d)},
huJ(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Ey.h(0,d)
if(n!=null&&!C.aD.gag(n)){v=n
x=1
break}x=3
return A.b(B.P3(d),$async$aKe)
case 3:p=f
if(p!=null&&!C.aD.gag(p)){$.Ey.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.au(),$async$aKe)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aF(r)
x=!J.ch(q)?9:10
break
case 9:B.Oy(d,q)
x=11
return A.b(J.hB(s,d),$async$aKe)
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
return A.i($async$aKe,w)},
hrc(d){if(d==null)return A.f1(null,y.K)
if(y.J.b(d))return A.f1(new Uint8Array(A.ck(J.eQ(d,0,null))),y.K)
if(y.D.b(d))return A.f1(new Uint8Array(A.ck(d)),y.K)
if(y.Q.b(d))return A.f1(new Uint8Array(A.ck(A.AP(d,0,null))),y.K)
if(y.I.b(d))return A.f1(new Uint8Array(A.ck(d)),y.K)
return A.f1(null,y.K)},
a_8(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bc($.bs,y.cf)
t=new A.bL(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f39(r,t),!1,s)
A.fA(r,"error",new B.f3a(t),!1,s)
r.readAsArrayBuffer(d)
v=u.hZ(0,C.Jn,new B.f3b())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_8,w)},
aKy(d,e,f){return B.hwW(d,e,f)},
hwW(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKy=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_8(i),$async$aKy)
case 10:p=a0
if(p==null||p.length===0){$.ak.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.P4(o,p),$async$aKy)
case 11:n=a0
if(!n){$.ak.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.ad_(k,j,s),$async$aKy)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a5(h)
$.ak.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKy,w)},
aKx(d,e,f){return B.hwV(d,e,f)},
hwV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKx=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKy(d,e,f),$async$aKx)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_8(f),$async$aKx)
case 10:r=h
if(r==null||r.length===0){$.ak.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Ey.m(0,s,r)
$.OQ.m(0,s,r)
x=11
return A.b(B.Oy(s,r),$async$aKx)
case 11:q=h
if(!q)$.ak.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKx,w)},
Ae(d,e,f,g,h,i){return B.hfI(d,e,f,g,h,i)},
hfI(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ae=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cz.aE(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j7(p,q,o,n,new A.N(Date.now(),0,!1).a4().aa(),a0,f,B.aVM(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Oy(s,d),$async$Ae)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.au(),$async$Ae)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cM.gcs().aF(d)),$async$Ae)
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
return A.b(B.zn(e),$async$Ae)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.EH(e,j),$async$Ae)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ae,w)},
SH(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SH=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zn(d),$async$SH)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cz.aE(99999)
n=p.b
l=o.type
l.toString
k=B.fNr(n,null,l)
l=o.size
l.toString
j=new A.N(Date.now(),0,!1).a4().aa()
i=new B.j7(m,n,k,l,j,"From folder",null,B.aVM(),null)
$.adr.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_8(o),$async$SH)
case 7:g=a1
x=g!=null&&!C.aD.gag(g)?8:10
break
case 8:$.Ey.m(0,h,g)
$.OQ.m(0,h,g)
B.Oy(h,g)
x=9
break
case 10:x=11
return A.b(B.aKx(d,m,o),$async$SH)
case 11:case 9:r.G(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EH(d,t),$async$SH)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SH,w)},
fy5(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fy5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fNr(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GF(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aD.gag(s)){v=B.Ae(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fy5,w)},
GF(d,e,f,g,h,i){return B.hfH(d,e,f,g,h,i)},
hfH(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GF=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cz.aE(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ir(A.dK(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GF)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ch(m)){x=6
break}J.fR(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.ck(J.PC(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kj(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.P4(k,l),$async$GF)
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
return A.b(j.a9(0),$async$GF)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.P4(k,new Uint8Array(A.ck(n))),$async$GF)
case 15:J.ci(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ad_(r,q,g),$async$GF)
case 16:f=new B.j7(i,a1,a0,g,new A.N(Date.now(),0,!1).a4().aa(),a2,null,B.aVM(),null)
x=17
return A.b(B.zn(d),$async$GF)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.EH(d,e),$async$GF)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GF,w)},
SJ(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SJ=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adr.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_8(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.acU(s),$async$SJ)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.P3(u[o]),$async$SJ)
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
v=A.AP(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.OQ.h(0,s)
if(i==null)i=$.Ey.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qK(d,e),$async$SJ)
case 12:i=a0
if(i!=null&&!C.aD.gag(i))$.OQ.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AP(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SJ,w)},
fNr(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qK(d,e){return B.hfJ(d,e)},
hfJ(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qK=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OQ.h(0,f)
if(e==null)e=$.Ey.h(0,f)
if(e!=null&&!C.aD.gag(e)){v=e
x=1
break}s=$.adr.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_8(s),$async$qK)
case 9:r=a3
if(r!=null&&!C.aD.gag(r)){$.Ey.m(0,f,r)
$.OQ.m(0,f,r)
B.Oy(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a5(d)
$.ak.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.acU(f),$async$qK)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auE(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.P3(g[l]),$async$qK)
case 16:k=a3
if(k!=null&&!C.aD.gag(k))n.G(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.akf()
if(!C.aD.gag(r)){$.Ey.m(0,f,r)
$.OQ.m(0,f,r)
v=r
x=1
break}$.ak.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKe(f),$async$qK)
case 17:j=a3
if(j!=null&&!C.aD.gag(j)){$.OQ.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SJ(a0,a1,0,g),$async$qK)
case 20:i=a3
if(i!=null&&!C.aD.gag(i)){h=new Uint8Array(A.ck(i))
$.Ey.m(0,f,h)
$.OQ.m(0,f,h)
B.Oy(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qK,w)},
hfM(d){var x,w,v=$.adr.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hfN(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hC([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hfK(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
am9(d,e,f,g,h){return B.hfL(d,e,f,g,h)},
hfL(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$am9=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adr.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_8(s),$async$am9)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qK(g,e),$async$am9)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eJ().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hU(d).w_(h,r,new A.Ci(!0,e.c)),$async$am9)
case 12:f.$2(J.aa(r),J.aa(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
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
return A.i($async$am9,w)},
fNt(d,e,f,g,h){var x,w,v,u,t=$.fNs
$.fNs=t+1
x=Date.now()
w=""+1000*x+"_"+C.cz.aE(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c1M.m(0,t,new B.bqx(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auE(u)))
return t},
fy6(d){var x=0,w=A.j(y.H)
var $async$fy6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fy6,w)},
GG(d,e){var $async$GG=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adr.h(0,h)
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
return A.px(B.SJ(d,e,p,o<q?o:q),$async$GG,w)
case 8:n=a1
x=n!=null&&!C.aD.gag(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.px(A.E7(n),$async$GG,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.px(B.acU("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GG,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.px(B.P3(h[l]),$async$GG,w)
case 18:k=a1
x=k!=null&&!C.aD.gag(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.px(A.E7(k),$async$GG,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.px(B.qK(d,e),$async$GG,w)
case 22:j=a1
x=j!=null&&!C.aD.gag(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.px(A.E7(A.AP(j,p,o<i?o:i)),$async$GG,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.px(null,0,w)
case 2:return A.px(t.at(-1),1,w)}})
var x=0,w=A.fVR($async$GG,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.fXB(w)},
aVO(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aVO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c1M.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.G(0,e)
case 3:if(!(u.gH(u)>=1048576)){x=4
break}x=5
return A.b(t.a1E(),$async$aVO)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVO,w)},
SI(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c1M.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a1E(),$async$SI)
case 3:u=r.w
if(u.length===0||r.z<=0){$.ak.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ad_(r.c,u,r.z),$async$SI)
case 4:t=new B.j7(r.b,r.d,r.e,r.z,new A.N(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aVM(),null)
u=r.a
x=5
return A.b(B.zn(u),$async$SI)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.EH(u,s),$async$SI)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
a4w(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c1M.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ae3(u[s]),$async$a4w)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4w,w)},
c1O(d,e,f){var x=0,w=A.j(y.H)
var $async$c1O=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvv(d,e,f),$async$c1O)
case 2:return A.h(null,w)}})
return A.i($async$c1O,w)},
c1P(d,e,f){var x=0,w=A.j(y.H)
var $async$c1P=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvw(d,e,f),$async$c1P)
case 2:return A.h(null,w)}})
return A.i($async$c1P,w)},
CZ(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$CZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zn(d),$async$CZ)
case 2:p=g
J.mX(p,new B.c1N(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Ey.W(0,v)
$.adr.W(0,e)
x=3
return A.b(B.acU(v),$async$CZ)
case 3:u=g
$.eVF.W(0,v)
x=4
return A.b(A.au(),$async$CZ)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$CZ)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$CZ)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ae3(s[q]),$async$CZ)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ae3(v),$async$CZ)
case 13:x=14
return A.b(B.EH(d,p),$async$CZ)
case 14:return A.h(null,w)}})
return A.i($async$CZ,w)},
aVN(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aVN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qK(d,e),$async$aVN)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eWt(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVN,w)},
zn(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$zn)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aC(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b3(u,new B.f3c(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zn,w)},
EH(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.au(),$async$EH)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b3(e,new B.f73(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.ak(t,null)),$async$EH)
case 3:return A.h(null,w)}})
return A.i($async$EH,w)},
bvv(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zn(d),$async$bvv)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f1R(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).ayZ(f))
x=4
return A.b(B.EH(d,u),$async$bvv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvv,w)},
bvw(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zn(d),$async$bvw)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f1S(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cwP(f))
x=4
return A.b(B.EH(d,u),$async$bvw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvw,w)},
a9d:function a9d(d){this.a=d},
eZT:function eZT(){},
f39:function f39(d,e){this.a=d
this.b=e},
f3a:function f3a(d){this.a=d},
f3b:function f3b(){},
c1N:function c1N(d){this.a=d},
bqx:function bqx(d,e,f,g,h,i,j,k,l){var _=this
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
f3c:function f3c(){},
f73:function f73(){},
f1R:function f1R(d){this.a=d},
f1S:function f1S(d){this.a=d},
a4x(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bc(d,new B.c1S())?3:4
break
case 3:x=5
return A.b(B.aVP(d,e),$async$a4x)
case 5:u=g
if(u!=null){t=u.c
B.Ln(d,u.b,e,t)}v=u
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
return A.b(B.aVK(s),$async$a4x)
case 10:case 9:if(g){v=new A.NW(1,D.OC,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SK(d,e),$async$a4x)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SP(!0,!0,d,e),$async$a4x)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ln(d,D.xJ,e,t)
v=new A.NW(p,D.xJ,t)
x=1
break}v=B.c1R(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4x,w)},
SK(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4z(null,d,e),$async$SK)
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
return A.b(B.aVJ(p,d.length,e),$async$SK)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c1P(e,C.d.gI(d).a,r.b),$async$SK)
case 7:case 6:q=r.a
x=8
return A.b(B.Ln(d,D.OC,e,q),$async$SK)
case 8:v=new A.NW(d.length,D.OC,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
SL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lW(D.lZ)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4y(d,e),$async$SL)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c1K(s,d,e,t),$async$SL)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aVK(t),$async$SL)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qK(e,d),$async$SL)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SK(A.a([d],y.r),e),$async$SL)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
SN(){var x=0,w=A.j(y.H)
var $async$SN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fy_(),$async$SN)
case 2:x=3
return A.b(B.aMB(),$async$SN)
case 3:return A.h(null,w)}})
return A.i($async$SN,w)},
a4y(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aVM()
x=3
return A.b(B.c1O(e,d.a,u),$async$a4y)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4y,w)},
Ln(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ln=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OC&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4y(p,f),$async$Ln)
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
return A.b(B.c1J(o,p,u,f),$async$Ln)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c1K(o,p,f,t),$async$Ln)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c1I(o,u,p,f),$async$Ln)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ln,w)},
aVP(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aVP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c1Q(e,d),$async$aVP)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SP(!1,!0,d,e),$async$aVP)
case 4:u=g
if(u!=null){t=u.b
v=new A.NW(u.a,D.xJ,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVP,w)},
c1Q(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c1Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SJ(d,s,0,1),$async$c1Q)
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
return A.i($async$c1Q,w)},
c1R(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c1R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4z(null,d,e),$async$c1R)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fNq(u)
if(t.length>800){v=null
x=1
break}v=new A.NW(d.length,D.dcF,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1R,w)},
ama(d,e,f){return B.hfQ(d,e,f)},
hfQ(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ama=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.ma(g,1)
x=B.fy4(g)?3:4
break
case 3:x=5
return A.b(B.c1L(g),$async$ama)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cS(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ma(g,13))
try{k=B.D_(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a5(a1)
$.ak.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cS(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ma(g,13))
u=9
x=12
return A.b(B.aVI(q),$async$ama)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SM(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a5(f)
$.ak.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fy3(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SM(n,a0)
v=k
x=1
break}catch(a1){m=A.a5(a1)
$.ak.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cS(g,"N2|")){v=B.GH(C.a.i(J.ma(g,3)),d,a0)
x=1
break}if(J.cS(g,"NGMYDOCSYNC2|")){v=B.GH(C.a.i(J.ma(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cw(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GH(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SM(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ama,w)},
GH(d,e,f){return B.hfO(d,e,f)},
hfO(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GH=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cp(A.t(s)+"/manifest.json",0,null)
q=A.cp(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVA(r),$async$GH)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVA(A.cp(s,0,null)),$async$GH)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c1n(o,r,a1,n,a2),$async$GH)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.c1m(q),$async$GH)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SM(l,a2),$async$GH)
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
k=A.a5(d)
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
return A.i($async$GH,w)},
a4z(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qK(f,r),$async$a4z)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.D(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcs().aF(q)],t,s))
x=3
break
case 4:u=A.Q(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.N(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.ak(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4z,w)},
SM(d,e){return B.hfP(d,e)},
hfP(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SM=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cw.aF(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.Ae(i,a3,d,k,l,o),$async$SM)
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
g=A.a5(a1)
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
return A.i($async$SM,w)},
Lm:function Lm(d,e){this.a=d
this.b=e},
c1S:function c1S(){},
ZI(d){var x=A.K(d).ax.a===C.H,w=x?D.a9q:D.a7M,v=x?D.aaO:C.c,u=x?C.aN:C.M,t=x?C.bO:C.ai,s=x?D.a8I:C.aJ
return new A.aCA([w,s,v,u,t,x?C.eS:C.bU])},
h1j(d,e){var x=e?C.x.j(0.72):C.aV
return A.cb(null,x,!0,null,new B.fqA(e),d,null,!0,!0,y.N)},
c1x(d,e,f,g,h,i,j,k,l){return new B.SE(e,l,d,f,k,j,g,h,i,null)},
WN(d,e,f,g,h,i,j){return new B.b94(g,h,j,e,i,d,f,null)},
fqA:function fqA(d){this.a=d},
WK:function WK(d,e){this.c=d
this.a=e},
avP:function avP(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cVP:function cVP(d){this.a=d},
cVN:function cVN(d){this.a=d},
cVO:function cVO(d){this.a=d},
bqc:function bqc(){},
SE:function SE(d,e,f,g,h,i,j,k,l,m){var _=this
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
azI:function azI(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dGn:function dGn(d){this.a=d},
dFL:function dFL(d,e){this.a=d
this.b=e},
dFM:function dFM(d,e){this.a=d
this.b=e},
dFk:function dFk(d,e,f){this.a=d
this.b=e
this.c=f},
dFj:function dFj(d){this.a=d},
dFl:function dFl(d,e){this.a=d
this.b=e},
dFq:function dFq(d,e,f){this.a=d
this.b=e
this.c=f},
dFp:function dFp(d){this.a=d},
dGb:function dGb(d,e){this.a=d
this.b=e},
dGc:function dGc(d){this.a=d},
dFI:function dFI(d,e,f){this.a=d
this.b=e
this.c=f},
dFF:function dFF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dFo:function dFo(d){this.a=d},
dFQ:function dFQ(d){this.a=d},
dFP:function dFP(){},
dFu:function dFu(d){this.a=d},
dG8:function dG8(d,e){this.a=d
this.b=e},
dG9:function dG9(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
dFG:function dFG(d,e){this.a=d
this.b=e},
dFH:function dFH(d,e){this.a=d
this.b=e},
dG1:function dG1(d,e){this.a=d
this.b=e},
dFY:function dFY(d){this.a=d},
dFX:function dFX(d){this.a=d},
dFZ:function dFZ(){},
dG_:function dG_(){},
dG0:function dG0(d,e){this.a=d
this.b=e},
dG2:function dG2(){},
dG3:function dG3(d){this.a=d},
dFW:function dFW(d,e){this.a=d
this.b=e},
dFR:function dFR(d){this.a=d},
dFS:function dFS(d){this.a=d},
dFT:function dFT(d){this.a=d},
dFU:function dFU(d){this.a=d},
dFV:function dFV(d){this.a=d},
dFr:function dFr(){},
dFs:function dFs(d){this.a=d},
dFt:function dFt(d,e){this.a=d
this.b=e},
dFn:function dFn(d,e){this.a=d
this.b=e},
dFm:function dFm(d,e,f){this.a=d
this.b=e
this.c=f},
dFJ:function dFJ(d){this.a=d},
dFK:function dFK(d,e,f){this.a=d
this.b=e
this.c=f},
dFD:function dFD(d,e){this.a=d
this.b=e},
dFz:function dFz(d){this.a=d},
dFw:function dFw(d,e,f){this.a=d
this.b=e
this.c=f},
dFA:function dFA(d){this.a=d},
dFB:function dFB(d){this.a=d},
dFC:function dFC(){},
dFE:function dFE(d,e){this.a=d
this.b=e},
dFx:function dFx(d){this.a=d},
dFv:function dFv(d,e,f){this.a=d
this.b=e
this.c=f},
dFy:function dFy(){},
dFO:function dFO(d){this.a=d},
dFN:function dFN(d,e){this.a=d
this.b=e},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG4:function dG4(d){this.a=d},
dG5:function dG5(d,e){this.a=d
this.b=e},
dG6:function dG6(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGi:function dGi(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGl:function dGl(){},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGe:function dGe(d,e){this.a=d
this.b=e},
dGf:function dGf(d,e,f){this.a=d
this.b=e
this.c=f},
dGd:function dGd(d,e,f){this.a=d
this.b=e
this.c=f},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGh:function dGh(d,e){this.a=d
this.b=e},
avM:function avM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b93:function b93(d,e,f){this.c=d
this.d=e
this.a=f},
cVL:function cVL(){},
cVM:function cVM(){},
a9x:function a9x(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cW8:function cW8(){},
cW7:function cW7(d){this.a=d},
WM:function WM(d,e,f){this.c=d
this.d=e
this.a=f},
avR:function avR(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cW4:function cW4(d){this.a=d},
cW5:function cW5(d,e,f){this.a=d
this.b=e
this.c=f},
cW6:function cW6(d,e){this.a=d
this.b=e},
cW2:function cW2(d,e){this.a=d
this.b=e},
cW0:function cW0(d){this.a=d},
cVZ:function cVZ(d){this.a=d},
cVW:function cVW(d){this.a=d},
cW1:function cW1(d){this.a=d},
cVY:function cVY(d){this.a=d},
cW3:function cW3(d){this.a=d},
cW_:function cW_(d){this.a=d},
cVX:function cVX(d){this.a=d},
WJ:function WJ(d,e,f){this.c=d
this.d=e
this.a=f},
avO:function avO(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cVI:function cVI(d){this.a=d},
cVH:function cVH(d,e){this.a=d
this.b=e},
cVJ:function cVJ(d){this.a=d},
cVG:function cVG(d,e){this.a=d
this.b=e},
cVK:function cVK(d){this.a=d},
cVF:function cVF(d,e){this.a=d
this.b=e},
cVB:function cVB(d){this.a=d},
cVC:function cVC(d){this.a=d},
cVD:function cVD(d,e){this.a=d
this.b=e},
cVE:function cVE(d){this.a=d},
Ny:function Ny(d,e,f){this.c=d
this.d=e
this.a=f},
avU:function avU(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cWl:function cWl(d){this.a=d},
cWm:function cWm(d){this.a=d},
cWn:function cWn(d){this.a=d},
cWo:function cWo(d){this.a=d},
cWp:function cWp(d,e){this.a=d
this.b=e},
cWq:function cWq(d){this.a=d},
cWs:function cWs(d){this.a=d},
cWr:function cWr(d){this.a=d},
WO:function WO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
avS:function avS(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cWh:function cWh(d,e){this.a=d
this.b=e},
cWi:function cWi(d,e){this.a=d
this.b=e},
cW9:function cW9(d,e,f){this.a=d
this.b=e
this.c=f},
cWa:function cWa(d){this.a=d},
cWb:function cWb(){},
cWg:function cWg(){},
cWc:function cWc(d,e){this.a=d
this.b=e},
cWd:function cWd(d,e){this.a=d
this.b=e},
cWe:function cWe(d,e){this.a=d
this.b=e},
cWf:function cWf(d,e){this.a=d
this.b=e},
a9v:function a9v(d,e){this.c=d
this.a=e},
cVA:function cVA(d){this.a=d},
WI:function WI(d){this.a=d},
avN:function avN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WP:function WP(d,e){this.c=d
this.a=e},
avT:function avT(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cWk:function cWk(d){this.a=d},
cWj:function cWj(d){this.a=d},
b94:function b94(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hfR(){var x,w=$.oV(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aE(32)]
return"VT"+C.d.fJ(v)},
Lo(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lo=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$Lo)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$Lo)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.Y(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.Q(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Lo,w)},
a4A(d){return B.hfS(d)},
hfS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4A)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_video_relay_v1",A.D(["relays",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4A)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.ak.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4A,w)},
SO(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lo(),$async$SO)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dP(A.Y(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4A(s),$async$SO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
SP(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SP=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bW(),$async$SP)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bi(f,!0,y.U)
else{t=A.S(f).k("a3<1>")
u=A.z(new A.a3(f,new B.c1U(),t),t.k("E.E"))}if(u.length===0){v=null
x=1
break}s=B.hfR()
t=A.S(u).k("I<1,a0<n,aC>>")
r=A.z(new A.I(u,new B.c1V(s),t),t.k("ai.E"))
x=6
return A.b(B.Lo(),$async$SP)
case 6:q=i
J.aE(q,s,A.D(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4A(q),$async$SP)
case 7:x=8
return A.b(B.a4B(r,u,g,s),$async$SP)
case 8:v=new A.bkp(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SP,w)},
amb(d){var x=0,w=A.j(y.y),v,u,t
var $async$amb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lo(),$async$amb)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amb,w)},
c1W(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c1W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lo(),$async$c1W)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a4(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1W,w)},
a4B(d,e,f,g){return B.hfT(d,e,f,g)},
hfT(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4B=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.am9("media",r,new B.c1T(s,e,g),f,q),$async$a4B)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SO(g,A.D(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4B)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SO(g,A.D(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4B)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.ak.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SO(g,A.D(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4B)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4B,w)},
D_(d,e,f){return B.hfU(d,e,f)},
hfU(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D_=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$D_)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amb(b3),$async$D_)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kQ,null,g),$async$D_)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amb(b3),$async$D_)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lo(),$async$D_)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.L(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ch(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gH(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a4(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.aa(m)===0){x=11
break}u=14
a8=$.eJ().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.on(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a7O(a8.a,b0,"media",a8.d,a9).Bp(m)
k=A.cp(l,0,null)
x=17
return A.b(B.aVB(k,n,o,s,b7),$async$D_)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a5(b4)
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
a2=$.eJ().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.on(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a7O(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D_)
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
a0=A.dP(A.Y(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4A(e),$async$D_)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D_,w)},
c1U:function c1U(){},
c1V:function c1V(d){this.a=d},
c1T:function c1T(d,e,f){this.a=d
this.b=e
this.c=f},
aMB(){var x=0,w=A.j(y.H),v,u
var $async$aMB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hqF=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aMB)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aMB)
case 3:u=$.fCZ
u=u==null?null:u.bw(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aMB)
case 4:$.fCZ=$.hyF=$.hyG=null
return A.h(null,w)}})
return A.i($async$aMB,w)},
f6G(d){var x=0,w=A.j(y.H),v,u
var $async$f6G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a22){x=1
break}u=new A.bc($.bs,y.d4)
d.c=new B.f6H(new A.bL(u,y.aY))
x=3
return A.b(u.hZ(0,C.hp,new B.f6I()),$async$f6G)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f6G,w)},
hyD(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hfB(x):x},
fD2(d){var x=0,w=A.j(y.T),v,u,t
var $async$fD2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amd(u)
x=1
break}v=B.fy3(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fD2,w)},
fD1(d){var x=0,w=A.j(y.T),v,u,t
var $async$fD1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.ame(u)
x=1
break}v=B.fy3(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fD1,w)},
fmo(d){var x=0,w=A.j(y.T),v
var $async$fmo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ame(d),$async$fmo)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmo,w)},
bwm(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fD1(d),$async$bwm)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aC(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwm,w)},
eXh(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eXh=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SI(g)
x=1
break}if(d.gH(d)<=0){v=null
x=1
break}v=B.Ae(d.akf(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eXh,w)},
EJ(d,e,f){return B.hAS(d,e,f)},
hAS(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EJ=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fD2(a1),$async$EJ)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aC(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a4(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h35().azd(D.d15,null),$async$EJ)
case 4:l=d.fCZ=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auE(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bc($.bs,y.b1)
l.y=new B.f7a(f,k,new B.f7b(f,a2,k,j,a0,p),a2,j,a0,p,new A.bL(t,y.ch))
x=5
return A.b(l.a4v(0,new B.UT(r,"offer")),$async$EJ)
case 5:d=l
x=7
return A.b(l.aha(0),$async$EJ)
case 7:x=6
return A.b(d.a4n(0,a4),$async$EJ)
case 6:x=8
return A.b(B.f6G(l),$async$EJ)
case 8:x=9
return A.b(l.akY(),$async$EJ)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hyD(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.ak(A.D(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amf(m,h),$async$EJ)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fNq(h)
case 11:v=new A.bjI(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EJ,w)},
f6H:function f6H(d){this.a=d},
f6I:function f6I(){},
f7b:function f7b(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7a:function f7a(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f79:function f79(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hCF(d){switch(d){case"new":return D.dPY
case"checking":return D.dPZ
case"connected":return D.dQ0
case"completed":return D.dQ_
case"failed":return D.dQ2
case"disconnected":return D.dQ3
case"closed":return D.aFi
case"count":return D.dQ1}return D.aFi},
hCG(d){switch(d){case"new":return D.aFj
case"gathering":return D.dQ4
case"complete":return D.a22}return D.aFj},
hMw(d){switch(d){case"stable":return D.dQ5
case"have-local-offer":return D.dQ6
case"have-local-pranswer":return D.dQ8
case"have-remote-offer":return D.dQ7
case"have-remote-pranswer":return D.dQ9
case"closed":return D.aFp}return D.aFp},
hKR(d){switch(d){case"new":return D.aFm
case"connecting":return D.aFn
case"connected":return D.aFo
case"closed":return D.a23
case"disconnected":return D.aFl
case"failed":return D.aFk}return D.a23},
a6N:function a6N(d,e){this.a=d
this.b=e},
Mq:function Mq(d,e){this.a=d
this.b=e},
US:function US(d,e){this.a=d
this.b=e},
Mp:function Mp(d,e){this.a=d
this.b=e},
Ds:function Ds(d,e){this.a=d
this.b=e},
ccw:function ccw(){},
fzI(d){var x=new B.Dr()
x.a=d
x.b=!0
return x},
Dr:function Dr(){this.b=this.a=$},
a6M:function a6M(){},
aqm:function aqm(){},
UT:function UT(d,e){this.a=d
this.b=e},
fy_(){var x=0,w=A.j(y.H)
var $async$fy_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fy_,w)},
fy2(d,e,f){var x=0,w=A.j(y.T),v
var $async$fy2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lW(D.lZ))){v=null
x=1
break}v=B.fmD(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fy2,w)},
fNq(d){var x,w=F.a7i.a1o(C.dA.aF(d),null)
if(w.length===0){x=C.dA.aF(d)
return C.cM.gcs().aF(x)}return C.cM.gcs().aF(w)},
hfA(d){var x,w,v=C.cw.aF(d)
try{x=C.c_.c4(0,F.a7h.b5T(v,!1))
return x}catch(w){x=C.c_.c4(0,v)
return x}},
fy3(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hfA(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c_.c4(0,C.cw.aF(x))
return v}catch(u){return x}}return null},
hfB(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aH(s,"\n")},
hfC(){var x,w=$.oV(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aE(32)]
return"DS"+C.d.fJ(v)},
aVH(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aVH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aVH)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$aVH,w)},
c1C(d,e){return B.hfD(d,e)},
hfD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c1C=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c1C)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$c1C,w)},
aVK(d){var x=0,w=A.j(y.y),v,u,t
var $async$aVK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVH(d),$async$aVK)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVK,w)},
aVJ(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aVJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hfC()
r=C.a.i(f)
t=C.dA.aF(s)
x=3
return A.b(B.c1C(u,A.D(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcs().aF(t),"usesRemaining",999999,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aVJ)
case 3:if(!h){v=null
x=1
break}v=new A.YN("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVJ,w)},
aVI(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aVI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aVH(o),$async$aVI)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.c_.c4(0,C.cw.aF(u))
if(J.iQ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a5(n)
$.ak.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aVI,w)},
c1D(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c1D=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.bxg("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c1D)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1D,w)},
aVL(d){var x=0,w=A.j(y.h),v,u,t
var $async$aVL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GD(),$async$aVL)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Y(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVL,w)},
am6(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$am6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$am6)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aVL(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am6,w)},
am4(d,e){var x=0,w=A.j(y.H)
var $async$am4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$am4)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$am4)
case 2:return A.h(null,w)}})
return A.i($async$am4,w)},
a4s(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4s=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4s)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GD(),$async$a4s)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dd(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.D(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4r(s),$async$a4s)
case 5:x=6
return A.b(B.am4(f,u),$async$a4s)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4s,w)},
a4t(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4t=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4t)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GD(),$async$a4t)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a4(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.Y(r,y.N,y.z)
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
return A.b(B.am4(g,q),$async$a4t)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4r(u),$async$a4t)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4t,w)},
a4u(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4u=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4u)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GD(),$async$a4u)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a4(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aVE(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.au(),$async$a4u)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.ak(A.D(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.N(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4u)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4u,w)},
c1E(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c1E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.au(),$async$c1E)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aC(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.Y(q,y.N,y.z)
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
return A.i($async$c1E,w)},
GE(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c1E(d),$async$GE)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aVL(t),$async$GE)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.am5(d),$async$GE)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aVE(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.am5(d),$async$GE)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GE,w)},
am5(d){var x=0,w=A.j(y.H)
var $async$am5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$am5)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$am5)
case 2:return A.h(null,w)}})
return A.i($async$am5,w)},
aVM(){var x,w=$.oV(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aE(32)]
return C.d.fJ(v)},
a4v(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fy4(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c1H(d){return B.hfF(d)},
hfF(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c1H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4v(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c1H)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$c1H,w)},
am8(d,e){return B.hfG(d,e)},
hfG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$am8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4v(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$am8)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$am8,w)},
c1J(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c1J=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4v(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.am8(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c1J)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c1J,w)},
c1I(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c1I=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4v(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.am8(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c1I)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c1I,w)},
c1K(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c1K=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4v(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.am8(u,A.D(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1K,w)},
c1L(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c1L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fy4(d)){v=null
x=1
break}x=3
return A.b(B.c1H(d),$async$c1L)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a4(u)
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
return A.i($async$c1L,w)},
a4C(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4C=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4C)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a4C)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.Y(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.Q(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4C,w)},
amc(d){return B.hfV(d)},
hfV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$amc)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.D(["signals",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amc)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.ak.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amc,w)},
amd(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$amd)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4C(),$async$amd)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.c_.c4(0,C.cw.aF(q))
if(J.iQ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dP(A.Y(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.N(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amc(s),$async$amd)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a5(i)
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
return A.i($async$amd,w)},
amf(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bW(),$async$amf)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4C(),$async$amf)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dP(A.Y(s,r,q),r,q)
r=C.dA.aF(C.a.i(e))
q.m(0,"answer",C.cM.gcs().aF(r))
q.m(0,"answerAt",new A.N(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amc(u),$async$amf)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amf,w)},
ame(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ame=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bW(),$async$ame)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4C(),$async$ame)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.c_.c4(0,C.cw.aF(u))
v=r
x=1
break}catch(n){t=A.a5(n)
$.ak.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ame,w)},
alf(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.qR)){v=null
x=1
break}x=3
return A.b(p.mb(e),$async$alf)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.fZ),$async$alf)
case 7:q=g
o=q
o=o==null?null:J.fa(J.xA(o))
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
return A.i($async$alf,w)},
hJ0(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fl3(d){return B.hJ2(d)},
hJ2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fl3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eJ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hU("media").J6(d,3600),$async$fl3)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
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
return A.i($async$fl3,w)},
Bx(d,e,f,g,h,i){var x=null
return B.hJ_(d,e,f,g,h,i)},
hJ_(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Bx=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fNt(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fy6(r),$async$Bx)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fl3(o),$async$Bx)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4w(r),$async$Bx)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aI7)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JQ(A.a([],g))
x=15
return A.b(d.eK(0,A.arb("GET",A.cp(n,0,null))).cI(0,C.Dg),$async$Bx)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4w(r),$async$Bx)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ir(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Bx)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aVO(r,k),$async$Bx)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Bx)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.SI(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a5(a4)
$.ak.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4w(r),$async$Bx)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bx,w)},
aMk(d){return B.hJ1(d)},
hJ1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eJ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hU("media").W(0,d),$async$aMk)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMk,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[208]
H=c[101]
P=c[189]
E=c[180]
Q=c[153]
R=c[102]
S=c[187]
G=c[83]
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
B.ccx.prototype={
azd(d,e){return this.cyj(d,e)},
cyj(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$azd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.D(["mandatory",A.Q(t,t),"optional",A.a([A.D(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dP(r,s,t)
t.v(0,d)
u=new q(A.k_(A.cr(t)))
t=J.k(u)
v=B.hkp(C.cM.gcs().aF(new A.cW(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$azd,w)}}
B.b_V.prototype={
bqE(d){var x=this,w=x.w
w.onclose=A.h7(new B.ccs(x))
w.onopen=A.h7(new B.cct(x))
w.onmessage=A.h7(new B.ccu(x))
w.onbufferedamountlow=A.h7(new B.ccv(x))},
gdh(d){return this.x},
adC(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$adC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dr()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fzI(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.e9(d.arrayBuffer(),y.af),$async$adC)
case 8:v=t.fzI(s.akt(f,0,null))
x=1
break
case 7:case 4:v=B.fzI(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adC,w)}}
B.b_W.prototype={
bqF(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.ccy(x)))
w.addEventListener("icecandidate",A.h7(new B.ccz(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.ccA(x)))
w.onicegatheringstatechange=A.h7(new B.ccB(x))
w.addEventListener("signalingstatechange",A.h7(new B.ccC(x)))
if(!$.fGp())w.addEventListener("connectionstatechange",A.h7(new B.ccD(x)))
w.addEventListener("negotiationneeded",A.h7(new B.ccE(x)))
w.addEventListener("track",A.h7(new B.ccF(x)))},
aha(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aha=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.e9(s.createAnswer(A.k_(A.cr(A.Q(y.N,y.z)))),y.aQ),$async$aha)
case 3:t=f
v=new B.UT(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aha,w)},
a4n(d,e){return this.bgj(0,e)},
bgj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.e9(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4n)
case 2:return A.h(null,w)}})
return A.i($async$a4n,w)},
a4v(d,e){return this.bgz(0,e)},
bgz(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.e9(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4v)
case 2:return A.h(null,w)}})
return A.i($async$a4v,w)},
akY(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$akY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.UT(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akY,w)},
bw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f1(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bw,w)}}
B.a9w.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WL.prototype={
S(){return new B.avQ()},
gd5(){return this.c}}
B.avQ.prototype={
Z(){this.a0()
this.aax()},
aax(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aax=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVF(u.e,u.c),$async$aax)
case 2:t=e
if(v.c!=null)v.n(new B.cVT(v,t))
return A.h(null,w)}})
return A.i($async$aax,w)},
O9(){var x=0,w=A.j(y.H),v,u=this,t
var $async$O9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.am1(t.e,t.c,!1),$async$O9)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(D.eif)
x=1
break}x=4
return A.b(B.a4q(u.a.c,"individual"),$async$O9)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a2X(A.eN(new B.cVQ(u),!1,null,y.H)),$async$O9)
case 5:case 1:return A.h(v,w)}})
return A.i($async$O9,w)},
Hv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Hv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f4U(o),$async$Hv)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4u(o.e,r,s,q),$async$Hv)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.E(y.q).f.P(D.efk)
x=1
break}x=5
return A.b(B.a4q(u.a.c,"member"),$async$Hv)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a2X(A.eN(new B.cVS(u),!1,null,y.H)),$async$Hv)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Hv,w)},
wP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4p(t.e,o,t.f,t.r,t.w,s),$async$wP)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4q(u.a.c,"org_owner"),$async$wP)
case 4:x=5
return A.b(B.am6(u.a.c),$async$wP)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f5o(o),$async$wP)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4s(s,t,o,q.c),$async$wP)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.E(y.q).f.P(D.efh)
x=1
break}x=10
return A.b(B.am6(u.a.c),$async$wP)
case 10:o=u.c
if(o==null){x=1
break}o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a2X(A.eN(new B.cVR(u),!1,null,y.H)),$async$wP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wP,w)},
B(d){var x,w,v,u=this,t=null,s=A.K(d).ax.a===C.H,r=s?C.iQ:C.oM,q=B.fy1(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.a9(0,C.G,C.az.j(0.35),C.fI,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eA0,C.i,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.fW,t,t,t),C.aC,D.eRm,C.U,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.i,t,t,new A.o(t,t,t,p,w,D.bGw,C.n),t,t,t,t,C.ej,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lg(new B.cVV(),t),C.P,w,C.dZ,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aP:C.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.a9Y(C.eD,C.asC,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc3K(),t),C.ac],v))
p.push(new B.a9Y(C.o5,C.Za,"Team Member","Sign in with your organization access code + password",u.gc4z(),t))
p.push(C.ac)
p.push(new B.a9Y(C.afI,C.a_v,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc45(),t))
return A.cg(t,r,A.br(!0,A.ce(A.u(p,C.al,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.ad9,t,t,C.af),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.a9Y.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.eq(A.A(A.a([A.p(s,A.U(t.c,C.c,s,s,s,30),C.i,s,s,new A.o(s,s,s,v,s,new A.a7(C.a1,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eG,A.C(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.oq,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.K(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.U(C.zV,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c2,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.i,C.K,0,s,s,s,s,s,C.aa)}}
B.ayj.prototype={}
B.aBo.prototype={}
B.j7.prototype={
lW(d){var x=this.b,w=C.a.oW(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
galC(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.Q(y.N,y.z)
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
b5p(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j7(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cwP(d){return this.b5p(null,d)},
ayZ(d){return this.b5p(d,null)}}
B.SC.prototype={
S(){return new B.azG(new A.cn(null,y.A))},
gd5(){return this.c}}
B.azG.prototype={
Z(){this.a0()
this.aay()},
aay(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aay=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ad(u.a.c),$async$aay)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dFg(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aay,w)},
aaz(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$aaz)
case 3:t=u.c
if(t!=null)t.E(y.q).f.P(D.ej9)
case 1:return A.h(v,w)}})
return A.i($async$aaz,w)},
X1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$X1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alf(s.d,4),$async$X1)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.re(r,"ngmy_my_code_"+m+".png"),$async$X1)
case 8:q=e
o=s.c
if(o!=null)o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
o=s.c
if(o!=null)o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$X1,w)},
ae2(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ae2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7n("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ae2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ae2,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===C.H,n=o?C.iQ:C.oM,m=o?C.c:C.M,l=A.eK(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.md
else if(q.e==null)x=A.at(new A.B(C.ej,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.az.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZA,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.i,p,p,new A.o(p,p,u,v,p,new A.a7(C.a1,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.acK,p,p,1/0)
v=A.m(20)
u=A.a([new A.a9(0,C.G,C.az.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.ce(A.u(A.a([x,C.m6,w,C.k8,new A.es(A.p(p,A.ph(p,p,!1,B.hfw(s),p,!0,!0,220,!1,C.c),C.i,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c2,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.k8,A.A(A.a([A.C(A.ew(M.Aa,C.QW,q.gbY3(),p),1),C.av,A.C(A.dn(C.xb,C.a4i,q.gbY4(),A.bk(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.U,new A.a8(1/0,p,A.ew(L.Y4,D.eNF,q.gciB(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JL,p,p,C.af)
x=r}return A.cg(l,n,x,p,!1,!1,p,p)}}
B.SG.prototype={
S(){return new B.azJ(new A.ao(C.aq,$.as()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.azJ.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GC(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.as()
x.O$=0
this.e.p()
this.a2()},
X2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GC(u.d.a.a)
if(t==null){u.n(new B.dGp(u))
x=1
break}u.n(new B.dGq(u))
s=u.a
r=s.c
x=3
return A.b(B.a4o(s.d,new B.dGr(u),t,r),$async$X2)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dGs(u))
if(q){s=u.c
s.toString
A.a6(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$X2,w)},
a_4(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.n(new B.dGt(r))
u=4
q=J.fl(r.a.d)
x=7
return A.b(B.qK(r.a.c,q),$async$a_4)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dGu(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aeM(p,m,l,j,k),$async$a_4)
case 8:o=e
if(r.c!=null)r.n(new B.dGv(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a5(h)
if(r.c!=null)r.n(new B.dGw(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dGx(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_4,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===C.H,i=j?D.a9q:D.a7M,h=j?D.aaO:C.c,g=j?C.aN:C.M,f=j?C.bO:C.ai,e=j?D.a8I:C.aJ
i=[i,e,h,g,f,j?C.eS:C.bU]
x=A.K(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eK(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.ec(A.p(k,k,C.i,k,k,new A.o(k,k,k,k,k,new A.bT(C.C,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.ec(A.p(k,k,C.i,k,k,new A.o(k,k,k,k,k,new A.bT(C.C,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bvD,C.i,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aE,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eG,A.C(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.i,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.ft,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZA,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uG(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bel()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aI(k,C.T,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.JE,k,k,"",k,!0,new A.b0(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b0(4,A.m(18),new A.ay(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ad,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dGy(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.ly,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.Ju(l.a.d,4)
m=A.z(new A.I(m,new B.dGz(x,new A.aCA(i)),m.$ti.k("I<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.B(C.ng,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a_,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.i,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eg,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.edT)
else q.push(A.U(C.kU,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.C(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aT,A.de(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b7,new A.o(u,k,s,t,k,k,C.n),C.i8,k,k,k,C.eM,k,k,k)],r))}e=A.C(A.ce(A.u(e,C.al,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bh3,k,k,C.af),1)
u=l.f?k:l.gciC()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ew(L.Y4,D.eOz,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.c9,k,new A.b5(q,C.V),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbY5()
t=A.bk(C.az,k,k,0,C.c,k,C.ms,k,new A.b5(A.m(16),C.V),k,k,k)
return A.cg(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mR(new B.dGA(),A.u(A.a([e,new A.B(D.bgz,A.u(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.qI:D.eN4,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cm,C.Uu,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bel.prototype={
nT(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f3(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.b9(v,A.h0(C.bm,v.length),C.aL)}}
B.SD.prototype={
S(){return new B.azH()}}
B.azH.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.as()
u.d!==$&&A.aO()
u.d=new A.ao(new A.b9(w,C.aY,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.b9(x,C.aY,C.aL),v)
u.f!==$&&A.aO()
u.f=new A.ao(C.aq,v)},
p(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.as()
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
aaA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aaA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dFh(r))
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
return A.b(B.a4t(p,m,n,o,C.a.i(l).length===0?null:l),$async$aaA)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.E(y.q).f.P(D.eiL)
s=[1]
x=4
break}p.E(y.q).f.P(D.eho)
p=r.c
p.toString
A.a6(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dFi(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aaA,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax.a===C.H?C.iQ:C.oM,q=A.eK(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eGh,s,s,s,1,s,!0),p=A.p(s,D.ba8,C.i,s,s,new A.o(s,s,s,A.m(22),s,E.EH,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aI(s,C.T,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bCh,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aI(s,C.T,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCc,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aI(s,C.T,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bCr,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gbY6()
u=A.bk(C.az,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.cg(q,r,A.ce(A.u(A.a([p,C.d1,o,C.ac,x,C.ac,w,C.m6,A.bJ(t.r?C.qI:C.aKD,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.af),s,!1,!1,s,s)}}
B.a9d.prototype={}
B.bqx.prototype={
a1E(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a1E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gH(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ck(r.akf()))
x=3
return A.b(B.P4(t,s),$async$a1E)
case 3:if(!e){$.ak.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a1E,w)},
gd5(){return this.a}}
B.Lm.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WK.prototype={
S(){return new B.avP(new A.ao(C.aq,$.as()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.avP.prototype={
Z(){this.a0()
$.aT.x1$.push(new B.cVP(this))},
p(){var x=this.d
x.R$=$.as()
x.O$=0
this.e.p()
this.a2()},
bYc(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZI(d),u=x.a.c,t=u?C.hl:v.a[2],s=u?C.c:v.a[3],r=u?C.aP:v.a[4],q=u?C.iQ:v.a[0],p=A.m(24),o=A.H(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.a9(0,C.G,C.az.j(u?0.25:0.12),C.fI,32)],n),l=A.p(w,T.aik,C.i,w,w,new A.o(w,w,w,A.m(18),A.a([new A.a9(0,C.G,C.az.j(0.4),C.cv,16)],n),C.aj6,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uG(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqc()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aI(!1,C.T,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.Dt,w,w,"",w,!0,new A.b0(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b0(4,A.m(16),D.aPy),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ad,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cVN(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.ly,w,w,w,w)
f=f[1]
f=A.C(A.dU(C.mS,new B.cVO(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.c9,w,new A.b5(A.m(14),C.V),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.a9(0,C.G,C.az.j(0.35),C.cC,12)],n)
g=y.p
return A.ey(w,C.K,new A.d3(Q.HW,A.bQ(new A.B(C.wn,A.u(A.a([l,C.aT,k,C.P,j,C.dZ,i,C.dZ,A.A(A.a([f,C.av,A.C(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dLd,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbYb(),w,w,w,w,w,w,w),C.i,C.K,0,w,w,w,w,w,C.aa),new A.o(w,w,w,h,n,K.Lu,C.n),C.ba),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.ba),w),w,w,w,C.JN,C.cZ,w,w,w)}}
B.bqc.prototype={
nT(d,e){return e.ah5(e.a.toUpperCase())}}
B.SE.prototype={
S(){return new B.azI(A.a([],y.r),A.aY(y.N))},
gd5(){return this.c}}
B.azI.prototype={
Z(){var x=this
x.a0()
x.rN()
x.w=A.dD(C.iS,new B.dGn(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SN()
this.a2()},
YY(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$YY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ll(u.a.c),$async$YY)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zn(u.a.c),$async$YY)
case 4:u.n(new s.dFL(u,e))
u.hL("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$YY,w)},
rN(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ll(u.a.c),$async$rN)
case 3:t=e
x=4
return A.b(B.zn(u.a.c),$async$rN)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dFM(u,s))
if(t>0)u.hL("Received "+A.t(t)+" file(s) via My Code.")
u.LH(u.d)
B.Ad(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rN,w)},
LH(d){return this.but(d)},
but(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4y(r,u.a.c),$async$LH)
case 8:p=f
if(u.c==null){x=1
break}new B.dFk(u,r,p).$0()
u.c.e1()
case 7:if(!(C.a.a_(r.c,"video/")||r.lW(D.lZ))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SL(r,u.a.c),$async$LH)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zn(u.a.c),$async$LH)
case 12:u.n(new o.dFl(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LH,w)},
M1(d){return this.bAq(d)},
bAq(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$M1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4y(d,u.a.c),$async$M1)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dFq(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$M1)
case 6:u.hL("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$M1)
case 7:u.hL("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$M1,w)},
hL(d){var x=null,w=this.c
if(w==null)return
w.E(y.q).f.P(A.aZ(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rO(d,e){return this.csA(d,e)},
csA(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGb(r,e))
u=3
x=6
return A.b(d.$0(),$async$rO)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dGc(r))
$.eG.lR()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rO,w)},
gaPy(){var x=this.a
return x.f||x.r||x.w},
Gy(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Gy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaPy()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c1A(s,n,r,q,o,t),$async$Gy)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hL("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.feF(o,u.a.c),$async$Gy)
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
return A.b(B.Bz(s,o,r,q,n,t),$async$Gy)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gy,w)},
Y3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Y3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.am6(u.a.c),$async$Y3)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hL("No organization portal found.")
x=1
break}t=J.a4(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).cz(A.eN(new B.dFI(u,r,q),!1,null,y.H)),$async$Y3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Y3,w)},
Z8(d){return this.ccr(d)},
ccq(){return this.Z8(1)},
ccr(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Z8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaPy()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.am3(u.a.c),$async$Z8)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Z8,w)},
a8F(d,e,f){return this.bQq(d,e,f)},
bQq(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a8F=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL(e)
x=1
break}x=3
return A.b(u.rO(new B.dFF(u,d,null,e,f),"Uploading\u2026"),$async$a8F)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
buC(){B.h0C(!1,new B.dFo(this))
return},
che(){this.n(new B.dFQ(this))},
atU(){var x=0,w=A.j(y.H),v=this
var $async$atU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.buC()
return A.h(null,w)}})
return A.i($async$atU,w)},
a8B(){var x=0,w=A.j(y.H),v=this
var $async$a8B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dFu(v),"Importing\u2026"),$async$a8B)
case 2:return A.h(null,w)}})
return A.i($async$a8B,w)},
Q5(d){return this.cs2(d)},
cs2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lW(D.lZ)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cz(A.eN(new B.dG8(u,d),!1,null,y.H)),$async$Q5)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lW(D.Np)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cz(A.eN(new B.dG9(u,d),!1,null,y.H)),$async$Q5)
case 8:x=1
break
case 7:x=u.bR7(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cz(A.eN(new B.dGa(u,d),!1,null,y.H)),$async$Q5)
case 11:x=1
break
case 10:u.hL("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Q5,w)},
bR7(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.oW(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cnt,C.a.aV(x,w+1).toLowerCase())},
abQ(d){return this.c3O(d)},
c3O(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lW(D.lZ)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cz(A.eN(new B.dFG(u,d),!1,null,y.H)),$async$abQ)
case 5:x=1
break
case 4:u.n(new B.dFH(u,d))
case 1:return A.h(v,w)}})
return A.i($async$abQ,w)},
Pw(d){return this.ck1(d)},
ck1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Pw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oy(t,s.c,s.f),$async$Pw)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dG1(u,d),"Preparing QR\u2026"),$async$Pw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Pw,w)},
aer(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aer=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dG2(),A.S(t).k("I<1,n>")).fD(0)}t=u.d
s=A.S(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dG3(q),s),s.k("E.E"))
if(r.length===0){u.hL("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Pw(r),$async$aer)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aer,w)},
aek(d){return this.cjB(d)},
cjB(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aek=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZI(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,new B.dFW(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aek)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Q5(d)
break
case"qr":u.Pw(A.a([d],y.r))
break
case"send_my_code":u.c4o(A.a([d],y.r))
break
case"save":u.adI(d)
break
case"delete":u.Hg(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aek,w)},
V6(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$V6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dFr(),A.S(t).k("I<1,n>")).fD(0)}t=u.d
s=A.S(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dFs(q),s),s.k("E.E"))
if(r.length===0){u.hL("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oy(t,s.c,s.f),$async$V6)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dFt(u,r),"Preparing file\u2026"),$async$V6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$V6,w)},
acV(d){return this.caX(d)},
caX(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$acV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h1j(d,!1),$async$acV)
case 3:s=f
r=s==null
q=B.a4v(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hL("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$acV,w)},
abW(){var x=0,w=A.j(y.H),v=this,u
var $async$abW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fm7(u,v.a.c),$async$abW)
case 2:return A.h(null,w)}})
return A.i($async$abW,w)},
buB(){B.h0C(!1,new B.dFn(this,null))
return},
Hu(d,e){return this.c4p(d,e)},
aUX(d){return this.Hu(null,d)},
c4o(d){return this.Hu(d,null)},
c4p(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Hu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a3<1>")
k=A.z(new A.a3(p,new B.dFJ(s),o),o.k("E.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wa.c2().ajC(!0,C.Wd,!1),$async$Hu)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.rO(new B.dFK(l,s,r),"Preparing\u2026"),$async$Hu)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a5(j)
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
return A.b(B.byj(p,l,e,s.a.c),$async$Hu)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Hu,w)},
GN(d){return this.bQd(d)},
bQd(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hfv(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aUX(t),$async$GN)
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
return A.b(u.rO(new B.dFD(u,d),"Receiving video\u2026"),$async$GN)
case 11:x=1
break
case 10:x=12
return A.b(u.rO(new B.dFE(u,d),"Receiving\u2026"),$async$GN)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GN,w)},
CQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Bs()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.acV(t),$async$CQ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GN(s),$async$CQ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cz(A.eN(new B.dFO(u),!1,null,y.N)),$async$CQ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rN(),$async$CQ)
case 10:x=1
break
case 9:x=11
return A.b(u.GN(C.a.i(r)),$async$CQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CQ,w)},
adI(d){return this.cfQ(d)},
cfQ(d){var x=0,w=A.j(y.H),v=this
var $async$adI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dFN(v,d),"Saving\u2026"),$async$adI)
case 2:return A.h(null,w)}})
return A.i($async$adI,w)},
Hg(d){return this.bCH(d)},
bCH(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kM(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hg)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c1D(t),$async$Hg)
case 6:case 5:s=d.a
x=7
return A.b(B.CZ(u.a.c,s),$async$Hg)
case 7:u.r.W(0,s)
x=8
return A.b(u.rN(),$async$Hg)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hg,w)},
aex(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aex=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZI(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,new B.dG7(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aex)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.abW()
break
case"import":u.a8B()
break}case 1:return A.h(v,w)}})
return A.i($async$aex,w)},
bY9(d){var x=d.c
if(C.a.a_(x,"video/")||d.lW(D.lZ))return C.p8
if(C.a.a_(x,"image/")||d.lW(D.Np))return C.rO
if(C.a.q(x,"pdf"))return E.L0
return D.ag7},
B(d){var x,w,v=this,u=null,t=B.ZI(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EA,u,u,u,new B.dGi(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bw8,u,u,u,v.e?u:v.gc46(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gchd()
n.push(A.aF(u,u,u,u,A.U(v.r.a===x?D.bqA:E.agx,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y1,u,u,u,v.e?u:v.gbYa(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nq,u,u,u,v.e?u:v.gaW_(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bxJ,u,u,u,v.e?u:new B.dGj(v),u,u,u,u,"More options",u))
q=A.eK(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lg(new B.dGk(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.ec(A.p(u,u,C.i,u,u,new A.o(u,u,u,u,u,new A.bT(C.C,0.5,C.w,u,0,A.a([p.j(A.K(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.ec(A.p(u,u,C.i,u,u,new A.o(u,u,u,u,u,new A.bT(C.C,0.5,C.w,u,0,A.a([C.az.j(A.K(d).ax.a===C.H?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mL(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.C(new B.avM(C.iY,s,!0,t,w?u:v.gck2(),u),1)
x.push(new A.B(D.bfm,A.mR(new B.dGl(),A.A(A.a([s,C.av,A.C(new B.avM(C.up,"Export",!1,t,w?u:v.gbG5(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cm,C.i9,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b93(t,v.e?u:v.gaW_(),u)
else s=A.jQ(!0,u,u,new B.dGm(v,t),s,u,D.bfe,u,u,!1,!1)
x.push(A.C(s,1))
return A.cg(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.avM.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.az,t,t,0,C.c,t,C.u8,t,new A.b5(s,C.V),t,t,t)
return A.dn(A.U(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.u8,t,new A.b5(s,C.V),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ew(A.U(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ez,t,t,t),u.r,v)}}
B.b93.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.mR(new B.cVL(),new A.B(E.Vq,A.u(A.a([A.mR(new B.cVM(),A.p(x,A.U(C.wH,v[5],x,x,x,36),C.i,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aE,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.ia,x,new A.bm(0.86,1,w),s),C.dZ,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.U,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dZ,A.dn(C.nq,D.eRE,this.d,A.bk(C.az,x,x,x,C.c,x,C.Vl,x,new A.b5(A.m(16),C.V),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.cm,C.zj,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9x.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dA(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lW(D.lZ))p=D.cSK
else{p=C.a.a_(p,"image/")||i.lW(D.Np)
n=y.O
p=p?A.a([C.cU,C.az],n):A.a([C.aK.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.U(k.w,C.c,j,j,j,22),C.i,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aE,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a0,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.galC()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lW(D.lZ))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.C(A.u(A.a([q,C.aw,A.d(C.d.aH(n," \xb7 "),j,2,C.a0,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.U(C.fv,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lW(D.lZ)))l.push(A.fvP(C.az,!1,j,j,j,!1,j,j,new B.cW7(k),j,j,new A.b5(A.m(5),C.V),j,j,!1,u))
x=A.U(C.nm,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mR(new B.cW8(),new A.B(C.e3,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.B(C.UR,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.i,w,0,j,j,new A.b5(v,new A.ay(t,s,C.r,-1)),j,j,C.aa),j),C.cm,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WM.prototype={
S(){return new B.avR()},
gd5(){return this.c}}
B.avR.prototype={
Z(){this.a0()
this.wH()},
p(){B.hfK(this.e)
this.a2()},
wH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qK(o.c,o.d),$async$wH)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aD.gag(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hfN(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hfM(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cW4(s))
x=1
break}s.n(new B.cW5(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a5(l)
if(s.c==null){x=1
break}s.n(new B.cW6(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wH,w)},
a_3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qK(t.c,t.d),$async$a_3)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(D.efS)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aeM(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_3)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_3,w)},
bQ6(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k5(u,C.C,v,new B.cW2(w,t),C.fO,C.dp,!0,v,v,v,v)
else if(t!=null&&!C.aD.gag(t))x=A.fU(t,C.C,v,new B.cW3(w),C.fO,C.dp,!0,v,!1,v,v)
else return C.bF
return A.tE(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZI(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ac,u,u,u,v.gaZI(),u,u,u,u,"Share / save",u))
r=A.eK(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cn
else{q=v.r
if(q!=null)t=new A.B(C.ej,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.B(C.ej,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aT,A.dn(C.Ac,D.eC8,v.gaZI(),A.bk(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bQ6()}return A.cg(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.WJ.prototype={
S(){return new B.avO(A.afx(),C.bs,C.bs)},
gd5(){return this.c}}
B.avO.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fj(w,A.a2(w).k("fj<1>")).hV(new B.cVI(v))
x.gcFo().hV(new B.cVJ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fj(x,A.a2(x).k("fj<1>"))}if(x==null)x=C.aVm
x.hV(new B.cVK(v))
v.wH()},
wH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qK(p.c,p.d),$async$wH)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cVB(s))
x=1
break}x=8
return A.b(s.d.AT(0,new A.a0R(r,s.a.d.c)),$async$wH)
case 8:if(s.c==null){x=1
break}s.n(new B.cVC(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
if(s.c==null){x=1
break}s.n(new B.cVD(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wH,w)},
X3(){var x=0,w=A.j(y.H),v=this,u
var $async$X3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fQ(0),$async$X3)
case 5:x=3
break
case 4:x=6
return A.b(u.hY(0),$async$X3)
case 6:case 3:return A.h(null,w)}})
return A.i($async$X3,w)},
aNw(d){var x=d.a
return C.a.aU(C.o.u(C.o.aj(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.aj(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZI(d),m=C.o.aj(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eK(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cn
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bry,C.i,o,o,new A.o(o,o,o,A.m(24),o,K.Lu,C.n),o,88,o,o,o,o,o,88)
t=A.mq(C.az,o,o,m,0,new B.cVE(p),C.o.D(C.o.aj(p.w.a,1000),0,m))
x=A.d(p.aNw(p.w)+" / "+p.aNw(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.az,o,o,o,o,D.ecq,o,o,o,o,o,o)
r=p.f
q=A.U(r?H.wT:C.iX,o,o,o,o,o)
x=A.u(A.a([u,C.k8,t,x,C.d1,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbYd(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cg(v,w,A.at(new A.B(C.uc,x,o),o,o,o),o,!1,!1,o,o)}}
B.Ny.prototype={
S(){return new B.avU()},
gd5(){return this.c}}
B.avU.prototype={
Z(){this.a0()
this.Nv()},
Nv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Nv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fy2(o.c,o.d,new B.cWl(s)),$async$Nv)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cWm(s))
x=1
break}s.e=r
q=O.hBH(r)
if(q==null){s.n(new B.cWn(s))
x=1
break}s.d=q
q.aJ(0,s.gaUM())
x=8
return A.b(q.ic(0).cI(0,C.ru),$async$Nv)
case 8:if(s.c==null){x=1
break}s.n(new B.cWo(s))
x=9
return A.b(q.oZ(0),$async$Nv)
case 9:q.rp(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
if(s.c==null){x=1
break}s.n(new B.cWp(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nv,w)},
c2s(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cWq(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BC(0,x.gaUM())
w=x.d
if(w!=null)w.p()
B.hL4(x.e)
x.a2()},
aaD(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVN(u.c,u.d),$async$aaD)
case 2:t=e
u=v.c
if(u!=null)u.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aaD,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZI(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eK(A.a([A.aF(t,t,t,t,C.qj,t,t,t,u.gbY7(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i4(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cn
else{q=u.r
if(q!=null)s=new A.B(C.ej,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.af1(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fY(x,new A.am(C.C,t,C.a9,C.q,A.a([new A.yV(s,t),A.aJ(t,A.Fe(A.p(t,A.U(q?H.wT:C.iX,C.c,t,t,t,48),C.i,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c2,t,t,t),C.b7,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cWs(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cg(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.WO.prototype={
S(){return new B.avS(new A.cn(null,y.A))}}
B.avS.prototype={
gcsj(){var x,w,v=this.a
if(v.e!==D.OD)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcs0(){var x,w,v=this.a
if(v.e!==D.xJ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcsj()
if(x!=null){v.Oy(x)
v.e=A.dD(R.Dj,new B.cWh(v,x))}w=v.gcs0()
if(w!=null){v.Ox(w)
v.f=A.dD(C.fV,new B.cWi(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
Ox(d){return this.c9e(d)},
c9e(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ox=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amb(d),$async$Ox)
case 3:t=f
x=4
return A.b(B.c1W(d),$async$Ox)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cW9(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Ox,w)},
Oy(d){return this.c9f(d)},
c9f(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fmo(d),$async$Oy)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwm(t),$async$Oy)
case 4:if(u.c==null){x=1
break}u.n(new B.cWa(u))
u.c.E(y.q).f.P(D.aHJ)
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
gbUX(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbY8(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
ZP(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ZP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Bs()){t=u.c
if(t!=null)t.E(y.q).f.P(D.eiV)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cz(A.eN(new B.cWb(),!1,null,y.N)),$async$ZP)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwm(s),$async$ZP)
case 4:t=u.c
if(t!=null)t.E(y.q).f.P(D.aHJ)
case 1:return A.h(v,w)}})
return A.i($async$ZP,w)},
a6B(d){return this.bAr(d)},
bAr(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aH(t,", "))),$async$a6B)
case 3:if(d.e!=null){t=d.E(y.q).f
t.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6B,w)},
aaB(d){return this.bAb(d)},
bAb(d){var x=0,w=A.j(y.H),v=this
var $async$aaB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$aaB)
case 2:if(d.e!=null)d.E(y.q).f.P(D.egk)
return A.h(null,w)}})
return A.i($async$aaB,w)},
ZK(d){return this.cfS(d)},
cfS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ZK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alf(s.d,4),$async$ZK)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.re(r,"ngmy_doc_share_qr.png"),$async$ZK)
case 8:q=f
if(d.e!=null)d.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a5(n)
if(d.e!=null)d.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ZK,w)},
gaQy(){var x,w=this.a
if(w.e!==D.FH)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6y(d){return this.bAk(d)},
bAk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaQy()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6y)
case 3:if(d.e!=null)d.E(y.q).f.P(D.ehV)
case 1:return A.h(v,w)}})
return A.i($async$a6y,w)},
aaC(){var x=0,w=A.j(y.H),v=this,u
var $async$aaC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SN(),$async$aaC)
case 2:u=v.c
if(u!=null)A.a6(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$aaC,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZI(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FH&&i!==D.OD&&i!==D.xJ
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eK(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FH||t===D.OD||t===D.xJ?l:A.aF(l,l,l,l,C.lq,l,l,l,m.gaT6(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.ph(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gbUX(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FH){t=C.az.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.i,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}q.push(C.aT)
q.push(A.d(m.gbY8(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.U,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bBk,D.eKt,new B.cWc(m,d),l)],p))}if(m.a.e===D.FH&&m.gaQy()!=null)C.d.v(q,A.a([C.U,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a_,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.by2,D.eHw,new B.cWd(m,d),l)],p))
if(m.a.e===D.xJ){x=(m.w?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cq:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.i,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}if(m.a.e===D.OD){x=(m.r?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cq:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.i,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l),C.ac,A.dn(D.bu0,D.eNn,m.gcgf(),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nR(i,A.cg(v,w,new A.B(C.a8,A.u(A.a([A.C(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.i,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.A(A.a([A.C(A.ew(M.Aa,C.QW,new B.cWe(m,d),l),1),C.av,A.C(A.dn(C.xb,C.a4i,new B.cWf(m,d),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a8(1/0,l,A.bJ(C.yd,m.gaT6(),A.bk(C.aK,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWg(),y.C)}}
B.a9v.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ce(A.u(A.a([w,C.aT,A.p(x,A.ph(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.i,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.af)
return A.ei(A.a([A.bJ(C.BK,new B.cVA(d),x)],u),x,x,C.mg,v,x,x,x,x,D.eBa,x)}}
B.WI.prototype={
S(){return new B.avN(A.y4(C.w3,C.n_,C.rZ))}}
B.avN.prototype={
p(){this.d.p()
this.a2()},
asE(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).K(t)
return}}},
B(d){var x=null
return A.cg(A.eK(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eHW,x,x,x,1,x,!0),C.x,A.y3(this.d,C.bP,this.gasD()),x,!1,!1,x,x)}}
B.WP.prototype={
S(){return new B.avT(A.y4(C.w3,C.n_,C.rZ))},
gd5(){return this.c}}
B.avT.prototype={
bR9(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ach(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ach=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q2("text/plain"),$async$ach)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.E(y.q).f.P(D.eiP)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$ach,w)},
a7l(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h1j(p,!0),$async$a7l)
case 3:t=e
p=t==null
s=B.a4v(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.E(y.q).f.P(D.efr)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7l,w)},
p(){this.d.p()
this.a2()},
asE(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bR9(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahq,v,v,v,w.gbFE(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Y8,v,v,v,w.gc6F(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eK(A.a([u,t,A.aF(v,v,v,v,A.U(w.f?C.rM:P.KK,v,v,v,v,v),v,v,v,new B.cWk(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eO8,v,v,v,1,v,!0)
u=A.y3(w.d,C.bP,w.gasD())
x=A.m(20)
return A.cg(t,C.x,new A.am(C.W,v,C.a9,C.q,A.a([u,A.at(A.p(v,v,C.i,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dPF],s),v),v,!1,!1,v,v)}}
B.b94.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nV
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.U(s.c,x,r,r,r,22),C.i,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nV:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.B(C.Vw,A.A(A.a([u,C.bb,A.C(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.U(C.el,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.i,C.K,0,r,r,r,r,r,C.aa)}}
B.a6N.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mq.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.US.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mp.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Ds.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.ccw.prototype={}
B.Dr.prototype={}
B.a6M.prototype={}
B.aqm.prototype={}
B.UT.prototype={}
var z=a.updateTypes(["av<~>()","R(j7)","n(j7)","SE(Z)","~()","WL(Z)","G(G,j7)","Ny(Z)","~(lB)","cu(Dr)","av<j7?>(@)","SC(Z)","SG(Z)","B(j7)","j7(@)","a0<n,@>(j7)","WK(Z)","SD(Z)","WM(Z)","WJ(Z)","WO(Z)","a9v(Z)","al<j7>()","WP(Z)","a9x(Z,G)","WI(Z)","a0<n,aC>(j7)","cu(US)","cu(a6M)","av<cu>(Dr)"])
B.ccs.prototype={
$1(d){var x=this.a
x.x=D.aFh
x.y.G(0,D.aFh)},
$S:68}
B.cct.prototype={
$1(d){var x=this.a
x.x=D.aFg
x.y.G(0,D.aFg)},
$S:68}
B.ccu.prototype={
$1(d){var x=this.a
x.adC(A.aL2(d.data)).bC(new B.ccr(x),y.b)},
$S:68}
B.ccr.prototype={
$1(d){var x=this.a
x.z.G(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ccv.prototype={
$1(d){},
$S:68}
B.ccy.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hko(d.channel))},
$S:15}
B.ccz.prototype={
$1(d){},
$S:15}
B.ccA.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hCF(w.iceConnectionState)
x.cx=w
if($.fGp())switch(w.a){case 0:x.cy=D.aFm
break
case 1:x.cy=D.aFn
break
case 3:x.cy=D.aFo
break
case 5:x.cy=D.aFk
break
case 6:x.cy=D.aFl
break
case 7:x.cy=D.a23
break
default:break}},
$S:152}
B.ccB.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hCG(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:152}
B.ccC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hMw(w.signalingState)},
$S:152}
B.ccD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hKR(w.connectionState)},
$S:152}
B.ccE.prototype={
$1(d){},
$S:152}
B.ccF.prototype={
$1(d){},
$S:15}
B.f1F.prototype={
$1(d){var x=y.F.a(new A.r4([],[]).oM(d.target.result,!1)),w=C.w4.q(x.objectStoreNames,"blobs")
if(!w)C.w0.J4(x,"blobs")},
$S:180}
B.flX.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uC.f1(this.b)
$.eG.lR()
this.c.$1(d)},
$S:431}
B.flZ.prototype={
$1(d){return this.a.$1(B.ht3(this.b,this.c))},
$S:30}
B.flY.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.flW.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fma.prototype={
$1(d){var x=this
return B.fSd(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fmb.prototype={
$1(d){var x=this
return B.fSd(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f2Y.prototype={
$1(d){var x=this
return B.c1x(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cVT.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cVQ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1x(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cVS.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1x(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cVR.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1x(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cVV.prototype={
$4(d,e,f,g){var x=null
return A.js(A.A(A.a([A.aF(x,x,x,x,D.bsD,x,x,x,new B.cVU(d),x,x,x,x,x,x),A.C(A.Dd(D.Nb,!0,x,C.Xc,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nb,x,g,C.ads,0,e,f)},
$C:"$4",
$R:4,
$S:403}
B.cVU.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.f4X.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.em,y.o).w,t=this.a,s=t?C.hl:C.c,r=A.m(28),q=A.p(v,D.bar,C.i,v,v,D.aR9,v,v,v,v,D.adj,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aI(v,C.T,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bwG,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.B(new A.L(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.B(C.zw,A.u(A.a([o,C.ac,A.aI(v,C.T,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahE,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bv,A.A(A.a([A.C(A.dU(C.dd,new B.f4V(d),v),1),C.av,A.C(A.bJ(D.eGz,new B.f4W(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.i,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Ju,v,v,v,v),v)},
$S:60}
B.f4V.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.f4W.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.E(y.q).f.P(D.egz)
return}x=w.b.a.a
A.a6(w.c,!1).K(new B.ayj(v,x))},
$S:0}
B.f5q.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.em,y.o).w,u=x.a,t=u?C.hl:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.B(new A.L(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.bah,C.i,w,w,D.aSv,w,w,w,w,D.adj,w,w,1/0),new A.B(C.zw,A.u(A.a([A.aI(w,C.T,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fCO(u,"Organization name",C.DY,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.U,A.aI(w,C.T,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fCO(u,"Access code",C.mA,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.U,A.aI(w,C.T,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fCO(u,"Member password",N.Ew,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bv,A.bJ(D.eOc,new B.f5p(r,q,p,d),A.bk(C.az,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.i,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Ju,w,w,w,w),w)},
$S:60}
B.f5p.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.E(y.q).f.P(D.egE)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).K(new B.aBo(u,x,w))},
$S:0}
B.c1o.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a4(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cp(j,0,null):s.b.aN(j)
u=4
x=7
return A.b(A.un(p,null).cI(0,C.Ut),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ck(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ae(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a5(h)
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
B.c1u.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1v.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c1w.prototype={
$1(d){return d.b},
$S:z+2}
B.c1q.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1r.prototype={
$1(d){return d.b},
$S:z+2}
B.c1p.prototype={
$1(d){return A.Y(y.f.a(d),y.N,y.z)},
$S:12}
B.c1s.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c1t.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fm8.prototype={
$1(d){return new B.SC(this.a,null)},
$S:z+11}
B.fm9.prototype={
$1(d){return new B.SG(this.a,this.b,this.c,null)},
$S:z+12}
B.dFg.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dGp.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dGq.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dGr.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dGo(x,d))},
$S:2}
B.dGo.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGs.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGt.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dGu.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dGv.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGw.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dGx.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGA.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.dGy.prototype={
$1(d){var x=this.a
return x.f?null:x.X2()},
$S:2}
B.dGz.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lW(D.Np))s=C.rO
else s=C.a.a_(s,"video/")||d.lW(D.lZ)?C.p8:D.ag7
x=this.b.a
w=y.p
return new A.B(C.li,A.A(A.a([A.p(v,A.U(s,C.az,v,v,v,18),C.i,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.C(A.u(A.a([A.d(d.b,v,v,C.a0,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.galC(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dFh.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dFi.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c1y.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:88}
B.c1z.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:88}
B.fmF.prototype={
$2(d,e){return e===this.a},
$S:269}
B.eZT.prototype={
$1(d){return J.k(d)},
$S:17}
B.f39.prototype={
$1(d){var x=this.b
B.hrc(C.DK.ga3e(this.a)).bC(x.gcvf(x),y.H)},
$S:117}
B.f3a.prototype={
$1(d){return this.a.cZ(0,null)},
$S:117}
B.f3b.prototype={
$0(){return null},
$S:11}
B.c1N.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3c.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Y(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.L(v)
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
return new B.j7(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f73.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f1R.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f1S.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c1S.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lW(D.lZ)},
$S:z+1}
B.fqA.prototype={
$1(d){return new B.WK(this.a,null)},
$S:z+16}
B.cVP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fs()},
$S:8}
B.cVN.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).K(x)
return null},
$S:2}
B.cVO.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.dGn.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.YY()},
$S:14}
B.dFL.prototype={
$0(){var x=J.bzk(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFM.prototype={
$0(){var x=J.bzk(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFk.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFj(this.b))
if(w>=0){x=x.d
x[w]=x[w].ayZ(this.c)}},
$S:0}
B.dFj.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFl.prototype={
$0(){var x=J.bzk(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFq.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFp(this.b))
if(w>=0){x=x.d
x[w]=x[w].ayZ(this.c)}},
$S:0}
B.dFp.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGb.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dGc.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dFI.prototype={
$1(d){return new B.SD(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dFF.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Gy(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SH(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rN(),$async$$0)
case 5:s=J.a4(t)
x=s.gcg(t)?6:7
break
case 6:x=8
return A.b(r.Z8(s.gH(t)),$async$$0)
case 8:case 7:r.hL(s.gag(t)?u.d:u.e+" "+s.gH(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFo.prototype={
$1(d){this.a.a8F(d,"No files selected.","Added")},
$S:431}
B.dFQ.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.I(x,new B.dFP(),A.S(x).k("I<1,n>")))},
$S:0}
B.dFP.prototype={
$1(d){return d.a},
$S:z+2}
B.dFu.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wa.c2().cHj(C.Wd,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fl(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aD.gag(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jc(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a5(j)
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
return A.b(B.ama(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.hL("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rN(),$async$$0)
case 9:o.hL("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dG8.prototype={
$1(d){return new B.Ny(this.a.a.c,this.b,null)},
$S:z+7}
B.dG9.prototype={
$1(d){return new B.WM(this.a.a.c,this.b,null)},
$S:z+18}
B.dGa.prototype={
$1(d){return new B.WJ(this.a.a.c,this.b,null)},
$S:z+19}
B.dFG.prototype={
$1(d){return new B.Ny(this.a.a.c,this.b,null)},
$S:z+7}
B.dFH.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.G(0,w)},
$S:0}
B.dG1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Gy(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4x(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hL("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ccq(),$async$$0)
case 5:x=6
return A.b(p.rN(),$async$$0)
case 6:r=A.S(t).k("I<1,n>")
r=new A.I(new A.I(t,new B.dFY(p),r),new B.dFZ(),r.k("I<ai.E,n>")).bZ(0,new B.dG_())
q=A.z(r,r.$ti.k("E.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cz(A.eN(new B.dG0(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.ox(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SN(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFY.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dFX(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dFX.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFZ.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dG_.prototype={
$1(d){return d.length!==0},
$S:3}
B.dG0.prototype={
$1(d){var x=this.a
return new B.WO(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dG2.prototype={
$1(d){return d.a},
$S:z+2}
B.dG3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFW.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.i,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kR,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a0,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.galC(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lW(D.lZ)?C.rQ:C.o9
p=!x||p.lW(D.lZ)?"Play video":"View"
return A.bQ(A.br(!0,new A.B(C.zt,A.u(A.a([q,o,t,C.aC,B.WN(!1,u,!1,w,p,new B.dFR(d),v),B.WN(!1,u,!1,C.iY,"Share via QR",new B.dFS(d),"Letters/numbers QR code"),B.WN(!1,u,!1,D.Xh,"Send to their Code",new B.dFT(d),"Enter someone else's personal code"),B.WN(!1,u,!1,C.hd,"Download / save",new B.dFU(d),v),C.ar,B.WN(!1,u,!0,C.e4,"Delete",new B.dFV(d),v)],y.p),C.al,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c2(new A.ay(r,1,C.r,-1),C.V,C.V,C.V),C.kf,v,v,C.n),C.ba)},
$S:708}
B.dFR.prototype={
$0(){A.a6(this.a,!1).K("view")
return null},
$S:0}
B.dFS.prototype={
$0(){A.a6(this.a,!1).K("qr")
return null},
$S:0}
B.dFT.prototype={
$0(){A.a6(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dFU.prototype={
$0(){A.a6(this.a,!1).K("save")
return null},
$S:0}
B.dFV.prototype={
$0(){A.a6(this.a,!1).K("delete")
return null},
$S:0}
B.dFr.prototype={
$1(d){return d.a},
$S:z+2}
B.dFs.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFt.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4z(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.EM(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.ox(s.c,s.f),$async$$0)
case 4:u.hL(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFn.prototype={
$1(d){var x=this.a
x.rO(new B.dFm(x,d,this.b),"Preparing\u2026")},
$S:431}
B.dFm.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hL("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SH(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.hL("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byj(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFJ.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dFK.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fy5(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.G(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFD.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EJ(new B.dFz(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hL("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dFA(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dFB(s))
case 5:x=8
return A.b(r.b.hZ(0,C.Dg,new B.dFC()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gag(t)){s.hL("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rN(),$async$$0)
case 9:s.hL("Received "+q.gH(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFz.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFw(x,d,e))},
$S:140}
B.dFw.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFA.prototype={
$1(d){return new B.a9v(this.a.a,null)},
$S:z+21}
B.dFB.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dFC.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dFE.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GC(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4n(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aUX(B.GC(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ama(new B.dFx(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.fy4(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hL(q)
x=1
break}x=10
return A.b(s.rN(),$async$$0)
case 10:o=J.cB(r)
p=o.eB(r,new B.dFy()).gH(0)
s.hL(p>0?"Received "+p+" video(s).":"Restored "+o.gH(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFx.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFv(x,d,e))},
$S:140}
B.dFv.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFy.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lW(D.lZ)},
$S:z+1}
B.dFO.prototype={
$1(d){return new B.WP(this.a.a.c,null)},
$S:z+23}
B.dFN.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aVN(u.a.c,v.b),$async$$0)
case 2:t.hL(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG7.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.az.j(0.35)
return A.bQ(A.br(!0,new A.B(C.zt,A.u(A.a([A.at(A.p(x,x,C.i,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kR,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.WN(!0,w,!1,C.mA,"My Code",new B.dG4(d),"Your personal code & QR \u2014 others send docs to you"),B.WN(!1,w,!1,D.Xh,"Send to their Code",new B.dG5(this.a,d),"Enter someone else's 5-digit code + letter"),B.WN(!1,w,!1,S.x1,"Import backup",new B.dG6(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c2(new A.ay(t,1,C.r,-1),C.V,C.V,C.V),C.kf,x,x,C.n),C.ba)},
$S:708}
B.dG4.prototype={
$0(){A.a6(this.a,!1).K("my_code")
return null},
$S:0}
B.dG5.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.buB()},
$S:0}
B.dG6.prototype={
$0(){A.a6(this.a,!1).K("import")
return null},
$S:0}
B.dGk.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.GL(D.Nb,x,C.Xc,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nb).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:686}
B.dGi.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.dGj.prototype={
$0(){this.a.aex()
return null},
$S:0}
B.dGl.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*10)),e)},
$S:106}
B.dGm.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9x(e,w,v,this.b,x.e,x.bY9(w),new B.dGe(x,w),new B.dGf(x,v,w),new B.dGg(x,w),new B.dGh(x,w),null)},
$S:z+24}
B.dGe.prototype={
$0(){this.a.abQ(this.b)
return null},
$S:0}
B.dGf.prototype={
$0(){var x=this.a
return x.n(new B.dGd(x,this.b,this.c))},
$S:0}
B.dGd.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.G(0,w)},
$S:0}
B.dGg.prototype={
$0(){this.a.M1(this.b)
return null},
$S:0}
B.dGh.prototype={
$0(){this.a.aek(this.b)
return null},
$S:0}
B.cVL.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*18)),e)},
$S:106}
B.cVM.prototype={
$3(d,e,f){return A.e4(C.C,f,e,null,null)},
$S:136}
B.cW8.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.cW7.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cW4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cW5.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cW6.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cW2.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aD.gag(w))return A.fU(w,C.C,x,new B.cW0(this.a),C.fO,C.dp,!0,x,!1,x,x)
$.aT.x1$.push(new B.cW1(this.a))
return C.bF},
$S:129}
B.cW0.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cVZ(this.a))
return C.bF},
$S:176}
B.cVZ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cVW(x))},
$S:8}
B.cVW.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cW1.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cVY(x))},
$S:8}
B.cVY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cW3.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cW_(this.a))
return C.bF},
$S:176}
B.cW_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cVX(x))},
$S:8}
B.cVX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cVI.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVH(x,d))},
$S:1721}
B.cVH.prototype={
$0(){return this.a.f=this.b===C.to},
$S:0}
B.cVJ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVG(x,d))},
$S:8}
B.cVG.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cVK.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVF(x,d))},
$S:8}
B.cVF.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cVB.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cVC.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cVD.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cVE.prototype={
$1(d){return this.a.d.L6(0,A.dA(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cWl.prototype={
$0(){var x=this.a.a
return B.qK(x.c,x.d)},
$S:1722}
B.cWm.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cWn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cWo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cWp.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cWq.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cWs.prototype={
$0(){var x=this.a
x.n(new B.cWr(x))},
$S:0}
B.cWr.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fQ(0)
else x.oZ(0)},
$S:0}
B.cWh.prototype={
$1(d){return this.a.Oy(this.b)},
$S:14}
B.cWi.prototype={
$1(d){return this.a.Ox(this.b)},
$S:14}
B.cW9.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWa.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWb.prototype={
$1(d){return D.f09},
$S:z+25}
B.cWg.prototype={
$2(d,e){if(d)B.SN()},
$S:121}
B.cWc.prototype={
$0(){return this.a.a6B(this.b)},
$S:0}
B.cWd.prototype={
$0(){return this.a.a6y(this.b)},
$S:0}
B.cWe.prototype={
$0(){return this.a.aaB(this.b)},
$S:0}
B.cWf.prototype={
$0(){return this.a.ZK(this.b)},
$S:0}
B.cVA.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.cWk.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p6(),$async$$0)
case 2:u.n(new B.cWj(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cWj.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c1U.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lW(D.lZ)},
$S:z+1}
B.c1V.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.D(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c1T.prototype={
$2(d,e){return this.bco(d,e)},
bco(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SO(u.c,A.D(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1723}
B.f6H.prototype={
$1(d){if(d===D.a22&&(this.a.a.a&30)===0)this.a.fz(0)},
$S:z+27}
B.f6I.prototype={
$0(){},
$S:11}
B.f7b.prototype={
bdW(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eXh(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fNt(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bdW(d,e)},
$S:533}
B.f7a.prototype={
$1(d){var x=this
d.b=new B.f79(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f79.prototype={
$1(d){return this.bdV(d)},
bdV(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aVO(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.G(0,m)
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
return A.b(B.eXh(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.cZ(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a5(j)
$.ak.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4w(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.cZ(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.avQ.prototype,"gc3K","O9",0)
x(v,"gc4z","Hv",0)
x(v,"gc45","wP",0)
x(v=B.azG.prototype,"gbY3","aaz",0)
x(v,"gbY4","X1",0)
x(v,"gciB","ae2",0)
x(v=B.azJ.prototype,"gbY5","X2",0)
x(v,"gciC","a_4",0)
x(B.azH.prototype,"gbY6","aaA",0)
x(B.avP.prototype,"gbYb","bYc",4)
x(v=B.azI.prototype,"gc46","Y3",0)
x(v,"gchd","che",4)
x(v,"gaW_","atU",0)
x(v,"gck2","aer",0)
x(v,"gbG5","V6",0)
x(v,"gbYa","CQ",0)
x(B.avR.prototype,"gaZI","a_3",0)
x(B.avO.prototype,"gbYd","X3",0)
x(v=B.avU.prototype,"gaUM","c2s",4)
x(v,"gbY7","aaD",0)
x(v=B.avS.prototype,"gcgf","ZP",0)
x(v,"gaT6","aaC",0)
w(B.avN.prototype,"gasD","asE",8)
x(v=B.avT.prototype,"gc6F","ach",0)
x(v,"gbFE","a7l",0)
w(v,"gasD","asE",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ccw,B.a6M,B.aqm,B.ayj,B.aBo,B.j7,B.a9d,B.bqx,B.Dr,B.UT])
w(B.ccx,B.ccw)
w(B.b_V,B.a6M)
x(A.i2,[B.ccs,B.cct,B.ccu,B.ccr,B.ccv,B.ccy,B.ccz,B.ccA,B.ccB,B.ccC,B.ccD,B.ccE,B.ccF,B.f1F,B.flX,B.flZ,B.flY,B.fma,B.fmb,B.f2Y,B.cVQ,B.cVS,B.cVR,B.cVV,B.f4X,B.f5q,B.c1o,B.c1v,B.c1w,B.c1r,B.c1p,B.c1s,B.c1t,B.fm8,B.fm9,B.dGr,B.dGA,B.dGy,B.dGz,B.eZT,B.f39,B.f3a,B.c1N,B.f3c,B.f73,B.f1R,B.f1S,B.c1S,B.fqA,B.cVP,B.cVN,B.dGn,B.dFj,B.dFp,B.dFI,B.dFo,B.dFP,B.dG8,B.dG9,B.dGa,B.dFG,B.dFY,B.dFX,B.dFZ,B.dG_,B.dG0,B.dG2,B.dG3,B.dFW,B.dFr,B.dFs,B.dFn,B.dFJ,B.dFA,B.dFy,B.dFO,B.dG7,B.dGk,B.dGl,B.cVL,B.cVM,B.cW8,B.cW7,B.cW2,B.cW0,B.cVZ,B.cW1,B.cW3,B.cW_,B.cVI,B.cVJ,B.cVK,B.cVE,B.cWh,B.cWi,B.cWb,B.c1U,B.c1V,B.f6H,B.f7a,B.f79])
w(B.b_W,B.aqm)
x(A.jj,[B.flW,B.cVT,B.cVU,B.f4V,B.f4W,B.f5p,B.dFg,B.dGp,B.dGq,B.dGo,B.dGs,B.dGt,B.dGu,B.dGv,B.dGw,B.dGx,B.dFh,B.dFi,B.f3b,B.cVO,B.dFL,B.dFM,B.dFk,B.dFl,B.dFq,B.dGb,B.dGc,B.dFF,B.dFQ,B.dFu,B.dFH,B.dG1,B.dFR,B.dFS,B.dFT,B.dFU,B.dFV,B.dFt,B.dFm,B.dFK,B.dFD,B.dFw,B.dFB,B.dFC,B.dFE,B.dFv,B.dFN,B.dG4,B.dG5,B.dG6,B.dGi,B.dGj,B.dGe,B.dGf,B.dGd,B.dGg,B.dGh,B.cW4,B.cW5,B.cW6,B.cVW,B.cVY,B.cVX,B.cVH,B.cVG,B.cVF,B.cVB,B.cVC,B.cVD,B.cWl,B.cWm,B.cWn,B.cWo,B.cWp,B.cWq,B.cWs,B.cWr,B.cW9,B.cWa,B.cWc,B.cWd,B.cWe,B.cWf,B.cVA,B.cWk,B.cWj,B.f6I])
x(A.m7,[B.a9w,B.Lm,B.a6N,B.Mq,B.US,B.Mp,B.Ds])
x(A.ae,[B.WL,B.SC,B.SG,B.SD,B.WK,B.SE,B.WM,B.WJ,B.Ny,B.WO,B.WI,B.WP])
x(A.ag,[B.avQ,B.azG,B.azJ,B.azH,B.avP,B.azI,B.avR,B.avO,B.avU,B.avS,B.avN,B.avT])
x(A.ar,[B.a9Y,B.avM,B.b93,B.a9x,B.a9v,B.b94])
x(A.kv,[B.c1u,B.c1q,B.c1y,B.c1z,B.fmF,B.dFz,B.dFx,B.dGm,B.cWg,B.c1T,B.f7b])
x(A.j_,[B.bel,B.bqc])})()
A.ka(b.typeUniverse,JSON.parse('{"b_V":{"a6M":[]},"b_W":{"aqm":[]},"WL":{"ae":[],"r":[]},"avQ":{"ag":["WL"]},"a9Y":{"ar":[],"r":[]},"SC":{"ae":[],"r":[]},"SG":{"ae":[],"r":[]},"azG":{"ag":["SC"]},"azJ":{"ag":["SG"]},"bel":{"j_":[]},"SD":{"ae":[],"r":[]},"azH":{"ag":["SD"]},"WK":{"ae":[],"r":[]},"SE":{"ae":[],"r":[]},"a9x":{"ar":[],"r":[]},"WM":{"ae":[],"r":[]},"WJ":{"ae":[],"r":[]},"Ny":{"ae":[],"r":[]},"WO":{"ae":[],"r":[]},"a9v":{"ar":[],"r":[]},"WI":{"ae":[],"r":[]},"WP":{"ae":[],"r":[]},"avP":{"ag":["WK"]},"bqc":{"j_":[]},"azI":{"ag":["SE"]},"avM":{"ar":[],"r":[]},"b93":{"ar":[],"r":[]},"avR":{"ag":["WM"]},"avO":{"ag":["WJ"]},"avU":{"ag":["Ny"]},"avS":{"ag":["WO"]},"avN":{"ag":["WI"]},"avT":{"ag":["WP"]},"b94":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tp"),k:x("JV()"),m:x("bt<n,n>"),F:x("qm"),g:x("av<j7?>"),x:x("av<~>"),V:x("M<a9>"),O:x("M<x>"),W:x("M<bd>"),Y:x("M<a0<n,R>>"),t:x("M<a0<n,@>>"),r:x("M<j7>"),w:x("M<+file,name(lb,n)>"),u:x("M<cI>"),s:x("M<n>"),E:x("M<j_>"),a:x("M<dQ>"),p:x("M<r>"),Z:x("M<G>"),G:x("bd"),A:x("cn<ag<ae>>"),n:x("al<j7>"),j:x("al<@>"),I:x("al<G>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hQj"),af:x("CG"),U:x("j7"),b:x("cu"),C:x("aC"),aK:x("va"),ab:x("Dr"),br:x("aqm"),v:x("UT"),N:x("n"),X:x("bm<P>"),Q:x("lm"),D:x("dQ"),aw:x("cv<n>"),cd:x("a3<a0<n,@>>"),c7:x("r"),ch:x("bL<al<j7>>"),aW:x("bL<dQ?>"),aY:x("bL<~>"),cx:x("a9w"),b1:x("bc<al<j7>>"),cf:x("bc<dQ?>"),d4:x("bc<~>"),c4:x("ayj"),bG:x("aBo"),q:x("mu"),B:x("oO<Dr>"),c6:x("oO<a6N>"),y:x("R"),i:x("P"),z:x("@"),S:x("G"),aQ:x("bd?"),_:x("al<j7>?"),aL:x("al<@>?"),h:x("a0<n,@>?"),l:x("j7?"),R:x("aC?"),c:x("UT?"),d:x("+answerQr,transfer(n,av<al<j7>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Lm,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dQ?"),cm:x("a9d?"),bk:x("ayj?"),ag:x("aBo?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPy=new A.ay(C.az,2,C.r,-1)
D.bEN=new A.a7(C.a1,C.a7,C.w,C.Za,null,null)
D.aR9=new A.o(null,null,null,C.mX,null,D.bEN,C.n)
D.aSv=new A.o(null,null,null,C.mX,null,E.EH,C.n)
D.a7M=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8I=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9q=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaO=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eC2=new A.w("Your team portal",null,C.dQ,null,null,null,null,null,null,null,null,null)
D.eP2=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.QF,null,null,null,null,null,null,null,null,null)
D.cLG=x([D.eC2,C.ar,D.eP2],y.p)
D.ba8=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cLG,null)
D.eST=new A.w("Create your organization",null,C.h3,null,null,null,null,null,null,null,null,null)
D.eFX=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.QF,null,null,null,null,null,null,null,null,null)
D.cZb=x([D.eST,C.ar,D.eFX],y.p)
D.bah=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cZb,null)
D.ePx=new A.w("Team Member sign-in",null,C.h3,null,null,null,null,null,null,null,null,null)
D.eJm=new A.w("Enter the access code and password from your organization.",null,G.QF,null,null,null,null,null,null,null,null,null)
D.cXm=x([D.ePx,C.ar,D.eJm],y.p)
D.bar=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cXm,null)
D.bfe=new A.L(16,10,16,28)
D.bfm=new A.L(16,14,16,4)
D.bgz=new A.L(20,0,20,16)
D.bh3=new A.L(20,8,20,16)
D.adj=new A.L(24,22,24,20)
D.Xh=new A.a_(63394,"MaterialIcons",!1)
D.ag7=new A.a_(63515,"MaterialIcons",!1)
D.bqA=new A.a_(983813,"MaterialIcons",!1)
D.bnO=new A.a_(62867,"MaterialIcons",!1)
D.bry=new A.ac(D.bnO,44,C.c,null,null,null)
D.bsD=new A.ac(C.rI,null,C.ak,null,null,null)
D.bu0=new A.ac(C.iC,18,null,null,null,null)
D.bvD=new A.ac(D.Xh,26,C.c,null,null,null)
D.bw8=new A.ac(C.Em,null,null,null,null,null)
D.bwG=new A.ac(C.x3,null,null,null,null,null)
D.bxJ=new A.ac(W.KZ,null,null,null,null,null)
D.by2=new A.ac(C.he,16,null,null,null,null)
D.bBk=new A.ac(C.qg,16,null,null,null,null)
D.brQ=new A.ac(C.mA,null,null,null,null,null)
D.bCc=new A.dZ(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.brQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxb=new A.ac(C.DY,null,null,null,null,null)
D.bCh=new A.dZ(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsa=new A.ac(N.Ew,null,null,null,null,null)
D.bCr=new A.dZ(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cnY=x([C.eS,C.aW,C.az],y.O)
D.bGw=new A.a7(C.ax,C.aE,C.w,D.cnY,null,null)
D.cnt=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nb=x([C.eS,C.az],y.O)
D.Np=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.lZ=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cSK=x([C.q_,C.az],y.O)
D.dGU={iceServers:0}
D.aAf={urls:0}
D.d1L=new A.bt(D.aAf,["stun:stun.l.google.com:19302"],y.m)
D.d1K=new A.bt(D.aAf,["stun:stun1.l.google.com:19302"],y.m)
D.cCX=x([D.d1L,D.d1K],A.az("M<a0<n,n>>"))
D.d15=new A.bt(D.dGU,[D.cCX],A.az("bt<n,@>"))
D.FH=new B.Lm(0,"lanDirect")
D.OC=new B.Lm(1,"cloudStash")
D.dcF=new B.Lm(2,"inlineInstant")
D.OD=new B.Lm(3,"webrtcLink")
D.xJ=new B.Lm(4,"videoCloud")
D.eP1=new A.w("Receive file",null,C.mQ,null,null,null,null,null,null,null,null,null)
D.cdH=x([E.ahN,C.ab,D.eP1],y.p)
D.e8V=new A.cF(C.b_,C.b5,C.j,C.m,null,C.p,null,0,D.cdH,null)
D.dLd=new A.B(C.c9,D.e8V,null)
D.etE=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZO,null,null,null)
D.eCy=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.etE,null,C.L,null,null,null,null,null,null,null)
D.dKy=new A.B(C.zz,D.eCy,null)
D.aWv=new A.cw(C.C,null,null,D.dKy,null)
D.dPF=new A.cE(0,null,0,28,null,null,D.aWv,null)
D.dPX=new B.a6N(0,"RTCDataChannelConnecting")
D.aFg=new B.a6N(1,"RTCDataChannelOpen")
D.aFh=new B.a6N(3,"RTCDataChannelClosed")
D.dPY=new B.Ds(0,"RTCIceConnectionStateNew")
D.dPZ=new B.Ds(1,"RTCIceConnectionStateChecking")
D.dQ_=new B.Ds(2,"RTCIceConnectionStateCompleted")
D.dQ0=new B.Ds(3,"RTCIceConnectionStateConnected")
D.dQ1=new B.Ds(4,"RTCIceConnectionStateCount")
D.dQ2=new B.Ds(5,"RTCIceConnectionStateFailed")
D.dQ3=new B.Ds(6,"RTCIceConnectionStateDisconnected")
D.aFi=new B.Ds(7,"RTCIceConnectionStateClosed")
D.aFj=new B.US(0,"RTCIceGatheringStateNew")
D.dQ4=new B.US(1,"RTCIceGatheringStateGathering")
D.a22=new B.US(2,"RTCIceGatheringStateComplete")
D.a23=new B.Mp(0,"RTCPeerConnectionStateClosed")
D.aFk=new B.Mp(1,"RTCPeerConnectionStateFailed")
D.aFl=new B.Mp(2,"RTCPeerConnectionStateDisconnected")
D.aFm=new B.Mp(3,"RTCPeerConnectionStateNew")
D.aFn=new B.Mp(4,"RTCPeerConnectionStateConnecting")
D.aFo=new B.Mp(5,"RTCPeerConnectionStateConnected")
D.dQ5=new B.Mq(0,"RTCSignalingStateStable")
D.dQ6=new B.Mq(1,"RTCSignalingStateHaveLocalOffer")
D.dQ7=new B.Mq(2,"RTCSignalingStateHaveRemoteOffer")
D.dQ8=new B.Mq(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dQ9=new B.Mq(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFp=new B.Mq(5,"RTCSignalingStateClosed")
D.ecq=new A.ap(160,48)
D.aXD=new A.f7(2,null,null,null,null,C.az,null,null,null,null)
D.edT=new A.a8(16,16,D.aXD,null)
D.eFo=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.efh=new A.aX(D.eFo,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eM8=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.efk=new A.aX(D.eM8,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eTS=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.efr=new A.aX(D.eTS,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eF3=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.efS=new A.aX(D.eF3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.ePG=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aHJ=new A.aX(D.ePG,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQW=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.egk=new A.aX(D.eQW,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVa=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.egz=new A.aX(D.eVa,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eTk=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.egE=new A.aX(D.eTk,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eUs=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eho=new A.aX(D.eUs,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eDO=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ehV=new A.aX(D.eDO,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNQ=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eif=new A.aX(D.eNQ,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eHm=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eiL=new A.aX(D.eHm,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVg=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eiP=new A.aX(D.eVg,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eE2=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eiV=new A.aX(D.eE2,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eCS=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ej9=new A.aX(D.eCS,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eA0=new A.w("NGMY DOC SHARE",null,C.aJ_,null,null,null,null,null,null,null,null,null)
D.eBa=new A.w("Show this to sender",null,C.ka,null,null,null,null,null,null,null,null,null)
D.eC8=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eGh=new A.w("Organization settings",null,C.cr,null,null,null,null,null,null,null,null,null)
D.eGz=new A.w("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eHw=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eHW=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eKt=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eN4=new A.w("Send to their Doc Share",null,C.mP,null,null,null,null,null,null,null,null,null)
D.eNn=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eNF=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eO8=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eOc=new A.w("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eOz=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.ez,null,null,null,null,null,null,null,null,null)
D.eRm=new A.w("Share files & videos\nwith a scan.",null,C.aJ0,null,null,null,null,null,null,null,null,null)
D.eRE=new A.w("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.f09=new B.WI(null)
D.a4W=new B.a9w(0,"docShare")
D.a4X=new B.a9w(1,"gate")
D.Rp=new B.a9w(2,"gateNoIndividual")})();(function staticFields(){$.aJV=null
$.eV8=function(){var x=y.N
return A.Q(x,x)}()
$.Ey=A.Q(y.N,y.D)
$.adr=A.Q(y.N,A.az("lb"))
$.OQ=A.Q(y.N,y.D)
$.eVF=A.Q(y.N,A.az("a9d"))
$.c1M=A.Q(y.S,A.az("bqx"))
$.fNs=1
$.hyG=null
$.hyF=null
$.hqF=null
$.fCZ=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hQO","h35",()=>new B.ccx())
x($,"hOJ","fGp",()=>C.a.q(A.bp(A.bp(A.bp(A.F4(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["rOAMAwQNRenWzxiCSy2mBr9+wAY="]=a.current})($__dart_deferred_initializers__);