((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={cti:function cti(){},
i2F(d){var x=null,w=new B.b6V(d,D.eFS,new A.pU(x,x,y.c6),new A.pU(x,x,y.B))
w.bCY(d)
return w},
b6V:function b6V(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ctd:function ctd(d){this.a=d},
cte:function cte(d){this.a=d},
ctf:function ctf(d){this.a=d},
ctc:function ctc(d){this.a=d},
ctg:function ctg(d){this.a=d},
i2G(d,e){var x=y.N
x=new B.b6W(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCZ(d,e)
return x},
b6W:function b6W(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ctj:function ctj(d){this.a=d},
ctk:function ctk(d){this.a=d},
ctl:function ctl(d){this.a=d},
ctm:function ctm(d){this.a=d},
ctn:function ctn(d){this.a=d},
cto:function cto(d){this.a=d},
ctp:function ctp(d){this.a=d},
ctq:function ctq(d){this.a=d},
hgQ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.x9.H0(x,"ngmy_doc_share_v1",new B.fyY(),1)},
i9l(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.er(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.wS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cH.aK(d)
return x}catch(w){return v}return v},
Sp(d,e){return B.ioW(d,e)},
ioW(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQg
x=7
return A.b(o==null?$.aQg=B.hgQ():o,$async$Sp)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mh(s,"blobs","readwrite")
C.iE.mi(J.mg(q,"blobs"),r,d)
x=8
return A.b(J.oz(q),$async$Sp)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
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
return A.i($async$Sp,w)},
So(d){return B.ioV(d)},
ioV(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$So=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQg
x=7
return A.b(o==null?$.aQg=B.hgQ():o,$async$So)
case 7:s=f
r=J.mh(s,"blobs","readonly")
x=8
return A.b(C.iE.xS(J.mg(r,"blobs"),d),$async$So)
case 8:q=f
x=9
return A.b(J.oz(r),$async$So)
case 9:o=B.i9l(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
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
return A.i($async$So,w)},
aim(d){return B.ioU(d)},
ioU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aim=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQg
x=7
return A.b(p==null?$.aQg=B.hgQ():p,$async$aim)
case 7:s=f
r=J.mh(s,"blobs","readwrite")
C.iE.Gv(J.mg(r,"blobs"),d)
x=8
return A.b(J.oz(r),$async$aim)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aim,w)},
fyY:function fyY(){},
ibO(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brK(w,v))}return u},
hIw(d,e){var x,w={},v=A.aYX("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fYJ(w,v,e)
C.xb.zg(v,"change",new B.fYL(w,v,!1))
C.xb.zg(v,"cancel",new B.fYK(w))
$.eX.mK()
v.click()
A.bO(C.amg,new B.fYI(w),y.H)},
fYJ:function fYJ(d,e,f){this.a=d
this.b=e
this.c=f},
fYL:function fYL(d,e,f){this.a=d
this.b=e
this.c=f},
fYK:function fYK(d){this.a=d},
fYI:function fYI(d){this.a=d},
DL(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DL=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUQ()?3:4
break
case 3:x=5
return A.b(B.hD8(e,d,s,!0,!1,f,g,h,!1,i),$async$DL)
case 5:x=1
break
case 4:x=6
return A.b(B.S0(d,s,f,g,h,i),$async$DL)
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
return A.b(B.Jq(s,d),$async$DL)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fuj(s,d),$async$DL)
case 14:x=12
return A.b(r.hD8(q,p,o,n,m,l,k,j,a1,i),$async$DL)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ee(new B.fYY(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ee(new B.fYZ(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DL,w)},
S0(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S0=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1G(e),$async$S0)
case 3:u=k
x=4
return A.b(B.ar7(d,e,!1),$async$S0)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jq(e,d),$async$S0)
case 7:if(k){v=D.adM
x=1
break}x=8
return A.b(B.Wk(e),$async$S0)
case 8:v=t?D.Xb:D.adN
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1E(d,e)){v=D.adM
x=1
break}x=11
return A.b(B.Wk(e),$async$S0)
case 11:v=t?D.Xb:D.adN
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hbF(d,e)){v=D.adM
x=1
break}x=14
return A.b(B.Wk(e),$async$S0)
case 14:v=D.Xb
x=1
break
case 13:v=t?D.Xb:D.adN
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
fuj(d,e){var x=0,w=A.j(y.y),v
var $async$fuj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1E(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1G(d),$async$fuj)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuj,w)},
hD8(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ee(new B.fBD(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hxW(d,e,f,g,h,i,j){return new B.a_A(e,j,d,g,h,i,f,null)},
fDx(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fDx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDA(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fDx)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDx,w)},
fE1(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fE1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
r=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fE3(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fE1)
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
return A.i($async$fE1,w)},
hh2(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fQV(d,e){var x=0,w=A.j(y.H),v
var $async$fQV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wk(e),$async$fQV)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eb()
case 1:return A.h(v,w)}})
return A.i($async$fQV,w)},
fYY:function fYY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYZ:function fYZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adB:function adB(d,e){this.a=d
this.b=e},
fBD:function fBD(d,e,f,g,h,i,j,k,l){var _=this
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
aBB:function aBB(){this.c=this.a=this.d=null},
ddZ:function ddZ(d,e){this.a=d
this.b=e},
ddW:function ddW(d){this.a=d},
ddY:function ddY(d){this.a=d},
ddX:function ddX(d){this.a=d},
de0:function de0(){},
de_:function de_(d){this.a=d},
ae4:function ae4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEf:function aEf(d,e){this.a=d
this.b=e},
aHq:function aHq(d,e,f){this.a=d
this.b=e
this.c=f},
fDA:function fDA(d,e,f){this.a=d
this.b=e
this.c=f},
fDy:function fDy(d){this.a=d},
fDz:function fDz(d,e,f){this.a=d
this.b=e
this.c=f},
fE3:function fE3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fE2:function fE2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceV(d,e,f,g,h){return B.hYu(d,e,f,g,h)},
hYu(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ceV=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.ib(r.dO(d,new B.ceW(s,e,h,g,f,q),y.g),y.l),$async$ceV)
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
return A.i($async$ceV,w)},
b1B(d,e,f,g,h){return B.hYv(d,e,f,g,h)},
hYv(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1B=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awG("GET",d)
o=A.h84()
if(o==null)o=new A.MM(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.H5),$async$b1B)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D4(),$async$b1B)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ch(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
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
return A.i($async$b1B,w)},
b1A(d){return B.hYs(d)},
hYs(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.ov),$async$b1A)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.mb(A.m8(p.e)).cD(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
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
return A.i($async$b1A,w)},
ceU(d){return B.hYt(d)},
hYt(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ceU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.qE),$async$ceU)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mb(A.m8(q.e)).cD(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
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
return A.i($async$ceU,w)},
ceW:function ceW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jD:function jD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jo(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hYA(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jo(C.a.b_(t,u.length))}return null},
hYB(d){var x=B.Jo(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hYw(){var x,w=$.ow(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8c(d){return B.hYx(d)},
hYx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8c)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
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
return A.i($async$a8c,w)},
a8d(d,e){return B.hYy(d,e)},
hYy(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8d=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hP(d,e,!1,!1,C.cQ,null),$async$a8d)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
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
return A.i($async$a8d,w)},
Cg(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cg)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jo(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8e(r),$async$Cg)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8c("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cg)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jo(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cg)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hYw()
x=14
return A.b(B.a8e(m),$async$Cg)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8d("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cg)
case 15:k=f
x=16
return A.b(B.a8d("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cg)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cg)
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
return A.i($async$Cg,w)},
a8e(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jo(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8c("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8e)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
a8f(d,e,f,g){return B.hYC(d,e,f,g)},
hYC(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8f=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jo(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8e(r),$async$a8f)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cB(d,0,new B.cf1())>1048576||g.aU(d,new B.cf2())){v=B.Fl(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8q("myCode",d,a0),$async$a8f)
case 4:u=a3
try{t=C.W.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fl(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1J(u,g.gJ(d),a0),$async$a8f)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ow().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dO(d,new B.cf3(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1C(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8f)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
Fl(d,e,f,g,h){return B.hYz(d,e,f,g,h)},
hYz(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fl=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cB(a6,0,new B.ceY())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ow().aw(9999)
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
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Js(a9,q)
a0=new A.Lg(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fl)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pp(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abQ(a1.a,a4,"media",a1.d,a2).xP(m,n,new A.EA(!0,q.c)),$async$Fl)
case 12:J.c4(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fl)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSV(r),$async$Fl)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dO(a6,new B.ceZ(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1C(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fl)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSV(r),$async$Fl)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fl,w)},
b1C(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8c(t),$async$b1C)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.ceX(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8d(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1C,w)},
On(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$On=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8c("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$On)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
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
return A.b(B.b1D(k,a0),$async$On)
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
return A.b(B.b1I(h),$async$On)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wr(g,a0),$async$On)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cf_(),q),n)
d=A.C(new A.Y(r,new B.cf0(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cW(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8d("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$On)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$On,w)},
b1D(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1D=A.e(function(f,g){if(f===1)return A.f(g,w)
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
o=A.aI(o.h(p,"partCount"))
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.isZ(k,j)
C.d.u(s,i)
x=5
return A.b(B.DJ(l,m,"Received via My Code",t,e,i),$async$b1D)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSV(s),$async$b1D)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1D,w)},
cf1:function cf1(){},
cf2:function cf2(){},
cf3:function cf3(){},
ceY:function ceY(){},
ceZ:function ceZ(){},
ceX:function ceX(){},
cf_:function cf_(){},
cf0:function cf0(){},
fYV(d,e){var x=0,w=A.j(y.H)
var $async$fYV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ee(new B.fYW(e),!1,null,y.H)),$async$fYV)
case 2:return A.h(null,w)}})
return A.i($async$fYV,w)},
bGV(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ee(new B.fYX(g,e,f),!1,null,y.y)),$async$bGV)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGV,w)},
fYW:function fYW(d){this.a=d},
fYX:function fYX(d,e,f){this.a=d
this.b=e
this.c=f},
Wh:function Wh(d,e){this.c=d
this.a=e},
aFC:function aFC(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e_N:function e_N(d,e){this.a=d
this.b=e},
Wl:function Wl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFF:function aFF(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e0W:function e0W(d){this.a=d},
e0X:function e0X(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(d){this.a=d},
e10:function e10(d,e){this.a=d
this.b=e},
e11:function e11(d,e){this.a=d
this.b=e},
e12:function e12(d,e){this.a=d
this.b=e},
e13:function e13(d){this.a=d},
e16:function e16(){},
e14:function e14(d){this.a=d},
e15:function e15(d,e){this.a=d
this.b=e},
blR:function blR(){},
Wi:function Wi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFD:function aFD(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e_O:function e_O(d){this.a=d},
e_P:function e_P(d){this.a=d},
hbG(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hYE(d){var x=d.l5
if(x>=0)return x
return 4.99},
hYD(d){var x=d.lL,w=y.N
w=x.jp(x,new B.cf5(),w,w)
return w},
hsV(d){var x=d.kI,w=y.N
w=x.jp(x,new B.cf6(),w,w)
return w},
b1G(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b1G)
case 7:s=f
r=A.w(p)
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
return A.i($async$b1G,w)},
a8h(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8h)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a8h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
Wk(d){var x=0,w=A.j(y.H),v,u
var $async$Wk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wk)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
hbF(d,e){var x,w,v
if(B.hYE(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hYD(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1E(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hsV(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
hsW(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hsV(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cb(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dx(f,0,0,0,0,0).a).aa().ag())
d.kI=w},
ar8(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ar8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$ar8)
case 7:s=f
r=A.w(p)
r=A.eq(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$ar8,w)},
ar9(d){var x=0,w=A.j(y.H),v,u,t
var $async$ar9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ar8(d),$async$ar9)
case 3:u=f
x=5
return A.b(A.az(),$async$ar9)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$ar9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ar9,w)},
ar7(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ar7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hbG(d)
if(u<=0){v=!1
x=1
break}if(B.hbF(d,e)){v=!1
x=1
break}x=3
return A.b(B.ar8(e),$async$ar7)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar7,w)},
b1F(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jq(e,d),$async$b1F)
case 3:if(g){v=-1
x=1
break}u=B.hbG(d)
if(u<=0){v=-1
x=1
break}if(B.hbF(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ar8(e),$async$b1F)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1F,w)},
cf8(d,e,f){var x=0,w=A.j(y.y),v
var $async$cf8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jq(e,d),$async$cf8)
case 3:if(h){v=!1
x=1
break}v=B.ar7(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf8,w)},
cf7(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cf7=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cf8(d,u,i.gUQ()),$async$cf7)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf7,w)},
a8g(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8g=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUQ()){v=!0
x=1
break}if(B.b1E(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.Ut),$async$a8g)
case 5:x=k?3:4
break
case 3:B.hsW(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8g)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Ut,"Doc Share for Organizations"),$async$a8g)
case 7:if(!k){v=!1
x=1
break}B.hsW(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8g)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
cf5:function cf5(){},
cf6:function cf6(){},
fZV(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fZV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fZV)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fqB.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hR([r],e.c))
s.toString
$.fqB.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZV,w)},
iv7(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fqB.bq($.fqB,new B.fZX(d))},
fZX:function fZX(d){this.a=d},
fsd(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fsd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],f))
s.toString
u=A.n_(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$fsd)
case 3:C.Bw.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsd,w)},
ahg(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.frh.n(0,d,new B.adi(A.br(e,!0,v)))
x=3
return A.b(A.az(),$async$ahg)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahg)
case 2:return A.h(null,w)}})
return A.i($async$ahg,w)},
aha(d){return B.idI(d)},
idI(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aha=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.frh.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aha)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fw_(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.adi(r)
$.frh.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aha,w)},
RR(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sp(d,u),$async$RR)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RR,w)},
aQB(d){return B.idG(d)},
idG(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.So(d),$async$aQB)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQB)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cH.aK(r)
x=!J.ct(q)?9:10
break
case 9:B.RR(d,q)
x=11
return A.b(J.h6(s,d),$async$aQB)
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
i9N(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cd(J.er(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cd(A.wS(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
return A.f3(null,y.K)},
a35(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a35=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bF,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fBP(r,t),!1,s)
A.fB(r,"error",new B.fBQ(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iL(0,C.Ol,new B.fBR())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a35,w)},
aQV(d,e,f){return B.ig5(d,e,f)},
ig5(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
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
return A.b(B.Sp(o,p),$async$aQV)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahg(k,j,s),$async$aQV)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQV,w)},
aQU(d,e,f){return B.ig4(d,e,f)},
ig4(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
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
break}$.H6.n(0,s,r)
$.S9.n(0,s,r)
x=11
return A.b(B.RR(s,r),$async$aQU)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQU,w)},
Ch(d,e,f,g,h,i){return B.hYN(d,e,f,g,h,i)},
hYN(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ch=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1M(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RR(s,d),$async$Ch)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Ch)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cK.gco().aK(d)),$async$Ch)
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
return A.b(B.Bb(e),$async$Ch)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.Hg(e,j),$async$Ch)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ch,w)},
Wm(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wm=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bb(d),$async$Wm)
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
k=B.hsY(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b1M(),null)
$.ahG.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a35(o),$async$Wm)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S9.n(0,h,g)
B.RR(h,g)
x=9
break
case 10:x=11
return A.b(B.aQU(d,m,o),$async$Wm)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wm)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wm,w)},
hbK(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hbK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hsY(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jr(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Ch(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbK,w)},
Jr(d,e,f,g,h,i){return B.hYM(d,e,f,g,h,i)},
hYM(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jr=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cT.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lg(A.dD(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jr)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h0(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.SX(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kM(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sp(k,l),$async$Jr)
case 11:J.c4(q,k);++p
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
return A.b(j.a1(0),$async$Jr)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sp(k,new Uint8Array(A.cd(n))),$async$Jr)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahg(r,q,g),$async$Jr)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1M(),null)
x=17
return A.b(B.Bb(d),$async$Jr)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.Hg(d,e),$async$Jr)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jr,w)},
Wo(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wo=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahG.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a35(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aha(s),$async$Wo)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.So(u[o]),$async$Wo)
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
v=A.wS(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S9.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rU(d,e),$async$Wo)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S9.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wo,w)},
hsY(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rU(d,e){return B.hYO(d,e)},
hYO(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S9.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahG.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a35(s),$async$rU)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S9.n(0,f,r)
B.RR(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aha(f),$async$rU)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAl(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.So(g[l]),$async$rU)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqp()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S9.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQB(f),$async$rU)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S9.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wo(a0,a1,0,g),$async$rU)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cd(i))
$.H6.n(0,f,h)
$.S9.n(0,f,h)
B.RR(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rU,w)},
hYR(d){var x,w,v=$.ahG.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hYS(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hR([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hYP(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arf(d,e,f,g,h){return B.hYQ(d,e,f,g,h)},
hYQ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arf=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahG.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a35(s),$async$arf)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rU(g,e),$async$arf)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f0().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.iE(d).xP(h,r,new A.EA(!0,e.c)),$async$arf)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
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
return A.i($async$arf,w)},
ht_(d,e,f,g,h){var x,w,v,u,t=$.hsZ
$.hsZ=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfj.n(0,t,new B.byM(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAl(u)))
return t},
hbL(d){var x=0,w=A.j(y.H)
var $async$hbL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbL,w)},
Js(d,e){var $async$Js=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahG.h(0,h)
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
return A.qy(B.Wo(d,e,p,o<q?o:q),$async$Js,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qy(A.GE(n),$async$Js,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qy(B.aha("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Js,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qy(B.So(h[l]),$async$Js,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qy(A.GE(k),$async$Js,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qy(B.rU(d,e),$async$Js,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qy(A.GE(A.wS(j,p,o<i?o:i)),$async$Js,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qy(null,0,w)
case 2:return A.qy(t.at(-1),1,w)}})
var x=0,w=A.hBY($async$Js,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hDT(w)},
b1O(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfj.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a64(),$async$b1O)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1O,w)},
Wn(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfj.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a64(),$async$Wn)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahg(r.c,u,r.z),$async$Wn)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1M(),null)
u=r.a
x=5
return A.b(B.Bb(u),$async$Wn)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.Hg(u,s),$async$Wn)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
a8n(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfj.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aim(u[s]),$async$a8n)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8n,w)},
cfl(d,e,f){var x=0,w=A.j(y.H)
var $async$cfl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDP(d,e,f),$async$cfl)
case 2:return A.h(null,w)}})
return A.i($async$cfl,w)},
cfm(d,e,f){var x=0,w=A.j(y.H)
var $async$cfm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDQ(d,e,f),$async$cfm)
case 2:return A.h(null,w)}})
return A.i($async$cfm,w)},
Fm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bb(d),$async$Fm)
case 2:p=g
J.nO(p,new B.cfk(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahG.W(0,e)
x=3
return A.b(B.aha(v),$async$Fm)
case 3:u=g
$.frh.W(0,v)
x=4
return A.b(A.az(),$async$Fm)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fm)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fm)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aim(s[q]),$async$Fm)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aim(v),$async$Fm)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fm)
case 14:return A.h(null,w)}})
return A.i($async$Fm,w)},
b1N(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rU(d,e),$async$b1N)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fsd(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1N,w)},
Bb(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bb)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fBS(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bb,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fG2(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bDP(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bb(d),$async$bDP)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fA1(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGy(f))
x=4
return A.b(B.Hg(d,u),$async$bDP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDP,w)},
bDQ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bb(d),$async$bDQ)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fA2(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPI(f))
x=4
return A.b(B.Hg(d,u),$async$bDQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDQ,w)},
adi:function adi(d){this.a=d},
fw_:function fw_(){},
fBP:function fBP(d,e){this.a=d
this.b=e},
fBQ:function fBQ(d){this.a=d},
fBR:function fBR(){},
cfk:function cfk(d){this.a=d},
byM:function byM(d,e,f,g,h,i,j,k,l){var _=this
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
fBS:function fBS(){},
fG2:function fG2(){},
fA1:function fA1(d){this.a=d},
fA2:function fA2(d){this.a=d},
a8o(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.cfp())?3:4
break
case 3:x=5
return A.b(B.b1P(d,e),$async$a8o)
case 5:u=g
if(u!=null){t=u.c
B.Op(d,u.b,e,t)}v=u
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
return A.b(B.b1K(s),$async$a8o)
case 10:case 9:if(g){v=new A.Rc(1,D.U6,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wp(d,e),$async$a8o)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wu(!0,!0,d,e),$async$a8o)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Op(d,D.Ay,e,t)
v=new A.Rc(p,D.Ay,t)
x=1
break}v=B.cfo(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
Wp(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8q(null,d,e),$async$Wp)
case 3:p=g
try{u=C.W.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1J(p,d.length,e),$async$Wp)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfm(e,C.d.gH(d).a,r.b),$async$Wp)
case 7:case 6:q=r.a
x=8
return A.b(B.Op(d,D.U6,e,q),$async$Wp)
case 8:v=new A.Rc(d.length,D.U6,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
Wq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mR(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8p(d,e),$async$Wq)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfh(s,d,e,t),$async$Wq)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1K(t),$async$Wq)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rU(e,d),$async$Wq)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wp(A.a([d],y.r),e),$async$Wq)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
Ws(){var x=0,w=A.j(y.H)
var $async$Ws=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hbE(),$async$Ws)
case 2:x=3
return A.b(B.aTh(),$async$Ws)
case 3:return A.h(null,w)}})
return A.i($async$Ws,w)},
a8p(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1M()
x=3
return A.b(B.cfl(e,d.a,u),$async$a8p)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8p,w)},
Op(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Op=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.U6&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8p(p,f),$async$Op)
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
return A.b(B.cfg(o,p,u,f),$async$Op)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfh(o,p,f,t),$async$Op)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cff(o,u,p,f),$async$Op)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Op,w)},
b1P(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfn(e,d),$async$b1P)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wu(!1,!0,d,e),$async$b1P)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rc(u.a,D.Ay,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1P,w)},
cfn(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wo(d,s,0,1),$async$cfn)
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
return A.i($async$cfn,w)},
cfo(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8q(null,d,e),$async$cfo)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hsX(u)
if(t.length>800){v=null
x=1
break}v=new A.Rc(d.length,D.dVT,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfo,w)},
arg(d,e,f){return B.hYV(d,e,f)},
hYV(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arg=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.mY(g,1)
x=B.hbJ(g)?3:4
break
case 3:x=5
return A.b(B.cfi(g),$async$arg)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mY(g,13))
try{k=B.Fn(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mY(g,13))
u=9
x=12
return A.b(B.b1I(q),$async$arg)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wr(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.hbI(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wr(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.Jt(C.a.i(J.mY(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.Jt(C.a.i(J.mY(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Jt(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wr(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arg,w)},
Jt(d,e,f){return B.hYT(d,e,f)},
hYT(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jt=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.b_(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b_(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1A(r),$async$Jt)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1A(A.cD(s,0,null)),$async$Jt)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ceV(o,r,a1,n,a2),$async$Jt)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ceU(q),$async$Jt)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wr(l,a2),$async$Jt)
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
k=A.ab(d)
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
return A.i($async$Jt,w)},
a8q(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rU(f,r),$async$a8q)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cK.gco().aK(q)],t,s))
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
return A.i($async$a8q,w)},
Wr(d,e){return B.hYU(d,e)},
hYU(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wr=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.W.aP(0,a2,null)
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
e=J.aT(r)
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
break}i=C.cH.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Ch(i,a3,d,k,l,o),$async$Wr)
case 9:h=a5
if(h!=null)J.c4(n,h)
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
g=A.ab(a1)
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
return A.i($async$Wr,w)},
Oo:function Oo(d,e){this.a=d
this.b=e},
cfp:function cfp(){},
a2E(d){var x=A.O(d).ax.a===C.I,w=x?D.ajw:D.agZ,v=x?D.alg:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.ait:C.bm
return new A.aII([w,s,v,u,t,x?C.fq:C.bQ])},
hJy(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h3c(e),d,null,!0,!0,y.N)},
cf4(d,e,f,g,h,i,j,k,l){return new B.Wj(e,l,d,f,k,j,g,h,i,null)},
a_C(d,e,f,g,h,i,j){return new B.bgn(g,h,j,e,i,d,f,null)},
h3c:function h3c(d){this.a=d},
a_z:function a_z(d,e){this.c=d
this.a=e},
aBA:function aBA(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ddV:function ddV(d){this.a=d},
ddT:function ddT(d){this.a=d},
ddU:function ddU(d){this.a=d},
byo:function byo(){},
Wj:function Wj(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFE:function aFE(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e0U:function e0U(d){this.a=d},
e0h:function e0h(d,e){this.a=d
this.b=e},
e0i:function e0i(d,e){this.a=d
this.b=e},
e_R:function e_R(d,e,f){this.a=d
this.b=e
this.c=f},
e_Q:function e_Q(d){this.a=d},
e_S:function e_S(d,e){this.a=d
this.b=e},
e_X:function e_X(d,e,f){this.a=d
this.b=e
this.c=f},
e_W:function e_W(d){this.a=d},
e0I:function e0I(d,e){this.a=d
this.b=e},
e0J:function e0J(d){this.a=d},
e0e:function e0e(d,e,f){this.a=d
this.b=e
this.c=f},
e0b:function e0b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_V:function e_V(d){this.a=d},
e0m:function e0m(d){this.a=d},
e0l:function e0l(){},
e00:function e00(d){this.a=d},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0c:function e0c(d,e){this.a=d
this.b=e},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0u:function e0u(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0v:function e0v(){},
e0w:function e0w(){},
e0x:function e0x(d,e){this.a=d
this.b=e},
e0z:function e0z(){},
e0A:function e0A(d){this.a=d},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0n:function e0n(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0r:function e0r(d){this.a=d},
e_Y:function e_Y(){},
e_Z:function e_Z(d){this.a=d},
e0_:function e0_(d,e){this.a=d
this.b=e},
e_U:function e_U(d,e){this.a=d
this.b=e},
e_T:function e_T(d,e,f){this.a=d
this.b=e
this.c=f},
e0f:function e0f(d){this.a=d},
e0g:function e0g(d,e,f){this.a=d
this.b=e
this.c=f},
e09:function e09(d,e){this.a=d
this.b=e},
e05:function e05(d){this.a=d},
e02:function e02(d,e,f){this.a=d
this.b=e
this.c=f},
e06:function e06(d){this.a=d},
e07:function e07(d){this.a=d},
e08:function e08(){},
e0a:function e0a(d,e){this.a=d
this.b=e},
e03:function e03(d){this.a=d},
e01:function e01(d,e,f){this.a=d
this.b=e
this.c=f},
e04:function e04(){},
e0k:function e0k(d){this.a=d},
e0j:function e0j(d,e){this.a=d
this.b=e},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0B:function e0B(d){this.a=d},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0D:function e0D(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0S:function e0S(){},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0M:function e0M(d,e,f){this.a=d
this.b=e
this.c=f},
e0K:function e0K(d,e,f){this.a=d
this.b=e
this.c=f},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0O:function e0O(d,e){this.a=d
this.b=e},
aBx:function aBx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgm:function bgm(d,e,f){this.c=d
this.d=e
this.a=f},
ddR:function ddR(){},
ddS:function ddS(){},
adC:function adC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dee:function dee(){},
ded:function ded(d){this.a=d},
a_B:function a_B(d,e,f){this.c=d
this.d=e
this.a=f},
aBC:function aBC(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dea:function dea(d){this.a=d},
deb:function deb(d,e,f){this.a=d
this.b=e
this.c=f},
dec:function dec(d,e){this.a=d
this.b=e},
de8:function de8(d,e){this.a=d
this.b=e},
de6:function de6(d){this.a=d},
de4:function de4(d){this.a=d},
de1:function de1(d){this.a=d},
de7:function de7(d){this.a=d},
de3:function de3(d){this.a=d},
de9:function de9(d){this.a=d},
de5:function de5(d){this.a=d},
de2:function de2(d){this.a=d},
a_y:function a_y(d,e,f){this.c=d
this.d=e
this.a=f},
aBz:function aBz(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
ddO:function ddO(d){this.a=d},
ddN:function ddN(d,e){this.a=d
this.b=e},
ddP:function ddP(d){this.a=d},
ddM:function ddM(d,e){this.a=d
this.b=e},
ddQ:function ddQ(d){this.a=d},
ddL:function ddL(d,e){this.a=d
this.b=e},
ddH:function ddH(d){this.a=d},
ddI:function ddI(d){this.a=d},
ddJ:function ddJ(d,e){this.a=d
this.b=e},
ddK:function ddK(d){this.a=d},
QM:function QM(d,e,f){this.c=d
this.d=e
this.a=f},
aBF:function aBF(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
der:function der(d){this.a=d},
des:function des(d){this.a=d},
det:function det(d){this.a=d},
deu:function deu(d){this.a=d},
dev:function dev(d,e){this.a=d
this.b=e},
dew:function dew(d){this.a=d},
dey:function dey(d){this.a=d},
dex:function dex(d){this.a=d},
a_D:function a_D(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBD:function aBD(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
den:function den(d,e){this.a=d
this.b=e},
deo:function deo(d,e){this.a=d
this.b=e},
def:function def(d,e,f){this.a=d
this.b=e
this.c=f},
deg:function deg(d){this.a=d},
deh:function deh(){},
dem:function dem(){},
dei:function dei(d,e){this.a=d
this.b=e},
dej:function dej(d,e){this.a=d
this.b=e},
dek:function dek(d,e){this.a=d
this.b=e},
del:function del(d,e){this.a=d
this.b=e},
adA:function adA(d,e){this.c=d
this.a=e},
ddG:function ddG(d){this.a=d},
a_x:function a_x(d){this.a=d},
aBy:function aBy(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_E:function a_E(d,e){this.c=d
this.a=e},
aBE:function aBE(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
deq:function deq(d){this.a=d},
dep:function dep(d){this.a=d},
bgn:function bgn(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hYW(){var x,w=$.ow(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
Oq(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oq=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Oq)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Oq)
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
q=A.ab(n)
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
return A.i($async$Oq,w)},
a8r(d){return B.hYX(d)},
hYX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8r)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hP("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$a8r)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8r,w)},
Wt(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oq(),$async$Wt)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dK(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8r(s),$async$Wt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wt,w)},
Wu(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wu)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.br(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cfr(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hYW()
t=A.U(u).k("N<1,aa<q,aJ>>")
r=A.C(new A.N(u,new B.cfs(s),t),t.k("ak.E"))
x=6
return A.b(B.Oq(),$async$Wu)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8r(q),$async$Wu)
case 7:x=8
return A.b(B.a8s(r,u,g,s),$async$Wu)
case 8:v=new A.bse(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wu,w)},
arh(d){var x=0,w=A.j(y.y),v,u,t
var $async$arh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Oq(),$async$arh)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arh,w)},
cft(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cft=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oq(),$async$cft)
case 3:s=r.t(f,C.a.i(d))
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
return A.i($async$cft,w)},
a8s(d,e,f,g){return B.hYY(d,e,f,g)},
hYY(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8s=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arf("media",r,new B.cfq(s,e,g),f,q),$async$a8s)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wt(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8s)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wt(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8s)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wt(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8s)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8s,w)},
Fn(d,e,f){return B.hYZ(d,e,f)},
hYZ(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fn=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fn)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arh(b3),$async$Fn)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iR,null,g),$async$Fn)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arh(b3),$async$Fn)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oq(),$async$Fn)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aI(a1.h(d,"usesRemaining"))
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pp(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abQ(a8.a,b0,"media",a8.d,a9).Dp(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1B(k,n,o,s,b7),$async$Fn)
case 17:j=c0
if(j!=null){J.c4(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
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
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pp(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abQ(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fn)
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
a0=A.dK(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8r(e),$async$Fn)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fn,w)},
cfr:function cfr(){},
cfs:function cfs(d){this.a=d},
cfq:function cfq(d,e,f){this.a=d
this.b=e
this.c=f},
aTh(){var x=0,w=A.j(y.H),v,u
var $async$aTh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i95=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTh)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTh)
case 3:u=$.hhe
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTh)
case 4:$.hhe=$.ihU=$.ihV=null
return A.h(null,w)}})
return A.i($async$aTh,w)},
fFE(d){var x=0,w=A.j(y.H),v,u
var $async$fFE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aap){x=1
break}u=new A.bn($.bF,y.d4)
d.c=new B.fFF(new A.c7(u,y.aY))
x=3
return A.b(u.iL(0,C.id,new B.fFG()),$async$fFE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fFE,w)},
ihS(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hYG(x):x},
hhi(d){var x=0,w=A.j(y.T),v,u,t
var $async$hhi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.Y(u,"WR")){v=B.arj(u)
x=1
break}v=B.hbI(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhi,w)},
hhh(d){var x=0,w=A.j(y.T),v,u,t
var $async$hhh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.Y(u,"WR")){v=B.ark(u)
x=1
break}v=B.hbI(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhh,w)},
fZE(d){var x=0,w=A.j(y.T),v
var $async$fZE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ark(d),$async$fZE)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZE,w)},
bEK(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hhh(d),$async$bEK)
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
return A.i($async$bEK,w)},
ft0(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ft0=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wn(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Ch(d.aqp(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ft0,w)},
Hi(d,e,f){return B.ika(d,e,f)},
ika(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hhi(a1),$async$Hi)
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
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b_(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hLy().aGP(D.dI2,null),$async$Hi)
case 4:l=d.hhe=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAl(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bF,y.b1)
l.y=new B.fGf(f,k,new B.fGg(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a97(0,new B.YF(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amO(0),$async$Hi)
case 7:x=6
return A.b(d.a9_(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fFE(l),$async$Hi)
case 8:x=9
return A.b(l.arb(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ihS(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arl(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hsX(h)
case 11:v=new A.bru(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fFF:function fFF(d){this.a=d},
fFG:function fFG(){},
fGg:function fGg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGf:function fGf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fGe:function fGe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
imf(d){switch(d){case"new":return D.eFT
case"checking":return D.eFU
case"connected":return D.eFW
case"completed":return D.eFV
case"failed":return D.eFY
case"disconnected":return D.eFZ
case"closed":return D.aSo
case"count":return D.eFX}return D.aSo},
img(d){switch(d){case"new":return D.aSp
case"gathering":return D.eG_
case"complete":return D.aap}return D.aSp},
iwG(d){switch(d){case"stable":return D.eG0
case"have-local-offer":return D.eG1
case"have-local-pranswer":return D.eG3
case"have-remote-offer":return D.eG2
case"have-remote-pranswer":return D.eG4
case"closed":return D.aSv}return D.aSv},
iuP(d){switch(d){case"new":return D.aSs
case"connecting":return D.aSt
case"connected":return D.aSu
case"closed":return D.aaq
case"disconnected":return D.aSr
case"failed":return D.aSq}return D.aaq},
aaM:function aaM(d,e){this.a=d
this.b=e},
Pv:function Pv(d,e){this.a=d
this.b=e},
YE:function YE(d,e){this.a=d
this.b=e},
Pu:function Pu(d,e){this.a=d
this.b=e},
FS:function FS(d,e){this.a=d
this.b=e},
cth:function cth(){},
hdt(d){var x=new B.FR()
x.a=d
x.b=!0
return x},
FR:function FR(){this.b=this.a=$},
aaL:function aaL(){},
avT:function avT(){},
YF:function YF(d,e){this.a=d
this.b=e},
hbE(){var x=0,w=A.j(y.H)
var $async$hbE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbE,w)},
hbH(d,e,f){var x=0,w=A.j(y.T),v
var $async$hbH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mR(D.n7))){v=null
x=1
break}v=B.fZV(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbH,w)},
hsX(d){var x,w=C.agn.a5O(C.dV.aK(d),null)
if(w.length===0){x=C.dV.aK(d)
return C.cK.gco().aK(x)}return C.cK.gco().aK(w)},
hYF(d){var x,w,v=C.cH.aK(d)
try{x=C.cb.cD(0,C.agm.bgI(v,!1))
return x}catch(w){x=C.cb.cD(0,v)
return x}},
hbI(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.hYF(C.a.b_(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.b_(t,w.length)
try{v=C.cb.cD(0,C.cH.aK(x))
return v}catch(u){return x}}return null},
hYG(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hYH(){var x,w=$.ow(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1H(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1H)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$b1H,w)},
cf9(d,e){return B.hYI(d,e)},
hYI(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cf9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hP("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cQ,null),$async$cf9)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$cf9,w)},
b1K(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1H(d),$async$b1K)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1K,w)},
b1J(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1J=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hYH()
r=C.a.i(f)
t=C.dV.aK(s)
x=3
return A.b(B.cf9(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cK.gco().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1J)
case 3:if(!h){v=null
x=1
break}v=new A.a1E("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1J,w)},
b1I(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1H(o),$async$b1I)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cD(0,C.cH.aK(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1I,w)},
cfa(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cfa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bFG("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cQ),$async$cfa)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cfa,w)},
b1L(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jp(),$async$b1L)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1L,w)},
arc(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arc)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1L(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arc,w)},
ara(d,e){var x=0,w=A.j(y.H)
var $async$ara=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ara)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ara)
case 2:return A.h(null,w)}})
return A.i($async$ara,w)},
a8j(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8j)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a8j)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8i(s),$async$a8j)
case 5:x=6
return A.b(B.ara(f,u),$async$a8j)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
a8k(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8k=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8k)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a8k)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
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
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.ara(g,q),$async$a8k)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8i(u),$async$a8k)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
a8l(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8l)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jp(),$async$a8l)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1E(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8l)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8l)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8l,w)},
cfb(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfb)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cfb,w)},
Jq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfb(d),$async$Jq)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1L(t),$async$Jq)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arb(d),$async$Jq)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1E(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arb(d),$async$Jq)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
arb(d){var x=0,w=A.j(y.H)
var $async$arb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arb)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arb)
case 2:return A.h(null,w)}})
return A.i($async$arb,w)},
b1M(){var x,w=$.ow(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8m(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hbJ(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfe(d){return B.hYK(d)},
hYK(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8m(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfe)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$cfe,w)},
are(d,e){return B.hYL(d,e)},
hYL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$are=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8m(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hP("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cQ,null),$async$are)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$are,w)},
cfg(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfg=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8m(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.are(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfg,w)},
cff(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cff=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8m(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.are(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cff)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cff,w)},
cfh(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfh=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8m(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.are(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfh,w)},
cfi(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hbJ(d)){v=null
x=1
break}x=3
return A.b(B.cfe(d),$async$cfi)
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
return A.i($async$cfi,w)},
a8t(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8t=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8t)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8t)
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
q=A.ab(n)
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
return A.i($async$a8t,w)},
ari(d){return B.hZ_(d)},
hZ_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ari=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$ari)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hP("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$ari)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ari,w)},
arj(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arj)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8t(),$async$arj)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cD(0,C.cH.aK(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dK(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.ari(s),$async$arj)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
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
return A.i($async$arj,w)},
arl(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$arl)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8t(),$async$arl)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dK(A.a1(s,r,q),r,q)
r=C.dV.aK(C.a.i(e))
q.n(0,"answer",C.cK.gco().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.ari(u),$async$arl)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arl,w)},
ark(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ark=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ark)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8t(),$async$ark)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cD(0,C.cH.aK(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ark,w)},
aqb(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.r_)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$aqb)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aqb)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.uJ(o))
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
return A.i($async$aqb,w)},
isZ(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fXP(d){return B.it0(d)},
it0(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fXP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").LE(d,3600),$async$fXP)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
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
return A.i($async$fXP,w)},
DJ(d,e,f,g,h,i){var x=null
return B.isY(d,e,f,g,h,i)},
isY(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DJ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.ht_(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hbL(r),$async$DJ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fXP(o),$async$DJ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8n(r),$async$DJ)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aW3)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MM(A.a([],g))
x=15
return A.b(d.f9(0,A.awG("GET",A.cD(n,0,null))).dg(0,C.H5),$async$DJ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8n(r),$async$DJ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lg(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DJ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1O(r,k),$async$DJ)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DJ)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wn(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a8n(r),$async$DJ)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DJ,w)},
aSV(d){return B.it_(d)},
it_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").W(0,d),$async$aSV)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSV,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[143]
F=c[147]
B=a.updateHolder(c[17],B)
D=c[146]
H=c[112]
G=c[121]
I=c[43]
K=c[138]
L=c[45]
B.cti.prototype={
aGP(d,e){return this.cRc(d,e)},
cRc(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dK(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cu(t)))
t=J.k(u)
v=B.i2G(C.cK.gco().aK(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGP,w)}}
B.b6V.prototype={
bCY(d){var x=this,w=x.w
w.onclose=A.hv(new B.ctd(x))
w.onopen=A.hv(new B.cte(x))
w.onmessage=A.hv(new B.ctf(x))
w.onbufferedamountlow=A.hv(new B.ctg(x))},
gd2(d){return this.x},
aj1(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aj1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FR()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hdt(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aj1)
case 8:v=t.hdt(s.apk(f,0,null))
x=1
break
case 7:case 4:v=B.hdt(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aj1,w)}}
B.b6W.prototype={
bCZ(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hv(new B.ctj(x)))
w.addEventListener("icecandidate",A.hv(new B.ctk(x)))
w.addEventListener("iceconnectionstatechange",A.hv(new B.ctl(x)))
w.onicegatheringstatechange=A.hv(new B.ctm(x))
w.addEventListener("signalingstatechange",A.hv(new B.ctn(x)))
if(!$.hlo())w.addEventListener("connectionstatechange",A.hv(new B.cto(x)))
w.addEventListener("negotiationneeded",A.hv(new B.ctp(x)))
w.addEventListener("track",A.hv(new B.ctq(x)))},
amO(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kl(A.cu(A.T(y.N,y.z)))),y.aQ),$async$amO)
case 3:t=f
v=new B.YF(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amO,w)},
a9_(d,e){return this.brU(0,e)},
brU(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9_)
case 2:return A.h(null,w)}})
return A.i($async$a9_,w)},
a97(d,e){return this.bse(0,e)},
bse(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a97=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a97)
case 2:return A.h(null,w)}})
return A.i($async$a97,w)},
arb(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YF(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arb,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.adB.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_A.prototype={
S(){return new B.aBB()},
gd1(){return this.c}}
B.aBB.prototype={
Z(){this.a3()
this.afx()},
afx(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1F(u.e,u.c),$async$afx)
case 2:t=e
if(v.c!=null)v.m(new B.ddZ(v,t))
return A.h(null,w)}})
return A.i($async$afx,w)},
Rh(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ar7(t.e,t.c,!1),$async$Rh)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.ftU)
x=1
break}x=4
return A.b(B.a8h(u.a.c,"individual"),$async$Rh)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7m(A.ee(new B.ddW(u),!1,null,y.H)),$async$Rh)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rh,w)},
JZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fDx(o),$async$JZ)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8l(o.e,r,s,q),$async$JZ)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqT)
x=1
break}x=5
return A.b(B.a8h(u.a.c,"member"),$async$JZ)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7m(A.ee(new B.ddY(u),!1,null,y.H)),$async$JZ)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JZ,w)},
yN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8g(t.e,o,t.f,t.r,t.w,s),$async$yN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8h(u.a.c,"org_owner"),$async$yN)
case 4:x=5
return A.b(B.arc(u.a.c),$async$yN)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fE1(o),$async$yN)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8j(s,t,o,q.c),$async$yN)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqP)
x=1
break}x=10
return A.b(B.arc(u.a.c),$async$yN)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7m(A.ee(new B.ddX(u),!1,null,y.H)),$async$yN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yN,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.ny:C.qr,p=B.hbG(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fO1,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hm,s,s,s),C.aB,D.h73,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.ccv,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lZ(new B.de0(),s),C.P,v,C.e4,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.ae4(C.eY,C.aET,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gckd(),s),C.af],u))
w.push(new B.ae4(C.pA,C.a5N,"Team Member","Sign in with your organization access code + password",t.gcl4(),s))
w.push(C.af)
w.push(new B.ae4(C.aqS,C.a7s,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckA(),s))
return A.c5(s,q,A.bm(!0,A.ca(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae4.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.lZ,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zt,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.n(p,s,w,q,s,s,C.n),s,C.bT,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEf.prototype={}
B.aHq.prototype={}
B.jD.prototype={
mR(d){var x=this.b,w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b_(x,w+1).toLowerCase())},
garT(){var x=this.d
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
bgb(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPI(d){return this.bgb(null,d)},
aGy(d){return this.bgb(d,null)}}
B.Wh.prototype={
S(){return new B.aFC(new A.cy(null,y.A))},
gd1(){return this.c}}
B.aFC.prototype={
Z(){this.a3()
this.afy()},
afy(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cg(u.a.c),$async$afy)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e_N(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afy,w)},
afz(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fx(s)),$async$afz)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fuP)
case 1:return A.h(v,w)}})
return A.i($async$afz,w)},
a00(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a00=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqb(s.d,4),$async$a00)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_my_code_"+m+".png"),$async$a00)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a00,w)},
ajt(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abp("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajt)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajt,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.ny:C.qr,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.o(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,E.a6d,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,C.anu,p,p,1/0)
v=A.l(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nd,w,C.lb,new A.e6(A.o(p,A.qi(p,p,!1,B.hYB(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bT,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.ep(C.DD,p,C.Wy,q.gcct(),p),1),C.as,A.E(A.de(C.zV,p,C.acL,q.gccu(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.T,new A.a5(1/0,p,A.ep(G.a4y,p,D.h2B,q.gczZ(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,I.ao2,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wl.prototype={
S(){return new B.aFF(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aFF.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.Jo(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
a01(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jo(u.d.a.a)
if(t==null){u.m(new B.e0W(u))
x=1
break}u.m(new B.e0X(u))
s=u.a
r=s.c
x=3
return A.b(B.a8f(s.d,new B.e0Y(u),t,r),$async$a01)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e0Z(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a01,w)},
a3f(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3f=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e1_(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rU(r.a.c,q),$async$a3f)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e10(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj5(p,m,l,j,k),$async$a3f)
case 8:o=e
if(r.c!=null)r.m(new B.e11(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.e12(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e13(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3f,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ajw:D.agZ,h=j?D.alg:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.ait:C.bm
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.ds(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.ds(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c_w,C.f,k,k,new A.n(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,E.a6d,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uW(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blR()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.OH,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e14(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mB,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mr(l.a.d,4)
m=A.C(new A.N(m,new B.e15(x,new A.aII(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fpk)
else q.push(A.X(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.n(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bHV,k,k,C.ah),1)
u=l.f?k:l.gcA_()
t=i[3]
s=i[1]
q=A.l(16)
s=A.ep(G.a4y,k,D.h3I,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gccv()
t=A.bp(C.aD,k,k,0,C.c,k,C.nF,k,new A.ba(A.l(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lC(new B.e16(),A.x(A.a([e,new A.D(D.bHo,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.tY:D.h1Y,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.ck,C.a0P,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blR.prototype={
pb(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.ho(C.bB,v.length),C.aP)}}
B.Wi.prototype={
S(){return new B.aFD()}}
B.aFD.prototype={
Z(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bb(w,C.b7,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.at(new A.bb(x,C.b7,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.at(C.aw,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.V$=$.aw()
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
afA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e_O(r))
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
return A.b(B.a8k(p,m,n,o,C.a.i(l).length===0?null:l),$async$afA)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fuq)
s=[1]
x=4
break}p.K(y.q).f.T(D.ft1)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e_P(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afA,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.ny:C.qr,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fVj,s,s,s,1,s,!0),p=A.o(s,D.bzp,C.f,s,s,new A.n(s,s,s,A.l(22),s,C.Iu,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c6S,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6N,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c72,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gccw()
u=A.bp(C.aD,s,s,s,s,C.hg,s,s,s,s,s,s)
return A.c5(q,r,A.ca(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bJ(t.r?C.tY:C.aYU,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adi.prototype={}
B.byM.prototype={
a64(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a64=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.aqp()))
x=3
return A.b(B.Sp(t,s),$async$a64)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a64,w)},
gd1(){return this.a}}
B.Oo.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_z.prototype={
S(){return new B.aBA(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aBA.prototype={
Z(){this.a3()
$.aU.x1$.push(new B.ddV(this))},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
ccC(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2E(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.o(w,H.atz,C.f,w,w,new A.n(w,w,w,A.l(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.auo,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uW(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byo()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CM,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b76),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.ddT(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mB,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cN(C.Mq,new A.bN(new A.n(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wK,A.x(A.a([l,C.aO,k,C.P,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dV(C.o7,new B.ddU(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.ba(A.l(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bN(new A.n(w,w,w,A.l(14),A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cM,12)],n),F.QI,C.n),C.bk,A.aF(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ezg,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccB(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OQ,w,C.d7,w,w,w)}}
B.byo.prototype={
pb(d,e){return e.amI(e.a.toUpperCase())}}
B.Wj.prototype={
S(){return new B.aFE(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFE.prototype={
Z(){var x=this
x.a3()
x.uu()
x.w=A.dh(C.jJ,new B.e0U(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Ws()
this.a2()},
a28(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a28=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.On(u.a.c),$async$a28)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bb(u.a.c),$async$a28)
case 4:u.m(new s.e0h(u,e))
u.ip("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a28,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.On(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bb(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e0i(u,s))
if(t>0)u.ip("Received "+A.w(t)+" file(s) via My Code.")
u.Op(u.d)
B.Cg(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
Op(d){return this.bH0(d)},
bH0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Op=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8p(r,u.a.c),$async$Op)
case 8:p=f
if(u.c==null){x=1
break}new B.e_R(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.Y(r.c,"video/")||r.mR(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wq(r,u.a.c),$async$Op)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bb(u.a.c),$async$Op)
case 12:u.m(new o.e_S(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Op,w)},
OP(d){return this.bNm(d)},
bNm(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8p(d,u.a.c),$async$OP)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e_X(u,d,t))
x=6
return A.b(A.fH(new A.fx(t)),$async$OP)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fx(r.toUpperCase())),$async$OP)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OP,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cKX(d,e)},
cKX(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e0I(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e0J(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaYm(){var x=this.a
return x.f||x.r||x.w},
IP(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYm()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cf7(s,n,r,q,o,t),$async$IP)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fQV(o,u.a.c),$async$IP)
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
return A.b(B.DL(s,o,r,q,n,t),$async$IP)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IP,w)},
a1c(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arc(u.a.c),$async$a1c)
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
return A.b(A.a6(t,!1).ce(A.ee(new B.e0e(u,r,q),!1,null,y.H)),$async$a1c)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1c,w)},
a2i(d){return this.ctx(d)},
ctw(){return this.a2i(1)},
ctx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYm()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ar9(u.a.c),$async$a2i)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2i,w)},
adq(d,e,f){return this.c3n(d,e,f)},
c3n(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.uv(new B.e0b(u,d,null,e,f),"Uploading\u2026"),$async$adq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adq,w)},
bH9(){B.hIw(!1,new B.e_V(this))
return},
cyA(){this.m(new B.e0m(this))},
aB1(){var x=0,w=A.j(y.H),v=this
var $async$aB1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bH9()
return A.h(null,w)}})
return A.i($async$aB1,w)},
adm(){var x=0,w=A.j(y.H),v=this
var $async$adm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e00(v),"Importing\u2026"),$async$adm)
case 2:return A.h(null,w)}})
return A.i($async$adm,w)},
Tl(d){return this.cKg(d)},
cKg(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e0F(u,d),!1,null,y.H)),$async$Tl)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mR(D.SK)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ee(new B.e0G(u,d),!1,null,y.H)),$async$Tl)
case 8:x=1
break
case 7:x=u.c45(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ee(new B.e0H(u,d),!1,null,y.H)),$async$Tl)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tl,w)},
c45(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cW0,C.a.b_(x,w+1).toLowerCase())},
ahb(d){return this.ckh(d)},
ckh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e0c(u,d),!1,null,y.H)),$async$ahb)
case 5:x=1
break
case 4:u.m(new B.e0d(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahb,w)},
SH(d){return this.cBt(d)},
cBt(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$SH)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e0y(u,d),"Preparing QR\u2026"),$async$SH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SH,w)},
ajT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0z(),A.U(t).k("N<1,q>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e0A(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SH(r),$async$ajT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajT,w)},
ajM(d){return this.cB0(d)},
cB0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2E(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0s(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajM)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tl(d)
break
case"qr":u.SH(A.a([d],y.r))
break
case"send_my_code":u.ckU(A.a([d],y.r))
break
case"save":u.aj9(d)
break
case"delete":u.JI(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajM,w)},
YM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_Y(),A.U(t).k("N<1,q>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_Z(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$YM)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e0_(u,r),"Preparing file\u2026"),$async$YM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YM,w)},
aig(d){return this.crP(d)},
crP(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aig=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hJy(d,!1),$async$aig)
case 3:s=f
r=s==null
q=B.a8m(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ip("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aig,w)},
ahh(){var x=0,w=A.j(y.H),v=this,u
var $async$ahh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fYV(u,v.a.c),$async$ahh)
case 2:return A.h(null,w)}})
return A.i($async$ahh,w)},
bH8(){B.hIw(!1,new B.e_U(this,null))
return},
JY(d,e){return this.ckV(d,e)},
b3X(d){return this.JY(null,d)},
ckU(d){return this.JY(d,null)},
ckV(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e0f(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xP.cq().apv(!0,C.a2A,!1),$async$JY)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e0g(l,s,r),"Preparing\u2026"),$async$JY)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
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
return A.b(B.bGV(p,l,e,s.a.c),$async$JY)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JY,w)},
J4(d){return this.c3a(d)},
c3a(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hYA(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3X(t),$async$J4)
case 8:x=6
break
case 7:u.ip("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ip("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uv(new B.e09(u,d),"Receiving video\u2026"),$async$J4)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e0a(u,d),"Receiving\u2026"),$async$J4)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J4,w)},
ET(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ET=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DE()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aig(t),$async$ET)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J4(s),$async$ET)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0k(u),!1,null,y.N)),$async$ET)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$ET)
case 10:x=1
break
case 9:x=11
return A.b(u.J4(C.a.i(r)),$async$ET)
case 11:case 1:return A.h(v,w)}})
return A.i($async$ET,w)},
aj9(d){return this.cx7(d)},
cx7(d){var x=0,w=A.j(y.H),v=this
var $async$aj9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e0j(v,d),"Saving\u2026"),$async$aj9)
case 2:return A.h(null,w)}})
return A.i($async$aj9,w)},
JI(d){return this.bPI(d)},
bPI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ln(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JI)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cfa(t),$async$JI)
case 6:case 5:s=d.a
x=7
return A.b(B.Fm(u.a.c,s),$async$JI)
case 7:u.r.W(0,s)
x=8
return A.b(u.uu(),$async$JI)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JI,w)},
ajZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2E(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0E(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajZ)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahh()
break
case"import":u.adm()
break}case 1:return A.h(v,w)}})
return A.i($async$ajZ,w)},
ccz(d){var x=d.c
if(C.a.Y(x,"video/")||d.mR(D.n7))return C.qW
if(C.a.Y(x,"image/")||d.mR(D.SK))return C.v5
if(C.a.q(x,"pdf"))return C.Ia
return D.arg},
B(d){var x,w,v=this,u=null,t=B.a2E(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Im,u,u,u,new B.e0P(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c06,u,u,u,v.e?u:v.gckB(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyz()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bVj:C.arE,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a4v,u,u,u,v.e?u:v.gccA(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb52(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c1U,u,u,u,v.e?u:new B.e0Q(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.e0R(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.ds(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.ds(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kt(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBx(C.ju,s,!0,t,w?u:v.gcBu(),u),1)
x.push(new A.D(D.bG8,A.lC(new B.e0S(),A.A(A.a([s,C.as,A.E(new B.aBx(C.tl,"Export",!1,t,w?u:v.gbTB(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.ck,C.iB,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgm(t,v.e?u:v.gb52(),u)
else s=A.ku(!0,u,u,new B.e0T(v,t),s,u,D.bG0,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBx.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.t8,t,new A.ba(s,C.a1),t,t,t)
return A.de(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t8,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ep(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgm.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.ddR(),new A.D(C.a1H,A.x(A.a([A.lC(new B.ddS(),A.o(x,A.X(C.zx,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ed,C.hO,x,x,new A.bt(0.86,1,w),s),C.e4,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.de(C.oQ,x,D.h7n,this.d,A.bp(C.aD,x,x,x,C.c,x,C.OO,x,new A.ba(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.Cz,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adC.prototype={
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
o=!C.a.Y(p,"video/")
if(!o||i.mR(D.n7))p=D.dwM
else{p=C.a.Y(p,"image/")||i.mR(D.SK)
n=y.O
p=p?A.a([C.cW,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garT()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.ax,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mR(D.n7)))l.push(A.h9p(C.aD,!1,j,j,j,!1,j,j,new B.ded(k),j,j,new A.ba(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oI,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lC(new B.dee(),new A.D(C.el,A.aF(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1a,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.ck,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_B.prototype={
S(){return new B.aBC()},
gd1(){return this.c}}
B.aBC.prototype={
Z(){this.a3()
this.yD()},
t(){B.hYP(this.e)
this.a2()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rU(o.c,o.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hYS(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hYR(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dea(s))
x=1
break}s.m(new B.deb(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dec(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a3e(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rU(t.c,t.d),$async$a3e)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.frp)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj5(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3e)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3e,w)},
c33(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.z,v,new B.de8(w,t),C.h2,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fX(t,C.z,v,new B.de9(w),C.h2,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v1(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2E(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DF,u,u,u,v.gb8Q(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.G_
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.de(C.DF,u,D.fQu,v.gb8Q(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c33()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_y.prototype={
S(){return new B.aBz(A.ak3(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBz.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fA(w,A.a3(w).k("fA<1>")).iF(new B.ddO(v))
x.gcYQ().iF(new B.ddP(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a3(x).k("fA<1>"))}if(x==null)x=C.bdw
x.iF(new B.ddQ(v))
v.yD()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rU(p.c,p.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.ddH(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a4N(r,s.a.d.c)),$async$yD)
case 8:if(s.c==null){x=1
break}s.m(new B.ddI(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.ddJ(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a02(){var x=0,w=A.j(y.H),v=this,u
var $async$a02=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a02)
case 5:x=3
break
case 4:x=6
return A.b(u.iK(0),$async$a02)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a02,w)},
aWa(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2E(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.G_
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bWf,C.f,o,o,new A.n(o,o,o,A.l(24),o,F.QI,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.ddK(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aWa(p.w)+" / "+p.aWa(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.fnL,o,o,o,o,o,o)
r=p.f
q=A.X(r?C.v9:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.de(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccD(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qJ,x,o),o,o,o),o,!1,!1,o,o)}}
B.QM.prototype={
S(){return new B.aBF()},
gd1(){return this.c}}
B.aBF.prototype={
Z(){this.a3()
this.Qz()},
Qz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hbH(o.c,o.d,new B.der(s)),$async$Qz)
case 7:r=e
if(r==null||r.length===0){s.m(new B.des(s))
x=1
break}s.e=r
q=A.il5(r)
if(q==null){s.m(new B.det(s))
x=1
break}s.d=q
q.aV(0,s.gb3L())
x=8
return A.b(q.iY(0).dg(0,C.t4),$async$Qz)
case 8:if(s.c==null){x=1
break}s.m(new B.deu(s))
x=9
return A.b(q.qv(0),$async$Qz)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dev(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qz,w)},
ciQ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dew(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DE(0,x.gb3L())
w=x.d
if(w!=null)w.t()
B.iv7(x.e)
x.a2()},
afD(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1N(u.c,u.d),$async$afD)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afD,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2E(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.oP,t,t,t,u.gccx(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.im(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.G_
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aju(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fG(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AH(s,t),A.ay(t,A.xx(A.o(t,A.X(q?C.v9:C.he,C.c,t,t,t,48),C.f,t,t,new A.n(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bT,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dey(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_D.prototype={
S(){return new B.aBD(new A.cy(null,y.A))}}
B.aBD.prototype={
gcKE(){var x,w,v=this.a
if(v.e!==D.U7)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcKe(){var x,w,v=this.a
if(v.e!==D.Ay)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcKE()
if(x!=null){v.RJ(x)
v.e=A.dh(C.H8,new B.den(v,x))}w=v.gcKe()
if(w!=null){v.RI(w)
v.f=A.dh(C.fM,new B.deo(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RI(d){return this.cq1(d)},
cq1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arh(d),$async$RI)
case 3:t=f
x=4
return A.b(B.cft(d),$async$RI)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.def(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RI,w)},
RJ(d){return this.cq2(d)},
cq2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fZE(d),$async$RJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEK(t),$async$RJ)
case 4:if(u.c==null){x=1
break}u.m(new B.deg(u))
u.c.K(y.q).f.T(D.aVD)
case 1:return A.h(v,w)}})
return A.i($async$RJ,w)},
gc8n(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccy(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a30(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a30=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DE()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fuA)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ee(new B.deh(),!1,null,y.N)),$async$a30)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEK(s),$async$a30)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aVD)
case 1:return A.h(v,w)}})
return A.i($async$a30,w)},
abe(d){return this.bNn(d)},
bNn(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fx(C.d.aN(t,", "))),$async$abe)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abe,w)},
afB(d){return this.bN5(d)},
bN5(d){var x=0,w=A.j(y.H),v=this
var $async$afB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fx(v.a.c)),$async$afB)
case 2:if(d.e!=null)d.K(y.q).f.T(D.frT)
return A.h(null,w)}})
return A.i($async$afB,w)},
a2V(d){return this.cx9(d)},
cx9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqb(s.d,4),$async$a2V)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_doc_share_qr.png"),$async$a2V)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2V,w)},
gaZC(){var x,w=this.a
if(w.e!==D.JB)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
abb(d){return this.bNg(d)},
bNg(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZC()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fx(C.a.Y(t,"http")?t:"N2|"+t)),$async$abb)
case 3:if(d.e!=null)d.K(y.q).f.T(D.ftz)
case 1:return A.h(v,w)}})
return A.i($async$abb,w)},
afC(){var x=0,w=A.j(y.H),v=this,u
var $async$afC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ws(),$async$afC)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afC,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2E(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.JB&&i!==D.U7&&i!==D.Ay
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.JB||t===D.U7||t===D.Ay?l:A.aH(l,l,l,l,C.ls,l,l,l,m.gb1H(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8n(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.JB){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.o(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccy(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c5V,D.h_7,new B.dei(m,d),l)],p))}if(m.a.e===D.JB&&m.gaZC()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c2f,D.fWI,new B.dej(m,d),l)],p))
if(m.a.e===D.Ay){x=(m.w?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.h.ad(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}if(m.a.e===D.U7){x=(m.r?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l),C.af,A.de(D.bYI,l,D.h2h,m.gcxw(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c5(v,w,new A.D(C.ac,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.i,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(C.DD,l,C.Wy,new B.dek(m,d),l),1),C.as,A.E(A.de(C.zV,l,C.acL,new B.del(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bc,l,m.gb1H(),A.bp(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dem(),y.C)}}
B.adA.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.o(x,A.qi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bJ(C.Bd,x,new B.ddG(d),x)],u),x,x,C.no,v,x,x,x,x,D.fPt,x)}}
B.a_x.prototype={
S(){return new B.aBy(A.zS(C.yO,C.oe,C.vn))}}
B.aBy.prototype={
t(){this.d.t()
this.a2()},
azB(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fXf,x,x,x,1,x,!0),C.w,A.zR(this.d,C.bY,this.gazA()),x,!1,!1,x,x)}}
B.a_E.prototype={
S(){return new B.aBE(A.zS(C.yO,C.oe,C.vn))},
gd1(){return this.c}}
B.aBE.prototype={
c47(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahE(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MS("text/plain"),$async$ahE)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fuu)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahE,w)},
ac2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ac2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hJy(p,!0),$async$ac2)
case 3:t=e
p=t==null
s=B.a8m(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fr_)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$ac2,w)},
t(){this.d.t()
this.a2()},
azB(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c47(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.asE,v,v,v,w.gbT4(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a4C,v,v,v,w.gcnn(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.v1:C.PX,v,v,v,v,v),v,v,v,new B.deq(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h3c,v,v,v,1,v,!0)
u=A.zR(w.d,C.bY,w.gazA())
x=A.l(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eFy],s),v),v,!1,!1,v,v)}}
B.bgn.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pq
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.o(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pq:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1N,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aaM.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pv.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YE.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pu.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FS.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cth.prototype={}
B.FR.prototype={}
B.aaL.prototype={}
B.avT.prototype={}
B.YF.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jD)","q(jD)","Wj(Z)","~()","a_A(Z)","H(H,jD)","QM(Z)","~(nQ)","cw(FR)","aA<jD?>(@)","Wh(Z)","Wl(Z)","D(jD)","jD(@)","aa<q,@>(jD)","a_z(Z)","Wi(Z)","a_B(Z)","a_y(Z)","a_D(Z)","adA(Z)","ai<jD>()","a_E(Z)","adC(Z,H)","a_x(Z)","aa<q,aJ>(jD)","cw(YE)","cw(aaL)","aA<cw>(FR)"])
B.ctd.prototype={
$1(d){var x=this.a
x.x=D.aSn
x.y.I(0,D.aSn)},
$S:77}
B.cte.prototype={
$1(d){var x=this.a
x.x=D.aSm
x.y.I(0,D.aSm)},
$S:77}
B.ctf.prototype={
$1(d){var x=this.a
x.aj1(A.ahS(d.data)).bG(new B.ctc(x),y.b)},
$S:77}
B.ctc.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ctg.prototype={
$1(d){},
$S:77}
B.ctj.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i2F(d.channel))},
$S:17}
B.ctk.prototype={
$1(d){},
$S:17}
B.ctl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.imf(w.iceConnectionState)
x.cx=w
if($.hlo())switch(w.a){case 0:x.cy=D.aSs
break
case 1:x.cy=D.aSt
break
case 3:x.cy=D.aSu
break
case 5:x.cy=D.aSq
break
case 6:x.cy=D.aSr
break
case 7:x.cy=D.aaq
break
default:break}},
$S:111}
B.ctm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.img(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:111}
B.ctn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iwG(w.signalingState)},
$S:111}
B.cto.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iuP(w.connectionState)},
$S:111}
B.ctp.prototype={
$1(d){},
$S:111}
B.ctq.prototype={
$1(d){},
$S:17}
B.fyY.prototype={
$1(d){var x=y.F.a(new A.qw([],[]).o5(d.target.result,!1)),w=C.wB.q(x.objectStoreNames,"blobs")
if(!w)C.wy.Gq(x,"blobs")},
$S:172}
B.fYJ.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xb.fs(this.b)
$.eX.mK()
this.c.$1(d)},
$S:487}
B.fYL.prototype={
$1(d){return this.a.$1(B.ibO(this.b,this.c))},
$S:32}
B.fYK.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fYI.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fYY.prototype={
$1(d){var x=this
return B.hxW(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fYZ.prototype={
$1(d){var x=this
return B.hxW(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fBD.prototype={
$1(d){var x=this
return B.cf4(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.ddZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ddW.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf4(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.ddY.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf4(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.ddX.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf4(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.de0.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bXk,x,x,x,new B.de_(d),x,x,x,x,x,x),A.E(A.FD(D.St,!0,x,!1,C.a3F,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.St,x,g,C.aoj,0,e,f)},
$C:"$4",
$R:4,
$S:457}
B.de_.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDA.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eU,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.o(v,D.bzJ,C.f,v,v,D.b8M,v,v,v,v,D.ao8,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0I,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.CO,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asU,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fDy(d),v),1),C.as,A.E(A.bJ(D.fVH,v,new B.fDz(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.n),v,v,v,C.Hb,v,v,v,v),v)},
$S:69}
B.fDy.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDz.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fs9)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEf(v,x))},
$S:0}
B.fE3.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eU,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bzz,C.f,w,w,D.bah,w,w,w,w,D.ao8,w,w,1/0),new A.D(C.CO,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hh2(u,"Organization name",C.HK,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hh2(u,"Access code",C.mk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hh2(u,"Member password",C.DC,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h3j,w,new B.fE2(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.n),w,w,w,C.Hb,w,w,w,w),w)},
$S:69}
B.fE2.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fse)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHq(u,x,w))},
$S:0}
B.ceW.prototype={
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
p=C.a.Y(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vR(p,null).dg(0,C.a0O),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ch(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ab(h)
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
B.cf1.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cf2.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cf3.prototype={
$1(d){return d.b},
$S:z+2}
B.ceY.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceZ.prototype={
$1(d){return d.b},
$S:z+2}
B.ceX.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cf_.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cf0.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fYW.prototype={
$1(d){return new B.Wh(this.a,null)},
$S:z+11}
B.fYX.prototype={
$1(d){return new B.Wl(this.a,this.b,this.c,null)},
$S:z+12}
B.e_N.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e0W.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e0X.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e0Y.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e0V(x,d))},
$S:2}
B.e0V.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0Z.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1_.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e10.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e11.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e12.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e13.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e16.prototype={
$3(d,e,f){return A.d1(A.dN(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.e14.prototype={
$1(d){var x=this.a
return x.f?null:x.a01()},
$S:2}
B.e15.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mR(D.SK))s=C.v5
else s=C.a.Y(s,"video/")||d.mR(D.n7)?C.qW:D.arg
x=this.b.a
w=y.p
return new A.D(C.kB,A.A(A.a([A.o(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garT(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e_O.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e_P.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cf5.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:105}
B.cf6.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:105}
B.fZX.prototype={
$2(d,e){return e===this.a},
$S:344}
B.fw_.prototype={
$1(d){return J.k(d)},
$S:16}
B.fBP.prototype={
$1(d){var x=this.b
B.i9N(C.Hx.ga7H(this.a)).bG(x.gCe(x),y.H)},
$S:132}
B.fBQ.prototype={
$1(d){return this.a.dd(0,null)},
$S:132}
B.fBR.prototype={
$0(){return null},
$S:11}
B.cfk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fBS.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
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
return new B.jD(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fG2.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fA1.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fA2.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfp.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.h3c.prototype={
$1(d){return new B.a_z(this.a,null)},
$S:z+16}
B.ddV.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.ddT.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.ddU.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0U.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a28()},
$S:12}
B.e0h.prototype={
$0(){var x=J.bI_(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0i.prototype={
$0(){var x=J.bI_(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_R.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_Q(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGy(this.c)}},
$S:0}
B.e_Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_S.prototype={
$0(){var x=J.bI_(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_X.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_W(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGy(this.c)}},
$S:0}
B.e_W.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0I.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e0J.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e0e.prototype={
$1(d){return new B.Wi(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e0b.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IP(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wm(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2i(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_V.prototype={
$1(d){this.a.adq(d,"No files selected.","Added")},
$S:487}
B.e0m.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e0l(),A.U(x).k("N<1,q>")))},
$S:0}
B.e0l.prototype={
$1(d){return d.a},
$S:z+2}
B.e00.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xP.cq().d_O(C.a2A,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jJ(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ab(j)
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ip("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.ip("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arg(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e0F.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e0G.prototype={
$1(d){return new B.a_B(this.a.a.c,this.b,null)},
$S:z+18}
B.e0H.prototype={
$1(d){return new B.a_y(this.a.a.c,this.b,null)},
$S:z+19}
B.e0c.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e0d.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0y.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IP(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8o(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ctw(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e0u(p),r),new B.e0v(),r.k("N<ak.E,q>")).c_(0,new B.e0w())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0x(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Ws(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0u.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e0t(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e0t.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0v.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e0w.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0x.prototype={
$1(d){var x=this.a
return new B.a_D(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e0z.prototype={
$1(d){return d.a},
$S:z+2}
B.e0A.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0s.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kA,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garT(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mR(D.n7)?C.tp:C.nP
p=!x||p.mR(D.n7)?"Play video":"View"
return new A.bN(new A.n(s,v,new A.bH(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CK,A.x(A.a([q,o,t,C.aB,B.a_C(!1,u,!1,w,p,new B.e0n(d),v),B.a_C(!1,u,!1,C.ju,"Share via QR",new B.e0o(d),"Letters/numbers QR code"),B.a_C(!1,u,!1,D.a3K,"Send to their Code",new B.e0p(d),"Enter someone else's personal code"),B.a_C(!1,u,!1,C.hC,"Download / save",new B.e0q(d),v),C.am,B.a_C(!1,u,!0,C.ej,"Delete",new B.e0r(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:805}
B.e0n.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e0o.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e0p.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e0q.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e0r.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e_Y.prototype={
$1(d){return d.a},
$S:z+2}
B.e_Z.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8q(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hl(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pC(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_U.prototype={
$1(d){var x=this.a
x.uv(new B.e_T(x,d,this.b),"Preparing\u2026")},
$S:487}
B.e_T.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wm(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGV(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0f.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e0g.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hbK(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e09.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.e05(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e06(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e07(s))
case 5:x=8
return A.b(r.b.iL(0,C.H5,new B.e08()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uu(),$async$$0)
case 9:s.ip("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e05.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e02(x,d,e))},
$S:212}
B.e02.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e06.prototype={
$1(d){return new B.adA(this.a.a,null)},
$S:z+21}
B.e07.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e08.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e0a.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jo(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8e(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3X(B.Jo(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arg(new B.e03(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hbJ(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e04()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e03.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e01(x,d,e))},
$S:212}
B.e01.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e04.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.e0k.prototype={
$1(d){return new B.a_E(this.a.a.c,null)},
$S:z+23}
B.e0j.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1N(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0E.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.n(v[2],x,new A.bH(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CK,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kA,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_C(!0,w,!1,C.mk,"My Code",new B.e0B(d),"Your personal code & QR \u2014 others send docs to you"),B.a_C(!1,w,!1,D.a3K,"Send to their Code",new B.e0C(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_C(!1,w,!1,C.zN,"Import backup",new B.e0D(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:805}
B.e0B.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e0C.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bH8()},
$S:0}
B.e0D.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e0R.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jy(D.St,x,C.a3F,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gH(D.St).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:814}
B.e0P.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0Q.prototype={
$0(){this.a.ajZ()
return null},
$S:0}
B.e0S.prototype={
$3(d,e,f){return A.d1(A.dN(f,new A.r(0,(1-e)*10)),e)},
$S:107}
B.e0T.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adC(e,w,v,this.b,x.e,x.ccz(w),new B.e0L(x,w),new B.e0M(x,v,w),new B.e0N(x,w),new B.e0O(x,w),null)},
$S:z+24}
B.e0L.prototype={
$0(){this.a.ahb(this.b)
return null},
$S:0}
B.e0M.prototype={
$0(){var x=this.a
return x.m(new B.e0K(x,this.b,this.c))},
$S:0}
B.e0K.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0N.prototype={
$0(){this.a.OP(this.b)
return null},
$S:0}
B.e0O.prototype={
$0(){this.a.ajM(this.b)
return null},
$S:0}
B.ddR.prototype={
$3(d,e,f){return A.d1(A.dN(f,new A.r(0,(1-e)*18)),e)},
$S:107}
B.ddS.prototype={
$3(d,e,f){return A.e1(C.z,f,e,null,null)},
$S:115}
B.dee.prototype={
$3(d,e,f){return A.d1(A.dN(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.ded.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.dea.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.deb.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dec.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.de8.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fX(w,C.z,x,new B.de6(this.a),C.h2,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.de7(this.a))
return C.bM},
$S:150}
B.de6.prototype={
$3(d,e,f){$.aU.x1$.push(new B.de4(this.a))
return C.bM},
$S:203}
B.de4.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.de1(x))},
$S:7}
B.de1.prototype={
$0(){return this.a.w=!0},
$S:0}
B.de7.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.de3(x))},
$S:7}
B.de3.prototype={
$0(){return this.a.w=!0},
$S:0}
B.de9.prototype={
$3(d,e,f){$.aU.x1$.push(new B.de5(this.a))
return C.bM},
$S:203}
B.de5.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.de2(x))},
$S:7}
B.de2.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddO.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddN(x,d))},
$S:2045}
B.ddN.prototype={
$0(){return this.a.f=this.b===C.vK},
$S:0}
B.ddP.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddM(x,d))},
$S:7}
B.ddM.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ddQ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddL(x,d))},
$S:7}
B.ddL.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ddH.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.ddI.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ddJ.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.ddK.prototype={
$1(d){return this.a.d.NK(0,A.dx(0,0,0,C.h.U(d),0,0))},
$S:6}
B.der.prototype={
$0(){var x=this.a.a
return B.rU(x.c,x.d)},
$S:2046}
B.des.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.det.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.deu.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dev.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dew.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dey.prototype={
$0(){var x=this.a
x.m(new B.dex(x))},
$S:0}
B.dex.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.den.prototype={
$1(d){return this.a.RJ(this.b)},
$S:12}
B.deo.prototype={
$1(d){return this.a.RI(this.b)},
$S:12}
B.def.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.deg.prototype={
$0(){return this.a.r=!0},
$S:0}
B.deh.prototype={
$1(d){return D.hEZ},
$S:z+25}
B.dem.prototype={
$2(d,e){if(d)B.Ws()},
$S:130}
B.dei.prototype={
$0(){return this.a.abe(this.b)},
$S:0}
B.dej.prototype={
$0(){return this.a.abb(this.b)},
$S:0}
B.dek.prototype={
$0(){return this.a.afB(this.b)},
$S:0}
B.del.prototype={
$0(){return this.a.a2V(this.b)},
$S:0}
B.ddG.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.deq.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.dep(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dep.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfr.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.cfs.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfq.prototype={
$2(d,e){return this.bnJ(d,e)},
bnJ(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wt(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2047}
B.fFF.prototype={
$1(d){if(d===D.aap&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fFG.prototype={
$0(){},
$S:11}
B.fGg.prototype={
bpj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ft0(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.ht_(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpj(d,e)},
$S:823}
B.fGf.prototype={
$1(d){var x=this
d.b=new B.fGe(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fGe.prototype={
$1(d){return this.bpi(d)},
bpi(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1O(n,m),$async$$1)
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
return A.b(B.ft0(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8n(m),$async$$1)
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
x(v=B.aBB.prototype,"gckd","Rh",0)
x(v,"gcl4","JZ",0)
x(v,"gckA","yN",0)
x(v=B.aFC.prototype,"gcct","afz",0)
x(v,"gccu","a00",0)
x(v,"gczZ","ajt",0)
x(v=B.aFF.prototype,"gccv","a01",0)
x(v,"gcA_","a3f",0)
x(B.aFD.prototype,"gccw","afA",0)
x(B.aBA.prototype,"gccB","ccC",4)
x(v=B.aFE.prototype,"gckB","a1c",0)
x(v,"gcyz","cyA",4)
x(v,"gb52","aB1",0)
x(v,"gcBu","ajT",0)
x(v,"gbTB","YM",0)
x(v,"gccA","ET",0)
x(B.aBC.prototype,"gb8Q","a3e",0)
x(B.aBz.prototype,"gccD","a02",0)
x(v=B.aBF.prototype,"gb3L","ciQ",4)
x(v,"gccx","afD",0)
x(v=B.aBD.prototype,"gcxw","a30",0)
x(v,"gb1H","afC",0)
w(B.aBy.prototype,"gazA","azB",8)
x(v=B.aBE.prototype,"gcnn","ahE",0)
x(v,"gbT4","ac2",0)
w(v,"gazA","azB",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aJ,[B.cth,B.aaL,B.avT,B.aEf,B.aHq,B.jD,B.adi,B.byM,B.FR,B.YF])
w(B.cti,B.cth)
w(B.b6V,B.aaL)
x(A.k8,[B.ctd,B.cte,B.ctf,B.ctc,B.ctg,B.ctj,B.ctk,B.ctl,B.ctm,B.ctn,B.cto,B.ctp,B.ctq,B.fyY,B.fYJ,B.fYL,B.fYK,B.fYY,B.fYZ,B.fBD,B.ddW,B.ddY,B.ddX,B.de0,B.fDA,B.fE3,B.ceW,B.cf2,B.cf3,B.ceZ,B.ceX,B.cf_,B.cf0,B.fYW,B.fYX,B.e0Y,B.e16,B.e14,B.e15,B.fw_,B.fBP,B.fBQ,B.cfk,B.fBS,B.fG2,B.fA1,B.fA2,B.cfp,B.h3c,B.ddV,B.ddT,B.e0U,B.e_Q,B.e_W,B.e0e,B.e_V,B.e0l,B.e0F,B.e0G,B.e0H,B.e0c,B.e0u,B.e0t,B.e0v,B.e0w,B.e0x,B.e0z,B.e0A,B.e0s,B.e_Y,B.e_Z,B.e_U,B.e0f,B.e06,B.e04,B.e0k,B.e0E,B.e0R,B.e0S,B.ddR,B.ddS,B.dee,B.ded,B.de8,B.de6,B.de4,B.de7,B.de9,B.de5,B.ddO,B.ddP,B.ddQ,B.ddK,B.den,B.deo,B.deh,B.cfr,B.cfs,B.fFF,B.fGf,B.fGe])
w(B.b6W,B.avT)
x(A.lR,[B.fYI,B.ddZ,B.de_,B.fDy,B.fDz,B.fE2,B.e_N,B.e0W,B.e0X,B.e0V,B.e0Z,B.e1_,B.e10,B.e11,B.e12,B.e13,B.e_O,B.e_P,B.fBR,B.ddU,B.e0h,B.e0i,B.e_R,B.e_S,B.e_X,B.e0I,B.e0J,B.e0b,B.e0m,B.e00,B.e0d,B.e0y,B.e0n,B.e0o,B.e0p,B.e0q,B.e0r,B.e0_,B.e_T,B.e0g,B.e09,B.e02,B.e07,B.e08,B.e0a,B.e01,B.e0j,B.e0B,B.e0C,B.e0D,B.e0P,B.e0Q,B.e0L,B.e0M,B.e0K,B.e0N,B.e0O,B.dea,B.deb,B.dec,B.de1,B.de3,B.de2,B.ddN,B.ddM,B.ddL,B.ddH,B.ddI,B.ddJ,B.der,B.des,B.det,B.deu,B.dev,B.dew,B.dey,B.dex,B.def,B.deg,B.dei,B.dej,B.dek,B.del,B.ddG,B.deq,B.dep,B.fFG])
x(A.ol,[B.adB,B.Oo,B.aaM,B.Pv,B.YE,B.Pu,B.FS])
x(A.ag,[B.a_A,B.Wh,B.Wl,B.Wi,B.a_z,B.Wj,B.a_B,B.a_y,B.QM,B.a_D,B.a_x,B.a_E])
x(A.ah,[B.aBB,B.aFC,B.aFF,B.aFD,B.aBA,B.aFE,B.aBC,B.aBz,B.aBF,B.aBD,B.aBy,B.aBE])
x(A.av,[B.ae4,B.aBx,B.bgm,B.adC,B.adA,B.bgn])
x(A.lr,[B.cf1,B.ceY,B.cf5,B.cf6,B.fZX,B.e05,B.e03,B.e0T,B.dem,B.cfq,B.fGg])
x(A.jL,[B.blR,B.byo])})()
A.ng(b.typeUniverse,JSON.parse('{"b6V":{"aaL":[]},"b6W":{"avT":[]},"a_A":{"ag":[],"v":[]},"aBB":{"ah":["a_A"]},"ae4":{"av":[],"v":[]},"Wh":{"ag":[],"v":[]},"Wl":{"ag":[],"v":[]},"aFC":{"ah":["Wh"]},"aFF":{"ah":["Wl"]},"blR":{"jL":[]},"Wi":{"ag":[],"v":[]},"aFD":{"ah":["Wi"]},"a_z":{"ag":[],"v":[]},"Wj":{"ag":[],"v":[]},"adC":{"av":[],"v":[]},"a_B":{"ag":[],"v":[]},"a_y":{"ag":[],"v":[]},"QM":{"ag":[],"v":[]},"a_D":{"ag":[],"v":[]},"adA":{"av":[],"v":[]},"a_x":{"ag":[],"v":[]},"a_E":{"ag":[],"v":[]},"aBA":{"ah":["a_z"]},"byo":{"jL":[]},"aFE":{"ah":["Wj"]},"aBx":{"av":[],"v":[]},"bgm":{"av":[],"v":[]},"aBC":{"ah":["a_B"]},"aBz":{"ah":["a_y"]},"aBF":{"ah":["QM"]},"aBD":{"ah":["a_D"]},"aBy":{"ah":["a_x"]},"aBE":{"ah":["a_E"]},"bgn":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.aC
return{J:x("no"),k:x("MQ()"),o:x("bq<q,q>"),F:x("zu"),g:x("aA<jD?>"),x:x("aA<~>"),V:x("R<ac>"),O:x("R<u>"),W:x("R<bk>"),Y:x("R<aa<q,Q>>"),t:x("R<aa<q,@>>"),r:x("R<jD>"),w:x("R<+file,name(mE,q)>"),u:x("R<cX>"),s:x("R<q>"),E:x("R<jL>"),a:x("R<e2>"),p:x("R<v>"),Z:x("R<H>"),G:x("bk"),A:x("cy<ah<ag>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bC<q,q>"),P:x("aa<q,@>"),f:x("aa<@,@>"),m:x("jY"),e:x("iAK"),af:x("F2"),U:x("jD"),b:x("cw"),C:x("aJ"),aK:x("yp"),ab:x("FR"),br:x("avT"),v:x("YF"),N:x("q"),X:x("bt<F>"),Q:x("mT"),D:x("e2"),aw:x("bl<q>"),cd:x("Y<aa<q,@>>"),c7:x("v"),ch:x("c7<ai<jD>>"),aW:x("c7<e2?>"),aY:x("c7<~>"),cx:x("adB"),b1:x("bn<ai<jD>>"),cf:x("bn<e2?>"),d4:x("bn<~>"),c4:x("aEf"),bG:x("aHq"),q:x("nG"),B:x("pU<FR>"),c6:x("pU<aaM>"),y:x("Q"),i:x("F"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("aa<q,@>?"),l:x("jD?"),R:x("aJ?"),c:x("YF?"),d:x("+answerQr,transfer(q,aA<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Oo,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e2?"),cm:x("adi?"),bk:x("aEf?"),ag:x("aHq?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b76=new A.ax(C.aD,2,C.r,-1)
D.cay=new A.a7(C.a5,C.a9,C.x,C.a5N,null,null)
D.b8M=new A.n(null,null,null,C.mJ,null,D.cay,C.n)
D.bah=new A.n(null,null,null,C.mJ,null,C.Iu,C.n)
D.agZ=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ait=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ajw=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alg=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fQm=new A.B("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h4h=new A.B("Share the access code and member password with your team. They only sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dnz=x([D.fQm,C.am,D.h4h],y.p)
D.bzp=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dnz,null)
D.h8M=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fUT=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dF2=x([D.h8M,C.am,D.fUT],y.p)
D.bzz=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dF2,null)
D.h4W=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fYR=new A.B("Enter the access code and password from your organization.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dCL=x([D.h4W,C.am,D.fYR],y.p)
D.bzJ=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCL,null)
D.bG0=new A.P(16,10,16,28)
D.bG8=new A.P(16,14,16,4)
D.bHo=new A.P(20,0,20,16)
D.bHV=new A.P(20,8,20,16)
D.ao8=new A.P(24,22,24,20)
D.a3K=new A.a_(63394,"MaterialIcons",!1)
D.arg=new A.a_(63515,"MaterialIcons",!1)
D.bVj=new A.a_(983813,"MaterialIcons",!1)
D.bSr=new A.a_(62867,"MaterialIcons",!1)
D.bWf=new A.ae(D.bSr,44,C.c,null,null,null)
D.bXk=new A.ae(C.kb,null,C.ab,null,null,null)
D.bYI=new A.ae(C.jv,18,null,null,null,null)
D.c_w=new A.ae(D.a3K,26,C.c,null,null,null)
D.c06=new A.ae(C.Dr,null,null,null,null,null)
D.c0I=new A.ae(C.Dz,null,null,null,null,null)
D.c1U=new A.ae(L.a3V,null,null,null,null,null)
D.c2f=new A.ae(C.hR,16,null,null,null,null)
D.c5V=new A.ae(C.to,16,null,null,null,null)
D.bWx=new A.ae(C.mk,null,null,null,null,null)
D.c6N=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1f=new A.ae(C.HK,null,null,null,null,null)
D.c6S=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c1f,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bWS=new A.ae(C.DC,null,null,null,null,null)
D.c72=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cWC=x([C.fq,C.b2,C.aD],y.O)
D.ccv=new A.a7(C.ay,C.aC,C.x,D.cWC,null,null)
D.cW0=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.St=x([C.fq,C.aD],y.O)
D.SK=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dwM=x([C.mR,C.aD],y.O)
D.erL={iceServers:0}
D.aMT={urls:0}
D.dIX=new A.bq(D.aMT,["stun:stun.l.google.com:19302"],y.o)
D.dIW=new A.bq(D.aMT,["stun:stun1.l.google.com:19302"],y.o)
D.dcQ=x([D.dIX,D.dIW],A.aC("R<aa<q,q>>"))
D.dI2=new A.bq(D.erL,[D.dcQ],A.aC("bq<q,@>"))
D.JB=new B.Oo(0,"lanDirect")
D.U6=new B.Oo(1,"cloudStash")
D.dVT=new B.Oo(2,"inlineInstant")
D.U7=new B.Oo(3,"webrtcLink")
D.Ay=new B.Oo(4,"videoCloud")
D.h4g=new A.B("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLG=x([C.at2,C.ae,D.h4g],y.p)
D.fiF=new A.c8(C.aM,C.b9,C.i,C.l,null,C.p,null,0,D.cLG,null)
D.ezg=new A.D(C.co,D.fiF,null)
D.fGJ=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.IZ,null,null,null)
D.fQW=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fGJ,null,C.K,null,null,null,null,null,null,null)
D.eyr=new A.D(C.CR,D.fQW,null)
D.beR=new A.cj(C.z,null,null,D.eyr,null)
D.eFy=new A.cK(0,null,0,28,null,null,D.beR,null)
D.eFS=new B.aaM(0,"RTCDataChannelConnecting")
D.aSm=new B.aaM(1,"RTCDataChannelOpen")
D.aSn=new B.aaM(3,"RTCDataChannelClosed")
D.eFT=new B.FS(0,"RTCIceConnectionStateNew")
D.eFU=new B.FS(1,"RTCIceConnectionStateChecking")
D.eFV=new B.FS(2,"RTCIceConnectionStateCompleted")
D.eFW=new B.FS(3,"RTCIceConnectionStateConnected")
D.eFX=new B.FS(4,"RTCIceConnectionStateCount")
D.eFY=new B.FS(5,"RTCIceConnectionStateFailed")
D.eFZ=new B.FS(6,"RTCIceConnectionStateDisconnected")
D.aSo=new B.FS(7,"RTCIceConnectionStateClosed")
D.aSp=new B.YE(0,"RTCIceGatheringStateNew")
D.eG_=new B.YE(1,"RTCIceGatheringStateGathering")
D.aap=new B.YE(2,"RTCIceGatheringStateComplete")
D.aaq=new B.Pu(0,"RTCPeerConnectionStateClosed")
D.aSq=new B.Pu(1,"RTCPeerConnectionStateFailed")
D.aSr=new B.Pu(2,"RTCPeerConnectionStateDisconnected")
D.aSs=new B.Pu(3,"RTCPeerConnectionStateNew")
D.aSt=new B.Pu(4,"RTCPeerConnectionStateConnecting")
D.aSu=new B.Pu(5,"RTCPeerConnectionStateConnected")
D.eG0=new B.Pv(0,"RTCSignalingStateStable")
D.eG1=new B.Pv(1,"RTCSignalingStateHaveLocalOffer")
D.eG2=new B.Pv(2,"RTCSignalingStateHaveRemoteOffer")
D.eG3=new B.Pv(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eG4=new B.Pv(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSv=new B.Pv(5,"RTCSignalingStateClosed")
D.fnL=new A.au(160,48)
D.bg6=new A.fi(2,null,null,null,null,C.aD,null,null,null,null)
D.fpk=new A.a5(16,16,D.bg6,null)
D.fUd=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fqP=new A.b0(D.fUd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0V=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fqT=new A.b0(D.h0V,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9P=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new A.b0(D.h9P,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTO=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.frp=new A.b0(D.fTO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h56=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVD=new A.b0(D.h56,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6y=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.frT=new A.b0(D.h6y,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbi=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new A.b0(D.hbi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9e=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fse=new A.b0(D.h9e,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hat=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ft1=new A.b0(D.hat,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSo=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ftz=new A.b0(D.fSo,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2P=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ftU=new A.b0(D.h2P,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWx=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fuq=new A.b0(D.fWx,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbn=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fuu=new A.b0(D.hbn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSE=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fuA=new A.b0(D.fSE,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRi=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fuP=new A.b0(D.fRi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fO1=new A.B("NGMY DOC SHARE",null,C.aX2,null,null,null,null,null,null,null,null,null)
D.fPt=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fQu=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fVj=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fVH=new A.B("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fWI=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fXf=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_7=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h1Y=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.h2h=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2B=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h3c=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3j=new A.B("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.h3I=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h73=new A.B("Share files & videos\nwith a scan.",null,C.aX5,null,null,null,null,null,null,null,null,null)
D.h7n=new A.B("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hEZ=new B.a_x(null)
D.adM=new B.adB(0,"docShare")
D.adN=new B.adB(1,"gate")
D.Xb=new B.adB(2,"gateNoIndividual")})();(function staticFields(){$.aQg=null
$.fqB=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahG=A.T(y.N,A.aC("mE"))
$.S9=A.T(y.N,y.D)
$.frh=A.T(y.N,A.aC("adi"))
$.cfj=A.T(y.S,A.aC("byM"))
$.hsZ=1
$.ihV=null
$.ihU=null
$.i95=null
$.hhe=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iBe","hLy",()=>new B.cti())
x($,"iz8","hlo",()=>C.a.q(A.bB(A.bB(A.bB(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["J/rg3UqbFzjrNSm4no6k3MdxpUU="]=a.current})($__dart_deferred_initializers__);