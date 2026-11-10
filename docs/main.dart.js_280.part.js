((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cpm:function cpm(){},
hTq(d){var x=null,w=new B.b5j(d,D.eun,new A.pF(x,x,y.c6),new A.pF(x,x,y.B))
w.bAm(d)
return w},
b5j:function b5j(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cph:function cph(d){this.a=d},
cpi:function cpi(d){this.a=d},
cpj:function cpj(d){this.a=d},
cpg:function cpg(d){this.a=d},
cpk:function cpk(d){this.a=d},
hTr(d,e){var x=y.N
x=new B.b5k(d,e,A.U(x,y.e),A.U(x,y.z))
x.bAn(d,e)
return x},
b5k:function b5k(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cpn:function cpn(d){this.a=d},
cpo:function cpo(d){this.a=d},
cpp:function cpp(d){this.a=d},
cpq:function cpq(d){this.a=d},
cpr:function cpr(d){this.a=d},
cps:function cps(d){this.a=d},
cpt:function cpt(d){this.a=d},
cpu:function cpu(d){this.a=d},
h8E(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zg.Mn(x,"ngmy_doc_share_v1",new B.fsD(),1)},
i_0(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cn(d))
if(y.J.b(d))return new Uint8Array(A.cn(J.eH(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cn(A.yn(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cF.aO(d)
return x}catch(w){return v}return v},
RA(d,e){return B.ieG(d,e)},
ieG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RA=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aOM
x=7
return A.b(o==null?$.aOM=B.h8E():o,$async$RA)
case 7:s=g
r=new Uint8Array(A.cn(e))
q=J.mY(s,"blobs","readwrite")
C.j3.ms(J.mX(q,"blobs"),r,d)
x=8
return A.b(J.pN(q),$async$RA)
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
return A.i($async$RA,w)},
Rz(d){return B.ieF(d)},
ieF(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aOM
x=7
return A.b(o==null?$.aOM=B.h8E():o,$async$Rz)
case 7:s=f
r=J.mY(s,"blobs","readonly")
x=8
return A.b(C.j3.zH(J.mX(r,"blobs"),d),$async$Rz)
case 8:q=f
x=9
return A.b(J.pN(r),$async$Rz)
case 9:o=B.i_0(q)
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
return A.i($async$Rz,w)},
ahn(d){return B.ieE(d)},
ieE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aOM
x=7
return A.b(p==null?$.aOM=B.h8E():p,$async$ahn)
case 7:s=f
r=J.mY(s,"blobs","readwrite")
C.j3.G2(J.mX(r,"blobs"),d)
x=8
return A.b(J.pN(r),$async$ahn)
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
return A.i($async$ahn,w)},
fsD:function fsD(){},
i1q(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bq8(w,v))}return u},
hz1(d,e){var x,w={},v=A.aXn("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fR8(w,v,e)
C.wC.yH(v,"change",new B.fRa(w,v,!1))
C.wC.yH(v,"cancel",new B.fR9(w))
$.eX.my()
v.click()
A.bP(C.ajS,new B.fR7(w),y.H)},
fR8:function fR8(d,e,f){this.a=d
this.b=e
this.c=f},
fRa:function fRa(d,e,f){this.a=d
this.b=e
this.c=f},
fR9:function fR9(d){this.a=d},
fR7:function fR7(d){this.a=d},
Dk(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Dk=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gcZ()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUa()?3:4
break
case 3:x=5
return A.b(B.hu1(e,d,s,!0,!1,f,g,h,!1,i),$async$Dk)
case 5:x=1
break
case 4:x=6
return A.b(B.Re(d,s,f,g,h,i),$async$Dk)
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
return A.b(B.IP(s,d),$async$Dk)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fo9(s,d),$async$Dk)
case 14:x=12
return A.b(r.hu1(q,p,o,n,m,l,k,j,a1,i),$async$Dk)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).cc(A.eh(new B.fRn(s,i,d,f,g,h),!1,null,y.H)),$async$Dk)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).cc(A.eh(new B.fRo(s,i,d,f,g,h),!1,null,y.H)),$async$Dk)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Dk,w)},
Re(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Re=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b03(e),$async$Re)
case 3:u=k
x=4
return A.b(B.apR(d,e,!1),$async$Re)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IP(e,d),$async$Re)
case 7:if(k){v=D.abu
x=1
break}x=8
return A.b(B.Vj(e),$async$Re)
case 8:v=t?D.VW:D.abv
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b01(d,e)){v=D.abu
x=1
break}x=11
return A.b(B.Vj(e),$async$Re)
case 11:v=t?D.VW:D.abv
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h3D(d,e)){v=D.abu
x=1
break}x=14
return A.b(B.Vj(e),$async$Re)
case 14:v=D.VW
x=1
break
case 13:v=t?D.VW:D.abv
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Re,w)},
fo9(d,e){var x=0,w=A.j(y.y),v
var $async$fo9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b01(e,d)){v=!1
x=1
break}x=3
return A.b(B.b03(d),$async$fo9)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fo9,w)},
hu1(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).cc(A.eh(new B.fvd(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hp1(d,e,f,g,h,i,j){return new B.Zx(e,j,d,g,h,i,f,null)},
fx9(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fx9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.at,u)
s=new A.au(C.at,u)
x=3
return A.b(A.bV(C.L,null,new B.fxc(A.Q(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fx9)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fx9,w)},
fxE(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fxE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.at,u)
s=new A.au(C.at,u)
r=new A.au(C.at,u)
x=3
return A.b(A.bV(C.L,null,new B.fxG(A.Q(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fxE)
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
return A.i($async$fxE,w)},
h8O(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fJF(d,e){var x=0,w=A.j(y.H),v
var $async$fJF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Vj(e),$async$fJF)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eN()
case 1:return A.h(v,w)}})
return A.i($async$fJF,w)},
fRn:function fRn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fRo:function fRo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acA:function acA(d,e){this.a=d
this.b=e},
fvd:function fvd(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zx:function Zx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAg:function aAg(){this.c=this.a=this.d=null},
d9c:function d9c(d,e){this.a=d
this.b=e},
d99:function d99(d){this.a=d},
d9b:function d9b(d){this.a=d},
d9a:function d9a(d){this.a=d},
d9e:function d9e(){},
d9d:function d9d(d){this.a=d},
ad2:function ad2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCT:function aCT(d,e){this.a=d
this.b=e},
aG0:function aG0(d,e,f){this.a=d
this.b=e
this.c=f},
fxc:function fxc(d,e,f){this.a=d
this.b=e
this.c=f},
fxa:function fxa(d){this.a=d},
fxb:function fxb(d,e,f){this.a=d
this.b=e
this.c=f},
fxG:function fxG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxF:function fxF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccv(d,e,f,g,h){return B.hOk(d,e,f,g,h)},
hOk(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ccv=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iV(r.dH(d,new B.ccw(s,e,h,g,f,q),y.g),y.l),$async$ccv)
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
return A.i($async$ccv,w)},
b_Z(d,e,f,g,h){return B.hOl(d,e,f,g,h)},
hOl(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_Z=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avm("GET",d)
o=A.h02()
if(o==null)o=new A.M5(A.a([],y.W))
x=7
return A.b(o.f6(0,s).d9(0,C.Gh),$async$b_Z)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cw(),$async$b_Z)
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
return A.i($async$b_Z,w)},
b_Y(d){return B.hOi(d)},
hOi(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vA(d,null).d9(0,C.oe),$async$b_Y)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aM(0,A.m6(A.m4(p.e)).cB(0,p.w),null)
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
return A.i($async$b_Y,w)},
ccu(d){return B.hOj(d)},
hOj(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ccu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vA(d,null).d9(0,C.qg),$async$ccu)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m6(A.m4(q.e)).cB(0,q.w)
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
return A.i($async$ccu,w)},
ccw:function ccw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jz:function jz(d,e,f,g,h,i,j,k,l){var _=this
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
hOq(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IN(C.a.b5(u,v.length))}return null},
hOr(d){var x=B.IN(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hOm(){var x,w=$.oh(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.ap(10)
return C.d.hn(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(24)]},
a7e(d){return B.hOn(d)},
hOn(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a7e)
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
return A.i($async$a7e,w)},
a7f(d,e){return B.hOo(d,e)},
hOo(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7f=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hN(d,e,!1,!1,C.cG,null),$async$a7f)
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
return A.i($async$a7f,w)},
BY(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BY)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IN(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7g(r),$async$BY)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7e("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BY)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IN(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BY)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hOm()
x=14
return A.b(B.a7g(m),$async$BY)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a9().ae()
x=15
return A.b(B.a7f("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BY)
case 15:k=f
x=16
return A.b(B.a7f("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BY)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BY)
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
a7g(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IN(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7e("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7g)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7g,w)},
a7h(d,e,f,g){return B.hOs(d,e,f,g)},
hOs(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7h=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IN(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7g(r),$async$a7h)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.ccC())>1048576||g.b3(d,new B.ccD())){v=B.ER(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7s("myCode",d,a0),$async$a7h)
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
v=B.ER(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b06(u,g.gL(d),a0),$async$a7h)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().ap(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dH(d,new B.ccE(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0_(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a9().ae(),"status","pending"],i,y.z),q),$async$a7h)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7h,w)},
ER(d,e,f,g,h){return B.hOp(d,e,f,g,h)},
hOp(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$ER=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$ER)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.ccy())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oh().ap(9999)
h=Date.now()
g=""+1000*h+"_"+C.cK.ap(99999)
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
a1=B.IR(a9,q)
a0=new A.KG(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$ER)
case 11:if(!b1){x=10
break}n=a0.gS(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aX(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pc(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaR(a1.a,a4,"media",a1.d,a2).xj(m,n,new A.E8(!0,q.c)),$async$ER)
case 12:J.cc(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$ER)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRk(r),$async$ER)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dH(a6,new B.ccz(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0_(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a9().ae(),"status","pending"],e,d),a8),$async$ER)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRk(r),$async$ER)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ER,w)},
b0_(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7e(t),$async$b0_)
case 3:s=g
r=y.aL.a(J.r(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.ccx(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7f(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0_,w)},
NK(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NK=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7e("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NK)
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
return A.b(B.b00(k,a0),$async$NK)
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
return A.b(B.b05(h),$async$NK)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vq(g,a0),$async$NK)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a9().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Z(r,new B.ccA(),q),n)
d=A.C(new A.Z(r,new B.ccB(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d5(d,0,A.dC(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7f("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$NK)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NK,w)},
b00(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b00=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iiw(k,j)
C.d.v(s,i)
x=5
return A.b(B.Di(l,m,"Received via My Code",t,e,i),$async$b00)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRk(s),$async$b00)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b00,w)},
ccC:function ccC(){},
ccD:function ccD(){},
ccE:function ccE(){},
ccy:function ccy(){},
ccz:function ccz(){},
ccx:function ccx(){},
ccA:function ccA(){},
ccB:function ccB(){},
fRk(d,e){var x=0,w=A.j(y.H)
var $async$fRk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).cc(A.eh(new B.fRl(e),!1,null,y.H)),$async$fRk)
case 2:return A.h(null,w)}})
return A.i($async$fRk,w)},
bF3(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bF3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).cc(A.eh(new B.fRm(g,e,f),!1,null,y.y)),$async$bF3)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bF3,w)},
fRl:function fRl(d){this.a=d},
fRm:function fRm(d,e,f){this.a=d
this.b=e
this.c=f},
Vg:function Vg(d,e){this.c=d
this.a=e},
aEe:function aEe(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dVo:function dVo(d,e){this.a=d
this.b=e},
Vk:function Vk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEh:function aEh(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dWx:function dWx(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWA:function dWA(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWC:function dWC(d,e){this.a=d
this.b=e},
dWD:function dWD(d,e){this.a=d
this.b=e},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWF:function dWF(d){this.a=d},
dWI:function dWI(){},
dWG:function dWG(d){this.a=d},
dWH:function dWH(d,e){this.a=d
this.b=e},
bki:function bki(){},
Vh:function Vh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEf:function aEf(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dVp:function dVp(d){this.a=d},
dVq:function dVq(d){this.a=d},
h3E(d){var x=d.i0
if(x>=0)return C.o.N(x)
return 10},
hOu(d){var x=d.l_
if(x>=0)return x
return 4.99},
hOt(d){var x=d.lA,w=y.N
w=x.jm(x,new B.ccG(),w,w)
return w},
hk7(d){var x=d.l0,w=y.N
w=x.jm(x,new B.ccH(),w,w)
return w},
b03(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b03=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b03)
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
return A.i($async$b03,w)},
a7j(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7j)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a7j)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7j,w)},
Vj(d){var x=0,w=A.j(y.H),v,u
var $async$Vj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Vj)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Vj)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Vj,w)},
h3D(d,e){var x,w,v
if(B.hOu(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hOt(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bk(w)
return v!=null&&v.ce(new A.V(Date.now(),0,!1))},
b01(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hk7(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bk(x)
return w!=null&&w.ce(new A.V(Date.now(),0,!1))},
hk8(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hk7(d),x,x)
x=w.h(0,t)
v=A.bk(x==null?"":x)
u=v!=null&&v.ce(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dy(f,0,0,0,0,0).a).a9().ae())
d.l0=w},
apS(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apS)
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
return A.i($async$apS,w)},
apT(d){var x=0,w=A.j(y.H),v,u,t
var $async$apT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apS(d),$async$apT)
case 3:u=f
x=5
return A.b(A.az(),$async$apT)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$apT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apT,w)},
apR(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h3E(d)
if(u<=0){v=!1
x=1
break}if(B.h3D(d,e)){v=!1
x=1
break}x=3
return A.b(B.apS(e),$async$apR)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apR,w)},
b02(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b02=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IP(e,d),$async$b02)
case 3:if(g){v=-1
x=1
break}u=B.h3E(d)
if(u<=0){v=-1
x=1
break}if(B.h3D(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apS(e),$async$b02)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b02,w)},
ccJ(d,e,f){var x=0,w=A.j(y.y),v
var $async$ccJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IP(e,d),$async$ccJ)
case 3:if(h){v=!1
x=1
break}v=B.apR(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccJ,w)},
ccI(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ccI=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
x=3
return A.b(B.ccJ(d,u,i.gUa()),$async$ccI)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccI,w)},
a7i(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7i=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
if(i.gUa()){v=!0
x=1
break}if(B.b01(d,u)){v=!0
x=1
break}x=5
return A.b(A.lu(u,C.Ta),$async$a7i)
case 5:x=k?3:4
break
case 3:B.hk8(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7i)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l7(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Ta,"Doc Share for Organizations"),$async$a7i)
case 7:if(!k){v=!1
x=1
break}B.hk8(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7i)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7i,w)},
ccG:function ccG(){},
ccH:function ccH(){},
fSb(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fSb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fSb)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fkK.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fkK.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fSb,w)},
ikR(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fkK.bs($.fkK,new B.fSd(d))},
fSd:function fSd(d){this.a=d},
fmc(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fmc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],f))
s.toString
u=A.n_(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.jh,null,y.H),$async$fmc)
case 3:C.AL.fm(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.my()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmc,w)},
age(d,e,f){var x=0,w=A.j(y.H),v
var $async$age=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fli.n(0,d,new B.ach(A.bp(e,!0,v)))
x=3
return A.b(A.az(),$async$age)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.X.aq(A.H(["parts",e,"size",f],v,y.C),null)),$async$age)
case 2:return A.h(null,w)}})
return A.i($async$age,w)},
ag8(d){return B.i3o(d)},
i3o(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ag8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fli.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ag8)
case 3:u=j.aS(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aM(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b6(s,new B.fpK(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.ach(r)
$.fli.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ag8,w)},
R4(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$R4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cn(e))
$.GC.n(0,d,u)
x=3
return A.b(B.RA(d,u),$async$R4)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R4,w)},
aP8(d){return B.i3m(d)},
i3m(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aP8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GC.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.Rz(d),$async$aP8)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.GC.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aP8)
case 4:s=f
r=A.aS(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aO(r)
x=!J.ct(q)?9:10
break
case 9:B.R4(d,q)
x=11
return A.b(J.hu(s,d),$async$aP8)
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
return A.i($async$aP8,w)},
i_q(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cn(J.eH(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cn(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cn(A.yn(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cn(d)),y.K)
return A.f8(null,y.K)},
a22(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a22=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bj($.bB,y.cf)
t=new A.c0(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fvp(r,t),!1,s)
A.fB(r,"error",new B.fvq(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iC(0,C.Nh,new B.fvr())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a22,w)},
aPs(d,e,f){return B.i5H(d,e,f)},
i5H(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPs=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a22(i),$async$aPs)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.RA(o,p),$async$aPs)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cc(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.age(k,j,s),$async$aPs)
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
return A.i($async$aPs,w)},
aPr(d,e,f){return B.i5G(d,e,f)},
i5G(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPr=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPs(d,e,f),$async$aPr)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a22(f),$async$aPr)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GC.n(0,s,r)
$.Rl.n(0,s,r)
x=11
return A.b(B.R4(s,r),$async$aPr)
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
return A.i($async$aPr,w)},
BZ(d,e,f,g,h,i){return B.hOD(d,e,f,g,h,i)},
hOD(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BZ=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cK.ap(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jz(p,q,o,n,new A.V(Date.now(),0,!1).a9().ae(),a0,f,B.b09(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.R4(s,d),$async$BZ)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BZ)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cJ.gcu().aO(d)),$async$BZ)
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
return A.b(B.AV(e),$async$BZ)
case 12:j=a2
J.cc(j,m)
x=13
return A.b(B.GN(e,j),$async$BZ)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BZ,w)},
Vl(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vl=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AV(d),$async$Vl)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
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
k=B.hka(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a9().ae()
i=new B.jz(m,n,k,l,j,"From folder",null,B.b09(),null)
$.agI.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a22(o),$async$Vl)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.GC.n(0,h,g)
$.Rl.n(0,h,g)
B.R4(h,g)
x=9
break
case 10:x=11
return A.b(B.aPr(d,m,o),$async$Vl)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GN(d,t),$async$Vl)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vl,w)},
h3I(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h3I=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hka(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IQ(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.BZ(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h3I,w)},
IQ(d,e,f,g,h,i){return B.hOC(d,e,f,g,h,i)},
hOC(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
j=new A.KG(A.dC(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IQ)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.ct(m)){x=6
break}J.h9(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cn(J.S9(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kD(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.RA(k,l),$async$IQ)
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
return A.b(j.a4(0),$async$IQ)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.RA(k,new Uint8Array(A.cn(n))),$async$IQ)
case 15:J.cc(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.age(r,q,g),$async$IQ)
case 16:f=new B.jz(i,a1,a0,g,new A.V(Date.now(),0,!1).a9().ae(),a2,null,B.b09(),null)
x=17
return A.b(B.AV(d),$async$IQ)
case 17:e=a6
J.cc(e,f)
x=18
return A.b(B.GN(d,e),$async$IQ)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IQ,w)},
Vn(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Vn=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agI.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a22(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ag8(s),$async$Vn)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Rz(u[o]),$async$Vn)
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
v=A.yn(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Rl.h(0,s)
if(i==null)i=$.GC.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rH(d,e),$async$Vn)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Rl.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.yn(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vn,w)},
hka(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rH(d,e){return B.hOE(d,e)},
hOE(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rH=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Rl.h(0,f)
if(e==null)e=$.GC.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agI.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a22(s),$async$rH)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.GC.n(0,f,r)
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
return A.b(B.ag8(f),$async$rH)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.az_(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Rz(g[l]),$async$rH)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.ap7()
if(!C.aG.gan(r)){$.GC.n(0,f,r)
$.Rl.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aP8(f),$async$rH)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Rl.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Vn(a0,a1,0,g),$async$rH)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.cn(i))
$.GC.n(0,f,h)
$.Rl.n(0,f,h)
B.R4(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rH,w)},
hOH(d){var x,w,v=$.agI.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hOI(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hOF(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apZ(d,e,f,g,h){return B.hOG(d,e,f,g,h)},
hOG(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apZ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agI.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a22(s),$async$apZ)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rH(g,e),$async$apZ)
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
return A.b(n.iw(d).xj(h,r,new A.E8(!0,e.c)),$async$apZ)
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
return A.i($async$apZ,w)},
hkc(d,e,f,g,h){var x,w,v,u,t=$.hkb
$.hkb=t+1
x=Date.now()
w=""+1000*x+"_"+C.cK.ap(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ccU.n(0,t,new B.bx0(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.az_(u)))
return t},
h3J(d){var x=0,w=A.j(y.H)
var $async$h3J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h3J,w)},
IR(d,e){var $async$IR=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agI.h(0,h)
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
return A.qm(B.Vn(d,e,p,o<q?o:q),$async$IR,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qm(A.G9(n),$async$IR,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qm(B.ag8("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IR,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qm(B.Rz(h[l]),$async$IR,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qm(A.G9(k),$async$IR,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qm(B.rH(d,e),$async$IR,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qm(A.G9(A.yn(j,p,o<i?o:i)),$async$IR,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qm(null,0,w)
case 2:return A.qm(t.at(-1),1,w)}})
var x=0,w=A.hsV($async$IR,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.huM(w)},
b0b(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ccU.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a5k(),$async$b0b)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0b,w)},
Vm(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Vm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccU.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5k(),$async$Vm)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.age(r.c,u,r.z),$async$Vm)
case 4:t=new B.jz(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a9().ae(),r.f,r.r,B.b09(),null)
u=r.a
x=5
return A.b(B.AV(u),$async$Vm)
case 5:s=f
J.cc(s,t)
x=6
return A.b(B.GN(u,s),$async$Vm)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vm,w)},
a7p(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccU.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahn(u[s]),$async$a7p)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.aa(0)
case 1:return A.h(v,w)}})
return A.i($async$a7p,w)},
ccW(d,e,f){var x=0,w=A.j(y.H)
var $async$ccW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bC3(d,e,f),$async$ccW)
case 2:return A.h(null,w)}})
return A.i($async$ccW,w)},
ccX(d,e,f){var x=0,w=A.j(y.H)
var $async$ccX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bC4(d,e,f),$async$ccX)
case 2:return A.h(null,w)}})
return A.i($async$ccX,w)},
ES(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$ES=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AV(d),$async$ES)
case 2:p=g
J.nG(p,new B.ccV(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GC.W(0,v)
$.agI.W(0,e)
x=3
return A.b(B.ag8(v),$async$ES)
case 3:u=g
$.fli.W(0,v)
x=4
return A.b(A.az(),$async$ES)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$ES)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$ES)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahn(s[q]),$async$ES)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahn(v),$async$ES)
case 13:x=14
return A.b(B.GN(d,p),$async$ES)
case 14:return A.h(null,w)}})
return A.i($async$ES,w)},
b0a(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rH(d,e),$async$b0a)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fmc(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0a,w)},
AV(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AV)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aM(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fvs(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AV,w)},
GN(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GN)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fzz(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.X.aq(t,null)),$async$GN)
case 3:return A.h(null,w)}})
return A.i($async$GN,w)},
bC3(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bC3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AV(d),$async$bC3)
case 3:u=h
t=J.cE(u)
s=t.bh(u,new B.ftC(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aF2(f))
x=4
return A.b(B.GN(d,u),$async$bC3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bC3,w)},
bC4(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bC4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AV(d),$async$bC4)
case 3:u=h
t=J.cE(u)
s=t.bh(u,new B.ftD(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cLI(f))
x=4
return A.b(B.GN(d,u),$async$bC4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bC4,w)},
ach:function ach(d){this.a=d},
fpK:function fpK(){},
fvp:function fvp(d,e){this.a=d
this.b=e},
fvq:function fvq(d){this.a=d},
fvr:function fvr(){},
ccV:function ccV(d){this.a=d},
bx0:function bx0(d,e,f,g,h,i,j,k,l){var _=this
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
fvs:function fvs(){},
fzz:function fzz(){},
ftC:function ftC(d){this.a=d},
ftD:function ftD(d){this.a=d},
a7q(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b3(d,new B.cd_())?3:4
break
case 3:x=5
return A.b(B.b0c(d,e),$async$a7q)
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
return A.b(B.b07(s),$async$a7q)
case 10:case 9:if(g){v=new A.Qr(1,D.SO,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vo(d,e),$async$a7q)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Vt(!0,!0,d,e),$async$a7q)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.NM(d,D.zU,e,t)
v=new A.Qr(p,D.zU,t)
x=1
break}v=B.ccZ(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7q,w)},
Vo(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7s(null,d,e),$async$Vo)
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
return A.b(B.b06(p,d.length,e),$async$Vo)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ccX(e,C.d.gI(d).a,r.b),$async$Vo)
case 7:case 6:q=r.a
x=8
return A.b(B.NM(d,D.SO,e,q),$async$Vo)
case 8:v=new A.Qr(d.length,D.SO,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vo,w)},
Vp(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mD(D.mS)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7r(d,e),$async$Vp)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ccS(s,d,e,t),$async$Vp)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b07(t),$async$Vp)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rH(e,d),$async$Vp)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vo(A.a([d],y.r),e),$async$Vp)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vp,w)},
Vr(){var x=0,w=A.j(y.H)
var $async$Vr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h3C(),$async$Vr)
case 2:x=3
return A.b(B.aRE(),$async$Vr)
case 3:return A.h(null,w)}})
return A.i($async$Vr,w)},
a7r(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b09()
x=3
return A.b(B.ccW(e,d.a,u),$async$a7r)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7r,w)},
NM(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$NM=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.SO&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7r(p,f),$async$NM)
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
return A.b(B.ccR(o,p,u,f),$async$NM)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ccS(o,p,f,t),$async$NM)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ccQ(o,u,p,f),$async$NM)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$NM,w)},
b0c(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccY(e,d),$async$b0c)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Vt(!1,!0,d,e),$async$b0c)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qr(u.a,D.zU,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0c,w)},
ccY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ccY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Vn(d,s,0,1),$async$ccY)
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
return A.i($async$ccY,w)},
ccZ(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ccZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7s(null,d,e),$async$ccZ)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hk9(u)
if(t.length>800){v=null
x=1
break}v=new A.Qr(d.length,D.dLh,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccZ,w)},
aq_(d,e,f){return B.hOL(d,e,f)},
hOL(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aq_=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nk(g,1)
x=B.h3H(g)?3:4
break
case 3:x=5
return A.b(B.ccT(g),$async$aq_)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nk(g,13))
try{k=B.ET(d,a0,s)
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
return A.b(B.b05(q),$async$aq_)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vq(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.h3G(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vq(n,a0)
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
if(C.a.c9(k,"/"))h=C.a.au(k,0,k.length-1)
else h=k
v=B.IS(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vq(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aq_,w)},
IS(d,e,f){return B.hOJ(d,e,f)},
hOJ(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IS=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.au(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cI(A.w(s)+"/manifest.json",0,null)
q=A.cI(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_Y(r),$async$IS)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_Y(A.cI(s,0,null)),$async$IS)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ccv(o,r,a1,n,a2),$async$IS)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ccu(q),$async$IS)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vq(l,a2),$async$IS)
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
a7s(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7s=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gS(u)
x=5
return A.b(B.rH(f,r),$async$a7s)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gcu().aO(q)],t,s))
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
return A.i($async$a7s,w)},
Vq(d,e){return B.hOK(d,e)},
hOK(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vq=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.BZ(i,a3,d,k,l,o),$async$Vq)
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
return A.i($async$Vq,w)},
NL:function NL(d,e){this.a=d
this.b=e},
cd_:function cd_(){},
a1C(d){var x=A.Q(d).ax.a===C.J,w=x?D.ah6:D.aeG,v=x?D.aiQ:C.c,u=x?C.aP:C.N,t=x?C.bM:C.al,s=x?D.ag6:C.aN
return new A.aHg([w,s,v,u,t,x?C.fi:C.bP])},
hzT(d,e){var x=e?C.w.j(0.72):C.aS
return A.ck(null,x,!0,null,new B.fWk(e),d,null,!0,!0,y.N)},
ccF(d,e,f,g,h,i,j,k,l){return new B.Vi(e,l,d,f,k,j,g,h,i,null)},
Zz(d,e,f,g,h,i,j){return new B.beP(g,h,j,e,i,d,f,null)},
fWk:function fWk(d){this.a=d},
Zw:function Zw(d,e){this.c=d
this.a=e},
aAf:function aAf(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d98:function d98(d){this.a=d},
d96:function d96(d){this.a=d},
d97:function d97(d){this.a=d},
bwD:function bwD(){},
Vi:function Vi(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEg:function aEg(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dWv:function dWv(d){this.a=d},
dVT:function dVT(d,e){this.a=d
this.b=e},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVs:function dVs(d,e,f){this.a=d
this.b=e
this.c=f},
dVr:function dVr(d){this.a=d},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVy:function dVy(d,e,f){this.a=d
this.b=e
this.c=f},
dVx:function dVx(d){this.a=d},
dWj:function dWj(d,e){this.a=d
this.b=e},
dWk:function dWk(d){this.a=d},
dVQ:function dVQ(d,e,f){this.a=d
this.b=e
this.c=f},
dVN:function dVN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dVw:function dVw(d){this.a=d},
dVY:function dVY(d){this.a=d},
dVX:function dVX(){},
dVC:function dVC(d){this.a=d},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWi:function dWi(d,e){this.a=d
this.b=e},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVP:function dVP(d,e){this.a=d
this.b=e},
dW9:function dW9(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
dW4:function dW4(d){this.a=d},
dW6:function dW6(){},
dW7:function dW7(){},
dW8:function dW8(d,e){this.a=d
this.b=e},
dWa:function dWa(){},
dWb:function dWb(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d){this.a=d},
dW_:function dW_(d){this.a=d},
dW0:function dW0(d){this.a=d},
dW1:function dW1(d){this.a=d},
dW2:function dW2(d){this.a=d},
dVz:function dVz(){},
dVA:function dVA(d){this.a=d},
dVB:function dVB(d,e){this.a=d
this.b=e},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVu:function dVu(d,e,f){this.a=d
this.b=e
this.c=f},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d,e,f){this.a=d
this.b=e
this.c=f},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVH:function dVH(d){this.a=d},
dVE:function dVE(d,e,f){this.a=d
this.b=e
this.c=f},
dVI:function dVI(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
dVK:function dVK(){},
dVM:function dVM(d,e){this.a=d
this.b=e},
dVF:function dVF(d){this.a=d},
dVD:function dVD(d,e,f){this.a=d
this.b=e
this.c=f},
dVG:function dVG(){},
dVW:function dVW(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWc:function dWc(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWe:function dWe(d){this.a=d},
dWs:function dWs(d){this.a=d},
dWq:function dWq(d){this.a=d},
dWr:function dWr(d){this.a=d},
dWt:function dWt(){},
dWu:function dWu(d,e){this.a=d
this.b=e},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWn:function dWn(d,e,f){this.a=d
this.b=e
this.c=f},
dWl:function dWl(d,e,f){this.a=d
this.b=e
this.c=f},
dWo:function dWo(d,e){this.a=d
this.b=e},
dWp:function dWp(d,e){this.a=d
this.b=e},
aAc:function aAc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beO:function beO(d,e,f){this.c=d
this.d=e
this.a=f},
d94:function d94(){},
d95:function d95(){},
acB:function acB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d9s:function d9s(){},
d9r:function d9r(d){this.a=d},
Zy:function Zy(d,e,f){this.c=d
this.d=e
this.a=f},
aAh:function aAh(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d9o:function d9o(d){this.a=d},
d9p:function d9p(d,e,f){this.a=d
this.b=e
this.c=f},
d9q:function d9q(d,e){this.a=d
this.b=e},
d9m:function d9m(d,e){this.a=d
this.b=e},
d9k:function d9k(d){this.a=d},
d9i:function d9i(d){this.a=d},
d9f:function d9f(d){this.a=d},
d9l:function d9l(d){this.a=d},
d9h:function d9h(d){this.a=d},
d9n:function d9n(d){this.a=d},
d9j:function d9j(d){this.a=d},
d9g:function d9g(d){this.a=d},
Zv:function Zv(d,e,f){this.c=d
this.d=e
this.a=f},
aAe:function aAe(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d91:function d91(d){this.a=d},
d90:function d90(d,e){this.a=d
this.b=e},
d92:function d92(d){this.a=d},
d9_:function d9_(d,e){this.a=d
this.b=e},
d93:function d93(d){this.a=d},
d8Z:function d8Z(d,e){this.a=d
this.b=e},
d8V:function d8V(d){this.a=d},
d8W:function d8W(d){this.a=d},
d8X:function d8X(d,e){this.a=d
this.b=e},
d8Y:function d8Y(d){this.a=d},
Q0:function Q0(d,e,f){this.c=d
this.d=e
this.a=f},
aAk:function aAk(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d9F:function d9F(d){this.a=d},
d9G:function d9G(d){this.a=d},
d9H:function d9H(d){this.a=d},
d9I:function d9I(d){this.a=d},
d9J:function d9J(d,e){this.a=d
this.b=e},
d9K:function d9K(d){this.a=d},
d9M:function d9M(d){this.a=d},
d9L:function d9L(d){this.a=d},
ZA:function ZA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAi:function aAi(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d9B:function d9B(d,e){this.a=d
this.b=e},
d9C:function d9C(d,e){this.a=d
this.b=e},
d9t:function d9t(d,e,f){this.a=d
this.b=e
this.c=f},
d9u:function d9u(d){this.a=d},
d9v:function d9v(){},
d9A:function d9A(){},
d9w:function d9w(d,e){this.a=d
this.b=e},
d9x:function d9x(d,e){this.a=d
this.b=e},
d9y:function d9y(d,e){this.a=d
this.b=e},
d9z:function d9z(d,e){this.a=d
this.b=e},
acz:function acz(d,e){this.c=d
this.a=e},
d8U:function d8U(d){this.a=d},
Zu:function Zu(d){this.a=d},
aAd:function aAd(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ZB:function ZB(d,e){this.c=d
this.a=e},
aAj:function aAj(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d9E:function d9E(d){this.a=d},
d9D:function d9D(d){this.a=d},
beP:function beP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hOM(){var x,w=$.oh(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"VT"+C.d.hn(v)},
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
a7t(d){return B.hON(d)},
hON(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7t)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hN("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7t)
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
return A.i($async$a7t,w)},
Vs(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NN(),$async$Vs)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a9().ae())
r.n(s,d,t)
x=4
return A.b(B.a7t(s),$async$Vs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vs,w)},
Vt(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Vt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Vt)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.T(f).k("Z<1>")
u=A.C(new A.Z(f,new B.cd1(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hOM()
t=A.T(u).k("N<1,a8<n,aD>>")
r=A.C(new A.N(u,new B.cd2(s),t),t.k("ak.E"))
x=6
return A.b(B.NN(),$async$Vt)
case 6:q=i
J.aJ(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.C))
x=7
return A.b(B.a7t(q),$async$Vt)
case 7:x=8
return A.b(B.a7u(r,u,g,s),$async$Vt)
case 8:v=new A.bqB(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vt,w)},
aq0(d){var x=0,w=A.j(y.y),v,u,t
var $async$aq0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NN(),$async$aq0)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aq0,w)},
cd3(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cd3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NN(),$async$cd3)
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
return A.i($async$cd3,w)},
a7u(d,e,f,g){return B.hOO(d,e,f,g)},
hOO(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7u=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apZ("media",r,new B.cd0(s,e,g),f,q),$async$a7u)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vs(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7u)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vs(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$a7u)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vs(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7u)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7u,w)},
ET(d,e,f){return B.hOP(d,e,f)},
hOP(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$ET=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ET)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aq0(b3),$async$ET)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iY,null,g),$async$ET)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aq0(b3),$async$ET)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NN(),$async$ET)
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
a2=a1.gaf(a4),a5=y.N,a6=b6==null
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pc(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaR(a8.a,b0,"media",a8.d,a9).CS(m)
k=A.cI(l,0,null)
x=17
return A.b(B.b_Z(k,n,o,s,b7),$async$ET)
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pc(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaR(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$ET)
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
return A.b(B.a7t(e),$async$ET)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ET,w)},
cd1:function cd1(){},
cd2:function cd2(d){this.a=d},
cd0:function cd0(d,e,f){this.a=d
this.b=e
this.c=f},
aRE(){var x=0,w=A.j(y.H),v,u
var $async$aRE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hZM=null
v=y.H
u=A.dV(null,v)
x=2
return A.b(u,$async$aRE)
case 2:u=A.dV(null,v)
x=3
return A.b(u,$async$aRE)
case 3:u=$.h90
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dV(u,v),$async$aRE)
case 4:$.h90=$.i7z=$.i7A=null
return A.h(null,w)}})
return A.i($async$aRE,w)},
fza(d){var x=0,w=A.j(y.H),v,u
var $async$fza=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8d){x=1
break}u=new A.bj($.bB,y.d4)
d.c=new B.fzb(new A.c0(u,y.aY))
x=3
return A.b(u.iC(0,C.i3,new B.fzc()),$async$fza)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fza,w)},
i7x(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hOw(x):x},
h94(d){var x=0,w=A.j(y.T),v,u,t
var $async$h94=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.aq2(u)
x=1
break}v=B.h3G(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h94,w)},
h93(d){var x=0,w=A.j(y.T),v,u,t
var $async$h93=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.aq3(u)
x=1
break}v=B.h3G(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h93,w)},
fRX(d){var x=0,w=A.j(y.T),v
var $async$fRX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aq3(d),$async$fRX)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRX,w)},
bCX(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bCX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h93(d),$async$bCX)
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
return A.i($async$bCX,w)},
fn0(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fn0=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Vm(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BZ(d.ap7(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fn0,w)},
GP(d,e,f){return B.ia0(d,e,f)},
ia0(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GP=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h94(a1),$async$GP)
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
return A.b($.hBM().aFi(D.dzo,null),$async$GP)
case 4:l=d.h90=a4
f.a="file"
f.b="application/octet-stream"
k=new A.az_(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bj($.bB,y.b1)
l.y=new B.fzI(f,k,new B.fzJ(f,a2,k,j,a0,p),a2,j,a0,p,new A.c0(t,y.ch))
x=5
return A.b(l.a8g(0,new B.Xy(r,"offer")),$async$GP)
case 5:d=l
x=7
return A.b(l.alL(0),$async$GP)
case 7:x=6
return A.b(d.a88(0,a4),$async$GP)
case 6:x=8
return A.b(B.fza(l),$async$GP)
case 8:x=9
return A.b(l.apU(),$async$GP)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i7x(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aq(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aq4(m,h),$async$GP)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hk9(h)
case 11:v=new A.bpT(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GP,w)},
fzb:function fzb(d){this.a=d},
fzc:function fzc(){},
fzJ:function fzJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzI:function fzI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fzH:function fzH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ibX(d){switch(d){case"new":return D.euo
case"checking":return D.eup
case"connected":return D.eur
case"completed":return D.euq
case"failed":return D.eut
case"disconnected":return D.euu
case"closed":return D.aPF
case"count":return D.eus}return D.aPF},
ibY(d){switch(d){case"new":return D.aPG
case"gathering":return D.euv
case"complete":return D.a8d}return D.aPG},
iml(d){switch(d){case"stable":return D.euw
case"have-local-offer":return D.eux
case"have-local-pranswer":return D.euz
case"have-remote-offer":return D.euy
case"have-remote-pranswer":return D.euA
case"closed":return D.aPM}return D.aPM},
iky(d){switch(d){case"new":return D.aPJ
case"connecting":return D.aPK
case"connected":return D.aPL
case"closed":return D.a8e
case"disconnected":return D.aPI
case"failed":return D.aPH}return D.a8e},
a9O:function a9O(d,e){this.a=d
this.b=e},
OP:function OP(d,e){this.a=d
this.b=e},
Xx:function Xx(d,e){this.a=d
this.b=e},
OO:function OO(d,e){this.a=d
this.b=e},
Fm:function Fm(d,e){this.a=d
this.b=e},
cpl:function cpl(){},
h5r(d){var x=new B.Fl()
x.a=d
x.b=!0
return x},
Fl:function Fl(){this.b=this.a=$},
a9N:function a9N(){},
auw:function auw(){},
Xy:function Xy(d,e){this.a=d
this.b=e},
h3C(){var x=0,w=A.j(y.H)
var $async$h3C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h3C,w)},
h3F(d,e,f){var x=0,w=A.j(y.T),v
var $async$h3F=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mD(D.mS))){v=null
x=1
break}v=B.fSb(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h3F,w)},
hk9(d){var x,w=F.ae4.a53(C.dO.aO(d),null)
if(w.length===0){x=C.dO.aO(d)
return C.cJ.gcu().aO(x)}return C.cJ.gcu().aO(w)},
hOv(d){var x,w,v=C.cF.aO(d)
try{x=C.ch.cB(0,F.ae3.ben(v,!1))
return x}catch(w){x=C.ch.cB(0,v)
return x}},
h3G(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hOv(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.ch.cB(0,C.cF.aO(x))
return v}catch(u){return x}}return null},
hOw(d){var x,w,v,u,t,s=A.a([],y.s)
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
hOx(){var x,w=$.oh(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"DS"+C.d.hn(v)},
b04(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b04=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b04)
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
return A.i($async$b04,w)},
ccK(d,e){return B.hOy(d,e)},
hOy(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ccK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hN("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$ccK)
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
return A.i($async$ccK,w)},
b07(d){var x=0,w=A.j(y.y),v,u,t
var $async$b07=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b04(d),$async$b07)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b07,w)},
b06(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b06=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hOx()
r=C.a.i(f)
t=C.dO.aO(s)
x=3
return A.b(B.ccK(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gcu().aO(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$b06)
case 3:if(!h){v=null
x=1
break}v=new A.a0D("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b06,w)},
b05(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b05=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b04(o),$async$b05)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ch.cB(0,C.cF.aO(u))
if(J.j5(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b05,w)},
ccL(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ccL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bDU("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$ccL)
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
return A.i($async$ccL,w)},
b08(d){var x=0,w=A.j(y.h),v,u,t
var $async$b08=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IO(),$async$b08)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b08,w)},
apW(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apW)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b08(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apW,w)},
apU(d,e){var x=0,w=A.j(y.H)
var $async$apU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apU)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apU)
case 2:return A.h(null,w)}})
return A.i($async$apU,w)},
a7l(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7l)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.IO(),$async$a7l)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.C))
x=5
return A.b(A.a7k(s),$async$a7l)
case 5:x=6
return A.b(B.apU(f,u),$async$a7l)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7l,w)},
a7m(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7m=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7m)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.IO(),$async$a7m)
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
return A.b(B.apU(g,q),$async$a7m)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7k(u),$async$a7m)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7m,w)},
a7n(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7n=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7n)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.IO(),$async$a7n)
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
s=B.b01(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7n)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.X.aq(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a9().ae()],p,p),null)),$async$a7n)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7n,w)},
ccM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ccM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$ccM)
case 7:s=f
p=A.w(n)
r=A.aS(J.r(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$ccM,w)},
IP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccM(d),$async$IP)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b08(t),$async$IP)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apV(d),$async$IP)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b01(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apV(d),$async$IP)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IP,w)},
apV(d){var x=0,w=A.j(y.H)
var $async$apV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apV)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apV)
case 2:return A.h(null,w)}})
return A.i($async$apV,w)},
b09(){var x,w=$.oh(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(32)]
return C.d.hn(v)},
a7o(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h3H(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ccP(d){return B.hOA(d)},
hOA(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ccP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7o(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$ccP)
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
return A.i($async$ccP,w)},
apY(d,e){return B.hOB(d,e)},
hOB(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7o(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hN("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apY)
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
return A.i($async$apY,w)},
ccR(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7o(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apY(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$ccR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccR,w)},
ccQ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7o(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apY(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z)),$async$ccQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccQ,w)},
ccS(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ccS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7o(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apY(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccS,w)},
ccT(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ccT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h3H(d)){v=null
x=1
break}x=3
return A.b(B.ccP(d),$async$ccT)
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
return A.i($async$ccT,w)},
a7v(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7v=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7v)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7v)
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
return A.i($async$a7v,w)},
aq1(d){return B.hOQ(d)},
hOQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aq1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$aq1)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hN("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],y.N,y.z),!1,!1,C.cG,null),$async$aq1)
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
return A.i($async$aq1,w)},
aq2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aq2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aq2)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7v(),$async$aq2)
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
if(J.j5(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a9().ae())
J.aJ(s,j,o)
x=9
return A.b(B.aq1(s),$async$aq2)
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
return A.i($async$aq2,w)},
aq4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aq4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aq4)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7v(),$async$aq4)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dO.aO(C.a.i(e))
q.n(0,"answer",C.cJ.gcu().aO(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a9().ae())
t.n(u,p,q)
x=5
return A.b(B.aq1(u),$async$aq4)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aq4,w)},
aq3(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aq3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aq3)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7v(),$async$aq3)
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
return A.i($async$aq3,w)},
aoZ(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.qb)){v=null
x=1
break}x=3
return A.b(p.m7(e),$async$aoZ)
case 3:r=g
u=4
x=7
return A.b(r.hx(C.ha),$async$aoZ)
case 7:q=g
o=q
o=o==null?null:J.eS(J.vK(o))
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
return A.i($async$aoZ,w)},
iiw(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aX(C.o.u(w),5,"0")
return v},
fQe(d){return B.iiy(d)},
iiy(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fQe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iw("media").L7(d,3600),$async$fQe)
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
return A.i($async$fQe,w)},
Di(d,e,f,g,h,i){var x=null
return B.iiv(d,e,f,g,h,i)},
iiv(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Di=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hkc(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h3J(r),$async$Di)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fQe(o),$async$Di)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7p(r),$async$Di)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aSZ)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.M5(A.a([],g))
x=15
return A.b(d.f6(0,A.avm("GET",A.cI(n,0,null))).d9(0,C.Gh),$async$Di)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7p(r),$async$Di)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KG(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Di)
case 24:if(!b2){x=23
break}k=d.gS(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0b(r,k),$async$Di)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$Di)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Vm(r)
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
return A.b(B.a7p(r),$async$Di)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Di,w)},
aRk(d){return B.iix(d)},
iix(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iw("media").W(0,d),$async$aRk)
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
return A.i($async$aRk,w)}},D,T,M,U,V,W,X,N,Y
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
B.cpm.prototype={
aFi(d,e){return this.cNe(d,e)},
cNe(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aFi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.U(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.kt(A.cC(t)))
t=J.k(u)
v=B.hTr(C.cJ.gcu().aO(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aFi,w)}}
B.b5j.prototype={
bAm(d){var x=this,w=x.w
w.onclose=A.ht(new B.cph(x))
w.onopen=A.ht(new B.cpi(x))
w.onmessage=A.ht(new B.cpj(x))
w.onbufferedamountlow=A.ht(new B.cpk(x))},
gda(d){return this.x},
ai2(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ai2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fl()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h5r(J.eS(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ed(d.arrayBuffer(),y.af),$async$ai2)
case 8:v=t.h5r(s.ao8(f,0,null))
x=1
break
case 7:case 4:v=B.h5r(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai2,w)}}
B.b5k.prototype={
bAn(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ht(new B.cpn(x)))
w.addEventListener("icecandidate",A.ht(new B.cpo(x)))
w.addEventListener("iceconnectionstatechange",A.ht(new B.cpp(x)))
w.onicegatheringstatechange=A.ht(new B.cpq(x))
w.addEventListener("signalingstatechange",A.ht(new B.cpr(x)))
if(!$.hcM())w.addEventListener("connectionstatechange",A.ht(new B.cps(x)))
w.addEventListener("negotiationneeded",A.ht(new B.cpt(x)))
w.addEventListener("track",A.ht(new B.cpu(x)))},
alL(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ed(s.createAnswer(A.kt(A.cC(A.U(y.N,y.z)))),y.aQ),$async$alL)
case 3:t=f
v=new B.Xy(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alL,w)},
a88(d,e){return this.bps(0,e)},
bps(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a88=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a88)
case 2:return A.h(null,w)}})
return A.i($async$a88,w)},
a8g(d,e){return this.bpN(0,e)},
bpN(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8g)
case 2:return A.h(null,w)}})
return A.i($async$a8g,w)},
apU(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Xy(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apU,w)},
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
B.acA.prototype={
a6(){return"_DocShareEntry."+this.b}}
B.Zx.prototype={
R(){return new B.aAg()},
gcZ(){return this.c}}
B.aAg.prototype={
Z(){this.a2()
this.aeH()},
aeH(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b02(u.e,u.c),$async$aeH)
case 2:t=e
if(v.c!=null)v.m(new B.d9c(v,t))
return A.h(null,w)}})
return A.i($async$aeH,w)},
QF(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apR(t.e,t.c,!1),$async$QF)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fel)
x=1
break}x=4
return A.b(B.a7j(u.a.c,"individual"),$async$QF)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a6D(A.eh(new B.d99(u),!1,null,y.H)),$async$QF)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QF,w)},
Ju(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ju=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fx9(o),$async$Ju)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7n(o.e,r,s,q),$async$Ju)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.fbm)
x=1
break}x=5
return A.b(B.a7j(u.a.c,"member"),$async$Ju)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a6D(A.eh(new B.d9b(u),!1,null,y.H)),$async$Ju)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Ju,w)},
ye(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$ye=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7i(t.e,o,t.f,t.r,t.w,s),$async$ye)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7j(u.a.c,"org_owner"),$async$ye)
case 4:x=5
return A.b(B.apW(u.a.c),$async$ye)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fxE(o),$async$ye)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7l(s,t,o,q.c),$async$ye)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.fbj)
x=1
break}x=10
return A.b(B.apW(u.a.c),$async$ye)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a6D(A.eh(new B.d9a(u),!1,null,y.H)),$async$ye)
case 11:case 1:return A.h(v,w)}})
return A.i($async$ye,w)},
B(d){var x,w,v,u=this,t=null,s=A.Q(d).ax.a===C.J,r=s?C.jv:C.q6,q=B.h3E(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.h_,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fy8,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aB,D.fRU,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c6d,C.n),t,t,t,t,C.eu,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lT(new B.d9e(),t),C.Q,w,C.dT,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.N,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ae)
if(!u.a.x)C.d.v(p,A.a([new B.ad2(C.f_,C.aCe,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcgz(),t),C.ae],v))
p.push(new B.ad2(C.pf,C.a3Y,"Team Member","Sign in with your organization access code + password",u.gchq(),t))
p.push(C.ae)
p.push(new B.ad2(C.aom,C.a5y,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcgW(),t))
return A.c6(t,r,A.bn(!0,A.ch(A.x(p,C.ak,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.alx,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ad2.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.J(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aI(!1,C.a2,!0,s,A.aO(!1,r,!0,A.eK(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nM,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.yT,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aCT.prototype={}
B.aG0.prototype={}
B.jz.prototype={
mD(d){var x=this.b,w=C.a.oR(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gaqy(){var x=this.d
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
bdU(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jz(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cLI(d){return this.bdU(null,d)},
aF2(d){return this.bdU(d,null)}}
B.Vg.prototype={
R(){return new B.aEe(new A.cx(null,y.A))},
gcZ(){return this.c}}
B.aEe.prototype={
Z(){this.a2()
this.aeI()},
aeI(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BY(u.a.c),$async$aeI)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dVo(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aeI,w)},
aeJ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fJ(new A.fD(s)),$async$aeJ)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fff)
case 1:return A.h(v,w)}})
return A.i($async$aeJ,w)},
a_e(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_e=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoZ(s.d,4),$async$a_e)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tb(r,"ngmy_my_code_"+m+".png"),$async$a_e)
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
return A.i($async$a_e,w)},
aiu(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaq("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiu,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.J,n=o?C.jv:C.q6,m=o?C.c:C.N,l=A.eI(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lY
else if(q.e==null)x=A.as(new A.D(C.eu,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aL.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.J(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.Q,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4q,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.al5,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.ds,24)],y.V)
s=q.e
s.toString
r=A.ch(A.x(A.a([x,C.n_,w,C.kV,new A.er(A.p(p,A.q3(p,p,!1,B.hOr(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.kV,A.B(A.a([A.E(A.ex(N.CJ,C.Vk,q.gc9q(),p),1),C.as,A.E(A.di(C.zf,C.aau,q.gc9r(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.W,new A.a4(1/0,p,A.ex(M.a2J,D.fNw,q.gcwf(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.NI,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.Vk.prototype={
R(){return new B.aEh(new A.au(C.at,$.ax()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.aEh.prototype={
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
a_f(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IN(u.d.a.a)
if(t==null){u.m(new B.dWx(u))
x=1
break}u.m(new B.dWy(u))
s=u.a
r=s.c
x=3
return A.b(B.a7h(s.d,new B.dWz(u),t,r),$async$a_f)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dWA(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_f,w)},
a2u(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2u=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.dWB(r))
u=4
q=J.fu(r.a.d)
x=7
return A.b(B.rH(r.a.c,q),$async$a2u)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dWC(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ai7(p,m,l,j,k),$async$a2u)
case 8:o=e
if(r.c!=null)r.m(new B.dWD(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dWE(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dWF(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2u,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.J,i=j?D.ah6:D.aeG,h=j?D.aiQ:C.c,g=j?C.aP:C.N,f=j?C.bM:C.al,e=j?D.ag6:C.aN
i=[i,e,h,g,f,j?C.fi:C.bP]
x=A.Q(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eI(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ap(80,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.J(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bUz,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.ay,C.aE,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fm,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4q,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uH(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bki()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Y,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.ND,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dWG(l),k,!1,k,k,!1,k,!0,k,C.aa,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mn,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.J(i[1],C.r,1)
m=J.LJ(l.a.d,4)
m=A.C(new A.N(m,new B.dWH(x,new A.aHg(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l7,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.Q,e,C.Q,q,C.d4,p,C.Q,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eB,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.J(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f9R)
else q.push(A.X(C.lJ,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.cY(k,A.B(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b5,new A.o(u,k,s,t,k,k,C.n),C.iD,k,k,k,k,C.eS,k,k,k)],r))}e=A.E(A.ch(A.x(e,C.ak,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bCA,k,k,C.ah),1)
u=l.f?k:l.gcwg()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(M.a2J,D.fOB,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b8(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gc9s()
t=A.bo(C.aD,k,k,0,C.c,k,C.ns,k,new A.b8(A.m(16),C.a0),k,k,k)
return A.c6(g,h,new A.an(C.a_,k,C.ab,C.t,A.a([f,v,A.bn(!0,A.lx(new B.dWI(),A.x(A.a([e,new A.D(D.bC4,A.x(A.a([s,C.Q,i,C.ae,A.bI(l.f?C.th:D.fMS,k,u,t)],r),C.ak,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cu,C.ZY,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bki.prototype={
oN(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fi(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hl(C.bA,v.length),C.aO)}}
B.Vh.prototype={
R(){return new B.aEf()}}
B.aEf.prototype={
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
aeK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aeK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dVp(r))
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
return A.b(B.a7m(p,m,n,o,C.a.i(l).length===0?null:l),$async$aeK)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.feR)
s=[1]
x=4
break}p.K(y.q).f.U(D.fdu)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dVq(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeK,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.J?C.jv:C.q6,q=A.eI(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fFj,s,s,s,1,s,!0),p=A.p(s,D.bud,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.HL,C.n),s,s,s,s,C.aa,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c0H,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c0C,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c0S,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc9t()
u=A.bo(C.aD,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.c6(q,r,A.ch(A.x(A.a([p,C.d4,o,C.ae,x,C.ae,w,C.n_,A.bI(t.r?C.th:C.aVL,s,v,u)],y.p),C.ak,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.aa,s,s,C.ah),s,!1,!1,s,s)}}
B.ach.prototype={}
B.bx0.prototype={
a5k(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cn(r.ap7()))
x=3
return A.b(B.RA(t,s),$async$a5k)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5k,w)},
gcZ(){return this.a}}
B.NL.prototype={
a6(){return"NgmyDocShareQrMode."+this.b}}
B.Zw.prototype={
R(){return new B.aAf(new A.au(C.at,$.ax()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.aAf.prototype={
Z(){this.a2()
$.aV.x1$.push(new B.d98(this))},
q(){var x=this.d
x.T$=$.ax()
x.P$=0
this.e.q()
this.a1()},
c9z(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1C(d),u=x.a.c,t=u?C.ix:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jv:v.a[0],p=A.m(24),o=A.J(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.h_,32)],n),l=A.p(w,T.ar2,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cy,16)],n),C.arQ,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uH(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bwD()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Y,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.Gu,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b3g),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d96(x),w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mn,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nO,new B.d97(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b8(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cH,12)],n)
g=y.p
return A.eT(w,C.L,new A.cT(Q.Lu,A.c4(new A.D(C.yw,A.x(A.a([l,C.aQ,k,C.Q,j,C.dT,i,C.dT,A.B(A.a([f,C.as,A.E(A.c4(A.aI(!1,C.a2,!0,w,A.aO(!1,A.m(14),!0,D.enM,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc9y(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),new A.o(w,w,w,h,n,L.Pu,C.n),C.bh),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bh),w),w,w,w,C.NL,C.d8,w,w,w)}}
B.bwD.prototype={
oN(d,e){return e.alF(e.a.toUpperCase())}}
B.Vi.prototype={
R(){return new B.aEg(A.a([],y.r),A.aX(y.N))},
gcZ(){return this.c}}
B.aEg.prototype={
Z(){var x=this
x.a2()
x.u3()
x.w=A.dh(C.jy,new B.dWv(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vr()
this.a1()},
a1l(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NK(u.a.c),$async$a1l)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AV(u.a.c),$async$a1l)
case 4:u.m(new s.dVT(u,e))
u.ic("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1l,w)},
u3(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$u3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NK(u.a.c),$async$u3)
case 3:t=e
x=4
return A.b(B.AV(u.a.c),$async$u3)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dVU(u,s))
if(t>0)u.ic("Received "+A.w(t)+" file(s) via My Code.")
u.NW(u.d)
B.BY(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$u3,w)},
NW(d){return this.bEl(d)},
bEl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7r(r,u.a.c),$async$NW)
case 8:p=f
if(u.c==null){x=1
break}new B.dVs(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.a0(r.c,"video/")||r.mD(D.mS))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vp(r,u.a.c),$async$NW)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AV(u.a.c),$async$NW)
case 12:u.m(new o.dVt(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NW,w)},
Oj(d){return this.bKD(d)},
bKD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7r(d,u.a.c),$async$Oj)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dVy(u,d,t))
x=6
return A.b(A.fJ(new A.fD(t)),$async$Oj)
case 6:u.ic("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fJ(new A.fD(r.toUpperCase())),$async$Oj)
case 7:u.ic("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
ic(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
u4(d,e){return this.cH1(d,e)},
cH1(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$u4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dWj(r,e))
u=3
x=6
return A.b(d.$0(),$async$u4)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dWk(r))
$.eX.my()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$u4,w)},
gaWu(){var x=this.a
return x.f||x.r||x.w},
Io(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Io=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaWu()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ccI(s,n,r,q,o,t),$async$Io)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ic("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fJF(o,u.a.c),$async$Io)
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
return A.b(B.Dk(s,o,r,q,n,t),$async$Io)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Io,w)},
a0o(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apW(u.a.c),$async$a0o)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ic("No organization portal found.")
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
return A.b(A.a5(t,!1).cc(A.eh(new B.dVQ(u,r,q),!1,null,y.H)),$async$a0o)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0o,w)},
a1v(d){return this.cpL(d)},
cpK(){return this.a1v(1)},
cpL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaWu()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apT(u.a.c),$async$a1v)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1v,w)},
acB(d,e,f){return this.c0y(d,e,f)},
c0y(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ic(e)
x=1
break}x=3
return A.b(u.u4(new B.dVN(u,d,null,e,f),"Uploading\u2026"),$async$acB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acB,w)},
bEu(){B.hz1(!1,new B.dVw(this))
return},
cuQ(){this.m(new B.dVY(this))},
azt(){var x=0,w=A.j(y.H),v=this
var $async$azt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bEu()
return A.h(null,w)}})
return A.i($async$azt,w)},
acx(){var x=0,w=A.j(y.H),v=this
var $async$acx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u4(new B.dVC(v),"Importing\u2026"),$async$acx)
case 2:return A.h(null,w)}})
return A.i($async$acx,w)},
SJ(d){return this.cGl(d)},
cGl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mD(D.mS)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cc(A.eh(new B.dWg(u,d),!1,null,y.H)),$async$SJ)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mD(D.Rs)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).cc(A.eh(new B.dWh(u,d),!1,null,y.H)),$async$SJ)
case 8:x=1
break
case 7:x=u.c1f(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).cc(A.eh(new B.dWi(u,d),!1,null,y.H)),$async$SJ)
case 11:x=1
break
case 10:u.ic("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SJ,w)},
c1f(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oR(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cPe,C.a.b5(x,w+1).toLowerCase())},
age(d){return this.cgD(d)},
cgD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$age=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mD(D.mS)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cc(A.eh(new B.dVO(u,d),!1,null,y.H)),$async$age)
case 5:x=1
break
case 4:u.m(new B.dVP(u,d))
case 1:return A.h(v,w)}})
return A.i($async$age,w)},
S3(d){return this.cxK(d)},
cxK(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$S3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ic("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pn(t,s.c,s.f),$async$S3)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.u4(new B.dW9(u,d),"Preparing QR\u2026"),$async$S3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$S3,w)},
aiU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aiU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dWa(),A.T(t).k("N<1,n>")).fK(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dWb(q),s),s.k("M.E"))
if(r.length===0){u.ic("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.S3(r),$async$aiU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiU,w)},
aiN(d){return this.cxh(d)},
cxh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1C(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dW3(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aiN)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SJ(d)
break
case"qr":u.S3(A.a([d],y.r))
break
case"send_my_code":u.chf(A.a([d],y.r))
break
case"save":u.ai9(d)
break
case"delete":u.Je(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aiN,w)},
Y7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Y7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dVz(),A.T(t).k("N<1,n>")).fK(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dVA(q),s),s.k("M.E"))
if(r.length===0){u.ic("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pn(t,s.c,s.f),$async$Y7)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.u4(new B.dVB(u,r),"Preparing file\u2026"),$async$Y7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Y7,w)},
ahj(d){return this.co6(d)},
co6(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hzT(d,!1),$async$ahj)
case 3:s=f
r=s==null
q=B.a7o(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ic("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahj,w)},
agk(){var x=0,w=A.j(y.H),v=this,u
var $async$agk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fRk(u,v.a.c),$async$agk)
case 2:return A.h(null,w)}})
return A.i($async$agk,w)},
bEt(){B.hz1(!1,new B.dVv(this,null))
return},
Jt(d,e){return this.chg(d,e)},
b1Q(d){return this.Jt(null,d)},
chf(d){return this.Jt(d,null)},
chg(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jt=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dVR(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xw.ca().aom(!0,C.a0M,!1),$async$Jt)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.u4(new B.dVS(l,s,r),"Preparing\u2026"),$async$Jt)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ic("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ic("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bF3(p,l,e,s.a.c),$async$Jt)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ic("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jt,w)},
IE(d){return this.c0l(d)},
c0l(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hOq(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b1Q(t),$async$IE)
case 8:x=6
break
case 7:u.ic("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ic("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.u4(new B.dVL(u,d),"Receiving video\u2026"),$async$IE)
case 11:x=1
break
case 10:x=12
return A.b(u.u4(new B.dVM(u,d),"Receiving\u2026"),$async$IE)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IE,w)},
Es(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Es=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.De()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahj(t),$async$Es)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IE(s),$async$Es)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).cc(A.eh(new B.dVW(u),!1,null,y.N)),$async$Es)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.u3(),$async$Es)
case 10:x=1
break
case 9:x=11
return A.b(u.IE(C.a.i(r)),$async$Es)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Es,w)},
ai9(d){return this.ctm(d)},
ctm(d){var x=0,w=A.j(y.H),v=this
var $async$ai9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u4(new B.dVV(v,d),"Saving\u2026"),$async$ai9)
case 2:return A.h(null,w)}})
return A.i($async$ai9,w)},
Je(d){return this.bMY(d)},
bMY(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Je=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.li(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Je)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ccL(t),$async$Je)
case 6:case 5:s=d.a
x=7
return A.b(B.ES(u.a.c,s),$async$Je)
case 7:u.r.W(0,s)
x=8
return A.b(u.u3(),$async$Je)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Je,w)},
aj_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aj_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1C(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dWf(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aj_)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agk()
break
case"import":u.acx()
break}case 1:return A.h(v,w)}})
return A.i($async$aj_,w)},
c9w(d){var x=d.c
if(C.a.a0(x,"video/")||d.mD(D.mS))return C.qC
if(C.a.a0(x,"image/")||d.mD(D.Rs))return C.uy
if(C.a.t(x,"pdf"))return E.OY
return D.aoP},
B(d){var x,w,v=this,u=null,t=B.a1C(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.HE,u,u,u,new B.dWq(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bV8,u,u,u,v.e?u:v.gcgX(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcuP()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bPk:E.apf,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a2G,u,u,u,v.e?u:v.gc9x(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.ov,u,u,u,v.e?u:v.gb2U(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bWU,u,u,u,v.e?u:new B.dWr(v),u,u,u,u,"More options",u))
q=A.eI(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lT(new B.dWs(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ap(40,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.Q(d).ax.a===C.J?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kj(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAc(C.jE,s,!0,t,w?u:v.gcxL(),u),1)
x.push(new A.D(D.bAP,A.lx(new B.dWt(),A.B(A.a([s,C.as,A.E(new B.aAc(C.uz,"Export",!1,t,w?u:v.gbQM(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cu,C.iX,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.beO(t,v.e?u:v.gb2U(),u)
else s=A.kk(!0,u,u,new B.dWu(v,t),s,u,D.bAH,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.a_,u,C.ab,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAc.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.w4,t,new A.b8(s,C.a0),t,t,t)
return A.di(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.w4,t,new A.b8(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ex(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f3,t,t,t),u.r,v)}}
B.beO.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.J(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lx(new B.d94(),new A.D(E.a_R,A.x(A.a([A.lx(new B.d95(),A.p(x,A.X(C.yU,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ay,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.hy,x,x,new A.bq(0.86,1,w),s),C.dT,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dT,A.di(C.ov,D.fSd,this.d,A.bo(C.aD,x,x,x,C.c,x,C.NJ,x,new A.b8(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.cu,C.BL,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.acB.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dy(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
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
if(!o||i.mD(D.mS))p=D.doA
else{p=C.a.a0(p,"image/")||i.mD(D.Rs)
n=y.O
p=p?A.a([C.cQ,C.aD],n):A.a([C.aL.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ay,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaqy()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mD(D.mS))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fQ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mD(D.mS)))l.push(A.h1m(C.aD,!1,j,j,j,!1,j,j,new B.d9r(k),j,j,new A.b8(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.on,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.lx(new B.d9s(),new A.D(C.ed,A.aI(!1,C.a2,!0,j,A.aO(!1,r,!0,new A.D(C.a_j,A.B(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b8(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.cu,h,new A.bR("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.Zy.prototype={
R(){return new B.aAh()},
gcZ(){return this.c}}
B.aAh.prototype={
Z(){this.a2()
this.y4()},
q(){B.hOF(this.e)
this.a1()},
y4(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$y4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rH(o.c,o.d),$async$y4)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hOI(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hOH(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d9o(s))
x=1
break}s.m(new B.d9p(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d9q(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y4,w)},
a2t(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rH(t.c,t.d),$async$a2t)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fbT)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ai7(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2t)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2t,w)},
c0e(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kx(u,C.A,v,new B.d9m(w,t),C.h8,C.dz,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fT(t,C.A,v,new B.d9n(w),C.h8,C.dz,!0,v,!1,v,v)
else return C.bJ
return A.uO(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1C(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.CK,u,u,u,v.gb6H(),u,u,u,u,"Share / save",u))
r=A.eI(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.F8
else{q=v.r
if(q!=null)t=new A.D(C.eu,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eu,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.di(C.CK,D.fAz,v.gb6H(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c0e()}return A.c6(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.Zv.prototype={
R(){return new B.aAe(A.aiY(),C.bC,C.bC)},
gcZ(){return this.c}}
B.aAe.prototype={
Z(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fA(w,A.a7(w).k("fA<1>")).iy(new B.d91(v))
x.gcUN().iy(new B.d92(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a7(x).k("fA<1>"))}if(x==null)x=C.b9s
x.iy(new B.d93(v))
v.y4()},
y4(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$y4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rH(p.c,p.d),$async$y4)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d8V(s))
x=1
break}x=8
return A.b(s.d.va(0,new A.a3F(r,s.a.d.c)),$async$y4)
case 8:if(s.c==null){x=1
break}s.m(new B.d8W(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d8X(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y4,w)},
a_g(){var x=0,w=A.j(y.H),v=this,u
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hd(0),$async$a_g)
case 5:x=3
break
case 4:x=6
return A.b(u.iB(0),$async$a_g)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_g,w)},
aUj(d){var x=d.a
return C.a.aX(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aX(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1C(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eI(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.F8
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bQm,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Pu,C.n),o,88,o,o,o,o,o,88)
t=A.kR(C.aD,o,o,m,0,new B.d8Y(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aUj(p.w)+" / "+p.aUj(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.f8i,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uB:C.hn,o,o,o,o,o)
x=A.x(A.a([u,C.kV,t,x,C.d4,A.di(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc9A(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.as(new A.D(C.ql,x,o),o,o,o),o,!1,!1,o,o)}}
B.Q0.prototype={
R(){return new B.aAk()},
gcZ(){return this.c}}
B.aAk.prototype={
Z(){this.a2()
this.Q_()},
Q_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Q_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h3F(o.c,o.d,new B.d9F(s)),$async$Q_)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d9G(s))
x=1
break}s.e=r
q=O.iaV(r)
if(q==null){s.m(new B.d9H(s))
x=1
break}s.d=q
q.aT(0,s.gb1D())
x=8
return A.b(q.ix(0).d9(0,C.rB),$async$Q_)
case 8:if(s.c==null){x=1
break}s.m(new B.d9I(s))
x=9
return A.b(q.qc(0),$async$Q_)
case 9:q.tJ(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d9J(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Q_,w)},
cfd(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d9K(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D8(0,x.gb1D())
w=x.d
if(w!=null)w.q()
B.ikR(x.e)
x.a1()},
aeN(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0a(u.c,u.d),$async$aeN)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aeN,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1C(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eI(A.a([A.aH(t,t,t,t,C.ou,t,t,t,u.gc9u(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ip(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.F8
else{q=u.r
if(q!=null)s=new A.D(C.eu,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.air(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fI(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.Aq(s,t),A.aA(t,A.Dw(A.p(t,A.X(q?I.uB:C.hn,C.c,t,t,t,48),C.f,t,t,new A.o(C.aS,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b5,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d9M(u),t,t,t,t,t,t,!1,C.a3)],o),t),t)}else s=C.bJ}}return A.c6(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.ZA.prototype={
R(){return new B.aAi(new A.cx(null,y.A))}}
B.aAi.prototype={
gcGJ(){var x,w,v=this.a
if(v.e!==D.SP)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcGj(){var x,w,v=this.a
if(v.e!==D.zU)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a2()
x=v.gcGJ()
if(x!=null){v.R4(x)
v.e=A.dh(R.Gk,new B.d9B(v,x))}w=v.gcGj()
if(w!=null){v.R3(w)
v.f=A.dh(C.fB,new B.d9C(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a1()},
R3(d){return this.cmi(d)},
cmi(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$R3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aq0(d),$async$R3)
case 3:t=f
x=4
return A.b(B.cd3(d),$async$R3)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d9t(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$R3,w)},
R4(d){return this.cmj(d)},
cmj(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$R4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fRX(d),$async$R4)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bCX(t),$async$R4)
case 4:if(u.c==null){x=1
break}u.m(new B.d9u(u))
u.c.K(y.q).f.U(D.aSA)
case 1:return A.h(v,w)}})
return A.i($async$R4,w)},
gc5n(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc9v(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2f(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.De()){t=u.c
if(t!=null)t.K(y.q).f.U(D.ff0)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).cc(A.eh(new B.d9v(),!1,null,y.N)),$async$a2f)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bCX(s),$async$a2f)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aSA)
case 1:return A.h(v,w)}})
return A.i($async$a2f,w)},
aar(d){return this.bKE(d)},
bKE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aar=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fJ(new A.fD(C.d.aH(t,", "))),$async$aar)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aar,w)},
aeL(d){return this.bKn(d)},
bKn(d){var x=0,w=A.j(y.H),v=this
var $async$aeL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fJ(new A.fD(v.a.c)),$async$aeL)
case 2:if(d.e!=null)d.K(y.q).f.U(D.fcm)
return A.h(null,w)}})
return A.i($async$aeL,w)},
a29(d){return this.cto(d)},
cto(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a29=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoZ(s.d,4),$async$a29)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tb(r,"ngmy_doc_share_qr.png"),$async$a29)
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
return A.i($async$a29,w)},
gaXH(){var x,w=this.a
if(w.e!==D.IO)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
aao(d){return this.bKx(d)},
bKx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aao=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaXH()
if(t==null){x=1
break}x=3
return A.b(A.fJ(new A.fD(C.a.a0(t,"http")?t:"N2|"+t)),$async$aao)
case 3:if(d.e!=null)d.K(y.q).f.U(D.fe0)
case 1:return A.h(v,w)}})
return A.i($async$aao,w)},
aeM(){var x=0,w=A.j(y.H),v=this,u
var $async$aeM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vr(),$async$aeM)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aeM,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1C(d),i=m.a,h=i.c
if(h.length>48)h=C.a.au(h,0,44)+"\u2026"
i=i.e
i=i!==D.IO&&i!==D.SP&&i!==D.zU
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eI(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.IO||t===D.SP||t===D.zU?l:A.aH(l,l,l,l,C.lg,l,l,l,m.gb_J(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.J(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.Q,A.q3(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc5n(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.IO){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.Q,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mJ,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc9v(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c_J,D.fK4,new B.d9w(m,d),l)],p))}if(m.a.e===D.IO&&m.gaXH()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.bXd,D.fGH,new B.d9x(m,d),l)],p))
if(m.a.e===D.zU){x=(m.w?C.dE:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.Q,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fb:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mJ,l,l,l)],p))}if(m.a.e===D.SP){x=(m.r?C.dE:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.Q,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fb:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mJ,l,l,l),C.ae,A.di(D.bSP,D.fNd,m.gctN(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oC(i,A.c6(v,w,new A.D(C.aa,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.aa,l,l,1/0),1),C.ae,A.B(A.a([A.E(A.ex(N.CJ,C.Vk,new B.d9y(m,d),l),1),C.as,A.E(A.di(C.zf,C.aau,new B.d9z(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.Q,new A.a4(1/0,l,A.bI(C.At,l,m.gb_J(),A.bo(C.aL,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.d9A(),y.C)}}
B.acz.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.ch(A.x(A.a([w,C.aQ,A.p(x,A.q3(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bD,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ep(A.a([A.bI(C.x9,x,new B.d8U(d),x)],u),x,x,C.n9,v,x,x,x,x,D.fzy,x)}}
B.Zu.prototype={
R(){return new B.aAd(A.zA(C.yd,C.nU,C.uO))}}
B.aAd.prototype={
q(){this.d.q()
this.a1()},
ay5(d){var x,w,v,u,t
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
return A.c6(A.eI(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fHc,x,x,x,1,x,!0),C.w,A.zz(this.d,C.bX,this.gay4()),x,!1,!1,x,x)}}
B.ZB.prototype={
R(){return new B.aAj(A.zA(C.yd,C.nU,C.uO))},
gcZ(){return this.c}}
B.aAj.prototype={
c1h(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agH(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Mb("text/plain"),$async$agH)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.feV)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agH,w)},
abd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hzT(p,!0),$async$abd)
case 3:t=e
p=t==null
s=B.a7o(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.fbt)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abd,w)},
q(){this.d.q()
this.a1()},
ay5(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c1h(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.aq8,v,v,v,w.gbQh(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a2N,v,v,v,w.gcjG(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eI(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.uu:P.OJ,v,v,v,v,v),v,v,v,new B.d9E(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fO6,v,v,v,1,v,!0)
u=A.zz(w.d,C.bX,w.gay4())
x=A.m(20)
return A.c6(t,C.w,new A.an(C.a_,v,C.ab,C.t,A.a([u,A.as(A.p(v,v,C.f,v,v,new A.o(v,v,A.J(C.aL,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eu3],s),v),v,!1,!1,v,v)}}
B.beP.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.p6
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.p6:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a2,!0,r,A.aO(!1,w,!0,new A.D(C.a_X,A.B(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.a9O.prototype={
a6(){return"RTCDataChannelState."+this.b}}
B.OP.prototype={
a6(){return"RTCSignalingState."+this.b}}
B.Xx.prototype={
a6(){return"RTCIceGatheringState."+this.b}}
B.OO.prototype={
a6(){return"RTCPeerConnectionState."+this.b}}
B.Fm.prototype={
a6(){return"RTCIceConnectionState."+this.b}}
B.cpl.prototype={}
B.Fl.prototype={}
B.a9N.prototype={}
B.auw.prototype={}
B.Xy.prototype={}
var z=a.updateTypes(["aB<~>()","R(jz)","n(jz)","Vi(Y)","~()","Zx(Y)","G(G,jz)","Q0(Y)","~(md)","cv(Fl)","aB<jz?>(@)","Vg(Y)","Vk(Y)","D(jz)","jz(@)","a8<n,@>(jz)","Zw(Y)","Vh(Y)","Zy(Y)","Zv(Y)","ZA(Y)","acz(Y)","ai<jz>()","ZB(Y)","acB(Y,G)","Zu(Y)","a8<n,aD>(jz)","cv(Xx)","cv(a9N)","aB<cv>(Fl)"])
B.cph.prototype={
$1(d){var x=this.a
x.x=D.aPE
x.y.M(0,D.aPE)},
$S:73}
B.cpi.prototype={
$1(d){var x=this.a
x.x=D.aPD
x.y.M(0,D.aPD)},
$S:73}
B.cpj.prototype={
$1(d){var x=this.a
x.ai2(A.aQ2(d.data)).bJ(new B.cpg(x),y.b)},
$S:73}
B.cpg.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cpk.prototype={
$1(d){},
$S:73}
B.cpn.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hTq(d.channel))},
$S:15}
B.cpo.prototype={
$1(d){},
$S:15}
B.cpp.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ibX(w.iceConnectionState)
x.cx=w
if($.hcM())switch(w.a){case 0:x.cy=D.aPJ
break
case 1:x.cy=D.aPK
break
case 3:x.cy=D.aPL
break
case 5:x.cy=D.aPH
break
case 6:x.cy=D.aPI
break
case 7:x.cy=D.a8e
break
default:break}},
$S:151}
B.cpq.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ibY(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:151}
B.cpr.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iml(w.signalingState)},
$S:151}
B.cps.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iky(w.connectionState)},
$S:151}
B.cpt.prototype={
$1(d){},
$S:151}
B.cpu.prototype={
$1(d){},
$S:15}
B.fsD.prototype={
$1(d){var x=y.F.a(new A.r_([],[]).oz(d.target.result,!1)),w=C.ye.t(x.objectStoreNames,"blobs")
if(!w)C.ya.L5(x,"blobs")},
$S:190}
B.fR8.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wC.fm(this.b)
$.eX.my()
this.c.$1(d)},
$S:424}
B.fRa.prototype={
$1(d){return this.a.$1(B.i1q(this.b,this.c))},
$S:29}
B.fR9.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:29}
B.fR7.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fRn.prototype={
$1(d){var x=this
return B.hp1(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fRo.prototype={
$1(d){var x=this
return B.hp1(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fvd.prototype={
$1(d){var x=this
return B.ccF(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d9c.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d99.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccF(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d9b.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccF(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d9a.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccF(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d9e.prototype={
$4(d,e,f,g){var x=null
return A.jV(A.B(A.a([A.aH(x,x,x,x,D.bRr,x,x,x,new B.d9d(d),x,x,x,x,x,x),A.E(A.F7(D.Rb,!0,x,C.a1N,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.Rb,x,g,C.alS,0,e,f)},
$C:"$4",
$R:4,
$S:400}
B.d9d.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fxc.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eN,y.o).w,t=this.a,s=t?C.ix:C.c,r=A.m(28),q=A.p(v,D.buy,C.f,v,v,D.b4U,v,v,v,v,D.alI,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bVJ,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Gz,A.x(A.a([o,C.ae,A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aqo,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.bx,A.B(A.a([A.E(A.dT(C.di,new B.fxa(d),v),1),C.as,A.E(A.bI(D.fFI,v,new B.fxb(p,x,d),A.bo(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Gn,v,v,v,v),v)},
$S:61}
B.fxa.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fxb.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.fcD)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aCT(v,x))},
$S:0}
B.fxG.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eN,y.o).w,u=x.a,t=u?C.ix:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bun,C.f,w,w,D.b6n,w,w,w,w,D.alI,w,w,1/0),new A.D(C.Gz,A.x(A.a([A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.h8O(u,"Organization name",C.H_,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.h8O(u,"Access code",C.nx,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.h8O(u,"Member password",H.Hz,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.bx,A.bI(D.fOd,w,new B.fxF(r,q,p,d),A.bo(C.aD,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Gn,w,w,w,w),w)},
$S:61}
B.fxF.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.fcI)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aG0(u,x,w))},
$S:0}
B.ccw.prototype={
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
p=C.a.a0(j,"http")?A.cI(j,0,null):s.b.aU(j)
u=4
x=7
return A.b(A.vA(p,null).d9(0,C.ZX),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cn(o.w))
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
B.ccC.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ccD.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ccE.prototype={
$1(d){return d.b},
$S:z+2}
B.ccy.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ccz.prototype={
$1(d){return d.b},
$S:z+2}
B.ccx.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.ccA.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.ccB.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fRl.prototype={
$1(d){return new B.Vg(this.a,null)},
$S:z+11}
B.fRm.prototype={
$1(d){return new B.Vk(this.a,this.b,this.c,null)},
$S:z+12}
B.dVo.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dWx.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dWy.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dWz.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dWw(x,d))},
$S:2}
B.dWw.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dWA.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWB.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dWC.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dWD.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dWE.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dWF.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWI.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.dWG.prototype={
$1(d){var x=this.a
return x.f?null:x.a_f()},
$S:2}
B.dWH.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mD(D.Rs))s=C.uy
else s=C.a.a0(s,"video/")||d.mD(D.mS)?C.qC:D.aoP
x=this.b.a
w=y.p
return new A.D(C.kL,A.B(A.a([A.p(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaqy(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dVp.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dVq.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ccG.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:96}
B.ccH.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:96}
B.fSd.prototype={
$2(d,e){return e===this.a},
$S:331}
B.fpK.prototype={
$1(d){return J.k(d)},
$S:17}
B.fvp.prototype={
$1(d){var x=this.b
B.i_q(C.GN.ga6Y(this.a)).bJ(x.gaEE(x),y.H)},
$S:130}
B.fvq.prototype={
$1(d){return this.a.d7(0,null)},
$S:130}
B.fvr.prototype={
$0(){return null},
$S:12}
B.ccV.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fvs.prototype={
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
return new B.jz(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fzz.prototype={
$1(d){return d.ah()},
$S:z+15}
B.ftC.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ftD.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cd_.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mD(D.mS)},
$S:z+1}
B.fWk.prototype={
$1(d){return new B.Zw(this.a,null)},
$S:z+16}
B.d98.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fU()},
$S:8}
B.d96.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d97.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dWv.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1l()},
$S:11}
B.dVT.prototype={
$0(){var x=J.bG7(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dVU.prototype={
$0(){var x=J.bG7(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dVs.prototype={
$0(){var x=this.a,w=C.d.bh(x.d,new B.dVr(this.b))
if(w>=0){x=x.d
x[w]=x[w].aF2(this.c)}},
$S:0}
B.dVr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVt.prototype={
$0(){var x=J.bG7(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dVy.prototype={
$0(){var x=this.a,w=C.d.bh(x.d,new B.dVx(this.b))
if(w>=0){x=x.d
x[w]=x[w].aF2(this.c)}},
$S:0}
B.dVx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dWj.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dWk.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dVQ.prototype={
$1(d){return new B.Vh(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dVN.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Io(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vl(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.u3(),$async$$0)
case 5:s=J.a6(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1v(s.gL(t)),$async$$0)
case 8:case 7:r.ic(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVw.prototype={
$1(d){this.a.acB(d,"No files selected.","Added")},
$S:424}
B.dVY.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.aa(0)
else w.v(0,new A.N(x,new B.dVX(),A.T(x).k("N<1,n>")))},
$S:0}
B.dVX.prototype={
$1(d){return d.a},
$S:z+2}
B.dVC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xw.ca().cWL(C.a0M,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fu(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jF(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ic("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ic("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aq_(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ic("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.u3(),$async$$0)
case 9:o.ic("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dWg.prototype={
$1(d){return new B.Q0(this.a.a.c,this.b,null)},
$S:z+7}
B.dWh.prototype={
$1(d){return new B.Zy(this.a.a.c,this.b,null)},
$S:z+18}
B.dWi.prototype={
$1(d){return new B.Zv(this.a.a.c,this.b,null)},
$S:z+19}
B.dVO.prototype={
$1(d){return new B.Q0(this.a.a.c,this.b,null)},
$S:z+7}
B.dVP.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dW9.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Io(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7q(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ic("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cpK(),$async$$0)
case 5:x=6
return A.b(p.u3(),$async$$0)
case 6:r=A.T(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dW5(p),r),new B.dW6(),r.k("N<ak.E,n>")).bZ(0,new B.dW7())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).cc(A.eh(new B.dW8(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pm(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vr(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dW5.prototype={
$1(d){var x=this.a,w=C.d.bh(x.d,new B.dW4(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dW4.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dW6.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dW7.prototype={
$1(d){return d.length!==0},
$S:3}
B.dW8.prototype={
$1(d){var x=this.a
return new B.ZA(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dWa.prototype={
$1(d){return d.a},
$S:z+2}
B.dWb.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dW3.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kK,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaqy(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mD(D.mS)?C.rM:C.pj
p=!x||p.mD(D.mS)?"Play video":"View"
return A.c4(A.bn(!0,new A.D(C.BW,A.x(A.a([q,o,t,C.aB,B.Zz(!1,u,!1,w,p,new B.dVZ(d),v),B.Zz(!1,u,!1,C.jE,"Share via QR",new B.dW_(d),"Letters/numbers QR code"),B.Zz(!1,u,!1,D.a1T,"Send to their Code",new B.dW0(d),"Enter someone else's personal code"),B.Zz(!1,u,!1,C.hR,"Download / save",new B.dW1(d),v),C.am,B.Zz(!1,u,!0,C.eb,"Delete",new B.dW2(d),v)],y.p),C.ak,v,C.e,C.P,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kZ,v,v,C.n),C.bh)},
$S:704}
B.dVZ.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dW_.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dW0.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dW1.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dW2.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dVz.prototype={
$1(d){return d.a},
$S:z+2}
B.dVA.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dVB.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7s(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GR(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pm(s.c,s.f),$async$$0)
case 4:u.ic(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVv.prototype={
$1(d){var x=this.a
x.u4(new B.dVu(x,d,this.b),"Preparing\u2026")},
$S:424}
B.dVu.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ic("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vl(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ic("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bF3(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ic("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVR.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dVS.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gS(s)
x=4
return A.b(B.h3I(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVL.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GP(new B.dVH(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ic("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ck(null,null,!1,null,new B.dVI(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dVJ(s))
case 5:x=8
return A.b(r.b.iC(0,C.Gh,new B.dVK()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gan(t)){s.ic("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.u3(),$async$$0)
case 9:s.ic("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVH.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dVE(x,d,e))},
$S:203}
B.dVE.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dVI.prototype={
$1(d){return new B.acz(this.a.a,null)},
$S:z+21}
B.dVJ.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dVK.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dVM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IN(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7g(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b1Q(B.IN(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aq_(new B.dVF(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h3H(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ic(q)
x=1
break}x=10
return A.b(s.u3(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.dVG()).gL(0)
s.ic(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVF.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dVD(x,d,e))},
$S:203}
B.dVD.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dVG.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mD(D.mS)},
$S:z+1}
B.dVW.prototype={
$1(d){return new B.ZB(this.a.a.c,null)},
$S:z+23}
B.dVV.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0a(u.a.c,v.b),$async$$0)
case 2:t.ic(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dWf.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.c4(A.bn(!0,new A.D(C.BW,A.x(A.a([A.as(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kK,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.Zz(!0,w,!1,C.nx,"My Code",new B.dWc(d),"Your personal code & QR \u2014 others send docs to you"),B.Zz(!1,w,!1,D.a1T,"Send to their Code",new B.dWd(this.a,d),"Enter someone else's 5-digit code + letter"),B.Zz(!1,w,!1,S.z7,"Import backup",new B.dWe(d),".ngmydoc file from another device")],y.p),C.ak,x,C.e,C.P,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bH(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kZ,x,x,C.n),C.bh)},
$S:704}
B.dWc.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dWd.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bEt()},
$S:0}
B.dWe.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dWs.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IX(D.Rb,x,C.a1N,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cW(C.d.gI(D.Rb).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:675}
B.dWq.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dWr.prototype={
$0(){this.a.aj_()
return null},
$S:0}
B.dWt.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.t(0,(1-e)*10)),e)},
$S:100}
B.dWu.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acB(e,w,v,this.b,x.e,x.c9w(w),new B.dWm(x,w),new B.dWn(x,v,w),new B.dWo(x,w),new B.dWp(x,w),null)},
$S:z+24}
B.dWm.prototype={
$0(){this.a.age(this.b)
return null},
$S:0}
B.dWn.prototype={
$0(){var x=this.a
return x.m(new B.dWl(x,this.b,this.c))},
$S:0}
B.dWl.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dWo.prototype={
$0(){this.a.Oj(this.b)
return null},
$S:0}
B.dWp.prototype={
$0(){this.a.aiN(this.b)
return null},
$S:0}
B.d94.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.t(0,(1-e)*18)),e)},
$S:100}
B.d95.prototype={
$3(d,e,f){return A.ee(C.A,f,e,null,null)},
$S:112}
B.d9s.prototype={
$3(d,e,f){return A.db(A.dR(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.d9r.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d9o.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d9p.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d9q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d9m.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fT(w,C.A,x,new B.d9k(this.a),C.h8,C.dz,!0,x,!1,x,x)
$.aV.x1$.push(new B.d9l(this.a))
return C.bJ},
$S:138}
B.d9k.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d9i(this.a))
return C.bJ},
$S:180}
B.d9i.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d9f(x))},
$S:8}
B.d9f.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d9l.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d9h(x))},
$S:8}
B.d9h.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d9n.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d9j(this.a))
return C.bJ},
$S:180}
B.d9j.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d9g(x))},
$S:8}
B.d9g.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d91.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d90(x,d))},
$S:1754}
B.d90.prototype={
$0(){return this.a.f=this.b===C.vb},
$S:0}
B.d92.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d9_(x,d))},
$S:8}
B.d9_.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d93.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8Z(x,d))},
$S:8}
B.d8Z.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d8V.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d8W.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d8X.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d8Y.prototype={
$1(d){return this.a.d.Nk(0,A.dy(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d9F.prototype={
$0(){var x=this.a.a
return B.rH(x.c,x.d)},
$S:1755}
B.d9G.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d9H.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d9I.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d9J.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d9K.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d9M.prototype={
$0(){var x=this.a
x.m(new B.d9L(x))},
$S:0}
B.d9L.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hd(0)
else x.qc(0)},
$S:0}
B.d9B.prototype={
$1(d){return this.a.R4(this.b)},
$S:11}
B.d9C.prototype={
$1(d){return this.a.R3(this.b)},
$S:11}
B.d9t.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d9u.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d9v.prototype={
$1(d){return D.hlG},
$S:z+25}
B.d9A.prototype={
$2(d,e){if(d)B.Vr()},
$S:122}
B.d9w.prototype={
$0(){return this.a.aar(this.b)},
$S:0}
B.d9x.prototype={
$0(){return this.a.aao(this.b)},
$S:0}
B.d9y.prototype={
$0(){return this.a.aeL(this.b)},
$S:0}
B.d9z.prototype={
$0(){return this.a.a29(this.b)},
$S:0}
B.d8U.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d9E.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qf(),$async$$0)
case 2:u.m(new B.d9D(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d9D.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cd1.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mD(D.mS)},
$S:z+1}
B.cd2.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cd0.prototype={
$2(d,e){return this.blj(d,e)},
blj(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vs(u.c,A.H(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1756}
B.fzb.prototype={
$1(d){if(d===D.a8d&&(this.a.a.a&30)===0)this.a.fX(0)},
$S:z+27}
B.fzc.prototype={
$0(){},
$S:12}
B.fzJ.prototype={
bmT(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fn0(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.aa(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hkc(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bmT(d,e)},
$S:483}
B.fzI.prototype={
$1(d){var x=this
d.b=new B.fzH(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fzH.prototype={
$1(d){return this.bmS(d)},
bmS(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0b(n,m),$async$$1)
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
return A.b(B.fn0(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.aa(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d7(0,s.e)
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
return A.b(B.a7p(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d7(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAg.prototype,"gcgz","QF",0)
x(v,"gchq","Ju",0)
x(v,"gcgW","ye",0)
x(v=B.aEe.prototype,"gc9q","aeJ",0)
x(v,"gc9r","a_e",0)
x(v,"gcwf","aiu",0)
x(v=B.aEh.prototype,"gc9s","a_f",0)
x(v,"gcwg","a2u",0)
x(B.aEf.prototype,"gc9t","aeK",0)
x(B.aAf.prototype,"gc9y","c9z",4)
x(v=B.aEg.prototype,"gcgX","a0o",0)
x(v,"gcuP","cuQ",4)
x(v,"gb2U","azt",0)
x(v,"gcxL","aiU",0)
x(v,"gbQM","Y7",0)
x(v,"gc9x","Es",0)
x(B.aAh.prototype,"gb6H","a2t",0)
x(B.aAe.prototype,"gc9A","a_g",0)
x(v=B.aAk.prototype,"gb1D","cfd",4)
x(v,"gc9u","aeN",0)
x(v=B.aAi.prototype,"gctN","a2f",0)
x(v,"gb_J","aeM",0)
w(B.aAd.prototype,"gay4","ay5",8)
x(v=B.aAj.prototype,"gcjG","agH",0)
x(v,"gbQh","abd",0)
w(v,"gay4","ay5",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cpl,B.a9N,B.auw,B.aCT,B.aG0,B.jz,B.ach,B.bx0,B.Fl,B.Xy])
w(B.cpm,B.cpl)
w(B.b5j,B.a9N)
x(A.hy,[B.cph,B.cpi,B.cpj,B.cpg,B.cpk,B.cpn,B.cpo,B.cpp,B.cpq,B.cpr,B.cps,B.cpt,B.cpu,B.fsD,B.fR8,B.fRa,B.fR9,B.fRn,B.fRo,B.fvd,B.d99,B.d9b,B.d9a,B.d9e,B.fxc,B.fxG,B.ccw,B.ccD,B.ccE,B.ccz,B.ccx,B.ccA,B.ccB,B.fRl,B.fRm,B.dWz,B.dWI,B.dWG,B.dWH,B.fpK,B.fvp,B.fvq,B.ccV,B.fvs,B.fzz,B.ftC,B.ftD,B.cd_,B.fWk,B.d98,B.d96,B.dWv,B.dVr,B.dVx,B.dVQ,B.dVw,B.dVX,B.dWg,B.dWh,B.dWi,B.dVO,B.dW5,B.dW4,B.dW6,B.dW7,B.dW8,B.dWa,B.dWb,B.dW3,B.dVz,B.dVA,B.dVv,B.dVR,B.dVI,B.dVG,B.dVW,B.dWf,B.dWs,B.dWt,B.d94,B.d95,B.d9s,B.d9r,B.d9m,B.d9k,B.d9i,B.d9l,B.d9n,B.d9j,B.d91,B.d92,B.d93,B.d8Y,B.d9B,B.d9C,B.d9v,B.cd1,B.cd2,B.fzb,B.fzI,B.fzH])
w(B.b5k,B.auw)
x(A.iG,[B.fR7,B.d9c,B.d9d,B.fxa,B.fxb,B.fxF,B.dVo,B.dWx,B.dWy,B.dWw,B.dWA,B.dWB,B.dWC,B.dWD,B.dWE,B.dWF,B.dVp,B.dVq,B.fvr,B.d97,B.dVT,B.dVU,B.dVs,B.dVt,B.dVy,B.dWj,B.dWk,B.dVN,B.dVY,B.dVC,B.dVP,B.dW9,B.dVZ,B.dW_,B.dW0,B.dW1,B.dW2,B.dVB,B.dVu,B.dVS,B.dVL,B.dVE,B.dVJ,B.dVK,B.dVM,B.dVD,B.dVV,B.dWc,B.dWd,B.dWe,B.dWq,B.dWr,B.dWm,B.dWn,B.dWl,B.dWo,B.dWp,B.d9o,B.d9p,B.d9q,B.d9f,B.d9h,B.d9g,B.d90,B.d9_,B.d8Z,B.d8V,B.d8W,B.d8X,B.d9F,B.d9G,B.d9H,B.d9I,B.d9J,B.d9K,B.d9M,B.d9L,B.d9t,B.d9u,B.d9w,B.d9x,B.d9y,B.d9z,B.d8U,B.d9E,B.d9D,B.fzc])
x(A.lA,[B.acA,B.NL,B.a9O,B.OP,B.Xx,B.OO,B.Fm])
x(A.af,[B.Zx,B.Vg,B.Vk,B.Vh,B.Zw,B.Vi,B.Zy,B.Zv,B.Q0,B.ZA,B.Zu,B.ZB])
x(A.ah,[B.aAg,B.aEe,B.aEh,B.aEf,B.aAf,B.aEg,B.aAh,B.aAe,B.aAk,B.aAi,B.aAd,B.aAj])
x(A.aw,[B.ad2,B.aAc,B.beO,B.acB,B.acz,B.beP])
x(A.jv,[B.ccC,B.ccy,B.ccG,B.ccH,B.fSd,B.dVH,B.dVF,B.dWu,B.d9A,B.cd0,B.fzJ])
x(A.j_,[B.bki,B.bwD])})()
A.j0(b.typeUniverse,JSON.parse('{"b5j":{"a9N":[]},"b5k":{"auw":[]},"Zx":{"af":[],"v":[]},"aAg":{"ah":["Zx"]},"ad2":{"aw":[],"v":[]},"Vg":{"af":[],"v":[]},"Vk":{"af":[],"v":[]},"aEe":{"ah":["Vg"]},"aEh":{"ah":["Vk"]},"bki":{"j_":[]},"Vh":{"af":[],"v":[]},"aEf":{"ah":["Vh"]},"Zw":{"af":[],"v":[]},"Vi":{"af":[],"v":[]},"acB":{"aw":[],"v":[]},"Zy":{"af":[],"v":[]},"Zv":{"af":[],"v":[]},"Q0":{"af":[],"v":[]},"ZA":{"af":[],"v":[]},"acz":{"aw":[],"v":[]},"Zu":{"af":[],"v":[]},"ZB":{"af":[],"v":[]},"aAf":{"ah":["Zw"]},"bwD":{"j_":[]},"aEg":{"ah":["Vi"]},"aAc":{"aw":[],"v":[]},"beO":{"aw":[],"v":[]},"aAh":{"ah":["Zy"]},"aAe":{"ah":["Zv"]},"aAk":{"ah":["Q0"]},"aAi":{"ah":["ZA"]},"aAd":{"ah":["Zu"]},"aAj":{"ah":["ZB"]},"beP":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uz"),k:x("M9()"),m:x("bu<n,n>"),F:x("ri"),g:x("aB<jz?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a8<n,R>>"),t:x("O<a8<n,@>>"),r:x("O<jz>"),w:x("O<+file,name(lO,n)>"),u:x("O<cW>"),s:x("O<n>"),E:x("O<j_>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<G>"),G:x("bi"),A:x("cx<ah<af>>"),n:x("ai<jz>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bA<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iB"),e:x("iqh"),af:x("Ey"),U:x("jz"),b:x("cv"),C:x("aD"),aK:x("wo"),ab:x("Fl"),br:x("auw"),v:x("Xy"),N:x("n"),X:x("bq<K>"),Q:x("lZ"),D:x("dK"),aw:x("bR<n>"),cd:x("Z<a8<n,@>>"),c7:x("v"),ch:x("c0<ai<jz>>"),aW:x("c0<dK?>"),aY:x("c0<~>"),cx:x("acA"),b1:x("bj<ai<jz>>"),cf:x("bj<dK?>"),d4:x("bj<~>"),c4:x("aCT"),bG:x("aG0"),q:x("mt"),B:x("pF<Fl>"),c6:x("pF<a9O>"),y:x("R"),i:x("K"),z:x("@"),S:x("G"),aQ:x("bi?"),_:x("ai<jz>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jz?"),R:x("aD?"),c:x("Xy?"),d:x("+answerQr,transfer(n,aB<ai<jz>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,NL,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("ach?"),bk:x("aCT?"),ag:x("aG0?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b3g=new A.ay(C.aD,2,C.r,-1)
D.c4k=new A.a9(C.a5,C.a8,C.x,C.a3Y,null,null)
D.b4U=new A.o(null,null,null,C.mt,null,D.c4k,C.n)
D.b6n=new A.o(null,null,null,C.mt,null,E.HL,C.n)
D.aeG=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ag6=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ah6=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.aiQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fAs=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fP8=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Kj,null,null,null,null,null,null,null,null,null)
D.dfG=x([D.fAs,C.am,D.fP8],y.p)
D.bud=new A.fk(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dfG,null)
D.fTB=new A.y("Create your organization",null,C.fx,null,null,null,null,null,null,null,null,null)
D.fET=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Kj,null,null,null,null,null,null,null,null,null)
D.dwp=x([D.fTB,C.am,D.fET],y.p)
D.bun=new A.fk(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dwp,null)
D.fPL=new A.y("Team Member sign-in",null,C.fx,null,null,null,null,null,null,null,null,null)
D.fIN=new A.y("Enter the access code and password from your organization.",null,G.Kj,null,null,null,null,null,null,null,null,null)
D.duc=x([D.fPL,C.am,D.fIN],y.p)
D.buy=new A.fk(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.duc,null)
D.bAH=new A.P(16,10,16,28)
D.bAP=new A.P(16,14,16,4)
D.bC4=new A.P(20,0,20,16)
D.bCA=new A.P(20,8,20,16)
D.alI=new A.P(24,22,24,20)
D.a1T=new A.a0(63394,"MaterialIcons",!1)
D.aoP=new A.a0(63515,"MaterialIcons",!1)
D.bPk=new A.a0(983813,"MaterialIcons",!1)
D.bMD=new A.a0(62867,"MaterialIcons",!1)
D.bQm=new A.ae(D.bMD,44,C.c,null,null,null)
D.bRr=new A.ae(C.km,null,C.ac,null,null,null)
D.bSP=new A.ae(C.jj,18,null,null,null,null)
D.bUz=new A.ae(D.a1T,26,C.c,null,null,null)
D.bV8=new A.ae(C.Cx,null,null,null,null,null)
D.bVJ=new A.ae(C.CG,null,null,null,null,null)
D.bWU=new A.ae(W.a23,null,null,null,null,null)
D.bXd=new A.ae(C.hD,16,null,null,null,null)
D.c_J=new A.ae(C.rL,16,null,null,null,null)
D.bQD=new A.ae(C.nx,null,null,null,null,null)
D.c0C=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bQD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bWg=new A.ae(C.H_,null,null,null,null,null)
D.c0H=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bQZ=new A.ae(H.Hz,null,null,null,null,null)
D.c0S=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bQZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cPM=x([C.fi,C.b1,C.aD],y.O)
D.c6d=new A.a9(C.ay,C.aE,C.x,D.cPM,null,null)
D.cPe=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Rb=x([C.fi,C.aD],y.O)
D.Rs=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mS=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.doA=x([C.o9,C.aD],y.O)
D.egp={iceServers:0}
D.aKb={urls:0}
D.dA7=new A.bu(D.aKb,["stun:stun.l.google.com:19302"],y.m)
D.dA6=new A.bu(D.aKb,["stun:stun1.l.google.com:19302"],y.m)
D.d5n=x([D.dA7,D.dA6],A.at("O<a8<n,n>>"))
D.dzo=new A.bu(D.egp,[D.d5n],A.at("bu<n,@>"))
D.IO=new B.NL(0,"lanDirect")
D.SO=new B.NL(1,"cloudStash")
D.dLh=new B.NL(2,"inlineInstant")
D.SP=new B.NL(3,"webrtcLink")
D.zU=new B.NL(4,"videoCloud")
D.fP7=new A.y("Receive file",null,C.n3,null,null,null,null,null,null,null,null,null)
D.cF4=x([E.aqx,C.ad,D.fP7],y.p)
D.f3H=new A.ca(C.aM,C.b9,C.i,C.m,null,C.p,null,0,D.cF4,null)
D.enM=new A.D(C.cm,D.f3H,null)
D.fr1=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Ic,null,null,null)
D.fB0=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fr1,null,C.K,null,null,null,null,null,null,null)
D.emX=new A.D(C.C0,D.fB0,null)
D.baN=new A.cf(C.A,null,null,D.emX,null)
D.eu3=new A.cN(0,null,0,28,null,null,D.baN,null)
D.eun=new B.a9O(0,"RTCDataChannelConnecting")
D.aPD=new B.a9O(1,"RTCDataChannelOpen")
D.aPE=new B.a9O(3,"RTCDataChannelClosed")
D.euo=new B.Fm(0,"RTCIceConnectionStateNew")
D.eup=new B.Fm(1,"RTCIceConnectionStateChecking")
D.euq=new B.Fm(2,"RTCIceConnectionStateCompleted")
D.eur=new B.Fm(3,"RTCIceConnectionStateConnected")
D.eus=new B.Fm(4,"RTCIceConnectionStateCount")
D.eut=new B.Fm(5,"RTCIceConnectionStateFailed")
D.euu=new B.Fm(6,"RTCIceConnectionStateDisconnected")
D.aPF=new B.Fm(7,"RTCIceConnectionStateClosed")
D.aPG=new B.Xx(0,"RTCIceGatheringStateNew")
D.euv=new B.Xx(1,"RTCIceGatheringStateGathering")
D.a8d=new B.Xx(2,"RTCIceGatheringStateComplete")
D.a8e=new B.OO(0,"RTCPeerConnectionStateClosed")
D.aPH=new B.OO(1,"RTCPeerConnectionStateFailed")
D.aPI=new B.OO(2,"RTCPeerConnectionStateDisconnected")
D.aPJ=new B.OO(3,"RTCPeerConnectionStateNew")
D.aPK=new B.OO(4,"RTCPeerConnectionStateConnecting")
D.aPL=new B.OO(5,"RTCPeerConnectionStateConnected")
D.euw=new B.OP(0,"RTCSignalingStateStable")
D.eux=new B.OP(1,"RTCSignalingStateHaveLocalOffer")
D.euy=new B.OP(2,"RTCSignalingStateHaveRemoteOffer")
D.euz=new B.OP(3,"RTCSignalingStateHaveLocalPrAnswer")
D.euA=new B.OP(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aPM=new B.OP(5,"RTCSignalingStateClosed")
D.f8i=new A.av(160,48)
D.bc3=new A.fl(2,null,null,null,null,C.aD,null,null,null,null)
D.f9R=new A.a4(16,16,D.bc3,null)
D.fEd=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fbj=new A.b2(D.fEd,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fLP=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fbm=new A.b2(D.fLP,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fUF=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fbt=new A.b2(D.fUF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fDO=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fbT=new A.b2(D.fDO,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fPW=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aSA=new A.b2(D.fPW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRo=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fcm=new A.b2(D.fRo,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fW7=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fcD=new A.b2(D.fW7,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fU4=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fcI=new A.b2(D.fU4,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fVi=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fdu=new A.b2(D.fVi,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fCp=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fe0=new A.b2(D.fCp,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fNI=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fel=new A.b2(D.fNI,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fGx=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.feR=new A.b2(D.fGx,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fWd=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.feV=new A.b2(D.fWd,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fCF=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ff0=new A.b2(D.fCF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fBm=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fff=new A.b2(D.fBm,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fy8=new A.y("NGMY DOC SHARE",null,C.aTX,null,null,null,null,null,null,null,null,null)
D.fzy=new A.y("Show this to sender",null,C.iu,null,null,null,null,null,null,null,null,null)
D.fAz=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fFj=new A.y("Organization settings",null,C.cz,null,null,null,null,null,null,null,null,null)
D.fFI=new A.y("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fGH=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fHc=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fK4=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fMS=new A.y("Send to their Doc Share",null,C.nL,null,null,null,null,null,null,null,null,null)
D.fNd=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fNw=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fO6=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fOd=new A.y("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fOB=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.f3,null,null,null,null,null,null,null,null,null)
D.fRU=new A.y("Share files & videos\nwith a scan.",null,C.aU_,null,null,null,null,null,null,null,null,null)
D.fSd=new A.y("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hlG=new B.Zu(null)
D.abu=new B.acA(0,"docShare")
D.abv=new B.acA(1,"gate")
D.VW=new B.acA(2,"gateNoIndividual")})();(function staticFields(){$.aOM=null
$.fkK=function(){var x=y.N
return A.U(x,x)}()
$.GC=A.U(y.N,y.D)
$.agI=A.U(y.N,A.at("lO"))
$.Rl=A.U(y.N,y.D)
$.fli=A.U(y.N,A.at("ach"))
$.ccU=A.U(y.S,A.at("bx0"))
$.hkb=1
$.i7A=null
$.i7z=null
$.hZM=null
$.h90=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iqM","hBM",()=>new B.cpm())
x($,"ioH","hcM",()=>C.a.t(A.bz(A.bz(A.bz(A.Ha(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["Z6luEBU3LcFFuQRZ2jNHulXqnwo="]=a.current})($__dart_deferred_initializers__);