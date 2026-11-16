((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crX:function crX(){},
hZJ(d){var x=null,w=new B.b6a(d,D.eyZ,new A.pQ(x,x,y.c6),new A.pQ(x,x,y.B))
w.bCc(d)
return w},
b6a:function b6a(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crS:function crS(d){this.a=d},
crT:function crT(d){this.a=d},
crU:function crU(d){this.a=d},
crR:function crR(d){this.a=d},
crV:function crV(d){this.a=d},
hZK(d,e){var x=y.N
x=new B.b6b(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCd(d,e)
return x},
b6b:function b6b(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crY:function crY(d){this.a=d},
crZ:function crZ(d){this.a=d},
cs_:function cs_(d){this.a=d},
cs0:function cs0(d){this.a=d},
cs1:function cs1(d){this.a=d},
cs2:function cs2(d){this.a=d},
cs3:function cs3(d){this.a=d},
cs4:function cs4(d){this.a=d},
hdJ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wU.GR(x,"ngmy_doc_share_v1",new B.fwv(),1)},
i5u(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eE(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.wS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cJ.aN(d)
return x}catch(w){return v}return v},
Si(d,e){return B.ily(d,e)},
ily(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Si=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPx
x=7
return A.b(o==null?$.aPx=B.hdJ():o,$async$Si)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mj(s,"blobs","readwrite")
C.iB.md(J.mi(q,"blobs"),r,d)
x=8
return A.b(J.ov(q),$async$Si)
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
return A.i($async$Si,w)},
Sh(d){return B.ilx(d)},
ilx(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPx
x=7
return A.b(o==null?$.aPx=B.hdJ():o,$async$Sh)
case 7:s=f
r=J.mj(s,"blobs","readonly")
x=8
return A.b(C.iB.xN(J.mi(r,"blobs"),d),$async$Sh)
case 8:q=f
x=9
return A.b(J.ov(r),$async$Sh)
case 9:o=B.i5u(q)
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
return A.i($async$Sh,w)},
ai7(d){return B.ilw(d)},
ilw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ai7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPx
x=7
return A.b(p==null?$.aPx=B.hdJ():p,$async$ai7)
case 7:s=f
r=J.mj(s,"blobs","readwrite")
C.iB.Gn(J.mi(r,"blobs"),d)
x=8
return A.b(J.ov(r),$async$ai7)
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
return A.i($async$ai7,w)},
fwv:function fwv(){},
i89(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqZ(w,v))}return u},
hEQ(d,e){var x,w={},v=A.aYd("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fVX(w,v,e)
C.wW.za(v,"change",new B.fVZ(w,v,!1))
C.wW.za(v,"cancel",new B.fVY(w))
$.eX.mE()
v.click()
A.bQ(C.akS,new B.fVW(w),y.H)},
fVX:function fVX(d,e,f){this.a=d
this.b=e
this.c=f},
fVZ:function fVZ(d,e,f){this.a=d
this.b=e
this.c=f},
fVY:function fVY(d){this.a=d},
fVW:function fVW(d){this.a=d},
DK(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUw()?3:4
break
case 3:x=5
return A.b(B.hzE(e,d,s,!0,!1,f,g,h,!1,i),$async$DK)
case 5:x=1
break
case 4:x=6
return A.b(B.RW(d,s,f,g,h,i),$async$DK)
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
return A.b(B.Jr(s,d),$async$DK)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fs0(s,d),$async$DK)
case 14:x=12
return A.b(r.hzE(q,p,o,n,m,l,k,j,a1,i),$async$DK)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ec(new B.fWb(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ec(new B.fWc(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DK,w)},
RW(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RW=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0V(e),$async$RW)
case 3:u=k
x=4
return A.b(B.aqE(d,e,!1),$async$RW)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jr(e,d),$async$RW)
case 7:if(k){v=D.acA
x=1
break}x=8
return A.b(B.Wb(e),$async$RW)
case 8:v=t?D.Wy:D.acB
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0T(d,e)){v=D.acA
x=1
break}x=11
return A.b(B.Wb(e),$async$RW)
case 11:v=t?D.Wy:D.acB
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h8F(d,e)){v=D.acA
x=1
break}x=14
return A.b(B.Wb(e),$async$RW)
case 14:v=D.Wy
x=1
break
case 13:v=t?D.Wy:D.acB
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RW,w)},
fs0(d,e){var x=0,w=A.j(y.y),v
var $async$fs0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0T(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0V(d),$async$fs0)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fs0,w)},
hzE(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ec(new B.fzb(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
huC(d,e,f,g,h,i,j){return new B.a_o(e,j,d,g,h,i,f,null)},
fB5(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fB5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fB8(A.Q(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fB5)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fB5,w)},
fBA(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fBA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fBC(A.Q(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fBA)
case 3:q=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
r.U$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBA,w)},
hdU(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bt(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fOq(d,e){var x=0,w=A.j(y.H),v
var $async$fOq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wb(e),$async$fOq)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fOq,w)},
fWb:function fWb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWc:function fWc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adp:function adp(d,e){this.a=d
this.b=e},
fzb:function fzb(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_o:function a_o(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aB_:function aB_(){this.c=this.a=this.d=null},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcm:function dcm(d){this.a=d},
dco:function dco(d){this.a=d},
dcn:function dcn(d){this.a=d},
dcr:function dcr(){},
dcq:function dcq(d){this.a=d},
adS:function adS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDD:function aDD(d,e){this.a=d
this.b=e},
aGL:function aGL(d,e,f){this.a=d
this.b=e
this.c=f},
fB8:function fB8(d,e,f){this.a=d
this.b=e
this.c=f},
fB6:function fB6(d){this.a=d},
fB7:function fB7(d,e,f){this.a=d
this.b=e
this.c=f},
fBC:function fBC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBB:function fBB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdG(d,e,f,g,h){return B.hUA(d,e,f,g,h)},
hUA(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdG=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dM(d,new B.cdH(s,e,h,g,f,q),y.g),y.l),$async$cdG)
case 3:r=p.aT(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdG,w)},
b0Q(d,e,f,g,h){return B.hUB(d,e,f,g,h)},
hUB(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0Q=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aw8("GET",d)
o=A.h55()
if(o==null)o=new A.MH(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dh(0,C.GF),$async$b0Q)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CU(),$async$b0Q)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cl(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0Q,w)},
b0P(d){return B.hUy(d)},
hUy(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.oo),$async$b0P)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aQ(0,A.mc(A.ma(p.e)).cJ(0,p.w),null)
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
return A.i($async$b0P,w)},
cdF(d){return B.hUz(d)},
hUz(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.qz),$async$cdF)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mc(A.ma(q.e)).cJ(0,q.w)
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
return A.i($async$cdF,w)},
cdH:function cdH(d,e,f,g,h,i){var _=this
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
Jp(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hUG(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jp(C.a.b2(t,u.length))}return null},
hUH(d){var x=B.Jp(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hUC(){var x,w=$.os(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a7Y(d){return B.hUD(d)},
hUD(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bO),$async$a7Y)
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
return A.i($async$a7Y,w)},
a7Z(d,e){return B.hUE(d,e)},
hUE(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7Z=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cN,null),$async$a7Z)
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
return A.i($async$a7Z,w)},
Ck(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ck=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Ck)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jp(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8_(r),$async$Ck)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7Y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ck)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jp(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ck)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hUC()
x=14
return A.b(B.a8_(m),$async$Ck)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7Z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 15:k=f
x=16
return A.b(B.a7Z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ck)
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
return A.i($async$Ck,w)},
a8_(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jp(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7Y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8_)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8_,w)},
a80(d,e,f,g){return B.hUI(d,e,f,g)},
hUI(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a80=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jp(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8_(r),$async$a80)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.cdN())>1048576||g.aV(d,new B.cdO())){v=B.Fl(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8b("myCode",d,a0),$async$a80)
case 4:u=a3
try{t=C.X.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cs(s)||J.ad(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fl(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0Y(u,g.gI(d),a0),$async$a80)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.os().az(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dM(d,new B.cdP(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0R(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a80)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a80,w)},
Fl(d,e,f,g,h){return B.hUF(d,e,f,g,h)},
hUF(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fl=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cG(a6,0,new B.cdJ())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.os().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cO.az(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
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
return A.b(a0.C(),$async$Fl)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pn(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abE(a1.a,a4,"media",a1.d,a2).xK(m,n,new A.Ez(!0,q.c)),$async$Fl)
case 12:J.c7(r,m);++o
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
return A.b(B.aS9(r),$async$Fl)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dM(a6,new B.cdK(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0R(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fl)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aS9(r),$async$Fl)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fl,w)},
b0R(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7Y(t),$async$b0R)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cdI(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7Z(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0R,w)},
Oj(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oj=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7Y("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oj)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cs(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aT(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b0S(k,a0),$async$Oj)
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
return A.b(B.b0X(h),$async$Oj)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wi(g,a0),$async$Oj)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdL(),q),n)
d=A.C(new A.Y(r,new B.cdM(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7Z("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oj)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
b0S(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cs(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aT(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
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
break}i=B.ips(k,j)
C.d.v(s,i)
x=5
return A.b(B.DI(l,m,"Received via My Code",t,e,i),$async$b0S)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aS9(s),$async$b0S)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0S,w)},
cdN:function cdN(){},
cdO:function cdO(){},
cdP:function cdP(){},
cdJ:function cdJ(){},
cdK:function cdK(){},
cdI:function cdI(){},
cdL:function cdL(){},
cdM:function cdM(){},
fW8(d,e){var x=0,w=A.j(y.H)
var $async$fW8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ec(new B.fW9(e),!1,null,y.H)),$async$fW8)
case 2:return A.h(null,w)}})
return A.i($async$fW8,w)},
bFX(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFX=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cs(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ec(new B.fWa(g,e,f),!1,null,y.y)),$async$bFX)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFX,w)},
fW9:function fW9(d){this.a=d},
fWa:function fWa(d,e,f){this.a=d
this.b=e
this.c=f},
W8:function W8(d,e){this.c=d
this.a=e},
aEZ:function aEZ(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dYX:function dYX(d,e){this.a=d
this.b=e},
Wc:function Wc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aF1:function aF1(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_5:function e_5(d){this.a=d},
e_6:function e_6(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_4:function e_4(d,e){this.a=d
this.b=e},
e_8:function e_8(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_a:function e_a(d,e){this.a=d
this.b=e},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_c:function e_c(d,e){this.a=d
this.b=e},
e_d:function e_d(d){this.a=d},
e_g:function e_g(){},
e_e:function e_e(d){this.a=d},
e_f:function e_f(d,e){this.a=d
this.b=e},
bl4:function bl4(){},
W9:function W9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aF_:function aF_(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dYY:function dYY(d){this.a=d},
dYZ:function dYZ(d){this.a=d},
h8G(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hUK(d){var x=d.l3
if(x>=0)return x
return 4.99},
hUJ(d){var x=d.m6,w=y.N
w=x.jq(x,new B.cdR(),w,w)
return w},
hpC(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdS(),w,w)
return w},
b0V(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b0V)
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
return A.i($async$b0V,w)},
a82(d,e){var x=0,w=A.j(y.H),v,u
var $async$a82=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a82)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a82)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a82,w)},
Wb(d){var x=0,w=A.j(y.H),v,u
var $async$Wb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wb)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wb,w)},
h8F(d,e){var x,w,v
if(B.hUK(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hUJ(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b0T(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hpC(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hpD(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hpC(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqF(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqF)
case 7:s=f
r=A.w(p)
r=A.el(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aqF,w)},
aqG(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqF(d),$async$aqG)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqG)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqG,w)},
aqE(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h8G(d)
if(u<=0){v=!1
x=1
break}if(B.h8F(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqF(e),$async$aqE)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqE,w)},
b0U(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jr(e,d),$async$b0U)
case 3:if(g){v=-1
x=1
break}u=B.h8G(d)
if(u<=0){v=-1
x=1
break}if(B.h8F(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqF(e),$async$b0U)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0U,w)},
cdU(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jr(e,d),$async$cdU)
case 3:if(h){v=!1
x=1
break}v=B.aqE(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdU,w)},
cdT(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdT=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdU(d,u,i.gUw()),$async$cdT)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdT,w)},
a81(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a81=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUw()){v=!0
x=1
break}if(B.b0T(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.TQ),$async$a81)
case 5:x=k?3:4
break
case 3:B.hpD(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a81)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.ld(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TQ,"Doc Share for Organizations"),$async$a81)
case 7:if(!k){v=!1
x=1
break}B.hpD(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a81)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a81,w)},
cdR:function cdR(){},
cdS:function cdS(){},
fX1(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fX1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fX1)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.foo.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.foo.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fX1,w)},
isk(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.foo.br($.foo,new B.fX3(d))},
fX3:function fX3(d){this.a=d},
fq_(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fq_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jo,null,y.H),$async$fq_)
case 3:C.Be.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mE()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fq_,w)},
ah1(d,e,f){var x=0,w=A.j(y.H),v
var $async$ah1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fp3.n(0,d,new B.ad6(A.bq(e,!0,v)))
x=3
return A.b(A.aA(),$async$ah1)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.X.aw(A.I(["parts",e,"size",f],v,y.C),null)),$async$ah1)
case 2:return A.h(null,w)}})
return A.i($async$ah1,w)},
agW(d){return B.ia9(d)},
ia9(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fp3.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$agW)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cs(s)){v=null
x=1
break}o=J.b8(s,new B.ftA(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ad6(r)
$.fp3.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agW,w)},
RM(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Si(d,u),$async$RM)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RM,w)},
aPU(d){return B.ia7(d)},
ia7(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sh(d),$async$aPU)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aPU)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cJ.aN(r)
x=!J.cs(q)?9:10
break
case 9:B.RM(d,q)
x=11
return A.b(J.h9(s,d),$async$aPU)
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
return A.i($async$aPU,w)},
i5X(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cd(J.eE(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cd(A.wS(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
return A.f3(null,y.K)},
a2T(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fzn(r,t),!1,s)
A.fB(r,"error",new B.fzo(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.NR,new B.fzp())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2T,w)},
aQd(d,e,f){return B.icw(d,e,f)},
icw(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQd=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.V(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a2T(i),$async$aQd)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Si(o,p),$async$aQd)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c7(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ah1(k,j,s),$async$aQd)
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
return A.i($async$aQd,w)},
aQc(d,e,f){return B.icv(d,e,f)},
icv(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQc=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQd(d,e,f),$async$aQc)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2T(f),$async$aQc)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S2.n(0,s,r)
x=11
return A.b(B.RM(s,r),$async$aQc)
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
return A.i($async$aQc,w)},
Cl(d,e,f,g,h,i){return B.hUT(d,e,f,g,h,i)},
hUT(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cO.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b10(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RM(s,d),$async$Cl)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cl)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cR.gcu().aN(d)),$async$Cl)
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
return A.b(B.Bi(e),$async$Cl)
case 12:j=a2
J.c7(j,m)
x=13
return A.b(B.Hg(e,j),$async$Cl)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cl,w)},
Wd(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wd=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bi(d),$async$Wd)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cO.az(99999)
n=p.b
l=o.type
l.toString
k=B.hpF(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b10(),null)
$.ahr.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2T(o),$async$Wd)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S2.n(0,h,g)
B.RM(h,g)
x=9
break
case 10:x=11
return A.b(B.aQc(d,m,o),$async$Wd)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wd)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wd,w)},
h8K(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h8K=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hpF(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Js(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cl(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8K,w)},
Js(d,e,f,g,h,i){return B.hUS(d,e,f,g,h,i)},
hUS(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Js=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cO.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lh(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Js)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cs(m)){x=6
break}J.fW(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.SQ(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Si(k,l),$async$Js)
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
return A.b(j.a1(0),$async$Js)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Si(k,new Uint8Array(A.cd(n))),$async$Js)
case 15:J.c7(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ah1(r,q,g),$async$Js)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b10(),null)
x=17
return A.b(B.Bi(d),$async$Js)
case 17:e=a6
J.c7(e,f)
x=18
return A.b(B.Hg(d,e),$async$Js)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Js,w)},
Wf(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wf=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahr.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2T(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agW(s),$async$Wf)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sh(u[o]),$async$Wf)
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
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S2.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rT(d,e),$async$Wf)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S2.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
hpF(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gam(x):""
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
rT(d,e){return B.hUU(d,e)},
hUU(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rT=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S2.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahr.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2T(s),$async$rT)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S2.n(0,f,r)
B.RM(f,r)
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
return A.b(B.agW(f),$async$rT)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azN(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sh(g[l]),$async$rT)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apU()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S2.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPU(f),$async$rT)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S2.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wf(a0,a1,0,g),$async$rT)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cd(i))
$.H6.n(0,f,h)
$.S2.n(0,f,h)
B.RM(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rT,w)},
hUX(d){var x,w,v=$.ahr.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hUY(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hUV(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqM(d,e,f,g,h){return B.hUW(d,e,f,g,h)},
hUW(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqM=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahr.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2T(s),$async$aqM)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rT(g,e),$async$aqM)
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
return A.b(n.iB(d).xK(h,r,new A.Ez(!0,e.c)),$async$aqM)
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
return A.i($async$aqM,w)},
hpH(d,e,f,g,h){var x,w,v,u,t=$.hpG
$.hpG=t+1
x=Date.now()
w=""+1000*x+"_"+C.cO.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ce4.n(0,t,new B.bxW(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azN(u)))
return t},
h8L(d){var x=0,w=A.j(y.H)
var $async$h8L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8L,w)},
Jt(d,e){var $async$Jt=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahr.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.V(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qu(B.Wf(d,e,p,o<q?o:q),$async$Jt,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qu(A.GE(n),$async$Jt,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qu(B.agW("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jt,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qu(B.Sh(h[l]),$async$Jt,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qu(A.GE(k),$async$Jt,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qu(B.rT(d,e),$async$Jt,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qu(A.GE(A.wS(j,p,o<i?o:i)),$async$Jt,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qu(null,0,w)
case 2:return A.qu(t.at(-1),1,w)}})
var x=0,w=A.hyx($async$Jt,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hAk(w)},
b12(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b12=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ce4.h(0,d)
if(t==null||J.cs(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5F(),$async$b12)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b12,w)},
We(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$We=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ce4.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5F(),$async$We)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ah1(r.c,u,r.z),$async$We)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b10(),null)
u=r.a
x=5
return A.b(B.Bi(u),$async$We)
case 5:s=f
J.c7(s,t)
x=6
return A.b(B.Hg(u,s),$async$We)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$We,w)},
a88(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a88=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ce4.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ai7(u[s]),$async$a88)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
ce6(d,e,f){var x=0,w=A.j(y.H)
var $async$ce6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCX(d,e,f),$async$ce6)
case 2:return A.h(null,w)}})
return A.i($async$ce6,w)},
ce7(d,e,f){var x=0,w=A.j(y.H)
var $async$ce7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCY(d,e,f),$async$ce7)
case 2:return A.h(null,w)}})
return A.i($async$ce7,w)},
Fm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bi(d),$async$Fm)
case 2:p=g
J.nT(p,new B.ce5(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahr.W(0,e)
x=3
return A.b(B.agW(v),$async$Fm)
case 3:u=g
$.fp3.W(0,v)
x=4
return A.b(A.aA(),$async$Fm)
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
return A.b(B.ai7(s[q]),$async$Fm)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ai7(v),$async$Fm)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fm)
case 14:return A.h(null,w)}})
return A.i($async$Fm,w)},
b11(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b11=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rT(d,e),$async$b11)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fq_(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b11,w)},
Bi(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bi)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fzq(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bi,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fDC(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.X.aw(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bCX(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bi(d),$async$bCX)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxB(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG0(f))
x=4
return A.b(B.Hg(d,u),$async$bCX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCX,w)},
bCY(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bi(d),$async$bCY)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxC(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOs(f))
x=4
return A.b(B.Hg(d,u),$async$bCY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCY,w)},
ad6:function ad6(d){this.a=d},
ftA:function ftA(){},
fzn:function fzn(d,e){this.a=d
this.b=e},
fzo:function fzo(d){this.a=d},
fzp:function fzp(){},
ce5:function ce5(d){this.a=d},
bxW:function bxW(d,e,f,g,h,i,j,k,l){var _=this
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
fzq:function fzq(){},
fDC:function fDC(){},
fxB:function fxB(d){this.a=d},
fxC:function fxC(d){this.a=d},
a89(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a89=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.cea())?3:4
break
case 3:x=5
return A.b(B.b13(d,e),$async$a89)
case 5:u=g
if(u!=null){t=u.c
B.Ol(d,u.b,e,t)}v=u
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
return A.b(B.b0Z(s),$async$a89)
case 10:case 9:if(g){v=new A.R7(1,D.Tt,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wg(d,e),$async$a89)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wl(!0,!0,d,e),$async$a89)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ol(d,D.Ai,e,t)
v=new A.R7(p,D.Ai,t)
x=1
break}v=B.ce9(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
Wg(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8b(null,d,e),$async$Wg)
case 3:p=g
try{u=C.X.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cs(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0Y(p,d.length,e),$async$Wg)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ce7(e,C.d.gH(d).a,r.b),$async$Wg)
case 7:case 6:q=r.a
x=8
return A.b(B.Ol(d,D.Tt,e,q),$async$Wg)
case 8:v=new A.R7(d.length,D.Tt,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
Wh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mL(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8a(d,e),$async$Wh)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ce2(s,d,e,t),$async$Wh)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0Z(t),$async$Wh)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rT(e,d),$async$Wh)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wg(A.a([d],y.r),e),$async$Wh)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
Wj(){var x=0,w=A.j(y.H)
var $async$Wj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h8E(),$async$Wj)
case 2:x=3
return A.b(B.aSv(),$async$Wj)
case 3:return A.h(null,w)}})
return A.i($async$Wj,w)},
a8a(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b10()
x=3
return A.b(B.ce6(e,d.a,u),$async$a8a)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
Ol(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ol=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tt&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8a(p,f),$async$Ol)
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
return A.b(B.ce1(o,p,u,f),$async$Ol)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ce2(o,p,f,t),$async$Ol)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ce0(o,u,p,f),$async$Ol)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ol,w)},
b13(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b13=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ce8(e,d),$async$b13)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wl(!1,!0,d,e),$async$b13)
case 4:u=g
if(u!=null){t=u.b
v=new A.R7(u.a,D.Ai,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b13,w)},
ce8(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ce8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wf(d,s,0,1),$async$ce8)
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
return A.i($async$ce8,w)},
ce9(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ce9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8b(null,d,e),$async$ce9)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hpE(u)
if(t.length>800){v=null
x=1
break}v=new A.R7(d.length,D.dPk,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce9,w)},
aqN(d,e,f){return B.hV0(d,e,f)},
hV0(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h8J(g)?3:4
break
case 3:x=5
return A.b(B.ce3(g),$async$aqN)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fn(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b0X(q),$async$aqN)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wi(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h8I(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wi(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Ju(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Ju(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Ju(h,d,a0)
x=1
break}if(J.eH(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wi(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqN,w)},
Ju(d,e,f){return B.hUZ(d,e,f)},
hUZ(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ju=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0P(r),$async$Ju)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0P(A.cD(s,0,null)),$async$Ju)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cs(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdG(o,r,a1,n,a2),$async$Ju)
case 11:m=a4
x=J.cs(m)?12:13
break
case 12:x=14
return A.b(B.cdF(q),$async$Ju)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wi(l,a2),$async$Ju)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cs(m)?null:m
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
return A.i($async$Ju,w)},
a8b(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8b=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rT(f,r),$async$a8b)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cR.gcu().aN(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.aw(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8b,w)},
Wi(d,e){return B.hV_(d,e)},
hV_(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wi=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aQ(0,a2,null)
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
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cJ.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cl(i,a3,d,k,l,o),$async$Wi)
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
return A.i($async$Wi,w)},
Ok:function Ok(d,e){this.a=d
this.b=e},
cea:function cea(){},
a2s(d){var x=A.Q(d).ax.a===C.J,w=x?D.ai8:D.afG,v=x?D.ajV:C.c,u=x?C.aS:C.a_,t=x?C.bL:C.an,s=x?D.ah5:C.bh
return new A.aI_([w,s,v,u,t,x?C.fp:C.bR])},
hFH(d,e){var x=e?C.w.j(0.72):C.aU
return A.cg(null,x,!0,null,new B.h0j(e),d,null,!0,!0,y.N)},
cdQ(d,e,f,g,h,i,j,k,l){return new B.Wa(e,l,d,f,k,j,g,h,i,null)},
a_q(d,e,f,g,h,i,j){return new B.bfD(g,h,j,e,i,d,f,null)},
h0j:function h0j(d){this.a=d},
a_n:function a_n(d,e){this.c=d
this.a=e},
aAZ:function aAZ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcl:function dcl(d){this.a=d},
dcj:function dcj(d){this.a=d},
dck:function dck(d){this.a=d},
bxy:function bxy(){},
Wa:function Wa(d,e,f,g,h,i,j,k,l,m){var _=this
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
aF0:function aF0(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_3:function e_3(d){this.a=d},
dZr:function dZr(d,e){this.a=d
this.b=e},
dZs:function dZs(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d,e,f){this.a=d
this.b=e
this.c=f},
dZ_:function dZ_(d){this.a=d},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dZ6:function dZ6(d,e,f){this.a=d
this.b=e
this.c=f},
dZ5:function dZ5(d){this.a=d},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZo:function dZo(d,e,f){this.a=d
this.b=e
this.c=f},
dZl:function dZl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZ4:function dZ4(d){this.a=d},
dZw:function dZw(d){this.a=d},
dZv:function dZv(){},
dZa:function dZa(d){this.a=d},
dZP:function dZP(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZR:function dZR(d,e){this.a=d
this.b=e},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZI:function dZI(d,e){this.a=d
this.b=e},
dZE:function dZE(d){this.a=d},
dZD:function dZD(d){this.a=d},
dZF:function dZF(){},
dZG:function dZG(){},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZJ:function dZJ(){},
dZK:function dZK(d){this.a=d},
dZC:function dZC(d,e){this.a=d
this.b=e},
dZx:function dZx(d){this.a=d},
dZy:function dZy(d){this.a=d},
dZz:function dZz(d){this.a=d},
dZA:function dZA(d){this.a=d},
dZB:function dZB(d){this.a=d},
dZ7:function dZ7(){},
dZ8:function dZ8(d){this.a=d},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d,e,f){this.a=d
this.b=e
this.c=f},
dZp:function dZp(d){this.a=d},
dZq:function dZq(d,e,f){this.a=d
this.b=e
this.c=f},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZf:function dZf(d){this.a=d},
dZc:function dZc(d,e,f){this.a=d
this.b=e
this.c=f},
dZg:function dZg(d){this.a=d},
dZh:function dZh(d){this.a=d},
dZi:function dZi(){},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZd:function dZd(d){this.a=d},
dZb:function dZb(d,e,f){this.a=d
this.b=e
this.c=f},
dZe:function dZe(){},
dZu:function dZu(d){this.a=d},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZL:function dZL(d){this.a=d},
dZM:function dZM(d,e){this.a=d
this.b=e},
dZN:function dZN(d){this.a=d},
e_0:function e_0(d){this.a=d},
dZZ:function dZZ(d){this.a=d},
e__:function e__(d){this.a=d},
e_1:function e_1(){},
e_2:function e_2(d,e){this.a=d
this.b=e},
dZV:function dZV(d,e){this.a=d
this.b=e},
dZW:function dZW(d,e,f){this.a=d
this.b=e
this.c=f},
dZU:function dZU(d,e,f){this.a=d
this.b=e
this.c=f},
dZX:function dZX(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e){this.a=d
this.b=e},
aAW:function aAW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfC:function bfC(d,e,f){this.c=d
this.d=e
this.a=f},
dch:function dch(){},
dci:function dci(){},
adq:function adq(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcF:function dcF(){},
dcE:function dcE(d){this.a=d},
a_p:function a_p(d,e,f){this.c=d
this.d=e
this.a=f},
aB0:function aB0(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dcB:function dcB(d){this.a=d},
dcC:function dcC(d,e,f){this.a=d
this.b=e
this.c=f},
dcD:function dcD(d,e){this.a=d
this.b=e},
dcz:function dcz(d,e){this.a=d
this.b=e},
dcx:function dcx(d){this.a=d},
dcv:function dcv(d){this.a=d},
dcs:function dcs(d){this.a=d},
dcy:function dcy(d){this.a=d},
dcu:function dcu(d){this.a=d},
dcA:function dcA(d){this.a=d},
dcw:function dcw(d){this.a=d},
dct:function dct(d){this.a=d},
a_m:function a_m(d,e,f){this.c=d
this.d=e
this.a=f},
aAY:function aAY(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dce:function dce(d){this.a=d},
dcd:function dcd(d,e){this.a=d
this.b=e},
dcf:function dcf(d){this.a=d},
dcc:function dcc(d,e){this.a=d
this.b=e},
dcg:function dcg(d){this.a=d},
dcb:function dcb(d,e){this.a=d
this.b=e},
dc7:function dc7(d){this.a=d},
dc8:function dc8(d){this.a=d},
dc9:function dc9(d,e){this.a=d
this.b=e},
dca:function dca(d){this.a=d},
QG:function QG(d,e,f){this.c=d
this.d=e
this.a=f},
aB3:function aB3(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcS:function dcS(d){this.a=d},
dcT:function dcT(d){this.a=d},
dcU:function dcU(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcW:function dcW(d,e){this.a=d
this.b=e},
dcX:function dcX(d){this.a=d},
dcZ:function dcZ(d){this.a=d},
dcY:function dcY(d){this.a=d},
a_r:function a_r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB1:function aB1(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dcO:function dcO(d,e){this.a=d
this.b=e},
dcP:function dcP(d,e){this.a=d
this.b=e},
dcG:function dcG(d,e,f){this.a=d
this.b=e
this.c=f},
dcH:function dcH(d){this.a=d},
dcI:function dcI(){},
dcN:function dcN(){},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
ado:function ado(d,e){this.c=d
this.a=e},
dc6:function dc6(d){this.a=d},
a_l:function a_l(d){this.a=d},
aAX:function aAX(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_s:function a_s(d,e){this.c=d
this.a=e},
aB2:function aB2(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dcR:function dcR(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
bfD:function bfD(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hV1(){var x,w=$.os(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.he(v)},
Om(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Om=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Om)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bO),$async$Om)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
return A.i($async$Om,w)},
a8c(d){return B.hV2(d)},
hV2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8c)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cN,null),$async$a8c)
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
return A.i($async$a8c,w)},
Wk(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(),$async$Wk)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8c(s),$async$Wk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
Wl(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wl)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cec(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hV1()
t=A.U(u).k("N<1,a9<n,aE>>")
r=A.C(new A.N(u,new B.ced(s),t),t.k("ak.E"))
x=6
return A.b(B.Om(),$async$Wl)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8c(q),$async$Wl)
case 7:x=8
return A.b(B.a8d(r,u,g,s),$async$Wl)
case 8:v=new A.brt(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
aqO(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Om(),$async$aqO)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqO,w)},
cee(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cee=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Om(),$async$cee)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cee,w)},
a8d(d,e,f,g){return B.hV3(d,e,f,g)},
hV3(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8d=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqM("media",r,new B.ceb(s,e,g),f,q),$async$a8d)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wk(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8d)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wk(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8d)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wk(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8d)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8d,w)},
Fn(d,e,f){return B.hV4(d,e,f)},
hV4(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fn=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fn)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqO(b3),$async$Fn)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iN,null,g),$async$Fn)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqO(b3),$async$Fn)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Om(),$async$Fn)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cs(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a7(a7)
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
b0=A.pn(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abE(a8.a,b0,"media",a8.d,a9).Df(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b0Q(k,n,o,s,b7),$async$Fn)
case 17:j=c0
if(j!=null){J.c7(p,j);++q
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
break}a7=g.gR(g)
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
a8=A.pn(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abE(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fn)
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
a0=A.dO(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8c(e),$async$Fn)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fn,w)},
cec:function cec(){},
ced:function ced(d){this.a=d},
ceb:function ceb(d,e,f){this.a=d
this.b=e
this.c=f},
aSv(){var x=0,w=A.j(y.H),v,u
var $async$aSv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i59=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aSv)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aSv)
case 3:u=$.he6
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aSv)
case 4:$.he6=$.iei=$.iej=null
return A.h(null,w)}})
return A.i($async$aSv,w)},
fDd(d){var x=0,w=A.j(y.H),v,u
var $async$fDd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9e){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fDe(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.id,new B.fDf()),$async$fDd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fDd,w)},
ieg(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hUM(x):x},
hea(d){var x=0,w=A.j(y.T),v,u,t
var $async$hea=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.aqQ(u)
x=1
break}v=B.h8I(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hea,w)},
he9(d){var x=0,w=A.j(y.T),v,u,t
var $async$he9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.aqR(u)
x=1
break}v=B.h8I(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$he9,w)},
fWL(d){var x=0,w=A.j(y.T),v
var $async$fWL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqR(d),$async$fWL)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWL,w)},
bDQ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.he9(d),$async$bDQ)
case 3:q=f
if(q==null){x=1
break}t=C.X.aQ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDQ,w)},
fqR(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fqR=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.We(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cl(d.apU(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqR,w)},
Hi(d,e,f){return B.igJ(d,e,f)},
igJ(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hea(a1),$async$Hi)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aQ(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a7(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hHH().aGh(D.dDf,null),$async$Hi)
case 4:l=d.he6=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azN(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fDP(f,k,new B.fDQ(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8I(0,new B.Yt(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amk(0),$async$Hi)
case 7:x=6
return A.b(d.a8A(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fDd(l),$async$Hi)
case 8:x=9
return A.b(l.aqG(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ieg(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aw(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqS(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hpE(h)
case 11:v=new A.bqJ(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fDe:function fDe(d){this.a=d},
fDf:function fDf(){},
fDQ:function fDQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDP:function fDP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDO:function fDO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iiO(d){switch(d){case"new":return D.ez_
case"checking":return D.ez0
case"connected":return D.ez2
case"completed":return D.ez1
case"failed":return D.ez4
case"disconnected":return D.ez5
case"closed":return D.aQS
case"count":return D.ez3}return D.aQS},
iiP(d){switch(d){case"new":return D.aQT
case"gathering":return D.ez6
case"complete":return D.a9e}return D.aQT},
itT(d){switch(d){case"stable":return D.ez7
case"have-local-offer":return D.ez8
case"have-local-pranswer":return D.eza
case"have-remote-offer":return D.ez9
case"have-remote-pranswer":return D.ezb
case"closed":return D.aQZ}return D.aQZ},
is1(d){switch(d){case"new":return D.aQW
case"connecting":return D.aQX
case"connected":return D.aQY
case"closed":return D.a9f
case"disconnected":return D.aQV
case"failed":return D.aQU}return D.a9f},
aaA:function aaA(d,e){this.a=d
this.b=e},
Pq:function Pq(d,e){this.a=d
this.b=e},
Ys:function Ys(d,e){this.a=d
this.b=e},
Pp:function Pp(d,e){this.a=d
this.b=e},
FR:function FR(d,e){this.a=d
this.b=e},
crW:function crW(){},
hat(d){var x=new B.FQ()
x.a=d
x.b=!0
return x},
FQ:function FQ(){this.b=this.a=$},
aaz:function aaz(){},
avj:function avj(){},
Yt:function Yt(d,e){this.a=d
this.b=e},
h8E(){var x=0,w=A.j(y.H)
var $async$h8E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8E,w)},
h8H(d,e,f){var x=0,w=A.j(y.T),v
var $async$h8H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mL(D.n7))){v=null
x=1
break}v=B.fX1(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8H,w)},
hpE(d){var x,w=F.af4.a5o(C.dV.aN(d),null)
if(w.length===0){x=C.dV.aN(d)
return C.cR.gcu().aN(x)}return C.cR.gcu().aN(w)},
hUL(d){var x,w,v=C.cJ.aN(d)
try{x=C.ca.cJ(0,F.af3.bfX(v,!1))
return x}catch(w){x=C.ca.cJ(0,v)
return x}},
h8I(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hUL(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cJ(0,C.cJ.aN(x))
return v}catch(u){return x}}return null},
hUM(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aO(s,"\n")},
hUN(){var x,w=$.os(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b0W(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bO),$async$b0W)
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
return A.i($async$b0W,w)},
cdV(d,e){return B.hUO(d,e)},
hUO(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cN,null),$async$cdV)
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
return A.i($async$cdV,w)},
b0Z(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0W(d),$async$b0Z)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Z,w)},
b0Y(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0Y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hUN()
r=C.a.i(f)
t=C.dV.aN(s)
x=3
return A.b(B.cdV(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cR.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0Y)
case 3:if(!h){v=null
x=1
break}v=new A.a1s("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Y,w)},
b0X(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0W(o),$async$b0X)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cJ(0,C.cJ.aN(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0X,w)},
cdW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEN("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cN),$async$cdW)
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
return A.i($async$cdW,w)},
b1_(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jq(),$async$b1_)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1_,w)},
aqJ(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqJ)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1_(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqJ,w)},
aqH(d,e){var x=0,w=A.j(y.H)
var $async$aqH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqH)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqH)
case 2:return A.h(null,w)}})
return A.i($async$aqH,w)},
a84(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a84=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a84)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a84)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dp(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a83(s),$async$a84)
case 5:x=6
return A.b(B.aqH(f,u),$async$a84)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a84,w)},
a85(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a85=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a85)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a85)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.al(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqH(g,q),$async$a85)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a83(u),$async$a85)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a85,w)},
a86(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a86=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a86)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jq(),$async$a86)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b0T(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a86)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.X.aw(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a86)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a86,w)},
cdX(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cdX)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aQ(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a2(q,y.N,y.z)
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
return A.i($async$cdX,w)},
Jr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdX(d),$async$Jr)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1_(t),$async$Jr)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqI(d),$async$Jr)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0T(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqI(d),$async$Jr)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jr,w)},
aqI(d){var x=0,w=A.j(y.H)
var $async$aqI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqI)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqI)
case 2:return A.h(null,w)}})
return A.i($async$aqI,w)},
b10(){var x,w=$.os(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a87(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h8J(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ce_(d){return B.hUQ(d)},
hUQ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ce_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a87(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bO),$async$ce_)
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
return A.i($async$ce_,w)},
aqL(d,e){return B.hUR(d,e)},
hUR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a87(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cN,null),$async$aqL)
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
return A.i($async$aqL,w)},
ce1(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ce1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a87(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqL(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ce1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ce1,w)},
ce0(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ce0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a87(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqL(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ce0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ce0,w)},
ce2(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ce2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a87(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqL(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce2,w)},
ce3(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ce3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h8J(d)){v=null
x=1
break}x=3
return A.b(B.ce_(d),$async$ce3)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a7(u)
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
return A.i($async$ce3,w)},
a8e(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8e=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8e)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bO),$async$a8e)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
return A.i($async$a8e,w)},
aqP(d){return B.hV5(d)},
hV5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$aqP)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cN,null),$async$aqP)
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
return A.i($async$aqP,w)},
aqQ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqQ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8e(),$async$aqQ)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cJ(0,C.cJ.aN(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqP(s),$async$aqQ)
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
return A.i($async$aqQ,w)},
aqS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$aqS)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8e(),$async$aqS)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dV.aN(C.a.i(e))
q.n(0,"answer",C.cR.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqP(u),$async$aqS)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqS,w)},
aqR(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqR)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8e(),$async$aqR)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cJ(0,C.cJ.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqR,w)},
apK(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qk)){v=null
x=1
break}x=3
return A.b(p.mg(e),$async$apK)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hj),$async$apK)
case 7:q=g
o=q
o=o==null?null:J.eT(J.w1(o))
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
return A.i($async$apK,w)},
ips(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fV2(d){return B.ipu(d)},
ipu(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fV2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Lq(d,3600),$async$fV2)
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
return A.i($async$fV2,w)},
DI(d,e,f,g,h,i){var x=null
return B.ipr(d,e,f,g,h,i)},
ipr(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DI=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hpH(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h8L(r),$async$DI)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fV2(o),$async$DI)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a88(r),$async$DI)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aUt)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MH(A.a([],g))
x=15
return A.b(d.f9(0,A.aw8("GET",A.cD(n,0,null))).dh(0,C.GF),$async$DI)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a88(r),$async$DI)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lh(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DI)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b12(r,k),$async$DI)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DI)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.We(r)
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
return A.b(B.a88(r),$async$DI)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DI,w)},
aS9(d){return B.ipt(d)},
ipt(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aS9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aS9)
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
return A.i($async$aS9,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[159]
O=c[47]
F=c[263]
I=c[151]
P=c[233]
E=c[226]
G=c[94]
Q=c[197]
R=c[152]
S=c[231]
K=c[268]
L=c[276]
B=a.updateHolder(c[22],B)
D=c[274]
T=c[196]
M=c[216]
U=c[73]
V=c[257]
W=c[79]
X=c[62]
N=c[93]
Y=c[275]
B.crX.prototype={
aGh(d,e){return this.cPX(d,e)},
cPX(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cv(t)))
t=J.k(u)
v=B.hZK(C.cR.gcu().aN(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGh,w)}}
B.b6a.prototype={
bCc(d){var x=this,w=x.w
w.onclose=A.hp(new B.crS(x))
w.onopen=A.hp(new B.crT(x))
w.onmessage=A.hp(new B.crU(x))
w.onbufferedamountlow=A.hp(new B.crV(x))},
gd6(d){return this.x},
aix(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aix=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hat(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aix)
case 8:v=t.hat(s.aoU(f,0,null))
x=1
break
case 7:case 4:v=B.hat(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aix,w)}}
B.b6b.prototype={
bCd(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crY(x)))
w.addEventListener("icecandidate",A.hp(new B.crZ(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.cs_(x)))
w.onicegatheringstatechange=A.hp(new B.cs0(x))
w.addEventListener("signalingstatechange",A.hp(new B.cs1(x)))
if(!$.hi6())w.addEventListener("connectionstatechange",A.hp(new B.cs2(x)))
w.addEventListener("negotiationneeded",A.hp(new B.cs3(x)))
w.addEventListener("track",A.hp(new B.cs4(x)))},
amk(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ki(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amk)
case 3:t=f
v=new B.Yt(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amk,w)},
a8A(d,e){return this.br8(0,e)},
br8(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8A)
case 2:return A.h(null,w)}})
return A.i($async$a8A,w)},
a8I(d,e){return this.brt(0,e)},
brt(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8I)
case 2:return A.h(null,w)}})
return A.i($async$a8I,w)},
aqG(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yt(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqG,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adp.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_o.prototype={
S(){return new B.aB_()},
gd1(){return this.c}}
B.aB_.prototype={
Y(){this.a4()
this.af6()},
af6(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0U(u.e,u.c),$async$af6)
case 2:t=e
if(v.c!=null)v.m(new B.dcp(v,t))
return A.h(null,w)}})
return A.i($async$af6,w)},
QW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqE(t.e,t.c,!1),$async$QW)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fjY)
x=1
break}x=4
return A.b(B.a82(u.a.c,"individual"),$async$QW)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6Y(A.ec(new B.dcm(u),!1,null,y.H)),$async$QW)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QW,w)},
JM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fB5(o),$async$JM)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a86(o.e,r,s,q),$async$JM)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fgY)
x=1
break}x=5
return A.b(B.a82(u.a.c,"member"),$async$JM)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6Y(A.ec(new B.dco(u),!1,null,y.H)),$async$JM)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JM,w)},
yH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a81(t.e,o,t.f,t.r,t.w,s),$async$yH)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a82(u.a.c,"org_owner"),$async$yH)
case 4:x=5
return A.b(B.aqJ(u.a.c),$async$yH)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fBA(o),$async$yH)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a84(s,t,o,q.c),$async$yH)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fgV)
x=1
break}x=10
return A.b(B.aqJ(u.a.c),$async$yH)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6Y(A.ec(new B.dcn(u),!1,null,y.H)),$async$yH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yH,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.J,q=r?C.jC:C.qm,p=B.h8G(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dR,y.m).w
w=A.l(28)
v=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.h7,24)],y.V)
u=y.p
v=A.r(s,A.x(A.a([A.r(s,D.fE2,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.he,s,s,s),C.aB,D.fY2,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.c9n,C.n),s,s,s,s,C.ey,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lZ(new B.dcr(),s),C.T,v,C.e1,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.v(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.v(w,A.a([new B.adS(C.f6,C.aDq,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcj6(),s),C.af],u))
w.push(new B.adS(C.pv,C.a4U,"Team Member","Sign in with your organization access code + password",t.gcjY(),s))
w.push(C.af)
w.push(new B.adS(C.apu,C.a6w,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjt(),s))
return A.c4(s,q,A.bm(!0,A.ce(A.x(w,C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,new A.S(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.adS.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aH(!1,C.a3,!0,s,A.aP(!1,r,!0,A.ew(A.A(A.a([A.r(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ng,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.zf,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.j,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDD.prototype={}
B.aGL.prototype={}
B.jD.prototype={
mL(d){var x=this.b,w=C.a.p6(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garn(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ad(x/1024,1)+" KB"
if(x<1073741824)return C.i.ad(x/1048576,1)+" MB"
return C.i.ad(x/1073741824,2)+" GB"},
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
bfq(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOs(d){return this.bfq(null,d)},
aG0(d){return this.bfq(d,null)}}
B.W8.prototype={
S(){return new B.aEZ(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEZ.prototype={
Y(){this.a4()
this.af7()},
af7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ck(u.a.c),$async$af7)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dYX(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af7,w)},
af8(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fF(new A.fx(s)),$async$af8)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fkT)
case 1:return A.h(v,w)}})
return A.i($async$af8,w)},
a_z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apK(s.d,4),$async$a_z)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tp(r,"ngmy_my_code_"+m+".png"),$async$a_z)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_z,w)},
aiZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abd("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiZ,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.J,n=o?C.jC:C.qm,m=o?C.c:C.a_,l=A.eI(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m3
else if(q.e==null)x=A.as(new A.D(C.ey,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.m(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.m(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aF.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.L(C.aF.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.r(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,K.a5l,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.j,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.am6,p,p,1/0)
v=A.l(20)
u=A.a([new A.ac(0,C.G,C.aF.j(0.2),C.dx,24)],y.V)
s=q.e
s.toString
r=A.ce(A.x(A.a([x,C.nd,w,C.l2,new A.en(A.r(p,A.qc(p,p,!1,B.hUH(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l2,A.A(A.a([A.E(A.es(N.Dc,C.VV,q.gcbz(),p),1),C.au,A.E(A.dh(C.zE,C.aby,q.gcbA(),A.bp(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.j,0,p,p),C.W,new A.a5(1/0,p,A.es(M.a3F,D.fTA,q.gcyM(),p),p)],r),C.l,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.amD,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wc.prototype={
S(){return new B.aF1(new A.au(C.ax,$.aw()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aF1.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jp(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.t()
this.a3()},
a_A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jp(u.d.a.a)
if(t==null){u.m(new B.e_5(u))
x=1
break}u.m(new B.e_6(u))
s=u.a
r=s.c
x=3
return A.b(B.a80(s.d,new B.e_7(u),t,r),$async$a_A)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_8(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_A,w)},
a2P(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2P=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cs(r.a.d)){x=1
break}r.m(new B.e_9(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rT(r.a.c,q),$async$a2P)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_a(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiR(p,m,l,j,k),$async$a2P)
case 8:o=e
if(r.c!=null)r.m(new B.e_b(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.e_c(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e_d(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2P,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.J,i=j?D.ai8:D.afG,h=j?D.ajV:C.c,g=j?C.aS:C.a_,f=j?C.bL:C.an,e=j?D.ah5:C.bh
i=[i,e,h,g,f,j?C.fp:C.bR]
x=A.Q(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eI(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.r(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bZ(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.r(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bZ(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.r(k,A.A(A.a([A.r(k,D.bXF,C.f,k,k,new A.p(k,k,k,A.l(16),k,new A.a8(C.aA,C.aE,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.l,k,C.e,C.j,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.ft,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,K.a5l,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bl4()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.Oc,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aF,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_e(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.L(i[1],C.r,1)
m=J.Mk(l.a.d,4)
m=A.C(new A.N(m,new B.e_f(x,new A.aI_(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lh,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.T,e,C.T,q,C.da,p,C.T,A.r(k,A.x(m,C.l,k,C.e,C.j,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.eA,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.l(14)
s=A.L(C.aF.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.ffs)
else q.push(A.X(C.lP,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.j,0,k,k),k,k,C.b0,new A.p(u,k,s,t,k,k,C.n),C.iM,k,k,k,k,C.eZ,k,k,k)],r))}e=A.E(A.ce(A.x(e,C.al,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.bFe,k,k,C.ah),1)
u=l.f?k:l.gcyN()
t=i[3]
s=i[1]
q=A.l(16)
s=A.es(M.a3F,D.fUH,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbB()
t=A.bp(C.aF,k,k,0,C.c,k,C.nE,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.lB(new B.e_g(),A.x(A.a([e,new A.D(D.bEI,A.x(A.a([s,C.T,i,C.af,A.bJ(l.f?C.tD:D.fSU,k,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.l,k,C.e,C.j,0,C.p),C.cx,C.a_U,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bl4.prototype={
oZ(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hh(C.bC,v.length),C.aP)}}
B.W9.prototype={
S(){return new B.aF_()}}
B.aF_.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.U$=x
v.P$=0
v=w.f
v===$&&A.c()
v.U$=x
v.P$=0
w.a3()},
af9(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dYY(r))
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
return A.b(B.a85(p,m,n,o,C.a.i(l).length===0?null:l),$async$af9)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fku)
s=[1]
x=4
break}p.L(y.q).f.T(D.fj5)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dYZ(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af9,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.J?C.jC:C.qm,q=A.eI(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fLf,s,s,s,1,s,!0),p=A.r(s,D.bwO,C.f,s,s,new A.p(s,s,s,A.l(22),s,E.I6,C.n),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c3U,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c3P,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c44,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbC()
u=A.bp(C.aF,s,s,s,s,C.h8,s,s,s,s,s,s)
return A.c4(q,r,A.ce(A.x(A.a([p,C.da,o,C.af,x,C.af,w,C.nd,A.bJ(t.r?C.tD:C.aXj,s,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.ad6.prototype={}
B.bxW.prototype={
a5F(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.apU()))
x=3
return A.b(B.Si(t,s),$async$a5F)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5F,w)},
gd1(){return this.a}}
B.Ok.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_n.prototype={
S(){return new B.aAZ(new A.au(C.ax,$.aw()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aAZ.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dcl(this))},
t(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.t()
this.a3()},
cbI(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2s(d),u=x.a.c,t=u?C.iG:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jC:v.a[0],p=A.l(24),o=A.L(C.aF.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aF.j(u?0.25:0.12),C.h7,32)],n),l=A.r(w,T.as9,C.f,w,w,new A.p(w,w,w,A.l(18),A.a([new A.ac(0,C.G,C.aF.j(0.4),C.cC,16)],n),C.asY,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxy()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.Cm,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b5u),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcj(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
h=y.p
return A.eP(w,C.L,new A.cP(Q.LT,new A.bN(new A.p(t,w,o,p,m,w,C.n),C.bi,new A.D(C.yU,A.x(A.a([l,C.aO,k,C.T,j,C.e1,i,C.e1,A.A(A.a([A.E(A.dU(C.o_,new B.dck(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.au,A.E(new A.bN(new A.p(w,w,w,A.l(14),A.a([new A.ac(0,C.G,C.aF.j(0.35),C.cM,12)],n),L.Q9,C.n),C.bi,A.aH(!1,C.a3,!0,w,A.aP(!1,A.l(14),!0,D.esm,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbH(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.j,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.Oj,C.d9,w,w,w)}}
B.bxy.prototype={
oZ(d,e){return e.ame(e.a.toUpperCase())}}
B.Wa.prototype={
S(){return new B.aF0(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aF0.prototype={
Y(){var x=this
x.a4()
x.uo()
x.w=A.df(C.jF,new B.e_3(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wj()
this.a3()},
a1H(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oj(u.a.c),$async$a1H)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bi(u.a.c),$async$a1H)
case 4:u.m(new s.dZr(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1H,w)},
uo(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oj(u.a.c),$async$uo)
case 3:t=e
x=4
return A.b(B.Bi(u.a.c),$async$uo)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dZs(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O9(u.d)
B.Ck(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uo,w)},
O9(d){return this.bGf(d)},
bGf(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8a(r,u.a.c),$async$O9)
case 8:p=f
if(u.c==null){x=1
break}new B.dZ0(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a_(r.c,"video/")||r.mL(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wh(r,u.a.c),$async$O9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bi(u.a.c),$async$O9)
case 12:u.m(new o.dZ1(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O9,w)},
Oy(d){return this.bMz(d)},
bMz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8a(d,u.a.c),$async$Oy)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZ6(u,d,t))
x=6
return A.b(A.fF(new A.fx(t)),$async$Oy)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fF(new A.fx(r.toUpperCase())),$async$Oy)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uq(d,e){return this.cJH(d,e)},
cJH(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZS(r,e))
u=3
x=6
return A.b(d.$0(),$async$uq)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZT(r))
$.eX.mE()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uq,w)},
gaXM(){var x=this.a
return x.f||x.r||x.w},
IF(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXM()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdT(s,n,r,q,o,t),$async$IF)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fOq(o,u.a.c),$async$IF)
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
return A.b(B.DK(s,o,r,q,n,t),$async$IF)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IF,w)},
a0L(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqJ(u.a.c),$async$a0L)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ij("No organization portal found.")
x=1
break}t=J.a7(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).ce(A.ec(new B.dZo(u,r,q),!1,null,y.H)),$async$a0L)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0L,w)},
a1R(d){return this.csk(d)},
csj(){return this.a1R(1)},
csk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXM()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqG(u.a.c),$async$a1R)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1R,w)},
ad_(d,e,f){return this.c2z(d,e,f)},
c2z(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.uq(new B.dZl(u,d,null,e,f),"Uploading\u2026"),$async$ad_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad_,w)},
bGo(){B.hEQ(!1,new B.dZ4(this))
return},
cxn(){this.m(new B.dZw(this))},
aAx(){var x=0,w=A.j(y.H),v=this
var $async$aAx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGo()
return A.h(null,w)}})
return A.i($async$aAx,w)},
acW(){var x=0,w=A.j(y.H),v=this
var $async$acW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uq(new B.dZa(v),"Importing\u2026"),$async$acW)
case 2:return A.h(null,w)}})
return A.i($async$acW,w)},
T1(d){return this.cJ0(d)},
cJ0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mL(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZP(u,d),!1,null,y.H)),$async$T1)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mL(D.S9)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ec(new B.dZQ(u,d),!1,null,y.H)),$async$T1)
case 8:x=1
break
case 7:x=u.c3h(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ec(new B.dZR(u,d),!1,null,y.H)),$async$T1)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T1,w)},
c3h(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p6(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cSy,C.a.b2(x,w+1).toLowerCase())},
agH(d){return this.cja(d)},
cja(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mL(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZm(u,d),!1,null,y.H)),$async$agH)
case 5:x=1
break
case 4:u.m(new B.dZn(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agH,w)},
Sm(d){return this.cAg(d)},
cAg(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.py(t,s.c,s.f),$async$Sm)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uq(new B.dZI(u,d),"Preparing QR\u2026"),$async$Sm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sm,w)},
ajo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZJ(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZK(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sm(r),$async$ajo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajo,w)},
ajh(d){return this.czO(d)},
czO(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2s(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.dZC(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajh)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T1(d)
break
case"qr":u.Sm(A.a([d],y.r))
break
case"send_my_code":u.cjN(A.a([d],y.r))
break
case"save":u.aiF(d)
break
case"delete":u.Jw(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
Yo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZ7(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZ8(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.py(t,s.c,s.f),$async$Yo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uq(new B.dZ9(u,r),"Preparing file\u2026"),$async$Yo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yo,w)},
ahM(d){return this.cqF(d)},
cqF(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hFH(d,!1),$async$ahM)
case 3:s=f
r=s==null
q=B.a87(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
agN(){var x=0,w=A.j(y.H),v=this,u
var $async$agN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fW8(u,v.a.c),$async$agN)
case 2:return A.h(null,w)}})
return A.i($async$agN,w)},
bGn(){B.hEQ(!1,new B.dZ3(this,null))
return},
JL(d,e){return this.cjO(d,e)},
b3f(d){return this.JL(null,d)},
cjN(d){return this.JL(d,null)},
cjO(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZp(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xQ.cq().ap_(!0,C.a1I,!1),$async$JL)
case 10:r=g
if(r==null||J.cs(r.a)){x=1
break}x=11
return A.b(s.uq(new B.dZq(l,s,r),"Preparing\u2026"),$async$JL)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ij("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ij("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFX(p,l,e,s.a.c),$async$JL)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JL,w)},
IV(d){return this.c2m(d)},
c2m(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hUG(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3f(t),$async$IV)
case 8:x=6
break
case 7:u.ij("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ij("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uq(new B.dZj(u,d),"Receiving video\u2026"),$async$IV)
case 11:x=1
break
case 10:x=12
return A.b(u.uq(new B.dZk(u,d),"Receiving\u2026"),$async$IV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IV,w)},
EN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DE()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahM(t),$async$EN)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IV(s),$async$EN)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.dZu(u),!1,null,y.N)),$async$EN)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uo(),$async$EN)
case 10:x=1
break
case 9:x=11
return A.b(u.IV(C.a.i(r)),$async$EN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EN,w)},
aiF(d){return this.cvW(d)},
cvW(d){var x=0,w=A.j(y.H),v=this
var $async$aiF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uq(new B.dZt(v,d),"Saving\u2026"),$async$aiF)
case 2:return A.h(null,w)}})
return A.i($async$aiF,w)},
Jw(d){return this.bOU(d)},
bOU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ln(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jw)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdW(t),$async$Jw)
case 6:case 5:s=d.a
x=7
return A.b(B.Fm(u.a.c,s),$async$Jw)
case 7:u.r.W(0,s)
x=8
return A.b(u.uo(),$async$Jw)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jw,w)},
aju(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aju=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2s(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.dZO(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aju)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agN()
break
case"import":u.acW()
break}case 1:return A.h(v,w)}})
return A.i($async$aju,w)},
cbF(d){var x=d.c
if(C.a.a_(x,"video/")||d.mL(D.n7))return C.qS
if(C.a.a_(x,"image/")||d.mL(D.S9))return C.uQ
if(C.a.q(x,"pdf"))return E.PE
return D.apW},
B(d){var x,w,v=this,u=null,t=B.a2s(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.I_,u,u,u,new B.dZZ(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bYg,u,u,u,v.e?u:v.gcju(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxm()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bSs:E.aql,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a3C,u,u,u,v.e?u:v.gcbG(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oI,u,u,u,v.e?u:v.gb4k(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c_2,u,u,u,v.e?u:new B.e__(v),u,u,u,u,"More options",u))
q=A.eI(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.e_0(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.r(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bZ(C.A,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.r(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bZ(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.Q(d).ax.a===C.J?0.12:0.08),C.aF.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kp(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAW(C.jL,s,!0,t,w?u:v.gcAh(),u),1)
x.push(new A.D(D.bDu,A.lB(new B.e_1(),A.A(A.a([s,C.au,A.E(new B.aAW(C.uR,"Export",!1,t,w?u:v.gbSN(),u),1)],o),C.l,u,C.e,C.j,0,u,u),C.cx,C.iw,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfC(t,v.e?u:v.gb4k(),u)
else s=A.kq(!0,u,u,new B.e_2(v,t),s,u,D.bDm,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ac,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAW.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aF,t,t,0,C.c,t,C.wm,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ci,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wm,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bfC.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lB(new B.dch(),new A.D(E.a0O,A.x(A.a([A.lB(new B.dci(),A.r(x,A.X(C.zg,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a8(C.aA,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e0,C.hH,x,x,new A.br(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e1,A.dh(C.oI,D.fYm,this.d,A.bp(C.aF,x,x,x,C.c,x,C.Oh,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cx,C.Ca,x,x,new A.br(0,1,w),s),x,x,x)}}
B.adq.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aF.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.mL(D.n7))p=D.dsl
else{p=C.a.a_(p,"image/")||i.mL(D.S9)
n=y.O
p=p?A.a([C.cH,C.aF],n):A.a([C.aN.j(0.85),C.aF.j(0.7)],n)}p=A.r(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a8(C.aA,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garn()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mL(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.aw,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fK,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cg))
if(!(!o||i.mL(D.n7)))l.push(A.h6p(C.aF,!1,j,j,j,!1,j,j,new B.dcE(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oA,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cg))
return A.lB(new B.dcF(),new A.D(C.ej,A.aH(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0f,A.A(l,C.l,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cx,h,new A.bC("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_p.prototype={
S(){return new B.aB0()},
gd1(){return this.c}}
B.aB0.prototype={
Y(){this.a4()
this.yx()},
t(){B.hUV(this.e)
this.a3()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rT(o.c,o.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hUY(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hUX(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dcB(s))
x=1
break}s.m(new B.dcC(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dcD(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a2O(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rT(t.c,t.d),$async$a2O)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fhu)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiR(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2O)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2O,w)},
c2f(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kD(u,C.A,v,new B.dcz(w,t),C.hh,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dcA(w),C.hh,C.dE,!0,v,!1,v,v)
else return C.bN
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2s(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Dd,u,u,u,v.gb86(),u,u,u,u,"Share / save",u))
r=A.eI(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fx
else{q=v.r
if(q!=null)t=new A.D(C.ey,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ey,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.Dd,D.fGr,v.gb86(),A.bp(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c2f()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_m.prototype={
S(){return new B.aAY(A.ajK(),C.bF,C.bF)},
gd1(){return this.c}}
B.aAY.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fA(w,A.a4(w).k("fA<1>")).iC(new B.dce(v))
x.gcXz().iC(new B.dcf(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a4(x).k("fA<1>"))}if(x==null)x=C.bbG
x.iC(new B.dcg(v))
v.yx()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rT(p.c,p.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dc7(s))
x=1
break}x=8
return A.b(s.d.vs(0,new A.a4A(r,s.a.d.c)),$async$yx)
case 8:if(s.c==null){x=1
break}s.m(new B.dc8(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dc9(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a_B(){var x=0,w=A.j(y.H),v=this,u
var $async$a_B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_B)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_B)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_B,w)},
aVA(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2s(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eI(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fx
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.r(o,D.bTs,C.f,o,o,new A.p(o,o,o,A.l(24),o,L.Q9,C.n),o,88,o,o,o,o,o,88)
t=A.kX(C.aF,o,o,m,0,new B.dca(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVA(p.w)+" / "+p.aVA(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aF,o,o,o,o,D.fdU,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uT:C.hy,o,o,o,o,o)
x=A.x(A.a([u,C.l2,t,x,C.da,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbJ(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qE,x,o),o,o,o),o,!1,!1,o,o)}}
B.QG.prototype={
S(){return new B.aB3()},
gd1(){return this.c}}
B.aB3.prototype={
Y(){this.a4()
this.Qe()},
Qe(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qe=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h8H(o.c,o.d,new B.dcS(s)),$async$Qe)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcT(s))
x=1
break}s.e=r
q=O.ihE(r)
if(q==null){s.m(new B.dcU(s))
x=1
break}s.d=q
q.aW(0,s.gb32())
x=8
return A.b(q.iX(0).dh(0,C.rV),$async$Qe)
case 8:if(s.c==null){x=1
break}s.m(new B.dcV(s))
x=9
return A.b(q.qq(0),$async$Qe)
case 9:q.tZ(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dcW(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qe,w)},
chJ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcX(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dw(0,x.gb32())
w=x.d
if(w!=null)w.t()
B.isk(x.e)
x.a3()},
afc(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b11(u.c,u.d),$async$afc)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afc,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2s(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eI(A.a([A.aI(t,t,t,t,C.oH,t,t,t,u.gcbD(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fx
else{q=u.r
if(q!=null)s=new A.D(C.ey,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajd(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.A,t,C.ac,C.t,A.a([new A.AO(s,t),A.az(t,A.zn(A.r(t,A.X(q?I.uT:C.hy,C.c,t,t,t,48),C.f,t,t,new A.p(C.aU,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcZ(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bN}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_r.prototype={
S(){return new B.aB1(new A.cw(null,y.A))}}
B.aB1.prototype={
gcJo(){var x,w,v=this.a
if(v.e!==D.Tu)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcIZ(){var x,w,v=this.a
if(v.e!==D.Ai)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJo()
if(x!=null){v.Rm(x)
v.e=A.df(R.GI,new B.dcO(v,x))}w=v.gcIZ()
if(w!=null){v.Rl(w)
v.f=A.df(C.fI,new B.dcP(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rl(d){return this.coS(d)},
coS(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqO(d),$async$Rl)
case 3:t=f
x=4
return A.b(B.cee(d),$async$Rl)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dcG(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rl,w)},
Rm(d){return this.coT(d)},
coT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fWL(d),$async$Rm)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDQ(t),$async$Rm)
case 4:if(u.c==null){x=1
break}u.m(new B.dcH(u))
u.c.L(y.q).f.T(D.aU4)
case 1:return A.h(v,w)}})
return A.i($async$Rm,w)},
gc7u(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbE(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2A(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DE()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fkE)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ec(new B.dcI(),!1,null,y.N)),$async$a2A)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDQ(s),$async$a2A)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aU4)
case 1:return A.h(v,w)}})
return A.i($async$a2A,w)},
aaP(d){return this.bMA(d)},
bMA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fF(new A.fx(C.d.aO(t,", "))),$async$aaP)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaP,w)},
afa(d){return this.bMi(d)},
bMi(d){var x=0,w=A.j(y.H),v=this
var $async$afa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fF(new A.fx(v.a.c)),$async$afa)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fhY)
return A.h(null,w)}})
return A.i($async$afa,w)},
a2u(d){return this.cvY(d)},
cvY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apK(s.d,4),$async$a2u)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tp(r,"ngmy_doc_share_qr.png"),$async$a2u)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2u,w)},
gaZ2(){var x,w=this.a
if(w.e!==D.J9)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaM(d){return this.bMt(d)},
bMt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ2()
if(t==null){x=1
break}x=3
return A.b(A.fF(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaM)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fjD)
case 1:return A.h(v,w)}})
return A.i($async$aaM,w)},
afb(){var x=0,w=A.j(y.H),v=this,u
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wj(),$async$afb)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afb,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2s(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.J9&&i!==D.Tu&&i!==D.Ai
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eI(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J9||t===D.Tu||t===D.Ai?l:A.aI(l,l,l,l,C.lp,l,l,l,m.gb14(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.L(C.aF.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qc(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7u(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J9){t=C.aF.j(0.12)
o=A.l(20)
C.d.v(q,A.a([C.T,A.r(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.md,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gcbE(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2X,D.fQ3,new B.dcJ(m,d),l)],p))}if(m.a.e===D.J9&&m.gaZ2()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c_o,D.fMD,new B.dcK(m,d),l)],p))
if(m.a.e===D.Ai){x=(m.w?C.dL:C.aF).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ad(C.i.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.T,A.r(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FA:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.md,l,l,l)],p))}if(m.a.e===D.Tu){x=(m.r?C.dL:C.aF).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.T,A.r(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FA:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.md,l,l,l),C.af,A.dh(D.bVV,D.fTf,m.gcwk(),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oO(i,A.c4(v,w,new A.D(C.ad,A.x(A.a([A.E(A.r(l,A.x(q,C.l,l,C.ba,C.j,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.Dc,C.VV,new B.dcL(m,d),l),1),C.au,A.E(A.dh(C.zE,C.aby,new B.dcM(m,d),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.j,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.AW,l,m.gb14(),A.bp(C.aN,l,l,l,l,C.h8,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.dcN(),y.C)}}
B.ado.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ce(A.x(A.a([w,C.aO,A.r(x,A.qc(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bG,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bJ(C.AX,x,new B.dc6(d),x)],u),x,x,C.np,v,x,x,x,x,D.fFr,x)}}
B.a_l.prototype={
S(){return new B.aAX(A.zY(C.yz,C.o5,C.v5))}}
B.aAX.prototype={
t(){this.d.t()
this.a3()},
az4(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c4(A.eI(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fNa,x,x,x,1,x,!0),C.w,A.zX(this.d,C.c_,this.gaz3()),x,!1,!1,x,x)}}
B.a_s.prototype={
S(){return new B.aB2(A.zY(C.yz,C.o5,C.v5))},
gd1(){return this.c}}
B.aB2.prototype={
c3j(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MN("text/plain"),$async$ah9)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fky)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah9,w)},
abD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hFH(p,!0),$async$abD)
case 3:t=e
p=t==null
s=B.a87(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fh4)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abD,w)},
t(){this.d.t()
this.a3()},
az4(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3j(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.arf,v,v,v,w.gbSg(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a3J,v,v,v,w.gcmd(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eI(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.uN:P.Pn,v,v,v,v,v),v,v,v,new B.dcR(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fUc,v,v,v,1,v,!0)
u=A.zX(w.d,C.c_,w.gaz3())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ac,C.t,A.a([u,A.as(A.r(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eyF],s),v),v,!1,!1,v,v)}}
B.bfD.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pj
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.l(12)
u=A.r(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pj:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0V,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eH,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaA.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pq.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Ys.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pp.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FR.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crW.prototype={}
B.FQ.prototype={}
B.aaz.prototype={}
B.avj.prototype={}
B.Yt.prototype={}
var z=a.updateTypes(["aB<~>()","P(jD)","n(jD)","Wa(Z)","~()","a_o(Z)","G(G,jD)","QG(Z)","~(ml)","ct(FQ)","aB<jD?>(@)","W8(Z)","Wc(Z)","D(jD)","jD(@)","a9<n,@>(jD)","a_n(Z)","W9(Z)","a_p(Z)","a_m(Z)","a_r(Z)","ado(Z)","ai<jD>()","a_s(Z)","adq(Z,G)","a_l(Z)","a9<n,aE>(jD)","ct(Ys)","ct(aaz)","aB<ct>(FQ)"])
B.crS.prototype={
$1(d){var x=this.a
x.x=D.aQR
x.y.J(0,D.aQR)},
$S:75}
B.crT.prototype={
$1(d){var x=this.a
x.x=D.aQQ
x.y.J(0,D.aQQ)},
$S:75}
B.crU.prototype={
$1(d){var x=this.a
x.aix(A.ahE(d.data)).bG(new B.crR(x),y.b)},
$S:75}
B.crR.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crV.prototype={
$1(d){},
$S:75}
B.crY.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hZJ(d.channel))},
$S:16}
B.crZ.prototype={
$1(d){},
$S:16}
B.cs_.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iiO(w.iceConnectionState)
x.cx=w
if($.hi6())switch(w.a){case 0:x.cy=D.aQW
break
case 1:x.cy=D.aQX
break
case 3:x.cy=D.aQY
break
case 5:x.cy=D.aQU
break
case 6:x.cy=D.aQV
break
case 7:x.cy=D.a9f
break
default:break}},
$S:108}
B.cs0.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iiP(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.cs1.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.itT(w.signalingState)},
$S:108}
B.cs2.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.is1(w.connectionState)},
$S:108}
B.cs3.prototype={
$1(d){},
$S:108}
B.cs4.prototype={
$1(d){},
$S:16}
B.fwv.prototype={
$1(d){var x=y.F.a(new A.qr([],[]).o_(d.target.result,!1)),w=C.wi.q(x.objectStoreNames,"blobs")
if(!w)C.wf.Gi(x,"blobs")},
$S:179}
B.fVX.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wW.fs(this.b)
$.eX.mE()
this.c.$1(d)},
$S:447}
B.fVZ.prototype={
$1(d){return this.a.$1(B.i89(this.b,this.c))},
$S:32}
B.fVY.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fVW.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fWb.prototype={
$1(d){var x=this
return B.huC(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fWc.prototype={
$1(d){var x=this
return B.huC(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fzb.prototype={
$1(d){var x=this
return B.cdQ(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcp.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcm.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdQ(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dco.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdQ(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcn.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdQ(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcr.prototype={
$4(d,e,f,g){var x=null
return A.k1(A.A(A.a([A.aI(x,x,x,x,D.bUw,x,x,x,new B.dcq(d),x,x,x,x,x,x),A.E(A.FC(D.RT,!0,x,!1,C.a2K,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.j,0,x,x),D.RT,x,g,C.amU,0,e,f)},
$C:"$4",
$R:4,
$S:417}
B.dcq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fB8.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eR,y.m).w,t=this.a,s=t?C.iG:C.c,r=A.l(28),q=A.r(v,D.bx7,C.f,v,v,D.b79,v,v,v,v,D.amK,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bYS,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.S(0,0,0,u.f.d),A.r(v,A.x(A.a([q,new A.D(C.GX,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.arv,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dq,new B.fB6(d),v),1),C.au,A.E(A.bJ(D.fLD,v,new B.fB7(p,x,d),A.bp(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.j,0,v,v)],w),C.l,v,C.e,C.j,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GL,v,v,v,v),v)},
$S:60}
B.fB6.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fB7.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fie)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDD(v,x))},
$S:0}
B.fBC.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eR,y.m).w,u=x.a,t=u?C.iG:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.S(0,0,0,v.f.d),A.r(w,A.x(A.a([A.r(w,D.bwY,C.f,w,w,D.b8D,w,w,w,w,D.amK,w,w,1/0),new A.D(C.GX,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hdU(u,"Organization name",C.Ho,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hdU(u,"Access code",C.nJ,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hdU(u,"Member password",H.HV,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bJ(D.fUj,w,new B.fBB(r,q,p,d),A.bp(C.aF,w,w,w,w,C.h8,w,w,w,w,w,w))],o),C.l,w,C.e,C.j,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GL,w,w,w,w),w)},
$S:60}
B.fBB.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fij)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGL(u,x,w))},
$S:0}
B.cdH.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a7(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cD(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vS(p,null).dh(0,C.a_T),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cl(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdN.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdO.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdP.prototype={
$1(d){return d.b},
$S:z+2}
B.cdJ.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdK.prototype={
$1(d){return d.b},
$S:z+2}
B.cdI.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cdL.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdM.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fW9.prototype={
$1(d){return new B.W8(this.a,null)},
$S:z+11}
B.fWa.prototype={
$1(d){return new B.Wc(this.a,this.b,this.c,null)},
$S:z+12}
B.dYX.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_5.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_6.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_7.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_4(x,d))},
$S:2}
B.e_4.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_8.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_9.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_a.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_b.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_c.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e_d.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_g.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.e_e.prototype={
$1(d){var x=this.a
return x.f?null:x.a_A()},
$S:2}
B.e_f.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mL(D.S9))s=C.uQ
else s=C.a.a_(s,"video/")||d.mL(D.n7)?C.qS:D.apW
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.r(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garn(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.l,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dYY.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dYZ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdR.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.cdS.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.fX3.prototype={
$2(d,e){return e===this.a},
$S:297}
B.ftA.prototype={
$1(d){return J.k(d)},
$S:17}
B.fzn.prototype={
$1(d){var x=this.b
B.i5X(C.Hb.ga7i(this.a)).bG(x.gC3(x),y.H)},
$S:130}
B.fzo.prototype={
$1(d){return this.a.dd(0,null)},
$S:130}
B.fzp.prototype={
$0(){return null},
$S:12}
B.ce5.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzq.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
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
B.fDC.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fxB.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxC.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cea.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.n7)},
$S:z+1}
B.h0j.prototype={
$1(d){return new B.a_n(this.a,null)},
$S:z+16}
B.dcl.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dcj.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dck.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_3.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1H()},
$S:11}
B.dZr.prototype={
$0(){var x=J.bH0(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZs.prototype={
$0(){var x=J.bH0(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZ0.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZ_(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG0(this.c)}},
$S:0}
B.dZ_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZ1.prototype={
$0(){var x=J.bH0(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZ6.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZ5(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG0(this.c)}},
$S:0}
B.dZ5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZS.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZT.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZo.prototype={
$1(d){return new B.W9(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IF(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wd(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uo(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1R(s.gI(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ4.prototype={
$1(d){this.a.ad_(d,"No files selected.","Added")},
$S:447}
B.dZw.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dZv(),A.U(x).k("N<1,n>")))},
$S:0}
B.dZv.prototype={
$1(d){return d.a},
$S:z+2}
B.dZa.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xQ.cq().cZx(C.a1I,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jK(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ij("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqN(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cs(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uo(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZP.prototype={
$1(d){return new B.QG(this.a.a.c,this.b,null)},
$S:z+7}
B.dZQ.prototype={
$1(d){return new B.a_p(this.a.a.c,this.b,null)},
$S:z+18}
B.dZR.prototype={
$1(d){return new B.a_m(this.a.a.c,this.b,null)},
$S:z+19}
B.dZm.prototype={
$1(d){return new B.QG(this.a.a.c,this.b,null)},
$S:z+7}
B.dZn.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZI.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IF(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a89(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csj(),$async$$0)
case 5:x=6
return A.b(p.uo(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dZE(p),r),new B.dZF(),r.k("N<ak.E,n>")).bY(0,new B.dZG())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.dZH(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.px(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wj(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZE.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dZD(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dZD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZF.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dZG.prototype={
$1(d){return d.length!==0},
$S:3}
B.dZH.prototype={
$1(d){var x=this.a
return new B.a_r(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZJ.prototype={
$1(d){return d.a},
$S:z+2}
B.dZK.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZC.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.as(A.r(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garn(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mL(D.n7)?C.t7:C.pB
p=!x||p.mL(D.n7)?"Play video":"View"
return new A.bN(new A.p(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,v,v,C.n),C.bi,A.bm(!0,new A.D(C.Ck,A.x(A.a([q,o,t,C.aB,B.a_q(!1,u,!1,w,p,new B.dZx(d),v),B.a_q(!1,u,!1,C.jL,"Share via QR",new B.dZy(d),"Letters/numbers QR code"),B.a_q(!1,u,!1,D.a2P,"Send to their Code",new B.dZz(d),"Enter someone else's personal code"),B.a_q(!1,u,!1,C.i0,"Download / save",new B.dZA(d),v),C.am,B.a_q(!1,u,!0,C.ek,"Delete",new B.dZB(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:727}
B.dZx.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dZy.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dZz.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dZA.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dZB.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dZ7.prototype={
$1(d){return d.a},
$S:z+2}
B.dZ8.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZ9.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8b(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hk(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.px(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ3.prototype={
$1(d){var x=this.a
x.uq(new B.dZ2(x,d,this.b),"Preparing\u2026")},
$S:447}
B.dZ2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wd(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cs(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFX(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZp.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZq.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h8K(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZj.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.dZf(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dZg(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZh(s))
case 5:x=8
return A.b(r.b.iI(0,C.GF,new B.dZi()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uo(),$async$$0)
case 9:s.ij("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZf.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZc(x,d,e))},
$S:232}
B.dZc.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZg.prototype={
$1(d){return new B.ado(this.a.a,null)},
$S:z+21}
B.dZh.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZi.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZk.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jp(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8_(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3f(B.Jp(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqN(new B.dZd(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cs(r)){if(B.h8J(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.uo(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dZe()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZd.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZb(x,d,e))},
$S:232}
B.dZb.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZe.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.n7)},
$S:z+1}
B.dZu.prototype={
$1(d){return new B.a_s(this.a.a.c,null)},
$S:z+23}
B.dZt.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b11(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZO.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.p(v[2],x,new A.bH(new A.ay(C.aF.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.l7,x,x,C.n),C.bi,A.bm(!0,new A.D(C.Ck,A.x(A.a([A.as(A.r(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_q(!0,w,!1,C.nJ,"My Code",new B.dZL(d),"Your personal code & QR \u2014 others send docs to you"),B.a_q(!1,w,!1,D.a2P,"Send to their Code",new B.dZM(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_q(!1,w,!1,S.zv,"Import backup",new B.dZN(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:727}
B.dZL.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dZM.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGn()},
$S:0}
B.dZN.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.e_0.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jz(D.RT,x,C.a2K,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RT).j(0.4+e*0.2),C.H,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:703}
B.dZZ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e__.prototype={
$0(){this.a.aju()
return null},
$S:0}
B.e_1.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*10)),e)},
$S:100}
B.e_2.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adq(e,w,v,this.b,x.e,x.cbF(w),new B.dZV(x,w),new B.dZW(x,v,w),new B.dZX(x,w),new B.dZY(x,w),null)},
$S:z+24}
B.dZV.prototype={
$0(){this.a.agH(this.b)
return null},
$S:0}
B.dZW.prototype={
$0(){var x=this.a
return x.m(new B.dZU(x,this.b,this.c))},
$S:0}
B.dZU.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZX.prototype={
$0(){this.a.Oy(this.b)
return null},
$S:0}
B.dZY.prototype={
$0(){this.a.ajh(this.b)
return null},
$S:0}
B.dch.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*18)),e)},
$S:100}
B.dci.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:112}
B.dcF.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.dcE.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.dcB.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dcC.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dcD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dcz.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dcx(this.a),C.hh,C.dE,!0,x,!1,x,x)
$.aW.x1$.push(new B.dcy(this.a))
return C.bN},
$S:138}
B.dcx.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcv(this.a))
return C.bN},
$S:191}
B.dcv.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcs(x))},
$S:7}
B.dcs.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcy.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcu(x))},
$S:7}
B.dcu.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcA.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcw(this.a))
return C.bN},
$S:191}
B.dcw.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dct(x))},
$S:7}
B.dct.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dce.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcd(x,d))},
$S:1764}
B.dcd.prototype={
$0(){return this.a.f=this.b===C.vt},
$S:0}
B.dcf.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcc(x,d))},
$S:7}
B.dcc.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcg.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcb(x,d))},
$S:7}
B.dcb.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dc7.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dc8.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dc9.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dca.prototype={
$1(d){return this.a.d.Nv(0,A.dw(0,0,0,C.i.V(d),0,0))},
$S:6}
B.dcS.prototype={
$0(){var x=this.a.a
return B.rT(x.c,x.d)},
$S:1765}
B.dcT.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dcU.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcV.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dcW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcX.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcZ.prototype={
$0(){var x=this.a
x.m(new B.dcY(x))},
$S:0}
B.dcY.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qq(0)},
$S:0}
B.dcO.prototype={
$1(d){return this.a.Rm(this.b)},
$S:11}
B.dcP.prototype={
$1(d){return this.a.Rl(this.b)},
$S:11}
B.dcG.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dcH.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcI.prototype={
$1(d){return D.hui},
$S:z+25}
B.dcN.prototype={
$2(d,e){if(d)B.Wj()},
$S:127}
B.dcJ.prototype={
$0(){return this.a.aaP(this.b)},
$S:0}
B.dcK.prototype={
$0(){return this.a.aaM(this.b)},
$S:0}
B.dcL.prototype={
$0(){return this.a.afa(this.b)},
$S:0}
B.dcM.prototype={
$0(){return this.a.a2u(this.b)},
$S:0}
B.dc6.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dcR.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qu(),$async$$0)
case 2:u.m(new B.dcQ(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dcQ.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cec.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.n7)},
$S:z+1}
B.ced.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceb.prototype={
$2(d,e){return this.bmY(d,e)},
bmY(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wk(u.c,A.I(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1766}
B.fDe.prototype={
$1(d){if(d===D.a9e&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fDf.prototype={
$0(){},
$S:12}
B.fDQ.prototype={
box(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fqR(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hpH(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.box(d,e)},
$S:549}
B.fDP.prototype={
$1(d){var x=this
d.b=new B.fDO(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fDO.prototype={
$1(d){return this.bow(d)},
bow(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b12(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.X.aQ(0,n,null)
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
return A.b(B.fqR(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a88(m),$async$$1)
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
x(v=B.aB_.prototype,"gcj6","QW",0)
x(v,"gcjY","JM",0)
x(v,"gcjt","yH",0)
x(v=B.aEZ.prototype,"gcbz","af8",0)
x(v,"gcbA","a_z",0)
x(v,"gcyM","aiZ",0)
x(v=B.aF1.prototype,"gcbB","a_A",0)
x(v,"gcyN","a2P",0)
x(B.aF_.prototype,"gcbC","af9",0)
x(B.aAZ.prototype,"gcbH","cbI",4)
x(v=B.aF0.prototype,"gcju","a0L",0)
x(v,"gcxm","cxn",4)
x(v,"gb4k","aAx",0)
x(v,"gcAh","ajo",0)
x(v,"gbSN","Yo",0)
x(v,"gcbG","EN",0)
x(B.aB0.prototype,"gb86","a2O",0)
x(B.aAY.prototype,"gcbJ","a_B",0)
x(v=B.aB3.prototype,"gb32","chJ",4)
x(v,"gcbD","afc",0)
x(v=B.aB1.prototype,"gcwk","a2A",0)
x(v,"gb14","afb",0)
w(B.aAX.prototype,"gaz3","az4",8)
x(v=B.aB2.prototype,"gcmd","ah9",0)
x(v,"gbSg","abD",0)
w(v,"gaz3","az4",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.crW,B.aaz,B.avj,B.aDD,B.aGL,B.jD,B.ad6,B.bxW,B.FQ,B.Yt])
w(B.crX,B.crW)
w(B.b6a,B.aaz)
x(A.ht,[B.crS,B.crT,B.crU,B.crR,B.crV,B.crY,B.crZ,B.cs_,B.cs0,B.cs1,B.cs2,B.cs3,B.cs4,B.fwv,B.fVX,B.fVZ,B.fVY,B.fWb,B.fWc,B.fzb,B.dcm,B.dco,B.dcn,B.dcr,B.fB8,B.fBC,B.cdH,B.cdO,B.cdP,B.cdK,B.cdI,B.cdL,B.cdM,B.fW9,B.fWa,B.e_7,B.e_g,B.e_e,B.e_f,B.ftA,B.fzn,B.fzo,B.ce5,B.fzq,B.fDC,B.fxB,B.fxC,B.cea,B.h0j,B.dcl,B.dcj,B.e_3,B.dZ_,B.dZ5,B.dZo,B.dZ4,B.dZv,B.dZP,B.dZQ,B.dZR,B.dZm,B.dZE,B.dZD,B.dZF,B.dZG,B.dZH,B.dZJ,B.dZK,B.dZC,B.dZ7,B.dZ8,B.dZ3,B.dZp,B.dZg,B.dZe,B.dZu,B.dZO,B.e_0,B.e_1,B.dch,B.dci,B.dcF,B.dcE,B.dcz,B.dcx,B.dcv,B.dcy,B.dcA,B.dcw,B.dce,B.dcf,B.dcg,B.dca,B.dcO,B.dcP,B.dcI,B.cec,B.ced,B.fDe,B.fDP,B.fDO])
w(B.b6b,B.avj)
x(A.iJ,[B.fVW,B.dcp,B.dcq,B.fB6,B.fB7,B.fBB,B.dYX,B.e_5,B.e_6,B.e_4,B.e_8,B.e_9,B.e_a,B.e_b,B.e_c,B.e_d,B.dYY,B.dYZ,B.fzp,B.dck,B.dZr,B.dZs,B.dZ0,B.dZ1,B.dZ6,B.dZS,B.dZT,B.dZl,B.dZw,B.dZa,B.dZn,B.dZI,B.dZx,B.dZy,B.dZz,B.dZA,B.dZB,B.dZ9,B.dZ2,B.dZq,B.dZj,B.dZc,B.dZh,B.dZi,B.dZk,B.dZb,B.dZt,B.dZL,B.dZM,B.dZN,B.dZZ,B.e__,B.dZV,B.dZW,B.dZU,B.dZX,B.dZY,B.dcB,B.dcC,B.dcD,B.dcs,B.dcu,B.dct,B.dcd,B.dcc,B.dcb,B.dc7,B.dc8,B.dc9,B.dcS,B.dcT,B.dcU,B.dcV,B.dcW,B.dcX,B.dcZ,B.dcY,B.dcG,B.dcH,B.dcJ,B.dcK,B.dcL,B.dcM,B.dc6,B.dcR,B.dcQ,B.fDf])
x(A.lD,[B.adp,B.Ok,B.aaA,B.Pq,B.Ys,B.Pp,B.FR])
x(A.af,[B.a_o,B.W8,B.Wc,B.W9,B.a_n,B.Wa,B.a_p,B.a_m,B.QG,B.a_r,B.a_l,B.a_s])
x(A.ah,[B.aB_,B.aEZ,B.aF1,B.aF_,B.aAZ,B.aF0,B.aB0,B.aAY,B.aB3,B.aB1,B.aAX,B.aB2])
x(A.ax,[B.adS,B.aAW,B.bfC,B.adq,B.ado,B.bfD])
x(A.jy,[B.cdN,B.cdJ,B.cdR,B.cdS,B.fX3,B.dZf,B.dZd,B.e_2,B.dcN,B.ceb,B.fDQ])
x(A.j4,[B.bl4,B.bxy])})()
A.iT(b.typeUniverse,JSON.parse('{"b6a":{"aaz":[]},"b6b":{"avj":[]},"a_o":{"af":[],"v":[]},"aB_":{"ah":["a_o"]},"adS":{"ax":[],"v":[]},"W8":{"af":[],"v":[]},"Wc":{"af":[],"v":[]},"aEZ":{"ah":["W8"]},"aF1":{"ah":["Wc"]},"bl4":{"j4":[]},"W9":{"af":[],"v":[]},"aF_":{"ah":["W9"]},"a_n":{"af":[],"v":[]},"Wa":{"af":[],"v":[]},"adq":{"ax":[],"v":[]},"a_p":{"af":[],"v":[]},"a_m":{"af":[],"v":[]},"QG":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"ado":{"ax":[],"v":[]},"a_l":{"af":[],"v":[]},"a_s":{"af":[],"v":[]},"aAZ":{"ah":["a_n"]},"bxy":{"j4":[]},"aF0":{"ah":["Wa"]},"aAW":{"ax":[],"v":[]},"bfC":{"ax":[],"v":[]},"aB0":{"ah":["a_p"]},"aAY":{"ah":["a_m"]},"aB3":{"ah":["QG"]},"aB1":{"ah":["a_r"]},"aAX":{"ah":["a_l"]},"aB2":{"ah":["a_s"]},"bfD":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uN"),k:x("ML()"),o:x("bu<n,n>"),F:x("rt"),g:x("aB<jD?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a9<n,P>>"),t:x("O<a9<n,@>>"),r:x("O<jD>"),w:x("O<+file,name(lT,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j4>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<G>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bA<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iC"),e:x("ixX"),af:x("F1"),U:x("jD"),b:x("ct"),C:x("aE"),aK:x("wG"),ab:x("FQ"),br:x("avj"),v:x("Yt"),N:x("n"),X:x("br<H>"),Q:x("m4"),D:x("dK"),aw:x("bC<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jD>>"),aW:x("c3<dK?>"),aY:x("c3<~>"),cx:x("adp"),b1:x("bk<ai<jD>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDD"),bG:x("aGL"),q:x("mC"),B:x("pQ<FQ>"),c6:x("pQ<aaA>"),y:x("P"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bi?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jD?"),R:x("aE?"),c:x("Yt?"),d:x("+answerQr,transfer(n,aB<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Ok,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("ad6?"),bk:x("aDD?"),ag:x("aGL?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5u=new A.ay(C.aF,2,C.r,-1)
D.c7v=new A.a8(C.a7,C.aa,C.x,C.a4U,null,null)
D.b79=new A.p(null,null,null,C.mF,null,D.c7v,C.n)
D.b8D=new A.p(null,null,null,C.mF,null,E.I6,C.n)
D.afG=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ah5=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ai8=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajV=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fGk=new A.B("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.fVf=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EM,null,null,null,null,null,null,null,null,null)
D.djp=x([D.fGk,C.am,D.fVf],y.p)
D.bwO=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.djp,null)
D.fZK=new A.B("Create your organization",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.fKP=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EM,null,null,null,null,null,null,null,null,null)
D.dAe=x([D.fZK,C.am,D.fKP],y.p)
D.bwY=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dAe,null)
D.fVT=new A.B("Team Member sign-in",null,C.fQ,null,null,null,null,null,null,null,null,null)
D.fON=new A.B("Enter the access code and password from your organization.",null,G.EM,null,null,null,null,null,null,null,null,null)
D.dy_=x([D.fVT,C.am,D.fON],y.p)
D.bx7=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dy_,null)
D.bDm=new A.S(16,10,16,28)
D.bDu=new A.S(16,14,16,4)
D.bEI=new A.S(20,0,20,16)
D.bFe=new A.S(20,8,20,16)
D.amK=new A.S(24,22,24,20)
D.a2P=new A.a0(63394,"MaterialIcons",!1)
D.apW=new A.a0(63515,"MaterialIcons",!1)
D.bSs=new A.a0(983813,"MaterialIcons",!1)
D.bPJ=new A.a0(62867,"MaterialIcons",!1)
D.bTs=new A.ae(D.bPJ,44,C.c,null,null,null)
D.bUw=new A.ae(C.k7,null,C.ab,null,null,null)
D.bVV=new A.ae(C.jr,18,null,null,null,null)
D.bXF=new A.ae(D.a2P,26,C.c,null,null,null)
D.bYg=new A.ae(C.D1,null,null,null,null,null)
D.bYS=new A.ae(C.D9,null,null,null,null,null)
D.c_2=new A.ae(W.a3_,null,null,null,null,null)
D.c_o=new A.ae(C.hN,16,null,null,null,null)
D.c2X=new A.ae(C.t6,16,null,null,null,null)
D.bTJ=new A.ae(C.nJ,null,null,null,null,null)
D.c3P=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZp=new A.ae(C.Ho,null,null,null,null,null)
D.c3U=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bU3=new A.ae(H.HV,null,null,null,null,null)
D.c44=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bU3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cT6=x([C.fp,C.b1,C.aF],y.O)
D.c9n=new A.a8(C.aA,C.aE,C.x,D.cT6,null,null)
D.cSy=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RT=x([C.fp,C.aF],y.O)
D.S9=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dsl=x([C.oj,C.aF],y.O)
D.ekT={iceServers:0}
D.aLm={urls:0}
D.dDZ=new A.bu(D.aLm,["stun:stun.l.google.com:19302"],y.o)
D.dDY=new A.bu(D.aLm,["stun:stun1.l.google.com:19302"],y.o)
D.d8U=x([D.dDZ,D.dDY],A.at("O<a9<n,n>>"))
D.dDf=new A.bu(D.ekT,[D.d8U],A.at("bu<n,@>"))
D.J9=new B.Ok(0,"lanDirect")
D.Tt=new B.Ok(1,"cloudStash")
D.dPk=new B.Ok(2,"inlineInstant")
D.Tu=new B.Ok(3,"webrtcLink")
D.Ai=new B.Ok(4,"videoCloud")
D.fVe=new A.B("Receive file",null,C.nh,null,null,null,null,null,null,null,null,null)
D.cIm=x([E.arE,C.ae,D.fVe],y.p)
D.f8P=new A.c8(C.aL,C.ba,C.j,C.l,null,C.p,null,0,D.cIm,null)
D.esm=new A.D(C.cq,D.f8P,null)
D.fwO=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Iz,null,null,null)
D.fGT=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fwO,null,C.K,null,null,null,null,null,null,null)
D.erw=new A.D(C.Cp,D.fGT,null)
D.bd0=new A.ch(C.A,null,null,D.erw,null)
D.eyF=new A.cK(0,null,0,28,null,null,D.bd0,null)
D.eyZ=new B.aaA(0,"RTCDataChannelConnecting")
D.aQQ=new B.aaA(1,"RTCDataChannelOpen")
D.aQR=new B.aaA(3,"RTCDataChannelClosed")
D.ez_=new B.FR(0,"RTCIceConnectionStateNew")
D.ez0=new B.FR(1,"RTCIceConnectionStateChecking")
D.ez1=new B.FR(2,"RTCIceConnectionStateCompleted")
D.ez2=new B.FR(3,"RTCIceConnectionStateConnected")
D.ez3=new B.FR(4,"RTCIceConnectionStateCount")
D.ez4=new B.FR(5,"RTCIceConnectionStateFailed")
D.ez5=new B.FR(6,"RTCIceConnectionStateDisconnected")
D.aQS=new B.FR(7,"RTCIceConnectionStateClosed")
D.aQT=new B.Ys(0,"RTCIceGatheringStateNew")
D.ez6=new B.Ys(1,"RTCIceGatheringStateGathering")
D.a9e=new B.Ys(2,"RTCIceGatheringStateComplete")
D.a9f=new B.Pp(0,"RTCPeerConnectionStateClosed")
D.aQU=new B.Pp(1,"RTCPeerConnectionStateFailed")
D.aQV=new B.Pp(2,"RTCPeerConnectionStateDisconnected")
D.aQW=new B.Pp(3,"RTCPeerConnectionStateNew")
D.aQX=new B.Pp(4,"RTCPeerConnectionStateConnecting")
D.aQY=new B.Pp(5,"RTCPeerConnectionStateConnected")
D.ez7=new B.Pq(0,"RTCSignalingStateStable")
D.ez8=new B.Pq(1,"RTCSignalingStateHaveLocalOffer")
D.ez9=new B.Pq(2,"RTCSignalingStateHaveRemoteOffer")
D.eza=new B.Pq(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ezb=new B.Pq(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQZ=new B.Pq(5,"RTCSignalingStateClosed")
D.fdU=new A.av(160,48)
D.beg=new A.fk(2,null,null,null,null,C.aF,null,null,null,null)
D.ffs=new A.a5(16,16,D.beg,null)
D.fK9=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgV=new A.b0(D.fK9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRR=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fgY=new A.b0(D.fRR,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_N=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fh4=new A.b0(D.h_N,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fJJ=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new A.b0(D.fJJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fW3=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aU4=new A.b0(D.fW3,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXx=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new A.b0(D.fXx,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1g=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fie=new A.b0(D.h1g,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_c=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fij=new A.b0(D.h_c,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0r=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new A.b0(D.h0r,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fIj=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fjD=new A.b0(D.fIj,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTO=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new A.b0(D.fTO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fMt=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fku=new A.b0(D.fMt,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1m=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fky=new A.b0(D.h1m,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fIz=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkE=new A.b0(D.fIz,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fHf=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fkT=new A.b0(D.fHf,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fE2=new A.B("NGMY DOC SHARE",null,C.aVs,null,null,null,null,null,null,null,null,null)
D.fFr=new A.B("Show this to sender",null,C.iD,null,null,null,null,null,null,null,null,null)
D.fGr=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fLf=new A.B("Organization settings",null,C.cE,null,null,null,null,null,null,null,null,null)
D.fLD=new A.B("Sign in",null,C.ci,null,null,null,null,null,null,null,null,null)
D.fMD=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fNa=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQ3=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fSU=new A.B("Send to their Doc Share",null,C.nY,null,null,null,null,null,null,null,null,null)
D.fTf=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTA=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fUc=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fUj=new A.B("Create portal",null,C.ci,null,null,null,null,null,null,null,null,null)
D.fUH=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.fY2=new A.B("Share files & videos\nwith a scan.",null,C.aVv,null,null,null,null,null,null,null,null,null)
D.fYm=new A.B("Add files",null,C.ci,null,null,null,null,null,null,null,null,null)
D.hui=new B.a_l(null)
D.acA=new B.adp(0,"docShare")
D.acB=new B.adp(1,"gate")
D.Wy=new B.adp(2,"gateNoIndividual")})();(function staticFields(){$.aPx=null
$.foo=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahr=A.T(y.N,A.at("lT"))
$.S2=A.T(y.N,y.D)
$.fp3=A.T(y.N,A.at("ad6"))
$.ce4=A.T(y.S,A.at("bxW"))
$.hpG=1
$.iej=null
$.iei=null
$.i59=null
$.he6=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iyr","hHH",()=>new B.crX())
x($,"iwl","hi6",()=>C.a.q(A.bB(A.bB(A.bB(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["i+y/QC298PMg7n/lSL7VP9rVE9I="]=a.current})($__dart_deferred_initializers__);