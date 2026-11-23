((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,P,K,Q,R,F,L,G,S,T,E,H,U,V,W,X,Y,M,N,B={cuz:function cuz(){},
i8z(d){var x=null,w=new B.b7z(d,D.eJZ,new A.q4(x,x,y.c6),new A.q4(x,x,y.B))
w.bDI(d)
return w},
b7z:function b7z(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cuu:function cuu(d){this.a=d},
cuv:function cuv(d){this.a=d},
cuw:function cuw(d){this.a=d},
cut:function cut(d){this.a=d},
cux:function cux(d){this.a=d},
i8A(d,e){var x=y.N
x=new B.b7A(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDJ(d,e)
return x},
b7A:function b7A(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cuA:function cuA(d){this.a=d},
cuB:function cuB(d){this.a=d},
cuC:function cuC(d){this.a=d},
cuD:function cuD(d){this.a=d},
cuE:function cuE(d){this.a=d},
cuF:function cuF(d){this.a=d},
cuG:function cuG(d){this.a=d},
cuH:function cuH(d){this.a=d},
hm5(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bb("IndexedDB not available"))
return C.xs.H9(x,"ngmy_doc_share_v1",new B.fDi(),1)},
ifp(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ca(d))
if(y.J.b(d))return new Uint8Array(A.ca(J.ex(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ca(A.vW(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ca(d))
if(typeof d=="string")try{x=C.cD.aK(d)
return x}catch(w){return v}return v},
SC(d,e){return B.ivd(d,e)},
ivd(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQM
x=7
return A.b(o==null?$.aQM=B.hm5():o,$async$SC)
case 7:s=g
r=new Uint8Array(A.ca(e))
q=J.my(s,"blobs","readwrite")
C.iP.mj(J.mx(q,"blobs"),r,d)
x=8
return A.b(J.oL(q),$async$SC)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share idb put] "+A.v(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SC,w)},
SB(d){return B.ivc(d)},
ivc(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQM
x=7
return A.b(o==null?$.aQM=B.hm5():o,$async$SB)
case 7:s=f
r=J.my(s,"blobs","readonly")
x=8
return A.b(C.iP.xU(J.mx(r,"blobs"),d),$async$SB)
case 8:q=f
x=9
return A.b(J.oL(r),$async$SB)
case 9:o=B.ifp(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SB,w)},
aiP(d){return B.ivb(d)},
ivb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQM
x=7
return A.b(p==null?$.aQM=B.hm5():p,$async$aiP)
case 7:s=f
r=J.my(s,"blobs","readwrite")
C.iP.GF(J.mx(r,"blobs"),d)
x=8
return A.b(J.oL(r),$async$aiP)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aiP,w)},
fDi:function fDi(){},
ihX(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsz(w,v))}return u},
hO6(d,e){var x,w={},v=A.aZx("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h2S(w,v,e)
C.xu.zl(v,"change",new B.h2U(w,v,!1))
C.xu.zl(v,"cancel",new B.h2T(w))
$.eU.mJ()
v.click()
A.bL(C.amQ,new B.h2R(w),y.H)},
h2S:function h2S(d,e,f){this.a=d
this.b=e
this.c=f},
h2U:function h2U(d,e,f){this.a=d
this.b=e
this.c=f},
h2T:function h2T(d){this.a=d},
h2R:function h2R(d){this.a=d},
E0(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV_()?3:4
break
case 3:x=5
return A.b(B.hIF(e,d,s,!0,!1,f,g,h,!1,i),$async$E0)
case 5:x=1
break
case 4:x=6
return A.b(B.Se(d,s,f,g,h,i),$async$E0)
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
return A.b(B.Jz(s,d),$async$E0)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fyA(s,d),$async$E0)
case 14:x=12
return A.b(r.hIF(q,p,o,n,m,l,k,j,a1,i),$async$E0)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cc(A.ec(new B.h36(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cc(A.ec(new B.h37(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E0,w)},
Se(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Se=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2h(e),$async$Se)
case 3:u=k
x=4
return A.b(B.arC(d,e,!1),$async$Se)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jz(e,d),$async$Se)
case 7:if(k){v=D.aej
x=1
break}x=8
return A.b(B.WA(e),$async$Se)
case 8:v=t?D.XL:D.aek
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2f(d,e)){v=D.aej
x=1
break}x=11
return A.b(B.WA(e),$async$Se)
case 11:v=t?D.XL:D.aek
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hgR(d,e)){v=D.aej
x=1
break}x=14
return A.b(B.WA(e),$async$Se)
case 14:v=D.XL
x=1
break
case 13:v=t?D.XL:D.aek
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Se,w)},
fyA(d,e){var x=0,w=A.j(y.y),v
var $async$fyA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2f(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2h(d),$async$fyA)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyA,w)},
hIF(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cc(A.ec(new B.fFZ(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hDe(d,e,f,g,h,i,j){return new B.a_S(e,j,d,g,h,i,f,null)},
fHV(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fHV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fHY(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fHV)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHV,w)},
fIp(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fIp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fIr(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fIp)
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
return A.i($async$fIp,w)},
hmi(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fVx(d,e){var x=0,w=A.j(y.H),v
var $async$fVx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WA(e),$async$fVx)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e7()
case 1:return A.h(v,w)}})
return A.i($async$fVx,w)},
h36:function h36(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h37:function h37(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ae3:function ae3(d,e){this.a=d
this.b=e},
fFZ:function fFZ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_S:function a_S(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aC3:function aC3(){this.c=this.a=this.d=null},
dfr:function dfr(d,e){this.a=d
this.b=e},
dfo:function dfo(d){this.a=d},
dfq:function dfq(d){this.a=d},
dfp:function dfp(d){this.a=d},
dft:function dft(){},
dfs:function dfs(d){this.a=d},
aex:function aex(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEJ:function aEJ(d,e){this.a=d
this.b=e},
aHW:function aHW(d,e,f){this.a=d
this.b=e
this.c=f},
fHY:function fHY(d,e,f){this.a=d
this.b=e
this.c=f},
fHW:function fHW(d){this.a=d},
fHX:function fHX(d,e,f){this.a=d
this.b=e
this.c=f},
fIr:function fIr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIq:function fIq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cg0(d,e,f,g,h){return B.i3k(d,e,f,g,h)},
i3k(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cg0=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a2(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hg(r.dP(d,new B.cg1(s,e,h,g,f,q),y.g),y.l),$async$cg0)
case 3:r=p.aS(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg0,w)},
b2c(d,e,f,g,h){return B.i3l(d,e,f,g,h)},
i3l(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2c=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ax9("GET",d)
o=A.hdg()
if(o==null)o=new A.MU(A.a([],y.W))
x=7
return A.b(o.fb(0,s).de(0,C.Ht),$async$b2c)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.De(),$async$b2c)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CA(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share pull url web] "+f+": "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2c,w)},
b2b(d){return B.i3i(d)},
i3i(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.oL),$async$b2b)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.mt(A.mq(p.e)).cG(0,p.w),null)
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
$.am.$1("[doc share lan manifest web] "+A.v(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2b,w)},
cg_(d){return B.i3j(d)},
i3j(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cg_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.r0),$async$cg_)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mt(A.mq(q.e)).cG(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ac(o)
$.am.$1("[doc share lan text web] "+A.v(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cg_,w)},
cg1:function cg1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jS:function jS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jx(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i3q(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jx(C.a.aY(t,u.length))}return null},
i3r(d){var x=B.Jx(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i3m(){var x,w=$.oH(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8B(d){return B.i3n(d)},
i3n(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8B=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bN),$async$a8B)
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
$.am.$1("[doc share my code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8B,w)},
a8C(d,e){return B.i3o(d,e)},
i3o(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8C=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i1(d,e,!1,!1,C.cT,null),$async$a8C)
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
$.am.$1("[doc share my code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8C,w)},
Cz(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cz)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jx(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8D(r),$async$Cz)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8B("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cz)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jx(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cz)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i3m()
x=14
return A.b(B.a8D(m),$async$Cz)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().ag()
x=15
return A.b(B.a8C("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 15:k=f
x=16
return A.b(B.a8C("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cz)
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
return A.i($async$Cz,w)},
a8D(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jx(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8B("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8D)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8D,w)},
a8E(d,e,f,g){return B.i3s(d,e,f,g)},
i3s(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8E=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a2(d)
if(g.gar(d)){v=!1
x=1
break}r=B.Jx(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8D(r),$async$a8E)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cg7())>1048576||g.aR(d,new B.cg8())){v=B.FB(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a8P("myCode",d,a0),$async$a8E)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cv(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FB(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2k(u,g.gJ(d),a0),$async$a8E)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oH().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cg9(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2d(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],i,y.z),q),$async$a8E)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8E,w)},
FB(d,e,f,g,h){return B.i3p(d,e,f,g,h)},
i3p(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FB=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$FB)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cH(a6)
k=l.cD(a6,0,new B.cg3())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.R(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oH().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cR.av(99999)
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
a1=B.JB(a9,q)
a0=new A.Lp(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FB)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f3().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nM(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acf(a1.a,a4,"media",a1.d,a2).xR(m,n,new A.ES(!0,q.c)),$async$FB)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FB)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTu(r),$async$FB)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cg4(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2d(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],e,d),a8),$async$FB)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTu(r),$async$FB)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FB,w)},
b2d(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8B(t),$async$b2d)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cg2(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8C(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2d,w)},
Oy(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oy=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8B("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oy)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cv(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aS(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b2e(k,a0),$async$Oy)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b2j(h),$async$Oy)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WH(g,a0),$async$Oy)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cg5(),q),n)
d=A.B(new A.X(r,new B.cg6(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cS(d,0,A.dz(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8C("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Oy)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
b2e(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cv(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aS(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a2(p)
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
break}i=B.izl(k,j)
C.d.u(s,i)
x=5
return A.b(B.DZ(l,m,"Received via My Code",t,e,i),$async$b2e)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTu(s),$async$b2e)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2e,w)},
cg7:function cg7(){},
cg8:function cg8(){},
cg9:function cg9(){},
cg3:function cg3(){},
cg4:function cg4(){},
cg2:function cg2(){},
cg5:function cg5(){},
cg6:function cg6(){},
h33(d,e){var x=0,w=A.j(y.H)
var $async$h33=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cc(A.ec(new B.h34(e),!1,null,y.H)),$async$h33)
case 2:return A.h(null,w)}})
return A.i($async$h33,w)},
bHY(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bHY=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cv(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cc(A.ec(new B.h35(g,e,f),!1,null,y.y)),$async$bHY)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHY,w)},
h34:function h34(d){this.a=d},
h35:function h35(d,e,f){this.a=d
this.b=e
this.c=f},
Wx:function Wx(d,e){this.c=d
this.a=e},
aG5:function aG5(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e1L:function e1L(d,e){this.a=d
this.b=e},
WB:function WB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG8:function aG8(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e2U:function e2U(d){this.a=d},
e2V:function e2V(d){this.a=d},
e2W:function e2W(d){this.a=d},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2X:function e2X(d){this.a=d},
e2Y:function e2Y(d){this.a=d},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e){this.a=d
this.b=e},
e30:function e30(d,e){this.a=d
this.b=e},
e31:function e31(d){this.a=d},
e34:function e34(){},
e32:function e32(d){this.a=d},
e33:function e33(d,e){this.a=d
this.b=e},
bmE:function bmE(){},
Wy:function Wy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG6:function aG6(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e1M:function e1M(d){this.a=d},
e1N:function e1N(d){this.a=d},
hgS(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i3u(d){var x=d.l2
if(x>=0)return x
return 4.99},
i3t(d){var x=d.lK,w=y.N
w=x.iW(x,new B.cgb(),w,w)
return w},
hya(d){var x=d.kE,w=y.N
w=x.iW(x,new B.cgc(),w,w)
return w},
b2h(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2h)
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
return A.i($async$b2h,w)},
a8G(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8G)
case 4:x=3
return A.b(g.aE("String","ngmy_doc_share_path_"+u,e),$async$a8G)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8G,w)},
WA(d){var x=0,w=A.j(y.H),v,u
var $async$WA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WA)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WA,w)},
hgR(d,e){var x,w,v
if(B.i3u(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i3t(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.ce(new A.V(Date.now(),0,!1))},
b2f(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hya(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.ce(new A.V(Date.now(),0,!1))},
hyb(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hya(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.ce(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bM(A.dv(f,0,0,0,0,0).a).ab().ag())
d.kE=w},
arD(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$arD)
case 7:s=f
r=A.v(p)
r=A.er(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$arD,w)},
arE(d){var x=0,w=A.j(y.H),v,u,t
var $async$arE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arD(d),$async$arE)
case 3:u=f
x=5
return A.b(A.aB(),$async$arE)
case 5:x=4
return A.b(f.aE("Int","ngmy_doc_share_usage_"+t,u+1),$async$arE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arE,w)},
arC(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hgS(d)
if(u<=0){v=!1
x=1
break}if(B.hgR(d,e)){v=!1
x=1
break}x=3
return A.b(B.arD(e),$async$arC)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arC,w)},
b2g(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jz(e,d),$async$b2g)
case 3:if(g){v=-1
x=1
break}u=B.hgS(d)
if(u<=0){v=-1
x=1
break}if(B.hgR(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arD(e),$async$b2g)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2g,w)},
cge(d,e,f){var x=0,w=A.j(y.y),v
var $async$cge=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jz(e,d),$async$cge)
case 3:if(h){v=!1
x=1
break}v=B.arC(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cge,w)},
cgd(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgd=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cge(d,u,i.gV_()),$async$cgd)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgd,w)},
a8F(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8F=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gV_()){v=!0
x=1
break}if(B.b2f(d,u)){v=!0
x=1
break}x=5
return A.b(A.lT(u,C.V3),$async$a8F)
case 5:x=k?3:4
break
case 3:B.hyb(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8F)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lt(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.V3,"Doc Share for Organizations"),$async$a8F)
case 7:if(!k){v=!1
x=1
break}B.hyb(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8F)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
cgb:function cgb(){},
cgc:function cgc(){},
h43(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h43=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h43)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fuO.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i3([r],e.c))
s.toString
$.fuO.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h43,w)},
iBz(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fuO.bq($.fuO,new B.h45(d))},
h45:function h45(d){this.a=d},
fwt(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fwt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],f))
s.toString
u=A.nf(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bL(C.jy,null,y.H),$async$fwt)
case 3:C.BR.fv(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwt,w)},
ahK(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fvu.n(0,d,new B.adL(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ahK)
case 3:x=2
return A.b(h.aE("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahK)
case 2:return A.h(null,w)}})
return A.i($async$ahK,w)},
ahE(d){return B.ijR(d)},
ijR(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fvu.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ahE)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cv(s)){v=null
x=1
break}o=J.b8(s,new B.fAg(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adL(r)
$.fvu.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahE,w)},
S4(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$S4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ca(e))
$.Hl.n(0,d,u)
x=3
return A.b(B.SC(d,u),$async$S4)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S4,w)},
aR6(d){return B.ijP(d)},
ijP(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aR6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hl.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SB(d),$async$aR6)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hl.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aR6)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cD.aK(r)
x=!J.cv(q)?9:10
break
case 9:B.S4(d,q)
x=11
return A.b(J.fR(s,d),$async$aR6)
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
return A.i($async$aR6,w)},
ifR(d){if(d==null)return A.f6(null,y.K)
if(y.J.b(d))return A.f6(new Uint8Array(A.ca(J.ex(d,0,null))),y.K)
if(y.D.b(d))return A.f6(new Uint8Array(A.ca(d)),y.K)
if(y.Q.b(d))return A.f6(new Uint8Array(A.ca(A.vW(d,0,null))),y.K)
if(y.I.b(d))return A.f6(new Uint8Array(A.ca(d)),y.K)
return A.f6(null,y.K)},
a3o(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bG,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fF(r,"loadend",new B.fGa(r,t),!1,s)
A.fF(r,"error",new B.fGb(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.OT,new B.fGc())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3o,w)},
aRr(d,e,f){return B.imd(d,e,f)},
imd(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRr=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.R(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a3o(i),$async$aRr)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SC(o,p),$async$aRr)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahK(k,j,s),$async$aRr)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.am.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRr,w)},
aRq(d,e,f){return B.imc(d,e,f)},
imc(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRq=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRr(d,e,f),$async$aRq)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3o(f),$async$aRq)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hl.n(0,s,r)
$.Sn.n(0,s,r)
x=11
return A.b(B.S4(s,r),$async$aRq)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRq,w)},
CA(d,e,f,g,h,i){return B.i3D(d,e,f,g,h,i)},
i3D(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CA=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jS(p,q,o,n,new A.V(Date.now(),0,!1).ab().ag(),a0,f,B.b2n(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.S4(s,d),$async$CA)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CA)
case 10:r=a2
x=11
return A.b(r.aE("String",s,C.cO.gcp().aK(d)),$async$CA)
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
return A.b(B.Bu(e),$async$CA)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Hv(e,j),$async$CA)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CA,w)},
WC(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WC=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bu(d),$async$WC)
case 3:t=a1
s=e.length,r=J.cH(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cR.av(99999)
n=p.b
l=o.type
l.toString
k=B.hyd(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().ag()
i=new B.jS(m,n,k,l,j,"From folder",null,B.b2n(),null)
$.ai8.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3o(o),$async$WC)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hl.n(0,h,g)
$.Sn.n(0,h,g)
B.S4(h,g)
x=9
break
case 10:x=11
return A.b(B.aRq(d,m,o),$async$WC)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hv(d,t),$async$WC)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WC,w)},
hgW(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hgW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hyd(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JA(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CA(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgW,w)},
JA(d,e,f,g,h,i){return B.i3C(d,e,f,g,h,i)},
i3C(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JA=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lp(A.dz(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JA)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cv(m)){x=6
break}J.h9(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ca(J.Tb(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kt(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SC(k,l),$async$JA)
case 11:J.c6(q,k);++p
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
return A.b(j.a1(0),$async$JA)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SC(k,new Uint8Array(A.ca(n))),$async$JA)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahK(r,q,g),$async$JA)
case 16:f=new B.jS(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().ag(),a2,null,B.b2n(),null)
x=17
return A.b(B.Bu(d),$async$JA)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hv(d,e),$async$JA)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JA,w)},
WE(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WE=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ai8.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3o(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahE(s),$async$WE)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SB(u[o]),$async$WE)
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
v=A.vW(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Sn.h(0,s)
if(i==null)i=$.Hl.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t6(d,e),$async$WE)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.Sn.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vW(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WE,w)},
hyd(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t6(d,e){return B.i3E(d,e)},
i3E(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t6=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Sn.h(0,f)
if(e==null)e=$.Hl.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.ai8.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3o(s),$async$t6)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hl.n(0,f,r)
$.Sn.n(0,f,r)
B.S4(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahE(f),$async$t6)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adG(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SB(g[l]),$async$t6)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a85()
if(!C.aI.gar(r)){$.Hl.n(0,f,r)
$.Sn.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aR6(f),$async$t6)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.Sn.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WE(a0,a1,0,g),$async$t6)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.ca(i))
$.Hl.n(0,f,h)
$.Sn.n(0,f,h)
B.S4(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t6,w)},
i3H(d){var x,w,v=$.ai8.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i3I(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i3([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i3F(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arK(d,e,f,g,h){return B.i3G(d,e,f,g,h)},
i3G(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arK=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ai8.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3o(s),$async$arK)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t6(g,e),$async$arK)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f3().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iE(d).xR(h,r,new A.ES(!0,e.c)),$async$arK)
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
$.am.$1("[doc share upload web] "+e.b+": "+A.v(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arK,w)},
hyf(d,e,f,g,h){var x,w,v,u,t=$.hye
$.hye=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cgp.n(0,t,new B.bzE(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adG(u)))
return t},
hgX(d){var x=0,w=A.j(y.H)
var $async$hgX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hgX,w)},
JB(d,e){var $async$JB=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ai8.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.R(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qK(B.WE(d,e,p,o<q?o:q),$async$JB,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qK(A.GS(n),$async$JB,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qK(B.ahE("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JB,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qK(B.SB(h[l]),$async$JB,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qK(A.GS(k),$async$JB,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qK(B.t6(d,e),$async$JB,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qK(A.GS(A.vW(j,p,o<i?o:i)),$async$JB,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qK(null,0,w)
case 2:return A.qK(t.at(-1),1,w)}})
var x=0,w=A.hHn($async$JB,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hJp(w)},
b2p(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cgp.h(0,d)
if(t==null||J.cv(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6n(),$async$b2p)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2p,w)},
WD(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgp.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6n(),$async$WD)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahK(r.c,u,r.z),$async$WD)
case 4:t=new B.jS(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().ag(),r.f,r.r,B.b2n(),null)
u=r.a
x=5
return A.b(B.Bu(u),$async$WD)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hv(u,s),$async$WD)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WD,w)},
a8M(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgp.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiP(u[s]),$async$a8M)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a5(0)
case 1:return A.h(v,w)}})
return A.i($async$a8M,w)},
cgr(d,e,f){var x=0,w=A.j(y.H)
var $async$cgr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEK(d,e,f),$async$cgr)
case 2:return A.h(null,w)}})
return A.i($async$cgr,w)},
cgs(d,e,f){var x=0,w=A.j(y.H)
var $async$cgs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEL(d,e,f),$async$cgs)
case 2:return A.h(null,w)}})
return A.i($async$cgs,w)},
FC(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bu(d),$async$FC)
case 2:p=g
J.nd(p,new B.cgq(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hl.X(0,v)
$.ai8.X(0,e)
x=3
return A.b(B.ahE(v),$async$FC)
case 3:u=g
$.fvu.X(0,v)
x=4
return A.b(A.aB(),$async$FC)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FC)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FC)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiP(s[q]),$async$FC)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiP(v),$async$FC)
case 13:x=14
return A.b(B.Hv(d,p),$async$FC)
case 14:return A.h(null,w)}})
return A.i($async$FC,w)},
b2o(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t6(d,e),$async$b2o)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fwt(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2o,w)},
Bu(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bu)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fGd(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bu,w)},
Hv(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$Hv)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fKu(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aE("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$Hv)
case 3:return A.h(null,w)}})
return A.i($async$Hv,w)},
bEK(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bEK)
case 3:u=h
t=J.cH(u)
s=t.bl(u,new B.fEm(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aH3(f))
x=4
return A.b(B.Hv(d,u),$async$bEK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEK,w)},
bEL(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bEL)
case 3:u=h
t=J.cH(u)
s=t.bl(u,new B.fEn(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRf(f))
x=4
return A.b(B.Hv(d,u),$async$bEL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEL,w)},
adL:function adL(d){this.a=d},
fAg:function fAg(){},
fGa:function fGa(d,e){this.a=d
this.b=e},
fGb:function fGb(d){this.a=d},
fGc:function fGc(){},
cgq:function cgq(d){this.a=d},
bzE:function bzE(d,e,f,g,h,i,j,k,l){var _=this
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
fGd:function fGd(){},
fKu:function fKu(){},
fEm:function fEm(d){this.a=d},
fEn:function fEn(d){this.a=d},
a8N(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cgv())?3:4
break
case 3:x=5
return A.b(B.b2q(d,e),$async$a8N)
case 5:u=g
if(u!=null){t=u.c
B.OA(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gG(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.b2l(s),$async$a8N)
case 10:case 9:if(g){v=new A.Rq(1,D.UH,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WF(d,e),$async$a8N)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WK(!0,!0,d,e),$async$a8N)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OA(d,D.AT,e,t)
v=new A.Rq(p,D.AT,t)
x=1
break}v=B.cgu(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8N,w)},
WF(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8P(null,d,e),$async$WF)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cv(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2k(p,d.length,e),$async$WF)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cgs(e,C.d.gG(d).a,r.b),$async$WF)
case 7:case 6:q=r.a
x=8
return A.b(B.OA(d,D.UH,e,q),$async$WF)
case 8:v=new A.Rq(d.length,D.UH,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WF,w)},
WG(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mQ(D.nh)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8O(d,e),$async$WG)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cgn(s,d,e,t),$async$WG)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2l(t),$async$WG)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t6(e,d),$async$WG)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WF(A.a([d],y.r),e),$async$WG)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WG,w)},
WI(){var x=0,w=A.j(y.H)
var $async$WI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hgQ(),$async$WI)
case 2:x=3
return A.b(B.aTQ(),$async$WI)
case 3:return A.h(null,w)}})
return A.i($async$WI,w)},
a8O(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2n()
x=3
return A.b(B.cgr(e,d.a,u),$async$a8O)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8O,w)},
OA(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.UH&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8O(p,f),$async$OA)
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
return A.b(B.cgm(o,p,u,f),$async$OA)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cgn(o,p,f,t),$async$OA)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cgl(o,u,p,f),$async$OA)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OA,w)},
b2q(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgt(e,d),$async$b2q)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WK(!1,!0,d,e),$async$b2q)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rq(u.a,D.AT,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2q,w)},
cgt(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cgt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WE(d,s,0,1),$async$cgt)
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
return A.i($async$cgt,w)},
cgu(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cgu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8P(null,d,e),$async$cgu)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hyc(u)
if(t.length>800){v=null
x=1
break}v=new A.Rq(d.length,D.dZY,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgu,w)},
arL(d,e,f){return B.i3L(d,e,f)},
i3L(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arL=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d8(g,"\ufeff"))g=J.ne(g,1)
x=B.hgV(g)?3:4
break
case 3:x=5
return A.b(B.cgo(g),$async$arL)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d8(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ne(g,13))
try{k=B.FD(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d8(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ne(g,13))
u=9
x=12
return A.b(B.b2j(q),$async$arL)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WH(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ac(f)
$.am.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d8(g,"NGMYDOCSYNC0|"))try{n=B.hgU(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WH(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d8(g,"N2|")){v=B.JC(C.a.i(J.ne(g,3)),d,a0)
x=1
break}if(J.d8(g,"NGMYDOCSYNC2|")){v=B.JC(C.a.i(J.ne(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JC(h,d,a0)
x=1
break}if(J.eE(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WH(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arL,w)},
JC(d,e,f){return B.i3J(d,e,f)},
i3J(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JC=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aw(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cG(A.v(s)+"/manifest.json",0,null)
q=A.cG(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2b(r),$async$JC)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2b(A.cG(s,0,null)),$async$JC)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cv(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cg0(o,r,a1,n,a2),$async$JC)
case 11:m=a4
x=J.cv(m)?12:13
break
case 12:x=14
return A.b(B.cg_(q),$async$JC)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WH(l,a2),$async$JC)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cv(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ac(d)
$.am.$1("[doc share lan import] "+A.v(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JC,w)},
a8P(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8P=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aS(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t6(f,r),$async$a8P)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cO.gcp().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).ab().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8P,w)},
WH(d,e){return B.i3K(d,e)},
i3K(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WH=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.V.aP(0,a2,null)
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
e=J.aS(r)
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
break}i=C.cD.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.CA(i,a3,d,k,l,o),$async$WH)
case 9:h=a5
if(h!=null)J.c6(n,h)
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
$.am.$1("[doc share bundle] "+A.v(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$WH,w)},
Oz:function Oz(d,e){this.a=d
this.b=e},
cgv:function cgv(){},
a2Y(d){var x=A.Q(d).ax.a===C.I,w=x?D.ak2:D.ahw,v=x?D.alQ:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aj0:C.bn
return new A.aJb([w,s,v,u,t,x?C.fx:C.bR])},
hP9(d,e){var x=e?C.v.j(0.72):C.b7
return A.ce(null,x,!0,null,new B.h8l(e),d,null,!0,!0,y.N)},
cga(d,e,f,g,h,i,j,k,l){return new B.Wz(e,l,d,f,k,j,g,h,i,null)},
a_U(d,e,f,g,h,i,j){return new B.bh8(g,h,j,e,i,d,f,null)},
h8l:function h8l(d){this.a=d},
a_R:function a_R(d,e){this.c=d
this.a=e},
aC2:function aC2(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dfn:function dfn(d){this.a=d},
dfl:function dfl(d){this.a=d},
dfm:function dfm(d){this.a=d},
bzg:function bzg(){},
Wz:function Wz(d,e,f,g,h,i,j,k,l,m){var _=this
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
aG7:function aG7(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e2S:function e2S(d){this.a=d},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2g:function e2g(d,e){this.a=d
this.b=e},
e1P:function e1P(d,e,f){this.a=d
this.b=e
this.c=f},
e1O:function e1O(d){this.a=d},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e,f){this.a=d
this.b=e
this.c=f},
e1U:function e1U(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2H:function e2H(d){this.a=d},
e2c:function e2c(d,e,f){this.a=d
this.b=e
this.c=f},
e29:function e29(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1T:function e1T(d){this.a=d},
e2k:function e2k(d){this.a=d},
e2j:function e2j(){},
e1Z:function e1Z(d){this.a=d},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2F:function e2F(d,e){this.a=d
this.b=e},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2b:function e2b(d,e){this.a=d
this.b=e},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2r:function e2r(d){this.a=d},
e2t:function e2t(){},
e2u:function e2u(){},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2x:function e2x(){},
e2y:function e2y(d){this.a=d},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2l:function e2l(d){this.a=d},
e2m:function e2m(d){this.a=d},
e2n:function e2n(d){this.a=d},
e2o:function e2o(d){this.a=d},
e2p:function e2p(d){this.a=d},
e1W:function e1W(){},
e1X:function e1X(d){this.a=d},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1R:function e1R(d,e,f){this.a=d
this.b=e
this.c=f},
e2d:function e2d(d){this.a=d},
e2e:function e2e(d,e,f){this.a=d
this.b=e
this.c=f},
e27:function e27(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e20:function e20(d,e,f){this.a=d
this.b=e
this.c=f},
e24:function e24(d){this.a=d},
e25:function e25(d){this.a=d},
e26:function e26(){},
e28:function e28(d,e){this.a=d
this.b=e},
e21:function e21(d){this.a=d},
e2_:function e2_(d,e,f){this.a=d
this.b=e
this.c=f},
e22:function e22(){},
e2i:function e2i(d){this.a=d},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2z:function e2z(d){this.a=d},
e2A:function e2A(d,e){this.a=d
this.b=e},
e2B:function e2B(d){this.a=d},
e2P:function e2P(d){this.a=d},
e2N:function e2N(d){this.a=d},
e2O:function e2O(d){this.a=d},
e2Q:function e2Q(){},
e2R:function e2R(d,e){this.a=d
this.b=e},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2K:function e2K(d,e,f){this.a=d
this.b=e
this.c=f},
e2I:function e2I(d,e,f){this.a=d
this.b=e
this.c=f},
e2L:function e2L(d,e){this.a=d
this.b=e},
e2M:function e2M(d,e){this.a=d
this.b=e},
aC_:function aC_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bh7:function bh7(d,e,f){this.c=d
this.d=e
this.a=f},
dfj:function dfj(){},
dfk:function dfk(){},
ae4:function ae4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dfH:function dfH(){},
dfG:function dfG(d){this.a=d},
a_T:function a_T(d,e,f){this.c=d
this.d=e
this.a=f},
aC4:function aC4(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dfD:function dfD(d){this.a=d},
dfE:function dfE(d,e,f){this.a=d
this.b=e
this.c=f},
dfF:function dfF(d,e){this.a=d
this.b=e},
dfB:function dfB(d,e){this.a=d
this.b=e},
dfz:function dfz(d){this.a=d},
dfx:function dfx(d){this.a=d},
dfu:function dfu(d){this.a=d},
dfA:function dfA(d){this.a=d},
dfw:function dfw(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfy:function dfy(d){this.a=d},
dfv:function dfv(d){this.a=d},
a_Q:function a_Q(d,e,f){this.c=d
this.d=e
this.a=f},
aC1:function aC1(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dfg:function dfg(d){this.a=d},
dff:function dff(d,e){this.a=d
this.b=e},
dfh:function dfh(d){this.a=d},
dfe:function dfe(d,e){this.a=d
this.b=e},
dfi:function dfi(d){this.a=d},
dfd:function dfd(d,e){this.a=d
this.b=e},
df9:function df9(d){this.a=d},
dfa:function dfa(d){this.a=d},
dfb:function dfb(d,e){this.a=d
this.b=e},
dfc:function dfc(d){this.a=d},
QY:function QY(d,e,f){this.c=d
this.d=e
this.a=f},
aC7:function aC7(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dfU:function dfU(d){this.a=d},
dfV:function dfV(d){this.a=d},
dfW:function dfW(d){this.a=d},
dfX:function dfX(d){this.a=d},
dfY:function dfY(d,e){this.a=d
this.b=e},
dfZ:function dfZ(d){this.a=d},
dg0:function dg0(d){this.a=d},
dg_:function dg_(d){this.a=d},
a_V:function a_V(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC5:function aC5(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dfQ:function dfQ(d,e){this.a=d
this.b=e},
dfR:function dfR(d,e){this.a=d
this.b=e},
dfI:function dfI(d,e,f){this.a=d
this.b=e
this.c=f},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(){},
dfP:function dfP(){},
dfL:function dfL(d,e){this.a=d
this.b=e},
dfM:function dfM(d,e){this.a=d
this.b=e},
dfN:function dfN(d,e){this.a=d
this.b=e},
dfO:function dfO(d,e){this.a=d
this.b=e},
ae2:function ae2(d,e){this.c=d
this.a=e},
df8:function df8(d){this.a=d},
a_P:function a_P(d){this.a=d},
aC0:function aC0(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_W:function a_W(d,e){this.c=d
this.a=e},
aC6:function aC6(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dfT:function dfT(d){this.a=d},
dfS:function dfS(d){this.a=d},
bh8:function bh8(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i3M(){var x,w=$.oH(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
OB(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OB=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$OB)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OB)
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
q=A.ac(n)
$.am.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OB,w)},
a8Q(d){return B.i3N(d)},
i3N(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8Q)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cT,null),$async$a8Q)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8Q,w)},
WJ(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OB(),$async$WJ)
case 3:s=g
r=J.a2(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dH(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,d,t)
x=4
return A.b(B.a8Q(s),$async$WJ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WJ,w)},
WK(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WK=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.cc(),$async$WK)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.cgx(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i3M()
t=A.U(u).k("O<1,a9<m,aE>>")
r=A.B(new A.O(u,new B.cgy(s),t),t.k("aj.E"))
x=6
return A.b(B.OB(),$async$WK)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=7
return A.b(B.a8Q(q),$async$WK)
case 7:x=8
return A.b(B.a8R(r,u,g,s),$async$WK)
case 8:v=new A.bt5(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WK,w)},
arM(d){var x=0,w=A.j(y.y),v,u,t
var $async$arM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OB(),$async$arM)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arM,w)},
cgz(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cgz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OB(),$async$cgz)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a2(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgz,w)},
a8R(d,e,f,g){return B.i3O(d,e,f,g)},
i3O(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8R=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arK("media",r,new B.cgw(s,e,g),f,q),$async$a8R)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WJ(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8R)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WJ(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$a8R)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WJ(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8R)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8R,w)},
FD(d,e,f){return B.i3P(d,e,f)},
i3P(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FD=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$FD)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arM(b3),$async$FD)
case 7:if(c0){x=6
break}x=8
return A.b(A.bL(C.j_,null,g),$async$FD)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arM(b3),$async$FD)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OB(),$async$FD)
case 10:e=c0
g=J.a2(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a2(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cv(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a2(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a2(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f3().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nM(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acf(a8.a,b0,"media",a8.d,a9).Dz(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b2c(k,n,o,s,b7),$async$FD)
case 17:j=c0
if(j!=null){J.c6(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
$.am.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
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
case 18:g.X(e,b3)
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
a2=$.f3().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nM(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acf(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FD)
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
a0=A.dH(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8Q(e),$async$FD)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FD,w)},
cgx:function cgx(){},
cgy:function cgy(d){this.a=d},
cgw:function cgw(d,e,f){this.a=d
this.b=e
this.c=f},
aTQ(){var x=0,w=A.j(y.H),v,u
var $async$aTQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.if9=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aTQ)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aTQ)
case 3:u=$.hmu
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aTQ)
case 4:$.hmu=$.io4=$.io5=null
return A.h(null,w)}})
return A.i($async$aTQ,w)},
fK5(d){var x=0,w=A.j(y.H),v,u
var $async$fK5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaS){x=1
break}u=new A.bn($.bG,y.d4)
d.c=new B.fK6(new A.c7(u,y.aY))
x=3
return A.b(u.ic(0,C.hb,new B.fK7()),$async$fK5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fK5,w)},
io2(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i3w(x):x},
hmz(d){var x=0,w=A.j(y.T),v,u,t
var $async$hmz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.Y(u,"WR")){v=B.arO(u)
x=1
break}v=B.hgU(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmz,w)},
hmy(d){var x=0,w=A.j(y.T),v,u,t
var $async$hmy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.Y(u,"WR")){v=B.arP(u)
x=1
break}v=B.hgU(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hmy,w)},
h3N(d){var x=0,w=A.j(y.T),v
var $async$h3N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arP(d),$async$h3N)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h3N,w)},
bFJ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hmy(d),$async$bFJ)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a2(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFJ,w)},
fxh(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fxh=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WD(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.CA(d.a85(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxh,w)},
Hx(d,e,f){return B.iqo(d,e,f)},
iqo(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hx=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hmz(a1),$async$Hx)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a2(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hRa().aHk(D.dM5,null),$async$Hx)
case 4:l=d.hmu=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adG(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bG,y.b1)
l.y=new B.fKH(f,k,new B.fKI(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a9r(0,new B.YW(r,"offer")),$async$Hx)
case 5:d=l
x=7
return A.b(l.anb(0),$async$Hx)
case 7:x=6
return A.b(d.a9j(0,a4),$async$Hx)
case 6:x=8
return A.b(B.fK5(l),$async$Hx)
case 8:x=9
return A.b(l.arz(),$async$Hx)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.io2(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arQ(m,h),$async$Hx)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hyc(h)
case 11:v=new A.bsj(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hx,w)},
fK6:function fK6(d){this.a=d},
fK7:function fK7(){},
fKI:function fKI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKH:function fKH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fKG:function fKG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ist(d){switch(d){case"new":return D.eK_
case"checking":return D.eK0
case"connected":return D.eK2
case"completed":return D.eK1
case"failed":return D.eK4
case"disconnected":return D.eK5
case"closed":return D.aT8
case"count":return D.eK3}return D.aT8},
isu(d){switch(d){case"new":return D.aT9
case"gathering":return D.eK6
case"complete":return D.aaS}return D.aT9},
iD7(d){switch(d){case"stable":return D.eK7
case"have-local-offer":return D.eK8
case"have-local-pranswer":return D.eKa
case"have-remote-offer":return D.eK9
case"have-remote-pranswer":return D.eKb
case"closed":return D.aTf}return D.aTf},
iBg(d){switch(d){case"new":return D.aTc
case"connecting":return D.aTd
case"connected":return D.aTe
case"closed":return D.aaT
case"disconnected":return D.aTb
case"failed":return D.aTa}return D.aaT},
abc:function abc(d,e){this.a=d
this.b=e},
PH:function PH(d,e){this.a=d
this.b=e},
YV:function YV(d,e){this.a=d
this.b=e},
PG:function PG(d,e){this.a=d
this.b=e},
G7:function G7(d,e){this.a=d
this.b=e},
cuy:function cuy(){},
hiH(d){var x=new B.G6()
x.a=d
x.b=!0
return x},
G6:function G6(){this.b=this.a=$},
abb:function abb(){},
awk:function awk(){},
YW:function YW(d,e){this.a=d
this.b=e},
hgQ(){var x=0,w=A.j(y.H)
var $async$hgQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hgQ,w)},
hgT(d,e,f){var x=0,w=A.j(y.T),v
var $async$hgT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mQ(D.nh))){v=null
x=1
break}v=B.h43(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgT,w)},
hyc(d){var x,w=F.agX.a66(C.dZ.aK(d),null)
if(w.length===0){x=C.dZ.aK(d)
return C.cO.gcp().aK(x)}return C.cO.gcp().aK(w)},
i3v(d){var x,w,v=C.cD.aK(d)
try{x=C.cc.cG(0,F.agW.bhn(v,!1))
return x}catch(w){x=C.cc.cG(0,v)
return x}},
hgU(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i3v(C.a.aY(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aY(t,w.length)
try{v=C.cc.cG(0,C.cD.aK(x))
return v}catch(u){return x}}return null},
i3w(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aL(s,"\n")},
i3x(){var x,w=$.oH(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2i(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2i)
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
$.am.$1("[doc share qr stash] load "+A.v(p)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2i,w)},
cgf(d,e){return B.i3y(d,e)},
i3y(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cT,null),$async$cgf)
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
$.am.$1("[doc share qr stash] save "+A.v(p)+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgf,w)},
b2l(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2i(d),$async$b2l)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2l,w)},
b2k(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2k=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i3x()
r=C.a.i(f)
t=C.dZ.aK(s)
x=3
return A.b(B.cgf(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cO.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$b2k)
case 3:if(!h){v=null
x=1
break}v=new A.a1Y("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2k,w)},
b2j(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2i(o),$async$b2j)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cc.cG(0,C.cD.aK(u))
if(J.je(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2j,w)},
cgg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(P.bGI("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cT),$async$cgg)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgg,w)},
b2m(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jy(),$async$b2m)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2m,w)},
arH(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arH)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2m(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arH,w)},
arF(d,e){var x=0,w=A.j(y.H)
var $async$arF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arF)
case 3:x=2
return A.b(g.aE("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arF)
case 2:return A.h(null,w)}})
return A.i($async$arF,w)},
a8I(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8I=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8I)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jy(),$async$a8I)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.du(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=5
return A.b(A.a8H(s),$async$a8I)
case 5:x=6
return A.b(B.arF(f,u),$async$a8I)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8I,w)},
a8J(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8J=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8J)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jy(),$async$a8J)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a2(u)
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
return A.b(B.arF(g,q),$async$a8J)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8H(u),$async$a8J)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8J,w)},
a8K(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8K=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8K)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jy(),$async$a8K)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a2(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b2f(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a8K)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aE("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().ag()],p,p),null)),$async$a8K)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8K,w)},
cgh(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgh)
case 7:s=f
p=A.v(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
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
return A.i($async$cgh,w)},
Jz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgh(d),$async$Jz)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2m(t),$async$Jz)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arG(d),$async$Jz)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2f(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arG(d),$async$Jz)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jz,w)},
arG(d){var x=0,w=A.j(y.H)
var $async$arG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arG)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arG)
case 2:return A.h(null,w)}})
return A.i($async$arG,w)},
b2n(){var x,w=$.oH(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a8L(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hgV(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgk(d){return B.i3A(d)},
i3A(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8L(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgk)
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
$.am.$1("[doc share short code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgk,w)},
arJ(d,e){return B.i3B(d,e)},
i3B(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8L(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cT,null),$async$arJ)
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
$.am.$1("[doc share short code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arJ,w)},
cgm(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8L(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arJ(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cgm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgm,w)},
cgl(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8L(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arJ(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cgl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgl,w)},
cgn(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cgn=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8L(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arJ(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgn,w)},
cgo(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cgo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hgV(d)){v=null
x=1
break}x=3
return A.b(B.cgk(d),$async$cgo)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a2(u)
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
return A.i($async$cgo,w)},
a8S(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8S=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8S)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8S)
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
q=A.ac(n)
$.am.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8S,w)},
arN(d){return B.i3Q(d)},
i3Q(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$arN)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cT,null),$async$arN)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arN,w)},
arO(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d8(j,"WR")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arO)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8S(),$async$arO)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cc.cG(0,C.cD.aK(q))
if(J.je(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dH(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().ag())
J.aK(s,j,o)
x=9
return A.b(B.arN(s),$async$arO)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ac(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.v(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arO,w)},
arQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.cc(),$async$arQ)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8S(),$async$arQ)
case 4:u=g
t=J.a2(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dH(A.a1(s,r,q),r,q)
r=C.dZ.aK(C.a.i(e))
q.n(0,"answer",C.cO.gcp().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().ag())
t.n(u,p,q)
x=5
return A.b(B.arN(u),$async$arQ)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arQ,w)},
arP(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arP)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8S(),$async$arP)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cc.cG(0,C.cD.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arP,w)},
aqH(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.oq)){v=null
x=1
break}x=3
return A.b(p.lv(e),$async$aqH)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.ho),$async$aqH)
case 7:q=g
o=q
o=o==null?null:J.eS(J.uV(o))
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
return A.i($async$aqH,w)},
izl(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
h1W(d){return B.izn(d)},
izn(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h1W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f3().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").LU(d,3600),$async$h1W)
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
$.am.$1("[supabase signed url] "+d+": "+A.v(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$h1W,w)},
DZ(d,e,f,g,h,i){var x=null
return B.izk(d,e,f,g,h,i)},
izk(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DZ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hyf(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hgX(r),$async$DZ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h1W(o),$async$DZ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8M(r),$async$DZ)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWR)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MU(A.a([],g))
x=15
return A.b(d.fb(0,A.ax9("GET",A.cG(n,0,null))).de(0,C.Ht),$async$DZ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8M(r),$async$DZ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lp(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DZ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2p(r,k),$async$DZ)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DZ)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WD(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ac(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a8M(r),$async$DZ)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DZ,w)},
aTu(d){return B.izm(d)},
izm(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f3().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTu)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aTu,w)}},D,Z,I,O,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
P=c[78]
K=c[118]
Q=c[372]
R=c[61]
F=c[364]
L=c[217]
G=c[83]
S=c[329]
T=c[330]
E=c[320]
H=c[120]
U=c[276]
V=c[137]
W=c[86]
X=c[218]
Y=c[327]
M=c[309]
N=c[373]
B=a.updateHolder(c[26],B)
D=c[371]
Z=c[275]
I=c[139]
O=c[303]
A_=c[93]
A0=c[356]
A1=c[101]
B.cuz.prototype={
aHk(d,e){return this.cSK(d,e)},
cSK(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dH(r,s,t)
t.u(0,d)
u=new q(A.ky(A.cw(t)))
t=J.k(u)
v=B.i8A(C.cO.gcp().aK(new A.dg(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHk,w)}}
B.b7z.prototype={
bDI(d){var x=this,w=x.w
w.onclose=A.hD(new B.cuu(x))
w.onopen=A.hD(new B.cuv(x))
w.onmessage=A.hD(new B.cuw(x))
w.onbufferedamountlow=A.hD(new B.cux(x))},
gd4(d){return this.x},
ajp(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G6()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hiH(J.eS(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$ajp)
case 8:v=t.hiH(s.apQ(f,0,null))
x=1
break
case 7:case 4:v=B.hiH(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajp,w)}}
B.b7A.prototype={
bDJ(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hD(new B.cuA(x)))
w.addEventListener("icecandidate",A.hD(new B.cuB(x)))
w.addEventListener("iceconnectionstatechange",A.hD(new B.cuC(x)))
w.onicegatheringstatechange=A.hD(new B.cuD(x))
w.addEventListener("signalingstatechange",A.hD(new B.cuE(x)))
if(!$.hqH())w.addEventListener("connectionstatechange",A.hD(new B.cuF(x)))
w.addEventListener("negotiationneeded",A.hD(new B.cuG(x)))
w.addEventListener("track",A.hD(new B.cuH(x)))},
anb(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ek(s.createAnswer(A.ky(A.cw(A.S(y.N,y.z)))),y.aQ),$async$anb)
case 3:t=f
v=new B.YW(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anb,w)},
a9j(d,e){return this.bsE(0,e)},
bsE(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9j)
case 2:return A.h(null,w)}})
return A.i($async$a9j,w)},
a9r(d,e){return this.bsZ(0,e)},
bsZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9r)
case 2:return A.h(null,w)}})
return A.i($async$a9r,w)},
arz(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YW(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arz,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f6(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.ae3.prototype={
a8(){return"_DocShareEntry."+this.b}}
B.a_S.prototype={
S(){return new B.aC3()},
gd6(){return this.c}}
B.aC3.prototype={
a_(){this.a3()
this.afU()},
afU(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2g(u.e,u.c),$async$afU)
case 2:t=e
if(v.c!=null)v.l(new B.dfr(v,t))
return A.h(null,w)}})
return A.i($async$afU,w)},
Ru(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ru=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arC(t.e,t.c,!1),$async$Ru)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fz6)
x=1
break}x=4
return A.b(B.a8G(u.a.c,"individual"),$async$Ru)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a7F(A.ec(new B.dfo(u),!1,null,y.H)),$async$Ru)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ru,w)},
Ka(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ka=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fHV(o),$async$Ka)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8K(o.e,r,s,q),$async$Ka)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fw5)
x=1
break}x=5
return A.b(B.a8G(u.a.c,"member"),$async$Ka)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a7F(A.ec(new B.dfq(u),!1,null,y.H)),$async$Ka)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Ka,w)},
yS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8F(t.e,o,t.f,t.r,t.w,s),$async$yS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8G(u.a.c,"org_owner"),$async$yS)
case 4:x=5
return A.b(B.arH(u.a.c),$async$yS)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fIp(o),$async$yS)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8I(s,t,o,q.c),$async$yS)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fw1)
x=1
break}x=10
return A.b(B.arH(u.a.c),$async$yS)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a7F(A.ec(new B.dfp(u),!1,null,y.H)),$async$yS)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yS,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nM:I.qO,p=B.hgS(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dI,y.m).w
w=A.n(28)
v=A.a([new A.aa(0,C.H,C.aD.j(0.35),C.h1,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fTq,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hl,s,s,s),C.aA,D.hcF,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cdX,C.m),s,s,s,s,C.eG,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lP(new B.dft(),s),C.O,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.ak,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aex(C.f3,C.aFB,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclp(),s),C.af],u))
w.push(new B.aex(C.pU,C.a6j,"Team Member","Sign in with your organization access code + password",t.gcmi(),s))
w.push(C.af)
w.push(new B.aex(C.arv,C.a7X,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gclO(),s))
return A.c5(s,q,A.bo(!0,A.cb(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aex.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eH(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.ma,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.W(V.zQ,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEJ.prototype={}
B.aHW.prototype={}
B.jS.prototype={
mQ(d){var x=this.b,w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gasf(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.a9(x/1024,1)+" KB"
if(x<1073741824)return C.i.a9(x/1048576,1)+" MB"
return C.i.a9(x/1073741824,2)+" GB"},
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
bgR(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRf(d){return this.bgR(null,d)},
aH3(d){return this.bgR(d,null)}}
B.Wx.prototype={
S(){return new B.aG5(new A.cx(null,y.A))},
gd6(){return this.c}}
B.aG5.prototype={
a_(){this.a3()
this.afV()},
afV(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cz(u.a.c),$async$afV)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e1L(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afV,w)},
afW(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fL(new A.fA(s)),$async$afW)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fA1)
case 1:return A.h(v,w)}})
return A.i($async$afW,w)},
a0c(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0c=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqH(s.d,4),$async$a0c)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0c)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0c,w)},
ajR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abP("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajR,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nM:I.qO,m=o?C.c:C.a_,l=A.eT(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lN
else if(q.e==null)x=A.at(new A.D(C.eG,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.F,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,M.Jh,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ak,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,Q.ao3,p,p,1/0)
v=A.n(20)
u=A.a([new A.aa(0,C.H,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.nn,w,C.lj,new A.e4(A.p(p,A.qs(p,p,!1,B.i3r(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lj,A.A(A.a([A.E(A.en(K.DW,p,C.X7,q.gcdz(),p),1),C.ar,A.E(A.dc(C.Ag,p,C.adh,q.gcdA(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a6(1/0,p,A.en(O.a56,p,D.h89,q.gcBq(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,A_.aoE,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.WB.prototype={
S(){return new B.aG8(new A.au(C.ax,$.az()),A.kn(!0,null,!0,!0,null,null,!1))}}
B.aG8.prototype={
a_(){var x,w
this.a3()
x=this.a.e
w=B.Jx(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
a0d(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jx(u.d.a.a)
if(t==null){u.l(new B.e2U(u))
x=1
break}u.l(new B.e2V(u))
s=u.a
r=s.c
x=3
return A.b(B.a8E(s.d,new B.e2W(u),t,r),$async$a0d)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e2X(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0d,w)},
a3x(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3x=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cv(r.a.d)){x=1
break}r.l(new B.e2Y(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.t6(r.a.c,q),$async$a3x)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e2Z(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajD(p,m,l,j,k),$async$a3x)
case 8:o=e
if(r.c!=null)r.l(new B.e3_(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e30(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e31(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3x,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ak2:D.ahw,h=j?D.alQ:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aj0:C.bn
i=[i,e,h,g,f,j?C.fx:C.bR]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eT(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.ds(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.ds(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c0O,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.m),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.fc,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,M.Jh,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v9(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmE()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pb,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e32(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mI,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.HZ(l.a.d,4)
m=A.B(new A.O(m,new B.e33(x,new A.aJb(i)),m.$ti.k("O<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lw,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.O,e,C.O,q,C.dc,p,C.O,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.eo,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fuy)
else q.push(A.W(C.kL,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b_,new A.o(u,k,s,t,k,k,C.m),C.iZ,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJ7,k,k,C.ah),1)
u=l.f?k:l.gcBr()
t=i[3]
s=i[1]
q=A.n(16)
s=A.en(O.a56,k,D.h9g,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdB()
t=A.bp(C.aD,k,k,0,C.c,k,C.nU,k,new A.ba(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bo(!0,A.lz(new B.e34(),A.x(A.a([e,new A.D(D.bIB,A.x(A.a([s,C.O,i,C.af,A.bI(l.f?C.ug:D.h7v,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cm,C.a1j,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmE.prototype={
pe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fj(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hv(C.bD,v.length),C.aP)}}
B.Wy.prototype={
S(){return new B.aG6()}}
B.aG6.prototype={
a_(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.az()
u.d!==$&&A.aR()
u.d=new A.au(new A.bd(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aR()
u.e=new A.au(new A.bd(x,C.b6,C.aP),v)
u.f!==$&&A.aR()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.az()
v.W$=0
v=w.e
v===$&&A.d()
v.V$=x
v.W$=0
v=w.f
v===$&&A.d()
v.V$=x
v.W$=0
w.a2()},
afX(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afX=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e1M(r))
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
return A.b(B.a8J(p,m,n,o,C.a.i(l).length===0?null:l),$async$afX)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fzD)
s=[1]
x=4
break}p.K(y.q).f.T(D.fye)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e1N(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afX,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nM:I.qO,q=A.eT(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h_P,s,s,s,1,s,!0),p=A.p(s,D.bAA,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.IU,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8f,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8a,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8q,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdC()
u=A.bp(C.aD,s,s,s,s,C.hr,s,s,s,s,s,s)
return A.c5(q,r,A.cb(A.x(A.a([p,C.dc,o,C.af,x,C.af,w,C.nn,A.bI(t.r?C.ug:C.aZG,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adL.prototype={}
B.bzE.prototype={
a6n(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ca(r.a85()))
x=3
return A.b(B.SC(t,s),$async$a6n)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6n,w)},
gd6(){return this.a}}
B.Oz.prototype={
a8(){return"NgmyDocShareQrMode."+this.b}}
B.a_R.prototype={
S(){return new B.aC2(new A.au(C.ax,$.az()),A.kn(!0,null,!0,!0,null,null,!1))}}
B.aC2.prototype={
a_(){this.a3()
$.aU.U$.push(new B.dfn(this))},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
cdI(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2Y(d),u=x.a.c,t=u?C.iT:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nM:v.a[0],p=A.n(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.aD.j(u?0.25:0.12),C.h1,32)],n),l=A.p(w,Z.auf,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.aa(0,C.H,C.aD.j(0.4),C.cy,16)],n),C.av4,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.F,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v9(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzg()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.D7,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b8b),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dfl(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mI,w,w,w,w)
f=f[1]
h=y.p
return A.eF(w,C.L,new A.cQ(U.MS,new A.bP(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x0,A.x(A.a([l,C.aO,k,C.O,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dW(C.on,new B.dfm(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.ba(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.o(w,w,w,A.n(14),A.a([new A.aa(0,C.H,C.aD.j(0.35),C.cM,12)],n),N.Rf,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eDn,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcdH(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.M,0,C.p),w),w),w),w,w,w,C.Pj,w,C.d8,w,w,w)}}
B.bzg.prototype={
pe(d,e){return e.an5(e.a.toUpperCase())}}
B.Wz.prototype={
S(){return new B.aG7(A.a([],y.r),A.aQ(y.N))},
gd6(){return this.c}}
B.aG7.prototype={
a_(){var x=this
x.a3()
x.uu()
x.w=A.d2(C.jV,new B.e2S(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WI()
this.a2()},
a2o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oy(u.a.c),$async$a2o)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bu(u.a.c),$async$a2o)
case 4:u.l(new s.e2f(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2o,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oy(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bu(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e2g(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OC(u.d)
B.Cz(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
OC(d){return this.bHP(d)},
bHP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8O(r,u.a.c),$async$OC)
case 8:p=f
if(u.c==null){x=1
break}new B.e1P(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mQ(D.nh))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WG(r,u.a.c),$async$OC)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bu(u.a.c),$async$OC)
case 12:u.l(new o.e1Q(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OC,w)},
P1(d){return this.bOe(d)},
bOe(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8O(d,u.a.c),$async$P1)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e1V(u,d,t))
x=6
return A.b(A.fL(new A.fA(t)),$async$P1)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fL(new A.fA(r.toUpperCase())),$async$P1)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P1,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cMw(d,e)},
cMw(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e2G(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e2H(r))
$.eU.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaYR(){var x=this.a
return x.f||x.r||x.w},
IX(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYR()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgd(s,n,r,q,o,t),$async$IX)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fVx(o,u.a.c),$async$IX)
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
return A.b(B.E0(s,o,r,q,n,t),$async$IX)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IX,w)},
a1q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arH(u.a.c),$async$a1q)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iq("No organization portal found.")
x=1
break}t=J.a2(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a8(t,!1).cc(A.ec(new B.e2c(u,r,q),!1,null,y.H)),$async$a1q)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1q,w)},
a2y(d){return this.cuS(d)},
cuR(){return this.a2y(1)},
cuS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYR()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arE(u.a.c),$async$a2y)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
adM(d,e,f){return this.c4f(d,e,f)},
c4f(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uv(new B.e29(u,d,null,e,f),"Uploading\u2026"),$async$adM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adM,w)},
bHY(){B.hO6(!1,new B.e1T(this))
return},
cA_(){this.l(new B.e2k(this))},
aBv(){var x=0,w=A.j(y.H),v=this
var $async$aBv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHY()
return A.h(null,w)}})
return A.i($async$aBv,w)},
adI(){var x=0,w=A.j(y.H),v=this
var $async$adI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e1Z(v),"Importing\u2026"),$async$adI)
case 2:return A.h(null,w)}})
return A.i($async$adI,w)},
Ty(d){return this.cLP(d)},
cLP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ty=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mQ(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cc(A.ec(new B.e2D(u,d),!1,null,y.H)),$async$Ty)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mQ(D.Tj)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cc(A.ec(new B.e2E(u,d),!1,null,y.H)),$async$Ty)
case 8:x=1
break
case 7:x=u.c4Y(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cc(A.ec(new B.e2F(u,d),!1,null,y.H)),$async$Ty)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Ty,w)},
c4Y(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cXU,C.a.aY(x,w+1).toLowerCase())},
ahz(d){return this.clt(d)},
clt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mQ(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cc(A.ec(new B.e2a(u,d),!1,null,y.H)),$async$ahz)
case 5:x=1
break
case 4:u.l(new B.e2b(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahz,w)},
SU(d){return this.cCV(d)},
cCV(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pP(t,s.c,s.f),$async$SU)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e2w(u,d),"Preparing QR\u2026"),$async$SU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SU,w)},
akg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e2x(),A.U(t).k("O<1,m>")).fC(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2y(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SU(r),$async$akg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akg,w)},
ak9(d){return this.cCs(d)},
cCs(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ak9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2Y(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2q(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ak9)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Ty(d)
break
case"qr":u.SU(A.a([d],y.r))
break
case"send_my_code":u.cm7(A.a([d],y.r))
break
case"save":u.ajx(d)
break
case"delete":u.JS(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ak9,w)},
YW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e1W(),A.U(t).k("O<1,m>")).fC(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e1X(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pP(t,s.c,s.f),$async$YW)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e1Y(u,r),"Preparing file\u2026"),$async$YW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YW,w)},
aiF(d){return this.ct9(d)},
ct9(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hP9(d,!1),$async$aiF)
case 3:s=f
r=s==null
q=B.a8L(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiF,w)},
ahF(){var x=0,w=A.j(y.H),v=this,u
var $async$ahF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h33(u,v.a.c),$async$ahF)
case 2:return A.h(null,w)}})
return A.i($async$ahF,w)},
bHX(){B.hO6(!1,new B.e1S(this,null))
return},
K9(d,e){return this.cm8(d,e)},
b4y(d){return this.K9(null,d)},
cm7(d){return this.K9(d,null)},
cm8(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$K9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e2d(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y1.cq().apT(!0,C.a38,!1),$async$K9)
case 10:r=g
if(r==null||J.cv(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e2e(l,s,r),"Preparing\u2026"),$async$K9)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.am.$1("[doc share send my code pick] "+A.v(q))
s.iq("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iq("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bHY(p,l,e,s.a.c),$async$K9)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$K9,w)},
Jd(d){return this.c42(d)},
c42(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i3q(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4y(t),$async$Jd)
case 8:x=6
break
case 7:u.iq("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iq("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uv(new B.e27(u,d),"Receiving video\u2026"),$async$Jd)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e28(u,d),"Receiving\u2026"),$async$Jd)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jd,w)},
F2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DV()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiF(t),$async$F2)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jd(s),$async$F2)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cc(A.ec(new B.e2i(u),!1,null,y.N)),$async$F2)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$F2)
case 10:x=1
break
case 9:x=11
return A.b(u.Jd(C.a.i(r)),$async$F2)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F2,w)},
ajx(d){return this.cyu(d)},
cyu(d){var x=0,w=A.j(y.H),v=this
var $async$ajx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e2h(v,d),"Saving\u2026"),$async$ajx)
case 2:return A.h(null,w)}})
return A.i($async$ajx,w)},
JS(d){return this.bQB(d)},
bQB(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lC(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JS)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgg(t),$async$JS)
case 6:case 5:s=d.a
x=7
return A.b(B.FC(u.a.c,s),$async$JS)
case 7:u.r.X(0,s)
x=8
return A.b(u.uu(),$async$JS)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JS,w)},
akm(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2Y(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2C(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akm)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahF()
break
case"import":u.adI()
break}case 1:return A.h(v,w)}})
return A.i($async$akm,w)},
cdF(d){var x=d.c
if(C.a.Y(x,"video/")||d.mQ(D.nh))return C.rj
if(C.a.Y(x,"image/")||d.mQ(D.Tj))return C.vp
if(C.a.q(x,"pdf"))return T.Iz
return D.arT},
B(d){var x,w,v=this,u=null,t=B.a2Y(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IM,u,u,u,new B.e2N(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c1p,u,u,u,v.e?u:v.gclP(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gczZ()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bWt:E.ash,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a53,u,u,u,v.e?u:v.gcdG(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p0,u,u,u,v.e?u:v.gb5F(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3e,u,u,u,v.e?u:new B.e2O(v),u,u,u,u,"More options",u))
q=A.eT(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lP(new B.e2P(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.ds(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.ds(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jD(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aC_(C.jE,s,!0,t,w?u:v.gcCW(),u),1)
x.push(new A.D(D.bHj,A.lz(new B.e2Q(),A.A(A.a([s,C.ar,A.E(new B.aC_(C.tC,"Export",!1,t,w?u:v.gbUt(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cm,C.iL,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bh7(t,v.e?u:v.gb5F(),u)
else s=A.kG(!0,u,u,new B.e2R(v,t),s,u,D.bHa,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aC_.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.tr,t,new A.ba(s,C.a1),t,t,t)
return A.dc(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tr,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.en(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fh,t,t,t),u.r,v)}}
B.bh7.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dfj(),new A.D(E.a2f,A.x(A.a([A.lz(new B.dfk(),A.p(x,A.W(C.zU,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ei,C.hx,x,x,new A.bq(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.dc(C.p0,x,D.hcZ,this.d,A.bp(C.aD,x,x,x,C.c,x,C.Ph,x,new A.ba(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.M,0,C.p),x),C.cm,C.CW,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ae4.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mQ(D.nh))p=D.dAn
else{p=C.a.Y(p,"image/")||i.mQ(D.Tj)
n=y.O
p=p?A.a([C.cU,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasf()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.nh))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.fZ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cl))
if(!(!o||i.mQ(D.nh)))l.push(A.heD(C.aD,!1,j,j,j,!1,j,j,new B.dfG(k),j,j,new A.ba(A.n(5),C.a1),j,j,!1,u))
x=A.W(C.oW,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cl))
return A.lz(new B.dfH(),new A.D(C.e8,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1I,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cm,h,new A.bf("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_T.prototype={
S(){return new B.aC4()},
gd6(){return this.c}}
B.aC4.prototype={
a_(){this.a3()
this.yH()},
t(){B.i3F(this.e)
this.a2()},
yH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t6(o.c,o.d),$async$yH)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i3I(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i3H(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dfD(s))
x=1
break}s.l(new B.dfE(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dfF(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yH,w)},
a3w(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t6(t.c,t.d),$async$a3w)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fwC)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajD(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3w)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3w,w)},
c3W(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kW(u,C.z,v,new B.dfB(w,t),C.hd,C.dF,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h4(t,C.z,v,new B.dfC(w),C.hd,C.dF,!0,v,!1,v,v)
else return C.bL
return A.vg(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2Y(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DY,u,u,u,v.gb9t(),u,u,u,u,"Share / save",u))
r=A.eT(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gl
else{q=v.r
if(q!=null)t=new A.D(C.eG,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eG,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dc(C.DY,u,D.fVV,v.gb9t(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.M,0,C.p),u)
t=p}else t=v.c3W()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_Q.prototype={
S(){return new B.aC1(A.akB(),C.bG,C.bG)},
gd6(){return this.c}}
B.aC1.prototype={
a_(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fE(w,A.a5(w).k("fE<1>")).iF(new B.dfg(v))
x.gd_t().iF(new B.dfh(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fE(x,A.a5(x).k("fE<1>"))}if(x==null)x=C.bez
x.iF(new B.dfi(v))
v.yH()},
yH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t6(p.c,p.d),$async$yH)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.df9(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a5a(r,s.a.d.c)),$async$yH)
case 8:if(s.c==null){x=1
break}s.l(new B.dfa(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dfb(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yH,w)},
a0e(){var x=0,w=A.j(y.H),v=this,u
var $async$a0e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0e)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0e)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0e,w)},
aWH(d){var x=d.a
return C.a.b0(C.o.v(C.o.ap(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ap(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2Y(d),m=C.o.ap(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eT(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gl
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bXr,C.f,o,o,new A.o(o,o,o,A.n(24),o,N.Rf,C.m),o,88,o,o,o,o,o,88)
t=A.ld(C.aD,o,o,m,0,new B.dfc(p),C.o.D(C.o.ap(p.w.a,1000),0,m))
x=A.c(p.aWH(p.w)+" / "+p.aWH(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.ft0,o,o,o,o,o,o)
r=p.f
q=A.W(r?L.vs:C.h_,o,o,o,o,o)
x=A.x(A.a([u,C.lj,t,x,C.dc,A.dc(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcdJ(),s)],y.p),C.l,o,C.e,C.M,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.r5,x,o),o,o,o),o,!1,!1,o,o)}}
B.QY.prototype={
S(){return new B.aC7()},
gd6(){return this.c}}
B.aC7.prototype={
a_(){this.a3()
this.QL()},
QL(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QL=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hgT(o.c,o.d,new B.dfU(s)),$async$QL)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dfV(s))
x=1
break}s.e=r
q=R.irj(r)
if(q==null){s.l(new B.dfW(s))
x=1
break}s.d=q
q.aU(0,s.gb4m())
x=8
return A.b(q.iV(0).de(0,C.nT),$async$QL)
case 8:if(s.c==null){x=1
break}s.l(new B.dfX(s))
x=9
return A.b(q.qu(0),$async$QL)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dfY(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QL,w)},
ck1(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dfZ(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DO(0,x.gb4m())
w=x.d
if(w!=null)w.t()
B.iBz(x.e)
x.a2()},
ag_(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2o(u.c,u.d),$async$ag_)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ag_,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2Y(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eT(A.a([A.aI(t,t,t,t,C.o9,t,t,t,u.gcdD(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iz(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gl
else{q=u.r
if(q!=null)s=new A.D(C.eG,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ak1(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.B_(s,t),A.aA(t,A.xL(A.p(t,A.W(q?L.vs:C.h_,C.c,t,t,t,48),C.f,t,t,new A.o(C.b7,t,t,v,t,t,C.m),t,t,t,t,C.bQ,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dg0(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_V.prototype={
S(){return new B.aC5(new A.cx(null,y.A))}}
B.aC5.prototype={
gcMc(){var x,w,v=this.a
if(v.e!==D.UI)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcLN(){var x,w,v=this.a
if(v.e!==D.AT)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a3()
x=v.gcMc()
if(x!=null){v.RV(x)
v.e=A.d2(X.CY,new B.dfQ(v,x))}w=v.gcLN()
if(w!=null){v.RU(w)
v.f=A.d2(C.fB,new B.dfR(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RU(d){return this.crk(d)},
crk(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arM(d),$async$RU)
case 3:t=f
x=4
return A.b(B.cgz(d),$async$RU)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfI(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
RV(d){return this.crl(d)},
crl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h3N(d),$async$RV)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFJ(t),$async$RV)
case 4:if(u.c==null){x=1
break}u.l(new B.dfJ(u))
u.c.K(y.q).f.T(D.aWq)
case 1:return A.h(v,w)}})
return A.i($async$RV,w)},
gc9q(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcdE(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3g(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DV()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fzN)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cc(A.ec(new B.dfK(),!1,null,y.N)),$async$a3g)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFJ(s),$async$a3g)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aWq)
case 1:return A.h(v,w)}})
return A.i($async$a3g,w)},
abA(d){return this.bOf(d)},
bOf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fL(new A.fA(C.d.aL(t,", "))),$async$abA)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abA,w)},
afY(d){return this.bNY(d)},
bNY(d){var x=0,w=A.j(y.H),v=this
var $async$afY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fL(new A.fA(v.a.c)),$async$afY)
case 2:if(d.e!=null)d.K(y.q).f.T(D.fx5)
return A.h(null,w)}})
return A.i($async$afY,w)},
a3a(d){return this.cyw(d)},
cyw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqH(s.d,4),$async$a3a)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_doc_share_qr.png"),$async$a3a)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3a,w)},
gb_6(){var x,w=this.a
if(w.e!==D.K_)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abx(d){return this.bO8(d)},
bO8(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_6()
if(t==null){x=1
break}x=3
return A.b(A.fL(new A.fA(C.a.Y(t,"http")?t:"N2|"+t)),$async$abx)
case 3:if(d.e!=null)d.K(y.q).f.T(D.fyM)
case 1:return A.h(v,w)}})
return A.i($async$abx,w)},
afZ(){var x=0,w=A.j(y.H),v=this,u
var $async$afZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WI(),$async$afZ)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afZ,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2Y(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.K_&&i!==D.UI&&i!==D.AT
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eT(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.K_||t===D.UI||t===D.AT?l:A.aI(l,l,l,l,C.lA,l,l,l,m.gb2d(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.qs(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gc9q(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.K_){t=C.aD.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.O,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lX,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcdE(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c7i,D.h4F,new B.dfL(m,d),l)],p))}if(m.a.e===D.K_&&m.gb_6()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c3A,D.h1d,new B.dfM(m,d),l)],p))
if(m.a.e===D.AT){x=(m.w?C.dQ:C.aD).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a9(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.O,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gp:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lX,l,l,l)],p))}if(m.a.e===D.UI){x=(m.r?C.dQ:C.aD).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.O,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gp:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lX,l,l,l),C.af,A.dc(D.bZW,l,D.h7P,m.gcyT(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.p8(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b9,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(K.DW,l,C.X7,new B.dfN(m,d),l),1),C.ar,A.E(A.dc(C.Ag,l,C.adh,new B.dfO(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.O,new A.a6(1/0,l,A.bI(W.Bx,l,m.gb2d(),A.bp(C.aN,l,l,l,l,C.hr,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dfP(),y.C)}}
B.ae2.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.p(x,A.qs(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.M,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.eh(A.a([A.bI(C.By,x,new B.df8(d),x)],u),x,x,C.nC,v,x,x,x,x,D.fUS,x)}}
B.a_P.prototype={
S(){return new B.aC0(A.A8(C.z8,C.ou,C.vE))}}
B.aC0.prototype={
t(){this.d.t()
this.a2()},
aA0(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a8(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eT(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h1L,x,x,x,1,x,!0),C.v,A.A7(this.d,C.bX,this.gaA_()),x,!1,!1,x,x)}}
B.a_W.prototype={
S(){return new B.aC6(A.A8(C.z8,C.ou,C.vE))},
gd6(){return this.c}}
B.aC6.prototype={
c5_(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ai1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N_("text/plain"),$async$ai1)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fzH)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ai1,w)},
aco(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aco=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hP9(p,!0),$async$aco)
case 3:t=e
p=t==null
s=B.a8L(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fwc)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$aco,w)},
t(){this.d.t()
this.a2()},
aA0(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c5_(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.atk,v,v,v,w.gbTX(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5a,v,v,v,w.gcoD(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eT(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.vl:S.Qs,v,v,v,v,v),v,v,v,new B.dfT(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h8L,v,v,v,1,v,!0)
u=A.A7(w.d,C.bX,w.gaA_())
x=A.n(20)
return A.c5(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eJF],s),v),v,!1,!1,v,v)}}
B.bh8.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pF
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pF:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2l,A.A(A.a([u,C.bb,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.W(C.eM,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abc.prototype={
a8(){return"RTCDataChannelState."+this.b}}
B.PH.prototype={
a8(){return"RTCSignalingState."+this.b}}
B.YV.prototype={
a8(){return"RTCIceGatheringState."+this.b}}
B.PG.prototype={
a8(){return"RTCPeerConnectionState."+this.b}}
B.G7.prototype={
a8(){return"RTCIceConnectionState."+this.b}}
B.cuy.prototype={}
B.G6.prototype={}
B.abb.prototype={}
B.awk.prototype={}
B.YW.prototype={}
var z=a.updateTypes(["ay<~>()","P(jS)","m(jS)","Wz(Z)","~()","a_S(Z)","F(F,jS)","QY(Z)","~(lH)","cm(G6)","ay<jS?>(@)","Wx(Z)","WB(Z)","D(jS)","jS(@)","a9<m,@>(jS)","a_R(Z)","Wy(Z)","a_T(Z)","a_Q(Z)","a_V(Z)","ae2(Z)","ai<jS>()","a_W(Z)","ae4(Z,F)","a_P(Z)","a9<m,aE>(jS)","cm(YV)","cm(abb)","ay<cm>(G6)"])
B.cuu.prototype={
$1(d){var x=this.a
x.x=D.aT7
x.y.I(0,D.aT7)},
$S:75}
B.cuv.prototype={
$1(d){var x=this.a
x.x=D.aT6
x.y.I(0,D.aT6)},
$S:75}
B.cuw.prototype={
$1(d){var x=this.a
x.ajp(A.aik(d.data)).bE(new B.cut(x),y.b)},
$S:75}
B.cut.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cux.prototype={
$1(d){},
$S:75}
B.cuA.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i8z(d.channel))},
$S:17}
B.cuB.prototype={
$1(d){},
$S:17}
B.cuC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ist(w.iceConnectionState)
x.cx=w
if($.hqH())switch(w.a){case 0:x.cy=D.aTc
break
case 1:x.cy=D.aTd
break
case 3:x.cy=D.aTe
break
case 5:x.cy=D.aTa
break
case 6:x.cy=D.aTb
break
case 7:x.cy=D.aaT
break
default:break}},
$S:108}
B.cuD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.isu(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.cuE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iD7(w.signalingState)},
$S:108}
B.cuF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iBg(w.connectionState)},
$S:108}
B.cuG.prototype={
$1(d){},
$S:108}
B.cuH.prototype={
$1(d){},
$S:17}
B.fDi.prototype={
$1(d){var x=y.F.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wR.q(x.objectStoreNames,"blobs")
if(!w)C.wO.Gz(x,"blobs")},
$S:168}
B.h2S.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xu.fv(this.b)
$.eU.mJ()
this.c.$1(d)},
$S:448}
B.h2U.prototype={
$1(d){return this.a.$1(B.ihX(this.b,this.c))},
$S:33}
B.h2T.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h2R.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h36.prototype={
$1(d){var x=this
return B.hDe(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h37.prototype={
$1(d){var x=this
return B.hDe(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fFZ.prototype={
$1(d){var x=this
return B.cga(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dfr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dfo.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cga(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dfq.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cga(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dfp.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cga(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dft.prototype={
$4(d,e,f,g){var x=null
return A.kc(A.A(A.a([A.aI(x,x,x,x,D.bYx,x,x,x,new B.dfs(d),x,x,x,x,x,x),A.E(A.FT(D.T1,!0,x,!1,C.a4d,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.T1,x,g,C.aoX,0,e,f)},
$C:"$4",
$R:4,
$S:410}
B.dfs.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fHY.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f0,y.m).w,t=this.a,s=t?C.iT:C.c,r=A.n(28),q=A.p(v,D.bAU,C.f,v,v,D.b9Q,v,v,v,v,D.aoK,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c21,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.D9,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atA,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dW(C.dr,new B.fHW(d),v),1),C.ar,A.E(A.bI(D.h0c,v,new B.fHX(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.M,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HA,v,v,v,v),v)},
$S:62}
B.fHW.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fHX.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fxm)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aEJ(v,x))},
$S:0}
B.fIr.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f0,y.m).w,u=x.a,t=u?C.iT:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bAK,C.f,w,w,D.bbk,w,w,w,w,D.aoK,w,w,1/0),new A.D(C.D9,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hmi(u,"Organization name",C.I9,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hmi(u,"Access code",C.mt,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hmi(u,"Member password",C.DV,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bI(D.h8S,w,new B.fIq(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hr,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.M,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HA,w,w,w,w),w)},
$S:62}
B.fIq.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fxr)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aHW(u,x,w))},
$S:0}
B.cg1.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a2(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cG(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.w6(p,null).de(0,C.a1i),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ca(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CA(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.am.$1("[doc share lan web] "+A.v(r)+": "+A.v(m))
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
B.cg7.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cg8.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cg9.prototype={
$1(d){return d.b},
$S:z+2}
B.cg3.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cg4.prototype={
$1(d){return d.b},
$S:z+2}
B.cg2.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cg5.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cg6.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h34.prototype={
$1(d){return new B.Wx(this.a,null)},
$S:z+11}
B.h35.prototype={
$1(d){return new B.WB(this.a,this.b,this.c,null)},
$S:z+12}
B.e1L.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e2U.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e2V.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e2W.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e2T(x,d))},
$S:2}
B.e2T.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e2X.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e2Y.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e2Z.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e3_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e30.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e31.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e34.prototype={
$3(d,e,f){return A.d0(A.dR(f,new A.r(0,(1-e)*14)),e)},
$S:100}
B.e32.prototype={
$1(d){var x=this.a
return x.f?null:x.a0d()},
$S:2}
B.e33.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mQ(D.Tj))s=C.vp
else s=C.a.Y(s,"video/")||d.mQ(D.nh)?C.rj:D.arT
x=this.b.a
w=y.p
return new A.D(C.kg,A.A(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasf(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e1M.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e1N.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgb.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:99}
B.cgc.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:99}
B.h45.prototype={
$2(d,e){return e===this.a},
$S:268}
B.fAg.prototype={
$1(d){return J.k(d)},
$S:15}
B.fGa.prototype={
$1(d){var x=this.b
B.ifR(C.HY.ga8_(this.a)).bE(x.gCn(x),y.H)},
$S:134}
B.fGb.prototype={
$1(d){return this.a.dg(0,null)},
$S:134}
B.fGc.prototype={
$0(){return null},
$S:12}
B.cgq.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fGd.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).ab().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jS(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fKu.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fEm.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fEn.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cgv.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nh)},
$S:z+1}
B.h8l.prototype={
$1(d){return new B.a_R(this.a,null)},
$S:z+16}
B.dfn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.h_()},
$S:7}
B.dfl.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.dfm.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e2S.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2o()},
$S:11}
B.e2f.prototype={
$0(){var x=J.bJ3(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2g.prototype={
$0(){var x=J.bJ3(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1P.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1O(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH3(this.c)}},
$S:0}
B.e1O.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1Q.prototype={
$0(){var x=J.bJ3(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1V.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1U(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH3(this.c)}},
$S:0}
B.e1U.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2G.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e2H.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e2c.prototype={
$1(d){return new B.Wy(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e29.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IX(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WC(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a2(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2y(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1T.prototype={
$1(d){this.a.adM(d,"No files selected.","Added")},
$S:448}
B.e2k.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a5(0)
else w.u(0,new A.O(x,new B.e2j(),A.U(x).k("O<1,m>")))},
$S:0}
B.e2j.prototype={
$1(d){return d.a},
$S:z+2}
B.e1Z.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y1.cq().d1s(C.a38,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jX(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ac(j)
$.am.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.iq("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iq("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arL(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cv(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e2D.prototype={
$1(d){return new B.QY(this.a.a.c,this.b,null)},
$S:z+7}
B.e2E.prototype={
$1(d){return new B.a_T(this.a.a.c,this.b,null)},
$S:z+18}
B.e2F.prototype={
$1(d){return new B.a_Q(this.a.a.c,this.b,null)},
$S:z+19}
B.e2a.prototype={
$1(d){return new B.QY(this.a.a.c,this.b,null)},
$S:z+7}
B.e2b.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2w.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IX(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8N(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cuR(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("O<1,m>")
r=new A.O(new A.O(t,new B.e2s(p),r),new B.e2t(),r.k("O<aj.E,m>")).c0(0,new B.e2u())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cc(A.ec(new B.e2v(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pO(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WI(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2s.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e2r(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e2r.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2t.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e2u.prototype={
$1(d){return d.length!==0},
$S:3}
B.e2v.prototype={
$1(d){var x=this.a
return new B.a_V(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e2x.prototype={
$1(d){return d.a},
$S:z+2}
B.e2y.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e2q.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kI,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasf(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mQ(D.nh)?C.tH:C.o7
p=!x||p.mQ(D.nh)?"Play video":"View"
return new A.bP(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.ln,v,v,C.m),C.bm,A.bo(!0,new A.D(C.D5,A.x(A.a([q,o,t,C.aA,B.a_U(!1,u,!1,w,p,new B.e2l(d),v),B.a_U(!1,u,!1,C.jE,"Share via QR",new B.e2m(d),"Letters/numbers QR code"),B.a_U(!1,u,!1,D.a4i,"Send to their Code",new B.e2n(d),"Enter someone else's personal code"),B.a_U(!1,u,!1,C.hO,"Download / save",new B.e2o(d),v),C.ak,B.a_U(!1,u,!0,C.ep,"Delete",new B.e2p(d),v)],y.p),C.am,v,C.e,C.M,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:699}
B.e2l.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e2m.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e2n.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e2o.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e2p.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e1W.prototype={
$1(d){return d.a},
$S:z+2}
B.e1X.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e1Y.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8P(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hz(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pO(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1S.prototype={
$1(d){var x=this.a
x.uv(new B.e1R(x,d,this.b),"Preparing\u2026")},
$S:448}
B.e1R.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WC(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cv(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bHY(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2d.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e2e.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aS(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hgW(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e27.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hx(new B.e23(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e24(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e25(s))
case 5:x=8
return A.b(r.b.ic(0,C.Ht,new B.e26()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a2(t)
if(q.gar(t)){s.iq("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uu(),$async$$0)
case 9:s.iq("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e23.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e20(x,d,e))},
$S:231}
B.e20.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e24.prototype={
$1(d){return new B.ae2(this.a.a,null)},
$S:z+21}
B.e25.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e26.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e28.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jx(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8D(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4y(B.Jx(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arL(new B.e21(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cv(r)){if(B.hgV(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cH(r)
p=o.eS(r,new B.e22()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e21.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e2_(x,d,e))},
$S:231}
B.e2_.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e22.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nh)},
$S:z+1}
B.e2i.prototype={
$1(d){return new B.a_W(this.a.a.c,null)},
$S:z+23}
B.e2h.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2o(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2C.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.o(v[2],x,new A.bE(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.ln,x,x,C.m),C.bm,A.bo(!0,new A.D(C.D5,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kI,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.a_U(!0,w,!1,C.mt,"My Code",new B.e2z(d),"Your personal code & QR \u2014 others send docs to you"),B.a_U(!1,w,!1,D.a4i,"Send to their Code",new B.e2A(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_U(!1,w,!1,Y.A8,"Import backup",new B.e2B(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.M,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:699}
B.e2z.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e2A.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bHX()},
$S:0}
B.e2B.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e2P.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JH(D.T1,x,C.a4d,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gG(D.T1).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:653}
B.e2N.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e2O.prototype={
$0(){this.a.akm()
return null},
$S:0}
B.e2Q.prototype={
$3(d,e,f){return A.d0(A.dR(f,new A.r(0,(1-e)*10)),e)},
$S:100}
B.e2R.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ae4(e,w,v,this.b,x.e,x.cdF(w),new B.e2J(x,w),new B.e2K(x,v,w),new B.e2L(x,w),new B.e2M(x,w),null)},
$S:z+24}
B.e2J.prototype={
$0(){this.a.ahz(this.b)
return null},
$S:0}
B.e2K.prototype={
$0(){var x=this.a
return x.l(new B.e2I(x,this.b,this.c))},
$S:0}
B.e2I.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2L.prototype={
$0(){this.a.P1(this.b)
return null},
$S:0}
B.e2M.prototype={
$0(){this.a.ak9(this.b)
return null},
$S:0}
B.dfj.prototype={
$3(d,e,f){return A.d0(A.dR(f,new A.r(0,(1-e)*18)),e)},
$S:100}
B.dfk.prototype={
$3(d,e,f){return A.e7(C.z,f,e,null,null)},
$S:113}
B.dfH.prototype={
$3(d,e,f){return A.d0(A.dR(f,new A.r(0,(1-e)*14)),e)},
$S:100}
B.dfG.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.dfD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dfE.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dfF.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dfB.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h4(w,C.z,x,new B.dfz(this.a),C.hd,C.dF,!0,x,!1,x,x)
$.aU.U$.push(new B.dfA(this.a))
return C.bL},
$S:148}
B.dfz.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfx(this.a))
return C.bL},
$S:206}
B.dfx.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfu(x))},
$S:7}
B.dfu.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfw(x))},
$S:7}
B.dfw.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfC.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfy(this.a))
return C.bL},
$S:206}
B.dfy.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfv(x))},
$S:7}
B.dfv.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfg.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dff(x,d))},
$S:1745}
B.dff.prototype={
$0(){return this.a.f=this.b===C.w_},
$S:0}
B.dfh.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfe(x,d))},
$S:7}
B.dfe.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dfi.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfd(x,d))},
$S:7}
B.dfd.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.df9.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dfa.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dfb.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dfc.prototype={
$1(d){return this.a.d.NX(0,A.dv(0,0,0,C.i.R(d),0,0))},
$S:6}
B.dfU.prototype={
$0(){var x=this.a.a
return B.t6(x.c,x.d)},
$S:1746}
B.dfV.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dfW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dfX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dfY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dfZ.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dg0.prototype={
$0(){var x=this.a
x.l(new B.dg_(x))},
$S:0}
B.dg_.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qu(0)},
$S:0}
B.dfQ.prototype={
$1(d){return this.a.RV(this.b)},
$S:11}
B.dfR.prototype={
$1(d){return this.a.RU(this.b)},
$S:11}
B.dfI.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfJ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfK.prototype={
$1(d){return D.hKK},
$S:z+25}
B.dfP.prototype={
$2(d,e){if(d)B.WI()},
$S:130}
B.dfL.prototype={
$0(){return this.a.abA(this.b)},
$S:0}
B.dfM.prototype={
$0(){return this.a.abx(this.b)},
$S:0}
B.dfN.prototype={
$0(){return this.a.afY(this.b)},
$S:0}
B.dfO.prototype={
$0(){return this.a.a3a(this.b)},
$S:0}
B.df8.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dfT.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qx(),$async$$0)
case 2:u.l(new B.dfS(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dfS.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cgx.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nh)},
$S:z+1}
B.cgy.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cgw.prototype={
$2(d,e){return this.bop(d,e)},
bop(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WJ(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1747}
B.fK6.prototype={
$1(d){if(d===D.aaS&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fK7.prototype={
$0(){},
$S:12}
B.fKI.prototype={
bq0(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fxh(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a5(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hyf(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bq0(d,e)},
$S:547}
B.fKH.prototype={
$1(d){var x=this
d.b=new B.fKG(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fKG.prototype={
$1(d){return this.bq_(d)},
bq_(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2p(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.V.aP(0,n,null)
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
return A.b(B.fxh(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a5(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ac(j)
$.am.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8M(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aC3.prototype,"gclp","Ru",0)
x(v,"gcmi","Ka",0)
x(v,"gclO","yS",0)
x(v=B.aG5.prototype,"gcdz","afW",0)
x(v,"gcdA","a0c",0)
x(v,"gcBq","ajR",0)
x(v=B.aG8.prototype,"gcdB","a0d",0)
x(v,"gcBr","a3x",0)
x(B.aG6.prototype,"gcdC","afX",0)
x(B.aC2.prototype,"gcdH","cdI",4)
x(v=B.aG7.prototype,"gclP","a1q",0)
x(v,"gczZ","cA_",4)
x(v,"gb5F","aBv",0)
x(v,"gcCW","akg",0)
x(v,"gbUt","YW",0)
x(v,"gcdG","F2",0)
x(B.aC4.prototype,"gb9t","a3w",0)
x(B.aC1.prototype,"gcdJ","a0e",0)
x(v=B.aC7.prototype,"gb4m","ck1",4)
x(v,"gcdD","ag_",0)
x(v=B.aC5.prototype,"gcyT","a3g",0)
x(v,"gb2d","afZ",0)
w(B.aC0.prototype,"gaA_","aA0",8)
x(v=B.aC6.prototype,"gcoD","ai1",0)
x(v,"gbTX","aco",0)
w(v,"gaA_","aA0",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cuy,B.abb,B.awk,B.aEJ,B.aHW,B.jS,B.adL,B.bzE,B.G6,B.YW])
w(B.cuz,B.cuy)
w(B.b7z,B.abb)
x(A.fO,[B.cuu,B.cuv,B.cuw,B.cut,B.cux,B.cuA,B.cuB,B.cuC,B.cuD,B.cuE,B.cuF,B.cuG,B.cuH,B.fDi,B.h2S,B.h2U,B.h2T,B.h36,B.h37,B.fFZ,B.dfo,B.dfq,B.dfp,B.dft,B.fHY,B.fIr,B.cg1,B.cg8,B.cg9,B.cg4,B.cg2,B.cg5,B.cg6,B.h34,B.h35,B.e2W,B.e34,B.e32,B.e33,B.fAg,B.fGa,B.fGb,B.cgq,B.fGd,B.fKu,B.fEm,B.fEn,B.cgv,B.h8l,B.dfn,B.dfl,B.e2S,B.e1O,B.e1U,B.e2c,B.e1T,B.e2j,B.e2D,B.e2E,B.e2F,B.e2a,B.e2s,B.e2r,B.e2t,B.e2u,B.e2v,B.e2x,B.e2y,B.e2q,B.e1W,B.e1X,B.e1S,B.e2d,B.e24,B.e22,B.e2i,B.e2C,B.e2P,B.e2Q,B.dfj,B.dfk,B.dfH,B.dfG,B.dfB,B.dfz,B.dfx,B.dfA,B.dfC,B.dfy,B.dfg,B.dfh,B.dfi,B.dfc,B.dfQ,B.dfR,B.dfK,B.cgx,B.cgy,B.fK6,B.fKH,B.fKG])
w(B.b7A,B.awk)
x(A.hR,[B.h2R,B.dfr,B.dfs,B.fHW,B.fHX,B.fIq,B.e1L,B.e2U,B.e2V,B.e2T,B.e2X,B.e2Y,B.e2Z,B.e3_,B.e30,B.e31,B.e1M,B.e1N,B.fGc,B.dfm,B.e2f,B.e2g,B.e1P,B.e1Q,B.e1V,B.e2G,B.e2H,B.e29,B.e2k,B.e1Z,B.e2b,B.e2w,B.e2l,B.e2m,B.e2n,B.e2o,B.e2p,B.e1Y,B.e1R,B.e2e,B.e27,B.e20,B.e25,B.e26,B.e28,B.e2_,B.e2h,B.e2z,B.e2A,B.e2B,B.e2N,B.e2O,B.e2J,B.e2K,B.e2I,B.e2L,B.e2M,B.dfD,B.dfE,B.dfF,B.dfu,B.dfw,B.dfv,B.dff,B.dfe,B.dfd,B.df9,B.dfa,B.dfb,B.dfU,B.dfV,B.dfW,B.dfX,B.dfY,B.dfZ,B.dg0,B.dg_,B.dfI,B.dfJ,B.dfL,B.dfM,B.dfN,B.dfO,B.df8,B.dfT,B.dfS,B.fK7])
x(A.kP,[B.ae3,B.Oz,B.abc,B.PH,B.YV,B.PG,B.G7])
x(A.af,[B.a_S,B.Wx,B.WB,B.Wy,B.a_R,B.Wz,B.a_T,B.a_Q,B.QY,B.a_V,B.a_P,B.a_W])
x(A.ah,[B.aC3,B.aG5,B.aG8,B.aG6,B.aC2,B.aG7,B.aC4,B.aC1,B.aC7,B.aC5,B.aC0,B.aC6])
x(A.aw,[B.aex,B.aC_,B.bh7,B.ae4,B.ae2,B.bh8])
x(A.ie,[B.cg7,B.cg3,B.cgb,B.cgc,B.h45,B.e23,B.e21,B.e2R,B.dfP,B.cgw,B.fKI])
x(A.jl,[B.bmE,B.bzg])})()
A.i0(b.typeUniverse,JSON.parse('{"b7z":{"abb":[]},"b7A":{"awk":[]},"a_S":{"af":[],"w":[]},"aC3":{"ah":["a_S"]},"aex":{"aw":[],"w":[]},"Wx":{"af":[],"w":[]},"WB":{"af":[],"w":[]},"aG5":{"ah":["Wx"]},"aG8":{"ah":["WB"]},"bmE":{"jl":[]},"Wy":{"af":[],"w":[]},"aG6":{"ah":["Wy"]},"a_R":{"af":[],"w":[]},"Wz":{"af":[],"w":[]},"ae4":{"aw":[],"w":[]},"a_T":{"af":[],"w":[]},"a_Q":{"af":[],"w":[]},"QY":{"af":[],"w":[]},"a_V":{"af":[],"w":[]},"ae2":{"aw":[],"w":[]},"a_P":{"af":[],"w":[]},"a_W":{"af":[],"w":[]},"aC2":{"ah":["a_R"]},"bzg":{"jl":[]},"aG7":{"ah":["Wz"]},"aC_":{"aw":[],"w":[]},"bh7":{"aw":[],"w":[]},"aC4":{"ah":["a_T"]},"aC1":{"ah":["a_Q"]},"aC7":{"ah":["QY"]},"aC5":{"ah":["a_V"]},"aC0":{"ah":["a_P"]},"aC6":{"ah":["a_W"]},"bh8":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.ar
return{J:x("mA"),k:x("MY()"),o:x("bl<m,m>"),F:x("qV"),g:x("ay<jS?>"),x:x("ay<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<m,P>>"),t:x("N<a9<m,@>>"),r:x("N<jS>"),w:x("N<+file,name(m9,m)>"),u:x("N<cX>"),s:x("N<m>"),E:x("N<jl>"),a:x("N<dB>"),p:x("N<w>"),Z:x("N<F>"),G:x("bm"),A:x("cx<ah<af>>"),n:x("ai<jS>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bu<m,m>"),P:x("a9<m,@>"),f:x("a9<@,@>"),m:x("hW"),e:x("iHc"),af:x("Fj"),U:x("jS"),b:x("cm"),C:x("aE"),aK:x("wT"),ab:x("G6"),br:x("awk"),v:x("YW"),N:x("m"),X:x("bq<G>"),Q:x("lX"),D:x("dB"),aw:x("bf<m>"),cd:x("X<a9<m,@>>"),c7:x("w"),ch:x("c7<ai<jS>>"),aW:x("c7<dB?>"),aY:x("c7<~>"),cx:x("ae3"),b1:x("bn<ai<jS>>"),cf:x("bn<dB?>"),d4:x("bn<~>"),c4:x("aEJ"),bG:x("aHW"),q:x("kx"),B:x("q4<G6>"),c6:x("q4<abc>"),y:x("P"),i:x("G"),z:x("@"),S:x("F"),aQ:x("bm?"),_:x("ai<jS>?"),aL:x("ai<@>?"),h:x("a9<m,@>?"),l:x("jS?"),R:x("aE?"),c:x("YW?"),d:x("+answerQr,transfer(m,ay<ai<jS>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,Oz,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dB?"),cm:x("adL?"),bk:x("aEJ?"),ag:x("aHW?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8b=new A.ax(C.aD,2,C.r,-1)
D.cc_=new A.a7(C.a5,C.a9,C.x,C.a6j,null,null)
D.b9Q=new A.o(null,null,null,C.mQ,null,D.cc_,C.m)
D.bbk=new A.o(null,null,null,C.mQ,null,E.IU,C.m)
D.ahw=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aj0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak2=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fVN=new A.C("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.h9Q=new A.C("Share the access code and member password with your team. They only sign in once.",null,H.Fz,null,null,null,null,null,null,null,null,null)
D.dqS=x([D.fVN,C.ak,D.h9Q],y.p)
D.bAA=new A.fs(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dqS,null)
D.heo=new A.C("Create your organization",null,C.fO,null,null,null,null,null,null,null,null,null)
D.h_o=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.Fz,null,null,null,null,null,null,null,null,null)
D.dJ4=x([D.heo,C.ak,D.h_o],y.p)
D.bAK=new A.fs(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJ4,null)
D.hau=new A.C("Team Member sign-in",null,C.fO,null,null,null,null,null,null,null,null,null)
D.h3m=new A.C("Enter the access code and password from your organization.",null,H.Fz,null,null,null,null,null,null,null,null,null)
D.dGD=x([D.hau,C.ak,D.h3m],y.p)
D.bAU=new A.fs(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGD,null)
D.bHa=new A.R(16,10,16,28)
D.bHj=new A.R(16,14,16,4)
D.bIB=new A.R(20,0,20,16)
D.bJ7=new A.R(20,8,20,16)
D.aoK=new A.R(24,22,24,20)
D.a4i=new A.a_(63394,"MaterialIcons",!1)
D.arT=new A.a_(63515,"MaterialIcons",!1)
D.bWt=new A.a_(983813,"MaterialIcons",!1)
D.bTC=new A.a_(62867,"MaterialIcons",!1)
D.bXr=new A.ae(D.bTC,44,C.c,null,null,null)
D.bYx=new A.ae(C.kk,null,C.ab,null,null,null)
D.bZW=new A.ae(C.jF,18,null,null,null,null)
D.c0O=new A.ae(D.a4i,26,C.c,null,null,null)
D.c1p=new A.ae(C.DL,null,null,null,null,null)
D.c21=new A.ae(C.DS,null,null,null,null,null)
D.c3e=new A.ae(A1.a4u,null,null,null,null,null)
D.c3A=new A.ae(C.i2,16,null,null,null,null)
D.c7i=new A.ae(C.tG,16,null,null,null,null)
D.bXJ=new A.ae(C.mt,null,null,null,null,null)
D.c8a=new A.eb(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2z=new A.ae(C.I9,null,null,null,null,null)
D.c8f=new A.eb(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2z,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bY4=new A.ae(C.DV,null,null,null,null,null)
D.c8q=new A.eb(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bY4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYx=x([C.fx,C.b5,C.aD],y.O)
D.cdX=new A.a7(C.ay,C.aC,C.x,D.cYx,null,null)
D.cXU=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.T1=x([C.fx,C.aD],y.O)
D.Tj=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nh=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAn=x([C.n_,C.aD],y.O)
D.evU={iceServers:0}
D.aNC={urls:0}
D.dN_=new A.bl(D.aNC,["stun:stun.l.google.com:19302"],y.o)
D.dMZ=new A.bl(D.aNC,["stun:stun1.l.google.com:19302"],y.o)
D.dfw=x([D.dN_,D.dMZ],A.ar("N<a9<m,m>>"))
D.dM5=new A.bl(D.evU,[D.dfw],A.ar("bl<m,@>"))
D.K_=new B.Oz(0,"lanDirect")
D.UH=new B.Oz(1,"cloudStash")
D.dZY=new B.Oz(2,"inlineInstant")
D.UI=new B.Oz(3,"webrtcLink")
D.AT=new B.Oz(4,"videoCloud")
D.h9P=new A.C("Receive file",null,C.nt,null,null,null,null,null,null,null,null,null)
D.cNr=x([E.atJ,C.aa,D.h9P],y.p)
D.fnR=new A.c3(C.aL,C.b9,C.h,C.l,null,C.p,null,0,D.cNr,null)
D.eDn=new A.D(C.cn,D.fnR,null)
D.fM2=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A0.Jp,null,null,null)
D.fWp=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fM2,null,C.K,null,null,null,null,null,null,null)
D.eCx=new A.D(C.zt,D.fWp,null)
D.bfV=new A.cl(C.z,null,null,D.eCx,null)
D.eJF=new A.cN(0,null,0,28,null,null,D.bfV,null)
D.eJZ=new B.abc(0,"RTCDataChannelConnecting")
D.aT6=new B.abc(1,"RTCDataChannelOpen")
D.aT7=new B.abc(3,"RTCDataChannelClosed")
D.eK_=new B.G7(0,"RTCIceConnectionStateNew")
D.eK0=new B.G7(1,"RTCIceConnectionStateChecking")
D.eK1=new B.G7(2,"RTCIceConnectionStateCompleted")
D.eK2=new B.G7(3,"RTCIceConnectionStateConnected")
D.eK3=new B.G7(4,"RTCIceConnectionStateCount")
D.eK4=new B.G7(5,"RTCIceConnectionStateFailed")
D.eK5=new B.G7(6,"RTCIceConnectionStateDisconnected")
D.aT8=new B.G7(7,"RTCIceConnectionStateClosed")
D.aT9=new B.YV(0,"RTCIceGatheringStateNew")
D.eK6=new B.YV(1,"RTCIceGatheringStateGathering")
D.aaS=new B.YV(2,"RTCIceGatheringStateComplete")
D.aaT=new B.PG(0,"RTCPeerConnectionStateClosed")
D.aTa=new B.PG(1,"RTCPeerConnectionStateFailed")
D.aTb=new B.PG(2,"RTCPeerConnectionStateDisconnected")
D.aTc=new B.PG(3,"RTCPeerConnectionStateNew")
D.aTd=new B.PG(4,"RTCPeerConnectionStateConnecting")
D.aTe=new B.PG(5,"RTCPeerConnectionStateConnected")
D.eK7=new B.PH(0,"RTCSignalingStateStable")
D.eK8=new B.PH(1,"RTCSignalingStateHaveLocalOffer")
D.eK9=new B.PH(2,"RTCSignalingStateHaveRemoteOffer")
D.eKa=new B.PH(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eKb=new B.PH(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTf=new B.PH(5,"RTCSignalingStateClosed")
D.ft0=new A.av(160,48)
D.bha=new A.fq(2,null,null,null,null,C.aD,null,null,null,null)
D.fuy=new A.a6(16,16,D.bha,null)
D.fZJ=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fw1=new A.b2(D.fZJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6s=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fw5=new A.b2(D.h6s,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hfs=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fwc=new A.b2(D.hfs,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZi=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fwC=new A.b2(D.fZi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haG=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWq=new A.b2(D.haG,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hc9=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fx5=new A.b2(D.hc9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgX=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxm=new A.b2(D.hgX,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.heS=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxr=new A.b2(D.heS,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hg7=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fye=new A.b2(D.hg7,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXT=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new A.b2(D.fXT,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8n=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fz6=new A.b2(D.h8n,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h12=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzD=new A.b2(D.h12,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hh1=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fzH=new A.b2(D.hh1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fY8=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzN=new A.b2(D.fY8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWM=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fA1=new A.b2(D.fWM,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTq=new A.C("NGMY DOC SHARE",null,C.aXQ,null,null,null,null,null,null,null,null,null)
D.fUS=new A.C("Show this to sender",null,C.iR,null,null,null,null,null,null,null,null,null)
D.fVV=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h_P=new A.C("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.h0c=new A.C("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.h1d=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h1L=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4F=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h7v=new A.C("Send to their Doc Share",null,C.nr,null,null,null,null,null,null,null,null,null)
D.h7P=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h89=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h8L=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8S=new A.C("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.h9g=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fh,null,null,null,null,null,null,null,null,null)
D.hcF=new A.C("Share files & videos\nwith a scan.",null,C.aXT,null,null,null,null,null,null,null,null,null)
D.hcZ=new A.C("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.hKK=new B.a_P(null)
D.aej=new B.ae3(0,"docShare")
D.aek=new B.ae3(1,"gate")
D.XL=new B.ae3(2,"gateNoIndividual")})();(function staticFields(){$.aQM=null
$.fuO=function(){var x=y.N
return A.S(x,x)}()
$.Hl=A.S(y.N,y.D)
$.ai8=A.S(y.N,A.ar("m9"))
$.Sn=A.S(y.N,y.D)
$.fvu=A.S(y.N,A.ar("adL"))
$.cgp=A.S(y.S,A.ar("bzE"))
$.hye=1
$.io5=null
$.io4=null
$.if9=null
$.hmu=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iHH","hRa",()=>new B.cuz())
x($,"iFB","hqH",()=>C.a.q(A.bv(A.bv(A.bv(A.HR(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["/TedwS27cAAQjJ6PyoI9QPVTQcg="]=a.current})($__dart_deferred_initializers__);