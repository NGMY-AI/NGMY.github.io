((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crz:function crz(){},
hYw(d){var x=null,w=new B.b5X(d,D.eyf,new A.pN(x,x,y.c6),new A.pN(x,x,y.B))
w.bC0(d)
return w},
b5X:function b5X(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cru:function cru(d){this.a=d},
crv:function crv(d){this.a=d},
crw:function crw(d){this.a=d},
crt:function crt(d){this.a=d},
crx:function crx(d){this.a=d},
hYx(d,e){var x=y.N
x=new B.b5Y(d,e,A.T(x,y.e),A.T(x,y.z))
x.bC1(d,e)
return x},
b5Y:function b5Y(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crA:function crA(d){this.a=d},
crB:function crB(d){this.a=d},
crC:function crC(d){this.a=d},
crD:function crD(d){this.a=d},
crE:function crE(d){this.a=d},
crF:function crF(d){this.a=d},
crG:function crG(d){this.a=d},
crH:function crH(d){this.a=d},
hcE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zy.Mw(x,"ngmy_doc_share_v1",new B.fvG(),1)},
i4h(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wO(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
S7(d,e){return B.ikk(d,e)},
ikk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPk
x=7
return A.b(o==null?$.aPk=B.hcE():o,$async$S7)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.n1(s,"blobs","readwrite")
C.j6.mx(J.n0(q,"blobs"),r,d)
x=8
return A.b(J.pW(q),$async$S7)
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
return A.i($async$S7,w)},
S6(d){return B.ikj(d)},
ikj(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPk
x=7
return A.b(o==null?$.aPk=B.hcE():o,$async$S6)
case 7:s=f
r=J.n1(s,"blobs","readonly")
x=8
return A.b(C.j6.A3(J.n0(r,"blobs"),d),$async$S6)
case 8:q=f
x=9
return A.b(J.pW(r),$async$S6)
case 9:o=B.i4h(q)
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
return A.i($async$S6,w)},
ahW(d){return B.iki(d)},
iki(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPk
x=7
return A.b(p==null?$.aPk=B.hcE():p,$async$ahW)
case 7:s=f
r=J.n1(s,"blobs","readwrite")
C.j6.Gj(J.n0(r,"blobs"),d)
x=8
return A.b(J.pW(r),$async$ahW)
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
return A.i($async$ahW,w)},
fvG:function fvG(){},
i6W(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqI(w,v))}return u},
hDE(d,e){var x,w={},v=A.aY0("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fUX(w,v,e)
C.wP.z5(v,"change",new B.fUZ(w,v,!1))
C.wP.z5(v,"cancel",new B.fUY(w))
$.eX.mC()
v.click()
A.bQ(C.akL,new B.fUW(w),y.H)},
fUX:function fUX(d,e,f){this.a=d
this.b=e
this.c=f},
fUZ:function fUZ(d,e,f){this.a=d
this.b=e
this.c=f},
fUY:function fUY(d){this.a=d},
fUW:function fUW(d){this.a=d},
DG(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUt()?3:4
break
case 3:x=5
return A.b(B.hyt(e,d,s,!0,!1,f,g,h,!1,i),$async$DG)
case 5:x=1
break
case 4:x=6
return A.b(B.RL(d,s,f,g,h,i),$async$DG)
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
return A.b(B.Jj(s,d),$async$DG)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fra(s,d),$async$DG)
case 14:x=12
return A.b(r.hyt(q,p,o,n,m,l,k,j,a1,i),$async$DG)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.eb(new B.fVb(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.eb(new B.fVc(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DG,w)},
RL(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RL=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0H(e),$async$RL)
case 3:u=k
x=4
return A.b(B.aqr(d,e,!1),$async$RL)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jj(e,d),$async$RL)
case 7:if(k){v=D.acr
x=1
break}x=8
return A.b(B.W_(e),$async$RL)
case 8:v=t?D.Ws:D.acs
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0F(d,e)){v=D.acr
x=1
break}x=11
return A.b(B.W_(e),$async$RL)
case 11:v=t?D.Ws:D.acs
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h7A(d,e)){v=D.acr
x=1
break}x=14
return A.b(B.W_(e),$async$RL)
case 14:v=D.Ws
x=1
break
case 13:v=t?D.Ws:D.acs
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
fra(d,e){var x=0,w=A.j(y.y),v
var $async$fra=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0F(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0H(d),$async$fra)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fra,w)},
hyt(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.eb(new B.fyj(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hts(d,e,f,g,h,i,j){return new B.a_c(e,j,d,g,h,i,f,null)},
fAc(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fAc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fAf(A.S(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fAc)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAc,w)},
fAH(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fAH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fAJ(A.S(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fAH)
case 3:q=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
r.T$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAH,w)},
hcP(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bt(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fNt(d,e){var x=0,w=A.j(y.H),v
var $async$fNt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.W_(e),$async$fNt)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eO()
case 1:return A.h(v,w)}})
return A.i($async$fNt,w)},
fVb:function fVb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVc:function fVc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ad9:function ad9(d,e){this.a=d
this.b=e},
fyj:function fyj(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_c:function a_c(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAQ:function aAQ(){this.c=this.a=this.d=null},
dbX:function dbX(d,e){this.a=d
this.b=e},
dbU:function dbU(d){this.a=d},
dbW:function dbW(d){this.a=d},
dbV:function dbV(d){this.a=d},
dbZ:function dbZ(){},
dbY:function dbY(d){this.a=d},
adC:function adC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDt:function aDt(d,e){this.a=d
this.b=e},
aGB:function aGB(d,e,f){this.a=d
this.b=e
this.c=f},
fAf:function fAf(d,e,f){this.a=d
this.b=e
this.c=f},
fAd:function fAd(d){this.a=d},
fAe:function fAe(d,e,f){this.a=d
this.b=e
this.c=f},
fAJ:function fAJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAI:function fAI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdn(d,e,f,g,h){return B.hTo(d,e,f,g,h)},
hTo(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdn=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dL(d,new B.cdo(s,e,h,g,f,q),y.g),y.l),$async$cdn)
case 3:r=p.aU(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdn,w)},
b0C(d,e,f,g,h){return B.hTp(d,e,f,g,h)},
hTp(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0C=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aw_("GET",d)
o=A.h3Z()
if(o==null)o=new A.MA(A.a([],y.W))
x=7
return A.b(o.f8(0,s).dh(0,C.GB),$async$b0C)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CQ(),$async$b0C)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cj(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0C,w)},
b0B(d){return B.hTm(d)},
hTm(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0B=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vN(d,null).dh(0,C.ol),$async$b0B)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.ma(A.m8(p.e)).cH(0,p.w),null)
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
return A.i($async$b0B,w)},
cdm(d){return B.hTn(d)},
hTn(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vN(d,null).dh(0,C.qu),$async$cdm)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ma(A.m8(q.e)).cH(0,q.w)
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
return A.i($async$cdm,w)},
cdo:function cdo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jB:function jB(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jh(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hTu(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.Jh(C.a.b2(t,u.length))}return null},
hTv(d){var x=B.Jh(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hTq(){var x,w=$.os(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7L(d){return B.hTr(d)},
hTr(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bL),$async$a7L)
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
return A.i($async$a7L,w)},
a7M(d,e){return B.hTs(d,e)},
hTs(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7M=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cL,null),$async$a7M)
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
return A.i($async$a7M,w)},
Ci(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ci=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Ci)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jh(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7N(r),$async$Ci)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7L("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ci)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jh(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ci)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hTq()
x=14
return A.b(B.a7N(m),$async$Ci)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7M("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ci)
case 15:k=f
x=16
return A.b(B.a7M("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ci)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ci)
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
return A.i($async$Ci,w)},
a7N(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jh(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7L("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7N)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7N,w)},
a7O(d,e,f,g){return B.hTw(d,e,f,g)},
hTw(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7O=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jh(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7N(r),$async$a7O)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.cdu())>1048576||g.aV(d,new B.cdv())){v=B.Fg(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a7Z("myCode",d,a0),$async$a7O)
case 4:u=a3
try{t=C.Y.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cr(s)||J.ad(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fg(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0K(u,g.gI(d),a0),$async$a7O)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.os().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dL(d,new B.cdw(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0D(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a7O)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7O,w)},
Fg(d,e,f,g,h){return B.hTt(d,e,f,g,h)},
hTt(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fg=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Fg)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cJ(a6,0,new B.cdq())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.os().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cN.aw(99999)
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
a1=B.Jl(a9,q)
a0=new A.L9(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fg)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pk(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abo(a1.a,a4,"media",a1.d,a2).xH(m,n,new A.Ev(!0,q.c)),$async$Fg)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fg)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRU(r),$async$Fg)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dL(a6,new B.cdr(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0D(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fg)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRU(r),$async$Fg)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fg,w)},
b0D(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7L(t),$async$b0D)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cdp(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7M(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0D,w)},
Oc(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oc=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7L("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oc)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cr(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aU(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a3(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b0E(k,a0),$async$Oc)
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
return A.b(B.b0J(h),$async$Oc)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.W6(g,a0),$async$Oc)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cds(),q),n)
d=A.C(new A.Y(r,new B.cdt(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7M("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oc)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oc,w)},
b0E(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cr(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aU(h),r=y.f,q=0
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
o=A.aI(o.h(p,"partCount"))
j=o==null?null:C.j.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ioa(k,j)
C.d.v(s,i)
x=5
return A.b(B.DE(l,m,"Received via My Code",t,e,i),$async$b0E)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRU(s),$async$b0E)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0E,w)},
cdu:function cdu(){},
cdv:function cdv(){},
cdw:function cdw(){},
cdq:function cdq(){},
cdr:function cdr(){},
cdp:function cdp(){},
cds:function cds(){},
cdt:function cdt(){},
fV8(d,e){var x=0,w=A.j(y.H)
var $async$fV8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.eb(new B.fV9(e),!1,null,y.H)),$async$fV8)
case 2:return A.h(null,w)}})
return A.i($async$fV8,w)},
bFG(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFG=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.eb(new B.fVa(g,e,f),!1,null,y.y)),$async$bFG)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFG,w)},
fV9:function fV9(d){this.a=d},
fVa:function fVa(d,e,f){this.a=d
this.b=e
this.c=f},
VX:function VX(d,e){this.c=d
this.a=e},
aEP:function aEP(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dYd:function dYd(d,e){this.a=d
this.b=e},
W0:function W0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aES:function aES(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZm:function dZm(d){this.a=d},
dZn:function dZn(d){this.a=d},
dZo:function dZo(d){this.a=d},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZp:function dZp(d){this.a=d},
dZq:function dZq(d){this.a=d},
dZr:function dZr(d,e){this.a=d
this.b=e},
dZs:function dZs(d,e){this.a=d
this.b=e},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZu:function dZu(d){this.a=d},
dZx:function dZx(){},
dZv:function dZv(d){this.a=d},
dZw:function dZw(d,e){this.a=d
this.b=e},
bkR:function bkR(){},
VY:function VY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEQ:function aEQ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dYe:function dYe(d){this.a=d},
dYf:function dYf(d){this.a=d},
h7B(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hTy(d){var x=d.l3
if(x>=0)return x
return 4.99},
hTx(d){var x=d.m4,w=y.N
w=x.jq(x,new B.cdy(),w,w)
return w},
how(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdz(),w,w)
return w},
b0H(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0H)
case 7:s=f
r=A.w(p)
r=A.aT(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b0H,w)},
a7Q(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7Q)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7Q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7Q,w)},
W_(d){var x=0,w=A.j(y.H),v,u
var $async$W_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$W_)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$W_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$W_,w)},
h7A(d,e){var x,w,v
if(B.hTy(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hTx(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0F(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.how(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hox(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.how(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dv(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqs(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqs)
case 7:s=f
r=A.w(p)
r=A.eo(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aqs,w)},
aqt(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqs(d),$async$aqt)
case 3:u=f
x=5
return A.b(A.az(),$async$aqt)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqt,w)},
aqr(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h7B(d)
if(u<=0){v=!1
x=1
break}if(B.h7A(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqs(e),$async$aqr)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqr,w)},
b0G(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jj(e,d),$async$b0G)
case 3:if(g){v=-1
x=1
break}u=B.h7B(d)
if(u<=0){v=-1
x=1
break}if(B.h7A(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqs(e),$async$b0G)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0G,w)},
cdB(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jj(e,d),$async$cdB)
case 3:if(h){v=!1
x=1
break}v=B.aqr(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdB,w)},
cdA(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdA=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdB(d,u,i.gUt()),$async$cdA)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdA,w)},
a7P(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7P=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUt()){v=!0
x=1
break}if(B.b0F(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.TN),$async$a7P)
case 5:x=k?3:4
break
case 3:B.hox(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7P)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lc(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TN,"Doc Share for Organizations"),$async$a7P)
case 7:if(!k){v=!1
x=1
break}B.hox(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7P)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7P,w)},
cdy:function cdy(){},
cdz:function cdz(){},
fW1(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fW1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fW1)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fny.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fny.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fW1,w)},
ir2(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fny.bt($.fny,new B.fW3(d))},
fW3:function fW3(d){this.a=d},
fp9(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fp9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.n3(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jm,null,y.H),$async$fp9)
case 3:C.B9.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fp9,w)},
agL(d,e,f){var x=0,w=A.j(y.H),v
var $async$agL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.foc.n(0,d,new B.acR(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$agL)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.az(A.I(["parts",e,"size",f],v,y.C),null)),$async$agL)
case 2:return A.h(null,w)}})
return A.i($async$agL,w)},
agF(d){return B.i8W(d)},
i8W(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.foc.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agF)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b7(s,new B.fsK(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.acR(r)
$.foc.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agF,w)},
RB(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.H1.n(0,d,u)
x=3
return A.b(B.S7(d,u),$async$RB)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RB,w)},
aPH(d){return B.i8U(d)},
i8U(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H1.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.S6(d),$async$aPH)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H1.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPH)
case 4:s=f
r=A.aT(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aN(r)
x=!J.cr(q)?9:10
break
case 9:B.RB(d,q)
x=11
return A.b(J.hk(s,d),$async$aPH)
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
return A.i($async$aPH,w)},
i4K(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wO(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2I(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bE,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fz(r,"loadend",new B.fyv(r,t),!1,s)
A.fz(r,"error",new B.fyw(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iG(0,C.NN,new B.fyx())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2I,w)},
aQ0(d,e,f){return B.ibi(d,e,f)},
ibi(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQ0=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2I(i),$async$aQ0)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.S7(o,p),$async$aQ0)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agL(k,j,s),$async$aQ0)
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
return A.i($async$aQ0,w)},
aQ_(d,e,f){return B.ibh(d,e,f)},
ibh(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQ_=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQ0(d,e,f),$async$aQ_)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2I(f),$async$aQ_)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H1.n(0,s,r)
$.RS.n(0,s,r)
x=11
return A.b(B.RB(s,r),$async$aQ_)
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
return A.i($async$aQ_,w)},
Cj(d,e,f,g,h,i){return B.hTH(d,e,f,g,h,i)},
hTH(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cj=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cN.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jB(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b0N(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RB(s,d),$async$Cj)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cj)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cP.gcu().aN(d)),$async$Cj)
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
return A.b(B.Bf(e),$async$Cj)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Hb(e,j),$async$Cj)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cj,w)},
W1(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W1=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bf(d),$async$W1)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cN.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hoz(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jB(m,n,k,l,j,"From folder",null,B.b0N(),null)
$.ahe.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2I(o),$async$W1)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H1.n(0,h,g)
$.RS.n(0,h,g)
B.RB(h,g)
x=9
break
case 10:x=11
return A.b(B.aQ_(d,m,o),$async$W1)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hb(d,t),$async$W1)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W1,w)},
h7F(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h7F=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hoz(r,C.d.gan(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jk(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cj(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7F,w)},
Jk(d,e,f,g,h,i){return B.hTG(d,e,f,g,h,i)},
hTG(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jk=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cN.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L9(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jk)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.h7(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.SE(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.S7(k,l),$async$Jk)
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
return A.b(j.a1(0),$async$Jk)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.S7(k,new Uint8Array(A.cb(n))),$async$Jk)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agL(r,q,g),$async$Jk)
case 16:f=new B.jB(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b0N(),null)
x=17
return A.b(B.Bf(d),$async$Jk)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hb(d,e),$async$Jk)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jk,w)},
W3(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$W3=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahe.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2I(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agF(s),$async$W3)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.S6(u[o]),$async$W3)
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
v=A.wO(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RS.h(0,s)
if(i==null)i=$.H1.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rR(d,e),$async$W3)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.RS.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wO(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W3,w)},
hoz(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gan(x):""
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
rR(d,e){return B.hTI(d,e)},
hTI(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rR=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RS.h(0,f)
if(e==null)e=$.H1.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahe.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2I(s),$async$rR)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H1.n(0,f,r)
$.RS.n(0,f,r)
B.RB(f,r)
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
return A.b(B.agF(f),$async$rR)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azD(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.S6(g[l]),$async$rR)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apO()
if(!C.aI.gau(r)){$.H1.n(0,f,r)
$.RS.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPH(f),$async$rR)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.RS.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.W3(a0,a1,0,g),$async$rR)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cb(i))
$.H1.n(0,f,h)
$.RS.n(0,f,h)
B.RB(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rR,w)},
hTL(d){var x,w,v=$.ahe.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hTM(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hTJ(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqz(d,e,f,g,h){return B.hTK(d,e,f,g,h)},
hTK(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqz=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahe.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2I(s),$async$aqz)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rR(g,e),$async$aqz)
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
return A.b(n.iB(d).xH(h,r,new A.Ev(!0,e.c)),$async$aqz)
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
return A.i($async$aqz,w)},
hoB(d,e,f,g,h){var x,w,v,u,t=$.hoA
$.hoA=t+1
x=Date.now()
w=""+1000*x+"_"+C.cN.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdM.n(0,t,new B.bxF(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azD(u)))
return t},
h7G(d){var x=0,w=A.j(y.H)
var $async$h7G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h7G,w)},
Jl(d,e){var $async$Jl=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahe.h(0,h)
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
return A.qs(B.W3(d,e,p,o<q?o:q),$async$Jl,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qs(A.Gz(n),$async$Jl,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qs(B.agF("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jl,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qs(B.S6(h[l]),$async$Jl,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qs(A.Gz(k),$async$Jl,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qs(B.rR(d,e),$async$Jl,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qs(A.Gz(A.wO(j,p,o<i?o:i)),$async$Jl,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qs(null,0,w)
case 2:return A.qs(t.at(-1),1,w)}})
var x=0,w=A.hxn($async$Jl,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hz9(w)},
b0P(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdM.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5z(),$async$b0P)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0P,w)},
W2(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$W2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdM.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5z(),$async$W2)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agL(r.c,u,r.z),$async$W2)
case 4:t=new B.jB(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b0N(),null)
u=r.a
x=5
return A.b(B.Bf(u),$async$W2)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hb(u,s),$async$W2)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W2,w)},
a7W(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdM.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahW(u[s]),$async$a7W)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a7W,w)},
cdO(d,e,f){var x=0,w=A.j(y.H)
var $async$cdO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCG(d,e,f),$async$cdO)
case 2:return A.h(null,w)}})
return A.i($async$cdO,w)},
cdP(d,e,f){var x=0,w=A.j(y.H)
var $async$cdP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCH(d,e,f),$async$cdP)
case 2:return A.h(null,w)}})
return A.i($async$cdP,w)},
Fh(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bf(d),$async$Fh)
case 2:p=g
J.nR(p,new B.cdN(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H1.W(0,v)
$.ahe.W(0,e)
x=3
return A.b(B.agF(v),$async$Fh)
case 3:u=g
$.foc.W(0,v)
x=4
return A.b(A.az(),$async$Fh)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fh)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fh)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahW(s[q]),$async$Fh)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahW(v),$async$Fh)
case 13:x=14
return A.b(B.Hb(d,p),$async$Fh)
case 14:return A.h(null,w)}})
return A.i($async$Fh,w)},
b0O(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rR(d,e),$async$b0O)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fp9(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0O,w)},
Bf(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bf)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fyy(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bf,w)},
Hb(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hb)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fCJ(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$Hb)
case 3:return A.h(null,w)}})
return A.i($async$Hb,w)},
bCG(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bf(d),$async$bCG)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fwJ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFT(f))
x=4
return A.b(B.Hb(d,u),$async$bCG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCG,w)},
bCH(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bf(d),$async$bCH)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fwK(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOc(f))
x=4
return A.b(B.Hb(d,u),$async$bCH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCH,w)},
acR:function acR(d){this.a=d},
fsK:function fsK(){},
fyv:function fyv(d,e){this.a=d
this.b=e},
fyw:function fyw(d){this.a=d},
fyx:function fyx(){},
cdN:function cdN(d){this.a=d},
bxF:function bxF(d,e,f,g,h,i,j,k,l){var _=this
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
fyy:function fyy(){},
fCJ:function fCJ(){},
fwJ:function fwJ(d){this.a=d},
fwK:function fwK(d){this.a=d},
a7X(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.cdS())?3:4
break
case 3:x=5
return A.b(B.b0Q(d,e),$async$a7X)
case 5:u=g
if(u!=null){t=u.c
B.Oe(d,u.b,e,t)}v=u
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
return A.b(B.b0L(s),$async$a7X)
case 10:case 9:if(g){v=new A.QX(1,D.Tq,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.W4(d,e),$async$a7X)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.W9(!0,!0,d,e),$async$a7X)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oe(d,D.Ad,e,t)
v=new A.QX(p,D.Ad,t)
x=1
break}v=B.cdR(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7X,w)},
W4(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$W4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7Z(null,d,e),$async$W4)
case 3:p=g
try{u=C.Y.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cr(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0K(p,d.length,e),$async$W4)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdP(e,C.d.gH(d).a,r.b),$async$W4)
case 7:case 6:q=r.a
x=8
return A.b(B.Oe(d,D.Tq,e,q),$async$W4)
case 8:v=new A.QX(d.length,D.Tq,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W4,w)},
W5(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$W5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n6)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7Y(d,e),$async$W5)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdK(s,d,e,t),$async$W5)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0L(t),$async$W5)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rR(e,d),$async$W5)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.W4(A.a([d],y.r),e),$async$W5)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W5,w)},
W7(){var x=0,w=A.j(y.H)
var $async$W7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h7z(),$async$W7)
case 2:x=3
return A.b(B.aSg(),$async$W7)
case 3:return A.h(null,w)}})
return A.i($async$W7,w)},
a7Y(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0N()
x=3
return A.b(B.cdO(e,d.a,u),$async$a7Y)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Y,w)},
Oe(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tq&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7Y(p,f),$async$Oe)
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
return A.b(B.cdJ(o,p,u,f),$async$Oe)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdK(o,p,f,t),$async$Oe)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdI(o,u,p,f),$async$Oe)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oe,w)},
b0Q(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdQ(e,d),$async$b0Q)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.W9(!1,!0,d,e),$async$b0Q)
case 4:u=g
if(u!=null){t=u.b
v=new A.QX(u.a,D.Ad,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Q,w)},
cdQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.W3(d,s,0,1),$async$cdQ)
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
return A.i($async$cdQ,w)},
cdR(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7Z(null,d,e),$async$cdR)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hoy(u)
if(t.length>800){v=null
x=1
break}v=new A.QX(d.length,D.dOH,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdR,w)},
aqA(d,e,f){return B.hTP(d,e,f)},
hTP(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqA=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.nq(g,1)
x=B.h7E(g)?3:4
break
case 3:x=5
return A.b(B.cdL(g),$async$aqA)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fi(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b0J(q),$async$aqA)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W6(p,a0)
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
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h7D(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W6(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.Jm(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.Jm(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aC(k,0,k.length-1)
else h=k
v=B.Jm(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.W6(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqA,w)},
Jm(d,e,f){return B.hTN(d,e,f)},
hTN(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jm=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aC(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0B(r),$async$Jm)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0B(A.cF(s,0,null)),$async$Jm)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdn(o,r,a1,n,a2),$async$Jm)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cdm(q),$async$Jm)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.W6(l,a2),$async$Jm)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cr(m)?null:m
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
return A.i($async$Jm,w)},
a7Z(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rR(f,r),$async$a7Z)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cP.gcu().aN(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.az(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Z,w)},
W6(d,e){return B.hTO(d,e)},
hTO(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$W6=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Y.aQ(0,a2,null)
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
e=J.aU(r)
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
break}i=C.cI.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cj(i,a3,d,k,l,o),$async$W6)
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
return A.i($async$W6,w)},
Od:function Od(d,e){this.a=d
this.b=e},
cdS:function cdS(){},
a2h(d){var x=A.S(d).ax.a===C.J,w=x?D.ahZ:D.afy,v=x?D.ajM:C.c,u=x?C.aP:C.S,t=x?C.bK:C.am,s=x?D.agY:C.aO
return new A.aHQ([w,s,v,u,t,x?C.fo:C.bR])},
hEv(d,e){var x=e?C.w.j(0.72):C.aU
return A.ce(null,x,!0,null,new B.h_c(e),d,null,!0,!0,y.N)},
cdx(d,e,f,g,h,i,j,k,l){return new B.VZ(e,l,d,f,k,j,g,h,i,null)},
a_e(d,e,f,g,h,i,j){return new B.bfp(g,h,j,e,i,d,f,null)},
h_c:function h_c(d){this.a=d},
a_b:function a_b(d,e){this.c=d
this.a=e},
aAP:function aAP(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dbT:function dbT(d){this.a=d},
dbR:function dbR(d){this.a=d},
dbS:function dbS(d){this.a=d},
bxh:function bxh(){},
VZ:function VZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
aER:function aER(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dZk:function dZk(d){this.a=d},
dYI:function dYI(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYh:function dYh(d,e,f){this.a=d
this.b=e
this.c=f},
dYg:function dYg(d){this.a=d},
dYi:function dYi(d,e){this.a=d
this.b=e},
dYn:function dYn(d,e,f){this.a=d
this.b=e
this.c=f},
dYm:function dYm(d){this.a=d},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d){this.a=d},
dYF:function dYF(d,e,f){this.a=d
this.b=e
this.c=f},
dYC:function dYC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYl:function dYl(d){this.a=d},
dYN:function dYN(d){this.a=d},
dYM:function dYM(){},
dYr:function dYr(d){this.a=d},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dYD:function dYD(d,e){this.a=d
this.b=e},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dYV:function dYV(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYW:function dYW(){},
dYX:function dYX(){},
dYY:function dYY(d,e){this.a=d
this.b=e},
dZ_:function dZ_(){},
dZ0:function dZ0(d){this.a=d},
dYT:function dYT(d,e){this.a=d
this.b=e},
dYO:function dYO(d){this.a=d},
dYP:function dYP(d){this.a=d},
dYQ:function dYQ(d){this.a=d},
dYR:function dYR(d){this.a=d},
dYS:function dYS(d){this.a=d},
dYo:function dYo(){},
dYp:function dYp(d){this.a=d},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYk:function dYk(d,e){this.a=d
this.b=e},
dYj:function dYj(d,e,f){this.a=d
this.b=e
this.c=f},
dYG:function dYG(d){this.a=d},
dYH:function dYH(d,e,f){this.a=d
this.b=e
this.c=f},
dYA:function dYA(d,e){this.a=d
this.b=e},
dYw:function dYw(d){this.a=d},
dYt:function dYt(d,e,f){this.a=d
this.b=e
this.c=f},
dYx:function dYx(d){this.a=d},
dYy:function dYy(d){this.a=d},
dYz:function dYz(){},
dYB:function dYB(d,e){this.a=d
this.b=e},
dYu:function dYu(d){this.a=d},
dYs:function dYs(d,e,f){this.a=d
this.b=e
this.c=f},
dYv:function dYv(){},
dYL:function dYL(d){this.a=d},
dYK:function dYK(d,e){this.a=d
this.b=e},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d){this.a=d},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d){this.a=d},
dZh:function dZh(d){this.a=d},
dZf:function dZf(d){this.a=d},
dZg:function dZg(d){this.a=d},
dZi:function dZi(){},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZb:function dZb(d,e){this.a=d
this.b=e},
dZc:function dZc(d,e,f){this.a=d
this.b=e
this.c=f},
dZa:function dZa(d,e,f){this.a=d
this.b=e
this.c=f},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZe:function dZe(d,e){this.a=d
this.b=e},
aAM:function aAM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfo:function bfo(d,e,f){this.c=d
this.d=e
this.a=f},
dbP:function dbP(){},
dbQ:function dbQ(){},
ada:function ada(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcc:function dcc(){},
dcb:function dcb(d){this.a=d},
a_d:function a_d(d,e,f){this.c=d
this.d=e
this.a=f},
aAR:function aAR(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dc8:function dc8(d){this.a=d},
dc9:function dc9(d,e,f){this.a=d
this.b=e
this.c=f},
dca:function dca(d,e){this.a=d
this.b=e},
dc6:function dc6(d,e){this.a=d
this.b=e},
dc4:function dc4(d){this.a=d},
dc2:function dc2(d){this.a=d},
dc_:function dc_(d){this.a=d},
dc5:function dc5(d){this.a=d},
dc1:function dc1(d){this.a=d},
dc7:function dc7(d){this.a=d},
dc3:function dc3(d){this.a=d},
dc0:function dc0(d){this.a=d},
a_a:function a_a(d,e,f){this.c=d
this.d=e
this.a=f},
aAO:function aAO(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbM:function dbM(d){this.a=d},
dbL:function dbL(d,e){this.a=d
this.b=e},
dbN:function dbN(d){this.a=d},
dbK:function dbK(d,e){this.a=d
this.b=e},
dbO:function dbO(d){this.a=d},
dbJ:function dbJ(d,e){this.a=d
this.b=e},
dbF:function dbF(d){this.a=d},
dbG:function dbG(d){this.a=d},
dbH:function dbH(d,e){this.a=d
this.b=e},
dbI:function dbI(d){this.a=d},
Qw:function Qw(d,e,f){this.c=d
this.d=e
this.a=f},
aAU:function aAU(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcp:function dcp(d){this.a=d},
dcq:function dcq(d){this.a=d},
dcr:function dcr(d){this.a=d},
dcs:function dcs(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcu:function dcu(d){this.a=d},
dcw:function dcw(d){this.a=d},
dcv:function dcv(d){this.a=d},
a_f:function a_f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAS:function aAS(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dcl:function dcl(d,e){this.a=d
this.b=e},
dcm:function dcm(d,e){this.a=d
this.b=e},
dcd:function dcd(d,e,f){this.a=d
this.b=e
this.c=f},
dce:function dce(d){this.a=d},
dcf:function dcf(){},
dck:function dck(){},
dcg:function dcg(d,e){this.a=d
this.b=e},
dch:function dch(d,e){this.a=d
this.b=e},
dci:function dci(d,e){this.a=d
this.b=e},
dcj:function dcj(d,e){this.a=d
this.b=e},
ad8:function ad8(d,e){this.c=d
this.a=e},
dbE:function dbE(d){this.a=d},
a_9:function a_9(d){this.a=d},
aAN:function aAN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_g:function a_g(d,e){this.c=d
this.a=e},
aAT:function aAT(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dco:function dco(d){this.a=d},
dcn:function dcn(d){this.a=d},
bfp:function bfp(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hTQ(){var x,w=$.os(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
Of(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Of=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Of)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bL),$async$Of)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
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
return A.i($async$Of,w)},
a8_(d){return B.hTR(d)},
hTR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8_)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cL,null),$async$a8_)
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
return A.i($async$a8_,w)},
W8(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Of(),$async$W8)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dM(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8_(s),$async$W8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W8,w)},
W9(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$W9=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$W9)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cdU(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hTQ()
t=A.U(u).k("N<1,a8<n,aE>>")
r=A.C(new A.N(u,new B.cdV(s),t),t.k("ak.E"))
x=6
return A.b(B.Of(),$async$W9)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8_(q),$async$W9)
case 7:x=8
return A.b(B.a80(r,u,g,s),$async$W9)
case 8:v=new A.brc(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W9,w)},
aqB(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Of(),$async$aqB)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqB,w)},
cdW(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Of(),$async$cdW)
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
return A.i($async$cdW,w)},
a80(d,e,f,g){return B.hTS(d,e,f,g)},
hTS(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a80=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqz("media",r,new B.cdT(s,e,g),f,q),$async$a80)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W8(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a80)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W8(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a80)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W8(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a80)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a80,w)},
Fi(d,e,f){return B.hTT(d,e,f)},
hTT(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fi=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$Fi)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqB(b3),$async$Fi)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iJ,null,g),$async$Fi)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqB(b3),$async$Fi)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Of(),$async$Fi)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aI(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.j.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cr(a4)){v=null
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
b0=A.pk(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abo(a8.a,b0,"media",a8.d,a9).Db(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0C(k,n,o,s,b7),$async$Fi)
case 17:j=c0
if(j!=null){J.c6(p,j);++q
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
a8=A.pk(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abo(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fi)
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
a0=A.dM(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8_(e),$async$Fi)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fi,w)},
cdU:function cdU(){},
cdV:function cdV(d){this.a=d},
cdT:function cdT(d,e,f){this.a=d
this.b=e
this.c=f},
aSg(){var x=0,w=A.j(y.H),v,u
var $async$aSg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i3X=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aSg)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aSg)
case 3:u=$.hd1
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aSg)
case 4:$.hd1=$.id5=$.id6=null
return A.h(null,w)}})
return A.i($async$aSg,w)},
fCk(d){var x=0,w=A.j(y.H),v,u
var $async$fCk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a94){x=1
break}u=new A.bk($.bE,y.d4)
d.c=new B.fCl(new A.c2(u,y.aY))
x=3
return A.b(u.iG(0,C.ib,new B.fCm()),$async$fCk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fCk,w)},
id3(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hTA(x):x},
hd5(d){var x=0,w=A.j(y.T),v,u,t
var $async$hd5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqD(u)
x=1
break}v=B.h7D(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hd5,w)},
hd4(d){var x=0,w=A.j(y.T),v,u,t
var $async$hd4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqE(u)
x=1
break}v=B.h7D(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hd4,w)},
fVL(d){var x=0,w=A.j(y.T),v
var $async$fVL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqE(d),$async$fVL)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVL,w)},
bDz(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hd4(d),$async$bDz)
case 3:q=f
if(q==null){x=1
break}t=C.Y.aQ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDz,w)},
fq0(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fq0=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.W2(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cj(d.apO(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fq0,w)},
Hd(d,e,f){return B.ifw(d,e,f)},
ifw(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hd=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hd5(a1),$async$Hd)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Y.aQ(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hGv().aG9(D.dCD,null),$async$Hd)
case 4:l=d.hd1=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azD(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bE,y.b1)
l.y=new B.fCW(f,k,new B.fCX(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8C(0,new B.Yg(r,"offer")),$async$Hd)
case 5:d=l
x=7
return A.b(l.ame(0),$async$Hd)
case 7:x=6
return A.b(d.a8u(0,a4),$async$Hd)
case 6:x=8
return A.b(B.fCk(l),$async$Hd)
case 8:x=9
return A.b(l.aqA(),$async$Hd)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.id3(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqF(m,h),$async$Hd)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hoy(h)
case 11:v=new A.bqs(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hd,w)},
fCl:function fCl(d){this.a=d},
fCm:function fCm(){},
fCX:function fCX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCW:function fCW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fCV:function fCV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ihB(d){switch(d){case"new":return D.eyg
case"checking":return D.eyh
case"connected":return D.eyj
case"completed":return D.eyi
case"failed":return D.eyl
case"disconnected":return D.eym
case"closed":return D.aQG
case"count":return D.eyk}return D.aQG},
ihC(d){switch(d){case"new":return D.aQH
case"gathering":return D.eyn
case"complete":return D.a94}return D.aQH},
isz(d){switch(d){case"stable":return D.eyo
case"have-local-offer":return D.eyp
case"have-local-pranswer":return D.eyr
case"have-remote-offer":return D.eyq
case"have-remote-pranswer":return D.eys
case"closed":return D.aQN}return D.aQN},
iqK(d){switch(d){case"new":return D.aQK
case"connecting":return D.aQL
case"connected":return D.aQM
case"closed":return D.a95
case"disconnected":return D.aQJ
case"failed":return D.aQI}return D.a95},
aak:function aak(d,e){this.a=d
this.b=e},
Ph:function Ph(d,e){this.a=d
this.b=e},
Yf:function Yf(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e){this.a=d
this.b=e},
FM:function FM(d,e){this.a=d
this.b=e},
cry:function cry(){},
h9o(d){var x=new B.FL()
x.a=d
x.b=!0
return x},
FL:function FL(){this.b=this.a=$},
aaj:function aaj(){},
ava:function ava(){},
Yg:function Yg(d,e){this.a=d
this.b=e},
h7z(){var x=0,w=A.j(y.H)
var $async$h7z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h7z,w)},
h7C(d,e,f){var x=0,w=A.j(y.T),v
var $async$h7C=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n6))){v=null
x=1
break}v=B.fW1(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7C,w)},
hoy(d){var x,w=F.aeX.a5i(C.dS.aN(d),null)
if(w.length===0){x=C.dS.aN(d)
return C.cP.gcu().aN(x)}return C.cP.gcu().aN(w)},
hTz(d){var x,w,v=C.cI.aN(d)
try{x=C.c9.cH(0,F.aeW.bfN(v,!1))
return x}catch(w){x=C.c9.cH(0,v)
return x}},
h7D(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hTz(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cH(0,C.cI.aN(x))
return v}catch(u){return x}}return null},
hTA(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.a0(t,"a=extmap"))continue
if(C.a.a0(t,"a=ssrc"))continue
if(C.a.a0(t,"a=msid"))continue
if(C.a.a0(t,"a=rtcp"))continue
if(C.a.a0(t,"a=rtpmap"))continue
if(C.a.a0(t,"a=fmtp"))continue
if(C.a.a0(t,"a=rtcp-fb"))continue
if(C.a.a0(t,"a=mid:"))continue
if(C.a.a0(t,"a=group:"))continue
if(C.a.a0(t,"a=setup:"))continue
if(C.a.a0(t,"a=ice-options:"))continue
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aO(s,"\n")},
hTB(){var x,w=$.os(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0I(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bL),$async$b0I)
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
return A.i($async$b0I,w)},
cdC(d,e){return B.hTC(d,e)},
hTC(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cL,null),$async$cdC)
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
return A.i($async$cdC,w)},
b0L(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0I(d),$async$b0L)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0L,w)},
b0K(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0K=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hTB()
r=C.a.i(f)
t=C.dS.aN(s)
x=3
return A.b(B.cdC(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0K)
case 3:if(!h){v=null
x=1
break}v=new A.a1h("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0K,w)},
b0J(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0I(o),$async$b0J)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cH(0,C.cI.aN(u))
if(J.j7(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0J,w)},
cdD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEw("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cL),$async$cdD)
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
return A.i($async$cdD,w)},
b0M(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ji(),$async$b0M)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0M,w)},
aqw(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqw)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0M(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqw,w)},
aqu(d,e){var x=0,w=A.j(y.H)
var $async$aqu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqu)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqu)
case 2:return A.h(null,w)}})
return A.i($async$aqu,w)},
a7S(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7S=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7S)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7S)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a7R(s),$async$a7S)
case 5:x=6
return A.b(B.aqu(f,u),$async$a7S)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7S,w)},
a7T(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7T=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7T)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7T)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a3(r,y.N,y.z)
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
return A.b(B.aqu(g,q),$async$a7T)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7R(u),$async$a7T)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
a7U(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7U=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7U)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ji(),$async$a7U)
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
s=B.b0F(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7U)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a7U)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7U,w)},
cdE(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdE)
case 7:s=f
p=A.w(n)
r=A.aT(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aQ(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a3(q,y.N,y.z)
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
return A.i($async$cdE,w)},
Jj(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdE(d),$async$Jj)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0M(t),$async$Jj)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqv(d),$async$Jj)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0F(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqv(d),$async$Jj)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jj,w)},
aqv(d){var x=0,w=A.j(y.H)
var $async$aqv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqv)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqv)
case 2:return A.h(null,w)}})
return A.i($async$aqv,w)},
b0N(){var x,w=$.os(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7V(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h7E(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdH(d){return B.hTE(d)},
hTE(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7V(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bL),$async$cdH)
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
return A.i($async$cdH,w)},
aqy(d,e){return B.hTF(d,e)},
hTF(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqy=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7V(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cL,null),$async$aqy)
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
return A.i($async$aqy,w)},
cdJ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdJ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7V(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqy(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdJ,w)},
cdI(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdI=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7V(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqy(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdI,w)},
cdK(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdK=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7V(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqy(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdK,w)},
cdL(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h7E(d)){v=null
x=1
break}x=3
return A.b(B.cdH(d),$async$cdL)
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
return A.i($async$cdL,w)},
a81(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a81=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a81)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bL),$async$a81)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
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
return A.i($async$a81,w)},
aqC(d){return B.hTU(d)},
hTU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$aqC)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cL,null),$async$aqC)
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
return A.i($async$aqC,w)},
aqD(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqD)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a81(),$async$aqD)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cH(0,C.cI.aN(q))
if(J.j7(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dM(A.a3(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqC(s),$async$aqD)
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
return A.i($async$aqD,w)},
aqF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aqF)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a81(),$async$aqF)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dM(A.a3(s,r,q),r,q)
r=C.dS.aN(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqC(u),$async$aqF)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqF,w)},
aqE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqE)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a81(),$async$aqE)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cH(0,C.cI.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqE,w)},
apz(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apz=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qj)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apz)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hg),$async$apz)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vW(o))
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
return A.i($async$apz,w)},
ioa(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.u(w),5,"0")
return v},
fU2(d){return B.ioc(d)},
ioc(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fU2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Ll(d,3600),$async$fU2)
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
return A.i($async$fU2,w)},
DE(d,e,f,g,h,i){var x=null
return B.io9(d,e,f,g,h,i)},
io9(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DE=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hoB(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h7G(r),$async$DE)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fU2(o),$async$DE)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7W(r),$async$DE)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aUf)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MA(A.a([],g))
x=15
return A.b(d.f8(0,A.aw_("GET",A.cF(n,0,null))).dh(0,C.GB),$async$DE)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7W(r),$async$DE)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L9(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DE)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0P(r,k),$async$DE)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DE)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.W2(r)
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
return A.b(B.a7W(r),$async$DE)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DE,w)},
aRU(d){return B.iob(d)},
iob(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aRU)
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
return A.i($async$aRU,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[159]
O=c[47]
F=c[265]
I=c[150]
P=c[235]
E=c[227]
G=c[94]
Q=c[197]
R=c[151]
S=c[233]
K=c[270]
L=c[278]
B=a.updateHolder(c[22],B)
D=c[276]
T=c[196]
M=c[217]
U=c[73]
V=c[259]
W=c[79]
X=c[62]
N=c[93]
Y=c[277]
B.crz.prototype={
aG9(d,e){return this.cPH(d,e)},
cPH(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aG9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dM(r,s,t)
t.v(0,d)
u=new q(A.kg(A.cv(t)))
t=J.k(u)
v=B.hYx(C.cP.gcu().aN(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aG9,w)}}
B.b5X.prototype={
bC0(d){var x=this,w=x.w
w.onclose=A.hp(new B.cru(x))
w.onopen=A.hp(new B.crv(x))
w.onmessage=A.hp(new B.crw(x))
w.onbufferedamountlow=A.hp(new B.crx(x))},
gdf(d){return this.x},
ais(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ais=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FL()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h9o(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$ais)
case 8:v=t.h9o(s.aoJ(f,0,null))
x=1
break
case 7:case 4:v=B.h9o(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ais,w)}}
B.b5Y.prototype={
bC1(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crA(x)))
w.addEventListener("icecandidate",A.hp(new B.crB(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crC(x)))
w.onicegatheringstatechange=A.hp(new B.crD(x))
w.addEventListener("signalingstatechange",A.hp(new B.crE(x)))
if(!$.hh1())w.addEventListener("connectionstatechange",A.hp(new B.crF(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crG(x)))
w.addEventListener("track",A.hp(new B.crH(x)))},
ame(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ame=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kg(A.cv(A.T(y.N,y.z)))),y.aQ),$async$ame)
case 3:t=f
v=new B.Yg(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ame,w)},
a8u(d,e){return this.bqZ(0,e)},
bqZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8u)
case 2:return A.h(null,w)}})
return A.i($async$a8u,w)},
a8C(d,e){return this.brj(0,e)},
brj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8C)
case 2:return A.h(null,w)}})
return A.i($async$a8C,w)},
aqA(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yg(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqA,w)},
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
B.ad9.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_c.prototype={
S(){return new B.aAQ()},
gd1(){return this.c}}
B.aAQ.prototype={
Y(){this.a3()
this.af1()},
af1(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0G(u.e,u.c),$async$af1)
case 2:t=e
if(v.c!=null)v.m(new B.dbX(v,t))
return A.h(null,w)}})
return A.i($async$af1,w)},
QT(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqr(t.e,t.c,!1),$async$QT)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fjd)
x=1
break}x=4
return A.b(B.a7Q(u.a.c,"individual"),$async$QT)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6S(A.eb(new B.dbU(u),!1,null,y.H)),$async$QT)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QT,w)},
JG(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fAc(o),$async$JG)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7U(o.e,r,s,q),$async$JG)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fge)
x=1
break}x=5
return A.b(B.a7Q(u.a.c,"member"),$async$JG)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6S(A.eb(new B.dbW(u),!1,null,y.H)),$async$JG)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JG,w)},
yC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7P(t.e,o,t.f,t.r,t.w,s),$async$yC)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7Q(u.a.c,"org_owner"),$async$yC)
case 4:x=5
return A.b(B.aqw(u.a.c),$async$yC)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fAH(o),$async$yC)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7S(s,t,o,q.c),$async$yC)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fgb)
x=1
break}x=10
return A.b(B.aqw(u.a.c),$async$yC)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6S(A.eb(new B.dbV(u),!1,null,y.H)),$async$yC)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yC,w)},
B(d){var x,w,v,u=this,t=null,s=A.S(d).ax.a===C.J,r=s?C.jA:C.qh,q=B.h7B(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h4,24)],y.V)
v=y.p
w=A.q(t,A.x(A.a([A.q(t,D.fD2,C.f,t,t,new A.p(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.hb,t,t,t),C.aB,D.fWV,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.p(t,t,t,p,w,D.c8N,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lY(new B.dbZ(),t),C.U,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.S,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adC(C.f5,C.aDe,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gciR(),t),C.af],v))
p.push(new B.adC(C.pq,C.a4J,"Team Member","Sign in with your organization access code + password",u.gcjI(),t))
p.push(C.af)
p.push(new B.adC(C.apj,C.a6m,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcjd(),t))
return A.c4(t,r,A.bm(!0,A.cg(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.amo,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adC.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aJ(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a9(C.a6,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nf,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.S(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.z8,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDt.prototype={}
B.aGB.prototype={}
B.jB.prototype={
mI(d){var x=this.b,w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garh(){var x=this.d
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
bfg(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jB(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOc(d){return this.bfg(null,d)},
aFT(d){return this.bfg(d,null)}}
B.VX.prototype={
S(){return new B.aEP(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEP.prototype={
Y(){this.a3()
this.af2()},
af2(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ci(u.a.c),$async$af2)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dYd(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af2,w)},
af3(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fA(s)),$async$af3)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fk7)
case 1:return A.h(v,w)}})
return A.i($async$af3,w)},
a_t(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_t=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apz(s.d,4),$async$a_t)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.to(r,"ngmy_my_code_"+m+".png"),$async$a_t)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_t,w)},
aiU(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaY("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiU,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===C.J,n=o?C.jA:C.qh,m=o?C.c:C.S,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m1
else if(q.e==null)x=A.at(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.L(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.U,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a5b,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a9(C.a6,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.alY,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cg(A.x(A.a([x,C.nc,w,C.l2,new A.em(A.q(p,A.qb(p,p,!1,B.hTv(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l2,A.A(A.a([A.E(A.es(N.D6,C.VQ,q.gcbk(),p),1),C.au,A.E(A.dh(C.zx,C.abq,q.gcbl(),A.bp(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3u,D.fSu,q.gcyw(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.Oe,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.W0.prototype={
S(){return new B.aES(new A.au(C.aw,$.aw()),A.k8(!0,null,!0,!0,null,null,!1))}}
B.aES.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jh(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a4()},
a_u(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jh(u.d.a.a)
if(t==null){u.m(new B.dZm(u))
x=1
break}u.m(new B.dZn(u))
s=u.a
r=s.c
x=3
return A.b(B.a7O(s.d,new B.dZo(u),t,r),$async$a_u)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZp(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_u,w)},
a2J(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2J=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.dZq(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rR(r.a.c,q),$async$a2J)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZr(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiG(p,m,l,j,k),$async$a2J)
case 8:o=e
if(r.c!=null)r.m(new B.dZs(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZt(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZu(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2J,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===C.J,i=j?D.ahZ:D.afy,h=j?D.ajM:C.c,g=j?C.aP:C.S,f=j?C.bK:C.am,e=j?D.agY:C.aO
i=[i,e,h,g,f,j?C.fo:C.bR]
x=A.S(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.dx(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.dx(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bXd,C.f,k,k,new A.p(k,k,k,A.m(16),k,new A.a9(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.fs,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a5b,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uS(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkR()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.O9,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZv(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.my,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.L(i[1],C.r,1)
m=J.Md(l.a.d,4)
m=A.C(new A.N(m,new B.dZw(x,new A.aHQ(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lg,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.U,e,C.U,q,C.d8,p,C.U,A.q(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.feI)
else q.push(A.X(C.lN,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cT(k,A.A(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b3,new A.p(u,k,s,t,k,k,C.n),C.iH,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.cg(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bER,k,k,C.ah),1)
u=l.f?k:l.gcyx()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a3u,D.fTB,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbm()
t=A.bp(C.aE,k,k,0,C.c,k,C.nD,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lB(new B.dZx(),A.x(A.a([e,new A.D(D.bEl,A.x(A.a([s,C.U,i,C.af,A.bI(l.f?C.ty:D.fRO,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cw,C.a_J,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkR.prototype={
oY(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bB,v.length),C.aQ)}}
B.VY.prototype={
S(){return new B.aEQ()}}
B.aEQ.prototype={
Y(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aQ),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aQ),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.aw,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.T$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.T$=x
v.P$=0
v=w.f
v===$&&A.c()
v.T$=x
v.P$=0
w.a4()},
af4(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dYe(r))
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
return A.b(B.a7T(p,m,n,o,C.a.i(l).length===0?null:l),$async$af4)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fjJ)
s=[1]
x=4
break}p.L(y.q).f.U(D.fim)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dYf(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af4,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J?C.jA:C.qh,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fKd,s,s,s,1,s,!0),p=A.q(s,D.bwr,C.f,s,s,new A.p(s,s,s,A.m(22),s,E.I4,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c3l,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c3g,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c3w,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbn()
u=A.bp(C.aE,s,s,s,s,C.h5,s,s,s,s,s,s)
return A.c4(q,r,A.cg(A.x(A.a([p,C.d8,o,C.af,x,C.af,w,C.nc,A.bI(t.r?C.ty:C.aX4,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.acR.prototype={}
B.bxF.prototype={
a5z(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apO()))
x=3
return A.b(B.S7(t,s),$async$a5z)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5z,w)},
gd1(){return this.a}}
B.Od.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_b.prototype={
S(){return new B.aAP(new A.au(C.aw,$.aw()),A.k8(!0,null,!0,!0,null,null,!1))}}
B.aAP.prototype={
Y(){this.a3()
$.aW.x1$.push(new B.dbT(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a4()},
cbt(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2h(d),u=x.a.c,t=u?C.iB:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jA:v.a[0],p=A.m(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h4,32)],n),l=A.q(w,T.arZ,C.f,w,w,new A.p(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asN,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uS(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxh()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.GO,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b56),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dbR(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.my,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nY,new B.dbS(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.b9(A.m(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cM,12)],n)
g=y.p
return A.eO(w,C.L,new A.cR(Q.LP,A.c3(new A.D(C.yN,A.x(A.a([l,C.aR,k,C.U,j,C.dY,i,C.dY,A.A(A.a([f,C.au,A.E(A.c3(A.aJ(!1,C.a3,!0,w,A.aP(!1,A.m(14),!0,D.erE,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbs(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.p(w,w,w,h,n,L.Q6,C.n),C.bj),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.p(t,w,o,p,m,w,C.n),C.bj),w),w,w,w,C.Oh,C.d7,w,w,w)}}
B.bxh.prototype={
oY(d,e){return e.am8(e.a.toUpperCase())}}
B.VZ.prototype={
S(){return new B.aER(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aER.prototype={
Y(){var x=this
x.a3()
x.ul()
x.w=A.df(C.jD,new B.dZk(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.W7()
this.a4()},
a1B(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$a1B)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bf(u.a.c),$async$a1B)
case 4:u.m(new s.dYI(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1B,w)},
ul(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ul=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$ul)
case 3:t=e
x=4
return A.b(B.Bf(u.a.c),$async$ul)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dYJ(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O5(u.d)
B.Ci(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ul,w)},
O5(d){return this.bG3(d)},
bG3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7Y(r,u.a.c),$async$O5)
case 8:p=f
if(u.c==null){x=1
break}new B.dYh(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n6))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.W5(r,u.a.c),$async$O5)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bf(u.a.c),$async$O5)
case 12:u.m(new o.dYi(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
Ou(d){return this.bMl(d)},
bMl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7Y(d,u.a.c),$async$Ou)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dYn(u,d,t))
x=6
return A.b(A.fG(new A.fA(t)),$async$Ou)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fA(r.toUpperCase())),$async$Ou)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ou,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
um(d,e){return this.cJr(d,e)},
cJr(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$um=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZ8(r,e))
u=3
x=6
return A.b(d.$0(),$async$um)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZ9(r))
$.eX.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$um,w)},
gaXC(){var x=this.a
return x.f||x.r||x.w},
IB(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXC()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdA(s,n,r,q,o,t),$async$IB)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fNt(o,u.a.c),$async$IB)
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
return A.b(B.DG(s,o,r,q,n,t),$async$IB)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IB,w)},
a0F(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqw(u.a.c),$async$a0F)
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
return A.b(A.a6(t,!1).cd(A.eb(new B.dYF(u,r,q),!1,null,y.H)),$async$a0F)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0F,w)},
a1L(d){return this.cs4(d)},
cs3(){return this.a1L(1)},
cs4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXC()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqt(u.a.c),$async$a1L)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1L,w)},
acV(d,e,f){return this.c2l(d,e,f)},
c2l(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.um(new B.dYC(u,d,null,e,f),"Uploading\u2026"),$async$acV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acV,w)},
bGc(){B.hDE(!1,new B.dYl(this))
return},
cx7(){this.m(new B.dYN(this))},
aAo(){var x=0,w=A.j(y.H),v=this
var $async$aAo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGc()
return A.h(null,w)}})
return A.i($async$aAo,w)},
acR(){var x=0,w=A.j(y.H),v=this
var $async$acR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.um(new B.dYr(v),"Importing\u2026"),$async$acR)
case 2:return A.h(null,w)}})
return A.i($async$acR,w)},
SZ(d){return this.cIL(d)},
cIL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dZ5(u,d),!1,null,y.H)),$async$SZ)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S6)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.eb(new B.dZ6(u,d),!1,null,y.H)),$async$SZ)
case 8:x=1
break
case 7:x=u.c33(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.eb(new B.dZ7(u,d),!1,null,y.H)),$async$SZ)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SZ,w)},
c33(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cRY,C.a.b2(x,w+1).toLowerCase())},
agC(d){return this.ciV(d)},
ciV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYD(u,d),!1,null,y.H)),$async$agC)
case 5:x=1
break
case 4:u.m(new B.dYE(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agC,w)},
Sj(d){return this.cA0(d)},
cA0(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pv(t,s.c,s.f),$async$Sj)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.um(new B.dYZ(u,d),"Preparing QR\u2026"),$async$Sj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sj,w)},
ajj(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZ_(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZ0(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sj(r),$async$ajj)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajj,w)},
ajc(d){return this.czy(d)},
czy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2h(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYT(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajc)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SZ(d)
break
case"qr":u.Sj(A.a([d],y.r))
break
case"send_my_code":u.cjx(A.a([d],y.r))
break
case"save":u.aiA(d)
break
case"delete":u.Jq(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajc,w)},
Ym(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYo(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYp(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pv(t,s.c,s.f),$async$Ym)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.um(new B.dYq(u,r),"Preparing file\u2026"),$async$Ym)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ym,w)},
ahH(d){return this.cqp(d)},
cqp(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hEv(d,!1),$async$ahH)
case 3:s=f
r=s==null
q=B.a7V(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahH,w)},
agI(){var x=0,w=A.j(y.H),v=this,u
var $async$agI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fV8(u,v.a.c),$async$agI)
case 2:return A.h(null,w)}})
return A.i($async$agI,w)},
bGb(){B.hDE(!1,new B.dYk(this,null))
return},
JF(d,e){return this.cjy(d,e)},
b35(d){return this.JF(null,d)},
cjx(d){return this.JF(d,null)},
cjy(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JF=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dYG(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xL.cq().aoU(!0,C.a1w,!1),$async$JF)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.um(new B.dYH(l,s,r),"Preparing\u2026"),$async$JF)
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
return A.b(B.bFG(p,l,e,s.a.c),$async$JF)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JF,w)},
IR(d){return this.c28(d)},
c28(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hTu(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b35(t),$async$IR)
case 8:x=6
break
case 7:u.ij("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ij("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.um(new B.dYA(u,d),"Receiving video\u2026"),$async$IR)
case 11:x=1
break
case 10:x=12
return A.b(u.um(new B.dYB(u,d),"Receiving\u2026"),$async$IR)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IR,w)},
EK(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DA()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahH(t),$async$EK)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IR(s),$async$EK)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYL(u),!1,null,y.N)),$async$EK)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ul(),$async$EK)
case 10:x=1
break
case 9:x=11
return A.b(u.IR(C.a.i(r)),$async$EK)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EK,w)},
aiA(d){return this.cvG(d)},
cvG(d){var x=0,w=A.j(y.H),v=this
var $async$aiA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.um(new B.dYK(v,d),"Saving\u2026"),$async$aiA)
case 2:return A.h(null,w)}})
return A.i($async$aiA,w)},
Jq(d){return this.bOG(d)},
bOG(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jq)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdD(t),$async$Jq)
case 6:case 5:s=d.a
x=7
return A.b(B.Fh(u.a.c,s),$async$Jq)
case 7:u.r.W(0,s)
x=8
return A.b(u.ul(),$async$Jq)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
ajp(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2h(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZ4(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajp)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agI()
break
case"import":u.acR()
break}case 1:return A.h(v,w)}})
return A.i($async$ajp,w)},
cbq(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n6))return C.qO
if(C.a.a0(x,"image/")||d.mI(D.S6))return C.uM
if(C.a.q(x,"pdf"))return E.PB
return D.apL},
B(d){var x,w,v=this,u=null,t=B.a2h(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.HY,u,u,u,new B.dZf(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bXN,u,u,u,v.e?u:v.gcje(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcx6()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bS1:E.aqa,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3r,u,u,u,v.e?u:v.gcbr(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oE,u,u,u,v.e?u:v.gb4a(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZy,u,u,u,v.e?u:new B.dZg(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lY(new B.dZh(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dx(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.S(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dx(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.S(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kn(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAM(C.jI,s,!0,t,w?u:v.gcA1(),u),1)
x.push(new A.D(D.bD4,A.lB(new B.dZi(),A.A(A.a([s,C.au,A.E(new B.aAM(C.uN,"Export",!1,t,w?u:v.gbSz(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cw,C.j0,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfo(t,v.e?u:v.gb4a(),u)
else s=A.ko(!0,u,u,new B.dZj(v,t),s,u,D.bCX,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAM.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aE,t,t,0,C.c,t,C.wg,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wg,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bfo.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lB(new B.dbP(),new A.D(E.a0D,A.x(A.a([A.lB(new B.dbQ(),A.q(x,A.X(C.z9,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.e7,C.hF,x,x,new A.br(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dY,A.dh(C.oE,D.fXe,this.d,A.bp(C.aE,x,x,x,C.c,x,C.Of,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cw,C.C6,x,x,new A.br(0,1,w),s),x,x,x)}}
B.ada.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mI(D.n6))p=D.drI
else{p=C.a.a0(p,"image/")||i.mI(D.S6)
n=y.O
p=p?A.a([C.cG,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garh()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n6))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.ax,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fW,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cf))
if(!(!o||i.mI(D.n6)))l.push(A.h5j(C.aE,!1,j,j,j,!1,j,j,new B.dcb(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.X(C.ow,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cf))
return A.lB(new B.dcc(),new A.D(C.el,A.aJ(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a04,A.A(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bM("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_d.prototype={
S(){return new B.aAR()},
gd1(){return this.c}}
B.aAR.prototype={
Y(){this.a3()
this.ys()},
t(){B.hTJ(this.e)
this.a4()},
ys(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ys=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rR(o.c,o.d),$async$ys)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hTM(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hTL(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dc8(s))
x=1
break}s.m(new B.dc9(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dca(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ys,w)},
a2I(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rR(t.c,t.d),$async$a2I)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fgL)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiG(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2I)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2I,w)},
c21(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kD(u,C.A,v,new B.dc6(w,t),C.he,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dc7(w),C.he,C.dB,!0,v,!1,v,v)
else return C.bM
return A.uY(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2h(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D7,u,u,u,v.gb7X(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ft
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dh(C.D7,D.fFs,v.gb7X(),A.bp(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.c21()}return A.c4(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_a.prototype={
S(){return new B.aAO(A.ajy(),C.bE,C.bE)},
gd1(){return this.c}}
B.aAO.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fy(w,A.a4(w).k("fy<1>")).iC(new B.dbM(v))
x.gcXj().iC(new B.dbN(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fy(x,A.a4(x).k("fy<1>"))}if(x==null)x=C.bbh
x.iC(new B.dbO(v))
v.ys()},
ys(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ys=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rR(p.c,p.d),$async$ys)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbF(s))
x=1
break}x=8
return A.b(s.d.vp(0,new A.a4n(r,s.a.d.c)),$async$ys)
case 8:if(s.c==null){x=1
break}s.m(new B.dbG(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbH(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ys,w)},
a_v(){var x=0,w=A.j(y.H),v=this,u
var $async$a_v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_v)
case 5:x=3
break
case 4:x=6
return A.b(u.iF(0),$async$a_v)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_v,w)},
aVq(d){var x=d.a
return C.a.b0(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a4()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2h(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ft
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bT1,C.f,o,o,new A.p(o,o,o,A.m(24),o,L.Q6,C.n),o,88,o,o,o,o,o,88)
t=A.kV(C.aE,o,o,m,0,new B.dbI(p),C.o.E(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVq(p.w)+" / "+p.aVq(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aE,o,o,o,o,D.fd9,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uP:C.hw,o,o,o,o,o)
x=A.x(A.a([u,C.l2,t,x,C.d8,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbu(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c4(v,w,A.at(new A.D(C.qz,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qw.prototype={
S(){return new B.aAU()},
gd1(){return this.c}}
B.aAU.prototype={
Y(){this.a3()
this.Qb()},
Qb(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qb=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h7C(o.c,o.d,new B.dcp(s)),$async$Qb)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcq(s))
x=1
break}s.e=r
q=O.igr(r)
if(q==null){s.m(new B.dcr(s))
x=1
break}s.d=q
q.aW(0,s.gb2T())
x=8
return A.b(q.iV(0).dh(0,C.rQ),$async$Qb)
case 8:if(s.c==null){x=1
break}s.m(new B.dcs(s))
x=9
return A.b(q.qp(0),$async$Qb)
case 9:q.tY(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dct(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qb,w)},
chu(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcu(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dt(0,x.gb2T())
w=x.d
if(w!=null)w.t()
B.ir2(x.e)
x.a4()},
af7(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0O(u.c,u.d),$async$af7)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$af7,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2h(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aG(t,t,t,t,C.oD,t,t,t,u.gcbo(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ft
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aj2(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AL(s,t),A.aA(t,A.zj(A.q(t,A.X(q?I.uP:C.hw,C.c,t,t,t,48),C.f,t,t,new A.p(C.aU,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b3,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcw(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_f.prototype={
S(){return new B.aAS(new A.cw(null,y.A))}}
B.aAS.prototype={
gcJ8(){var x,w,v=this.a
if(v.e!==D.Tr)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIJ(){var x,w,v=this.a
if(v.e!==D.Ad)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcJ8()
if(x!=null){v.Rj(x)
v.e=A.df(R.GE,new B.dcl(v,x))}w=v.gcIJ()
if(w!=null){v.Ri(w)
v.f=A.df(C.fG,new B.dcm(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a4()},
Ri(d){return this.coC(d)},
coC(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ri=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqB(d),$async$Ri)
case 3:t=f
x=4
return A.b(B.cdW(d),$async$Ri)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dcd(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Ri,w)},
Rj(d){return this.coD(d)},
coD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fVL(d),$async$Rj)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDz(t),$async$Rj)
case 4:if(u.c==null){x=1
break}u.m(new B.dce(u))
u.c.L(y.q).f.U(D.aTR)
case 1:return A.h(v,w)}})
return A.i($async$Rj,w)},
gc7g(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbp(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2u(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DA()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fjT)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.eb(new B.dcf(),!1,null,y.N)),$async$a2u)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDz(s),$async$a2u)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTR)
case 1:return A.h(v,w)}})
return A.i($async$a2u,w)},
aaJ(d){return this.bMm(d)},
bMm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fA(C.d.aO(t,", "))),$async$aaJ)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaJ,w)},
af5(d){return this.bM5(d)},
bM5(d){var x=0,w=A.j(y.H),v=this
var $async$af5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fA(v.a.c)),$async$af5)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fhe)
return A.h(null,w)}})
return A.i($async$af5,w)},
a2o(d){return this.cvI(d)},
cvI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apz(s.d,4),$async$a2o)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.to(r,"ngmy_doc_share_qr.png"),$async$a2o)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2o,w)},
gaYT(){var x,w=this.a
if(w.e!==D.J6)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaG(d){return this.bMf(d)},
bMf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaYT()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaG)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fiT)
case 1:return A.h(v,w)}})
return A.i($async$aaG,w)},
af6(){var x=0,w=A.j(y.H),v=this,u
var $async$af6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.W7(),$async$af6)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$af6,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2h(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aC(h,0,44)+"\u2026"
i=i.e
i=i!==D.J6&&i!==D.Tr&&i!==D.Ad
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J6||t===D.Tr||t===D.Ad?l:A.aG(l,l,l,l,C.lo,l,l,l,m.gb0V(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.U,A.qb(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7g(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J6){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.U,A.q(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcbp(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2o,D.fP_,new B.dcg(m,d),l)],p))}if(m.a.e===D.J6&&m.gaYT()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.bZT,D.fLA,new B.dch(m,d),l)],p))
if(m.a.e===D.Ad){x=(m.w?C.dI:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.U,A.q(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fw:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}if(m.a.e===D.Tr){x=(m.r?C.dI:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.U,A.q(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fw:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l),C.af,A.dh(D.bVt,D.fS9,m.gcw4(),A.bp(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oL(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.q(l,A.x(q,C.m,l,C.bb,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D6,C.VQ,new B.dci(m,d),l),1),C.au,A.E(A.dh(C.zx,C.abq,new B.dcj(m,d),A.bp(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.U,new A.a5(1/0,l,A.bI(C.AR,l,m.gb0V(),A.bp(C.aN,l,l,l,l,C.h5,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dck(),y.C)}}
B.ad8.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cg(A.x(A.a([w,C.aR,A.q(x,A.qb(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bI(C.AS,x,new B.dbE(d),x)],u),x,x,C.nn,v,x,x,x,x,D.fEs,x)}}
B.a_9.prototype={
S(){return new B.aAN(A.zU(C.ys,C.o3,C.v1))}}
B.aAN.prototype={
t(){this.d.t()
this.a4()},
ayW(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c4(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fM6,x,x,x,1,x,!0),C.w,A.zT(this.d,C.c_,this.gayV()),x,!1,!1,x,x)}}
B.a_g.prototype={
S(){return new B.aAT(A.zU(C.ys,C.o3,C.v1))},
gd1(){return this.c}}
B.aAT.prototype={
c35(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah4(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MG("text/plain"),$async$ah4)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fjN)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah4,w)},
abx(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hEv(p,!0),$async$abx)
case 3:t=e
p=t==null
s=B.a7V(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.fgl)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abx,w)},
t(){this.d.t()
this.a4()},
ayW(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c35(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.ar4,v,v,v,w.gbS2(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3y,v,v,v,w.gclY(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uJ:P.Pk,v,v,v,v,v),v,v,v,new B.dco(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fT6,v,v,v,1,v,!0)
u=A.zT(w.d,C.c_,w.gayV())
x=A.m(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.exW],s),v),v,!1,!1,v,v)}}
B.bfp.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pf
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pf:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aJ(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0J,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aak.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Ph.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yf.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pg.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FM.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cry.prototype={}
B.FL.prototype={}
B.aaj.prototype={}
B.ava.prototype={}
B.Yg.prototype={}
var z=a.updateTypes(["aB<~>()","P(jB)","n(jB)","VZ(Z)","~()","a_c(Z)","G(G,jB)","Qw(Z)","~(mi)","ct(FL)","aB<jB?>(@)","VX(Z)","W0(Z)","D(jB)","jB(@)","a8<n,@>(jB)","a_b(Z)","VY(Z)","a_d(Z)","a_a(Z)","a_f(Z)","ad8(Z)","ai<jB>()","a_g(Z)","ada(Z,G)","a_9(Z)","a8<n,aE>(jB)","ct(Yf)","ct(aaj)","aB<ct>(FL)"])
B.cru.prototype={
$1(d){var x=this.a
x.x=D.aQF
x.y.J(0,D.aQF)},
$S:74}
B.crv.prototype={
$1(d){var x=this.a
x.x=D.aQE
x.y.J(0,D.aQE)},
$S:74}
B.crw.prototype={
$1(d){var x=this.a
x.ais(A.ahr(d.data)).bG(new B.crt(x),y.b)},
$S:74}
B.crt.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crx.prototype={
$1(d){},
$S:74}
B.crA.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hYw(d.channel))},
$S:16}
B.crB.prototype={
$1(d){},
$S:16}
B.crC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ihB(w.iceConnectionState)
x.cx=w
if($.hh1())switch(w.a){case 0:x.cy=D.aQK
break
case 1:x.cy=D.aQL
break
case 3:x.cy=D.aQM
break
case 5:x.cy=D.aQI
break
case 6:x.cy=D.aQJ
break
case 7:x.cy=D.a95
break
default:break}},
$S:107}
B.crD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ihC(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.crE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.isz(w.signalingState)},
$S:107}
B.crF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iqK(w.connectionState)},
$S:107}
B.crG.prototype={
$1(d){},
$S:107}
B.crH.prototype={
$1(d){},
$S:16}
B.fvG.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oL(d.target.result,!1)),w=C.yt.q(x.objectStoreNames,"blobs")
if(!w)C.yp.Lj(x,"blobs")},
$S:195}
B.fUX.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wP.fq(this.b)
$.eX.mC()
this.c.$1(d)},
$S:447}
B.fUZ.prototype={
$1(d){return this.a.$1(B.i6W(this.b,this.c))},
$S:31}
B.fUY.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fUW.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fVb.prototype={
$1(d){var x=this
return B.hts(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fVc.prototype={
$1(d){var x=this
return B.hts(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fyj.prototype={
$1(d){var x=this
return B.cdx(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dbX.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dbU.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdx(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dbW.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdx(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dbV.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdx(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dbZ.prototype={
$4(d,e,f,g){var x=null
return A.jZ(A.A(A.a([A.aG(x,x,x,x,D.bU5,x,x,x,new B.dbY(d),x,x,x,x,x,x),A.E(A.Fx(D.RQ,!0,x,C.a2z,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.RQ,x,g,C.amJ,0,e,f)},
$C:"$4",
$R:4,
$S:416}
B.dbY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAf.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eQ,y.o).w,t=this.a,s=t?C.iB:C.c,r=A.m(28),q=A.q(v,D.bwL,C.f,v,v,D.b6L,v,v,v,v,D.amz,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bYn,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GT,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ark,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dn,new B.fAd(d),v),1),C.au,A.E(A.bI(D.fKB,v,new B.fAe(p,x,d),A.bp(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GH,v,v,v,v),v)},
$S:59}
B.fAd.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAe.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fhv)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDt(v,x))},
$S:0}
B.fAJ.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eQ,y.o).w,u=x.a,t=u?C.iB:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bwA,C.f,w,w,D.b8e,w,w,w,w,D.amz,w,w,1/0),new A.D(C.GT,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hcP(u,"Organization name",C.Hl,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hcP(u,"Access code",C.nI,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hcP(u,"Member password",H.HT,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bI(D.fTd,w,new B.fAI(r,q,p,d),A.bp(C.aE,w,w,w,w,C.h5,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GH,w,w,w,w),w)},
$S:59}
B.fAI.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fhA)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGB(u,x,w))},
$S:0}
B.cdo.prototype={
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
p=C.a.a0(j,"http")?A.cF(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vN(p,null).dh(0,C.a_I),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cj(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdu.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdv.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdw.prototype={
$1(d){return d.b},
$S:z+2}
B.cdq.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdr.prototype={
$1(d){return d.b},
$S:z+2}
B.cdp.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cds.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdt.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fV9.prototype={
$1(d){return new B.VX(this.a,null)},
$S:z+11}
B.fVa.prototype={
$1(d){return new B.W0(this.a,this.b,this.c,null)},
$S:z+12}
B.dYd.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZm.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZn.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZo.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dZl(x,d))},
$S:2}
B.dZl.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZp.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZq.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZr.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZs.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZt.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZu.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZx.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*14)),e)},
$S:102}
B.dZv.prototype={
$1(d){var x=this.a
return x.f?null:x.a_u()},
$S:2}
B.dZw.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S6))s=C.uM
else s=C.a.a0(s,"video/")||d.mI(D.n6)?C.qO:D.apL
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.q(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garh(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dYe.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dYf.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdy.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.cdz.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.fW3.prototype={
$2(d,e){return e===this.a},
$S:338}
B.fsK.prototype={
$1(d){return J.k(d)},
$S:17}
B.fyv.prototype={
$1(d){var x=this.b
B.i4K(C.H8.ga7c(this.a)).bG(x.gC_(x),y.H)},
$S:129}
B.fyw.prototype={
$1(d){return this.a.dc(0,null)},
$S:129}
B.fyx.prototype={
$0(){return null},
$S:12}
B.cdN.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyy.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
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
return new B.jB(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fCJ.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fwJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fwK.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdS.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.h_c.prototype={
$1(d){return new B.a_b(this.a,null)},
$S:z+16}
B.dbT.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dbR.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dbS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZk.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1B()},
$S:11}
B.dYI.prototype={
$0(){var x=J.bGJ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYJ.prototype={
$0(){var x=J.bGJ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYh.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYg(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFT(this.c)}},
$S:0}
B.dYg.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYi.prototype={
$0(){var x=J.bGJ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYn.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYm(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFT(this.c)}},
$S:0}
B.dYm.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZ8.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZ9.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dYF.prototype={
$1(d){return new B.VY(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dYC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IB(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.W1(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ul(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1L(s.gI(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYl.prototype={
$1(d){this.a.acV(d,"No files selected.","Added")},
$S:447}
B.dYN.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dYM(),A.U(x).k("N<1,n>")))},
$S:0}
B.dYM.prototype={
$1(d){return d.a},
$S:z+2}
B.dYr.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xL.cq().cZh(C.a1w,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jI(o,0,null)}u=2
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
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqA(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cr(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ul(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ5.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dZ6.prototype={
$1(d){return new B.a_d(this.a.a.c,this.b,null)},
$S:z+18}
B.dZ7.prototype={
$1(d){return new B.a_a(this.a.a.c,this.b,null)},
$S:z+19}
B.dYD.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dYE.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dYZ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IB(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7X(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cs3(),$async$$0)
case 5:x=6
return A.b(p.ul(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dYV(p),r),new B.dYW(),r.k("N<ak.E,n>")).bY(0,new B.dYX())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYY(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pu(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.W7(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYV.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dYU(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dYU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYW.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dYX.prototype={
$1(d){return d.length!==0},
$S:3}
B.dYY.prototype={
$1(d){var x=this.a
return new B.a_f(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZ_.prototype={
$1(d){return d.a},
$S:z+2}
B.dZ0.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYT.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garh(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n6)?C.t2:C.pv
p=!x||p.mI(D.n6)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.Cg,A.x(A.a([q,o,t,C.aB,B.a_e(!1,u,!1,w,p,new B.dYO(d),v),B.a_e(!1,u,!1,C.jI,"Share via QR",new B.dYP(d),"Letters/numbers QR code"),B.a_e(!1,u,!1,D.a2E,"Send to their Code",new B.dYQ(d),"Enter someone else's personal code"),B.a_e(!1,u,!1,C.hX,"Download / save",new B.dYR(d),v),C.an,B.a_e(!1,u,!0,C.eh,"Delete",new B.dYS(d),v)],y.p),C.al,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.p(s,v,new A.bF(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,v,v,C.n),C.bj)},
$S:726}
B.dYO.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dYP.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dYQ.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dYR.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dYS.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dYo.prototype={
$1(d){return d.a},
$S:z+2}
B.dYp.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYq.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7Z(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hf(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pu(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYk.prototype={
$1(d){var x=this.a
x.um(new B.dYj(x,d,this.b),"Preparing\u2026")},
$S:447}
B.dYj.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.W1(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFG(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYG.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dYH.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h7F(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYA.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hd(new B.dYw(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.dYx(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYy(s))
case 5:x=8
return A.b(r.b.iG(0,C.GB,new B.dYz()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ul(),$async$$0)
case 9:s.ij("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYw.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYt(x,d,e))},
$S:219}
B.dYt.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYx.prototype={
$1(d){return new B.ad8(this.a.a,null)},
$S:z+21}
B.dYy.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dYz.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dYB.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jh(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7N(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b35(B.Jh(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqA(new B.dYu(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h7E(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.ul(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dYv()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYu.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYs(x,d,e))},
$S:219}
B.dYs.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYv.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.dYL.prototype={
$1(d){return new B.a_g(this.a.a.c,null)},
$S:z+23}
B.dYK.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0O(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ4.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bm(!0,new A.D(C.Cg,A.x(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_e(!0,w,!1,C.nI,"My Code",new B.dZ1(d),"Your personal code & QR \u2014 others send docs to you"),B.a_e(!1,w,!1,D.a2E,"Send to their Code",new B.dZ2(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_e(!1,w,!1,S.zo,"Import backup",new B.dZ3(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.p(u,x,new A.bF(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,x,x,C.n),C.bj)},
$S:726}
B.dZ1.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dZ2.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGb()},
$S:0}
B.dZ3.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZh.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jr(D.RQ,x,C.a2z,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RQ).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:702}
B.dZf.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZg.prototype={
$0(){this.a.ajp()
return null},
$S:0}
B.dZi.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*10)),e)},
$S:102}
B.dZj.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ada(e,w,v,this.b,x.e,x.cbq(w),new B.dZb(x,w),new B.dZc(x,v,w),new B.dZd(x,w),new B.dZe(x,w),null)},
$S:z+24}
B.dZb.prototype={
$0(){this.a.agC(this.b)
return null},
$S:0}
B.dZc.prototype={
$0(){var x=this.a
return x.m(new B.dZa(x,this.b,this.c))},
$S:0}
B.dZa.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZd.prototype={
$0(){this.a.Ou(this.b)
return null},
$S:0}
B.dZe.prototype={
$0(){this.a.ajc(this.b)
return null},
$S:0}
B.dbP.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*18)),e)},
$S:102}
B.dbQ.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:110}
B.dcc.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*14)),e)},
$S:102}
B.dcb.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dc8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dc9.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dca.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dc6.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dc4(this.a),C.he,C.dB,!0,x,!1,x,x)
$.aW.x1$.push(new B.dc5(this.a))
return C.bM},
$S:140}
B.dc4.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dc2(this.a))
return C.bM},
$S:196}
B.dc2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dc_(x))},
$S:7}
B.dc_.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dc5.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dc1(x))},
$S:7}
B.dc1.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dc7.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dc3(this.a))
return C.bM},
$S:196}
B.dc3.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dc0(x))},
$S:7}
B.dc0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbM.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbL(x,d))},
$S:1762}
B.dbL.prototype={
$0(){return this.a.f=this.b===C.vp},
$S:0}
B.dbN.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbK(x,d))},
$S:7}
B.dbK.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbO.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbJ(x,d))},
$S:7}
B.dbJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbF.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbG.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbH.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbI.prototype={
$1(d){return this.a.d.Nr(0,A.dv(0,0,0,C.j.V(d),0,0))},
$S:6}
B.dcp.prototype={
$0(){var x=this.a.a
return B.rR(x.c,x.d)},
$S:1763}
B.dcq.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dcr.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcs.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dct.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcu.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcw.prototype={
$0(){var x=this.a
x.m(new B.dcv(x))},
$S:0}
B.dcv.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qp(0)},
$S:0}
B.dcl.prototype={
$1(d){return this.a.Rj(this.b)},
$S:11}
B.dcm.prototype={
$1(d){return this.a.Ri(this.b)},
$S:11}
B.dcd.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dce.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcf.prototype={
$1(d){return D.hsX},
$S:z+25}
B.dck.prototype={
$2(d,e){if(d)B.W7()},
$S:131}
B.dcg.prototype={
$0(){return this.a.aaJ(this.b)},
$S:0}
B.dch.prototype={
$0(){return this.a.aaG(this.b)},
$S:0}
B.dci.prototype={
$0(){return this.a.af5(this.b)},
$S:0}
B.dcj.prototype={
$0(){return this.a.a2o(this.b)},
$S:0}
B.dbE.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dco.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qt(),$async$$0)
case 2:u.m(new B.dcn(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dcn.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdU.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.cdV.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdT.prototype={
$2(d,e){return this.bmO(d,e)},
bmO(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W8(u.c,A.I(["uploadProgress",C.j.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fCl.prototype={
$1(d){if(d===D.a94&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fCm.prototype={
$0(){},
$S:12}
B.fCX.prototype={
bon(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fq0(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hoB(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bon(d,e)},
$S:549}
B.fCW.prototype={
$1(d){var x=this
d.b=new B.fCV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fCV.prototype={
$1(d){return this.bom(d)},
bom(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0P(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Y.aQ(0,n,null)
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
return A.b(B.fq0(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dc(0,s.e)
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
return A.b(B.a7W(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dc(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAQ.prototype,"gciR","QT",0)
x(v,"gcjI","JG",0)
x(v,"gcjd","yC",0)
x(v=B.aEP.prototype,"gcbk","af3",0)
x(v,"gcbl","a_t",0)
x(v,"gcyw","aiU",0)
x(v=B.aES.prototype,"gcbm","a_u",0)
x(v,"gcyx","a2J",0)
x(B.aEQ.prototype,"gcbn","af4",0)
x(B.aAP.prototype,"gcbs","cbt",4)
x(v=B.aER.prototype,"gcje","a0F",0)
x(v,"gcx6","cx7",4)
x(v,"gb4a","aAo",0)
x(v,"gcA1","ajj",0)
x(v,"gbSz","Ym",0)
x(v,"gcbr","EK",0)
x(B.aAR.prototype,"gb7X","a2I",0)
x(B.aAO.prototype,"gcbu","a_v",0)
x(v=B.aAU.prototype,"gb2T","chu",4)
x(v,"gcbo","af7",0)
x(v=B.aAS.prototype,"gcw4","a2u",0)
x(v,"gb0V","af6",0)
w(B.aAN.prototype,"gayV","ayW",8)
x(v=B.aAT.prototype,"gclY","ah4",0)
x(v,"gbS2","abx",0)
w(v,"gayV","ayW",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cry,B.aaj,B.ava,B.aDt,B.aGB,B.jB,B.acR,B.bxF,B.FL,B.Yg])
w(B.crz,B.cry)
w(B.b5X,B.aaj)
x(A.ht,[B.cru,B.crv,B.crw,B.crt,B.crx,B.crA,B.crB,B.crC,B.crD,B.crE,B.crF,B.crG,B.crH,B.fvG,B.fUX,B.fUZ,B.fUY,B.fVb,B.fVc,B.fyj,B.dbU,B.dbW,B.dbV,B.dbZ,B.fAf,B.fAJ,B.cdo,B.cdv,B.cdw,B.cdr,B.cdp,B.cds,B.cdt,B.fV9,B.fVa,B.dZo,B.dZx,B.dZv,B.dZw,B.fsK,B.fyv,B.fyw,B.cdN,B.fyy,B.fCJ,B.fwJ,B.fwK,B.cdS,B.h_c,B.dbT,B.dbR,B.dZk,B.dYg,B.dYm,B.dYF,B.dYl,B.dYM,B.dZ5,B.dZ6,B.dZ7,B.dYD,B.dYV,B.dYU,B.dYW,B.dYX,B.dYY,B.dZ_,B.dZ0,B.dYT,B.dYo,B.dYp,B.dYk,B.dYG,B.dYx,B.dYv,B.dYL,B.dZ4,B.dZh,B.dZi,B.dbP,B.dbQ,B.dcc,B.dcb,B.dc6,B.dc4,B.dc2,B.dc5,B.dc7,B.dc3,B.dbM,B.dbN,B.dbO,B.dbI,B.dcl,B.dcm,B.dcf,B.cdU,B.cdV,B.fCl,B.fCW,B.fCV])
w(B.b5Y,B.ava)
x(A.iJ,[B.fUW,B.dbX,B.dbY,B.fAd,B.fAe,B.fAI,B.dYd,B.dZm,B.dZn,B.dZl,B.dZp,B.dZq,B.dZr,B.dZs,B.dZt,B.dZu,B.dYe,B.dYf,B.fyx,B.dbS,B.dYI,B.dYJ,B.dYh,B.dYi,B.dYn,B.dZ8,B.dZ9,B.dYC,B.dYN,B.dYr,B.dYE,B.dYZ,B.dYO,B.dYP,B.dYQ,B.dYR,B.dYS,B.dYq,B.dYj,B.dYH,B.dYA,B.dYt,B.dYy,B.dYz,B.dYB,B.dYs,B.dYK,B.dZ1,B.dZ2,B.dZ3,B.dZf,B.dZg,B.dZb,B.dZc,B.dZa,B.dZd,B.dZe,B.dc8,B.dc9,B.dca,B.dc_,B.dc1,B.dc0,B.dbL,B.dbK,B.dbJ,B.dbF,B.dbG,B.dbH,B.dcp,B.dcq,B.dcr,B.dcs,B.dct,B.dcu,B.dcw,B.dcv,B.dcd,B.dce,B.dcg,B.dch,B.dci,B.dcj,B.dbE,B.dco,B.dcn,B.fCm])
x(A.lD,[B.ad9,B.Od,B.aak,B.Ph,B.Yf,B.Pg,B.FM])
x(A.af,[B.a_c,B.VX,B.W0,B.VY,B.a_b,B.VZ,B.a_d,B.a_a,B.Qw,B.a_f,B.a_9,B.a_g])
x(A.ah,[B.aAQ,B.aEP,B.aES,B.aEQ,B.aAP,B.aER,B.aAR,B.aAO,B.aAU,B.aAS,B.aAN,B.aAT])
x(A.ax,[B.adC,B.aAM,B.bfo,B.ada,B.ad8,B.bfp])
x(A.jw,[B.cdu,B.cdq,B.cdy,B.cdz,B.fW3,B.dYw,B.dYu,B.dZj,B.dck,B.cdT,B.fCX])
x(A.j2,[B.bkR,B.bxh])})()
A.iT(b.typeUniverse,JSON.parse('{"b5X":{"aaj":[]},"b5Y":{"ava":[]},"a_c":{"af":[],"v":[]},"aAQ":{"ah":["a_c"]},"adC":{"ax":[],"v":[]},"VX":{"af":[],"v":[]},"W0":{"af":[],"v":[]},"aEP":{"ah":["VX"]},"aES":{"ah":["W0"]},"bkR":{"j2":[]},"VY":{"af":[],"v":[]},"aEQ":{"ah":["VY"]},"a_b":{"af":[],"v":[]},"VZ":{"af":[],"v":[]},"ada":{"ax":[],"v":[]},"a_d":{"af":[],"v":[]},"a_a":{"af":[],"v":[]},"Qw":{"af":[],"v":[]},"a_f":{"af":[],"v":[]},"ad8":{"ax":[],"v":[]},"a_9":{"af":[],"v":[]},"a_g":{"af":[],"v":[]},"aAP":{"ah":["a_b"]},"bxh":{"j2":[]},"aER":{"ah":["VZ"]},"aAM":{"ax":[],"v":[]},"bfo":{"ax":[],"v":[]},"aAR":{"ah":["a_d"]},"aAO":{"ah":["a_a"]},"aAU":{"ah":["Qw"]},"aAS":{"ah":["a_f"]},"aAN":{"ah":["a_9"]},"aAT":{"ah":["a_g"]},"bfp":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uI"),k:x("ME()"),m:x("bu<n,n>"),F:x("rr"),g:x("aB<jB?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<n,P>>"),t:x("O<a8<n,@>>"),r:x("O<jB>"),w:x("O<+file,name(lS,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j2>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<G>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jB>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bB<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iC"),e:x("iwD"),af:x("EY"),U:x("jB"),b:x("ct"),C:x("aE"),aK:x("wC"),ab:x("FL"),br:x("ava"),v:x("Yg"),N:x("n"),X:x("br<F>"),Q:x("m2"),D:x("dK"),aw:x("bM<n>"),cd:x("Y<a8<n,@>>"),c7:x("v"),ch:x("c2<ai<jB>>"),aW:x("c2<dK?>"),aY:x("c2<~>"),cx:x("ad9"),b1:x("bk<ai<jB>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDt"),bG:x("aGB"),q:x("mz"),B:x("pN<FL>"),c6:x("pN<aak>"),y:x("P"),i:x("F"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jB>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jB?"),R:x("aE?"),c:x("Yg?"),d:x("+answerQr,transfer(n,aB<ai<jB>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Od,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acR?"),bk:x("aDt?"),ag:x("aGB?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b56=new A.ay(C.aE,2,C.r,-1)
D.c6X=new A.a9(C.a6,C.aa,C.x,C.a4J,null,null)
D.b6L=new A.p(null,null,null,C.mE,null,D.c6X,C.n)
D.b8e=new A.p(null,null,null,C.mE,null,E.I4,C.n)
D.afy=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agY=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahZ=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajM=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fFl=new A.B("Your team portal",null,C.di,null,null,null,null,null,null,null,null,null)
D.fU9=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EG,null,null,null,null,null,null,null,null,null)
D.diL=x([D.fFl,C.an,D.fU9],y.p)
D.bwr=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.diL,null)
D.fYC=new A.B("Create your organization",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fJN=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EG,null,null,null,null,null,null,null,null,null)
D.dzC=x([D.fYC,C.an,D.fJN],y.p)
D.bwA=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dzC,null)
D.fUM=new A.B("Team Member sign-in",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fNJ=new A.B("Enter the access code and password from your organization.",null,G.EG,null,null,null,null,null,null,null,null,null)
D.dxn=x([D.fUM,C.an,D.fNJ],y.p)
D.bwL=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dxn,null)
D.bCX=new A.R(16,10,16,28)
D.bD4=new A.R(16,14,16,4)
D.bEl=new A.R(20,0,20,16)
D.bER=new A.R(20,8,20,16)
D.amz=new A.R(24,22,24,20)
D.a2E=new A.a0(63394,"MaterialIcons",!1)
D.apL=new A.a0(63515,"MaterialIcons",!1)
D.bS1=new A.a0(983813,"MaterialIcons",!1)
D.bPi=new A.a0(62867,"MaterialIcons",!1)
D.bT1=new A.ae(D.bPi,44,C.c,null,null,null)
D.bU5=new A.ae(C.k5,null,C.ab,null,null,null)
D.bVt=new A.ae(C.jp,18,null,null,null,null)
D.bXd=new A.ae(D.a2E,26,C.c,null,null,null)
D.bXN=new A.ae(C.CW,null,null,null,null,null)
D.bYn=new A.ae(C.D3,null,null,null,null,null)
D.bZy=new A.ae(W.a2P,null,null,null,null,null)
D.bZT=new A.ae(C.hL,16,null,null,null,null)
D.c2o=new A.ae(C.t1,16,null,null,null,null)
D.bTi=new A.ae(C.nI,null,null,null,null,null)
D.c3g=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTi,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYV=new A.ae(C.Hl,null,null,null,null,null)
D.c3l=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTD=new A.ae(H.HT,null,null,null,null,null)
D.c3w=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cSw=x([C.fo,C.b1,C.aE],y.O)
D.c8N=new A.a9(C.aA,C.aF,C.x,D.cSw,null,null)
D.cRY=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RQ=x([C.fo,C.aE],y.O)
D.S6=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n6=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.drI=x([C.og,C.aE],y.O)
D.ekb={iceServers:0}
D.aLa={urls:0}
D.dDm=new A.bu(D.aLa,["stun:stun.l.google.com:19302"],y.m)
D.dDl=new A.bu(D.aLa,["stun:stun1.l.google.com:19302"],y.m)
D.d8g=x([D.dDm,D.dDl],A.as("O<a8<n,n>>"))
D.dCD=new A.bu(D.ekb,[D.d8g],A.as("bu<n,@>"))
D.J6=new B.Od(0,"lanDirect")
D.Tq=new B.Od(1,"cloudStash")
D.dOH=new B.Od(2,"inlineInstant")
D.Tr=new B.Od(3,"webrtcLink")
D.Ad=new B.Od(4,"videoCloud")
D.fU8=new A.B("Receive file",null,C.ng,null,null,null,null,null,null,null,null,null)
D.cHM=x([E.art,C.ae,D.fU8],y.p)
D.f85=new A.c7(C.aL,C.bb,C.i,C.m,null,C.p,null,0,D.cHM,null)
D.erE=new A.D(C.co,D.f85,null)
D.fvW=new A.H(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Iw,null,null,null)
D.fFU=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fvW,null,C.K,null,null,null,null,null,null,null)
D.eqP=new A.D(C.Cl,D.fFU,null)
D.bcC=new A.cf(C.A,null,null,D.eqP,null)
D.exW=new A.cL(0,null,0,28,null,null,D.bcC,null)
D.eyf=new B.aak(0,"RTCDataChannelConnecting")
D.aQE=new B.aak(1,"RTCDataChannelOpen")
D.aQF=new B.aak(3,"RTCDataChannelClosed")
D.eyg=new B.FM(0,"RTCIceConnectionStateNew")
D.eyh=new B.FM(1,"RTCIceConnectionStateChecking")
D.eyi=new B.FM(2,"RTCIceConnectionStateCompleted")
D.eyj=new B.FM(3,"RTCIceConnectionStateConnected")
D.eyk=new B.FM(4,"RTCIceConnectionStateCount")
D.eyl=new B.FM(5,"RTCIceConnectionStateFailed")
D.eym=new B.FM(6,"RTCIceConnectionStateDisconnected")
D.aQG=new B.FM(7,"RTCIceConnectionStateClosed")
D.aQH=new B.Yf(0,"RTCIceGatheringStateNew")
D.eyn=new B.Yf(1,"RTCIceGatheringStateGathering")
D.a94=new B.Yf(2,"RTCIceGatheringStateComplete")
D.a95=new B.Pg(0,"RTCPeerConnectionStateClosed")
D.aQI=new B.Pg(1,"RTCPeerConnectionStateFailed")
D.aQJ=new B.Pg(2,"RTCPeerConnectionStateDisconnected")
D.aQK=new B.Pg(3,"RTCPeerConnectionStateNew")
D.aQL=new B.Pg(4,"RTCPeerConnectionStateConnecting")
D.aQM=new B.Pg(5,"RTCPeerConnectionStateConnected")
D.eyo=new B.Ph(0,"RTCSignalingStateStable")
D.eyp=new B.Ph(1,"RTCSignalingStateHaveLocalOffer")
D.eyq=new B.Ph(2,"RTCSignalingStateHaveRemoteOffer")
D.eyr=new B.Ph(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eys=new B.Ph(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQN=new B.Ph(5,"RTCSignalingStateClosed")
D.fd9=new A.av(160,48)
D.bdS=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.feI=new A.a5(16,16,D.bdS,null)
D.fJ7=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgb=new A.b1(D.fJ7,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fQM=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fge=new A.b1(D.fQM,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZG=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fgl=new A.b1(D.fZG,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fII=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fgL=new A.b1(D.fII,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fUX=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTR=new A.b1(D.fUX,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fWp=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhe=new A.b1(D.fWp,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h08=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new A.b1(D.h08,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZ5=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fhA=new A.b1(D.fZ5,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_j=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fim=new A.b1(D.h_j,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHi=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fiT=new A.b1(D.fHi,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fSI=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fjd=new A.b1(D.fSI,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fLq=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fjJ=new A.b1(D.fLq,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0e=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fjN=new A.b1(D.h0e,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHy=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new A.b1(D.fHy,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGf=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fk7=new A.b1(D.fGf,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fD2=new A.B("NGMY DOC SHARE",null,C.aVd,null,null,null,null,null,null,null,null,null)
D.fEs=new A.B("Show this to sender",null,C.iy,null,null,null,null,null,null,null,null,null)
D.fFs=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fKd=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fKB=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fLA=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fM6=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fP_=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fRO=new A.B("Send to their Doc Share",null,C.nW,null,null,null,null,null,null,null,null,null)
D.fS9=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fSu=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fT6=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTd=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fTB=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.fWV=new A.B("Share files & videos\nwith a scan.",null,C.aVg,null,null,null,null,null,null,null,null,null)
D.fXe=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hsX=new B.a_9(null)
D.acr=new B.ad9(0,"docShare")
D.acs=new B.ad9(1,"gate")
D.Ws=new B.ad9(2,"gateNoIndividual")})();(function staticFields(){$.aPk=null
$.fny=function(){var x=y.N
return A.T(x,x)}()
$.H1=A.T(y.N,y.D)
$.ahe=A.T(y.N,A.as("lS"))
$.RS=A.T(y.N,y.D)
$.foc=A.T(y.N,A.as("acR"))
$.cdM=A.T(y.S,A.as("bxF"))
$.hoA=1
$.id6=null
$.id5=null
$.i3X=null
$.hd1=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ix7","hGv",()=>new B.crz())
x($,"iv1","hh1",()=>C.a.q(A.bA(A.bA(A.bA(A.HA(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["G8dicLJqw+ZerftJfEHS+c3hRaA="]=a.current})($__dart_deferred_initializers__);