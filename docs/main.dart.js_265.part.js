((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,N,F,H,O,E,P,Q,R,I,K,B={coO:function coO(){},
hQv(d){var x=null,w=new B.b57(d,D.esi,new A.pA(x,x,y.c6),new A.pA(x,x,y.B))
w.bzI(d)
return w},
b57:function b57(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
coJ:function coJ(d){this.a=d},
coK:function coK(d){this.a=d},
coL:function coL(d){this.a=d},
coI:function coI(d){this.a=d},
coM:function coM(d){this.a=d},
hQw(d,e){var x=y.N
x=new B.b58(d,e,A.U(x,y.e),A.U(x,y.z))
x.bzJ(d,e)
return x},
b58:function b58(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
coP:function coP(d){this.a=d},
coQ:function coQ(d){this.a=d},
coR:function coR(d){this.a=d},
coS:function coS(d){this.a=d},
coT:function coT(d){this.a=d},
coU:function coU(d){this.a=d},
coV:function coV(d){this.a=d},
coW:function coW(d){this.a=d},
h5T(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z7.Mh(x,"ngmy_doc_share_v1",new B.fq7(),1)},
hX4(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eH(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.ym(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cD.aL(d)
return x}catch(w){return v}return v},
RE(d,e){return B.ibE(d,e)},
ibE(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aOA
x=7
return A.b(o==null?$.aOA=B.h5T():o,$async$RE)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mP(s,"blobs","readwrite")
C.j_.mn(J.mO(q,"blobs"),r,d)
x=8
return A.b(J.pJ(q),$async$RE)
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
return A.i($async$RE,w)},
RD(d){return B.ibD(d)},
ibD(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aOA
x=7
return A.b(o==null?$.aOA=B.h5T():o,$async$RD)
case 7:s=f
r=J.mP(s,"blobs","readonly")
x=8
return A.b(C.j_.zG(J.mO(r,"blobs"),d),$async$RD)
case 8:q=f
x=9
return A.b(J.pJ(r),$async$RD)
case 9:o=B.hX4(q)
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
return A.i($async$RD,w)},
ahk(d){return B.ibC(d)},
ibC(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aOA
x=7
return A.b(p==null?$.aOA=B.h5T():p,$async$ahk)
case 7:s=f
r=J.mP(s,"blobs","readwrite")
C.j_.G0(J.mO(r,"blobs"),d)
x=8
return A.b(J.pJ(r),$async$ahk)
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
return A.i($async$ahk,w)},
fq7:function fq7(){},
hZt(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bpQ(w,v))}return u},
hwa(d,e){var x,w={},v=A.aXa("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fOn(w,v,e)
C.wt.yD(v,"change",new B.fOp(w,v,!1))
C.wt.yD(v,"cancel",new B.fOo(w))
$.eW.mt()
v.click()
A.bQ(C.aj9,new B.fOm(w),y.H)},
fOn:function fOn(d,e,f){this.a=d
this.b=e
this.c=f},
fOp:function fOp(d,e,f){this.a=d
this.b=e
this.c=f},
fOo:function fOo(d){this.a=d},
fOm:function fOm(d){this.a=d},
Dl(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Dl=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gcZ()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gU2()?3:4
break
case 3:x=5
return A.b(B.hrd(e,d,s,!0,!1,f,g,h,!1,i),$async$Dl)
case 5:x=1
break
case 4:x=6
return A.b(B.Rj(d,s,f,g,h,i),$async$Dl)
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
return A.b(B.IS(s,d),$async$Dl)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.flI(s,d),$async$Dl)
case 14:x=12
return A.b(r.hrd(q,p,o,n,m,l,k,j,a1,i),$async$Dl)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cd(A.dX(new B.fOC(s,i,d,f,g,h),!1,null,y.H)),$async$Dl)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cd(A.dX(new B.fOD(s,i,d,f,g,h),!1,null,y.H)),$async$Dl)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Dl,w)},
Rj(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Rj=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_R(e),$async$Rj)
case 3:u=k
x=4
return A.b(B.apK(d,e,!1),$async$Rj)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IS(e,d),$async$Rj)
case 7:if(k){v=D.ab8
x=1
break}x=8
return A.b(B.Vo(e),$async$Rj)
case 8:v=t?D.VI:D.ab9
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b_P(d,e)){v=D.ab8
x=1
break}x=11
return A.b(B.Vo(e),$async$Rj)
case 11:v=t?D.VI:D.ab9
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h0V(d,e)){v=D.ab8
x=1
break}x=14
return A.b(B.Vo(e),$async$Rj)
case 14:v=D.VI
x=1
break
case 13:v=t?D.VI:D.ab9
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rj,w)},
flI(d,e){var x=0,w=A.j(y.y),v
var $async$flI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b_P(e,d)){v=!1
x=1
break}x=3
return A.b(B.b_R(d),$async$flI)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$flI,w)},
hrd(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cd(A.dX(new B.fsC(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hmg(d,e,f,g,h,i,j){return new B.Zy(e,j,d,g,h,i,f,null)},
fuy(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fuy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.au()
t=new A.as(C.ar,u)
s=new A.as(C.ar,u)
x=3
return A.b(A.bV(C.L,null,new B.fuB(A.P(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fuy)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuy,w)},
fv2(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fv2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.au()
t=new A.as(C.ar,u)
s=new A.as(C.ar,u)
r=new A.as(C.ar,u)
x=3
return A.b(A.bV(C.L,null,new B.fv4(A.P(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fv2)
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
return A.i($async$fv2,w)},
h61(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fGU(d,e){var x=0,w=A.j(y.H),v
var $async$fGU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Vo(e),$async$fGU)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eN()
case 1:return A.h(v,w)}})
return A.i($async$fGU,w)},
fOC:function fOC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fOD:function fOD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acz:function acz(d,e){this.a=d
this.b=e},
fsC:function fsC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zy:function Zy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aA9:function aA9(){this.c=this.a=this.d=null},
d8S:function d8S(d,e){this.a=d
this.b=e},
d8P:function d8P(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8Q:function d8Q(d){this.a=d},
d8U:function d8U(){},
d8T:function d8T(d){this.a=d},
ad0:function ad0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCM:function aCM(d,e){this.a=d
this.b=e},
aFU:function aFU(d,e,f){this.a=d
this.b=e
this.c=f},
fuB:function fuB(d,e,f){this.a=d
this.b=e
this.c=f},
fuz:function fuz(d){this.a=d},
fuA:function fuA(d,e,f){this.a=d
this.b=e
this.c=f},
fv4:function fv4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fv3:function fv3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cc_(d,e,f,g,h){return B.hLq(d,e,f,g,h)},
hLq(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cc_=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iQ(r.dF(d,new B.cc0(s,e,h,g,f,q),y.g),y.l),$async$cc_)
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
return A.i($async$cc_,w)},
b_M(d,e,f,g,h){return B.hLr(d,e,f,g,h)},
hLr(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_M=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avf("GET",d)
o=A.fYj()
if(o==null)o=new A.M9(A.a([],y.W))
x=7
return A.b(o.f4(0,s).d7(0,C.FZ),$async$b_M)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ct(),$async$b_M)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BZ(q,h,o,e,f,"Received via QR")
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
return A.i($async$b_M,w)},
b_L(d){return B.hLo(d)},
hLo(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uh(d,null).d7(0,C.od),$async$b_L)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aN(0,A.m2(A.m0(p.e)).cA(0,p.w),null)
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
return A.i($async$b_L,w)},
cbZ(d){return B.hLp(d)},
hLp(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cbZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uh(d,null).d7(0,C.qa),$async$cbZ)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m2(A.m0(q.e)).cA(0,q.w)
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
return A.i($async$cbZ,w)},
cc0:function cc0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jq:function jq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
IQ(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hLw(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IQ(C.a.b7(u,v.length))}return null},
hLx(d){var x=B.IQ(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hLs(){var x,w=$.oT(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.ar(10)
return C.d.hq(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ar(24)]},
a7d(d){return B.hLt(d)},
hLt(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a7d)
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
return A.i($async$a7d,w)},
a7e(d,e){return B.hLu(d,e)},
hLu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7e=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cG,null),$async$a7e)
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
return A.i($async$a7e,w)},
BY(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BY)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IQ(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7f(r),$async$BY)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7d("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BY)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IQ(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BY)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hLs()
x=14
return A.b(B.a7f(m),$async$BY)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a8().ae()
x=15
return A.b(B.a7e("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BY)
case 15:k=f
x=16
return A.b(B.a7e("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BY)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BY)
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
return A.i($async$BY,w)},
a7f(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IQ(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7d("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7f)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7f,w)},
a7g(d,e,f,g){return B.hLy(d,e,f,g)},
hLy(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7g=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IQ(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7f(r),$async$a7g)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.cc6())>1048576||g.b2(d,new B.cc7())){v=B.ET(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7r("myCode",d,a0),$async$a7g)
case 4:u=a3
try{t=C.X.aN(0,u,null)
if(y.f.b(t)){s=J.r(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.ET(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b_U(u,g.gL(d),a0),$async$a7g)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oT().ar(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dF(d,new B.cc8(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b_N(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"status","pending"],i,y.z),q),$async$a7g)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7g,w)},
ET(d,e,f,g,h){return B.hLv(d,e,f,g,h)},
hLv(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$ET=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$ET)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cH(a6,0,new B.cc2())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oT().ar(9999)
h=Date.now()
g=""+1000*h+"_"+C.cR.ar(99999)
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
a1=B.IU(a9,q)
a0=new A.KK(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$ET)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aS(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p8(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaQ(a1.a,a4,"media",a1.d,a2).xe(m,n,new A.E9(!0,q.c)),$async$ET)
case 12:J.cd(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$ET)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aR7(r),$async$ET)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dF(a6,new B.cc3(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b_N(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"status","pending"],e,d),a8),$async$ET)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aR7(r),$async$ET)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ET,w)},
b_N(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b_N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7d(t),$async$b_N)
case 3:s=g
r=y.aL.a(J.r(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.cc1(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7e(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_N,w)},
NM(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NM=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7d("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NM)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.r(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
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
return A.b(B.b_O(k,a0),$async$NM)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a8().ae())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b_T(h),$async$NM)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vv(g,a0),$async$NM)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a8().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("L.E")
e=A.C(new A.Y(r,new B.cc4(),q),n)
d=A.C(new A.Y(r,new B.cc5(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d0(d,0,A.dB(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7e("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$NM)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NM,w)},
b_O(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b_O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a5(p)
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
break}i=B.ifu(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dj(l,m,"Received via My Code",t,e,i),$async$b_O)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aR7(s),$async$b_O)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_O,w)},
cc6:function cc6(){},
cc7:function cc7(){},
cc8:function cc8(){},
cc2:function cc2(){},
cc3:function cc3(){},
cc1:function cc1(){},
cc4:function cc4(){},
cc5:function cc5(){},
fOz(d,e){var x=0,w=A.j(y.H)
var $async$fOz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cd(A.dX(new B.fOA(e),!1,null,y.H)),$async$fOz)
case 2:return A.h(null,w)}})
return A.i($async$fOz,w)},
bEA(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bEA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cd(A.dX(new B.fOB(g,e,f),!1,null,y.y)),$async$bEA)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEA,w)},
fOA:function fOA(d){this.a=d},
fOB:function fOB(d,e,f){this.a=d
this.b=e
this.c=f},
Vl:function Vl(d,e){this.c=d
this.a=e},
aE7:function aE7(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dUy:function dUy(d,e){this.a=d
this.b=e},
Vp:function Vp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEa:function aEa(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dVH:function dVH(d){this.a=d},
dVI:function dVI(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
dVG:function dVG(d,e){this.a=d
this.b=e},
dVK:function dVK(d){this.a=d},
dVL:function dVL(d){this.a=d},
dVM:function dVM(d,e){this.a=d
this.b=e},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVP:function dVP(d){this.a=d},
dVS:function dVS(){},
dVQ:function dVQ(d){this.a=d},
dVR:function dVR(d,e){this.a=d
this.b=e},
bk1:function bk1(){},
Vm:function Vm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aE8:function aE8(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dUz:function dUz(d){this.a=d},
dUA:function dUA(d){this.a=d},
h0W(d){var x=d.hZ
if(x>=0)return C.o.N(x)
return 10},
hLA(d){var x=d.kV
if(x>=0)return x
return 4.99},
hLz(d){var x=d.lx,w=y.N
w=x.jh(x,new B.cca(),w,w)
return w},
hhk(d){var x=d.kW,w=y.N
w=x.jh(x,new B.ccb(),w,w)
return w},
b_R(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b_R=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b_R)
case 7:s=f
r=A.w(p)
r=A.aT(J.r(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b_R,w)},
a7i(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7i)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a7i)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7i,w)},
Vo(d){var x=0,w=A.j(y.H),v,u
var $async$Vo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Vo)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Vo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Vo,w)},
h0V(d,e){var x,w,v
if(B.hLA(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hLz(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cg(new A.V(Date.now(),0,!1))},
b_P(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hhk(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cg(new A.V(Date.now(),0,!1))},
hhl(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hhk(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cg(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dF(f,0,0,0,0,0).a).a8().ae())
d.kW=w},
apL(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apL)
case 7:s=f
r=A.w(p)
r=A.eB(J.r(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$apL,w)},
apM(d){var x=0,w=A.j(y.H),v,u,t
var $async$apM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apL(d),$async$apM)
case 3:u=f
x=5
return A.b(A.az(),$async$apM)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$apM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apM,w)},
apK(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h0W(d)
if(u<=0){v=!1
x=1
break}if(B.h0V(d,e)){v=!1
x=1
break}x=3
return A.b(B.apL(e),$async$apK)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apK,w)},
b_Q(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b_Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IS(e,d),$async$b_Q)
case 3:if(g){v=-1
x=1
break}u=B.h0W(d)
if(u<=0){v=-1
x=1
break}if(B.h0V(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apL(e),$async$b_Q)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_Q,w)},
ccd(d,e,f){var x=0,w=A.j(y.y),v
var $async$ccd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IS(e,d),$async$ccd)
case 3:if(h){v=!1
x=1
break}v=B.apK(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccd,w)},
ccc(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ccc=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
x=3
return A.b(B.ccd(d,u,i.gU2()),$async$ccc)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccc,w)},
a7h(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7h=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
if(i.gU2()){v=!0
x=1
break}if(B.b_P(d,u)){v=!0
x=1
break}x=5
return A.b(A.lq(u,C.ST),$async$a7h)
case 5:x=k?3:4
break
case 3:B.hhl(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7h)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l3(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.ST,"Doc Share for Organizations"),$async$a7h)
case 7:if(!k){v=!1
x=1
break}B.hhl(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7h)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7h,w)},
cca:function cca(){},
ccb:function ccb(){},
fPs(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fPs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fPs)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fii.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.fii.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fPs,w)},
ihP(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fii.bs($.fii,new B.fPu(d))},
fPu:function fPu(d){this.a=d},
fjL(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fjL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aN(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],f))
s.toString
u=A.mR(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jf,null,y.H),$async$fjL)
case 3:C.AE.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fjL,w)},
aga(d,e,f){var x=0,w=A.j(y.H),v
var $async$aga=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fiR.n(0,d,new B.acg(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$aga)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.X.ap(A.G(["parts",e,"size",f],v,y.C),null)),$async$aga)
case 2:return A.h(null,w)}})
return A.i($async$aga,w)},
ag4(d){return B.i0q(d)},
i0q(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ag4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fiR.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ag4)
case 3:u=j.aT(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b6(s,new B.fnh(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.acg(r)
$.fiR.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ag4,w)},
R9(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$R9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.GD.n(0,d,u)
x=3
return A.b(B.RE(d,u),$async$R9)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R9,w)},
aOX(d){return B.i0o(d)},
i0o(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GD.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.RD(d),$async$aOX)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.GD.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aOX)
case 4:s=f
r=A.aT(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cD.aL(r)
x=!J.ct(q)?9:10
break
case 9:B.R9(d,q)
x=11
return A.b(J.hz(s,d),$async$aOX)
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
return A.i($async$aOX,w)},
hXu(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cl(J.eH(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cl(A.ym(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cl(d)),y.K)
return A.f8(null,y.K)},
a23(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a23=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bh($.bB,y.cf)
t=new A.bZ(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fsO(r,t),!1,s)
A.fH(r,"error",new B.fsP(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iv(0,C.N4,new B.fsQ())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a23,w)},
aPg(d,e,f){return B.i2H(d,e,f)},
i2H(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPg=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a23(i),$async$aPg)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.RE(o,p),$async$aPg)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cd(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aga(k,j,s),$async$aPg)
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
return A.i($async$aPg,w)},
aPf(d,e,f){return B.i2G(d,e,f)},
i2G(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPf=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPg(d,e,f),$async$aPf)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a23(f),$async$aPf)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GD.n(0,s,r)
$.Rq.n(0,s,r)
x=11
return A.b(B.R9(s,r),$async$aPf)
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
return A.i($async$aPf,w)},
BZ(d,e,f,g,h,i){return B.hLJ(d,e,f,g,h,i)},
hLJ(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BZ=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.ar(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jq(p,q,o,n,new A.V(Date.now(),0,!1).a8().ae(),a0,f,B.b_X(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.R9(s,d),$async$BZ)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BZ)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cI.gcp().aL(d)),$async$BZ)
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
return A.b(B.AW(e),$async$BZ)
case 12:j=a2
J.cd(j,m)
x=13
return A.b(B.GO(e,j),$async$BZ)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BZ,w)},
Vq(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vq=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AW(d),$async$Vq)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cR.ar(99999)
n=p.b
l=o.type
l.toString
k=B.hhn(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a8().ae()
i=new B.jq(m,n,k,l,j,"From folder",null,B.b_X(),null)
$.agE.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a23(o),$async$Vq)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.GD.n(0,h,g)
$.Rq.n(0,h,g)
B.R9(h,g)
x=9
break
case 10:x=11
return A.b(B.aPf(d,m,o),$async$Vq)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.M)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GO(d,t),$async$Vq)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vq,w)},
h1_(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h1_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hhn(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IT(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.BZ(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1_,w)},
IT(d,e,f,g,h,i){return B.hLI(d,e,f,g,h,i)},
hLI(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IT=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.ar(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KK(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IT)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ct(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.Sd(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kC(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.RE(k,l),$async$IT)
case 11:J.cd(q,k);++p
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
return A.b(j.a4(0),$async$IT)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.RE(k,new Uint8Array(A.cl(n))),$async$IT)
case 15:J.cd(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aga(r,q,g),$async$IT)
case 16:f=new B.jq(i,a1,a0,g,new A.V(Date.now(),0,!1).a8().ae(),a2,null,B.b_X(),null)
x=17
return A.b(B.AW(d),$async$IT)
case 17:e=a6
J.cd(e,f)
x=18
return A.b(B.GO(d,e),$async$IT)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IT,w)},
Vs(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Vs=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agE.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a23(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ag4(s),$async$Vs)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.RD(u[o]),$async$Vs)
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
v=A.ym(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.M)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Rq.h(0,s)
if(i==null)i=$.GD.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rB(d,e),$async$Vs)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Rq.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.ym(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vs,w)},
hhn(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rB(d,e){return B.hLK(d,e)},
hLK(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rB=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Rq.h(0,f)
if(e==null)e=$.GD.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agE.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a23(s),$async$rB)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.GD.n(0,f,r)
$.Rq.n(0,f,r)
B.R9(f,r)
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
return A.b(B.ag4(f),$async$rB)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ayS(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.RD(g[l]),$async$rB)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.M)(g),++l
x=13
break
case 15:r=n.aoK()
if(!C.aG.gan(r)){$.GD.n(0,f,r)
$.Rq.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aOX(f),$async$rB)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Rq.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Vs(a0,a1,0,g),$async$rB)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.cl(i))
$.GD.n(0,f,h)
$.Rq.n(0,f,h)
B.R9(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rB,w)},
hLN(d){var x,w,v=$.agE.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hLO(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hLL(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apS(d,e,f,g,h){return B.hLM(d,e,f,g,h)},
hLM(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apS=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agE.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a23(s),$async$apS)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rB(g,e),$async$apS)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f_().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ip(d).xe(h,r,new A.E9(!0,e.c)),$async$apS)
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
return A.i($async$apS,w)},
hhp(d,e,f,g,h){var x,w,v,u,t=$.hho
$.hho=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.ar(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cco.n(0,t,new B.bwG(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ayS(u)))
return t},
h10(d){var x=0,w=A.j(y.H)
var $async$h10=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h10,w)},
IU(d,e){var $async$IU=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agE.h(0,h)
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
return A.qi(B.Vs(d,e,p,o<q?o:q),$async$IU,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qi(A.Ga(n),$async$IU,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qi(B.ag4("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IU,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qi(B.RD(h[l]),$async$IU,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qi(A.Ga(k),$async$IU,w)
case 21:case 20:case 16:h.length===r||(0,A.M)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qi(B.rB(d,e),$async$IU,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qi(A.Ga(A.ym(j,p,o<i?o:i)),$async$IU,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qi(null,0,w)
case 2:return A.qi(t.at(-1),1,w)}})
var x=0,w=A.hq6($async$IU,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hrX(w)},
b_Z(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b_Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cco.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a55(),$async$b_Z)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_Z,w)},
Vr(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Vr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cco.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a55(),$async$Vr)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aga(r.c,u,r.z),$async$Vr)
case 4:t=new B.jq(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a8().ae(),r.f,r.r,B.b_X(),null)
u=r.a
x=5
return A.b(B.AW(u),$async$Vr)
case 5:s=f
J.cd(s,t)
x=6
return A.b(B.GO(u,s),$async$Vr)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vr,w)},
a7o(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cco.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahk(u[s]),$async$a7o)
case 6:case 4:u.length===t||(0,A.M)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a7o,w)},
ccq(d,e,f){var x=0,w=A.j(y.H)
var $async$ccq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBB(d,e,f),$async$ccq)
case 2:return A.h(null,w)}})
return A.i($async$ccq,w)},
ccr(d,e,f){var x=0,w=A.j(y.H)
var $async$ccr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBC(d,e,f),$async$ccr)
case 2:return A.h(null,w)}})
return A.i($async$ccr,w)},
EU(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$EU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AW(d),$async$EU)
case 2:p=g
J.nA(p,new B.ccp(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GD.W(0,v)
$.agE.W(0,e)
x=3
return A.b(B.ag4(v),$async$EU)
case 3:u=g
$.fiR.W(0,v)
x=4
return A.b(A.az(),$async$EU)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$EU)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$EU)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahk(s[q]),$async$EU)
case 12:case 10:s.length===r||(0,A.M)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahk(v),$async$EU)
case 13:x=14
return A.b(B.GO(d,p),$async$EU)
case 14:return A.h(null,w)}})
return A.i($async$EU,w)},
b_Y(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b_Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rB(d,e),$async$b_Y)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fjL(t,A.aN(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_Y,w)},
AW(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AW)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fsR(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AW,w)},
GO(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GO)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fwX(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.X.ap(t,null)),$async$GO)
case 3:return A.h(null,w)}})
return A.i($async$GO,w)},
bBB(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AW(d),$async$bBB)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.fr0(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEA(f))
x=4
return A.b(B.GO(d,u),$async$bBB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBB,w)},
bBC(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AW(d),$async$bBC)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.fr1(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cKN(f))
x=4
return A.b(B.GO(d,u),$async$bBC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBC,w)},
acg:function acg(d){this.a=d},
fnh:function fnh(){},
fsO:function fsO(d,e){this.a=d
this.b=e},
fsP:function fsP(d){this.a=d},
fsQ:function fsQ(){},
ccp:function ccp(d){this.a=d},
bwG:function bwG(d,e,f,g,h,i,j,k,l){var _=this
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
fsR:function fsR(){},
fwX:function fwX(){},
fr0:function fr0(d){this.a=d},
fr1:function fr1(d){this.a=d},
a7p(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b2(d,new B.ccu())?3:4
break
case 3:x=5
return A.b(B.b0_(d,e),$async$a7p)
case 5:u=g
if(u!=null){t=u.c
B.NO(d,u.b,e,t)}v=u
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
return A.b(B.b_V(s),$async$a7p)
case 10:case 9:if(g){v=new A.Qw(1,D.Sw,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vt(d,e),$async$a7p)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Vy(!0,!0,d,e),$async$a7p)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.NO(d,D.zL,e,t)
v=new A.Qw(p,D.zL,t)
x=1
break}v=B.cct(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7p,w)},
Vt(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7r(null,d,e),$async$Vt)
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
return A.b(B.b_U(p,d.length,e),$async$Vt)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ccr(e,C.d.gI(d).a,r.b),$async$Vt)
case 7:case 6:q=r.a
x=8
return A.b(B.NO(d,D.Sw,e,q),$async$Vt)
case 8:v=new A.Qw(d.length,D.Sw,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vt,w)},
Vu(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mP)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7q(d,e),$async$Vu)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ccm(s,d,e,t),$async$Vu)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b_V(t),$async$Vu)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rB(e,d),$async$Vu)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vt(A.a([d],y.r),e),$async$Vu)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vu,w)},
Vw(){var x=0,w=A.j(y.H)
var $async$Vw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h0U(),$async$Vw)
case 2:x=3
return A.b(B.aRr(),$async$Vw)
case 3:return A.h(null,w)}})
return A.i($async$Vw,w)},
a7q(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b_X()
x=3
return A.b(B.ccq(e,d.a,u),$async$a7q)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7q,w)},
NO(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$NO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Sw&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b7(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7q(p,f),$async$NO)
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
return A.b(B.ccl(o,p,u,f),$async$NO)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ccm(o,p,f,t),$async$NO)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cck(o,u,p,f),$async$NO)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.M)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$NO,w)},
b0_(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccs(e,d),$async$b0_)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Vy(!1,!0,d,e),$async$b0_)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qw(u.a,D.zL,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0_,w)},
ccs(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ccs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Vs(d,s,0,1),$async$ccs)
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
return A.i($async$ccs,w)},
cct(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cct=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7r(null,d,e),$async$cct)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hhm(u)
if(t.length>800){v=null
x=1
break}v=new A.Qw(d.length,D.dJg,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cct,w)},
apT(d,e,f){return B.hLR(d,e,f)},
hLR(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apT=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.ng(g,1)
x=B.h0Z(g)?3:4
break
case 3:x=5
return A.b(B.ccn(g),$async$apT)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ng(g,13))
try{k=B.EV(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ng(g,13))
u=9
x=12
return A.b(B.b_T(q),$async$apT)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vv(p,a0)
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
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h0Y(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vv(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.IV(C.a.i(J.ng(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.IV(C.a.i(J.ng(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cB(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aq(k,0,k.length-1)
else h=k
v=B.IV(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vv(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apT,w)},
IV(d,e,f){return B.hLP(d,e,f)},
hLP(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IV=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aN(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b7(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b7(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aq(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aN(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_L(r),$async$IV)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_L(A.cD(s,0,null)),$async$IV)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cc_(o,r,a1,n,a2),$async$IV)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.cbZ(q),$async$IV)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vv(l,a2),$async$IV)
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
return A.i($async$IV,w)},
a7r(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7r=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.rB(f,r),$async$a7r)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cI.gcp().aL(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).a8().ae())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.ap(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7r,w)},
Vv(d,e){return B.hLQ(d,e)},
hLQ(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vv=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.r(m,"name")
l=J.k(d==null?"file":d)
d=J.r(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.r(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cD.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BZ(i,a3,d,k,l,o),$async$Vv)
case 9:h=a5
if(h!=null)J.cd(n,h)
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
return A.i($async$Vv,w)},
NN:function NN(d,e){this.a=d
this.b=e},
ccu:function ccu(){},
a1D(d){var x=A.P(d).ax.a===C.J,w=x?D.agA:D.aei,v=x?D.aic:C.c,u=x?C.aP:C.M,t=x?C.bM:C.al,s=x?D.afA:C.aL
return new A.aHc([w,s,v,u,t,x?C.fg:C.bP])},
hx0(d,e){var x=e?C.w.j(0.72):C.aS
return A.cj(null,x,!0,null,new B.fTB(e),d,null,!0,!0,y.N)},
cc9(d,e,f,g,h,i,j,k,l){return new B.Vn(e,l,d,f,k,j,g,h,i,null)},
ZA(d,e,f,g,h,i,j){return new B.beF(g,h,j,e,i,d,f,null)},
fTB:function fTB(d){this.a=d},
Zx:function Zx(d,e){this.c=d
this.a=e},
aA8:function aA8(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d8O:function d8O(d){this.a=d},
d8M:function d8M(d){this.a=d},
d8N:function d8N(d){this.a=d},
bwi:function bwi(){},
Vn:function Vn(d,e,f,g,h,i,j,k,l,m){var _=this
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
aE9:function aE9(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dVF:function dVF(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
dUC:function dUC(d,e,f){this.a=d
this.b=e
this.c=f},
dUB:function dUB(d){this.a=d},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUI:function dUI(d,e,f){this.a=d
this.b=e
this.c=f},
dUH:function dUH(d){this.a=d},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVu:function dVu(d){this.a=d},
dV_:function dV_(d,e,f){this.a=d
this.b=e
this.c=f},
dUX:function dUX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUG:function dUG(d){this.a=d},
dV7:function dV7(d){this.a=d},
dV6:function dV6(){},
dUM:function dUM(d){this.a=d},
dVq:function dVq(d,e){this.a=d
this.b=e},
dVr:function dVr(d,e){this.a=d
this.b=e},
dVs:function dVs(d,e){this.a=d
this.b=e},
dUY:function dUY(d,e){this.a=d
this.b=e},
dUZ:function dUZ(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e){this.a=d
this.b=e},
dVf:function dVf(d){this.a=d},
dVe:function dVe(d){this.a=d},
dVg:function dVg(){},
dVh:function dVh(){},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVk:function dVk(){},
dVl:function dVl(d){this.a=d},
dVd:function dVd(d,e){this.a=d
this.b=e},
dV8:function dV8(d){this.a=d},
dV9:function dV9(d){this.a=d},
dVa:function dVa(d){this.a=d},
dVb:function dVb(d){this.a=d},
dVc:function dVc(d){this.a=d},
dUJ:function dUJ(){},
dUK:function dUK(d){this.a=d},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUF:function dUF(d,e){this.a=d
this.b=e},
dUE:function dUE(d,e,f){this.a=d
this.b=e
this.c=f},
dV0:function dV0(d){this.a=d},
dV1:function dV1(d,e,f){this.a=d
this.b=e
this.c=f},
dUV:function dUV(d,e){this.a=d
this.b=e},
dUR:function dUR(d){this.a=d},
dUO:function dUO(d,e,f){this.a=d
this.b=e
this.c=f},
dUS:function dUS(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUU:function dUU(){},
dUW:function dUW(d,e){this.a=d
this.b=e},
dUP:function dUP(d){this.a=d},
dUN:function dUN(d,e,f){this.a=d
this.b=e
this.c=f},
dUQ:function dUQ(){},
dV5:function dV5(d){this.a=d},
dV4:function dV4(d,e){this.a=d
this.b=e},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVm:function dVm(d){this.a=d},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVC:function dVC(d){this.a=d},
dVA:function dVA(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVD:function dVD(){},
dVE:function dVE(d,e){this.a=d
this.b=e},
dVw:function dVw(d,e){this.a=d
this.b=e},
dVx:function dVx(d,e,f){this.a=d
this.b=e
this.c=f},
dVv:function dVv(d,e,f){this.a=d
this.b=e
this.c=f},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVz:function dVz(d,e){this.a=d
this.b=e},
aA5:function aA5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beE:function beE(d,e,f){this.c=d
this.d=e
this.a=f},
d8K:function d8K(){},
d8L:function d8L(){},
acA:function acA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d97:function d97(){},
d96:function d96(d){this.a=d},
Zz:function Zz(d,e,f){this.c=d
this.d=e
this.a=f},
aAa:function aAa(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d93:function d93(d){this.a=d},
d94:function d94(d,e,f){this.a=d
this.b=e
this.c=f},
d95:function d95(d,e){this.a=d
this.b=e},
d91:function d91(d,e){this.a=d
this.b=e},
d9_:function d9_(d){this.a=d},
d8Y:function d8Y(d){this.a=d},
d8V:function d8V(d){this.a=d},
d90:function d90(d){this.a=d},
d8X:function d8X(d){this.a=d},
d92:function d92(d){this.a=d},
d8Z:function d8Z(d){this.a=d},
d8W:function d8W(d){this.a=d},
Zw:function Zw(d,e,f){this.c=d
this.d=e
this.a=f},
aA7:function aA7(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d8H:function d8H(d){this.a=d},
d8G:function d8G(d,e){this.a=d
this.b=e},
d8I:function d8I(d){this.a=d},
d8F:function d8F(d,e){this.a=d
this.b=e},
d8J:function d8J(d){this.a=d},
d8E:function d8E(d,e){this.a=d
this.b=e},
d8A:function d8A(d){this.a=d},
d8B:function d8B(d){this.a=d},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8D:function d8D(d){this.a=d},
Q5:function Q5(d,e,f){this.c=d
this.d=e
this.a=f},
aAd:function aAd(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d9k:function d9k(d){this.a=d},
d9l:function d9l(d){this.a=d},
d9m:function d9m(d){this.a=d},
d9n:function d9n(d){this.a=d},
d9o:function d9o(d,e){this.a=d
this.b=e},
d9p:function d9p(d){this.a=d},
d9r:function d9r(d){this.a=d},
d9q:function d9q(d){this.a=d},
ZB:function ZB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAb:function aAb(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d9g:function d9g(d,e){this.a=d
this.b=e},
d9h:function d9h(d,e){this.a=d
this.b=e},
d98:function d98(d,e,f){this.a=d
this.b=e
this.c=f},
d99:function d99(d){this.a=d},
d9a:function d9a(){},
d9f:function d9f(){},
d9b:function d9b(d,e){this.a=d
this.b=e},
d9c:function d9c(d,e){this.a=d
this.b=e},
d9d:function d9d(d,e){this.a=d
this.b=e},
d9e:function d9e(d,e){this.a=d
this.b=e},
acy:function acy(d,e){this.c=d
this.a=e},
d8z:function d8z(d){this.a=d},
Zv:function Zv(d){this.a=d},
aA6:function aA6(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ZC:function ZC(d,e){this.c=d
this.a=e},
aAc:function aAc(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d9j:function d9j(d){this.a=d},
d9i:function d9i(d){this.a=d},
beF:function beF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hLS(){var x,w=$.oT(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ar(32)]
return"VT"+C.d.hq(v)},
NP(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$NP)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NP)
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
return A.i($async$NP,w)},
a7s(d){return B.hLT(d)},
hLT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7s)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7s)
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
return A.i($async$a7s,w)},
Vx(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NP(),$async$Vx)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dR(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a8().ae())
r.n(s,d,t)
x=4
return A.b(B.a7s(s),$async$Vx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vx,w)},
Vy(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Vy=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Vy)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.T(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ccw(),t),t.k("L.E"))}if(u.length===0){v=null
x=1
break}s=B.hLS()
t=A.T(u).k("N<1,a8<n,aD>>")
r=A.C(new A.N(u,new B.ccx(s),t),t.k("ak.E"))
x=6
return A.b(B.NP(),$async$Vy)
case 6:q=i
J.aI(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.C))
x=7
return A.b(B.a7s(q),$async$Vy)
case 7:x=8
return A.b(B.a7t(r,u,g,s),$async$Vy)
case 8:v=new A.bqi(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vy,w)},
apU(d){var x=0,w=A.j(y.y),v,u,t
var $async$apU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NP(),$async$apU)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apU,w)},
ccy(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ccy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NP(),$async$ccy)
case 3:s=r.r(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccy,w)},
a7t(d,e,f,g){return B.hLU(d,e,f,g)},
hLU(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7t=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apS("media",r,new B.ccv(s,e,g),f,q),$async$a7t)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vx(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7t)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vx(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$a7t)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vx(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7t)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7t,w)},
EV(d,e,f){return B.hLV(d,e,f)},
hLV(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EV=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$EV)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apU(b3),$async$EV)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iU,null,g),$async$EV)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apU(b3),$async$EV)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NP(),$async$EV)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
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
a1=J.a5(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a5(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f_().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p8(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaQ(a8.a,b0,"media",a8.d,a9).CP(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b_M(k,n,o,s,b7),$async$EV)
case 17:j=c0
if(j!=null){J.cd(p,j);++q
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
case 23:a2=J.r(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f_().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p8(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaQ(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$EV)
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
a0=A.dR(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7s(e),$async$EV)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EV,w)},
ccw:function ccw(){},
ccx:function ccx(d){this.a=d},
ccv:function ccv(d,e,f){this.a=d
this.b=e
this.c=f},
aRr(){var x=0,w=A.j(y.H),v,u
var $async$aRr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hWQ=null
v=y.H
u=A.dU(null,v)
x=2
return A.b(u,$async$aRr)
case 2:u=A.dU(null,v)
x=3
return A.b(u,$async$aRr)
case 3:u=$.h6e
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dU(u,v),$async$aRr)
case 4:$.h6e=$.i4z=$.i4A=null
return A.h(null,w)}})
return A.i($async$aRr,w)},
fwy(d){var x=0,w=A.j(y.H),v,u
var $async$fwy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a7X){x=1
break}u=new A.bh($.bB,y.d4)
d.c=new B.fwz(new A.bZ(u,y.aY))
x=3
return A.b(u.iv(0,C.hY,new B.fwA()),$async$fwy)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fwy,w)},
i4x(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hLC(x):x},
h6i(d){var x=0,w=A.j(y.T),v,u,t
var $async$h6i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,13))
if(C.a.a0(u,"WR")){v=B.apW(u)
x=1
break}v=B.h0Y(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6i,w)},
h6h(d){var x=0,w=A.j(y.T),v,u,t
var $async$h6h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,14))
if(C.a.a0(u,"WR")){v=B.apX(u)
x=1
break}v=B.h0Y(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6h,w)},
fPc(d){var x=0,w=A.j(y.T),v
var $async$fPc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apX(d),$async$fPc)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fPc,w)},
bCu(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bCu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h6h(d),$async$bCu)
case 3:q=f
if(q==null){x=1
break}t=C.X.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCu,w)},
fkz(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fkz=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Vr(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BZ(d.aoK(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fkz,w)},
GQ(d,e,f){return B.i7_(d,e,f)},
i7_(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GQ=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h6i(a1),$async$GQ)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aN(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a5(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b7(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hyU().aEP(D.dxB,null),$async$GQ)
case 4:l=d.h6e=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ayS(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bh($.bB,y.b1)
l.y=new B.fx5(f,k,new B.fx6(f,a2,k,j,a0,p),a2,j,a0,p,new A.bZ(t,y.ch))
x=5
return A.b(l.a82(0,new B.XB(r,"offer")),$async$GQ)
case 5:d=l
x=7
return A.b(l.alq(0),$async$GQ)
case 7:x=6
return A.b(d.a7V(0,a4),$async$GQ)
case 6:x=8
return A.b(B.fwy(l),$async$GQ)
case 8:x=9
return A.b(l.apw(),$async$GQ)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i4x(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.ap(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apY(m,h),$async$GQ)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hhm(h)
case 11:v=new A.bpA(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GQ,w)},
fwz:function fwz(d){this.a=d},
fwA:function fwA(){},
fx6:function fx6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fx5:function fx5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fx4:function fx4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i8V(d){switch(d){case"new":return D.esj
case"checking":return D.esk
case"connected":return D.esm
case"completed":return D.esl
case"failed":return D.eso
case"disconnected":return D.esp
case"closed":return D.aOC
case"count":return D.esn}return D.aOC},
i8W(d){switch(d){case"new":return D.aOD
case"gathering":return D.esq
case"complete":return D.a7X}return D.aOD},
ijj(d){switch(d){case"stable":return D.esr
case"have-local-offer":return D.ess
case"have-local-pranswer":return D.esu
case"have-remote-offer":return D.est
case"have-remote-pranswer":return D.esv
case"closed":return D.aOJ}return D.aOJ},
ihw(d){switch(d){case"new":return D.aOG
case"connecting":return D.aOH
case"connected":return D.aOI
case"closed":return D.a7Y
case"disconnected":return D.aOF
case"failed":return D.aOE}return D.a7Y},
a9N:function a9N(d,e){this.a=d
this.b=e},
OS:function OS(d,e){this.a=d
this.b=e},
XA:function XA(d,e){this.a=d
this.b=e},
OR:function OR(d,e){this.a=d
this.b=e},
Fo:function Fo(d,e){this.a=d
this.b=e},
coN:function coN(){},
h2K(d){var x=new B.Fn()
x.a=d
x.b=!0
return x},
Fn:function Fn(){this.b=this.a=$},
a9M:function a9M(){},
aup:function aup(){},
XB:function XB(d,e){this.a=d
this.b=e},
h0U(){var x=0,w=A.j(y.H)
var $async$h0U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h0U,w)},
h0X(d,e,f){var x=0,w=A.j(y.T),v
var $async$h0X=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mP))){v=null
x=1
break}v=B.fPs(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h0X,w)},
hhm(d){var x,w=F.adI.a4Q(C.dN.aL(d),null)
if(w.length===0){x=C.dN.aL(d)
return C.cI.gcp().aL(x)}return C.cI.gcp().aL(w)},
hLB(d){var x,w,v=C.cD.aL(d)
try{x=C.cd.cA(0,F.adH.bdM(v,!1))
return x}catch(w){x=C.cd.cA(0,v)
return x}},
h0Y(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hLB(C.a.b7(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b7(t,w.length)
try{v=C.cd.cA(0,C.cD.aL(x))
return v}catch(u){return x}}return null},
hLC(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aH(s,"\n")},
hLD(){var x,w=$.oT(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ar(32)]
return"DS"+C.d.hq(v)},
b_S(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b_S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b_S)
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
return A.i($async$b_S,w)},
cce(d,e){return B.hLE(d,e)},
hLE(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cce=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$cce)
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
return A.i($async$cce,w)},
b_V(d){var x=0,w=A.j(y.y),v,u,t
var $async$b_V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_S(d),$async$b_V)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_V,w)},
b_U(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b_U=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hLD()
r=C.a.i(f)
t=C.dN.aL(s)
x=3
return A.b(B.cce(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cI.gcp().aL(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$b_U)
case 3:if(!h){v=null
x=1
break}v=new A.a0E("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_U,w)},
b_T(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b_T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b_S(o),$async$b_T)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cd.cA(0,C.cD.aL(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b_T,w)},
ccf(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ccf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(W.bDq("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$ccf)
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
return A.i($async$ccf,w)},
b_W(d){var x=0,w=A.j(y.h),v,u,t
var $async$b_W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IR(),$async$b_W)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_W,w)},
apP(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apP)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b_W(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apP,w)},
apN(d,e){var x=0,w=A.j(y.H)
var $async$apN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apN)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apN)
case 2:return A.h(null,w)}})
return A.i($async$apN,w)},
a7k(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7k=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7k)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.IR(),$async$a7k)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.C))
x=5
return A.b(A.a7j(s),$async$a7k)
case 5:x=6
return A.b(B.apN(f,u),$async$a7k)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7k,w)},
a7l(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7l=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7l)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.IR(),$async$a7l)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
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
return A.b(B.apN(g,q),$async$a7l)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7j(u),$async$a7l)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7l,w)},
a7m(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7m=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7m)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.IR(),$async$a7m)
case 4:u=o.r(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b_P(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7m)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.X.ap(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a8().ae()],p,p),null)),$async$a7m)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7m,w)},
ccg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ccg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$ccg)
case 7:s=f
p=A.w(n)
r=A.aT(J.r(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$ccg,w)},
IS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccg(d),$async$IS)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b_W(t),$async$IS)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apO(d),$async$IS)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b_P(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apO(d),$async$IS)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IS,w)},
apO(d){var x=0,w=A.j(y.H)
var $async$apO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apO)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apO)
case 2:return A.h(null,w)}})
return A.i($async$apO,w)},
b_X(){var x,w=$.oT(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ar(32)]
return C.d.hq(v)},
a7n(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h0Z(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ccj(d){return B.hLG(d)},
hLG(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ccj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7n(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$ccj)
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
return A.i($async$ccj,w)},
apR(d,e){return B.hLH(d,e)},
hLH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7n(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apR)
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
return A.i($async$apR,w)},
ccl(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7n(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apR(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$ccl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccl,w)},
cck(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cck=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7n(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apR(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$cck)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cck,w)},
ccm(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ccm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7n(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apR(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccm,w)},
ccn(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ccn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h0Z(d)){v=null
x=1
break}x=3
return A.b(B.ccj(d),$async$ccn)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a5(u)
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
return A.i($async$ccn,w)},
a7u(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7u=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7u)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7u)
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
return A.i($async$a7u,w)},
apV(d){return B.hLW(d)},
hLW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$apV)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z),!1,!1,C.cG,null),$async$apV)
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
return A.i($async$apV,w)},
apW(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$apW)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7u(),$async$apW)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cd.cA(0,C.cD.aL(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.a2(r,m,l),m,l)
J.aI(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a8().ae())
J.aI(s,j,o)
x=9
return A.b(B.apV(s),$async$apW)
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
return A.i($async$apW,w)},
apY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$apY)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7u(),$async$apY)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dR(A.a2(s,r,q),r,q)
r=C.dN.aL(C.a.i(e))
q.n(0,"answer",C.cI.gcp().aL(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a8().ae())
t.n(u,p,q)
x=5
return A.b(B.apV(u),$async$apY)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apY,w)},
apX(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$apX)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7u(),$async$apX)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cd.cA(0,C.cD.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apX,w)},
aoS(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.q8)){v=null
x=1
break}x=3
return A.b(p.m5(e),$async$aoS)
case 3:r=g
u=4
x=7
return A.b(r.ht(C.h9),$async$aoS)
case 7:q=g
o=q
o=o==null?null:J.eR(J.vD(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.q()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoS,w)},
ifu(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aS(C.o.u(w),5,"0")
return v},
fNt(d){return B.ifw(d)},
ifw(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fNt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ip("media").L2(d,3600),$async$fNt)
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
return A.i($async$fNt,w)},
Dj(d,e,f,g,h,i){var x=null
return B.ift(d,e,f,g,h,i)},
ift(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dj=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hhp(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h10(r),$async$Dj)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fNt(o),$async$Dj)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7o(r),$async$Dj)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aRV)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.M9(A.a([],g))
x=15
return A.b(d.f4(0,A.avf("GET",A.cD(n,0,null))).d7(0,C.FZ),$async$Dj)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7o(r),$async$Dj)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KK(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dj)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b_Z(r,k),$async$Dj)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$Dj)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.M)(b0),++f
x=8
break
case 10:i=B.Vr(r)
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
return A.b(B.a7o(r),$async$Dj)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dj,w)},
aR7(d){return B.ifv(d)},
ifv(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aR7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ip("media").W(0,d),$async$aR7)
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
return A.i($async$aR7,w)}},D,S,L,T,U,V,W,M,X
J=c[1]
A=c[0]
C=c[2]
G=c[149]
N=c[43]
F=c[245]
H=c[138]
O=c[223]
E=c[216]
P=c[187]
Q=c[139]
R=c[221]
I=c[249]
K=c[254]
B=a.updateHolder(c[22],B)
D=c[252]
S=c[186]
L=c[206]
T=c[70]
U=c[239]
V=c[76]
W=c[59]
M=c[90]
X=c[253]
B.coO.prototype={
aEP(d,e){return this.cMk(d,e)},
cMk(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aEP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.U(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.kr(A.cA(t)))
t=J.k(u)
v=B.hQw(C.cI.gcp().aL(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aEP,w)}}
B.b57.prototype={
bzI(d){var x=this,w=x.w
w.onclose=A.hs(new B.coJ(x))
w.onopen=A.hs(new B.coK(x))
w.onmessage=A.hs(new B.coL(x))
w.onbufferedamountlow=A.hs(new B.coM(x))},
gdc(d){return this.x},
ahJ(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fn()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h2K(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eb(d.arrayBuffer(),y.af),$async$ahJ)
case 8:v=t.h2K(s.ao3(f,0,null))
x=1
break
case 7:case 4:v=B.h2K(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahJ,w)}}
B.b58.prototype={
bzJ(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hs(new B.coP(x)))
w.addEventListener("icecandidate",A.hs(new B.coQ(x)))
w.addEventListener("iceconnectionstatechange",A.hs(new B.coR(x)))
w.onicegatheringstatechange=A.hs(new B.coS(x))
w.addEventListener("signalingstatechange",A.hs(new B.coT(x)))
if(!$.ha_())w.addEventListener("connectionstatechange",A.hs(new B.coU(x)))
w.addEventListener("negotiationneeded",A.hs(new B.coV(x)))
w.addEventListener("track",A.hs(new B.coW(x)))},
alq(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eb(s.createAnswer(A.kr(A.cA(A.U(y.N,y.z)))),y.aQ),$async$alq)
case 3:t=f
v=new B.XB(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alq,w)},
a7V(d,e){return this.boW(0,e)},
boW(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eb(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7V)
case 2:return A.h(null,w)}})
return A.i($async$a7V,w)},
a82(d,e){return this.bpg(0,e)},
bpg(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a82=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eb(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a82)
case 2:return A.h(null,w)}})
return A.i($async$a82,w)},
apw(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.XB(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apw,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.acz.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.Zy.prototype={
R(){return new B.aA9()},
gcZ(){return this.c}}
B.aA9.prototype={
Z(){this.a2()
this.aeq()},
aeq(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_Q(u.e,u.c),$async$aeq)
case 2:t=e
if(v.c!=null)v.m(new B.d8S(v,t))
return A.h(null,w)}})
return A.i($async$aeq,w)},
Qy(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apK(t.e,t.c,!1),$async$Qy)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fbi)
x=1
break}x=4
return A.b(B.a7i(u.a.c,"individual"),$async$Qy)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a6p(A.dX(new B.d8P(u),!1,null,y.H)),$async$Qy)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qy,w)},
Jp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fuy(o),$async$Jp)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7m(o.e,r,s,q),$async$Jp)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f8j)
x=1
break}x=5
return A.b(B.a7i(u.a.c,"member"),$async$Jp)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a6p(A.dX(new B.d8R(u),!1,null,y.H)),$async$Jp)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jp,w)},
ya(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$ya=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7h(t.e,o,t.f,t.r,t.w,s),$async$ya)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7i(u.a.c,"org_owner"),$async$ya)
case 4:x=5
return A.b(B.apP(u.a.c),$async$ya)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fv2(o),$async$ya)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7k(s,t,o,q.c),$async$ya)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f8g)
x=1
break}x=10
return A.b(B.apP(u.a.c),$async$ya)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a6p(A.dX(new B.d8Q(u),!1,null,y.H)),$async$ya)
case 11:case 1:return A.h(v,w)}})
return A.i($async$ya,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.J,r=s?C.jw:C.q0,q=B.h0W(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.h_,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fv9,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h4,t,t,t),C.aA,D.fP3,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c4R,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lO(new B.d8U(),t),C.O,w,C.dS,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ad)
if(!u.a.x)C.d.v(p,A.a([new B.ad0(C.f0,C.aBd,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcfP(),t),C.ad],v))
p.push(new B.ad0(C.pa,C.a3K,"Team Member","Sign in with your organization access code + password",u.gcgG(),t))
p.push(C.ad)
p.push(new B.ad0(C.anw,C.a5j,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcgb(),t))
return A.c7(t,r,A.bl(!0,A.cg(A.x(p,C.ak,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.akR,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ad0.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.J(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aH(!1,C.a2,!0,s,A.aO(!1,r,!0,A.eJ(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oH,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.yI,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aCM.prototype={}
B.aFU.prototype={}
B.jq.prototype={
my(d){var x=this.b,w=C.a.oN(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b7(x,w+1).toLowerCase())},
gaqc(){var x=this.d
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
bdf(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jq(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cKN(d){return this.bdf(null,d)},
aEA(d){return this.bdf(d,null)}}
B.Vl.prototype={
R(){return new B.aE7(new A.cB(null,y.A))},
gcZ(){return this.c}}
B.aE7.prototype={
Z(){this.a2()
this.aer()},
aer(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aer=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BY(u.a.c),$async$aer)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dUy(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aer,w)},
aes(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aes=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fB(s)),$async$aes)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fcc)
case 1:return A.h(v,w)}})
return A.i($async$aes,w)},
a_3(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoS(s.d,4),$async$a_3)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t6(r,"ngmy_my_code_"+m+".png"),$async$a_3)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_3,w)},
aia(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aia=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aap("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aia)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aia,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.J,n=o?C.jw:C.q0,m=o?C.c:C.M,l=A.eI(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mt
else if(q.e==null)x=A.at(new A.D(C.em,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.J(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a4b,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,X.akp,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dr,24)],y.V)
s=q.e
s.toString
r=A.cg(A.x(A.a([x,C.mY,w,C.kT,new A.ey(A.p(p,A.q_(p,p,!1,B.hLx(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ad,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.kT,A.B(A.a([A.E(A.et(M.CC,C.V9,q.gc8G(),p),1),C.at,A.E(A.dl(C.z6,C.aaa,q.gc8H(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.W,new A.a6(1/0,p,A.et(L.a2u,D.fKF,q.gcvt(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,T.Nw,p,p,C.ag)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.Vp.prototype={
R(){return new B.aEa(new A.as(C.ar,$.au()),A.k2(!0,null,!0,!0,null,null,!1))}}
B.aEa.prototype={
Z(){var x,w
this.a2()
x=this.a.e
w=B.IQ(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.S$=$.au()
x.P$=0
this.e.q()
this.a1()},
a_4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IQ(u.d.a.a)
if(t==null){u.m(new B.dVH(u))
x=1
break}u.m(new B.dVI(u))
s=u.a
r=s.c
x=3
return A.b(B.a7g(s.d,new B.dVJ(u),t,r),$async$a_4)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dVK(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_4,w)},
a2h(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2h=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.dVL(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rB(r.a.c,q),$async$a2h)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dVM(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ai4(p,m,l,j,k),$async$a2h)
case 8:o=e
if(r.c!=null)r.m(new B.dVN(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dVO(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dVP(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2h,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.J,i=j?D.agA:D.aei,h=j?D.aic:C.c,g=j?C.aP:C.M,f=j?C.bM:C.al,e=j?D.afA:C.aL
i=[i,e,h,g,f,j?C.fg:C.bP]
x=A.P(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eI(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.J(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bTd,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.ay,C.aE,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fk,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a4b,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uA(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bk1()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.Y,u==null,k,!0,C.t,k,A.aM(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.Nr,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dVQ(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.ml,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.J(i[1],C.r,1)
m=J.LN(l.a.d,4)
m=A.C(new A.N(m,new B.dVR(x,new A.aHc(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l5,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.O,e,C.O,q,C.d4,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eB,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.J(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f6P)
else q.push(A.X(C.lF,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dd(k,A.B(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b6,new A.o(u,k,s,t,k,k,C.n),C.iy,k,k,k,C.eT,k,k,k)],r))}e=A.E(A.cg(A.x(e,C.ak,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bBh,k,k,C.ag),1)
u=l.f?k:l.gcvu()
t=i[3]
s=i[1]
q=A.m(16)
s=A.et(L.a2u,D.fLK,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ck,k,new A.b7(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gc8I()
t=A.bo(C.aD,k,k,0,C.c,k,C.np,k,new A.b7(A.m(16),C.a0),k,k,k)
return A.c7(g,h,new A.an(C.a_,k,C.ab,C.t,A.a([f,v,A.bl(!0,A.ls(new B.dVS(),A.x(A.a([e,new A.D(D.bAM,A.x(A.a([s,C.O,i,C.ad,A.bE(l.f?C.t5:D.fK0,k,u,t)],r),C.ak,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cv,C.ZM,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bk1.prototype={
oJ(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hk(C.by,v.length),C.aO)}}
B.Vm.prototype={
R(){return new B.aE8()}}
B.aE8.prototype={
Z(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.au()
u.d!==$&&A.aQ()
u.d=new A.as(new A.bb(w,C.b3,C.aO),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.as(new A.bb(x,C.b3,C.aO),v)
u.f!==$&&A.aQ()
u.f=new A.as(C.ar,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.S$=$.au()
v.P$=0
v=w.e
v===$&&A.c()
v.S$=x
v.P$=0
v=w.f
v===$&&A.c()
v.S$=x
v.P$=0
w.a1()},
aet(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aet=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dUz(r))
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
return A.b(B.a7l(p,m,n,o,C.a.i(l).length===0?null:l),$async$aet)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.fbO)
s=[1]
x=4
break}p.K(y.q).f.U(D.far)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dUA(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aet,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.J?C.jw:C.q0,q=A.eI(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fCr,s,s,s,1,s,!0),p=A.p(s,D.bt_,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Hu,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.Y,!1,s,!0,C.t,s,A.aM(),o,s,s,s,s,s,2,D.c_m,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.Y,!1,s,!0,C.t,s,A.aM(),x,s,s,s,s,s,2,D.c_h,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.Y,!1,s,!0,C.t,s,A.aM(),w,s,s,s,s,s,2,D.c_x,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.an,s,s,s,s)
v=t.r?s:t.gc8J()
u=A.bo(C.aD,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.c7(q,r,A.cg(A.x(A.a([p,C.d4,o,C.ad,x,C.ad,w,C.mY,A.bE(t.r?C.t5:C.aUH,s,v,u)],y.p),C.ak,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.acg.prototype={}
B.bwG.prototype={
a55(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a55=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.aoK()))
x=3
return A.b(B.RE(t,s),$async$a55)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a55,w)},
gcZ(){return this.a}}
B.NN.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.Zx.prototype={
R(){return new B.aA8(new A.as(C.ar,$.au()),A.k2(!0,null,!0,!0,null,null,!1))}}
B.aA8.prototype={
Z(){this.a2()
$.aV.x1$.push(new B.d8O(this))},
q(){var x=this.d
x.S$=$.au()
x.P$=0
this.e.q()
this.a1()},
c8P(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1D(d),u=x.a.c,t=u?C.it:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jw:v.a[0],p=A.m(24),o=A.J(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.h_,32)],n),l=A.p(w,S.aqa,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cx,16)],n),C.aqX,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uA(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bwi()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.Q,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.Y,!1,w,!0,C.t,w,A.aM(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.Ga,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b1Y),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d8M(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.ml,w,w,w,w)
f=f[1]
f=A.E(A.dI(C.nM,new B.d8N(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.ck,w,new A.b7(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cH,12)],n)
g=y.p
return A.eS(w,C.L,new A.cU(P.Le,A.c4(new A.D(C.yl,A.x(A.a([l,C.aN,k,C.O,j,C.dS,i,C.dS,A.B(A.a([f,C.at,A.E(A.c4(A.aH(!1,C.a2,!0,w,A.aO(!1,A.m(14),!0,D.elD,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc8O(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.o(w,w,w,h,n,K.Pe,C.n),C.bg),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bg),w),w,w,w,C.Nz,C.d8,w,w,w)}}
B.bwi.prototype={
oJ(d,e){return e.alk(e.a.toUpperCase())}}
B.Vn.prototype={
R(){return new B.aE9(A.a([],y.r),A.aX(y.N))},
gcZ(){return this.c}}
B.aE9.prototype={
Z(){var x=this
x.a2()
x.tY()
x.w=A.df(C.jz,new B.dVF(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vw()
this.a1()},
a18(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NM(u.a.c),$async$a18)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AW(u.a.c),$async$a18)
case 4:u.m(new s.dV2(u,e))
u.i8("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a18,w)},
tY(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NM(u.a.c),$async$tY)
case 3:t=e
x=4
return A.b(B.AW(u.a.c),$async$tY)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dV3(u,s))
if(t>0)u.i8("Received "+A.w(t)+" file(s) via My Code.")
u.NS(u.d)
B.BY(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tY,w)},
NS(d){return this.bDH(d)},
bDH(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7q(r,u.a.c),$async$NS)
case 8:p=f
if(u.c==null){x=1
break}new B.dUC(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mP))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vu(r,u.a.c),$async$NS)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.M)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AW(u.a.c),$async$NS)
case 12:u.m(new o.dUD(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NS,w)},
Of(d){return this.bJX(d)},
bJX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Of=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7q(d,u.a.c),$async$Of)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dUI(u,d,t))
x=6
return A.b(A.fI(new A.fB(t)),$async$Of)
case 6:u.i8("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fB(r.toUpperCase())),$async$Of)
case 7:u.i8("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Of,w)},
i8(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
tZ(d,e){return this.cG7(d,e)},
cG7(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dVt(r,e))
u=3
x=6
return A.b(d.$0(),$async$tZ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dVu(r))
$.eW.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tZ,w)},
gaW_(){var x=this.a
return x.f||x.r||x.w},
Ik(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ik=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaW_()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ccc(s,n,r,q,o,t),$async$Ik)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i8("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fGU(o,u.a.c),$async$Ik)
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
return A.b(B.Dl(s,o,r,q,n,t),$async$Ik)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ik,w)},
a0c(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apP(u.a.c),$async$a0c)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i8("No organization portal found.")
x=1
break}t=J.a5(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a4(t,!1).cd(A.dX(new B.dV_(u,r,q),!1,null,y.H)),$async$a0c)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0c,w)},
a1i(d){return this.cp0(d)},
cp_(){return this.a1i(1)},
cp0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaW_()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apM(u.a.c),$async$a1i)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1i,w)},
acm(d,e,f){return this.c_O(d,e,f)},
c_O(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8(e)
x=1
break}x=3
return A.b(u.tZ(new B.dUX(u,d,null,e,f),"Uploading\u2026"),$async$acm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acm,w)},
bDP(){B.hwa(!1,new B.dUG(this))
return},
cu3(){this.m(new B.dV7(this))},
az4(){var x=0,w=A.j(y.H),v=this
var $async$az4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bDP()
return A.h(null,w)}})
return A.i($async$az4,w)},
aci(){var x=0,w=A.j(y.H),v=this
var $async$aci=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tZ(new B.dUM(v),"Importing\u2026"),$async$aci)
case 2:return A.h(null,w)}})
return A.i($async$aci,w)},
SB(d){return this.cFt(d)},
cFt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mP)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cd(A.dX(new B.dVq(u,d),!1,null,y.H)),$async$SB)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Ra)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cd(A.dX(new B.dVr(u,d),!1,null,y.H)),$async$SB)
case 8:x=1
break
case 7:x=u.c0v(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cd(A.dX(new B.dVs(u,d),!1,null,y.H)),$async$SB)
case 11:x=1
break
case 10:u.i8("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SB,w)},
c0v(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oN(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cNR,C.a.b7(x,w+1).toLowerCase())},
afX(d){return this.cfT(d)},
cfT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mP)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cd(A.dX(new B.dUY(u,d),!1,null,y.H)),$async$afX)
case 5:x=1
break
case 4:u.m(new B.dUZ(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afX,w)},
RX(d){return this.cwY(d)},
cwY(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pj(t,s.c,s.f),$async$RX)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tZ(new B.dVj(u,d),"Preparing QR\u2026"),$async$RX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RX,w)},
aiB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aiB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dVk(),A.T(t).k("N<1,n>")).fH(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dVl(q),s),s.k("L.E"))
if(r.length===0){u.i8("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RX(r),$async$aiB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiB,w)},
aiu(d){return this.cwv(d)},
cwv(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1D(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dVd(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aiu)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SB(d)
break
case"qr":u.RX(A.a([d],y.r))
break
case"send_my_code":u.cgv(A.a([d],y.r))
break
case"save":u.ahQ(d)
break
case"delete":u.J9(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aiu,w)},
XW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dUJ(),A.T(t).k("N<1,n>")).fH(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dUK(q),s),s.k("L.E"))
if(r.length===0){u.i8("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pj(t,s.c,s.f),$async$XW)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tZ(new B.dUL(u,r),"Preparing file\u2026"),$async$XW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XW,w)},
ah1(d){return this.cnm(d)},
cnm(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ah1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hx0(d,!1),$async$ah1)
case 3:s=f
r=s==null
q=B.a7n(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i8("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ah1,w)},
ag2(){var x=0,w=A.j(y.H),v=this,u
var $async$ag2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fOz(u,v.a.c),$async$ag2)
case 2:return A.h(null,w)}})
return A.i($async$ag2,w)},
bDO(){B.hwa(!1,new B.dUF(this,null))
return},
Jo(d,e){return this.cgw(d,e)},
b1d(d){return this.Jo(null,d)},
cgv(d){return this.Jo(d,null)},
cgw(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jo=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dV0(s),o),o.k("L.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xu.ca().ao0(!0,C.a0z,!1),$async$Jo)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.tZ(new B.dV1(l,s,r),"Preparing\u2026"),$async$Jo)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.i8("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i8("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bEA(p,l,e,s.a.c),$async$Jo)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jo,w)},
IA(d){return this.c_B(d)},
c_B(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hLw(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b1d(t),$async$IA)
case 8:x=6
break
case 7:u.i8("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i8("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tZ(new B.dUV(u,d),"Receiving video\u2026"),$async$IA)
case 11:x=1
break
case 10:x=12
return A.b(u.tZ(new B.dUW(u,d),"Receiving\u2026"),$async$IA)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IA,w)},
Ep(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ep=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Df()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ah1(t),$async$Ep)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IA(s),$async$Ep)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cd(A.dX(new B.dV5(u),!1,null,y.N)),$async$Ep)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tY(),$async$Ep)
case 10:x=1
break
case 9:x=11
return A.b(u.IA(C.a.i(r)),$async$Ep)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ep,w)},
ahQ(d){return this.csB(d)},
csB(d){var x=0,w=A.j(y.H),v=this
var $async$ahQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tZ(new B.dV4(v,d),"Saving\u2026"),$async$ahQ)
case 2:return A.h(null,w)}})
return A.i($async$ahQ,w)},
J9(d){return this.bMh(d)},
bMh(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$J9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ld(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$J9)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ccf(t),$async$J9)
case 6:case 5:s=d.a
x=7
return A.b(B.EU(u.a.c,s),$async$J9)
case 7:u.r.W(0,s)
x=8
return A.b(u.tY(),$async$J9)
case 8:case 1:return A.h(v,w)}})
return A.i($async$J9,w)},
aiH(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1D(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dVp(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aiH)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ag2()
break
case"import":u.aci()
break}case 1:return A.h(v,w)}})
return A.i($async$aiH,w)},
c8M(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mP))return C.qs
if(C.a.a0(x,"image/")||d.my(D.Ra))return C.un
if(C.a.t(x,"pdf"))return E.OJ
return C.a1M},
B(d){var x,w,v=this,u=null,t=B.a1D(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.Hm,u,u,u,new B.dVA(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bTM,u,u,u,v.e?u:v.gcgc(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcu2()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bNX:E.aom,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a2r,u,u,u,v.e?u:v.gc8N(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.op,u,u,u,v.e?u:v.gb2j(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bVz,u,u,u,v.e?u:new B.dVB(v),u,u,u,u,"More options",u))
q=A.eI(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lO(new B.dVC(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.J?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kO(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aA5(C.jD,s,!0,t,w?u:v.gcwZ(),u),1)
x.push(new A.D(D.bzw,A.ls(new B.dVD(),A.B(A.a([s,C.at,A.E(new B.aA5(C.uo,"Export",!1,t,w?u:v.gbQ2(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cv,C.iT,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.beE(t,v.e?u:v.gb2j(),u)
else s=A.k4(!0,u,u,new B.dVE(v,t),s,u,D.bzo,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.a_,u,C.ab,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aA5.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.vU,t,new A.b7(s,C.a0),t,t,t)
return A.dl(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vU,t,new A.b7(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.et(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eF,t,t,t),u.r,v)}}
B.beE.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.J(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.ls(new B.d8K(),new A.D(E.a_E,A.x(A.a([A.ls(new B.d8L(),A.p(x,A.X(C.yK,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ay,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eu,C.hs,x,x,new A.bp(0.86,1,w),s),C.dS,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dS,A.dl(C.op,D.fPn,this.d,A.bo(C.aD,x,x,x,C.c,x,C.Nx,x,new A.b7(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.cv,C.BF,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.acA.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dF(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.my(D.mP))p=D.dmO
else{p=C.a.a0(p,"image/")||i.my(D.Ra)
n=y.O
p=p?A.a([C.cO,C.aD],n):A.a([C.aK.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ay,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaqc()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mP))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fQ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cb))
if(!(!o||i.my(D.mP)))l.push(A.fZE(C.aD,!1,j,j,j,!1,j,j,new B.d96(k),j,j,new A.b7(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.ok,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cb))
return A.ls(new B.d97(),new A.D(C.ee,A.aH(!1,C.a2,!0,j,A.aO(!1,r,!0,new A.D(C.a_7,A.B(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cv,h,new A.bN("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.Zz.prototype={
R(){return new B.aAa()},
gcZ(){return this.c}}
B.aAa.prototype={
Z(){this.a2()
this.xZ()},
q(){B.hLL(this.e)
this.a1()},
xZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rB(o.c,o.d),$async$xZ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hLO(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hLN(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d93(s))
x=1
break}s.m(new B.d94(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d95(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xZ,w)},
a2g(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rB(t.c,t.d),$async$a2g)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f8Q)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ai4(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2g)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2g,w)},
c_u(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kw(u,C.A,v,new B.d91(w,t),C.h7,C.dw,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fF(t,C.A,v,new B.d92(w),C.h7,C.dw,!0,v,!1,v,v)
else return C.bJ
return A.tu(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1D(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.CD,u,u,u,v.gb64(),u,u,u,u,"Share / save",u))
r=A.eI(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.ES
else{q=v.r
if(q!=null)t=new A.D(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.em,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.dl(C.CD,D.fxC,v.gb64(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c_u()}return A.c7(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.Zw.prototype={
R(){return new B.aA7(A.aiT(),C.bF,C.bF)},
gcZ(){return this.c}}
B.aA7.prototype={
Z(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fx(w,A.a7(w).k("fx<1>")).ir(new B.d8H(v))
x.gcTP().ir(new B.d8I(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a7(x).k("fx<1>"))}if(x==null)x=C.b8a
x.ir(new B.d8J(v))
v.xZ()},
xZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rB(p.c,p.d),$async$xZ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d8A(s))
x=1
break}x=8
return A.b(s.d.x4(0,new A.a3G(r,s.a.d.c)),$async$xZ)
case 8:if(s.c==null){x=1
break}s.m(new B.d8B(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d8C(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xZ,w)},
a_5(){var x=0,w=A.j(y.H),v=this,u
var $async$a_5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h8(0),$async$a_5)
case 5:x=3
break
case 4:x=6
return A.b(u.iu(0),$async$a_5)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_5,w)},
aTP(d){var x=d.a
return C.a.aS(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aS(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1D(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eI(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.ES
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bP_,C.f,o,o,new A.o(o,o,o,A.m(24),o,K.Pe,C.n),o,88,o,o,o,o,o,88)
t=A.kP(C.aD,o,o,m,0,new B.d8D(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aTP(p.w)+" / "+p.aTP(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.f5h,o,o,o,o,o,o)
r=p.f
q=A.X(r?H.yT:C.i2,o,o,o,o,o)
x=A.x(A.a([u,C.kT,t,x,C.d4,A.dl(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc8Q(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c7(v,w,A.at(new A.D(C.qe,x,o),o,o,o),o,!1,!1,o,o)}}
B.Q5.prototype={
R(){return new B.aAd()},
gcZ(){return this.c}}
B.aAd.prototype={
Z(){this.a2()
this.PU()},
PU(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PU=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h0X(o.c,o.d,new B.d9k(s)),$async$PU)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d9l(s))
x=1
break}s.e=r
q=N.i7T(r)
if(q==null){s.m(new B.d9m(s))
x=1
break}s.d=q
q.aT(0,s.gb10())
x=8
return A.b(q.iq(0).d7(0,C.rn),$async$PU)
case 8:if(s.c==null){x=1
break}s.m(new B.d9n(s))
x=9
return A.b(q.q9(0),$async$PU)
case 9:q.tD(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d9o(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PU,w)},
cet(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d9p(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D5(0,x.gb10())
w=x.d
if(w!=null)w.q()
B.ihP(x.e)
x.a1()},
aew(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aew=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_Y(u.c,u.d),$async$aew)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aew,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1D(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eI(A.a([A.aG(t,t,t,t,C.nx,t,t,t,u.gc8K(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.ES
else{q=u.r
if(q!=null)s=new A.D(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ain(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fD(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.Ar(s,t),A.aB(t,A.Dx(A.p(t,A.X(q?H.yT:C.i2,C.c,t,t,t,48),C.f,t,t,new A.o(C.aS,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b6,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d9r(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bJ}}return A.c7(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.ZB.prototype={
R(){return new B.aAb(new A.cB(null,y.A))}}
B.aAb.prototype={
gcFP(){var x,w,v=this.a
if(v.e!==D.Sx)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcFr(){var x,w,v=this.a
if(v.e!==D.zL)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a2()
x=v.gcFP()
if(x!=null){v.QY(x)
v.e=A.df(Q.G1,new B.d9g(v,x))}w=v.gcFr()
if(w!=null){v.QX(w)
v.f=A.df(C.fA,new B.d9h(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a1()},
QX(d){return this.cly(d)},
cly(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apU(d),$async$QX)
case 3:t=f
x=4
return A.b(B.ccy(d),$async$QX)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d98(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QX,w)},
QY(d){return this.clz(d)},
clz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fPc(d),$async$QY)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bCu(t),$async$QY)
case 4:if(u.c==null){x=1
break}u.m(new B.d99(u))
u.c.K(y.q).f.U(D.aRw)
case 1:return A.h(v,w)}})
return A.i($async$QY,w)},
gc4C(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc8L(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a22(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a22=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Df()){t=u.c
if(t!=null)t.K(y.q).f.U(D.fbY)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cd(A.dX(new B.d9a(),!1,null,y.N)),$async$a22)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bCu(s),$async$a22)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aRw)
case 1:return A.h(v,w)}})
return A.i($async$a22,w)},
aad(d){return this.bJY(d)},
bJY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aad=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fB(C.d.aH(t,", "))),$async$aad)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aad,w)},
aeu(d){return this.bJI(d)},
bJI(d){var x=0,w=A.j(y.H),v=this
var $async$aeu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fB(v.a.c)),$async$aeu)
case 2:if(d.e!=null)d.K(y.q).f.U(D.f9j)
return A.h(null,w)}})
return A.i($async$aeu,w)},
a1X(d){return this.csD(d)},
csD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoS(s.d,4),$async$a1X)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t6(r,"ngmy_doc_share_qr.png"),$async$a1X)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1X,w)},
gaXa(){var x,w=this.a
if(w.e!==D.Iy)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b7(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b7(x,13))
return null},
aaa(d){return this.bJR(d)},
bJR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaXa()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaa)
case 3:if(d.e!=null)d.K(y.q).f.U(D.faY)
case 1:return A.h(v,w)}})
return A.i($async$aaa,w)},
aev(){var x=0,w=A.j(y.H),v=this,u
var $async$aev=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vw(),$async$aev)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aev,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1D(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aq(h,0,44)+"\u2026"
i=i.e
i=i!==D.Iy&&i!==D.Sx&&i!==D.zL
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eI(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Iy||t===D.Sx||t===D.zL?l:A.aG(l,l,l,l,C.kK,l,l,l,m.gb_6(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.J(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.q_(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gc4C(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Iy){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mH,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gc8L(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.Q,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hr(D.bZp,D.fHf,new B.d9b(m,d),l)],p))}if(m.a.e===D.Iy&&m.gaXa()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hr(D.bVT,D.fDP,new B.d9c(m,d),l)],p))
if(m.a.e===D.zL){x=(m.w?C.dE:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.EV:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mH,l,l,l)],p))}if(m.a.e===D.Sx){x=(m.r?C.dE:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.EV:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mH,l,l,l),C.ad,A.dl(D.bRt,D.fKm,m.gct0(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ox(i,A.c7(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b8,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ad,A.B(A.a([A.E(A.et(M.CC,C.V9,new B.d9d(m,d),l),1),C.at,A.E(A.dl(C.z6,C.aaa,new B.d9e(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.O,new A.a6(1/0,l,A.bE(C.Am,l,m.gb_6(),A.bo(C.aK,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.d9f(),y.C)}}
B.acy.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cg(A.x(A.a([w,C.aN,A.p(x,A.q_(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bz,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ag)
return A.en(A.a([A.bE(C.x_,x,new B.d8z(d),x)],u),x,x,C.n6,v,x,x,x,x,D.fwz,x)}}
B.Zv.prototype={
R(){return new B.aA6(A.zz(C.y2,C.nS,C.uD))}}
B.aA6.prototype={
q(){this.d.q()
this.a1()},
axI(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a4(x,!1).O(t)
return}}},
B(d){var x=null
return A.c7(A.eI(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fEl,x,x,x,1,x,!0),C.w,A.zy(this.d,C.bU,this.gaxH()),x,!1,!1,x,x)}}
B.ZC.prototype={
R(){return new B.aAc(A.zz(C.y2,C.nS,C.uD))},
gcZ(){return this.c}}
B.aAc.prototype={
c0x(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agp(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Mf("text/plain"),$async$agp)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.fbS)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agp,w)},
ab_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ab_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hx0(p,!0),$async$ab_)
case 3:t=e
p=t==null
s=B.a7n(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.f8q)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$ab_,w)},
q(){this.d.q()
this.a1()},
axI(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.M)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c0x(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.apf,v,v,v,w.gbPz(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a2y,v,v,v,w.gciW(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eI(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uj:O.Ox,v,v,v,v,v),v,v,v,new B.d9j(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fLf,v,v,v,1,v,!0)
u=A.zy(w.d,C.bU,w.gaxH())
x=A.m(20)
return A.c7(t,C.w,new A.an(C.a_,v,C.ab,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.J(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.erZ],s),v),v,!1,!1,v,v)}}
B.beF.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.p0
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.p0:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a2,!0,r,A.aO(!1,w,!0,new A.D(C.a_K,A.B(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.a9N.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.OS.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.XA.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.OR.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.Fo.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.coN.prototype={}
B.Fn.prototype={}
B.a9M.prototype={}
B.aup.prototype={}
B.XB.prototype={}
var z=a.updateTypes(["aA<~>()","R(jq)","n(jq)","Vn(Z)","~()","Zy(Z)","H(H,jq)","Q5(Z)","~(m9)","cu(Fn)","aA<jq?>(@)","Vl(Z)","Vp(Z)","D(jq)","jq(@)","a8<n,@>(jq)","Zx(Z)","Vm(Z)","Zz(Z)","Zw(Z)","ZB(Z)","acy(Z)","ai<jq>()","ZC(Z)","acA(Z,H)","Zv(Z)","a8<n,aD>(jq)","cu(XA)","cu(a9M)","aA<cu>(Fn)"])
B.coJ.prototype={
$1(d){var x=this.a
x.x=D.aOB
x.y.M(0,D.aOB)},
$S:72}
B.coK.prototype={
$1(d){var x=this.a
x.x=D.aOA
x.y.M(0,D.aOA)},
$S:72}
B.coL.prototype={
$1(d){var x=this.a
x.ahJ(A.aPQ(d.data)).bN(new B.coI(x),y.b)},
$S:72}
B.coI.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.coM.prototype={
$1(d){},
$S:72}
B.coP.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hQv(d.channel))},
$S:15}
B.coQ.prototype={
$1(d){},
$S:15}
B.coR.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i8V(w.iceConnectionState)
x.cx=w
if($.ha_())switch(w.a){case 0:x.cy=D.aOG
break
case 1:x.cy=D.aOH
break
case 3:x.cy=D.aOI
break
case 5:x.cy=D.aOE
break
case 6:x.cy=D.aOF
break
case 7:x.cy=D.a7Y
break
default:break}},
$S:148}
B.coS.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i8W(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:148}
B.coT.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ijj(w.signalingState)},
$S:148}
B.coU.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ihw(w.connectionState)},
$S:148}
B.coV.prototype={
$1(d){},
$S:148}
B.coW.prototype={
$1(d){},
$S:15}
B.fq7.prototype={
$1(d){var x=y.F.a(new A.rX([],[]).pO(d.target.result,!1)),w=C.y3.t(x.objectStoreNames,"blobs")
if(!w)C.y_.L0(x,"blobs")},
$S:188}
B.fOn.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wt.fl(this.b)
$.eW.mt()
this.c.$1(d)},
$S:415}
B.fOp.prototype={
$1(d){return this.a.$1(B.hZt(this.b,this.c))},
$S:34}
B.fOo.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fOm.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fOC.prototype={
$1(d){var x=this
return B.hmg(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fOD.prototype={
$1(d){var x=this
return B.hmg(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fsC.prototype={
$1(d){var x=this
return B.cc9(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d8S.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d8P.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cc9(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d8R.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cc9(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d8Q.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cc9(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d8U.prototype={
$4(d,e,f,g){var x=null
return A.jP(A.B(A.a([A.aG(x,x,x,x,D.bQ5,x,x,x,new B.d8T(d),x,x,x,x,x,x),A.E(A.F9(D.QU,!0,x,C.a1y,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.QU,x,g,C.alb,0,e,f)},
$C:"$4",
$R:4,
$S:353}
B.d8T.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fuB.prototype={
$1(d){var x,w,v=null,u=A.aJ(d,C.eN,y.o).w,t=this.a,s=t?C.it:C.c,r=A.m(28),q=A.p(v,D.btk,C.f,v,v,D.b3C,v,v,v,v,D.al1,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.Y,!1,v,!0,C.t,v,A.aM(),p,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bUn,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Gf,A.x(A.a([o,C.ad,A.aL(v,C.Y,!1,v,!0,C.t,v,A.aM(),x,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.apv,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.an,v,v,v,v),C.bu,A.B(A.a([A.E(A.dI(C.di,new B.fuz(d),v),1),C.at,A.E(A.bE(D.fCQ,v,new B.fuA(p,x,d),A.bo(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.G3,v,v,v,v),v)},
$S:62}
B.fuz.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fuA.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.f9A)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aCM(v,x))},
$S:0}
B.fv4.prototype={
$1(d){var x=this,w=null,v=A.aJ(d,C.eN,y.o).w,u=x.a,t=u?C.it:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bt9,C.f,w,w,D.b55,w,w,w,w,D.al1,w,w,1/0),new A.D(C.Gf,A.x(A.a([A.aL(w,C.Y,!1,w,!0,C.t,w,A.aM(),r,w,w,w,w,w,2,B.h61(u,"Organization name",C.GG,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.an,w,w,w,w),C.W,A.aL(w,C.Y,!1,w,!0,C.t,w,A.aM(),q,w,w,w,w,w,2,B.h61(u,"Access code",C.nt,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.an,w,w,w,w),C.W,A.aL(w,C.Y,!1,w,!0,C.t,w,A.aM(),p,w,w,w,w,w,2,B.h61(u,"Member password",G.Hh,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.an,w,w,w,w),C.bu,A.bE(D.fLm,w,new B.fv3(r,q,p,d),A.bo(C.aD,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.G3,w,w,w,w),w)},
$S:62}
B.fv3.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.f9F)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aFU(u,x,w))},
$S:0}
B.cc0.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a5(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cD(j,0,null):s.b.aU(j)
u=4
x=7
return A.b(A.uh(p,null).d7(0,C.ZL),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BZ(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cc6.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cc7.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cc8.prototype={
$1(d){return d.b},
$S:z+2}
B.cc2.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cc3.prototype={
$1(d){return d.b},
$S:z+2}
B.cc1.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cc4.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.cc5.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fOA.prototype={
$1(d){return new B.Vl(this.a,null)},
$S:z+11}
B.fOB.prototype={
$1(d){return new B.Vp(this.a,this.b,this.c,null)},
$S:z+12}
B.dUy.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dVH.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dVI.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dVJ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dVG(x,d))},
$S:2}
B.dVG.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dVK.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dVL.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dVM.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dVN.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dVO.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dVP.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dVS.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.dVQ.prototype={
$1(d){var x=this.a
return x.f?null:x.a_4()},
$S:2}
B.dVR.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Ra))s=C.un
else s=C.a.a0(s,"video/")||d.my(D.mP)?C.qs:C.a1M
x=this.b.a
w=y.p
return new A.D(C.kF,A.B(A.a([A.p(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaqc(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dUz.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dUA.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cca.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:94}
B.ccb.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:94}
B.fPu.prototype={
$2(d,e){return e===this.a},
$S:290}
B.fnh.prototype={
$1(d){return J.k(d)},
$S:17}
B.fsO.prototype={
$1(d){var x=this.b
B.hXu(C.Gt.ga6J(this.a)).bN(x.gaEb(x),y.H)},
$S:124}
B.fsP.prototype={
$1(d){return this.a.d9(0,null)},
$S:124}
B.fsQ.prototype={
$0(){return null},
$S:12}
B.ccp.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fsR.prototype={
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
u=J.k(u==null?new A.V(Date.now(),0,!1).a8().ae():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jq(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fwX.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fr0.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fr1.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ccu.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mP)},
$S:z+1}
B.fTB.prototype={
$1(d){return new B.Zx(this.a,null)},
$S:z+16}
B.d8O.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fQ()},
$S:9}
B.d8M.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d8N.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dVF.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a18()},
$S:11}
B.dV2.prototype={
$0(){var x=J.bFF(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dV3.prototype={
$0(){var x=J.bFF(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dUC.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dUB(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEA(this.c)}},
$S:0}
B.dUB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dUD.prototype={
$0(){var x=J.bFF(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dUI.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dUH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEA(this.c)}},
$S:0}
B.dUH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVt.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dVu.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dV_.prototype={
$1(d){return new B.Vm(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dUX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ik(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vq(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tY(),$async$$0)
case 5:s=J.a5(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1i(s.gL(t)),$async$$0)
case 8:case 7:r.i8(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUG.prototype={
$1(d){this.a.acm(d,"No files selected.","Added")},
$S:415}
B.dV7.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.N(x,new B.dV6(),A.T(x).k("N<1,n>")))},
$S:0}
B.dV6.prototype={
$1(d){return d.a},
$S:z+2}
B.dUM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xu.ca().cVN(C.a0z,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jw(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i8("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i8("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apT(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.i8("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tY(),$async$$0)
case 9:o.i8("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dVq.prototype={
$1(d){return new B.Q5(this.a.a.c,this.b,null)},
$S:z+7}
B.dVr.prototype={
$1(d){return new B.Zz(this.a.a.c,this.b,null)},
$S:z+18}
B.dVs.prototype={
$1(d){return new B.Zw(this.a.a.c,this.b,null)},
$S:z+19}
B.dUY.prototype={
$1(d){return new B.Q5(this.a.a.c,this.b,null)},
$S:z+7}
B.dUZ.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dVj.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ik(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7p(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i8("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cp_(),$async$$0)
case 5:x=6
return A.b(p.tY(),$async$$0)
case 6:r=A.T(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dVf(p),r),new B.dVg(),r.k("N<ak.E,n>")).c0(0,new B.dVh())
q=A.C(r,r.$ti.k("L.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cd(A.dX(new B.dVi(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pi(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vw(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVf.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dVe(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dVe.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVg.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dVh.prototype={
$1(d){return d.length!==0},
$S:3}
B.dVi.prototype={
$1(d){var x=this.a
return new B.ZB(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dVk.prototype={
$1(d){return d.a},
$S:z+2}
B.dVl.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dVd.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kE,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaqc(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mP)?C.qo:C.pd
p=!x||p.my(D.mP)?"Play video":"View"
return A.c4(A.bl(!0,new A.D(C.BQ,A.x(A.a([q,o,t,C.aA,B.ZA(!1,u,!1,w,p,new B.dV8(d),v),B.ZA(!1,u,!1,C.jD,"Share via QR",new B.dV9(d),"Letters/numbers QR code"),B.ZA(!1,u,!1,D.a1E,"Send to their Code",new B.dVa(d),"Enter someone else's personal code"),B.ZA(!1,u,!1,C.hN,"Download / save",new B.dVb(d),v),C.am,B.ZA(!1,u,!0,C.ea,"Delete",new B.dVc(d),v)],y.p),C.ak,v,C.e,C.P,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bK(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kX,v,v,C.n),C.bg)},
$S:490}
B.dV8.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dV9.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dVa.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dVb.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dVc.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dUJ.prototype={
$1(d){return d.a},
$S:z+2}
B.dUK.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dUL.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7r(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GS(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pi(s.c,s.f),$async$$0)
case 4:u.i8(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUF.prototype={
$1(d){var x=this.a
x.tZ(new B.dUE(x,d,this.b),"Preparing\u2026")},
$S:415}
B.dUE.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i8("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vq(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.i8("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bEA(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dV0.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dV1.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.h1_(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GQ(new B.dUR(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i8("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cj(null,null,!1,null,new B.dUS(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dUT(s))
case 5:x=8
return A.b(r.b.iv(0,C.FZ,new B.dUU()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gan(t)){s.i8("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tY(),$async$$0)
case 9:s.i8("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUR.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dUO(x,d,e))},
$S:223}
B.dUO.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dUS.prototype={
$1(d){return new B.acy(this.a.a,null)},
$S:z+21}
B.dUT.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dUU.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dUW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IQ(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7f(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b1d(B.IQ(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apT(new B.dUP(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h0Z(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i8(q)
x=1
break}x=10
return A.b(s.tY(),$async$$0)
case 10:o=J.cE(r)
p=o.eG(r,new B.dUQ()).gL(0)
s.i8(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dUN(x,d,e))},
$S:223}
B.dUN.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dUQ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mP)},
$S:z+1}
B.dV5.prototype={
$1(d){return new B.ZC(this.a.a.c,null)},
$S:z+23}
B.dV4.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b_Y(u.a.c,v.b),$async$$0)
case 2:t.i8(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVp.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.c4(A.bl(!0,new A.D(C.BQ,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kE,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.ZA(!0,w,!1,C.nt,"My Code",new B.dVm(d),"Your personal code & QR \u2014 others send docs to you"),B.ZA(!1,w,!1,D.a1E,"Send to their Code",new B.dVn(this.a,d),"Enter someone else's 5-digit code + letter"),B.ZA(!1,w,!1,R.z_,"Import backup",new B.dVo(d),".ngmydoc file from another device")],y.p),C.ak,x,C.e,C.P,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bK(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kX,x,x,C.n),C.bg)},
$S:490}
B.dVm.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dVn.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bDO()},
$S:0}
B.dVo.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dVC.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.J_(D.QU,x,C.a1y,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gI(D.QU).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:604}
B.dVA.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dVB.prototype={
$0(){this.a.aiH()
return null},
$S:0}
B.dVD.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*10)),e)},
$S:100}
B.dVE.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acA(e,w,v,this.b,x.e,x.c8M(w),new B.dVw(x,w),new B.dVx(x,v,w),new B.dVy(x,w),new B.dVz(x,w),null)},
$S:z+24}
B.dVw.prototype={
$0(){this.a.afX(this.b)
return null},
$S:0}
B.dVx.prototype={
$0(){var x=this.a
return x.m(new B.dVv(x,this.b,this.c))},
$S:0}
B.dVv.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dVy.prototype={
$0(){this.a.Of(this.b)
return null},
$S:0}
B.dVz.prototype={
$0(){this.a.aiu(this.b)
return null},
$S:0}
B.d8K.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*18)),e)},
$S:100}
B.d8L.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:109}
B.d97.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.d96.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.d93.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d94.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d95.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d91.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fF(w,C.A,x,new B.d9_(this.a),C.h7,C.dw,!0,x,!1,x,x)
$.aV.x1$.push(new B.d90(this.a))
return C.bJ},
$S:142}
B.d9_.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d8Y(this.a))
return C.bJ},
$S:199}
B.d8Y.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8V(x))},
$S:9}
B.d8V.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d90.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8X(x))},
$S:9}
B.d8X.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d92.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d8Z(this.a))
return C.bJ},
$S:199}
B.d8Z.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8W(x))},
$S:9}
B.d8W.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d8H.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8G(x,d))},
$S:1760}
B.d8G.prototype={
$0(){return this.a.f=this.b===C.v0},
$S:0}
B.d8I.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8F(x,d))},
$S:9}
B.d8F.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d8J.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8E(x,d))},
$S:9}
B.d8E.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d8A.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d8B.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d8C.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d8D.prototype={
$1(d){return this.a.d.Ne(0,A.dF(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d9k.prototype={
$0(){var x=this.a.a
return B.rB(x.c,x.d)},
$S:1761}
B.d9l.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d9m.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d9n.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d9o.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d9p.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d9r.prototype={
$0(){var x=this.a
x.m(new B.d9q(x))},
$S:0}
B.d9q.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h8(0)
else x.q9(0)},
$S:0}
B.d9g.prototype={
$1(d){return this.a.QY(this.b)},
$S:11}
B.d9h.prototype={
$1(d){return this.a.QX(this.b)},
$S:11}
B.d98.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d99.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d9a.prototype={
$1(d){return D.hiu},
$S:z+25}
B.d9f.prototype={
$2(d,e){if(d)B.Vw()},
$S:123}
B.d9b.prototype={
$0(){return this.a.aad(this.b)},
$S:0}
B.d9c.prototype={
$0(){return this.a.aaa(this.b)},
$S:0}
B.d9d.prototype={
$0(){return this.a.aeu(this.b)},
$S:0}
B.d9e.prototype={
$0(){return this.a.a1X(this.b)},
$S:0}
B.d8z.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d9j.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qc(),$async$$0)
case 2:u.m(new B.d9i(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d9i.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ccw.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mP)},
$S:z+1}
B.ccx.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aN(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ccv.prototype={
$2(d,e){return this.bkN(d,e)},
bkN(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vx(u.c,A.G(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1762}
B.fwz.prototype={
$1(d){if(d===D.a7X&&(this.a.a.a&30)===0)this.a.fW(0)},
$S:z+27}
B.fwA.prototype={
$0(){},
$S:12}
B.fx6.prototype={
bmm(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fkz(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hhp(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bmm(d,e)},
$S:728}
B.fx5.prototype={
$1(d){var x=this
d.b=new B.fx4(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fx4.prototype={
$1(d){return this.bml(d)},
bml(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b_Z(n,m),$async$$1)
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
return A.b(B.fkz(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
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
return A.b(B.a7o(m),$async$$1)
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
x(v=B.aA9.prototype,"gcfP","Qy",0)
x(v,"gcgG","Jp",0)
x(v,"gcgb","ya",0)
x(v=B.aE7.prototype,"gc8G","aes",0)
x(v,"gc8H","a_3",0)
x(v,"gcvt","aia",0)
x(v=B.aEa.prototype,"gc8I","a_4",0)
x(v,"gcvu","a2h",0)
x(B.aE8.prototype,"gc8J","aet",0)
x(B.aA8.prototype,"gc8O","c8P",4)
x(v=B.aE9.prototype,"gcgc","a0c",0)
x(v,"gcu2","cu3",4)
x(v,"gb2j","az4",0)
x(v,"gcwZ","aiB",0)
x(v,"gbQ2","XW",0)
x(v,"gc8N","Ep",0)
x(B.aAa.prototype,"gb64","a2g",0)
x(B.aA7.prototype,"gc8Q","a_5",0)
x(v=B.aAd.prototype,"gb10","cet",4)
x(v,"gc8K","aew",0)
x(v=B.aAb.prototype,"gct0","a22",0)
x(v,"gb_6","aev",0)
w(B.aA6.prototype,"gaxH","axI",8)
x(v=B.aAc.prototype,"gciW","agp",0)
x(v,"gbPz","ab_",0)
w(v,"gaxH","axI",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.coN,B.a9M,B.aup,B.aCM,B.aFU,B.jq,B.acg,B.bwG,B.Fn,B.XB])
w(B.coO,B.coN)
w(B.b57,B.a9M)
x(A.hM,[B.coJ,B.coK,B.coL,B.coI,B.coM,B.coP,B.coQ,B.coR,B.coS,B.coT,B.coU,B.coV,B.coW,B.fq7,B.fOn,B.fOp,B.fOo,B.fOC,B.fOD,B.fsC,B.d8P,B.d8R,B.d8Q,B.d8U,B.fuB,B.fv4,B.cc0,B.cc7,B.cc8,B.cc3,B.cc1,B.cc4,B.cc5,B.fOA,B.fOB,B.dVJ,B.dVS,B.dVQ,B.dVR,B.fnh,B.fsO,B.fsP,B.ccp,B.fsR,B.fwX,B.fr0,B.fr1,B.ccu,B.fTB,B.d8O,B.d8M,B.dVF,B.dUB,B.dUH,B.dV_,B.dUG,B.dV6,B.dVq,B.dVr,B.dVs,B.dUY,B.dVf,B.dVe,B.dVg,B.dVh,B.dVi,B.dVk,B.dVl,B.dVd,B.dUJ,B.dUK,B.dUF,B.dV0,B.dUS,B.dUQ,B.dV5,B.dVp,B.dVC,B.dVD,B.d8K,B.d8L,B.d97,B.d96,B.d91,B.d9_,B.d8Y,B.d90,B.d92,B.d8Z,B.d8H,B.d8I,B.d8J,B.d8D,B.d9g,B.d9h,B.d9a,B.ccw,B.ccx,B.fwz,B.fx5,B.fx4])
w(B.b58,B.aup)
x(A.jc,[B.fOm,B.d8S,B.d8T,B.fuz,B.fuA,B.fv3,B.dUy,B.dVH,B.dVI,B.dVG,B.dVK,B.dVL,B.dVM,B.dVN,B.dVO,B.dVP,B.dUz,B.dUA,B.fsQ,B.d8N,B.dV2,B.dV3,B.dUC,B.dUD,B.dUI,B.dVt,B.dVu,B.dUX,B.dV7,B.dUM,B.dUZ,B.dVj,B.dV8,B.dV9,B.dVa,B.dVb,B.dVc,B.dUL,B.dUE,B.dV1,B.dUV,B.dUO,B.dUT,B.dUU,B.dUW,B.dUN,B.dV4,B.dVm,B.dVn,B.dVo,B.dVA,B.dVB,B.dVw,B.dVx,B.dVv,B.dVy,B.dVz,B.d93,B.d94,B.d95,B.d8V,B.d8X,B.d8W,B.d8G,B.d8F,B.d8E,B.d8A,B.d8B,B.d8C,B.d9k,B.d9l,B.d9m,B.d9n,B.d9o,B.d9p,B.d9r,B.d9q,B.d98,B.d99,B.d9b,B.d9c,B.d9d,B.d9e,B.d8z,B.d9j,B.d9i,B.fwA])
x(A.lZ,[B.acz,B.NN,B.a9N,B.OS,B.XA,B.OR,B.Fo])
x(A.ag,[B.Zy,B.Vl,B.Vp,B.Vm,B.Zx,B.Vn,B.Zz,B.Zw,B.Q5,B.ZB,B.Zv,B.ZC])
x(A.ah,[B.aA9,B.aE7,B.aEa,B.aE8,B.aA8,B.aE9,B.aAa,B.aA7,B.aAd,B.aAb,B.aA6,B.aAc])
x(A.ax,[B.ad0,B.aA5,B.beE,B.acA,B.acy,B.beF])
x(A.ke,[B.cc6,B.cc2,B.cca,B.ccb,B.fPu,B.dUR,B.dUP,B.dVE,B.d9f,B.ccv,B.fx6])
x(A.iV,[B.bk1,B.bwi])})()
A.jk(b.typeUniverse,JSON.parse('{"b57":{"a9M":[]},"b58":{"aup":[]},"Zy":{"ag":[],"v":[]},"aA9":{"ah":["Zy"]},"ad0":{"ax":[],"v":[]},"Vl":{"ag":[],"v":[]},"Vp":{"ag":[],"v":[]},"aE7":{"ah":["Vl"]},"aEa":{"ah":["Vp"]},"bk1":{"iV":[]},"Vm":{"ag":[],"v":[]},"aE8":{"ah":["Vm"]},"Zx":{"ag":[],"v":[]},"Vn":{"ag":[],"v":[]},"acA":{"ax":[],"v":[]},"Zz":{"ag":[],"v":[]},"Zw":{"ag":[],"v":[]},"Q5":{"ag":[],"v":[]},"ZB":{"ag":[],"v":[]},"acy":{"ax":[],"v":[]},"Zv":{"ag":[],"v":[]},"ZC":{"ag":[],"v":[]},"aA8":{"ah":["Zx"]},"bwi":{"iV":[]},"aE9":{"ah":["Vn"]},"aA5":{"ax":[],"v":[]},"beE":{"ax":[],"v":[]},"aAa":{"ah":["Zz"]},"aA7":{"ah":["Zw"]},"aAd":{"ah":["Q5"]},"aAb":{"ah":["ZB"]},"aA6":{"ah":["Zv"]},"aAc":{"ah":["ZC"]},"beF":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.aw
return{J:x("us"),k:x("Md()"),m:x("bw<n,n>"),F:x("rd"),g:x("aA<jq?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bg>"),Y:x("O<a8<n,R>>"),t:x("O<a8<n,@>>"),r:x("O<jq>"),w:x("O<+file,name(lJ,n)>"),u:x("O<cX>"),s:x("O<n>"),E:x("O<iV>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<H>"),G:x("bg"),A:x("cB<ah<ag>>"),n:x("ai<jq>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bA<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iF"),e:x("inf"),af:x("EA"),U:x("jq"),b:x("cu"),C:x("aD"),aK:x("wk"),ab:x("Fn"),br:x("aup"),v:x("XB"),N:x("n"),X:x("bp<K>"),Q:x("lV"),D:x("dK"),aw:x("bN<n>"),cd:x("Y<a8<n,@>>"),c7:x("v"),ch:x("bZ<ai<jq>>"),aW:x("bZ<dK?>"),aY:x("bZ<~>"),cx:x("acz"),b1:x("bh<ai<jq>>"),cf:x("bh<dK?>"),d4:x("bh<~>"),c4:x("aCM"),bG:x("aFU"),q:x("n8"),B:x("pA<Fn>"),c6:x("pA<a9N>"),y:x("R"),i:x("K"),z:x("@"),S:x("H"),aQ:x("bg?"),_:x("ai<jq>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jq?"),R:x("aD?"),c:x("XB?"),d:x("+answerQr,transfer(n,aA<ai<jq>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,NN,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acg?"),bk:x("aCM?"),ag:x("aFU?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b1Y=new A.ay(C.aD,2,C.r,-1)
D.c2Z=new A.a9(C.a5,C.a8,C.x,C.a3K,null,null)
D.b3C=new A.o(null,null,null,C.mq,null,D.c2Z,C.n)
D.b55=new A.o(null,null,null,C.mq,null,E.Hu,C.n)
D.aei=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.afA=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.agA=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.aic=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fxv=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fMi=new A.y("Share the access code and member password with your team. They only sign in once.",null,C.Aj,null,null,null,null,null,null,null,null,null)
D.de6=x([D.fxv,C.am,D.fMi],y.p)
D.bt_=new A.fi(C.ag,C.e,C.i,C.E,null,C.p,null,0,D.de6,null)
D.fQM=new A.y("Create your organization",null,C.fw,null,null,null,null,null,null,null,null,null)
D.fC0=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Aj,null,null,null,null,null,null,null,null,null)
D.duC=x([D.fQM,C.am,D.fC0],y.p)
D.bt9=new A.fi(C.ag,C.e,C.i,C.E,null,C.p,null,0,D.duC,null)
D.fMV=new A.y("Team Member sign-in",null,C.fw,null,null,null,null,null,null,null,null,null)
D.fFX=new A.y("Enter the access code and password from your organization.",null,C.Aj,null,null,null,null,null,null,null,null,null)
D.dsm=x([D.fMV,C.am,D.fFX],y.p)
D.btk=new A.fi(C.ag,C.e,C.i,C.E,null,C.p,null,0,D.dsm,null)
D.bzo=new A.Q(16,10,16,28)
D.bzw=new A.Q(16,14,16,4)
D.bAM=new A.Q(20,0,20,16)
D.bBh=new A.Q(20,8,20,16)
D.al1=new A.Q(24,22,24,20)
D.a1E=new A.a0(63394,"MaterialIcons",!1)
D.bNX=new A.a0(983813,"MaterialIcons",!1)
D.bP_=new A.ae(C.ank,44,C.c,null,null,null)
D.bQ5=new A.ae(C.l8,null,C.ae,null,null,null)
D.bRt=new A.ae(C.jj,18,null,null,null,null)
D.bTd=new A.ae(D.a1E,26,C.c,null,null,null)
D.bTM=new A.ae(C.Cq,null,null,null,null,null)
D.bUn=new A.ae(C.Cz,null,null,null,null,null)
D.bVz=new A.ae(V.a1S,null,null,null,null,null)
D.bVT=new A.ae(C.hi,16,null,null,null,null)
D.bZp=new A.ae(C.rz,16,null,null,null,null)
D.bPg=new A.ae(C.nt,null,null,null,null,null)
D.c_h=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bUV=new A.ae(C.GG,null,null,null,null,null)
D.c_m=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bUV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPD=new A.ae(G.Hh,null,null,null,null,null)
D.c_x=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cOo=x([C.fg,C.b_,C.aD],y.O)
D.c4R=new A.a9(C.ay,C.aE,C.x,D.cOo,null,null)
D.cNR=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.QU=x([C.fg,C.aD],y.O)
D.Ra=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mP=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dmO=x([C.nb,C.aD],y.O)
D.eef={iceServers:0}
D.aJ8={urls:0}
D.dyi=new A.bw(D.aJ8,["stun:stun.l.google.com:19302"],y.m)
D.dyh=new A.bw(D.aJ8,["stun:stun1.l.google.com:19302"],y.m)
D.d3R=x([D.dyi,D.dyh],A.aw("O<a8<n,n>>"))
D.dxB=new A.bw(D.eef,[D.d3R],A.aw("bw<n,@>"))
D.Iy=new B.NN(0,"lanDirect")
D.Sw=new B.NN(1,"cloudStash")
D.dJg=new B.NN(2,"inlineInstant")
D.Sx=new B.NN(3,"webrtcLink")
D.zL=new B.NN(4,"videoCloud")
D.fMh=new A.y("Receive file",null,C.n0,null,null,null,null,null,null,null,null,null)
D.cDI=x([E.apE,C.ac,D.fMh],y.p)
D.f0M=new A.ce(C.aM,C.b8,C.i,C.m,null,C.p,null,0,D.cDI,null)
D.elD=new A.D(C.ck,D.f0M,null)
D.fo2=new A.F(!0,C.c,null,null,null,null,null,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,U.HW,null,null,null)
D.fy3=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fo2,null,C.K,null,null,null,null,null,null,null)
D.ekO=new A.D(C.BV,D.fy3,null)
D.b9w=new A.ca(C.A,null,null,D.ekO,null)
D.erZ=new A.cN(0,null,0,28,null,null,D.b9w,null)
D.esi=new B.a9N(0,"RTCDataChannelConnecting")
D.aOA=new B.a9N(1,"RTCDataChannelOpen")
D.aOB=new B.a9N(3,"RTCDataChannelClosed")
D.esj=new B.Fo(0,"RTCIceConnectionStateNew")
D.esk=new B.Fo(1,"RTCIceConnectionStateChecking")
D.esl=new B.Fo(2,"RTCIceConnectionStateCompleted")
D.esm=new B.Fo(3,"RTCIceConnectionStateConnected")
D.esn=new B.Fo(4,"RTCIceConnectionStateCount")
D.eso=new B.Fo(5,"RTCIceConnectionStateFailed")
D.esp=new B.Fo(6,"RTCIceConnectionStateDisconnected")
D.aOC=new B.Fo(7,"RTCIceConnectionStateClosed")
D.aOD=new B.XA(0,"RTCIceGatheringStateNew")
D.esq=new B.XA(1,"RTCIceGatheringStateGathering")
D.a7X=new B.XA(2,"RTCIceGatheringStateComplete")
D.a7Y=new B.OR(0,"RTCPeerConnectionStateClosed")
D.aOE=new B.OR(1,"RTCPeerConnectionStateFailed")
D.aOF=new B.OR(2,"RTCPeerConnectionStateDisconnected")
D.aOG=new B.OR(3,"RTCPeerConnectionStateNew")
D.aOH=new B.OR(4,"RTCPeerConnectionStateConnecting")
D.aOI=new B.OR(5,"RTCPeerConnectionStateConnected")
D.esr=new B.OS(0,"RTCSignalingStateStable")
D.ess=new B.OS(1,"RTCSignalingStateHaveLocalOffer")
D.est=new B.OS(2,"RTCSignalingStateHaveRemoteOffer")
D.esu=new B.OS(3,"RTCSignalingStateHaveLocalPrAnswer")
D.esv=new B.OS(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aOJ=new B.OS(5,"RTCSignalingStateClosed")
D.f5h=new A.av(160,48)
D.baQ=new A.fj(2,null,null,null,null,C.aD,null,null,null,null)
D.f6P=new A.a6(16,16,D.baQ,null)
D.fBk=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f8g=new A.b2(D.fBk,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fJ_=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f8j=new A.b2(D.fJ_,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRQ=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new A.b2(D.fRQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fAV=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f8Q=new A.b2(D.fAV,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fN6=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aRw=new A.b2(D.fN6,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fOy=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f9j=new A.b2(D.fOy,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTk=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f9A=new A.b2(D.fTk,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRf=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f9F=new A.b2(D.fRf,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fSt=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.far=new A.b2(D.fSt,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fzw=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.faY=new A.b2(D.fzw,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fKR=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fbi=new A.b2(D.fKR,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fDF=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fbO=new A.b2(D.fDF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTq=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fbS=new A.b2(D.fTq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fzM=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fbY=new A.b2(D.fzM,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fyq=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fcc=new A.b2(D.fyq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fv9=new A.y("NGMY DOC SHARE",null,C.aST,null,null,null,null,null,null,null,null,null)
D.fwz=new A.y("Show this to sender",null,C.iK,null,null,null,null,null,null,null,null,null)
D.fxC=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fCr=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fCQ=new A.y("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fDP=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fHf=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fK0=new A.y("Send to their Doc Share",null,C.nJ,null,null,null,null,null,null,null,null,null)
D.fKm=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fKF=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fLf=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fLm=new A.y("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fLK=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eF,null,null,null,null,null,null,null,null,null)
D.fP3=new A.y("Share files & videos\nwith a scan.",null,C.aSW,null,null,null,null,null,null,null,null,null)
D.fPn=new A.y("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hiu=new B.Zv(null)
D.ab8=new B.acz(0,"docShare")
D.ab9=new B.acz(1,"gate")
D.VI=new B.acz(2,"gateNoIndividual")})();(function staticFields(){$.aOA=null
$.fii=function(){var x=y.N
return A.U(x,x)}()
$.GD=A.U(y.N,y.D)
$.agE=A.U(y.N,A.aw("lJ"))
$.Rq=A.U(y.N,y.D)
$.fiR=A.U(y.N,A.aw("acg"))
$.cco=A.U(y.S,A.aw("bwG"))
$.hho=1
$.i4A=null
$.i4z=null
$.hWQ=null
$.h6e=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"inK","hyU",()=>new B.coO())
x($,"ilF","ha_",()=>C.a.t(A.by(A.by(A.by(A.Hd(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["j2Jsa0AgwMgL+x2nScmGLqXN3Os="]=a.current})($__dart_deferred_initializers__);