((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,P,K,Q,R,F,L,G,S,T,E,H,U,V,W,X,Y,M,N,B={cuf:function cuf(){},
i7E(d){var x=null,w=new B.b7r(d,D.eK0,new A.q3(x,x,y.c6),new A.q3(x,x,y.B))
w.bDG(d)
return w},
b7r:function b7r(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cua:function cua(d){this.a=d},
cub:function cub(d){this.a=d},
cuc:function cuc(d){this.a=d},
cu9:function cu9(d){this.a=d},
cud:function cud(d){this.a=d},
i7F(d,e){var x=y.N
x=new B.b7s(d,e,A.T(x,y.e),A.T(x,y.z))
x.bDH(d,e)
return x},
b7s:function b7s(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cug:function cug(d){this.a=d},
cuh:function cuh(d){this.a=d},
cui:function cui(d){this.a=d},
cuj:function cuj(d){this.a=d},
cuk:function cuk(d){this.a=d},
cul:function cul(d){this.a=d},
cum:function cum(d){this.a=d},
cun:function cun(d){this.a=d},
hlr(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xt.H8(x,"ngmy_doc_share_v1",new B.fCJ(),1)},
ies(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.ew(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.vT(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cE.aK(d)
return x}catch(w){return v}return v},
SA(d,e){return B.iu9(d,e)},
iu9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SA=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQH
x=7
return A.b(o==null?$.aQH=B.hlr():o,$async$SA)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.my(s,"blobs","readwrite")
C.iN.mi(J.mx(q,"blobs"),r,d)
x=8
return A.b(J.oJ(q),$async$SA)
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
return A.i($async$SA,w)},
Sz(d){return B.iu8(d)},
iu8(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQH
x=7
return A.b(o==null?$.aQH=B.hlr():o,$async$Sz)
case 7:s=f
r=J.my(s,"blobs","readonly")
x=8
return A.b(C.iN.xU(J.mx(r,"blobs"),d),$async$Sz)
case 8:q=f
x=9
return A.b(J.oJ(r),$async$Sz)
case 9:o=B.ies(q)
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
return A.i($async$Sz,w)},
aiL(d){return B.iu7(d)},
iu7(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQH
x=7
return A.b(p==null?$.aQH=B.hlr():p,$async$aiL)
case 7:s=f
r=J.my(s,"blobs","readwrite")
C.iN.GD(J.mx(r,"blobs"),d)
x=8
return A.b(J.oJ(r),$async$aiL)
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
return A.i($async$aiL,w)},
fCJ:function fCJ(){},
igZ(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsn(w,v))}return u},
hNo(d,e){var x,w={},v=A.aZr("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h2d(w,v,e)
C.xv.zl(v,"change",new B.h2f(w,v,!1))
C.xv.zl(v,"cancel",new B.h2e(w))
$.eY.mI()
v.click()
A.bL(C.amQ,new B.h2c(w),y.H)},
h2d:function h2d(d,e,f){this.a=d
this.b=e
this.c=f},
h2f:function h2f(d,e,f){this.a=d
this.b=e
this.c=f},
h2e:function h2e(d){this.a=d},
h2c:function h2c(d){this.a=d},
DZ(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DZ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV_()?3:4
break
case 3:x=5
return A.b(B.hHW(e,d,s,!0,!1,f,g,h,!1,i),$async$DZ)
case 5:x=1
break
case 4:x=6
return A.b(B.Sc(d,s,f,g,h,i),$async$DZ)
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
return A.b(B.Jx(s,d),$async$DZ)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fy1(s,d),$async$DZ)
case 14:x=12
return A.b(r.hHW(q,p,o,n,m,l,k,j,a1,i),$async$DZ)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cc(A.ec(new B.h2s(s,i,d,f,g,h),!1,null,y.H)),$async$DZ)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cc(A.ec(new B.h2t(s,i,d,f,g,h),!1,null,y.H)),$async$DZ)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DZ,w)},
Sc(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Sc=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2a(e),$async$Sc)
case 3:u=k
x=4
return A.b(B.arx(d,e,!1),$async$Sc)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jx(e,d),$async$Sc)
case 7:if(k){v=D.aej
x=1
break}x=8
return A.b(B.Wy(e),$async$Sc)
case 8:v=t?D.XK:D.aek
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b28(d,e)){v=D.aej
x=1
break}x=11
return A.b(B.Wy(e),$async$Sc)
case 11:v=t?D.XK:D.aek
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hgd(d,e)){v=D.aej
x=1
break}x=14
return A.b(B.Wy(e),$async$Sc)
case 14:v=D.XK
x=1
break
case 13:v=t?D.XK:D.aek
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sc,w)},
fy1(d,e){var x=0,w=A.j(y.y),v
var $async$fy1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b28(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2a(d),$async$fy1)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fy1,w)},
hHW(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cc(A.ec(new B.fFp(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hCz(d,e,f,g,h,i,j){return new B.a_Q(e,j,d,g,h,i,f,null)},
fHl(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fHl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fHo(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fHl)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHl,w)},
fHQ(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fHQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fHS(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fHQ)
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
return A.i($async$fHQ,w)},
hlD(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fUU(d,e){var x=0,w=A.j(y.H),v
var $async$fUU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wy(e),$async$fUU)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e7()
case 1:return A.h(v,w)}})
return A.i($async$fUU,w)},
h2s:function h2s(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h2t:function h2t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ae_:function ae_(d,e){this.a=d
this.b=e},
fFp:function fFp(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_Q:function a_Q(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBZ:function aBZ(){this.c=this.a=this.d=null},
df6:function df6(d,e){this.a=d
this.b=e},
df3:function df3(d){this.a=d},
df5:function df5(d){this.a=d},
df4:function df4(d){this.a=d},
df8:function df8(){},
df7:function df7(d){this.a=d},
aet:function aet(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEE:function aEE(d,e){this.a=d
this.b=e},
aHR:function aHR(d,e,f){this.a=d
this.b=e
this.c=f},
fHo:function fHo(d,e,f){this.a=d
this.b=e
this.c=f},
fHm:function fHm(d){this.a=d},
fHn:function fHn(d,e,f){this.a=d
this.b=e
this.c=f},
fHS:function fHS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHR:function fHR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfH(d,e,f,g,h){return B.i2p(d,e,f,g,h)},
i2p(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cfH=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a2(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hm(r.dP(d,new B.cfI(s,e,h,g,f,q),y.g),y.l),$async$cfH)
case 3:r=p.aS(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfH,w)},
b25(d,e,f,g,h){return B.i2q(d,e,f,g,h)},
i2q(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b25=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ax4("GET",d)
o=A.hcC()
if(o==null)o=new A.MR(A.a([],y.W))
x=7
return A.b(o.fb(0,s).de(0,C.Hv),$async$b25)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dd(),$async$b25)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cy(q,h,o,e,f,"Received via QR")
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
return A.i($async$b25,w)},
b24(d){return B.i2n(d)},
i2n(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b24=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w3(d,null).de(0,C.oK),$async$b24)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.ms(A.mp(p.e)).cG(0,p.w),null)
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
return A.i($async$b24,w)},
cfG(d){return B.i2o(d)},
i2o(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cfG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w3(d,null).de(0,C.qX),$async$cfG)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ms(A.mp(q.e)).cG(0,q.w)
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
return A.i($async$cfG,w)},
cfI:function cfI(d,e,f,g,h,i){var _=this
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
Jv(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i2v(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jv(C.a.aY(t,u.length))}return null},
i2w(d){var x=B.Jv(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i2r(){var x,w=$.oF(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8x(d){return B.i2s(d)},
i2s(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bN),$async$a8x)
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
return A.i($async$a8x,w)},
a8y(d,e){return B.i2t(d,e)},
i2t(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8y=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i_(d,e,!1,!1,C.cU,null),$async$a8y)
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
return A.i($async$a8y,w)},
Cx(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cx)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jv(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8z(r),$async$Cx)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8x("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cx)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jv(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cx)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i2r()
x=14
return A.b(B.a8z(m),$async$Cx)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().ag()
x=15
return A.b(B.a8y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cx)
case 15:k=f
x=16
return A.b(B.a8y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cx)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cx)
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
return A.i($async$Cx,w)},
a8z(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jv(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8x("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8z)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8z,w)},
a8A(d,e,f,g){return B.i2x(d,e,f,g)},
i2x(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8A=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a2(d)
if(g.gar(d)){v=!1
x=1
break}r=B.Jv(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8z(r),$async$a8A)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cfO())>1048576||g.aR(d,new B.cfP())){v=B.Fy(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8L("myCode",d,a0),$async$a8A)
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
v=B.Fy(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2d(u,g.gJ(d),a0),$async$a8A)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oF().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cfQ(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b26(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],i,y.z),q),$async$a8A)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8A,w)},
Fy(d,e,f,g,h){return B.i2u(d,e,f,g,h)},
i2u(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fy=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$Fy)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cH(a6)
k=l.cD(a6,0,new B.cfK())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oF().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cS.av(99999)
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
a0=new A.Ln(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fy)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f2().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nM(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acb(a1.a,a4,"media",a1.d,a2).xR(m,n,new A.EP(!0,q.c)),$async$Fy)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fy)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTq(r),$async$Fy)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cfL(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b26(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],e,d),a8),$async$Fy)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTq(r),$async$Fy)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fy,w)},
b26(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b26=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8x(t),$async$b26)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cfJ(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8y(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b26,w)},
Ov(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ov=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8x("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ov)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cv(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aS(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b27(k,a0),$async$Ov)
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
return A.b(B.b2c(h),$async$Ov)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WF(g,a0),$async$Ov)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cfM(),q),n)
d=A.B(new A.X(r,new B.cfN(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cS(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8y("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Ov)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ov,w)},
b27(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b27=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cv(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aS(h),r=y.f,q=0
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
break}i=B.iyh(k,j)
C.d.u(s,i)
x=5
return A.b(B.DX(l,m,"Received via My Code",t,e,i),$async$b27)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTq(s),$async$b27)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b27,w)},
cfO:function cfO(){},
cfP:function cfP(){},
cfQ:function cfQ(){},
cfK:function cfK(){},
cfL:function cfL(){},
cfJ:function cfJ(){},
cfM:function cfM(){},
cfN:function cfN(){},
h2p(d,e){var x=0,w=A.j(y.H)
var $async$h2p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cc(A.ec(new B.h2q(e),!1,null,y.H)),$async$h2p)
case 2:return A.h(null,w)}})
return A.i($async$h2p,w)},
bHG(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bHG=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cv(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cc(A.ec(new B.h2r(g,e,f),!1,null,y.y)),$async$bHG)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHG,w)},
h2q:function h2q(d){this.a=d},
h2r:function h2r(d,e,f){this.a=d
this.b=e
this.c=f},
Wv:function Wv(d,e){this.c=d
this.a=e},
aG0:function aG0(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e1l:function e1l(d,e){this.a=d
this.b=e},
Wz:function Wz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG3:function aG3(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e2u:function e2u(d){this.a=d},
e2v:function e2v(d){this.a=d},
e2w:function e2w(d){this.a=d},
e2t:function e2t(d,e){this.a=d
this.b=e},
e2x:function e2x(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2z:function e2z(d,e){this.a=d
this.b=e},
e2A:function e2A(d,e){this.a=d
this.b=e},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2C:function e2C(d){this.a=d},
e2F:function e2F(){},
e2D:function e2D(d){this.a=d},
e2E:function e2E(d,e){this.a=d
this.b=e},
bmt:function bmt(){},
Ww:function Ww(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG1:function aG1(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e1m:function e1m(d){this.a=d},
e1n:function e1n(d){this.a=d},
hge(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i2z(d){var x=d.l2
if(x>=0)return x
return 4.99},
i2y(d){var x=d.lJ,w=y.N
w=x.iW(x,new B.cfS(),w,w)
return w},
hxu(d){var x=d.kE,w=y.N
w=x.iW(x,new B.cfT(),w,w)
return w},
b2a(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2a)
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
return A.i($async$b2a,w)},
a8C(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8C)
case 4:x=3
return A.b(g.aE("String","ngmy_doc_share_path_"+u,e),$async$a8C)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8C,w)},
Wy(d){var x=0,w=A.j(y.H),v,u
var $async$Wy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$Wy)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$Wy)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wy,w)},
hgd(d,e){var x,w,v
if(B.i2z(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i2y(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.V(Date.now(),0,!1))},
b28(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hxu(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.V(Date.now(),0,!1))},
hxv(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hxu(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bM(A.du(f,0,0,0,0,0).a).ab().ag())
d.kE=w},
ary(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ary=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$ary)
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
return A.i($async$ary,w)},
arz(d){var x=0,w=A.j(y.H),v,u,t
var $async$arz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ary(d),$async$arz)
case 3:u=f
x=5
return A.b(A.aB(),$async$arz)
case 5:x=4
return A.b(f.aE("Int","ngmy_doc_share_usage_"+t,u+1),$async$arz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arz,w)},
arx(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hge(d)
if(u<=0){v=!1
x=1
break}if(B.hgd(d,e)){v=!1
x=1
break}x=3
return A.b(B.ary(e),$async$arx)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arx,w)},
b29(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b29=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jx(e,d),$async$b29)
case 3:if(g){v=-1
x=1
break}u=B.hge(d)
if(u<=0){v=-1
x=1
break}if(B.hgd(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ary(e),$async$b29)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b29,w)},
cfV(d,e,f){var x=0,w=A.j(y.y),v
var $async$cfV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jx(e,d),$async$cfV)
case 3:if(h){v=!1
x=1
break}v=B.arx(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfV,w)},
cfU(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cfU=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cfV(d,u,i.gV_()),$async$cfU)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfU,w)},
a8B(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8B=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gV_()){v=!0
x=1
break}if(B.b28(d,u)){v=!0
x=1
break}x=5
return A.b(A.lR(u,C.V1),$async$a8B)
case 5:x=k?3:4
break
case 3:B.hxv(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8B)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lt(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.V1,"Doc Share for Organizations"),$async$a8B)
case 7:if(!k){v=!1
x=1
break}B.hxv(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8B)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8B,w)},
cfS:function cfS(){},
cfT:function cfT(){},
h3p(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h3p=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h3p)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fue.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i1([r],e.c))
s.toString
$.fue.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h3p,w)},
iAu(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fue.bq($.fue,new B.h3r(d))},
h3r:function h3r(d){this.a=d},
fvV(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fvV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i1([d],f))
s.toString
u=A.nf(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bL(C.jy,null,y.H),$async$fvV)
case 3:C.BR.fv(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mI()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fvV,w)},
ahG(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fuV.n(0,d,new B.adH(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ahG)
case 3:x=2
return A.b(h.aE("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahG)
case 2:return A.h(null,w)}})
return A.i($async$ahG,w)},
ahA(d){return B.iiT(d)},
iiT(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fuV.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ahA)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cv(s)){v=null
x=1
break}o=J.b8(s,new B.fzI(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adH(r)
$.fuV.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahA,w)},
S2(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$S2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.Hi.n(0,d,u)
x=3
return A.b(B.SA(d,u),$async$S2)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S2,w)},
aR1(d){return B.iiR(d)},
iiR(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aR1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hi.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.Sz(d),$async$aR1)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hi.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aR1)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cE.aK(r)
x=!J.cv(q)?9:10
break
case 9:B.S2(d,q)
x=11
return A.b(J.fR(s,d),$async$aR1)
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
return A.i($async$aR1,w)},
ieU(d){if(d==null)return A.f6(null,y.K)
if(y.J.b(d))return A.f6(new Uint8Array(A.cb(J.ew(d,0,null))),y.K)
if(y.D.b(d))return A.f6(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f6(new Uint8Array(A.cb(A.vT(d,0,null))),y.K)
if(y.I.b(d))return A.f6(new Uint8Array(A.cb(d)),y.K)
return A.f6(null,y.K)},
a3m(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bG,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fF(r,"loadend",new B.fFB(r,t),!1,s)
A.fF(r,"error",new B.fFC(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.OR,new B.fFD())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3m,w)},
aRm(d,e,f){return B.ilf(d,e,f)},
ilf(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRm=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3m(i),$async$aRm)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SA(o,p),$async$aRm)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahG(k,j,s),$async$aRm)
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
return A.i($async$aRm,w)},
aRl(d,e,f){return B.ile(d,e,f)},
ile(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRl=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRm(d,e,f),$async$aRl)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3m(f),$async$aRl)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hi.n(0,s,r)
$.Sl.n(0,s,r)
x=11
return A.b(B.S2(s,r),$async$aRl)
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
return A.i($async$aRl,w)},
Cy(d,e,f,g,h,i){return B.i2I(d,e,f,g,h,i)},
i2I(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cy=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cS.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jS(p,q,o,n,new A.V(Date.now(),0,!1).ab().ag(),a0,f,B.b2g(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.S2(s,d),$async$Cy)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$Cy)
case 10:r=a2
x=11
return A.b(r.aE("String",s,C.cN.gcp().aK(d)),$async$Cy)
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
return A.b(B.Bs(e),$async$Cy)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Hs(e,j),$async$Cy)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cy,w)},
WA(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WA=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bs(d),$async$WA)
case 3:t=a1
s=e.length,r=J.cH(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cS.av(99999)
n=p.b
l=o.type
l.toString
k=B.hxx(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().ag()
i=new B.jS(m,n,k,l,j,"From folder",null,B.b2g(),null)
$.ai4.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3m(o),$async$WA)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hi.n(0,h,g)
$.Sl.n(0,h,g)
B.S2(h,g)
x=9
break
case 10:x=11
return A.b(B.aRl(d,m,o),$async$WA)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hs(d,t),$async$WA)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WA,w)},
hgi(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hgi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hxx(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jy(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.Cy(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgi,w)},
Jy(d,e,f,g,h,i){return B.i2H(d,e,f,g,h,i)},
i2H(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jy=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cS.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ln(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jy)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cv(m)){x=6
break}J.h9(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.T9(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.l_(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SA(k,l),$async$Jy)
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
return A.b(j.a1(0),$async$Jy)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SA(k,new Uint8Array(A.cb(n))),$async$Jy)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahG(r,q,g),$async$Jy)
case 16:f=new B.jS(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().ag(),a2,null,B.b2g(),null)
x=17
return A.b(B.Bs(d),$async$Jy)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hs(d,e),$async$Jy)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jy,w)},
WC(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WC=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ai4.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3m(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahA(s),$async$WC)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sz(u[o]),$async$WC)
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
v=A.vT(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Sl.h(0,s)
if(i==null)i=$.Hi.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t5(d,e),$async$WC)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.Sl.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vT(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WC,w)},
hxx(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t5(d,e){return B.i2J(d,e)},
i2J(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t5=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Sl.h(0,f)
if(e==null)e=$.Hi.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.ai4.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3m(s),$async$t5)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hi.n(0,f,r)
$.Sl.n(0,f,r)
B.S2(f,r)
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
return A.b(B.ahA(f),$async$t5)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adC(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sz(g[l]),$async$t5)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a85()
if(!C.aI.gar(r)){$.Hi.n(0,f,r)
$.Sl.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aR1(f),$async$t5)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.Sl.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WC(a0,a1,0,g),$async$t5)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cb(i))
$.Hi.n(0,f,h)
$.Sl.n(0,f,h)
B.S2(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t5,w)},
i2M(d){var x,w,v=$.ai4.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i2N(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i1([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i2K(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arF(d,e,f,g,h){return B.i2L(d,e,f,g,h)},
i2L(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arF=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ai4.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3m(s),$async$arF)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t5(g,e),$async$arF)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f2().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iE(d).xR(h,r,new A.EP(!0,e.c)),$async$arF)
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
return A.i($async$arF,w)},
hxz(d,e,f,g,h){var x,w,v,u,t=$.hxy
$.hxy=t+1
x=Date.now()
w=""+1000*x+"_"+C.cS.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cg5.n(0,t,new B.bzr(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adC(u)))
return t},
hgj(d){var x=0,w=A.j(y.H)
var $async$hgj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hgj,w)},
Jz(d,e){var $async$Jz=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ai4.h(0,h)
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
return A.qJ(B.WC(d,e,p,o<q?o:q),$async$Jz,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qJ(A.GQ(n),$async$Jz,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qJ(B.ahA("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jz,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qJ(B.Sz(h[l]),$async$Jz,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qJ(A.GQ(k),$async$Jz,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qJ(B.t5(d,e),$async$Jz,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qJ(A.GQ(A.vT(j,p,o<i?o:i)),$async$Jz,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qJ(null,0,w)
case 2:return A.qJ(t.at(-1),1,w)}})
var x=0,w=A.hGF($async$Jz,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hIH(w)},
b2i(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cg5.h(0,d)
if(t==null||J.cv(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6n(),$async$b2i)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2i,w)},
WB(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cg5.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6n(),$async$WB)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahG(r.c,u,r.z),$async$WB)
case 4:t=new B.jS(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().ag(),r.f,r.r,B.b2g(),null)
u=r.a
x=5
return A.b(B.Bs(u),$async$WB)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hs(u,s),$async$WB)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WB,w)},
a8I(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cg5.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiL(u[s]),$async$a8I)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8I,w)},
cg7(d,e,f){var x=0,w=A.j(y.H)
var $async$cg7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEv(d,e,f),$async$cg7)
case 2:return A.h(null,w)}})
return A.i($async$cg7,w)},
cg8(d,e,f){var x=0,w=A.j(y.H)
var $async$cg8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEw(d,e,f),$async$cg8)
case 2:return A.h(null,w)}})
return A.i($async$cg8,w)},
Fz(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bs(d),$async$Fz)
case 2:p=g
J.nd(p,new B.cg6(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hi.X(0,v)
$.ai4.X(0,e)
x=3
return A.b(B.ahA(v),$async$Fz)
case 3:u=g
$.fuV.X(0,v)
x=4
return A.b(A.aB(),$async$Fz)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$Fz)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$Fz)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiL(s[q]),$async$Fz)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiL(v),$async$Fz)
case 13:x=14
return A.b(B.Hs(d,p),$async$Fz)
case 14:return A.h(null,w)}})
return A.i($async$Fz,w)},
b2h(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t5(d,e),$async$b2h)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fvV(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2h,w)},
Bs(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bs)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fFE(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bs,w)},
Hs(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$Hs)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fJT(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aE("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$Hs)
case 3:return A.h(null,w)}})
return A.i($async$Hs,w)},
bEv(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bs(d),$async$bEv)
case 3:u=h
t=J.cH(u)
s=t.bl(u,new B.fDN(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aH2(f))
x=4
return A.b(B.Hs(d,u),$async$bEv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEv,w)},
bEw(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bs(d),$async$bEw)
case 3:u=h
t=J.cH(u)
s=t.bl(u,new B.fDO(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRc(f))
x=4
return A.b(B.Hs(d,u),$async$bEw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEw,w)},
adH:function adH(d){this.a=d},
fzI:function fzI(){},
fFB:function fFB(d,e){this.a=d
this.b=e},
fFC:function fFC(d){this.a=d},
fFD:function fFD(){},
cg6:function cg6(d){this.a=d},
bzr:function bzr(d,e,f,g,h,i,j,k,l){var _=this
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
fFE:function fFE(){},
fJT:function fJT(){},
fDN:function fDN(d){this.a=d},
fDO:function fDO(d){this.a=d},
a8J(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cgb())?3:4
break
case 3:x=5
return A.b(B.b2j(d,e),$async$a8J)
case 5:u=g
if(u!=null){t=u.c
B.Ox(d,u.b,e,t)}v=u
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
return A.b(B.b2e(s),$async$a8J)
case 10:case 9:if(g){v=new A.Ro(1,D.UF,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WD(d,e),$async$a8J)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WI(!0,!0,d,e),$async$a8J)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ox(d,D.AT,e,t)
v=new A.Ro(p,D.AT,t)
x=1
break}v=B.cga(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8J,w)},
WD(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8L(null,d,e),$async$WD)
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
return A.b(B.b2d(p,d.length,e),$async$WD)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cg8(e,C.d.gH(d).a,r.b),$async$WD)
case 7:case 6:q=r.a
x=8
return A.b(B.Ox(d,D.UF,e,q),$async$WD)
case 8:v=new A.Ro(d.length,D.UF,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WD,w)},
WE(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mP(D.nh)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8K(d,e),$async$WE)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cg3(s,d,e,t),$async$WE)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2e(t),$async$WE)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t5(e,d),$async$WE)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WD(A.a([d],y.r),e),$async$WE)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WE,w)},
WG(){var x=0,w=A.j(y.H)
var $async$WG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hgc(),$async$WG)
case 2:x=3
return A.b(B.aTM(),$async$WG)
case 3:return A.h(null,w)}})
return A.i($async$WG,w)},
a8K(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2g()
x=3
return A.b(B.cg7(e,d.a,u),$async$a8K)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8K,w)},
Ox(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ox=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.UF&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8K(p,f),$async$Ox)
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
return A.b(B.cg2(o,p,u,f),$async$Ox)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cg3(o,p,f,t),$async$Ox)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cg1(o,u,p,f),$async$Ox)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ox,w)},
b2j(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cg9(e,d),$async$b2j)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WI(!1,!0,d,e),$async$b2j)
case 4:u=g
if(u!=null){t=u.b
v=new A.Ro(u.a,D.AT,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2j,w)},
cg9(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cg9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WC(d,s,0,1),$async$cg9)
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
return A.i($async$cg9,w)},
cga(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cga=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8L(null,d,e),$async$cga)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hxw(u)
if(t.length>800){v=null
x=1
break}v=new A.Ro(d.length,D.e__,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cga,w)},
arG(d,e,f){return B.i2Q(d,e,f)},
i2Q(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arG=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d8(g,"\ufeff"))g=J.ne(g,1)
x=B.hgh(g)?3:4
break
case 3:x=5
return A.b(B.cg4(g),$async$arG)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d8(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ne(g,13))
try{k=B.FA(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d8(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ne(g,13))
u=9
x=12
return A.b(B.b2c(q),$async$arG)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WF(p,a0)
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
case 11:case 7:if(J.d8(g,"NGMYDOCSYNC0|"))try{n=B.hgg(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WF(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d8(g,"N2|")){v=B.JA(C.a.i(J.ne(g,3)),d,a0)
x=1
break}if(J.d8(g,"NGMYDOCSYNC2|")){v=B.JA(C.a.i(J.ne(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JA(h,d,a0)
x=1
break}if(J.eD(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WF(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arG,w)},
JA(d,e,f){return B.i2O(d,e,f)},
i2O(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
r=A.cF(A.v(s)+"/manifest.json",0,null)
q=A.cF(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b24(r),$async$JA)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b24(A.cF(s,0,null)),$async$JA)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cv(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cfH(o,r,a1,n,a2),$async$JA)
case 11:m=a4
x=J.cv(m)?12:13
break
case 12:x=14
return A.b(B.cfG(q),$async$JA)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WF(l,a2),$async$JA)
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
return A.i($async$JA,w)},
a8L(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8L=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aS(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t5(f,r),$async$a8L)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cN.gcp().aK(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
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
return A.i($async$a8L,w)},
WF(d,e){return B.i2P(d,e)},
i2P(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WF=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aS(r)
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
break}i=C.cE.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cy(i,a3,d,k,l,o),$async$WF)
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
return A.i($async$WF,w)},
Ow:function Ow(d,e){this.a=d
this.b=e},
cgb:function cgb(){},
a2W(d){var x=A.Q(d).ax.a===C.I,w=x?D.ak2:D.ahw,v=x?D.alQ:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aj0:C.bn
return new A.aJ6([w,s,v,u,t,x?C.fx:C.bR])},
hOq(d,e){var x=e?C.v.j(0.72):C.b7
return A.ce(null,x,!0,null,new B.h7H(e),d,null,!0,!0,y.N)},
cfR(d,e,f,g,h,i,j,k,l){return new B.Wx(e,l,d,f,k,j,g,h,i,null)},
a_S(d,e,f,g,h,i,j){return new B.bgY(g,h,j,e,i,d,f,null)},
h7H:function h7H(d){this.a=d},
a_P:function a_P(d,e){this.c=d
this.a=e},
aBY:function aBY(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
df2:function df2(d){this.a=d},
df0:function df0(d){this.a=d},
df1:function df1(d){this.a=d},
bz3:function bz3(){},
Wx:function Wx(d,e,f,g,h,i,j,k,l,m){var _=this
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
aG2:function aG2(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e2s:function e2s(d){this.a=d},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1R:function e1R(d,e){this.a=d
this.b=e},
e1p:function e1p(d,e,f){this.a=d
this.b=e
this.c=f},
e1o:function e1o(d){this.a=d},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1v:function e1v(d,e,f){this.a=d
this.b=e
this.c=f},
e1u:function e1u(d){this.a=d},
e2g:function e2g(d,e){this.a=d
this.b=e},
e2h:function e2h(d){this.a=d},
e1N:function e1N(d,e,f){this.a=d
this.b=e
this.c=f},
e1K:function e1K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1t:function e1t(d){this.a=d},
e1V:function e1V(d){this.a=d},
e1U:function e1U(){},
e1z:function e1z(d){this.a=d},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2f:function e2f(d,e){this.a=d
this.b=e},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e){this.a=d
this.b=e},
e26:function e26(d,e){this.a=d
this.b=e},
e22:function e22(d){this.a=d},
e21:function e21(d){this.a=d},
e23:function e23(){},
e24:function e24(){},
e25:function e25(d,e){this.a=d
this.b=e},
e27:function e27(){},
e28:function e28(d){this.a=d},
e20:function e20(d,e){this.a=d
this.b=e},
e1W:function e1W(d){this.a=d},
e1X:function e1X(d){this.a=d},
e1Y:function e1Y(d){this.a=d},
e1Z:function e1Z(d){this.a=d},
e2_:function e2_(d){this.a=d},
e1w:function e1w(){},
e1x:function e1x(d){this.a=d},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1r:function e1r(d,e,f){this.a=d
this.b=e
this.c=f},
e1O:function e1O(d){this.a=d},
e1P:function e1P(d,e,f){this.a=d
this.b=e
this.c=f},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1E:function e1E(d){this.a=d},
e1B:function e1B(d,e,f){this.a=d
this.b=e
this.c=f},
e1F:function e1F(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1H:function e1H(){},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1C:function e1C(d){this.a=d},
e1A:function e1A(d,e,f){this.a=d
this.b=e
this.c=f},
e1D:function e1D(){},
e1T:function e1T(d){this.a=d},
e1S:function e1S(d,e){this.a=d
this.b=e},
e2c:function e2c(d,e){this.a=d
this.b=e},
e29:function e29(d){this.a=d},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e2p:function e2p(d){this.a=d},
e2n:function e2n(d){this.a=d},
e2o:function e2o(d){this.a=d},
e2q:function e2q(){},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2j:function e2j(d,e){this.a=d
this.b=e},
e2k:function e2k(d,e,f){this.a=d
this.b=e
this.c=f},
e2i:function e2i(d,e,f){this.a=d
this.b=e
this.c=f},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2m:function e2m(d,e){this.a=d
this.b=e},
aBV:function aBV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgX:function bgX(d,e,f){this.c=d
this.d=e
this.a=f},
deZ:function deZ(){},
df_:function df_(){},
ae0:function ae0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dfm:function dfm(){},
dfl:function dfl(d){this.a=d},
a_R:function a_R(d,e,f){this.c=d
this.d=e
this.a=f},
aC_:function aC_(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dfi:function dfi(d){this.a=d},
dfj:function dfj(d,e,f){this.a=d
this.b=e
this.c=f},
dfk:function dfk(d,e){this.a=d
this.b=e},
dfg:function dfg(d,e){this.a=d
this.b=e},
dfe:function dfe(d){this.a=d},
dfc:function dfc(d){this.a=d},
df9:function df9(d){this.a=d},
dff:function dff(d){this.a=d},
dfb:function dfb(d){this.a=d},
dfh:function dfh(d){this.a=d},
dfd:function dfd(d){this.a=d},
dfa:function dfa(d){this.a=d},
a_O:function a_O(d,e,f){this.c=d
this.d=e
this.a=f},
aBX:function aBX(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
deW:function deW(d){this.a=d},
deV:function deV(d,e){this.a=d
this.b=e},
deX:function deX(d){this.a=d},
deU:function deU(d,e){this.a=d
this.b=e},
deY:function deY(d){this.a=d},
deT:function deT(d,e){this.a=d
this.b=e},
deP:function deP(d){this.a=d},
deQ:function deQ(d){this.a=d},
deR:function deR(d,e){this.a=d
this.b=e},
deS:function deS(d){this.a=d},
QW:function QW(d,e,f){this.c=d
this.d=e
this.a=f},
aC2:function aC2(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dfz:function dfz(d){this.a=d},
dfA:function dfA(d){this.a=d},
dfB:function dfB(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfE:function dfE(d){this.a=d},
dfG:function dfG(d){this.a=d},
dfF:function dfF(d){this.a=d},
a_T:function a_T(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC0:function aC0(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dfv:function dfv(d,e){this.a=d
this.b=e},
dfw:function dfw(d,e){this.a=d
this.b=e},
dfn:function dfn(d,e,f){this.a=d
this.b=e
this.c=f},
dfo:function dfo(d){this.a=d},
dfp:function dfp(){},
dfu:function dfu(){},
dfq:function dfq(d,e){this.a=d
this.b=e},
dfr:function dfr(d,e){this.a=d
this.b=e},
dfs:function dfs(d,e){this.a=d
this.b=e},
dft:function dft(d,e){this.a=d
this.b=e},
adZ:function adZ(d,e){this.c=d
this.a=e},
deO:function deO(d){this.a=d},
a_N:function a_N(d){this.a=d},
aBW:function aBW(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_U:function a_U(d,e){this.c=d
this.a=e},
aC1:function aC1(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dfy:function dfy(d){this.a=d},
dfx:function dfx(d){this.a=d},
bgY:function bgY(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i2R(){var x,w=$.oF(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
Oy(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$Oy)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Oy)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Oy,w)},
a8M(d){return B.i2S(d)},
i2S(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8M)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i_("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cU,null),$async$a8M)
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
return A.i($async$a8M,w)},
WH(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oy(),$async$WH)
case 3:s=g
r=J.a2(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dH(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,d,t)
x=4
return A.b(B.a8M(s),$async$WH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WH,w)},
WI(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WI=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.cc(),$async$WI)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.cgd(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i2R()
t=A.U(u).k("O<1,a9<m,aE>>")
r=A.B(new A.O(u,new B.cge(s),t),t.k("aj.E"))
x=6
return A.b(B.Oy(),$async$WI)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=7
return A.b(B.a8M(q),$async$WI)
case 7:x=8
return A.b(B.a8N(r,u,g,s),$async$WI)
case 8:v=new A.bsU(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WI,w)},
arH(d){var x=0,w=A.j(y.y),v,u,t
var $async$arH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Oy(),$async$arH)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arH,w)},
cgf(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cgf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oy(),$async$cgf)
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
return A.i($async$cgf,w)},
a8N(d,e,f,g){return B.i2T(d,e,f,g)},
i2T(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8N=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arF("media",r,new B.cgc(s,e,g),f,q),$async$a8N)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WH(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8N)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WH(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$a8N)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WH(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8N)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8N,w)},
FA(d,e,f){return B.i2U(d,e,f)},
i2U(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FA=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$FA)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arH(b3),$async$FA)
case 7:if(c0){x=6
break}x=8
return A.b(A.bL(C.iY,null,g),$async$FA)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arH(b3),$async$FA)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oy(),$async$FA)
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
a8=$.f2().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nM(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acb(a8.a,b0,"media",a8.d,a9).Dy(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b25(k,n,o,s,b7),$async$FA)
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
a2=$.f2().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nM(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acb(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FA)
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
a0=A.dH(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8M(e),$async$FA)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FA,w)},
cgd:function cgd(){},
cge:function cge(d){this.a=d},
cgc:function cgc(d,e,f){this.a=d
this.b=e
this.c=f},
aTM(){var x=0,w=A.j(y.H),v,u
var $async$aTM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.iec=null
v=y.H
u=A.dO(null,v)
x=2
return A.b(u,$async$aTM)
case 2:u=A.dO(null,v)
x=3
return A.b(u,$async$aTM)
case 3:u=$.hlP
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dO(u,v),$async$aTM)
case 4:$.hlP=$.in2=$.in3=null
return A.h(null,w)}})
return A.i($async$aTM,w)},
fJu(d){var x=0,w=A.j(y.H),v,u
var $async$fJu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaS){x=1
break}u=new A.bn($.bG,y.d4)
d.c=new B.fJv(new A.c7(u,y.aY))
x=3
return A.b(u.ic(0,C.hb,new B.fJw()),$async$fJu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fJu,w)},
in0(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i2B(x):x},
hlT(d){var x=0,w=A.j(y.T),v,u,t
var $async$hlT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.Y(u,"WR")){v=B.arJ(u)
x=1
break}v=B.hgg(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hlT,w)},
hlS(d){var x=0,w=A.j(y.T),v,u,t
var $async$hlS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.Y(u,"WR")){v=B.arK(u)
x=1
break}v=B.hgg(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hlS,w)},
h38(d){var x=0,w=A.j(y.T),v
var $async$h38=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arK(d),$async$h38)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h38,w)},
bFs(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hlS(d),$async$bFs)
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
return A.i($async$bFs,w)},
fwJ(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fwJ=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WB(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cy(d.a85(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwJ,w)},
Hu(d,e,f){return B.ipl(d,e,f)},
ipl(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hu=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hlT(a1),$async$Hu)
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
return A.b($.hQr().aHj(D.dM7,null),$async$Hu)
case 4:l=d.hlP=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adC(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bG,y.b1)
l.y=new B.fK5(f,k,new B.fK6(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a9r(0,new B.YU(r,"offer")),$async$Hu)
case 5:d=l
x=7
return A.b(l.anb(0),$async$Hu)
case 7:x=6
return A.b(d.a9j(0,a4),$async$Hu)
case 6:x=8
return A.b(B.fJu(l),$async$Hu)
case 8:x=9
return A.b(l.arz(),$async$Hu)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.in0(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arL(m,h),$async$Hu)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hxw(h)
case 11:v=new A.bs7(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hu,w)},
fJv:function fJv(d){this.a=d},
fJw:function fJw(){},
fK6:function fK6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fK5:function fK5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fK4:function fK4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
irq(d){switch(d){case"new":return D.eK1
case"checking":return D.eK2
case"connected":return D.eK4
case"completed":return D.eK3
case"failed":return D.eK6
case"disconnected":return D.eK7
case"closed":return D.aT5
case"count":return D.eK5}return D.aT5},
irr(d){switch(d){case"new":return D.aT6
case"gathering":return D.eK8
case"complete":return D.aaS}return D.aT6},
iC2(d){switch(d){case"stable":return D.eK9
case"have-local-offer":return D.eKa
case"have-local-pranswer":return D.eKc
case"have-remote-offer":return D.eKb
case"have-remote-pranswer":return D.eKd
case"closed":return D.aTc}return D.aTc},
iAb(d){switch(d){case"new":return D.aT9
case"connecting":return D.aTa
case"connected":return D.aTb
case"closed":return D.aaT
case"disconnected":return D.aT8
case"failed":return D.aT7}return D.aaT},
ab8:function ab8(d,e){this.a=d
this.b=e},
PF:function PF(d,e){this.a=d
this.b=e},
YT:function YT(d,e){this.a=d
this.b=e},
PE:function PE(d,e){this.a=d
this.b=e},
G4:function G4(d,e){this.a=d
this.b=e},
cue:function cue(){},
hi3(d){var x=new B.G3()
x.a=d
x.b=!0
return x},
G3:function G3(){this.b=this.a=$},
ab7:function ab7(){},
awf:function awf(){},
YU:function YU(d,e){this.a=d
this.b=e},
hgc(){var x=0,w=A.j(y.H)
var $async$hgc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hgc,w)},
hgf(d,e,f){var x=0,w=A.j(y.T),v
var $async$hgf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mP(D.nh))){v=null
x=1
break}v=B.h3p(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgf,w)},
hxw(d){var x,w=F.agX.a66(C.e_.aK(d),null)
if(w.length===0){x=C.e_.aK(d)
return C.cN.gcp().aK(x)}return C.cN.gcp().aK(w)},
i2A(d){var x,w,v=C.cE.aK(d)
try{x=C.cd.cG(0,F.agW.bhm(v,!1))
return x}catch(w){x=C.cd.cG(0,v)
return x}},
hgg(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i2A(C.a.aY(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aY(t,w.length)
try{v=C.cd.cG(0,C.cE.aK(x))
return v}catch(u){return x}}return null},
i2B(d){var x,w,v,u,t,s=A.a([],y.s)
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
i2C(){var x,w=$.oF(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2b(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2b)
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
return A.i($async$b2b,w)},
cfW(d,e){return B.i2D(d,e)},
i2D(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cfW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i_("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cU,null),$async$cfW)
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
return A.i($async$cfW,w)},
b2e(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2b(d),$async$b2e)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2e,w)},
b2d(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i2C()
r=C.a.i(f)
t=C.e_.aK(s)
x=3
return A.b(B.cfW(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cN.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$b2d)
case 3:if(!h){v=null
x=1
break}v=new A.a1W("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2d,w)},
b2c(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2b(o),$async$b2c)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cd.cG(0,C.cE.aK(u))
if(J.jd(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2c,w)},
cfX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cfX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(P.bGr("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cU),$async$cfX)
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
return A.i($async$cfX,w)},
b2f(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jw(),$async$b2f)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2f,w)},
arC(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arC)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2f(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arC,w)},
arA(d,e){var x=0,w=A.j(y.H)
var $async$arA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arA)
case 3:x=2
return A.b(g.aE("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arA)
case 2:return A.h(null,w)}})
return A.i($async$arA,w)},
a8E(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8E=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8E)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jw(),$async$a8E)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dt(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=5
return A.b(A.a8D(s),$async$a8E)
case 5:x=6
return A.b(B.arA(f,u),$async$a8E)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8E,w)},
a8F(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8F=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8F)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jw(),$async$a8F)
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
return A.b(B.arA(g,q),$async$a8F)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8D(u),$async$a8F)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
a8G(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8G=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8G)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jw(),$async$a8G)
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
s=B.b28(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a8G)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aE("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().ag()],p,p),null)),$async$a8G)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8G,w)},
cfY(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cfY)
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
return A.i($async$cfY,w)},
Jx(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfY(d),$async$Jx)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2f(t),$async$Jx)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arB(d),$async$Jx)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b28(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arB(d),$async$Jx)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jx,w)},
arB(d){var x=0,w=A.j(y.H)
var $async$arB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arB)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arB)
case 2:return A.h(null,w)}})
return A.i($async$arB,w)},
b2g(){var x,w=$.oF(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a8H(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hgh(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cg0(d){return B.i2F(d)},
i2F(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cg0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8H(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cg0)
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
return A.i($async$cg0,w)},
arE(d,e){return B.i2G(d,e)},
i2G(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8H(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i_("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cU,null),$async$arE)
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
return A.i($async$arE,w)},
cg2(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cg2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8H(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arE(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cg2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cg2,w)},
cg1(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cg1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8H(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arE(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cg1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cg1,w)},
cg3(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cg3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8H(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arE(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg3,w)},
cg4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cg4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hgh(d)){v=null
x=1
break}x=3
return A.b(B.cg0(d),$async$cg4)
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
return A.i($async$cg4,w)},
a8O(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8O=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8O)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8O)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8O,w)},
arI(d){return B.i2V(d)},
i2V(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$arI)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i_("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cU,null),$async$arI)
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
return A.i($async$arI,w)},
arJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d8(j,"WR")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arJ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8O(),$async$arJ)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cd.cG(0,C.cE.aK(q))
if(J.jd(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dH(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().ag())
J.aK(s,j,o)
x=9
return A.b(B.arI(s),$async$arJ)
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
return A.i($async$arJ,w)},
arL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.cc(),$async$arL)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8O(),$async$arL)
case 4:u=g
t=J.a2(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dH(A.a1(s,r,q),r,q)
r=C.e_.aK(C.a.i(e))
q.n(0,"answer",C.cN.gcp().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().ag())
t.n(u,p,q)
x=5
return A.b(B.arI(u),$async$arL)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arL,w)},
arK(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arK)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8O(),$async$arK)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cd.cG(0,C.cE.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arK,w)},
aqC(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.op)){v=null
x=1
break}x=3
return A.b(p.lv(e),$async$aqC)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.ho),$async$aqC)
case 7:q=g
o=q
o=o==null?null:J.eR(J.uT(o))
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
return A.i($async$aqC,w)},
iyh(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
h1i(d){return B.iyj(d)},
iyj(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h1i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f2().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").LT(d,3600),$async$h1i)
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
return A.i($async$h1i,w)},
DX(d,e,f,g,h,i){var x=null
return B.iyg(d,e,f,g,h,i)},
iyg(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DX=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hxz(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hgj(r),$async$DX)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h1i(o),$async$DX)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8I(r),$async$DX)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWO)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MR(A.a([],g))
x=15
return A.b(d.fb(0,A.ax4("GET",A.cF(n,0,null))).de(0,C.Hv),$async$DX)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8I(r),$async$DX)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ln(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DX)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2i(r,k),$async$DX)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DX)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WB(r)
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
return A.b(B.a8I(r),$async$DX)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DX,w)},
aTq(d){return B.iyi(d)},
iyi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f2().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTq)
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
return A.i($async$aTq,w)}},D,Z,I,O,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
P=c[77]
K=c[117]
Q=c[367]
R=c[60]
F=c[357]
L=c[216]
G=c[82]
S=c[325]
T=c[326]
E=c[316]
H=c[119]
U=c[274]
V=c[137]
W=c[85]
X=c[217]
Y=c[323]
M=c[305]
N=c[368]
B=a.updateHolder(c[26],B)
D=c[366]
Z=c[273]
I=c[139]
O=c[299]
A_=c[92]
A0=c[351]
A1=c[100]
B.cuf.prototype={
aHj(d,e){return this.cSH(d,e)},
cSH(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dH(r,s,t)
t.u(0,d)
u=new q(A.kx(A.cw(t)))
t=J.k(u)
v=B.i7F(C.cN.gcp().aK(new A.dg(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHj,w)}}
B.b7r.prototype={
bDG(d){var x=this,w=x.w
w.onclose=A.hC(new B.cua(x))
w.onopen=A.hC(new B.cub(x))
w.onmessage=A.hC(new B.cuc(x))
w.onbufferedamountlow=A.hC(new B.cud(x))},
gd4(d){return this.x},
ajp(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G3()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hi3(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$ajp)
case 8:v=t.hi3(s.apL(f,0,null))
x=1
break
case 7:case 4:v=B.hi3(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajp,w)}}
B.b7s.prototype={
bDH(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hC(new B.cug(x)))
w.addEventListener("icecandidate",A.hC(new B.cuh(x)))
w.addEventListener("iceconnectionstatechange",A.hC(new B.cui(x)))
w.onicegatheringstatechange=A.hC(new B.cuj(x))
w.addEventListener("signalingstatechange",A.hC(new B.cuk(x)))
if(!$.hq_())w.addEventListener("connectionstatechange",A.hC(new B.cul(x)))
w.addEventListener("negotiationneeded",A.hC(new B.cum(x)))
w.addEventListener("track",A.hC(new B.cun(x)))},
anb(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ek(s.createAnswer(A.kx(A.cw(A.T(y.N,y.z)))),y.aQ),$async$anb)
case 3:t=f
v=new B.YU(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anb,w)},
a9j(d,e){return this.bsD(0,e)},
bsD(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9j)
case 2:return A.h(null,w)}})
return A.i($async$a9j,w)},
a9r(d,e){return this.bsY(0,e)},
bsY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9r)
case 2:return A.h(null,w)}})
return A.i($async$a9r,w)},
arz(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YU(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arz,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f6(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.ae_.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_Q.prototype={
R(){return new B.aBZ()},
gd6(){return this.c}}
B.aBZ.prototype={
a_(){this.a4()
this.afV()},
afV(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b29(u.e,u.c),$async$afV)
case 2:t=e
if(v.c!=null)v.l(new B.df6(v,t))
return A.h(null,w)}})
return A.i($async$afV,w)},
Ru(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ru=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arx(t.e,t.c,!1),$async$Ru)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fz5)
x=1
break}x=4
return A.b(B.a8C(u.a.c,"individual"),$async$Ru)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a7F(A.ec(new B.df3(u),!1,null,y.H)),$async$Ru)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ru,w)},
K9(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$K9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fHl(o),$async$K9)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8G(o.e,r,s,q),$async$K9)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fw4)
x=1
break}x=5
return A.b(B.a8C(u.a.c,"member"),$async$K9)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a7F(A.ec(new B.df5(u),!1,null,y.H)),$async$K9)
case 6:case 1:return A.h(v,w)}})
return A.i($async$K9,w)},
yS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8B(t.e,o,t.f,t.r,t.w,s),$async$yS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8C(u.a.c,"org_owner"),$async$yS)
case 4:x=5
return A.b(B.arC(u.a.c),$async$yS)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fHQ(o),$async$yS)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8E(s,t,o,q.c),$async$yS)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fw0)
x=1
break}x=10
return A.b(B.arC(u.a.c),$async$yS)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a7F(A.ec(new B.df4(u),!1,null,y.H)),$async$yS)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yS,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nM:I.qJ,p=B.hge(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dI,y.m).w
w=A.n(28)
v=A.a([new A.aa(0,C.H,C.aD.j(0.35),C.h0,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fTn,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hl,s,s,s),C.aA,D.hcB,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cdY,C.m),s,s,s,s,C.eG,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lN(new B.df8(),s),C.P,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.ak,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aet(C.f3,C.aFy,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclm(),s),C.af],u))
w.push(new B.aet(C.pR,C.a6j,"Team Member","Sign in with your organization access code + password",t.gcmf(),s))
w.push(C.af)
w.push(new B.aet(C.ars,C.a7X,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gclL(),s))
return A.c5(s,q,A.bo(!0,A.ca(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aet.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eG(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.ev,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.ma,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.W(V.zQ,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEE.prototype={}
B.aHR.prototype={}
B.jS.prototype={
mP(d){var x=this.b,w=C.a.ph(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gasf(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.aa(x/1024,1)+" KB"
if(x<1073741824)return C.i.aa(x/1048576,1)+" MB"
return C.i.aa(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.T(y.N,y.z)
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
bgQ(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRc(d){return this.bgQ(null,d)},
aH2(d){return this.bgQ(d,null)}}
B.Wv.prototype={
R(){return new B.aG0(new A.cx(null,y.A))},
gd6(){return this.c}}
B.aG0.prototype={
a_(){this.a4()
this.afW()},
afW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cx(u.a.c),$async$afW)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e1l(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afW,w)},
afX(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fL(new A.fA(s)),$async$afX)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fA0)
case 1:return A.h(v,w)}})
return A.i($async$afX,w)},
a0b(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0b=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqC(s.d,4),$async$a0b)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rz(r,"ngmy_my_code_"+m+".png"),$async$a0b)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0b,w)},
ajR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abL("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajR,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nM:I.qJ,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lO
else if(q.e==null)x=A.at(new A.D(C.eG,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.F,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.P,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,M.Ji,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ak,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,Q.ao2,p,p,1/0)
v=A.n(20)
u=A.a([new A.aa(0,C.H,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nn,w,C.lk,new A.e9(A.p(p,A.qr(p,p,!1,B.i2w(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lk,A.A(A.a([A.E(A.en(K.DU,p,C.X6,q.gcdw(),p),1),C.ar,A.E(A.dc(C.Ag,p,C.adh,q.gcdx(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a6(1/0,p,A.en(O.a56,p,D.h86,q.gcBn(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,A_.aoD,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wz.prototype={
R(){return new B.aG3(new A.au(C.ax,$.az()),A.ko(!0,null,!0,!0,null,null,!1))}}
B.aG3.prototype={
a_(){var x,w
this.a4()
x=this.a.e
w=B.Jv(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a3()},
a0c(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jv(u.d.a.a)
if(t==null){u.l(new B.e2u(u))
x=1
break}u.l(new B.e2v(u))
s=u.a
r=s.c
x=3
return A.b(B.a8A(s.d,new B.e2w(u),t,r),$async$a0c)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e2x(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0c,w)},
a3y(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cv(r.a.d)){x=1
break}r.l(new B.e2y(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.t5(r.a.c,q),$async$a3y)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e2z(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajz(p,m,l,j,k),$async$a3y)
case 8:o=e
if(r.c!=null)r.l(new B.e2A(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e2B(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e2C(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3y,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ak2:D.ahw,h=j?D.alQ:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aj0:C.bn
i=[i,e,h,g,f,j?C.fx:C.bR]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eS(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dq(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dq(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c0P,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.m),k,52,k,k,k,k,k,52),C.ev,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.fc,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,M.Ji,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v6(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmt()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.P9,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e2D(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mI,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.HW(l.a.d,4)
m=A.B(new A.O(m,new B.e2E(x,new A.aJ6(i)),m.$ti.k("O<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lx,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.dc,p,C.P,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fux)
else q.push(A.W(C.kK,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cU(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b_,new A.o(u,k,s,t,k,k,C.m),C.iX,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJ4,k,k,C.ah),1)
u=l.f?k:l.gcBo()
t=i[3]
s=i[1]
q=A.n(16)
s=A.en(O.a56,k,D.h9d,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdy()
t=A.bp(C.aD,k,k,0,C.c,k,C.nU,k,new A.ba(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bo(!0,A.lV(new B.e2F(),A.x(A.a([e,new A.D(D.bIy,A.x(A.a([s,C.P,i,C.af,A.bI(l.f?C.ud:D.h7s,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cn,C.a1i,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmt.prototype={
pd(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fi(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hv(C.bD,v.length),C.aP)}}
B.Ww.prototype={
R(){return new B.aG1()}}
B.aG1.prototype={
a_(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.az()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bd(x,C.b6,C.aP),v)
u.f!==$&&A.aT()
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
w.a3()},
afY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e1m(r))
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
return A.b(B.a8F(p,m,n,o,C.a.i(l).length===0?null:l),$async$afY)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fzC)
s=[1]
x=4
break}p.L(y.q).f.T(D.fyd)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e1n(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afY,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nM:I.qJ,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h_M,s,s,s,1,s,!0),p=A.p(s,D.bAw,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.IV,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8g,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8b,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8r,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdz()
u=A.bp(C.aD,s,s,s,s,C.hr,s,s,s,s,s,s)
return A.c5(q,r,A.ca(A.x(A.a([p,C.dc,o,C.af,x,C.af,w,C.nn,A.bI(t.r?C.ud:C.aZD,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adH.prototype={}
B.bzr.prototype={
a6n(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.a85()))
x=3
return A.b(B.SA(t,s),$async$a6n)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6n,w)},
gd6(){return this.a}}
B.Ow.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_P.prototype={
R(){return new B.aBY(new A.au(C.ax,$.az()),A.ko(!0,null,!0,!0,null,null,!1))}}
B.aBY.prototype={
a_(){this.a4()
$.aU.U$.push(new B.df2(this))},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a3()},
cdF(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2W(d),u=x.a.c,t=u?C.iR:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nM:v.a[0],p=A.n(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.aD.j(u?0.25:0.12),C.h0,32)],n),l=A.p(w,Z.auc,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.aa(0,C.H,C.aD.j(0.4),C.cz,16)],n),C.av1,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.F,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v6(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bz3()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.D5,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b87),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.df0(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mI,w,w,w,w)
f=f[1]
h=y.p
return A.eE(w,C.L,new A.cQ(U.MS,new A.bP(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x1,A.x(A.a([l,C.aO,k,C.P,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dW(C.om,new B.df1(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.ba(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.o(w,w,w,A.n(14),A.a([new A.aa(0,C.H,C.aD.j(0.35),C.cP,12)],n),N.Rd,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eDp,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcdE(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.M,0,C.p),w),w),w),w,w,w,C.Ph,w,C.d7,w,w,w)}}
B.bz3.prototype={
pd(d,e){return e.an5(e.a.toUpperCase())}}
B.Wx.prototype={
R(){return new B.aG2(A.a([],y.r),A.aQ(y.N))},
gd6(){return this.c}}
B.aG2.prototype={
a_(){var x=this
x.a4()
x.uu()
x.w=A.d1(C.jT,new B.e2s(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WG()
this.a3()},
a2p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ov(u.a.c),$async$a2p)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bs(u.a.c),$async$a2p)
case 4:u.l(new s.e1Q(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2p,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ov(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bs(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e1R(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OB(u.d)
B.Cx(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
OB(d){return this.bHM(d)},
bHM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8K(r,u.a.c),$async$OB)
case 8:p=f
if(u.c==null){x=1
break}new B.e1p(u,r,p).$0()
u.c.ex()
case 7:if(!(C.a.Y(r.c,"video/")||r.mP(D.nh))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WE(r,u.a.c),$async$OB)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bs(u.a.c),$async$OB)
case 12:u.l(new o.e1q(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OB,w)},
P0(d){return this.bOb(d)},
bOb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8K(d,u.a.c),$async$P0)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e1v(u,d,t))
x=6
return A.b(A.fL(new A.fA(t)),$async$P0)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fL(new A.fA(r.toUpperCase())),$async$P0)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P0,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cMt(d,e)},
cMt(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e2g(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e2h(r))
$.eY.mI()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaYQ(){var x=this.a
return x.f||x.r||x.w},
IW(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYQ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cfU(s,n,r,q,o,t),$async$IW)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fUU(o,u.a.c),$async$IW)
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
return A.b(B.DZ(s,o,r,q,n,t),$async$IW)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IW,w)},
a1r(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arC(u.a.c),$async$a1r)
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
return A.b(A.a8(t,!1).cc(A.ec(new B.e1N(u,r,q),!1,null,y.H)),$async$a1r)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1r,w)},
a2z(d){return this.cuP(d)},
cuO(){return this.a2z(1)},
cuP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYQ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arz(u.a.c),$async$a2z)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2z,w)},
adN(d,e,f){return this.c4c(d,e,f)},
c4c(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uv(new B.e1K(u,d,null,e,f),"Uploading\u2026"),$async$adN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adN,w)},
bHV(){B.hNo(!1,new B.e1t(this))
return},
czX(){this.l(new B.e1V(this))},
aBt(){var x=0,w=A.j(y.H),v=this
var $async$aBt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHV()
return A.h(null,w)}})
return A.i($async$aBt,w)},
adJ(){var x=0,w=A.j(y.H),v=this
var $async$adJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e1z(v),"Importing\u2026"),$async$adJ)
case 2:return A.h(null,w)}})
return A.i($async$adJ,w)},
Ty(d){return this.cLM(d)},
cLM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ty=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mP(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cc(A.ec(new B.e2d(u,d),!1,null,y.H)),$async$Ty)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mP(D.Th)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cc(A.ec(new B.e2e(u,d),!1,null,y.H)),$async$Ty)
case 8:x=1
break
case 7:x=u.c4V(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cc(A.ec(new B.e2f(u,d),!1,null,y.H)),$async$Ty)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Ty,w)},
c4V(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.ph(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cXT,C.a.aY(x,w+1).toLowerCase())},
ahz(d){return this.clq(d)},
clq(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mP(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cc(A.ec(new B.e1L(u,d),!1,null,y.H)),$async$ahz)
case 5:x=1
break
case 4:u.l(new B.e1M(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahz,w)},
SU(d){return this.cCS(d)},
cCS(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pO(t,s.c,s.f),$async$SU)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e26(u,d),"Preparing QR\u2026"),$async$SU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SU,w)},
akg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e27(),A.U(t).k("O<1,m>")).fC(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e28(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SU(r),$async$akg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akg,w)},
ak9(d){return this.cCp(d)},
cCp(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ak9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2W(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e20(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ak9)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Ty(d)
break
case"qr":u.SU(A.a([d],y.r))
break
case"send_my_code":u.cm4(A.a([d],y.r))
break
case"save":u.ajx(d)
break
case"delete":u.JR(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ak9,w)},
YV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e1w(),A.U(t).k("O<1,m>")).fC(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e1x(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pO(t,s.c,s.f),$async$YV)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e1y(u,r),"Preparing file\u2026"),$async$YV)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YV,w)},
aiF(d){return this.ct6(d)},
ct6(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hOq(d,!1),$async$aiF)
case 3:s=f
r=s==null
q=B.a8H(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiF,w)},
ahF(){var x=0,w=A.j(y.H),v=this,u
var $async$ahF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h2p(u,v.a.c),$async$ahF)
case 2:return A.h(null,w)}})
return A.i($async$ahF,w)},
bHU(){B.hNo(!1,new B.e1s(this,null))
return},
K8(d,e){return this.cm5(d,e)},
b4x(d){return this.K8(null,d)},
cm4(d){return this.K8(d,null)},
cm5(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$K8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e1O(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y0.cr().apT(!0,C.a37,!1),$async$K8)
case 10:r=g
if(r==null||J.cv(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e1P(l,s,r),"Preparing\u2026"),$async$K8)
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
return A.b(B.bHG(p,l,e,s.a.c),$async$K8)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$K8,w)},
Jc(d){return this.c4_(d)},
c4_(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i2v(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4x(t),$async$Jc)
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
return A.b(u.uv(new B.e1I(u,d),"Receiving video\u2026"),$async$Jc)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e1J(u,d),"Receiving\u2026"),$async$Jc)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jc,w)},
F1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DT()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiF(t),$async$F1)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jc(s),$async$F1)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cc(A.ec(new B.e1T(u),!1,null,y.N)),$async$F1)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$F1)
case 10:x=1
break
case 9:x=11
return A.b(u.Jc(C.a.i(r)),$async$F1)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F1,w)},
ajx(d){return this.cyr(d)},
cyr(d){var x=0,w=A.j(y.H),v=this
var $async$ajx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e1S(v,d),"Saving\u2026"),$async$ajx)
case 2:return A.h(null,w)}})
return A.i($async$ajx,w)},
JR(d){return this.bQy(d)},
bQy(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lB(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JR)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cfX(t),$async$JR)
case 6:case 5:s=d.a
x=7
return A.b(B.Fz(u.a.c,s),$async$JR)
case 7:u.r.X(0,s)
x=8
return A.b(u.uu(),$async$JR)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JR,w)},
akm(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2W(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2c(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akm)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahF()
break
case"import":u.adJ()
break}case 1:return A.h(v,w)}})
return A.i($async$akm,w)},
cdC(d){var x=d.c
if(C.a.Y(x,"video/")||d.mP(D.nh))return C.rf
if(C.a.Y(x,"image/")||d.mP(D.Th))return C.vn
if(C.a.q(x,"pdf"))return T.IB
return D.arQ},
B(d){var x,w,v=this,u=null,t=B.a2W(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IN,u,u,u,new B.e2n(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c1q,u,u,u,v.e?u:v.gclM(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gczW()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bWu:E.ase,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a53,u,u,u,v.e?u:v.gcdD(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p0,u,u,u,v.e?u:v.gb5D(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3f,u,u,u,v.e?u:new B.e2o(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lN(new B.e2p(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dq(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dq(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jD(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBV(C.jD,s,!0,t,w?u:v.gcCT(),u),1)
x.push(new A.D(D.bHg,A.lV(new B.e2q(),A.A(A.a([s,C.ar,A.E(new B.aBV(C.tA,"Export",!1,t,w?u:v.gbUq(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cn,C.iJ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgX(t,v.e?u:v.gb5D(),u)
else s=A.kF(!0,u,u,new B.e2r(v,t),s,u,D.bH7,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBV.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.tp,t,new A.ba(s,C.a1),t,t,t)
return A.dc(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tp,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.en(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fh,t,t,t),u.r,v)}}
B.bgX.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lV(new B.deZ(),new A.D(E.a2e,A.x(A.a([A.lV(new B.df_(),A.p(x,A.W(C.zU,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ei,C.hJ,x,x,new A.bq(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.dc(C.p0,x,D.hcV,this.d,A.bp(C.aD,x,x,x,C.c,x,C.Pf,x,new A.ba(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.M,0,C.p),x),C.cn,C.CU,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ae0.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.du(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mP(D.nh))p=D.dAr
else{p=C.a.Y(p,"image/")||i.mP(D.Th)
n=y.O
p=p?A.a([C.cV,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasf()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mP(D.nh))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.fY,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cl))
if(!(!o||i.mP(D.nh)))l.push(A.hdY(C.aD,!1,j,j,j,!1,j,j,new B.dfl(k),j,j,new A.ba(A.n(5),C.a1),j,j,!1,u))
x=A.W(C.oW,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cl))
return A.lV(new B.dfm(),new A.D(C.e9,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1H,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bf("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_R.prototype={
R(){return new B.aC_()},
gd6(){return this.c}}
B.aC_.prototype={
a_(){this.a4()
this.yH()},
t(){B.i2K(this.e)
this.a3()},
yH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t5(o.c,o.d),$async$yH)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i2N(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i2M(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dfi(s))
x=1
break}s.l(new B.dfj(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dfk(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yH,w)},
a3x(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t5(t.c,t.d),$async$a3x)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fwB)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajz(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3x)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3x,w)},
c3T(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kV(u,C.z,v,new B.dfg(w,t),C.hd,C.dF,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h3(t,C.z,v,new B.dfh(w),C.hd,C.dF,!0,v,!1,v,v)
else return C.bL
return A.vd(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2W(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DW,u,u,u,v.gb9r(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gj
else{q=v.r
if(q!=null)t=new A.D(C.eG,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eG,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dc(C.DW,u,D.fVT,v.gb9r(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.M,0,C.p),u)
t=p}else t=v.c3T()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_O.prototype={
R(){return new B.aBX(A.aky(),C.bF,C.bF)},
gd6(){return this.c}}
B.aBX.prototype={
a_(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fE(w,A.a5(w).k("fE<1>")).iF(new B.deW(v))
x.gd_n().iF(new B.deX(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fE(x,A.a5(x).k("fE<1>"))}if(x==null)x=C.bev
x.iF(new B.deY(v))
v.yH()},
yH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t5(p.c,p.d),$async$yH)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.deP(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a56(r,s.a.d.c)),$async$yH)
case 8:if(s.c==null){x=1
break}s.l(new B.deQ(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.deR(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yH,w)},
a0d(){var x=0,w=A.j(y.H),v=this,u
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0d)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0d)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0d,w)},
aWG(d){var x=d.a
return C.a.b0(C.o.v(C.o.ap(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ap(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2W(d),m=C.o.ap(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gj
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bXs,C.f,o,o,new A.o(o,o,o,A.n(24),o,N.Rd,C.m),o,88,o,o,o,o,o,88)
t=A.ld(C.aD,o,o,m,0,new B.deS(p),C.o.D(C.o.ap(p.w.a,1000),0,m))
x=A.c(p.aWG(p.w)+" / "+p.aWG(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.ft_,o,o,o,o,o,o)
r=p.f
q=A.W(r?L.vq:C.fZ,o,o,o,o,o)
x=A.x(A.a([u,C.lk,t,x,C.dc,A.dc(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcdG(),s)],y.p),C.l,o,C.e,C.M,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.r1,x,o),o,o,o),o,!1,!1,o,o)}}
B.QW.prototype={
R(){return new B.aC2()},
gd6(){return this.c}}
B.aC2.prototype={
a_(){this.a4()
this.QL()},
QL(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QL=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hgf(o.c,o.d,new B.dfz(s)),$async$QL)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dfA(s))
x=1
break}s.e=r
q=R.iqg(r)
if(q==null){s.l(new B.dfB(s))
x=1
break}s.d=q
q.aU(0,s.gb4l())
x=8
return A.b(q.iV(0).de(0,C.nT),$async$QL)
case 8:if(s.c==null){x=1
break}s.l(new B.dfC(s))
x=9
return A.b(q.qt(0),$async$QL)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dfD(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QL,w)},
cjZ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dfE(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DN(0,x.gb4l())
w=x.d
if(w!=null)w.t()
B.iAu(x.e)
x.a3()},
ag0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2h(u.c,u.d),$async$ag0)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ag0,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2W(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aI(t,t,t,t,C.o8,t,t,t,u.gcdA(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iy(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gj
else{q=u.r
if(q!=null)s=new A.D(C.eG,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajZ(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AY(s,t),A.aA(t,A.xK(A.p(t,A.W(q?L.vq:C.fZ,C.c,t,t,t,48),C.f,t,t,new A.o(C.b7,t,t,v,t,t,C.m),t,t,t,t,C.bQ,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dfG(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_T.prototype={
R(){return new B.aC0(new A.cx(null,y.A))}}
B.aC0.prototype={
gcM9(){var x,w,v=this.a
if(v.e!==D.UG)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcLK(){var x,w,v=this.a
if(v.e!==D.AT)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a4()
x=v.gcM9()
if(x!=null){v.RV(x)
v.e=A.d1(X.CW,new B.dfv(v,x))}w=v.gcLK()
if(w!=null){v.RU(w)
v.f=A.d1(C.fB,new B.dfw(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
RU(d){return this.crh(d)},
crh(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arH(d),$async$RU)
case 3:t=f
x=4
return A.b(B.cgf(d),$async$RU)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfn(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
RV(d){return this.cri(d)},
cri(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h38(d),$async$RV)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFs(t),$async$RV)
case 4:if(u.c==null){x=1
break}u.l(new B.dfo(u))
u.c.L(y.q).f.T(D.aWn)
case 1:return A.h(v,w)}})
return A.i($async$RV,w)},
gc9n(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcdB(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3h(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DT()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fzM)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cc(A.ec(new B.dfp(),!1,null,y.N)),$async$a3h)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFs(s),$async$a3h)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aWn)
case 1:return A.h(v,w)}})
return A.i($async$a3h,w)},
abB(d){return this.bOc(d)},
bOc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fL(new A.fA(C.d.aL(t,", "))),$async$abB)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abB,w)},
afZ(d){return this.bNV(d)},
bNV(d){var x=0,w=A.j(y.H),v=this
var $async$afZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fL(new A.fA(v.a.c)),$async$afZ)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fx4)
return A.h(null,w)}})
return A.i($async$afZ,w)},
a3b(d){return this.cyt(d)},
cyt(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqC(s.d,4),$async$a3b)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rz(r,"ngmy_doc_share_qr.png"),$async$a3b)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3b,w)},
gb_5(){var x,w=this.a
if(w.e!==D.K0)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
aby(d){return this.bO5(d)},
bO5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aby=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_5()
if(t==null){x=1
break}x=3
return A.b(A.fL(new A.fA(C.a.Y(t,"http")?t:"N2|"+t)),$async$aby)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fyL)
case 1:return A.h(v,w)}})
return A.i($async$aby,w)},
ag_(){var x=0,w=A.j(y.H),v=this,u
var $async$ag_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WG(),$async$ag_)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ag_,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2W(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.K0&&i!==D.UG&&i!==D.AT
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.K0||t===D.UG||t===D.AT?l:A.aI(l,l,l,l,C.lB,l,l,l,m.gb2c(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qr(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gc9n(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.K0){t=C.aD.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.P,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lY,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcdB(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c7j,D.h4C,new B.dfq(m,d),l)],p))}if(m.a.e===D.K0&&m.gb_5()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c3B,D.h1a,new B.dfr(m,d),l)],p))
if(m.a.e===D.AT){x=(m.w?C.dQ:C.aD).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.i.aa(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gn:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lY,l,l,l)],p))}if(m.a.e===D.UG){x=(m.r?C.dQ:C.aD).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gn:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lY,l,l,l),C.af,A.dc(D.bZX,l,D.h7M,m.gcyQ(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.p5(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b9,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(K.DU,l,C.X6,new B.dfs(m,d),l),1),C.ar,A.E(A.dc(C.Ag,l,C.adh,new B.dft(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.P,new A.a6(1/0,l,A.bI(W.Bx,l,m.gb2c(),A.bp(C.aN,l,l,l,l,C.hr,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dfu(),y.C)}}
B.adZ.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.p(x,A.qr(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bG,x,x,x)],u),C.l,x,C.e,C.M,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.eh(A.a([A.bI(C.By,x,new B.deO(d),x)],u),x,x,C.nC,v,x,x,x,x,D.fUP,x)}}
B.a_N.prototype={
R(){return new B.aBW(A.A6(C.z9,C.ot,C.vC))}}
B.aBW.prototype={
t(){this.d.t()
this.a3()},
aA_(d){var x,w,v,u,t
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
return A.c5(A.eS(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h1I,x,x,x,1,x,!0),C.v,A.A5(this.d,C.bZ,this.gazZ()),x,!1,!1,x,x)}}
B.a_U.prototype={
R(){return new B.aC1(A.A6(C.z9,C.ot,C.vC))},
gd6(){return this.c}}
B.aC1.prototype={
c4X(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ai1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MX("text/plain"),$async$ai1)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fzG)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ai1,w)},
acp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hOq(p,!0),$async$acp)
case 3:t=e
p=t==null
s=B.a8H(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fwb)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acp,w)},
t(){this.d.t()
this.a3()},
aA_(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c4X(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.ath,v,v,v,w.gbTU(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5a,v,v,v,w.gcoA(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.vj:S.Qq,v,v,v,v,v),v,v,v,new B.dfy(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h8I,v,v,v,1,v,!0)
u=A.A5(w.d,C.bZ,w.gazZ())
x=A.n(20)
return A.c5(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eJH],s),v),v,!1,!1,v,v)}}
B.bgY.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pD
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pD:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2k,A.A(A.a([u,C.bb,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.W(C.eM,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.ab8.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.PF.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YT.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.PE.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.G4.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cue.prototype={}
B.G3.prototype={}
B.ab7.prototype={}
B.awf.prototype={}
B.YU.prototype={}
var z=a.updateTypes(["ay<~>()","P(jS)","m(jS)","Wx(Z)","~()","a_Q(Z)","F(F,jS)","QW(Z)","~(lF)","cm(G3)","ay<jS?>(@)","Wv(Z)","Wz(Z)","D(jS)","jS(@)","a9<m,@>(jS)","a_P(Z)","Ww(Z)","a_R(Z)","a_O(Z)","a_T(Z)","adZ(Z)","ai<jS>()","a_U(Z)","ae0(Z,F)","a_N(Z)","a9<m,aE>(jS)","cm(YT)","cm(ab7)","ay<cm>(G3)"])
B.cua.prototype={
$1(d){var x=this.a
x.x=D.aT4
x.y.I(0,D.aT4)},
$S:75}
B.cub.prototype={
$1(d){var x=this.a
x.x=D.aT3
x.y.I(0,D.aT3)},
$S:75}
B.cuc.prototype={
$1(d){var x=this.a
x.ajp(A.aig(d.data)).bE(new B.cu9(x),y.b)},
$S:75}
B.cu9.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cud.prototype={
$1(d){},
$S:75}
B.cug.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i7E(d.channel))},
$S:17}
B.cuh.prototype={
$1(d){},
$S:17}
B.cui.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.irq(w.iceConnectionState)
x.cx=w
if($.hq_())switch(w.a){case 0:x.cy=D.aT9
break
case 1:x.cy=D.aTa
break
case 3:x.cy=D.aTb
break
case 5:x.cy=D.aT7
break
case 6:x.cy=D.aT8
break
case 7:x.cy=D.aaT
break
default:break}},
$S:109}
B.cuj.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.irr(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.cuk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iC2(w.signalingState)},
$S:109}
B.cul.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iAb(w.connectionState)},
$S:109}
B.cum.prototype={
$1(d){},
$S:109}
B.cun.prototype={
$1(d){},
$S:17}
B.fCJ.prototype={
$1(d){var x=y.F.a(new A.qH([],[]).o6(d.target.result,!1)),w=C.wR.q(x.objectStoreNames,"blobs")
if(!w)C.wO.Gy(x,"blobs")},
$S:164}
B.h2d.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xv.fv(this.b)
$.eY.mI()
this.c.$1(d)},
$S:445}
B.h2f.prototype={
$1(d){return this.a.$1(B.igZ(this.b,this.c))},
$S:33}
B.h2e.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h2c.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h2s.prototype={
$1(d){var x=this
return B.hCz(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h2t.prototype={
$1(d){var x=this
return B.hCz(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fFp.prototype={
$1(d){var x=this
return B.cfR(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.df6.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.df3.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfR(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.df5.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfR(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.df4.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfR(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.df8.prototype={
$4(d,e,f,g){var x=null
return A.kd(A.A(A.a([A.aI(x,x,x,x,D.bYy,x,x,x,new B.df7(d),x,x,x,x,x,x),A.E(A.FQ(D.T_,!0,x,!1,C.a4c,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.T_,x,g,C.aoU,0,e,f)},
$C:"$4",
$R:4,
$S:409}
B.df7.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fHo.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f0,y.m).w,t=this.a,s=t?C.iR:C.c,r=A.n(28),q=A.p(v,D.bAQ,C.f,v,v,D.b9M,v,v,v,v,D.aoJ,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c22,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.D7,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atx,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dW(C.dr,new B.fHm(d),v),1),C.ar,A.E(A.bI(D.h09,v,new B.fHn(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.M,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HC,v,v,v,v),v)},
$S:62}
B.fHm.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fHn.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fxl)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aEE(v,x))},
$S:0}
B.fHS.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f0,y.m).w,u=x.a,t=u?C.iR:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bAG,C.f,w,w,D.bbg,w,w,w,w,D.aoJ,w,w,1/0),new A.D(C.D7,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hlD(u,"Organization name",C.Ib,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hlD(u,"Access code",C.mt,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hlD(u,"Member password",C.DT,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bI(D.h8P,w,new B.fHR(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hr,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.M,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HC,w,w,w,w),w)},
$S:62}
B.fHR.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fxq)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aHR(u,x,w))},
$S:0}
B.cfI.prototype={
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
p=C.a.Y(j,"http")?A.cF(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.w3(p,null).de(0,C.a1h),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cy(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cfO.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfP.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cfQ.prototype={
$1(d){return d.b},
$S:z+2}
B.cfK.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfL.prototype={
$1(d){return d.b},
$S:z+2}
B.cfJ.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cfM.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cfN.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h2q.prototype={
$1(d){return new B.Wv(this.a,null)},
$S:z+11}
B.h2r.prototype={
$1(d){return new B.Wz(this.a,this.b,this.c,null)},
$S:z+12}
B.e1l.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e2u.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e2v.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e2w.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e2t(x,d))},
$S:2}
B.e2t.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e2x.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e2y.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e2z.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e2A.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e2B.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e2C.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e2F.prototype={
$3(d,e,f){return A.d5(A.dR(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.e2D.prototype={
$1(d){var x=this.a
return x.f?null:x.a0c()},
$S:2}
B.e2E.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mP(D.Th))s=C.vn
else s=C.a.Y(s,"video/")||d.mP(D.nh)?C.rf:D.arQ
x=this.b.a
w=y.p
return new A.D(C.kf,A.A(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasf(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e1m.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e1n.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cfS.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:96}
B.cfT.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:96}
B.h3r.prototype={
$2(d,e){return e===this.a},
$S:250}
B.fzI.prototype={
$1(d){return J.k(d)},
$S:15}
B.fFB.prototype={
$1(d){var x=this.b
B.ieU(C.I_.ga8_(this.a)).bE(x.gCm(x),y.H)},
$S:130}
B.fFC.prototype={
$1(d){return this.a.dg(0,null)},
$S:130}
B.fFD.prototype={
$0(){return null},
$S:12}
B.cg6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fFE.prototype={
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
B.fJT.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fDN.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fDO.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cgb.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mP(D.nh)},
$S:z+1}
B.h7H.prototype={
$1(d){return new B.a_P(this.a,null)},
$S:z+16}
B.df2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fZ()},
$S:7}
B.df0.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.df1.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e2s.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2p()},
$S:11}
B.e1Q.prototype={
$0(){var x=J.bIN(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1R.prototype={
$0(){var x=J.bIN(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1p.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1o(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH2(this.c)}},
$S:0}
B.e1o.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1q.prototype={
$0(){var x=J.bIN(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1v.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1u(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH2(this.c)}},
$S:0}
B.e1u.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2g.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e2h.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e1N.prototype={
$1(d){return new B.Ww(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e1K.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IW(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WA(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a2(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2z(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1t.prototype={
$1(d){this.a.adN(d,"No files selected.","Added")},
$S:445}
B.e1V.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.O(x,new B.e1U(),A.U(x).k("O<1,m>")))},
$S:0}
B.e1U.prototype={
$1(d){return d.a},
$S:z+2}
B.e1z.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y0.cr().d1m(C.a37,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
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
return A.b(B.arG(null,m,o.a.c),$async$$0)
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
B.e2d.prototype={
$1(d){return new B.QW(this.a.a.c,this.b,null)},
$S:z+7}
B.e2e.prototype={
$1(d){return new B.a_R(this.a.a.c,this.b,null)},
$S:z+18}
B.e2f.prototype={
$1(d){return new B.a_O(this.a.a.c,this.b,null)},
$S:z+19}
B.e1L.prototype={
$1(d){return new B.QW(this.a.a.c,this.b,null)},
$S:z+7}
B.e1M.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e26.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IW(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8J(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cuO(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("O<1,m>")
r=new A.O(new A.O(t,new B.e22(p),r),new B.e23(),r.k("O<aj.E,m>")).c0(0,new B.e24())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cc(A.ec(new B.e25(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pN(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WG(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e22.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e21(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e21.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e23.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e24.prototype={
$1(d){return d.length!==0},
$S:3}
B.e25.prototype={
$1(d){var x=this.a
return new B.a_T(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e27.prototype={
$1(d){return d.a},
$S:z+2}
B.e28.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e20.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasf(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mP(D.nh)?C.tF:C.o6
p=!x||p.mP(D.nh)?"Play video":"View"
return new A.bP(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lo,v,v,C.m),C.bm,A.bo(!0,new A.D(C.D3,A.x(A.a([q,o,t,C.aA,B.a_S(!1,u,!1,w,p,new B.e1W(d),v),B.a_S(!1,u,!1,C.jD,"Share via QR",new B.e1X(d),"Letters/numbers QR code"),B.a_S(!1,u,!1,D.a4h,"Send to their Code",new B.e1Y(d),"Enter someone else's personal code"),B.a_S(!1,u,!1,C.hO,"Download / save",new B.e1Z(d),v),C.ak,B.a_S(!1,u,!0,C.eo,"Delete",new B.e2_(d),v)],y.p),C.am,v,C.e,C.M,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:566}
B.e1W.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e1X.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e1Y.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e1Z.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e2_.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e1w.prototype={
$1(d){return d.a},
$S:z+2}
B.e1x.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e1y.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8L(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hw(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pN(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1s.prototype={
$1(d){var x=this.a
x.uv(new B.e1r(x,d,this.b),"Preparing\u2026")},
$S:445}
B.e1r.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WA(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cv(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bHG(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1O.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e1P.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aS(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hgi(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1I.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hu(new B.e1E(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e1F(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e1G(s))
case 5:x=8
return A.b(r.b.ic(0,C.Hv,new B.e1H()),$async$$0)
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
B.e1E.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e1B(x,d,e))},
$S:220}
B.e1B.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e1F.prototype={
$1(d){return new B.adZ(this.a.a,null)},
$S:z+21}
B.e1G.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e1H.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e1J.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jv(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8z(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4x(B.Jv(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arG(new B.e1C(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cv(r)){if(B.hgh(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cH(r)
p=o.eT(r,new B.e1D()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1C.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e1A(x,d,e))},
$S:220}
B.e1A.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e1D.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mP(D.nh)},
$S:z+1}
B.e1T.prototype={
$1(d){return new B.a_U(this.a.a.c,null)},
$S:z+23}
B.e1S.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2h(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2c.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.o(v[2],x,new A.bE(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lo,x,x,C.m),C.bm,A.bo(!0,new A.D(C.D3,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kH,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.a_S(!0,w,!1,C.mt,"My Code",new B.e29(d),"Your personal code & QR \u2014 others send docs to you"),B.a_S(!1,w,!1,D.a4h,"Send to their Code",new B.e2a(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_S(!1,w,!1,Y.A8,"Import backup",new B.e2b(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.M,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:566}
B.e29.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e2a.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bHU()},
$S:0}
B.e2b.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e2p.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JF(D.T_,x,C.a4c,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cY(C.d.gH(D.T_).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:599}
B.e2n.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e2o.prototype={
$0(){this.a.akm()
return null},
$S:0}
B.e2q.prototype={
$3(d,e,f){return A.d5(A.dR(f,new A.r(0,(1-e)*10)),e)},
$S:102}
B.e2r.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ae0(e,w,v,this.b,x.e,x.cdC(w),new B.e2j(x,w),new B.e2k(x,v,w),new B.e2l(x,w),new B.e2m(x,w),null)},
$S:z+24}
B.e2j.prototype={
$0(){this.a.ahz(this.b)
return null},
$S:0}
B.e2k.prototype={
$0(){var x=this.a
return x.l(new B.e2i(x,this.b,this.c))},
$S:0}
B.e2i.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2l.prototype={
$0(){this.a.P0(this.b)
return null},
$S:0}
B.e2m.prototype={
$0(){this.a.ak9(this.b)
return null},
$S:0}
B.deZ.prototype={
$3(d,e,f){return A.d5(A.dR(f,new A.r(0,(1-e)*18)),e)},
$S:102}
B.df_.prototype={
$3(d,e,f){return A.e6(C.z,f,e,null,null)},
$S:111}
B.dfm.prototype={
$3(d,e,f){return A.d5(A.dR(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.dfl.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.dfi.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dfj.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dfk.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dfg.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h3(w,C.z,x,new B.dfe(this.a),C.hd,C.dF,!0,x,!1,x,x)
$.aU.U$.push(new B.dff(this.a))
return C.bL},
$S:144}
B.dfe.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfc(this.a))
return C.bL},
$S:196}
B.dfc.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.df9(x))},
$S:7}
B.df9.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dff.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfb(x))},
$S:7}
B.dfb.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfh.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfd(this.a))
return C.bL},
$S:196}
B.dfd.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfa(x))},
$S:7}
B.dfa.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deW.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deV(x,d))},
$S:1735}
B.deV.prototype={
$0(){return this.a.f=this.b===C.vZ},
$S:0}
B.deX.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deU(x,d))},
$S:7}
B.deU.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.deY.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deT(x,d))},
$S:7}
B.deT.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.deP.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.deQ.prototype={
$0(){return this.a.e=!1},
$S:0}
B.deR.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.deS.prototype={
$1(d){return this.a.d.NW(0,A.du(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dfz.prototype={
$0(){var x=this.a.a
return B.t5(x.c,x.d)},
$S:1736}
B.dfA.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dfB.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dfC.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dfD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dfE.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dfG.prototype={
$0(){var x=this.a
x.l(new B.dfF(x))},
$S:0}
B.dfF.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qt(0)},
$S:0}
B.dfv.prototype={
$1(d){return this.a.RV(this.b)},
$S:11}
B.dfw.prototype={
$1(d){return this.a.RU(this.b)},
$S:11}
B.dfn.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfo.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfp.prototype={
$1(d){return D.hKD},
$S:z+25}
B.dfu.prototype={
$2(d,e){if(d)B.WG()},
$S:132}
B.dfq.prototype={
$0(){return this.a.abB(this.b)},
$S:0}
B.dfr.prototype={
$0(){return this.a.aby(this.b)},
$S:0}
B.dfs.prototype={
$0(){return this.a.afZ(this.b)},
$S:0}
B.dft.prototype={
$0(){return this.a.a3b(this.b)},
$S:0}
B.deO.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dfy.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qx(),$async$$0)
case 2:u.l(new B.dfx(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dfx.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cgd.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mP(D.nh)},
$S:z+1}
B.cge.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cgc.prototype={
$2(d,e){return this.boo(d,e)},
boo(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WH(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1737}
B.fJv.prototype={
$1(d){if(d===D.aaS&&(this.a.a.a&30)===0)this.a.h3(0)},
$S:z+27}
B.fJw.prototype={
$0(){},
$S:12}
B.fK6.prototype={
bq_(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fwJ(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hxz(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bq_(d,e)},
$S:772}
B.fK5.prototype={
$1(d){var x=this
d.b=new B.fK4(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fK4.prototype={
$1(d){return this.bpZ(d)},
bpZ(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2i(n,m),$async$$1)
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
return A.b(B.fwJ(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
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
return A.b(B.a8I(m),$async$$1)
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
x(v=B.aBZ.prototype,"gclm","Ru",0)
x(v,"gcmf","K9",0)
x(v,"gclL","yS",0)
x(v=B.aG0.prototype,"gcdw","afX",0)
x(v,"gcdx","a0b",0)
x(v,"gcBn","ajR",0)
x(v=B.aG3.prototype,"gcdy","a0c",0)
x(v,"gcBo","a3y",0)
x(B.aG1.prototype,"gcdz","afY",0)
x(B.aBY.prototype,"gcdE","cdF",4)
x(v=B.aG2.prototype,"gclM","a1r",0)
x(v,"gczW","czX",4)
x(v,"gb5D","aBt",0)
x(v,"gcCT","akg",0)
x(v,"gbUq","YV",0)
x(v,"gcdD","F1",0)
x(B.aC_.prototype,"gb9r","a3x",0)
x(B.aBX.prototype,"gcdG","a0d",0)
x(v=B.aC2.prototype,"gb4l","cjZ",4)
x(v,"gcdA","ag0",0)
x(v=B.aC0.prototype,"gcyQ","a3h",0)
x(v,"gb2c","ag_",0)
w(B.aBW.prototype,"gazZ","aA_",8)
x(v=B.aC1.prototype,"gcoA","ai1",0)
x(v,"gbTU","acp",0)
w(v,"gazZ","aA_",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cue,B.ab7,B.awf,B.aEE,B.aHR,B.jS,B.adH,B.bzr,B.G3,B.YU])
w(B.cuf,B.cue)
w(B.b7r,B.ab7)
x(A.fO,[B.cua,B.cub,B.cuc,B.cu9,B.cud,B.cug,B.cuh,B.cui,B.cuj,B.cuk,B.cul,B.cum,B.cun,B.fCJ,B.h2d,B.h2f,B.h2e,B.h2s,B.h2t,B.fFp,B.df3,B.df5,B.df4,B.df8,B.fHo,B.fHS,B.cfI,B.cfP,B.cfQ,B.cfL,B.cfJ,B.cfM,B.cfN,B.h2q,B.h2r,B.e2w,B.e2F,B.e2D,B.e2E,B.fzI,B.fFB,B.fFC,B.cg6,B.fFE,B.fJT,B.fDN,B.fDO,B.cgb,B.h7H,B.df2,B.df0,B.e2s,B.e1o,B.e1u,B.e1N,B.e1t,B.e1U,B.e2d,B.e2e,B.e2f,B.e1L,B.e22,B.e21,B.e23,B.e24,B.e25,B.e27,B.e28,B.e20,B.e1w,B.e1x,B.e1s,B.e1O,B.e1F,B.e1D,B.e1T,B.e2c,B.e2p,B.e2q,B.deZ,B.df_,B.dfm,B.dfl,B.dfg,B.dfe,B.dfc,B.dff,B.dfh,B.dfd,B.deW,B.deX,B.deY,B.deS,B.dfv,B.dfw,B.dfp,B.cgd,B.cge,B.fJv,B.fK5,B.fK4])
w(B.b7s,B.awf)
x(A.hP,[B.h2c,B.df6,B.df7,B.fHm,B.fHn,B.fHR,B.e1l,B.e2u,B.e2v,B.e2t,B.e2x,B.e2y,B.e2z,B.e2A,B.e2B,B.e2C,B.e1m,B.e1n,B.fFD,B.df1,B.e1Q,B.e1R,B.e1p,B.e1q,B.e1v,B.e2g,B.e2h,B.e1K,B.e1V,B.e1z,B.e1M,B.e26,B.e1W,B.e1X,B.e1Y,B.e1Z,B.e2_,B.e1y,B.e1r,B.e1P,B.e1I,B.e1B,B.e1G,B.e1H,B.e1J,B.e1A,B.e1S,B.e29,B.e2a,B.e2b,B.e2n,B.e2o,B.e2j,B.e2k,B.e2i,B.e2l,B.e2m,B.dfi,B.dfj,B.dfk,B.df9,B.dfb,B.dfa,B.deV,B.deU,B.deT,B.deP,B.deQ,B.deR,B.dfz,B.dfA,B.dfB,B.dfC,B.dfD,B.dfE,B.dfG,B.dfF,B.dfn,B.dfo,B.dfq,B.dfr,B.dfs,B.dft,B.deO,B.dfy,B.dfx,B.fJw])
x(A.kO,[B.ae_,B.Ow,B.ab8,B.PF,B.YT,B.PE,B.G4])
x(A.af,[B.a_Q,B.Wv,B.Wz,B.Ww,B.a_P,B.Wx,B.a_R,B.a_O,B.QW,B.a_T,B.a_N,B.a_U])
x(A.ah,[B.aBZ,B.aG0,B.aG3,B.aG1,B.aBY,B.aG2,B.aC_,B.aBX,B.aC2,B.aC0,B.aBW,B.aC1])
x(A.aw,[B.aet,B.aBV,B.bgX,B.ae0,B.adZ,B.bgY])
x(A.id,[B.cfO,B.cfK,B.cfS,B.cfT,B.h3r,B.e1E,B.e1C,B.e2r,B.dfu,B.cgc,B.fK6])
x(A.jk,[B.bmt,B.bz3])})()
A.hZ(b.typeUniverse,JSON.parse('{"b7r":{"ab7":[]},"b7s":{"awf":[]},"a_Q":{"af":[],"w":[]},"aBZ":{"ah":["a_Q"]},"aet":{"aw":[],"w":[]},"Wv":{"af":[],"w":[]},"Wz":{"af":[],"w":[]},"aG0":{"ah":["Wv"]},"aG3":{"ah":["Wz"]},"bmt":{"jk":[]},"Ww":{"af":[],"w":[]},"aG1":{"ah":["Ww"]},"a_P":{"af":[],"w":[]},"Wx":{"af":[],"w":[]},"ae0":{"aw":[],"w":[]},"a_R":{"af":[],"w":[]},"a_O":{"af":[],"w":[]},"QW":{"af":[],"w":[]},"a_T":{"af":[],"w":[]},"adZ":{"aw":[],"w":[]},"a_N":{"af":[],"w":[]},"a_U":{"af":[],"w":[]},"aBY":{"ah":["a_P"]},"bz3":{"jk":[]},"aG2":{"ah":["Wx"]},"aBV":{"aw":[],"w":[]},"bgX":{"aw":[],"w":[]},"aC_":{"ah":["a_R"]},"aBX":{"ah":["a_O"]},"aC2":{"ah":["QW"]},"aC0":{"ah":["a_T"]},"aBW":{"ah":["a_N"]},"aC1":{"ah":["a_U"]},"bgY":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mA"),k:x("MV()"),o:x("bl<m,m>"),F:x("qU"),g:x("ay<jS?>"),x:x("ay<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<m,P>>"),t:x("N<a9<m,@>>"),r:x("N<jS>"),w:x("N<+file,name(m8,m)>"),u:x("N<cY>"),s:x("N<m>"),E:x("N<jk>"),a:x("N<dy>"),p:x("N<w>"),Z:x("N<F>"),G:x("bm"),A:x("cx<ah<af>>"),n:x("ai<jS>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bu<m,m>"),P:x("a9<m,@>"),f:x("a9<@,@>"),m:x("hU"),e:x("iG7"),af:x("Fg"),U:x("jS"),b:x("cm"),C:x("aE"),aK:x("wS"),ab:x("G3"),br:x("awf"),v:x("YU"),N:x("m"),X:x("bq<G>"),Q:x("lW"),D:x("dy"),aw:x("bf<m>"),cd:x("X<a9<m,@>>"),c7:x("w"),ch:x("c7<ai<jS>>"),aW:x("c7<dy?>"),aY:x("c7<~>"),cx:x("ae_"),b1:x("bn<ai<jS>>"),cf:x("bn<dy?>"),d4:x("bn<~>"),c4:x("aEE"),bG:x("aHR"),q:x("kw"),B:x("q3<G3>"),c6:x("q3<ab8>"),y:x("P"),i:x("G"),z:x("@"),S:x("F"),aQ:x("bm?"),_:x("ai<jS>?"),aL:x("ai<@>?"),h:x("a9<m,@>?"),l:x("jS?"),R:x("aE?"),c:x("YU?"),d:x("+answerQr,transfer(m,ay<ai<jS>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,Ow,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dy?"),cm:x("adH?"),bk:x("aEE?"),ag:x("aHR?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b87=new A.ax(C.aD,2,C.r,-1)
D.cc_=new A.a7(C.a5,C.a9,C.x,C.a6j,null,null)
D.b9M=new A.o(null,null,null,C.mQ,null,D.cc_,C.m)
D.bbg=new A.o(null,null,null,C.mQ,null,E.IV,C.m)
D.ahw=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aj0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak2=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fVL=new A.C("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.h9N=new A.C("Share the access code and member password with your team. They only sign in once.",null,H.Fx,null,null,null,null,null,null,null,null,null)
D.dqQ=x([D.fVL,C.ak,D.h9N],y.p)
D.bAw=new A.fr(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dqQ,null)
D.hek=new A.C("Create your organization",null,C.fO,null,null,null,null,null,null,null,null,null)
D.h_l=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.Fx,null,null,null,null,null,null,null,null,null)
D.dJ6=x([D.hek,C.ak,D.h_l],y.p)
D.bAG=new A.fr(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJ6,null)
D.har=new A.C("Team Member sign-in",null,C.fO,null,null,null,null,null,null,null,null,null)
D.h3j=new A.C("Enter the access code and password from your organization.",null,H.Fx,null,null,null,null,null,null,null,null,null)
D.dGG=x([D.har,C.ak,D.h3j],y.p)
D.bAQ=new A.fr(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGG,null)
D.bH7=new A.R(16,10,16,28)
D.bHg=new A.R(16,14,16,4)
D.bIy=new A.R(20,0,20,16)
D.bJ4=new A.R(20,8,20,16)
D.aoJ=new A.R(24,22,24,20)
D.a4h=new A.a_(63394,"MaterialIcons",!1)
D.arQ=new A.a_(63515,"MaterialIcons",!1)
D.bWu=new A.a_(983813,"MaterialIcons",!1)
D.bTD=new A.a_(62867,"MaterialIcons",!1)
D.bXs=new A.ae(D.bTD,44,C.c,null,null,null)
D.bYy=new A.ae(C.kj,null,C.ab,null,null,null)
D.bZX=new A.ae(C.jE,18,null,null,null,null)
D.c0P=new A.ae(D.a4h,26,C.c,null,null,null)
D.c1q=new A.ae(C.DJ,null,null,null,null,null)
D.c22=new A.ae(C.DQ,null,null,null,null,null)
D.c3f=new A.ae(A1.a4t,null,null,null,null,null)
D.c3B=new A.ae(C.i2,16,null,null,null,null)
D.c7j=new A.ae(C.tE,16,null,null,null,null)
D.bXK=new A.ae(C.mt,null,null,null,null,null)
D.c8b=new A.eb(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2A=new A.ae(C.Ib,null,null,null,null,null)
D.c8g=new A.eb(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2A,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bY5=new A.ae(C.DT,null,null,null,null,null)
D.c8r=new A.eb(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bY5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYy=x([C.fx,C.b5,C.aD],y.O)
D.cdY=new A.a7(C.ay,C.aC,C.x,D.cYy,null,null)
D.cXT=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.T_=x([C.fx,C.aD],y.O)
D.Th=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nh=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAr=x([C.mZ,C.aD],y.O)
D.evW={iceServers:0}
D.aNz={urls:0}
D.dN1=new A.bl(D.aNz,["stun:stun.l.google.com:19302"],y.o)
D.dN0=new A.bl(D.aNz,["stun:stun1.l.google.com:19302"],y.o)
D.dft=x([D.dN1,D.dN0],A.as("N<a9<m,m>>"))
D.dM7=new A.bl(D.evW,[D.dft],A.as("bl<m,@>"))
D.K0=new B.Ow(0,"lanDirect")
D.UF=new B.Ow(1,"cloudStash")
D.e__=new B.Ow(2,"inlineInstant")
D.UG=new B.Ow(3,"webrtcLink")
D.AT=new B.Ow(4,"videoCloud")
D.h9M=new A.C("Receive file",null,C.nt,null,null,null,null,null,null,null,null,null)
D.cNr=x([E.atG,C.aa,D.h9M],y.p)
D.fnQ=new A.c3(C.aL,C.b9,C.h,C.l,null,C.p,null,0,D.cNr,null)
D.eDp=new A.D(C.cm,D.fnQ,null)
D.fM0=new A.H(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A0.Jq,null,null,null)
D.fWm=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fM0,null,C.K,null,null,null,null,null,null,null)
D.eCz=new A.D(C.zt,D.fWm,null)
D.bfR=new A.cl(C.z,null,null,D.eCz,null)
D.eJH=new A.cN(0,null,0,28,null,null,D.bfR,null)
D.eK0=new B.ab8(0,"RTCDataChannelConnecting")
D.aT3=new B.ab8(1,"RTCDataChannelOpen")
D.aT4=new B.ab8(3,"RTCDataChannelClosed")
D.eK1=new B.G4(0,"RTCIceConnectionStateNew")
D.eK2=new B.G4(1,"RTCIceConnectionStateChecking")
D.eK3=new B.G4(2,"RTCIceConnectionStateCompleted")
D.eK4=new B.G4(3,"RTCIceConnectionStateConnected")
D.eK5=new B.G4(4,"RTCIceConnectionStateCount")
D.eK6=new B.G4(5,"RTCIceConnectionStateFailed")
D.eK7=new B.G4(6,"RTCIceConnectionStateDisconnected")
D.aT5=new B.G4(7,"RTCIceConnectionStateClosed")
D.aT6=new B.YT(0,"RTCIceGatheringStateNew")
D.eK8=new B.YT(1,"RTCIceGatheringStateGathering")
D.aaS=new B.YT(2,"RTCIceGatheringStateComplete")
D.aaT=new B.PE(0,"RTCPeerConnectionStateClosed")
D.aT7=new B.PE(1,"RTCPeerConnectionStateFailed")
D.aT8=new B.PE(2,"RTCPeerConnectionStateDisconnected")
D.aT9=new B.PE(3,"RTCPeerConnectionStateNew")
D.aTa=new B.PE(4,"RTCPeerConnectionStateConnecting")
D.aTb=new B.PE(5,"RTCPeerConnectionStateConnected")
D.eK9=new B.PF(0,"RTCSignalingStateStable")
D.eKa=new B.PF(1,"RTCSignalingStateHaveLocalOffer")
D.eKb=new B.PF(2,"RTCSignalingStateHaveRemoteOffer")
D.eKc=new B.PF(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eKd=new B.PF(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTc=new B.PF(5,"RTCSignalingStateClosed")
D.ft_=new A.av(160,48)
D.bh6=new A.fp(2,null,null,null,null,C.aD,null,null,null,null)
D.fux=new A.a6(16,16,D.bh6,null)
D.fZG=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fw0=new A.b0(D.fZG,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6p=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fw4=new A.b0(D.h6p,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hfo=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fwb=new A.b0(D.hfo,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZf=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new A.b0(D.fZf,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haD=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWn=new A.b0(D.haD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hc5=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fx4=new A.b0(D.hc5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgT=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new A.b0(D.hgT,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.heO=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxq=new A.b0(D.heO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hg3=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fyd=new A.b0(D.hg3,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXQ=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fyL=new A.b0(D.fXQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8k=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fz5=new A.b0(D.h8k,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1_=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzC=new A.b0(D.h1_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgY=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fzG=new A.b0(D.hgY,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fY5=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new A.b0(D.fY5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWJ=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fA0=new A.b0(D.fWJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTn=new A.C("NGMY DOC SHARE",null,C.aXN,null,null,null,null,null,null,null,null,null)
D.fUP=new A.C("Show this to sender",null,C.iP,null,null,null,null,null,null,null,null,null)
D.fVT=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h_M=new A.C("Organization settings",null,C.cH,null,null,null,null,null,null,null,null,null)
D.h09=new A.C("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.h1a=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h1I=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4C=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h7s=new A.C("Send to their Doc Share",null,C.nr,null,null,null,null,null,null,null,null,null)
D.h7M=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h86=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h8I=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8P=new A.C("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.h9d=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fh,null,null,null,null,null,null,null,null,null)
D.hcB=new A.C("Share files & videos\nwith a scan.",null,C.aXQ,null,null,null,null,null,null,null,null,null)
D.hcV=new A.C("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.hKD=new B.a_N(null)
D.aej=new B.ae_(0,"docShare")
D.aek=new B.ae_(1,"gate")
D.XK=new B.ae_(2,"gateNoIndividual")})();(function staticFields(){$.aQH=null
$.fue=function(){var x=y.N
return A.T(x,x)}()
$.Hi=A.T(y.N,y.D)
$.ai4=A.T(y.N,A.as("m8"))
$.Sl=A.T(y.N,y.D)
$.fuV=A.T(y.N,A.as("adH"))
$.cg5=A.T(y.S,A.as("bzr"))
$.hxy=1
$.in3=null
$.in2=null
$.iec=null
$.hlP=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iGC","hQr",()=>new B.cuf())
x($,"iEw","hq_",()=>C.a.q(A.bC(A.bC(A.bC(A.HO(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["X3j0QWQ2D2Mh1Eh3u7Ge+LeZTys="]=a.current})($__dart_deferred_initializers__);