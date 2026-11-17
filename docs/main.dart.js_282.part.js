((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,F,H,O,E,P,G,Q,R,S,I,K,B={csy:function csy(){},
i0F(d){var x=null,w=new B.b6s(d,D.eDu,new A.pR(x,x,y.c6),new A.pR(x,x,y.B))
w.bCE(d)
return w},
b6s:function b6s(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cst:function cst(d){this.a=d},
csu:function csu(d){this.a=d},
csv:function csv(d){this.a=d},
css:function css(d){this.a=d},
csw:function csw(d){this.a=d},
i0G(d,e){var x=y.N
x=new B.b6t(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCF(d,e)
return x},
b6t:function b6t(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
csz:function csz(d){this.a=d},
csA:function csA(d){this.a=d},
csB:function csB(d){this.a=d},
csC:function csC(d){this.a=d},
csD:function csD(d){this.a=d},
csE:function csE(d){this.a=d},
csF:function csF(d){this.a=d},
csG:function csG(d){this.a=d},
hf9(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x2.GV(x,"ngmy_doc_share_v1",new B.fxF(),1)},
i7n(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.wR(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cK.aN(d)
return x}catch(w){return v}return v},
Si(d,e){return B.imO(d,e)},
imO(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Si=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPR
x=7
return A.b(o==null?$.aPR=B.hf9():o,$async$Si)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.ml(s,"blobs","readwrite")
C.iE.mh(J.mk(q,"blobs"),r,d)
x=8
return A.b(J.oy(q),$async$Si)
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
return A.i($async$Si,w)},
Sh(d){return B.imN(d)},
imN(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPR
x=7
return A.b(o==null?$.aPR=B.hf9():o,$async$Sh)
case 7:s=f
r=J.ml(s,"blobs","readonly")
x=8
return A.b(C.iE.xO(J.mk(r,"blobs"),d),$async$Sh)
case 8:q=f
x=9
return A.b(J.oy(r),$async$Sh)
case 9:o=B.i7n(q)
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
return A.i($async$Sh,w)},
aid(d){return B.imM(d)},
imM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aid=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPR
x=7
return A.b(p==null?$.aPR=B.hf9():p,$async$aid)
case 7:s=f
r=J.ml(s,"blobs","readwrite")
C.iE.Gr(J.mk(r,"blobs"),d)
x=8
return A.b(J.oy(r),$async$aid)
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
fxF:function fxF(){},
i9N(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brh(w,v))}return u},
hGy(d,e){var x,w={},v=A.aYu("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fX8(w,v,e)
C.x4.zb(v,"change",new B.fXa(w,v,!1))
C.x4.zb(v,"cancel",new B.fX9(w))
$.eY.mJ()
v.click()
A.bN(C.alQ,new B.fX7(w),y.H)},
fX8:function fX8(d,e,f){this.a=d
this.b=e
this.c=f},
fXa:function fXa(d,e,f){this.a=d
this.b=e
this.c=f},
fX9:function fX9(d){this.a=d},
fX7:function fX7(d){this.a=d},
DH(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DH=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUF()?3:4
break
case 3:x=5
return A.b(B.hBd(e,d,s,!0,!1,f,g,h,!1,i),$async$DH)
case 5:x=1
break
case 4:x=6
return A.b(B.RV(d,s,f,g,h,i),$async$DH)
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
return A.b(B.Jo(s,d),$async$DH)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fta(s,d),$async$DH)
case 14:x=12
return A.b(r.hBd(q,p,o,n,m,l,k,j,a1,i),$async$DH)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ed(new B.fXn(s,i,d,f,g,h),!1,null,y.H)),$async$DH)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ed(new B.fXo(s,i,d,f,g,h),!1,null,y.H)),$async$DH)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DH,w)},
RV(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RV=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1d(e),$async$RV)
case 3:u=k
x=4
return A.b(B.aqR(d,e,!1),$async$RV)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jo(e,d),$async$RV)
case 7:if(k){v=D.adm
x=1
break}x=8
return A.b(B.Wb(e),$async$RV)
case 8:v=t?D.X5:D.adn
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1b(d,e)){v=D.adm
x=1
break}x=11
return A.b(B.Wb(e),$async$RV)
case 11:v=t?D.X5:D.adn
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.ha2(d,e)){v=D.adm
x=1
break}x=14
return A.b(B.Wb(e),$async$RV)
case 14:v=D.X5
x=1
break
case 13:v=t?D.X5:D.adn
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RV,w)},
fta(d,e){var x=0,w=A.j(y.y),v
var $async$fta=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1b(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1d(d),$async$fta)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fta,w)},
hBd(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ed(new B.fAj(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hw6(d,e,f,g,h,i,j){return new B.a_p(e,j,d,g,h,i,f,null)},
fCd(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fCd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fCg(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fCd)
case 3:r=f
t.U$=u
t.R$=0
s.U$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCd,w)},
fCI(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fCI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fCK(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fCI)
case 3:q=f
t.U$=u
t.R$=0
s.U$=u
s.R$=0
r.U$=u
r.R$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCI,w)},
hfl(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bz(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fPy(d,e){var x=0,w=A.j(y.H),v
var $async$fPy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wb(e),$async$fPy)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eq()
case 1:return A.h(v,w)}})
return A.i($async$fPy,w)},
fXn:function fXn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXo:function fXo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adt:function adt(d,e){this.a=d
this.b=e},
fAj:function fAj(d,e,f,g,h,i,j,k,l){var _=this
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
aBe:function aBe(){this.c=this.a=this.d=null},
dcX:function dcX(d,e){this.a=d
this.b=e},
dcU:function dcU(d){this.a=d},
dcW:function dcW(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcZ:function dcZ(){},
dcY:function dcY(d){this.a=d},
adX:function adX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDT:function aDT(d,e){this.a=d
this.b=e},
aH3:function aH3(d,e,f){this.a=d
this.b=e
this.c=f},
fCg:function fCg(d,e,f){this.a=d
this.b=e
this.c=f},
fCe:function fCe(d){this.a=d},
fCf:function fCf(d,e,f){this.a=d
this.b=e
this.c=f},
fCK:function fCK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCJ:function fCJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cee(d,e,f,g,h){return B.hWw(d,e,f,g,h)},
hWw(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cee=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iG(r.dN(d,new B.cef(s,e,h,g,f,q),y.g),y.l),$async$cee)
case 3:r=p.aT(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cee,w)},
b18(d,e,f,g,h){return B.hWx(d,e,f,g,h)},
hWx(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b18=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awo("GET",d)
o=A.h6r()
if(o==null)o=new A.MI(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.GV),$async$b18)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D_(),$async$b18)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cg(q,h,o,e,f,"Received via QR")
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
return A.i($async$b18,w)},
b17(d){return B.hWu(d)},
hWu(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b17=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.ov),$async$b17)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.mg(A.me(p.e)).cI(0,p.w),null)
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
return A.i($async$b17,w)},
ced(d){return B.hWv(d)},
hWv(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ced=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.qD),$async$ced)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mg(A.me(q.e)).cI(0,q.w)
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
return A.i($async$ced,w)},
cef:function cef(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jG:function jG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jm(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hWC(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jm(C.a.b4(t,u.length))}return null},
hWD(d){var x=B.Jm(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hWy(){var x,w=$.ov(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hf(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a82(d){return B.hWz(d)},
hWz(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a82=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bN),$async$a82)
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
return A.i($async$a82,w)},
a83(d,e){return B.hWA(d,e)},
hWA(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a83=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hM(d,e,!1,!1,C.cO,null),$async$a83)
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
return A.i($async$a83,w)},
Cf(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cf)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jm(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a84(r),$async$Cf)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a82("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cf)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jm(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cf)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hWy()
x=14
return A.b(B.a84(m),$async$Cf)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a83("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cf)
case 15:k=f
x=16
return A.b(B.a83("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cf)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cf)
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
return A.i($async$Cf,w)},
a84(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a84=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jm(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a82("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a84)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a84,w)},
a85(d,e,f,g){return B.hWE(d,e,f,g)},
hWE(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a85=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jm(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a84(r),$async$a85)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cE(d,0,new B.cel())>1048576||g.aU(d,new B.cem())){v=B.Fi(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8g("myCode",d,a0),$async$a85)
case 4:u=a3
try{t=C.W.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fi(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1g(u,g.gJ(d),a0),$async$a85)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ov().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.cen(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b19(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a85)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a85,w)},
Fi(d,e,f,g,h){return B.hWB(d,e,f,g,h)},
hWB(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fi=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Fi)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cE(a6,0,new B.ceh())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ov().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cR.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jq(a9,q)
a0=new A.Lf(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fi)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f1().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.po(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abI(a1.a,a4,"media",a1.d,a2).xL(m,n,new A.Ex(!0,q.c)),$async$Fi)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fi)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSr(r),$async$Fi)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.cei(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b19(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fi)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSr(r),$async$Fi)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fi,w)},
b19(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b19=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a82(t),$async$b19)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.ceg(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a83(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b19,w)},
Oj(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oj=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a82("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oj)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aT(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b1a(k,a0),$async$Oj)
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
return A.b(B.b1f(h),$async$Oj)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wi(g,a0),$async$Oj)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cej(),q),n)
d=A.C(new A.Y(r,new B.cek(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cX(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a83("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Oj)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
b1a(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aT(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a8(p)
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
break}i=B.iqI(k,j)
C.d.u(s,i)
x=5
return A.b(B.DF(l,m,"Received via My Code",t,e,i),$async$b1a)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSr(s),$async$b1a)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1a,w)},
cel:function cel(){},
cem:function cem(){},
cen:function cen(){},
ceh:function ceh(){},
cei:function cei(){},
ceg:function ceg(){},
cej:function cej(){},
cek:function cek(){},
fXk(d,e){var x=0,w=A.j(y.H)
var $async$fXk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ed(new B.fXl(e),!1,null,y.H)),$async$fXk)
case 2:return A.h(null,w)}})
return A.i($async$fXk,w)},
bGl(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ed(new B.fXm(g,e,f),!1,null,y.y)),$async$bGl)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGl,w)},
fXl:function fXl(d){this.a=d},
fXm:function fXm(d,e,f){this.a=d
this.b=e
this.c=f},
W8:function W8(d,e){this.c=d
this.a=e},
aFf:function aFf(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
Wc:function Wc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFi:function aFi(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_S:function e_S(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_U:function e_U(d){this.a=d},
e_R:function e_R(d,e){this.a=d
this.b=e},
e_V:function e_V(d){this.a=d},
e_W:function e_W(d){this.a=d},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
e0_:function e0_(d){this.a=d},
e02:function e02(){},
e00:function e00(d){this.a=d},
e01:function e01(d,e){this.a=d
this.b=e},
blo:function blo(){},
W9:function W9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFg:function aFg(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZK:function dZK(d){this.a=d},
dZL:function dZL(d){this.a=d},
ha3(d){var x=d.i7
if(x>=0)return C.o.M(x)
return 10},
hWG(d){var x=d.l4
if(x>=0)return x
return 4.99},
hWF(d){var x=d.m8,w=y.N
w=x.jp(x,new B.cep(),w,w)
return w},
hr7(d){var x=d.l5,w=y.N
w=x.jp(x,new B.ceq(),w,w)
return w},
b1d(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1d)
case 7:s=f
r=A.w(p)
r=A.aV(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b1d,w)},
a87(d,e){var x=0,w=A.j(y.H),v,u
var $async$a87=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a87)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a87)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a87,w)},
Wb(d){var x=0,w=A.j(y.H),v,u
var $async$Wb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wb)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wb,w)},
ha2(d,e){var x,w,v
if(B.hWG(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hWF(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b1b(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hr7(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hr8(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hr7(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
aqS(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqS)
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
return A.i($async$aqS,w)},
aqT(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqS(d),$async$aqT)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqT)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqT,w)},
aqR(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.ha3(d)
if(u<=0){v=!1
x=1
break}if(B.ha2(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqS(e),$async$aqR)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqR,w)},
b1c(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jo(e,d),$async$b1c)
case 3:if(g){v=-1
x=1
break}u=B.ha3(d)
if(u<=0){v=-1
x=1
break}if(B.ha2(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqS(e),$async$b1c)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1c,w)},
ces(d,e,f){var x=0,w=A.j(y.y),v
var $async$ces=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jo(e,d),$async$ces)
case 3:if(h){v=!1
x=1
break}v=B.aqR(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ces,w)},
cer(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cer=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.ces(d,u,i.gUF()),$async$cer)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cer,w)},
a86(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a86=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUF()){v=!0
x=1
break}if(B.b1b(d,u)){v=!0
x=1
break}x=5
return A.b(A.lC(u,C.Uk),$async$a86)
case 5:x=k?3:4
break
case 3:B.hr8(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a86)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lh(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Uk,"Doc Share for Organizations"),$async$a86)
case 7:if(!k){v=!1
x=1
break}B.hr8(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a86)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a86,w)},
cep:function cep(){},
ceq:function ceq(){},
fYh(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fYh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fYh)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fpr.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hP([r],e.c))
s.toString
$.fpr.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYh,w)},
isR(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fpr.bq($.fpr,new B.fYj(d))},
fYj:function fYj(d){this.a=d},
fr3(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fr3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hP([d],f))
s.toString
u=A.n5(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jq,null,y.H),$async$fr3)
case 3:C.Br.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fr3,w)},
ah6(d,e,f){var x=0,w=A.j(y.H),v
var $async$ah6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fq7.n(0,d,new B.ada(A.bp(e,!0,v)))
x=3
return A.b(A.aA(),$async$ah6)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ah6)
case 2:return A.h(null,w)}})
return A.i($async$ah6,w)},
ah0(d){return B.ibF(d)},
ibF(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fq7.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah0)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b7(s,new B.fuK(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.ada(r)
$.fq7.n(0,d,p)
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
break}u=new Uint8Array(A.cf(e))
$.H2.n(0,d,u)
x=3
return A.b(B.Si(d,u),$async$RL)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
aQb(d){return B.ibD(d)},
ibD(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H2.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sh(d),$async$aQb)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H2.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQb)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cK.aN(r)
x=!J.ct(q)?9:10
break
case 9:B.RL(d,q)
x=11
return A.b(J.hd(s,d),$async$aQb)
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
return A.i($async$aQb,w)},
i7P(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cf(J.eF(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cf(A.wR(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
return A.f4(null,y.K)},
a2U(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bl($.bE,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fD(r,"loadend",new B.fAv(r,t),!1,s)
A.fD(r,"error",new B.fAw(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iJ(0,C.Ob,new B.fAx())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2U,w)},
aQv(d,e,f){return B.ie1(d,e,f)},
ie1(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQv=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2U(i),$async$aQv)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Si(o,p),$async$aQv)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ah6(k,j,s),$async$aQv)
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
return A.i($async$aQv,w)},
aQu(d,e,f){return B.ie0(d,e,f)},
ie0(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQu=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQv(d,e,f),$async$aQu)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2U(f),$async$aQu)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H2.n(0,s,r)
$.S2.n(0,s,r)
x=11
return A.b(B.RL(s,r),$async$aQu)
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
return A.i($async$aQu,w)},
Cg(d,e,f,g,h,i){return B.hWP(d,e,f,g,h,i)},
hWP(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cg=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jG(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1j(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RL(s,d),$async$Cg)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cg)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cV.gcu().aN(d)),$async$Cg)
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
return A.b(B.Bf(e),$async$Cg)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hc(e,j),$async$Cg)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cg,w)},
Wd(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wd=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bf(d),$async$Wd)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cR.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hra(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jG(m,n,k,l,j,"From folder",null,B.b1j(),null)
$.ahw.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2U(o),$async$Wd)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H2.n(0,h,g)
$.S2.n(0,h,g)
B.RL(h,g)
x=9
break
case 10:x=11
return A.b(B.aQu(d,m,o),$async$Wd)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hc(d,t),$async$Wd)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wd,w)},
ha7(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$ha7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hra(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jp(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cg(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ha7,w)},
Jp(d,e,f,g,h,i){return B.hWO(d,e,f,g,h,i)},
hWO(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jp=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lf(A.dD(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jp)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.SQ(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kL(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Si(k,l),$async$Jp)
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
return A.b(j.a1(0),$async$Jp)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Si(k,new Uint8Array(A.cf(n))),$async$Jp)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ah6(r,q,g),$async$Jp)
case 16:f=new B.jG(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1j(),null)
x=17
return A.b(B.Bf(d),$async$Jp)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hc(d,e),$async$Jp)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jp,w)},
Wf(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wf=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahw.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2U(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah0(s),$async$Wf)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sh(u[o]),$async$Wf)
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
v=A.wR(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S2.h(0,s)
if(i==null)i=$.H2.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rW(d,e),$async$Wf)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S2.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wR(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
hra(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rW(d,e){return B.hWQ(d,e)},
hWQ(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rW=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S2.h(0,f)
if(e==null)e=$.H2.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahw.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2U(s),$async$rW)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H2.n(0,f,r)
$.S2.n(0,f,r)
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
return A.b(B.ah0(f),$async$rW)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aA1(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sh(g[l]),$async$rW)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqa()
if(!C.aI.gau(r)){$.H2.n(0,f,r)
$.S2.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQb(f),$async$rW)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S2.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wf(a0,a1,0,g),$async$rW)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cf(i))
$.H2.n(0,f,h)
$.S2.n(0,f,h)
B.RL(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rW,w)},
hWT(d){var x,w,v=$.ahw.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hWU(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hP([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hWR(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqZ(d,e,f,g,h){return B.hWS(d,e,f,g,h)},
hWS(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqZ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahw.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2U(s),$async$aqZ)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rW(g,e),$async$aqZ)
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
return A.b(n.iC(d).xL(h,r,new A.Ex(!0,e.c)),$async$aqZ)
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
return A.i($async$aqZ,w)},
hrc(d,e,f,g,h){var x,w,v,u,t=$.hrb
$.hrb=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ceD.n(0,t,new B.byf(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aA1(u)))
return t},
ha8(d){var x=0,w=A.j(y.H)
var $async$ha8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$ha8,w)},
Jq(d,e){var $async$Jq=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahw.h(0,h)
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
return A.qx(B.Wf(d,e,p,o<q?o:q),$async$Jq,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qx(A.GB(n),$async$Jq,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qx(B.ah0("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jq,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qx(B.Sh(h[l]),$async$Jq,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qx(A.GB(k),$async$Jq,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qx(B.rW(d,e),$async$Jq,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qx(A.GB(A.wR(j,p,o<i?o:i)),$async$Jq,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qx(null,0,w)
case 2:return A.qx(t.at(-1),1,w)}})
var x=0,w=A.hA4($async$Jq,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hBU(w)},
b1l(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ceD.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5U(),$async$b1l)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1l,w)},
We(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$We=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceD.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5U(),$async$We)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ah6(r.c,u,r.z),$async$We)
case 4:t=new B.jG(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1j(),null)
u=r.a
x=5
return A.b(B.Bf(u),$async$We)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hc(u,s),$async$We)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$We,w)},
a8d(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceD.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aid(u[s]),$async$a8d)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
ceF(d,e,f){var x=0,w=A.j(y.H)
var $async$ceF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDi(d,e,f),$async$ceF)
case 2:return A.h(null,w)}})
return A.i($async$ceF,w)},
ceG(d,e,f){var x=0,w=A.j(y.H)
var $async$ceG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDj(d,e,f),$async$ceG)
case 2:return A.h(null,w)}})
return A.i($async$ceG,w)},
Fj(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bf(d),$async$Fj)
case 2:p=g
J.nT(p,new B.ceE(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H2.W(0,v)
$.ahw.W(0,e)
x=3
return A.b(B.ah0(v),$async$Fj)
case 3:u=g
$.fq7.W(0,v)
x=4
return A.b(A.aA(),$async$Fj)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fj)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fj)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aid(s[q]),$async$Fj)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aid(v),$async$Fj)
case 13:x=14
return A.b(B.Hc(d,p),$async$Fj)
case 14:return A.h(null,w)}})
return A.i($async$Fj,w)},
b1k(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rW(d,e),$async$b1k)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fr3(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1k,w)},
Bf(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bf)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fAy(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bf,w)},
Hc(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hc)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fEI(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hc)
case 3:return A.h(null,w)}})
return A.i($async$Hc,w)},
bDi(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bf(d),$async$bDi)
case 3:u=h
t=J.cD(u)
s=t.bk(u,new B.fyJ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGh(f))
x=4
return A.b(B.Hc(d,u),$async$bDi)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDi,w)},
bDj(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bf(d),$async$bDj)
case 3:u=h
t=J.cD(u)
s=t.bk(u,new B.fyK(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPf(f))
x=4
return A.b(B.Hc(d,u),$async$bDj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDj,w)},
ada:function ada(d){this.a=d},
fuK:function fuK(){},
fAv:function fAv(d,e){this.a=d
this.b=e},
fAw:function fAw(d){this.a=d},
fAx:function fAx(){},
ceE:function ceE(d){this.a=d},
byf:function byf(d,e,f,g,h,i,j,k,l){var _=this
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
fAy:function fAy(){},
fEI:function fEI(){},
fyJ:function fyJ(d){this.a=d},
fyK:function fyK(d){this.a=d},
a8e(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.ceJ())?3:4
break
case 3:x=5
return A.b(B.b1m(d,e),$async$a8e)
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
return A.b(B.b1h(s),$async$a8e)
case 10:case 9:if(g){v=new A.R7(1,D.TY,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wg(d,e),$async$a8e)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wl(!0,!0,d,e),$async$a8e)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ol(d,D.As,e,t)
v=new A.R7(p,D.As,t)
x=1
break}v=B.ceI(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
Wg(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8g(null,d,e),$async$Wg)
case 3:p=g
try{u=C.W.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1g(p,d.length,e),$async$Wg)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ceG(e,C.d.gH(d).a,r.b),$async$Wg)
case 7:case 6:q=r.a
x=8
return A.b(B.Ol(d,D.TY,e,q),$async$Wg)
case 8:v=new A.R7(d.length,D.TY,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
Wh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mQ(D.n9)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8f(d,e),$async$Wh)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ceB(s,d,e,t),$async$Wh)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1h(t),$async$Wh)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rW(e,d),$async$Wh)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wg(A.a([d],y.r),e),$async$Wh)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
Wj(){var x=0,w=A.j(y.H)
var $async$Wj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ha1(),$async$Wj)
case 2:x=3
return A.b(B.aSN(),$async$Wj)
case 3:return A.h(null,w)}})
return A.i($async$Wj,w)},
a8f(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1j()
x=3
return A.b(B.ceF(e,d.a,u),$async$a8f)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
Ol(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ol=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.TY&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b4(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8f(p,f),$async$Ol)
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
return A.b(B.ceA(o,p,u,f),$async$Ol)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ceB(o,p,f,t),$async$Ol)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cez(o,u,p,f),$async$Ol)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ol,w)},
b1m(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceH(e,d),$async$b1m)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wl(!1,!0,d,e),$async$b1m)
case 4:u=g
if(u!=null){t=u.b
v=new A.R7(u.a,D.As,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1m,w)},
ceH(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ceH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wf(d,s,0,1),$async$ceH)
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
return A.i($async$ceH,w)},
ceI(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ceI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8g(null,d,e),$async$ceI)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hr9(u)
if(t.length>800){v=null
x=1
break}v=new A.R7(d.length,D.dTS,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceI,w)},
ar_(d,e,f){return B.hWX(d,e,f)},
hWX(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ar_=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.ha6(g)?3:4
break
case 3:x=5
return A.b(B.ceC(g),$async$ar_)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fk(d,a0,s)
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
return A.b(B.b1f(q),$async$ar_)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wi(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.ha5(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wi(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jr(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jr(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Jr(h,d,a0)
x=1
break}if(J.eK(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wi(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ar_,w)},
Jr(d,e,f){return B.hWV(d,e,f)},
hWV(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jr=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b4(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b4(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cC(A.w(s)+"/manifest.json",0,null)
q=A.cC(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b17(r),$async$Jr)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b17(A.cC(s,0,null)),$async$Jr)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cee(o,r,a1,n,a2),$async$Jr)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ced(q),$async$Jr)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wi(l,a2),$async$Jr)
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
return A.i($async$Jr,w)},
a8g(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8g=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rW(f,r),$async$a8g)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cV.gcu().aN(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.W.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
Wi(d,e){return B.hWW(d,e)},
hWW(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wi=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.W.aP(0,a2,null)
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
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cK.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cg(i,a3,d,k,l,o),$async$Wi)
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
return A.i($async$Wi,w)},
Ok:function Ok(d,e){this.a=d
this.b=e},
ceJ:function ceJ(){},
a2t(d){var x=A.P(d).ax.a===C.I,w=x?D.aj6:D.agz,v=x?D.akR:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.ai3:C.bk
return new A.aIj([w,s,v,u,t,x?C.fq:C.bQ])},
hHB(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h1z(e),d,null,!0,!0,y.N)},
ceo(d,e,f,g,h,i,j,k,l){return new B.Wa(e,l,d,f,k,j,g,h,i,null)},
a_r(d,e,f,g,h,i,j){return new B.bfX(g,h,j,e,i,d,f,null)},
h1z:function h1z(d){this.a=d},
a_o:function a_o(d,e){this.c=d
this.a=e},
aBd:function aBd(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcT:function dcT(d){this.a=d},
dcR:function dcR(d){this.a=d},
dcS:function dcS(d){this.a=d},
bxS:function bxS(){},
Wa:function Wa(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFh:function aFh(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_Q:function e_Q(d){this.a=d},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_e:function e_e(d,e){this.a=d
this.b=e},
dZN:function dZN(d,e,f){this.a=d
this.b=e
this.c=f},
dZM:function dZM(d){this.a=d},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZT:function dZT(d,e,f){this.a=d
this.b=e
this.c=f},
dZS:function dZS(d){this.a=d},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_F:function e_F(d){this.a=d},
e_a:function e_a(d,e,f){this.a=d
this.b=e
this.c=f},
e_7:function e_7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZR:function dZR(d){this.a=d},
e_i:function e_i(d){this.a=d},
e_h:function e_h(){},
dZX:function dZX(d){this.a=d},
e_B:function e_B(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_9:function e_9(d,e){this.a=d
this.b=e},
e_u:function e_u(d,e){this.a=d
this.b=e},
e_q:function e_q(d){this.a=d},
e_p:function e_p(d){this.a=d},
e_r:function e_r(){},
e_s:function e_s(){},
e_t:function e_t(d,e){this.a=d
this.b=e},
e_v:function e_v(){},
e_w:function e_w(d){this.a=d},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_j:function e_j(d){this.a=d},
e_k:function e_k(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_m:function e_m(d){this.a=d},
e_n:function e_n(d){this.a=d},
dZU:function dZU(){},
dZV:function dZV(d){this.a=d},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZP:function dZP(d,e,f){this.a=d
this.b=e
this.c=f},
e_b:function e_b(d){this.a=d},
e_c:function e_c(d,e,f){this.a=d
this.b=e
this.c=f},
e_5:function e_5(d,e){this.a=d
this.b=e},
e_1:function e_1(d){this.a=d},
dZZ:function dZZ(d,e,f){this.a=d
this.b=e
this.c=f},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d){this.a=d},
e_4:function e_4(){},
e_6:function e_6(d,e){this.a=d
this.b=e},
e__:function e__(d){this.a=d},
dZY:function dZY(d,e,f){this.a=d
this.b=e
this.c=f},
e_0:function e_0(){},
e_g:function e_g(d){this.a=d},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_x:function e_x(d){this.a=d},
e_y:function e_y(d,e){this.a=d
this.b=e},
e_z:function e_z(d){this.a=d},
e_N:function e_N(d){this.a=d},
e_L:function e_L(d){this.a=d},
e_M:function e_M(d){this.a=d},
e_O:function e_O(){},
e_P:function e_P(d,e){this.a=d
this.b=e},
e_H:function e_H(d,e){this.a=d
this.b=e},
e_I:function e_I(d,e,f){this.a=d
this.b=e
this.c=f},
e_G:function e_G(d,e,f){this.a=d
this.b=e
this.c=f},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_K:function e_K(d,e){this.a=d
this.b=e},
aBa:function aBa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfW:function bfW(d,e,f){this.c=d
this.d=e
this.a=f},
dcP:function dcP(){},
dcQ:function dcQ(){},
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
ddc:function ddc(){},
ddb:function ddb(d){this.a=d},
a_q:function a_q(d,e,f){this.c=d
this.d=e
this.a=f},
aBf:function aBf(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dd8:function dd8(d){this.a=d},
dd9:function dd9(d,e,f){this.a=d
this.b=e
this.c=f},
dda:function dda(d,e){this.a=d
this.b=e},
dd6:function dd6(d,e){this.a=d
this.b=e},
dd4:function dd4(d){this.a=d},
dd2:function dd2(d){this.a=d},
dd_:function dd_(d){this.a=d},
dd5:function dd5(d){this.a=d},
dd1:function dd1(d){this.a=d},
dd7:function dd7(d){this.a=d},
dd3:function dd3(d){this.a=d},
dd0:function dd0(d){this.a=d},
a_n:function a_n(d,e,f){this.c=d
this.d=e
this.a=f},
aBc:function aBc(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcM:function dcM(d){this.a=d},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcN:function dcN(d){this.a=d},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcO:function dcO(d){this.a=d},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d){this.a=d},
dcH:function dcH(d,e){this.a=d
this.b=e},
dcI:function dcI(d){this.a=d},
QG:function QG(d,e,f){this.c=d
this.d=e
this.a=f},
aBi:function aBi(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddp:function ddp(d){this.a=d},
ddq:function ddq(d){this.a=d},
ddr:function ddr(d){this.a=d},
dds:function dds(d){this.a=d},
ddt:function ddt(d,e){this.a=d
this.b=e},
ddu:function ddu(d){this.a=d},
ddw:function ddw(d){this.a=d},
ddv:function ddv(d){this.a=d},
a_s:function a_s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBg:function aBg(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddl:function ddl(d,e){this.a=d
this.b=e},
ddm:function ddm(d,e){this.a=d
this.b=e},
ddd:function ddd(d,e,f){this.a=d
this.b=e
this.c=f},
dde:function dde(d){this.a=d},
ddf:function ddf(){},
ddk:function ddk(){},
ddg:function ddg(d,e){this.a=d
this.b=e},
ddh:function ddh(d,e){this.a=d
this.b=e},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddj:function ddj(d,e){this.a=d
this.b=e},
ads:function ads(d,e){this.c=d
this.a=e},
dcE:function dcE(d){this.a=d},
a_m:function a_m(d){this.a=d},
aBb:function aBb(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_t:function a_t(d,e){this.c=d
this.a=e},
aBh:function aBh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddo:function ddo(d){this.a=d},
ddn:function ddn(d){this.a=d},
bfX:function bfX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hWY(){var x,w=$.ov(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hf(v)},
Om(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Om=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Om)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Om)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
a8h(d){return B.hWZ(d)},
hWZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8h)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cO,null),$async$a8h)
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
return A.i($async$a8h,w)},
Wk(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(),$async$Wk)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dL(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8h(s),$async$Wk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
Wl(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Wl)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceL(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hWY()
t=A.U(u).k("N<1,a9<n,aF>>")
r=A.C(new A.N(u,new B.ceM(s),t),t.k("ak.E"))
x=6
return A.b(B.Om(),$async$Wl)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8h(q),$async$Wl)
case 7:x=8
return A.b(B.a8i(r,u,g,s),$async$Wl)
case 8:v=new A.brM(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
ar0(d){var x=0,w=A.j(y.y),v,u,t
var $async$ar0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Om(),$async$ar0)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar0,w)},
ceN(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Om(),$async$ceN)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a8(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceN,w)},
a8i(d,e,f,g){return B.hX_(d,e,f,g)},
hX_(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8i=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqZ("media",r,new B.ceK(s,e,g),f,q),$async$a8i)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wk(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8i)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wk(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8i)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wk(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8i)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8i,w)},
Fk(d,e,f){return B.hX0(d,e,f)},
hX0(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fk=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$Fk)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ar0(b3),$async$Fk)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.iR,null,g),$async$Fk)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ar0(b3),$async$Fk)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Om(),$async$Fk)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
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
a1=J.a8(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a8(a7)
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
b0=A.po(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abI(a8.a,b0,"media",a8.d,a9).Dk(m)
k=A.cC(l,0,null)
x=17
return A.b(B.b18(k,n,o,s,b7),$async$Fk)
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
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
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
a8=A.po(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abI(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fk)
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
a0=A.dL(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8h(e),$async$Fk)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fk,w)},
ceL:function ceL(){},
ceM:function ceM(d){this.a=d},
ceK:function ceK(d,e,f){this.a=d
this.b=e
this.c=f},
aSN(){var x=0,w=A.j(y.H),v,u
var $async$aSN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i77=null
v=y.H
u=A.dN(null,v)
x=2
return A.b(u,$async$aSN)
case 2:u=A.dN(null,v)
x=3
return A.b(u,$async$aSN)
case 3:u=$.hfy
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dN(u,v),$async$aSN)
case 4:$.hfy=$.ifP=$.ifQ=null
return A.h(null,w)}})
return A.i($async$aSN,w)},
fEj(d){var x=0,w=A.j(y.H),v,u
var $async$fEj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aa0){x=1
break}u=new A.bl($.bE,y.d4)
d.c=new B.fEk(new A.c3(u,y.aY))
x=3
return A.b(u.iJ(0,C.ie,new B.fEl()),$async$fEj)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fEj,w)},
ifN(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hWI(x):x},
hfC(d){var x=0,w=A.j(y.T),v,u,t
var $async$hfC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,13))
if(C.a.a_(u,"WR")){v=B.ar2(u)
x=1
break}v=B.ha5(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfC,w)},
hfB(d){var x=0,w=A.j(y.T),v,u,t
var $async$hfB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,14))
if(C.a.a_(u,"WR")){v=B.ar3(u)
x=1
break}v=B.ha5(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfB,w)},
fY0(d){var x=0,w=A.j(y.T),v
var $async$fY0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar3(d),$async$fY0)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fY0,w)},
bEc(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hfB(d),$async$bEc)
case 3:q=f
if(q==null){x=1
break}t=C.W.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEc,w)},
frS(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$frS=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.We(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cg(d.aqa(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frS,w)},
He(d,e,f){return B.ii2(d,e,f)},
ii2(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$He=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hfC(a1),$async$He)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.W.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a8(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b4(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hJB().aGy(D.dGe,null),$async$He)
case 4:l=d.hfy=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aA1(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bl($.bE,y.b1)
l.y=new B.fEV(f,k,new B.fEW(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8W(0,new B.Yu(r,"offer")),$async$He)
case 5:d=l
x=7
return A.b(l.amB(0),$async$He)
case 7:x=6
return A.b(d.a8O(0,a4),$async$He)
case 6:x=8
return A.b(B.fEj(l),$async$He)
case 8:x=9
return A.b(l.aqX(),$async$He)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ifN(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ar4(m,h),$async$He)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hr9(h)
case 11:v=new A.br1(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$He,w)},
fEk:function fEk(d){this.a=d},
fEl:function fEl(){},
fEW:function fEW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEV:function fEV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEU:function fEU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ik7(d){switch(d){case"new":return D.eDv
case"checking":return D.eDw
case"connected":return D.eDy
case"completed":return D.eDx
case"failed":return D.eDA
case"disconnected":return D.eDB
case"closed":return D.aRX
case"count":return D.eDz}return D.aRX},
ik8(d){switch(d){case"new":return D.aRY
case"gathering":return D.eDC
case"complete":return D.aa0}return D.aRY},
iup(d){switch(d){case"stable":return D.eDD
case"have-local-offer":return D.eDE
case"have-local-pranswer":return D.eDG
case"have-remote-offer":return D.eDF
case"have-remote-pranswer":return D.eDH
case"closed":return D.aS3}return D.aS3},
isy(d){switch(d){case"new":return D.aS0
case"connecting":return D.aS1
case"connected":return D.aS2
case"closed":return D.aa1
case"disconnected":return D.aS_
case"failed":return D.aRZ}return D.aa1},
aaE:function aaE(d,e){this.a=d
this.b=e},
Pr:function Pr(d,e){this.a=d
this.b=e},
Yt:function Yt(d,e){this.a=d
this.b=e},
Pq:function Pq(d,e){this.a=d
this.b=e},
FO:function FO(d,e){this.a=d
this.b=e},
csx:function csx(){},
hbR(d){var x=new B.FN()
x.a=d
x.b=!0
return x},
FN:function FN(){this.b=this.a=$},
aaD:function aaD(){},
avz:function avz(){},
Yu:function Yu(d,e){this.a=d
this.b=e},
ha1(){var x=0,w=A.j(y.H)
var $async$ha1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$ha1,w)},
ha4(d,e,f){var x=0,w=A.j(y.T),v
var $async$ha4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mQ(D.n9))){v=null
x=1
break}v=B.fYh(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ha4,w)},
hr9(d){var x,w=F.afY.a5D(C.dU.aN(d),null)
if(w.length===0){x=C.dU.aN(d)
return C.cV.gcu().aN(x)}return C.cV.gcu().aN(w)},
hWH(d){var x,w,v=C.cK.aN(d)
try{x=C.ca.cI(0,F.afX.bgn(v,!1))
return x}catch(w){x=C.ca.cI(0,v)
return x}},
ha5(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hWH(C.a.b4(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b4(t,w.length)
try{v=C.ca.cI(0,C.cK.aN(x))
return v}catch(u){return x}}return null},
hWI(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aM(s,"\n")},
hWJ(){var x,w=$.ov(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hf(v)},
b1e(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1e)
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
return A.i($async$b1e,w)},
cet(d,e){return B.hWK(d,e)},
hWK(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cet=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cO,null),$async$cet)
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
return A.i($async$cet,w)},
b1h(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1e(d),$async$b1h)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1h,w)},
b1g(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1g=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hWJ()
r=C.a.i(f)
t=C.dU.aN(s)
x=3
return A.b(B.cet(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cV.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1g)
case 3:if(!h){v=null
x=1
break}v=new A.a1t("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1g,w)},
b1f(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1e(o),$async$b1f)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cI(0,C.cK.aN(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1f,w)},
ceu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ceu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bF8("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cO),$async$ceu)
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
return A.i($async$ceu,w)},
b1i(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jn(),$async$b1i)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1i,w)},
aqW(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqW)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1i(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqW,w)},
aqU(d,e){var x=0,w=A.j(y.H)
var $async$aqU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqU)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqU)
case 2:return A.h(null,w)}})
return A.i($async$aqU,w)},
a89(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a89=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a89)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jn(),$async$a89)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dp(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a88(s),$async$a89)
case 5:x=6
return A.b(B.aqU(f,u),$async$a89)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
a8a(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8a=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8a)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jn(),$async$a8a)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
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
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqU(g,q),$async$a8a)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a88(u),$async$a8a)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
a8b(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8b)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jn(),$async$a8b)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1b(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8b)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8b)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8b,w)},
cev(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cev=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cev)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.W.aP(0,r,null)
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
return A.i($async$cev,w)},
Jo(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cev(d),$async$Jo)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1i(t),$async$Jo)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqV(d),$async$Jo)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1b(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqV(d),$async$Jo)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jo,w)},
aqV(d){var x=0,w=A.j(y.H)
var $async$aqV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqV)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqV)
case 2:return A.h(null,w)}})
return A.i($async$aqV,w)},
b1j(){var x,w=$.ov(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hf(v)},
a8c(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
ha6(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cey(d){return B.hWM(d)},
hWM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cey=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8c(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cey)
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
return A.i($async$cey,w)},
aqY(d,e){return B.hWN(d,e)},
hWN(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8c(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cO,null),$async$aqY)
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
return A.i($async$aqY,w)},
ceA(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ceA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8c(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqY(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ceA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ceA,w)},
cez(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cez=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8c(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqY(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cez)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cez,w)},
ceB(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ceB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8c(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqY(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceB,w)},
ceC(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ceC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.ha6(d)){v=null
x=1
break}x=3
return A.b(B.cey(d),$async$ceC)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a8(u)
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
return A.i($async$ceC,w)},
a8j(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8j=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8j)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8j)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
return A.i($async$a8j,w)},
ar1(d){return B.hX1(d)},
hX1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ar1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$ar1)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cO,null),$async$ar1)
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
return A.i($async$ar1,w)},
ar2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ar2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ar2)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8j(),$async$ar2)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cI(0,C.cK.aN(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.ar1(s),$async$ar2)
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
return A.i($async$ar2,w)},
ar4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ar4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$ar4)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8j(),$async$ar4)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a1(s,r,q),r,q)
r=C.dU.aN(C.a.i(e))
q.n(0,"answer",C.cV.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.ar1(u),$async$ar4)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar4,w)},
ar3(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ar3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ar3)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8j(),$async$ar3)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cI(0,C.cK.aN(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ar3,w)},
apV(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.qm)){v=null
x=1
break}x=3
return A.b(p.lW(e),$async$apV)
case 3:r=g
u=4
x=7
return A.b(r.hi(C.he),$async$apV)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.w0(o))
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
return A.i($async$apV,w)},
iqI(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
fWe(d){return B.iqK(d)},
iqK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fWe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iC("media").Ly(d,3600),$async$fWe)
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
return A.i($async$fWe,w)},
DF(d,e,f,g,h,i){var x=null
return B.iqH(d,e,f,g,h,i)},
iqH(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DF=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hrc(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.ha8(r),$async$DF)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fWe(o),$async$DF)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8d(r),$async$DF)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aVB)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MI(A.a([],g))
x=15
return A.b(d.f9(0,A.awo("GET",A.cC(n,0,null))).dg(0,C.GV),$async$DF)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8d(r),$async$DF)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lf(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DF)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1l(r,k),$async$DF)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DF)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.We(r)
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
return A.b(B.a8d(r),$async$DF)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DF,w)},
aSr(d){return B.iqJ(d)},
iqJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iC("media").W(0,d),$async$aSr)
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
return A.i($async$aSr,w)}},D,T,L,U,V,W,X,M,Y
J=c[1]
A=c[0]
C=c[2]
N=c[47]
F=c[268]
H=c[152]
O=c[238]
E=c[229]
P=c[239]
G=c[95]
Q=c[199]
R=c[153]
S=c[236]
I=c[273]
K=c[281]
B=a.updateHolder(c[22],B)
D=c[279]
T=c[198]
L=c[219]
U=c[74]
V=c[262]
W=c[80]
X=c[62]
M=c[94]
Y=c[280]
B.csy.prototype={
aGy(d,e){return this.cQK(d,e)},
cQK(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.u(0,d)
u=new q(A.kj(A.cv(t)))
t=J.k(u)
v=B.i0G(C.cV.gcu().aN(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGy,w)}}
B.b6s.prototype={
bCE(d){var x=this,w=x.w
w.onclose=A.hu(new B.cst(x))
w.onopen=A.hu(new B.csu(x))
w.onmessage=A.hu(new B.csv(x))
w.onbufferedamountlow=A.hu(new B.csw(x))},
gd6(d){return this.x},
aiQ(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FN()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hbR(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aiQ)
case 8:v=t.hbR(s.ap3(f,0,null))
x=1
break
case 7:case 4:v=B.hbR(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiQ,w)}}
B.b6t.prototype={
bCF(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hu(new B.csz(x)))
w.addEventListener("icecandidate",A.hu(new B.csA(x)))
w.addEventListener("iceconnectionstatechange",A.hu(new B.csB(x)))
w.onicegatheringstatechange=A.hu(new B.csC(x))
w.addEventListener("signalingstatechange",A.hu(new B.csD(x)))
if(!$.hjD())w.addEventListener("connectionstatechange",A.hu(new B.csE(x)))
w.addEventListener("negotiationneeded",A.hu(new B.csF(x)))
w.addEventListener("track",A.hu(new B.csG(x)))},
amB(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kj(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amB)
case 3:t=f
v=new B.Yu(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amB,w)},
a8O(d,e){return this.brA(0,e)},
brA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8O)
case 2:return A.h(null,w)}})
return A.i($async$a8O,w)},
a8W(d,e){return this.brV(0,e)},
brV(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8W)
case 2:return A.h(null,w)}})
return A.i($async$a8W,w)},
aqX(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqX=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.i($async$aqX,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f4(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.adt.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_p.prototype={
S(){return new B.aBe()},
gd1(){return this.c}}
B.aBe.prototype={
Y(){this.a3()
this.afm()},
afm(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1c(u.e,u.c),$async$afm)
case 2:t=e
if(v.c!=null)v.m(new B.dcX(v,t))
return A.h(null,w)}})
return A.i($async$afm,w)},
R7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$R7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqR(t.e,t.c,!1),$async$R7)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.foJ)
x=1
break}x=4
return A.b(B.a87(u.a.c,"individual"),$async$R7)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7b(A.ed(new B.dcU(u),!1,null,y.H)),$async$R7)
case 5:case 1:return A.h(v,w)}})
return A.i($async$R7,w)},
JT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fCd(o),$async$JT)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8b(o.e,r,s,q),$async$JT)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.flH)
x=1
break}x=5
return A.b(B.a87(u.a.c,"member"),$async$JT)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7b(A.ed(new B.dcW(u),!1,null,y.H)),$async$JT)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JT,w)},
yI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a86(t.e,o,t.f,t.r,t.w,s),$async$yI)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a87(u.a.c,"org_owner"),$async$yI)
case 4:x=5
return A.b(B.aqW(u.a.c),$async$yI)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fCI(o),$async$yI)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a89(s,t,o,q.c),$async$yI)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.flD)
x=1
break}x=10
return A.b(B.aqW(u.a.c),$async$yI)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7b(A.ed(new B.dcV(u),!1,null,y.H)),$async$yI)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yI,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I,q=r?C.nz:C.qq,p=B.ha3(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dE,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fIS,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hk,s,s,s),C.aB,D.h1T,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cbt,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m1(new B.dcZ(),s),C.P,v,C.e1,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.adX(C.eW,C.aEr,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcjR(),s),C.af],u))
w.push(new B.adX(C.pB,C.a5C,"Team Member","Sign in with your organization access code + password",t.gckI(),s))
w.push(C.af)
w.push(new B.adX(C.aqr,C.a7g,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckd(),s))
return A.c4(s,q,A.bm(!0,A.ca(A.x(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,new A.Q(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.adX.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eB(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mE,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),1),A.W(C.zl,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aDT.prototype={}
B.aH3.prototype={}
B.jG.prototype={
mQ(d){var x=this.b,w=C.a.pc(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b4(x,w+1).toLowerCase())},
garE(){var x=this.d
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
bfR(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jG(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPf(d){return this.bfR(null,d)},
aGh(d){return this.bfR(d,null)}}
B.W8.prototype={
S(){return new B.aFf(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aFf.prototype={
Y(){this.a3()
this.afn()},
afn(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cf(u.a.c),$async$afn)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dZJ(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afn,w)},
afo(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fy(s)),$async$afo)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fpE)
case 1:return A.h(v,w)}})
return A.i($async$afo,w)},
a_N(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_N=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apV(s.d,4),$async$a_N)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rk(r,"ngmy_my_code_"+m+".png"),$async$a_N)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_N,w)},
ajh(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abh("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.nz:C.qq,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m5
else if(q.e==null)x=A.as(new A.D(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.m(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.m(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,I.a62,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.an3,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nf,w,C.l9,new A.en(A.p(p,A.qe(p,p,!1,B.hWD(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l9,A.A(A.a([A.E(A.em(M.Dz,p,C.Wr,q.gcc6(),p),1),C.at,A.E(A.dh(C.zO,p,C.acl,q.gcc7(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.T,new A.a3(1/0,p,A.em(L.a4n,p,D.fYr,q.gczx(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,U.anC,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wc.prototype={
S(){return new B.aFi(new A.au(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aFi.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jm(x==null?"":x)
if(w!=null)this.d.sb3(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
a_O(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jm(u.d.a.a)
if(t==null){u.m(new B.e_S(u))
x=1
break}u.m(new B.e_T(u))
s=u.a
r=s.c
x=3
return A.b(B.a85(s.d,new B.e_U(u),t,r),$async$a_O)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_V(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_O,w)},
a33(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a33=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e_W(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rW(r.a.c,q),$async$a33)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_X(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiX(p,m,l,j,k),$async$a33)
case 8:o=e
if(r.c!=null)r.m(new B.e_Y(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e_Z(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e0_(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a33,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aj6:D.agz,h=j?D.akR:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.ai3:C.bk
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bZv,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,I.a62,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blo()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bz(k,k,k,C.Ox,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e00(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mn(l.a.d,4)
m=A.C(new A.N(m,new B.e01(x,new A.aIj(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ll,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a9,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.da,p,C.P,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fk9)
else q.push(A.W(C.kZ,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b0,new A.o(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,D.bGX,k,k,C.ah),1)
u=l.f?k:l.gczy()
t=i[3]
s=i[1]
q=A.l(16)
s=A.em(L.a4n,k,D.fZy,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcc8()
t=A.bo(C.aD,k,k,0,C.c,k,C.nF,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lE(new B.e02(),A.x(A.a([e,new A.D(D.bGq,A.x(A.a([s,C.P,i,C.af,A.bI(l.f?C.tW:D.fXN,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cj,C.a0D,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blo.prototype={
p8(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hl(C.bB,v.length),C.aP)}}
B.W9.prototype={
S(){return new B.aFg()}}
B.aFg.prototype={
Y(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.ax()
v.R$=0
v=w.e
v===$&&A.c()
v.U$=x
v.R$=0
v=w.f
v===$&&A.c()
v.U$=x
v.R$=0
w.a2()},
afp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dZK(r))
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
return A.b(B.a8a(p,m,n,o,C.a.i(l).length===0?null:l),$async$afp)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fpf)
s=[1]
x=4
break}p.L(y.q).f.T(D.fnQ)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dZL(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afp,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.nz:C.qq,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fQ8,s,s,s,1,s,!0),p=A.p(s,D.byu,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.Ij,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c5R,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c5M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c61,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.ao,s,s,s,s)
v=t.r?s:t.gcc9()
u=A.bo(C.aD,s,s,s,s,C.hf,s,s,s,s,s,s)
return A.c4(q,r,A.ca(A.x(A.a([p,C.da,o,C.af,x,C.af,w,C.nf,A.bI(t.r?C.tW:C.aYr,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.ada.prototype={}
B.byf.prototype={
a5U(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.aqa()))
x=3
return A.b(B.Si(t,s),$async$a5U)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5U,w)},
gd1(){return this.a}}
B.Ok.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_o.prototype={
S(){return new B.aBd(new A.au(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aBd.prototype={
Y(){this.a3()
$.aU.x1$.push(new B.dcT(this))},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
ccf(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2t(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nz:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.at9,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.atZ,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxS()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bz(w,w,w,C.CI,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b6E),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcR(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
h=y.p
return A.eG(w,C.L,new A.cN(Q.Mf,new A.bM(new A.o(t,w,o,p,m,w,C.n),C.bi,new A.D(C.wF,A.x(A.a([l,C.aO,k,C.P,j,C.e1,i,C.e1,A.A(A.a([A.E(A.dV(C.o7,new B.dcS(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.at,A.E(new A.bM(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aD.j(0.35),C.cJ,12)],n),K.Qz,C.n),C.bi,A.aG(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ewS,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcce(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OG,w,C.d6,w,w,w)}}
B.bxS.prototype={
p8(d,e){return e.amv(e.a.toUpperCase())}}
B.Wa.prototype={
S(){return new B.aFh(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFh.prototype={
Y(){var x=this
x.a3()
x.ur()
x.w=A.dg(C.jJ,new B.e_Q(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wj()
this.a2()},
a1W(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1W=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oj(u.a.c),$async$a1W)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bf(u.a.c),$async$a1W)
case 4:u.m(new s.e_d(u,e))
u.il("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1W,w)},
ur(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oj(u.a.c),$async$ur)
case 3:t=e
x=4
return A.b(B.Bf(u.a.c),$async$ur)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e_e(u,s))
if(t>0)u.il("Received "+A.w(t)+" file(s) via My Code.")
u.Oj(u.d)
B.Cf(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ur,w)},
Oj(d){return this.bGH(d)},
bGH(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8f(r,u.a.c),$async$Oj)
case 8:p=f
if(u.c==null){x=1
break}new B.dZN(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a_(r.c,"video/")||r.mQ(D.n9))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wh(r,u.a.c),$async$Oj)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bf(u.a.c),$async$Oj)
case 12:u.m(new o.dZO(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
OJ(d){return this.bN2(d)},
bN2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8f(d,u.a.c),$async$OJ)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZT(u,d,t))
x=6
return A.b(A.fI(new A.fy(t)),$async$OJ)
case 6:u.il("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fy(r.toUpperCase())),$async$OJ)
case 7:u.il("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
il(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
us(d,e){return this.cKu(d,e)},
cKu(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$us=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e_E(r,e))
u=3
x=6
return A.b(d.$0(),$async$us)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e_F(r))
$.eY.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$us,w)},
gaY4(){var x=this.a
return x.f||x.r||x.w},
IJ(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaY4()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cer(s,n,r,q,o,t),$async$IJ)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.il("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fPy(o,u.a.c),$async$IJ)
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
return A.b(B.DH(s,o,r,q,n,t),$async$IJ)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IJ,w)},
a1_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqW(u.a.c),$async$a1_)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.il("No organization portal found.")
x=1
break}t=J.a8(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).ce(A.ed(new B.e_a(u,r,q),!1,null,y.H)),$async$a1_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1_,w)},
a25(d){return this.ct6(d)},
ct5(){return this.a25(1)},
ct6(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a25=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaY4()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqT(u.a.c),$async$a25)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a25,w)},
ade(d,e,f){return this.c32(d,e,f)},
c32(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ade=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.il(e)
x=1
break}x=3
return A.b(u.us(new B.e_7(u,d,null,e,f),"Uploading\u2026"),$async$ade)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ade,w)},
bGQ(){B.hGy(!1,new B.dZR(this))
return},
cy8(){this.m(new B.e_i(this))},
aAM(){var x=0,w=A.j(y.H),v=this
var $async$aAM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGQ()
return A.h(null,w)}})
return A.i($async$aAM,w)},
ad9(){var x=0,w=A.j(y.H),v=this
var $async$ad9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.dZX(v),"Importing\u2026"),$async$ad9)
case 2:return A.h(null,w)}})
return A.i($async$ad9,w)},
Ta(d){return this.cJO(d)},
cJO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ta=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mQ(D.n9)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ed(new B.e_B(u,d),!1,null,y.H)),$async$Ta)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mQ(D.SA)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ed(new B.e_C(u,d),!1,null,y.H)),$async$Ta)
case 8:x=1
break
case 7:x=u.c3L(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ed(new B.e_D(u,d),!1,null,y.H)),$async$Ta)
case 11:x=1
break
case 10:u.il("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Ta,w)},
c3L(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.pc(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cUM,C.a.b4(x,w+1).toLowerCase())},
ah_(d){return this.cjV(d)},
cjV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ah_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mQ(D.n9)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ed(new B.e_8(u,d),!1,null,y.H)),$async$ah_)
case 5:x=1
break
case 4:u.m(new B.e_9(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ah_,w)},
Sx(d){return this.cB1(d)},
cB1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.il("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$Sx)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.us(new B.e_u(u,d),"Preparing QR\u2026"),$async$Sx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sx,w)},
ajH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_v(),A.U(t).k("N<1,n>")).fK(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_w(q),s),s.k("M.E"))
if(r.length===0){u.il("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sx(r),$async$ajH)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajH,w)},
ajA(d){return this.cAz(d)},
cAz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2t(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_o(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajA)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Ta(d)
break
case"qr":u.Sx(A.a([d],y.r))
break
case"send_my_code":u.ckx(A.a([d],y.r))
break
case"save":u.aiY(d)
break
case"delete":u.JC(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajA,w)},
YA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZU(),A.U(t).k("N<1,n>")).fK(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZV(q),s),s.k("M.E"))
if(r.length===0){u.il("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$YA)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.us(new B.dZW(u,r),"Preparing file\u2026"),$async$YA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YA,w)},
ai4(d){return this.crq(d)},
crq(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ai4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hHB(d,!1),$async$ai4)
case 3:s=f
r=s==null
q=B.a8c(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.il("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai4,w)},
ah5(){var x=0,w=A.j(y.H),v=this,u
var $async$ah5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fXk(u,v.a.c),$async$ah5)
case 2:return A.h(null,w)}})
return A.i($async$ah5,w)},
bGP(){B.hGy(!1,new B.dZQ(this,null))
return},
JS(d,e){return this.cky(d,e)},
b3D(d){return this.JS(null,d)},
ckx(d){return this.JS(d,null)},
cky(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e_b(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xP.cp().apg(!0,C.a2p,!1),$async$JS)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.us(new B.e_c(l,s,r),"Preparing\u2026"),$async$JS)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.il("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.il("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bGl(p,l,e,s.a.c),$async$JS)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.il("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JS,w)},
IZ(d){return this.c2Q(d)},
c2Q(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hWC(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3D(t),$async$IZ)
case 8:x=6
break
case 7:u.il("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.il("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.us(new B.e_5(u,d),"Receiving video\u2026"),$async$IZ)
case 11:x=1
break
case 10:x=12
return A.b(u.us(new B.e_6(u,d),"Receiving\u2026"),$async$IZ)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IZ,w)},
EQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DB()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ai4(t),$async$EQ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IZ(s),$async$EQ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ed(new B.e_g(u),!1,null,y.N)),$async$EQ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ur(),$async$EQ)
case 10:x=1
break
case 9:x=11
return A.b(u.IZ(C.a.i(r)),$async$EQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EQ,w)},
aiY(d){return this.cwG(d)},
cwG(d){var x=0,w=A.j(y.H),v=this
var $async$aiY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.e_f(v,d),"Saving\u2026"),$async$aiY)
case 2:return A.h(null,w)}})
return A.i($async$aiY,w)},
JC(d){return this.bPn(d)},
bPn(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lr(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JC)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ceu(t),$async$JC)
case 6:case 5:s=d.a
x=7
return A.b(B.Fj(u.a.c,s),$async$JC)
case 7:u.r.W(0,s)
x=8
return A.b(u.ur(),$async$JC)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JC,w)},
ajN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2t(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_A(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajN)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ah5()
break
case"import":u.ad9()
break}case 1:return A.h(v,w)}})
return A.i($async$ajN,w)},
ccc(d){var x=d.c
if(C.a.a_(x,"video/")||d.mQ(D.n9))return C.qV
if(C.a.a_(x,"image/")||d.mQ(D.SA))return C.v0
if(C.a.q(x,"pdf"))return P.I_
return D.aqR},
B(d){var x,w,v=this,u=null,t=B.a2t(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.Ic,u,u,u,new B.e_L(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c_5,u,u,u,v.e?u:v.gcke(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcy7()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bUj:E.are,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a4k,u,u,u,v.e?u:v.gccd(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb4J(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c0T,u,u,u,v.e?u:new B.e_M(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m1(new B.e_N(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kr(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBa(C.ju,s,!0,t,w?u:v.gcB2(),u),1)
x.push(new A.D(D.bFb,A.lE(new B.e_O(),A.A(A.a([s,C.at,A.E(new B.aBa(C.v1,"Export",!1,t,w?u:v.gbTg(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cj,C.iB,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfW(t,v.e?u:v.gb4J(),u)
else s=A.ks(!0,u,u,new B.e_P(v,t),s,u,D.bF3,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBa.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.t6,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.cd,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t6,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.em(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.f9,t,t,t),u.r,v)}}
B.bfW.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lE(new B.dcP(),new A.D(E.a1w,A.x(A.a([A.lE(new B.dcQ(),A.p(x,A.W(C.zp,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.ec,C.hM,x,x,new A.bq(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e1,A.dh(C.oQ,x,D.h2c,this.d,A.bo(C.aD,x,x,x,C.c,x,C.OE,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.cj,C.Cu,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.adu.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.mQ(D.n9))p=D.dv4
else{p=C.a.a_(p,"image/")||i.mQ(D.SA)
n=y.O
p=p?A.a([C.cU,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garE()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.n9))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.aw,A.d(C.d.aM(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cg))
if(!(!o||i.mQ(D.n9)))l.push(A.h7M(C.aD,!1,j,j,j,!1,j,j,new B.ddb(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.W(C.oI,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cg))
return A.lE(new B.ddc(),new A.D(C.el,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1_,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.cj,h,new A.bh("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_q.prototype={
S(){return new B.aBf()},
gd1(){return this.c}}
B.aBf.prototype={
Y(){this.a3()
this.yy()},
t(){B.hWR(this.e)
this.a2()},
yy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rW(o.c,o.d),$async$yy)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hWU(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hWT(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dd8(s))
x=1
break}s.m(new B.dd9(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.dda(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yy,w)},
a32(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a32=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rW(t.c,t.d),$async$a32)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fmd)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiX(q,s,t.length===0?"image/jpeg":t,null,s),$async$a32)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a32,w)},
c2J(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kF(u,C.z,v,new B.dd6(w,t),C.hn,C.dD,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fV(t,C.z,v,new B.dd7(w),C.hn,C.dD,!0,v,!1,v,v)
else return C.bM
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2t(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DA,u,u,u,v.gb8v(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FQ
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.DA,u,D.fLj,v.gb8v(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c2J()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_n.prototype={
S(){return new B.aBc(A.ajT(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBc.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fC(w,A.a4(w).k("fC<1>")).iD(new B.dcM(v))
x.gcYm().iD(new B.dcN(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fC(x,A.a4(x).k("fC<1>"))}if(x==null)x=C.bd1
x.iD(new B.dcO(v))
v.yy()},
yy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rW(p.c,p.d),$async$yy)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dcF(s))
x=1
break}x=8
return A.b(s.d.vu(0,new A.a4C(r,s.a.d.c)),$async$yy)
case 8:if(s.c==null){x=1
break}s.m(new B.dcG(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dcH(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yy,w)},
a_P(){var x=0,w=A.j(y.H),v=this,u
var $async$a_P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hh(0),$async$a_P)
case 5:x=3
break
case 4:x=6
return A.b(u.iH(0),$async$a_P)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_P,w)},
aVT(d){var x=d.a
return C.a.b0(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2t(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FQ
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bVf,C.f,o,o,new A.o(o,o,o,A.l(24),o,K.Qz,C.n),o,88,o,o,o,o,o,88)
t=A.l_(C.aD,o,o,m,0,new B.dcI(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aVT(p.w)+" / "+p.aVT(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.fiC,o,o,o,o,o,o)
r=p.f
q=A.W(r?H.v5:C.hd,o,o,o,o,o)
x=A.x(A.a([u,C.l9,t,x,C.da,A.dh(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccg(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qI,x,o),o,o,o),o,!1,!1,o,o)}}
B.QG.prototype={
S(){return new B.aBi()},
gd1(){return this.c}}
B.aBi.prototype={
Y(){this.a3()
this.Qq()},
Qq(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qq=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.ha4(o.c,o.d,new B.ddp(s)),$async$Qq)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddq(s))
x=1
break}s.e=r
q=N.iiY(r)
if(q==null){s.m(new B.ddr(s))
x=1
break}s.d=q
q.aV(0,s.gb3r())
x=8
return A.b(q.iX(0).dg(0,C.t2),$async$Qq)
case 8:if(s.c==null){x=1
break}s.m(new B.dds(s))
x=9
return A.b(q.qv(0),$async$Qq)
case 9:q.u0(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.ddt(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qq,w)},
cit(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddu(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DA(0,x.gb3r())
w=x.d
if(w!=null)w.t()
B.isR(x.e)
x.a2()},
afs(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1k(u.c,u.d),$async$afs)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afs,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2t(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aI(t,t,t,t,C.oP,t,t,t,u.gcca(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iu(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FQ
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajk(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AL(s,t),A.az(t,A.xw(A.p(t,A.W(q?H.v5:C.hd,C.c,t,t,t,48),C.f,t,t,new A.o(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.ddw(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_s.prototype={
S(){return new B.aBg(new A.cw(null,y.A))}}
B.aBg.prototype={
gcKb(){var x,w,v=this.a
if(v.e!==D.TZ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJM(){var x,w,v=this.a
if(v.e!==D.As)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcKb()
if(x!=null){v.Ry(x)
v.e=A.dg(R.GY,new B.ddl(v,x))}w=v.gcJM()
if(w!=null){v.Rx(w)
v.f=A.dg(C.fL,new B.ddm(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rx(d){return this.cpD(d)},
cpD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ar0(d),$async$Rx)
case 3:t=f
x=4
return A.b(B.ceN(d),$async$Rx)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.ddd(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rx,w)},
Ry(d){return this.cpE(d)},
cpE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ry=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fY0(d),$async$Ry)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEc(t),$async$Ry)
case 4:if(u.c==null){x=1
break}u.m(new B.dde(u))
u.c.L(y.q).f.T(D.aVa)
case 1:return A.h(v,w)}})
return A.i($async$Ry,w)},
gc81(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccb(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2P(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DB()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fpp)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ed(new B.ddf(),!1,null,y.N)),$async$a2P)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEc(s),$async$a2P)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aVa)
case 1:return A.h(v,w)}})
return A.i($async$a2P,w)},
ab2(d){return this.bN3(d)},
bN3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fy(C.d.aM(t,", "))),$async$ab2)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ab2,w)},
afq(d){return this.bMM(d)},
bMM(d){var x=0,w=A.j(y.H),v=this
var $async$afq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fy(v.a.c)),$async$afq)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fmH)
return A.h(null,w)}})
return A.i($async$afq,w)},
a2J(d){return this.cwI(d)},
cwI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apV(s.d,4),$async$a2J)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rk(r,"ngmy_doc_share_qr.png"),$async$a2J)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2J,w)},
gaZk(){var x,w=this.a
if(w.e!==D.Jr)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b4(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b4(x,13))
return null},
ab_(d){return this.bMX(d)},
bMX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZk()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fy(C.a.a_(t,"http")?t:"N2|"+t)),$async$ab_)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fon)
case 1:return A.h(v,w)}})
return A.i($async$ab_,w)},
afr(){var x=0,w=A.j(y.H),v=this,u
var $async$afr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wj(),$async$afr)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afr,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2t(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jr&&i!==D.TZ&&i!==D.As
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jr||t===D.TZ||t===D.As?l:A.aI(l,l,l,l,C.lq,l,l,l,m.gb1o(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qe(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc81(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jr){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lN,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccb(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aM(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c4U,D.fUX,new B.ddg(m,d),l)],p))}if(m.a.e===D.Jr&&m.gaZk()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a9,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c1e,D.fRx,new B.ddh(m,d),l)],p))
if(m.a.e===D.As){x=(m.w?C.dJ:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FT:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lN,l,l,l)],p))}if(m.a.e===D.TZ){x=(m.r?C.dJ:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FT:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lN,l,l,l),C.af,A.dh(D.bXI,l,D.fY6,m.gcx4(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b8,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.em(M.Dz,l,C.Wr,new B.ddi(m,d),l),1),C.at,A.E(A.dh(C.zO,l,C.acl,new B.ddj(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.P,new A.a3(1/0,l,A.bI(C.B7,l,m.gb1o(),A.bo(C.aN,l,l,l,l,C.hf,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.ddk(),y.C)}}
B.ads.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.p(x,A.qe(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bI,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ej(A.a([A.bI(C.B8,x,new B.dcE(d),x)],u),x,x,C.np,v,x,x,x,x,D.fKi,x)}}
B.a_m.prototype={
S(){return new B.aBb(A.zU(C.yH,C.oe,C.vi))}}
B.aBb.prototype={
t(){this.d.t()
this.a2()},
azl(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c4(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fS4,x,x,x,1,x,!0),C.w,A.zT(this.d,C.c1,this.gazk()),x,!1,!1,x,x)}}
B.a_t.prototype={
S(){return new B.aBh(A.zU(C.yH,C.oe,C.vi))},
gd1(){return this.c}}
B.aBh.prototype={
c3N(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahs(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MO("text/plain"),$async$ahs)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fpj)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahs,w)},
abR(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hHB(p,!0),$async$abR)
case 3:t=e
p=t==null
s=B.a8c(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.flO)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$abR,w)},
t(){this.d.t()
this.a2()},
azl(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3N(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.ase,v,v,v,w.gbSK(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4r,v,v,v,w.gcn_(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.uX:O.PN,v,v,v,v,v),v,v,v,new B.ddo(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fZ2,v,v,v,1,v,!0)
u=A.zT(w.d,C.c1,w.gazk())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eDa],s),v),v,!1,!1,v,v)}}
B.bfX.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pr
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pr:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1C,A.A(A.a([u,C.bb,A.E(A.x(t,C.E,r,C.e,C.h,0,C.p),1),A.W(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aaE.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pr.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yt.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pq.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FO.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.csx.prototype={}
B.FN.prototype={}
B.aaD.prototype={}
B.avz.prototype={}
B.Yu.prototype={}
var z=a.updateTypes(["aB<~>()","R(jG)","n(jG)","Wa(Z)","~()","a_p(Z)","H(H,jG)","QG(Z)","~(mn)","cu(FN)","aB<jG?>(@)","W8(Z)","Wc(Z)","D(jG)","jG(@)","a9<n,@>(jG)","a_o(Z)","W9(Z)","a_q(Z)","a_n(Z)","a_s(Z)","ads(Z)","ai<jG>()","a_t(Z)","adu(Z,H)","a_m(Z)","a9<n,aF>(jG)","cu(Yt)","cu(aaD)","aB<cu>(FN)"])
B.cst.prototype={
$1(d){var x=this.a
x.x=D.aRW
x.y.I(0,D.aRW)},
$S:75}
B.csu.prototype={
$1(d){var x=this.a
x.x=D.aRV
x.y.I(0,D.aRV)},
$S:75}
B.csv.prototype={
$1(d){var x=this.a
x.aiQ(A.ahJ(d.data)).bG(new B.css(x),y.b)},
$S:75}
B.css.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csw.prototype={
$1(d){},
$S:75}
B.csz.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i0F(d.channel))},
$S:16}
B.csA.prototype={
$1(d){},
$S:16}
B.csB.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ik7(w.iceConnectionState)
x.cx=w
if($.hjD())switch(w.a){case 0:x.cy=D.aS0
break
case 1:x.cy=D.aS1
break
case 3:x.cy=D.aS2
break
case 5:x.cy=D.aRZ
break
case 6:x.cy=D.aS_
break
case 7:x.cy=D.aa1
break
default:break}},
$S:108}
B.csC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ik8(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.csD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iup(w.signalingState)},
$S:108}
B.csE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.isy(w.connectionState)},
$S:108}
B.csF.prototype={
$1(d){},
$S:108}
B.csG.prototype={
$1(d){},
$S:16}
B.fxF.prototype={
$1(d){var x=y.F.a(new A.qu([],[]).o3(d.target.result,!1)),w=C.ww.q(x.objectStoreNames,"blobs")
if(!w)C.wt.Gm(x,"blobs")},
$S:160}
B.fX8.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x4.fs(this.b)
$.eY.mJ()
this.c.$1(d)},
$S:448}
B.fXa.prototype={
$1(d){return this.a.$1(B.i9N(this.b,this.c))},
$S:32}
B.fX9.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fX7.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fXn.prototype={
$1(d){var x=this
return B.hw6(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fXo.prototype={
$1(d){var x=this
return B.hw6(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fAj.prototype={
$1(d){var x=this
return B.ceo(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcX.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcU.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceo(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcW.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceo(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcV.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceo(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcZ.prototype={
$4(d,e,f,g){var x=null
return A.k2(A.A(A.a([A.aI(x,x,x,x,D.bWk,x,x,x,new B.dcY(d),x,x,x,x,x,x),A.E(A.Fz(D.Sk,!0,x,!1,C.a3u,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.Sk,x,g,C.anT,0,e,f)},
$C:"$4",
$R:4,
$S:418}
B.dcY.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCg.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eT,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.p(v,D.byO,C.f,v,v,D.b8i,v,v,v,v,D.anI,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c_H,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.CK,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fCe(d),v),1),C.at,A.E(A.bI(D.fQw,v,new B.fCf(p,x,d),A.bo(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.H0,v,v,v,v),v)},
$S:64}
B.fCe.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCf.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fmY)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aDT(v,x))},
$S:0}
B.fCK.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eT,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.byE,C.f,w,w,D.b9N,w,w,w,w,D.anI,w,w,1/0),new A.D(C.CK,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hfl(u,"Organization name",C.Hz,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hfl(u,"Access code",C.mj,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hfl(u,"Member password",C.Dy,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.ao,w,w,w,w),C.bx,A.bI(D.fZ9,w,new B.fCJ(r,q,p,d),A.bo(C.aD,w,w,w,w,C.hf,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.H0,w,w,w,w),w)},
$S:64}
B.fCJ.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fn2)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aH3(u,x,w))},
$S:0}
B.cef.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a8(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cC(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vR(p,null).dg(0,C.a0C),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cg(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cel.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cem.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cen.prototype={
$1(d){return d.b},
$S:z+2}
B.ceh.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cei.prototype={
$1(d){return d.b},
$S:z+2}
B.ceg.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cej.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cek.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fXl.prototype={
$1(d){return new B.W8(this.a,null)},
$S:z+11}
B.fXm.prototype={
$1(d){return new B.Wc(this.a,this.b,this.c,null)},
$S:z+12}
B.dZJ.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_S.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_T.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_U.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_R(x,d))},
$S:2}
B.e_R.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_V.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_W.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_X.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_Y.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_Z.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e0_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e02.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.e00.prototype={
$1(d){var x=this.a
return x.f?null:x.a_O()},
$S:2}
B.e01.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mQ(D.SA))s=C.v0
else s=C.a.a_(s,"video/")||d.mQ(D.n9)?C.qV:D.aqR
x=this.b.a
w=y.p
return new A.D(C.kz,A.A(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garE(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.dZK.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZL.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cep.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:98}
B.ceq.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:98}
B.fYj.prototype={
$2(d,e){return e===this.a},
$S:327}
B.fuK.prototype={
$1(d){return J.k(d)},
$S:17}
B.fAv.prototype={
$1(d){var x=this.b
B.i7P(C.Hm.ga7w(this.a)).bG(x.gC9(x),y.H)},
$S:131}
B.fAw.prototype={
$1(d){return this.a.dd(0,null)},
$S:131}
B.fAx.prototype={
$0(){return null},
$S:11}
B.ceE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fAy.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
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
return new B.jG(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fEI.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fyJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyK.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ceJ.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n9)},
$S:z+1}
B.h1z.prototype={
$1(d){return new B.a_o(this.a,null)},
$S:z+16}
B.dcT.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fV()},
$S:7}
B.dcR.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.dcS.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e_Q.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1W()},
$S:12}
B.e_d.prototype={
$0(){var x=J.bHp(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_e.prototype={
$0(){var x=J.bHp(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZN.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.dZM(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGh(this.c)}},
$S:0}
B.dZM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZO.prototype={
$0(){var x=J.bHp(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZT.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.dZS(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGh(this.c)}},
$S:0}
B.dZS.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_E.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e_F.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e_a.prototype={
$1(d){return new B.W9(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e_7.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IJ(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wd(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ur(),$async$$0)
case 5:s=J.a8(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a25(s.gJ(t)),$async$$0)
case 8:case 7:r.il(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZR.prototype={
$1(d){this.a.ade(d,"No files selected.","Added")},
$S:448}
B.e_i.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e_h(),A.U(x).k("N<1,n>")))},
$S:0}
B.e_h.prototype={
$1(d){return d.a},
$S:z+2}
B.dZX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xP.cp().d_k(C.a2p,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jN(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.il("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.il("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ar_(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.il("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ur(),$async$$0)
case 9:o.il("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e_B.prototype={
$1(d){return new B.QG(this.a.a.c,this.b,null)},
$S:z+7}
B.e_C.prototype={
$1(d){return new B.a_q(this.a.a.c,this.b,null)},
$S:z+18}
B.e_D.prototype={
$1(d){return new B.a_n(this.a.a.c,this.b,null)},
$S:z+19}
B.e_8.prototype={
$1(d){return new B.QG(this.a.a.c,this.b,null)},
$S:z+7}
B.e_9.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_u.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IJ(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8e(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.il("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ct5(),$async$$0)
case 5:x=6
return A.b(p.ur(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e_q(p),r),new B.e_r(),r.k("N<ak.E,n>")).c0(0,new B.e_s())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ed(new B.e_t(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.py(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wj(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_q.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e_p(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e_p.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_r.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e_s.prototype={
$1(d){return d.length!==0},
$S:3}
B.e_t.prototype={
$1(d){var x=this.a
return new B.a_s(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e_v.prototype={
$1(d){return d.a},
$S:z+2}
B.e_w.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_o.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.ky,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garE(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mQ(D.n9)?C.tm:C.nP
p=!x||p.mQ(D.n9)?"Play video":"View"
return new A.bM(new A.o(s,v,new A.bF(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.ld,v,v,C.n),C.bi,A.bm(!0,new A.D(C.CG,A.x(A.a([q,o,t,C.aB,B.a_r(!1,u,!1,w,p,new B.e_j(d),v),B.a_r(!1,u,!1,C.ju,"Share via QR",new B.e_k(d),"Letters/numbers QR code"),B.a_r(!1,u,!1,D.a3z,"Send to their Code",new B.e_l(d),"Enter someone else's personal code"),B.a_r(!1,u,!1,C.hP,"Download / save",new B.e_m(d),v),C.am,B.a_r(!1,u,!0,C.ej,"Delete",new B.e_n(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:726}
B.e_j.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e_k.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e_l.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e_m.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e_n.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.dZU.prototype={
$1(d){return d.a},
$S:z+2}
B.dZV.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZW.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8g(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hg(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.py(s.c,s.f),$async$$0)
case 4:u.il(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZQ.prototype={
$1(d){var x=this.a
x.us(new B.dZP(x,d,this.b),"Preparing\u2026")},
$S:448}
B.dZP.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.il("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wd(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.il("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGl(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.il("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_b.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e_c.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.ha7(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.He(new B.e_1(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.il("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e_2(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e_3(s))
case 5:x=8
return A.b(r.b.iJ(0,C.GV,new B.e_4()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.il("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ur(),$async$$0)
case 9:s.il("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_1.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZZ(x,d,e))},
$S:224}
B.dZZ.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_2.prototype={
$1(d){return new B.ads(this.a.a,null)},
$S:z+21}
B.e_3.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e_4.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e_6.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jm(o)!=null?3:4
break
case 3:x=5
return A.b(B.a84(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3D(B.Jm(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ar_(new B.e__(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.ha6(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.il(q)
x=1
break}x=10
return A.b(s.ur(),$async$$0)
case 10:o=J.cD(r)
p=o.eO(r,new B.e_0()).gJ(0)
s.il(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e__.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZY(x,d,e))},
$S:224}
B.dZY.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_0.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n9)},
$S:z+1}
B.e_g.prototype={
$1(d){return new B.a_t(this.a.a.c,null)},
$S:z+23}
B.e_f.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1k(u.a.c,v.b),$async$$0)
case 2:t.il(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_A.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bM(new A.o(v[2],x,new A.bF(new A.ay(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.ld,x,x,C.n),C.bi,A.bm(!0,new A.D(C.CG,A.x(A.a([A.as(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.ky,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_r(!0,w,!1,C.mj,"My Code",new B.e_x(d),"Your personal code & QR \u2014 others send docs to you"),B.a_r(!1,w,!1,D.a3z,"Send to their Code",new B.e_y(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_r(!1,w,!1,S.zG,"Import backup",new B.e_z(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:726}
B.e_x.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e_y.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bGP()},
$S:0}
B.e_z.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e_N.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jw(D.Sk,x,C.a3u,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.Sk).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:703}
B.e_L.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e_M.prototype={
$0(){this.a.ajN()
return null},
$S:0}
B.e_O.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*10)),e)},
$S:102}
B.e_P.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adu(e,w,v,this.b,x.e,x.ccc(w),new B.e_H(x,w),new B.e_I(x,v,w),new B.e_J(x,w),new B.e_K(x,w),null)},
$S:z+24}
B.e_H.prototype={
$0(){this.a.ah_(this.b)
return null},
$S:0}
B.e_I.prototype={
$0(){var x=this.a
return x.m(new B.e_G(x,this.b,this.c))},
$S:0}
B.e_G.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_J.prototype={
$0(){this.a.OJ(this.b)
return null},
$S:0}
B.e_K.prototype={
$0(){this.a.ajA(this.b)
return null},
$S:0}
B.dcP.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*18)),e)},
$S:102}
B.dcQ.prototype={
$3(d,e,f){return A.e3(C.z,f,e,null,null)},
$S:114}
B.ddc.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.ddb.prototype={
$1(d){return this.a.y.$0()},
$S:85}
B.dd8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dd9.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dda.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dd6.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fV(w,C.z,x,new B.dd4(this.a),C.hn,C.dD,!0,x,!1,x,x)
$.aU.x1$.push(new B.dd5(this.a))
return C.bM},
$S:142}
B.dd4.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dd2(this.a))
return C.bM},
$S:192}
B.dd2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd_(x))},
$S:7}
B.dd_.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd5.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd1(x))},
$S:7}
B.dd1.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd7.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dd3(this.a))
return C.bM},
$S:192}
B.dd3.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd0(x))},
$S:7}
B.dd0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcM.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcL(x,d))},
$S:1769}
B.dcL.prototype={
$0(){return this.a.f=this.b===C.vF},
$S:0}
B.dcN.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcK(x,d))},
$S:7}
B.dcK.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcO.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcJ(x,d))},
$S:7}
B.dcJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dcF.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dcG.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcH.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcI.prototype={
$1(d){return this.a.d.NE(0,A.dw(0,0,0,C.j.V(d),0,0))},
$S:6}
B.ddp.prototype={
$0(){var x=this.a.a
return B.rW(x.c,x.d)},
$S:1770}
B.ddq.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddr.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dds.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ddt.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddu.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.ddw.prototype={
$0(){var x=this.a
x.m(new B.ddv(x))},
$S:0}
B.ddv.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hh(0)
else x.qv(0)},
$S:0}
B.ddl.prototype={
$1(d){return this.a.Ry(this.b)},
$S:12}
B.ddm.prototype={
$1(d){return this.a.Rx(this.b)},
$S:12}
B.ddd.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dde.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ddf.prototype={
$1(d){return D.hzN},
$S:z+25}
B.ddk.prototype={
$2(d,e){if(d)B.Wj()},
$S:128}
B.ddg.prototype={
$0(){return this.a.ab2(this.b)},
$S:0}
B.ddh.prototype={
$0(){return this.a.ab_(this.b)},
$S:0}
B.ddi.prototype={
$0(){return this.a.afq(this.b)},
$S:0}
B.ddj.prototype={
$0(){return this.a.a2J(this.b)},
$S:0}
B.dcE.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.ddo.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.ddn(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddn.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceL.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n9)},
$S:z+1}
B.ceM.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceK.prototype={
$2(d,e){return this.bno(d,e)},
bno(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wk(u.c,A.J(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1771}
B.fEk.prototype={
$1(d){if(d===D.aa0&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fEl.prototype={
$0(){},
$S:11}
B.fEW.prototype={
boZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.frS(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hrc(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boZ(d,e)},
$S:550}
B.fEV.prototype={
$1(d){var x=this
d.b=new B.fEU(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fEU.prototype={
$1(d){return this.boY(d)},
boY(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1l(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.W.aP(0,n,null)
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
return A.b(B.frS(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8d(m),$async$$1)
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
x(v=B.aBe.prototype,"gcjR","R7",0)
x(v,"gckI","JT",0)
x(v,"gckd","yI",0)
x(v=B.aFf.prototype,"gcc6","afo",0)
x(v,"gcc7","a_N",0)
x(v,"gczx","ajh",0)
x(v=B.aFi.prototype,"gcc8","a_O",0)
x(v,"gczy","a33",0)
x(B.aFg.prototype,"gcc9","afp",0)
x(B.aBd.prototype,"gcce","ccf",4)
x(v=B.aFh.prototype,"gcke","a1_",0)
x(v,"gcy7","cy8",4)
x(v,"gb4J","aAM",0)
x(v,"gcB2","ajH",0)
x(v,"gbTg","YA",0)
x(v,"gccd","EQ",0)
x(B.aBf.prototype,"gb8v","a32",0)
x(B.aBc.prototype,"gccg","a_P",0)
x(v=B.aBi.prototype,"gb3r","cit",4)
x(v,"gcca","afs",0)
x(v=B.aBg.prototype,"gcx4","a2P",0)
x(v,"gb1o","afr",0)
w(B.aBb.prototype,"gazk","azl",8)
x(v=B.aBh.prototype,"gcn_","ahs",0)
x(v,"gbSK","abR",0)
w(v,"gazk","azl",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.csx,B.aaD,B.avz,B.aDT,B.aH3,B.jG,B.ada,B.byf,B.FN,B.Yu])
w(B.csy,B.csx)
w(B.b6s,B.aaD)
x(A.hq,[B.cst,B.csu,B.csv,B.css,B.csw,B.csz,B.csA,B.csB,B.csC,B.csD,B.csE,B.csF,B.csG,B.fxF,B.fX8,B.fXa,B.fX9,B.fXn,B.fXo,B.fAj,B.dcU,B.dcW,B.dcV,B.dcZ,B.fCg,B.fCK,B.cef,B.cem,B.cen,B.cei,B.ceg,B.cej,B.cek,B.fXl,B.fXm,B.e_U,B.e02,B.e00,B.e01,B.fuK,B.fAv,B.fAw,B.ceE,B.fAy,B.fEI,B.fyJ,B.fyK,B.ceJ,B.h1z,B.dcT,B.dcR,B.e_Q,B.dZM,B.dZS,B.e_a,B.dZR,B.e_h,B.e_B,B.e_C,B.e_D,B.e_8,B.e_q,B.e_p,B.e_r,B.e_s,B.e_t,B.e_v,B.e_w,B.e_o,B.dZU,B.dZV,B.dZQ,B.e_b,B.e_2,B.e_0,B.e_g,B.e_A,B.e_N,B.e_O,B.dcP,B.dcQ,B.ddc,B.ddb,B.dd6,B.dd4,B.dd2,B.dd5,B.dd7,B.dd3,B.dcM,B.dcN,B.dcO,B.dcI,B.ddl,B.ddm,B.ddf,B.ceL,B.ceM,B.fEk,B.fEV,B.fEU])
w(B.b6t,B.avz)
x(A.iO,[B.fX7,B.dcX,B.dcY,B.fCe,B.fCf,B.fCJ,B.dZJ,B.e_S,B.e_T,B.e_R,B.e_V,B.e_W,B.e_X,B.e_Y,B.e_Z,B.e0_,B.dZK,B.dZL,B.fAx,B.dcS,B.e_d,B.e_e,B.dZN,B.dZO,B.dZT,B.e_E,B.e_F,B.e_7,B.e_i,B.dZX,B.e_9,B.e_u,B.e_j,B.e_k,B.e_l,B.e_m,B.e_n,B.dZW,B.dZP,B.e_c,B.e_5,B.dZZ,B.e_3,B.e_4,B.e_6,B.dZY,B.e_f,B.e_x,B.e_y,B.e_z,B.e_L,B.e_M,B.e_H,B.e_I,B.e_G,B.e_J,B.e_K,B.dd8,B.dd9,B.dda,B.dd_,B.dd1,B.dd0,B.dcL,B.dcK,B.dcJ,B.dcF,B.dcG,B.dcH,B.ddp,B.ddq,B.ddr,B.dds,B.ddt,B.ddu,B.ddw,B.ddv,B.ddd,B.dde,B.ddg,B.ddh,B.ddi,B.ddj,B.dcE,B.ddo,B.ddn,B.fEl])
x(A.l2,[B.adt,B.Ok,B.aaE,B.Pr,B.Yt,B.Pq,B.FO])
x(A.af,[B.a_p,B.W8,B.Wc,B.W9,B.a_o,B.Wa,B.a_q,B.a_n,B.QG,B.a_s,B.a_m,B.a_t])
x(A.ah,[B.aBe,B.aFf,B.aFi,B.aFg,B.aBd,B.aFh,B.aBf,B.aBc,B.aBi,B.aBg,B.aBb,B.aBh])
x(A.aw,[B.adX,B.aBa,B.bfW,B.adu,B.ads,B.bfX])
x(A.jA,[B.cel,B.ceh,B.cep,B.ceq,B.fYj,B.e_1,B.e__,B.e_P,B.ddk,B.ceK,B.fEW])
x(A.j5,[B.blo,B.bxS])})()
A.j6(b.typeUniverse,JSON.parse('{"b6s":{"aaD":[]},"b6t":{"avz":[]},"a_p":{"af":[],"v":[]},"aBe":{"ah":["a_p"]},"adX":{"aw":[],"v":[]},"W8":{"af":[],"v":[]},"Wc":{"af":[],"v":[]},"aFf":{"ah":["W8"]},"aFi":{"ah":["Wc"]},"blo":{"j5":[]},"W9":{"af":[],"v":[]},"aFg":{"ah":["W9"]},"a_o":{"af":[],"v":[]},"Wa":{"af":[],"v":[]},"adu":{"aw":[],"v":[]},"a_q":{"af":[],"v":[]},"a_n":{"af":[],"v":[]},"QG":{"af":[],"v":[]},"a_s":{"af":[],"v":[]},"ads":{"aw":[],"v":[]},"a_m":{"af":[],"v":[]},"a_t":{"af":[],"v":[]},"aBd":{"ah":["a_o"]},"bxS":{"j5":[]},"aFh":{"ah":["Wa"]},"aBa":{"aw":[],"v":[]},"bfW":{"aw":[],"v":[]},"aBf":{"ah":["a_q"]},"aBc":{"ah":["a_n"]},"aBi":{"ah":["QG"]},"aBg":{"ah":["a_s"]},"aBb":{"ah":["a_m"]},"aBh":{"ah":["a_t"]},"bfX":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uN"),k:x("MM()"),o:x("bs<n,n>"),F:x("rv"),g:x("aB<jG?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bj>"),Y:x("O<a9<n,R>>"),t:x("O<a9<n,@>>"),r:x("O<jG>"),w:x("O<+file,name(lW,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j5>"),a:x("O<dJ>"),p:x("O<v>"),Z:x("O<H>"),G:x("bj"),A:x("cw<ah<af>>"),n:x("ai<jG>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bA<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iw"),e:x("iyt"),af:x("F_"),U:x("jG"),b:x("cu"),C:x("aF"),aK:x("wF"),ab:x("FN"),br:x("avz"),v:x("Yu"),N:x("n"),X:x("bq<G>"),Q:x("m8"),D:x("dJ"),aw:x("bh<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jG>>"),aW:x("c3<dJ?>"),aY:x("c3<~>"),cx:x("adt"),b1:x("bl<ai<jG>>"),cf:x("bl<dJ?>"),d4:x("bl<~>"),c4:x("aDT"),bG:x("aH3"),q:x("md"),B:x("pR<FN>"),c6:x("pR<aaE>"),y:x("R"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bj?"),_:x("ai<jG>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jG?"),R:x("aF?"),c:x("Yu?"),d:x("+answerQr,transfer(n,aB<ai<jG>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Ok,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dJ?"),cm:x("ada?"),bk:x("aDT?"),ag:x("aH3?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b6E=new A.ay(C.aD,2,C.r,-1)
D.c9x=new A.a7(C.a5,C.a8,C.x,C.a5C,null,null)
D.b8i=new A.o(null,null,null,C.mK,null,D.c9x,C.n)
D.b9N=new A.o(null,null,null,C.mK,null,E.Ij,C.n)
D.agz=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ai3=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aj6=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.akR=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fLb=new A.B("Your team portal",null,C.dk,null,null,null,null,null,null,null,null,null)
D.h_6=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.F5,null,null,null,null,null,null,null,null,null)
D.dlZ=x([D.fLb,C.am,D.h_6],y.p)
D.byu=new A.fo(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dlZ,null)
D.h3B=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fPI=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.F5,null,null,null,null,null,null,null,null,null)
D.dDg=x([D.h3B,C.am,D.fPI],y.p)
D.byE=new A.fo(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dDg,null)
D.h_K=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fTG=new A.B("Enter the access code and password from your organization.",null,G.F5,null,null,null,null,null,null,null,null,null)
D.dB_=x([D.h_K,C.am,D.fTG],y.p)
D.byO=new A.fo(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dB_,null)
D.bF3=new A.Q(16,10,16,28)
D.bFb=new A.Q(16,14,16,4)
D.bGq=new A.Q(20,0,20,16)
D.bGX=new A.Q(20,8,20,16)
D.anI=new A.Q(24,22,24,20)
D.a3z=new A.a_(63394,"MaterialIcons",!1)
D.aqR=new A.a_(63515,"MaterialIcons",!1)
D.bUj=new A.a_(983813,"MaterialIcons",!1)
D.bRr=new A.a_(62867,"MaterialIcons",!1)
D.bVf=new A.ae(D.bRr,44,C.c,null,null,null)
D.bWk=new A.ae(C.ka,null,C.ab,null,null,null)
D.bXI=new A.ae(C.jv,18,null,null,null,null)
D.bZv=new A.ae(D.a3z,26,C.c,null,null,null)
D.c_5=new A.ae(C.Dn,null,null,null,null,null)
D.c_H=new A.ae(C.Dv,null,null,null,null,null)
D.c0T=new A.ae(W.a3K,null,null,null,null,null)
D.c1e=new A.ae(C.hR,16,null,null,null,null)
D.c4U=new A.ae(C.tl,16,null,null,null,null)
D.bVx=new A.ae(C.mj,null,null,null,null,null)
D.c5M=new A.e7(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c0e=new A.ae(C.Hz,null,null,null,null,null)
D.c5R=new A.e7(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c0e,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVS=new A.ae(C.Dy,null,null,null,null,null)
D.c61=new A.e7(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cVn=x([C.fq,C.b2,C.aD],y.O)
D.cbt=new A.a7(C.ay,C.aC,C.x,D.cVn,null,null)
D.cUM=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Sk=x([C.fq,C.aD],y.O)
D.SA=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n9=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dv4=x([C.mS,C.aD],y.O)
D.epp={iceServers:0}
D.aMr={urls:0}
D.dGX=new A.bs(D.aMr,["stun:stun.l.google.com:19302"],y.o)
D.dGW=new A.bs(D.aMr,["stun:stun1.l.google.com:19302"],y.o)
D.dbn=x([D.dGX,D.dGW],A.at("O<a9<n,n>>"))
D.dGe=new A.bs(D.epp,[D.dbn],A.at("bs<n,@>"))
D.Jr=new B.Ok(0,"lanDirect")
D.TY=new B.Ok(1,"cloudStash")
D.dTS=new B.Ok(2,"inlineInstant")
D.TZ=new B.Ok(3,"webrtcLink")
D.As=new B.Ok(4,"videoCloud")
D.h_5=new A.B("Receive file",null,C.nh,null,null,null,null,null,null,null,null,null)
D.cKy=x([E.asD,C.ae,D.h_5],y.p)
D.fdw=new A.c7(C.aL,C.b8,C.h,C.l,null,C.p,null,0,D.cKy,null)
D.ewS=new A.D(C.co,D.fdw,null)
D.fBx=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.IP,null,null,null)
D.fLL=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fBx,null,C.K,null,null,null,null,null,null,null)
D.ew3=new A.D(C.CN,D.fLL,null)
D.bem=new A.cj(C.z,null,null,D.ew3,null)
D.eDa=new A.cK(0,null,0,28,null,null,D.bem,null)
D.eDu=new B.aaE(0,"RTCDataChannelConnecting")
D.aRV=new B.aaE(1,"RTCDataChannelOpen")
D.aRW=new B.aaE(3,"RTCDataChannelClosed")
D.eDv=new B.FO(0,"RTCIceConnectionStateNew")
D.eDw=new B.FO(1,"RTCIceConnectionStateChecking")
D.eDx=new B.FO(2,"RTCIceConnectionStateCompleted")
D.eDy=new B.FO(3,"RTCIceConnectionStateConnected")
D.eDz=new B.FO(4,"RTCIceConnectionStateCount")
D.eDA=new B.FO(5,"RTCIceConnectionStateFailed")
D.eDB=new B.FO(6,"RTCIceConnectionStateDisconnected")
D.aRX=new B.FO(7,"RTCIceConnectionStateClosed")
D.aRY=new B.Yt(0,"RTCIceGatheringStateNew")
D.eDC=new B.Yt(1,"RTCIceGatheringStateGathering")
D.aa0=new B.Yt(2,"RTCIceGatheringStateComplete")
D.aa1=new B.Pq(0,"RTCPeerConnectionStateClosed")
D.aRZ=new B.Pq(1,"RTCPeerConnectionStateFailed")
D.aS_=new B.Pq(2,"RTCPeerConnectionStateDisconnected")
D.aS0=new B.Pq(3,"RTCPeerConnectionStateNew")
D.aS1=new B.Pq(4,"RTCPeerConnectionStateConnecting")
D.aS2=new B.Pq(5,"RTCPeerConnectionStateConnected")
D.eDD=new B.Pr(0,"RTCSignalingStateStable")
D.eDE=new B.Pr(1,"RTCSignalingStateHaveLocalOffer")
D.eDF=new B.Pr(2,"RTCSignalingStateHaveRemoteOffer")
D.eDG=new B.Pr(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eDH=new B.Pr(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aS3=new B.Pr(5,"RTCSignalingStateClosed")
D.fiC=new A.av(160,48)
D.bfB=new A.fl(2,null,null,null,null,C.aD,null,null,null,null)
D.fk9=new A.a3(16,16,D.bfB,null)
D.fP2=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.flD=new A.b0(D.fP2,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWK=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.flH=new A.b0(D.fWK,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4E=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.flO=new A.b0(D.h4E,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOD=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fmd=new A.b0(D.fOD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_V=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVa=new A.b0(D.h_V,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1n=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fmH=new A.b0(D.h1n,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h67=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fmY=new A.b0(D.h67,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h43=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new A.b0(D.h43,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5i=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fnQ=new A.b0(D.h5i,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNd=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fon=new A.b0(D.fNd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYF=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.foJ=new A.b0(D.fYF,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRm=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fpf=new A.b0(D.fRm,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6c=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fpj=new A.b0(D.h6c,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNt=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new A.b0(D.fNt,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fM8=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fpE=new A.b0(D.fM8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fIS=new A.B("NGMY DOC SHARE",null,C.aWA,null,null,null,null,null,null,null,null,null)
D.fKi=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fLj=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fQ8=new A.B("Organization settings",null,C.cF,null,null,null,null,null,null,null,null,null)
D.fQw=new A.B("Sign in",null,C.cd,null,null,null,null,null,null,null,null,null)
D.fRx=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fS4=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fUX=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.fY6=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fYr=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fZ2=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZ9=new A.B("Create portal",null,C.cd,null,null,null,null,null,null,null,null,null)
D.fZy=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f9,null,null,null,null,null,null,null,null,null)
D.h1T=new A.B("Share files & videos\nwith a scan.",null,C.aWD,null,null,null,null,null,null,null,null,null)
D.h2c=new A.B("Add files",null,C.cd,null,null,null,null,null,null,null,null,null)
D.hzN=new B.a_m(null)
D.adm=new B.adt(0,"docShare")
D.adn=new B.adt(1,"gate")
D.X5=new B.adt(2,"gateNoIndividual")})();(function staticFields(){$.aPR=null
$.fpr=function(){var x=y.N
return A.T(x,x)}()
$.H2=A.T(y.N,y.D)
$.ahw=A.T(y.N,A.at("lW"))
$.S2=A.T(y.N,y.D)
$.fq7=A.T(y.N,A.at("ada"))
$.ceD=A.T(y.S,A.at("byf"))
$.hrb=1
$.ifQ=null
$.ifP=null
$.i77=null
$.hfy=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iyY","hJB",()=>new B.csy())
x($,"iwS","hjD",()=>C.a.q(A.bB(A.bB(A.bB(A.HC(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["yXcDzdJjceWXj+4q3QNcluShrxA="]=a.current})($__dart_deferred_initializers__);