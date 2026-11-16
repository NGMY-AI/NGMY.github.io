((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={csp:function csp(){},
i_y(d){var x=null,w=new B.b6n(d,D.eAm,new A.pQ(x,x,y.c6),new A.pQ(x,x,y.B))
w.bCf(d)
return w},
b6n:function b6n(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
csk:function csk(d){this.a=d},
csl:function csl(d){this.a=d},
csm:function csm(d){this.a=d},
csj:function csj(d){this.a=d},
csn:function csn(d){this.a=d},
i_z(d,e){var x=y.N
x=new B.b6o(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCg(d,e)
return x},
b6o:function b6o(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
csq:function csq(d){this.a=d},
csr:function csr(d){this.a=d},
css:function css(d){this.a=d},
cst:function cst(d){this.a=d},
csu:function csu(d){this.a=d},
csv:function csv(d){this.a=d},
csw:function csw(d){this.a=d},
csx:function csx(d){this.a=d},
hev(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wZ.GR(x,"ngmy_doc_share_v1",new B.fx4(),1)},
i6j(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eE(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.wS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
Sh(d,e){return B.imo(d,e)},
imo(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sh=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPJ
x=7
return A.b(o==null?$.aPJ=B.hev():o,$async$Sh)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mj(s,"blobs","readwrite")
C.iE.md(J.mi(q,"blobs"),r,d)
x=8
return A.b(J.ow(q),$async$Sh)
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
return A.i($async$Sh,w)},
Sg(d){return B.imn(d)},
imn(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPJ
x=7
return A.b(o==null?$.aPJ=B.hev():o,$async$Sg)
case 7:s=f
r=J.mj(s,"blobs","readonly")
x=8
return A.b(C.iE.xO(J.mi(r,"blobs"),d),$async$Sg)
case 8:q=f
x=9
return A.b(J.ow(r),$async$Sg)
case 9:o=B.i6j(q)
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
return A.i($async$Sg,w)},
aid(d){return B.imm(d)},
imm(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aid=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPJ
x=7
return A.b(p==null?$.aPJ=B.hev():p,$async$aid)
case 7:s=f
r=J.mj(s,"blobs","readwrite")
C.iE.Gn(J.mi(r,"blobs"),d)
x=8
return A.b(J.ow(r),$async$aid)
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
return A.i($async$aid,w)},
fx4:function fx4(){},
i8Z(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brd(w,v))}return u},
hFD(d,e){var x,w={},v=A.aYp("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fWB(w,v,e)
C.x0.za(v,"change",new B.fWD(w,v,!1))
C.x0.za(v,"cancel",new B.fWC(w))
$.eX.mE()
v.click()
A.bO(C.ala,new B.fWA(w),y.H)},
fWB:function fWB(d,e,f){this.a=d
this.b=e
this.c=f},
fWD:function fWD(d,e,f){this.a=d
this.b=e
this.c=f},
fWC:function fWC(d){this.a=d},
fWA:function fWA(d){this.a=d},
DK(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUy()?3:4
break
case 3:x=5
return A.b(B.hAp(e,d,s,!0,!1,f,g,h,!1,i),$async$DK)
case 5:x=1
break
case 4:x=6
return A.b(B.RV(d,s,f,g,h,i),$async$DK)
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
return A.b(B.Jq(s,d),$async$DK)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fsA(s,d),$async$DK)
case 14:x=12
return A.b(r.hAp(q,p,o,n,m,l,k,j,a1,i),$async$DK)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ec(new B.fWQ(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ec(new B.fWR(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DK,w)},
RV(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RV=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b17(e),$async$RV)
case 3:u=k
x=4
return A.b(B.aqO(d,e,!1),$async$RV)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jq(e,d),$async$RV)
case 7:if(k){v=D.acQ
x=1
break}x=8
return A.b(B.Wc(e),$async$RV)
case 8:v=t?D.WI:D.acR
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b15(d,e)){v=D.acQ
x=1
break}x=11
return A.b(B.Wc(e),$async$RV)
case 11:v=t?D.WI:D.acR
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h9p(d,e)){v=D.acQ
x=1
break}x=14
return A.b(B.Wc(e),$async$RV)
case 14:v=D.WI
x=1
break
case 13:v=t?D.WI:D.acR
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RV,w)},
fsA(d,e){var x=0,w=A.j(y.y),v
var $async$fsA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b15(e,d)){v=!1
x=1
break}x=3
return A.b(B.b17(d),$async$fsA)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsA,w)},
hAp(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ec(new B.fzL(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hvl(d,e,f,g,h,i,j){return new B.a_p(e,j,d,g,h,i,f,null)},
fBF(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fBF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fBI(A.P(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fBF)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBF,w)},
fC9(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fC9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fCb(A.P(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fC9)
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
return A.i($async$fC9,w)},
heG(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fP1(d,e){var x=0,w=A.j(y.H),v
var $async$fP1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wc(e),$async$fP1)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fP1,w)},
fWQ:function fWQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWR:function fWR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adt:function adt(d,e){this.a=d
this.b=e},
fzL:function fzL(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_p:function a_p(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBa:function aBa(){this.c=this.a=this.d=null},
dcT:function dcT(d,e){this.a=d
this.b=e},
dcQ:function dcQ(d){this.a=d},
dcS:function dcS(d){this.a=d},
dcR:function dcR(d){this.a=d},
dcV:function dcV(){},
dcU:function dcU(d){this.a=d},
adX:function adX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDO:function aDO(d,e){this.a=d
this.b=e},
aGW:function aGW(d,e,f){this.a=d
this.b=e
this.c=f},
fBI:function fBI(d,e,f){this.a=d
this.b=e
this.c=f},
fBG:function fBG(d){this.a=d},
fBH:function fBH(d,e,f){this.a=d
this.b=e
this.c=f},
fCb:function fCb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCa:function fCa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ce6(d,e,f,g,h){return B.hVp(d,e,f,g,h)},
hVp(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ce6=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dM(d,new B.ce7(s,e,h,g,f,q),y.g),y.l),$async$ce6)
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
return A.i($async$ce6,w)},
b12(d,e,f,g,h){return B.hVq(d,e,f,g,h)},
hVq(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b12=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awj("GET",d)
o=A.h5P()
if(o==null)o=new A.MH(A.a([],y.W))
x=7
return A.b(o.fa(0,s).dg(0,C.GG),$async$b12)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CU(),$async$b12)
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
return A.i($async$b12,w)},
b11(d){return B.hVn(d)},
hVn(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b11=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dg(0,C.oq),$async$b11)
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
return A.i($async$b11,w)},
ce5(d){return B.hVo(d)},
hVo(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ce5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dg(0,C.qB),$async$ce5)
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
return A.i($async$ce5,w)},
ce7:function ce7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jE:function jE(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jo(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hVv(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jo(C.a.b2(t,u.length))}return null},
hVw(d){var x=B.Jo(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hVr(){var x,w=$.ot(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a81(d){return B.hVs(d)},
hVs(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a81=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bO),$async$a81)
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
return A.i($async$a81,w)},
a82(d,e){return B.hVt(d,e)},
hVt(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a82=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cP,null),$async$a82)
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
return A.i($async$a82,w)},
Ck(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ck=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Ck)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jo(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a83(r),$async$Ck)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a81("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ck)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jo(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ck)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hVr()
x=14
return A.b(B.a83(m),$async$Ck)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a82("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 15:k=f
x=16
return A.b(B.a82("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
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
a83(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a83=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jo(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a81("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a83)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a83,w)},
a84(d,e,f,g){return B.hVx(d,e,f,g)},
hVx(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a84=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jo(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a83(r),$async$a84)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.ced())>1048576||g.aV(d,new B.cee())){v=B.Fl(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8f("myCode",d,a0),$async$a84)
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
v=B.Fl(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1a(u,g.gJ(d),a0),$async$a84)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ot().az(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dM(d,new B.cef(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b13(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a84)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a84,w)},
Fl(d,e,f,g,h){return B.hVu(d,e,f,g,h)},
hVu(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fl=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cF(a6,0,new B.ce9())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ot().az(9999)
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
a1=B.Js(a9,q)
a0=new A.Lg(a1)
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
a4.u(0,a1.b)
x=12
return A.b(new A.abI(a1.a,a4,"media",a1.d,a2).xL(m,n,new A.Ez(!0,q.c)),$async$Fl)
case 12:J.c5(r,m);++o
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
return A.b(B.aSl(r),$async$Fl)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dM(a6,new B.cea(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b13(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fl)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSl(r),$async$Fl)
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
b13(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b13=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a81(t),$async$b13)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.ce8(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a82(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b13,w)},
Oj(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oj=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a81("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oj)
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
return A.b(B.b14(k,a0),$async$Oj)
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
return A.b(B.b19(h),$async$Oj)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wj(g,a0),$async$Oj)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.ceb(),q),n)
d=A.C(new A.Y(r,new B.cec(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cX(d,0,A.dB(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a82("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oj)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
b14(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b14=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iqj(k,j)
C.d.u(s,i)
x=5
return A.b(B.DI(l,m,"Received via My Code",t,e,i),$async$b14)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSl(s),$async$b14)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b14,w)},
ced:function ced(){},
cee:function cee(){},
cef:function cef(){},
ce9:function ce9(){},
cea:function cea(){},
ce8:function ce8(){},
ceb:function ceb(){},
cec:function cec(){},
fWN(d,e){var x=0,w=A.j(y.H)
var $async$fWN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ec(new B.fWO(e),!1,null,y.H)),$async$fWN)
case 2:return A.h(null,w)}})
return A.i($async$fWN,w)},
bGf(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGf=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ec(new B.fWP(g,e,f),!1,null,y.y)),$async$bGf)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGf,w)},
fWO:function fWO(d){this.a=d},
fWP:function fWP(d,e,f){this.a=d
this.b=e
this.c=f},
W9:function W9(d,e){this.c=d
this.a=e},
aF9:function aF9(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dZu:function dZu(d,e){this.a=d
this.b=e},
Wd:function Wd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFc:function aFc(d,e){var _=this
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
blj:function blj(){},
Wa:function Wa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFa:function aFa(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZv:function dZv(d){this.a=d},
dZw:function dZw(d){this.a=d},
h9q(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hVz(d){var x=d.l4
if(x>=0)return x
return 4.99},
hVy(d){var x=d.m6,w=y.N
w=x.jr(x,new B.ceh(),w,w)
return w},
hqm(d){var x=d.l5,w=y.N
w=x.jr(x,new B.cei(),w,w)
return w},
b17(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b17=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b17)
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
return A.i($async$b17,w)},
a86(d,e){var x=0,w=A.j(y.H),v,u
var $async$a86=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a86)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a86)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a86,w)},
Wc(d){var x=0,w=A.j(y.H),v,u
var $async$Wc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wc)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wc)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wc,w)},
h9p(d,e){var x,w,v
if(B.hVz(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hVy(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b15(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hqm(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hqn(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hqm(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
aqP(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqP)
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
return A.i($async$aqP,w)},
aqQ(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqP(d),$async$aqQ)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqQ)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqQ,w)},
aqO(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h9q(d)
if(u<=0){v=!1
x=1
break}if(B.h9p(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqP(e),$async$aqO)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqO,w)},
b16(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b16=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jq(e,d),$async$b16)
case 3:if(g){v=-1
x=1
break}u=B.h9q(d)
if(u<=0){v=-1
x=1
break}if(B.h9p(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqP(e),$async$b16)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b16,w)},
cek(d,e,f){var x=0,w=A.j(y.y),v
var $async$cek=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jq(e,d),$async$cek)
case 3:if(h){v=!1
x=1
break}v=B.aqO(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cek,w)},
cej(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cej=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cek(d,u,i.gUy()),$async$cej)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cej,w)},
a85(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a85=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUy()){v=!0
x=1
break}if(B.b15(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.TY),$async$a85)
case 5:x=k?3:4
break
case 3:B.hqn(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a85)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.le(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TY,"Doc Share for Organizations"),$async$a85)
case 7:if(!k){v=!1
x=1
break}B.hqn(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a85)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a85,w)},
ceh:function ceh(){},
cei:function cei(){},
fXG(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fXG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fXG)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.foY.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.foY.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXG,w)},
itb(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.foY.bq($.foY,new B.fXI(d))},
fXI:function fXI(d){this.a=d},
fqy(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fqy=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bO(C.jp,null,y.H),$async$fqy)
case 3:C.Bj.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mE()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqy,w)},
ah6(d,e,f){var x=0,w=A.j(y.H),v
var $async$ah6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fpC.n(0,d,new B.ada(A.bq(e,!0,v)))
x=3
return A.b(A.aA(),$async$ah6)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.X.aw(A.I(["parts",e,"size",f],v,y.C),null)),$async$ah6)
case 2:return A.h(null,w)}})
return A.i($async$ah6,w)},
ah0(d){return B.iaZ(d)},
iaZ(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fpC.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah0)
case 3:u=j.aU(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b7(s,new B.fu9(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.ada(r)
$.fpC.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah0,w)},
RL(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sh(d,u),$async$RL)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
aQ5(d){return B.iaX(d)},
iaX(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQ5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sg(d),$async$aQ5)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQ5)
case 4:s=f
r=A.aU(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aO(r)
x=!J.ct(q)?9:10
break
case 9:B.RL(d,q)
x=11
return A.b(J.ha(s,d),$async$aQ5)
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
return A.i($async$aQ5,w)},
i6M(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.ce(J.eE(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.ce(A.wS(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.ce(d)),y.K)
return A.f3(null,y.K)},
a2U(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fzX(r,t),!1,s)
A.fB(r,"error",new B.fzY(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.NX,new B.fzZ())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2U,w)},
aQp(d,e,f){return B.idl(d,e,f)},
idl(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQp=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2U(i),$async$aQp)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sh(o,p),$async$aQp)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ah6(k,j,s),$async$aQp)
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
return A.i($async$aQp,w)},
aQo(d,e,f){return B.idk(d,e,f)},
idk(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQo=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQp(d,e,f),$async$aQo)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2U(f),$async$aQo)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S1.n(0,s,r)
x=11
return A.b(B.RL(s,r),$async$aQo)
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
return A.i($async$aQo,w)},
Cl(d,e,f,g,h,i){return B.hVI(d,e,f,g,h,i)},
hVI(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jE(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1d(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RL(s,d),$async$Cl)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cl)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cU.gcu().aO(d)),$async$Cl)
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
return A.b(B.Bj(e),$async$Cl)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hg(e,j),$async$Cl)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cl,w)},
We(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$We=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bj(d),$async$We)
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
k=B.hqp(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jE(m,n,k,l,j,"From folder",null,B.b1d(),null)
$.ahx.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2U(o),$async$We)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S1.n(0,h,g)
B.RL(h,g)
x=9
break
case 10:x=11
return A.b(B.aQo(d,m,o),$async$We)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$We)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$We,w)},
h9u(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h9u=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hqp(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jr(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cl(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9u,w)},
Jr(d,e,f,g,h,i){return B.hVH(d,e,f,g,h,i)},
hVH(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jr=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lg(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jr)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.ct(m)){x=6
break}J.fX(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.SP(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kK(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sh(k,l),$async$Jr)
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
return A.b(j.a1(0),$async$Jr)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sh(k,new Uint8Array(A.ce(n))),$async$Jr)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ah6(r,q,g),$async$Jr)
case 16:f=new B.jE(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1d(),null)
x=17
return A.b(B.Bj(d),$async$Jr)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hg(d,e),$async$Jr)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jr,w)},
Wg(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wg=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahx.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2U(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah0(s),$async$Wg)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sg(u[o]),$async$Wg)
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
case 5:i=$.S1.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rV(d,e),$async$Wg)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S1.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
hqp(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rV(d,e){return B.hVJ(d,e)},
hVJ(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rV=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S1.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahx.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2U(s),$async$rV)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S1.n(0,f,r)
B.RL(f,r)
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
return A.b(B.ah0(f),$async$rV)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azY(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sg(g[l]),$async$rV)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apY()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S1.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQ5(f),$async$rV)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S1.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wg(a0,a1,0,g),$async$rV)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.ce(i))
$.H6.n(0,f,h)
$.S1.n(0,f,h)
B.RL(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rV,w)},
hVM(d){var x,w,v=$.ahx.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hVN(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hVK(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqW(d,e,f,g,h){return B.hVL(d,e,f,g,h)},
hVL(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqW=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahx.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2U(s),$async$aqW)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rV(g,e),$async$aqW)
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
return A.b(n.iB(d).xL(h,r,new A.Ez(!0,e.c)),$async$aqW)
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
return A.i($async$aqW,w)},
hqr(d,e,f,g,h){var x,w,v,u,t=$.hqq
$.hqq=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cev.n(0,t,new B.byb(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azY(u)))
return t},
h9v(d){var x=0,w=A.j(y.H)
var $async$h9v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9v,w)},
Js(d,e){var $async$Js=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahx.h(0,h)
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
return A.qv(B.Wg(d,e,p,o<q?o:q),$async$Js,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qv(A.GE(n),$async$Js,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qv(B.ah0("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Js,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qv(B.Sg(h[l]),$async$Js,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qv(A.GE(k),$async$Js,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qv(B.rV(d,e),$async$Js,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qv(A.GE(A.wS(j,p,o<i?o:i)),$async$Js,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qv(null,0,w)
case 2:return A.qv(t.at(-1),1,w)}})
var x=0,w=A.hzh($async$Js,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hB5(w)},
b1f(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cev.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5J(),$async$b1f)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1f,w)},
Wf(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cev.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5J(),$async$Wf)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ah6(r.c,u,r.z),$async$Wf)
case 4:t=new B.jE(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1d(),null)
u=r.a
x=5
return A.b(B.Bj(u),$async$Wf)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hg(u,s),$async$Wf)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
a8c(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cev.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aid(u[s]),$async$a8c)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8c,w)},
cex(d,e,f){var x=0,w=A.j(y.H)
var $async$cex=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDe(d,e,f),$async$cex)
case 2:return A.h(null,w)}})
return A.i($async$cex,w)},
cey(d,e,f){var x=0,w=A.j(y.H)
var $async$cey=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDf(d,e,f),$async$cey)
case 2:return A.h(null,w)}})
return A.i($async$cey,w)},
Fm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bj(d),$async$Fm)
case 2:p=g
J.nT(p,new B.cew(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahx.W(0,e)
x=3
return A.b(B.ah0(v),$async$Fm)
case 3:u=g
$.fpC.W(0,v)
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
return A.b(B.aid(s[q]),$async$Fm)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aid(v),$async$Fm)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fm)
case 14:return A.h(null,w)}})
return A.i($async$Fm,w)},
b1e(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rV(d,e),$async$b1e)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fqy(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1e,w)},
Bj(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bj)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fA_(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bj,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fEc(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.X.aw(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bDe(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDe=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bDe)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fya(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG4(f))
x=4
return A.b(B.Hg(d,u),$async$bDe)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDe,w)},
bDf(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bDf)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fyb(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOz(f))
x=4
return A.b(B.Hg(d,u),$async$bDf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDf,w)},
ada:function ada(d){this.a=d},
fu9:function fu9(){},
fzX:function fzX(d,e){this.a=d
this.b=e},
fzY:function fzY(d){this.a=d},
fzZ:function fzZ(){},
cew:function cew(d){this.a=d},
byb:function byb(d,e,f,g,h,i,j,k,l){var _=this
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
fA_:function fA_(){},
fEc:function fEc(){},
fya:function fya(d){this.a=d},
fyb:function fyb(d){this.a=d},
a8d(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.ceB())?3:4
break
case 3:x=5
return A.b(B.b1g(d,e),$async$a8d)
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
return A.b(B.b1b(s),$async$a8d)
case 10:case 9:if(g){v=new A.R7(1,D.TB,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wh(d,e),$async$a8d)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wm(!0,!0,d,e),$async$a8d)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ol(d,D.Al,e,t)
v=new A.R7(p,D.Al,t)
x=1
break}v=B.ceA(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
Wh(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8f(null,d,e),$async$Wh)
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
return A.b(B.b1a(p,d.length,e),$async$Wh)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cey(e,C.d.gH(d).a,r.b),$async$Wh)
case 7:case 6:q=r.a
x=8
return A.b(B.Ol(d,D.TB,e,q),$async$Wh)
case 8:v=new A.R7(d.length,D.TB,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
Wi(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mL(D.na)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8e(d,e),$async$Wi)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cet(s,d,e,t),$async$Wi)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1b(t),$async$Wi)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rV(e,d),$async$Wi)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wh(A.a([d],y.r),e),$async$Wi)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wi,w)},
Wk(){var x=0,w=A.j(y.H)
var $async$Wk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h9o(),$async$Wk)
case 2:x=3
return A.b(B.aSH(),$async$Wk)
case 3:return A.h(null,w)}})
return A.i($async$Wk,w)},
a8e(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1d()
x=3
return A.b(B.cex(e,d.a,u),$async$a8e)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
Ol(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ol=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.TB&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8e(p,f),$async$Ol)
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
return A.b(B.ces(o,p,u,f),$async$Ol)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cet(o,p,f,t),$async$Ol)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cer(o,u,p,f),$async$Ol)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ol,w)},
b1g(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cez(e,d),$async$b1g)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wm(!1,!0,d,e),$async$b1g)
case 4:u=g
if(u!=null){t=u.b
v=new A.R7(u.a,D.Al,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1g,w)},
cez(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cez=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wg(d,s,0,1),$async$cez)
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
return A.i($async$cez,w)},
ceA(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ceA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8f(null,d,e),$async$ceA)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hqo(u)
if(t.length>800){v=null
x=1
break}v=new A.R7(d.length,D.dQJ,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceA,w)},
aqX(d,e,f){return B.hVQ(d,e,f)},
hVQ(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h9t(g)?3:4
break
case 3:x=5
return A.b(B.ceu(g),$async$aqX)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fn(d,a0,s)
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
return A.b(B.b19(q),$async$aqX)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wj(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h9s(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wj(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jt(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jt(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Jt(h,d,a0)
x=1
break}if(J.eI(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wj(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqX,w)},
Jt(d,e,f){return B.hVO(d,e,f)},
hVO(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jt=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.b11(r),$async$Jt)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b11(A.cC(s,0,null)),$async$Jt)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ce6(o,r,a1,n,a2),$async$Jt)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ce5(q),$async$Jt)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wj(l,a2),$async$Jt)
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
return A.i($async$Jt,w)},
a8f(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8f=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rV(f,r),$async$a8f)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cU.gcu().aO(q)],t,s))
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
return A.i($async$a8f,w)},
Wj(d,e){return B.hVP(d,e)},
hVP(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wj=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.Cl(i,a3,d,k,l,o),$async$Wj)
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
return A.i($async$Wj,w)},
Ok:function Ok(d,e){this.a=d
this.b=e},
ceB:function ceB(){},
a2t(d){var x=A.P(d).ax.a===C.H,w=x?D.air:D.afY,v=x?D.akd:C.c,u=x?C.aS:C.a_,t=x?C.bN:C.an,s=x?D.ahp:C.bi
return new A.aIb([w,s,v,u,t,x?C.fr:C.bQ])},
hGu(d,e){var x=e?C.w.j(0.72):C.b6
return A.cf(null,x,!0,null,new B.h0Y(e),d,null,!0,!0,y.N)},
ceg(d,e,f,g,h,i,j,k,l){return new B.Wb(e,l,d,f,k,j,g,h,i,null)},
a_r(d,e,f,g,h,i,j){return new B.bfS(g,h,j,e,i,d,f,null)},
h0Y:function h0Y(d){this.a=d},
a_o:function a_o(d,e){this.c=d
this.a=e},
aB9:function aB9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcP:function dcP(d){this.a=d},
dcN:function dcN(d){this.a=d},
dcO:function dcO(d){this.a=d},
bxO:function bxO(){},
Wb:function Wb(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFb:function aFb(d,e){var _=this
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
aB6:function aB6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfR:function bfR(d,e,f){this.c=d
this.d=e
this.a=f},
dcL:function dcL(){},
dcM:function dcM(){},
adu:function adu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dd8:function dd8(){},
dd7:function dd7(d){this.a=d},
a_q:function a_q(d,e,f){this.c=d
this.d=e
this.a=f},
aBb:function aBb(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dd4:function dd4(d){this.a=d},
dd5:function dd5(d,e,f){this.a=d
this.b=e
this.c=f},
dd6:function dd6(d,e){this.a=d
this.b=e},
dd2:function dd2(d,e){this.a=d
this.b=e},
dd0:function dd0(d){this.a=d},
dcZ:function dcZ(d){this.a=d},
dcW:function dcW(d){this.a=d},
dd1:function dd1(d){this.a=d},
dcY:function dcY(d){this.a=d},
dd3:function dd3(d){this.a=d},
dd_:function dd_(d){this.a=d},
dcX:function dcX(d){this.a=d},
a_n:function a_n(d,e,f){this.c=d
this.d=e
this.a=f},
aB8:function aB8(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcI:function dcI(d){this.a=d},
dcH:function dcH(d,e){this.a=d
this.b=e},
dcJ:function dcJ(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcK:function dcK(d){this.a=d},
dcF:function dcF(d,e){this.a=d
this.b=e},
dcB:function dcB(d){this.a=d},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d,e){this.a=d
this.b=e},
dcE:function dcE(d){this.a=d},
QG:function QG(d,e,f){this.c=d
this.d=e
this.a=f},
aBe:function aBe(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddl:function ddl(d){this.a=d},
ddm:function ddm(d){this.a=d},
ddn:function ddn(d){this.a=d},
ddo:function ddo(d){this.a=d},
ddp:function ddp(d,e){this.a=d
this.b=e},
ddq:function ddq(d){this.a=d},
dds:function dds(d){this.a=d},
ddr:function ddr(d){this.a=d},
a_s:function a_s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBc:function aBc(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddh:function ddh(d,e){this.a=d
this.b=e},
ddi:function ddi(d,e){this.a=d
this.b=e},
dd9:function dd9(d,e,f){this.a=d
this.b=e
this.c=f},
dda:function dda(d){this.a=d},
ddb:function ddb(){},
ddg:function ddg(){},
ddc:function ddc(d,e){this.a=d
this.b=e},
ddd:function ddd(d,e){this.a=d
this.b=e},
dde:function dde(d,e){this.a=d
this.b=e},
ddf:function ddf(d,e){this.a=d
this.b=e},
ads:function ads(d,e){this.c=d
this.a=e},
dcA:function dcA(d){this.a=d},
a_m:function a_m(d){this.a=d},
aB7:function aB7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_t:function a_t(d,e){this.c=d
this.a=e},
aBd:function aBd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddk:function ddk(d){this.a=d},
ddj:function ddj(d){this.a=d},
bfS:function bfS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hVR(){var x,w=$.ot(),v=J.e4(10,y.N)
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
return A.i($async$Om,w)},
a8g(d){return B.hVS(d)},
hVS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8g)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$a8g)
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
return A.i($async$a8g,w)},
Wl(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(),$async$Wl)
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
return A.b(B.a8g(s),$async$Wl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
Wm(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wm)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceD(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hVR()
t=A.U(u).k("N<1,a9<n,aE>>")
r=A.C(new A.N(u,new B.ceE(s),t),t.k("ak.E"))
x=6
return A.b(B.Om(),$async$Wm)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8g(q),$async$Wm)
case 7:x=8
return A.b(B.a8h(r,u,g,s),$async$Wm)
case 8:v=new A.brI(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wm,w)},
aqY(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Om(),$async$aqY)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqY,w)},
ceF(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Om(),$async$ceF)
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
return A.i($async$ceF,w)},
a8h(d,e,f,g){return B.hVT(d,e,f,g)},
hVT(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8h=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqW("media",r,new B.ceC(s,e,g),f,q),$async$a8h)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wl(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8h)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wl(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8h)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wl(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8h)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8h,w)},
Fn(d,e,f){return B.hVU(d,e,f)},
hVU(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.aqY(b3),$async$Fn)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iP,null,g),$async$Fn)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqY(b3),$async$Fn)
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pn(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abI(a8.a,b0,"media",a8.d,a9).Df(m)
k=A.cC(l,0,null)
x=17
return A.b(B.b12(k,n,o,s,b7),$async$Fn)
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pn(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abI(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fn)
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
return A.b(B.a8g(e),$async$Fn)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fn,w)},
ceD:function ceD(){},
ceE:function ceE(d){this.a=d},
ceC:function ceC(d,e,f){this.a=d
this.b=e
this.c=f},
aSH(){var x=0,w=A.j(y.H),v,u
var $async$aSH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i5Z=null
v=y.H
u=A.dM(null,v)
x=2
return A.b(u,$async$aSH)
case 2:u=A.dM(null,v)
x=3
return A.b(u,$async$aSH)
case 3:u=$.heT
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dM(u,v),$async$aSH)
case 4:$.heT=$.if7=$.if8=null
return A.h(null,w)}})
return A.i($async$aSH,w)},
fDO(d){var x=0,w=A.j(y.H),v,u
var $async$fDO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9w){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fDP(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.ii,new B.fDQ()),$async$fDO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fDO,w)},
if5(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hVB(x):x},
heX(d){var x=0,w=A.j(y.T),v,u,t
var $async$heX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.ar_(u)
x=1
break}v=B.h9s(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$heX,w)},
heW(d){var x=0,w=A.j(y.T),v,u,t
var $async$heW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.ar0(u)
x=1
break}v=B.h9s(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$heW,w)},
fXp(d){var x=0,w=A.j(y.T),v
var $async$fXp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar0(d),$async$fXp)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXp,w)},
bE7(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bE7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.heW(d),$async$bE7)
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
return A.i($async$bE7,w)},
frp(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$frp=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wf(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cl(d.apY(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frp,w)},
Hi(d,e,f){return B.ihz(d,e,f)},
ihz(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.heX(a1),$async$Hi)
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
return A.b($.hIu().aGl(D.dED,null),$async$Hi)
case 4:l=d.heT=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azY(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fEp(f,k,new B.fEq(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8M(0,new B.Yu(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amo(0),$async$Hi)
case 7:x=6
return A.b(d.a8E(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fDO(l),$async$Hi)
case 8:x=9
return A.b(l.aqK(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.if5(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aw(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ar1(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hqo(h)
case 11:v=new A.bqY(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fDP:function fDP(d){this.a=d},
fDQ:function fDQ(){},
fEq:function fEq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEp:function fEp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEo:function fEo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ijE(d){switch(d){case"new":return D.eAn
case"checking":return D.eAo
case"connected":return D.eAq
case"completed":return D.eAp
case"failed":return D.eAs
case"disconnected":return D.eAt
case"closed":return D.aRh
case"count":return D.eAr}return D.aRh},
ijF(d){switch(d){case"new":return D.aRi
case"gathering":return D.eAu
case"complete":return D.a9w}return D.aRi},
iuK(d){switch(d){case"stable":return D.eAv
case"have-local-offer":return D.eAw
case"have-local-pranswer":return D.eAy
case"have-remote-offer":return D.eAx
case"have-remote-pranswer":return D.eAz
case"closed":return D.aRo}return D.aRo},
isT(d){switch(d){case"new":return D.aRl
case"connecting":return D.aRm
case"connected":return D.aRn
case"closed":return D.a9x
case"disconnected":return D.aRk
case"failed":return D.aRj}return D.a9x},
aaE:function aaE(d,e){this.a=d
this.b=e},
Pq:function Pq(d,e){this.a=d
this.b=e},
Yt:function Yt(d,e){this.a=d
this.b=e},
Pp:function Pp(d,e){this.a=d
this.b=e},
FR:function FR(d,e){this.a=d
this.b=e},
cso:function cso(){},
hbd(d){var x=new B.FQ()
x.a=d
x.b=!0
return x},
FQ:function FQ(){this.b=this.a=$},
aaD:function aaD(){},
avu:function avu(){},
Yu:function Yu(d,e){this.a=d
this.b=e},
h9o(){var x=0,w=A.j(y.H)
var $async$h9o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9o,w)},
h9r(d,e,f){var x=0,w=A.j(y.T),v
var $async$h9r=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mL(D.na))){v=null
x=1
break}v=B.fXG(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9r,w)},
hqo(d){var x,w=F.afn.a5s(C.dW.aO(d),null)
if(w.length===0){x=C.dW.aO(d)
return C.cU.gcu().aO(x)}return C.cU.gcu().aO(w)},
hVA(d){var x,w,v=C.cM.aO(d)
try{x=C.ca.cJ(0,F.afm.bg_(v,!1))
return x}catch(w){x=C.ca.cJ(0,v)
return x}},
h9s(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hVA(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cJ(0,C.cM.aO(x))
return v}catch(u){return x}}return null},
hVB(d){var x,w,v,u,t,s=A.a([],y.s)
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
hVC(){var x,w=$.ot(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b18(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b18=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bO),$async$b18)
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
return A.i($async$b18,w)},
cel(d,e){return B.hVD(d,e)},
hVD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cel=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cP,null),$async$cel)
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
return A.i($async$cel,w)},
b1b(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b18(d),$async$b1b)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1b,w)},
b1a(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hVC()
r=C.a.i(f)
t=C.dW.aO(s)
x=3
return A.b(B.cel(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cU.gcu().aO(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1a)
case 3:if(!h){v=null
x=1
break}v=new A.a1t("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1a,w)},
b19(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b19=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b18(o),$async$b19)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cJ(0,C.cM.aO(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b19,w)},
cem(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cem=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bF4("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cP),$async$cem)
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
return A.i($async$cem,w)},
b1c(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jp(),$async$b1c)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1c,w)},
aqT(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqT)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1c(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqT,w)},
aqR(d,e){var x=0,w=A.j(y.H)
var $async$aqR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqR)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqR)
case 2:return A.h(null,w)}})
return A.i($async$aqR,w)},
a88(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a88=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a88)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a88)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dp(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a87(s),$async$a88)
case 5:x=6
return A.b(B.aqR(f,u),$async$a88)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
a89(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a89=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a89)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a89)
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
return A.b(B.aqR(g,q),$async$a89)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a87(u),$async$a89)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
a8a(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8a=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8a)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jp(),$async$a8a)
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
s=B.b15(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8a)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.X.aw(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8a)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
cen(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cen=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cen)
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
return A.i($async$cen,w)},
Jq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cen(d),$async$Jq)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1c(t),$async$Jq)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqS(d),$async$Jq)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b15(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqS(d),$async$Jq)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
aqS(d){var x=0,w=A.j(y.H)
var $async$aqS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqS)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqS)
case 2:return A.h(null,w)}})
return A.i($async$aqS,w)},
b1d(){var x,w=$.ot(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a8b(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h9t(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ceq(d){return B.hVF(d)},
hVF(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ceq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8b(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bO),$async$ceq)
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
return A.i($async$ceq,w)},
aqV(d,e){return B.hVG(d,e)},
hVG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8b(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cP,null),$async$aqV)
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
return A.i($async$aqV,w)},
ces(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ces=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8b(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqV(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ces)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ces,w)},
cer(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cer=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8b(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqV(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cer)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cer,w)},
cet(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cet=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8b(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqV(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cet,w)},
ceu(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ceu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h9t(d)){v=null
x=1
break}x=3
return A.b(B.ceq(d),$async$ceu)
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
return A.i($async$ceu,w)},
a8i(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8i)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bO),$async$a8i)
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
return A.i($async$a8i,w)},
aqZ(d){return B.hVV(d)},
hVV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$aqZ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$aqZ)
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
return A.i($async$aqZ,w)},
ar_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ar_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar_)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8i(),$async$ar_)
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
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dJ(A.a2(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqZ(s),$async$ar_)
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
return A.i($async$ar_,w)},
ar1(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ar1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$ar1)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8i(),$async$ar1)
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
return A.b(B.aqZ(u),$async$ar1)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar1,w)},
ar0(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ar0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar0)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8i(),$async$ar0)
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
return A.i($async$ar0,w)},
apS(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.ql)){v=null
x=1
break}x=3
return A.b(p.mg(e),$async$apS)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.ho),$async$apS)
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
return A.i($async$apS,w)},
iqj(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.v(w),5,"0")
return v},
fVH(d){return B.iql(d)},
iql(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fVH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Ls(d,3600),$async$fVH)
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
return A.i($async$fVH,w)},
DI(d,e,f,g,h,i){var x=null
return B.iqi(d,e,f,g,h,i)},
iqi(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DI=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hqr(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h9v(r),$async$DI)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fVH(o),$async$DI)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8c(r),$async$DI)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aUT)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MH(A.a([],g))
x=15
return A.b(d.fa(0,A.awj("GET",A.cC(n,0,null))).dg(0,C.GG),$async$DI)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8c(r),$async$DI)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lg(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DI)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1f(r,k),$async$DI)
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
case 10:i=B.Wf(r)
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
return A.b(B.a8c(r),$async$DI)
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
aSl(d){return B.iqk(d)},
iqk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aSl)
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
return A.i($async$aSl,w)}},D,T,M,U,V,W,X,N,Y
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
B.csp.prototype={
aGl(d,e){return this.cQ3(d,e)},
cQ3(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dJ(r,s,t)
t.u(0,d)
u=new q(A.kj(A.cv(t)))
t=J.k(u)
v=B.i_z(C.cU.gcu().aO(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGl,w)}}
B.b6n.prototype={
bCf(d){var x=this,w=x.w
w.onclose=A.hr(new B.csk(x))
w.onopen=A.hr(new B.csl(x))
w.onmessage=A.hr(new B.csm(x))
w.onbufferedamountlow=A.hr(new B.csn(x))},
gd6(d){return this.x},
aiB(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hbd(J.eT(d))
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
case 8:v=t.hbd(s.ap1(f,0,null))
x=1
break
case 7:case 4:v=B.hbd(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiB,w)}}
B.b6o.prototype={
bCg(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hr(new B.csq(x)))
w.addEventListener("icecandidate",A.hr(new B.csr(x)))
w.addEventListener("iceconnectionstatechange",A.hr(new B.css(x)))
w.onicegatheringstatechange=A.hr(new B.cst(x))
w.addEventListener("signalingstatechange",A.hr(new B.csu(x)))
if(!$.hiT())w.addEventListener("connectionstatechange",A.hr(new B.csv(x)))
w.addEventListener("negotiationneeded",A.hr(new B.csw(x)))
w.addEventListener("track",A.hr(new B.csx(x)))},
amo(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kj(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amo)
case 3:t=f
v=new B.Yu(t.sdp,t.type)
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
v=new B.Yu(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqK,w)},
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
B.adt.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_p.prototype={
S(){return new B.aBa()},
gd1(){return this.c}}
B.aBa.prototype={
Y(){this.a4()
this.afa()},
afa(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b16(u.e,u.c),$async$afa)
case 2:t=e
if(v.c!=null)v.m(new B.dcT(v,t))
return A.h(null,w)}})
return A.i($async$afa,w)},
QY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqO(t.e,t.c,!1),$async$QY)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.flz)
x=1
break}x=4
return A.b(B.a86(u.a.c,"individual"),$async$QY)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a71(A.ec(new B.dcQ(u),!1,null,y.H)),$async$QY)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QY,w)},
JO(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fBF(o),$async$JO)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8a(o.e,r,s,q),$async$JO)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fiy)
x=1
break}x=5
return A.b(B.a86(u.a.c,"member"),$async$JO)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a71(A.ec(new B.dcS(u),!1,null,y.H)),$async$JO)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JO,w)},
yH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a85(t.e,o,t.f,t.r,t.w,s),$async$yH)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a86(u.a.c,"org_owner"),$async$yH)
case 4:x=5
return A.b(B.aqT(u.a.c),$async$yH)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fC9(o),$async$yH)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a88(s,t,o,q.c),$async$yH)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fiu)
x=1
break}x=10
return A.b(B.aqT(u.a.c),$async$yH)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a71(A.ec(new B.dcR(u),!1,null,y.H)),$async$yH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yH,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H,q=r?C.nC:C.qo,p=B.h9q(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dN,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aF.j(0.35),C.h1,24)],y.V)
u=y.p
v=A.q(s,A.x(A.a([A.q(s,D.fFM,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hg,s,s,s),C.aB,D.fZN,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.caj,C.n),s,s,s,s,C.ey,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m_(new B.dcV(),s),C.T,v,C.e3,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.ae)
if(!t.a.x)C.d.u(w,A.a([new B.adX(C.f0,C.aDP,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcjd(),s),C.ae],u))
w.push(new B.adX(C.pv,C.a5c,"Team Member","Sign in with your organization access code + password",t.gck4(),s))
w.push(C.ae)
w.push(new B.adX(C.apM,C.a6P,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjA(),s))
return A.c4(s,q,A.bm(!0,A.cb(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.adX.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aH(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eA(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mD,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zf,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDO.prototype={}
B.aGW.prototype={}
B.jE.prototype={
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
return new B.jE(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOz(d){return this.bft(null,d)},
aG4(d){return this.bft(d,null)}}
B.W9.prototype={
S(){return new B.aF9(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aF9.prototype={
Y(){this.a4()
this.afb()},
afb(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ck(u.a.c),$async$afb)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dZu(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afb,w)},
afc(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fF(new A.fw(s)),$async$afc)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fmu)
case 1:return A.h(v,w)}})
return A.i($async$afc,w)},
a_D(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apS(s.d,4),$async$a_D)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_my_code_"+m+".png"),$async$a_D)
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
return A.b(A.abh("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aj2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aj2,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.H,n=o?C.nC:C.qo,m=o?C.c:C.a_,l=A.eP(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.q(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,K.a5E,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.amo,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aF.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.ng,w,C.l4,new A.eo(A.q(p,A.qd(p,p,!1,B.hVw(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l4,A.A(A.a([A.E(A.en(N.Dg,C.W4,q.gcbF(),p),1),C.au,A.E(A.dh(C.zG,p,C.abO,q.gcbG(),A.bo(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.W,new A.a5(1/0,p,A.en(M.a3X,D.fVm,q.gcyT(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.amW,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wd.prototype={
S(){return new B.aFc(new A.au(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aFc.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jo(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
a_E(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jo(u.d.a.a)
if(t==null){u.m(new B.e_D(u))
x=1
break}u.m(new B.e_E(u))
s=u.a
r=s.c
x=3
return A.b(B.a84(s.d,new B.e_F(u),t,r),$async$a_E)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_G(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_E,w)},
a2T(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2T=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e_H(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.rV(r.a.c,q),$async$a2T)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_I(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiX(p,m,l,j,k),$async$a2T)
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
return A.i($async$a2T,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.H,i=j?D.air:D.afY,h=j?D.akd:C.c,g=j?C.aS:C.a_,f=j?C.bN:C.an,e=j?D.ahp:C.bi
i=[i,e,h,g,f,j?C.fr:C.bQ]
x=A.P(d).ax.a===C.H
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eP(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.q(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.q(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bYt,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a8(C.aA,C.aE,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,K.a5E,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uY(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blj()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.Oh,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aF,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_M(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.L(i[1],C.r,1)
m=J.Ml(l.a.d,4)
m=A.C(new A.N(m,new B.e_N(x,new A.aIb(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.li,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bA,s,C.T,e,C.T,q,C.dc,p,C.T,A.q(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eH,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.l(14)
s=A.L(C.aF.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fh1)
else q.push(A.X(C.lP,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b_,new A.o(u,k,s,t,k,k,C.n),C.iO,k,k,k,k,C.f_,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bG_,k,k,C.ah),1)
u=l.f?k:l.gcyU()
t=i[3]
s=i[1]
q=A.l(16)
s=A.en(M.a3X,D.fWt,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbH()
t=A.bo(C.aF,k,k,0,C.c,k,C.nH,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lC(new B.e_O(),A.x(A.a([e,new A.D(D.bFu,A.x(A.a([s,C.T,i,C.ae,A.bJ(l.f?C.tL:D.fUI,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cw,C.a0a,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blj.prototype={
p_(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hi(C.bC,v.length),C.aP)}}
B.Wa.prototype={
S(){return new B.aFa()}}
B.aFa.prototype={
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
return A.b(B.a89(p,m,n,o,C.a.i(l).length===0?null:l),$async$afd)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fm5)
s=[1]
x=4
break}p.L(y.q).f.T(D.fkH)
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
return A.i($async$afd,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H?C.nC:C.qo,q=A.eP(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fN2,s,s,s,1,s,!0),p=A.q(s,D.bxw,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.I6,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c4L,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c4G,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c4W,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbI()
u=A.bo(C.aF,s,s,s,s,C.h9,s,s,s,s,s,s)
return A.c4(q,r,A.cb(A.x(A.a([p,C.dc,o,C.ae,x,C.ae,w,C.ng,A.bJ(t.r?C.tL:C.aXL,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.ada.prototype={}
B.byb.prototype={
a5J(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.apY()))
x=3
return A.b(B.Sh(t,s),$async$a5J)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5J,w)},
gd1(){return this.a}}
B.Ok.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_o.prototype={
S(){return new B.aB9(new A.au(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aB9.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dcP(this))},
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
B(d){var x=this,w=null,v=B.a2t(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nC:v.a[0],p=A.l(24),o=A.L(C.aF.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aF.j(u?0.25:0.12),C.h1,32)],n),l=A.q(w,T.asu,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aF.j(0.4),C.cz,16)],n),C.atj,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uY(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxO()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.Cu,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b5V),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcN(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
h=y.p
return A.eJ(w,C.L,new A.cP(Q.LY,new A.bN(new A.o(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wy,A.x(A.a([l,C.aO,k,C.T,j,C.e3,i,C.e3,A.A(A.a([A.E(A.dU(C.o2,new B.dcO(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.au,A.E(new A.bN(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aF.j(0.35),C.cL,12)],n),L.Qg,C.n),C.bk,A.aH(!1,C.a3,!0,w,A.aP(!1,A.l(14),!0,D.etK,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbN(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.Op,C.da,w,w,w)}}
B.bxO.prototype={
p_(d,e){return e.ami(e.a.toUpperCase())}}
B.Wb.prototype={
S(){return new B.aFb(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFb.prototype={
Y(){var x=this
x.a4()
x.ur()
x.w=A.dg(C.jF,new B.e_B(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wk()
this.a3()},
a1L(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oj(u.a.c),$async$a1L)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bj(u.a.c),$async$a1L)
case 4:u.m(new s.dZZ(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1L,w)},
ur(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oj(u.a.c),$async$ur)
case 3:t=e
x=4
return A.b(B.Bj(u.a.c),$async$ur)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e__(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.Ob(u.d)
B.Ck(u.a.c)
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
return A.b(B.a8e(r,u.a.c),$async$Ob)
case 8:p=f
if(u.c==null){x=1
break}new B.dZy(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a_(r.c,"video/")||r.mL(D.na))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wi(r,u.a.c),$async$Ob)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bj(u.a.c),$async$Ob)
case 12:u.m(new o.dZz(u,f))
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
return A.b(B.a8e(d,u.a.c),$async$OA)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZE(u,d,t))
x=6
return A.b(A.fF(new A.fw(t)),$async$OA)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fF(new A.fw(r.toUpperCase())),$async$OA)
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
$.eX.mE()}x=s.pop()
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
return A.b(B.cej(s,n,r,q,o,t),$async$IF)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fP1(o,u.a.c),$async$IF)
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
a0P(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqT(u.a.c),$async$a0P)
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
return A.b(A.a6(t,!1).ce(A.ec(new B.dZW(u,r,q),!1,null,y.H)),$async$a0P)
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
return A.b(B.aqQ(u.a.c),$async$a1V)
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
return A.b(u.us(new B.dZT(u,d,null,e,f),"Uploading\u2026"),$async$ad3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad3,w)},
bGr(){B.hFD(!1,new B.dZC(this))
return},
cxu(){this.m(new B.e_3(this))},
aAB(){var x=0,w=A.j(y.H),v=this
var $async$aAB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGr()
return A.h(null,w)}})
return A.i($async$aAB,w)},
ad_(){var x=0,w=A.j(y.H),v=this
var $async$ad_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.dZI(v),"Importing\u2026"),$async$ad_)
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
return A.b(A.a6(t,!1).ce(A.ec(new B.e_m(u,d),!1,null,y.H)),$async$T3)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mL(D.Se)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ec(new B.e_n(u,d),!1,null,y.H)),$async$T3)
case 8:x=1
break
case 7:x=u.c3m(d)?9:10
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
c3m(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cTx,C.a.b2(x,w+1).toLowerCase())},
agL(d){return this.cjh(d)},
cjh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mL(D.na)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZU(u,d),!1,null,y.H)),$async$agL)
case 5:x=1
break
case 4:u.m(new B.dZV(u,d))
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
return A.b(A.py(t,s.c,s.f),$async$So)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.us(new B.e_f(u,d),"Preparing QR\u2026"),$async$So)
case 4:case 1:return A.h(v,w)}})
return A.i($async$So,w)},
ajs(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_g(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_h(q),s),s.k("M.E"))
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
t=B.a2t(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_9(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajl)
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
q=new A.N(t,new B.dZF(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZG(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.py(t,s.c,s.f),$async$Yq)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.us(new B.dZH(u,r),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yq,w)},
ahQ(d){return this.cqM(d)},
cqM(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hGu(d,!1),$async$ahQ)
case 3:s=f
r=s==null
q=B.a8b(r?"":s)
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
return A.b(B.fWN(u,v.a.c),$async$agR)
case 2:return A.h(null,w)}})
return A.i($async$agR,w)},
bGq(){B.hFD(!1,new B.dZB(this,null))
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
k=A.C(new A.Y(p,new B.dZX(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xQ.cq().ap3(!0,C.a1X,!1),$async$JN)
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
return A.b(B.bGf(p,l,e,s.a.c),$async$JN)
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
case 3:t=B.hVv(d)
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
return A.b(u.us(new B.dZR(u,d),"Receiving video\u2026"),$async$IV)
case 11:x=1
break
case 10:x=12
return A.b(u.us(new B.dZS(u,d),"Receiving\u2026"),$async$IV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IV,w)},
EN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DE()?3:4
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
aiJ(d){return this.cw1(d)},
cw1(d){var x=0,w=A.j(y.H),v=this
var $async$aiJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.e_0(v,d),"Saving\u2026"),$async$aiJ)
case 2:return A.h(null,w)}})
return A.i($async$aiJ,w)},
Jy(d){return this.bOZ(d)},
bOZ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jy)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cem(t),$async$Jy)
case 6:case 5:s=d.a
x=7
return A.b(B.Fm(u.a.c,s),$async$Jy)
case 7:u.r.W(0,s)
x=8
return A.b(u.ur(),$async$Jy)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jy,w)},
ajy(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2t(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_l(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajy)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agR()
break
case"import":u.ad_()
break}case 1:return A.h(v,w)}})
return A.i($async$ajy,w)},
cbL(d){var x=d.c
if(C.a.a_(x,"video/")||d.mL(D.na))return C.qU
if(C.a.a_(x,"image/")||d.mL(D.Se))return C.uU
if(C.a.q(x,"pdf"))return E.PL
return D.aqc},
B(d){var x,w,v=this,u=null,t=B.a2t(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.I_,u,u,u,new B.e_w(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bZ3,u,u,u,v.e?u:v.gcjB(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxt()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bTi:E.aqC,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a3U,u,u,u,v.e?u:v.gcbM(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oL,u,u,u,v.e?u:v.gb4n(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c_R,u,u,u,v.e?u:new B.e_x(v),u,u,u,u,"More options",u))
q=A.eP(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m_(new B.e_y(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.q(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.q(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.P(d).ax.a===C.H?0.12:0.08),C.aF.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kr(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aB6(C.jL,s,!0,t,w?u:v.gcAo(),u),1)
x.push(new A.D(D.bEf,A.lC(new B.e_z(),A.A(A.a([s,C.au,A.E(new B.aB6(C.uV,"Export",!1,t,w?u:v.gbSS(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cw,C.iA,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfR(t,v.e?u:v.gb4n(),u)
else s=A.ks(!0,u,u,new B.e_A(v,t),s,u,D.bE7,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aB6.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bo(C.aF,t,t,0,C.c,t,C.uD,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uD,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.en(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bfR.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.dcL(),new A.D(E.a13,A.x(A.a([A.lC(new B.dcM(),A.q(x,A.X(C.zh,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.aA,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e2,C.hK,x,x,new A.br(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e3,A.dh(C.oL,x,D.h_6,this.d,A.bo(C.aF,x,x,x,C.c,x,C.On,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cw,C.Cg,x,x,new A.br(0,1,w),s),x,x,x)}}
B.adu.prototype={
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
if(!o||i.mL(D.na))p=D.dty
else{p=C.a.a_(p,"image/")||i.mL(D.Se)
n=y.O
p=p?A.a([C.cJ,C.aF],n):A.a([C.aN.j(0.85),C.aF.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.aA,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garr()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mL(D.na))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.aw,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mL(D.na)))l.push(A.h78(C.aF,!1,j,j,j,!1,j,j,new B.dd7(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oD,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lC(new B.dd8(),new A.D(C.en,A.aH(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0w,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bt("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_q.prototype={
S(){return new B.aBb()},
gd1(){return this.c}}
B.aBb.prototype={
Y(){this.a4()
this.yx()},
t(){B.hVK(this.e)
this.a3()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rV(o.c,o.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hVN(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hVM(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dd4(s))
x=1
break}s.m(new B.dd5(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.dd6(s,q))
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
return A.b(B.rV(t.c,t.d),$async$a2S)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fj4)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiX(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2S)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2S,w)},
c2k(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kF(u,C.A,v,new B.dd2(w,t),C.hj,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fS(t,C.A,v,new B.dd3(w),C.hj,C.dE,!0,v,!1,v,v)
else return C.bM
return A.v3(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2t(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Dh,u,u,u,v.gb89(),u,u,u,u,"Share / save",u))
r=A.eP(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fy
else{q=v.r
if(q!=null)t=new A.D(C.ey,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ey,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.Dh,u,D.fId,v.gb89(),A.bo(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c2k()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_n.prototype={
S(){return new B.aB8(A.ajS(),C.bF,C.bF)},
gd1(){return this.c}}
B.aB8.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fA(w,A.a4(w).k("fA<1>")).iC(new B.dcI(v))
x.gcXG().iC(new B.dcJ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a4(x).k("fA<1>"))}if(x==null)x=C.bch
x.iC(new B.dcK(v))
v.yx()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rV(p.c,p.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dcB(s))
x=1
break}x=8
return A.b(s.d.vu(0,new A.a4B(r,s.a.d.c)),$async$yx)
case 8:if(s.c==null){x=1
break}s.m(new B.dcC(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dcD(s,q))
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
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2t(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eP(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fy
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bUg,C.f,o,o,new A.o(o,o,o,A.l(24),o,L.Qg,C.n),o,88,o,o,o,o,o,88)
t=A.kZ(C.aF,o,o,m,0,new B.dcE(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVE(p.w)+" / "+p.aVE(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aF,o,o,o,o,D.fft,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uZ:C.hl,o,o,o,o,o)
x=A.x(A.a([u,C.l4,t,x,C.dc,A.dh(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbP(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qG,x,o),o,o,o),o,!1,!1,o,o)}}
B.QG.prototype={
S(){return new B.aBe()},
gd1(){return this.c}}
B.aBe.prototype={
Y(){this.a4()
this.Qg()},
Qg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h9r(o.c,o.d,new B.ddl(s)),$async$Qg)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddm(s))
x=1
break}s.e=r
q=O.iiu(r)
if(q==null){s.m(new B.ddn(s))
x=1
break}s.d=q
q.aW(0,s.gb35())
x=8
return A.b(q.iX(0).dg(0,C.rY),$async$Qg)
case 8:if(s.c==null){x=1
break}s.m(new B.ddo(s))
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
break}s.m(new B.ddp(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qg,w)},
chP(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddq(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dw(0,x.gb35())
w=x.d
if(w!=null)w.t()
B.itb(x.e)
x.a3()},
afg(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1e(u.c,u.d),$async$afg)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afg,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2t(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eP(A.a([A.aI(t,t,t,t,C.oK,t,t,t,u.gcbJ(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fy
else{q=u.r
if(q!=null)s=new A.D(C.ey,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajk(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AP(s,t),A.az(t,A.zn(A.q(t,A.X(q?I.uZ:C.hl,C.c,t,t,t,48),C.f,t,t,new A.o(C.b6,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dds(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_s.prototype={
S(){return new B.aBc(new A.cw(null,y.A))}}
B.aBc.prototype={
gcJv(){var x,w,v=this.a
if(v.e!==D.TC)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJ5(){var x,w,v=this.a
if(v.e!==D.Al)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJv()
if(x!=null){v.Ro(x)
v.e=A.dg(R.GJ,new B.ddh(v,x))}w=v.gcJ5()
if(w!=null){v.Rn(w)
v.f=A.dg(C.fK,new B.ddi(v,w))}},
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
return A.b(B.aqY(d),$async$Rn)
case 3:t=f
x=4
return A.b(B.ceF(d),$async$Rn)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dd9(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
Ro(d){return this.cp_(d)},
cp_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ro=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fXp(d),$async$Ro)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bE7(t),$async$Ro)
case 4:if(u.c==null){x=1
break}u.m(new B.dda(u))
u.c.L(y.q).f.T(D.aUu)
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
for(;;)switch(x){case 0:if(!A.DE()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fmf)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ec(new B.ddb(),!1,null,y.N)),$async$a2E)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bE7(s),$async$a2E)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aUu)
case 1:return A.h(v,w)}})
return A.i($async$a2E,w)},
aaT(d){return this.bMF(d)},
bMF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fF(new A.fw(C.d.aN(t,", "))),$async$aaT)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaT,w)},
afe(d){return this.bMn(d)},
bMn(d){var x=0,w=A.j(y.H),v=this
var $async$afe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fF(new A.fw(v.a.c)),$async$afe)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fjy)
return A.h(null,w)}})
return A.i($async$afe,w)},
a2y(d){return this.cw3(d)},
cw3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apS(s.d,4),$async$a2y)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_doc_share_qr.png"),$async$a2y)
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
if(w.e!==D.Jd)return null
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
return A.b(A.fF(new A.fw(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaQ)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fle)
case 1:return A.h(v,w)}})
return A.i($async$aaQ,w)},
aff(){var x=0,w=A.j(y.H),v=this,u
var $async$aff=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wk(),$async$aff)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aff,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2t(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jd&&i!==D.TC&&i!==D.Al
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eP(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jd||t===D.TC||t===D.Al?l:A.aI(l,l,l,l,C.lo,l,l,l,m.gb18(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.L(C.aF.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qd(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bA,A.d(""+q.d+" file(s) \xb7 "+m.gc7B(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jd){t=C.aF.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.T,A.q(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.md,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gcbK(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hq(D.c3O,D.fRS,new B.ddc(m,d),l)],p))}if(m.a.e===D.Jd&&m.gaZ6()!=null)C.d.u(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hq(D.c0c,D.fOr,new B.ddd(m,d),l)],p))
if(m.a.e===D.Al){x=(m.w?C.dL:C.aF).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.T,A.q(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FB:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.md,l,l,l)],p))}if(m.a.e===D.TC){x=(m.r?C.dL:C.aF).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.T,A.q(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FB:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.md,l,l,l),C.ae,A.dh(D.bWJ,l,D.fV1,m.gcwq(),A.bo(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oO(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.q(l,A.x(q,C.l,l,C.ba,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.ae,A.A(A.a([A.E(A.en(N.Dg,C.W4,new B.dde(m,d),l),1),C.au,A.E(A.dh(C.zG,l,C.abO,new B.ddf(m,d),A.bo(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.B0,l,m.gb18(),A.bo(C.aN,l,l,l,l,C.h9,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.ddg(),y.C)}}
B.ads.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.q(x,A.qd(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bI,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bJ(C.B1,x,new B.dcA(d),x)],u),x,x,C.np,v,x,x,x,x,D.fHd,x)}}
B.a_m.prototype={
S(){return new B.aB7(A.zY(C.yA,C.o9,C.vc))}}
B.aB7.prototype={
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
return A.c4(A.eP(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fOZ,x,x,x,1,x,!0),C.w,A.zX(this.d,C.c0,this.gaz7()),x,!1,!1,x,x)}}
B.a_t.prototype={
S(){return new B.aBd(A.zY(C.yA,C.o9,C.vc))},
gd1(){return this.c}}
B.aBd.prototype={
c3o(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahd(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MN("text/plain"),$async$ahd)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fm9)
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
return A.b(B.hGu(p,!0),$async$abH)
case 3:t=e
p=t==null
s=B.a8b(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fiF)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abH,w)},
t(){this.d.t()
this.a3()},
az8(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3o(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.ary,v,v,v,w.gbSl(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a40,v,v,v,w.gcmk(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eP(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.uR:P.Pu,v,v,v,v,v),v,v,v,new B.ddk(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fVY,v,v,v,1,v,!0)
u=A.zX(w.d,C.c0,w.gaz7())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.q(v,v,C.f,v,v,new A.o(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eA2],s),v),v,!1,!1,v,v)}}
B.bfS.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pk
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.l(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pk:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a19,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaE.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pq.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yt.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pp.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FR.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cso.prototype={}
B.FQ.prototype={}
B.aaD.prototype={}
B.avu.prototype={}
B.Yu.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jE)","n(jE)","Wb(Z)","~()","a_p(Z)","H(H,jE)","QG(Z)","~(ml)","cu(FQ)","aB<jE?>(@)","W9(Z)","Wd(Z)","D(jE)","jE(@)","a9<n,@>(jE)","a_o(Z)","Wa(Z)","a_q(Z)","a_n(Z)","a_s(Z)","ads(Z)","ai<jE>()","a_t(Z)","adu(Z,H)","a_m(Z)","a9<n,aE>(jE)","cu(Yt)","cu(aaD)","aB<cu>(FQ)"])
B.csk.prototype={
$1(d){var x=this.a
x.x=D.aRg
x.y.I(0,D.aRg)},
$S:74}
B.csl.prototype={
$1(d){var x=this.a
x.x=D.aRf
x.y.I(0,D.aRf)},
$S:74}
B.csm.prototype={
$1(d){var x=this.a
x.aiB(A.ahK(d.data)).bG(new B.csj(x),y.b)},
$S:74}
B.csj.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csn.prototype={
$1(d){},
$S:74}
B.csq.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i_y(d.channel))},
$S:16}
B.csr.prototype={
$1(d){},
$S:16}
B.css.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ijE(w.iceConnectionState)
x.cx=w
if($.hiT())switch(w.a){case 0:x.cy=D.aRl
break
case 1:x.cy=D.aRm
break
case 3:x.cy=D.aRn
break
case 5:x.cy=D.aRj
break
case 6:x.cy=D.aRk
break
case 7:x.cy=D.a9x
break
default:break}},
$S:109}
B.cst.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ijF(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.csu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iuK(w.signalingState)},
$S:109}
B.csv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.isT(w.connectionState)},
$S:109}
B.csw.prototype={
$1(d){},
$S:109}
B.csx.prototype={
$1(d){},
$S:16}
B.fx4.prototype={
$1(d){var x=y.F.a(new A.qs([],[]).o_(d.target.result,!1)),w=C.wp.q(x.objectStoreNames,"blobs")
if(!w)C.wm.Gi(x,"blobs")},
$S:171}
B.fWB.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x0.fs(this.b)
$.eX.mE()
this.c.$1(d)},
$S:464}
B.fWD.prototype={
$1(d){return this.a.$1(B.i8Z(this.b,this.c))},
$S:30}
B.fWC.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fWA.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fWQ.prototype={
$1(d){var x=this
return B.hvl(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fWR.prototype={
$1(d){var x=this
return B.hvl(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fzL.prototype={
$1(d){var x=this
return B.ceg(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcT.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcQ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceg(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcS.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceg(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcR.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceg(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcV.prototype={
$4(d,e,f,g){var x=null
return A.k2(A.A(A.a([A.aI(x,x,x,x,D.bVl,x,x,x,new B.dcU(d),x,x,x,x,x,x),A.E(A.FC(D.RZ,!0,x,!1,C.a31,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.RZ,x,g,C.and,0,e,f)},
$C:"$4",
$R:4,
$S:441}
B.dcU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBI.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eS,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.q(v,D.bxQ,C.f,v,v,D.b7y,v,v,v,v,D.an2,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bZF,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GX,A.x(A.a([o,C.ae,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.arP,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bA,A.A(A.a([A.E(A.dU(C.dt,new B.fBG(d),v),1),C.au,A.E(A.bJ(D.fNq,v,new B.fBH(p,x,d),A.bo(C.b3,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GM,v,v,v,v),v)},
$S:62}
B.fBG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBH.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fjP)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDO(v,x))},
$S:0}
B.fCb.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eS,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bxG,C.f,w,w,D.b92,w,w,w,w,D.an2,w,w,1/0),new A.D(C.GX,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.heG(u,"Organization name",C.Hn,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.heG(u,"Access code",C.nM,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.heG(u,"Member password",H.HV,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bA,A.bJ(D.fW4,w,new B.fCa(r,q,p,d),A.bo(C.aF,w,w,w,w,C.h9,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GM,w,w,w,w),w)},
$S:62}
B.fCa.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fjU)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGW(u,x,w))},
$S:0}
B.ce7.prototype={
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
return A.b(A.vS(p,null).dg(0,C.a09),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
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
B.ced.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cee.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cef.prototype={
$1(d){return d.b},
$S:z+2}
B.ce9.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cea.prototype={
$1(d){return d.b},
$S:z+2}
B.ce8.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:14}
B.ceb.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cec.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fWO.prototype={
$1(d){return new B.W9(this.a,null)},
$S:z+11}
B.fWP.prototype={
$1(d){return new B.Wd(this.a,this.b,this.c,null)},
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
$1(d){var x,w,v=null,u=A.l(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mL(D.Se))s=C.uU
else s=C.a.a_(s,"video/")||d.mL(D.na)?C.qU:D.aqc
x=this.b.a
w=y.p
return new A.D(C.ky,A.A(A.a([A.q(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garr(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dZv.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZw.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ceh.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.cei.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.fXI.prototype={
$2(d,e){return e===this.a},
$S:310}
B.fu9.prototype={
$1(d){return J.k(d)},
$S:17}
B.fzX.prototype={
$1(d){var x=this.b
B.i6M(C.Ha.ga7m(this.a)).bG(x.gC4(x),y.H)},
$S:129}
B.fzY.prototype={
$1(d){return this.a.dd(0,null)},
$S:129}
B.fzZ.prototype={
$0(){return null},
$S:11}
B.cew.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fA_.prototype={
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
return new B.jE(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fEc.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fya.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ceB.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.na)},
$S:z+1}
B.h0Y.prototype={
$1(d){return new B.a_o(this.a,null)},
$S:z+16}
B.dcP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:8}
B.dcN.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dcO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_B.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1L()},
$S:12}
B.dZZ.prototype={
$0(){var x=J.bHi(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e__.prototype={
$0(){var x=J.bHi(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZy.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZx(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG4(this.c)}},
$S:0}
B.dZx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZz.prototype={
$0(){var x=J.bHi(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZE.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZD(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG4(this.c)}},
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
$1(d){return new B.Wa(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IF(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.We(r.a.c,u.b,u.c),$async$$0)
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
B.dZC.prototype={
$1(d){this.a.ad3(d,"No files selected.","Added")},
$S:464}
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
return A.b($.xQ.cq().cZE(C.a1X,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jL(o,0,null)}u=2
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
return A.b(B.aqX(null,m,o.a.c),$async$$0)
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
$1(d){return new B.QG(this.a.a.c,this.b,null)},
$S:z+7}
B.e_n.prototype={
$1(d){return new B.a_q(this.a.a.c,this.b,null)},
$S:z+18}
B.e_o.prototype={
$1(d){return new B.a_n(this.a.a.c,this.b,null)},
$S:z+19}
B.dZU.prototype={
$1(d){return new B.QG(this.a.a.c,this.b,null)},
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
return A.b(B.a8d(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csr(),$async$$0)
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
return A.b(A.px(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wk(),$async$$0)
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
return new B.a_s(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e_g.prototype={
$1(d){return d.a},
$S:z+2}
B.e_h.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_9.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.as(A.q(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kx,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garr(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mL(D.na)?C.te:C.pB
p=!x||p.mL(D.na)?"Play video":"View"
return new A.bN(new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l9,v,v,C.n),C.bk,A.bm(!0,new A.D(C.Cs,A.x(A.a([q,o,t,C.aB,B.a_r(!1,u,!1,w,p,new B.e_4(d),v),B.a_r(!1,u,!1,C.jL,"Share via QR",new B.e_5(d),"Letters/numbers QR code"),B.a_r(!1,u,!1,D.a36,"Send to their Code",new B.e_6(d),"Enter someone else's personal code"),B.a_r(!1,u,!1,C.i3,"Download / save",new B.e_7(d),v),C.am,B.a_r(!1,u,!0,C.ek,"Delete",new B.e_8(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:699}
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
return A.b(B.a8f(null,v.b,u.a.c),$async$$0)
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
B.dZB.prototype={
$1(d){var x=this.a
x.us(new B.dZA(x,d,this.b),"Preparing\u2026")},
$S:464}
B.dZA.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.We(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGf(q,s,u.c,t.a.c),$async$$0)
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
return A.b(B.h9u(r.a.c,u,null),$async$$0)
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
return A.b(B.Hi(new B.dZN(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dZO(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZP(s))
case 5:x=8
return A.b(r.b.iI(0,C.GG,new B.dZQ()),$async$$0)
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
$S:216}
B.dZK.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZO.prototype={
$1(d){return new B.ads(this.a.a,null)},
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
x=B.Jo(o)!=null?3:4
break
case 3:x=5
return A.b(B.a83(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3i(B.Jo(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqX(new B.dZL(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h9t(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
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
$S:216}
B.dZJ.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZM.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.na)},
$S:z+1}
B.e_1.prototype={
$1(d){return new B.a_t(this.a.a.c,null)},
$S:z+23}
B.e_0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1e(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_l.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.o(v[2],x,new A.bG(new A.ay(C.aF.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.l9,x,x,C.n),C.bk,A.bm(!0,new A.D(C.Cs,A.x(A.a([A.as(A.q(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kx,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_r(!0,w,!1,C.nM,"My Code",new B.e_i(d),"Your personal code & QR \u2014 others send docs to you"),B.a_r(!1,w,!1,D.a36,"Send to their Code",new B.e_j(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_r(!1,w,!1,S.zy,"Import backup",new B.e_k(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:699}
B.e_i.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.e_j.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGq()},
$S:0}
B.e_k.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.e_y.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jy(D.RZ,x,C.a31,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RZ).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:663}
B.e_w.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_x.prototype={
$0(){this.a.ajy()
return null},
$S:0}
B.e_z.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*10)),e)},
$S:103}
B.e_A.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adu(e,w,v,this.b,x.e,x.cbL(w),new B.e_s(x,w),new B.e_t(x,v,w),new B.e_u(x,w),new B.e_v(x,w),null)},
$S:z+24}
B.e_s.prototype={
$0(){this.a.agL(this.b)
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
$0(){this.a.ajl(this.b)
return null},
$S:0}
B.dcL.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*18)),e)},
$S:103}
B.dcM.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:114}
B.dd8.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.p(0,(1-e)*14)),e)},
$S:103}
B.dd7.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.dd4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dd5.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dd6.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dd2.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fS(w,C.A,x,new B.dd0(this.a),C.hj,C.dE,!0,x,!1,x,x)
$.aW.x1$.push(new B.dd1(this.a))
return C.bM},
$S:134}
B.dd0.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcZ(this.a))
return C.bM},
$S:198}
B.dcZ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcW(x))},
$S:8}
B.dcW.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd1.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcY(x))},
$S:8}
B.dcY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd3.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dd_(this.a))
return C.bM},
$S:198}
B.dd_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcX(x))},
$S:8}
B.dcX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcI.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcH(x,d))},
$S:1767}
B.dcH.prototype={
$0(){return this.a.f=this.b===C.vz},
$S:0}
B.dcJ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcG(x,d))},
$S:8}
B.dcG.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcK.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcF(x,d))},
$S:8}
B.dcF.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dcB.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dcC.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcD.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcE.prototype={
$1(d){return this.a.d.Nx(0,A.dw(0,0,0,C.j.V(d),0,0))},
$S:6}
B.ddl.prototype={
$0(){var x=this.a.a
return B.rV(x.c,x.d)},
$S:1768}
B.ddm.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.ddo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ddp.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddq.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dds.prototype={
$0(){var x=this.a
x.m(new B.ddr(x))},
$S:0}
B.ddr.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qr(0)},
$S:0}
B.ddh.prototype={
$1(d){return this.a.Ro(this.b)},
$S:12}
B.ddi.prototype={
$1(d){return this.a.Rn(this.b)},
$S:12}
B.dd9.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dda.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ddb.prototype={
$1(d){return D.hwk},
$S:z+25}
B.ddg.prototype={
$2(d,e){if(d)B.Wk()},
$S:131}
B.ddc.prototype={
$0(){return this.a.aaT(this.b)},
$S:0}
B.ddd.prototype={
$0(){return this.a.aaQ(this.b)},
$S:0}
B.dde.prototype={
$0(){return this.a.afe(this.b)},
$S:0}
B.ddf.prototype={
$0(){return this.a.a2y(this.b)},
$S:0}
B.dcA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.ddk.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qv(),$async$$0)
case 2:u.m(new B.ddj(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddj.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceD.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.na)},
$S:z+1}
B.ceE.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceC.prototype={
$2(d,e){return this.bn0(d,e)},
bn0(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wl(u.c,A.I(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1769}
B.fDP.prototype={
$1(d){if(d===D.a9w&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fDQ.prototype={
$0(){},
$S:11}
B.fEq.prototype={
boA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.frp(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hqr(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boA(d,e)},
$S:517}
B.fEp.prototype={
$1(d){var x=this
d.b=new B.fEo(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fEo.prototype={
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
return A.b(B.b1f(n,m),$async$$1)
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
return A.b(B.frp(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8c(m),$async$$1)
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
x(v=B.aBa.prototype,"gcjd","QY",0)
x(v,"gck4","JO",0)
x(v,"gcjA","yH",0)
x(v=B.aF9.prototype,"gcbF","afc",0)
x(v,"gcbG","a_D",0)
x(v,"gcyT","aj2",0)
x(v=B.aFc.prototype,"gcbH","a_E",0)
x(v,"gcyU","a2T",0)
x(B.aFa.prototype,"gcbI","afd",0)
x(B.aB9.prototype,"gcbN","cbO",4)
x(v=B.aFb.prototype,"gcjB","a0P",0)
x(v,"gcxt","cxu",4)
x(v,"gb4n","aAB",0)
x(v,"gcAo","ajs",0)
x(v,"gbSS","Yq",0)
x(v,"gcbM","EN",0)
x(B.aBb.prototype,"gb89","a2S",0)
x(B.aB8.prototype,"gcbP","a_F",0)
x(v=B.aBe.prototype,"gb35","chP",4)
x(v,"gcbJ","afg",0)
x(v=B.aBc.prototype,"gcwq","a2E",0)
x(v,"gb18","aff",0)
w(B.aB7.prototype,"gaz7","az8",8)
x(v=B.aBd.prototype,"gcmk","ahd",0)
x(v,"gbSl","abH",0)
w(v,"gaz7","az8",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cso,B.aaD,B.avu,B.aDO,B.aGW,B.jE,B.ada,B.byb,B.FQ,B.Yu])
w(B.csp,B.cso)
w(B.b6n,B.aaD)
x(A.hv,[B.csk,B.csl,B.csm,B.csj,B.csn,B.csq,B.csr,B.css,B.cst,B.csu,B.csv,B.csw,B.csx,B.fx4,B.fWB,B.fWD,B.fWC,B.fWQ,B.fWR,B.fzL,B.dcQ,B.dcS,B.dcR,B.dcV,B.fBI,B.fCb,B.ce7,B.cee,B.cef,B.cea,B.ce8,B.ceb,B.cec,B.fWO,B.fWP,B.e_F,B.e_O,B.e_M,B.e_N,B.fu9,B.fzX,B.fzY,B.cew,B.fA_,B.fEc,B.fya,B.fyb,B.ceB,B.h0Y,B.dcP,B.dcN,B.e_B,B.dZx,B.dZD,B.dZW,B.dZC,B.e_2,B.e_m,B.e_n,B.e_o,B.dZU,B.e_b,B.e_a,B.e_c,B.e_d,B.e_e,B.e_g,B.e_h,B.e_9,B.dZF,B.dZG,B.dZB,B.dZX,B.dZO,B.dZM,B.e_1,B.e_l,B.e_y,B.e_z,B.dcL,B.dcM,B.dd8,B.dd7,B.dd2,B.dd0,B.dcZ,B.dd1,B.dd3,B.dd_,B.dcI,B.dcJ,B.dcK,B.dcE,B.ddh,B.ddi,B.ddb,B.ceD,B.ceE,B.fDP,B.fEp,B.fEo])
w(B.b6o,B.avu)
x(A.iK,[B.fWA,B.dcT,B.dcU,B.fBG,B.fBH,B.fCa,B.dZu,B.e_D,B.e_E,B.e_C,B.e_G,B.e_H,B.e_I,B.e_J,B.e_K,B.e_L,B.dZv,B.dZw,B.fzZ,B.dcO,B.dZZ,B.e__,B.dZy,B.dZz,B.dZE,B.e_p,B.e_q,B.dZT,B.e_3,B.dZI,B.dZV,B.e_f,B.e_4,B.e_5,B.e_6,B.e_7,B.e_8,B.dZH,B.dZA,B.dZY,B.dZR,B.dZK,B.dZP,B.dZQ,B.dZS,B.dZJ,B.e_0,B.e_i,B.e_j,B.e_k,B.e_w,B.e_x,B.e_s,B.e_t,B.e_r,B.e_u,B.e_v,B.dd4,B.dd5,B.dd6,B.dcW,B.dcY,B.dcX,B.dcH,B.dcG,B.dcF,B.dcB,B.dcC,B.dcD,B.ddl,B.ddm,B.ddn,B.ddo,B.ddp,B.ddq,B.dds,B.ddr,B.dd9,B.dda,B.ddc,B.ddd,B.dde,B.ddf,B.dcA,B.ddk,B.ddj,B.fDQ])
x(A.lE,[B.adt,B.Ok,B.aaE,B.Pq,B.Yt,B.Pp,B.FR])
x(A.af,[B.a_p,B.W9,B.Wd,B.Wa,B.a_o,B.Wb,B.a_q,B.a_n,B.QG,B.a_s,B.a_m,B.a_t])
x(A.ah,[B.aBa,B.aF9,B.aFc,B.aFa,B.aB9,B.aFb,B.aBb,B.aB8,B.aBe,B.aBc,B.aB7,B.aBd])
x(A.aw,[B.adX,B.aB6,B.bfR,B.adu,B.ads,B.bfS])
x(A.jy,[B.ced,B.ce9,B.ceh,B.cei,B.fXI,B.dZN,B.dZL,B.e_A,B.ddg,B.ceC,B.fEq])
x(A.j4,[B.blj,B.bxO])})()
A.iU(b.typeUniverse,JSON.parse('{"b6n":{"aaD":[]},"b6o":{"avu":[]},"a_p":{"af":[],"v":[]},"aBa":{"ah":["a_p"]},"adX":{"aw":[],"v":[]},"W9":{"af":[],"v":[]},"Wd":{"af":[],"v":[]},"aF9":{"ah":["W9"]},"aFc":{"ah":["Wd"]},"blj":{"j4":[]},"Wa":{"af":[],"v":[]},"aFa":{"ah":["Wa"]},"a_o":{"af":[],"v":[]},"Wb":{"af":[],"v":[]},"adu":{"aw":[],"v":[]},"a_q":{"af":[],"v":[]},"a_n":{"af":[],"v":[]},"QG":{"af":[],"v":[]},"a_s":{"af":[],"v":[]},"ads":{"aw":[],"v":[]},"a_m":{"af":[],"v":[]},"a_t":{"af":[],"v":[]},"aB9":{"ah":["a_o"]},"bxO":{"j4":[]},"aFb":{"ah":["Wb"]},"aB6":{"aw":[],"v":[]},"bfR":{"aw":[],"v":[]},"aBb":{"ah":["a_q"]},"aB8":{"ah":["a_n"]},"aBe":{"ah":["QG"]},"aBc":{"ah":["a_s"]},"aB7":{"ah":["a_m"]},"aBd":{"ah":["a_t"]},"bfS":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uO"),k:x("ML()"),o:x("bu<n,n>"),F:x("ru"),g:x("aB<jE?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a9<n,Q>>"),t:x("O<a9<n,@>>"),r:x("O<jE>"),w:x("O<+file,name(lU,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j4>"),a:x("O<dL>"),p:x("O<v>"),Z:x("O<H>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jE>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iC"),e:x("iyO"),af:x("F2"),U:x("jE"),b:x("cu"),C:x("aE"),aK:x("wG"),ab:x("FQ"),br:x("avu"),v:x("Yu"),N:x("n"),X:x("br<G>"),Q:x("m5"),D:x("dL"),aw:x("bt<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jE>>"),aW:x("c3<dL?>"),aY:x("c3<~>"),cx:x("adt"),b1:x("bk<ai<jE>>"),cf:x("bk<dL?>"),d4:x("bk<~>"),c4:x("aDO"),bG:x("aGW"),q:x("mC"),B:x("pQ<FQ>"),c6:x("pQ<aaE>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bi?"),_:x("ai<jE>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jE?"),R:x("aE?"),c:x("Yu?"),d:x("+answerQr,transfer(n,aB<ai<jE>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Ok,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dL?"),cm:x("ada?"),bk:x("aDO?"),ag:x("aGW?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5V=new A.ay(C.aF,2,C.r,-1)
D.c8q=new A.a8(C.a7,C.aa,C.x,C.a5c,null,null)
D.b7y=new A.o(null,null,null,C.mI,null,D.c8q,C.n)
D.b92=new A.o(null,null,null,C.mI,null,E.I6,C.n)
D.afY=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ahp=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.air=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.akd=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fI6=new A.B("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.fX1=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EN,null,null,null,null,null,null,null,null,null)
D.dky=x([D.fI6,C.am,D.fX1],y.p)
D.bxw=new A.fl(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dky,null)
D.h0v=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fMC=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EN,null,null,null,null,null,null,null,null,null)
D.dBD=x([D.h0v,C.am,D.fMC],y.p)
D.bxG=new A.fl(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dBD,null)
D.fXF=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fQB=new A.B("Enter the access code and password from your organization.",null,G.EN,null,null,null,null,null,null,null,null,null)
D.dzn=x([D.fXF,C.am,D.fQB],y.p)
D.bxQ=new A.fl(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dzn,null)
D.bE7=new A.R(16,10,16,28)
D.bEf=new A.R(16,14,16,4)
D.bFu=new A.R(20,0,20,16)
D.bG_=new A.R(20,8,20,16)
D.an2=new A.R(24,22,24,20)
D.a36=new A.a_(63394,"MaterialIcons",!1)
D.aqc=new A.a_(63515,"MaterialIcons",!1)
D.bTi=new A.a_(983813,"MaterialIcons",!1)
D.bQv=new A.a_(62867,"MaterialIcons",!1)
D.bUg=new A.ae(D.bQv,44,C.c,null,null,null)
D.bVl=new A.ae(C.k7,null,C.ab,null,null,null)
D.bWJ=new A.ae(C.js,18,null,null,null,null)
D.bYt=new A.ae(D.a36,26,C.c,null,null,null)
D.bZ3=new A.ae(C.D6,null,null,null,null,null)
D.bZF=new A.ae(C.Dd,null,null,null,null,null)
D.c_R=new A.ae(W.a3h,null,null,null,null,null)
D.c0c=new A.ae(C.hR,16,null,null,null,null)
D.c3O=new A.ae(C.td,16,null,null,null,null)
D.bUy=new A.ae(C.nM,null,null,null,null,null)
D.c4G=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bUy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c_c=new A.ae(C.Hn,null,null,null,null,null)
D.c4L=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c_c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bUT=new A.ae(H.HV,null,null,null,null,null)
D.c4W=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bUT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cU7=x([C.fr,C.b3,C.aF],y.O)
D.caj=new A.a8(C.aA,C.aE,C.x,D.cU7,null,null)
D.cTx=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RZ=x([C.fr,C.aF],y.O)
D.Se=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.na=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dty=x([C.nv,C.aF],y.O)
D.emi={iceServers:0}
D.aLM={urls:0}
D.dFl=new A.bu(D.aLM,["stun:stun.l.google.com:19302"],y.o)
D.dFk=new A.bu(D.aLM,["stun:stun1.l.google.com:19302"],y.o)
D.d9Y=x([D.dFl,D.dFk],A.at("O<a9<n,n>>"))
D.dED=new A.bu(D.emi,[D.d9Y],A.at("bu<n,@>"))
D.Jd=new B.Ok(0,"lanDirect")
D.TB=new B.Ok(1,"cloudStash")
D.dQJ=new B.Ok(2,"inlineInstant")
D.TC=new B.Ok(3,"webrtcLink")
D.Al=new B.Ok(4,"videoCloud")
D.fX0=new A.B("Receive file",null,C.ni,null,null,null,null,null,null,null,null,null)
D.cJi=x([E.arY,C.af,D.fX0],y.p)
D.fan=new A.c8(C.aL,C.ba,C.i,C.l,null,C.p,null,0,D.cJi,null)
D.etK=new A.D(C.cn,D.fan,null)
D.fyt=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ID,null,null,null)
D.fIF=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fyt,null,C.K,null,null,null,null,null,null,null)
D.esW=new A.D(C.Cy,D.fIF,null)
D.bdC=new A.ci(C.A,null,null,D.esW,null)
D.eA2=new A.cK(0,null,0,28,null,null,D.bdC,null)
D.eAm=new B.aaE(0,"RTCDataChannelConnecting")
D.aRf=new B.aaE(1,"RTCDataChannelOpen")
D.aRg=new B.aaE(3,"RTCDataChannelClosed")
D.eAn=new B.FR(0,"RTCIceConnectionStateNew")
D.eAo=new B.FR(1,"RTCIceConnectionStateChecking")
D.eAp=new B.FR(2,"RTCIceConnectionStateCompleted")
D.eAq=new B.FR(3,"RTCIceConnectionStateConnected")
D.eAr=new B.FR(4,"RTCIceConnectionStateCount")
D.eAs=new B.FR(5,"RTCIceConnectionStateFailed")
D.eAt=new B.FR(6,"RTCIceConnectionStateDisconnected")
D.aRh=new B.FR(7,"RTCIceConnectionStateClosed")
D.aRi=new B.Yt(0,"RTCIceGatheringStateNew")
D.eAu=new B.Yt(1,"RTCIceGatheringStateGathering")
D.a9w=new B.Yt(2,"RTCIceGatheringStateComplete")
D.a9x=new B.Pp(0,"RTCPeerConnectionStateClosed")
D.aRj=new B.Pp(1,"RTCPeerConnectionStateFailed")
D.aRk=new B.Pp(2,"RTCPeerConnectionStateDisconnected")
D.aRl=new B.Pp(3,"RTCPeerConnectionStateNew")
D.aRm=new B.Pp(4,"RTCPeerConnectionStateConnecting")
D.aRn=new B.Pp(5,"RTCPeerConnectionStateConnected")
D.eAv=new B.Pq(0,"RTCSignalingStateStable")
D.eAw=new B.Pq(1,"RTCSignalingStateHaveLocalOffer")
D.eAx=new B.Pq(2,"RTCSignalingStateHaveRemoteOffer")
D.eAy=new B.Pq(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eAz=new B.Pq(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aRo=new B.Pq(5,"RTCSignalingStateClosed")
D.fft=new A.av(160,48)
D.beR=new A.fk(2,null,null,null,null,C.aF,null,null,null,null)
D.fh1=new A.a5(16,16,D.beR,null)
D.fLX=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new A.b1(D.fLX,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTF=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new A.b1(D.fTF,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1x=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fiF=new A.b1(D.h1x,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fLx=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.b1(D.fLx,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXQ=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aUu=new A.b1(D.fXQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZh=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fjy=new A.b1(D.fZh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h30=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fjP=new A.b1(D.h30,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0Y=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fjU=new A.b1(D.h0Y,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2b=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fkH=new A.b1(D.h2b,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fK7=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fle=new A.b1(D.fK7,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fVA=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.flz=new A.b1(D.fVA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOg=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fm5=new A.b1(D.fOg,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h35=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fm9=new A.b1(D.h35,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKn=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fmf=new A.b1(D.fKn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fJ2=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new A.b1(D.fJ2,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fFM=new A.B("NGMY DOC SHARE",null,C.aVS,null,null,null,null,null,null,null,null,null)
D.fHd=new A.B("Show this to sender",null,C.iG,null,null,null,null,null,null,null,null,null)
D.fId=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fN2=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fNq=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fOr=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fOZ=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRS=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fUI=new A.B("Send to their Doc Share",null,C.o0,null,null,null,null,null,null,null,null,null)
D.fV1=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fVm=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fVY=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fW4=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fWt=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.fZN=new A.B("Share files & videos\nwith a scan.",null,C.aVV,null,null,null,null,null,null,null,null,null)
D.h_6=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hwk=new B.a_m(null)
D.acQ=new B.adt(0,"docShare")
D.acR=new B.adt(1,"gate")
D.WI=new B.adt(2,"gateNoIndividual")})();(function staticFields(){$.aPJ=null
$.foY=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahx=A.T(y.N,A.at("lU"))
$.S1=A.T(y.N,y.D)
$.fpC=A.T(y.N,A.at("ada"))
$.cev=A.T(y.S,A.at("byb"))
$.hqq=1
$.if8=null
$.if7=null
$.i5Z=null
$.heT=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"izi","hIu",()=>new B.csp())
x($,"ixc","hiT",()=>C.a.q(A.bC(A.bC(A.bC(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["+PyDVuQCGkEBhvhsQieKMwd7RfQ="]=a.current})($__dart_deferred_initializers__);