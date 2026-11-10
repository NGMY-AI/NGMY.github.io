((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cnf:function cnf(){},
hNb(d){var x=null,w=new B.b4w(d,D.eqh,new A.pv(x,x,y.c6),new A.pv(x,x,y.B))
w.bzd(d)
return w},
b4w:function b4w(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cna:function cna(d){this.a=d},
cnb:function cnb(d){this.a=d},
cnc:function cnc(d){this.a=d},
cn9:function cn9(d){this.a=d},
cnd:function cnd(d){this.a=d},
hNc(d,e){var x=y.N
x=new B.b4x(d,e,A.T(x,y.e),A.T(x,y.z))
x.bze(d,e)
return x},
b4x:function b4x(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cng:function cng(d){this.a=d},
cnh:function cnh(d){this.a=d},
cni:function cni(d){this.a=d},
cnj:function cnj(d){this.a=d},
cnk:function cnk(d){this.a=d},
cnl:function cnl(d){this.a=d},
cnm:function cnm(d){this.a=d},
cnn:function cnn(d){this.a=d},
h2A(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z3.Mg(x,"ngmy_doc_share_v1",new B.fmT(),1)},
hTL(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ci(d))
if(y.J.b(d))return new Uint8Array(A.ci(J.eG(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ci(A.yf(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ci(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
Rq(d,e){return B.i8j(d,e)},
i8j(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNZ
x=7
return A.b(o==null?$.aNZ=B.h2A():o,$async$Rq)
case 7:s=g
r=new Uint8Array(A.ci(e))
q=J.mP(s,"blobs","readwrite")
C.j_.mm(J.mO(q,"blobs"),r,d)
x=8
return A.b(J.pE(q),$async$Rq)
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
return A.i($async$Rq,w)},
Rp(d){return B.i8i(d)},
i8i(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNZ
x=7
return A.b(o==null?$.aNZ=B.h2A():o,$async$Rp)
case 7:s=f
r=J.mP(s,"blobs","readonly")
x=8
return A.b(C.j_.zD(J.mO(r,"blobs"),d),$async$Rp)
case 8:q=f
x=9
return A.b(J.pE(r),$async$Rp)
case 9:o=B.hTL(q)
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
return A.i($async$Rp,w)},
ah6(d){return B.i8h(d)},
i8h(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ah6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNZ
x=7
return A.b(p==null?$.aNZ=B.h2A():p,$async$ah6)
case 7:s=f
r=J.mP(s,"blobs","readwrite")
C.j_.FZ(J.mO(r,"blobs"),d)
x=8
return A.b(J.pE(r),$async$ah6)
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
return A.i($async$ah6,w)},
fmT:function fmT(){},
hW9(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bp2(w,v))}return u},
hsR(d,e){var x,w={},v=A.aWA("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fL9(w,v,e)
C.wp.yB(v,"change",new B.fLb(w,v,!1))
C.wp.yB(v,"cancel",new B.fLa(w))
$.eW.ms()
v.click()
A.bP(C.aiM,new B.fL8(w),y.H)},
fL9:function fL9(d,e,f){this.a=d
this.b=e
this.c=f},
fLb:function fLb(d,e,f){this.a=d
this.b=e
this.c=f},
fLa:function fLa(d){this.a=d},
fL8:function fL8(d){this.a=d},
Db(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Db=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gcZ()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gU_()?3:4
break
case 3:x=5
return A.b(B.hnU(e,d,s,!0,!1,f,g,h,!1,i),$async$Db)
case 5:x=1
break
case 4:x=6
return A.b(B.R4(d,s,f,g,h,i),$async$Db)
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
return A.b(B.IJ(s,d),$async$Db)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fiu(s,d),$async$Db)
case 14:x=12
return A.b(r.hnU(q,p,o,n,m,l,k,j,a1,i),$async$Db)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cg(A.e_(new B.fLo(s,i,d,f,g,h),!1,null,y.H)),$async$Db)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cg(A.e_(new B.fLp(s,i,d,f,g,h),!1,null,y.H)),$async$Db)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Db,w)},
R4(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$R4=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_g(e),$async$R4)
case 3:u=k
x=4
return A.b(B.apw(d,e,!1),$async$R4)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IJ(e,d),$async$R4)
case 7:if(k){v=D.aaK
x=1
break}x=8
return A.b(B.Vb(e),$async$R4)
case 8:v=t?D.Vo:D.aaL
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b_e(d,e)){v=D.aaK
x=1
break}x=11
return A.b(B.Vb(e),$async$R4)
case 11:v=t?D.Vo:D.aaL
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fYD(d,e)){v=D.aaK
x=1
break}x=14
return A.b(B.Vb(e),$async$R4)
case 14:v=D.Vo
x=1
break
case 13:v=t?D.Vo:D.aaL
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R4,w)},
fiu(d,e){var x=0,w=A.j(y.y),v
var $async$fiu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b_e(e,d)){v=!1
x=1
break}x=3
return A.b(B.b_g(d),$async$fiu)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fiu,w)},
hnU(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cg(A.e_(new B.fpo(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hiY(d,e,f,g,h,i,j){return new B.Zj(e,j,d,g,h,i,f,null)},
frk(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$frk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
x=3
return A.b(A.bU(C.K,null,new B.frn(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$frk)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frk,w)},
frP(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$frP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
r=new A.as(C.at,u)
x=3
return A.b(A.bU(C.K,null,new B.frR(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$frP)
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
return A.i($async$frP,w)},
h2J(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bv(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fDG(d,e){var x=0,w=A.j(y.H),v
var $async$fDG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Vb(e),$async$fDG)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eL()
case 1:return A.h(v,w)}})
return A.i($async$fDG,w)},
fLo:function fLo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLp:function fLp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ack:function ack(d,e){this.a=d
this.b=e},
fpo:function fpo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zj:function Zj(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azI:function azI(){this.c=this.a=this.d=null},
d6Z:function d6Z(d,e){this.a=d
this.b=e},
d6W:function d6W(d){this.a=d},
d6Y:function d6Y(d){this.a=d},
d6X:function d6X(d){this.a=d},
d70:function d70(){},
d7_:function d7_(d){this.a=d},
acM:function acM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCk:function aCk(d,e){this.a=d
this.b=e},
aFq:function aFq(d,e,f){this.a=d
this.b=e
this.c=f},
frn:function frn(d,e,f){this.a=d
this.b=e
this.c=f},
frl:function frl(d){this.a=d},
frm:function frm(d,e,f){this.a=d
this.b=e
this.c=f},
frR:function frR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frQ:function frQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cb5(d,e,f,g,h){return B.hI6(d,e,f,g,h)},
hI6(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cb5=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dF(d,new B.cb6(s,e,h,g,f,q),y.g),y.l),$async$cb5)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cb5,w)},
b_b(d,e,f,g,h){return B.hI7(d,e,f,g,h)},
hI7(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_b=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auR("GET",d)
o=A.fV0()
if(o==null)o=new A.M_(A.a([],y.W))
x=7
return A.b(o.f4(0,s).da(0,C.FS),$async$b_b)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cr(),$async$b_b)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BR(q,h,o,e,f,"Received via QR")
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
return A.i($async$b_b,w)},
b_a(d){return B.hI4(d)},
hI4(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vr(d,null).da(0,C.o6),$async$b_a)
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
return A.i($async$b_a,w)},
cb4(d){return B.hI5(d)},
hI5(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cb4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vr(d,null).da(0,C.q7),$async$cb4)
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
return A.i($async$cb4,w)},
cb6:function cb6(d,e,f,g,h,i){var _=this
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
IH(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hIc(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IH(C.a.b7(u,v.length))}return null},
hId(d){var x=B.IH(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hI8(){var x,w=$.pC(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.au(10)
return C.d.hx(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(24)]},
a6Y(d){return B.hI9(d)},
hI9(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a6Y)
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
return A.i($async$a6Y,w)},
a6Z(d,e){return B.hIa(d,e)},
hIa(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6Z=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cG,null),$async$a6Z)
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
return A.i($async$a6Z,w)},
BQ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BQ)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IH(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7_(r),$async$BQ)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6Y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BQ)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IH(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BQ)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hI8()
x=14
return A.b(B.a7_(m),$async$BQ)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a7().ae()
x=15
return A.b(B.a6Z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BQ)
case 15:k=f
x=16
return A.b(B.a6Z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BQ)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BQ)
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
return A.i($async$BQ,w)},
a7_(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IH(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6Y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7_)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7_,w)},
a70(d,e,f,g){return B.hIe(d,e,f,g)},
hIe(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a70=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IH(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7_(r),$async$a70)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.cbc())>1048576||g.b5(d,new B.cbd())){v=B.EJ(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7b("myCode",d,a0),$async$a70)
case 4:u=a3
try{t=C.X.aN(0,u,null)
if(y.f.b(t)){s=J.r(t,"files")
if(!y.j.b(s)||J.cq(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.EJ(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b_j(u,g.gL(d),a0),$async$a70)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pC().au(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dF(d,new B.cbe(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b_c(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],i,y.z),q),$async$a70)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a70,w)},
EJ(d,e,f,g,h){return B.hIb(d,e,f,g,h)},
hIb(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EJ=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$EJ)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cI(a6,0,new B.cb8())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pC().au(9999)
h=Date.now()
g=""+1000*h+"_"+C.cZ.au(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.IL(a9,q)
a0=new A.KB(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$EJ)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p3(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaB(a1.a,a4,"media",a1.d,a2).xc(m,n,new A.DZ(!0,q.c)),$async$EJ)
case 12:J.cb(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$EJ)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aQx(r),$async$EJ)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dF(a6,new B.cb9(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b_c(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],e,d),a8),$async$EJ)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aQx(r),$async$EJ)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EJ,w)},
b_c(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b_c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6Y(t),$async$b_c)
case 3:s=g
r=y.aL.a(J.r(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.cb7(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6Z(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_c,w)},
NB(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NB=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6Y("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NB)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.r(t,"deliveries")
if(!y.j.b(s)||J.cq(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b_d(k,a0),$async$NB)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b_i(h),$async$NB)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vi(g,a0),$async$NB)
case 10:f=a3
if(f!=null&&J.cK(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("K.E")
e=A.C(new A.Z(r,new B.cba(),q),n)
d=A.C(new A.Z(r,new B.cbb(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d1(d,0,A.dB(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6Z("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$NB)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NB,w)},
b_d(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b_d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cq(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
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
break}i=B.ic9(k,j)
C.d.v(s,i)
x=5
return A.b(B.D9(l,m,"Received via My Code",t,e,i),$async$b_d)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQx(s),$async$b_d)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_d,w)},
cbc:function cbc(){},
cbd:function cbd(){},
cbe:function cbe(){},
cb8:function cb8(){},
cb9:function cb9(){},
cb7:function cb7(){},
cba:function cba(){},
cbb:function cbb(){},
fLl(d,e){var x=0,w=A.j(y.H)
var $async$fLl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cg(A.e_(new B.fLm(e),!1,null,y.H)),$async$fLl)
case 2:return A.h(null,w)}})
return A.i($async$fLl,w)},
bDL(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bDL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cq(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cg(A.e_(new B.fLn(g,e,f),!1,null,y.y)),$async$bDL)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDL,w)},
fLm:function fLm(d){this.a=d},
fLn:function fLn(d,e,f){this.a=d
this.b=e
this.c=f},
V8:function V8(d,e){this.c=d
this.a=e},
aDG:function aDG(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dSF:function dSF(d,e){this.a=d
this.b=e},
Vc:function Vc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDJ:function aDJ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dTO:function dTO(d){this.a=d},
dTP:function dTP(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dTN:function dTN(d,e){this.a=d
this.b=e},
dTR:function dTR(d){this.a=d},
dTS:function dTS(d){this.a=d},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTU:function dTU(d,e){this.a=d
this.b=e},
dTV:function dTV(d,e){this.a=d
this.b=e},
dTW:function dTW(d){this.a=d},
dTZ:function dTZ(){},
dTX:function dTX(d){this.a=d},
dTY:function dTY(d,e){this.a=d
this.b=e},
bjl:function bjl(){},
V9:function V9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDH:function aDH(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dSG:function dSG(d){this.a=d},
dSH:function dSH(d){this.a=d},
fYE(d){var x=d.hY
if(x>=0)return C.o.N(x)
return 10},
hIg(d){var x=d.kT
if(x>=0)return x
return 4.99},
hIf(d){var x=d.lv,w=y.N
w=x.je(x,new B.cbg(),w,w)
return w},
he1(d){var x=d.kU,w=y.N
w=x.je(x,new B.cbh(),w,w)
return w},
b_g(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b_g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b_g)
case 7:s=f
r=A.w(p)
r=A.aU(J.r(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b_g,w)},
a72(d,e){var x=0,w=A.j(y.H),v,u
var $async$a72=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a72)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a72)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a72,w)},
Vb(d){var x=0,w=A.j(y.H),v,u
var $async$Vb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Vb)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Vb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Vb,w)},
fYD(d,e){var x,w,v
if(B.hIg(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hIf(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.V(Date.now(),0,!1))},
b_e(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.he1(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.V(Date.now(),0,!1))},
he2(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.he1(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a7().ae())
d.kU=w},
apx(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apx)
case 7:s=f
r=A.w(p)
r=A.eA(J.r(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$apx,w)},
apy(d){var x=0,w=A.j(y.H),v,u,t
var $async$apy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apx(d),$async$apy)
case 3:u=f
x=5
return A.b(A.az(),$async$apy)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$apy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apy,w)},
apw(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fYE(d)
if(u<=0){v=!1
x=1
break}if(B.fYD(d,e)){v=!1
x=1
break}x=3
return A.b(B.apx(e),$async$apw)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apw,w)},
b_f(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b_f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IJ(e,d),$async$b_f)
case 3:if(g){v=-1
x=1
break}u=B.fYE(d)
if(u<=0){v=-1
x=1
break}if(B.fYD(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apx(e),$async$b_f)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_f,w)},
cbj(d,e,f){var x=0,w=A.j(y.y),v
var $async$cbj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IJ(e,d),$async$cbj)
case 3:if(h){v=!1
x=1
break}v=B.apw(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbj,w)},
cbi(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cbi=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
x=3
return A.b(B.cbj(d,u,i.gU_()),$async$cbi)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbi,w)},
a71(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a71=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
if(i.gU_()){v=!0
x=1
break}if(B.b_e(d,u)){v=!0
x=1
break}x=5
return A.b(A.lq(u,C.SH),$async$a71)
case 5:x=k?3:4
break
case 3:B.he2(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a71)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l1(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.SH,"Doc Share for Organizations"),$async$a71)
case 7:if(!k){v=!1
x=1
break}B.he2(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a71)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a71,w)},
cbg:function cbg(){},
cbh:function cbh(){},
fMa(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fMa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fMa)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.ff4.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.ff4.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fMa,w)},
ieu(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.ff4.bu($.ff4,new B.fMc(d))},
fMc:function fMc(d){this.a=d},
fgx(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fgx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mR(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.jv,null,y.H),$async$fgx)
case 3:C.Av.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.ms()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgx,w)},
afX(d,e,f){var x=0,w=A.j(y.H),v
var $async$afX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.ffD.n(0,d,new B.ac1(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$afX)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.X.ap(A.G(["parts",e,"size",f],v,y.C),null)),$async$afX)
case 2:return A.h(null,w)}})
return A.i($async$afX,w)},
afR(d){return B.hY6(d)},
hY6(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.ffD.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afR)
case 3:u=j.aU(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.cq(s)){v=null
x=1
break}o=J.b6(s,new B.fk3(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.ac1(r)
$.ffD.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afR,w)},
QV(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$QV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ci(e))
$.Gt.n(0,d,u)
x=3
return A.b(B.Rq(d,u),$async$QV)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QV,w)},
aOl(d){return B.hY4(d)},
hY4(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gt.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.Rp(d),$async$aOl)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.Gt.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aOl)
case 4:s=f
r=A.aU(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aM(r)
x=!J.cq(q)?9:10
break
case 9:B.QV(d,q)
x=11
return A.b(J.hz(s,d),$async$aOl)
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
return A.i($async$aOl,w)},
hUa(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ci(J.eG(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ci(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ci(A.yf(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ci(d)),y.K)
return A.f8(null,y.K)},
a1O(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bh($.bB,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fN(r,"loadend",new B.fpA(r,t),!1,s)
A.fN(r,"error",new B.fpB(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iu(0,C.MT,new B.fpC())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1O,w)},
aOF(d,e,f){return B.i_n(d,e,f)},
i_n(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aOF=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1O(i),$async$aOF)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Rq(o,p),$async$aOF)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cb(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afX(k,j,s),$async$aOF)
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
return A.i($async$aOF,w)},
aOE(d,e,f){return B.i_m(d,e,f)},
i_m(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOE=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aOF(d,e,f),$async$aOE)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1O(f),$async$aOE)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gt.n(0,s,r)
$.Rb.n(0,s,r)
x=11
return A.b(B.QV(s,r),$async$aOE)
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
return A.i($async$aOE,w)},
BR(d,e,f,g,h,i){return B.hIp(d,e,f,g,h,i)},
hIp(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BR=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cZ.au(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jq(p,q,o,n,new A.V(Date.now(),0,!1).a7().ae(),a0,f,B.b_m(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.QV(s,d),$async$BR)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BR)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cJ.gct().aM(d)),$async$BR)
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
return A.b(B.AQ(e),$async$BR)
case 12:j=a2
J.cb(j,m)
x=13
return A.b(B.GE(e,j),$async$BR)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BR,w)},
Vd(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vd=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AQ(d),$async$Vd)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cZ.au(99999)
n=p.b
l=o.type
l.toString
k=B.he4(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a7().ae()
i=new B.jq(m,n,k,l,j,"From folder",null,B.b_m(),null)
$.agq.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1O(o),$async$Vd)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.Gt.n(0,h,g)
$.Rb.n(0,h,g)
B.QV(h,g)
x=9
break
case 10:x=11
return A.b(B.aOE(d,m,o),$async$Vd)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.M)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GE(d,t),$async$Vd)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vd,w)},
fYI(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fYI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.he4(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IK(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.BR(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYI,w)},
IK(d,e,f,g,h,i){return B.hIo(d,e,f,g,h,i)},
hIo(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IK=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cZ.au(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KB(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IK)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cq(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ci(J.S_(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kA(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Rq(k,l),$async$IK)
case 11:J.cb(q,k);++p
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
return A.b(j.a4(0),$async$IK)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Rq(k,new Uint8Array(A.ci(n))),$async$IK)
case 15:J.cb(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afX(r,q,g),$async$IK)
case 16:f=new B.jq(i,a1,a0,g,new A.V(Date.now(),0,!1).a7().ae(),a2,null,B.b_m(),null)
x=17
return A.b(B.AQ(d),$async$IK)
case 17:e=a6
J.cb(e,f)
x=18
return A.b(B.GE(d,e),$async$IK)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IK,w)},
Vf(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Vf=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agq.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1O(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afR(s),$async$Vf)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Rp(u[o]),$async$Vf)
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
v=A.yf(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.M)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Rb.h(0,s)
if(i==null)i=$.Gt.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rA(d,e),$async$Vf)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Rb.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.yf(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vf,w)},
he4(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rA(d,e){return B.hIq(d,e)},
hIq(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rA=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Rb.h(0,f)
if(e==null)e=$.Gt.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agq.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1O(s),$async$rA)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.Gt.n(0,f,r)
$.Rb.n(0,f,r)
B.QV(f,r)
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
return A.b(B.afR(f),$async$rA)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ays(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Rp(g[l]),$async$rA)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.M)(g),++l
x=13
break
case 15:r=n.aoC()
if(!C.aG.gan(r)){$.Gt.n(0,f,r)
$.Rb.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aOl(f),$async$rA)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Rb.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Vf(a0,a1,0,g),$async$rA)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.ci(i))
$.Gt.n(0,f,h)
$.Rb.n(0,f,h)
B.QV(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rA,w)},
hIt(d){var x,w,v=$.agq.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hIu(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hIr(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apE(d,e,f,g,h){return B.hIs(d,e,f,g,h)},
hIs(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apE=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agq.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1O(s),$async$apE)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rA(g,e),$async$apE)
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
return A.b(n.io(d).xc(h,r,new A.DZ(!0,e.c)),$async$apE)
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
return A.i($async$apE,w)},
he6(d,e,f,g,h){var x,w,v,u,t=$.he5
$.he5=t+1
x=Date.now()
w=""+1000*x+"_"+C.cZ.au(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cbu.n(0,t,new B.bvR(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ays(u)))
return t},
fYJ(d){var x=0,w=A.j(y.H)
var $async$fYJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fYJ,w)},
IL(d,e){var $async$IL=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agq.h(0,h)
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
return A.qe(B.Vf(d,e,p,o<q?o:q),$async$IL,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qe(A.G0(n),$async$IL,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qe(B.afR("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IL,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qe(B.Rp(h[l]),$async$IL,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qe(A.G0(k),$async$IL,w)
case 21:case 20:case 16:h.length===r||(0,A.M)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qe(B.rA(d,e),$async$IL,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qe(A.G0(A.yf(j,p,o<i?o:i)),$async$IL,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qe(null,0,w)
case 2:return A.qe(t.at(-1),1,w)}})
var x=0,w=A.hmN($async$IL,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hoD(w)},
b_o(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b_o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cbu.h(0,d)
if(t==null||J.cq(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a50(),$async$b_o)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_o,w)},
Ve(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Ve=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cbu.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a50(),$async$Ve)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afX(r.c,u,r.z),$async$Ve)
case 4:t=new B.jq(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a7().ae(),r.f,r.r,B.b_m(),null)
u=r.a
x=5
return A.b(B.AQ(u),$async$Ve)
case 5:s=f
J.cb(s,t)
x=6
return A.b(B.GE(u,s),$async$Ve)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ve,w)},
a78(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a78=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cbu.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ah6(u[s]),$async$a78)
case 6:case 4:u.length===t||(0,A.M)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a78,w)},
cbw(d,e,f){var x=0,w=A.j(y.H)
var $async$cbw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAM(d,e,f),$async$cbw)
case 2:return A.h(null,w)}})
return A.i($async$cbw,w)},
cbx(d,e,f){var x=0,w=A.j(y.H)
var $async$cbx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAN(d,e,f),$async$cbx)
case 2:return A.h(null,w)}})
return A.i($async$cbx,w)},
EK(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$EK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AQ(d),$async$EK)
case 2:p=g
J.nz(p,new B.cbv(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gt.W(0,v)
$.agq.W(0,e)
x=3
return A.b(B.afR(v),$async$EK)
case 3:u=g
$.ffD.W(0,v)
x=4
return A.b(A.az(),$async$EK)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$EK)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$EK)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ah6(s[q]),$async$EK)
case 12:case 10:s.length===r||(0,A.M)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ah6(v),$async$EK)
case 13:x=14
return A.b(B.GE(d,p),$async$EK)
case 14:return A.h(null,w)}})
return A.i($async$EK,w)},
b_n(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b_n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rA(d,e),$async$b_n)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fgx(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_n,w)},
AQ(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AQ)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fpD(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AQ,w)},
GE(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GE)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.ftJ(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.X.ap(t,null)),$async$GE)
case 3:return A.h(null,w)}})
return A.i($async$GE,w)},
bAM(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AQ(d),$async$bAM)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fnM(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEp(f))
x=4
return A.b(B.GE(d,u),$async$bAM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAM,w)},
bAN(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AQ(d),$async$bAN)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fnN(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cK0(f))
x=4
return A.b(B.GE(d,u),$async$bAN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAN,w)},
ac1:function ac1(d){this.a=d},
fk3:function fk3(){},
fpA:function fpA(d,e){this.a=d
this.b=e},
fpB:function fpB(d){this.a=d},
fpC:function fpC(){},
cbv:function cbv(d){this.a=d},
bvR:function bvR(d,e,f,g,h,i,j,k,l){var _=this
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
fpD:function fpD(){},
ftJ:function ftJ(){},
fnM:function fnM(d){this.a=d},
fnN:function fnN(d){this.a=d},
a79(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a79=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b5(d,new B.cbA())?3:4
break
case 3:x=5
return A.b(B.b_p(d,e),$async$a79)
case 5:u=g
if(u!=null){t=u.c
B.ND(d,u.b,e,t)}v=u
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
return A.b(B.b_k(s),$async$a79)
case 10:case 9:if(g){v=new A.Qi(1,D.Sk,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vg(d,e),$async$a79)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Vl(!0,!0,d,e),$async$a79)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.ND(d,D.zH,e,t)
v=new A.Qi(p,D.zH,t)
x=1
break}v=B.cbz(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a79,w)},
Vg(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7b(null,d,e),$async$Vg)
case 3:p=g
try{u=C.X.aN(0,p,null)
t=y.f.b(u)?J.r(u,"files"):null
if(!y.j.b(t)||J.cq(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b_j(p,d.length,e),$async$Vg)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cbx(e,C.d.gI(d).a,r.b),$async$Vg)
case 7:case 6:q=r.a
x=8
return A.b(B.ND(d,D.Sk,e,q),$async$Vg)
case 8:v=new A.Qi(d.length,D.Sk,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vg,w)},
Vh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mx(D.mN)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7a(d,e),$async$Vh)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cbs(s,d,e,t),$async$Vh)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b_k(t),$async$Vh)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rA(e,d),$async$Vh)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vg(A.a([d],y.r),e),$async$Vh)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vh,w)},
Vj(){var x=0,w=A.j(y.H)
var $async$Vj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fYC(),$async$Vj)
case 2:x=3
return A.b(B.aQR(),$async$Vj)
case 3:return A.h(null,w)}})
return A.i($async$Vj,w)},
a7a(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b_m()
x=3
return A.b(B.cbw(e,d.a,u),$async$a7a)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7a,w)},
ND(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$ND=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Sk&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b7(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7a(p,f),$async$ND)
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
return A.b(B.cbr(o,p,u,f),$async$ND)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cbs(o,p,f,t),$async$ND)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cbq(o,u,p,f),$async$ND)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.M)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ND,w)},
b_p(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b_p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cby(e,d),$async$b_p)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Vl(!1,!0,d,e),$async$b_p)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qi(u.a,D.zH,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_p,w)},
cby(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cby=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Vf(d,s,0,1),$async$cby)
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
return A.i($async$cby,w)},
cbz(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cbz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7b(null,d,e),$async$cbz)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.he3(u)
if(t.length>800){v=null
x=1
break}v=new A.Qi(d.length,D.dHU,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbz,w)},
apF(d,e,f){return B.hIx(d,e,f)},
hIx(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apF=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.ne(g,1)
x=B.fYH(g)?3:4
break
case 3:x=5
return A.b(B.cbt(g),$async$apF)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ne(g,13))
try{k=B.EL(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ne(g,13))
u=9
x=12
return A.b(B.b_i(q),$async$apF)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vi(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.fYG(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vi(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.IM(C.a.i(J.ne(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.IM(C.a.i(J.ne(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cB(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.aq(k,0,k.length-1)
else h=k
v=B.IM(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vi(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apF,w)},
IM(d,e,f){return B.hIv(d,e,f)},
hIv(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IM=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b7(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b7(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.aq(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cG(A.w(s)+"/manifest.json",0,null)
q=A.cG(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_a(r),$async$IM)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_a(A.cG(s,0,null)),$async$IM)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.cq(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cb5(o,r,a1,n,a2),$async$IM)
case 11:m=a4
x=J.cq(m)?12:13
break
case 12:x=14
return A.b(B.cb4(q),$async$IM)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vi(l,a2),$async$IM)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cq(m)?null:m
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
return A.i($async$IM,w)},
a7b(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7b=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rA(f,r),$async$a7b)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aM(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).a7().ae())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.ap(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7b,w)},
Vi(d,e){return B.hIw(d,e)},
hIw(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vi=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aV(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.r(m,"name")
l=J.k(d==null?"file":d)
d=J.r(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.r(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BR(i,a3,d,k,l,o),$async$Vi)
case 9:h=a5
if(h!=null)J.cb(n,h)
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
return A.i($async$Vi,w)},
NC:function NC(d,e){this.a=d
this.b=e},
cbA:function cbA(){},
a1n(d){var x=A.P(d).ax.a===C.I,w=x?D.agb:D.adT,v=x?D.ahQ:C.c,u=x?C.aP:C.M,t=x?C.bL:C.al,s=x?D.af9:C.aL
return new A.aGG([w,s,v,u,t,x?C.fe:C.bP])},
htH(d,e){var x=e?C.w.j(0.72):C.aW
return A.cg(null,x,!0,null,new B.fQj(e),d,null,!0,!0,y.N)},
cbf(d,e,f,g,h,i,j,k,l){return new B.Va(e,l,d,f,k,j,g,h,i,null)},
Zl(d,e,f,g,h,i,j){return new B.bdZ(g,h,j,e,i,d,f,null)},
fQj:function fQj(d){this.a=d},
Zi:function Zi(d,e){this.c=d
this.a=e},
azH:function azH(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d6V:function d6V(d){this.a=d},
d6T:function d6T(d){this.a=d},
d6U:function d6U(d){this.a=d},
bvu:function bvu(){},
Va:function Va(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDI:function aDI(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dTM:function dTM(d){this.a=d},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d,e,f){this.a=d
this.b=e
this.c=f},
dSI:function dSI(d){this.a=d},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e,f){this.a=d
this.b=e
this.c=f},
dSO:function dSO(d){this.a=d},
dTA:function dTA(d,e){this.a=d
this.b=e},
dTB:function dTB(d){this.a=d},
dT6:function dT6(d,e,f){this.a=d
this.b=e
this.c=f},
dT3:function dT3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSN:function dSN(d){this.a=d},
dTe:function dTe(d){this.a=d},
dTd:function dTd(){},
dST:function dST(d){this.a=d},
dTx:function dTx(d,e){this.a=d
this.b=e},
dTy:function dTy(d,e){this.a=d
this.b=e},
dTz:function dTz(d,e){this.a=d
this.b=e},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT5:function dT5(d,e){this.a=d
this.b=e},
dTq:function dTq(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTn:function dTn(){},
dTo:function dTo(){},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTr:function dTr(){},
dTs:function dTs(d){this.a=d},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTf:function dTf(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTh:function dTh(d){this.a=d},
dTi:function dTi(d){this.a=d},
dTj:function dTj(d){this.a=d},
dSQ:function dSQ(){},
dSR:function dSR(d){this.a=d},
dSS:function dSS(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSL:function dSL(d,e,f){this.a=d
this.b=e
this.c=f},
dT7:function dT7(d){this.a=d},
dT8:function dT8(d,e,f){this.a=d
this.b=e
this.c=f},
dT1:function dT1(d,e){this.a=d
this.b=e},
dSY:function dSY(d){this.a=d},
dSV:function dSV(d,e,f){this.a=d
this.b=e
this.c=f},
dSZ:function dSZ(d){this.a=d},
dT_:function dT_(d){this.a=d},
dT0:function dT0(){},
dT2:function dT2(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dSU:function dSU(d,e,f){this.a=d
this.b=e
this.c=f},
dSX:function dSX(){},
dTc:function dTc(d){this.a=d},
dTb:function dTb(d,e){this.a=d
this.b=e},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTt:function dTt(d){this.a=d},
dTu:function dTu(d,e){this.a=d
this.b=e},
dTv:function dTv(d){this.a=d},
dTJ:function dTJ(d){this.a=d},
dTH:function dTH(d){this.a=d},
dTI:function dTI(d){this.a=d},
dTK:function dTK(){},
dTL:function dTL(d,e){this.a=d
this.b=e},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTE:function dTE(d,e,f){this.a=d
this.b=e
this.c=f},
dTC:function dTC(d,e,f){this.a=d
this.b=e
this.c=f},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTG:function dTG(d,e){this.a=d
this.b=e},
azE:function azE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdY:function bdY(d,e,f){this.c=d
this.d=e
this.a=f},
d6R:function d6R(){},
d6S:function d6S(){},
acl:function acl(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d7e:function d7e(){},
d7d:function d7d(d){this.a=d},
Zk:function Zk(d,e,f){this.c=d
this.d=e
this.a=f},
azJ:function azJ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d7a:function d7a(d){this.a=d},
d7b:function d7b(d,e,f){this.a=d
this.b=e
this.c=f},
d7c:function d7c(d,e){this.a=d
this.b=e},
d78:function d78(d,e){this.a=d
this.b=e},
d76:function d76(d){this.a=d},
d74:function d74(d){this.a=d},
d71:function d71(d){this.a=d},
d77:function d77(d){this.a=d},
d73:function d73(d){this.a=d},
d79:function d79(d){this.a=d},
d75:function d75(d){this.a=d},
d72:function d72(d){this.a=d},
Zh:function Zh(d,e,f){this.c=d
this.d=e
this.a=f},
azG:function azG(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d6O:function d6O(d){this.a=d},
d6N:function d6N(d,e){this.a=d
this.b=e},
d6P:function d6P(d){this.a=d},
d6M:function d6M(d,e){this.a=d
this.b=e},
d6Q:function d6Q(d){this.a=d},
d6L:function d6L(d,e){this.a=d
this.b=e},
d6H:function d6H(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6J:function d6J(d,e){this.a=d
this.b=e},
d6K:function d6K(d){this.a=d},
PS:function PS(d,e,f){this.c=d
this.d=e
this.a=f},
azM:function azM(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d7r:function d7r(d){this.a=d},
d7s:function d7s(d){this.a=d},
d7t:function d7t(d){this.a=d},
d7u:function d7u(d){this.a=d},
d7v:function d7v(d,e){this.a=d
this.b=e},
d7w:function d7w(d){this.a=d},
d7y:function d7y(d){this.a=d},
d7x:function d7x(d){this.a=d},
Zm:function Zm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azK:function azK(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d7n:function d7n(d,e){this.a=d
this.b=e},
d7o:function d7o(d,e){this.a=d
this.b=e},
d7f:function d7f(d,e,f){this.a=d
this.b=e
this.c=f},
d7g:function d7g(d){this.a=d},
d7h:function d7h(){},
d7m:function d7m(){},
d7i:function d7i(d,e){this.a=d
this.b=e},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7k:function d7k(d,e){this.a=d
this.b=e},
d7l:function d7l(d,e){this.a=d
this.b=e},
acj:function acj(d,e){this.c=d
this.a=e},
d6G:function d6G(d){this.a=d},
Zg:function Zg(d){this.a=d},
azF:function azF(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Zn:function Zn(d,e){this.c=d
this.a=e},
azL:function azL(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d7q:function d7q(d){this.a=d},
d7p:function d7p(d){this.a=d},
bdZ:function bdZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hIy(){var x,w=$.pC(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"VT"+C.d.hx(v)},
NE(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$NE)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NE)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NE,w)},
a7c(d){return B.hIz(d)},
hIz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7c)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7c)
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
return A.i($async$a7c,w)},
Vk(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NE(),$async$Vk)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a7().ae())
r.n(s,d,t)
x=4
return A.b(B.a7c(s),$async$Vk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vk,w)},
Vl(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Vl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c7(),$async$Vl)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Z<1>")
u=A.C(new A.Z(f,new B.cbC(),t),t.k("K.E"))}if(u.length===0){v=null
x=1
break}s=B.hIy()
t=A.U(u).k("N<1,a8<n,aD>>")
r=A.C(new A.N(u,new B.cbD(s),t),t.k("ak.E"))
x=6
return A.b(B.NE(),$async$Vl)
case 6:q=i
J.aH(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=7
return A.b(B.a7c(q),$async$Vl)
case 7:x=8
return A.b(B.a7d(r,u,g,s),$async$Vl)
case 8:v=new A.bpv(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vl,w)},
apG(d){var x=0,w=A.j(y.y),v,u,t
var $async$apG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NE(),$async$apG)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apG,w)},
cbE(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cbE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NE(),$async$cbE)
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
return A.i($async$cbE,w)},
a7d(d,e,f,g){return B.hIA(d,e,f,g)},
hIA(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7d=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apE("media",r,new B.cbB(s,e,g),f,q),$async$a7d)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vk(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7d)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vk(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$a7d)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vk(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7d)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7d,w)},
EL(d,e,f){return B.hIB(d,e,f)},
hIB(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EL=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$EL)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apG(b3),$async$EL)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iT,null,g),$async$EL)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apG(b3),$async$EL)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NE(),$async$EL)
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
if(!y.j.b(a4)||J.cq(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a5(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
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
b0=A.p3(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaB(a8.a,b0,"media",a8.d,a9).CN(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b_b(k,n,o,s,b7),$async$EL)
case 17:j=c0
if(j!=null){J.cb(p,j);++q
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
break}a7=g.gR(g)
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
a8=A.p3(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaB(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$EL)
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
a0=A.dQ(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7c(e),$async$EL)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EL,w)},
cbC:function cbC(){},
cbD:function cbD(d){this.a=d},
cbB:function cbB(d,e,f){this.a=d
this.b=e
this.c=f},
aQR(){var x=0,w=A.j(y.H),v,u
var $async$aQR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hTw=null
v=y.H
u=A.dU(null,v)
x=2
return A.b(u,$async$aQR)
case 2:u=A.dU(null,v)
x=3
return A.b(u,$async$aQR)
case 3:u=$.h2W
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dU(u,v),$async$aQR)
case 4:$.h2W=$.i1f=$.i1g=null
return A.h(null,w)}})
return A.i($async$aQR,w)},
ftk(d){var x=0,w=A.j(y.H),v,u
var $async$ftk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a7B){x=1
break}u=new A.bh($.bB,y.d4)
d.c=new B.ftl(new A.bY(u,y.aY))
x=3
return A.b(u.iu(0,C.hX,new B.ftm()),$async$ftk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ftk,w)},
i1d(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hIi(x):x},
h3_(d){var x=0,w=A.j(y.T),v,u,t
var $async$h3_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,13))
if(C.a.a0(u,"WR")){v=B.apI(u)
x=1
break}v=B.fYG(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h3_,w)},
h2Z(d){var x=0,w=A.j(y.T),v,u,t
var $async$h2Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,14))
if(C.a.a0(u,"WR")){v=B.apJ(u)
x=1
break}v=B.fYG(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2Z,w)},
fLV(d){var x=0,w=A.j(y.T),v
var $async$fLV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apJ(d),$async$fLV)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLV,w)},
bBF(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bBF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h2Z(d),$async$bBF)
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
return A.i($async$bBF,w)},
fhl(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fhl=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Ve(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BR(d.aoC(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fhl,w)},
GG(d,e,f){return B.i3G(d,e,f)},
i3G(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GG=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h3_(a1),$async$GG)
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
return A.b($.hvA().aEE(D.dwe,null),$async$GG)
case 4:l=d.h2W=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ays(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bh($.bB,y.b1)
l.y=new B.ftS(f,k,new B.ftT(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7Z(0,new B.Xn(r,"offer")),$async$GG)
case 5:d=l
x=7
return A.b(l.ali(0),$async$GG)
case 7:x=6
return A.b(d.a7R(0,a4),$async$GG)
case 6:x=8
return A.b(B.ftk(l),$async$GG)
case 8:x=9
return A.b(l.apn(),$async$GG)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i1d(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.ap(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apK(m,h),$async$GG)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.he3(h)
case 11:v=new A.boN(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GG,w)},
ftl:function ftl(d){this.a=d},
ftm:function ftm(){},
ftT:function ftT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftS:function ftS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ftR:function ftR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i5A(d){switch(d){case"new":return D.eqi
case"checking":return D.eqj
case"connected":return D.eql
case"completed":return D.eqk
case"failed":return D.eqn
case"disconnected":return D.eqo
case"closed":return D.aO5
case"count":return D.eqm}return D.aO5},
i5B(d){switch(d){case"new":return D.aO6
case"gathering":return D.eqp
case"complete":return D.a7B}return D.aO6},
ifY(d){switch(d){case"stable":return D.eqq
case"have-local-offer":return D.eqr
case"have-local-pranswer":return D.eqt
case"have-remote-offer":return D.eqs
case"have-remote-pranswer":return D.equ
case"closed":return D.aOc}return D.aOc},
ieb(d){switch(d){case"new":return D.aO9
case"connecting":return D.aOa
case"connected":return D.aOb
case"closed":return D.a7C
case"disconnected":return D.aO8
case"failed":return D.aO7}return D.a7C},
a9y:function a9y(d,e){this.a=d
this.b=e},
OG:function OG(d,e){this.a=d
this.b=e},
Xm:function Xm(d,e){this.a=d
this.b=e},
OF:function OF(d,e){this.a=d
this.b=e},
Fe:function Fe(d,e){this.a=d
this.b=e},
cne:function cne(){},
h_r(d){var x=new B.Fd()
x.a=d
x.b=!0
return x},
Fd:function Fd(){this.b=this.a=$},
a9x:function a9x(){},
au0:function au0(){},
Xn:function Xn(d,e){this.a=d
this.b=e},
fYC(){var x=0,w=A.j(y.H)
var $async$fYC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fYC,w)},
fYF(d,e,f){var x=0,w=A.j(y.T),v
var $async$fYF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mx(D.mN))){v=null
x=1
break}v=B.fMa(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYF,w)},
he3(d){var x,w=F.adj.a4L(C.dK.aM(d),null)
if(w.length===0){x=C.dK.aM(d)
return C.cJ.gct().aM(x)}return C.cJ.gct().aM(w)},
hIh(d){var x,w,v=C.cF.aM(d)
try{x=C.cg.cA(0,F.adi.bdp(v,!1))
return x}catch(w){x=C.cg.cA(0,v)
return x}},
fYG(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hIh(C.a.b7(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b7(t,w.length)
try{v=C.cg.cA(0,C.cF.aM(x))
return v}catch(u){return x}}return null},
hIi(d){var x,w,v,u,t,s=A.a([],y.s)
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
hIj(){var x,w=$.pC(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"DS"+C.d.hx(v)},
b_h(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b_h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b_h)
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
return A.i($async$b_h,w)},
cbk(d,e){return B.hIk(d,e)},
hIk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cbk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$cbk)
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
return A.i($async$cbk,w)},
b_k(d){var x=0,w=A.j(y.y),v,u,t
var $async$b_k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_h(d),$async$b_k)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_k,w)},
b_j(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b_j=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hIj()
r=C.a.i(f)
t=C.dK.aM(s)
x=3
return A.b(B.cbk(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$b_j)
case 3:if(!h){v=null
x=1
break}v=new A.a0o("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_j,w)},
b_i(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b_i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b_h(o),$async$b_i)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cA(0,C.cF.aM(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b_i,w)},
cbl(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cbl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bCB("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$cbl)
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
return A.i($async$cbl,w)},
b_l(d){var x=0,w=A.j(y.h),v,u,t
var $async$b_l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.II(),$async$b_l)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_l,w)},
apB(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apB)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b_l(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apB,w)},
apz(d,e){var x=0,w=A.j(y.H)
var $async$apz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apz)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apz)
case 2:return A.h(null,w)}})
return A.i($async$apz,w)},
a74(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a74=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a74)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.II(),$async$a74)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=5
return A.b(A.a73(s),$async$a74)
case 5:x=6
return A.b(B.apz(f,u),$async$a74)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a74,w)},
a75(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a75=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a75)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.II(),$async$a75)
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
return A.b(B.apz(g,q),$async$a75)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a73(u),$async$a75)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a75,w)},
a76(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a76=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a76)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.II(),$async$a76)
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
s=B.b_e(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a76)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.X.ap(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a7().ae()],p,p),null)),$async$a76)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a76,w)},
cbm(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cbm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cbm)
case 7:s=f
p=A.w(n)
r=A.aU(J.r(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cbm,w)},
IJ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cbm(d),$async$IJ)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b_l(t),$async$IJ)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apA(d),$async$IJ)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b_e(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apA(d),$async$IJ)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IJ,w)},
apA(d){var x=0,w=A.j(y.H)
var $async$apA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apA)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apA)
case 2:return A.h(null,w)}})
return A.i($async$apA,w)},
b_m(){var x,w=$.pC(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(32)]
return C.d.hx(v)},
a77(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fYH(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cbp(d){return B.hIm(d)},
hIm(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cbp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a77(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cbp)
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
return A.i($async$cbp,w)},
apD(d,e){return B.hIn(d,e)},
hIn(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a77(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apD)
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
return A.i($async$apD,w)},
cbr(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cbr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a77(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apD(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$cbr)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cbr,w)},
cbq(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cbq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a77(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apD(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$cbq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cbq,w)},
cbs(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cbs=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a77(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apD(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbs,w)},
cbt(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cbt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fYH(d)){v=null
x=1
break}x=3
return A.b(B.cbp(d),$async$cbt)
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
return A.i($async$cbt,w)},
a7e(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7e=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7e)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7e)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7e,w)},
apH(d){return B.hIC(d)},
hIC(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$apH)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$apH)
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
return A.i($async$apH,w)},
apI(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$apI)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7e(),$async$apI)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cA(0,C.cF.aM(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aH(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a7().ae())
J.aH(s,j,o)
x=9
return A.b(B.apH(s),$async$apI)
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
return A.i($async$apI,w)},
apK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c7(),$async$apK)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7e(),$async$apK)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aM(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a7().ae())
t.n(u,p,q)
x=5
return A.b(B.apH(u),$async$apK)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apK,w)},
apJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c7(),$async$apJ)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7e(),$async$apJ)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cA(0,C.cF.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apJ,w)},
aoE(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.q4)){v=null
x=1
break}x=3
return A.b(p.m4(e),$async$aoE)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.h8),$async$aoE)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.vA(o))
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
return A.i($async$aoE,w)},
ic9(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.u(w),5,"0")
return v},
fKf(d){return B.icb(d)},
icb(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fKf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.io("media").L1(d,3600),$async$fKf)
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
return A.i($async$fKf,w)},
D9(d,e,f,g,h,i){var x=null
return B.ic8(d,e,f,g,h,i)},
ic8(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D9=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.he6(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fYJ(r),$async$D9)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fKf(o),$async$D9)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a78(r),$async$D9)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aRp)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.M_(A.a([],g))
x=15
return A.b(d.f4(0,A.auR("GET",A.cG(n,0,null))).da(0,C.FS),$async$D9)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a78(r),$async$D9)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KB(d)
u=19
case 22:x=24
return A.b(d.C(),$async$D9)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b_o(r,k),$async$D9)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$D9)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.M)(b0),++f
x=8
break
case 10:i=B.Ve(r)
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
return A.b(B.a78(r),$async$D9)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D9,w)},
aQx(d){return B.ica(d)},
ica(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aQx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.io("media").W(0,d),$async$aQx)
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
return A.i($async$aQx,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[152]
O=c[43]
F=c[249]
I=c[141]
P=c[227]
E=c[220]
G=c[93]
Q=c[191]
R=c[142]
S=c[225]
K=c[253]
L=c[258]
B=a.updateHolder(c[22],B)
D=c[256]
T=c[190]
M=c[210]
U=c[70]
V=c[243]
W=c[76]
X=c[59]
N=c[92]
Y=c[257]
B.cnf.prototype={
aEE(d,e){return this.cLx(d,e)},
cLx(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aEE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.T(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.kp(A.cz(t)))
t=J.k(u)
v=B.hNc(C.cJ.gct().aM(new A.d6(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aEE,w)}}
B.b4w.prototype={
bzd(d){var x=this,w=x.w
w.onclose=A.hs(new B.cna(x))
w.onopen=A.hs(new B.cnb(x))
w.onmessage=A.hs(new B.cnc(x))
w.onbufferedamountlow=A.hs(new B.cnd(x))},
gdc(d){return this.x},
ahC(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fd()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h_r(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$ahC)
case 8:v=t.h_r(s.anQ(f,0,null))
x=1
break
case 7:case 4:v=B.h_r(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahC,w)}}
B.b4x.prototype={
bze(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hs(new B.cng(x)))
w.addEventListener("icecandidate",A.hs(new B.cnh(x)))
w.addEventListener("iceconnectionstatechange",A.hs(new B.cni(x)))
w.onicegatheringstatechange=A.hs(new B.cnj(x))
w.addEventListener("signalingstatechange",A.hs(new B.cnk(x)))
if(!$.h6H())w.addEventListener("connectionstatechange",A.hs(new B.cnl(x)))
w.addEventListener("negotiationneeded",A.hs(new B.cnm(x)))
w.addEventListener("track",A.hs(new B.cnn(x)))},
ali(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ali=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kp(A.cz(A.T(y.N,y.z)))),y.aQ),$async$ali)
case 3:t=f
v=new B.Xn(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ali,w)},
a7R(d,e){return this.bou(0,e)},
bou(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7R)
case 2:return A.h(null,w)}})
return A.i($async$a7R,w)},
a7Z(d,e){return this.boN(0,e)},
boN(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7Z)
case 2:return A.h(null,w)}})
return A.i($async$a7Z,w)},
apn(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Xn(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apn,w)},
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
B.ack.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.Zj.prototype={
U(){return new B.azI()},
gcZ(){return this.c}}
B.azI.prototype={
a_(){this.a2()
this.aem()},
aem(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aem=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_f(u.e,u.c),$async$aem)
case 2:t=e
if(v.c!=null)v.m(new B.d6Z(v,t))
return A.h(null,w)}})
return A.i($async$aem,w)},
Qv(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apw(t.e,t.c,!1),$async$Qv)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.f9h)
x=1
break}x=4
return A.b(B.a72(u.a.c,"individual"),$async$Qv)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a6l(A.e_(new B.d6W(u),!1,null,y.H)),$async$Qv)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qv,w)},
Jo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.frk(o),$async$Jo)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a76(o.e,r,s,q),$async$Jo)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.f6i)
x=1
break}x=5
return A.b(B.a72(u.a.c,"member"),$async$Jo)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a6l(A.e_(new B.d6Y(u),!1,null,y.H)),$async$Jo)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jo,w)},
y8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$y8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a71(t.e,o,t.f,t.r,t.w,s),$async$y8)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a72(u.a.c,"org_owner"),$async$y8)
case 4:x=5
return A.b(B.apB(u.a.c),$async$y8)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.frP(o),$async$y8)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a74(s,t,o,q.c),$async$y8)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.f6f)
x=1
break}x=10
return A.b(B.apB(u.a.c),$async$y8)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a6l(A.e_(new B.d6X(u),!1,null,y.H)),$async$y8)
case 11:case 1:return A.h(v,w)}})
return A.i($async$y8,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jr:C.pX,q=B.fYE(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.fY,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fsL,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h4,t,t,t),C.aA,D.fMd,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c3L,C.n),t,t,t,t,C.eA,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lO(new B.d70(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ad)
if(!u.a.x)C.d.v(p,A.a([new B.acM(C.eY,C.aAI,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcf5(),t),C.ad],v))
p.push(new B.acM(C.p7,C.a3q,"Team Member","Sign in with your organization access code + password",u.gcfX(),t))
p.push(C.ad)
p.push(new B.acM(C.ana,C.a4Y,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcfs(),t))
return A.c6(t,r,A.bn(!0,A.cd(A.x(p,C.aj,t,C.e,C.j,0,C.p),C.t,t,C.y,t,F.aks,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acM.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.J(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aM(!1,r,!0,A.eJ(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a4,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ev,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oC,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.yD,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ai)}}
B.aCk.prototype={}
B.aFq.prototype={}
B.jq.prototype={
mx(d){var x=this.b,w=C.a.oM(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b7(x,w+1).toLowerCase())},
gaq3(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ac(x/1024,1)+" KB"
if(x<1073741824)return C.k.ac(x/1048576,1)+" MB"
return C.k.ac(x/1073741824,2)+" GB"},
ag(){var x,w=this,v=A.T(y.N,y.z)
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
bcT(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jq(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cK0(d){return this.bcT(null,d)},
aEp(d){return this.bcT(d,null)}}
B.V8.prototype={
U(){return new B.aDG(new A.cA(null,y.A))},
gcZ(){return this.c}}
B.aDG.prototype={
a_(){this.a2()
this.aen()},
aen(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aen=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BQ(u.a.c),$async$aen)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dSF(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aen,w)},
aeo(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fB(s)),$async$aeo)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fab)
case 1:return A.h(v,w)}})
return A.i($async$aeo,w)},
a__(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a__=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoE(s.d,4),$async$a__)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t5(r,"ngmy_my_code_"+m+".png"),$async$a__)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a__,w)},
ai3(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ai3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaa("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ai3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ai3,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jr:C.pX,m=o?C.c:C.M,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mq
else if(q.e==null)x=A.at(new A.D(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.J(C.aC.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a3S,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a4,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.ak1,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aC.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mW,w,C.kO,new A.ex(A.p(p,A.pW(p,p,!1,B.hId(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.ad,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kO,A.B(A.a([A.E(A.et(N.Cs,C.UQ,q.gc85(),p),1),C.as,A.E(A.dj(C.z2,C.a9O,q.gc86(),A.bp(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.W,new A.a7(1/0,p,A.et(M.a2b,D.fHU,q.gcuJ(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.Nl,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.Vc.prototype={
U(){return new B.aDJ(new A.as(C.at,$.ax()),A.k1(!0,null,!0,!0,null,null,!1))}}
B.aDJ.prototype={
a_(){var x,w
this.a2()
x=this.a.e
w=B.IH(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.S$=$.ax()
x.P$=0
this.e.q()
this.a3()},
a_0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IH(u.d.a.a)
if(t==null){u.m(new B.dTO(u))
x=1
break}u.m(new B.dTP(u))
s=u.a
r=s.c
x=3
return A.b(B.a70(s.d,new B.dTQ(u),t,r),$async$a_0)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dTR(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_0,w)},
a2c(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2c=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cq(r.a.d)){x=1
break}r.m(new B.dTS(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rA(r.a.c,q),$async$a2c)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dTT(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahR(p,m,l,j,k),$async$a2c)
case 8:o=e
if(r.c!=null)r.m(new B.dTU(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dTV(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dTW(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2c,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.agb:D.adT,h=j?D.ahQ:C.c,g=j?C.aP:C.M,f=j?C.bL:C.al,e=j?D.af9:C.aL
i=[i,e,h,g,f,j?C.fe:C.bP]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.J(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bSf,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.az,C.aE,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ev,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fr,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a3S,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uw(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bjl()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bv(k,k,k,C.Ng,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dTX(l),k,!1,k,k,!1,k,!0,k,C.ab,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.mh,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.J(i[1],C.r,1)
m=J.LD(l.a.d,4)
m=A.C(new A.N(m,new B.dTY(x,new A.aGG(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l0,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.O,e,C.O,q,C.d8,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.m(14)
s=A.J(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f4O)
else q.push(A.X(C.lD,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aM,A.dd(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b7,new A.o(u,k,s,t,k,k,C.n),C.iR,k,k,k,C.eQ,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.aj,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.bAr,k,k,C.ah),1)
u=l.f?k:l.gcuK()
t=i[3]
s=i[1]
q=A.m(16)
s=A.et(M.a2b,D.fIY,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cj,k,new A.b7(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc87()
t=A.bp(C.aC,k,k,0,C.c,k,C.nm,k,new A.b7(A.m(16),C.a0),k,k,k)
return A.c6(g,h,new A.an(C.a_,k,C.aa,C.t,A.a([f,v,A.bn(!0,A.ls(new B.dTZ(),A.x(A.a([e,new A.D(D.bzW,A.x(A.a([s,C.O,i,C.ad,A.bI(l.f?C.t2:D.fHf,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.Zx,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bjl.prototype={
oI(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hk(C.bw,v.length),C.aO)}}
B.V9.prototype={
U(){return new B.aDH()}}
B.aDH.prototype={
a_(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b4,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b4,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.at,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.S$=$.ax()
v.P$=0
v=w.e
v===$&&A.c()
v.S$=x
v.P$=0
v=w.f
v===$&&A.c()
v.S$=x
v.P$=0
w.a3()},
aep(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aep=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dSG(r))
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
return A.b(B.a75(p,m,n,o,C.a.i(l).length===0?null:l),$async$aep)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.f9N)
s=[1]
x=4
break}p.K(y.q).f.T(D.f8q)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dSH(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aep,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jr:C.pX,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fzN,s,s,s,1,s,!0),p=A.p(s,D.bsb,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Hk,C.n),s,s,s,s,C.ab,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.bZg,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.bZb,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.bZr,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
v=t.r?s:t.gc88()
u=A.bp(C.aC,s,s,s,s,C.fZ,s,s,s,s,s,s)
return A.c6(q,r,A.cd(A.x(A.a([p,C.d8,o,C.ad,x,C.ad,w,C.mW,A.bI(t.r?C.t2:C.aUe,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.ab,s,s,C.ah),s,!1,!1,s,s)}}
B.ac1.prototype={}
B.bvR.prototype={
a50(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a50=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ci(r.aoC()))
x=3
return A.b(B.Rq(t,s),$async$a50)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a50,w)},
gcZ(){return this.a}}
B.NC.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.Zi.prototype={
U(){return new B.azH(new A.as(C.at,$.ax()),A.k1(!0,null,!0,!0,null,null,!1))}}
B.azH.prototype={
a_(){this.a2()
$.aW.x1$.push(new B.d6V(this))},
q(){var x=this.d
x.S$=$.ax()
x.P$=0
this.e.q()
this.a3()},
c8e(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1n(d),u=x.a.c,t=u?C.it:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jr:v.a[0],p=A.m(24),o=A.J(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aC.j(u?0.25:0.12),C.fY,32)],n),l=A.p(w,T.apN,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aC.j(0.4),C.cv,16)],n),C.aqz,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uw(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bvu()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bv(w,w,w,C.G2,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b1u),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d6T(x),w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.mh,w,w,w,w)
f=f[1]
f=A.E(A.dS(C.nH,new B.d6U(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cj,w,new A.b7(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.cH,12)],n)
g=y.p
return A.eR(w,C.K,new A.cT(Q.L3,A.c1(new A.D(C.yg,A.x(A.a([l,C.aM,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.as,A.E(A.c1(A.aG(!1,C.a1,!0,w,A.aM(!1,A.m(14),!0,D.ek8,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc8d(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ai),new A.o(w,w,w,h,n,L.P3,C.n),C.bg),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bg),w),w,w,w,C.No,C.d7,w,w,w)}}
B.bvu.prototype={
oI(d,e){return e.ald(e.a.toUpperCase())}}
B.Va.prototype={
U(){return new B.aDI(A.a([],y.r),A.aY(y.N))},
gcZ(){return this.c}}
B.aDI.prototype={
a_(){var x=this
x.a2()
x.tX()
x.w=A.dk(C.jw,new B.dTM(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vj()
this.a3()},
a13(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NB(u.a.c),$async$a13)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AQ(u.a.c),$async$a13)
case 4:u.m(new s.dT9(u,e))
u.i7("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a13,w)},
tX(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NB(u.a.c),$async$tX)
case 3:t=e
x=4
return A.b(B.AQ(u.a.c),$async$tX)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dTa(u,s))
if(t>0)u.i7("Received "+A.w(t)+" file(s) via My Code.")
u.NP(u.d)
B.BQ(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tX,w)},
NP(d){return this.bDc(d)},
bDc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7a(r,u.a.c),$async$NP)
case 8:p=f
if(u.c==null){x=1
break}new B.dSJ(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a0(r.c,"video/")||r.mx(D.mN))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vh(r,u.a.c),$async$NP)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.M)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AQ(u.a.c),$async$NP)
case 12:u.m(new o.dSK(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NP,w)},
Oc(d){return this.bJs(d)},
bJs(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7a(d,u.a.c),$async$Oc)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dSP(u,d,t))
x=6
return A.b(A.fG(new A.fB(t)),$async$Oc)
case 6:u.i7("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fB(r.toUpperCase())),$async$Oc)
case 7:u.i7("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oc,w)},
i7(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
tY(d,e){return this.cFm(d,e)},
cFm(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dTA(r,e))
u=3
x=6
return A.b(d.$0(),$async$tY)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dTB(r))
$.eW.ms()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tY,w)},
gaVJ(){var x=this.a
return x.f||x.r||x.w},
Ij(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ij=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaVJ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cbi(s,n,r,q,o,t),$async$Ij)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i7("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fDG(o,u.a.c),$async$Ij)
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
return A.b(B.Db(s,o,r,q,n,t),$async$Ij)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ij,w)},
a07(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a07=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apB(u.a.c),$async$a07)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i7("No organization portal found.")
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
return A.b(A.a4(t,!1).cg(A.e_(new B.dT6(u,r,q),!1,null,y.H)),$async$a07)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a07,w)},
a1d(d){return this.coh(d)},
cog(){return this.a1d(1)},
coh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaVJ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apy(u.a.c),$async$a1d)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1d,w)},
aci(d,e,f){return this.c_g(d,e,f)},
c_g(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aci=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7(e)
x=1
break}x=3
return A.b(u.tY(new B.dT3(u,d,null,e,f),"Uploading\u2026"),$async$aci)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aci,w)},
bDk(){B.hsR(!1,new B.dSN(this))
return},
cti(){this.m(new B.dTe(this))},
ayV(){var x=0,w=A.j(y.H),v=this
var $async$ayV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bDk()
return A.h(null,w)}})
return A.i($async$ayV,w)},
ace(){var x=0,w=A.j(y.H),v=this
var $async$ace=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tY(new B.dST(v),"Importing\u2026"),$async$ace)
case 2:return A.h(null,w)}})
return A.i($async$ace,w)},
Sy(d){return this.cEJ(d)},
cEJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mx(D.mN)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cg(A.e_(new B.dTx(u,d),!1,null,y.H)),$async$Sy)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mx(D.R_)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cg(A.e_(new B.dTy(u,d),!1,null,y.H)),$async$Sy)
case 8:x=1
break
case 7:x=u.c_X(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cg(A.e_(new B.dTz(u,d),!1,null,y.H)),$async$Sy)
case 11:x=1
break
case 10:u.i7("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sy,w)},
c_X(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oM(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cMI,C.a.b7(x,w+1).toLowerCase())},
afQ(d){return this.cf9(d)},
cf9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mx(D.mN)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cg(A.e_(new B.dT4(u,d),!1,null,y.H)),$async$afQ)
case 5:x=1
break
case 4:u.m(new B.dT5(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afQ,w)},
RU(d){return this.cwd(d)},
cwd(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pe(t,s.c,s.f),$async$RU)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tY(new B.dTq(u,d),"Preparing QR\u2026"),$async$RU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
aiu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aiu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dTr(),A.U(t).k("N<1,n>")).fH(0)}t=u.d
s=A.U(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dTs(q),s),s.k("K.E"))
if(r.length===0){u.i7("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RU(r),$async$aiu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiu,w)},
aim(d){return this.cvL(d)},
cvL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aim=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1n(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dTk(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aim)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sy(d)
break
case"qr":u.RU(A.a([d],y.r))
break
case"send_my_code":u.cfM(A.a([d],y.r))
break
case"save":u.ahJ(d)
break
case"delete":u.J8(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aim,w)},
XS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dSQ(),A.U(t).k("N<1,n>")).fH(0)}t=u.d
s=A.U(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dSR(q),s),s.k("K.E"))
if(r.length===0){u.i7("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pe(t,s.c,s.f),$async$XS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tY(new B.dSS(u,r),"Preparing file\u2026"),$async$XS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XS,w)},
agV(d){return this.cmD(d)},
cmD(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.htH(d,!1),$async$agV)
case 3:s=f
r=s==null
q=B.a77(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i7("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agV,w)},
afW(){var x=0,w=A.j(y.H),v=this,u
var $async$afW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fLl(u,v.a.c),$async$afW)
case 2:return A.h(null,w)}})
return A.i($async$afW,w)},
bDj(){B.hsR(!1,new B.dSM(this,null))
return},
Jn(d,e){return this.cfN(d,e)},
b0R(d){return this.Jn(null,d)},
cfM(d){return this.Jn(d,null)},
cfN(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dT7(s),o),o.k("K.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xn.c9().anU(!0,C.a0j,!1),$async$Jn)
case 10:r=g
if(r==null||J.cq(r.a)){x=1
break}x=11
return A.b(s.tY(new B.dT8(l,s,r),"Preparing\u2026"),$async$Jn)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.i7("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i7("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bDL(p,l,e,s.a.c),$async$Jn)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jn,w)},
Iz(d){return this.c_3(d)},
c_3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Iz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hIc(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0R(t),$async$Iz)
case 8:x=6
break
case 7:u.i7("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i7("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tY(new B.dT1(u,d),"Receiving video\u2026"),$async$Iz)
case 11:x=1
break
case 10:x=12
return A.b(u.tY(new B.dT2(u,d),"Receiving\u2026"),$async$Iz)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Iz,w)},
En(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$En=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.D5()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agV(t),$async$En)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Iz(s),$async$En)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cg(A.e_(new B.dTc(u),!1,null,y.N)),$async$En)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tX(),$async$En)
case 10:x=1
break
case 9:x=11
return A.b(u.Iz(C.a.i(r)),$async$En)
case 11:case 1:return A.h(v,w)}})
return A.i($async$En,w)},
ahJ(d){return this.crR(d)},
crR(d){var x=0,w=A.j(y.H),v=this
var $async$ahJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tY(new B.dTb(v,d),"Saving\u2026"),$async$ahJ)
case 2:return A.h(null,w)}})
return A.i($async$ahJ,w)},
J8(d){return this.bLN(d)},
bLN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$J8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lc(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$J8)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cbl(t),$async$J8)
case 6:case 5:s=d.a
x=7
return A.b(B.EK(u.a.c,s),$async$J8)
case 7:u.r.W(0,s)
x=8
return A.b(u.tX(),$async$J8)
case 8:case 1:return A.h(v,w)}})
return A.i($async$J8,w)},
aiA(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1n(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dTw(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aiA)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afW()
break
case"import":u.ace()
break}case 1:return A.h(v,w)}})
return A.i($async$aiA,w)},
c8b(d){var x=d.c
if(C.a.a0(x,"video/")||d.mx(D.mN))return C.qo
if(C.a.a0(x,"image/")||d.mx(D.R_))return C.uk
if(C.a.t(x,"pdf"))return E.Oz
return D.anD},
B(d){var x,w,v=this,u=null,t=B.a1n(d),s=t.a,r=s[0],q=s[3],p=A.aJ(u,u,u,u,C.Hc,u,u,u,new B.dTH(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aJ(u,u,u,u,D.bSN,u,u,u,v.e?u:v.gcft(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcth()
n.push(A.aJ(u,u,u,u,A.X(v.r.a===x?D.bN2:E.ao1,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aJ(u,u,u,u,C.a28,u,u,u,v.e?u:v.gc8c(),u,u,u,u,"Scan QR",u))
n.push(A.aJ(u,u,u,u,C.ok,u,u,u,v.e?u:v.gb1X(),u,u,u,u,"Upload files",u))
n.push(A.aJ(u,u,u,u,D.bUw,u,u,u,v.e?u:new B.dTI(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lO(new B.dTJ(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([C.aC.j(A.P(d).ax.a===C.I?0.12:0.08),C.aC.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ll(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.azE(C.jA,s,!0,t,w?u:v.gcwe(),u),1)
x.push(new A.D(D.byG,A.ls(new B.dTK(),A.B(A.a([s,C.as,A.E(new B.azE(C.ul,"Export",!1,t,w?u:v.gbPy(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iS,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdY(t,v.e?u:v.gb1X(),u)
else s=A.kh(!0,u,u,new B.dTL(v,t),s,u,D.byy,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.a_,u,C.aa,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.azE.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aC,t,t,0,C.c,t,C.vS,t,new A.b7(s,C.a0),t,t,t)
return A.dj(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vS,t,new A.b7(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.et(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f1,t,t,t),u.r,v)}}
B.bdY.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.J(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.ls(new B.d6R(),new A.D(E.a_o,A.x(A.a([A.ls(new B.d6S(),A.p(x,A.X(C.yF,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.az,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.er,C.hq,x,x,new A.bo(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dj(C.ok,D.fMx,this.d,A.bp(C.aC,x,x,x,C.c,x,C.Nm,x,new A.b7(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.Bv,x,x,new A.bo(0,1,w),s),x,x,x)}}
B.acl.prototype={
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
if(!o||i.mx(D.mN))p=D.dlr
else{p=C.a.a0(p,"image/")||i.mx(D.R_)
n=y.O
p=p?A.a([C.cO,C.aC],n):A.a([C.aK.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.az,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaq3()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mx(D.mN))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aJ(j,j,j,j,A.X(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cd))
if(!(!o||i.mx(D.mN)))l.push(A.fWl(C.aC,!1,j,j,j,!1,j,j,new B.d7d(k),j,j,new A.b7(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.od,x[4],j,j,j,j)
l.push(A.aJ(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cd))
return A.ls(new B.d7e(),new A.D(C.eb,A.aG(!1,C.a1,!0,j,A.aM(!1,r,!0,new A.D(C.ZS,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.ct,h,new A.cs("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.Zk.prototype={
U(){return new B.azJ()},
gcZ(){return this.c}}
B.azJ.prototype={
a_(){this.a2()
this.xX()},
q(){B.hIr(this.e)
this.a3()},
xX(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xX=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rA(o.c,o.d),$async$xX)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hIu(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hIt(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d7a(s))
x=1
break}s.m(new B.d7b(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d7c(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xX,w)},
a2b(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rA(t.c,t.d),$async$a2b)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.f6P)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahR(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2b)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2b,w)},
bZX(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ku(u,C.A,v,new B.d78(w,t),C.h6,C.dz,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fP(t,C.A,v,new B.d79(w),C.h6,C.dz,!0,v,!1,v,v)
else return C.bJ
return A.uF(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1n(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aJ(u,u,u,u,C.Ct,u,u,u,v.gb5I(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.EK
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aM,A.dj(C.Ct,D.fv8,v.gb5I(),A.bp(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bZX()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.Zh.prototype={
U(){return new B.azG(A.aiF(),C.bD,C.bD)},
gcZ(){return this.c}}
B.azG.prototype={
a_(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fw(w,A.a6(w).k("fw<1>")).iq(new B.d6O(v))
x.gcSY().iq(new B.d6P(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a6(x).k("fw<1>"))}if(x==null)x=C.b7F
x.iq(new B.d6Q(v))
v.xX()},
xX(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xX=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rA(p.c,p.d),$async$xX)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d6H(s))
x=1
break}x=8
return A.b(s.d.Cf(0,new A.a3q(r,s.a.d.c)),$async$xX)
case 8:if(s.c==null){x=1
break}s.m(new B.d6I(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d6J(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xX,w)},
a_1(){var x=0,w=A.j(y.H),v=this,u
var $async$a_1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h7(0),$async$a_1)
case 5:x=3
break
case 4:x=6
return A.b(u.it(0),$async$a_1)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_1,w)},
aTy(d){var x=d.a
return C.a.aZ(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1n(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.EK
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bO2,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.P3,C.n),o,88,o,o,o,o,o,88)
t=A.l6(C.aC,o,o,m,0,new B.d6K(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aTy(p.w)+" / "+p.aTy(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aC,o,o,o,o,D.f3g,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yO:C.ik,o,o,o,o,o)
x=A.x(A.a([u,C.kO,t,x,C.d8,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc8f(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c6(v,w,A.at(new A.D(C.qb,x,o),o,o,o),o,!1,!1,o,o)}}
B.PS.prototype={
U(){return new B.azM()},
gcZ(){return this.c}}
B.azM.prototype={
a_(){this.a2()
this.PR()},
PR(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fYF(o.c,o.d,new B.d7r(s)),$async$PR)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d7s(s))
x=1
break}s.e=r
q=O.i4y(r)
if(q==null){s.m(new B.d7t(s))
x=1
break}s.d=q
q.aS(0,s.gb0E())
x=8
return A.b(q.ip(0).da(0,C.rj),$async$PR)
case 8:if(s.c==null){x=1
break}s.m(new B.d7u(s))
x=9
return A.b(q.q7(0),$async$PR)
case 9:q.tC(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d7v(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PR,w)},
cdK(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d7w(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D3(0,x.gb0E())
w=x.d
if(w!=null)w.q()
B.ieu(x.e)
x.a3()},
aes(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aes=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_n(u.c,u.d),$async$aes)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aes,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1n(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aJ(t,t,t,t,C.oj,t,t,t,u.gc89(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.EK
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ai9(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.aa,C.t,A.a([new A.Al(s,t),A.aB(t,A.Dm(A.p(t,A.X(q?I.yO:C.ik,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b7,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d7y(u),t,t,t,t,t,t,!1,C.a5)],o),t),t)}else s=C.bJ}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.Zm.prototype={
U(){return new B.azK(new A.cA(null,y.A))}}
B.azK.prototype={
gcF3(){var x,w,v=this.a
if(v.e!==D.Sl)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcEH(){var x,w,v=this.a
if(v.e!==D.zH)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a2()
x=v.gcF3()
if(x!=null){v.QV(x)
v.e=A.dk(R.FV,new B.d7n(v,x))}w=v.gcEH()
if(w!=null){v.QU(w)
v.f=A.dk(C.fV,new B.d7o(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a3()},
QU(d){return this.ckP(d)},
ckP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apG(d),$async$QU)
case 3:t=f
x=4
return A.b(B.cbE(d),$async$QU)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d7f(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QU,w)},
QV(d){return this.ckQ(d)},
ckQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fLV(d),$async$QV)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bBF(t),$async$QV)
case 4:if(u.c==null){x=1
break}u.m(new B.d7g(u))
u.c.K(y.q).f.T(D.aR0)
case 1:return A.h(v,w)}})
return A.i($async$QV,w)},
gc41(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc8a(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1Y(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.D5()){t=u.c
if(t!=null)t.K(y.q).f.T(D.f9X)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cg(A.e_(new B.d7h(),!1,null,y.N)),$async$a1Y)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bBF(s),$async$a1Y)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aR0)
case 1:return A.h(v,w)}})
return A.i($async$a1Y,w)},
aa9(d){return this.bJt(d)},
bJt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aa9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fB(C.d.aH(t,", "))),$async$aa9)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aa9,w)},
aeq(d){return this.bJd(d)},
bJd(d){var x=0,w=A.j(y.H),v=this
var $async$aeq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fB(v.a.c)),$async$aeq)
case 2:if(d.e!=null)d.K(y.q).f.T(D.f7i)
return A.h(null,w)}})
return A.i($async$aeq,w)},
a1S(d){return this.crT(d)},
crT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoE(s.d,4),$async$a1S)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t5(r,"ngmy_doc_share_qr.png"),$async$a1S)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1S,w)},
gaWT(){var x,w=this.a
if(w.e!==D.Io)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b7(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b7(x,13))
return null},
aa6(d){return this.bJm(d)},
bJm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aa6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWT()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$aa6)
case 3:if(d.e!=null)d.K(y.q).f.T(D.f8X)
case 1:return A.h(v,w)}})
return A.i($async$aa6,w)},
aer(){var x=0,w=A.j(y.H),v=this,u
var $async$aer=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vj(),$async$aer)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aer,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1n(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aq(h,0,44)+"\u2026"
i=i.e
i=i!==D.Io&&i!==D.Sl&&i!==D.zH
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Io||t===D.Sl||t===D.zH?l:A.aJ(l,l,l,l,C.lb,l,l,l,m.gaZP(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.J(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.pW(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc41(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Io){t=C.aC.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mE,l,l,l)],p))}q.push(C.aM)
q.push(A.d(m.gc8a(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hr(D.bYk,D.fEu,new B.d7i(m,d),l)],p))}if(m.a.e===D.Io&&m.gaWT()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hr(D.bUQ,D.fB9,new B.d7j(m,d),l)],p))
if(m.a.e===D.zH){x=(m.w?C.dD:C.aC).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.EN:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mE,l,l,l)],p))}if(m.a.e===D.Sl){x=(m.r?C.dD:C.aC).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.EN:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mE,l,l,l),C.ad,A.dj(D.bQx,D.fHB,m.gcsg(),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ov(i,A.c6(v,w,new A.D(C.ab,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b8,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ab,l,l,1/0),1),C.ad,A.B(A.a([A.E(A.et(N.Cs,C.UQ,new B.d7k(m,d),l),1),C.as,A.E(A.dj(C.z2,C.a9O,new B.d7l(m,d),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bI(C.Ad,m.gaZP(),A.bp(C.aK,l,l,l,l,C.fZ,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d7m(),y.C)}}
B.acj.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.x(A.a([w,C.aM,A.p(x,A.pW(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.em(A.a([A.bI(C.wW,new B.d6G(d),x)],u),x,x,C.n3,v,x,x,x,x,D.fu8,x)}}
B.Zg.prototype={
U(){return new B.azF(A.zv(C.xY,C.nN,C.uA))}}
B.azF.prototype={
q(){this.d.q()
this.a3()},
axz(d){var x,w,v,u,t
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
return A.c6(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fBF,x,x,x,1,x,!0),C.w,A.zu(this.d,C.bV,this.gaxy()),x,!1,!1,x,x)}}
B.Zn.prototype={
U(){return new B.azL(A.zv(C.xY,C.nN,C.uA))},
gcZ(){return this.c}}
B.azL.prototype={
c_Z(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agi(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.St("text/plain"),$async$agi)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.f9R)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agi,w)},
aaW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aaW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.htH(p,!0),$async$aaW)
case 3:t=e
p=t==null
s=B.a77(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.f6p)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aaW,w)},
q(){this.d.q()
this.a3()},
axz(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.M)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c_Z(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aJ(v,v,v,v,F.aoW,v,v,v,w.gbP4(),v,v,v,v,"Enter QR share code",v),t=A.aJ(v,v,v,v,F.a2f,v,v,v,w.gcic(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aJ(v,v,v,v,A.X(w.f?C.ug:P.Om,v,v,v,v,v),v,v,v,new B.d7q(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fIt,v,v,v,1,v,!0)
u=A.zu(w.d,C.bV,w.gaxy())
x=A.m(20)
return A.c6(t,C.w,new A.an(C.a_,v,C.aa,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.J(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.epY],s),v),v,!1,!1,v,v)}}
B.bdZ.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oY
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oY:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aM(!1,w,!0,new A.D(C.a_u,A.B(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ai)}}
B.a9y.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.OG.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.Xm.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.OF.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.Fe.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cne.prototype={}
B.Fd.prototype={}
B.a9x.prototype={}
B.au0.prototype={}
B.Xn.prototype={}
var z=a.updateTypes(["aA<~>()","R(jq)","n(jq)","Va(Y)","~()","Zj(Y)","H(H,jq)","PS(Y)","~(m9)","cu(Fd)","aA<jq?>(@)","V8(Y)","Vc(Y)","D(jq)","jq(@)","a8<n,@>(jq)","Zi(Y)","V9(Y)","Zk(Y)","Zh(Y)","Zm(Y)","acj(Y)","ai<jq>()","Zn(Y)","acl(Y,H)","Zg(Y)","a8<n,aD>(jq)","cu(Xm)","cu(a9x)","aA<cu>(Fd)"])
B.cna.prototype={
$1(d){var x=this.a
x.x=D.aO4
x.y.M(0,D.aO4)},
$S:72}
B.cnb.prototype={
$1(d){var x=this.a
x.x=D.aO3
x.y.M(0,D.aO3)},
$S:72}
B.cnc.prototype={
$1(d){var x=this.a
x.ahC(A.aPf(d.data)).bM(new B.cn9(x),y.b)},
$S:72}
B.cn9.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cnd.prototype={
$1(d){},
$S:72}
B.cng.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hNb(d.channel))},
$S:15}
B.cnh.prototype={
$1(d){},
$S:15}
B.cni.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i5A(w.iceConnectionState)
x.cx=w
if($.h6H())switch(w.a){case 0:x.cy=D.aO9
break
case 1:x.cy=D.aOa
break
case 3:x.cy=D.aOb
break
case 5:x.cy=D.aO7
break
case 6:x.cy=D.aO8
break
case 7:x.cy=D.a7C
break
default:break}},
$S:155}
B.cnj.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i5B(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:155}
B.cnk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ifY(w.signalingState)},
$S:155}
B.cnl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ieb(w.connectionState)},
$S:155}
B.cnm.prototype={
$1(d){},
$S:155}
B.cnn.prototype={
$1(d){},
$S:15}
B.fmT.prototype={
$1(d){var x=y.F.a(new A.rW([],[]).pM(d.target.result,!1)),w=C.xZ.t(x.objectStoreNames,"blobs")
if(!w)C.xV.L_(x,"blobs")},
$S:193}
B.fL9.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wp.fl(this.b)
$.eW.ms()
this.c.$1(d)},
$S:465}
B.fLb.prototype={
$1(d){return this.a.$1(B.hW9(this.b,this.c))},
$S:35}
B.fLa.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fL8.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fLo.prototype={
$1(d){var x=this
return B.hiY(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fLp.prototype={
$1(d){var x=this
return B.hiY(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fpo.prototype={
$1(d){var x=this
return B.cbf(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d6Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d6W.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbf(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d6Y.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbf(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d6X.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbf(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d70.prototype={
$4(d,e,f,g){var x=null
return A.jO(A.B(A.a([A.aJ(x,x,x,x,D.bP8,x,x,x,new B.d7_(d),x,x,x,x,x,x),A.E(A.F_(D.QJ,!0,x,C.a1h,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.QJ,x,g,C.akN,0,e,f)},
$C:"$4",
$R:4,
$S:404}
B.d7_.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.frn.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eM,y.o).w,t=this.a,s=t?C.it:C.c,r=A.m(28),q=A.p(v,D.bsw,C.f,v,v,D.b38,v,v,v,v,D.akD,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bv(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bTm,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.G7,A.x(A.a([o,C.ad,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bv(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.apa,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.ao,v,v,v,v),C.bx,A.B(A.a([A.E(A.dS(C.di,new B.frl(d),v),1),C.as,A.E(A.bI(D.fAb,new B.frm(p,x,d),A.bp(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.N3,v,v,v,v),v)},
$S:60}
B.frl.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.frm.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.f7z)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aCk(v,x))},
$S:0}
B.frR.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eM,y.o).w,u=x.a,t=u?C.it:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bsl,C.f,w,w,D.b4C,w,w,w,w,D.akD,w,w,1/0),new A.D(C.G7,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.h2J(u,"Organization name",C.Gy,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.W,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.h2J(u,"Access code",C.nq,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.W,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.h2J(u,"Member password",H.H7,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.bx,A.bI(D.fIA,new B.frQ(r,q,p,d),A.bp(C.aC,w,w,w,w,C.fZ,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.N3,w,w,w,w),w)},
$S:60}
B.frQ.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.f7E)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aFq(u,x,w))},
$S:0}
B.cb6.prototype={
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
p=C.a.a0(j,"http")?A.cG(j,0,null):s.b.aT(j)
u=4
x=7
return A.b(A.vr(p,null).da(0,C.Zw),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ci(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BR(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cbc.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cbd.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cbe.prototype={
$1(d){return d.b},
$S:z+2}
B.cb8.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cb9.prototype={
$1(d){return d.b},
$S:z+2}
B.cb7.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cba.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.cbb.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fLm.prototype={
$1(d){return new B.V8(this.a,null)},
$S:z+11}
B.fLn.prototype={
$1(d){return new B.Vc(this.a,this.b,this.c,null)},
$S:z+12}
B.dSF.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dTO.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dTP.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dTQ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dTN(x,d))},
$S:2}
B.dTN.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTR.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dTS.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dTT.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dTU.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTV.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dTW.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dTZ.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*14)),e)},
$S:99}
B.dTX.prototype={
$1(d){var x=this.a
return x.f?null:x.a_0()},
$S:2}
B.dTY.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mx(D.R_))s=C.uk
else s=C.a.a0(s,"video/")||d.mx(D.mN)?C.qo:D.anD
x=this.b.a
w=y.p
return new A.D(C.kE,A.B(A.a([A.p(v,A.X(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaq3(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dSG.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dSH.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cbg.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:98}
B.cbh.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:98}
B.fMc.prototype={
$2(d,e){return e===this.a},
$S:307}
B.fk3.prototype={
$1(d){return J.k(d)},
$S:17}
B.fpA.prototype={
$1(d){var x=this.b
B.hUa(C.Gl.ga6F(this.a)).bM(x.gaE1(x),y.H)},
$S:122}
B.fpB.prototype={
$1(d){return this.a.d8(0,null)},
$S:122}
B.fpC.prototype={
$0(){return null},
$S:12}
B.cbv.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fpD.prototype={
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
u=J.k(u==null?new A.V(Date.now(),0,!1).a7().ae():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jq(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.ftJ.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fnM.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnN.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cbA.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.fQj.prototype={
$1(d){return new B.Zi(this.a,null)},
$S:z+16}
B.d6V.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fP()},
$S:9}
B.d6T.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d6U.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dTM.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a13()},
$S:11}
B.dT9.prototype={
$0(){var x=J.bEQ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dTa.prototype={
$0(){var x=J.bEQ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dSJ.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dSI(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEp(this.c)}},
$S:0}
B.dSI.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dSK.prototype={
$0(){var x=J.bEQ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dSP.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dSO(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEp(this.c)}},
$S:0}
B.dSO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dTA.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dTB.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dT6.prototype={
$1(d){return new B.V9(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dT3.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ij(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vd(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tX(),$async$$0)
case 5:s=J.a5(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1d(s.gL(t)),$async$$0)
case 8:case 7:r.i7(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSN.prototype={
$1(d){this.a.aci(d,"No files selected.","Added")},
$S:465}
B.dTe.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.N(x,new B.dTd(),A.U(x).k("N<1,n>")))},
$S:0}
B.dTd.prototype={
$1(d){return d.a},
$S:z+2}
B.dST.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xn.c9().cUW(C.a0j,!0),$async$$0)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i7("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i7("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apF(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cq(l)){o.i7("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tX(),$async$$0)
case 9:o.i7("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dTx.prototype={
$1(d){return new B.PS(this.a.a.c,this.b,null)},
$S:z+7}
B.dTy.prototype={
$1(d){return new B.Zk(this.a.a.c,this.b,null)},
$S:z+18}
B.dTz.prototype={
$1(d){return new B.Zh(this.a.a.c,this.b,null)},
$S:z+19}
B.dT4.prototype={
$1(d){return new B.PS(this.a.a.c,this.b,null)},
$S:z+7}
B.dT5.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dTq.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ij(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a79(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i7("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cog(),$async$$0)
case 5:x=6
return A.b(p.tX(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dTm(p),r),new B.dTn(),r.k("N<ak.E,n>")).c0(0,new B.dTo())
q=A.C(r,r.$ti.k("K.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cg(A.e_(new B.dTp(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pd(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vj(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dTm.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dTl(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dTl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dTn.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dTo.prototype={
$1(d){return d.length!==0},
$S:3}
B.dTp.prototype={
$1(d){var x=this.a
return new B.Zm(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dTr.prototype={
$1(d){return d.a},
$S:z+2}
B.dTs.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dTk.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kD,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaq3(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mx(D.mN)?C.un:C.pa
p=!x||p.mx(D.mN)?"Play video":"View"
return A.c1(A.bn(!0,new A.D(C.BH,A.x(A.a([q,o,t,C.aA,B.Zl(!1,u,!1,w,p,new B.dTf(d),v),B.Zl(!1,u,!1,C.jA,"Share via QR",new B.dTg(d),"Letters/numbers QR code"),B.Zl(!1,u,!1,D.a1n,"Send to their Code",new B.dTh(d),"Enter someone else's personal code"),B.Zl(!1,u,!1,C.hL,"Download / save",new B.dTi(d),v),C.am,B.Zl(!1,u,!0,C.ed,"Delete",new B.dTj(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bK(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kT,v,v,C.n),C.bg)},
$S:689}
B.dTf.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dTg.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dTh.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dTi.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dTj.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dSQ.prototype={
$1(d){return d.a},
$S:z+2}
B.dSR.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dSS.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7b(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GI(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pd(s.c,s.f),$async$$0)
case 4:u.i7(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSM.prototype={
$1(d){var x=this.a
x.tY(new B.dSL(x,d,this.b),"Preparing\u2026")},
$S:465}
B.dSL.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i7("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vd(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cq(s)){t.i7("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bDL(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dT7.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dT8.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fYI(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dT1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GG(new B.dSY(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i7("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dSZ(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dT_(s))
case 5:x=8
return A.b(r.b.iu(0,C.FS,new B.dT0()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gan(t)){s.i7("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tX(),$async$$0)
case 9:s.i7("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSY.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dSV(x,d,e))},
$S:213}
B.dSV.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dSZ.prototype={
$1(d){return new B.acj(this.a.a,null)},
$S:z+21}
B.dT_.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dT0.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dT2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IH(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7_(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0R(B.IH(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apF(new B.dSW(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cq(r)){if(B.fYH(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i7(q)
x=1
break}x=10
return A.b(s.tX(),$async$$0)
case 10:o=J.cD(r)
p=o.eY(r,new B.dSX()).gL(0)
s.i7(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSW.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dSU(x,d,e))},
$S:213}
B.dSU.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dSX.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.dTc.prototype={
$1(d){return new B.Zn(this.a.a.c,null)},
$S:z+23}
B.dTb.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b_n(u.a.c,v.b),$async$$0)
case 2:t.i7(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dTw.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aC.j(0.35)
return A.c1(A.bn(!0,new A.D(C.BH,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kD,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Zl(!0,w,!1,C.nq,"My Code",new B.dTt(d),"Your personal code & QR \u2014 others send docs to you"),B.Zl(!1,w,!1,D.a1n,"Send to their Code",new B.dTu(this.a,d),"Enter someone else's 5-digit code + letter"),B.Zl(!1,w,!1,S.yW,"Import backup",new B.dTv(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bK(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kT,x,x,C.n),C.bg)},
$S:689}
B.dTt.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dTu.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bDj()},
$S:0}
B.dTv.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dTJ.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IR(D.QJ,x,C.a1h,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gI(D.QJ).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:653}
B.dTH.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dTI.prototype={
$0(){this.a.aiA()
return null},
$S:0}
B.dTK.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*10)),e)},
$S:99}
B.dTL.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acl(e,w,v,this.b,x.e,x.c8b(w),new B.dTD(x,w),new B.dTE(x,v,w),new B.dTF(x,w),new B.dTG(x,w),null)},
$S:z+24}
B.dTD.prototype={
$0(){this.a.afQ(this.b)
return null},
$S:0}
B.dTE.prototype={
$0(){var x=this.a
return x.m(new B.dTC(x,this.b,this.c))},
$S:0}
B.dTC.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dTF.prototype={
$0(){this.a.Oc(this.b)
return null},
$S:0}
B.dTG.prototype={
$0(){this.a.aim(this.b)
return null},
$S:0}
B.d6R.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*18)),e)},
$S:99}
B.d6S.prototype={
$3(d,e,f){return A.eb(C.A,f,e,null,null)},
$S:110}
B.d7e.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*14)),e)},
$S:99}
B.d7d.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.d7a.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d7b.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d7c.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d78.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fP(w,C.A,x,new B.d76(this.a),C.h6,C.dz,!0,x,!1,x,x)
$.aW.x1$.push(new B.d77(this.a))
return C.bJ},
$S:139}
B.d76.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d74(this.a))
return C.bJ},
$S:184}
B.d74.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d71(x))},
$S:9}
B.d71.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d77.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d73(x))},
$S:9}
B.d73.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d79.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d75(this.a))
return C.bJ},
$S:184}
B.d75.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d72(x))},
$S:9}
B.d72.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d6O.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d6N(x,d))},
$S:1745}
B.d6N.prototype={
$0(){return this.a.f=this.b===C.uY},
$S:0}
B.d6P.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d6M(x,d))},
$S:9}
B.d6M.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d6Q.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d6L(x,d))},
$S:9}
B.d6L.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d6H.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d6I.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d6J.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d6K.prototype={
$1(d){return this.a.d.Nc(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:7}
B.d7r.prototype={
$0(){var x=this.a.a
return B.rA(x.c,x.d)},
$S:1746}
B.d7s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d7t.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d7u.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d7v.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d7w.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d7y.prototype={
$0(){var x=this.a
x.m(new B.d7x(x))},
$S:0}
B.d7x.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h7(0)
else x.q7(0)},
$S:0}
B.d7n.prototype={
$1(d){return this.a.QV(this.b)},
$S:11}
B.d7o.prototype={
$1(d){return this.a.QU(this.b)},
$S:11}
B.d7f.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d7g.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d7h.prototype={
$1(d){return D.heU},
$S:z+25}
B.d7m.prototype={
$2(d,e){if(d)B.Vj()},
$S:128}
B.d7i.prototype={
$0(){return this.a.aa9(this.b)},
$S:0}
B.d7j.prototype={
$0(){return this.a.aa6(this.b)},
$S:0}
B.d7k.prototype={
$0(){return this.a.aeq(this.b)},
$S:0}
B.d7l.prototype={
$0(){return this.a.a1S(this.b)},
$S:0}
B.d6G.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d7q.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qb(),$async$$0)
case 2:u.m(new B.d7p(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d7p.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cbC.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.cbD.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cbB.prototype={
$2(d,e){return this.bko(d,e)},
bko(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vk(u.c,A.G(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1747}
B.ftl.prototype={
$1(d){if(d===D.a7B&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.ftm.prototype={
$0(){},
$S:12}
B.ftT.prototype={
blY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fhl(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.he6(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.blY(d,e)},
$S:731}
B.ftS.prototype={
$1(d){var x=this
d.b=new B.ftR(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.ftR.prototype={
$1(d){return this.blX(d)},
blX(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b_o(n,m),$async$$1)
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
return A.b(B.fhl(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
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
return A.b(B.a78(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.azI.prototype,"gcf5","Qv",0)
x(v,"gcfX","Jo",0)
x(v,"gcfs","y8",0)
x(v=B.aDG.prototype,"gc85","aeo",0)
x(v,"gc86","a__",0)
x(v,"gcuJ","ai3",0)
x(v=B.aDJ.prototype,"gc87","a_0",0)
x(v,"gcuK","a2c",0)
x(B.aDH.prototype,"gc88","aep",0)
x(B.azH.prototype,"gc8d","c8e",4)
x(v=B.aDI.prototype,"gcft","a07",0)
x(v,"gcth","cti",4)
x(v,"gb1X","ayV",0)
x(v,"gcwe","aiu",0)
x(v,"gbPy","XS",0)
x(v,"gc8c","En",0)
x(B.azJ.prototype,"gb5I","a2b",0)
x(B.azG.prototype,"gc8f","a_1",0)
x(v=B.azM.prototype,"gb0E","cdK",4)
x(v,"gc89","aes",0)
x(v=B.azK.prototype,"gcsg","a1Y",0)
x(v,"gaZP","aer",0)
w(B.azF.prototype,"gaxy","axz",8)
x(v=B.azL.prototype,"gcic","agi",0)
x(v,"gbP4","aaW",0)
w(v,"gaxy","axz",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cne,B.a9x,B.au0,B.aCk,B.aFq,B.jq,B.ac1,B.bvR,B.Fd,B.Xn])
w(B.cnf,B.cne)
w(B.b4w,B.a9x)
x(A.hL,[B.cna,B.cnb,B.cnc,B.cn9,B.cnd,B.cng,B.cnh,B.cni,B.cnj,B.cnk,B.cnl,B.cnm,B.cnn,B.fmT,B.fL9,B.fLb,B.fLa,B.fLo,B.fLp,B.fpo,B.d6W,B.d6Y,B.d6X,B.d70,B.frn,B.frR,B.cb6,B.cbd,B.cbe,B.cb9,B.cb7,B.cba,B.cbb,B.fLm,B.fLn,B.dTQ,B.dTZ,B.dTX,B.dTY,B.fk3,B.fpA,B.fpB,B.cbv,B.fpD,B.ftJ,B.fnM,B.fnN,B.cbA,B.fQj,B.d6V,B.d6T,B.dTM,B.dSI,B.dSO,B.dT6,B.dSN,B.dTd,B.dTx,B.dTy,B.dTz,B.dT4,B.dTm,B.dTl,B.dTn,B.dTo,B.dTp,B.dTr,B.dTs,B.dTk,B.dSQ,B.dSR,B.dSM,B.dT7,B.dSZ,B.dSX,B.dTc,B.dTw,B.dTJ,B.dTK,B.d6R,B.d6S,B.d7e,B.d7d,B.d78,B.d76,B.d74,B.d77,B.d79,B.d75,B.d6O,B.d6P,B.d6Q,B.d6K,B.d7n,B.d7o,B.d7h,B.cbC,B.cbD,B.ftl,B.ftS,B.ftR])
w(B.b4x,B.au0)
x(A.jc,[B.fL8,B.d6Z,B.d7_,B.frl,B.frm,B.frQ,B.dSF,B.dTO,B.dTP,B.dTN,B.dTR,B.dTS,B.dTT,B.dTU,B.dTV,B.dTW,B.dSG,B.dSH,B.fpC,B.d6U,B.dT9,B.dTa,B.dSJ,B.dSK,B.dSP,B.dTA,B.dTB,B.dT3,B.dTe,B.dST,B.dT5,B.dTq,B.dTf,B.dTg,B.dTh,B.dTi,B.dTj,B.dSS,B.dSL,B.dT8,B.dT1,B.dSV,B.dT_,B.dT0,B.dT2,B.dSU,B.dTb,B.dTt,B.dTu,B.dTv,B.dTH,B.dTI,B.dTD,B.dTE,B.dTC,B.dTF,B.dTG,B.d7a,B.d7b,B.d7c,B.d71,B.d73,B.d72,B.d6N,B.d6M,B.d6L,B.d6H,B.d6I,B.d6J,B.d7r,B.d7s,B.d7t,B.d7u,B.d7v,B.d7w,B.d7y,B.d7x,B.d7f,B.d7g,B.d7i,B.d7j,B.d7k,B.d7l,B.d6G,B.d7q,B.d7p,B.ftm])
x(A.lZ,[B.ack,B.NC,B.a9y,B.OG,B.Xm,B.OF,B.Fe])
x(A.ag,[B.Zj,B.V8,B.Vc,B.V9,B.Zi,B.Va,B.Zk,B.Zh,B.PS,B.Zm,B.Zg,B.Zn])
x(A.ah,[B.azI,B.aDG,B.aDJ,B.aDH,B.azH,B.aDI,B.azJ,B.azG,B.azM,B.azK,B.azF,B.azL])
x(A.aw,[B.acM,B.azE,B.bdY,B.acl,B.acj,B.bdZ])
x(A.kd,[B.cbc,B.cb8,B.cbg,B.cbh,B.fMc,B.dSY,B.dSW,B.dTL,B.d7m,B.cbB,B.ftT])
x(A.iU,[B.bjl,B.bvu])})()
A.jk(b.typeUniverse,JSON.parse('{"b4w":{"a9x":[]},"b4x":{"au0":[]},"Zj":{"ag":[],"v":[]},"azI":{"ah":["Zj"]},"acM":{"aw":[],"v":[]},"V8":{"ag":[],"v":[]},"Vc":{"ag":[],"v":[]},"aDG":{"ah":["V8"]},"aDJ":{"ah":["Vc"]},"bjl":{"iU":[]},"V9":{"ag":[],"v":[]},"aDH":{"ah":["V9"]},"Zi":{"ag":[],"v":[]},"Va":{"ag":[],"v":[]},"acl":{"aw":[],"v":[]},"Zk":{"ag":[],"v":[]},"Zh":{"ag":[],"v":[]},"PS":{"ag":[],"v":[]},"Zm":{"ag":[],"v":[]},"acj":{"aw":[],"v":[]},"Zg":{"ag":[],"v":[]},"Zn":{"ag":[],"v":[]},"azH":{"ah":["Zi"]},"bvu":{"iU":[]},"aDI":{"ah":["Va"]},"azE":{"aw":[],"v":[]},"bdY":{"aw":[],"v":[]},"azJ":{"ah":["Zk"]},"azG":{"ah":["Zh"]},"azM":{"ah":["PS"]},"azK":{"ah":["Zm"]},"azF":{"ah":["Zg"]},"azL":{"ah":["Zn"]},"bdZ":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.av
return{J:x("uo"),k:x("M3()"),m:x("bw<n,n>"),F:x("rc"),g:x("aA<jq?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bg>"),Y:x("O<a8<n,R>>"),t:x("O<a8<n,@>>"),r:x("O<jq>"),w:x("O<+file,name(lJ,n)>"),u:x("O<cX>"),s:x("O<n>"),E:x("O<iU>"),a:x("O<dI>"),p:x("O<v>"),Z:x("O<H>"),G:x("bg"),A:x("cA<ah<ag>>"),n:x("ai<jq>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bz<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iF"),e:x("ijU"),af:x("Eq"),U:x("jq"),b:x("cu"),C:x("aD"),aK:x("wf"),ab:x("Fd"),br:x("au0"),v:x("Xn"),N:x("n"),X:x("bo<L>"),Q:x("lV"),D:x("dI"),aw:x("cs<n>"),cd:x("Z<a8<n,@>>"),c7:x("v"),ch:x("bY<ai<jq>>"),aW:x("bY<dI?>"),aY:x("bY<~>"),cx:x("ack"),b1:x("bh<ai<jq>>"),cf:x("bh<dI?>"),d4:x("bh<~>"),c4:x("aCk"),bG:x("aFq"),q:x("n6"),B:x("pv<Fd>"),c6:x("pv<a9y>"),y:x("R"),i:x("L"),z:x("@"),S:x("H"),aQ:x("bg?"),_:x("ai<jq>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jq?"),R:x("aD?"),c:x("Xn?"),d:x("+answerQr,transfer(n,aA<ai<jq>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,NC,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dI?"),cm:x("ac1?"),bk:x("aCk?"),ag:x("aFq?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b1u=new A.ay(C.aC,2,C.r,-1)
D.c1T=new A.a9(C.a4,C.a8,C.x,C.a3q,null,null)
D.b38=new A.o(null,null,null,C.mn,null,D.c1T,C.n)
D.b4C=new A.o(null,null,null,C.mn,null,E.Hk,C.n)
D.adT=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.af9=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.agb=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ahQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fv1=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fJw=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.E_,null,null,null,null,null,null,null,null,null)
D.dcN=x([D.fv1,C.am,D.fJw],y.p)
D.bsb=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dcN,null)
D.fNW=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fzn=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.E_,null,null,null,null,null,null,null,null,null)
D.dtf=x([D.fNW,C.am,D.fzn],y.p)
D.bsl=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dtf,null)
D.fK8=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fDf=new A.y("Enter the access code and password from your organization.",null,G.E_,null,null,null,null,null,null,null,null,null)
D.dqZ=x([D.fK8,C.am,D.fDf],y.p)
D.bsw=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dqZ,null)
D.byy=new A.Q(16,10,16,28)
D.byG=new A.Q(16,14,16,4)
D.bzW=new A.Q(20,0,20,16)
D.bAr=new A.Q(20,8,20,16)
D.akD=new A.Q(24,22,24,20)
D.a1n=new A.a0(63394,"MaterialIcons",!1)
D.anD=new A.a0(63515,"MaterialIcons",!1)
D.bN2=new A.a0(983813,"MaterialIcons",!1)
D.bKp=new A.a0(62867,"MaterialIcons",!1)
D.bO2=new A.ae(D.bKp,44,C.c,null,null,null)
D.bP8=new A.ae(C.l4,null,C.ae,null,null,null)
D.bQx=new A.ae(C.jd,18,null,null,null,null)
D.bSf=new A.ae(D.a1n,26,C.c,null,null,null)
D.bSN=new A.ae(C.H_,null,null,null,null,null)
D.bTm=new A.ae(C.Co,null,null,null,null,null)
D.bUw=new A.ae(W.a1A,null,null,null,null,null)
D.bUQ=new A.ae(C.hv,16,null,null,null,null)
D.bYk=new A.ae(C.ru,16,null,null,null,null)
D.bOk=new A.ae(C.nq,null,null,null,null,null)
D.bZb=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOk,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTU=new A.ae(C.Gy,null,null,null,null,null)
D.bZg=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOG=new A.ae(H.H7,null,null,null,null,null)
D.bZr=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cNf=x([C.fe,C.b_,C.aC],y.O)
D.c3L=new A.a9(C.az,C.aE,C.x,D.cNf,null,null)
D.cMI=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.QJ=x([C.fe,C.aC],y.O)
D.R_=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mN=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dlr=x([C.oT,C.aC],y.O)
D.ecS={iceServers:0}
D.aIC={urls:0}
D.dwW=new A.bw(D.aIC,["stun:stun.l.google.com:19302"],y.m)
D.dwV=new A.bw(D.aIC,["stun:stun1.l.google.com:19302"],y.m)
D.d2B=x([D.dwW,D.dwV],A.av("O<a8<n,n>>"))
D.dwe=new A.bw(D.ecS,[D.d2B],A.av("bw<n,@>"))
D.Io=new B.NC(0,"lanDirect")
D.Sk=new B.NC(1,"cloudStash")
D.dHU=new B.NC(2,"inlineInstant")
D.Sl=new B.NC(3,"webrtcLink")
D.zH=new B.NC(4,"videoCloud")
D.fJv=new A.y("Receive file",null,C.nG,null,null,null,null,null,null,null,null,null)
D.cCB=x([E.api,C.ac,D.fJv],y.p)
D.eZL=new A.cc(C.aN,C.b8,C.j,C.m,null,C.p,null,0,D.cCB,null)
D.ek8=new A.D(C.cj,D.eZL,null)
D.flN=new A.F(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.HN,null,null,null)
D.fvz=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.flN,null,C.L,null,null,null,null,null,null,null)
D.ejn=new A.D(C.BM,D.fvz,null)
D.b8W=new A.ck(C.A,null,null,D.ejn,null)
D.epY=new A.cN(0,null,0,28,null,null,D.b8W,null)
D.eqh=new B.a9y(0,"RTCDataChannelConnecting")
D.aO3=new B.a9y(1,"RTCDataChannelOpen")
D.aO4=new B.a9y(3,"RTCDataChannelClosed")
D.eqi=new B.Fe(0,"RTCIceConnectionStateNew")
D.eqj=new B.Fe(1,"RTCIceConnectionStateChecking")
D.eqk=new B.Fe(2,"RTCIceConnectionStateCompleted")
D.eql=new B.Fe(3,"RTCIceConnectionStateConnected")
D.eqm=new B.Fe(4,"RTCIceConnectionStateCount")
D.eqn=new B.Fe(5,"RTCIceConnectionStateFailed")
D.eqo=new B.Fe(6,"RTCIceConnectionStateDisconnected")
D.aO5=new B.Fe(7,"RTCIceConnectionStateClosed")
D.aO6=new B.Xm(0,"RTCIceGatheringStateNew")
D.eqp=new B.Xm(1,"RTCIceGatheringStateGathering")
D.a7B=new B.Xm(2,"RTCIceGatheringStateComplete")
D.a7C=new B.OF(0,"RTCPeerConnectionStateClosed")
D.aO7=new B.OF(1,"RTCPeerConnectionStateFailed")
D.aO8=new B.OF(2,"RTCPeerConnectionStateDisconnected")
D.aO9=new B.OF(3,"RTCPeerConnectionStateNew")
D.aOa=new B.OF(4,"RTCPeerConnectionStateConnecting")
D.aOb=new B.OF(5,"RTCPeerConnectionStateConnected")
D.eqq=new B.OG(0,"RTCSignalingStateStable")
D.eqr=new B.OG(1,"RTCSignalingStateHaveLocalOffer")
D.eqs=new B.OG(2,"RTCSignalingStateHaveRemoteOffer")
D.eqt=new B.OG(3,"RTCSignalingStateHaveLocalPrAnswer")
D.equ=new B.OG(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aOc=new B.OG(5,"RTCSignalingStateClosed")
D.f3g=new A.au(160,48)
D.bac=new A.fi(2,null,null,null,null,C.aC,null,null,null,null)
D.f4O=new A.a7(16,16,D.bac,null)
D.fyI=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f6f=new A.b2(D.fyI,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fGe=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f6i=new A.b2(D.fGe,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOZ=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f6p=new A.b2(D.fOZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fyi=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f6P=new A.b2(D.fyi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKj=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aR0=new A.b2(D.fKj,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fLI=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f7i=new A.b2(D.fLI,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQq=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f7z=new A.b2(D.fQq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOp=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f7E=new A.b2(D.fOp,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fPC=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new A.b2(D.fPC,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fwV=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f8X=new A.b2(D.fwV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fI5=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f9h=new A.b2(D.fI5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fB0=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f9N=new A.b2(D.fB0,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQw=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f9R=new A.b2(D.fQw,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fxa=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f9X=new A.b2(D.fxa,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fvU=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fab=new A.b2(D.fvU,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fsL=new A.y("NGMY DOC SHARE",null,C.aSo,null,null,null,null,null,null,null,null,null)
D.fu8=new A.y("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fv8=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new A.y("Organization settings",null,C.cA,null,null,null,null,null,null,null,null,null)
D.fAb=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fB9=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fBF=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fEu=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fHf=new A.y("Send to their Doc Share",null,C.nD,null,null,null,null,null,null,null,null,null)
D.fHB=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fHU=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fIt=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fIA=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fIY=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.f1,null,null,null,null,null,null,null,null,null)
D.fMd=new A.y("Share files & videos\nwith a scan.",null,C.aSq,null,null,null,null,null,null,null,null,null)
D.fMx=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.heU=new B.Zg(null)
D.aaK=new B.ack(0,"docShare")
D.aaL=new B.ack(1,"gate")
D.Vo=new B.ack(2,"gateNoIndividual")})();(function staticFields(){$.aNZ=null
$.ff4=function(){var x=y.N
return A.T(x,x)}()
$.Gt=A.T(y.N,y.D)
$.agq=A.T(y.N,A.av("lJ"))
$.Rb=A.T(y.N,y.D)
$.ffD=A.T(y.N,A.av("ac1"))
$.cbu=A.T(y.S,A.av("bvR"))
$.he5=1
$.i1g=null
$.i1f=null
$.hTw=null
$.h2W=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iko","hvA",()=>new B.cnf())
x($,"iij","h6H",()=>C.a.t(A.bx(A.bx(A.bx(A.H3(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["7wnEw8zE4p6BOYM54qrgpe7brhI="]=a.current})($__dart_deferred_initializers__);