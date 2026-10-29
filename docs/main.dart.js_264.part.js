((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cj0:function cj0(){},
hJw(d){var x=null,w=new B.b3x(d,D.eif,new A.pq(x,x,y.c6),new A.pq(x,x,y.B))
w.bxV(d)
return w},
b3x:function b3x(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ciW:function ciW(d){this.a=d},
ciX:function ciX(d){this.a=d},
ciY:function ciY(d){this.a=d},
ciV:function ciV(d){this.a=d},
ciZ:function ciZ(d){this.a=d},
hJx(d,e){var x=y.N
x=new B.b3y(d,e,A.U(x,y.e),A.U(x,y.z))
x.bxW(d,e)
return x},
b3y:function b3y(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cj1:function cj1(d){this.a=d},
cj2:function cj2(d){this.a=d},
cj3:function cj3(d){this.a=d},
cj4:function cj4(d){this.a=d},
cj5:function cj5(d){this.a=d},
cj6:function cj6(d){this.a=d},
cj7:function cj7(d){this.a=d},
cj8:function cj8(d){this.a=d},
h_p(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yJ.LP(x,"ngmy_doc_share_v1",new B.fl5(),1)},
hQ5(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.f_(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.A4(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aK(d)
return x}catch(w){return v}return v},
QU(d,e){return B.i4h(d,e)},
i4h(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QU=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNd
x=7
return A.b(o==null?$.aNd=B.h_p():o,$async$QU)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mI(s,"blobs","readwrite")
C.iM.mm(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.pA(q),$async$QU)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb put] "+A.u(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QU,w)},
QT(d){return B.i4g(d)},
i4g(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNd
x=7
return A.b(o==null?$.aNd=B.h_p():o,$async$QT)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iM.zs(J.mG(r,"blobs"),d),$async$QT)
case 8:q=f
x=9
return A.b(J.pA(r),$async$QT)
case 9:o=B.hQ5(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QT,w)},
agE(d){return B.i4f(d)},
i4f(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNd
x=7
return A.b(p==null?$.aNd=B.h_p():p,$async$agE)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iM.FI(J.mG(r,"blobs"),d)
x=8
return A.b(J.pA(r),$async$agE)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.u(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agE,w)},
fl5:function fl5(){},
hSo(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bo4(w,v))}return u},
hpq(d,e){var x,w={},v=A.aVD("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fIu(w,v,e)
C.w5.ym(v,"change",new B.fIw(w,v,!1))
C.w5.ym(v,"cancel",new B.fIv(w))
$.eW.mt()
v.click()
A.bN(C.ah2,new B.fIt(w),y.H)},
fIu:function fIu(d,e,f){this.a=d
this.b=e
this.c=f},
fIw:function fIw(d,e,f){this.a=d
this.b=e
this.c=f},
fIv:function fIv(d){this.a=d},
fIt:function fIt(d){this.a=d},
CY(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CY=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTr()?3:4
break
case 3:x=5
return A.b(B.hkw(e,d,s,!0,!1,f,g,h,!1,i),$async$CY)
case 5:x=1
break
case 4:x=6
return A.b(B.Qy(d,s,f,g,h,i),$async$CY)
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
return A.b(B.Ik(s,d),$async$CY)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fgx(s,d),$async$CY)
case 14:x=12
return A.b(r.hkw(q,p,o,n,m,l,k,j,a1,i),$async$CY)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cm(A.e9(new B.fIJ(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cm(A.e9(new B.fIK(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CY,w)},
Qy(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qy=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZi(e),$async$Qy)
case 3:u=k
x=4
return A.b(B.aoK(d,e,!1),$async$Qy)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Ik(e,d),$async$Qy)
case 7:if(k){v=D.a9x
x=1
break}x=8
return A.b(B.UB(e),$async$Qy)
case 8:v=t?D.UH:D.a9y
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZg(d,e)){v=D.a9x
x=1
break}x=11
return A.b(B.UB(e),$async$Qy)
case 11:v=t?D.UH:D.a9y
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fVA(d,e)){v=D.a9x
x=1
break}x=14
return A.b(B.UB(e),$async$Qy)
case 14:v=D.UH
x=1
break
case 13:v=t?D.UH:D.a9y
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qy,w)},
fgx(d,e){var x=0,w=A.j(y.y),v
var $async$fgx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZg(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZi(d),$async$fgx)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgx,w)},
hkw(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cm(A.e9(new B.fng(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hfF(d,e,f,g,h,i,j){return new B.YP(e,j,d,g,h,i,f,null)},
fpd(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fpd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fpg(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fpd)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpd,w)},
fpI(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fpI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fpK(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fpI)
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
return A.i($async$fpI,w)},
h_y(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fB4(d,e){var x=0,w=A.j(y.H),v
var $async$fB4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UB(e),$async$fB4)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fB4,w)},
fIJ:function fIJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIK:function fIK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abW:function abW(d,e){this.a=d
this.b=e},
fng:function fng(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YP:function YP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayO:function ayO(){this.c=this.a=this.d=null},
d2l:function d2l(d,e){this.a=d
this.b=e},
d2i:function d2i(d){this.a=d},
d2k:function d2k(d){this.a=d},
d2j:function d2j(d){this.a=d},
d2n:function d2n(){},
d2m:function d2m(d){this.a=d},
aco:function aco(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBl:function aBl(d,e){this.a=d
this.b=e},
aEx:function aEx(d,e,f){this.a=d
this.b=e
this.c=f},
fpg:function fpg(d,e,f){this.a=d
this.b=e
this.c=f},
fpe:function fpe(d){this.a=d},
fpf:function fpf(d,e,f){this.a=d
this.b=e
this.c=f},
fpK:function fpK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpJ:function fpJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7v(d,e,f,g,h){return B.hEq(d,e,f,g,h)},
hEq(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7v=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iO(r.dz(d,new B.c7w(s,e,h,g,f,q),y.g),y.l),$async$c7v)
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
return A.i($async$c7v,w)},
aZd(d,e,f,g,h){return B.hEr(d,e,f,g,h)},
hEr(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZd=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.au2("GET",d)
o=A.fS_()
if(o==null)o=new A.LC(A.a([],y.W))
x=7
return A.b(o.eZ(0,s).d7(0,C.Fk),$async$aZd)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cg(),$async$aZd)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BC(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share pull url web] "+f+": "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZd,w)},
aZc(d){return B.hEo(d)},
hEo(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vg(d,null).d7(0,C.nZ),$async$aZc)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aJ(0,A.lS(A.lP(p.e)).cA(0,p.w),null)
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
$.am.$1("[doc share lan manifest web] "+A.u(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZc,w)},
c7u(d){return B.hEp(d)},
hEp(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vg(d,null).d7(0,C.pV),$async$c7u)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lS(A.lP(q.e)).cA(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
$.am.$1("[doc share lan text web] "+A.u(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7u,w)},
c7w:function c7w(d,e,f,g,h,i){var _=this
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
Ii(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hEw(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ii(C.a.b5(u,v.length))}return null},
hEx(d){var x=B.Ii(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hEs(){var x,w=$.px(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.h2(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a6z(d){return B.hEt(d)},
hEt(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bJ),$async$a6z)
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
$.am.$1("[doc share my code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6z,w)},
a6A(d,e){return B.hEu(d,e)},
hEu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6A=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cH,null),$async$a6A)
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
$.am.$1("[doc share my code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6A,w)},
BB(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BB)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ii(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6B(r),$async$BB)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BB)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Ii(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BB)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hEs()
x=14
return A.b(B.a6B(m),$async$BB)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a7().ac()
x=15
return A.b(B.a6A("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BB)
case 15:k=f
x=16
return A.b(B.a6A("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BB)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BB)
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
return A.i($async$BB,w)},
a6B(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ii(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6B)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6B,w)},
a6C(d,e,f,g){return B.hEy(d,e,f,g)},
hEy(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6C=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Ii(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6B(r),$async$a6C)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c7C())>1048576||g.b6(d,new B.c7D())){v=B.Eq(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6N("myCode",d,a0),$async$a6C)
case 4:u=a3
try{t=C.S.aJ(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Eq(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZl(u,g.gM(d),a0),$async$a6C)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.px().aw(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c7E(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZe(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],i,y.z),q),$async$a6C)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6C,w)},
Eq(d,e,f,g,h){return B.hEv(d,e,f,g,h)},
hEv(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eq=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Eq)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c7y())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.px().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cG.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Im(a9,q)
a0=new A.Kc(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Eq)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aV(J.k(o),5,"0")
a1=$.eZ().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oZ(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaa(a1.a,a4,"media",a1.d,a2).wX(m,n,new A.DJ(!0,q.c)),$async$Eq)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a6(0),$async$Eq)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPJ(r),$async$Eq)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dz(a6,new B.c7z(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZe(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],e,d),a8),$async$Eq)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPJ(r),$async$Eq)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Eq,w)},
aZe(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6z(t),$async$aZe)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7x(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6A(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZe,w)},
Nc(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Nc=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6z("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Nc)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cn(s)){v=0
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
return A.b(B.aZf(k,a0),$async$Nc)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZk(h),$async$Nc)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UI(g,a0),$async$Nc)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c7A(),q),n)
d=A.C(new A.a_(r,new B.c7B(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.db(d,0,A.dI(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6A("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Nc)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nc,w)},
aZf(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cn(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a4(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.i83(k,j)
C.d.v(s,i)
x=5
return A.b(B.CW(l,m,"Received via My Code",t,e,i),$async$aZf)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPJ(s),$async$aZf)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZf,w)},
c7C:function c7C(){},
c7D:function c7D(){},
c7E:function c7E(){},
c7y:function c7y(){},
c7z:function c7z(){},
c7x:function c7x(){},
c7A:function c7A(){},
c7B:function c7B(){},
fIG(d,e){var x=0,w=A.j(y.H)
var $async$fIG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cm(A.e9(new B.fIH(e),!1,null,y.H)),$async$fIG)
case 2:return A.h(null,w)}})
return A.i($async$fIG,w)},
bCM(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCM=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cm(A.e9(new B.fII(g,e,f),!1,null,y.y)),$async$bCM)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCM,w)},
fIH:function fIH(d){this.a=d},
fII:function fII(d,e,f){this.a=d
this.b=e
this.c=f},
Uy:function Uy(d,e){this.c=d
this.a=e},
aCI:function aCI(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dP7:function dP7(d,e){this.a=d
this.b=e},
UC:function UC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCL:function aCL(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dQg:function dQg(d){this.a=d},
dQh:function dQh(d){this.a=d},
dQi:function dQi(d){this.a=d},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQj:function dQj(d){this.a=d},
dQk:function dQk(d){this.a=d},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQn:function dQn(d,e){this.a=d
this.b=e},
dQo:function dQo(d){this.a=d},
dQr:function dQr(){},
dQp:function dQp(d){this.a=d},
dQq:function dQq(d,e){this.a=d
this.b=e},
bih:function bih(){},
Uz:function Uz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCJ:function aCJ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dP8:function dP8(d){this.a=d},
dP9:function dP9(d){this.a=d},
fVB(d){var x=d.hV
if(x>=0)return C.o.N(x)
return 10},
hEA(d){var x=d.kL
if(x>=0)return x
return 4.99},
hEz(d){var x=d.lr,w=y.N
w=x.j9(x,new B.c7G(),w,w)
return w},
haJ(d){var x=d.kM,w=y.N
w=x.j9(x,new B.c7H(),w,w)
return w},
aZi(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aZi)
case 7:s=f
r=A.u(p)
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
return A.i($async$aZi,w)},
a6E(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a6E)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a6E)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6E,w)},
UB(d){var x=0,w=A.j(y.H),v,u
var $async$UB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$UB)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UB,w)},
fVA(d,e){var x,w,v
if(B.hEA(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hEz(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aZg(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.haJ(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
haK(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.haJ(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bR(A.dE(f,0,0,0,0,0).a).a7().ac())
d.kM=w},
aoL(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aoL)
case 7:s=f
r=A.u(p)
r=A.f5(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoL,w)},
aoM(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoL(d),$async$aoM)
case 3:u=f
x=5
return A.b(A.az(),$async$aoM)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoM,w)},
aoK(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fVB(d)
if(u<=0){v=!1
x=1
break}if(B.fVA(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoL(e),$async$aoK)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoK,w)},
aZh(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ik(e,d),$async$aZh)
case 3:if(g){v=-1
x=1
break}u=B.fVB(d)
if(u<=0){v=-1
x=1
break}if(B.fVA(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoL(e),$async$aZh)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZh,w)},
c7J(d,e,f){var x=0,w=A.j(y.y),v
var $async$c7J=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Ik(e,d),$async$c7J)
case 3:if(h){v=!1
x=1
break}v=B.aoK(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7J,w)},
c7I(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c7I=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c7J(d,u,i.gTr()),$async$c7I)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7I,w)},
a6D(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6D=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTr()){v=!0
x=1
break}if(B.aZg(d,u)){v=!0
x=1
break}x=5
return A.b(A.lh(u,C.S4),$async$a6D)
case 5:x=k?3:4
break
case 3:B.haK(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6D)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kW(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.S4,"Doc Share for Organizations"),$async$a6D)
case 7:if(!k){v=!1
x=1
break}B.haK(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6D)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6D,w)},
c7G:function c7G(){},
c7H:function c7H(){},
fJl(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fJl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fJl)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fdg.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hR([r],e.c))
s.toString
$.fdg.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJl,w)},
ian(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fdg.bq($.fdg,new B.fJn(d))},
fJn:function fJn(d){this.a=d},
feC(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$feC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jk,null,y.H),$async$feC)
case 3:C.A9.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$feC,w)},
afw(d,e,f){var x=0,w=A.j(y.H),v
var $async$afw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fdK.n(0,d,new B.abD(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$afw)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afw)
case 2:return A.h(null,w)}})
return A.i($async$afw,w)},
afq(d){return B.hUe(d)},
hUe(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fdK.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afq)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aJ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fii(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abD(r)
$.fdK.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afq,w)},
Qo(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.G7.n(0,d,u)
x=3
return A.b(B.QU(d,u),$async$Qo)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qo,w)},
aNz(d){return B.hUc(d)},
hUc(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.G7.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QT(d),$async$aNz)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.G7.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aNz)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aK(r)
x=!J.cn(q)?9:10
break
case 9:B.Qo(d,q)
x=11
return A.b(J.hx(s,d),$async$aNz)
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
return A.i($async$aNz,w)},
hQs(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.ce(J.f_(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.ce(A.A4(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.ce(d)),y.K)
return A.f9(null,y.K)},
a1h(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fM(r,"loadend",new B.fns(r,t),!1,s)
A.fM(r,"error",new B.fnt(t),!1,s)
r.readAsArrayBuffer(d)
v=u.io(0,C.Md,new B.fnu())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1h,w)},
aNT(d,e,f){return B.hWt(d,e,f)},
hWt(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNT=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1h(i),$async$aNT)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QU(o,p),$async$aNT)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afw(k,j,s),$async$aNT)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.u(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNT,w)},
aNS(d,e,f){return B.hWs(d,e,f)},
hWs(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNS=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNT(d,e,f),$async$aNS)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1h(f),$async$aNS)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.G7.n(0,s,r)
$.QF.n(0,s,r)
x=11
return A.b(B.Qo(s,r),$async$aNS)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.u(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNS,w)},
BC(d,e,f,g,h,i){return B.hEJ(d,e,f,g,h,i)},
hEJ(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BC=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.S(Date.now(),0,!1).a7().ac(),a0,f,B.aZo(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qo(s,d),$async$BC)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BC)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cV.gcB().aK(d)),$async$BC)
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
return A.b(B.AE(e),$async$BC)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.Gj(e,j),$async$BC)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BC,w)},
UD(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UD=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AE(d),$async$UD)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cG.aw(99999)
n=p.b
l=o.type
l.toString
k=B.haM(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a7().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZo(),null)
$.afZ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1h(o),$async$UD)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.G7.n(0,h,g)
$.QF.n(0,h,g)
B.Qo(h,g)
x=9
break
case 10:x=11
return A.b(B.aNS(d,m,o),$async$UD)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gj(d,t),$async$UD)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UD,w)},
fVF(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fVF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.haM(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Il(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.BC(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVF,w)},
Il(d,e,f,g,h,i){return B.hEI(d,e,f,g,h,i)},
hEI(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Il=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kc(A.dI(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Il)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h5(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rs(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.QU(k,l),$async$Il)
case 11:J.ci(q,k);++p
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
return A.b(j.a6(0),$async$Il)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.QU(k,new Uint8Array(A.ce(n))),$async$Il)
case 15:J.ci(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afw(r,q,g),$async$Il)
case 16:f=new B.jn(i,a1,a0,g,new A.S(Date.now(),0,!1).a7().ac(),a2,null,B.aZo(),null)
x=17
return A.b(B.AE(d),$async$Il)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.Gj(d,e),$async$Il)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Il,w)},
UF(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UF=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afZ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1h(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afq(s),$async$UF)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QT(u[o]),$async$UF)
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
v=A.A4(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QF.h(0,s)
if(i==null)i=$.G7.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rq(d,e),$async$UF)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QF.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A4(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UF,w)},
haM(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rq(d,e){return B.hEK(d,e)},
hEK(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rq=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QF.h(0,f)
if(e==null)e=$.G7.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.afZ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1h(s),$async$rq)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.G7.n(0,f,r)
$.QF.n(0,f,r)
B.Qo(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.u(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afq(f),$async$rq)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axB(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QT(g[l]),$async$rq)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.anK()
if(!C.aH.gam(r)){$.G7.n(0,f,r)
$.QF.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNz(f),$async$rq)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QF.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UF(a0,a1,0,g),$async$rq)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ce(i))
$.G7.n(0,f,h)
$.QF.n(0,f,h)
B.Qo(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rq,w)},
hEN(d){var x,w,v=$.afZ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hEO(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hR([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hEL(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoS(d,e,f,g,h){return B.hEM(d,e,f,g,h)},
hEM(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoS=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afZ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1h(s),$async$aoS)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rq(g,e),$async$aoS)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eZ().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ih(d).wX(h,r,new A.DJ(!0,e.c)),$async$aoS)
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
$.am.$1("[doc share upload web] "+e.b+": "+A.u(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoS,w)},
haO(d,e,f,g,h){var x,w,v,u,t=$.haN
$.haN=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7U.n(0,t,new B.buP(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axB(u)))
return t},
fVG(d){var x=0,w=A.j(y.H)
var $async$fVG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVG,w)},
Im(d,e){var $async$Im=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afZ.h(0,h)
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
return A.q8(B.UF(d,e,p,o<q?o:q),$async$Im,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q8(A.FF(n),$async$Im,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q8(B.afq("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Im,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q8(B.QT(h[l]),$async$Im,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q8(A.FF(k),$async$Im,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q8(B.rq(d,e),$async$Im,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q8(A.FF(A.A4(j,p,o<i?o:i)),$async$Im,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q8(null,0,w)
case 2:return A.q8(t.at(-1),1,w)}})
var x=0,w=A.hjp($async$Im,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hle(w)},
aZq(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7U.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4g(),$async$aZq)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZq,w)},
UE(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7U.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4g(),$async$UE)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afw(r.c,u,r.z),$async$UE)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a7().ac(),r.f,r.r,B.aZo(),null)
u=r.a
x=5
return A.b(B.AE(u),$async$UE)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.Gj(u,s),$async$UE)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UE,w)},
a6K(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7U.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agE(u[s]),$async$a6K)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6K,w)},
c7W(d,e,f){var x=0,w=A.j(y.H)
var $async$c7W=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzP(d,e,f),$async$c7W)
case 2:return A.h(null,w)}})
return A.i($async$c7W,w)},
c7X(d,e,f){var x=0,w=A.j(y.H)
var $async$c7X=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzQ(d,e,f),$async$c7X)
case 2:return A.h(null,w)}})
return A.i($async$c7X,w)},
Er(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Er=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AE(d),$async$Er)
case 2:p=g
J.nt(p,new B.c7V(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.G7.W(0,v)
$.afZ.W(0,e)
x=3
return A.b(B.afq(v),$async$Er)
case 3:u=g
$.fdK.W(0,v)
x=4
return A.b(A.az(),$async$Er)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Er)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Er)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agE(s[q]),$async$Er)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agE(v),$async$Er)
case 13:x=14
return A.b(B.Gj(d,p),$async$Er)
case 14:return A.h(null,w)}})
return A.i($async$Er,w)},
aZp(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rq(d,e),$async$aZp)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.feC(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZp,w)},
AE(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AE)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aJ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fnv(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AE,w)},
Gj(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Gj)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.frv(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gj)
case 3:return A.h(null,w)}})
return A.i($async$Gj,w)},
bzP(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AE(d),$async$bzP)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.flV(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDs(f))
x=4
return A.b(B.Gj(d,u),$async$bzP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzP,w)},
bzQ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AE(d),$async$bzQ)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.flW(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cI9(f))
x=4
return A.b(B.Gj(d,u),$async$bzQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzQ,w)},
abD:function abD(d){this.a=d},
fii:function fii(){},
fns:function fns(d,e){this.a=d
this.b=e},
fnt:function fnt(d){this.a=d},
fnu:function fnu(){},
c7V:function c7V(d){this.a=d},
buP:function buP(d,e,f,g,h,i,j,k,l){var _=this
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
fnv:function fnv(){},
frv:function frv(){},
flV:function flV(d){this.a=d},
flW:function flW(d){this.a=d},
a6L(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b6(d,new B.c8_())?3:4
break
case 3:x=5
return A.b(B.aZr(d,e),$async$a6L)
case 5:u=g
if(u!=null){t=u.c
B.Ne(d,u.b,e,t)}v=u
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
return A.b(B.aZm(s),$async$a6L)
case 10:case 9:if(g){v=new A.PN(1,D.RI,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UG(d,e),$async$a6L)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UL(!0,!0,d,e),$async$a6L)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ne(d,D.zj,e,t)
v=new A.PN(p,D.zj,t)
x=1
break}v=B.c7Z(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6L,w)},
UG(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6N(null,d,e),$async$UG)
case 3:p=g
try{u=C.S.aJ(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZl(p,d.length,e),$async$UG)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c7X(e,C.d.gI(d).a,r.b),$async$UG)
case 7:case 6:q=r.a
x=8
return A.b(B.Ne(d,D.RI,e,q),$async$UG)
case 8:v=new A.PN(d.length,D.RI,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UG,w)},
UH(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mF)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6M(d,e),$async$UH)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c7S(s,d,e,t),$async$UH)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZm(t),$async$UH)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rq(e,d),$async$UH)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UG(A.a([d],y.r),e),$async$UH)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UH,w)},
UJ(){var x=0,w=A.j(y.H)
var $async$UJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fVz(),$async$UJ)
case 2:x=3
return A.b(B.aQ_(),$async$UJ)
case 3:return A.h(null,w)}})
return A.i($async$UJ,w)},
a6M(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZo()
x=3
return A.b(B.c7W(e,d.a,u),$async$a6M)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6M,w)},
Ne(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ne=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RI&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6M(p,f),$async$Ne)
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
return A.b(B.c7R(o,p,u,f),$async$Ne)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7S(o,p,f,t),$async$Ne)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c7Q(o,u,p,f),$async$Ne)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ne,w)},
aZr(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7Y(e,d),$async$aZr)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UL(!1,!0,d,e),$async$aZr)
case 4:u=g
if(u!=null){t=u.b
v=new A.PN(u.a,D.zj,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZr,w)},
c7Y(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UF(d,s,0,1),$async$c7Y)
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
return A.i($async$c7Y,w)},
c7Z(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6N(null,d,e),$async$c7Z)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.haL(u)
if(t.length>800){v=null
x=1
break}v=new A.PN(d.length,D.dB0,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7Z,w)},
aoT(d,e,f){return B.hER(d,e,f)},
hER(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoT=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mH(g,1)
x=B.fVE(g)?3:4
break
case 3:x=5
return A.b(B.c7T(g),$async$aoT)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mH(g,13))
try{k=B.Es(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mH(g,13))
u=9
x=12
return A.b(B.aZk(q),$async$aoT)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UI(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.u(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fVD(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UI(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.In(C.a.i(J.mH(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.In(C.a.i(J.mH(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.In(h,d,a0)
x=1
break}if(J.f2(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UI(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoT,w)},
In(d,e,f){return B.hEP(d,e,f)},
hEP(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$In=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cE(A.u(s)+"/manifest.json",0,null)
q=A.cE(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZc(r),$async$In)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZc(A.cE(s,0,null)),$async$In)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7v(o,r,a1,n,a2),$async$In)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c7u(q),$async$In)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UI(l,a2),$async$In)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cn(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ab(d)
$.am.$1("[doc share lan import] "+A.u(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$In,w)},
a6N(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6N=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rq(f,r),$async$a6N)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cV.gcB().aK(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a7().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
UI(d,e){return B.hEQ(d,e)},
hEQ(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UI=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aJ(0,a2,null)
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
e=J.aV(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cI.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BC(i,a3,d,k,l,o),$async$UI)
case 9:h=a5
if(h!=null)J.ci(n,h)
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
$.am.$1("[doc share bundle] "+A.u(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$UI,w)},
Nd:function Nd(d,e){this.a=d
this.b=e},
c8_:function c8_(){},
a0R(d){var x=A.P(d).ax.a===C.I,w=x?D.aeJ:D.acx,v=x?D.aga:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.adM:C.aL
return new A.aFL([w,s,v,u,t,x?C.fd:C.bT])},
hq9(d,e){var x=e?C.w.j(0.72):C.aW
return A.cb(null,x,!0,null,new B.fNt(e),d,null,!0,!0,y.N)},
c7F(d,e,f,g,h,i,j,k,l){return new B.UA(e,l,d,f,k,j,g,h,i,null)},
YR(d,e,f,g,h,i,j){return new B.bcX(g,h,j,e,i,d,f,null)},
fNt:function fNt(d){this.a=d},
YO:function YO(d,e){this.c=d
this.a=e},
ayN:function ayN(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2h:function d2h(d){this.a=d},
d2f:function d2f(d){this.a=d},
d2g:function d2g(d){this.a=d},
but:function but(){},
UA:function UA(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCK:function aCK(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dQe:function dQe(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dPa:function dPa(d){this.a=d},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPh:function dPh(d,e,f){this.a=d
this.b=e
this.c=f},
dPg:function dPg(d){this.a=d},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d){this.a=d},
dPz:function dPz(d,e,f){this.a=d
this.b=e
this.c=f},
dPw:function dPw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPf:function dPf(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPG:function dPG(){},
dPl:function dPl(d){this.a=d},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e){this.a=d
this.b=e},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPQ:function dPQ(){},
dPR:function dPR(){},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPU:function dPU(){},
dPV:function dPV(d){this.a=d},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPI:function dPI(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPL:function dPL(d){this.a=d},
dPM:function dPM(d){this.a=d},
dPi:function dPi(){},
dPj:function dPj(d){this.a=d},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e,f){this.a=d
this.b=e
this.c=f},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d,e,f){this.a=d
this.b=e
this.c=f},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPq:function dPq(d){this.a=d},
dPn:function dPn(d,e,f){this.a=d
this.b=e
this.c=f},
dPr:function dPr(d){this.a=d},
dPs:function dPs(d){this.a=d},
dPt:function dPt(){},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPm:function dPm(d,e,f){this.a=d
this.b=e
this.c=f},
dPp:function dPp(){},
dPF:function dPF(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dPW:function dPW(d){this.a=d},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPY:function dPY(d){this.a=d},
dQb:function dQb(d){this.a=d},
dQ9:function dQ9(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQc:function dQc(){},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
dQ6:function dQ6(d,e,f){this.a=d
this.b=e
this.c=f},
dQ4:function dQ4(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(d,e){this.a=d
this.b=e},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
ayK:function ayK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcW:function bcW(d,e,f){this.c=d
this.d=e
this.a=f},
d2d:function d2d(){},
d2e:function d2e(){},
abX:function abX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d2B:function d2B(){},
d2A:function d2A(d){this.a=d},
YQ:function YQ(d,e,f){this.c=d
this.d=e
this.a=f},
ayP:function ayP(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2x:function d2x(d){this.a=d},
d2y:function d2y(d,e,f){this.a=d
this.b=e
this.c=f},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2t:function d2t(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2o:function d2o(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2q:function d2q(d){this.a=d},
d2w:function d2w(d){this.a=d},
d2s:function d2s(d){this.a=d},
d2p:function d2p(d){this.a=d},
YN:function YN(d,e,f){this.c=d
this.d=e
this.a=f},
ayM:function ayM(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d2a:function d2a(d){this.a=d},
d29:function d29(d,e){this.a=d
this.b=e},
d2b:function d2b(d){this.a=d},
d28:function d28(d,e){this.a=d
this.b=e},
d2c:function d2c(d){this.a=d},
d27:function d27(d,e){this.a=d
this.b=e},
d23:function d23(d){this.a=d},
d24:function d24(d){this.a=d},
d25:function d25(d,e){this.a=d
this.b=e},
d26:function d26(d){this.a=d},
Pp:function Pp(d,e,f){this.c=d
this.d=e
this.a=f},
ayS:function ayS(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d2O:function d2O(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2S:function d2S(d,e){this.a=d
this.b=e},
d2T:function d2T(d){this.a=d},
d2V:function d2V(d){this.a=d},
d2U:function d2U(d){this.a=d},
YS:function YS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayQ:function ayQ(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d2K:function d2K(d,e){this.a=d
this.b=e},
d2L:function d2L(d,e){this.a=d
this.b=e},
d2C:function d2C(d,e,f){this.a=d
this.b=e
this.c=f},
d2D:function d2D(d){this.a=d},
d2E:function d2E(){},
d2J:function d2J(){},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2G:function d2G(d,e){this.a=d
this.b=e},
d2H:function d2H(d,e){this.a=d
this.b=e},
d2I:function d2I(d,e){this.a=d
this.b=e},
abV:function abV(d,e){this.c=d
this.a=e},
d22:function d22(d){this.a=d},
YM:function YM(d){this.a=d},
ayL:function ayL(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YT:function YT(d,e){this.c=d
this.a=e},
ayR:function ayR(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d2N:function d2N(d){this.a=d},
d2M:function d2M(d){this.a=d},
bcX:function bcX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hES(){var x,w=$.px(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.h2(v)},
Nf(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Nf)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Nf)
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
$.am.$1("[doc share video cloud] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nf,w)},
a6O(d){return B.hET(d)},
hET(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6O)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6O)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6O,w)},
UK(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nf(),$async$UK)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a7().ac())
r.n(s,d,t)
x=4
return A.b(B.a6O(s),$async$UK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UK,w)},
UL(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UL)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.T(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c81(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hES()
t=A.T(u).k("M<1,a5<m,aD>>")
r=A.C(new A.M(u,new B.c82(s),t),t.k("ak.E"))
x=6
return A.b(B.Nf(),$async$UL)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=7
return A.b(B.a6O(q),$async$UL)
case 7:x=8
return A.b(B.a6P(r,u,g,s),$async$UL)
case 8:v=new A.bow(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UL,w)},
aoU(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nf(),$async$aoU)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoU,w)},
c83(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c83=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nf(),$async$c83)
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
return A.i($async$c83,w)},
a6P(d,e,f,g){return B.hEU(d,e,f,g)},
hEU(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6P=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoS("media",r,new B.c80(s,e,g),f,q),$async$a6P)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UK(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6P)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UK(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$a6P)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UK(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6P)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6P,w)},
Es(d,e,f){return B.hEV(d,e,f)},
hEV(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Es=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Es)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoU(b3),$async$Es)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ku,null,g),$async$Es)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoU(b3),$async$Es)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nf(),$async$Es)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cn(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
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
a8=$.eZ().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oZ(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaa(a8.a,b0,"media",a8.d,a9).CB(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZd(k,n,o,s,b7),$async$Es)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.am.$1("[doc share video cloud] download "+A.u(o)+": "+A.u(i))
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
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eZ().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oZ(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaa(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Es)
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
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6O(e),$async$Es)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Es,w)},
c81:function c81(){},
c82:function c82(d){this.a=d},
c80:function c80(d,e,f){this.a=d
this.b=e
this.c=f},
aQ_(){var x=0,w=A.j(y.H),v,u
var $async$aQ_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hPR=null
v=y.H
u=A.dS(null,v)
x=2
return A.b(u,$async$aQ_)
case 2:u=A.dS(null,v)
x=3
return A.b(u,$async$aQ_)
case 3:u=$.h_K
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dS(u,v),$async$aQ_)
case 4:$.h_K=$.hYk=$.hYl=null
return A.h(null,w)}})
return A.i($async$aQ_,w)},
fr6(d){var x=0,w=A.j(y.H),v,u
var $async$fr6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6m){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fr7(new A.bX(u,y.aY))
x=3
return A.b(u.io(0,C.hO,new B.fr8()),$async$fr6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fr6,w)},
hYi(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hEC(x):x},
h_O(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.aoW(u)
x=1
break}v=B.fVD(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_O,w)},
h_N(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.aoX(u)
x=1
break}v=B.fVD(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_N,w)},
fJ5(d){var x=0,w=A.j(y.T),v
var $async$fJ5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoX(d),$async$fJ5)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJ5,w)},
bAG(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h_N(d),$async$bAG)
case 3:q=f
if(q==null){x=1
break}t=C.S.aJ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAG,w)},
ffq(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ffq=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UE(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BC(d.anK(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffq,w)},
Gl(d,e,f){return B.i_I(d,e,f)},
i_I(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gl=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h_O(a1),$async$Gl)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aJ(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b5(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hs2().aDH(D.doX,null),$async$Gl)
case 4:l=d.h_K=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axB(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.frE(f,k,new B.frF(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a7f(0,new B.WU(r,"offer")),$async$Gl)
case 5:d=l
x=7
return A.b(l.aky(0),$async$Gl)
case 7:x=6
return A.b(d.a77(0,a4),$async$Gl)
case 6:x=8
return A.b(B.fr6(l),$async$Gl)
case 8:x=9
return A.b(l.aot(),$async$Gl)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hYi(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoY(m,h),$async$Gl)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.haL(h)
case 11:v=new A.bnO(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gl,w)},
fr7:function fr7(d){this.a=d},
fr8:function fr8(){},
frF:function frF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
frE:function frE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
frD:function frD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i1A(d){switch(d){case"new":return D.eig
case"checking":return D.eih
case"connected":return D.eij
case"completed":return D.eii
case"failed":return D.eil
case"disconnected":return D.eim
case"closed":return D.aMf
case"count":return D.eik}return D.aMf},
i1B(d){switch(d){case"new":return D.aMg
case"gathering":return D.ein
case"complete":return D.a6m}return D.aMg},
ibR(d){switch(d){case"stable":return D.eio
case"have-local-offer":return D.eip
case"have-local-pranswer":return D.eir
case"have-remote-offer":return D.eiq
case"have-remote-pranswer":return D.eis
case"closed":return D.aMm}return D.aMm},
ia4(d){switch(d){case"new":return D.aMj
case"connecting":return D.aMk
case"connected":return D.aMl
case"closed":return D.a6n
case"disconnected":return D.aMi
case"failed":return D.aMh}return D.a6n},
a96:function a96(d,e){this.a=d
this.b=e},
Of:function Of(d,e){this.a=d
this.b=e},
WT:function WT(d,e){this.a=d
this.b=e},
Oe:function Oe(d,e){this.a=d
this.b=e},
EV:function EV(d,e){this.a=d
this.b=e},
cj_:function cj_(){},
fXm(d){var x=new B.EU()
x.a=d
x.b=!0
return x},
EU:function EU(){this.b=this.a=$},
a95:function a95(){},
atd:function atd(){},
WU:function WU(d,e){this.a=d
this.b=e},
fVz(){var x=0,w=A.j(y.H)
var $async$fVz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVz,w)},
fVC(d,e,f){var x=0,w=A.j(y.T),v
var $async$fVC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mF))){v=null
x=1
break}v=B.fJl(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVC,w)},
haL(d){var x,w=F.abZ.a40(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cV.gcB().aK(x)}return C.cV.gcB().aK(w)},
hEB(d){var x,w,v=C.cI.aK(d)
try{x=C.cg.cA(0,F.abY.bcs(v,!1))
return x}catch(w){x=C.cg.cA(0,v)
return x}},
fVD(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hEB(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.cg.cA(0,C.cI.aK(x))
return v}catch(u){return x}}return null},
hEC(d){var x,w,v,u,t,s=A.a([],y.s)
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
hED(){var x,w=$.px(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.h2(v)},
aZj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZj)
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
$.am.$1("[doc share qr stash] load "+A.u(p)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZj,w)},
c7K(d,e){return B.hEE(d,e)},
hEE(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c7K=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c7K)
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
$.am.$1("[doc share qr stash] save "+A.u(p)+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7K,w)},
aZm(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZj(d),$async$aZm)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZm,w)},
aZl(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hED()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c7K(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cV.gcB().aK(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$aZl)
case 3:if(!h){v=null
x=1
break}v=new A.a_U("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZl,w)},
aZk(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZj(o),$async$aZk)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cA(0,C.cI.aK(u))
if(J.iY(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZk,w)},
c7L(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c7L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBD("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c7L)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.u(q)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7L,w)},
aZn(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ij(),$async$aZn)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZn,w)},
aoP(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoP)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZn(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoP,w)},
aoN(d,e){var x=0,w=A.j(y.H)
var $async$aoN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoN)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoN)
case 2:return A.h(null,w)}})
return A.i($async$aoN,w)},
a6G(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6G=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6G)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ij(),$async$a6G)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=5
return A.b(A.a6F(s),$async$a6G)
case 5:x=6
return A.b(B.aoN(f,u),$async$a6G)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6G,w)},
a6H(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6H=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6H)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ij(),$async$a6H)
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
return A.b(B.aoN(g,q),$async$a6H)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6F(u),$async$a6H)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6H,w)},
a6I(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6I=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6I)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ij(),$async$a6I)
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
s=B.aZg(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6I)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a7().ac()],p,p),null)),$async$a6I)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
c7M(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c7M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c7M)
case 7:s=f
p=A.u(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aJ(0,r,null)
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
return A.i($async$c7M,w)},
Ik(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Ik=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7M(d),$async$Ik)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZn(t),$async$Ik)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoO(d),$async$Ik)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZg(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoO(d),$async$Ik)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ik,w)},
aoO(d){var x=0,w=A.j(y.H)
var $async$aoO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoO)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoO)
case 2:return A.h(null,w)}})
return A.i($async$aoO,w)},
aZo(){var x,w=$.px(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.h2(v)},
a6J(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fVE(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7P(d){return B.hEG(d)},
hEG(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6J(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c7P)
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
$.am.$1("[doc share short code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7P,w)},
aoR(d,e){return B.hEH(d,e)},
hEH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6J(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aoR)
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
$.am.$1("[doc share short code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoR,w)},
c7R(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7R=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6J(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoR(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7R)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7R,w)},
c7Q(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7Q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6J(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoR(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7Q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7Q,w)},
c7S(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7S=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6J(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoR(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7S,w)},
c7T(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fVE(d)){v=null
x=1
break}x=3
return A.b(B.c7P(d),$async$c7T)
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
return A.i($async$c7T,w)},
a6Q(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6Q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6Q)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6Q)
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
$.am.$1("[doc share webrtc stash] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6Q,w)},
aoV(d){return B.hEW(d)},
hEW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoV)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoV)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoV,w)},
aoW(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoW)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6Q(),$async$aoW)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cA(0,C.cI.aK(q))
if(J.iY(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a7().ac())
J.aG(s,j,o)
x=9
return A.b(B.aoV(s),$async$aoW)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.u(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoW,w)},
aoY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoY)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6Q(),$async$aoY)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aK(C.a.i(e))
q.n(0,"answer",C.cV.gcB().aK(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a7().ac())
t.n(u,p,q)
x=5
return A.b(B.aoV(u),$async$aoY)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoY,w)},
aoX(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoX)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6Q(),$async$aoX)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cA(0,C.cI.aK(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoX,w)},
anX(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anX=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q_)){v=null
x=1
break}x=3
return A.b(p.m1(e),$async$anX)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.h0),$async$anX)
case 7:q=g
o=q
o=o==null?null:J.eU(J.vp(o))
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
return A.i($async$anX,w)},
i83(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aV(C.o.u(w),5,"0")
return v},
fHB(d){return B.i85(d)},
i85(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fHB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eZ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ih("media").KE(d,3600),$async$fHB)
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
$.am.$1("[supabase signed url] "+d+": "+A.u(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fHB,w)},
CW(d,e,f,g,h,i){var x=null
return B.i82(d,e,f,g,h,i)},
i82(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CW=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.haO(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fVG(r),$async$CW)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fHB(o),$async$CW)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6K(r),$async$CW)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPy)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LC(A.a([],g))
x=15
return A.b(d.eZ(0,A.au2("GET",A.cE(n,0,null))).d7(0,C.Fk),$async$CW)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6K(r),$async$CW)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kc(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CW)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZq(r,k),$async$CW)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a6(0),$async$CW)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.UE(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.u(j))
x=27
return A.b(B.a6K(r),$async$CW)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CW,w)},
aPJ(d){return B.i84(d)},
i84(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eZ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ih("media").W(0,d),$async$aPJ)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPJ,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[147]
O=c[40]
F=c[241]
I=c[139]
P=c[221]
E=c[214]
G=c[87]
Q=c[186]
R=c[140]
S=c[219]
K=c[245]
L=c[250]
B=a.updateHolder(c[21],B)
D=c[248]
T=c[185]
M=c[204]
U=c[65]
V=c[251]
W=c[71]
X=c[55]
N=c[86]
Y=c[249]
B.cj0.prototype={
aDH(d,e){return this.cJG(d,e)},
cJG(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.kl(A.cz(t)))
t=J.k(u)
v=B.hJx(C.cV.gcB().aK(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDH,w)}}
B.b3x.prototype={
bxV(d){var x=this,w=x.w
w.onclose=A.hm(new B.ciW(x))
w.onopen=A.hm(new B.ciX(x))
w.onmessage=A.hm(new B.ciY(x))
w.onbufferedamountlow=A.hm(new B.ciZ(x))},
gdc(d){return this.x},
agR(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EU()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fXm(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$agR)
case 8:v=t.fXm(s.ana(f,0,null))
x=1
break
case 7:case 4:v=B.fXm(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agR,w)}}
B.b3y.prototype={
bxW(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hm(new B.cj1(x)))
w.addEventListener("icecandidate",A.hm(new B.cj2(x)))
w.addEventListener("iceconnectionstatechange",A.hm(new B.cj3(x)))
w.onicegatheringstatechange=A.hm(new B.cj4(x))
w.addEventListener("signalingstatechange",A.hm(new B.cj5(x)))
if(!$.h3u())w.addEventListener("connectionstatechange",A.hm(new B.cj6(x)))
w.addEventListener("negotiationneeded",A.hm(new B.cj7(x)))
w.addEventListener("track",A.hm(new B.cj8(x)))},
aky(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aky=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.kl(A.cz(A.U(y.N,y.z)))),y.aQ),$async$aky)
case 3:t=f
v=new B.WU(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aky,w)},
a77(d,e){return this.bnk(0,e)},
bnk(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a77=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a77)
case 2:return A.h(null,w)}})
return A.i($async$a77,w)},
a7f(d,e){return this.bnA(0,e)},
bnA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7f)
case 2:return A.h(null,w)}})
return A.i($async$a7f,w)},
aot(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aot=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WU(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aot,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.abW.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YP.prototype={
S(){return new B.ayO()},
gde(){return this.c}}
B.ayO.prototype={
a_(){this.a1()
this.adA()},
adA(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZh(u.e,u.c),$async$adA)
case 2:t=e
if(v.c!=null)v.m(new B.d2l(v,t))
return A.h(null,w)}})
return A.i($async$adA,w)},
PZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoK(t.e,t.c,!1),$async$PZ)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f_x)
x=1
break}x=4
return A.b(B.a6E(u.a.c,"individual"),$async$PZ)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5B(A.e9(new B.d2i(u),!1,null,y.H)),$async$PZ)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PZ,w)},
J1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fpd(o),$async$J1)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6I(o.e,r,s,q),$async$J1)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eXC)
x=1
break}x=5
return A.b(B.a6E(u.a.c,"member"),$async$J1)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5B(A.e9(new B.d2k(u),!1,null,y.H)),$async$J1)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J1,w)},
xS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6D(t.e,o,t.f,t.r,t.w,s),$async$xS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6E(u.a.c,"org_owner"),$async$xS)
case 4:x=5
return A.b(B.aoP(u.a.c),$async$xS)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fpI(o),$async$xS)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6G(s,t,o,q.c),$async$xS)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eXz)
x=1
break}x=10
return A.b(B.aoP(u.a.c),$async$xS)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5B(A.e9(new B.d2j(u),!1,null,y.H)),$async$xS)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xS,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jg:C.pL,q=B.fVB(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fO,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fil,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h7,t,t,t),C.aB,D.fBm,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZo,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lD(new B.d2n(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.aco(C.eT,C.ayY,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcds(),t),C.ac],v))
p.push(new B.aco(C.oU,C.a2d,"Team Member","Sign in with your organization access code + password",u.gcej(),t))
p.push(C.ac)
p.push(new B.aco(C.alu,C.a3M,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcdP(),t))
return A.c7(t,r,A.bm(!0,A.c8(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiK,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.aco.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ph,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BH,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBl.prototype={}
B.aEx.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gap6(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
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
bbW(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cI9(d){return this.bbW(null,d)},
aDs(d){return this.bbW(d,null)}}
B.Uy.prototype={
S(){return new B.aCI(new A.cs(null,y.A))},
gde(){return this.c}}
B.aCI.prototype={
a_(){this.a1()
this.adB()},
adB(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BB(u.a.c),$async$adB)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dP7(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adB,w)},
adC(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fN(new A.fE(s)),$async$adC)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.f0r)
case 1:return A.h(v,w)}})
return A.i($async$adC,w)},
Zk(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zk=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anX(s.d,4),$async$Zk)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rY(r,"ngmy_my_code_"+m+".png"),$async$Zk)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zk,w)},
ahj(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9K("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahj)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahj,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jg:C.pL,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.av(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2F,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aik,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.c8(A.x(A.a([x,C.mO,w,C.kF,new A.ex(A.p(p,A.pS(p,p,!1,B.hEx(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kF,A.B(A.a([A.E(A.eD(N.C2,C.U9,q.gc6t(),p),1),C.at,A.E(A.dn(C.yI,C.a8D,q.gc6u(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.eD(M.a15,D.fxa,q.gct3(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MF,p,p,C.ag)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.UC.prototype={
S(){return new B.aCL(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.aCL.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Ii(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ii(u.d.a.a)
if(t==null){u.m(new B.dQg(u))
x=1
break}u.m(new B.dQh(u))
s=u.a
r=s.c
x=3
return A.b(B.a6C(s.d,new B.dQi(u),t,r),$async$Zl)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dQj(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zl,w)},
a1w(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1w=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dQk(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rq(r.a.c,q),$async$a1w)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dQl(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aho(p,m,l,j,k),$async$a1w)
case 8:o=e
if(r.c!=null)r.m(new B.dQm(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dQn(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dQo(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1w,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aeJ:D.acx,h=j?D.aga:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.adM:C.aL
i=[i,e,h,g,f,j?C.fd:C.bT]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bN2,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2F,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uj(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bih()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.Mz,k,k,"",k,!0,new A.b4(4,A.n(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dQp(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m5,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lf(l.a.d,4)
m=A.C(new A.M(m,new B.dQq(x,new A.aFL(i)),m.$ti.k("M<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lP,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eW8)
else q.push(A.X(C.lo,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iF,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.c8(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bvx,k,k,C.ag),1)
u=l.f?k:l.gct4()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eD(M.a15,D.fya,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6v()
t=A.bn(C.aE,k,k,0,C.c,k,C.nf,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c7(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mE(new B.dQr(),A.x(A.a([e,new A.D(D.bv2,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rS:D.fwz,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.Yv,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bih.prototype={
oz(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hg(C.bw,v.length),C.aO)}}
B.Uz.prototype={
S(){return new B.aCJ()}}
B.aCJ.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b5,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b5,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
q(){var x,w=this,v=w.d
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
w.a2()},
adD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dP8(r))
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
return A.b(B.a6H(p,m,n,o,C.a.i(l).length===0?null:l),$async$adD)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.f02)
s=[1]
x=4
break}p.K(y.q).f.U(D.eZG)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dP9(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adD,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jg:C.pL,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fpb,s,s,s,1,s,!0),p=A.p(s,D.bnq,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GN,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bTY,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bTT,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bU8,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc6w()
u=A.bn(C.aE,s,s,s,s,C.fP,s,s,s,s,s,s)
return A.c7(q,r,A.c8(A.x(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rS:C.aSf,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abD.prototype={}
B.buP.prototype={
a4g(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anK()))
x=3
return A.b(B.QU(t,s),$async$a4g)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4g,w)},
gde(){return this.a}}
B.Nd.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YO.prototype={
S(){return new B.ayN(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.ayN.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d2h(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6C(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0R(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jg:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fO,32)],n),l=A.p(w,T.ao6,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.aoU,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uj(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.but()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fw,w,w,"",w,!0,new A.b4(4,A.n(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.aZF),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2f(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m5,w,w,w,w)
f=f[1]
f=A.E(A.dV(C.nD,new B.d2g(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Kr,A.c_(new A.D(C.xT,A.x(A.a([l,C.aR,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c_(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ecb,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6B(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.Oq,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MH,C.d1,w,w,w)}}
B.but.prototype={
oz(d,e){return e.akt(e.a.toUpperCase())}}
B.UA.prototype={
S(){return new B.aCK(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aCK.prototype={
a_(){var x=this
x.a1()
x.tI()
x.w=A.dt(C.jl,new B.dQe(x))},
q(){var x=this.w
if(x!=null)x.a6(0)
B.UJ()
this.a2()},
a0o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nc(u.a.c),$async$a0o)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AE(u.a.c),$async$a0o)
case 4:u.m(new s.dPC(u,e))
u.i4("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0o,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nc(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.AE(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dPD(u,s))
if(t>0)u.i4("Received "+A.u(t)+" file(s) via My Code.")
u.No(u.d)
B.BB(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
No(d){return this.bBT(d)},
bBT(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$No=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6M(r,u.a.c),$async$No)
case 8:p=f
if(u.c==null){x=1
break}new B.dPb(u,r,p).$0()
u.c.ef()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mF))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UH(r,u.a.c),$async$No)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AE(u.a.c),$async$No)
case 12:u.m(new o.dPc(u,f))
case 1:return A.h(v,w)}})
return A.i($async$No,w)},
NL(d){return this.bIa(d)},
bIa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6M(d,u.a.c),$async$NL)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dPh(u,d,t))
x=6
return A.b(A.fN(new A.fE(t)),$async$NL)
case 6:u.i4("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fN(new A.fE(r.toUpperCase())),$async$NL)
case 7:u.i4("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NL,w)},
i4(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cDE(d,e)},
cDE(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dQ2(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dQ3(r))
$.eW.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUO(){var x=this.a
return x.f||x.r||x.w},
HY(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUO()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c7I(s,n,r,q,o,t),$async$HY)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i4("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fB4(o,u.a.c),$async$HY)
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
return A.b(B.CY(s,o,r,q,n,t),$async$HY)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HY,w)},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoP(u.a.c),$async$a_s)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i4("No organization portal found.")
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
return A.b(A.a6(t,!1).cm(A.e9(new B.dPz(u,r,q),!1,null,y.H)),$async$a_s)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
a0z(d){return this.cmC(d)},
cmB(){return this.a0z(1)},
cmC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUO()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoM(u.a.c),$async$a0z)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0z,w)},
abA(d,e,f){return this.bYN(d,e,f)},
bYN(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4(e)
x=1
break}x=3
return A.b(u.tJ(new B.dPw(u,d,null,e,f),"Uploading\u2026"),$async$abA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abA,w)},
bC0(){B.hpq(!1,new B.dPf(this))
return},
crD(){this.m(new B.dPH(this))},
axW(){var x=0,w=A.j(y.H),v=this
var $async$axW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bC0()
return A.h(null,w)}})
return A.i($async$axW,w)},
abw(){var x=0,w=A.j(y.H),v=this
var $async$abw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPl(v),"Importing\u2026"),$async$abw)
case 2:return A.h(null,w)}})
return A.i($async$abw,w)},
S0(d){return this.cD4(d)},
cD4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.e9(new B.dQ_(u,d),!1,null,y.H)),$async$S0)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qm)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cm(A.e9(new B.dQ0(u,d),!1,null,y.H)),$async$S0)
case 8:x=1
break
case 7:x=u.bZu(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cm(A.e9(new B.dQ1(u,d),!1,null,y.H)),$async$S0)
case 11:x=1
break
case 10:u.i4("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
bZu(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cH0,C.a.b5(x,w+1).toLowerCase())},
af3(d){return this.cdw(d)},
cdw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.e9(new B.dPx(u,d),!1,null,y.H)),$async$af3)
case 5:x=1
break
case 4:u.m(new B.dPy(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af3,w)},
Rn(d){return this.cuA(d)},
cuA(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p9(t,s.c,s.f),$async$Rn)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPT(u,d),"Preparing QR\u2026"),$async$Rn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
ahJ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPU(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPV(q),s),s.k("J.E"))
if(r.length===0){u.i4("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rn(r),$async$ahJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahJ,w)},
ahC(d){return this.cu7(d)},
cu7(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0R(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dPN(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahC)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S0(d)
break
case"qr":u.Rn(A.a([d],y.r))
break
case"send_my_code":u.ce8(A.a([d],y.r))
break
case"save":u.agY(d)
break
case"delete":u.IN(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahC,w)},
Xf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPi(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPj(q),s),s.k("J.E"))
if(r.length===0){u.i4("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p9(t,s.c,s.f),$async$Xf)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPk(u,r),"Preparing file\u2026"),$async$Xf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xf,w)},
ag9(d){return this.ckX(d)},
ckX(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ag9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hq9(d,!1),$async$ag9)
case 3:s=f
r=s==null
q=B.a6J(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i4("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag9,w)},
af9(){var x=0,w=A.j(y.H),v=this,u
var $async$af9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fIG(u,v.a.c),$async$af9)
case 2:return A.h(null,w)}})
return A.i($async$af9,w)},
bC_(){B.hpq(!1,new B.dPe(this,null))
return},
J0(d,e){return this.ce9(d,e)},
b_V(d){return this.J0(null,d)},
ce8(d){return this.J0(d,null)},
ce9(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J0=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dPA(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xa.c7().an2(!0,C.a_k,!1),$async$J0)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dPB(l,s,r),"Preparing\u2026"),$async$J0)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
s.i4("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i4("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCM(p,l,e,s.a.c),$async$J0)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J0,w)},
Ie(d){return this.bYA(d)},
bYA(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ie=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hEw(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_V(t),$async$Ie)
case 8:x=6
break
case 7:u.i4("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i4("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tJ(new B.dPu(u,d),"Receiving video\u2026"),$async$Ie)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dPv(u,d),"Receiving\u2026"),$async$Ie)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ie,w)},
E9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$E9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CS()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ag9(t),$async$E9)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ie(s),$async$E9)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.e9(new B.dPF(u),!1,null,y.N)),$async$E9)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$E9)
case 10:x=1
break
case 9:x=11
return A.b(u.Ie(C.a.i(r)),$async$E9)
case 11:case 1:return A.h(v,w)}})
return A.i($async$E9,w)},
agY(d){return this.cqb(d)},
cqb(d){var x=0,w=A.j(y.H),v=this
var $async$agY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPE(v,d),"Saving\u2026"),$async$agY)
case 2:return A.h(null,w)}})
return A.i($async$agY,w)},
IN(d){return this.bKu(d)},
bKu(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l5(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IN)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c7L(t),$async$IN)
case 6:case 5:s=d.a
x=7
return A.b(B.Er(u.a.c,s),$async$IN)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IN)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IN,w)},
ahP(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0R(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dPZ(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahP)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.af9()
break
case"import":u.abw()
break}case 1:return A.h(v,w)}})
return A.i($async$ahP,w)},
c6z(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mF))return C.qa
if(C.a.a0(x,"image/")||d.my(D.Qm))return C.u5
if(C.a.t(x,"pdf"))return E.NW
return D.alX},
B(d){var x,w,v=this,u=null,t=B.a0R(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GF,u,u,u,new B.dQ9(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bNz,u,u,u,v.e?u:v.gcdQ(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcrC()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bHU:E.amk,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a12,u,u,u,v.e?u:v.gc6A(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o8,u,u,u,v.e?u:v.gb12(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bPg,u,u,u,v.e?u:new B.dQa(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lD(new B.dQb(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m5(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayK(C.js,s,!0,t,w?u:v.gcuB(),u),1)
x.push(new A.D(D.btP,A.mE(new B.dQc(),A.B(A.a([s,C.at,A.E(new B.ayK(C.vT,"Export",!1,t,w?u:v.gbO5(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iG,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcW(t,v.e?u:v.gb12(),u)
else s=A.kb(!0,u,u,new B.dQd(v,t),s,u,D.btH,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayK.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vA,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vA,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.eD(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bcW.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mE(new B.d2d(),new A.D(E.Zo,A.x(A.a([A.mE(new B.d2e(),A.p(x,A.X(C.yd,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.az,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ew,C.ii,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o8,D.fBF,this.d,A.bn(C.aE,x,x,x,C.c,x,C.Zj,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.B5,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.abX.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.my(D.mF))p=D.deq
else{p=C.a.a0(p,"image/")||i.my(D.Qm)
n=y.O
p=p?A.a([C.cS,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gap6()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mF))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mF)))l.push(A.fTk(C.aE,!1,j,j,j,!1,j,j,new B.d2A(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.o6,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mE(new B.d2B(),new A.D(C.e5,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.YS,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ah),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.YQ.prototype={
S(){return new B.ayP()},
gde(){return this.c}}
B.ayP.prototype={
a_(){this.a1()
this.xJ()},
q(){B.hEL(this.e)
this.a2()},
xJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rq(o.c,o.d),$async$xJ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hEO(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hEN(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2x(s))
x=1
break}s.m(new B.d2y(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d2z(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xJ,w)},
a1v(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rq(t.c,t.d),$async$a1v)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.eY8)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aho(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1v)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1v,w)},
bYt(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kq(u,C.A,v,new B.d2v(w,t),C.fZ,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fP(t,C.A,v,new B.d2w(w),C.fZ,C.dv,!0,v,!1,v,v)
else return C.bI
return A.us(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0R(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.C3,u,u,u,v.gb4T(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Eh
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.C3,D.fkC,v.gb4T(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bYt()}return A.c7(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YN.prototype={
S(){return new B.ayM(A.aid(),C.bx,C.bx)},
gde(){return this.c}}
B.ayM.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fw(w,A.a3(w).k("fw<1>")).ij(new B.d2a(v))
x.gcR2().ij(new B.d2b(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a3(x).k("fw<1>"))}if(x==null)x=C.b4O
x.ij(new B.d2c(v))
v.xJ()},
xJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rq(p.c,p.d),$async$xJ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d23(s))
x=1
break}x=8
return A.b(s.d.C4(0,new A.a2X(r,s.a.d.c)),$async$xJ)
case 8:if(s.c==null){x=1
break}s.m(new B.d24(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d25(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xJ,w)},
Zm(){var x=0,w=A.j(y.H),v=this,u
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$Zm)
case 5:x=3
break
case 4:x=6
return A.b(u.im(0),$async$Zm)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zm,w)},
aSF(d){var x=d.a
return C.a.aV(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aV(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0R(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Eh
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bIT,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Oq,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aE,o,o,m,0,new B.d26(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aSF(p.w)+" / "+p.aSF(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eUE,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yn:C.iJ,o,o,o,o,o)
x=A.x(A.a([u,C.kF,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6D(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c7(v,w,A.av(new A.D(C.rb,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pp.prototype={
S(){return new B.ayS()},
gde(){return this.c}}
B.ayS.prototype={
a_(){this.a1()
this.Pl()},
Pl(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fVC(o.c,o.d,new B.d2O(s)),$async$Pl)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2P(s))
x=1
break}s.e=r
q=O.i0y(r)
if(q==null){s.m(new B.d2Q(s))
x=1
break}s.d=q
q.aQ(0,s.gb_J())
x=8
return A.b(q.ii(0).d7(0,C.r7),$async$Pl)
case 8:if(s.c==null){x=1
break}s.m(new B.d2R(s))
x=9
return A.b(q.pT(0),$async$Pl)
case 9:q.ti(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d2S(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pl,w)},
cc7(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d2T(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CQ(0,x.gb_J())
w=x.d
if(w!=null)w.q()
B.ian(x.e)
x.a2()},
adG(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZp(u.c,u.d),$async$adG)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adG,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0R(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p0,t,t,t,u.gc6x(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Eh
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahH(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A9(s,t),A.aC(t,A.D7(A.p(t,A.X(q?I.yn:C.iJ,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d2V(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c7(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YS.prototype={
S(){return new B.ayQ(new A.cs(null,y.A))}}
B.ayQ.prototype={
gcDn(){var x,w,v=this.a
if(v.e!==D.RJ)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcD2(){var x,w,v=this.a
if(v.e!==D.zj)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcDn()
if(x!=null){v.Qn(x)
v.e=A.dt(R.Fo,new B.d2K(v,x))}w=v.gcD2()
if(w!=null){v.Qm(w)
v.f=A.dt(C.fX,new B.d2L(v,w))}},
q(){var x=this.e
if(x!=null)x.a6(0)
x=this.f
if(x!=null)x.a6(0)
this.a2()},
Qm(d){return this.cj8(d)},
cj8(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoU(d),$async$Qm)
case 3:t=f
x=4
return A.b(B.c83(d),$async$Qm)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d2C(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qm,w)},
Qn(d){return this.cj9(d)},
cj9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fJ5(d),$async$Qn)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAG(t),$async$Qn)
case 4:if(u.c==null){x=1
break}u.m(new B.d2D(u))
u.c.K(y.q).f.U(D.aP9)
case 1:return A.h(v,w)}})
return A.i($async$Qn,w)},
gc2v(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6y(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1h(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CS()){t=u.c
if(t!=null)t.K(y.q).f.U(D.f0c)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cm(A.e9(new B.d2E(),!1,null,y.N)),$async$a1h)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAG(s),$async$a1h)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aP9)
case 1:return A.h(v,w)}})
return A.i($async$a1h,w)},
a9r(d){return this.bIb(d)},
bIb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fN(new A.fE(C.d.aH(t,", "))),$async$a9r)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9r,w)},
adE(d){return this.bHW(d)},
bHW(d){var x=0,w=A.j(y.H),v=this
var $async$adE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fN(new A.fE(v.a.c)),$async$adE)
case 2:if(d.e!=null)d.K(y.q).f.U(D.eYB)
return A.h(null,w)}})
return A.i($async$adE,w)},
a1c(d){return this.cqd(d)},
cqd(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anX(s.d,4),$async$a1c)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rY(r,"ngmy_doc_share_qr.png"),$async$a1c)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1c,w)},
gaVV(){var x,w=this.a
if(w.e!==D.HQ)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
a9o(d){return this.bI4(d)},
bI4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaVV()
if(t==null){x=1
break}x=3
return A.b(A.fN(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9o)
case 3:if(d.e!=null)d.K(y.q).f.U(D.f_c)
case 1:return A.h(v,w)}})
return A.i($async$a9o,w)},
adF(){var x=0,w=A.j(y.H),v=this,u
var $async$adF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UJ(),$async$adF)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adF,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0R(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HQ&&i!==D.RJ&&i!==D.zj
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HQ||t===D.RJ||t===D.zj?l:A.aH(l,l,l,l,C.l2,l,l,l,m.gaYU(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pS(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc2v(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HQ){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc6y(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hl(D.bT1,D.ftO,new B.d2F(m,d),l)],p))}if(m.a.e===D.HQ&&m.gaVV()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hl(D.bPA,D.fqy,new B.d2G(m,d),l)],p))
if(m.a.e===D.zj){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ek:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}if(m.a.e===D.RJ){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ek:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l),C.ac,A.dn(D.bLm,D.fwS,m.gcqB(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.on(i,A.c7(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eD(N.C2,C.U9,new B.d2H(m,d),l),1),C.at,A.E(A.dn(C.yI,C.a8D,new B.d2I(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zT,m.gaYU(),A.bn(C.aK,l,l,l,l,C.fP,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d2J(),y.C)}}
B.abV.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.c8(A.x(A.a([w,C.aR,A.p(x,A.pS(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ag)
return A.em(A.a([A.bG(C.zU,new B.d22(d),x)],u),x,x,C.mX,v,x,x,x,x,D.fjD,x)}}
B.YM.prototype={
S(){return new B.ayL(A.ze(C.xA,C.nK,C.ui))}}
B.ayL.prototype={
q(){this.d.q()
this.a2()},
awy(d){var x,w,v,u,t
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
return A.c7(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fr1,x,x,x,1,x,!0),C.w,A.zd(this.d,C.bV,this.gawx()),x,!1,!1,x,x)}}
B.YT.prototype={
S(){return new B.ayR(A.ze(C.xA,C.nK,C.ui))},
gde(){return this.c}}
B.ayR.prototype={
bZw(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afw(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RV("text/plain"),$async$afw)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.f06)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afw,w)},
aac(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aac=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hq9(p,!0),$async$aac)
case 3:t=e
p=t==null
s=B.a6J(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.eXJ)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aac,w)},
q(){this.d.q()
this.a2()},
awy(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZw(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.and,v,v,v,w.gbNE(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a19,v,v,v,w.gcgy(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.rh:P.NH,v,v,v,v,v),v,v,v,new B.d2N(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fxJ,v,v,v,1,v,!0)
u=A.zd(w.d,C.bV,w.gawx())
x=A.n(20)
return A.c7(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ehX],s),v),v,!1,!1,v,v)}}
B.bcX.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oM
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oM:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Zu,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a96.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Of.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WT.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Oe.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EV.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cj_.prototype={}
B.EU.prototype={}
B.a95.prototype={}
B.atd.prototype={}
B.WU.prototype={}
var z=a.updateTypes(["aA<~>()","R(jn)","m(jn)","UA(Y)","~()","YP(Y)","G(G,jn)","Pp(Y)","~(m0)","cr(EU)","aA<jn?>(@)","Uy(Y)","UC(Y)","D(jn)","jn(@)","a5<m,@>(jn)","YO(Y)","Uz(Y)","YQ(Y)","YN(Y)","YS(Y)","abV(Y)","ai<jn>()","YT(Y)","abX(Y,G)","YM(Y)","a5<m,aD>(jn)","cr(WT)","cr(a95)","aA<cr>(EU)"])
B.ciW.prototype={
$1(d){var x=this.a
x.x=D.aMe
x.y.L(0,D.aMe)},
$S:68}
B.ciX.prototype={
$1(d){var x=this.a
x.x=D.aMd
x.y.L(0,D.aMd)},
$S:68}
B.ciY.prototype={
$1(d){var x=this.a
x.agR(A.aOs(d.data)).bA(new B.ciV(x),y.b)},
$S:68}
B.ciV.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ciZ.prototype={
$1(d){},
$S:68}
B.cj1.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hJw(d.channel))},
$S:15}
B.cj2.prototype={
$1(d){},
$S:15}
B.cj3.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i1A(w.iceConnectionState)
x.cx=w
if($.h3u())switch(w.a){case 0:x.cy=D.aMj
break
case 1:x.cy=D.aMk
break
case 3:x.cy=D.aMl
break
case 5:x.cy=D.aMh
break
case 6:x.cy=D.aMi
break
case 7:x.cy=D.a6n
break
default:break}},
$S:156}
B.cj4.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i1B(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:156}
B.cj5.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ibR(w.signalingState)},
$S:156}
B.cj6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ia4(w.connectionState)},
$S:156}
B.cj7.prototype={
$1(d){},
$S:156}
B.cj8.prototype={
$1(d){},
$S:15}
B.fl5.prototype={
$1(d){var x=y.F.a(new A.rN([],[]).pB(d.target.result,!1)),w=C.xB.t(x.objectStoreNames,"blobs")
if(!w)C.xx.KC(x,"blobs")},
$S:198}
B.fIu.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w5.fg(this.b)
$.eW.mt()
this.c.$1(d)},
$S:453}
B.fIw.prototype={
$1(d){return this.a.$1(B.hSo(this.b,this.c))},
$S:34}
B.fIv.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fIt.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fIJ.prototype={
$1(d){var x=this
return B.hfF(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fIK.prototype={
$1(d){var x=this
return B.hfF(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fng.prototype={
$1(d){var x=this
return B.c7F(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2l.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2i.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7F(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2k.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7F(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2j.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7F(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d2n.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bJY,x,x,x,new B.d2m(d),x,x,x,x,x,x),A.E(A.EG(D.Q6,!0,x,C.a0f,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Q6,x,g,C.aj4,0,e,f)},
$C:"$4",
$R:4,
$S:436}
B.d2m.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpg.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eG,y.o).w,t=this.a,s=t?C.id:C.c,r=A.n(28),q=A.p(v,D.bnK,C.f,v,v,D.b0j,v,v,v,v,D.aiV,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bO7,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FB,A.x(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ant,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dV(C.df,new B.fpe(d),v),1),C.at,A.E(A.bG(D.fpz,new B.fpf(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mn,v,v,v,v),v)},
$S:60}
B.fpe.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpf.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.eYQ)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aBl(v,x))},
$S:0}
B.fpK.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eG,y.o).w,u=x.a,t=u?C.id:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bnA,C.f,w,w,D.b1M,w,w,w,w,D.aiV,w,w,1/0),new A.D(C.FB,A.x(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h_y(u,"Organization name",C.G2,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h_y(u,"Access code",C.nk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h_y(u,"Member password",H.GA,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fxO,new B.fpJ(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fP,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mn,w,w,w,w),w)},
$S:60}
B.fpJ.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.eYV)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEx(u,x,w))},
$S:0}
B.c7w.prototype={
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
p=C.a.a0(j,"http")?A.cE(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.vg(p,null).d7(0,C.Yu),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BC(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.am.$1("[doc share lan web] "+A.u(r)+": "+A.u(m))
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
B.c7C.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7D.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c7E.prototype={
$1(d){return d.b},
$S:z+2}
B.c7y.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7z.prototype={
$1(d){return d.b},
$S:z+2}
B.c7x.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c7A.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c7B.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fIH.prototype={
$1(d){return new B.Uy(this.a,null)},
$S:z+11}
B.fII.prototype={
$1(d){return new B.UC(this.a,this.b,this.c,null)},
$S:z+12}
B.dP7.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dQg.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dQh.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dQi.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dQf(x,d))},
$S:2}
B.dQf.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQj.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQk.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dQl.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQm.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQn.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dQo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQr.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.dQp.prototype={
$1(d){var x=this.a
return x.f?null:x.Zl()},
$S:2}
B.dQq.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qm))s=C.u5
else s=C.a.a0(s,"video/")||d.my(D.mF)?C.qa:D.alX
x=this.b.a
w=y.p
return new A.D(C.kV,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gap6(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dP8.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dP9.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c7G.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.c7H.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.fJn.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fii.prototype={
$1(d){return J.k(d)},
$S:17}
B.fns.prototype={
$1(d){var x=this.b
B.hQs(C.FQ.ga5U(this.a)).bA(x.gcGs(x),y.H)},
$S:125}
B.fnt.prototype={
$1(d){return this.a.d4(0,null)},
$S:125}
B.fnu.prototype={
$0(){return null},
$S:11}
B.c7V.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnv.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.S(Date.now(),0,!1).a7().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.frv.prototype={
$1(d){return d.ah()},
$S:z+15}
B.flV.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.flW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c8_.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.fNt.prototype={
$1(d){return new B.YO(this.a,null)},
$S:z+16}
B.d2h.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:9}
B.d2f.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d2g.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQe.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0o()},
$S:12}
B.dPC.prototype={
$0(){var x=J.bDQ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPD.prototype={
$0(){var x=J.bDQ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPb.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPa(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDs(this.c)}},
$S:0}
B.dPa.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPc.prototype={
$0(){var x=J.bDQ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPh.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPg(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDs(this.c)}},
$S:0}
B.dPg.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQ2.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dQ3.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dPz.prototype={
$1(d){return new B.Uz(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dPw.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HY(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UD(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0z(s.gM(t)),$async$$0)
case 8:case 7:r.i4(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPf.prototype={
$1(d){this.a.abA(d,"No files selected.","Added")},
$S:453}
B.dPH.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dPG(),A.T(x).k("M<1,m>")))},
$S:0}
B.dPG.prototype={
$1(d){return d.a},
$S:z+2}
B.dPl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xa.c7().cT_(C.a_k,!0),$async$$0)
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
$.am.$1("[doc share import] "+A.u(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.i4("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i4("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoT(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i4("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tI(),$async$$0)
case 9:o.i4("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ_.prototype={
$1(d){return new B.Pp(this.a.a.c,this.b,null)},
$S:z+7}
B.dQ0.prototype={
$1(d){return new B.YQ(this.a.a.c,this.b,null)},
$S:z+18}
B.dQ1.prototype={
$1(d){return new B.YN(this.a.a.c,this.b,null)},
$S:z+19}
B.dPx.prototype={
$1(d){return new B.Pp(this.a.a.c,this.b,null)},
$S:z+7}
B.dPy.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HY(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6L(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i4("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cmB(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.T(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dPP(p),r),new B.dPQ(),r.k("M<ak.E,m>")).c0(0,new B.dPR())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.e9(new B.dPS(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p8(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UJ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPP.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dPO(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPQ.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dPR.prototype={
$1(d){return d.length!==0},
$S:3}
B.dPS.prototype={
$1(d){var x=this.a
return new B.YS(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPU.prototype={
$1(d){return d.a},
$S:z+2}
B.dPV.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPN.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gap6(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mF)?C.u7:C.oY
p=!x||p.my(D.mF)?"Play video":"View"
return A.c_(A.bm(!0,new A.D(C.Bh,A.x(A.a([q,o,t,C.aB,B.YR(!1,u,!1,w,p,new B.dPI(d),v),B.YR(!1,u,!1,C.js,"Share via QR",new B.dPJ(d),"Letters/numbers QR code"),B.YR(!1,u,!1,D.a0l,"Send to their Code",new B.dPK(d),"Enter someone else's personal code"),B.YR(!1,u,!1,C.hC,"Download / save",new B.dPL(d),v),C.am,B.YR(!1,u,!0,C.e6,"Delete",new B.dPM(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,v,v,C.n),C.bf)},
$S:687}
B.dPI.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dPJ.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dPK.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dPL.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dPM.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dPi.prototype={
$1(d){return d.a},
$S:z+2}
B.dPj.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPk.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6N(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Go(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p8(s.c,s.f),$async$$0)
case 4:u.i4(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPe.prototype={
$1(d){var x=this.a
x.tJ(new B.dPd(x,d,this.b),"Preparing\u2026")},
$S:453}
B.dPd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i4("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UD(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i4("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCM(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPA.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dPB.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fVF(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPu.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gl(new B.dPq(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i4("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dPr(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dPs(s))
case 5:x=8
return A.b(r.b.io(0,C.Fk,new B.dPt()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i4("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i4("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPq.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPn(x,d,e))},
$S:142}
B.dPn.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPr.prototype={
$1(d){return new B.abV(this.a.a,null)},
$S:z+21}
B.dPs.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dPt.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dPv.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ii(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6B(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_V(B.Ii(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoT(new B.dPo(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fVE(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i4(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dPp()).gM(0)
s.i4(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPo.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPm(x,d,e))},
$S:142}
B.dPm.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPp.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.dPF.prototype={
$1(d){return new B.YT(this.a.a.c,null)},
$S:z+23}
B.dPE.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZp(u.a.c,v.b),$async$$0)
case 2:t.i4(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPZ.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.D(C.Bh,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YR(!0,w,!1,C.nk,"My Code",new B.dPW(d),"Your personal code & QR \u2014 others send docs to you"),B.YR(!1,w,!1,D.a0l,"Send to their Code",new B.dPX(this.a,d),"Enter someone else's 5-digit code + letter"),B.YR(!1,w,!1,S.yx,"Import backup",new B.dPY(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,x,x,C.n),C.bf)},
$S:687}
B.dPW.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dPX.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bC_()},
$S:0}
B.dPY.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dQb.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Is(D.Q6,x,C.a0f,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.Q6).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dQ9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQa.prototype={
$0(){this.a.ahP()
return null},
$S:0}
B.dQc.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*10)),e)},
$S:100}
B.dQd.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abX(e,w,v,this.b,x.e,x.c6z(w),new B.dQ5(x,w),new B.dQ6(x,v,w),new B.dQ7(x,w),new B.dQ8(x,w),null)},
$S:z+24}
B.dQ5.prototype={
$0(){this.a.af3(this.b)
return null},
$S:0}
B.dQ6.prototype={
$0(){var x=this.a
return x.m(new B.dQ4(x,this.b,this.c))},
$S:0}
B.dQ4.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQ7.prototype={
$0(){this.a.NL(this.b)
return null},
$S:0}
B.dQ8.prototype={
$0(){this.a.ahC(this.b)
return null},
$S:0}
B.d2d.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*18)),e)},
$S:100}
B.d2e.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:137}
B.d2B.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.d2A.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d2x.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d2y.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d2z.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d2v.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fP(w,C.A,x,new B.d2t(this.a),C.fZ,C.dv,!0,x,!1,x,x)
$.aW.x1$.push(new B.d2u(this.a))
return C.bI},
$S:138}
B.d2t.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2r(this.a))
return C.bI},
$S:189}
B.d2r.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2o(x))},
$S:9}
B.d2o.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2u.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2q(x))},
$S:9}
B.d2q.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2w.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2s(this.a))
return C.bI},
$S:189}
B.d2s.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2p(x))},
$S:9}
B.d2p.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2a.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d29(x,d))},
$S:1739}
B.d29.prototype={
$0(){return this.a.f=this.b===C.uF},
$S:0}
B.d2b.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d28(x,d))},
$S:9}
B.d28.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d2c.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d27(x,d))},
$S:9}
B.d27.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d23.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d24.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d25.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d26.prototype={
$1(d){return this.a.d.ML(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d2O.prototype={
$0(){var x=this.a.a
return B.rq(x.c,x.d)},
$S:1740}
B.d2P.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d2Q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d2R.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d2S.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d2T.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d2V.prototype={
$0(){var x=this.a
x.m(new B.d2U(x))},
$S:0}
B.d2U.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pT(0)},
$S:0}
B.d2K.prototype={
$1(d){return this.a.Qn(this.b)},
$S:12}
B.d2L.prototype={
$1(d){return this.a.Qm(this.b)},
$S:12}
B.d2C.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d2D.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d2E.prototype={
$1(d){return D.h1V},
$S:z+25}
B.d2J.prototype={
$2(d,e){if(d)B.UJ()},
$S:119}
B.d2F.prototype={
$0(){return this.a.a9r(this.b)},
$S:0}
B.d2G.prototype={
$0(){return this.a.a9o(this.b)},
$S:0}
B.d2H.prototype={
$0(){return this.a.adE(this.b)},
$S:0}
B.d2I.prototype={
$0(){return this.a.a1c(this.b)},
$S:0}
B.d22.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d2N.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pX(),$async$$0)
case 2:u.m(new B.d2M(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d2M.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c81.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.c82.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c80.prototype={
$2(d,e){return this.bjk(d,e)},
bjk(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UK(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1741}
B.fr7.prototype={
$1(d){if(d===D.a6m&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.fr8.prototype={
$0(){},
$S:11}
B.frF.prototype={
bkT(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ffq(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.haO(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bkT(d,e)},
$S:679}
B.frE.prototype={
$1(d){var x=this
d.b=new B.frD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.frD.prototype={
$1(d){return this.bkS(d)},
bkS(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZq(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aJ(0,n,null)
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
return A.b(B.ffq(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.u(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6K(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ayO.prototype,"gcds","PZ",0)
x(v,"gcej","J1",0)
x(v,"gcdP","xS",0)
x(v=B.aCI.prototype,"gc6t","adC",0)
x(v,"gc6u","Zk",0)
x(v,"gct3","ahj",0)
x(v=B.aCL.prototype,"gc6v","Zl",0)
x(v,"gct4","a1w",0)
x(B.aCJ.prototype,"gc6w","adD",0)
x(B.ayN.prototype,"gc6B","c6C",4)
x(v=B.aCK.prototype,"gcdQ","a_s",0)
x(v,"gcrC","crD",4)
x(v,"gb12","axW",0)
x(v,"gcuB","ahJ",0)
x(v,"gbO5","Xf",0)
x(v,"gc6A","E9",0)
x(B.ayP.prototype,"gb4T","a1v",0)
x(B.ayM.prototype,"gc6D","Zm",0)
x(v=B.ayS.prototype,"gb_J","cc7",4)
x(v,"gc6x","adG",0)
x(v=B.ayQ.prototype,"gcqB","a1h",0)
x(v,"gaYU","adF",0)
w(B.ayL.prototype,"gawx","awy",8)
x(v=B.ayR.prototype,"gcgy","afw",0)
x(v,"gbNE","aac",0)
w(v,"gawx","awy",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cj_,B.a95,B.atd,B.aBl,B.aEx,B.jn,B.abD,B.buP,B.EU,B.WU])
w(B.cj0,B.cj_)
w(B.b3x,B.a95)
x(A.hY,[B.ciW,B.ciX,B.ciY,B.ciV,B.ciZ,B.cj1,B.cj2,B.cj3,B.cj4,B.cj5,B.cj6,B.cj7,B.cj8,B.fl5,B.fIu,B.fIw,B.fIv,B.fIJ,B.fIK,B.fng,B.d2i,B.d2k,B.d2j,B.d2n,B.fpg,B.fpK,B.c7w,B.c7D,B.c7E,B.c7z,B.c7x,B.c7A,B.c7B,B.fIH,B.fII,B.dQi,B.dQr,B.dQp,B.dQq,B.fii,B.fns,B.fnt,B.c7V,B.fnv,B.frv,B.flV,B.flW,B.c8_,B.fNt,B.d2h,B.d2f,B.dQe,B.dPa,B.dPg,B.dPz,B.dPf,B.dPG,B.dQ_,B.dQ0,B.dQ1,B.dPx,B.dPP,B.dPO,B.dPQ,B.dPR,B.dPS,B.dPU,B.dPV,B.dPN,B.dPi,B.dPj,B.dPe,B.dPA,B.dPr,B.dPp,B.dPF,B.dPZ,B.dQb,B.dQc,B.d2d,B.d2e,B.d2B,B.d2A,B.d2v,B.d2t,B.d2r,B.d2u,B.d2w,B.d2s,B.d2a,B.d2b,B.d2c,B.d26,B.d2K,B.d2L,B.d2E,B.c81,B.c82,B.fr7,B.frE,B.frD])
w(B.b3y,B.atd)
x(A.ja,[B.fIt,B.d2l,B.d2m,B.fpe,B.fpf,B.fpJ,B.dP7,B.dQg,B.dQh,B.dQf,B.dQj,B.dQk,B.dQl,B.dQm,B.dQn,B.dQo,B.dP8,B.dP9,B.fnu,B.d2g,B.dPC,B.dPD,B.dPb,B.dPc,B.dPh,B.dQ2,B.dQ3,B.dPw,B.dPH,B.dPl,B.dPy,B.dPT,B.dPI,B.dPJ,B.dPK,B.dPL,B.dPM,B.dPk,B.dPd,B.dPB,B.dPu,B.dPn,B.dPs,B.dPt,B.dPv,B.dPm,B.dPE,B.dPW,B.dPX,B.dPY,B.dQ9,B.dQa,B.dQ5,B.dQ6,B.dQ4,B.dQ7,B.dQ8,B.d2x,B.d2y,B.d2z,B.d2o,B.d2q,B.d2p,B.d29,B.d28,B.d27,B.d23,B.d24,B.d25,B.d2O,B.d2P,B.d2Q,B.d2R,B.d2S,B.d2T,B.d2V,B.d2U,B.d2C,B.d2D,B.d2F,B.d2G,B.d2H,B.d2I,B.d22,B.d2N,B.d2M,B.fr8])
x(A.mc,[B.abW,B.Nd,B.a96,B.Of,B.WT,B.Oe,B.EV])
x(A.ag,[B.YP,B.Uy,B.UC,B.Uz,B.YO,B.UA,B.YQ,B.YN,B.Pp,B.YS,B.YM,B.YT])
x(A.ah,[B.ayO,B.aCI,B.aCL,B.aCJ,B.ayN,B.aCK,B.ayP,B.ayM,B.ayS,B.ayQ,B.ayL,B.ayR])
x(A.au,[B.aco,B.ayK,B.bcW,B.abX,B.abV,B.bcX])
x(A.km,[B.c7C,B.c7y,B.c7G,B.c7H,B.fJn,B.dPq,B.dPo,B.dQd,B.d2J,B.c80,B.frF])
x(A.iT,[B.bih,B.but])})()
A.k0(b.typeUniverse,JSON.parse('{"b3x":{"a95":[]},"b3y":{"atd":[]},"YP":{"ag":[],"r":[]},"ayO":{"ah":["YP"]},"aco":{"au":[],"r":[]},"Uy":{"ag":[],"r":[]},"UC":{"ag":[],"r":[]},"aCI":{"ah":["Uy"]},"aCL":{"ah":["UC"]},"bih":{"iT":[]},"Uz":{"ag":[],"r":[]},"aCJ":{"ah":["Uz"]},"YO":{"ag":[],"r":[]},"UA":{"ag":[],"r":[]},"abX":{"au":[],"r":[]},"YQ":{"ag":[],"r":[]},"YN":{"ag":[],"r":[]},"Pp":{"ag":[],"r":[]},"YS":{"ag":[],"r":[]},"abV":{"au":[],"r":[]},"YM":{"ag":[],"r":[]},"YT":{"ag":[],"r":[]},"ayN":{"ah":["YO"]},"but":{"iT":[]},"aCK":{"ah":["UA"]},"ayK":{"au":[],"r":[]},"bcW":{"au":[],"r":[]},"ayP":{"ah":["YQ"]},"ayM":{"ah":["YN"]},"ayS":{"ah":["Pp"]},"ayQ":{"ah":["YS"]},"ayL":{"ah":["YM"]},"ayR":{"ah":["YT"]},"bcX":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ub"),k:x("LG()"),m:x("bl<m,m>"),F:x("r2"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a5<m,R>>"),t:x("O<a5<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(ly,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iT>"),a:x("O<dL>"),p:x("O<r>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<m,m>"),P:x("a5<m,@>"),f:x("a5<@,@>"),o:x("iD"),e:x("ifM"),af:x("E9"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("w6"),ab:x("EU"),br:x("atd"),v:x("WU"),N:x("m"),X:x("bq<L>"),Q:x("lK"),D:x("dL"),aw:x("cx<m>"),cd:x("a_<a5<m,@>>"),c7:x("r"),ch:x("bX<ai<jn>>"),aW:x("bX<dL?>"),aY:x("bX<~>"),cx:x("abW"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBl"),bG:x("aEx"),q:x("n2"),B:x("pq<EU>"),c6:x("pq<a96>"),y:x("R"),i:x("L"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a5<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("WU?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,Nd,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abD?"),bk:x("aBl?"),ag:x("aEx?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aZF=new A.ay(C.aE,2,C.q,-1)
D.bXx=new A.a8(C.a3,C.a8,C.x,C.a2d,null,null)
D.b0j=new A.o(null,null,null,C.mc,null,D.bXx,C.n)
D.b1M=new A.o(null,null,null,C.mc,null,E.GN,C.n)
D.acx=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adM=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aeJ=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aga=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fkv=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fyJ=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Dx,null,null,null,null,null,null,null,null,null)
D.d67=x([D.fkv,C.am,D.fyJ],y.p)
D.bnq=new A.fm(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d67,null)
D.fD2=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.foN=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dx,null,null,null,null,null,null,null,null,null)
D.dlV=x([D.fD2,C.am,D.foN],y.p)
D.bnA=new A.fm(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dlV,null)
D.fzj=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fsB=new A.y("Enter the access code and password from your organization.",null,G.Dx,null,null,null,null,null,null,null,null,null)
D.djK=x([D.fzj,C.am,D.fsB],y.p)
D.bnK=new A.fm(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.djK,null)
D.btH=new A.Q(16,10,16,28)
D.btP=new A.Q(16,14,16,4)
D.bv2=new A.Q(20,0,20,16)
D.bvx=new A.Q(20,8,20,16)
D.aiV=new A.Q(24,22,24,20)
D.a0l=new A.a0(63394,"MaterialIcons",!1)
D.alX=new A.a0(63515,"MaterialIcons",!1)
D.bHU=new A.a0(983813,"MaterialIcons",!1)
D.bF7=new A.a0(62867,"MaterialIcons",!1)
D.bIT=new A.ae(D.bF7,44,C.c,null,null,null)
D.bJY=new A.ae(C.q0,null,C.ad,null,null,null)
D.bLm=new A.ae(C.j2,18,null,null,null,null)
D.bN2=new A.ae(D.a0l,26,C.c,null,null,null)
D.bNz=new A.ae(C.BU,null,null,null,null,null)
D.bO7=new A.ae(C.yz,null,null,null,null,null)
D.bPg=new A.ae(W.NU,null,null,null,null,null)
D.bPA=new A.ae(C.hq,16,null,null,null,null)
D.bT1=new A.ae(C.rl,16,null,null,null,null)
D.bJa=new A.ae(C.nk,null,null,null,null,null)
D.bTT=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOF=new A.ae(C.G2,null,null,null,null,null)
D.bTY=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJv=new A.ae(H.GA,null,null,null,null,null)
D.bU8=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cHy=x([C.fd,C.aZ,C.aE],y.O)
D.bZo=new A.a8(C.az,C.aC,C.x,D.cHy,null,null)
D.cH0=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Q6=x([C.fd,C.aE],y.O)
D.Qm=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mF=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.deq=x([C.pE,C.aE],y.O)
D.e6g={iceServers:0}
D.aGT={urls:0}
D.dpF=new A.bl(D.aGT,["stun:stun.l.google.com:19302"],y.m)
D.dpE=new A.bl(D.aGT,["stun:stun1.l.google.com:19302"],y.m)
D.cXn=x([D.dpF,D.dpE],A.ax("O<a5<m,m>>"))
D.doX=new A.bl(D.e6g,[D.cXn],A.ax("bl<m,@>"))
D.HQ=new B.Nd(0,"lanDirect")
D.RI=new B.Nd(1,"cloudStash")
D.dB0=new B.Nd(2,"inlineInstant")
D.RJ=new B.Nd(3,"webrtcLink")
D.zj=new B.Nd(4,"videoCloud")
D.fyI=new A.y("Receive file",null,C.nC,null,null,null,null,null,null,null,null,null)
D.cx1=x([E.anB,C.ab,D.fyI],y.p)
D.eQ9=new A.cl(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cx1,null)
D.ecb=new A.D(C.cm,D.eQ9,null)
D.fbE=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2T,null,null,null)
D.fl2=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fbE,null,C.L,null,null,null,null,null,null,null)
D.ebt=new A.D(C.Bm,D.fl2,null)
D.b61=new A.cp(C.A,null,null,D.ebt,null)
D.ehX=new A.cL(0,null,0,28,null,null,D.b61,null)
D.eif=new B.a96(0,"RTCDataChannelConnecting")
D.aMd=new B.a96(1,"RTCDataChannelOpen")
D.aMe=new B.a96(3,"RTCDataChannelClosed")
D.eig=new B.EV(0,"RTCIceConnectionStateNew")
D.eih=new B.EV(1,"RTCIceConnectionStateChecking")
D.eii=new B.EV(2,"RTCIceConnectionStateCompleted")
D.eij=new B.EV(3,"RTCIceConnectionStateConnected")
D.eik=new B.EV(4,"RTCIceConnectionStateCount")
D.eil=new B.EV(5,"RTCIceConnectionStateFailed")
D.eim=new B.EV(6,"RTCIceConnectionStateDisconnected")
D.aMf=new B.EV(7,"RTCIceConnectionStateClosed")
D.aMg=new B.WT(0,"RTCIceGatheringStateNew")
D.ein=new B.WT(1,"RTCIceGatheringStateGathering")
D.a6m=new B.WT(2,"RTCIceGatheringStateComplete")
D.a6n=new B.Oe(0,"RTCPeerConnectionStateClosed")
D.aMh=new B.Oe(1,"RTCPeerConnectionStateFailed")
D.aMi=new B.Oe(2,"RTCPeerConnectionStateDisconnected")
D.aMj=new B.Oe(3,"RTCPeerConnectionStateNew")
D.aMk=new B.Oe(4,"RTCPeerConnectionStateConnecting")
D.aMl=new B.Oe(5,"RTCPeerConnectionStateConnected")
D.eio=new B.Of(0,"RTCSignalingStateStable")
D.eip=new B.Of(1,"RTCSignalingStateHaveLocalOffer")
D.eiq=new B.Of(2,"RTCSignalingStateHaveRemoteOffer")
D.eir=new B.Of(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eis=new B.Of(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMm=new B.Of(5,"RTCSignalingStateClosed")
D.eUE=new A.ar(160,48)
D.b7f=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eW8=new A.a7(16,16,D.b7f,null)
D.foa=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXz=new A.b1(D.foa,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvy=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eXC=new A.b1(D.fvy,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fE6=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eXJ=new A.b1(D.fE6,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fnL=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eY8=new A.b1(D.fnL,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzu=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aP9=new A.b1(D.fzu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fAS=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eYB=new A.b1(D.fAS,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fFv=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eYQ=new A.b1(D.fFv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fDw=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eYV=new A.b1(D.fDw,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fEJ=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eZG=new A.b1(D.fEJ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmp=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f_c=new A.b1(D.fmp,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxm=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f_x=new A.b1(D.fxm,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fqo=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f02=new A.b1(D.fqo,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fFB=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f06=new A.b1(D.fFB,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmF=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0c=new A.b1(D.fmF,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.flo=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0r=new A.b1(D.flo,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fil=new A.y("NGMY DOC SHARE",null,C.aQt,null,null,null,null,null,null,null,null,null)
D.fjD=new A.y("Show this to sender",null,C.kf,null,null,null,null,null,null,null,null,null)
D.fkC=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fpb=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fpz=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fqy=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fr1=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ftO=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fwz=new A.y("Send to their Doc Share",null,C.nA,null,null,null,null,null,null,null,null,null)
D.fwS=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxa=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fya=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fBm=new A.y("Share files & videos\nwith a scan.",null,C.aQu,null,null,null,null,null,null,null,null,null)
D.fBF=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h1V=new B.YM(null)
D.a9x=new B.abW(0,"docShare")
D.a9y=new B.abW(1,"gate")
D.UH=new B.abW(2,"gateNoIndividual")})();(function staticFields(){$.aNd=null
$.fdg=function(){var x=y.N
return A.U(x,x)}()
$.G7=A.U(y.N,y.D)
$.afZ=A.U(y.N,A.ax("ly"))
$.QF=A.U(y.N,y.D)
$.fdK=A.U(y.N,A.ax("abD"))
$.c7U=A.U(y.S,A.ax("buP"))
$.haN=1
$.hYl=null
$.hYk=null
$.hPR=null
$.h_K=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"igg","hs2",()=>new B.cj0())
x($,"ieb","h3u",()=>C.a.t(A.bu(A.bu(A.bu(A.GI(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["tE7FIl8sxx2b+0k0SWM6he/1JLM="]=a.current})($__dart_deferred_initializers__);