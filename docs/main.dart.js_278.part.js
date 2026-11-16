((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,F,H,O,E,G,P,Q,R,I,K,B={csw:function csw(){},
i0e(d){var x=null,w=new B.b6t(d,D.eC0,new A.pS(x,x,y.c6),new A.pS(x,x,y.B))
w.bCi(d)
return w},
b6t:function b6t(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
csr:function csr(d){this.a=d},
css:function css(d){this.a=d},
cst:function cst(d){this.a=d},
csq:function csq(d){this.a=d},
csu:function csu(d){this.a=d},
i0f(d,e){var x=y.N
x=new B.b6u(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCj(d,e)
return x},
b6u:function b6u(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
csx:function csx(d){this.a=d},
csy:function csy(d){this.a=d},
csz:function csz(d){this.a=d},
csA:function csA(d){this.a=d},
csB:function csB(d){this.a=d},
csC:function csC(d){this.a=d},
csD:function csD(d){this.a=d},
csE:function csE(d){this.a=d},
heP(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.x0.GR(x,"ngmy_doc_share_v1",new B.fxk(),1)},
i72(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.wU(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
Sk(d,e){return B.in3(d,e)},
in3(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPP
x=7
return A.b(o==null?$.aPP=B.heP():o,$async$Sk)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mk(s,"blobs","readwrite")
C.iE.md(J.mj(q,"blobs"),r,d)
x=8
return A.b(J.oy(q),$async$Sk)
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
return A.i($async$Sk,w)},
Sj(d){return B.in2(d)},
in2(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPP
x=7
return A.b(o==null?$.aPP=B.heP():o,$async$Sj)
case 7:s=f
r=J.mk(s,"blobs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"blobs"),d),$async$Sj)
case 8:q=f
x=9
return A.b(J.oy(r),$async$Sj)
case 9:o=B.i72(q)
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
return A.i($async$Sj,w)},
aih(d){return B.in1(d)},
in1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aih=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPP
x=7
return A.b(p==null?$.aPP=B.heP():p,$async$aih)
case 7:s=f
r=J.mk(s,"blobs","readwrite")
C.iE.Gn(J.mj(r,"blobs"),d)
x=8
return A.b(J.oy(r),$async$aih)
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
return A.i($async$aih,w)},
fxk:function fxk(){},
i9I(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brj(w,v))}return u},
hG7(d,e){var x,w={},v=A.aYv("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fWR(w,v,e)
C.x2.za(v,"change",new B.fWT(w,v,!1))
C.x2.za(v,"cancel",new B.fWS(w))
$.eY.mE()
v.click()
A.bO(C.alx,new B.fWQ(w),y.H)},
fWR:function fWR(d,e,f){this.a=d
this.b=e
this.c=f},
fWT:function fWT(d,e,f){this.a=d
this.b=e
this.c=f},
fWS:function fWS(d){this.a=d},
fWQ:function fWQ(d){this.a=d},
DM(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DM=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUy()?3:4
break
case 3:x=5
return A.b(B.hAP(e,d,s,!0,!1,f,g,h,!1,i),$async$DM)
case 5:x=1
break
case 4:x=6
return A.b(B.RY(d,s,f,g,h,i),$async$DM)
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
return A.b(B.Jt(s,d),$async$DM)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fsS(s,d),$async$DM)
case 14:x=12
return A.b(r.hAP(q,p,o,n,m,l,k,j,a1,i),$async$DM)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ec(new B.fX5(s,i,d,f,g,h),!1,null,y.H)),$async$DM)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ec(new B.fX6(s,i,d,f,g,h),!1,null,y.H)),$async$DM)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DM,w)},
RY(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RY=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1d(e),$async$RY)
case 3:u=k
x=4
return A.b(B.aqS(d,e,!1),$async$RY)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jt(e,d),$async$RY)
case 7:if(k){v=D.ad6
x=1
break}x=8
return A.b(B.Wf(e),$async$RY)
case 8:v=t?D.WQ:D.ad7
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1b(d,e)){v=D.ad6
x=1
break}x=11
return A.b(B.Wf(e),$async$RY)
case 11:v=t?D.WQ:D.ad7
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h9I(d,e)){v=D.ad6
x=1
break}x=14
return A.b(B.Wf(e),$async$RY)
case 14:v=D.WQ
x=1
break
case 13:v=t?D.WQ:D.ad7
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RY,w)},
fsS(d,e){var x=0,w=A.j(y.y),v
var $async$fsS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1b(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1d(d),$async$fsS)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsS,w)},
hAP(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ec(new B.fzZ(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hvM(d,e,f,g,h,i,j){return new B.a_t(e,j,d,g,h,i,f,null)},
fBT(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fBT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fBW(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fBT)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBT,w)},
fCn(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fCn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fCp(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fCn)
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
return A.i($async$fCn,w)},
hf_(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fPg(d,e){var x=0,w=A.j(y.H),v
var $async$fPg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wf(e),$async$fPg)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fPg,w)},
fX5:function fX5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fX6:function fX6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ady:function ady(d,e){this.a=d
this.b=e},
fzZ:function fzZ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_t:function a_t(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBe:function aBe(){this.c=this.a=this.d=null},
dcU:function dcU(d,e){this.a=d
this.b=e},
dcR:function dcR(d){this.a=d},
dcT:function dcT(d){this.a=d},
dcS:function dcS(d){this.a=d},
dcW:function dcW(){},
dcV:function dcV(d){this.a=d},
ae1:function ae1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDT:function aDT(d,e){this.a=d
this.b=e},
aH1:function aH1(d,e,f){this.a=d
this.b=e
this.c=f},
fBW:function fBW(d,e,f){this.a=d
this.b=e
this.c=f},
fBU:function fBU(d){this.a=d},
fBV:function fBV(d,e,f){this.a=d
this.b=e
this.c=f},
fCp:function fCp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCo:function fCo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ced(d,e,f,g,h){return B.hW5(d,e,f,g,h)},
hW5(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ced=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iE(r.dN(d,new B.cee(s,e,h,g,f,q),y.g),y.l),$async$ced)
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
return A.i($async$ced,w)},
b18(d,e,f,g,h){return B.hW6(d,e,f,g,h)},
hW6(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b18=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awn("GET",d)
o=A.h66()
if(o==null)o=new A.ML(A.a([],y.W))
x=7
return A.b(o.fa(0,s).dg(0,C.GN),$async$b18)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CU(),$async$b18)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cn(q,h,o,e,f,"Received via QR")
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
return A.i($async$b18,w)},
b17(d){return B.hW3(d)},
hW3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b17=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vU(d,null).dg(0,C.os),$async$b17)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aQ(0,A.me(A.mc(p.e)).cJ(0,p.w),null)
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
return A.i($async$b17,w)},
cec(d){return B.hW4(d)},
hW4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cec=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vU(d,null).dg(0,C.qC),$async$cec)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.me(A.mc(q.e)).cJ(0,q.w)
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
return A.i($async$cec,w)},
cee:function cee(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jF:function jF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jr(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hWb(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jr(C.a.b2(t,u.length))}return null},
hWc(d){var x=B.Jr(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hW7(){var x,w=$.ov(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a86(d){return B.hW8(d)},
hW8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a86=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bO),$async$a86)
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
return A.i($async$a86,w)},
a87(d,e){return B.hW9(d,e)},
hW9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a87=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hM(d,e,!1,!1,C.cP,null),$async$a87)
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
return A.i($async$a87,w)},
Cm(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cm)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jr(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a88(r),$async$Cm)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a86("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cm)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jr(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aD("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cm)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hW7()
x=14
return A.b(B.a88(m),$async$Cm)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a87("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cm)
case 15:k=f
x=16
return A.b(B.a87("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cm)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aD("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cm)
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
return A.i($async$Cm,w)},
a88(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a88=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jr(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a86("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a88)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
a89(d,e,f,g){return B.hWd(d,e,f,g)},
hWd(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a89=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jr(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a88(r),$async$a89)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.cek())>1048576||g.aU(d,new B.cel())){v=B.Fn(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8k("myCode",d,a0),$async$a89)
case 4:u=a3
try{t=C.X.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fn(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1g(u,g.gJ(d),a0),$async$a89)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ov().az(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.cem(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b19(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a89)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
Fn(d,e,f,g,h){return B.hWa(d,e,f,g,h)},
hWa(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fn=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fn)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cF(a6,0,new B.ceg())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ov().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cS.az(99999)
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
a1=B.Jv(a9,q)
a0=new A.Lj(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fn)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f1().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pp(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abN(a1.a,a4,"media",a1.d,a2).xL(m,n,new A.EB(!0,q.c)),$async$Fn)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fn)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSr(r),$async$Fn)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.ceh(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b19(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fn)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSr(r),$async$Fn)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fn,w)},
b19(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b19=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a86(t),$async$b19)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cef(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a87(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b19,w)},
Om(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Om=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a86("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Om)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
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
return A.b(B.b1a(k,a0),$async$Om)
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
return A.b(B.b1f(h),$async$Om)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wm(g,a0),$async$Om)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cei(),q),n)
d=A.C(new A.Y(r,new B.cej(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cX(d,0,A.dB(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a87("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Om)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
b1a(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
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
j=o==null?null:C.j.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ir_(k,j)
C.d.u(s,i)
x=5
return A.b(B.DK(l,m,"Received via My Code",t,e,i),$async$b1a)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSr(s),$async$b1a)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1a,w)},
cek:function cek(){},
cel:function cel(){},
cem:function cem(){},
ceg:function ceg(){},
ceh:function ceh(){},
cef:function cef(){},
cei:function cei(){},
cej:function cej(){},
fX2(d,e){var x=0,w=A.j(y.H)
var $async$fX2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ec(new B.fX3(e),!1,null,y.H)),$async$fX2)
case 2:return A.h(null,w)}})
return A.i($async$fX2,w)},
bGm(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ec(new B.fX4(g,e,f),!1,null,y.y)),$async$bGm)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGm,w)},
fX3:function fX3(d){this.a=d},
fX4:function fX4(d,e,f){this.a=d
this.b=e
this.c=f},
Wc:function Wc(d,e){this.c=d
this.a=e},
aFe:function aFe(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dZu:function dZu(d,e){this.a=d
this.b=e},
Wg:function Wg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFh:function aFh(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_D:function e_D(d){this.a=d},
e_E:function e_E(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_G:function e_G(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_L:function e_L(d){this.a=d},
e_O:function e_O(){},
e_M:function e_M(d){this.a=d},
e_N:function e_N(d,e){this.a=d
this.b=e},
blp:function blp(){},
Wd:function Wd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFf:function aFf(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZv:function dZv(d){this.a=d},
dZw:function dZw(d){this.a=d},
h9J(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hWf(d){var x=d.l4
if(x>=0)return x
return 4.99},
hWe(d){var x=d.m6,w=y.N
w=x.jr(x,new B.ceo(),w,w)
return w},
hqN(d){var x=d.l5,w=y.N
w=x.jr(x,new B.cep(),w,w)
return w},
b1d(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1d)
case 7:s=f
r=A.w(p)
r=A.aU(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b1d,w)},
a8b(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a8b)
case 4:x=3
return A.b(g.aD("String","ngmy_doc_share_path_"+u,e),$async$a8b)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8b,w)},
Wf(d){var x=0,w=A.j(y.H),v,u
var $async$Wf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wf)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wf)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
h9I(d,e){var x,w,v
if(B.hWf(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hWe(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b1b(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hqN(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hqO(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hqN(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
aqT(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqT)
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
return A.i($async$aqT,w)},
aqU(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqT(d),$async$aqU)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqU)
case 5:x=4
return A.b(f.aD("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqU,w)},
aqS(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h9J(d)
if(u<=0){v=!1
x=1
break}if(B.h9I(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqT(e),$async$aqS)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqS,w)},
b1c(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jt(e,d),$async$b1c)
case 3:if(g){v=-1
x=1
break}u=B.h9J(d)
if(u<=0){v=-1
x=1
break}if(B.h9I(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqT(e),$async$b1c)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1c,w)},
cer(d,e,f){var x=0,w=A.j(y.y),v
var $async$cer=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jt(e,d),$async$cer)
case 3:if(h){v=!1
x=1
break}v=B.aqS(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cer,w)},
ceq(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ceq=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cer(d,u,i.gUy()),$async$ceq)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceq,w)},
a8a(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8a=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUy()){v=!0
x=1
break}if(B.b1b(d,u)){v=!0
x=1
break}x=5
return A.b(A.lB(u,C.U5),$async$a8a)
case 5:x=k?3:4
break
case 3:B.hqO(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8a)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lh(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.U5,"Doc Share for Organizations"),$async$a8a)
case 7:if(!k){v=!1
x=1
break}B.hqO(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8a)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
ceo:function ceo(){},
cep:function cep(){},
fXW(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fXW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fXW)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fp8.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fp8.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXW,w)},
itF(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fp8.bq($.fp8,new B.fXY(d))},
fXY:function fXY(d){this.a=d},
fqQ(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fqQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$fqQ)
case 3:C.Bm.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mE()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqQ,w)},
ahb(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fpU.n(0,d,new B.adf(A.br(e,!0,v)))
x=3
return A.b(A.aA(),$async$ahb)
case 3:x=2
return A.b(h.aD("String",d+"_manifest",C.X.aw(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahb)
case 2:return A.h(null,w)}})
return A.i($async$ahb,w)},
ah5(d){return B.ibI(d)},
ibI(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fpU.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah5)
case 3:u=j.aU(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b7(s,new B.fur(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.adf(r)
$.fpU.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah5,w)},
RO(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.H8.n(0,d,u)
x=3
return A.b(B.Sk(d,u),$async$RO)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RO,w)},
aQb(d){return B.ibG(d)},
ibG(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H8.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sj(d),$async$aQb)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H8.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQb)
case 4:s=f
r=A.aU(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aO(r)
x=!J.ct(q)?9:10
break
case 9:B.RO(d,q)
x=11
return A.b(J.hc(s,d),$async$aQb)
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
return A.i($async$aQb,w)},
i7v(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cf(J.eF(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cf(A.wU(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
return A.f4(null,y.K)},
a2Y(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fD(r,"loadend",new B.fAa(r,t),!1,s)
A.fD(r,"error",new B.fAb(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.O3,new B.fAc())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2Y,w)},
aQv(d,e,f){return B.ie4(d,e,f)},
ie4(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQv=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2Y(i),$async$aQv)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sk(o,p),$async$aQv)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahb(k,j,s),$async$aQv)
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
return A.i($async$aQv,w)},
aQu(d,e,f){return B.ie3(d,e,f)},
ie3(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQu=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQv(d,e,f),$async$aQu)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2Y(f),$async$aQu)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H8.n(0,s,r)
$.S4.n(0,s,r)
x=11
return A.b(B.RO(s,r),$async$aQu)
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
return A.i($async$aQu,w)},
Cn(d,e,f,g,h,i){return B.hWo(d,e,f,g,h,i)},
hWo(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cn=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cS.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jF(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1j(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RO(s,d),$async$Cn)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cn)
case 10:r=a2
x=11
return A.b(r.aD("String",s,C.cU.gcu().aO(d)),$async$Cn)
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
return A.b(B.Bl(e),$async$Cn)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hi(e,j),$async$Cn)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cn,w)},
Wh(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wh=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bl(d),$async$Wh)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cS.az(99999)
n=p.b
l=o.type
l.toString
k=B.hqQ(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jF(m,n,k,l,j,"From folder",null,B.b1j(),null)
$.ahB.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2Y(o),$async$Wh)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H8.n(0,h,g)
$.S4.n(0,h,g)
B.RO(h,g)
x=9
break
case 10:x=11
return A.b(B.aQu(d,m,o),$async$Wh)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hi(d,t),$async$Wh)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
h9N(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h9N=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hqQ(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ju(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cn(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9N,w)},
Ju(d,e,f,g,h,i){return B.hWn(d,e,f,g,h,i)},
hWn(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ju=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cS.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lj(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ju)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.ct(m)){x=6
break}J.fZ(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.SS(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kL(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sk(k,l),$async$Ju)
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
return A.b(j.a1(0),$async$Ju)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sk(k,new Uint8Array(A.cf(n))),$async$Ju)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahb(r,q,g),$async$Ju)
case 16:f=new B.jF(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1j(),null)
x=17
return A.b(B.Bl(d),$async$Ju)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hi(d,e),$async$Ju)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ju,w)},
Wj(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wj=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahB.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2Y(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah5(s),$async$Wj)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sj(u[o]),$async$Wj)
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
v=A.wU(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S4.h(0,s)
if(i==null)i=$.H8.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rX(d,e),$async$Wj)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S4.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wU(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wj,w)},
hqQ(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rX(d,e){return B.hWp(d,e)},
hWp(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S4.h(0,f)
if(e==null)e=$.H8.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahB.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2Y(s),$async$rX)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H8.n(0,f,r)
$.S4.n(0,f,r)
B.RO(f,r)
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
return A.b(B.ah5(f),$async$rX)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aA1(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sj(g[l]),$async$rX)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.apY()
if(!C.aI.gau(r)){$.H8.n(0,f,r)
$.S4.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQb(f),$async$rX)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S4.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wj(a0,a1,0,g),$async$rX)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cf(i))
$.H8.n(0,f,h)
$.S4.n(0,f,h)
B.RO(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rX,w)},
hWs(d){var x,w,v=$.ahB.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hWt(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hWq(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ar_(d,e,f,g,h){return B.hWr(d,e,f,g,h)},
hWr(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ar_=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahB.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2Y(s),$async$ar_)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rX(g,e),$async$ar_)
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
return A.b(n.iB(d).xL(h,r,new A.EB(!0,e.c)),$async$ar_)
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
return A.i($async$ar_,w)},
hqS(d,e,f,g,h){var x,w,v,u,t=$.hqR
$.hqR=t+1
x=Date.now()
w=""+1000*x+"_"+C.cS.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ceC.n(0,t,new B.byh(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aA1(u)))
return t},
h9O(d){var x=0,w=A.j(y.H)
var $async$h9O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9O,w)},
Jv(d,e){var $async$Jv=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahB.h(0,h)
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
return A.qy(B.Wj(d,e,p,o<q?o:q),$async$Jv,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qy(A.GG(n),$async$Jv,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qy(B.ah5("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jv,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qy(B.Sj(h[l]),$async$Jv,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qy(A.GG(k),$async$Jv,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qy(B.rX(d,e),$async$Jv,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qy(A.GG(A.wU(j,p,o<i?o:i)),$async$Jv,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qy(null,0,w)
case 2:return A.qy(t.at(-1),1,w)}})
var x=0,w=A.hzI($async$Jv,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hBv(w)},
b1l(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ceC.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5K(),$async$b1l)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1l,w)},
Wi(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceC.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5K(),$async$Wi)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahb(r.c,u,r.z),$async$Wi)
case 4:t=new B.jF(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1j(),null)
u=r.a
x=5
return A.b(B.Bl(u),$async$Wi)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hi(u,s),$async$Wi)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wi,w)},
a8h(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceC.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aih(u[s]),$async$a8h)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
ceE(d,e,f){var x=0,w=A.j(y.H)
var $async$ceE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDk(d,e,f),$async$ceE)
case 2:return A.h(null,w)}})
return A.i($async$ceE,w)},
ceF(d,e,f){var x=0,w=A.j(y.H)
var $async$ceF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDl(d,e,f),$async$ceF)
case 2:return A.h(null,w)}})
return A.i($async$ceF,w)},
Fo(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bl(d),$async$Fo)
case 2:p=g
J.nU(p,new B.ceD(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H8.W(0,v)
$.ahB.W(0,e)
x=3
return A.b(B.ah5(v),$async$Fo)
case 3:u=g
$.fpU.W(0,v)
x=4
return A.b(A.aA(),$async$Fo)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fo)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fo)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aih(s[q]),$async$Fo)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aih(v),$async$Fo)
case 13:x=14
return A.b(B.Hi(d,p),$async$Fo)
case 14:return A.h(null,w)}})
return A.i($async$Fo,w)},
b1k(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rX(d,e),$async$b1k)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fqQ(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1k,w)},
Bl(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bl)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fAd(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bl,w)},
Hi(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hi)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fEq(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aD("String","ngmy_doc_share_index_v1_"+u,C.X.aw(t,null)),$async$Hi)
case 3:return A.h(null,w)}})
return A.i($async$Hi,w)},
bDk(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bl(d),$async$bDk)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fyo(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG5(f))
x=4
return A.b(B.Hi(d,u),$async$bDk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDk,w)},
bDl(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bl(d),$async$bDl)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fyp(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOD(f))
x=4
return A.b(B.Hi(d,u),$async$bDl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDl,w)},
adf:function adf(d){this.a=d},
fur:function fur(){},
fAa:function fAa(d,e){this.a=d
this.b=e},
fAb:function fAb(d){this.a=d},
fAc:function fAc(){},
ceD:function ceD(d){this.a=d},
byh:function byh(d,e,f,g,h,i,j,k,l){var _=this
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
fAd:function fAd(){},
fEq:function fEq(){},
fyo:function fyo(d){this.a=d},
fyp:function fyp(d){this.a=d},
a8i(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.ceI())?3:4
break
case 3:x=5
return A.b(B.b1m(d,e),$async$a8i)
case 5:u=g
if(u!=null){t=u.c
B.Oo(d,u.b,e,t)}v=u
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
return A.b(B.b1h(s),$async$a8i)
case 10:case 9:if(g){v=new A.Ra(1,D.TJ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wk(d,e),$async$a8i)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wp(!0,!0,d,e),$async$a8i)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oo(d,D.Ao,e,t)
v=new A.Ra(p,D.Ao,t)
x=1
break}v=B.ceH(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
Wk(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8k(null,d,e),$async$Wk)
case 3:p=g
try{u=C.X.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1g(p,d.length,e),$async$Wk)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ceF(e,C.d.gH(d).a,r.b),$async$Wk)
case 7:case 6:q=r.a
x=8
return A.b(B.Oo(d,D.TJ,e,q),$async$Wk)
case 8:v=new A.Ra(d.length,D.TJ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
Wl(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mL(D.nb)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8j(d,e),$async$Wl)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ceA(s,d,e,t),$async$Wl)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1h(t),$async$Wl)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rX(e,d),$async$Wl)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wk(A.a([d],y.r),e),$async$Wl)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
Wn(){var x=0,w=A.j(y.H)
var $async$Wn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h9H(),$async$Wn)
case 2:x=3
return A.b(B.aSN(),$async$Wn)
case 3:return A.h(null,w)}})
return A.i($async$Wn,w)},
a8j(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1j()
x=3
return A.b(B.ceE(e,d.a,u),$async$a8j)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
Oo(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.TJ&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8j(p,f),$async$Oo)
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
return A.b(B.cez(o,p,u,f),$async$Oo)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ceA(o,p,f,t),$async$Oo)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cey(o,u,p,f),$async$Oo)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1m(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceG(e,d),$async$b1m)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wp(!1,!0,d,e),$async$b1m)
case 4:u=g
if(u!=null){t=u.b
v=new A.Ra(u.a,D.Ao,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1m,w)},
ceG(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ceG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wj(d,s,0,1),$async$ceG)
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
return A.i($async$ceG,w)},
ceH(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ceH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8k(null,d,e),$async$ceH)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hqP(u)
if(t.length>800){v=null
x=1
break}v=new A.Ra(d.length,D.dSo,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceH,w)},
ar0(d,e,f){return B.hWw(d,e,f)},
hWw(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ar0=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h9M(g)?3:4
break
case 3:x=5
return A.b(B.ceB(g),$async$ar0)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fp(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b1f(q),$async$ar0)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wm(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h9L(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wm(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jw(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jw(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Jw(h,d,a0)
x=1
break}if(J.eK(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wm(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ar0,w)},
Jw(d,e,f){return B.hWu(d,e,f)},
hWu(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jw=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
r=A.cC(A.w(s)+"/manifest.json",0,null)
q=A.cC(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b17(r),$async$Jw)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b17(A.cC(s,0,null)),$async$Jw)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ced(o,r,a1,n,a2),$async$Jw)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.cec(q),$async$Jw)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wm(l,a2),$async$Jw)
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
return A.i($async$Jw,w)},
a8k(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8k=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rX(f,r),$async$a8k)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cU.gcu().aO(q)],t,s))
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
return A.i($async$a8k,w)},
Wm(d,e){return B.hWv(d,e)},
hWv(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wm=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cM.aO(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cn(i,a3,d,k,l,o),$async$Wm)
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
return A.i($async$Wm,w)},
On:function On(d,e){this.a=d
this.b=e},
ceI:function ceI(){},
a2x(d){var x=A.P(d).ax.a===C.I,w=x?D.aiO:D.agi,v=x?D.akA:C.c,u=x?C.aS:C.a_,t=x?C.bN:C.an,s=x?D.ahL:C.bj
return new A.aIh([w,s,v,u,t,x?C.fr:C.bQ])},
hHa(d,e){var x=e?C.w.j(0.72):C.b6
return A.cg(null,x,!0,null,new B.h1d(e),d,null,!0,!0,y.N)},
cen(d,e,f,g,h,i,j,k,l){return new B.We(e,l,d,f,k,j,g,h,i,null)},
a_v(d,e,f,g,h,i,j){return new B.bfY(g,h,j,e,i,d,f,null)},
h1d:function h1d(d){this.a=d},
a_s:function a_s(d,e){this.c=d
this.a=e},
aBd:function aBd(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcQ:function dcQ(d){this.a=d},
dcO:function dcO(d){this.a=d},
dcP:function dcP(d){this.a=d},
bxU:function bxU(){},
We:function We(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFg:function aFg(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_B:function e_B(d){this.a=d},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e__:function e__(d,e){this.a=d
this.b=e},
dZy:function dZy(d,e,f){this.a=d
this.b=e
this.c=f},
dZx:function dZx(d){this.a=d},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZE:function dZE(d,e,f){this.a=d
this.b=e
this.c=f},
dZD:function dZD(d){this.a=d},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_q:function e_q(d){this.a=d},
dZW:function dZW(d,e,f){this.a=d
this.b=e
this.c=f},
dZT:function dZT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZC:function dZC(d){this.a=d},
e_3:function e_3(d){this.a=d},
e_2:function e_2(){},
dZI:function dZI(d){this.a=d},
e_m:function e_m(d,e){this.a=d
this.b=e},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_o:function e_o(d,e){this.a=d
this.b=e},
dZU:function dZU(d,e){this.a=d
this.b=e},
dZV:function dZV(d,e){this.a=d
this.b=e},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_b:function e_b(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_c:function e_c(){},
e_d:function e_d(){},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_g:function e_g(){},
e_h:function e_h(d){this.a=d},
e_9:function e_9(d,e){this.a=d
this.b=e},
e_4:function e_4(d){this.a=d},
e_5:function e_5(d){this.a=d},
e_6:function e_6(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_8:function e_8(d){this.a=d},
dZF:function dZF(){},
dZG:function dZG(d){this.a=d},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZB:function dZB(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e,f){this.a=d
this.b=e
this.c=f},
dZX:function dZX(d){this.a=d},
dZY:function dZY(d,e,f){this.a=d
this.b=e
this.c=f},
dZR:function dZR(d,e){this.a=d
this.b=e},
dZN:function dZN(d){this.a=d},
dZK:function dZK(d,e,f){this.a=d
this.b=e
this.c=f},
dZO:function dZO(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZQ:function dZQ(){},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZL:function dZL(d){this.a=d},
dZJ:function dZJ(d,e,f){this.a=d
this.b=e
this.c=f},
dZM:function dZM(){},
e_1:function e_1(d){this.a=d},
e_0:function e_0(d,e){this.a=d
this.b=e},
e_l:function e_l(d,e){this.a=d
this.b=e},
e_i:function e_i(d){this.a=d},
e_j:function e_j(d,e){this.a=d
this.b=e},
e_k:function e_k(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_w:function e_w(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_z:function e_z(){},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_t:function e_t(d,e,f){this.a=d
this.b=e
this.c=f},
e_r:function e_r(d,e,f){this.a=d
this.b=e
this.c=f},
e_u:function e_u(d,e){this.a=d
this.b=e},
e_v:function e_v(d,e){this.a=d
this.b=e},
aBa:function aBa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfX:function bfX(d,e,f){this.c=d
this.d=e
this.a=f},
dcM:function dcM(){},
dcN:function dcN(){},
adz:function adz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dd9:function dd9(){},
dd8:function dd8(d){this.a=d},
a_u:function a_u(d,e,f){this.c=d
this.d=e
this.a=f},
aBf:function aBf(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dd5:function dd5(d){this.a=d},
dd6:function dd6(d,e,f){this.a=d
this.b=e
this.c=f},
dd7:function dd7(d,e){this.a=d
this.b=e},
dd3:function dd3(d,e){this.a=d
this.b=e},
dd1:function dd1(d){this.a=d},
dd_:function dd_(d){this.a=d},
dcX:function dcX(d){this.a=d},
dd2:function dd2(d){this.a=d},
dcZ:function dcZ(d){this.a=d},
dd4:function dd4(d){this.a=d},
dd0:function dd0(d){this.a=d},
dcY:function dcY(d){this.a=d},
a_r:function a_r(d,e,f){this.c=d
this.d=e
this.a=f},
aBc:function aBc(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcJ:function dcJ(d){this.a=d},
dcI:function dcI(d,e){this.a=d
this.b=e},
dcK:function dcK(d){this.a=d},
dcH:function dcH(d,e){this.a=d
this.b=e},
dcL:function dcL(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcE:function dcE(d,e){this.a=d
this.b=e},
dcF:function dcF(d){this.a=d},
QJ:function QJ(d,e,f){this.c=d
this.d=e
this.a=f},
aBi:function aBi(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddm:function ddm(d){this.a=d},
ddn:function ddn(d){this.a=d},
ddo:function ddo(d){this.a=d},
ddp:function ddp(d){this.a=d},
ddq:function ddq(d,e){this.a=d
this.b=e},
ddr:function ddr(d){this.a=d},
ddt:function ddt(d){this.a=d},
dds:function dds(d){this.a=d},
a_w:function a_w(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBg:function aBg(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddj:function ddj(d,e){this.a=d
this.b=e},
dda:function dda(d,e,f){this.a=d
this.b=e
this.c=f},
ddb:function ddb(d){this.a=d},
ddc:function ddc(){},
ddh:function ddh(){},
ddd:function ddd(d,e){this.a=d
this.b=e},
dde:function dde(d,e){this.a=d
this.b=e},
ddf:function ddf(d,e){this.a=d
this.b=e},
ddg:function ddg(d,e){this.a=d
this.b=e},
adx:function adx(d,e){this.c=d
this.a=e},
dcB:function dcB(d){this.a=d},
a_q:function a_q(d){this.a=d},
aBb:function aBb(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_x:function a_x(d,e){this.c=d
this.a=e},
aBh:function aBh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddl:function ddl(d){this.a=d},
ddk:function ddk(d){this.a=d},
bfY:function bfY(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hWx(){var x,w=$.ov(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.he(v)},
Op(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Op=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Op)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bO),$async$Op)
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
return A.i($async$Op,w)},
a8l(d){return B.hWy(d)},
hWy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8l)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$a8l)
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
return A.i($async$a8l,w)},
Wo(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Op(),$async$Wo)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dJ(A.a2(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8l(s),$async$Wo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wo,w)},
Wp(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wp=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wp)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.br(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceK(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hWx()
t=A.U(u).k("N<1,a9<n,aE>>")
r=A.C(new A.N(u,new B.ceL(s),t),t.k("ak.E"))
x=6
return A.b(B.Op(),$async$Wp)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8l(q),$async$Wp)
case 7:x=8
return A.b(B.a8m(r,u,g,s),$async$Wp)
case 8:v=new A.brO(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
ar1(d){var x=0,w=A.j(y.y),v,u,t
var $async$ar1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Op(),$async$ar1)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar1,w)},
ceM(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Op(),$async$ceM)
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
return A.i($async$ceM,w)},
a8m(d,e,f,g){return B.hWz(d,e,f,g)},
hWz(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8m=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ar_("media",r,new B.ceJ(s,e,g),f,q),$async$a8m)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wo(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8m)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wo(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8m)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wo(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8m)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8m,w)},
Fp(d,e,f){return B.hWA(d,e,f)},
hWA(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fp=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fp)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ar1(b3),$async$Fp)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iQ,null,g),$async$Fp)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ar1(b3),$async$Fp)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Op(),$async$Fp)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.j.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ct(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gJ(a4)
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
a8=$.f1().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pp(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abN(a8.a,b0,"media",a8.d,a9).Df(m)
k=A.cC(l,0,null)
x=17
return A.b(B.b18(k,n,o,s,b7),$async$Fp)
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
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
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
a8=A.pp(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abN(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fp)
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
a0=A.dJ(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8l(e),$async$Fp)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fp,w)},
ceK:function ceK(){},
ceL:function ceL(d){this.a=d},
ceJ:function ceJ(d,e,f){this.a=d
this.b=e
this.c=f},
aSN(){var x=0,w=A.j(y.H),v,u
var $async$aSN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i6I=null
v=y.H
u=A.dM(null,v)
x=2
return A.b(u,$async$aSN)
case 2:u=A.dM(null,v)
x=3
return A.b(u,$async$aSN)
case 3:u=$.hfc
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dM(u,v),$async$aSN)
case 4:$.hfc=$.ifR=$.ifS=null
return A.h(null,w)}})
return A.i($async$aSN,w)},
fE1(d){var x=0,w=A.j(y.H),v,u
var $async$fE1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9O){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fE2(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.ij,new B.fE3()),$async$fE1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fE1,w)},
ifP(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hWh(x):x},
hfg(d){var x=0,w=A.j(y.T),v,u,t
var $async$hfg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.ar3(u)
x=1
break}v=B.h9L(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfg,w)},
hff(d){var x=0,w=A.j(y.T),v,u,t
var $async$hff=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.ar4(u)
x=1
break}v=B.h9L(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hff,w)},
fXF(d){var x=0,w=A.j(y.T),v
var $async$fXF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar4(d),$async$fXF)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXF,w)},
bEd(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hff(d),$async$bEd)
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
return A.i($async$bEd,w)},
frH(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$frH=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wi(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cn(d.apY(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frH,w)},
Hk(d,e,f){return B.iii(d,e,f)},
iii(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hk=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hfg(a1),$async$Hk)
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
return A.b($.hJa().aGm(D.dFD,null),$async$Hk)
case 4:l=d.hfc=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aA1(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fED(f,k,new B.fEE(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8N(0,new B.Yy(r,"offer")),$async$Hk)
case 5:d=l
x=7
return A.b(l.amo(0),$async$Hk)
case 7:x=6
return A.b(d.a8F(0,a4),$async$Hk)
case 6:x=8
return A.b(B.fE1(l),$async$Hk)
case 8:x=9
return A.b(l.aqK(),$async$Hk)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ifP(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aw(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ar5(m,h),$async$Hk)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hqP(h)
case 11:v=new A.br3(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hk,w)},
fE2:function fE2(d){this.a=d},
fE3:function fE3(){},
fEE:function fEE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fED:function fED(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEC:function fEC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ikn(d){switch(d){case"new":return D.eC1
case"checking":return D.eC2
case"connected":return D.eC4
case"completed":return D.eC3
case"failed":return D.eC6
case"disconnected":return D.eC7
case"closed":return D.aRG
case"count":return D.eC5}return D.aRG},
iko(d){switch(d){case"new":return D.aRH
case"gathering":return D.eC8
case"complete":return D.a9O}return D.aRH},
ivd(d){switch(d){case"stable":return D.eC9
case"have-local-offer":return D.eCa
case"have-local-pranswer":return D.eCc
case"have-remote-offer":return D.eCb
case"have-remote-pranswer":return D.eCd
case"closed":return D.aRN}return D.aRN},
itm(d){switch(d){case"new":return D.aRK
case"connecting":return D.aRL
case"connected":return D.aRM
case"closed":return D.a9P
case"disconnected":return D.aRJ
case"failed":return D.aRI}return D.a9P},
aaJ:function aaJ(d,e){this.a=d
this.b=e},
Pt:function Pt(d,e){this.a=d
this.b=e},
Yx:function Yx(d,e){this.a=d
this.b=e},
Ps:function Ps(d,e){this.a=d
this.b=e},
FT:function FT(d,e){this.a=d
this.b=e},
csv:function csv(){},
hbw(d){var x=new B.FS()
x.a=d
x.b=!0
return x},
FS:function FS(){this.b=this.a=$},
aaI:function aaI(){},
avy:function avy(){},
Yy:function Yy(d,e){this.a=d
this.b=e},
h9H(){var x=0,w=A.j(y.H)
var $async$h9H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9H,w)},
h9K(d,e,f){var x=0,w=A.j(y.T),v
var $async$h9K=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mL(D.nb))){v=null
x=1
break}v=B.fXW(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9K,w)},
hqP(d){var x,w=F.afH.a5t(C.dW.aO(d),null)
if(w.length===0){x=C.dW.aO(d)
return C.cU.gcu().aO(x)}return C.cU.gcu().aO(w)},
hWg(d){var x,w,v=C.cM.aO(d)
try{x=C.ca.cJ(0,F.afG.bg1(v,!1))
return x}catch(w){x=C.ca.cJ(0,v)
return x}},
h9L(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hWg(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cJ(0,C.cM.aO(x))
return v}catch(u){return x}}return null},
hWh(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hWi(){var x,w=$.ov(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b1e(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bO),$async$b1e)
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
return A.i($async$b1e,w)},
ces(d,e){return B.hWj(d,e)},
hWj(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ces=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cP,null),$async$ces)
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
return A.i($async$ces,w)},
b1h(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1e(d),$async$b1h)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1h,w)},
b1g(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1g=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hWi()
r=C.a.i(f)
t=C.dW.aO(s)
x=3
return A.b(B.ces(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cU.gcu().aO(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1g)
case 3:if(!h){v=null
x=1
break}v=new A.a1x("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1g,w)},
b1f(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1e(o),$async$b1f)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cJ(0,C.cM.aO(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1f,w)},
cet(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cet=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(W.bFa("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cP),$async$cet)
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
return A.i($async$cet,w)},
b1i(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Js(),$async$b1i)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1i,w)},
aqX(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqX)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1i(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqX,w)},
aqV(d,e){var x=0,w=A.j(y.H)
var $async$aqV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqV)
case 3:x=2
return A.b(g.aD("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqV)
case 2:return A.h(null,w)}})
return A.i($async$aqV,w)},
a8d(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8d)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Js(),$async$a8d)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dp(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8c(s),$async$a8d)
case 5:x=6
return A.b(B.aqV(f,u),$async$a8d)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
a8e(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8e=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8e)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Js(),$async$a8e)
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
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqV(g,q),$async$a8e)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8c(u),$async$a8e)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
a8f(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8f)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Js(),$async$a8f)
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
s=B.b1b(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8f)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aD("String","ngmy_doc_share_school_session_"+s,C.X.aw(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8f)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
ceu(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ceu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$ceu)
case 7:s=f
p=A.w(n)
r=A.aU(J.t(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$ceu,w)},
Jt(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceu(d),$async$Jt)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1i(t),$async$Jt)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqW(d),$async$Jt)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1b(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqW(d),$async$Jt)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jt,w)},
aqW(d){var x=0,w=A.j(y.H)
var $async$aqW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqW)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqW)
case 2:return A.h(null,w)}})
return A.i($async$aqW,w)},
b1j(){var x,w=$.ov(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a8g(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h9M(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cex(d){return B.hWl(d)},
hWl(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cex=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8g(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bO),$async$cex)
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
return A.i($async$cex,w)},
aqZ(d,e){return B.hWm(d,e)},
hWm(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8g(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cP,null),$async$aqZ)
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
return A.i($async$aqZ,w)},
cez(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cez=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8g(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqZ(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cez)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cez,w)},
cey(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cey=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8g(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqZ(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cey)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cey,w)},
ceA(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ceA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8g(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqZ(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceA,w)},
ceB(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ceB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h9M(d)){v=null
x=1
break}x=3
return A.b(B.cex(d),$async$ceB)
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
return A.i($async$ceB,w)},
a8n(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8n=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8n)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bO),$async$a8n)
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
return A.i($async$a8n,w)},
ar2(d){return B.hWB(d)},
hWB(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ar2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$ar2)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$ar2)
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
return A.i($async$ar2,w)},
ar3(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ar3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar3)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8n(),$async$ar3)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cJ(0,C.cM.aO(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dJ(A.a2(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.ar2(s),$async$ar3)
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
return A.i($async$ar3,w)},
ar5(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ar5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$ar5)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8n(),$async$ar5)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dJ(A.a2(s,r,q),r,q)
r=C.dW.aO(C.a.i(e))
q.n(0,"answer",C.cU.gcu().aO(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.ar2(u),$async$ar5)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar5,w)},
ar4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ar4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar4)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8n(),$async$ar4)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cJ(0,C.cM.aO(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ar4,w)},
apW(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qo)){v=null
x=1
break}x=3
return A.b(p.mg(e),$async$apW)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hp),$async$apW)
case 7:q=g
o=q
o=o==null?null:J.eU(J.w3(o))
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
return A.i($async$apW,w)},
ir_(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.v(w),5,"0")
return v},
fVX(d){return B.ir1(d)},
ir1(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fVX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Ls(d,3600),$async$fVX)
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
return A.i($async$fVX,w)},
DK(d,e,f,g,h,i){var x=null
return B.iqZ(d,e,f,g,h,i)},
iqZ(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DK=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hqS(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h9O(r),$async$DK)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fVX(o),$async$DK)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8h(r),$async$DK)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aVi)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.ML(A.a([],g))
x=15
return A.b(d.fa(0,A.awn("GET",A.cC(n,0,null))).dg(0,C.GN),$async$DK)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8h(r),$async$DK)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lj(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DK)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1l(r,k),$async$DK)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DK)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wi(r)
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
return A.b(B.a8h(r),$async$DK)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DK,w)},
aSr(d){return B.ir0(d)},
ir0(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aSr)
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
return A.i($async$aSr,w)}},D,S,L,T,U,V,W,M,X
J=c[1]
A=c[0]
C=c[2]
N=c[47]
F=c[265]
H=c[152]
O=c[235]
E=c[228]
G=c[95]
P=c[198]
Q=c[153]
R=c[233]
I=c[270]
K=c[278]
B=a.updateHolder(c[22],B)
D=c[276]
S=c[197]
L=c[218]
T=c[74]
U=c[259]
V=c[80]
W=c[62]
M=c[94]
X=c[277]
B.csw.prototype={
aGm(d,e){return this.cQ7(d,e)},
cQ7(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dJ(r,s,t)
t.u(0,d)
u=new q(A.kk(A.cv(t)))
t=J.k(u)
v=B.i0f(C.cU.gcu().aO(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGm,w)}}
B.b6t.prototype={
bCi(d){var x=this,w=x.w
w.onclose=A.ht(new B.csr(x))
w.onopen=A.ht(new B.css(x))
w.onmessage=A.ht(new B.cst(x))
w.onbufferedamountlow=A.ht(new B.csu(x))},
gd6(d){return this.x},
aiC(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FS()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hbw(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiC)
case 8:v=t.hbw(s.ap5(f,0,null))
x=1
break
case 7:case 4:v=B.hbw(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiC,w)}}
B.b6u.prototype={
bCj(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ht(new B.csx(x)))
w.addEventListener("icecandidate",A.ht(new B.csy(x)))
w.addEventListener("iceconnectionstatechange",A.ht(new B.csz(x)))
w.onicegatheringstatechange=A.ht(new B.csA(x))
w.addEventListener("signalingstatechange",A.ht(new B.csB(x)))
if(!$.hji())w.addEventListener("connectionstatechange",A.ht(new B.csC(x)))
w.addEventListener("negotiationneeded",A.ht(new B.csD(x)))
w.addEventListener("track",A.ht(new B.csE(x)))},
amo(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kk(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amo)
case 3:t=f
v=new B.Yy(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amo,w)},
a8F(d,e){return this.bre(0,e)},
bre(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8F)
case 2:return A.h(null,w)}})
return A.i($async$a8F,w)},
a8N(d,e){return this.brz(0,e)},
brz(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8N)
case 2:return A.h(null,w)}})
return A.i($async$a8N,w)},
aqK(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yy(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqK,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f4(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.ady.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_t.prototype={
S(){return new B.aBe()},
gd1(){return this.c}}
B.aBe.prototype={
Y(){this.a4()
this.afb()},
afb(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1c(u.e,u.c),$async$afb)
case 2:t=e
if(v.c!=null)v.m(new B.dcU(v,t))
return A.h(null,w)}})
return A.i($async$afb,w)},
QY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqS(t.e,t.c,!1),$async$QY)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fnk)
x=1
break}x=4
return A.b(B.a8b(u.a.c,"individual"),$async$QY)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a72(A.ec(new B.dcR(u),!1,null,y.H)),$async$QY)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QY,w)},
JO(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fBT(o),$async$JO)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8f(o.e,r,s,q),$async$JO)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fkj)
x=1
break}x=5
return A.b(B.a8b(u.a.c,"member"),$async$JO)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a72(A.ec(new B.dcT(u),!1,null,y.H)),$async$JO)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JO,w)},
yH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8a(t.e,o,t.f,t.r,t.w,s),$async$yH)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8b(u.a.c,"org_owner"),$async$yH)
case 4:x=5
return A.b(B.aqX(u.a.c),$async$yH)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fCn(o),$async$yH)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8d(s,t,o,q.c),$async$yH)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fkf)
x=1
break}x=10
return A.b(B.aqX(u.a.c),$async$yH)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a72(A.ec(new B.dcS(u),!1,null,y.H)),$async$yH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yH,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I,q=r?C.nD:C.qp,p=B.h9J(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dN,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.fR,24)],y.V)
u=y.p
v=A.r(s,A.x(A.a([A.r(s,D.fHz,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hh,s,s,s),C.aC,D.h0A,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.caZ,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m1(new B.dcW(),s),C.T,v,C.e4,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.ae)
if(!t.a.x)C.d.u(w,A.a([new B.ae1(C.f1,C.aEb,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcjh(),s),C.ae],u))
w.push(new B.ae1(C.py,C.a5p,"Team Member","Sign in with your organization access code + password",t.gck8(),s))
w.push(C.ae)
w.push(new B.ae1(C.aq8,C.a74,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjE(),s))
return A.c4(s,q,A.bm(!0,A.cb(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae1.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aH(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eB(A.A(A.a([A.r(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mD,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zh,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDT.prototype={}
B.aH1.prototype={}
B.jF.prototype={
mL(d){var x=this.b,w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garr(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.j.ad(x/1024,1)+" KB"
if(x<1073741824)return C.j.ad(x/1048576,1)+" MB"
return C.j.ad(x/1073741824,2)+" GB"},
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
bfv(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jF(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOD(d){return this.bfv(null,d)},
aG5(d){return this.bfv(d,null)}}
B.Wc.prototype={
S(){return new B.aFe(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aFe.prototype={
Y(){this.a4()
this.afc()},
afc(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cm(u.a.c),$async$afc)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dZu(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afc,w)},
afd(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fy(s)),$async$afd)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fof)
case 1:return A.h(v,w)}})
return A.i($async$afd,w)},
a_D(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apW(s.d,4),$async$a_D)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ts(r,"ngmy_my_code_"+m+".png"),$async$a_D)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_D,w)},
aj3(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aj3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abm("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aj3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aj3,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.nD:C.qp,m=o?C.c:C.a_,l=A.eQ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m4
else if(q.e==null)x=A.as(new A.D(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.m(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.m(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.K(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.r(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,I.a5R,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,X.amM,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aB.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.nh,w,C.l5,new A.eo(A.r(p,A.qg(p,p,!1,B.hWc(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l5,A.A(A.a([A.E(A.en(M.Dm,C.Wb,q.gcbI(),p),1),C.au,A.E(A.di(C.zJ,p,C.ac6,q.gcbJ(),A.bo(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.W,new A.a5(1/0,p,A.en(L.a4a,D.fX9,q.gcyX(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,T.anj,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wg.prototype={
S(){return new B.aFh(new A.au(C.ax,$.ax()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aFh.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jr(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
a_E(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jr(u.d.a.a)
if(t==null){u.m(new B.e_D(u))
x=1
break}u.m(new B.e_E(u))
s=u.a
r=s.c
x=3
return A.b(B.a89(s.d,new B.e_F(u),t,r),$async$a_E)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_G(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_E,w)},
a2U(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2U=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e_H(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.rX(r.a.c,q),$async$a2U)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_I(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj0(p,m,l,j,k),$async$a2U)
case 8:o=e
if(r.c!=null)r.m(new B.e_J(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e_K(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e_L(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2U,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aiO:D.agi,h=j?D.akA:C.c,g=j?C.aS:C.a_,f=j?C.bN:C.an,e=j?D.ahL:C.bj
i=[i,e,h,g,f,j?C.fr:C.bQ]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eQ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.r(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.r(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.r(k,A.A(A.a([A.r(k,D.bZ4,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a8(C.aA,C.aD,C.x,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,I.a5R,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v_(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blp()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.Oo,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_M(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mp(l.a.d,4)
m=A.C(new A.N(m,new B.e_N(x,new A.aIh(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lj,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.T,e,C.T,q,C.dc,p,C.T,A.r(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fiN)
else q.push(A.X(C.lR,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b_,new A.o(u,k,s,t,k,k,C.n),C.iP,k,k,k,k,C.f0,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bGx,k,k,C.ah),1)
u=l.f?k:l.gcyY()
t=i[3]
s=i[1]
q=A.l(16)
s=A.en(L.a4a,D.fYg,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbK()
t=A.bo(C.aB,k,k,0,C.c,k,C.nI,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lE(new B.e_O(),A.x(A.a([e,new A.D(D.bG0,A.x(A.a([s,C.T,i,C.ae,A.bJ(l.f?C.tP:D.fWv,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cw,C.a0n,k,k,new A.bs(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blp.prototype={
p_(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hk(C.bC,v.length),C.aP)}}
B.Wd.prototype={
S(){return new B.aFf()}}
B.aFf.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b5,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b5,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.ax()
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
afe(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afe=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dZv(r))
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
return A.b(B.a8e(p,m,n,o,C.a.i(l).length===0?null:l),$async$afe)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fnR)
s=[1]
x=4
break}p.L(y.q).f.T(D.fms)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dZw(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afe,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.nD:C.qp,q=A.eQ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fOQ,s,s,s,1,s,!0),p=A.r(s,D.by3,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.Ia,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c5o,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c5j,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c5z,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbL()
u=A.bo(C.aB,s,s,s,s,C.ha,s,s,s,s,s,s)
return A.c4(q,r,A.cb(A.x(A.a([p,C.dc,o,C.ae,x,C.ae,w,C.nh,A.bJ(t.r?C.tP:C.aY9,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adf.prototype={}
B.byh.prototype={
a5K(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.apY()))
x=3
return A.b(B.Sk(t,s),$async$a5K)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5K,w)},
gd1(){return this.a}}
B.On.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_s.prototype={
S(){return new B.aBd(new A.au(C.ax,$.ax()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aBd.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dcQ(this))},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
cbR(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2x(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nD:v.a[0],p=A.l(24),o=A.K(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aB.j(u?0.25:0.12),C.fR,32)],n),l=A.r(w,S.asQ,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aB.j(0.4),C.cz,16)],n),C.atF,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v_(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxU()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.Cy,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b6n),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcO(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
h=y.p
return A.eG(w,C.L,new A.cO(P.M6,new A.bN(new A.o(t,w,o,p,m,w,C.n),C.bi,new A.D(C.wC,A.x(A.a([l,C.aO,k,C.T,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dU(C.o4,new B.dcP(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.au,A.E(new A.bN(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aB.j(0.35),C.cL,12)],n),K.Qn,C.n),C.bi,A.aH(!1,C.a3,!0,w,A.aP(!1,A.l(14),!0,D.evo,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbQ(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.O,0,C.p),w),w),w),w,w,w,C.Ow,w,C.d8,w,w,w)}}
B.bxU.prototype={
p_(d,e){return e.ami(e.a.toUpperCase())}}
B.We.prototype={
S(){return new B.aFg(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFg.prototype={
Y(){var x=this
x.a4()
x.ur()
x.w=A.dh(C.jH,new B.e_B(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wn()
this.a3()},
a1M(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1M=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$a1M)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bl(u.a.c),$async$a1M)
case 4:u.m(new s.dZZ(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1M,w)},
ur(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$ur)
case 3:t=e
x=4
return A.b(B.Bl(u.a.c),$async$ur)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e__(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.Ob(u.d)
B.Cm(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ur,w)},
Ob(d){return this.bGl(d)},
bGl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ob=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8j(r,u.a.c),$async$Ob)
case 8:p=f
if(u.c==null){x=1
break}new B.dZy(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a_(r.c,"video/")||r.mL(D.nb))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wl(r,u.a.c),$async$Ob)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bl(u.a.c),$async$Ob)
case 12:u.m(new o.dZz(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Ob,w)},
OA(d){return this.bMH(d)},
bMH(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8j(d,u.a.c),$async$OA)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZE(u,d,t))
x=6
return A.b(A.fI(new A.fy(t)),$async$OA)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fy(r.toUpperCase())),$async$OA)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OA,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
us(d,e){return this.cJS(d,e)},
cJS(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$us=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e_p(r,e))
u=3
x=6
return A.b(d.$0(),$async$us)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e_q(r))
$.eY.mE()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$us,w)},
gaXR(){var x=this.a
return x.f||x.r||x.w},
IF(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXR()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ceq(s,n,r,q,o,t),$async$IF)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fPg(o,u.a.c),$async$IF)
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
return A.b(B.DM(s,o,r,q,n,t),$async$IF)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IF,w)},
a0Q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqX(u.a.c),$async$a0Q)
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
return A.b(A.a6(t,!1).ce(A.ec(new B.dZW(u,r,q),!1,null,y.H)),$async$a0Q)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0Q,w)},
a1W(d){return this.csw(d)},
csv(){return this.a1W(1)},
csw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXR()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqU(u.a.c),$async$a1W)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1W,w)},
ad4(d,e,f){return this.c2H(d,e,f)},
c2H(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.us(new B.dZT(u,d,null,e,f),"Uploading\u2026"),$async$ad4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad4,w)},
bGu(){B.hG7(!1,new B.dZC(this))
return},
cxy(){this.m(new B.e_3(this))},
aAB(){var x=0,w=A.j(y.H),v=this
var $async$aAB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGu()
return A.h(null,w)}})
return A.i($async$aAB,w)},
ad0(){var x=0,w=A.j(y.H),v=this
var $async$ad0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.dZI(v),"Importing\u2026"),$async$ad0)
case 2:return A.h(null,w)}})
return A.i($async$ad0,w)},
T3(d){return this.cJb(d)},
cJb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mL(D.nb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.e_m(u,d),!1,null,y.H)),$async$T3)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mL(D.Sn)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ec(new B.e_n(u,d),!1,null,y.H)),$async$T3)
case 8:x=1
break
case 7:x=u.c3p(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ec(new B.e_o(u,d),!1,null,y.H)),$async$T3)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T3,w)},
c3p(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cUk,C.a.b2(x,w+1).toLowerCase())},
agM(d){return this.cjl(d)},
cjl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mL(D.nb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZU(u,d),!1,null,y.H)),$async$agM)
case 5:x=1
break
case 4:u.m(new B.dZV(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agM,w)},
So(d){return this.cAr(d)},
cAr(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$So=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pA(t,s.c,s.f),$async$So)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.us(new B.e_f(u,d),"Preparing QR\u2026"),$async$So)
case 4:case 1:return A.h(v,w)}})
return A.i($async$So,w)},
ajt(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_g(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_h(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.So(r),$async$ajt)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajt,w)},
ajm(d){return this.czZ(d)},
czZ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2x(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_9(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajm)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T3(d)
break
case"qr":u.So(A.a([d],y.r))
break
case"send_my_code":u.cjY(A.a([d],y.r))
break
case"save":u.aiK(d)
break
case"delete":u.Jy(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajm,w)},
Yq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZF(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZG(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pA(t,s.c,s.f),$async$Yq)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.us(new B.dZH(u,r),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yq,w)},
ahR(d){return this.cqQ(d)},
cqQ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hHa(d,!1),$async$ahR)
case 3:s=f
r=s==null
q=B.a8g(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahR,w)},
agS(){var x=0,w=A.j(y.H),v=this,u
var $async$agS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fX2(u,v.a.c),$async$agS)
case 2:return A.h(null,w)}})
return A.i($async$agS,w)},
bGt(){B.hG7(!1,new B.dZB(this,null))
return},
JN(d,e){return this.cjZ(d,e)},
b3k(d){return this.JN(null,d)},
cjY(d){return this.JN(d,null)},
cjZ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZX(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xS.cq().ap3(!0,C.a2a,!1),$async$JN)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.us(new B.dZY(l,s,r),"Preparing\u2026"),$async$JN)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
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
return A.b(B.bGm(p,l,e,s.a.c),$async$JN)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JN,w)},
IV(d){return this.c2u(d)},
c2u(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hWb(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3k(t),$async$IV)
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
return A.b(u.us(new B.dZR(u,d),"Receiving video\u2026"),$async$IV)
case 11:x=1
break
case 10:x=12
return A.b(u.us(new B.dZS(u,d),"Receiving\u2026"),$async$IV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IV,w)},
EN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DG()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahR(t),$async$EN)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IV(s),$async$EN)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.e_1(u),!1,null,y.N)),$async$EN)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ur(),$async$EN)
case 10:x=1
break
case 9:x=11
return A.b(u.IV(C.a.i(r)),$async$EN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EN,w)},
aiK(d){return this.cw5(d)},
cw5(d){var x=0,w=A.j(y.H),v=this
var $async$aiK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.e_0(v,d),"Saving\u2026"),$async$aiK)
case 2:return A.h(null,w)}})
return A.i($async$aiK,w)},
Jy(d){return this.bP1(d)},
bP1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lq(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jy)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cet(t),$async$Jy)
case 6:case 5:s=d.a
x=7
return A.b(B.Fo(u.a.c,s),$async$Jy)
case 7:u.r.W(0,s)
x=8
return A.b(u.ur(),$async$Jy)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jy,w)},
ajz(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2x(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_l(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajz)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agS()
break
case"import":u.ad0()
break}case 1:return A.h(v,w)}})
return A.i($async$ajz,w)},
cbO(d){var x=d.c
if(C.a.a_(x,"video/")||d.mL(D.nb))return C.qV
if(C.a.a_(x,"image/")||d.mL(D.Sn))return C.uZ
if(C.a.q(x,"pdf"))return E.PS
return D.aqz},
B(d){var x,w,v=this,u=null,t=B.a2x(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.I3,u,u,u,new B.e_w(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bZF,u,u,u,v.e?u:v.gcjF(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxx()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bTR:E.aqZ,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a47,u,u,u,v.e?u:v.gcbP(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oO,u,u,u,v.e?u:v.gb4p(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c0s,u,u,u,v.e?u:new B.e_x(v),u,u,u,u,"More options",u))
q=A.eQ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m1(new B.e_y(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.r(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.r(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aB.j(A.P(d).ax.a===C.I?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ks(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBa(C.jN,s,!0,t,w?u:v.gcAs(),u),1)
x.push(new A.D(D.bEN,A.lE(new B.e_z(),A.A(A.a([s,C.au,A.E(new B.aBa(C.v_,"Export",!1,t,w?u:v.gbSV(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cw,C.iB,u,u,new A.bs(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfX(t,v.e?u:v.gb4p(),u)
else s=A.kt(!0,u,u,new B.e_A(v,t),s,u,D.bEF,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBa.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bo(C.aB,t,t,0,C.c,t,C.t0,t,new A.b9(s,C.a1),t,t,t)
return A.di(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t0,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.en(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bfX.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lE(new B.dcM(),new A.D(E.a1h,A.x(A.a([A.lE(new B.dcN(),A.r(x,A.X(C.zj,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.aA,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e3,C.hK,x,x,new A.bs(0.86,1,w),s),C.e4,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.di(C.oO,x,D.h0U,this.d,A.bo(C.aB,x,x,x,C.c,x,C.Ou,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.O,0,C.p),x),C.cw,C.Ck,x,x,new A.bs(0,1,w),s),x,x,x)}}
B.adz.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aB.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.mL(D.nb))p=D.dux
else{p=C.a.a_(p,"image/")||i.mL(D.Sn)
n=y.O
p=p?A.a([C.cJ,C.aB],n):A.a([C.aN.j(0.85),C.aB.j(0.7)],n)}p=A.r(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.aA,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garr()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mL(D.nb))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.aw,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mL(D.nb)))l.push(A.h7r(C.aB,!1,j,j,j,!1,j,j,new B.dd8(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oF,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lE(new B.dd9(),new A.D(C.eo,A.aH(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0J,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bq("docshare_row_"+i.a,y.aw),j,new A.bs(0,1,y.X),y.i)}}
B.a_u.prototype={
S(){return new B.aBf()},
gd1(){return this.c}}
B.aBf.prototype={
Y(){this.a4()
this.yx()},
t(){B.hWq(this.e)
this.a3()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rX(o.c,o.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hWt(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hWs(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dd5(s))
x=1
break}s.m(new B.dd6(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.dd7(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a2T(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rX(t.c,t.d),$async$a2T)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fkQ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj0(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2T)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2T,w)},
c2n(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.A,v,new B.dd3(w,t),C.hk,C.dD,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fU(t,C.A,v,new B.dd4(w),C.hk,C.dD,!0,v,!1,v,v)
else return C.bM
return A.v5(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2x(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Dn,u,u,u,v.gb8b(),u,u,u,u,"Share / save",u))
r=A.eQ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FF
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.di(C.Dn,u,D.fK0,v.gb8b(),A.bo(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c2n()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_r.prototype={
S(){return new B.aBc(A.ajW(),C.bF,C.bF)},
gd1(){return this.c}}
B.aBc.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fC(w,A.a4(w).k("fC<1>")).iC(new B.dcJ(v))
x.gcXK().iC(new B.dcK(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fC(x,A.a4(x).k("fC<1>"))}if(x==null)x=C.bcL
x.iC(new B.dcL(v))
v.yx()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rX(p.c,p.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dcC(s))
x=1
break}x=8
return A.b(s.d.vu(0,new A.a4G(r,s.a.d.c)),$async$yx)
case 8:if(s.c==null){x=1
break}s.m(new B.dcD(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dcE(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a_F(){var x=0,w=A.j(y.H),v=this,u
var $async$a_F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_F)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_F)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_F,w)},
aVF(d){var x=d.a
return C.a.b_(C.o.v(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.v(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2x(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eQ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FF
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.r(o,D.bUP,C.f,o,o,new A.o(o,o,o,A.l(24),o,K.Qn,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aB,o,o,m,0,new B.dcF(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVF(p.w)+" / "+p.aVF(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aB,o,o,o,o,D.fhf,o,o,o,o,o,o)
r=p.f
q=A.X(r?H.v3:C.hm,o,o,o,o,o)
x=A.x(A.a([u,C.l5,t,x,C.dc,A.di(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbS(),s)],y.p),C.l,o,C.e,C.O,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qH,x,o),o,o,o),o,!1,!1,o,o)}}
B.QJ.prototype={
S(){return new B.aBi()},
gd1(){return this.c}}
B.aBi.prototype={
Y(){this.a4()
this.Qg()},
Qg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h9K(o.c,o.d,new B.ddm(s)),$async$Qg)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddn(s))
x=1
break}s.e=r
q=N.ijd(r)
if(q==null){s.m(new B.ddo(s))
x=1
break}s.d=q
q.aW(0,s.gb37())
x=8
return A.b(q.iX(0).dg(0,C.rY),$async$Qg)
case 8:if(s.c==null){x=1
break}s.m(new B.ddp(s))
x=9
return A.b(q.qr(0),$async$Qg)
case 9:q.u0(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.ddq(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qg,w)},
chT(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddr(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dw(0,x.gb37())
w=x.d
if(w!=null)w.t()
B.itF(x.e)
x.a3()},
afh(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1k(u.c,u.d),$async$afh)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afh,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2x(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eQ(A.a([A.aI(t,t,t,t,C.oN,t,t,t,u.gcbM(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.it(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FF
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajo(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AR(s,t),A.az(t,A.zp(A.r(t,A.X(q?H.v3:C.hm,C.c,t,t,t,48),C.f,t,t,new A.o(C.b6,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.ddt(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_w.prototype={
S(){return new B.aBg(new A.cw(null,y.A))}}
B.aBg.prototype={
gcJz(){var x,w,v=this.a
if(v.e!==D.TK)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJ9(){var x,w,v=this.a
if(v.e!==D.Ao)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJz()
if(x!=null){v.Ro(x)
v.e=A.dh(Q.GQ,new B.ddi(v,x))}w=v.gcJ9()
if(w!=null){v.Rn(w)
v.f=A.dh(C.fN,new B.ddj(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rn(d){return this.cp2(d)},
cp2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ar1(d),$async$Rn)
case 3:t=f
x=4
return A.b(B.ceM(d),$async$Rn)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dda(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
Ro(d){return this.cp3(d)},
cp3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ro=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fXF(d),$async$Ro)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEd(t),$async$Ro)
case 4:if(u.c==null){x=1
break}u.m(new B.ddb(u))
u.c.L(y.q).f.T(D.aUU)
case 1:return A.h(v,w)}})
return A.i($async$Ro,w)},
gc7E(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbN(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2F(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DG()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fo0)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ec(new B.ddc(),!1,null,y.N)),$async$a2F)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEd(s),$async$a2F)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aUU)
case 1:return A.h(v,w)}})
return A.i($async$a2F,w)},
aaU(d){return this.bMI(d)},
bMI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fy(C.d.aN(t,", "))),$async$aaU)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaU,w)},
aff(d){return this.bMq(d)},
bMq(d){var x=0,w=A.j(y.H),v=this
var $async$aff=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fy(v.a.c)),$async$aff)
case 2:if(d.e!=null)d.L(y.q).f.T(D.flj)
return A.h(null,w)}})
return A.i($async$aff,w)},
a2z(d){return this.cw7(d)},
cw7(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apW(s.d,4),$async$a2z)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ts(r,"ngmy_doc_share_qr.png"),$async$a2z)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2z,w)},
gaZ7(){var x,w=this.a
if(w.e!==D.Jj)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaR(d){return this.bMB(d)},
bMB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ7()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fy(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaR)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fn_)
case 1:return A.h(v,w)}})
return A.i($async$aaR,w)},
afg(){var x=0,w=A.j(y.H),v=this,u
var $async$afg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wn(),$async$afg)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afg,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2x(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jj&&i!==D.TK&&i!==D.Ao
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eQ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jj||t===D.TK||t===D.Ao?l:A.aI(l,l,l,l,C.lo,l,l,l,m.gb19(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qg(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7E(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jj){t=C.aB.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.T,A.r(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gcbN(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c4r,D.fTF,new B.ddd(m,d),l)],p))}if(m.a.e===D.Jj&&m.gaZ7()!=null)C.d.u(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c0O,D.fQe,new B.dde(m,d),l)],p))
if(m.a.e===D.Ao){x=(m.w?C.dL:C.aB).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.T,A.r(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FI:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}if(m.a.e===D.TK){x=(m.r?C.dL:C.aB).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.T,A.r(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FI:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l),C.ae,A.di(D.bXi,l,D.fWP,m.gcwu(),A.bo(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.r(l,A.x(q,C.l,l,C.ba,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.ae,A.A(A.a([A.E(A.en(M.Dm,C.Wb,new B.ddf(m,d),l),1),C.au,A.E(A.di(C.zJ,l,C.ac6,new B.ddg(m,d),A.bo(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.B3,l,m.gb19(),A.bo(C.aN,l,l,l,l,C.ha,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.ddh(),y.C)}}
B.adx.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.r(x,A.qg(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bI,x,x,x)],u),C.l,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ei(A.a([A.bJ(C.B4,x,new B.dcB(d),x)],u),x,x,C.nr,v,x,x,x,x,D.fJ0,x)}}
B.a_q.prototype={
S(){return new B.aBb(A.A_(C.yC,C.ob,C.vf))}}
B.aBb.prototype={
t(){this.d.t()
this.a3()},
az8(d){var x,w,v,u,t
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
return A.c4(A.eQ(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fQM,x,x,x,1,x,!0),C.w,A.zZ(this.d,C.c0,this.gaz7()),x,!1,!1,x,x)}}
B.a_x.prototype={
S(){return new B.aBh(A.A_(C.yC,C.ob,C.vf))},
gd1(){return this.c}}
B.aBh.prototype={
c3r(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahe(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MR("text/plain"),$async$ahe)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fnV)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ahe,w)},
abI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hHa(p,!0),$async$abI)
case 3:t=e
p=t==null
s=B.a8g(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fkq)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abI,w)},
t(){this.d.t()
this.a3()},
az8(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3r(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.arV,v,v,v,w.gbSo(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4e,v,v,v,w.gcmo(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eQ(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.uV:O.PB,v,v,v,v,v),v,v,v,new B.ddl(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fXL,v,v,v,1,v,!0)
u=A.zZ(w.d,C.c0,w.gaz7())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.r(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eBH],s),v),v,!1,!1,v,v)}}
B.bfY.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.po
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.l(12)
u=A.r(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.po:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a1n,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaJ.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pt.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yx.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Ps.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FT.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.csv.prototype={}
B.FS.prototype={}
B.aaI.prototype={}
B.avy.prototype={}
B.Yy.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jF)","n(jF)","We(Z)","~()","a_t(Z)","H(H,jF)","QJ(Z)","~(mm)","cu(FS)","aB<jF?>(@)","Wc(Z)","Wg(Z)","D(jF)","jF(@)","a9<n,@>(jF)","a_s(Z)","Wd(Z)","a_u(Z)","a_r(Z)","a_w(Z)","adx(Z)","ai<jF>()","a_x(Z)","adz(Z,H)","a_q(Z)","a9<n,aE>(jF)","cu(Yx)","cu(aaI)","aB<cu>(FS)"])
B.csr.prototype={
$1(d){var x=this.a
x.x=D.aRF
x.y.I(0,D.aRF)},
$S:74}
B.css.prototype={
$1(d){var x=this.a
x.x=D.aRE
x.y.I(0,D.aRE)},
$S:74}
B.cst.prototype={
$1(d){var x=this.a
x.aiC(A.ahO(d.data)).bG(new B.csq(x),y.b)},
$S:74}
B.csq.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csu.prototype={
$1(d){},
$S:74}
B.csx.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i0e(d.channel))},
$S:16}
B.csy.prototype={
$1(d){},
$S:16}
B.csz.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ikn(w.iceConnectionState)
x.cx=w
if($.hji())switch(w.a){case 0:x.cy=D.aRK
break
case 1:x.cy=D.aRL
break
case 3:x.cy=D.aRM
break
case 5:x.cy=D.aRI
break
case 6:x.cy=D.aRJ
break
case 7:x.cy=D.a9P
break
default:break}},
$S:105}
B.csA.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iko(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:105}
B.csB.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ivd(w.signalingState)},
$S:105}
B.csC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.itm(w.connectionState)},
$S:105}
B.csD.prototype={
$1(d){},
$S:105}
B.csE.prototype={
$1(d){},
$S:16}
B.fxk.prototype={
$1(d){var x=y.F.a(new A.qv([],[]).o_(d.target.result,!1)),w=C.wu.q(x.objectStoreNames,"blobs")
if(!w)C.wr.Gi(x,"blobs")},
$S:166}
B.fWR.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x2.fs(this.b)
$.eY.mE()
this.c.$1(d)},
$S:401}
B.fWT.prototype={
$1(d){return this.a.$1(B.i9I(this.b,this.c))},
$S:30}
B.fWS.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fWQ.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fX5.prototype={
$1(d){var x=this
return B.hvM(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fX6.prototype={
$1(d){var x=this
return B.hvM(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fzZ.prototype={
$1(d){var x=this
return B.cen(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcU.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcR.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cen(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcT.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cen(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcS.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cen(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcW.prototype={
$4(d,e,f,g){var x=null
return A.k3(A.A(A.a([A.aI(x,x,x,x,D.bVV,x,x,x,new B.dcV(d),x,x,x,x,x,x),A.E(A.FE(D.S6,!0,x,!1,C.a3f,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.S6,x,g,C.anA,0,e,f)},
$C:"$4",
$R:4,
$S:364}
B.dcV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBW.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eT,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.r(v,D.byn,C.f,v,v,D.b81,v,v,v,v,D.anp,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c_g,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.r(v,A.x(A.a([q,new A.D(C.CA,A.x(A.a([o,C.ae,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asa,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dt,new B.fBU(d),v),1),C.au,A.E(A.bJ(D.fPd,v,new B.fBV(p,x,d),A.bo(C.b3,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GT,v,v,v,v),v)},
$S:62}
B.fBU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBV.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.flA)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDT(v,x))},
$S:0}
B.fCp.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eT,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.r(w,A.x(A.a([A.r(w,D.byd,C.f,w,w,D.b9w,w,w,w,w,D.anp,w,w,1/0),new A.D(C.CA,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hf_(u,"Organization name",C.Hr,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hf_(u,"Access code",C.nO,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hf_(u,"Member password",C.Dl,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bJ(D.fXS,w,new B.fCo(r,q,p,d),A.bo(C.aB,w,w,w,w,C.ha,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GT,w,w,w,w),w)},
$S:62}
B.fCo.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.flF)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aH1(u,x,w))},
$S:0}
B.cee.prototype={
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
p=C.a.a_(j,"http")?A.cC(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vU(p,null).dg(0,C.a0m),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cn(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cek.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cel.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cem.prototype={
$1(d){return d.b},
$S:z+2}
B.ceg.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceh.prototype={
$1(d){return d.b},
$S:z+2}
B.cef.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:14}
B.cei.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cej.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fX3.prototype={
$1(d){return new B.Wc(this.a,null)},
$S:z+11}
B.fX4.prototype={
$1(d){return new B.Wg(this.a,this.b,this.c,null)},
$S:z+12}
B.dZu.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_D.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_E.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_F.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_C(x,d))},
$S:2}
B.e_C.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_G.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_H.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_I.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_J.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_K.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e_L.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_O.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*14)),e)},
$S:103}
B.e_M.prototype={
$1(d){var x=this.a
return x.f?null:x.a_E()},
$S:2}
B.e_N.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mL(D.Sn))s=C.uZ
else s=C.a.a_(s,"video/")||d.mL(D.nb)?C.qV:D.aqz
x=this.b.a
w=y.p
return new A.D(C.kV,A.A(A.a([A.r(v,A.X(s,C.aB,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garr(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dZv.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZw.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ceo.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.cep.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.fXY.prototype={
$2(d,e){return e===this.a},
$S:294}
B.fur.prototype={
$1(d){return J.k(d)},
$S:17}
B.fAa.prototype={
$1(d){var x=this.b
B.i7v(C.He.ga7n(this.a)).bG(x.gC4(x),y.H)},
$S:129}
B.fAb.prototype={
$1(d){return this.a.dd(0,null)},
$S:129}
B.fAc.prototype={
$0(){return null},
$S:11}
B.ceD.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fAd.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.j.M(v)
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
return new B.jF(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fEq.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fyo.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyp.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ceI.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.nb)},
$S:z+1}
B.h1d.prototype={
$1(d){return new B.a_s(this.a,null)},
$S:z+16}
B.dcQ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dcO.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dcP.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_B.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1M()},
$S:12}
B.dZZ.prototype={
$0(){var x=J.bHp(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e__.prototype={
$0(){var x=J.bHp(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZy.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZx(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG5(this.c)}},
$S:0}
B.dZx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZz.prototype={
$0(){var x=J.bHp(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZE.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZD(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG5(this.c)}},
$S:0}
B.dZD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_p.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e_q.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZW.prototype={
$1(d){return new B.Wd(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IF(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wh(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ur(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1W(s.gJ(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZC.prototype={
$1(d){this.a.ad4(d,"No files selected.","Added")},
$S:401}
B.e_3.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e_2(),A.U(x).k("N<1,n>")))},
$S:0}
B.e_2.prototype={
$1(d){return d.a},
$S:z+2}
B.dZI.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xS.cq().cZI(C.a2a,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jM(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ij("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ar0(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ur(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e_m.prototype={
$1(d){return new B.QJ(this.a.a.c,this.b,null)},
$S:z+7}
B.e_n.prototype={
$1(d){return new B.a_u(this.a.a.c,this.b,null)},
$S:z+18}
B.e_o.prototype={
$1(d){return new B.a_r(this.a.a.c,this.b,null)},
$S:z+19}
B.dZU.prototype={
$1(d){return new B.QJ(this.a.a.c,this.b,null)},
$S:z+7}
B.dZV.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_f.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IF(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8i(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csv(),$async$$0)
case 5:x=6
return A.b(p.ur(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e_b(p),r),new B.e_c(),r.k("N<ak.E,n>")).bY(0,new B.e_d())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.e_e(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wn(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_b.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.e_a(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e_a.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_c.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e_d.prototype={
$1(d){return d.length!==0},
$S:3}
B.e_e.prototype={
$1(d){var x=this.a
return new B.a_w(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e_g.prototype={
$1(d){return d.a},
$S:z+2}
B.e_h.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_9.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.as(A.r(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kw,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garr(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mL(D.nb)?C.tg:C.oK
p=!x||p.mL(D.nb)?"Play video":"View"
return new A.bN(new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.la,v,v,C.n),C.bi,A.bm(!0,new A.D(C.Cw,A.x(A.a([q,o,t,C.aC,B.a_v(!1,u,!1,w,p,new B.e_4(d),v),B.a_v(!1,u,!1,C.jN,"Share via QR",new B.e_5(d),"Letters/numbers QR code"),B.a_v(!1,u,!1,D.a3k,"Send to their Code",new B.e_6(d),"Enter someone else's personal code"),B.a_v(!1,u,!1,C.i3,"Download / save",new B.e_7(d),v),C.am,B.a_v(!1,u,!0,C.ek,"Delete",new B.e_8(d),v)],y.p),C.al,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:700}
B.e_4.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.e_5.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.e_6.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.e_7.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.e_8.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dZF.prototype={
$1(d){return d.a},
$S:z+2}
B.dZG.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZH.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8k(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hm(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pz(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZB.prototype={
$1(d){var x=this.a
x.us(new B.dZA(x,d,this.b),"Preparing\u2026")},
$S:401}
B.dZA.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wh(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGm(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZX.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZY.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h9N(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hk(new B.dZN(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dZO(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZP(s))
case 5:x=8
return A.b(r.b.iI(0,C.GN,new B.dZQ()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ur(),$async$$0)
case 9:s.ij("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZN.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZK(x,d,e))},
$S:207}
B.dZK.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZO.prototype={
$1(d){return new B.adx(this.a.a,null)},
$S:z+21}
B.dZP.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZQ.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jr(o)!=null?3:4
break
case 3:x=5
return A.b(B.a88(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3k(B.Jr(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ar0(new B.dZL(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h9M(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.ur(),$async$$0)
case 10:o=J.cD(r)
p=o.eP(r,new B.dZM()).gJ(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZL.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZJ(x,d,e))},
$S:207}
B.dZJ.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZM.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.nb)},
$S:z+1}
B.e_1.prototype={
$1(d){return new B.a_x(this.a.a.c,null)},
$S:z+23}
B.e_0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1k(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_l.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.o(v[2],x,new A.bG(new A.ay(C.aB.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.la,x,x,C.n),C.bi,A.bm(!0,new A.D(C.Cw,A.x(A.a([A.as(A.r(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kw,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_v(!0,w,!1,C.nO,"My Code",new B.e_i(d),"Your personal code & QR \u2014 others send docs to you"),B.a_v(!1,w,!1,D.a3k,"Send to their Code",new B.e_j(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_v(!1,w,!1,R.zB,"Import backup",new B.e_k(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:700}
B.e_i.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.e_j.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGt()},
$S:0}
B.e_k.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.e_y.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JB(D.S6,x,C.a3f,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.S6).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:664}
B.e_w.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_x.prototype={
$0(){this.a.ajz()
return null},
$S:0}
B.e_z.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*10)),e)},
$S:103}
B.e_A.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adz(e,w,v,this.b,x.e,x.cbO(w),new B.e_s(x,w),new B.e_t(x,v,w),new B.e_u(x,w),new B.e_v(x,w),null)},
$S:z+24}
B.e_s.prototype={
$0(){this.a.agM(this.b)
return null},
$S:0}
B.e_t.prototype={
$0(){var x=this.a
return x.m(new B.e_r(x,this.b,this.c))},
$S:0}
B.e_r.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_u.prototype={
$0(){this.a.OA(this.b)
return null},
$S:0}
B.e_v.prototype={
$0(){this.a.ajm(this.b)
return null},
$S:0}
B.dcM.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*18)),e)},
$S:103}
B.dcN.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:113}
B.dd9.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*14)),e)},
$S:103}
B.dd8.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.dd5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dd6.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dd7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dd3.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fU(w,C.A,x,new B.dd1(this.a),C.hk,C.dD,!0,x,!1,x,x)
$.aW.x1$.push(new B.dd2(this.a))
return C.bM},
$S:143}
B.dd1.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dd_(this.a))
return C.bM},
$S:204}
B.dd_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcX(x))},
$S:7}
B.dcX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcZ(x))},
$S:7}
B.dcZ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd4.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dd0(this.a))
return C.bM},
$S:204}
B.dd0.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcY(x))},
$S:7}
B.dcY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcJ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcI(x,d))},
$S:1769}
B.dcI.prototype={
$0(){return this.a.f=this.b===C.vC},
$S:0}
B.dcK.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcH(x,d))},
$S:7}
B.dcH.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcL.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcG(x,d))},
$S:7}
B.dcG.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dcC.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dcD.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcE.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcF.prototype={
$1(d){return this.a.d.Nx(0,A.dw(0,0,0,C.j.V(d),0,0))},
$S:6}
B.ddm.prototype={
$0(){var x=this.a.a
return B.rX(x.c,x.d)},
$S:1770}
B.ddn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddo.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.ddp.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ddq.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddr.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.ddt.prototype={
$0(){var x=this.a
x.m(new B.dds(x))},
$S:0}
B.dds.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qr(0)},
$S:0}
B.ddi.prototype={
$1(d){return this.a.Ro(this.b)},
$S:12}
B.ddj.prototype={
$1(d){return this.a.Rn(this.b)},
$S:12}
B.dda.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.ddb.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ddc.prototype={
$1(d){return D.hyo},
$S:z+25}
B.ddh.prototype={
$2(d,e){if(d)B.Wn()},
$S:130}
B.ddd.prototype={
$0(){return this.a.aaU(this.b)},
$S:0}
B.dde.prototype={
$0(){return this.a.aaR(this.b)},
$S:0}
B.ddf.prototype={
$0(){return this.a.aff(this.b)},
$S:0}
B.ddg.prototype={
$0(){return this.a.a2z(this.b)},
$S:0}
B.dcB.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.ddl.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qv(),$async$$0)
case 2:u.m(new B.ddk(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddk.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceK.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.nb)},
$S:z+1}
B.ceL.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceJ.prototype={
$2(d,e){return this.bn2(d,e)},
bn2(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wo(u.c,A.J(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1771}
B.fE2.prototype={
$1(d){if(d===D.a9O&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fE3.prototype={
$0(){},
$S:11}
B.fEE.prototype={
boD(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.frH(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hqS(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boD(d,e)},
$S:540}
B.fED.prototype={
$1(d){var x=this
d.b=new B.fEC(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fEC.prototype={
$1(d){return this.boC(d)},
boC(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1l(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
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
return A.b(B.frH(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8h(m),$async$$1)
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
x(v=B.aBe.prototype,"gcjh","QY",0)
x(v,"gck8","JO",0)
x(v,"gcjE","yH",0)
x(v=B.aFe.prototype,"gcbI","afd",0)
x(v,"gcbJ","a_D",0)
x(v,"gcyX","aj3",0)
x(v=B.aFh.prototype,"gcbK","a_E",0)
x(v,"gcyY","a2U",0)
x(B.aFf.prototype,"gcbL","afe",0)
x(B.aBd.prototype,"gcbQ","cbR",4)
x(v=B.aFg.prototype,"gcjF","a0Q",0)
x(v,"gcxx","cxy",4)
x(v,"gb4p","aAB",0)
x(v,"gcAs","ajt",0)
x(v,"gbSV","Yq",0)
x(v,"gcbP","EN",0)
x(B.aBf.prototype,"gb8b","a2T",0)
x(B.aBc.prototype,"gcbS","a_F",0)
x(v=B.aBi.prototype,"gb37","chT",4)
x(v,"gcbM","afh",0)
x(v=B.aBg.prototype,"gcwu","a2F",0)
x(v,"gb19","afg",0)
w(B.aBb.prototype,"gaz7","az8",8)
x(v=B.aBh.prototype,"gcmo","ahe",0)
x(v,"gbSo","abI",0)
w(v,"gaz7","az8",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.csv,B.aaI,B.avy,B.aDT,B.aH1,B.jF,B.adf,B.byh,B.FS,B.Yy])
w(B.csw,B.csv)
w(B.b6t,B.aaI)
x(A.hx,[B.csr,B.css,B.cst,B.csq,B.csu,B.csx,B.csy,B.csz,B.csA,B.csB,B.csC,B.csD,B.csE,B.fxk,B.fWR,B.fWT,B.fWS,B.fX5,B.fX6,B.fzZ,B.dcR,B.dcT,B.dcS,B.dcW,B.fBW,B.fCp,B.cee,B.cel,B.cem,B.ceh,B.cef,B.cei,B.cej,B.fX3,B.fX4,B.e_F,B.e_O,B.e_M,B.e_N,B.fur,B.fAa,B.fAb,B.ceD,B.fAd,B.fEq,B.fyo,B.fyp,B.ceI,B.h1d,B.dcQ,B.dcO,B.e_B,B.dZx,B.dZD,B.dZW,B.dZC,B.e_2,B.e_m,B.e_n,B.e_o,B.dZU,B.e_b,B.e_a,B.e_c,B.e_d,B.e_e,B.e_g,B.e_h,B.e_9,B.dZF,B.dZG,B.dZB,B.dZX,B.dZO,B.dZM,B.e_1,B.e_l,B.e_y,B.e_z,B.dcM,B.dcN,B.dd9,B.dd8,B.dd3,B.dd1,B.dd_,B.dd2,B.dd4,B.dd0,B.dcJ,B.dcK,B.dcL,B.dcF,B.ddi,B.ddj,B.ddc,B.ceK,B.ceL,B.fE2,B.fED,B.fEC])
w(B.b6u,B.avy)
x(A.iN,[B.fWQ,B.dcU,B.dcV,B.fBU,B.fBV,B.fCo,B.dZu,B.e_D,B.e_E,B.e_C,B.e_G,B.e_H,B.e_I,B.e_J,B.e_K,B.e_L,B.dZv,B.dZw,B.fAc,B.dcP,B.dZZ,B.e__,B.dZy,B.dZz,B.dZE,B.e_p,B.e_q,B.dZT,B.e_3,B.dZI,B.dZV,B.e_f,B.e_4,B.e_5,B.e_6,B.e_7,B.e_8,B.dZH,B.dZA,B.dZY,B.dZR,B.dZK,B.dZP,B.dZQ,B.dZS,B.dZJ,B.e_0,B.e_i,B.e_j,B.e_k,B.e_w,B.e_x,B.e_s,B.e_t,B.e_r,B.e_u,B.e_v,B.dd5,B.dd6,B.dd7,B.dcX,B.dcZ,B.dcY,B.dcI,B.dcH,B.dcG,B.dcC,B.dcD,B.dcE,B.ddm,B.ddn,B.ddo,B.ddp,B.ddq,B.ddr,B.ddt,B.dds,B.dda,B.ddb,B.ddd,B.dde,B.ddf,B.ddg,B.dcB,B.ddl,B.ddk,B.fE3])
x(A.lG,[B.ady,B.On,B.aaJ,B.Pt,B.Yx,B.Ps,B.FT])
x(A.af,[B.a_t,B.Wc,B.Wg,B.Wd,B.a_s,B.We,B.a_u,B.a_r,B.QJ,B.a_w,B.a_q,B.a_x])
x(A.ah,[B.aBe,B.aFe,B.aFh,B.aFf,B.aBd,B.aFg,B.aBf,B.aBc,B.aBi,B.aBg,B.aBb,B.aBh])
x(A.aw,[B.ae1,B.aBa,B.bfX,B.adz,B.adx,B.bfY])
x(A.jz,[B.cek,B.ceg,B.ceo,B.cep,B.fXY,B.dZN,B.dZL,B.e_A,B.ddh,B.ceJ,B.fEE])
x(A.j6,[B.blp,B.bxU])})()
A.iW(b.typeUniverse,JSON.parse('{"b6t":{"aaI":[]},"b6u":{"avy":[]},"a_t":{"af":[],"v":[]},"aBe":{"ah":["a_t"]},"ae1":{"aw":[],"v":[]},"Wc":{"af":[],"v":[]},"Wg":{"af":[],"v":[]},"aFe":{"ah":["Wc"]},"aFh":{"ah":["Wg"]},"blp":{"j6":[]},"Wd":{"af":[],"v":[]},"aFf":{"ah":["Wd"]},"a_s":{"af":[],"v":[]},"We":{"af":[],"v":[]},"adz":{"aw":[],"v":[]},"a_u":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"QJ":{"af":[],"v":[]},"a_w":{"af":[],"v":[]},"adx":{"aw":[],"v":[]},"a_q":{"af":[],"v":[]},"a_x":{"af":[],"v":[]},"aBd":{"ah":["a_s"]},"bxU":{"j6":[]},"aFg":{"ah":["We"]},"aBa":{"aw":[],"v":[]},"bfX":{"aw":[],"v":[]},"aBf":{"ah":["a_u"]},"aBc":{"ah":["a_r"]},"aBi":{"ah":["QJ"]},"aBg":{"ah":["a_w"]},"aBb":{"ah":["a_q"]},"aBh":{"ah":["a_x"]},"bfY":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uQ"),k:x("MP()"),o:x("bv<n,n>"),F:x("rw"),g:x("aB<jF?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a9<n,Q>>"),t:x("O<a9<n,@>>"),r:x("O<jF>"),w:x("O<+file,name(lW,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j6>"),a:x("O<dL>"),p:x("O<v>"),Z:x("O<H>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jF>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iF"),e:x("izh"),af:x("F4"),U:x("jF"),b:x("cu"),C:x("aE"),aK:x("wI"),ab:x("FS"),br:x("avy"),v:x("Yy"),N:x("n"),X:x("bs<G>"),Q:x("m7"),D:x("dL"),aw:x("bq<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jF>>"),aW:x("c3<dL?>"),aY:x("c3<~>"),cx:x("ady"),b1:x("bk<ai<jF>>"),cf:x("bk<dL?>"),d4:x("bk<~>"),c4:x("aDT"),bG:x("aH1"),q:x("mC"),B:x("pS<FS>"),c6:x("pS<aaJ>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bi?"),_:x("ai<jF>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jF?"),R:x("aE?"),c:x("Yy?"),d:x("+answerQr,transfer(n,aB<ai<jF>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,On,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dL?"),cm:x("adf?"),bk:x("aDT?"),ag:x("aH1?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b6n=new A.ay(C.aB,2,C.r,-1)
D.c94=new A.a8(C.a7,C.aa,C.x,C.a5p,null,null)
D.b81=new A.o(null,null,null,C.mI,null,D.c94,C.n)
D.b9w=new A.o(null,null,null,C.mI,null,E.Ia,C.n)
D.agi=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ahL=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aiO=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.akA=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fJU=new A.B("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.fYP=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EU,null,null,null,null,null,null,null,null,null)
D.dlw=x([D.fJU,C.am,D.fYP],y.p)
D.by3=new A.fm(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dlw,null)
D.h2i=new A.B("Create your organization",null,C.fU,null,null,null,null,null,null,null,null,null)
D.fOp=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EU,null,null,null,null,null,null,null,null,null)
D.dCE=x([D.h2i,C.am,D.fOp],y.p)
D.byd=new A.fm(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCE,null)
D.fZs=new A.B("Team Member sign-in",null,C.fU,null,null,null,null,null,null,null,null,null)
D.fSo=new A.B("Enter the access code and password from your organization.",null,G.EU,null,null,null,null,null,null,null,null,null)
D.dAo=x([D.fZs,C.am,D.fSo],y.p)
D.byn=new A.fm(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dAo,null)
D.bEF=new A.R(16,10,16,28)
D.bEN=new A.R(16,14,16,4)
D.bG0=new A.R(20,0,20,16)
D.bGx=new A.R(20,8,20,16)
D.anp=new A.R(24,22,24,20)
D.a3k=new A.a_(63394,"MaterialIcons",!1)
D.aqz=new A.a_(63515,"MaterialIcons",!1)
D.bTR=new A.a_(983813,"MaterialIcons",!1)
D.bR3=new A.a_(62867,"MaterialIcons",!1)
D.bUP=new A.ae(D.bR3,44,C.c,null,null,null)
D.bVV=new A.ae(C.k7,null,C.ab,null,null,null)
D.bXi=new A.ae(C.ju,18,null,null,null,null)
D.bZ4=new A.ae(D.a3k,26,C.c,null,null,null)
D.bZF=new A.ae(C.Db,null,null,null,null,null)
D.c_g=new A.ae(C.Di,null,null,null,null,null)
D.c0s=new A.ae(V.a3v,null,null,null,null,null)
D.c0O=new A.ae(C.hR,16,null,null,null,null)
D.c4r=new A.ae(C.tf,16,null,null,null,null)
D.bV6=new A.ae(C.nO,null,null,null,null,null)
D.c5j=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bV6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c_O=new A.ae(C.Hr,null,null,null,null,null)
D.c5o=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c_O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVr=new A.ae(C.Dl,null,null,null,null,null)
D.c5z=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVr,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cUV=x([C.fr,C.b3,C.aB],y.O)
D.caZ=new A.a8(C.aA,C.aD,C.x,D.cUV,null,null)
D.cUk=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.S6=x([C.fr,C.aB],y.O)
D.Sn=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nb=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dux=x([C.nx,C.aB],y.O)
D.enW={iceServers:0}
D.aMa={urls:0}
D.dGl=new A.bv(D.aMa,["stun:stun.l.google.com:19302"],y.o)
D.dGk=new A.bv(D.aMa,["stun:stun1.l.google.com:19302"],y.o)
D.daQ=x([D.dGl,D.dGk],A.at("O<a9<n,n>>"))
D.dFD=new A.bv(D.enW,[D.daQ],A.at("bv<n,@>"))
D.Jj=new B.On(0,"lanDirect")
D.TJ=new B.On(1,"cloudStash")
D.dSo=new B.On(2,"inlineInstant")
D.TK=new B.On(3,"webrtcLink")
D.Ao=new B.On(4,"videoCloud")
D.fYO=new A.B("Receive file",null,C.nj,null,null,null,null,null,null,null,null,null)
D.cK4=x([E.asj,C.af,D.fYO],y.p)
D.fc9=new A.c8(C.aL,C.ba,C.i,C.l,null,C.p,null,0,D.cK4,null)
D.evo=new A.D(C.cp,D.fc9,null)
D.fAf=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,U.IH,null,null,null)
D.fKs=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fAf,null,C.K,null,null,null,null,null,null,null)
D.euA=new A.D(C.CD,D.fKs,null)
D.be5=new A.cj(C.A,null,null,D.euA,null)
D.eBH=new A.cK(0,null,0,28,null,null,D.be5,null)
D.eC0=new B.aaJ(0,"RTCDataChannelConnecting")
D.aRE=new B.aaJ(1,"RTCDataChannelOpen")
D.aRF=new B.aaJ(3,"RTCDataChannelClosed")
D.eC1=new B.FT(0,"RTCIceConnectionStateNew")
D.eC2=new B.FT(1,"RTCIceConnectionStateChecking")
D.eC3=new B.FT(2,"RTCIceConnectionStateCompleted")
D.eC4=new B.FT(3,"RTCIceConnectionStateConnected")
D.eC5=new B.FT(4,"RTCIceConnectionStateCount")
D.eC6=new B.FT(5,"RTCIceConnectionStateFailed")
D.eC7=new B.FT(6,"RTCIceConnectionStateDisconnected")
D.aRG=new B.FT(7,"RTCIceConnectionStateClosed")
D.aRH=new B.Yx(0,"RTCIceGatheringStateNew")
D.eC8=new B.Yx(1,"RTCIceGatheringStateGathering")
D.a9O=new B.Yx(2,"RTCIceGatheringStateComplete")
D.a9P=new B.Ps(0,"RTCPeerConnectionStateClosed")
D.aRI=new B.Ps(1,"RTCPeerConnectionStateFailed")
D.aRJ=new B.Ps(2,"RTCPeerConnectionStateDisconnected")
D.aRK=new B.Ps(3,"RTCPeerConnectionStateNew")
D.aRL=new B.Ps(4,"RTCPeerConnectionStateConnecting")
D.aRM=new B.Ps(5,"RTCPeerConnectionStateConnected")
D.eC9=new B.Pt(0,"RTCSignalingStateStable")
D.eCa=new B.Pt(1,"RTCSignalingStateHaveLocalOffer")
D.eCb=new B.Pt(2,"RTCSignalingStateHaveRemoteOffer")
D.eCc=new B.Pt(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eCd=new B.Pt(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aRN=new B.Pt(5,"RTCSignalingStateClosed")
D.fhf=new A.av(160,48)
D.bfk=new A.fl(2,null,null,null,null,C.aB,null,null,null,null)
D.fiN=new A.a5(16,16,D.bfk,null)
D.fNK=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fkf=new A.b1(D.fNK,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fVs=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.b1(D.fVs,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3k=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new A.b1(D.h3k,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNk=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fkQ=new A.b1(D.fNk,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZD=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aUU=new A.b1(D.fZD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h04=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.flj=new A.b1(D.h04,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4O=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.flA=new A.b1(D.h4O,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2L=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.flF=new A.b1(D.h2L,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3Z=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fms=new A.b1(D.h3Z,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fLV=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fn_=new A.b1(D.fLV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXn=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fnk=new A.b1(D.fXn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQ3=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new A.b1(D.fQ3,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4T=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new A.b1(D.h4T,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fMa=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fo0=new A.b1(D.fMa,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKQ=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fof=new A.b1(D.fKQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fHz=new A.B("NGMY DOC SHARE",null,C.aWh,null,null,null,null,null,null,null,null,null)
D.fJ0=new A.B("Show this to sender",null,C.iG,null,null,null,null,null,null,null,null,null)
D.fK0=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fOQ=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fPd=new A.B("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fQe=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fQM=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTF=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fWv=new A.B("Send to their Doc Share",null,C.o2,null,null,null,null,null,null,null,null,null)
D.fWP=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fX9=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fXL=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fXS=new A.B("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fYg=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h0A=new A.B("Share files & videos\nwith a scan.",null,C.aWk,null,null,null,null,null,null,null,null,null)
D.h0U=new A.B("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hyo=new B.a_q(null)
D.ad6=new B.ady(0,"docShare")
D.ad7=new B.ady(1,"gate")
D.WQ=new B.ady(2,"gateNoIndividual")})();(function staticFields(){$.aPP=null
$.fp8=function(){var x=y.N
return A.T(x,x)}()
$.H8=A.T(y.N,y.D)
$.ahB=A.T(y.N,A.at("lW"))
$.S4=A.T(y.N,y.D)
$.fpU=A.T(y.N,A.at("adf"))
$.ceC=A.T(y.S,A.at("byh"))
$.hqR=1
$.ifS=null
$.ifR=null
$.i6I=null
$.hfc=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"izM","hJa",()=>new B.csw())
x($,"ixG","hji",()=>C.a.q(A.bC(A.bC(A.bC(A.HI(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["+eTfJimYp4X8WMjTdhXAC/6qMio="]=a.current})($__dart_deferred_initializers__);