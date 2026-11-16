((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cst:function cst(){},
i_L(d){var x=null,w=new B.b6r(d,D.eBG,new A.pS(x,x,y.c6),new A.pS(x,x,y.B))
w.bCf(d)
return w},
b6r:function b6r(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cso:function cso(d){this.a=d},
csp:function csp(d){this.a=d},
csq:function csq(d){this.a=d},
csn:function csn(d){this.a=d},
csr:function csr(d){this.a=d},
i_M(d,e){var x=y.N
x=new B.b6s(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCg(d,e)
return x},
b6s:function b6s(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
csu:function csu(d){this.a=d},
csv:function csv(d){this.a=d},
csw:function csw(d){this.a=d},
csx:function csx(d){this.a=d},
csy:function csy(d){this.a=d},
csz:function csz(d){this.a=d},
csA:function csA(d){this.a=d},
csB:function csB(d){this.a=d},
heE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wZ.GR(x,"ngmy_doc_share_v1",new B.fxd(),1)},
i6w(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.wU(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
Sk(d,e){return B.imA(d,e)},
imA(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPN
x=7
return A.b(o==null?$.aPN=B.heE():o,$async$Sk)
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
Sj(d){return B.imz(d)},
imz(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPN
x=7
return A.b(o==null?$.aPN=B.heE():o,$async$Sj)
case 7:s=f
r=J.mk(s,"blobs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"blobs"),d),$async$Sj)
case 8:q=f
x=9
return A.b(J.oy(r),$async$Sj)
case 9:o=B.i6w(q)
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
aig(d){return B.imy(d)},
imy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aig=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPN
x=7
return A.b(p==null?$.aPN=B.heE():p,$async$aig)
case 7:s=f
r=J.mk(s,"blobs","readwrite")
C.iE.Gn(J.mj(r,"blobs"),d)
x=8
return A.b(J.oy(r),$async$aig)
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
return A.i($async$aig,w)},
fxd:function fxd(){},
i9b(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brh(w,v))}return u},
hFQ(d,e){var x,w={},v=A.aYt("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fWJ(w,v,e)
C.x0.za(v,"change",new B.fWL(w,v,!1))
C.x0.za(v,"cancel",new B.fWK(w))
$.eY.mE()
v.click()
A.bO(C.als,new B.fWI(w),y.H)},
fWJ:function fWJ(d,e,f){this.a=d
this.b=e
this.c=f},
fWL:function fWL(d,e,f){this.a=d
this.b=e
this.c=f},
fWK:function fWK(d){this.a=d},
fWI:function fWI(d){this.a=d},
DM(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DM=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUy()?3:4
break
case 3:x=5
return A.b(B.hAC(e,d,s,!0,!1,f,g,h,!1,i),$async$DM)
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
return A.b(B.fsL(s,d),$async$DM)
case 14:x=12
return A.b(r.hAC(q,p,o,n,m,l,k,j,a1,i),$async$DM)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ec(new B.fWY(s,i,d,f,g,h),!1,null,y.H)),$async$DM)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ec(new B.fWZ(s,i,d,f,g,h),!1,null,y.H)),$async$DM)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DM,w)},
RY(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RY=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1b(e),$async$RY)
case 3:u=k
x=4
return A.b(B.aqR(d,e,!1),$async$RY)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jt(e,d),$async$RY)
case 7:if(k){v=D.ad2
x=1
break}x=8
return A.b(B.Wf(e),$async$RY)
case 8:v=t?D.WP:D.ad3
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b19(d,e)){v=D.ad2
x=1
break}x=11
return A.b(B.Wf(e),$async$RY)
case 11:v=t?D.WP:D.ad3
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h9y(d,e)){v=D.ad2
x=1
break}x=14
return A.b(B.Wf(e),$async$RY)
case 14:v=D.WP
x=1
break
case 13:v=t?D.WP:D.ad3
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RY,w)},
fsL(d,e){var x=0,w=A.j(y.y),v
var $async$fsL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b19(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1b(d),$async$fsL)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsL,w)},
hAC(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ec(new B.fzS(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hvy(d,e,f,g,h,i,j){return new B.a_s(e,j,d,g,h,i,f,null)},
fBM(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fBM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fBP(A.P(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fBM)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBM,w)},
fCg(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fCg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fCi(A.P(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fCg)
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
return A.i($async$fCg,w)},
heP(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fP9(d,e){var x=0,w=A.j(y.H),v
var $async$fP9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wf(e),$async$fP9)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fP9,w)},
fWY:function fWY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWZ:function fWZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adw:function adw(d,e){this.a=d
this.b=e},
fzS:function fzS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_s:function a_s(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBd:function aBd(){this.c=this.a=this.d=null},
dcX:function dcX(d,e){this.a=d
this.b=e},
dcU:function dcU(d){this.a=d},
dcW:function dcW(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcZ:function dcZ(){},
dcY:function dcY(d){this.a=d},
ae_:function ae_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDS:function aDS(d,e){this.a=d
this.b=e},
aH_:function aH_(d,e,f){this.a=d
this.b=e
this.c=f},
fBP:function fBP(d,e,f){this.a=d
this.b=e
this.c=f},
fBN:function fBN(d){this.a=d},
fBO:function fBO(d,e,f){this.a=d
this.b=e
this.c=f},
fCi:function fCi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCh:function fCh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cea(d,e,f,g,h){return B.hVC(d,e,f,g,h)},
hVC(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cea=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iE(r.dN(d,new B.ceb(s,e,h,g,f,q),y.g),y.l),$async$cea)
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
return A.i($async$cea,w)},
b16(d,e,f,g,h){return B.hVD(d,e,f,g,h)},
hVD(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b16=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awm("GET",d)
o=A.h5X()
if(o==null)o=new A.ML(A.a([],y.W))
x=7
return A.b(o.fa(0,s).dg(0,C.GK),$async$b16)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CU(),$async$b16)
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
return A.i($async$b16,w)},
b15(d){return B.hVA(d)},
hVA(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b15=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vU(d,null).dg(0,C.oq),$async$b15)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aQ(0,A.md(A.mb(p.e)).cJ(0,p.w),null)
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
return A.i($async$b15,w)},
ce9(d){return B.hVB(d)},
hVB(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ce9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vU(d,null).dg(0,C.qC),$async$ce9)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.md(A.mb(q.e)).cJ(0,q.w)
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
return A.i($async$ce9,w)},
ceb:function ceb(d,e,f,g,h,i){var _=this
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
hVI(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jr(C.a.b2(t,u.length))}return null},
hVJ(d){var x=B.Jr(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hVE(){var x,w=$.ov(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a84(d){return B.hVF(d)},
hVF(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a84=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bO),$async$a84)
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
return A.i($async$a84,w)},
a85(d,e){return B.hVG(d,e)},
hVG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a85=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hM(d,e,!1,!1,C.cP,null),$async$a85)
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
return A.i($async$a85,w)},
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
return A.b(B.a86(r),$async$Cm)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a84("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cm)
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
break}m=B.hVE()
x=14
return A.b(B.a86(m),$async$Cm)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a85("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cm)
case 15:k=f
x=16
return A.b(B.a85("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cm)
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
a86(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a86=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jr(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a84("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a86)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a86,w)},
a87(d,e,f,g){return B.hVK(d,e,f,g)},
hVK(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a87=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jr(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a86(r),$async$a87)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.ceh())>1048576||g.aU(d,new B.cei())){v=B.Fn(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8i("myCode",d,a0),$async$a87)
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
return A.b(B.b1e(u,g.gJ(d),a0),$async$a87)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ov().az(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.cej(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b17(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a87)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a87,w)},
Fn(d,e,f,g,h){return B.hVH(d,e,f,g,h)},
hVH(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fn=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fn)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cF(a6,0,new B.ced())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ov().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cR.az(99999)
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
return A.b(new A.abL(a1.a,a4,"media",a1.d,a2).xL(m,n,new A.EB(!0,q.c)),$async$Fn)
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
return A.b(B.aSp(r),$async$Fn)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.cee(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b17(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fn)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSp(r),$async$Fn)
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
b17(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b17=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a84(t),$async$b17)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cec(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a85(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b17,w)},
Om(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Om=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a84("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Om)
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
return A.b(B.b18(k,a0),$async$Om)
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
return A.b(B.b1d(h),$async$Om)
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
e=A.C(new A.Y(r,new B.cef(),q),n)
d=A.C(new A.Y(r,new B.ceg(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cX(d,0,A.dB(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a85("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Om)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
b18(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b18=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iqv(k,j)
C.d.u(s,i)
x=5
return A.b(B.DK(l,m,"Received via My Code",t,e,i),$async$b18)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSp(s),$async$b18)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b18,w)},
ceh:function ceh(){},
cei:function cei(){},
cej:function cej(){},
ced:function ced(){},
cee:function cee(){},
cec:function cec(){},
cef:function cef(){},
ceg:function ceg(){},
fWV(d,e){var x=0,w=A.j(y.H)
var $async$fWV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ec(new B.fWW(e),!1,null,y.H)),$async$fWV)
case 2:return A.h(null,w)}})
return A.i($async$fWV,w)},
bGj(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGj=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ec(new B.fWX(g,e,f),!1,null,y.y)),$async$bGj)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGj,w)},
fWW:function fWW(d){this.a=d},
fWX:function fWX(d,e,f){this.a=d
this.b=e
this.c=f},
Wc:function Wc(d,e){this.c=d
this.a=e},
aFd:function aFd(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dZy:function dZy(d,e){this.a=d
this.b=e},
Wg:function Wg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFg:function aFg(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_H:function e_H(d){this.a=d},
e_I:function e_I(d){this.a=d},
e_J:function e_J(d){this.a=d},
e_G:function e_G(d,e){this.a=d
this.b=e},
e_K:function e_K(d){this.a=d},
e_L:function e_L(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_N:function e_N(d,e){this.a=d
this.b=e},
e_O:function e_O(d,e){this.a=d
this.b=e},
e_P:function e_P(d){this.a=d},
e_S:function e_S(){},
e_Q:function e_Q(d){this.a=d},
e_R:function e_R(d,e){this.a=d
this.b=e},
bln:function bln(){},
Wd:function Wd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFe:function aFe(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZz:function dZz(d){this.a=d},
dZA:function dZA(d){this.a=d},
h9z(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hVM(d){var x=d.l4
if(x>=0)return x
return 4.99},
hVL(d){var x=d.m6,w=y.N
w=x.jr(x,new B.cel(),w,w)
return w},
hqz(d){var x=d.l5,w=y.N
w=x.jr(x,new B.cem(),w,w)
return w},
b1b(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1b)
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
return A.i($async$b1b,w)},
a89(d,e){var x=0,w=A.j(y.H),v,u
var $async$a89=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a89)
case 4:x=3
return A.b(g.aD("String","ngmy_doc_share_path_"+u,e),$async$a89)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
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
h9y(d,e){var x,w,v
if(B.hVM(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hVL(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b19(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hqz(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hqA(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hqz(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
aqS(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqS)
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
return A.i($async$aqS,w)},
aqT(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqS(d),$async$aqT)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqT)
case 5:x=4
return A.b(f.aD("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqT,w)},
aqR(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h9z(d)
if(u<=0){v=!1
x=1
break}if(B.h9y(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqS(e),$async$aqR)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqR,w)},
b1a(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jt(e,d),$async$b1a)
case 3:if(g){v=-1
x=1
break}u=B.h9z(d)
if(u<=0){v=-1
x=1
break}if(B.h9y(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqS(e),$async$b1a)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1a,w)},
ceo(d,e,f){var x=0,w=A.j(y.y),v
var $async$ceo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jt(e,d),$async$ceo)
case 3:if(h){v=!1
x=1
break}v=B.aqR(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceo,w)},
cen(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cen=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.ceo(d,u,i.gUy()),$async$cen)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cen,w)},
a88(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a88=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUy()){v=!0
x=1
break}if(B.b19(d,u)){v=!0
x=1
break}x=5
return A.b(A.lA(u,C.U3),$async$a88)
case 5:x=k?3:4
break
case 3:B.hqA(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a88)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.U3,"Doc Share for Organizations"),$async$a88)
case 7:if(!k){v=!1
x=1
break}B.hqA(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a88)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
cel:function cel(){},
cem:function cem(){},
fXO(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fXO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fXO)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fp1.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fp1.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXO,w)},
itn(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fp1.bq($.fp1,new B.fXQ(d))},
fXQ:function fXQ(d){this.a=d},
fqJ(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fqJ=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bO(C.jp,null,y.H),$async$fqJ)
case 3:C.Bm.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mE()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqJ,w)},
ah9(d,e,f){var x=0,w=A.j(y.H),v
var $async$ah9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fpN.n(0,d,new B.add(A.bq(e,!0,v)))
x=3
return A.b(A.aA(),$async$ah9)
case 3:x=2
return A.b(h.aD("String",d+"_manifest",C.X.aw(A.J(["parts",e,"size",f],v,y.C),null)),$async$ah9)
case 2:return A.h(null,w)}})
return A.i($async$ah9,w)},
ah3(d){return B.ibb(d)},
ibb(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fpN.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah3)
case 3:u=j.aU(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b7(s,new B.fuk(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.add(r)
$.fpN.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah3,w)},
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
aQ9(d){return B.ib9(d)},
ib9(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQ9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H8.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sj(d),$async$aQ9)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H8.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQ9)
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
return A.b(J.hc(s,d),$async$aQ9)
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
return A.i($async$aQ9,w)},
i6Z(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cf(J.eF(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cf(A.wU(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
return A.f4(null,y.K)},
a2X(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fD(r,"loadend",new B.fA3(r,t),!1,s)
A.fD(r,"error",new B.fA4(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.O2,new B.fA5())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2X,w)},
aQt(d,e,f){return B.idy(d,e,f)},
idy(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQt=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2X(i),$async$aQt)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sk(o,p),$async$aQt)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ah9(k,j,s),$async$aQt)
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
return A.i($async$aQt,w)},
aQs(d,e,f){return B.idx(d,e,f)},
idx(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQs=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQt(d,e,f),$async$aQs)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2X(f),$async$aQs)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H8.n(0,s,r)
$.S4.n(0,s,r)
x=11
return A.b(B.RO(s,r),$async$aQs)
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
return A.i($async$aQs,w)},
Cn(d,e,f,g,h,i){return B.hVV(d,e,f,g,h,i)},
hVV(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cn=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jF(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1h(),null)
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
m=""+1000*n+"_"+C.cR.az(99999)
n=p.b
l=o.type
l.toString
k=B.hqC(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jF(m,n,k,l,j,"From folder",null,B.b1h(),null)
$.ahA.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2X(o),$async$Wh)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H8.n(0,h,g)
$.S4.n(0,h,g)
B.RO(h,g)
x=9
break
case 10:x=11
return A.b(B.aQs(d,m,o),$async$Wh)
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
h9D(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h9D=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hqC(r,C.d.gal(r.split(".")),null)
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
return A.i($async$h9D,w)},
Ju(d,e,f,g,h,i){return B.hVU(d,e,f,g,h,i)},
hVU(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ju=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.az(99999)
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
return A.b(B.ah9(r,q,g),$async$Ju)
case 16:f=new B.jF(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1h(),null)
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
t=$.ahA.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2X(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah3(s),$async$Wj)
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
hqC(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rX(d,e){return B.hVW(d,e)},
hVW(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S4.h(0,f)
if(e==null)e=$.H8.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahA.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2X(s),$async$rX)
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
return A.b(B.ah3(f),$async$rX)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aA0(A.a([],y.a))
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
return A.b(B.aQ9(f),$async$rX)
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
hVZ(d){var x,w,v=$.ahA.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hW_(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hVX(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqZ(d,e,f,g,h){return B.hVY(d,e,f,g,h)},
hVY(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqZ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahA.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2X(s),$async$aqZ)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rX(g,e),$async$aqZ)
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
return A.b(n.iB(d).xL(h,r,new A.EB(!0,e.c)),$async$aqZ)
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
return A.i($async$aqZ,w)},
hqE(d,e,f,g,h){var x,w,v,u,t=$.hqD
$.hqD=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cez.n(0,t,new B.byf(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aA0(u)))
return t},
h9E(d){var x=0,w=A.j(y.H)
var $async$h9E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9E,w)},
Jv(d,e){var $async$Jv=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahA.h(0,h)
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
return A.qx(B.Wj(d,e,p,o<q?o:q),$async$Jv,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qx(A.GG(n),$async$Jv,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qx(B.ah3("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jv,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qx(B.Sj(h[l]),$async$Jv,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qx(A.GG(k),$async$Jv,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qx(B.rX(d,e),$async$Jv,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qx(A.GG(A.wU(j,p,o<i?o:i)),$async$Jv,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qx(null,0,w)
case 2:return A.qx(t.at(-1),1,w)}})
var x=0,w=A.hzu($async$Jv,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hBi(w)},
b1j(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cez.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5J(),$async$b1j)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1j,w)},
Wi(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cez.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5J(),$async$Wi)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ah9(r.c,u,r.z),$async$Wi)
case 4:t=new B.jF(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1h(),null)
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
a8f(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cez.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aig(u[s]),$async$a8f)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
ceB(d,e,f){var x=0,w=A.j(y.H)
var $async$ceB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDi(d,e,f),$async$ceB)
case 2:return A.h(null,w)}})
return A.i($async$ceB,w)},
ceC(d,e,f){var x=0,w=A.j(y.H)
var $async$ceC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDj(d,e,f),$async$ceC)
case 2:return A.h(null,w)}})
return A.i($async$ceC,w)},
Fo(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bl(d),$async$Fo)
case 2:p=g
J.nU(p,new B.ceA(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H8.W(0,v)
$.ahA.W(0,e)
x=3
return A.b(B.ah3(v),$async$Fo)
case 3:u=g
$.fpN.W(0,v)
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
return A.b(B.aig(s[q]),$async$Fo)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aig(v),$async$Fo)
case 13:x=14
return A.b(B.Hi(d,p),$async$Fo)
case 14:return A.h(null,w)}})
return A.i($async$Fo,w)},
b1i(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rX(d,e),$async$b1i)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fqJ(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1i,w)},
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
break}r=J.b7(u,new B.fA6(),y.U)
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
t=J.b7(e,new B.fEj(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aD("String","ngmy_doc_share_index_v1_"+u,C.X.aw(t,null)),$async$Hi)
case 3:return A.h(null,w)}})
return A.i($async$Hi,w)},
bDi(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bl(d),$async$bDi)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fyh(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG4(f))
x=4
return A.b(B.Hi(d,u),$async$bDi)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDi,w)},
bDj(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bl(d),$async$bDj)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fyi(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOz(f))
x=4
return A.b(B.Hi(d,u),$async$bDj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDj,w)},
add:function add(d){this.a=d},
fuk:function fuk(){},
fA3:function fA3(d,e){this.a=d
this.b=e},
fA4:function fA4(d){this.a=d},
fA5:function fA5(){},
ceA:function ceA(d){this.a=d},
byf:function byf(d,e,f,g,h,i,j,k,l){var _=this
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
fA6:function fA6(){},
fEj:function fEj(){},
fyh:function fyh(d){this.a=d},
fyi:function fyi(d){this.a=d},
a8g(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.ceF())?3:4
break
case 3:x=5
return A.b(B.b1k(d,e),$async$a8g)
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
return A.b(B.b1f(s),$async$a8g)
case 10:case 9:if(g){v=new A.Ra(1,D.TH,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wk(d,e),$async$a8g)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wp(!0,!0,d,e),$async$a8g)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oo(d,D.Ao,e,t)
v=new A.Ra(p,D.Ao,t)
x=1
break}v=B.ceE(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
Wk(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8i(null,d,e),$async$Wk)
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
return A.b(B.b1e(p,d.length,e),$async$Wk)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ceC(e,C.d.gH(d).a,r.b),$async$Wk)
case 7:case 6:q=r.a
x=8
return A.b(B.Oo(d,D.TH,e,q),$async$Wk)
case 8:v=new A.Ra(d.length,D.TH,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
Wl(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mL(D.na)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8h(d,e),$async$Wl)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cex(s,d,e,t),$async$Wl)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1f(t),$async$Wl)
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
return A.b(B.h9x(),$async$Wn)
case 2:x=3
return A.b(B.aSL(),$async$Wn)
case 3:return A.h(null,w)}})
return A.i($async$Wn,w)},
a8h(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1h()
x=3
return A.b(B.ceB(e,d.a,u),$async$a8h)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
Oo(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.TH&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8h(p,f),$async$Oo)
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
return A.b(B.cew(o,p,u,f),$async$Oo)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cex(o,p,f,t),$async$Oo)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cev(o,u,p,f),$async$Oo)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1k(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceD(e,d),$async$b1k)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wp(!1,!0,d,e),$async$b1k)
case 4:u=g
if(u!=null){t=u.b
v=new A.Ra(u.a,D.Ao,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1k,w)},
ceD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ceD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wj(d,s,0,1),$async$ceD)
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
return A.i($async$ceD,w)},
ceE(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ceE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8i(null,d,e),$async$ceE)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hqB(u)
if(t.length>800){v=null
x=1
break}v=new A.Ra(d.length,D.dS3,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceE,w)},
ar_(d,e,f){return B.hW2(d,e,f)},
hW2(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ar_=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h9C(g)?3:4
break
case 3:x=5
return A.b(B.cey(g),$async$ar_)
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
return A.b(B.b1d(q),$async$ar_)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h9B(g,"NGMYDOCSYNC0")
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
break}if(J.eJ(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wm(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ar_,w)},
Jw(d,e,f){return B.hW0(d,e,f)},
hW0(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
return A.b(B.b15(r),$async$Jw)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b15(A.cC(s,0,null)),$async$Jw)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cea(o,r,a1,n,a2),$async$Jw)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ce9(q),$async$Jw)
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
a8i(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rX(f,r),$async$a8i)
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
return A.i($async$a8i,w)},
Wm(d,e){return B.hW1(d,e)},
hW1(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
ceF:function ceF(){},
a2w(d){var x=A.P(d).ax.a===C.H,w=x?D.aiJ:D.age,v=x?D.akv:C.c,u=x?C.aS:C.a_,t=x?C.bN:C.an,s=x?D.ahG:C.bi
return new A.aIf([w,s,v,u,t,x?C.fr:C.bQ])},
hGH(d,e){var x=e?C.w.j(0.72):C.b6
return A.cg(null,x,!0,null,new B.h15(e),d,null,!0,!0,y.N)},
cek(d,e,f,g,h,i,j,k,l){return new B.We(e,l,d,f,k,j,g,h,i,null)},
a_u(d,e,f,g,h,i,j){return new B.bfW(g,h,j,e,i,d,f,null)},
h15:function h15(d){this.a=d},
a_r:function a_r(d,e){this.c=d
this.a=e},
aBc:function aBc(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcT:function dcT(d){this.a=d},
dcR:function dcR(d){this.a=d},
dcS:function dcS(d){this.a=d},
bxS:function bxS(){},
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
aFf:function aFf(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_F:function e_F(d){this.a=d},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_3:function e_3(d,e){this.a=d
this.b=e},
dZC:function dZC(d,e,f){this.a=d
this.b=e
this.c=f},
dZB:function dZB(d){this.a=d},
dZD:function dZD(d,e){this.a=d
this.b=e},
dZI:function dZI(d,e,f){this.a=d
this.b=e
this.c=f},
dZH:function dZH(d){this.a=d},
e_t:function e_t(d,e){this.a=d
this.b=e},
e_u:function e_u(d){this.a=d},
e__:function e__(d,e,f){this.a=d
this.b=e
this.c=f},
dZX:function dZX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZG:function dZG(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_6:function e_6(){},
dZM:function dZM(d){this.a=d},
e_q:function e_q(d,e){this.a=d
this.b=e},
e_r:function e_r(d,e){this.a=d
this.b=e},
e_s:function e_s(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e_j:function e_j(d,e){this.a=d
this.b=e},
e_f:function e_f(d){this.a=d},
e_e:function e_e(d){this.a=d},
e_g:function e_g(){},
e_h:function e_h(){},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_k:function e_k(){},
e_l:function e_l(d){this.a=d},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_8:function e_8(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d){this.a=d},
e_c:function e_c(d){this.a=d},
dZJ:function dZJ(){},
dZK:function dZK(d){this.a=d},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZF:function dZF(d,e){this.a=d
this.b=e},
dZE:function dZE(d,e,f){this.a=d
this.b=e
this.c=f},
e_0:function e_0(d){this.a=d},
e_1:function e_1(d,e,f){this.a=d
this.b=e
this.c=f},
dZV:function dZV(d,e){this.a=d
this.b=e},
dZR:function dZR(d){this.a=d},
dZO:function dZO(d,e,f){this.a=d
this.b=e
this.c=f},
dZS:function dZS(d){this.a=d},
dZT:function dZT(d){this.a=d},
dZU:function dZU(){},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZP:function dZP(d){this.a=d},
dZN:function dZN(d,e,f){this.a=d
this.b=e
this.c=f},
dZQ:function dZQ(){},
e_5:function e_5(d){this.a=d},
e_4:function e_4(d,e){this.a=d
this.b=e},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_m:function e_m(d){this.a=d},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_o:function e_o(d){this.a=d},
e_C:function e_C(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_B:function e_B(d){this.a=d},
e_D:function e_D(){},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_w:function e_w(d,e){this.a=d
this.b=e},
e_x:function e_x(d,e,f){this.a=d
this.b=e
this.c=f},
e_v:function e_v(d,e,f){this.a=d
this.b=e
this.c=f},
e_y:function e_y(d,e){this.a=d
this.b=e},
e_z:function e_z(d,e){this.a=d
this.b=e},
aB9:function aB9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfV:function bfV(d,e,f){this.c=d
this.d=e
this.a=f},
dcP:function dcP(){},
dcQ:function dcQ(){},
adx:function adx(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddc:function ddc(){},
ddb:function ddb(d){this.a=d},
a_t:function a_t(d,e,f){this.c=d
this.d=e
this.a=f},
aBe:function aBe(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dd8:function dd8(d){this.a=d},
dd9:function dd9(d,e,f){this.a=d
this.b=e
this.c=f},
dda:function dda(d,e){this.a=d
this.b=e},
dd6:function dd6(d,e){this.a=d
this.b=e},
dd4:function dd4(d){this.a=d},
dd2:function dd2(d){this.a=d},
dd_:function dd_(d){this.a=d},
dd5:function dd5(d){this.a=d},
dd1:function dd1(d){this.a=d},
dd7:function dd7(d){this.a=d},
dd3:function dd3(d){this.a=d},
dd0:function dd0(d){this.a=d},
a_q:function a_q(d,e,f){this.c=d
this.d=e
this.a=f},
aBb:function aBb(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcM:function dcM(d){this.a=d},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcN:function dcN(d){this.a=d},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcO:function dcO(d){this.a=d},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d){this.a=d},
dcH:function dcH(d,e){this.a=d
this.b=e},
dcI:function dcI(d){this.a=d},
QJ:function QJ(d,e,f){this.c=d
this.d=e
this.a=f},
aBh:function aBh(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddp:function ddp(d){this.a=d},
ddq:function ddq(d){this.a=d},
ddr:function ddr(d){this.a=d},
dds:function dds(d){this.a=d},
ddt:function ddt(d,e){this.a=d
this.b=e},
ddu:function ddu(d){this.a=d},
ddw:function ddw(d){this.a=d},
ddv:function ddv(d){this.a=d},
a_v:function a_v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBf:function aBf(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddl:function ddl(d,e){this.a=d
this.b=e},
ddm:function ddm(d,e){this.a=d
this.b=e},
ddd:function ddd(d,e,f){this.a=d
this.b=e
this.c=f},
dde:function dde(d){this.a=d},
ddf:function ddf(){},
ddk:function ddk(){},
ddg:function ddg(d,e){this.a=d
this.b=e},
ddh:function ddh(d,e){this.a=d
this.b=e},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddj:function ddj(d,e){this.a=d
this.b=e},
adv:function adv(d,e){this.c=d
this.a=e},
dcE:function dcE(d){this.a=d},
a_p:function a_p(d){this.a=d},
aBa:function aBa(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_w:function a_w(d,e){this.c=d
this.a=e},
aBg:function aBg(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddo:function ddo(d){this.a=d},
ddn:function ddn(d){this.a=d},
bfW:function bfW(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hW3(){var x,w=$.ov(),v=J.e4(10,y.N)
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
a8j(d){return B.hW4(d)},
hW4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8j)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$a8j)
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
return A.i($async$a8j,w)},
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
return A.b(B.a8j(s),$async$Wo)
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
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceH(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hW3()
t=A.U(u).k("N<1,a9<n,aE>>")
r=A.C(new A.N(u,new B.ceI(s),t),t.k("ak.E"))
x=6
return A.b(B.Op(),$async$Wp)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8j(q),$async$Wp)
case 7:x=8
return A.b(B.a8k(r,u,g,s),$async$Wp)
case 8:v=new A.brM(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
ar0(d){var x=0,w=A.j(y.y),v,u,t
var $async$ar0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Op(),$async$ar0)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar0,w)},
ceJ(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Op(),$async$ceJ)
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
return A.i($async$ceJ,w)},
a8k(d,e,f,g){return B.hW5(d,e,f,g)},
hW5(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8k=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqZ("media",r,new B.ceG(s,e,g),f,q),$async$a8k)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wo(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8k)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wo(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8k)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wo(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8k)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8k,w)},
Fp(d,e,f){return B.hW6(d,e,f)},
hW6(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.ar0(b3),$async$Fp)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iP,null,g),$async$Fp)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ar0(b3),$async$Fp)
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
l=new A.abL(a8.a,b0,"media",a8.d,a9).Df(m)
k=A.cC(l,0,null)
x=17
return A.b(B.b16(k,n,o,s,b7),$async$Fp)
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
return A.b(new A.abL(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fp)
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
return A.b(B.a8j(e),$async$Fp)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fp,w)},
ceH:function ceH(){},
ceI:function ceI(d){this.a=d},
ceG:function ceG(d,e,f){this.a=d
this.b=e
this.c=f},
aSL(){var x=0,w=A.j(y.H),v,u
var $async$aSL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i6b=null
v=y.H
u=A.dM(null,v)
x=2
return A.b(u,$async$aSL)
case 2:u=A.dM(null,v)
x=3
return A.b(u,$async$aSL)
case 3:u=$.hf1
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dM(u,v),$async$aSL)
case 4:$.hf1=$.ifk=$.ifl=null
return A.h(null,w)}})
return A.i($async$aSL,w)},
fDV(d){var x=0,w=A.j(y.H),v,u
var $async$fDV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9L){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fDW(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.ii,new B.fDX()),$async$fDV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fDV,w)},
ifi(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hVO(x):x},
hf5(d){var x=0,w=A.j(y.T),v,u,t
var $async$hf5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.ar2(u)
x=1
break}v=B.h9B(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hf5,w)},
hf4(d){var x=0,w=A.j(y.T),v,u,t
var $async$hf4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.ar3(u)
x=1
break}v=B.h9B(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hf4,w)},
fXx(d){var x=0,w=A.j(y.T),v
var $async$fXx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar3(d),$async$fXx)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXx,w)},
bEb(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hf4(d),$async$bEb)
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
return A.i($async$bEb,w)},
frA(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$frA=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wi(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cn(d.apY(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frA,w)},
Hk(d,e,f){return B.ihM(d,e,f)},
ihM(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hk=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hf5(a1),$async$Hk)
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
return A.b($.hIH().aGl(D.dFi,null),$async$Hk)
case 4:l=d.hf1=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aA0(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fEw(f,k,new B.fEx(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8M(0,new B.Yx(r,"offer")),$async$Hk)
case 5:d=l
x=7
return A.b(l.amo(0),$async$Hk)
case 7:x=6
return A.b(d.a8E(0,a4),$async$Hk)
case 6:x=8
return A.b(B.fDV(l),$async$Hk)
case 8:x=9
return A.b(l.aqK(),$async$Hk)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ifi(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aw(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ar4(m,h),$async$Hk)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hqB(h)
case 11:v=new A.br1(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hk,w)},
fDW:function fDW(d){this.a=d},
fDX:function fDX(){},
fEx:function fEx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEw:function fEw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEv:function fEv(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ijR(d){switch(d){case"new":return D.eBH
case"checking":return D.eBI
case"connected":return D.eBK
case"completed":return D.eBJ
case"failed":return D.eBM
case"disconnected":return D.eBN
case"closed":return D.aRB
case"count":return D.eBL}return D.aRB},
ijS(d){switch(d){case"new":return D.aRC
case"gathering":return D.eBO
case"complete":return D.a9L}return D.aRC},
iuW(d){switch(d){case"stable":return D.eBP
case"have-local-offer":return D.eBQ
case"have-local-pranswer":return D.eBS
case"have-remote-offer":return D.eBR
case"have-remote-pranswer":return D.eBT
case"closed":return D.aRI}return D.aRI},
it4(d){switch(d){case"new":return D.aRF
case"connecting":return D.aRG
case"connected":return D.aRH
case"closed":return D.a9M
case"disconnected":return D.aRE
case"failed":return D.aRD}return D.a9M},
aaH:function aaH(d,e){this.a=d
this.b=e},
Pt:function Pt(d,e){this.a=d
this.b=e},
Yw:function Yw(d,e){this.a=d
this.b=e},
Ps:function Ps(d,e){this.a=d
this.b=e},
FT:function FT(d,e){this.a=d
this.b=e},
css:function css(){},
hbm(d){var x=new B.FS()
x.a=d
x.b=!0
return x},
FS:function FS(){this.b=this.a=$},
aaG:function aaG(){},
avx:function avx(){},
Yx:function Yx(d,e){this.a=d
this.b=e},
h9x(){var x=0,w=A.j(y.H)
var $async$h9x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9x,w)},
h9A(d,e,f){var x=0,w=A.j(y.T),v
var $async$h9A=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mL(D.na))){v=null
x=1
break}v=B.fXO(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9A,w)},
hqB(d){var x,w=F.afE.a5s(C.dW.aO(d),null)
if(w.length===0){x=C.dW.aO(d)
return C.cU.gcu().aO(x)}return C.cU.gcu().aO(w)},
hVN(d){var x,w,v=C.cM.aO(d)
try{x=C.ca.cJ(0,F.afD.bg_(v,!1))
return x}catch(w){x=C.ca.cJ(0,v)
return x}},
h9B(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hVN(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cJ(0,C.cM.aO(x))
return v}catch(u){return x}}return null},
hVO(d){var x,w,v,u,t,s=A.a([],y.s)
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
hVP(){var x,w=$.ov(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b1c(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bO),$async$b1c)
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
return A.i($async$b1c,w)},
cep(d,e){return B.hVQ(d,e)},
hVQ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cep=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cP,null),$async$cep)
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
return A.i($async$cep,w)},
b1f(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1c(d),$async$b1f)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1f,w)},
b1e(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hVP()
r=C.a.i(f)
t=C.dW.aO(s)
x=3
return A.b(B.cep(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cU.gcu().aO(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1e)
case 3:if(!h){v=null
x=1
break}v=new A.a1w("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1e,w)},
b1d(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1c(o),$async$b1d)
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
return A.i($async$b1d,w)},
ceq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ceq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bF8("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cP),$async$ceq)
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
return A.i($async$ceq,w)},
b1g(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Js(),$async$b1g)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1g,w)},
aqW(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqW)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1g(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqW,w)},
aqU(d,e){var x=0,w=A.j(y.H)
var $async$aqU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqU)
case 3:x=2
return A.b(g.aD("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqU)
case 2:return A.h(null,w)}})
return A.i($async$aqU,w)},
a8b(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8b)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Js(),$async$a8b)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dp(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8a(s),$async$a8b)
case 5:x=6
return A.b(B.aqU(f,u),$async$a8b)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8b,w)},
a8c(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8c=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8c)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Js(),$async$a8c)
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
return A.b(B.aqU(g,q),$async$a8c)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8a(u),$async$a8c)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8c,w)},
a8d(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8d)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Js(),$async$a8d)
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
s=B.b19(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8d)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aD("String","ngmy_doc_share_school_session_"+s,C.X.aw(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8d)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
cer(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cer=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cer)
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
return A.i($async$cer,w)},
Jt(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cer(d),$async$Jt)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1g(t),$async$Jt)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqV(d),$async$Jt)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b19(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqV(d),$async$Jt)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jt,w)},
aqV(d){var x=0,w=A.j(y.H)
var $async$aqV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqV)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqV)
case 2:return A.h(null,w)}})
return A.i($async$aqV,w)},
b1h(){var x,w=$.ov(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a8e(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h9C(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ceu(d){return B.hVS(d)},
hVS(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ceu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8e(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bO),$async$ceu)
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
return A.i($async$ceu,w)},
aqY(d,e){return B.hVT(d,e)},
hVT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8e(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cP,null),$async$aqY)
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
return A.i($async$aqY,w)},
cew(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cew=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8e(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqY(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cew)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cew,w)},
cev(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cev=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8e(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqY(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cev)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cev,w)},
cex(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cex=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8e(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqY(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cex,w)},
cey(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cey=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h9C(d)){v=null
x=1
break}x=3
return A.b(B.ceu(d),$async$cey)
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
return A.i($async$cey,w)},
a8l(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8l=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8l)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bO),$async$a8l)
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
return A.i($async$a8l,w)},
ar1(d){return B.hW7(d)},
hW7(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ar1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$ar1)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$ar1)
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
return A.i($async$ar1,w)},
ar2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ar2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar2)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8l(),$async$ar2)
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
return A.b(B.ar1(s),$async$ar2)
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
return A.i($async$ar2,w)},
ar4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ar4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$ar4)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8l(),$async$ar4)
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
return A.b(B.ar1(u),$async$ar4)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar4,w)},
ar3(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ar3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar3)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8l(),$async$ar3)
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
return A.i($async$ar3,w)},
apV(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qn)){v=null
x=1
break}x=3
return A.b(p.mg(e),$async$apV)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hq),$async$apV)
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
return A.i($async$apV,w)},
iqv(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.v(w),5,"0")
return v},
fVP(d){return B.iqx(d)},
iqx(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fVP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Ls(d,3600),$async$fVP)
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
return A.i($async$fVP,w)},
DK(d,e,f,g,h,i){var x=null
return B.iqu(d,e,f,g,h,i)},
iqu(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DK=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hqE(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h9E(r),$async$DK)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fVP(o),$async$DK)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8f(r),$async$DK)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aVc)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.ML(A.a([],g))
x=15
return A.b(d.fa(0,A.awm("GET",A.cC(n,0,null))).dg(0,C.GK),$async$DK)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8f(r),$async$DK)
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
return A.b(B.b1j(r,k),$async$DK)
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
return A.b(B.a8f(r),$async$DK)
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
aSp(d){return B.iqw(d)},
iqw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aSp)
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
return A.i($async$aSp,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[160]
O=c[47]
F=c[266]
I=c[152]
P=c[236]
E=c[229]
G=c[95]
Q=c[199]
R=c[153]
S=c[234]
K=c[271]
L=c[279]
B=a.updateHolder(c[22],B)
D=c[277]
T=c[198]
M=c[219]
U=c[74]
V=c[260]
W=c[80]
X=c[62]
N=c[94]
Y=c[278]
B.cst.prototype={
aGl(d,e){return this.cQ3(d,e)},
cQ3(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dJ(r,s,t)
t.u(0,d)
u=new q(A.kk(A.cv(t)))
t=J.k(u)
v=B.i_M(C.cU.gcu().aO(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGl,w)}}
B.b6r.prototype={
bCf(d){var x=this,w=x.w
w.onclose=A.ht(new B.cso(x))
w.onopen=A.ht(new B.csp(x))
w.onmessage=A.ht(new B.csq(x))
w.onbufferedamountlow=A.ht(new B.csr(x))},
gd6(d){return this.x},
aiB(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FS()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hbm(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiB)
case 8:v=t.hbm(s.ap4(f,0,null))
x=1
break
case 7:case 4:v=B.hbm(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiB,w)}}
B.b6s.prototype={
bCg(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ht(new B.csu(x)))
w.addEventListener("icecandidate",A.ht(new B.csv(x)))
w.addEventListener("iceconnectionstatechange",A.ht(new B.csw(x)))
w.onicegatheringstatechange=A.ht(new B.csx(x))
w.addEventListener("signalingstatechange",A.ht(new B.csy(x)))
if(!$.hj4())w.addEventListener("connectionstatechange",A.ht(new B.csz(x)))
w.addEventListener("negotiationneeded",A.ht(new B.csA(x)))
w.addEventListener("track",A.ht(new B.csB(x)))},
amo(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kk(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amo)
case 3:t=f
v=new B.Yx(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amo,w)},
a8E(d,e){return this.brb(0,e)},
brb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8E)
case 2:return A.h(null,w)}})
return A.i($async$a8E,w)},
a8M(d,e){return this.brw(0,e)},
brw(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8M)
case 2:return A.h(null,w)}})
return A.i($async$a8M,w)},
aqK(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yx(s,t?null:r.type)
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
B.adw.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_s.prototype={
S(){return new B.aBd()},
gd1(){return this.c}}
B.aBd.prototype={
Y(){this.a4()
this.afa()},
afa(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1a(u.e,u.c),$async$afa)
case 2:t=e
if(v.c!=null)v.m(new B.dcX(v,t))
return A.h(null,w)}})
return A.i($async$afa,w)},
QY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqR(t.e,t.c,!1),$async$QY)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fn0)
x=1
break}x=4
return A.b(B.a89(u.a.c,"individual"),$async$QY)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a71(A.ec(new B.dcU(u),!1,null,y.H)),$async$QY)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QY,w)},
JO(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fBM(o),$async$JO)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8d(o.e,r,s,q),$async$JO)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fk_)
x=1
break}x=5
return A.b(B.a89(u.a.c,"member"),$async$JO)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a71(A.ec(new B.dcW(u),!1,null,y.H)),$async$JO)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JO,w)},
yH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a88(t.e,o,t.f,t.r,t.w,s),$async$yH)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a89(u.a.c,"org_owner"),$async$yH)
case 4:x=5
return A.b(B.aqW(u.a.c),$async$yH)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fCg(o),$async$yH)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8b(s,t,o,q.c),$async$yH)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fjW)
x=1
break}x=10
return A.b(B.aqW(u.a.c),$async$yH)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a71(A.ec(new B.dcV(u),!1,null,y.H)),$async$yH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yH,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H,q=r?C.nC:C.qp,p=B.h9z(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dN,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aF.j(0.35),C.h2,24)],y.V)
u=y.p
v=A.r(s,A.x(A.a([A.r(s,D.fHd,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hi,s,s,s),C.aB,D.h0e,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.caI,C.n),s,s,s,s,C.ey,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m0(new B.dcZ(),s),C.T,v,C.e3,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.ae)
if(!t.a.x)C.d.u(w,A.a([new B.ae_(C.f1,C.aE6,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcjd(),s),C.ae],u))
w.push(new B.ae_(C.pv,C.a5m,"Team Member","Sign in with your organization access code + password",t.gck4(),s))
w.push(C.ae)
w.push(new B.ae_(C.aq3,C.a71,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjA(),s))
return A.c4(s,q,A.bm(!0,A.cb(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae_.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aH(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eB(A.A(A.a([A.r(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mE,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zh,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDS.prototype={}
B.aH_.prototype={}
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
bft(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jF(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOz(d){return this.bft(null,d)},
aG4(d){return this.bft(d,null)}}
B.Wc.prototype={
S(){return new B.aFd(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aFd.prototype={
Y(){this.a4()
this.afb()},
afb(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cm(u.a.c),$async$afb)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dZy(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afb,w)},
afc(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fy(s)),$async$afc)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fnW)
case 1:return A.h(v,w)}})
return A.i($async$afc,w)},
a_D(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apV(s.d,4),$async$a_D)
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
aj2(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aj2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abk("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aj2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aj2,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.H,n=o?C.nC:C.qp,m=o?C.c:C.a_,l=A.eQ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.r(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,K.a5O,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.amG,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aF.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.ng,w,C.l4,new A.eo(A.r(p,A.qf(p,p,!1,B.hVJ(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l4,A.A(A.a([A.E(A.en(N.Di,C.Wa,q.gcbF(),p),1),C.av,A.E(A.dh(C.zJ,p,C.ac2,q.gcbG(),A.bo(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.W,new A.a5(1/0,p,A.en(M.a46,D.fWO,q.gcyT(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.and,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wg.prototype={
S(){return new B.aFg(new A.au(C.ax,$.ax()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aFg.prototype={
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
if(t==null){u.m(new B.e_H(u))
x=1
break}u.m(new B.e_I(u))
s=u.a
r=s.c
x=3
return A.b(B.a87(s.d,new B.e_J(u),t,r),$async$a_E)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_K(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_E,w)},
a2T(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2T=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e_L(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.rX(r.a.c,q),$async$a2T)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_M(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj_(p,m,l,j,k),$async$a2T)
case 8:o=e
if(r.c!=null)r.m(new B.e_N(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e_O(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e_P(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2T,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.H,i=j?D.aiJ:D.age,h=j?D.akv:C.c,g=j?C.aS:C.a_,f=j?C.bN:C.an,e=j?D.ahG:C.bi
i=[i,e,h,g,f,j?C.fr:C.bQ]
x=A.P(d).ax.a===C.H
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eQ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.r(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.r(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.r(k,A.A(A.a([A.r(k,D.bYS,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a8(C.aA,C.aE,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,K.a5O,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v_(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bln()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.On,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aF,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_Q(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.L(i[1],C.r,1)
m=J.Mp(l.a.d,4)
m=A.C(new A.N(m,new B.e_R(x,new A.aIf(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.li,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bA,s,C.T,e,C.T,q,C.dc,p,C.T,A.r(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eH,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.l(14)
s=A.L(C.aF.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fit)
else q.push(A.X(C.lP,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b_,new A.o(u,k,s,t,k,k,C.n),C.iO,k,k,k,k,C.f0,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bGo,k,k,C.ah),1)
u=l.f?k:l.gcyU()
t=i[3]
s=i[1]
q=A.l(16)
s=A.en(M.a46,D.fXV,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbH()
t=A.bo(C.aF,k,k,0,C.c,k,C.nH,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lD(new B.e_S(),A.x(A.a([e,new A.D(D.bFT,A.x(A.a([s,C.T,i,C.ae,A.bJ(l.f?C.tL:D.fW9,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cw,C.a0k,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bln.prototype={
p_(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hk(C.bC,v.length),C.aP)}}
B.Wd.prototype={
S(){return new B.aFe()}}
B.aFe.prototype={
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
afd(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afd=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dZz(r))
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
return A.b(B.a8c(p,m,n,o,C.a.i(l).length===0?null:l),$async$afd)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fnx)
s=[1]
x=4
break}p.L(y.q).f.T(D.fm8)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dZA(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afd,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H?C.nC:C.qp,q=A.eQ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fOu,s,s,s,1,s,!0),p=A.r(s,D.bxV,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.Ia,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c59,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c54,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c5k,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbI()
u=A.bo(C.aF,s,s,s,s,C.hb,s,s,s,s,s,s)
return A.c4(q,r,A.cb(A.x(A.a([p,C.dc,o,C.ae,x,C.ae,w,C.ng,A.bJ(t.r?C.tL:C.aY4,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.add.prototype={}
B.byf.prototype={
a5J(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.apY()))
x=3
return A.b(B.Sk(t,s),$async$a5J)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5J,w)},
gd1(){return this.a}}
B.On.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_r.prototype={
S(){return new B.aBc(new A.au(C.ax,$.ax()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aBc.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dcT(this))},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
cbO(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2w(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nC:v.a[0],p=A.l(24),o=A.L(C.aF.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aF.j(u?0.25:0.12),C.h2,32)],n),l=A.r(w,T.asM,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aF.j(0.4),C.cz,16)],n),C.atB,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v_(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxS()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.Cx,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b6i),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcR(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
h=y.p
return A.eK(w,C.L,new A.cP(Q.M5,new A.bN(new A.o(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wy,A.x(A.a([l,C.aO,k,C.T,j,C.e3,i,C.e3,A.A(A.a([A.E(A.dU(C.o2,new B.dcS(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.av,A.E(new A.bN(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aF.j(0.35),C.cL,12)],n),L.Qm,C.n),C.bk,A.aH(!1,C.a3,!0,w,A.aP(!1,A.l(14),!0,D.ev3,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbN(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.Ov,C.da,w,w,w)}}
B.bxS.prototype={
p_(d,e){return e.ami(e.a.toUpperCase())}}
B.We.prototype={
S(){return new B.aFf(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFf.prototype={
Y(){var x=this
x.a4()
x.ur()
x.w=A.dg(C.jF,new B.e_F(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wn()
this.a3()},
a1L(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$a1L)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bl(u.a.c),$async$a1L)
case 4:u.m(new s.e_2(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1L,w)},
ur(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$ur)
case 3:t=e
x=4
return A.b(B.Bl(u.a.c),$async$ur)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e_3(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.Ob(u.d)
B.Cm(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ur,w)},
Ob(d){return this.bGi(d)},
bGi(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ob=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8h(r,u.a.c),$async$Ob)
case 8:p=f
if(u.c==null){x=1
break}new B.dZC(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a_(r.c,"video/")||r.mL(D.na))){q=r.x
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
case 12:u.m(new o.dZD(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Ob,w)},
OA(d){return this.bME(d)},
bME(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8h(d,u.a.c),$async$OA)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZI(u,d,t))
x=6
return A.b(A.fH(new A.fy(t)),$async$OA)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fy(r.toUpperCase())),$async$OA)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OA,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
us(d,e){return this.cJO(d,e)},
cJO(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$us=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e_t(r,e))
u=3
x=6
return A.b(d.$0(),$async$us)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e_u(r))
$.eY.mE()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$us,w)},
gaXQ(){var x=this.a
return x.f||x.r||x.w},
IF(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXQ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cen(s,n,r,q,o,t),$async$IF)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fP9(o,u.a.c),$async$IF)
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
a0P(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqW(u.a.c),$async$a0P)
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
return A.b(A.a6(t,!1).ce(A.ec(new B.e__(u,r,q),!1,null,y.H)),$async$a0P)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0P,w)},
a1V(d){return this.css(d)},
csr(){return this.a1V(1)},
css(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXQ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqT(u.a.c),$async$a1V)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1V,w)},
ad3(d,e,f){return this.c2E(d,e,f)},
c2E(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.us(new B.dZX(u,d,null,e,f),"Uploading\u2026"),$async$ad3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad3,w)},
bGr(){B.hFQ(!1,new B.dZG(this))
return},
cxu(){this.m(new B.e_7(this))},
aAB(){var x=0,w=A.j(y.H),v=this
var $async$aAB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGr()
return A.h(null,w)}})
return A.i($async$aAB,w)},
ad_(){var x=0,w=A.j(y.H),v=this
var $async$ad_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.dZM(v),"Importing\u2026"),$async$ad_)
case 2:return A.h(null,w)}})
return A.i($async$ad_,w)},
T3(d){return this.cJ7(d)},
cJ7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mL(D.na)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.e_q(u,d),!1,null,y.H)),$async$T3)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mL(D.Sl)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ec(new B.e_r(u,d),!1,null,y.H)),$async$T3)
case 8:x=1
break
case 7:x=u.c3m(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ec(new B.e_s(u,d),!1,null,y.H)),$async$T3)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T3,w)},
c3m(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cU3,C.a.b2(x,w+1).toLowerCase())},
agL(d){return this.cjh(d)},
cjh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mL(D.na)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZY(u,d),!1,null,y.H)),$async$agL)
case 5:x=1
break
case 4:u.m(new B.dZZ(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agL,w)},
So(d){return this.cAn(d)},
cAn(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(u.us(new B.e_j(u,d),"Preparing QR\u2026"),$async$So)
case 4:case 1:return A.h(v,w)}})
return A.i($async$So,w)},
ajs(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_k(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_l(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.So(r),$async$ajs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajs,w)},
ajl(d){return this.czV(d)},
czV(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2w(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_d(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajl)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T3(d)
break
case"qr":u.So(A.a([d],y.r))
break
case"send_my_code":u.cjU(A.a([d],y.r))
break
case"save":u.aiJ(d)
break
case"delete":u.Jy(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajl,w)},
Yq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZJ(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZK(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pA(t,s.c,s.f),$async$Yq)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.us(new B.dZL(u,r),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yq,w)},
ahQ(d){return this.cqM(d)},
cqM(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hGH(d,!1),$async$ahQ)
case 3:s=f
r=s==null
q=B.a8e(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahQ,w)},
agR(){var x=0,w=A.j(y.H),v=this,u
var $async$agR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fWV(u,v.a.c),$async$agR)
case 2:return A.h(null,w)}})
return A.i($async$agR,w)},
bGq(){B.hFQ(!1,new B.dZF(this,null))
return},
JN(d,e){return this.cjV(d,e)},
b3i(d){return this.JN(null,d)},
cjU(d){return this.JN(d,null)},
cjV(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e_0(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xS.cq().ap3(!0,C.a26,!1),$async$JN)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.us(new B.e_1(l,s,r),"Preparing\u2026"),$async$JN)
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
return A.b(B.bGj(p,l,e,s.a.c),$async$JN)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JN,w)},
IV(d){return this.c2r(d)},
c2r(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hVI(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3i(t),$async$IV)
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
return A.b(u.us(new B.dZV(u,d),"Receiving video\u2026"),$async$IV)
case 11:x=1
break
case 10:x=12
return A.b(u.us(new B.dZW(u,d),"Receiving\u2026"),$async$IV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IV,w)},
EN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DG()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahQ(t),$async$EN)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IV(s),$async$EN)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.e_5(u),!1,null,y.N)),$async$EN)
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
aiJ(d){return this.cw1(d)},
cw1(d){var x=0,w=A.j(y.H),v=this
var $async$aiJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.e_4(v,d),"Saving\u2026"),$async$aiJ)
case 2:return A.h(null,w)}})
return A.i($async$aiJ,w)},
Jy(d){return this.bOZ(d)},
bOZ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lp(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jy)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ceq(t),$async$Jy)
case 6:case 5:s=d.a
x=7
return A.b(B.Fo(u.a.c,s),$async$Jy)
case 7:u.r.W(0,s)
x=8
return A.b(u.ur(),$async$Jy)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jy,w)},
ajy(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2w(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_p(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajy)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agR()
break
case"import":u.ad_()
break}case 1:return A.h(v,w)}})
return A.i($async$ajy,w)},
cbL(d){var x=d.c
if(C.a.a_(x,"video/")||d.mL(D.na))return C.qV
if(C.a.a_(x,"image/")||d.mL(D.Sl))return C.uU
if(C.a.q(x,"pdf"))return E.PR
return D.aqu},
B(d){var x,w,v=this,u=null,t=B.a2w(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.I3,u,u,u,new B.e_A(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bZs,u,u,u,v.e?u:v.gcjB(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxt()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bTH:E.aqU,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a43,u,u,u,v.e?u:v.gcbM(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oL,u,u,u,v.e?u:v.gb4n(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c0f,u,u,u,v.e?u:new B.e_B(v),u,u,u,u,"More options",u))
q=A.eQ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m0(new B.e_C(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.r(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.r(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.P(d).ax.a===C.H?0.12:0.08),C.aF.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ks(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aB9(C.jL,s,!0,t,w?u:v.gcAo(),u),1)
x.push(new A.D(D.bEE,A.lD(new B.e_D(),A.A(A.a([s,C.av,A.E(new B.aB9(C.uV,"Export",!1,t,w?u:v.gbSS(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cw,C.iA,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfV(t,v.e?u:v.gb4n(),u)
else s=A.kt(!0,u,u,new B.e_E(v,t),s,u,D.bEw,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aB9.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bo(C.aF,t,t,0,C.c,t,C.uD,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uD,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.en(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bfV.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lD(new B.dcP(),new A.D(E.a1d,A.x(A.a([A.lD(new B.dcQ(),A.r(x,A.X(C.zj,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.aA,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e2,C.hK,x,x,new A.br(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e3,A.dh(C.oL,x,D.h0y,this.d,A.bo(C.aF,x,x,x,C.c,x,C.Ot,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cw,C.Cj,x,x,new A.br(0,1,w),s),x,x,x)}}
B.adx.prototype={
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
if(!o||i.mL(D.na))p=D.duc
else{p=C.a.a_(p,"image/")||i.mL(D.Sl)
n=y.O
p=p?A.a([C.cJ,C.aF],n):A.a([C.aN.j(0.85),C.aF.j(0.7)],n)}p=A.r(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.aA,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garr()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mL(D.na))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.aw,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mL(D.na)))l.push(A.h7h(C.aF,!1,j,j,j,!1,j,j,new B.ddb(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oD,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lD(new B.ddc(),new A.D(C.en,A.aH(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0G,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bt("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_t.prototype={
S(){return new B.aBe()},
gd1(){return this.c}}
B.aBe.prototype={
Y(){this.a4()
this.yx()},
t(){B.hVX(this.e)
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
n=B.hW_(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hVZ(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dd8(s))
x=1
break}s.m(new B.dd9(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.dda(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a2S(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2S=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rX(t.c,t.d),$async$a2S)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fkw)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj_(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2S)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2S,w)},
c2k(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.A,v,new B.dd6(w,t),C.hl,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fU(t,C.A,v,new B.dd7(w),C.hl,C.dE,!0,v,!1,v,v)
else return C.bM
return A.v5(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2w(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Dj,u,u,u,v.gb89(),u,u,u,u,"Share / save",u))
r=A.eQ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FB
else{q=v.r
if(q!=null)t=new A.D(C.ey,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ey,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.Dj,u,D.fJF,v.gb89(),A.bo(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c2k()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_q.prototype={
S(){return new B.aBb(A.ajV(),C.bF,C.bF)},
gd1(){return this.c}}
B.aBb.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fC(w,A.a4(w).k("fC<1>")).iC(new B.dcM(v))
x.gcXG().iC(new B.dcN(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fC(x,A.a4(x).k("fC<1>"))}if(x==null)x=C.bcF
x.iC(new B.dcO(v))
v.yx()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rX(p.c,p.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dcF(s))
x=1
break}x=8
return A.b(s.d.vu(0,new A.a4E(r,s.a.d.c)),$async$yx)
case 8:if(s.c==null){x=1
break}s.m(new B.dcG(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dcH(s,q))
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
aVE(d){var x=d.a
return C.a.b_(C.o.v(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.v(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2w(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eQ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FB
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.r(o,D.bUF,C.f,o,o,new A.o(o,o,o,A.l(24),o,L.Qm,C.n),o,88,o,o,o,o,o,88)
t=A.l_(C.aF,o,o,m,0,new B.dcI(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVE(p.w)+" / "+p.aVE(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aF,o,o,o,o,D.fgV,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uZ:C.hn,o,o,o,o,o)
x=A.x(A.a([u,C.l4,t,x,C.dc,A.dh(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbP(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qH,x,o),o,o,o),o,!1,!1,o,o)}}
B.QJ.prototype={
S(){return new B.aBh()},
gd1(){return this.c}}
B.aBh.prototype={
Y(){this.a4()
this.Qg()},
Qg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h9A(o.c,o.d,new B.ddp(s)),$async$Qg)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddq(s))
x=1
break}s.e=r
q=O.iiH(r)
if(q==null){s.m(new B.ddr(s))
x=1
break}s.d=q
q.aW(0,s.gb35())
x=8
return A.b(q.iX(0).dg(0,C.rY),$async$Qg)
case 8:if(s.c==null){x=1
break}s.m(new B.dds(s))
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
break}s.m(new B.ddt(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qg,w)},
chP(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddu(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dw(0,x.gb35())
w=x.d
if(w!=null)w.t()
B.itn(x.e)
x.a3()},
afg(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1i(u.c,u.d),$async$afg)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afg,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2w(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eQ(A.a([A.aI(t,t,t,t,C.oK,t,t,t,u.gcbJ(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.it(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FB
else{q=u.r
if(q!=null)s=new A.D(C.ey,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajn(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fJ(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AR(s,t),A.az(t,A.zp(A.r(t,A.X(q?I.uZ:C.hn,C.c,t,t,t,48),C.f,t,t,new A.o(C.b6,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.ddw(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_v.prototype={
S(){return new B.aBf(new A.cw(null,y.A))}}
B.aBf.prototype={
gcJv(){var x,w,v=this.a
if(v.e!==D.TI)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJ5(){var x,w,v=this.a
if(v.e!==D.Ao)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJv()
if(x!=null){v.Ro(x)
v.e=A.dg(R.GN,new B.ddl(v,x))}w=v.gcJ5()
if(w!=null){v.Rn(w)
v.f=A.dg(C.fL,new B.ddm(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rn(d){return this.coZ(d)},
coZ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ar0(d),$async$Rn)
case 3:t=f
x=4
return A.b(B.ceJ(d),$async$Rn)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.ddd(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
Ro(d){return this.cp_(d)},
cp_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ro=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fXx(d),$async$Ro)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEb(t),$async$Ro)
case 4:if(u.c==null){x=1
break}u.m(new B.dde(u))
u.c.L(y.q).f.T(D.aUO)
case 1:return A.h(v,w)}})
return A.i($async$Ro,w)},
gc7B(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbK(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2E(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DG()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fnH)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ec(new B.ddf(),!1,null,y.N)),$async$a2E)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEb(s),$async$a2E)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aUO)
case 1:return A.h(v,w)}})
return A.i($async$a2E,w)},
aaT(d){return this.bMF(d)},
bMF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fy(C.d.aN(t,", "))),$async$aaT)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaT,w)},
afe(d){return this.bMn(d)},
bMn(d){var x=0,w=A.j(y.H),v=this
var $async$afe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fy(v.a.c)),$async$afe)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fl_)
return A.h(null,w)}})
return A.i($async$afe,w)},
a2y(d){return this.cw3(d)},
cw3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apV(s.d,4),$async$a2y)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ts(r,"ngmy_doc_share_qr.png"),$async$a2y)
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
return A.i($async$a2y,w)},
gaZ6(){var x,w=this.a
if(w.e!==D.Jj)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaQ(d){return this.bMy(d)},
bMy(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ6()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fy(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaQ)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fmG)
case 1:return A.h(v,w)}})
return A.i($async$aaQ,w)},
aff(){var x=0,w=A.j(y.H),v=this,u
var $async$aff=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wn(),$async$aff)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aff,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2w(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jj&&i!==D.TI&&i!==D.Ao
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eQ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jj||t===D.TI||t===D.Ao?l:A.aI(l,l,l,l,C.lo,l,l,l,m.gb18(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.L(C.aF.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qf(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bA,A.d(""+q.d+" file(s) \xb7 "+m.gc7B(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jj){t=C.aF.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.T,A.r(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gcbK(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c4c,D.fTj,new B.ddg(m,d),l)],p))}if(m.a.e===D.Jj&&m.gaZ6()!=null)C.d.u(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c0B,D.fPT,new B.ddh(m,d),l)],p))
if(m.a.e===D.Ao){x=(m.w?C.dL:C.aF).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.T,A.r(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FE:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}if(m.a.e===D.TI){x=(m.r?C.dL:C.aF).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.T,A.r(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FE:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l),C.ae,A.dh(D.bX7,l,D.fWt,m.gcwq(),A.bo(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.r(l,A.x(q,C.l,l,C.ba,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.ae,A.A(A.a([A.E(A.en(N.Di,C.Wa,new B.ddi(m,d),l),1),C.av,A.E(A.dh(C.zJ,l,C.ac2,new B.ddj(m,d),A.bo(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.B3,l,m.gb18(),A.bo(C.aN,l,l,l,l,C.hb,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.ddk(),y.C)}}
B.adv.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.r(x,A.qf(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bI,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bJ(C.B4,x,new B.dcE(d),x)],u),x,x,C.np,v,x,x,x,x,D.fIF,x)}}
B.a_p.prototype={
S(){return new B.aBa(A.A_(C.yC,C.o9,C.vc))}}
B.aBa.prototype={
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
return A.c4(A.eQ(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fQq,x,x,x,1,x,!0),C.w,A.zZ(this.d,C.c0,this.gaz7()),x,!1,!1,x,x)}}
B.a_w.prototype={
S(){return new B.aBg(A.A_(C.yC,C.o9,C.vc))},
gd1(){return this.c}}
B.aBg.prototype={
c3o(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahd(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MR("text/plain"),$async$ahd)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fnB)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ahd,w)},
abH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hGH(p,!0),$async$abH)
case 3:t=e
p=t==null
s=B.a8e(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fk6)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abH,w)},
t(){this.d.t()
this.a3()},
az8(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3o(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.arQ,v,v,v,w.gbSl(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4a,v,v,v,w.gcmk(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eQ(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.uR:P.PA,v,v,v,v,v),v,v,v,new B.ddo(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fXp,v,v,v,1,v,!0)
u=A.zZ(w.d,C.c0,w.gaz7())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.r(v,v,C.f,v,v,new A.o(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eBm],s),v),v,!1,!1,v,v)}}
B.bfW.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pk
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.l(12)
u=A.r(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pk:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a1j,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaH.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pt.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yw.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Ps.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FT.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.css.prototype={}
B.FS.prototype={}
B.aaG.prototype={}
B.avx.prototype={}
B.Yx.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jF)","n(jF)","We(Z)","~()","a_s(Z)","H(H,jF)","QJ(Z)","~(mm)","cu(FS)","aB<jF?>(@)","Wc(Z)","Wg(Z)","D(jF)","jF(@)","a9<n,@>(jF)","a_r(Z)","Wd(Z)","a_t(Z)","a_q(Z)","a_v(Z)","adv(Z)","ai<jF>()","a_w(Z)","adx(Z,H)","a_p(Z)","a9<n,aE>(jF)","cu(Yw)","cu(aaG)","aB<cu>(FS)"])
B.cso.prototype={
$1(d){var x=this.a
x.x=D.aRA
x.y.I(0,D.aRA)},
$S:75}
B.csp.prototype={
$1(d){var x=this.a
x.x=D.aRz
x.y.I(0,D.aRz)},
$S:75}
B.csq.prototype={
$1(d){var x=this.a
x.aiB(A.ahN(d.data)).bG(new B.csn(x),y.b)},
$S:75}
B.csn.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csr.prototype={
$1(d){},
$S:75}
B.csu.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i_L(d.channel))},
$S:16}
B.csv.prototype={
$1(d){},
$S:16}
B.csw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ijR(w.iceConnectionState)
x.cx=w
if($.hj4())switch(w.a){case 0:x.cy=D.aRF
break
case 1:x.cy=D.aRG
break
case 3:x.cy=D.aRH
break
case 5:x.cy=D.aRD
break
case 6:x.cy=D.aRE
break
case 7:x.cy=D.a9M
break
default:break}},
$S:109}
B.csx.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ijS(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.csy.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iuW(w.signalingState)},
$S:109}
B.csz.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.it4(w.connectionState)},
$S:109}
B.csA.prototype={
$1(d){},
$S:109}
B.csB.prototype={
$1(d){},
$S:16}
B.fxd.prototype={
$1(d){var x=y.F.a(new A.qu([],[]).o_(d.target.result,!1)),w=C.wp.q(x.objectStoreNames,"blobs")
if(!w)C.wm.Gi(x,"blobs")},
$S:170}
B.fWJ.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x0.fs(this.b)
$.eY.mE()
this.c.$1(d)},
$S:464}
B.fWL.prototype={
$1(d){return this.a.$1(B.i9b(this.b,this.c))},
$S:30}
B.fWK.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fWI.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fWY.prototype={
$1(d){var x=this
return B.hvy(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fWZ.prototype={
$1(d){var x=this
return B.hvy(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fzS.prototype={
$1(d){var x=this
return B.cek(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcX.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcU.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cek(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcW.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cek(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcV.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cek(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcZ.prototype={
$4(d,e,f,g){var x=null
return A.k3(A.A(A.a([A.aI(x,x,x,x,D.bVK,x,x,x,new B.dcY(d),x,x,x,x,x,x),A.E(A.FE(D.S4,!0,x,!1,C.a3b,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.S4,x,g,C.anv,0,e,f)},
$C:"$4",
$R:4,
$S:441}
B.dcY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBP.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eT,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.r(v,D.bye,C.f,v,v,D.b7W,v,v,v,v,D.ank,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c_3,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.r(v,A.x(A.a([q,new A.D(C.H0,A.x(A.a([o,C.ae,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.as6,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bA,A.A(A.a([A.E(A.dU(C.dt,new B.fBN(d),v),1),C.av,A.E(A.bJ(D.fOS,v,new B.fBO(p,x,d),A.bo(C.b3,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GQ,v,v,v,v),v)},
$S:64}
B.fBN.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBO.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.flg)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDS(v,x))},
$S:0}
B.fCi.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eT,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.r(w,A.x(A.a([A.r(w,D.by4,C.f,w,w,D.b9q,w,w,w,w,D.ank,w,w,1/0),new A.D(C.H0,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.heP(u,"Organization name",C.Hr,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.heP(u,"Access code",C.nM,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.heP(u,"Member password",H.HZ,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bA,A.bJ(D.fXw,w,new B.fCh(r,q,p,d),A.bo(C.aF,w,w,w,w,C.hb,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GQ,w,w,w,w),w)},
$S:64}
B.fCh.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fll)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aH_(u,x,w))},
$S:0}
B.ceb.prototype={
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
return A.b(A.vU(p,null).dg(0,C.a0j),$async$$1)
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
B.ceh.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cei.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cej.prototype={
$1(d){return d.b},
$S:z+2}
B.ced.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cee.prototype={
$1(d){return d.b},
$S:z+2}
B.cec.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:14}
B.cef.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.ceg.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fWW.prototype={
$1(d){return new B.Wc(this.a,null)},
$S:z+11}
B.fWX.prototype={
$1(d){return new B.Wg(this.a,this.b,this.c,null)},
$S:z+12}
B.dZy.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_H.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_I.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_J.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_G(x,d))},
$S:2}
B.e_G.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_K.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_L.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_M.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_N.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_O.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e_P.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_S.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*14)),e)},
$S:103}
B.e_Q.prototype={
$1(d){var x=this.a
return x.f?null:x.a_E()},
$S:2}
B.e_R.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mL(D.Sl))s=C.uU
else s=C.a.a_(s,"video/")||d.mL(D.na)?C.qV:D.aqu
x=this.b.a
w=y.p
return new A.D(C.ky,A.A(A.a([A.r(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garr(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dZz.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZA.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cel.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:95}
B.cem.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:95}
B.fXQ.prototype={
$2(d,e){return e===this.a},
$S:310}
B.fuk.prototype={
$1(d){return J.k(d)},
$S:17}
B.fA3.prototype={
$1(d){var x=this.b
B.i6Z(C.He.ga7m(this.a)).bG(x.gC4(x),y.H)},
$S:124}
B.fA4.prototype={
$1(d){return this.a.dd(0,null)},
$S:124}
B.fA5.prototype={
$0(){return null},
$S:11}
B.ceA.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fA6.prototype={
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
B.fEj.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fyh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyi.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ceF.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.na)},
$S:z+1}
B.h15.prototype={
$1(d){return new B.a_r(this.a,null)},
$S:z+16}
B.dcT.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:8}
B.dcR.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dcS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_F.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1L()},
$S:12}
B.e_2.prototype={
$0(){var x=J.bHm(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_3.prototype={
$0(){var x=J.bHm(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZC.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZB(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG4(this.c)}},
$S:0}
B.dZB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZD.prototype={
$0(){var x=J.bHm(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZI.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG4(this.c)}},
$S:0}
B.dZH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_t.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e_u.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e__.prototype={
$1(d){return new B.Wd(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZX.prototype={
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
return A.b(r.a1V(s.gJ(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZG.prototype={
$1(d){this.a.ad3(d,"No files selected.","Added")},
$S:464}
B.e_7.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e_6(),A.U(x).k("N<1,n>")))},
$S:0}
B.e_6.prototype={
$1(d){return d.a},
$S:z+2}
B.dZM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xS.cq().cZE(C.a26,!0),$async$$0)
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
return A.b(B.ar_(null,m,o.a.c),$async$$0)
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
B.e_q.prototype={
$1(d){return new B.QJ(this.a.a.c,this.b,null)},
$S:z+7}
B.e_r.prototype={
$1(d){return new B.a_t(this.a.a.c,this.b,null)},
$S:z+18}
B.e_s.prototype={
$1(d){return new B.a_q(this.a.a.c,this.b,null)},
$S:z+19}
B.dZY.prototype={
$1(d){return new B.QJ(this.a.a.c,this.b,null)},
$S:z+7}
B.dZZ.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_j.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IF(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8g(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csr(),$async$$0)
case 5:x=6
return A.b(p.ur(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e_f(p),r),new B.e_g(),r.k("N<ak.E,n>")).bY(0,new B.e_h())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.e_i(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wn(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_f.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.e_e(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e_e.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_g.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e_h.prototype={
$1(d){return d.length!==0},
$S:3}
B.e_i.prototype={
$1(d){var x=this.a
return new B.a_v(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e_k.prototype={
$1(d){return d.a},
$S:z+2}
B.e_l.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_d.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.as(A.r(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kx,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garr(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mL(D.na)?C.te:C.pB
p=!x||p.mL(D.na)?"Play video":"View"
return new A.bN(new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l9,v,v,C.n),C.bk,A.bm(!0,new A.D(C.Cv,A.x(A.a([q,o,t,C.aB,B.a_u(!1,u,!1,w,p,new B.e_8(d),v),B.a_u(!1,u,!1,C.jL,"Share via QR",new B.e_9(d),"Letters/numbers QR code"),B.a_u(!1,u,!1,D.a3g,"Send to their Code",new B.e_a(d),"Enter someone else's personal code"),B.a_u(!1,u,!1,C.i3,"Download / save",new B.e_b(d),v),C.am,B.a_u(!1,u,!0,C.ek,"Delete",new B.e_c(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:699}
B.e_8.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.e_9.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.e_a.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.e_b.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.e_c.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dZJ.prototype={
$1(d){return d.a},
$S:z+2}
B.dZK.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZL.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8i(null,v.b,u.a.c),$async$$0)
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
B.dZF.prototype={
$1(d){var x=this.a
x.us(new B.dZE(x,d,this.b),"Preparing\u2026")},
$S:464}
B.dZE.prototype={
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
return A.b(B.bGj(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_0.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e_1.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h9D(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hk(new B.dZR(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dZS(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZT(s))
case 5:x=8
return A.b(r.b.iI(0,C.GK,new B.dZU()),$async$$0)
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
B.dZR.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZO(x,d,e))},
$S:225}
B.dZO.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZS.prototype={
$1(d){return new B.adv(this.a.a,null)},
$S:z+21}
B.dZT.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZU.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jr(o)!=null?3:4
break
case 3:x=5
return A.b(B.a86(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3i(B.Jr(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ar_(new B.dZP(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h9C(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.ur(),$async$$0)
case 10:o=J.cD(r)
p=o.eP(r,new B.dZQ()).gJ(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZN(x,d,e))},
$S:225}
B.dZN.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZQ.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.na)},
$S:z+1}
B.e_5.prototype={
$1(d){return new B.a_w(this.a.a.c,null)},
$S:z+23}
B.e_4.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1i(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_p.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.o(v[2],x,new A.bG(new A.ay(C.aF.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.l9,x,x,C.n),C.bk,A.bm(!0,new A.D(C.Cv,A.x(A.a([A.as(A.r(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kx,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_u(!0,w,!1,C.nM,"My Code",new B.e_m(d),"Your personal code & QR \u2014 others send docs to you"),B.a_u(!1,w,!1,D.a3g,"Send to their Code",new B.e_n(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_u(!1,w,!1,S.zB,"Import backup",new B.e_o(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:699}
B.e_m.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.e_n.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGq()},
$S:0}
B.e_o.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.e_C.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JB(D.S4,x,C.a3b,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.S4).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:663}
B.e_A.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_B.prototype={
$0(){this.a.ajy()
return null},
$S:0}
B.e_D.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*10)),e)},
$S:103}
B.e_E.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adx(e,w,v,this.b,x.e,x.cbL(w),new B.e_w(x,w),new B.e_x(x,v,w),new B.e_y(x,w),new B.e_z(x,w),null)},
$S:z+24}
B.e_w.prototype={
$0(){this.a.agL(this.b)
return null},
$S:0}
B.e_x.prototype={
$0(){var x=this.a
return x.m(new B.e_v(x,this.b,this.c))},
$S:0}
B.e_v.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_y.prototype={
$0(){this.a.OA(this.b)
return null},
$S:0}
B.e_z.prototype={
$0(){this.a.ajl(this.b)
return null},
$S:0}
B.dcP.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*18)),e)},
$S:103}
B.dcQ.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:113}
B.ddc.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*14)),e)},
$S:103}
B.ddb.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dd8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dd9.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dda.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dd6.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fU(w,C.A,x,new B.dd4(this.a),C.hl,C.dE,!0,x,!1,x,x)
$.aW.x1$.push(new B.dd5(this.a))
return C.bM},
$S:144}
B.dd4.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dd2(this.a))
return C.bM},
$S:185}
B.dd2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd_(x))},
$S:8}
B.dd_.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd5.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd1(x))},
$S:8}
B.dd1.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd7.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dd3(this.a))
return C.bM},
$S:185}
B.dd3.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd0(x))},
$S:8}
B.dd0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcM.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcL(x,d))},
$S:1767}
B.dcL.prototype={
$0(){return this.a.f=this.b===C.vz},
$S:0}
B.dcN.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcK(x,d))},
$S:8}
B.dcK.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcO.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcJ(x,d))},
$S:8}
B.dcJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dcF.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dcG.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcH.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcI.prototype={
$1(d){return this.a.d.Nx(0,A.dw(0,0,0,C.j.V(d),0,0))},
$S:6}
B.ddp.prototype={
$0(){var x=this.a.a
return B.rX(x.c,x.d)},
$S:1768}
B.ddq.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddr.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dds.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ddt.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddu.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.ddw.prototype={
$0(){var x=this.a
x.m(new B.ddv(x))},
$S:0}
B.ddv.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qr(0)},
$S:0}
B.ddl.prototype={
$1(d){return this.a.Ro(this.b)},
$S:12}
B.ddm.prototype={
$1(d){return this.a.Rn(this.b)},
$S:12}
B.ddd.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dde.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ddf.prototype={
$1(d){return D.hxW},
$S:z+25}
B.ddk.prototype={
$2(d,e){if(d)B.Wn()},
$S:128}
B.ddg.prototype={
$0(){return this.a.aaT(this.b)},
$S:0}
B.ddh.prototype={
$0(){return this.a.aaQ(this.b)},
$S:0}
B.ddi.prototype={
$0(){return this.a.afe(this.b)},
$S:0}
B.ddj.prototype={
$0(){return this.a.a2y(this.b)},
$S:0}
B.dcE.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.ddo.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qv(),$async$$0)
case 2:u.m(new B.ddn(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddn.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceH.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.na)},
$S:z+1}
B.ceI.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceG.prototype={
$2(d,e){return this.bn0(d,e)},
bn0(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wo(u.c,A.J(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1769}
B.fDW.prototype={
$1(d){if(d===D.a9L&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fDX.prototype={
$0(){},
$S:11}
B.fEx.prototype={
boA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.frA(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hqE(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boA(d,e)},
$S:517}
B.fEw.prototype={
$1(d){var x=this
d.b=new B.fEv(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fEv.prototype={
$1(d){return this.boz(d)},
boz(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1j(n,m),$async$$1)
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
return A.b(B.frA(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8f(m),$async$$1)
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
x(v=B.aBd.prototype,"gcjd","QY",0)
x(v,"gck4","JO",0)
x(v,"gcjA","yH",0)
x(v=B.aFd.prototype,"gcbF","afc",0)
x(v,"gcbG","a_D",0)
x(v,"gcyT","aj2",0)
x(v=B.aFg.prototype,"gcbH","a_E",0)
x(v,"gcyU","a2T",0)
x(B.aFe.prototype,"gcbI","afd",0)
x(B.aBc.prototype,"gcbN","cbO",4)
x(v=B.aFf.prototype,"gcjB","a0P",0)
x(v,"gcxt","cxu",4)
x(v,"gb4n","aAB",0)
x(v,"gcAo","ajs",0)
x(v,"gbSS","Yq",0)
x(v,"gcbM","EN",0)
x(B.aBe.prototype,"gb89","a2S",0)
x(B.aBb.prototype,"gcbP","a_F",0)
x(v=B.aBh.prototype,"gb35","chP",4)
x(v,"gcbJ","afg",0)
x(v=B.aBf.prototype,"gcwq","a2E",0)
x(v,"gb18","aff",0)
w(B.aBa.prototype,"gaz7","az8",8)
x(v=B.aBg.prototype,"gcmk","ahd",0)
x(v,"gbSl","abH",0)
w(v,"gaz7","az8",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.css,B.aaG,B.avx,B.aDS,B.aH_,B.jF,B.add,B.byf,B.FS,B.Yx])
w(B.cst,B.css)
w(B.b6r,B.aaG)
x(A.hx,[B.cso,B.csp,B.csq,B.csn,B.csr,B.csu,B.csv,B.csw,B.csx,B.csy,B.csz,B.csA,B.csB,B.fxd,B.fWJ,B.fWL,B.fWK,B.fWY,B.fWZ,B.fzS,B.dcU,B.dcW,B.dcV,B.dcZ,B.fBP,B.fCi,B.ceb,B.cei,B.cej,B.cee,B.cec,B.cef,B.ceg,B.fWW,B.fWX,B.e_J,B.e_S,B.e_Q,B.e_R,B.fuk,B.fA3,B.fA4,B.ceA,B.fA6,B.fEj,B.fyh,B.fyi,B.ceF,B.h15,B.dcT,B.dcR,B.e_F,B.dZB,B.dZH,B.e__,B.dZG,B.e_6,B.e_q,B.e_r,B.e_s,B.dZY,B.e_f,B.e_e,B.e_g,B.e_h,B.e_i,B.e_k,B.e_l,B.e_d,B.dZJ,B.dZK,B.dZF,B.e_0,B.dZS,B.dZQ,B.e_5,B.e_p,B.e_C,B.e_D,B.dcP,B.dcQ,B.ddc,B.ddb,B.dd6,B.dd4,B.dd2,B.dd5,B.dd7,B.dd3,B.dcM,B.dcN,B.dcO,B.dcI,B.ddl,B.ddm,B.ddf,B.ceH,B.ceI,B.fDW,B.fEw,B.fEv])
w(B.b6s,B.avx)
x(A.iN,[B.fWI,B.dcX,B.dcY,B.fBN,B.fBO,B.fCh,B.dZy,B.e_H,B.e_I,B.e_G,B.e_K,B.e_L,B.e_M,B.e_N,B.e_O,B.e_P,B.dZz,B.dZA,B.fA5,B.dcS,B.e_2,B.e_3,B.dZC,B.dZD,B.dZI,B.e_t,B.e_u,B.dZX,B.e_7,B.dZM,B.dZZ,B.e_j,B.e_8,B.e_9,B.e_a,B.e_b,B.e_c,B.dZL,B.dZE,B.e_1,B.dZV,B.dZO,B.dZT,B.dZU,B.dZW,B.dZN,B.e_4,B.e_m,B.e_n,B.e_o,B.e_A,B.e_B,B.e_w,B.e_x,B.e_v,B.e_y,B.e_z,B.dd8,B.dd9,B.dda,B.dd_,B.dd1,B.dd0,B.dcL,B.dcK,B.dcJ,B.dcF,B.dcG,B.dcH,B.ddp,B.ddq,B.ddr,B.dds,B.ddt,B.ddu,B.ddw,B.ddv,B.ddd,B.dde,B.ddg,B.ddh,B.ddi,B.ddj,B.dcE,B.ddo,B.ddn,B.fDX])
x(A.lF,[B.adw,B.On,B.aaH,B.Pt,B.Yw,B.Ps,B.FT])
x(A.af,[B.a_s,B.Wc,B.Wg,B.Wd,B.a_r,B.We,B.a_t,B.a_q,B.QJ,B.a_v,B.a_p,B.a_w])
x(A.ah,[B.aBd,B.aFd,B.aFg,B.aFe,B.aBc,B.aFf,B.aBe,B.aBb,B.aBh,B.aBf,B.aBa,B.aBg])
x(A.aw,[B.ae_,B.aB9,B.bfV,B.adx,B.adv,B.bfW])
x(A.jz,[B.ceh,B.ced,B.cel,B.cem,B.fXQ,B.dZR,B.dZP,B.e_E,B.ddk,B.ceG,B.fEx])
x(A.j6,[B.bln,B.bxS])})()
A.iW(b.typeUniverse,JSON.parse('{"b6r":{"aaG":[]},"b6s":{"avx":[]},"a_s":{"af":[],"v":[]},"aBd":{"ah":["a_s"]},"ae_":{"aw":[],"v":[]},"Wc":{"af":[],"v":[]},"Wg":{"af":[],"v":[]},"aFd":{"ah":["Wc"]},"aFg":{"ah":["Wg"]},"bln":{"j6":[]},"Wd":{"af":[],"v":[]},"aFe":{"ah":["Wd"]},"a_r":{"af":[],"v":[]},"We":{"af":[],"v":[]},"adx":{"aw":[],"v":[]},"a_t":{"af":[],"v":[]},"a_q":{"af":[],"v":[]},"QJ":{"af":[],"v":[]},"a_v":{"af":[],"v":[]},"adv":{"aw":[],"v":[]},"a_p":{"af":[],"v":[]},"a_w":{"af":[],"v":[]},"aBc":{"ah":["a_r"]},"bxS":{"j6":[]},"aFf":{"ah":["We"]},"aB9":{"aw":[],"v":[]},"bfV":{"aw":[],"v":[]},"aBe":{"ah":["a_t"]},"aBb":{"ah":["a_q"]},"aBh":{"ah":["QJ"]},"aBf":{"ah":["a_v"]},"aBa":{"ah":["a_p"]},"aBg":{"ah":["a_w"]},"bfW":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uQ"),k:x("MP()"),o:x("bv<n,n>"),F:x("rw"),g:x("aB<jF?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a9<n,Q>>"),t:x("O<a9<n,@>>"),r:x("O<jF>"),w:x("O<+file,name(lV,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j6>"),a:x("O<dL>"),p:x("O<v>"),Z:x("O<H>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jF>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iF"),e:x("iz_"),af:x("F4"),U:x("jF"),b:x("cu"),C:x("aE"),aK:x("wI"),ab:x("FS"),br:x("avx"),v:x("Yx"),N:x("n"),X:x("br<G>"),Q:x("m6"),D:x("dL"),aw:x("bt<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jF>>"),aW:x("c3<dL?>"),aY:x("c3<~>"),cx:x("adw"),b1:x("bk<ai<jF>>"),cf:x("bk<dL?>"),d4:x("bk<~>"),c4:x("aDS"),bG:x("aH_"),q:x("mC"),B:x("pS<FS>"),c6:x("pS<aaH>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bi?"),_:x("ai<jF>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jF?"),R:x("aE?"),c:x("Yx?"),d:x("+answerQr,transfer(n,aB<ai<jF>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,On,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dL?"),cm:x("add?"),bk:x("aDS?"),ag:x("aH_?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b6i=new A.ay(C.aF,2,C.r,-1)
D.c8P=new A.a8(C.a7,C.aa,C.x,C.a5m,null,null)
D.b7W=new A.o(null,null,null,C.mJ,null,D.c8P,C.n)
D.b9q=new A.o(null,null,null,C.mJ,null,E.Ia,C.n)
D.age=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ahG=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aiJ=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.akv=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fJy=new A.B("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.fYt=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EQ,null,null,null,null,null,null,null,null,null)
D.dlb=x([D.fJy,C.am,D.fYt],y.p)
D.bxV=new A.fm(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dlb,null)
D.h1X=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fO3=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EQ,null,null,null,null,null,null,null,null,null)
D.dCj=x([D.h1X,C.am,D.fO3],y.p)
D.by4=new A.fm(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCj,null)
D.fZ6=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fS2=new A.B("Enter the access code and password from your organization.",null,G.EQ,null,null,null,null,null,null,null,null,null)
D.dA3=x([D.fZ6,C.am,D.fS2],y.p)
D.bye=new A.fm(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dA3,null)
D.bEw=new A.R(16,10,16,28)
D.bEE=new A.R(16,14,16,4)
D.bFT=new A.R(20,0,20,16)
D.bGo=new A.R(20,8,20,16)
D.ank=new A.R(24,22,24,20)
D.a3g=new A.a_(63394,"MaterialIcons",!1)
D.aqu=new A.a_(63515,"MaterialIcons",!1)
D.bTH=new A.a_(983813,"MaterialIcons",!1)
D.bQU=new A.a_(62867,"MaterialIcons",!1)
D.bUF=new A.ae(D.bQU,44,C.c,null,null,null)
D.bVK=new A.ae(C.k7,null,C.ab,null,null,null)
D.bX7=new A.ae(C.js,18,null,null,null,null)
D.bYS=new A.ae(D.a3g,26,C.c,null,null,null)
D.bZs=new A.ae(C.D8,null,null,null,null,null)
D.c_3=new A.ae(C.Df,null,null,null,null,null)
D.c0f=new A.ae(W.a3r,null,null,null,null,null)
D.c0B=new A.ae(C.hR,16,null,null,null,null)
D.c4c=new A.ae(C.td,16,null,null,null,null)
D.bUX=new A.ae(C.nM,null,null,null,null,null)
D.c54=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bUX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c_B=new A.ae(C.Hr,null,null,null,null,null)
D.c59=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c_B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVh=new A.ae(H.HZ,null,null,null,null,null)
D.c5k=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVh,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cUE=x([C.fr,C.b3,C.aF],y.O)
D.caI=new A.a8(C.aA,C.aE,C.x,D.cUE,null,null)
D.cU3=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.S4=x([C.fr,C.aF],y.O)
D.Sl=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.na=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.duc=x([C.nv,C.aF],y.O)
D.enC={iceServers:0}
D.aM5={urls:0}
D.dG0=new A.bv(D.aM5,["stun:stun.l.google.com:19302"],y.o)
D.dG_=new A.bv(D.aM5,["stun:stun1.l.google.com:19302"],y.o)
D.dax=x([D.dG0,D.dG_],A.at("O<a9<n,n>>"))
D.dFi=new A.bv(D.enC,[D.dax],A.at("bv<n,@>"))
D.Jj=new B.On(0,"lanDirect")
D.TH=new B.On(1,"cloudStash")
D.dS3=new B.On(2,"inlineInstant")
D.TI=new B.On(3,"webrtcLink")
D.Ao=new B.On(4,"videoCloud")
D.fYs=new A.B("Receive file",null,C.ni,null,null,null,null,null,null,null,null,null)
D.cJO=x([E.asf,C.af,D.fYs],y.p)
D.fbP=new A.c8(C.aL,C.ba,C.i,C.l,null,C.p,null,0,D.cJO,null)
D.ev3=new A.D(C.co,D.fbP,null)
D.fzV=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.IH,null,null,null)
D.fK6=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fzV,null,C.K,null,null,null,null,null,null,null)
D.euf=new A.D(C.CB,D.fK6,null)
D.be_=new A.cj(C.A,null,null,D.euf,null)
D.eBm=new A.cK(0,null,0,28,null,null,D.be_,null)
D.eBG=new B.aaH(0,"RTCDataChannelConnecting")
D.aRz=new B.aaH(1,"RTCDataChannelOpen")
D.aRA=new B.aaH(3,"RTCDataChannelClosed")
D.eBH=new B.FT(0,"RTCIceConnectionStateNew")
D.eBI=new B.FT(1,"RTCIceConnectionStateChecking")
D.eBJ=new B.FT(2,"RTCIceConnectionStateCompleted")
D.eBK=new B.FT(3,"RTCIceConnectionStateConnected")
D.eBL=new B.FT(4,"RTCIceConnectionStateCount")
D.eBM=new B.FT(5,"RTCIceConnectionStateFailed")
D.eBN=new B.FT(6,"RTCIceConnectionStateDisconnected")
D.aRB=new B.FT(7,"RTCIceConnectionStateClosed")
D.aRC=new B.Yw(0,"RTCIceGatheringStateNew")
D.eBO=new B.Yw(1,"RTCIceGatheringStateGathering")
D.a9L=new B.Yw(2,"RTCIceGatheringStateComplete")
D.a9M=new B.Ps(0,"RTCPeerConnectionStateClosed")
D.aRD=new B.Ps(1,"RTCPeerConnectionStateFailed")
D.aRE=new B.Ps(2,"RTCPeerConnectionStateDisconnected")
D.aRF=new B.Ps(3,"RTCPeerConnectionStateNew")
D.aRG=new B.Ps(4,"RTCPeerConnectionStateConnecting")
D.aRH=new B.Ps(5,"RTCPeerConnectionStateConnected")
D.eBP=new B.Pt(0,"RTCSignalingStateStable")
D.eBQ=new B.Pt(1,"RTCSignalingStateHaveLocalOffer")
D.eBR=new B.Pt(2,"RTCSignalingStateHaveRemoteOffer")
D.eBS=new B.Pt(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eBT=new B.Pt(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aRI=new B.Pt(5,"RTCSignalingStateClosed")
D.fgV=new A.av(160,48)
D.bfe=new A.fl(2,null,null,null,null,C.aF,null,null,null,null)
D.fit=new A.a5(16,16,D.bfe,null)
D.fNo=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fjW=new A.b1(D.fNo,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fV6=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fk_=new A.b1(D.fV6,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2Z=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fk6=new A.b1(D.h2Z,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fMZ=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fkw=new A.b1(D.fMZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZh=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aUO=new A.b1(D.fZh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_J=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fl_=new A.b1(D.h_J,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4s=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.flg=new A.b1(D.h4s,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2p=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fll=new A.b1(D.h2p,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3D=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fm8=new A.b1(D.h3D,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fLz=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fmG=new A.b1(D.fLz,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fX1=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fn0=new A.b1(D.fX1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fPI=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fnx=new A.b1(D.fPI,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4x=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fnB=new A.b1(D.h4x,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fLP=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fnH=new A.b1(D.fLP,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKu=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fnW=new A.b1(D.fKu,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fHd=new A.B("NGMY DOC SHARE",null,C.aWb,null,null,null,null,null,null,null,null,null)
D.fIF=new A.B("Show this to sender",null,C.iG,null,null,null,null,null,null,null,null,null)
D.fJF=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fOu=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fOS=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fPT=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fQq=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTj=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fW9=new A.B("Send to their Doc Share",null,C.o0,null,null,null,null,null,null,null,null,null)
D.fWt=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fWO=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fXp=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fXw=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fXV=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h0e=new A.B("Share files & videos\nwith a scan.",null,C.aWe,null,null,null,null,null,null,null,null,null)
D.h0y=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hxW=new B.a_p(null)
D.ad2=new B.adw(0,"docShare")
D.ad3=new B.adw(1,"gate")
D.WP=new B.adw(2,"gateNoIndividual")})();(function staticFields(){$.aPN=null
$.fp1=function(){var x=y.N
return A.T(x,x)}()
$.H8=A.T(y.N,y.D)
$.ahA=A.T(y.N,A.at("lV"))
$.S4=A.T(y.N,y.D)
$.fpN=A.T(y.N,A.at("add"))
$.cez=A.T(y.S,A.at("byf"))
$.hqD=1
$.ifl=null
$.ifk=null
$.i6b=null
$.hf1=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"izu","hIH",()=>new B.cst())
x($,"ixo","hj4",()=>C.a.q(A.bC(A.bC(A.bC(A.HI(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["uAu2AAe8v/WxuO6xJPWU/6rAh34="]=a.current})($__dart_deferred_initializers__);