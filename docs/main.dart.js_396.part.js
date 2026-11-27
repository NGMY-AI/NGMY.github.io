((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cw2:function cw2(){},
if4(d){var x=null,w=new B.b8L(d,D.eRd,new A.q9(x,x,y.c6),new A.q9(x,x,y.B))
w.bFr(d)
return w},
b8L:function b8L(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cvY:function cvY(d){this.a=d},
cvZ:function cvZ(d){this.a=d},
cw_:function cw_(d){this.a=d},
cvX:function cvX(d){this.a=d},
cw0:function cw0(d){this.a=d},
if5(d,e){var x=y.N
x=new B.b8M(d,e,A.S(x,y.e),A.S(x,y.z))
x.bFs(d,e)
return x},
b8M:function b8M(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cw3:function cw3(d){this.a=d},
cw4:function cw4(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw6:function cw6(d){this.a=d},
cw7:function cw7(d){this.a=d},
cw8:function cw8(d){this.a=d},
cw9:function cw9(d){this.a=d},
cwa:function cwa(d){this.a=d},
hrY(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.be("IndexedDB not available"))
return C.xH.HC(x,"ngmy_doc_share_v1",new B.fHX(),1)},
ilX(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eC(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w8(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aK(d)
return x}catch(w){return v}return v},
T3(d,e){return B.iCm(d,e)},
iCm(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRO
x=7
return A.b(o==null?$.aRO=B.hrY():o,$async$T3)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mI(s,"blobs","readwrite")
C.iW.mr(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$T3)
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
return A.i($async$T3,w)},
T2(d){return B.iCl(d)},
iCl(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRO
x=7
return A.b(o==null?$.aRO=B.hrY():o,$async$T2)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iW.yh(J.mG(r,"blobs"),d),$async$T2)
case 8:q=f
x=9
return A.b(J.oY(r),$async$T2)
case 9:o=B.ilX(q)
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
return A.i($async$T2,w)},
aju(d){return B.iCk(d)},
iCk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aju=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRO
x=7
return A.b(p==null?$.aRO=B.hrY():p,$async$aju)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iW.H6(J.mG(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$aju)
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
return A.i($async$aju,w)},
fHX:function fHX(){},
ioE(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btT(w,v))}return u},
hUs(d,e){var x,w={},v=A.b_G("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h8v(w,v,e)
C.xJ.xg(v,"change",new B.h8x(w,v,!1))
C.xJ.xg(v,"cancel",new B.h8w(w))
$.eY.mT()
v.click()
A.bM(C.anE,new B.h8u(w),y.H)},
h8v:function h8v(d,e,f){this.a=d
this.b=e
this.c=f},
h8x:function h8x(d,e,f){this.a=d
this.b=e
this.c=f},
h8w:function h8w(d){this.a=d},
h8u:function h8u(d){this.a=d},
Ea(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ea=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd8()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVA()?3:4
break
case 3:x=5
return A.b(B.hOP(e,d,s,!0,!1,f,g,h,!1,i),$async$Ea)
case 5:x=1
break
case 4:x=6
return A.b(B.SG(d,s,f,g,h,i),$async$Ea)
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
return A.b(B.JQ(s,d),$async$Ea)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fDc(s,d),$async$Ea)
case 14:x=12
return A.b(r.hOP(q,p,o,n,m,l,k,j,a1,i),$async$Ea)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ca(A.e4(new B.h8K(s,i,d,f,g,h),!1,null,y.H)),$async$Ea)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ca(A.e4(new B.h8L(s,i,d,f,g,h),!1,null,y.H)),$async$Ea)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ea,w)},
SG(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SG=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3s(e),$async$SG)
case 3:u=k
x=4
return A.b(B.asn(d,e,!1),$async$SG)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JQ(e,d),$async$SG)
case 7:if(k){v=D.aeZ
x=1
break}x=8
return A.b(B.X_(e),$async$SG)
case 8:v=t?D.Yl:D.af_
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b3q(d,e)){v=D.aeZ
x=1
break}x=11
return A.b(B.X_(e),$async$SG)
case 11:v=t?D.Yl:D.af_
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hmB(d,e)){v=D.aeZ
x=1
break}x=14
return A.b(B.X_(e),$async$SG)
case 14:v=D.Yl
x=1
break
case 13:v=t?D.Yl:D.af_
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SG,w)},
fDc(d,e){var x=0,w=A.j(y.y),v
var $async$fDc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b3q(e,d)){v=!1
x=1
break}x=3
return A.b(B.b3s(d),$async$fDc)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDc,w)},
hOP(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ca(A.e4(new B.fKD(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hJa(d,e,f,g,h,i,j){return new B.a0p(e,j,d,g,h,i,f,null)},
fMD(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fMD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fMG(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fMD)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fMD,w)},
fN7(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fN7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fN9(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fN7)
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
return A.i($async$fN7,w)},
hsa(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b5(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
h_S(d,e){var x=0,w=A.j(y.H),v
var $async$h_S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.X_(e),$async$h_S)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).e3()
case 1:return A.h(v,w)}})
return A.i($async$h_S,w)},
h8K:function h8K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h8L:function h8L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeF:function aeF(d,e){this.a=d
this.b=e},
fKD:function fKD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0p:function a0p(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCT:function aCT(){this.c=this.a=this.d=null},
dhR:function dhR(d,e){this.a=d
this.b=e},
dhO:function dhO(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
dhP:function dhP(d){this.a=d},
dhT:function dhT(){},
dhS:function dhS(d){this.a=d},
af8:function af8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFz:function aFz(d,e){this.a=d
this.b=e},
aIQ:function aIQ(d,e,f){this.a=d
this.b=e
this.c=f},
fMG:function fMG(d,e,f){this.a=d
this.b=e
this.c=f},
fME:function fME(d){this.a=d},
fMF:function fMF(d,e,f){this.a=d
this.b=e
this.c=f},
fN9:function fN9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fN8:function fN8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cho(d,e,f,g,h){return B.i9L(d,e,f,g,h)},
i9L(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cho=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dS(d,new B.chp(s,e,h,g,f,q),y.g),y.l),$async$cho)
case 3:r=p.aN(j)
case 4:if(!r.B()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cho,w)},
b3n(d,e,f,g,h){return B.i9M(d,e,f,g,h)},
i9M(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b3n=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axW("GET",d)
o=A.bJR()
if(o==null)o=new A.Ir(A.a([],y.W))
x=7
return A.b(o.ff(0,s).d9(0,C.HK),$async$b3n)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DE(),$async$b3n)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CH(q,h,o,e,f,"Received via QR")
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
return A.i($async$b3n,w)},
b3m(d){return B.i9J(d)},
i9J(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b3m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wk(d,null).d9(0,C.oZ),$async$b3m)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.T.aN(0,A.ma(A.m7(p.e)).cJ(0,p.w),null)
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
return A.i($async$b3m,w)},
chn(d){return B.i9K(d)},
i9K(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$chn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wk(d,null).d9(0,C.ri),$async$chn)
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
return A.i($async$chn,w)},
chp:function chp(d,e,f,g,h,i){var _=this
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
JO(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i9R(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JO(C.a.aV(t,u.length))}return null},
i9S(d){var x=B.JO(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i9N(){var x,w=$.oh(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.ho(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a9a(d){return B.i9O(d)},
i9O(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a9a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bN),$async$a9a)
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
return A.i($async$a9a,w)},
a9b(d,e){return B.i9P(d,e)},
i9P(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a9b=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i2(d,e,!1,!1,C.cZ,null),$async$a9b)
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
return A.i($async$a9b,w)},
CG(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CG)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JO(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a9c(r),$async$CG)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a9a("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CG)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JO(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CG)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i9N()
x=14
return A.b(B.a9c(m),$async$CG)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a9b("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CG)
case 15:k=f
x=16
return A.b(B.a9b("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CG)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CG)
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
return A.i($async$CG,w)},
a9c(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a9c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JO(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a9a("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a9c)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9c,w)},
a9d(d,e,f,g){return B.i9T(d,e,f,g)},
i9T(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a9d=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JO(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a9c(r),$async$a9d)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.chv())>1048576||g.aR(d,new B.chw())){v=B.FO(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9o("myCode",d,a0),$async$a9d)
case 4:u=a3
try{t=C.T.aN(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ci(s)||J.aa(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FO(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3v(u,g.gI(d),a0),$async$a9d)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dS(d,new B.chx(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b3o(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a9d)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9d,w)},
FO(d,e,f,g,h){return B.i9Q(d,e,f,g,h)},
i9Q(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FO=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FO)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cH(a6,0,new B.chr())
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
a1=B.JS(a9,q)
a0=new A.LH(a1)
u=6
case 9:x=11
return A.b(a0.B(),$async$FO)
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
return A.b(new A.acR(a1.a,a4,"media",a1.d,a2).ye(m,n,new A.F3(!0,q.c)),$async$FO)
case 12:J.bW(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FO)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUD(r),$async$FO)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dS(a6,new B.chs(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b3o(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FO)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUD(r),$async$FO)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FO,w)},
b3o(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b3o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a9a(t),$async$b3o)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.chq(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a9b(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3o,w)},
OW(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OW=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a9a("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OW)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aN(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b3p(k,a0),$async$OW)
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
return A.b(B.b3u(h),$async$OW)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.X6(g,a0),$async$OW)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.aa(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cht(),q),n)
d=A.B(new A.X(r,new B.chu(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cJ(d,0,A.dx(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a9b("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OW)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OW,w)},
b3p(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b3p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aN(h),r=y.f,q=0
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
break}i=B.iGJ(k,j)
C.d.u(s,i)
x=5
return A.b(B.E8(l,m,"Received via My Code",t,e,i),$async$b3p)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUD(s),$async$b3p)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3p,w)},
chv:function chv(){},
chw:function chw(){},
chx:function chx(){},
chr:function chr(){},
chs:function chs(){},
chq:function chq(){},
cht:function cht(){},
chu:function chu(){},
h8H(d,e){var x=0,w=A.j(y.H)
var $async$h8H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ca(A.e4(new B.h8I(e),!1,null,y.H)),$async$h8H)
case 2:return A.h(null,w)}})
return A.i($async$h8H,w)},
bJk(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bJk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ca(A.e4(new B.h8J(g,e,f),!1,null,y.y)),$async$bJk)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJk,w)},
h8I:function h8I(d){this.a=d},
h8J:function h8J(d,e,f){this.a=d
this.b=e
this.c=f},
WX:function WX(d,e){this.c=d
this.a=e},
aGY:function aGY(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e4C:function e4C(d,e){this.a=d
this.b=e},
X0:function X0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aH0:function aH0(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e5L:function e5L(d){this.a=d},
e5M:function e5M(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5O:function e5O(d){this.a=d},
e5P:function e5P(d){this.a=d},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5T:function e5T(d){this.a=d},
e5W:function e5W(){},
e5U:function e5U(d){this.a=d},
e5V:function e5V(d,e){this.a=d
this.b=e},
bnV:function bnV(){},
WY:function WY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGZ:function aGZ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e4D:function e4D(d){this.a=d},
e4E:function e4E(d){this.a=d},
hmC(d){var x=d.ie
if(x>=0)return C.n.M(x)
return 10},
i9V(d){var x=d.l8
if(x>=0)return x
return 4.99},
i9U(d){var x=d.lS,w=y.N
w=x.j4(x,new B.chz(),w,w)
return w},
hE7(d){var x=d.kK,w=y.N
w=x.j4(x,new B.chA(),w,w)
return w},
b3s(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b3s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b3s)
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
return A.i($async$b3s,w)},
a9f(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9f)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a9f)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9f,w)},
X_(d){var x=0,w=A.j(y.H),v,u
var $async$X_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$X_)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$X_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$X_,w)},
hmB(d,e){var x,w,v
if(B.i9V(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i9U(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b3q(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hE7(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hE8(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hE7(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bM(A.dw(f,0,0,0,0,0).a).aa().ag())
d.kK=w},
aso(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aso=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$aso)
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
return A.i($async$aso,w)},
asp(d){var x=0,w=A.j(y.H),v,u,t
var $async$asp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aso(d),$async$asp)
case 3:u=f
x=5
return A.b(A.aB(),$async$asp)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$asp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$asp,w)},
asn(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$asn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hmC(d)
if(u<=0){v=!1
x=1
break}if(B.hmB(d,e)){v=!1
x=1
break}x=3
return A.b(B.aso(e),$async$asn)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asn,w)},
b3r(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b3r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JQ(e,d),$async$b3r)
case 3:if(g){v=-1
x=1
break}u=B.hmC(d)
if(u<=0){v=-1
x=1
break}if(B.hmB(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.aso(e),$async$b3r)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3r,w)},
chC(d,e,f){var x=0,w=A.j(y.y),v
var $async$chC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JQ(e,d),$async$chC)
case 3:if(h){v=!1
x=1
break}v=B.asn(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chC,w)},
chB(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$chB=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
x=3
return A.b(B.chC(d,u,i.gVA()),$async$chB)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chB,w)},
a9e(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a9e=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
if(i.gVA()){v=!0
x=1
break}if(B.b3q(d,u)){v=!0
x=1
break}x=5
return A.b(A.m_(u,C.VE),$async$a9e)
case 5:x=k?3:4
break
case 3:B.hE8(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a9e)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lz(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.VE,"Doc Share for Organizations"),$async$a9e)
case 7:if(!k){v=!1
x=1
break}B.hE8(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a9e)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9e,w)},
chz:function chz(){},
chA:function chA(){},
h9H(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h9H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h9H)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fzm.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i4([r],e.c))
s.toString
$.fzm.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9H,w)},
iJ1(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fzm.bs($.fzm,new B.h9J(d))},
h9J:function h9J(d){this.a=d},
fB3(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fB3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aD(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i4([d],f))
s.toString
u=A.np(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jC,null,y.H),$async$fB3)
case 3:C.C5.fo(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mT()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fB3,w)},
aiq(d,e,f){var x=0,w=A.j(y.H),v
var $async$aiq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fA3.n(0,d,new B.aem(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$aiq)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.T.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$aiq)
case 2:return A.h(null,w)}})
return A.i($async$aiq,w)},
aik(d){return B.iqE(d)},
iqE(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aik=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fA3.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aik)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.T.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b8(s,new B.fET(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.aem(r)
$.fA3.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aik,w)},
Sw(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Sw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.HA.n(0,d,u)
x=3
return A.b(B.T3(d,u),$async$Sw)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sw,w)},
aS8(d){return B.iqC(d)},
iqC(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aS8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.HA.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.T2(d),$async$aS8)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.HA.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aS8)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aK(r)
x=!J.ci(q)?9:10
break
case 9:B.Sw(d,q)
x=11
return A.b(J.fO(s,d),$async$aS8)
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
return A.i($async$aS8,w)},
imq(d){if(d==null)return A.fc(null,y.K)
if(y.J.b(d))return A.fc(new Uint8Array(A.cd(J.eC(d,0,null))),y.K)
if(y.D.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fc(new Uint8Array(A.cd(A.w8(d,0,null))),y.K)
if(y.I.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
return A.fc(null,y.K)},
a3Y(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.cb(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fKS(r,t),!1,s)
A.fI(r,"error",new B.fKT(t),!1,s)
r.readAsArrayBuffer(d)
v=u.il(0,C.Pj,new B.fKU())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3Y,w)},
aSt(d,e,f){return B.it4(d,e,f)},
it4(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSt=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3Y(i),$async$aSt)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.aa(j)
x=11
return A.b(B.T3(o,p),$async$aSt)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.bW(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.aiq(k,j,s),$async$aSt)
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
return A.i($async$aSt,w)},
aSs(d,e,f){return B.it3(d,e,f)},
it3(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSs=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSt(d,e,f),$async$aSs)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3Y(f),$async$aSs)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.HA.n(0,s,r)
$.SQ.n(0,s,r)
x=11
return A.b(B.Sw(s,r),$async$aSs)
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
return A.i($async$aSs,w)},
CH(d,e,f,g,h,i){return B.ia3(d,e,f,g,h,i)},
ia3(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CH=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jW(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3y(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Sw(s,d),$async$CH)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CH)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$CH)
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
return A.b(B.BC(e),$async$CH)
case 12:j=a2
J.bW(j,m)
x=13
return A.b(B.HK(e,j),$async$CH)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CH,w)},
X1(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X1=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.BC(d),$async$X1)
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
k=B.hEa(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jW(m,n,k,l,j,"From folder",null,B.b3y(),null)
$.aiP.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3Y(o),$async$X1)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.HA.n(0,h,g)
$.SQ.n(0,h,g)
B.Sw(h,g)
x=9
break
case 10:x=11
return A.b(B.aSs(d,m,o),$async$X1)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HK(d,t),$async$X1)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X1,w)},
hmG(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hmG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hEa(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JR(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CH(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmG,w)},
JR(d,e,f,g,h,i){return B.ia2(d,e,f,g,h,i)},
ia2(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JR=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LH(A.dx(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.B(),$async$JR)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ci(m)){x=6
break}J.fV(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TE(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kB(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T3(k,l),$async$JR)
case 11:J.bW(q,k);++p
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
return A.b(j.a2(0),$async$JR)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T3(k,new Uint8Array(A.cd(n))),$async$JR)
case 15:J.bW(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aiq(r,q,g),$async$JR)
case 16:f=new B.jW(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3y(),null)
x=17
return A.b(B.BC(d),$async$JR)
case 17:e=a6
J.bW(e,f)
x=18
return A.b(B.HK(d,e),$async$JR)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JR,w)},
X3(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X3=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiP.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3Y(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aik(s),$async$X3)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T2(u[o]),$async$X3)
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
v=A.w8(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SQ.h(0,s)
if(i==null)i=$.HA.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.tf(d,e),$async$X3)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SQ.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w8(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
hEa(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
tf(d,e){return B.ia4(d,e)},
ia4(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$tf=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SQ.h(0,f)
if(e==null)e=$.HA.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiP.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3Y(s),$async$tf)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.HA.n(0,f,r)
$.SQ.n(0,f,r)
B.Sw(f,r)
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
return A.b(B.aik(f),$async$tf)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aei(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T2(g[l]),$async$tf)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a90()
if(!C.aI.gar(r)){$.HA.n(0,f,r)
$.SQ.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aS8(f),$async$tf)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SQ.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X3(a0,a1,0,g),$async$tf)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.HA.n(0,f,h)
$.SQ.n(0,f,h)
B.Sw(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tf,w)},
ia7(d){var x,w,v=$.aiP.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
ia8(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i4([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
ia5(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asv(d,e,f,g,h){return B.ia6(d,e,f,g,h)},
ia6(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asv=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiP.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3Y(s),$async$asv)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.tf(g,e),$async$asv)
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
return A.b(n.iN(d).ye(h,r,new A.F3(!0,e.c)),$async$asv)
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
return A.i($async$asv,w)},
hEc(d,e,f,g,h){var x,w,v,u,t=$.hEb
$.hEb=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.chN.n(0,t,new B.bAZ(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aei(u)))
return t},
hmH(d){var x=0,w=A.j(y.H)
var $async$hmH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hmH,w)},
JS(d,e){var $async$JS=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiP.h(0,h)
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
return A.qR(B.X3(d,e,p,o<q?o:q),$async$JS,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qR(A.H5(n),$async$JS,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qR(B.aik("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JS,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qR(B.T2(h[l]),$async$JS,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qR(A.H5(k),$async$JS,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qR(B.tf(d,e),$async$JS,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qR(A.H5(A.w8(j,p,o<i?o:i)),$async$JS,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qR(null,0,w)
case 2:return A.qR(t.at(-1),1,w)}})
var x=0,w=A.hNr($async$JS,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hPB(w)},
b3A(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.chN.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7i(),$async$b3A)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3A,w)},
X2(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chN.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7i(),$async$X2)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aiq(r.c,u,r.z),$async$X2)
case 4:t=new B.jW(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3y(),null)
u=r.a
x=5
return A.b(B.BC(u),$async$X2)
case 5:s=f
J.bW(s,t)
x=6
return A.b(B.HK(u,s),$async$X2)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X2,w)},
a9l(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chN.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aju(u[s]),$async$a9l)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9l,w)},
chP(d,e,f){var x=0,w=A.j(y.H)
var $async$chP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bG7(d,e,f),$async$chP)
case 2:return A.h(null,w)}})
return A.i($async$chP,w)},
chQ(d,e,f){var x=0,w=A.j(y.H)
var $async$chQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bG8(d,e,f),$async$chQ)
case 2:return A.h(null,w)}})
return A.i($async$chQ,w)},
FP(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.BC(d),$async$FP)
case 2:p=g
J.mH(p,new B.chO(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.HA.X(0,v)
$.aiP.X(0,e)
x=3
return A.b(B.aik(v),$async$FP)
case 3:u=g
$.fA3.X(0,v)
x=4
return A.b(A.aB(),$async$FP)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FP)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FP)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aju(s[q]),$async$FP)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aju(v),$async$FP)
case 13:x=14
return A.b(B.HK(d,p),$async$FP)
case 14:return A.h(null,w)}})
return A.i($async$FP,w)},
b3z(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.tf(d,e),$async$b3z)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fB3(t,A.aD(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3z,w)},
BC(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$BC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$BC)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.T.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fKV(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$BC,w)},
HK(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HK)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fPh(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.T.au(t,null)),$async$HK)
case 3:return A.h(null,w)}})
return A.i($async$HK,w)},
bG7(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bG7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BC(d),$async$bG7)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fJ0(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aIn(f))
x=4
return A.b(B.HK(d,u),$async$bG7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bG7,w)},
bG8(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bG8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BC(d),$async$bG8)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fJ1(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cTR(f))
x=4
return A.b(B.HK(d,u),$async$bG8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bG8,w)},
aem:function aem(d){this.a=d},
fET:function fET(){},
fKS:function fKS(d,e){this.a=d
this.b=e},
fKT:function fKT(d){this.a=d},
fKU:function fKU(){},
chO:function chO(d){this.a=d},
bAZ:function bAZ(d,e,f,g,h,i,j,k,l){var _=this
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
fKV:function fKV(){},
fPh:function fPh(){},
fJ0:function fJ0(d){this.a=d},
fJ1:function fJ1(d){this.a=d},
a9m(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.chT())?3:4
break
case 3:x=5
return A.b(B.b3B(d,e),$async$a9m)
case 5:u=g
if(u!=null){t=u.c
B.OY(d,u.b,e,t)}v=u
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
return A.b(B.b3w(s),$async$a9m)
case 10:case 9:if(g){v=new A.RR(1,D.Vh,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.X4(d,e),$async$a9m)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.X9(!0,!0,d,e),$async$a9m)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OY(d,D.B9,e,t)
v=new A.RR(p,D.B9,t)
x=1
break}v=B.chS(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9m,w)},
X4(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$X4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9o(null,d,e),$async$X4)
case 3:p=g
try{u=C.T.aN(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3v(p,d.length,e),$async$X4)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.chQ(e,C.d.gH(d).a,r.b),$async$X4)
case 7:case 6:q=r.a
x=8
return A.b(B.OY(d,D.Vh,e,q),$async$X4)
case 8:v=new A.RR(d.length,D.Vh,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X4,w)},
X5(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$X5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n_(D.nu)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9n(d,e),$async$X5)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.chL(s,d,e,t),$async$X5)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3w(t),$async$X5)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.tf(e,d),$async$X5)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.X4(A.a([d],y.r),e),$async$X5)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X5,w)},
X7(){var x=0,w=A.j(y.H)
var $async$X7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hmA(),$async$X7)
case 2:x=3
return A.b(B.aUZ(),$async$X7)
case 3:return A.h(null,w)}})
return A.i($async$X7,w)},
a9n(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3y()
x=3
return A.b(B.chP(e,d.a,u),$async$a9n)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9n,w)},
OY(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OY=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Vh&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9n(p,f),$async$OY)
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
return A.b(B.chK(o,p,u,f),$async$OY)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.chL(o,p,f,t),$async$OY)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.chJ(o,u,p,f),$async$OY)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OY,w)},
b3B(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chR(e,d),$async$b3B)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.X9(!1,!0,d,e),$async$b3B)
case 4:u=g
if(u!=null){t=u.b
v=new A.RR(u.a,D.B9,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3B,w)},
chR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$chR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X3(d,s,0,1),$async$chR)
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
return A.i($async$chR,w)},
chS(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$chS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9o(null,d,e),$async$chS)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hE9(u)
if(t.length>800){v=null
x=1
break}v=new A.RR(d.length,D.e5Z,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chS,w)},
asw(d,e,f){return B.iab(d,e,f)},
iab(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asw=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.dc(g,"\ufeff"))g=J.no(g,1)
x=B.hmF(g)?3:4
break
case 3:x=5
return A.b(B.chM(g),$async$asw)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.dc(g,"NGMYDOCSYNC4|")){s=C.a.i(J.no(g,13))
try{k=B.FQ(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.dc(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.no(g,13))
u=9
x=12
return A.b(B.b3u(q),$async$asw)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X6(p,a0)
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
case 11:case 7:if(J.dc(g,"NGMYDOCSYNC0|"))try{n=B.hmE(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X6(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.dc(g,"N2|")){v=B.JT(C.a.i(J.no(g,3)),d,a0)
x=1
break}if(J.dc(g,"NGMYDOCSYNC2|")){v=B.JT(C.a.i(J.no(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c4(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JT(h,d,a0)
x=1
break}if(J.eH(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.X6(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asw,w)},
JT(d,e,f){return B.ia9(d,e,f)},
ia9(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JT=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aD(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c4(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aD(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b3m(r),$async$JT)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b3m(A.cH(s,0,null)),$async$JT)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cho(o,r,a1,n,a2),$async$JT)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.chn(q),$async$JT)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.X6(l,a2),$async$JT)
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
return A.i($async$JT,w)},
a9o(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9o=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aN(e),t=y.N,s=y.z
case 3:if(!u.B()){x=4
break}r=u.gP(u)
x=5
return A.b(B.tf(f,r),$async$a9o)
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
v=C.T.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9o,w)},
X6(d,e){return B.iaa(d,e)},
iaa(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X6=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.T.aN(0,a2,null)
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
e=J.aN(r)
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
break}i=C.cM.aK(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.CH(i,a3,d,k,l,o),$async$X6)
case 9:h=a5
if(h!=null)J.bW(n,h)
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
return A.i($async$X6,w)},
OX:function OX(d,e){this.a=d
this.b=e},
chT:function chT(){},
a3x(d){var x=A.Q(d).ax.a===C.I,w=x?D.akO:D.aie,v=x?D.amE:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajL:C.bo
return new A.aK8([w,s,v,u,t,x?C.fz:C.bU])},
hVw(d,e){var x=e?C.v.j(0.72):C.bb
return A.cf(null,x,!0,null,new B.he1(e),d,null,!0,!0,y.N)},
chy(d,e,f,g,h,i,j,k,l){return new B.WZ(e,l,d,f,k,j,g,h,i,null)},
a0r(d,e,f,g,h,i,j){return new B.biq(g,h,j,e,i,d,f,null)},
he1:function he1(d){this.a=d},
a0o:function a0o(d,e){this.c=d
this.a=e},
aCS:function aCS(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhN:function dhN(d){this.a=d},
dhL:function dhL(d){this.a=d},
dhM:function dhM(d){this.a=d},
bAB:function bAB(){},
WZ:function WZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
aH_:function aH_(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e5J:function e5J(d){this.a=d},
e56:function e56(d,e){this.a=d
this.b=e},
e57:function e57(d,e){this.a=d
this.b=e},
e4G:function e4G(d,e,f){this.a=d
this.b=e
this.c=f},
e4F:function e4F(d){this.a=d},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4M:function e4M(d,e,f){this.a=d
this.b=e
this.c=f},
e4L:function e4L(d){this.a=d},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5y:function e5y(d){this.a=d},
e53:function e53(d,e,f){this.a=d
this.b=e
this.c=f},
e50:function e50(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4K:function e4K(d){this.a=d},
e5b:function e5b(d){this.a=d},
e5a:function e5a(){},
e4Q:function e4Q(d){this.a=d},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5v:function e5v(d,e){this.a=d
this.b=e},
e5w:function e5w(d,e){this.a=d
this.b=e},
e51:function e51(d,e){this.a=d
this.b=e},
e52:function e52(d,e){this.a=d
this.b=e},
e5n:function e5n(d,e){this.a=d
this.b=e},
e5j:function e5j(d){this.a=d},
e5i:function e5i(d){this.a=d},
e5k:function e5k(){},
e5l:function e5l(){},
e5m:function e5m(d,e){this.a=d
this.b=e},
e5o:function e5o(){},
e5p:function e5p(d){this.a=d},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5c:function e5c(d){this.a=d},
e5d:function e5d(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5f:function e5f(d){this.a=d},
e5g:function e5g(d){this.a=d},
e4N:function e4N(){},
e4O:function e4O(d){this.a=d},
e4P:function e4P(d,e){this.a=d
this.b=e},
e4J:function e4J(d,e){this.a=d
this.b=e},
e4I:function e4I(d,e,f){this.a=d
this.b=e
this.c=f},
e54:function e54(d){this.a=d},
e55:function e55(d,e,f){this.a=d
this.b=e
this.c=f},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e4V:function e4V(d){this.a=d},
e4S:function e4S(d,e,f){this.a=d
this.b=e
this.c=f},
e4W:function e4W(d){this.a=d},
e4X:function e4X(d){this.a=d},
e4Y:function e4Y(){},
e5_:function e5_(d,e){this.a=d
this.b=e},
e4T:function e4T(d){this.a=d},
e4R:function e4R(d,e,f){this.a=d
this.b=e
this.c=f},
e4U:function e4U(){},
e59:function e59(d){this.a=d},
e58:function e58(d,e){this.a=d
this.b=e},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5q:function e5q(d){this.a=d},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5s:function e5s(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5E:function e5E(d){this.a=d},
e5F:function e5F(d){this.a=d},
e5H:function e5H(){},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5A:function e5A(d,e){this.a=d
this.b=e},
e5B:function e5B(d,e,f){this.a=d
this.b=e
this.c=f},
e5z:function e5z(d,e,f){this.a=d
this.b=e
this.c=f},
e5C:function e5C(d,e){this.a=d
this.b=e},
e5D:function e5D(d,e){this.a=d
this.b=e},
aCP:function aCP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bip:function bip(d,e,f){this.c=d
this.d=e
this.a=f},
dhJ:function dhJ(){},
dhK:function dhK(){},
aeG:function aeG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
di6:function di6(){},
di5:function di5(d){this.a=d},
a0q:function a0q(d,e,f){this.c=d
this.d=e
this.a=f},
aCU:function aCU(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
di2:function di2(d){this.a=d},
di3:function di3(d,e,f){this.a=d
this.b=e
this.c=f},
di4:function di4(d,e){this.a=d
this.b=e},
di0:function di0(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d){this.a=d},
dhX:function dhX(d){this.a=d},
dhU:function dhU(d){this.a=d},
di_:function di_(d){this.a=d},
dhW:function dhW(d){this.a=d},
di1:function di1(d){this.a=d},
dhY:function dhY(d){this.a=d},
dhV:function dhV(d){this.a=d},
a0n:function a0n(d,e,f){this.c=d
this.d=e
this.a=f},
aCR:function aCR(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dhG:function dhG(d){this.a=d},
dhF:function dhF(d,e){this.a=d
this.b=e},
dhH:function dhH(d){this.a=d},
dhE:function dhE(d,e){this.a=d
this.b=e},
dhI:function dhI(d){this.a=d},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhz:function dhz(d){this.a=d},
dhA:function dhA(d){this.a=d},
dhB:function dhB(d,e){this.a=d
this.b=e},
dhC:function dhC(d){this.a=d},
Rp:function Rp(d,e,f){this.c=d
this.d=e
this.a=f},
aCX:function aCX(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dij:function dij(d){this.a=d},
dik:function dik(d){this.a=d},
dil:function dil(d){this.a=d},
dim:function dim(d){this.a=d},
din:function din(d,e){this.a=d
this.b=e},
dio:function dio(d){this.a=d},
diq:function diq(d){this.a=d},
dip:function dip(d){this.a=d},
a0s:function a0s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCV:function aCV(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dif:function dif(d,e){this.a=d
this.b=e},
dig:function dig(d,e){this.a=d
this.b=e},
di7:function di7(d,e,f){this.a=d
this.b=e
this.c=f},
di8:function di8(d){this.a=d},
di9:function di9(){},
die:function die(){},
dia:function dia(d,e){this.a=d
this.b=e},
dib:function dib(d,e){this.a=d
this.b=e},
dic:function dic(d,e){this.a=d
this.b=e},
did:function did(d,e){this.a=d
this.b=e},
aeE:function aeE(d,e){this.c=d
this.a=e},
dhy:function dhy(d){this.a=d},
a0m:function a0m(d){this.a=d},
aCQ:function aCQ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0t:function a0t(d,e){this.c=d
this.a=e},
aCW:function aCW(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dii:function dii(d){this.a=d},
dih:function dih(d){this.a=d},
biq:function biq(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
iac(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.ho(v)},
OZ(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OZ)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OZ)
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
return A.i($async$OZ,w)},
a9p(d){return B.iad(d)},
iad(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9p=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9p)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$a9p)
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
return A.i($async$a9p,w)},
X8(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$X8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OZ(),$async$X8)
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
return A.b(B.a9p(s),$async$X8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X8,w)},
X9(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$X9=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$X9)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.chV(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.iac()
t=A.T(u).k("O<1,a9<o,aH>>")
r=A.B(new A.O(u,new B.chW(s),t),t.k("aj.E"))
x=6
return A.b(B.OZ(),$async$X9)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9p(q),$async$X9)
case 7:x=8
return A.b(B.a9q(r,u,g,s),$async$X9)
case 8:v=new A.bup(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X9,w)},
asx(d){var x=0,w=A.j(y.y),v,u,t
var $async$asx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OZ(),$async$asx)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asx,w)},
chX(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OZ(),$async$chX)
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
return A.i($async$chX,w)},
a9q(d,e,f,g){return B.iae(d,e,f,g)},
iae(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9q=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.asv("media",r,new B.chU(s,e,g),f,q),$async$a9q)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.X8(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9q)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.X8(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9q)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.X8(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9q)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9q,w)},
FQ(d,e,f){return B.iaf(d,e,f)},
iaf(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FQ=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FQ)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asx(b3),$async$FQ)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j5,null,g),$async$FQ)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asx(b3),$async$FQ)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OZ(),$async$FQ)
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
l=new A.acR(a8.a,b0,"media",a8.d,a9).DZ(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b3n(k,n,o,s,b7),$async$FQ)
case 17:j=c0
if(j!=null){J.bW(p,j);++q
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
return A.b(new A.acR(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FQ)
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
return A.b(B.a9p(e),$async$FQ)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FQ,w)},
chV:function chV(){},
chW:function chW(d){this.a=d},
chU:function chU(d,e,f){this.a=d
this.b=e
this.c=f},
aUZ(){var x=0,w=A.j(y.H),v,u
var $async$aUZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ilH=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aUZ)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aUZ)
case 3:u=$.hsn
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aUZ)
case 4:$.hsn=$.iv3=$.iv4=null
return A.h(null,w)}})
return A.i($async$aUZ,w)},
fOS(d){var x=0,w=A.j(y.H),v,u
var $async$fOS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abz){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fOT(new A.cb(u,y.aY))
x=3
return A.b(u.il(0,C.he,new B.fOU()),$async$fOS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fOS,w)},
iv0(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i9X(x):x},
hss(d){var x=0,w=A.j(y.T),v,u,t
var $async$hss=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asz(u)
x=1
break}v=B.hmE(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hss,w)},
hsr(d){var x=0,w=A.j(y.T),v,u,t
var $async$hsr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.asA(u)
x=1
break}v=B.hmE(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hsr,w)},
h9q(d){var x=0,w=A.j(y.T),v
var $async$h9q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asA(d),$async$h9q)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9q,w)},
bH5(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bH5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hsr(d),$async$bH5)
case 3:q=f
if(q==null){x=1
break}t=C.T.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a1(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH5,w)},
fBU(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fBU=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X2(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CH(d.a90(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBU,w)},
HL(d,e,f){return B.ixs(d,e,f)},
ixs(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HL=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hss(a1),$async$HL)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.T.aN(0,e,null)
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
return A.b($.hXy().aIF(D.dPf,null),$async$HL)
case 4:l=d.hsn=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aei(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fPu(f,k,new B.fPv(f,a2,k,j,a0,p),a2,j,a0,p,new A.cb(t,y.ch))
x=5
return A.b(l.aap(0,new B.Zn(r,"offer")),$async$HL)
case 5:d=l
x=7
return A.b(l.aoh(0),$async$HL)
case 7:x=6
return A.b(d.aah(0,a4),$async$HL)
case 6:x=8
return A.b(B.fOS(l),$async$HL)
case 8:x=9
return A.b(l.asI(),$async$HL)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iv0(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.T.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asB(m,h),$async$HL)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hE9(h)
case 11:v=new A.btD(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HL,w)},
fOT:function fOT(d){this.a=d},
fOU:function fOU(){},
fPv:function fPv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fPu:function fPu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fPt:function fPt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
izx(d){switch(d){case"new":return D.eRe
case"checking":return D.eRf
case"connected":return D.eRh
case"completed":return D.eRg
case"failed":return D.eRj
case"disconnected":return D.eRk
case"closed":return D.aUl
case"count":return D.eRi}return D.aUl},
izy(d){switch(d){case"new":return D.aUm
case"gathering":return D.eRl
case"complete":return D.abz}return D.aUm},
iKE(d){switch(d){case"stable":return D.eRm
case"have-local-offer":return D.eRn
case"have-local-pranswer":return D.eRp
case"have-remote-offer":return D.eRo
case"have-remote-pranswer":return D.eRq
case"closed":return D.aUs}return D.aUs},
iIJ(d){switch(d){case"new":return D.aUp
case"connecting":return D.aUq
case"connected":return D.aUr
case"closed":return D.abA
case"disconnected":return D.aUo
case"failed":return D.aUn}return D.abA},
abO:function abO(d,e){this.a=d
this.b=e},
Q8:function Q8(d,e){this.a=d
this.b=e},
Zm:function Zm(d,e){this.a=d
this.b=e},
Q7:function Q7(d,e){this.a=d
this.b=e},
Gk:function Gk(d,e){this.a=d
this.b=e},
cw1:function cw1(){},
hox(d){var x=new B.Gj()
x.a=d
x.b=!0
return x},
Gj:function Gj(){this.b=this.a=$},
abN:function abN(){},
ax7:function ax7(){},
Zn:function Zn(d,e){this.a=d
this.b=e},
hmA(){var x=0,w=A.j(y.H)
var $async$hmA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hmA,w)},
hmD(d,e,f){var x=0,w=A.j(y.T),v
var $async$hmD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n_(D.nu))){v=null
x=1
break}v=B.h9H(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmD,w)},
hE9(d){var x,w=F.ahF.a71(C.e4.aK(d),null)
if(w.length===0){x=C.e4.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i9W(d){var x,w,v=C.cM.aK(d)
try{x=C.ch.cJ(0,F.ahE.biZ(v,!1))
return x}catch(w){x=C.ch.cJ(0,v)
return x}},
hmE(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i9W(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.ch.cJ(0,C.cM.aK(x))
return v}catch(u){return x}}return null},
i9X(d){var x,w,v,u,t,s=A.a([],y.s)
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
i9Y(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.ho(v)},
b3t(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b3t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b3t)
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
return A.i($async$b3t,w)},
chD(d,e){return B.i9Z(d,e)},
i9Z(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$chD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cZ,null),$async$chD)
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
return A.i($async$chD,w)},
b3w(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3t(d),$async$b3w)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3w,w)},
b3v(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i9Y()
r=C.a.i(f)
t=C.e4.aK(s)
x=3
return A.b(B.chD(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3v)
case 3:if(!h){v=null
x=1
break}v=new A.a2w("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3v,w)},
b3u(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b3u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.b3t(o),$async$b3u)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.ch.cJ(0,C.cM.aK(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b3u,w)},
chE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$chE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(O.bI4("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cZ),$async$chE)
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
return A.i($async$chE,w)},
b3x(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JP(),$async$b3x)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3x,w)},
ass(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ass=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$ass)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3x(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ass,w)},
asq(d,e){var x=0,w=A.j(y.H)
var $async$asq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asq)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$asq)
case 2:return A.h(null,w)}})
return A.i($async$asq,w)},
a9h(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9h)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JP(),$async$a9h)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dy(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9g(s),$async$a9h)
case 5:x=6
return A.b(B.asq(f,u),$async$a9h)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9h,w)},
a9i(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9i=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9i)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JP(),$async$a9i)
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
return A.b(B.asq(g,q),$async$a9i)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9g(u),$async$a9i)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9i,w)},
a9j(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9j)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JP(),$async$a9j)
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
s=B.b3q(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9j)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.T.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9j)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9j,w)},
chF(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$chF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$chF)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.T.aN(0,r,null)
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
return A.i($async$chF,w)},
JQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chF(d),$async$JQ)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3x(t),$async$JQ)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asr(d),$async$JQ)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b3q(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asr(d),$async$JQ)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JQ,w)},
asr(d){var x=0,w=A.j(y.H)
var $async$asr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asr)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asr)
case 2:return A.h(null,w)}})
return A.i($async$asr,w)},
b3y(){var x,w=$.oh(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.ho(v)},
a9k(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hmF(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
chI(d){return B.ia0(d)},
ia0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$chI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9k(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$chI)
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
return A.i($async$chI,w)},
asu(d,e){return B.ia1(d,e)},
ia1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9k(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cZ,null),$async$asu)
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
return A.i($async$asu,w)},
chK(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chK=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9k(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asu(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chK)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chK,w)},
chJ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chJ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9k(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asu(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chJ,w)},
chL(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$chL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9k(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asu(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chL,w)},
chM(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$chM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hmF(d)){v=null
x=1
break}x=3
return A.b(B.chI(d),$async$chM)
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
return A.i($async$chM,w)},
a9r(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9r=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9r)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9r)
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
return A.i($async$a9r,w)},
asy(d){return B.iag(d)},
iag(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asy)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$asy)
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
return A.i($async$asy,w)},
asz(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.dc(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asz)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9r(),$async$asz)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.ch.cJ(0,C.cM.aK(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asy(s),$async$asz)
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
return A.i($async$asz,w)},
asB(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asB)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9r(),$async$asB)
case 4:u=g
t=J.a1(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e4.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asy(u),$async$asB)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asB,w)},
asA(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$asA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asA)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9r(),$async$asA)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.ch.cJ(0,C.cM.aK(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$asA,w)},
arp(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$arp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bl$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.oF)){v=null
x=1
break}x=3
return A.b(p.lC(e),$async$arp)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hr),$async$arp)
case 7:q=g
o=q
o=o==null?null:J.eU(J.tL(o))
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
return A.i($async$arp,w)},
iGJ(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.n.v(w),5,"0")
return v},
h7z(d){return B.iGL(d)},
iGL(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h7z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iN("media").Mr(d,3600),$async$h7z)
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
return A.i($async$h7z,w)},
E8(d,e,f,g,h,i){var x=null
return B.iGI(d,e,f,g,h,i)},
iGI(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E8=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hEc(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hmH(r),$async$E8)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h7z(o),$async$E8)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9l(r),$async$E8)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aY5)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ir(A.a([],g))
x=15
return A.b(d.ff(0,A.axW("GET",A.cH(n,0,null))).d9(0,C.HK),$async$E8)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9l(r),$async$E8)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LH(d)
u=19
case 22:x=24
return A.b(d.B(),$async$E8)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3A(r,k),$async$E8)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$E8)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X2(r)
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
return A.b(B.a9l(r),$async$E8)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E8,w)},
aUD(d){return B.iGK(d)},
iGK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iN("media").X(0,d),$async$aUD)
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
return A.i($async$aUD,w)}},D,Y,N,Z,A_
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
B.cw2.prototype={
aIF(d,e){return this.cVl(d,e)},
cVl(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aIF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kE(A.cz(t)))
t=J.k(u)
v=B.if5(C.cS.gcp().aK(new A.d1(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aIF,w)}}
B.b8L.prototype={
bFr(d){var x=this,w=x.w
w.onclose=A.hG(new B.cvY(x))
w.onopen=A.hG(new B.cvZ(x))
w.onmessage=A.hG(new B.cw_(x))
w.onbufferedamountlow=A.hG(new B.cw0(x))},
gd5(d){return this.x},
akw(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$akw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gj()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hox(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$akw)
case 8:v=t.hox(s.aqy(f,0,null))
x=1
break
case 7:case 4:v=B.hox(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akw,w)}}
B.b8M.prototype={
bFs(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cw3(x)))
w.addEventListener("icecandidate",A.hG(new B.cw4(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cw5(x)))
w.onicegatheringstatechange=A.hG(new B.cw6(x))
w.addEventListener("signalingstatechange",A.hG(new B.cw7(x)))
if(!$.hwH())w.addEventListener("connectionstatechange",A.hG(new B.cw8(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cw9(x)))
w.addEventListener("track",A.hG(new B.cwa(x)))},
aoh(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aoh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ek(s.createAnswer(A.kE(A.cz(A.S(y.N,y.z)))),y.aQ),$async$aoh)
case 3:t=f
v=new B.Zn(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoh,w)},
aah(d,e){return this.buk(0,e)},
buk(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aah=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aah)
case 2:return A.h(null,w)}})
return A.i($async$aah,w)},
aap(d,e){return this.buF(0,e)},
buF(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aap=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aap)
case 2:return A.h(null,w)}})
return A.i($async$aap,w)},
asI(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$asI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zn(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asI,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fc(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.aeF.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0p.prototype={
R(){return new B.aCT()},
gd8(){return this.c}}
B.aCT.prototype={
Z(){this.a4()
this.ah_()},
ah_(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ah_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3r(u.e,u.c),$async$ah_)
case 2:t=e
if(v.c!=null)v.l(new B.dhR(v,t))
return A.h(null,w)}})
return A.i($async$ah_,w)},
S5(){var x=0,w=A.j(y.H),v,u=this,t
var $async$S5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.asn(t.e,t.c,!1),$async$S5)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fGE)
x=1
break}x=4
return A.b(B.a9f(u.a.c,"individual"),$async$S5)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a8B(A.e4(new B.dhO(u),!1,null,y.H)),$async$S5)
case 5:case 1:return A.h(v,w)}})
return A.i($async$S5,w)},
KH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$KH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fMD(o),$async$KH)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9j(o.e,r,s,q),$async$KH)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fDD)
x=1
break}x=5
return A.b(B.a9f(u.a.c,"member"),$async$KH)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a8B(A.e4(new B.dhQ(u),!1,null,y.H)),$async$KH)
case 6:case 1:return A.h(v,w)}})
return A.i($async$KH,w)},
zd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a9e(t.e,o,t.f,t.r,t.w,s),$async$zd)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9f(u.a.c,"org_owner"),$async$zd)
case 4:x=5
return A.b(B.ass(u.a.c),$async$zd)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fN7(o),$async$zd)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9h(s,t,o,q.c),$async$zd)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fDz)
x=1
break}x=10
return A.b(B.ass(u.a.c),$async$zd)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a8B(A.e4(new B.dhP(u),!1,null,y.H)),$async$zd)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zd,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.o_:C.nh,p=B.hmC(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dL,y.m).w
w=A.n(28)
v=A.a([new A.ac(0,C.H,C.aA.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.h08,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hp,s,s,s),C.az,D.hkx,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cfJ,C.m),s,s,s,s,C.ez,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lW(new B.dhT(),s),C.N,v,C.ed,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.af8(C.f9,C.aGG,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcnC(),s),C.af],u))
w.push(new B.af8(C.q9,C.a6R,"Team Member","Sign in with your organization access code + password",t.gcox(),s))
w.push(C.af)
w.push(new B.af8(C.asp,C.a8A,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gco1(),s))
return A.c6(s,q,A.bn(!0,A.cc(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.af8.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.et,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lS,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.A3,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFz.prototype={}
B.aIQ.prototype={}
B.jW.prototype={
n_(d){var x=this.b,w=C.a.ou(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gatn(){var x=this.d
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
bis(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jW(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cTR(d){return this.bis(null,d)},
aIn(d){return this.bis(d,null)}}
B.WX.prototype={
R(){return new B.aGY(new A.cB(null,y.A))},
gd8(){return this.c}}
B.aGY.prototype={
Z(){this.a4()
this.ah0()},
ah0(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ah0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CG(u.a.c),$async$ah0)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e4C(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ah0,w)},
ah1(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ah1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fP(new A.fD(s)),$async$ah1)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fHz)
case 1:return A.h(v,w)}})
return A.i($async$ah1,w)},
a0S(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0S=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.arp(s.d,4),$async$a0S)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_my_code_"+m+".png"),$async$a0S)
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
return A.i($async$a0S,w)},
akX(){var x=0,w=A.j(y.H),v,u=this,t
var $async$akX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.acq("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$akX)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akX,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.o_:C.nh,m=o?C.c:C.a_,l=A.eQ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AI,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aoT,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.H,C.aA.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.nA,w,C.lp,new A.e9(A.q(p,A.qx(p,p,!1,B.i9S(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lp,A.A(A.a([A.E(A.en(I.Ec,p,C.XI,q.gcfy(),p),1),C.ar,A.E(A.df(C.Ax,p,C.adX,q.gcfz(),A.bp(C.aA,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a4(1/0,p,A.en(N.a5E,p,D.hfY,q.gcDR(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.apu,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.X0.prototype={
R(){return new B.aH0(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aH0.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JO(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a0T(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JO(u.d.a.a)
if(t==null){u.l(new B.e5L(u))
x=1
break}u.l(new B.e5M(u))
s=u.a
r=s.c
x=3
return A.b(B.a9d(s.d,new B.e5N(u),t,r),$async$a0T)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e5O(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0T,w)},
a4q(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.l(new B.e5P(r))
u=4
q=J.ex(r.a.d)
x=7
return A.b(B.tf(r.a.c,q),$async$a4q)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e5Q(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.akh(p,m,l,j,k),$async$a4q)
case 8:o=e
if(r.c!=null)r.l(new B.e5R(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e5S(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e5T(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4q,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akO:D.aie,h=j?D.amE:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajL:C.bo
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
t=A.q(k,A.A(A.a([A.q(k,D.c2y,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.aA],e),k,k),C.m),k,52,k,k,k,k,k,52),C.et,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AI,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vj(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bnV()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aO(k,C.M,u==null,k,!0,C.t,k,A.aP(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.PF,k,k,"",k,!0,new A.b5(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.n(18),new A.ax(C.aA,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e5U(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mS,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.Ei(l.a.d,4)
m=A.B(new A.O(m,new B.e5V(x,new A.aK8(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.kP,A.c("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.er,k,k,k)],r)
if(l.r!=null){u=C.aA.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aA.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fC3)
else q.push(A.V(C.kR,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cZ(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.p(u,k,s,t,k,k,C.m),C.iP,k,k,k,k,C.f3,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bKB,k,k,C.ah),1)
u=l.f?k:l.gcDS()
t=i[3]
s=i[1]
q=A.n(16)
s=A.en(N.a5E,k,D.hh4,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcfA()
t=A.bp(C.aA,k,k,0,C.c,k,C.o7,k,new A.ba(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ab,C.t,A.a([f,v,A.bn(!0,A.l4(new B.e5W(),A.w(A.a([e,new A.C(D.bK4,A.w(A.a([s,C.N,i,C.af,A.bH(l.f?C.uy:D.hfi,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a1S,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bnV.prototype={
pq(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fa(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hl(C.bB,v.length),C.aP)}}
B.WY.prototype={
R(){return new B.aGZ()}}
B.aGZ.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,C.ba,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bd(x,C.ba,C.aP),v)
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
ah2(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ah2=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e4D(r))
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
return A.b(B.a9i(p,m,n,o,C.a.i(l).length===0?null:l),$async$ah2)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fHa)
s=[1]
x=4
break}p.L(y.q).f.T(D.fFM)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e4E(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ah2,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.o_:C.nh,q=A.eQ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h7B,s,s,s,1,s,!0),p=A.q(s,D.bC6,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.J7,C.m),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.d()
o=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),o,s,s,s,s,s,2,D.ca2,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),x,s,s,s,s,s,2,D.c9Y,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),w,s,s,s,s,s,2,D.cad,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcfB()
u=A.bp(C.aA,s,s,s,s,C.hu,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.nA,A.bH(t.r?C.uy:C.b03,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.aem.prototype={}
B.bAZ.prototype={
a7i(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a90()))
x=3
return A.b(B.T3(t,s),$async$a7i)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7i,w)},
gd8(){return this.a}}
B.OX.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0o.prototype={
R(){return new B.aCS(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aCS.prototype={
Z(){this.a4()
$.aS.U$.push(new B.dhN(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cfH(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3x(d),u=x.a.c,t=u?C.j_:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.o_:v.a[0],p=A.n(24),o=A.K(C.aA.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.H,C.aA.j(u?0.25:0.12),C.fF,32)],n),l=A.q(w,Y.avc,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ac(0,C.H,C.aA.j(0.4),C.cy,16)],n),C.aw4,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vj(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAB()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aO(!1,C.M,!1,w,!0,C.t,w,A.aP(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Dn,w,w,"",w,!0,new A.b5(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.n(16),D.b9D),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dhL(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mS,w,w,w,w)
f=f[1]
h=y.p
return A.eD(w,C.L,new A.cS(T.Ne,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xh,A.w(A.a([l,C.aN,k,C.N,j,C.ed,i,C.ed,A.A(A.a([A.E(A.dV(C.oA,new B.dhM(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.ba(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ac(0,C.H,C.aA.j(0.35),C.cO,12)],n),M.RP,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eKy,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcfG(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PN,w,C.db,w,w,w)}}
B.bAB.prototype={
pq(d,e){return e.aob(e.a.toUpperCase())}}
B.WZ.prototype={
R(){return new B.aH_(A.a([],y.r),A.aR(y.N))},
gd8(){return this.c}}
B.aH_.prototype={
Z(){var x=this
x.a4()
x.uL()
x.w=A.d5(C.jY,new B.e5J(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.X7()
this.a3()},
a3e(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OW(u.a.c),$async$a3e)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.BC(u.a.c),$async$a3e)
case 4:u.l(new s.e56(u,e))
u.iz("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a3e,w)},
uL(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OW(u.a.c),$async$uL)
case 3:t=e
x=4
return A.b(B.BC(u.a.c),$async$uL)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e57(u,s))
if(t>0)u.iz("Received "+A.v(t)+" file(s) via My Code.")
u.P7(u.d)
B.CG(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uL,w)},
P7(d){return this.bJz(d)},
bJz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$P7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9n(r,u.a.c),$async$P7)
case 8:p=f
if(u.c==null){x=1
break}new B.e4G(u,r,p).$0()
u.c.ey()
case 7:if(!(C.a.Y(r.c,"video/")||r.n_(D.nu))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.X5(r,u.a.c),$async$P7)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.BC(u.a.c),$async$P7)
case 12:u.l(new o.e4H(u,f))
case 1:return A.h(v,w)}})
return A.i($async$P7,w)},
Px(d){return this.bQ0(d)},
bQ0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Px=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9n(d,u.a.c),$async$Px)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e4M(u,d,t))
x=6
return A.b(A.fP(new A.fD(t)),$async$Px)
case 6:u.iz("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fP(new A.fD(r.toUpperCase())),$async$Px)
case 7:u.iz("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Px,w)},
iz(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uM(d,e){return this.cP5(d,e)},
cP5(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e5x(r,e))
u=3
x=6
return A.b(d.$0(),$async$uM)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e5y(r))
$.eY.mT()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uM,w)},
gb_j(){var x=this.a
return x.f||x.r||x.w},
Js(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Js=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gb_j()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.chB(s,n,r,q,o,t),$async$Js)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iz("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.h_S(o,u.a.c),$async$Js)
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
return A.b(B.Ea(s,o,r,q,n,t),$async$Js)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Js,w)},
a2e(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a2e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ass(u.a.c),$async$a2e)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iz("No organization portal found.")
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
return A.b(A.a7(t,!1).ca(A.e4(new B.e53(u,r,q),!1,null,y.H)),$async$a2e)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a2e,w)},
a3p(d){return this.cxb(d)},
cxa(){return this.a3p(1)},
cxb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gb_j()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.asp(u.a.c),$async$a3p)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3p,w)},
aeO(d,e,f){return this.c67(d,e,f)},
c67(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aeO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iz(e)
x=1
break}x=3
return A.b(u.uM(new B.e50(u,d,null,e,f),"Uploading\u2026"),$async$aeO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeO,w)},
bJI(){B.hUs(!1,new B.e4K(this))
return},
cCm(){this.l(new B.e5b(this))},
aCL(){var x=0,w=A.j(y.H),v=this
var $async$aCL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bJI()
return A.h(null,w)}})
return A.i($async$aCL,w)},
aeK(){var x=0,w=A.j(y.H),v=this
var $async$aeK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uM(new B.e4Q(v),"Importing\u2026"),$async$aeK)
case 2:return A.h(null,w)}})
return A.i($async$aeK,w)},
U7(d){return this.cOm(d)},
cOm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$U7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n_(D.nu)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e5u(u,d),!1,null,y.H)),$async$U7)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n_(D.TT)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ca(A.e4(new B.e5v(u,d),!1,null,y.H)),$async$U7)
case 8:x=1
break
case 7:x=u.c6Q(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ca(A.e4(new B.e5w(u,d),!1,null,y.H)),$async$U7)
case 11:x=1
break
case 10:u.iz("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$U7,w)},
c6Q(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.ou(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cZM,C.a.aV(x,w+1).toLowerCase())},
aiG(d){return this.cnG(d)},
cnG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n_(D.nu)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e51(u,d),!1,null,y.H)),$async$aiG)
case 5:x=1
break
case 4:u.l(new B.e52(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aiG,w)},
Ts(d){return this.cFl(d)},
cFl(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ts=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iz("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$Ts)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uM(new B.e5n(u,d),"Preparing QR\u2026"),$async$Ts)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ts,w)},
aln(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aln=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e5o(),A.T(t).k("O<1,o>")).fG(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e5p(q),s),s.k("M.E"))
if(r.length===0){u.iz("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ts(r),$async$aln)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aln,w)},
alf(d){return this.cET(d)},
cET(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3x(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e5h(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$alf)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.U7(d)
break
case"qr":u.Ts(A.a([d],y.r))
break
case"send_my_code":u.com(A.a([d],y.r))
break
case"save":u.akE(d)
break
case"delete":u.Kn(d)
break}case 1:return A.h(v,w)}})
return A.i($async$alf,w)},
ZA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e4N(),A.T(t).k("O<1,o>")).fG(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e4O(q),s),s.k("M.E"))
if(r.length===0){u.iz("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$ZA)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uM(new B.e4P(u,r),"Preparing file\u2026"),$async$ZA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZA,w)},
ajM(d){return this.cvs(d)},
cvs(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ajM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hVw(d,!1),$async$ajM)
case 3:s=f
r=s==null
q=B.a9k(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iz("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajM,w)},
aiM(){var x=0,w=A.j(y.H),v=this,u
var $async$aiM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h8H(u,v.a.c),$async$aiM)
case 2:return A.h(null,w)}})
return A.i($async$aiM,w)},
bJH(){B.hUs(!1,new B.e4J(this,null))
return},
KG(d,e){return this.con(d,e)},
b67(d){return this.KG(null,d)},
com(d){return this.KG(d,null)},
con(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$KG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e54(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y9.cr().ar0(!0,C.a3L,!1),$async$KG)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.uM(new B.e55(l,s,r),"Preparing\u2026"),$async$KG)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iz("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iz("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bJk(p,l,e,s.a.c),$async$KG)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iz("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$KG,w)},
JJ(d){return this.c5V(d)},
c5V(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$JJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i9R(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b67(t),$async$JJ)
case 8:x=6
break
case 7:u.iz("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iz("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uM(new B.e4Z(u,d),"Receiving video\u2026"),$async$JJ)
case 11:x=1
break
case 10:x=12
return A.b(u.uM(new B.e5_(u,d),"Receiving\u2026"),$async$JJ)
case 12:case 1:return A.h(v,w)}})
return A.i($async$JJ,w)},
Ft(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ft=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E4()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ajM(t),$async$Ft)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.JJ(s),$async$Ft)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e59(u),!1,null,y.N)),$async$Ft)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uL(),$async$Ft)
case 10:x=1
break
case 9:x=11
return A.b(u.JJ(C.a.i(r)),$async$Ft)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ft,w)},
akE(d){return this.cAQ(d)},
cAQ(d){var x=0,w=A.j(y.H),v=this
var $async$akE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uM(new B.e58(v,d),"Saving\u2026"),$async$akE)
case 2:return A.h(null,w)}})
return A.i($async$akE,w)},
Kn(d){return this.bSp(d)},
bSp(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Kn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lH(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Kn)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.chE(t),$async$Kn)
case 6:case 5:s=d.a
x=7
return A.b(B.FP(u.a.c,s),$async$Kn)
case 7:u.r.X(0,s)
x=8
return A.b(u.uL(),$async$Kn)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Kn,w)},
alu(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3x(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e5t(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alu)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aiM()
break
case"import":u.aeK()
break}case 1:return A.h(v,w)}})
return A.i($async$alu,w)},
cfE(d){var x=d.c
if(C.a.Y(x,"video/")||d.n_(D.nu))return C.rD
if(C.a.Y(x,"image/")||d.n_(D.TT))return C.vE
if(C.a.q(x,"pdf"))return S.IM
return D.asP},
C(d){var x,w,v=this,u=null,t=B.a3x(d),s=t.a,r=s[0],q=s[3],p=A.aJ(u,u,u,u,C.IZ,u,u,u,new B.e5E(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aJ(u,u,u,u,D.c3a,u,u,u,v.e?u:v.gco2(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcCl()
n.push(A.aJ(u,u,u,u,A.V(v.r.a===x?D.bY8:E.atd,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aJ(u,u,u,u,C.a5A,u,u,u,v.e?u:v.gcfF(),u,u,u,u,"Scan QR",u))
n.push(A.aJ(u,u,u,u,C.pb,u,u,u,v.e?u:v.gb7d(),u,u,u,u,"Upload files",u))
n.push(A.aJ(u,u,u,u,D.c5_,u,u,u,v.e?u:new B.e5F(v),u,u,u,u,"More options",u))
q=A.eQ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lW(new B.e5G(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.aA.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aA.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jK(s[1].j(0.5),u,C.aA,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCP(C.jI,s,!0,t,w?u:v.gcFm(),u),1)
x.push(new A.C(C.aoR,A.l4(new B.e5H(),A.A(A.a([s,C.ar,A.E(new B.aCP(C.tV,"Export",!1,t,w?u:v.gbWi(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iQ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bip(t,v.e?u:v.gb7d(),u)
else s=A.ku(!0,u,u,new B.e5I(v,t),s,u,D.bIH,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ab,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCP.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aA,t,t,0,C.c,t,C.tK,t,new A.ba(s,C.a1),t,t,t)
return A.df(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tK,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.en(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bip.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aA.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l4(new B.dhJ(),new A.C(E.a2S,A.w(A.a([A.l4(new B.dhK(),A.q(x,A.V(C.A8,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eh,C.hz,x,x,new A.bq(0.86,1,w),s),C.ed,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ed,A.df(C.pb,x,D.hkR,this.d,A.bp(C.aA,x,x,x,C.c,x,C.PL,x,new A.ba(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.D8,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeG.prototype={
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
if(!o||i.n_(D.nu))p=D.dDi
else{p=C.a.Y(p,"image/")||i.n_(D.TT)
n=y.O
p=p?A.a([C.cY,C.aA],n):A.a([C.aO.j(0.85),C.aA.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gatn()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n_(D.nu))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.w(A.a([q,C.at,A.c(C.d.aJ(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aJ(j,j,j,j,A.V(C.h3,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n_(D.nu)))l.push(A.hkp(C.aA,!1,j,j,j,!1,j,j,new B.di5(k),j,j,new A.ba(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p7,x[4],j,j,j,j)
l.push(A.aJ(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l4(new B.di6(),new A.C(C.dX,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a2h,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bb("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0q.prototype={
R(){return new B.aCU()},
gd8(){return this.c}}
B.aCU.prototype={
Z(){this.a4()
this.z1()},
t(){B.ia5(this.e)
this.a3()},
z1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$z1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.tf(o.c,o.d),$async$z1)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.ia8(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.ia7(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.di2(s))
x=1
break}s.l(new B.di3(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.di4(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z1,w)},
a4p(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.tf(t.c,t.d),$async$a4p)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fE9)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.akh(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4p)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4p,w)},
c5O(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kt(u,C.z,v,new B.di0(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h9(t,C.z,v,new B.di1(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bK
return A.u6(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3x(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aJ(u,u,u,u,C.Ee,u,u,u,v.gbb3(),u,u,u,u,"Share / save",u))
r=A.eQ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.GC
else{q=v.r
if(q!=null)t=new A.C(C.ez,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c4(w,".heic")||C.a.c4(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ez,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.df(C.Ee,u,D.h2E,v.gbb3(),A.bp(C.aA,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c5O()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0n.prototype={
R(){return new B.aCR(A.alg(),C.bI,C.bI)},
gd8(){return this.c}}
B.aCR.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iP(new B.dhG(v))
x.gd23().iP(new B.dhH(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bfZ
x.iP(new B.dhI(v))
v.z1()},
z1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$z1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.tf(p.c,p.d),$async$z1)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dhz(s))
x=1
break}x=8
return A.b(s.d.vO(0,new A.a5L(r,s.a.d.c)),$async$z1)
case 8:if(s.c==null){x=1
break}s.l(new B.dhA(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.dhB(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z1,w)},
a0U(){var x=0,w=A.j(y.H),v=this,u
var $async$a0U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hq(0),$async$a0U)
case 5:x=3
break
case 4:x=6
return A.b(u.iS(0),$async$a0U)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0U,w)},
aY9(d){var x=d.a
return C.a.aY(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3x(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eQ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.GC
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bZ9,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RP,C.m),o,88,o,o,o,o,o,88)
t=A.lj(C.aA,o,o,m,0,new B.dhC(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aY9(p.w)+" / "+p.aY9(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aA,o,o,o,o,D.fAv,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vH:C.fR,o,o,o,o,o)
x=A.w(A.a([u,C.lp,t,x,C.df,A.df(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcfI(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.q0,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rp.prototype={
R(){return new B.aCX()},
gd8(){return this.c}}
B.aCX.prototype={
Z(){this.a4()
this.Rk()},
Rk(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Rk=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hmD(o.c,o.d,new B.dij(s)),$async$Rk)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dik(s))
x=1
break}s.e=r
q=Q.iyn(r)
if(q==null){s.l(new B.dil(s))
x=1
break}s.d=q
q.aU(0,s.gb5V())
x=8
return A.b(q.j3(0).d9(0,C.o6),$async$Rk)
case 8:if(s.c==null){x=1
break}s.l(new B.dim(s))
x=9
return A.b(q.qG(0),$async$Rk)
case 9:q.uo(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.din(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Rk,w)},
cma(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dio(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ed(0,x.gb5V())
w=x.d
if(w!=null)w.t()
B.iJ1(x.e)
x.a3()},
ah5(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ah5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3z(u.c,u.d),$async$ah5)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ah5,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3x(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eQ(A.a([A.aJ(t,t,t,t,C.om,t,t,t,u.gcfC(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iC(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.GC
else{q=u.r
if(q!=null)s=new A.C(C.ez,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akF(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.am(C.z,t,C.ab,C.t,A.a([new A.B7(s,t),A.aA(t,A.xT(A.q(t,A.V(q?K.vH:C.fR,C.c,t,t,t,48),C.f,t,t,new A.p(C.bb,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.diq(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0s.prototype={
R(){return new B.aCV(new A.cB(null,y.A))}}
B.aCV.prototype={
gcOL(){var x,w,v=this.a
if(v.e!==D.Vi)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcOk(){var x,w,v=this.a
if(v.e!==D.B9)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcOL()
if(x!=null){v.Sv(x)
v.e=A.d5(V.Da,new B.dif(v,x))}w=v.gcOk()
if(w!=null){v.Su(w)
v.f=A.d5(C.fr,new B.dig(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
Su(d){return this.ctD(d)},
ctD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Su=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asx(d),$async$Su)
case 3:t=f
x=4
return A.b(B.chX(d),$async$Su)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.di7(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Su,w)},
Sv(d){return this.ctE(d)},
ctE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h9q(d),$async$Sv)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bH5(t),$async$Sv)
case 4:if(u.c==null){x=1
break}u.l(new B.di8(u))
u.c.L(y.q).f.T(D.aXF)
case 1:return A.h(v,w)}})
return A.i($async$Sv,w)},
gcbn(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcfD(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a48(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a48=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E4()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fHk)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ca(A.e4(new B.di9(),!1,null,y.N)),$async$a48)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bH5(s),$async$a48)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aXF)
case 1:return A.h(v,w)}})
return A.i($async$a48,w)},
acA(d){return this.bQ1(d)},
bQ1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fP(new A.fD(C.d.aJ(t,", "))),$async$acA)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acA,w)},
ah3(d){return this.bPK(d)},
bPK(d){var x=0,w=A.j(y.H),v=this
var $async$ah3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fP(new A.fD(v.a.c)),$async$ah3)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fED)
return A.h(null,w)}})
return A.i($async$ah3,w)},
a42(d){return this.cAS(d)},
cAS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a42=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.arp(s.d,4),$async$a42)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_doc_share_qr.png"),$async$a42)
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
return A.i($async$a42,w)},
gb0z(){var x,w=this.a
if(w.e!==D.Kg)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acx(d){return this.bPV(d)},
bPV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb0z()
if(t==null){x=1
break}x=3
return A.b(A.fP(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$acx)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fGj)
case 1:return A.h(v,w)}})
return A.i($async$acx,w)},
ah4(){var x=0,w=A.j(y.H),v=this,u
var $async$ah4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.X7(),$async$ah4)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ah4,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3x(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kg&&i!==D.Vi&&i!==D.B9
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eQ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kg||t===D.Vi||t===D.B9?l:A.aJ(l,l,l,l,C.lJ,l,l,l,m.gb3J(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aA.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qx(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcbn(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kg){t=C.aA.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcfD(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aJ(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c95,D.hcr,new B.dia(m,d),l)],p))}if(m.a.e===D.Kg&&m.gb0z()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c5m,D.h90,new B.dib(m,d),l)],p))
if(m.a.e===D.B9){x=(m.w?C.dT:C.aA).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GG:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}if(m.a.e===D.Vi){x=(m.r?C.dT:C.aA).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GG:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l),C.af,A.df(D.c0F,l,D.hfC,m.gcBf(),A.bp(C.aA,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pg(i,A.c6(v,w,new A.C(C.ad,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.bc,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(I.Ec,l,C.XI,new B.dic(m,d),l),1),C.ar,A.E(A.df(C.Ax,l,C.adX,new B.did(m,d),A.bp(C.aA,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a4(1/0,l,A.bH(U.BM,l,m.gb3J(),A.bp(C.aO,l,l,l,l,C.hu,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.die(),y.C)}}
B.aeE.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cc(A.w(A.a([w,C.aN,A.q(x,A.qx(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.el(A.a([A.bH(C.BN,x,new B.dhy(d),x)],u),x,x,C.nQ,v,x,x,x,x,D.h1A,x)}}
B.a0m.prototype={
R(){return new B.aCQ(A.Ai(C.zp,C.oH,C.vT))}}
B.aCQ.prototype={
t(){this.d.t()
this.a3()},
aB9(d){var x,w,v,u,t
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
return A.c6(A.eQ(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h9y,x,x,x,1,x,!0),C.v,A.Ah(this.d,C.c1,this.gaB8()),x,!1,!1,x,x)}}
B.a0t.prototype={
R(){return new B.aCW(A.Ai(C.zp,C.oH,C.vT))},
gd8(){return this.c}}
B.aCW.prototype={
c6S(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aj9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aj9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Nj("text/plain"),$async$aj9)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fHe)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aj9,w)},
adp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hVw(p,!0),$async$adp)
case 3:t=e
p=t==null
s=B.a9k(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fDK)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adp,w)},
t(){this.d.t()
this.a3()},
aB9(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c6S(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aJ(v,v,v,v,F.auf,v,v,v,w.gbVM(),v,v,v,v,"Enter QR share code",v),t=A.aJ(v,v,v,v,F.a5I,v,v,v,w.gcqT(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eQ(A.a([u,t,A.aJ(v,v,v,v,A.V(w.f?C.rx:R.QX,v,v,v,v,v),v,v,v,new B.dii(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hgz,v,v,v,1,v,!0)
u=A.Ah(w.d,C.c1,w.gaB8())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ab,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eQU],s),v),v,!1,!1,v,v)}}
B.biq.prototype={
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
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2Y,A.A(A.a([u,C.bd,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eN,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abO.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Q8.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zm.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Q7.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gk.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cw1.prototype={}
B.Gj.prototype={}
B.abN.prototype={}
B.ax7.prototype={}
B.Zn.prototype={}
var z=a.updateTypes(["az<~>()","P(jW)","o(jW)","WZ(Z)","~()","a0p(Z)","G(G,jW)","Rp(Z)","~(lN)","cr(Gj)","az<jW?>(@)","WX(Z)","X0(Z)","C(jW)","jW(@)","a9<o,@>(jW)","a0o(Z)","WY(Z)","a0q(Z)","a0n(Z)","a0s(Z)","aeE(Z)","ah<jW>()","a0t(Z)","aeG(Z,G)","a0m(Z)","a9<o,aH>(jW)","cr(Zm)","cr(abN)","az<cr>(Gj)"])
B.cvY.prototype={
$1(d){var x=this.a
x.x=D.aUk
x.y.K(0,D.aUk)},
$S:75}
B.cvZ.prototype={
$1(d){var x=this.a
x.x=D.aUj
x.y.K(0,D.aUj)},
$S:75}
B.cw_.prototype={
$1(d){var x=this.a
x.akw(A.a4g(d.data)).bC(new B.cvX(x),y.b)},
$S:75}
B.cvX.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cw0.prototype={
$1(d){},
$S:75}
B.cw3.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.if4(d.channel))},
$S:18}
B.cw4.prototype={
$1(d){},
$S:18}
B.cw5.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.izx(w.iceConnectionState)
x.cx=w
if($.hwH())switch(w.a){case 0:x.cy=D.aUp
break
case 1:x.cy=D.aUq
break
case 3:x.cy=D.aUr
break
case 5:x.cy=D.aUn
break
case 6:x.cy=D.aUo
break
case 7:x.cy=D.abA
break
default:break}},
$S:108}
B.cw6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.izy(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.cw7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iKE(w.signalingState)},
$S:108}
B.cw8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iIJ(w.connectionState)},
$S:108}
B.cw9.prototype={
$1(d){},
$S:108}
B.cwa.prototype={
$1(d){},
$S:18}
B.fHX.prototype={
$1(d){var x=y.F.a(new A.qO([],[]).oi(d.target.result,!1)),w=C.x7.q(x.objectStoreNames,"blobs")
if(!w)C.x4.H0(x,"blobs")},
$S:182}
B.h8v.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xJ.fo(this.b)
$.eY.mT()
this.c.$1(d)},
$S:455}
B.h8x.prototype={
$1(d){return this.a.$1(B.ioE(this.b,this.c))},
$S:33}
B.h8w.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h8u.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h8K.prototype={
$1(d){var x=this
return B.hJa(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h8L.prototype={
$1(d){var x=this
return B.hJa(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fKD.prototype={
$1(d){var x=this
return B.chy(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dhR.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dhO.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chy(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dhQ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chy(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dhP.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chy(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dhT.prototype={
$4(d,e,f,g){var x=null
return A.kj(A.A(A.a([A.aJ(x,x,x,x,D.c_g,x,x,x,new B.dhS(d),x,x,x,x,x,x),A.E(A.G5(D.TB,!0,x,!1,C.a4O,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.TB,x,g,C.apP,0,e,f)},
$C:"$4",
$R:4,
$S:423}
B.dhS.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fMG.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eX,y.m).w,t=this.a,s=t?C.j_:C.c,r=A.n(28),q=A.q(v,D.bCq,C.f,v,v,D.bbe,v,v,v,v,D.apA,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),p,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c3M,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Dq,A.w(A.a([o,C.af,A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),x,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.auv,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fME(d),v),1),C.ar,A.E(A.bH(D.h7Z,v,new B.fMF(p,x,d),A.bp(C.b7,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HP,v,v,v,v),v)},
$S:63}
B.fME.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fMF.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fEU)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aFz(v,x))},
$S:0}
B.fN9.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eX,y.m).w,u=x.a,t=u?C.j_:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bCg,C.f,w,w,D.bcK,w,w,w,w,D.apA,w,w,1/0),new A.C(C.Dq,A.w(A.a([A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),r,w,w,w,w,w,2,B.hsa(u,"Organization name",C.Im,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),q,w,w,w,w,w,2,B.hsa(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),p,w,w,w,w,w,2,B.hsa(u,"Member password",C.Eb,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bH(D.hgG,w,new B.fN8(r,q,p,d),A.bp(C.aA,w,w,w,w,C.hu,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HP,w,w,w,w),w)},
$S:63}
B.fN8.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fEZ)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aIQ(u,x,w))},
$S:0}
B.chp.prototype={
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
return A.b(A.wk(p,null).d9(0,C.a1R),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CH(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.chv.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chw.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.chx.prototype={
$1(d){return d.b},
$S:z+2}
B.chr.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chs.prototype={
$1(d){return d.b},
$S:z+2}
B.chq.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cht.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.chu.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h8I.prototype={
$1(d){return new B.WX(this.a,null)},
$S:z+11}
B.h8J.prototype={
$1(d){return new B.X0(this.a,this.b,this.c,null)},
$S:z+12}
B.e4C.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e5L.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e5M.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e5N.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e5K(x,d))},
$S:2}
B.e5K.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e5O.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5P.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e5Q.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e5R.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e5S.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e5T.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5W.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:91}
B.e5U.prototype={
$1(d){var x=this.a
return x.f?null:x.a0T()},
$S:2}
B.e5V.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aA.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n_(D.TT))s=C.vE
else s=C.a.Y(s,"video/")||d.n_(D.nu)?C.rD:D.asP
x=this.b.a
w=y.p
return new A.C(C.jZ,A.A(A.a([A.q(v,A.V(s,C.aA,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gatn(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e4D.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e4E.prototype={
$0(){return this.a.r=!1},
$S:0}
B.chz.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:96}
B.chA.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:96}
B.h9J.prototype={
$2(d,e){return e===this.a},
$S:286}
B.fET.prototype={
$1(d){return J.k(d)},
$S:15}
B.fKS.prototype={
$1(d){var x=this.b
B.imq(C.Ia.ga8V(this.a)).bC(x.gCM(x),y.H)},
$S:131}
B.fKT.prototype={
$1(d){return this.a.di(0,null)},
$S:131}
B.fKU.prototype={
$0(){return null},
$S:12}
B.chO.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fKV.prototype={
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
B.fPh.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fJ0.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJ1.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.chT.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.nu)},
$S:z+1}
B.he1.prototype={
$1(d){return new B.a0o(this.a,null)},
$S:z+16}
B.dhN.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fL()},
$S:7}
B.dhL.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dhM.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e5J.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a3e()},
$S:10}
B.e56.prototype={
$0(){var x=J.bKq(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e57.prototype={
$0(){var x=J.bKq(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4G.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e4F(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIn(this.c)}},
$S:0}
B.e4F.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4H.prototype={
$0(){var x=J.bKq(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4M.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e4L(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIn(this.c)}},
$S:0}
B.e4L.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5x.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e5y.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e53.prototype={
$1(d){return new B.WY(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e50.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Js(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X1(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uL(),$async$$0)
case 5:s=J.a1(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a3p(s.gI(t)),$async$$0)
case 8:case 7:r.iz(s.gar(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4K.prototype={
$1(d){this.a.aeO(d,"No files selected.","Added")},
$S:455}
B.e5b.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e5a(),A.T(x).k("O<1,o>")))},
$S:0}
B.e5a.prototype={
$1(d){return d.a},
$S:z+2}
B.e4Q.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y9.cr().d44(C.a3L,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.ex(o.a)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.iz("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iz("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asw(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ci(l)){o.iz("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uL(),$async$$0)
case 9:o.iz("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e5u.prototype={
$1(d){return new B.Rp(this.a.a.c,this.b,null)},
$S:z+7}
B.e5v.prototype={
$1(d){return new B.a0q(this.a.a.c,this.b,null)},
$S:z+18}
B.e5w.prototype={
$1(d){return new B.a0n(this.a.a.c,this.b,null)},
$S:z+19}
B.e51.prototype={
$1(d){return new B.Rp(this.a.a.c,this.b,null)},
$S:z+7}
B.e52.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5n.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Js(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9m(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iz("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cxa(),$async$$0)
case 5:x=6
return A.b(p.uL(),$async$$0)
case 6:r=A.T(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e5j(p),r),new B.e5k(),r.k("O<aj.E,o>")).c2(0,new B.e5l())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e5m(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.X7(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5j.prototype={
$1(d){var x=this.a,w=C.d.bn(x.d,new B.e5i(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e5i.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5k.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e5l.prototype={
$1(d){return d.length!==0},
$S:3}
B.e5m.prototype={
$1(d){var x=this.a
return new B.a0s(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e5o.prototype={
$1(d){return d.a},
$S:z+2}
B.e5p.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e5h.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aA.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gatn(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n_(D.nu)?C.tZ:C.ok
p=!x||p.n_(D.nu)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lu,v,v,C.m),C.bm,A.bn(!0,new A.C(C.Dl,A.w(A.a([q,o,t,C.az,B.a0r(!1,u,!1,w,p,new B.e5c(d),v),B.a0r(!1,u,!1,C.jI,"Share via QR",new B.e5d(d),"Letters/numbers QR code"),B.a0r(!1,u,!1,D.a4T,"Send to their Code",new B.e5e(d),"Enter someone else's personal code"),B.a0r(!1,u,!1,C.hP,"Download / save",new B.e5f(d),v),C.aj,B.a0r(!1,u,!0,C.es,"Delete",new B.e5g(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:749}
B.e5c.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e5d.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e5e.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e5f.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e5g.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e4N.prototype={
$1(d){return d.a},
$S:z+2}
B.e4O.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e4P.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9o(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HN(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pW(s.c,s.f),$async$$0)
case 4:u.iz(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4J.prototype={
$1(d){var x=this.a
x.uM(new B.e4I(x,d,this.b),"Preparing\u2026")},
$S:455}
B.e4I.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iz("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X1(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.iz("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bJk(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iz("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e54.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e55.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aN(v.c.a),r=v.b,q=v.a
case 2:if(!s.B()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hmG(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4Z.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HL(new B.e4V(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iz("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e4W(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e4X(s))
case 5:x=8
return A.b(r.b.il(0,C.HK,new B.e4Y()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.iz("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uL(),$async$$0)
case 9:s.iz("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4V.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e4S(x,d,e))},
$S:191}
B.e4S.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e4W.prototype={
$1(d){return new B.aeE(this.a.a,null)},
$S:z+21}
B.e4X.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e4Y.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e5_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JO(o)!=null?3:4
break
case 3:x=5
return A.b(B.a9c(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b67(B.JO(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asw(new B.e4T(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.hmF(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iz(q)
x=1
break}x=10
return A.b(s.uL(),$async$$0)
case 10:o=J.cK(r)
p=o.eW(r,new B.e4U()).gI(0)
s.iz(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4T.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e4R(x,d,e))},
$S:191}
B.e4R.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e4U.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.nu)},
$S:z+1}
B.e59.prototype={
$1(d){return new B.a0t(this.a.a.c,null)},
$S:z+23}
B.e58.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3z(u.a.c,v.b),$async$$0)
case 2:t.iz(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5t.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.aA.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lu,x,x,C.m),C.bm,A.bn(!0,new A.C(C.Dl,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.a0r(!0,w,!1,C.mC,"My Code",new B.e5q(d),"Your personal code & QR \u2014 others send docs to you"),B.a0r(!1,w,!1,D.a4T,"Send to their Code",new B.e5r(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0r(!1,w,!1,W.Ap,"Import backup",new B.e5s(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:749}
B.e5q.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e5r.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bJH()},
$S:0}
B.e5s.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e5G.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JY(D.TB,x,C.a4O,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.TB).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:726}
B.e5E.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e5F.prototype={
$0(){this.a.alu()
return null},
$S:0}
B.e5H.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:91}
B.e5I.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeG(e,w,v,this.b,x.e,x.cfE(w),new B.e5A(x,w),new B.e5B(x,v,w),new B.e5C(x,w),new B.e5D(x,w),null)},
$S:z+24}
B.e5A.prototype={
$0(){this.a.aiG(this.b)
return null},
$S:0}
B.e5B.prototype={
$0(){var x=this.a
return x.l(new B.e5z(x,this.b,this.c))},
$S:0}
B.e5z.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5C.prototype={
$0(){this.a.Px(this.b)
return null},
$S:0}
B.e5D.prototype={
$0(){this.a.alf(this.b)
return null},
$S:0}
B.dhJ.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:91}
B.dhK.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:111}
B.di6.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:91}
B.di5.prototype={
$1(d){return this.a.y.$0()},
$S:89}
B.di2.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.di3.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.di4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.di0.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h9(w,C.z,x,new B.dhZ(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.di_(this.a))
return C.bK},
$S:151}
B.dhZ.prototype={
$3(d,e,f){$.aS.U$.push(new B.dhX(this.a))
return C.bK},
$S:206}
B.dhX.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhU(x))},
$S:7}
B.dhU.prototype={
$0(){return this.a.w=!0},
$S:0}
B.di_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhW(x))},
$S:7}
B.dhW.prototype={
$0(){return this.a.w=!0},
$S:0}
B.di1.prototype={
$3(d,e,f){$.aS.U$.push(new B.dhY(this.a))
return C.bK},
$S:206}
B.dhY.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhV(x))},
$S:7}
B.dhV.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dhG.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhF(x,d))},
$S:1830}
B.dhF.prototype={
$0(){return this.a.f=this.b===C.wg},
$S:0}
B.dhH.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhE(x,d))},
$S:7}
B.dhE.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dhI.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhD(x,d))},
$S:7}
B.dhD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dhz.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dhA.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dhB.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dhC.prototype={
$1(d){return this.a.d.Or(0,A.dw(0,0,0,C.h.S(d),0,0))},
$S:6}
B.dij.prototype={
$0(){var x=this.a.a
return B.tf(x.c,x.d)},
$S:1831}
B.dik.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dil.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dim.prototype={
$0(){return this.a.f=!1},
$S:0}
B.din.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dio.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.diq.prototype={
$0(){var x=this.a
x.l(new B.dip(x))},
$S:0}
B.dip.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hq(0)
else x.qG(0)},
$S:0}
B.dif.prototype={
$1(d){return this.a.Sv(this.b)},
$S:10}
B.dig.prototype={
$1(d){return this.a.Su(this.b)},
$S:10}
B.di7.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.di8.prototype={
$0(){return this.a.r=!0},
$S:0}
B.di9.prototype={
$1(d){return D.hSP},
$S:z+25}
B.die.prototype={
$2(d,e){if(d)B.X7()},
$S:136}
B.dia.prototype={
$0(){return this.a.acA(this.b)},
$S:0}
B.dib.prototype={
$0(){return this.a.acx(this.b)},
$S:0}
B.dic.prototype={
$0(){return this.a.ah3(this.b)},
$S:0}
B.did.prototype={
$0(){return this.a.a42(this.b)},
$S:0}
B.dhy.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.dii.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qK(),$async$$0)
case 2:u.l(new B.dih(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dih.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.chV.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.nu)},
$S:z+1}
B.chW.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aD(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.chU.prototype={
$2(d,e){return this.bq3(d,e)},
bq3(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.X8(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1832}
B.fOT.prototype={
$1(d){if(d===D.abz&&(this.a.a.a&30)===0)this.a.h6(0)},
$S:z+27}
B.fOU.prototype={
$0(){},
$S:12}
B.fPv.prototype={
brI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fBU(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hEc(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.brI(d,e)},
$S:560}
B.fPu.prototype={
$1(d){var x=this
d.b=new B.fPt(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fPt.prototype={
$1(d){return this.brH(d)},
brH(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b3A(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.T.aN(0,n,null)
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
return A.b(B.fBU(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a9l(m),$async$$1)
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
x(v=B.aCT.prototype,"gcnC","S5",0)
x(v,"gcox","KH",0)
x(v,"gco1","zd",0)
x(v=B.aGY.prototype,"gcfy","ah1",0)
x(v,"gcfz","a0S",0)
x(v,"gcDR","akX",0)
x(v=B.aH0.prototype,"gcfA","a0T",0)
x(v,"gcDS","a4q",0)
x(B.aGZ.prototype,"gcfB","ah2",0)
x(B.aCS.prototype,"gcfG","cfH",4)
x(v=B.aH_.prototype,"gco2","a2e",0)
x(v,"gcCl","cCm",4)
x(v,"gb7d","aCL",0)
x(v,"gcFm","aln",0)
x(v,"gbWi","ZA",0)
x(v,"gcfF","Ft",0)
x(B.aCU.prototype,"gbb3","a4p",0)
x(B.aCR.prototype,"gcfI","a0U",0)
x(v=B.aCX.prototype,"gb5V","cma",4)
x(v,"gcfC","ah5",0)
x(v=B.aCV.prototype,"gcBf","a48",0)
x(v,"gb3J","ah4",0)
w(B.aCQ.prototype,"gaB8","aB9",8)
x(v=B.aCW.prototype,"gcqT","aj9",0)
x(v,"gbVM","adp",0)
w(v,"gaB8","aB9",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aH,[B.cw1,B.abN,B.ax7,B.aFz,B.aIQ,B.jW,B.aem,B.bAZ,B.Gj,B.Zn])
w(B.cw2,B.cw1)
w(B.b8L,B.abN)
x(A.hq,[B.cvY,B.cvZ,B.cw_,B.cvX,B.cw0,B.cw3,B.cw4,B.cw5,B.cw6,B.cw7,B.cw8,B.cw9,B.cwa,B.fHX,B.h8v,B.h8x,B.h8w,B.h8K,B.h8L,B.fKD,B.dhO,B.dhQ,B.dhP,B.dhT,B.fMG,B.fN9,B.chp,B.chw,B.chx,B.chs,B.chq,B.cht,B.chu,B.h8I,B.h8J,B.e5N,B.e5W,B.e5U,B.e5V,B.fET,B.fKS,B.fKT,B.chO,B.fKV,B.fPh,B.fJ0,B.fJ1,B.chT,B.he1,B.dhN,B.dhL,B.e5J,B.e4F,B.e4L,B.e53,B.e4K,B.e5a,B.e5u,B.e5v,B.e5w,B.e51,B.e5j,B.e5i,B.e5k,B.e5l,B.e5m,B.e5o,B.e5p,B.e5h,B.e4N,B.e4O,B.e4J,B.e54,B.e4W,B.e4U,B.e59,B.e5t,B.e5G,B.e5H,B.dhJ,B.dhK,B.di6,B.di5,B.di0,B.dhZ,B.dhX,B.di_,B.di1,B.dhY,B.dhG,B.dhH,B.dhI,B.dhC,B.dif,B.dig,B.di9,B.chV,B.chW,B.fOT,B.fPu,B.fPt])
w(B.b8M,B.ax7)
x(A.j0,[B.h8u,B.dhR,B.dhS,B.fME,B.fMF,B.fN8,B.e4C,B.e5L,B.e5M,B.e5K,B.e5O,B.e5P,B.e5Q,B.e5R,B.e5S,B.e5T,B.e4D,B.e4E,B.fKU,B.dhM,B.e56,B.e57,B.e4G,B.e4H,B.e4M,B.e5x,B.e5y,B.e50,B.e5b,B.e4Q,B.e52,B.e5n,B.e5c,B.e5d,B.e5e,B.e5f,B.e5g,B.e4P,B.e4I,B.e55,B.e4Z,B.e4S,B.e4X,B.e4Y,B.e5_,B.e4R,B.e58,B.e5q,B.e5r,B.e5s,B.e5E,B.e5F,B.e5A,B.e5B,B.e5z,B.e5C,B.e5D,B.di2,B.di3,B.di4,B.dhU,B.dhW,B.dhV,B.dhF,B.dhE,B.dhD,B.dhz,B.dhA,B.dhB,B.dij,B.dik,B.dil,B.dim,B.din,B.dio,B.diq,B.dip,B.di7,B.di8,B.dia,B.dib,B.dic,B.did,B.dhy,B.dii,B.dih,B.fOU])
x(A.ln,[B.aeF,B.OX,B.abO,B.Q8,B.Zm,B.Q7,B.Gk])
x(A.af,[B.a0p,B.WX,B.X0,B.WY,B.a0o,B.WZ,B.a0q,B.a0n,B.Rp,B.a0s,B.a0m,B.a0t])
x(A.ai,[B.aCT,B.aGY,B.aH0,B.aGZ,B.aCS,B.aH_,B.aCU,B.aCR,B.aCX,B.aCV,B.aCQ,B.aCW])
x(A.aw,[B.af8,B.aCP,B.bip,B.aeG,B.aeE,B.biq])
x(A.j1,[B.chv,B.chr,B.chz,B.chA,B.h9J,B.e4V,B.e4T,B.e5I,B.die,B.chU,B.fPv])
x(A.jr,[B.bnV,B.bAB])})()
A.jj(b.typeUniverse,JSON.parse('{"b8L":{"abN":[]},"b8M":{"ax7":[]},"a0p":{"af":[],"x":[]},"aCT":{"ai":["a0p"]},"af8":{"aw":[],"x":[]},"WX":{"af":[],"x":[]},"X0":{"af":[],"x":[]},"aGY":{"ai":["WX"]},"aH0":{"ai":["X0"]},"bnV":{"jr":[]},"WY":{"af":[],"x":[]},"aGZ":{"ai":["WY"]},"a0o":{"af":[],"x":[]},"WZ":{"af":[],"x":[]},"aeG":{"aw":[],"x":[]},"a0q":{"af":[],"x":[]},"a0n":{"af":[],"x":[]},"Rp":{"af":[],"x":[]},"a0s":{"af":[],"x":[]},"aeE":{"aw":[],"x":[]},"a0m":{"af":[],"x":[]},"a0t":{"af":[],"x":[]},"aCS":{"ai":["a0o"]},"bAB":{"jr":[]},"aH_":{"ai":["WZ"]},"aCP":{"aw":[],"x":[]},"bip":{"aw":[],"x":[]},"aCU":{"ai":["a0q"]},"aCR":{"ai":["a0n"]},"aCX":{"ai":["Rp"]},"aCV":{"ai":["a0s"]},"aCQ":{"ai":["a0m"]},"aCW":{"ai":["a0t"]},"biq":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n0"),k:x("Nh()"),o:x("bl<o,o>"),F:x("rR"),g:x("az<jW?>"),x:x("az<~>"),V:x("N<ac>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jW>"),w:x("N<+file,name(ml,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jr>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<G>"),G:x("bm"),A:x("cB<ai<af>>"),n:x("ah<jW>"),j:x("ah<@>"),I:x("ah<G>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("ip"),e:x("iOJ"),af:x("Fw"),U:x("jW"),b:x("cr"),C:x("aH"),aK:x("x3"),ab:x("Gj"),br:x("ax7"),v:x("Zn"),N:x("o"),X:x("bq<H>"),Q:x("mx"),D:x("dG"),aw:x("bb<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cb<ah<jW>>"),aW:x("cb<dG?>"),aY:x("cb<~>"),cx:x("aeF"),b1:x("bo<ah<jW>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFz"),bG:x("aIQ"),q:x("l5"),B:x("q9<Gj>"),c6:x("q9<abO>"),y:x("P"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bm?"),_:x("ah<jW>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jW?"),R:x("aH?"),c:x("Zn?"),d:x("+answerQr,transfer(o,az<ah<jW>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,G)?"),L:x("+fileCount,mode,qrPayload(G,OX,o)?"),aX:x("+fileCount,qrPayload,token(G,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aem?"),bk:x("aFz?"),ag:x("aIQ?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b9D=new A.ax(C.aA,2,C.r,-1)
D.cdL=new A.a6(C.a5,C.a9,C.w,C.a6R,null,null)
D.bbe=new A.p(null,null,null,C.n0,null,D.cdL,C.m)
D.bcK=new A.p(null,null,null,C.n0,null,E.J7,C.m)
D.aie=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajL=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akO=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amE=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h2w=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hhF=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FR,null,null,null,null,null,null,null,null,null)
D.dts=x([D.h2w,C.aj,D.hhF],y.p)
D.bC6=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dts,null)
D.hmh=new A.D("Create your organization",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h79=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FR,null,null,null,null,null,null,null,null,null)
D.dMd=x([D.hmh,C.aj,D.h79],y.p)
D.bCg=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dMd,null)
D.hij=new A.D("Team Member sign-in",null,C.fT,null,null,null,null,null,null,null,null,null)
D.hba=new A.D("Enter the access code and password from your organization.",null,H.FR,null,null,null,null,null,null,null,null,null)
D.dJH=x([D.hij,C.aj,D.hba],y.p)
D.bCq=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dJH,null)
D.bIH=new A.R(16,10,16,28)
D.bK4=new A.R(20,0,20,16)
D.bKB=new A.R(20,8,20,16)
D.apA=new A.R(24,22,24,20)
D.a4T=new A.a_(63394,"MaterialIcons",!1)
D.asP=new A.a_(63515,"MaterialIcons",!1)
D.bY8=new A.a_(983813,"MaterialIcons",!1)
D.bVe=new A.a_(62867,"MaterialIcons",!1)
D.bZ9=new A.ae(D.bVe,44,C.c,null,null,null)
D.c_g=new A.ae(C.ko,null,C.ac,null,null,null)
D.c0F=new A.ae(C.jJ,18,null,null,null,null)
D.c2y=new A.ae(D.a4T,26,C.c,null,null,null)
D.c3a=new A.ae(C.E2,null,null,null,null,null)
D.c3M=new A.ae(C.E8,null,null,null,null,null)
D.c5_=new A.ae(A_.a52,null,null,null,null,null)
D.c5m=new A.ae(C.i5,16,null,null,null,null)
D.c95=new A.ae(C.tY,16,null,null,null,null)
D.bZr=new A.ae(C.mC,null,null,null,null,null)
D.c9Y=new A.ed(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZr,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4k=new A.ae(C.Im,null,null,null,null,null)
D.ca2=new A.ed(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c4k,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZO=new A.ae(C.Eb,null,null,null,null,null)
D.cad=new A.ed(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.d_r=x([C.fz,C.b7,C.aA],y.O)
D.cfJ=new A.a6(C.aw,C.aD,C.w,D.d_r,null,null)
D.cZM=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.TB=x([C.fz,C.aA],y.O)
D.TT=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nu=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dDi=x([C.nb,C.aA],y.O)
D.eCX={iceServers:0}
D.aON={urls:0}
D.dQa=new A.bl(D.aON,["stun:stun.l.google.com:19302"],y.o)
D.dQ9=new A.bl(D.aON,["stun:stun1.l.google.com:19302"],y.o)
D.dhK=x([D.dQa,D.dQ9],A.as("N<a9<o,o>>"))
D.dPf=new A.bl(D.eCX,[D.dhK],A.as("bl<o,@>"))
D.Kg=new B.OX(0,"lanDirect")
D.Vh=new B.OX(1,"cloudStash")
D.e5Z=new B.OX(2,"inlineInstant")
D.Vi=new B.OX(3,"webrtcLink")
D.B9=new B.OX(4,"videoCloud")
D.hhE=new A.D("Receive file",null,C.nH,null,null,null,null,null,null,null,null,null)
D.cPg=x([E.auE,C.aa,D.hhE],y.p)
D.fvl=new A.c_(C.aJ,C.bc,C.i,C.l,null,C.p,null,0,D.cPg,null)
D.eKy=new A.C(C.cq,D.fvl,null)
D.fTJ=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.JD,null,null,null)
D.h39=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fTJ,null,C.K,null,null,null,null,null,null,null)
D.eJG=new A.C(C.zH,D.h39,null)
D.bhk=new A.cp(C.z,null,null,D.eJG,null)
D.eQU=new A.cR(0,null,0,28,null,null,D.bhk,null)
D.eRd=new B.abO(0,"RTCDataChannelConnecting")
D.aUj=new B.abO(1,"RTCDataChannelOpen")
D.aUk=new B.abO(3,"RTCDataChannelClosed")
D.eRe=new B.Gk(0,"RTCIceConnectionStateNew")
D.eRf=new B.Gk(1,"RTCIceConnectionStateChecking")
D.eRg=new B.Gk(2,"RTCIceConnectionStateCompleted")
D.eRh=new B.Gk(3,"RTCIceConnectionStateConnected")
D.eRi=new B.Gk(4,"RTCIceConnectionStateCount")
D.eRj=new B.Gk(5,"RTCIceConnectionStateFailed")
D.eRk=new B.Gk(6,"RTCIceConnectionStateDisconnected")
D.aUl=new B.Gk(7,"RTCIceConnectionStateClosed")
D.aUm=new B.Zm(0,"RTCIceGatheringStateNew")
D.eRl=new B.Zm(1,"RTCIceGatheringStateGathering")
D.abz=new B.Zm(2,"RTCIceGatheringStateComplete")
D.abA=new B.Q7(0,"RTCPeerConnectionStateClosed")
D.aUn=new B.Q7(1,"RTCPeerConnectionStateFailed")
D.aUo=new B.Q7(2,"RTCPeerConnectionStateDisconnected")
D.aUp=new B.Q7(3,"RTCPeerConnectionStateNew")
D.aUq=new B.Q7(4,"RTCPeerConnectionStateConnecting")
D.aUr=new B.Q7(5,"RTCPeerConnectionStateConnected")
D.eRm=new B.Q8(0,"RTCSignalingStateStable")
D.eRn=new B.Q8(1,"RTCSignalingStateHaveLocalOffer")
D.eRo=new B.Q8(2,"RTCSignalingStateHaveRemoteOffer")
D.eRp=new B.Q8(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eRq=new B.Q8(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aUs=new B.Q8(5,"RTCSignalingStateClosed")
D.fAv=new A.av(160,48)
D.biB=new A.fp(2,null,null,null,null,C.aA,null,null,null,null)
D.fC3=new A.a4(16,16,D.biB,null)
D.h6u=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new A.b3(D.h6u,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hef=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fDD=new A.b3(D.hef,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hnl=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fDK=new A.b3(D.hnl,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h63=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fE9=new A.b3(D.h63,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hiv=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aXF=new A.b3(D.hiv,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hk0=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fED=new A.b3(D.hk0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoS=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fEU=new A.b3(D.hoS,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hmL=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fEZ=new A.b3(D.hmL,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.ho1=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fFM=new A.b3(D.ho1,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4D=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fGj=new A.b3(D.h4D,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgb=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fGE=new A.b3(D.hgb,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h8Q=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fHa=new A.b3(D.h8Q,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoX=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fHe=new A.b3(D.hoX,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4T=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fHk=new A.b3(D.h4T,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h3w=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fHz=new A.b3(D.h3w,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h08=new A.D("NGMY DOC SHARE",null,C.aZ8,null,null,null,null,null,null,null,null,null)
D.h1A=new A.D("Show this to sender",null,C.iY,null,null,null,null,null,null,null,null,null)
D.h2E=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h7B=new A.D("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h7Z=new A.D("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.h90=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h9y=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcr=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hfi=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.hfC=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hfY=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hgz=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hgG=new A.D("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hh4=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hkx=new A.D("Share files & videos\nwith a scan.",null,C.aZb,null,null,null,null,null,null,null,null,null)
D.hkR=new A.D("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hSP=new B.a0m(null)
D.aeZ=new B.aeF(0,"docShare")
D.af_=new B.aeF(1,"gate")
D.Yl=new B.aeF(2,"gateNoIndividual")})();(function staticFields(){$.aRO=null
$.fzm=function(){var x=y.N
return A.S(x,x)}()
$.HA=A.S(y.N,y.D)
$.aiP=A.S(y.N,A.as("ml"))
$.SQ=A.S(y.N,y.D)
$.fA3=A.S(y.N,A.as("aem"))
$.chN=A.S(y.S,A.as("bAZ"))
$.hEb=1
$.iv4=null
$.iv3=null
$.ilH=null
$.hsn=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iPe","hXy",()=>new B.cw2())
x($,"iN7","hwH",()=>C.a.q(A.by(A.by(A.by(A.I5(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["MEXt0iFqKYqlFDxZng8cZNDYS0o="]=a.current})($__dart_deferred_initializers__);