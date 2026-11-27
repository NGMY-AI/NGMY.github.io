((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cvT:function cvT(){},
ieD(d){var x=null,w=new B.b8C(d,D.eR0,new A.q9(x,x,y.c6),new A.q9(x,x,y.B))
w.bFe(d)
return w},
b8C:function b8C(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cvO:function cvO(d){this.a=d},
cvP:function cvP(d){this.a=d},
cvQ:function cvQ(d){this.a=d},
cvN:function cvN(d){this.a=d},
cvR:function cvR(d){this.a=d},
ieE(d,e){var x=y.N
x=new B.b8D(d,e,A.S(x,y.e),A.S(x,y.z))
x.bFf(d,e)
return x},
b8D:function b8D(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cvU:function cvU(d){this.a=d},
cvV:function cvV(d){this.a=d},
cvW:function cvW(d){this.a=d},
cvX:function cvX(d){this.a=d},
cvY:function cvY(d){this.a=d},
cvZ:function cvZ(d){this.a=d},
cw_:function cw_(d){this.a=d},
cw0:function cw0(d){this.a=d},
hrB(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.be("IndexedDB not available"))
return C.xH.HB(x,"ngmy_doc_share_v1",new B.fHA(),1)},
ilv(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eB(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w6(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aL(d)
return x}catch(w){return v}return v},
T2(d,e){return B.iBR(d,e)},
iBR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRJ
x=7
return A.b(o==null?$.aRJ=B.hrB():o,$async$T2)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mI(s,"blobs","readwrite")
C.iW.mr(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$T2)
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
return A.i($async$T2,w)},
T1(d){return B.iBQ(d)},
iBQ(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRJ
x=7
return A.b(o==null?$.aRJ=B.hrB():o,$async$T1)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iW.yg(J.mG(r,"blobs"),d),$async$T1)
case 8:q=f
x=9
return A.b(J.oY(r),$async$T1)
case 9:o=B.ilv(q)
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
return A.i($async$T1,w)},
ajs(d){return B.iBP(d)},
iBP(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRJ
x=7
return A.b(p==null?$.aRJ=B.hrB():p,$async$ajs)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iW.H5(J.mG(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$ajs)
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
return A.i($async$ajs,w)},
fHA:function fHA(){},
iob(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btJ(w,v))}return u},
hU_(d,e){var x,w={},v=A.b_w("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h88(w,v,e)
C.xJ.xe(v,"change",new B.h8a(w,v,!1))
C.xJ.xe(v,"cancel",new B.h89(w))
$.eY.mT()
v.click()
A.bM(C.anD,new B.h87(w),y.H)},
h88:function h88(d,e,f){this.a=d
this.b=e
this.c=f},
h8a:function h8a(d,e,f){this.a=d
this.b=e
this.c=f},
h89:function h89(d){this.a=d},
h87:function h87(d){this.a=d},
E9(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E9=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd8()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVx()?3:4
break
case 3:x=5
return A.b(B.hOo(e,d,s,!0,!1,f,g,h,!1,i),$async$E9)
case 5:x=1
break
case 4:x=6
return A.b(B.SE(d,s,f,g,h,i),$async$E9)
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
return A.b(B.JP(s,d),$async$E9)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fCR(s,d),$async$E9)
case 14:x=12
return A.b(r.hOo(q,p,o,n,m,l,k,j,a1,i),$async$E9)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ca(A.e4(new B.h8n(s,i,d,f,g,h),!1,null,y.H)),$async$E9)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ca(A.e4(new B.h8o(s,i,d,f,g,h),!1,null,y.H)),$async$E9)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E9,w)},
SE(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SE=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3i(e),$async$SE)
case 3:u=k
x=4
return A.b(B.asj(d,e,!1),$async$SE)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JP(e,d),$async$SE)
case 7:if(k){v=D.aeY
x=1
break}x=8
return A.b(B.WZ(e),$async$SE)
case 8:v=t?D.Yj:D.aeZ
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b3g(d,e)){v=D.aeY
x=1
break}x=11
return A.b(B.WZ(e),$async$SE)
case 11:v=t?D.Yj:D.aeZ
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hme(d,e)){v=D.aeY
x=1
break}x=14
return A.b(B.WZ(e),$async$SE)
case 14:v=D.Yj
x=1
break
case 13:v=t?D.Yj:D.aeZ
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SE,w)},
fCR(d,e){var x=0,w=A.j(y.y),v
var $async$fCR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b3g(e,d)){v=!1
x=1
break}x=3
return A.b(B.b3i(d),$async$fCR)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCR,w)},
hOo(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ca(A.e4(new B.fKg(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hIO(d,e,f,g,h,i,j){return new B.a0o(e,j,d,g,h,i,f,null)},
fMg(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fMg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fMj(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fMg)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fMg,w)},
fML(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fML=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fMN(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fML)
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
return A.i($async$fML,w)},
hrO(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b5(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
h_u(d,e){var x=0,w=A.j(y.H),v
var $async$h_u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WZ(e),$async$h_u)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).dZ()
case 1:return A.h(v,w)}})
return A.i($async$h_u,w)},
h8n:function h8n(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h8o:function h8o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeD:function aeD(d,e){this.a=d
this.b=e},
fKg:function fKg(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0o:function a0o(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCP:function aCP(){this.c=this.a=this.d=null},
dhB:function dhB(d,e){this.a=d
this.b=e},
dhy:function dhy(d){this.a=d},
dhA:function dhA(d){this.a=d},
dhz:function dhz(d){this.a=d},
dhD:function dhD(){},
dhC:function dhC(d){this.a=d},
af6:function af6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFv:function aFv(d,e){this.a=d
this.b=e},
aIM:function aIM(d,e,f){this.a=d
this.b=e
this.c=f},
fMj:function fMj(d,e,f){this.a=d
this.b=e
this.c=f},
fMh:function fMh(d){this.a=d},
fMi:function fMi(d,e,f){this.a=d
this.b=e
this.c=f},
fMN:function fMN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMM:function fMM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
che(d,e,f,g,h){return B.i9j(d,e,f,g,h)},
i9j(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$che=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dS(d,new B.chf(s,e,h,g,f,q),y.g),y.l),$async$che)
case 3:r=p.aP(j)
case 4:if(!r.B()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$che,w)},
b3d(d,e,f,g,h){return B.i9k(d,e,f,g,h)},
i9k(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b3d=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axS("GET",d)
o=A.bJI()
if(o==null)o=new A.Iq(A.a([],y.W))
x=7
return A.b(o.ff(0,s).d9(0,C.HK),$async$b3d)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DD(),$async$b3d)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CG(q,h,o,e,f,"Received via QR")
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
return A.i($async$b3d,w)},
b3c(d){return B.i9h(d)},
i9h(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b3c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wi(d,null).d9(0,C.oZ),$async$b3c)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.U.aN(0,A.ma(A.m7(p.e)).cJ(0,p.w),null)
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
return A.i($async$b3c,w)},
chd(d){return B.i9i(d)},
i9i(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$chd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wi(d,null).d9(0,C.rg),$async$chd)
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
return A.i($async$chd,w)},
chf:function chf(d,e,f,g,h,i){var _=this
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
JN(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i9p(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JN(C.a.aV(t,u.length))}return null},
i9q(d){var x=B.JN(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i9l(){var x,w=$.oh(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.ho(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a99(d){return B.i9m(d)},
i9m(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a99=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bM),$async$a99)
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
return A.i($async$a99,w)},
a9a(d,e){return B.i9n(d,e)},
i9n(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a9a=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i1(d,e,!1,!1,C.cZ,null),$async$a9a)
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
return A.i($async$a9a,w)},
CF(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CF)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JN(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a9b(r),$async$CF)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a99("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CF)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JN(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CF)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i9l()
x=14
return A.b(B.a9b(m),$async$CF)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a9a("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CF)
case 15:k=f
x=16
return A.b(B.a9a("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CF)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CF)
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
return A.i($async$CF,w)},
a9b(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a9b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JN(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a99("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a9b)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9b,w)},
a9c(d,e,f,g){return B.i9r(d,e,f,g)},
i9r(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a9c=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JN(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a9b(r),$async$a9c)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.chl())>1048576||g.aR(d,new B.chm())){v=B.FN(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9n("myCode",d,a0),$async$a9c)
case 4:u=a3
try{t=C.U.aN(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ci(s)||J.aa(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FN(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3l(u,g.gI(d),a0),$async$a9c)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dS(d,new B.chn(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b3e(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a9c)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9c,w)},
FN(d,e,f,g,h){return B.i9o(d,e,f,g,h)},
i9o(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FN=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FN)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cG(a6,0,new B.chh())
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
case 4:if(!h.B()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aD(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JR(a9,q)
a0=new A.LG(a1)
u=6
case 9:x=11
return A.b(a0.B(),$async$FN)
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
return A.b(new A.acP(a1.a,a4,"media",a1.d,a2).yd(m,n,new A.F2(!0,q.c)),$async$FN)
case 12:J.bX(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FN)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUt(r),$async$FN)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dS(a6,new B.chi(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b3e(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FN)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUt(r),$async$FN)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FN,w)},
b3e(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b3e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a99(t),$async$b3e)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.chg(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a9a(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3e,w)},
OU(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OU=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a99("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OU)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aP(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.B()){x=5
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
return A.b(B.b3f(k,a0),$async$OU)
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
return A.b(B.b3k(h),$async$OU)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.X5(g,a0),$async$OU)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.aa(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.chj(),q),n)
d=A.B(new A.X(r,new B.chk(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cJ(d,0,A.dx(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a9a("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OU)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OU,w)},
b3f(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b3f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aP(h),r=y.f,q=0
case 3:if(!u.B()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a1(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iGc(k,j)
C.d.u(s,i)
x=5
return A.b(B.E7(l,m,"Received via My Code",t,e,i),$async$b3f)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUt(s),$async$b3f)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3f,w)},
chl:function chl(){},
chm:function chm(){},
chn:function chn(){},
chh:function chh(){},
chi:function chi(){},
chg:function chg(){},
chj:function chj(){},
chk:function chk(){},
h8k(d,e){var x=0,w=A.j(y.H)
var $async$h8k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ca(A.e4(new B.h8l(e),!1,null,y.H)),$async$h8k)
case 2:return A.h(null,w)}})
return A.i($async$h8k,w)},
bJb(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bJb=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ca(A.e4(new B.h8m(g,e,f),!1,null,y.y)),$async$bJb)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJb,w)},
h8l:function h8l(d){this.a=d},
h8m:function h8m(d,e,f){this.a=d
this.b=e
this.c=f},
WW:function WW(d,e){this.c=d
this.a=e},
aGU:function aGU(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e4h:function e4h(d,e){this.a=d
this.b=e},
X_:function X_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGX:function aGX(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e5q:function e5q(d){this.a=d},
e5r:function e5r(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5t:function e5t(d){this.a=d},
e5u:function e5u(d){this.a=d},
e5v:function e5v(d,e){this.a=d
this.b=e},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5y:function e5y(d){this.a=d},
e5B:function e5B(){},
e5z:function e5z(d){this.a=d},
e5A:function e5A(d,e){this.a=d
this.b=e},
bnM:function bnM(){},
WX:function WX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGV:function aGV(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e4i:function e4i(d){this.a=d},
e4j:function e4j(d){this.a=d},
hmf(d){var x=d.ic
if(x>=0)return C.n.M(x)
return 10},
i9t(d){var x=d.l8
if(x>=0)return x
return 4.99},
i9s(d){var x=d.lS,w=y.N
w=x.j2(x,new B.chp(),w,w)
return w},
hDL(d){var x=d.kK,w=y.N
w=x.j2(x,new B.chq(),w,w)
return w},
b3i(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b3i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b3i)
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
return A.i($async$b3i,w)},
a9e(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9e)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a9e)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9e,w)},
WZ(d){var x=0,w=A.j(y.H),v,u
var $async$WZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WZ)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WZ,w)},
hme(d,e){var x,w,v
if(B.i9t(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i9s(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b3g(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hDL(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hDM(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hDL(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.dw(f,0,0,0,0,0).a).aa().ag())
d.kK=w},
ask(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ask=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$ask)
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
return A.i($async$ask,w)},
asl(d){var x=0,w=A.j(y.H),v,u,t
var $async$asl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ask(d),$async$asl)
case 3:u=f
x=5
return A.b(A.aB(),$async$asl)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$asl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$asl,w)},
asj(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$asj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hmf(d)
if(u<=0){v=!1
x=1
break}if(B.hme(d,e)){v=!1
x=1
break}x=3
return A.b(B.ask(e),$async$asj)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asj,w)},
b3h(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b3h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JP(e,d),$async$b3h)
case 3:if(g){v=-1
x=1
break}u=B.hmf(d)
if(u<=0){v=-1
x=1
break}if(B.hme(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.ask(e),$async$b3h)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3h,w)},
chs(d,e,f){var x=0,w=A.j(y.y),v
var $async$chs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JP(e,d),$async$chs)
case 3:if(h){v=!1
x=1
break}v=B.asj(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chs,w)},
chr(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$chr=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
x=3
return A.b(B.chs(d,u,i.gVx()),$async$chr)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chr,w)},
a9d(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a9d=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
if(i.gVx()){v=!0
x=1
break}if(B.b3g(d,u)){v=!0
x=1
break}x=5
return A.b(A.m_(u,C.VC),$async$a9d)
case 5:x=k?3:4
break
case 3:B.hDM(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a9d)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lz(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.VC,"Doc Share for Organizations"),$async$a9d)
case 7:if(!k){v=!1
x=1
break}B.hDM(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a9d)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9d,w)},
chp:function chp(){},
chq:function chq(){},
h9k(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h9k=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h9k)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fz1.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i3([r],e.c))
s.toString
$.fz1.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9k,w)},
iIu(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fz1.br($.fz1,new B.h9m(d))},
h9m:function h9m(d){this.a=d},
fAI(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fAI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aD(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],f))
s.toString
u=A.no(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jC,null,y.H),$async$fAI)
case 3:C.C4.fo(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mT()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAI,w)},
aio(d,e,f){var x=0,w=A.j(y.H),v
var $async$aio=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fzI.n(0,d,new B.aek(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$aio)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.U.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$aio)
case 2:return A.h(null,w)}})
return A.i($async$aio,w)},
aii(d){return B.iqb(d)},
iqb(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fzI.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aii)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.U.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b8(s,new B.fEx(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.aek(r)
$.fzI.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aii,w)},
Su(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Su=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.Hz.n(0,d,u)
x=3
return A.b(B.T2(d,u),$async$Su)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Su,w)},
aS3(d){return B.iq9(d)},
iq9(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aS3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hz.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.T1(d),$async$aS3)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hz.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aS3)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aL(r)
x=!J.ci(q)?9:10
break
case 9:B.Su(d,q)
x=11
return A.b(J.fO(s,d),$async$aS3)
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
return A.i($async$aS3,w)},
ilY(d){if(d==null)return A.fc(null,y.K)
if(y.J.b(d))return A.fc(new Uint8Array(A.cd(J.eB(d,0,null))),y.K)
if(y.D.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fc(new Uint8Array(A.cd(A.w6(d,0,null))),y.K)
if(y.I.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
return A.fc(null,y.K)},
a3X(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.cb(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fKv(r,t),!1,s)
A.fI(r,"error",new B.fKw(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ij(0,C.Ph,new B.fKx())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3X,w)},
aSo(d,e,f){return B.isA(d,e,f)},
isA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSo=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3X(i),$async$aSo)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.aa(j)
x=11
return A.b(B.T2(o,p),$async$aSo)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.bX(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.aio(k,j,s),$async$aSo)
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
return A.i($async$aSo,w)},
aSn(d,e,f){return B.isz(d,e,f)},
isz(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSn=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSo(d,e,f),$async$aSn)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3X(f),$async$aSn)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hz.n(0,s,r)
$.SO.n(0,s,r)
x=11
return A.b(B.Su(s,r),$async$aSn)
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
return A.i($async$aSn,w)},
CG(d,e,f,g,h,i){return B.i9C(d,e,f,g,h,i)},
i9C(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CG=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jW(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3o(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Su(s,d),$async$CG)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CG)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcq().aL(d)),$async$CG)
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
return A.b(B.BA(e),$async$CG)
case 12:j=a2
J.bX(j,m)
x=13
return A.b(B.HJ(e,j),$async$CG)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CG,w)},
X0(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.BA(d),$async$X0)
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
k=B.hDO(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jW(m,n,k,l,j,"From folder",null,B.b3o(),null)
$.aiN.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3X(o),$async$X0)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hz.n(0,h,g)
$.SO.n(0,h,g)
B.Su(h,g)
x=9
break
case 10:x=11
return A.b(B.aSn(d,m,o),$async$X0)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HJ(d,t),$async$X0)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X0,w)},
hmj(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hmj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hDO(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JQ(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CG(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmj,w)},
JQ(d,e,f,g,h,i){return B.i9B(d,e,f,g,h,i)},
i9B(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JQ=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LG(A.dx(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.B(),$async$JQ)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ci(m)){x=6
break}J.fV(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TD(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kB(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T2(k,l),$async$JQ)
case 11:J.bX(q,k);++p
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
return A.b(j.a2(0),$async$JQ)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T2(k,new Uint8Array(A.cd(n))),$async$JQ)
case 15:J.bX(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aio(r,q,g),$async$JQ)
case 16:f=new B.jW(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3o(),null)
x=17
return A.b(B.BA(d),$async$JQ)
case 17:e=a6
J.bX(e,f)
x=18
return A.b(B.HJ(d,e),$async$JQ)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JQ,w)},
X2(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X2=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiN.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3X(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aii(s),$async$X2)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T1(u[o]),$async$X2)
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
v=A.w6(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SO.h(0,s)
if(i==null)i=$.Hz.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.tf(d,e),$async$X2)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SO.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w6(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X2,w)},
hDO(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
tf(d,e){return B.i9D(d,e)},
i9D(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$tf=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SO.h(0,f)
if(e==null)e=$.Hz.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiN.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3X(s),$async$tf)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hz.n(0,f,r)
$.SO.n(0,f,r)
B.Su(f,r)
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
return A.b(B.aii(f),$async$tf)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aeg(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T1(g[l]),$async$tf)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8W()
if(!C.aI.gar(r)){$.Hz.n(0,f,r)
$.SO.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aS3(f),$async$tf)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SO.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X2(a0,a1,0,g),$async$tf)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.Hz.n(0,f,h)
$.SO.n(0,f,h)
B.Su(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tf,w)},
i9G(d){var x,w,v=$.aiN.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i9H(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i3([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i9E(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asr(d,e,f,g,h){return B.i9F(d,e,f,g,h)},
i9F(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asr=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiN.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3X(s),$async$asr)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.tf(g,e),$async$asr)
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
return A.b(n.iL(d).yd(h,r,new A.F2(!0,e.c)),$async$asr)
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
return A.i($async$asr,w)},
hDQ(d,e,f,g,h){var x,w,v,u,t=$.hDP
$.hDP=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.chD.n(0,t,new B.bAQ(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aeg(u)))
return t},
hmk(d){var x=0,w=A.j(y.H)
var $async$hmk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hmk,w)},
JR(d,e){var $async$JR=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiN.h(0,h)
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
return A.qR(B.X2(d,e,p,o<q?o:q),$async$JR,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qR(A.H4(n),$async$JR,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qR(B.aii("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JR,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qR(B.T1(h[l]),$async$JR,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qR(A.H4(k),$async$JR,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qR(B.tf(d,e),$async$JR,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qR(A.H4(A.w6(j,p,o<i?o:i)),$async$JR,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qR(null,0,w)
case 2:return A.qR(t.at(-1),1,w)}})
var x=0,w=A.hN1($async$JR,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hPa(w)},
b3q(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.chD.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7d(),$async$b3q)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3q,w)},
X1(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chD.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7d(),$async$X1)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aio(r.c,u,r.z),$async$X1)
case 4:t=new B.jW(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3o(),null)
u=r.a
x=5
return A.b(B.BA(u),$async$X1)
case 5:s=f
J.bX(s,t)
x=6
return A.b(B.HJ(u,s),$async$X1)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X1,w)},
a9k(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chD.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajs(u[s]),$async$a9k)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9k,w)},
chF(d,e,f){var x=0,w=A.j(y.H)
var $async$chF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFZ(d,e,f),$async$chF)
case 2:return A.h(null,w)}})
return A.i($async$chF,w)},
chG(d,e,f){var x=0,w=A.j(y.H)
var $async$chG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bG_(d,e,f),$async$chG)
case 2:return A.h(null,w)}})
return A.i($async$chG,w)},
FO(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.BA(d),$async$FO)
case 2:p=g
J.mH(p,new B.chE(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hz.X(0,v)
$.aiN.X(0,e)
x=3
return A.b(B.aii(v),$async$FO)
case 3:u=g
$.fzI.X(0,v)
x=4
return A.b(A.aB(),$async$FO)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FO)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FO)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajs(s[q]),$async$FO)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajs(v),$async$FO)
case 13:x=14
return A.b(B.HJ(d,p),$async$FO)
case 14:return A.h(null,w)}})
return A.i($async$FO,w)},
b3p(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.tf(d,e),$async$b3p)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fAI(t,A.aD(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3p,w)},
BA(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$BA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$BA)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.U.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fKy(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$BA,w)},
HJ(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HJ)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fOU(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.U.au(t,null)),$async$HJ)
case 3:return A.h(null,w)}})
return A.i($async$HJ,w)},
bFZ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BA(d),$async$bFZ)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fIE(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aIa(f))
x=4
return A.b(B.HJ(d,u),$async$bFZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFZ,w)},
bG_(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bG_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BA(d),$async$bG_)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fIF(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cTA(f))
x=4
return A.b(B.HJ(d,u),$async$bG_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bG_,w)},
aek:function aek(d){this.a=d},
fEx:function fEx(){},
fKv:function fKv(d,e){this.a=d
this.b=e},
fKw:function fKw(d){this.a=d},
fKx:function fKx(){},
chE:function chE(d){this.a=d},
bAQ:function bAQ(d,e,f,g,h,i,j,k,l){var _=this
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
fKy:function fKy(){},
fOU:function fOU(){},
fIE:function fIE(d){this.a=d},
fIF:function fIF(d){this.a=d},
a9l(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.chJ())?3:4
break
case 3:x=5
return A.b(B.b3r(d,e),$async$a9l)
case 5:u=g
if(u!=null){t=u.c
B.OW(d,u.b,e,t)}v=u
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
return A.b(B.b3m(s),$async$a9l)
case 10:case 9:if(g){v=new A.RP(1,D.Vf,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.X3(d,e),$async$a9l)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.X8(!0,!0,d,e),$async$a9l)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OW(d,D.B8,e,t)
v=new A.RP(p,D.B8,t)
x=1
break}v=B.chI(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9l,w)},
X3(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$X3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9n(null,d,e),$async$X3)
case 3:p=g
try{u=C.U.aN(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3l(p,d.length,e),$async$X3)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.chG(e,C.d.gH(d).a,r.b),$async$X3)
case 7:case 6:q=r.a
x=8
return A.b(B.OW(d,D.Vf,e,q),$async$X3)
case 8:v=new A.RP(d.length,D.Vf,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
X4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$X4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n_(D.ns)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9m(d,e),$async$X4)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.chB(s,d,e,t),$async$X4)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3m(t),$async$X4)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.tf(e,d),$async$X4)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.X3(A.a([d],y.r),e),$async$X4)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X4,w)},
X6(){var x=0,w=A.j(y.H)
var $async$X6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hmd(),$async$X6)
case 2:x=3
return A.b(B.aUP(),$async$X6)
case 3:return A.h(null,w)}})
return A.i($async$X6,w)},
a9m(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3o()
x=3
return A.b(B.chF(e,d.a,u),$async$a9m)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9m,w)},
OW(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OW=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Vf&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9m(p,f),$async$OW)
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
return A.b(B.chA(o,p,u,f),$async$OW)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.chB(o,p,f,t),$async$OW)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.chz(o,u,p,f),$async$OW)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OW,w)},
b3r(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chH(e,d),$async$b3r)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.X8(!1,!0,d,e),$async$b3r)
case 4:u=g
if(u!=null){t=u.b
v=new A.RP(u.a,D.B8,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3r,w)},
chH(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$chH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X2(d,s,0,1),$async$chH)
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
return A.i($async$chH,w)},
chI(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$chI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9n(null,d,e),$async$chI)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hDN(u)
if(t.length>800){v=null
x=1
break}v=new A.RP(d.length,D.e5N,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chI,w)},
ass(d,e,f){return B.i9K(d,e,f)},
i9K(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ass=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.dc(g,"\ufeff"))g=J.nn(g,1)
x=B.hmi(g)?3:4
break
case 3:x=5
return A.b(B.chC(g),$async$ass)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.dc(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nn(g,13))
try{k=B.FP(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.dc(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nn(g,13))
u=9
x=12
return A.b(B.b3k(q),$async$ass)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X5(p,a0)
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
case 11:case 7:if(J.dc(g,"NGMYDOCSYNC0|"))try{n=B.hmh(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X5(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.dc(g,"N2|")){v=B.JS(C.a.i(J.nn(g,3)),d,a0)
x=1
break}if(J.dc(g,"NGMYDOCSYNC2|")){v=B.JS(C.a.i(J.nn(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c3(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JS(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.X5(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ass,w)},
JS(d,e,f){return B.i9I(d,e,f)},
i9I(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JS=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aD(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c3(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aD(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b3c(r),$async$JS)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b3c(A.cH(s,0,null)),$async$JS)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.che(o,r,a1,n,a2),$async$JS)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.chd(q),$async$JS)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.X5(l,a2),$async$JS)
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
return A.i($async$JS,w)},
a9n(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aP(e),t=y.N,s=y.z
case 3:if(!u.B()){x=4
break}r=u.gP(u)
x=5
return A.b(B.tf(f,r),$async$a9n)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcq().aL(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.U.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9n,w)},
X5(d,e){return B.i9J(d,e)},
i9J(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X5=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.U.aN(0,a2,null)
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
e=J.aP(r)
case 7:if(!e.B()){x=8
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
return A.b(B.CG(i,a3,d,k,l,o),$async$X5)
case 9:h=a5
if(h!=null)J.bX(n,h)
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
return A.i($async$X5,w)},
OV:function OV(d,e){this.a=d
this.b=e},
chJ:function chJ(){},
a3w(d){var x=A.Q(d).ax.a===C.I,w=x?D.akN:D.aid,v=x?D.amD:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajK:C.bn
return new A.aK3([w,s,v,u,t,x?C.fz:C.bU])},
hV4(d,e){var x=e?C.v.j(0.72):C.ba
return A.cf(null,x,!0,null,new B.hdF(e),d,null,!0,!0,y.N)},
cho(d,e,f,g,h,i,j,k,l){return new B.WY(e,l,d,f,k,j,g,h,i,null)},
a0q(d,e,f,g,h,i,j){return new B.bih(g,h,j,e,i,d,f,null)},
hdF:function hdF(d){this.a=d},
a0n:function a0n(d,e){this.c=d
this.a=e},
aCO:function aCO(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhx:function dhx(d){this.a=d},
dhv:function dhv(d){this.a=d},
dhw:function dhw(d){this.a=d},
bAs:function bAs(){},
WY:function WY(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGW:function aGW(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e5o:function e5o(d){this.a=d},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4N:function e4N(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e,f){this.a=d
this.b=e
this.c=f},
e4k:function e4k(d){this.a=d},
e4m:function e4m(d,e){this.a=d
this.b=e},
e4r:function e4r(d,e,f){this.a=d
this.b=e
this.c=f},
e4q:function e4q(d){this.a=d},
e5c:function e5c(d,e){this.a=d
this.b=e},
e5d:function e5d(d){this.a=d},
e4J:function e4J(d,e,f){this.a=d
this.b=e
this.c=f},
e4G:function e4G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4p:function e4p(d){this.a=d},
e4R:function e4R(d){this.a=d},
e4Q:function e4Q(){},
e4v:function e4v(d){this.a=d},
e59:function e59(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e){this.a=d
this.b=e},
e5b:function e5b(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4I:function e4I(d,e){this.a=d
this.b=e},
e52:function e52(d,e){this.a=d
this.b=e},
e4Z:function e4Z(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
e5_:function e5_(){},
e50:function e50(){},
e51:function e51(d,e){this.a=d
this.b=e},
e53:function e53(){},
e54:function e54(d){this.a=d},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4S:function e4S(d){this.a=d},
e4T:function e4T(d){this.a=d},
e4U:function e4U(d){this.a=d},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d){this.a=d},
e4s:function e4s(){},
e4t:function e4t(d){this.a=d},
e4u:function e4u(d,e){this.a=d
this.b=e},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4n:function e4n(d,e,f){this.a=d
this.b=e
this.c=f},
e4K:function e4K(d){this.a=d},
e4L:function e4L(d,e,f){this.a=d
this.b=e
this.c=f},
e4E:function e4E(d,e){this.a=d
this.b=e},
e4A:function e4A(d){this.a=d},
e4x:function e4x(d,e,f){this.a=d
this.b=e
this.c=f},
e4B:function e4B(d){this.a=d},
e4C:function e4C(d){this.a=d},
e4D:function e4D(){},
e4F:function e4F(d,e){this.a=d
this.b=e},
e4y:function e4y(d){this.a=d},
e4w:function e4w(d,e,f){this.a=d
this.b=e
this.c=f},
e4z:function e4z(){},
e4P:function e4P(d){this.a=d},
e4O:function e4O(d,e){this.a=d
this.b=e},
e58:function e58(d,e){this.a=d
this.b=e},
e55:function e55(d){this.a=d},
e56:function e56(d,e){this.a=d
this.b=e},
e57:function e57(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5j:function e5j(d){this.a=d},
e5k:function e5k(d){this.a=d},
e5m:function e5m(){},
e5n:function e5n(d,e){this.a=d
this.b=e},
e5f:function e5f(d,e){this.a=d
this.b=e},
e5g:function e5g(d,e,f){this.a=d
this.b=e
this.c=f},
e5e:function e5e(d,e,f){this.a=d
this.b=e
this.c=f},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5i:function e5i(d,e){this.a=d
this.b=e},
aCL:function aCL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
big:function big(d,e,f){this.c=d
this.d=e
this.a=f},
dht:function dht(){},
dhu:function dhu(){},
aeE:function aeE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhR:function dhR(){},
dhQ:function dhQ(d){this.a=d},
a0p:function a0p(d,e,f){this.c=d
this.d=e
this.a=f},
aCQ:function aCQ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dhN:function dhN(d){this.a=d},
dhO:function dhO(d,e,f){this.a=d
this.b=e
this.c=f},
dhP:function dhP(d,e){this.a=d
this.b=e},
dhL:function dhL(d,e){this.a=d
this.b=e},
dhJ:function dhJ(d){this.a=d},
dhH:function dhH(d){this.a=d},
dhE:function dhE(d){this.a=d},
dhK:function dhK(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhM:function dhM(d){this.a=d},
dhI:function dhI(d){this.a=d},
dhF:function dhF(d){this.a=d},
a0m:function a0m(d,e,f){this.c=d
this.d=e
this.a=f},
aCN:function aCN(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dhq:function dhq(d){this.a=d},
dhp:function dhp(d,e){this.a=d
this.b=e},
dhr:function dhr(d){this.a=d},
dho:function dho(d,e){this.a=d
this.b=e},
dhs:function dhs(d){this.a=d},
dhn:function dhn(d,e){this.a=d
this.b=e},
dhj:function dhj(d){this.a=d},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d,e){this.a=d
this.b=e},
dhm:function dhm(d){this.a=d},
Rn:function Rn(d,e,f){this.c=d
this.d=e
this.a=f},
aCT:function aCT(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
di3:function di3(d){this.a=d},
di4:function di4(d){this.a=d},
di5:function di5(d){this.a=d},
di6:function di6(d){this.a=d},
di7:function di7(d,e){this.a=d
this.b=e},
di8:function di8(d){this.a=d},
dia:function dia(d){this.a=d},
di9:function di9(d){this.a=d},
a0r:function a0r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCR:function aCR(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
di_:function di_(d,e){this.a=d
this.b=e},
di0:function di0(d,e){this.a=d
this.b=e},
dhS:function dhS(d,e,f){this.a=d
this.b=e
this.c=f},
dhT:function dhT(d){this.a=d},
dhU:function dhU(){},
dhZ:function dhZ(){},
dhV:function dhV(d,e){this.a=d
this.b=e},
dhW:function dhW(d,e){this.a=d
this.b=e},
dhX:function dhX(d,e){this.a=d
this.b=e},
dhY:function dhY(d,e){this.a=d
this.b=e},
aeC:function aeC(d,e){this.c=d
this.a=e},
dhi:function dhi(d){this.a=d},
a0l:function a0l(d){this.a=d},
aCM:function aCM(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0s:function a0s(d,e){this.c=d
this.a=e},
aCS:function aCS(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
di2:function di2(d){this.a=d},
di1:function di1(d){this.a=d},
bih:function bih(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i9L(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.ho(v)},
OX(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OX=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OX)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bM),$async$OX)
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
return A.i($async$OX,w)},
a9o(d){return B.i9M(d)},
i9M(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9o)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$a9o)
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
return A.i($async$a9o,w)},
X7(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$X7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OX(),$async$X7)
case 3:s=g
r=J.a1(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9o(s),$async$X7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X7,w)},
X8(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$X8=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$X8)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.chL(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i9L()
t=A.T(u).k("O<1,a9<o,aH>>")
r=A.B(new A.O(u,new B.chM(s),t),t.k("aj.E"))
x=6
return A.b(B.OX(),$async$X8)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9o(q),$async$X8)
case 7:x=8
return A.b(B.a9p(r,u,g,s),$async$X8)
case 8:v=new A.buf(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X8,w)},
ast(d){var x=0,w=A.j(y.y),v,u,t
var $async$ast=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OX(),$async$ast)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ast,w)},
chN(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OX(),$async$chN)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a1(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chN,w)},
a9p(d,e,f,g){return B.i9N(d,e,f,g)},
i9N(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9p=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.asr("media",r,new B.chK(s,e,g),f,q),$async$a9p)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.X7(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9p)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.X7(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9p)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.X7(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9p)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9p,w)},
FP(d,e,f){return B.i9O(d,e,f)},
i9O(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FP=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FP)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ast(b3),$async$FP)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j5,null,g),$async$FP)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ast(b3),$async$FP)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OX(),$async$FP)
case 10:e=c0
g=J.a1(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a1(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ci(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a1(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.B()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a1(a7)
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
l=new A.acP(a8.a,b0,"media",a8.d,a9).DY(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b3d(k,n,o,s,b7),$async$FP)
case 17:j=c0
if(j!=null){J.bX(p,j);++q
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
case 21:if(!g.B()){x=22
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
return A.b(new A.acP(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FP)
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
return A.b(B.a9o(e),$async$FP)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FP,w)},
chL:function chL(){},
chM:function chM(d){this.a=d},
chK:function chK(d,e,f){this.a=d
this.b=e
this.c=f},
aUP(){var x=0,w=A.j(y.H),v,u
var $async$aUP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ilf=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aUP)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aUP)
case 3:u=$.hs0
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aUP)
case 4:$.hs0=$.iuz=$.iuA=null
return A.h(null,w)}})
return A.i($async$aUP,w)},
fOv(d){var x=0,w=A.j(y.H),v,u
var $async$fOv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abx){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fOw(new A.cb(u,y.aY))
x=3
return A.b(u.ij(0,C.he,new B.fOx()),$async$fOv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fOv,w)},
iuw(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i9v(x):x},
hs5(d){var x=0,w=A.j(y.T),v,u,t
var $async$hs5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asv(u)
x=1
break}v=B.hmh(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hs5,w)},
hs4(d){var x=0,w=A.j(y.T),v,u,t
var $async$hs4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.asw(u)
x=1
break}v=B.hmh(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hs4,w)},
h93(d){var x=0,w=A.j(y.T),v
var $async$h93=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asw(d),$async$h93)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h93,w)},
bGX(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bGX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hs4(d),$async$bGX)
case 3:q=f
if(q==null){x=1
break}t=C.U.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a1(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGX,w)},
fBy(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fBy=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X1(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CG(d.a8W(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBy,w)},
HK(d,e,f){return B.iwX(d,e,f)},
iwX(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HK=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hs5(a1),$async$HK)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.U.aN(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a1(u)
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
return A.b($.hX6().aIs(D.dPc,null),$async$HK)
case 4:l=d.hs0=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aeg(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fP6(f,k,new B.fP7(f,a2,k,j,a0,p),a2,j,a0,p,new A.cb(t,y.ch))
x=5
return A.b(l.aai(0,new B.Zm(r,"offer")),$async$HK)
case 5:d=l
x=7
return A.b(l.ao8(0),$async$HK)
case 7:x=6
return A.b(d.aaa(0,a4),$async$HK)
case 6:x=8
return A.b(B.fOv(l),$async$HK)
case 8:x=9
return A.b(l.asx(),$async$HK)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iuw(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.U.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asx(m,h),$async$HK)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hDN(h)
case 11:v=new A.btt(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HK,w)},
fOw:function fOw(d){this.a=d},
fOx:function fOx(){},
fP7:function fP7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fP6:function fP6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fP5:function fP5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iz1(d){switch(d){case"new":return D.eR1
case"checking":return D.eR2
case"connected":return D.eR4
case"completed":return D.eR3
case"failed":return D.eR6
case"disconnected":return D.eR7
case"closed":return D.aUi
case"count":return D.eR5}return D.aUi},
iz2(d){switch(d){case"new":return D.aUj
case"gathering":return D.eR8
case"complete":return D.abx}return D.aUj},
iK6(d){switch(d){case"stable":return D.eR9
case"have-local-offer":return D.eRa
case"have-local-pranswer":return D.eRc
case"have-remote-offer":return D.eRb
case"have-remote-pranswer":return D.eRd
case"closed":return D.aUp}return D.aUp},
iIb(d){switch(d){case"new":return D.aUm
case"connecting":return D.aUn
case"connected":return D.aUo
case"closed":return D.aby
case"disconnected":return D.aUl
case"failed":return D.aUk}return D.aby},
abM:function abM(d,e){this.a=d
this.b=e},
Q6:function Q6(d,e){this.a=d
this.b=e},
Zl:function Zl(d,e){this.a=d
this.b=e},
Q5:function Q5(d,e){this.a=d
this.b=e},
Gj:function Gj(d,e){this.a=d
this.b=e},
cvS:function cvS(){},
hoa(d){var x=new B.Gi()
x.a=d
x.b=!0
return x},
Gi:function Gi(){this.b=this.a=$},
abL:function abL(){},
ax3:function ax3(){},
Zm:function Zm(d,e){this.a=d
this.b=e},
hmd(){var x=0,w=A.j(y.H)
var $async$hmd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hmd,w)},
hmg(d,e,f){var x=0,w=A.j(y.T),v
var $async$hmg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n_(D.ns))){v=null
x=1
break}v=B.h9k(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmg,w)},
hDN(d){var x,w=F.ahE.a6X(C.e3.aL(d),null)
if(w.length===0){x=C.e3.aL(d)
return C.cS.gcq().aL(x)}return C.cS.gcq().aL(w)},
i9u(d){var x,w,v=C.cM.aL(d)
try{x=C.cg.cJ(0,F.ahD.biM(v,!1))
return x}catch(w){x=C.cg.cJ(0,v)
return x}},
hmh(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i9u(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cg.cJ(0,C.cM.aL(x))
return v}catch(u){return x}}return null},
i9v(d){var x,w,v,u,t,s=A.a([],y.s)
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
i9w(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.ho(v)},
b3j(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b3j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bM),$async$b3j)
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
return A.i($async$b3j,w)},
cht(d,e){return B.i9x(d,e)},
i9x(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cht=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cZ,null),$async$cht)
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
return A.i($async$cht,w)},
b3m(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3j(d),$async$b3m)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3m,w)},
b3l(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3l=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i9w()
r=C.a.i(f)
t=C.e3.aL(s)
x=3
return A.b(B.cht(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcq().aL(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3l)
case 3:if(!h){v=null
x=1
break}v=new A.a2v("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3l,w)},
b3k(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b3k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.b3j(o),$async$b3k)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.cg.cJ(0,C.cM.aL(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b3k,w)},
chu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$chu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(O.bHW("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cZ),$async$chu)
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
return A.i($async$chu,w)},
b3n(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JO(),$async$b3n)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3n,w)},
aso(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aso=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$aso)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3n(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aso,w)},
asm(d,e){var x=0,w=A.j(y.H)
var $async$asm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asm)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$asm)
case 2:return A.h(null,w)}})
return A.i($async$asm,w)},
a9g(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9g)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JO(),$async$a9g)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dy(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9f(s),$async$a9g)
case 5:x=6
return A.b(B.asm(f,u),$async$a9g)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9g,w)},
a9h(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9h=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9h)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JO(),$async$a9h)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a1(u)
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
return A.b(B.asm(g,q),$async$a9h)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9f(u),$async$a9h)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9h,w)},
a9i(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9i)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JO(),$async$a9i)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a1(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b3g(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9i)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.U.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9i)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9i,w)},
chv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$chv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$chv)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.U.aN(0,r,null)
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
return A.i($async$chv,w)},
JP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chv(d),$async$JP)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3n(t),$async$JP)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asn(d),$async$JP)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b3g(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asn(d),$async$JP)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JP,w)},
asn(d){var x=0,w=A.j(y.H)
var $async$asn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asn)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asn)
case 2:return A.h(null,w)}})
return A.i($async$asn,w)},
b3o(){var x,w=$.oh(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.ho(v)},
a9j(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hmi(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
chy(d){return B.i9z(d)},
i9z(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$chy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9j(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bM),$async$chy)
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
return A.i($async$chy,w)},
asq(d,e){return B.i9A(d,e)},
i9A(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9j(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cZ,null),$async$asq)
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
return A.i($async$asq,w)},
chA(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9j(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asq(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chA,w)},
chz(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9j(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asq(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chz)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chz,w)},
chB(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$chB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9j(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asq(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chB,w)},
chC(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$chC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hmi(d)){v=null
x=1
break}x=3
return A.b(B.chy(d),$async$chC)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a1(u)
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
return A.i($async$chC,w)},
a9q(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9q)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bM),$async$a9q)
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
return A.i($async$a9q,w)},
asu(d){return B.i9P(d)},
i9P(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asu)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$asu)
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
return A.i($async$asu,w)},
asv(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.dc(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asv)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9q(),$async$asv)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.cg.cJ(0,C.cM.aL(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asu(s),$async$asv)
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
return A.i($async$asv,w)},
asx(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asx)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9q(),$async$asx)
case 4:u=g
t=J.a1(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e3.aL(C.a.i(e))
q.n(0,"answer",C.cS.gcq().aL(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asu(u),$async$asx)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asx,w)},
asw(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$asw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asw)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9q(),$async$asw)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.cg.cJ(0,C.cM.aL(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$asw,w)},
arn(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$arn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bl$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.oE)){v=null
x=1
break}x=3
return A.b(p.lC(e),$async$arn)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hq),$async$arn)
case 7:q=g
o=q
o=o==null?null:J.eX(J.v3(o))
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
return A.i($async$arn,w)},
iGc(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.n.v(w),5,"0")
return v},
h7c(d){return B.iGe(d)},
iGe(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h7c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iL("media").Mo(d,3600),$async$h7c)
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
return A.i($async$h7c,w)},
E7(d,e,f,g,h,i){var x=null
return B.iGb(d,e,f,g,h,i)},
iGb(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E7=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hDQ(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hmk(r),$async$E7)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h7c(o),$async$E7)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9k(r),$async$E7)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aY2)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Iq(A.a([],g))
x=15
return A.b(d.ff(0,A.axS("GET",A.cH(n,0,null))).d9(0,C.HK),$async$E7)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9k(r),$async$E7)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LG(d)
u=19
case 22:x=24
return A.b(d.B(),$async$E7)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3q(r,k),$async$E7)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$E7)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X1(r)
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
return A.b(B.a9k(r),$async$E7)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E7,w)},
aUt(d){return B.iGd(d)},
iGd(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iL("media").X(0,d),$async$aUt)
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
return A.i($async$aUt,w)}},D,Y,N,Z,A_
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
B.cvT.prototype={
aIs(d,e){return this.cV4(d,e)},
cV4(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aIs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kE(A.cz(t)))
t=J.k(u)
v=B.ieE(C.cS.gcq().aL(new A.d1(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aIs,w)}}
B.b8C.prototype={
bFe(d){var x=this,w=x.w
w.onclose=A.hG(new B.cvO(x))
w.onopen=A.hG(new B.cvP(x))
w.onmessage=A.hG(new B.cvQ(x))
w.onbufferedamountlow=A.hG(new B.cvR(x))},
gd5(d){return this.x},
ako(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ako=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gi()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hoa(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$ako)
case 8:v=t.hoa(s.aqw(f,0,null))
x=1
break
case 7:case 4:v=B.hoa(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ako,w)}}
B.b8D.prototype={
bFf(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cvU(x)))
w.addEventListener("icecandidate",A.hG(new B.cvV(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cvW(x)))
w.onicegatheringstatechange=A.hG(new B.cvX(x))
w.addEventListener("signalingstatechange",A.hG(new B.cvY(x)))
if(!$.hwk())w.addEventListener("connectionstatechange",A.hG(new B.cvZ(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cw_(x)))
w.addEventListener("track",A.hG(new B.cw0(x)))},
ao8(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ao8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ej(s.createAnswer(A.kE(A.cz(A.S(y.N,y.z)))),y.aQ),$async$ao8)
case 3:t=f
v=new B.Zm(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao8,w)},
aaa(d,e){return this.bu8(0,e)},
bu8(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aaa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aaa)
case 2:return A.h(null,w)}})
return A.i($async$aaa,w)},
aai(d,e){return this.but(0,e)},
but(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aai=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aai)
case 2:return A.h(null,w)}})
return A.i($async$aai,w)},
asx(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$asx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zm(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asx,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fc(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.aeD.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0o.prototype={
R(){return new B.aCP()},
gd8(){return this.c}}
B.aCP.prototype={
Z(){this.a4()
this.agS()},
agS(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3h(u.e,u.c),$async$agS)
case 2:t=e
if(v.c!=null)v.l(new B.dhB(v,t))
return A.h(null,w)}})
return A.i($async$agS,w)},
S1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$S1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.asj(t.e,t.c,!1),$async$S1)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fGr)
x=1
break}x=4
return A.b(B.a9e(u.a.c,"individual"),$async$S1)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a8w(A.e4(new B.dhy(u),!1,null,y.H)),$async$S1)
case 5:case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
KF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$KF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fMg(o),$async$KF)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9i(o.e,r,s,q),$async$KF)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fDq)
x=1
break}x=5
return A.b(B.a9e(u.a.c,"member"),$async$KF)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a8w(A.e4(new B.dhA(u),!1,null,y.H)),$async$KF)
case 6:case 1:return A.h(v,w)}})
return A.i($async$KF,w)},
zc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a9d(t.e,o,t.f,t.r,t.w,s),$async$zc)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9e(u.a.c,"org_owner"),$async$zc)
case 4:x=5
return A.b(B.aso(u.a.c),$async$zc)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fML(o),$async$zc)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9g(s,t,o,q.c),$async$zc)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fDm)
x=1
break}x=10
return A.b(B.aso(u.a.c),$async$zc)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a8w(A.e4(new B.dhz(u),!1,null,y.H)),$async$zc)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zc,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nY:C.nh,p=B.hmf(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dL,y.m).w
w=A.n(28)
v=A.a([new A.ab(0,C.H,C.aA.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.h_U,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.ho,s,s,s),C.az,D.hkh,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cfG,C.m),s,s,s,s,C.ez,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lW(new B.dhD(),s),C.N,v,C.ed,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.af6(C.f9,C.aGD,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcno(),s),C.af],u))
w.push(new B.af6(C.q8,C.a6P,"Team Member","Sign in with your organization access code + password",t.gcoj(),s))
w.push(C.af)
w.push(new B.af6(C.asn,C.a8y,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcnO(),s))
return A.c6(s,q,A.bn(!0,A.cc(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.af6.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.et,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lR,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.A2,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFv.prototype={}
B.aIM.prototype={}
B.jW.prototype={
n_(d){var x=this.b,w=C.a.os(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gatc(){var x=this.d
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
bie(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jW(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cTA(d){return this.bie(null,d)},
aIa(d){return this.bie(d,null)}}
B.WW.prototype={
R(){return new B.aGU(new A.cB(null,y.A))},
gd8(){return this.c}}
B.aGU.prototype={
Z(){this.a4()
this.agT()},
agT(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CF(u.a.c),$async$agT)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e4h(u,t))
case 1:return A.h(v,w)}})
return A.i($async$agT,w)},
agU(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$agU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fP(new A.fD(s)),$async$agU)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fHm)
case 1:return A.h(v,w)}})
return A.i($async$agU,w)},
a0O(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0O=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.arn(s.d,4),$async$a0O)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_my_code_"+m+".png"),$async$a0O)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ad(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0O,w)},
akP(){var x=0,w=A.j(y.H),v,u=this,t
var $async$akP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aco("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$akP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akP,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nY:C.nh,m=o?C.c:C.a_,l=A.eQ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l3
else if(q.e==null)x=A.at(new A.C(C.ez,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aA.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aA.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AH,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aoS,p,p,1/0)
v=A.n(20)
u=A.a([new A.ab(0,C.H,C.aA.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.ny,w,C.lp,new A.e9(A.q(p,A.qx(p,p,!1,B.i9q(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lp,A.A(A.a([A.E(A.en(I.Eb,p,C.XG,q.gcfk(),p),1),C.ar,A.E(A.df(C.Av,p,C.adW,q.gcfl(),A.bp(C.aA,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a5(1/0,p,A.en(N.a5C,p,D.hfI,q.gcDC(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.apt,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.X_.prototype={
R(){return new B.aGX(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aGX.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JN(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a0P(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JN(u.d.a.a)
if(t==null){u.l(new B.e5q(u))
x=1
break}u.l(new B.e5r(u))
s=u.a
r=s.c
x=3
return A.b(B.a9c(s.d,new B.e5s(u),t,r),$async$a0P)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e5t(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0P,w)},
a4m(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4m=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.l(new B.e5u(r))
u=4
q=J.eH(r.a.d)
x=7
return A.b(B.tf(r.a.c,q),$async$a4m)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e5v(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.akf(p,m,l,j,k),$async$a4m)
case 8:o=e
if(r.c!=null)r.l(new B.e5w(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e5x(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e5y(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4m,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akN:D.aid,h=j?D.amD:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajK:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eQ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([C.aA.j(x?0.12:0.08),C.aA.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.c2v,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.aA],e),k,k),C.m),k,52,k,k,k,k,k,52),C.et,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AH,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vj(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bnM()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.PD,k,k,"",k,!0,new A.b5(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.n(18),new A.ax(C.aA,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e5z(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mS,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.Eh(l.a.d,4)
m=A.B(new A.O(m,new B.e5A(x,new A.aK3(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.kP,A.c("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.er,k,k,k)],r)
if(l.r!=null){u=C.aA.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aA.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fBR)
else q.push(A.V(C.kR,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cZ(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.p(u,k,s,t,k,k,C.m),C.iP,k,k,k,k,C.f2,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bKx,k,k,C.ah),1)
u=l.f?k:l.gcDD()
t=i[3]
s=i[1]
q=A.n(16)
s=A.en(N.a5C,k,D.hgP,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcfm()
t=A.bp(C.aA,k,k,0,C.c,k,C.o5,k,new A.ba(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ab,C.t,A.a([f,v,A.bn(!0,A.l4(new B.e5B(),A.w(A.a([e,new A.C(D.bK0,A.w(A.a([s,C.N,i,C.af,A.bH(l.f?C.ux:D.hf2,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a1Q,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bnM.prototype={
po(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fa(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hl(C.bB,v.length),C.aP)}}
B.WX.prototype={
R(){return new B.aGV()}}
B.aGV.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,C.b9,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bd(x,C.b9,C.aP),v)
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
agV(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agV=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e4i(r))
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
return A.b(B.a9h(p,m,n,o,C.a.i(l).length===0?null:l),$async$agV)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fGY)
s=[1]
x=4
break}p.L(y.q).f.T(D.fFz)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e4j(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agV,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nY:C.nh,q=A.eQ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h7l,s,s,s,1,s,!0),p=A.q(s,D.bC2,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.J7,C.m),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.ca_,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c9V,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.caa,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcfn()
u=A.bp(C.aA,s,s,s,s,C.hu,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.ny,A.bH(t.r?C.ux:C.b00,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.aek.prototype={}
B.bAQ.prototype={
a7d(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8W()))
x=3
return A.b(B.T2(t,s),$async$a7d)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7d,w)},
gd8(){return this.a}}
B.OV.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0n.prototype={
R(){return new B.aCO(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aCO.prototype={
Z(){this.a4()
$.aS.U$.push(new B.dhx(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cft(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3w(d),u=x.a.c,t=u?C.j_:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nY:v.a[0],p=A.n(24),o=A.K(C.aA.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.H,C.aA.j(u?0.25:0.12),C.fF,32)],n),l=A.q(w,Y.av9,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ab(0,C.H,C.aA.j(0.4),C.cy,16)],n),C.aw1,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vj(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAs()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Dl,w,w,"",w,!0,new A.b5(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.n(16),D.b9A),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dhv(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mS,w,w,w,w)
f=f[1]
h=y.p
return A.eC(w,C.L,new A.cR(T.Nc,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xh,A.w(A.a([l,C.aN,k,C.N,j,C.ed,i,C.ed,A.A(A.a([A.E(A.dV(C.oA,new B.dhw(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.ba(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ab(0,C.H,C.aA.j(0.35),C.cN,12)],n),M.RN,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eKl,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcfs(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PL,w,C.db,w,w,w)}}
B.bAs.prototype={
po(d,e){return e.ao2(e.a.toUpperCase())}}
B.WY.prototype={
R(){return new B.aGW(A.a([],y.r),A.aR(y.N))},
gd8(){return this.c}}
B.aGW.prototype={
Z(){var x=this
x.a4()
x.uJ()
x.w=A.d5(C.jY,new B.e5o(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.X6()
this.a3()},
a3a(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OU(u.a.c),$async$a3a)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.BA(u.a.c),$async$a3a)
case 4:u.l(new s.e4M(u,e))
u.iw("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a3a,w)},
uJ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OU(u.a.c),$async$uJ)
case 3:t=e
x=4
return A.b(B.BA(u.a.c),$async$uJ)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e4N(u,s))
if(t>0)u.iw("Received "+A.v(t)+" file(s) via My Code.")
u.P4(u.d)
B.CF(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uJ,w)},
P4(d){return this.bJm(d)},
bJm(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$P4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9m(r,u.a.c),$async$P4)
case 8:p=f
if(u.c==null){x=1
break}new B.e4l(u,r,p).$0()
u.c.ey()
case 7:if(!(C.a.Y(r.c,"video/")||r.n_(D.ns))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.X4(r,u.a.c),$async$P4)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.BA(u.a.c),$async$P4)
case 12:u.l(new o.e4m(u,f))
case 1:return A.h(v,w)}})
return A.i($async$P4,w)},
Pu(d){return this.bPO(d)},
bPO(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Pu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9m(d,u.a.c),$async$Pu)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e4r(u,d,t))
x=6
return A.b(A.fP(new A.fD(t)),$async$Pu)
case 6:u.iw("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fP(new A.fD(r.toUpperCase())),$async$Pu)
case 7:u.iw("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Pu,w)},
iw(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uK(d,e){return this.cOQ(d,e)},
cOQ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e5c(r,e))
u=3
x=6
return A.b(d.$0(),$async$uK)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e5d(r))
$.eY.mT()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uK,w)},
gb_5(){var x=this.a
return x.f||x.r||x.w},
Jq(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Jq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gb_5()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.chr(s,n,r,q,o,t),$async$Jq)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iw("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.h_u(o,u.a.c),$async$Jq)
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
return A.b(B.E9(s,o,r,q,n,t),$async$Jq)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
a2a(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a2a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aso(u.a.c),$async$a2a)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iw("No organization portal found.")
x=1
break}t=J.a1(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a7(t,!1).ca(A.e4(new B.e4J(u,r,q),!1,null,y.H)),$async$a2a)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a2a,w)},
a3l(d){return this.cwY(d)},
cwX(){return this.a3l(1)},
cwY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gb_5()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.asl(u.a.c),$async$a3l)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3l,w)},
aeG(d,e,f){return this.c5V(d,e,f)},
c5V(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aeG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iw(e)
x=1
break}x=3
return A.b(u.uK(new B.e4G(u,d,null,e,f),"Uploading\u2026"),$async$aeG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeG,w)},
bJv(){B.hU_(!1,new B.e4p(this))
return},
cC8(){this.l(new B.e4R(this))},
aCA(){var x=0,w=A.j(y.H),v=this
var $async$aCA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bJv()
return A.h(null,w)}})
return A.i($async$aCA,w)},
aeC(){var x=0,w=A.j(y.H),v=this
var $async$aeC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uK(new B.e4v(v),"Importing\u2026"),$async$aeC)
case 2:return A.h(null,w)}})
return A.i($async$aeC,w)},
U4(d){return this.cO7(d)},
cO7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$U4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n_(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e59(u,d),!1,null,y.H)),$async$U4)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n_(D.TR)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ca(A.e4(new B.e5a(u,d),!1,null,y.H)),$async$U4)
case 8:x=1
break
case 7:x=u.c6D(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ca(A.e4(new B.e5b(u,d),!1,null,y.H)),$async$U4)
case 11:x=1
break
case 10:u.iw("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$U4,w)},
c6D(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.os(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cZJ,C.a.aV(x,w+1).toLowerCase())},
aiy(d){return this.cns(d)},
cns(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n_(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e4H(u,d),!1,null,y.H)),$async$aiy)
case 5:x=1
break
case 4:u.l(new B.e4I(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aiy,w)},
Tp(d){return this.cF6(d)},
cF6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Tp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iw("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$Tp)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uK(new B.e52(u,d),"Preparing QR\u2026"),$async$Tp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Tp,w)},
ale(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ale=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e53(),A.T(t).k("O<1,o>")).fG(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e54(q),s),s.k("M.E"))
if(r.length===0){u.iw("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Tp(r),$async$ale)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ale,w)},
al7(d){return this.cEE(d)},
cEE(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$al7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3w(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e4X(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$al7)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.U4(d)
break
case"qr":u.Tp(A.a([d],y.r))
break
case"send_my_code":u.co8(A.a([d],y.r))
break
case"save":u.akw(d)
break
case"delete":u.Kl(d)
break}case 1:return A.h(v,w)}})
return A.i($async$al7,w)},
Zv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e4s(),A.T(t).k("O<1,o>")).fG(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e4t(q),s),s.k("M.E"))
if(r.length===0){u.iw("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$Zv)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uK(new B.e4u(u,r),"Preparing file\u2026"),$async$Zv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zv,w)},
ajE(d){return this.cve(d)},
cve(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ajE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hV4(d,!1),$async$ajE)
case 3:s=f
r=s==null
q=B.a9j(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iw("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajE,w)},
aiE(){var x=0,w=A.j(y.H),v=this,u
var $async$aiE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h8k(u,v.a.c),$async$aiE)
case 2:return A.h(null,w)}})
return A.i($async$aiE,w)},
bJu(){B.hU_(!1,new B.e4o(this,null))
return},
KE(d,e){return this.co9(d,e)},
b5T(d){return this.KE(null,d)},
co8(d){return this.KE(d,null)},
co9(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$KE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e4K(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y8.cr().aqQ(!0,C.a3J,!1),$async$KE)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.uK(new B.e4L(l,s,r),"Preparing\u2026"),$async$KE)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iw("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iw("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bJb(p,l,e,s.a.c),$async$KE)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iw("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$KE,w)},
JH(d){return this.c5I(d)},
c5I(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$JH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i9p(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b5T(t),$async$JH)
case 8:x=6
break
case 7:u.iw("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iw("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uK(new B.e4E(u,d),"Receiving video\u2026"),$async$JH)
case 11:x=1
break
case 10:x=12
return A.b(u.uK(new B.e4F(u,d),"Receiving\u2026"),$async$JH)
case 12:case 1:return A.h(v,w)}})
return A.i($async$JH,w)},
Fs(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Fs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E3()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ajE(t),$async$Fs)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.JH(s),$async$Fs)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e4P(u),!1,null,y.N)),$async$Fs)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uJ(),$async$Fs)
case 10:x=1
break
case 9:x=11
return A.b(u.JH(C.a.i(r)),$async$Fs)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Fs,w)},
akw(d){return this.cAC(d)},
cAC(d){var x=0,w=A.j(y.H),v=this
var $async$akw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uK(new B.e4O(v,d),"Saving\u2026"),$async$akw)
case 2:return A.h(null,w)}})
return A.i($async$akw,w)},
Kl(d){return this.bSc(d)},
bSc(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Kl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lH(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Kl)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.chu(t),$async$Kl)
case 6:case 5:s=d.a
x=7
return A.b(B.FO(u.a.c,s),$async$Kl)
case 7:u.r.X(0,s)
x=8
return A.b(u.uJ(),$async$Kl)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Kl,w)},
alk(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3w(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e58(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alk)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aiE()
break
case"import":u.aeC()
break}case 1:return A.h(v,w)}})
return A.i($async$alk,w)},
cfq(d){var x=d.c
if(C.a.Y(x,"video/")||d.n_(D.ns))return C.rC
if(C.a.Y(x,"image/")||d.n_(D.TR))return C.vE
if(C.a.q(x,"pdf"))return S.IM
return D.asM},
C(d){var x,w,v=this,u=null,t=B.a3w(d),s=t.a,r=s[0],q=s[3],p=A.aJ(u,u,u,u,C.IZ,u,u,u,new B.e5j(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aJ(u,u,u,u,D.c37,u,u,u,v.e?u:v.gcnP(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcC7()
n.push(A.aJ(u,u,u,u,A.V(v.r.a===x?D.bY5:E.ata,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aJ(u,u,u,u,C.a5y,u,u,u,v.e?u:v.gcfr(),u,u,u,u,"Scan QR",u))
n.push(A.aJ(u,u,u,u,C.pb,u,u,u,v.e?u:v.gb7_(),u,u,u,u,"Upload files",u))
n.push(A.aJ(u,u,u,u,D.c4X,u,u,u,v.e?u:new B.e5k(v),u,u,u,u,"More options",u))
q=A.eQ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lW(new B.e5l(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.aA.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aA.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jK(s[1].j(0.5),u,C.aA,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCL(C.jI,s,!0,t,w?u:v.gcF7(),u),1)
x.push(new A.C(C.aoQ,A.l4(new B.e5m(),A.A(A.a([s,C.ar,A.E(new B.aCL(C.tU,"Export",!1,t,w?u:v.gbW5(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iQ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.big(t,v.e?u:v.gb7_(),u)
else s=A.ku(!0,u,u,new B.e5n(v,t),s,u,D.bID,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ab,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCL.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aA,t,t,0,C.c,t,C.tJ,t,new A.ba(s,C.a1),t,t,t)
return A.df(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tJ,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.en(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.big.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aA.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l4(new B.dht(),new A.C(E.a2Q,A.w(A.a([A.l4(new B.dhu(),A.q(x,A.V(C.A6,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eh,C.hz,x,x,new A.bq(0.86,1,w),s),C.ed,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ed,A.df(C.pb,x,D.hkB,this.d,A.bp(C.aA,x,x,x,C.c,x,C.PJ,x,new A.ba(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.D6,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeE.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.n.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aA.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.n_(D.ns))p=D.dDg
else{p=C.a.Y(p,"image/")||i.n_(D.TR)
n=y.O
p=p?A.a([C.cY,C.aA],n):A.a([C.aO.j(0.85),C.aA.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gatc()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n_(D.ns))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.w(A.a([q,C.at,A.c(C.d.aJ(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aJ(j,j,j,j,A.V(C.h3,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n_(D.ns)))l.push(A.hk2(C.aA,!1,j,j,j,!1,j,j,new B.dhQ(k),j,j,new A.ba(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p7,x[4],j,j,j,j)
l.push(A.aJ(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l4(new B.dhR(),new A.C(C.dX,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a2f,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bb("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0p.prototype={
R(){return new B.aCQ()},
gd8(){return this.c}}
B.aCQ.prototype={
Z(){this.a4()
this.z0()},
t(){B.i9E(this.e)
this.a3()},
z0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$z0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.tf(o.c,o.d),$async$z0)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i9H(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i9G(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dhN(s))
x=1
break}s.l(new B.dhO(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.dhP(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z0,w)},
a4l(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.tf(t.c,t.d),$async$a4l)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fDX)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.akf(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4l)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4l,w)},
c5B(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kt(u,C.z,v,new B.dhL(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h9(t,C.z,v,new B.dhM(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bK
return A.u5(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3w(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aJ(u,u,u,u,C.Ed,u,u,u,v.gbaQ(),u,u,u,u,"Share / save",u))
r=A.eQ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.GB
else{q=v.r
if(q!=null)t=new A.C(C.ez,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c3(w,".heic")||C.a.c3(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ez,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.df(C.Ed,u,D.h2p,v.gbaQ(),A.bp(C.aA,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c5B()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0m.prototype={
R(){return new B.aCN(A.ale(),C.bH,C.bH)},
gd8(){return this.c}}
B.aCN.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iN(new B.dhq(v))
x.gd1N().iN(new B.dhr(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bfW
x.iN(new B.dhs(v))
v.z0()},
z0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$z0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.tf(p.c,p.d),$async$z0)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dhj(s))
x=1
break}x=8
return A.b(s.d.vM(0,new A.a5K(r,s.a.d.c)),$async$z0)
case 8:if(s.c==null){x=1
break}s.l(new B.dhk(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.dhl(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z0,w)},
a0Q(){var x=0,w=A.j(y.H),v=this,u
var $async$a0Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hq(0),$async$a0Q)
case 5:x=3
break
case 4:x=6
return A.b(u.iQ(0),$async$a0Q)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0Q,w)},
aXW(d){var x=d.a
return C.a.aY(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3w(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eQ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.GB
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bZ6,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RN,C.m),o,88,o,o,o,o,o,88)
t=A.lj(C.aA,o,o,m,0,new B.dhm(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aXW(p.w)+" / "+p.aXW(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aA,o,o,o,o,D.fAi,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vH:C.fR,o,o,o,o,o)
x=A.w(A.a([u,C.lp,t,x,C.df,A.df(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcfu(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.q0,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rn.prototype={
R(){return new B.aCT()},
gd8(){return this.c}}
B.aCT.prototype={
Z(){this.a4()
this.Rg()},
Rg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Rg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hmg(o.c,o.d,new B.di3(s)),$async$Rg)
case 7:r=e
if(r==null||r.length===0){s.l(new B.di4(s))
x=1
break}s.e=r
q=Q.ixS(r)
if(q==null){s.l(new B.di5(s))
x=1
break}s.d=q
q.aU(0,s.gb5G())
x=8
return A.b(q.j1(0).d9(0,C.o4),$async$Rg)
case 8:if(s.c==null){x=1
break}s.l(new B.di6(s))
x=9
return A.b(q.qF(0),$async$Rg)
case 9:q.um(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.di7(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Rg,w)},
clX(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.di8(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ec(0,x.gb5G())
w=x.d
if(w!=null)w.t()
B.iIu(x.e)
x.a3()},
agY(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3p(u.c,u.d),$async$agY)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agY,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3w(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eQ(A.a([A.aJ(t,t,t,t,C.ol,t,t,t,u.gcfo(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iC(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.GB
else{q=u.r
if(q!=null)s=new A.C(C.ez,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akD(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.am(C.z,t,C.ab,C.t,A.a([new A.B5(s,t),A.aA(t,A.xS(A.q(t,A.V(q?K.vH:C.fR,C.c,t,t,t,48),C.f,t,t,new A.p(C.ba,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dia(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0r.prototype={
R(){return new B.aCR(new A.cB(null,y.A))}}
B.aCR.prototype={
gcOv(){var x,w,v=this.a
if(v.e!==D.Vg)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcO5(){var x,w,v=this.a
if(v.e!==D.B8)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcOv()
if(x!=null){v.Sr(x)
v.e=A.d5(V.D8,new B.di_(v,x))}w=v.gcO5()
if(w!=null){v.Sq(w)
v.f=A.d5(C.fr,new B.di0(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
Sq(d){return this.cto(d)},
cto(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ast(d),$async$Sq)
case 3:t=f
x=4
return A.b(B.chN(d),$async$Sq)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dhS(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Sq,w)},
Sr(d){return this.ctq(d)},
ctq(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h93(d),$async$Sr)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bGX(t),$async$Sr)
case 4:if(u.c==null){x=1
break}u.l(new B.dhT(u))
u.c.L(y.q).f.T(D.aXC)
case 1:return A.h(v,w)}})
return A.i($async$Sr,w)},
gcba(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcfp(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a44(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a44=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E3()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fH7)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ca(A.e4(new B.dhU(),!1,null,y.N)),$async$a44)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bGX(s),$async$a44)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aXC)
case 1:return A.h(v,w)}})
return A.i($async$a44,w)},
acs(d){return this.bPP(d)},
bPP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fP(new A.fD(C.d.aJ(t,", "))),$async$acs)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acs,w)},
agW(d){return this.bPx(d)},
bPx(d){var x=0,w=A.j(y.H),v=this
var $async$agW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fP(new A.fD(v.a.c)),$async$agW)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fEq)
return A.h(null,w)}})
return A.i($async$agW,w)},
a3Z(d){return this.cAE(d)},
cAE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.arn(s.d,4),$async$a3Z)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_doc_share_qr.png"),$async$a3Z)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ad(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3Z,w)},
gb0l(){var x,w=this.a
if(w.e!==D.Kf)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acp(d){return this.bPI(d)},
bPI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb0l()
if(t==null){x=1
break}x=3
return A.b(A.fP(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$acp)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fG6)
case 1:return A.h(v,w)}})
return A.i($async$acp,w)},
agX(){var x=0,w=A.j(y.H),v=this,u
var $async$agX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.X6(),$async$agX)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agX,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3w(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kf&&i!==D.Vg&&i!==D.B8
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eQ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kf||t===D.Vg||t===D.B8?l:A.aJ(l,l,l,l,C.lI,l,l,l,m.gb3u(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aA.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qx(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcba(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kf){t=C.aA.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcfp(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aJ(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c92,D.hcb,new B.dhV(m,d),l)],p))}if(m.a.e===D.Kf&&m.gb0l()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c5j,D.h8L,new B.dhW(m,d),l)],p))
if(m.a.e===D.B8){x=(m.w?C.dT:C.aA).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GF:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}if(m.a.e===D.Vg){x=(m.r?C.dT:C.aA).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GF:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l),C.af,A.df(D.c0C,l,D.hfm,m.gcB1(),A.bp(C.aA,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pg(i,A.c6(v,w,new A.C(C.ad,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.bb,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(I.Eb,l,C.XG,new B.dhX(m,d),l),1),C.ar,A.E(A.df(C.Av,l,C.adW,new B.dhY(m,d),A.bp(C.aA,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a5(1/0,l,A.bH(U.BL,l,m.gb3u(),A.bp(C.aO,l,l,l,l,C.hu,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dhZ(),y.C)}}
B.aeC.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cc(A.w(A.a([w,C.aN,A.q(x,A.qx(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bH(C.BM,x,new B.dhi(d),x)],u),x,x,C.nO,v,x,x,x,x,D.h1l,x)}}
B.a0l.prototype={
R(){return new B.aCM(A.Ag(C.zo,C.oH,C.vT))}}
B.aCM.prototype={
t(){this.d.t()
this.a3()},
aAZ(d){var x,w,v,u,t
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
return A.c6(A.eQ(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h9i,x,x,x,1,x,!0),C.v,A.Af(this.d,C.c0,this.gaAY()),x,!1,!1,x,x)}}
B.a0s.prototype={
R(){return new B.aCS(A.Ag(C.zo,C.oH,C.vT))},
gd8(){return this.c}}
B.aCS.prototype={
c6F(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aj1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aj1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Nh("text/plain"),$async$aj1)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fH1)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aj1,w)},
adh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hV4(p,!0),$async$adh)
case 3:t=e
p=t==null
s=B.a9j(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fDx)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adh,w)},
t(){this.d.t()
this.a3()},
aAZ(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c6F(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aJ(v,v,v,v,F.auc,v,v,v,w.gbVz(),v,v,v,v,"Enter QR share code",v),t=A.aJ(v,v,v,v,F.a5G,v,v,v,w.gcqE(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eQ(A.a([u,t,A.aJ(v,v,v,v,A.V(w.f?C.rw:R.QV,v,v,v,v,v),v,v,v,new B.di2(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hgj,v,v,v,1,v,!0)
u=A.Af(w.d,C.c0,w.gaAY())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ab,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eQH],s),v),v,!1,!1,v,v)}}
B.bih.prototype={
C(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pT
else x=s.w?C.aA:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aA.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pT:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2W,A.A(A.a([u,C.bc,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eN,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abM.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Q6.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zl.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Q5.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gj.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cvS.prototype={}
B.Gi.prototype={}
B.abL.prototype={}
B.ax3.prototype={}
B.Zm.prototype={}
var z=a.updateTypes(["az<~>()","P(jW)","o(jW)","WY(Z)","~()","a0o(Z)","F(F,jW)","Rn(Z)","~(lN)","cr(Gi)","az<jW?>(@)","WW(Z)","X_(Z)","C(jW)","jW(@)","a9<o,@>(jW)","a0n(Z)","WX(Z)","a0p(Z)","a0m(Z)","a0r(Z)","aeC(Z)","ah<jW>()","a0s(Z)","aeE(Z,F)","a0l(Z)","a9<o,aH>(jW)","cr(Zl)","cr(abL)","az<cr>(Gi)"])
B.cvO.prototype={
$1(d){var x=this.a
x.x=D.aUh
x.y.K(0,D.aUh)},
$S:75}
B.cvP.prototype={
$1(d){var x=this.a
x.x=D.aUg
x.y.K(0,D.aUg)},
$S:75}
B.cvQ.prototype={
$1(d){var x=this.a
x.ako(A.a4f(d.data)).bD(new B.cvN(x),y.b)},
$S:75}
B.cvN.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cvR.prototype={
$1(d){},
$S:75}
B.cvU.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.ieD(d.channel))},
$S:18}
B.cvV.prototype={
$1(d){},
$S:18}
B.cvW.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iz1(w.iceConnectionState)
x.cx=w
if($.hwk())switch(w.a){case 0:x.cy=D.aUm
break
case 1:x.cy=D.aUn
break
case 3:x.cy=D.aUo
break
case 5:x.cy=D.aUk
break
case 6:x.cy=D.aUl
break
case 7:x.cy=D.aby
break
default:break}},
$S:107}
B.cvX.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iz2(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.cvY.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iK6(w.signalingState)},
$S:107}
B.cvZ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iIb(w.connectionState)},
$S:107}
B.cw_.prototype={
$1(d){},
$S:107}
B.cw0.prototype={
$1(d){},
$S:18}
B.fHA.prototype={
$1(d){var x=y.F.a(new A.qO([],[]).og(d.target.result,!1)),w=C.x7.q(x.objectStoreNames,"blobs")
if(!w)C.x4.H_(x,"blobs")},
$S:182}
B.h88.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xJ.fo(this.b)
$.eY.mT()
this.c.$1(d)},
$S:455}
B.h8a.prototype={
$1(d){return this.a.$1(B.iob(this.b,this.c))},
$S:33}
B.h89.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h87.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h8n.prototype={
$1(d){var x=this
return B.hIO(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h8o.prototype={
$1(d){var x=this
return B.hIO(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fKg.prototype={
$1(d){var x=this
return B.cho(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dhB.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dhy.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cho(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dhA.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cho(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dhz.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cho(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dhD.prototype={
$4(d,e,f,g){var x=null
return A.kj(A.A(A.a([A.aJ(x,x,x,x,D.c_d,x,x,x,new B.dhC(d),x,x,x,x,x,x),A.E(A.G4(D.Tz,!0,x,!1,C.a4M,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.Tz,x,g,C.apO,0,e,f)},
$C:"$4",
$R:4,
$S:423}
B.dhC.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fMj.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eW,y.m).w,t=this.a,s=t?C.j_:C.c,r=A.n(28),q=A.q(v,D.bCm,C.f,v,v,D.bbb,v,v,v,v,D.apz,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c3J,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Do,A.w(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aus,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fMh(d),v),1),C.ar,A.E(A.bH(D.h7J,v,new B.fMi(p,x,d),A.bp(C.b7,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HP,v,v,v,v),v)},
$S:62}
B.fMh.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fMi.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fEH)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aFv(v,x))},
$S:0}
B.fMN.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eW,y.m).w,u=x.a,t=u?C.j_:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bCc,C.f,w,w,D.bcH,w,w,w,w,D.apz,w,w,1/0),new A.C(C.Do,A.w(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hrO(u,"Organization name",C.Im,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hrO(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hrO(u,"Member password",C.Ea,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bH(D.hgq,w,new B.fMM(r,q,p,d),A.bp(C.aA,w,w,w,w,C.hu,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HP,w,w,w,w),w)},
$S:62}
B.fMM.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fEM)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aIM(u,x,w))},
$S:0}
B.chf.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a1(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cH(j,0,null):s.b.aZ(j)
u=4
x=7
return A.b(A.wi(p,null).d9(0,C.a1P),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CG(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.chl.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chm.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.chn.prototype={
$1(d){return d.b},
$S:z+2}
B.chh.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chi.prototype={
$1(d){return d.b},
$S:z+2}
B.chg.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.chj.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.chk.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h8l.prototype={
$1(d){return new B.WW(this.a,null)},
$S:z+11}
B.h8m.prototype={
$1(d){return new B.X_(this.a,this.b,this.c,null)},
$S:z+12}
B.e4h.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e5q.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e5r.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e5s.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e5p(x,d))},
$S:2}
B.e5p.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e5t.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5u.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e5v.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e5w.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e5x.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e5y.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5B.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.e5z.prototype={
$1(d){var x=this.a
return x.f?null:x.a0P()},
$S:2}
B.e5A.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aA.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n_(D.TR))s=C.vE
else s=C.a.Y(s,"video/")||d.n_(D.ns)?C.rC:D.asM
x=this.b.a
w=y.p
return new A.C(C.jZ,A.A(A.a([A.q(v,A.V(s,C.aA,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gatc(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e4i.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e4j.prototype={
$0(){return this.a.r=!1},
$S:0}
B.chp.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:102}
B.chq.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:102}
B.h9m.prototype={
$2(d,e){return e===this.a},
$S:260}
B.fEx.prototype={
$1(d){return J.k(d)},
$S:15}
B.fKv.prototype={
$1(d){var x=this.b
B.ilY(C.Ia.ga8Q(this.a)).bD(x.gCK(x),y.H)},
$S:135}
B.fKw.prototype={
$1(d){return this.a.di(0,null)},
$S:135}
B.fKx.prototype={
$0(){return null},
$S:12}
B.chE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fKy.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.h.M(v)
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
B.fOU.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fIE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fIF.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.chJ.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.hdF.prototype={
$1(d){return new B.a0n(this.a,null)},
$S:z+16}
B.dhx.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fL()},
$S:7}
B.dhv.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dhw.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e5o.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a3a()},
$S:10}
B.e4M.prototype={
$0(){var x=J.bKh(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4N.prototype={
$0(){var x=J.bKh(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4l.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e4k(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIa(this.c)}},
$S:0}
B.e4k.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4m.prototype={
$0(){var x=J.bKh(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4r.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e4q(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIa(this.c)}},
$S:0}
B.e4q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5c.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e5d.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e4J.prototype={
$1(d){return new B.WX(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e4G.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Jq(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X0(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uJ(),$async$$0)
case 5:s=J.a1(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a3l(s.gI(t)),$async$$0)
case 8:case 7:r.iw(s.gar(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4p.prototype={
$1(d){this.a.aeG(d,"No files selected.","Added")},
$S:455}
B.e4R.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e4Q(),A.T(x).k("O<1,o>")))},
$S:0}
B.e4Q.prototype={
$1(d){return d.a},
$S:z+2}
B.e4v.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y8.cr().d3O(C.a3J,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.eH(o.a)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.iw("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iw("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ass(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ci(l)){o.iw("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uJ(),$async$$0)
case 9:o.iw("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e59.prototype={
$1(d){return new B.Rn(this.a.a.c,this.b,null)},
$S:z+7}
B.e5a.prototype={
$1(d){return new B.a0p(this.a.a.c,this.b,null)},
$S:z+18}
B.e5b.prototype={
$1(d){return new B.a0m(this.a.a.c,this.b,null)},
$S:z+19}
B.e4H.prototype={
$1(d){return new B.Rn(this.a.a.c,this.b,null)},
$S:z+7}
B.e4I.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e52.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Jq(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9l(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iw("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cwX(),$async$$0)
case 5:x=6
return A.b(p.uJ(),$async$$0)
case 6:r=A.T(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e4Z(p),r),new B.e5_(),r.k("O<aj.E,o>")).c1(0,new B.e50())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e51(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.X6(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4Z.prototype={
$1(d){var x=this.a,w=C.d.bn(x.d,new B.e4Y(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e4Y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5_.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e50.prototype={
$1(d){return d.length!==0},
$S:3}
B.e51.prototype={
$1(d){var x=this.a
return new B.a0r(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e53.prototype={
$1(d){return d.a},
$S:z+2}
B.e54.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e4X.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aA.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gatc(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n_(D.ns)?C.tY:C.oj
p=!x||p.n_(D.ns)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lu,v,v,C.m),C.bm,A.bn(!0,new A.C(C.Dj,A.w(A.a([q,o,t,C.az,B.a0q(!1,u,!1,w,p,new B.e4S(d),v),B.a0q(!1,u,!1,C.jI,"Share via QR",new B.e4T(d),"Letters/numbers QR code"),B.a0q(!1,u,!1,D.a4R,"Send to their Code",new B.e4U(d),"Enter someone else's personal code"),B.a0q(!1,u,!1,C.hP,"Download / save",new B.e4V(d),v),C.aj,B.a0q(!1,u,!0,C.es,"Delete",new B.e4W(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:749}
B.e4S.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e4T.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e4U.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e4V.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e4W.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e4s.prototype={
$1(d){return d.a},
$S:z+2}
B.e4t.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e4u.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9n(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HM(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pW(s.c,s.f),$async$$0)
case 4:u.iw(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4o.prototype={
$1(d){var x=this.a
x.uK(new B.e4n(x,d,this.b),"Preparing\u2026")},
$S:455}
B.e4n.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iw("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X0(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.iw("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bJb(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iw("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4K.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e4L.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aP(v.c.a),r=v.b,q=v.a
case 2:if(!s.B()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hmj(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4E.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HK(new B.e4A(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iw("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e4B(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e4C(s))
case 5:x=8
return A.b(r.b.ij(0,C.HK,new B.e4D()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.iw("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uJ(),$async$$0)
case 9:s.iw("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4A.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e4x(x,d,e))},
$S:207}
B.e4x.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e4B.prototype={
$1(d){return new B.aeC(this.a.a,null)},
$S:z+21}
B.e4C.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e4D.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e4F.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JN(o)!=null?3:4
break
case 3:x=5
return A.b(B.a9b(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b5T(B.JN(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ass(new B.e4y(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.hmi(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iw(q)
x=1
break}x=10
return A.b(s.uJ(),$async$$0)
case 10:o=J.cK(r)
p=o.eW(r,new B.e4z()).gI(0)
s.iw(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4y.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e4w(x,d,e))},
$S:207}
B.e4w.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e4z.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.e4P.prototype={
$1(d){return new B.a0s(this.a.a.c,null)},
$S:z+23}
B.e4O.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3p(u.a.c,v.b),$async$$0)
case 2:t.iw(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e58.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.aA.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lu,x,x,C.m),C.bm,A.bn(!0,new A.C(C.Dj,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.a0q(!0,w,!1,C.mC,"My Code",new B.e55(d),"Your personal code & QR \u2014 others send docs to you"),B.a0q(!1,w,!1,D.a4R,"Send to their Code",new B.e56(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0q(!1,w,!1,W.An,"Import backup",new B.e57(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:749}
B.e55.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e56.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bJu()},
$S:0}
B.e57.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e5l.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JX(D.Tz,x,C.a4M,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.Tz).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:726}
B.e5j.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e5k.prototype={
$0(){this.a.alk()
return null},
$S:0}
B.e5m.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:95}
B.e5n.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeE(e,w,v,this.b,x.e,x.cfq(w),new B.e5f(x,w),new B.e5g(x,v,w),new B.e5h(x,w),new B.e5i(x,w),null)},
$S:z+24}
B.e5f.prototype={
$0(){this.a.aiy(this.b)
return null},
$S:0}
B.e5g.prototype={
$0(){var x=this.a
return x.l(new B.e5e(x,this.b,this.c))},
$S:0}
B.e5e.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5h.prototype={
$0(){this.a.Pu(this.b)
return null},
$S:0}
B.e5i.prototype={
$0(){this.a.al7(this.b)
return null},
$S:0}
B.dht.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:95}
B.dhu.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:111}
B.dhR.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.dhQ.prototype={
$1(d){return this.a.y.$0()},
$S:89}
B.dhN.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dhO.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dhP.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dhL.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h9(w,C.z,x,new B.dhJ(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dhK(this.a))
return C.bK},
$S:152}
B.dhJ.prototype={
$3(d,e,f){$.aS.U$.push(new B.dhH(this.a))
return C.bK},
$S:204}
B.dhH.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhE(x))},
$S:7}
B.dhE.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dhK.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhG(x))},
$S:7}
B.dhG.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dhM.prototype={
$3(d,e,f){$.aS.U$.push(new B.dhI(this.a))
return C.bK},
$S:204}
B.dhI.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhF(x))},
$S:7}
B.dhF.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dhq.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhp(x,d))},
$S:1830}
B.dhp.prototype={
$0(){return this.a.f=this.b===C.wg},
$S:0}
B.dhr.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dho(x,d))},
$S:7}
B.dho.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dhs.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhn(x,d))},
$S:7}
B.dhn.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dhj.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dhk.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dhl.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dhm.prototype={
$1(d){return this.a.d.Oo(0,A.dw(0,0,0,C.h.S(d),0,0))},
$S:6}
B.di3.prototype={
$0(){var x=this.a.a
return B.tf(x.c,x.d)},
$S:1831}
B.di4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.di5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.di6.prototype={
$0(){return this.a.f=!1},
$S:0}
B.di7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.di8.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dia.prototype={
$0(){var x=this.a
x.l(new B.di9(x))},
$S:0}
B.di9.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hq(0)
else x.qF(0)},
$S:0}
B.di_.prototype={
$1(d){return this.a.Sr(this.b)},
$S:10}
B.di0.prototype={
$1(d){return this.a.Sq(this.b)},
$S:10}
B.dhS.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dhT.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dhU.prototype={
$1(d){return D.hSy},
$S:z+25}
B.dhZ.prototype={
$2(d,e){if(d)B.X6()},
$S:133}
B.dhV.prototype={
$0(){return this.a.acs(this.b)},
$S:0}
B.dhW.prototype={
$0(){return this.a.acp(this.b)},
$S:0}
B.dhX.prototype={
$0(){return this.a.agW(this.b)},
$S:0}
B.dhY.prototype={
$0(){return this.a.a3Z(this.b)},
$S:0}
B.dhi.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.di2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qJ(),$async$$0)
case 2:u.l(new B.di1(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.di1.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.chL.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.chM.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aD(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.chK.prototype={
$2(d,e){return this.bpS(d,e)},
bpS(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.X7(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1832}
B.fOw.prototype={
$1(d){if(d===D.abx&&(this.a.a.a&30)===0)this.a.h6(0)},
$S:z+27}
B.fOx.prototype={
$0(){},
$S:12}
B.fP7.prototype={
brw(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fBy(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hDQ(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.brw(d,e)},
$S:560}
B.fP6.prototype={
$1(d){var x=this
d.b=new B.fP5(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fP5.prototype={
$1(d){return this.brv(d)},
brv(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b3q(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.U.aN(0,n,null)
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
return A.b(B.fBy(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a9k(m),$async$$1)
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
x(v=B.aCP.prototype,"gcno","S1",0)
x(v,"gcoj","KF",0)
x(v,"gcnO","zc",0)
x(v=B.aGU.prototype,"gcfk","agU",0)
x(v,"gcfl","a0O",0)
x(v,"gcDC","akP",0)
x(v=B.aGX.prototype,"gcfm","a0P",0)
x(v,"gcDD","a4m",0)
x(B.aGV.prototype,"gcfn","agV",0)
x(B.aCO.prototype,"gcfs","cft",4)
x(v=B.aGW.prototype,"gcnP","a2a",0)
x(v,"gcC7","cC8",4)
x(v,"gb7_","aCA",0)
x(v,"gcF7","ale",0)
x(v,"gbW5","Zv",0)
x(v,"gcfr","Fs",0)
x(B.aCQ.prototype,"gbaQ","a4l",0)
x(B.aCN.prototype,"gcfu","a0Q",0)
x(v=B.aCT.prototype,"gb5G","clX",4)
x(v,"gcfo","agY",0)
x(v=B.aCR.prototype,"gcB1","a44",0)
x(v,"gb3u","agX",0)
w(B.aCM.prototype,"gaAY","aAZ",8)
x(v=B.aCS.prototype,"gcqE","aj1",0)
x(v,"gbVz","adh",0)
w(v,"gaAY","aAZ",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aH,[B.cvS,B.abL,B.ax3,B.aFv,B.aIM,B.jW,B.aek,B.bAQ,B.Gi,B.Zm])
w(B.cvT,B.cvS)
w(B.b8C,B.abL)
x(A.hq,[B.cvO,B.cvP,B.cvQ,B.cvN,B.cvR,B.cvU,B.cvV,B.cvW,B.cvX,B.cvY,B.cvZ,B.cw_,B.cw0,B.fHA,B.h88,B.h8a,B.h89,B.h8n,B.h8o,B.fKg,B.dhy,B.dhA,B.dhz,B.dhD,B.fMj,B.fMN,B.chf,B.chm,B.chn,B.chi,B.chg,B.chj,B.chk,B.h8l,B.h8m,B.e5s,B.e5B,B.e5z,B.e5A,B.fEx,B.fKv,B.fKw,B.chE,B.fKy,B.fOU,B.fIE,B.fIF,B.chJ,B.hdF,B.dhx,B.dhv,B.e5o,B.e4k,B.e4q,B.e4J,B.e4p,B.e4Q,B.e59,B.e5a,B.e5b,B.e4H,B.e4Z,B.e4Y,B.e5_,B.e50,B.e51,B.e53,B.e54,B.e4X,B.e4s,B.e4t,B.e4o,B.e4K,B.e4B,B.e4z,B.e4P,B.e58,B.e5l,B.e5m,B.dht,B.dhu,B.dhR,B.dhQ,B.dhL,B.dhJ,B.dhH,B.dhK,B.dhM,B.dhI,B.dhq,B.dhr,B.dhs,B.dhm,B.di_,B.di0,B.dhU,B.chL,B.chM,B.fOw,B.fP6,B.fP5])
w(B.b8D,B.ax3)
x(A.j_,[B.h87,B.dhB,B.dhC,B.fMh,B.fMi,B.fMM,B.e4h,B.e5q,B.e5r,B.e5p,B.e5t,B.e5u,B.e5v,B.e5w,B.e5x,B.e5y,B.e4i,B.e4j,B.fKx,B.dhw,B.e4M,B.e4N,B.e4l,B.e4m,B.e4r,B.e5c,B.e5d,B.e4G,B.e4R,B.e4v,B.e4I,B.e52,B.e4S,B.e4T,B.e4U,B.e4V,B.e4W,B.e4u,B.e4n,B.e4L,B.e4E,B.e4x,B.e4C,B.e4D,B.e4F,B.e4w,B.e4O,B.e55,B.e56,B.e57,B.e5j,B.e5k,B.e5f,B.e5g,B.e5e,B.e5h,B.e5i,B.dhN,B.dhO,B.dhP,B.dhE,B.dhG,B.dhF,B.dhp,B.dho,B.dhn,B.dhj,B.dhk,B.dhl,B.di3,B.di4,B.di5,B.di6,B.di7,B.di8,B.dia,B.di9,B.dhS,B.dhT,B.dhV,B.dhW,B.dhX,B.dhY,B.dhi,B.di2,B.di1,B.fOx])
x(A.ln,[B.aeD,B.OV,B.abM,B.Q6,B.Zl,B.Q5,B.Gj])
x(A.af,[B.a0o,B.WW,B.X_,B.WX,B.a0n,B.WY,B.a0p,B.a0m,B.Rn,B.a0r,B.a0l,B.a0s])
x(A.ai,[B.aCP,B.aGU,B.aGX,B.aGV,B.aCO,B.aGW,B.aCQ,B.aCN,B.aCT,B.aCR,B.aCM,B.aCS])
x(A.aw,[B.af6,B.aCL,B.big,B.aeE,B.aeC,B.bih])
x(A.j0,[B.chl,B.chh,B.chp,B.chq,B.h9m,B.e4A,B.e4y,B.e5n,B.dhZ,B.chK,B.fP7])
x(A.jq,[B.bnM,B.bAs])})()
A.jj(b.typeUniverse,JSON.parse('{"b8C":{"abL":[]},"b8D":{"ax3":[]},"a0o":{"af":[],"x":[]},"aCP":{"ai":["a0o"]},"af6":{"aw":[],"x":[]},"WW":{"af":[],"x":[]},"X_":{"af":[],"x":[]},"aGU":{"ai":["WW"]},"aGX":{"ai":["X_"]},"bnM":{"jq":[]},"WX":{"af":[],"x":[]},"aGV":{"ai":["WX"]},"a0n":{"af":[],"x":[]},"WY":{"af":[],"x":[]},"aeE":{"aw":[],"x":[]},"a0p":{"af":[],"x":[]},"a0m":{"af":[],"x":[]},"Rn":{"af":[],"x":[]},"a0r":{"af":[],"x":[]},"aeC":{"aw":[],"x":[]},"a0l":{"af":[],"x":[]},"a0s":{"af":[],"x":[]},"aCO":{"ai":["a0n"]},"bAs":{"jq":[]},"aGW":{"ai":["WY"]},"aCL":{"aw":[],"x":[]},"big":{"aw":[],"x":[]},"aCQ":{"ai":["a0p"]},"aCN":{"ai":["a0m"]},"aCT":{"ai":["Rn"]},"aCR":{"ai":["a0r"]},"aCM":{"ai":["a0l"]},"aCS":{"ai":["a0s"]},"bih":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n0"),k:x("Nf()"),o:x("bl<o,o>"),F:x("rR"),g:x("az<jW?>"),x:x("az<~>"),V:x("N<ab>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jW>"),w:x("N<+file,name(ml,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jq>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<F>"),G:x("bm"),A:x("cB<ai<af>>"),n:x("ah<jW>"),j:x("ah<@>"),I:x("ah<F>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("ip"),e:x("iOb"),af:x("Fv"),U:x("jW"),b:x("cr"),C:x("aH"),aK:x("x1"),ab:x("Gi"),br:x("ax3"),v:x("Zm"),N:x("o"),X:x("bq<H>"),Q:x("mx"),D:x("dG"),aw:x("bb<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cb<ah<jW>>"),aW:x("cb<dG?>"),aY:x("cb<~>"),cx:x("aeD"),b1:x("bo<ah<jW>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFv"),bG:x("aIM"),q:x("l5"),B:x("q9<Gi>"),c6:x("q9<abM>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bm?"),_:x("ah<jW>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jW?"),R:x("aH?"),c:x("Zm?"),d:x("+answerQr,transfer(o,az<ah<jW>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,F)?"),L:x("+fileCount,mode,qrPayload(F,OV,o)?"),aX:x("+fileCount,qrPayload,token(F,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aek?"),bk:x("aFv?"),ag:x("aIM?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b9A=new A.ax(C.aA,2,C.r,-1)
D.cdI=new A.a6(C.a5,C.a9,C.w,C.a6P,null,null)
D.bbb=new A.p(null,null,null,C.n0,null,D.cdI,C.m)
D.bcH=new A.p(null,null,null,C.n0,null,E.J7,C.m)
D.aid=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajK=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akN=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amD=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h2h=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hhp=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FQ,null,null,null,null,null,null,null,null,null)
D.dtq=x([D.h2h,C.aj,D.hhp],y.p)
D.bC2=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dtq,null)
D.hm0=new A.D("Create your organization",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h6U=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FQ,null,null,null,null,null,null,null,null,null)
D.dMa=x([D.hm0,C.aj,D.h6U],y.p)
D.bCc=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dMa,null)
D.hi3=new A.D("Team Member sign-in",null,C.fT,null,null,null,null,null,null,null,null,null)
D.haV=new A.D("Enter the access code and password from your organization.",null,H.FQ,null,null,null,null,null,null,null,null,null)
D.dJE=x([D.hi3,C.aj,D.haV],y.p)
D.bCm=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dJE,null)
D.bID=new A.R(16,10,16,28)
D.bK0=new A.R(20,0,20,16)
D.bKx=new A.R(20,8,20,16)
D.apz=new A.R(24,22,24,20)
D.a4R=new A.a_(63394,"MaterialIcons",!1)
D.asM=new A.a_(63515,"MaterialIcons",!1)
D.bY5=new A.a_(983813,"MaterialIcons",!1)
D.bVb=new A.a_(62867,"MaterialIcons",!1)
D.bZ6=new A.ae(D.bVb,44,C.c,null,null,null)
D.c_d=new A.ae(C.kn,null,C.ac,null,null,null)
D.c0C=new A.ae(C.jJ,18,null,null,null,null)
D.c2v=new A.ae(D.a4R,26,C.c,null,null,null)
D.c37=new A.ae(C.E1,null,null,null,null,null)
D.c3J=new A.ae(C.E7,null,null,null,null,null)
D.c4X=new A.ae(A_.a50,null,null,null,null,null)
D.c5j=new A.ae(C.i4,16,null,null,null,null)
D.c92=new A.ae(C.tX,16,null,null,null,null)
D.bZo=new A.ae(C.mC,null,null,null,null,null)
D.c9V=new A.ed(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZo,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4h=new A.ae(C.Im,null,null,null,null,null)
D.ca_=new A.ed(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c4h,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZL=new A.ae(C.Ea,null,null,null,null,null)
D.caa=new A.ed(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.d_o=x([C.fz,C.b7,C.aA],y.O)
D.cfG=new A.a6(C.aw,C.aD,C.w,D.d_o,null,null)
D.cZJ=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Tz=x([C.fz,C.aA],y.O)
D.TR=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ns=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dDg=x([C.nb,C.aA],y.O)
D.eCL={iceServers:0}
D.aOK={urls:0}
D.dQ7=new A.bl(D.aOK,["stun:stun.l.google.com:19302"],y.o)
D.dQ6=new A.bl(D.aOK,["stun:stun1.l.google.com:19302"],y.o)
D.dhH=x([D.dQ7,D.dQ6],A.as("N<a9<o,o>>"))
D.dPc=new A.bl(D.eCL,[D.dhH],A.as("bl<o,@>"))
D.Kf=new B.OV(0,"lanDirect")
D.Vf=new B.OV(1,"cloudStash")
D.e5N=new B.OV(2,"inlineInstant")
D.Vg=new B.OV(3,"webrtcLink")
D.B8=new B.OV(4,"videoCloud")
D.hho=new A.D("Receive file",null,C.nF,null,null,null,null,null,null,null,null,null)
D.cPd=x([E.auB,C.aa,D.hho],y.p)
D.fv8=new A.c_(C.aJ,C.bb,C.i,C.l,null,C.p,null,0,D.cPd,null)
D.eKl=new A.C(C.cq,D.fv8,null)
D.fTv=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.JC,null,null,null)
D.h2V=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fTv,null,C.K,null,null,null,null,null,null,null)
D.eJu=new A.C(C.zG,D.h2V,null)
D.bhh=new A.cq(C.z,null,null,D.eJu,null)
D.eQH=new A.cS(0,null,0,28,null,null,D.bhh,null)
D.eR0=new B.abM(0,"RTCDataChannelConnecting")
D.aUg=new B.abM(1,"RTCDataChannelOpen")
D.aUh=new B.abM(3,"RTCDataChannelClosed")
D.eR1=new B.Gj(0,"RTCIceConnectionStateNew")
D.eR2=new B.Gj(1,"RTCIceConnectionStateChecking")
D.eR3=new B.Gj(2,"RTCIceConnectionStateCompleted")
D.eR4=new B.Gj(3,"RTCIceConnectionStateConnected")
D.eR5=new B.Gj(4,"RTCIceConnectionStateCount")
D.eR6=new B.Gj(5,"RTCIceConnectionStateFailed")
D.eR7=new B.Gj(6,"RTCIceConnectionStateDisconnected")
D.aUi=new B.Gj(7,"RTCIceConnectionStateClosed")
D.aUj=new B.Zl(0,"RTCIceGatheringStateNew")
D.eR8=new B.Zl(1,"RTCIceGatheringStateGathering")
D.abx=new B.Zl(2,"RTCIceGatheringStateComplete")
D.aby=new B.Q5(0,"RTCPeerConnectionStateClosed")
D.aUk=new B.Q5(1,"RTCPeerConnectionStateFailed")
D.aUl=new B.Q5(2,"RTCPeerConnectionStateDisconnected")
D.aUm=new B.Q5(3,"RTCPeerConnectionStateNew")
D.aUn=new B.Q5(4,"RTCPeerConnectionStateConnecting")
D.aUo=new B.Q5(5,"RTCPeerConnectionStateConnected")
D.eR9=new B.Q6(0,"RTCSignalingStateStable")
D.eRa=new B.Q6(1,"RTCSignalingStateHaveLocalOffer")
D.eRb=new B.Q6(2,"RTCSignalingStateHaveRemoteOffer")
D.eRc=new B.Q6(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eRd=new B.Q6(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aUp=new B.Q6(5,"RTCSignalingStateClosed")
D.fAi=new A.av(160,48)
D.bix=new A.fp(2,null,null,null,null,C.aA,null,null,null,null)
D.fBR=new A.a5(16,16,D.bix,null)
D.h6e=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fDm=new A.b3(D.h6e,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.he_=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fDq=new A.b3(D.he_,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hn4=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fDx=new A.b3(D.hn4,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5O=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fDX=new A.b3(D.h5O,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hif=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aXC=new A.b3(D.hif,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjL=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fEq=new A.b3(D.hjL,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoB=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new A.b3(D.hoB,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hmu=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fEM=new A.b3(D.hmu,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hnL=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fFz=new A.b3(D.hnL,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4o=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fG6=new A.b3(D.h4o,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hfW=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fGr=new A.b3(D.hfW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h8A=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fGY=new A.b3(D.h8A,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoG=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fH1=new A.b3(D.hoG,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4E=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fH7=new A.b3(D.h4E,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h3h=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fHm=new A.b3(D.h3h,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h_U=new A.D("NGMY DOC SHARE",null,C.aZ5,null,null,null,null,null,null,null,null,null)
D.h1l=new A.D("Show this to sender",null,C.iY,null,null,null,null,null,null,null,null,null)
D.h2p=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h7l=new A.D("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h7J=new A.D("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h8L=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h9i=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcb=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hf2=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.hfm=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hfI=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hgj=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hgq=new A.D("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hgP=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hkh=new A.D("Share files & videos\nwith a scan.",null,C.aZ8,null,null,null,null,null,null,null,null,null)
D.hkB=new A.D("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hSy=new B.a0l(null)
D.aeY=new B.aeD(0,"docShare")
D.aeZ=new B.aeD(1,"gate")
D.Yj=new B.aeD(2,"gateNoIndividual")})();(function staticFields(){$.aRJ=null
$.fz1=function(){var x=y.N
return A.S(x,x)}()
$.Hz=A.S(y.N,y.D)
$.aiN=A.S(y.N,A.as("ml"))
$.SO=A.S(y.N,y.D)
$.fzI=A.S(y.N,A.as("aek"))
$.chD=A.S(y.S,A.as("bAQ"))
$.hDP=1
$.iuA=null
$.iuz=null
$.ilf=null
$.hs0=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iOH","hX6",()=>new B.cvT())
x($,"iMA","hwk",()=>C.a.q(A.by(A.by(A.by(A.I4(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["YUCPqNQ6RziuuzjCk1wD6Y7QiHw="]=a.current})($__dart_deferred_initializers__);