((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cjp:function cjp(){},
hJX(d){var x=null,w=new B.b3L(d,D.eiq,new A.pr(x,x,y.c6),new A.pr(x,x,y.B))
w.by2(d)
return w},
b3L:function b3L(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cjk:function cjk(d){this.a=d},
cjl:function cjl(d){this.a=d},
cjm:function cjm(d){this.a=d},
cjj:function cjj(d){this.a=d},
cjn:function cjn(d){this.a=d},
hJY(d,e){var x=y.N
x=new B.b3M(d,e,A.U(x,y.e),A.U(x,y.z))
x.by3(d,e)
return x},
b3M:function b3M(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cjq:function cjq(d){this.a=d},
cjr:function cjr(d){this.a=d},
cjs:function cjs(d){this.a=d},
cjt:function cjt(d){this.a=d},
cju:function cju(d){this.a=d},
cjv:function cjv(d){this.a=d},
cjw:function cjw(d){this.a=d},
cjx:function cjx(d){this.a=d},
h_O(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yJ.LT(x,"ngmy_doc_share_v1",new B.flt(),1)},
hQw(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.f1(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.A4(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cI.aL(d)
return x}catch(w){return v}return v},
QX(d,e){return B.i4I(d,e)},
i4I(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QX=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNp
x=7
return A.b(o==null?$.aNp=B.h_O():o,$async$QX)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mJ(s,"blobs","readwrite")
C.iM.mm(J.mH(q,"blobs"),r,d)
x=8
return A.b(J.pB(q),$async$QX)
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
return A.i($async$QX,w)},
QW(d){return B.i4H(d)},
i4H(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNp
x=7
return A.b(o==null?$.aNp=B.h_O():o,$async$QW)
case 7:s=f
r=J.mJ(s,"blobs","readonly")
x=8
return A.b(C.iM.zu(J.mH(r,"blobs"),d),$async$QW)
case 8:q=f
x=9
return A.b(J.pB(r),$async$QW)
case 9:o=B.hQw(q)
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
return A.i($async$QW,w)},
agL(d){return B.i4G(d)},
i4G(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNp
x=7
return A.b(p==null?$.aNp=B.h_O():p,$async$agL)
case 7:s=f
r=J.mJ(s,"blobs","readwrite")
C.iM.FI(J.mH(r,"blobs"),d)
x=8
return A.b(J.pB(r),$async$agL)
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
return A.i($async$agL,w)},
flt:function flt(){},
hSP(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.boi(w,v))}return u},
hpR(d,e){var x,w={},v=A.aVP("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fIS(w,v,e)
C.w4.yo(v,"change",new B.fIU(w,v,!1))
C.w4.yo(v,"cancel",new B.fIT(w))
$.eU.mt()
v.click()
A.bN(C.ah6,new B.fIR(w),y.H)},
fIS:function fIS(d,e,f){this.a=d
this.b=e
this.c=f},
fIU:function fIU(d,e,f){this.a=d
this.b=e
this.c=f},
fIT:function fIT(d){this.a=d},
fIR:function fIR(d){this.a=d},
CZ(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CZ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTs()?3:4
break
case 3:x=5
return A.b(B.hkX(e,d,s,!0,!1,f,g,h,!1,i),$async$CZ)
case 5:x=1
break
case 4:x=6
return A.b(B.QB(d,s,f,g,h,i),$async$CZ)
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
return A.b(B.Io(s,d),$async$CZ)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fgV(s,d),$async$CZ)
case 14:x=12
return A.b(r.hkX(q,p,o,n,m,l,k,j,a1,i),$async$CZ)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cm(A.ea(new B.fJ6(s,i,d,f,g,h),!1,null,y.H)),$async$CZ)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cm(A.ea(new B.fJ7(s,i,d,f,g,h),!1,null,y.H)),$async$CZ)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CZ,w)},
QB(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QB=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZw(e),$async$QB)
case 3:u=k
x=4
return A.b(B.aoX(d,e,!1),$async$QB)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Io(e,d),$async$QB)
case 7:if(k){v=D.a9B
x=1
break}x=8
return A.b(B.UI(e),$async$QB)
case 8:v=t?D.UK:D.a9C
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZu(d,e)){v=D.a9B
x=1
break}x=11
return A.b(B.UI(e),$async$QB)
case 11:v=t?D.UK:D.a9C
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fVY(d,e)){v=D.a9B
x=1
break}x=14
return A.b(B.UI(e),$async$QB)
case 14:v=D.UK
x=1
break
case 13:v=t?D.UK:D.a9C
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QB,w)},
fgV(d,e){var x=0,w=A.j(y.y),v
var $async$fgV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZu(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZw(d),$async$fgV)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgV,w)},
hkX(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cm(A.ea(new B.fnE(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hg5(d,e,f,g,h,i,j){return new B.YW(e,j,d,g,h,i,f,null)},
fpB(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fpB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fpE(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fpB)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpB,w)},
fq5(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fq5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fq7(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fq5)
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
return A.i($async$fq5,w)},
h_X(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fBs(d,e){var x=0,w=A.j(y.H),v
var $async$fBs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UI(e),$async$fBs)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fBs,w)},
fJ6:function fJ6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJ7:function fJ7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ac2:function ac2(d,e){this.a=d
this.b=e},
fnE:function fnE(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YW:function YW(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az_:function az_(){this.c=this.a=this.d=null},
d2L:function d2L(d,e){this.a=d
this.b=e},
d2I:function d2I(d){this.a=d},
d2K:function d2K(d){this.a=d},
d2J:function d2J(d){this.a=d},
d2N:function d2N(){},
d2M:function d2M(d){this.a=d},
acv:function acv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBx:function aBx(d,e){this.a=d
this.b=e},
aEJ:function aEJ(d,e,f){this.a=d
this.b=e
this.c=f},
fpE:function fpE(d,e,f){this.a=d
this.b=e
this.c=f},
fpC:function fpC(d){this.a=d},
fpD:function fpD(d,e,f){this.a=d
this.b=e
this.c=f},
fq7:function fq7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fq6:function fq6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7V(d,e,f,g,h){return B.hES(d,e,f,g,h)},
hES(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7V=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dz(d,new B.c7W(s,e,h,g,f,q),y.g),y.l),$async$c7V)
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
return A.i($async$c7V,w)},
aZr(d,e,f,g,h){return B.hET(d,e,f,g,h)},
hET(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZr=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aue("GET",d)
o=A.fSn()
if(o==null)o=new A.LF(A.a([],y.W))
x=7
return A.b(o.eZ(0,s).d7(0,C.Fl),$async$aZr)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cg(),$async$aZr)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BE(q,h,o,e,f,"Received via QR")
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
return A.i($async$aZr,w)},
aZq(d){return B.hEQ(d)},
hEQ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d7(0,C.o_),$async$aZq)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aK(0,A.lT(A.lQ(p.e)).cB(0,p.w),null)
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
return A.i($async$aZq,w)},
c7U(d){return B.hER(d)},
hER(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d7(0,C.pV),$async$c7U)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lT(A.lQ(q.e)).cB(0,q.w)
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
return A.i($async$c7U,w)},
c7W:function c7W(d,e,f,g,h,i){var _=this
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
Im(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hEY(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Im(C.a.b5(u,v.length))}return null},
hEZ(d){var x=B.Im(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hEU(){var x,w=$.py(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.h2(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a6E(d){return B.hEV(d)},
hEV(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bJ),$async$a6E)
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
return A.i($async$a6E,w)},
a6F(d,e){return B.hEW(d,e)},
hEW(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6F=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cH,null),$async$a6F)
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
return A.i($async$a6F,w)},
BD(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$BD)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Im(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6G(r),$async$BD)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6E("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BD)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Im(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BD)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hEU()
x=14
return A.b(B.a6G(m),$async$BD)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6F("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 15:k=f
x=16
return A.b(B.a6F("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BD)
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
return A.i($async$BD,w)},
a6G(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Im(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6E("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6G)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6G,w)},
a6H(d,e,f,g){return B.hF_(d,e,f,g)},
hF_(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6H=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Im(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6G(r),$async$a6H)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c81())>1048576||g.b6(d,new B.c82())){v=B.Et(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6S("myCode",d,a0),$async$a6H)
case 4:u=a3
try{t=C.S.aK(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Et(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZz(u,g.gM(d),a0),$async$a6H)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.py().aw(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c83(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZs(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6H)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6H,w)},
Et(d,e,f,g,h){return B.hEX(d,e,f,g,h)},
hEX(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Et=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Et)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c7Y())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.py().aw(9999)
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
a1=B.Iq(a9,q)
a0=new A.Kf(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Et)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aV(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p_(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aah(a1.a,a4,"media",a1.d,a2).wY(m,n,new A.DK(!0,q.c)),$async$Et)
case 12:J.ce(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Et)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPV(r),$async$Et)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dz(a6,new B.c7Z(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZs(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Et)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPV(r),$async$Et)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Et,w)},
aZs(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6E(t),$async$aZs)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7X(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6F(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZs,w)},
Nf(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Nf=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6E("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Nf)
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
return A.b(B.aZt(k,a0),$async$Nf)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZy(h),$async$Nf)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UP(g,a0),$async$Nf)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c8_(),q),n)
d=A.C(new A.a_(r,new B.c80(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.db(d,0,A.dI(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6F("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Nf)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nf,w)},
aZt(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZt=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.i8u(k,j)
C.d.v(s,i)
x=5
return A.b(B.CX(l,m,"Received via My Code",t,e,i),$async$aZt)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPV(s),$async$aZt)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZt,w)},
c81:function c81(){},
c82:function c82(){},
c83:function c83(){},
c7Y:function c7Y(){},
c7Z:function c7Z(){},
c7X:function c7X(){},
c8_:function c8_(){},
c80:function c80(){},
fJ3(d,e){var x=0,w=A.j(y.H)
var $async$fJ3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cm(A.ea(new B.fJ4(e),!1,null,y.H)),$async$fJ3)
case 2:return A.h(null,w)}})
return A.i($async$fJ3,w)},
bD0(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bD0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cm(A.ea(new B.fJ5(g,e,f),!1,null,y.y)),$async$bD0)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bD0,w)},
fJ4:function fJ4(d){this.a=d},
fJ5:function fJ5(d,e,f){this.a=d
this.b=e
this.c=f},
UF:function UF(d,e){this.c=d
this.a=e},
aCU:function aCU(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dPx:function dPx(d,e){this.a=d
this.b=e},
UJ:function UJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCX:function aCX(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dQG:function dQG(d){this.a=d},
dQH:function dQH(d){this.a=d},
dQI:function dQI(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d){this.a=d},
dQK:function dQK(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQO:function dQO(d){this.a=d},
dQR:function dQR(){},
dQP:function dQP(d){this.a=d},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
biv:function biv(){},
UG:function UG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCV:function aCV(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dPy:function dPy(d){this.a=d},
dPz:function dPz(d){this.a=d},
fVZ(d){var x=d.hX
if(x>=0)return C.o.N(x)
return 10},
hF1(d){var x=d.kN
if(x>=0)return x
return 4.99},
hF0(d){var x=d.lr,w=y.N
w=x.j9(x,new B.c85(),w,w)
return w},
hb9(d){var x=d.kO,w=y.N
w=x.j9(x,new B.c86(),w,w)
return w},
aZw(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZw)
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
return A.i($async$aZw,w)},
a6J(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a6J)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6J)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6J,w)},
UI(d){var x=0,w=A.j(y.H),v,u
var $async$UI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$UI)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UI,w)},
fVY(d,e){var x,w,v
if(B.hF1(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hF0(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aZu(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hb9(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
hba(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hb9(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bR(A.dE(f,0,0,0,0,0).a).a6().ac())
d.kO=w},
aoY(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aoY)
case 7:s=f
r=A.u(p)
r=A.eP(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoY,w)},
aoZ(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoY(d),$async$aoZ)
case 3:u=f
x=5
return A.b(A.ay(),$async$aoZ)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoZ,w)},
aoX(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fVZ(d)
if(u<=0){v=!1
x=1
break}if(B.fVY(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoY(e),$async$aoX)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoX,w)},
aZv(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Io(e,d),$async$aZv)
case 3:if(g){v=-1
x=1
break}u=B.fVZ(d)
if(u<=0){v=-1
x=1
break}if(B.fVY(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoY(e),$async$aZv)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZv,w)},
c88(d,e,f){var x=0,w=A.j(y.y),v
var $async$c88=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Io(e,d),$async$c88)
case 3:if(h){v=!1
x=1
break}v=B.aoX(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c88,w)},
c87(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c87=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c88(d,u,i.gTs()),$async$c87)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c87,w)},
a6I(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6I=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTs()){v=!0
x=1
break}if(B.aZu(d,u)){v=!0
x=1
break}x=5
return A.b(A.lh(u,C.S8),$async$a6I)
case 5:x=k?3:4
break
case 3:B.hba(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6I)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kW(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.S8,"Doc Share for Organizations"),$async$a6I)
case 7:if(!k){v=!1
x=1
break}B.hba(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6I)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
c85:function c85(){},
c86:function c86(){},
fJJ(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fJJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fJJ)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fdE.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fdE.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJJ,w)},
iaO(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fdE.br($.fdE,new B.fJL(d))},
fJL:function fJL(d){this.a=d},
ff_(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$ff_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jm,null,y.H),$async$ff_)
case 3:C.Aa.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ff_,w)},
afD(d,e,f){var x=0,w=A.j(y.H),v
var $async$afD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fe7.n(0,d,new B.abK(A.bo(e,!0,v)))
x=3
return A.b(A.ay(),$async$afD)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afD)
case 2:return A.h(null,w)}})
return A.i($async$afD,w)},
afx(d){return B.hUF(d)},
hUF(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fe7.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$afx)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aK(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fiG(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abK(r)
$.fe7.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afx,w)},
Qr(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.Gb.n(0,d,u)
x=3
return A.b(B.QX(d,u),$async$Qr)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qr,w)},
aNL(d){return B.hUD(d)},
hUD(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gb.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QW(d),$async$aNL)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.Gb.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aNL)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aL(r)
x=!J.cn(q)?9:10
break
case 9:B.Qr(d,q)
x=11
return A.b(J.hy(s,d),$async$aNL)
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
return A.i($async$aNL,w)},
hQT(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cf(J.f1(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cf(A.A4(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cf(d)),y.K)
return A.f9(null,y.K)},
a1o(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fM(r,"loadend",new B.fnQ(r,t),!1,s)
A.fM(r,"error",new B.fnR(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iq(0,C.Mf,new B.fnS())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1o,w)},
aO4(d,e,f){return B.hWU(d,e,f)},
hWU(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aO4=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1o(i),$async$aO4)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QX(o,p),$async$aO4)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.ce(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afD(k,j,s),$async$aO4)
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
return A.i($async$aO4,w)},
aO3(d,e,f){return B.hWT(d,e,f)},
hWT(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aO3=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aO4(d,e,f),$async$aO3)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1o(f),$async$aO3)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gb.n(0,s,r)
$.QI.n(0,s,r)
x=11
return A.b(B.Qr(s,r),$async$aO3)
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
return A.i($async$aO3,w)},
BE(d,e,f,g,h,i){return B.hFa(d,e,f,g,h,i)},
hFa(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BE=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aZC(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qr(s,d),$async$BE)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$BE)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cR.gcw().aL(d)),$async$BE)
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
return A.b(B.AF(e),$async$BE)
case 12:j=a2
J.ce(j,m)
x=13
return A.b(B.Gn(e,j),$async$BE)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BE,w)},
UK(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AF(d),$async$UK)
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
k=B.hbc(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZC(),null)
$.ag5.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1o(o),$async$UK)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.Gb.n(0,h,g)
$.QI.n(0,h,g)
B.Qr(h,g)
x=9
break
case 10:x=11
return A.b(B.aO3(d,m,o),$async$UK)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gn(d,t),$async$UK)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UK,w)},
fW2(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fW2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hbc(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ip(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.BE(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fW2,w)},
Ip(d,e,f,g,h,i){return B.hF9(d,e,f,g,h,i)},
hF9(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ip=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kf(A.dI(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ip)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h5(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.Rv(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.QX(k,l),$async$Ip)
case 11:J.ce(q,k);++p
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
return A.b(j.a7(0),$async$Ip)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.QX(k,new Uint8Array(A.cf(n))),$async$Ip)
case 15:J.ce(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afD(r,q,g),$async$Ip)
case 16:f=new B.jn(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aZC(),null)
x=17
return A.b(B.AF(d),$async$Ip)
case 17:e=a6
J.ce(e,f)
x=18
return A.b(B.Gn(d,e),$async$Ip)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ip,w)},
UM(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UM=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ag5.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1o(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afx(s),$async$UM)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QW(u[o]),$async$UM)
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
case 5:i=$.QI.h(0,s)
if(i==null)i=$.Gb.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rr(d,e),$async$UM)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QI.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A4(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UM,w)},
hbc(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rr(d,e){return B.hFb(d,e)},
hFb(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rr=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QI.h(0,f)
if(e==null)e=$.Gb.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.ag5.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1o(s),$async$rr)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.Gb.n(0,f,r)
$.QI.n(0,f,r)
B.Qr(f,r)
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
return A.b(B.afx(f),$async$rr)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axN(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QW(g[l]),$async$rr)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.anL()
if(!C.aH.gam(r)){$.Gb.n(0,f,r)
$.QI.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNL(f),$async$rr)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QI.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UM(a0,a1,0,g),$async$rr)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.cf(i))
$.Gb.n(0,f,h)
$.QI.n(0,f,h)
B.Qr(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rr,w)},
hFe(d){var x,w,v=$.ag5.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hFf(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hFc(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ap4(d,e,f,g,h){return B.hFd(d,e,f,g,h)},
hFd(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ap4=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ag5.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1o(s),$async$ap4)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rr(g,e),$async$ap4)
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
return A.b(n.ij(d).wY(h,r,new A.DK(!0,e.c)),$async$ap4)
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
return A.i($async$ap4,w)},
hbe(d,e,f,g,h){var x,w,v,u,t=$.hbd
$.hbd=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c8j.n(0,t,new B.bv3(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axN(u)))
return t},
fW3(d){var x=0,w=A.j(y.H)
var $async$fW3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fW3,w)},
Iq(d,e){var $async$Iq=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ag5.h(0,h)
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
return A.q9(B.UM(d,e,p,o<q?o:q),$async$Iq,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q9(A.FJ(n),$async$Iq,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q9(B.afx("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Iq,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q9(B.QW(h[l]),$async$Iq,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q9(A.FJ(k),$async$Iq,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q9(B.rr(d,e),$async$Iq,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q9(A.FJ(A.A4(j,p,o<i?o:i)),$async$Iq,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q9(null,0,w)
case 2:return A.q9(t.at(-1),1,w)}})
var x=0,w=A.hjQ($async$Iq,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hlF(w)},
aZE(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c8j.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4i(),$async$aZE)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZE,w)},
UL(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8j.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4i(),$async$UL)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afD(r.c,u,r.z),$async$UL)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZC(),null)
u=r.a
x=5
return A.b(B.AF(u),$async$UL)
case 5:s=f
J.ce(s,t)
x=6
return A.b(B.Gn(u,s),$async$UL)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UL,w)},
a6P(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8j.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agL(u[s]),$async$a6P)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
c8l(d,e,f){var x=0,w=A.j(y.H)
var $async$c8l=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bA3(d,e,f),$async$c8l)
case 2:return A.h(null,w)}})
return A.i($async$c8l,w)},
c8m(d,e,f){var x=0,w=A.j(y.H)
var $async$c8m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bA4(d,e,f),$async$c8m)
case 2:return A.h(null,w)}})
return A.i($async$c8m,w)},
Eu(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Eu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AF(d),$async$Eu)
case 2:p=g
J.nt(p,new B.c8k(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gb.W(0,v)
$.ag5.W(0,e)
x=3
return A.b(B.afx(v),$async$Eu)
case 3:u=g
$.fe7.W(0,v)
x=4
return A.b(A.ay(),$async$Eu)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Eu)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Eu)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agL(s[q]),$async$Eu)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agL(v),$async$Eu)
case 13:x=14
return A.b(B.Gn(d,p),$async$Eu)
case 14:return A.h(null,w)}})
return A.i($async$Eu,w)},
aZD(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rr(d,e),$async$aZD)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.ff_(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZD,w)},
AF(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$AF)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aK(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fnT(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AF,w)},
Gn(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Gn)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.frT(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gn)
case 3:return A.h(null,w)}})
return A.i($async$Gn,w)},
bA3(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bA3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AF(d),$async$bA3)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fmi(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDw(f))
x=4
return A.b(B.Gn(d,u),$async$bA3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bA3,w)},
bA4(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bA4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AF(d),$async$bA4)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fmj(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cIl(f))
x=4
return A.b(B.Gn(d,u),$async$bA4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bA4,w)},
abK:function abK(d){this.a=d},
fiG:function fiG(){},
fnQ:function fnQ(d,e){this.a=d
this.b=e},
fnR:function fnR(d){this.a=d},
fnS:function fnS(){},
c8k:function c8k(d){this.a=d},
bv3:function bv3(d,e,f,g,h,i,j,k,l){var _=this
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
fnT:function fnT(){},
frT:function frT(){},
fmi:function fmi(d){this.a=d},
fmj:function fmj(d){this.a=d},
a6Q(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b6(d,new B.c8p())?3:4
break
case 3:x=5
return A.b(B.aZF(d,e),$async$a6Q)
case 5:u=g
if(u!=null){t=u.c
B.Nh(d,u.b,e,t)}v=u
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
return A.b(B.aZA(s),$async$a6Q)
case 10:case 9:if(g){v=new A.PQ(1,D.RM,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UN(d,e),$async$a6Q)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.US(!0,!0,d,e),$async$a6Q)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nh(d,D.zk,e,t)
v=new A.PQ(p,D.zk,t)
x=1
break}v=B.c8o(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Q,w)},
UN(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6S(null,d,e),$async$UN)
case 3:p=g
try{u=C.S.aK(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZz(p,d.length,e),$async$UN)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c8m(e,C.d.gI(d).a,r.b),$async$UN)
case 7:case 6:q=r.a
x=8
return A.b(B.Nh(d,D.RM,e,q),$async$UN)
case 8:v=new A.PQ(d.length,D.RM,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UN,w)},
UO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mF)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6R(d,e),$async$UO)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c8h(s,d,e,t),$async$UO)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZA(t),$async$UO)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rr(e,d),$async$UO)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UN(A.a([d],y.r),e),$async$UO)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UO,w)},
UQ(){var x=0,w=A.j(y.H)
var $async$UQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fVX(),$async$UQ)
case 2:x=3
return A.b(B.aQb(),$async$UQ)
case 3:return A.h(null,w)}})
return A.i($async$UQ,w)},
a6R(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZC()
x=3
return A.b(B.c8l(e,d.a,u),$async$a6R)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
Nh(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nh=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RM&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6R(p,f),$async$Nh)
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
return A.b(B.c8g(o,p,u,f),$async$Nh)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c8h(o,p,f,t),$async$Nh)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c8f(o,u,p,f),$async$Nh)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nh,w)},
aZF(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8n(e,d),$async$aZF)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.US(!1,!0,d,e),$async$aZF)
case 4:u=g
if(u!=null){t=u.b
v=new A.PQ(u.a,D.zk,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZF,w)},
c8n(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c8n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UM(d,s,0,1),$async$c8n)
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
return A.i($async$c8n,w)},
c8o(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6S(null,d,e),$async$c8o)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hbb(u)
if(t.length>800){v=null
x=1
break}v=new A.PQ(d.length,D.dBb,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8o,w)},
ap5(d,e,f){return B.hFi(d,e,f)},
hFi(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ap5=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mI(g,1)
x=B.fW1(g)?3:4
break
case 3:x=5
return A.b(B.c8i(g),$async$ap5)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mI(g,13))
try{k=B.Ev(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mI(g,13))
u=9
x=12
return A.b(B.aZy(q),$async$ap5)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UP(p,a0)
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
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fW0(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UP(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.Ir(C.a.i(J.mI(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.Ir(C.a.i(J.mI(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Ir(h,d,a0)
x=1
break}if(J.f4(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UP(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ap5,w)},
Ir(d,e,f){return B.hFg(d,e,f)},
hFg(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ir=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.aZq(r),$async$Ir)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZq(A.cE(s,0,null)),$async$Ir)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7V(o,r,a1,n,a2),$async$Ir)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c7U(q),$async$Ir)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UP(l,a2),$async$Ir)
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
return A.i($async$Ir,w)},
a6S(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rr(f,r),$async$a6S)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cR.gcw().aL(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6S,w)},
UP(d,e){return B.hFh(d,e)},
hFh(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UP=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aK(0,a2,null)
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
break}i=C.cI.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BE(i,a3,d,k,l,o),$async$UP)
case 9:h=a5
if(h!=null)J.ce(n,h)
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
return A.i($async$UP,w)},
Ng:function Ng(d,e){this.a=d
this.b=e},
c8p:function c8p(){},
a0Y(d){var x=A.P(d).ax.a===C.I,w=x?D.aeN:D.acB,v=x?D.age:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.adQ:C.aL
return new A.aFX([w,s,v,u,t,x?C.fd:C.bT])},
hqz(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fNR(e),d,null,!0,!0,y.N)},
c84(d,e,f,g,h,i,j,k,l){return new B.UH(e,l,d,f,k,j,g,h,i,null)},
YY(d,e,f,g,h,i,j){return new B.bda(g,h,j,e,i,d,f,null)},
fNR:function fNR(d){this.a=d},
YV:function YV(d,e){this.c=d
this.a=e},
ayZ:function ayZ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2H:function d2H(d){this.a=d},
d2F:function d2F(d){this.a=d},
d2G:function d2G(d){this.a=d},
buI:function buI(){},
UH:function UH(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCW:function aCW(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dQE:function dQE(d){this.a=d},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e,f){this.a=d
this.b=e
this.c=f},
dPA:function dPA(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPH:function dPH(d,e,f){this.a=d
this.b=e
this.c=f},
dPG:function dPG(d){this.a=d},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQt:function dQt(d){this.a=d},
dPZ:function dPZ(d,e,f){this.a=d
this.b=e
this.c=f},
dPW:function dPW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPF:function dPF(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dQ5:function dQ5(){},
dPL:function dPL(d){this.a=d},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQr:function dQr(d,e){this.a=d
this.b=e},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQe:function dQe(d){this.a=d},
dQd:function dQd(d){this.a=d},
dQf:function dQf(){},
dQg:function dQg(){},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQj:function dQj(){},
dQk:function dQk(d){this.a=d},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d){this.a=d},
dQ8:function dQ8(d){this.a=d},
dQ9:function dQ9(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQb:function dQb(d){this.a=d},
dPI:function dPI(){},
dPJ:function dPJ(d){this.a=d},
dPK:function dPK(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPD:function dPD(d,e,f){this.a=d
this.b=e
this.c=f},
dQ_:function dQ_(d){this.a=d},
dQ0:function dQ0(d,e,f){this.a=d
this.b=e
this.c=f},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d){this.a=d},
dPN:function dPN(d,e,f){this.a=d
this.b=e
this.c=f},
dPR:function dPR(d){this.a=d},
dPS:function dPS(d){this.a=d},
dPT:function dPT(){},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPO:function dPO(d){this.a=d},
dPM:function dPM(d,e,f){this.a=d
this.b=e
this.c=f},
dPP:function dPP(){},
dQ4:function dQ4(d){this.a=d},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dQo:function dQo(d,e){this.a=d
this.b=e},
dQl:function dQl(d){this.a=d},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQn:function dQn(d){this.a=d},
dQB:function dQB(d){this.a=d},
dQz:function dQz(d){this.a=d},
dQA:function dQA(d){this.a=d},
dQC:function dQC(){},
dQD:function dQD(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e,f){this.a=d
this.b=e
this.c=f},
dQu:function dQu(d,e,f){this.a=d
this.b=e
this.c=f},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQy:function dQy(d,e){this.a=d
this.b=e},
ayW:function ayW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bd9:function bd9(d,e,f){this.c=d
this.d=e
this.a=f},
d2D:function d2D(){},
d2E:function d2E(){},
ac3:function ac3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d30:function d30(){},
d3_:function d3_(d){this.a=d},
YX:function YX(d,e,f){this.c=d
this.d=e
this.a=f},
az0:function az0(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2X:function d2X(d){this.a=d},
d2Y:function d2Y(d,e,f){this.a=d
this.b=e
this.c=f},
d2Z:function d2Z(d,e){this.a=d
this.b=e},
d2V:function d2V(d,e){this.a=d
this.b=e},
d2T:function d2T(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2O:function d2O(d){this.a=d},
d2U:function d2U(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
d2W:function d2W(d){this.a=d},
d2S:function d2S(d){this.a=d},
d2P:function d2P(d){this.a=d},
YU:function YU(d,e,f){this.c=d
this.d=e
this.a=f},
ayY:function ayY(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d2A:function d2A(d){this.a=d},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2B:function d2B(d){this.a=d},
d2y:function d2y(d,e){this.a=d
this.b=e},
d2C:function d2C(d){this.a=d},
d2x:function d2x(d,e){this.a=d
this.b=e},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2w:function d2w(d){this.a=d},
Ps:function Ps(d,e,f){this.c=d
this.d=e
this.a=f},
az3:function az3(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d3d:function d3d(d){this.a=d},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d){this.a=d},
d3h:function d3h(d,e){this.a=d
this.b=e},
d3i:function d3i(d){this.a=d},
d3k:function d3k(d){this.a=d},
d3j:function d3j(d){this.a=d},
YZ:function YZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az1:function az1(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d39:function d39(d,e){this.a=d
this.b=e},
d3a:function d3a(d,e){this.a=d
this.b=e},
d31:function d31(d,e,f){this.a=d
this.b=e
this.c=f},
d32:function d32(d){this.a=d},
d33:function d33(){},
d38:function d38(){},
d34:function d34(d,e){this.a=d
this.b=e},
d35:function d35(d,e){this.a=d
this.b=e},
d36:function d36(d,e){this.a=d
this.b=e},
d37:function d37(d,e){this.a=d
this.b=e},
ac1:function ac1(d,e){this.c=d
this.a=e},
d2s:function d2s(d){this.a=d},
YT:function YT(d){this.a=d},
ayX:function ayX(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Z_:function Z_(d,e){this.c=d
this.a=e},
az2:function az2(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d3c:function d3c(d){this.a=d},
d3b:function d3b(d){this.a=d},
bda:function bda(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hFj(){var x,w=$.py(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.h2(v)},
Ni(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ni=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ni)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Ni)
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
return A.i($async$Ni,w)},
a6T(d){return B.hFk(d)},
hFk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6T)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6T)
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
return A.i($async$a6T,w)},
UR(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ni(),$async$UR)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6T(s),$async$UR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UR,w)},
US(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$US=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$US)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.T(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c8r(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hFj()
t=A.T(u).k("M<1,a5<m,aD>>")
r=A.C(new A.M(u,new B.c8s(s),t),t.k("ak.E"))
x=6
return A.b(B.Ni(),$async$US)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6T(q),$async$US)
case 7:x=8
return A.b(B.a6U(r,u,g,s),$async$US)
case 8:v=new A.boK(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$US,w)},
ap6(d){var x=0,w=A.j(y.y),v,u,t
var $async$ap6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ni(),$async$ap6)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap6,w)},
c8t(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c8t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ni(),$async$c8t)
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
return A.i($async$c8t,w)},
a6U(d,e,f,g){return B.hFl(d,e,f,g)},
hFl(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6U=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ap4("media",r,new B.c8q(s,e,g),f,q),$async$a6U)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UR(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6U)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UR(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6U)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UR(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6U)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6U,w)},
Ev(d,e,f){return B.hFm(d,e,f)},
hFm(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ev=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ev)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ap6(b3),$async$Ev)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ku,null,g),$async$Ev)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ap6(b3),$async$Ev)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ni(),$async$Ev)
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p_(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aah(a8.a,b0,"media",a8.d,a9).CB(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZr(k,n,o,s,b7),$async$Ev)
case 17:j=c0
if(j!=null){J.ce(p,j);++q
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p_(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aah(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ev)
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
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6T(e),$async$Ev)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ev,w)},
c8r:function c8r(){},
c8s:function c8s(d){this.a=d},
c8q:function c8q(d,e,f){this.a=d
this.b=e
this.c=f},
aQb(){var x=0,w=A.j(y.H),v,u
var $async$aQb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hQh=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aQb)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aQb)
case 3:u=$.h08
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aQb)
case 4:$.h08=$.hYL=$.hYM=null
return A.h(null,w)}})
return A.i($async$aQb,w)},
fru(d){var x=0,w=A.j(y.H),v,u
var $async$fru=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6q){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.frv(new A.bX(u,y.aY))
x=3
return A.b(u.iq(0,C.hO,new B.frw()),$async$fru)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fru,w)},
hYJ(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hF3(x):x},
h0c(d){var x=0,w=A.j(y.T),v,u,t
var $async$h0c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.ap8(u)
x=1
break}v=B.fW0(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h0c,w)},
h0b(d){var x=0,w=A.j(y.T),v,u,t
var $async$h0b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.ap9(u)
x=1
break}v=B.fW0(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h0b,w)},
fJt(d){var x=0,w=A.j(y.T),v
var $async$fJt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap9(d),$async$fJt)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJt,w)},
bAV(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h0b(d),$async$bAV)
case 3:q=f
if(q==null){x=1
break}t=C.S.aK(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAV,w)},
ffO(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ffO=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UL(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BE(d.anL(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffO,w)},
Gp(d,e,f){return B.i08(d,e,f)},
i08(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gp=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h0c(a1),$async$Gp)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aK(0,e,null)
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
return A.b($.hss().aDL(D.dp8,null),$async$Gp)
case 4:l=d.h08=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axN(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fs1(f,k,new B.fs2(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a7h(0,new B.X0(r,"offer")),$async$Gp)
case 5:d=l
x=7
return A.b(l.akA(0),$async$Gp)
case 7:x=6
return A.b(d.a79(0,a4),$async$Gp)
case 6:x=8
return A.b(B.fru(l),$async$Gp)
case 8:x=9
return A.b(l.aou(),$async$Gp)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hYJ(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apa(m,h),$async$Gp)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hbb(h)
case 11:v=new A.bo1(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gp,w)},
frv:function frv(d){this.a=d},
frw:function frw(){},
fs2:function fs2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fs1:function fs1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fs0:function fs0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i20(d){switch(d){case"new":return D.eir
case"checking":return D.eis
case"connected":return D.eiu
case"completed":return D.eit
case"failed":return D.eiw
case"disconnected":return D.eix
case"closed":return D.aMh
case"count":return D.eiv}return D.aMh},
i21(d){switch(d){case"new":return D.aMi
case"gathering":return D.eiy
case"complete":return D.a6q}return D.aMi},
ich(d){switch(d){case"stable":return D.eiz
case"have-local-offer":return D.eiA
case"have-local-pranswer":return D.eiC
case"have-remote-offer":return D.eiB
case"have-remote-pranswer":return D.eiD
case"closed":return D.aMo}return D.aMo},
iav(d){switch(d){case"new":return D.aMl
case"connecting":return D.aMm
case"connected":return D.aMn
case"closed":return D.a6r
case"disconnected":return D.aMk
case"failed":return D.aMj}return D.a6r},
a9d:function a9d(d,e){this.a=d
this.b=e},
Oi:function Oi(d,e){this.a=d
this.b=e},
X_:function X_(d,e){this.a=d
this.b=e},
Oh:function Oh(d,e){this.a=d
this.b=e},
EZ:function EZ(d,e){this.a=d
this.b=e},
cjo:function cjo(){},
fXL(d){var x=new B.EY()
x.a=d
x.b=!0
return x},
EY:function EY(){this.b=this.a=$},
a9c:function a9c(){},
atp:function atp(){},
X0:function X0(d,e){this.a=d
this.b=e},
fVX(){var x=0,w=A.j(y.H)
var $async$fVX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVX,w)},
fW_(d,e,f){var x=0,w=A.j(y.T),v
var $async$fW_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mF))){v=null
x=1
break}v=B.fJJ(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fW_,w)},
hbb(d){var x,w=F.ac2.a42(C.dK.aL(d),null)
if(w.length===0){x=C.dK.aL(d)
return C.cR.gcw().aL(x)}return C.cR.gcw().aL(w)},
hF2(d){var x,w,v=C.cI.aL(d)
try{x=C.cg.cB(0,F.ac1.bcy(v,!1))
return x}catch(w){x=C.cg.cB(0,v)
return x}},
fW0(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hF2(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.cg.cB(0,C.cI.aL(x))
return v}catch(u){return x}}return null},
hF3(d){var x,w,v,u,t,s=A.a([],y.s)
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
hF4(){var x,w=$.py(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.h2(v)},
aZx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZx)
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
return A.i($async$aZx,w)},
c89(d,e){return B.hF5(d,e)},
hF5(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c89=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c89)
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
return A.i($async$c89,w)},
aZA(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZx(d),$async$aZA)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZA,w)},
aZz(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hF4()
r=C.a.i(f)
t=C.dK.aL(s)
x=3
return A.b(B.c89(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cR.gcw().aL(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZz)
case 3:if(!h){v=null
x=1
break}v=new A.a00("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZz,w)},
aZy(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZx(o),$async$aZy)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cB(0,C.cI.aL(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZy,w)},
c8a(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c8a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBS("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c8a)
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
return A.i($async$c8a,w)},
aZB(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.In(),$async$aZB)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZB,w)},
ap1(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ap1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap1)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZB(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap1,w)},
ap_(d,e){var x=0,w=A.j(y.H)
var $async$ap_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap_)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ap_)
case 2:return A.h(null,w)}})
return A.i($async$ap_,w)},
a6L(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6L=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6L)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.In(),$async$a6L)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6K(s),$async$a6L)
case 5:x=6
return A.b(B.ap_(f,u),$async$a6L)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6L,w)},
a6M(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6M=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6M)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.In(),$async$a6M)
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
return A.b(B.ap_(g,q),$async$a6M)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6K(u),$async$a6M)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6M,w)},
a6N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6N)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.In(),$async$a6N)
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
s=B.aZu(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a6N)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
c8b(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c8b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c8b)
case 7:s=f
p=A.u(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aK(0,r,null)
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
return A.i($async$c8b,w)},
Io(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Io=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8b(d),$async$Io)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZB(t),$async$Io)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ap0(d),$async$Io)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZu(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ap0(d),$async$Io)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Io,w)},
ap0(d){var x=0,w=A.j(y.H)
var $async$ap0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap0)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ap0)
case 2:return A.h(null,w)}})
return A.i($async$ap0,w)},
aZC(){var x,w=$.py(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.h2(v)},
a6O(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fW1(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c8e(d){return B.hF7(d)},
hF7(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c8e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6O(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c8e)
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
return A.i($async$c8e,w)},
ap3(d,e){return B.hF8(d,e)},
hF8(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ap3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6O(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$ap3)
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
return A.i($async$ap3,w)},
c8g(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6O(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ap3(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c8g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8g,w)},
c8f(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6O(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ap3(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c8f)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8f,w)},
c8h(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c8h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6O(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ap3(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8h,w)},
c8i(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c8i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fW1(d)){v=null
x=1
break}x=3
return A.b(B.c8e(d),$async$c8i)
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
return A.i($async$c8i,w)},
a6V(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6V=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6V)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6V)
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
return A.i($async$a6V,w)},
ap7(d){return B.hFn(d)},
hFn(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ap7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$ap7)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$ap7)
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
return A.i($async$ap7,w)},
ap8(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ap8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ap8)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6V(),$async$ap8)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cB(0,C.cI.aL(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aG(s,j,o)
x=9
return A.b(B.ap7(s),$async$ap8)
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
return A.i($async$ap8,w)},
apa(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$apa)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6V(),$async$apa)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aL(C.a.i(e))
q.n(0,"answer",C.cR.gcw().aL(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.ap7(u),$async$apa)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apa,w)},
ap9(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ap9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ap9)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6V(),$async$ap9)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cB(0,C.cI.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ap9,w)},
ao4(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ao4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.m1(e),$async$ao4)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.h0),$async$ao4)
case 7:q=g
o=q
o=o==null?null:J.eX(J.vq(o))
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
return A.i($async$ao4,w)},
i8u(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aV(C.o.u(w),5,"0")
return v},
fHZ(d){return B.i8w(d)},
i8w(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fHZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").KI(d,3600),$async$fHZ)
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
return A.i($async$fHZ,w)},
CX(d,e,f,g,h,i){var x=null
return B.i8t(d,e,f,g,h,i)},
i8t(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CX=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hbe(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fW3(r),$async$CX)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fHZ(o),$async$CX)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6P(r),$async$CX)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPA)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LF(A.a([],g))
x=15
return A.b(d.eZ(0,A.aue("GET",A.cE(n,0,null))).d7(0,C.Fl),$async$CX)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6P(r),$async$CX)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kf(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CX)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZE(r,k),$async$CX)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CX)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.UL(r)
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
return A.b(B.a6P(r),$async$CX)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CX,w)},
aPV(d){return B.i8v(d)},
i8v(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").W(0,d),$async$aPV)
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
return A.i($async$aPV,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[145]
O=c[40]
F=c[238]
I=c[137]
P=c[218]
E=c[211]
G=c[87]
Q=c[183]
R=c[138]
S=c[216]
K=c[242]
L=c[247]
B=a.updateHolder(c[21],B)
D=c[245]
T=c[182]
M=c[201]
U=c[65]
V=c[248]
W=c[71]
X=c[55]
N=c[86]
Y=c[246]
B.cjp.prototype={
aDL(d,e){return this.cJS(d,e)},
cJS(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.kl(A.cz(t)))
t=J.k(u)
v=B.hJY(C.cR.gcw().aL(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDL,w)}}
B.b3L.prototype={
by2(d){var x=this,w=x.w
w.onclose=A.ho(new B.cjk(x))
w.onopen=A.ho(new B.cjl(x))
w.onmessage=A.ho(new B.cjm(x))
w.onbufferedamountlow=A.ho(new B.cjn(x))},
gdc(d){return this.x},
agT(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EY()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fXL(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$agT)
case 8:v=t.fXL(s.ani(f,0,null))
x=1
break
case 7:case 4:v=B.fXL(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agT,w)}}
B.b3M.prototype={
by3(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.cjq(x)))
w.addEventListener("icecandidate",A.ho(new B.cjr(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.cjs(x)))
w.onicegatheringstatechange=A.ho(new B.cjt(x))
w.addEventListener("signalingstatechange",A.ho(new B.cju(x)))
if(!$.h3U())w.addEventListener("connectionstatechange",A.ho(new B.cjv(x)))
w.addEventListener("negotiationneeded",A.ho(new B.cjw(x)))
w.addEventListener("track",A.ho(new B.cjx(x)))},
akA(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.kl(A.cz(A.U(y.N,y.z)))),y.aQ),$async$akA)
case 3:t=f
v=new B.X0(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akA,w)},
a79(d,e){return this.bns(0,e)},
bns(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a79=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a79)
case 2:return A.h(null,w)}})
return A.i($async$a79,w)},
a7h(d,e){return this.bnI(0,e)},
bnI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7h)
case 2:return A.h(null,w)}})
return A.i($async$a7h,w)},
aou(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aou=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.X0(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aou,w)},
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
B.ac2.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YW.prototype={
T(){return new B.az_()},
gde(){return this.c}}
B.az_.prototype={
Z(){this.a1()
this.adC()},
adC(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZv(u.e,u.c),$async$adC)
case 2:t=e
if(v.c!=null)v.m(new B.d2L(v,t))
return A.h(null,w)}})
return A.i($async$adC,w)},
Q0(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoX(t.e,t.c,!1),$async$Q0)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.f_J)
x=1
break}x=4
return A.b(B.a6J(u.a.c,"individual"),$async$Q0)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5D(A.ea(new B.d2I(u),!1,null,y.H)),$async$Q0)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Q0,w)},
J4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fpB(o),$async$J4)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6N(o.e,r,s,q),$async$J4)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.eXM)
x=1
break}x=5
return A.b(B.a6J(u.a.c,"member"),$async$J4)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5D(A.ea(new B.d2K(u),!1,null,y.H)),$async$J4)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J4,w)},
xU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6I(t.e,o,t.f,t.r,t.w,s),$async$xU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6J(u.a.c,"org_owner"),$async$xU)
case 4:x=5
return A.b(B.ap1(u.a.c),$async$xU)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fq5(o),$async$xU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6L(s,t,o,q.c),$async$xU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.eXJ)
x=1
break}x=10
return A.b(B.ap1(u.a.c),$async$xU)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5D(A.ea(new B.d2J(u),!1,null,y.H)),$async$xU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xU,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jg:C.pL,q=B.fVZ(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fQ,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fiA,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h7,t,t,t),C.aB,D.fBD,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZA,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lE(new B.d2N(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acv(C.eT,C.az_,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcdD(),t),C.ac],v))
p.push(new B.acv(C.oV,C.a2h,"Team Member","Sign in with your organization access code + password",u.gceu(),t))
p.push(C.ac)
p.push(new B.acv(C.alv,C.a3Q,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gce_(),t))
return A.c8(t,r,A.bm(!0,A.cd(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiL,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acv.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eo,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.or,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BI,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aBx.prototype={}
B.aEJ.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gap8(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
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
bc1(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cIl(d){return this.bc1(null,d)},
aDw(d){return this.bc1(d,null)}}
B.UF.prototype={
T(){return new B.aCU(new A.cs(null,y.A))},
gde(){return this.c}}
B.aCU.prototype={
Z(){this.a1()
this.adD()},
adD(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BD(u.a.c),$async$adD)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dPx(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adD,w)},
adE(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fN(new A.fE(s)),$async$adE)
case 3:t=u.c
if(t!=null)t.J(y.q).f.S(D.f0D)
case 1:return A.h(v,w)}})
return A.i($async$adE,w)},
Zl(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ao4(s.d,4),$async$Zl)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t_(r,"ngmy_my_code_"+m+".png"),$async$Zl)
case 8:q=e
o=s.c
if(o!=null)o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zl,w)},
ahl(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9R("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahl,w)},
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
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2J,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.ail,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mO,w,C.kF,new A.ex(A.p(p,A.pT(p,p,!1,B.hEZ(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kF,A.B(A.a([A.E(A.eA(N.C3,C.Uc,q.gc6E(),p),1),C.at,A.E(A.dn(C.yI,C.a8H,q.gc6F(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.eA(M.a19,D.fxp,q.gctf(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MH,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.UJ.prototype={
T(){return new B.aCX(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.aCX.prototype={
Z(){var x,w
this.a1()
x=this.a.e
w=B.Im(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Im(u.d.a.a)
if(t==null){u.m(new B.dQG(u))
x=1
break}u.m(new B.dQH(u))
s=u.a
r=s.c
x=3
return A.b(B.a6H(s.d,new B.dQI(u),t,r),$async$Zm)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dQJ(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zm,w)},
a1x(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1x=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dQK(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rr(r.a.c,q),$async$a1x)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dQL(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahv(p,m,l,j,k),$async$a1x)
case 8:o=e
if(r.c!=null)r.m(new B.dQM(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dQN(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dQO(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1x,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aeN:D.acB,h=j?D.age:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.adQ:C.aL
i=[i,e,h,g,f,j?C.fd:C.bT]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bNc,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eo,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2J,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ul(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biv()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.MB,k,k,"",k,!0,new A.b4(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.az(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dQP(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m5,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Li(l.a.d,4)
m=A.C(new A.M(m,new B.dQQ(x,new A.aFX(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lP,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eWi)
else q.push(A.X(C.lo,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iF,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bvG,k,k,C.ah),1)
u=l.f?k:l.gctg()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eA(M.a19,D.fyq,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.Y),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6G()
t=A.bn(C.aE,k,k,0,C.c,k,C.ng,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mF(new B.dQR(),A.x(A.a([e,new A.D(D.bvb,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rR:D.fwO,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.Yy,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biv.prototype={
oz(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hh(C.bw,v.length),C.aO)}}
B.UG.prototype={
T(){return new B.aCV()}}
B.aCV.prototype={
Z(){var x,w,v,u=this
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
w.a2()},
adF(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adF=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dPy(r))
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
return A.b(B.a6M(p,m,n,o,C.a.i(l).length===0?null:l),$async$adF)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.S(D.f0e)
s=[1]
x=4
break}p.J(y.q).f.S(D.eZS)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dPz(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adF,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jg:C.pL,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fpq,s,s,s,1,s,!0),p=A.p(s,D.bnx,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GO,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bU8,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bU3,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUj,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc6H()
u=A.bn(C.aE,s,s,s,s,C.fR,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.x(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rR:C.aSh,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abK.prototype={}
B.bv3.prototype={
a4i(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.anL()))
x=3
return A.b(B.QX(t,s),$async$a4i)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4i,w)},
gde(){return this.a}}
B.Ng.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YV.prototype={
T(){return new B.ayZ(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.ayZ.prototype={
Z(){this.a1()
$.aW.x1$.push(new B.d2H(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6N(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0Y(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jg:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.ao7,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cB,16)],n),C.aoV,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ul(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buI()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fx,w,w,"",w,!0,new A.b4(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.aZL),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2F(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m5,w,w,w,w)
f=f[1]
f=A.E(A.dW(C.nE,new B.d2G(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.Y),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Kt,A.c_(new A.D(C.xT,A.x(A.a([l,C.aR,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c_(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ecm,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6M(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.Ot,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MJ,C.d1,w,w,w)}}
B.buI.prototype={
oz(d,e){return e.akv(e.a.toUpperCase())}}
B.UH.prototype={
T(){return new B.aCW(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aCW.prototype={
Z(){var x=this
x.a1()
x.tI()
x.w=A.dv(C.jn,new B.dQE(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UQ()
this.a2()},
a0p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nf(u.a.c),$async$a0p)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AF(u.a.c),$async$a0p)
case 4:u.m(new s.dQ1(u,e))
u.i6("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0p,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nf(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.AF(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dQ2(u,s))
if(t>0)u.i6("Received "+A.u(t)+" file(s) via My Code.")
u.Nq(u.d)
B.BD(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
Nq(d){return this.bC0(d)},
bC0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6R(r,u.a.c),$async$Nq)
case 8:p=f
if(u.c==null){x=1
break}new B.dPB(u,r,p).$0()
u.c.ef()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mF))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UO(r,u.a.c),$async$Nq)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AF(u.a.c),$async$Nq)
case 12:u.m(new o.dPC(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nq,w)},
NN(d){return this.bIj(d)},
bIj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6R(d,u.a.c),$async$NN)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dPH(u,d,t))
x=6
return A.b(A.fN(new A.fE(t)),$async$NN)
case 6:u.i6("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fN(new A.fE(r.toUpperCase())),$async$NN)
case 7:u.i6("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NN,w)},
i6(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.S(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cDQ(d,e)},
cDQ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dQs(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dQt(r))
$.eU.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUS(){var x=this.a
return x.f||x.r||x.w},
I0(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUS()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c87(s,n,r,q,o,t),$async$I0)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i6("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fBs(o,u.a.c),$async$I0)
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
return A.b(B.CZ(s,o,r,q,n,t),$async$I0)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I0,w)},
a_t(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap1(u.a.c),$async$a_t)
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
return A.b(A.a6(t,!1).cm(A.ea(new B.dPZ(u,r,q),!1,null,y.H)),$async$a_t)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_t,w)},
a0A(d){return this.cmN(d)},
cmM(){return this.a0A(1)},
cmN(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUS()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoZ(u.a.c),$async$a0A)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0A,w)},
abC(d,e,f){return this.bYX(d,e,f)},
bYX(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i6(e)
x=1
break}x=3
return A.b(u.tJ(new B.dPW(u,d,null,e,f),"Uploading\u2026"),$async$abC)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abC,w)},
bC8(){B.hpR(!1,new B.dPF(this))
return},
crP(){this.m(new B.dQ6(this))},
ay0(){var x=0,w=A.j(y.H),v=this
var $async$ay0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bC8()
return A.h(null,w)}})
return A.i($async$ay0,w)},
aby(){var x=0,w=A.j(y.H),v=this
var $async$aby=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPL(v),"Importing\u2026"),$async$aby)
case 2:return A.h(null,w)}})
return A.i($async$aby,w)},
S1(d){return this.cDf(d)},
cDf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.ea(new B.dQp(u,d),!1,null,y.H)),$async$S1)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qp)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cm(A.ea(new B.dQq(u,d),!1,null,y.H)),$async$S1)
case 8:x=1
break
case 7:x=u.bZE(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cm(A.ea(new B.dQr(u,d),!1,null,y.H)),$async$S1)
case 11:x=1
break
case 10:u.i6("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
bZE(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cHc,C.a.b5(x,w+1).toLowerCase())},
af5(d){return this.cdH(d)},
cdH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.ea(new B.dPX(u,d),!1,null,y.H)),$async$af5)
case 5:x=1
break
case 4:u.m(new B.dPY(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af5,w)},
Ro(d){return this.cuL(d)},
cuL(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ro=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i6("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pa(t,s.c,s.f),$async$Ro)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dQi(u,d),"Preparing QR\u2026"),$async$Ro)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ro,w)},
ahL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQj(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dQk(q),s),s.k("J.E"))
if(r.length===0){u.i6("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ro(r),$async$ahL)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahL,w)},
ahE(d){return this.cui(d)},
cui(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0Y(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dQc(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahE)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S1(d)
break
case"qr":u.Ro(A.a([d],y.r))
break
case"send_my_code":u.cej(A.a([d],y.r))
break
case"save":u.ah_(d)
break
case"delete":u.IQ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahE,w)},
Xg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPI(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPJ(q),s),s.k("J.E"))
if(r.length===0){u.i6("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pa(t,s.c,s.f),$async$Xg)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPK(u,r),"Preparing file\u2026"),$async$Xg)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xg,w)},
agb(d){return this.cl7(d)},
cl7(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hqz(d,!1),$async$agb)
case 3:s=f
r=s==null
q=B.a6O(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i6("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agb,w)},
afb(){var x=0,w=A.j(y.H),v=this,u
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fJ3(u,v.a.c),$async$afb)
case 2:return A.h(null,w)}})
return A.i($async$afb,w)},
bC7(){B.hpR(!1,new B.dPE(this,null))
return},
J3(d,e){return this.cek(d,e)},
b0_(d){return this.J3(null,d)},
cej(d){return this.J3(d,null)},
cek(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dQ_(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xb.c7().an4(!0,C.a_p,!1),$async$J3)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dQ0(l,s,r),"Preparing\u2026"),$async$J3)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
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
return A.b(B.bD0(p,l,e,s.a.c),$async$J3)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i6("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J3,w)},
Ih(d){return this.bYK(d)},
bYK(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ih=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hEY(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0_(t),$async$Ih)
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
return A.b(u.tJ(new B.dPU(u,d),"Receiving video\u2026"),$async$Ih)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dPV(u,d),"Receiving\u2026"),$async$Ih)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ih,w)},
E9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$E9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CT()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agb(t),$async$E9)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ih(s),$async$E9)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.ea(new B.dQ4(u),!1,null,y.N)),$async$E9)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$E9)
case 10:x=1
break
case 9:x=11
return A.b(u.Ih(C.a.i(r)),$async$E9)
case 11:case 1:return A.h(v,w)}})
return A.i($async$E9,w)},
ah_(d){return this.cqn(d)},
cqn(d){var x=0,w=A.j(y.H),v=this
var $async$ah_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dQ3(v,d),"Saving\u2026"),$async$ah_)
case 2:return A.h(null,w)}})
return A.i($async$ah_,w)},
IQ(d){return this.bKD(d)},
bKD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l5(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IQ)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c8a(t),$async$IQ)
case 6:case 5:s=d.a
x=7
return A.b(B.Eu(u.a.c,s),$async$IQ)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IQ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IQ,w)},
ahR(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0Y(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dQo(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahR)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afb()
break
case"import":u.aby()
break}case 1:return A.h(v,w)}})
return A.i($async$ahR,w)},
c6K(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mF))return C.qa
if(C.a.a0(x,"image/")||d.my(D.Qp))return C.u4
if(C.a.t(x,"pdf"))return E.NY
return D.alY},
B(d){var x,w,v=this,u=null,t=B.a0Y(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GG,u,u,u,new B.dQz(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bNJ,u,u,u,v.e?u:v.gce0(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcrO()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bI2:E.aml,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a16,u,u,u,v.e?u:v.gc6L(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o8,u,u,u,v.e?u:v.gb17(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bPr,u,u,u,v.e?u:new B.dQA(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lE(new B.dQB(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m5(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayW(C.ju,s,!0,t,w?u:v.gcuM(),u),1)
x.push(new A.D(D.btY,A.mF(new B.dQC(),A.B(A.a([s,C.at,A.E(new B.ayW(C.vS,"Export",!1,t,w?u:v.gbOf(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iG,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bd9(t,v.e?u:v.gb17(),u)
else s=A.kb(!0,u,u,new B.dQD(v,t),s,u,D.btQ,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayW.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vz,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vz,t,new A.b7(s,C.Y),new A.az(v,1,C.q,-1),t,t,t,t)
return A.eA(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bd9.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mF(new B.d2D(),new A.D(E.Zt,A.x(A.a([A.mF(new B.d2E(),A.p(x,A.X(C.yd,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.az,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ew,C.ii,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o8,D.fBW,this.d,A.bn(C.aE,x,x,x,C.c,x,C.Zo,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.B6,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ac3.prototype={
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
if(!o||i.my(D.mF))p=D.deC
else{p=C.a.a0(p,"image/")||i.my(D.Qp)
n=y.O
p=p?A.a([C.cT,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gap8()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mF))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mF)))l.push(A.fTI(C.aE,!1,j,j,j,!1,j,j,new B.d3_(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.o6,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mF(new B.d30(),new A.D(C.e6,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.YW,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ag),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.YX.prototype={
T(){return new B.az0()},
gde(){return this.c}}
B.az0.prototype={
Z(){this.a1()
this.xK()},
q(){B.hFc(this.e)
this.a2()},
xK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rr(o.c,o.d),$async$xK)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hFf(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hFe(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2X(s))
x=1
break}s.m(new B.d2Y(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d2Z(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xK,w)},
a1w(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rr(t.c,t.d),$async$a1w)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.eYi)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahv(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1w)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1w,w)},
bYD(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kq(u,C.A,v,new B.d2V(w,t),C.fZ,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fP(t,C.A,v,new B.d2W(w),C.fZ,C.dv,!0,v,!1,v,v)
else return C.bI
return A.uu(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0Y(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.C4,u,u,u,v.gb4Y(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ei
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.C4,D.fkR,v.gb4Y(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bYD()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YU.prototype={
T(){return new B.ayY(A.aik(),C.bx,C.bx)},
gde(){return this.c}}
B.ayY.prototype={
Z(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fw(w,A.a3(w).k("fw<1>")).il(new B.d2A(v))
x.gcRe().il(new B.d2B(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a3(x).k("fw<1>"))}if(x==null)x=C.b4U
x.il(new B.d2C(v))
v.xK()},
xK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rr(p.c,p.d),$async$xK)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d2t(s))
x=1
break}x=8
return A.b(s.d.C4(0,new A.a33(r,s.a.d.c)),$async$xK)
case 8:if(s.c==null){x=1
break}s.m(new B.d2u(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d2v(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xK,w)},
Zn(){var x=0,w=A.j(y.H),v=this,u
var $async$Zn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$Zn)
case 5:x=3
break
case 4:x=6
return A.b(u.ip(0),$async$Zn)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zn,w)},
aSJ(d){var x=d.a
return C.a.aV(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aV(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0Y(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ei
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJ1,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Ot,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aE,o,o,m,0,new B.d2w(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aSJ(p.w)+" / "+p.aSJ(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eUO,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yn:C.iJ,o,o,o,o,o)
x=A.x(A.a([u,C.kF,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6O(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c8(v,w,A.av(new A.D(C.rb,x,o),o,o,o),o,!1,!1,o,o)}}
B.Ps.prototype={
T(){return new B.az3()},
gde(){return this.c}}
B.az3.prototype={
Z(){this.a1()
this.Pn()},
Pn(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pn=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fW_(o.c,o.d,new B.d3d(s)),$async$Pn)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d3e(s))
x=1
break}s.e=r
q=O.i0Z(r)
if(q==null){s.m(new B.d3f(s))
x=1
break}s.d=q
q.aQ(0,s.gb_O())
x=8
return A.b(q.ik(0).d7(0,C.r7),$async$Pn)
case 8:if(s.c==null){x=1
break}s.m(new B.d3g(s))
x=9
return A.b(q.pT(0),$async$Pn)
case 9:q.tj(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d3h(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pn,w)},
cci(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d3i(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CQ(0,x.gb_O())
w=x.d
if(w!=null)w.q()
B.iaO(x.e)
x.a2()},
adI(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZD(u.c,u.d),$async$adI)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adI,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0Y(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p1,t,t,t,u.gc6I(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ei
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahO(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A9(s,t),A.aC(t,A.D8(A.p(t,A.X(q?I.yn:C.iJ,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d3k(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YZ.prototype={
T(){return new B.az1(new A.cs(null,y.A))}}
B.az1.prototype={
gcDz(){var x,w,v=this.a
if(v.e!==D.RN)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDd(){var x,w,v=this.a
if(v.e!==D.zk)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a1()
x=v.gcDz()
if(x!=null){v.Qp(x)
v.e=A.dv(R.Fp,new B.d39(v,x))}w=v.gcDd()
if(w!=null){v.Qo(w)
v.f=A.dv(C.fX,new B.d3a(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qo(d){return this.cjj(d)},
cjj(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ap6(d),$async$Qo)
case 3:t=f
x=4
return A.b(B.c8t(d),$async$Qo)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d31(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qo,w)},
Qp(d){return this.cjk(d)},
cjk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fJt(d),$async$Qp)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAV(t),$async$Qp)
case 4:if(u.c==null){x=1
break}u.m(new B.d32(u))
u.c.J(y.q).f.S(D.aPb)
case 1:return A.h(v,w)}})
return A.i($async$Qp,w)},
gc2G(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6J(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1i(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CT()){t=u.c
if(t!=null)t.J(y.q).f.S(D.f0o)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cm(A.ea(new B.d33(),!1,null,y.N)),$async$a1i)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAV(s),$async$a1i)
case 4:t=u.c
if(t!=null)t.J(y.q).f.S(D.aPb)
case 1:return A.h(v,w)}})
return A.i($async$a1i,w)},
a9t(d){return this.bIk(d)},
bIk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fN(new A.fE(C.d.aH(t,", "))),$async$a9t)
case 3:if(d.e!=null){t=d.J(y.q).f
t.S(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9t,w)},
adG(d){return this.bI4(d)},
bI4(d){var x=0,w=A.j(y.H),v=this
var $async$adG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fN(new A.fE(v.a.c)),$async$adG)
case 2:if(d.e!=null)d.J(y.q).f.S(D.eYM)
return A.h(null,w)}})
return A.i($async$adG,w)},
a1d(d){return this.cqp(d)},
cqp(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ao4(s.d,4),$async$a1d)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t_(r,"ngmy_doc_share_qr.png"),$async$a1d)
case 8:q=f
if(d.e!=null)d.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1d,w)},
gaW_(){var x,w=this.a
if(w.e!==D.HQ)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
a9q(d){return this.bId(d)},
bId(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaW_()
if(t==null){x=1
break}x=3
return A.b(A.fN(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9q)
case 3:if(d.e!=null)d.J(y.q).f.S(D.f_o)
case 1:return A.h(v,w)}})
return A.i($async$a9q,w)},
adH(){var x=0,w=A.j(y.H),v=this,u
var $async$adH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UQ(),$async$adH)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adH,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0Y(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HQ&&i!==D.RN&&i!==D.zk
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HQ||t===D.RN||t===D.zk?l:A.aH(l,l,l,l,C.l2,l,l,l,m.gaYY(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pT(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc2G(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HQ){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc6J(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bTc,D.fu2,new B.d34(m,d),l)],p))}if(m.a.e===D.HQ&&m.gaW_()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bPL,D.fqN,new B.d35(m,d),l)],p))
if(m.a.e===D.zk){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.El:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}if(m.a.e===D.RN){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.El:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l),C.ac,A.dn(D.bLv,D.fx6,m.gcqN(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.on(i,A.c8(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eA(N.C3,C.Uc,new B.d36(m,d),l),1),C.at,A.E(A.dn(C.yI,C.a8H,new B.d37(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zU,m.gaYY(),A.bn(C.aK,l,l,l,l,C.fR,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d38(),y.C)}}
B.ac1.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cd(A.x(A.a([w,C.aR,A.p(x,A.pT(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.em(A.a([A.bG(C.zV,new B.d2s(d),x)],u),x,x,C.mX,v,x,x,x,x,D.fjS,x)}}
B.YT.prototype={
T(){return new B.ayX(A.ze(C.xA,C.nL,C.ui))}}
B.ayX.prototype={
q(){this.d.q()
this.a2()},
awD(d){var x,w,v,u,t
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
return A.c8(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.frg,x,x,x,1,x,!0),C.w,A.zd(this.d,C.bV,this.gawC()),x,!1,!1,x,x)}}
B.Z_.prototype={
T(){return new B.az2(A.ze(C.xA,C.nL,C.ui))},
gde(){return this.c}}
B.az2.prototype={
bZG(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afy(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RY("text/plain"),$async$afy)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.S(D.f0i)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afy,w)},
aae(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aae=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hqz(p,!0),$async$aae)
case 3:t=e
p=t==null
s=B.a6O(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.S(D.eXT)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aae,w)},
q(){this.d.q()
this.a2()},
awD(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZG(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.ane,v,v,v,w.gbNO(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a1d,v,v,v,w.gcgJ(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.rh:P.NJ,v,v,v,v,v),v,v,v,new B.d3c(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fxY,v,v,v,1,v,!0)
u=A.zd(w.d,C.bV,w.gawC())
x=A.n(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ei7],s),v),v,!1,!1,v,v)}}
B.bda.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oN
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oN:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Zz,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a9d.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Oi.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.X_.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Oh.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EZ.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cjo.prototype={}
B.EY.prototype={}
B.a9c.prototype={}
B.atp.prototype={}
B.X0.prototype={}
var z=a.updateTypes(["aA<~>()","R(jn)","m(jn)","UH(Y)","~()","YW(Y)","G(G,jn)","Ps(Y)","~(m0)","cr(EY)","aA<jn?>(@)","UF(Y)","UJ(Y)","D(jn)","jn(@)","a5<m,@>(jn)","YV(Y)","UG(Y)","YX(Y)","YU(Y)","YZ(Y)","ac1(Y)","ai<jn>()","Z_(Y)","ac3(Y,G)","YT(Y)","a5<m,aD>(jn)","cr(X_)","cr(a9c)","aA<cr>(EY)"])
B.cjk.prototype={
$1(d){var x=this.a
x.x=D.aMg
x.y.L(0,D.aMg)},
$S:68}
B.cjl.prototype={
$1(d){var x=this.a
x.x=D.aMf
x.y.L(0,D.aMf)},
$S:68}
B.cjm.prototype={
$1(d){var x=this.a
x.agT(A.aOE(d.data)).bB(new B.cjj(x),y.b)},
$S:68}
B.cjj.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cjn.prototype={
$1(d){},
$S:68}
B.cjq.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hJX(d.channel))},
$S:15}
B.cjr.prototype={
$1(d){},
$S:15}
B.cjs.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i20(w.iceConnectionState)
x.cx=w
if($.h3U())switch(w.a){case 0:x.cy=D.aMl
break
case 1:x.cy=D.aMm
break
case 3:x.cy=D.aMn
break
case 5:x.cy=D.aMj
break
case 6:x.cy=D.aMk
break
case 7:x.cy=D.a6r
break
default:break}},
$S:148}
B.cjt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i21(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:148}
B.cju.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ich(w.signalingState)},
$S:148}
B.cjv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iav(w.connectionState)},
$S:148}
B.cjw.prototype={
$1(d){},
$S:148}
B.cjx.prototype={
$1(d){},
$S:15}
B.flt.prototype={
$1(d){var x=y.F.a(new A.rP([],[]).pB(d.target.result,!1)),w=C.xB.t(x.objectStoreNames,"blobs")
if(!w)C.xx.KG(x,"blobs")},
$S:202}
B.fIS.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w4.fg(this.b)
$.eU.mt()
this.c.$1(d)},
$S:460}
B.fIU.prototype={
$1(d){return this.a.$1(B.hSP(this.b,this.c))},
$S:34}
B.fIT.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fIR.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fJ6.prototype={
$1(d){var x=this
return B.hg5(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJ7.prototype={
$1(d){var x=this
return B.hg5(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fnE.prototype={
$1(d){var x=this
return B.c84(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2L.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2I.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c84(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2K.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c84(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2J.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c84(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d2N.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bK6,x,x,x,new B.d2M(d),x,x,x,x,x,x),A.E(A.EK(D.Q9,!0,x,C.a0k,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Q9,x,g,C.aj5,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.d2M.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpE.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eG,y.o).w,t=this.a,s=t?C.id:C.c,r=A.n(28),q=A.p(v,D.bnR,C.f,v,v,D.b0p,v,v,v,v,D.aiW,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOh,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FC,A.x(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dW(C.df,new B.fpC(d),v),1),C.at,A.E(A.bG(D.fpO,new B.fpD(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mp,v,v,v,v),v)},
$S:61}
B.fpC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpD.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.S(D.eZ0)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aBx(v,x))},
$S:0}
B.fq7.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eG,y.o).w,u=x.a,t=u?C.id:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bnH,C.f,w,w,D.b1S,w,w,w,w,D.aiW,w,w,1/0),new A.D(C.FC,A.x(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h_X(u,"Organization name",C.G3,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h_X(u,"Access code",C.nl,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h_X(u,"Member password",H.GB,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fy3,new B.fq6(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fR,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mp,w,w,w,w),w)},
$S:61}
B.fq6.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.S(D.eZ5)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEJ(u,x,w))},
$S:0}
B.c7W.prototype={
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
return A.b(A.vi(p,null).d7(0,C.Yx),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BE(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c81.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c82.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c83.prototype={
$1(d){return d.b},
$S:z+2}
B.c7Y.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7Z.prototype={
$1(d){return d.b},
$S:z+2}
B.c7X.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c8_.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c80.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fJ4.prototype={
$1(d){return new B.UF(this.a,null)},
$S:z+11}
B.fJ5.prototype={
$1(d){return new B.UJ(this.a,this.b,this.c,null)},
$S:z+12}
B.dPx.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dQG.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dQH.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dQI.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dQF(x,d))},
$S:2}
B.dQF.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQJ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQK.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dQL.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQN.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dQO.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQR.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.dQP.prototype={
$1(d){var x=this.a
return x.f?null:x.Zm()},
$S:2}
B.dQQ.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qp))s=C.u4
else s=C.a.a0(s,"video/")||d.my(D.mF)?C.qa:D.alY
x=this.b.a
w=y.p
return new A.D(C.kV,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gap8(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dPy.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dPz.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c85.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.c86.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.fJL.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fiG.prototype={
$1(d){return J.k(d)},
$S:17}
B.fnQ.prototype={
$1(d){var x=this.b
B.hQT(C.FR.ga5X(this.a)).bB(x.gcGE(x),y.H)},
$S:124}
B.fnR.prototype={
$1(d){return this.a.d4(0,null)},
$S:124}
B.fnS.prototype={
$0(){return null},
$S:11}
B.c8k.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnT.prototype={
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
u=J.k(u==null?new A.S(Date.now(),0,!1).a6().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.frT.prototype={
$1(d){return d.ah()},
$S:z+15}
B.fmi.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fmj.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c8p.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.fNR.prototype={
$1(d){return new B.YV(this.a,null)},
$S:z+16}
B.d2H.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:8}
B.d2F.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d2G.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQE.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0p()},
$S:12}
B.dQ1.prototype={
$0(){var x=J.bE4(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQ2.prototype={
$0(){var x=J.bE4(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPB.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPA(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDw(this.c)}},
$S:0}
B.dPA.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPC.prototype={
$0(){var x=J.bE4(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPH.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPG(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDw(this.c)}},
$S:0}
B.dPG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQs.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dQt.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dPZ.prototype={
$1(d){return new B.UG(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dPW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I0(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UK(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0A(s.gM(t)),$async$$0)
case 8:case 7:r.i6(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPF.prototype={
$1(d){this.a.abC(d,"No files selected.","Added")},
$S:460}
B.dQ6.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dQ5(),A.T(x).k("M<1,m>")))},
$S:0}
B.dQ5.prototype={
$1(d){return d.a},
$S:z+2}
B.dPL.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xb.c7().cTb(C.a_p,!0),$async$$0)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i6("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i6("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ap5(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i6("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tI(),$async$$0)
case 9:o.i6("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dQp.prototype={
$1(d){return new B.Ps(this.a.a.c,this.b,null)},
$S:z+7}
B.dQq.prototype={
$1(d){return new B.YX(this.a.a.c,this.b,null)},
$S:z+18}
B.dQr.prototype={
$1(d){return new B.YU(this.a.a.c,this.b,null)},
$S:z+19}
B.dPX.prototype={
$1(d){return new B.Ps(this.a.a.c,this.b,null)},
$S:z+7}
B.dPY.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQi.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I0(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6Q(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i6("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cmM(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.T(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dQe(p),r),new B.dQf(),r.k("M<ak.E,m>")).c0(0,new B.dQg())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.ea(new B.dQh(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p9(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UQ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQe.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dQd(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dQd.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQf.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dQg.prototype={
$1(d){return d.length!==0},
$S:3}
B.dQh.prototype={
$1(d){var x=this.a
return new B.YZ(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dQj.prototype={
$1(d){return d.a},
$S:z+2}
B.dQk.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dQc.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gap8(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mF)?C.u6:C.oZ
p=!x||p.my(D.mF)?"Play video":"View"
return A.c_(A.bm(!0,new A.D(C.Bi,A.x(A.a([q,o,t,C.aB,B.YY(!1,u,!1,w,p,new B.dQ7(d),v),B.YY(!1,u,!1,C.ju,"Share via QR",new B.dQ8(d),"Letters/numbers QR code"),B.YY(!1,u,!1,D.a0q,"Send to their Code",new B.dQ9(d),"Enter someone else's personal code"),B.YY(!1,u,!1,C.hC,"Download / save",new B.dQa(d),v),C.am,B.YY(!1,u,!0,C.e7,"Delete",new B.dQb(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,v,v,C.n),C.bf)},
$S:688}
B.dQ7.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dQ8.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dQ9.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dQa.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dQb.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dPI.prototype={
$1(d){return d.a},
$S:z+2}
B.dPJ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPK.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6S(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gs(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p9(s.c,s.f),$async$$0)
case 4:u.i6(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPE.prototype={
$1(d){var x=this.a
x.tJ(new B.dPD(x,d,this.b),"Preparing\u2026")},
$S:460}
B.dPD.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i6("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UK(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i6("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bD0(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i6("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ_.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dQ0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fW2(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gp(new B.dPQ(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i6("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dPR(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dPS(s))
case 5:x=8
return A.b(r.b.iq(0,C.Fl,new B.dPT()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i6("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i6("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPQ.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPN(x,d,e))},
$S:140}
B.dPN.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPR.prototype={
$1(d){return new B.ac1(this.a.a,null)},
$S:z+21}
B.dPS.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dPT.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dPV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Im(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6G(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0_(B.Im(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ap5(new B.dPO(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fW1(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i6(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dPP()).gM(0)
s.i6(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPO.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPM(x,d,e))},
$S:140}
B.dPM.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPP.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.dQ4.prototype={
$1(d){return new B.Z_(this.a.a.c,null)},
$S:z+23}
B.dQ3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZD(u.a.c,v.b),$async$$0)
case 2:t.i6(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQo.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.D(C.Bi,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YY(!0,w,!1,C.nl,"My Code",new B.dQl(d),"Your personal code & QR \u2014 others send docs to you"),B.YY(!1,w,!1,D.a0q,"Send to their Code",new B.dQm(this.a,d),"Enter someone else's 5-digit code + letter"),B.YY(!1,w,!1,S.yx,"Import backup",new B.dQn(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,x,x,C.n),C.bf)},
$S:688}
B.dQl.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dQm.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bC7()},
$S:0}
B.dQn.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dQB.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Iw(D.Q9,x,C.a0k,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.Q9).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dQz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQA.prototype={
$0(){this.a.ahR()
return null},
$S:0}
B.dQC.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*10)),e)},
$S:100}
B.dQD.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.ac3(e,w,v,this.b,x.e,x.c6K(w),new B.dQv(x,w),new B.dQw(x,v,w),new B.dQx(x,w),new B.dQy(x,w),null)},
$S:z+24}
B.dQv.prototype={
$0(){this.a.af5(this.b)
return null},
$S:0}
B.dQw.prototype={
$0(){var x=this.a
return x.m(new B.dQu(x,this.b,this.c))},
$S:0}
B.dQu.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQx.prototype={
$0(){this.a.NN(this.b)
return null},
$S:0}
B.dQy.prototype={
$0(){this.a.ahE(this.b)
return null},
$S:0}
B.d2D.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*18)),e)},
$S:100}
B.d2E.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:136}
B.d30.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.d3_.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d2X.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d2Y.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d2Z.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d2V.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fP(w,C.A,x,new B.d2T(this.a),C.fZ,C.dv,!0,x,!1,x,x)
$.aW.x1$.push(new B.d2U(this.a))
return C.bI},
$S:137}
B.d2T.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2R(this.a))
return C.bI},
$S:199}
B.d2R.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2O(x))},
$S:8}
B.d2O.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2U.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2Q(x))},
$S:8}
B.d2Q.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2W.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2S(this.a))
return C.bI},
$S:199}
B.d2S.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2P(x))},
$S:8}
B.d2P.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2A.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2z(x,d))},
$S:1743}
B.d2z.prototype={
$0(){return this.a.f=this.b===C.uE},
$S:0}
B.d2B.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2y(x,d))},
$S:8}
B.d2y.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d2C.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2x(x,d))},
$S:8}
B.d2x.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2t.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d2u.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d2v.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d2w.prototype={
$1(d){return this.a.d.MO(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d3d.prototype={
$0(){var x=this.a.a
return B.rr(x.c,x.d)},
$S:1744}
B.d3e.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d3f.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d3g.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d3h.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d3i.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d3k.prototype={
$0(){var x=this.a
x.m(new B.d3j(x))},
$S:0}
B.d3j.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pT(0)},
$S:0}
B.d39.prototype={
$1(d){return this.a.Qp(this.b)},
$S:12}
B.d3a.prototype={
$1(d){return this.a.Qo(this.b)},
$S:12}
B.d31.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d32.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d33.prototype={
$1(d){return D.h2H},
$S:z+25}
B.d38.prototype={
$2(d,e){if(d)B.UQ()},
$S:122}
B.d34.prototype={
$0(){return this.a.a9t(this.b)},
$S:0}
B.d35.prototype={
$0(){return this.a.a9q(this.b)},
$S:0}
B.d36.prototype={
$0(){return this.a.adG(this.b)},
$S:0}
B.d37.prototype={
$0(){return this.a.a1d(this.b)},
$S:0}
B.d2s.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d3c.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pX(),$async$$0)
case 2:u.m(new B.d3b(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d3b.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c8r.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.c8s.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c8q.prototype={
$2(d,e){return this.bjr(d,e)},
bjr(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UR(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.frv.prototype={
$1(d){if(d===D.a6q&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.frw.prototype={
$0(){},
$S:11}
B.fs2.prototype={
bl_(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ffO(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hbe(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bl_(d,e)},
$S:731}
B.fs1.prototype={
$1(d){var x=this
d.b=new B.fs0(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fs0.prototype={
$1(d){return this.bkZ(d)},
bkZ(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZE(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aK(0,n,null)
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
return A.b(B.ffO(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6P(m),$async$$1)
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
x(v=B.az_.prototype,"gcdD","Q0",0)
x(v,"gceu","J4",0)
x(v,"gce_","xU",0)
x(v=B.aCU.prototype,"gc6E","adE",0)
x(v,"gc6F","Zl",0)
x(v,"gctf","ahl",0)
x(v=B.aCX.prototype,"gc6G","Zm",0)
x(v,"gctg","a1x",0)
x(B.aCV.prototype,"gc6H","adF",0)
x(B.ayZ.prototype,"gc6M","c6N",4)
x(v=B.aCW.prototype,"gce0","a_t",0)
x(v,"gcrO","crP",4)
x(v,"gb17","ay0",0)
x(v,"gcuM","ahL",0)
x(v,"gbOf","Xg",0)
x(v,"gc6L","E9",0)
x(B.az0.prototype,"gb4Y","a1w",0)
x(B.ayY.prototype,"gc6O","Zn",0)
x(v=B.az3.prototype,"gb_O","cci",4)
x(v,"gc6I","adI",0)
x(v=B.az1.prototype,"gcqN","a1i",0)
x(v,"gaYY","adH",0)
w(B.ayX.prototype,"gawC","awD",8)
x(v=B.az2.prototype,"gcgJ","afy",0)
x(v,"gbNO","aae",0)
w(v,"gawC","awD",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cjo,B.a9c,B.atp,B.aBx,B.aEJ,B.jn,B.abK,B.bv3,B.EY,B.X0])
w(B.cjp,B.cjo)
w(B.b3L,B.a9c)
x(A.i_,[B.cjk,B.cjl,B.cjm,B.cjj,B.cjn,B.cjq,B.cjr,B.cjs,B.cjt,B.cju,B.cjv,B.cjw,B.cjx,B.flt,B.fIS,B.fIU,B.fIT,B.fJ6,B.fJ7,B.fnE,B.d2I,B.d2K,B.d2J,B.d2N,B.fpE,B.fq7,B.c7W,B.c82,B.c83,B.c7Z,B.c7X,B.c8_,B.c80,B.fJ4,B.fJ5,B.dQI,B.dQR,B.dQP,B.dQQ,B.fiG,B.fnQ,B.fnR,B.c8k,B.fnT,B.frT,B.fmi,B.fmj,B.c8p,B.fNR,B.d2H,B.d2F,B.dQE,B.dPA,B.dPG,B.dPZ,B.dPF,B.dQ5,B.dQp,B.dQq,B.dQr,B.dPX,B.dQe,B.dQd,B.dQf,B.dQg,B.dQh,B.dQj,B.dQk,B.dQc,B.dPI,B.dPJ,B.dPE,B.dQ_,B.dPR,B.dPP,B.dQ4,B.dQo,B.dQB,B.dQC,B.d2D,B.d2E,B.d30,B.d3_,B.d2V,B.d2T,B.d2R,B.d2U,B.d2W,B.d2S,B.d2A,B.d2B,B.d2C,B.d2w,B.d39,B.d3a,B.d33,B.c8r,B.c8s,B.frv,B.fs1,B.fs0])
w(B.b3M,B.atp)
x(A.ja,[B.fIR,B.d2L,B.d2M,B.fpC,B.fpD,B.fq6,B.dPx,B.dQG,B.dQH,B.dQF,B.dQJ,B.dQK,B.dQL,B.dQM,B.dQN,B.dQO,B.dPy,B.dPz,B.fnS,B.d2G,B.dQ1,B.dQ2,B.dPB,B.dPC,B.dPH,B.dQs,B.dQt,B.dPW,B.dQ6,B.dPL,B.dPY,B.dQi,B.dQ7,B.dQ8,B.dQ9,B.dQa,B.dQb,B.dPK,B.dPD,B.dQ0,B.dPU,B.dPN,B.dPS,B.dPT,B.dPV,B.dPM,B.dQ3,B.dQl,B.dQm,B.dQn,B.dQz,B.dQA,B.dQv,B.dQw,B.dQu,B.dQx,B.dQy,B.d2X,B.d2Y,B.d2Z,B.d2O,B.d2Q,B.d2P,B.d2z,B.d2y,B.d2x,B.d2t,B.d2u,B.d2v,B.d3d,B.d3e,B.d3f,B.d3g,B.d3h,B.d3i,B.d3k,B.d3j,B.d31,B.d32,B.d34,B.d35,B.d36,B.d37,B.d2s,B.d3c,B.d3b,B.frw])
x(A.mc,[B.ac2,B.Ng,B.a9d,B.Oi,B.X_,B.Oh,B.EZ])
x(A.ag,[B.YW,B.UF,B.UJ,B.UG,B.YV,B.UH,B.YX,B.YU,B.Ps,B.YZ,B.YT,B.Z_])
x(A.ah,[B.az_,B.aCU,B.aCX,B.aCV,B.ayZ,B.aCW,B.az0,B.ayY,B.az3,B.az1,B.ayX,B.az2])
x(A.au,[B.acv,B.ayW,B.bd9,B.ac3,B.ac1,B.bda])
x(A.km,[B.c81,B.c7Y,B.c85,B.c86,B.fJL,B.dPQ,B.dPO,B.dQD,B.d38,B.c8q,B.fs2])
x(A.iU,[B.biv,B.buI])})()
A.k0(b.typeUniverse,JSON.parse('{"b3L":{"a9c":[]},"b3M":{"atp":[]},"YW":{"ag":[],"t":[]},"az_":{"ah":["YW"]},"acv":{"au":[],"t":[]},"UF":{"ag":[],"t":[]},"UJ":{"ag":[],"t":[]},"aCU":{"ah":["UF"]},"aCX":{"ah":["UJ"]},"biv":{"iU":[]},"UG":{"ag":[],"t":[]},"aCV":{"ah":["UG"]},"YV":{"ag":[],"t":[]},"UH":{"ag":[],"t":[]},"ac3":{"au":[],"t":[]},"YX":{"ag":[],"t":[]},"YU":{"ag":[],"t":[]},"Ps":{"ag":[],"t":[]},"YZ":{"ag":[],"t":[]},"ac1":{"au":[],"t":[]},"YT":{"ag":[],"t":[]},"Z_":{"ag":[],"t":[]},"ayZ":{"ah":["YV"]},"buI":{"iU":[]},"aCW":{"ah":["UH"]},"ayW":{"au":[],"t":[]},"bd9":{"au":[],"t":[]},"az0":{"ah":["YX"]},"ayY":{"ah":["YU"]},"az3":{"ah":["Ps"]},"az1":{"ah":["YZ"]},"ayX":{"ah":["YT"]},"az2":{"ah":["Z_"]},"bda":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ud"),k:x("LJ()"),m:x("bk<m,m>"),F:x("r3"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a5<m,R>>"),t:x("O<a5<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(lz,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iU>"),a:x("O<dL>"),p:x("O<t>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<m,m>"),P:x("a5<m,@>"),f:x("a5<@,@>"),o:x("iE"),e:x("igc"),af:x("Ea"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("w8"),ab:x("EY"),br:x("atp"),v:x("X0"),N:x("m"),X:x("bq<L>"),Q:x("lL"),D:x("dL"),aw:x("cx<m>"),cd:x("a_<a5<m,@>>"),c7:x("t"),ch:x("bX<ai<jn>>"),aW:x("bX<dL?>"),aY:x("bX<~>"),cx:x("ac2"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBx"),bG:x("aEJ"),q:x("n2"),B:x("pr<EY>"),c6:x("pr<a9d>"),y:x("R"),i:x("L"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a5<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("X0?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,Ng,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abK?"),bk:x("aBx?"),ag:x("aEJ?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aZL=new A.az(C.aE,2,C.q,-1)
D.bXJ=new A.a8(C.a3,C.a8,C.x,C.a2h,null,null)
D.b0p=new A.o(null,null,null,C.mc,null,D.bXJ,C.n)
D.b1S=new A.o(null,null,null,C.mc,null,E.GO,C.n)
D.acB=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adQ=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aeN=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.age=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fkK=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fyZ=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.d6j=x([D.fkK,C.am,D.fyZ],y.p)
D.bnx=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d6j,null)
D.fDj=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fp1=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.dm5=x([D.fDj,C.am,D.fp1],y.p)
D.bnH=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dm5,null)
D.fzA=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fsQ=new A.y("Enter the access code and password from your organization.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.djV=x([D.fzA,C.am,D.fsQ],y.p)
D.bnR=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.djV,null)
D.btQ=new A.Q(16,10,16,28)
D.btY=new A.Q(16,14,16,4)
D.bvb=new A.Q(20,0,20,16)
D.bvG=new A.Q(20,8,20,16)
D.aiW=new A.Q(24,22,24,20)
D.a0q=new A.a0(63394,"MaterialIcons",!1)
D.alY=new A.a0(63515,"MaterialIcons",!1)
D.bI2=new A.a0(983813,"MaterialIcons",!1)
D.bFg=new A.a0(62867,"MaterialIcons",!1)
D.bJ1=new A.ae(D.bFg,44,C.c,null,null,null)
D.bK6=new A.ae(C.q0,null,C.ad,null,null,null)
D.bLv=new A.ae(C.j2,18,null,null,null,null)
D.bNc=new A.ae(D.a0q,26,C.c,null,null,null)
D.bNJ=new A.ae(C.BV,null,null,null,null,null)
D.bOh=new A.ae(C.yz,null,null,null,null,null)
D.bPr=new A.ae(W.NW,null,null,null,null,null)
D.bPL=new A.ae(C.hq,16,null,null,null,null)
D.bTc=new A.ae(C.rl,16,null,null,null,null)
D.bJj=new A.ae(C.nl,null,null,null,null,null)
D.bU3=new A.e4(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOP=new A.ae(C.G3,null,null,null,null,null)
D.bU8=new A.e4(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJE=new A.ae(H.GB,null,null,null,null,null)
D.bUj=new A.e4(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cHJ=x([C.fd,C.aZ,C.aE],y.O)
D.bZA=new A.a8(C.az,C.aC,C.x,D.cHJ,null,null)
D.cHc=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Q9=x([C.fd,C.aE],y.O)
D.Qp=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mF=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.deC=x([C.pE,C.aE],y.O)
D.e6r={iceServers:0}
D.aGV={urls:0}
D.dpR=new A.bk(D.aGV,["stun:stun.l.google.com:19302"],y.m)
D.dpQ=new A.bk(D.aGV,["stun:stun1.l.google.com:19302"],y.m)
D.cXA=x([D.dpR,D.dpQ],A.ax("O<a5<m,m>>"))
D.dp8=new A.bk(D.e6r,[D.cXA],A.ax("bk<m,@>"))
D.HQ=new B.Ng(0,"lanDirect")
D.RM=new B.Ng(1,"cloudStash")
D.dBb=new B.Ng(2,"inlineInstant")
D.RN=new B.Ng(3,"webrtcLink")
D.zk=new B.Ng(4,"videoCloud")
D.fyY=new A.y("Receive file",null,C.nD,null,null,null,null,null,null,null,null,null)
D.cxd=x([E.anC,C.ab,D.fyY],y.p)
D.eQj=new A.cl(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cxd,null)
D.ecm=new A.D(C.cm,D.eQj,null)
D.fbS=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2X,null,null,null)
D.flh=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fbS,null,C.L,null,null,null,null,null,null,null)
D.ebE=new A.D(C.Bn,D.flh,null)
D.b67=new A.cp(C.A,null,null,D.ebE,null)
D.ei7=new A.cL(0,null,0,28,null,null,D.b67,null)
D.eiq=new B.a9d(0,"RTCDataChannelConnecting")
D.aMf=new B.a9d(1,"RTCDataChannelOpen")
D.aMg=new B.a9d(3,"RTCDataChannelClosed")
D.eir=new B.EZ(0,"RTCIceConnectionStateNew")
D.eis=new B.EZ(1,"RTCIceConnectionStateChecking")
D.eit=new B.EZ(2,"RTCIceConnectionStateCompleted")
D.eiu=new B.EZ(3,"RTCIceConnectionStateConnected")
D.eiv=new B.EZ(4,"RTCIceConnectionStateCount")
D.eiw=new B.EZ(5,"RTCIceConnectionStateFailed")
D.eix=new B.EZ(6,"RTCIceConnectionStateDisconnected")
D.aMh=new B.EZ(7,"RTCIceConnectionStateClosed")
D.aMi=new B.X_(0,"RTCIceGatheringStateNew")
D.eiy=new B.X_(1,"RTCIceGatheringStateGathering")
D.a6q=new B.X_(2,"RTCIceGatheringStateComplete")
D.a6r=new B.Oh(0,"RTCPeerConnectionStateClosed")
D.aMj=new B.Oh(1,"RTCPeerConnectionStateFailed")
D.aMk=new B.Oh(2,"RTCPeerConnectionStateDisconnected")
D.aMl=new B.Oh(3,"RTCPeerConnectionStateNew")
D.aMm=new B.Oh(4,"RTCPeerConnectionStateConnecting")
D.aMn=new B.Oh(5,"RTCPeerConnectionStateConnected")
D.eiz=new B.Oi(0,"RTCSignalingStateStable")
D.eiA=new B.Oi(1,"RTCSignalingStateHaveLocalOffer")
D.eiB=new B.Oi(2,"RTCSignalingStateHaveRemoteOffer")
D.eiC=new B.Oi(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eiD=new B.Oi(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMo=new B.Oi(5,"RTCSignalingStateClosed")
D.eUO=new A.ar(160,48)
D.b7l=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eWi=new A.a7(16,16,D.b7l,null)
D.fop=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXJ=new A.b1(D.fop,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fvN=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eXM=new A.b1(D.fvN,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fEn=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eXT=new A.b1(D.fEn,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fo_=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eYi=new A.b1(D.fo_,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fzL=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPb=new A.b1(D.fzL,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fB8=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eYM=new A.b1(D.fB8,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFM=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ0=new A.b1(D.fFM,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fDN=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new A.b1(D.fDN,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fF_=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eZS=new A.b1(D.fF_,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmE=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f_o=new A.b1(D.fmE,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fxB=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f_J=new A.b1(D.fxB,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fqD=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f0e=new A.b1(D.fqD,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFS=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0i=new A.b1(D.fFS,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmU=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0o=new A.b1(D.fmU,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.flD=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0D=new A.b1(D.flD,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fiA=new A.y("NGMY DOC SHARE",null,C.aQv,null,null,null,null,null,null,null,null,null)
D.fjS=new A.y("Show this to sender",null,C.kf,null,null,null,null,null,null,null,null,null)
D.fkR=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fpq=new A.y("Organization settings",null,C.cC,null,null,null,null,null,null,null,null,null)
D.fpO=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fqN=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.frg=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fwO=new A.y("Send to their Doc Share",null,C.nB,null,null,null,null,null,null,null,null,null)
D.fx6=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxp=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fxY=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fyq=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fBD=new A.y("Share files & videos\nwith a scan.",null,C.aQw,null,null,null,null,null,null,null,null,null)
D.fBW=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h2H=new B.YT(null)
D.a9B=new B.ac2(0,"docShare")
D.a9C=new B.ac2(1,"gate")
D.UK=new B.ac2(2,"gateNoIndividual")})();(function staticFields(){$.aNp=null
$.fdE=function(){var x=y.N
return A.U(x,x)}()
$.Gb=A.U(y.N,y.D)
$.ag5=A.U(y.N,A.ax("lz"))
$.QI=A.U(y.N,y.D)
$.fe7=A.U(y.N,A.ax("abK"))
$.c8j=A.U(y.S,A.ax("bv3"))
$.hbd=1
$.hYM=null
$.hYL=null
$.hQh=null
$.h08=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"igH","hss",()=>new B.cjp())
x($,"ieC","h3U",()=>C.a.t(A.bu(A.bu(A.bu(A.GM(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["gsl7zYhNn1kYMyKlyTijU0EK8Hc="]=a.current})($__dart_deferred_initializers__);