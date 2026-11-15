((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crM:function crM(){},
hZj(d){var x=null,w=new B.b65(d,D.eyM,new A.pR(x,x,y.c6),new A.pR(x,x,y.B))
w.bCa(d)
return w},
b65:function b65(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crH:function crH(d){this.a=d},
crI:function crI(d){this.a=d},
crJ:function crJ(d){this.a=d},
crG:function crG(d){this.a=d},
crK:function crK(d){this.a=d},
hZk(d,e){var x=y.N
x=new B.b66(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCb(d,e)
return x},
b66:function b66(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crN:function crN(d){this.a=d},
crO:function crO(d){this.a=d},
crP:function crP(d){this.a=d},
crQ:function crQ(d){this.a=d},
crR:function crR(d){this.a=d},
crS:function crS(d){this.a=d},
crT:function crT(d){this.a=d},
crU:function crU(d){this.a=d},
hdq(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wT.GQ(x,"ngmy_doc_share_v1",new B.fwe(),1)},
i54(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wT(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
Sc(d,e){return B.il8(d,e)},
il8(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPt
x=7
return A.b(o==null?$.aPt=B.hdq():o,$async$Sc)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mj(s,"blobs","readwrite")
C.iA.mb(J.mi(q,"blobs"),r,d)
x=8
return A.b(J.ow(q),$async$Sc)
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
return A.i($async$Sc,w)},
Sb(d){return B.il7(d)},
il7(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPt
x=7
return A.b(o==null?$.aPt=B.hdq():o,$async$Sb)
case 7:s=f
r=J.mj(s,"blobs","readonly")
x=8
return A.b(C.iA.xL(J.mi(r,"blobs"),d),$async$Sb)
case 8:q=f
x=9
return A.b(J.ow(r),$async$Sb)
case 9:o=B.i54(q)
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
return A.i($async$Sb,w)},
ahZ(d){return B.il6(d)},
il6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPt
x=7
return A.b(p==null?$.aPt=B.hdq():p,$async$ahZ)
case 7:s=f
r=J.mj(s,"blobs","readwrite")
C.iA.Gm(J.mi(r,"blobs"),d)
x=8
return A.b(J.ow(r),$async$ahZ)
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
return A.i($async$ahZ,w)},
fwe:function fwe(){},
i7K(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqU(w,v))}return u},
hEr(d,e){var x,w={},v=A.aY9("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fVC(w,v,e)
C.wV.z8(v,"change",new B.fVE(w,v,!1))
C.wV.z8(v,"cancel",new B.fVD(w))
$.eX.mC()
v.click()
A.bP(C.akO,new B.fVB(w),y.H)},
fVC:function fVC(d,e,f){this.a=d
this.b=e
this.c=f},
fVE:function fVE(d,e,f){this.a=d
this.b=e
this.c=f},
fVD:function fVD(d){this.a=d},
fVB:function fVB(d){this.a=d},
DJ(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DJ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUw()?3:4
break
case 3:x=5
return A.b(B.hzf(e,d,s,!0,!1,f,g,h,!1,i),$async$DJ)
case 5:x=1
break
case 4:x=6
return A.b(B.RQ(d,s,f,g,h,i),$async$DJ)
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
return A.b(B.Jm(s,d),$async$DJ)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.frK(s,d),$async$DJ)
case 14:x=12
return A.b(r.hzf(q,p,o,n,m,l,k,j,a1,i),$async$DJ)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.ec(new B.fVR(s,i,d,f,g,h),!1,null,y.H)),$async$DJ)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.ec(new B.fVS(s,i,d,f,g,h),!1,null,y.H)),$async$DJ)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DJ,w)},
RQ(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RQ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0Q(e),$async$RQ)
case 3:u=k
x=4
return A.b(B.aqw(d,e,!1),$async$RQ)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jm(e,d),$async$RQ)
case 7:if(k){v=D.acu
x=1
break}x=8
return A.b(B.W6(e),$async$RQ)
case 8:v=t?D.Ww:D.acv
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0O(d,e)){v=D.acu
x=1
break}x=11
return A.b(B.W6(e),$async$RQ)
case 11:v=t?D.Ww:D.acv
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h8m(d,e)){v=D.acu
x=1
break}x=14
return A.b(B.W6(e),$async$RQ)
case 14:v=D.Ww
x=1
break
case 13:v=t?D.Ww:D.acv
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RQ,w)},
frK(d,e){var x=0,w=A.j(y.y),v
var $async$frK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0O(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0Q(d),$async$frK)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frK,w)},
hzf(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.ec(new B.fyV(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hud(d,e,f,g,h,i,j){return new B.a_i(e,j,d,g,h,i,f,null)},
fAP(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fAP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fAS(A.S(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fAP)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAP,w)},
fBj(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fBj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fBl(A.S(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fBj)
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
return A.i($async$fBj,w)},
hdB(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bt(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fO5(d,e){var x=0,w=A.j(y.H),v
var $async$fO5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.W6(e),$async$fO5)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fO5,w)},
fVR:function fVR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVS:function fVS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adf:function adf(d,e){this.a=d
this.b=e},
fyV:function fyV(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_i:function a_i(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAW:function aAW(){this.c=this.a=this.d=null},
dc9:function dc9(d,e){this.a=d
this.b=e},
dc6:function dc6(d){this.a=d},
dc8:function dc8(d){this.a=d},
dc7:function dc7(d){this.a=d},
dcb:function dcb(){},
dca:function dca(d){this.a=d},
adI:function adI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDz:function aDz(d,e){this.a=d
this.b=e},
aGH:function aGH(d,e,f){this.a=d
this.b=e
this.c=f},
fAS:function fAS(d,e,f){this.a=d
this.b=e
this.c=f},
fAQ:function fAQ(d){this.a=d},
fAR:function fAR(d,e,f){this.a=d
this.b=e
this.c=f},
fBl:function fBl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBk:function fBk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdA(d,e,f,g,h){return B.hUb(d,e,f,g,h)},
hUb(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdA=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dM(d,new B.cdB(s,e,h,g,f,q),y.g),y.l),$async$cdA)
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
return A.i($async$cdA,w)},
b0L(d,e,f,g,h){return B.hUc(d,e,f,g,h)},
hUc(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0L=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aw4("GET",d)
o=A.h4L()
if(o==null)o=new A.MD(A.a([],y.W))
x=7
return A.b(o.f8(0,s).dh(0,C.GC),$async$b0L)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CS(),$async$b0L)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cm(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0L,w)},
b0K(d){return B.hU9(d)},
hU9(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.om),$async$b0K)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.mc(A.ma(p.e)).cI(0,p.w),null)
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
return A.i($async$b0K,w)},
cdz(d){return B.hUa(d)},
hUa(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.qy),$async$cdz)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mc(A.ma(q.e)).cI(0,q.w)
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
return A.i($async$cdz,w)},
cdB:function cdB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jC:function jC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jk(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hUh(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jk(C.a.b2(t,u.length))}return null},
hUi(d){var x=B.Jk(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hUd(){var x,w=$.ot(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a7R(d){return B.hUe(d)},
hUe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7R=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a7R)
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
return A.i($async$a7R,w)},
a7S(d,e){return B.hUf(d,e)},
hUf(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7S=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cM,null),$async$a7S)
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
return A.i($async$a7S,w)},
Cl(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cl)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jk(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7T(r),$async$Cl)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7R("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cl)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jk(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cl)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hUd()
x=14
return A.b(B.a7T(m),$async$Cl)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7S("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 15:k=f
x=16
return A.b(B.a7S("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cl)
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
return A.i($async$Cl,w)},
a7T(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jk(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7R("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7T)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
a7U(d,e,f,g){return B.hUj(d,e,f,g)},
hUj(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7U=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jk(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7T(r),$async$a7U)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.cdH())>1048576||g.aV(d,new B.cdI())){v=B.Fj(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a84("myCode",d,a0),$async$a7U)
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
v=B.Fj(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0T(u,g.gI(d),a0),$async$a7U)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ot().az(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dM(d,new B.cdJ(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0M(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a7U)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7U,w)},
Fj(d,e,f,g,h){return B.hUg(d,e,f,g,h)},
hUg(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fj=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fj)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cF(a6,0,new B.cdD())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ot().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cN.az(99999)
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
a1=B.Jo(a9,q)
a0=new A.Lc(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fj)
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
a4=A.po(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abu(a1.a,a4,"media",a1.d,a2).xI(m,n,new A.Ey(!0,q.c)),$async$Fj)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fj)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aS5(r),$async$Fj)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dM(a6,new B.cdE(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0M(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fj)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aS5(r),$async$Fj)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fj,w)},
b0M(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7R(t),$async$b0M)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cdC(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7S(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0M,w)},
Of(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Of=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7R("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Of)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cr(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aT(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b0N(k,a0),$async$Of)
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
return A.b(B.b0S(h),$async$Of)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wd(g,a0),$async$Of)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdF(),q),n)
d=A.C(new A.Y(r,new B.cdG(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7S("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Of)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Of,w)},
b0N(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cr(h)){v=0
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
j=o==null?null:C.i.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ip2(k,j)
C.d.v(s,i)
x=5
return A.b(B.DH(l,m,"Received via My Code",t,e,i),$async$b0N)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aS5(s),$async$b0N)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0N,w)},
cdH:function cdH(){},
cdI:function cdI(){},
cdJ:function cdJ(){},
cdD:function cdD(){},
cdE:function cdE(){},
cdC:function cdC(){},
cdF:function cdF(){},
cdG:function cdG(){},
fVO(d,e){var x=0,w=A.j(y.H)
var $async$fVO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.ec(new B.fVP(e),!1,null,y.H)),$async$fVO)
case 2:return A.h(null,w)}})
return A.i($async$fVO,w)},
bFS(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.ec(new B.fVQ(g,e,f),!1,null,y.y)),$async$bFS)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFS,w)},
fVP:function fVP(d){this.a=d},
fVQ:function fVQ(d,e,f){this.a=d
this.b=e
this.c=f},
W3:function W3(d,e){this.c=d
this.a=e},
aEV:function aEV(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dYH:function dYH(d,e){this.a=d
this.b=e},
W7:function W7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEY:function aEY(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZQ:function dZQ(d){this.a=d},
dZR:function dZR(d){this.a=d},
dZS:function dZS(d){this.a=d},
dZP:function dZP(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZU:function dZU(d){this.a=d},
dZV:function dZV(d,e){this.a=d
this.b=e},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZX:function dZX(d,e){this.a=d
this.b=e},
dZY:function dZY(d){this.a=d},
e_0:function e_0(){},
dZZ:function dZZ(d){this.a=d},
e__:function e__(d,e){this.a=d
this.b=e},
bl_:function bl_(){},
W4:function W4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEW:function aEW(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dYI:function dYI(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
h8n(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hUl(d){var x=d.l3
if(x>=0)return x
return 4.99},
hUk(d){var x=d.m4,w=y.N
w=x.jq(x,new B.cdL(),w,w)
return w},
hph(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdM(),w,w)
return w},
b0Q(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b0Q)
case 7:s=f
r=A.w(p)
r=A.aW(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b0Q,w)},
a7W(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a7W)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a7W)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7W,w)},
W6(d){var x=0,w=A.j(y.H),v,u
var $async$W6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$W6)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$W6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$W6,w)},
h8m(d,e){var x,w,v
if(B.hUl(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hUk(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0O(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hph(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hpi(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hph(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqx(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqx)
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
return A.i($async$aqx,w)},
aqy(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqx(d),$async$aqy)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqy)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqy,w)},
aqw(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h8n(d)
if(u<=0){v=!1
x=1
break}if(B.h8m(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqx(e),$async$aqw)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqw,w)},
b0P(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jm(e,d),$async$b0P)
case 3:if(g){v=-1
x=1
break}u=B.h8n(d)
if(u<=0){v=-1
x=1
break}if(B.h8m(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqx(e),$async$b0P)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0P,w)},
cdO(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jm(e,d),$async$cdO)
case 3:if(h){v=!1
x=1
break}v=B.aqw(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdO,w)},
cdN(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdN=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdO(d,u,i.gUw()),$async$cdN)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdN,w)},
a7V(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7V=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUw()){v=!0
x=1
break}if(B.b0O(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.TO),$async$a7V)
case 5:x=k?3:4
break
case 3:B.hpi(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7V)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.le(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TO,"Doc Share for Organizations"),$async$a7V)
case 7:if(!k){v=!1
x=1
break}B.hpi(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7V)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7V,w)},
cdL:function cdL(){},
cdM:function cdM(){},
fWH(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fWH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fWH)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fo7.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.fo7.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWH,w)},
irV(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fo7.bt($.fo7,new B.fWJ(d))},
fWJ:function fWJ(d){this.a=d},
fpJ(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fpJ=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bP(C.jm,null,y.H),$async$fpJ)
case 3:C.Bb.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpJ,w)},
agS(d,e,f){var x=0,w=A.j(y.H),v
var $async$agS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.foN.n(0,d,new B.acX(A.bq(e,!0,v)))
x=3
return A.b(A.aA(),$async$agS)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.Y.aw(A.I(["parts",e,"size",f],v,y.C),null)),$async$agS)
case 2:return A.h(null,w)}})
return A.i($async$agS,w)},
agM(d){return B.i9K(d)},
i9K(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.foN.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$agM)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b8(s,new B.ftj(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.acX(r)
$.foN.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agM,w)},
RG(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.H4.n(0,d,u)
x=3
return A.b(B.Sc(d,u),$async$RG)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RG,w)},
aPQ(d){return B.i9I(d)},
i9I(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H4.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sb(d),$async$aPQ)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H4.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aPQ)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aN(r)
x=!J.cr(q)?9:10
break
case 9:B.RG(d,q)
x=11
return A.b(J.h9(s,d),$async$aPQ)
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
return A.i($async$aPQ,w)},
i5x(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cc(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cc(A.wT(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
return A.f3(null,y.K)},
a2N(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bE,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fz6(r,t),!1,s)
A.fB(r,"error",new B.fz7(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.NQ,new B.fz8())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2N,w)},
aQ9(d,e,f){return B.ic6(d,e,f)},
ic6(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQ9=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2N(i),$async$aQ9)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sc(o,p),$async$aQ9)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agS(k,j,s),$async$aQ9)
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
return A.i($async$aQ9,w)},
aQ8(d,e,f){return B.ic5(d,e,f)},
ic5(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQ8=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQ9(d,e,f),$async$aQ8)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2N(f),$async$aQ8)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H4.n(0,s,r)
$.RX.n(0,s,r)
x=11
return A.b(B.RG(s,r),$async$aQ8)
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
return A.i($async$aQ8,w)},
Cm(d,e,f,g,h,i){return B.hUu(d,e,f,g,h,i)},
hUu(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cm=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cN.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jC(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b0W(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RG(s,d),$async$Cm)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cm)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cP.gcu().aN(d)),$async$Cm)
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
return A.b(B.Bj(e),$async$Cm)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.He(e,j),$async$Cm)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cm,w)},
W8(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W8=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bj(d),$async$W8)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cN.az(99999)
n=p.b
l=o.type
l.toString
k=B.hpk(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jC(m,n,k,l,j,"From folder",null,B.b0W(),null)
$.ahh.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2N(o),$async$W8)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H4.n(0,h,g)
$.RX.n(0,h,g)
B.RG(h,g)
x=9
break
case 10:x=11
return A.b(B.aQ8(d,m,o),$async$W8)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.He(d,t),$async$W8)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W8,w)},
h8r(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h8r=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hpk(r,C.d.gan(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jn(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cm(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8r,w)},
Jn(d,e,f,g,h,i){return B.hUt(d,e,f,g,h,i)},
hUt(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jn=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cN.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lc(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jn)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.fW(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SK(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sc(k,l),$async$Jn)
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
return A.b(j.a1(0),$async$Jn)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sc(k,new Uint8Array(A.cc(n))),$async$Jn)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agS(r,q,g),$async$Jn)
case 16:f=new B.jC(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b0W(),null)
x=17
return A.b(B.Bj(d),$async$Jn)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.He(d,e),$async$Jn)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jn,w)},
Wa(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wa=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahh.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2N(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agM(s),$async$Wa)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sb(u[o]),$async$Wa)
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
v=A.wT(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RX.h(0,s)
if(i==null)i=$.H4.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rT(d,e),$async$Wa)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.RX.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wT(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wa,w)},
hpk(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rT(d,e){return B.hUv(d,e)},
hUv(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rT=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RX.h(0,f)
if(e==null)e=$.H4.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahh.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2N(s),$async$rT)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H4.n(0,f,r)
$.RX.n(0,f,r)
B.RG(f,r)
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
return A.b(B.agM(f),$async$rT)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azJ(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sb(g[l]),$async$rT)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apS()
if(!C.aI.gau(r)){$.H4.n(0,f,r)
$.RX.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPQ(f),$async$rT)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.RX.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wa(a0,a1,0,g),$async$rT)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.H4.n(0,f,h)
$.RX.n(0,f,h)
B.RG(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rT,w)},
hUy(d){var x,w,v=$.ahh.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hUz(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hUw(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqE(d,e,f,g,h){return B.hUx(d,e,f,g,h)},
hUx(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqE=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahh.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2N(s),$async$aqE)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rT(g,e),$async$aqE)
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
return A.b(n.iB(d).xI(h,r,new A.Ey(!0,e.c)),$async$aqE)
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
return A.i($async$aqE,w)},
hpm(d,e,f,g,h){var x,w,v,u,t=$.hpl
$.hpl=t+1
x=Date.now()
w=""+1000*x+"_"+C.cN.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdZ.n(0,t,new B.bxR(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azJ(u)))
return t},
h8s(d){var x=0,w=A.j(y.H)
var $async$h8s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8s,w)},
Jo(d,e){var $async$Jo=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahh.h(0,h)
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
return A.qw(B.Wa(d,e,p,o<q?o:q),$async$Jo,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qw(A.GC(n),$async$Jo,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qw(B.agM("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jo,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qw(B.Sb(h[l]),$async$Jo,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qw(A.GC(k),$async$Jo,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qw(B.rT(d,e),$async$Jo,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qw(A.GC(A.wT(j,p,o<i?o:i)),$async$Jo,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qw(null,0,w)
case 2:return A.qw(t.at(-1),1,w)}})
var x=0,w=A.hy8($async$Jo,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hzW(w)},
b0Y(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdZ.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5D(),$async$b0Y)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Y,w)},
W9(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$W9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdZ.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5D(),$async$W9)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agS(r.c,u,r.z),$async$W9)
case 4:t=new B.jC(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b0W(),null)
u=r.a
x=5
return A.b(B.Bj(u),$async$W9)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.He(u,s),$async$W9)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W9,w)},
a81(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a81=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdZ.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahZ(u[s]),$async$a81)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a81,w)},
ce0(d,e,f){var x=0,w=A.j(y.H)
var $async$ce0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCS(d,e,f),$async$ce0)
case 2:return A.h(null,w)}})
return A.i($async$ce0,w)},
ce1(d,e,f){var x=0,w=A.j(y.H)
var $async$ce1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCT(d,e,f),$async$ce1)
case 2:return A.h(null,w)}})
return A.i($async$ce1,w)},
Fk(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bj(d),$async$Fk)
case 2:p=g
J.nT(p,new B.ce_(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H4.W(0,v)
$.ahh.W(0,e)
x=3
return A.b(B.agM(v),$async$Fk)
case 3:u=g
$.foN.W(0,v)
x=4
return A.b(A.aA(),$async$Fk)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fk)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fk)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahZ(s[q]),$async$Fk)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahZ(v),$async$Fk)
case 13:x=14
return A.b(B.He(d,p),$async$Fk)
case 14:return A.h(null,w)}})
return A.i($async$Fk,w)},
b0X(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rT(d,e),$async$b0X)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fpJ(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0X,w)},
Bj(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bj)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fz9(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bj,w)},
He(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$He=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$He)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fDl(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.Y.aw(t,null)),$async$He)
case 3:return A.h(null,w)}})
return A.i($async$He,w)},
bCS(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bCS)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxk(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFZ(f))
x=4
return A.b(B.He(d,u),$async$bCS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCS,w)},
bCT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bCT)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxl(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOq(f))
x=4
return A.b(B.He(d,u),$async$bCT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCT,w)},
acX:function acX(d){this.a=d},
ftj:function ftj(){},
fz6:function fz6(d,e){this.a=d
this.b=e},
fz7:function fz7(d){this.a=d},
fz8:function fz8(){},
ce_:function ce_(d){this.a=d},
bxR:function bxR(d,e,f,g,h,i,j,k,l){var _=this
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
fz9:function fz9(){},
fDl:function fDl(){},
fxk:function fxk(d){this.a=d},
fxl:function fxl(d){this.a=d},
a82(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a82=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.ce4())?3:4
break
case 3:x=5
return A.b(B.b0Z(d,e),$async$a82)
case 5:u=g
if(u!=null){t=u.c
B.Oh(d,u.b,e,t)}v=u
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
return A.b(B.b0U(s),$async$a82)
case 10:case 9:if(g){v=new A.R1(1,D.Tr,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wb(d,e),$async$a82)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wg(!0,!0,d,e),$async$a82)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oh(d,D.Af,e,t)
v=new A.R1(p,D.Af,t)
x=1
break}v=B.ce3(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a82,w)},
Wb(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a84(null,d,e),$async$Wb)
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
return A.b(B.b0T(p,d.length,e),$async$Wb)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ce1(e,C.d.gH(d).a,r.b),$async$Wb)
case 7:case 6:q=r.a
x=8
return A.b(B.Oh(d,D.Tr,e,q),$async$Wb)
case 8:v=new A.R1(d.length,D.Tr,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wb,w)},
Wc(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mJ(D.n6)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a83(d,e),$async$Wc)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdX(s,d,e,t),$async$Wc)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0U(t),$async$Wc)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rT(e,d),$async$Wc)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wb(A.a([d],y.r),e),$async$Wc)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wc,w)},
We(){var x=0,w=A.j(y.H)
var $async$We=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h8l(),$async$We)
case 2:x=3
return A.b(B.aSr(),$async$We)
case 3:return A.h(null,w)}})
return A.i($async$We,w)},
a83(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a83=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0W()
x=3
return A.b(B.ce0(e,d.a,u),$async$a83)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a83,w)},
Oh(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oh=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tr&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a83(p,f),$async$Oh)
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
return A.b(B.cdW(o,p,u,f),$async$Oh)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdX(o,p,f,t),$async$Oh)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdV(o,u,p,f),$async$Oh)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oh,w)},
b0Z(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ce2(e,d),$async$b0Z)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wg(!1,!0,d,e),$async$b0Z)
case 4:u=g
if(u!=null){t=u.b
v=new A.R1(u.a,D.Af,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Z,w)},
ce2(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ce2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wa(d,s,0,1),$async$ce2)
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
return A.i($async$ce2,w)},
ce3(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ce3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a84(null,d,e),$async$ce3)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hpj(u)
if(t.length>800){v=null
x=1
break}v=new A.R1(d.length,D.dP7,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce3,w)},
aqF(d,e,f){return B.hUC(d,e,f)},
hUC(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqF=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h8q(g)?3:4
break
case 3:x=5
return A.b(B.cdY(g),$async$aqF)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fl(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b0S(q),$async$aqF)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wd(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h8p(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wd(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jp(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jp(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Jp(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wd(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqF,w)},
Jp(d,e,f){return B.hUA(d,e,f)},
hUA(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jp=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0K(r),$async$Jp)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0K(A.cD(s,0,null)),$async$Jp)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdA(o,r,a1,n,a2),$async$Jp)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cdz(q),$async$Jp)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wd(l,a2),$async$Jp)
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
return A.i($async$Jp,w)},
a84(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a84=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rT(f,r),$async$a84)
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
v=C.Y.aw(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a84,w)},
Wd(d,e){return B.hUB(d,e)},
hUB(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wd=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cI.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cm(i,a3,d,k,l,o),$async$Wd)
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
return A.i($async$Wd,w)},
Og:function Og(d,e){this.a=d
this.b=e},
ce4:function ce4(){},
a2m(d){var x=A.S(d).ax.a===C.J,w=x?D.ai2:D.afB,v=x?D.ajQ:C.c,u=x?C.aP:C.U,t=x?C.bK:C.am,s=x?D.ah0:C.aO
return new A.aHW([w,s,v,u,t,x?C.fo:C.bR])},
hFi(d,e){var x=e?C.w.j(0.72):C.aV
return A.cf(null,x,!0,null,new B.h_Z(e),d,null,!0,!0,y.N)},
cdK(d,e,f,g,h,i,j,k,l){return new B.W5(e,l,d,f,k,j,g,h,i,null)},
a_k(d,e,f,g,h,i,j){return new B.bfy(g,h,j,e,i,d,f,null)},
h_Z:function h_Z(d){this.a=d},
a_h:function a_h(d,e){this.c=d
this.a=e},
aAV:function aAV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dc5:function dc5(d){this.a=d},
dc3:function dc3(d){this.a=d},
dc4:function dc4(d){this.a=d},
bxt:function bxt(){},
W5:function W5(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEX:function aEX(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dZO:function dZO(d){this.a=d},
dZb:function dZb(d,e){this.a=d
this.b=e},
dZc:function dZc(d,e){this.a=d
this.b=e},
dYL:function dYL(d,e,f){this.a=d
this.b=e
this.c=f},
dYK:function dYK(d){this.a=d},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYR:function dYR(d,e,f){this.a=d
this.b=e
this.c=f},
dYQ:function dYQ(d){this.a=d},
dZC:function dZC(d,e){this.a=d
this.b=e},
dZD:function dZD(d){this.a=d},
dZ8:function dZ8(d,e,f){this.a=d
this.b=e
this.c=f},
dZ5:function dZ5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYP:function dYP(d){this.a=d},
dZg:function dZg(d){this.a=d},
dZf:function dZf(){},
dYV:function dYV(d){this.a=d},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZB:function dZB(d,e){this.a=d
this.b=e},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dZs:function dZs(d,e){this.a=d
this.b=e},
dZo:function dZo(d){this.a=d},
dZn:function dZn(d){this.a=d},
dZp:function dZp(){},
dZq:function dZq(){},
dZr:function dZr(d,e){this.a=d
this.b=e},
dZt:function dZt(){},
dZu:function dZu(d){this.a=d},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZh:function dZh(d){this.a=d},
dZi:function dZi(d){this.a=d},
dZj:function dZj(d){this.a=d},
dZk:function dZk(d){this.a=d},
dZl:function dZl(d){this.a=d},
dYS:function dYS(){},
dYT:function dYT(d){this.a=d},
dYU:function dYU(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e){this.a=d
this.b=e},
dYN:function dYN(d,e,f){this.a=d
this.b=e
this.c=f},
dZ9:function dZ9(d){this.a=d},
dZa:function dZa(d,e,f){this.a=d
this.b=e
this.c=f},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d){this.a=d},
dYX:function dYX(d,e,f){this.a=d
this.b=e
this.c=f},
dZ0:function dZ0(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
dZ2:function dZ2(){},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dYY:function dYY(d){this.a=d},
dYW:function dYW(d,e,f){this.a=d
this.b=e
this.c=f},
dYZ:function dYZ(){},
dZe:function dZe(d){this.a=d},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZv:function dZv(d){this.a=d},
dZw:function dZw(d,e){this.a=d
this.b=e},
dZx:function dZx(d){this.a=d},
dZL:function dZL(d){this.a=d},
dZJ:function dZJ(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZM:function dZM(){},
dZN:function dZN(d,e){this.a=d
this.b=e},
dZF:function dZF(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e,f){this.a=d
this.b=e
this.c=f},
dZE:function dZE(d,e,f){this.a=d
this.b=e
this.c=f},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZI:function dZI(d,e){this.a=d
this.b=e},
aAS:function aAS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfx:function bfx(d,e,f){this.c=d
this.d=e
this.a=f},
dc1:function dc1(){},
dc2:function dc2(){},
adg:function adg(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcp:function dcp(){},
dco:function dco(d){this.a=d},
a_j:function a_j(d,e,f){this.c=d
this.d=e
this.a=f},
aAX:function aAX(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dcl:function dcl(d){this.a=d},
dcm:function dcm(d,e,f){this.a=d
this.b=e
this.c=f},
dcn:function dcn(d,e){this.a=d
this.b=e},
dcj:function dcj(d,e){this.a=d
this.b=e},
dch:function dch(d){this.a=d},
dcf:function dcf(d){this.a=d},
dcc:function dcc(d){this.a=d},
dci:function dci(d){this.a=d},
dce:function dce(d){this.a=d},
dck:function dck(d){this.a=d},
dcg:function dcg(d){this.a=d},
dcd:function dcd(d){this.a=d},
a_g:function a_g(d,e,f){this.c=d
this.d=e
this.a=f},
aAU:function aAU(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbZ:function dbZ(d){this.a=d},
dbY:function dbY(d,e){this.a=d
this.b=e},
dc_:function dc_(d){this.a=d},
dbX:function dbX(d,e){this.a=d
this.b=e},
dc0:function dc0(d){this.a=d},
dbW:function dbW(d,e){this.a=d
this.b=e},
dbS:function dbS(d){this.a=d},
dbT:function dbT(d){this.a=d},
dbU:function dbU(d,e){this.a=d
this.b=e},
dbV:function dbV(d){this.a=d},
QA:function QA(d,e,f){this.c=d
this.d=e
this.a=f},
aB_:function aB_(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcE:function dcE(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcH:function dcH(d){this.a=d},
dcJ:function dcJ(d){this.a=d},
dcI:function dcI(d){this.a=d},
a_l:function a_l(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAY:function aAY(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dcy:function dcy(d,e){this.a=d
this.b=e},
dcz:function dcz(d,e){this.a=d
this.b=e},
dcq:function dcq(d,e,f){this.a=d
this.b=e
this.c=f},
dcr:function dcr(d){this.a=d},
dcs:function dcs(){},
dcx:function dcx(){},
dct:function dct(d,e){this.a=d
this.b=e},
dcu:function dcu(d,e){this.a=d
this.b=e},
dcv:function dcv(d,e){this.a=d
this.b=e},
dcw:function dcw(d,e){this.a=d
this.b=e},
ade:function ade(d,e){this.c=d
this.a=e},
dbR:function dbR(d){this.a=d},
a_f:function a_f(d){this.a=d},
aAT:function aAT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_m:function a_m(d,e){this.c=d
this.a=e},
aAZ:function aAZ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dcB:function dcB(d){this.a=d},
dcA:function dcA(d){this.a=d},
bfy:function bfy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hUD(){var x,w=$.ot(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.he(v)},
Oi(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oi=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Oi)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Oi)
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
return A.i($async$Oi,w)},
a85(d){return B.hUE(d)},
hUE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a85=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a85)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$a85)
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
return A.i($async$a85,w)},
Wf(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oi(),$async$Wf)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a85(s),$async$Wf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
Wg(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wg=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wg)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ce6(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hUD()
t=A.U(u).k("N<1,a9<n,aE>>")
r=A.C(new A.N(u,new B.ce7(s),t),t.k("ak.E"))
x=6
return A.b(B.Oi(),$async$Wg)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a85(q),$async$Wg)
case 7:x=8
return A.b(B.a86(r,u,g,s),$async$Wg)
case 8:v=new A.bro(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
aqG(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Oi(),$async$aqG)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqG,w)},
ce8(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ce8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oi(),$async$ce8)
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
return A.i($async$ce8,w)},
a86(d,e,f,g){return B.hUF(d,e,f,g)},
hUF(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a86=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqE("media",r,new B.ce5(s,e,g),f,q),$async$a86)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wf(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a86)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wf(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a86)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wf(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a86)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a86,w)},
Fl(d,e,f){return B.hUG(d,e,f)},
hUG(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fl=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqG(b3),$async$Fl)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iM,null,g),$async$Fl)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqG(b3),$async$Fl)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oi(),$async$Fl)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
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
b0=A.po(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abu(a8.a,b0,"media",a8.d,a9).Dd(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b0L(k,n,o,s,b7),$async$Fl)
case 17:j=c0
if(j!=null){J.c5(p,j);++q
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
a8=A.po(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abu(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fl)
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
a0=A.dO(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a85(e),$async$Fl)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fl,w)},
ce6:function ce6(){},
ce7:function ce7(d){this.a=d},
ce5:function ce5(d,e,f){this.a=d
this.b=e
this.c=f},
aSr(){var x=0,w=A.j(y.H),v,u
var $async$aSr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i4K=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aSr)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aSr)
case 3:u=$.hdO
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aSr)
case 4:$.hdO=$.idT=$.idU=null
return A.h(null,w)}})
return A.i($async$aSr,w)},
fCX(d){var x=0,w=A.j(y.H),v,u
var $async$fCX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9a){x=1
break}u=new A.bk($.bE,y.d4)
d.c=new B.fCY(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.ic,new B.fCZ()),$async$fCX)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fCX,w)},
idR(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hUn(x):x},
hdS(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.aqI(u)
x=1
break}v=B.h8p(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdS,w)},
hdR(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.aqJ(u)
x=1
break}v=B.h8p(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdR,w)},
fWq(d){var x=0,w=A.j(y.T),v
var $async$fWq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqJ(d),$async$fWq)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWq,w)},
bDL(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hdR(d),$async$bDL)
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
return A.i($async$bDL,w)},
fqA(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fqA=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.W9(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cm(d.apS(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqA,w)},
Hg(d,e,f){return B.igj(d,e,f)},
igj(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hg=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hdS(a1),$async$Hg)
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
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hHi().aGf(D.dD3,null),$async$Hg)
case 4:l=d.hdO=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azJ(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bE,y.b1)
l.y=new B.fDy(f,k,new B.fDz(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8G(0,new B.Yn(r,"offer")),$async$Hg)
case 5:d=l
x=7
return A.b(l.ami(0),$async$Hg)
case 7:x=6
return A.b(d.a8y(0,a4),$async$Hg)
case 6:x=8
return A.b(B.fCX(l),$async$Hg)
case 8:x=9
return A.b(l.aqE(),$async$Hg)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.idR(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.aw(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqK(m,h),$async$Hg)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hpj(h)
case 11:v=new A.bqE(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hg,w)},
fCY:function fCY(d){this.a=d},
fCZ:function fCZ(){},
fDz:function fDz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDy:function fDy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDx:function fDx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iio(d){switch(d){case"new":return D.eyN
case"checking":return D.eyO
case"connected":return D.eyQ
case"completed":return D.eyP
case"failed":return D.eyS
case"disconnected":return D.eyT
case"closed":return D.aQO
case"count":return D.eyR}return D.aQO},
iip(d){switch(d){case"new":return D.aQP
case"gathering":return D.eyU
case"complete":return D.a9a}return D.aQP},
itt(d){switch(d){case"stable":return D.eyV
case"have-local-offer":return D.eyW
case"have-local-pranswer":return D.eyY
case"have-remote-offer":return D.eyX
case"have-remote-pranswer":return D.eyZ
case"closed":return D.aQV}return D.aQV},
irC(d){switch(d){case"new":return D.aQS
case"connecting":return D.aQT
case"connected":return D.aQU
case"closed":return D.a9b
case"disconnected":return D.aQR
case"failed":return D.aQQ}return D.a9b},
aaq:function aaq(d,e){this.a=d
this.b=e},
Pk:function Pk(d,e){this.a=d
this.b=e},
Ym:function Ym(d,e){this.a=d
this.b=e},
Pj:function Pj(d,e){this.a=d
this.b=e},
FP:function FP(d,e){this.a=d
this.b=e},
crL:function crL(){},
haa(d){var x=new B.FO()
x.a=d
x.b=!0
return x},
FO:function FO(){this.b=this.a=$},
aap:function aap(){},
avf:function avf(){},
Yn:function Yn(d,e){this.a=d
this.b=e},
h8l(){var x=0,w=A.j(y.H)
var $async$h8l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8l,w)},
h8o(d,e,f){var x=0,w=A.j(y.T),v
var $async$h8o=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mJ(D.n6))){v=null
x=1
break}v=B.fWH(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8o,w)},
hpj(d){var x,w=F.af_.a5m(C.dT.aN(d),null)
if(w.length===0){x=C.dT.aN(d)
return C.cP.gcu().aN(x)}return C.cP.gcu().aN(w)},
hUm(d){var x,w,v=C.cI.aN(d)
try{x=C.ca.cI(0,F.aeZ.bfV(v,!1))
return x}catch(w){x=C.ca.cI(0,v)
return x}},
h8p(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hUm(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cI(0,C.cI.aN(x))
return v}catch(u){return x}}return null},
hUn(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aO(s,"\n")},
hUo(){var x,w=$.ot(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b0R(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0R=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b0R)
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
return A.i($async$b0R,w)},
cdP(d,e){return B.hUp(d,e)},
hUp(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cM,null),$async$cdP)
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
return A.i($async$cdP,w)},
b0U(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0R(d),$async$b0U)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0U,w)},
b0T(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0T=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hUo()
r=C.a.i(f)
t=C.dT.aN(s)
x=3
return A.b(B.cdP(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0T)
case 3:if(!h){v=null
x=1
break}v=new A.a1m("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0T,w)},
b0S(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0R(o),$async$b0S)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cI(0,C.cI.aN(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0S,w)},
cdQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEI("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cM),$async$cdQ)
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
return A.i($async$cdQ,w)},
b0V(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jl(),$async$b0V)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0V,w)},
aqB(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqB)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0V(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqB,w)},
aqz(d,e){var x=0,w=A.j(y.H)
var $async$aqz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqz)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqz)
case 2:return A.h(null,w)}})
return A.i($async$aqz,w)},
a7Y(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7Y=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7Y)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jl(),$async$a7Y)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a7X(s),$async$a7Y)
case 5:x=6
return A.b(B.aqz(f,u),$async$a7Y)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Y,w)},
a7Z(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7Z=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7Z)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jl(),$async$a7Z)
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
return A.b(B.aqz(g,q),$async$a7Z)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7X(u),$async$a7Z)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Z,w)},
a8_(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8_)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jl(),$async$a8_)
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
s=B.b0O(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8_)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.Y.aw(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8_)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8_,w)},
cdR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cdR)
case 7:s=f
p=A.w(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cdR,w)},
Jm(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdR(d),$async$Jm)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0V(t),$async$Jm)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqA(d),$async$Jm)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0O(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqA(d),$async$Jm)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jm,w)},
aqA(d){var x=0,w=A.j(y.H)
var $async$aqA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqA)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqA)
case 2:return A.h(null,w)}})
return A.i($async$aqA,w)},
b0W(){var x,w=$.ot(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a80(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h8q(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdU(d){return B.hUr(d)},
hUr(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a80(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cdU)
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
return A.i($async$cdU,w)},
aqD(d,e){return B.hUs(d,e)},
hUs(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a80(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cM,null),$async$aqD)
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
return A.i($async$aqD,w)},
cdW(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdW=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a80(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqD(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdW)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdW,w)},
cdV(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a80(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqD(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdV,w)},
cdX(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdX=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a80(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqD(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdX,w)},
cdY(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h8q(d)){v=null
x=1
break}x=3
return A.b(B.cdU(d),$async$cdY)
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
return A.i($async$cdY,w)},
a87(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a87=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a87)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a87)
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
return A.i($async$a87,w)},
aqH(d){return B.hUH(d)},
hUH(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$aqH)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$aqH)
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
return A.i($async$aqH,w)},
aqI(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqI)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a87(),$async$aqI)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cI(0,C.cI.aN(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a3(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqH(s),$async$aqI)
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
return A.i($async$aqI,w)},
aqK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$aqK)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a87(),$async$aqK)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a3(s,r,q),r,q)
r=C.dT.aN(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqH(u),$async$aqK)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqK,w)},
aqJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqJ)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a87(),$async$aqJ)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cI(0,C.cI.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqJ,w)},
apC(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qm)){v=null
x=1
break}x=3
return A.b(p.me(e),$async$apC)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hi),$async$apC)
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
return A.i($async$apC,w)},
ip2(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fUI(d){return B.ip4(d)},
ip4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fUI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Lq(d,3600),$async$fUI)
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
return A.i($async$fUI,w)},
DH(d,e,f,g,h,i){var x=null
return B.ip1(d,e,f,g,h,i)},
ip1(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DH=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hpm(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h8s(r),$async$DH)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fUI(o),$async$DH)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a81(r),$async$DH)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aUp)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MD(A.a([],g))
x=15
return A.b(d.f8(0,A.aw4("GET",A.cD(n,0,null))).dh(0,C.GC),$async$DH)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a81(r),$async$DH)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lc(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DH)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0Y(r,k),$async$DH)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DH)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.W9(r)
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
return A.b(B.a81(r),$async$DH)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DH,w)},
aS5(d){return B.ip3(d)},
ip3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aS5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aS5)
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
return A.i($async$aS5,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[159]
O=c[47]
F=c[264]
I=c[151]
P=c[234]
E=c[227]
G=c[94]
Q=c[197]
R=c[152]
S=c[232]
K=c[269]
L=c[277]
B=a.updateHolder(c[22],B)
D=c[275]
T=c[196]
M=c[217]
U=c[73]
V=c[258]
W=c[79]
X=c[62]
N=c[93]
Y=c[276]
B.crM.prototype={
aGf(d,e){return this.cPV(d,e)},
cPV(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cv(t)))
t=J.k(u)
v=B.hZk(C.cP.gcu().aN(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGf,w)}}
B.b65.prototype={
bCa(d){var x=this,w=x.w
w.onclose=A.hp(new B.crH(x))
w.onopen=A.hp(new B.crI(x))
w.onmessage=A.hp(new B.crJ(x))
w.onbufferedamountlow=A.hp(new B.crK(x))},
gd6(d){return this.x},
aiw(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FO()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.haa(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiw)
case 8:v=t.haa(s.aoM(f,0,null))
x=1
break
case 7:case 4:v=B.haa(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiw,w)}}
B.b66.prototype={
bCb(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crN(x)))
w.addEventListener("icecandidate",A.hp(new B.crO(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crP(x)))
w.onicegatheringstatechange=A.hp(new B.crQ(x))
w.addEventListener("signalingstatechange",A.hp(new B.crR(x)))
if(!$.hhO())w.addEventListener("connectionstatechange",A.hp(new B.crS(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crT(x)))
w.addEventListener("track",A.hp(new B.crU(x)))},
ami(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ami=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ki(A.cv(A.T(y.N,y.z)))),y.aQ),$async$ami)
case 3:t=f
v=new B.Yn(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ami,w)},
a8y(d,e){return this.br6(0,e)},
br6(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8y)
case 2:return A.h(null,w)}})
return A.i($async$a8y,w)},
a8G(d,e){return this.brr(0,e)},
brr(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8G)
case 2:return A.h(null,w)}})
return A.i($async$a8G,w)},
aqE(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yn(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqE,w)},
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
B.adf.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_i.prototype={
S(){return new B.aAW()},
gd1(){return this.c}}
B.aAW.prototype={
Y(){this.a4()
this.af5()},
af5(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0P(u.e,u.c),$async$af5)
case 2:t=e
if(v.c!=null)v.m(new B.dc9(v,t))
return A.h(null,w)}})
return A.i($async$af5,w)},
QW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqw(t.e,t.c,!1),$async$QW)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fjK)
x=1
break}x=4
return A.b(B.a7W(u.a.c,"individual"),$async$QW)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6W(A.ec(new B.dc6(u),!1,null,y.H)),$async$QW)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QW,w)},
JM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fAP(o),$async$JM)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8_(o.e,r,s,q),$async$JM)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fgL)
x=1
break}x=5
return A.b(B.a7W(u.a.c,"member"),$async$JM)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6W(A.ec(new B.dc8(u),!1,null,y.H)),$async$JM)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JM,w)},
yF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7V(t.e,o,t.f,t.r,t.w,s),$async$yF)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7W(u.a.c,"org_owner"),$async$yF)
case 4:x=5
return A.b(B.aqB(u.a.c),$async$yF)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fBj(o),$async$yF)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7Y(s,t,o,q.c),$async$yF)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fgI)
x=1
break}x=10
return A.b(B.aqB(u.a.c),$async$yF)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b4(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6W(A.ec(new B.dc7(u),!1,null,y.H)),$async$yF)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yF,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J,q=r?C.jB:C.ql,p=B.h8n(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dJ,y.m).w
w=A.l(28)
v=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.h5,24)],y.V)
u=y.p
v=A.q(s,A.x(A.a([A.q(s,D.fDH,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hd,s,s,s),C.aB,D.fXF,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.c9a,C.n),s,s,s,s,C.ez,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lZ(new B.dcb(),s),C.T,v,C.e0,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.U,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.v(w,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aT:C.am,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.v(w,A.a([new B.adI(C.f5,C.aDm,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcj4(),s),C.af],u))
w.push(new B.adI(C.pt,C.a4Q,"Team Member","Sign in with your organization access code + password",t.gcjW(),s))
w.push(C.af)
w.push(new B.adI(C.apq,C.a6s,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjr(),s))
return A.c4(s,q,A.bm(!0,A.cd(A.x(w,C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.adI.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aI(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nf,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.S(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.zc,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.j,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDz.prototype={}
B.aGH.prototype={}
B.jC.prototype={
mJ(d){var x=this.b,w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garl(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ad(x/1024,1)+" KB"
if(x<1073741824)return C.i.ad(x/1048576,1)+" MB"
return C.i.ad(x/1073741824,2)+" GB"},
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
bfo(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jC(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOq(d){return this.bfo(null,d)},
aFZ(d){return this.bfo(d,null)}}
B.W3.prototype={
S(){return new B.aEV(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEV.prototype={
Y(){this.a4()
this.af6()},
af6(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cl(u.a.c),$async$af6)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dYH(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af6,w)},
af7(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fF(new A.fw(s)),$async$af7)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fkF)
case 1:return A.h(v,w)}})
return A.i($async$af7,w)},
a_x(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_x=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apC(s.d,4),$async$a_x)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_my_code_"+m+".png"),$async$a_x)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b4(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b4(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_x,w)},
aiY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.ab3("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiY,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===C.J,n=o?C.jB:C.ql,m=o?C.c:C.U,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m2
else if(q.e==null)x=A.as(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.m(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.m(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aF.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.L(C.aF.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,K.a5h,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.j,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.am2,p,p,1/0)
v=A.l(20)
u=A.a([new A.ac(0,C.G,C.aF.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.nc,w,C.l2,new A.en(A.q(p,A.qe(p,p,!1,B.hUi(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l2,A.A(A.a([A.E(A.es(N.D8,C.VU,q.gcbx(),p),1),C.au,A.E(A.dh(C.zB,C.abt,q.gcby(),A.bp(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.j,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3B,D.fTd,q.gcyK(),p),p)],r),C.l,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.amz,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.W7.prototype={
S(){return new B.aEY(new A.au(C.aw,$.aw()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aEY.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jk(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.t()
this.a3()},
a_y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jk(u.d.a.a)
if(t==null){u.m(new B.dZQ(u))
x=1
break}u.m(new B.dZR(u))
s=u.a
r=s.c
x=3
return A.b(B.a7U(s.d,new B.dZS(u),t,r),$async$a_y)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZT(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_y,w)},
a2N(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2N=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.dZU(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rT(r.a.c,q),$async$a2N)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZV(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiI(p,m,l,j,k),$async$a2N)
case 8:o=e
if(r.c!=null)r.m(new B.dZW(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZX(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZY(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2N,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===C.J,i=j?D.ai2:D.afB,h=j?D.ajQ:C.c,g=j?C.aP:C.U,f=j?C.bK:C.am,e=j?D.ah0:C.aO
i=[i,e,h,g,f,j?C.fo:C.bR]
x=A.S(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bXt,C.f,k,k,new A.p(k,k,k,A.l(16),k,new A.a8(C.aA,C.aE,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.l,k,C.e,C.j,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.fs,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,K.a5h,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bl_()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.Ob,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aF,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZZ(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.L(i[1],C.r,1)
m=J.Mg(l.a.d,4)
m=A.C(new A.N(m,new B.e__(x,new A.aHW(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lg,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.T,e,C.T,q,C.d8,p,C.T,A.q(k,A.x(m,C.l,k,C.e,C.j,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.l(14)
s=A.L(C.aF.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fff)
else q.push(A.X(C.lO,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.cT(k,A.A(q,C.l,k,C.e,C.j,0,k,k),k,k,C.b1,new A.p(u,k,s,t,k,k,C.n),C.iL,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.al,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.bF2,k,k,C.ah),1)
u=l.f?k:l.gcyL()
t=i[3]
s=i[1]
q=A.l(16)
s=A.es(M.a3B,D.fUk,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbz()
t=A.bp(C.aF,k,k,0,C.c,k,C.nD,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ab,C.t,A.a([f,v,A.bm(!0,A.lC(new B.e_0(),A.x(A.a([e,new A.D(D.bEw,A.x(A.a([s,C.T,i,C.af,A.bJ(l.f?C.tB:D.fSx,k,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.l,k,C.e,C.j,0,C.p),C.cw,C.a_P,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bl_.prototype={
oY(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hh(C.bB,v.length),C.aR)}}
B.W4.prototype={
S(){return new B.aEW()}}
B.aEW.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aR),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aR),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.aw,v)},
t(){var x,w=this,v=w.d
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
w.a3()},
af8(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af8=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dYI(r))
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
return A.b(B.a7Z(p,m,n,o,C.a.i(l).length===0?null:l),$async$af8)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fkg)
s=[1]
x=4
break}p.L(y.q).f.T(D.fiT)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dYJ(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af8,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J?C.jB:C.ql,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fKT,s,s,s,1,s,!0),p=A.q(s,D.bwD,C.f,s,s,new A.p(s,s,s,A.l(22),s,E.I5,C.n),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c3H,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c3C,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c3S,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbA()
u=A.bp(C.aF,s,s,s,s,C.h6,s,s,s,s,s,s)
return A.c4(q,r,A.cd(A.x(A.a([p,C.d8,o,C.af,x,C.af,w,C.nc,A.bJ(t.r?C.tB:C.aXf,s,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.acX.prototype={}
B.bxR.prototype={
a5D(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.apS()))
x=3
return A.b(B.Sc(t,s),$async$a5D)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5D,w)},
gd1(){return this.a}}
B.Og.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_h.prototype={
S(){return new B.aAV(new A.au(C.aw,$.aw()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aAV.prototype={
Y(){this.a4()
$.aV.x1$.push(new B.dc5(this))},
t(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.t()
this.a3()},
cbG(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2m(d),u=x.a.c,t=u?C.iF:v.a[2],s=u?C.c:v.a[3],r=u?C.aT:v.a[4],q=u?C.jB:v.a[0],p=A.l(24),o=A.L(C.aF.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aF.j(u?0.25:0.12),C.h5,32)],n),l=A.q(w,T.as5,C.f,w,w,new A.p(w,w,w,A.l(18),A.a([new A.ac(0,C.G,C.aF.j(0.4),C.cA,16)],n),C.asU,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxt()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.GQ,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b5i),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dc3(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nZ,new B.dc4(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.l(14)
n=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.cL,12)],n)
g=y.p
return A.eP(w,C.L,new A.cP(Q.LS,A.c2(new A.D(C.yR,A.x(A.a([l,C.aQ,k,C.T,j,C.e0,i,C.e0,A.A(A.a([f,C.au,A.E(A.c2(A.aI(!1,C.a3,!0,w,A.aP(!1,A.l(14),!0,D.es9,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbF(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.p(w,w,w,h,n,L.Q7,C.n),C.bj),2)],g),C.l,w,C.e,C.j,0,w,w)],g),C.l,w,C.e,C.P,0,C.p),w),new A.p(t,w,o,p,m,w,C.n),C.bj),w),w,w,w,C.Oi,C.d7,w,w,w)}}
B.bxt.prototype={
oY(d,e){return e.amc(e.a.toUpperCase())}}
B.W5.prototype={
S(){return new B.aEX(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEX.prototype={
Y(){var x=this
x.a4()
x.um()
x.w=A.df(C.jE,new B.dZO(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.We()
this.a3()},
a1F(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Of(u.a.c),$async$a1F)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bj(u.a.c),$async$a1F)
case 4:u.m(new s.dZb(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1F,w)},
um(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$um=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Of(u.a.c),$async$um)
case 3:t=e
x=4
return A.b(B.Bj(u.a.c),$async$um)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dZc(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O9(u.d)
B.Cl(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$um,w)},
O9(d){return this.bGd(d)},
bGd(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a83(r,u.a.c),$async$O9)
case 8:p=f
if(u.c==null){x=1
break}new B.dYL(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a_(r.c,"video/")||r.mJ(D.n6))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wc(r,u.a.c),$async$O9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bj(u.a.c),$async$O9)
case 12:u.m(new o.dYM(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O9,w)},
Oy(d){return this.bMx(d)},
bMx(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a83(d,u.a.c),$async$Oy)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dYR(u,d,t))
x=6
return A.b(A.fF(new A.fw(t)),$async$Oy)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fF(new A.fw(r.toUpperCase())),$async$Oy)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b4(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
un(d,e){return this.cJF(d,e)},
cJF(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$un=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZC(r,e))
u=3
x=6
return A.b(d.$0(),$async$un)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZD(r))
$.eX.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$un,w)},
gaXK(){var x=this.a
return x.f||x.r||x.w},
IF(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXK()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdN(s,n,r,q,o,t),$async$IF)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fO5(o,u.a.c),$async$IF)
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
return A.b(B.DJ(s,o,r,q,n,t),$async$IF)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IF,w)},
a0J(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqB(u.a.c),$async$a0J)
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
return A.b(A.a6(t,!1).cd(A.ec(new B.dZ8(u,r,q),!1,null,y.H)),$async$a0J)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0J,w)},
a1P(d){return this.csi(d)},
csh(){return this.a1P(1)},
csi(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXK()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqy(u.a.c),$async$a1P)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1P,w)},
acZ(d,e,f){return this.c2x(d,e,f)},
c2x(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.un(new B.dZ5(u,d,null,e,f),"Uploading\u2026"),$async$acZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acZ,w)},
bGm(){B.hEr(!1,new B.dYP(this))
return},
cxl(){this.m(new B.dZg(this))},
aAu(){var x=0,w=A.j(y.H),v=this
var $async$aAu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGm()
return A.h(null,w)}})
return A.i($async$aAu,w)},
acV(){var x=0,w=A.j(y.H),v=this
var $async$acV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.un(new B.dYV(v),"Importing\u2026"),$async$acV)
case 2:return A.h(null,w)}})
return A.i($async$acV,w)},
T1(d){return this.cIZ(d)},
cIZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mJ(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.ec(new B.dZz(u,d),!1,null,y.H)),$async$T1)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mJ(D.S7)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.ec(new B.dZA(u,d),!1,null,y.H)),$async$T1)
case 8:x=1
break
case 7:x=u.c3f(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.ec(new B.dZB(u,d),!1,null,y.H)),$async$T1)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T1,w)},
c3f(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cSm,C.a.b2(x,w+1).toLowerCase())},
agG(d){return this.cj8(d)},
cj8(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mJ(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.ec(new B.dZ6(u,d),!1,null,y.H)),$async$agG)
case 5:x=1
break
case 4:u.m(new B.dZ7(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agG,w)},
Sm(d){return this.cAe(d)},
cAe(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$Sm)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.un(new B.dZs(u,d),"Preparing QR\u2026"),$async$Sm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sm,w)},
ajn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZt(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZu(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sm(r),$async$ajn)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajn,w)},
ajg(d){return this.czM(d)},
czM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2m(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZm(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajg)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T1(d)
break
case"qr":u.Sm(A.a([d],y.r))
break
case"send_my_code":u.cjL(A.a([d],y.r))
break
case"save":u.aiE(d)
break
case"delete":u.Jw(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajg,w)},
Yo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYS(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYT(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$Yo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.un(new B.dYU(u,r),"Preparing file\u2026"),$async$Yo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yo,w)},
ahL(d){return this.cqD(d)},
cqD(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hFi(d,!1),$async$ahL)
case 3:s=f
r=s==null
q=B.a80(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahL,w)},
agM(){var x=0,w=A.j(y.H),v=this,u
var $async$agM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fVO(u,v.a.c),$async$agM)
case 2:return A.h(null,w)}})
return A.i($async$agM,w)},
bGl(){B.hEr(!1,new B.dYO(this,null))
return},
JL(d,e){return this.cjM(d,e)},
b3d(d){return this.JL(null,d)},
cjL(d){return this.JL(d,null)},
cjM(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZ9(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xR.cq().aoY(!0,C.a1D,!1),$async$JL)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.un(new B.dZa(l,s,r),"Preparing\u2026"),$async$JL)
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
return A.b(B.bFS(p,l,e,s.a.c),$async$JL)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JL,w)},
IV(d){return this.c2k(d)},
c2k(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hUh(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3d(t),$async$IV)
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
return A.b(u.un(new B.dZ3(u,d),"Receiving video\u2026"),$async$IV)
case 11:x=1
break
case 10:x=12
return A.b(u.un(new B.dZ4(u,d),"Receiving\u2026"),$async$IV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IV,w)},
EM(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DD()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahL(t),$async$EM)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IV(s),$async$EM)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.ec(new B.dZe(u),!1,null,y.N)),$async$EM)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.um(),$async$EM)
case 10:x=1
break
case 9:x=11
return A.b(u.IV(C.a.i(r)),$async$EM)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EM,w)},
aiE(d){return this.cvU(d)},
cvU(d){var x=0,w=A.j(y.H),v=this
var $async$aiE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.un(new B.dZd(v,d),"Saving\u2026"),$async$aiE)
case 2:return A.h(null,w)}})
return A.i($async$aiE,w)},
Jw(d){return this.bOS(d)},
bOS(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jw)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdQ(t),$async$Jw)
case 6:case 5:s=d.a
x=7
return A.b(B.Fk(u.a.c,s),$async$Jw)
case 7:u.r.W(0,s)
x=8
return A.b(u.um(),$async$Jw)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jw,w)},
ajt(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2m(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZy(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajt)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agM()
break
case"import":u.acV()
break}case 1:return A.h(v,w)}})
return A.i($async$ajt,w)},
cbD(d){var x=d.c
if(C.a.a_(x,"video/")||d.mJ(D.n6))return C.qR
if(C.a.a_(x,"image/")||d.mJ(D.S7))return C.uN
if(C.a.q(x,"pdf"))return E.PC
return D.apS},
B(d){var x,w,v=this,u=null,t=B.a2m(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.HZ,u,u,u,new B.dZJ(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bY4,u,u,u,v.e?u:v.gcjs(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxk()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bSg:E.aqh,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a3y,u,u,u,v.e?u:v.gcbE(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oG,u,u,u,v.e?u:v.gb4i(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bZQ,u,u,u,v.e?u:new B.dZK(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.dZL(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.S(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.S(d).ax.a===C.J?0.12:0.08),C.aF.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kp(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAS(C.jK,s,!0,t,w?u:v.gcAf(),u),1)
x.push(new A.D(D.bDi,A.lC(new B.dZM(),A.A(A.a([s,C.au,A.E(new B.aAS(C.uO,"Export",!1,t,w?u:v.gbSL(),u),1)],o),C.l,u,C.e,C.j,0,u,u),C.cw,C.iv,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfx(t,v.e?u:v.gb4i(),u)
else s=A.kq(!0,u,u,new B.dZN(v,t),s,u,D.bDa,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ab,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAS.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aF,t,t,0,C.c,t,C.wl,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ch,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wl,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bfx.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.dc1(),new A.D(E.a0J,A.x(A.a([A.lC(new B.dc2(),A.q(x,A.X(C.zd,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a8(C.aA,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e_,C.hG,x,x,new A.br(0.86,1,w),s),C.e0,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e0,A.dh(C.oG,D.fXZ,this.d,A.bp(C.aF,x,x,x,C.c,x,C.Og,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cw,C.C7,x,x,new A.br(0,1,w),s),x,x,x)}}
B.adg.prototype={
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
if(!o||i.mJ(D.n6))p=D.ds8
else{p=C.a.a_(p,"image/")||i.mJ(D.S7)
n=y.O
p=p?A.a([C.cG,C.aF],n):A.a([C.aN.j(0.85),C.aF.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a8(C.aA,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garl()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mJ(D.n6))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.ax,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cf))
if(!(!o||i.mJ(D.n6)))l.push(A.h64(C.aF,!1,j,j,j,!1,j,j,new B.dco(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oy,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cf))
return A.lC(new B.dcp(),new A.D(C.em,A.aI(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0a,A.A(l,C.l,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bG("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_j.prototype={
S(){return new B.aAX()},
gd1(){return this.c}}
B.aAX.prototype={
Y(){this.a4()
this.yv()},
t(){B.hUw(this.e)
this.a3()},
yv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rT(o.c,o.d),$async$yv)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hUz(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hUy(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dcl(s))
x=1
break}s.m(new B.dcm(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dcn(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yv,w)},
a2M(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2M=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rT(t.c,t.d),$async$a2M)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fhh)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiI(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2M)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b4(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2M,w)},
c2d(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kD(u,C.A,v,new B.dcj(w,t),C.hg,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dck(w),C.hg,C.dB,!0,v,!1,v,v)
else return C.bL
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2m(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.D9,u,u,u,v.gb84(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fu
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.dh(C.D9,D.fG5,v.gb84(),A.bp(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c2d()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_g.prototype={
S(){return new B.aAU(A.ajB(),C.bE,C.bE)},
gd1(){return this.c}}
B.aAU.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fA(w,A.a4(w).k("fA<1>")).iC(new B.dbZ(v))
x.gcXx().iC(new B.dc_(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a4(x).k("fA<1>"))}if(x==null)x=C.bbt
x.iC(new B.dc0(v))
v.yv()},
yv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rT(p.c,p.d),$async$yv)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbS(s))
x=1
break}x=8
return A.b(s.d.vq(0,new A.a4t(r,s.a.d.c)),$async$yv)
case 8:if(s.c==null){x=1
break}s.m(new B.dbT(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbU(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yv,w)},
a_z(){var x=0,w=A.j(y.H),v=this,u
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_z)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_z)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_z,w)},
aVy(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2m(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fu
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bTg,C.f,o,o,new A.p(o,o,o,A.l(24),o,L.Q7,C.n),o,88,o,o,o,o,o,88)
t=A.kX(C.aF,o,o,m,0,new B.dbV(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVy(p.w)+" / "+p.aVy(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aF,o,o,o,o,D.fdH,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uQ:C.hx,o,o,o,o,o)
x=A.x(A.a([u,C.l2,t,x,C.d8,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbH(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qD,x,o),o,o,o),o,!1,!1,o,o)}}
B.QA.prototype={
S(){return new B.aB_()},
gd1(){return this.c}}
B.aB_.prototype={
Y(){this.a4()
this.Qe()},
Qe(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qe=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h8o(o.c,o.d,new B.dcC(s)),$async$Qe)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcD(s))
x=1
break}s.e=r
q=O.ihe(r)
if(q==null){s.m(new B.dcE(s))
x=1
break}s.d=q
q.aW(0,s.gb30())
x=8
return A.b(q.iX(0).dh(0,C.rT),$async$Qe)
case 8:if(s.c==null){x=1
break}s.m(new B.dcF(s))
x=9
return A.b(q.qp(0),$async$Qe)
case 9:q.tY(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dcG(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qe,w)},
chH(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcH(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dv(0,x.gb30())
w=x.d
if(w!=null)w.t()
B.irV(x.e)
x.a3()},
afb(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0X(u.c,u.d),$async$afb)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b4(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afb,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2m(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aH(t,t,t,t,C.oF,t,t,t,u.gcbB(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fu
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aj4(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.AP(s,t),A.az(t,A.zn(A.q(t,A.X(q?I.uQ:C.hx,C.c,t,t,t,48),C.f,t,t,new A.p(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b1,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcJ(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_l.prototype={
S(){return new B.aAY(new A.cw(null,y.A))}}
B.aAY.prototype={
gcJm(){var x,w,v=this.a
if(v.e!==D.Ts)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcIX(){var x,w,v=this.a
if(v.e!==D.Af)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJm()
if(x!=null){v.Rm(x)
v.e=A.df(R.GF,new B.dcy(v,x))}w=v.gcIX()
if(w!=null){v.Rl(w)
v.f=A.df(C.fH,new B.dcz(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rl(d){return this.coQ(d)},
coQ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqG(d),$async$Rl)
case 3:t=f
x=4
return A.b(B.ce8(d),$async$Rl)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dcq(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rl,w)},
Rm(d){return this.coR(d)},
coR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fWq(d),$async$Rm)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDL(t),$async$Rm)
case 4:if(u.c==null){x=1
break}u.m(new B.dcr(u))
u.c.L(y.q).f.T(D.aU0)
case 1:return A.h(v,w)}})
return A.i($async$Rm,w)},
gc7s(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbC(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2y(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DD()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fkq)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.ec(new B.dcs(),!1,null,y.N)),$async$a2y)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDL(s),$async$a2y)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aU0)
case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
aaN(d){return this.bMy(d)},
bMy(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fF(new A.fw(C.d.aO(t,", "))),$async$aaN)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b4(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaN,w)},
af9(d){return this.bMg(d)},
bMg(d){var x=0,w=A.j(y.H),v=this
var $async$af9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fF(new A.fw(v.a.c)),$async$af9)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fhL)
return A.h(null,w)}})
return A.i($async$af9,w)},
a2s(d){return this.cvW(d)},
cvW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apC(s.d,4),$async$a2s)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_doc_share_qr.png"),$async$a2s)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b4(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.T(A.b4(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2s,w)},
gaZ0(){var x,w=this.a
if(w.e!==D.J8)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaK(d){return this.bMr(d)},
bMr(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ0()
if(t==null){x=1
break}x=3
return A.b(A.fF(new A.fw(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaK)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fjp)
case 1:return A.h(v,w)}})
return A.i($async$aaK,w)},
afa(){var x=0,w=A.j(y.H),v=this,u
var $async$afa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.We(),$async$afa)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afa,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2m(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.J8&&i!==D.Ts&&i!==D.Af
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J8||t===D.Ts||t===D.Af?l:A.aH(l,l,l,l,C.lo,l,l,l,m.gb12(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.L(C.aF.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qe(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7s(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J8){t=C.aF.j(0.12)
o=A.l(20)
C.d.v(q,A.a([C.T,A.q(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gcbC(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2K,D.fPI,new B.dct(m,d),l)],p))}if(m.a.e===D.J8&&m.gaZ0()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c_b,D.fMg,new B.dcu(m,d),l)],p))
if(m.a.e===D.Af){x=(m.w?C.dI:C.aF).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ad(C.i.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.T,A.q(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}if(m.a.e===D.Ts){x=(m.r?C.dI:C.aF).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.T,A.q(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l),C.af,A.dh(D.bVJ,D.fST,m.gcwi(),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oP(i,A.c4(v,w,new A.D(C.ad,A.x(A.a([A.E(A.q(l,A.x(q,C.l,l,C.bb,C.j,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D8,C.VU,new B.dcv(m,d),l),1),C.au,A.E(A.dh(C.zB,C.abt,new B.dcw(m,d),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.j,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.AT,l,m.gb12(),A.bp(C.aN,l,l,l,l,C.h6,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.dcx(),y.C)}}
B.ade.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.cd(A.x(A.a([w,C.aQ,A.q(x,A.qe(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bJ(C.AU,x,new B.dbR(d),x)],u),x,x,C.nn,v,x,x,x,x,D.fF5,x)}}
B.a_f.prototype={
S(){return new B.aAT(A.zY(C.yx,C.o4,C.v2))}}
B.aAT.prototype={
t(){this.d.t()
this.a3()},
az1(d){var x,w,v,u,t
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
return A.c4(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fMO,x,x,x,1,x,!0),C.w,A.zX(this.d,C.c_,this.gaz0()),x,!1,!1,x,x)}}
B.a_m.prototype={
S(){return new B.aAZ(A.zY(C.yx,C.o4,C.v2))},
gd1(){return this.c}}
B.aAZ.prototype={
c3h(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah8(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MJ("text/plain"),$async$ah8)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fkk)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah8,w)},
abB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hFi(p,!0),$async$abB)
case 3:t=e
p=t==null
s=B.a80(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fgS)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abB,w)},
t(){this.d.t()
this.a3()},
az1(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3h(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.arb,v,v,v,w.gbSe(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a3F,v,v,v,w.gcmb(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.uK:P.Pl,v,v,v,v,v),v,v,v,new B.dcB(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fTQ,v,v,v,1,v,!0)
u=A.zX(w.d,C.c_,w.gaz0())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ab,C.t,A.a([u,A.as(A.q(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eys],s),v),v,!1,!1,v,v)}}
B.bfy.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.ph
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.l(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.ph:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0Q,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaq.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pk.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Ym.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pj.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FP.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crL.prototype={}
B.FO.prototype={}
B.aap.prototype={}
B.avf.prototype={}
B.Yn.prototype={}
var z=a.updateTypes(["aB<~>()","P(jC)","n(jC)","W5(Z)","~()","a_i(Z)","H(H,jC)","QA(Z)","~(ml)","ct(FO)","aB<jC?>(@)","W3(Z)","W7(Z)","D(jC)","jC(@)","a9<n,@>(jC)","a_h(Z)","W4(Z)","a_j(Z)","a_g(Z)","a_l(Z)","ade(Z)","ai<jC>()","a_m(Z)","adg(Z,H)","a_f(Z)","a9<n,aE>(jC)","ct(Ym)","ct(aap)","aB<ct>(FO)"])
B.crH.prototype={
$1(d){var x=this.a
x.x=D.aQN
x.y.J(0,D.aQN)},
$S:74}
B.crI.prototype={
$1(d){var x=this.a
x.x=D.aQM
x.y.J(0,D.aQM)},
$S:74}
B.crJ.prototype={
$1(d){var x=this.a
x.aiw(A.ahu(d.data)).bG(new B.crG(x),y.b)},
$S:74}
B.crG.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crK.prototype={
$1(d){},
$S:74}
B.crN.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hZj(d.channel))},
$S:16}
B.crO.prototype={
$1(d){},
$S:16}
B.crP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iio(w.iceConnectionState)
x.cx=w
if($.hhO())switch(w.a){case 0:x.cy=D.aQS
break
case 1:x.cy=D.aQT
break
case 3:x.cy=D.aQU
break
case 5:x.cy=D.aQQ
break
case 6:x.cy=D.aQR
break
case 7:x.cy=D.a9b
break
default:break}},
$S:108}
B.crQ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iip(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.crR.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.itt(w.signalingState)},
$S:108}
B.crS.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.irC(w.connectionState)},
$S:108}
B.crT.prototype={
$1(d){},
$S:108}
B.crU.prototype={
$1(d){},
$S:16}
B.fwe.prototype={
$1(d){var x=y.F.a(new A.qt([],[]).nY(d.target.result,!1)),w=C.wh.q(x.objectStoreNames,"blobs")
if(!w)C.we.Gh(x,"blobs")},
$S:168}
B.fVC.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wV.fq(this.b)
$.eX.mC()
this.c.$1(d)},
$S:421}
B.fVE.prototype={
$1(d){return this.a.$1(B.i7K(this.b,this.c))},
$S:28}
B.fVD.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:28}
B.fVB.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fVR.prototype={
$1(d){var x=this
return B.hud(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fVS.prototype={
$1(d){var x=this
return B.hud(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fyV.prototype={
$1(d){var x=this
return B.cdK(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dc9.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dc6.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdK(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dc8.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdK(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dc7.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdK(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcb.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bUk,x,x,x,new B.dca(d),x,x,x,x,x,x),A.E(A.FA(D.RR,!0,x,!1,C.a2G,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.j,0,x,x),D.RR,x,g,C.amQ,0,e,f)},
$C:"$4",
$R:4,
$S:391}
B.dca.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAS.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eQ,y.m).w,t=this.a,s=t?C.iF:C.c,r=A.l(28),q=A.q(v,D.bwW,C.f,v,v,D.b6X,v,v,v,v,D.amG,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bYF,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GV,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.arr,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dn,new B.fAQ(d),v),1),C.au,A.E(A.bJ(D.fLg,v,new B.fAR(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.j,0,v,v)],w),C.l,v,C.e,C.j,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GI,v,v,v,v),v)},
$S:60}
B.fAQ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAR.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fi1)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDz(v,x))},
$S:0}
B.fBl.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eQ,y.m).w,u=x.a,t=u?C.iF:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bwM,C.f,w,w,D.b8q,w,w,w,w,D.amG,w,w,1/0),new A.D(C.GV,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hdB(u,"Organization name",C.Hn,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hdB(u,"Access code",C.nI,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hdB(u,"Member password",H.HU,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bJ(D.fTX,w,new B.fBk(r,q,p,d),A.bp(C.aF,w,w,w,w,C.h6,w,w,w,w,w,w))],o),C.l,w,C.e,C.j,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GI,w,w,w,w),w)},
$S:60}
B.fBk.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fi6)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGH(u,x,w))},
$S:0}
B.cdB.prototype={
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
p=C.a.a_(j,"http")?A.cD(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vS(p,null).dh(0,C.a_O),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cm(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdH.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdI.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdJ.prototype={
$1(d){return d.b},
$S:z+2}
B.cdD.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdE.prototype={
$1(d){return d.b},
$S:z+2}
B.cdC.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cdF.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdG.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fVP.prototype={
$1(d){return new B.W3(this.a,null)},
$S:z+11}
B.fVQ.prototype={
$1(d){return new B.W7(this.a,this.b,this.c,null)},
$S:z+12}
B.dYH.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZQ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZR.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZS.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dZP(x,d))},
$S:2}
B.dZP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZT.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZU.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZV.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZX.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZY.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_0.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.dZZ.prototype={
$1(d){var x=this.a
return x.f?null:x.a_y()},
$S:2}
B.e__.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mJ(D.S7))s=C.uN
else s=C.a.a_(s,"video/")||d.mJ(D.n6)?C.qR:D.apS
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.q(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garl(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.l,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dYI.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dYJ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdL.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.cdM.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.fWJ.prototype={
$2(d,e){return e===this.a},
$S:299}
B.ftj.prototype={
$1(d){return J.k(d)},
$S:17}
B.fz6.prototype={
$1(d){var x=this.b
B.i5x(C.Ha.ga7g(this.a)).bG(x.gC1(x),y.H)},
$S:130}
B.fz7.prototype={
$1(d){return this.a.dd(0,null)},
$S:130}
B.fz8.prototype={
$0(){return null},
$S:12}
B.ce_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fz9.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
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
return new B.jC(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fDl.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fxk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxl.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ce4.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mJ(D.n6)},
$S:z+1}
B.h_Z.prototype={
$1(d){return new B.a_h(this.a,null)},
$S:z+16}
B.dc5.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dc3.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dc4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZO.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1F()},
$S:11}
B.dZb.prototype={
$0(){var x=J.bGW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZc.prototype={
$0(){var x=J.bGW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYL.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYK(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFZ(this.c)}},
$S:0}
B.dYK.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYM.prototype={
$0(){var x=J.bGW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYR.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYQ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFZ(this.c)}},
$S:0}
B.dYQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZC.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZD.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZ8.prototype={
$1(d){return new B.W4(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZ5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IF(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.W8(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.um(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1P(s.gI(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYP.prototype={
$1(d){this.a.acZ(d,"No files selected.","Added")},
$S:421}
B.dZg.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dZf(),A.U(x).k("N<1,n>")))},
$S:0}
B.dZf.prototype={
$1(d){return d.a},
$S:z+2}
B.dYV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xR.cq().cZv(C.a1D,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jJ(o,0,null)}u=2
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
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqF(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cr(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.um(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZz.prototype={
$1(d){return new B.QA(this.a.a.c,this.b,null)},
$S:z+7}
B.dZA.prototype={
$1(d){return new B.a_j(this.a.a.c,this.b,null)},
$S:z+18}
B.dZB.prototype={
$1(d){return new B.a_g(this.a.a.c,this.b,null)},
$S:z+19}
B.dZ6.prototype={
$1(d){return new B.QA(this.a.a.c,this.b,null)},
$S:z+7}
B.dZ7.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZs.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IF(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a82(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csh(),$async$$0)
case 5:x=6
return A.b(p.um(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dZo(p),r),new B.dZp(),r.k("N<ak.E,n>")).bY(0,new B.dZq())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.ec(new B.dZr(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.py(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.We(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZo.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dZn(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dZn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZp.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dZq.prototype={
$1(d){return d.length!==0},
$S:3}
B.dZr.prototype={
$1(d){var x=this.a
return new B.a_l(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZt.prototype={
$1(d){return d.a},
$S:z+2}
B.dZu.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZm.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.as(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garl(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mJ(D.n6)?C.t5:C.pz
p=!x||p.mJ(D.n6)?"Play video":"View"
return A.c2(A.bm(!0,new A.D(C.Ch,A.x(A.a([q,o,t,C.aB,B.a_k(!1,u,!1,w,p,new B.dZh(d),v),B.a_k(!1,u,!1,C.jK,"Share via QR",new B.dZi(d),"Letters/numbers QR code"),B.a_k(!1,u,!1,D.a2L,"Send to their Code",new B.dZj(d),"Enter someone else's personal code"),B.a_k(!1,u,!1,C.i_,"Download / save",new B.dZk(d),v),C.an,B.a_k(!1,u,!0,C.ei,"Delete",new B.dZl(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),new A.p(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,v,v,C.n),C.bj)},
$S:715}
B.dZh.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dZi.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dZj.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dZk.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dZl.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dYS.prototype={
$1(d){return d.a},
$S:z+2}
B.dYT.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYU.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a84(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hi(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.py(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYO.prototype={
$1(d){var x=this.a
x.un(new B.dYN(x,d,this.b),"Preparing\u2026")},
$S:421}
B.dYN.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.W8(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFS(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ9.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h8r(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ3.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hg(new B.dZ_(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dZ0(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZ1(s))
case 5:x=8
return A.b(r.b.iI(0,C.GC,new B.dZ2()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.um(),$async$$0)
case 9:s.ij("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ_.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYX(x,d,e))},
$S:225}
B.dYX.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZ0.prototype={
$1(d){return new B.ade(this.a.a,null)},
$S:z+21}
B.dZ1.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZ2.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZ4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jk(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7T(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3d(B.Jk(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqF(new B.dYY(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h8q(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.um(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dYZ()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYY.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYW(x,d,e))},
$S:225}
B.dYW.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYZ.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mJ(D.n6)},
$S:z+1}
B.dZe.prototype={
$1(d){return new B.a_m(this.a.a.c,null)},
$S:z+23}
B.dZd.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0X(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZy.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aF.j(0.35)
return A.c2(A.bm(!0,new A.D(C.Ch,A.x(A.a([A.as(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_k(!0,w,!1,C.nI,"My Code",new B.dZv(d),"Your personal code & QR \u2014 others send docs to you"),B.a_k(!1,w,!1,D.a2L,"Send to their Code",new B.dZw(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_k(!1,w,!1,S.zs,"Import backup",new B.dZx(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),new A.p(u,x,new A.bH(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,x,x,C.n),C.bj)},
$S:715}
B.dZv.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dZw.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGl()},
$S:0}
B.dZx.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZL.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Ju(D.RR,x,C.a2G,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RR).j(0.4+e*0.2),C.H,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:684}
B.dZJ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZK.prototype={
$0(){this.a.ajt()
return null},
$S:0}
B.dZM.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*10)),e)},
$S:101}
B.dZN.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adg(e,w,v,this.b,x.e,x.cbD(w),new B.dZF(x,w),new B.dZG(x,v,w),new B.dZH(x,w),new B.dZI(x,w),null)},
$S:z+24}
B.dZF.prototype={
$0(){this.a.agG(this.b)
return null},
$S:0}
B.dZG.prototype={
$0(){var x=this.a
return x.m(new B.dZE(x,this.b,this.c))},
$S:0}
B.dZE.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZH.prototype={
$0(){this.a.Oy(this.b)
return null},
$S:0}
B.dZI.prototype={
$0(){this.a.ajg(this.b)
return null},
$S:0}
B.dc1.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*18)),e)},
$S:101}
B.dc2.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:111}
B.dcp.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.dco.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dcl.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dcm.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dcn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dcj.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dch(this.a),C.hg,C.dB,!0,x,!1,x,x)
$.aV.x1$.push(new B.dci(this.a))
return C.bL},
$S:133}
B.dch.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dcf(this.a))
return C.bL},
$S:193}
B.dcf.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcc(x))},
$S:7}
B.dcc.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dci.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dce(x))},
$S:7}
B.dce.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dck.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dcg(this.a))
return C.bL},
$S:193}
B.dcg.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcd(x))},
$S:7}
B.dcd.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbZ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbY(x,d))},
$S:1763}
B.dbY.prototype={
$0(){return this.a.f=this.b===C.vq},
$S:0}
B.dc_.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbX(x,d))},
$S:7}
B.dbX.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dc0.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbW(x,d))},
$S:7}
B.dbW.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbS.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbT.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbU.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbV.prototype={
$1(d){return this.a.d.Nv(0,A.dw(0,0,0,C.i.V(d),0,0))},
$S:6}
B.dcC.prototype={
$0(){var x=this.a.a
return B.rT(x.c,x.d)},
$S:1764}
B.dcD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dcE.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcF.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dcG.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcH.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcJ.prototype={
$0(){var x=this.a
x.m(new B.dcI(x))},
$S:0}
B.dcI.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qp(0)},
$S:0}
B.dcy.prototype={
$1(d){return this.a.Rm(this.b)},
$S:11}
B.dcz.prototype={
$1(d){return this.a.Rl(this.b)},
$S:11}
B.dcq.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dcr.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcs.prototype={
$1(d){return D.htR},
$S:z+25}
B.dcx.prototype={
$2(d,e){if(d)B.We()},
$S:128}
B.dct.prototype={
$0(){return this.a.aaN(this.b)},
$S:0}
B.dcu.prototype={
$0(){return this.a.aaK(this.b)},
$S:0}
B.dcv.prototype={
$0(){return this.a.af9(this.b)},
$S:0}
B.dcw.prototype={
$0(){return this.a.a2s(this.b)},
$S:0}
B.dbR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dcB.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qt(),$async$$0)
case 2:u.m(new B.dcA(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dcA.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ce6.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mJ(D.n6)},
$S:z+1}
B.ce7.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ce5.prototype={
$2(d,e){return this.bmW(d,e)},
bmW(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wf(u.c,A.I(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1765}
B.fCY.prototype={
$1(d){if(d===D.a9a&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fCZ.prototype={
$0(){},
$S:12}
B.fDz.prototype={
bov(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fqA(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hpm(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bov(d,e)},
$S:482}
B.fDy.prototype={
$1(d){var x=this
d.b=new B.fDx(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fDx.prototype={
$1(d){return this.bou(d)},
bou(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0Y(n,m),$async$$1)
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
return A.b(B.fqA(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a81(m),$async$$1)
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
x(v=B.aAW.prototype,"gcj4","QW",0)
x(v,"gcjW","JM",0)
x(v,"gcjr","yF",0)
x(v=B.aEV.prototype,"gcbx","af7",0)
x(v,"gcby","a_x",0)
x(v,"gcyK","aiY",0)
x(v=B.aEY.prototype,"gcbz","a_y",0)
x(v,"gcyL","a2N",0)
x(B.aEW.prototype,"gcbA","af8",0)
x(B.aAV.prototype,"gcbF","cbG",4)
x(v=B.aEX.prototype,"gcjs","a0J",0)
x(v,"gcxk","cxl",4)
x(v,"gb4i","aAu",0)
x(v,"gcAf","ajn",0)
x(v,"gbSL","Yo",0)
x(v,"gcbE","EM",0)
x(B.aAX.prototype,"gb84","a2M",0)
x(B.aAU.prototype,"gcbH","a_z",0)
x(v=B.aB_.prototype,"gb30","chH",4)
x(v,"gcbB","afb",0)
x(v=B.aAY.prototype,"gcwi","a2y",0)
x(v,"gb12","afa",0)
w(B.aAT.prototype,"gaz0","az1",8)
x(v=B.aAZ.prototype,"gcmb","ah8",0)
x(v,"gbSe","abB",0)
w(v,"gaz0","az1",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.crL,B.aap,B.avf,B.aDz,B.aGH,B.jC,B.acX,B.bxR,B.FO,B.Yn])
w(B.crM,B.crL)
w(B.b65,B.aap)
x(A.ht,[B.crH,B.crI,B.crJ,B.crG,B.crK,B.crN,B.crO,B.crP,B.crQ,B.crR,B.crS,B.crT,B.crU,B.fwe,B.fVC,B.fVE,B.fVD,B.fVR,B.fVS,B.fyV,B.dc6,B.dc8,B.dc7,B.dcb,B.fAS,B.fBl,B.cdB,B.cdI,B.cdJ,B.cdE,B.cdC,B.cdF,B.cdG,B.fVP,B.fVQ,B.dZS,B.e_0,B.dZZ,B.e__,B.ftj,B.fz6,B.fz7,B.ce_,B.fz9,B.fDl,B.fxk,B.fxl,B.ce4,B.h_Z,B.dc5,B.dc3,B.dZO,B.dYK,B.dYQ,B.dZ8,B.dYP,B.dZf,B.dZz,B.dZA,B.dZB,B.dZ6,B.dZo,B.dZn,B.dZp,B.dZq,B.dZr,B.dZt,B.dZu,B.dZm,B.dYS,B.dYT,B.dYO,B.dZ9,B.dZ0,B.dYZ,B.dZe,B.dZy,B.dZL,B.dZM,B.dc1,B.dc2,B.dcp,B.dco,B.dcj,B.dch,B.dcf,B.dci,B.dck,B.dcg,B.dbZ,B.dc_,B.dc0,B.dbV,B.dcy,B.dcz,B.dcs,B.ce6,B.ce7,B.fCY,B.fDy,B.fDx])
w(B.b66,B.avf)
x(A.iJ,[B.fVB,B.dc9,B.dca,B.fAQ,B.fAR,B.fBk,B.dYH,B.dZQ,B.dZR,B.dZP,B.dZT,B.dZU,B.dZV,B.dZW,B.dZX,B.dZY,B.dYI,B.dYJ,B.fz8,B.dc4,B.dZb,B.dZc,B.dYL,B.dYM,B.dYR,B.dZC,B.dZD,B.dZ5,B.dZg,B.dYV,B.dZ7,B.dZs,B.dZh,B.dZi,B.dZj,B.dZk,B.dZl,B.dYU,B.dYN,B.dZa,B.dZ3,B.dYX,B.dZ1,B.dZ2,B.dZ4,B.dYW,B.dZd,B.dZv,B.dZw,B.dZx,B.dZJ,B.dZK,B.dZF,B.dZG,B.dZE,B.dZH,B.dZI,B.dcl,B.dcm,B.dcn,B.dcc,B.dce,B.dcd,B.dbY,B.dbX,B.dbW,B.dbS,B.dbT,B.dbU,B.dcC,B.dcD,B.dcE,B.dcF,B.dcG,B.dcH,B.dcJ,B.dcI,B.dcq,B.dcr,B.dct,B.dcu,B.dcv,B.dcw,B.dbR,B.dcB,B.dcA,B.fCZ])
x(A.lE,[B.adf,B.Og,B.aaq,B.Pk,B.Ym,B.Pj,B.FP])
x(A.af,[B.a_i,B.W3,B.W7,B.W4,B.a_h,B.W5,B.a_j,B.a_g,B.QA,B.a_l,B.a_f,B.a_m])
x(A.ah,[B.aAW,B.aEV,B.aEY,B.aEW,B.aAV,B.aEX,B.aAX,B.aAU,B.aB_,B.aAY,B.aAT,B.aAZ])
x(A.ax,[B.adI,B.aAS,B.bfx,B.adg,B.ade,B.bfy])
x(A.jw,[B.cdH,B.cdD,B.cdL,B.cdM,B.fWJ,B.dZ_,B.dYY,B.dZN,B.dcx,B.ce5,B.fDz])
x(A.j4,[B.bl_,B.bxt])})()
A.iT(b.typeUniverse,JSON.parse('{"b65":{"aap":[]},"b66":{"avf":[]},"a_i":{"af":[],"v":[]},"aAW":{"ah":["a_i"]},"adI":{"ax":[],"v":[]},"W3":{"af":[],"v":[]},"W7":{"af":[],"v":[]},"aEV":{"ah":["W3"]},"aEY":{"ah":["W7"]},"bl_":{"j4":[]},"W4":{"af":[],"v":[]},"aEW":{"ah":["W4"]},"a_h":{"af":[],"v":[]},"W5":{"af":[],"v":[]},"adg":{"ax":[],"v":[]},"a_j":{"af":[],"v":[]},"a_g":{"af":[],"v":[]},"QA":{"af":[],"v":[]},"a_l":{"af":[],"v":[]},"ade":{"ax":[],"v":[]},"a_f":{"af":[],"v":[]},"a_m":{"af":[],"v":[]},"aAV":{"ah":["a_h"]},"bxt":{"j4":[]},"aEX":{"ah":["W5"]},"aAS":{"ax":[],"v":[]},"bfx":{"ax":[],"v":[]},"aAX":{"ah":["a_j"]},"aAU":{"ah":["a_g"]},"aB_":{"ah":["QA"]},"aAY":{"ah":["a_l"]},"aAT":{"ah":["a_f"]},"aAZ":{"ah":["a_m"]},"bfy":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uN"),k:x("MH()"),o:x("bu<n,n>"),F:x("rt"),g:x("aB<jC?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a9<n,P>>"),t:x("O<a9<n,@>>"),r:x("O<jC>"),w:x("O<+file,name(lT,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j4>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<H>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jC>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iC"),e:x("ixx"),af:x("F0"),U:x("jC"),b:x("ct"),C:x("aE"),aK:x("wH"),ab:x("FO"),br:x("avf"),v:x("Yn"),N:x("n"),X:x("br<F>"),Q:x("m4"),D:x("dK"),aw:x("bG<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jC>>"),aW:x("c3<dK?>"),aY:x("c3<~>"),cx:x("adf"),b1:x("bk<ai<jC>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDz"),bG:x("aGH"),q:x("mB"),B:x("pR<FO>"),c6:x("pR<aaq>"),y:x("P"),i:x("F"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jC>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jC?"),R:x("aE?"),c:x("Yn?"),d:x("+answerQr,transfer(n,aB<ai<jC>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Og,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acX?"),bk:x("aDz?"),ag:x("aGH?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5i=new A.ay(C.aF,2,C.r,-1)
D.c7i=new A.a8(C.a7,C.aa,C.x,C.a4Q,null,null)
D.b6X=new A.p(null,null,null,C.mF,null,D.c7i,C.n)
D.b8q=new A.p(null,null,null,C.mF,null,E.I5,C.n)
D.afB=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ah0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ai2=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fFZ=new A.B("Your team portal",null,C.dk,null,null,null,null,null,null,null,null,null)
D.fUT=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.djb=x([D.fFZ,C.an,D.fUT],y.p)
D.bwD=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.djb,null)
D.fZm=new A.B("Create your organization",null,C.fP,null,null,null,null,null,null,null,null,null)
D.fKs=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dA2=x([D.fZm,C.an,D.fKs],y.p)
D.bwM=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dA2,null)
D.fVw=new A.B("Team Member sign-in",null,C.fP,null,null,null,null,null,null,null,null,null)
D.fOq=new A.B("Enter the access code and password from your organization.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dxN=x([D.fVw,C.an,D.fOq],y.p)
D.bwW=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dxN,null)
D.bDa=new A.R(16,10,16,28)
D.bDi=new A.R(16,14,16,4)
D.bEw=new A.R(20,0,20,16)
D.bF2=new A.R(20,8,20,16)
D.amG=new A.R(24,22,24,20)
D.a2L=new A.a0(63394,"MaterialIcons",!1)
D.apS=new A.a0(63515,"MaterialIcons",!1)
D.bSg=new A.a0(983813,"MaterialIcons",!1)
D.bPx=new A.a0(62867,"MaterialIcons",!1)
D.bTg=new A.ae(D.bPx,44,C.c,null,null,null)
D.bUk=new A.ae(C.k6,null,C.ac,null,null,null)
D.bVJ=new A.ae(C.jp,18,null,null,null,null)
D.bXt=new A.ae(D.a2L,26,C.c,null,null,null)
D.bY4=new A.ae(C.CY,null,null,null,null,null)
D.bYF=new A.ae(C.D5,null,null,null,null,null)
D.bZQ=new A.ae(W.a2W,null,null,null,null,null)
D.c_b=new A.ae(C.hM,16,null,null,null,null)
D.c2K=new A.ae(C.t4,16,null,null,null,null)
D.bTx=new A.ae(C.nI,null,null,null,null,null)
D.c3C=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZc=new A.ae(C.Hn,null,null,null,null,null)
D.c3H=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTS=new A.ae(H.HU,null,null,null,null,null)
D.c3S=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cSV=x([C.fo,C.b2,C.aF],y.O)
D.c9a=new A.a8(C.aA,C.aE,C.x,D.cSV,null,null)
D.cSm=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RR=x([C.fo,C.aF],y.O)
D.S7=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n6=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.ds8=x([C.oh,C.aF],y.O)
D.ekG={iceServers:0}
D.aLi={urls:0}
D.dDN=new A.bu(D.aLi,["stun:stun.l.google.com:19302"],y.o)
D.dDM=new A.bu(D.aLi,["stun:stun1.l.google.com:19302"],y.o)
D.d8H=x([D.dDN,D.dDM],A.at("O<a9<n,n>>"))
D.dD3=new A.bu(D.ekG,[D.d8H],A.at("bu<n,@>"))
D.J8=new B.Og(0,"lanDirect")
D.Tr=new B.Og(1,"cloudStash")
D.dP7=new B.Og(2,"inlineInstant")
D.Ts=new B.Og(3,"webrtcLink")
D.Af=new B.Og(4,"videoCloud")
D.fUS=new A.B("Receive file",null,C.ng,null,null,null,null,null,null,null,null,null)
D.cIa=x([E.arA,C.ae,D.fUS],y.p)
D.f8C=new A.c8(C.aL,C.bb,C.j,C.l,null,C.p,null,0,D.cIa,null)
D.es9=new A.D(C.cp,D.f8C,null)
D.fwy=new A.G(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Iy,null,null,null)
D.fGx=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fwy,null,C.K,null,null,null,null,null,null,null)
D.erj=new A.D(C.Cm,D.fGx,null)
D.bcO=new A.cg(C.A,null,null,D.erj,null)
D.eys=new A.cK(0,null,0,28,null,null,D.bcO,null)
D.eyM=new B.aaq(0,"RTCDataChannelConnecting")
D.aQM=new B.aaq(1,"RTCDataChannelOpen")
D.aQN=new B.aaq(3,"RTCDataChannelClosed")
D.eyN=new B.FP(0,"RTCIceConnectionStateNew")
D.eyO=new B.FP(1,"RTCIceConnectionStateChecking")
D.eyP=new B.FP(2,"RTCIceConnectionStateCompleted")
D.eyQ=new B.FP(3,"RTCIceConnectionStateConnected")
D.eyR=new B.FP(4,"RTCIceConnectionStateCount")
D.eyS=new B.FP(5,"RTCIceConnectionStateFailed")
D.eyT=new B.FP(6,"RTCIceConnectionStateDisconnected")
D.aQO=new B.FP(7,"RTCIceConnectionStateClosed")
D.aQP=new B.Ym(0,"RTCIceGatheringStateNew")
D.eyU=new B.Ym(1,"RTCIceGatheringStateGathering")
D.a9a=new B.Ym(2,"RTCIceGatheringStateComplete")
D.a9b=new B.Pj(0,"RTCPeerConnectionStateClosed")
D.aQQ=new B.Pj(1,"RTCPeerConnectionStateFailed")
D.aQR=new B.Pj(2,"RTCPeerConnectionStateDisconnected")
D.aQS=new B.Pj(3,"RTCPeerConnectionStateNew")
D.aQT=new B.Pj(4,"RTCPeerConnectionStateConnecting")
D.aQU=new B.Pj(5,"RTCPeerConnectionStateConnected")
D.eyV=new B.Pk(0,"RTCSignalingStateStable")
D.eyW=new B.Pk(1,"RTCSignalingStateHaveLocalOffer")
D.eyX=new B.Pk(2,"RTCSignalingStateHaveRemoteOffer")
D.eyY=new B.Pk(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eyZ=new B.Pk(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQV=new B.Pk(5,"RTCSignalingStateClosed")
D.fdH=new A.av(160,48)
D.be3=new A.fk(2,null,null,null,null,C.aF,null,null,null,null)
D.fff=new A.a5(16,16,D.be3,null)
D.fJN=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new A.b1(D.fJN,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRu=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fgL=new A.b1(D.fRu,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_p=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new A.b1(D.h_p,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fJn=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new A.b1(D.fJn,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVH=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aU0=new A.b1(D.fVH,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fX9=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhL=new A.b1(D.fX9,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0S=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.b1(D.h0S,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZP=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fi6=new A.b1(D.fZP,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h02=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fiT=new A.b1(D.h02,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHY=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fjp=new A.b1(D.fHY,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTr=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fjK=new A.b1(D.fTr,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fM6=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fkg=new A.b1(D.fM6,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0Y=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkk=new A.b1(D.h0Y,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fId=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new A.b1(D.fId,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGT=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fkF=new A.b1(D.fGT,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fDH=new A.B("NGMY DOC SHARE",null,C.aVo,null,null,null,null,null,null,null,null,null)
D.fF5=new A.B("Show this to sender",null,C.iC,null,null,null,null,null,null,null,null,null)
D.fG5=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fKT=new A.B("Organization settings",null,C.cC,null,null,null,null,null,null,null,null,null)
D.fLg=new A.B("Sign in",null,C.ch,null,null,null,null,null,null,null,null,null)
D.fMg=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fMO=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fPI=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fSx=new A.B("Send to their Doc Share",null,C.nX,null,null,null,null,null,null,null,null,null)
D.fST=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTd=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTX=new A.B("Create portal",null,C.ch,null,null,null,null,null,null,null,null,null)
D.fUk=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.fXF=new A.B("Share files & videos\nwith a scan.",null,C.aVr,null,null,null,null,null,null,null,null,null)
D.fXZ=new A.B("Add files",null,C.ch,null,null,null,null,null,null,null,null,null)
D.htR=new B.a_f(null)
D.acu=new B.adf(0,"docShare")
D.acv=new B.adf(1,"gate")
D.Ww=new B.adf(2,"gateNoIndividual")})();(function staticFields(){$.aPt=null
$.fo7=function(){var x=y.N
return A.T(x,x)}()
$.H4=A.T(y.N,y.D)
$.ahh=A.T(y.N,A.at("lT"))
$.RX=A.T(y.N,y.D)
$.foN=A.T(y.N,A.at("acX"))
$.cdZ=A.T(y.S,A.at("bxR"))
$.hpl=1
$.idU=null
$.idT=null
$.i4K=null
$.hdO=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iy1","hHi",()=>new B.crM())
x($,"ivW","hhO",()=>C.a.q(A.bA(A.bA(A.bA(A.HD(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["spNCSg5NgJLRTI7HZkbX2W3TO6c="]=a.current})($__dart_deferred_initializers__);