((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cuV:function cuV(){},
iaL(d){var x=null,w=new B.b7Q(d,D.eND,new A.q4(x,x,y.c6),new A.q4(x,x,y.B))
w.bE2(d)
return w},
b7Q:function b7Q(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cuQ:function cuQ(d){this.a=d},
cuR:function cuR(d){this.a=d},
cuS:function cuS(d){this.a=d},
cuP:function cuP(d){this.a=d},
cuT:function cuT(d){this.a=d},
iaM(d,e){var x=y.N
x=new B.b7R(d,e,A.S(x,y.e),A.S(x,y.z))
x.bE3(d,e)
return x},
b7R:function b7R(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cuW:function cuW(d){this.a=d},
cuX:function cuX(d){this.a=d},
cuY:function cuY(d){this.a=d},
cuZ:function cuZ(d){this.a=d},
cv_:function cv_(d){this.a=d},
cv0:function cv0(d){this.a=d},
cv1:function cv1(d){this.a=d},
cv2:function cv2(d){this.a=d},
ho0(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bd("IndexedDB not available"))
return C.xA.He(x,"ngmy_doc_share_v1",new B.fF_(),1)},
ihB(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eA(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.vX(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cJ.aK(d)
return x}catch(w){return v}return v},
SL(d,e){return B.ixq(d,e)},
ixq(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQY
x=7
return A.b(o==null?$.aQY=B.ho0():o,$async$SL)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mz(s,"blobs","readwrite")
C.iT.mj(J.my(q,"blobs"),r,d)
x=8
return A.b(J.oQ(q),$async$SL)
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
return A.i($async$SL,w)},
SK(d){return B.ixp(d)},
ixp(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQY
x=7
return A.b(o==null?$.aQY=B.ho0():o,$async$SK)
case 7:s=f
r=J.mz(s,"blobs","readonly")
x=8
return A.b(C.iT.xX(J.my(r,"blobs"),d),$async$SK)
case 8:q=f
x=9
return A.b(J.oQ(r),$async$SK)
case 9:o=B.ihB(q)
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
return A.i($async$SK,w)},
aj0(d){return B.ixo(d)},
ixo(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aj0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQY
x=7
return A.b(p==null?$.aQY=B.ho0():p,$async$aj0)
case 7:s=f
r=J.mz(s,"blobs","readwrite")
C.iT.GK(J.my(r,"blobs"),d)
x=8
return A.b(J.oQ(r),$async$aj0)
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
return A.i($async$aj0,w)},
fF_:function fF_(){},
ik7(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsS(w,v))}return u},
hQe(d,e){var x,w={},v=A.aZM("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h4M(w,v,e)
C.xC.wY(v,"change",new B.h4O(w,v,!1))
C.xC.wY(v,"cancel",new B.h4N(w))
$.eX.mJ()
v.click()
A.bN(C.amT,new B.h4L(w),y.H)},
h4M:function h4M(d,e,f){this.a=d
this.b=e
this.c=f},
h4O:function h4O(d,e,f){this.a=d
this.b=e
this.c=f},
h4N:function h4N(d){this.a=d},
h4L:function h4L(d){this.a=d},
E0(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV6()?3:4
break
case 3:x=5
return A.b(B.hKI(e,d,s,!0,!1,f,g,h,!1,i),$async$E0)
case 5:x=1
break
case 4:x=6
return A.b(B.Sm(d,s,f,g,h,i),$async$E0)
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
return A.b(B.JA(s,d),$async$E0)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fAh(s,d),$async$E0)
case 14:x=12
return A.b(r.hKI(q,p,o,n,m,l,k,j,a1,i),$async$E0)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).c9(A.e6(new B.h50(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).c9(A.e6(new B.h51(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E0,w)},
Sm(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Sm=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2x(e),$async$Sm)
case 3:u=k
x=4
return A.b(B.arO(d,e,!1),$async$Sm)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JA(e,d),$async$Sm)
case 7:if(k){v=D.ael
x=1
break}x=8
return A.b(B.WI(e),$async$Sm)
case 8:v=t?D.XT:D.aem
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2v(d,e)){v=D.ael
x=1
break}x=11
return A.b(B.WI(e),$async$Sm)
case 11:v=t?D.XT:D.aem
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hiJ(d,e)){v=D.ael
x=1
break}x=14
return A.b(B.WI(e),$async$Sm)
case 14:v=D.XT
x=1
break
case 13:v=t?D.XT:D.aem
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sm,w)},
fAh(d,e){var x=0,w=A.j(y.y),v
var $async$fAh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2v(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2x(d),$async$fAh)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAh,w)},
hKI(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).c9(A.e6(new B.fHG(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hFe(d,e,f,g,h,i,j){return new B.a02(e,j,d,g,h,i,f,null)},
fJC(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fJC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bV(C.L,null,new B.fJF(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fJC)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJC,w)},
fK6(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fK6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bV(C.L,null,new B.fK8(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fK6)
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
return A.i($async$fK6,w)},
hod(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fXk(d,e){var x=0,w=A.j(y.H),v
var $async$fXk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WI(e),$async$fXk)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).e4()
case 1:return A.h(v,w)}})
return A.i($async$fXk,w)},
h50:function h50(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h51:function h51(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aee:function aee(d,e){this.a=d
this.b=e},
fHG:function fHG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a02:function a02(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCd:function aCd(){this.c=this.a=this.d=null},
dfP:function dfP(d,e){this.a=d
this.b=e},
dfM:function dfM(d){this.a=d},
dfO:function dfO(d){this.a=d},
dfN:function dfN(d){this.a=d},
dfR:function dfR(){},
dfQ:function dfQ(d){this.a=d},
aeI:function aeI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aET:function aET(d,e){this.a=d
this.b=e},
aI6:function aI6(d,e,f){this.a=d
this.b=e
this.c=f},
fJF:function fJF(d,e,f){this.a=d
this.b=e
this.c=f},
fJD:function fJD(d){this.a=d},
fJE:function fJE(d,e,f){this.a=d
this.b=e
this.c=f},
fK8:function fK8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fK7:function fK7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgj(d,e,f,g,h){return B.i5u(d,e,f,g,h)},
i5u(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cgj=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a2(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dP(d,new B.cgk(s,e,h,g,f,q),y.g),y.l),$async$cgj)
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
return A.i($async$cgj,w)},
b2s(d,e,f,g,h){return B.i5v(d,e,f,g,h)},
i5v(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2s=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axk("GET",d)
o=A.bIN()
if(o==null)o=new A.Ic(A.a([],y.W))
x=7
return A.b(o.fc(0,s).d7(0,C.Hv),$async$b2s)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dj(),$async$b2s)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cw(q,h,o,e,f,"Received via QR")
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
return A.i($async$b2s,w)},
b2r(d){return B.i5s(d)},
i5s(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w8(d,null).d7(0,C.oQ),$async$b2r)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.m1(A.lZ(p.e)).cE(0,p.w),null)
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
return A.i($async$b2r,w)},
cgi(d){return B.i5t(d)},
i5t(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cgi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w8(d,null).d7(0,C.r4),$async$cgi)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m1(A.lZ(q.e)).cE(0,q.w)
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
return A.i($async$cgi,w)},
cgk:function cgk(d,e,f,g,h,i){var _=this
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
Jy(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i5A(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jy(C.a.aV(t,u.length))}return null},
i5B(d){var x=B.Jy(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i5w(){var x,w=$.oM(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8L(d){return B.i5x(d)},
i5x(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.fb(d,null,!1,C.bN),$async$a8L)
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
return A.i($async$a8L,w)},
a8M(d,e){return B.i5y(d,e)},
i5y(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8M=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i_(d,e,!1,!1,C.cX,null),$async$a8M)
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
return A.i($async$a8M,w)},
Cv(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cv)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jy(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8N(r),$async$Cv)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8L("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cv)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jy(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cv)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i5w()
x=14
return A.b(B.a8N(m),$async$Cv)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8M("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cv)
case 15:k=f
x=16
return A.b(B.a8M("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cv)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cv)
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
return A.i($async$Cv,w)},
a8N(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jy(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8L("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8N)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8N,w)},
a8O(d,e,f,g){return B.i5C(d,e,f,g)},
i5C(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8O=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a2(d)
if(g.gar(d)){v=!1
x=1
break}r=B.Jy(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8N(r),$async$a8O)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.cgq())>1048576||g.aR(d,new B.cgr())){v=B.FD(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a8Z("myCode",d,a0),$async$a8O)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cx(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FD(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2A(u,g.gJ(d),a0),$async$a8O)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oM().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cgs(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2t(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8O)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8O,w)},
FD(d,e,f,g,h){return B.i5z(d,e,f,g,h)},
i5z(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FD=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FD)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cJ(a6)
k=l.cF(a6,0,new B.cgm())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oM().av(9999)
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
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JC(a9,q)
a0=new A.Ls(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FD)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.f5().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nO(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acq(a1.a,a4,"media",a1.d,a2).xU(m,n,new A.ET(!0,q.c)),$async$FD)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FD)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTH(r),$async$FD)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cgn(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2t(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FD)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTH(r),$async$FD)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FD,w)},
b2t(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8L(t),$async$b2t)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cgl(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8M(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2t,w)},
OG(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OG=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8L("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OG)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cx(s)){v=0
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
return A.b(B.b2u(k,a0),$async$OG)
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
return A.b(B.b2z(h),$async$OG)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WP(g,a0),$async$OG)
case 10:f=a3
if(f!=null&&J.cK(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cgo(),q),n)
d=A.B(new A.X(r,new B.cgp(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cV(d,0,A.dz(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8M("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OG)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OG,w)},
b2u(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cx(h)){v=0
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
break}i=B.iBB(k,j)
C.d.u(s,i)
x=5
return A.b(B.DZ(l,m,"Received via My Code",t,e,i),$async$b2u)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTH(s),$async$b2u)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2u,w)},
cgq:function cgq(){},
cgr:function cgr(){},
cgs:function cgs(){},
cgm:function cgm(){},
cgn:function cgn(){},
cgl:function cgl(){},
cgo:function cgo(){},
cgp:function cgp(){},
h4Y(d,e){var x=0,w=A.j(y.H)
var $async$h4Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).c9(A.e6(new B.h4Z(e),!1,null,y.H)),$async$h4Y)
case 2:return A.h(null,w)}})
return A.i($async$h4Y,w)},
bIg(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bIg=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cx(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).c9(A.e6(new B.h5_(g,e,f),!1,null,y.y)),$async$bIg)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bIg,w)},
h4Z:function h4Z(d){this.a=d},
h5_:function h5_(d,e,f){this.a=d
this.b=e
this.c=f},
WF:function WF(d,e){this.c=d
this.a=e},
aGg:function aGg(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e2p:function e2p(d,e){this.a=d
this.b=e},
WJ:function WJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGj:function aGj(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e3y:function e3y(d){this.a=d},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d){this.a=d},
e3x:function e3x(d,e){this.a=d
this.b=e},
e3B:function e3B(d){this.a=d},
e3C:function e3C(d){this.a=d},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3F:function e3F(d,e){this.a=d
this.b=e},
e3G:function e3G(d){this.a=d},
e3J:function e3J(){},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d,e){this.a=d
this.b=e},
bmX:function bmX(){},
WG:function WG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGh:function aGh(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e2q:function e2q(d){this.a=d},
e2r:function e2r(d){this.a=d},
hiK(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i5E(d){var x=d.l2
if(x>=0)return x
return 4.99},
i5D(d){var x=d.lL,w=y.N
w=x.iX(x,new B.cgu(),w,w)
return w},
hA9(d){var x=d.kE,w=y.N
w=x.iX(x,new B.cgv(),w,w)
return w},
b2x(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2x)
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
return A.i($async$b2x,w)},
a8Q(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8Q)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a8Q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8Q,w)},
WI(d){var x=0,w=A.j(y.H),v,u
var $async$WI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WI)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WI,w)},
hiJ(d,e){var x,w,v
if(B.i5E(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i5D(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.c8(new A.W(Date.now(),0,!1))},
b2v(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hA9(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.c8(new A.W(Date.now(),0,!1))},
hAa(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hA9(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.c8(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.dv(f,0,0,0,0,0).a).aa().ag())
d.kE=w},
arP(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$arP)
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
return A.i($async$arP,w)},
arQ(d){var x=0,w=A.j(y.H),v,u,t
var $async$arQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arP(d),$async$arQ)
case 3:u=f
x=5
return A.b(A.aB(),$async$arQ)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$arQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arQ,w)},
arO(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hiK(d)
if(u<=0){v=!1
x=1
break}if(B.hiJ(d,e)){v=!1
x=1
break}x=3
return A.b(B.arP(e),$async$arO)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arO,w)},
b2w(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JA(e,d),$async$b2w)
case 3:if(g){v=-1
x=1
break}u=B.hiK(d)
if(u<=0){v=-1
x=1
break}if(B.hiJ(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arP(e),$async$b2w)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2w,w)},
cgx(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JA(e,d),$async$cgx)
case 3:if(h){v=!1
x=1
break}v=B.arO(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgx,w)},
cgw(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgw=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgx(d,u,i.gV6()),$async$cgw)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgw,w)},
a8P(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8P=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gV6()){v=!0
x=1
break}if(B.b2v(d,u)){v=!0
x=1
break}x=5
return A.b(A.lU(u,C.Va),$async$a8P)
case 5:x=k?3:4
break
case 3:B.hAa(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8P)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lt(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Va,"Doc Share for Organizations"),$async$a8P)
case 7:if(!k){v=!1
x=1
break}B.hAa(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8P)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8P,w)},
cgu:function cgu(){},
cgv:function cgv(){},
h5Y(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h5Y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h5Y)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fwv.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i1([r],e.c))
s.toString
$.fwv.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h5Y,w)},
iDO(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fwv.br($.fwv,new B.h6_(d))},
h6_:function h6_(d){this.a=d},
fya(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fya=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i1([d],f))
s.toString
u=A.ni(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jA,null,y.H),$async$fya)
case 3:C.BV.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fya,w)},
ahX(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fxb.n(0,d,new B.adW(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ahX)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahX)
case 2:return A.h(null,w)}})
return A.i($async$ahX,w)},
ahR(d){return B.im1(d)},
im1(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fxb.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ahR)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cx(s)){v=null
x=1
break}o=J.b8(s,new B.fBY(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adW(r)
$.fxb.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahR,w)},
Sc(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Sc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.Hn.n(0,d,u)
x=3
return A.b(B.SL(d,u),$async$Sc)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sc,w)},
aRi(d){return B.im_(d)},
im_(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hn.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SK(d),$async$aRi)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hn.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRi)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cJ.aK(r)
x=!J.cx(q)?9:10
break
case 9:B.Sc(d,q)
x=11
return A.b(J.fS(s,d),$async$aRi)
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
return A.i($async$aRi,w)},
ii2(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cd(J.eA(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cd(A.vX(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
return A.f9(null,y.K)},
a3y(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bm($.bG,y.cf)
t=new A.c9(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fHS(r,t),!1,s)
A.fI(r,"error",new B.fHT(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.P_,new B.fHU())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3y,w)},
aRD(d,e,f){return B.ioo(d,e,f)},
ioo(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRD=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3y(i),$async$aRD)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SL(o,p),$async$aRD)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahX(k,j,s),$async$aRD)
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
return A.i($async$aRD,w)},
aRC(d,e,f){return B.ion(d,e,f)},
ion(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRC=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRD(d,e,f),$async$aRC)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3y(f),$async$aRC)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hn.n(0,s,r)
$.Sw.n(0,s,r)
x=11
return A.b(B.Sc(s,r),$async$aRC)
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
return A.i($async$aRC,w)},
Cw(d,e,f,g,h,i){return B.i5N(d,e,f,g,h,i)},
i5N(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cw=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cV.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jS(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b2D(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Sc(s,d),$async$Cw)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$Cw)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$Cw)
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
return A.b(B.Bq(e),$async$Cw)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.Hx(e,j),$async$Cw)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cw,w)},
WK(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bq(d),$async$WK)
case 3:t=a1
s=e.length,r=J.cJ(t),q=0
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
k=B.hAc(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jS(m,n,k,l,j,"From folder",null,B.b2D(),null)
$.ail.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3y(o),$async$WK)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hn.n(0,h,g)
$.Sw.n(0,h,g)
B.Sc(h,g)
x=9
break
case 10:x=11
return A.b(B.aRC(d,m,o),$async$WK)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hx(d,t),$async$WK)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WK,w)},
hiO(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hiO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hAc(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JB(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.Cw(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hiO,w)},
JB(d,e,f,g,h,i){return B.i5M(d,e,f,g,h,i)},
i5M(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JB=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ls(A.dz(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JB)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cx(m)){x=6
break}J.hb(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.Tl(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kx(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SL(k,l),$async$JB)
case 11:J.c8(q,k);++p
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
return A.b(j.a1(0),$async$JB)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SL(k,new Uint8Array(A.cd(n))),$async$JB)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahX(r,q,g),$async$JB)
case 16:f=new B.jS(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b2D(),null)
x=17
return A.b(B.Bq(d),$async$JB)
case 17:e=a6
J.c8(e,f)
x=18
return A.b(B.Hx(d,e),$async$JB)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JB,w)},
WM(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WM=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ail.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3y(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahR(s),$async$WM)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SK(u[o]),$async$WM)
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
v=A.vX(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Sw.h(0,s)
if(i==null)i=$.Hn.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t6(d,e),$async$WM)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.Sw.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vX(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WM,w)},
hAc(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t6(d,e){return B.i5O(d,e)},
i5O(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t6=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Sw.h(0,f)
if(e==null)e=$.Hn.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.ail.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3y(s),$async$t6)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hn.n(0,f,r)
$.Sw.n(0,f,r)
B.Sc(f,r)
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
return A.b(B.ahR(f),$async$t6)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adS(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SK(g[l]),$async$t6)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8j()
if(!C.aI.gar(r)){$.Hn.n(0,f,r)
$.Sw.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRi(f),$async$t6)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.Sw.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WM(a0,a1,0,g),$async$t6)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.Hn.n(0,f,h)
$.Sw.n(0,f,h)
B.Sc(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t6,w)},
i5R(d){var x,w,v=$.ail.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i5S(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i1([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i5P(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arW(d,e,f,g,h){return B.i5Q(d,e,f,g,h)},
i5Q(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arW=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ail.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3y(s),$async$arW)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t6(g,e),$async$arW)
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
return A.b(n.iE(d).xU(h,r,new A.ET(!0,e.c)),$async$arW)
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
return A.i($async$arW,w)},
hAe(d,e,f,g,h){var x,w,v,u,t=$.hAd
$.hAd=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cgI.n(0,t,new B.bzX(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adS(u)))
return t},
hiP(d){var x=0,w=A.j(y.H)
var $async$hiP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hiP,w)},
JC(d,e){var $async$JC=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ail.h(0,h)
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
return A.qL(B.WM(d,e,p,o<q?o:q),$async$JC,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qL(A.GU(n),$async$JC,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qL(B.ahR("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JC,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qL(B.SK(h[l]),$async$JC,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qL(A.GU(k),$async$JC,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qL(B.t6(d,e),$async$JC,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qL(A.GU(A.vX(j,p,o<i?o:i)),$async$JC,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qL(null,0,w)
case 2:return A.qL(t.at(-1),1,w)}})
var x=0,w=A.hJo($async$JC,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hLs(w)},
b2F(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cgI.h(0,d)
if(t==null||J.cx(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6A(),$async$b2F)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2F,w)},
WL(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgI.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6A(),$async$WL)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahX(r.c,u,r.z),$async$WL)
case 4:t=new B.jS(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b2D(),null)
u=r.a
x=5
return A.b(B.Bq(u),$async$WL)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.Hx(u,s),$async$WL)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WL,w)},
a8W(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgI.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aj0(u[s]),$async$a8W)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a8W,w)},
cgK(d,e,f){var x=0,w=A.j(y.H)
var $async$cgK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bF3(d,e,f),$async$cgK)
case 2:return A.h(null,w)}})
return A.i($async$cgK,w)},
cgL(d,e,f){var x=0,w=A.j(y.H)
var $async$cgL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bF4(d,e,f),$async$cgL)
case 2:return A.h(null,w)}})
return A.i($async$cgL,w)},
FE(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bq(d),$async$FE)
case 2:p=g
J.ng(p,new B.cgJ(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hn.X(0,v)
$.ail.X(0,e)
x=3
return A.b(B.ahR(v),$async$FE)
case 3:u=g
$.fxb.X(0,v)
x=4
return A.b(A.aB(),$async$FE)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FE)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FE)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aj0(s[q]),$async$FE)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aj0(v),$async$FE)
case 13:x=14
return A.b(B.Hx(d,p),$async$FE)
case 14:return A.h(null,w)}})
return A.i($async$FE,w)},
b2E(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t6(d,e),$async$b2E)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fya(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2E,w)},
Bq(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bq)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fHV(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bq,w)},
Hx(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$Hx)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fMd(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$Hx)
case 3:return A.h(null,w)}})
return A.i($async$Hx,w)},
bF3(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bF3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bq(d),$async$bF3)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fG3(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHi(f))
x=4
return A.b(B.Hx(d,u),$async$bF3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bF3,w)},
bF4(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bF4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bq(d),$async$bF4)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fG4(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRV(f))
x=4
return A.b(B.Hx(d,u),$async$bF4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bF4,w)},
adW:function adW(d){this.a=d},
fBY:function fBY(){},
fHS:function fHS(d,e){this.a=d
this.b=e},
fHT:function fHT(d){this.a=d},
fHU:function fHU(){},
cgJ:function cgJ(d){this.a=d},
bzX:function bzX(d,e,f,g,h,i,j,k,l){var _=this
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
fHV:function fHV(){},
fMd:function fMd(){},
fG3:function fG3(d){this.a=d},
fG4:function fG4(d){this.a=d},
a8X(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cgO())?3:4
break
case 3:x=5
return A.b(B.b2G(d,e),$async$a8X)
case 5:u=g
if(u!=null){t=u.c
B.OI(d,u.b,e,t)}v=u
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
return A.b(B.b2B(s),$async$a8X)
case 10:case 9:if(g){v=new A.Rx(1,D.UO,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WN(d,e),$async$a8X)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WS(!0,!0,d,e),$async$a8X)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OI(d,D.AX,e,t)
v=new A.Rx(p,D.AX,t)
x=1
break}v=B.cgN(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8X,w)},
WN(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8Z(null,d,e),$async$WN)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cx(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2A(p,d.length,e),$async$WN)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cgL(e,C.d.gG(d).a,r.b),$async$WN)
case 7:case 6:q=r.a
x=8
return A.b(B.OI(d,D.UO,e,q),$async$WN)
case 8:v=new A.Rx(d.length,D.UO,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WN,w)},
WO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mQ(D.nm)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8Y(d,e),$async$WO)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cgG(s,d,e,t),$async$WO)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2B(t),$async$WO)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t6(e,d),$async$WO)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WN(A.a([d],y.r),e),$async$WO)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WO,w)},
WQ(){var x=0,w=A.j(y.H)
var $async$WQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hiI(),$async$WQ)
case 2:x=3
return A.b(B.aU2(),$async$WQ)
case 3:return A.h(null,w)}})
return A.i($async$WQ,w)},
a8Y(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2D()
x=3
return A.b(B.cgK(e,d.a,u),$async$a8Y)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Y,w)},
OI(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OI=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.UO&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8Y(p,f),$async$OI)
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
return A.b(B.cgF(o,p,u,f),$async$OI)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cgG(o,p,f,t),$async$OI)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cgE(o,u,p,f),$async$OI)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
b2G(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgM(e,d),$async$b2G)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WS(!1,!0,d,e),$async$b2G)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rx(u.a,D.AX,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2G,w)},
cgM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cgM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WM(d,s,0,1),$async$cgM)
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
return A.i($async$cgM,w)},
cgN(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cgN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8Z(null,d,e),$async$cgN)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hAb(u)
if(t.length>800){v=null
x=1
break}v=new A.Rx(d.length,D.e2B,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgN,w)},
arX(d,e,f){return B.i5V(d,e,f)},
i5V(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.da(g,"\ufeff"))g=J.nh(g,1)
x=B.hiN(g)?3:4
break
case 3:x=5
return A.b(B.cgH(g),$async$arX)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.da(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nh(g,13))
try{k=B.FF(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.da(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nh(g,13))
u=9
x=12
return A.b(B.b2z(q),$async$arX)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WP(p,a0)
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
case 11:case 7:if(J.da(g,"NGMYDOCSYNC0|"))try{n=B.hiM(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WP(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.da(g,"N2|")){v=B.JD(C.a.i(J.nh(g,3)),d,a0)
x=1
break}if(J.da(g,"NGMYDOCSYNC2|")){v=B.JD(C.a.i(J.nh(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JD(h,d,a0)
x=1
break}if(J.eD(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WP(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arX,w)},
JD(d,e,f){return B.i5T(d,e,f)},
i5T(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JD=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aw(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cI(A.v(s)+"/manifest.json",0,null)
q=A.cI(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2r(r),$async$JD)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2r(A.cI(s,0,null)),$async$JD)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cx(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cgj(o,r,a1,n,a2),$async$JD)
case 11:m=a4
x=J.cx(m)?12:13
break
case 12:x=14
return A.b(B.cgi(q),$async$JD)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WP(l,a2),$async$JD)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cx(m)?null:m
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
return A.i($async$JD,w)},
a8Z(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aQ(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t6(f,r),$async$a8Z)
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
return A.i($async$a8Z,w)},
WP(d,e){return B.i5U(d,e)},
i5U(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WP=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.Cw(i,a3,d,k,l,o),$async$WP)
case 9:h=a5
if(h!=null)J.c8(n,h)
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
return A.i($async$WP,w)},
OH:function OH(d,e){this.a=d
this.b=e},
cgO:function cgO(){},
a37(d){var x=A.Q(d).ax.a===C.I,w=x?D.ak5:D.ahz,v=x?D.alT:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.aj3:C.bn
return new A.aJm([w,s,v,u,t,x?C.fz:C.bU])},
hRi(d,e){var x=e?C.v.j(0.72):C.b6
return A.cg(null,x,!0,null,new B.haf(e),d,null,!0,!0,y.N)},
cgt(d,e,f,g,h,i,j,k,l){return new B.WH(e,l,d,f,k,j,g,h,i,null)},
a04(d,e,f,g,h,i,j){return new B.bhr(g,h,j,e,i,d,f,null)},
haf:function haf(d){this.a=d},
a01:function a01(d,e){this.c=d
this.a=e},
aCc:function aCc(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dfL:function dfL(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d){this.a=d},
bzz:function bzz(){},
WH:function WH(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGi:function aGi(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e3w:function e3w(d){this.a=d},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2V:function e2V(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e,f){this.a=d
this.b=e
this.c=f},
e2s:function e2s(d){this.a=d},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e,f){this.a=d
this.b=e
this.c=f},
e2y:function e2y(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3l:function e3l(d){this.a=d},
e2R:function e2R(d,e,f){this.a=d
this.b=e
this.c=f},
e2O:function e2O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2x:function e2x(d){this.a=d},
e2Z:function e2Z(d){this.a=d},
e2Y:function e2Y(){},
e2D:function e2D(d){this.a=d},
e3h:function e3h(d,e){this.a=d
this.b=e},
e3i:function e3i(d,e){this.a=d
this.b=e},
e3j:function e3j(d,e){this.a=d
this.b=e},
e2P:function e2P(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e3a:function e3a(d,e){this.a=d
this.b=e},
e36:function e36(d){this.a=d},
e35:function e35(d){this.a=d},
e37:function e37(){},
e38:function e38(){},
e39:function e39(d,e){this.a=d
this.b=e},
e3b:function e3b(){},
e3c:function e3c(d){this.a=d},
e34:function e34(d,e){this.a=d
this.b=e},
e3_:function e3_(d){this.a=d},
e30:function e30(d){this.a=d},
e31:function e31(d){this.a=d},
e32:function e32(d){this.a=d},
e33:function e33(d){this.a=d},
e2A:function e2A(){},
e2B:function e2B(d){this.a=d},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2v:function e2v(d,e,f){this.a=d
this.b=e
this.c=f},
e2S:function e2S(d){this.a=d},
e2T:function e2T(d,e,f){this.a=d
this.b=e
this.c=f},
e2M:function e2M(d,e){this.a=d
this.b=e},
e2I:function e2I(d){this.a=d},
e2F:function e2F(d,e,f){this.a=d
this.b=e
this.c=f},
e2J:function e2J(d){this.a=d},
e2K:function e2K(d){this.a=d},
e2L:function e2L(){},
e2N:function e2N(d,e){this.a=d
this.b=e},
e2G:function e2G(d){this.a=d},
e2E:function e2E(d,e,f){this.a=d
this.b=e
this.c=f},
e2H:function e2H(){},
e2X:function e2X(d){this.a=d},
e2W:function e2W(d,e){this.a=d
this.b=e},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3d:function e3d(d){this.a=d},
e3e:function e3e(d,e){this.a=d
this.b=e},
e3f:function e3f(d){this.a=d},
e3t:function e3t(d){this.a=d},
e3r:function e3r(d){this.a=d},
e3s:function e3s(d){this.a=d},
e3u:function e3u(){},
e3v:function e3v(d,e){this.a=d
this.b=e},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3o:function e3o(d,e,f){this.a=d
this.b=e
this.c=f},
e3m:function e3m(d,e,f){this.a=d
this.b=e
this.c=f},
e3p:function e3p(d,e){this.a=d
this.b=e},
e3q:function e3q(d,e){this.a=d
this.b=e},
aC9:function aC9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhq:function bhq(d,e,f){this.c=d
this.d=e
this.a=f},
dfH:function dfH(){},
dfI:function dfI(){},
aef:function aef(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dg4:function dg4(){},
dg3:function dg3(d){this.a=d},
a03:function a03(d,e,f){this.c=d
this.d=e
this.a=f},
aCe:function aCe(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dg0:function dg0(d){this.a=d},
dg1:function dg1(d,e,f){this.a=d
this.b=e
this.c=f},
dg2:function dg2(d,e){this.a=d
this.b=e},
dfZ:function dfZ(d,e){this.a=d
this.b=e},
dfX:function dfX(d){this.a=d},
dfV:function dfV(d){this.a=d},
dfS:function dfS(d){this.a=d},
dfY:function dfY(d){this.a=d},
dfU:function dfU(d){this.a=d},
dg_:function dg_(d){this.a=d},
dfW:function dfW(d){this.a=d},
dfT:function dfT(d){this.a=d},
a00:function a00(d,e,f){this.c=d
this.d=e
this.a=f},
aCb:function aCb(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dfE:function dfE(d){this.a=d},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfF:function dfF(d){this.a=d},
dfC:function dfC(d,e){this.a=d
this.b=e},
dfG:function dfG(d){this.a=d},
dfB:function dfB(d,e){this.a=d
this.b=e},
dfx:function dfx(d){this.a=d},
dfy:function dfy(d){this.a=d},
dfz:function dfz(d,e){this.a=d
this.b=e},
dfA:function dfA(d){this.a=d},
R5:function R5(d,e,f){this.c=d
this.d=e
this.a=f},
aCh:function aCh(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d){this.a=d},
dgj:function dgj(d){this.a=d},
dgk:function dgk(d){this.a=d},
dgl:function dgl(d,e){this.a=d
this.b=e},
dgm:function dgm(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgn:function dgn(d){this.a=d},
a05:function a05(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCf:function aCf(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dgd:function dgd(d,e){this.a=d
this.b=e},
dge:function dge(d,e){this.a=d
this.b=e},
dg5:function dg5(d,e,f){this.a=d
this.b=e
this.c=f},
dg6:function dg6(d){this.a=d},
dg7:function dg7(){},
dgc:function dgc(){},
dg8:function dg8(d,e){this.a=d
this.b=e},
dg9:function dg9(d,e){this.a=d
this.b=e},
dga:function dga(d,e){this.a=d
this.b=e},
dgb:function dgb(d,e){this.a=d
this.b=e},
aed:function aed(d,e){this.c=d
this.a=e},
dfw:function dfw(d){this.a=d},
a0_:function a0_(d){this.a=d},
aCa:function aCa(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a06:function a06(d,e){this.c=d
this.a=e},
aCg:function aCg(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dgg:function dgg(d){this.a=d},
dgf:function dgf(d){this.a=d},
bhr:function bhr(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i5W(){var x,w=$.oM(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
OJ(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OJ)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OJ)
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
return A.i($async$OJ,w)},
a9_(d){return B.i5X(d)},
i5X(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9_)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i_("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$a9_)
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
return A.i($async$a9_,w)},
WR(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OJ(),$async$WR)
case 3:s=g
r=J.a2(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9_(s),$async$WR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WR,w)},
WS(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$WS)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.cgQ(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i5W()
t=A.U(u).k("O<1,a9<n,aE>>")
r=A.B(new A.O(u,new B.cgR(s),t),t.k("aj.E"))
x=6
return A.b(B.OJ(),$async$WS)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9_(q),$async$WS)
case 7:x=8
return A.b(B.a90(r,u,g,s),$async$WS)
case 8:v=new A.btn(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WS,w)},
arY(d){var x=0,w=A.j(y.y),v,u,t
var $async$arY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OJ(),$async$arY)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arY,w)},
cgS(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cgS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OJ(),$async$cgS)
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
return A.i($async$cgS,w)},
a90(d,e,f,g){return B.i5Y(d,e,f,g)},
i5Y(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a90=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arW("media",r,new B.cgP(s,e,g),f,q),$async$a90)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WR(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a90)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WR(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a90)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WR(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a90)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a90,w)},
FF(d,e,f){return B.i5Z(d,e,f)},
i5Z(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FF=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FF)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arY(b3),$async$FF)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.j3,null,g),$async$FF)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arY(b3),$async$FF)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OJ(),$async$FF)
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
if(!y.j.b(a4)||J.cx(a4)){v=null
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
b0=A.nO(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acq(a8.a,b0,"media",a8.d,a9).DE(m)
k=A.cI(l,0,null)
x=17
return A.b(B.b2s(k,n,o,s,b7),$async$FF)
case 17:j=c0
if(j!=null){J.c8(p,j);++q
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
a8=A.nO(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acq(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FF)
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
a0=A.dE(A.a0(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9_(e),$async$FF)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FF,w)},
cgQ:function cgQ(){},
cgR:function cgR(d){this.a=d},
cgP:function cgP(d,e,f){this.a=d
this.b=e
this.c=f},
aU2(){var x=0,w=A.j(y.H),v,u
var $async$aU2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ihl=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aU2)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aU2)
case 3:u=$.hop
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aU2)
case 4:$.hop=$.iqf=$.iqg=null
return A.h(null,w)}})
return A.i($async$aU2,w)},
fLP(d){var x=0,w=A.j(y.H),v,u
var $async$fLP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaU){x=1
break}u=new A.bm($.bG,y.d4)
d.c=new B.fLQ(new A.c9(u,y.aY))
x=3
return A.b(u.ic(0,C.hb,new B.fLR()),$async$fLP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fLP,w)},
iqd(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i5G(x):x},
hou(d){var x=0,w=A.j(y.T),v,u,t
var $async$hou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.as_(u)
x=1
break}v=B.hiM(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hou,w)},
hot(d){var x=0,w=A.j(y.T),v,u,t
var $async$hot=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.as0(u)
x=1
break}v=B.hiM(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hot,w)},
h5H(d){var x=0,w=A.j(y.T),v
var $async$h5H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.as0(d),$async$h5H)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h5H,w)},
bG1(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bG1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hot(d),$async$bG1)
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
return A.i($async$bG1,w)},
fyZ(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fyZ=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WL(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cw(d.a8j(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyZ,w)},
Hy(d,e,f){return B.isA(d,e,f)},
isA(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hy=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hou(a1),$async$Hy)
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
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hTj().aHA(D.dMx,null),$async$Hy)
case 4:l=d.hop=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adS(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bm($.bG,y.b1)
l.y=new B.fMq(f,k,new B.fMr(f,a2,k,j,a0,p),a2,j,a0,p,new A.c9(t,y.ch))
x=5
return A.b(l.a9F(0,new B.Z4(r,"offer")),$async$Hy)
case 5:d=l
x=7
return A.b(l.anl(0),$async$Hy)
case 7:x=6
return A.b(d.a9x(0,a4),$async$Hy)
case 6:x=8
return A.b(B.fLP(l),$async$Hy)
case 8:x=9
return A.b(l.arJ(),$async$Hy)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iqd(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.as1(m,h),$async$Hy)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hAb(h)
case 11:v=new A.bsC(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hy,w)},
fLQ:function fLQ(d){this.a=d},
fLR:function fLR(){},
fMr:function fMr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMq:function fMq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fMp:function fMp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iuF(d){switch(d){case"new":return D.eNE
case"checking":return D.eNF
case"connected":return D.eNH
case"completed":return D.eNG
case"failed":return D.eNJ
case"disconnected":return D.eNK
case"closed":return D.aTc
case"count":return D.eNI}return D.aTc},
iuG(d){switch(d){case"new":return D.aTd
case"gathering":return D.eNL
case"complete":return D.aaU}return D.aTd},
iFm(d){switch(d){case"stable":return D.eNM
case"have-local-offer":return D.eNN
case"have-local-pranswer":return D.eNP
case"have-remote-offer":return D.eNO
case"have-remote-pranswer":return D.eNQ
case"closed":return D.aTj}return D.aTj},
iDv(d){switch(d){case"new":return D.aTg
case"connecting":return D.aTh
case"connected":return D.aTi
case"closed":return D.aaV
case"disconnected":return D.aTf
case"failed":return D.aTe}return D.aaV},
abn:function abn(d,e){this.a=d
this.b=e},
PP:function PP(d,e){this.a=d
this.b=e},
Z3:function Z3(d,e){this.a=d
this.b=e},
PO:function PO(d,e){this.a=d
this.b=e},
G9:function G9(d,e){this.a=d
this.b=e},
cuU:function cuU(){},
hkC(d){var x=new B.G8()
x.a=d
x.b=!0
return x},
G8:function G8(){this.b=this.a=$},
abm:function abm(){},
aww:function aww(){},
Z4:function Z4(d,e){this.a=d
this.b=e},
hiI(){var x=0,w=A.j(y.H)
var $async$hiI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hiI,w)},
hiL(d,e,f){var x=0,w=A.j(y.T),v
var $async$hiL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mQ(D.nm))){v=null
x=1
break}v=B.h5Y(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hiL,w)},
hAb(d){var x,w=F.ah_.a6j(C.e3.aK(d),null)
if(w.length===0){x=C.e3.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i5F(d){var x,w,v=C.cJ.aK(d)
try{x=C.cg.cE(0,F.agZ.bhE(v,!1))
return x}catch(w){x=C.cg.cE(0,v)
return x}},
hiM(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i5F(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cg.cE(0,C.cJ.aK(x))
return v}catch(u){return x}}return null},
i5G(d){var x,w,v,u,t,s=A.a([],y.s)
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
i5H(){var x,w=$.oM(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2y(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2y)
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
return A.i($async$b2y,w)},
cgy(d,e){return B.i5I(d,e)},
i5I(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgy=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i_("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cX,null),$async$cgy)
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
return A.i($async$cgy,w)},
b2B(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2y(d),$async$b2B)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2B,w)},
b2A(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2A=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i5H()
r=C.a.i(f)
t=C.e3.aK(s)
x=3
return A.b(B.cgy(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b2A)
case 3:if(!h){v=null
x=1
break}v=new A.a27("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2A,w)},
b2z(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2y(o),$async$b2z)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cE(0,C.cJ.aK(u))
if(J.jg(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2z,w)},
cgz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(O.bH0("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cX),$async$cgz)
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
return A.i($async$cgz,w)},
b2C(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jz(),$async$b2C)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2C,w)},
arT(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arT)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2C(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arT,w)},
arR(d,e){var x=0,w=A.j(y.H)
var $async$arR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arR)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arR)
case 2:return A.h(null,w)}})
return A.i($async$arR,w)},
a8S(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8S=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a8S)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jz(),$async$a8S)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.du(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8R(s),$async$a8S)
case 5:x=6
return A.b(B.arR(f,u),$async$a8S)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8S,w)},
a8T(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8T=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a8T)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jz(),$async$a8T)
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
return A.b(B.arR(g,q),$async$a8T)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8R(u),$async$a8T)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8T,w)},
a8U(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8U=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a8U)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jz(),$async$a8U)
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
s=B.b2v(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a8U)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8U)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8U,w)},
cgA(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgA)
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
return A.i($async$cgA,w)},
JA(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgA(d),$async$JA)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2C(t),$async$JA)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arS(d),$async$JA)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2v(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arS(d),$async$JA)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JA,w)},
arS(d){var x=0,w=A.j(y.H)
var $async$arS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arS)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arS)
case 2:return A.h(null,w)}})
return A.i($async$arS,w)},
b2D(){var x,w=$.oM(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a8V(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hiN(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgD(d){return B.i5K(d)},
i5K(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8V(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgD)
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
return A.i($async$cgD,w)},
arV(d,e){return B.i5L(d,e)},
i5L(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8V(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i_("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cX,null),$async$arV)
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
return A.i($async$arV,w)},
cgF(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgF=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8V(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arV(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgF)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgF,w)},
cgE(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgE=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8V(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arV(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgE,w)},
cgG(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cgG=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8V(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arV(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgG,w)},
cgH(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cgH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hiN(d)){v=null
x=1
break}x=3
return A.b(B.cgD(d),$async$cgH)
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
return A.i($async$cgH,w)},
a91(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a91=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a91)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a91)
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
return A.i($async$a91,w)},
arZ(d){return B.i6_(d)},
i6_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$arZ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i_("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$arZ)
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
return A.i($async$arZ,w)},
as_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$as_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.da(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$as_)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a91(),$async$as_)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cE(0,C.cJ.aK(q))
if(J.jg(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.arZ(s),$async$as_)
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
return A.i($async$as_,w)},
as1(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$as1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$as1)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a91(),$async$as1)
case 4:u=g
t=J.a2(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e3.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arZ(u),$async$as1)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as1,w)},
as0(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$as0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$as0)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a91(),$async$as0)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cE(0,C.cJ.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$as0,w)},
aqS(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.ot)){v=null
x=1
break}x=3
return A.b(p.lw(e),$async$aqS)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.hp),$async$aqS)
case 7:q=g
o=q
o=o==null?null:J.eV(J.uW(o))
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
return A.i($async$aqS,w)},
iBB(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.v(w),5,"0")
return v},
h3Q(d){return B.iBD(d)},
iBD(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h3Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").M_(d,3600),$async$h3Q)
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
return A.i($async$h3Q,w)},
DZ(d,e,f,g,h,i){var x=null
return B.iBA(d,e,f,g,h,i)},
iBA(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DZ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hAe(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hiP(r),$async$DZ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h3Q(o),$async$DZ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8W(r),$async$DZ)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWV)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ic(A.a([],g))
x=15
return A.b(d.fc(0,A.axk("GET",A.cI(n,0,null))).d7(0,C.Hv),$async$DZ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8W(r),$async$DZ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ls(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DZ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2F(r,k),$async$DZ)
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
case 10:i=B.WL(r)
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
return A.b(B.a8W(r),$async$DZ)
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
aTH(d){return B.iBC(d)},
iBC(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTH)
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
return A.i($async$aTH,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[68]
I=c[100]
P=c[314]
Q=c[54]
F=c[307]
K=c[186]
G=c[70]
R=c[272]
S=c[273]
E=c[263]
H=c[102]
T=c[238]
U=c[73]
V=c[187]
W=c[270]
L=c[252]
X=c[299]
M=c[315]
B=a.updateHolder(c[27],B)
D=c[313]
Y=c[237]
N=c[246]
Z=c[79]
A_=c[87]
B.cuV.prototype={
aHA(d,e){return this.cTp(d,e)},
cTp(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kA(A.cz(t)))
t=J.k(u)
v=B.iaM(C.cS.gcp().aK(new A.dj(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHA,w)}}
B.b7Q.prototype={
bE2(d){var x=this,w=x.w
w.onclose=A.hF(new B.cuQ(x))
w.onopen=A.hF(new B.cuR(x))
w.onmessage=A.hF(new B.cuS(x))
w.onbufferedamountlow=A.hF(new B.cuT(x))},
gd4(d){return this.x},
ajC(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G8()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hkC(J.eV(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$ajC)
case 8:v=t.hkC(s.aq0(f,0,null))
x=1
break
case 7:case 4:v=B.hkC(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajC,w)}}
B.b7R.prototype={
bE3(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hF(new B.cuW(x)))
w.addEventListener("icecandidate",A.hF(new B.cuX(x)))
w.addEventListener("iceconnectionstatechange",A.hF(new B.cuY(x)))
w.onicegatheringstatechange=A.hF(new B.cuZ(x))
w.addEventListener("signalingstatechange",A.hF(new B.cv_(x)))
if(!$.hsG())w.addEventListener("connectionstatechange",A.hF(new B.cv0(x)))
w.addEventListener("negotiationneeded",A.hF(new B.cv1(x)))
w.addEventListener("track",A.hF(new B.cv2(x)))},
anl(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ej(s.createAnswer(A.kA(A.cz(A.S(y.N,y.z)))),y.aQ),$async$anl)
case 3:t=f
v=new B.Z4(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anl,w)},
a9x(d,e){return this.bsY(0,e)},
bsY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9x)
case 2:return A.h(null,w)}})
return A.i($async$a9x,w)},
a9F(d,e){return this.bti(0,e)},
bti(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9F)
case 2:return A.h(null,w)}})
return A.i($async$a9F,w)},
arJ(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Z4(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arJ,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.aee.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a02.prototype={
R(){return new B.aCd()},
gd6(){return this.c}}
B.aCd.prototype={
a_(){this.a3()
this.ag8()},
ag8(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2w(u.e,u.c),$async$ag8)
case 2:t=e
if(v.c!=null)v.l(new B.dfP(v,t))
return A.h(null,w)}})
return A.i($async$ag8,w)},
RC(){var x=0,w=A.j(y.H),v,u=this,t
var $async$RC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arO(t.e,t.c,!1),$async$RC)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fCQ)
x=1
break}x=4
return A.b(B.a8Q(u.a.c,"individual"),$async$RC)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a7T(A.e6(new B.dfM(u),!1,null,y.H)),$async$RC)
case 5:case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
Kg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Kg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fJC(o),$async$Kg)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8U(o.e,r,s,q),$async$Kg)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fzP)
x=1
break}x=5
return A.b(B.a8Q(u.a.c,"member"),$async$Kg)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a7T(A.e6(new B.dfO(u),!1,null,y.H)),$async$Kg)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Kg,w)},
yW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8P(t.e,o,t.f,t.r,t.w,s),$async$yW)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8Q(u.a.c,"org_owner"),$async$yW)
case 4:x=5
return A.b(B.arT(u.a.c),$async$yW)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fK6(o),$async$yW)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8S(s,t,o,q.c),$async$yW)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fzL)
x=1
break}x=10
return A.b(B.arT(u.a.c),$async$yW)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a7T(A.e6(new B.dfN(u),!1,null,y.H)),$async$yW)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yW,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nQ:C.qQ,p=B.hiK(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dK,y.m).w
w=A.m(28)
v=A.a([new A.aa(0,C.H,C.az.j(0.35),C.h1,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fXh,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.hm,s,s,s),C.aB,D.hgw,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.ce3,C.m),s,s,s,s,C.eJ,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lQ(new B.dfR(),s),C.N,v,C.ec,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeI(C.f3,C.aFF,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclV(),s),C.af],u))
w.push(new B.aeI(C.q_,C.a6m,"Team Member","Sign in with your organization access code + password",t.gcmQ(),s))
w.push(C.af)
w.push(new B.aeI(C.arz,C.a8_,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcmk(),s))
return A.c7(s,q,A.bo(!0,A.cc(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeI.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eK(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.mb,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(C.zT,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aET.prototype={}
B.aI6.prototype={}
B.jS.prototype={
mQ(d){var x=this.b,w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gasp(){var x=this.d
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
bh7(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRV(d){return this.bh7(null,d)},
aHi(d){return this.bh7(d,null)}}
B.WF.prototype={
R(){return new B.aGg(new A.cB(null,y.A))},
gd6(){return this.c}}
B.aGg.prototype={
a_(){this.a3()
this.ag9()},
ag9(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cv(u.a.c),$async$ag9)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e2p(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ag9,w)},
aga(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aga=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fN(new A.fD(s)),$async$aga)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fDL)
case 1:return A.h(v,w)}})
return A.i($async$aga,w)},
a0i(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqS(s.d,4),$async$a0i)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rz(r,"ngmy_my_code_"+m+".png"),$async$a0i)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0i,w)},
ak2(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ak2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.ac_("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ak2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ak2,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nQ:C.qQ,m=o?C.c:C.a_,l=A.eW(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lt
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
w=A.p(p,A.x(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.Av,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,P.ao6,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.H,C.az.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.cc(A.x(A.a([x,C.ns,w,C.ll,new A.e8(A.p(p,A.qs(p,p,!1,B.i5B(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.ll,A.A(A.a([A.E(A.er(I.DX,p,C.Xf,q.gce2(),p),1),C.ar,A.E(A.dd(C.Aj,p,C.adj,q.gce3(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a4(1/0,p,A.er(N.a59,p,D.hc0,q.gcC0(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,Z.aoI,p,p,C.ah)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.WJ.prototype={
R(){return new B.aGj(new A.au(C.ax,$.az()),A.jN(!0,null,!0,!0,null,null,!1))}}
B.aGj.prototype={
a_(){var x,w
this.a3()
x=this.a.e
w=B.Jy(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
a0j(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jy(u.d.a.a)
if(t==null){u.l(new B.e3y(u))
x=1
break}u.l(new B.e3z(u))
s=u.a
r=s.c
x=3
return A.b(B.a8O(s.d,new B.e3A(u),t,r),$async$a0j)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e3B(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0j,w)},
a3J(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3J=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cx(r.a.d)){x=1
break}r.l(new B.e3C(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.t6(r.a.c,q),$async$a3J)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e3D(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajO(p,m,l,j,k),$async$a3J)
case 8:o=e
if(r.c!=null)r.l(new B.e3E(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e3F(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e3G(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3J,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ak5:D.ahz,h=j?D.alT:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.aj3:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eW(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dw(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dw(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.x,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c0W,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ay,C.aD,C.x,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f9,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.Av,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.va(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmX()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pk,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e3H(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mK,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.E7(l.a.d,4)
m=A.B(new A.O(m,new B.e3I(x,new A.aJm(i)),m.$ti.k("O<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.kL,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.di,p,C.N,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fyh)
else q.push(A.V(C.kN,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cX(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j2,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.cc(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJe,k,k,C.ah),1)
u=l.f?k:l.gcC1()
t=i[3]
s=i[1]
q=A.m(16)
s=A.er(N.a59,k,D.hd7,u,A.dl(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gce4()
t=A.bp(C.az,k,k,0,C.c,k,C.nY,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c7(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bo(!0,A.lz(new B.e3J(),A.x(A.a([e,new A.D(D.bII,A.x(A.a([s,C.N,i,C.af,A.bI(l.f?C.ur:D.hbm,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cp,C.a1p,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmX.prototype={
pe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fn(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.hm(C.bA,v.length),C.aP)}}
B.WG.prototype={
R(){return new B.aGh()}}
B.aGh.prototype={
a_(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(new A.bc(w,C.b7,C.aP),v)
x=x.d
u.e!==$&&A.aS()
u.e=new A.au(new A.bc(x,C.b7,C.aP),v)
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
agb(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agb=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e2q(r))
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
return A.b(B.a8T(p,m,n,o,C.a.i(l).length===0?null:l),$async$agb)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fDm)
s=[1]
x=4
break}p.L(y.q).f.T(D.fBY)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e2r(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agb,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nQ:C.qQ,q=A.eW(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h3G,s,s,s,1,s,!0),p=A.p(s,D.bAG,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.IZ,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8n,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8i,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8y,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gce5()
u=A.bp(C.az,s,s,s,s,C.hs,s,s,s,s,s,s)
return A.c7(q,r,A.cc(A.x(A.a([p,C.di,o,C.af,x,C.af,w,C.ns,A.bI(t.r?C.ur:C.aZN,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adW.prototype={}
B.bzX.prototype={
a6A(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8j()))
x=3
return A.b(B.SL(t,s),$async$a6A)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
gd6(){return this.a}}
B.OH.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a01.prototype={
R(){return new B.aCc(new A.au(C.ax,$.az()),A.jN(!0,null,!0,!0,null,null,!1))}}
B.aCc.prototype={
a_(){this.a3()
$.aU.U$.push(new B.dfL(this))},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
ceb(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a37(d),u=x.a.c,t=u?C.iX:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nQ:v.a[0],p=A.m(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.az.j(u?0.25:0.12),C.h1,32)],n),l=A.p(w,Y.auj,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.H,C.az.j(0.4),C.cz,16)],n),C.av9,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.D,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.va(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzz()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.D8,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b8i),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dfJ(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mK,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cS(T.MX,new A.bQ(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x9,A.x(A.a([l,C.aO,k,C.N,j,C.ec,i,C.ec,A.A(A.a([A.E(A.dZ(C.oq,new B.dfK(d),A.dl(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.m(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bQ(new A.o(w,w,w,A.m(14),A.a([new A.aa(0,C.H,C.az.j(0.35),C.cN,12)],n),M.Rn,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eH1,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcea(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.Ps,w,C.dd,w,w,w)}}
B.bzz.prototype={
pe(d,e){return e.anf(e.a.toUpperCase())}}
B.WH.prototype={
R(){return new B.aGi(A.a([],y.r),A.aR(y.N))},
gd6(){return this.c}}
B.aGi.prototype={
a_(){var x=this
x.a3()
x.uv()
x.w=A.d1(C.jV,new B.e3w(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WQ()
this.a2()},
a2y(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OG(u.a.c),$async$a2y)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bq(u.a.c),$async$a2y)
case 4:u.l(new s.e2U(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
uv(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OG(u.a.c),$async$uv)
case 3:t=e
x=4
return A.b(B.Bq(u.a.c),$async$uv)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e2V(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OJ(u.d)
B.Cv(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uv,w)},
OJ(d){return this.bIa(d)},
bIa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8Y(r,u.a.c),$async$OJ)
case 8:p=f
if(u.c==null){x=1
break}new B.e2t(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mQ(D.nm))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WO(r,u.a.c),$async$OJ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bq(u.a.c),$async$OJ)
case 12:u.l(new o.e2u(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
P8(d){return this.bOB(d)},
bOB(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8Y(d,u.a.c),$async$P8)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e2z(u,d,t))
x=6
return A.b(A.fN(new A.fD(t)),$async$P8)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fN(new A.fD(r.toUpperCase())),$async$P8)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P8,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uw(d,e){return this.cNb(d,e)},
cNb(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e3k(r,e))
u=3
x=6
return A.b(d.$0(),$async$uw)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e3l(r))
$.eX.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uw,w)},
gaZ4(){var x=this.a
return x.f||x.r||x.w},
J2(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZ4()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgw(s,n,r,q,o,t),$async$J2)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fXk(o,u.a.c),$async$J2)
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
return A.b(B.E0(s,o,r,q,n,t),$async$J2)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J2,w)},
a1A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arT(u.a.c),$async$a1A)
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
return A.b(A.a7(t,!1).c9(A.e6(new B.e2R(u,r,q),!1,null,y.H)),$async$a1A)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1A,w)},
a2I(d){return this.cvo(d)},
cvn(){return this.a2I(1)},
cvo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZ4()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arQ(u.a.c),$async$a2I)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2I,w)},
ae_(d,e,f){return this.c4F(d,e,f)},
c4F(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ae_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uw(new B.e2O(u,d,null,e,f),"Uploading\u2026"),$async$ae_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ae_,w)},
bIj(){B.hQe(!1,new B.e2x(this))
return},
cAy(){this.l(new B.e2Z(this))},
aBI(){var x=0,w=A.j(y.H),v=this
var $async$aBI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bIj()
return A.h(null,w)}})
return A.i($async$aBI,w)},
adW(){var x=0,w=A.j(y.H),v=this
var $async$adW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uw(new B.e2D(v),"Importing\u2026"),$async$adW)
case 2:return A.h(null,w)}})
return A.i($async$adW,w)},
TF(d){return this.cMu(d)},
cMu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mQ(D.nm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).c9(A.e6(new B.e3h(u,d),!1,null,y.H)),$async$TF)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mQ(D.Tr)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).c9(A.e6(new B.e3i(u,d),!1,null,y.H)),$async$TF)
case 8:x=1
break
case 7:x=u.c5n(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).c9(A.e6(new B.e3j(u,d),!1,null,y.H)),$async$TF)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TF,w)},
c5n(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cY_,C.a.aV(x,w+1).toLowerCase())},
ahM(d){return this.clZ(d)},
clZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mQ(D.nm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).c9(A.e6(new B.e2P(u,d),!1,null,y.H)),$async$ahM)
case 5:x=1
break
case 4:u.l(new B.e2Q(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
T0(d){return this.cDv(d)},
cDv(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$T0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pS(t,s.c,s.f),$async$T0)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uw(new B.e3a(u,d),"Preparing QR\u2026"),$async$T0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$T0,w)},
aks(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aks=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3b(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3c(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.T0(r),$async$aks)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aks,w)},
akl(d){return this.cD2(d)},
cD2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a37(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e34(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akl)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TF(d)
break
case"qr":u.T0(A.a([d],y.r))
break
case"send_my_code":u.cmF(A.a([d],y.r))
break
case"save":u.ajK(d)
break
case"delete":u.JY(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akl,w)},
Z0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e2A(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2B(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pS(t,s.c,s.f),$async$Z0)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uw(new B.e2C(u,r),"Preparing file\u2026"),$async$Z0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Z0,w)},
aiS(d){return this.ctI(d)},
ctI(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hRi(d,!1),$async$aiS)
case 3:s=f
r=s==null
q=B.a8V(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiS,w)},
ahS(){var x=0,w=A.j(y.H),v=this,u
var $async$ahS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h4Y(u,v.a.c),$async$ahS)
case 2:return A.h(null,w)}})
return A.i($async$ahS,w)},
bIi(){B.hQe(!1,new B.e2w(this,null))
return},
Kf(d,e){return this.cmG(d,e)},
b4P(d){return this.Kf(null,d)},
cmF(d){return this.Kf(d,null)},
cmG(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Kf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e2S(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y1.cq().aq1(!0,C.a3c,!1),$async$Kf)
case 10:r=g
if(r==null||J.cx(r.a)){x=1
break}x=11
return A.b(s.uw(new B.e2T(l,s,r),"Preparing\u2026"),$async$Kf)
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
return A.b(B.bIg(p,l,e,s.a.c),$async$Kf)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Kf,w)},
Jj(d){return this.c4s(d)},
c4s(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i5A(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4P(t),$async$Jj)
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
return A.b(u.uw(new B.e2M(u,d),"Receiving video\u2026"),$async$Jj)
case 11:x=1
break
case 10:x=12
return A.b(u.uw(new B.e2N(u,d),"Receiving\u2026"),$async$Jj)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jj,w)},
F7(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DV()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiS(t),$async$F7)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jj(s),$async$F7)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).c9(A.e6(new B.e2X(u),!1,null,y.N)),$async$F7)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uv(),$async$F7)
case 10:x=1
break
case 9:x=11
return A.b(u.Jj(C.a.i(r)),$async$F7)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F7,w)},
ajK(d){return this.cz2(d)},
cz2(d){var x=0,w=A.j(y.H),v=this
var $async$ajK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uw(new B.e2W(v,d),"Saving\u2026"),$async$ajK)
case 2:return A.h(null,w)}})
return A.i($async$ajK,w)},
JY(d){return this.bQZ(d)},
bQZ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lC(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JY)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgz(t),$async$JY)
case 6:case 5:s=d.a
x=7
return A.b(B.FE(u.a.c,s),$async$JY)
case 7:u.r.X(0,s)
x=8
return A.b(u.uv(),$async$JY)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JY,w)},
aky(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aky=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a37(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e3g(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aky)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahS()
break
case"import":u.adW()
break}case 1:return A.h(v,w)}})
return A.i($async$aky,w)},
ce8(d){var x=d.c
if(C.a.Y(x,"video/")||d.mQ(D.nm))return C.rp
if(C.a.Y(x,"image/")||d.mQ(D.Tr))return C.vv
if(C.a.q(x,"pdf"))return S.IE
return D.arY},
B(d){var x,w,v=this,u=null,t=B.a37(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IR,u,u,u,new B.e3r(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c1x,u,u,u,v.e?u:v.gcml(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcAx()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bWB:E.asm,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a56,u,u,u,v.e?u:v.gce9(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p4,u,u,u,v.e?u:v.gb5W(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3l,u,u,u,v.e?u:new B.e3s(v),u,u,u,u,"More options",u))
q=A.eW(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lQ(new B.e3t(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dw(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dw(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.x,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jE(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aC9(C.jG,s,!0,t,w?u:v.gcDw(),u),1)
x.push(new A.D(D.bHr,A.lz(new B.e3u(),A.A(A.a([s,C.ar,A.E(new B.aC9(C.tO,"Export",!1,t,w?u:v.gbUR(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cp,C.iO,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhq(t,v.e?u:v.gb5W(),u)
else s=A.kq(!0,u,u,new B.e3v(v,t),s,u,D.bHi,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aC9.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tC,t,new A.b9(s,C.a1),t,t,t)
return A.dd(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dl(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tC,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.er(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fi,t,t,t),u.r,v)}}
B.bhq.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dfH(),new A.D(E.a2j,A.x(A.a([A.lz(new B.dfI(),A.p(x,A.V(C.zX,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ay,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ej,C.hy,x,x,new A.bq(0.86,1,w),s),C.ec,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ec,A.dd(C.p4,x,D.hgQ,this.d,A.bp(C.az,x,x,x,C.c,x,C.Pq,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cp,C.CX,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aef.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mQ(D.nm))p=D.dAK
else{p=C.a.Y(p,"image/")||i.mQ(D.Tr)
n=y.O
p=p?A.a([C.cZ,C.az],n):A.a([C.aN.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ay,C.aD,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasp()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.nm))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h_,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.co))
if(!(!o||i.mQ(D.nm)))l.push(A.hgx(C.az,!1,j,j,j,!1,j,j,new B.dg3(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.V(C.p_,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.co))
return A.lz(new B.dg4(),new A.D(C.dU,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1M,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cp,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a03.prototype={
R(){return new B.aCe()},
gd6(){return this.c}}
B.aCe.prototype={
a_(){this.a3()
this.yK()},
t(){B.i5P(this.e)
this.a2()},
yK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t6(o.c,o.d),$async$yK)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i5S(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i5R(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dg0(s))
x=1
break}s.l(new B.dg1(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dg2(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yK,w)},
a3I(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t6(t.c,t.d),$async$a3I)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fAl)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajO(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3I)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3I,w)},
c4l(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kV(u,C.z,v,new B.dfZ(w,t),C.he,C.dI,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h6(t,C.z,v,new B.dg_(w),C.he,C.dI,!0,v,!1,v,v)
else return C.bK
return A.vh(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a37(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DZ,u,u,u,v.gb9L(),u,u,u,u,"Share / save",u))
r=A.eW(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gn
else{q=v.r
if(q!=null)t=new A.D(C.eJ,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eJ,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dd(C.DZ,u,D.fZM,v.gb9L(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c4l()}return A.c7(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a00.prototype={
R(){return new B.aCb(A.akL(),C.bH,C.bH)},
gd6(){return this.c}}
B.aCb.prototype={
a_(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iF(new B.dfE(v))
x.gd08().iF(new B.dfF(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.beF
x.iF(new B.dfG(v))
v.yK()},
yK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t6(p.c,p.d),$async$yK)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dfx(s))
x=1
break}x=8
return A.b(s.d.vz(0,new A.a5l(r,s.a.d.c)),$async$yK)
case 8:if(s.c==null){x=1
break}s.l(new B.dfy(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dfz(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yK,w)},
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
aWV(d){var x=d.a
return C.a.aZ(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a37(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eW(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gn
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bXz,C.f,o,o,new A.o(o,o,o,A.m(24),o,M.Rn,C.m),o,88,o,o,o,o,o,88)
t=A.ld(C.az,o,o,m,0,new B.dfA(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aWV(p.w)+" / "+p.aWV(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.fwK,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vy:C.fO,o,o,o,o,o)
x=A.x(A.a([u,C.ll,t,x,C.di,A.dd(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcec(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c7(v,w,A.at(new A.D(C.ra,x,o),o,o,o),o,!1,!1,o,o)}}
B.R5.prototype={
R(){return new B.aCh()},
gd6(){return this.c}}
B.aCh.prototype={
a_(){this.a3()
this.QS()},
QS(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hiL(o.c,o.d,new B.dgh(s)),$async$QS)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dgi(s))
x=1
break}s.e=r
q=Q.itv(r)
if(q==null){s.l(new B.dgj(s))
x=1
break}s.d=q
q.aU(0,s.gb4C())
x=8
return A.b(q.iW(0).d7(0,C.nX),$async$QS)
case 8:if(s.c==null){x=1
break}s.l(new B.dgk(s))
x=9
return A.b(q.qv(0),$async$QS)
case 9:q.u5(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dgl(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QS,w)},
ckx(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dgm(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DT(0,x.gb4C())
w=x.d
if(w!=null)w.t()
B.iDO(x.e)
x.a2()},
age(){var x=0,w=A.j(y.H),v=this,u,t
var $async$age=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2E(u.c,u.d),$async$age)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$age,w)},
B(d){var x,w,v,u=this,t=null,s=B.a37(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eW(A.a([A.aI(t,t,t,t,C.oc,t,t,t,u.gce6(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iy(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gn
else{q=u.r
if(q!=null)s=new A.D(C.eJ,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akb(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fM(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AW(s,t),A.aA(t,A.xL(A.p(t,A.V(q?K.vy:C.fO,C.c,t,t,t,48),C.f,t,t,new A.o(C.b6,t,t,v,t,t,C.m),t,t,t,t,C.bS,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dgo(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c7(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a05.prototype={
R(){return new B.aCf(new A.cB(null,y.A))}}
B.aCf.prototype={
gcMS(){var x,w,v=this.a
if(v.e!==D.UP)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcMs(){var x,w,v=this.a
if(v.e!==D.AX)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a3()
x=v.gcMS()
if(x!=null){v.S2(x)
v.e=A.d1(V.CZ,new B.dgd(v,x))}w=v.gcMs()
if(w!=null){v.S1(w)
v.f=A.d1(C.fp,new B.dge(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
S1(d){return this.crS(d)},
crS(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$S1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arY(d),$async$S1)
case 3:t=f
x=4
return A.b(B.cgS(d),$async$S1)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dg5(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
S2(d){return this.crT(d)},
crT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h5H(d),$async$S2)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bG1(t),$async$S2)
case 4:if(u.c==null){x=1
break}u.l(new B.dg6(u))
u.c.L(y.q).f.T(D.aWu)
case 1:return A.h(v,w)}})
return A.i($async$S2,w)},
gc9T(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gce7(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3r(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DV()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fDw)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).c9(A.e6(new B.dg7(),!1,null,y.N)),$async$a3r)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bG1(s),$async$a3r)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aWu)
case 1:return A.h(v,w)}})
return A.i($async$a3r,w)},
abN(d){return this.bOC(d)},
bOC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fN(new A.fD(C.d.aL(t,", "))),$async$abN)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abN,w)},
agc(d){return this.bOk(d)},
bOk(d){var x=0,w=A.j(y.H),v=this
var $async$agc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fN(new A.fD(v.a.c)),$async$agc)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fAP)
return A.h(null,w)}})
return A.i($async$agc,w)},
a3l(d){return this.cz4(d)},
cz4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqS(s.d,4),$async$a3l)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rz(r,"ngmy_doc_share_qr.png"),$async$a3l)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3l,w)},
gb_k(){var x,w=this.a
if(w.e!==D.K5)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
abK(d){return this.bOv(d)},
bOv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_k()
if(t==null){x=1
break}x=3
return A.b(A.fN(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$abK)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fCv)
case 1:return A.h(v,w)}})
return A.i($async$abK,w)},
agd(){var x=0,w=A.j(y.H),v=this,u
var $async$agd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WQ(),$async$agd)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agd,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a37(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.K5&&i!==D.UP&&i!==D.AX
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eW(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.K5||t===D.UP||t===D.AX?l:A.aI(l,l,l,l,C.lD,l,l,l,m.gb2t(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qs(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.c(""+q.d+" file(s) \xb7 "+m.gc9T(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.K5){t=C.az.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.N,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lZ,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gce7(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hx(D.c7q,D.h8w,new B.dg8(m,d),l)],p))}if(m.a.e===D.K5&&m.gb_k()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hx(D.c3H,D.h55,new B.dg9(m,d),l)],p))
if(m.a.e===D.AX){x=(m.w?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gr:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lZ,l,l,l)],p))}if(m.a.e===D.UP){x=(m.r?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gr:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lZ,l,l,l),C.af,A.dd(D.c_3,l,D.hbG,m.gczr(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pa(i,A.c7(v,w,new A.D(C.ae,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.bb,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.er(I.DX,l,C.Xf,new B.dga(m,d),l),1),C.ar,A.E(A.dd(C.Aj,l,C.adj,new B.dgb(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.N,new A.a4(1/0,l,A.bI(U.BB,l,m.gb2t(),A.bp(C.aN,l,l,l,l,C.hs,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dgc(),y.C)}}
B.aed.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cc(A.x(A.a([w,C.aO,A.p(x,A.qs(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bI(C.BC,x,new B.dfw(d),x)],u),x,x,C.nG,v,x,x,x,x,D.fYJ,x)}}
B.a0_.prototype={
R(){return new B.aCa(A.A7(C.zc,C.ox,C.vK))}}
B.aCa.prototype={
t(){this.d.t()
this.a2()},
aAa(d){var x,w,v,u,t
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
return A.c7(A.eW(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h5D,x,x,x,1,x,!0),C.v,A.A6(this.d,C.c0,this.gaA9()),x,!1,!1,x,x)}}
B.a06.prototype={
R(){return new B.aCg(A.A7(C.zc,C.ox,C.vK))},
gd6(){return this.c}}
B.aCg.prototype={
c5p(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aie(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aie=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N4("text/plain"),$async$aie)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fDq)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aie,w)},
acB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hRi(p,!0),$async$acB)
case 3:t=e
p=t==null
s=B.a8V(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fzW)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acB,w)},
t(){this.d.t()
this.a2()},
aAa(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c5p(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.ato,v,v,v,w.gbUk(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5d,v,v,v,w.gcpa(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eW(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.rj:R.Qz,v,v,v,v,v),v,v,v,new B.dgg(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hcC,v,v,v,1,v,!0)
u=A.A6(w.d,C.c0,w.gaA9())
x=A.m(20)
return A.c7(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eNj],s),v),v,!1,!1,v,v)}}
B.bhr.prototype={
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
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2p,A.A(A.a([u,C.bc,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eM,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abn.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PP.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Z3.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PO.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.G9.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cuU.prototype={}
B.G8.prototype={}
B.abm.prototype={}
B.aww.prototype={}
B.Z4.prototype={}
var z=a.updateTypes(["ay<~>()","P(jS)","n(jS)","WH(Z)","~()","a02(Z)","F(F,jS)","R5(Z)","~(lH)","cp(G8)","ay<jS?>(@)","WF(Z)","WJ(Z)","D(jS)","jS(@)","a9<n,@>(jS)","a01(Z)","WG(Z)","a03(Z)","a00(Z)","a05(Z)","aed(Z)","ai<jS>()","a06(Z)","aef(Z,F)","a0_(Z)","a9<n,aE>(jS)","cp(Z3)","cp(abm)","ay<cp>(G8)"])
B.cuQ.prototype={
$1(d){var x=this.a
x.x=D.aTb
x.y.I(0,D.aTb)},
$S:74}
B.cuR.prototype={
$1(d){var x=this.a
x.x=D.aTa
x.y.I(0,D.aTa)},
$S:74}
B.cuS.prototype={
$1(d){var x=this.a
x.ajC(A.a3R(d.data)).bE(new B.cuP(x),y.b)},
$S:74}
B.cuP.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cuT.prototype={
$1(d){},
$S:74}
B.cuW.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.iaL(d.channel))},
$S:17}
B.cuX.prototype={
$1(d){},
$S:17}
B.cuY.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iuF(w.iceConnectionState)
x.cx=w
if($.hsG())switch(w.a){case 0:x.cy=D.aTg
break
case 1:x.cy=D.aTh
break
case 3:x.cy=D.aTi
break
case 5:x.cy=D.aTe
break
case 6:x.cy=D.aTf
break
case 7:x.cy=D.aaV
break
default:break}},
$S:112}
B.cuZ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iuG(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:112}
B.cv_.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iFm(w.signalingState)},
$S:112}
B.cv0.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iDv(w.connectionState)},
$S:112}
B.cv1.prototype={
$1(d){},
$S:112}
B.cv2.prototype={
$1(d){},
$S:17}
B.fF_.prototype={
$1(d){var x=y.F.a(new A.qJ([],[]).o7(d.target.result,!1)),w=C.wZ.q(x.objectStoreNames,"blobs")
if(!w)C.wW.GE(x,"blobs")},
$S:170}
B.h4M.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xC.fl(this.b)
$.eX.mJ()
this.c.$1(d)},
$S:400}
B.h4O.prototype={
$1(d){return this.a.$1(B.ik7(this.b,this.c))},
$S:33}
B.h4N.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h4L.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h50.prototype={
$1(d){var x=this
return B.hFe(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h51.prototype={
$1(d){var x=this
return B.hFe(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fHG.prototype={
$1(d){var x=this
return B.cgt(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dfP.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dfM.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgt(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dfO.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgt(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dfN.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgt(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dfR.prototype={
$4(d,e,f,g){var x=null
return A.ke(A.A(A.a([A.aI(x,x,x,x,D.bYF,x,x,x,new B.dfQ(d),x,x,x,x,x,x),A.E(A.FV(D.T9,!0,x,!1,C.a4h,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.T9,x,g,C.ap1,0,e,f)},
$C:"$4",
$R:4,
$S:418}
B.dfQ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fJF.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f0,y.m).w,t=this.a,s=t?C.iX:C.c,r=A.m(28),q=A.p(v,D.bB_,C.f,v,v,D.b9W,v,v,v,v,D.aoO,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c28,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Da,A.x(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atE,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dZ(C.dw,new B.fJD(d),v),1),C.ar,A.E(A.bI(D.h43,v,new B.fJE(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HC,v,v,v,v),v)},
$S:65}
B.fJD.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fJE.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fB5)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aET(v,x))},
$S:0}
B.fK8.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f0,y.m).w,u=x.a,t=u?C.iX:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bAQ,C.f,w,w,D.bbq,w,w,w,w,D.aoO,w,w,1/0),new A.D(C.Da,A.x(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hod(u,"Organization name",C.Ic,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hod(u,"Access code",C.mu,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hod(u,"Member password",C.DW,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.by,A.bI(D.hcJ,w,new B.fK7(r,q,p,d),A.bp(C.az,w,w,w,w,C.hs,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HC,w,w,w,w),w)},
$S:65}
B.fK7.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fBa)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aI6(u,x,w))},
$S:0}
B.cgk.prototype={
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
p=C.a.Y(j,"http")?A.cI(j,0,null):s.b.aY(j)
u=4
x=7
return A.b(A.w8(p,null).d7(0,C.a1o),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cw(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cgq.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgr.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgs.prototype={
$1(d){return d.b},
$S:z+2}
B.cgm.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgn.prototype={
$1(d){return d.b},
$S:z+2}
B.cgl.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cgo.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgp.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h4Z.prototype={
$1(d){return new B.WF(this.a,null)},
$S:z+11}
B.h5_.prototype={
$1(d){return new B.WJ(this.a,this.b,this.c,null)},
$S:z+12}
B.e2p.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e3y.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e3z.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e3A.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e3x(x,d))},
$S:2}
B.e3x.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e3B.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e3C.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e3D.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e3E.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e3F.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e3G.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e3J.prototype={
$3(d,e,f){return A.d6(A.dU(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.e3H.prototype={
$1(d){var x=this.a
return x.f?null:x.a0j()},
$S:2}
B.e3I.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mQ(D.Tr))s=C.vv
else s=C.a.Y(s,"video/")||d.mQ(D.nm)?C.rp:D.arY
x=this.b.a
w=y.p
return new A.D(C.jX,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasp(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e2q.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e2r.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgu.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.cgv.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.h6_.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fBY.prototype={
$1(d){return J.k(d)},
$S:15}
B.fHS.prototype={
$1(d){var x=this.b
B.ii2(C.I0.ga8d(this.a)).bE(x.gCs(x),y.H)},
$S:131}
B.fHT.prototype={
$1(d){return this.a.dh(0,null)},
$S:131}
B.fHU.prototype={
$0(){return null},
$S:12}
B.cgJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHV.prototype={
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
return new B.jS(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fMd.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fG3.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fG4.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cgO.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.haf.prototype={
$1(d){return new B.a01(this.a,null)},
$S:z+16}
B.dfL.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:7}
B.dfJ.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dfK.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e3w.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2y()},
$S:10}
B.e2U.prototype={
$0(){var x=J.bJm(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2V.prototype={
$0(){var x=J.bJm(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2t.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e2s(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHi(this.c)}},
$S:0}
B.e2s.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2u.prototype={
$0(){var x=J.bJm(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2z.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e2y(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHi(this.c)}},
$S:0}
B.e2y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3k.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e3l.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e2R.prototype={
$1(d){return new B.WG(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e2O.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J2(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WK(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uv(),$async$$0)
case 5:s=J.a2(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2I(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2x.prototype={
$1(d){this.a.ae_(d,"No files selected.","Added")},
$S:400}
B.e2Z.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e2Y(),A.U(x).k("O<1,n>")))},
$S:0}
B.e2Y.prototype={
$1(d){return d.a},
$S:z+2}
B.e2D.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y1.cq().d29(C.a3c,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jY(o,0,null)}u=2
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
return A.b(B.arX(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cx(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uv(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e3h.prototype={
$1(d){return new B.R5(this.a.a.c,this.b,null)},
$S:z+7}
B.e3i.prototype={
$1(d){return new B.a03(this.a.a.c,this.b,null)},
$S:z+18}
B.e3j.prototype={
$1(d){return new B.a00(this.a.a.c,this.b,null)},
$S:z+19}
B.e2P.prototype={
$1(d){return new B.R5(this.a.a.c,this.b,null)},
$S:z+7}
B.e2Q.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e3a.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J2(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8X(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cvn(),$async$$0)
case 5:x=6
return A.b(p.uv(),$async$$0)
case 6:r=A.U(t).k("O<1,n>")
r=new A.O(new A.O(t,new B.e36(p),r),new B.e37(),r.k("O<aj.E,n>")).c0(0,new B.e38())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).c9(A.e6(new B.e39(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pR(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WQ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e36.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e35(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e35.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e37.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e38.prototype={
$1(d){return d.length!==0},
$S:3}
B.e39.prototype={
$1(d){var x=this.a
return new B.a05(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e3b.prototype={
$1(d){return d.a},
$S:z+2}
B.e3c.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e34.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kJ,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasp(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mQ(D.nm)?C.tS:C.oa
p=!x||p.mQ(D.nm)?"Play video":"View"
return new A.bQ(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lq,v,v,C.m),C.bm,A.bo(!0,new A.D(C.D6,A.x(A.a([q,o,t,C.aB,B.a04(!1,u,!1,w,p,new B.e3_(d),v),B.a04(!1,u,!1,C.jG,"Share via QR",new B.e30(d),"Letters/numbers QR code"),B.a04(!1,u,!1,D.a4m,"Send to their Code",new B.e31(d),"Enter someone else's personal code"),B.a04(!1,u,!1,C.hP,"Download / save",new B.e32(d),v),C.aj,B.a04(!1,u,!0,C.eq,"Delete",new B.e33(d),v)],y.p),C.am,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:666}
B.e3_.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e30.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e31.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e32.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e33.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e2A.prototype={
$1(d){return d.a},
$S:z+2}
B.e2B.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e2C.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8Z(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HA(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pR(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2w.prototype={
$1(d){var x=this.a
x.uw(new B.e2v(x,d,this.b),"Preparing\u2026")},
$S:400}
B.e2v.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WK(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cx(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bIg(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2S.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e2T.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aQ(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hiO(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2M.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hy(new B.e2I(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e2J(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e2K(s))
case 5:x=8
return A.b(r.b.ic(0,C.Hv,new B.e2L()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a2(t)
if(q.gar(t)){s.iq("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uv(),$async$$0)
case 9:s.iq("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2I.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e2F(x,d,e))},
$S:190}
B.e2F.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e2J.prototype={
$1(d){return new B.aed(this.a.a,null)},
$S:z+21}
B.e2K.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e2L.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e2N.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jy(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8N(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4P(B.Jy(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arX(new B.e2G(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cx(r)){if(B.hiN(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uv(),$async$$0)
case 10:o=J.cJ(r)
p=o.eT(r,new B.e2H()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2G.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e2E(x,d,e))},
$S:190}
B.e2E.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e2H.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.e2X.prototype={
$1(d){return new B.a06(this.a.a.c,null)},
$S:z+23}
B.e2W.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2E(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3g.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bQ(new A.o(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lq,x,x,C.m),C.bm,A.bo(!0,new A.D(C.D6,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kJ,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a04(!0,w,!1,C.mu,"My Code",new B.e3d(d),"Your personal code & QR \u2014 others send docs to you"),B.a04(!1,w,!1,D.a4m,"Send to their Code",new B.e3e(this.a,d),"Enter someone else's 5-digit code + letter"),B.a04(!1,w,!1,W.Ab,"Import backup",new B.e3f(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:666}
B.e3d.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e3e.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bIi()},
$S:0}
B.e3f.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e3t.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JI(D.T9,x,C.a4h,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d2(C.d.gG(D.T9).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:496}
B.e3r.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e3s.prototype={
$0(){this.a.aky()
return null},
$S:0}
B.e3u.prototype={
$3(d,e,f){return A.d6(A.dU(f,new A.r(0,(1-e)*10)),e)},
$S:102}
B.e3v.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aef(e,w,v,this.b,x.e,x.ce8(w),new B.e3n(x,w),new B.e3o(x,v,w),new B.e3p(x,w),new B.e3q(x,w),null)},
$S:z+24}
B.e3n.prototype={
$0(){this.a.ahM(this.b)
return null},
$S:0}
B.e3o.prototype={
$0(){var x=this.a
return x.l(new B.e3m(x,this.b,this.c))},
$S:0}
B.e3m.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e3p.prototype={
$0(){this.a.P8(this.b)
return null},
$S:0}
B.e3q.prototype={
$0(){this.a.akl(this.b)
return null},
$S:0}
B.dfH.prototype={
$3(d,e,f){return A.d6(A.dU(f,new A.r(0,(1-e)*18)),e)},
$S:102}
B.dfI.prototype={
$3(d,e,f){return A.eb(C.z,f,e,null,null)},
$S:117}
B.dg4.prototype={
$3(d,e,f){return A.d6(A.dU(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.dg3.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.dg0.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dg1.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dg2.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dfZ.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h6(w,C.z,x,new B.dfX(this.a),C.he,C.dI,!0,x,!1,x,x)
$.aU.U$.push(new B.dfY(this.a))
return C.bK},
$S:144}
B.dfX.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfV(this.a))
return C.bK},
$S:189}
B.dfV.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfS(x))},
$S:7}
B.dfS.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfY.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfU(x))},
$S:7}
B.dfU.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dg_.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfW(this.a))
return C.bK},
$S:189}
B.dfW.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfT(x))},
$S:7}
B.dfT.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfE.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfD(x,d))},
$S:1808}
B.dfD.prototype={
$0(){return this.a.f=this.b===C.w5},
$S:0}
B.dfF.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfC(x,d))},
$S:7}
B.dfC.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dfG.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfB(x,d))},
$S:7}
B.dfB.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dfx.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dfy.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dfz.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dfA.prototype={
$1(d){return this.a.d.O2(0,A.dv(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dgh.prototype={
$0(){var x=this.a.a
return B.t6(x.c,x.d)},
$S:1809}
B.dgi.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dgj.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dgk.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dgl.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dgm.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dgo.prototype={
$0(){var x=this.a
x.l(new B.dgn(x))},
$S:0}
B.dgn.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qv(0)},
$S:0}
B.dgd.prototype={
$1(d){return this.a.S2(this.b)},
$S:10}
B.dge.prototype={
$1(d){return this.a.S1(this.b)},
$S:10}
B.dg5.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dg6.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dg7.prototype={
$1(d){return D.hOB},
$S:z+25}
B.dgc.prototype={
$2(d,e){if(d)B.WQ()},
$S:128}
B.dg8.prototype={
$0(){return this.a.abN(this.b)},
$S:0}
B.dg9.prototype={
$0(){return this.a.abK(this.b)},
$S:0}
B.dga.prototype={
$0(){return this.a.agc(this.b)},
$S:0}
B.dgb.prototype={
$0(){return this.a.a3l(this.b)},
$S:0}
B.dfw.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.dgg.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qy(),$async$$0)
case 2:u.l(new B.dgf(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dgf.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cgQ.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.cgR.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cgP.prototype={
$2(d,e){return this.boH(d,e)},
boH(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WR(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1810}
B.fLQ.prototype={
$1(d){if(d===D.aaU&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fLR.prototype={
$0(){},
$S:12}
B.fMr.prototype={
bqk(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fyZ(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hAe(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqk(d,e)},
$S:784}
B.fMq.prototype={
$1(d){var x=this
d.b=new B.fMp(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fMp.prototype={
$1(d){return this.bqj(d)},
bqj(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2F(n,m),$async$$1)
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
return A.b(B.fyZ(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8W(m),$async$$1)
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
x(v=B.aCd.prototype,"gclV","RC",0)
x(v,"gcmQ","Kg",0)
x(v,"gcmk","yW",0)
x(v=B.aGg.prototype,"gce2","aga",0)
x(v,"gce3","a0i",0)
x(v,"gcC0","ak2",0)
x(v=B.aGj.prototype,"gce4","a0j",0)
x(v,"gcC1","a3J",0)
x(B.aGh.prototype,"gce5","agb",0)
x(B.aCc.prototype,"gcea","ceb",4)
x(v=B.aGi.prototype,"gcml","a1A",0)
x(v,"gcAx","cAy",4)
x(v,"gb5W","aBI",0)
x(v,"gcDw","aks",0)
x(v,"gbUR","Z0",0)
x(v,"gce9","F7",0)
x(B.aCe.prototype,"gb9L","a3I",0)
x(B.aCb.prototype,"gcec","a0k",0)
x(v=B.aCh.prototype,"gb4C","ckx",4)
x(v,"gce6","age",0)
x(v=B.aCf.prototype,"gczr","a3r",0)
x(v,"gb2t","agd",0)
w(B.aCa.prototype,"gaA9","aAa",8)
x(v=B.aCg.prototype,"gcpa","aie",0)
x(v,"gbUk","acB",0)
w(v,"gaA9","aAa",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cuU,B.abm,B.aww,B.aET,B.aI6,B.jS,B.adW,B.bzX,B.G8,B.Z4])
w(B.cuV,B.cuU)
w(B.b7Q,B.abm)
x(A.hg,[B.cuQ,B.cuR,B.cuS,B.cuP,B.cuT,B.cuW,B.cuX,B.cuY,B.cuZ,B.cv_,B.cv0,B.cv1,B.cv2,B.fF_,B.h4M,B.h4O,B.h4N,B.h50,B.h51,B.fHG,B.dfM,B.dfO,B.dfN,B.dfR,B.fJF,B.fK8,B.cgk,B.cgr,B.cgs,B.cgn,B.cgl,B.cgo,B.cgp,B.h4Z,B.h5_,B.e3A,B.e3J,B.e3H,B.e3I,B.fBY,B.fHS,B.fHT,B.cgJ,B.fHV,B.fMd,B.fG3,B.fG4,B.cgO,B.haf,B.dfL,B.dfJ,B.e3w,B.e2s,B.e2y,B.e2R,B.e2x,B.e2Y,B.e3h,B.e3i,B.e3j,B.e2P,B.e36,B.e35,B.e37,B.e38,B.e39,B.e3b,B.e3c,B.e34,B.e2A,B.e2B,B.e2w,B.e2S,B.e2J,B.e2H,B.e2X,B.e3g,B.e3t,B.e3u,B.dfH,B.dfI,B.dg4,B.dg3,B.dfZ,B.dfX,B.dfV,B.dfY,B.dg_,B.dfW,B.dfE,B.dfF,B.dfG,B.dfA,B.dgd,B.dge,B.dg7,B.cgQ,B.cgR,B.fLQ,B.fMq,B.fMp])
w(B.b7R,B.aww)
x(A.iI,[B.h4L,B.dfP,B.dfQ,B.fJD,B.fJE,B.fK7,B.e2p,B.e3y,B.e3z,B.e3x,B.e3B,B.e3C,B.e3D,B.e3E,B.e3F,B.e3G,B.e2q,B.e2r,B.fHU,B.dfK,B.e2U,B.e2V,B.e2t,B.e2u,B.e2z,B.e3k,B.e3l,B.e2O,B.e2Z,B.e2D,B.e2Q,B.e3a,B.e3_,B.e30,B.e31,B.e32,B.e33,B.e2C,B.e2v,B.e2T,B.e2M,B.e2F,B.e2K,B.e2L,B.e2N,B.e2E,B.e2W,B.e3d,B.e3e,B.e3f,B.e3r,B.e3s,B.e3n,B.e3o,B.e3m,B.e3p,B.e3q,B.dg0,B.dg1,B.dg2,B.dfS,B.dfU,B.dfT,B.dfD,B.dfC,B.dfB,B.dfx,B.dfy,B.dfz,B.dgh,B.dgi,B.dgj,B.dgk,B.dgl,B.dgm,B.dgo,B.dgn,B.dg5,B.dg6,B.dg8,B.dg9,B.dga,B.dgb,B.dfw,B.dgg,B.dgf,B.fLR])
x(A.lh,[B.aee,B.OH,B.abn,B.PP,B.Z3,B.PO,B.G9])
x(A.af,[B.a02,B.WF,B.WJ,B.WG,B.a01,B.WH,B.a03,B.a00,B.R5,B.a05,B.a0_,B.a06])
x(A.ah,[B.aCd,B.aGg,B.aGj,B.aGh,B.aCc,B.aGi,B.aCe,B.aCb,B.aCh,B.aCf,B.aCa,B.aCg])
x(A.aw,[B.aeI,B.aC9,B.bhq,B.aef,B.aed,B.bhr])
x(A.iJ,[B.cgq,B.cgm,B.cgu,B.cgv,B.h6_,B.e2I,B.e2G,B.e3v,B.dgc,B.cgP,B.fMr])
x(A.jm,[B.bmX,B.bzz])})()
A.j3(b.typeUniverse,JSON.parse('{"b7Q":{"abm":[]},"b7R":{"aww":[]},"a02":{"af":[],"w":[]},"aCd":{"ah":["a02"]},"aeI":{"aw":[],"w":[]},"WF":{"af":[],"w":[]},"WJ":{"af":[],"w":[]},"aGg":{"ah":["WF"]},"aGj":{"ah":["WJ"]},"bmX":{"jm":[]},"WG":{"af":[],"w":[]},"aGh":{"ah":["WG"]},"a01":{"af":[],"w":[]},"WH":{"af":[],"w":[]},"aef":{"aw":[],"w":[]},"a03":{"af":[],"w":[]},"a00":{"af":[],"w":[]},"R5":{"af":[],"w":[]},"a05":{"af":[],"w":[]},"aed":{"aw":[],"w":[]},"a0_":{"af":[],"w":[]},"a06":{"af":[],"w":[]},"aCc":{"ah":["a01"]},"bzz":{"jm":[]},"aGi":{"ah":["WH"]},"aC9":{"aw":[],"w":[]},"bhq":{"aw":[],"w":[]},"aCe":{"ah":["a03"]},"aCb":{"ah":["a00"]},"aCh":{"ah":["R5"]},"aCf":{"ah":["a05"]},"aCa":{"ah":["a0_"]},"aCg":{"ah":["a06"]},"bhr":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mT"),k:x("N2()"),o:x("bn<n,n>"),F:x("rI"),g:x("ay<jS?>"),x:x("ay<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bl>"),Y:x("N<a9<n,P>>"),t:x("N<a9<n,@>>"),r:x("N<jS>"),w:x("N<+file,name(mb,n)>"),u:x("N<d2>"),s:x("N<n>"),E:x("N<jm>"),a:x("N<dF>"),p:x("N<w>"),Z:x("N<F>"),G:x("bl"),A:x("cB<ah<af>>"),n:x("ai<jS>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bv<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("ie"),e:x("iJr"),af:x("Fl"),U:x("jS"),b:x("cp"),C:x("aE"),aK:x("wV"),ab:x("G8"),br:x("aww"),v:x("Z4"),N:x("n"),X:x("bq<H>"),Q:x("mo"),D:x("dF"),aw:x("bg<n>"),cd:x("X<a9<n,@>>"),c7:x("w"),ch:x("c9<ai<jS>>"),aW:x("c9<dF?>"),aY:x("c9<~>"),cx:x("aee"),b1:x("bm<ai<jS>>"),cf:x("bm<dF?>"),d4:x("bm<~>"),c4:x("aET"),bG:x("aI6"),q:x("l_"),B:x("q4<G8>"),c6:x("q4<abn>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bl?"),_:x("ai<jS>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jS?"),R:x("aE?"),c:x("Z4?"),d:x("+answerQr,transfer(n,ay<ai<jS>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,F)?"),L:x("+fileCount,mode,qrPayload(F,OH,n)?"),aX:x("+fileCount,qrPayload,token(F,n,n)?"),T:x("n?"),K:x("dF?"),cm:x("adW?"),bk:x("aET?"),ag:x("aI6?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8i=new A.ax(C.az,2,C.r,-1)
D.cc6=new A.a8(C.a5,C.a9,C.x,C.a6m,null,null)
D.b9W=new A.o(null,null,null,C.mT,null,D.cc6,C.m)
D.bbq=new A.o(null,null,null,C.mT,null,E.IZ,C.m)
D.ahz=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aj3=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak5=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alT=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fZE=new A.C("Your team portal",null,C.dv,null,null,null,null,null,null,null,null,null)
D.hdH=new A.C("Share the access code and member password with your team. They only sign in once.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dr8=x([D.fZE,C.aj,D.hdH],y.p)
D.bAG=new A.fu(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dr8,null)
D.hif=new A.C("Create your organization",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.h3f=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dJw=x([D.hif,C.aj,D.h3f],y.p)
D.bAQ=new A.fu(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJw,null)
D.hel=new A.C("Team Member sign-in",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.h7f=new A.C("Enter the access code and password from your organization.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dH2=x([D.hel,C.aj,D.h7f],y.p)
D.bB_=new A.fu(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dH2,null)
D.bHi=new A.R(16,10,16,28)
D.bHr=new A.R(16,14,16,4)
D.bII=new A.R(20,0,20,16)
D.bJe=new A.R(20,8,20,16)
D.aoO=new A.R(24,22,24,20)
D.a4m=new A.a_(63394,"MaterialIcons",!1)
D.arY=new A.a_(63515,"MaterialIcons",!1)
D.bWB=new A.a_(983813,"MaterialIcons",!1)
D.bTJ=new A.a_(62867,"MaterialIcons",!1)
D.bXz=new A.ae(D.bTJ,44,C.c,null,null,null)
D.bYF=new A.ae(C.kk,null,C.ab,null,null,null)
D.c_3=new A.ae(C.jH,18,null,null,null,null)
D.c0W=new A.ae(D.a4m,26,C.c,null,null,null)
D.c1x=new A.ae(C.DM,null,null,null,null,null)
D.c28=new A.ae(C.DT,null,null,null,null,null)
D.c3l=new A.ae(A_.a4x,null,null,null,null,null)
D.c3H=new A.ae(C.i3,16,null,null,null,null)
D.c7q=new A.ae(C.tR,16,null,null,null,null)
D.bXR=new A.ae(C.mu,null,null,null,null,null)
D.c8i=new A.ef(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2G=new A.ae(C.Ic,null,null,null,null,null)
D.c8n=new A.ef(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYc=new A.ae(C.DW,null,null,null,null,null)
D.c8y=new A.ef(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYE=x([C.fz,C.b5,C.az],y.O)
D.ce3=new A.a8(C.ay,C.aD,C.x,D.cYE,null,null)
D.cY_=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.T9=x([C.fz,C.az],y.O)
D.Tr=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nm=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAK=x([C.n2,C.az],y.O)
D.ezz={iceServers:0}
D.aNG={urls:0}
D.dNr=new A.bn(D.aNG,["stun:stun.l.google.com:19302"],y.o)
D.dNq=new A.bn(D.aNG,["stun:stun1.l.google.com:19302"],y.o)
D.dfF=x([D.dNr,D.dNq],A.as("N<a9<n,n>>"))
D.dMx=new A.bn(D.ezz,[D.dfF],A.as("bn<n,@>"))
D.K5=new B.OH(0,"lanDirect")
D.UO=new B.OH(1,"cloudStash")
D.e2B=new B.OH(2,"inlineInstant")
D.UP=new B.OH(3,"webrtcLink")
D.AX=new B.OH(4,"videoCloud")
D.hdG=new A.C("Receive file",null,C.nx,null,null,null,null,null,null,null,null,null)
D.cNx=x([E.atN,C.aa,D.hdG],y.p)
D.frA=new A.c2(C.aK,C.bb,C.h,C.l,null,C.p,null,0,D.cNx,null)
D.eH1=new A.D(C.cq,D.frA,null)
D.fPS=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.Jt,null,null,null)
D.h_g=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fPS,null,C.K,null,null,null,null,null,null,null)
D.eGb=new A.D(C.zw,D.h_g,null)
D.bg0=new A.cn(C.z,null,null,D.eGb,null)
D.eNj=new A.cQ(0,null,0,28,null,null,D.bg0,null)
D.eND=new B.abn(0,"RTCDataChannelConnecting")
D.aTa=new B.abn(1,"RTCDataChannelOpen")
D.aTb=new B.abn(3,"RTCDataChannelClosed")
D.eNE=new B.G9(0,"RTCIceConnectionStateNew")
D.eNF=new B.G9(1,"RTCIceConnectionStateChecking")
D.eNG=new B.G9(2,"RTCIceConnectionStateCompleted")
D.eNH=new B.G9(3,"RTCIceConnectionStateConnected")
D.eNI=new B.G9(4,"RTCIceConnectionStateCount")
D.eNJ=new B.G9(5,"RTCIceConnectionStateFailed")
D.eNK=new B.G9(6,"RTCIceConnectionStateDisconnected")
D.aTc=new B.G9(7,"RTCIceConnectionStateClosed")
D.aTd=new B.Z3(0,"RTCIceGatheringStateNew")
D.eNL=new B.Z3(1,"RTCIceGatheringStateGathering")
D.aaU=new B.Z3(2,"RTCIceGatheringStateComplete")
D.aaV=new B.PO(0,"RTCPeerConnectionStateClosed")
D.aTe=new B.PO(1,"RTCPeerConnectionStateFailed")
D.aTf=new B.PO(2,"RTCPeerConnectionStateDisconnected")
D.aTg=new B.PO(3,"RTCPeerConnectionStateNew")
D.aTh=new B.PO(4,"RTCPeerConnectionStateConnecting")
D.aTi=new B.PO(5,"RTCPeerConnectionStateConnected")
D.eNM=new B.PP(0,"RTCSignalingStateStable")
D.eNN=new B.PP(1,"RTCSignalingStateHaveLocalOffer")
D.eNO=new B.PP(2,"RTCSignalingStateHaveRemoteOffer")
D.eNP=new B.PP(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eNQ=new B.PP(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTj=new B.PP(5,"RTCSignalingStateClosed")
D.fwK=new A.av(160,48)
D.bhg=new A.fs(2,null,null,null,null,C.az,null,null,null,null)
D.fyh=new A.a4(16,16,D.bhg,null)
D.h2A=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new A.b2(D.h2A,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.haj=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.b2(D.haj,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjj=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fzW=new A.b2(D.hjj,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h29=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fAl=new A.b2(D.h29,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hex=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWu=new A.b2(D.hex,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hg0=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fAP=new A.b2(D.hg0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkO=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fB5=new A.b2(D.hkO,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hiJ=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBa=new A.b2(D.hiJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjZ=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fBY=new A.b2(D.hjZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h0K=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fCv=new A.b2(D.h0K,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hce=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fCQ=new A.b2(D.hce,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4V=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fDm=new A.b2(D.h4V,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkT=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fDq=new A.b2(D.hkT,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1_=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fDw=new A.b2(D.h1_,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h_D=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fDL=new A.b2(D.h_D,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fXh=new A.C("NGMY DOC SHARE",null,C.aXU,null,null,null,null,null,null,null,null,null)
D.fYJ=new A.C("Show this to sender",null,C.iV,null,null,null,null,null,null,null,null,null)
D.fZM=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h3G=new A.C("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h43=new A.C("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h55=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h5D=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8w=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hbm=new A.C("Send to their Doc Share",null,C.mM,null,null,null,null,null,null,null,null,null)
D.hbG=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hc0=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hcC=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcJ=new A.C("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hd7=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fi,null,null,null,null,null,null,null,null,null)
D.hgw=new A.C("Share files & videos\nwith a scan.",null,C.aXX,null,null,null,null,null,null,null,null,null)
D.hgQ=new A.C("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hOB=new B.a0_(null)
D.ael=new B.aee(0,"docShare")
D.aem=new B.aee(1,"gate")
D.XT=new B.aee(2,"gateNoIndividual")})();(function staticFields(){$.aQY=null
$.fwv=function(){var x=y.N
return A.S(x,x)}()
$.Hn=A.S(y.N,y.D)
$.ail=A.S(y.N,A.as("mb"))
$.Sw=A.S(y.N,y.D)
$.fxb=A.S(y.N,A.as("adW"))
$.cgI=A.S(y.S,A.as("bzX"))
$.hAd=1
$.iqg=null
$.iqf=null
$.ihl=null
$.hop=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iJW","hTj",()=>new B.cuV())
x($,"iHQ","hsG",()=>C.a.q(A.bx(A.bx(A.bx(A.HS(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["zGfhaaE2gjL2BP9wUbgxHlnSIp8="]=a.current})($__dart_deferred_initializers__);