((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cvM:function cvM(){},
ie0(d){var x=null,w=new B.b8u(d,D.ePO,new A.q8(x,x,y.c6),new A.q8(x,x,y.B))
w.bF4(d)
return w},
b8u:function b8u(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cvH:function cvH(d){this.a=d},
cvI:function cvI(d){this.a=d},
cvJ:function cvJ(d){this.a=d},
cvG:function cvG(d){this.a=d},
cvK:function cvK(d){this.a=d},
ie1(d,e){var x=y.N
x=new B.b8v(d,e,A.S(x,y.e),A.S(x,y.z))
x.bF5(d,e)
return x},
b8v:function b8v(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cvN:function cvN(d){this.a=d},
cvO:function cvO(d){this.a=d},
cvP:function cvP(d){this.a=d},
cvQ:function cvQ(d){this.a=d},
cvR:function cvR(d){this.a=d},
cvS:function cvS(d){this.a=d},
cvT:function cvT(d){this.a=d},
cvU:function cvU(d){this.a=d},
hr5(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.be("IndexedDB not available"))
return C.xJ.HB(x,"ngmy_doc_share_v1",new B.fHc(),1)},
ikT(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eB(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w5(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cL.aL(d)
return x}catch(w){return v}return v},
T1(d,e){return B.iBb(d,e)},
iBb(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T1=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRC
x=7
return A.b(o==null?$.aRC=B.hr5():o,$async$T1)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mH(s,"blobs","readwrite")
C.iV.mr(J.mF(q,"blobs"),r,d)
x=8
return A.b(J.oX(q),$async$T1)
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
return A.i($async$T1,w)},
T0(d){return B.iBa(d)},
iBa(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRC
x=7
return A.b(o==null?$.aRC=B.hr5():o,$async$T0)
case 7:s=f
r=J.mH(s,"blobs","readonly")
x=8
return A.b(C.iV.yf(J.mF(r,"blobs"),d),$async$T0)
case 8:q=f
x=9
return A.b(J.oX(r),$async$T0)
case 9:o=B.ikT(q)
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
return A.i($async$T0,w)},
ajo(d){return B.iB9(d)},
iB9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRC
x=7
return A.b(p==null?$.aRC=B.hr5():p,$async$ajo)
case 7:s=f
r=J.mH(s,"blobs","readwrite")
C.iV.H5(J.mF(r,"blobs"),d)
x=8
return A.b(J.oX(r),$async$ajo)
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
return A.i($async$ajo,w)},
fHc:function fHc(){},
inw(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btB(w,v))}return u},
hTp(d,e){var x,w={},v=A.b_p("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h7E(w,v,e)
C.xL.xd(v,"change",new B.h7G(w,v,!1))
C.xL.xd(v,"cancel",new B.h7F(w))
$.eY.mT()
v.click()
A.bM(C.anp,new B.h7D(w),y.H)},
h7E:function h7E(d,e,f){this.a=d
this.b=e
this.c=f},
h7G:function h7G(d,e,f){this.a=d
this.b=e
this.c=f},
h7F:function h7F(d){this.a=d},
h7D:function h7D(d){this.a=d},
E8(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E8=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd7()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVw()?3:4
break
case 3:x=5
return A.b(B.hNO(e,d,s,!0,!1,f,g,h,!1,i),$async$E8)
case 5:x=1
break
case 4:x=6
return A.b(B.SD(d,s,f,g,h,i),$async$E8)
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
return A.b(B.JN(s,d),$async$E8)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fCt(s,d),$async$E8)
case 14:x=12
return A.b(r.hNO(q,p,o,n,m,l,k,j,a1,i),$async$E8)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ca(A.e4(new B.h7T(s,i,d,f,g,h),!1,null,y.H)),$async$E8)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ca(A.e4(new B.h7U(s,i,d,f,g,h),!1,null,y.H)),$async$E8)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E8,w)},
SD(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SD=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3b(e),$async$SD)
case 3:u=k
x=4
return A.b(B.asf(d,e,!1),$async$SD)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JN(e,d),$async$SD)
case 7:if(k){v=D.aeM
x=1
break}x=8
return A.b(B.WY(e),$async$SD)
case 8:v=t?D.Yd:D.aeN
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b39(d,e)){v=D.aeM
x=1
break}x=11
return A.b(B.WY(e),$async$SD)
case 11:v=t?D.Yd:D.aeN
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hlJ(d,e)){v=D.aeM
x=1
break}x=14
return A.b(B.WY(e),$async$SD)
case 14:v=D.Yd
x=1
break
case 13:v=t?D.Yd:D.aeN
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SD,w)},
fCt(d,e){var x=0,w=A.j(y.y),v
var $async$fCt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b39(e,d)){v=!1
x=1
break}x=3
return A.b(B.b3b(d),$async$fCt)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCt,w)},
hNO(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ca(A.e4(new B.fJT(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hIf(d,e,f,g,h,i,j){return new B.a0l(e,j,d,g,h,i,f,null)},
fLT(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fLT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fLW(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fLT)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLT,w)},
fMn(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fMn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fMp(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fMn)
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
return A.i($async$fMn,w)},
hri(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
h_5(d,e){var x=0,w=A.j(y.H),v
var $async$h_5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WY(e),$async$h_5)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).e6()
case 1:return A.h(v,w)}})
return A.i($async$h_5,w)},
h7T:function h7T(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h7U:function h7U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeA:function aeA(d,e){this.a=d
this.b=e},
fJT:function fJT(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0l:function a0l(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCK:function aCK(){this.c=this.a=this.d=null},
dhi:function dhi(d,e){this.a=d
this.b=e},
dhf:function dhf(d){this.a=d},
dhh:function dhh(d){this.a=d},
dhg:function dhg(d){this.a=d},
dhk:function dhk(){},
dhj:function dhj(d){this.a=d},
af3:function af3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFq:function aFq(d,e){this.a=d
this.b=e},
aIH:function aIH(d,e,f){this.a=d
this.b=e
this.c=f},
fLW:function fLW(d,e,f){this.a=d
this.b=e
this.c=f},
fLU:function fLU(d){this.a=d},
fLV:function fLV(d,e,f){this.a=d
this.b=e
this.c=f},
fMp:function fMp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMo:function fMo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ch7(d,e,f,g,h){return B.i8H(d,e,f,g,h)},
i8H(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ch7=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dS(d,new B.ch8(s,e,h,g,f,q),y.g),y.l),$async$ch7)
case 3:r=p.aP(j)
case 4:if(!r.B()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch7,w)},
b36(d,e,f,g,h){return B.i8I(d,e,f,g,h)},
i8I(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b36=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axO("GET",d)
o=A.bJB()
if(o==null)o=new A.Io(A.a([],y.W))
x=7
return A.b(o.fe(0,s).d8(0,C.HG),$async$b36)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DD(),$async$b36)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CF(q,h,o,e,f,"Received via QR")
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
return A.i($async$b36,w)},
b35(d){return B.i8F(d)},
i8F(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b35=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wh(d,null).d8(0,C.oW),$async$b35)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aN(0,A.m7(A.m4(p.e)).cJ(0,p.w),null)
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
return A.i($async$b35,w)},
ch6(d){return B.i8G(d)},
i8G(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ch6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wh(d,null).d8(0,C.re),$async$ch6)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m7(A.m4(q.e)).cJ(0,q.w)
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
return A.i($async$ch6,w)},
ch8:function ch8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jV:function jV(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JL(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aE(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i8N(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JL(C.a.aV(t,u.length))}return null},
i8O(d){var x=B.JL(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i8J(){var x,w=$.og(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.ho(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a95(d){return B.i8K(d)},
i8K(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a95=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bM),$async$a95)
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
return A.i($async$a95,w)},
a96(d,e){return B.i8L(d,e)},
i8L(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a96=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i1(d,e,!1,!1,C.cZ,null),$async$a96)
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
return A.i($async$a96,w)},
CE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CE)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JL(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a97(r),$async$CE)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a95("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CE)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JL(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CE)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i8J()
x=14
return A.b(B.a97(m),$async$CE)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a96("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CE)
case 15:k=f
x=16
return A.b(B.a96("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CE)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CE)
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
return A.i($async$CE,w)},
a97(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a97=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JL(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a95("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a97)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a97,w)},
a98(d,e,f,g){return B.i8P(d,e,f,g)},
i8P(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a98=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JL(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a97(r),$async$a98)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.che())>1048576||g.aR(d,new B.chf())){v=B.FM(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9j("myCode",d,a0),$async$a98)
case 4:u=a3
try{t=C.V.aN(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cj(s)||J.aa(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FM(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3e(u,g.gI(d),a0),$async$a98)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.og().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dS(d,new B.chg(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b37(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a98)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a98,w)},
FM(d,e,f,g,h){return B.i8M(d,e,f,g,h)},
i8M(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FM=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FM)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cG(a6,0,new B.cha())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.og().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.B()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aE(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JP(a9,q)
a0=new A.LE(a1)
u=6
case 9:x=11
return A.b(a0.B(),$async$FM)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.aa(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.f6().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nV(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acM(a1.a,a4,"media",a1.d,a2).yc(m,n,new A.F1(!0,q.c)),$async$FM)
case 12:J.c_(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FM)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUl(r),$async$FM)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dS(a6,new B.chb(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b37(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FM)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUl(r),$async$FM)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FM,w)},
b37(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b37=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a95(t),$async$b37)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.ch9(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a96(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b37,w)},
OT(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OT=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a95("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OT)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cj(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aP(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.B()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a0(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b38(k,a0),$async$OT)
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
return A.b(B.b3d(h),$async$OT)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.X4(g,a0),$async$OT)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.aa(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("L.E")
e=A.B(new A.X(r,new B.chc(),q),n)
d=A.B(new A.X(r,new B.chd(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cJ(d,0,A.dx(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a96("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OT)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OT,w)},
b38(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b38=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cj(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aP(h),r=y.f,q=0
case 3:if(!u.B()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a1(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iFx(k,j)
C.d.u(s,i)
x=5
return A.b(B.E6(l,m,"Received via My Code",t,e,i),$async$b38)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUl(s),$async$b38)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b38,w)},
che:function che(){},
chf:function chf(){},
chg:function chg(){},
cha:function cha(){},
chb:function chb(){},
ch9:function ch9(){},
chc:function chc(){},
chd:function chd(){},
h7Q(d,e){var x=0,w=A.j(y.H)
var $async$h7Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ca(A.e4(new B.h7R(e),!1,null,y.H)),$async$h7Q)
case 2:return A.h(null,w)}})
return A.i($async$h7Q,w)},
bJ4(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bJ4=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cj(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ca(A.e4(new B.h7S(g,e,f),!1,null,y.y)),$async$bJ4)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ4,w)},
h7R:function h7R(d){this.a=d},
h7S:function h7S(d,e,f){this.a=d
this.b=e
this.c=f},
WV:function WV(d,e){this.c=d
this.a=e},
aGP:function aGP(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
WZ:function WZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGS:function aGS(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e57:function e57(d){this.a=d},
e58:function e58(d){this.a=d},
e59:function e59(d){this.a=d},
e56:function e56(d,e){this.a=d
this.b=e},
e5a:function e5a(d){this.a=d},
e5b:function e5b(d){this.a=d},
e5c:function e5c(d,e){this.a=d
this.b=e},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5f:function e5f(d){this.a=d},
e5i:function e5i(){},
e5g:function e5g(d){this.a=d},
e5h:function e5h(d,e){this.a=d
this.b=e},
bnE:function bnE(){},
WW:function WW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGQ:function aGQ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e4_:function e4_(d){this.a=d},
e40:function e40(d){this.a=d},
hlK(d){var x=d.ic
if(x>=0)return C.n.M(x)
return 10},
i8R(d){var x=d.l8
if(x>=0)return x
return 4.99},
i8Q(d){var x=d.lR,w=y.N
w=x.j2(x,new B.chi(),w,w)
return w},
hDc(d){var x=d.kK,w=y.N
w=x.j2(x,new B.chj(),w,w)
return w},
b3b(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b3b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b3b)
case 7:s=f
r=A.v(p)
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
return A.i($async$b3b,w)},
a9a(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9a)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a9a)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9a,w)},
WY(d){var x=0,w=A.j(y.H),v,u
var $async$WY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WY)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WY,w)},
hlJ(d,e){var x,w,v
if(B.i8R(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i8Q(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b39(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hDc(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hDd(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hDc(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.dw(f,0,0,0,0,0).a).aa().ag())
d.kK=w},
asg(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$asg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$asg)
case 7:s=f
r=A.v(p)
r=A.ev(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$asg,w)},
ash(d){var x=0,w=A.j(y.H),v,u,t
var $async$ash=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.asg(d),$async$ash)
case 3:u=f
x=5
return A.b(A.aB(),$async$ash)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$ash)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ash,w)},
asf(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$asf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hlK(d)
if(u<=0){v=!1
x=1
break}if(B.hlJ(d,e)){v=!1
x=1
break}x=3
return A.b(B.asg(e),$async$asf)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asf,w)},
b3a(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b3a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JN(e,d),$async$b3a)
case 3:if(g){v=-1
x=1
break}u=B.hlK(d)
if(u<=0){v=-1
x=1
break}if(B.hlJ(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.asg(e),$async$b3a)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3a,w)},
chl(d,e,f){var x=0,w=A.j(y.y),v
var $async$chl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JN(e,d),$async$chl)
case 3:if(h){v=!1
x=1
break}v=B.asf(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chl,w)},
chk(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$chk=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
x=3
return A.b(B.chl(d,u,i.gVw()),$async$chk)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chk,w)},
a99(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a99=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
if(i.gVw()){v=!0
x=1
break}if(B.b39(d,u)){v=!0
x=1
break}x=5
return A.b(A.lY(u,C.Vv),$async$a99)
case 5:x=k?3:4
break
case 3:B.hDd(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a99)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.ly(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Vv,"Doc Share for Organizations"),$async$a99)
case 7:if(!k){v=!1
x=1
break}B.hDd(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a99)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a99,w)},
chi:function chi(){},
chj:function chj(){},
h8Q(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h8Q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h8Q)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fyF.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i3([r],e.c))
s.toString
$.fyF.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8Q,w)},
iHP(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fyF.br($.fyF,new B.h8S(d))},
h8S:function h8S(d){this.a=d},
fAk(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fAk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aE(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],f))
s.toString
u=A.nn(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jC,null,y.H),$async$fAk)
case 3:C.C2.fo(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mT()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAk,w)},
aik(d,e,f){var x=0,w=A.j(y.H),v
var $async$aik=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fzl.n(0,d,new B.aeh(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$aik)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$aik)
case 2:return A.h(null,w)}})
return A.i($async$aik,w)},
aie(d){return B.ipw(d)},
ipw(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aie=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fzl.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aie)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cj(s)){v=null
x=1
break}o=J.b8(s,new B.fE9(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.aeh(r)
$.fzl.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aie,w)},
St(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$St=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.Hy.n(0,d,u)
x=3
return A.b(B.T1(d,u),$async$St)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$St,w)},
aRX(d){return B.ipu(d)},
ipu(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hy.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.T0(d),$async$aRX)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hy.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRX)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cL.aL(r)
x=!J.cj(q)?9:10
break
case 9:B.St(d,q)
x=11
return A.b(J.fO(s,d),$async$aRX)
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
return A.i($async$aRX,w)},
ill(d){if(d==null)return A.fb(null,y.K)
if(y.J.b(d))return A.fb(new Uint8Array(A.cd(J.eB(d,0,null))),y.K)
if(y.D.b(d))return A.fb(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fb(new Uint8Array(A.cd(A.w5(d,0,null))),y.K)
if(y.I.b(d))return A.fb(new Uint8Array(A.cd(d)),y.K)
return A.fb(null,y.K)},
a3U(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.cb(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fK7(r,t),!1,s)
A.fI(r,"error",new B.fK8(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ij(0,C.Pb,new B.fK9())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3U,w)},
aSh(d,e,f){return B.irW(d,e,f)},
irW(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSh=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3U(i),$async$aSh)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.aa(j)
x=11
return A.b(B.T1(o,p),$async$aSh)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c_(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.aik(k,j,s),$async$aSh)
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
return A.i($async$aSh,w)},
aSg(d,e,f){return B.irV(d,e,f)},
irV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSg=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSh(d,e,f),$async$aSg)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3U(f),$async$aSg)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hy.n(0,s,r)
$.SN.n(0,s,r)
x=11
return A.b(B.St(s,r),$async$aSg)
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
return A.i($async$aSg,w)},
CF(d,e,f,g,h,i){return B.i9_(d,e,f,g,h,i)},
i9_(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CF=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jV(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3h(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.St(s,d),$async$CF)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CF)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcq().aL(d)),$async$CF)
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
return A.b(B.Bz(e),$async$CF)
case 12:j=a2
J.c_(j,m)
x=13
return A.b(B.HI(e,j),$async$CF)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CF,w)},
X_(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X_=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bz(d),$async$X_)
case 3:t=a1
s=e.length,r=J.cK(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hDf(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jV(m,n,k,l,j,"From folder",null,B.b3h(),null)
$.aiJ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3U(o),$async$X_)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hy.n(0,h,g)
$.SN.n(0,h,g)
B.St(h,g)
x=9
break
case 10:x=11
return A.b(B.aSg(d,m,o),$async$X_)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HI(d,t),$async$X_)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X_,w)},
hlO(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hlO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hDf(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JO(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CF(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hlO,w)},
JO(d,e,f,g,h,i){return B.i8Z(d,e,f,g,h,i)},
i8Z(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JO=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LE(A.dx(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.B(),$async$JO)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cj(m)){x=6
break}J.fV(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TC(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kA(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T1(k,l),$async$JO)
case 11:J.c_(q,k);++p
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
return A.b(j.a2(0),$async$JO)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T1(k,new Uint8Array(A.cd(n))),$async$JO)
case 15:J.c_(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aik(r,q,g),$async$JO)
case 16:f=new B.jV(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3h(),null)
x=17
return A.b(B.Bz(d),$async$JO)
case 17:e=a6
J.c_(e,f)
x=18
return A.b(B.HI(d,e),$async$JO)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JO,w)},
X1(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X1=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiJ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3U(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aie(s),$async$X1)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T0(u[o]),$async$X1)
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
v=A.w5(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SN.h(0,s)
if(i==null)i=$.Hy.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.te(d,e),$async$X1)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SN.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w5(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X1,w)},
hDf(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
te(d,e){return B.i90(d,e)},
i90(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$te=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SN.h(0,f)
if(e==null)e=$.Hy.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiJ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3U(s),$async$te)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hy.n(0,f,r)
$.SN.n(0,f,r)
B.St(f,r)
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
return A.b(B.aie(f),$async$te)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aed(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T0(g[l]),$async$te)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8U()
if(!C.aI.gar(r)){$.Hy.n(0,f,r)
$.SN.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRX(f),$async$te)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SN.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X1(a0,a1,0,g),$async$te)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.Hy.n(0,f,h)
$.SN.n(0,f,h)
B.St(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$te,w)},
i93(d){var x,w,v=$.aiJ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i94(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i3([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i91(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asn(d,e,f,g,h){return B.i92(d,e,f,g,h)},
i92(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asn=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiJ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3U(s),$async$asn)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.te(g,e),$async$asn)
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
return A.b(n.iL(d).yc(h,r,new A.F1(!0,e.c)),$async$asn)
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
return A.i($async$asn,w)},
hDh(d,e,f,g,h){var x,w,v,u,t=$.hDg
$.hDg=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.chw.n(0,t,new B.bAI(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aed(u)))
return t},
hlP(d){var x=0,w=A.j(y.H)
var $async$hlP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hlP,w)},
JP(d,e){var $async$JP=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiJ.h(0,h)
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
return A.qQ(B.X1(d,e,p,o<q?o:q),$async$JP,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qQ(A.H3(n),$async$JP,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qQ(B.aie("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JP,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qQ(B.T0(h[l]),$async$JP,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qQ(A.H3(k),$async$JP,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qQ(B.te(d,e),$async$JP,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qQ(A.H3(A.w5(j,p,o<i?o:i)),$async$JP,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qQ(null,0,w)
case 2:return A.qQ(t.at(-1),1,w)}})
var x=0,w=A.hMs($async$JP,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hOA(w)},
b3j(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.chw.h(0,d)
if(t==null||J.cj(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7b(),$async$b3j)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3j,w)},
X0(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chw.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7b(),$async$X0)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aik(r.c,u,r.z),$async$X0)
case 4:t=new B.jV(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3h(),null)
u=r.a
x=5
return A.b(B.Bz(u),$async$X0)
case 5:s=f
J.c_(s,t)
x=6
return A.b(B.HI(u,s),$async$X0)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X0,w)},
a9g(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chw.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajo(u[s]),$async$a9g)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9g,w)},
chy(d,e,f){var x=0,w=A.j(y.H)
var $async$chy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFR(d,e,f),$async$chy)
case 2:return A.h(null,w)}})
return A.i($async$chy,w)},
chz(d,e,f){var x=0,w=A.j(y.H)
var $async$chz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFS(d,e,f),$async$chz)
case 2:return A.h(null,w)}})
return A.i($async$chz,w)},
FN(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bz(d),$async$FN)
case 2:p=g
J.mG(p,new B.chx(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hy.X(0,v)
$.aiJ.X(0,e)
x=3
return A.b(B.aie(v),$async$FN)
case 3:u=g
$.fzl.X(0,v)
x=4
return A.b(A.aB(),$async$FN)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FN)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FN)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajo(s[q]),$async$FN)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajo(v),$async$FN)
case 13:x=14
return A.b(B.HI(d,p),$async$FN)
case 14:return A.h(null,w)}})
return A.i($async$FN,w)},
b3i(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.te(d,e),$async$b3i)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fAk(t,A.aE(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3i,w)},
Bz(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bz)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fKa(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bz,w)},
HI(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HI)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fOv(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$HI)
case 3:return A.h(null,w)}})
return A.i($async$HI,w)},
bFR(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bz(d),$async$bFR)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fIg(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aI7(f))
x=4
return A.b(B.HI(d,u),$async$bFR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFR,w)},
bFS(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bz(d),$async$bFS)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fIh(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cTm(f))
x=4
return A.b(B.HI(d,u),$async$bFS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFS,w)},
aeh:function aeh(d){this.a=d},
fE9:function fE9(){},
fK7:function fK7(d,e){this.a=d
this.b=e},
fK8:function fK8(d){this.a=d},
fK9:function fK9(){},
chx:function chx(d){this.a=d},
bAI:function bAI(d,e,f,g,h,i,j,k,l){var _=this
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
fKa:function fKa(){},
fOv:function fOv(){},
fIg:function fIg(d){this.a=d},
fIh:function fIh(d){this.a=d},
a9h(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.chC())?3:4
break
case 3:x=5
return A.b(B.b3k(d,e),$async$a9h)
case 5:u=g
if(u!=null){t=u.c
B.OV(d,u.b,e,t)}v=u
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
return A.b(B.b3f(s),$async$a9h)
case 10:case 9:if(g){v=new A.RO(1,D.V8,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.X2(d,e),$async$a9h)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.X7(!0,!0,d,e),$async$a9h)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OV(d,D.B5,e,t)
v=new A.RO(p,D.B5,t)
x=1
break}v=B.chB(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9h,w)},
X2(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$X2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9j(null,d,e),$async$X2)
case 3:p=g
try{u=C.V.aN(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cj(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3e(p,d.length,e),$async$X2)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.chz(e,C.d.gH(d).a,r.b),$async$X2)
case 7:case 6:q=r.a
x=8
return A.b(B.OV(d,D.V8,e,q),$async$X2)
case 8:v=new A.RO(d.length,D.V8,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X2,w)},
X3(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$X3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n_(D.ns)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9i(d,e),$async$X3)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.chu(s,d,e,t),$async$X3)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3f(t),$async$X3)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.te(e,d),$async$X3)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.X2(A.a([d],y.r),e),$async$X3)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
X5(){var x=0,w=A.j(y.H)
var $async$X5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hlI(),$async$X5)
case 2:x=3
return A.b(B.aUH(),$async$X5)
case 3:return A.h(null,w)}})
return A.i($async$X5,w)},
a9i(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3h()
x=3
return A.b(B.chy(e,d.a,u),$async$a9i)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9i,w)},
OV(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.V8&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9i(p,f),$async$OV)
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
return A.b(B.cht(o,p,u,f),$async$OV)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.chu(o,p,f,t),$async$OV)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.chs(o,u,p,f),$async$OV)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OV,w)},
b3k(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chA(e,d),$async$b3k)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.X7(!1,!0,d,e),$async$b3k)
case 4:u=g
if(u!=null){t=u.b
v=new A.RO(u.a,D.B5,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3k,w)},
chA(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$chA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X1(d,s,0,1),$async$chA)
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
return A.i($async$chA,w)},
chB(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$chB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9j(null,d,e),$async$chB)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hDe(u)
if(t.length>800){v=null
x=1
break}v=new A.RO(d.length,D.e4B,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chB,w)},
aso(d,e,f){return B.i97(d,e,f)},
i97(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aso=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.dc(g,"\ufeff"))g=J.nm(g,1)
x=B.hlN(g)?3:4
break
case 3:x=5
return A.b(B.chv(g),$async$aso)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.dc(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nm(g,13))
try{k=B.FO(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.dc(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nm(g,13))
u=9
x=12
return A.b(B.b3d(q),$async$aso)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X4(p,a0)
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
case 11:case 7:if(J.dc(g,"NGMYDOCSYNC0|"))try{n=B.hlM(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X4(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.dc(g,"N2|")){v=B.JQ(C.a.i(J.nm(g,3)),d,a0)
x=1
break}if(J.dc(g,"NGMYDOCSYNC2|")){v=B.JQ(C.a.i(J.nm(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c3(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JQ(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.X4(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aso,w)},
JQ(d,e,f){return B.i95(d,e,f)},
i95(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JQ=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aE(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c3(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aE(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b35(r),$async$JQ)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b35(A.cH(s,0,null)),$async$JQ)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cj(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ch7(o,r,a1,n,a2),$async$JQ)
case 11:m=a4
x=J.cj(m)?12:13
break
case 12:x=14
return A.b(B.ch6(q),$async$JQ)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.X4(l,a2),$async$JQ)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cj(m)?null:m
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
return A.i($async$JQ,w)},
a9j(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9j=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aP(e),t=y.N,s=y.z
case 3:if(!u.B()){x=4
break}r=u.gP(u)
x=5
return A.b(B.te(f,r),$async$a9j)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcq().aL(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9j,w)},
X4(d,e){return B.i96(d,e)},
i96(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X4=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.V.aN(0,a2,null)
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
e=J.aP(r)
case 7:if(!e.B()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cL.aL(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.CF(i,a3,d,k,l,o),$async$X4)
case 9:h=a5
if(h!=null)J.c_(n,h)
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
return A.i($async$X4,w)},
OU:function OU(d,e){this.a=d
this.b=e},
chC:function chC(){},
a3t(d){var x=A.Q(d).ax.a===C.I,w=x?D.akz:D.ai0,v=x?D.amp:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajw:C.bn
return new A.aJY([w,s,v,u,t,x?C.fz:C.bU])},
hUt(d,e){var x=e?C.v.j(0.72):C.ba
return A.cf(null,x,!0,null,new B.hda(e),d,null,!0,!0,y.N)},
chh(d,e,f,g,h,i,j,k,l){return new B.WX(e,l,d,f,k,j,g,h,i,null)},
a0n(d,e,f,g,h,i,j){return new B.bi9(g,h,j,e,i,d,f,null)},
hda:function hda(d){this.a=d},
a0k:function a0k(d,e){this.c=d
this.a=e},
aCJ:function aCJ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhe:function dhe(d){this.a=d},
dhc:function dhc(d){this.a=d},
dhd:function dhd(d){this.a=d},
bAk:function bAk(){},
WX:function WX(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGR:function aGR(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e55:function e55(d){this.a=d},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4u:function e4u(d,e){this.a=d
this.b=e},
e42:function e42(d,e,f){this.a=d
this.b=e
this.c=f},
e41:function e41(d){this.a=d},
e43:function e43(d,e){this.a=d
this.b=e},
e48:function e48(d,e,f){this.a=d
this.b=e
this.c=f},
e47:function e47(d){this.a=d},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4V:function e4V(d){this.a=d},
e4q:function e4q(d,e,f){this.a=d
this.b=e
this.c=f},
e4n:function e4n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e46:function e46(d){this.a=d},
e4y:function e4y(d){this.a=d},
e4x:function e4x(){},
e4c:function e4c(d){this.a=d},
e4R:function e4R(d,e){this.a=d
this.b=e},
e4S:function e4S(d,e){this.a=d
this.b=e},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4p:function e4p(d,e){this.a=d
this.b=e},
e4K:function e4K(d,e){this.a=d
this.b=e},
e4G:function e4G(d){this.a=d},
e4F:function e4F(d){this.a=d},
e4H:function e4H(){},
e4I:function e4I(){},
e4J:function e4J(d,e){this.a=d
this.b=e},
e4L:function e4L(){},
e4M:function e4M(d){this.a=d},
e4E:function e4E(d,e){this.a=d
this.b=e},
e4z:function e4z(d){this.a=d},
e4A:function e4A(d){this.a=d},
e4B:function e4B(d){this.a=d},
e4C:function e4C(d){this.a=d},
e4D:function e4D(d){this.a=d},
e49:function e49(){},
e4a:function e4a(d){this.a=d},
e4b:function e4b(d,e){this.a=d
this.b=e},
e45:function e45(d,e){this.a=d
this.b=e},
e44:function e44(d,e,f){this.a=d
this.b=e
this.c=f},
e4r:function e4r(d){this.a=d},
e4s:function e4s(d,e,f){this.a=d
this.b=e
this.c=f},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4h:function e4h(d){this.a=d},
e4e:function e4e(d,e,f){this.a=d
this.b=e
this.c=f},
e4i:function e4i(d){this.a=d},
e4j:function e4j(d){this.a=d},
e4k:function e4k(){},
e4m:function e4m(d,e){this.a=d
this.b=e},
e4f:function e4f(d){this.a=d},
e4d:function e4d(d,e,f){this.a=d
this.b=e
this.c=f},
e4g:function e4g(){},
e4w:function e4w(d){this.a=d},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
e4N:function e4N(d){this.a=d},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4P:function e4P(d){this.a=d},
e52:function e52(d){this.a=d},
e50:function e50(d){this.a=d},
e51:function e51(d){this.a=d},
e53:function e53(){},
e54:function e54(d,e){this.a=d
this.b=e},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d,e,f){this.a=d
this.b=e
this.c=f},
e4W:function e4W(d,e,f){this.a=d
this.b=e
this.c=f},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e5_:function e5_(d,e){this.a=d
this.b=e},
aCG:function aCG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bi8:function bi8(d,e,f){this.c=d
this.d=e
this.a=f},
dha:function dha(){},
dhb:function dhb(){},
aeB:function aeB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhy:function dhy(){},
dhx:function dhx(d){this.a=d},
a0m:function a0m(d,e,f){this.c=d
this.d=e
this.a=f},
aCL:function aCL(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dhu:function dhu(d){this.a=d},
dhv:function dhv(d,e,f){this.a=d
this.b=e
this.c=f},
dhw:function dhw(d,e){this.a=d
this.b=e},
dhs:function dhs(d,e){this.a=d
this.b=e},
dhq:function dhq(d){this.a=d},
dho:function dho(d){this.a=d},
dhl:function dhl(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhn:function dhn(d){this.a=d},
dht:function dht(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhm:function dhm(d){this.a=d},
a0j:function a0j(d,e,f){this.c=d
this.d=e
this.a=f},
aCI:function aCI(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dh7:function dh7(d){this.a=d},
dh6:function dh6(d,e){this.a=d
this.b=e},
dh8:function dh8(d){this.a=d},
dh5:function dh5(d,e){this.a=d
this.b=e},
dh9:function dh9(d){this.a=d},
dh4:function dh4(d,e){this.a=d
this.b=e},
dh0:function dh0(d){this.a=d},
dh1:function dh1(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
dh3:function dh3(d){this.a=d},
Rm:function Rm(d,e,f){this.c=d
this.d=e
this.a=f},
aCO:function aCO(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dhL:function dhL(d){this.a=d},
dhM:function dhM(d){this.a=d},
dhN:function dhN(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhP:function dhP(d,e){this.a=d
this.b=e},
dhQ:function dhQ(d){this.a=d},
dhS:function dhS(d){this.a=d},
dhR:function dhR(d){this.a=d},
a0o:function a0o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCM:function aCM(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dhH:function dhH(d,e){this.a=d
this.b=e},
dhI:function dhI(d,e){this.a=d
this.b=e},
dhz:function dhz(d,e,f){this.a=d
this.b=e
this.c=f},
dhA:function dhA(d){this.a=d},
dhB:function dhB(){},
dhG:function dhG(){},
dhC:function dhC(d,e){this.a=d
this.b=e},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhE:function dhE(d,e){this.a=d
this.b=e},
dhF:function dhF(d,e){this.a=d
this.b=e},
aez:function aez(d,e){this.c=d
this.a=e},
dh_:function dh_(d){this.a=d},
a0i:function a0i(d){this.a=d},
aCH:function aCH(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0p:function a0p(d,e){this.c=d
this.a=e},
aCN:function aCN(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dhK:function dhK(d){this.a=d},
dhJ:function dhJ(d){this.a=d},
bi9:function bi9(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i98(){var x,w=$.og(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.ho(v)},
OW(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OW=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OW)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bM),$async$OW)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
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
return A.i($async$OW,w)},
a9k(d){return B.i99(d)},
i99(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9k)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$a9k)
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
return A.i($async$a9k,w)},
X6(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$X6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OW(),$async$X6)
case 3:s=g
r=J.a1(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9k(s),$async$X6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X6,w)},
X7(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$X7=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$X7)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.chE(),t),t.k("L.E"))}if(u.length===0){v=null
x=1
break}s=B.i98()
t=A.T(u).k("O<1,a9<o,aH>>")
r=A.B(new A.O(u,new B.chF(s),t),t.k("aj.E"))
x=6
return A.b(B.OW(),$async$X7)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9k(q),$async$X7)
case 7:x=8
return A.b(B.a9l(r,u,g,s),$async$X7)
case 8:v=new A.bu8(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X7,w)},
asp(d){var x=0,w=A.j(y.y),v,u,t
var $async$asp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OW(),$async$asp)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asp,w)},
chG(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OW(),$async$chG)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a1(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chG,w)},
a9l(d,e,f,g){return B.i9a(d,e,f,g)},
i9a(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9l=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.asn("media",r,new B.chD(s,e,g),f,q),$async$a9l)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.X6(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9l)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.X6(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9l)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.X6(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9l)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9l,w)},
FO(d,e,f){return B.i9b(d,e,f)},
i9b(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FO=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FO)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asp(b3),$async$FO)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j5,null,g),$async$FO)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asp(b3),$async$FO)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OW(),$async$FO)
case 10:e=c0
g=J.a1(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a1(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cj(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a1(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.B()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a1(a7)
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
b0=A.nV(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acM(a8.a,b0,"media",a8.d,a9).DY(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b36(k,n,o,s,b7),$async$FO)
case 17:j=c0
if(j!=null){J.c_(p,j);++q
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
case 21:if(!g.B()){x=22
break}a7=g.gP(g)
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
a8=A.nV(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acM(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FO)
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
a0=A.dE(A.a0(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9k(e),$async$FO)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FO,w)},
chE:function chE(){},
chF:function chF(d){this.a=d},
chD:function chD(d,e,f){this.a=d
this.b=e
this.c=f},
aUH(){var x=0,w=A.j(y.H),v,u
var $async$aUH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ikD=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aUH)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aUH)
case 3:u=$.hrv
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aUH)
case 4:$.hrv=$.itV=$.itW=null
return A.h(null,w)}})
return A.i($async$aUH,w)},
fO6(d){var x=0,w=A.j(y.H),v,u
var $async$fO6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abj){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fO7(new A.cb(u,y.aY))
x=3
return A.b(u.ij(0,C.hd,new B.fO8()),$async$fO6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fO6,w)},
itS(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i8T(x):x},
hrA(d){var x=0,w=A.j(y.T),v,u,t
var $async$hrA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asr(u)
x=1
break}v=B.hlM(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hrA,w)},
hrz(d){var x=0,w=A.j(y.T),v,u,t
var $async$hrz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.ass(u)
x=1
break}v=B.hlM(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hrz,w)},
h8z(d){var x=0,w=A.j(y.T),v
var $async$h8z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ass(d),$async$h8z)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8z,w)},
bGP(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bGP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hrz(d),$async$bGP)
case 3:q=f
if(q==null){x=1
break}t=C.V.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a1(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGP,w)},
fBa(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fBa=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X0(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CF(d.a8U(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBa,w)},
HJ(d,e,f){return B.iwi(d,e,f)},
iwi(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HJ=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hrA(a1),$async$HJ)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aN(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a1(u)
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
return A.b($.hWu().aIp(D.dOq,null),$async$HJ)
case 4:l=d.hrv=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aed(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fOI(f,k,new B.fOJ(f,a2,k,j,a0,p),a2,j,a0,p,new A.cb(t,y.ch))
x=5
return A.b(l.aag(0,new B.Zk(r,"offer")),$async$HJ)
case 5:d=l
x=7
return A.b(l.ao5(0),$async$HJ)
case 7:x=6
return A.b(d.aa8(0,a4),$async$HJ)
case 6:x=8
return A.b(B.fO6(l),$async$HJ)
case 8:x=9
return A.b(l.asu(),$async$HJ)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.itS(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ast(m,h),$async$HJ)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hDe(h)
case 11:v=new A.btl(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HJ,w)},
fO7:function fO7(d){this.a=d},
fO8:function fO8(){},
fOJ:function fOJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fOI:function fOI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fOH:function fOH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iyn(d){switch(d){case"new":return D.ePP
case"checking":return D.ePQ
case"connected":return D.ePS
case"completed":return D.ePR
case"failed":return D.ePU
case"disconnected":return D.ePV
case"closed":return D.aTY
case"count":return D.ePT}return D.aTY},
iyo(d){switch(d){case"new":return D.aTZ
case"gathering":return D.ePW
case"complete":return D.abj}return D.aTZ},
iJr(d){switch(d){case"stable":return D.ePX
case"have-local-offer":return D.ePY
case"have-local-pranswer":return D.eQ_
case"have-remote-offer":return D.ePZ
case"have-remote-pranswer":return D.eQ0
case"closed":return D.aU4}return D.aU4},
iHw(d){switch(d){case"new":return D.aU1
case"connecting":return D.aU2
case"connected":return D.aU3
case"closed":return D.abk
case"disconnected":return D.aU0
case"failed":return D.aU_}return D.abk},
abJ:function abJ(d,e){this.a=d
this.b=e},
Q5:function Q5(d,e){this.a=d
this.b=e},
Zj:function Zj(d,e){this.a=d
this.b=e},
Q4:function Q4(d,e){this.a=d
this.b=e},
Gi:function Gi(d,e){this.a=d
this.b=e},
cvL:function cvL(){},
hnF(d){var x=new B.Gh()
x.a=d
x.b=!0
return x},
Gh:function Gh(){this.b=this.a=$},
abI:function abI(){},
ax_:function ax_(){},
Zk:function Zk(d,e){this.a=d
this.b=e},
hlI(){var x=0,w=A.j(y.H)
var $async$hlI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hlI,w)},
hlL(d,e,f){var x=0,w=A.j(y.T),v
var $async$hlL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n_(D.ns))){v=null
x=1
break}v=B.h8Q(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hlL,w)},
hDe(d){var x,w=F.ahr.a6V(C.e3.aL(d),null)
if(w.length===0){x=C.e3.aL(d)
return C.cS.gcq().aL(x)}return C.cS.gcq().aL(w)},
i8S(d){var x,w,v=C.cL.aL(d)
try{x=C.cg.cJ(0,F.ahq.biC(v,!1))
return x}catch(w){x=C.cg.cJ(0,v)
return x}},
hlM(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i8S(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cg.cJ(0,C.cL.aL(x))
return v}catch(u){return x}}return null},
i8T(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aK(s,"\n")},
i8U(){var x,w=$.og(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.ho(v)},
b3c(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b3c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bM),$async$b3c)
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
return A.i($async$b3c,w)},
chm(d,e){return B.i8V(d,e)},
i8V(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$chm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cZ,null),$async$chm)
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
return A.i($async$chm,w)},
b3f(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3c(d),$async$b3f)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3f,w)},
b3e(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i8U()
r=C.a.i(f)
t=C.e3.aL(s)
x=3
return A.b(B.chm(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcq().aL(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3e)
case 3:if(!h){v=null
x=1
break}v=new A.a2s("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3e,w)},
b3d(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b3d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.b3c(o),$async$b3d)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.cg.cJ(0,C.cL.aL(u))
if(J.ja(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b3d,w)},
chn(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$chn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(O.bHO("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cZ),$async$chn)
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
return A.i($async$chn,w)},
b3g(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JM(),$async$b3g)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3g,w)},
ask(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ask=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$ask)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3g(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ask,w)},
asi(d,e){var x=0,w=A.j(y.H)
var $async$asi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asi)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$asi)
case 2:return A.h(null,w)}})
return A.i($async$asi,w)},
a9c(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9c=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9c)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JM(),$async$a9c)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dy(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9b(s),$async$a9c)
case 5:x=6
return A.b(B.asi(f,u),$async$a9c)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9c,w)},
a9d(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9d=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9d)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JM(),$async$a9d)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a1(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a0(r,y.N,y.z)
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
return A.b(B.asi(g,q),$async$a9d)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9b(u),$async$a9d)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9d,w)},
a9e(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9e=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9e)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JM(),$async$a9e)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a1(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b39(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9e)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9e)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9e,w)},
cho(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cho=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cho)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aN(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a0(q,y.N,y.z)
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
return A.i($async$cho,w)},
JN(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cho(d),$async$JN)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3g(t),$async$JN)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asj(d),$async$JN)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b39(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asj(d),$async$JN)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JN,w)},
asj(d){var x=0,w=A.j(y.H)
var $async$asj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asj)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asj)
case 2:return A.h(null,w)}})
return A.i($async$asj,w)},
b3h(){var x,w=$.og(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.ho(v)},
a9f(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aE(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hlN(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
chr(d){return B.i8X(d)},
i8X(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$chr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9f(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bM),$async$chr)
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
return A.i($async$chr,w)},
asm(d,e){return B.i8Y(d,e)},
i8Y(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9f(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cZ,null),$async$asm)
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
return A.i($async$asm,w)},
cht(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cht=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9f(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asm(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cht)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cht,w)},
chs(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chs=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9f(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asm(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chs,w)},
chu(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$chu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9f(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asm(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chu,w)},
chv(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$chv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hlN(d)){v=null
x=1
break}x=3
return A.b(B.chr(d),$async$chv)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a1(u)
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
return A.i($async$chv,w)},
a9m(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9m=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9m)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bM),$async$a9m)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
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
return A.i($async$a9m,w)},
asq(d){return B.i9c(d)},
i9c(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asq)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$asq)
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
return A.i($async$asq,w)},
asr(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.dc(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asr)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9m(),$async$asr)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.cg.cJ(0,C.cL.aL(q))
if(J.ja(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asq(s),$async$asr)
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
return A.i($async$asr,w)},
ast(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ast=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$ast)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9m(),$async$ast)
case 4:u=g
t=J.a1(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e3.aL(C.a.i(e))
q.n(0,"answer",C.cS.gcq().aL(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asq(u),$async$ast)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ast,w)},
ass(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ass=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$ass)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9m(),$async$ass)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.cg.cJ(0,C.cL.aL(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ass,w)},
arj(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$arj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bl$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.oD)){v=null
x=1
break}x=3
return A.b(p.lC(e),$async$arj)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hq),$async$arj)
case 7:q=g
o=q
o=o==null?null:J.eX(J.v2(o))
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
return A.i($async$arj,w)},
iFx(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.n.v(w),5,"0")
return v},
h6I(d){return B.iFz(d)},
iFz(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h6I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iL("media").Mo(d,3600),$async$h6I)
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
return A.i($async$h6I,w)},
E6(d,e,f,g,h,i){var x=null
return B.iFw(d,e,f,g,h,i)},
iFw(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E6=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hDh(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hlP(r),$async$E6)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h6I(o),$async$E6)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9g(r),$async$E6)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aXI)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Io(A.a([],g))
x=15
return A.b(d.fe(0,A.axO("GET",A.cH(n,0,null))).d8(0,C.HG),$async$E6)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9g(r),$async$E6)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LE(d)
u=19
case 22:x=24
return A.b(d.B(),$async$E6)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3j(r,k),$async$E6)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$E6)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X0(r)
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
return A.b(B.a9g(r),$async$E6)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E6,w)},
aUl(d){return B.iFy(d)},
iFy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iL("media").X(0,d),$async$aUl)
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
return A.i($async$aUl,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[67]
I=c[99]
P=c[311]
Q=c[53]
F=c[304]
K=c[183]
G=c[69]
R=c[269]
S=c[270]
E=c[261]
H=c[101]
T=c[235]
U=c[72]
V=c[184]
W=c[267]
L=c[249]
X=c[296]
M=c[312]
B=a.updateHolder(c[27],B)
D=c[310]
Y=c[234]
N=c[243]
Z=c[78]
A_=c[86]
B.cvM.prototype={
aIp(d,e){return this.cUR(d,e)},
cUR(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aIp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kD(A.cz(t)))
t=J.k(u)
v=B.ie1(C.cS.gcq().aL(new A.d1(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aIp,w)}}
B.b8u.prototype={
bF4(d){var x=this,w=x.w
w.onclose=A.hG(new B.cvH(x))
w.onopen=A.hG(new B.cvI(x))
w.onmessage=A.hG(new B.cvJ(x))
w.onbufferedamountlow=A.hG(new B.cvK(x))},
gd5(d){return this.x},
akl(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$akl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gh()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hnF(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$akl)
case 8:v=t.hnF(s.aqs(f,0,null))
x=1
break
case 7:case 4:v=B.hnF(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akl,w)}}
B.b8v.prototype={
bF5(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cvN(x)))
w.addEventListener("icecandidate",A.hG(new B.cvO(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cvP(x)))
w.onicegatheringstatechange=A.hG(new B.cvQ(x))
w.addEventListener("signalingstatechange",A.hG(new B.cvR(x)))
if(!$.hvM())w.addEventListener("connectionstatechange",A.hG(new B.cvS(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cvT(x)))
w.addEventListener("track",A.hG(new B.cvU(x)))},
ao5(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ao5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ej(s.createAnswer(A.kD(A.cz(A.S(y.N,y.z)))),y.aQ),$async$ao5)
case 3:t=f
v=new B.Zk(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao5,w)},
aa8(d,e){return this.btZ(0,e)},
btZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aa8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aa8)
case 2:return A.h(null,w)}})
return A.i($async$aa8,w)},
aag(d,e){return this.buj(0,e)},
buj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aag=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aag)
case 2:return A.h(null,w)}})
return A.i($async$aag,w)},
asu(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$asu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zk(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asu,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fb(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.aeA.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0l.prototype={
R(){return new B.aCK()},
gd7(){return this.c}}
B.aCK.prototype={
Z(){this.a4()
this.agQ()},
agQ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3a(u.e,u.c),$async$agQ)
case 2:t=e
if(v.c!=null)v.l(new B.dhi(v,t))
return A.h(null,w)}})
return A.i($async$agQ,w)},
S1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$S1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.asf(t.e,t.c,!1),$async$S1)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fFb)
x=1
break}x=4
return A.b(B.a9a(u.a.c,"individual"),$async$S1)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a8u(A.e4(new B.dhf(u),!1,null,y.H)),$async$S1)
case 5:case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
KF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$KF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fLT(o),$async$KF)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9e(o.e,r,s,q),$async$KF)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fCa)
x=1
break}x=5
return A.b(B.a9a(u.a.c,"member"),$async$KF)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a8u(A.e4(new B.dhh(u),!1,null,y.H)),$async$KF)
case 6:case 1:return A.h(v,w)}})
return A.i($async$KF,w)},
zc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a99(t.e,o,t.f,t.r,t.w,s),$async$zc)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9a(u.a.c,"org_owner"),$async$zc)
case 4:x=5
return A.b(B.ask(u.a.c),$async$zc)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fMn(o),$async$zc)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9c(s,t,o,q.c),$async$zc)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fC6)
x=1
break}x=10
return A.b(B.ask(u.a.c),$async$zc)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a8u(A.e4(new B.dhg(u),!1,null,y.H)),$async$zc)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zc,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nX:C.nh,p=B.hlK(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dL,y.m).w
w=A.n(28)
v=A.a([new A.ab(0,C.H,C.az.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.fZC,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.ho,s,s,s),C.aB,D.hiW,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cf9,C.m),s,s,s,s,C.ew,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lU(new B.dhk(),s),C.N,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.af3(C.f9,C.aGo,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcnc(),s),C.af],u))
w.push(new B.af3(C.q7,C.a6I,"Team Member","Sign in with your organization access code + password",t.gco7(),s))
w.push(C.af)
w.push(new B.af3(C.asb,C.a8n,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcnC(),s))
return A.c6(s,q,A.bn(!0,A.cc(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.af3.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eM(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lR,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.A_,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFq.prototype={}
B.aIH.prototype={}
B.jV.prototype={
n_(d){var x=this.b,w=C.a.os(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gat9(){var x=this.d
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
bi4(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cTm(d){return this.bi4(null,d)},
aI7(d){return this.bi4(d,null)}}
B.WV.prototype={
R(){return new B.aGP(new A.cB(null,y.A))},
gd7(){return this.c}}
B.aGP.prototype={
Z(){this.a4()
this.agR()},
agR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CE(u.a.c),$async$agR)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e3Z(u,t))
case 1:return A.h(v,w)}})
return A.i($async$agR,w)},
agS(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$agS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fP(new A.fD(s)),$async$agS)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fG6)
case 1:return A.h(v,w)}})
return A.i($async$agS,w)},
a0M(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0M=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.arj(s.d,4),$async$a0M)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rG(r,"ngmy_my_code_"+m+".png"),$async$a0M)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ad(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0M,w)},
akM(){var x=0,w=A.j(y.H),v,u=this,t
var $async$akM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.acl("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$akM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akM,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nX:C.nh,m=o?C.c:C.a_,l=A.eQ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l2
else if(q.e==null)x=A.at(new A.C(C.ew,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.az.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AE,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aoG,p,p,1/0)
v=A.n(20)
u=A.a([new A.ab(0,C.H,C.az.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.ny,w,C.lp,new A.e9(A.q(p,A.qw(p,p,!1,B.i8O(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lp,A.A(A.a([A.E(A.en(I.E7,p,C.XA,q.gcf9(),p),1),C.ar,A.E(A.df(C.As,p,C.adK,q.gcfa(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a5(1/0,p,A.en(N.a5w,p,D.hen,q.gcDp(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.aph,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.WZ.prototype={
R(){return new B.aGS(new A.au(C.ay,$.ay()),A.jH(!0,null,!0,!0,null,null,!1))}}
B.aGS.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JL(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a0N(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JL(u.d.a.a)
if(t==null){u.l(new B.e57(u))
x=1
break}u.l(new B.e58(u))
s=u.a
r=s.c
x=3
return A.b(B.a98(s.d,new B.e59(u),t,r),$async$a0N)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e5a(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0N,w)},
a4j(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4j=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cj(r.a.d)){x=1
break}r.l(new B.e5b(r))
u=4
q=J.eK(r.a.d)
x=7
return A.b(B.te(r.a.c,q),$async$a4j)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e5c(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.akb(p,m,l,j,k),$async$a4j)
case 8:o=e
if(r.c!=null)r.l(new B.e5d(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e5e(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e5f(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4j,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akz:D.ai0,h=j?D.amp:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajw:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eQ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.c24,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AE,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vi(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bnE()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.Pw,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e5g(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mS,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.Eg(l.a.d,4)
m=A.B(new A.O(m,new B.e5h(x,new A.aJY(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.kO,A.c("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fAB)
else q.push(A.V(C.kQ,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cZ(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.p(u,k,s,t,k,k,C.m),C.j4,k,k,k,k,C.f1,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bK7,k,k,C.ah),1)
u=l.f?k:l.gcDq()
t=i[3]
s=i[1]
q=A.n(16)
s=A.en(N.a5w,k,D.hfv,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcfb()
t=A.bp(C.az,k,k,0,C.c,k,C.o4,k,new A.ba(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ab,C.t,A.a([f,v,A.bn(!0,A.l3(new B.e5i(),A.w(A.a([e,new A.C(D.bJB,A.w(A.a([s,C.N,i,C.af,A.bH(l.f?C.uy:D.hdI,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a1L,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bnE.prototype={
po(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fe(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.hl(C.bB,v.length),C.aP)}}
B.WW.prototype={
R(){return new B.aGQ()}}
B.aGQ.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bc(w,C.b9,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bc(x,C.b9,C.aP),v)
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
agT(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agT=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e4_(r))
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
return A.b(B.a9d(p,m,n,o,C.a.i(l).length===0?null:l),$async$agT)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fFI)
s=[1]
x=4
break}p.L(y.q).f.T(D.fEj)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e40(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agT,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nX:C.nh,q=A.eQ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h61,s,s,s,1,s,!0),p=A.q(s,D.bBE,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.J4,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c9u,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c9p,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c9F,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcfc()
u=A.bp(C.az,s,s,s,s,C.ht,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.ny,A.bH(t.r?C.uy:C.b_E,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.aeh.prototype={}
B.bAI.prototype={
a7b(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8U()))
x=3
return A.b(B.T1(t,s),$async$a7b)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7b,w)},
gd7(){return this.a}}
B.OU.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0k.prototype={
R(){return new B.aCJ(new A.au(C.ay,$.ay()),A.jH(!0,null,!0,!0,null,null,!1))}}
B.aCJ.prototype={
Z(){this.a4()
$.aS.U$.push(new B.dhe(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cfi(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3t(d),u=x.a.c,t=u?C.iZ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nX:v.a[0],p=A.n(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.H,C.az.j(u?0.25:0.12),C.fF,32)],n),l=A.q(w,Y.auZ,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ab(0,C.H,C.az.j(0.4),C.cy,16)],n),C.avR,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vi(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAk()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Di,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b9d),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dhc(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mS,w,w,w,w)
f=f[1]
h=y.p
return A.eC(w,C.L,new A.cQ(T.N6,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xj,A.w(A.a([l,C.aN,k,C.N,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dV(C.ox,new B.dhd(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.ba(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ab(0,C.H,C.az.j(0.35),C.cN,12)],n),M.RH,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eJ9,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcfh(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PE,w,C.db,w,w,w)}}
B.bAk.prototype={
po(d,e){return e.ao_(e.a.toUpperCase())}}
B.WX.prototype={
R(){return new B.aGR(A.a([],y.r),A.aR(y.N))},
gd7(){return this.c}}
B.aGR.prototype={
Z(){var x=this
x.a4()
x.uK()
x.w=A.d5(C.jX,new B.e55(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.X5()
this.a3()},
a37(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a37=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OT(u.a.c),$async$a37)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bz(u.a.c),$async$a37)
case 4:u.l(new s.e4t(u,e))
u.iw("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a37,w)},
uK(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OT(u.a.c),$async$uK)
case 3:t=e
x=4
return A.b(B.Bz(u.a.c),$async$uK)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e4u(u,s))
if(t>0)u.iw("Received "+A.v(t)+" file(s) via My Code.")
u.P4(u.d)
B.CE(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uK,w)},
P4(d){return this.bJc(d)},
bJc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$P4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9i(r,u.a.c),$async$P4)
case 8:p=f
if(u.c==null){x=1
break}new B.e42(u,r,p).$0()
u.c.ey()
case 7:if(!(C.a.Y(r.c,"video/")||r.n_(D.ns))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.X3(r,u.a.c),$async$P4)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bz(u.a.c),$async$P4)
case 12:u.l(new o.e43(u,f))
case 1:return A.h(v,w)}})
return A.i($async$P4,w)},
Pu(d){return this.bPE(d)},
bPE(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Pu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9i(d,u.a.c),$async$Pu)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e48(u,d,t))
x=6
return A.b(A.fP(new A.fD(t)),$async$Pu)
case 6:u.iw("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fP(new A.fD(r.toUpperCase())),$async$Pu)
case 7:u.iw("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Pu,w)},
iw(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uL(d,e){return this.cOC(d,e)},
cOC(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e4U(r,e))
u=3
x=6
return A.b(d.$0(),$async$uL)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e4V(r))
$.eY.mT()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uL,w)},
gaZY(){var x=this.a
return x.f||x.r||x.w},
Jq(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Jq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZY()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.chk(s,n,r,q,o,t),$async$Jq)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iw("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.h_5(o,u.a.c),$async$Jq)
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
return A.b(B.E8(s,o,r,q,n,t),$async$Jq)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
a27(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a27=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ask(u.a.c),$async$a27)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iw("No organization portal found.")
x=1
break}t=J.a1(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a7(t,!1).ca(A.e4(new B.e4q(u,r,q),!1,null,y.H)),$async$a27)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a27,w)},
a3i(d){return this.cwM(d)},
cwL(){return this.a3i(1)},
cwM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZY()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ash(u.a.c),$async$a3i)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3i,w)},
aeE(d,e,f){return this.c5K(d,e,f)},
c5K(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aeE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iw(e)
x=1
break}x=3
return A.b(u.uL(new B.e4n(u,d,null,e,f),"Uploading\u2026"),$async$aeE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeE,w)},
bJl(){B.hTp(!1,new B.e46(this))
return},
cBX(){this.l(new B.e4y(this))},
aCx(){var x=0,w=A.j(y.H),v=this
var $async$aCx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bJl()
return A.h(null,w)}})
return A.i($async$aCx,w)},
aeA(){var x=0,w=A.j(y.H),v=this
var $async$aeA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uL(new B.e4c(v),"Importing\u2026"),$async$aeA)
case 2:return A.h(null,w)}})
return A.i($async$aeA,w)},
U3(d){return this.cNU(d)},
cNU(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$U3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n_(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e4R(u,d),!1,null,y.H)),$async$U3)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n_(D.TL)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ca(A.e4(new B.e4S(u,d),!1,null,y.H)),$async$U3)
case 8:x=1
break
case 7:x=u.c6s(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ca(A.e4(new B.e4T(u,d),!1,null,y.H)),$async$U3)
case 11:x=1
break
case 10:u.iw("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$U3,w)},
c6s(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.os(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cZb,C.a.aV(x,w+1).toLowerCase())},
aiw(d){return this.cng(d)},
cng(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n_(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e4o(u,d),!1,null,y.H)),$async$aiw)
case 5:x=1
break
case 4:u.l(new B.e4p(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aiw,w)},
Tp(d){return this.cEU(d)},
cEU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Tp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iw("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pW(t,s.c,s.f),$async$Tp)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uL(new B.e4K(u,d),"Preparing QR\u2026"),$async$Tp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Tp,w)},
alb(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$alb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e4L(),A.T(t).k("O<1,o>")).fG(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e4M(q),s),s.k("L.E"))
if(r.length===0){u.iw("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Tp(r),$async$alb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$alb,w)},
al4(d){return this.cEr(d)},
cEr(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$al4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3t(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e4E(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$al4)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.U3(d)
break
case"qr":u.Tp(A.a([d],y.r))
break
case"send_my_code":u.cnX(A.a([d],y.r))
break
case"save":u.akt(d)
break
case"delete":u.Kl(d)
break}case 1:return A.h(v,w)}})
return A.i($async$al4,w)},
Zu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e49(),A.T(t).k("O<1,o>")).fG(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e4a(q),s),s.k("L.E"))
if(r.length===0){u.iw("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pW(t,s.c,s.f),$async$Zu)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uL(new B.e4b(u,r),"Preparing file\u2026"),$async$Zu)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zu,w)},
ajB(d){return this.cv2(d)},
cv2(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ajB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hUt(d,!1),$async$ajB)
case 3:s=f
r=s==null
q=B.a9f(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iw("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajB,w)},
aiC(){var x=0,w=A.j(y.H),v=this,u
var $async$aiC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h7Q(u,v.a.c),$async$aiC)
case 2:return A.h(null,w)}})
return A.i($async$aiC,w)},
bJk(){B.hTp(!1,new B.e45(this,null))
return},
KE(d,e){return this.cnY(d,e)},
b5K(d){return this.KE(null,d)},
cnX(d){return this.KE(d,null)},
cnY(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$KE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e4r(s),o),o.k("L.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y7.cr().aqN(!0,C.a3D,!1),$async$KE)
case 10:r=g
if(r==null||J.cj(r.a)){x=1
break}x=11
return A.b(s.uL(new B.e4s(l,s,r),"Preparing\u2026"),$async$KE)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iw("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iw("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bJ4(p,l,e,s.a.c),$async$KE)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iw("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$KE,w)},
JH(d){return this.c5x(d)},
c5x(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$JH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i8N(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b5K(t),$async$JH)
case 8:x=6
break
case 7:u.iw("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iw("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uL(new B.e4l(u,d),"Receiving video\u2026"),$async$JH)
case 11:x=1
break
case 10:x=12
return A.b(u.uL(new B.e4m(u,d),"Receiving\u2026"),$async$JH)
case 12:case 1:return A.h(v,w)}})
return A.i($async$JH,w)},
Fs(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Fs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E2()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ajB(t),$async$Fs)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.JH(s),$async$Fs)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e4w(u),!1,null,y.N)),$async$Fs)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uK(),$async$Fs)
case 10:x=1
break
case 9:x=11
return A.b(u.JH(C.a.i(r)),$async$Fs)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Fs,w)},
akt(d){return this.cAq(d)},
cAq(d){var x=0,w=A.j(y.H),v=this
var $async$akt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uL(new B.e4v(v,d),"Saving\u2026"),$async$akt)
case 2:return A.h(null,w)}})
return A.i($async$akt,w)},
Kl(d){return this.bS2(d)},
bS2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Kl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lG(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Kl)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.chn(t),$async$Kl)
case 6:case 5:s=d.a
x=7
return A.b(B.FN(u.a.c,s),$async$Kl)
case 7:u.r.X(0,s)
x=8
return A.b(u.uK(),$async$Kl)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Kl,w)},
alh(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3t(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e4Q(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alh)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aiC()
break
case"import":u.aeA()
break}case 1:return A.h(v,w)}})
return A.i($async$alh,w)},
cff(d){var x=d.c
if(C.a.Y(x,"video/")||d.n_(D.ns))return C.rA
if(C.a.Y(x,"image/")||d.n_(D.TL))return C.vF
if(C.a.q(x,"pdf"))return S.IK
return D.asA},
C(d){var x,w,v=this,u=null,t=B.a3t(d),s=t.a,r=s[0],q=s[3],p=A.aJ(u,u,u,u,C.IX,u,u,u,new B.e50(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aJ(u,u,u,u,D.c2F,u,u,u,v.e?u:v.gcnD(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcBW()
n.push(A.aJ(u,u,u,u,A.V(v.r.a===x?D.bXG:E.asZ,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aJ(u,u,u,u,C.a5s,u,u,u,v.e?u:v.gcfg(),u,u,u,u,"Scan QR",u))
n.push(A.aJ(u,u,u,u,C.p8,u,u,u,v.e?u:v.gb6R(),u,u,u,u,"Upload files",u))
n.push(A.aJ(u,u,u,u,D.c4t,u,u,u,v.e?u:new B.e51(v),u,u,u,u,"More options",u))
q=A.eQ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lU(new B.e52(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jJ(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCG(C.jI,s,!0,t,w?u:v.gcEV(),u),1)
x.push(new A.C(C.aoE,A.l3(new B.e53(),A.A(A.a([s,C.ar,A.E(new B.aCG(C.tT,"Export",!1,t,w?u:v.gbVV(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iP,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bi8(t,v.e?u:v.gb6R(),u)
else s=A.kt(!0,u,u,new B.e54(v,t),s,u,D.bId,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ab,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCG.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tI,t,new A.ba(s,C.a1),t,t,t)
return A.df(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tI,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.en(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bi8.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l3(new B.dha(),new A.C(E.a2K,A.w(A.a([A.l3(new B.dhb(),A.q(x,A.V(C.A3,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eh,C.hy,x,x,new A.bq(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.df(C.p8,x,D.hjf,this.d,A.bp(C.az,x,x,x,C.c,x,C.PC,x,new A.ba(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.D4,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeB.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.n.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.n_(D.ns))p=D.dCw
else{p=C.a.Y(p,"image/")||i.n_(D.TL)
n=y.O
p=p?A.a([C.cY,C.az],n):A.a([C.aO.j(0.85),C.az.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gat9()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n_(D.ns))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.w(A.a([q,C.at,A.c(C.d.aK(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aJ(j,j,j,j,A.V(C.h2,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n_(D.ns)))l.push(A.hjx(C.az,!1,j,j,j,!1,j,j,new B.dhx(k),j,j,new A.ba(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p4,x[4],j,j,j,j)
l.push(A.aJ(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l3(new B.dhy(),new A.C(C.dW,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a2a,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bb("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0m.prototype={
R(){return new B.aCL()},
gd7(){return this.c}}
B.aCL.prototype={
Z(){this.a4()
this.z0()},
t(){B.i91(this.e)
this.a3()},
z0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$z0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.te(o.c,o.d),$async$z0)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i94(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i93(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dhu(s))
x=1
break}s.l(new B.dhv(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.dhw(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z0,w)},
a4i(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.te(t.c,t.d),$async$a4i)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fCH)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.akb(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4i)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4i,w)},
c5q(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ks(u,C.z,v,new B.dhs(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h8(t,C.z,v,new B.dht(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bK
return A.u4(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3t(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aJ(u,u,u,u,C.E9,u,u,u,v.gbaH(),u,u,u,u,"Share / save",u))
r=A.eQ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gy
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c3(w,".heic")||C.a.c3(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.df(C.E9,u,D.h17,v.gbaH(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c5q()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0j.prototype={
R(){return new B.aCI(A.ala(),C.bH,C.bH)},
gd7(){return this.c}}
B.aCI.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iN(new B.dh7(v))
x.gd1A().iN(new B.dh8(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bfy
x.iN(new B.dh9(v))
v.z0()},
z0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$z0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.te(p.c,p.d),$async$z0)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dh0(s))
x=1
break}x=8
return A.b(s.d.vN(0,new A.a5G(r,s.a.d.c)),$async$z0)
case 8:if(s.c==null){x=1
break}s.l(new B.dh1(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.dh2(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z0,w)},
a0O(){var x=0,w=A.j(y.H),v=this,u
var $async$a0O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hq(0),$async$a0O)
case 5:x=3
break
case 4:x=6
return A.b(u.iQ(0),$async$a0O)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0O,w)},
aXO(d){var x=d.a
return C.a.aY(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3t(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eQ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gy
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bYH,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RH,C.m),o,88,o,o,o,o,o,88)
t=A.li(C.az,o,o,m,0,new B.dh3(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aXO(p.w)+" / "+p.aXO(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.fz3,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vI:C.fR,o,o,o,o,o)
x=A.w(A.a([u,C.lp,t,x,C.df,A.df(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcfj(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.pZ,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rm.prototype={
R(){return new B.aCO()},
gd7(){return this.c}}
B.aCO.prototype={
Z(){this.a4()
this.Rg()},
Rg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Rg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hlL(o.c,o.d,new B.dhL(s)),$async$Rg)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dhM(s))
x=1
break}s.e=r
q=Q.ixd(r)
if(q==null){s.l(new B.dhN(s))
x=1
break}s.d=q
q.aU(0,s.gb5x())
x=8
return A.b(q.j1(0).d8(0,C.o3),$async$Rg)
case 8:if(s.c==null){x=1
break}s.l(new B.dhO(s))
x=9
return A.b(q.qF(0),$async$Rg)
case 9:q.un(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.dhP(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Rg,w)},
clL(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dhQ(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ec(0,x.gb5x())
w=x.d
if(w!=null)w.t()
B.iHP(x.e)
x.a3()},
agW(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3i(u.c,u.d),$async$agW)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agW,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3t(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eQ(A.a([A.aJ(t,t,t,t,C.oj,t,t,t,u.gcfd(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iB(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gy
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akz(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.am(C.z,t,C.ab,C.t,A.a([new A.B4(s,t),A.aA(t,A.xR(A.q(t,A.V(q?K.vI:C.fR,C.c,t,t,t,48),C.f,t,t,new A.p(C.ba,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dhS(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0o.prototype={
R(){return new B.aCM(new A.cB(null,y.A))}}
B.aCM.prototype={
gcOh(){var x,w,v=this.a
if(v.e!==D.V9)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcNS(){var x,w,v=this.a
if(v.e!==D.B5)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcOh()
if(x!=null){v.Sr(x)
v.e=A.d5(V.D6,new B.dhH(v,x))}w=v.gcNS()
if(w!=null){v.Sq(w)
v.f=A.d5(C.fr,new B.dhI(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
Sq(d){return this.ctc(d)},
ctc(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asp(d),$async$Sq)
case 3:t=f
x=4
return A.b(B.chG(d),$async$Sq)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dhz(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Sq,w)},
Sr(d){return this.ctd(d)},
ctd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h8z(d),$async$Sr)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bGP(t),$async$Sr)
case 4:if(u.c==null){x=1
break}u.l(new B.dhA(u))
u.c.L(y.q).f.T(D.aXh)
case 1:return A.h(v,w)}})
return A.i($async$Sr,w)},
gcb_(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcfe(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a41(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a41=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E2()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fFS)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ca(A.e4(new B.dhB(),!1,null,y.N)),$async$a41)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bGP(s),$async$a41)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aXh)
case 1:return A.h(v,w)}})
return A.i($async$a41,w)},
acq(d){return this.bPF(d)},
bPF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fP(new A.fD(C.d.aK(t,", "))),$async$acq)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acq,w)},
agU(d){return this.bPn(d)},
bPn(d){var x=0,w=A.j(y.H),v=this
var $async$agU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fP(new A.fD(v.a.c)),$async$agU)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fDa)
return A.h(null,w)}})
return A.i($async$agU,w)},
a3W(d){return this.cAs(d)},
cAs(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.arj(s.d,4),$async$a3W)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rG(r,"ngmy_doc_share_qr.png"),$async$a3W)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ad(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3W,w)},
gb0d(){var x,w=this.a
if(w.e!==D.Kc)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acn(d){return this.bPy(d)},
bPy(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb0d()
if(t==null){x=1
break}x=3
return A.b(A.fP(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$acn)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fER)
case 1:return A.h(v,w)}})
return A.i($async$acn,w)},
agV(){var x=0,w=A.j(y.H),v=this,u
var $async$agV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.X5(),$async$agV)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agV,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3t(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kc&&i!==D.V9&&i!==D.B5
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eQ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kc||t===D.V9||t===D.B5?l:A.aJ(l,l,l,l,C.lI,l,l,l,m.gb3m(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qw(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcb_(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kc){t=C.az.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcfe(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aK(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c8x,l,D.haS,new B.dhC(m,d),l)],p))}if(m.a.e===D.Kc&&m.gb0d()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c4Q,l,D.h7r,new B.dhD(m,d),l)],p))
if(m.a.e===D.B5){x=(m.w?C.dT:C.az).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GC:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}if(m.a.e===D.V9){x=(m.r?C.dT:C.az).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GC:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l),C.af,A.df(D.c0c,l,D.he1,m.gcAQ(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pf(i,A.c6(v,w,new A.C(C.ae,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.bb,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(I.E7,l,C.XA,new B.dhE(m,d),l),1),C.ar,A.E(A.df(C.As,l,C.adK,new B.dhF(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a5(1/0,l,A.bH(U.BJ,l,m.gb3m(),A.bp(C.aO,l,l,l,l,C.ht,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dhG(),y.C)}}
B.aez.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cc(A.w(A.a([w,C.aN,A.q(x,A.qw(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bH(C.BK,x,new B.dh_(d),x)],u),x,x,C.nN,v,x,x,x,x,D.h03,x)}}
B.a0i.prototype={
R(){return new B.aCH(A.Af(C.zm,C.oE,C.vU))}}
B.aCH.prototype={
t(){this.d.t()
this.a3()},
aAW(d){var x,w,v,u,t
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
return A.c6(A.eQ(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h8_,x,x,x,1,x,!0),C.v,A.Ae(this.d,C.c0,this.gaAV()),x,!1,!1,x,x)}}
B.a0p.prototype={
R(){return new B.aCN(A.Af(C.zm,C.oE,C.vU))},
gd7(){return this.c}}
B.aCN.prototype={
c6u(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aiZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Ng("text/plain"),$async$aiZ)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fFM)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aiZ,w)},
adf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hUt(p,!0),$async$adf)
case 3:t=e
p=t==null
s=B.a9f(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fCh)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adf,w)},
t(){this.d.t()
this.a3()},
aAW(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c6u(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aJ(v,v,v,v,F.au0,v,v,v,w.gbVo(),v,v,v,v,"Enter QR share code",v),t=A.aJ(v,v,v,v,F.a5A,v,v,v,w.gcqs(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eQ(A.a([u,t,A.aJ(v,v,v,v,A.V(w.f?C.ru:R.QO,v,v,v,v,v),v,v,v,new B.dhK(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.heZ,v,v,v,1,v,!0)
u=A.Ae(w.d,C.c0,w.gaAV())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ab,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.ePu],s),v),v,!1,!1,v,v)}}
B.bi9.prototype={
C(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pR
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pR:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2Q,A.A(A.a([u,C.bc,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eL,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abJ.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Q5.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zj.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Q4.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gi.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cvL.prototype={}
B.Gh.prototype={}
B.abI.prototype={}
B.ax_.prototype={}
B.Zk.prototype={}
var z=a.updateTypes(["az<~>()","P(jV)","o(jV)","WX(Z)","~()","a0l(Z)","F(F,jV)","Rm(Z)","~(lL)","cr(Gh)","az<jV?>(@)","WV(Z)","WZ(Z)","C(jV)","jV(@)","a9<o,@>(jV)","a0k(Z)","WW(Z)","a0m(Z)","a0j(Z)","a0o(Z)","aez(Z)","ah<jV>()","a0p(Z)","aeB(Z,F)","a0i(Z)","a9<o,aH>(jV)","cr(Zj)","cr(abI)","az<cr>(Gh)"])
B.cvH.prototype={
$1(d){var x=this.a
x.x=D.aTX
x.y.K(0,D.aTX)},
$S:74}
B.cvI.prototype={
$1(d){var x=this.a
x.x=D.aTW
x.y.K(0,D.aTW)},
$S:74}
B.cvJ.prototype={
$1(d){var x=this.a
x.akl(A.a4c(d.data)).bD(new B.cvG(x),y.b)},
$S:74}
B.cvG.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cvK.prototype={
$1(d){},
$S:74}
B.cvN.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.ie0(d.channel))},
$S:18}
B.cvO.prototype={
$1(d){},
$S:18}
B.cvP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iyn(w.iceConnectionState)
x.cx=w
if($.hvM())switch(w.a){case 0:x.cy=D.aU1
break
case 1:x.cy=D.aU2
break
case 3:x.cy=D.aU3
break
case 5:x.cy=D.aU_
break
case 6:x.cy=D.aU0
break
case 7:x.cy=D.abk
break
default:break}},
$S:107}
B.cvQ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iyo(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.cvR.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iJr(w.signalingState)},
$S:107}
B.cvS.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iHw(w.connectionState)},
$S:107}
B.cvT.prototype={
$1(d){},
$S:107}
B.cvU.prototype={
$1(d){},
$S:18}
B.fHc.prototype={
$1(d){var x=y.F.a(new A.qN([],[]).og(d.target.result,!1)),w=C.x8.q(x.objectStoreNames,"blobs")
if(!w)C.x5.H_(x,"blobs")},
$S:180}
B.h7E.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xL.fo(this.b)
$.eY.mT()
this.c.$1(d)},
$S:394}
B.h7G.prototype={
$1(d){return this.a.$1(B.inw(this.b,this.c))},
$S:33}
B.h7F.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h7D.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h7T.prototype={
$1(d){var x=this
return B.hIf(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h7U.prototype={
$1(d){var x=this
return B.hIf(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJT.prototype={
$1(d){var x=this
return B.chh(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dhi.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dhf.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chh(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dhh.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chh(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dhg.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chh(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dhk.prototype={
$4(d,e,f,g){var x=null
return A.kh(A.A(A.a([A.aJ(x,x,x,x,D.bZO,x,x,x,new B.dhj(d),x,x,x,x,x,x),A.E(A.G3(D.Tt,!0,x,!1,C.a4G,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.Tt,x,g,C.apC,0,e,f)},
$C:"$4",
$R:4,
$S:440}
B.dhj.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fLW.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eX,y.m).w,t=this.a,s=t?C.iZ:C.c,r=A.n(28),q=A.q(v,D.bBY,C.f,v,v,D.baP,v,v,v,v,D.apn,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c3g,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Dl,A.w(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aug,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fLU(d),v),1),C.ar,A.E(A.bH(D.h6p,v,new B.fLV(p,x,d),A.bp(C.b7,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HL,v,v,v,v),v)},
$S:63}
B.fLU.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fLV.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fDr)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aFq(v,x))},
$S:0}
B.fMp.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eX,y.m).w,u=x.a,t=u?C.iZ:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bBO,C.f,w,w,D.bcj,w,w,w,w,D.apn,w,w,1/0),new A.C(C.Dl,A.w(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hri(u,"Organization name",C.Ik,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hri(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hri(u,"Member password",C.E6,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bH(D.hf5,w,new B.fMo(r,q,p,d),A.bp(C.az,w,w,w,w,C.ht,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HL,w,w,w,w),w)},
$S:63}
B.fMo.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fDw)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aIH(u,x,w))},
$S:0}
B.ch8.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a1(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cH(j,0,null):s.b.aZ(j)
u=4
x=7
return A.b(A.wh(p,null).d8(0,C.a1K),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CF(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.che.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chf.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.chg.prototype={
$1(d){return d.b},
$S:z+2}
B.cha.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chb.prototype={
$1(d){return d.b},
$S:z+2}
B.ch9.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.chc.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.chd.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h7R.prototype={
$1(d){return new B.WV(this.a,null)},
$S:z+11}
B.h7S.prototype={
$1(d){return new B.WZ(this.a,this.b,this.c,null)},
$S:z+12}
B.e3Z.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e57.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e58.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e59.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e56(x,d))},
$S:2}
B.e56.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e5a.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5b.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e5c.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e5d.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e5e.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e5f.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5i.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.e5g.prototype={
$1(d){var x=this.a
return x.f?null:x.a0N()},
$S:2}
B.e5h.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n_(D.TL))s=C.vF
else s=C.a.Y(s,"video/")||d.n_(D.ns)?C.rA:D.asA
x=this.b.a
w=y.p
return new A.C(C.jY,A.A(A.a([A.q(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gat9(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e4_.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e40.prototype={
$0(){return this.a.r=!1},
$S:0}
B.chi.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:100}
B.chj.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:100}
B.h8S.prototype={
$2(d,e){return e===this.a},
$S:269}
B.fE9.prototype={
$1(d){return J.k(d)},
$S:15}
B.fK7.prototype={
$1(d){var x=this.b
B.ill(C.I8.ga8O(this.a)).bD(x.gCK(x),y.H)},
$S:127}
B.fK8.prototype={
$1(d){return this.a.di(0,null)},
$S:127}
B.fK9.prototype={
$0(){return null},
$S:12}
B.chx.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fKa.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.h.M(v)
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
return new B.jV(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fOv.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fIg.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fIh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.chC.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.hda.prototype={
$1(d){return new B.a0k(this.a,null)},
$S:z+16}
B.dhe.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fL()},
$S:7}
B.dhc.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dhd.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e55.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a37()},
$S:10}
B.e4t.prototype={
$0(){var x=J.bKa(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4u.prototype={
$0(){var x=J.bKa(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e42.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e41(this.b))
if(w>=0){x=x.d
x[w]=x[w].aI7(this.c)}},
$S:0}
B.e41.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e43.prototype={
$0(){var x=J.bKa(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e48.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e47(this.b))
if(w>=0){x=x.d
x[w]=x[w].aI7(this.c)}},
$S:0}
B.e47.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4U.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e4V.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e4q.prototype={
$1(d){return new B.WW(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e4n.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Jq(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X_(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uK(),$async$$0)
case 5:s=J.a1(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a3i(s.gI(t)),$async$$0)
case 8:case 7:r.iw(s.gar(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e46.prototype={
$1(d){this.a.aeE(d,"No files selected.","Added")},
$S:394}
B.e4y.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e4x(),A.T(x).k("O<1,o>")))},
$S:0}
B.e4x.prototype={
$1(d){return d.a},
$S:z+2}
B.e4c.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y7.cr().d3B(C.a3D,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.eK(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.k0(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.iw("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iw("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aso(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cj(l)){o.iw("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uK(),$async$$0)
case 9:o.iw("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e4R.prototype={
$1(d){return new B.Rm(this.a.a.c,this.b,null)},
$S:z+7}
B.e4S.prototype={
$1(d){return new B.a0m(this.a.a.c,this.b,null)},
$S:z+18}
B.e4T.prototype={
$1(d){return new B.a0j(this.a.a.c,this.b,null)},
$S:z+19}
B.e4o.prototype={
$1(d){return new B.Rm(this.a.a.c,this.b,null)},
$S:z+7}
B.e4p.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e4K.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Jq(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9h(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iw("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cwL(),$async$$0)
case 5:x=6
return A.b(p.uK(),$async$$0)
case 6:r=A.T(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e4G(p),r),new B.e4H(),r.k("O<aj.E,o>")).c1(0,new B.e4I())
q=A.B(r,r.$ti.k("L.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e4J(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pV(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.X5(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4G.prototype={
$1(d){var x=this.a,w=C.d.bn(x.d,new B.e4F(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e4F.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4H.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e4I.prototype={
$1(d){return d.length!==0},
$S:3}
B.e4J.prototype={
$1(d){var x=this.a
return new B.a0o(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e4L.prototype={
$1(d){return d.a},
$S:z+2}
B.e4M.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e4E.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gat9(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n_(D.ns)?C.tX:C.oh
p=!x||p.n_(D.ns)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lu,v,v,C.m),C.bm,A.bn(!0,new A.C(C.Dg,A.w(A.a([q,o,t,C.aB,B.a0n(!1,u,!1,w,p,new B.e4z(d),v),B.a0n(!1,u,!1,C.jI,"Share via QR",new B.e4A(d),"Letters/numbers QR code"),B.a0n(!1,u,!1,D.a4L,"Send to their Code",new B.e4B(d),"Enter someone else's personal code"),B.a0n(!1,u,!1,C.hP,"Download / save",new B.e4C(d),v),C.aj,B.a0n(!1,u,!0,C.eq,"Delete",new B.e4D(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:720}
B.e4z.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e4A.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e4B.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e4C.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e4D.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e49.prototype={
$1(d){return d.a},
$S:z+2}
B.e4a.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e4b.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9j(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HL(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pV(s.c,s.f),$async$$0)
case 4:u.iw(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e45.prototype={
$1(d){var x=this.a
x.uL(new B.e44(x,d,this.b),"Preparing\u2026")},
$S:394}
B.e44.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iw("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X_(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cj(s)){t.iw("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bJ4(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iw("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4r.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e4s.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aP(v.c.a),r=v.b,q=v.a
case 2:if(!s.B()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hlO(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4l.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HJ(new B.e4h(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iw("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e4i(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e4j(s))
case 5:x=8
return A.b(r.b.ij(0,C.HG,new B.e4k()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.iw("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uK(),$async$$0)
case 9:s.iw("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4h.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e4e(x,d,e))},
$S:183}
B.e4e.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e4i.prototype={
$1(d){return new B.aez(this.a.a,null)},
$S:z+21}
B.e4j.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e4k.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e4m.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JL(o)!=null?3:4
break
case 3:x=5
return A.b(B.a97(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b5K(B.JL(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aso(new B.e4f(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cj(r)){if(B.hlN(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iw(q)
x=1
break}x=10
return A.b(s.uK(),$async$$0)
case 10:o=J.cK(r)
p=o.eW(r,new B.e4g()).gI(0)
s.iw(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4f.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e4d(x,d,e))},
$S:183}
B.e4d.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e4g.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.e4w.prototype={
$1(d){return new B.a0p(this.a.a.c,null)},
$S:z+23}
B.e4v.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3i(u.a.c,v.b),$async$$0)
case 2:t.iw(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4Q.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lu,x,x,C.m),C.bm,A.bn(!0,new A.C(C.Dg,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a0n(!0,w,!1,C.mC,"My Code",new B.e4N(d),"Your personal code & QR \u2014 others send docs to you"),B.a0n(!1,w,!1,D.a4L,"Send to their Code",new B.e4O(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0n(!1,w,!1,W.Ak,"Import backup",new B.e4P(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:720}
B.e4N.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e4O.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bJk()},
$S:0}
B.e4P.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e52.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JV(D.Tt,x,C.a4G,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.Tt).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:683}
B.e50.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e51.prototype={
$0(){this.a.alh()
return null},
$S:0}
B.e53.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:95}
B.e54.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeB(e,w,v,this.b,x.e,x.cff(w),new B.e4X(x,w),new B.e4Y(x,v,w),new B.e4Z(x,w),new B.e5_(x,w),null)},
$S:z+24}
B.e4X.prototype={
$0(){this.a.aiw(this.b)
return null},
$S:0}
B.e4Y.prototype={
$0(){var x=this.a
return x.l(new B.e4W(x,this.b,this.c))},
$S:0}
B.e4W.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e4Z.prototype={
$0(){this.a.Pu(this.b)
return null},
$S:0}
B.e5_.prototype={
$0(){this.a.al4(this.b)
return null},
$S:0}
B.dha.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:95}
B.dhb.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:111}
B.dhy.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.dhx.prototype={
$1(d){return this.a.y.$0()},
$S:89}
B.dhu.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dhv.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dhw.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dhs.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h8(w,C.z,x,new B.dhq(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dhr(this.a))
return C.bK},
$S:142}
B.dhq.prototype={
$3(d,e,f){$.aS.U$.push(new B.dho(this.a))
return C.bK},
$S:190}
B.dho.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhl(x))},
$S:7}
B.dhl.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dhr.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhn(x))},
$S:7}
B.dhn.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dht.prototype={
$3(d,e,f){$.aS.U$.push(new B.dhp(this.a))
return C.bK},
$S:190}
B.dhp.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dhm(x))},
$S:7}
B.dhm.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dh7.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dh6(x,d))},
$S:1827}
B.dh6.prototype={
$0(){return this.a.f=this.b===C.wh},
$S:0}
B.dh8.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dh5(x,d))},
$S:7}
B.dh5.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dh9.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dh4(x,d))},
$S:7}
B.dh4.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dh0.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dh1.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dh2.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dh3.prototype={
$1(d){return this.a.d.Oo(0,A.dw(0,0,0,C.h.S(d),0,0))},
$S:6}
B.dhL.prototype={
$0(){var x=this.a.a
return B.te(x.c,x.d)},
$S:1828}
B.dhM.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dhN.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dhO.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dhP.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dhQ.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dhS.prototype={
$0(){var x=this.a
x.l(new B.dhR(x))},
$S:0}
B.dhR.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hq(0)
else x.qF(0)},
$S:0}
B.dhH.prototype={
$1(d){return this.a.Sr(this.b)},
$S:10}
B.dhI.prototype={
$1(d){return this.a.Sq(this.b)},
$S:10}
B.dhz.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dhA.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dhB.prototype={
$1(d){return D.hR6},
$S:z+25}
B.dhG.prototype={
$2(d,e){if(d)B.X5()},
$S:137}
B.dhC.prototype={
$0(){return this.a.acq(this.b)},
$S:0}
B.dhD.prototype={
$0(){return this.a.acn(this.b)},
$S:0}
B.dhE.prototype={
$0(){return this.a.agU(this.b)},
$S:0}
B.dhF.prototype={
$0(){return this.a.a3W(this.b)},
$S:0}
B.dh_.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.dhK.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qJ(),$async$$0)
case 2:u.l(new B.dhJ(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dhJ.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.chE.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.chF.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aE(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.chD.prototype={
$2(d,e){return this.bpI(d,e)},
bpI(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.X6(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1829}
B.fO7.prototype={
$1(d){if(d===D.abj&&(this.a.a.a&30)===0)this.a.h6(0)},
$S:z+27}
B.fO8.prototype={
$0(){},
$S:12}
B.fOJ.prototype={
brm(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fBa(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hDh(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.brm(d,e)},
$S:746}
B.fOI.prototype={
$1(d){var x=this
d.b=new B.fOH(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fOH.prototype={
$1(d){return this.brl(d)},
brl(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b3j(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.V.aN(0,n,null)
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
return A.b(B.fBa(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a9g(m),$async$$1)
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
x(v=B.aCK.prototype,"gcnc","S1",0)
x(v,"gco7","KF",0)
x(v,"gcnC","zc",0)
x(v=B.aGP.prototype,"gcf9","agS",0)
x(v,"gcfa","a0M",0)
x(v,"gcDp","akM",0)
x(v=B.aGS.prototype,"gcfb","a0N",0)
x(v,"gcDq","a4j",0)
x(B.aGQ.prototype,"gcfc","agT",0)
x(B.aCJ.prototype,"gcfh","cfi",4)
x(v=B.aGR.prototype,"gcnD","a27",0)
x(v,"gcBW","cBX",4)
x(v,"gb6R","aCx",0)
x(v,"gcEV","alb",0)
x(v,"gbVV","Zu",0)
x(v,"gcfg","Fs",0)
x(B.aCL.prototype,"gbaH","a4i",0)
x(B.aCI.prototype,"gcfj","a0O",0)
x(v=B.aCO.prototype,"gb5x","clL",4)
x(v,"gcfd","agW",0)
x(v=B.aCM.prototype,"gcAQ","a41",0)
x(v,"gb3m","agV",0)
w(B.aCH.prototype,"gaAV","aAW",8)
x(v=B.aCN.prototype,"gcqs","aiZ",0)
x(v,"gbVo","adf",0)
w(v,"gaAV","aAW",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aH,[B.cvL,B.abI,B.ax_,B.aFq,B.aIH,B.jV,B.aeh,B.bAI,B.Gh,B.Zk])
w(B.cvM,B.cvL)
w(B.b8u,B.abI)
x(A.hq,[B.cvH,B.cvI,B.cvJ,B.cvG,B.cvK,B.cvN,B.cvO,B.cvP,B.cvQ,B.cvR,B.cvS,B.cvT,B.cvU,B.fHc,B.h7E,B.h7G,B.h7F,B.h7T,B.h7U,B.fJT,B.dhf,B.dhh,B.dhg,B.dhk,B.fLW,B.fMp,B.ch8,B.chf,B.chg,B.chb,B.ch9,B.chc,B.chd,B.h7R,B.h7S,B.e59,B.e5i,B.e5g,B.e5h,B.fE9,B.fK7,B.fK8,B.chx,B.fKa,B.fOv,B.fIg,B.fIh,B.chC,B.hda,B.dhe,B.dhc,B.e55,B.e41,B.e47,B.e4q,B.e46,B.e4x,B.e4R,B.e4S,B.e4T,B.e4o,B.e4G,B.e4F,B.e4H,B.e4I,B.e4J,B.e4L,B.e4M,B.e4E,B.e49,B.e4a,B.e45,B.e4r,B.e4i,B.e4g,B.e4w,B.e4Q,B.e52,B.e53,B.dha,B.dhb,B.dhy,B.dhx,B.dhs,B.dhq,B.dho,B.dhr,B.dht,B.dhp,B.dh7,B.dh8,B.dh9,B.dh3,B.dhH,B.dhI,B.dhB,B.chE,B.chF,B.fO7,B.fOI,B.fOH])
w(B.b8v,B.ax_)
x(A.iY,[B.h7D,B.dhi,B.dhj,B.fLU,B.fLV,B.fMo,B.e3Z,B.e57,B.e58,B.e56,B.e5a,B.e5b,B.e5c,B.e5d,B.e5e,B.e5f,B.e4_,B.e40,B.fK9,B.dhd,B.e4t,B.e4u,B.e42,B.e43,B.e48,B.e4U,B.e4V,B.e4n,B.e4y,B.e4c,B.e4p,B.e4K,B.e4z,B.e4A,B.e4B,B.e4C,B.e4D,B.e4b,B.e44,B.e4s,B.e4l,B.e4e,B.e4j,B.e4k,B.e4m,B.e4d,B.e4v,B.e4N,B.e4O,B.e4P,B.e50,B.e51,B.e4X,B.e4Y,B.e4W,B.e4Z,B.e5_,B.dhu,B.dhv,B.dhw,B.dhl,B.dhn,B.dhm,B.dh6,B.dh5,B.dh4,B.dh0,B.dh1,B.dh2,B.dhL,B.dhM,B.dhN,B.dhO,B.dhP,B.dhQ,B.dhS,B.dhR,B.dhz,B.dhA,B.dhC,B.dhD,B.dhE,B.dhF,B.dh_,B.dhK,B.dhJ,B.fO8])
x(A.lm,[B.aeA,B.OU,B.abJ,B.Q5,B.Zj,B.Q4,B.Gi])
x(A.af,[B.a0l,B.WV,B.WZ,B.WW,B.a0k,B.WX,B.a0m,B.a0j,B.Rm,B.a0o,B.a0i,B.a0p])
x(A.ai,[B.aCK,B.aGP,B.aGS,B.aGQ,B.aCJ,B.aGR,B.aCL,B.aCI,B.aCO,B.aCM,B.aCH,B.aCN])
x(A.aw,[B.af3,B.aCG,B.bi8,B.aeB,B.aez,B.bi9])
x(A.iZ,[B.che,B.cha,B.chi,B.chj,B.h8S,B.e4h,B.e4f,B.e54,B.dhG,B.chD,B.fOJ])
x(A.jp,[B.bnE,B.bAk])})()
A.ji(b.typeUniverse,JSON.parse('{"b8u":{"abI":[]},"b8v":{"ax_":[]},"a0l":{"af":[],"x":[]},"aCK":{"ai":["a0l"]},"af3":{"aw":[],"x":[]},"WV":{"af":[],"x":[]},"WZ":{"af":[],"x":[]},"aGP":{"ai":["WV"]},"aGS":{"ai":["WZ"]},"bnE":{"jp":[]},"WW":{"af":[],"x":[]},"aGQ":{"ai":["WW"]},"a0k":{"af":[],"x":[]},"WX":{"af":[],"x":[]},"aeB":{"aw":[],"x":[]},"a0m":{"af":[],"x":[]},"a0j":{"af":[],"x":[]},"Rm":{"af":[],"x":[]},"a0o":{"af":[],"x":[]},"aez":{"aw":[],"x":[]},"a0i":{"af":[],"x":[]},"a0p":{"af":[],"x":[]},"aCJ":{"ai":["a0k"]},"bAk":{"jp":[]},"aGR":{"ai":["WX"]},"aCG":{"aw":[],"x":[]},"bi8":{"aw":[],"x":[]},"aCL":{"ai":["a0m"]},"aCI":{"ai":["a0j"]},"aCO":{"ai":["Rm"]},"aCM":{"ai":["a0o"]},"aCH":{"ai":["a0i"]},"aCN":{"ai":["a0p"]},"bi9":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n_"),k:x("Ne()"),o:x("bl<o,o>"),F:x("rQ"),g:x("az<jV?>"),x:x("az<~>"),V:x("N<ab>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jV>"),w:x("N<+file,name(mj,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jp>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<F>"),G:x("bm"),A:x("cB<ai<af>>"),n:x("ah<jV>"),j:x("ah<@>"),I:x("ah<F>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("ip"),e:x("iNw"),af:x("Fu"),U:x("jV"),b:x("cr"),C:x("aH"),aK:x("x0"),ab:x("Gh"),br:x("ax_"),v:x("Zk"),N:x("o"),X:x("bq<H>"),Q:x("mw"),D:x("dG"),aw:x("bb<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cb<ah<jV>>"),aW:x("cb<dG?>"),aY:x("cb<~>"),cx:x("aeA"),b1:x("bo<ah<jV>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFq"),bG:x("aIH"),q:x("l4"),B:x("q8<Gh>"),c6:x("q8<abJ>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bm?"),_:x("ah<jV>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jV?"),R:x("aH?"),c:x("Zk?"),d:x("+answerQr,transfer(o,az<ah<jV>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,F)?"),L:x("+fileCount,mode,qrPayload(F,OU,o)?"),aX:x("+fileCount,qrPayload,token(F,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aeh?"),bk:x("aFq?"),ag:x("aIH?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b9d=new A.ax(C.az,2,C.r,-1)
D.cdc=new A.a6(C.a5,C.a9,C.w,C.a6I,null,null)
D.baP=new A.p(null,null,null,C.n0,null,D.cdc,C.m)
D.bcj=new A.p(null,null,null,C.n0,null,E.J4,C.m)
D.ai0=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajw=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akz=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amp=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h1_=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hg5=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FM,null,null,null,null,null,null,null,null,null)
D.dsJ=x([D.h1_,C.aj,D.hg5],y.p)
D.bBE=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dsJ,null)
D.hkF=new A.D("Create your organization",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h5B=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FM,null,null,null,null,null,null,null,null,null)
D.dLo=x([D.hkF,C.aj,D.h5B],y.p)
D.bBO=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dLo,null)
D.hgK=new A.D("Team Member sign-in",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h9C=new A.D("Enter the access code and password from your organization.",null,H.FM,null,null,null,null,null,null,null,null,null)
D.dIS=x([D.hgK,C.aj,D.h9C],y.p)
D.bBY=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dIS,null)
D.bId=new A.R(16,10,16,28)
D.bJB=new A.R(20,0,20,16)
D.bK7=new A.R(20,8,20,16)
D.apn=new A.R(24,22,24,20)
D.a4L=new A.a_(63394,"MaterialIcons",!1)
D.asA=new A.a_(63515,"MaterialIcons",!1)
D.bXG=new A.a_(983813,"MaterialIcons",!1)
D.bUM=new A.a_(62867,"MaterialIcons",!1)
D.bYH=new A.ae(D.bUM,44,C.c,null,null,null)
D.bZO=new A.ae(C.kn,null,C.ac,null,null,null)
D.c0c=new A.ae(C.jJ,18,null,null,null,null)
D.c24=new A.ae(D.a4L,26,C.c,null,null,null)
D.c2F=new A.ae(C.DY,null,null,null,null,null)
D.c3g=new A.ae(C.E3,null,null,null,null,null)
D.c4t=new A.ae(A_.a4V,null,null,null,null,null)
D.c4Q=new A.ae(C.i4,16,null,null,null,null)
D.c8x=new A.ae(C.tW,16,null,null,null,null)
D.bYZ=new A.ae(C.mC,null,null,null,null,null)
D.c9p=new A.ef(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3O=new A.ae(C.Ik,null,null,null,null,null)
D.c9u=new A.ef(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c3O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZl=new A.ae(C.E6,null,null,null,null,null)
D.c9F=new A.ef(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZl,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cZR=x([C.fz,C.b7,C.az],y.O)
D.cf9=new A.a6(C.aw,C.aD,C.w,D.cZR,null,null)
D.cZb=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Tt=x([C.fz,C.az],y.O)
D.TL=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ns=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dCw=x([C.nb,C.az],y.O)
D.eBA={iceServers:0}
D.aOp={urls:0}
D.dPl=new A.bl(D.aOp,["stun:stun.l.google.com:19302"],y.o)
D.dPk=new A.bl(D.aOp,["stun:stun1.l.google.com:19302"],y.o)
D.dh3=x([D.dPl,D.dPk],A.as("N<a9<o,o>>"))
D.dOq=new A.bl(D.eBA,[D.dh3],A.as("bl<o,@>"))
D.Kc=new B.OU(0,"lanDirect")
D.V8=new B.OU(1,"cloudStash")
D.e4B=new B.OU(2,"inlineInstant")
D.V9=new B.OU(3,"webrtcLink")
D.B5=new B.OU(4,"videoCloud")
D.hg4=new A.D("Receive file",null,C.nE,null,null,null,null,null,null,null,null,null)
D.cOH=x([E.auq,C.aa,D.hg4],y.p)
D.ftU=new A.c1(C.aK,C.bb,C.i,C.l,null,C.p,null,0,D.cOH,null)
D.eJ9=new A.C(C.cq,D.ftU,null)
D.fSe=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.Jz,null,null,null)
D.h1C=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fSe,null,C.K,null,null,null,null,null,null,null)
D.eIj=new A.C(C.zD,D.h1C,null)
D.bgU=new A.cq(C.z,null,null,D.eIj,null)
D.ePu=new A.cS(0,null,0,28,null,null,D.bgU,null)
D.ePO=new B.abJ(0,"RTCDataChannelConnecting")
D.aTW=new B.abJ(1,"RTCDataChannelOpen")
D.aTX=new B.abJ(3,"RTCDataChannelClosed")
D.ePP=new B.Gi(0,"RTCIceConnectionStateNew")
D.ePQ=new B.Gi(1,"RTCIceConnectionStateChecking")
D.ePR=new B.Gi(2,"RTCIceConnectionStateCompleted")
D.ePS=new B.Gi(3,"RTCIceConnectionStateConnected")
D.ePT=new B.Gi(4,"RTCIceConnectionStateCount")
D.ePU=new B.Gi(5,"RTCIceConnectionStateFailed")
D.ePV=new B.Gi(6,"RTCIceConnectionStateDisconnected")
D.aTY=new B.Gi(7,"RTCIceConnectionStateClosed")
D.aTZ=new B.Zj(0,"RTCIceGatheringStateNew")
D.ePW=new B.Zj(1,"RTCIceGatheringStateGathering")
D.abj=new B.Zj(2,"RTCIceGatheringStateComplete")
D.abk=new B.Q4(0,"RTCPeerConnectionStateClosed")
D.aU_=new B.Q4(1,"RTCPeerConnectionStateFailed")
D.aU0=new B.Q4(2,"RTCPeerConnectionStateDisconnected")
D.aU1=new B.Q4(3,"RTCPeerConnectionStateNew")
D.aU2=new B.Q4(4,"RTCPeerConnectionStateConnecting")
D.aU3=new B.Q4(5,"RTCPeerConnectionStateConnected")
D.ePX=new B.Q5(0,"RTCSignalingStateStable")
D.ePY=new B.Q5(1,"RTCSignalingStateHaveLocalOffer")
D.ePZ=new B.Q5(2,"RTCSignalingStateHaveRemoteOffer")
D.eQ_=new B.Q5(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eQ0=new B.Q5(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aU4=new B.Q5(5,"RTCSignalingStateClosed")
D.fz3=new A.av(160,48)
D.bi9=new A.fs(2,null,null,null,null,C.az,null,null,null,null)
D.fAB=new A.a5(16,16,D.bi9,null)
D.h4W=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new A.b3(D.h4W,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hcF=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fCa=new A.b3(D.hcF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlJ=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fCh=new A.b3(D.hlJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4v=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fCH=new A.b3(D.h4v,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgW=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aXh=new A.b3(D.hgW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hiq=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fDa=new A.b3(D.hiq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hne=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fDr=new A.b3(D.hne,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hl8=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fDw=new A.b3(D.hl8,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hmp=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fEj=new A.b3(D.hmp,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h35=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fER=new A.b3(D.h35,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.heB=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fFb=new A.b3(D.heB,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h7g=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fFI=new A.b3(D.h7g,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hnj=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fFM=new A.b3(D.hnj,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h3l=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fFS=new A.b3(D.h3l,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1Z=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fG6=new A.b3(D.h1Z,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fZC=new A.D("NGMY DOC SHARE",null,C.aYJ,null,null,null,null,null,null,null,null,null)
D.h03=new A.D("Show this to sender",null,C.iX,null,null,null,null,null,null,null,null,null)
D.h17=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h61=new A.D("Organization settings",null,C.cK,null,null,null,null,null,null,null,null,null)
D.h6p=new A.D("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h7r=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h8_=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.haS=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hdI=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.he1=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hen=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.heZ=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hf5=new A.D("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hfv=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hiW=new A.D("Share files & videos\nwith a scan.",null,C.aYM,null,null,null,null,null,null,null,null,null)
D.hjf=new A.D("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hR6=new B.a0i(null)
D.aeM=new B.aeA(0,"docShare")
D.aeN=new B.aeA(1,"gate")
D.Yd=new B.aeA(2,"gateNoIndividual")})();(function staticFields(){$.aRC=null
$.fyF=function(){var x=y.N
return A.S(x,x)}()
$.Hy=A.S(y.N,y.D)
$.aiJ=A.S(y.N,A.as("mj"))
$.SN=A.S(y.N,y.D)
$.fzl=A.S(y.N,A.as("aeh"))
$.chw=A.S(y.S,A.as("bAI"))
$.hDg=1
$.itW=null
$.itV=null
$.ikD=null
$.hrv=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iO1","hWu",()=>new B.cvM())
x($,"iLV","hvM",()=>C.a.q(A.by(A.by(A.by(A.I3(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["rBi7TDQ0zvqiQhIQKddNCCwf8ls="]=a.current})($__dart_deferred_initializers__);