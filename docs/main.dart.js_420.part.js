((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,P,K,Q,R,F,L,G,S,T,E,H,U,V,W,X,Y,M,N,B={cuC:function cuC(){},
i8X(d){var x=null,w=new B.b7C(d,D.eK0,new A.q4(x,x,y.c6),new A.q4(x,x,y.B))
w.bDO(d)
return w},
b7C:function b7C(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cux:function cux(d){this.a=d},
cuy:function cuy(d){this.a=d},
cuz:function cuz(d){this.a=d},
cuw:function cuw(d){this.a=d},
cuA:function cuA(d){this.a=d},
i8Y(d,e){var x=y.N
x=new B.b7D(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDP(d,e)
return x},
b7D:function b7D(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cuD:function cuD(d){this.a=d},
cuE:function cuE(d){this.a=d},
cuF:function cuF(d){this.a=d},
cuG:function cuG(d){this.a=d},
cuH:function cuH(d){this.a=d},
cuI:function cuI(d){this.a=d},
cuJ:function cuJ(d){this.a=d},
cuK:function cuK(d){this.a=d},
hmt(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xw.Hc(x,"ngmy_doc_share_v1",new B.fDF(),1)},
ifN(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ca(d))
if(y.J.b(d))return new Uint8Array(A.ca(J.ey(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ca(A.vW(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ca(d))
if(typeof d=="string")try{x=C.cG.aK(d)
return x}catch(w){return v}return v},
SE(d,e){return B.ivz(d,e)},
ivz(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQP
x=7
return A.b(o==null?$.aQP=B.hmt():o,$async$SE)
case 7:s=g
r=new Uint8Array(A.ca(e))
q=J.my(s,"blobs","readwrite")
C.iQ.mj(J.mx(q,"blobs"),r,d)
x=8
return A.b(J.oM(q),$async$SE)
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
return A.i($async$SE,w)},
SD(d){return B.ivy(d)},
ivy(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQP
x=7
return A.b(o==null?$.aQP=B.hmt():o,$async$SD)
case 7:s=f
r=J.my(s,"blobs","readonly")
x=8
return A.b(C.iQ.xW(J.mx(r,"blobs"),d),$async$SD)
case 8:q=f
x=9
return A.b(J.oM(r),$async$SD)
case 9:o=B.ifN(q)
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
return A.i($async$SD,w)},
aiS(d){return B.ivx(d)},
ivx(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQP
x=7
return A.b(p==null?$.aQP=B.hmt():p,$async$aiS)
case 7:s=f
r=J.my(s,"blobs","readwrite")
C.iQ.GI(J.mx(r,"blobs"),d)
x=8
return A.b(J.oM(r),$async$aiS)
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
return A.i($async$aiS,w)},
fDF:function fDF(){},
iij(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsC(w,v))}return u},
hOu(d,e){var x,w={},v=A.aZA("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h3e(w,v,e)
C.xy.zo(v,"change",new B.h3g(w,v,!1))
C.xy.zo(v,"cancel",new B.h3f(w))
$.eW.mJ()
v.click()
A.bL(C.amQ,new B.h3d(w),y.H)},
h3e:function h3e(d,e,f){this.a=d
this.b=e
this.c=f},
h3g:function h3g(d,e,f){this.a=d
this.b=e
this.c=f},
h3f:function h3f(d){this.a=d},
h3d:function h3d(d){this.a=d},
E0(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV2()?3:4
break
case 3:x=5
return A.b(B.hJ1(e,d,s,!0,!1,f,g,h,!1,i),$async$E0)
case 5:x=1
break
case 4:x=6
return A.b(B.Sg(d,s,f,g,h,i),$async$E0)
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
return A.b(B.Jz(s,d),$async$E0)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fyX(s,d),$async$E0)
case 14:x=12
return A.b(r.hJ1(q,p,o,n,m,l,k,j,a1,i),$async$E0)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cb(A.ea(new B.h3t(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cb(A.ea(new B.h3u(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E0,w)},
Sg(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Sg=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2k(e),$async$Sg)
case 3:u=k
x=4
return A.b(B.arF(d,e,!1),$async$Sg)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jz(e,d),$async$Sg)
case 7:if(k){v=D.aej
x=1
break}x=8
return A.b(B.WB(e),$async$Sg)
case 8:v=t?D.XQ:D.aek
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2i(d,e)){v=D.aej
x=1
break}x=11
return A.b(B.WB(e),$async$Sg)
case 11:v=t?D.XQ:D.aek
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hhe(d,e)){v=D.aej
x=1
break}x=14
return A.b(B.WB(e),$async$Sg)
case 14:v=D.XQ
x=1
break
case 13:v=t?D.XQ:D.aek
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sg,w)},
fyX(d,e){var x=0,w=A.j(y.y),v
var $async$fyX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2i(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2k(d),$async$fyX)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyX,w)},
hJ1(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cb(A.ea(new B.fGl(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hDB(d,e,f,g,h,i,j){return new B.a_U(e,j,d,g,h,i,f,null)},
fIh(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fIh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fIk(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fIh)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fIh,w)},
fIM(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fIM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fIO(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fIM)
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
return A.i($async$fIM,w)},
hmG(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fVU(d,e){var x=0,w=A.j(y.H),v
var $async$fVU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WB(e),$async$fVU)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e7()
case 1:return A.h(v,w)}})
return A.i($async$fVU,w)},
h3t:function h3t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h3u:function h3u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ae5:function ae5(d,e){this.a=d
this.b=e},
fGl:function fGl(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_U:function a_U(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aC6:function aC6(){this.c=this.a=this.d=null},
dfu:function dfu(d,e){this.a=d
this.b=e},
dfr:function dfr(d){this.a=d},
dft:function dft(d){this.a=d},
dfs:function dfs(d){this.a=d},
dfw:function dfw(){},
dfv:function dfv(d){this.a=d},
aez:function aez(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEM:function aEM(d,e){this.a=d
this.b=e},
aI_:function aI_(d,e,f){this.a=d
this.b=e
this.c=f},
fIk:function fIk(d,e,f){this.a=d
this.b=e
this.c=f},
fIi:function fIi(d){this.a=d},
fIj:function fIj(d,e,f){this.a=d
this.b=e
this.c=f},
fIO:function fIO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIN:function fIN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cg3(d,e,f,g,h){return B.i3I(d,e,f,g,h)},
i3I(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cg3=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a2(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hh(r.dP(d,new B.cg4(s,e,h,g,f,q),y.g),y.l),$async$cg3)
case 3:r=p.aR(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg3,w)},
b2f(d,e,f,g,h){return B.i3J(d,e,f,g,h)},
i3J(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2f=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axc("GET",d)
o=A.hdD()
if(o==null)o=new A.MV(A.a([],y.W))
x=7
return A.b(o.fc(0,s).de(0,C.Hu),$async$b2f)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dg(),$async$b2f)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CA(q,h,o,e,f,"Received via QR")
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
return A.i($async$b2f,w)},
b2e(d){return B.i3G(d)},
i3G(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.oN),$async$b2e)
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
return A.i($async$b2e,w)},
cg2(d){return B.i3H(d)},
i3H(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cg2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.r1),$async$cg2)
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
return A.i($async$cg2,w)},
cg4:function cg4(d,e,f,g,h,i){var _=this
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
Jx(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i3O(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jx(C.a.aY(t,u.length))}return null},
i3P(d){var x=B.Jx(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i3K(){var x,w=$.oI(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8D(d){return B.i3L(d)},
i3L(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8D=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bN),$async$a8D)
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
return A.i($async$a8D,w)},
a8E(d,e){return B.i3M(d,e)},
i3M(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8E=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i1(d,e,!1,!1,C.cV,null),$async$a8E)
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
return A.i($async$a8E,w)},
Cz(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cz)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jx(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8F(r),$async$Cz)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8D("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cz)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jx(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cz)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i3K()
x=14
return A.b(B.a8F(m),$async$Cz)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().ag()
x=15
return A.b(B.a8E("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 15:k=f
x=16
return A.b(B.a8E("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cz)
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
return A.i($async$Cz,w)},
a8F(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jx(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8D("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8F)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
a8G(d,e,f,g){return B.i3Q(d,e,f,g)},
i3Q(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8G=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a2(d)
if(g.gar(d)){v=!1
x=1
break}r=B.Jx(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8F(r),$async$a8G)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cga())>1048576||g.aR(d,new B.cgb())){v=B.FB(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8R("myCode",d,a0),$async$a8G)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cv(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FB(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2n(u,g.gJ(d),a0),$async$a8G)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oI().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cgc(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2g(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],i,y.z),q),$async$a8G)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8G,w)},
FB(d,e,f,g,h){return B.i3N(d,e,f,g,h)},
i3N(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FB=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$FB)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cH(a6)
k=l.cD(a6,0,new B.cg6())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oI().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cT.av(99999)
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
a1=B.JB(a9,q)
a0=new A.Lq(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FB)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f5().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nM(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.ach(a1.a,a4,"media",a1.d,a2).xT(m,n,new A.ES(!0,q.c)),$async$FB)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FB)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTx(r),$async$FB)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cg7(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2g(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],e,d),a8),$async$FB)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTx(r),$async$FB)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FB,w)},
b2g(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8D(t),$async$b2g)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cg5(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8E(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2g,w)},
OA(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OA=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8D("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OA)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cv(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aR(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b2h(k,a0),$async$OA)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b2m(h),$async$OA)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WI(g,a0),$async$OA)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cg8(),q),n)
d=A.B(new A.X(r,new B.cg9(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cS(d,0,A.dv(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8E("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OA)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OA,w)},
b2h(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cv(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aR(h),r=y.f,q=0
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
break}i=B.izH(k,j)
C.d.u(s,i)
x=5
return A.b(B.DZ(l,m,"Received via My Code",t,e,i),$async$b2h)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTx(s),$async$b2h)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2h,w)},
cga:function cga(){},
cgb:function cgb(){},
cgc:function cgc(){},
cg6:function cg6(){},
cg7:function cg7(){},
cg5:function cg5(){},
cg8:function cg8(){},
cg9:function cg9(){},
h3q(d,e){var x=0,w=A.j(y.H)
var $async$h3q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cb(A.ea(new B.h3r(e),!1,null,y.H)),$async$h3q)
case 2:return A.h(null,w)}})
return A.i($async$h3q,w)},
bI0(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bI0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cv(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cb(A.ea(new B.h3s(g,e,f),!1,null,y.y)),$async$bI0)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI0,w)},
h3r:function h3r(d){this.a=d},
h3s:function h3s(d,e,f){this.a=d
this.b=e
this.c=f},
Wy:function Wy(d,e){this.c=d
this.a=e},
aG8:function aG8(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e1O:function e1O(d,e){this.a=d
this.b=e},
WC:function WC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGb:function aGb(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e2X:function e2X(d){this.a=d},
e2Y:function e2Y(d){this.a=d},
e2Z:function e2Z(d){this.a=d},
e2W:function e2W(d,e){this.a=d
this.b=e},
e3_:function e3_(d){this.a=d},
e30:function e30(d){this.a=d},
e31:function e31(d,e){this.a=d
this.b=e},
e32:function e32(d,e){this.a=d
this.b=e},
e33:function e33(d,e){this.a=d
this.b=e},
e34:function e34(d){this.a=d},
e37:function e37(){},
e35:function e35(d){this.a=d},
e36:function e36(d,e){this.a=d
this.b=e},
bmH:function bmH(){},
Wz:function Wz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG9:function aG9(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e1P:function e1P(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
hhf(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i3S(d){var x=d.l2
if(x>=0)return x
return 4.99},
i3R(d){var x=d.lK,w=y.N
w=x.iW(x,new B.cge(),w,w)
return w},
hyx(d){var x=d.kE,w=y.N
w=x.iW(x,new B.cgf(),w,w)
return w},
b2k(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2k)
case 7:s=f
r=A.v(p)
r=A.aW(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b2k,w)},
a8I(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8I)
case 4:x=3
return A.b(g.aE("String","ngmy_doc_share_path_"+u,e),$async$a8I)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8I,w)},
WB(d){var x=0,w=A.j(y.H),v,u
var $async$WB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WB)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WB,w)},
hhe(d,e){var x,w,v
if(B.i3S(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i3R(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ce(new A.V(Date.now(),0,!1))},
b2i(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hyx(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ce(new A.V(Date.now(),0,!1))},
hyy(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hyx(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ce(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bL(A.dx(f,0,0,0,0,0).a).ab().ag())
d.kE=w},
arG(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$arG)
case 7:s=f
r=A.v(p)
r=A.es(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$arG,w)},
arH(d){var x=0,w=A.j(y.H),v,u,t
var $async$arH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arG(d),$async$arH)
case 3:u=f
x=5
return A.b(A.aB(),$async$arH)
case 5:x=4
return A.b(f.aE("Int","ngmy_doc_share_usage_"+t,u+1),$async$arH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arH,w)},
arF(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hhf(d)
if(u<=0){v=!1
x=1
break}if(B.hhe(d,e)){v=!1
x=1
break}x=3
return A.b(B.arG(e),$async$arF)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arF,w)},
b2j(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jz(e,d),$async$b2j)
case 3:if(g){v=-1
x=1
break}u=B.hhf(d)
if(u<=0){v=-1
x=1
break}if(B.hhe(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arG(e),$async$b2j)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2j,w)},
cgh(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jz(e,d),$async$cgh)
case 3:if(h){v=!1
x=1
break}v=B.arF(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgh,w)},
cgg(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgg=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgh(d,u,i.gV2()),$async$cgg)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgg,w)},
a8H(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8H=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gV2()){v=!0
x=1
break}if(B.b2i(d,u)){v=!0
x=1
break}x=5
return A.b(A.lT(u,C.V9),$async$a8H)
case 5:x=k?3:4
break
case 3:B.hyy(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8H)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lt(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.V9,"Doc Share for Organizations"),$async$a8H)
case 7:if(!k){v=!1
x=1
break}B.hyy(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8H)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8H,w)},
cge:function cge(){},
cgf:function cgf(){},
h4q(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h4q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h4q)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fva.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i3([r],e.c))
s.toString
$.fva.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h4q,w)},
iBV(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fva.bq($.fva,new B.h4s(d))},
h4s:function h4s(d){this.a=d},
fwQ(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fwQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],f))
s.toString
u=A.nf(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bL(C.jA,null,y.H),$async$fwQ)
case 3:C.BU.fv(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwQ,w)},
ahM(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fvR.n(0,d,new B.adN(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ahM)
case 3:x=2
return A.b(h.aE("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahM)
case 2:return A.h(null,w)}})
return A.i($async$ahM,w)},
ahG(d){return B.ikd(d)},
ikd(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fvR.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ahG)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cv(s)){v=null
x=1
break}o=J.b8(s,new B.fAD(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adN(r)
$.fvR.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahG,w)},
S6(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$S6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ca(e))
$.Hl.n(0,d,u)
x=3
return A.b(B.SE(d,u),$async$S6)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S6,w)},
aR9(d){return B.ikb(d)},
ikb(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aR9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hl.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SD(d),$async$aR9)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hl.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aR9)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aK(r)
x=!J.cv(q)?9:10
break
case 9:B.S6(d,q)
x=11
return A.b(J.fT(s,d),$async$aR9)
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
return A.i($async$aR9,w)},
ige(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ca(J.ey(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ca(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ca(A.vW(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ca(d)),y.K)
return A.f8(null,y.K)},
a3q(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bG,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.fGx(r,t),!1,s)
A.fG(r,"error",new B.fGy(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.OW,new B.fGz())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3q,w)},
aRu(d,e,f){return B.imA(d,e,f)},
imA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRu=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3q(i),$async$aRu)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SE(o,p),$async$aRu)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahM(k,j,s),$async$aRu)
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
return A.i($async$aRu,w)},
aRt(d,e,f){return B.imz(d,e,f)},
imz(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRt=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRu(d,e,f),$async$aRt)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3q(f),$async$aRt)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hl.n(0,s,r)
$.Sp.n(0,s,r)
x=11
return A.b(B.S6(s,r),$async$aRt)
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
return A.i($async$aRt,w)},
CA(d,e,f,g,h,i){return B.i40(d,e,f,g,h,i)},
i40(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CA=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jS(p,q,o,n,new A.V(Date.now(),0,!1).ab().ag(),a0,f,B.b2q(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.S6(s,d),$async$CA)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CA)
case 10:r=a2
x=11
return A.b(r.aE("String",s,C.cQ.gcp().aK(d)),$async$CA)
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
return A.b(B.Bu(e),$async$CA)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Hv(e,j),$async$CA)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CA,w)},
WD(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WD=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bu(d),$async$WD)
case 3:t=a1
s=e.length,r=J.cH(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cT.av(99999)
n=p.b
l=o.type
l.toString
k=B.hyA(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().ag()
i=new B.jS(m,n,k,l,j,"From folder",null,B.b2q(),null)
$.aib.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3q(o),$async$WD)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hl.n(0,h,g)
$.Sp.n(0,h,g)
B.S6(h,g)
x=9
break
case 10:x=11
return A.b(B.aRt(d,m,o),$async$WD)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hv(d,t),$async$WD)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WD,w)},
hhj(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hhj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hyA(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JA(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CA(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhj,w)},
JA(d,e,f,g,h,i){return B.i4_(d,e,f,g,h,i)},
i4_(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JA=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cT.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lq(A.dv(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JA)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cv(m)){x=6
break}J.ha(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ca(J.Td(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kt(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SE(k,l),$async$JA)
case 11:J.c6(q,k);++p
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
return A.b(j.a1(0),$async$JA)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SE(k,new Uint8Array(A.ca(n))),$async$JA)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahM(r,q,g),$async$JA)
case 16:f=new B.jS(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().ag(),a2,null,B.b2q(),null)
x=17
return A.b(B.Bu(d),$async$JA)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hv(d,e),$async$JA)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JA,w)},
WF(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WF=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aib.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3q(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahG(s),$async$WF)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SD(u[o]),$async$WF)
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
case 5:i=$.Sp.h(0,s)
if(i==null)i=$.Hl.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t6(d,e),$async$WF)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.Sp.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vW(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WF,w)},
hyA(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t6(d,e){return B.i41(d,e)},
i41(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t6=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Sp.h(0,f)
if(e==null)e=$.Hl.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aib.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3q(s),$async$t6)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hl.n(0,f,r)
$.Sp.n(0,f,r)
B.S6(f,r)
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
return A.b(B.ahG(f),$async$t6)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adI(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SD(g[l]),$async$t6)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a89()
if(!C.aI.gar(r)){$.Hl.n(0,f,r)
$.Sp.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aR9(f),$async$t6)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.Sp.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WF(a0,a1,0,g),$async$t6)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.ca(i))
$.Hl.n(0,f,h)
$.Sp.n(0,f,h)
B.S6(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t6,w)},
i44(d){var x,w,v=$.aib.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i45(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i3([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i42(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arN(d,e,f,g,h){return B.i43(d,e,f,g,h)},
i43(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arN=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aib.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3q(s),$async$arN)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t6(g,e),$async$arN)
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
return A.b(n.iE(d).xT(h,r,new A.ES(!0,e.c)),$async$arN)
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
return A.i($async$arN,w)},
hyC(d,e,f,g,h){var x,w,v,u,t=$.hyB
$.hyB=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cgs.n(0,t,new B.bzH(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adI(u)))
return t},
hhk(d){var x=0,w=A.j(y.H)
var $async$hhk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hhk,w)},
JB(d,e){var $async$JB=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aib.h(0,h)
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
return A.qK(B.WF(d,e,p,o<q?o:q),$async$JB,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qK(A.GS(n),$async$JB,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qK(B.ahG("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JB,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qK(B.SD(h[l]),$async$JB,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qK(A.GS(k),$async$JB,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qK(B.t6(d,e),$async$JB,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qK(A.GS(A.vW(j,p,o<i?o:i)),$async$JB,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qK(null,0,w)
case 2:return A.qK(t.at(-1),1,w)}})
var x=0,w=A.hHK($async$JB,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hJN(w)},
b2s(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cgs.h(0,d)
if(t==null||J.cv(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6r(),$async$b2s)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2s,w)},
WE(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgs.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6r(),$async$WE)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahM(r.c,u,r.z),$async$WE)
case 4:t=new B.jS(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().ag(),r.f,r.r,B.b2q(),null)
u=r.a
x=5
return A.b(B.Bu(u),$async$WE)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hv(u,s),$async$WE)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WE,w)},
a8O(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgs.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiS(u[s]),$async$a8O)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a5(0)
case 1:return A.h(v,w)}})
return A.i($async$a8O,w)},
cgu(d,e,f){var x=0,w=A.j(y.H)
var $async$cgu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEO(d,e,f),$async$cgu)
case 2:return A.h(null,w)}})
return A.i($async$cgu,w)},
cgv(d,e,f){var x=0,w=A.j(y.H)
var $async$cgv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEP(d,e,f),$async$cgv)
case 2:return A.h(null,w)}})
return A.i($async$cgv,w)},
FC(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bu(d),$async$FC)
case 2:p=g
J.nd(p,new B.cgt(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hl.X(0,v)
$.aib.X(0,e)
x=3
return A.b(B.ahG(v),$async$FC)
case 3:u=g
$.fvR.X(0,v)
x=4
return A.b(A.aB(),$async$FC)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FC)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FC)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiS(s[q]),$async$FC)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiS(v),$async$FC)
case 13:x=14
return A.b(B.Hv(d,p),$async$FC)
case 14:return A.h(null,w)}})
return A.i($async$FC,w)},
b2r(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t6(d,e),$async$b2r)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fwQ(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2r,w)},
Bu(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bu)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fGA(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bu,w)},
Hv(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$Hv)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fKR(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aE("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$Hv)
case 3:return A.h(null,w)}})
return A.i($async$Hv,w)},
bEO(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bEO)
case 3:u=h
t=J.cH(u)
s=t.bl(u,new B.fEJ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aH9(f))
x=4
return A.b(B.Hv(d,u),$async$bEO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEO,w)},
bEP(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bEP)
case 3:u=h
t=J.cH(u)
s=t.bl(u,new B.fEK(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRr(f))
x=4
return A.b(B.Hv(d,u),$async$bEP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEP,w)},
adN:function adN(d){this.a=d},
fAD:function fAD(){},
fGx:function fGx(d,e){this.a=d
this.b=e},
fGy:function fGy(d){this.a=d},
fGz:function fGz(){},
cgt:function cgt(d){this.a=d},
bzH:function bzH(d,e,f,g,h,i,j,k,l){var _=this
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
fGA:function fGA(){},
fKR:function fKR(){},
fEJ:function fEJ(d){this.a=d},
fEK:function fEK(d){this.a=d},
a8P(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cgy())?3:4
break
case 3:x=5
return A.b(B.b2t(d,e),$async$a8P)
case 5:u=g
if(u!=null){t=u.c
B.OC(d,u.b,e,t)}v=u
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
return A.b(B.b2o(s),$async$a8P)
case 10:case 9:if(g){v=new A.Rs(1,D.UN,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WG(d,e),$async$a8P)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WL(!0,!0,d,e),$async$a8P)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OC(d,D.AW,e,t)
v=new A.Rs(p,D.AW,t)
x=1
break}v=B.cgx(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8P,w)},
WG(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8R(null,d,e),$async$WG)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cv(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2n(p,d.length,e),$async$WG)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cgv(e,C.d.gH(d).a,r.b),$async$WG)
case 7:case 6:q=r.a
x=8
return A.b(B.OC(d,D.UN,e,q),$async$WG)
case 8:v=new A.Rs(d.length,D.UN,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WG,w)},
WH(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mQ(D.nk)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8Q(d,e),$async$WH)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cgq(s,d,e,t),$async$WH)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2o(t),$async$WH)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t6(e,d),$async$WH)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WG(A.a([d],y.r),e),$async$WH)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WH,w)},
WJ(){var x=0,w=A.j(y.H)
var $async$WJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hhd(),$async$WJ)
case 2:x=3
return A.b(B.aTT(),$async$WJ)
case 3:return A.h(null,w)}})
return A.i($async$WJ,w)},
a8Q(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2q()
x=3
return A.b(B.cgu(e,d.a,u),$async$a8Q)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Q,w)},
OC(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.UN&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8Q(p,f),$async$OC)
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
return A.b(B.cgp(o,p,u,f),$async$OC)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cgq(o,p,f,t),$async$OC)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cgo(o,u,p,f),$async$OC)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OC,w)},
b2t(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgw(e,d),$async$b2t)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WL(!1,!0,d,e),$async$b2t)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rs(u.a,D.AW,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2t,w)},
cgw(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cgw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WF(d,s,0,1),$async$cgw)
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
return A.i($async$cgw,w)},
cgx(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cgx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8R(null,d,e),$async$cgx)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hyz(u)
if(t.length>800){v=null
x=1
break}v=new A.Rs(d.length,D.e__,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgx,w)},
arO(d,e,f){return B.i48(d,e,f)},
i48(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arO=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d9(g,"\ufeff"))g=J.ne(g,1)
x=B.hhi(g)?3:4
break
case 3:x=5
return A.b(B.cgr(g),$async$arO)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d9(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ne(g,13))
try{k=B.FD(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d9(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ne(g,13))
u=9
x=12
return A.b(B.b2m(q),$async$arO)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WI(p,a0)
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
case 11:case 7:if(J.d9(g,"NGMYDOCSYNC0|"))try{n=B.hhh(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WI(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d9(g,"N2|")){v=B.JC(C.a.i(J.ne(g,3)),d,a0)
x=1
break}if(J.d9(g,"NGMYDOCSYNC2|")){v=B.JC(C.a.i(J.ne(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JC(h,d,a0)
x=1
break}if(J.eF(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WI(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arO,w)},
JC(d,e,f){return B.i46(d,e,f)},
i46(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JC=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
r=A.cG(A.v(s)+"/manifest.json",0,null)
q=A.cG(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2e(r),$async$JC)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2e(A.cG(s,0,null)),$async$JC)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cv(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cg3(o,r,a1,n,a2),$async$JC)
case 11:m=a4
x=J.cv(m)?12:13
break
case 12:x=14
return A.b(B.cg2(q),$async$JC)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WI(l,a2),$async$JC)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cv(m)?null:m
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
return A.i($async$JC,w)},
a8R(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8R=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aR(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t6(f,r),$async$a8R)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cQ.gcp().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).ab().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8R,w)},
WI(d,e){return B.i47(d,e)},
i47(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WI=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aR(r)
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
break}i=C.cG.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.CA(i,a3,d,k,l,o),$async$WI)
case 9:h=a5
if(h!=null)J.c6(n,h)
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
return A.i($async$WI,w)},
OB:function OB(d,e){this.a=d
this.b=e},
cgy:function cgy(){},
a3_(d){var x=A.Q(d).ax.a===C.I,w=x?D.ak2:D.ahw,v=x?D.alQ:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aj0:C.bn
return new A.aJf([w,s,v,u,t,x?C.fz:C.bR])},
hPx(d,e){var x=e?C.v.j(0.72):C.b7
return A.ce(null,x,!0,null,new B.h8I(e),d,null,!0,!0,y.N)},
cgd(d,e,f,g,h,i,j,k,l){return new B.WA(e,l,d,f,k,j,g,h,i,null)},
a_W(d,e,f,g,h,i,j){return new B.bhb(g,h,j,e,i,d,f,null)},
h8I:function h8I(d){this.a=d},
a_T:function a_T(d,e){this.c=d
this.a=e},
aC5:function aC5(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dfq:function dfq(d){this.a=d},
dfo:function dfo(d){this.a=d},
dfp:function dfp(d){this.a=d},
bzj:function bzj(){},
WA:function WA(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGa:function aGa(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e2V:function e2V(d){this.a=d},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2j:function e2j(d,e){this.a=d
this.b=e},
e1S:function e1S(d,e,f){this.a=d
this.b=e
this.c=f},
e1R:function e1R(d){this.a=d},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e,f){this.a=d
this.b=e
this.c=f},
e1X:function e1X(d){this.a=d},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2K:function e2K(d){this.a=d},
e2f:function e2f(d,e,f){this.a=d
this.b=e
this.c=f},
e2c:function e2c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1W:function e1W(d){this.a=d},
e2n:function e2n(d){this.a=d},
e2m:function e2m(){},
e21:function e21(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2H:function e2H(d,e){this.a=d
this.b=e},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2v:function e2v(d){this.a=d},
e2u:function e2u(d){this.a=d},
e2w:function e2w(){},
e2x:function e2x(){},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2A:function e2A(){},
e2B:function e2B(d){this.a=d},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2o:function e2o(d){this.a=d},
e2p:function e2p(d){this.a=d},
e2q:function e2q(d){this.a=d},
e2r:function e2r(d){this.a=d},
e2s:function e2s(d){this.a=d},
e1Z:function e1Z(){},
e2_:function e2_(d){this.a=d},
e20:function e20(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e,f){this.a=d
this.b=e
this.c=f},
e2g:function e2g(d){this.a=d},
e2h:function e2h(d,e,f){this.a=d
this.b=e
this.c=f},
e2a:function e2a(d,e){this.a=d
this.b=e},
e26:function e26(d){this.a=d},
e23:function e23(d,e,f){this.a=d
this.b=e
this.c=f},
e27:function e27(d){this.a=d},
e28:function e28(d){this.a=d},
e29:function e29(){},
e2b:function e2b(d,e){this.a=d
this.b=e},
e24:function e24(d){this.a=d},
e22:function e22(d,e,f){this.a=d
this.b=e
this.c=f},
e25:function e25(){},
e2l:function e2l(d){this.a=d},
e2k:function e2k(d,e){this.a=d
this.b=e},
e2F:function e2F(d,e){this.a=d
this.b=e},
e2C:function e2C(d){this.a=d},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2E:function e2E(d){this.a=d},
e2S:function e2S(d){this.a=d},
e2Q:function e2Q(d){this.a=d},
e2R:function e2R(d){this.a=d},
e2T:function e2T(){},
e2U:function e2U(d,e){this.a=d
this.b=e},
e2M:function e2M(d,e){this.a=d
this.b=e},
e2N:function e2N(d,e,f){this.a=d
this.b=e
this.c=f},
e2L:function e2L(d,e,f){this.a=d
this.b=e
this.c=f},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2P:function e2P(d,e){this.a=d
this.b=e},
aC2:function aC2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bha:function bha(d,e,f){this.c=d
this.d=e
this.a=f},
dfm:function dfm(){},
dfn:function dfn(){},
ae6:function ae6(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dfK:function dfK(){},
dfJ:function dfJ(d){this.a=d},
a_V:function a_V(d,e,f){this.c=d
this.d=e
this.a=f},
aC7:function aC7(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dfG:function dfG(d){this.a=d},
dfH:function dfH(d,e,f){this.a=d
this.b=e
this.c=f},
dfI:function dfI(d,e){this.a=d
this.b=e},
dfE:function dfE(d,e){this.a=d
this.b=e},
dfC:function dfC(d){this.a=d},
dfA:function dfA(d){this.a=d},
dfx:function dfx(d){this.a=d},
dfD:function dfD(d){this.a=d},
dfz:function dfz(d){this.a=d},
dfF:function dfF(d){this.a=d},
dfB:function dfB(d){this.a=d},
dfy:function dfy(d){this.a=d},
a_S:function a_S(d,e,f){this.c=d
this.d=e
this.a=f},
aC4:function aC4(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dfj:function dfj(d){this.a=d},
dfi:function dfi(d,e){this.a=d
this.b=e},
dfk:function dfk(d){this.a=d},
dfh:function dfh(d,e){this.a=d
this.b=e},
dfl:function dfl(d){this.a=d},
dfg:function dfg(d,e){this.a=d
this.b=e},
dfc:function dfc(d){this.a=d},
dfd:function dfd(d){this.a=d},
dfe:function dfe(d,e){this.a=d
this.b=e},
dff:function dff(d){this.a=d},
QZ:function QZ(d,e,f){this.c=d
this.d=e
this.a=f},
aCa:function aCa(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dfX:function dfX(d){this.a=d},
dfY:function dfY(d){this.a=d},
dfZ:function dfZ(d){this.a=d},
dg_:function dg_(d){this.a=d},
dg0:function dg0(d,e){this.a=d
this.b=e},
dg1:function dg1(d){this.a=d},
dg3:function dg3(d){this.a=d},
dg2:function dg2(d){this.a=d},
a_X:function a_X(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC8:function aC8(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dfT:function dfT(d,e){this.a=d
this.b=e},
dfU:function dfU(d,e){this.a=d
this.b=e},
dfL:function dfL(d,e,f){this.a=d
this.b=e
this.c=f},
dfM:function dfM(d){this.a=d},
dfN:function dfN(){},
dfS:function dfS(){},
dfO:function dfO(d,e){this.a=d
this.b=e},
dfP:function dfP(d,e){this.a=d
this.b=e},
dfQ:function dfQ(d,e){this.a=d
this.b=e},
dfR:function dfR(d,e){this.a=d
this.b=e},
ae4:function ae4(d,e){this.c=d
this.a=e},
dfb:function dfb(d){this.a=d},
a_R:function a_R(d){this.a=d},
aC3:function aC3(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_Y:function a_Y(d,e){this.c=d
this.a=e},
aC9:function aC9(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dfW:function dfW(d){this.a=d},
dfV:function dfV(d){this.a=d},
bhb:function bhb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i49(){var x,w=$.oI(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
OD(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$OD)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OD)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
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
return A.i($async$OD,w)},
a8S(d){return B.i4a(d)},
i4a(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8S)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cV,null),$async$a8S)
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
return A.i($async$a8S,w)},
WK(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OD(),$async$WK)
case 3:s=g
r=J.a2(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dI(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,d,t)
x=4
return A.b(B.a8S(s),$async$WK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WK,w)},
WL(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.cc(),$async$WL)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.cgA(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i49()
t=A.U(u).k("O<1,a9<m,aE>>")
r=A.B(new A.O(u,new B.cgB(s),t),t.k("aj.E"))
x=6
return A.b(B.OD(),$async$WL)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=7
return A.b(B.a8S(q),$async$WL)
case 7:x=8
return A.b(B.a8T(r,u,g,s),$async$WL)
case 8:v=new A.bt8(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WL,w)},
arP(d){var x=0,w=A.j(y.y),v,u,t
var $async$arP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OD(),$async$arP)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arP,w)},
cgC(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cgC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OD(),$async$cgC)
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
return A.i($async$cgC,w)},
a8T(d,e,f,g){return B.i4b(d,e,f,g)},
i4b(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8T=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arN("media",r,new B.cgz(s,e,g),f,q),$async$a8T)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WK(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8T)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WK(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$a8T)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WK(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8T)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8T,w)},
FD(d,e,f){return B.i4c(d,e,f)},
i4c(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FD=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$FD)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arP(b3),$async$FD)
case 7:if(c0){x=6
break}x=8
return A.b(A.bL(C.j1,null,g),$async$FD)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arP(b3),$async$FD)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OD(),$async$FD)
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
if(!y.j.b(a4)||J.cv(a4)){v=null
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
b0=A.nM(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.ach(a8.a,b0,"media",a8.d,a9).DB(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b2f(k,n,o,s,b7),$async$FD)
case 17:j=c0
if(j!=null){J.c6(p,j);++q
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
a8=A.nM(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.ach(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FD)
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
a0=A.dI(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8S(e),$async$FD)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FD,w)},
cgA:function cgA(){},
cgB:function cgB(d){this.a=d},
cgz:function cgz(d,e,f){this.a=d
this.b=e
this.c=f},
aTT(){var x=0,w=A.j(y.H),v,u
var $async$aTT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ifx=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aTT)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aTT)
case 3:u=$.hmS
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aTT)
case 4:$.hmS=$.ior=$.ios=null
return A.h(null,w)}})
return A.i($async$aTT,w)},
fKs(d){var x=0,w=A.j(y.H),v,u
var $async$fKs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaS){x=1
break}u=new A.bn($.bG,y.d4)
d.c=new B.fKt(new A.c7(u,y.aY))
x=3
return A.b(u.ic(0,C.hb,new B.fKu()),$async$fKs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fKs,w)},
iop(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i3U(x):x},
hmX(d){var x=0,w=A.j(y.T),v,u,t
var $async$hmX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.Y(u,"WR")){v=B.arR(u)
x=1
break}v=B.hhh(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmX,w)},
hmW(d){var x=0,w=A.j(y.T),v,u,t
var $async$hmW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.Y(u,"WR")){v=B.arS(u)
x=1
break}v=B.hhh(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmW,w)},
h49(d){var x=0,w=A.j(y.T),v
var $async$h49=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arS(d),$async$h49)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h49,w)},
bFM(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hmW(d),$async$bFM)
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
return A.i($async$bFM,w)},
fxE(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fxE=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WE(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.CA(d.a89(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxE,w)},
Hx(d,e,f){return B.iqK(d,e,f)},
iqK(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hx=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hmX(a1),$async$Hx)
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
return A.b($.hRy().aHq(D.dM7,null),$async$Hx)
case 4:l=d.hmS=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adI(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bG,y.b1)
l.y=new B.fL3(f,k,new B.fL4(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a9v(0,new B.YY(r,"offer")),$async$Hx)
case 5:d=l
x=7
return A.b(l.anf(0),$async$Hx)
case 7:x=6
return A.b(d.a9n(0,a4),$async$Hx)
case 6:x=8
return A.b(B.fKs(l),$async$Hx)
case 8:x=9
return A.b(l.arD(),$async$Hx)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iop(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arT(m,h),$async$Hx)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hyz(h)
case 11:v=new A.bsm(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hx,w)},
fKt:function fKt(d){this.a=d},
fKu:function fKu(){},
fL4:function fL4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fL3:function fL3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fL2:function fL2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
isP(d){switch(d){case"new":return D.eK1
case"checking":return D.eK2
case"connected":return D.eK4
case"completed":return D.eK3
case"failed":return D.eK6
case"disconnected":return D.eK7
case"closed":return D.aTa
case"count":return D.eK5}return D.aTa},
isQ(d){switch(d){case"new":return D.aTb
case"gathering":return D.eK8
case"complete":return D.aaS}return D.aTb},
iDt(d){switch(d){case"stable":return D.eK9
case"have-local-offer":return D.eKa
case"have-local-pranswer":return D.eKc
case"have-remote-offer":return D.eKb
case"have-remote-pranswer":return D.eKd
case"closed":return D.aTh}return D.aTh},
iBC(d){switch(d){case"new":return D.aTe
case"connecting":return D.aTf
case"connected":return D.aTg
case"closed":return D.aaT
case"disconnected":return D.aTd
case"failed":return D.aTc}return D.aaT},
abe:function abe(d,e){this.a=d
this.b=e},
PJ:function PJ(d,e){this.a=d
this.b=e},
YX:function YX(d,e){this.a=d
this.b=e},
PI:function PI(d,e){this.a=d
this.b=e},
G7:function G7(d,e){this.a=d
this.b=e},
cuB:function cuB(){},
hj4(d){var x=new B.G6()
x.a=d
x.b=!0
return x},
G6:function G6(){this.b=this.a=$},
abd:function abd(){},
awn:function awn(){},
YY:function YY(d,e){this.a=d
this.b=e},
hhd(){var x=0,w=A.j(y.H)
var $async$hhd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hhd,w)},
hhg(d,e,f){var x=0,w=A.j(y.T),v
var $async$hhg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mQ(D.nk))){v=null
x=1
break}v=B.h4q(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhg,w)},
hyz(d){var x,w=F.agX.a6a(C.e0.aK(d),null)
if(w.length===0){x=C.e0.aK(d)
return C.cQ.gcp().aK(x)}return C.cQ.gcp().aK(w)},
i3T(d){var x,w,v=C.cG.aK(d)
try{x=C.cc.cG(0,F.agW.bht(v,!1))
return x}catch(w){x=C.cc.cG(0,v)
return x}},
hhh(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i3T(C.a.aY(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aY(t,w.length)
try{v=C.cc.cG(0,C.cG.aK(x))
return v}catch(u){return x}}return null},
i3U(d){var x,w,v,u,t,s=A.a([],y.s)
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
i3V(){var x,w=$.oI(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2l(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2l)
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
return A.i($async$b2l,w)},
cgi(d,e){return B.i3W(d,e)},
i3W(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgi=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cV,null),$async$cgi)
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
return A.i($async$cgi,w)},
b2o(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2l(d),$async$b2o)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2o,w)},
b2n(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i3V()
r=C.a.i(f)
t=C.e0.aK(s)
x=3
return A.b(B.cgi(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cQ.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$b2n)
case 3:if(!h){v=null
x=1
break}v=new A.a1Z("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2n,w)},
b2m(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2l(o),$async$b2m)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cc.cG(0,C.cG.aK(u))
if(J.je(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2m,w)},
cgj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(P.bGL("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cV),$async$cgj)
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
return A.i($async$cgj,w)},
b2p(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jy(),$async$b2p)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2p,w)},
arK(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arK)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2p(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arK,w)},
arI(d,e){var x=0,w=A.j(y.H)
var $async$arI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arI)
case 3:x=2
return A.b(g.aE("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arI)
case 2:return A.h(null,w)}})
return A.i($async$arI,w)},
a8K(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8K=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8K)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jy(),$async$a8K)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dw(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=5
return A.b(A.a8J(s),$async$a8K)
case 5:x=6
return A.b(B.arI(f,u),$async$a8K)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8K,w)},
a8L(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8L=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8L)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jy(),$async$a8L)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a2(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
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
s.X(u,t)
s.n(u,o,p)
x=8
return A.b(B.arI(g,q),$async$a8L)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8J(u),$async$a8L)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8L,w)},
a8M(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8M=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8M)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jy(),$async$a8M)
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
s=B.b2i(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a8M)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aE("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().ag()],p,p),null)),$async$a8M)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8M,w)},
cgk(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgk)
case 7:s=f
p=A.v(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
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
return A.i($async$cgk,w)},
Jz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgk(d),$async$Jz)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2p(t),$async$Jz)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arJ(d),$async$Jz)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2i(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arJ(d),$async$Jz)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jz,w)},
arJ(d){var x=0,w=A.j(y.H)
var $async$arJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arJ)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arJ)
case 2:return A.h(null,w)}})
return A.i($async$arJ,w)},
b2q(){var x,w=$.oI(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a8N(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hhi(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgn(d){return B.i3Y(d)},
i3Y(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8N(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgn)
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
return A.i($async$cgn,w)},
arM(d,e){return B.i3Z(d,e)},
i3Z(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8N(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cV,null),$async$arM)
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
return A.i($async$arM,w)},
cgp(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgp=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8N(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arM(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cgp)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgp,w)},
cgo(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8N(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arM(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cgo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgo,w)},
cgq(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cgq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8N(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arM(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgq,w)},
cgr(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cgr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hhi(d)){v=null
x=1
break}x=3
return A.b(B.cgn(d),$async$cgr)
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
return A.i($async$cgr,w)},
a8U(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8U=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8U)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8U)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
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
return A.i($async$a8U,w)},
arQ(d){return B.i4d(d)},
i4d(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$arQ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cV,null),$async$arQ)
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
return A.i($async$arQ,w)},
arR(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d9(j,"WR")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arR)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8U(),$async$arR)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cc.cG(0,C.cG.aK(q))
if(J.je(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dI(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().ag())
J.aK(s,j,o)
x=9
return A.b(B.arQ(s),$async$arR)
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
return A.i($async$arR,w)},
arT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.cc(),$async$arT)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8U(),$async$arT)
case 4:u=g
t=J.a2(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dI(A.a1(s,r,q),r,q)
r=C.e0.aK(C.a.i(e))
q.n(0,"answer",C.cQ.gcp().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().ag())
t.n(u,p,q)
x=5
return A.b(B.arQ(u),$async$arT)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arT,w)},
arS(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arS)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8U(),$async$arS)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cc.cG(0,C.cG.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arS,w)},
aqK(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.oq)){v=null
x=1
break}x=3
return A.b(p.lv(e),$async$aqK)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.ho),$async$aqK)
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
return A.i($async$aqK,w)},
izH(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
h2i(d){return B.izJ(d)},
izJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h2i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").LX(d,3600),$async$h2i)
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
return A.i($async$h2i,w)},
DZ(d,e,f,g,h,i){var x=null
return B.izG(d,e,f,g,h,i)},
izG(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DZ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hyC(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hhk(r),$async$DZ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h2i(o),$async$DZ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8O(r),$async$DZ)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWT)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MV(A.a([],g))
x=15
return A.b(d.fc(0,A.axc("GET",A.cG(n,0,null))).de(0,C.Hu),$async$DZ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8O(r),$async$DZ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lq(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DZ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2s(r,k),$async$DZ)
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
case 10:i=B.WE(r)
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
return A.b(B.a8O(r),$async$DZ)
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
aTx(d){return B.izI(d)},
izI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTx)
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
return A.i($async$aTx,w)}},D,Z,I,O,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
P=c[78]
K=c[118]
Q=c[372]
R=c[61]
F=c[364]
L=c[217]
G=c[83]
S=c[329]
T=c[330]
E=c[320]
H=c[120]
U=c[276]
V=c[137]
W=c[86]
X=c[218]
Y=c[327]
M=c[309]
N=c[373]
B=a.updateHolder(c[26],B)
D=c[371]
Z=c[275]
I=c[139]
O=c[303]
A_=c[93]
A0=c[356]
A1=c[101]
B.cuC.prototype={
aHq(d,e){return this.cSW(d,e)},
cSW(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dI(r,s,t)
t.u(0,d)
u=new q(A.kz(A.cx(t)))
t=J.k(u)
v=B.i8Y(C.cQ.gcp().aK(new A.dh(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHq,w)}}
B.b7C.prototype={
bDO(d){var x=this,w=x.w
w.onclose=A.hD(new B.cux(x))
w.onopen=A.hD(new B.cuy(x))
w.onmessage=A.hD(new B.cuz(x))
w.onbufferedamountlow=A.hD(new B.cuA(x))},
gd4(d){return this.x},
aju(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aju=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G6()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hj4(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.el(d.arrayBuffer(),y.af),$async$aju)
case 8:v=t.hj4(s.apT(f,0,null))
x=1
break
case 7:case 4:v=B.hj4(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aju,w)}}
B.b7D.prototype={
bDP(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hD(new B.cuD(x)))
w.addEventListener("icecandidate",A.hD(new B.cuE(x)))
w.addEventListener("iceconnectionstatechange",A.hD(new B.cuF(x)))
w.onicegatheringstatechange=A.hD(new B.cuG(x))
w.addEventListener("signalingstatechange",A.hD(new B.cuH(x)))
if(!$.hr4())w.addEventListener("connectionstatechange",A.hD(new B.cuI(x)))
w.addEventListener("negotiationneeded",A.hD(new B.cuJ(x)))
w.addEventListener("track",A.hD(new B.cuK(x)))},
anf(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.el(s.createAnswer(A.kz(A.cx(A.S(y.N,y.z)))),y.aQ),$async$anf)
case 3:t=f
v=new B.YY(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anf,w)},
a9n(d,e){return this.bsK(0,e)},
bsK(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9n)
case 2:return A.h(null,w)}})
return A.i($async$a9n,w)},
a9v(d,e){return this.bt4(0,e)},
bt4(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9v)
case 2:return A.h(null,w)}})
return A.i($async$a9v,w)},
arD(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YY(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arD,w)},
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
B.ae5.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a_U.prototype={
R(){return new B.aC6()},
gd6(){return this.c}}
B.aC6.prototype={
a_(){this.a3()
this.afY()},
afY(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2j(u.e,u.c),$async$afY)
case 2:t=e
if(v.c!=null)v.l(new B.dfu(v,t))
return A.h(null,w)}})
return A.i($async$afY,w)},
Ry(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ry=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arF(t.e,t.c,!1),$async$Ry)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fz8)
x=1
break}x=4
return A.b(B.a8I(u.a.c,"individual"),$async$Ry)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a7J(A.ea(new B.dfr(u),!1,null,y.H)),$async$Ry)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ry,w)},
Kd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Kd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fIh(o),$async$Kd)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8M(o.e,r,s,q),$async$Kd)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fw7)
x=1
break}x=5
return A.b(B.a8I(u.a.c,"member"),$async$Kd)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a7J(A.ea(new B.dft(u),!1,null,y.H)),$async$Kd)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Kd,w)},
yV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8H(t.e,o,t.f,t.r,t.w,s),$async$yV)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8I(u.a.c,"org_owner"),$async$yV)
case 4:x=5
return A.b(B.arK(u.a.c),$async$yV)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fIM(o),$async$yV)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8K(s,t,o,q.c),$async$yV)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fw3)
x=1
break}x=10
return A.b(B.arK(u.a.c),$async$yV)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a7J(A.ea(new B.dfs(u),!1,null,y.H)),$async$yV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yV,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nO:I.qP,p=B.hhf(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dJ,y.m).w
w=A.n(28)
v=A.a([new A.aa(0,C.H,C.aC.j(0.35),C.h1,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fTs,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hm,s,s,s),C.aA,D.hcJ,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cdZ,C.m),s,s,s,s,C.eI,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lP(new B.dfw(),s),C.O,v,C.ec,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.ak,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aez(C.f3,C.aFD,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclv(),s),C.af],u))
w.push(new B.aez(C.pY,C.a6j,"Team Member","Sign in with your organization access code + password",t.gcmo(),s))
w.push(C.af)
w.push(new B.aez(C.arw,C.a7X,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gclU(),s))
return A.c5(s,q,A.bo(!0,A.cb(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aez.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eI(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.ma,s,s,s),C.au,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.W(V.zT,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEM.prototype={}
B.aI_.prototype={}
B.jS.prototype={
mQ(d){var x=this.b,w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gasj(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.a6(x/1024,1)+" KB"
if(x<1073741824)return C.i.a6(x/1048576,1)+" MB"
return C.i.a6(x/1073741824,2)+" GB"},
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
bgX(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRr(d){return this.bgX(null,d)},
aH9(d){return this.bgX(d,null)}}
B.Wy.prototype={
R(){return new B.aG8(new A.cy(null,y.A))},
gd6(){return this.c}}
B.aG8.prototype={
a_(){this.a3()
this.afZ()},
afZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cz(u.a.c),$async$afZ)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e1O(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afZ,w)},
ag_(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ag_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fB(s)),$async$ag_)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fA3)
case 1:return A.h(v,w)}})
return A.i($async$ag_,w)},
a0e(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0e=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqK(s.d,4),$async$a0e)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0e)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0e,w)},
ajW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abR("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajW)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajW,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nO:I.qP,m=o?C.c:C.a_,l=A.eV(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lq
else if(q.e==null)x=A.at(new A.D(C.eI,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aC.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.F,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,M.Ji,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ak,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,Q.ao3,p,p,1/0)
v=A.n(20)
u=A.a([new A.aa(0,C.H,C.aC.j(0.2),C.ds,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.nq,w,C.lj,new A.e5(A.p(p,A.qs(p,p,!1,B.i3P(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lj,A.A(A.a([A.E(A.eo(K.DW,p,C.Xc,q.gcdG(),p),1),C.ar,A.E(A.db(C.Aj,p,C.adh,q.gcdH(),A.bp(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a6(1/0,p,A.eo(O.a56,p,D.h8d,q.gcBA(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,A_.aoF,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.WC.prototype={
R(){return new B.aGb(new A.au(C.ax,$.az()),A.kn(!0,null,!0,!0,null,null,!1))}}
B.aGb.prototype={
a_(){var x,w
this.a3()
x=this.a.e
w=B.Jx(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
a0f(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jx(u.d.a.a)
if(t==null){u.l(new B.e2X(u))
x=1
break}u.l(new B.e2Y(u))
s=u.a
r=s.c
x=3
return A.b(B.a8G(s.d,new B.e2Z(u),t,r),$async$a0f)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e3_(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0f,w)},
a3A(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3A=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cv(r.a.d)){x=1
break}r.l(new B.e30(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.t6(r.a.c,q),$async$a3A)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e31(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajG(p,m,l,j,k),$async$a3A)
case 8:o=e
if(r.c!=null)r.l(new B.e32(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e33(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e34(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3A,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ak2:D.ahw,h=j?D.alQ:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aj0:C.bn
i=[i,e,h,g,f,j?C.fz:C.bR]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eV(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c0Q,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a7(C.ay,C.aD,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.m),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f9,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,M.Ji,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v9(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmH()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pf,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e35(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mJ,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.HZ(l.a.d,4)
m=A.B(new A.O(m,new B.e36(x,new A.aJf(i)),m.$ti.k("O<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lx,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.dh,p,C.O,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fuA)
else q.push(A.W(C.kM,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b_,new A.o(u,k,s,t,k,k,C.m),C.j0,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJ9,k,k,C.ah),1)
u=l.f?k:l.gcBB()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eo(O.a56,k,D.h9k,u,A.dk(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdI()
t=A.bp(C.aC,k,k,0,C.c,k,C.nW,k,new A.b9(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bo(!0,A.lz(new B.e37(),A.x(A.a([e,new A.D(D.bID,A.x(A.a([s,C.O,i,C.af,A.bI(l.f?C.uj:D.h7z,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cm,C.a1m,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmH.prototype={
pe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fl(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hw(C.bD,v.length),C.aP)}}
B.Wz.prototype={
R(){return new B.aG9()}}
B.aG9.prototype={
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
ag0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ag0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e1P(r))
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
return A.b(B.a8L(p,m,n,o,C.a.i(l).length===0?null:l),$async$ag0)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fzF)
s=[1]
x=4
break}p.K(y.q).f.T(D.fyg)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e1Q(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ag0,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nO:I.qP,q=A.eV(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h_S,s,s,s,1,s,!0),p=A.p(s,D.bAD,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.IV,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8i,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8d,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8t,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdJ()
u=A.bp(C.aC,s,s,s,s,C.hr,s,s,s,s,s,s)
return A.c5(q,r,A.cb(A.x(A.a([p,C.dh,o,C.af,x,C.af,w,C.nq,A.bI(t.r?C.uj:C.aZJ,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adN.prototype={}
B.bzH.prototype={
a6r(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ca(r.a89()))
x=3
return A.b(B.SE(t,s),$async$a6r)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6r,w)},
gd6(){return this.a}}
B.OB.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a_T.prototype={
R(){return new B.aC5(new A.au(C.ax,$.az()),A.kn(!0,null,!0,!0,null,null,!1))}}
B.aC5.prototype={
a_(){this.a3()
$.aU.U$.push(new B.dfq(this))},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
cdP(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a3_(d),u=x.a.c,t=u?C.iV:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nO:v.a[0],p=A.n(24),o=A.K(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.aC.j(u?0.25:0.12),C.h1,32)],n),l=A.p(w,Z.aug,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.aa(0,C.H,C.aC.j(0.4),C.cw,16)],n),C.av6,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.F,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v9(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzj()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.D7,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b8e),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dfo(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mJ,w,w,w,w)
f=f[1]
h=y.p
return A.eG(w,C.L,new A.cQ(U.MT,new A.bP(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x5,A.x(A.a([l,C.aO,k,C.O,j,C.ec,i,C.ec,A.A(A.a([A.E(A.dX(C.oo,new B.dfp(d),A.dk(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.b9(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.o(w,w,w,A.n(14),A.a([new A.aa(0,C.H,C.aC.j(0.35),C.cP,12)],n),N.Rl,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eDp,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcdO(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.M,0,C.p),w),w),w),w,w,w,C.Pn,w,C.dc,w,w,w)}}
B.bzj.prototype={
pe(d,e){return e.an9(e.a.toUpperCase())}}
B.WA.prototype={
R(){return new B.aGa(A.a([],y.r),A.aQ(y.N))},
gd6(){return this.c}}
B.aGa.prototype={
a_(){var x=this
x.a3()
x.uu()
x.w=A.cZ(C.jV,new B.e2V(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WJ()
this.a2()},
a2r(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OA(u.a.c),$async$a2r)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bu(u.a.c),$async$a2r)
case 4:u.l(new s.e2i(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2r,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OA(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bu(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e2j(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OG(u.d)
B.Cz(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
OG(d){return this.bHW(d)},
bHW(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8Q(r,u.a.c),$async$OG)
case 8:p=f
if(u.c==null){x=1
break}new B.e1S(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mQ(D.nk))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WH(r,u.a.c),$async$OG)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bu(u.a.c),$async$OG)
case 12:u.l(new o.e1T(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OG,w)},
P5(d){return this.bOl(d)},
bOl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8Q(d,u.a.c),$async$P5)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e1Y(u,d,t))
x=6
return A.b(A.fM(new A.fB(t)),$async$P5)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fB(r.toUpperCase())),$async$P5)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P5,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cMI(d,e)},
cMI(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e2J(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e2K(r))
$.eW.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaYX(){var x=this.a
return x.f||x.r||x.w},
J_(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYX()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgg(s,n,r,q,o,t),$async$J_)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fVU(o,u.a.c),$async$J_)
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
return A.b(B.E0(s,o,r,q,n,t),$async$J_)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J_,w)},
a1t(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arK(u.a.c),$async$a1t)
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
return A.b(A.a8(t,!1).cb(A.ea(new B.e2f(u,r,q),!1,null,y.H)),$async$a1t)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1t,w)},
a2B(d){return this.cuZ(d)},
cuY(){return this.a2B(1)},
cuZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYX()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arH(u.a.c),$async$a2B)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2B,w)},
adQ(d,e,f){return this.c4m(d,e,f)},
c4m(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uv(new B.e2c(u,d,null,e,f),"Uploading\u2026"),$async$adQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adQ,w)},
bI4(){B.hOu(!1,new B.e1W(this))
return},
cA7(){this.l(new B.e2n(this))},
aBA(){var x=0,w=A.j(y.H),v=this
var $async$aBA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bI4()
return A.h(null,w)}})
return A.i($async$aBA,w)},
adM(){var x=0,w=A.j(y.H),v=this
var $async$adM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e21(v),"Importing\u2026"),$async$adM)
case 2:return A.h(null,w)}})
return A.i($async$adM,w)},
TB(d){return this.cM0(d)},
cM0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mQ(D.nk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cb(A.ea(new B.e2G(u,d),!1,null,y.H)),$async$TB)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mQ(D.Tp)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cb(A.ea(new B.e2H(u,d),!1,null,y.H)),$async$TB)
case 8:x=1
break
case 7:x=u.c54(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cb(A.ea(new B.e2I(u,d),!1,null,y.H)),$async$TB)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TB,w)},
c54(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cXV,C.a.aY(x,w+1).toLowerCase())},
ahE(d){return this.clz(d)},
clz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mQ(D.nk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cb(A.ea(new B.e2d(u,d),!1,null,y.H)),$async$ahE)
case 5:x=1
break
case 4:u.l(new B.e2e(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahE,w)},
SX(d){return this.cD4(d)},
cD4(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pP(t,s.c,s.f),$async$SX)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e2z(u,d),"Preparing QR\u2026"),$async$SX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SX,w)},
akl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e2A(),A.U(t).k("O<1,m>")).fC(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2B(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SX(r),$async$akl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akl,w)},
ake(d){return this.cCC(d)},
cCC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ake=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3_(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2t(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ake)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TB(d)
break
case"qr":u.SX(A.a([d],y.r))
break
case"send_my_code":u.cmd(A.a([d],y.r))
break
case"save":u.ajC(d)
break
case"delete":u.JV(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ake,w)},
YY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e1Z(),A.U(t).k("O<1,m>")).fC(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2_(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pP(t,s.c,s.f),$async$YY)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e20(u,r),"Preparing file\u2026"),$async$YY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YY,w)},
aiK(d){return this.ctg(d)},
ctg(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hPx(d,!1),$async$aiK)
case 3:s=f
r=s==null
q=B.a8N(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiK,w)},
ahK(){var x=0,w=A.j(y.H),v=this,u
var $async$ahK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h3q(u,v.a.c),$async$ahK)
case 2:return A.h(null,w)}})
return A.i($async$ahK,w)},
bI3(){B.hOu(!1,new B.e1V(this,null))
return},
Kc(d,e){return this.cme(d,e)},
b4E(d){return this.Kc(null,d)},
cmd(d){return this.Kc(d,null)},
cme(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Kc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e2g(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y1.cq().apX(!0,C.a3a,!1),$async$Kc)
case 10:r=g
if(r==null||J.cv(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e2h(l,s,r),"Preparing\u2026"),$async$Kc)
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
return A.b(B.bI0(p,l,e,s.a.c),$async$Kc)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Kc,w)},
Jg(d){return this.c49(d)},
c49(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i3O(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4E(t),$async$Jg)
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
return A.b(u.uv(new B.e2a(u,d),"Receiving video\u2026"),$async$Jg)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e2b(u,d),"Receiving\u2026"),$async$Jg)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jg,w)},
F4(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DV()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiK(t),$async$F4)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jg(s),$async$F4)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cb(A.ea(new B.e2l(u),!1,null,y.N)),$async$F4)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$F4)
case 10:x=1
break
case 9:x=11
return A.b(u.Jg(C.a.i(r)),$async$F4)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F4,w)},
ajC(d){return this.cyC(d)},
cyC(d){var x=0,w=A.j(y.H),v=this
var $async$ajC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e2k(v,d),"Saving\u2026"),$async$ajC)
case 2:return A.h(null,w)}})
return A.i($async$ajC,w)},
JV(d){return this.bQI(d)},
bQI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lC(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JV)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgj(t),$async$JV)
case 6:case 5:s=d.a
x=7
return A.b(B.FC(u.a.c,s),$async$JV)
case 7:u.r.X(0,s)
x=8
return A.b(u.uu(),$async$JV)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JV,w)},
akr(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3_(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2F(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akr)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahK()
break
case"import":u.adM()
break}case 1:return A.h(v,w)}})
return A.i($async$akr,w)},
cdM(d){var x=d.c
if(C.a.Y(x,"video/")||d.mQ(D.nk))return C.rl
if(C.a.Y(x,"image/")||d.mQ(D.Tp))return C.vs
if(C.a.q(x,"pdf"))return T.IA
return D.arU},
B(d){var x,w,v=this,u=null,t=B.a3_(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IN,u,u,u,new B.e2Q(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c1r,u,u,u,v.e?u:v.gclV(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcA6()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bWv:E.asi,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a53,u,u,u,v.e?u:v.gcdN(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p1,u,u,u,v.e?u:v.gb5L(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3g,u,u,u,v.e?u:new B.e2R(v),u,u,u,u,"More options",u))
q=A.eV(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lP(new B.e2S(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aC.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aC.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jD(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aC2(C.jG,s,!0,t,w?u:v.gcD5(),u),1)
x.push(new A.D(D.bHm,A.lz(new B.e2T(),A.A(A.a([s,C.ar,A.E(new B.aC2(C.tG,"Export",!1,t,w?u:v.gbUA(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cm,C.iL,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bha(t,v.e?u:v.gb5L(),u)
else s=A.kH(!0,u,u,new B.e2U(v,t),s,u,D.bHd,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aC2.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aC,t,t,0,C.c,t,C.tv,t,new A.b9(s,C.a1),t,t,t)
return A.db(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dk(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tv,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eo(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fh,t,t,t),u.r,v)}}
B.bha.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dfm(),new A.D(E.a2h,A.x(A.a([A.lz(new B.dfn(),A.p(x,A.W(C.zX,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ej,C.hx,x,x,new A.bq(0.86,1,w),s),C.ec,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ec,A.db(C.p1,x,D.hd2,this.d,A.bp(C.aC,x,x,x,C.c,x,C.Pl,x,new A.b9(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.M,0,C.p),x),C.cm,C.CW,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ae6.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dx(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aC.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mQ(D.nk))p=D.dAo
else{p=C.a.Y(p,"image/")||i.mQ(D.Tp)
n=y.O
p=p?A.a([C.cW,C.aC],n):A.a([C.aN.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aD,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasj()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.nk))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.au,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.h_,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cl))
if(!(!o||i.mQ(D.nk)))l.push(A.hf_(C.aC,!1,j,j,j,!1,j,j,new B.dfJ(k),j,j,new A.b9(A.n(5),C.a1),j,j,!1,u))
x=A.W(C.oX,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cl))
return A.lz(new B.dfK(),new A.D(C.dR,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1K,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cm,h,new A.bf("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_V.prototype={
R(){return new B.aC7()},
gd6(){return this.c}}
B.aC7.prototype={
a_(){this.a3()
this.yJ()},
t(){B.i42(this.e)
this.a2()},
yJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t6(o.c,o.d),$async$yJ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i45(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i44(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dfG(s))
x=1
break}s.l(new B.dfH(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dfI(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yJ,w)},
a3z(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t6(t.c,t.d),$async$a3z)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fwE)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajG(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3z)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3z,w)},
c42(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kX(u,C.z,v,new B.dfE(w,t),C.he,C.dH,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h5(t,C.z,v,new B.dfF(w),C.he,C.dH,!0,v,!1,v,v)
else return C.bL
return A.vg(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a3_(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DY,u,u,u,v.gb9z(),u,u,u,u,"Share / save",u))
r=A.eV(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gm
else{q=v.r
if(q!=null)t=new A.D(C.eI,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eI,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.db(C.DY,u,D.fVX,v.gb9z(),A.bp(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.M,0,C.p),u)
t=p}else t=v.c42()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_S.prototype={
R(){return new B.aC4(A.akE(),C.bG,C.bG)},
gd6(){return this.c}}
B.aC4.prototype={
a_(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fF(w,A.a3(w).k("fF<1>")).iF(new B.dfj(v))
x.gd_F().iF(new B.dfk(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fF(x,A.a3(x).k("fF<1>"))}if(x==null)x=C.beC
x.iF(new B.dfl(v))
v.yJ()},
yJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t6(p.c,p.d),$async$yJ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dfc(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a5c(r,s.a.d.c)),$async$yJ)
case 8:if(s.c==null){x=1
break}s.l(new B.dfd(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dfe(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yJ,w)},
a0g(){var x=0,w=A.j(y.H),v=this,u
var $async$a0g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0g)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0g)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0g,w)},
aWN(d){var x=d.a
return C.a.b0(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3_(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eV(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gm
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bXt,C.f,o,o,new A.o(o,o,o,A.n(24),o,N.Rl,C.m),o,88,o,o,o,o,o,88)
t=A.ld(C.aC,o,o,m,0,new B.dff(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aWN(p.w)+" / "+p.aWN(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aC,o,o,o,o,D.ft2,o,o,o,o,o,o)
r=p.f
q=A.W(r?L.vv:C.fO,o,o,o,o,o)
x=A.x(A.a([u,C.lj,t,x,C.dh,A.db(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcdQ(),s)],y.p),C.l,o,C.e,C.M,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.r6,x,o),o,o,o),o,!1,!1,o,o)}}
B.QZ.prototype={
R(){return new B.aCa()},
gd6(){return this.c}}
B.aCa.prototype={
a_(){this.a3()
this.QP()},
QP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hhg(o.c,o.d,new B.dfX(s)),$async$QP)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dfY(s))
x=1
break}s.e=r
q=R.irF(r)
if(q==null){s.l(new B.dfZ(s))
x=1
break}s.d=q
q.aU(0,s.gb4s())
x=8
return A.b(q.iV(0).de(0,C.nV),$async$QP)
case 8:if(s.c==null){x=1
break}s.l(new B.dg_(s))
x=9
return A.b(q.qu(0),$async$QP)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dg0(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QP,w)},
ck7(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dg1(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DQ(0,x.gb4s())
w=x.d
if(w!=null)w.t()
B.iBV(x.e)
x.a2()},
ag3(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2r(u.c,u.d),$async$ag3)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ag3,w)},
B(d){var x,w,v,u=this,t=null,s=B.a3_(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eV(A.a([A.aI(t,t,t,t,C.oa,t,t,t,u.gcdK(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iz(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gm
else{q=u.r
if(q!=null)s=new A.D(C.eI,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ak4(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fL(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.B_(s,t),A.aA(t,A.xL(A.p(t,A.W(q?L.vv:C.fO,C.c,t,t,t,48),C.f,t,t,new A.o(C.b7,t,t,v,t,t,C.m),t,t,t,t,C.bQ,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dg3(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_X.prototype={
R(){return new B.aC8(new A.cy(null,y.A))}}
B.aC8.prototype={
gcMo(){var x,w,v=this.a
if(v.e!==D.UO)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcLZ(){var x,w,v=this.a
if(v.e!==D.AW)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a3()
x=v.gcMo()
if(x!=null){v.RZ(x)
v.e=A.cZ(X.CY,new B.dfT(v,x))}w=v.gcLZ()
if(w!=null){v.RY(w)
v.f=A.cZ(C.fv,new B.dfU(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RY(d){return this.crr(d)},
crr(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arP(d),$async$RY)
case 3:t=f
x=4
return A.b(B.cgC(d),$async$RY)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfL(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RY,w)},
RZ(d){return this.crs(d)},
crs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h49(d),$async$RZ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFM(t),$async$RZ)
case 4:if(u.c==null){x=1
break}u.l(new B.dfM(u))
u.c.K(y.q).f.T(D.aWs)
case 1:return A.h(v,w)}})
return A.i($async$RZ,w)},
gc9x(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcdL(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3j(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DV()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fzP)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cb(A.ea(new B.dfN(),!1,null,y.N)),$async$a3j)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFM(s),$async$a3j)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aWs)
case 1:return A.h(v,w)}})
return A.i($async$a3j,w)},
abE(d){return this.bOm(d)},
bOm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fB(C.d.aL(t,", "))),$async$abE)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abE,w)},
ag1(d){return this.bO4(d)},
bO4(d){var x=0,w=A.j(y.H),v=this
var $async$ag1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fB(v.a.c)),$async$ag1)
case 2:if(d.e!=null)d.K(y.q).f.T(D.fx7)
return A.h(null,w)}})
return A.i($async$ag1,w)},
a3d(d){return this.cyE(d)},
cyE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqK(s.d,4),$async$a3d)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_doc_share_qr.png"),$async$a3d)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3d,w)},
gb_c(){var x,w=this.a
if(w.e!==D.K0)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abB(d){return this.bOf(d)},
bOf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_c()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fB(C.a.Y(t,"http")?t:"N2|"+t)),$async$abB)
case 3:if(d.e!=null)d.K(y.q).f.T(D.fyO)
case 1:return A.h(v,w)}})
return A.i($async$abB,w)},
ag2(){var x=0,w=A.j(y.H),v=this,u
var $async$ag2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WJ(),$async$ag2)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ag2,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3_(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.K0&&i!==D.UO&&i!==D.AW
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eV(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.K0||t===D.UO||t===D.AW?l:A.aI(l,l,l,l,C.lB,l,l,l,m.gb2j(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.qs(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.c(""+q.d+" file(s) \xb7 "+m.gc9x(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.K0){t=C.aC.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.O,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lX,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcdL(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c7l,D.h4J,new B.dfO(m,d),l)],p))}if(m.a.e===D.K0&&m.gb_c()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c3C,D.h1h,new B.dfP(m,d),l)],p))
if(m.a.e===D.AW){x=(m.w?C.dS:C.aC).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a6(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.O,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gq:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lX,l,l,l)],p))}if(m.a.e===D.UO){x=(m.r?C.dS:C.aC).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.O,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gq:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lX,l,l,l),C.af,A.db(D.bZY,l,D.h7T,m.gcz0(),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.p9(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b9,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.eo(K.DW,l,C.Xc,new B.dfQ(m,d),l),1),C.ar,A.E(A.db(C.Aj,l,C.adh,new B.dfR(m,d),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.O,new A.a6(1/0,l,A.bI(W.BA,l,m.gb2j(),A.bp(C.aN,l,l,l,l,C.hr,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dfS(),y.C)}}
B.ae4.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.p(x,A.qs(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.M,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ei(A.a([A.bI(C.BB,x,new B.dfb(d),x)],u),x,x,C.nE,v,x,x,x,x,D.fUU,x)}}
B.a_R.prototype={
R(){return new B.aC3(A.A8(C.zc,C.ov,C.vH))}}
B.aC3.prototype={
t(){this.d.t()
this.a2()},
aA4(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a8(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eV(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h1P,x,x,x,1,x,!0),C.v,A.A7(this.d,C.bX,this.gaA3()),x,!1,!1,x,x)}}
B.a_Y.prototype={
R(){return new B.aC9(A.A8(C.zc,C.ov,C.vH))},
gd6(){return this.c}}
B.aC9.prototype={
c56(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ai6(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N0("text/plain"),$async$ai6)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fzJ)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ai6,w)},
acs(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hPx(p,!0),$async$acs)
case 3:t=e
p=t==null
s=B.a8N(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fwe)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acs,w)},
t(){this.d.t()
this.a2()},
aA4(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c56(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.atl,v,v,v,w.gbU3(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5a,v,v,v,w.gcoK(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eV(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.rf:S.Qx,v,v,v,v,v),v,v,v,new B.dfW(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h8P,v,v,v,1,v,!0)
u=A.A7(w.d,C.bX,w.gaA3())
x=A.n(20)
return A.c5(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eJH],s),v),v,!1,!1,v,v)}}
B.bhb.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pI
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pI:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2n,A.A(A.a([u,C.bc,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.W(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abe.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PJ.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.YX.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PI.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.G7.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cuB.prototype={}
B.G6.prototype={}
B.abd.prototype={}
B.awn.prototype={}
B.YY.prototype={}
var z=a.updateTypes(["ay<~>()","P(jS)","m(jS)","WA(Z)","~()","a_U(Z)","F(F,jS)","QZ(Z)","~(lH)","cm(G6)","ay<jS?>(@)","Wy(Z)","WC(Z)","D(jS)","jS(@)","a9<m,@>(jS)","a_T(Z)","Wz(Z)","a_V(Z)","a_S(Z)","a_X(Z)","ae4(Z)","ai<jS>()","a_Y(Z)","ae6(Z,F)","a_R(Z)","a9<m,aE>(jS)","cm(YX)","cm(abd)","ay<cm>(G6)"])
B.cux.prototype={
$1(d){var x=this.a
x.x=D.aT9
x.y.I(0,D.aT9)},
$S:75}
B.cuy.prototype={
$1(d){var x=this.a
x.x=D.aT8
x.y.I(0,D.aT8)},
$S:75}
B.cuz.prototype={
$1(d){var x=this.a
x.aju(A.ain(d.data)).bE(new B.cuw(x),y.b)},
$S:75}
B.cuw.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cuA.prototype={
$1(d){},
$S:75}
B.cuD.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i8X(d.channel))},
$S:17}
B.cuE.prototype={
$1(d){},
$S:17}
B.cuF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.isP(w.iceConnectionState)
x.cx=w
if($.hr4())switch(w.a){case 0:x.cy=D.aTe
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
B.cuG.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.isQ(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.cuH.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iDt(w.signalingState)},
$S:108}
B.cuI.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iBC(w.connectionState)},
$S:108}
B.cuJ.prototype={
$1(d){},
$S:108}
B.cuK.prototype={
$1(d){},
$S:17}
B.fDF.prototype={
$1(d){var x=y.F.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wU.q(x.objectStoreNames,"blobs")
if(!w)C.wR.GC(x,"blobs")},
$S:173}
B.h3e.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xy.fv(this.b)
$.eW.mJ()
this.c.$1(d)},
$S:447}
B.h3g.prototype={
$1(d){return this.a.$1(B.iij(this.b,this.c))},
$S:33}
B.h3f.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h3d.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h3t.prototype={
$1(d){var x=this
return B.hDB(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h3u.prototype={
$1(d){var x=this
return B.hDB(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fGl.prototype={
$1(d){var x=this
return B.cgd(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dfu.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dfr.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgd(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dft.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgd(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dfs.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgd(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dfw.prototype={
$4(d,e,f,g){var x=null
return A.kc(A.A(A.a([A.aI(x,x,x,x,D.bYz,x,x,x,new B.dfv(d),x,x,x,x,x,x),A.E(A.FT(D.T7,!0,x,!1,C.a4e,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.T7,x,g,C.aoY,0,e,f)},
$C:"$4",
$R:4,
$S:409}
B.dfv.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fIk.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f0,y.m).w,t=this.a,s=t?C.iV:C.c,r=A.n(28),q=A.p(v,D.bAX,C.f,v,v,D.b9T,v,v,v,v,D.aoL,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c23,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.D9,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atB,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dX(C.du,new B.fIi(d),v),1),C.ar,A.E(A.bI(D.h0f,v,new B.fIj(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.M,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HB,v,v,v,v),v)},
$S:63}
B.fIi.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fIj.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fxo)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aEM(v,x))},
$S:0}
B.fIO.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f0,y.m).w,u=x.a,t=u?C.iV:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bAN,C.f,w,w,D.bbn,w,w,w,w,D.aoL,w,w,1/0),new A.D(C.D9,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hmG(u,"Organization name",C.Ia,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hmG(u,"Access code",C.mt,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hmG(u,"Member password",C.DV,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.by,A.bI(D.h8W,w,new B.fIN(r,q,p,d),A.bp(C.aC,w,w,w,w,C.hr,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.M,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HB,w,w,w,w),w)},
$S:63}
B.fIN.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fxt)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aI_(u,x,w))},
$S:0}
B.cg4.prototype={
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
p=C.a.Y(j,"http")?A.cG(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.w6(p,null).de(0,C.a1l),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ca(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CA(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cga.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgb.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgc.prototype={
$1(d){return d.b},
$S:z+2}
B.cg6.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cg7.prototype={
$1(d){return d.b},
$S:z+2}
B.cg5.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cg8.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cg9.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h3r.prototype={
$1(d){return new B.Wy(this.a,null)},
$S:z+11}
B.h3s.prototype={
$1(d){return new B.WC(this.a,this.b,this.c,null)},
$S:z+12}
B.e1O.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e2X.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e2Y.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e2Z.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e2W(x,d))},
$S:2}
B.e2W.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e3_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e30.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e31.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e32.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e33.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e34.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e37.prototype={
$3(d,e,f){return A.d2(A.dS(f,new A.r(0,(1-e)*14)),e)},
$S:97}
B.e35.prototype={
$1(d){var x=this.a
return x.f?null:x.a0f()},
$S:2}
B.e36.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mQ(D.Tp))s=C.vs
else s=C.a.Y(s,"video/")||d.mQ(D.nk)?C.rl:D.arU
x=this.b.a
w=y.p
return new A.D(C.jX,A.A(A.a([A.p(v,A.W(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasj(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e1P.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e1Q.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cge.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.cgf.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.h4s.prototype={
$2(d,e){return e===this.a},
$S:263}
B.fAD.prototype={
$1(d){return J.k(d)},
$S:15}
B.fGx.prototype={
$1(d){var x=this.b
B.ige(C.HZ.ga83(this.a)).bE(x.gCp(x),y.H)},
$S:131}
B.fGy.prototype={
$1(d){return this.a.dg(0,null)},
$S:131}
B.fGz.prototype={
$0(){return null},
$S:12}
B.cgt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fGA.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).ab().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jS(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fKR.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fEJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fEK.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cgy.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nk)},
$S:z+1}
B.h8I.prototype={
$1(d){return new B.a_T(this.a,null)},
$S:z+16}
B.dfq.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.h_()},
$S:7}
B.dfo.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.dfp.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e2V.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2r()},
$S:11}
B.e2i.prototype={
$0(){var x=J.bJ6(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2j.prototype={
$0(){var x=J.bJ6(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1S.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1R(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH9(this.c)}},
$S:0}
B.e1R.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1T.prototype={
$0(){var x=J.bJ6(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1Y.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1X(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH9(this.c)}},
$S:0}
B.e1X.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2J.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e2K.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e2f.prototype={
$1(d){return new B.Wz(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e2c.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J_(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WD(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a2(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2B(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1W.prototype={
$1(d){this.a.adQ(d,"No files selected.","Added")},
$S:447}
B.e2n.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a5(0)
else w.u(0,new A.O(x,new B.e2m(),A.U(x).k("O<1,m>")))},
$S:0}
B.e2m.prototype={
$1(d){return d.a},
$S:z+2}
B.e21.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y1.cq().d1E(C.a3a,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jX(o,0,null)}u=2
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
return A.b(B.arO(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cv(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e2G.prototype={
$1(d){return new B.QZ(this.a.a.c,this.b,null)},
$S:z+7}
B.e2H.prototype={
$1(d){return new B.a_V(this.a.a.c,this.b,null)},
$S:z+18}
B.e2I.prototype={
$1(d){return new B.a_S(this.a.a.c,this.b,null)},
$S:z+19}
B.e2d.prototype={
$1(d){return new B.QZ(this.a.a.c,this.b,null)},
$S:z+7}
B.e2e.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2z.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J_(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8P(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cuY(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("O<1,m>")
r=new A.O(new A.O(t,new B.e2v(p),r),new B.e2w(),r.k("O<aj.E,m>")).c0(0,new B.e2x())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cb(A.ea(new B.e2y(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pO(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WJ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2v.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e2u(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e2u.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2w.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e2x.prototype={
$1(d){return d.length!==0},
$S:3}
B.e2y.prototype={
$1(d){var x=this.a
return new B.a_X(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e2A.prototype={
$1(d){return d.a},
$S:z+2}
B.e2B.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e2t.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kJ,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasj(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mQ(D.nk)?C.tK:C.o8
p=!x||p.mQ(D.nk)?"Play video":"View"
return new A.bP(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.ln,v,v,C.m),C.bm,A.bo(!0,new A.D(C.D5,A.x(A.a([q,o,t,C.aA,B.a_W(!1,u,!1,w,p,new B.e2o(d),v),B.a_W(!1,u,!1,C.jG,"Share via QR",new B.e2p(d),"Letters/numbers QR code"),B.a_W(!1,u,!1,D.a4j,"Send to their Code",new B.e2q(d),"Enter someone else's personal code"),B.a_W(!1,u,!1,C.hO,"Download / save",new B.e2r(d),v),C.ak,B.a_W(!1,u,!0,C.eq,"Delete",new B.e2s(d),v)],y.p),C.am,v,C.e,C.M,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:727}
B.e2o.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e2p.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e2q.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e2r.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e2s.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e1Z.prototype={
$1(d){return d.a},
$S:z+2}
B.e2_.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e20.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8R(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hz(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pO(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1V.prototype={
$1(d){var x=this.a
x.uv(new B.e1U(x,d,this.b),"Preparing\u2026")},
$S:447}
B.e1U.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WD(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cv(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bI0(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2g.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e2h.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aR(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hhj(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2a.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hx(new B.e26(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e27(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e28(s))
case 5:x=8
return A.b(r.b.ic(0,C.Hu,new B.e29()),$async$$0)
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
B.e26.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e23(x,d,e))},
$S:241}
B.e23.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e27.prototype={
$1(d){return new B.ae4(this.a.a,null)},
$S:z+21}
B.e28.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e29.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e2b.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jx(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8F(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4E(B.Jx(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arO(new B.e24(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cv(r)){if(B.hhi(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cH(r)
p=o.eS(r,new B.e25()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e24.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e22(x,d,e))},
$S:241}
B.e22.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e25.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nk)},
$S:z+1}
B.e2l.prototype={
$1(d){return new B.a_Y(this.a.a.c,null)},
$S:z+23}
B.e2k.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2r(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2F.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.o(v[2],x,new A.bE(new A.ax(C.aC.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.ln,x,x,C.m),C.bm,A.bo(!0,new A.D(C.D5,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kJ,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.a_W(!0,w,!1,C.mt,"My Code",new B.e2C(d),"Your personal code & QR \u2014 others send docs to you"),B.a_W(!1,w,!1,D.a4j,"Send to their Code",new B.e2D(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_W(!1,w,!1,Y.Ab,"Import backup",new B.e2E(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.M,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:727}
B.e2C.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e2D.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bI3()},
$S:0}
B.e2E.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e2S.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JH(D.T7,x,C.a4e,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cY(C.d.gH(D.T7).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:697}
B.e2Q.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e2R.prototype={
$0(){this.a.akr()
return null},
$S:0}
B.e2T.prototype={
$3(d,e,f){return A.d2(A.dS(f,new A.r(0,(1-e)*10)),e)},
$S:97}
B.e2U.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ae6(e,w,v,this.b,x.e,x.cdM(w),new B.e2M(x,w),new B.e2N(x,v,w),new B.e2O(x,w),new B.e2P(x,w),null)},
$S:z+24}
B.e2M.prototype={
$0(){this.a.ahE(this.b)
return null},
$S:0}
B.e2N.prototype={
$0(){var x=this.a
return x.l(new B.e2L(x,this.b,this.c))},
$S:0}
B.e2L.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2O.prototype={
$0(){this.a.P5(this.b)
return null},
$S:0}
B.e2P.prototype={
$0(){this.a.ake(this.b)
return null},
$S:0}
B.dfm.prototype={
$3(d,e,f){return A.d2(A.dS(f,new A.r(0,(1-e)*18)),e)},
$S:97}
B.dfn.prototype={
$3(d,e,f){return A.e8(C.z,f,e,null,null)},
$S:114}
B.dfK.prototype={
$3(d,e,f){return A.d2(A.dS(f,new A.r(0,(1-e)*14)),e)},
$S:97}
B.dfJ.prototype={
$1(d){return this.a.y.$0()},
$S:90}
B.dfG.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dfH.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dfI.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dfE.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h5(w,C.z,x,new B.dfC(this.a),C.he,C.dH,!0,x,!1,x,x)
$.aU.U$.push(new B.dfD(this.a))
return C.bL},
$S:148}
B.dfC.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfA(this.a))
return C.bL},
$S:186}
B.dfA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfx(x))},
$S:7}
B.dfx.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfD.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfz(x))},
$S:7}
B.dfz.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfF.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfB(this.a))
return C.bL},
$S:186}
B.dfB.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfy(x))},
$S:7}
B.dfy.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfj.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfi(x,d))},
$S:1745}
B.dfi.prototype={
$0(){return this.a.f=this.b===C.w2},
$S:0}
B.dfk.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfh(x,d))},
$S:7}
B.dfh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dfl.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfg(x,d))},
$S:7}
B.dfg.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dfc.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dfd.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dfe.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dff.prototype={
$1(d){return this.a.d.O_(0,A.dx(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dfX.prototype={
$0(){var x=this.a.a
return B.t6(x.c,x.d)},
$S:1746}
B.dfY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dfZ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dg_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dg0.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dg1.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dg3.prototype={
$0(){var x=this.a
x.l(new B.dg2(x))},
$S:0}
B.dg2.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qu(0)},
$S:0}
B.dfT.prototype={
$1(d){return this.a.RZ(this.b)},
$S:11}
B.dfU.prototype={
$1(d){return this.a.RY(this.b)},
$S:11}
B.dfL.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfM.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfN.prototype={
$1(d){return D.hKO},
$S:z+25}
B.dfS.prototype={
$2(d,e){if(d)B.WJ()},
$S:132}
B.dfO.prototype={
$0(){return this.a.abE(this.b)},
$S:0}
B.dfP.prototype={
$0(){return this.a.abB(this.b)},
$S:0}
B.dfQ.prototype={
$0(){return this.a.ag1(this.b)},
$S:0}
B.dfR.prototype={
$0(){return this.a.a3d(this.b)},
$S:0}
B.dfb.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dfW.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qx(),$async$$0)
case 2:u.l(new B.dfV(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dfV.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cgA.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nk)},
$S:z+1}
B.cgB.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cgz.prototype={
$2(d,e){return this.bov(d,e)},
bov(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WK(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1747}
B.fKt.prototype={
$1(d){if(d===D.aaS&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fKu.prototype={
$0(){},
$S:12}
B.fL4.prototype={
bq6(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fxE(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a5(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hyC(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bq6(d,e)},
$S:551}
B.fL3.prototype={
$1(d){var x=this
d.b=new B.fL2(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fL2.prototype={
$1(d){return this.bq5(d)},
bq5(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2s(n,m),$async$$1)
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
return A.b(B.fxE(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a5(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
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
return A.b(B.a8O(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aC6.prototype,"gclv","Ry",0)
x(v,"gcmo","Kd",0)
x(v,"gclU","yV",0)
x(v=B.aG8.prototype,"gcdG","ag_",0)
x(v,"gcdH","a0e",0)
x(v,"gcBA","ajW",0)
x(v=B.aGb.prototype,"gcdI","a0f",0)
x(v,"gcBB","a3A",0)
x(B.aG9.prototype,"gcdJ","ag0",0)
x(B.aC5.prototype,"gcdO","cdP",4)
x(v=B.aGa.prototype,"gclV","a1t",0)
x(v,"gcA6","cA7",4)
x(v,"gb5L","aBA",0)
x(v,"gcD5","akl",0)
x(v,"gbUA","YY",0)
x(v,"gcdN","F4",0)
x(B.aC7.prototype,"gb9z","a3z",0)
x(B.aC4.prototype,"gcdQ","a0g",0)
x(v=B.aCa.prototype,"gb4s","ck7",4)
x(v,"gcdK","ag3",0)
x(v=B.aC8.prototype,"gcz0","a3j",0)
x(v,"gb2j","ag2",0)
w(B.aC3.prototype,"gaA3","aA4",8)
x(v=B.aC9.prototype,"gcoK","ai6",0)
x(v,"gbU3","acs",0)
w(v,"gaA3","aA4",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cuB,B.abd,B.awn,B.aEM,B.aI_,B.jS,B.adN,B.bzH,B.G6,B.YY])
w(B.cuC,B.cuB)
w(B.b7C,B.abd)
x(A.fQ,[B.cux,B.cuy,B.cuz,B.cuw,B.cuA,B.cuD,B.cuE,B.cuF,B.cuG,B.cuH,B.cuI,B.cuJ,B.cuK,B.fDF,B.h3e,B.h3g,B.h3f,B.h3t,B.h3u,B.fGl,B.dfr,B.dft,B.dfs,B.dfw,B.fIk,B.fIO,B.cg4,B.cgb,B.cgc,B.cg7,B.cg5,B.cg8,B.cg9,B.h3r,B.h3s,B.e2Z,B.e37,B.e35,B.e36,B.fAD,B.fGx,B.fGy,B.cgt,B.fGA,B.fKR,B.fEJ,B.fEK,B.cgy,B.h8I,B.dfq,B.dfo,B.e2V,B.e1R,B.e1X,B.e2f,B.e1W,B.e2m,B.e2G,B.e2H,B.e2I,B.e2d,B.e2v,B.e2u,B.e2w,B.e2x,B.e2y,B.e2A,B.e2B,B.e2t,B.e1Z,B.e2_,B.e1V,B.e2g,B.e27,B.e25,B.e2l,B.e2F,B.e2S,B.e2T,B.dfm,B.dfn,B.dfK,B.dfJ,B.dfE,B.dfC,B.dfA,B.dfD,B.dfF,B.dfB,B.dfj,B.dfk,B.dfl,B.dff,B.dfT,B.dfU,B.dfN,B.cgA,B.cgB,B.fKt,B.fL3,B.fL2])
w(B.b7D,B.awn)
x(A.hR,[B.h3d,B.dfu,B.dfv,B.fIi,B.fIj,B.fIN,B.e1O,B.e2X,B.e2Y,B.e2W,B.e3_,B.e30,B.e31,B.e32,B.e33,B.e34,B.e1P,B.e1Q,B.fGz,B.dfp,B.e2i,B.e2j,B.e1S,B.e1T,B.e1Y,B.e2J,B.e2K,B.e2c,B.e2n,B.e21,B.e2e,B.e2z,B.e2o,B.e2p,B.e2q,B.e2r,B.e2s,B.e20,B.e1U,B.e2h,B.e2a,B.e23,B.e28,B.e29,B.e2b,B.e22,B.e2k,B.e2C,B.e2D,B.e2E,B.e2Q,B.e2R,B.e2M,B.e2N,B.e2L,B.e2O,B.e2P,B.dfG,B.dfH,B.dfI,B.dfx,B.dfz,B.dfy,B.dfi,B.dfh,B.dfg,B.dfc,B.dfd,B.dfe,B.dfX,B.dfY,B.dfZ,B.dg_,B.dg0,B.dg1,B.dg3,B.dg2,B.dfL,B.dfM,B.dfO,B.dfP,B.dfQ,B.dfR,B.dfb,B.dfW,B.dfV,B.fKu])
x(A.kQ,[B.ae5,B.OB,B.abe,B.PJ,B.YX,B.PI,B.G7])
x(A.af,[B.a_U,B.Wy,B.WC,B.Wz,B.a_T,B.WA,B.a_V,B.a_S,B.QZ,B.a_X,B.a_R,B.a_Y])
x(A.ah,[B.aC6,B.aG8,B.aGb,B.aG9,B.aC5,B.aGa,B.aC7,B.aC4,B.aCa,B.aC8,B.aC3,B.aC9])
x(A.aw,[B.aez,B.aC2,B.bha,B.ae6,B.ae4,B.bhb])
x(A.ie,[B.cga,B.cg6,B.cge,B.cgf,B.h4s,B.e26,B.e24,B.e2U,B.dfS,B.cgz,B.fL4])
x(A.jl,[B.bmH,B.bzj])})()
A.i0(b.typeUniverse,JSON.parse('{"b7C":{"abd":[]},"b7D":{"awn":[]},"a_U":{"af":[],"w":[]},"aC6":{"ah":["a_U"]},"aez":{"aw":[],"w":[]},"Wy":{"af":[],"w":[]},"WC":{"af":[],"w":[]},"aG8":{"ah":["Wy"]},"aGb":{"ah":["WC"]},"bmH":{"jl":[]},"Wz":{"af":[],"w":[]},"aG9":{"ah":["Wz"]},"a_T":{"af":[],"w":[]},"WA":{"af":[],"w":[]},"ae6":{"aw":[],"w":[]},"a_V":{"af":[],"w":[]},"a_S":{"af":[],"w":[]},"QZ":{"af":[],"w":[]},"a_X":{"af":[],"w":[]},"ae4":{"aw":[],"w":[]},"a_R":{"af":[],"w":[]},"a_Y":{"af":[],"w":[]},"aC5":{"ah":["a_T"]},"bzj":{"jl":[]},"aGa":{"ah":["WA"]},"aC2":{"aw":[],"w":[]},"bha":{"aw":[],"w":[]},"aC7":{"ah":["a_V"]},"aC4":{"ah":["a_S"]},"aCa":{"ah":["QZ"]},"aC8":{"ah":["a_X"]},"aC3":{"ah":["a_R"]},"aC9":{"ah":["a_Y"]},"bhb":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.ar
return{J:x("mA"),k:x("MZ()"),o:x("bl<m,m>"),F:x("qV"),g:x("ay<jS?>"),x:x("ay<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<m,P>>"),t:x("N<a9<m,@>>"),r:x("N<jS>"),w:x("N<+file,name(m9,m)>"),u:x("N<cY>"),s:x("N<m>"),E:x("N<jl>"),a:x("N<dC>"),p:x("N<w>"),Z:x("N<F>"),G:x("bm"),A:x("cy<ah<af>>"),n:x("ai<jS>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bv<m,m>"),P:x("a9<m,@>"),f:x("a9<@,@>"),m:x("hW"),e:x("iHy"),af:x("Fj"),U:x("jS"),b:x("cm"),C:x("aE"),aK:x("wT"),ab:x("G6"),br:x("awn"),v:x("YY"),N:x("m"),X:x("bq<G>"),Q:x("lX"),D:x("dC"),aw:x("bf<m>"),cd:x("X<a9<m,@>>"),c7:x("w"),ch:x("c7<ai<jS>>"),aW:x("c7<dC?>"),aY:x("c7<~>"),cx:x("ae5"),b1:x("bn<ai<jS>>"),cf:x("bn<dC?>"),d4:x("bn<~>"),c4:x("aEM"),bG:x("aI_"),q:x("ky"),B:x("q4<G6>"),c6:x("q4<abe>"),y:x("P"),i:x("G"),z:x("@"),S:x("F"),aQ:x("bm?"),_:x("ai<jS>?"),aL:x("ai<@>?"),h:x("a9<m,@>?"),l:x("jS?"),R:x("aE?"),c:x("YY?"),d:x("+answerQr,transfer(m,ay<ai<jS>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,OB,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dC?"),cm:x("adN?"),bk:x("aEM?"),ag:x("aI_?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8e=new A.ax(C.aC,2,C.r,-1)
D.cc1=new A.a7(C.a5,C.a9,C.x,C.a6j,null,null)
D.b9T=new A.o(null,null,null,C.mS,null,D.cc1,C.m)
D.bbn=new A.o(null,null,null,C.mS,null,E.IV,C.m)
D.ahw=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aj0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak2=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fVP=new A.C("Your team portal",null,C.dt,null,null,null,null,null,null,null,null,null)
D.h9U=new A.C("Share the access code and member password with your team. They only sign in once.",null,H.FA,null,null,null,null,null,null,null,null,null)
D.dqT=x([D.fVP,C.ak,D.h9U],y.p)
D.bAD=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dqT,null)
D.hes=new A.C("Create your organization",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.h_r=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FA,null,null,null,null,null,null,null,null,null)
D.dJ6=x([D.hes,C.ak,D.h_r],y.p)
D.bAN=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJ6,null)
D.hay=new A.C("Team Member sign-in",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.h3q=new A.C("Enter the access code and password from your organization.",null,H.FA,null,null,null,null,null,null,null,null,null)
D.dGF=x([D.hay,C.ak,D.h3q],y.p)
D.bAX=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGF,null)
D.bHd=new A.R(16,10,16,28)
D.bHm=new A.R(16,14,16,4)
D.bID=new A.R(20,0,20,16)
D.bJ9=new A.R(20,8,20,16)
D.aoL=new A.R(24,22,24,20)
D.a4j=new A.a_(63394,"MaterialIcons",!1)
D.arU=new A.a_(63515,"MaterialIcons",!1)
D.bWv=new A.a_(983813,"MaterialIcons",!1)
D.bTE=new A.a_(62867,"MaterialIcons",!1)
D.bXt=new A.ae(D.bTE,44,C.c,null,null,null)
D.bYz=new A.ae(C.kk,null,C.ab,null,null,null)
D.bZY=new A.ae(C.jH,18,null,null,null,null)
D.c0Q=new A.ae(D.a4j,26,C.c,null,null,null)
D.c1r=new A.ae(C.DL,null,null,null,null,null)
D.c23=new A.ae(C.DS,null,null,null,null,null)
D.c3g=new A.ae(A1.a4u,null,null,null,null,null)
D.c3C=new A.ae(C.i2,16,null,null,null,null)
D.c7l=new A.ae(C.tJ,16,null,null,null,null)
D.bXL=new A.ae(C.mt,null,null,null,null,null)
D.c8d=new A.ed(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2B=new A.ae(C.Ia,null,null,null,null,null)
D.c8i=new A.ed(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bY6=new A.ae(C.DV,null,null,null,null,null)
D.c8t=new A.ed(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bY6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYy=x([C.fz,C.b5,C.aC],y.O)
D.cdZ=new A.a7(C.ay,C.aD,C.x,D.cYy,null,null)
D.cXV=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.T7=x([C.fz,C.aC],y.O)
D.Tp=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nk=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAo=x([C.n1,C.aC],y.O)
D.evX={iceServers:0}
D.aNE={urls:0}
D.dN1=new A.bl(D.aNE,["stun:stun.l.google.com:19302"],y.o)
D.dN0=new A.bl(D.aNE,["stun:stun1.l.google.com:19302"],y.o)
D.dfx=x([D.dN1,D.dN0],A.ar("N<a9<m,m>>"))
D.dM7=new A.bl(D.evX,[D.dfx],A.ar("bl<m,@>"))
D.K0=new B.OB(0,"lanDirect")
D.UN=new B.OB(1,"cloudStash")
D.e__=new B.OB(2,"inlineInstant")
D.UO=new B.OB(3,"webrtcLink")
D.AW=new B.OB(4,"videoCloud")
D.h9T=new A.C("Receive file",null,C.nv,null,null,null,null,null,null,null,null,null)
D.cNt=x([E.atK,C.aa,D.h9T],y.p)
D.fnT=new A.c1(C.aK,C.b9,C.h,C.l,null,C.p,null,0,D.cNt,null)
D.eDp=new A.D(C.cn,D.fnT,null)
D.fM5=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A0.Jq,null,null,null)
D.fWr=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fM5,null,C.K,null,null,null,null,null,null,null)
D.eCz=new A.D(C.zw,D.fWr,null)
D.bfY=new A.cl(C.z,null,null,D.eCz,null)
D.eJH=new A.cN(0,null,0,28,null,null,D.bfY,null)
D.eK0=new B.abe(0,"RTCDataChannelConnecting")
D.aT8=new B.abe(1,"RTCDataChannelOpen")
D.aT9=new B.abe(3,"RTCDataChannelClosed")
D.eK1=new B.G7(0,"RTCIceConnectionStateNew")
D.eK2=new B.G7(1,"RTCIceConnectionStateChecking")
D.eK3=new B.G7(2,"RTCIceConnectionStateCompleted")
D.eK4=new B.G7(3,"RTCIceConnectionStateConnected")
D.eK5=new B.G7(4,"RTCIceConnectionStateCount")
D.eK6=new B.G7(5,"RTCIceConnectionStateFailed")
D.eK7=new B.G7(6,"RTCIceConnectionStateDisconnected")
D.aTa=new B.G7(7,"RTCIceConnectionStateClosed")
D.aTb=new B.YX(0,"RTCIceGatheringStateNew")
D.eK8=new B.YX(1,"RTCIceGatheringStateGathering")
D.aaS=new B.YX(2,"RTCIceGatheringStateComplete")
D.aaT=new B.PI(0,"RTCPeerConnectionStateClosed")
D.aTc=new B.PI(1,"RTCPeerConnectionStateFailed")
D.aTd=new B.PI(2,"RTCPeerConnectionStateDisconnected")
D.aTe=new B.PI(3,"RTCPeerConnectionStateNew")
D.aTf=new B.PI(4,"RTCPeerConnectionStateConnecting")
D.aTg=new B.PI(5,"RTCPeerConnectionStateConnected")
D.eK9=new B.PJ(0,"RTCSignalingStateStable")
D.eKa=new B.PJ(1,"RTCSignalingStateHaveLocalOffer")
D.eKb=new B.PJ(2,"RTCSignalingStateHaveRemoteOffer")
D.eKc=new B.PJ(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eKd=new B.PJ(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTh=new B.PJ(5,"RTCSignalingStateClosed")
D.ft2=new A.av(160,48)
D.bhd=new A.fr(2,null,null,null,null,C.aC,null,null,null,null)
D.fuA=new A.a6(16,16,D.bhd,null)
D.fZM=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fw3=new A.b2(D.fZM,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6w=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new A.b2(D.h6w,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hfw=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fwe=new A.b2(D.hfw,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZl=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fwE=new A.b2(D.fZl,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haK=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWs=new A.b2(D.haK,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hcd=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new A.b2(D.hcd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hh0=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new A.b2(D.hh0,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.heW=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxt=new A.b2(D.heW,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgb=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new A.b2(D.hgb,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXW=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new A.b2(D.fXW,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8r=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fz8=new A.b2(D.h8r,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h16=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzF=new A.b2(D.h16,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hh5=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fzJ=new A.b2(D.hh5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYb=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.b2(D.fYb,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWP=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.b2(D.fWP,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTs=new A.C("NGMY DOC SHARE",null,C.aXS,null,null,null,null,null,null,null,null,null)
D.fUU=new A.C("Show this to sender",null,C.iS,null,null,null,null,null,null,null,null,null)
D.fVX=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h_S=new A.C("Organization settings",null,C.cI,null,null,null,null,null,null,null,null,null)
D.h0f=new A.C("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.h1h=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h1P=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4J=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h7z=new A.C("Send to their Doc Share",null,C.mL,null,null,null,null,null,null,null,null,null)
D.h7T=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8d=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h8P=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8W=new A.C("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.h9k=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fh,null,null,null,null,null,null,null,null,null)
D.hcJ=new A.C("Share files & videos\nwith a scan.",null,C.aXV,null,null,null,null,null,null,null,null,null)
D.hd2=new A.C("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.hKO=new B.a_R(null)
D.aej=new B.ae5(0,"docShare")
D.aek=new B.ae5(1,"gate")
D.XQ=new B.ae5(2,"gateNoIndividual")})();(function staticFields(){$.aQP=null
$.fva=function(){var x=y.N
return A.S(x,x)}()
$.Hl=A.S(y.N,y.D)
$.aib=A.S(y.N,A.ar("m9"))
$.Sp=A.S(y.N,y.D)
$.fvR=A.S(y.N,A.ar("adN"))
$.cgs=A.S(y.S,A.ar("bzH"))
$.hyB=1
$.ios=null
$.ior=null
$.ifx=null
$.hmS=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iI2","hRy",()=>new B.cuC())
x($,"iFX","hr4",()=>C.a.q(A.bw(A.bw(A.bw(A.HR(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["3d7cMfWY4jWnv+5z5ZvEY3zWVrQ="]=a.current})($__dart_deferred_initializers__);