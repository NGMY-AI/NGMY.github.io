((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cws:function cws(){},
igA(d){var x=null,w=new B.b92(d,D.eSq,new A.q9(x,x,y.c6),new A.q9(x,x,y.B))
w.bFZ(d)
return w},
b92:function b92(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cwn:function cwn(d){this.a=d},
cwo:function cwo(d){this.a=d},
cwp:function cwp(d){this.a=d},
cwm:function cwm(d){this.a=d},
cwq:function cwq(d){this.a=d},
igB(d,e){var x=y.N
x=new B.b93(d,e,A.S(x,y.e),A.S(x,y.z))
x.bG_(d,e)
return x},
b93:function b93(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cwt:function cwt(d){this.a=d},
cwu:function cwu(d){this.a=d},
cwv:function cwv(d){this.a=d},
cww:function cww(d){this.a=d},
cwx:function cwx(d){this.a=d},
cwy:function cwy(d){this.a=d},
cwz:function cwz(d){this.a=d},
cwA:function cwA(d){this.a=d},
htg(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.be("IndexedDB not available"))
return C.xL.HU(x,"ngmy_doc_share_v1",new B.fJ1(),1)},
ins(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.wa(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aL(d)
return x}catch(w){return v}return v},
T8(d,e){return B.iE9(d,e)},
iE9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aS1
x=7
return A.b(o==null?$.aS1=B.htg():o,$async$T8)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mI(s,"blobs","readwrite")
C.iW.mw(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$T8)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share idb put] "+A.v(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$T8,w)},
T7(d){return B.iE8(d)},
iE8(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aS1
x=7
return A.b(o==null?$.aS1=B.htg():o,$async$T7)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iW.ys(J.mG(r,"blobs"),d),$async$T7)
case 8:q=f
x=9
return A.b(J.oY(r),$async$T7)
case 9:o=B.ins(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$T7,w)},
ajG(d){return B.iE7(d)},
iE7(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aS1
x=7
return A.b(p==null?$.aS1=B.htg():p,$async$ajG)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iW.Ho(J.mG(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$ajG)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ajG,w)},
fJ1:function fJ1(){},
iqb(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.buc(w,v))}return u},
hVY(d,e){var x,w={},v=A.b_T("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h9K(w,v,e)
C.xN.xo(v,"change",new B.h9M(w,v,!1))
C.xN.xo(v,"cancel",new B.h9L(w))
$.eY.mY()
v.click()
A.bM(C.anN,new B.h9J(w),y.H)},
h9K:function h9K(d,e,f){this.a=d
this.b=e
this.c=f},
h9M:function h9M(d,e,f){this.a=d
this.b=e
this.c=f},
h9L:function h9L(d){this.a=d},
h9J:function h9J(d){this.a=d},
Ee(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ee=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd8()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVS()?3:4
break
case 3:x=5
return A.b(B.hQi(e,d,s,!0,!1,f,g,h,!1,i),$async$Ee)
case 5:x=1
break
case 4:x=6
return A.b(B.SL(d,s,f,g,h,i),$async$Ee)
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
return A.b(B.JU(s,d),$async$Ee)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fEi(s,d),$async$Ee)
case 14:x=12
return A.b(r.hQi(q,p,o,n,m,l,k,j,a1,i),$async$Ee)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ca(A.e4(new B.h9Z(s,i,d,f,g,h),!1,null,y.H)),$async$Ee)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ca(A.e4(new B.ha_(s,i,d,f,g,h),!1,null,y.H)),$async$Ee)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ee,w)},
SL(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SL=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3K(e),$async$SL)
case 3:u=k
x=4
return A.b(B.asA(d,e,!1),$async$SL)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JU(e,d),$async$SL)
case 7:if(k){v=D.af7
x=1
break}x=8
return A.b(B.X4(e),$async$SL)
case 8:v=t?D.Yr:D.af8
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b3I(d,e)){v=D.af7
x=1
break}x=11
return A.b(B.X4(e),$async$SL)
case 11:v=t?D.Yr:D.af8
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hnT(d,e)){v=D.af7
x=1
break}x=14
return A.b(B.X4(e),$async$SL)
case 14:v=D.Yr
x=1
break
case 13:v=t?D.Yr:D.af8
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
fEi(d,e){var x=0,w=A.j(y.y),v
var $async$fEi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b3I(e,d)){v=!1
x=1
break}x=3
return A.b(B.b3K(d),$async$fEi)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEi,w)},
hQi(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ca(A.e4(new B.fLI(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hKy(d,e,f,g,h,i,j){return new B.a0u(e,j,d,g,h,i,f,null)},
fNI(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fNI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bU(C.L,null,new B.fNL(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fNI)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fNI,w)},
fOc(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fOc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bU(C.L,null,new B.fOe(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fOc)
case 3:q=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
r.V$=u
r.W$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOc,w)},
htt(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
h16(d,e){var x=0,w=A.j(y.H),v
var $async$h16=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.X4(e),$async$h16)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).dY()
case 1:return A.h(v,w)}})
return A.i($async$h16,w)},
h9Z:function h9Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ha_:function ha_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeQ:function aeQ(d,e){this.a=d
this.b=e},
fLI:function fLI(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0u:function a0u(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aD5:function aD5(){this.c=this.a=this.d=null},
dig:function dig(d,e){this.a=d
this.b=e},
did:function did(d){this.a=d},
dif:function dif(d){this.a=d},
die:function die(d){this.a=d},
dii:function dii(){},
dih:function dih(d){this.a=d},
afj:function afj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFM:function aFM(d,e){this.a=d
this.b=e},
aJ2:function aJ2(d,e,f){this.a=d
this.b=e
this.c=f},
fNL:function fNL(d,e,f){this.a=d
this.b=e
this.c=f},
fNJ:function fNJ(d){this.a=d},
fNK:function fNK(d,e,f){this.a=d
this.b=e
this.c=f},
fOe:function fOe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fOd:function fOd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chO(d,e,f,g,h){return B.ibg(d,e,f,g,h)},
ibg(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$chO=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a0(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hd(r.dS(d,new B.chP(s,e,h,g,f,q),y.g),y.l),$async$chO)
case 3:r=p.aM(j)
case 4:if(!r.A()){x=5
break}t=r.gO(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chO,w)},
b3F(d,e,f,g,h){return B.ibh(d,e,f,g,h)},
ibh(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b3F=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ay8("GET",d)
o=A.bKe()
if(o==null)o=new A.Iv(A.a([],y.W))
x=7
return A.b(o.fi(0,s).d9(0,C.HQ),$async$b3F)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DV(),$async$b3F)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CK(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share pull url web] "+f+": "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b3F,w)},
b3E(d){return B.ibe(d)},
ibe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b3E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wm(d,null).d9(0,C.p_),$async$b3E)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.T.aN(0,A.ma(A.m7(p.e)).cJ(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share lan manifest web] "+A.v(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b3E,w)},
chN(d){return B.ibf(d)},
ibf(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$chN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wm(d,null).d9(0,C.rk),$async$chN)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ma(A.m7(q.e)).cJ(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ad(o)
$.an.$1("[doc share lan text web] "+A.v(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$chN,w)},
chP:function chP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jW:function jW(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JS(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
ibm(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JS(C.a.aV(t,u.length))}return null},
ibn(d){var x=B.JS(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
ibi(){var x,w=$.oh(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hp(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a9k(d){return B.ibj(d)},
ibj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a9k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bN),$async$a9k)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share my code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9k,w)},
a9l(d,e){return B.ibk(d,e)},
ibk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a9l=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i2(d,e,!1,!1,C.d_,null),$async$a9l)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share my code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9l,w)},
CJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CJ)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JS(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a9m(r),$async$CJ)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a9k("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CJ)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JS(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CJ)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.ibi()
x=14
return A.b(B.a9m(m),$async$CJ)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a9l("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CJ)
case 15:k=f
x=16
return A.b(B.a9l("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CJ)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CJ)
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
return A.i($async$CJ,w)},
a9m(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a9m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JS(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a9k("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a9m)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9m,w)},
a9n(d,e,f,g){return B.ibo(d,e,f,g)},
ibo(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a9n=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a0(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JS(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a9m(r),$async$a9n)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.chV())>1048576||g.aR(d,new B.chW())){v=B.FR(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9y("myCode",d,a0),$async$a9n)
case 4:u=a3
try{t=C.T.aN(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ci(s)||J.aa(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FR(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3N(u,g.gI(d),a0),$async$a9n)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dS(d,new B.chX(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b3G(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a9n)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9n,w)},
FR(d,e,f,g,h){return B.ibl(d,e,f,g,h)},
ibl(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FR=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FR)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cH(a6,0,new B.chR())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oh().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cX.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.A()){x=5
break}q=h.gO(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aD(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JW(a9,q)
a0=new A.LM(a1)
u=6
case 9:x=11
return A.b(a0.A(),$async$FR)
case 11:if(!b1){x=10
break}n=a0.gO(0)
if(J.aa(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.f6().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nW(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.ad1(a1.a,a4,"media",a1.d,a2).yp(m,n,new A.F6(!0,q.c)),$async$FR)
case 12:J.bV(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FR)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUQ(r),$async$FR)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dS(a6,new B.chS(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b3G(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FR)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUQ(r),$async$FR)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FR,w)},
b3G(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b3G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a9k(t),$async$b3G)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.chQ(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a9l(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3G,w)},
P0(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$P0=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a9k("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$P0)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aM(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.A()){x=5
break}l=q.gO(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b3H(k,a0),$async$P0)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b3M(h),$async$P0)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Xb(g,a0),$async$P0)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.aa(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("L.E")
e=A.B(new A.X(r,new B.chT(),q),n)
d=A.B(new A.X(r,new B.chU(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cH(d,0,A.dy(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a9l("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$P0)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$P0,w)},
b3H(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b3H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aM(h),r=y.f,q=0
case 3:if(!u.A()){x=4
break}p=u.gO(u)
if(!r.b(p)){x=3
break}o=J.a0(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.h.L(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iIy(k,j)
C.d.u(s,i)
x=5
return A.b(B.Ec(l,m,"Received via My Code",t,e,i),$async$b3H)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUQ(s),$async$b3H)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3H,w)},
chV:function chV(){},
chW:function chW(){},
chX:function chX(){},
chR:function chR(){},
chS:function chS(){},
chQ:function chQ(){},
chT:function chT(){},
chU:function chU(){},
h9W(d,e){var x=0,w=A.j(y.H)
var $async$h9W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ca(A.e4(new B.h9X(e),!1,null,y.H)),$async$h9W)
case 2:return A.h(null,w)}})
return A.i($async$h9W,w)},
bJI(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bJI=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ca(A.e4(new B.h9Y(g,e,f),!1,null,y.y)),$async$bJI)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJI,w)},
h9X:function h9X(d){this.a=d},
h9Y:function h9Y(d,e,f){this.a=d
this.b=e
this.c=f},
X1:function X1(d,e){this.c=d
this.a=e},
aHa:function aHa(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e56:function e56(d,e){this.a=d
this.b=e},
X5:function X5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHd:function aHd(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e6f:function e6f(d){this.a=d},
e6g:function e6g(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6e:function e6e(d,e){this.a=d
this.b=e},
e6i:function e6i(d){this.a=d},
e6j:function e6j(d){this.a=d},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6m:function e6m(d,e){this.a=d
this.b=e},
e6n:function e6n(d){this.a=d},
e6q:function e6q(){},
e6o:function e6o(d){this.a=d},
e6p:function e6p(d,e){this.a=d
this.b=e},
bod:function bod(){},
X2:function X2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHb:function aHb(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e57:function e57(d){this.a=d},
e58:function e58(d){this.a=d},
hnU(d){var x=d.ig
if(x>=0)return C.n.L(x)
return 10},
ibq(d){var x=d.lc
if(x>=0)return x
return 4.99},
ibp(d){var x=d.lX,w=y.N
w=x.j5(x,new B.chZ(),w,w)
return w},
hFv(d){var x=d.kO,w=y.N
w=x.j5(x,new B.ci_(),w,w)
return w},
b3K(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b3K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b3K)
case 7:s=f
r=A.v(p)
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
return A.i($async$b3K,w)},
a9p(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9p)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a9p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9p,w)},
X4(d){var x=0,w=A.j(y.H),v,u
var $async$X4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$X4)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$X4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$X4,w)},
hnT(d,e){var x,w,v
if(B.ibq(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.ibp(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b3I(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hFv(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hFw(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hFv(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bM(A.dw(f,0,0,0,0,0).a).aa().ag())
d.kO=w},
asB(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$asB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$asB)
case 7:s=f
r=A.v(p)
r=A.ew(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$asB,w)},
asC(d){var x=0,w=A.j(y.H),v,u,t
var $async$asC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.asB(d),$async$asC)
case 3:u=f
x=5
return A.b(A.aB(),$async$asC)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$asC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$asC,w)},
asA(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$asA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hnU(d)
if(u<=0){v=!1
x=1
break}if(B.hnT(d,e)){v=!1
x=1
break}x=3
return A.b(B.asB(e),$async$asA)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asA,w)},
b3J(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b3J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JU(e,d),$async$b3J)
case 3:if(g){v=-1
x=1
break}u=B.hnU(d)
if(u<=0){v=-1
x=1
break}if(B.hnT(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.asB(e),$async$b3J)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3J,w)},
ci1(d,e,f){var x=0,w=A.j(y.y),v
var $async$ci1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JU(e,d),$async$ci1)
case 3:if(h){v=!1
x=1
break}v=B.asA(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ci1,w)},
ci0(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ci0=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
x=3
return A.b(B.ci1(d,u,i.gVS()),$async$ci0)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ci0,w)},
a9o(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a9o=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
if(i.gVS()){v=!0
x=1
break}if(B.b3I(d,u)){v=!0
x=1
break}x=5
return A.b(A.m0(u,C.VL),$async$a9o)
case 5:x=k?3:4
break
case 3:B.hFw(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a9o)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lz(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.VL,"Doc Share for Organizations"),$async$a9o)
case 7:if(!k){v=!1
x=1
break}B.hFw(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a9o)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9o,w)},
chZ:function chZ(){},
ci_:function ci_(){},
haW(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$haW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$haW)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fAk.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i4([r],e.c))
s.toString
$.fAk.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haW,w)},
iKR(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fAk.bs($.fAk,new B.haY(d))},
haY:function haY(d){this.a=d},
fC6(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fC6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aD(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i4([d],f))
s.toString
u=A.np(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jC,null,y.H),$async$fC6)
case 3:C.Cb.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mY()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fC6,w)},
aiB(d,e,f){var x=0,w=A.j(y.H),v
var $async$aiB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fB4.n(0,d,new B.aex(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$aiB)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.T.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$aiB)
case 2:return A.h(null,w)}})
return A.i($async$aiB,w)},
aiv(d){return B.isd(d)},
isd(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aiv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fB4.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aiv)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.T.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b8(s,new B.fFZ(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.h.L(o)
q=m==null?0:m
p=new B.aex(r)
$.fB4.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aiv,w)},
SB(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$SB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.HC.n(0,d,u)
x=3
return A.b(B.T8(d,u),$async$SB)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SB,w)},
aSm(d){return B.isb(d)},
isb(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.HC.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.T7(d),$async$aSm)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.HC.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aSm)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aL(r)
x=!J.ci(q)?9:10
break
case 9:B.SB(d,q)
x=11
return A.b(J.fN(s,d),$async$aSm)
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
return A.i($async$aSm,w)},
inW(d){if(d==null)return A.fc(null,y.K)
if(y.J.b(d))return A.fc(new Uint8Array(A.cd(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fc(new Uint8Array(A.cd(A.wa(d,0,null))),y.K)
if(y.I.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
return A.fc(null,y.K)},
a46(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a46=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.cc(u,y.aW)
s=y.aK
A.fL(r,"loadend",new B.fLW(r,t),!1,s)
A.fL(r,"error",new B.fLX(t),!1,s)
r.readAsArrayBuffer(d)
v=u.im(0,C.Pp,new B.fLY())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a46,w)},
aSH(d,e,f){return B.iuE(d,e,f)},
iuE(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSH=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.n.S(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a46(i),$async$aSH)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.aa(j)
x=11
return A.b(B.T8(o,p),$async$aSH)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.bV(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.aiB(k,j,s),$async$aSH)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ad(h)
$.an.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSH,w)},
aSG(d,e,f){return B.iuD(d,e,f)},
iuD(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSG=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSH(d,e,f),$async$aSG)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a46(f),$async$aSG)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.HC.n(0,s,r)
$.SV.n(0,s,r)
x=11
return A.b(B.SB(s,r),$async$aSG)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSG,w)},
CK(d,e,f,g,h,i){return B.ibz(d,e,f,g,h,i)},
ibz(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CK=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cX.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jW(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3Q(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.SB(s,d),$async$CK)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CK)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aL(d)),$async$CK)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.an.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.BE(e),$async$CK)
case 12:j=a2
J.bV(j,m)
x=13
return A.b(B.HM(e,j),$async$CK)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CK,w)},
X6(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X6=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.BE(d),$async$X6)
case 3:t=a1
s=e.length,r=J.cK(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cX.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hFy(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jW(m,n,k,l,j,"From folder",null,B.b3Q(),null)
$.aj_.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a46(o),$async$X6)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.HC.n(0,h,g)
$.SV.n(0,h,g)
B.SB(h,g)
x=9
break
case 10:x=11
return A.b(B.aSG(d,m,o),$async$X6)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HM(d,t),$async$X6)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X6,w)},
hnY(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hnY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hFy(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JV(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CK(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hnY,w)},
JV(d,e,f,g,h,i){return B.iby(d,e,f,g,h,i)},
iby(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JV=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cX.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LM(A.dy(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.A(),$async$JV)
case 8:if(!a6){x=7
break}m=j.gO(0)
if(J.ci(m)){x=6
break}J.fB(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TJ(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kB(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T8(k,l),$async$JV)
case 11:J.bV(q,k);++p
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
return A.b(j.a2(0),$async$JV)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T8(k,new Uint8Array(A.cd(n))),$async$JV)
case 15:J.bV(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aiB(r,q,g),$async$JV)
case 16:f=new B.jW(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3Q(),null)
x=17
return A.b(B.BE(d),$async$JV)
case 17:e=a6
J.bV(e,f)
x=18
return A.b(B.HM(d,e),$async$JV)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JV,w)},
X8(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X8=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aj_.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a46(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aiv(s),$async$X8)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T7(u[o]),$async$X8)
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
v=A.wa(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SV.h(0,s)
if(i==null)i=$.HC.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.th(d,e),$async$X8)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SV.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wa(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X8,w)},
hFy(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
th(d,e){return B.ibA(d,e)},
ibA(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$th=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SV.h(0,f)
if(e==null)e=$.HC.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aj_.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a46(s),$async$th)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.HC.n(0,f,r)
$.SV.n(0,f,r)
B.SB(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ad(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aiv(f),$async$th)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aet(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T7(g[l]),$async$th)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a9i()
if(!C.aI.gar(r)){$.HC.n(0,f,r)
$.SV.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aSm(f),$async$th)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SV.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X8(a0,a1,0,g),$async$th)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.HC.n(0,f,h)
$.SV.n(0,f,h)
B.SB(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$th,w)},
ibD(d){var x,w,v=$.aj_.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
ibE(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i4([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
ibB(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asI(d,e,f,g,h){return B.ibC(d,e,f,g,h)},
ibC(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asI=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aj_.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a46(s),$async$asI)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.th(g,e),$async$asI)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.f6().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iO(d).yp(h,r,new A.F6(!0,e.c)),$async$asI)
case 12:f.$2(J.aa(r),J.aa(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share upload web] "+e.b+": "+A.v(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asI,w)},
hFA(d,e,f,g,h){var x,w,v,u,t=$.hFz
$.hFz=t+1
x=Date.now()
w=""+1000*x+"_"+C.cX.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cic.n(0,t,new B.bBk(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aet(u)))
return t},
hnZ(d){var x=0,w=A.j(y.H)
var $async$hnZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hnZ,w)},
JW(d,e){var $async$JW=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aj_.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.n.S(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qS(B.X8(d,e,p,o<q?o:q),$async$JW,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qS(A.H8(n),$async$JW,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qS(B.aiv("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JW,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qS(B.T7(h[l]),$async$JW,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qS(A.H8(k),$async$JW,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qS(B.th(d,e),$async$JW,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qS(A.H8(A.wa(j,p,o<i?o:i)),$async$JW,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qS(null,0,w)
case 2:return A.qS(t.at(-1),1,w)}})
var x=0,w=A.hOV($async$JW,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hR4(w)},
b3S(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cic.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7A(),$async$b3S)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3S,w)},
X7(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cic.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7A(),$async$X7)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aiB(r.c,u,r.z),$async$X7)
case 4:t=new B.jW(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3Q(),null)
u=r.a
x=5
return A.b(B.BE(u),$async$X7)
case 5:s=f
J.bV(s,t)
x=6
return A.b(B.HM(u,s),$async$X7)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X7,w)},
a9v(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cic.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajG(u[s]),$async$a9v)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9v,w)},
cie(d,e,f){var x=0,w=A.j(y.H)
var $async$cie=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGv(d,e,f),$async$cie)
case 2:return A.h(null,w)}})
return A.i($async$cie,w)},
cif(d,e,f){var x=0,w=A.j(y.H)
var $async$cif=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGw(d,e,f),$async$cif)
case 2:return A.h(null,w)}})
return A.i($async$cif,w)},
FS(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.BE(d),$async$FS)
case 2:p=g
J.mH(p,new B.cid(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.HC.X(0,v)
$.aj_.X(0,e)
x=3
return A.b(B.aiv(v),$async$FS)
case 3:u=g
$.fB4.X(0,v)
x=4
return A.b(A.aB(),$async$FS)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FS)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FS)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajG(s[q]),$async$FS)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajG(v),$async$FS)
case 13:x=14
return A.b(B.HM(d,p),$async$FS)
case 14:return A.h(null,w)}})
return A.i($async$FS,w)},
b3R(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.th(d,e),$async$b3R)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fC6(t,A.aD(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3R,w)},
BE(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$BE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$BE)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.T.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fLZ(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$BE,w)},
HM(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HM)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fQq(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.T.au(t,null)),$async$HM)
case 3:return A.h(null,w)}})
return A.i($async$HM,w)},
bGv(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BE(d),$async$bGv)
case 3:u=h
t=J.cK(u)
s=t.bm(u,new B.fK5(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aIO(f))
x=4
return A.b(B.HM(d,u),$async$bGv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGv,w)},
bGw(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BE(d),$async$bGw)
case 3:u=h
t=J.cK(u)
s=t.bm(u,new B.fK6(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cUp(f))
x=4
return A.b(B.HM(d,u),$async$bGw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGw,w)},
aex:function aex(d){this.a=d},
fFZ:function fFZ(){},
fLW:function fLW(d,e){this.a=d
this.b=e},
fLX:function fLX(d){this.a=d},
fLY:function fLY(){},
cid:function cid(d){this.a=d},
bBk:function bBk(d,e,f,g,h,i,j,k,l){var _=this
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
fLZ:function fLZ(){},
fQq:function fQq(){},
fK5:function fK5(d){this.a=d},
fK6:function fK6(d){this.a=d},
a9w(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cii())?3:4
break
case 3:x=5
return A.b(B.b3T(d,e),$async$a9w)
case 5:u=g
if(u!=null){t=u.c
B.P2(d,u.b,e,t)}v=u
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
return A.b(B.b3O(s),$async$a9w)
case 10:case 9:if(g){v=new A.RW(1,D.Vo,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.X9(d,e),$async$a9w)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Xe(!0,!0,d,e),$async$a9w)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.P2(d,D.Bd,e,t)
v=new A.RW(p,D.Bd,t)
x=1
break}v=B.cih(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9w,w)},
X9(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$X9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9y(null,d,e),$async$X9)
case 3:p=g
try{u=C.T.aN(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3N(p,d.length,e),$async$X9)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cif(e,C.d.gH(d).a,r.b),$async$X9)
case 7:case 6:q=r.a
x=8
return A.b(B.P2(d,D.Vo,e,q),$async$X9)
case 8:v=new A.RW(d.length,D.Vo,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X9,w)},
Xa(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Xa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n4(D.nw)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9x(d,e),$async$Xa)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cia(s,d,e,t),$async$Xa)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3O(t),$async$Xa)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.th(e,d),$async$Xa)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.X9(A.a([d],y.r),e),$async$Xa)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Xa,w)},
Xc(){var x=0,w=A.j(y.H)
var $async$Xc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hnS(),$async$Xc)
case 2:x=3
return A.b(B.aVb(),$async$Xc)
case 3:return A.h(null,w)}})
return A.i($async$Xc,w)},
a9x(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3Q()
x=3
return A.b(B.cie(e,d.a,u),$async$a9x)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9x,w)},
P2(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$P2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Vo&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9x(p,f),$async$P2)
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
return A.b(B.ci9(o,p,u,f),$async$P2)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cia(o,p,f,t),$async$P2)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ci8(o,u,p,f),$async$P2)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$P2,w)},
b3T(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cig(e,d),$async$b3T)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Xe(!1,!0,d,e),$async$b3T)
case 4:u=g
if(u!=null){t=u.b
v=new A.RW(u.a,D.Bd,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3T,w)},
cig(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cig=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X8(d,s,0,1),$async$cig)
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
return A.i($async$cig,w)},
cih(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cih=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9y(null,d,e),$async$cih)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hFx(u)
if(t.length>800){v=null
x=1
break}v=new A.RW(d.length,D.e7a,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cih,w)},
asJ(d,e,f){return B.ibH(d,e,f)},
ibH(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asJ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.dd(g,"\ufeff"))g=J.no(g,1)
x=B.hnX(g)?3:4
break
case 3:x=5
return A.b(B.cib(g),$async$asJ)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.dd(g,"NGMYDOCSYNC4|")){s=C.a.i(J.no(g,13))
try{k=B.FT(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.dd(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.no(g,13))
u=9
x=12
return A.b(B.b3M(q),$async$asJ)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Xb(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ad(f)
$.an.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.dd(g,"NGMYDOCSYNC0|"))try{n=B.hnW(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Xb(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.dd(g,"N2|")){v=B.JX(C.a.i(J.no(g,3)),d,a0)
x=1
break}if(J.dd(g,"NGMYDOCSYNC2|")){v=B.JX(C.a.i(J.no(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c4(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JX(h,d,a0)
x=1
break}if(J.eI(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Xb(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asJ,w)},
JX(d,e,f){return B.ibF(d,e,f)},
ibF(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JX=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aD(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c4(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aD(g,f,"")}else j=e
s=j
r=A.cI(A.v(s)+"/manifest.json",0,null)
q=A.cI(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b3E(r),$async$JX)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b3E(A.cI(s,0,null)),$async$JX)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.chO(o,r,a1,n,a2),$async$JX)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.chN(q),$async$JX)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Xb(l,a2),$async$JX)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ci(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ad(d)
$.an.$1("[doc share lan import] "+A.v(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JX,w)},
a9y(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aM(e),t=y.N,s=y.z
case 3:if(!u.A()){x=4
break}r=u.gO(u)
x=5
return A.b(B.th(f,r),$async$a9y)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcp().aL(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.T.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9y,w)},
Xb(d,e){return B.ibG(d,e)},
ibG(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xb=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.T.aN(0,a2,null)
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
e=J.aM(r)
case 7:if(!e.A()){x=8
break}m=e.gO(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cM.aL(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.CK(i,a3,d,k,l,o),$async$Xb)
case 9:h=a5
if(h!=null)J.bV(n,h)
x=7
break
case 8:f=J.aa(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.ad(a1)
$.an.$1("[doc share bundle] "+A.v(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xb,w)},
P1:function P1(d,e){this.a=d
this.b=e},
cii:function cii(){},
a3G(d){var x=A.Q(d).ax.a===C.I,w=x?D.akX:D.aio,v=x?D.amN:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajU:C.bo
return new A.aKl([w,s,v,u,t,x?C.fz:C.bU])},
hX1(d,e){var x=e?C.v.j(0.72):C.b8
return A.cf(null,x,!0,null,new B.hfj(e),d,null,!0,!0,y.N)},
chY(d,e,f,g,h,i,j,k,l){return new B.X3(e,l,d,f,k,j,g,h,i,null)},
a0w(d,e,f,g,h,i,j){return new B.biH(g,h,j,e,i,d,f,null)},
hfj:function hfj(d){this.a=d},
a0t:function a0t(d,e){this.c=d
this.a=e},
aD4:function aD4(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dic:function dic(d){this.a=d},
dia:function dia(d){this.a=d},
dib:function dib(d){this.a=d},
bAW:function bAW(){},
X3:function X3(d,e,f,g,h,i,j,k,l,m){var _=this
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
aHc:function aHc(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e6d:function e6d(d){this.a=d},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5C:function e5C(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e,f){this.a=d
this.b=e
this.c=f},
e59:function e59(d){this.a=d},
e5b:function e5b(d,e){this.a=d
this.b=e},
e5g:function e5g(d,e,f){this.a=d
this.b=e
this.c=f},
e5f:function e5f(d){this.a=d},
e61:function e61(d,e){this.a=d
this.b=e},
e62:function e62(d){this.a=d},
e5y:function e5y(d,e,f){this.a=d
this.b=e
this.c=f},
e5v:function e5v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5e:function e5e(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5F:function e5F(){},
e5k:function e5k(d){this.a=d},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e6_:function e6_(d,e){this.a=d
this.b=e},
e60:function e60(d,e){this.a=d
this.b=e},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5O:function e5O(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5P:function e5P(){},
e5Q:function e5Q(){},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5T:function e5T(){},
e5U:function e5U(d){this.a=d},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5H:function e5H(d){this.a=d},
e5I:function e5I(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5K:function e5K(d){this.a=d},
e5L:function e5L(d){this.a=d},
e5h:function e5h(){},
e5i:function e5i(d){this.a=d},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5c:function e5c(d,e,f){this.a=d
this.b=e
this.c=f},
e5z:function e5z(d){this.a=d},
e5A:function e5A(d,e,f){this.a=d
this.b=e
this.c=f},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5p:function e5p(d){this.a=d},
e5m:function e5m(d,e,f){this.a=d
this.b=e
this.c=f},
e5q:function e5q(d){this.a=d},
e5r:function e5r(d){this.a=d},
e5s:function e5s(){},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5n:function e5n(d){this.a=d},
e5l:function e5l(d,e,f){this.a=d
this.b=e
this.c=f},
e5o:function e5o(){},
e5E:function e5E(d){this.a=d},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e5V:function e5V(d){this.a=d},
e5W:function e5W(d,e){this.a=d
this.b=e},
e5X:function e5X(d){this.a=d},
e6a:function e6a(d){this.a=d},
e68:function e68(d){this.a=d},
e69:function e69(d){this.a=d},
e6b:function e6b(){},
e6c:function e6c(d,e){this.a=d
this.b=e},
e64:function e64(d,e){this.a=d
this.b=e},
e65:function e65(d,e,f){this.a=d
this.b=e
this.c=f},
e63:function e63(d,e,f){this.a=d
this.b=e
this.c=f},
e66:function e66(d,e){this.a=d
this.b=e},
e67:function e67(d,e){this.a=d
this.b=e},
aD1:function aD1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
biG:function biG(d,e,f){this.c=d
this.d=e
this.a=f},
di8:function di8(){},
di9:function di9(){},
aeR:function aeR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
diw:function diw(){},
div:function div(d){this.a=d},
a0v:function a0v(d,e,f){this.c=d
this.d=e
this.a=f},
aD6:function aD6(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dis:function dis(d){this.a=d},
dit:function dit(d,e,f){this.a=d
this.b=e
this.c=f},
diu:function diu(d,e){this.a=d
this.b=e},
diq:function diq(d,e){this.a=d
this.b=e},
dio:function dio(d){this.a=d},
dim:function dim(d){this.a=d},
dij:function dij(d){this.a=d},
dip:function dip(d){this.a=d},
dil:function dil(d){this.a=d},
dir:function dir(d){this.a=d},
din:function din(d){this.a=d},
dik:function dik(d){this.a=d},
a0s:function a0s(d,e,f){this.c=d
this.d=e
this.a=f},
aD3:function aD3(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
di5:function di5(d){this.a=d},
di4:function di4(d,e){this.a=d
this.b=e},
di6:function di6(d){this.a=d},
di3:function di3(d,e){this.a=d
this.b=e},
di7:function di7(d){this.a=d},
di2:function di2(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d){this.a=d},
di_:function di_(d){this.a=d},
di0:function di0(d,e){this.a=d
this.b=e},
di1:function di1(d){this.a=d},
Ru:function Ru(d,e,f){this.c=d
this.d=e
this.a=f},
aD9:function aD9(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
diJ:function diJ(d){this.a=d},
diK:function diK(d){this.a=d},
diL:function diL(d){this.a=d},
diM:function diM(d){this.a=d},
diN:function diN(d,e){this.a=d
this.b=e},
diO:function diO(d){this.a=d},
diQ:function diQ(d){this.a=d},
diP:function diP(d){this.a=d},
a0x:function a0x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD7:function aD7(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
diF:function diF(d,e){this.a=d
this.b=e},
diG:function diG(d,e){this.a=d
this.b=e},
dix:function dix(d,e,f){this.a=d
this.b=e
this.c=f},
diy:function diy(d){this.a=d},
diz:function diz(){},
diE:function diE(){},
diA:function diA(d,e){this.a=d
this.b=e},
diB:function diB(d,e){this.a=d
this.b=e},
diC:function diC(d,e){this.a=d
this.b=e},
diD:function diD(d,e){this.a=d
this.b=e},
aeP:function aeP(d,e){this.c=d
this.a=e},
dhY:function dhY(d){this.a=d},
a0r:function a0r(d){this.a=d},
aD2:function aD2(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0y:function a0y(d,e){this.c=d
this.a=e},
aD8:function aD8(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
diI:function diI(d){this.a=d},
diH:function diH(d){this.a=d},
biH:function biH(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ibI(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hp(v)},
P3(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$P3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$P3)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$P3)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P3,w)},
a9z(d){return B.ibJ(d)},
ibJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9z)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.d_,null),$async$a9z)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9z,w)},
Xd(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Xd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P3(),$async$Xd)
case 3:s=g
r=J.a0(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9z(s),$async$Xd)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xd,w)},
Xe(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Xe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$Xe)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.cik(),t),t.k("L.E"))}if(u.length===0){v=null
x=1
break}s=B.ibI()
t=A.T(u).k("O<1,a9<o,aH>>")
r=A.B(new A.O(u,new B.cil(s),t),t.k("aj.E"))
x=6
return A.b(B.P3(),$async$Xe)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9z(q),$async$Xe)
case 7:x=8
return A.b(B.a9A(r,u,g,s),$async$Xe)
case 8:v=new A.buJ(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Xe,w)},
asK(d){var x=0,w=A.j(y.y),v,u,t
var $async$asK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.P3(),$async$asK)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asK,w)},
cim(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cim=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.P3(),$async$cim)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a0(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cim,w)},
a9A(d,e,f,g){return B.ibK(d,e,f,g)},
ibK(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9A=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.asI("media",r,new B.cij(s,e,g),f,q),$async$a9A)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Xd(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9A)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Xd(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9A)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.Xd(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9A)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9A,w)},
FT(d,e,f){return B.ibL(d,e,f)},
ibL(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FT=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FT)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asK(b3),$async$FT)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j5,null,g),$async$FT)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asK(b3),$async$FT)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.P3(),$async$FT)
case 10:e=c0
g=J.a0(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a0(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.L(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ci(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a0(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.A()){x=12
break}a7=a2.gO(a2)
if(!a0.b(a7)){x=11
break}a8=J.a0(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.aa(m)===0){x=11
break}u=14
a8=$.f6().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nW(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.ad1(a8.a,b0,"media",a8.d,a9).Ef(m)
k=A.cI(l,0,null)
x=17
return A.b(B.b3F(k,n,o,s,b7),$async$FT)
case 17:j=c0
if(j!=null){J.bV(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ad(b4)
$.an.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.aa(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.X(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.A()){x=22
break}a7=g.gO(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.f6().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nW(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.ad1(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FT)
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
a0=A.dE(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9z(e),$async$FT)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FT,w)},
cik:function cik(){},
cil:function cil(d){this.a=d},
cij:function cij(d,e,f){this.a=d
this.b=e
this.c=f},
aVb(){var x=0,w=A.j(y.H),v,u
var $async$aVb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.inc=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aVb)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aVb)
case 3:u=$.htG
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aVb)
case 4:$.htG=$.iwF=$.iwG=null
return A.h(null,w)}})
return A.i($async$aVb,w)},
fPZ(d){var x=0,w=A.j(y.H),v,u
var $async$fPZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abE){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fQ_(new A.cc(u,y.aY))
x=3
return A.b(u.im(0,C.he,new B.fQ0()),$async$fPZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fPZ,w)},
iwB(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.ibs(x):x},
htL(d){var x=0,w=A.j(y.T),v,u,t
var $async$htL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asM(u)
x=1
break}v=B.hnW(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$htL,w)},
htK(d){var x=0,w=A.j(y.T),v,u,t
var $async$htK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.asN(u)
x=1
break}v=B.hnW(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$htK,w)},
haF(d){var x=0,w=A.j(y.T),v
var $async$haF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asN(d),$async$haF)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haF,w)},
bHt(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bHt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.htK(d),$async$bHt)
case 3:q=f
if(q==null){x=1
break}t=C.T.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a0(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHt,w)},
fCZ(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fCZ=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X7(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CK(d.a9i(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCZ,w)},
HN(d,e,f){return B.iz9(d,e,f)},
iz9(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HN=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.htL(a1),$async$HN)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.T.aN(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a0(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hZ3().aJ6(D.dQ5,null),$async$HN)
case 4:l=d.htG=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aet(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fQD(f,k,new B.fQE(f,a2,k,j,a0,p),a2,j,a0,p,new A.cc(t,y.ch))
x=5
return A.b(l.aaG(0,new B.Zs(r,"offer")),$async$HN)
case 5:d=l
x=7
return A.b(l.aoC(0),$async$HN)
case 7:x=6
return A.b(d.aay(0,a4),$async$HN)
case 6:x=8
return A.b(B.fPZ(l),$async$HN)
case 8:x=9
return A.b(l.at2(),$async$HN)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iwB(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.T.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asO(m,h),$async$HN)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hFx(h)
case 11:v=new A.btX(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HN,w)},
fQ_:function fQ_(d){this.a=d},
fQ0:function fQ0(){},
fQE:function fQE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQD:function fQD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fQC:function fQC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iBe(d){switch(d){case"new":return D.eSr
case"checking":return D.eSs
case"connected":return D.eSu
case"completed":return D.eSt
case"failed":return D.eSw
case"disconnected":return D.eSx
case"closed":return D.aUx
case"count":return D.eSv}return D.aUx},
iBf(d){switch(d){case"new":return D.aUy
case"gathering":return D.eSy
case"complete":return D.abE}return D.aUy},
iMw(d){switch(d){case"stable":return D.eSz
case"have-local-offer":return D.eSA
case"have-local-pranswer":return D.eSC
case"have-remote-offer":return D.eSB
case"have-remote-pranswer":return D.eSD
case"closed":return D.aUE}return D.aUE},
iKy(d){switch(d){case"new":return D.aUB
case"connecting":return D.aUC
case"connected":return D.aUD
case"closed":return D.abF
case"disconnected":return D.aUA
case"failed":return D.aUz}return D.abF},
abY:function abY(d,e){this.a=d
this.b=e},
Qd:function Qd(d,e){this.a=d
this.b=e},
Zr:function Zr(d,e){this.a=d
this.b=e},
Qc:function Qc(d,e){this.a=d
this.b=e},
Gn:function Gn(d,e){this.a=d
this.b=e},
cwr:function cwr(){},
hpP(d){var x=new B.Gm()
x.a=d
x.b=!0
return x},
Gm:function Gm(){this.b=this.a=$},
abX:function abX(){},
axk:function axk(){},
Zs:function Zs(d,e){this.a=d
this.b=e},
hnS(){var x=0,w=A.j(y.H)
var $async$hnS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hnS,w)},
hnV(d,e,f){var x=0,w=A.j(y.T),v
var $async$hnV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n4(D.nw))){v=null
x=1
break}v=B.haW(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hnV,w)},
hFx(d){var x,w=F.ahP.a7j(C.e5.aL(d),null)
if(w.length===0){x=C.e5.aL(d)
return C.cS.gcp().aL(x)}return C.cS.gcp().aL(w)},
ibr(d){var x,w,v=C.cM.aL(d)
try{x=C.ch.cJ(0,F.ahO.bjs(v,!1))
return x}catch(w){x=C.ch.cJ(0,v)
return x}},
hnW(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.ibr(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.ch.cJ(0,C.cM.aL(x))
return v}catch(u){return x}}return null},
ibs(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.Y(t,"a=extmap"))continue
if(C.a.Y(t,"a=ssrc"))continue
if(C.a.Y(t,"a=msid"))continue
if(C.a.Y(t,"a=rtcp"))continue
if(C.a.Y(t,"a=rtpmap"))continue
if(C.a.Y(t,"a=fmtp"))continue
if(C.a.Y(t,"a=rtcp-fb"))continue
if(C.a.Y(t,"a=mid:"))continue
if(C.a.Y(t,"a=group:"))continue
if(C.a.Y(t,"a=setup:"))continue
if(C.a.Y(t,"a=ice-options:"))continue
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aJ(s,"\n")},
ibt(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hp(v)},
b3L(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b3L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b3L)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share qr stash] load "+A.v(p)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b3L,w)},
ci2(d,e){return B.ibu(d,e)},
ibu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ci2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.d_,null),$async$ci2)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share qr stash] save "+A.v(p)+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ci2,w)},
b3O(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3L(d),$async$b3O)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3O,w)},
b3N(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3N=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.ibt()
r=C.a.i(f)
t=C.e5.aL(s)
x=3
return A.b(B.ci2(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aL(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3N)
case 3:if(!h){v=null
x=1
break}v=new A.a2C("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3N,w)},
b3M(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b3M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.b3L(o),$async$b3M)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.ch.cJ(0,C.cM.aL(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b3M,w)},
ci3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ci3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(O.bIs("ngmy_doc_share_stash_v2_"+C.a.i(q),C.d_),$async$ci3)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ci3,w)},
b3P(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JT(),$async$b3P)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3P,w)},
asF(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$asF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asF)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3P(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asF,w)},
asD(d,e){var x=0,w=A.j(y.H)
var $async$asD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asD)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$asD)
case 2:return A.h(null,w)}})
return A.i($async$asD,w)},
a9r(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9r)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JT(),$async$a9r)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dz(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9q(s),$async$a9r)
case 5:x=6
return A.b(B.asD(f,u),$async$a9r)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9r,w)},
a9s(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9s=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9s)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JT(),$async$a9s)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a0(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a1(r,y.N,y.z)
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
s.X(u,t)
s.n(u,o,p)
x=8
return A.b(B.asD(g,q),$async$a9s)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9q(u),$async$a9s)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9s,w)},
a9t(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9t)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JT(),$async$a9t)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a0(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b3I(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9t)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.T.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9t)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9t,w)},
ci4(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ci4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$ci4)
case 7:s=f
p=A.v(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.T.aN(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a1(q,y.N,y.z)
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
return A.i($async$ci4,w)},
JU(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ci4(d),$async$JU)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3P(t),$async$JU)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asE(d),$async$JU)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b3I(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asE(d),$async$JU)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JU,w)},
asE(d){var x=0,w=A.j(y.H)
var $async$asE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asE)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asE)
case 2:return A.h(null,w)}})
return A.i($async$asE,w)},
b3Q(){var x,w=$.oh(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hp(v)},
a9u(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hnX(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ci7(d){return B.ibw(d)},
ibw(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ci7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9u(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$ci7)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share short code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ci7,w)},
asH(d,e){return B.ibx(d,e)},
ibx(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9u(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.d_,null),$async$asH)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share short code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asH,w)},
ci9(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ci9=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9u(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asH(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ci9)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ci9,w)},
ci8(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ci8=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9u(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asH(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ci8)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ci8,w)},
cia(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cia=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9u(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asH(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cia,w)},
cib(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cib=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hnX(d)){v=null
x=1
break}x=3
return A.b(B.ci7(d),$async$cib)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a0(u)
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
return A.i($async$cib,w)},
a9B(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9B=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9B)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9B)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9B,w)},
asL(d){return B.ibM(d)},
ibM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asL)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.d_,null),$async$asL)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asL,w)},
asM(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.dd(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asM)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9B(),$async$asM)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.ch.cJ(0,C.cM.aL(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a1(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asL(s),$async$asM)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ad(i)
$.an.$1("[doc share webrtc stash] offer decode: "+A.v(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asM,w)},
asO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asO)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9B(),$async$asO)
case 4:u=g
t=J.a0(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a1(s,r,q),r,q)
r=C.e5.aL(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aL(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asL(u),$async$asO)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asO,w)},
asN(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$asN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asN)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9B(),$async$asN)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.ch.cJ(0,C.cM.aL(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$asN,w)},
arC(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$arC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bl$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.oF)){v=null
x=1
break}x=3
return A.b(p.lH(e),$async$arC)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hs),$async$arC)
case 7:q=g
o=q
o=o==null?null:J.eU(J.tN(o))
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
return A.i($async$arC,w)},
iIy(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.n.v(w),5,"0")
return v},
h8O(d){return B.iIA(d)},
iIA(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h8O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iO("media").MK(d,3600),$async$h8O)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[supabase signed url] "+d+": "+A.v(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$h8O,w)},
Ec(d,e,f,g,h,i){var x=null
return B.iIx(d,e,f,g,h,i)},
iIx(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ec=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hFA(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hnZ(r),$async$Ec)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h8O(o),$async$Ec)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9v(r),$async$Ec)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aYk)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Iv(A.a([],g))
x=15
return A.b(d.fi(0,A.ay8("GET",A.cI(n,0,null))).d9(0,C.HQ),$async$Ec)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9v(r),$async$Ec)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LM(d)
u=19
case 22:x=24
return A.b(d.A(),$async$Ec)
case 24:if(!b2){x=23
break}k=d.gO(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3S(r,k),$async$Ec)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$Ec)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X7(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ad(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a9v(r),$async$Ec)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ec,w)},
aUQ(d){return B.iIz(d)},
iIz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iO("media").X(0,d),$async$aUQ)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aUQ,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[67]
I=c[99]
P=c[313]
Q=c[53]
F=c[306]
K=c[185]
G=c[69]
R=c[271]
S=c[272]
E=c[263]
H=c[101]
T=c[237]
U=c[72]
V=c[186]
W=c[269]
L=c[251]
X=c[298]
M=c[314]
B=a.updateHolder(c[27],B)
D=c[312]
Y=c[236]
N=c[245]
Z=c[78]
A_=c[86]
B.cws.prototype={
aJ6(d,e){return this.cVX(d,e)},
cVX(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aJ6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kE(A.cz(t)))
t=J.k(u)
v=B.igB(C.cS.gcp().aL(new A.d1(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aJ6,w)}}
B.b92.prototype={
bFZ(d){var x=this,w=x.w
w.onclose=A.hH(new B.cwn(x))
w.onopen=A.hH(new B.cwo(x))
w.onmessage=A.hH(new B.cwp(x))
w.onbufferedamountlow=A.hH(new B.cwq(x))},
gd6(d){return this.x},
akR(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$akR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gm()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hpP(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.el(d.arrayBuffer(),y.af),$async$akR)
case 8:v=t.hpP(s.aqL(f,0,null))
x=1
break
case 7:case 4:v=B.hpP(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akR,w)}}
B.b93.prototype={
bG_(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hH(new B.cwt(x)))
w.addEventListener("icecandidate",A.hH(new B.cwu(x)))
w.addEventListener("iceconnectionstatechange",A.hH(new B.cwv(x)))
w.onicegatheringstatechange=A.hH(new B.cww(x))
w.addEventListener("signalingstatechange",A.hH(new B.cwx(x)))
if(!$.hy4())w.addEventListener("connectionstatechange",A.hH(new B.cwy(x)))
w.addEventListener("negotiationneeded",A.hH(new B.cwz(x)))
w.addEventListener("track",A.hH(new B.cwA(x)))},
aoC(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aoC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.el(s.createAnswer(A.kE(A.cz(A.S(y.N,y.z)))),y.aQ),$async$aoC)
case 3:t=f
v=new B.Zs(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoC,w)},
aay(d,e){return this.buT(0,e)},
buT(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aay=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aay)
case 2:return A.h(null,w)}})
return A.i($async$aay,w)},
aaG(d,e){return this.bvd(0,e)},
bvd(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aaG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aaG)
case 2:return A.h(null,w)}})
return A.i($async$aaG,w)},
at2(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$at2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zs(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$at2,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fc(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.aeQ.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0u.prototype={
R(){return new B.aD5()},
gd8(){return this.c}}
B.aD5.prototype={
Z(){this.a4()
this.ahg()},
ahg(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ahg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3J(u.e,u.c),$async$ahg)
case 2:t=e
if(v.c!=null)v.l(new B.dig(v,t))
return A.h(null,w)}})
return A.i($async$ahg,w)},
So(){var x=0,w=A.j(y.H),v,u=this,t
var $async$So=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.asA(t.e,t.c,!1),$async$So)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(D.fIF)
x=1
break}x=4
return A.b(B.a9p(u.a.c,"individual"),$async$So)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a8T(A.e4(new B.did(u),!1,null,y.H)),$async$So)
case 5:case 1:return A.h(v,w)}})
return A.i($async$So,w)},
L0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$L0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fNI(o),$async$L0)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9t(o.e,r,s,q),$async$L0)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.T(D.fFE)
x=1
break}x=5
return A.b(B.a9p(u.a.c,"member"),$async$L0)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a8T(A.e4(new B.dif(u),!1,null,y.H)),$async$L0)
case 6:case 1:return A.h(v,w)}})
return A.i($async$L0,w)},
zo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a9o(t.e,o,t.f,t.r,t.w,s),$async$zo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9p(u.a.c,"org_owner"),$async$zo)
case 4:x=5
return A.b(B.asF(u.a.c),$async$zo)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fOc(o),$async$zo)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9r(s,t,o,q.c),$async$zo)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.T(D.fFA)
x=1
break}x=10
return A.b(B.asF(u.a.c),$async$zo)
case 10:o=u.c
if(o==null){x=1
break}o.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a8T(A.e4(new B.die(u),!1,null,y.H)),$async$zo)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zo,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.o0:C.nk,p=B.hnU(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aE(d,C.dL,y.m).w
w=A.n(28)
v=A.a([new A.ac(0,C.G,C.aB.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.h27,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hp,s,s,s),C.aA,D.hmy,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cg1,C.m),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lX(new B.dii(),s),C.N,v,C.ee,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.ae)
if(!t.a.x)C.d.u(w,A.a([new B.afj(C.f9,C.aGS,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gco9(),s),C.ae],u))
w.push(new B.afj(C.qb,C.a6X,"Team Member","Sign in with your organization access code + password",t.gcp4(),s))
w.push(C.ae)
w.push(new B.afj(C.asB,C.a8F,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcoz(),s))
return A.c6(s,q,A.bl(!0,A.cb(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.afj.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aN(!1,r,!0,A.eK(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.eu,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lT,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.A7,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFM.prototype={}
B.aJ2.prototype={}
B.jW.prototype={
n4(d){var x=this.b,w=C.a.ox(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gatJ(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.a1(x/1024,1)+" KB"
if(x<1073741824)return C.h.a1(x/1048576,1)+" MB"
return C.h.a1(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.S(y.N,y.z)
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
biW(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jW(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cUp(d){return this.biW(null,d)},
aIO(d){return this.biW(d,null)}}
B.X1.prototype={
R(){return new B.aHa(new A.cB(null,y.A))},
gd8(){return this.c}}
B.aHa.prototype={
Z(){this.a4()
this.ahh()},
ahh(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CJ(u.a.c),$async$ahh)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e56(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ahh,w)},
ahi(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ahi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fS(new A.fG(s)),$async$ahi)
case 3:t=u.c
if(t!=null)t.M(y.q).f.T(D.fJA)
case 1:return A.h(v,w)}})
return A.i($async$ahi,w)},
a19(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a19=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.arC(s.d,4),$async$a19)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rI(r,"ngmy_my_code_"+m+".png"),$async$a19)
case 8:q=e
o=s.c
if(o!=null)o.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ad(l)
o=s.c
if(o!=null)o.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a19,w)},
alh(){var x=0,w=A.j(y.H),v,u=this,t
var $async$alh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.acA("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$alh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$alh,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.o0:C.nk,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l3
else if(q.e==null)x=A.at(new A.C(C.eA,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aB.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AM,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.ap2,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aB.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cb(A.w(A.a([x,C.nC,w,C.lq,new A.ea(A.q(p,A.qx(p,p,!1,B.ibn(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.ae,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lq,A.A(A.a([A.E(A.eo(I.Eg,p,C.XO,q.gcg4(),p),1),C.ar,A.E(A.dg(C.AB,p,C.ae5,q.gcg5(),A.bp(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a4(1/0,p,A.eo(N.a5K,p,D.hhX,q.gcEp(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.apE,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.X5.prototype={
R(){return new B.aHd(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aHd.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JS(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a1a(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JS(u.d.a.a)
if(t==null){u.l(new B.e6f(u))
x=1
break}u.l(new B.e6g(u))
s=u.a
r=s.c
x=3
return A.b(B.a9n(s.d,new B.e6h(u),t,r),$async$a1a)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e6i(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a1a,w)},
a4I(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4I=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.l(new B.e6j(r))
u=4
q=J.ey(r.a.d)
x=7
return A.b(B.th(r.a.c,q),$async$a4I)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e6k(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aku(p,m,l,j,k),$async$a4I)
case 8:o=e
if(r.c!=null)r.l(new B.e6l(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e6m(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e6n(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4I,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akX:D.aio,h=j?D.amN:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajU:C.bo
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dp(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bW(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dp(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bW(C.z,0.5,C.w,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.c2Q,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.aB],e),k,k),C.m),k,52,k,k,k,k,k,52),C.eu,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AM,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vl(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bod()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aO(k,C.M,u==null,k,!0,C.t,k,A.aP(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.PL,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e6o(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mU,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.El(l.a.d,4)
m=A.B(new A.O(m,new B.e6p(x,new A.aKl(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.kP,A.c("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.es,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fE2)
else q.push(A.V(C.kR,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cZ(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b1,new A.p(u,k,s,t,k,k,C.m),C.iP,k,k,k,k,C.f3,k,k,k)],r))}e=A.E(A.cb(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bKO,k,k,C.ah),1)
u=l.f?k:l.gcEq()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eo(N.a5K,k,D.hj3,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.bb(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcg6()
t=A.bp(C.aB,k,k,0,C.c,k,C.o8,k,new A.bb(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ac,C.t,A.a([f,v,A.bl(!0,A.l5(new B.e6q(),A.w(A.a([e,new A.C(D.bKh,A.w(A.a([s,C.N,i,C.ae,A.bI(l.f?C.uz:D.hhh,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a1Y,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bod.prototype={
pu(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fa(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hm(C.bB,v.length),C.aP)}}
B.X2.prototype={
R(){return new B.aHb()}}
B.aHb.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,C.bb,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bd(x,C.bb,C.aP),v)
u.f!==$&&A.aT()
u.f=new A.au(C.ay,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.ay()
v.W$=0
v=w.e
v===$&&A.d()
v.V$=x
v.W$=0
v=w.f
v===$&&A.d()
v.V$=x
v.W$=0
w.a3()},
ahj(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ahj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e57(r))
u=3
p=r.a
o=p.c
p=p.d
n=r.d
n===$&&A.d()
n=n.a.a
m=r.e
m===$&&A.d()
m=m.a.a
m=C.a.i(m)!==C.a.i(p)?m:null
l=r.f
l===$&&A.d()
l=l.a.a
x=6
return A.b(B.a9s(p,m,n,o,C.a.i(l).length===0?null:l),$async$ahj)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.M(y.q).f.T(D.fJb)
s=[1]
x=4
break}p.M(y.q).f.T(D.fHN)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e58(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ahj,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.o0:C.nk,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h9A,s,s,s,1,s,!0),p=A.q(s,D.bCj,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.Jc,C.m),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.d()
o=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),o,s,s,s,s,s,2,D.cal,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),x,s,s,s,s,s,2,D.cag,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),w,s,s,s,s,s,2,D.caw,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
v=t.r?s:t.gcg7()
u=A.bp(C.aB,s,s,s,s,C.hw,s,s,s,s,s,s)
return A.c6(q,r,A.cb(A.w(A.a([p,C.df,o,C.ae,x,C.ae,w,C.nC,A.bI(t.r?C.uz:C.b0i,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.aex.prototype={}
B.bBk.prototype={
a7A(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a9i()))
x=3
return A.b(B.T8(t,s),$async$a7A)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7A,w)},
gd8(){return this.a}}
B.P1.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0t.prototype={
R(){return new B.aD4(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aD4.prototype={
Z(){this.a4()
$.aS.U$.push(new B.dic(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cgd(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3G(d),u=x.a.c,t=u?C.j_:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.o0:v.a[0],p=A.n(24),o=A.K(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aB.j(u?0.25:0.12),C.fF,32)],n),l=A.q(w,Y.avo,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aB.j(0.4),C.cy,16)],n),C.awg,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vl(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAW()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aO(!1,C.M,!1,w,!0,C.t,w,A.aP(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Dr,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b9S),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dia(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mU,w,w,w,w)
f=f[1]
h=y.p
return A.eE(w,C.L,new A.cO(T.Nk,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bn,new A.C(C.xm,A.w(A.a([l,C.aN,k,C.N,j,C.ee,i,C.ee,A.A(A.a([A.E(A.dV(C.oB,new B.dib(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.bb(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ac(0,C.G,C.aB.j(0.35),C.cO,12)],n),M.RV,C.m),C.bn,A.aF(!1,C.a3,!0,w,A.aN(!1,A.n(14),!0,D.eLM,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcgc(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PT,w,C.db,w,w,w)}}
B.bAW.prototype={
pu(d,e){return e.aow(e.a.toUpperCase())}}
B.X3.prototype={
R(){return new B.aHc(A.a([],y.r),A.aR(y.N))},
gd8(){return this.c}}
B.aHc.prototype={
Z(){var x=this
x.a4()
x.uS()
x.w=A.d5(C.jY,new B.e6d(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.Xc()
this.a3()},
a3w(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P0(u.a.c),$async$a3w)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.BE(u.a.c),$async$a3w)
case 4:u.l(new s.e5B(u,e))
u.iA("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a3w,w)},
uS(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P0(u.a.c),$async$uS)
case 3:t=e
x=4
return A.b(B.BE(u.a.c),$async$uS)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e5C(u,s))
if(t>0)u.iA("Received "+A.v(t)+" file(s) via My Code.")
u.Pq(u.d)
B.CJ(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uS,w)},
Pq(d){return this.bK6(d)},
bK6(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Pq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9x(r,u.a.c),$async$Pq)
case 8:p=f
if(u.c==null){x=1
break}new B.e5a(u,r,p).$0()
u.c.ez()
case 7:if(!(C.a.Y(r.c,"video/")||r.n4(D.nw))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Xa(r,u.a.c),$async$Pq)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.BE(u.a.c),$async$Pq)
case 12:u.l(new o.e5b(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Pq,w)},
PQ(d){return this.bQy(d)},
bQy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$PQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9x(d,u.a.c),$async$PQ)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e5g(u,d,t))
x=6
return A.b(A.fS(new A.fG(t)),$async$PQ)
case 6:u.iA("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fS(new A.fG(r.toUpperCase())),$async$PQ)
case 7:u.iA("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$PQ,w)},
iA(d){var x=null,w=this.c
if(w==null)return
w.M(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uT(d,e){return this.cPE(d,e)},
cPE(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e61(r,e))
u=3
x=6
return A.b(d.$0(),$async$uT)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e62(r))
$.eY.mY()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uT,w)},
gb_J(){var x=this.a
return x.f||x.r||x.w},
JL(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$JL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gb_J()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ci0(s,n,r,q,o,t),$async$JL)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iA("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.h16(o,u.a.c),$async$JL)
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
return A.b(B.Ee(s,o,r,q,n,t),$async$JL)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JL,w)},
a2w(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a2w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asF(u.a.c),$async$a2w)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iA("No organization portal found.")
x=1
break}t=J.a0(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a7(t,!1).ca(A.e4(new B.e5y(u,r,q),!1,null,y.H)),$async$a2w)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a2w,w)},
a3H(d){return this.cxK(d)},
cxJ(){return this.a3H(1)},
cxK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gb_J()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.asC(u.a.c),$async$a3H)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3H,w)},
af4(d,e,f){return this.c6F(d,e,f)},
c6F(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$af4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iA(e)
x=1
break}x=3
return A.b(u.uT(new B.e5v(u,d,null,e,f),"Uploading\u2026"),$async$af4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$af4,w)},
bKf(){B.hVY(!1,new B.e5e(this))
return},
cCV(){this.l(new B.e5G(this))},
aDa(){var x=0,w=A.j(y.H),v=this
var $async$aDa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bKf()
return A.h(null,w)}})
return A.i($async$aDa,w)},
af0(){var x=0,w=A.j(y.H),v=this
var $async$af0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uT(new B.e5k(v),"Importing\u2026"),$async$af0)
case 2:return A.h(null,w)}})
return A.i($async$af0,w)},
Up(d){return this.cOV(d)},
cOV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Up=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n4(D.nw)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e5Z(u,d),!1,null,y.H)),$async$Up)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n4(D.U_)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ca(A.e4(new B.e6_(u,d),!1,null,y.H)),$async$Up)
case 8:x=1
break
case 7:x=u.c7n(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ca(A.e4(new B.e60(u,d),!1,null,y.H)),$async$Up)
case 11:x=1
break
case 10:u.iA("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Up,w)},
c7n(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.ox(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.d_7,C.a.aV(x,w+1).toLowerCase())},
aiY(d){return this.cod(d)},
cod(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n4(D.nw)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e5w(u,d),!1,null,y.H)),$async$aiY)
case 5:x=1
break
case 4:u.l(new B.e5x(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aiY,w)},
TL(d){return this.cFU(d)},
cFU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$TL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iA("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$TL)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uT(new B.e5S(u,d),"Preparing QR\u2026"),$async$TL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TL,w)},
alJ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$alJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e5T(),A.T(t).k("O<1,o>")).fI(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e5U(q),s),s.k("L.E"))
if(r.length===0){u.iA("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.TL(r),$async$alJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$alJ,w)},
alC(d){return this.cFr(d)},
cFr(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3G(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e5M(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$alC)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Up(d)
break
case"qr":u.TL(A.a([d],y.r))
break
case"send_my_code":u.coU(A.a([d],y.r))
break
case"save":u.akZ(d)
break
case"delete":u.KG(d)
break}case 1:return A.h(v,w)}})
return A.i($async$alC,w)},
ZS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e5h(),A.T(t).k("O<1,o>")).fI(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e5i(q),s),s.k("L.E"))
if(r.length===0){u.iA("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$ZS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uT(new B.e5j(u,r),"Preparing file\u2026"),$async$ZS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZS,w)},
ak6(d){return this.cw0(d)},
cw0(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ak6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hX1(d,!1),$async$ak6)
case 3:s=f
r=s==null
q=B.a9u(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iA("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ak6,w)},
aj3(){var x=0,w=A.j(y.H),v=this,u
var $async$aj3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h9W(u,v.a.c),$async$aj3)
case 2:return A.h(null,w)}})
return A.i($async$aj3,w)},
bKe(){B.hVY(!1,new B.e5d(this,null))
return},
L_(d,e){return this.coV(d,e)},
b6y(d){return this.L_(null,d)},
coU(d){return this.L_(d,null)},
coV(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$L_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e5z(s),o),o.k("L.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.yb.cr().arm(!0,C.a3R,!1),$async$L_)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.uT(new B.e5A(l,s,r),"Preparing\u2026"),$async$L_)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iA("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iA("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bJI(p,l,e,s.a.c),$async$L_)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iA("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$L_,w)},
K1(d){return this.c6s(d)},
c6s(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$K1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.ibm(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b6y(t),$async$K1)
case 8:x=6
break
case 7:u.iA("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iA("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uT(new B.e5t(u,d),"Receiving video\u2026"),$async$K1)
case 11:x=1
break
case 10:x=12
return A.b(u.uT(new B.e5u(u,d),"Receiving\u2026"),$async$K1)
case 12:case 1:return A.h(v,w)}})
return A.i($async$K1,w)},
FK(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$FK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E8()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ak6(t),$async$FK)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.K1(s),$async$FK)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e5E(u),!1,null,y.N)),$async$FK)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uS(),$async$FK)
case 10:x=1
break
case 9:x=11
return A.b(u.K1(C.a.i(r)),$async$FK)
case 11:case 1:return A.h(v,w)}})
return A.i($async$FK,w)},
akZ(d){return this.cBo(d)},
cBo(d){var x=0,w=A.j(y.H),v=this
var $async$akZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uT(new B.e5D(v,d),"Saving\u2026"),$async$akZ)
case 2:return A.h(null,w)}})
return A.i($async$akZ,w)},
KG(d){return this.bSX(d)},
bSX(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$KG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lI(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$KG)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ci3(t),$async$KG)
case 6:case 5:s=d.a
x=7
return A.b(B.FS(u.a.c,s),$async$KG)
case 7:u.r.X(0,s)
x=8
return A.b(u.uS(),$async$KG)
case 8:case 1:return A.h(v,w)}})
return A.i($async$KG,w)},
alP(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3G(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e5Y(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alP)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aj3()
break
case"import":u.af0()
break}case 1:return A.h(v,w)}})
return A.i($async$alP,w)},
cga(d){var x=d.c
if(C.a.Y(x,"video/")||d.n4(D.nw))return C.rF
if(C.a.Y(x,"image/")||d.n4(D.U_))return C.vG
if(C.a.q(x,"pdf"))return S.IS
return D.at0},
C(d){var x,w,v=this,u=null,t=B.a3G(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.J4,u,u,u,new B.e68(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c3s,u,u,u,v.e?u:v.gcoA(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcCU()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bYn:E.atp,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a5G,u,u,u,v.e?u:v.gcgb(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.pc,u,u,u,v.e?u:v.gb7E(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c5h,u,u,u,v.e?u:new B.e69(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lX(new B.e6a(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bW(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bW(C.z,0.5,C.w,u,0,A.a([C.aB.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jK(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aD1(C.jI,s,!0,t,w?u:v.gcFV(),u),1)
x.push(new A.C(C.ap0,A.l5(new B.e6b(),A.A(A.a([s,C.ar,A.E(new B.aD1(C.tX,"Export",!1,t,w?u:v.gbWQ(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iQ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.biG(t,v.e?u:v.gb7E(),u)
else s=A.ku(!0,u,u,new B.e6c(v,t),s,u,D.bIU,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ac,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aD1.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aB,t,t,0,C.c,t,C.tN,t,new A.bb(s,C.a1),t,t,t)
return A.dg(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tN,t,new A.bb(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eo(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.biG.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l5(new B.di8(),new A.C(E.a2Y,A.w(A.a([A.l5(new B.di9(),A.q(x,A.V(C.Ac,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ek,C.hB,x,x,new A.bq(0.86,1,w),s),C.ee,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ee,A.dg(C.pc,x,D.hmS,this.d,A.bp(C.aB,x,x,x,C.c,x,C.PR,x,new A.bb(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.Dd,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeR.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.n.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aB.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.n4(D.nw))p=D.dDX
else{p=C.a.Y(p,"image/")||i.n4(D.U_)
n=y.O
p=p?A.a([C.cZ,C.aB],n):A.a([C.aO.j(0.85),C.aB.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gatJ()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n4(D.nw))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.w(A.a([q,C.at,A.c(C.d.aJ(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h3,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n4(D.nw)))l.push(A.hlH(C.aB,!1,j,j,j,!1,j,j,new B.div(k),j,j,new A.bb(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p8,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l5(new B.diw(),new A.C(C.dX,A.aF(!1,C.a3,!0,j,A.aN(!1,r,!0,new A.C(C.a2n,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.bb(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.b9("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0v.prototype={
R(){return new B.aD6()},
gd8(){return this.c}}
B.aD6.prototype={
Z(){this.a4()
this.zc()},
t(){B.ibB(this.e)
this.a3()},
zc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$zc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.th(o.c,o.d),$async$zc)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.ibE(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.ibD(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dis(s))
x=1
break}s.l(new B.dit(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.diu(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$zc,w)},
a4H(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.th(t.c,t.d),$async$a4H)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(D.fGa)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aku(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4H)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
c6l(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kt(u,C.z,v,new B.diq(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.ha(t,C.z,v,new B.dir(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bL
return A.u8(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3G(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Ej,u,u,u,v.gbbu(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.GH
else{q=v.r
if(q!=null)t=new A.C(C.eA,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c4(w,".heic")||C.a.c4(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.eA,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.dg(C.Ej,u,D.h4D,v.gbbu(),A.bp(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c6l()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0s.prototype={
R(){return new B.aD3(A.alt(),C.bI,C.bI)},
gd8(){return this.c}}
B.aD3.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fK(w,A.a3(w).k("fK<1>")).iQ(new B.di5(v))
x.gd2G().iQ(new B.di6(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fK(x,A.a3(x).k("fK<1>"))}if(x==null)x=C.bgc
x.iQ(new B.di7(v))
v.zc()},
zc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$zc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.th(p.c,p.d),$async$zc)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dhZ(s))
x=1
break}x=8
return A.b(s.d.vW(0,new A.a5V(r,s.a.d.c)),$async$zc)
case 8:if(s.c==null){x=1
break}s.l(new B.di_(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.di0(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$zc,w)},
a1b(){var x=0,w=A.j(y.H),v=this,u
var $async$a1b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hr(0),$async$a1b)
case 5:x=3
break
case 4:x=6
return A.b(u.iT(0),$async$a1b)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a1b,w)},
aYz(d){var x=d.a
return C.a.aY(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3G(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.GH
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bZp,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RV,C.m),o,88,o,o,o,o,o,88)
t=A.kT(C.aB,o,o,o,m,0,o,new B.di1(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aYz(p.w)+" / "+p.aYz(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aB,o,o,o,o,D.fCu,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vJ:C.fS,o,o,o,o,o)
x=A.w(A.a([u,C.lq,t,x,C.df,A.dg(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcge(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.q1,x,o),o,o,o),o,!1,!1,o,o)}}
B.Ru.prototype={
R(){return new B.aD9()},
gd8(){return this.c}}
B.aD9.prototype={
Z(){this.a4()
this.RD()},
RD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$RD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hnV(o.c,o.d,new B.diJ(s)),$async$RD)
case 7:r=e
if(r==null||r.length===0){s.l(new B.diK(s))
x=1
break}s.e=r
q=Q.iA4(r)
if(q==null){s.l(new B.diL(s))
x=1
break}s.d=q
q.aU(0,s.gb6l())
x=8
return A.b(q.j4(0).d9(0,C.o7),$async$RD)
case 8:if(s.c==null){x=1
break}s.l(new B.diM(s))
x=9
return A.b(q.qL(0),$async$RD)
case 9:q.uu(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.diN(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$RD,w)},
cmJ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.diO(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Eu(0,x.gb6l())
w=x.d
if(w!=null)w.t()
B.iKR(x.e)
x.a3()},
ahm(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ahm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3R(u.c,u.d),$async$ahm)
case 2:t=e
u=v.c
if(u!=null)u.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ahm,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3G(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aI(t,t,t,t,C.on,t,t,t,u.gcg8(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iC(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.GH
else{q=u.r
if(q!=null)s=new A.C(C.eA,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akS(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fC(x,new A.am(C.z,t,C.ac,C.t,A.a([new A.B9(s,t),A.aA(t,A.xV(A.q(t,A.V(q?K.vJ:C.fS,C.c,t,t,t,48),C.f,t,t,new A.p(C.b8,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b1,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.diQ(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0x.prototype={
R(){return new B.aD7(new A.cB(null,y.A))}}
B.aD7.prototype={
gcPj(){var x,w,v=this.a
if(v.e!==D.Vp)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcOT(){var x,w,v=this.a
if(v.e!==D.Bd)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcPj()
if(x!=null){v.SO(x)
v.e=A.d5(V.Df,new B.diF(v,x))}w=v.gcOT()
if(w!=null){v.SN(w)
v.f=A.d5(C.fr,new B.diG(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
SN(d){return this.cub(d)},
cub(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asK(d),$async$SN)
case 3:t=f
x=4
return A.b(B.cim(d),$async$SN)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dix(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
SO(d){return this.cuc(d)},
cuc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.haF(d),$async$SO)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bHt(t),$async$SO)
case 4:if(u.c==null){x=1
break}u.l(new B.diy(u))
u.c.M(y.q).f.T(D.aXU)
case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
gcbU(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcg9(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a4q(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a4q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E8()){t=u.c
if(t!=null)t.M(y.q).f.T(D.fJl)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ca(A.e4(new B.diz(),!1,null,y.N)),$async$a4q)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bHt(s),$async$a4q)
case 4:t=u.c
if(t!=null)t.M(y.q).f.T(D.aXU)
case 1:return A.h(v,w)}})
return A.i($async$a4q,w)},
acR(d){return this.bQz(d)},
bQz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fS(new A.fG(C.d.aJ(t,", "))),$async$acR)
case 3:if(d.e!=null){t=d.M(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acR,w)},
ahk(d){return this.bQh(d)},
bQh(d){var x=0,w=A.j(y.H),v=this
var $async$ahk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fS(new A.fG(v.a.c)),$async$ahk)
case 2:if(d.e!=null)d.M(y.q).f.T(D.fGE)
return A.h(null,w)}})
return A.i($async$ahk,w)},
a4k(d){return this.cBq(d)},
cBq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a4k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.arC(s.d,4),$async$a4k)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rI(r,"ngmy_doc_share_qr.png"),$async$a4k)
case 8:q=f
if(d.e!=null)d.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ad(n)
if(d.e!=null)d.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4k,w)},
gb0Z(){var x,w=this.a
if(w.e!==D.Km)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acO(d){return this.bQs(d)},
bQs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb0Z()
if(t==null){x=1
break}x=3
return A.b(A.fS(new A.fG(C.a.Y(t,"http")?t:"N2|"+t)),$async$acO)
case 3:if(d.e!=null)d.M(y.q).f.T(D.fIk)
case 1:return A.h(v,w)}})
return A.i($async$acO,w)},
ahl(){var x=0,w=A.j(y.H),v=this,u
var $async$ahl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Xc(),$async$ahl)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ahl,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3G(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Km&&i!==D.Vp&&i!==D.Bd
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Km||t===D.Vp||t===D.Bd?l:A.aI(l,l,l,l,C.lL,l,l,l,m.gb49(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qx(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcbU(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Km){t=C.aB.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lG,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcg9(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aJ(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hz(D.c9o,D.heq,new B.diA(m,d),l)],p))}if(m.a.e===D.Km&&m.gb0Z()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hz(D.c5E,D.hb_,new B.diB(m,d),l)],p))
if(m.a.e===D.Bd){x=(m.w?C.dT:C.aB).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GL:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lG,l,l,l)],p))}if(m.a.e===D.Vp){x=(m.r?C.dT:C.aB).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GL:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lG,l,l,l),C.ae,A.dg(D.c0W,l,D.hhB,m.gcBO(),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pg(i,A.c6(v,w,new A.C(C.ad,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.bc,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ad,l,l,1/0),1),C.ae,A.A(A.a([A.E(A.eo(I.Eg,l,C.XO,new B.diC(m,d),l),1),C.ar,A.E(A.dg(C.AB,l,C.ae5,new B.diD(m,d),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a4(1/0,l,A.bI(U.BR,l,m.gb49(),A.bp(C.aO,l,l,l,l,C.hw,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.diE(),y.C)}}
B.aeP.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cb(A.w(A.a([w,C.aN,A.q(x,A.qx(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bI(C.BS,x,new B.dhY(d),x)],u),x,x,C.nR,v,x,x,x,x,D.h3z,x)}}
B.a0r.prototype={
R(){return new B.aD2(A.Ak(C.zt,C.oI,C.vV))}}
B.aD2.prototype={
t(){this.d.t()
this.a3()},
aBw(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).N(t)
return}}},
C(d){var x=null
return A.c6(A.eR(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.hbx,x,x,x,1,x,!0),C.v,A.Aj(this.d,C.c1,this.gaBv()),x,!1,!1,x,x)}}
B.a0y.prototype={
R(){return new B.aD8(A.Ak(C.zt,C.oI,C.vV))},
gd8(){return this.c}}
B.aD8.prototype={
c7p(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aju(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aju=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.No("text/plain"),$async$aju)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.M(y.q).f.T(D.fJf)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aju,w)},
adG(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hX1(p,!0),$async$adG)
case 3:t=e
p=t==null
s=B.a9u(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.M(y.q).f.T(D.fFL)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adG,w)},
t(){this.d.t()
this.a3()},
aBw(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c7p(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.aur,v,v,v,w.gbWj(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5O,v,v,v,w.gcrq(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.ry:R.R2,v,v,v,v,v),v,v,v,new B.diI(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hiy,v,v,v,1,v,!0)
u=A.Aj(w.d,C.c1,w.gaBv())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ac,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eS6],s),v),v,!1,!1,v,v)}}
B.biH.prototype={
C(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pU
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pU:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a3,!0,r,A.aN(!1,w,!0,new A.C(C.a33,A.A(A.a([u,C.bd,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eP,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abY.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Qd.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zr.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Qc.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gn.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cwr.prototype={}
B.Gm.prototype={}
B.abX.prototype={}
B.axk.prototype={}
B.Zs.prototype={}
var z=a.updateTypes(["az<~>()","P(jW)","o(jW)","X3(Z)","~()","a0u(Z)","F(F,jW)","Ru(Z)","~(lO)","cr(Gm)","az<jW?>(@)","X1(Z)","X5(Z)","C(jW)","jW(@)","a9<o,@>(jW)","a0t(Z)","X2(Z)","a0v(Z)","a0s(Z)","a0x(Z)","aeP(Z)","ah<jW>()","a0y(Z)","aeR(Z,F)","a0r(Z)","a9<o,aH>(jW)","cr(Zr)","cr(abX)","az<cr>(Gm)"])
B.cwn.prototype={
$1(d){var x=this.a
x.x=D.aUw
x.y.K(0,D.aUw)},
$S:74}
B.cwo.prototype={
$1(d){var x=this.a
x.x=D.aUv
x.y.K(0,D.aUv)},
$S:74}
B.cwp.prototype={
$1(d){var x=this.a
x.akR(A.a4p(d.data)).bB(new B.cwm(x),y.b)},
$S:74}
B.cwm.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cwq.prototype={
$1(d){},
$S:74}
B.cwt.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.igA(d.channel))},
$S:18}
B.cwu.prototype={
$1(d){},
$S:18}
B.cwv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iBe(w.iceConnectionState)
x.cx=w
if($.hy4())switch(w.a){case 0:x.cy=D.aUB
break
case 1:x.cy=D.aUC
break
case 3:x.cy=D.aUD
break
case 5:x.cy=D.aUz
break
case 6:x.cy=D.aUA
break
case 7:x.cy=D.abF
break
default:break}},
$S:112}
B.cww.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iBf(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:112}
B.cwx.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iMw(w.signalingState)},
$S:112}
B.cwy.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iKy(w.connectionState)},
$S:112}
B.cwz.prototype={
$1(d){},
$S:112}
B.cwA.prototype={
$1(d){},
$S:18}
B.fJ1.prototype={
$1(d){var x=y.F.a(new A.qP([],[]).om(d.target.result,!1)),w=C.xb.q(x.objectStoreNames,"blobs")
if(!w)C.x8.Hi(x,"blobs")},
$S:176}
B.h9K.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xN.fs(this.b)
$.eY.mY()
this.c.$1(d)},
$S:456}
B.h9M.prototype={
$1(d){return this.a.$1(B.iqb(this.b,this.c))},
$S:33}
B.h9L.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h9J.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h9Z.prototype={
$1(d){var x=this
return B.hKy(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.ha_.prototype={
$1(d){var x=this
return B.hKy(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fLI.prototype={
$1(d){var x=this
return B.chY(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dig.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.did.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chY(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dif.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chY(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.die.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chY(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dii.prototype={
$4(d,e,f,g){var x=null
return A.kj(A.A(A.a([A.aI(x,x,x,x,D.c_w,x,x,x,new B.dih(d),x,x,x,x,x,x),A.E(A.G8(D.TH,!0,x,!1,C.a4U,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.TH,x,g,C.apZ,0,e,f)},
$C:"$4",
$R:4,
$S:423}
B.dih.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fNL.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eW,y.m).w,t=this.a,s=t?C.j_:C.c,r=A.n(28),q=A.q(v,D.bCD,C.f,v,v,D.bbt,v,v,v,v,D.apK,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),p,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c43,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Du,A.w(A.a([o,C.ae,A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),x,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.auH,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fNJ(d),v),1),C.ar,A.E(A.bI(D.h9Y,v,new B.fNK(p,x,d),A.bp(C.b9,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HV,v,v,v,v),v)},
$S:65}
B.fNJ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fNK.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.M(y.q).f.T(D.fGV)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aFM(v,x))},
$S:0}
B.fOe.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eW,y.m).w,u=x.a,t=u?C.j_:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bCt,C.f,w,w,D.bcY,w,w,w,w,D.apK,w,w,1/0),new A.C(C.Du,A.w(A.a([A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),r,w,w,w,w,w,2,B.htt(u,"Organization name",C.Is,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),q,w,w,w,w,w,2,B.htt(u,"Access code",C.mE,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),p,w,w,w,w,w,2,B.htt(u,"Member password",C.Ef,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.bx,A.bI(D.hiF,w,new B.fOd(r,q,p,d),A.bp(C.aB,w,w,w,w,C.hw,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HV,w,w,w,w),w)},
$S:65}
B.fOd.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.M(y.q).f.T(D.fH_)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aJ2(u,x,w))},
$S:0}
B.chP.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a0(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cI(j,0,null):s.b.aZ(j)
u=4
x=7
return A.b(A.wm(p,null).d9(0,C.a1X),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CK(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ad(h)
$.an.$1("[doc share lan web] "+A.v(r)+": "+A.v(m))
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
B.chV.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chW.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.chX.prototype={
$1(d){return d.b},
$S:z+2}
B.chR.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chS.prototype={
$1(d){return d.b},
$S:z+2}
B.chQ.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.chT.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.chU.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h9X.prototype={
$1(d){return new B.X1(this.a,null)},
$S:z+11}
B.h9Y.prototype={
$1(d){return new B.X5(this.a,this.b,this.c,null)},
$S:z+12}
B.e56.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e6f.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e6g.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e6h.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e6e(x,d))},
$S:2}
B.e6e.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e6i.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e6j.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e6k.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e6l.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e6m.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e6n.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e6q.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.e6o.prototype={
$1(d){var x=this.a
return x.f?null:x.a1a()},
$S:2}
B.e6p.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n4(D.U_))s=C.vG
else s=C.a.Y(s,"video/")||d.n4(D.nw)?C.rF:D.at0
x=this.b.a
w=y.p
return new A.C(C.jZ,A.A(A.a([A.q(v,A.V(s,C.aB,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gatJ(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e57.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e58.prototype={
$0(){return this.a.r=!1},
$S:0}
B.chZ.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:99}
B.ci_.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:99}
B.haY.prototype={
$2(d,e){return e===this.a},
$S:252}
B.fFZ.prototype={
$1(d){return J.k(d)},
$S:15}
B.fLW.prototype={
$1(d){var x=this.b
B.inW(C.Ig.ga9c(this.a)).bB(x.gD2(x),y.H)},
$S:132}
B.fLX.prototype={
$1(d){return this.a.di(0,null)},
$S:132}
B.fLY.prototype={
$0(){return null},
$S:12}
B.cid.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fLZ.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.h.L(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.W(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jW(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fQq.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fK5.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fK6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cii.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.hfj.prototype={
$1(d){return new B.a0t(this.a,null)},
$S:z+16}
B.dic.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fN()},
$S:7}
B.dia.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dib.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e6d.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a3w()},
$S:10}
B.e5B.prototype={
$0(){var x=J.bKO(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e5C.prototype={
$0(){var x=J.bKO(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e5a.prototype={
$0(){var x=this.a,w=C.d.bm(x.d,new B.e59(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIO(this.c)}},
$S:0}
B.e59.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5b.prototype={
$0(){var x=J.bKO(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e5g.prototype={
$0(){var x=this.a,w=C.d.bm(x.d,new B.e5f(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIO(this.c)}},
$S:0}
B.e5f.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e61.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e62.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e5y.prototype={
$1(d){return new B.X2(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e5v.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.JL(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X6(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uS(),$async$$0)
case 5:s=J.a0(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a3H(s.gI(t)),$async$$0)
case 8:case 7:r.iA(s.gar(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5e.prototype={
$1(d){this.a.af4(d,"No files selected.","Added")},
$S:456}
B.e5G.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e5F(),A.T(x).k("O<1,o>")))},
$S:0}
B.e5F.prototype={
$1(d){return d.a},
$S:z+2}
B.e5k.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.yb.cr().d4I(C.a3R,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.ey(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.k1(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ad(j)
$.an.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.iA("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iA("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asJ(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ci(l)){o.iA("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uS(),$async$$0)
case 9:o.iA("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e5Z.prototype={
$1(d){return new B.Ru(this.a.a.c,this.b,null)},
$S:z+7}
B.e6_.prototype={
$1(d){return new B.a0v(this.a.a.c,this.b,null)},
$S:z+18}
B.e60.prototype={
$1(d){return new B.a0s(this.a.a.c,this.b,null)},
$S:z+19}
B.e5w.prototype={
$1(d){return new B.Ru(this.a.a.c,this.b,null)},
$S:z+7}
B.e5x.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5S.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.JL(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9w(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iA("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cxJ(),$async$$0)
case 5:x=6
return A.b(p.uS(),$async$$0)
case 6:r=A.T(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e5O(p),r),new B.e5P(),r.k("O<aj.E,o>")).c2(0,new B.e5Q())
q=A.B(r,r.$ti.k("L.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e5R(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Xc(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5O.prototype={
$1(d){var x=this.a,w=C.d.bm(x.d,new B.e5N(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e5N.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5P.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e5Q.prototype={
$1(d){return d.length!==0},
$S:3}
B.e5R.prototype={
$1(d){var x=this.a
return new B.a0x(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e5T.prototype={
$1(d){return d.a},
$S:z+2}
B.e5U.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e5M.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gatJ(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n4(D.nw)?C.u0:C.ol
p=!x||p.n4(D.nw)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lv,v,v,C.m),C.bn,A.bl(!0,new A.C(C.xi,A.w(A.a([q,o,t,C.aA,B.a0w(!1,u,!1,w,p,new B.e5H(d),v),B.a0w(!1,u,!1,C.jI,"Share via QR",new B.e5I(d),"Letters/numbers QR code"),B.a0w(!1,u,!1,D.a4Z,"Send to their Code",new B.e5J(d),"Enter someone else's personal code"),B.a0w(!1,u,!1,C.hP,"Download / save",new B.e5K(d),v),C.aj,B.a0w(!1,u,!0,C.et,"Delete",new B.e5L(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:570}
B.e5H.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e5I.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e5J.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e5K.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e5L.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e5h.prototype={
$1(d){return d.a},
$S:z+2}
B.e5i.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e5j.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9y(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HP(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pW(s.c,s.f),$async$$0)
case 4:u.iA(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5d.prototype={
$1(d){var x=this.a
x.uT(new B.e5c(x,d,this.b),"Preparing\u2026")},
$S:456}
B.e5c.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iA("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X6(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.iA("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bJI(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iA("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5z.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e5A.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aM(v.c.a),r=v.b,q=v.a
case 2:if(!s.A()){x=3
break}u=s.gO(s)
x=4
return A.b(B.hnY(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5t.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HN(new B.e5p(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iA("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e5q(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e5r(s))
case 5:x=8
return A.b(r.b.im(0,C.HQ,new B.e5s()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a0(t)
if(q.gar(t)){s.iA("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uS(),$async$$0)
case 9:s.iA("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5p.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e5m(x,d,e))},
$S:190}
B.e5m.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e5q.prototype={
$1(d){return new B.aeP(this.a.a,null)},
$S:z+21}
B.e5r.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e5s.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e5u.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JS(o)!=null?3:4
break
case 3:x=5
return A.b(B.a9m(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b6y(B.JS(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asJ(new B.e5n(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.hnX(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iA(q)
x=1
break}x=10
return A.b(s.uS(),$async$$0)
case 10:o=J.cK(r)
p=o.eY(r,new B.e5o()).gI(0)
s.iA(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5n.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e5l(x,d,e))},
$S:190}
B.e5l.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e5o.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.e5E.prototype={
$1(d){return new B.a0y(this.a.a.c,null)},
$S:z+23}
B.e5D.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3R(u.a.c,v.b),$async$$0)
case 2:t.iA(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5Y.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.aB.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lv,x,x,C.m),C.bn,A.bl(!0,new A.C(C.xi,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.a0w(!0,w,!1,C.mE,"My Code",new B.e5V(d),"Your personal code & QR \u2014 others send docs to you"),B.a0w(!1,w,!1,D.a4Z,"Send to their Code",new B.e5W(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0w(!1,w,!1,W.At,"Import backup",new B.e5X(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:570}
B.e5V.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e5W.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bKe()},
$S:0}
B.e5X.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e6a.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.K1(D.TH,x,C.a4U,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.TH).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:597}
B.e68.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e69.prototype={
$0(){this.a.alP()
return null},
$S:0}
B.e6b.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:95}
B.e6c.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeR(e,w,v,this.b,x.e,x.cga(w),new B.e64(x,w),new B.e65(x,v,w),new B.e66(x,w),new B.e67(x,w),null)},
$S:z+24}
B.e64.prototype={
$0(){this.a.aiY(this.b)
return null},
$S:0}
B.e65.prototype={
$0(){var x=this.a
return x.l(new B.e63(x,this.b,this.c))},
$S:0}
B.e63.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e66.prototype={
$0(){this.a.PQ(this.b)
return null},
$S:0}
B.e67.prototype={
$0(){this.a.alC(this.b)
return null},
$S:0}
B.di8.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:95}
B.di9.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:111}
B.diw.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.div.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.dis.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dit.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.diu.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.diq.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.ha(w,C.z,x,new B.dio(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dip(this.a))
return C.bL},
$S:144}
B.dio.prototype={
$3(d,e,f){$.aS.U$.push(new B.dim(this.a))
return C.bL},
$S:185}
B.dim.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dij(x))},
$S:7}
B.dij.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dip.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dil(x))},
$S:7}
B.dil.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dir.prototype={
$3(d,e,f){$.aS.U$.push(new B.din(this.a))
return C.bL},
$S:185}
B.din.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dik(x))},
$S:7}
B.dik.prototype={
$0(){return this.a.w=!0},
$S:0}
B.di5.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.di4(x,d))},
$S:1835}
B.di4.prototype={
$0(){return this.a.f=this.b===C.wi},
$S:0}
B.di6.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.di3(x,d))},
$S:7}
B.di3.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.di7.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.di2(x,d))},
$S:7}
B.di2.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dhZ.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.di_.prototype={
$0(){return this.a.e=!1},
$S:0}
B.di0.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.di1.prototype={
$1(d){return this.a.d.OK(0,A.dw(0,0,0,C.h.S(d),0,0))},
$S:6}
B.diJ.prototype={
$0(){var x=this.a.a
return B.th(x.c,x.d)},
$S:1836}
B.diK.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.diL.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.diM.prototype={
$0(){return this.a.f=!1},
$S:0}
B.diN.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.diO.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.diQ.prototype={
$0(){var x=this.a
x.l(new B.diP(x))},
$S:0}
B.diP.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hr(0)
else x.qL(0)},
$S:0}
B.diF.prototype={
$1(d){return this.a.SO(this.b)},
$S:10}
B.diG.prototype={
$1(d){return this.a.SN(this.b)},
$S:10}
B.dix.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.diy.prototype={
$0(){return this.a.r=!0},
$S:0}
B.diz.prototype={
$1(d){return D.hUZ},
$S:z+25}
B.diE.prototype={
$2(d,e){if(d)B.Xc()},
$S:135}
B.diA.prototype={
$0(){return this.a.acR(this.b)},
$S:0}
B.diB.prototype={
$0(){return this.a.acO(this.b)},
$S:0}
B.diC.prototype={
$0(){return this.a.ahk(this.b)},
$S:0}
B.diD.prototype={
$0(){return this.a.a4k(this.b)},
$S:0}
B.dhY.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.diI.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qP(),$async$$0)
case 2:u.l(new B.diH(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.diH.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cik.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.cil.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aD(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cij.prototype={
$2(d,e){return this.bqC(d,e)},
bqC(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Xd(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1837}
B.fQ_.prototype={
$1(d){if(d===D.abE&&(this.a.a.a&30)===0)this.a.h8(0)},
$S:z+27}
B.fQ0.prototype={
$0(){},
$S:12}
B.fQE.prototype={
bsg(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fCZ(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hFA(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bsg(d,e)},
$S:794}
B.fQD.prototype={
$1(d){var x=this
d.b=new B.fQC(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fQC.prototype={
$1(d){return this.bsf(d)},
bsf(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=d.b
n===$&&A.d()
x=n?7:8
break
case 7:n=s.a.c
m=d.a
x=n!=null?9:11
break
case 9:m===$&&A.d()
x=12
return A.b(B.b3S(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.T.aN(0,n,null)
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
return A.b(B.fCZ(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ad(j)
$.an.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a9v(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aD5.prototype,"gco9","So",0)
x(v,"gcp4","L0",0)
x(v,"gcoz","zo",0)
x(v=B.aHa.prototype,"gcg4","ahi",0)
x(v,"gcg5","a19",0)
x(v,"gcEp","alh",0)
x(v=B.aHd.prototype,"gcg6","a1a",0)
x(v,"gcEq","a4I",0)
x(B.aHb.prototype,"gcg7","ahj",0)
x(B.aD4.prototype,"gcgc","cgd",4)
x(v=B.aHc.prototype,"gcoA","a2w",0)
x(v,"gcCU","cCV",4)
x(v,"gb7E","aDa",0)
x(v,"gcFV","alJ",0)
x(v,"gbWQ","ZS",0)
x(v,"gcgb","FK",0)
x(B.aD6.prototype,"gbbu","a4H",0)
x(B.aD3.prototype,"gcge","a1b",0)
x(v=B.aD9.prototype,"gb6l","cmJ",4)
x(v,"gcg8","ahm",0)
x(v=B.aD7.prototype,"gcBO","a4q",0)
x(v,"gb49","ahl",0)
w(B.aD2.prototype,"gaBv","aBw",8)
x(v=B.aD8.prototype,"gcrq","aju",0)
x(v,"gbWj","adG",0)
w(v,"gaBv","aBw",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aH,[B.cwr,B.abX,B.axk,B.aFM,B.aJ2,B.jW,B.aex,B.bBk,B.Gm,B.Zs])
w(B.cws,B.cwr)
w(B.b92,B.abX)
x(A.hr,[B.cwn,B.cwo,B.cwp,B.cwm,B.cwq,B.cwt,B.cwu,B.cwv,B.cww,B.cwx,B.cwy,B.cwz,B.cwA,B.fJ1,B.h9K,B.h9M,B.h9L,B.h9Z,B.ha_,B.fLI,B.did,B.dif,B.die,B.dii,B.fNL,B.fOe,B.chP,B.chW,B.chX,B.chS,B.chQ,B.chT,B.chU,B.h9X,B.h9Y,B.e6h,B.e6q,B.e6o,B.e6p,B.fFZ,B.fLW,B.fLX,B.cid,B.fLZ,B.fQq,B.fK5,B.fK6,B.cii,B.hfj,B.dic,B.dia,B.e6d,B.e59,B.e5f,B.e5y,B.e5e,B.e5F,B.e5Z,B.e6_,B.e60,B.e5w,B.e5O,B.e5N,B.e5P,B.e5Q,B.e5R,B.e5T,B.e5U,B.e5M,B.e5h,B.e5i,B.e5d,B.e5z,B.e5q,B.e5o,B.e5E,B.e5Y,B.e6a,B.e6b,B.di8,B.di9,B.diw,B.div,B.diq,B.dio,B.dim,B.dip,B.dir,B.din,B.di5,B.di6,B.di7,B.di1,B.diF,B.diG,B.diz,B.cik,B.cil,B.fQ_,B.fQD,B.fQC])
w(B.b93,B.axk)
x(A.j0,[B.h9J,B.dig,B.dih,B.fNJ,B.fNK,B.fOd,B.e56,B.e6f,B.e6g,B.e6e,B.e6i,B.e6j,B.e6k,B.e6l,B.e6m,B.e6n,B.e57,B.e58,B.fLY,B.dib,B.e5B,B.e5C,B.e5a,B.e5b,B.e5g,B.e61,B.e62,B.e5v,B.e5G,B.e5k,B.e5x,B.e5S,B.e5H,B.e5I,B.e5J,B.e5K,B.e5L,B.e5j,B.e5c,B.e5A,B.e5t,B.e5m,B.e5r,B.e5s,B.e5u,B.e5l,B.e5D,B.e5V,B.e5W,B.e5X,B.e68,B.e69,B.e64,B.e65,B.e63,B.e66,B.e67,B.dis,B.dit,B.diu,B.dij,B.dil,B.dik,B.di4,B.di3,B.di2,B.dhZ,B.di_,B.di0,B.diJ,B.diK,B.diL,B.diM,B.diN,B.diO,B.diQ,B.diP,B.dix,B.diy,B.diA,B.diB,B.diC,B.diD,B.dhY,B.diI,B.diH,B.fQ0])
x(A.ln,[B.aeQ,B.P1,B.abY,B.Qd,B.Zr,B.Qc,B.Gn])
x(A.af,[B.a0u,B.X1,B.X5,B.X2,B.a0t,B.X3,B.a0v,B.a0s,B.Ru,B.a0x,B.a0r,B.a0y])
x(A.ai,[B.aD5,B.aHa,B.aHd,B.aHb,B.aD4,B.aHc,B.aD6,B.aD3,B.aD9,B.aD7,B.aD2,B.aD8])
x(A.aw,[B.afj,B.aD1,B.biG,B.aeR,B.aeP,B.biH])
x(A.j1,[B.chV,B.chR,B.chZ,B.ci_,B.haY,B.e5p,B.e5n,B.e6c,B.diE,B.cij,B.fQE])
x(A.jr,[B.bod,B.bAW])})()
A.jj(b.typeUniverse,JSON.parse('{"b92":{"abX":[]},"b93":{"axk":[]},"a0u":{"af":[],"x":[]},"aD5":{"ai":["a0u"]},"afj":{"aw":[],"x":[]},"X1":{"af":[],"x":[]},"X5":{"af":[],"x":[]},"aHa":{"ai":["X1"]},"aHd":{"ai":["X5"]},"bod":{"jr":[]},"X2":{"af":[],"x":[]},"aHb":{"ai":["X2"]},"a0t":{"af":[],"x":[]},"X3":{"af":[],"x":[]},"aeR":{"aw":[],"x":[]},"a0v":{"af":[],"x":[]},"a0s":{"af":[],"x":[]},"Ru":{"af":[],"x":[]},"a0x":{"af":[],"x":[]},"aeP":{"aw":[],"x":[]},"a0r":{"af":[],"x":[]},"a0y":{"af":[],"x":[]},"aD4":{"ai":["a0t"]},"bAW":{"jr":[]},"aHc":{"ai":["X3"]},"aD1":{"aw":[],"x":[]},"biG":{"aw":[],"x":[]},"aD6":{"ai":["a0v"]},"aD3":{"ai":["a0s"]},"aD9":{"ai":["Ru"]},"aD7":{"ai":["a0x"]},"aD2":{"ai":["a0r"]},"aD8":{"ai":["a0y"]},"biH":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n1"),k:x("Nm()"),o:x("bm<o,o>"),F:x("rS"),g:x("az<jW?>"),x:x("az<~>"),V:x("N<ac>"),O:x("N<u>"),W:x("N<bn>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jW>"),w:x("N<+file,name(ml,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jr>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<F>"),G:x("bn"),A:x("cB<ai<af>>"),n:x("ah<jW>"),j:x("ah<@>"),I:x("ah<F>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("iq"),e:x("iQB"),af:x("Fz"),U:x("jW"),b:x("cr"),C:x("aH"),aK:x("x5"),ab:x("Gm"),br:x("axk"),v:x("Zs"),N:x("o"),X:x("bq<G>"),Q:x("mx"),D:x("dG"),aw:x("b9<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cc<ah<jW>>"),aW:x("cc<dG?>"),aY:x("cc<~>"),cx:x("aeQ"),b1:x("bo<ah<jW>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFM"),bG:x("aJ2"),q:x("l6"),B:x("q9<Gm>"),c6:x("q9<abY>"),y:x("P"),i:x("G"),z:x("@"),S:x("F"),aQ:x("bn?"),_:x("ah<jW>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jW?"),R:x("aH?"),c:x("Zs?"),d:x("+answerQr,transfer(o,az<ah<jW>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,F)?"),L:x("+fileCount,mode,qrPayload(F,P1,o)?"),aX:x("+fileCount,qrPayload,token(F,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aex?"),bk:x("aFM?"),ag:x("aJ2?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b9S=new A.ax(C.aB,2,C.r,-1)
D.ce3=new A.a6(C.a5,C.a9,C.w,C.a6X,null,null)
D.bbt=new A.p(null,null,null,C.n3,null,D.ce3,C.m)
D.bcY=new A.p(null,null,null,C.n3,null,E.Jc,C.m)
D.aio=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajU=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akX=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amN=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h4v=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hjE=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FW,null,null,null,null,null,null,null,null,null)
D.du0=x([D.h4v,C.aj,D.hjE],y.p)
D.bCj=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.du0,null)
D.hoj=new A.D("Create your organization",null,C.fU,null,null,null,null,null,null,null,null,null)
D.h98=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FW,null,null,null,null,null,null,null,null,null)
D.dN3=x([D.hoj,C.aj,D.h98],y.p)
D.bCt=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dN3,null)
D.hkj=new A.D("Team Member sign-in",null,C.fU,null,null,null,null,null,null,null,null,null)
D.hd9=new A.D("Enter the access code and password from your organization.",null,H.FW,null,null,null,null,null,null,null,null,null)
D.dKu=x([D.hkj,C.aj,D.hd9],y.p)
D.bCD=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dKu,null)
D.bIU=new A.R(16,10,16,28)
D.bKh=new A.R(20,0,20,16)
D.bKO=new A.R(20,8,20,16)
D.apK=new A.R(24,22,24,20)
D.a4Z=new A.a_(63394,"MaterialIcons",!1)
D.at0=new A.a_(63515,"MaterialIcons",!1)
D.bYn=new A.a_(983813,"MaterialIcons",!1)
D.bVt=new A.a_(62867,"MaterialIcons",!1)
D.bZp=new A.ae(D.bVt,44,C.c,null,null,null)
D.c_w=new A.ae(C.ko,null,C.ab,null,null,null)
D.c0W=new A.ae(C.jJ,18,null,null,null,null)
D.c2Q=new A.ae(D.a4Z,26,C.c,null,null,null)
D.c3s=new A.ae(C.E6,null,null,null,null,null)
D.c43=new A.ae(C.Ec,null,null,null,null,null)
D.c5h=new A.ae(A_.a58,null,null,null,null,null)
D.c5E=new A.ae(C.i5,16,null,null,null,null)
D.c9o=new A.ae(C.u_,16,null,null,null,null)
D.bZH=new A.ae(C.mE,null,null,null,null,null)
D.cag=new A.ee(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4C=new A.ae(C.Is,null,null,null,null,null)
D.cal=new A.ee(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c4C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c_3=new A.ae(C.Ef,null,null,null,null,null)
D.caw=new A.ee(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c_3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.d_N=x([C.fz,C.b9,C.aB],y.O)
D.cg1=new A.a6(C.aw,C.aD,C.w,D.d_N,null,null)
D.d_7=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.TH=x([C.fz,C.aB],y.O)
D.U_=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nw=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dDX=x([C.ne,C.aB],y.O)
D.eEa={iceServers:0}
D.aOZ={urls:0}
D.dR0=new A.bm(D.aOZ,["stun:stun.l.google.com:19302"],y.o)
D.dR_=new A.bm(D.aOZ,["stun:stun1.l.google.com:19302"],y.o)
D.dia=x([D.dR0,D.dR_],A.as("N<a9<o,o>>"))
D.dQ5=new A.bm(D.eEa,[D.dia],A.as("bm<o,@>"))
D.Km=new B.P1(0,"lanDirect")
D.Vo=new B.P1(1,"cloudStash")
D.e7a=new B.P1(2,"inlineInstant")
D.Vp=new B.P1(3,"webrtcLink")
D.Bd=new B.P1(4,"videoCloud")
D.hjD=new A.D("Receive file",null,C.mY,null,null,null,null,null,null,null,null,null)
D.cPA=x([E.auQ,C.aa,D.hjD],y.p)
D.fxk=new A.c_(C.aJ,C.bc,C.i,C.l,null,C.p,null,0,D.cPA,null)
D.eLM=new A.C(C.cq,D.fxk,null)
D.fVI=new A.H(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.JH,null,null,null)
D.h58=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fVI,null,C.K,null,null,null,null,null,null,null)
D.eKU=new A.C(C.zL,D.h58,null)
D.bhy=new A.cp(C.z,null,null,D.eKU,null)
D.eS6=new A.cS(0,null,0,28,null,null,D.bhy,null)
D.eSq=new B.abY(0,"RTCDataChannelConnecting")
D.aUv=new B.abY(1,"RTCDataChannelOpen")
D.aUw=new B.abY(3,"RTCDataChannelClosed")
D.eSr=new B.Gn(0,"RTCIceConnectionStateNew")
D.eSs=new B.Gn(1,"RTCIceConnectionStateChecking")
D.eSt=new B.Gn(2,"RTCIceConnectionStateCompleted")
D.eSu=new B.Gn(3,"RTCIceConnectionStateConnected")
D.eSv=new B.Gn(4,"RTCIceConnectionStateCount")
D.eSw=new B.Gn(5,"RTCIceConnectionStateFailed")
D.eSx=new B.Gn(6,"RTCIceConnectionStateDisconnected")
D.aUx=new B.Gn(7,"RTCIceConnectionStateClosed")
D.aUy=new B.Zr(0,"RTCIceGatheringStateNew")
D.eSy=new B.Zr(1,"RTCIceGatheringStateGathering")
D.abE=new B.Zr(2,"RTCIceGatheringStateComplete")
D.abF=new B.Qc(0,"RTCPeerConnectionStateClosed")
D.aUz=new B.Qc(1,"RTCPeerConnectionStateFailed")
D.aUA=new B.Qc(2,"RTCPeerConnectionStateDisconnected")
D.aUB=new B.Qc(3,"RTCPeerConnectionStateNew")
D.aUC=new B.Qc(4,"RTCPeerConnectionStateConnecting")
D.aUD=new B.Qc(5,"RTCPeerConnectionStateConnected")
D.eSz=new B.Qd(0,"RTCSignalingStateStable")
D.eSA=new B.Qd(1,"RTCSignalingStateHaveLocalOffer")
D.eSB=new B.Qd(2,"RTCSignalingStateHaveRemoteOffer")
D.eSC=new B.Qd(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eSD=new B.Qd(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aUE=new B.Qd(5,"RTCSignalingStateClosed")
D.fCu=new A.av(160,48)
D.biP=new A.fp(2,null,null,null,null,C.aB,null,null,null,null)
D.fE2=new A.a4(16,16,D.biP,null)
D.h8t=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fFA=new A.b3(D.h8t,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hge=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fFE=new A.b3(D.hge,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hpn=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fFL=new A.b3(D.hpn,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h82=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fGa=new A.b3(D.h82,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkv=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aXU=new A.b3(D.hkv,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hm0=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fGE=new A.b3(D.hm0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hqW=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fGV=new A.b3(D.hqW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoN=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fH_=new A.b3(D.hoN,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hq5=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new A.b3(D.hq5,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h6C=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.b3(D.h6C,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hia=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fIF=new A.b3(D.hia,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.haP=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fJb=new A.b3(D.haP,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hr0=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fJf=new A.b3(D.hr0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h6S=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fJl=new A.b3(D.h6S,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5v=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fJA=new A.b3(D.h5v,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h27=new A.D("NGMY DOC SHARE",null,C.aZo,null,null,null,null,null,null,null,null,null)
D.h3z=new A.D("Show this to sender",null,C.iY,null,null,null,null,null,null,null,null,null)
D.h4D=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h9A=new A.D("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h9Y=new A.D("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hb_=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.hbx=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.heq=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hhh=new A.D("Send to their Doc Share",null,C.mW,null,null,null,null,null,null,null,null,null)
D.hhB=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hhX=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hiy=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hiF=new A.D("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hj3=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hmy=new A.D("Share files & videos\nwith a scan.",null,C.aZr,null,null,null,null,null,null,null,null,null)
D.hmS=new A.D("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hUZ=new B.a0r(null)
D.af7=new B.aeQ(0,"docShare")
D.af8=new B.aeQ(1,"gate")
D.Yr=new B.aeQ(2,"gateNoIndividual")})();(function staticFields(){$.aS1=null
$.fAk=function(){var x=y.N
return A.S(x,x)}()
$.HC=A.S(y.N,y.D)
$.aj_=A.S(y.N,A.as("ml"))
$.SV=A.S(y.N,y.D)
$.fB4=A.S(y.N,A.as("aex"))
$.cic=A.S(y.S,A.as("bBk"))
$.hFz=1
$.iwG=null
$.iwF=null
$.inc=null
$.htG=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iR6","hZ3",()=>new B.cws())
x($,"iP_","hy4",()=>C.a.q(A.by(A.by(A.by(A.I9(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["mS4BGpgH8/CkWQMexBCN/ihvcmc="]=a.current})($__dart_deferred_initializers__);