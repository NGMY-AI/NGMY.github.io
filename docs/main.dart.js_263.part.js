((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={clo:function clo(){},
hKg(d){var x=null,w=new B.b3X(d,D.emW,new A.pu(x,x,y.c6),new A.pu(x,x,y.B))
w.bym(d)
return w},
b3X:function b3X(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
clj:function clj(d){this.a=d},
clk:function clk(d){this.a=d},
cll:function cll(d){this.a=d},
cli:function cli(d){this.a=d},
clm:function clm(d){this.a=d},
hKh(d,e){var x=y.N
x=new B.b3Y(d,e,A.U(x,y.e),A.U(x,y.z))
x.byn(d,e)
return x},
b3Y:function b3Y(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
clp:function clp(d){this.a=d},
clq:function clq(d){this.a=d},
clr:function clr(d){this.a=d},
cls:function cls(d){this.a=d},
clt:function clt(d){this.a=d},
clu:function clu(d){this.a=d},
clv:function clv(d){this.a=d},
clw:function clw(d){this.a=d},
h_K(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yW.M0(x,"ngmy_doc_share_v1",new B.fkx(),1)},
hQQ(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ch(d))
if(y.J.b(d))return new Uint8Array(A.ch(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ch(A.Ab(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ch(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
Rb(d,e){return B.i5f(d,e)},
i5f(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNw
x=7
return A.b(o==null?$.aNw=B.h_K():o,$async$Rb)
case 7:s=g
r=new Uint8Array(A.ch(e))
q=J.mO(s,"blobs","readwrite")
C.iU.mj(J.mN(q,"blobs"),r,d)
x=8
return A.b(J.pD(q),$async$Rb)
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
return A.i($async$Rb,w)},
Ra(d){return B.i5e(d)},
i5e(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Ra=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNw
x=7
return A.b(o==null?$.aNw=B.h_K():o,$async$Ra)
case 7:s=f
r=J.mO(s,"blobs","readonly")
x=8
return A.b(C.iU.zw(J.mN(r,"blobs"),d),$async$Ra)
case 8:q=f
x=9
return A.b(J.pD(r),$async$Ra)
case 9:o=B.hQQ(q)
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
return A.i($async$Ra,w)},
agS(d){return B.i5d(d)},
i5d(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNw
x=7
return A.b(p==null?$.aNw=B.h_K():p,$async$agS)
case 7:s=f
r=J.mO(s,"blobs","readwrite")
C.iU.FP(J.mN(r,"blobs"),d)
x=8
return A.b(J.pD(r),$async$agS)
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
return A.i($async$agS,w)},
fkx:function fkx(){},
hTc(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bog(w,v))}return u},
hq_(d,e){var x,w={},v=A.aVZ("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fIt(w,v,e)
C.wk.yt(v,"change",new B.fIv(w,v,!1))
C.wk.yt(v,"cancel",new B.fIu(w))
$.eR.mp()
v.click()
A.bN(C.ahO,new B.fIs(w),y.H)},
fIt:function fIt(d,e,f){this.a=d
this.b=e
this.c=f},
fIv:function fIv(d,e,f){this.a=d
this.b=e
this.c=f},
fIu:function fIu(d){this.a=d},
fIs:function fIs(d){this.a=d},
D1(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$D1=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd7()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTJ()?3:4
break
case 3:x=5
return A.b(B.hl4(e,d,s,!0,!1,f,g,h,!1,i),$async$D1)
case 5:x=1
break
case 4:x=6
return A.b(B.QR(d,s,f,g,h,i),$async$D1)
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
return A.b(B.Ix(s,d),$async$D1)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fg8(s,d),$async$D1)
case 14:x=12
return A.b(r.hl4(q,p,o,n,m,l,k,j,a1,i),$async$D1)
case 12:x=8
break
case 10:x=15
return A.b(A.a3(e,!1).cg(A.e_(new B.fII(s,i,d,f,g,h),!1,null,y.H)),$async$D1)
case 15:x=8
break
case 11:x=16
return A.b(A.a3(e,!1).cg(A.e_(new B.fIJ(s,i,d,f,g,h),!1,null,y.H)),$async$D1)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$D1,w)},
QR(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QR=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZH(e),$async$QR)
case 3:u=k
x=4
return A.b(B.apf(d,e,!1),$async$QR)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Ix(e,d),$async$QR)
case 7:if(k){v=D.aa5
x=1
break}x=8
return A.b(B.UU(e),$async$QR)
case 8:v=t?D.V1:D.aa6
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZF(d,e)){v=D.aa5
x=1
break}x=11
return A.b(B.UU(e),$async$QR)
case 11:v=t?D.V1:D.aa6
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fVQ(d,e)){v=D.aa5
x=1
break}x=14
return A.b(B.UU(e),$async$QR)
case 14:v=D.V1
x=1
break
case 13:v=t?D.V1:D.aa6
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QR,w)},
fg8(d,e){var x=0,w=A.j(y.y),v
var $async$fg8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZF(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZH(d),$async$fg8)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fg8,w)},
hl4(d,e,f,g,h,i,j,k,l,m){return A.a3(d,!1).cg(A.e_(new B.fmK(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hg9(d,e,f,g,h,i,j){return new B.Z0(e,j,d,g,h,i,f,null)},
foH(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$foH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
x=3
return A.b(A.bT(C.K,null,new B.foK(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$foH)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foH,w)},
fpb(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fpb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
r=new A.as(C.at,u)
x=3
return A.b(A.bT(C.K,null,new B.fpd(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fpb)
case 3:q=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
r.S$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpb,w)},
h_T(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bs(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fB3(d,e){var x=0,w=A.j(y.H),v
var $async$fB3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UU(e),$async$fB3)
case 3:if(d.e==null){x=1
break}A.a3(d,!1).eH()
case 1:return A.h(v,w)}})
return A.i($async$fB3,w)},
fII:function fII(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIJ:function fIJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ac6:function ac6(d,e){this.a=d
this.b=e},
fmK:function fmK(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Z0:function Z0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azj:function azj(){this.c=this.a=this.d=null},
d4I:function d4I(d,e){this.a=d
this.b=e},
d4F:function d4F(d){this.a=d},
d4H:function d4H(d){this.a=d},
d4G:function d4G(d){this.a=d},
d4K:function d4K(){},
d4J:function d4J(d){this.a=d},
acy:function acy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBT:function aBT(d,e){this.a=d
this.b=e},
aEZ:function aEZ(d,e,f){this.a=d
this.b=e
this.c=f},
foK:function foK(d,e,f){this.a=d
this.b=e
this.c=f},
foI:function foI(d){this.a=d},
foJ:function foJ(d,e,f){this.a=d
this.b=e
this.c=f},
fpd:function fpd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpc:function fpc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9T(d,e,f,g,h){return B.hFc(d,e,f,g,h)},
hFc(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c9T=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dD(d,new B.c9U(s,e,h,g,f,q),y.g),y.l),$async$c9T)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9T,w)},
aZC(d,e,f,g,h){return B.hFd(d,e,f,g,h)},
hFd(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZC=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auy("GET",d)
o=A.fSc()
if(o==null)o=new A.LP(A.a([],y.W))
x=7
return A.b(o.f3(0,s).d9(0,C.FA),$async$aZC)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ck(),$async$aZC)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BI(q,h,o,e,f,"Received via QR")
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
return A.i($async$aZC,w)},
aZB(d){return B.hFa(d)},
hFa(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vk(d,null).d9(0,C.o2),$async$aZB)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aN(0,A.m_(A.lY(p.e)).cz(0,p.w),null)
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
return A.i($async$aZB,w)},
c9S(d){return B.hFb(d)},
hFb(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c9S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vk(d,null).d9(0,C.q1),$async$c9S)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m_(A.lY(q.e)).cz(0,q.w)
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
return A.i($async$c9S,w)},
c9U:function c9U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jn:function jn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Iv(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hFi(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Iv(C.a.b2(u,v.length))}return null},
hFj(d){var x=B.Iv(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hFe(){var x,w=$.pB(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.au(10)
return C.d.hu(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(24)]},
a6L(d){return B.hFf(d)},
hFf(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a6L)
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
return A.i($async$a6L,w)},
a6M(d,e){return B.hFg(d,e)},
hFg(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6M=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cG,null),$async$a6M)
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
return A.i($async$a6M,w)},
BH(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BH)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Iv(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6N(r),$async$BH)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6L("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BH)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Iv(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BH)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hFe()
x=14
return A.b(B.a6N(m),$async$BH)
case 14:if(f!=null){x=12
break}l=new A.T(Date.now(),0,!1).a7().ad()
x=15
return A.b(B.a6M("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BH)
case 15:k=f
x=16
return A.b(B.a6M("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BH)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BH)
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
return A.i($async$BH,w)},
a6N(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Iv(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6L("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6N)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
a6O(d,e,f,g){return B.hFk(d,e,f,g)},
hFk(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6O=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Iv(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6N(r),$async$a6O)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cM(d,0,new B.ca_())>1048576||g.b3(d,new B.ca0())){v=B.Ew(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6Z("myCode",d,a0),$async$a6O)
case 4:u=a3
try{t=C.S.aN(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.co(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Ew(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZK(u,g.gL(d),a0),$async$a6O)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pB().au(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dD(d,new B.ca1(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZD(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.T(Date.now(),0,!1).a7().ad(),"status","pending"],i,y.z),q),$async$a6O)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6O,w)},
Ew(d,e,f,g,h){return B.hFh(d,e,f,g,h)},
hFh(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ew=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$Ew)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cM(a6,0,new B.c9W())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pB().au(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.au(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aN(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Iz(a9,q)
a0=new A.Ko(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Ew)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p2(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aan(a1.a,a4,"media",a1.d,a2).x4(m,n,new A.DM(!0,q.c)),$async$Ew)
case 12:J.cc(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$Ew)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aQ2(r),$async$Ew)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dD(a6,new B.c9X(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZD(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.T(Date.now(),0,!1).a7().ad(),"status","pending"],e,d),a8),$async$Ew)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aQ2(r),$async$Ew)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ew,w)},
aZD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6L(t),$async$aZD)
case 3:s=g
r=y.aL.a(J.q(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c9V(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6M(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZD,w)},
Ns(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ns=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6L("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ns)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.co(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aZE(k,a0),$async$Ns)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a7().ad())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZJ(h),$async$Ns)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.V0(g,a0),$async$Ns)
case 10:f=a3
if(f!=null&&J.cK(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a7().ad())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.Z(r,new B.c9Y(),q),n)
d=A.C(new A.Z(r,new B.c9Z(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d1(d,0,A.dB(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a6M("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$Ns)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ns,w)},
aZE(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.co(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a4(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.O(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.i91(k,j)
C.d.v(s,i)
x=5
return A.b(B.D_(l,m,"Received via My Code",t,e,i),$async$aZE)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQ2(s),$async$aZE)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZE,w)},
ca_:function ca_(){},
ca0:function ca0(){},
ca1:function ca1(){},
c9W:function c9W(){},
c9X:function c9X(){},
c9V:function c9V(){},
c9Y:function c9Y(){},
c9Z:function c9Z(){},
fIF(d,e){var x=0,w=A.j(y.H)
var $async$fIF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a3(d,!1).cg(A.e_(new B.fIG(e),!1,null,y.H)),$async$fIF)
case 2:return A.h(null,w)}})
return A.i($async$fIF,w)},
bCT(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.co(e)){v=!1
x=1
break}x=3
return A.b(A.a3(d,!1).cg(A.e_(new B.fIH(g,e,f),!1,null,y.y)),$async$bCT)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCT,w)},
fIG:function fIG(d){this.a=d},
fIH:function fIH(d,e,f){this.a=d
this.b=e
this.c=f},
UR:function UR(d,e){this.c=d
this.a=e},
aDe:function aDe(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dQo:function dQo(d,e){this.a=d
this.b=e},
UV:function UV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDh:function aDh(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dRx:function dRx(d){this.a=d},
dRy:function dRy(d){this.a=d},
dRz:function dRz(d){this.a=d},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRA:function dRA(d){this.a=d},
dRB:function dRB(d){this.a=d},
dRC:function dRC(d,e){this.a=d
this.b=e},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRE:function dRE(d,e){this.a=d
this.b=e},
dRF:function dRF(d){this.a=d},
dRI:function dRI(){},
dRG:function dRG(d){this.a=d},
dRH:function dRH(d,e){this.a=d
this.b=e},
biA:function biA(){},
US:function US(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDf:function aDf(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dQp:function dQp(d){this.a=d},
dQq:function dQq(d){this.a=d},
fVR(d){var x=d.hY
if(x>=0)return C.o.O(x)
return 10},
hFm(d){var x=d.kO
if(x>=0)return x
return 4.99},
hFl(d){var x=d.lr,w=y.N
w=x.jb(x,new B.ca3(),w,w)
return w},
hbc(d){var x=d.kP,w=y.N
w=x.jb(x,new B.ca4(),w,w)
return w},
aZH(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aZH)
case 7:s=f
r=A.w(p)
r=A.aU(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aZH,w)},
a6Q(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a6Q)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6Q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6Q,w)},
UU(d){var x=0,w=A.j(y.H),v,u
var $async$UU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$UU)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UU,w)},
fVQ(d,e){var x,w,v
if(B.hFm(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hFl(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.T(Date.now(),0,!1))},
aZF(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hbc(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.T(Date.now(),0,!1))},
hbd(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hbc(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.T(Date.now(),0,!1))?v:new A.T(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a7().ad())
d.kP=w},
apg(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apg)
case 7:s=f
r=A.w(p)
r=A.ew(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$apg,w)},
aph(d){var x=0,w=A.j(y.H),v,u,t
var $async$aph=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apg(d),$async$aph)
case 3:u=f
x=5
return A.b(A.az(),$async$aph)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$aph)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aph,w)},
apf(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fVR(d)
if(u<=0){v=!1
x=1
break}if(B.fVQ(d,e)){v=!1
x=1
break}x=3
return A.b(B.apg(e),$async$apf)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apf,w)},
aZG(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ix(e,d),$async$aZG)
case 3:if(g){v=-1
x=1
break}u=B.fVR(d)
if(u<=0){v=-1
x=1
break}if(B.fVQ(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apg(e),$async$aZG)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZG,w)},
ca6(d,e,f){var x=0,w=A.j(y.y),v
var $async$ca6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Ix(e,d),$async$ca6)
case 3:if(h){v=!1
x=1
break}v=B.apf(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca6,w)},
ca5(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ca5=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
x=3
return A.b(B.ca6(d,u,i.gTJ()),$async$ca5)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca5,w)},
a6P(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6P=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
if(i.gTJ()){v=!0
x=1
break}if(B.aZF(d,u)){v=!0
x=1
break}x=5
return A.b(A.ln(u,C.Sp),$async$a6P)
case 5:x=k?3:4
break
case 3:B.hbd(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6P)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kX(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Sp,"Doc Share for Organizations"),$async$a6P)
case 7:if(!k){v=!1
x=1
break}B.hbd(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6P)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
ca3:function ca3(){},
ca4:function ca4(){},
fJp(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fJp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fJp)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fcL.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hR([r],e.c))
s.toString
$.fcL.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJp,w)},
ibk(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fcL.bt($.fcL,new B.fJr(d))},
fJr:function fJr(d){this.a=d},
fec(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fec=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aN(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],f))
s.toString
u=A.ne(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jt,null,y.H),$async$fec)
case 3:C.Am.fj(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eR.mp()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fec,w)},
afI(d,e,f){var x=0,w=A.j(y.H),v
var $async$afI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fdi.n(0,d,new B.abO(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$afI)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.G(["parts",e,"size",f],v,y.C),null)),$async$afI)
case 2:return A.h(null,w)}})
return A.i($async$afI,w)},
afC(d){return B.hV5(d)},
hV5(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fdi.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afC)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.co(s)){v=null
x=1
break}o=J.b6(s,new B.fhI(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.abO(r)
$.fdi.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afC,w)},
QH(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$QH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ch(e))
$.Gi.n(0,d,u)
x=3
return A.b(B.Rb(d,u),$async$QH)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QH,w)},
aNT(d){return B.hV3(d)},
hV3(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gi.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.Ra(d),$async$aNT)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.Gi.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aNT)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aM(r)
x=!J.co(q)?9:10
break
case 9:B.QH(d,q)
x=11
return A.b(J.hy(s,d),$async$aNT)
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
return A.i($async$aNT,w)},
hRd(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ch(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ch(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ch(A.Ab(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ch(d)),y.K)
return A.f8(null,y.K)},
a1v(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bB,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fL(r,"loadend",new B.fmW(r,t),!1,s)
A.fL(r,"error",new B.fmX(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ir(0,C.Mx,new B.fmY())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1v,w)},
aOc(d,e,f){return B.hXl(d,e,f)},
hXl(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aOc=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1v(i),$async$aOc)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Rb(o,p),$async$aOc)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cc(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afI(k,j,s),$async$aOc)
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
return A.i($async$aOc,w)},
aOb(d,e,f){return B.hXk(d,e,f)},
hXk(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOb=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aOc(d,e,f),$async$aOb)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1v(f),$async$aOb)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gi.n(0,s,r)
$.QY.n(0,s,r)
x=11
return A.b(B.QH(s,r),$async$aOb)
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
return A.i($async$aOb,w)},
BI(d,e,f,g,h,i){return B.hFv(d,e,f,g,h,i)},
hFv(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BI=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.au(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.T(Date.now(),0,!1).a7().ad(),a0,f,B.aZN(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.QH(s,d),$async$BI)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BI)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cJ.gct().aM(d)),$async$BI)
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
return A.b(B.AM(e),$async$BI)
case 12:j=a2
J.cc(j,m)
x=13
return A.b(B.Gt(e,j),$async$BI)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BI,w)},
UW(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UW=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AM(d),$async$UW)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.au(99999)
n=p.b
l=o.type
l.toString
k=B.hbf(n,null,l)
l=o.size
l.toString
j=new A.T(Date.now(),0,!1).a7().ad()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZN(),null)
$.agb.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1v(o),$async$UW)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.Gi.n(0,h,g)
$.QY.n(0,h,g)
B.QH(h,g)
x=9
break
case 10:x=11
return A.b(B.aOb(d,m,o),$async$UW)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.M)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gt(d,t),$async$UW)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UW,w)},
fVV(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fVV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hbf(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Iy(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.BI(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVV,w)},
Iy(d,e,f,g,h,i){return B.hFu(d,e,f,g,h,i)},
hFu(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Iy=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.au(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ko(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Iy)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.co(m)){x=6
break}J.h4(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ch(J.RK(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Rb(k,l),$async$Iy)
case 11:J.cc(q,k);++p
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
return A.b(j.a4(0),$async$Iy)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Rb(k,new Uint8Array(A.ch(n))),$async$Iy)
case 15:J.cc(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afI(r,q,g),$async$Iy)
case 16:f=new B.jn(i,a1,a0,g,new A.T(Date.now(),0,!1).a7().ad(),a2,null,B.aZN(),null)
x=17
return A.b(B.AM(d),$async$Iy)
case 17:e=a6
J.cc(e,f)
x=18
return A.b(B.Gt(d,e),$async$Iy)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Iy,w)},
UY(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UY=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agb.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1v(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afC(s),$async$UY)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Ra(u[o]),$async$UY)
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
v=A.Ab(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.M)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QY.h(0,s)
if(i==null)i=$.Gi.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rv(d,e),$async$UY)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QY.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Ab(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UY,w)},
hbf(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rv(d,e){return B.hFw(d,e)},
hFw(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rv=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QY.h(0,f)
if(e==null)e=$.Gi.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.agb.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1v(s),$async$rv)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.Gi.n(0,f,r)
$.QY.n(0,f,r)
B.QH(f,r)
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
return A.b(B.afC(f),$async$rv)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ay6(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Ra(g[l]),$async$rv)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.M(0,k)
case 14:g.length===m||(0,A.M)(g),++l
x=13
break
case 15:r=n.ao9()
if(!C.aH.gam(r)){$.Gi.n(0,f,r)
$.QY.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNT(f),$async$rv)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QY.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UY(a0,a1,0,g),$async$rv)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ch(i))
$.Gi.n(0,f,h)
$.QY.n(0,f,h)
B.QH(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rv,w)},
hFz(d){var x,w,v=$.agb.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hFA(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hR([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hFx(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apn(d,e,f,g,h){return B.hFy(d,e,f,g,h)},
hFy(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apn=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agb.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1v(s),$async$apn)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rv(g,e),$async$apn)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eY().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ik(d).x4(h,r,new A.DM(!0,e.c)),$async$apn)
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
return A.i($async$apn,w)},
hbh(d,e,f,g,h){var x,w,v,u,t=$.hbg
$.hbg=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.au(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cah.n(0,t,new B.bv1(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ay6(u)))
return t},
fVW(d){var x=0,w=A.j(y.H)
var $async$fVW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVW,w)},
Iz(d,e){var $async$Iz=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agb.h(0,h)
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
return A.qd(B.UY(d,e,p,o<q?o:q),$async$Iz,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qd(A.FP(n),$async$Iz,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qd(B.afC("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Iz,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qd(B.Ra(h[l]),$async$Iz,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qd(A.FP(k),$async$Iz,w)
case 21:case 20:case 16:h.length===r||(0,A.M)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qd(B.rv(d,e),$async$Iz,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qd(A.FP(A.Ab(j,p,o<i?o:i)),$async$Iz,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qd(null,0,w)
case 2:return A.qd(t.at(-1),1,w)}})
var x=0,w=A.hjY($async$Iz,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hlN(w)},
aZP(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cah.h(0,d)
if(t==null||J.co(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a4E(),$async$aZP)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZP,w)},
UX(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cah.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4E(),$async$UX)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afI(r.c,u,r.z),$async$UX)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.T(Date.now(),0,!1).a7().ad(),r.f,r.r,B.aZN(),null)
u=r.a
x=5
return A.b(B.AM(u),$async$UX)
case 5:s=f
J.cc(s,t)
x=6
return A.b(B.Gt(u,s),$async$UX)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UX,w)},
a6W(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cah.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agS(u[s]),$async$a6W)
case 6:case 4:u.length===t||(0,A.M)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
caj(d,e,f){var x=0,w=A.j(y.H)
var $async$caj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzX(d,e,f),$async$caj)
case 2:return A.h(null,w)}})
return A.i($async$caj,w)},
cak(d,e,f){var x=0,w=A.j(y.H)
var $async$cak=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzY(d,e,f),$async$cak)
case 2:return A.h(null,w)}})
return A.i($async$cak,w)},
Ex(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ex=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AM(d),$async$Ex)
case 2:p=g
J.nx(p,new B.cai(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gi.W(0,v)
$.agb.W(0,e)
x=3
return A.b(B.afC(v),$async$Ex)
case 3:u=g
$.fdi.W(0,v)
x=4
return A.b(A.az(),$async$Ex)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ex)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ex)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agS(s[q]),$async$Ex)
case 12:case 10:s.length===r||(0,A.M)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agS(v),$async$Ex)
case 13:x=14
return A.b(B.Gt(d,p),$async$Ex)
case 14:return A.h(null,w)}})
return A.i($async$Ex,w)},
aZO(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rv(d,e),$async$aZO)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fec(t,A.aN(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZO,w)},
AM(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AM)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fmZ(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AM,w)},
Gt(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Gt)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fr6(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gt)
case 3:return A.h(null,w)}})
return A.i($async$Gt,w)},
bzX(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AM(d),$async$bzX)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.flo(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDV(f))
x=4
return A.b(B.Gt(d,u),$async$bzX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzX,w)},
bzY(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AM(d),$async$bzY)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.flp(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cIX(f))
x=4
return A.b(B.Gt(d,u),$async$bzY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzY,w)},
abO:function abO(d){this.a=d},
fhI:function fhI(){},
fmW:function fmW(d,e){this.a=d
this.b=e},
fmX:function fmX(d){this.a=d},
fmY:function fmY(){},
cai:function cai(d){this.a=d},
bv1:function bv1(d,e,f,g,h,i,j,k,l){var _=this
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
fmZ:function fmZ(){},
fr6:function fr6(){},
flo:function flo(d){this.a=d},
flp:function flp(d){this.a=d},
a6X(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b3(d,new B.can())?3:4
break
case 3:x=5
return A.b(B.aZQ(d,e),$async$a6X)
case 5:u=g
if(u!=null){t=u.c
B.Nu(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gI(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.aZL(s),$async$a6X)
case 10:case 9:if(g){v=new A.Q3(1,D.S2,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UZ(d,e),$async$a6X)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.V3(!0,!0,d,e),$async$a6X)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nu(d,D.zy,e,t)
v=new A.Q3(p,D.zy,t)
x=1
break}v=B.cam(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6X,w)},
UZ(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6Z(null,d,e),$async$UZ)
case 3:p=g
try{u=C.S.aN(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.co(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZK(p,d.length,e),$async$UZ)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cak(e,C.d.gI(d).a,r.b),$async$UZ)
case 7:case 6:q=r.a
x=8
return A.b(B.Nu(d,D.S2,e,q),$async$UZ)
case 8:v=new A.Q3(d.length,D.S2,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UZ,w)},
V_(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$V_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mu(D.mH)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6Y(d,e),$async$V_)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.caf(s,d,e,t),$async$V_)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZL(t),$async$V_)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rv(e,d),$async$V_)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UZ(A.a([d],y.r),e),$async$V_)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$V_,w)},
V1(){var x=0,w=A.j(y.H)
var $async$V1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fVP(),$async$V1)
case 2:x=3
return A.b(B.aQj(),$async$V1)
case 3:return A.h(null,w)}})
return A.i($async$V1,w)},
a6Y(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZN()
x=3
return A.b(B.caj(e,d.a,u),$async$a6Y)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Y,w)},
Nu(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.S2&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6Y(p,f),$async$Nu)
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
return A.b(B.cae(o,p,u,f),$async$Nu)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.caf(o,p,f,t),$async$Nu)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cad(o,u,p,f),$async$Nu)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.M)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nu,w)},
aZQ(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cal(e,d),$async$aZQ)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.V3(!1,!0,d,e),$async$aZQ)
case 4:u=g
if(u!=null){t=u.b
v=new A.Q3(u.a,D.zy,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZQ,w)},
cal(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cal=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UY(d,s,0,1),$async$cal)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.M)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cal,w)},
cam(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cam=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6Z(null,d,e),$async$cam)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hbe(u)
if(t.length>800){v=null
x=1
break}v=new A.Q3(d.length,D.dEX,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cam,w)},
apo(d,e,f){return B.hFD(d,e,f)},
hFD(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apo=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nd(g,1)
x=B.fVU(g)?3:4
break
case 3:x=5
return A.b(B.cag(g),$async$apo)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nd(g,13))
try{k=B.Ey(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nd(g,13))
u=9
x=12
return A.b(B.aZJ(q),$async$apo)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.V0(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.fVT(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.V0(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.IA(C.a.i(J.nd(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.IA(C.a.i(J.nd(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.IA(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.V0(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apo,w)},
IA(d,e,f){return B.hFB(d,e,f)},
hFB(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IA=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aN(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aN(g,f,"")}else j=e
s=j
r=A.cG(A.w(s)+"/manifest.json",0,null)
q=A.cG(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZB(r),$async$IA)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZB(A.cG(s,0,null)),$async$IA)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.co(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c9T(o,r,a1,n,a2),$async$IA)
case 11:m=a4
x=J.co(m)?12:13
break
case 12:x=14
return A.b(B.c9S(q),$async$IA)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.V0(l,a2),$async$IA)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.co(m)?null:m
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
return A.i($async$IA,w)},
a6Z(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.rv(f,r),$async$a6Z)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aM(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.T(Date.now(),0,!1).a7().ad())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Z,w)},
V0(d,e){return B.hFC(d,e)},
hFC(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$V0=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aN(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.q(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.q(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.q(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.q(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BI(i,a3,d,k,l,o),$async$V0)
case 9:h=a5
if(h!=null)J.cc(n,h)
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
return A.i($async$V0,w)},
Nt:function Nt(d,e){this.a=d
this.b=e},
can:function can(){},
a14(d){var x=A.P(d).ax.a===C.I,w=x?D.afo:D.ada,v=x?D.agV:C.c,u=x?C.aP:C.M,t=x?C.bL:C.al,s=x?D.aeq:C.aL
return new A.aGd([w,s,v,u,t,x?C.fe:C.bP])},
hqN(d,e){var x=e?C.w.j(0.72):C.aW
return A.cf(null,x,!0,null,new B.fNx(e),d,null,!0,!0,y.N)},
ca2(d,e,f,g,h,i,j,k,l){return new B.UT(e,l,d,f,k,j,g,h,i,null)},
Z2(d,e,f,g,h,i,j){return new B.bdj(g,h,j,e,i,d,f,null)},
fNx:function fNx(d){this.a=d},
Z_:function Z_(d,e){this.c=d
this.a=e},
azi:function azi(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d4E:function d4E(d){this.a=d},
d4C:function d4C(d){this.a=d},
d4D:function d4D(d){this.a=d},
buG:function buG(){},
UT:function UT(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDg:function aDg(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dRv:function dRv(d){this.a=d},
dQT:function dQT(d,e){this.a=d
this.b=e},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQs:function dQs(d,e,f){this.a=d
this.b=e
this.c=f},
dQr:function dQr(d){this.a=d},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQy:function dQy(d,e,f){this.a=d
this.b=e
this.c=f},
dQx:function dQx(d){this.a=d},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRk:function dRk(d){this.a=d},
dQQ:function dQQ(d,e,f){this.a=d
this.b=e
this.c=f},
dQN:function dQN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQw:function dQw(d){this.a=d},
dQY:function dQY(d){this.a=d},
dQX:function dQX(){},
dQC:function dQC(d){this.a=d},
dRg:function dRg(d,e){this.a=d
this.b=e},
dRh:function dRh(d,e){this.a=d
this.b=e},
dRi:function dRi(d,e){this.a=d
this.b=e},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQP:function dQP(d,e){this.a=d
this.b=e},
dR9:function dR9(d,e){this.a=d
this.b=e},
dR5:function dR5(d){this.a=d},
dR4:function dR4(d){this.a=d},
dR6:function dR6(){},
dR7:function dR7(){},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRa:function dRa(){},
dRb:function dRb(d){this.a=d},
dR3:function dR3(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d){this.a=d},
dR_:function dR_(d){this.a=d},
dR0:function dR0(d){this.a=d},
dR1:function dR1(d){this.a=d},
dR2:function dR2(d){this.a=d},
dQz:function dQz(){},
dQA:function dQA(d){this.a=d},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQu:function dQu(d,e,f){this.a=d
this.b=e
this.c=f},
dQR:function dQR(d){this.a=d},
dQS:function dQS(d,e,f){this.a=d
this.b=e
this.c=f},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQH:function dQH(d){this.a=d},
dQE:function dQE(d,e,f){this.a=d
this.b=e
this.c=f},
dQI:function dQI(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQK:function dQK(){},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQF:function dQF(d){this.a=d},
dQD:function dQD(d,e,f){this.a=d
this.b=e
this.c=f},
dQG:function dQG(){},
dQW:function dQW(d){this.a=d},
dQV:function dQV(d,e){this.a=d
this.b=e},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRc:function dRc(d){this.a=d},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRe:function dRe(d){this.a=d},
dRs:function dRs(d){this.a=d},
dRq:function dRq(d){this.a=d},
dRr:function dRr(d){this.a=d},
dRt:function dRt(){},
dRu:function dRu(d,e){this.a=d
this.b=e},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRn:function dRn(d,e,f){this.a=d
this.b=e
this.c=f},
dRl:function dRl(d,e,f){this.a=d
this.b=e
this.c=f},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRp:function dRp(d,e){this.a=d
this.b=e},
azf:function azf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdi:function bdi(d,e,f){this.c=d
this.d=e
this.a=f},
d4A:function d4A(){},
d4B:function d4B(){},
ac7:function ac7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d4Y:function d4Y(){},
d4X:function d4X(d){this.a=d},
Z1:function Z1(d,e,f){this.c=d
this.d=e
this.a=f},
azk:function azk(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d4U:function d4U(d){this.a=d},
d4V:function d4V(d,e,f){this.a=d
this.b=e
this.c=f},
d4W:function d4W(d,e){this.a=d
this.b=e},
d4S:function d4S(d,e){this.a=d
this.b=e},
d4Q:function d4Q(d){this.a=d},
d4O:function d4O(d){this.a=d},
d4L:function d4L(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4N:function d4N(d){this.a=d},
d4T:function d4T(d){this.a=d},
d4P:function d4P(d){this.a=d},
d4M:function d4M(d){this.a=d},
YZ:function YZ(d,e,f){this.c=d
this.d=e
this.a=f},
azh:function azh(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d4x:function d4x(d){this.a=d},
d4w:function d4w(d,e){this.a=d
this.b=e},
d4y:function d4y(d){this.a=d},
d4v:function d4v(d,e){this.a=d
this.b=e},
d4z:function d4z(d){this.a=d},
d4u:function d4u(d,e){this.a=d
this.b=e},
d4q:function d4q(d){this.a=d},
d4r:function d4r(d){this.a=d},
d4s:function d4s(d,e){this.a=d
this.b=e},
d4t:function d4t(d){this.a=d},
PG:function PG(d,e,f){this.c=d
this.d=e
this.a=f},
azn:function azn(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d5a:function d5a(d){this.a=d},
d5b:function d5b(d){this.a=d},
d5c:function d5c(d){this.a=d},
d5d:function d5d(d){this.a=d},
d5e:function d5e(d,e){this.a=d
this.b=e},
d5f:function d5f(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5g:function d5g(d){this.a=d},
Z3:function Z3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azl:function azl(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d56:function d56(d,e){this.a=d
this.b=e},
d57:function d57(d,e){this.a=d
this.b=e},
d4Z:function d4Z(d,e,f){this.a=d
this.b=e
this.c=f},
d5_:function d5_(d){this.a=d},
d50:function d50(){},
d55:function d55(){},
d51:function d51(d,e){this.a=d
this.b=e},
d52:function d52(d,e){this.a=d
this.b=e},
d53:function d53(d,e){this.a=d
this.b=e},
d54:function d54(d,e){this.a=d
this.b=e},
ac5:function ac5(d,e){this.c=d
this.a=e},
d4p:function d4p(d){this.a=d},
YY:function YY(d){this.a=d},
azg:function azg(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Z4:function Z4(d,e){this.c=d
this.a=e},
azm:function azm(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d59:function d59(d){this.a=d},
d58:function d58(d){this.a=d},
bdj:function bdj(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hFE(){var x,w=$.pB(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"VT"+C.d.hu(v)},
Nv(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$Nv)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$Nv)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"relays")
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nv,w)},
a7_(d){return B.hFF(d)},
hFF(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7_)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.z),!1,!1,C.cG,null),$async$a7_)
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
return A.i($async$a7_,w)},
V2(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$V2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nv(),$async$V2)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.T(Date.now(),0,!1).a7().ad())
r.n(s,d,t)
x=4
return A.b(B.a7_(s),$async$V2)
case 4:case 1:return A.h(v,w)}})
return A.i($async$V2,w)},
V3(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$V3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c6(),$async$V3)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.S(f).k("Z<1>")
u=A.C(new A.Z(f,new B.cap(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hFE()
t=A.S(u).k("N<1,a7<n,aD>>")
r=A.C(new A.N(u,new B.caq(s),t),t.k("ak.E"))
x=6
return A.b(B.Nv(),$async$V3)
case 6:q=i
J.aG(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.C))
x=7
return A.b(B.a7_(q),$async$V3)
case 7:x=8
return A.b(B.a70(r,u,g,s),$async$V3)
case 8:v=new A.boI(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$V3,w)},
app(d){var x=0,w=A.j(y.y),v,u,t
var $async$app=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nv(),$async$app)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$app,w)},
car(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$car=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nv(),$async$car)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a4(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$car,w)},
a70(d,e,f,g){return B.hFG(d,e,f,g)},
hFG(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a70=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apn("media",r,new B.cao(s,e,g),f,q),$async$a70)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.V2(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a70)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.V2(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$a70)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.V2(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a70)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a70,w)},
Ey(d,e,f){return B.hFH(d,e,f)},
hFH(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ey=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c6(),$async$Ey)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.app(b3),$async$Ey)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kB,null,g),$async$Ey)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.app(b3),$async$Ey)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nv(),$async$Ey)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.O(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.co(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a4(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.eY().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p2(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aan(a8.a,b0,"media",a8.d,a9).CG(m)
k=A.cG(l,0,null)
x=17
return A.b(B.aZC(k,n,o,s,b7),$async$Ey)
case 17:j=c0
if(j!=null){J.cc(p,j);++q
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
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eY().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p2(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aan(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ey)
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
a0.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a7().ad())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7_(e),$async$Ey)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ey,w)},
cap:function cap(){},
caq:function caq(d){this.a=d},
cao:function cao(d,e,f){this.a=d
this.b=e
this.c=f},
aQj(){var x=0,w=A.j(y.H),v,u
var $async$aQj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hQB=null
v=y.H
u=A.dS(null,v)
x=2
return A.b(u,$async$aQj)
case 2:u=A.dS(null,v)
x=3
return A.b(u,$async$aQj)
case 3:u=$.h05
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dS(u,v),$async$aQj)
case 4:$.h05=$.hZd=$.hZe=null
return A.h(null,w)}})
return A.i($async$aQj,w)},
fqI(d){var x=0,w=A.j(y.H),v,u
var $async$fqI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6W){x=1
break}u=new A.bg($.bB,y.d4)
d.c=new B.fqJ(new A.bY(u,y.aY))
x=3
return A.b(u.ir(0,C.hP,new B.fqK()),$async$fqI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fqI,w)},
hZb(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hFo(x):x},
h09(d){var x=0,w=A.j(y.T),v,u,t
var $async$h09=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.apr(u)
x=1
break}v=B.fVT(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h09,w)},
h08(d){var x=0,w=A.j(y.T),v,u,t
var $async$h08=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aps(u)
x=1
break}v=B.fVT(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h08,w)},
fJ9(d){var x=0,w=A.j(y.T),v
var $async$fJ9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aps(d),$async$fJ9)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJ9,w)},
bAP(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h08(d),$async$bAP)
case 3:q=f
if(q==null){x=1
break}t=C.S.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAP,w)},
ff0(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ff0=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UX(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BI(d.ao9(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ff0,w)},
Gv(d,e,f){return B.i0D(d,e,f)},
i0D(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gv=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h09(a1),$async$Gv)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aN(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a4(u)
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
return A.b($.hsF().aE9(D.dti,null),$async$Gv)
case 4:l=d.h05=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ay6(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bB,y.b1)
l.y=new B.frg(f,k,new B.frh(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7D(0,new B.X5(r,"offer")),$async$Gv)
case 5:d=l
x=7
return A.b(l.akT(0),$async$Gv)
case 7:x=6
return A.b(d.a7v(0,a4),$async$Gv)
case 6:x=8
return A.b(B.fqI(l),$async$Gv)
case 8:x=9
return A.b(l.aoV(),$async$Gv)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hZb(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apt(m,h),$async$Gv)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hbe(h)
case 11:v=new A.bo0(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gv,w)},
fqJ:function fqJ(d){this.a=d},
fqK:function fqK(){},
frh:function frh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
frg:function frg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
frf:function frf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i2y(d){switch(d){case"new":return D.emX
case"checking":return D.emY
case"connected":return D.en_
case"completed":return D.emZ
case"failed":return D.en1
case"disconnected":return D.en2
case"closed":return D.aN6
case"count":return D.en0}return D.aN6},
i2z(d){switch(d){case"new":return D.aN7
case"gathering":return D.en3
case"complete":return D.a6W}return D.aN7},
icO(d){switch(d){case"stable":return D.en4
case"have-local-offer":return D.en5
case"have-local-pranswer":return D.en7
case"have-remote-offer":return D.en6
case"have-remote-pranswer":return D.en8
case"closed":return D.aNd}return D.aNd},
ib1(d){switch(d){case"new":return D.aNa
case"connecting":return D.aNb
case"connected":return D.aNc
case"closed":return D.a6X
case"disconnected":return D.aN9
case"failed":return D.aN8}return D.a6X},
a9k:function a9k(d,e){this.a=d
this.b=e},
Ov:function Ov(d,e){this.a=d
this.b=e},
X4:function X4(d,e){this.a=d
this.b=e},
Ou:function Ou(d,e){this.a=d
this.b=e},
F2:function F2(d,e){this.a=d
this.b=e},
cln:function cln(){},
fXE(d){var x=new B.F1()
x.a=d
x.b=!0
return x},
F1:function F1(){this.b=this.a=$},
a9j:function a9j(){},
atI:function atI(){},
X5:function X5(d,e){this.a=d
this.b=e},
fVP(){var x=0,w=A.j(y.H)
var $async$fVP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVP,w)},
fVS(d,e,f){var x=0,w=A.j(y.T),v
var $async$fVS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mu(D.mH))){v=null
x=1
break}v=B.fJp(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVS,w)},
hbe(d){var x,w=F.acB.a4o(C.dN.aM(d),null)
if(w.length===0){x=C.dN.aM(d)
return C.cJ.gct().aM(x)}return C.cJ.gct().aM(w)},
hFn(d){var x,w,v=C.cF.aM(d)
try{x=C.cf.cz(0,F.acA.bcM(v,!1))
return x}catch(w){x=C.cf.cz(0,v)
return x}},
fVT(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hFn(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.cf.cz(0,C.cF.aM(x))
return v}catch(u){return x}}return null},
hFo(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hFp(){var x,w=$.pB(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"DS"+C.d.hu(v)},
aZI(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$aZI)
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
return A.i($async$aZI,w)},
ca7(d,e){return B.hFq(d,e)},
hFq(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ca7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$ca7)
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
return A.i($async$ca7,w)},
aZL(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZI(d),$async$aZL)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZL,w)},
aZK(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hFp()
r=C.a.i(f)
t=C.dN.aM(s)
x=3
return A.b(B.ca7(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aM(t),"usesRemaining",999999,"createdAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$aZK)
case 3:if(!h){v=null
x=1
break}v=new A.a05("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZK,w)},
aZJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZI(o),$async$aZJ)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cz(0,C.cF.aM(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZJ,w)},
ca8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ca8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBK("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$ca8)
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
return A.i($async$ca8,w)},
aZM(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Iw(),$async$aZM)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZM,w)},
apk(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apk)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZM(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apk,w)},
api(d,e){var x=0,w=A.j(y.H)
var $async$api=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$api)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$api)
case 2:return A.h(null,w)}})
return A.i($async$api,w)},
a6S(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6S=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a6S)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Iw(),$async$a6S)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.C))
x=5
return A.b(A.a6R(s),$async$a6S)
case 5:x=6
return A.b(B.api(f,u),$async$a6S)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6S,w)},
a6T(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6T=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a6T)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Iw(),$async$a6T)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a4(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ai(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.api(g,q),$async$a6T)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6R(u),$async$a6T)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6T,w)},
a6U(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6U=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a6U)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Iw(),$async$a6U)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a4(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aZF(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6U)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.T(Date.now(),0,!1).a7().ad()],p,p),null)),$async$a6U)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6U,w)},
ca9(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ca9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$ca9)
case 7:s=f
p=A.w(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aN(0,r,null)
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
return A.i($async$ca9,w)},
Ix(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Ix=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ca9(d),$async$Ix)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZM(t),$async$Ix)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apj(d),$async$Ix)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZF(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apj(d),$async$Ix)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ix,w)},
apj(d){var x=0,w=A.j(y.H)
var $async$apj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apj)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apj)
case 2:return A.h(null,w)}})
return A.i($async$apj,w)},
aZN(){var x,w=$.pB(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(32)]
return C.d.hu(v)},
a6V(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fVU(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cac(d){return B.hFs(d)},
hFs(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cac=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6V(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cac)
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
return A.i($async$cac,w)},
apm(d,e){return B.hFt(d,e)},
hFt(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6V(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apm)
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
return A.i($async$apm,w)},
cae(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cae=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apm(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$cae)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cae,w)},
cad(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cad=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apm(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$cad)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cad,w)},
caf(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$caf=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apm(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caf,w)},
cag(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cag=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fVU(d)){v=null
x=1
break}x=3
return A.b(B.cac(d),$async$cag)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a4(u)
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
return A.i($async$cag,w)},
a71(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a71=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a71)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a71)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"signals")
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a71,w)},
apq(d){return B.hFI(d)},
hFI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$apq)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.T(Date.now(),0,!1).a7().ad()],y.N,y.z),!1,!1,C.cG,null),$async$apq)
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
return A.i($async$apq,w)},
apr(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c6(),$async$apr)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a71(),$async$apr)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cf.cz(0,C.cF.aM(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.T(Date.now(),0,!1).a7().ad())
J.aG(s,j,o)
x=9
return A.b(B.apq(s),$async$apr)
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
return A.i($async$apr,w)},
apt(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c6(),$async$apt)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a71(),$async$apt)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dN.aM(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aM(r))
q.n(0,"answerAt",new A.T(Date.now(),0,!1).a7().ad())
t.n(u,p,q)
x=5
return A.b(B.apq(u),$async$apt)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apt,w)},
aps(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aps=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c6(),$async$aps)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a71(),$async$aps)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cf.cz(0,C.cF.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aps,w)},
aon(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aon=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q4)){v=null
x=1
break}x=3
return A.b(p.m0(e),$async$aon)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.h5),$async$aon)
case 7:q=g
o=q
o=o==null?null:J.eV(J.vt(o))
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
return A.i($async$aon,w)},
i91(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.u(w),5,"0")
return v},
fHA(d){return B.i93(d)},
i93(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fHA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").KR(d,3600),$async$fHA)
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
return A.i($async$fHA,w)},
D_(d,e,f,g,h,i){var x=null
return B.i90(d,e,f,g,h,i)},
i90(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D_=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hbh(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fVW(r),$async$D_)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fHA(o),$async$D_)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6W(r),$async$D_)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aQn)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LP(A.a([],g))
x=15
return A.b(d.f3(0,A.auy("GET",A.cG(n,0,null))).d9(0,C.FA),$async$D_)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6W(r),$async$D_)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ko(d)
u=19
case 22:x=24
return A.b(d.C(),$async$D_)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZP(r,k),$async$D_)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$D_)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.M)(b0),++f
x=8
break
case 10:i=B.UX(r)
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
return A.b(B.a6W(r),$async$D_)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D_,w)},
aQ2(d){return B.i92(d)},
i92(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aQ2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").W(0,d),$async$aQ2)
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
return A.i($async$aQ2,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[148]
O=c[42]
F=c[244]
I=c[138]
P=c[222]
E=c[215]
G=c[90]
Q=c[186]
R=c[139]
S=c[220]
K=c[248]
L=c[253]
B=a.updateHolder(c[21],B)
D=c[251]
T=c[185]
M=c[205]
U=c[67]
V=c[254]
W=c[73]
X=c[57]
N=c[89]
Y=c[252]
B.clo.prototype={
aE9(d,e){return this.cKt(d,e)},
cKt(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aE9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.U(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.kl(A.cB(t)))
t=J.k(u)
v=B.hKh(C.cJ.gct().aM(new A.dc(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aE9,w)}}
B.b3X.prototype={
bym(d){var x=this,w=x.w
w.onclose=A.hq(new B.clj(x))
w.onopen=A.hq(new B.clk(x))
w.onmessage=A.hq(new B.cll(x))
w.onbufferedamountlow=A.hq(new B.clm(x))},
gda(d){return this.x},
ahb(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.F1()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fXE(J.eV(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$ahb)
case 8:v=t.fXE(s.anz(f,0,null))
x=1
break
case 7:case 4:v=B.fXE(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahb,w)}}
B.b3Y.prototype={
byn(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hq(new B.clp(x)))
w.addEventListener("icecandidate",A.hq(new B.clq(x)))
w.addEventListener("iceconnectionstatechange",A.hq(new B.clr(x)))
w.onicegatheringstatechange=A.hq(new B.cls(x))
w.addEventListener("signalingstatechange",A.hq(new B.clt(x)))
if(!$.h3U())w.addEventListener("connectionstatechange",A.hq(new B.clu(x)))
w.addEventListener("negotiationneeded",A.hq(new B.clv(x)))
w.addEventListener("track",A.hq(new B.clw(x)))},
akT(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.kl(A.cB(A.U(y.N,y.z)))),y.aQ),$async$akT)
case 3:t=f
v=new B.X5(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akT,w)},
a7v(d,e){return this.bnN(0,e)},
bnN(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7v)
case 2:return A.h(null,w)}})
return A.i($async$a7v,w)},
a7D(d,e){return this.bo2(0,e)},
bo2(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7D)
case 2:return A.h(null,w)}})
return A.i($async$a7D,w)},
aoV(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aoV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.X5(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoV,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.ac6.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.Z0.prototype={
U(){return new B.azj()},
gd7(){return this.c}}
B.azj.prototype={
a_(){this.a1()
this.adX()},
adX(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZG(u.e,u.c),$async$adX)
case 2:t=e
if(v.c!=null)v.m(new B.d4I(v,t))
return A.h(null,w)}})
return A.i($async$adX,w)},
Qe(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apf(t.e,t.c,!1),$async$Qe)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.R(D.f58)
x=1
break}x=4
return A.b(B.a6Q(u.a.c,"individual"),$async$Qe)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a3(t,!1).a5Z(A.e_(new B.d4F(u),!1,null,y.H)),$async$Qe)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qe,w)},
Jd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.foH(o),$async$Jd)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6U(o.e,r,s,q),$async$Jd)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.R(D.f29)
x=1
break}x=5
return A.b(B.a6Q(u.a.c,"member"),$async$Jd)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a3(o,!1).a5Z(A.e_(new B.d4H(u),!1,null,y.H)),$async$Jd)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jd,w)},
xZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6P(t.e,o,t.f,t.r,t.w,s),$async$xZ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6Q(u.a.c,"org_owner"),$async$xZ)
case 4:x=5
return A.b(B.apk(u.a.c),$async$xZ)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fpb(o),$async$xZ)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6S(s,t,o,q.c),$async$xZ)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.R(D.f26)
x=1
break}x=10
return A.b(B.apk(u.a.c),$async$xZ)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.R(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a3(o,!1).a5Z(A.e_(new B.d4G(u),!1,null,y.H)),$async$xZ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xZ,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jp:C.pQ,q=B.fVR(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.fT,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fop,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h1,t,t,t),C.aA,D.fHN,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c1R,C.n),t,t,t,t,C.eC,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lJ(new B.d4K(),t),C.N,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ad)
if(!u.a.x)C.d.v(p,A.a([new B.acy(C.eV,C.azJ,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gce3(),t),C.ad],v))
p.push(new B.acy(C.p1,C.a2N,"Team Member","Sign in with your organization access code + password",u.gceV(),t))
p.push(C.ad)
p.push(new B.acy(C.amb,C.a4j,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gceq(),t))
return A.c5(t,r,A.bm(!0,A.ce(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.t,t,C.y,t,F.ajs,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acy.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a2,!0,s,A.aL(!1,r,!0,A.eF(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ow,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.yv,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBT.prototype={}
B.aEZ.prototype={}
B.jn.prototype={
mu(d){var x=this.b,w=C.a.oH(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gapA(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ac(x/1024,1)+" KB"
if(x<1073741824)return C.k.ac(x/1048576,1)+" MB"
return C.k.ac(x/1073741824,2)+" GB"},
ag(){var x,w=this,v=A.U(y.N,y.z)
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
bce(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cIX(d){return this.bce(null,d)},
aDV(d){return this.bce(d,null)}}
B.UR.prototype={
U(){return new B.aDe(new A.cy(null,y.A))},
gd7(){return this.c}}
B.aDe.prototype={
a_(){this.a1()
this.adY()},
adY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BH(u.a.c),$async$adY)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dQo(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adY,w)},
adZ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fD(s)),$async$adZ)
case 3:t=u.c
if(t!=null)t.J(y.q).f.R(D.f62)
case 1:return A.h(v,w)}})
return A.i($async$adZ,w)},
ZD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ZD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aon(s.d,4),$async$ZD)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t2(r,"ngmy_my_code_"+m+".png"),$async$ZD)
case 8:q=e
o=s.c
if(o!=null)o.J(y.q).f.R(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.J(y.q).f.R(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ZD,w)},
ahD(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9X("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahD,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jp:C.pQ,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.ml
else if(q.e==null)x=A.au(new A.D(C.eC,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aC.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a3e,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aj1,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aC.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ce(A.x(A.a([x,C.mP,w,C.kN,new A.eG(A.p(p,A.pW(p,p,!1,B.hFj(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.ad,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kN,A.B(A.a([A.E(A.es(N.Cj,C.Uu,q.gc79(),p),1),C.as,A.E(A.dp(C.yV,C.a99,q.gc7a(),A.bn(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a8(1/0,p,A.es(M.a1C,D.fDt,q.gctI(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.N0,p,p,C.ag)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.UV.prototype={
U(){return new B.aDh(new A.as(C.at,$.aw()),A.jV(!0,null,!0,!0,null,null,!1))}}
B.aDh.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Iv(x==null?"":x)
if(w!=null)this.d.saU(0,w)},
t(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.t()
this.a2()},
ZE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Iv(u.d.a.a)
if(t==null){u.m(new B.dRx(u))
x=1
break}u.m(new B.dRy(u))
s=u.a
r=s.c
x=3
return A.b(B.a6O(s.d,new B.dRz(u),t,r),$async$ZE)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dRA(u))
if(q){s=u.c
s.toString
A.a3(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$ZE,w)},
a1Q(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1Q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.co(r.a.d)){x=1
break}r.m(new B.dRB(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rv(r.a.c,q),$async$a1Q)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dRC(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahC(p,m,l,j,k),$async$a1Q)
case 8:o=e
if(r.c!=null)r.m(new B.dRD(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dRE(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dRF(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1Q,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.afo:D.ada,h=j?D.agV:C.c,g=j?C.aP:C.M,f=j?C.bL:C.al,e=j?D.aeq:C.aL
i=[i,e,h,g,f,j?C.fe:C.bP]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bQm,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fb,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a3e,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uo(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biA()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.V,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.MW,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dRG(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.mb,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.Ls(l.a.d,4)
m=A.C(new A.N(m,new B.dRH(x,new A.aGd(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.kZ,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.N,e,C.N,q,C.d5,p,C.N,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ex,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f0F)
else q.push(A.X(C.lv,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.db(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b8,new A.o(u,k,s,t,k,k,C.n),C.iN,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.ce(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.byB,k,k,C.ag),1)
u=l.f?k:l.gctJ()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a1C,D.fEx,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cj,k,new A.b7(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc7b()
t=A.bn(C.aC,k,k,0,C.c,k,C.nh,k,new A.b7(A.m(16),C.a0),k,k,k)
return A.c5(g,h,new A.an(C.a_,k,C.aa,C.t,A.a([f,v,A.bm(!0,A.mh(new B.dRI(),A.x(A.a([e,new A.D(D.by5,A.x(A.a([s,C.N,i,C.ad,A.bG(l.f?C.rV:D.fCR,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.Z_,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biA.prototype={
oD(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hh(C.bw,v.length),C.aN)}}
B.US.prototype={
U(){return new B.aDf()}}
B.aDf.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.ba(w,C.b4,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.ba(x,C.b4,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.as(C.at,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.S$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.S$=x
v.P$=0
v=w.f
v===$&&A.c()
v.S$=x
v.P$=0
w.a2()},
ae_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ae_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dQp(r))
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
return A.b(B.a6T(p,m,n,o,C.a.i(l).length===0?null:l),$async$ae_)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.R(D.f5E)
s=[1]
x=4
break}p.J(y.q).f.R(D.f4h)
p=r.c
p.toString
A.a3(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dQq(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ae_,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jp:C.pQ,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fvq,s,s,s,1,s,!0),p=A.p(s,D.bqj,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.H1,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.V,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.bXl,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.V,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.bXg,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.V,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.bXw,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gc7c()
u=A.bn(C.aC,s,s,s,s,C.fU,s,s,s,s,s,s)
return A.c5(q,r,A.ce(A.x(A.a([p,C.d5,o,C.ad,x,C.ad,w,C.mP,A.bG(t.r?C.rV:C.aT6,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abO.prototype={}
B.bv1.prototype={
a4E(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ch(r.ao9()))
x=3
return A.b(B.Rb(t,s),$async$a4E)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4E,w)},
gd7(){return this.a}}
B.Nt.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.Z_.prototype={
U(){return new B.azi(new A.as(C.at,$.aw()),A.jV(!0,null,!0,!0,null,null,!1))}}
B.azi.prototype={
a_(){this.a1()
$.aV.x1$.push(new B.d4E(this))},
t(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.t()
this.a2()},
c7i(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a3(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a14(d),u=x.a.c,t=u?C.ij:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.jp:v.a[0],p=A.m(24),o=A.I(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aC.j(u?0.25:0.12),C.fT,32)],n),l=A.p(w,T.aoO,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aC.j(0.4),C.cv,16)],n),C.apB,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uo(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buG()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.V,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.FL,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b0e),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d4C(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.mb,w,w,w,w)
f=f[1]
f=A.E(A.dQ(C.nD,new B.d4D(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cj,w,new A.b7(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.cH,12)],n)
g=y.p
return A.eM(w,C.K,new A.cT(Q.KL,A.c1(new A.D(C.yb,A.x(A.a([l,C.aO,k,C.N,j,C.dY,i,C.dY,A.B(A.a([f,C.as,A.E(A.c1(A.aF(!1,C.a2,!0,w,A.aL(!1,A.m(14),!0,D.egR,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc7h(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.OK,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.N3,C.d4,w,w,w)}}
B.buG.prototype={
oD(d,e){return e.akO(e.a.toUpperCase())}}
B.UT.prototype={
U(){return new B.aDg(A.a([],y.r),A.aY(y.N))},
gd7(){return this.c}}
B.aDg.prototype={
a_(){var x=this
x.a1()
x.tM()
x.w=A.dq(C.jv,new B.dRv(x))},
t(){var x=this.w
if(x!=null)x.a4(0)
B.V1()
this.a2()},
a0H(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ns(u.a.c),$async$a0H)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AM(u.a.c),$async$a0H)
case 4:u.m(new s.dQT(u,e))
u.i6("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0H,w)},
tM(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ns(u.a.c),$async$tM)
case 3:t=e
x=4
return A.b(B.AM(u.a.c),$async$tM)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dQU(u,s))
if(t>0)u.i6("Received "+A.w(t)+" file(s) via My Code.")
u.Nz(u.d)
B.BH(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tM,w)},
Nz(d){return this.bCl(d)},
bCl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6Y(r,u.a.c),$async$Nz)
case 8:p=f
if(u.c==null){x=1
break}new B.dQs(u,r,p).$0()
u.c.em()
case 7:if(!(C.a.a0(r.c,"video/")||r.mu(D.mH))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.V_(r,u.a.c),$async$Nz)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.M)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AM(u.a.c),$async$Nz)
case 12:u.m(new o.dQt(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nz,w)},
NX(d){return this.bIB(d)},
bIB(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6Y(d,u.a.c),$async$NX)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dQy(u,d,t))
x=6
return A.b(A.fM(new A.fD(t)),$async$NX)
case 6:u.i6("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fD(r.toUpperCase())),$async$NX)
case 7:u.i6("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NX,w)},
i6(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.R(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tN(d,e){return this.cEl(d,e)},
cEl(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dRj(r,e))
u=3
x=6
return A.b(d.$0(),$async$tN)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dRk(r))
$.eR.mp()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tN,w)},
gaVc(){var x=this.a
return x.f||x.r||x.w},
I8(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaVc()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ca5(s,n,r,q,o,t),$async$I8)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i6("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fB3(o,u.a.c),$async$I8)
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
return A.b(B.D1(s,o,r,q,n,t),$async$I8)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I8,w)},
a_L(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apk(u.a.c),$async$a_L)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i6("No organization portal found.")
x=1
break}t=J.a4(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a3(t,!1).cg(A.e_(new B.dQQ(u,r,q),!1,null,y.H)),$async$a_L)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_L,w)},
a0R(d){return this.cnf(d)},
cne(){return this.a0R(1)},
cnf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaVc()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aph(u.a.c),$async$a0R)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0R,w)},
abW(d,e,f){return this.bZp(d,e,f)},
bZp(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i6(e)
x=1
break}x=3
return A.b(u.tN(new B.dQN(u,d,null,e,f),"Uploading\u2026"),$async$abW)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abW,w)},
bCt(){B.hq_(!1,new B.dQw(this))
return},
csg(){this.m(new B.dQY(this))},
ayr(){var x=0,w=A.j(y.H),v=this
var $async$ayr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bCt()
return A.h(null,w)}})
return A.i($async$ayr,w)},
abS(){var x=0,w=A.j(y.H),v=this
var $async$abS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tN(new B.dQC(v),"Importing\u2026"),$async$abS)
case 2:return A.h(null,w)}})
return A.i($async$abS,w)},
Sh(d){return this.cDI(d)},
cDI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mu(D.mH)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a3(t,!1).cg(A.e_(new B.dRg(u,d),!1,null,y.H)),$async$Sh)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mu(D.QH)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a3(t,!1).cg(A.e_(new B.dRh(u,d),!1,null,y.H)),$async$Sh)
case 8:x=1
break
case 7:x=u.c_6(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a3(t,!1).cg(A.e_(new B.dRi(u,d),!1,null,y.H)),$async$Sh)
case 11:x=1
break
case 10:u.i6("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sh,w)},
c_6(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oH(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cKK,C.a.b2(x,w+1).toLowerCase())},
afp(d){return this.ce7(d)},
ce7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mu(D.mH)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a3(t,!1).cg(A.e_(new B.dQO(u,d),!1,null,y.H)),$async$afp)
case 5:x=1
break
case 4:u.m(new B.dQP(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afp,w)},
RC(d){return this.cvc(d)},
cvc(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i6("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pd(t,s.c,s.f),$async$RC)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tN(new B.dR9(u,d),"Preparing QR\u2026"),$async$RC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
ai2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ai2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dRa(),A.S(t).k("N<1,n>")).fF(0)}t=u.d
s=A.S(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dRb(q),s),s.k("J.E"))
if(r.length===0){u.i6("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RC(r),$async$ai2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ai2,w)},
ahW(d){return this.cuK(d)},
cuK(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a14(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.K,null,new B.dR3(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahW)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sh(d)
break
case"qr":u.RC(A.a([d],y.r))
break
case"send_my_code":u.ceK(A.a([d],y.r))
break
case"save":u.ahi(d)
break
case"delete":u.IZ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahW,w)},
Xy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dQz(),A.S(t).k("N<1,n>")).fF(0)}t=u.d
s=A.S(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dQA(q),s),s.k("J.E"))
if(r.length===0){u.i6("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pd(t,s.c,s.f),$async$Xy)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tN(new B.dQB(u,r),"Preparing file\u2026"),$async$Xy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xy,w)},
agu(d){return this.clA(d)},
clA(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hqN(d,!1),$async$agu)
case 3:s=f
r=s==null
q=B.a6V(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i6("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agu,w)},
afv(){var x=0,w=A.j(y.H),v=this,u
var $async$afv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fIF(u,v.a.c),$async$afv)
case 2:return A.h(null,w)}})
return A.i($async$afv,w)},
bCs(){B.hq_(!1,new B.dQv(this,null))
return},
Jc(d,e){return this.ceL(d,e)},
b0d(d){return this.Jc(null,d)},
ceK(d){return this.Jc(d,null)},
ceL(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dQR(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xh.c8().anr(!0,C.a_M,!1),$async$Jc)
case 10:r=g
if(r==null||J.co(r.a)){x=1
break}x=11
return A.b(s.tN(new B.dQS(l,s,r),"Preparing\u2026"),$async$Jc)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.i6("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i6("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCT(p,l,e,s.a.c),$async$Jc)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i6("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jc,w)},
Io(d){return this.bZc(d)},
bZc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Io=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hFi(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0d(t),$async$Io)
case 8:x=6
break
case 7:u.i6("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i6("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tN(new B.dQL(u,d),"Receiving video\u2026"),$async$Io)
case 11:x=1
break
case 10:x=12
return A.b(u.tN(new B.dQM(u,d),"Receiving\u2026"),$async$Io)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Io,w)},
Ef(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ef=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CW()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agu(t),$async$Ef)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Io(s),$async$Ef)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a3(t,!1).cg(A.e_(new B.dQW(u),!1,null,y.N)),$async$Ef)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tM(),$async$Ef)
case 10:x=1
break
case 9:x=11
return A.b(u.Io(C.a.i(r)),$async$Ef)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ef,w)},
ahi(d){return this.cqQ(d)},
cqQ(d){var x=0,w=A.j(y.H),v=this
var $async$ahi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tN(new B.dQV(v,d),"Saving\u2026"),$async$ahi)
case 2:return A.h(null,w)}})
return A.i($async$ahi,w)},
IZ(d){return this.bKW(d)},
bKW(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l9(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IZ)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ca8(t),$async$IZ)
case 6:case 5:s=d.a
x=7
return A.b(B.Ex(u.a.c,s),$async$IZ)
case 7:u.r.W(0,s)
x=8
return A.b(u.tM(),$async$IZ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IZ,w)},
ai8(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a14(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.K,null,new B.dRf(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ai8)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afv()
break
case"import":u.abS()
break}case 1:return A.h(v,w)}})
return A.i($async$ai8,w)},
c7f(d){var x=d.c
if(C.a.a0(x,"video/")||d.mu(D.mH))return C.qf
if(C.a.a0(x,"image/")||d.mu(D.QH))return C.uf
if(C.a.q(x,"pdf"))return E.Of
return D.amE},
B(d){var x,w,v=this,u=null,t=B.a14(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.GU,u,u,u,new B.dRq(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bQU,u,u,u,v.e?u:v.gcer(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcsf()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bLa:E.an2,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a1z,u,u,u,v.e?u:v.gc7g(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oe,u,u,u,v.e?u:v.gb1k(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.bSD,u,u,u,v.e?u:new B.dRr(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lJ(new B.dRs(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([C.aC.j(A.P(d).ax.a===C.I?0.12:0.08),C.aC.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.li(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.azf(C.jz,s,!0,t,w?u:v.gcvd(),u),1)
x.push(new A.D(D.bwP,A.mh(new B.dRt(),A.B(A.a([s,C.as,A.E(new B.azf(C.w6,"Export",!1,t,w?u:v.gbOH(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iO,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdi(t,v.e?u:v.gb1k(),u)
else s=A.kc(!0,u,u,new B.dRu(v,t),s,u,D.bwH,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a_,u,C.aa,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.azf.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bn(C.aC,t,t,0,C.c,t,C.vN,t,new A.b7(s,C.a0),t,t,t)
return A.dp(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vN,t,new A.b7(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eZ,t,t,t),u.r,v)}}
B.bdi.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.au(A.mh(new B.d4A(),new A.D(E.ZR,A.x(A.a([A.mh(new B.d4B(),A.p(x,A.X(C.yx,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ax,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ew,C.iq,x,x,new A.bp(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dp(C.oe,D.fI6,this.d,A.bn(C.aC,x,x,x,C.c,x,C.N1,x,new A.b7(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.ct,C.Bj,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.ac7.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aC.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mu(D.mH))p=D.diH
else{p=C.a.a0(p,"image/")||i.mu(D.QH)
n=y.O
p=p?A.a([C.cM,C.aC],n):A.a([C.aK.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapA()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mu(D.mH))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fS,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mu(D.mH)))l.push(A.fTx(C.aC,!1,j,j,j,!1,j,j,new B.d4X(k),j,j,new A.b7(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.o8,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.mh(new B.d4Y(),new A.D(C.ea,A.aF(!1,C.a2,!0,j,A.aL(!1,r,!0,new A.D(C.Zk,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.r,-1)),j,j,C.ah),j),C.ct,h,new A.cz("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.Z1.prototype={
U(){return new B.azk()},
gd7(){return this.c}}
B.azk.prototype={
a_(){this.a1()
this.xP()},
t(){B.hFx(this.e)
this.a2()},
xP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rv(o.c,o.d),$async$xP)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hFA(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hFz(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d4U(s))
x=1
break}s.m(new B.d4V(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d4W(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xP,w)},
a1P(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rv(t.c,t.d),$async$a1P)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.R(D.f2G)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahC(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1P)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.R(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1P,w)},
bZ5(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kq(u,C.A,v,new B.d4S(w,t),C.h3,C.dw,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fO(t,C.A,v,new B.d4T(w),C.h3,C.dw,!0,v,!1,v,v)
else return C.bJ
return A.ux(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a14(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Ck,u,u,u,v.gb56(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ew
else{q=v.r
if(q!=null)t=new A.D(C.eC,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eC,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dp(C.Ck,D.fqM,v.gb56(),A.bn(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.bZ5()}return A.c5(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.YZ.prototype={
U(){return new B.azh(A.aiq(),C.bE,C.bE)},
gd7(){return this.c}}
B.azh.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fv(w,A.a6(w).k("fv<1>")).im(new B.d4x(v))
x.gcRQ().im(new B.d4y(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fv(x,A.a6(x).k("fv<1>"))}if(x==null)x=C.b6q
x.im(new B.d4z(v))
v.xP()},
xP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rv(p.c,p.d),$async$xP)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d4q(s))
x=1
break}x=8
return A.b(s.d.C8(0,new A.a38(r,s.a.d.c)),$async$xP)
case 8:if(s.c==null){x=1
break}s.m(new B.d4r(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d4s(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xP,w)},
ZF(){var x=0,w=A.j(y.H),v=this,u
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h6(0),$async$ZF)
case 5:x=3
break
case 4:x=6
return A.b(u.iq(0),$async$ZF)
case 6:case 3:return A.h(null,w)}})
return A.i($async$ZF,w)},
aT3(d){var x=d.a
return C.a.aZ(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.u(C.o.an(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a14(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ew
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bMa,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.OK,C.n),o,88,o,o,o,o,o,88)
t=A.l2(C.aC,o,o,m,0,new B.d4t(p),C.o.E(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aT3(p.w)+" / "+p.aT3(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aC,o,o,o,o,D.f_8,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yG:C.iu,o,o,o,o,o)
x=A.x(A.a([u,C.kN,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc7j(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c5(v,w,A.au(new A.D(C.rd,x,o),o,o,o),o,!1,!1,o,o)}}
B.PG.prototype={
U(){return new B.azn()},
gd7(){return this.c}}
B.azn.prototype={
a_(){this.a1()
this.PB()},
PB(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PB=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fVS(o.c,o.d,new B.d5a(s)),$async$PB)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d5b(s))
x=1
break}s.e=r
q=O.i1v(r)
if(q==null){s.m(new B.d5c(s))
x=1
break}s.d=q
q.aR(0,s.gb00())
x=8
return A.b(q.il(0).d9(0,C.r9),$async$PB)
case 8:if(s.c==null){x=1
break}s.m(new B.d5d(s))
x=9
return A.b(q.q_(0),$async$PB)
case 9:q.tq(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d5e(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PB,w)},
ccI(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d5f(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CV(0,x.gb00())
w=x.d
if(w!=null)w.t()
B.ibk(x.e)
x.a2()},
ae2(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ae2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZO(u.c,u.d),$async$ae2)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.R(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ae2,w)},
B(d){var x,w,v,u=this,t=null,s=B.a14(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aI(t,t,t,t,C.p7,t,t,t,u.gc7d(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ew
else{q=u.r
if(q!=null)s=new A.D(C.eC,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahV(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fK(x,new A.an(C.A,t,C.aa,C.t,A.a([new A.Ag(s,t),A.aB(t,A.Db(A.p(t,A.X(q?I.yG:C.iu,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b8,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d5h(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bJ}}return A.c5(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.Z3.prototype={
U(){return new B.azl(new A.cy(null,y.A))}}
B.azl.prototype={
gcE2(){var x,w,v=this.a
if(v.e!==D.S3)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDG(){var x,w,v=this.a
if(v.e!==D.zy)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcE2()
if(x!=null){v.QE(x)
v.e=A.dq(R.FD,new B.d56(v,x))}w=v.gcDG()
if(w!=null){v.QD(w)
v.f=A.dq(C.fO,new B.d57(v,w))}},
t(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a2()},
QD(d){return this.cjN(d)},
cjN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.app(d),$async$QD)
case 3:t=f
x=4
return A.b(B.car(d),$async$QD)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d4Z(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QD,w)},
QE(d){return this.cjO(d)},
cjO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fJ9(d),$async$QE)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAP(t),$async$QE)
case 4:if(u.c==null){x=1
break}u.m(new B.d5_(u))
u.c.J(y.q).f.R(D.aPZ)
case 1:return A.h(v,w)}})
return A.i($async$QE,w)},
gc3a(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc7e(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1B(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CW()){t=u.c
if(t!=null)t.J(y.q).f.R(D.f5O)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a3(t,!1).cg(A.e_(new B.d50(),!1,null,y.N)),$async$a1B)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAP(s),$async$a1B)
case 4:t=u.c
if(t!=null)t.J(y.q).f.R(D.aPZ)
case 1:return A.h(v,w)}})
return A.i($async$a1B,w)},
a9N(d){return this.bIC(d)},
bIC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fD(C.d.aG(t,", "))),$async$a9N)
case 3:if(d.e!=null){t=d.J(y.q).f
t.R(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9N,w)},
ae0(d){return this.bIm(d)},
bIm(d){var x=0,w=A.j(y.H),v=this
var $async$ae0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fD(v.a.c)),$async$ae0)
case 2:if(d.e!=null)d.J(y.q).f.R(D.f39)
return A.h(null,w)}})
return A.i($async$ae0,w)},
a1v(d){return this.cqS(d)},
cqS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aon(s.d,4),$async$a1v)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t2(r,"ngmy_doc_share_qr.png"),$async$a1v)
case 8:q=f
if(d.e!=null)d.J(y.q).f.R(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.J(y.q).f.R(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1v,w)},
gaWk(){var x,w=this.a
if(w.e!==D.I5)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
a9K(d){return this.bIv(d)},
bIv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWk()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fD(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9K)
case 3:if(d.e!=null)d.J(y.q).f.R(D.f4O)
case 1:return A.h(v,w)}})
return A.i($async$a9K,w)},
ae1(){var x=0,w=A.j(y.H),v=this,u
var $async$ae1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.V1(),$async$ae1)
case 2:u=v.c
if(u!=null)A.a3(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ae1,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a14(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.I5&&i!==D.S3&&i!==D.zy
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.I5||t===D.S3||t===D.zy?l:A.aI(l,l,l,l,C.l9,l,l,l,m.gaZe(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.pW(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gc3a(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.I5){t=C.aC.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.my,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc7e(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.ho(D.bWp,D.fA5,new B.d51(m,d),l)],p))}if(m.a.e===D.I5&&m.gaWk()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.ho(D.bSX,D.fwM,new B.d52(m,d),l)],p))
if(m.a.e===D.zy){x=(m.w?C.dB:C.aC).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ez:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.my,l,l,l)],p))}if(m.a.e===D.S3){x=(m.r?C.dB:C.aC).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ez:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.my,l,l,l),C.ad,A.dp(D.bOE,D.fD9,m.gcrf(),A.bn(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ou(i,A.c5(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b7,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ad,A.B(A.a([A.E(A.es(N.Cj,C.Uu,new B.d53(m,d),l),1),C.as,A.E(A.dp(C.yV,C.a99,new B.d54(m,d),A.bn(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a8(1/0,l,A.bG(C.A5,m.gaZe(),A.bn(C.aK,l,l,l,l,C.fU,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d55(),y.C)}}
B.ac5.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ce(A.x(A.a([w,C.aO,A.p(x,A.pW(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ag)
return A.ek(A.a([A.bG(C.wP,new B.d4p(d),x)],u),x,x,C.mW,v,x,x,x,x,D.fpM,x)}}
B.YY.prototype={
U(){return new B.azg(A.zp(C.xR,C.nJ,C.ut))}}
B.azg.prototype={
t(){this.d.t()
this.a2()},
ax5(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a3(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fxg,x,x,x,1,x,!0),C.w,A.zo(this.d,C.bV,this.gax4()),x,!1,!1,x,x)}}
B.Z4.prototype={
U(){return new B.azm(A.zp(C.xR,C.nJ,C.ut))},
gd7(){return this.c}}
B.azm.prototype={
c_8(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
afS(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Sd("text/plain"),$async$afS)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.R(D.f5I)
x=1
break}s=u.c
if(s!=null)A.a3(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$afS,w)},
aaz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aaz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hqN(p,!0),$async$aaz)
case 3:t=e
p=t==null
s=B.a6V(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.R(D.f2g)
x=1
break}p=u.c
if(p!=null)A.a3(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$aaz,w)},
t(){this.d.t()
this.a2()},
ax5(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.M)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c_8(t))continue
s.e=!0
x=s.c
x.toString
A.a3(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.anX,v,v,v,w.gbOd(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a1G,v,v,v,w.gcha(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.ub:P.O2,v,v,v,v,v),v,v,v,new B.d59(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fE2,v,v,v,1,v,!0)
u=A.zo(w.d,C.bV,w.gax4())
x=A.m(20)
return A.c5(t,C.w,new A.an(C.a_,v,C.aa,C.t,A.a([u,A.au(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.emD],s),v),v,!1,!1,v,v)}}
B.bdj.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oS
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oS:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a2,!0,r,A.aL(!1,w,!0,new A.D(C.ZX,A.B(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eD,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a9k.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Ov.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.X4.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Ou.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.F2.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cln.prototype={}
B.F1.prototype={}
B.a9j.prototype={}
B.atI.prototype={}
B.X5.prototype={}
var z=a.updateTypes(["aA<~>()","R(jn)","n(jn)","UT(Y)","~()","Z0(Y)","H(H,jn)","PG(Y)","~(m6)","cr(F1)","aA<jn?>(@)","UR(Y)","UV(Y)","D(jn)","jn(@)","a7<n,@>(jn)","Z_(Y)","US(Y)","Z1(Y)","YZ(Y)","Z3(Y)","ac5(Y)","ai<jn>()","Z4(Y)","ac7(Y,H)","YY(Y)","a7<n,aD>(jn)","cr(X4)","cr(a9j)","aA<cr>(F1)"])
B.clj.prototype={
$1(d){var x=this.a
x.x=D.aN5
x.y.M(0,D.aN5)},
$S:68}
B.clk.prototype={
$1(d){var x=this.a
x.x=D.aN4
x.y.M(0,D.aN4)},
$S:68}
B.cll.prototype={
$1(d){var x=this.a
x.ahb(A.aOL(d.data)).bL(new B.cli(x),y.b)},
$S:68}
B.cli.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.clm.prototype={
$1(d){},
$S:68}
B.clp.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hKg(d.channel))},
$S:15}
B.clq.prototype={
$1(d){},
$S:15}
B.clr.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i2y(w.iceConnectionState)
x.cx=w
if($.h3U())switch(w.a){case 0:x.cy=D.aNa
break
case 1:x.cy=D.aNb
break
case 3:x.cy=D.aNc
break
case 5:x.cy=D.aN8
break
case 6:x.cy=D.aN9
break
case 7:x.cy=D.a6X
break
default:break}},
$S:144}
B.cls.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i2z(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:144}
B.clt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.icO(w.signalingState)},
$S:144}
B.clu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ib1(w.connectionState)},
$S:144}
B.clv.prototype={
$1(d){},
$S:144}
B.clw.prototype={
$1(d){},
$S:15}
B.fkx.prototype={
$1(d){var x=y.F.a(new A.rT([],[]).pH(d.target.result,!1)),w=C.xS.q(x.objectStoreNames,"blobs")
if(!w)C.xO.KP(x,"blobs")},
$S:197}
B.fIt.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wk.fj(this.b)
$.eR.mp()
this.c.$1(d)},
$S:467}
B.fIv.prototype={
$1(d){return this.a.$1(B.hTc(this.b,this.c))},
$S:35}
B.fIu.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fIs.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fII.prototype={
$1(d){var x=this
return B.hg9(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fIJ.prototype={
$1(d){var x=this
return B.hg9(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fmK.prototype={
$1(d){var x=this
return B.ca2(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d4I.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d4F.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ca2(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d4H.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ca2(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d4G.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ca2(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d4K.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aI(x,x,x,x,D.bNf,x,x,x,new B.d4J(d),x,x,x,x,x,x),A.E(A.EN(D.Qp,!0,x,C.a0J,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qp,x,g,C.ajN,0,e,f)},
$C:"$4",
$R:4,
$S:404}
B.d4J.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.foK.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eL,y.o).w,t=this.a,s=t?C.ij:C.c,r=A.m(28),q=A.p(v,D.bqE,C.f,v,v,D.b1U,v,v,v,v,D.ajD,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.V,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bs(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bRt,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FQ,A.x(A.a([o,C.ad,A.aM(v,C.V,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bs(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aob,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bv,A.B(A.a([A.E(A.dQ(C.dh,new B.foI(d),v),1),C.as,A.E(A.bG(D.fvP,new B.foJ(p,x,d),A.bn(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.MI,v,v,v,v),v)},
$S:58}
B.foI.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.foJ.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.R(D.f3q)
return}x=w.b.a.a
A.a3(w.c,!1).N(new B.aBT(v,x))},
$S:0}
B.fpd.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eL,y.o).w,u=x.a,t=u?C.ij:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bqt,C.f,w,w,D.b3n,w,w,w,w,D.ajD,w,w,1/0),new A.D(C.FQ,A.x(A.a([A.aM(w,C.V,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.h_T(u,"Organization name",C.Gg,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.R,A.aM(w,C.V,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.h_T(u,"Access code",C.nn,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.R,A.aM(w,C.V,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.h_T(u,"Member password",H.GP,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bv,A.bG(D.fE9,new B.fpc(r,q,p,d),A.bn(C.aC,w,w,w,w,C.fU,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.MI,w,w,w,w),w)},
$S:58}
B.fpc.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.R(D.f3v)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a3(v.d,!1).N(new B.aEZ(u,x,w))},
$S:0}
B.c9U.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a4(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cG(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.vk(p,null).d9(0,C.YZ),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ch(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BI(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ca_.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ca0.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ca1.prototype={
$1(d){return d.b},
$S:z+2}
B.c9W.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c9X.prototype={
$1(d){return d.b},
$S:z+2}
B.c9V.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c9Y.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c9Z.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fIG.prototype={
$1(d){return new B.UR(this.a,null)},
$S:z+11}
B.fIH.prototype={
$1(d){return new B.UV(this.a,this.b,this.c,null)},
$S:z+12}
B.dQo.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dRx.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dRy.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dRz.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dRw(x,d))},
$S:2}
B.dRw.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRA.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRB.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dRC.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dRD.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRE.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dRF.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRI.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.t(0,(1-e)*14)),e)},
$S:106}
B.dRG.prototype={
$1(d){var x=this.a
return x.f?null:x.ZE()},
$S:2}
B.dRH.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mu(D.QH))s=C.uf
else s=C.a.a0(s,"video/")||d.mu(D.mH)?C.qf:D.amE
x=this.b.a
w=y.p
return new A.D(C.l_,A.B(A.a([A.p(v,A.X(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapA(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dQp.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dQq.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ca3.prototype={
$2(d,e){return new A.by(J.k(d),J.k(e),y.M)},
$S:91}
B.ca4.prototype={
$2(d,e){return new A.by(J.k(d),J.k(e),y.M)},
$S:91}
B.fJr.prototype={
$2(d,e){return e===this.a},
$S:307}
B.fhI.prototype={
$1(d){return J.k(d)},
$S:17}
B.fmW.prototype={
$1(d){var x=this.b
B.hRd(C.G3.ga6i(this.a)).bL(x.gaDx(x),y.H)},
$S:123}
B.fmX.prototype={
$1(d){return this.a.d5(0,null)},
$S:123}
B.fmY.prototype={
$0(){return null},
$S:12}
B.cai.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fmZ.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.O(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.T(Date.now(),0,!1).a7().ad():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fr6.prototype={
$1(d){return d.ag()},
$S:z+15}
B.flo.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.flp.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.can.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mH)},
$S:z+1}
B.fNx.prototype={
$1(d){return new B.Z_(this.a,null)},
$S:z+16}
B.d4E.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:9}
B.d4C.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a3(w,!1).N(x)
return null},
$S:2}
B.d4D.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.dRv.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0H()},
$S:11}
B.dQT.prototype={
$0(){var x=J.bDY(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQU.prototype={
$0(){var x=J.bDY(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQs.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQr(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDV(this.c)}},
$S:0}
B.dQr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQt.prototype={
$0(){var x=J.bDY(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQy.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQx(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDV(this.c)}},
$S:0}
B.dQx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRj.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dRk.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dQQ.prototype={
$1(d){return new B.US(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dQN.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I8(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UW(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tM(),$async$$0)
case 5:s=J.a4(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a0R(s.gL(t)),$async$$0)
case 8:case 7:r.i6(s.gam(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQw.prototype={
$1(d){this.a.abW(d,"No files selected.","Added")},
$S:467}
B.dQY.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dQX(),A.S(x).k("N<1,n>")))},
$S:0}
B.dQX.prototype={
$1(d){return d.a},
$S:z+2}
B.dQC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xh.c8().cTO(C.a_M,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.js(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i6("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i6("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apo(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.co(l)){o.i6("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tM(),$async$$0)
case 9:o.i6("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dRg.prototype={
$1(d){return new B.PG(this.a.a.c,this.b,null)},
$S:z+7}
B.dRh.prototype={
$1(d){return new B.Z1(this.a.a.c,this.b,null)},
$S:z+18}
B.dRi.prototype={
$1(d){return new B.YZ(this.a.a.c,this.b,null)},
$S:z+19}
B.dQO.prototype={
$1(d){return new B.PG(this.a.a.c,this.b,null)},
$S:z+7}
B.dQP.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dR9.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I8(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6X(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i6("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cne(),$async$$0)
case 5:x=6
return A.b(p.tM(),$async$$0)
case 6:r=A.S(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dR5(p),r),new B.dR6(),r.k("N<ak.E,n>")).c0(0,new B.dR7())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a3(t,!1).cg(A.e_(new B.dR8(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pc(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.V1(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dR5.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dR4(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dR4.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dR6.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dR7.prototype={
$1(d){return d.length!==0},
$S:3}
B.dR8.prototype={
$1(d){var x=this.a
return new B.Z3(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dRa.prototype={
$1(d){return d.a},
$S:z+2}
B.dRb.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dR3.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.au(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kC,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapA(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mu(D.mH)?C.uh:C.p4
p=!x||p.mu(D.mH)?"Play video":"View"
return A.c1(A.bm(!0,new A.D(C.Bu,A.x(A.a([q,o,t,C.aA,B.Z2(!1,u,!1,w,p,new B.dQZ(d),v),B.Z2(!1,u,!1,C.jz,"Share via QR",new B.dR_(d),"Letters/numbers QR code"),B.Z2(!1,u,!1,D.a0P,"Send to their Code",new B.dR0(d),"Enter someone else's personal code"),B.Z2(!1,u,!1,C.hE,"Download / save",new B.dR1(d),v),C.am,B.Z2(!1,u,!0,C.ec,"Delete",new B.dR2(d),v)],y.p),C.ai,v,C.e,C.P,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bJ(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kS,v,v,C.n),C.bf)},
$S:690}
B.dQZ.prototype={
$0(){A.a3(this.a,!1).N("view")
return null},
$S:0}
B.dR_.prototype={
$0(){A.a3(this.a,!1).N("qr")
return null},
$S:0}
B.dR0.prototype={
$0(){A.a3(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dR1.prototype={
$0(){A.a3(this.a,!1).N("save")
return null},
$S:0}
B.dR2.prototype={
$0(){A.a3(this.a,!1).N("delete")
return null},
$S:0}
B.dQz.prototype={
$1(d){return d.a},
$S:z+2}
B.dQA.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dQB.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6Z(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gy(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pc(s.c,s.f),$async$$0)
case 4:u.i6(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQv.prototype={
$1(d){var x=this.a
x.tN(new B.dQu(x,d,this.b),"Preparing\u2026")},
$S:467}
B.dQu.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i6("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UW(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.co(s)){t.i6("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCT(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i6("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQR.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dQS.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fVV(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQL.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gv(new B.dQH(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i6("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dQI(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dQJ(s))
case 5:x=8
return A.b(r.b.ir(0,C.FA,new B.dQK()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i6("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tM(),$async$$0)
case 9:s.i6("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQH.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQE(x,d,e))},
$S:219}
B.dQE.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQI.prototype={
$1(d){return new B.ac5(this.a.a,null)},
$S:z+21}
B.dQJ.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dQK.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dQM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Iv(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6N(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0d(B.Iv(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apo(new B.dQF(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.co(r)){if(B.fVU(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i6(q)
x=1
break}x=10
return A.b(s.tM(),$async$$0)
case 10:o=J.cD(r)
p=o.eU(r,new B.dQG()).gL(0)
s.i6(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQF.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQD(x,d,e))},
$S:219}
B.dQD.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQG.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mH)},
$S:z+1}
B.dQW.prototype={
$1(d){return new B.Z4(this.a.a.c,null)},
$S:z+23}
B.dQV.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZO(u.a.c,v.b),$async$$0)
case 2:t.i6(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRf.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aC.j(0.35)
return A.c1(A.bm(!0,new A.D(C.Bu,A.x(A.a([A.au(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kC,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Z2(!0,w,!1,C.nn,"My Code",new B.dRc(d),"Your personal code & QR \u2014 others send docs to you"),B.Z2(!1,w,!1,D.a0P,"Send to their Code",new B.dRd(this.a,d),"Enter someone else's 5-digit code + letter"),B.Z2(!1,w,!1,S.yO,"Import backup",new B.dRe(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.P,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bJ(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kS,x,x,C.n),C.bf)},
$S:690}
B.dRc.prototype={
$0(){A.a3(this.a,!1).N("my_code")
return null},
$S:0}
B.dRd.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.bCs()},
$S:0}
B.dRe.prototype={
$0(){A.a3(this.a,!1).N("import")
return null},
$S:0}
B.dRs.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IF(D.Qp,x,C.a0J,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cS(C.d.gI(D.Qp).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:653}
B.dRq.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.dRr.prototype={
$0(){this.a.ai8()
return null},
$S:0}
B.dRt.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.t(0,(1-e)*10)),e)},
$S:106}
B.dRu.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ac7(e,w,v,this.b,x.e,x.c7f(w),new B.dRm(x,w),new B.dRn(x,v,w),new B.dRo(x,w),new B.dRp(x,w),null)},
$S:z+24}
B.dRm.prototype={
$0(){this.a.afp(this.b)
return null},
$S:0}
B.dRn.prototype={
$0(){var x=this.a
return x.m(new B.dRl(x,this.b,this.c))},
$S:0}
B.dRl.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dRo.prototype={
$0(){this.a.NX(this.b)
return null},
$S:0}
B.dRp.prototype={
$0(){this.a.ahW(this.b)
return null},
$S:0}
B.d4A.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.t(0,(1-e)*18)),e)},
$S:106}
B.d4B.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:121}
B.d4Y.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.t(0,(1-e)*14)),e)},
$S:106}
B.d4X.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d4U.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d4V.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d4W.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d4S.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fO(w,C.A,x,new B.d4Q(this.a),C.h3,C.dw,!0,x,!1,x,x)
$.aV.x1$.push(new B.d4R(this.a))
return C.bJ},
$S:137}
B.d4Q.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d4O(this.a))
return C.bJ},
$S:184}
B.d4O.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d4L(x))},
$S:9}
B.d4L.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d4R.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d4N(x))},
$S:9}
B.d4N.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d4T.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d4P(this.a))
return C.bJ},
$S:184}
B.d4P.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d4M(x))},
$S:9}
B.d4M.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d4x.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d4w(x,d))},
$S:1743}
B.d4w.prototype={
$0(){return this.a.f=this.b===C.uR},
$S:0}
B.d4y.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d4v(x,d))},
$S:9}
B.d4v.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d4z.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d4u(x,d))},
$S:9}
B.d4u.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d4q.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d4r.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d4s.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d4t.prototype={
$1(d){return this.a.d.MX(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:7}
B.d5a.prototype={
$0(){var x=this.a.a
return B.rv(x.c,x.d)},
$S:1744}
B.d5b.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d5c.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d5d.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d5e.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d5f.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d5h.prototype={
$0(){var x=this.a
x.m(new B.d5g(x))},
$S:0}
B.d5g.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h6(0)
else x.q_(0)},
$S:0}
B.d56.prototype={
$1(d){return this.a.QE(this.b)},
$S:11}
B.d57.prototype={
$1(d){return this.a.QD(this.b)},
$S:11}
B.d4Z.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d5_.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d50.prototype={
$1(d){return D.ha1},
$S:z+25}
B.d55.prototype={
$2(d,e){if(d)B.V1()},
$S:119}
B.d51.prototype={
$0(){return this.a.a9N(this.b)},
$S:0}
B.d52.prototype={
$0(){return this.a.a9K(this.b)},
$S:0}
B.d53.prototype={
$0(){return this.a.ae0(this.b)},
$S:0}
B.d54.prototype={
$0(){return this.a.a1v(this.b)},
$S:0}
B.d4p.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.d59.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q3(),$async$$0)
case 2:u.m(new B.d58(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d58.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cap.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mH)},
$S:z+1}
B.caq.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aN(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cao.prototype={
$2(d,e){return this.bjJ(d,e)},
bjJ(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.V2(u.c,A.G(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.fqJ.prototype={
$1(d){if(d===D.a6W&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.fqK.prototype={
$0(){},
$S:12}
B.frh.prototype={
bli(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ff0(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hbh(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bli(d,e)},
$S:730}
B.frg.prototype={
$1(d){var x=this
d.b=new B.frf(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.frf.prototype={
$1(d){return this.blh(d)},
blh(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZP(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aN(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.A(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.ff0(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
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
return A.b(B.a6W(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.azj.prototype,"gce3","Qe",0)
x(v,"gceV","Jd",0)
x(v,"gceq","xZ",0)
x(v=B.aDe.prototype,"gc79","adZ",0)
x(v,"gc7a","ZD",0)
x(v,"gctI","ahD",0)
x(v=B.aDh.prototype,"gc7b","ZE",0)
x(v,"gctJ","a1Q",0)
x(B.aDf.prototype,"gc7c","ae_",0)
x(B.azi.prototype,"gc7h","c7i",4)
x(v=B.aDg.prototype,"gcer","a_L",0)
x(v,"gcsf","csg",4)
x(v,"gb1k","ayr",0)
x(v,"gcvd","ai2",0)
x(v,"gbOH","Xy",0)
x(v,"gc7g","Ef",0)
x(B.azk.prototype,"gb56","a1P",0)
x(B.azh.prototype,"gc7j","ZF",0)
x(v=B.azn.prototype,"gb00","ccI",4)
x(v,"gc7d","ae2",0)
x(v=B.azl.prototype,"gcrf","a1B",0)
x(v,"gaZe","ae1",0)
w(B.azg.prototype,"gax4","ax5",8)
x(v=B.azm.prototype,"gcha","afS",0)
x(v,"gbOd","aaz",0)
w(v,"gax4","ax5",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cln,B.a9j,B.atI,B.aBT,B.aEZ,B.jn,B.abO,B.bv1,B.F1,B.X5])
w(B.clo,B.cln)
w(B.b3X,B.a9j)
x(A.hS,[B.clj,B.clk,B.cll,B.cli,B.clm,B.clp,B.clq,B.clr,B.cls,B.clt,B.clu,B.clv,B.clw,B.fkx,B.fIt,B.fIv,B.fIu,B.fII,B.fIJ,B.fmK,B.d4F,B.d4H,B.d4G,B.d4K,B.foK,B.fpd,B.c9U,B.ca0,B.ca1,B.c9X,B.c9V,B.c9Y,B.c9Z,B.fIG,B.fIH,B.dRz,B.dRI,B.dRG,B.dRH,B.fhI,B.fmW,B.fmX,B.cai,B.fmZ,B.fr6,B.flo,B.flp,B.can,B.fNx,B.d4E,B.d4C,B.dRv,B.dQr,B.dQx,B.dQQ,B.dQw,B.dQX,B.dRg,B.dRh,B.dRi,B.dQO,B.dR5,B.dR4,B.dR6,B.dR7,B.dR8,B.dRa,B.dRb,B.dR3,B.dQz,B.dQA,B.dQv,B.dQR,B.dQI,B.dQG,B.dQW,B.dRf,B.dRs,B.dRt,B.d4A,B.d4B,B.d4Y,B.d4X,B.d4S,B.d4Q,B.d4O,B.d4R,B.d4T,B.d4P,B.d4x,B.d4y,B.d4z,B.d4t,B.d56,B.d57,B.d50,B.cap,B.caq,B.fqJ,B.frg,B.frf])
w(B.b3Y,B.atI)
x(A.jb,[B.fIs,B.d4I,B.d4J,B.foI,B.foJ,B.fpc,B.dQo,B.dRx,B.dRy,B.dRw,B.dRA,B.dRB,B.dRC,B.dRD,B.dRE,B.dRF,B.dQp,B.dQq,B.fmY,B.d4D,B.dQT,B.dQU,B.dQs,B.dQt,B.dQy,B.dRj,B.dRk,B.dQN,B.dQY,B.dQC,B.dQP,B.dR9,B.dQZ,B.dR_,B.dR0,B.dR1,B.dR2,B.dQB,B.dQu,B.dQS,B.dQL,B.dQE,B.dQJ,B.dQK,B.dQM,B.dQD,B.dQV,B.dRc,B.dRd,B.dRe,B.dRq,B.dRr,B.dRm,B.dRn,B.dRl,B.dRo,B.dRp,B.d4U,B.d4V,B.d4W,B.d4L,B.d4N,B.d4M,B.d4w,B.d4v,B.d4u,B.d4q,B.d4r,B.d4s,B.d5a,B.d5b,B.d5c,B.d5d,B.d5e,B.d5f,B.d5h,B.d5g,B.d4Z,B.d5_,B.d51,B.d52,B.d53,B.d54,B.d4p,B.d59,B.d58,B.fqK])
x(A.lW,[B.ac6,B.Nt,B.a9k,B.Ov,B.X4,B.Ou,B.F2])
x(A.ag,[B.Z0,B.UR,B.UV,B.US,B.Z_,B.UT,B.Z1,B.YZ,B.PG,B.Z3,B.YY,B.Z4])
x(A.ah,[B.azj,B.aDe,B.aDh,B.aDf,B.azi,B.aDg,B.azk,B.azh,B.azn,B.azl,B.azg,B.azm])
x(A.av,[B.acy,B.azf,B.bdi,B.ac7,B.ac5,B.bdj])
x(A.k7,[B.ca_,B.c9W,B.ca3,B.ca4,B.fJr,B.dQH,B.dQF,B.dRu,B.d55,B.cao,B.frh])
x(A.iU,[B.biA,B.buG])})()
A.jL(b.typeUniverse,JSON.parse('{"b3X":{"a9j":[]},"b3Y":{"atI":[]},"Z0":{"ag":[],"v":[]},"azj":{"ah":["Z0"]},"acy":{"av":[],"v":[]},"UR":{"ag":[],"v":[]},"UV":{"ag":[],"v":[]},"aDe":{"ah":["UR"]},"aDh":{"ah":["UV"]},"biA":{"iU":[]},"US":{"ag":[],"v":[]},"aDf":{"ah":["US"]},"Z_":{"ag":[],"v":[]},"UT":{"ag":[],"v":[]},"ac7":{"av":[],"v":[]},"Z1":{"ag":[],"v":[]},"YZ":{"ag":[],"v":[]},"PG":{"ag":[],"v":[]},"Z3":{"ag":[],"v":[]},"ac5":{"av":[],"v":[]},"YY":{"ag":[],"v":[]},"Z4":{"ag":[],"v":[]},"azi":{"ah":["Z_"]},"buG":{"iU":[]},"aDg":{"ah":["UT"]},"azf":{"av":[],"v":[]},"bdi":{"av":[],"v":[]},"azk":{"ah":["Z1"]},"azh":{"ah":["YZ"]},"azn":{"ah":["PG"]},"azl":{"ah":["Z3"]},"azg":{"ah":["YY"]},"azm":{"ah":["Z4"]},"bdj":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ug"),k:x("LT()"),m:x("bu<n,n>"),F:x("r7"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a7<n,R>>"),t:x("O<a7<n,@>>"),r:x("O<jn>"),w:x("O<+file,name(lE,n)>"),u:x("O<cS>"),s:x("O<n>"),E:x("O<iU>"),a:x("O<dI>"),p:x("O<v>"),Z:x("O<H>"),G:x("bh"),A:x("cy<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<H>"),M:x("by<n,n>"),P:x("a7<n,@>"),f:x("a7<@,@>"),o:x("iE"),e:x("igK"),af:x("Ed"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("wa"),ab:x("F1"),br:x("atI"),v:x("X5"),N:x("n"),X:x("bp<L>"),Q:x("lS"),D:x("dI"),aw:x("cz<n>"),cd:x("Z<a7<n,@>>"),c7:x("v"),ch:x("bY<ai<jn>>"),aW:x("bY<dI?>"),aY:x("bY<~>"),cx:x("ac6"),b1:x("bg<ai<jn>>"),cf:x("bg<dI?>"),d4:x("bg<~>"),c4:x("aBT"),bG:x("aEZ"),q:x("n4"),B:x("pu<F1>"),c6:x("pu<a9k>"),y:x("R"),i:x("L"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a7<n,@>?"),l:x("jn?"),R:x("aD?"),c:x("X5?"),d:x("+answerQr,transfer(n,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Nt,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dI?"),cm:x("abO?"),bk:x("aBT?"),ag:x("aEZ?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b0e=new A.ay(C.aC,2,C.r,-1)
D.c_Z=new A.a9(C.a3,C.a8,C.x,C.a2N,null,null)
D.b1U=new A.o(null,null,null,C.mi,null,D.c_Z,C.n)
D.b3n=new A.o(null,null,null,C.mi,null,E.H1,C.n)
D.ada=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aeq=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.afo=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.agV=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fqF=new A.y("Your team portal",null,C.df,null,null,null,null,null,null,null,null,null)
D.fF5=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DN,null,null,null,null,null,null,null,null,null)
D.dad=x([D.fqF,C.am,D.fF5],y.p)
D.bqj=new A.fj(C.ag,C.e,C.j,C.E,null,C.p,null,0,D.dad,null)
D.fJv=new A.y("Create your organization",null,C.fy,null,null,null,null,null,null,null,null,null)
D.fv0=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DN,null,null,null,null,null,null,null,null,null)
D.dqj=x([D.fJv,C.am,D.fv0],y.p)
D.bqt=new A.fj(C.ag,C.e,C.j,C.E,null,C.p,null,0,D.dqj,null)
D.fFI=new A.y("Team Member sign-in",null,C.fy,null,null,null,null,null,null,null,null,null)
D.fyS=new A.y("Enter the access code and password from your organization.",null,G.DN,null,null,null,null,null,null,null,null,null)
D.do8=x([D.fFI,C.am,D.fyS],y.p)
D.bqE=new A.fj(C.ag,C.e,C.j,C.E,null,C.p,null,0,D.do8,null)
D.bwH=new A.Q(16,10,16,28)
D.bwP=new A.Q(16,14,16,4)
D.by5=new A.Q(20,0,20,16)
D.byB=new A.Q(20,8,20,16)
D.ajD=new A.Q(24,22,24,20)
D.a0P=new A.a1(63394,"MaterialIcons",!1)
D.amE=new A.a1(63515,"MaterialIcons",!1)
D.bLa=new A.a1(983813,"MaterialIcons",!1)
D.bIy=new A.a1(62867,"MaterialIcons",!1)
D.bMa=new A.ae(D.bIy,44,C.c,null,null,null)
D.bNf=new A.ae(C.mB,null,C.ae,null,null,null)
D.bOE=new A.ae(C.ja,18,null,null,null,null)
D.bQm=new A.ae(D.a0P,26,C.c,null,null,null)
D.bQU=new A.ae(C.GH,null,null,null,null,null)
D.bRt=new A.ae(C.Cf,null,null,null,null,null)
D.bSD=new A.ae(W.a11,null,null,null,null,null)
D.bSX=new A.ae(C.hq,16,null,null,null,null)
D.bWp=new A.ae(C.rm,16,null,null,null,null)
D.bMs=new A.ae(C.nn,null,null,null,null,null)
D.bXg=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bMs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bS0=new A.ae(C.Gg,null,null,null,null,null)
D.bXl=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bS0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bMO=new A.ae(H.GP,null,null,null,null,null)
D.bXw=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bMO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cLh=x([C.fe,C.b_,C.aC],y.O)
D.c1R=new A.a9(C.ax,C.aD,C.x,D.cLh,null,null)
D.cKK=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qp=x([C.fe,C.aC],y.O)
D.QH=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mH=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.diH=x([C.oN,C.aC],y.O)
D.e9V={iceServers:0}
D.aHC={urls:0}
D.du_=new A.bu(D.aHC,["stun:stun.l.google.com:19302"],y.m)
D.dtZ=new A.bu(D.aHC,["stun:stun1.l.google.com:19302"],y.m)
D.d0k=x([D.du_,D.dtZ],A.ax("O<a7<n,n>>"))
D.dti=new A.bu(D.e9V,[D.d0k],A.ax("bu<n,@>"))
D.I5=new B.Nt(0,"lanDirect")
D.S2=new B.Nt(1,"cloudStash")
D.dEX=new B.Nt(2,"inlineInstant")
D.S3=new B.Nt(3,"webrtcLink")
D.zy=new B.Nt(4,"videoCloud")
D.fF4=new A.y("Receive file",null,C.nC,null,null,null,null,null,null,null,null,null)
D.cAF=x([E.aoj,C.ab,D.fF4],y.p)
D.eVD=new A.cb(C.aM,C.b7,C.j,C.m,null,C.p,null,0,D.cAF,null)
D.egR=new A.D(C.cj,D.eVD,null)
D.fhz=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a3s,null,null,null)
D.frc=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fhz,null,C.L,null,null,null,null,null,null,null)
D.eg6=new A.D(C.By,D.frc,null)
D.b7I=new A.cn(C.A,null,null,D.eg6,null)
D.emD=new A.cN(0,null,0,28,null,null,D.b7I,null)
D.emW=new B.a9k(0,"RTCDataChannelConnecting")
D.aN4=new B.a9k(1,"RTCDataChannelOpen")
D.aN5=new B.a9k(3,"RTCDataChannelClosed")
D.emX=new B.F2(0,"RTCIceConnectionStateNew")
D.emY=new B.F2(1,"RTCIceConnectionStateChecking")
D.emZ=new B.F2(2,"RTCIceConnectionStateCompleted")
D.en_=new B.F2(3,"RTCIceConnectionStateConnected")
D.en0=new B.F2(4,"RTCIceConnectionStateCount")
D.en1=new B.F2(5,"RTCIceConnectionStateFailed")
D.en2=new B.F2(6,"RTCIceConnectionStateDisconnected")
D.aN6=new B.F2(7,"RTCIceConnectionStateClosed")
D.aN7=new B.X4(0,"RTCIceGatheringStateNew")
D.en3=new B.X4(1,"RTCIceGatheringStateGathering")
D.a6W=new B.X4(2,"RTCIceGatheringStateComplete")
D.a6X=new B.Ou(0,"RTCPeerConnectionStateClosed")
D.aN8=new B.Ou(1,"RTCPeerConnectionStateFailed")
D.aN9=new B.Ou(2,"RTCPeerConnectionStateDisconnected")
D.aNa=new B.Ou(3,"RTCPeerConnectionStateNew")
D.aNb=new B.Ou(4,"RTCPeerConnectionStateConnecting")
D.aNc=new B.Ou(5,"RTCPeerConnectionStateConnected")
D.en4=new B.Ov(0,"RTCSignalingStateStable")
D.en5=new B.Ov(1,"RTCSignalingStateHaveLocalOffer")
D.en6=new B.Ov(2,"RTCSignalingStateHaveRemoteOffer")
D.en7=new B.Ov(3,"RTCSignalingStateHaveLocalPrAnswer")
D.en8=new B.Ov(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aNd=new B.Ov(5,"RTCSignalingStateClosed")
D.f_8=new A.at(160,48)
D.b8X=new A.fi(2,null,null,null,null,C.aC,null,null,null,null)
D.f0F=new A.a8(16,16,D.b8X,null)
D.fum=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f26=new A.b2(D.fum,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fBQ=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f29=new A.b2(D.fBQ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fKy=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f2g=new A.b2(D.fKy,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.ftX=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f2G=new A.b2(D.ftX,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fFT=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPZ=new A.b2(D.fFT,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fHh=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f39=new A.b2(D.fHh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fLY=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f3q=new A.b2(D.fLY,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fJZ=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f3v=new A.b2(D.fJZ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fLa=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f4h=new A.b2(D.fLa,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fsz=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f4O=new A.b2(D.fsz,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fDF=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f58=new A.b2(D.fDF,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fwD=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f5E=new A.b2(D.fwD,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fM3=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f5I=new A.b2(D.fM3,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fsP=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f5O=new A.b2(D.fsP,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.frx=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f62=new A.b2(D.frx,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.t,null)
D.fop=new A.y("NGMY DOC SHARE",null,C.aRl,null,null,null,null,null,null,null,null,null)
D.fpM=new A.y("Show this to sender",null,C.iX,null,null,null,null,null,null,null,null,null)
D.fqM=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fvq=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fvP=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fwM=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fxg=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fA5=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new A.y("Send to their Doc Share",null,C.nA,null,null,null,null,null,null,null,null,null)
D.fD9=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fDt=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fE2=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fE9=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fEx=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eZ,null,null,null,null,null,null,null,null,null)
D.fHN=new A.y("Share files & videos\nwith a scan.",null,C.aRm,null,null,null,null,null,null,null,null,null)
D.fI6=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.ha1=new B.YY(null)
D.aa5=new B.ac6(0,"docShare")
D.aa6=new B.ac6(1,"gate")
D.V1=new B.ac6(2,"gateNoIndividual")})();(function staticFields(){$.aNw=null
$.fcL=function(){var x=y.N
return A.U(x,x)}()
$.Gi=A.U(y.N,y.D)
$.agb=A.U(y.N,A.ax("lE"))
$.QY=A.U(y.N,y.D)
$.fdi=A.U(y.N,A.ax("abO"))
$.cah=A.U(y.S,A.ax("bv1"))
$.hbg=1
$.hZe=null
$.hZd=null
$.hQB=null
$.h05=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ihe","hsF",()=>new B.clo())
x($,"if9","h3U",()=>C.a.q(A.bw(A.bw(A.bw(A.GT(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["2WSnBBWugEA7Rnkiu1zv7/1YTtg="]=a.current})($__dart_deferred_initializers__);