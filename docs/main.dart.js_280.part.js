((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cqJ:function cqJ(){},
hVD(d){var x=null,w=new B.b5F(d,D.evT,new A.pI(x,x,y.c6),new A.pI(x,x,y.B))
w.bAS(d)
return w},
b5F:function b5F(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cqE:function cqE(d){this.a=d},
cqF:function cqF(d){this.a=d},
cqG:function cqG(d){this.a=d},
cqD:function cqD(d){this.a=d},
cqH:function cqH(d){this.a=d},
hVE(d,e){var x=y.N
x=new B.b5G(d,e,A.U(x,y.e),A.U(x,y.z))
x.bAT(d,e)
return x},
b5G:function b5G(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cqK:function cqK(d){this.a=d},
cqL:function cqL(d){this.a=d},
cqM:function cqM(d){this.a=d},
cqN:function cqN(d){this.a=d},
cqO:function cqO(d){this.a=d},
cqP:function cqP(d){this.a=d},
cqQ:function cqQ(d){this.a=d},
cqR:function cqR(d){this.a=d},
haE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zk.Mu(x,"ngmy_doc_share_v1",new B.fui(),1)},
i1d(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cn(d))
if(y.J.b(d))return new Uint8Array(A.cn(J.eH(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cn(A.yr(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cF.aP(d)
return x}catch(w){return v}return v},
RP(d,e){return B.ih0(d,e)},
ih0(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aP4
x=7
return A.b(o==null?$.aP4=B.haE():o,$async$RP)
case 7:s=g
r=new Uint8Array(A.cn(e))
q=J.n_(s,"blobs","readwrite")
C.j5.mu(J.mZ(q,"blobs"),r,d)
x=8
return A.b(J.pQ(q),$async$RP)
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
return A.i($async$RP,w)},
RO(d){return B.ih_(d)},
ih_(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aP4
x=7
return A.b(o==null?$.aP4=B.haE():o,$async$RO)
case 7:s=f
r=J.n_(s,"blobs","readonly")
x=8
return A.b(C.j5.zK(J.mZ(r,"blobs"),d),$async$RO)
case 8:q=f
x=9
return A.b(J.pQ(r),$async$RO)
case 9:o=B.i1d(q)
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
return A.i($async$RO,w)},
ahC(d){return B.igZ(d)},
igZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aP4
x=7
return A.b(p==null?$.aP4=B.haE():p,$async$ahC)
case 7:s=f
r=J.n_(s,"blobs","readwrite")
C.j5.G8(J.mZ(r,"blobs"),d)
x=8
return A.b(J.pQ(r),$async$ahC)
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
return A.i($async$ahC,w)},
fui:function fui(){},
i3H(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqv(w,v))}return u},
hBc(d,e){var x,w={},v=A.aXJ("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fT7(w,v,e)
C.wH.yK(v,"change",new B.fT9(w,v,!1))
C.wH.yK(v,"cancel",new B.fT8(w))
$.eY.mA()
v.click()
A.bP(C.akn,new B.fT6(w),y.H)},
fT7:function fT7(d,e,f){this.a=d
this.b=e
this.c=f},
fT9:function fT9(d,e,f){this.a=d
this.b=e
this.c=f},
fT8:function fT8(d){this.a=d},
fT6:function fT6(d){this.a=d},
Ds(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ds=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd0()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUg()?3:4
break
case 3:x=5
return A.b(B.hw2(e,d,s,!0,!1,f,g,h,!1,i),$async$Ds)
case 5:x=1
break
case 4:x=6
return A.b(B.Rt(d,s,f,g,h,i),$async$Ds)
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
return A.b(B.IZ(s,d),$async$Ds)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fpQ(s,d),$async$Ds)
case 14:x=12
return A.b(r.hw2(q,p,o,n,m,l,k,j,a1,i),$async$Ds)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).cc(A.ej(new B.fTm(s,i,d,f,g,h),!1,null,y.H)),$async$Ds)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).cc(A.ej(new B.fTn(s,i,d,f,g,h),!1,null,y.H)),$async$Ds)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ds,w)},
Rt(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Rt=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0p(e),$async$Rt)
case 3:u=k
x=4
return A.b(B.aq5(d,e,!1),$async$Rt)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IZ(e,d),$async$Rt)
case 7:if(k){v=D.abU
x=1
break}x=8
return A.b(B.Vx(e),$async$Rt)
case 8:v=t?D.Wh:D.abV
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0n(d,e)){v=D.abU
x=1
break}x=11
return A.b(B.Vx(e),$async$Rt)
case 11:v=t?D.Wh:D.abV
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h5D(d,e)){v=D.abU
x=1
break}x=14
return A.b(B.Vx(e),$async$Rt)
case 14:v=D.Wh
x=1
break
case 13:v=t?D.Wh:D.abV
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rt,w)},
fpQ(d,e){var x=0,w=A.j(y.y),v
var $async$fpQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0n(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0p(d),$async$fpQ)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpQ,w)},
hw2(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).cc(A.ej(new B.fwT(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hr2(d,e,f,g,h,i,j){return new B.ZL(e,j,d,g,h,i,f,null)},
fyP(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fyP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.at,u)
s=new A.au(C.at,u)
x=3
return A.b(A.bV(C.L,null,new B.fyS(A.R(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fyP)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyP,w)},
fzj(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fzj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.at,u)
s=new A.au(C.at,u)
r=new A.au(C.at,u)
x=3
return A.b(A.bV(C.L,null,new B.fzl(A.R(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fzj)
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
return A.i($async$fzj,w)},
haO(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bs(x,new A.b6(4,A.n(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fLE(d,e){var x=0,w=A.j(y.H),v
var $async$fLE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Vx(e),$async$fLE)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eN()
case 1:return A.h(v,w)}})
return A.i($async$fLE,w)},
fTm:function fTm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fTn:function fTn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acP:function acP(d,e){this.a=d
this.b=e},
fwT:function fwT(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ZL:function ZL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAz:function aAz(){this.c=this.a=this.d=null},
daM:function daM(d,e){this.a=d
this.b=e},
daJ:function daJ(d){this.a=d},
daL:function daL(d){this.a=d},
daK:function daK(d){this.a=d},
daO:function daO(){},
daN:function daN(d){this.a=d},
adh:function adh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDb:function aDb(d,e){this.a=d
this.b=e},
aGj:function aGj(d,e,f){this.a=d
this.b=e
this.c=f},
fyS:function fyS(d,e,f){this.a=d
this.b=e
this.c=f},
fyQ:function fyQ(d){this.a=d},
fyR:function fyR(d,e,f){this.a=d
this.b=e
this.c=f},
fzl:function fzl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzk:function fzk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd3(d,e,f,g,h){return B.hQx(d,e,f,g,h)},
hQx(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cd3=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gK(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iX(r.dH(d,new B.cd4(s,e,h,g,f,q),y.g),y.l),$async$cd3)
case 3:r=p.aX(j)
case 4:if(!r.C()){x=5
break}t=r.gS(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cd3,w)},
b0k(d,e,f,g,h){return B.hQy(d,e,f,g,h)},
hQy(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0k=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avF("GET",d)
o=A.h22()
if(o==null)o=new A.Mg(A.a([],y.W))
x=7
return A.b(o.f8(0,s).dc(0,C.Gt),$async$b0k)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CA(),$async$b0k)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.C4(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0k,w)},
b0j(d){return B.hQv(d)},
hQv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vG(d,null).dc(0,C.of),$async$b0j)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aN(0,A.m7(A.m5(p.e)).cB(0,p.w),null)
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
return A.i($async$b0j,w)},
cd2(d){return B.hQw(d)},
hQw(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cd2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vG(d,null).dc(0,C.qk),$async$cd2)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m7(A.m5(q.e)).cB(0,q.w)
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
return A.i($async$cd2,w)},
cd4:function cd4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jA:function jA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
IX(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hQD(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IX(C.a.b3(u,v.length))}return null},
hQE(d){var x=B.IX(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hQz(){var x,w=$.ok(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.ap(10)
return C.d.hf(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(24)]},
a7t(d){return B.hQA(d)},
hQA(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bJ),$async$a7t)
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
return A.i($async$a7t,w)},
a7u(d,e){return B.hQB(d,e)},
hQB(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7u=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hO(d,e,!1,!1,C.cH,null),$async$a7u)
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
return A.i($async$a7u,w)},
C3(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$C3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$C3)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IX(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7v(r),$async$C3)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7t("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$C3)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IX(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$C3)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hQz()
x=14
return A.b(B.a7v(m),$async$C3)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a9().ae()
x=15
return A.b(B.a7u("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$C3)
case 15:k=f
x=16
return A.b(B.a7u("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$C3)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$C3)
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
return A.i($async$C3,w)},
a7v(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IX(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7t("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7v)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7v,w)},
a7w(d,e,f,g){return B.hQF(d,e,f,g)},
hQF(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7w=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IX(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7v(r),$async$a7w)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.cda())>1048576||g.b_(d,new B.cdb())){v=B.F_(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7H("myCode",d,a0),$async$a7w)
case 4:u=a3
try{t=C.X.aN(0,u,null)
if(y.f.b(t)){s=J.r(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gK(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.F_(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0s(u,g.gK(d),a0),$async$a7w)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ok().ap(9999)
k=n.b
j=g.gK(d)
i=y.N
h=g.dH(d,new B.cdc(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0l(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a9().ae(),"status","pending"],i,y.z),q),$async$a7w)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gK(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7w,w)},
F_(d,e,f,g,h){return B.hQC(d,e,f,g,h)},
hQC(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$F_=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$F_)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cG(a6,0,new B.cd6())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ok().ap(9999)
h=Date.now()
g=""+1000*h+"_"+C.cM.ap(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gS(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.J0(a9,q)
a0=new A.KR(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$F_)
case 11:if(!b1){x=10
break}n=a0.gS(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.f1().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pg(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.ab5(a1.a,a4,"media",a1.d,a2).xm(m,n,new A.Eh(!0,q.c)),$async$F_)
case 12:J.cc(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$F_)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRD(r),$async$F_)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gK(a6)
a1=l.dH(a6,new B.cd7(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0l(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a9().ae(),"status","pending"],e,d),a8),$async$F_)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRD(r),$async$F_)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gK(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$F_,w)},
b0l(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7t(t),$async$b0l)
case 3:s=g
r=y.aL.a(J.r(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cd5(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7u(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0l,w)},
NX(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NX=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7t("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NX)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.r(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aX(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gS(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b0m(k,a0),$async$NX)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a9().ae())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b0r(h),$async$NX)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.VE(g,a0),$async$NX)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a9().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cd8(),q),n)
d=A.C(new A.Y(r,new B.cd9(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d2(d,0,A.dz(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7u("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$NX)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NX,w)},
b0m(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aX(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gS(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ikR(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dq(l,m,"Received via My Code",t,e,i),$async$b0m)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRD(s),$async$b0m)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0m,w)},
cda:function cda(){},
cdb:function cdb(){},
cdc:function cdc(){},
cd6:function cd6(){},
cd7:function cd7(){},
cd5:function cd5(){},
cd8:function cd8(){},
cd9:function cd9(){},
fTj(d,e){var x=0,w=A.j(y.H)
var $async$fTj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).cc(A.ej(new B.fTk(e),!1,null,y.H)),$async$fTj)
case 2:return A.h(null,w)}})
return A.i($async$fTj,w)},
bFr(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).cc(A.ej(new B.fTl(g,e,f),!1,null,y.y)),$async$bFr)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFr,w)},
fTk:function fTk(d){this.a=d},
fTl:function fTl(d,e,f){this.a=d
this.b=e
this.c=f},
Vu:function Vu(d,e){this.c=d
this.a=e},
aEx:function aEx(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dX_:function dX_(d,e){this.a=d
this.b=e},
Vy:function Vy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEA:function aEA(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dY8:function dY8(d){this.a=d},
dY9:function dY9(d){this.a=d},
dYa:function dYa(d){this.a=d},
dY7:function dY7(d,e){this.a=d
this.b=e},
dYb:function dYb(d){this.a=d},
dYc:function dYc(d){this.a=d},
dYd:function dYd(d,e){this.a=d
this.b=e},
dYe:function dYe(d,e){this.a=d
this.b=e},
dYf:function dYf(d,e){this.a=d
this.b=e},
dYg:function dYg(d){this.a=d},
dYj:function dYj(){},
dYh:function dYh(d){this.a=d},
dYi:function dYi(d,e){this.a=d
this.b=e},
bkF:function bkF(){},
Vv:function Vv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEy:function aEy(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dX0:function dX0(d){this.a=d},
dX1:function dX1(d){this.a=d},
h5E(d){var x=d.i3
if(x>=0)return C.o.N(x)
return 10},
hQH(d){var x=d.l1
if(x>=0)return x
return 4.99},
hQG(d){var x=d.lD,w=y.N
w=x.jn(x,new B.cde(),w,w)
return w},
hm8(d){var x=d.l2,w=y.N
w=x.jn(x,new B.cdf(),w,w)
return w},
b0p(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0p=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0p)
case 7:s=f
r=A.w(p)
r=A.aS(J.r(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b0p,w)},
a7y(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7y)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a7y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7y,w)},
Vx(d){var x=0,w=A.j(y.H),v,u
var $async$Vx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Vx)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Vx)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Vx,w)},
h5D(d,e){var x,w,v
if(B.hQH(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hQG(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bk(w)
return v!=null&&v.ce(new A.V(Date.now(),0,!1))},
b0n(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hm8(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bk(x)
return w!=null&&w.ce(new A.V(Date.now(),0,!1))},
hm9(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hm8(d),x,x)
x=w.h(0,t)
v=A.bk(x==null?"":x)
u=v!=null&&v.ce(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dA(f,0,0,0,0,0).a).a9().ae())
d.l2=w},
aq6(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aq6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aq6)
case 7:s=f
r=A.w(p)
r=A.ev(J.r(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aq6,w)},
aq7(d){var x=0,w=A.j(y.H),v,u,t
var $async$aq7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aq6(d),$async$aq7)
case 3:u=f
x=5
return A.b(A.az(),$async$aq7)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$aq7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aq7,w)},
aq5(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aq5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h5E(d)
if(u<=0){v=!1
x=1
break}if(B.h5D(d,e)){v=!1
x=1
break}x=3
return A.b(B.aq6(e),$async$aq5)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aq5,w)},
b0o(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IZ(e,d),$async$b0o)
case 3:if(g){v=-1
x=1
break}u=B.h5E(d)
if(u<=0){v=-1
x=1
break}if(B.h5D(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aq6(e),$async$b0o)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0o,w)},
cdh(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IZ(e,d),$async$cdh)
case 3:if(h){v=!1
x=1
break}v=B.aq5(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdh,w)},
cdg(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdg=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd0()
x=3
return A.b(B.cdh(d,u,i.gUg()),$async$cdg)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdg,w)},
a7x(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7x=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd0()
if(i.gUg()){v=!0
x=1
break}if(B.b0n(d,u)){v=!0
x=1
break}x=5
return A.b(A.lv(u,C.Tv),$async$a7x)
case 5:x=k?3:4
break
case 3:B.hm9(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7x)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l8(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Tv,"Doc Share for Organizations"),$async$a7x)
case 7:if(!k){v=!1
x=1
break}B.hm9(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7x)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7x,w)},
cde:function cde(){},
cdf:function cdf(){},
fUa(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fUa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fUa)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fml.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hP([r],e.c))
s.toString
$.fml.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUa,w)},
inb(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fml.bs($.fml,new B.fUc(d))},
fUc:function fUc(d){this.a=d},
fnS(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fnS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hP([d],f))
s.toString
u=A.n1(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.ji,null,y.H),$async$fnS)
case 3:C.AQ.fo(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mA()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnS,w)},
ags(d,e,f){var x=0,w=A.j(y.H),v
var $async$ags=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fmY.n(0,d,new B.acw(A.bp(e,!0,v)))
x=3
return A.b(A.az(),$async$ags)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.X.aq(A.H(["parts",e,"size",f],v,y.C),null)),$async$ags)
case 2:return A.h(null,w)}})
return A.i($async$ags,w)},
agm(d){return B.i5F(d)},
i5F(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fmY.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agm)
case 3:u=j.aS(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b7(s,new B.frp(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.acw(r)
$.fmY.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agm,w)},
Rj(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Rj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cn(e))
$.GL.n(0,d,u)
x=3
return A.b(B.RP(d,u),$async$Rj)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rj,w)},
aPr(d){return B.i5D(d)},
i5D(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GL.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.RO(d),$async$aPr)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.GL.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPr)
case 4:s=f
r=A.aS(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aP(r)
x=!J.ct(q)?9:10
break
case 9:B.Rj(d,q)
x=11
return A.b(J.hv(s,d),$async$aPr)
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
return A.i($async$aPr,w)},
i1G(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cn(J.eH(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cn(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cn(A.yr(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cn(d)),y.K)
return A.f9(null,y.K)},
a2g(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bj($.bB,y.cf)
t=new A.c0(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fx4(r,t),!1,s)
A.fC(r,"error",new B.fx5(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iC(0,C.Ny,new B.fx6())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2g,w)},
aPL(d,e,f){return B.i7Z(d,e,f)},
i7Z(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPL=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2g(i),$async$aPL)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.RP(o,p),$async$aPL)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cc(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ags(k,j,s),$async$aPL)
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
return A.i($async$aPL,w)},
aPK(d,e,f){return B.i7Y(d,e,f)},
i7Y(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPK=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPL(d,e,f),$async$aPK)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2g(f),$async$aPK)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GL.n(0,s,r)
$.RA.n(0,s,r)
x=11
return A.b(B.Rj(s,r),$async$aPK)
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
return A.i($async$aPK,w)},
C4(d,e,f,g,h,i){return B.hQQ(d,e,f,g,h,i)},
hQQ(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$C4=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cM.ap(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jA(p,q,o,n,new A.V(Date.now(),0,!1).a9().ae(),a0,f,B.b0v(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Rj(s,d),$async$C4)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$C4)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cK.gcu().aP(d)),$async$C4)
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
return A.b(B.B_(e),$async$C4)
case 12:j=a2
J.cc(j,m)
x=13
return A.b(B.GW(e,j),$async$C4)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$C4,w)},
Vz(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.B_(d),$async$Vz)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cM.ap(99999)
n=p.b
l=o.type
l.toString
k=B.hmb(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a9().ae()
i=new B.jA(m,n,k,l,j,"From folder",null,B.b0v(),null)
$.agW.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2g(o),$async$Vz)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.GL.n(0,h,g)
$.RA.n(0,h,g)
B.Rj(h,g)
x=9
break
case 10:x=11
return A.b(B.aPK(d,m,o),$async$Vz)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GW(d,t),$async$Vz)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vz,w)},
h5I(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h5I=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hmb(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.J_(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.C4(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h5I,w)},
J_(d,e,f,g,h,i){return B.hQP(d,e,f,g,h,i)},
hQP(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$J_=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cM.ap(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KR(A.dz(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$J_)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.ct(m)){x=6
break}J.ha(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cn(J.So(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kE(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.RP(k,l),$async$J_)
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
return A.b(j.a2(0),$async$J_)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.RP(k,new Uint8Array(A.cn(n))),$async$J_)
case 15:J.cc(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ags(r,q,g),$async$J_)
case 16:f=new B.jA(i,a1,a0,g,new A.V(Date.now(),0,!1).a9().ae(),a2,null,B.b0v(),null)
x=17
return A.b(B.B_(d),$async$J_)
case 17:e=a6
J.cc(e,f)
x=18
return A.b(B.GW(d,e),$async$J_)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J_,w)},
VB(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$VB=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agW.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2g(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agm(s),$async$VB)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.RO(u[o]),$async$VB)
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
v=A.yr(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RA.h(0,s)
if(i==null)i=$.GL.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rN(d,e),$async$VB)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.RA.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.yr(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VB,w)},
hmb(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gak(x):""
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
rN(d,e){return B.hQR(d,e)},
hQR(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RA.h(0,f)
if(e==null)e=$.GL.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agW.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2g(s),$async$rN)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.GL.n(0,f,r)
$.RA.n(0,f,r)
B.Rj(f,r)
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
return A.b(B.agm(f),$async$rN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azi(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.RO(g[l]),$async$rN)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.aph()
if(!C.aG.gan(r)){$.GL.n(0,f,r)
$.RA.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPr(f),$async$rN)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.RA.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.VB(a0,a1,0,g),$async$rN)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.cn(i))
$.GL.n(0,f,h)
$.RA.n(0,f,h)
B.Rj(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rN,w)},
hQU(d){var x,w,v=$.agW.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hQV(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hP([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hQS(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqd(d,e,f,g,h){return B.hQT(d,e,f,g,h)},
hQT(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqd=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agW.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2g(s),$async$aqd)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rN(g,e),$async$aqd)
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
return A.b(n.iw(d).xm(h,r,new A.Eh(!0,e.c)),$async$aqd)
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
return A.i($async$aqd,w)},
hmd(d,e,f,g,h){var x,w,v,u,t=$.hmc
$.hmc=t+1
x=Date.now()
w=""+1000*x+"_"+C.cM.ap(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cds.n(0,t,new B.bxo(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azi(u)))
return t},
h5J(d){var x=0,w=A.j(y.H)
var $async$h5J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h5J,w)},
J0(d,e){var $async$J0=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agW.h(0,h)
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
return A.qp(B.VB(d,e,p,o<q?o:q),$async$J0,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qp(A.Gi(n),$async$J0,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qp(B.agm("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$J0,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qp(B.RO(h[l]),$async$J0,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qp(A.Gi(k),$async$J0,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qp(B.rN(d,e),$async$J0,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qp(A.Gi(A.yr(j,p,o<i?o:i)),$async$J0,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qp(null,0,w)
case 2:return A.qp(t.at(-1),1,w)}})
var x=0,w=A.huW($async$J0,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hwN(w)},
b0x(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cds.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gK(u)>=1048576)){x=4
break}x=5
return A.b(t.a5t(),$async$b0x)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0x,w)},
VA(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$VA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cds.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5t(),$async$VA)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ags(r.c,u,r.z),$async$VA)
case 4:t=new B.jA(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a9().ae(),r.f,r.r,B.b0v(),null)
u=r.a
x=5
return A.b(B.B_(u),$async$VA)
case 5:s=f
J.cc(s,t)
x=6
return A.b(B.GW(u,s),$async$VA)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VA,w)},
a7E(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cds.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahC(u[s]),$async$a7E)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.aa(0)
case 1:return A.h(v,w)}})
return A.i($async$a7E,w)},
cdu(d,e,f){var x=0,w=A.j(y.H)
var $async$cdu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCr(d,e,f),$async$cdu)
case 2:return A.h(null,w)}})
return A.i($async$cdu,w)},
cdv(d,e,f){var x=0,w=A.j(y.H)
var $async$cdv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCs(d,e,f),$async$cdv)
case 2:return A.h(null,w)}})
return A.i($async$cdv,w)},
F0(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$F0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.B_(d),$async$F0)
case 2:p=g
J.nJ(p,new B.cdt(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GL.W(0,v)
$.agW.W(0,e)
x=3
return A.b(B.agm(v),$async$F0)
case 3:u=g
$.fmY.W(0,v)
x=4
return A.b(A.az(),$async$F0)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$F0)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$F0)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahC(s[q]),$async$F0)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahC(v),$async$F0)
case 13:x=14
return A.b(B.GW(d,p),$async$F0)
case 14:return A.h(null,w)}})
return A.i($async$F0,w)},
b0w(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rN(d,e),$async$b0w)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fnS(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0w,w)},
B_(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$B_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$B_)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fx7(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$B_,w)},
GW(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GW)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fBe(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.X.aq(t,null)),$async$GW)
case 3:return A.h(null,w)}})
return A.i($async$GW,w)},
bCr(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B_(d),$async$bCr)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fvh(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFi(f))
x=4
return A.b(B.GW(d,u),$async$bCr)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCr,w)},
bCs(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B_(d),$async$bCs)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fvi(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cMH(f))
x=4
return A.b(B.GW(d,u),$async$bCs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCs,w)},
acw:function acw(d){this.a=d},
frp:function frp(){},
fx4:function fx4(d,e){this.a=d
this.b=e},
fx5:function fx5(d){this.a=d},
fx6:function fx6(){},
cdt:function cdt(d){this.a=d},
bxo:function bxo(d,e,f,g,h,i,j,k,l){var _=this
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
fx7:function fx7(){},
fBe:function fBe(){},
fvh:function fvh(d){this.a=d},
fvi:function fvi(d){this.a=d},
a7F(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b_(d,new B.cdy())?3:4
break
case 3:x=5
return A.b(B.b0y(d,e),$async$a7F)
case 5:u=g
if(u!=null){t=u.c
B.NZ(d,u.b,e,t)}v=u
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
return A.b(B.b0t(s),$async$a7F)
case 10:case 9:if(g){v=new A.QF(1,D.T8,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.VC(d,e),$async$a7F)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.VH(!0,!0,d,e),$async$a7F)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.NZ(d,D.zX,e,t)
v=new A.QF(p,D.zX,t)
x=1
break}v=B.cdx(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7F,w)},
VC(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$VC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7H(null,d,e),$async$VC)
case 3:p=g
try{u=C.X.aN(0,p,null)
t=y.f.b(u)?J.r(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0s(p,d.length,e),$async$VC)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdv(e,C.d.gI(d).a,r.b),$async$VC)
case 7:case 6:q=r.a
x=8
return A.b(B.NZ(d,D.T8,e,q),$async$VC)
case 8:v=new A.QF(d.length,D.T8,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VC,w)},
VD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$VD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mF(D.mU)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7G(d,e),$async$VD)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdq(s,d,e,t),$async$VD)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0t(t),$async$VD)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rN(e,d),$async$VD)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.VC(A.a([d],y.r),e),$async$VD)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VD,w)},
VF(){var x=0,w=A.j(y.H)
var $async$VF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h5C(),$async$VF)
case 2:x=3
return A.b(B.aRY(),$async$VF)
case 3:return A.h(null,w)}})
return A.i($async$VF,w)},
a7G(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0v()
x=3
return A.b(B.cdu(e,d.a,u),$async$a7G)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7G,w)},
NZ(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$NZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.T8&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b3(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7G(p,f),$async$NZ)
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
return A.b(B.cdp(o,p,u,f),$async$NZ)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdq(o,p,f,t),$async$NZ)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdo(o,u,p,f),$async$NZ)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$NZ,w)},
b0y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdw(e,d),$async$b0y)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.VH(!1,!0,d,e),$async$b0y)
case 4:u=g
if(u!=null){t=u.b
v=new A.QF(u.a,D.zX,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0y,w)},
cdw(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.VB(d,s,0,1),$async$cdw)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.K)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdw,w)},
cdx(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7H(null,d,e),$async$cdx)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hma(u)
if(t.length>800){v=null
x=1
break}v=new A.QF(d.length,D.dMF,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdx,w)},
aqe(d,e,f){return B.hQY(d,e,f)},
hQY(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqe=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.nn(g,1)
x=B.h5H(g)?3:4
break
case 3:x=5
return A.b(B.cdr(g),$async$aqe)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nn(g,13))
try{k=B.F1(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nn(g,13))
u=9
x=12
return A.b(B.b0r(q),$async$aqe)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VE(p,a0)
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
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h5G(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VE(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.J1(C.a.i(J.nn(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.J1(C.a.i(J.nn(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.au(k,0,k.length-1)
else h=k
v=B.J1(h,d,a0)
x=1
break}if(J.f2(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.VE(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqe,w)},
J1(d,e,f){return B.hQW(d,e,f)},
hQW(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$J1=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b3(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b3(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.au(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cI(A.w(s)+"/manifest.json",0,null)
q=A.cI(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0j(r),$async$J1)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0j(A.cI(s,0,null)),$async$J1)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cd3(o,r,a1,n,a2),$async$J1)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.cd2(q),$async$J1)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.VE(l,a2),$async$J1)
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
return A.i($async$J1,w)},
a7H(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aX(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gS(u)
x=5
return A.b(B.rN(f,r),$async$a7H)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cK.gcu().aP(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).a9().ae())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.aq(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7H,w)},
VE(d,e){return B.hQX(d,e)},
hQX(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$VE=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aN(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.r(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.r(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.r(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.r(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aX(r)
case 7:if(!e.C()){x=8
break}m=e.gS(e)
if(!f.b(m)){x=7
break}d=J.r(m,"name")
l=J.k(d==null?"file":d)
d=J.r(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.r(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aP(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.C4(i,a3,d,k,l,o),$async$VE)
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
return A.i($async$VE,w)},
NY:function NY(d,e){this.a=d
this.b=e},
cdy:function cdy(){},
a1Q(d){var x=A.R(d).ax.a===C.J,w=x?D.ahy:D.af5,v=x?D.ajl:C.c,u=x?C.aP:C.O,t=x?C.bL:C.al,s=x?D.agx:C.aN
return new A.aHz([w,s,v,u,t,x?C.fi:C.bP])},
hC3(d,e){var x=e?C.w.j(0.72):C.aS
return A.ch(null,x,!0,null,new B.fYi(e),d,null,!0,!0,y.N)},
cdd(d,e,f,g,h,i,j,k,l){return new B.Vw(e,l,d,f,k,j,g,h,i,null)},
ZN(d,e,f,g,h,i,j){return new B.bfb(g,h,j,e,i,d,f,null)},
fYi:function fYi(d){this.a=d},
ZK:function ZK(d,e){this.c=d
this.a=e},
aAy:function aAy(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
daI:function daI(d){this.a=d},
daG:function daG(d){this.a=d},
daH:function daH(d){this.a=d},
bx0:function bx0(){},
Vw:function Vw(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEz:function aEz(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dY6:function dY6(d){this.a=d},
dXu:function dXu(d,e){this.a=d
this.b=e},
dXv:function dXv(d,e){this.a=d
this.b=e},
dX3:function dX3(d,e,f){this.a=d
this.b=e
this.c=f},
dX2:function dX2(d){this.a=d},
dX4:function dX4(d,e){this.a=d
this.b=e},
dX9:function dX9(d,e,f){this.a=d
this.b=e
this.c=f},
dX8:function dX8(d){this.a=d},
dXV:function dXV(d,e){this.a=d
this.b=e},
dXW:function dXW(d){this.a=d},
dXr:function dXr(d,e,f){this.a=d
this.b=e
this.c=f},
dXo:function dXo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dX7:function dX7(d){this.a=d},
dXz:function dXz(d){this.a=d},
dXy:function dXy(){},
dXd:function dXd(d){this.a=d},
dXS:function dXS(d,e){this.a=d
this.b=e},
dXT:function dXT(d,e){this.a=d
this.b=e},
dXU:function dXU(d,e){this.a=d
this.b=e},
dXp:function dXp(d,e){this.a=d
this.b=e},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXL:function dXL(d,e){this.a=d
this.b=e},
dXH:function dXH(d){this.a=d},
dXG:function dXG(d){this.a=d},
dXI:function dXI(){},
dXJ:function dXJ(){},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXM:function dXM(){},
dXN:function dXN(d){this.a=d},
dXF:function dXF(d,e){this.a=d
this.b=e},
dXA:function dXA(d){this.a=d},
dXB:function dXB(d){this.a=d},
dXC:function dXC(d){this.a=d},
dXD:function dXD(d){this.a=d},
dXE:function dXE(d){this.a=d},
dXa:function dXa(){},
dXb:function dXb(d){this.a=d},
dXc:function dXc(d,e){this.a=d
this.b=e},
dX6:function dX6(d,e){this.a=d
this.b=e},
dX5:function dX5(d,e,f){this.a=d
this.b=e
this.c=f},
dXs:function dXs(d){this.a=d},
dXt:function dXt(d,e,f){this.a=d
this.b=e
this.c=f},
dXm:function dXm(d,e){this.a=d
this.b=e},
dXi:function dXi(d){this.a=d},
dXf:function dXf(d,e,f){this.a=d
this.b=e
this.c=f},
dXj:function dXj(d){this.a=d},
dXk:function dXk(d){this.a=d},
dXl:function dXl(){},
dXn:function dXn(d,e){this.a=d
this.b=e},
dXg:function dXg(d){this.a=d},
dXe:function dXe(d,e,f){this.a=d
this.b=e
this.c=f},
dXh:function dXh(){},
dXx:function dXx(d){this.a=d},
dXw:function dXw(d,e){this.a=d
this.b=e},
dXR:function dXR(d,e){this.a=d
this.b=e},
dXO:function dXO(d){this.a=d},
dXP:function dXP(d,e){this.a=d
this.b=e},
dXQ:function dXQ(d){this.a=d},
dY3:function dY3(d){this.a=d},
dY1:function dY1(d){this.a=d},
dY2:function dY2(d){this.a=d},
dY4:function dY4(){},
dY5:function dY5(d,e){this.a=d
this.b=e},
dXY:function dXY(d,e){this.a=d
this.b=e},
dXZ:function dXZ(d,e,f){this.a=d
this.b=e
this.c=f},
dXX:function dXX(d,e,f){this.a=d
this.b=e
this.c=f},
dY_:function dY_(d,e){this.a=d
this.b=e},
dY0:function dY0(d,e){this.a=d
this.b=e},
aAv:function aAv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfa:function bfa(d,e,f){this.c=d
this.d=e
this.a=f},
daE:function daE(){},
daF:function daF(){},
acQ:function acQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
db1:function db1(){},
db0:function db0(d){this.a=d},
ZM:function ZM(d,e,f){this.c=d
this.d=e
this.a=f},
aAA:function aAA(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
daY:function daY(d){this.a=d},
daZ:function daZ(d,e,f){this.a=d
this.b=e
this.c=f},
db_:function db_(d,e){this.a=d
this.b=e},
daW:function daW(d,e){this.a=d
this.b=e},
daU:function daU(d){this.a=d},
daS:function daS(d){this.a=d},
daP:function daP(d){this.a=d},
daV:function daV(d){this.a=d},
daR:function daR(d){this.a=d},
daX:function daX(d){this.a=d},
daT:function daT(d){this.a=d},
daQ:function daQ(d){this.a=d},
ZJ:function ZJ(d,e,f){this.c=d
this.d=e
this.a=f},
aAx:function aAx(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
daB:function daB(d){this.a=d},
daA:function daA(d,e){this.a=d
this.b=e},
daC:function daC(d){this.a=d},
daz:function daz(d,e){this.a=d
this.b=e},
daD:function daD(d){this.a=d},
day:function day(d,e){this.a=d
this.b=e},
dau:function dau(d){this.a=d},
dav:function dav(d){this.a=d},
daw:function daw(d,e){this.a=d
this.b=e},
dax:function dax(d){this.a=d},
Qe:function Qe(d,e,f){this.c=d
this.d=e
this.a=f},
aAD:function aAD(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dbe:function dbe(d){this.a=d},
dbf:function dbf(d){this.a=d},
dbg:function dbg(d){this.a=d},
dbh:function dbh(d){this.a=d},
dbi:function dbi(d,e){this.a=d
this.b=e},
dbj:function dbj(d){this.a=d},
dbl:function dbl(d){this.a=d},
dbk:function dbk(d){this.a=d},
ZO:function ZO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAB:function aAB(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dba:function dba(d,e){this.a=d
this.b=e},
dbb:function dbb(d,e){this.a=d
this.b=e},
db2:function db2(d,e,f){this.a=d
this.b=e
this.c=f},
db3:function db3(d){this.a=d},
db4:function db4(){},
db9:function db9(){},
db5:function db5(d,e){this.a=d
this.b=e},
db6:function db6(d,e){this.a=d
this.b=e},
db7:function db7(d,e){this.a=d
this.b=e},
db8:function db8(d,e){this.a=d
this.b=e},
acO:function acO(d,e){this.c=d
this.a=e},
dat:function dat(d){this.a=d},
ZI:function ZI(d){this.a=d},
aAw:function aAw(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ZP:function ZP(d,e){this.c=d
this.a=e},
aAC:function aAC(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dbd:function dbd(d){this.a=d},
dbc:function dbc(d){this.a=d},
bfb:function bfb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hQZ(){var x,w=$.ok(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"VT"+C.d.hf(v)},
O_(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$O_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$O_)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$O_)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"relays")
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
return A.i($async$O_,w)},
a7I(d){return B.hR_(d)},
hR_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7I)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hO("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z),!1,!1,C.cH,null),$async$a7I)
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
return A.i($async$a7I,w)},
VG(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$VG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O_(),$async$VG)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a9().ae())
r.n(s,d,t)
x=4
return A.b(B.a7I(s),$async$VG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$VG,w)},
VH(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$VH=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$VH)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.T(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cdA(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hQZ()
t=A.T(u).k("N<1,a8<m,aD>>")
r=A.C(new A.N(u,new B.cdB(s),t),t.k("ak.E"))
x=6
return A.b(B.O_(),$async$VH)
case 6:q=i
J.aJ(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.C))
x=7
return A.b(B.a7I(q),$async$VH)
case 7:x=8
return A.b(B.a7J(r,u,g,s),$async$VH)
case 8:v=new A.bqZ(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VH,w)},
aqf(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.O_(),$async$aqf)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqf,w)},
cdC(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.O_(),$async$cdC)
case 3:s=r.r(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdC,w)},
a7J(d,e,f,g){return B.hR0(d,e,f,g)},
hR0(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7J=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqd("media",r,new B.cdz(s,e,g),f,q),$async$a7J)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.VG(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7J)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.VG(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$a7J)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.VG(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7J)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7J,w)},
F1(d,e,f){return B.hR1(d,e,f)},
hR1(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$F1=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$F1)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqf(b3),$async$F1)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iI,null,g),$async$F1)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqf(b3),$async$F1)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.O_(),$async$F1)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ct(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gK(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gS(a2)
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
b0=A.pg(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.ab5(a8.a,b0,"media",a8.d,a9).CX(m)
k=A.cI(l,0,null)
x=17
return A.b(B.b0k(k,n,o,s,b7),$async$F1)
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
break}a7=g.gS(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.r(a7,"storagePath")
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
a8=A.pg(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.ab5(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$F1)
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
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a9().ae())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7I(e),$async$F1)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$F1,w)},
cdA:function cdA(){},
cdB:function cdB(d){this.a=d},
cdz:function cdz(d,e,f){this.a=d
this.b=e
this.c=f},
aRY(){var x=0,w=A.j(y.H),v,u
var $async$aRY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i0Z=null
v=y.H
u=A.dV(null,v)
x=2
return A.b(u,$async$aRY)
case 2:u=A.dV(null,v)
x=3
return A.b(u,$async$aRY)
case 3:u=$.hb0
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dV(u,v),$async$aRY)
case 4:$.hb0=$.i9R=$.i9S=null
return A.h(null,w)}})
return A.i($async$aRY,w)},
fAQ(d){var x=0,w=A.j(y.H),v,u
var $async$fAQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8E){x=1
break}u=new A.bj($.bB,y.d4)
d.c=new B.fAR(new A.c0(u,y.aY))
x=3
return A.b(u.iC(0,C.i6,new B.fAS()),$async$fAQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fAQ,w)},
i9P(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hQJ(x):x},
hb4(d){var x=0,w=A.j(y.T),v,u,t
var $async$hb4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,13))
if(C.a.a0(u,"WR")){v=B.aqh(u)
x=1
break}v=B.h5G(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hb4,w)},
hb3(d){var x=0,w=A.j(y.T),v,u,t
var $async$hb3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,14))
if(C.a.a0(u,"WR")){v=B.aqi(u)
x=1
break}v=B.h5G(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hb3,w)},
fTW(d){var x=0,w=A.j(y.T),v
var $async$fTW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqi(d),$async$fTW)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTW,w)},
bDk(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hb3(d),$async$bDk)
case 3:q=f
if(q==null){x=1
break}t=C.X.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDk,w)},
foH(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$foH=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.VA(g)
x=1
break}if(d.gK(d)<=0){v=null
x=1
break}v=B.C4(d.aph(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foH,w)},
GY(d,e,f){return B.icj(d,e,f)},
icj(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GY=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hb4(a1),$async$GY)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aN(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b3(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hDY().aFy(D.dAM,null),$async$GY)
case 4:l=d.hb0=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azi(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bj($.bB,y.b1)
l.y=new B.fBn(f,k,new B.fBo(f,a2,k,j,a0,p),a2,j,a0,p,new A.c0(t,y.ch))
x=5
return A.b(l.a8p(0,new B.XN(r,"offer")),$async$GY)
case 5:d=l
x=7
return A.b(l.alV(0),$async$GY)
case 7:x=6
return A.b(d.a8h(0,a4),$async$GY)
case 6:x=8
return A.b(B.fAQ(l),$async$GY)
case 8:x=9
return A.b(l.aq3(),$async$GY)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i9P(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aq(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqj(m,h),$async$GY)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hma(h)
case 11:v=new A.bqf(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GY,w)},
fAR:function fAR(d){this.a=d},
fAS:function fAS(){},
fBo:function fBo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBn:function fBn(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fBm:function fBm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ieh(d){switch(d){case"new":return D.evU
case"checking":return D.evV
case"connected":return D.evX
case"completed":return D.evW
case"failed":return D.evZ
case"disconnected":return D.ew_
case"closed":return D.aQa
case"count":return D.evY}return D.aQa},
iei(d){switch(d){case"new":return D.aQb
case"gathering":return D.ew0
case"complete":return D.a8E}return D.aQb},
ioG(d){switch(d){case"stable":return D.ew1
case"have-local-offer":return D.ew2
case"have-local-pranswer":return D.ew4
case"have-remote-offer":return D.ew3
case"have-remote-pranswer":return D.ew5
case"closed":return D.aQh}return D.aQh},
imT(d){switch(d){case"new":return D.aQe
case"connecting":return D.aQf
case"connected":return D.aQg
case"closed":return D.a8F
case"disconnected":return D.aQd
case"failed":return D.aQc}return D.a8F},
aa2:function aa2(d,e){this.a=d
this.b=e},
P1:function P1(d,e){this.a=d
this.b=e},
XM:function XM(d,e){this.a=d
this.b=e},
P0:function P0(d,e){this.a=d
this.b=e},
Fv:function Fv(d,e){this.a=d
this.b=e},
cqI:function cqI(){},
h7r(d){var x=new B.Fu()
x.a=d
x.b=!0
return x},
Fu:function Fu(){this.b=this.a=$},
aa1:function aa1(){},
auP:function auP(){},
XN:function XN(d,e){this.a=d
this.b=e},
h5C(){var x=0,w=A.j(y.H)
var $async$h5C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h5C,w)},
h5F(d,e,f){var x=0,w=A.j(y.T),v
var $async$h5F=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mF(D.mU))){v=null
x=1
break}v=B.fUa(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h5F,w)},
hma(d){var x,w=F.aeu.a5c(C.dO.aP(d),null)
if(w.length===0){x=C.dO.aP(d)
return C.cK.gcu().aP(x)}return C.cK.gcu().aP(w)},
hQI(d){var x,w,v=C.cF.aP(d)
try{x=C.ch.cB(0,F.aet.beL(v,!1))
return x}catch(w){x=C.ch.cB(0,v)
return x}},
h5G(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hQI(C.a.b3(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b3(t,w.length)
try{v=C.ch.cB(0,C.cF.aP(x))
return v}catch(u){return x}}return null},
hQJ(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aI(s,"\n")},
hQK(){var x,w=$.ok(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"DS"+C.d.hf(v)},
b0q(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$b0q)
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
return A.i($async$b0q,w)},
cdi(d,e){return B.hQL(d,e)},
hQL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdi=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hO("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$cdi)
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
return A.i($async$cdi,w)},
b0t(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0q(d),$async$b0t)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0t,w)},
b0s(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0s=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hQK()
r=C.a.i(f)
t=C.dO.aP(s)
x=3
return A.b(B.cdi(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cK.gcu().aP(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$b0s)
case 3:if(!h){v=null
x=1
break}v=new A.a0R("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0s,w)},
b0r(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0q(o),$async$b0r)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ch.cB(0,C.cF.aP(u))
if(J.j7(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0r,w)},
cdj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEh("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$cdj)
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
return A.i($async$cdj,w)},
b0u(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IY(),$async$b0u)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0u,w)},
aqa(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqa)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0u(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqa,w)},
aq8(d,e){var x=0,w=A.j(y.H)
var $async$aq8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aq8)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aq8)
case 2:return A.h(null,w)}})
return A.i($async$aq8,w)},
a7A(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7A=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7A)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.IY(),$async$a7A)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.C))
x=5
return A.b(A.a7z(s),$async$a7A)
case 5:x=6
return A.b(B.aq8(f,u),$async$a7A)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7A,w)},
a7B(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7B=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7B)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.IY(),$async$a7B)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.r(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.aj(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aq8(g,q),$async$a7B)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7z(u),$async$a7B)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7B,w)},
a7C(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7C)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.IY(),$async$a7C)
case 4:u=o.r(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b0n(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7C)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.X.aq(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a9().ae()],p,p),null)),$async$a7C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7C,w)},
cdk(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdk)
case 7:s=f
p=A.w(n)
r=A.aS(J.r(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aN(0,r,null)
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
return A.i($async$cdk,w)},
IZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdk(d),$async$IZ)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0u(t),$async$IZ)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aq9(d),$async$IZ)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b0n(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aq9(d),$async$IZ)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IZ,w)},
aq9(d){var x=0,w=A.j(y.H)
var $async$aq9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aq9)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aq9)
case 2:return A.h(null,w)}})
return A.i($async$aq9,w)},
b0v(){var x,w=$.ok(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(32)]
return C.d.hf(v)},
a7D(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h5H(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdn(d){return B.hQN(d)},
hQN(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7D(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$cdn)
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
return A.i($async$cdn,w)},
aqc(d,e){return B.hQO(d,e)},
hQO(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7D(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hO("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aqc)
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
return A.i($async$aqc,w)},
cdp(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdp=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7D(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqc(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$cdp)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdp,w)},
cdo(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7D(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqc(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$cdo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdo,w)},
cdq(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7D(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqc(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdq,w)},
cdr(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h5H(d)){v=null
x=1
break}x=3
return A.b(B.cdn(d),$async$cdr)
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
return A.i($async$cdr,w)},
a7K(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7K)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a7K)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"signals")
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
return A.i($async$a7K,w)},
aqg(d){return B.hR2(d)},
hR2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$aqg)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hO("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z),!1,!1,C.cH,null),$async$aqg)
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
return A.i($async$aqg,w)},
aqh(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqh)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7K(),$async$aqh)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ch.cB(0,C.cF.aP(q))
if(J.j7(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a9().ae())
J.aJ(s,j,o)
x=9
return A.b(B.aqg(s),$async$aqh)
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
return A.i($async$aqh,w)},
aqj(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aqj)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7K(),$async$aqj)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dO.aP(C.a.i(e))
q.n(0,"answer",C.cK.gcu().aP(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a9().ae())
t.n(u,p,q)
x=5
return A.b(B.aqg(u),$async$aqj)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqj,w)},
aqi(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqi)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7K(),$async$aqi)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ch.cB(0,C.cF.aP(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqi,w)},
apd(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apd=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.qe)){v=null
x=1
break}x=3
return A.b(p.m9(e),$async$apd)
case 3:r=g
u=4
x=7
return A.b(r.hA(C.hb),$async$apd)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vR(o))
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
return A.i($async$apd,w)},
ikR(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.o.u(w),5,"0")
return v},
fSd(d){return B.ikT(d)},
ikT(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fSd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iw("media").Le(d,3600),$async$fSd)
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
return A.i($async$fSd,w)},
Dq(d,e,f,g,h,i){var x=null
return B.ikQ(d,e,f,g,h,i)},
ikQ(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dq=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hmd(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h5J(r),$async$Dq)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fSd(o),$async$Dq)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7E(r),$async$Dq)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aTx)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Mg(A.a([],g))
x=15
return A.b(d.f8(0,A.avF("GET",A.cI(n,0,null))).dc(0,C.Gt),$async$Dq)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7E(r),$async$Dq)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KR(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dq)
case 24:if(!b2){x=23
break}k=d.gS(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0x(r,k),$async$Dq)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$Dq)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.VA(r)
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
return A.b(B.a7E(r),$async$Dq)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dq,w)},
aRD(d){return B.ikS(d)},
ikS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iw("media").W(0,d),$async$aRD)
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
return A.i($async$aRD,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[156]
O=c[46]
F=c[262]
I=c[148]
P=c[232]
E=c[224]
G=c[94]
Q=c[194]
R=c[149]
S=c[230]
K=c[267]
L=c[276]
B=a.updateHolder(c[22],B)
D=c[274]
T=c[193]
M=c[214]
U=c[73]
V=c[256]
W=c[79]
X=c[62]
N=c[93]
Y=c[275]
B.cqJ.prototype={
aFy(d,e){return this.cOd(d,e)},
cOd(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aFy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.U(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ku(A.cC(t)))
t=J.k(u)
v=B.hVE(C.cK.gcu().aP(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aFy,w)}}
B.b5F.prototype={
bAS(d){var x=this,w=x.w
w.onclose=A.hu(new B.cqE(x))
w.onopen=A.hu(new B.cqF(x))
w.onmessage=A.hu(new B.cqG(x))
w.onbufferedamountlow=A.hu(new B.cqH(x))},
gdd(d){return this.x},
aib(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aib=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fu()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h7r(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ed(d.arrayBuffer(),y.af),$async$aib)
case 8:v=t.h7r(s.aon(f,0,null))
x=1
break
case 7:case 4:v=B.h7r(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aib,w)}}
B.b5G.prototype={
bAT(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hu(new B.cqK(x)))
w.addEventListener("icecandidate",A.hu(new B.cqL(x)))
w.addEventListener("iceconnectionstatechange",A.hu(new B.cqM(x)))
w.onicegatheringstatechange=A.hu(new B.cqN(x))
w.addEventListener("signalingstatechange",A.hu(new B.cqO(x)))
if(!$.heN())w.addEventListener("connectionstatechange",A.hu(new B.cqP(x)))
w.addEventListener("negotiationneeded",A.hu(new B.cqQ(x)))
w.addEventListener("track",A.hu(new B.cqR(x)))},
alV(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ed(s.createAnswer(A.ku(A.cC(A.U(y.N,y.z)))),y.aQ),$async$alV)
case 3:t=f
v=new B.XN(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alV,w)},
a8h(d,e){return this.bpY(0,e)},
bpY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8h)
case 2:return A.h(null,w)}})
return A.i($async$a8h,w)},
a8p(d,e){return this.bqi(0,e)},
bqi(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8p)
case 2:return A.h(null,w)}})
return A.i($async$a8p,w)},
aq3(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aq3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.XN(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aq3,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.acP.prototype={
a6(){return"_DocShareEntry."+this.b}}
B.ZL.prototype={
R(){return new B.aAz()},
gd0(){return this.c}}
B.aAz.prototype={
Z(){this.a3()
this.aeQ()},
aeQ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0o(u.e,u.c),$async$aeQ)
case 2:t=e
if(v.c!=null)v.m(new B.daM(v,t))
return A.h(null,w)}})
return A.i($async$aeQ,w)},
QL(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aq5(t.e,t.c,!1),$async$QL)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fgr)
x=1
break}x=4
return A.b(B.a7y(u.a.c,"individual"),$async$QL)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a6M(A.ej(new B.daJ(u),!1,null,y.H)),$async$QL)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QL,w)},
JA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fyP(o),$async$JA)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7C(o.e,r,s,q),$async$JA)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fds)
x=1
break}x=5
return A.b(B.a7y(u.a.c,"member"),$async$JA)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a6M(A.ej(new B.daL(u),!1,null,y.H)),$async$JA)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JA,w)},
yh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7x(t.e,o,t.f,t.r,t.w,s),$async$yh)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7y(u.a.c,"org_owner"),$async$yh)
case 4:x=5
return A.b(B.aqa(u.a.c),$async$yh)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fzj(o),$async$yh)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7A(s,t,o,q.c),$async$yh)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fdp)
x=1
break}x=10
return A.b(B.aqa(u.a.c),$async$yh)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a6M(A.ej(new B.daK(u),!1,null,y.H)),$async$yh)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yh,w)},
B(d){var x,w,v,u=this,t=null,s=A.R(d).ax.a===C.J,r=s?C.jw:C.qa,q=B.h5E(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.h_,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fAe,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h6,t,t,t),C.aB,D.fU2,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c7p,C.n),t,t,t,t,C.eu,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lU(new B.daO(),t),C.N,w,C.dT,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.O,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ae)
if(!u.a.x)C.d.v(p,A.a([new B.adh(C.f0,C.aCH,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gchr(),t),C.ae],v))
p.push(new B.adh(C.pi,C.a4n,"Team Member","Sign in with your organization access code + password",u.gcii(),t))
p.push(C.ae)
p.push(new B.adh(C.aoR,C.a5Y,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gchO(),t))
return A.c6(t,r,A.bn(!0,A.ci(A.x(p,C.ak,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.am2,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.adh.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.L(C.d.gI(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aI(!1,C.a2,!0,s,A.aO(!1,r,!0,A.eK(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nN,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.R(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.yX,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aDb.prototype={}
B.aGj.prototype={}
B.jA.prototype={
mF(d){var x=this.b,w=C.a.oU(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b3(x,w+1).toLowerCase())},
gaqK(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ac(x/1024,1)+" KB"
if(x<1073741824)return C.k.ac(x/1048576,1)+" MB"
return C.k.ac(x/1073741824,2)+" GB"},
ah(){var x,w=this,v=A.U(y.N,y.z)
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
beg(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jA(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cMH(d){return this.beg(null,d)},
aFi(d){return this.beg(d,null)}}
B.Vu.prototype={
R(){return new B.aEx(new A.cx(null,y.A))},
gd0(){return this.c}}
B.aEx.prototype={
Z(){this.a3()
this.aeR()},
aeR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.C3(u.a.c),$async$aeR)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dX_(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aeR,w)},
aeS(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fL(new A.fE(s)),$async$aeS)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fhl)
case 1:return A.h(v,w)}})
return A.i($async$aeS,w)},
a_m(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_m=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apd(s.d,4),$async$a_m)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.th(r,"ngmy_my_code_"+m+".png"),$async$a_m)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_m,w)},
aiD(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaF("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiD,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===C.J,n=o?C.jw:C.qa,m=o?C.c:C.O,l=A.eI(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lZ
else if(q.e==null)x=A.at(new A.D(C.eu,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aM.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.L(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4Q,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.alB,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.ds,24)],y.V)
s=q.e
s.toString
r=A.ci(A.x(A.a([x,C.n1,w,C.kX,new A.er(A.p(p,A.q6(p,p,!1,B.hQE(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.kX,A.B(A.a([A.E(A.ex(N.CR,C.VG,q.gca3(),p),1),C.as,A.E(A.dj(C.zj,C.aaU,q.gca4(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.W,new A.a4(1/0,p,A.ex(M.a37,D.fPF,q.gcx9(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.NZ,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.Vy.prototype={
R(){return new B.aEA(new A.au(C.at,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aEA.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.IX(x==null?"":x)
if(w!=null)this.d.saZ(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a1()},
a_n(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IX(u.d.a.a)
if(t==null){u.m(new B.dY8(u))
x=1
break}u.m(new B.dY9(u))
s=u.a
r=s.c
x=3
return A.b(B.a7w(s.d,new B.dYa(u),t,r),$async$a_n)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dYb(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_n,w)},
a2D(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.dYc(r))
u=4
q=J.fv(r.a.d)
x=7
return A.b(B.rN(r.a.c,q),$async$a2D)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dYd(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aim(p,m,l,j,k),$async$a2D)
case 8:o=e
if(r.c!=null)r.m(new B.dYe(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dYf(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dYg(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2D,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===C.J,i=j?D.ahy:D.af5,h=j?D.ajl:C.c,g=j?C.aP:C.O,f=j?C.bL:C.al,e=j?D.agx:C.aN
i=[i,e,h,g,f,j?C.fi:C.bP]
x=A.R(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eI(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ap(80,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bVL,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.az,C.aE,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fm,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4Q,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uM(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkF()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Y,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.NU,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dYh(l),k,!1,k,k,!1,k,!0,k,C.aa,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mq,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.L(i[1],C.r,1)
m=J.LU(l.a.d,4)
m=A.C(new A.N(m,new B.dYi(x,new A.aHz(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l9,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.d4,p,C.N,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eB,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.n(14)
s=A.L(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fbX)
else q.push(A.X(C.lK,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.cY(k,A.B(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b5,new A.o(u,k,s,t,k,k,C.n),C.iG,k,k,k,k,C.eS,k,k,k)],r))}e=A.E(A.ci(A.x(e,C.ak,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bDC,k,k,C.ah),1)
u=l.f?k:l.gcxa()
t=i[3]
s=i[1]
q=A.n(16)
s=A.ex(M.a37,D.fQK,u,A.dk(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b8(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gca5()
t=A.bo(C.aD,k,k,0,C.c,k,C.nt,k,new A.b8(A.n(16),C.a0),k,k,k)
return A.c6(g,h,new A.an(C.a_,k,C.ab,C.t,A.a([f,v,A.bn(!0,A.ly(new B.dYj(),A.x(A.a([e,new A.D(D.bD6,A.x(A.a([s,C.N,i,C.ae,A.bI(l.f?C.tn:D.fP0,k,u,t)],r),C.ak,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cu,C.a_l,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkF.prototype={
oQ(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fi(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hm(C.bA,v.length),C.aO)}}
B.Vv.prototype={
R(){return new B.aEy()}}
B.aEy.prototype={
Z(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.bb(w,C.b4,C.aO),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.bb(x,C.b4,C.aO),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.at,v)},
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
w.a1()},
aeT(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aeT=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dX0(r))
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
return A.b(B.a7B(p,m,n,o,C.a.i(l).length===0?null:l),$async$aeT)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fgX)
s=[1]
x=4
break}p.L(y.q).f.U(D.ffA)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dX1(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeT,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.J?C.jw:C.qa,q=A.eI(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fHr,s,s,s,1,s,!0),p=A.p(s,D.bvf,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.HU,C.n),s,s,s,s,C.aa,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c1T,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c1O,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c23,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gca6()
u=A.bo(C.aD,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.c6(q,r,A.ci(A.x(A.a([p,C.d4,o,C.ae,x,C.ae,w,C.n1,A.bI(t.r?C.tn:C.aWk,s,v,u)],y.p),C.ak,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.aa,s,s,C.ah),s,!1,!1,s,s)}}
B.acw.prototype={}
B.bxo.prototype={
a5t(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gK(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cn(r.aph()))
x=3
return A.b(B.RP(t,s),$async$a5t)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5t,w)},
gd0(){return this.a}}
B.NY.prototype={
a6(){return"NgmyDocShareQrMode."+this.b}}
B.ZK.prototype={
R(){return new B.aAy(new A.au(C.at,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aAy.prototype={
Z(){this.a3()
$.aW.x1$.push(new B.daI(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a1()},
cac(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1Q(d),u=x.a.c,t=u?C.iz:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jw:v.a[0],p=A.n(24),o=A.L(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.h_,32)],n),l=A.p(w,T.arv,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cy,16)],n),C.asi,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uM(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bx0()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Y,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.GG,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b42),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.daG(x),w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mq,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nP,new B.daH(d),A.dk(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b8(A.n(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cI,12)],n)
g=y.p
return A.eU(w,C.L,new A.cU(Q.LF,A.c4(new A.D(C.yA,A.x(A.a([l,C.aQ,k,C.N,j,C.dT,i,C.dT,A.B(A.a([f,C.as,A.E(A.c4(A.aI(!1,C.a2,!0,w,A.aO(!1,A.n(14),!0,D.eph,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcab(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),new A.o(w,w,w,h,n,L.PO,C.n),C.bh),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bh),w),w,w,w,C.O1,C.d8,w,w,w)}}
B.bx0.prototype={
oQ(d,e){return e.alP(e.a.toUpperCase())}}
B.Vw.prototype={
R(){return new B.aEz(A.a([],y.r),A.aV(y.N))},
gd0(){return this.c}}
B.aEz.prototype={
Z(){var x=this
x.a3()
x.u7()
x.w=A.df(C.jz,new B.dY6(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.VF()
this.a1()},
a1u(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NX(u.a.c),$async$a1u)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.B_(u.a.c),$async$a1u)
case 4:u.m(new s.dXu(u,e))
u.ih("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1u,w)},
u7(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$u7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NX(u.a.c),$async$u7)
case 3:t=e
x=4
return A.b(B.B_(u.a.c),$async$u7)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dXv(u,s))
if(t>0)u.ih("Received "+A.w(t)+" file(s) via My Code.")
u.O1(u.d)
B.C3(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$u7,w)},
O1(d){return this.bER(d)},
bER(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7G(r,u.a.c),$async$O1)
case 8:p=f
if(u.c==null){x=1
break}new B.dX3(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.a0(r.c,"video/")||r.mF(D.mU))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.VD(r,u.a.c),$async$O1)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.B_(u.a.c),$async$O1)
case 12:u.m(new o.dX4(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O1,w)},
Op(d){return this.bL8(d)},
bL8(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Op=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7G(d,u.a.c),$async$Op)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dX9(u,d,t))
x=6
return A.b(A.fL(new A.fE(t)),$async$Op)
case 6:u.ih("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fL(new A.fE(r.toUpperCase())),$async$Op)
case 7:u.ih("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Op,w)},
ih(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
u8(d,e){return this.cHY(d,e)},
cHY(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$u8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dXV(r,e))
u=3
x=6
return A.b(d.$0(),$async$u8)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dXW(r))
$.eY.mA()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$u8,w)},
gaWO(){var x=this.a
return x.f||x.r||x.w},
Iu(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Iu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaWO()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdg(s,n,r,q,o,t),$async$Iu)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ih("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fLE(o,u.a.c),$async$Iu)
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
return A.b(B.Ds(s,o,r,q,n,t),$async$Iu)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iu,w)},
a0x(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqa(u.a.c),$async$a0x)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ih("No organization portal found.")
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
return A.b(A.a5(t,!1).cc(A.ej(new B.dXr(u,r,q),!1,null,y.H)),$async$a0x)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0x,w)},
a1E(d){return this.cqE(d)},
cqD(){return this.a1E(1)},
cqE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaWO()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aq7(u.a.c),$async$a1E)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1E,w)},
acK(d,e,f){return this.c1a(d,e,f)},
c1a(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ih(e)
x=1
break}x=3
return A.b(u.u8(new B.dXo(u,d,null,e,f),"Uploading\u2026"),$async$acK)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acK,w)},
bF_(){B.hBc(!1,new B.dX7(this))
return},
cvK(){this.m(new B.dXz(this))},
azK(){var x=0,w=A.j(y.H),v=this
var $async$azK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bF_()
return A.h(null,w)}})
return A.i($async$azK,w)},
acG(){var x=0,w=A.j(y.H),v=this
var $async$acG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u8(new B.dXd(v),"Importing\u2026"),$async$acG)
case 2:return A.h(null,w)}})
return A.i($async$acG,w)},
SP(d){return this.cHh(d)},
cHh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mF(D.mU)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cc(A.ej(new B.dXS(u,d),!1,null,y.H)),$async$SP)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mF(D.RM)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).cc(A.ej(new B.dXT(u,d),!1,null,y.H)),$async$SP)
case 8:x=1
break
case 7:x=u.c1S(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).cc(A.ej(new B.dXU(u,d),!1,null,y.H)),$async$SP)
case 11:x=1
break
case 10:u.ih("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SP,w)},
c1S(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oU(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cQt,C.a.b3(x,w+1).toLowerCase())},
agn(d){return this.chv(d)},
chv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mF(D.mU)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cc(A.ej(new B.dXp(u,d),!1,null,y.H)),$async$agn)
case 5:x=1
break
case 4:u.m(new B.dXq(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agn,w)},
S9(d){return this.cyE(d)},
cyE(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$S9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ih("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$S9)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.u8(new B.dXL(u,d),"Preparing QR\u2026"),$async$S9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$S9,w)},
aj2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aj2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dXM(),A.T(t).k("N<1,m>")).fO(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dXN(q),s),s.k("M.E"))
if(r.length===0){u.ih("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.S9(r),$async$aj2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aj2,w)},
aiW(d){return this.cyb(d)},
cyb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1Q(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dXF(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aiW)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SP(d)
break
case"qr":u.S9(A.a([d],y.r))
break
case"send_my_code":u.ci7(A.a([d],y.r))
break
case"save":u.aii(d)
break
case"delete":u.Jk(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aiW,w)},
Yf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dXa(),A.T(t).k("N<1,m>")).fO(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dXb(q),s),s.k("M.E"))
if(r.length===0){u.ih("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Yf)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.u8(new B.dXc(u,r),"Preparing file\u2026"),$async$Yf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yf,w)},
ahs(d){return this.coZ(d)},
coZ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hC3(d,!1),$async$ahs)
case 3:s=f
r=s==null
q=B.a7D(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ih("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahs,w)},
agt(){var x=0,w=A.j(y.H),v=this,u
var $async$agt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fTj(u,v.a.c),$async$agt)
case 2:return A.h(null,w)}})
return A.i($async$agt,w)},
bEZ(){B.hBc(!1,new B.dX6(this,null))
return},
Jz(d,e){return this.ci8(d,e)},
b2b(d){return this.Jz(null,d)},
ci7(d){return this.Jz(d,null)},
ci8(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jz=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dXs(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xB.ca().aow(!0,C.a19,!1),$async$Jz)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.u8(new B.dXt(l,s,r),"Preparing\u2026"),$async$Jz)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ih("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ih("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFr(p,l,e,s.a.c),$async$Jz)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ih("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jz,w)},
IK(d){return this.c0Y(d)},
c0Y(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hQD(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b2b(t),$async$IK)
case 8:x=6
break
case 7:u.ih("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ih("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.u8(new B.dXm(u,d),"Receiving video\u2026"),$async$IK)
case 11:x=1
break
case 10:x=12
return A.b(u.u8(new B.dXn(u,d),"Receiving\u2026"),$async$IK)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IK,w)},
Ex(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ex=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Dm()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahs(t),$async$Ex)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IK(s),$async$Ex)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).cc(A.ej(new B.dXx(u),!1,null,y.N)),$async$Ex)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.u7(),$async$Ex)
case 10:x=1
break
case 9:x=11
return A.b(u.IK(C.a.i(r)),$async$Ex)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ex,w)},
aii(d){return this.cuh(d)},
cuh(d){var x=0,w=A.j(y.H),v=this
var $async$aii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u8(new B.dXw(v,d),"Saving\u2026"),$async$aii)
case 2:return A.h(null,w)}})
return A.i($async$aii,w)},
Jk(d){return this.bNu(d)},
bNu(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lj(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jk)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdj(t),$async$Jk)
case 6:case 5:s=d.a
x=7
return A.b(B.F0(u.a.c,s),$async$Jk)
case 7:u.r.W(0,s)
x=8
return A.b(u.u7(),$async$Jk)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jk,w)},
aj8(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aj8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1Q(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dXR(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aj8)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agt()
break
case"import":u.acG()
break}case 1:return A.h(v,w)}})
return A.i($async$aj8,w)},
ca9(d){var x=d.c
if(C.a.a0(x,"video/")||d.mF(D.mU))return C.qF
if(C.a.a0(x,"image/")||d.mF(D.RM))return C.uE
if(C.a.q(x,"pdf"))return E.Pg
return D.api},
B(d){var x,w,v=this,u=null,t=B.a1Q(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.HN,u,u,u,new B.dY1(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bWk,u,u,u,v.e?u:v.gchP(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcvJ()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bQx:E.apI,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a34,u,u,u,v.e?u:v.gcaa(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.ow,u,u,u,v.e?u:v.gb3f(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bY5,u,u,u,v.e?u:new B.dY2(v),u,u,u,u,"More options",u))
q=A.eI(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lU(new B.dY3(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.R(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ap(40,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.R(d).ax.a===C.J?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kk(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAv(C.jG,s,!0,t,w?u:v.gcyF(),u),1)
x.push(new A.D(D.bBR,A.ly(new B.dY4(),A.B(A.a([s,C.as,A.E(new B.aAv(C.uF,"Export",!1,t,w?u:v.gbRk(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cu,C.j_,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfa(t,v.e?u:v.gb3f(),u)
else s=A.kl(!0,u,u,new B.dY5(v,t),s,u,D.bBJ,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.a_,u,C.ab,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAv.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.w9,t,new A.b8(s,C.a0),t,t,t)
return A.dj(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dk(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.w9,t,new A.b8(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ex(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f5,t,t,t),u.r,v)}}
B.bfa.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.ly(new B.daE(),new A.D(E.a0e,A.x(A.a([A.ly(new B.daF(),A.p(x,A.X(C.yY,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.az,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.hz,x,x,new A.bq(0.86,1,w),s),C.dT,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dT,A.dj(C.ow,D.fUm,this.d,A.bo(C.aD,x,x,x,C.c,x,C.O_,x,new A.b8(A.n(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.cu,C.BR,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.acQ.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dA(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mF(D.mU))p=D.dpW
else{p=C.a.a0(p,"image/")||i.mF(D.RM)
n=y.O
p=p?A.a([C.cQ,C.aD],n):A.a([C.aM.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.az,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaqK()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mF(D.mU))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.av,A.d(C.d.aI(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fQ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mF(D.mU)))l.push(A.h3m(C.aD,!1,j,j,j,!1,j,j,new B.db0(k),j,j,new A.b8(A.n(5),C.a0),j,j,!1,u))
x=A.X(C.oo,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.ly(new B.db1(),new A.D(C.ee,A.aI(!1,C.a2,!0,j,A.aO(!1,r,!0,new A.D(C.a_H,A.B(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b8(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.cu,h,new A.bQ("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.ZM.prototype={
R(){return new B.aAA()},
gd0(){return this.c}}
B.aAA.prototype={
Z(){this.a3()
this.y7()},
t(){B.hQS(this.e)
this.a1()},
y7(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$y7=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rN(o.c,o.d),$async$y7)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hQV(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hQU(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.daY(s))
x=1
break}s.m(new B.daZ(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.db_(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y7,w)},
a2C(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rN(t.c,t.d),$async$a2C)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fdZ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aim(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2C)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2C,w)},
c0R(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ky(u,C.A,v,new B.daW(w,t),C.h9,C.dz,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fU(t,C.A,v,new B.daX(w),C.h9,C.dz,!0,v,!1,v,v)
else return C.bK
return A.uT(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1Q(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.CS,u,u,u,v.gb72(),u,u,u,u,"Share / save",u))
r=A.eI(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fj
else{q=v.r
if(q!=null)t=new A.D(C.eu,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eu,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.dj(C.CS,D.fCG,v.gb72(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c0R()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.ZJ.prototype={
R(){return new B.aAx(A.ajc(),C.bC,C.bC)},
gd0(){return this.c}}
B.aAx.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a6(w).k("fB<1>")).iy(new B.daB(v))
x.gcVP().iy(new B.daC(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a6(x).k("fB<1>"))}if(x==null)x=C.bae
x.iy(new B.daD(v))
v.y7()},
y7(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$y7=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rN(p.c,p.d),$async$y7)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dau(s))
x=1
break}x=8
return A.b(s.d.vc(0,new A.a3T(r,s.a.d.c)),$async$y7)
case 8:if(s.c==null){x=1
break}s.m(new B.dav(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.daw(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y7,w)},
a_o(){var x=0,w=A.j(y.H),v=this,u
var $async$a_o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hh(0),$async$a_o)
case 5:x=3
break
case 4:x=6
return A.b(u.iB(0),$async$a_o)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_o,w)},
aUD(d){var x=d.a
return C.a.aY(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1Q(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eI(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fj
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bRy,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.PO,C.n),o,88,o,o,o,o,o,88)
t=A.kS(C.aD,o,o,m,0,new B.dax(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aUD(p.w)+" / "+p.aUD(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.fao,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uH:C.hp,o,o,o,o,o)
x=A.x(A.a([u,C.kX,t,x,C.d4,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcad(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.D(C.qp,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qe.prototype={
R(){return new B.aAD()},
gd0(){return this.c}}
B.aAD.prototype={
Z(){this.a3()
this.Q5()},
Q5(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Q5=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h5F(o.c,o.d,new B.dbe(s)),$async$Q5)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dbf(s))
x=1
break}s.e=r
q=O.ide(r)
if(q==null){s.m(new B.dbg(s))
x=1
break}s.d=q
q.aT(0,s.gb1Z())
x=8
return A.b(q.ix(0).dc(0,C.rE),$async$Q5)
case 8:if(s.c==null){x=1
break}s.m(new B.dbh(s))
x=9
return A.b(q.qh(0),$async$Q5)
case 9:q.tN(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dbi(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Q5,w)},
cg5(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dbj(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dd(0,x.gb1Z())
w=x.d
if(w!=null)w.t()
B.inb(x.e)
x.a1()},
aeW(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0w(u.c,u.d),$async$aeW)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aeW,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1Q(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eI(A.a([A.aH(t,t,t,t,C.ov,t,t,t,u.gca7(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fj
else{q=u.r
if(q!=null)s=new A.D(C.eu,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aiG(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.Av(s,t),A.aA(t,A.DE(A.p(t,A.X(q?I.uH:C.hp,C.c,t,t,t,48),C.f,t,t,new A.o(C.aS,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b5,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dbl(u),t,t,t,t,t,t,!1,C.a3)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.ZO.prototype={
R(){return new B.aAB(new A.cx(null,y.A))}}
B.aAB.prototype={
gcHF(){var x,w,v=this.a
if(v.e!==D.T9)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcHf(){var x,w,v=this.a
if(v.e!==D.zX)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcHF()
if(x!=null){v.Rb(x)
v.e=A.df(R.Gw,new B.dba(v,x))}w=v.gcHf()
if(w!=null){v.Ra(w)
v.f=A.df(C.fB,new B.dbb(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a1()},
Ra(d){return this.cnb(d)},
cnb(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ra=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqf(d),$async$Ra)
case 3:t=f
x=4
return A.b(B.cdC(d),$async$Ra)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.db2(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Ra,w)},
Rb(d){return this.cnc(d)},
cnc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fTW(d),$async$Rb)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDk(t),$async$Rb)
case 4:if(u.c==null){x=1
break}u.m(new B.db3(u))
u.c.L(y.q).f.U(D.aT8)
case 1:return A.h(v,w)}})
return A.i($async$Rb,w)},
gc60(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gca8(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Dm()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fh6)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).cc(A.ej(new B.db4(),!1,null,y.N)),$async$a2o)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDk(s),$async$a2o)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aT8)
case 1:return A.h(v,w)}})
return A.i($async$a2o,w)},
aaA(d){return this.bL9(d)},
bL9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fL(new A.fE(C.d.aI(t,", "))),$async$aaA)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaA,w)},
aeU(d){return this.bKT(d)},
bKT(d){var x=0,w=A.j(y.H),v=this
var $async$aeU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fL(new A.fE(v.a.c)),$async$aeU)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fes)
return A.h(null,w)}})
return A.i($async$aeU,w)},
a2i(d){return this.cuj(d)},
cuj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apd(s.d,4),$async$a2i)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.th(r,"ngmy_doc_share_qr.png"),$async$a2i)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2i,w)},
gaY0(){var x,w=this.a
if(w.e!==D.IZ)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b3(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b3(x,13))
return null},
aax(d){return this.bL2(d)},
bL2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aax=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaY0()
if(t==null){x=1
break}x=3
return A.b(A.fL(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$aax)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fg6)
case 1:return A.h(v,w)}})
return A.i($async$aax,w)},
aeV(){var x=0,w=A.j(y.H),v=this,u
var $async$aeV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.VF(),$async$aeV)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aeV,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1Q(d),i=m.a,h=i.c
if(h.length>48)h=C.a.au(h,0,44)+"\u2026"
i=i.e
i=i!==D.IZ&&i!==D.T9&&i!==D.zX
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eI(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.IZ||t===D.T9||t===D.zX?l:A.aH(l,l,l,l,C.lh,l,l,l,m.gb04(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.L(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.q6(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc60(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.IZ){t=C.aD.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mL,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gca8(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c0V,D.fMd,new B.db5(m,d),l)],p))}if(m.a.e===D.IZ&&m.gaY0()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.bYp,D.fIP,new B.db6(m,d),l)],p))
if(m.a.e===D.zX){x=(m.w?C.dE:C.aD).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fm:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mL,l,l,l)],p))}if(m.a.e===D.T9){x=(m.r?C.dE:C.aD).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fm:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mL,l,l,l),C.ae,A.dj(D.bU0,D.fPm,m.gcuH(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oG(i,A.c6(v,w,new A.D(C.aa,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.aa,l,l,1/0),1),C.ae,A.B(A.a([A.E(A.ex(N.CR,C.VG,new B.db7(m,d),l),1),C.as,A.E(A.dj(C.zj,C.aaU,new B.db8(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.N,new A.a4(1/0,l,A.bI(C.Ax,l,m.gb04(),A.bo(C.aM,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.db9(),y.C)}}
B.acO.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.ci(A.x(A.a([w,C.aQ,A.p(x,A.q6(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bD,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ei(A.a([A.bI(C.xd,x,new B.dat(d),x)],u),x,x,C.nb,v,x,x,x,x,D.fBF,x)}}
B.ZI.prototype={
R(){return new B.aAw(A.zF(C.yh,C.nV,C.uT))}}
B.aAw.prototype={
t(){this.d.t()
this.a1()},
ayj(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a5(x,!1).O(t)
return}}},
B(d){var x=null
return A.c6(A.eI(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fJk,x,x,x,1,x,!0),C.w,A.zE(this.d,C.bY,this.gayi()),x,!1,!1,x,x)}}
B.ZP.prototype={
R(){return new B.aAC(A.zF(C.yh,C.nV,C.uT))},
gd0(){return this.c}}
B.aAC.prototype={
c1U(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
agQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Mm("text/plain"),$async$agQ)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fh0)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agQ,w)},
abm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hC3(p,!0),$async$abm)
case 3:t=e
p=t==null
s=B.a7D(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.fdz)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abm,w)},
t(){this.d.t()
this.a1()},
ayj(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c1U(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.aqB,v,v,v,w.gbQQ(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a3b,v,v,v,w.gcky(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eI(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.uB:P.P_,v,v,v,v,v),v,v,v,new B.dbd(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fQf,v,v,v,1,v,!0)
u=A.zE(w.d,C.bY,w.gayi())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.a_,v,C.ab,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.L(C.aM,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.evz],s),v),v,!1,!1,v,v)}}
B.bfb.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.p8
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.p8:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a2,!0,r,A.aO(!1,w,!0,new A.D(C.a0k,A.B(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aa2.prototype={
a6(){return"RTCDataChannelState."+this.b}}
B.P1.prototype={
a6(){return"RTCSignalingState."+this.b}}
B.XM.prototype={
a6(){return"RTCIceGatheringState."+this.b}}
B.P0.prototype={
a6(){return"RTCPeerConnectionState."+this.b}}
B.Fv.prototype={
a6(){return"RTCIceConnectionState."+this.b}}
B.cqI.prototype={}
B.Fu.prototype={}
B.aa1.prototype={}
B.auP.prototype={}
B.XN.prototype={}
var z=a.updateTypes(["aB<~>()","P(jA)","m(jA)","Vw(Z)","~()","ZL(Z)","G(G,jA)","Qe(Z)","~(mf)","cv(Fu)","aB<jA?>(@)","Vu(Z)","Vy(Z)","D(jA)","jA(@)","a8<m,@>(jA)","ZK(Z)","Vv(Z)","ZM(Z)","ZJ(Z)","ZO(Z)","acO(Z)","ai<jA>()","ZP(Z)","acQ(Z,G)","ZI(Z)","a8<m,aD>(jA)","cv(XM)","cv(aa1)","aB<cv>(Fu)"])
B.cqE.prototype={
$1(d){var x=this.a
x.x=D.aQ9
x.y.M(0,D.aQ9)},
$S:76}
B.cqF.prototype={
$1(d){var x=this.a
x.x=D.aQ8
x.y.M(0,D.aQ8)},
$S:76}
B.cqG.prototype={
$1(d){var x=this.a
x.aib(A.aQl(d.data)).bJ(new B.cqD(x),y.b)},
$S:76}
B.cqD.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cqH.prototype={
$1(d){},
$S:76}
B.cqK.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hVD(d.channel))},
$S:15}
B.cqL.prototype={
$1(d){},
$S:15}
B.cqM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ieh(w.iceConnectionState)
x.cx=w
if($.heN())switch(w.a){case 0:x.cy=D.aQe
break
case 1:x.cy=D.aQf
break
case 3:x.cy=D.aQg
break
case 5:x.cy=D.aQc
break
case 6:x.cy=D.aQd
break
case 7:x.cy=D.a8F
break
default:break}},
$S:154}
B.cqN.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iei(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:154}
B.cqO.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ioG(w.signalingState)},
$S:154}
B.cqP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.imT(w.connectionState)},
$S:154}
B.cqQ.prototype={
$1(d){},
$S:154}
B.cqR.prototype={
$1(d){},
$S:15}
B.fui.prototype={
$1(d){var x=y.F.a(new A.r4([],[]).oC(d.target.result,!1)),w=C.yi.q(x.objectStoreNames,"blobs")
if(!w)C.ye.Lc(x,"blobs")},
$S:197}
B.fT7.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wH.fo(this.b)
$.eY.mA()
this.c.$1(d)},
$S:398}
B.fT9.prototype={
$1(d){return this.a.$1(B.i3H(this.b,this.c))},
$S:31}
B.fT8.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fT6.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fTm.prototype={
$1(d){var x=this
return B.hr2(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fTn.prototype={
$1(d){var x=this
return B.hr2(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fwT.prototype={
$1(d){var x=this
return B.cdd(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.daM.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.daJ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdd(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.daL.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdd(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.daK.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdd(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.daO.prototype={
$4(d,e,f,g){var x=null
return A.jX(A.B(A.a([A.aH(x,x,x,x,D.bSD,x,x,x,new B.daN(d),x,x,x,x,x,x),A.E(A.Fg(D.Rv,!0,x,C.a2c,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.Rv,x,g,C.amn,0,e,f)},
$C:"$4",
$R:4,
$S:407}
B.daN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fyS.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eN,y.o).w,t=this.a,s=t?C.iz:C.c,r=A.n(28),q=A.p(v,D.bvA,C.f,v,v,D.b5G,v,v,v,v,D.amd,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bWV,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.GL,A.x(A.a([o,C.ae,A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aqR,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.bx,A.B(A.a([A.E(A.dT(C.di,new B.fyQ(d),v),1),C.as,A.E(A.bI(D.fHQ,v,new B.fyR(p,x,d),A.bo(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Gz,v,v,v,v),v)},
$S:61}
B.fyQ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fyR.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.feJ)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aDb(v,x))},
$S:0}
B.fzl.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eN,y.o).w,u=x.a,t=u?C.iz:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bvp,C.f,w,w,D.b79,w,w,w,w,D.amd,w,w,1/0),new A.D(C.GL,A.x(A.a([A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.haO(u,"Organization name",C.Hb,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.haO(u,"Access code",C.ny,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.haO(u,"Member password",H.HI,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.bx,A.bI(D.fQm,w,new B.fzk(r,q,p,d),A.bo(C.aD,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Gz,w,w,w,w),w)},
$S:61}
B.fzk.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.feO)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aGj(u,x,w))},
$S:0}
B.cd4.prototype={
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
p=C.a.a0(j,"http")?A.cI(j,0,null):s.b.aU(j)
u=4
x=7
return A.b(A.vG(p,null).dc(0,C.a_k),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cn(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.C4(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cda.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdb.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdc.prototype={
$1(d){return d.b},
$S:z+2}
B.cd6.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cd7.prototype={
$1(d){return d.b},
$S:z+2}
B.cd5.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cd8.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.cd9.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fTk.prototype={
$1(d){return new B.Vu(this.a,null)},
$S:z+11}
B.fTl.prototype={
$1(d){return new B.Vy(this.a,this.b,this.c,null)},
$S:z+12}
B.dX_.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dY8.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dY9.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dYa.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dY7(x,d))},
$S:2}
B.dY7.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dYb.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dYc.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dYd.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dYe.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dYf.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dYg.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dYj.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.u(0,(1-e)*14)),e)},
$S:101}
B.dYh.prototype={
$1(d){var x=this.a
return x.f?null:x.a_n()},
$S:2}
B.dYi.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mF(D.RM))s=C.uE
else s=C.a.a0(s,"video/")||d.mF(D.mU)?C.qF:D.api
x=this.b.a
w=y.p
return new A.D(C.kN,A.B(A.a([A.p(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaqK(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dX0.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dX1.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cde.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:92}
B.cdf.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:92}
B.fUc.prototype={
$2(d,e){return e===this.a},
$S:299}
B.frp.prototype={
$1(d){return J.k(d)},
$S:17}
B.fx4.prototype={
$1(d){var x=this.b
B.i1G(C.GZ.ga76(this.a)).bJ(x.gBH(x),y.H)},
$S:123}
B.fx5.prototype={
$1(d){return this.a.d9(0,null)},
$S:123}
B.fx6.prototype={
$0(){return null},
$S:12}
B.cdt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fx7.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).a9().ae():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jA(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fBe.prototype={
$1(d){return d.ah()},
$S:z+15}
B.fvh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fvi.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdy.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mF(D.mU)},
$S:z+1}
B.fYi.prototype={
$1(d){return new B.ZK(this.a,null)},
$S:z+16}
B.daI.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fY()},
$S:7}
B.daG.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.daH.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dY6.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1u()},
$S:11}
B.dXu.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dXv.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dX3.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dX2(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFi(this.c)}},
$S:0}
B.dX2.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dX4.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dX9.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dX8(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFi(this.c)}},
$S:0}
B.dX8.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dXV.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dXW.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dXr.prototype={
$1(d){return new B.Vv(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dXo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Iu(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vz(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.u7(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1E(s.gK(t)),$async$$0)
case 8:case 7:r.ih(s.gan(t)?u.d:u.e+" "+s.gK(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dX7.prototype={
$1(d){this.a.acK(d,"No files selected.","Added")},
$S:398}
B.dXz.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.aa(0)
else w.v(0,new A.N(x,new B.dXy(),A.T(x).k("N<1,m>")))},
$S:0}
B.dXy.prototype={
$1(d){return d.a},
$S:z+2}
B.dXd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xB.ca().cXN(C.a19,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fv(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jG(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ih("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ih("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqe(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ih("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.u7(),$async$$0)
case 9:o.ih("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dXS.prototype={
$1(d){return new B.Qe(this.a.a.c,this.b,null)},
$S:z+7}
B.dXT.prototype={
$1(d){return new B.ZM(this.a.a.c,this.b,null)},
$S:z+18}
B.dXU.prototype={
$1(d){return new B.ZJ(this.a.a.c,this.b,null)},
$S:z+19}
B.dXp.prototype={
$1(d){return new B.Qe(this.a.a.c,this.b,null)},
$S:z+7}
B.dXq.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dXL.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Iu(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7F(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ih("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cqD(),$async$$0)
case 5:x=6
return A.b(p.u7(),$async$$0)
case 6:r=A.T(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dXH(p),r),new B.dXI(),r.k("N<ak.E,m>")).bZ(0,new B.dXJ())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).cc(A.ej(new B.dXK(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pq(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.VF(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXH.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dXG(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dXG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dXI.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dXJ.prototype={
$1(d){return d.length!==0},
$S:3}
B.dXK.prototype={
$1(d){var x=this.a
return new B.ZO(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dXM.prototype={
$1(d){return d.a},
$S:z+2}
B.dXN.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dXF.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaqK(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mF(D.mU)?C.rR:C.pm
p=!x||p.mF(D.mU)?"Play video":"View"
return A.c4(A.bn(!0,new A.D(C.C1,A.x(A.a([q,o,t,C.aB,B.ZN(!1,u,!1,w,p,new B.dXA(d),v),B.ZN(!1,u,!1,C.jG,"Share via QR",new B.dXB(d),"Letters/numbers QR code"),B.ZN(!1,u,!1,D.a2h,"Send to their Code",new B.dXC(d),"Enter someone else's personal code"),B.ZN(!1,u,!1,C.hU,"Download / save",new B.dXD(d),v),C.am,B.ZN(!1,u,!0,C.eb,"Delete",new B.dXE(d),v)],y.p),C.ak,v,C.e,C.P,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.l0,v,v,C.n),C.bh)},
$S:729}
B.dXA.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dXB.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dXC.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dXD.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dXE.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dXa.prototype={
$1(d){return d.a},
$S:z+2}
B.dXb.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dXc.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7H(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.H_(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pq(s.c,s.f),$async$$0)
case 4:u.ih(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dX6.prototype={
$1(d){var x=this.a
x.u8(new B.dX5(x,d,this.b),"Preparing\u2026")},
$S:398}
B.dX5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ih("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vz(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ih("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFr(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ih("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXs.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dXt.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aX(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gS(s)
x=4
return A.b(B.h5I(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXm.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GY(new B.dXi(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ih("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ch(null,null,!1,null,new B.dXj(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dXk(s))
case 5:x=8
return A.b(r.b.iC(0,C.Gt,new B.dXl()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gan(t)){s.ih("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.u7(),$async$$0)
case 9:s.ih("Received "+q.gK(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXi.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dXf(x,d,e))},
$S:214}
B.dXf.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dXj.prototype={
$1(d){return new B.acO(this.a.a,null)},
$S:z+21}
B.dXk.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dXl.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dXn.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IX(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7v(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b2b(B.IX(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqe(new B.dXg(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h5H(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ih(q)
x=1
break}x=10
return A.b(s.u7(),$async$$0)
case 10:o=J.cF(r)
p=o.eO(r,new B.dXh()).gK(0)
s.ih(p>0?"Received "+p+" video(s).":"Restored "+o.gK(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXg.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dXe(x,d,e))},
$S:214}
B.dXe.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dXh.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mF(D.mU)},
$S:z+1}
B.dXx.prototype={
$1(d){return new B.ZP(this.a.a.c,null)},
$S:z+23}
B.dXw.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0w(u.a.c,v.b),$async$$0)
case 2:t.ih(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXR.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.c4(A.bn(!0,new A.D(C.C1,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kM,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.ZN(!0,w,!1,C.ny,"My Code",new B.dXO(d),"Your personal code & QR \u2014 others send docs to you"),B.ZN(!1,w,!1,D.a2h,"Send to their Code",new B.dXP(this.a,d),"Enter someone else's 5-digit code + letter"),B.ZN(!1,w,!1,S.za,"Import backup",new B.dXQ(d),".ngmydoc file from another device")],y.p),C.ak,x,C.e,C.P,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.l0,x,x,C.n),C.bh)},
$S:729}
B.dXO.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dXP.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bEZ()},
$S:0}
B.dXQ.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dY3.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.J6(D.Rv,x,C.a2c,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cW(C.d.gI(D.Rv).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:676}
B.dY1.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dY2.prototype={
$0(){this.a.aj8()
return null},
$S:0}
B.dY4.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.u(0,(1-e)*10)),e)},
$S:101}
B.dY5.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.acQ(e,w,v,this.b,x.e,x.ca9(w),new B.dXY(x,w),new B.dXZ(x,v,w),new B.dY_(x,w),new B.dY0(x,w),null)},
$S:z+24}
B.dXY.prototype={
$0(){this.a.agn(this.b)
return null},
$S:0}
B.dXZ.prototype={
$0(){var x=this.a
return x.m(new B.dXX(x,this.b,this.c))},
$S:0}
B.dXX.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dY_.prototype={
$0(){this.a.Op(this.b)
return null},
$S:0}
B.dY0.prototype={
$0(){this.a.aiW(this.b)
return null},
$S:0}
B.daE.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.u(0,(1-e)*18)),e)},
$S:101}
B.daF.prototype={
$3(d,e,f){return A.ee(C.A,f,e,null,null)},
$S:110}
B.db1.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.u(0,(1-e)*14)),e)},
$S:101}
B.db0.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.daY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.daZ.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.db_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.daW.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fU(w,C.A,x,new B.daU(this.a),C.h9,C.dz,!0,x,!1,x,x)
$.aW.x1$.push(new B.daV(this.a))
return C.bK},
$S:138}
B.daU.prototype={
$3(d,e,f){$.aW.x1$.push(new B.daS(this.a))
return C.bK},
$S:196}
B.daS.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.daP(x))},
$S:7}
B.daP.prototype={
$0(){return this.a.w=!0},
$S:0}
B.daV.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.daR(x))},
$S:7}
B.daR.prototype={
$0(){return this.a.w=!0},
$S:0}
B.daX.prototype={
$3(d,e,f){$.aW.x1$.push(new B.daT(this.a))
return C.bK},
$S:196}
B.daT.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.daQ(x))},
$S:7}
B.daQ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.daB.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.daA(x,d))},
$S:1754}
B.daA.prototype={
$0(){return this.a.f=this.b===C.vh},
$S:0}
B.daC.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.daz(x,d))},
$S:7}
B.daz.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.daD.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.day(x,d))},
$S:7}
B.day.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dau.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dav.prototype={
$0(){return this.a.e=!1},
$S:0}
B.daw.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dax.prototype={
$1(d){return this.a.d.Nq(0,A.dA(0,0,0,C.k.V(d),0,0))},
$S:6}
B.dbe.prototype={
$0(){var x=this.a.a
return B.rN(x.c,x.d)},
$S:1755}
B.dbf.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dbg.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dbh.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dbi.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dbj.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dbl.prototype={
$0(){var x=this.a
x.m(new B.dbk(x))},
$S:0}
B.dbk.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hh(0)
else x.qh(0)},
$S:0}
B.dba.prototype={
$1(d){return this.a.Rb(this.b)},
$S:11}
B.dbb.prototype={
$1(d){return this.a.Ra(this.b)},
$S:11}
B.db2.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.db3.prototype={
$0(){return this.a.r=!0},
$S:0}
B.db4.prototype={
$1(d){return D.hpl},
$S:z+25}
B.db9.prototype={
$2(d,e){if(d)B.VF()},
$S:126}
B.db5.prototype={
$0(){return this.a.aaA(this.b)},
$S:0}
B.db6.prototype={
$0(){return this.a.aax(this.b)},
$S:0}
B.db7.prototype={
$0(){return this.a.aeU(this.b)},
$S:0}
B.db8.prototype={
$0(){return this.a.a2i(this.b)},
$S:0}
B.dat.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dbd.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qk(),$async$$0)
case 2:u.m(new B.dbc(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dbc.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdA.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mF(D.mU)},
$S:z+1}
B.cdB.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdz.prototype={
$2(d,e){return this.blM(d,e)},
blM(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.VG(u.c,A.H(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1756}
B.fAR.prototype={
$1(d){if(d===D.a8E&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fAS.prototype={
$0(){},
$S:12}
B.fBo.prototype={
bnl(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.foH(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.aa(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hmd(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bnl(d,e)},
$S:719}
B.fBn.prototype={
$1(d){var x=this
d.b=new B.fBm(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fBm.prototype={
$1(d){return this.bnk(d)},
bnk(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0x(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.X.aN(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.r(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.r(r,"name")
n=J.k(n==null?"file":n)
m=J.r(r,"mime")
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
return A.b(B.foH(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.aa(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d9(0,s.e)
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
return A.b(B.a7E(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d9(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAz.prototype,"gchr","QL",0)
x(v,"gcii","JA",0)
x(v,"gchO","yh",0)
x(v=B.aEx.prototype,"gca3","aeS",0)
x(v,"gca4","a_m",0)
x(v,"gcx9","aiD",0)
x(v=B.aEA.prototype,"gca5","a_n",0)
x(v,"gcxa","a2D",0)
x(B.aEy.prototype,"gca6","aeT",0)
x(B.aAy.prototype,"gcab","cac",4)
x(v=B.aEz.prototype,"gchP","a0x",0)
x(v,"gcvJ","cvK",4)
x(v,"gb3f","azK",0)
x(v,"gcyF","aj2",0)
x(v,"gbRk","Yf",0)
x(v,"gcaa","Ex",0)
x(B.aAA.prototype,"gb72","a2C",0)
x(B.aAx.prototype,"gcad","a_o",0)
x(v=B.aAD.prototype,"gb1Z","cg5",4)
x(v,"gca7","aeW",0)
x(v=B.aAB.prototype,"gcuH","a2o",0)
x(v,"gb04","aeV",0)
w(B.aAw.prototype,"gayi","ayj",8)
x(v=B.aAC.prototype,"gcky","agQ",0)
x(v,"gbQQ","abm",0)
w(v,"gayi","ayj",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cqI,B.aa1,B.auP,B.aDb,B.aGj,B.jA,B.acw,B.bxo,B.Fu,B.XN])
w(B.cqJ,B.cqI)
w(B.b5F,B.aa1)
x(A.hz,[B.cqE,B.cqF,B.cqG,B.cqD,B.cqH,B.cqK,B.cqL,B.cqM,B.cqN,B.cqO,B.cqP,B.cqQ,B.cqR,B.fui,B.fT7,B.fT9,B.fT8,B.fTm,B.fTn,B.fwT,B.daJ,B.daL,B.daK,B.daO,B.fyS,B.fzl,B.cd4,B.cdb,B.cdc,B.cd7,B.cd5,B.cd8,B.cd9,B.fTk,B.fTl,B.dYa,B.dYj,B.dYh,B.dYi,B.frp,B.fx4,B.fx5,B.cdt,B.fx7,B.fBe,B.fvh,B.fvi,B.cdy,B.fYi,B.daI,B.daG,B.dY6,B.dX2,B.dX8,B.dXr,B.dX7,B.dXy,B.dXS,B.dXT,B.dXU,B.dXp,B.dXH,B.dXG,B.dXI,B.dXJ,B.dXK,B.dXM,B.dXN,B.dXF,B.dXa,B.dXb,B.dX6,B.dXs,B.dXj,B.dXh,B.dXx,B.dXR,B.dY3,B.dY4,B.daE,B.daF,B.db1,B.db0,B.daW,B.daU,B.daS,B.daV,B.daX,B.daT,B.daB,B.daC,B.daD,B.dax,B.dba,B.dbb,B.db4,B.cdA,B.cdB,B.fAR,B.fBn,B.fBm])
w(B.b5G,B.auP)
x(A.iI,[B.fT6,B.daM,B.daN,B.fyQ,B.fyR,B.fzk,B.dX_,B.dY8,B.dY9,B.dY7,B.dYb,B.dYc,B.dYd,B.dYe,B.dYf,B.dYg,B.dX0,B.dX1,B.fx6,B.daH,B.dXu,B.dXv,B.dX3,B.dX4,B.dX9,B.dXV,B.dXW,B.dXo,B.dXz,B.dXd,B.dXq,B.dXL,B.dXA,B.dXB,B.dXC,B.dXD,B.dXE,B.dXc,B.dX5,B.dXt,B.dXm,B.dXf,B.dXk,B.dXl,B.dXn,B.dXe,B.dXw,B.dXO,B.dXP,B.dXQ,B.dY1,B.dY2,B.dXY,B.dXZ,B.dXX,B.dY_,B.dY0,B.daY,B.daZ,B.db_,B.daP,B.daR,B.daQ,B.daA,B.daz,B.day,B.dau,B.dav,B.daw,B.dbe,B.dbf,B.dbg,B.dbh,B.dbi,B.dbj,B.dbl,B.dbk,B.db2,B.db3,B.db5,B.db6,B.db7,B.db8,B.dat,B.dbd,B.dbc,B.fAS])
x(A.lB,[B.acP,B.NY,B.aa2,B.P1,B.XM,B.P0,B.Fv])
x(A.af,[B.ZL,B.Vu,B.Vy,B.Vv,B.ZK,B.Vw,B.ZM,B.ZJ,B.Qe,B.ZO,B.ZI,B.ZP])
x(A.ah,[B.aAz,B.aEx,B.aEA,B.aEy,B.aAy,B.aEz,B.aAA,B.aAx,B.aAD,B.aAB,B.aAw,B.aAC])
x(A.ax,[B.adh,B.aAv,B.bfa,B.acQ,B.acO,B.bfb])
x(A.jx,[B.cda,B.cd6,B.cde,B.cdf,B.fUc,B.dXi,B.dXg,B.dY5,B.db9,B.cdz,B.fBo])
x(A.j1,[B.bkF,B.bx0])})()
A.j2(b.typeUniverse,JSON.parse('{"b5F":{"aa1":[]},"b5G":{"auP":[]},"ZL":{"af":[],"v":[]},"aAz":{"ah":["ZL"]},"adh":{"ax":[],"v":[]},"Vu":{"af":[],"v":[]},"Vy":{"af":[],"v":[]},"aEx":{"ah":["Vu"]},"aEA":{"ah":["Vy"]},"bkF":{"j1":[]},"Vv":{"af":[],"v":[]},"aEy":{"ah":["Vv"]},"ZK":{"af":[],"v":[]},"Vw":{"af":[],"v":[]},"acQ":{"ax":[],"v":[]},"ZM":{"af":[],"v":[]},"ZJ":{"af":[],"v":[]},"Qe":{"af":[],"v":[]},"ZO":{"af":[],"v":[]},"acO":{"ax":[],"v":[]},"ZI":{"af":[],"v":[]},"ZP":{"af":[],"v":[]},"aAy":{"ah":["ZK"]},"bx0":{"j1":[]},"aEz":{"ah":["Vw"]},"aAv":{"ax":[],"v":[]},"bfa":{"ax":[],"v":[]},"aAA":{"ah":["ZM"]},"aAx":{"ah":["ZJ"]},"aAD":{"ah":["Qe"]},"aAB":{"ah":["ZO"]},"aAw":{"ah":["ZI"]},"aAC":{"ah":["ZP"]},"bfb":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uD"),k:x("Mk()"),m:x("bu<m,m>"),F:x("ro"),g:x("aB<jA?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<t>"),W:x("O<bi>"),Y:x("O<a8<m,P>>"),t:x("O<a8<m,@>>"),r:x("O<jA>"),w:x("O<+file,name(lP,m)>"),u:x("O<cW>"),s:x("O<m>"),E:x("O<j1>"),a:x("O<dL>"),p:x("O<v>"),Z:x("O<G>"),G:x("bi"),A:x("cx<ah<af>>"),n:x("ai<jA>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bA<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iC"),e:x("isD"),af:x("EH"),U:x("jA"),b:x("cv"),C:x("aD"),aK:x("wv"),ab:x("Fu"),br:x("auP"),v:x("XN"),N:x("m"),X:x("bq<I>"),Q:x("m_"),D:x("dL"),aw:x("bQ<m>"),cd:x("Y<a8<m,@>>"),c7:x("v"),ch:x("c0<ai<jA>>"),aW:x("c0<dL?>"),aY:x("c0<~>"),cx:x("acP"),b1:x("bj<ai<jA>>"),cf:x("bj<dL?>"),d4:x("bj<~>"),c4:x("aDb"),bG:x("aGj"),q:x("mv"),B:x("pI<Fu>"),c6:x("pI<aa2>"),y:x("P"),i:x("I"),z:x("@"),S:x("G"),aQ:x("bi?"),_:x("ai<jA>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jA?"),R:x("aD?"),c:x("XN?"),d:x("+answerQr,transfer(m,aB<ai<jA>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,NY,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("acw?"),bk:x("aDb?"),ag:x("aGj?"),dd:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b42=new A.ay(C.aD,2,C.r,-1)
D.c5w=new A.a9(C.a5,C.a8,C.x,C.a4n,null,null)
D.b5G=new A.o(null,null,null,C.mw,null,D.c5w,C.n)
D.b79=new A.o(null,null,null,C.mw,null,E.HU,C.n)
D.af5=new A.t(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agx=new A.t(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahy=new A.t(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajl=new A.t(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fCz=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fRh=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Kv,null,null,null,null,null,null,null,null,null)
D.dh1=x([D.fCz,C.am,D.fRh],y.p)
D.bvf=new A.fk(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dh1,null)
D.fVK=new A.y("Create your organization",null,C.fx,null,null,null,null,null,null,null,null,null)
D.fH0=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Kv,null,null,null,null,null,null,null,null,null)
D.dxN=x([D.fVK,C.am,D.fH0],y.p)
D.bvp=new A.fk(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dxN,null)
D.fRU=new A.y("Team Member sign-in",null,C.fx,null,null,null,null,null,null,null,null,null)
D.fKV=new A.y("Enter the access code and password from your organization.",null,G.Kv,null,null,null,null,null,null,null,null,null)
D.dvz=x([D.fRU,C.am,D.fKV],y.p)
D.bvA=new A.fk(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dvz,null)
D.bBJ=new A.Q(16,10,16,28)
D.bBR=new A.Q(16,14,16,4)
D.bD6=new A.Q(20,0,20,16)
D.bDC=new A.Q(20,8,20,16)
D.amd=new A.Q(24,22,24,20)
D.a2h=new A.a0(63394,"MaterialIcons",!1)
D.api=new A.a0(63515,"MaterialIcons",!1)
D.bQx=new A.a0(983813,"MaterialIcons",!1)
D.bNP=new A.a0(62867,"MaterialIcons",!1)
D.bRy=new A.ae(D.bNP,44,C.c,null,null,null)
D.bSD=new A.ae(C.ko,null,C.ac,null,null,null)
D.bU0=new A.ae(C.jk,18,null,null,null,null)
D.bVL=new A.ae(D.a2h,26,C.c,null,null,null)
D.bWk=new A.ae(C.CG,null,null,null,null,null)
D.bWV=new A.ae(C.CO,null,null,null,null,null)
D.bY5=new A.ae(W.a2s,null,null,null,null,null)
D.bYp=new A.ae(C.hE,16,null,null,null,null)
D.c0V=new A.ae(C.rQ,16,null,null,null,null)
D.bRP=new A.ae(C.ny,null,null,null,null,null)
D.c1O=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bRP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bXs=new A.ae(C.Hb,null,null,null,null,null)
D.c1T=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bSa=new A.ae(H.HI,null,null,null,null,null)
D.c23=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cR1=x([C.fi,C.b1,C.aD],y.O)
D.c7p=new A.a9(C.az,C.aE,C.x,D.cR1,null,null)
D.cQt=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Rv=x([C.fi,C.aD],y.O)
D.RM=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mU=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dpW=x([C.oa,C.aD],y.O)
D.ehV={iceServers:0}
D.aKH={urls:0}
D.dBv=new A.bu(D.aKH,["stun:stun.l.google.com:19302"],y.m)
D.dBu=new A.bu(D.aKH,["stun:stun1.l.google.com:19302"],y.m)
D.d6H=x([D.dBv,D.dBu],A.as("O<a8<m,m>>"))
D.dAM=new A.bu(D.ehV,[D.d6H],A.as("bu<m,@>"))
D.IZ=new B.NY(0,"lanDirect")
D.T8=new B.NY(1,"cloudStash")
D.dMF=new B.NY(2,"inlineInstant")
D.T9=new B.NY(3,"webrtcLink")
D.zX=new B.NY(4,"videoCloud")
D.fRg=new A.y("Receive file",null,C.n5,null,null,null,null,null,null,null,null,null)
D.cGj=x([E.ar_,C.ad,D.fRg],y.p)
D.f5J=new A.ca(C.aL,C.b9,C.i,C.m,null,C.p,null,0,D.cGj,null)
D.eph=new A.D(C.cm,D.f5J,null)
D.ft7=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Im,null,null,null)
D.fD7=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.ft7,null,C.K,null,null,null,null,null,null,null)
D.eos=new A.D(C.C6,D.fD7,null)
D.bbz=new A.cf(C.A,null,null,D.eos,null)
D.evz=new A.cO(0,null,0,28,null,null,D.bbz,null)
D.evT=new B.aa2(0,"RTCDataChannelConnecting")
D.aQ8=new B.aa2(1,"RTCDataChannelOpen")
D.aQ9=new B.aa2(3,"RTCDataChannelClosed")
D.evU=new B.Fv(0,"RTCIceConnectionStateNew")
D.evV=new B.Fv(1,"RTCIceConnectionStateChecking")
D.evW=new B.Fv(2,"RTCIceConnectionStateCompleted")
D.evX=new B.Fv(3,"RTCIceConnectionStateConnected")
D.evY=new B.Fv(4,"RTCIceConnectionStateCount")
D.evZ=new B.Fv(5,"RTCIceConnectionStateFailed")
D.ew_=new B.Fv(6,"RTCIceConnectionStateDisconnected")
D.aQa=new B.Fv(7,"RTCIceConnectionStateClosed")
D.aQb=new B.XM(0,"RTCIceGatheringStateNew")
D.ew0=new B.XM(1,"RTCIceGatheringStateGathering")
D.a8E=new B.XM(2,"RTCIceGatheringStateComplete")
D.a8F=new B.P0(0,"RTCPeerConnectionStateClosed")
D.aQc=new B.P0(1,"RTCPeerConnectionStateFailed")
D.aQd=new B.P0(2,"RTCPeerConnectionStateDisconnected")
D.aQe=new B.P0(3,"RTCPeerConnectionStateNew")
D.aQf=new B.P0(4,"RTCPeerConnectionStateConnecting")
D.aQg=new B.P0(5,"RTCPeerConnectionStateConnected")
D.ew1=new B.P1(0,"RTCSignalingStateStable")
D.ew2=new B.P1(1,"RTCSignalingStateHaveLocalOffer")
D.ew3=new B.P1(2,"RTCSignalingStateHaveRemoteOffer")
D.ew4=new B.P1(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ew5=new B.P1(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQh=new B.P1(5,"RTCSignalingStateClosed")
D.fao=new A.av(160,48)
D.bcQ=new A.fl(2,null,null,null,null,C.aD,null,null,null,null)
D.fbX=new A.a4(16,16,D.bcQ,null)
D.fGl=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fdp=new A.b2(D.fGl,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fNY=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fds=new A.b2(D.fNY,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fWO=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fdz=new A.b2(D.fWO,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fFW=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fdZ=new A.b2(D.fFW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fS4=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aT8=new A.b2(D.fS4,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTx=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fes=new A.b2(D.fTx,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fYg=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.feJ=new A.b2(D.fYg,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fWd=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.feO=new A.b2(D.fWd,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fXr=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ffA=new A.b2(D.fXr,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fEw=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fg6=new A.b2(D.fEw,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fPR=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fgr=new A.b2(D.fPR,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fIF=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgX=new A.b2(D.fIF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fYm=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fh0=new A.b2(D.fYm,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fEM=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fh6=new A.b2(D.fEM,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fDt=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhl=new A.b2(D.fDt,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fAe=new A.y("NGMY DOC SHARE",null,C.aUw,null,null,null,null,null,null,null,null,null)
D.fBF=new A.y("Show this to sender",null,C.iw,null,null,null,null,null,null,null,null,null)
D.fCG=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fHr=new A.y("Organization settings",null,C.cz,null,null,null,null,null,null,null,null,null)
D.fHQ=new A.y("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fIP=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fJk=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fMd=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fP0=new A.y("Send to their Doc Share",null,C.nM,null,null,null,null,null,null,null,null,null)
D.fPm=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fPF=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fQf=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQm=new A.y("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fQK=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.f5,null,null,null,null,null,null,null,null,null)
D.fU2=new A.y("Share files & videos\nwith a scan.",null,C.aUz,null,null,null,null,null,null,null,null,null)
D.fUm=new A.y("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hpl=new B.ZI(null)
D.abU=new B.acP(0,"docShare")
D.abV=new B.acP(1,"gate")
D.Wh=new B.acP(2,"gateNoIndividual")})();(function staticFields(){$.aP4=null
$.fml=function(){var x=y.N
return A.U(x,x)}()
$.GL=A.U(y.N,y.D)
$.agW=A.U(y.N,A.as("lP"))
$.RA=A.U(y.N,y.D)
$.fmY=A.U(y.N,A.as("acw"))
$.cds=A.U(y.S,A.as("bxo"))
$.hmc=1
$.i9S=null
$.i9R=null
$.i0Z=null
$.hb0=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"it7","hDY",()=>new B.cqJ())
x($,"ir2","heN",()=>C.a.q(A.bz(A.bz(A.bz(A.Hj(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["UfDeNtia/mPeiA2Bmn8frHWrUkY="]=a.current})($__dart_deferred_initializers__);