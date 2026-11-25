((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cuL:function cuL(){},
iae(d){var x=null,w=new B.b7J(d,D.eK3,new A.q3(x,x,y.c6),new A.q3(x,x,y.B))
w.bDY(d)
return w},
b7J:function b7J(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cuG:function cuG(d){this.a=d},
cuH:function cuH(d){this.a=d},
cuI:function cuI(d){this.a=d},
cuF:function cuF(d){this.a=d},
cuJ:function cuJ(d){this.a=d},
iaf(d,e){var x=y.N
x=new B.b7K(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDZ(d,e)
return x},
b7K:function b7K(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cuM:function cuM(d){this.a=d},
cuN:function cuN(d){this.a=d},
cuO:function cuO(d){this.a=d},
cuP:function cuP(d){this.a=d},
cuQ:function cuQ(d){this.a=d},
cuR:function cuR(d){this.a=d},
cuS:function cuS(d){this.a=d},
cuT:function cuT(d){this.a=d},
hnE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xA.He(x,"ngmy_doc_share_v1",new B.fEH(),1)},
ih4(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.ez(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.vW(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cJ.aK(d)
return x}catch(w){return v}return v},
SI(d,e){return B.iwT(d,e)},
iwT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SI=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQS
x=7
return A.b(o==null?$.aQS=B.hnE():o,$async$SI)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.my(s,"blobs","readwrite")
C.iT.mj(J.mx(q,"blobs"),r,d)
x=8
return A.b(J.oP(q),$async$SI)
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
return A.i($async$SI,w)},
SH(d){return B.iwS(d)},
iwS(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQS
x=7
return A.b(o==null?$.aQS=B.hnE():o,$async$SH)
case 7:s=f
r=J.my(s,"blobs","readonly")
x=8
return A.b(C.iT.xW(J.mx(r,"blobs"),d),$async$SH)
case 8:q=f
x=9
return A.b(J.oP(r),$async$SH)
case 9:o=B.ih4(q)
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
return A.i($async$SH,w)},
aiW(d){return B.iwR(d)},
iwR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQS
x=7
return A.b(p==null?$.aQS=B.hnE():p,$async$aiW)
case 7:s=f
r=J.my(s,"blobs","readwrite")
C.iT.GK(J.mx(r,"blobs"),d)
x=8
return A.b(J.oP(r),$async$aiW)
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
return A.i($async$aiW,w)},
fEH:function fEH(){},
ijB(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsM(w,v))}return u},
hPK(d,e){var x,w={},v=A.aZF("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h4o(w,v,e)
C.xC.wX(v,"change",new B.h4q(w,v,!1))
C.xC.wX(v,"cancel",new B.h4p(w))
$.eW.mJ()
v.click()
A.bM(C.amQ,new B.h4n(w),y.H)},
h4o:function h4o(d,e,f){this.a=d
this.b=e
this.c=f},
h4q:function h4q(d,e,f){this.a=d
this.b=e
this.c=f},
h4p:function h4p(d){this.a=d},
h4n:function h4n(d){this.a=d},
E_(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E_=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV5()?3:4
break
case 3:x=5
return A.b(B.hKh(e,d,s,!0,!1,f,g,h,!1,i),$async$E_)
case 5:x=1
break
case 4:x=6
return A.b(B.Sj(d,s,f,g,h,i),$async$E_)
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
return A.b(B.Jx(s,d),$async$E_)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fzZ(s,d),$async$E_)
case 14:x=12
return A.b(r.hKh(q,p,o,n,m,l,k,j,a1,i),$async$E_)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).c8(A.e5(new B.h4D(s,i,d,f,g,h),!1,null,y.H)),$async$E_)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).c8(A.e5(new B.h4E(s,i,d,f,g,h),!1,null,y.H)),$async$E_)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E_,w)},
Sj(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Sj=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2q(e),$async$Sj)
case 3:u=k
x=4
return A.b(B.arI(d,e,!1),$async$Sj)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jx(e,d),$async$Sj)
case 7:if(k){v=D.aej
x=1
break}x=8
return A.b(B.WF(e),$async$Sj)
case 8:v=t?D.XR:D.aek
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2o(d,e)){v=D.aej
x=1
break}x=11
return A.b(B.WF(e),$async$Sj)
case 11:v=t?D.XR:D.aek
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hin(d,e)){v=D.aej
x=1
break}x=14
return A.b(B.WF(e),$async$Sj)
case 14:v=D.XR
x=1
break
case 13:v=t?D.XR:D.aek
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sj,w)},
fzZ(d,e){var x=0,w=A.j(y.y),v
var $async$fzZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2o(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2q(d),$async$fzZ)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzZ,w)},
hKh(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).c8(A.e5(new B.fHn(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hEQ(d,e,f,g,h,i,j){return new B.a_Y(e,j,d,g,h,i,f,null)},
fJj(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fJj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fJm(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fJj)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJj,w)},
fJO(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fJO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fJQ(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fJO)
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
return A.i($async$fJO,w)},
hnR(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fWY(d,e){var x=0,w=A.j(y.H),v
var $async$fWY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WF(e),$async$fWY)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).e4()
case 1:return A.h(v,w)}})
return A.i($async$fWY,w)},
h4D:function h4D(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h4E:function h4E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ae9:function ae9(d,e){this.a=d
this.b=e},
fHn:function fHn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_Y:function a_Y(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aC8:function aC8(){this.c=this.a=this.d=null},
dfF:function dfF(d,e){this.a=d
this.b=e},
dfC:function dfC(d){this.a=d},
dfE:function dfE(d){this.a=d},
dfD:function dfD(d){this.a=d},
dfH:function dfH(){},
dfG:function dfG(d){this.a=d},
aeD:function aeD(d,e,f,g,h,i){var _=this
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
fJm:function fJm(d,e,f){this.a=d
this.b=e
this.c=f},
fJk:function fJk(d){this.a=d},
fJl:function fJl(d,e,f){this.a=d
this.b=e
this.c=f},
fJQ:function fJQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJP:function fJP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgc(d,e,f,g,h){return B.i5_(d,e,f,g,h)},
i5_(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cgc=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a2(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hb(r.dP(d,new B.cgd(s,e,h,g,f,q),y.g),y.l),$async$cgc)
case 3:r=p.aQ(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgc,w)},
b2l(d,e,f,g,h){return B.i50(d,e,f,g,h)},
i50(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2l=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axe("GET",d)
o=A.heN()
if(o==null)o=new A.MX(A.a([],y.W))
x=7
return A.b(o.fc(0,s).dc(0,C.Hv),$async$b2l)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dj(),$async$b2l)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cv(q,h,o,e,f,"Received via QR")
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
return A.i($async$b2l,w)},
b2k(d){return B.i4Y(d)},
i4Y(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).dc(0,C.oQ),$async$b2k)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.mt(A.mq(p.e)).cG(0,p.w),null)
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
return A.i($async$b2k,w)},
cgb(d){return B.i4Z(d)},
i4Z(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cgb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).dc(0,C.r4),$async$cgb)
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
return A.i($async$cgb,w)},
cgd:function cgd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jQ:function jQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jv(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i55(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jv(C.a.aY(t,u.length))}return null},
i56(d){var x=B.Jv(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i51(){var x,w=$.oL(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8H(d){return B.i52(d)},
i52(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.fa(d,null,!1,C.bN),$async$a8H)
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
return A.i($async$a8H,w)},
a8I(d,e){return B.i53(d,e)},
i53(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8I=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hZ(d,e,!1,!1,C.cX,null),$async$a8I)
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
return A.i($async$a8I,w)},
Cu(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cu)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jv(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8J(r),$async$Cu)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8H("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cu)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jv(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cu)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i51()
x=14
return A.b(B.a8J(m),$async$Cu)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8I("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cu)
case 15:k=f
x=16
return A.b(B.a8I("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cu)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cu)
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
return A.i($async$Cu,w)},
a8J(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jv(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8H("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8J)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8J,w)},
a8K(d,e,f,g){return B.i57(d,e,f,g)},
i57(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8K=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a2(d)
if(g.gar(d)){v=!1
x=1
break}r=B.Jv(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8J(r),$async$a8K)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cE(d,0,new B.cgj())>1048576||g.aR(d,new B.cgk())){v=B.FC(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a8V("myCode",d,a0),$async$a8K)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cw(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FC(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2t(u,g.gJ(d),a0),$async$a8K)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oL().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cgl(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2m(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8K)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8K,w)},
FC(d,e,f,g,h){return B.i54(d,e,f,g,h)},
i54(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FC=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$FC)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cI(a6)
k=l.cE(a6,0,new B.cgf())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oL().av(9999)
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
a1=B.Jz(a9,q)
a0=new A.Lq(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FC)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.f4().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nN(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acm(a1.a,a4,"media",a1.d,a2).xT(m,n,new A.ES(!0,q.c)),$async$FC)
case 12:J.c7(r,m);++o
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
return A.b(B.aTB(r),$async$FC)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cgg(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2m(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FC)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTB(r),$async$FC)
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
b2m(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8H(t),$async$b2m)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cge(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8I(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2m,w)},
OD(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OD=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8H("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OD)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cw(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aQ(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b2n(k,a0),$async$OD)
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
return A.b(B.b2s(h),$async$OD)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WM(g,a0),$async$OD)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cgh(),q),n)
d=A.B(new A.X(r,new B.cgi(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cU(d,0,A.dy(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8I("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OD)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OD,w)},
b2n(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cw(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aQ(h),r=y.f,q=0
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
break}i=B.iB1(k,j)
C.d.u(s,i)
x=5
return A.b(B.DY(l,m,"Received via My Code",t,e,i),$async$b2n)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTB(s),$async$b2n)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2n,w)},
cgj:function cgj(){},
cgk:function cgk(){},
cgl:function cgl(){},
cgf:function cgf(){},
cgg:function cgg(){},
cge:function cge(){},
cgh:function cgh(){},
cgi:function cgi(){},
h4A(d,e){var x=0,w=A.j(y.H)
var $async$h4A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).c8(A.e5(new B.h4B(e),!1,null,y.H)),$async$h4A)
case 2:return A.h(null,w)}})
return A.i($async$h4A,w)},
bIa(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bIa=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cw(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).c8(A.e5(new B.h4C(g,e,f),!1,null,y.y)),$async$bIa)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bIa,w)},
h4B:function h4B(d){this.a=d},
h4C:function h4C(d,e,f){this.a=d
this.b=e
this.c=f},
WC:function WC(d,e){this.c=d
this.a=e},
aGa:function aGa(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e28:function e28(d,e){this.a=d
this.b=e},
WG:function WG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGd:function aGd(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e3h:function e3h(d){this.a=d},
e3i:function e3i(d){this.a=d},
e3j:function e3j(d){this.a=d},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3k:function e3k(d){this.a=d},
e3l:function e3l(d){this.a=d},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3o:function e3o(d,e){this.a=d
this.b=e},
e3p:function e3p(d){this.a=d},
e3s:function e3s(){},
e3q:function e3q(d){this.a=d},
e3r:function e3r(d,e){this.a=d
this.b=e},
bmR:function bmR(){},
WD:function WD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGb:function aGb(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e29:function e29(d){this.a=d},
e2a:function e2a(d){this.a=d},
hio(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i59(d){var x=d.l2
if(x>=0)return x
return 4.99},
i58(d){var x=d.lL,w=y.N
w=x.iX(x,new B.cgn(),w,w)
return w},
hzL(d){var x=d.kE,w=y.N
w=x.iX(x,new B.cgo(),w,w)
return w},
b2q(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2q)
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
return A.i($async$b2q,w)},
a8M(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8M)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a8M)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8M,w)},
WF(d){var x=0,w=A.j(y.H),v,u
var $async$WF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WF)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WF)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WF,w)},
hin(d,e){var x,w,v
if(B.i59(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i58(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b2o(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hzL(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hzM(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hzL(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.du(f,0,0,0,0,0).a).aa().ag())
d.kE=w},
arJ(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$arJ)
case 7:s=f
r=A.v(p)
r=A.eu(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$arJ,w)},
arK(d){var x=0,w=A.j(y.H),v,u,t
var $async$arK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arJ(d),$async$arK)
case 3:u=f
x=5
return A.b(A.aB(),$async$arK)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$arK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arK,w)},
arI(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hio(d)
if(u<=0){v=!1
x=1
break}if(B.hin(d,e)){v=!1
x=1
break}x=3
return A.b(B.arJ(e),$async$arI)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arI,w)},
b2p(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jx(e,d),$async$b2p)
case 3:if(g){v=-1
x=1
break}u=B.hio(d)
if(u<=0){v=-1
x=1
break}if(B.hin(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arJ(e),$async$b2p)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2p,w)},
cgq(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jx(e,d),$async$cgq)
case 3:if(h){v=!1
x=1
break}v=B.arI(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgq,w)},
cgp(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgp=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgq(d,u,i.gV5()),$async$cgp)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgp,w)},
a8L(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8L=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gV5()){v=!0
x=1
break}if(B.b2o(d,u)){v=!0
x=1
break}x=5
return A.b(A.lT(u,C.V9),$async$a8L)
case 5:x=k?3:4
break
case 3:B.hzM(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8L)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.ls(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.V9,"Doc Share for Organizations"),$async$a8L)
case 7:if(!k){v=!1
x=1
break}B.hzM(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8L)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8L,w)},
cgn:function cgn(){},
cgo:function cgo(){},
h5A(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h5A=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h5A)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fwc.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i0([r],e.c))
s.toString
$.fwc.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h5A,w)},
iDe(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fwc.br($.fwc,new B.h5C(d))},
h5C:function h5C(d){this.a=d},
fxS(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fxS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i0([d],f))
s.toString
u=A.nh(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jA,null,y.H),$async$fxS)
case 3:C.BV.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxS,w)},
ahS(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fwT.n(0,d,new B.adR(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ahS)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahS)
case 2:return A.h(null,w)}})
return A.i($async$ahS,w)},
ahM(d){return B.ilv(d)},
ilv(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fwT.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ahM)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cw(s)){v=null
x=1
break}o=J.b8(s,new B.fBF(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adR(r)
$.fwT.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
S9(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$S9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.Hl.n(0,d,u)
x=3
return A.b(B.SI(d,u),$async$S9)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S9,w)},
aRc(d){return B.ilt(d)},
ilt(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hl.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SH(d),$async$aRc)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hl.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRc)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cJ.aK(r)
x=!J.cw(q)?9:10
break
case 9:B.S9(d,q)
x=11
return A.b(J.fQ(s,d),$async$aRc)
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
return A.i($async$aRc,w)},
ihw(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cc(J.ez(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cc(A.vW(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cc(d)),y.K)
return A.f8(null,y.K)},
a3t(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bm($.bG,y.cf)
t=new A.c8(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fHz(r,t),!1,s)
A.fH(r,"error",new B.fHA(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.OY,new B.fHB())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3t,w)},
aRx(d,e,f){return B.inS(d,e,f)},
inS(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRx=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3t(i),$async$aRx)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SI(o,p),$async$aRx)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c7(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahS(k,j,s),$async$aRx)
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
return A.i($async$aRx,w)},
aRw(d,e,f){return B.inR(d,e,f)},
inR(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRw=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRx(d,e,f),$async$aRw)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3t(f),$async$aRw)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hl.n(0,s,r)
$.St.n(0,s,r)
x=11
return A.b(B.S9(s,r),$async$aRw)
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
return A.i($async$aRw,w)},
Cv(d,e,f,g,h,i){return B.i5i(d,e,f,g,h,i)},
i5i(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cv=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cV.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jQ(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b2w(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.S9(s,d),$async$Cv)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$Cv)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$Cv)
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
return A.b(B.Bp(e),$async$Cv)
case 12:j=a2
J.c7(j,m)
x=13
return A.b(B.Hv(e,j),$async$Cv)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cv,w)},
WH(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WH=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bp(d),$async$WH)
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
k=B.hzO(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jQ(m,n,k,l,j,"From folder",null,B.b2w(),null)
$.aig.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3t(o),$async$WH)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hl.n(0,h,g)
$.St.n(0,h,g)
B.S9(h,g)
x=9
break
case 10:x=11
return A.b(B.aRw(d,m,o),$async$WH)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hv(d,t),$async$WH)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WH,w)},
his(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$his=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hzO(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jy(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.Cv(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$his,w)},
Jy(d,e,f,g,h,i){return B.i5h(d,e,f,g,h,i)},
i5h(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jy=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lq(A.dy(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jy)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cw(m)){x=6
break}J.ha(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.Ti(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kv(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SI(k,l),$async$Jy)
case 11:J.c7(q,k);++p
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
return A.b(j.a1(0),$async$Jy)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SI(k,new Uint8Array(A.cc(n))),$async$Jy)
case 15:J.c7(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahS(r,q,g),$async$Jy)
case 16:f=new B.jQ(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b2w(),null)
x=17
return A.b(B.Bp(d),$async$Jy)
case 17:e=a6
J.c7(e,f)
x=18
return A.b(B.Hv(d,e),$async$Jy)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jy,w)},
WJ(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WJ=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aig.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3t(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahM(s),$async$WJ)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SH(u[o]),$async$WJ)
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
case 5:i=$.St.h(0,s)
if(i==null)i=$.Hl.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t5(d,e),$async$WJ)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.St.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vW(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WJ,w)},
hzO(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t5(d,e){return B.i5j(d,e)},
i5j(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t5=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.St.h(0,f)
if(e==null)e=$.Hl.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aig.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3t(s),$async$t5)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hl.n(0,f,r)
$.St.n(0,f,r)
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
return A.b(B.ahM(f),$async$t5)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adN(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SH(g[l]),$async$t5)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8i()
if(!C.aI.gar(r)){$.Hl.n(0,f,r)
$.St.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRc(f),$async$t5)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.St.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WJ(a0,a1,0,g),$async$t5)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cc(i))
$.Hl.n(0,f,h)
$.St.n(0,f,h)
B.S9(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t5,w)},
i5m(d){var x,w,v=$.aig.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i5n(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i0([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i5k(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arQ(d,e,f,g,h){return B.i5l(d,e,f,g,h)},
i5l(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arQ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aig.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3t(s),$async$arQ)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t5(g,e),$async$arQ)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f4().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iE(d).xT(h,r,new A.ES(!0,e.c)),$async$arQ)
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
return A.i($async$arQ,w)},
hzQ(d,e,f,g,h){var x,w,v,u,t=$.hzP
$.hzP=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cgB.n(0,t,new B.bzR(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adN(u)))
return t},
hit(d){var x=0,w=A.j(y.H)
var $async$hit=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hit,w)},
Jz(d,e){var $async$Jz=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aig.h(0,h)
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
return A.qK(B.WJ(d,e,p,o<q?o:q),$async$Jz,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qK(A.GS(n),$async$Jz,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qK(B.ahM("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jz,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qK(B.SH(h[l]),$async$Jz,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qK(A.GS(k),$async$Jz,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qK(B.t5(d,e),$async$Jz,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qK(A.GS(A.vW(j,p,o<i?o:i)),$async$Jz,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qK(null,0,w)
case 2:return A.qK(t.at(-1),1,w)}})
var x=0,w=A.hIZ($async$Jz,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hL1(w)},
b2y(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cgB.h(0,d)
if(t==null||J.cw(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6z(),$async$b2y)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2y,w)},
WI(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgB.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6z(),$async$WI)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahS(r.c,u,r.z),$async$WI)
case 4:t=new B.jQ(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b2w(),null)
u=r.a
x=5
return A.b(B.Bp(u),$async$WI)
case 5:s=f
J.c7(s,t)
x=6
return A.b(B.Hv(u,s),$async$WI)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WI,w)},
a8S(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgB.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiW(u[s]),$async$a8S)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a8S,w)},
cgD(d,e,f){var x=0,w=A.j(y.H)
var $async$cgD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEY(d,e,f),$async$cgD)
case 2:return A.h(null,w)}})
return A.i($async$cgD,w)},
cgE(d,e,f){var x=0,w=A.j(y.H)
var $async$cgE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEZ(d,e,f),$async$cgE)
case 2:return A.h(null,w)}})
return A.i($async$cgE,w)},
FD(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bp(d),$async$FD)
case 2:p=g
J.nf(p,new B.cgC(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hl.X(0,v)
$.aig.X(0,e)
x=3
return A.b(B.ahM(v),$async$FD)
case 3:u=g
$.fwT.X(0,v)
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
return A.b(B.aiW(s[q]),$async$FD)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiW(v),$async$FD)
case 13:x=14
return A.b(B.Hv(d,p),$async$FD)
case 14:return A.h(null,w)}})
return A.i($async$FD,w)},
b2x(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t5(d,e),$async$b2x)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fxS(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2x,w)},
Bp(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bp)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fHC(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bp,w)},
Hv(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$Hv)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fLV(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$Hv)
case 3:return A.h(null,w)}})
return A.i($async$Hv,w)},
bEY(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bp(d),$async$bEY)
case 3:u=h
t=J.cI(u)
s=t.bl(u,new B.fFL(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHf(f))
x=4
return A.b(B.Hv(d,u),$async$bEY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEY,w)},
bEZ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bp(d),$async$bEZ)
case 3:u=h
t=J.cI(u)
s=t.bl(u,new B.fFM(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRK(f))
x=4
return A.b(B.Hv(d,u),$async$bEZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEZ,w)},
adR:function adR(d){this.a=d},
fBF:function fBF(){},
fHz:function fHz(d,e){this.a=d
this.b=e},
fHA:function fHA(d){this.a=d},
fHB:function fHB(){},
cgC:function cgC(d){this.a=d},
bzR:function bzR(d,e,f,g,h,i,j,k,l){var _=this
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
fHC:function fHC(){},
fLV:function fLV(){},
fFL:function fFL(d){this.a=d},
fFM:function fFM(d){this.a=d},
a8T(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cgH())?3:4
break
case 3:x=5
return A.b(B.b2z(d,e),$async$a8T)
case 5:u=g
if(u!=null){t=u.c
B.OF(d,u.b,e,t)}v=u
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
return A.b(B.b2u(s),$async$a8T)
case 10:case 9:if(g){v=new A.Ru(1,D.UN,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WK(d,e),$async$a8T)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WP(!0,!0,d,e),$async$a8T)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OF(d,D.AX,e,t)
v=new A.Ru(p,D.AX,t)
x=1
break}v=B.cgG(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8T,w)},
WK(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8V(null,d,e),$async$WK)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cw(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2t(p,d.length,e),$async$WK)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cgE(e,C.d.gG(d).a,r.b),$async$WK)
case 7:case 6:q=r.a
x=8
return A.b(B.OF(d,D.UN,e,q),$async$WK)
case 8:v=new A.Ru(d.length,D.UN,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WK,w)},
WL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mQ(D.nm)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8U(d,e),$async$WL)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cgz(s,d,e,t),$async$WL)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2u(t),$async$WL)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t5(e,d),$async$WL)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WK(A.a([d],y.r),e),$async$WL)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WL,w)},
WN(){var x=0,w=A.j(y.H)
var $async$WN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.him(),$async$WN)
case 2:x=3
return A.b(B.aTX(),$async$WN)
case 3:return A.h(null,w)}})
return A.i($async$WN,w)},
a8U(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2w()
x=3
return A.b(B.cgD(e,d.a,u),$async$a8U)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8U,w)},
OF(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OF=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.UN&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8U(p,f),$async$OF)
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
return A.b(B.cgy(o,p,u,f),$async$OF)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cgz(o,p,f,t),$async$OF)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cgx(o,u,p,f),$async$OF)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OF,w)},
b2z(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgF(e,d),$async$b2z)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WP(!1,!0,d,e),$async$b2z)
case 4:u=g
if(u!=null){t=u.b
v=new A.Ru(u.a,D.AX,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2z,w)},
cgF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cgF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WJ(d,s,0,1),$async$cgF)
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
return A.i($async$cgF,w)},
cgG(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cgG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8V(null,d,e),$async$cgG)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hzN(u)
if(t.length>800){v=null
x=1
break}v=new A.Ru(d.length,D.e_2,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgG,w)},
arR(d,e,f){return B.i5q(d,e,f)},
i5q(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arR=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d9(g,"\ufeff"))g=J.ng(g,1)
x=B.hir(g)?3:4
break
case 3:x=5
return A.b(B.cgA(g),$async$arR)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d9(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ng(g,13))
try{k=B.FE(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d9(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ng(g,13))
u=9
x=12
return A.b(B.b2s(q),$async$arR)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WM(p,a0)
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
case 11:case 7:if(J.d9(g,"NGMYDOCSYNC0|"))try{n=B.hiq(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WM(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d9(g,"N2|")){v=B.JA(C.a.i(J.ng(g,3)),d,a0)
x=1
break}if(J.d9(g,"NGMYDOCSYNC2|")){v=B.JA(C.a.i(J.ng(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JA(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WM(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arR,w)},
JA(d,e,f){return B.i5o(d,e,f)},
i5o(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JA=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.b2k(r),$async$JA)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2k(A.cH(s,0,null)),$async$JA)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cw(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cgc(o,r,a1,n,a2),$async$JA)
case 11:m=a4
x=J.cw(m)?12:13
break
case 12:x=14
return A.b(B.cgb(q),$async$JA)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WM(l,a2),$async$JA)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cw(m)?null:m
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
return A.i($async$JA,w)},
a8V(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8V=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aQ(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t5(f,r),$async$a8V)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcp().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8V,w)},
WM(d,e){return B.i5p(d,e)},
i5p(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WM=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aQ(r)
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
break}i=C.cJ.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cv(i,a3,d,k,l,o),$async$WM)
case 9:h=a5
if(h!=null)J.c7(n,h)
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
return A.i($async$WM,w)},
OE:function OE(d,e){this.a=d
this.b=e},
cgH:function cgH(){},
a32(d){var x=A.Q(d).ax.a===C.I,w=x?D.ak2:D.ahw,v=x?D.alQ:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.aj0:C.bn
return new A.aJg([w,s,v,u,t,x?C.fz:C.bU])},
hQO(d,e){var x=e?C.v.j(0.72):C.b7
return A.ce(null,x,!0,null,new B.h9S(e),d,null,!0,!0,y.N)},
cgm(d,e,f,g,h,i,j,k,l){return new B.WE(e,l,d,f,k,j,g,h,i,null)},
a0_(d,e,f,g,h,i,j){return new B.bhl(g,h,j,e,i,d,f,null)},
h9S:function h9S(d){this.a=d},
a_X:function a_X(d,e){this.c=d
this.a=e},
aC7:function aC7(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dfB:function dfB(d){this.a=d},
dfz:function dfz(d){this.a=d},
dfA:function dfA(d){this.a=d},
bzt:function bzt(){},
WE:function WE(d,e,f,g,h,i,j,k,l,m){var _=this
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
e3f:function e3f(d){this.a=d},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2c:function e2c(d,e,f){this.a=d
this.b=e
this.c=f},
e2b:function e2b(d){this.a=d},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2i:function e2i(d,e,f){this.a=d
this.b=e
this.c=f},
e2h:function e2h(d){this.a=d},
e33:function e33(d,e){this.a=d
this.b=e},
e34:function e34(d){this.a=d},
e2A:function e2A(d,e,f){this.a=d
this.b=e
this.c=f},
e2x:function e2x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2g:function e2g(d){this.a=d},
e2I:function e2I(d){this.a=d},
e2H:function e2H(){},
e2m:function e2m(d){this.a=d},
e30:function e30(d,e){this.a=d
this.b=e},
e31:function e31(d,e){this.a=d
this.b=e},
e32:function e32(d,e){this.a=d
this.b=e},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2R:function e2R(){},
e2S:function e2S(){},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2V:function e2V(){},
e2W:function e2W(d){this.a=d},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2J:function e2J(d){this.a=d},
e2K:function e2K(d){this.a=d},
e2L:function e2L(d){this.a=d},
e2M:function e2M(d){this.a=d},
e2N:function e2N(d){this.a=d},
e2j:function e2j(){},
e2k:function e2k(d){this.a=d},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2e:function e2e(d,e,f){this.a=d
this.b=e
this.c=f},
e2B:function e2B(d){this.a=d},
e2C:function e2C(d,e,f){this.a=d
this.b=e
this.c=f},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2r:function e2r(d){this.a=d},
e2o:function e2o(d,e,f){this.a=d
this.b=e
this.c=f},
e2s:function e2s(d){this.a=d},
e2t:function e2t(d){this.a=d},
e2u:function e2u(){},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2p:function e2p(d){this.a=d},
e2n:function e2n(d,e,f){this.a=d
this.b=e
this.c=f},
e2q:function e2q(){},
e2G:function e2G(d){this.a=d},
e2F:function e2F(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e){this.a=d
this.b=e},
e2X:function e2X(d){this.a=d},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2Z:function e2Z(d){this.a=d},
e3c:function e3c(d){this.a=d},
e3a:function e3a(d){this.a=d},
e3b:function e3b(d){this.a=d},
e3d:function e3d(){},
e3e:function e3e(d,e){this.a=d
this.b=e},
e36:function e36(d,e){this.a=d
this.b=e},
e37:function e37(d,e,f){this.a=d
this.b=e
this.c=f},
e35:function e35(d,e,f){this.a=d
this.b=e
this.c=f},
e38:function e38(d,e){this.a=d
this.b=e},
e39:function e39(d,e){this.a=d
this.b=e},
aC4:function aC4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhk:function bhk(d,e,f){this.c=d
this.d=e
this.a=f},
dfx:function dfx(){},
dfy:function dfy(){},
aea:function aea(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dfV:function dfV(){},
dfU:function dfU(d){this.a=d},
a_Z:function a_Z(d,e,f){this.c=d
this.d=e
this.a=f},
aC9:function aC9(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dfR:function dfR(d){this.a=d},
dfS:function dfS(d,e,f){this.a=d
this.b=e
this.c=f},
dfT:function dfT(d,e){this.a=d
this.b=e},
dfP:function dfP(d,e){this.a=d
this.b=e},
dfN:function dfN(d){this.a=d},
dfL:function dfL(d){this.a=d},
dfI:function dfI(d){this.a=d},
dfO:function dfO(d){this.a=d},
dfK:function dfK(d){this.a=d},
dfQ:function dfQ(d){this.a=d},
dfM:function dfM(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
a_W:function a_W(d,e,f){this.c=d
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
dfu:function dfu(d){this.a=d},
dft:function dft(d,e){this.a=d
this.b=e},
dfv:function dfv(d){this.a=d},
dfs:function dfs(d,e){this.a=d
this.b=e},
dfw:function dfw(d){this.a=d},
dfr:function dfr(d,e){this.a=d
this.b=e},
dfn:function dfn(d){this.a=d},
dfo:function dfo(d){this.a=d},
dfp:function dfp(d,e){this.a=d
this.b=e},
dfq:function dfq(d){this.a=d},
R2:function R2(d,e,f){this.c=d
this.d=e
this.a=f},
aCc:function aCc(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dg7:function dg7(d){this.a=d},
dg8:function dg8(d){this.a=d},
dg9:function dg9(d){this.a=d},
dga:function dga(d){this.a=d},
dgb:function dgb(d,e){this.a=d
this.b=e},
dgc:function dgc(d){this.a=d},
dge:function dge(d){this.a=d},
dgd:function dgd(d){this.a=d},
a00:function a00(d,e,f,g,h){var _=this
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
dg3:function dg3(d,e){this.a=d
this.b=e},
dg4:function dg4(d,e){this.a=d
this.b=e},
dfW:function dfW(d,e,f){this.a=d
this.b=e
this.c=f},
dfX:function dfX(d){this.a=d},
dfY:function dfY(){},
dg2:function dg2(){},
dfZ:function dfZ(d,e){this.a=d
this.b=e},
dg_:function dg_(d,e){this.a=d
this.b=e},
dg0:function dg0(d,e){this.a=d
this.b=e},
dg1:function dg1(d,e){this.a=d
this.b=e},
ae8:function ae8(d,e){this.c=d
this.a=e},
dfm:function dfm(d){this.a=d},
a_V:function a_V(d){this.a=d},
aC5:function aC5(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a01:function a01(d,e){this.c=d
this.a=e},
aCb:function aCb(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dg6:function dg6(d){this.a=d},
dg5:function dg5(d){this.a=d},
bhl:function bhl(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i5r(){var x,w=$.oL(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
OG(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$OG)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fa("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OG)
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
return A.i($async$OG,w)},
a8W(d){return B.i5s(d)},
i5s(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8W)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hZ("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$a8W)
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
return A.i($async$a8W,w)},
WO(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OG(),$async$WO)
case 3:s=g
r=J.a2(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dD(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8W(s),$async$WO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WO,w)},
WP(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WP=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.cd(),$async$WP)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.cgJ(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i5r()
t=A.U(u).k("O<1,a9<n,aF>>")
r=A.B(new A.O(u,new B.cgK(s),t),t.k("aj.E"))
x=6
return A.b(B.OG(),$async$WP)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8W(q),$async$WP)
case 7:x=8
return A.b(B.a8X(r,u,g,s),$async$WP)
case 8:v=new A.bth(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WP,w)},
arS(d){var x=0,w=A.j(y.y),v,u,t
var $async$arS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OG(),$async$arS)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arS,w)},
cgL(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cgL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OG(),$async$cgL)
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
return A.i($async$cgL,w)},
a8X(d,e,f,g){return B.i5t(d,e,f,g)},
i5t(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8X=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arQ("media",r,new B.cgI(s,e,g),f,q),$async$a8X)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WO(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8X)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WO(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8X)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WO(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8X)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8X,w)},
FE(d,e,f){return B.i5u(d,e,f)},
i5u(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FE=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cd(),$async$FE)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arS(b3),$async$FE)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j3,null,g),$async$FE)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arS(b3),$async$FE)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OG(),$async$FE)
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
if(!y.j.b(a4)||J.cw(a4)){v=null
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
a8=$.f4().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nN(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acm(a8.a,b0,"media",a8.d,a9).DE(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b2l(k,n,o,s,b7),$async$FE)
case 17:j=c0
if(j!=null){J.c7(p,j);++q
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
a2=$.f4().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nN(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acm(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FE)
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
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8W(e),$async$FE)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FE,w)},
cgJ:function cgJ(){},
cgK:function cgK(d){this.a=d},
cgI:function cgI(d,e,f){this.a=d
this.b=e
this.c=f},
aTX(){var x=0,w=A.j(y.H),v,u
var $async$aTX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.igP=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aTX)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aTX)
case 3:u=$.ho2
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aTX)
case 4:$.ho2=$.ipJ=$.ipK=null
return A.h(null,w)}})
return A.i($async$aTX,w)},
fLw(d){var x=0,w=A.j(y.H),v,u
var $async$fLw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaS){x=1
break}u=new A.bm($.bG,y.d4)
d.c=new B.fLx(new A.c8(u,y.aY))
x=3
return A.b(u.ic(0,C.hb,new B.fLy()),$async$fLw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fLw,w)},
ipH(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i5b(x):x},
ho7(d){var x=0,w=A.j(y.T),v,u,t
var $async$ho7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.Y(u,"WR")){v=B.arU(u)
x=1
break}v=B.hiq(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ho7,w)},
ho6(d){var x=0,w=A.j(y.T),v,u,t
var $async$ho6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.Y(u,"WR")){v=B.arV(u)
x=1
break}v=B.hiq(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ho6,w)},
h5j(d){var x=0,w=A.j(y.T),v
var $async$h5j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arV(d),$async$h5j)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h5j,w)},
bFW(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ho6(d),$async$bFW)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a2(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFW,w)},
fyG(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fyG=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WI(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cv(d.a8i(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyG,w)},
Hw(d,e,f){return B.is3(d,e,f)},
is3(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hw=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.ho7(a1),$async$Hw)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
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
return A.b($.hSP().aHw(D.dMa,null),$async$Hw)
case 4:l=d.ho2=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adN(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bm($.bG,y.b1)
l.y=new B.fM7(f,k,new B.fM8(f,a2,k,j,a0,p),a2,j,a0,p,new A.c8(t,y.ch))
x=5
return A.b(l.a9E(0,new B.Z0(r,"offer")),$async$Hw)
case 5:d=l
x=7
return A.b(l.anl(0),$async$Hw)
case 7:x=6
return A.b(d.a9w(0,a4),$async$Hw)
case 6:x=8
return A.b(B.fLw(l),$async$Hw)
case 8:x=9
return A.b(l.arI(),$async$Hw)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ipH(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arW(m,h),$async$Hw)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hzN(h)
case 11:v=new A.bsw(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hw,w)},
fLx:function fLx(d){this.a=d},
fLy:function fLy(){},
fM8:function fM8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fM7:function fM7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fM6:function fM6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iu8(d){switch(d){case"new":return D.eK4
case"checking":return D.eK5
case"connected":return D.eK7
case"completed":return D.eK6
case"failed":return D.eK9
case"disconnected":return D.eKa
case"closed":return D.aTa
case"count":return D.eK8}return D.aTa},
iu9(d){switch(d){case"new":return D.aTb
case"gathering":return D.eKb
case"complete":return D.aaS}return D.aTb},
iEN(d){switch(d){case"stable":return D.eKc
case"have-local-offer":return D.eKd
case"have-local-pranswer":return D.eKf
case"have-remote-offer":return D.eKe
case"have-remote-pranswer":return D.eKg
case"closed":return D.aTh}return D.aTh},
iCW(d){switch(d){case"new":return D.aTe
case"connecting":return D.aTf
case"connected":return D.aTg
case"closed":return D.aaT
case"disconnected":return D.aTd
case"failed":return D.aTc}return D.aaT},
abj:function abj(d,e){this.a=d
this.b=e},
PM:function PM(d,e){this.a=d
this.b=e},
Z_:function Z_(d,e){this.a=d
this.b=e},
PL:function PL(d,e){this.a=d
this.b=e},
G8:function G8(d,e){this.a=d
this.b=e},
cuK:function cuK(){},
hkf(d){var x=new B.G7()
x.a=d
x.b=!0
return x},
G7:function G7(){this.b=this.a=$},
abi:function abi(){},
awq:function awq(){},
Z0:function Z0(d,e){this.a=d
this.b=e},
him(){var x=0,w=A.j(y.H)
var $async$him=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$him,w)},
hip(d,e,f){var x=0,w=A.j(y.T),v
var $async$hip=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mQ(D.nm))){v=null
x=1
break}v=B.h5A(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hip,w)},
hzN(d){var x,w=F.agX.a6i(C.e2.aK(d),null)
if(w.length===0){x=C.e2.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i5a(d){var x,w,v=C.cJ.aK(d)
try{x=C.cg.cG(0,F.agW.bhA(v,!1))
return x}catch(w){x=C.cg.cG(0,v)
return x}},
hiq(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i5a(C.a.aY(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aY(t,w.length)
try{v=C.cg.cG(0,C.cJ.aK(x))
return v}catch(u){return x}}return null},
i5b(d){var x,w,v,u,t,s=A.a([],y.s)
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
i5c(){var x,w=$.oL(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2r(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.fa("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2r)
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
return A.i($async$b2r,w)},
cgr(d,e){return B.i5d(d,e)},
i5d(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgr=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hZ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cX,null),$async$cgr)
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
return A.i($async$cgr,w)},
b2u(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2r(d),$async$b2u)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2u,w)},
b2t(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i5c()
r=C.a.i(f)
t=C.e2.aK(s)
x=3
return A.b(B.cgr(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b2t)
case 3:if(!h){v=null
x=1
break}v=new A.a22("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2t,w)},
b2s(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2r(o),$async$b2s)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cG(0,C.cJ.aK(u))
if(J.jf(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2s,w)},
cgs(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(O.bGV("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cX),$async$cgs)
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
return A.i($async$cgs,w)},
b2v(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jw(),$async$b2v)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2v,w)},
arN(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arN)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2v(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arN,w)},
arL(d,e){var x=0,w=A.j(y.H)
var $async$arL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arL)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arL)
case 2:return A.h(null,w)}})
return A.i($async$arL,w)},
a8O(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8O=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8O)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jw(),$async$a8O)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dt(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8N(s),$async$a8O)
case 5:x=6
return A.b(B.arL(f,u),$async$a8O)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8O,w)},
a8P(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8P=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8P)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jw(),$async$a8P)
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
return A.b(B.arL(g,q),$async$a8P)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8N(u),$async$a8P)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8P,w)},
a8Q(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8Q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8Q)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jw(),$async$a8Q)
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
s=B.b2o(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a8Q)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8Q)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Q,w)},
cgt(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgt)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
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
return A.i($async$cgt,w)},
Jx(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgt(d),$async$Jx)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2v(t),$async$Jx)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arM(d),$async$Jx)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2o(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arM(d),$async$Jx)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jx,w)},
arM(d){var x=0,w=A.j(y.H)
var $async$arM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arM)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arM)
case 2:return A.h(null,w)}})
return A.i($async$arM,w)},
b2w(){var x,w=$.oL(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a8R(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hir(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgw(d){return B.i5f(d)},
i5f(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8R(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.fa("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgw)
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
return A.i($async$cgw,w)},
arP(d,e){return B.i5g(d,e)},
i5g(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8R(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hZ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cX,null),$async$arP)
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
return A.i($async$arP,w)},
cgy(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgy=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8R(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arP(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgy)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgy,w)},
cgx(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgx=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8R(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arP(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgx)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgx,w)},
cgz(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cgz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8R(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arP(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgz,w)},
cgA(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cgA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hir(d)){v=null
x=1
break}x=3
return A.b(B.cgw(d),$async$cgA)
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
return A.i($async$cgA,w)},
a8Y(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8Y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8Y)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fa("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8Y)
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
return A.i($async$a8Y,w)},
arT(d){return B.i5v(d)},
i5v(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$arT)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hZ("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$arT)
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
return A.i($async$arT,w)},
arU(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d9(j,"WR")){v=null
x=1
break}x=3
return A.b(A.cd(),$async$arU)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8Y(),$async$arU)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cG(0,C.cJ.aK(q))
if(J.jf(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dD(A.a0(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.arT(s),$async$arU)
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
return A.i($async$arU,w)},
arW(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.cd(),$async$arW)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8Y(),$async$arW)
case 4:u=g
t=J.a2(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dD(A.a0(s,r,q),r,q)
r=C.e2.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arT(u),$async$arW)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arW,w)},
arV(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.cd(),$async$arV)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8Y(),$async$arV)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cG(0,C.cJ.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arV,w)},
aqN(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.os)){v=null
x=1
break}x=3
return A.b(p.lw(e),$async$aqN)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.ho),$async$aqN)
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
return A.i($async$aqN,w)},
iB1(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.v(w),5,"0")
return v},
h3s(d){return B.iB3(d)},
iB3(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h3s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f4().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").M_(d,3600),$async$h3s)
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
return A.i($async$h3s,w)},
DY(d,e,f,g,h,i){var x=null
return B.iB0(d,e,f,g,h,i)},
iB0(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DY=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hzQ(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hit(r),$async$DY)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h3s(o),$async$DY)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8S(r),$async$DY)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWT)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MX(A.a([],g))
x=15
return A.b(d.fc(0,A.axe("GET",A.cH(n,0,null))).dc(0,C.Hv),$async$DY)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8S(r),$async$DY)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lq(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DY)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2y(r,k),$async$DY)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DY)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WI(r)
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
return A.b(B.a8S(r),$async$DY)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DY,w)},
aTB(d){return B.iB2(d)},
iB2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f4().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTB)
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
return A.i($async$aTB,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[68]
I=c[100]
P=c[312]
Q=c[54]
F=c[305]
K=c[186]
G=c[70]
R=c[270]
S=c[271]
E=c[261]
H=c[102]
T=c[236]
U=c[73]
V=c[187]
W=c[268]
L=c[250]
X=c[297]
M=c[313]
B=a.updateHolder(c[27],B)
D=c[311]
Y=c[235]
N=c[244]
Z=c[79]
A_=c[87]
B.cuL.prototype={
aHw(d,e){return this.cTe(d,e)},
cTe(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dD(r,s,t)
t.u(0,d)
u=new q(A.ky(A.cy(t)))
t=J.k(u)
v=B.iaf(C.cS.gcp().aK(new A.dh(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHw,w)}}
B.b7J.prototype={
bDY(d){var x=this,w=x.w
w.onclose=A.hE(new B.cuG(x))
w.onopen=A.hE(new B.cuH(x))
w.onmessage=A.hE(new B.cuI(x))
w.onbufferedamountlow=A.hE(new B.cuJ(x))},
gd4(d){return this.x},
ajA(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G7()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hkf(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$ajA)
case 8:v=t.hkf(s.apW(f,0,null))
x=1
break
case 7:case 4:v=B.hkf(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajA,w)}}
B.b7K.prototype={
bDZ(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hE(new B.cuM(x)))
w.addEventListener("icecandidate",A.hE(new B.cuN(x)))
w.addEventListener("iceconnectionstatechange",A.hE(new B.cuO(x)))
w.onicegatheringstatechange=A.hE(new B.cuP(x))
w.addEventListener("signalingstatechange",A.hE(new B.cuQ(x)))
if(!$.hsh())w.addEventListener("connectionstatechange",A.hE(new B.cuR(x)))
w.addEventListener("negotiationneeded",A.hE(new B.cuS(x)))
w.addEventListener("track",A.hE(new B.cuT(x)))},
anl(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ei(s.createAnswer(A.ky(A.cy(A.S(y.N,y.z)))),y.aQ),$async$anl)
case 3:t=f
v=new B.Z0(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anl,w)},
a9w(d,e){return this.bsT(0,e)},
bsT(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9w)
case 2:return A.h(null,w)}})
return A.i($async$a9w,w)},
a9E(d,e){return this.btd(0,e)},
btd(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9E)
case 2:return A.h(null,w)}})
return A.i($async$a9E,w)},
arI(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arI=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.i($async$arI,w)},
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
B.ae9.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a_Y.prototype={
R(){return new B.aC8()},
gd6(){return this.c}}
B.aC8.prototype={
a_(){this.a3()
this.ag6()},
ag6(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2p(u.e,u.c),$async$ag6)
case 2:t=e
if(v.c!=null)v.l(new B.dfF(v,t))
return A.h(null,w)}})
return A.i($async$ag6,w)},
RB(){var x=0,w=A.j(y.H),v,u=this,t
var $async$RB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arI(t.e,t.c,!1),$async$RB)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fzf)
x=1
break}x=4
return A.b(B.a8M(u.a.c,"individual"),$async$RB)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a7S(A.e5(new B.dfC(u),!1,null,y.H)),$async$RB)
case 5:case 1:return A.h(v,w)}})
return A.i($async$RB,w)},
Kg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Kg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fJj(o),$async$Kg)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8Q(o.e,r,s,q),$async$Kg)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fwe)
x=1
break}x=5
return A.b(B.a8M(u.a.c,"member"),$async$Kg)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a7S(A.e5(new B.dfE(u),!1,null,y.H)),$async$Kg)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Kg,w)},
yV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8L(t.e,o,t.f,t.r,t.w,s),$async$yV)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8M(u.a.c,"org_owner"),$async$yV)
case 4:x=5
return A.b(B.arN(u.a.c),$async$yV)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fJO(o),$async$yV)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8O(s,t,o,q.c),$async$yV)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fwa)
x=1
break}x=10
return A.b(B.arN(u.a.c),$async$yV)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a7S(A.e5(new B.dfD(u),!1,null,y.H)),$async$yV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yV,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nQ:C.qQ,p=B.hio(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aE(d,C.dK,y.m).w
w=A.m(28)
v=A.a([new A.aa(0,C.H,C.az.j(0.35),C.h1,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fTH,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.hm,s,s,s),C.aB,D.hcW,C.R,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.ce2,C.m),s,s,s,s,C.eJ,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lP(new B.dfH(),s),C.M,v,C.ec,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeD(C.f3,C.aFD,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclK(),s),C.af],u))
w.push(new B.aeD(C.q_,C.a6j,"Team Member","Sign in with your organization access code + password",t.gcmF(),s))
w.push(C.af)
w.push(new B.aeD(C.arx,C.a7X,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcm9(),s))
return A.c6(s,q,A.bo(!0,A.cb(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeD.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eJ(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.mb,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(C.zT,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEO.prototype={}
B.aI0.prototype={}
B.jQ.prototype={
mQ(d){var x=this.b,w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gaso(){var x=this.d
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
bh3(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jQ(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRK(d){return this.bh3(null,d)},
aHf(d){return this.bh3(d,null)}}
B.WC.prototype={
R(){return new B.aGa(new A.cA(null,y.A))},
gd6(){return this.c}}
B.aGa.prototype={
a_(){this.a3()
this.ag7()},
ag7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cu(u.a.c),$async$ag7)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e28(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ag7,w)},
ag8(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ag8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fC(s)),$async$ag8)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fAa)
case 1:return A.h(v,w)}})
return A.i($async$ag8,w)},
a0i(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqN(s.d,4),$async$a0i)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ry(r,"ngmy_my_code_"+m+".png"),$async$a0i)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0i,w)},
ak1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ak1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abW("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ak1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ak1,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nQ:C.qQ,m=o?C.c:C.a_,l=A.eV(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lr
else if(q.e==null)x=A.at(new A.D(C.eJ,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.K(C.az.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.D,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.M,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.Av,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,P.ao3,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.H,C.az.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.ns,w,C.lk,new A.e7(A.p(p,A.qr(p,p,!1,B.i56(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lk,A.A(A.a([A.E(A.eq(I.DX,p,C.Xd,q.gcdW(),p),1),C.ar,A.E(A.db(C.Aj,p,C.adh,q.gcdX(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.R,new A.a5(1/0,p,A.eq(N.a56,p,D.h8q,q.gcBR(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,Z.aoF,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.WG.prototype={
R(){return new B.aGd(new A.au(C.ax,$.az()),A.ko(!0,null,!0,!0,null,null,!1))}}
B.aGd.prototype={
a_(){var x,w
this.a3()
x=this.a.e
w=B.Jv(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
a0j(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jv(u.d.a.a)
if(t==null){u.l(new B.e3h(u))
x=1
break}u.l(new B.e3i(u))
s=u.a
r=s.c
x=3
return A.b(B.a8K(s.d,new B.e3j(u),t,r),$async$a0j)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e3k(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0j,w)},
a3I(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3I=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cw(r.a.d)){x=1
break}r.l(new B.e3l(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.t5(r.a.c,q),$async$a3I)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e3m(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajJ(p,m,l,j,k),$async$a3I)
case 8:o=e
if(r.c!=null)r.l(new B.e3n(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e3o(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e3p(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3I,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ak2:D.ahw,h=j?D.alQ:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.aj0:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eV(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dv(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dv(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c0V,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ay,C.aD,C.x,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f9,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.Av,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v9(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmR()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pi,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e3q(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mK,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.E6(l.a.d,4)
m=A.B(new A.O(m,new B.e3r(x,new A.aJg(i)),m.$ti.k("O<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.kL,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.M,e,C.M,q,C.di,p,C.M,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fuH)
else q.push(A.V(C.kN,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cV(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j2,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJd,k,k,C.ah),1)
u=l.f?k:l.gcBS()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eq(N.a56,k,D.h9x,u,A.dk(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdY()
t=A.bp(C.az,k,k,0,C.c,k,C.nY,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c6(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bo(!0,A.ly(new B.e3s(),A.x(A.a([e,new A.D(D.bIH,A.x(A.a([s,C.M,i,C.af,A.bI(l.f?C.up:D.h7M,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cp,C.a1n,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmR.prototype={
pe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fm(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hw(C.bD,v.length),C.aP)}}
B.WD.prototype={
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
ag9(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ag9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e29(r))
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
return A.b(B.a8P(p,m,n,o,C.a.i(l).length===0?null:l),$async$ag9)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fzM)
s=[1]
x=4
break}p.L(y.q).f.T(D.fyn)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e2a(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ag9,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nQ:C.qQ,q=A.eV(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h05,s,s,s,1,s,!0),p=A.p(s,D.bAF,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.IY,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8m,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8h,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8x,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdZ()
u=A.bp(C.az,s,s,s,s,C.hr,s,s,s,s,s,s)
return A.c6(q,r,A.cb(A.x(A.a([p,C.di,o,C.af,x,C.af,w,C.ns,A.bI(t.r?C.up:C.aZL,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adR.prototype={}
B.bzR.prototype={
a6z(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.a8i()))
x=3
return A.b(B.SI(t,s),$async$a6z)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
gd6(){return this.a}}
B.OE.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a_X.prototype={
R(){return new B.aC7(new A.au(C.ax,$.az()),A.ko(!0,null,!0,!0,null,null,!1))}}
B.aC7.prototype={
a_(){this.a3()
$.aU.U$.push(new B.dfB(this))},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
ce4(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a32(d),u=x.a.c,t=u?C.iX:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nQ:v.a[0],p=A.m(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.az.j(u?0.25:0.12),C.h1,32)],n),l=A.p(w,Y.auh,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.H,C.az.j(0.4),C.cz,16)],n),C.av7,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.D,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v9(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzt()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.N,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.D8,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b8g),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dfz(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mK,w,w,w,w)
f=f[1]
h=y.p
return A.eH(w,C.L,new A.cS(T.MV,new A.bP(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x9,A.x(A.a([l,C.aO,k,C.M,j,C.ec,i,C.ec,A.A(A.a([A.E(A.dY(C.oq,new B.dfA(d),A.dk(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.m(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.o(w,w,w,A.m(14),A.a([new A.aa(0,C.H,C.az.j(0.35),C.cP,12)],n),M.Rm,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eDs,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gce3(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.O,0,C.p),w),w),w),w,w,w,C.Pq,w,C.dd,w,w,w)}}
B.bzt.prototype={
pe(d,e){return e.anf(e.a.toUpperCase())}}
B.WE.prototype={
R(){return new B.aGc(A.a([],y.r),A.aR(y.N))},
gd6(){return this.c}}
B.aGc.prototype={
a_(){var x=this
x.a3()
x.uu()
x.w=A.d0(C.jV,new B.e3f(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WN()
this.a2()},
a2y(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OD(u.a.c),$async$a2y)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bp(u.a.c),$async$a2y)
case 4:u.l(new s.e2D(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OD(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bp(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e2E(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OI(u.d)
B.Cu(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
OI(d){return this.bI5(d)},
bI5(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8U(r,u.a.c),$async$OI)
case 8:p=f
if(u.c==null){x=1
break}new B.e2c(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mQ(D.nm))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WL(r,u.a.c),$async$OI)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bp(u.a.c),$async$OI)
case 12:u.l(new o.e2d(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
P7(d){return this.bOw(d)},
bOw(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8U(d,u.a.c),$async$P7)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e2i(u,d,t))
x=6
return A.b(A.fM(new A.fC(t)),$async$P7)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fC(r.toUpperCase())),$async$P7)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P7,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cN0(d,e)},
cN0(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e33(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e34(r))
$.eW.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaZ1(){var x=this.a
return x.f||x.r||x.w},
J2(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZ1()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgp(s,n,r,q,o,t),$async$J2)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fWY(o,u.a.c),$async$J2)
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
return A.b(B.E_(s,o,r,q,n,t),$async$J2)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J2,w)},
a1A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arN(u.a.c),$async$a1A)
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
return A.b(A.a7(t,!1).c8(A.e5(new B.e2A(u,r,q),!1,null,y.H)),$async$a1A)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1A,w)},
a2I(d){return this.cve(d)},
cvd(){return this.a2I(1)},
cve(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZ1()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arK(u.a.c),$async$a2I)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2I,w)},
adZ(d,e,f){return this.c4A(d,e,f)},
c4A(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uv(new B.e2x(u,d,null,e,f),"Uploading\u2026"),$async$adZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adZ,w)},
bIe(){B.hPK(!1,new B.e2g(this))
return},
cAo(){this.l(new B.e2I(this))},
aBG(){var x=0,w=A.j(y.H),v=this
var $async$aBG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bIe()
return A.h(null,w)}})
return A.i($async$aBG,w)},
adV(){var x=0,w=A.j(y.H),v=this
var $async$adV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e2m(v),"Importing\u2026"),$async$adV)
case 2:return A.h(null,w)}})
return A.i($async$adV,w)},
TE(d){return this.cMj(d)},
cMj(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mQ(D.nm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).c8(A.e5(new B.e30(u,d),!1,null,y.H)),$async$TE)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mQ(D.Tq)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).c8(A.e5(new B.e31(u,d),!1,null,y.H)),$async$TE)
case 8:x=1
break
case 7:x=u.c5i(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).c8(A.e5(new B.e32(u,d),!1,null,y.H)),$async$TE)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TE,w)},
c5i(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cXX,C.a.aY(x,w+1).toLowerCase())},
ahK(d){return this.clO(d)},
clO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mQ(D.nm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).c8(A.e5(new B.e2y(u,d),!1,null,y.H)),$async$ahK)
case 5:x=1
break
case 4:u.l(new B.e2z(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahK,w)},
T_(d){return this.cDl(d)},
cDl(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$T_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pR(t,s.c,s.f),$async$T_)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e2U(u,d),"Preparing QR\u2026"),$async$T_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$T_,w)},
akr(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e2V(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2W(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.T_(r),$async$akr)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akr,w)},
akk(d){return this.cCT(d)},
cCT(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a32(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2O(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akk)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TE(d)
break
case"qr":u.T_(A.a([d],y.r))
break
case"send_my_code":u.cmu(A.a([d],y.r))
break
case"save":u.ajI(d)
break
case"delete":u.JY(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akk,w)},
Z0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e2j(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2k(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pR(t,s.c,s.f),$async$Z0)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e2l(u,r),"Preparing file\u2026"),$async$Z0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Z0,w)},
aiQ(d){return this.ctx(d)},
ctx(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hQO(d,!1),$async$aiQ)
case 3:s=f
r=s==null
q=B.a8R(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiQ,w)},
ahQ(){var x=0,w=A.j(y.H),v=this,u
var $async$ahQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h4A(u,v.a.c),$async$ahQ)
case 2:return A.h(null,w)}})
return A.i($async$ahQ,w)},
bId(){B.hPK(!1,new B.e2f(this,null))
return},
Kf(d,e){return this.cmv(d,e)},
b4K(d){return this.Kf(null,d)},
cmu(d){return this.Kf(d,null)},
cmv(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Kf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e2B(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y0.cq().aq1(!0,C.a3a,!1),$async$Kf)
case 10:r=g
if(r==null||J.cw(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e2C(l,s,r),"Preparing\u2026"),$async$Kf)
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
return A.b(B.bIa(p,l,e,s.a.c),$async$Kf)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Kf,w)},
Jj(d){return this.c4n(d)},
c4n(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i55(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4K(t),$async$Jj)
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
return A.b(u.uv(new B.e2v(u,d),"Receiving video\u2026"),$async$Jj)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e2w(u,d),"Receiving\u2026"),$async$Jj)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jj,w)},
F7(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DU()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiQ(t),$async$F7)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jj(s),$async$F7)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).c8(A.e5(new B.e2G(u),!1,null,y.N)),$async$F7)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$F7)
case 10:x=1
break
case 9:x=11
return A.b(u.Jj(C.a.i(r)),$async$F7)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F7,w)},
ajI(d){return this.cyT(d)},
cyT(d){var x=0,w=A.j(y.H),v=this
var $async$ajI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e2F(v,d),"Saving\u2026"),$async$ajI)
case 2:return A.h(null,w)}})
return A.i($async$ajI,w)},
JY(d){return this.bQU(d)},
bQU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lB(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JY)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgs(t),$async$JY)
case 6:case 5:s=d.a
x=7
return A.b(B.FD(u.a.c,s),$async$JY)
case 7:u.r.X(0,s)
x=8
return A.b(u.uu(),$async$JY)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JY,w)},
akx(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a32(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e3_(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akx)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahQ()
break
case"import":u.adV()
break}case 1:return A.h(v,w)}})
return A.i($async$akx,w)},
ce1(d){var x=d.c
if(C.a.Y(x,"video/")||d.mQ(D.nm))return C.rp
if(C.a.Y(x,"image/")||d.mQ(D.Tq))return C.vv
if(C.a.q(x,"pdf"))return S.ID
return D.arW},
B(d){var x,w,v=this,u=null,t=B.a32(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IQ,u,u,u,new B.e3a(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c1w,u,u,u,v.e?u:v.gcma(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcAn()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bWA:E.ask,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a53,u,u,u,v.e?u:v.gce2(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p4,u,u,u,v.e?u:v.gb5R(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3k,u,u,u,v.e?u:new B.e3b(v),u,u,u,u,"More options",u))
q=A.eV(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lP(new B.e3c(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dv(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dv(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jD(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aC4(C.jG,s,!0,t,w?u:v.gcDm(),u),1)
x.push(new A.D(D.bHq,A.ly(new B.e3d(),A.A(A.a([s,C.ar,A.E(new B.aC4(C.tM,"Export",!1,t,w?u:v.gbUM(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cp,C.iO,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhk(t,v.e?u:v.gb5R(),u)
else s=A.kG(!0,u,u,new B.e3e(v,t),s,u,D.bHh,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aC4.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tA,t,new A.b9(s,C.a1),t,t,t)
return A.db(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dk(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tA,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eq(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fi,t,t,t),u.r,v)}}
B.bhk.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.ly(new B.dfx(),new A.D(E.a2h,A.x(A.a([A.ly(new B.dfy(),A.p(x,A.V(C.zX,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ay,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ej,C.hx,x,x,new A.bq(0.86,1,w),s),C.ec,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.R,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ec,A.db(C.p4,x,D.hdf,this.d,A.bp(C.az,x,x,x,C.c,x,C.Po,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.O,0,C.p),x),C.cp,C.CX,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aea.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.du(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mQ(D.nm))p=D.dAp
else{p=C.a.Y(p,"image/")||i.mQ(D.Tq)
n=y.O
p=p?A.a([C.cZ,C.az],n):A.a([C.aN.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ay,C.aD,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaso()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.nm))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h_,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.co))
if(!(!o||i.mQ(D.nm)))l.push(A.hga(C.az,!1,j,j,j,!1,j,j,new B.dfU(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.V(C.p_,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.co))
return A.ly(new B.dfV(),new A.D(C.dU,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1K,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cp,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_Z.prototype={
R(){return new B.aC9()},
gd6(){return this.c}}
B.aC9.prototype={
a_(){this.a3()
this.yJ()},
t(){B.i5k(this.e)
this.a2()},
yJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t5(o.c,o.d),$async$yJ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i5n(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i5m(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dfR(s))
x=1
break}s.l(new B.dfS(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dfT(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yJ,w)},
a3H(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t5(t.c,t.d),$async$a3H)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fwL)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajJ(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3H)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3H,w)},
c4g(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kU(u,C.z,v,new B.dfP(w,t),C.he,C.dI,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h5(t,C.z,v,new B.dfQ(w),C.he,C.dI,!0,v,!1,v,v)
else return C.bK
return A.vg(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a32(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DZ,u,u,u,v.gb9G(),u,u,u,u,"Share / save",u))
r=A.eV(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gn
else{q=v.r
if(q!=null)t=new A.D(C.eJ,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eJ,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.db(C.DZ,u,D.fWb,v.gb9G(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c4g()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_W.prototype={
R(){return new B.aC6(A.akG(),C.bH,C.bH)},
gd6(){return this.c}}
B.aC6.prototype={
a_(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fG(w,A.a3(w).k("fG<1>")).iF(new B.dfu(v))
x.gd_Y().iF(new B.dfv(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fG(x,A.a3(x).k("fG<1>"))}if(x==null)x=C.beE
x.iF(new B.dfw(v))
v.yJ()},
yJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t5(p.c,p.d),$async$yJ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dfn(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a5g(r,s.a.d.c)),$async$yJ)
case 8:if(s.c==null){x=1
break}s.l(new B.dfo(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dfp(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yJ,w)},
a0k(){var x=0,w=A.j(y.H),v=this,u
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0k)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0k)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0k,w)},
aWS(d){var x=d.a
return C.a.aZ(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a32(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eV(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gn
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bXy,C.f,o,o,new A.o(o,o,o,A.m(24),o,M.Rm,C.m),o,88,o,o,o,o,o,88)
t=A.lc(C.az,o,o,m,0,new B.dfq(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aWS(p.w)+" / "+p.aWS(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.ft9,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vy:C.fO,o,o,o,o,o)
x=A.x(A.a([u,C.lk,t,x,C.di,A.db(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gce5(),s)],y.p),C.l,o,C.e,C.O,0,C.p)}}return A.c6(v,w,A.at(new A.D(C.ra,x,o),o,o,o),o,!1,!1,o,o)}}
B.R2.prototype={
R(){return new B.aCc()},
gd6(){return this.c}}
B.aCc.prototype={
a_(){this.a3()
this.QR()},
QR(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hip(o.c,o.d,new B.dg7(s)),$async$QR)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dg8(s))
x=1
break}s.e=r
q=Q.isZ(r)
if(q==null){s.l(new B.dg9(s))
x=1
break}s.d=q
q.aU(0,s.gb4x())
x=8
return A.b(q.iW(0).dc(0,C.nX),$async$QR)
case 8:if(s.c==null){x=1
break}s.l(new B.dga(s))
x=9
return A.b(q.qv(0),$async$QR)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dgb(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QR,w)},
ckm(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dgc(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DT(0,x.gb4x())
w=x.d
if(w!=null)w.t()
B.iDe(x.e)
x.a2()},
agc(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2x(u.c,u.d),$async$agc)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agc,w)},
B(d){var x,w,v,u=this,t=null,s=B.a32(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eV(A.a([A.aI(t,t,t,t,C.oc,t,t,t,u.gce_(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iw(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gn
else{q=u.r
if(q!=null)s=new A.D(C.eJ,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ak6(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fL(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AV(s,t),A.aA(t,A.xK(A.p(t,A.V(q?K.vy:C.fO,C.c,t,t,t,48),C.f,t,t,new A.o(C.b7,t,t,v,t,t,C.m),t,t,t,t,C.bS,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dge(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a00.prototype={
R(){return new B.aCa(new A.cA(null,y.A))}}
B.aCa.prototype={
gcMH(){var x,w,v=this.a
if(v.e!==D.UO)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcMh(){var x,w,v=this.a
if(v.e!==D.AX)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a3()
x=v.gcMH()
if(x!=null){v.S1(x)
v.e=A.d0(V.CZ,new B.dg3(v,x))}w=v.gcMh()
if(w!=null){v.S0(w)
v.f=A.d0(C.fp,new B.dg4(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
S0(d){return this.crH(d)},
crH(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$S0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arS(d),$async$S0)
case 3:t=f
x=4
return A.b(B.cgL(d),$async$S0)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfW(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
S1(d){return this.crI(d)},
crI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h5j(d),$async$S1)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFW(t),$async$S1)
case 4:if(u.c==null){x=1
break}u.l(new B.dfX(u))
u.c.L(y.q).f.T(D.aWs)
case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
gc9N(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gce0(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3r(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DU()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fzW)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).c8(A.e5(new B.dfY(),!1,null,y.N)),$async$a3r)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFW(s),$async$a3r)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aWs)
case 1:return A.h(v,w)}})
return A.i($async$a3r,w)},
abM(d){return this.bOx(d)},
bOx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fC(C.d.aL(t,", "))),$async$abM)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abM,w)},
aga(d){return this.bOf(d)},
bOf(d){var x=0,w=A.j(y.H),v=this
var $async$aga=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fC(v.a.c)),$async$aga)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fxe)
return A.h(null,w)}})
return A.i($async$aga,w)},
a3l(d){return this.cyV(d)},
cyV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqN(s.d,4),$async$a3l)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ry(r,"ngmy_doc_share_qr.png"),$async$a3l)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3l,w)},
gb_h(){var x,w=this.a
if(w.e!==D.K3)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abJ(d){return this.bOq(d)},
bOq(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_h()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fC(C.a.Y(t,"http")?t:"N2|"+t)),$async$abJ)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fyV)
case 1:return A.h(v,w)}})
return A.i($async$abJ,w)},
agb(){var x=0,w=A.j(y.H),v=this,u
var $async$agb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WN(),$async$agb)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agb,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a32(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.K3&&i!==D.UO&&i!==D.AX
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eV(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.K3||t===D.UO||t===D.AX?l:A.aI(l,l,l,l,C.lC,l,l,l,m.gb2p(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.M,A.qr(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.c(""+q.d+" file(s) \xb7 "+m.gc9N(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.K3){t=C.az.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.M,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lZ,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gce0(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.R,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.N,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c7p,D.h4W,new B.dfZ(m,d),l)],p))}if(m.a.e===D.K3&&m.gb_h()!=null)C.d.u(q,A.a([C.R,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c3G,D.h1v,new B.dg_(m,d),l)],p))
if(m.a.e===D.AX){x=(m.w?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.M,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gr:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lZ,l,l,l)],p))}if(m.a.e===D.UO){x=(m.r?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.M,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gr:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lZ,l,l,l),C.af,A.db(D.c_2,l,D.h85,m.gczh(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.p9(i,A.c6(v,w,new A.D(C.ae,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.bb,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.eq(I.DX,l,C.Xd,new B.dg0(m,d),l),1),C.ar,A.E(A.db(C.Aj,l,C.adh,new B.dg1(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.M,new A.a5(1/0,l,A.bI(U.BB,l,m.gb2p(),A.bp(C.aN,l,l,l,l,C.hr,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dg2(),y.C)}}
B.ae8.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.p(x,A.qr(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ej(A.a([A.bI(C.BC,x,new B.dfm(d),x)],u),x,x,C.nG,v,x,x,x,x,D.fV8,x)}}
B.a_V.prototype={
R(){return new B.aC5(A.A6(C.zc,C.ox,C.vK))}}
B.aC5.prototype={
t(){this.d.t()
this.a2()},
aA8(d){var x,w,v,u,t
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
return A.c6(A.eV(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h22,x,x,x,1,x,!0),C.v,A.A5(this.d,C.c0,this.gaA7()),x,!1,!1,x,x)}}
B.a01.prototype={
R(){return new B.aCb(A.A6(C.zc,C.ox,C.vK))},
gd6(){return this.c}}
B.aCb.prototype={
c5k(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aic(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aic=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N2("text/plain"),$async$aic)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fzQ)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aic,w)},
acA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hQO(p,!0),$async$acA)
case 3:t=e
p=t==null
s=B.a8R(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fwl)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acA,w)},
t(){this.d.t()
this.a2()},
aA8(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c5k(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.atm,v,v,v,w.gbUf(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5a,v,v,v,w.gcp_(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eV(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.rj:R.Qy,v,v,v,v,v),v,v,v,new B.dg6(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h91,v,v,v,1,v,!0)
u=A.A5(w.d,C.c0,w.gaA7())
x=A.m(20)
return A.c6(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eJK],s),v),v,!1,!1,v,v)}}
B.bhl.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pL
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pL:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2n,A.A(A.a([u,C.bc,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eM,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abj.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PM.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Z_.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PL.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.G8.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cuK.prototype={}
B.G7.prototype={}
B.abi.prototype={}
B.awq.prototype={}
B.Z0.prototype={}
var z=a.updateTypes(["ay<~>()","P(jQ)","n(jQ)","WE(Z)","~()","a_Y(Z)","G(G,jQ)","R2(Z)","~(lG)","co(G7)","ay<jQ?>(@)","WC(Z)","WG(Z)","D(jQ)","jQ(@)","a9<n,@>(jQ)","a_X(Z)","WD(Z)","a_Z(Z)","a_W(Z)","a00(Z)","ae8(Z)","ai<jQ>()","a01(Z)","aea(Z,G)","a_V(Z)","a9<n,aF>(jQ)","co(Z_)","co(abi)","ay<co>(G7)"])
B.cuG.prototype={
$1(d){var x=this.a
x.x=D.aT9
x.y.I(0,D.aT9)},
$S:74}
B.cuH.prototype={
$1(d){var x=this.a
x.x=D.aT8
x.y.I(0,D.aT8)},
$S:74}
B.cuI.prototype={
$1(d){var x=this.a
x.ajA(A.a3M(d.data)).bE(new B.cuF(x),y.b)},
$S:74}
B.cuF.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cuJ.prototype={
$1(d){},
$S:74}
B.cuM.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.iae(d.channel))},
$S:17}
B.cuN.prototype={
$1(d){},
$S:17}
B.cuO.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iu8(w.iceConnectionState)
x.cx=w
if($.hsh())switch(w.a){case 0:x.cy=D.aTe
break
case 1:x.cy=D.aTf
break
case 3:x.cy=D.aTg
break
case 5:x.cy=D.aTc
break
case 6:x.cy=D.aTd
break
case 7:x.cy=D.aaT
break
default:break}},
$S:108}
B.cuP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iu9(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.cuQ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iEN(w.signalingState)},
$S:108}
B.cuR.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iCW(w.connectionState)},
$S:108}
B.cuS.prototype={
$1(d){},
$S:108}
B.cuT.prototype={
$1(d){},
$S:17}
B.fEH.prototype={
$1(d){var x=y.F.a(new A.qI([],[]).o7(d.target.result,!1)),w=C.wZ.q(x.objectStoreNames,"blobs")
if(!w)C.wW.GE(x,"blobs")},
$S:177}
B.h4o.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xC.fl(this.b)
$.eW.mJ()
this.c.$1(d)},
$S:401}
B.h4q.prototype={
$1(d){return this.a.$1(B.ijB(this.b,this.c))},
$S:33}
B.h4p.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h4n.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h4D.prototype={
$1(d){var x=this
return B.hEQ(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h4E.prototype={
$1(d){var x=this
return B.hEQ(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fHn.prototype={
$1(d){var x=this
return B.cgm(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dfF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dfC.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgm(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dfE.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgm(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dfD.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgm(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dfH.prototype={
$4(d,e,f,g){var x=null
return A.kc(A.A(A.a([A.aI(x,x,x,x,D.bYE,x,x,x,new B.dfG(d),x,x,x,x,x,x),A.E(A.FU(D.T8,!0,x,!1,C.a4e,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.T8,x,g,C.aoZ,0,e,f)},
$C:"$4",
$R:4,
$S:476}
B.dfG.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fJm.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.f0,y.m).w,t=this.a,s=t?C.iX:C.c,r=A.m(28),q=A.p(v,D.bAZ,C.f,v,v,D.b9V,v,v,v,v,D.aoL,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c27,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Da,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atC,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dY(C.dw,new B.fJk(d),v),1),C.ar,A.E(A.bI(D.h0t,v,new B.fJl(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HC,v,v,v,v),v)},
$S:63}
B.fJk.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fJl.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fxv)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aEO(v,x))},
$S:0}
B.fJQ.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.f0,y.m).w,u=x.a,t=u?C.iX:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bAP,C.f,w,w,D.bbp,w,w,w,w,D.aoL,w,w,1/0),new A.D(C.Da,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hnR(u,"Organization name",C.Ic,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hnR(u,"Access code",C.mu,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hnR(u,"Member password",C.DW,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.by,A.bI(D.h98,w,new B.fJP(r,q,p,d),A.bp(C.az,w,w,w,w,C.hr,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HC,w,w,w,w),w)},
$S:63}
B.fJP.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fxA)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aI0(u,x,w))},
$S:0}
B.cgd.prototype={
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
return A.b(A.w6(p,null).dc(0,C.a1m),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cv(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cgj.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgk.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgl.prototype={
$1(d){return d.b},
$S:z+2}
B.cgf.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgg.prototype={
$1(d){return d.b},
$S:z+2}
B.cge.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cgh.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgi.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h4B.prototype={
$1(d){return new B.WC(this.a,null)},
$S:z+11}
B.h4C.prototype={
$1(d){return new B.WG(this.a,this.b,this.c,null)},
$S:z+12}
B.e28.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e3h.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e3i.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e3j.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e3g(x,d))},
$S:2}
B.e3g.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e3k.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e3l.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e3m.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e3n.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e3o.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e3p.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e3s.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*14)),e)},
$S:100}
B.e3q.prototype={
$1(d){var x=this.a
return x.f?null:x.a0j()},
$S:2}
B.e3r.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mQ(D.Tq))s=C.vv
else s=C.a.Y(s,"video/")||d.mQ(D.nm)?C.rp:D.arW
x=this.b.a
w=y.p
return new A.D(C.jX,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gaso(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e29.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e2a.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgn.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:102}
B.cgo.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:102}
B.h5C.prototype={
$2(d,e){return e===this.a},
$S:276}
B.fBF.prototype={
$1(d){return J.k(d)},
$S:15}
B.fHz.prototype={
$1(d){var x=this.b
B.ihw(C.I0.ga8c(this.a)).bE(x.gCs(x),y.H)},
$S:131}
B.fHA.prototype={
$1(d){return this.a.dh(0,null)},
$S:131}
B.fHB.prototype={
$0(){return null},
$S:12}
B.cgC.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHC.prototype={
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
u=J.k(u==null?new A.W(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jQ(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fLV.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fFL.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fFM.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cgH.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.h9S.prototype={
$1(d){return new B.a_X(this.a,null)},
$S:z+16}
B.dfB.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.h_()},
$S:7}
B.dfz.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dfA.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e3f.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2y()},
$S:10}
B.e2D.prototype={
$0(){var x=J.bJg(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2E.prototype={
$0(){var x=J.bJg(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2c.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e2b(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHf(this.c)}},
$S:0}
B.e2b.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2d.prototype={
$0(){var x=J.bJg(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2i.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e2h(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHf(this.c)}},
$S:0}
B.e2h.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e33.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e34.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e2A.prototype={
$1(d){return new B.WD(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e2x.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J2(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WH(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a2(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2I(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2g.prototype={
$1(d){this.a.adZ(d,"No files selected.","Added")},
$S:401}
B.e2I.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e2H(),A.U(x).k("O<1,n>")))},
$S:0}
B.e2H.prototype={
$1(d){return d.a},
$S:z+2}
B.e2m.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y0.cq().d1X(C.a3a,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jW(o,0,null)}u=2
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
return A.b(B.arR(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cw(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e30.prototype={
$1(d){return new B.R2(this.a.a.c,this.b,null)},
$S:z+7}
B.e31.prototype={
$1(d){return new B.a_Z(this.a.a.c,this.b,null)},
$S:z+18}
B.e32.prototype={
$1(d){return new B.a_W(this.a.a.c,this.b,null)},
$S:z+19}
B.e2y.prototype={
$1(d){return new B.R2(this.a.a.c,this.b,null)},
$S:z+7}
B.e2z.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2U.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J2(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8T(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cvd(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("O<1,n>")
r=new A.O(new A.O(t,new B.e2Q(p),r),new B.e2R(),r.k("O<aj.E,n>")).c0(0,new B.e2S())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).c8(A.e5(new B.e2T(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pQ(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WN(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2Q.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e2P(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e2P.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2R.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e2S.prototype={
$1(d){return d.length!==0},
$S:3}
B.e2T.prototype={
$1(d){var x=this.a
return new B.a00(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e2V.prototype={
$1(d){return d.a},
$S:z+2}
B.e2W.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e2O.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kJ,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gaso(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mQ(D.nm)?C.tQ:C.oa
p=!x||p.mQ(D.nm)?"Play video":"View"
return new A.bP(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lo,v,v,C.m),C.bm,A.bo(!0,new A.D(C.D6,A.x(A.a([q,o,t,C.aB,B.a0_(!1,u,!1,w,p,new B.e2J(d),v),B.a0_(!1,u,!1,C.jG,"Share via QR",new B.e2K(d),"Letters/numbers QR code"),B.a0_(!1,u,!1,D.a4j,"Send to their Code",new B.e2L(d),"Enter someone else's personal code"),B.a0_(!1,u,!1,C.hP,"Download / save",new B.e2M(d),v),C.aj,B.a0_(!1,u,!0,C.eq,"Delete",new B.e2N(d),v)],y.p),C.am,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:597}
B.e2J.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e2K.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e2L.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e2M.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e2N.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e2j.prototype={
$1(d){return d.a},
$S:z+2}
B.e2k.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e2l.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8V(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hy(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pQ(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2f.prototype={
$1(d){var x=this.a
x.uv(new B.e2e(x,d,this.b),"Preparing\u2026")},
$S:401}
B.e2e.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WH(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cw(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bIa(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2B.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e2C.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aQ(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.his(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2v.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hw(new B.e2r(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e2s(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e2t(s))
case 5:x=8
return A.b(r.b.ic(0,C.Hv,new B.e2u()),$async$$0)
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
B.e2r.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e2o(x,d,e))},
$S:191}
B.e2o.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e2s.prototype={
$1(d){return new B.ae8(this.a.a,null)},
$S:z+21}
B.e2t.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e2u.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e2w.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jv(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8J(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4K(B.Jv(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arR(new B.e2p(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cw(r)){if(B.hir(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cI(r)
p=o.eT(r,new B.e2q()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2p.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e2n(x,d,e))},
$S:191}
B.e2n.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e2q.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.e2G.prototype={
$1(d){return new B.a01(this.a.a.c,null)},
$S:z+23}
B.e2F.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2x(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3_.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.o(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lo,x,x,C.m),C.bm,A.bo(!0,new A.D(C.D6,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kJ,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a0_(!0,w,!1,C.mu,"My Code",new B.e2X(d),"Your personal code & QR \u2014 others send docs to you"),B.a0_(!1,w,!1,D.a4j,"Send to their Code",new B.e2Y(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0_(!1,w,!1,W.Ab,"Import backup",new B.e2Z(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:597}
B.e2X.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e2Y.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bId()},
$S:0}
B.e2Z.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e3c.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JF(D.T8,x,C.a4e,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d1(C.d.gG(D.T8).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:498}
B.e3a.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e3b.prototype={
$0(){this.a.akx()
return null},
$S:0}
B.e3d.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*10)),e)},
$S:100}
B.e3e.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aea(e,w,v,this.b,x.e,x.ce1(w),new B.e36(x,w),new B.e37(x,v,w),new B.e38(x,w),new B.e39(x,w),null)},
$S:z+24}
B.e36.prototype={
$0(){this.a.ahK(this.b)
return null},
$S:0}
B.e37.prototype={
$0(){var x=this.a
return x.l(new B.e35(x,this.b,this.c))},
$S:0}
B.e35.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e38.prototype={
$0(){this.a.P7(this.b)
return null},
$S:0}
B.e39.prototype={
$0(){this.a.akk(this.b)
return null},
$S:0}
B.dfx.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*18)),e)},
$S:100}
B.dfy.prototype={
$3(d,e,f){return A.ea(C.z,f,e,null,null)},
$S:116}
B.dfV.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*14)),e)},
$S:100}
B.dfU.prototype={
$1(d){return this.a.y.$0()},
$S:89}
B.dfR.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dfS.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dfT.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dfP.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h5(w,C.z,x,new B.dfN(this.a),C.he,C.dI,!0,x,!1,x,x)
$.aU.U$.push(new B.dfO(this.a))
return C.bK},
$S:148}
B.dfN.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfL(this.a))
return C.bK},
$S:189}
B.dfL.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfI(x))},
$S:7}
B.dfI.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfO.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfK(x))},
$S:7}
B.dfK.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfQ.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfM(this.a))
return C.bK},
$S:189}
B.dfM.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfJ(x))},
$S:7}
B.dfJ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfu.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dft(x,d))},
$S:1808}
B.dft.prototype={
$0(){return this.a.f=this.b===C.w5},
$S:0}
B.dfv.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfs(x,d))},
$S:7}
B.dfs.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dfw.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfr(x,d))},
$S:7}
B.dfr.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dfn.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dfo.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dfp.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dfq.prototype={
$1(d){return this.a.d.O2(0,A.du(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dg7.prototype={
$0(){var x=this.a.a
return B.t5(x.c,x.d)},
$S:1809}
B.dg8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dg9.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dga.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dgb.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dgc.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dge.prototype={
$0(){var x=this.a
x.l(new B.dgd(x))},
$S:0}
B.dgd.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qv(0)},
$S:0}
B.dg3.prototype={
$1(d){return this.a.S1(this.b)},
$S:10}
B.dg4.prototype={
$1(d){return this.a.S0(this.b)},
$S:10}
B.dfW.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfX.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfY.prototype={
$1(d){return D.hL0},
$S:z+25}
B.dg2.prototype={
$2(d,e){if(d)B.WN()},
$S:130}
B.dfZ.prototype={
$0(){return this.a.abM(this.b)},
$S:0}
B.dg_.prototype={
$0(){return this.a.abJ(this.b)},
$S:0}
B.dg0.prototype={
$0(){return this.a.aga(this.b)},
$S:0}
B.dg1.prototype={
$0(){return this.a.a3l(this.b)},
$S:0}
B.dfm.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.dg6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qy(),$async$$0)
case 2:u.l(new B.dg5(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dg5.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cgJ.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.cgK.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cgI.prototype={
$2(d,e){return this.boC(d,e)},
boC(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WO(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1810}
B.fLx.prototype={
$1(d){if(d===D.aaS&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fLy.prototype={
$0(){},
$S:12}
B.fM8.prototype={
bqf(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fyG(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hzQ(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqf(d,e)},
$S:784}
B.fM7.prototype={
$1(d){var x=this
d.b=new B.fM6(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fM6.prototype={
$1(d){return this.bqe(d)},
bqe(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2y(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
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
return A.b(B.fyG(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a6(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
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
return A.b(B.a8S(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aC8.prototype,"gclK","RB",0)
x(v,"gcmF","Kg",0)
x(v,"gcm9","yV",0)
x(v=B.aGa.prototype,"gcdW","ag8",0)
x(v,"gcdX","a0i",0)
x(v,"gcBR","ak1",0)
x(v=B.aGd.prototype,"gcdY","a0j",0)
x(v,"gcBS","a3I",0)
x(B.aGb.prototype,"gcdZ","ag9",0)
x(B.aC7.prototype,"gce3","ce4",4)
x(v=B.aGc.prototype,"gcma","a1A",0)
x(v,"gcAn","cAo",4)
x(v,"gb5R","aBG",0)
x(v,"gcDm","akr",0)
x(v,"gbUM","Z0",0)
x(v,"gce2","F7",0)
x(B.aC9.prototype,"gb9G","a3H",0)
x(B.aC6.prototype,"gce5","a0k",0)
x(v=B.aCc.prototype,"gb4x","ckm",4)
x(v,"gce_","agc",0)
x(v=B.aCa.prototype,"gczh","a3r",0)
x(v,"gb2p","agb",0)
w(B.aC5.prototype,"gaA7","aA8",8)
x(v=B.aCb.prototype,"gcp_","aic",0)
x(v,"gbUf","acA",0)
w(v,"gaA7","aA8",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.cuK,B.abi,B.awq,B.aEO,B.aI0,B.jQ,B.adR,B.bzR,B.G7,B.Z0])
w(B.cuL,B.cuK)
w(B.b7J,B.abi)
x(A.hf,[B.cuG,B.cuH,B.cuI,B.cuF,B.cuJ,B.cuM,B.cuN,B.cuO,B.cuP,B.cuQ,B.cuR,B.cuS,B.cuT,B.fEH,B.h4o,B.h4q,B.h4p,B.h4D,B.h4E,B.fHn,B.dfC,B.dfE,B.dfD,B.dfH,B.fJm,B.fJQ,B.cgd,B.cgk,B.cgl,B.cgg,B.cge,B.cgh,B.cgi,B.h4B,B.h4C,B.e3j,B.e3s,B.e3q,B.e3r,B.fBF,B.fHz,B.fHA,B.cgC,B.fHC,B.fLV,B.fFL,B.fFM,B.cgH,B.h9S,B.dfB,B.dfz,B.e3f,B.e2b,B.e2h,B.e2A,B.e2g,B.e2H,B.e30,B.e31,B.e32,B.e2y,B.e2Q,B.e2P,B.e2R,B.e2S,B.e2T,B.e2V,B.e2W,B.e2O,B.e2j,B.e2k,B.e2f,B.e2B,B.e2s,B.e2q,B.e2G,B.e3_,B.e3c,B.e3d,B.dfx,B.dfy,B.dfV,B.dfU,B.dfP,B.dfN,B.dfL,B.dfO,B.dfQ,B.dfM,B.dfu,B.dfv,B.dfw,B.dfq,B.dg3,B.dg4,B.dfY,B.cgJ,B.cgK,B.fLx,B.fM7,B.fM6])
w(B.b7K,B.awq)
x(A.iG,[B.h4n,B.dfF,B.dfG,B.fJk,B.fJl,B.fJP,B.e28,B.e3h,B.e3i,B.e3g,B.e3k,B.e3l,B.e3m,B.e3n,B.e3o,B.e3p,B.e29,B.e2a,B.fHB,B.dfA,B.e2D,B.e2E,B.e2c,B.e2d,B.e2i,B.e33,B.e34,B.e2x,B.e2I,B.e2m,B.e2z,B.e2U,B.e2J,B.e2K,B.e2L,B.e2M,B.e2N,B.e2l,B.e2e,B.e2C,B.e2v,B.e2o,B.e2t,B.e2u,B.e2w,B.e2n,B.e2F,B.e2X,B.e2Y,B.e2Z,B.e3a,B.e3b,B.e36,B.e37,B.e35,B.e38,B.e39,B.dfR,B.dfS,B.dfT,B.dfI,B.dfK,B.dfJ,B.dft,B.dfs,B.dfr,B.dfn,B.dfo,B.dfp,B.dg7,B.dg8,B.dg9,B.dga,B.dgb,B.dgc,B.dge,B.dgd,B.dfW,B.dfX,B.dfZ,B.dg_,B.dg0,B.dg1,B.dfm,B.dg6,B.dg5,B.fLy])
x(A.lg,[B.ae9,B.OE,B.abj,B.PM,B.Z_,B.PL,B.G8])
x(A.af,[B.a_Y,B.WC,B.WG,B.WD,B.a_X,B.WE,B.a_Z,B.a_W,B.R2,B.a00,B.a_V,B.a01])
x(A.ah,[B.aC8,B.aGa,B.aGd,B.aGb,B.aC7,B.aGc,B.aC9,B.aC6,B.aCc,B.aCa,B.aC5,B.aCb])
x(A.aw,[B.aeD,B.aC4,B.bhk,B.aea,B.ae8,B.bhl])
x(A.iH,[B.cgj,B.cgf,B.cgn,B.cgo,B.h5C,B.e2r,B.e2p,B.e3e,B.dg2,B.cgI,B.fM8])
x(A.jl,[B.bmR,B.bzt])})()
A.j2(b.typeUniverse,JSON.parse('{"b7J":{"abi":[]},"b7K":{"awq":[]},"a_Y":{"af":[],"w":[]},"aC8":{"ah":["a_Y"]},"aeD":{"aw":[],"w":[]},"WC":{"af":[],"w":[]},"WG":{"af":[],"w":[]},"aGa":{"ah":["WC"]},"aGd":{"ah":["WG"]},"bmR":{"jl":[]},"WD":{"af":[],"w":[]},"aGb":{"ah":["WD"]},"a_X":{"af":[],"w":[]},"WE":{"af":[],"w":[]},"aea":{"aw":[],"w":[]},"a_Z":{"af":[],"w":[]},"a_W":{"af":[],"w":[]},"R2":{"af":[],"w":[]},"a00":{"af":[],"w":[]},"ae8":{"aw":[],"w":[]},"a_V":{"af":[],"w":[]},"a01":{"af":[],"w":[]},"aC7":{"ah":["a_X"]},"bzt":{"jl":[]},"aGc":{"ah":["WE"]},"aC4":{"aw":[],"w":[]},"bhk":{"aw":[],"w":[]},"aC9":{"ah":["a_Z"]},"aC6":{"ah":["a_W"]},"aCc":{"ah":["R2"]},"aCa":{"ah":["a00"]},"aC5":{"ah":["a_V"]},"aCb":{"ah":["a01"]},"bhl":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mR"),k:x("N0()"),o:x("bn<n,n>"),F:x("rH"),g:x("ay<jQ?>"),x:x("ay<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bl>"),Y:x("N<a9<n,P>>"),t:x("N<a9<n,@>>"),r:x("N<jQ>"),w:x("N<+file,name(m8,n)>"),u:x("N<d1>"),s:x("N<n>"),E:x("N<jl>"),a:x("N<dE>"),p:x("N<w>"),Z:x("N<G>"),G:x("bl"),A:x("cA<ah<af>>"),n:x("ai<jQ>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("id"),e:x("iIS"),af:x("Fk"),U:x("jQ"),b:x("co"),C:x("aF"),aK:x("wT"),ab:x("G7"),br:x("awq"),v:x("Z0"),N:x("n"),X:x("bq<H>"),Q:x("ml"),D:x("dE"),aw:x("bg<n>"),cd:x("X<a9<n,@>>"),c7:x("w"),ch:x("c8<ai<jQ>>"),aW:x("c8<dE?>"),aY:x("c8<~>"),cx:x("ae9"),b1:x("bm<ai<jQ>>"),cf:x("bm<dE?>"),d4:x("bm<~>"),c4:x("aEO"),bG:x("aI0"),q:x("kZ"),B:x("q3<G7>"),c6:x("q3<abj>"),y:x("P"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bl?"),_:x("ai<jQ>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jQ?"),R:x("aF?"),c:x("Z0?"),d:x("+answerQr,transfer(n,ay<ai<jQ>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,OE,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dE?"),cm:x("adR?"),bk:x("aEO?"),ag:x("aI0?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8g=new A.ax(C.az,2,C.r,-1)
D.cc5=new A.a8(C.a5,C.a9,C.x,C.a6j,null,null)
D.b9V=new A.o(null,null,null,C.mT,null,D.cc5,C.m)
D.bbp=new A.o(null,null,null,C.mT,null,E.IY,C.m)
D.ahw=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aj0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak2=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fW3=new A.C("Your team portal",null,C.dv,null,null,null,null,null,null,null,null,null)
D.ha6=new A.C("Share the access code and member password with your team. They only sign in once.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dqT=x([D.fW3,C.aj,D.ha6],y.p)
D.bAF=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dqT,null)
D.heF=new A.C("Create your organization",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.h_F=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dJ9=x([D.heF,C.aj,D.h_F],y.p)
D.bAP=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJ9,null)
D.haL=new A.C("Team Member sign-in",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.h3F=new A.C("Enter the access code and password from your organization.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dGH=x([D.haL,C.aj,D.h3F],y.p)
D.bAZ=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGH,null)
D.bHh=new A.R(16,10,16,28)
D.bHq=new A.R(16,14,16,4)
D.bIH=new A.R(20,0,20,16)
D.bJd=new A.R(20,8,20,16)
D.aoL=new A.R(24,22,24,20)
D.a4j=new A.a_(63394,"MaterialIcons",!1)
D.arW=new A.a_(63515,"MaterialIcons",!1)
D.bWA=new A.a_(983813,"MaterialIcons",!1)
D.bTI=new A.a_(62867,"MaterialIcons",!1)
D.bXy=new A.ae(D.bTI,44,C.c,null,null,null)
D.bYE=new A.ae(C.kk,null,C.ab,null,null,null)
D.c_2=new A.ae(C.jH,18,null,null,null,null)
D.c0V=new A.ae(D.a4j,26,C.c,null,null,null)
D.c1w=new A.ae(C.DM,null,null,null,null,null)
D.c27=new A.ae(C.DT,null,null,null,null,null)
D.c3k=new A.ae(A_.a4u,null,null,null,null,null)
D.c3G=new A.ae(C.i3,16,null,null,null,null)
D.c7p=new A.ae(C.tP,16,null,null,null,null)
D.bXQ=new A.ae(C.mu,null,null,null,null,null)
D.c8h=new A.ee(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2F=new A.ae(C.Ic,null,null,null,null,null)
D.c8m=new A.ee(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYb=new A.ae(C.DW,null,null,null,null,null)
D.c8x=new A.ee(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYA=x([C.fz,C.b5,C.az],y.O)
D.ce2=new A.a8(C.ay,C.aD,C.x,D.cYA,null,null)
D.cXX=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.T8=x([C.fz,C.az],y.O)
D.Tq=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nm=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAp=x([C.n2,C.az],y.O)
D.ew_={iceServers:0}
D.aNE={urls:0}
D.dN4=new A.bn(D.aNE,["stun:stun.l.google.com:19302"],y.o)
D.dN3=new A.bn(D.aNE,["stun:stun1.l.google.com:19302"],y.o)
D.dfv=x([D.dN4,D.dN3],A.as("N<a9<n,n>>"))
D.dMa=new A.bn(D.ew_,[D.dfv],A.as("bn<n,@>"))
D.K3=new B.OE(0,"lanDirect")
D.UN=new B.OE(1,"cloudStash")
D.e_2=new B.OE(2,"inlineInstant")
D.UO=new B.OE(3,"webrtcLink")
D.AX=new B.OE(4,"videoCloud")
D.ha5=new A.C("Receive file",null,C.nx,null,null,null,null,null,null,null,null,null)
D.cNv=x([E.atL,C.aa,D.ha5],y.p)
D.fo_=new A.c1(C.aK,C.bb,C.h,C.l,null,C.p,null,0,D.cNv,null)
D.eDs=new A.D(C.cq,D.fo_,null)
D.fMh=new A.F(!0,C.c,null,null,null,null,null,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.Js,null,null,null)
D.fWG=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fMh,null,C.K,null,null,null,null,null,null,null)
D.eCC=new A.D(C.zw,D.fWG,null)
D.bg_=new A.cm(C.z,null,null,D.eCC,null)
D.eJK=new A.cP(0,null,0,28,null,null,D.bg_,null)
D.eK3=new B.abj(0,"RTCDataChannelConnecting")
D.aT8=new B.abj(1,"RTCDataChannelOpen")
D.aT9=new B.abj(3,"RTCDataChannelClosed")
D.eK4=new B.G8(0,"RTCIceConnectionStateNew")
D.eK5=new B.G8(1,"RTCIceConnectionStateChecking")
D.eK6=new B.G8(2,"RTCIceConnectionStateCompleted")
D.eK7=new B.G8(3,"RTCIceConnectionStateConnected")
D.eK8=new B.G8(4,"RTCIceConnectionStateCount")
D.eK9=new B.G8(5,"RTCIceConnectionStateFailed")
D.eKa=new B.G8(6,"RTCIceConnectionStateDisconnected")
D.aTa=new B.G8(7,"RTCIceConnectionStateClosed")
D.aTb=new B.Z_(0,"RTCIceGatheringStateNew")
D.eKb=new B.Z_(1,"RTCIceGatheringStateGathering")
D.aaS=new B.Z_(2,"RTCIceGatheringStateComplete")
D.aaT=new B.PL(0,"RTCPeerConnectionStateClosed")
D.aTc=new B.PL(1,"RTCPeerConnectionStateFailed")
D.aTd=new B.PL(2,"RTCPeerConnectionStateDisconnected")
D.aTe=new B.PL(3,"RTCPeerConnectionStateNew")
D.aTf=new B.PL(4,"RTCPeerConnectionStateConnecting")
D.aTg=new B.PL(5,"RTCPeerConnectionStateConnected")
D.eKc=new B.PM(0,"RTCSignalingStateStable")
D.eKd=new B.PM(1,"RTCSignalingStateHaveLocalOffer")
D.eKe=new B.PM(2,"RTCSignalingStateHaveRemoteOffer")
D.eKf=new B.PM(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eKg=new B.PM(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTh=new B.PM(5,"RTCSignalingStateClosed")
D.ft9=new A.av(160,48)
D.bhf=new A.fr(2,null,null,null,null,C.az,null,null,null,null)
D.fuH=new A.a5(16,16,D.bhf,null)
D.h__=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fwa=new A.b2(D.h__,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6J=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fwe=new A.b2(D.h6J,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hfJ=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fwl=new A.b2(D.hfJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZz=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fwL=new A.b2(D.fZz,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haX=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWs=new A.b2(D.haX,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hcq=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new A.b2(D.hcq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hhd=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxv=new A.b2(D.hhd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hf8=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxA=new A.b2(D.hf8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgo=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fyn=new A.b2(D.hgo,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fY9=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fyV=new A.b2(D.fY9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8E=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fzf=new A.b2(D.h8E,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1k=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new A.b2(D.h1k,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hhi=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fzQ=new A.b2(D.hhi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYp=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzW=new A.b2(D.fYp,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fX2=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fAa=new A.b2(D.fX2,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTH=new A.C("NGMY DOC SHARE",null,C.aXS,null,null,null,null,null,null,null,null,null)
D.fV8=new A.C("Show this to sender",null,C.iV,null,null,null,null,null,null,null,null,null)
D.fWb=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h05=new A.C("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h0t=new A.C("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h1v=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h22=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4W=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h7M=new A.C("Send to their Doc Share",null,C.mM,null,null,null,null,null,null,null,null,null)
D.h85=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8q=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h91=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h98=new A.C("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h9x=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fi,null,null,null,null,null,null,null,null,null)
D.hcW=new A.C("Share files & videos\nwith a scan.",null,C.aXV,null,null,null,null,null,null,null,null,null)
D.hdf=new A.C("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hL0=new B.a_V(null)
D.aej=new B.ae9(0,"docShare")
D.aek=new B.ae9(1,"gate")
D.XR=new B.ae9(2,"gateNoIndividual")})();(function staticFields(){$.aQS=null
$.fwc=function(){var x=y.N
return A.S(x,x)}()
$.Hl=A.S(y.N,y.D)
$.aig=A.S(y.N,A.as("m8"))
$.St=A.S(y.N,y.D)
$.fwT=A.S(y.N,A.as("adR"))
$.cgB=A.S(y.S,A.as("bzR"))
$.hzP=1
$.ipK=null
$.ipJ=null
$.igP=null
$.ho2=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iJm","hSP",()=>new B.cuL())
x($,"iHg","hsh",()=>C.a.q(A.bx(A.bx(A.bx(A.HQ(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["p40t2Am2aCnCjDQhSiwH7e4wUm0="]=a.current})($__dart_deferred_initializers__);