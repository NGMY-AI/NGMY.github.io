((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cp8:function cp8(){},
hST(d){var x=null,w=new B.b5f(d,D.ett,new A.pD(x,x,y.c6),new A.pD(x,x,y.B))
w.bA7(d)
return w},
b5f:function b5f(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cp3:function cp3(d){this.a=d},
cp4:function cp4(d){this.a=d},
cp5:function cp5(d){this.a=d},
cp2:function cp2(d){this.a=d},
cp6:function cp6(d){this.a=d},
hSU(d,e){var x=y.N
x=new B.b5g(d,e,A.U(x,y.e),A.U(x,y.z))
x.bA8(d,e)
return x},
b5g:function b5g(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cp9:function cp9(d){this.a=d},
cpa:function cpa(d){this.a=d},
cpb:function cpb(d){this.a=d},
cpc:function cpc(d){this.a=d},
cpd:function cpd(d){this.a=d},
cpe:function cpe(d){this.a=d},
cpf:function cpf(d){this.a=d},
cpg:function cpg(d){this.a=d},
h88(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zd.Mk(x,"ngmy_doc_share_v1",new B.fsa(),1)},
hZt(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cn(d))
if(y.J.b(d))return new Uint8Array(A.cn(J.eI(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cn(A.ym(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cF.aO(d)
return x}catch(w){return v}return v},
Rz(d,e){return B.ie6(d,e)},
ie6(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rz=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aOJ
x=7
return A.b(o==null?$.aOJ=B.h88():o,$async$Rz)
case 7:s=g
r=new Uint8Array(A.cn(e))
q=J.mX(s,"blobs","readwrite")
C.j0.mq(J.mW(q,"blobs"),r,d)
x=8
return A.b(J.pL(q),$async$Rz)
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
return A.i($async$Rz,w)},
Ry(d){return B.ie5(d)},
ie5(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Ry=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aOJ
x=7
return A.b(o==null?$.aOJ=B.h88():o,$async$Ry)
case 7:s=f
r=J.mX(s,"blobs","readonly")
x=8
return A.b(C.j0.zG(J.mW(r,"blobs"),d),$async$Ry)
case 8:q=f
x=9
return A.b(J.pL(r),$async$Ry)
case 9:o=B.hZt(q)
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
return A.i($async$Ry,w)},
ahl(d){return B.ie4(d)},
ie4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aOJ
x=7
return A.b(p==null?$.aOJ=B.h88():p,$async$ahl)
case 7:s=f
r=J.mX(s,"blobs","readwrite")
C.j0.G2(J.mW(r,"blobs"),d)
x=8
return A.b(J.pL(r),$async$ahl)
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
return A.i($async$ahl,w)},
fsa:function fsa(){},
i0T(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bq2(w,v))}return u},
hyu(d,e){var x,w={},v=A.aXj("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fQD(w,v,e)
C.wz.yG(v,"change",new B.fQF(w,v,!1))
C.wz.yG(v,"cancel",new B.fQE(w))
$.eX.mw()
v.click()
A.bP(C.aju,new B.fQC(w),y.H)},
fQD:function fQD(d,e,f){this.a=d
this.b=e
this.c=f},
fQF:function fQF(d,e,f){this.a=d
this.b=e
this.c=f},
fQE:function fQE(d){this.a=d},
fQC:function fQC(d){this.a=d},
Di(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Di=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd_()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gU8()?3:4
break
case 3:x=5
return A.b(B.htw(e,d,s,!0,!1,f,g,h,!1,i),$async$Di)
case 5:x=1
break
case 4:x=6
return A.b(B.Re(d,s,f,g,h,i),$async$Di)
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
return A.b(B.IP(s,d),$async$Di)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fnH(s,d),$async$Di)
case 14:x=12
return A.b(r.htw(q,p,o,n,m,l,k,j,a1,i),$async$Di)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cc(A.eh(new B.fQS(s,i,d,f,g,h),!1,null,y.H)),$async$Di)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cc(A.eh(new B.fQT(s,i,d,f,g,h),!1,null,y.H)),$async$Di)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Di,w)},
Re(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Re=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0_(e),$async$Re)
case 3:u=k
x=4
return A.b(B.apP(d,e,!1),$async$Re)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IP(e,d),$async$Re)
case 7:if(k){v=D.abl
x=1
break}x=8
return A.b(B.Vi(e),$async$Re)
case 8:v=t?D.VR:D.abm
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b_Y(d,e)){v=D.abl
x=1
break}x=11
return A.b(B.Vi(e),$async$Re)
case 11:v=t?D.VR:D.abm
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h38(d,e)){v=D.abl
x=1
break}x=14
return A.b(B.Vi(e),$async$Re)
case 14:v=D.VR
x=1
break
case 13:v=t?D.VR:D.abm
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Re,w)},
fnH(d,e){var x=0,w=A.j(y.y),v
var $async$fnH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b_Y(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0_(d),$async$fnH)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnH,w)},
htw(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cc(A.eh(new B.fuH(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hox(d,e,f,g,h,i,j){return new B.Zw(e,j,d,g,h,i,f,null)},
fwD(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fwD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.at,u)
s=new A.au(C.at,u)
x=3
return A.b(A.bV(C.L,null,new B.fwG(A.P(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fwD)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwD,w)},
fx7(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fx7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.at,u)
s=new A.au(C.at,u)
r=new A.au(C.at,u)
x=3
return A.b(A.bV(C.L,null,new B.fx9(A.P(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fx7)
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
return A.i($async$fx7,w)},
h8i(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b5(4,A.n(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fJ9(d,e){var x=0,w=A.j(y.H),v
var $async$fJ9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Vi(e),$async$fJ9)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eM()
case 1:return A.h(v,w)}})
return A.i($async$fJ9,w)},
fQS:function fQS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQT:function fQT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acz:function acz(d,e){this.a=d
this.b=e},
fuH:function fuH(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zw:function Zw(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAe:function aAe(){this.c=this.a=this.d=null},
d8U:function d8U(d,e){this.a=d
this.b=e},
d8R:function d8R(d){this.a=d},
d8T:function d8T(d){this.a=d},
d8S:function d8S(d){this.a=d},
d8W:function d8W(){},
d8V:function d8V(d){this.a=d},
ad1:function ad1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCR:function aCR(d,e){this.a=d
this.b=e},
aFZ:function aFZ(d,e,f){this.a=d
this.b=e
this.c=f},
fwG:function fwG(d,e,f){this.a=d
this.b=e
this.c=f},
fwE:function fwE(d){this.a=d},
fwF:function fwF(d,e,f){this.a=d
this.b=e
this.c=f},
fx9:function fx9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fx8:function fx8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cch(d,e,f,g,h){return B.hNN(d,e,f,g,h)},
hNN(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cch=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iW(r.dH(d,new B.cci(s,e,h,g,f,q),y.g),y.l),$async$cch)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gS(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cch,w)},
b_V(d,e,f,g,h){return B.hNO(d,e,f,g,h)},
hNO(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_V=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avk("GET",d)
o=A.h_y()
if(o==null)o=new A.M5(A.a([],y.W))
x=7
return A.b(o.f6(0,s).da(0,C.Gb),$async$b_V)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cv(),$async$b_V)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BX(q,h,o,e,f,"Received via QR")
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
return A.i($async$b_V,w)},
b_U(d){return B.hNL(d)},
hNL(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vz(d,null).da(0,C.ob),$async$b_U)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aM(0,A.m5(A.m3(p.e)).cB(0,p.w),null)
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
return A.i($async$b_U,w)},
ccg(d){return B.hNM(d)},
hNM(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ccg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vz(d,null).da(0,C.qf),$async$ccg)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m5(A.m3(q.e)).cB(0,q.w)
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
return A.i($async$ccg,w)},
cci:function cci(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jy:function jy(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
IN(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hNT(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IN(C.a.b5(u,v.length))}return null},
hNU(d){var x=B.IN(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hNP(){var x,w=$.oh(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.ap(10)
return C.d.hm(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(24)]},
a7d(d){return B.hNQ(d)},
hNQ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
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
a7e(d,e){return B.hNR(d,e)},
hNR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7e=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hM(d,e,!1,!1,C.cG,null),$async$a7e)
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
BW(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BW)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IN(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7f(r),$async$BW)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7d("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BW)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IN(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BW)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hNP()
x=14
return A.b(B.a7f(m),$async$BW)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a8().ae()
x=15
return A.b(B.a7e("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BW)
case 15:k=f
x=16
return A.b(B.a7e("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BW)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BW)
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
return A.i($async$BW,w)},
a7f(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IN(d)
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
a7g(d,e,f,g){return B.hNV(d,e,f,g)},
hNV(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7g=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IN(f)
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
break}if(g.cI(d,0,new B.cco())>1048576||g.b3(d,new B.ccp())){v=B.EQ(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7r("myCode",d,a0),$async$a7g)
case 4:u=a3
try{t=C.X.aM(0,u,null)
if(y.f.b(t)){s=J.r(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.EQ(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b02(u,g.gL(d),a0),$async$a7g)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().ap(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dH(d,new B.ccq(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b_W(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"status","pending"],i,y.z),q),$async$a7g)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7g,w)},
EQ(d,e,f,g,h){return B.hNS(d,e,f,g,h)},
hNS(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EQ=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$EQ)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cI(a6,0,new B.cck())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oh().ap(9999)
h=Date.now()
g=""+1000*h+"_"+C.cK.ap(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
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
a1=B.IR(a9,q)
a0=new A.KG(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$EQ)
case 11:if(!b1){x=10
break}n=a0.gS(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aX(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pb(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaQ(a1.a,a4,"media",a1.d,a2).xh(m,n,new A.E7(!0,q.c)),$async$EQ)
case 12:J.ca(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$EQ)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRg(r),$async$EQ)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dH(a6,new B.ccl(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b_W(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"status","pending"],e,d),a8),$async$EQ)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRg(r),$async$EQ)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EQ,w)},
b_W(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b_W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7d(t),$async$b_W)
case 3:s=g
r=y.aL.a(J.r(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.ccj(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7e(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_W,w)},
NK(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NK=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7d("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NK)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.r(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b_X(k,a0),$async$NK)
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
return A.b(B.b01(h),$async$NK)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vp(g,a0),$async$NK)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a8().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Z(r,new B.ccm(),q),n)
d=A.C(new A.Z(r,new B.ccn(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d_(d,0,A.dB(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7e("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$NK)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NK,w)},
b_X(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b_X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gS(u)
if(!r.b(p)){x=3
break}o=J.a6(p)
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
break}i=B.ihX(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dg(l,m,"Received via My Code",t,e,i),$async$b_X)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRg(s),$async$b_X)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_X,w)},
cco:function cco(){},
ccp:function ccp(){},
ccq:function ccq(){},
cck:function cck(){},
ccl:function ccl(){},
ccj:function ccj(){},
ccm:function ccm(){},
ccn:function ccn(){},
fQP(d,e){var x=0,w=A.j(y.H)
var $async$fQP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cc(A.eh(new B.fQQ(e),!1,null,y.H)),$async$fQP)
case 2:return A.h(null,w)}})
return A.i($async$fQP,w)},
bET(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bET=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cc(A.eh(new B.fQR(g,e,f),!1,null,y.y)),$async$bET)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bET,w)},
fQQ:function fQQ(d){this.a=d},
fQR:function fQR(d,e,f){this.a=d
this.b=e
this.c=f},
Vf:function Vf(d,e){this.c=d
this.a=e},
aEc:function aEc(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dV_:function dV_(d,e){this.a=d
this.b=e},
Vj:function Vj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEf:function aEf(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dW8:function dW8(d){this.a=d},
dW9:function dW9(d){this.a=d},
dWa:function dWa(d){this.a=d},
dW7:function dW7(d,e){this.a=d
this.b=e},
dWb:function dWb(d){this.a=d},
dWc:function dWc(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWe:function dWe(d,e){this.a=d
this.b=e},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWg:function dWg(d){this.a=d},
dWj:function dWj(){},
dWh:function dWh(d){this.a=d},
dWi:function dWi(d,e){this.a=d
this.b=e},
bkd:function bkd(){},
Vg:function Vg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEd:function aEd(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dV0:function dV0(d){this.a=d},
dV1:function dV1(d){this.a=d},
h39(d){var x=d.i0
if(x>=0)return C.o.N(x)
return 10},
hNX(d){var x=d.kX
if(x>=0)return x
return 4.99},
hNW(d){var x=d.lz,w=y.N
w=x.jk(x,new B.ccs(),w,w)
return w},
hjC(d){var x=d.kY,w=y.N
w=x.jk(x,new B.cct(),w,w)
return w},
b0_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0_)
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
return A.i($async$b0_,w)},
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
Vi(d){var x=0,w=A.j(y.H),v,u
var $async$Vi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Vi)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Vi)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Vi,w)},
h38(d,e){var x,w,v
if(B.hNX(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hNW(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bk(w)
return v!=null&&v.ce(new A.V(Date.now(),0,!1))},
b_Y(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hjC(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bk(x)
return w!=null&&w.ce(new A.V(Date.now(),0,!1))},
hjD(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hjC(d),x,x)
x=w.h(0,t)
v=A.bk(x==null?"":x)
u=v!=null&&v.ce(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dx(f,0,0,0,0,0).a).a8().ae())
d.kY=w},
apQ(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apQ)
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
return A.i($async$apQ,w)},
apR(d){var x=0,w=A.j(y.H),v,u,t
var $async$apR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apQ(d),$async$apR)
case 3:u=f
x=5
return A.b(A.az(),$async$apR)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$apR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apR,w)},
apP(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h39(d)
if(u<=0){v=!1
x=1
break}if(B.h38(d,e)){v=!1
x=1
break}x=3
return A.b(B.apQ(e),$async$apP)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apP,w)},
b_Z(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b_Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IP(e,d),$async$b_Z)
case 3:if(g){v=-1
x=1
break}u=B.h39(d)
if(u<=0){v=-1
x=1
break}if(B.h38(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apQ(e),$async$b_Z)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_Z,w)},
ccv(d,e,f){var x=0,w=A.j(y.y),v
var $async$ccv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IP(e,d),$async$ccv)
case 3:if(h){v=!1
x=1
break}v=B.apP(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccv,w)},
ccu(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ccu=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd_()
x=3
return A.b(B.ccv(d,u,i.gU8()),$async$ccu)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccu,w)},
a7h(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7h=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd_()
if(i.gU8()){v=!0
x=1
break}if(B.b_Y(d,u)){v=!0
x=1
break}x=5
return A.b(A.lu(u,C.T5),$async$a7h)
case 5:x=k?3:4
break
case 3:B.hjD(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7h)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l7(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.T5,"Doc Share for Organizations"),$async$a7h)
case 7:if(!k){v=!1
x=1
break}B.hjD(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7h)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7h,w)},
ccs:function ccs(){},
cct:function cct(){},
fRH(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fRH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fRH)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fkh.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hN([r],e.c))
s.toString
$.fkh.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRH,w)},
ikh(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fkh.bs($.fkh,new B.fRJ(d))},
fRJ:function fRJ(d){this.a=d},
flK(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$flK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hN([d],f))
s.toString
u=A.mZ(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.je,null,y.H),$async$flK)
case 3:C.AI.fm(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mw()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$flK,w)},
agc(d,e,f){var x=0,w=A.j(y.H),v
var $async$agc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fkQ.n(0,d,new B.acg(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$agc)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.X.aq(A.H(["parts",e,"size",f],v,y.C),null)),$async$agc)
case 2:return A.h(null,w)}})
return A.i($async$agc,w)},
ag6(d){return B.i2Q(d)},
i2Q(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ag6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fkQ.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ag6)
case 3:u=j.aT(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aM(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b6(s,new B.fph(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.acg(r)
$.fkQ.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ag6,w)},
R4(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$R4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cn(e))
$.GB.n(0,d,u)
x=3
return A.b(B.Rz(d,u),$async$R4)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R4,w)},
aP5(d){return B.i2O(d)},
i2O(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aP5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GB.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.Ry(d),$async$aP5)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.GB.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aP5)
case 4:s=f
r=A.aT(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aO(r)
x=!J.ct(q)?9:10
break
case 9:B.R4(d,q)
x=11
return A.b(J.hu(s,d),$async$aP5)
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
return A.i($async$aP5,w)},
hZT(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cn(J.eI(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cn(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cn(A.ym(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cn(d)),y.K)
return A.f8(null,y.K)},
a21(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a21=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bj($.bB,y.cf)
t=new A.c_(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.fuT(r,t),!1,s)
A.fA(r,"error",new B.fuU(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iA(0,C.Ne,new B.fuV())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a21,w)},
aPp(d,e,f){return B.i57(d,e,f)},
i57(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPp=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a21(i),$async$aPp)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Rz(o,p),$async$aPp)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.ca(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agc(k,j,s),$async$aPp)
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
return A.i($async$aPp,w)},
aPo(d,e,f){return B.i56(d,e,f)},
i56(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPo=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPp(d,e,f),$async$aPo)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a21(f),$async$aPo)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GB.n(0,s,r)
$.Rl.n(0,s,r)
x=11
return A.b(B.R4(s,r),$async$aPo)
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
return A.i($async$aPo,w)},
BX(d,e,f,g,h,i){return B.hO5(d,e,f,g,h,i)},
hO5(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BX=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cK.ap(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jy(p,q,o,n,new A.V(Date.now(),0,!1).a8().ae(),a0,f,B.b05(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.R4(s,d),$async$BX)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BX)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cJ.gct().aO(d)),$async$BX)
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
return A.b(B.AU(e),$async$BX)
case 12:j=a2
J.ca(j,m)
x=13
return A.b(B.GM(e,j),$async$BX)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BX,w)},
Vk(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vk=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AU(d),$async$Vk)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cK.ap(99999)
n=p.b
l=o.type
l.toString
k=B.hjF(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a8().ae()
i=new B.jy(m,n,k,l,j,"From folder",null,B.b05(),null)
$.agG.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a21(o),$async$Vk)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.GB.n(0,h,g)
$.Rl.n(0,h,g)
B.R4(h,g)
x=9
break
case 10:x=11
return A.b(B.aPo(d,m,o),$async$Vk)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GM(d,t),$async$Vk)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vk,w)},
h3d(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h3d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hjF(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IQ(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.BX(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h3d,w)},
IQ(d,e,f,g,h,i){return B.hO4(d,e,f,g,h,i)},
hO4(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IQ=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cK.ap(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KG(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IQ)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.ct(m)){x=6
break}J.h9(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cn(J.S8(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kD(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Rz(k,l),$async$IQ)
case 11:J.ca(q,k);++p
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
return A.b(j.a4(0),$async$IQ)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Rz(k,new Uint8Array(A.cn(n))),$async$IQ)
case 15:J.ca(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agc(r,q,g),$async$IQ)
case 16:f=new B.jy(i,a1,a0,g,new A.V(Date.now(),0,!1).a8().ae(),a2,null,B.b05(),null)
x=17
return A.b(B.AU(d),$async$IQ)
case 17:e=a6
J.ca(e,f)
x=18
return A.b(B.GM(d,e),$async$IQ)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IQ,w)},
Vm(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Vm=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agG.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a21(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ag6(s),$async$Vm)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Ry(u[o]),$async$Vm)
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
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Rl.h(0,s)
if(i==null)i=$.GB.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rG(d,e),$async$Vm)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Rl.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.ym(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vm,w)},
hjF(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rG(d,e){return B.hO6(d,e)},
hO6(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rG=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Rl.h(0,f)
if(e==null)e=$.GB.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agG.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a21(s),$async$rG)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.GB.n(0,f,r)
$.Rl.n(0,f,r)
B.R4(f,r)
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
return A.b(B.ag6(f),$async$rG)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ayY(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Ry(g[l]),$async$rG)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.aoY()
if(!C.aG.gan(r)){$.GB.n(0,f,r)
$.Rl.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aP5(f),$async$rG)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Rl.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Vm(a0,a1,0,g),$async$rG)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.cn(i))
$.GB.n(0,f,h)
$.Rl.n(0,f,h)
B.R4(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rG,w)},
hO9(d){var x,w,v=$.agG.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hOa(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hN([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hO7(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apX(d,e,f,g,h){return B.hO8(d,e,f,g,h)},
hO8(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apX=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agG.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a21(s),$async$apX)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rG(g,e),$async$apX)
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
return A.b(n.iu(d).xh(h,r,new A.E7(!0,e.c)),$async$apX)
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
return A.i($async$apX,w)},
hjH(d,e,f,g,h){var x,w,v,u,t=$.hjG
$.hjG=t+1
x=Date.now()
w=""+1000*x+"_"+C.cK.ap(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ccG.n(0,t,new B.bwV(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ayY(u)))
return t},
h3e(d){var x=0,w=A.j(y.H)
var $async$h3e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h3e,w)},
IR(d,e){var $async$IR=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agG.h(0,h)
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
return A.ql(B.Vm(d,e,p,o<q?o:q),$async$IR,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.ql(A.G8(n),$async$IR,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.ql(B.ag6("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IR,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.ql(B.Ry(h[l]),$async$IR,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.ql(A.G8(k),$async$IR,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.ql(B.rG(d,e),$async$IR,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.ql(A.G8(A.ym(j,p,o<i?o:i)),$async$IR,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.ql(null,0,w)
case 2:return A.ql(t.at(-1),1,w)}})
var x=0,w=A.hsp($async$IR,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.huf(w)},
b07(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b07=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ccG.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a5g(),$async$b07)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b07,w)},
Vl(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Vl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccG.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5g(),$async$Vl)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agc(r.c,u,r.z),$async$Vl)
case 4:t=new B.jy(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a8().ae(),r.f,r.r,B.b05(),null)
u=r.a
x=5
return A.b(B.AU(u),$async$Vl)
case 5:s=f
J.ca(s,t)
x=6
return A.b(B.GM(u,s),$async$Vl)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vl,w)},
a7o(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccG.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahl(u[s]),$async$a7o)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.aa(0)
case 1:return A.h(v,w)}})
return A.i($async$a7o,w)},
ccI(d,e,f){var x=0,w=A.j(y.H)
var $async$ccI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBU(d,e,f),$async$ccI)
case 2:return A.h(null,w)}})
return A.i($async$ccI,w)},
ccJ(d,e,f){var x=0,w=A.j(y.H)
var $async$ccJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBV(d,e,f),$async$ccJ)
case 2:return A.h(null,w)}})
return A.i($async$ccJ,w)},
ER(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$ER=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AU(d),$async$ER)
case 2:p=g
J.nG(p,new B.ccH(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GB.W(0,v)
$.agG.W(0,e)
x=3
return A.b(B.ag6(v),$async$ER)
case 3:u=g
$.fkQ.W(0,v)
x=4
return A.b(A.az(),$async$ER)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$ER)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$ER)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahl(s[q]),$async$ER)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahl(v),$async$ER)
case 13:x=14
return A.b(B.GM(d,p),$async$ER)
case 14:return A.h(null,w)}})
return A.i($async$ER,w)},
b06(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b06=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rG(d,e),$async$b06)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.flK(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b06,w)},
AU(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AU)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aM(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fuW(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AU,w)},
GM(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GM)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fz2(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.X.aq(t,null)),$async$GM)
case 3:return A.h(null,w)}})
return A.i($async$GM,w)},
bBU(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AU(d),$async$bBU)
case 3:u=h
t=J.cD(u)
s=t.bh(u,new B.ft5(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEU(f))
x=4
return A.b(B.GM(d,u),$async$bBU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBU,w)},
bBV(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AU(d),$async$bBV)
case 3:u=h
t=J.cD(u)
s=t.bh(u,new B.ft6(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cLm(f))
x=4
return A.b(B.GM(d,u),$async$bBV)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBV,w)},
acg:function acg(d){this.a=d},
fph:function fph(){},
fuT:function fuT(d,e){this.a=d
this.b=e},
fuU:function fuU(d){this.a=d},
fuV:function fuV(){},
ccH:function ccH(d){this.a=d},
bwV:function bwV(d,e,f,g,h,i,j,k,l){var _=this
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
fuW:function fuW(){},
fz2:function fz2(){},
ft5:function ft5(d){this.a=d},
ft6:function ft6(d){this.a=d},
a7p(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b3(d,new B.ccM())?3:4
break
case 3:x=5
return A.b(B.b08(d,e),$async$a7p)
case 5:u=g
if(u!=null){t=u.c
B.NM(d,u.b,e,t)}v=u
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
return A.b(B.b03(s),$async$a7p)
case 10:case 9:if(g){v=new A.Qr(1,D.SJ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vn(d,e),$async$a7p)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Vs(!0,!0,d,e),$async$a7p)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.NM(d,D.zR,e,t)
v=new A.Qr(p,D.zR,t)
x=1
break}v=B.ccL(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7p,w)},
Vn(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7r(null,d,e),$async$Vn)
case 3:p=g
try{u=C.X.aM(0,p,null)
t=y.f.b(u)?J.r(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b02(p,d.length,e),$async$Vn)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ccJ(e,C.d.gI(d).a,r.b),$async$Vn)
case 7:case 6:q=r.a
x=8
return A.b(B.NM(d,D.SJ,e,q),$async$Vn)
case 8:v=new A.Qr(d.length,D.SJ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vn,w)},
Vo(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mB(D.mR)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7q(d,e),$async$Vo)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ccE(s,d,e,t),$async$Vo)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b03(t),$async$Vo)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rG(e,d),$async$Vo)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vn(A.a([d],y.r),e),$async$Vo)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vo,w)},
Vq(){var x=0,w=A.j(y.H)
var $async$Vq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h37(),$async$Vq)
case 2:x=3
return A.b(B.aRA(),$async$Vq)
case 3:return A.h(null,w)}})
return A.i($async$Vq,w)},
a7q(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b05()
x=3
return A.b(B.ccI(e,d.a,u),$async$a7q)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7q,w)},
NM(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$NM=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.SJ&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7q(p,f),$async$NM)
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
return A.b(B.ccD(o,p,u,f),$async$NM)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ccE(o,p,f,t),$async$NM)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ccC(o,u,p,f),$async$NM)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$NM,w)},
b08(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b08=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccK(e,d),$async$b08)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Vs(!1,!0,d,e),$async$b08)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qr(u.a,D.zR,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b08,w)},
ccK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ccK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Vm(d,s,0,1),$async$ccK)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.L)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccK,w)},
ccL(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ccL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7r(null,d,e),$async$ccL)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hjE(u)
if(t.length>800){v=null
x=1
break}v=new A.Qr(d.length,D.dKs,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccL,w)},
apY(d,e,f){return B.hOd(d,e,f)},
hOd(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apY=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nk(g,1)
x=B.h3c(g)?3:4
break
case 3:x=5
return A.b(B.ccF(g),$async$apY)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nk(g,13))
try{k=B.ES(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nk(g,13))
u=9
x=12
return A.b(B.b01(q),$async$apY)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vp(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.h3b(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vp(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.IS(C.a.i(J.nk(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.IS(C.a.i(J.nk(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.ar(k,0,k.length-1)
else h=k
v=B.IS(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vp(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apY,w)},
IS(d,e,f){return B.hOb(d,e,f)},
hOb(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IS=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.ar(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cH(A.w(s)+"/manifest.json",0,null)
q=A.cH(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_U(r),$async$IS)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_U(A.cH(s,0,null)),$async$IS)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cch(o,r,a1,n,a2),$async$IS)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ccg(q),$async$IS)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vp(l,a2),$async$IS)
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
return A.i($async$IS,w)},
a7r(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7r=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gS(u)
x=5
return A.b(B.rG(f,r),$async$a7r)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aO(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).a8().ae())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.aq(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7r,w)},
Vp(d,e){return B.hOc(d,e)},
hOc(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vp=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aM(0,a2,null)
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
break}m=e.gS(e)
if(!f.b(m)){x=7
break}d=J.r(m,"name")
l=J.k(d==null?"file":d)
d=J.r(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.r(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aO(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BX(i,a3,d,k,l,o),$async$Vp)
case 9:h=a5
if(h!=null)J.ca(n,h)
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
return A.i($async$Vp,w)},
NL:function NL(d,e){this.a=d
this.b=e},
ccM:function ccM(){},
a1B(d){var x=A.P(d).ax.a===C.J,w=x?D.agR:D.aew,v=x?D.aiw:C.c,u=x?C.aP:C.N,t=x?C.bM:C.al,s=x?D.afQ:C.aN
return new A.aHe([w,s,v,u,t,x?C.fh:C.bP])},
hzl(d,e){var x=e?C.w.j(0.72):C.aS
return A.ck(null,x,!0,null,new B.fVQ(e),d,null,!0,!0,y.N)},
ccr(d,e,f,g,h,i,j,k,l){return new B.Vh(e,l,d,f,k,j,g,h,i,null)},
Zy(d,e,f,g,h,i,j){return new B.beK(g,h,j,e,i,d,f,null)},
fVQ:function fVQ(d){this.a=d},
Zv:function Zv(d,e){this.c=d
this.a=e},
aAd:function aAd(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d8Q:function d8Q(d){this.a=d},
d8O:function d8O(d){this.a=d},
d8P:function d8P(d){this.a=d},
bwx:function bwx(){},
Vh:function Vh(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEe:function aEe(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dW6:function dW6(d){this.a=d},
dVu:function dVu(d,e){this.a=d
this.b=e},
dVv:function dVv(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e,f){this.a=d
this.b=e
this.c=f},
dV2:function dV2(d){this.a=d},
dV4:function dV4(d,e){this.a=d
this.b=e},
dV9:function dV9(d,e,f){this.a=d
this.b=e
this.c=f},
dV8:function dV8(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dVW:function dVW(d){this.a=d},
dVr:function dVr(d,e,f){this.a=d
this.b=e
this.c=f},
dVo:function dVo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dV7:function dV7(d){this.a=d},
dVz:function dVz(d){this.a=d},
dVy:function dVy(){},
dVd:function dVd(d){this.a=d},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVT:function dVT(d,e){this.a=d
this.b=e},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVq:function dVq(d,e){this.a=d
this.b=e},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVH:function dVH(d){this.a=d},
dVG:function dVG(d){this.a=d},
dVI:function dVI(){},
dVJ:function dVJ(){},
dVK:function dVK(d,e){this.a=d
this.b=e},
dVM:function dVM(){},
dVN:function dVN(d){this.a=d},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVA:function dVA(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVC:function dVC(d){this.a=d},
dVD:function dVD(d){this.a=d},
dVE:function dVE(d){this.a=d},
dVa:function dVa(){},
dVb:function dVb(d){this.a=d},
dVc:function dVc(d,e){this.a=d
this.b=e},
dV6:function dV6(d,e){this.a=d
this.b=e},
dV5:function dV5(d,e,f){this.a=d
this.b=e
this.c=f},
dVs:function dVs(d){this.a=d},
dVt:function dVt(d,e,f){this.a=d
this.b=e
this.c=f},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVi:function dVi(d){this.a=d},
dVf:function dVf(d,e,f){this.a=d
this.b=e
this.c=f},
dVj:function dVj(d){this.a=d},
dVk:function dVk(d){this.a=d},
dVl:function dVl(){},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVg:function dVg(d){this.a=d},
dVe:function dVe(d,e,f){this.a=d
this.b=e
this.c=f},
dVh:function dVh(){},
dVx:function dVx(d){this.a=d},
dVw:function dVw(d,e){this.a=d
this.b=e},
dVR:function dVR(d,e){this.a=d
this.b=e},
dVO:function dVO(d){this.a=d},
dVP:function dVP(d,e){this.a=d
this.b=e},
dVQ:function dVQ(d){this.a=d},
dW3:function dW3(d){this.a=d},
dW1:function dW1(d){this.a=d},
dW2:function dW2(d){this.a=d},
dW4:function dW4(){},
dW5:function dW5(d,e){this.a=d
this.b=e},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d,e,f){this.a=d
this.b=e
this.c=f},
dVX:function dVX(d,e,f){this.a=d
this.b=e
this.c=f},
dW_:function dW_(d,e){this.a=d
this.b=e},
dW0:function dW0(d,e){this.a=d
this.b=e},
aAa:function aAa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beJ:function beJ(d,e,f){this.c=d
this.d=e
this.a=f},
d8M:function d8M(){},
d8N:function d8N(){},
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
d99:function d99(){},
d98:function d98(d){this.a=d},
Zx:function Zx(d,e,f){this.c=d
this.d=e
this.a=f},
aAf:function aAf(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d95:function d95(d){this.a=d},
d96:function d96(d,e,f){this.a=d
this.b=e
this.c=f},
d97:function d97(d,e){this.a=d
this.b=e},
d93:function d93(d,e){this.a=d
this.b=e},
d91:function d91(d){this.a=d},
d9_:function d9_(d){this.a=d},
d8X:function d8X(d){this.a=d},
d92:function d92(d){this.a=d},
d8Z:function d8Z(d){this.a=d},
d94:function d94(d){this.a=d},
d90:function d90(d){this.a=d},
d8Y:function d8Y(d){this.a=d},
Zu:function Zu(d,e,f){this.c=d
this.d=e
this.a=f},
aAc:function aAc(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d8J:function d8J(d){this.a=d},
d8I:function d8I(d,e){this.a=d
this.b=e},
d8K:function d8K(d){this.a=d},
d8H:function d8H(d,e){this.a=d
this.b=e},
d8L:function d8L(d){this.a=d},
d8G:function d8G(d,e){this.a=d
this.b=e},
d8C:function d8C(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8E:function d8E(d,e){this.a=d
this.b=e},
d8F:function d8F(d){this.a=d},
Q0:function Q0(d,e,f){this.c=d
this.d=e
this.a=f},
aAi:function aAi(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d9m:function d9m(d){this.a=d},
d9n:function d9n(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9p:function d9p(d){this.a=d},
d9q:function d9q(d,e){this.a=d
this.b=e},
d9r:function d9r(d){this.a=d},
d9t:function d9t(d){this.a=d},
d9s:function d9s(d){this.a=d},
Zz:function Zz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAg:function aAg(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d9i:function d9i(d,e){this.a=d
this.b=e},
d9j:function d9j(d,e){this.a=d
this.b=e},
d9a:function d9a(d,e,f){this.a=d
this.b=e
this.c=f},
d9b:function d9b(d){this.a=d},
d9c:function d9c(){},
d9h:function d9h(){},
d9d:function d9d(d,e){this.a=d
this.b=e},
d9e:function d9e(d,e){this.a=d
this.b=e},
d9f:function d9f(d,e){this.a=d
this.b=e},
d9g:function d9g(d,e){this.a=d
this.b=e},
acy:function acy(d,e){this.c=d
this.a=e},
d8B:function d8B(d){this.a=d},
Zt:function Zt(d){this.a=d},
aAb:function aAb(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ZA:function ZA(d,e){this.c=d
this.a=e},
aAh:function aAh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d9l:function d9l(d){this.a=d},
d9k:function d9k(d){this.a=d},
beK:function beK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hOe(){var x,w=$.oh(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"VT"+C.d.hm(v)},
NN(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$NN)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NN)
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
return A.i($async$NN,w)},
a7s(d){return B.hOf(d)},
hOf(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7s)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7s)
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
Vr(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NN(),$async$Vr)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dR(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a8().ae())
r.n(s,d,t)
x=4
return A.b(B.a7s(s),$async$Vr)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vr,w)},
Vs(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Vs=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Vs)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.T(f).k("Z<1>")
u=A.C(new A.Z(f,new B.ccO(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hOe()
t=A.T(u).k("N<1,a8<m,aD>>")
r=A.C(new A.N(u,new B.ccP(s),t),t.k("ak.E"))
x=6
return A.b(B.NN(),$async$Vs)
case 6:q=i
J.aJ(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.C))
x=7
return A.b(B.a7s(q),$async$Vs)
case 7:x=8
return A.b(B.a7t(r,u,g,s),$async$Vs)
case 8:v=new A.bqv(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vs,w)},
apZ(d){var x=0,w=A.j(y.y),v,u,t
var $async$apZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NN(),$async$apZ)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apZ,w)},
ccQ(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ccQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NN(),$async$ccQ)
case 3:s=r.r(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccQ,w)},
a7t(d,e,f,g){return B.hOg(d,e,f,g)},
hOg(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7t=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apX("media",r,new B.ccN(s,e,g),f,q),$async$a7t)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vr(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7t)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vr(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$a7t)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vr(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7t)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7t,w)},
ES(d,e,f){return B.hOh(d,e,f)},
hOh(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$ES=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ES)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apZ(b3),$async$ES)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iV,null,g),$async$ES)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apZ(b3),$async$ES)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NN(),$async$ES)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
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
a1=J.a6(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gS(a2)
if(!a0.b(a7)){x=11
break}a8=J.a6(a7)
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
b0=A.pb(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaQ(a8.a,b0,"media",a8.d,a9).CR(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b_V(k,n,o,s,b7),$async$ES)
case 17:j=c0
if(j!=null){J.ca(p,j);++q
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
g=a1.gag(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gS(g)
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
a8=A.pb(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaQ(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$ES)
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
return A.b(B.a7s(e),$async$ES)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ES,w)},
ccO:function ccO(){},
ccP:function ccP(d){this.a=d},
ccN:function ccN(d,e,f){this.a=d
this.b=e
this.c=f},
aRA(){var x=0,w=A.j(y.H),v,u
var $async$aRA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hZe=null
v=y.H
u=A.dV(null,v)
x=2
return A.b(u,$async$aRA)
case 2:u=A.dV(null,v)
x=3
return A.b(u,$async$aRA)
case 3:u=$.h8v
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dV(u,v),$async$aRA)
case 4:$.h8v=$.i7_=$.i70=null
return A.h(null,w)}})
return A.i($async$aRA,w)},
fyE(d){var x=0,w=A.j(y.H),v,u
var $async$fyE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a87){x=1
break}u=new A.bj($.bB,y.d4)
d.c=new B.fyF(new A.c_(u,y.aY))
x=3
return A.b(u.iA(0,C.i3,new B.fyG()),$async$fyE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fyE,w)},
i6Y(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hNZ(x):x},
h8z(d){var x=0,w=A.j(y.T),v,u,t
var $async$h8z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.aq0(u)
x=1
break}v=B.h3b(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8z,w)},
h8y(d){var x=0,w=A.j(y.T),v,u,t
var $async$h8y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.aq1(u)
x=1
break}v=B.h3b(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8y,w)},
fRr(d){var x=0,w=A.j(y.T),v
var $async$fRr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aq1(d),$async$fRr)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRr,w)},
bCN(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bCN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h8y(d),$async$bCN)
case 3:q=f
if(q==null){x=1
break}t=C.X.aM(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCN,w)},
fmy(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fmy=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Vl(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BX(d.aoY(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmy,w)},
GO(d,e,f){return B.i9r(d,e,f)},
i9r(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GO=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h8z(a1),$async$GO)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aM(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a6(u)
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
return A.b($.hBe().aF9(D.dyA,null),$async$GO)
case 4:l=d.h8v=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ayY(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bj($.bB,y.b1)
l.y=new B.fzb(f,k,new B.fzc(f,a2,k,j,a0,p),a2,j,a0,p,new A.c_(t,y.ch))
x=5
return A.b(l.a8b(0,new B.Xx(r,"offer")),$async$GO)
case 5:d=l
x=7
return A.b(l.alD(0),$async$GO)
case 7:x=6
return A.b(d.a83(0,a4),$async$GO)
case 6:x=8
return A.b(B.fyE(l),$async$GO)
case 8:x=9
return A.b(l.apK(),$async$GO)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i6Y(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aq(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aq2(m,h),$async$GO)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hjE(h)
case 11:v=new A.bpN(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GO,w)},
fyF:function fyF(d){this.a=d},
fyG:function fyG(){},
fzc:function fzc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzb:function fzb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fza:function fza(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ibn(d){switch(d){case"new":return D.etu
case"checking":return D.etv
case"connected":return D.etx
case"completed":return D.etw
case"failed":return D.etz
case"disconnected":return D.etA
case"closed":return D.aPf
case"count":return D.ety}return D.aPf},
ibo(d){switch(d){case"new":return D.aPg
case"gathering":return D.etB
case"complete":return D.a87}return D.aPg},
ilM(d){switch(d){case"stable":return D.etC
case"have-local-offer":return D.etD
case"have-local-pranswer":return D.etF
case"have-remote-offer":return D.etE
case"have-remote-pranswer":return D.etG
case"closed":return D.aPm}return D.aPm},
ijZ(d){switch(d){case"new":return D.aPj
case"connecting":return D.aPk
case"connected":return D.aPl
case"closed":return D.a88
case"disconnected":return D.aPi
case"failed":return D.aPh}return D.a88},
a9N:function a9N(d,e){this.a=d
this.b=e},
OP:function OP(d,e){this.a=d
this.b=e},
Xw:function Xw(d,e){this.a=d
this.b=e},
OO:function OO(d,e){this.a=d
this.b=e},
Fl:function Fl(d,e){this.a=d
this.b=e},
cp7:function cp7(){},
h4X(d){var x=new B.Fk()
x.a=d
x.b=!0
return x},
Fk:function Fk(){this.b=this.a=$},
a9M:function a9M(){},
auu:function auu(){},
Xx:function Xx(d,e){this.a=d
this.b=e},
h37(){var x=0,w=A.j(y.H)
var $async$h37=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h37,w)},
h3a(d,e,f){var x=0,w=A.j(y.T),v
var $async$h3a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mB(D.mR))){v=null
x=1
break}v=B.fRH(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h3a,w)},
hjE(d){var x,w=F.adW.a50(C.dO.aO(d),null)
if(w.length===0){x=C.dO.aO(d)
return C.cJ.gct().aO(x)}return C.cJ.gct().aO(w)},
hNY(d){var x,w,v=C.cF.aO(d)
try{x=C.ch.cB(0,F.adV.be8(v,!1))
return x}catch(w){x=C.ch.cB(0,v)
return x}},
h3b(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hNY(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.ch.cB(0,C.cF.aO(x))
return v}catch(u){return x}}return null},
hNZ(d){var x,w,v,u,t,s=A.a([],y.s)
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
hO_(){var x,w=$.oh(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"DS"+C.d.hm(v)},
b00(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b00=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b00)
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
return A.i($async$b00,w)},
ccw(d,e){return B.hO0(d,e)},
hO0(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ccw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$ccw)
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
return A.i($async$ccw,w)},
b03(d){var x=0,w=A.j(y.y),v,u,t
var $async$b03=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b00(d),$async$b03)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b03,w)},
b02(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b02=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hO_()
r=C.a.i(f)
t=C.dO.aO(s)
x=3
return A.b(B.ccw(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aO(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$b02)
case 3:if(!h){v=null
x=1
break}v=new A.a0C("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b02,w)},
b01(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b01=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b00(o),$async$b01)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ch.cB(0,C.cF.aO(u))
if(J.j6(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b01,w)},
ccx(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ccx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bDJ("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$ccx)
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
return A.i($async$ccx,w)},
b04(d){var x=0,w=A.j(y.h),v,u,t
var $async$b04=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IO(),$async$b04)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b04,w)},
apU(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apU)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b04(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apU,w)},
apS(d,e){var x=0,w=A.j(y.H)
var $async$apS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apS)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apS)
case 2:return A.h(null,w)}})
return A.i($async$apS,w)},
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
return A.b(A.IO(),$async$a7k)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.C))
x=5
return A.b(A.a7j(s),$async$a7k)
case 5:x=6
return A.b(B.apS(f,u),$async$a7k)
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
return A.b(A.IO(),$async$a7l)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
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
return A.b(B.apS(g,q),$async$a7l)
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
return A.b(A.IO(),$async$a7m)
case 4:u=o.r(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b_Y(d,J.k(s==null?"":s))
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
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.X.aq(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a8().ae()],p,p),null)),$async$a7m)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7m,w)},
ccy(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ccy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$ccy)
case 7:s=f
p=A.w(n)
r=A.aT(J.r(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aM(0,r,null)
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
return A.i($async$ccy,w)},
IP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccy(d),$async$IP)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b04(t),$async$IP)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apT(d),$async$IP)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b_Y(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apT(d),$async$IP)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IP,w)},
apT(d){var x=0,w=A.j(y.H)
var $async$apT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apT)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apT)
case 2:return A.h(null,w)}})
return A.i($async$apT,w)},
b05(){var x,w=$.oh(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(32)]
return C.d.hm(v)},
a7n(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h3c(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ccB(d){return B.hO2(d)},
hO2(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ccB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7n(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$ccB)
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
return A.i($async$ccB,w)},
apW(d,e){return B.hO3(d,e)},
hO3(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7n(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apW)
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
return A.i($async$apW,w)},
ccD(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccD=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7n(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apW(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$ccD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccD,w)},
ccC(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7n(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apW(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$ccC)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccC,w)},
ccE(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ccE=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7n(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apW(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccE,w)},
ccF(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ccF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h3c(d)){v=null
x=1
break}x=3
return A.b(B.ccB(d),$async$ccF)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a6(u)
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
return A.i($async$ccF,w)},
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
aq_(d){return B.hOi(d)},
hOi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aq_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$aq_)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z),!1,!1,C.cG,null),$async$aq_)
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
return A.i($async$aq_,w)},
aq0(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aq0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aq0)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7u(),$async$aq0)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ch.cB(0,C.cF.aO(q))
if(J.j6(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.a2(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a8().ae())
J.aJ(s,j,o)
x=9
return A.b(B.aq_(s),$async$aq0)
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
return A.i($async$aq0,w)},
aq2(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aq2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aq2)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7u(),$async$aq2)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dR(A.a2(s,r,q),r,q)
r=C.dO.aO(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aO(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a8().ae())
t.n(u,p,q)
x=5
return A.b(B.aq_(u),$async$aq2)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aq2,w)},
aq1(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aq1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aq1)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7u(),$async$aq1)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ch.cB(0,C.cF.aO(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aq1,w)},
aoX(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoX=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.qa)){v=null
x=1
break}x=3
return A.b(p.m6(e),$async$aoX)
case 3:r=g
u=4
x=7
return A.b(r.hw(C.h9),$async$aoX)
case 7:q=g
o=q
o=o==null?null:J.eS(J.vI(o))
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
return A.i($async$aoX,w)},
ihX(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aX(C.o.u(w),5,"0")
return v},
fPJ(d){return B.ihZ(d)},
ihZ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fPJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iu("media").L5(d,3600),$async$fPJ)
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
return A.i($async$fPJ,w)},
Dg(d,e,f,g,h,i){var x=null
return B.ihW(d,e,f,g,h,i)},
ihW(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dg=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hjH(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h3e(r),$async$Dg)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fPJ(o),$async$Dg)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7o(r),$async$Dg)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aSz)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.M5(A.a([],g))
x=15
return A.b(d.f6(0,A.avk("GET",A.cH(n,0,null))).da(0,C.Gb),$async$Dg)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7o(r),$async$Dg)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KG(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dg)
case 24:if(!b2){x=23
break}k=d.gS(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b07(r,k),$async$Dg)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$Dg)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Vl(r)
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
return A.b(B.a7o(r),$async$Dg)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dg,w)},
aRg(d){return B.ihY(d)},
ihY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iu("media").W(0,d),$async$aRg)
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
return A.i($async$aRg,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[154]
O=c[46]
F=c[261]
I=c[146]
P=c[231]
E=c[223]
G=c[94]
Q=c[193]
R=c[147]
S=c[229]
K=c[266]
L=c[275]
B=a.updateHolder(c[22],B)
D=c[273]
T=c[192]
M=c[213]
U=c[73]
V=c[255]
W=c[79]
X=c[62]
N=c[93]
Y=c[274]
B.cp8.prototype={
aF9(d,e){return this.cMT(d,e)},
cMT(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aF9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.U(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.ks(A.cC(t)))
t=J.k(u)
v=B.hSU(C.cJ.gct().aO(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aF9,w)}}
B.b5f.prototype={
bA7(d){var x=this,w=x.w
w.onclose=A.ht(new B.cp3(x))
w.onopen=A.ht(new B.cp4(x))
w.onmessage=A.ht(new B.cp5(x))
w.onbufferedamountlow=A.ht(new B.cp6(x))},
gdc(d){return this.x},
ahW(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fk()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h4X(J.eS(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ed(d.arrayBuffer(),y.af),$async$ahW)
case 8:v=t.h4X(s.ao6(f,0,null))
x=1
break
case 7:case 4:v=B.h4X(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahW,w)}}
B.b5g.prototype={
bA8(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ht(new B.cp9(x)))
w.addEventListener("icecandidate",A.ht(new B.cpa(x)))
w.addEventListener("iceconnectionstatechange",A.ht(new B.cpb(x)))
w.onicegatheringstatechange=A.ht(new B.cpc(x))
w.addEventListener("signalingstatechange",A.ht(new B.cpd(x)))
if(!$.hcg())w.addEventListener("connectionstatechange",A.ht(new B.cpe(x)))
w.addEventListener("negotiationneeded",A.ht(new B.cpf(x)))
w.addEventListener("track",A.ht(new B.cpg(x)))},
alD(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ed(s.createAnswer(A.ks(A.cC(A.U(y.N,y.z)))),y.aQ),$async$alD)
case 3:t=f
v=new B.Xx(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alD,w)},
a83(d,e){return this.bpe(0,e)},
bpe(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a83=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a83)
case 2:return A.h(null,w)}})
return A.i($async$a83,w)},
a8b(d,e){return this.bpz(0,e)},
bpz(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8b)
case 2:return A.h(null,w)}})
return A.i($async$a8b,w)},
apK(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Xx(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apK,w)},
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
a6(){return"_DocShareEntry."+this.b}}
B.Zw.prototype={
R(){return new B.aAe()},
gd_(){return this.c}}
B.aAe.prototype={
Z(){this.a2()
this.aeB()},
aeB(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_Z(u.e,u.c),$async$aeB)
case 2:t=e
if(v.c!=null)v.m(new B.d8U(v,t))
return A.h(null,w)}})
return A.i($async$aeB,w)},
QD(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apP(t.e,t.c,!1),$async$QD)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fdk)
x=1
break}x=4
return A.b(B.a7i(u.a.c,"individual"),$async$QD)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a6z(A.eh(new B.d8R(u),!1,null,y.H)),$async$QD)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QD,w)},
Js(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Js=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fwD(o),$async$Js)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7m(o.e,r,s,q),$async$Js)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.fal)
x=1
break}x=5
return A.b(B.a7i(u.a.c,"member"),$async$Js)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a6z(A.eh(new B.d8T(u),!1,null,y.H)),$async$Js)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Js,w)},
yd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7h(t.e,o,t.f,t.r,t.w,s),$async$yd)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7i(u.a.c,"org_owner"),$async$yd)
case 4:x=5
return A.b(B.apU(u.a.c),$async$yd)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fx7(o),$async$yd)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7k(s,t,o,q.c),$async$yd)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.fai)
x=1
break}x=10
return A.b(B.apU(u.a.c),$async$yd)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a6z(A.eh(new B.d8S(u),!1,null,y.H)),$async$yd)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yd,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.J,r=s?C.ju:C.q5,q=B.h39(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.h_,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fx5,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h4,t,t,t),C.aA,D.fQS,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c5v,C.n),t,t,t,t,C.eu,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lS(new B.d8W(),t),C.P,w,C.dT,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.N,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ae)
if(!u.a.x)C.d.v(p,A.a([new B.ad1(C.f0,C.aBP,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcgi(),t),C.ae],v))
p.push(new B.ad1(C.pf,C.a3P,"Team Member","Sign in with your organization access code + password",u.gch9(),t))
p.push(C.ae)
p.push(new B.ad1(C.ao_,C.a5s,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcgF(),t))
return A.c5(t,r,A.bm(!0,A.ch(A.x(p,C.ak,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.al9,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ad1.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gI(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aI(!1,C.a2,!0,s,A.aO(!1,r,!0,A.eK(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oL,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.yP,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aCR.prototype={}
B.aFZ.prototype={}
B.jy.prototype={
mB(d){var x=this.b,w=C.a.oR(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gaqq(){var x=this.d
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
bdE(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jy(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cLm(d){return this.bdE(null,d)},
aEU(d){return this.bdE(d,null)}}
B.Vf.prototype={
R(){return new B.aEc(new A.cw(null,y.A))},
gd_(){return this.c}}
B.aEc.prototype={
Z(){this.a2()
this.aeC()},
aeC(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BW(u.a.c),$async$aeC)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dV_(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aeC,w)},
aeD(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fC(s)),$async$aeD)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fee)
case 1:return A.h(v,w)}})
return A.i($async$aeD,w)},
a_b(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_b=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoX(s.d,4),$async$a_b)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ta(r,"ngmy_my_code_"+m+".png"),$async$a_b)
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
return A.i($async$a_b,w)},
aim(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aim=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aap("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aim)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aim,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.J,n=o?C.ju:C.q5,m=o?C.c:C.N,l=A.eJ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m_
else if(q.e==null)x=A.as(new A.D(C.eu,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aL.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4h,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.akI,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dr,24)],y.V)
s=q.e
s.toString
r=A.ch(A.x(A.a([x,C.mZ,w,C.kU,new A.er(A.p(p,A.q2(p,p,!1,B.hNU(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.kU,A.B(A.a([A.E(A.ex(N.CE,C.Vh,q.gc9a(),p),1),C.as,A.E(A.dl(C.zc,C.aam,q.gc9b(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.W,new A.a5(1/0,p,A.ex(M.a2z,D.fMu,q.gcvY(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.NF,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Vj.prototype={
R(){return new B.aEf(new A.au(C.at,$.ax()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.aEf.prototype={
Z(){var x,w
this.a2()
x=this.a.e
w=B.IN(x==null?"":x)
if(w!=null)this.d.saY(0,w)},
q(){var x=this.d
x.T$=$.ax()
x.P$=0
this.e.q()
this.a1()},
a_c(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IN(u.d.a.a)
if(t==null){u.m(new B.dW8(u))
x=1
break}u.m(new B.dW9(u))
s=u.a
r=s.c
x=3
return A.b(B.a7g(s.d,new B.dWa(u),t,r),$async$a_c)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dWb(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_c,w)},
a2r(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2r=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.dWc(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rG(r.a.c,q),$async$a2r)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dWd(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ai5(p,m,l,j,k),$async$a2r)
case 8:o=e
if(r.c!=null)r.m(new B.dWe(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dWf(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dWg(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2r,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.J,i=j?D.agR:D.aew,h=j?D.aiw:C.c,g=j?C.aP:C.N,f=j?C.bM:C.al,e=j?D.afQ:C.aN
i=[i,e,h,g,f,j?C.fh:C.bP]
x=A.P(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eJ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ap(80,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bTR,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.ay,C.aE,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fl,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4h,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uG(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkd()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Y,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.NA,k,k,"",k,!0,new A.b5(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.n(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dWh(l),k,!1,k,k,!1,k,!0,k,C.aa,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mo,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.LJ(l.a.d,4)
m=A.C(new A.N(m,new B.dWi(x,new A.aHe(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l6,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.d4,p,C.P,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eB,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f8Q)
else q.push(A.X(C.lJ,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.da(k,A.B(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b7,new A.o(u,k,s,t,k,k,C.n),C.iB,k,k,k,k,C.eS,k,k,k)],r))}e=A.E(A.ch(A.x(e,C.ak,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bBX,k,k,C.ah),1)
u=l.f?k:l.gcvZ()
t=i[3]
s=i[1]
q=A.n(16)
s=A.ex(M.a2z,D.fNz,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b8(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gc9c()
t=A.bo(C.aD,k,k,0,C.c,k,C.nq,k,new A.b8(A.n(16),C.a0),k,k,k)
return A.c5(g,h,new A.an(C.a_,k,C.ab,C.t,A.a([f,v,A.bm(!0,A.lx(new B.dWj(),A.x(A.a([e,new A.D(D.bBr,A.x(A.a([s,C.P,i,C.ae,A.bI(l.f?C.tc:D.fLQ,k,u,t)],r),C.ak,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.ct,C.ZS,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkd.prototype={
oN(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fh(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hl(C.by,v.length),C.aO)}}
B.Vg.prototype={
R(){return new B.aEd()}}
B.aEd.prototype={
Z(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b4,C.aO),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b4,C.aO),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.at,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.T$=$.ax()
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
aeE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aeE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dV0(r))
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
return A.b(B.a7l(p,m,n,o,C.a.i(l).length===0?null:l),$async$aeE)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.fdQ)
s=[1]
x=4
break}p.K(y.q).f.U(D.fct)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dV1(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeE,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.J?C.ju:C.q5,q=A.eJ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fEh,s,s,s,1,s,!0),p=A.p(s,D.btD,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.HG,C.n),s,s,s,s,C.aa,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c_Z,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c_U,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c09,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc9d()
u=A.bo(C.aD,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.c5(q,r,A.ch(A.x(A.a([p,C.d4,o,C.ae,x,C.ae,w,C.mZ,A.bI(t.r?C.tc:C.aVl,s,v,u)],y.p),C.ak,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.aa,s,s,C.ah),s,!1,!1,s,s)}}
B.acg.prototype={}
B.bwV.prototype={
a5g(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cn(r.aoY()))
x=3
return A.b(B.Rz(t,s),$async$a5g)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5g,w)},
gd_(){return this.a}}
B.NL.prototype={
a6(){return"NgmyDocShareQrMode."+this.b}}
B.Zv.prototype={
R(){return new B.aAd(new A.au(C.at,$.ax()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.aAd.prototype={
Z(){this.a2()
$.aV.x1$.push(new B.d8Q(this))},
q(){var x=this.d
x.T$=$.ax()
x.P$=0
this.e.q()
this.a1()},
c9j(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1B(d),u=x.a.c,t=u?C.ix:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ju:v.a[0],p=A.n(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.h_,32)],n),l=A.p(w,T.aqI,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cy,16)],n),C.arv,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uG(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bwx()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Y,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.Go,w,w,"",w,!0,new A.b5(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.n(16),D.b2I),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d8O(x),w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mo,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nL,new B.d8P(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b8(A.n(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cH,12)],n)
g=y.p
return A.eT(w,C.L,new A.cT(Q.Lp,A.c3(new A.D(C.ys,A.x(A.a([l,C.aQ,k,C.P,j,C.dT,i,C.dT,A.B(A.a([f,C.as,A.E(A.c3(A.aI(!1,C.a2,!0,w,A.aO(!1,A.n(14),!0,D.emT,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc9i(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),new A.o(w,w,w,h,n,L.Pq,C.n),C.bh),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.O,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bh),w),w,w,w,C.NI,C.d8,w,w,w)}}
B.bwx.prototype={
oN(d,e){return e.alx(e.a.toUpperCase())}}
B.Vh.prototype={
R(){return new B.aEe(A.a([],y.r),A.aX(y.N))},
gd_(){return this.c}}
B.aEe.prototype={
Z(){var x=this
x.a2()
x.u0()
x.w=A.dh(C.jx,new B.dW6(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vq()
this.a1()},
a1i(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NK(u.a.c),$async$a1i)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AU(u.a.c),$async$a1i)
case 4:u.m(new s.dVu(u,e))
u.ib("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1i,w)},
u0(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$u0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NK(u.a.c),$async$u0)
case 3:t=e
x=4
return A.b(B.AU(u.a.c),$async$u0)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dVv(u,s))
if(t>0)u.ib("Received "+A.w(t)+" file(s) via My Code.")
u.NU(u.d)
B.BW(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$u0,w)},
NU(d){return this.bE6(d)},
bE6(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7q(r,u.a.c),$async$NU)
case 8:p=f
if(u.c==null){x=1
break}new B.dV3(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a0(r.c,"video/")||r.mB(D.mR))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vo(r,u.a.c),$async$NU)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AU(u.a.c),$async$NU)
case 12:u.m(new o.dV4(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NU,w)},
Oh(d){return this.bKn(d)},
bKn(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7q(d,u.a.c),$async$Oh)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dV9(u,d,t))
x=6
return A.b(A.fI(new A.fC(t)),$async$Oh)
case 6:u.ib("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fC(r.toUpperCase())),$async$Oh)
case 7:u.ib("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oh,w)},
ib(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
u1(d,e){return this.cGG(d,e)},
cGG(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$u1=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dVV(r,e))
u=3
x=6
return A.b(d.$0(),$async$u1)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dVW(r))
$.eX.mw()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$u1,w)},
gaWj(){var x=this.a
return x.f||x.r||x.w},
Im(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Im=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaWj()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ccu(s,n,r,q,o,t),$async$Im)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ib("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fJ9(o,u.a.c),$async$Im)
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
return A.b(B.Di(s,o,r,q,n,t),$async$Im)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Im,w)},
a0l(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apU(u.a.c),$async$a0l)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ib("No organization portal found.")
x=1
break}t=J.a6(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a4(t,!1).cc(A.eh(new B.dVr(u,r,q),!1,null,y.H)),$async$a0l)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0l,w)},
a1s(d){return this.cpu(d)},
cpt(){return this.a1s(1)},
cpu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaWj()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apR(u.a.c),$async$a1s)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1s,w)},
acw(d,e,f){return this.c0i(d,e,f)},
c0i(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ib(e)
x=1
break}x=3
return A.b(u.u1(new B.dVo(u,d,null,e,f),"Uploading\u2026"),$async$acw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acw,w)},
bEe(){B.hyu(!1,new B.dV7(this))
return},
cuy(){this.m(new B.dVz(this))},
azl(){var x=0,w=A.j(y.H),v=this
var $async$azl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bEe()
return A.h(null,w)}})
return A.i($async$azl,w)},
acs(){var x=0,w=A.j(y.H),v=this
var $async$acs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u1(new B.dVd(v),"Importing\u2026"),$async$acs)
case 2:return A.h(null,w)}})
return A.i($async$acs,w)},
SG(d){return this.cG0(d)},
cG0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mB(D.mR)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cc(A.eh(new B.dVS(u,d),!1,null,y.H)),$async$SG)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mB(D.Ro)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cc(A.eh(new B.dVT(u,d),!1,null,y.H)),$async$SG)
case 8:x=1
break
case 7:x=u.c1_(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cc(A.eh(new B.dVU(u,d),!1,null,y.H)),$async$SG)
case 11:x=1
break
case 10:u.ib("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SG,w)},
c1_(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oR(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cOv,C.a.b5(x,w+1).toLowerCase())},
ag8(d){return this.cgm(d)},
cgm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mB(D.mR)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cc(A.eh(new B.dVp(u,d),!1,null,y.H)),$async$ag8)
case 5:x=1
break
case 4:u.m(new B.dVq(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ag8,w)},
S1(d){return this.cxs(d)},
cxs(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$S1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ib("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pm(t,s.c,s.f),$async$S1)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.u1(new B.dVL(u,d),"Preparing QR\u2026"),$async$S1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
aiN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aiN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dVM(),A.T(t).k("N<1,m>")).fJ(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dVN(q),s),s.k("M.E"))
if(r.length===0){u.ib("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.S1(r),$async$aiN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiN,w)},
aiG(d){return this.cx_(d)},
cx_(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1B(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dVF(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aiG)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SG(d)
break
case"qr":u.S1(A.a([d],y.r))
break
case"send_my_code":u.cgZ(A.a([d],y.r))
break
case"save":u.ai2(d)
break
case"delete":u.Jc(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aiG,w)},
Y4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Y4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dVa(),A.T(t).k("N<1,m>")).fJ(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dVb(q),s),s.k("M.E"))
if(r.length===0){u.ib("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pm(t,s.c,s.f),$async$Y4)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.u1(new B.dVc(u,r),"Preparing file\u2026"),$async$Y4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Y4,w)},
ahd(d){return this.cnQ(d)},
cnQ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hzl(d,!1),$async$ahd)
case 3:s=f
r=s==null
q=B.a7n(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ib("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahd,w)},
age(){var x=0,w=A.j(y.H),v=this,u
var $async$age=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fQP(u,v.a.c),$async$age)
case 2:return A.h(null,w)}})
return A.i($async$age,w)},
bEd(){B.hyu(!1,new B.dV6(this,null))
return},
Jr(d,e){return this.ch_(d,e)},
b1B(d){return this.Jr(null,d)},
cgZ(d){return this.Jr(d,null)},
ch_(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jr=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dVs(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xv.ca().aoc(!0,C.a0G,!1),$async$Jr)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.u1(new B.dVt(l,s,r),"Preparing\u2026"),$async$Jr)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ib("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ib("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bET(p,l,e,s.a.c),$async$Jr)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ib("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jr,w)},
IC(d){return this.c05(d)},
c05(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hNT(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b1B(t),$async$IC)
case 8:x=6
break
case 7:u.ib("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ib("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.u1(new B.dVm(u,d),"Receiving video\u2026"),$async$IC)
case 11:x=1
break
case 10:x=12
return A.b(u.u1(new B.dVn(u,d),"Receiving\u2026"),$async$IC)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IC,w)},
Er(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Er=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Dc()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahd(t),$async$Er)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IC(s),$async$Er)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cc(A.eh(new B.dVx(u),!1,null,y.N)),$async$Er)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.u0(),$async$Er)
case 10:x=1
break
case 9:x=11
return A.b(u.IC(C.a.i(r)),$async$Er)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Er,w)},
ai2(d){return this.ct4(d)},
ct4(d){var x=0,w=A.j(y.H),v=this
var $async$ai2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u1(new B.dVw(v,d),"Saving\u2026"),$async$ai2)
case 2:return A.h(null,w)}})
return A.i($async$ai2,w)},
Jc(d){return this.bMI(d)},
bMI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.li(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jc)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ccx(t),$async$Jc)
case 6:case 5:s=d.a
x=7
return A.b(B.ER(u.a.c,s),$async$Jc)
case 7:u.r.W(0,s)
x=8
return A.b(u.u0(),$async$Jc)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jc,w)},
aiT(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1B(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dVR(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aiT)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.age()
break
case"import":u.acs()
break}case 1:return A.h(v,w)}})
return A.i($async$aiT,w)},
c9g(d){var x=d.c
if(C.a.a0(x,"video/")||d.mB(D.mR))return C.qz
if(C.a.a0(x,"image/")||d.mB(D.Ro))return C.uv
if(C.a.t(x,"pdf"))return E.OV
return D.aot},
B(d){var x,w,v=this,u=null,t=B.a1B(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Hz,u,u,u,new B.dW1(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bUq,u,u,u,v.e?u:v.gcgG(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcux()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bOC:E.aoU,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a2w,u,u,u,v.e?u:v.gc9h(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.or,u,u,u,v.e?u:v.gb2F(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bWb,u,u,u,v.e?u:new B.dW2(v),u,u,u,u,"More options",u))
q=A.eJ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lS(new B.dW3(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ap(40,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.J?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kx(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAa(C.jD,s,!0,t,w?u:v.gcxt(),u),1)
x.push(new A.D(D.bAb,A.lx(new B.dW4(),A.B(A.a([s,C.as,A.E(new B.aAa(C.uw,"Export",!1,t,w?u:v.gbQw(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.ct,C.iU,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.beJ(t,v.e?u:v.gb2F(),u)
else s=A.kj(!0,u,u,new B.dW5(v,t),s,u,D.bA3,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a_,u,C.ab,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAa.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.w1,t,new A.b8(s,C.a0),t,t,t)
return A.dl(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.w1,t,new A.b8(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ex(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f4,t,t,t),u.r,v)}}
B.beJ.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lx(new B.d8M(),new A.D(E.a_L,A.x(A.a([A.lx(new B.d8N(),A.p(x,A.X(C.yQ,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ay,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.hv,x,x,new A.bp(0.86,1,w),s),C.dT,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dT,A.dl(C.or,D.fRa,this.d,A.bo(C.aD,x,x,x,C.c,x,C.NG,x,new A.b8(A.n(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.O,0,C.p),x),C.ct,C.BH,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.acA.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dx(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
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
if(!o||i.mB(D.mR))p=D.dnM
else{p=C.a.a0(p,"image/")||i.mB(D.Ro)
n=y.O
p=p?A.a([C.cQ,C.aD],n):A.a([C.aL.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ay,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaqq()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mB(D.mR))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fQ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mB(D.mR)))l.push(A.h0S(C.aD,!1,j,j,j,!1,j,j,new B.d98(k),j,j,new A.b8(A.n(5),C.a0),j,j,!1,u))
x=A.X(C.oj,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.lx(new B.d99(),new A.D(C.ec,A.aI(!1,C.a2,!0,j,A.aO(!1,r,!0,new A.D(C.a_d,A.B(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b8(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.ct,h,new A.bR("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.Zx.prototype={
R(){return new B.aAf()},
gd_(){return this.c}}
B.aAf.prototype={
Z(){this.a2()
this.y3()},
q(){B.hO7(this.e)
this.a1()},
y3(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$y3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rG(o.c,o.d),$async$y3)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hOa(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hO9(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d95(s))
x=1
break}s.m(new B.d96(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d97(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y3,w)},
a2q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rG(t.c,t.d),$async$a2q)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.faS)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ai5(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2q)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2q,w)},
c_Z(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kw(u,C.A,v,new B.d93(w,t),C.h7,C.dz,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fT(t,C.A,v,new B.d94(w),C.h7,C.dz,!0,v,!1,v,v)
else return C.bJ
return A.uN(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1B(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.CF,u,u,u,v.gb6r(),u,u,u,u,"Share / save",u))
r=A.eJ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.F2
else{q=v.r
if(q!=null)t=new A.D(C.eu,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eu,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.dl(C.CF,D.fzw,v.gb6r(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c_Z()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.Zu.prototype={
R(){return new B.aAc(A.aiW(),C.bA,C.bA)},
gd_(){return this.c}}
B.aAc.prototype={
Z(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fz(w,A.a7(w).k("fz<1>")).iw(new B.d8J(v))
x.gcUq().iw(new B.d8K(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fz(x,A.a7(x).k("fz<1>"))}if(x==null)x=C.b8U
x.iw(new B.d8L(v))
v.y3()},
y3(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$y3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rG(p.c,p.d),$async$y3)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d8C(s))
x=1
break}x=8
return A.b(s.d.v7(0,new A.a3F(r,s.a.d.c)),$async$y3)
case 8:if(s.c==null){x=1
break}s.m(new B.d8D(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d8E(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y3,w)},
a_d(){var x=0,w=A.j(y.H),v=this,u
var $async$a_d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hc(0),$async$a_d)
case 5:x=3
break
case 4:x=6
return A.b(u.iz(0),$async$a_d)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_d,w)},
aU8(d){var x=d.a
return C.a.aX(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aX(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1B(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eJ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.F2
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bPE,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Pq,C.n),o,88,o,o,o,o,o,88)
t=A.kQ(C.aD,o,o,m,0,new B.d8F(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aU8(p.w)+" / "+p.aU8(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.f7h,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uy:C.hl,o,o,o,o,o)
x=A.x(A.a([u,C.kU,t,x,C.d4,A.dl(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc9k(),s)],y.p),C.m,o,C.e,C.O,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qk,x,o),o,o,o),o,!1,!1,o,o)}}
B.Q0.prototype={
R(){return new B.aAi()},
gd_(){return this.c}}
B.aAi.prototype={
Z(){this.a2()
this.PY()},
PY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h3a(o.c,o.d,new B.d9m(s)),$async$PY)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d9n(s))
x=1
break}s.e=r
q=O.ial(r)
if(q==null){s.m(new B.d9o(s))
x=1
break}s.d=q
q.aS(0,s.gb1o())
x=8
return A.b(q.iv(0).da(0,C.rv),$async$PY)
case 8:if(s.c==null){x=1
break}s.m(new B.d9p(s))
x=9
return A.b(q.qc(0),$async$PY)
case 9:q.tG(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d9q(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PY,w)},
ceX(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d9r(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D7(0,x.gb1o())
w=x.d
if(w!=null)w.q()
B.ikh(x.e)
x.a1()},
aeH(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b06(u.c,u.d),$async$aeH)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aeH,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1B(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eJ(A.a([A.aH(t,t,t,t,C.oq,t,t,t,u.gc9e(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ip(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.F2
else{q=u.r
if(q!=null)s=new A.D(C.eu,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aip(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fH(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.Ap(s,t),A.aA(t,A.Dv(A.p(t,A.X(q?I.uy:C.hl,C.c,t,t,t,48),C.f,t,t,new A.o(C.aS,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b7,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d9t(u),t,t,t,t,t,t,!1,C.a3)],o),t),t)}else s=C.bJ}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.Zz.prototype={
R(){return new B.aAg(new A.cw(null,y.A))}}
B.aAg.prototype={
gcGn(){var x,w,v=this.a
if(v.e!==D.SK)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcFZ(){var x,w,v=this.a
if(v.e!==D.zR)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a2()
x=v.gcGn()
if(x!=null){v.R2(x)
v.e=A.dh(R.Ge,new B.d9i(v,x))}w=v.gcFZ()
if(w!=null){v.R1(w)
v.f=A.dh(C.fB,new B.d9j(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a1()},
R1(d){return this.cm1(d)},
cm1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$R1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apZ(d),$async$R1)
case 3:t=f
x=4
return A.b(B.ccQ(d),$async$R1)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d9a(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$R1,w)},
R2(d){return this.cm2(d)},
cm2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$R2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fRr(d),$async$R2)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bCN(t),$async$R2)
case 4:if(u.c==null){x=1
break}u.m(new B.d9b(u))
u.c.K(y.q).f.U(D.aSa)
case 1:return A.h(v,w)}})
return A.i($async$R2,w)},
gc57(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc9f(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2c(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Dc()){t=u.c
if(t!=null)t.K(y.q).f.U(D.fe_)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cc(A.eh(new B.d9c(),!1,null,y.N)),$async$a2c)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bCN(s),$async$a2c)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aSa)
case 1:return A.h(v,w)}})
return A.i($async$a2c,w)},
aam(d){return this.bKo(d)},
bKo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aam=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fC(C.d.aG(t,", "))),$async$aam)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aam,w)},
aeF(d){return this.bK7(d)},
bK7(d){var x=0,w=A.j(y.H),v=this
var $async$aeF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fC(v.a.c)),$async$aeF)
case 2:if(d.e!=null)d.K(y.q).f.U(D.fbl)
return A.h(null,w)}})
return A.i($async$aeF,w)},
a26(d){return this.ct6(d)},
ct6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a26=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoX(s.d,4),$async$a26)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ta(r,"ngmy_doc_share_qr.png"),$async$a26)
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
return A.i($async$a26,w)},
gaXw(){var x,w=this.a
if(w.e!==D.IL)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
aaj(d){return this.bKh(d)},
bKh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaXw()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaj)
case 3:if(d.e!=null)d.K(y.q).f.U(D.fd_)
case 1:return A.h(v,w)}})
return A.i($async$aaj,w)},
aeG(){var x=0,w=A.j(y.H),v=this,u
var $async$aeG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vq(),$async$aeG)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aeG,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1B(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ar(h,0,44)+"\u2026"
i=i.e
i=i!==D.IL&&i!==D.SK&&i!==D.zR
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eJ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.IL||t===D.SK||t===D.zR?l:A.aH(l,l,l,l,C.le,l,l,l,m.gb_v(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.q2(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc57(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.IL){t=C.aD.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mI,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc9f(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c_0,D.fJ3,new B.d9d(m,d),l)],p))}if(m.a.e===D.IL&&m.gaXw()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.bWv,D.fFG,new B.d9e(m,d),l)],p))
if(m.a.e===D.zR){x=(m.w?C.dE:C.aD).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.F5:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mI,l,l,l)],p))}if(m.a.e===D.SK){x=(m.r?C.dE:C.aD).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.F5:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mI,l,l,l),C.ae,A.dl(D.bS6,D.fMb,m.gctv(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oC(i,A.c5(v,w,new A.D(C.aa,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.aa,l,l,1/0),1),C.ae,A.B(A.a([A.E(A.ex(N.CE,C.Vh,new B.d9f(m,d),l),1),C.as,A.E(A.dl(C.zc,C.aam,new B.d9g(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bI(C.Aq,l,m.gb_v(),A.bo(C.aL,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.d9h(),y.C)}}
B.acy.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.ch(A.x(A.a([w,C.aQ,A.p(x,A.q2(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ep(A.a([A.bI(C.x5,x,new B.d8B(d),x)],u),x,x,C.n8,v,x,x,x,x,D.fyv,x)}}
B.Zt.prototype={
R(){return new B.aAb(A.zz(C.y9,C.nR,C.uL))}}
B.aAb.prototype={
q(){this.d.q()
this.a1()},
axY(d){var x,w,v,u,t
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
return A.c5(A.eJ(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fGb,x,x,x,1,x,!0),C.w,A.zy(this.d,C.bX,this.gaxX()),x,!1,!1,x,x)}}
B.ZA.prototype={
R(){return new B.aAh(A.zz(C.y9,C.nR,C.uL))},
gd_(){return this.c}}
B.aAh.prototype={
c11(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agB(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Mb("text/plain"),$async$agB)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.fdU)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agB,w)},
ab8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ab8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hzl(p,!0),$async$ab8)
case 3:t=e
p=t==null
s=B.a7n(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.fas)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$ab8,w)},
q(){this.d.q()
this.a1()},
axY(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c11(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.apO,v,v,v,w.gbQ1(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a2D,v,v,v,w.gcjp(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eJ(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.ur:P.OG,v,v,v,v,v),v,v,v,new B.d9l(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fN4,v,v,v,1,v,!0)
u=A.zy(w.d,C.bX,w.gaxX())
x=A.n(20)
return A.c5(t,C.w,new A.an(C.a_,v,C.ab,C.t,A.a([u,A.as(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aL,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.et9],s),v),v,!1,!1,v,v)}}
B.beK.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.p5
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.p5:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a2,!0,r,A.aO(!1,w,!0,new A.D(C.a_R,A.B(A.a([u,C.bb,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.a9N.prototype={
a6(){return"RTCDataChannelState."+this.b}}
B.OP.prototype={
a6(){return"RTCSignalingState."+this.b}}
B.Xw.prototype={
a6(){return"RTCIceGatheringState."+this.b}}
B.OO.prototype={
a6(){return"RTCPeerConnectionState."+this.b}}
B.Fl.prototype={
a6(){return"RTCIceConnectionState."+this.b}}
B.cp7.prototype={}
B.Fk.prototype={}
B.a9M.prototype={}
B.auu.prototype={}
B.Xx.prototype={}
var z=a.updateTypes(["aB<~>()","R(jy)","m(jy)","Vh(Y)","~()","Zw(Y)","G(G,jy)","Q0(Y)","~(md)","cu(Fk)","aB<jy?>(@)","Vf(Y)","Vj(Y)","D(jy)","jy(@)","a8<m,@>(jy)","Zv(Y)","Vg(Y)","Zx(Y)","Zu(Y)","Zz(Y)","acy(Y)","ai<jy>()","ZA(Y)","acA(Y,G)","Zt(Y)","a8<m,aD>(jy)","cu(Xw)","cu(a9M)","aB<cu>(Fk)"])
B.cp3.prototype={
$1(d){var x=this.a
x.x=D.aPe
x.y.M(0,D.aPe)},
$S:73}
B.cp4.prototype={
$1(d){var x=this.a
x.x=D.aPd
x.y.M(0,D.aPd)},
$S:73}
B.cp5.prototype={
$1(d){var x=this.a
x.ahW(A.aPZ(d.data)).bK(new B.cp2(x),y.b)},
$S:73}
B.cp2.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cp6.prototype={
$1(d){},
$S:73}
B.cp9.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hST(d.channel))},
$S:15}
B.cpa.prototype={
$1(d){},
$S:15}
B.cpb.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ibn(w.iceConnectionState)
x.cx=w
if($.hcg())switch(w.a){case 0:x.cy=D.aPj
break
case 1:x.cy=D.aPk
break
case 3:x.cy=D.aPl
break
case 5:x.cy=D.aPh
break
case 6:x.cy=D.aPi
break
case 7:x.cy=D.a88
break
default:break}},
$S:145}
B.cpc.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ibo(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:145}
B.cpd.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ilM(w.signalingState)},
$S:145}
B.cpe.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ijZ(w.connectionState)},
$S:145}
B.cpf.prototype={
$1(d){},
$S:145}
B.cpg.prototype={
$1(d){},
$S:15}
B.fsa.prototype={
$1(d){var x=y.F.a(new A.r_([],[]).oA(d.target.result,!1)),w=C.ya.t(x.objectStoreNames,"blobs")
if(!w)C.y6.L3(x,"blobs")},
$S:190}
B.fQD.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wz.fm(this.b)
$.eX.mw()
this.c.$1(d)},
$S:424}
B.fQF.prototype={
$1(d){return this.a.$1(B.i0T(this.b,this.c))},
$S:30}
B.fQE.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fQC.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fQS.prototype={
$1(d){var x=this
return B.hox(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fQT.prototype={
$1(d){var x=this
return B.hox(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fuH.prototype={
$1(d){var x=this
return B.ccr(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d8U.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d8R.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccr(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d8T.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccr(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d8S.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccr(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d8W.prototype={
$4(d,e,f,g){var x=null
return A.jU(A.B(A.a([A.aH(x,x,x,x,D.bQJ,x,x,x,new B.d8V(d),x,x,x,x,x,x),A.E(A.F6(D.R7,!0,x,C.a1F,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.R7,x,g,C.alu,0,e,f)},
$C:"$4",
$R:4,
$S:400}
B.d8V.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fwG.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eM,y.o).w,t=this.a,s=t?C.ix:C.c,r=A.n(28),q=A.p(v,D.btY,C.f,v,v,D.b4l,v,v,v,v,D.alk,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b5(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bV0,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Gt,A.x(A.a([o,C.ae,A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b5(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aq3,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.bx,A.B(A.a([A.E(A.dT(C.di,new B.fwE(d),v),1),C.as,A.E(A.bI(D.fEG,v,new B.fwF(p,x,d),A.bo(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Gh,v,v,v,v),v)},
$S:59}
B.fwE.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fwF.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.fbC)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aCR(v,x))},
$S:0}
B.fx9.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eM,y.o).w,u=x.a,t=u?C.ix:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.btN,C.f,w,w,D.b5P,w,w,w,w,D.alk,w,w,1/0),new A.D(C.Gt,A.x(A.a([A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.h8i(u,"Organization name",C.GV,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.h8i(u,"Access code",C.nv,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.h8i(u,"Member password",H.Hu,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.bx,A.bI(D.fNb,w,new B.fx8(r,q,p,d),A.bo(C.aD,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Gh,w,w,w,w),w)},
$S:59}
B.fx8.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.fbH)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aFZ(u,x,w))},
$S:0}
B.cci.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a6(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cH(j,0,null):s.b.aT(j)
u=4
x=7
return A.b(A.vz(p,null).da(0,C.ZR),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cn(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BX(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cco.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ccp.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ccq.prototype={
$1(d){return d.b},
$S:z+2}
B.cck.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ccl.prototype={
$1(d){return d.b},
$S:z+2}
B.ccj.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.ccm.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.ccn.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fQQ.prototype={
$1(d){return new B.Vf(this.a,null)},
$S:z+11}
B.fQR.prototype={
$1(d){return new B.Vj(this.a,this.b,this.c,null)},
$S:z+12}
B.dV_.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dW8.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dW9.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dWa.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dW7(x,d))},
$S:2}
B.dW7.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dWb.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWc.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dWd.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dWe.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dWf.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dWg.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWj.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:101}
B.dWh.prototype={
$1(d){var x=this.a
return x.f?null:x.a_c()},
$S:2}
B.dWi.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mB(D.Ro))s=C.uv
else s=C.a.a0(s,"video/")||d.mB(D.mR)?C.qz:D.aot
x=this.b.a
w=y.p
return new A.D(C.kK,A.B(A.a([A.p(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaqq(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dV0.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dV1.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ccs.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:96}
B.cct.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:96}
B.fRJ.prototype={
$2(d,e){return e===this.a},
$S:332}
B.fph.prototype={
$1(d){return J.k(d)},
$S:17}
B.fuT.prototype={
$1(d){var x=this.b
B.hZT(C.GH.ga6U(this.a)).bK(x.gaEv(x),y.H)},
$S:124}
B.fuU.prototype={
$1(d){return this.a.d8(0,null)},
$S:124}
B.fuV.prototype={
$0(){return null},
$S:12}
B.ccH.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fuW.prototype={
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
return new B.jy(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fz2.prototype={
$1(d){return d.ah()},
$S:z+15}
B.ft5.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ft6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ccM.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mB(D.mR)},
$S:z+1}
B.fVQ.prototype={
$1(d){return new B.Zv(this.a,null)},
$S:z+16}
B.d8Q.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fS()},
$S:8}
B.d8O.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d8P.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dW6.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1i()},
$S:11}
B.dVu.prototype={
$0(){var x=J.bFX(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dVv.prototype={
$0(){var x=J.bFX(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dV3.prototype={
$0(){var x=this.a,w=C.d.bh(x.d,new B.dV2(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEU(this.c)}},
$S:0}
B.dV2.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dV4.prototype={
$0(){var x=J.bFX(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dV9.prototype={
$0(){var x=this.a,w=C.d.bh(x.d,new B.dV8(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEU(this.c)}},
$S:0}
B.dV8.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVV.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dVW.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dVr.prototype={
$1(d){return new B.Vg(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dVo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Im(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vk(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.u0(),$async$$0)
case 5:s=J.a6(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1s(s.gL(t)),$async$$0)
case 8:case 7:r.ib(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dV7.prototype={
$1(d){this.a.acw(d,"No files selected.","Added")},
$S:424}
B.dVz.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.aa(0)
else w.v(0,new A.N(x,new B.dVy(),A.T(x).k("N<1,m>")))},
$S:0}
B.dVy.prototype={
$1(d){return d.a},
$S:z+2}
B.dVd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xv.ca().cWo(C.a0G,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jE(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ib("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ib("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apY(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ib("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.u0(),$async$$0)
case 9:o.ib("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dVS.prototype={
$1(d){return new B.Q0(this.a.a.c,this.b,null)},
$S:z+7}
B.dVT.prototype={
$1(d){return new B.Zx(this.a.a.c,this.b,null)},
$S:z+18}
B.dVU.prototype={
$1(d){return new B.Zu(this.a.a.c,this.b,null)},
$S:z+19}
B.dVp.prototype={
$1(d){return new B.Q0(this.a.a.c,this.b,null)},
$S:z+7}
B.dVq.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dVL.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Im(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7p(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ib("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cpt(),$async$$0)
case 5:x=6
return A.b(p.u0(),$async$$0)
case 6:r=A.T(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dVH(p),r),new B.dVI(),r.k("N<ak.E,m>")).c_(0,new B.dVJ())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cc(A.eh(new B.dVK(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pl(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vq(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVH.prototype={
$1(d){var x=this.a,w=C.d.bh(x.d,new B.dVG(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dVG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVI.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dVJ.prototype={
$1(d){return d.length!==0},
$S:3}
B.dVK.prototype={
$1(d){var x=this.a
return new B.Zz(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dVM.prototype={
$1(d){return d.a},
$S:z+2}
B.dVN.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dVF.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kJ,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaqq(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mB(D.mR)?C.rG:C.pj
p=!x||p.mB(D.mR)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.BS,A.x(A.a([q,o,t,C.aA,B.Zy(!1,u,!1,w,p,new B.dVA(d),v),B.Zy(!1,u,!1,C.jD,"Share via QR",new B.dVB(d),"Letters/numbers QR code"),B.Zy(!1,u,!1,D.a1L,"Send to their Code",new B.dVC(d),"Enter someone else's personal code"),B.Zy(!1,u,!1,C.hR,"Download / save",new B.dVD(d),v),C.am,B.Zy(!1,u,!0,C.e9,"Delete",new B.dVE(d),v)],y.p),C.ak,v,C.e,C.O,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kY,v,v,C.n),C.bh)},
$S:704}
B.dVA.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dVB.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dVC.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dVD.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dVE.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dVa.prototype={
$1(d){return d.a},
$S:z+2}
B.dVb.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dVc.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7r(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GQ(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pl(s.c,s.f),$async$$0)
case 4:u.ib(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dV6.prototype={
$1(d){var x=this.a
x.u1(new B.dV5(x,d,this.b),"Preparing\u2026")},
$S:424}
B.dV5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ib("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vk(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ib("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bET(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ib("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVs.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dVt.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gS(s)
x=4
return A.b(B.h3d(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVm.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GO(new B.dVi(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ib("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ck(null,null,!1,null,new B.dVj(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dVk(s))
case 5:x=8
return A.b(r.b.iA(0,C.Gb,new B.dVl()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gan(t)){s.ib("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.u0(),$async$$0)
case 9:s.ib("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVi.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dVf(x,d,e))},
$S:203}
B.dVf.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dVj.prototype={
$1(d){return new B.acy(this.a.a,null)},
$S:z+21}
B.dVk.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dVl.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dVn.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IN(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7f(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b1B(B.IN(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apY(new B.dVg(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h3c(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ib(q)
x=1
break}x=10
return A.b(s.u0(),$async$$0)
case 10:o=J.cD(r)
p=o.eN(r,new B.dVh()).gL(0)
s.ib(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVg.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dVe(x,d,e))},
$S:203}
B.dVe.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dVh.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mB(D.mR)},
$S:z+1}
B.dVx.prototype={
$1(d){return new B.ZA(this.a.a.c,null)},
$S:z+23}
B.dVw.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b06(u.a.c,v.b),$async$$0)
case 2:t.ib(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVR.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.c3(A.bm(!0,new A.D(C.BS,A.x(A.a([A.as(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kJ,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Zy(!0,w,!1,C.nv,"My Code",new B.dVO(d),"Your personal code & QR \u2014 others send docs to you"),B.Zy(!1,w,!1,D.a1L,"Send to their Code",new B.dVP(this.a,d),"Enter someone else's 5-digit code + letter"),B.Zy(!1,w,!1,S.z4,"Import backup",new B.dVQ(d),".ngmydoc file from another device")],y.p),C.ak,x,C.e,C.O,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bH(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kY,x,x,C.n),C.bh)},
$S:704}
B.dVO.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dVP.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bEd()},
$S:0}
B.dVQ.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dW3.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IX(D.R7,x,C.a1F,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cW(C.d.gI(D.R7).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:675}
B.dW1.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dW2.prototype={
$0(){this.a.aiT()
return null},
$S:0}
B.dW4.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*10)),e)},
$S:101}
B.dW5.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acA(e,w,v,this.b,x.e,x.c9g(w),new B.dVY(x,w),new B.dVZ(x,v,w),new B.dW_(x,w),new B.dW0(x,w),null)},
$S:z+24}
B.dVY.prototype={
$0(){this.a.ag8(this.b)
return null},
$S:0}
B.dVZ.prototype={
$0(){var x=this.a
return x.m(new B.dVX(x,this.b,this.c))},
$S:0}
B.dVX.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dW_.prototype={
$0(){this.a.Oh(this.b)
return null},
$S:0}
B.dW0.prototype={
$0(){this.a.aiG(this.b)
return null},
$S:0}
B.d8M.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*18)),e)},
$S:101}
B.d8N.prototype={
$3(d,e,f){return A.ee(C.A,f,e,null,null)},
$S:110}
B.d99.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:101}
B.d98.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.d95.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d96.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d97.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d93.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fT(w,C.A,x,new B.d91(this.a),C.h7,C.dz,!0,x,!1,x,x)
$.aV.x1$.push(new B.d92(this.a))
return C.bJ},
$S:133}
B.d91.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d9_(this.a))
return C.bJ},
$S:181}
B.d9_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8X(x))},
$S:8}
B.d8X.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d92.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8Z(x))},
$S:8}
B.d8Z.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d94.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d90(this.a))
return C.bJ},
$S:181}
B.d90.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8Y(x))},
$S:8}
B.d8Y.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d8J.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8I(x,d))},
$S:1754}
B.d8I.prototype={
$0(){return this.a.f=this.b===C.v8},
$S:0}
B.d8K.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8H(x,d))},
$S:8}
B.d8H.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d8L.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8G(x,d))},
$S:8}
B.d8G.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d8C.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d8D.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d8E.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d8F.prototype={
$1(d){return this.a.d.Nh(0,A.dx(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d9m.prototype={
$0(){var x=this.a.a
return B.rG(x.c,x.d)},
$S:1755}
B.d9n.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d9o.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d9p.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d9q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d9r.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d9t.prototype={
$0(){var x=this.a
x.m(new B.d9s(x))},
$S:0}
B.d9s.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hc(0)
else x.qc(0)},
$S:0}
B.d9i.prototype={
$1(d){return this.a.R2(this.b)},
$S:11}
B.d9j.prototype={
$1(d){return this.a.R1(this.b)},
$S:11}
B.d9a.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d9b.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d9c.prototype={
$1(d){return D.hkg},
$S:z+25}
B.d9h.prototype={
$2(d,e){if(d)B.Vq()},
$S:129}
B.d9d.prototype={
$0(){return this.a.aam(this.b)},
$S:0}
B.d9e.prototype={
$0(){return this.a.aaj(this.b)},
$S:0}
B.d9f.prototype={
$0(){return this.a.aeF(this.b)},
$S:0}
B.d9g.prototype={
$0(){return this.a.a26(this.b)},
$S:0}
B.d8B.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d9l.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qf(),$async$$0)
case 2:u.m(new B.d9k(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d9k.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ccO.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mB(D.mR)},
$S:z+1}
B.ccP.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ccN.prototype={
$2(d,e){return this.bl4(d,e)},
bl4(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vr(u.c,A.H(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1756}
B.fyF.prototype={
$1(d){if(d===D.a87&&(this.a.a.a&30)===0)this.a.fW(0)},
$S:z+27}
B.fyG.prototype={
$0(){},
$S:12}
B.fzc.prototype={
bmE(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fmy(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.aa(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hjH(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bmE(d,e)},
$S:488}
B.fzb.prototype={
$1(d){var x=this
d.b=new B.fza(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fza.prototype={
$1(d){return this.bmD(d)},
bmD(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b07(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.X.aM(0,n,null)
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
return A.b(B.fmy(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.aa(0)
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
return A.b(B.a7o(m),$async$$1)
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
x(v=B.aAe.prototype,"gcgi","QD",0)
x(v,"gch9","Js",0)
x(v,"gcgF","yd",0)
x(v=B.aEc.prototype,"gc9a","aeD",0)
x(v,"gc9b","a_b",0)
x(v,"gcvY","aim",0)
x(v=B.aEf.prototype,"gc9c","a_c",0)
x(v,"gcvZ","a2r",0)
x(B.aEd.prototype,"gc9d","aeE",0)
x(B.aAd.prototype,"gc9i","c9j",4)
x(v=B.aEe.prototype,"gcgG","a0l",0)
x(v,"gcux","cuy",4)
x(v,"gb2F","azl",0)
x(v,"gcxt","aiN",0)
x(v,"gbQw","Y4",0)
x(v,"gc9h","Er",0)
x(B.aAf.prototype,"gb6r","a2q",0)
x(B.aAc.prototype,"gc9k","a_d",0)
x(v=B.aAi.prototype,"gb1o","ceX",4)
x(v,"gc9e","aeH",0)
x(v=B.aAg.prototype,"gctv","a2c",0)
x(v,"gb_v","aeG",0)
w(B.aAb.prototype,"gaxX","axY",8)
x(v=B.aAh.prototype,"gcjp","agB",0)
x(v,"gbQ1","ab8",0)
w(v,"gaxX","axY",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cp7,B.a9M,B.auu,B.aCR,B.aFZ,B.jy,B.acg,B.bwV,B.Fk,B.Xx])
w(B.cp8,B.cp7)
w(B.b5f,B.a9M)
x(A.hy,[B.cp3,B.cp4,B.cp5,B.cp2,B.cp6,B.cp9,B.cpa,B.cpb,B.cpc,B.cpd,B.cpe,B.cpf,B.cpg,B.fsa,B.fQD,B.fQF,B.fQE,B.fQS,B.fQT,B.fuH,B.d8R,B.d8T,B.d8S,B.d8W,B.fwG,B.fx9,B.cci,B.ccp,B.ccq,B.ccl,B.ccj,B.ccm,B.ccn,B.fQQ,B.fQR,B.dWa,B.dWj,B.dWh,B.dWi,B.fph,B.fuT,B.fuU,B.ccH,B.fuW,B.fz2,B.ft5,B.ft6,B.ccM,B.fVQ,B.d8Q,B.d8O,B.dW6,B.dV2,B.dV8,B.dVr,B.dV7,B.dVy,B.dVS,B.dVT,B.dVU,B.dVp,B.dVH,B.dVG,B.dVI,B.dVJ,B.dVK,B.dVM,B.dVN,B.dVF,B.dVa,B.dVb,B.dV6,B.dVs,B.dVj,B.dVh,B.dVx,B.dVR,B.dW3,B.dW4,B.d8M,B.d8N,B.d99,B.d98,B.d93,B.d91,B.d9_,B.d92,B.d94,B.d90,B.d8J,B.d8K,B.d8L,B.d8F,B.d9i,B.d9j,B.d9c,B.ccO,B.ccP,B.fyF,B.fzb,B.fza])
w(B.b5g,B.auu)
x(A.iG,[B.fQC,B.d8U,B.d8V,B.fwE,B.fwF,B.fx8,B.dV_,B.dW8,B.dW9,B.dW7,B.dWb,B.dWc,B.dWd,B.dWe,B.dWf,B.dWg,B.dV0,B.dV1,B.fuV,B.d8P,B.dVu,B.dVv,B.dV3,B.dV4,B.dV9,B.dVV,B.dVW,B.dVo,B.dVz,B.dVd,B.dVq,B.dVL,B.dVA,B.dVB,B.dVC,B.dVD,B.dVE,B.dVc,B.dV5,B.dVt,B.dVm,B.dVf,B.dVk,B.dVl,B.dVn,B.dVe,B.dVw,B.dVO,B.dVP,B.dVQ,B.dW1,B.dW2,B.dVY,B.dVZ,B.dVX,B.dW_,B.dW0,B.d95,B.d96,B.d97,B.d8X,B.d8Z,B.d8Y,B.d8I,B.d8H,B.d8G,B.d8C,B.d8D,B.d8E,B.d9m,B.d9n,B.d9o,B.d9p,B.d9q,B.d9r,B.d9t,B.d9s,B.d9a,B.d9b,B.d9d,B.d9e,B.d9f,B.d9g,B.d8B,B.d9l,B.d9k,B.fyG])
x(A.lA,[B.acz,B.NL,B.a9N,B.OP,B.Xw,B.OO,B.Fl])
x(A.af,[B.Zw,B.Vf,B.Vj,B.Vg,B.Zv,B.Vh,B.Zx,B.Zu,B.Q0,B.Zz,B.Zt,B.ZA])
x(A.ah,[B.aAe,B.aEc,B.aEf,B.aEd,B.aAd,B.aEe,B.aAf,B.aAc,B.aAi,B.aAg,B.aAb,B.aAh])
x(A.aw,[B.ad1,B.aAa,B.beJ,B.acA,B.acy,B.beK])
x(A.ju,[B.cco,B.cck,B.ccs,B.cct,B.fRJ,B.dVi,B.dVg,B.dW5,B.d9h,B.ccN,B.fzc])
x(A.j0,[B.bkd,B.bwx])})()
A.j1(b.typeUniverse,JSON.parse('{"b5f":{"a9M":[]},"b5g":{"auu":[]},"Zw":{"af":[],"v":[]},"aAe":{"ah":["Zw"]},"ad1":{"aw":[],"v":[]},"Vf":{"af":[],"v":[]},"Vj":{"af":[],"v":[]},"aEc":{"ah":["Vf"]},"aEf":{"ah":["Vj"]},"bkd":{"j0":[]},"Vg":{"af":[],"v":[]},"aEd":{"ah":["Vg"]},"Zv":{"af":[],"v":[]},"Vh":{"af":[],"v":[]},"acA":{"aw":[],"v":[]},"Zx":{"af":[],"v":[]},"Zu":{"af":[],"v":[]},"Q0":{"af":[],"v":[]},"Zz":{"af":[],"v":[]},"acy":{"aw":[],"v":[]},"Zt":{"af":[],"v":[]},"ZA":{"af":[],"v":[]},"aAd":{"ah":["Zv"]},"bwx":{"j0":[]},"aEe":{"ah":["Vh"]},"aAa":{"aw":[],"v":[]},"beJ":{"aw":[],"v":[]},"aAf":{"ah":["Zx"]},"aAc":{"ah":["Zu"]},"aAi":{"ah":["Q0"]},"aAg":{"ah":["Zz"]},"aAb":{"ah":["Zt"]},"aAh":{"ah":["ZA"]},"beK":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uy"),k:x("M9()"),m:x("bw<m,m>"),F:x("ri"),g:x("aB<jy?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a8<m,R>>"),t:x("O<a8<m,@>>"),r:x("O<jy>"),w:x("O<+file,name(lN,m)>"),u:x("O<cW>"),s:x("O<m>"),E:x("O<j0>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<G>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jy>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bz<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iB"),e:x("ipI"),af:x("Ex"),U:x("jy"),b:x("cu"),C:x("aD"),aK:x("wm"),ab:x("Fk"),br:x("auu"),v:x("Xx"),N:x("m"),X:x("bp<J>"),Q:x("lY"),D:x("dK"),aw:x("bR<m>"),cd:x("Z<a8<m,@>>"),c7:x("v"),ch:x("c_<ai<jy>>"),aW:x("c_<dK?>"),aY:x("c_<~>"),cx:x("acz"),b1:x("bj<ai<jy>>"),cf:x("bj<dK?>"),d4:x("bj<~>"),c4:x("aCR"),bG:x("aFZ"),q:x("mt"),B:x("pD<Fk>"),c6:x("pD<a9N>"),y:x("R"),i:x("J"),z:x("@"),S:x("G"),aQ:x("bi?"),_:x("ai<jy>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jy?"),R:x("aD?"),c:x("Xx?"),d:x("+answerQr,transfer(m,aB<ai<jy>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,NL,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dK?"),cm:x("acg?"),bk:x("aCR?"),ag:x("aFZ?"),dd:x("J?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b2I=new A.ay(C.aD,2,C.r,-1)
D.c3C=new A.a9(C.a5,C.a8,C.x,C.a3P,null,null)
D.b4l=new A.o(null,null,null,C.mt,null,D.c3C,C.n)
D.b5P=new A.o(null,null,null,C.mt,null,E.HG,C.n)
D.aew=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.afQ=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.agR=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.aiw=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fzp=new A.y("Your team portal",null,C.dd,null,null,null,null,null,null,null,null,null)
D.fO6=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Eg,null,null,null,null,null,null,null,null,null)
D.deX=x([D.fzp,C.am,D.fO6],y.p)
D.btD=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.deX,null)
D.fSy=new A.y("Create your organization",null,C.fw,null,null,null,null,null,null,null,null,null)
D.fDR=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Eg,null,null,null,null,null,null,null,null,null)
D.dvB=x([D.fSy,C.am,D.fDR],y.p)
D.btN=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dvB,null)
D.fOJ=new A.y("Team Member sign-in",null,C.fw,null,null,null,null,null,null,null,null,null)
D.fHM=new A.y("Enter the access code and password from your organization.",null,G.Eg,null,null,null,null,null,null,null,null,null)
D.dtn=x([D.fOJ,C.am,D.fHM],y.p)
D.btY=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dtn,null)
D.bA3=new A.Q(16,10,16,28)
D.bAb=new A.Q(16,14,16,4)
D.bBr=new A.Q(20,0,20,16)
D.bBX=new A.Q(20,8,20,16)
D.alk=new A.Q(24,22,24,20)
D.a1L=new A.a0(63394,"MaterialIcons",!1)
D.aot=new A.a0(63515,"MaterialIcons",!1)
D.bOC=new A.a0(983813,"MaterialIcons",!1)
D.bLV=new A.a0(62867,"MaterialIcons",!1)
D.bPE=new A.ae(D.bLV,44,C.c,null,null,null)
D.bQJ=new A.ae(C.kl,null,C.ac,null,null,null)
D.bS6=new A.ae(C.jg,18,null,null,null,null)
D.bTR=new A.ae(D.a1L,26,C.c,null,null,null)
D.bUq=new A.ae(C.Cs,null,null,null,null,null)
D.bV0=new A.ae(C.CB,null,null,null,null,null)
D.bWb=new A.ae(W.a1V,null,null,null,null,null)
D.bWv=new A.ae(C.hB,16,null,null,null,null)
D.c_0=new A.ae(C.rF,16,null,null,null,null)
D.bPV=new A.ae(C.nv,null,null,null,null,null)
D.c_U=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVy=new A.ae(C.GV,null,null,null,null,null)
D.c_Z=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bQg=new A.ae(H.Hu,null,null,null,null,null)
D.c09=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bQg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cP2=x([C.fh,C.b1,C.aD],y.O)
D.c5v=new A.a9(C.ay,C.aE,C.x,D.cP2,null,null)
D.cOv=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.R7=x([C.fh,C.aD],y.O)
D.Ro=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mR=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dnM=x([C.o6,C.aD],y.O)
D.efy={iceServers:0}
D.aJM={urls:0}
D.dzj=new A.bw(D.aJM,["stun:stun.l.google.com:19302"],y.m)
D.dzi=new A.bw(D.aJM,["stun:stun1.l.google.com:19302"],y.m)
D.d4E=x([D.dzj,D.dzi],A.at("O<a8<m,m>>"))
D.dyA=new A.bw(D.efy,[D.d4E],A.at("bw<m,@>"))
D.IL=new B.NL(0,"lanDirect")
D.SJ=new B.NL(1,"cloudStash")
D.dKs=new B.NL(2,"inlineInstant")
D.SK=new B.NL(3,"webrtcLink")
D.zR=new B.NL(4,"videoCloud")
D.fO5=new A.y("Receive file",null,C.n1,null,null,null,null,null,null,null,null,null)
D.cEl=x([E.aqc,C.ad,D.fO5],y.p)
D.f2K=new A.cd(C.aM,C.b9,C.i,C.m,null,C.p,null,0,D.cEl,null)
D.emT=new A.D(C.cm,D.f2K,null)
D.fpZ=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.I7,null,null,null)
D.fzY=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fpZ,null,C.K,null,null,null,null,null,null,null)
D.em3=new A.D(C.BX,D.fzY,null)
D.bae=new A.ce(C.A,null,null,D.em3,null)
D.et9=new A.cN(0,null,0,28,null,null,D.bae,null)
D.ett=new B.a9N(0,"RTCDataChannelConnecting")
D.aPd=new B.a9N(1,"RTCDataChannelOpen")
D.aPe=new B.a9N(3,"RTCDataChannelClosed")
D.etu=new B.Fl(0,"RTCIceConnectionStateNew")
D.etv=new B.Fl(1,"RTCIceConnectionStateChecking")
D.etw=new B.Fl(2,"RTCIceConnectionStateCompleted")
D.etx=new B.Fl(3,"RTCIceConnectionStateConnected")
D.ety=new B.Fl(4,"RTCIceConnectionStateCount")
D.etz=new B.Fl(5,"RTCIceConnectionStateFailed")
D.etA=new B.Fl(6,"RTCIceConnectionStateDisconnected")
D.aPf=new B.Fl(7,"RTCIceConnectionStateClosed")
D.aPg=new B.Xw(0,"RTCIceGatheringStateNew")
D.etB=new B.Xw(1,"RTCIceGatheringStateGathering")
D.a87=new B.Xw(2,"RTCIceGatheringStateComplete")
D.a88=new B.OO(0,"RTCPeerConnectionStateClosed")
D.aPh=new B.OO(1,"RTCPeerConnectionStateFailed")
D.aPi=new B.OO(2,"RTCPeerConnectionStateDisconnected")
D.aPj=new B.OO(3,"RTCPeerConnectionStateNew")
D.aPk=new B.OO(4,"RTCPeerConnectionStateConnecting")
D.aPl=new B.OO(5,"RTCPeerConnectionStateConnected")
D.etC=new B.OP(0,"RTCSignalingStateStable")
D.etD=new B.OP(1,"RTCSignalingStateHaveLocalOffer")
D.etE=new B.OP(2,"RTCSignalingStateHaveRemoteOffer")
D.etF=new B.OP(3,"RTCSignalingStateHaveLocalPrAnswer")
D.etG=new B.OP(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aPm=new B.OP(5,"RTCSignalingStateClosed")
D.f7h=new A.av(160,48)
D.bbv=new A.fk(2,null,null,null,null,C.aD,null,null,null,null)
D.f8Q=new A.a5(16,16,D.bbv,null)
D.fDb=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fai=new A.b2(D.fDb,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fKO=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fal=new A.b2(D.fKO,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTC=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fas=new A.b2(D.fTC,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fCM=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.faS=new A.b2(D.fCM,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fOU=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aSa=new A.b2(D.fOU,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fQm=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fbl=new A.b2(D.fQm,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fV5=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fbC=new A.b2(D.fV5,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fT1=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fbH=new A.b2(D.fT1,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fUf=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fct=new A.b2(D.fUf,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fBn=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fd_=new A.b2(D.fBn,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fMG=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fdk=new A.b2(D.fMG,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fFw=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fdQ=new A.b2(D.fFw,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fVb=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fdU=new A.b2(D.fVb,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fBD=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fe_=new A.b2(D.fBD,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fAj=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fee=new A.b2(D.fAj,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fx5=new A.y("NGMY DOC SHARE",null,C.aTw,null,null,null,null,null,null,null,null,null)
D.fyv=new A.y("Show this to sender",null,C.iu,null,null,null,null,null,null,null,null,null)
D.fzw=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fEG=new A.y("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fFG=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fGb=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fLQ=new A.y("Send to their Doc Share",null,C.nI,null,null,null,null,null,null,null,null,null)
D.fMb=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fMu=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fN4=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fNb=new A.y("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fNz=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.f4,null,null,null,null,null,null,null,null,null)
D.fQS=new A.y("Share files & videos\nwith a scan.",null,C.aTz,null,null,null,null,null,null,null,null,null)
D.fRa=new A.y("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hkg=new B.Zt(null)
D.abl=new B.acz(0,"docShare")
D.abm=new B.acz(1,"gate")
D.VR=new B.acz(2,"gateNoIndividual")})();(function staticFields(){$.aOJ=null
$.fkh=function(){var x=y.N
return A.U(x,x)}()
$.GB=A.U(y.N,y.D)
$.agG=A.U(y.N,A.at("lN"))
$.Rl=A.U(y.N,y.D)
$.fkQ=A.U(y.N,A.at("acg"))
$.ccG=A.U(y.S,A.at("bwV"))
$.hjG=1
$.i70=null
$.i7_=null
$.hZe=null
$.h8v=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iqc","hBe",()=>new B.cp8())
x($,"io7","hcg",()=>C.a.t(A.by(A.by(A.by(A.Ha(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["WnO4RwdM/BgSO9Wo+MvEcGecW/k="]=a.current})($__dart_deferred_initializers__);