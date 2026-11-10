((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cp3:function cp3(){},
hQS(d){var x=null,w=new B.b5e(d,D.esp,new A.pA(x,x,y.c6),new A.pA(x,x,y.B))
w.bzR(d)
return w},
b5e:function b5e(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
coZ:function coZ(d){this.a=d},
cp_:function cp_(d){this.a=d},
cp0:function cp0(d){this.a=d},
coY:function coY(d){this.a=d},
cp1:function cp1(d){this.a=d},
hQT(d,e){var x=y.N
x=new B.b5f(d,e,A.U(x,y.e),A.U(x,y.z))
x.bzS(d,e)
return x},
b5f:function b5f(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cp4:function cp4(d){this.a=d},
cp5:function cp5(d){this.a=d},
cp6:function cp6(d){this.a=d},
cp7:function cp7(d){this.a=d},
cp8:function cp8(d){this.a=d},
cp9:function cp9(d){this.a=d},
cpa:function cpa(d){this.a=d},
cpb:function cpb(d){this.a=d},
h6g(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z7.Mi(x,"ngmy_doc_share_v1",new B.fqt(),1)},
hXr(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eH(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.ym(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cD.aL(d)
return x}catch(w){return v}return v},
RG(d,e){return B.ic2(d,e)},
ic2(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aOH
x=7
return A.b(o==null?$.aOH=B.h6g():o,$async$RG)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mQ(s,"blobs","readwrite")
C.j_.mn(J.mP(q,"blobs"),r,d)
x=8
return A.b(J.pJ(q),$async$RG)
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
return A.i($async$RG,w)},
RF(d){return B.ic1(d)},
ic1(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aOH
x=7
return A.b(o==null?$.aOH=B.h6g():o,$async$RF)
case 7:s=f
r=J.mQ(s,"blobs","readonly")
x=8
return A.b(C.j_.zG(J.mP(r,"blobs"),d),$async$RF)
case 8:q=f
x=9
return A.b(J.pJ(r),$async$RF)
case 9:o=B.hXr(q)
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
return A.i($async$RF,w)},
ahn(d){return B.ic0(d)},
ic0(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aOH
x=7
return A.b(p==null?$.aOH=B.h6g():p,$async$ahn)
case 7:s=f
r=J.mQ(s,"blobs","readwrite")
C.j_.G1(J.mP(r,"blobs"),d)
x=8
return A.b(J.pJ(r),$async$ahn)
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
fqt:function fqt(){},
hZR(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bpY(w,v))}return u},
hwx(d,e){var x,w={},v=A.aXh("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fOL(w,v,e)
C.wu.yD(v,"change",new B.fON(w,v,!1))
C.wu.yD(v,"cancel",new B.fOM(w))
$.eW.mt()
v.click()
A.bQ(C.ajh,new B.fOK(w),y.H)},
fOL:function fOL(d,e,f){this.a=d
this.b=e
this.c=f},
fON:function fON(d,e,f){this.a=d
this.b=e
this.c=f},
fOM:function fOM(d){this.a=d},
fOK:function fOK(d){this.a=d},
Dm(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Dm=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gcZ()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gU4()?3:4
break
case 3:x=5
return A.b(B.hrA(e,d,s,!0,!1,f,g,h,!1,i),$async$Dm)
case 5:x=1
break
case 4:x=6
return A.b(B.Rl(d,s,f,g,h,i),$async$Dm)
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
return A.b(B.IS(s,d),$async$Dm)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fm3(s,d),$async$Dm)
case 14:x=12
return A.b(r.hrA(q,p,o,n,m,l,k,j,a1,i),$async$Dm)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cd(A.dZ(new B.fP_(s,i,d,f,g,h),!1,null,y.H)),$async$Dm)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cd(A.dZ(new B.fP0(s,i,d,f,g,h),!1,null,y.H)),$async$Dm)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Dm,w)},
Rl(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Rl=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_Y(e),$async$Rl)
case 3:u=k
x=4
return A.b(B.apO(d,e,!1),$async$Rl)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IS(e,d),$async$Rl)
case 7:if(k){v=D.abd
x=1
break}x=8
return A.b(B.Vq(e),$async$Rl)
case 8:v=t?D.VM:D.abe
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b_W(d,e)){v=D.abd
x=1
break}x=11
return A.b(B.Vq(e),$async$Rl)
case 11:v=t?D.VM:D.abe
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h1h(d,e)){v=D.abd
x=1
break}x=14
return A.b(B.Vq(e),$async$Rl)
case 14:v=D.VM
x=1
break
case 13:v=t?D.VM:D.abe
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rl,w)},
fm3(d,e){var x=0,w=A.j(y.y),v
var $async$fm3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b_W(e,d)){v=!1
x=1
break}x=3
return A.b(B.b_Y(d),$async$fm3)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fm3,w)},
hrA(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cd(A.dZ(new B.fsY(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hmD(d,e,f,g,h,i,j){return new B.ZC(e,j,d,g,h,i,f,null)},
fuU(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fuU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.au()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bV(C.L,null,new B.fuX(A.P(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fuU)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuU,w)},
fvo(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fvo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.au()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bV(C.L,null,new B.fvq(A.P(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fvo)
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
return A.i($async$fvo,w)},
h6p(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fHh(d,e){var x=0,w=A.j(y.H),v
var $async$fHh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Vq(e),$async$fHh)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eN()
case 1:return A.h(v,w)}})
return A.i($async$fHh,w)},
fP_:function fP_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fP0:function fP0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acC:function acC(d,e){this.a=d
this.b=e},
fsY:function fsY(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ZC:function ZC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAg:function aAg(){this.c=this.a=this.d=null},
d99:function d99(d,e){this.a=d
this.b=e},
d96:function d96(d){this.a=d},
d98:function d98(d){this.a=d},
d97:function d97(d){this.a=d},
d9b:function d9b(){},
d9a:function d9a(d){this.a=d},
ad3:function ad3(d,e,f,g,h,i){var _=this
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
fuX:function fuX(d,e,f){this.a=d
this.b=e
this.c=f},
fuV:function fuV(d){this.a=d},
fuW:function fuW(d,e,f){this.a=d
this.b=e
this.c=f},
fvq:function fvq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvp:function fvp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cc6(d,e,f,g,h){return B.hLN(d,e,f,g,h)},
hLN(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cc6=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iQ(r.dF(d,new B.cc7(s,e,h,g,f,q),y.g),y.l),$async$cc6)
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
return A.i($async$cc6,w)},
b_T(d,e,f,g,h){return B.hLO(d,e,f,g,h)},
hLO(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_T=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avl("GET",d)
o=A.fYH()
if(o==null)o=new A.Ma(A.a([],y.W))
x=7
return A.b(o.f4(0,s).d7(0,C.G_),$async$b_T)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ct(),$async$b_T)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.C_(q,h,o,e,f,"Received via QR")
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
return A.i($async$b_T,w)},
b_S(d){return B.hLL(d)},
hLL(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uh(d,null).d7(0,C.od),$async$b_S)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aM(0,A.m2(A.m0(p.e)).cB(0,p.w),null)
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
return A.i($async$b_S,w)},
cc5(d){return B.hLM(d)},
hLM(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cc5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uh(d,null).d7(0,C.qa),$async$cc5)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m2(A.m0(q.e)).cB(0,q.w)
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
return A.i($async$cc5,w)},
cc7:function cc7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
js:function js(d,e,f,g,h,i,j,k,l){var _=this
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
hLT(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IQ(C.a.b7(u,v.length))}return null},
hLU(d){var x=B.IQ(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hLP(){var x,w=$.od(),v=J.dY(5,y.S)
for(x=0;x<5;++x)v[x]=w.aq(10)
return C.d.hi(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aq(24)]},
a7h(d){return B.hLQ(d)},
hLQ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a7h)
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
return A.i($async$a7h,w)},
a7i(d,e){return B.hLR(d,e)},
hLR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7i=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cG,null),$async$a7i)
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
return A.i($async$a7i,w)},
BZ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BZ)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IQ(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7j(r),$async$BZ)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7h("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BZ)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IQ(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BZ)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hLP()
x=14
return A.b(B.a7j(m),$async$BZ)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a8().ae()
x=15
return A.b(B.a7i("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BZ)
case 15:k=f
x=16
return A.b(B.a7i("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BZ)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BZ)
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
return A.i($async$BZ,w)},
a7j(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IQ(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7h("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7j)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7j,w)},
a7k(d,e,f,g){return B.hLV(d,e,f,g)},
hLV(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7k=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IQ(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7j(r),$async$a7k)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.ccd())>1048576||g.b2(d,new B.cce())){v=B.ET(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7v("myCode",d,a0),$async$a7k)
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
v=B.ET(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b00(u,g.gL(d),a0),$async$a7k)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.od().aq(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dF(d,new B.ccf(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b_U(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"status","pending"],i,y.z),q),$async$a7k)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7k,w)},
ET(d,e,f,g,h){return B.hLS(d,e,f,g,h)},
hLS(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$ET=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$ET)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cH(a6,0,new B.cc9())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.od().aq(9999)
h=Date.now()
g=""+1000*h+"_"+C.cR.aq(99999)
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
a0=new A.KL(a1)
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
return A.b(new A.aaT(a1.a,a4,"media",a1.d,a2).xe(m,n,new A.Ea(!0,q.c)),$async$ET)
case 12:J.cc(r,m);++o
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
return A.b(B.aRe(r),$async$ET)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dF(a6,new B.cca(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b_U(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"status","pending"],e,d),a8),$async$ET)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRe(r),$async$ET)
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
b_U(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b_U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7h(t),$async$b_U)
case 3:s=g
r=y.aL.a(J.r(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.cc8(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7i(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_U,w)},
NN(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NN=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7h("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NN)
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
return A.b(B.b_V(k,a0),$async$NN)
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
return A.b(B.b0_(h),$async$NN)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vx(g,a0),$async$NN)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a8().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("L.E")
e=A.C(new A.Z(r,new B.ccb(),q),n)
d=A.C(new A.Z(r,new B.ccc(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d1(d,0,A.dB(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7i("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$NN)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NN,w)},
b_V(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b_V=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.ifT(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dk(l,m,"Received via My Code",t,e,i),$async$b_V)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRe(s),$async$b_V)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_V,w)},
ccd:function ccd(){},
cce:function cce(){},
ccf:function ccf(){},
cc9:function cc9(){},
cca:function cca(){},
cc8:function cc8(){},
ccb:function ccb(){},
ccc:function ccc(){},
fOX(d,e){var x=0,w=A.j(y.H)
var $async$fOX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cd(A.dZ(new B.fOY(e),!1,null,y.H)),$async$fOX)
case 2:return A.h(null,w)}})
return A.i($async$fOX,w)},
bEH(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bEH=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cd(A.dZ(new B.fOZ(g,e,f),!1,null,y.y)),$async$bEH)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEH,w)},
fOY:function fOY(d){this.a=d},
fOZ:function fOZ(d,e,f){this.a=d
this.b=e
this.c=f},
Vn:function Vn(d,e){this.c=d
this.a=e},
aEe:function aEe(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
Vr:function Vr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEh:function aEh(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dVZ:function dVZ(d){this.a=d},
dW_:function dW_(d){this.a=d},
dW0:function dW0(d){this.a=d},
dVY:function dVY(d,e){this.a=d
this.b=e},
dW1:function dW1(d){this.a=d},
dW2:function dW2(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dW4:function dW4(d,e){this.a=d
this.b=e},
dW5:function dW5(d,e){this.a=d
this.b=e},
dW6:function dW6(d){this.a=d},
dW9:function dW9(){},
dW7:function dW7(d){this.a=d},
dW8:function dW8(d,e){this.a=d
this.b=e},
bk9:function bk9(){},
Vo:function Vo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEf:function aEf(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dUR:function dUR(d){this.a=d},
dUS:function dUS(d){this.a=d},
h1i(d){var x=d.hZ
if(x>=0)return C.o.N(x)
return 10},
hLX(d){var x=d.kW
if(x>=0)return x
return 4.99},
hLW(d){var x=d.lx,w=y.N
w=x.jh(x,new B.cch(),w,w)
return w},
hhI(d){var x=d.kX,w=y.N
w=x.jh(x,new B.cci(),w,w)
return w},
b_Y(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b_Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b_Y)
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
return A.i($async$b_Y,w)},
a7m(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7m)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a7m)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7m,w)},
Vq(d){var x=0,w=A.j(y.H),v,u
var $async$Vq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Vq)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Vq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Vq,w)},
h1h(d,e){var x,w,v
if(B.hLX(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hLW(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cg(new A.V(Date.now(),0,!1))},
b_W(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hhI(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cg(new A.V(Date.now(),0,!1))},
hhJ(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hhI(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cg(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dD(f,0,0,0,0,0).a).a8().ae())
d.kX=w},
apP(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apP)
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
return A.i($async$apP,w)},
apQ(d){var x=0,w=A.j(y.H),v,u,t
var $async$apQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apP(d),$async$apQ)
case 3:u=f
x=5
return A.b(A.az(),$async$apQ)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$apQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apQ,w)},
apO(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h1i(d)
if(u<=0){v=!1
x=1
break}if(B.h1h(d,e)){v=!1
x=1
break}x=3
return A.b(B.apP(e),$async$apO)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apO,w)},
b_X(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b_X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IS(e,d),$async$b_X)
case 3:if(g){v=-1
x=1
break}u=B.h1i(d)
if(u<=0){v=-1
x=1
break}if(B.h1h(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apP(e),$async$b_X)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_X,w)},
cck(d,e,f){var x=0,w=A.j(y.y),v
var $async$cck=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IS(e,d),$async$cck)
case 3:if(h){v=!1
x=1
break}v=B.apO(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cck,w)},
ccj(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ccj=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
x=3
return A.b(B.cck(d,u,i.gU4()),$async$ccj)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccj,w)},
a7l(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7l=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
if(i.gU4()){v=!0
x=1
break}if(B.b_W(d,u)){v=!0
x=1
break}x=5
return A.b(A.lq(u,C.SV),$async$a7l)
case 5:x=k?3:4
break
case 3:B.hhJ(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7l)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l4(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.SV,"Doc Share for Organizations"),$async$a7l)
case 7:if(!k){v=!1
x=1
break}B.hhJ(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7l)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7l,w)},
cch:function cch(){},
cci:function cci(){},
fPQ(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fPQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fPQ)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fiE.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.fiE.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fPQ,w)},
iid(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fiE.bs($.fiE,new B.fPS(d))},
fPS:function fPS(d){this.a=d},
fk6(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fk6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aN(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],f))
s.toString
u=A.mS(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jf,null,y.H),$async$fk6)
case 3:C.AD.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fk6,w)},
agd(d,e,f){var x=0,w=A.j(y.H),v
var $async$agd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fjc.n(0,d,new B.acj(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$agd)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.X.ap(A.G(["parts",e,"size",f],v,y.C),null)),$async$agd)
case 2:return A.h(null,w)}})
return A.i($async$agd,w)},
ag7(d){return B.i0O(d)},
i0O(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ag7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fjc.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ag7)
case 3:u=j.aS(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aM(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b6(s,new B.fnD(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.acj(r)
$.fjc.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ag7,w)},
Rb(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Rb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.GD.n(0,d,u)
x=3
return A.b(B.RG(d,u),$async$Rb)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rb,w)},
aP3(d){return B.i0M(d)},
i0M(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aP3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GD.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.RF(d),$async$aP3)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.GD.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aP3)
case 4:s=f
r=A.aS(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cD.aL(r)
x=!J.ct(q)?9:10
break
case 9:B.Rb(d,q)
x=11
return A.b(J.hz(s,d),$async$aP3)
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
return A.i($async$aP3,w)},
hXR(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cl(J.eH(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cl(A.ym(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cl(d)),y.K)
return A.f8(null,y.K)},
a27(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a27=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bi($.bB,y.cf)
t=new A.bZ(u,y.aW)
s=y.aK
A.fy(r,"loadend",new B.ft9(r,t),!1,s)
A.fy(r,"error",new B.fta(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iv(0,C.N6,new B.ftb())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a27,w)},
aPn(d,e,f){return B.i34(d,e,f)},
i34(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPn=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a27(i),$async$aPn)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.RG(o,p),$async$aPn)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cc(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agd(k,j,s),$async$aPn)
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
return A.i($async$aPn,w)},
aPm(d,e,f){return B.i33(d,e,f)},
i33(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPm=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPn(d,e,f),$async$aPm)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a27(f),$async$aPm)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GD.n(0,s,r)
$.Rs.n(0,s,r)
x=11
return A.b(B.Rb(s,r),$async$aPm)
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
return A.i($async$aPm,w)},
C_(d,e,f,g,h,i){return B.hM5(d,e,f,g,h,i)},
hM5(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$C_=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.aq(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.js(p,q,o,n,new A.V(Date.now(),0,!1).a8().ae(),a0,f,B.b03(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Rb(s,d),$async$C_)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$C_)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cI.gcp().aL(d)),$async$C_)
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
return A.b(B.AW(e),$async$C_)
case 12:j=a2
J.cc(j,m)
x=13
return A.b(B.GO(e,j),$async$C_)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$C_,w)},
Vs(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vs=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AW(d),$async$Vs)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cR.aq(99999)
n=p.b
l=o.type
l.toString
k=B.hhL(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a8().ae()
i=new B.js(m,n,k,l,j,"From folder",null,B.b03(),null)
$.agH.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a27(o),$async$Vs)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.GD.n(0,h,g)
$.Rs.n(0,h,g)
B.Rb(h,g)
x=9
break
case 10:x=11
return A.b(B.aPm(d,m,o),$async$Vs)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.M)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GO(d,t),$async$Vs)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vs,w)},
h1m(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h1m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hhL(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IT(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.C_(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1m,w)},
IT(d,e,f,g,h,i){return B.hM4(d,e,f,g,h,i)},
hM4(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IT=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.aq(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KL(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IT)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ct(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.Sf(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kD(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.RG(k,l),$async$IT)
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
return A.b(j.a4(0),$async$IT)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.RG(k,new Uint8Array(A.cl(n))),$async$IT)
case 15:J.cc(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agd(r,q,g),$async$IT)
case 16:f=new B.js(i,a1,a0,g,new A.V(Date.now(),0,!1).a8().ae(),a2,null,B.b03(),null)
x=17
return A.b(B.AW(d),$async$IT)
case 17:e=a6
J.cc(e,f)
x=18
return A.b(B.GO(d,e),$async$IT)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IT,w)},
Vu(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Vu=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agH.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a27(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ag7(s),$async$Vu)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.RF(u[o]),$async$Vu)
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
case 5:i=$.Rs.h(0,s)
if(i==null)i=$.GD.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rC(d,e),$async$Vu)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Rs.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.ym(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vu,w)},
hhL(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rC(d,e){return B.hM6(d,e)},
hM6(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rC=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Rs.h(0,f)
if(e==null)e=$.GD.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agH.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a27(s),$async$rC)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.GD.n(0,f,r)
$.Rs.n(0,f,r)
B.Rb(f,r)
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
return A.b(B.ag7(f),$async$rC)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ayY(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.RF(g[l]),$async$rC)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.M)(g),++l
x=13
break
case 15:r=n.aoP()
if(!C.aG.gan(r)){$.GD.n(0,f,r)
$.Rs.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aP3(f),$async$rC)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Rs.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Vu(a0,a1,0,g),$async$rC)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.cl(i))
$.GD.n(0,f,h)
$.Rs.n(0,f,h)
B.Rb(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rC,w)},
hM9(d){var x,w,v=$.agH.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hMa(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hM7(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apW(d,e,f,g,h){return B.hM8(d,e,f,g,h)},
hM8(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apW=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agH.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a27(s),$async$apW)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rC(g,e),$async$apW)
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
return A.b(n.ip(d).xe(h,r,new A.Ea(!0,e.c)),$async$apW)
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
return A.i($async$apW,w)},
hhN(d,e,f,g,h){var x,w,v,u,t=$.hhM
$.hhM=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.aq(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ccv.n(0,t,new B.bwO(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ayY(u)))
return t},
h1n(d){var x=0,w=A.j(y.H)
var $async$h1n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h1n,w)},
IU(d,e){var $async$IU=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agH.h(0,h)
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
return A.qi(B.Vu(d,e,p,o<q?o:q),$async$IU,w)
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
return A.qi(B.ag7("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IU,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qi(B.RF(h[l]),$async$IU,w)
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
return A.qi(B.rC(d,e),$async$IU,w)
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
var x=0,w=A.hqt($async$IU,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hsj(w)},
b05(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b05=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ccv.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a59(),$async$b05)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b05,w)},
Vt(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Vt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccv.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a59(),$async$Vt)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agd(r.c,u,r.z),$async$Vt)
case 4:t=new B.js(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a8().ae(),r.f,r.r,B.b03(),null)
u=r.a
x=5
return A.b(B.AW(u),$async$Vt)
case 5:s=f
J.cc(s,t)
x=6
return A.b(B.GO(u,s),$async$Vt)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vt,w)},
a7s(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccv.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahn(u[s]),$async$a7s)
case 6:case 4:u.length===t||(0,A.M)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a7s,w)},
ccx(d,e,f){var x=0,w=A.j(y.H)
var $async$ccx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBI(d,e,f),$async$ccx)
case 2:return A.h(null,w)}})
return A.i($async$ccx,w)},
ccy(d,e,f){var x=0,w=A.j(y.H)
var $async$ccy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBJ(d,e,f),$async$ccy)
case 2:return A.h(null,w)}})
return A.i($async$ccy,w)},
EU(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$EU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AW(d),$async$EU)
case 2:p=g
J.nA(p,new B.ccw(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GD.W(0,v)
$.agH.W(0,e)
x=3
return A.b(B.ag7(v),$async$EU)
case 3:u=g
$.fjc.W(0,v)
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
return A.b(B.ahn(s[q]),$async$EU)
case 12:case 10:s.length===r||(0,A.M)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahn(v),$async$EU)
case 13:x=14
return A.b(B.GO(d,p),$async$EU)
case 14:return A.h(null,w)}})
return A.i($async$EU,w)},
b04(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b04=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rC(d,e),$async$b04)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fk6(t,A.aN(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b04,w)},
AW(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AW)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aM(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.ftc(),y.U)
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
t=J.b6(e,new B.fxi(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.X.ap(t,null)),$async$GO)
case 3:return A.h(null,w)}})
return A.i($async$GO,w)},
bBI(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AW(d),$async$bBI)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.frm(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEG(f))
x=4
return A.b(B.GO(d,u),$async$bBI)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBI,w)},
bBJ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AW(d),$async$bBJ)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.frn(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cL0(f))
x=4
return A.b(B.GO(d,u),$async$bBJ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBJ,w)},
acj:function acj(d){this.a=d},
fnD:function fnD(){},
ft9:function ft9(d,e){this.a=d
this.b=e},
fta:function fta(d){this.a=d},
ftb:function ftb(){},
ccw:function ccw(d){this.a=d},
bwO:function bwO(d,e,f,g,h,i,j,k,l){var _=this
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
ftc:function ftc(){},
fxi:function fxi(){},
frm:function frm(d){this.a=d},
frn:function frn(d){this.a=d},
a7t(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b2(d,new B.ccB())?3:4
break
case 3:x=5
return A.b(B.b06(d,e),$async$a7t)
case 5:u=g
if(u!=null){t=u.c
B.NP(d,u.b,e,t)}v=u
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
return A.b(B.b01(s),$async$a7t)
case 10:case 9:if(g){v=new A.Qx(1,D.Sy,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vv(d,e),$async$a7t)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.VA(!0,!0,d,e),$async$a7t)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.NP(d,D.zL,e,t)
v=new A.Qx(p,D.zL,t)
x=1
break}v=B.ccA(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7t,w)},
Vv(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7v(null,d,e),$async$Vv)
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
return A.b(B.b00(p,d.length,e),$async$Vv)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ccy(e,C.d.gI(d).a,r.b),$async$Vv)
case 7:case 6:q=r.a
x=8
return A.b(B.NP(d,D.Sy,e,q),$async$Vv)
case 8:v=new A.Qx(d.length,D.Sy,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vv,w)},
Vw(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mP)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7u(d,e),$async$Vw)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cct(s,d,e,t),$async$Vw)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b01(t),$async$Vw)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rC(e,d),$async$Vw)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vv(A.a([d],y.r),e),$async$Vw)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vw,w)},
Vy(){var x=0,w=A.j(y.H)
var $async$Vy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h1g(),$async$Vy)
case 2:x=3
return A.b(B.aRy(),$async$Vy)
case 3:return A.h(null,w)}})
return A.i($async$Vy,w)},
a7u(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b03()
x=3
return A.b(B.ccx(e,d.a,u),$async$a7u)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7u,w)},
NP(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$NP=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Sy&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b7(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7u(p,f),$async$NP)
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
return A.b(B.ccs(o,p,u,f),$async$NP)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cct(o,p,f,t),$async$NP)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ccr(o,u,p,f),$async$NP)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.M)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$NP,w)},
b06(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b06=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccz(e,d),$async$b06)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.VA(!1,!0,d,e),$async$b06)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qx(u.a,D.zL,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b06,w)},
ccz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ccz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Vu(d,s,0,1),$async$ccz)
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
return A.i($async$ccz,w)},
ccA(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ccA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7v(null,d,e),$async$ccA)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hhK(u)
if(t.length>800){v=null
x=1
break}v=new A.Qx(d.length,D.dJm,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccA,w)},
apX(d,e,f){return B.hMd(d,e,f)},
hMd(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.ng(g,1)
x=B.h1l(g)?3:4
break
case 3:x=5
return A.b(B.ccu(g),$async$apX)
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
return A.b(B.b0_(q),$async$apX)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vx(p,a0)
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
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h1k(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vx(n,a0)
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
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.ar(k,0,k.length-1)
else h=k
v=B.IV(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vx(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apX,w)},
IV(d,e,f){return B.hMb(d,e,f)},
hMb(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IV=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aN(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b7(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b7(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.ar(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aN(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_S(r),$async$IV)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_S(A.cD(s,0,null)),$async$IV)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cc6(o,r,a1,n,a2),$async$IV)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.cc5(q),$async$IV)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vx(l,a2),$async$IV)
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
a7v(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.rC(f,r),$async$a7v)
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
return A.i($async$a7v,w)},
Vx(d,e){return B.hMc(d,e)},
hMc(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vx=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.C_(i,a3,d,k,l,o),$async$Vx)
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
return A.i($async$Vx,w)},
NO:function NO(d,e){this.a=d
this.b=e},
ccB:function ccB(){},
a1H(d){var x=A.P(d).ax.a===C.J,w=x?D.agG:D.aen,v=x?D.aij:C.c,u=x?C.aP:C.M,t=x?C.bM:C.al,s=x?D.afG:C.aL
return new A.aHj([w,s,v,u,t,x?C.fg:C.bP])},
hxn(d,e){var x=e?C.w.j(0.72):C.aS
return A.cj(null,x,!0,null,new B.fTZ(e),d,null,!0,!0,y.N)},
ccg(d,e,f,g,h,i,j,k,l){return new B.Vp(e,l,d,f,k,j,g,h,i,null)},
ZE(d,e,f,g,h,i,j){return new B.beN(g,h,j,e,i,d,f,null)},
fTZ:function fTZ(d){this.a=d},
ZB:function ZB(d,e){this.c=d
this.a=e},
aAf:function aAf(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d95:function d95(d){this.a=d},
d93:function d93(d){this.a=d},
d94:function d94(d){this.a=d},
bwq:function bwq(){},
Vp:function Vp(d,e,f,g,h,i,j,k,l,m){var _=this
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
dVX:function dVX(d){this.a=d},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVl:function dVl(d,e){this.a=d
this.b=e},
dUU:function dUU(d,e,f){this.a=d
this.b=e
this.c=f},
dUT:function dUT(d){this.a=d},
dUV:function dUV(d,e){this.a=d
this.b=e},
dV_:function dV_(d,e,f){this.a=d
this.b=e
this.c=f},
dUZ:function dUZ(d){this.a=d},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVM:function dVM(d){this.a=d},
dVh:function dVh(d,e,f){this.a=d
this.b=e
this.c=f},
dVe:function dVe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUY:function dUY(d){this.a=d},
dVp:function dVp(d){this.a=d},
dVo:function dVo(){},
dV3:function dV3(d){this.a=d},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVK:function dVK(d,e){this.a=d
this.b=e},
dVf:function dVf(d,e){this.a=d
this.b=e},
dVg:function dVg(d,e){this.a=d
this.b=e},
dVB:function dVB(d,e){this.a=d
this.b=e},
dVx:function dVx(d){this.a=d},
dVw:function dVw(d){this.a=d},
dVy:function dVy(){},
dVz:function dVz(){},
dVA:function dVA(d,e){this.a=d
this.b=e},
dVC:function dVC(){},
dVD:function dVD(d){this.a=d},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dVr:function dVr(d){this.a=d},
dVs:function dVs(d){this.a=d},
dVt:function dVt(d){this.a=d},
dVu:function dVu(d){this.a=d},
dV0:function dV0(){},
dV1:function dV1(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dUX:function dUX(d,e){this.a=d
this.b=e},
dUW:function dUW(d,e,f){this.a=d
this.b=e
this.c=f},
dVi:function dVi(d){this.a=d},
dVj:function dVj(d,e,f){this.a=d
this.b=e
this.c=f},
dVc:function dVc(d,e){this.a=d
this.b=e},
dV8:function dV8(d){this.a=d},
dV5:function dV5(d,e,f){this.a=d
this.b=e
this.c=f},
dV9:function dV9(d){this.a=d},
dVa:function dVa(d){this.a=d},
dVb:function dVb(){},
dVd:function dVd(d,e){this.a=d
this.b=e},
dV6:function dV6(d){this.a=d},
dV4:function dV4(d,e,f){this.a=d
this.b=e
this.c=f},
dV7:function dV7(){},
dVn:function dVn(d){this.a=d},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVE:function dVE(d){this.a=d},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVG:function dVG(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVS:function dVS(d){this.a=d},
dVT:function dVT(d){this.a=d},
dVV:function dVV(){},
dVW:function dVW(d,e){this.a=d
this.b=e},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVP:function dVP(d,e,f){this.a=d
this.b=e
this.c=f},
dVN:function dVN(d,e,f){this.a=d
this.b=e
this.c=f},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVR:function dVR(d,e){this.a=d
this.b=e},
aAc:function aAc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beM:function beM(d,e,f){this.c=d
this.d=e
this.a=f},
d91:function d91(){},
d92:function d92(){},
acD:function acD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d9p:function d9p(){},
d9o:function d9o(d){this.a=d},
ZD:function ZD(d,e,f){this.c=d
this.d=e
this.a=f},
aAh:function aAh(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d9l:function d9l(d){this.a=d},
d9m:function d9m(d,e,f){this.a=d
this.b=e
this.c=f},
d9n:function d9n(d,e){this.a=d
this.b=e},
d9j:function d9j(d,e){this.a=d
this.b=e},
d9h:function d9h(d){this.a=d},
d9f:function d9f(d){this.a=d},
d9c:function d9c(d){this.a=d},
d9i:function d9i(d){this.a=d},
d9e:function d9e(d){this.a=d},
d9k:function d9k(d){this.a=d},
d9g:function d9g(d){this.a=d},
d9d:function d9d(d){this.a=d},
ZA:function ZA(d,e,f){this.c=d
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
d8Z:function d8Z(d){this.a=d},
d8Y:function d8Y(d,e){this.a=d
this.b=e},
d9_:function d9_(d){this.a=d},
d8X:function d8X(d,e){this.a=d
this.b=e},
d90:function d90(d){this.a=d},
d8W:function d8W(d,e){this.a=d
this.b=e},
d8S:function d8S(d){this.a=d},
d8T:function d8T(d){this.a=d},
d8U:function d8U(d,e){this.a=d
this.b=e},
d8V:function d8V(d){this.a=d},
Q6:function Q6(d,e,f){this.c=d
this.d=e
this.a=f},
aAk:function aAk(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d9C:function d9C(d){this.a=d},
d9D:function d9D(d){this.a=d},
d9E:function d9E(d){this.a=d},
d9F:function d9F(d){this.a=d},
d9G:function d9G(d,e){this.a=d
this.b=e},
d9H:function d9H(d){this.a=d},
d9J:function d9J(d){this.a=d},
d9I:function d9I(d){this.a=d},
ZF:function ZF(d,e,f,g,h){var _=this
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
d9y:function d9y(d,e){this.a=d
this.b=e},
d9z:function d9z(d,e){this.a=d
this.b=e},
d9q:function d9q(d,e,f){this.a=d
this.b=e
this.c=f},
d9r:function d9r(d){this.a=d},
d9s:function d9s(){},
d9x:function d9x(){},
d9t:function d9t(d,e){this.a=d
this.b=e},
d9u:function d9u(d,e){this.a=d
this.b=e},
d9v:function d9v(d,e){this.a=d
this.b=e},
d9w:function d9w(d,e){this.a=d
this.b=e},
acB:function acB(d,e){this.c=d
this.a=e},
d8R:function d8R(d){this.a=d},
Zz:function Zz(d){this.a=d},
aAd:function aAd(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ZG:function ZG(d,e){this.c=d
this.a=e},
aAj:function aAj(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d9B:function d9B(d){this.a=d},
d9A:function d9A(d){this.a=d},
beN:function beN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hMe(){var x,w=$.od(),v=J.dY(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aq(32)]
return"VT"+C.d.hi(v)},
NQ(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$NQ)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NQ)
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
return A.i($async$NQ,w)},
a7w(d){return B.hMf(d)},
hMf(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7w)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7w)
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
return A.i($async$a7w,w)},
Vz(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NQ(),$async$Vz)
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
return A.b(B.a7w(s),$async$Vz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vz,w)},
VA(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$VA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$VA)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.T(f).k("Z<1>")
u=A.C(new A.Z(f,new B.ccD(),t),t.k("L.E"))}if(u.length===0){v=null
x=1
break}s=B.hMe()
t=A.T(u).k("N<1,a8<n,aD>>")
r=A.C(new A.N(u,new B.ccE(s),t),t.k("ak.E"))
x=6
return A.b(B.NQ(),$async$VA)
case 6:q=i
J.aI(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.C))
x=7
return A.b(B.a7w(q),$async$VA)
case 7:x=8
return A.b(B.a7x(r,u,g,s),$async$VA)
case 8:v=new A.bqq(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VA,w)},
apY(d){var x=0,w=A.j(y.y),v,u,t
var $async$apY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NQ(),$async$apY)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apY,w)},
ccF(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ccF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NQ(),$async$ccF)
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
return A.i($async$ccF,w)},
a7x(d,e,f,g){return B.hMg(d,e,f,g)},
hMg(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7x=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apW("media",r,new B.ccC(s,e,g),f,q),$async$a7x)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vz(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7x)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vz(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$a7x)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vz(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7x)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7x,w)},
EV(d,e,f){return B.hMh(d,e,f)},
hMh(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.apY(b3),$async$EV)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iU,null,g),$async$EV)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apY(b3),$async$EV)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NQ(),$async$EV)
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
l=new A.aaT(a8.a,b0,"media",a8.d,a9).CQ(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b_T(k,n,o,s,b7),$async$EV)
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
return A.b(new A.aaT(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$EV)
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
return A.b(B.a7w(e),$async$EV)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EV,w)},
ccD:function ccD(){},
ccE:function ccE(d){this.a=d},
ccC:function ccC(d,e,f){this.a=d
this.b=e
this.c=f},
aRy(){var x=0,w=A.j(y.H),v,u
var $async$aRy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hXc=null
v=y.H
u=A.dU(null,v)
x=2
return A.b(u,$async$aRy)
case 2:u=A.dU(null,v)
x=3
return A.b(u,$async$aRy)
case 3:u=$.h6C
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dU(u,v),$async$aRy)
case 4:$.h6C=$.i4X=$.i4Y=null
return A.h(null,w)}})
return A.i($async$aRy,w)},
fwU(d){var x=0,w=A.j(y.H),v,u
var $async$fwU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a81){x=1
break}u=new A.bi($.bB,y.d4)
d.c=new B.fwV(new A.bZ(u,y.aY))
x=3
return A.b(u.iv(0,C.hY,new B.fwW()),$async$fwU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fwU,w)},
i4V(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hLZ(x):x},
h6G(d){var x=0,w=A.j(y.T),v,u,t
var $async$h6G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,13))
if(C.a.a0(u,"WR")){v=B.aq_(u)
x=1
break}v=B.h1k(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6G,w)},
h6F(d){var x=0,w=A.j(y.T),v,u,t
var $async$h6F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,14))
if(C.a.a0(u,"WR")){v=B.aq0(u)
x=1
break}v=B.h1k(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6F,w)},
fPA(d){var x=0,w=A.j(y.T),v
var $async$fPA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aq0(d),$async$fPA)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fPA,w)},
bCB(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bCB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h6F(d),$async$bCB)
case 3:q=f
if(q==null){x=1
break}t=C.X.aM(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCB,w)},
fkV(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fkV=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Vt(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.C_(d.aoP(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fkV,w)},
GQ(d,e,f){return B.i7n(d,e,f)},
i7n(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GQ=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h6G(a1),$async$GQ)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aM(0,e,null)
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
return A.b($.hzg().aEV(D.dxH,null),$async$GQ)
case 4:l=d.h6C=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ayY(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bi($.bB,y.b1)
l.y=new B.fxr(f,k,new B.fxs(f,a2,k,j,a0,p),a2,j,a0,p,new A.bZ(t,y.ch))
x=5
return A.b(l.a86(0,new B.XE(r,"offer")),$async$GQ)
case 5:d=l
x=7
return A.b(l.alw(0),$async$GQ)
case 7:x=6
return A.b(d.a7Z(0,a4),$async$GQ)
case 6:x=8
return A.b(B.fwU(l),$async$GQ)
case 8:x=9
return A.b(l.apB(),$async$GQ)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i4V(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.ap(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aq1(m,h),$async$GQ)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hhK(h)
case 11:v=new A.bpI(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GQ,w)},
fwV:function fwV(d){this.a=d},
fwW:function fwW(){},
fxs:function fxs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fxr:function fxr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fxq:function fxq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i9i(d){switch(d){case"new":return D.esq
case"checking":return D.esr
case"connected":return D.est
case"completed":return D.ess
case"failed":return D.esv
case"disconnected":return D.esw
case"closed":return D.aOK
case"count":return D.esu}return D.aOK},
i9j(d){switch(d){case"new":return D.aOL
case"gathering":return D.esx
case"complete":return D.a81}return D.aOL},
ijI(d){switch(d){case"stable":return D.esy
case"have-local-offer":return D.esz
case"have-local-pranswer":return D.esB
case"have-remote-offer":return D.esA
case"have-remote-pranswer":return D.esC
case"closed":return D.aOR}return D.aOR},
ihV(d){switch(d){case"new":return D.aOO
case"connecting":return D.aOP
case"connected":return D.aOQ
case"closed":return D.a82
case"disconnected":return D.aON
case"failed":return D.aOM}return D.a82},
a9R:function a9R(d,e){this.a=d
this.b=e},
OT:function OT(d,e){this.a=d
this.b=e},
XD:function XD(d,e){this.a=d
this.b=e},
OS:function OS(d,e){this.a=d
this.b=e},
Fo:function Fo(d,e){this.a=d
this.b=e},
cp2:function cp2(){},
h36(d){var x=new B.Fn()
x.a=d
x.b=!0
return x},
Fn:function Fn(){this.b=this.a=$},
a9Q:function a9Q(){},
auv:function auv(){},
XE:function XE(d,e){this.a=d
this.b=e},
h1g(){var x=0,w=A.j(y.H)
var $async$h1g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h1g,w)},
h1j(d,e,f){var x=0,w=A.j(y.T),v
var $async$h1j=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mP))){v=null
x=1
break}v=B.fPQ(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1j,w)},
hhK(d){var x,w=F.adN.a4U(C.dN.aL(d),null)
if(w.length===0){x=C.dN.aL(d)
return C.cI.gcp().aL(x)}return C.cI.gcp().aL(w)},
hLY(d){var x,w,v=C.cD.aL(d)
try{x=C.cd.cB(0,F.adM.bdT(v,!1))
return x}catch(w){x=C.cd.cB(0,v)
return x}},
h1k(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hLY(C.a.b7(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b7(t,w.length)
try{v=C.cd.cB(0,C.cD.aL(x))
return v}catch(u){return x}}return null},
hLZ(d){var x,w,v,u,t,s=A.a([],y.s)
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
hM_(){var x,w=$.od(),v=J.dY(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aq(32)]
return"DS"+C.d.hi(v)},
b_Z(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b_Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b_Z)
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
return A.i($async$b_Z,w)},
ccl(d,e){return B.hM0(d,e)},
hM0(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ccl=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$ccl)
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
return A.i($async$ccl,w)},
b01(d){var x=0,w=A.j(y.y),v,u,t
var $async$b01=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_Z(d),$async$b01)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b01,w)},
b00(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b00=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hM_()
r=C.a.i(f)
t=C.dN.aL(s)
x=3
return A.b(B.ccl(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cI.gcp().aL(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$b00)
case 3:if(!h){v=null
x=1
break}v=new A.a0I("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b00,w)},
b0_(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b_Z(o),$async$b0_)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cd.cB(0,C.cD.aL(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0_,w)},
ccm(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ccm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bDx("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$ccm)
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
return A.i($async$ccm,w)},
b02(d){var x=0,w=A.j(y.h),v,u,t
var $async$b02=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IR(),$async$b02)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b02,w)},
apT(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apT)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b02(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apT,w)},
apR(d,e){var x=0,w=A.j(y.H)
var $async$apR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apR)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apR)
case 2:return A.h(null,w)}})
return A.i($async$apR,w)},
a7o(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7o=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7o)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.IR(),$async$a7o)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.C))
x=5
return A.b(A.a7n(s),$async$a7o)
case 5:x=6
return A.b(B.apR(f,u),$async$a7o)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7o,w)},
a7p(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7p=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7p)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.IR(),$async$a7p)
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
return A.b(B.apR(g,q),$async$a7p)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7n(u),$async$a7p)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7p,w)},
a7q(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7q)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.IR(),$async$a7q)
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
s=B.b_W(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7q)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.X.ap(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a8().ae()],p,p),null)),$async$a7q)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7q,w)},
ccn(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ccn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$ccn)
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
return A.i($async$ccn,w)},
IS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccn(d),$async$IS)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b02(t),$async$IS)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apS(d),$async$IS)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b_W(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apS(d),$async$IS)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IS,w)},
apS(d){var x=0,w=A.j(y.H)
var $async$apS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apS)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apS)
case 2:return A.h(null,w)}})
return A.i($async$apS,w)},
b03(){var x,w=$.od(),v=J.dY(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aq(32)]
return C.d.hi(v)},
a7r(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h1l(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ccq(d){return B.hM2(d)},
hM2(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ccq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7r(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$ccq)
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
return A.i($async$ccq,w)},
apV(d,e){return B.hM3(d,e)},
hM3(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7r(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apV)
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
return A.i($async$apV,w)},
ccs(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccs=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7r(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apV(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$ccs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccs,w)},
ccr(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7r(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apV(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z)),$async$ccr)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccr,w)},
cct(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cct=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7r(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apV(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cct,w)},
ccu(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ccu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h1l(d)){v=null
x=1
break}x=3
return A.b(B.ccq(d),$async$ccu)
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
return A.i($async$ccu,w)},
a7y(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7y)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7y)
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
return A.i($async$a7y,w)},
apZ(d){return B.hMi(d)},
hMi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$apZ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],y.N,y.z),!1,!1,C.cG,null),$async$apZ)
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
return A.i($async$apZ,w)},
aq_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aq_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aq_)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7y(),$async$aq_)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cd.cB(0,C.cD.aL(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.a2(r,m,l),m,l)
J.aI(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a8().ae())
J.aI(s,j,o)
x=9
return A.b(B.apZ(s),$async$aq_)
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
return A.i($async$aq_,w)},
aq1(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aq1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aq1)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7y(),$async$aq1)
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
return A.b(B.apZ(u),$async$aq1)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aq1,w)},
aq0(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aq0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aq0)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7y(),$async$aq0)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cd.cB(0,C.cD.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aq0,w)},
aoW(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.q8)){v=null
x=1
break}x=3
return A.b(p.m5(e),$async$aoW)
case 3:r=g
u=4
x=7
return A.b(r.ht(C.h9),$async$aoW)
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
return A.i($async$aoW,w)},
ifT(d,e){var x,w,v=J.dY(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aS(C.o.u(w),5,"0")
return v},
fNR(d){return B.ifV(d)},
ifV(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fNR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ip("media").L3(d,3600),$async$fNR)
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
return A.i($async$fNR,w)},
Dk(d,e,f,g,h,i){var x=null
return B.ifS(d,e,f,g,h,i)},
ifS(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dk=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hhN(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h1n(r),$async$Dk)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fNR(o),$async$Dk)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7s(r),$async$Dk)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aS2)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ma(A.a([],g))
x=15
return A.b(d.f4(0,A.avl("GET",A.cD(n,0,null))).d7(0,C.G_),$async$Dk)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7s(r),$async$Dk)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KL(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dk)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b05(r,k),$async$Dk)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$Dk)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.M)(b0),++f
x=8
break
case 10:i=B.Vt(r)
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
return A.b(B.a7s(r),$async$Dk)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dk,w)},
aRe(d){return B.ifU(d)},
ifU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ip("media").W(0,d),$async$aRe)
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
return A.i($async$aRe,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[150]
O=c[43]
F=c[246]
I=c[139]
P=c[224]
E=c[217]
G=c[91]
Q=c[188]
R=c[140]
S=c[222]
K=c[250]
L=c[255]
B=a.updateHolder(c[22],B)
D=c[253]
T=c[187]
M=c[207]
U=c[70]
V=c[240]
W=c[76]
X=c[59]
N=c[90]
Y=c[254]
B.cp3.prototype={
aEV(d,e){return this.cMy(d,e)},
cMy(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aEV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.U(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.kr(A.cA(t)))
t=J.k(u)
v=B.hQT(C.cI.gcp().aL(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aEV,w)}}
B.b5e.prototype={
bzR(d){var x=this,w=x.w
w.onclose=A.hs(new B.coZ(x))
w.onopen=A.hs(new B.cp_(x))
w.onmessage=A.hs(new B.cp0(x))
w.onbufferedamountlow=A.hs(new B.cp1(x))},
gdc(d){return this.x},
ahO(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fn()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h36(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ec(d.arrayBuffer(),y.af),$async$ahO)
case 8:v=t.h36(s.ao7(f,0,null))
x=1
break
case 7:case 4:v=B.h36(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahO,w)}}
B.b5f.prototype={
bzS(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hs(new B.cp4(x)))
w.addEventListener("icecandidate",A.hs(new B.cp5(x)))
w.addEventListener("iceconnectionstatechange",A.hs(new B.cp6(x)))
w.onicegatheringstatechange=A.hs(new B.cp7(x))
w.addEventListener("signalingstatechange",A.hs(new B.cp8(x)))
if(!$.han())w.addEventListener("connectionstatechange",A.hs(new B.cp9(x)))
w.addEventListener("negotiationneeded",A.hs(new B.cpa(x)))
w.addEventListener("track",A.hs(new B.cpb(x)))},
alw(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ec(s.createAnswer(A.kr(A.cA(A.U(y.N,y.z)))),y.aQ),$async$alw)
case 3:t=f
v=new B.XE(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alw,w)},
a7Z(d,e){return this.bp3(0,e)},
bp3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ec(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7Z)
case 2:return A.h(null,w)}})
return A.i($async$a7Z,w)},
a86(d,e){return this.bpo(0,e)},
bpo(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a86=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ec(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a86)
case 2:return A.h(null,w)}})
return A.i($async$a86,w)},
apB(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.XE(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apB,w)},
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
B.acC.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.ZC.prototype={
R(){return new B.aAg()},
gcZ(){return this.c}}
B.aAg.prototype={
Z(){this.a2()
this.aeu()},
aeu(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_X(u.e,u.c),$async$aeu)
case 2:t=e
if(v.c!=null)v.m(new B.d99(v,t))
return A.h(null,w)}})
return A.i($async$aeu,w)},
QA(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apO(t.e,t.c,!1),$async$QA)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fbp)
x=1
break}x=4
return A.b(B.a7m(u.a.c,"individual"),$async$QA)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a6t(A.dZ(new B.d96(u),!1,null,y.H)),$async$QA)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QA,w)},
Jq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fuU(o),$async$Jq)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7q(o.e,r,s,q),$async$Jq)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f8q)
x=1
break}x=5
return A.b(B.a7m(u.a.c,"member"),$async$Jq)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a6t(A.dZ(new B.d98(u),!1,null,y.H)),$async$Jq)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
ya(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$ya=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7l(t.e,o,t.f,t.r,t.w,s),$async$ya)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7m(u.a.c,"org_owner"),$async$ya)
case 4:x=5
return A.b(B.apT(u.a.c),$async$ya)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fvo(o),$async$ya)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7o(s,t,o,q.c),$async$ya)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f8n)
x=1
break}x=10
return A.b(B.apT(u.a.c),$async$ya)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a6t(A.dZ(new B.d97(u),!1,null,y.H)),$async$ya)
case 11:case 1:return A.h(v,w)}})
return A.i($async$ya,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.J,r=s?C.jw:C.q0,q=B.h1i(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.h_,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fvh,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h4,t,t,t),C.aA,D.fPb,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c4X,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lO(new B.d9b(),t),C.O,w,C.dS,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ad)
if(!u.a.x)C.d.v(p,A.a([new B.ad3(C.f0,C.aBl,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcg1(),t),C.ad],v))
p.push(new B.ad3(C.pa,C.a3O,"Team Member","Sign in with your organization access code + password",u.gcgT(),t))
p.push(C.ad)
p.push(new B.ad3(C.anE,C.a5o,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcgo(),t))
return A.c7(t,r,A.bl(!0,A.cg(A.x(p,C.ak,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.akZ,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ad3.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.J(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aH(!1,C.a2,!0,s,A.aO(!1,r,!0,A.eJ(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oH,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.yI,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aCT.prototype={}
B.aG0.prototype={}
B.js.prototype={
my(d){var x=this.b,w=C.a.oO(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b7(x,w+1).toLowerCase())},
gaqh(){var x=this.d
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
bdm(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.js(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cL0(d){return this.bdm(null,d)},
aEG(d){return this.bdm(d,null)}}
B.Vn.prototype={
R(){return new B.aEe(new A.cB(null,y.A))},
gcZ(){return this.c}}
B.aEe.prototype={
Z(){this.a2()
this.aev()},
aev(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aev=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BZ(u.a.c),$async$aev)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dUQ(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aev,w)},
aew(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aew=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fC(s)),$async$aew)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fcj)
case 1:return A.h(v,w)}})
return A.i($async$aew,w)},
a_5(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_5=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoW(s.d,4),$async$a_5)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t6(r,"ngmy_my_code_"+m+".png"),$async$a_5)
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
return A.i($async$a_5,w)},
aif(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aif=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aat("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aif)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aif,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.J,n=o?C.jw:C.q0,m=o?C.c:C.M,l=A.eI(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lZ
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
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4f,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.akx,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dr,24)],y.V)
s=q.e
s.toString
r=A.cg(A.x(A.a([x,C.mY,w,C.kT,new A.ey(A.p(p,A.q_(p,p,!1,B.hLU(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ad,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.kT,A.B(A.a([A.E(A.et(N.CB,C.Vb,q.gc8S(),p),1),C.at,A.E(A.dl(C.z6,C.aaf,q.gc8T(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.W,new A.a6(1/0,p,A.et(M.a2y,D.fKN,q.gcvG(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.Ny,p,p,C.ag)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.Vr.prototype={
R(){return new B.aEh(new A.as(C.as,$.au()),A.k2(!0,null,!0,!0,null,null,!1))}}
B.aEh.prototype={
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
a_6(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IQ(u.d.a.a)
if(t==null){u.m(new B.dVZ(u))
x=1
break}u.m(new B.dW_(u))
s=u.a
r=s.c
x=3
return A.b(B.a7k(s.d,new B.dW0(u),t,r),$async$a_6)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dW1(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_6,w)},
a2l(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2l=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.dW2(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rC(r.a.c,q),$async$a2l)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dW3(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ai7(p,m,l,j,k),$async$a2l)
case 8:o=e
if(r.c!=null)r.m(new B.dW4(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dW5(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dW6(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2l,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.J,i=j?D.agG:D.aen,h=j?D.aij:C.c,g=j?C.aP:C.M,f=j?C.bM:C.al,e=j?D.afG:C.aL
i=[i,e,h,g,f,j?C.fg:C.bP]
x=A.P(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eI(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.dX(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.dX(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.J(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bTj,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.ay,C.aE,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.ft,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4f,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uA(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bk9()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.Y,u==null,k,!0,C.t,k,A.aM(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.Nt,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dW7(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mm,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.J(i[1],C.r,1)
m=J.LO(l.a.d,4)
m=A.C(new A.N(m,new B.dW8(x,new A.aHj(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l6,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.O,e,C.O,q,C.d4,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eB,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.J(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f6W)
else q.push(A.X(C.lG,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dd(k,A.B(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b5,new A.o(u,k,s,t,k,k,C.n),C.iy,k,k,k,C.eT,k,k,k)],r))}e=A.E(A.cg(A.x(e,C.ak,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bBm,k,k,C.ag),1)
u=l.f?k:l.gcvH()
t=i[3]
s=i[1]
q=A.m(16)
s=A.et(M.a2y,D.fLS,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b7(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gc8U()
t=A.bo(C.aD,k,k,0,C.c,k,C.np,k,new A.b7(A.m(16),C.a0),k,k,k)
return A.c7(g,h,new A.an(C.a_,k,C.aa,C.t,A.a([f,v,A.bl(!0,A.ls(new B.dW9(),A.x(A.a([e,new A.D(D.bAR,A.x(A.a([s,C.O,i,C.ad,A.bE(l.f?C.t6:D.fK8,k,u,t)],r),C.ak,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cu,C.ZQ,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bk9.prototype={
oK(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.b9(v,A.hk(C.by,v.length),C.aO)}}
B.Vo.prototype={
R(){return new B.aEf()}}
B.aEf.prototype={
Z(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.au()
u.d!==$&&A.aQ()
u.d=new A.as(new A.b9(w,C.b2,C.aO),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.as(new A.b9(x,C.b2,C.aO),v)
u.f!==$&&A.aQ()
u.f=new A.as(C.as,v)},
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
aex(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aex=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dUR(r))
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
return A.b(B.a7p(p,m,n,o,C.a.i(l).length===0?null:l),$async$aex)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.fbV)
s=[1]
x=4
break}p.K(y.q).f.U(D.fay)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dUS(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aex,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.J?C.jw:C.q0,q=A.eI(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fCz,s,s,s,1,s,!0),p=A.p(s,D.bt3,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Hw,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.Y,!1,s,!0,C.t,s,A.aM(),o,s,s,s,s,s,2,D.c_s,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.Y,!1,s,!0,C.t,s,A.aM(),x,s,s,s,s,s,2,D.c_n,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.Y,!1,s,!0,C.t,s,A.aM(),w,s,s,s,s,s,2,D.c_D,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.an,s,s,s,s)
v=t.r?s:t.gc8V()
u=A.bo(C.aD,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.c7(q,r,A.cg(A.x(A.a([p,C.d4,o,C.ad,x,C.ad,w,C.mY,A.bE(t.r?C.t6:C.aUP,s,v,u)],y.p),C.ak,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.acj.prototype={}
B.bwO.prototype={
a59(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a59=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.aoP()))
x=3
return A.b(B.RG(t,s),$async$a59)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a59,w)},
gcZ(){return this.a}}
B.NO.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.ZB.prototype={
R(){return new B.aAf(new A.as(C.as,$.au()),A.k2(!0,null,!0,!0,null,null,!1))}}
B.aAf.prototype={
Z(){this.a2()
$.aV.x1$.push(new B.d95(this))},
q(){var x=this.d
x.S$=$.au()
x.P$=0
this.e.q()
this.a1()},
c90(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1H(d),u=x.a.c,t=u?C.it:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jw:v.a[0],p=A.m(24),o=A.J(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.h_,32)],n),l=A.p(w,T.aqj,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cx,16)],n),C.ar6,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uA(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bwq()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.Q,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.Y,!1,w,!0,C.t,w,A.aM(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.Gb,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b24),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d93(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mm,w,w,w,w)
f=f[1]
f=A.E(A.dI(C.nM,new B.d94(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b7(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cH,12)],n)
g=y.p
return A.eS(w,C.L,new A.cU(Q.Lg,A.c4(new A.D(C.yl,A.x(A.a([l,C.aN,k,C.O,j,C.dS,i,C.dS,A.B(A.a([f,C.at,A.E(A.c4(A.aH(!1,C.a2,!0,w,A.aO(!1,A.m(14),!0,D.elK,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc9_(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.o(w,w,w,h,n,L.Pf,C.n),C.bg),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bg),w),w,w,w,C.NB,C.d8,w,w,w)}}
B.bwq.prototype={
oK(d,e){return e.alq(e.a.toUpperCase())}}
B.Vp.prototype={
R(){return new B.aEg(A.a([],y.r),A.aX(y.N))},
gcZ(){return this.c}}
B.aEg.prototype={
Z(){var x=this
x.a2()
x.tZ()
x.w=A.df(C.jz,new B.dVX(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vy()
this.a1()},
a1c(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NN(u.a.c),$async$a1c)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AW(u.a.c),$async$a1c)
case 4:u.m(new s.dVk(u,e))
u.i8("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1c,w)},
tZ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NN(u.a.c),$async$tZ)
case 3:t=e
x=4
return A.b(B.AW(u.a.c),$async$tZ)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dVl(u,s))
if(t>0)u.i8("Received "+A.w(t)+" file(s) via My Code.")
u.NT(u.d)
B.BZ(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tZ,w)},
NT(d){return this.bDQ(d)},
bDQ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7u(r,u.a.c),$async$NT)
case 8:p=f
if(u.c==null){x=1
break}new B.dUU(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mP))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vw(r,u.a.c),$async$NT)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.M)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AW(u.a.c),$async$NT)
case 12:u.m(new o.dUV(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NT,w)},
Og(d){return this.bK5(d)},
bK5(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Og=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7u(d,u.a.c),$async$Og)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dV_(u,d,t))
x=6
return A.b(A.fI(new A.fC(t)),$async$Og)
case 6:u.i8("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fC(r.toUpperCase())),$async$Og)
case 7:u.i8("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Og,w)},
i8(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
u_(d,e){return this.cGl(d,e)},
cGl(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$u_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dVL(r,e))
u=3
x=6
return A.b(d.$0(),$async$u_)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dVM(r))
$.eW.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$u_,w)},
gaW5(){var x=this.a
return x.f||x.r||x.w},
Il(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Il=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaW5()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ccj(s,n,r,q,o,t),$async$Il)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i8("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fHh(o,u.a.c),$async$Il)
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
return A.b(B.Dm(s,o,r,q,n,t),$async$Il)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Il,w)},
a0g(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apT(u.a.c),$async$a0g)
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
return A.b(A.a4(t,!1).cd(A.dZ(new B.dVh(u,r,q),!1,null,y.H)),$async$a0g)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0g,w)},
a1m(d){return this.cpd(d)},
cpc(){return this.a1m(1)},
cpd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaW5()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apQ(u.a.c),$async$a1m)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1m,w)},
acq(d,e,f){return this.c_Z(d,e,f)},
c_Z(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8(e)
x=1
break}x=3
return A.b(u.u_(new B.dVe(u,d,null,e,f),"Uploading\u2026"),$async$acq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acq,w)},
bDY(){B.hwx(!1,new B.dUY(this))
return},
cug(){this.m(new B.dVp(this))},
aza(){var x=0,w=A.j(y.H),v=this
var $async$aza=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bDY()
return A.h(null,w)}})
return A.i($async$aza,w)},
acm(){var x=0,w=A.j(y.H),v=this
var $async$acm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u_(new B.dV3(v),"Importing\u2026"),$async$acm)
case 2:return A.h(null,w)}})
return A.i($async$acm,w)},
SD(d){return this.cFG(d)},
cFG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mP)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cd(A.dZ(new B.dVI(u,d),!1,null,y.H)),$async$SD)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Rc)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cd(A.dZ(new B.dVJ(u,d),!1,null,y.H)),$async$SD)
case 8:x=1
break
case 7:x=u.c0G(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cd(A.dZ(new B.dVK(u,d),!1,null,y.H)),$async$SD)
case 11:x=1
break
case 10:u.i8("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SD,w)},
c0G(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oO(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cNX,C.a.b7(x,w+1).toLowerCase())},
ag1(d){return this.cg5(d)},
cg5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mP)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cd(A.dZ(new B.dVf(u,d),!1,null,y.H)),$async$ag1)
case 5:x=1
break
case 4:u.m(new B.dVg(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ag1,w)},
RZ(d){return this.cxa(d)},
cxa(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pj(t,s.c,s.f),$async$RZ)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.u_(new B.dVB(u,d),"Preparing QR\u2026"),$async$RZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RZ,w)},
aiG(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aiG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dVC(),A.T(t).k("N<1,n>")).fI(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dVD(q),s),s.k("L.E"))
if(r.length===0){u.i8("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RZ(r),$async$aiG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiG,w)},
aiz(d){return this.cwI(d)},
cwI(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1H(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dVv(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aiz)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SD(d)
break
case"qr":u.RZ(A.a([d],y.r))
break
case"send_my_code":u.cgI(A.a([d],y.r))
break
case"save":u.ahV(d)
break
case"delete":u.Ja(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aiz,w)},
XY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$XY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dV0(),A.T(t).k("N<1,n>")).fI(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dV1(q),s),s.k("L.E"))
if(r.length===0){u.i8("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pj(t,s.c,s.f),$async$XY)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.u_(new B.dV2(u,r),"Preparing file\u2026"),$async$XY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XY,w)},
ah6(d){return this.cnz(d)},
cnz(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ah6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hxn(d,!1),$async$ah6)
case 3:s=f
r=s==null
q=B.a7r(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i8("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ah6,w)},
ag7(){var x=0,w=A.j(y.H),v=this,u
var $async$ag7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fOX(u,v.a.c),$async$ag7)
case 2:return A.h(null,w)}})
return A.i($async$ag7,w)},
bDX(){B.hwx(!1,new B.dUX(this,null))
return},
Jp(d,e){return this.cgJ(d,e)},
b1j(d){return this.Jp(null,d)},
cgI(d){return this.Jp(d,null)},
cgJ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dVi(s),o),o.k("L.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xu.ca().ao5(!0,C.a0D,!1),$async$Jp)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.u_(new B.dVj(l,s,r),"Preparing\u2026"),$async$Jp)
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
return A.b(B.bEH(p,l,e,s.a.c),$async$Jp)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jp,w)},
IB(d){return this.c_M(d)},
c_M(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hLT(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b1j(t),$async$IB)
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
return A.b(u.u_(new B.dVc(u,d),"Receiving video\u2026"),$async$IB)
case 11:x=1
break
case 10:x=12
return A.b(u.u_(new B.dVd(u,d),"Receiving\u2026"),$async$IB)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IB,w)},
Eq(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Eq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Dg()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ah6(t),$async$Eq)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IB(s),$async$Eq)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cd(A.dZ(new B.dVn(u),!1,null,y.N)),$async$Eq)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tZ(),$async$Eq)
case 10:x=1
break
case 9:x=11
return A.b(u.IB(C.a.i(r)),$async$Eq)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Eq,w)},
ahV(d){return this.csO(d)},
csO(d){var x=0,w=A.j(y.H),v=this
var $async$ahV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u_(new B.dVm(v,d),"Saving\u2026"),$async$ahV)
case 2:return A.h(null,w)}})
return A.i($async$ahV,w)},
Ja(d){return this.bMq(d)},
bMq(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ja=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ld(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ja)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ccm(t),$async$Ja)
case 6:case 5:s=d.a
x=7
return A.b(B.EU(u.a.c,s),$async$Ja)
case 7:u.r.W(0,s)
x=8
return A.b(u.tZ(),$async$Ja)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ja,w)},
aiM(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1H(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.dVH(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aiM)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ag7()
break
case"import":u.acm()
break}case 1:return A.h(v,w)}})
return A.i($async$aiM,w)},
c8Y(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mP))return C.qs
if(C.a.a0(x,"image/")||d.my(D.Rc))return C.up
if(C.a.t(x,"pdf"))return E.OL
return C.a1Q},
B(d){var x,w,v=this,u=null,t=B.a1H(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.Ho,u,u,u,new B.dVS(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bTT,u,u,u,v.e?u:v.gcgp(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcuf()
n.push(A.aF(u,u,u,u,A.X(v.r.a===x?D.bO3:E.aou,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.a2v,u,u,u,v.e?u:v.gc8Z(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.op,u,u,u,v.e?u:v.gb2p(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bVG,u,u,u,v.e?u:new B.dVT(v),u,u,u,u,"More options",u))
q=A.eI(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lO(new B.dVU(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.dX(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.dX(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.J?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kx(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAc(C.jD,s,!0,t,w?u:v.gcxb(),u),1)
x.push(new A.D(D.bzB,A.ls(new B.dVV(),A.B(A.a([s,C.at,A.E(new B.aAc(C.uq,"Export",!1,t,w?u:v.gbQd(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cu,C.iT,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.beM(t,v.e?u:v.gb2p(),u)
else s=A.k4(!0,u,u,new B.dVW(v,t),s,u,D.bzt,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.a_,u,C.aa,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAc.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.vV,t,new A.b7(s,C.a0),t,t,t)
return A.dl(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vV,t,new A.b7(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.et(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eF,t,t,t),u.r,v)}}
B.beM.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.J(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.ls(new B.d91(),new A.D(E.a_I,A.x(A.a([A.ls(new B.d92(),A.p(x,A.X(C.yK,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ay,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eu,C.hs,x,x,new A.bp(0.86,1,w),s),C.dS,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dS,A.dl(C.op,D.fPv,this.d,A.bo(C.aD,x,x,x,C.c,x,C.Nz,x,new A.b7(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.cu,C.BE,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.acD.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dD(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
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
if(!o||i.my(D.mP))p=D.dmU
else{p=C.a.a0(p,"image/")||i.my(D.Rc)
n=y.O
p=p?A.a([C.cO,C.aD],n):A.a([C.aK.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ay,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaqh()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mP))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.X(C.fR,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cb))
if(!(!o||i.my(D.mP)))l.push(A.h_0(C.aD,!1,j,j,j,!1,j,j,new B.d9o(k),j,j,new A.b7(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.ok,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cb))
return A.ls(new B.d9p(),new A.D(C.ee,A.aH(!1,C.a2,!0,j,A.aO(!1,r,!0,new A.D(C.a_b,A.B(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cu,h,new A.bG("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.ZD.prototype={
R(){return new B.aAh()},
gcZ(){return this.c}}
B.aAh.prototype={
Z(){this.a2()
this.xZ()},
q(){B.hM7(this.e)
this.a1()},
xZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rC(o.c,o.d),$async$xZ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hMa(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hM9(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d9l(s))
x=1
break}s.m(new B.d9m(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d9n(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xZ,w)},
a2k(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rC(t.c,t.d),$async$a2k)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f8X)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ai7(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2k)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2k,w)},
c_F(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kw(u,C.A,v,new B.d9j(w,t),C.h7,C.dw,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fG(t,C.A,v,new B.d9k(w),C.h7,C.dw,!0,v,!1,v,v)
else return C.bJ
return A.tu(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1H(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.CC,u,u,u,v.gb6a(),u,u,u,u,"Share / save",u))
r=A.eI(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.ET
else{q=v.r
if(q!=null)t=new A.D(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.em,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.dl(C.CC,D.fxK,v.gb6a(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c_F()}return A.c7(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.ZA.prototype={
R(){return new B.aAe(A.aiX(),C.bF,C.bF)},
gcZ(){return this.c}}
B.aAe.prototype={
Z(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fx(w,A.a7(w).k("fx<1>")).ir(new B.d8Z(v))
x.gcU5().ir(new B.d9_(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a7(x).k("fx<1>"))}if(x==null)x=C.b8h
x.ir(new B.d90(v))
v.xZ()},
xZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rC(p.c,p.d),$async$xZ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d8S(s))
x=1
break}x=8
return A.b(s.d.r2(0,new A.a3K(r,s.a.d.c)),$async$xZ)
case 8:if(s.c==null){x=1
break}s.m(new B.d8T(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d8U(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xZ,w)},
a_7(){var x=0,w=A.j(y.H),v=this,u
var $async$a_7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h8(0),$async$a_7)
case 5:x=3
break
case 4:x=6
return A.b(u.iu(0),$async$a_7)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_7,w)},
aTV(d){var x=d.a
return C.a.aS(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aS(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1H(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eI(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.ET
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bP5,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Pf,C.n),o,88,o,o,o,o,o,88)
t=A.kP(C.aD,o,o,m,0,new B.d8V(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aTV(p.w)+" / "+p.aTV(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.f5o,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yT:C.i2,o,o,o,o,o)
x=A.x(A.a([u,C.kT,t,x,C.d4,A.dl(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc91(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c7(v,w,A.at(new A.D(C.qe,x,o),o,o,o),o,!1,!1,o,o)}}
B.Q6.prototype={
R(){return new B.aAk()},
gcZ(){return this.c}}
B.aAk.prototype={
Z(){this.a2()
this.PV()},
PV(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PV=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h1j(o.c,o.d,new B.d9C(s)),$async$PV)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d9D(s))
x=1
break}s.e=r
q=O.i8g(r)
if(q==null){s.m(new B.d9E(s))
x=1
break}s.d=q
q.aT(0,s.gb16())
x=8
return A.b(q.iq(0).d7(0,C.ro),$async$PV)
case 8:if(s.c==null){x=1
break}s.m(new B.d9F(s))
x=9
return A.b(q.q9(0),$async$PV)
case 9:q.tE(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d9G(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PV,w)},
ceG(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d9H(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D6(0,x.gb16())
w=x.d
if(w!=null)w.q()
B.iid(x.e)
x.a1()},
aeA(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b04(u.c,u.d),$async$aeA)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aeA,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1H(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eI(A.a([A.aF(t,t,t,t,C.nx,t,t,t,u.gc8W(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.ET
else{q=u.r
if(q!=null)s=new A.D(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aiq(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fE(x,new A.an(C.A,t,C.aa,C.t,A.a([new A.Ar(s,t),A.aB(t,A.Dy(A.p(t,A.X(q?I.yT:C.i2,C.c,t,t,t,48),C.f,t,t,new A.o(C.aS,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b5,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d9J(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bJ}}return A.c7(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.ZF.prototype={
R(){return new B.aAi(new A.cB(null,y.A))}}
B.aAi.prototype={
gcG2(){var x,w,v=this.a
if(v.e!==D.Sz)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcFE(){var x,w,v=this.a
if(v.e!==D.zL)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a2()
x=v.gcG2()
if(x!=null){v.R_(x)
v.e=A.df(R.G2,new B.d9y(v,x))}w=v.gcFE()
if(w!=null){v.QZ(w)
v.f=A.df(C.fA,new B.d9z(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a1()},
QZ(d){return this.clL(d)},
clL(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apY(d),$async$QZ)
case 3:t=f
x=4
return A.b(B.ccF(d),$async$QZ)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d9q(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QZ,w)},
R_(d){return this.clM(d)},
clM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$R_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fPA(d),$async$R_)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bCB(t),$async$R_)
case 4:if(u.c==null){x=1
break}u.m(new B.d9r(u))
u.c.K(y.q).f.U(D.aRE)
case 1:return A.h(v,w)}})
return A.i($async$R_,w)},
gc4O(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc8X(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a26(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a26=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Dg()){t=u.c
if(t!=null)t.K(y.q).f.U(D.fc4)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cd(A.dZ(new B.d9s(),!1,null,y.N)),$async$a26)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bCB(s),$async$a26)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aRE)
case 1:return A.h(v,w)}})
return A.i($async$a26,w)},
aah(d){return this.bK6(d)},
bK6(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aah=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fC(C.d.aH(t,", "))),$async$aah)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aah,w)},
aey(d){return this.bJR(d)},
bJR(d){var x=0,w=A.j(y.H),v=this
var $async$aey=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fC(v.a.c)),$async$aey)
case 2:if(d.e!=null)d.K(y.q).f.U(D.f9q)
return A.h(null,w)}})
return A.i($async$aey,w)},
a20(d){return this.csQ(d)},
csQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a20=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoW(s.d,4),$async$a20)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t6(r,"ngmy_doc_share_qr.png"),$async$a20)
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
return A.i($async$a20,w)},
gaXh(){var x,w=this.a
if(w.e!==D.IA)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b7(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b7(x,13))
return null},
aae(d){return this.bK_(d)},
bK_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aae=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaXh()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$aae)
case 3:if(d.e!=null)d.K(y.q).f.U(D.fb4)
case 1:return A.h(v,w)}})
return A.i($async$aae,w)},
aez(){var x=0,w=A.j(y.H),v=this,u
var $async$aez=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vy(),$async$aez)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aez,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1H(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ar(h,0,44)+"\u2026"
i=i.e
i=i!==D.IA&&i!==D.Sz&&i!==D.zL
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eI(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.IA||t===D.Sz||t===D.zL?l:A.aF(l,l,l,l,C.kK,l,l,l,m.gb_c(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.J(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.q_(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gc4O(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.IA){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mH,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gc8X(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.Q,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hr(D.bZv,D.fHn,new B.d9t(m,d),l)],p))}if(m.a.e===D.IA&&m.gaXh()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hr(D.bW_,D.fDX,new B.d9u(m,d),l)],p))
if(m.a.e===D.zL){x=(m.w?C.dE:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.EW:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mH,l,l,l)],p))}if(m.a.e===D.Sz){x=(m.r?C.dE:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.EW:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mH,l,l,l),C.ad,A.dl(D.bRz,D.fKu,m.gctd(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oz(i,A.c7(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b8,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ad,A.B(A.a([A.E(A.et(N.CB,C.Vb,new B.d9v(m,d),l),1),C.at,A.E(A.dl(C.z6,C.aaf,new B.d9w(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.O,new A.a6(1/0,l,A.bE(C.Al,l,m.gb_c(),A.bo(C.aK,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.d9x(),y.C)}}
B.acB.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cg(A.x(A.a([w,C.aN,A.p(x,A.q_(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ag)
return A.en(A.a([A.bE(C.x0,x,new B.d8R(d),x)],u),x,x,C.n6,v,x,x,x,x,D.fwH,x)}}
B.Zz.prototype={
R(){return new B.aAd(A.zz(C.y2,C.nS,C.uF))}}
B.aAd.prototype={
q(){this.d.q()
this.a1()},
axN(d){var x,w,v,u,t
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
return A.c7(A.eI(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fEt,x,x,x,1,x,!0),C.w,A.zy(this.d,C.bU,this.gaxM()),x,!1,!1,x,x)}}
B.ZG.prototype={
R(){return new B.aAj(A.zz(C.y2,C.nS,C.uF))},
gcZ(){return this.c}}
B.aAj.prototype={
c0I(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agu(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Mg("text/plain"),$async$agu)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.fbZ)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agu,w)},
ab3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ab3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hxn(p,!0),$async$ab3)
case 3:t=e
p=t==null
s=B.a7r(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.f8x)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$ab3,w)},
q(){this.d.q()
this.a1()},
axN(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.M)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c0I(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.apo,v,v,v,w.gbPK(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.a2C,v,v,v,w.gcj8(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eI(A.a([u,t,A.aF(v,v,v,v,A.X(w.f?C.ul:P.Oz,v,v,v,v,v),v,v,v,new B.d9B(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fLn,v,v,v,1,v,!0)
u=A.zy(w.d,C.bU,w.gaxM())
x=A.m(20)
return A.c7(t,C.w,new A.an(C.a_,v,C.aa,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.J(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.es5],s),v),v,!1,!1,v,v)}}
B.beN.prototype={
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
return A.aH(!1,C.a2,!0,r,A.aO(!1,w,!0,new A.D(C.a_O,A.B(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.a9R.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.OT.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.XD.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.OS.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.Fo.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cp2.prototype={}
B.Fn.prototype={}
B.a9Q.prototype={}
B.auv.prototype={}
B.XE.prototype={}
var z=a.updateTypes(["aA<~>()","R(js)","n(js)","Vp(Y)","~()","ZC(Y)","H(H,js)","Q6(Y)","~(m9)","cu(Fn)","aA<js?>(@)","Vn(Y)","Vr(Y)","D(js)","js(@)","a8<n,@>(js)","ZB(Y)","Vo(Y)","ZD(Y)","ZA(Y)","ZF(Y)","acB(Y)","ai<js>()","ZG(Y)","acD(Y,H)","Zz(Y)","a8<n,aD>(js)","cu(XD)","cu(a9Q)","aA<cu>(Fn)"])
B.coZ.prototype={
$1(d){var x=this.a
x.x=D.aOJ
x.y.M(0,D.aOJ)},
$S:74}
B.cp_.prototype={
$1(d){var x=this.a
x.x=D.aOI
x.y.M(0,D.aOI)},
$S:74}
B.cp0.prototype={
$1(d){var x=this.a
x.ahO(A.aPX(d.data)).bN(new B.coY(x),y.b)},
$S:74}
B.coY.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cp1.prototype={
$1(d){},
$S:74}
B.cp4.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hQS(d.channel))},
$S:15}
B.cp5.prototype={
$1(d){},
$S:15}
B.cp6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i9i(w.iceConnectionState)
x.cx=w
if($.han())switch(w.a){case 0:x.cy=D.aOO
break
case 1:x.cy=D.aOP
break
case 3:x.cy=D.aOQ
break
case 5:x.cy=D.aOM
break
case 6:x.cy=D.aON
break
case 7:x.cy=D.a82
break
default:break}},
$S:149}
B.cp7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i9j(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:149}
B.cp8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ijI(w.signalingState)},
$S:149}
B.cp9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ihV(w.connectionState)},
$S:149}
B.cpa.prototype={
$1(d){},
$S:149}
B.cpb.prototype={
$1(d){},
$S:15}
B.fqt.prototype={
$1(d){var x=y.F.a(new A.qW([],[]).ow(d.target.result,!1)),w=C.y3.t(x.objectStoreNames,"blobs")
if(!w)C.y_.L1(x,"blobs")},
$S:184}
B.fOL.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wu.fl(this.b)
$.eW.mt()
this.c.$1(d)},
$S:391}
B.fON.prototype={
$1(d){return this.a.$1(B.hZR(this.b,this.c))},
$S:29}
B.fOM.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:29}
B.fOK.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fP_.prototype={
$1(d){var x=this
return B.hmD(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fP0.prototype={
$1(d){var x=this
return B.hmD(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fsY.prototype={
$1(d){var x=this
return B.ccg(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d99.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d96.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccg(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d98.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccg(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d97.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccg(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d9b.prototype={
$4(d,e,f,g){var x=null
return A.jP(A.B(A.a([A.aF(x,x,x,x,D.bQb,x,x,x,new B.d9a(d),x,x,x,x,x,x),A.E(A.F9(D.QW,!0,x,C.a1C,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.QW,x,g,C.alj,0,e,f)},
$C:"$4",
$R:4,
$S:410}
B.d9a.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fuX.prototype={
$1(d){var x,w,v=null,u=A.aJ(d,C.eN,y.o).w,t=this.a,s=t?C.it:C.c,r=A.m(28),q=A.p(v,D.bto,C.f,v,v,D.b3J,v,v,v,v,D.al9,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.Y,!1,v,!0,C.t,v,A.aM(),p,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bUu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Gg,A.x(A.a([o,C.ad,A.aL(v,C.Y,!1,v,!0,C.t,v,A.aM(),x,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.apE,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.an,v,v,v,v),C.bu,A.B(A.a([A.E(A.dI(C.di,new B.fuV(d),v),1),C.at,A.E(A.bE(D.fCY,v,new B.fuW(p,x,d),A.bo(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.G4,v,v,v,v),v)},
$S:62}
B.fuV.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fuW.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.f9H)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aCT(v,x))},
$S:0}
B.fvq.prototype={
$1(d){var x=this,w=null,v=A.aJ(d,C.eN,y.o).w,u=x.a,t=u?C.it:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.btd,C.f,w,w,D.b5c,w,w,w,w,D.al9,w,w,1/0),new A.D(C.Gg,A.x(A.a([A.aL(w,C.Y,!1,w,!0,C.t,w,A.aM(),r,w,w,w,w,w,2,B.h6p(u,"Organization name",C.GH,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.an,w,w,w,w),C.W,A.aL(w,C.Y,!1,w,!0,C.t,w,A.aM(),q,w,w,w,w,w,2,B.h6p(u,"Access code",C.nt,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.an,w,w,w,w),C.W,A.aL(w,C.Y,!1,w,!0,C.t,w,A.aM(),p,w,w,w,w,w,2,B.h6p(u,"Member password",H.Hj,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.an,w,w,w,w),C.bu,A.bE(D.fLu,w,new B.fvp(r,q,p,d),A.bo(C.aD,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.G4,w,w,w,w),w)},
$S:62}
B.fvp.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.f9M)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aG0(u,x,w))},
$S:0}
B.cc7.prototype={
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
return A.b(A.uh(p,null).d7(0,C.ZP),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.C_(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ccd.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cce.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ccf.prototype={
$1(d){return d.b},
$S:z+2}
B.cc9.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cca.prototype={
$1(d){return d.b},
$S:z+2}
B.cc8.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.ccb.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.ccc.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fOY.prototype={
$1(d){return new B.Vn(this.a,null)},
$S:z+11}
B.fOZ.prototype={
$1(d){return new B.Vr(this.a,this.b,this.c,null)},
$S:z+12}
B.dUQ.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dVZ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dW_.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dW0.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dVY(x,d))},
$S:2}
B.dVY.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dW1.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dW2.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dW3.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dW4.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dW5.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dW6.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dW9.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:101}
B.dW7.prototype={
$1(d){var x=this.a
return x.f?null:x.a_6()},
$S:2}
B.dW8.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Rc))s=C.up
else s=C.a.a0(s,"video/")||d.my(D.mP)?C.qs:C.a1Q
x=this.b.a
w=y.p
return new A.D(C.kF,A.B(A.a([A.p(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaqh(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dUR.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dUS.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cch.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:91}
B.cci.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:91}
B.fPS.prototype={
$2(d,e){return e===this.a},
$S:282}
B.fnD.prototype={
$1(d){return J.k(d)},
$S:17}
B.ft9.prototype={
$1(d){var x=this.b
B.hXR(C.Gu.ga6N(this.a)).bN(x.gaEh(x),y.H)},
$S:129}
B.fta.prototype={
$1(d){return this.a.d9(0,null)},
$S:129}
B.ftb.prototype={
$0(){return null},
$S:12}
B.ccw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ftc.prototype={
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
return new B.js(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fxi.prototype={
$1(d){return d.ag()},
$S:z+15}
B.frm.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.frn.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ccB.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mP)},
$S:z+1}
B.fTZ.prototype={
$1(d){return new B.ZB(this.a,null)},
$S:z+16}
B.d95.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fR()},
$S:9}
B.d93.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d94.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dVX.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1c()},
$S:11}
B.dVk.prototype={
$0(){var x=J.bFM(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dVl.prototype={
$0(){var x=J.bFM(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dUU.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dUT(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEG(this.c)}},
$S:0}
B.dUT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dUV.prototype={
$0(){var x=J.bFM(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dV_.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dUZ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEG(this.c)}},
$S:0}
B.dUZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVL.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dVM.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dVh.prototype={
$1(d){return new B.Vo(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dVe.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Il(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vs(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tZ(),$async$$0)
case 5:s=J.a5(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1m(s.gL(t)),$async$$0)
case 8:case 7:r.i8(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUY.prototype={
$1(d){this.a.acq(d,"No files selected.","Added")},
$S:391}
B.dVp.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.N(x,new B.dVo(),A.T(x).k("N<1,n>")))},
$S:0}
B.dVo.prototype={
$1(d){return d.a},
$S:z+2}
B.dV3.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xu.ca().cW3(C.a0D,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jx(o,0,null)}u=2
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
return A.b(B.apX(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.i8("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tZ(),$async$$0)
case 9:o.i8("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dVI.prototype={
$1(d){return new B.Q6(this.a.a.c,this.b,null)},
$S:z+7}
B.dVJ.prototype={
$1(d){return new B.ZD(this.a.a.c,this.b,null)},
$S:z+18}
B.dVK.prototype={
$1(d){return new B.ZA(this.a.a.c,this.b,null)},
$S:z+19}
B.dVf.prototype={
$1(d){return new B.Q6(this.a.a.c,this.b,null)},
$S:z+7}
B.dVg.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dVB.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Il(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7t(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i8("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cpc(),$async$$0)
case 5:x=6
return A.b(p.tZ(),$async$$0)
case 6:r=A.T(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dVx(p),r),new B.dVy(),r.k("N<ak.E,n>")).c0(0,new B.dVz())
q=A.C(r,r.$ti.k("L.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cd(A.dZ(new B.dVA(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pi(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vy(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVx.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dVw(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dVw.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVy.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dVz.prototype={
$1(d){return d.length!==0},
$S:3}
B.dVA.prototype={
$1(d){var x=this.a
return new B.ZF(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dVC.prototype={
$1(d){return d.a},
$S:z+2}
B.dVD.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dVv.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kE,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaqh(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mP)?C.qo:C.pd
p=!x||p.my(D.mP)?"Play video":"View"
return A.c4(A.bl(!0,new A.D(C.BP,A.x(A.a([q,o,t,C.aA,B.ZE(!1,u,!1,w,p,new B.dVq(d),v),B.ZE(!1,u,!1,C.jD,"Share via QR",new B.dVr(d),"Letters/numbers QR code"),B.ZE(!1,u,!1,D.a1I,"Send to their Code",new B.dVs(d),"Enter someone else's personal code"),B.ZE(!1,u,!1,C.hN,"Download / save",new B.dVt(d),v),C.am,B.ZE(!1,u,!0,C.ea,"Delete",new B.dVu(d),v)],y.p),C.ak,v,C.e,C.P,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bK(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kX,v,v,C.n),C.bg)},
$S:615}
B.dVq.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dVr.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dVs.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dVt.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dVu.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dV0.prototype={
$1(d){return d.a},
$S:z+2}
B.dV1.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dV2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7v(null,v.b,u.a.c),$async$$0)
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
B.dUX.prototype={
$1(d){var x=this.a
x.u_(new B.dUW(x,d,this.b),"Preparing\u2026")},
$S:391}
B.dUW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i8("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vs(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.i8("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bEH(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVi.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dVj.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.h1m(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GQ(new B.dV8(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i8("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cj(null,null,!1,null,new B.dV9(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dVa(s))
case 5:x=8
return A.b(r.b.iv(0,C.G_,new B.dVb()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gan(t)){s.i8("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tZ(),$async$$0)
case 9:s.i8("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dV8.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dV5(x,d,e))},
$S:205}
B.dV5.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dV9.prototype={
$1(d){return new B.acB(this.a.a,null)},
$S:z+21}
B.dVa.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dVb.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dVd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IQ(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7j(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b1j(B.IQ(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apX(new B.dV6(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h1l(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i8(q)
x=1
break}x=10
return A.b(s.tZ(),$async$$0)
case 10:o=J.cE(r)
p=o.eB(r,new B.dV7()).gL(0)
s.i8(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dV6.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dV4(x,d,e))},
$S:205}
B.dV4.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dV7.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mP)},
$S:z+1}
B.dVn.prototype={
$1(d){return new B.ZG(this.a.a.c,null)},
$S:z+23}
B.dVm.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b04(u.a.c,v.b),$async$$0)
case 2:t.i8(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVH.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.c4(A.bl(!0,new A.D(C.BP,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kE,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.ZE(!0,w,!1,C.nt,"My Code",new B.dVE(d),"Your personal code & QR \u2014 others send docs to you"),B.ZE(!1,w,!1,D.a1I,"Send to their Code",new B.dVF(this.a,d),"Enter someone else's 5-digit code + letter"),B.ZE(!1,w,!1,S.z_,"Import backup",new B.dVG(d),".ngmydoc file from another device")],y.p),C.ak,x,C.e,C.P,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bK(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kX,x,x,C.n),C.bg)},
$S:615}
B.dVE.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dVF.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bDX()},
$S:0}
B.dVG.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dVU.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.J_(D.QW,x,C.a1C,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gI(D.QW).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:762}
B.dVS.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dVT.prototype={
$0(){this.a.aiM()
return null},
$S:0}
B.dVV.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*10)),e)},
$S:101}
B.dVW.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acD(e,w,v,this.b,x.e,x.c8Y(w),new B.dVO(x,w),new B.dVP(x,v,w),new B.dVQ(x,w),new B.dVR(x,w),null)},
$S:z+24}
B.dVO.prototype={
$0(){this.a.ag1(this.b)
return null},
$S:0}
B.dVP.prototype={
$0(){var x=this.a
return x.m(new B.dVN(x,this.b,this.c))},
$S:0}
B.dVN.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dVQ.prototype={
$0(){this.a.Og(this.b)
return null},
$S:0}
B.dVR.prototype={
$0(){this.a.aiz(this.b)
return null},
$S:0}
B.d91.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*18)),e)},
$S:101}
B.d92.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:111}
B.d9p.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:101}
B.d9o.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.d9l.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d9m.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d9n.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d9j.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fG(w,C.A,x,new B.d9h(this.a),C.h7,C.dw,!0,x,!1,x,x)
$.aV.x1$.push(new B.d9i(this.a))
return C.bJ},
$S:136}
B.d9h.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d9f(this.a))
return C.bJ},
$S:190}
B.d9f.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d9c(x))},
$S:9}
B.d9c.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d9i.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d9e(x))},
$S:9}
B.d9e.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d9k.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d9g(this.a))
return C.bJ},
$S:190}
B.d9g.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d9d(x))},
$S:9}
B.d9d.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d8Z.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8Y(x,d))},
$S:1763}
B.d8Y.prototype={
$0(){return this.a.f=this.b===C.v2},
$S:0}
B.d9_.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8X(x,d))},
$S:9}
B.d8X.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d90.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8W(x,d))},
$S:9}
B.d8W.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d8S.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d8T.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d8U.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d8V.prototype={
$1(d){return this.a.d.Nf(0,A.dD(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d9C.prototype={
$0(){var x=this.a.a
return B.rC(x.c,x.d)},
$S:1764}
B.d9D.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d9E.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d9F.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d9G.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d9H.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d9J.prototype={
$0(){var x=this.a
x.m(new B.d9I(x))},
$S:0}
B.d9I.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h8(0)
else x.q9(0)},
$S:0}
B.d9y.prototype={
$1(d){return this.a.R_(this.b)},
$S:11}
B.d9z.prototype={
$1(d){return this.a.QZ(this.b)},
$S:11}
B.d9q.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d9r.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d9s.prototype={
$1(d){return D.hiE},
$S:z+25}
B.d9x.prototype={
$2(d,e){if(d)B.Vy()},
$S:124}
B.d9t.prototype={
$0(){return this.a.aah(this.b)},
$S:0}
B.d9u.prototype={
$0(){return this.a.aae(this.b)},
$S:0}
B.d9v.prototype={
$0(){return this.a.aey(this.b)},
$S:0}
B.d9w.prototype={
$0(){return this.a.a20(this.b)},
$S:0}
B.d8R.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d9B.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qc(),$async$$0)
case 2:u.m(new B.d9A(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d9A.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ccD.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mP)},
$S:z+1}
B.ccE.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aN(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ccC.prototype={
$2(d,e){return this.bkV(d,e)},
bkV(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vz(u.c,A.G(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1765}
B.fwV.prototype={
$1(d){if(d===D.a81&&(this.a.a.a&30)===0)this.a.fW(0)},
$S:z+27}
B.fwW.prototype={
$0(){},
$S:12}
B.fxs.prototype={
bmu(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fkV(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hhN(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bmu(d,e)},
$S:749}
B.fxr.prototype={
$1(d){var x=this
d.b=new B.fxq(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fxq.prototype={
$1(d){return this.bmt(d)},
bmt(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b05(n,m),$async$$1)
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
return A.b(B.fkV(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a7s(m),$async$$1)
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
x(v=B.aAg.prototype,"gcg1","QA",0)
x(v,"gcgT","Jq",0)
x(v,"gcgo","ya",0)
x(v=B.aEe.prototype,"gc8S","aew",0)
x(v,"gc8T","a_5",0)
x(v,"gcvG","aif",0)
x(v=B.aEh.prototype,"gc8U","a_6",0)
x(v,"gcvH","a2l",0)
x(B.aEf.prototype,"gc8V","aex",0)
x(B.aAf.prototype,"gc9_","c90",4)
x(v=B.aEg.prototype,"gcgp","a0g",0)
x(v,"gcuf","cug",4)
x(v,"gb2p","aza",0)
x(v,"gcxb","aiG",0)
x(v,"gbQd","XY",0)
x(v,"gc8Z","Eq",0)
x(B.aAh.prototype,"gb6a","a2k",0)
x(B.aAe.prototype,"gc91","a_7",0)
x(v=B.aAk.prototype,"gb16","ceG",4)
x(v,"gc8W","aeA",0)
x(v=B.aAi.prototype,"gctd","a26",0)
x(v,"gb_c","aez",0)
w(B.aAd.prototype,"gaxM","axN",8)
x(v=B.aAj.prototype,"gcj8","agu",0)
x(v,"gbPK","ab3",0)
w(v,"gaxM","axN",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cp2,B.a9Q,B.auv,B.aCT,B.aG0,B.js,B.acj,B.bwO,B.Fn,B.XE])
w(B.cp3,B.cp2)
w(B.b5e,B.a9Q)
x(A.hM,[B.coZ,B.cp_,B.cp0,B.coY,B.cp1,B.cp4,B.cp5,B.cp6,B.cp7,B.cp8,B.cp9,B.cpa,B.cpb,B.fqt,B.fOL,B.fON,B.fOM,B.fP_,B.fP0,B.fsY,B.d96,B.d98,B.d97,B.d9b,B.fuX,B.fvq,B.cc7,B.cce,B.ccf,B.cca,B.cc8,B.ccb,B.ccc,B.fOY,B.fOZ,B.dW0,B.dW9,B.dW7,B.dW8,B.fnD,B.ft9,B.fta,B.ccw,B.ftc,B.fxi,B.frm,B.frn,B.ccB,B.fTZ,B.d95,B.d93,B.dVX,B.dUT,B.dUZ,B.dVh,B.dUY,B.dVo,B.dVI,B.dVJ,B.dVK,B.dVf,B.dVx,B.dVw,B.dVy,B.dVz,B.dVA,B.dVC,B.dVD,B.dVv,B.dV0,B.dV1,B.dUX,B.dVi,B.dV9,B.dV7,B.dVn,B.dVH,B.dVU,B.dVV,B.d91,B.d92,B.d9p,B.d9o,B.d9j,B.d9h,B.d9f,B.d9i,B.d9k,B.d9g,B.d8Z,B.d9_,B.d90,B.d8V,B.d9y,B.d9z,B.d9s,B.ccD,B.ccE,B.fwV,B.fxr,B.fxq])
w(B.b5f,B.auv)
x(A.jc,[B.fOK,B.d99,B.d9a,B.fuV,B.fuW,B.fvp,B.dUQ,B.dVZ,B.dW_,B.dVY,B.dW1,B.dW2,B.dW3,B.dW4,B.dW5,B.dW6,B.dUR,B.dUS,B.ftb,B.d94,B.dVk,B.dVl,B.dUU,B.dUV,B.dV_,B.dVL,B.dVM,B.dVe,B.dVp,B.dV3,B.dVg,B.dVB,B.dVq,B.dVr,B.dVs,B.dVt,B.dVu,B.dV2,B.dUW,B.dVj,B.dVc,B.dV5,B.dVa,B.dVb,B.dVd,B.dV4,B.dVm,B.dVE,B.dVF,B.dVG,B.dVS,B.dVT,B.dVO,B.dVP,B.dVN,B.dVQ,B.dVR,B.d9l,B.d9m,B.d9n,B.d9c,B.d9e,B.d9d,B.d8Y,B.d8X,B.d8W,B.d8S,B.d8T,B.d8U,B.d9C,B.d9D,B.d9E,B.d9F,B.d9G,B.d9H,B.d9J,B.d9I,B.d9q,B.d9r,B.d9t,B.d9u,B.d9v,B.d9w,B.d8R,B.d9B,B.d9A,B.fwW])
x(A.lZ,[B.acC,B.NO,B.a9R,B.OT,B.XD,B.OS,B.Fo])
x(A.ag,[B.ZC,B.Vn,B.Vr,B.Vo,B.ZB,B.Vp,B.ZD,B.ZA,B.Q6,B.ZF,B.Zz,B.ZG])
x(A.ah,[B.aAg,B.aEe,B.aEh,B.aEf,B.aAf,B.aEg,B.aAh,B.aAe,B.aAk,B.aAi,B.aAd,B.aAj])
x(A.ax,[B.ad3,B.aAc,B.beM,B.acD,B.acB,B.beN])
x(A.ke,[B.ccd,B.cc9,B.cch,B.cci,B.fPS,B.dV8,B.dV6,B.dVW,B.d9x,B.ccC,B.fxs])
x(A.iV,[B.bk9,B.bwq])})()
A.jl(b.typeUniverse,JSON.parse('{"b5e":{"a9Q":[]},"b5f":{"auv":[]},"ZC":{"ag":[],"v":[]},"aAg":{"ah":["ZC"]},"ad3":{"ax":[],"v":[]},"Vn":{"ag":[],"v":[]},"Vr":{"ag":[],"v":[]},"aEe":{"ah":["Vn"]},"aEh":{"ah":["Vr"]},"bk9":{"iV":[]},"Vo":{"ag":[],"v":[]},"aEf":{"ah":["Vo"]},"ZB":{"ag":[],"v":[]},"Vp":{"ag":[],"v":[]},"acD":{"ax":[],"v":[]},"ZD":{"ag":[],"v":[]},"ZA":{"ag":[],"v":[]},"Q6":{"ag":[],"v":[]},"ZF":{"ag":[],"v":[]},"acB":{"ax":[],"v":[]},"Zz":{"ag":[],"v":[]},"ZG":{"ag":[],"v":[]},"aAf":{"ah":["ZB"]},"bwq":{"iV":[]},"aEg":{"ah":["Vp"]},"aAc":{"ax":[],"v":[]},"beM":{"ax":[],"v":[]},"aAh":{"ah":["ZD"]},"aAe":{"ah":["ZA"]},"aAk":{"ah":["Q6"]},"aAi":{"ah":["ZF"]},"aAd":{"ah":["Zz"]},"aAj":{"ah":["ZG"]},"beN":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.aw
return{J:x("us"),k:x("Me()"),m:x("bw<n,n>"),F:x("re"),g:x("aA<js?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<n,R>>"),t:x("O<a8<n,@>>"),r:x("O<js>"),w:x("O<+file,name(lJ,n)>"),u:x("O<cX>"),s:x("O<n>"),E:x("O<iV>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<H>"),G:x("bh"),A:x("cB<ah<ag>>"),n:x("ai<js>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bA<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iF"),e:x("inE"),af:x("EA"),U:x("js"),b:x("cu"),C:x("aD"),aK:x("wk"),ab:x("Fn"),br:x("auv"),v:x("XE"),N:x("n"),X:x("bp<K>"),Q:x("lV"),D:x("dK"),aw:x("bG<n>"),cd:x("Z<a8<n,@>>"),c7:x("v"),ch:x("bZ<ai<js>>"),aW:x("bZ<dK?>"),aY:x("bZ<~>"),cx:x("acC"),b1:x("bi<ai<js>>"),cf:x("bi<dK?>"),d4:x("bi<~>"),c4:x("aCT"),bG:x("aG0"),q:x("n8"),B:x("pA<Fn>"),c6:x("pA<a9R>"),y:x("R"),i:x("K"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<js>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("js?"),R:x("aD?"),c:x("XE?"),d:x("+answerQr,transfer(n,aA<ai<js>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,NO,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acj?"),bk:x("aCT?"),ag:x("aG0?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b24=new A.ay(C.aD,2,C.r,-1)
D.c34=new A.a9(C.a5,C.a8,C.x,C.a3O,null,null)
D.b3J=new A.o(null,null,null,C.mr,null,D.c34,C.n)
D.b5c=new A.o(null,null,null,C.mr,null,E.Hw,C.n)
D.aen=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.afG=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.agG=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.aij=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fxD=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fMq=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.E8,null,null,null,null,null,null,null,null,null)
D.dec=x([D.fxD,C.am,D.fMq],y.p)
D.bt3=new A.fi(C.ag,C.e,C.i,C.E,null,C.p,null,0,D.dec,null)
D.fQU=new A.y("Create your organization",null,C.fw,null,null,null,null,null,null,null,null,null)
D.fC8=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.E8,null,null,null,null,null,null,null,null,null)
D.duI=x([D.fQU,C.am,D.fC8],y.p)
D.btd=new A.fi(C.ag,C.e,C.i,C.E,null,C.p,null,0,D.duI,null)
D.fN2=new A.y("Team Member sign-in",null,C.fw,null,null,null,null,null,null,null,null,null)
D.fG4=new A.y("Enter the access code and password from your organization.",null,G.E8,null,null,null,null,null,null,null,null,null)
D.dss=x([D.fN2,C.am,D.fG4],y.p)
D.bto=new A.fi(C.ag,C.e,C.i,C.E,null,C.p,null,0,D.dss,null)
D.bzt=new A.Q(16,10,16,28)
D.bzB=new A.Q(16,14,16,4)
D.bAR=new A.Q(20,0,20,16)
D.bBm=new A.Q(20,8,20,16)
D.al9=new A.Q(24,22,24,20)
D.a1I=new A.a0(63394,"MaterialIcons",!1)
D.bO3=new A.a0(983813,"MaterialIcons",!1)
D.bP5=new A.ae(C.ans,44,C.c,null,null,null)
D.bQb=new A.ae(C.l9,null,C.ae,null,null,null)
D.bRz=new A.ae(C.jj,18,null,null,null,null)
D.bTj=new A.ae(D.a1I,26,C.c,null,null,null)
D.bTT=new A.ae(C.Cp,null,null,null,null,null)
D.bUu=new A.ae(C.Cy,null,null,null,null,null)
D.bVG=new A.ae(W.a1W,null,null,null,null,null)
D.bW_=new A.ae(C.hi,16,null,null,null,null)
D.bZv=new A.ae(C.rA,16,null,null,null,null)
D.bPm=new A.ae(C.nt,null,null,null,null,null)
D.c_n=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPm,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bV1=new A.ae(C.GH,null,null,null,null,null)
D.c_s=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bV1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPJ=new A.ae(H.Hj,null,null,null,null,null)
D.c_D=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cOu=x([C.fg,C.b_,C.aD],y.O)
D.c4X=new A.a9(C.ay,C.aE,C.x,D.cOu,null,null)
D.cNX=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.QW=x([C.fg,C.aD],y.O)
D.Rc=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mP=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dmU=x([C.nb,C.aD],y.O)
D.eel={iceServers:0}
D.aJg={urls:0}
D.dyo=new A.bw(D.aJg,["stun:stun.l.google.com:19302"],y.m)
D.dyn=new A.bw(D.aJg,["stun:stun1.l.google.com:19302"],y.m)
D.d3X=x([D.dyo,D.dyn],A.aw("O<a8<n,n>>"))
D.dxH=new A.bw(D.eel,[D.d3X],A.aw("bw<n,@>"))
D.IA=new B.NO(0,"lanDirect")
D.Sy=new B.NO(1,"cloudStash")
D.dJm=new B.NO(2,"inlineInstant")
D.Sz=new B.NO(3,"webrtcLink")
D.zL=new B.NO(4,"videoCloud")
D.fMp=new A.y("Receive file",null,C.n0,null,null,null,null,null,null,null,null,null)
D.cDO=x([E.apN,C.ac,D.fMp],y.p)
D.f0T=new A.ce(C.aM,C.b8,C.i,C.m,null,C.p,null,0,D.cDO,null)
D.elK=new A.D(C.cl,D.f0T,null)
D.fo9=new A.F(!0,C.c,null,null,null,null,null,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.HY,null,null,null)
D.fyb=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fo9,null,C.K,null,null,null,null,null,null,null)
D.ekV=new A.D(C.BU,D.fyb,null)
D.b9D=new A.ca(C.A,null,null,D.ekV,null)
D.es5=new A.cN(0,null,0,28,null,null,D.b9D,null)
D.esp=new B.a9R(0,"RTCDataChannelConnecting")
D.aOI=new B.a9R(1,"RTCDataChannelOpen")
D.aOJ=new B.a9R(3,"RTCDataChannelClosed")
D.esq=new B.Fo(0,"RTCIceConnectionStateNew")
D.esr=new B.Fo(1,"RTCIceConnectionStateChecking")
D.ess=new B.Fo(2,"RTCIceConnectionStateCompleted")
D.est=new B.Fo(3,"RTCIceConnectionStateConnected")
D.esu=new B.Fo(4,"RTCIceConnectionStateCount")
D.esv=new B.Fo(5,"RTCIceConnectionStateFailed")
D.esw=new B.Fo(6,"RTCIceConnectionStateDisconnected")
D.aOK=new B.Fo(7,"RTCIceConnectionStateClosed")
D.aOL=new B.XD(0,"RTCIceGatheringStateNew")
D.esx=new B.XD(1,"RTCIceGatheringStateGathering")
D.a81=new B.XD(2,"RTCIceGatheringStateComplete")
D.a82=new B.OS(0,"RTCPeerConnectionStateClosed")
D.aOM=new B.OS(1,"RTCPeerConnectionStateFailed")
D.aON=new B.OS(2,"RTCPeerConnectionStateDisconnected")
D.aOO=new B.OS(3,"RTCPeerConnectionStateNew")
D.aOP=new B.OS(4,"RTCPeerConnectionStateConnecting")
D.aOQ=new B.OS(5,"RTCPeerConnectionStateConnected")
D.esy=new B.OT(0,"RTCSignalingStateStable")
D.esz=new B.OT(1,"RTCSignalingStateHaveLocalOffer")
D.esA=new B.OT(2,"RTCSignalingStateHaveRemoteOffer")
D.esB=new B.OT(3,"RTCSignalingStateHaveLocalPrAnswer")
D.esC=new B.OT(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aOR=new B.OT(5,"RTCSignalingStateClosed")
D.f5o=new A.av(160,48)
D.baX=new A.fj(2,null,null,null,null,C.aD,null,null,null,null)
D.f6W=new A.a6(16,16,D.baX,null)
D.fBs=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new A.b2(D.fBs,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fJ7=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new A.b2(D.fJ7,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRY=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f8x=new A.b2(D.fRY,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fB2=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f8X=new A.b2(D.fB2,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fNe=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aRE=new A.b2(D.fNe,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fOG=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f9q=new A.b2(D.fOG,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTs=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f9H=new A.b2(D.fTs,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRn=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f9M=new A.b2(D.fRn,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fSB=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fay=new A.b2(D.fSB,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fzE=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fb4=new A.b2(D.fzE,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fKZ=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fbp=new A.b2(D.fKZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fDN=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fbV=new A.b2(D.fDN,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTy=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fbZ=new A.b2(D.fTy,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fzU=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fc4=new A.b2(D.fzU,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fyy=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fcj=new A.b2(D.fyy,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fvh=new A.y("NGMY DOC SHARE",null,C.aT0,null,null,null,null,null,null,null,null,null)
D.fwH=new A.y("Show this to sender",null,C.iK,null,null,null,null,null,null,null,null,null)
D.fxK=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fCz=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fCY=new A.y("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fDX=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fEt=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fHn=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fK8=new A.y("Send to their Doc Share",null,C.nJ,null,null,null,null,null,null,null,null,null)
D.fKu=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fKN=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fLn=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new A.y("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fLS=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eF,null,null,null,null,null,null,null,null,null)
D.fPb=new A.y("Share files & videos\nwith a scan.",null,C.aT3,null,null,null,null,null,null,null,null,null)
D.fPv=new A.y("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hiE=new B.Zz(null)
D.abd=new B.acC(0,"docShare")
D.abe=new B.acC(1,"gate")
D.VM=new B.acC(2,"gateNoIndividual")})();(function staticFields(){$.aOH=null
$.fiE=function(){var x=y.N
return A.U(x,x)}()
$.GD=A.U(y.N,y.D)
$.agH=A.U(y.N,A.aw("lJ"))
$.Rs=A.U(y.N,y.D)
$.fjc=A.U(y.N,A.aw("acj"))
$.ccv=A.U(y.S,A.aw("bwO"))
$.hhM=1
$.i4Y=null
$.i4X=null
$.hXc=null
$.h6C=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"io8","hzg",()=>new B.cp3())
x($,"im3","han",()=>C.a.t(A.by(A.by(A.by(A.Hd(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["lEDkTsGqhmroRHRED/6+PZUqwWs="]=a.current})($__dart_deferred_initializers__);