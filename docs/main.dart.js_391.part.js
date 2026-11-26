((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cvf:function cvf(){},
ic1(d){var x=null,w=new B.b85(d,D.eOe,new A.q5(x,x,y.c6),new A.q5(x,x,y.B))
w.bEu(d)
return w},
b85:function b85(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cva:function cva(d){this.a=d},
cvb:function cvb(d){this.a=d},
cvc:function cvc(d){this.a=d},
cv9:function cv9(d){this.a=d},
cvd:function cvd(d){this.a=d},
ic2(d,e){var x=y.N
x=new B.b86(d,e,A.S(x,y.e),A.S(x,y.z))
x.bEv(d,e)
return x},
b86:function b86(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cvg:function cvg(d){this.a=d},
cvh:function cvh(d){this.a=d},
cvi:function cvi(d){this.a=d},
cvj:function cvj(d){this.a=d},
cvk:function cvk(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvn:function cvn(d){this.a=d},
hpg(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bd("IndexedDB not available"))
return C.xH.Hj(x,"ngmy_doc_share_v1",new B.fGa(),1)},
iiS(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eA(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.vZ(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cK.aK(d)
return x}catch(w){return v}return v},
SQ(d,e){return B.iyH(d,e)},
iyH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SQ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRe
x=7
return A.b(o==null?$.aRe=B.hpg():o,$async$SQ)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mA(s,"blobs","readwrite")
C.iV.mj(J.mz(q,"blobs"),r,d)
x=8
return A.b(J.oS(q),$async$SQ)
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
return A.i($async$SQ,w)},
SP(d){return B.iyG(d)},
iyG(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRe
x=7
return A.b(o==null?$.aRe=B.hpg():o,$async$SP)
case 7:s=f
r=J.mA(s,"blobs","readonly")
x=8
return A.b(C.iV.y_(J.mz(r,"blobs"),d),$async$SP)
case 8:q=f
x=9
return A.b(J.oS(r),$async$SP)
case 9:o=B.iiS(q)
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
return A.i($async$SP,w)},
ajd(d){return B.iyF(d)},
iyF(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRe
x=7
return A.b(p==null?$.aRe=B.hpg():p,$async$ajd)
case 7:s=f
r=J.mA(s,"blobs","readwrite")
C.iV.GP(J.mz(r,"blobs"),d)
x=8
return A.b(J.oS(r),$async$ajd)
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
return A.i($async$ajd,w)},
fGa:function fGa(){},
ilo(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bt8(w,v))}return u},
hRu(d,e){var x,w={},v=A.b_1("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h5X(w,v,e)
C.xJ.x0(v,"change",new B.h5Z(w,v,!1))
C.xJ.x0(v,"cancel",new B.h5Y(w))
$.eX.mK()
v.click()
A.bO(C.an7,new B.h5W(w),y.H)},
h5X:function h5X(d,e,f){this.a=d
this.b=e
this.c=f},
h5Z:function h5Z(d,e,f){this.a=d
this.b=e
this.c=f},
h5Y:function h5Y(d){this.a=d},
h5W:function h5W(d){this.a=d},
E1(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E1=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVh()?3:4
break
case 3:x=5
return A.b(B.hLX(e,d,s,!0,!1,f,g,h,!1,i),$async$E1)
case 5:x=1
break
case 4:x=6
return A.b(B.Sr(d,s,f,g,h,i),$async$E1)
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
return A.b(B.JE(s,d),$async$E1)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fBr(s,d),$async$E1)
case 14:x=12
return A.b(r.hLX(q,p,o,n,m,l,k,j,a1,i),$async$E1)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).c9(A.e6(new B.h6b(s,i,d,f,g,h),!1,null,y.H)),$async$E1)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).c9(A.e6(new B.h6c(s,i,d,f,g,h),!1,null,y.H)),$async$E1)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E1,w)},
Sr(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Sr=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2N(e),$async$Sr)
case 3:u=k
x=4
return A.b(B.as1(d,e,!1),$async$Sr)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JE(e,d),$async$Sr)
case 7:if(k){v=D.aez
x=1
break}x=8
return A.b(B.WN(e),$async$Sr)
case 8:v=t?D.Y8:D.aeA
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2L(d,e)){v=D.aez
x=1
break}x=11
return A.b(B.WN(e),$async$Sr)
case 11:v=t?D.Y8:D.aeA
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hjW(d,e)){v=D.aez
x=1
break}x=14
return A.b(B.WN(e),$async$Sr)
case 14:v=D.Y8
x=1
break
case 13:v=t?D.Y8:D.aeA
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sr,w)},
fBr(d,e){var x=0,w=A.j(y.y),v
var $async$fBr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2L(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2N(d),$async$fBr)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBr,w)},
hLX(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).c9(A.e6(new B.fIR(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hGr(d,e,f,g,h,i,j){return new B.a09(e,j,d,g,h,i,f,null)},
fKN(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fKN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fKQ(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fKN)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKN,w)},
fLh(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fLh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fLj(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fLh)
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
return A.i($async$fLh,w)},
hpt(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fYv(d,e){var x=0,w=A.j(y.H),v
var $async$fYv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WN(e),$async$fYv)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e4()
case 1:return A.h(v,w)}})
return A.i($async$fYv,w)},
h6b:function h6b(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h6c:function h6c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeo:function aeo(d,e){this.a=d
this.b=e},
fIR:function fIR(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a09:function a09(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCs:function aCs(){this.c=this.a=this.d=null},
dgu:function dgu(d,e){this.a=d
this.b=e},
dgr:function dgr(d){this.a=d},
dgt:function dgt(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgw:function dgw(){},
dgv:function dgv(d){this.a=d},
aeS:function aeS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF7:function aF7(d,e){this.a=d
this.b=e},
aIn:function aIn(d,e,f){this.a=d
this.b=e
this.c=f},
fKQ:function fKQ(d,e,f){this.a=d
this.b=e
this.c=f},
fKO:function fKO(d){this.a=d},
fKP:function fKP(d,e,f){this.a=d
this.b=e
this.c=f},
fLj:function fLj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLi:function fLi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgD(d,e,f,g,h){return B.i6K(d,e,f,g,h)},
i6K(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cgD=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dP(d,new B.cgE(s,e,h,g,f,q),y.g),y.l),$async$cgD)
case 3:r=p.aQ(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgD,w)},
b2I(d,e,f,g,h){return B.i6L(d,e,f,g,h)},
i6L(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2I=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axy("GET",d)
o=A.bJ6()
if(o==null)o=new A.Ig(A.a([],y.W))
x=7
return A.b(o.fc(0,s).d7(0,C.HE),$async$b2I)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dn(),$async$b2I)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cx(q,h,o,e,f,"Received via QR")
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
return A.i($async$b2I,w)},
b2H(d){return B.i6I(d)},
i6I(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wa(d,null).d7(0,C.oU),$async$b2H)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.m3(A.m0(p.e)).cF(0,p.w),null)
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
return A.i($async$b2H,w)},
cgC(d){return B.i6J(d)},
i6J(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cgC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wa(d,null).d7(0,C.r9),$async$cgC)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m3(A.m0(q.e)).cF(0,q.w)
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
return A.i($async$cgC,w)},
cgE:function cgE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jU:function jU(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JC(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i6Q(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JC(C.a.aV(t,u.length))}return null},
i6R(d){var x=B.JC(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i6M(){var x,w=$.oO(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8U(d){return B.i6N(d)},
i6N(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.fb(d,null,!1,C.bN),$async$a8U)
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
return A.i($async$a8U,w)},
a8V(d,e){return B.i6O(d,e)},
i6O(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8V=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i_(d,e,!1,!1,C.cX,null),$async$a8V)
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
return A.i($async$a8V,w)},
Cw(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cw)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JC(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8W(r),$async$Cw)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8U("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cw)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JC(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cw)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i6M()
x=14
return A.b(B.a8W(m),$async$Cw)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8V("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
case 15:k=f
x=16
return A.b(B.a8V("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cw)
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
return A.i($async$Cw,w)},
a8W(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JC(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8U("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8W)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8W,w)},
a8X(d,e,f,g){return B.i6S(d,e,f,g)},
i6S(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8X=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JC(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8W(r),$async$a8X)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cgK())>1048576||g.aR(d,new B.cgL())){v=B.FE(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a97("myCode",d,a0),$async$a8X)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cx(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FE(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2Q(u,g.gJ(d),a0),$async$a8X)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oO().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cgM(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2J(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8X)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8X,w)},
FE(d,e,f,g,h){return B.i6P(d,e,f,g,h)},
i6P(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FE=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FE)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cJ(a6)
k=l.cD(a6,0,new B.cgG())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oO().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cV.av(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JG(a9,q)
a0=new A.Lv(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FE)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.f5().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nQ(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acA(a1.a,a4,"media",a1.d,a2).xX(m,n,new A.EU(!0,q.c)),$async$FE)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FE)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTY(r),$async$FE)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cgH(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2J(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FE)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTY(r),$async$FE)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FE,w)},
b2J(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8U(t),$async$b2J)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cgF(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8V(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2J,w)},
OJ(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OJ=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8U("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OJ)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cx(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aQ(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
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
return A.b(B.b2K(k,a0),$async$OJ)
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
return A.b(B.b2P(h),$async$OJ)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WU(g,a0),$async$OJ)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cgI(),q),n)
d=A.B(new A.X(r,new B.cgJ(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cV(d,0,A.dz(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8V("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OJ)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
b2K(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cx(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aQ(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a1(p)
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
break}i=B.iCR(k,j)
C.d.u(s,i)
x=5
return A.b(B.E_(l,m,"Received via My Code",t,e,i),$async$b2K)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTY(s),$async$b2K)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2K,w)},
cgK:function cgK(){},
cgL:function cgL(){},
cgM:function cgM(){},
cgG:function cgG(){},
cgH:function cgH(){},
cgF:function cgF(){},
cgI:function cgI(){},
cgJ:function cgJ(){},
h68(d,e){var x=0,w=A.j(y.H)
var $async$h68=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).c9(A.e6(new B.h69(e),!1,null,y.H)),$async$h68)
case 2:return A.h(null,w)}})
return A.i($async$h68,w)},
bIA(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bIA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cx(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).c9(A.e6(new B.h6a(g,e,f),!1,null,y.y)),$async$bIA)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bIA,w)},
h69:function h69(d){this.a=d},
h6a:function h6a(d,e,f){this.a=d
this.b=e
this.c=f},
WK:function WK(d,e){this.c=d
this.a=e},
aGv:function aGv(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e34:function e34(d,e){this.a=d
this.b=e},
WO:function WO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGy:function aGy(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e4d:function e4d(d){this.a=d},
e4e:function e4e(d){this.a=d},
e4f:function e4f(d){this.a=d},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4g:function e4g(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4i:function e4i(d,e){this.a=d
this.b=e},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4k:function e4k(d,e){this.a=d
this.b=e},
e4l:function e4l(d){this.a=d},
e4o:function e4o(){},
e4m:function e4m(d){this.a=d},
e4n:function e4n(d,e){this.a=d
this.b=e},
bnd:function bnd(){},
WL:function WL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGw:function aGw(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e35:function e35(d){this.a=d},
e36:function e36(d){this.a=d},
hjX(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i6U(d){var x=d.l2
if(x>=0)return x
return 4.99},
i6T(d){var x=d.lL,w=y.N
w=x.iX(x,new B.cgO(),w,w)
return w},
hBo(d){var x=d.kF,w=y.N
w=x.iX(x,new B.cgP(),w,w)
return w},
b2N(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2N)
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
return A.i($async$b2N,w)},
a8Z(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8Z)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a8Z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8Z,w)},
WN(d){var x=0,w=A.j(y.H),v,u
var $async$WN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WN)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WN,w)},
hjW(d,e){var x,w,v
if(B.i6U(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i6T(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.c8(new A.W(Date.now(),0,!1))},
b2L(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hBo(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.c8(new A.W(Date.now(),0,!1))},
hBp(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hBo(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.c8(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.ds(f,0,0,0,0,0).a).aa().ag())
d.kF=w},
as2(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$as2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$as2)
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
return A.i($async$as2,w)},
as3(d){var x=0,w=A.j(y.H),v,u,t
var $async$as3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.as2(d),$async$as3)
case 3:u=f
x=5
return A.b(A.aB(),$async$as3)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$as3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$as3,w)},
as1(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$as1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hjX(d)
if(u<=0){v=!1
x=1
break}if(B.hjW(d,e)){v=!1
x=1
break}x=3
return A.b(B.as2(e),$async$as1)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as1,w)},
b2M(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JE(e,d),$async$b2M)
case 3:if(g){v=-1
x=1
break}u=B.hjX(d)
if(u<=0){v=-1
x=1
break}if(B.hjW(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.as2(e),$async$b2M)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2M,w)},
cgR(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JE(e,d),$async$cgR)
case 3:if(h){v=!1
x=1
break}v=B.as1(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgR,w)},
cgQ(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgQ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgR(d,u,i.gVh()),$async$cgQ)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgQ,w)},
a8Y(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8Y=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gVh()){v=!0
x=1
break}if(B.b2L(d,u)){v=!0
x=1
break}x=5
return A.b(A.lW(u,C.Vn),$async$a8Y)
case 5:x=k?3:4
break
case 3:B.hBp(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8Y)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lw(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Vn,"Doc Share for Organizations"),$async$a8Y)
case 7:if(!k){v=!1
x=1
break}B.hBp(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8Y)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Y,w)},
cgO:function cgO(){},
cgP:function cgP(){},
h78(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h78=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h78)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fxF.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i1([r],e.c))
s.toString
$.fxF.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h78,w)},
iF3(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fxF.br($.fxF,new B.h7a(d))},
h7a:function h7a(d){this.a=d},
fzk(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fzk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i1([d],f))
s.toString
u=A.nj(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jE,null,y.H),$async$fzk)
case 3:C.C0.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzk,w)},
ai9(d,e,f){var x=0,w=A.j(y.H),v
var $async$ai9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fyl.n(0,d,new B.ae5(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ai9)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ai9)
case 2:return A.h(null,w)}})
return A.i($async$ai9,w)},
ai3(d){return B.ini(d)},
ini(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ai3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fyl.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ai3)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cx(s)){v=null
x=1
break}o=J.b8(s,new B.fD7(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ae5(r)
$.fyl.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ai3,w)},
Sh(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Sh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.Hq.n(0,d,u)
x=3
return A.b(B.SQ(d,u),$async$Sh)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sh,w)},
aRz(d){return B.ing(d)},
ing(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hq.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SP(d),$async$aRz)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hq.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRz)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cK.aK(r)
x=!J.cx(q)?9:10
break
case 9:B.Sh(d,q)
x=11
return A.b(J.fS(s,d),$async$aRz)
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
return A.i($async$aRz,w)},
ijj(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cd(J.eA(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cd(A.vZ(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
return A.f9(null,y.K)},
a3H(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bG,y.cf)
t=new A.c9(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fJ2(r,t),!1,s)
A.fI(r,"error",new B.fJ3(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.P6,new B.fJ4())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3H,w)},
aRU(d,e,f){return B.ipF(d,e,f)},
ipF(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRU=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.S(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a3H(i),$async$aRU)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SQ(o,p),$async$aRU)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ai9(k,j,s),$async$aRU)
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
return A.i($async$aRU,w)},
aRT(d,e,f){return B.ipE(d,e,f)},
ipE(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRT=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRU(d,e,f),$async$aRT)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3H(f),$async$aRT)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hq.n(0,s,r)
$.SB.n(0,s,r)
x=11
return A.b(B.Sh(s,r),$async$aRT)
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
return A.i($async$aRT,w)},
Cx(d,e,f,g,h,i){return B.i72(d,e,f,g,h,i)},
i72(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cx=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cV.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jU(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b2T(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Sh(s,d),$async$Cx)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$Cx)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$Cx)
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
return A.b(B.Br(e),$async$Cx)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.HB(e,j),$async$Cx)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cx,w)},
WP(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WP=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Br(d),$async$WP)
case 3:t=a1
s=e.length,r=J.cJ(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cV.av(99999)
n=p.b
l=o.type
l.toString
k=B.hBr(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jU(m,n,k,l,j,"From folder",null,B.b2T(),null)
$.aiy.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3H(o),$async$WP)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hq.n(0,h,g)
$.SB.n(0,h,g)
B.Sh(h,g)
x=9
break
case 10:x=11
return A.b(B.aRT(d,m,o),$async$WP)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HB(d,t),$async$WP)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WP,w)},
hk0(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hk0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hBr(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JF(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.Cx(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hk0,w)},
JF(d,e,f,g,h,i){return B.i71(d,e,f,g,h,i)},
i71(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JF=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lv(A.dz(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JF)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cx(m)){x=6
break}J.h4(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.Tq(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kz(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SQ(k,l),$async$JF)
case 11:J.c8(q,k);++p
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
return A.b(j.a1(0),$async$JF)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SQ(k,new Uint8Array(A.cd(n))),$async$JF)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ai9(r,q,g),$async$JF)
case 16:f=new B.jU(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b2T(),null)
x=17
return A.b(B.Br(d),$async$JF)
case 17:e=a6
J.c8(e,f)
x=18
return A.b(B.HB(d,e),$async$JF)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JF,w)},
WR(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WR=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiy.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3H(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ai3(s),$async$WR)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SP(u[o]),$async$WR)
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
v=A.vZ(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SB.h(0,s)
if(i==null)i=$.Hq.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t7(d,e),$async$WR)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SB.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vZ(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WR,w)},
hBr(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t7(d,e){return B.i73(d,e)},
i73(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t7=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SB.h(0,f)
if(e==null)e=$.Hq.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiy.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3H(s),$async$t7)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hq.n(0,f,r)
$.SB.n(0,f,r)
B.Sh(f,r)
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
return A.b(B.ai3(f),$async$t7)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ae1(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SP(g[l]),$async$t7)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8x()
if(!C.aI.gar(r)){$.Hq.n(0,f,r)
$.SB.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRz(f),$async$t7)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SB.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WR(a0,a1,0,g),$async$t7)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.Hq.n(0,f,h)
$.SB.n(0,f,h)
B.Sh(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t7,w)},
i76(d){var x,w,v=$.aiy.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i77(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i1([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i74(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
as9(d,e,f,g,h){return B.i75(d,e,f,g,h)},
i75(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$as9=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiy.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3H(s),$async$as9)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t7(g,e),$async$as9)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f5().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iE(d).xX(h,r,new A.EU(!0,e.c)),$async$as9)
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
return A.i($async$as9,w)},
hBt(d,e,f,g,h){var x,w,v,u,t=$.hBs
$.hBs=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ch1.n(0,t,new B.bAf(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ae1(u)))
return t},
hk1(d){var x=0,w=A.j(y.H)
var $async$hk1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hk1,w)},
JG(d,e){var $async$JG=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiy.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.S(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qM(B.WR(d,e,p,o<q?o:q),$async$JG,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qM(A.GX(n),$async$JG,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qM(B.ai3("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JG,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qM(B.SP(h[l]),$async$JG,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qM(A.GX(k),$async$JG,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qM(B.t7(d,e),$async$JG,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qM(A.GX(A.vZ(j,p,o<i?o:i)),$async$JG,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qM(null,0,w)
case 2:return A.qM(t.at(-1),1,w)}})
var x=0,w=A.hKD($async$JG,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hMH(w)},
b2V(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ch1.h(0,d)
if(t==null||J.cx(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6P(),$async$b2V)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2V,w)},
WQ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ch1.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6P(),$async$WQ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ai9(r.c,u,r.z),$async$WQ)
case 4:t=new B.jU(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b2T(),null)
u=r.a
x=5
return A.b(B.Br(u),$async$WQ)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.HB(u,s),$async$WQ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WQ,w)},
a94(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a94=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ch1.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajd(u[s]),$async$a94)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a94,w)},
ch3(d,e,f){var x=0,w=A.j(y.H)
var $async$ch3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFn(d,e,f),$async$ch3)
case 2:return A.h(null,w)}})
return A.i($async$ch3,w)},
ch4(d,e,f){var x=0,w=A.j(y.H)
var $async$ch4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFo(d,e,f),$async$ch4)
case 2:return A.h(null,w)}})
return A.i($async$ch4,w)},
FF(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Br(d),$async$FF)
case 2:p=g
J.nh(p,new B.ch2(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hq.X(0,v)
$.aiy.X(0,e)
x=3
return A.b(B.ai3(v),$async$FF)
case 3:u=g
$.fyl.X(0,v)
x=4
return A.b(A.aB(),$async$FF)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FF)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FF)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajd(s[q]),$async$FF)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajd(v),$async$FF)
case 13:x=14
return A.b(B.HB(d,p),$async$FF)
case 14:return A.h(null,w)}})
return A.i($async$FF,w)},
b2U(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t7(d,e),$async$b2U)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fzk(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2U,w)},
Br(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Br=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Br)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fJ5(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Br,w)},
HB(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HB)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fNo(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$HB)
case 3:return A.h(null,w)}})
return A.i($async$HB,w)},
bFn(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFn)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHe(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHF(f))
x=4
return A.b(B.HB(d,u),$async$bFn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFn,w)},
bFo(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFo)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHf(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cSN(f))
x=4
return A.b(B.HB(d,u),$async$bFo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFo,w)},
ae5:function ae5(d){this.a=d},
fD7:function fD7(){},
fJ2:function fJ2(d,e){this.a=d
this.b=e},
fJ3:function fJ3(d){this.a=d},
fJ4:function fJ4(){},
ch2:function ch2(d){this.a=d},
bAf:function bAf(d,e,f,g,h,i,j,k,l){var _=this
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
fJ5:function fJ5(){},
fNo:function fNo(){},
fHe:function fHe(d){this.a=d},
fHf:function fHf(d){this.a=d},
a95(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a95=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.ch7())?3:4
break
case 3:x=5
return A.b(B.b2W(d,e),$async$a95)
case 5:u=g
if(u!=null){t=u.c
B.OL(d,u.b,e,t)}v=u
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
return A.b(B.b2R(s),$async$a95)
case 10:case 9:if(g){v=new A.RC(1,D.V0,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WS(d,e),$async$a95)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WX(!0,!0,d,e),$async$a95)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OL(d,D.B2,e,t)
v=new A.RC(p,D.B2,t)
x=1
break}v=B.ch6(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a95,w)},
WS(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a97(null,d,e),$async$WS)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cx(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2Q(p,d.length,e),$async$WS)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ch4(e,C.d.gG(d).a,r.b),$async$WS)
case 7:case 6:q=r.a
x=8
return A.b(B.OL(d,D.V0,e,q),$async$WS)
case 8:v=new A.RC(d.length,D.V0,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WS,w)},
WT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mR(D.ns)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a96(d,e),$async$WT)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ch_(s,d,e,t),$async$WT)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2R(t),$async$WT)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t7(e,d),$async$WT)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WS(A.a([d],y.r),e),$async$WT)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WT,w)},
WV(){var x=0,w=A.j(y.H)
var $async$WV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hjV(),$async$WV)
case 2:x=3
return A.b(B.aUj(),$async$WV)
case 3:return A.h(null,w)}})
return A.i($async$WV,w)},
a96(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a96=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2T()
x=3
return A.b(B.ch3(e,d.a,u),$async$a96)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a96,w)},
OL(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.V0&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a96(p,f),$async$OL)
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
return A.b(B.cgZ(o,p,u,f),$async$OL)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ch_(o,p,f,t),$async$OL)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cgY(o,u,p,f),$async$OL)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OL,w)},
b2W(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ch5(e,d),$async$b2W)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WX(!1,!0,d,e),$async$b2W)
case 4:u=g
if(u!=null){t=u.b
v=new A.RC(u.a,D.B2,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2W,w)},
ch5(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ch5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WR(d,s,0,1),$async$ch5)
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
return A.i($async$ch5,w)},
ch6(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ch6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a97(null,d,e),$async$ch6)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hBq(u)
if(t.length>800){v=null
x=1
break}v=new A.RC(d.length,D.e3b,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch6,w)},
asa(d,e,f){return B.i7a(d,e,f)},
i7a(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asa=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.db(g,"\ufeff"))g=J.ni(g,1)
x=B.hk_(g)?3:4
break
case 3:x=5
return A.b(B.ch0(g),$async$asa)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.db(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ni(g,13))
try{k=B.FG(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.db(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ni(g,13))
u=9
x=12
return A.b(B.b2P(q),$async$asa)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WU(p,a0)
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
case 11:case 7:if(J.db(g,"NGMYDOCSYNC0|"))try{n=B.hjZ(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WU(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.db(g,"N2|")){v=B.JH(C.a.i(J.ni(g,3)),d,a0)
x=1
break}if(J.db(g,"NGMYDOCSYNC2|")){v=B.JH(C.a.i(J.ni(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JH(h,d,a0)
x=1
break}if(J.eF(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WU(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asa,w)},
JH(d,e,f){return B.i78(d,e,f)},
i78(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JH=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aw(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cG(A.v(s)+"/manifest.json",0,null)
q=A.cG(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2H(r),$async$JH)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2H(A.cG(s,0,null)),$async$JH)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cx(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cgD(o,r,a1,n,a2),$async$JH)
case 11:m=a4
x=J.cx(m)?12:13
break
case 12:x=14
return A.b(B.cgC(q),$async$JH)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WU(l,a2),$async$JH)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cx(m)?null:m
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
return A.i($async$JH,w)},
a97(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a97=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aQ(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t7(f,r),$async$a97)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcp().aK(q)],t,s))
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
return A.i($async$a97,w)},
WU(d,e){return B.i79(d,e)},
i79(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WU=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aQ(r)
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
break}i=C.cK.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cx(i,a3,d,k,l,o),$async$WU)
case 9:h=a5
if(h!=null)J.c8(n,h)
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
return A.i($async$WU,w)},
OK:function OK(d,e){this.a=d
this.b=e},
ch7:function ch7(){},
a3g(d){var x=A.Q(d).ax.a===C.I,w=x?D.akk:D.ahN,v=x?D.am7:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.aji:C.bn
return new A.aJD([w,s,v,u,t,x?C.fz:C.bU])},
hSy(d,e){var x=e?C.v.j(0.72):C.b7
return A.cf(null,x,!0,null,new B.hbs(e),d,null,!0,!0,y.N)},
cgN(d,e,f,g,h,i,j,k,l){return new B.WM(e,l,d,f,k,j,g,h,i,null)},
a0b(d,e,f,g,h,i,j){return new B.bhI(g,h,j,e,i,d,f,null)},
hbs:function hbs(d){this.a=d},
a08:function a08(d,e){this.c=d
this.a=e},
aCr:function aCr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgq:function dgq(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgp:function dgp(d){this.a=d},
bzS:function bzS(){},
WM:function WM(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGx:function aGx(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e4b:function e4b(d){this.a=d},
e3z:function e3z(d,e){this.a=d
this.b=e},
e3A:function e3A(d,e){this.a=d
this.b=e},
e38:function e38(d,e,f){this.a=d
this.b=e
this.c=f},
e37:function e37(d){this.a=d},
e39:function e39(d,e){this.a=d
this.b=e},
e3e:function e3e(d,e,f){this.a=d
this.b=e
this.c=f},
e3d:function e3d(d){this.a=d},
e4_:function e4_(d,e){this.a=d
this.b=e},
e40:function e40(d){this.a=d},
e3w:function e3w(d,e,f){this.a=d
this.b=e
this.c=f},
e3t:function e3t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3c:function e3c(d){this.a=d},
e3E:function e3E(d){this.a=d},
e3D:function e3D(){},
e3i:function e3i(d){this.a=d},
e3X:function e3X(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3v:function e3v(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e3M:function e3M(d){this.a=d},
e3L:function e3L(d){this.a=d},
e3N:function e3N(){},
e3O:function e3O(){},
e3P:function e3P(d,e){this.a=d
this.b=e},
e3R:function e3R(){},
e3S:function e3S(d){this.a=d},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3F:function e3F(d){this.a=d},
e3G:function e3G(d){this.a=d},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d){this.a=d},
e3J:function e3J(d){this.a=d},
e3f:function e3f(){},
e3g:function e3g(d){this.a=d},
e3h:function e3h(d,e){this.a=d
this.b=e},
e3b:function e3b(d,e){this.a=d
this.b=e},
e3a:function e3a(d,e,f){this.a=d
this.b=e
this.c=f},
e3x:function e3x(d){this.a=d},
e3y:function e3y(d,e,f){this.a=d
this.b=e
this.c=f},
e3r:function e3r(d,e){this.a=d
this.b=e},
e3n:function e3n(d){this.a=d},
e3k:function e3k(d,e,f){this.a=d
this.b=e
this.c=f},
e3o:function e3o(d){this.a=d},
e3p:function e3p(d){this.a=d},
e3q:function e3q(){},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3l:function e3l(d){this.a=d},
e3j:function e3j(d,e,f){this.a=d
this.b=e
this.c=f},
e3m:function e3m(){},
e3C:function e3C(d){this.a=d},
e3B:function e3B(d,e){this.a=d
this.b=e},
e3W:function e3W(d,e){this.a=d
this.b=e},
e3T:function e3T(d){this.a=d},
e3U:function e3U(d,e){this.a=d
this.b=e},
e3V:function e3V(d){this.a=d},
e48:function e48(d){this.a=d},
e46:function e46(d){this.a=d},
e47:function e47(d){this.a=d},
e49:function e49(){},
e4a:function e4a(d,e){this.a=d
this.b=e},
e42:function e42(d,e){this.a=d
this.b=e},
e43:function e43(d,e,f){this.a=d
this.b=e
this.c=f},
e41:function e41(d,e,f){this.a=d
this.b=e
this.c=f},
e44:function e44(d,e){this.a=d
this.b=e},
e45:function e45(d,e){this.a=d
this.b=e},
aCo:function aCo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhH:function bhH(d,e,f){this.c=d
this.d=e
this.a=f},
dgm:function dgm(){},
dgn:function dgn(){},
aep:function aep(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgK:function dgK(){},
dgJ:function dgJ(d){this.a=d},
a0a:function a0a(d,e,f){this.c=d
this.d=e
this.a=f},
aCt:function aCt(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dgG:function dgG(d){this.a=d},
dgH:function dgH(d,e,f){this.a=d
this.b=e
this.c=f},
dgI:function dgI(d,e){this.a=d
this.b=e},
dgE:function dgE(d,e){this.a=d
this.b=e},
dgC:function dgC(d){this.a=d},
dgA:function dgA(d){this.a=d},
dgx:function dgx(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgF:function dgF(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgy:function dgy(d){this.a=d},
a07:function a07(d,e,f){this.c=d
this.d=e
this.a=f},
aCq:function aCq(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dgj:function dgj(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dgk:function dgk(d){this.a=d},
dgh:function dgh(d,e){this.a=d
this.b=e},
dgl:function dgl(d){this.a=d},
dgg:function dgg(d,e){this.a=d
this.b=e},
dgc:function dgc(d){this.a=d},
dgd:function dgd(d){this.a=d},
dge:function dge(d,e){this.a=d
this.b=e},
dgf:function dgf(d){this.a=d},
R9:function R9(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dgX:function dgX(d){this.a=d},
dgY:function dgY(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d,e){this.a=d
this.b=e},
dh1:function dh1(d){this.a=d},
dh3:function dh3(d){this.a=d},
dh2:function dh2(d){this.a=d},
a0c:function a0c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCu:function aCu(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgU:function dgU(d,e){this.a=d
this.b=e},
dgL:function dgL(d,e,f){this.a=d
this.b=e
this.c=f},
dgM:function dgM(d){this.a=d},
dgN:function dgN(){},
dgS:function dgS(){},
dgO:function dgO(d,e){this.a=d
this.b=e},
dgP:function dgP(d,e){this.a=d
this.b=e},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgR:function dgR(d,e){this.a=d
this.b=e},
aen:function aen(d,e){this.c=d
this.a=e},
dgb:function dgb(d){this.a=d},
a06:function a06(d){this.a=d},
aCp:function aCp(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0d:function a0d(d,e){this.c=d
this.a=e},
aCv:function aCv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dgW:function dgW(d){this.a=d},
dgV:function dgV(d){this.a=d},
bhI:function bhI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i7b(){var x,w=$.oO(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
OM(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OM)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OM)
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
return A.i($async$OM,w)},
a98(d){return B.i7c(d)},
i7c(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a98=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a98)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i_("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$a98)
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
return A.i($async$a98,w)},
WW(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OM(),$async$WW)
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
return A.b(B.a98(s),$async$WW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WW,w)},
WX(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WX=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$WX)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.ch9(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i7b()
t=A.U(u).k("O<1,a9<n,aG>>")
r=A.B(new A.O(u,new B.cha(s),t),t.k("aj.E"))
x=6
return A.b(B.OM(),$async$WX)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a98(q),$async$WX)
case 7:x=8
return A.b(B.a99(r,u,g,s),$async$WX)
case 8:v=new A.btE(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WX,w)},
asb(d){var x=0,w=A.j(y.y),v,u,t
var $async$asb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OM(),$async$asb)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asb,w)},
chb(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OM(),$async$chb)
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
return A.i($async$chb,w)},
a99(d,e,f,g){return B.i7d(d,e,f,g)},
i7d(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a99=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.as9("media",r,new B.ch8(s,e,g),f,q),$async$a99)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WW(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a99)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WW(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a99)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WW(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a99)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a99,w)},
FG(d,e,f){return B.i7e(d,e,f)},
i7e(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FG=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FG)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asb(b3),$async$FG)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.j6,null,g),$async$FG)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asb(b3),$async$FG)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OM(),$async$FG)
case 10:e=c0
g=J.a1(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a1(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cx(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a1(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a1(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f5().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nQ(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acA(a8.a,b0,"media",a8.d,a9).DI(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b2I(k,n,o,s,b7),$async$FG)
case 17:j=c0
if(j!=null){J.c8(p,j);++q
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
a2=$.f5().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nQ(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acA(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FG)
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
return A.b(B.a98(e),$async$FG)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FG,w)},
ch9:function ch9(){},
cha:function cha(d){this.a=d},
ch8:function ch8(d,e,f){this.a=d
this.b=e
this.c=f},
aUj(){var x=0,w=A.j(y.H),v,u
var $async$aUj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.iiC=null
v=y.H
u=A.dS(null,v)
x=2
return A.b(u,$async$aUj)
case 2:u=A.dS(null,v)
x=3
return A.b(u,$async$aUj)
case 3:u=$.hpF
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dS(u,v),$async$aUj)
case 4:$.hpF=$.irw=$.irx=null
return A.h(null,w)}})
return A.i($async$aUj,w)},
fN_(d){var x=0,w=A.j(y.H),v,u
var $async$fN_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aba){x=1
break}u=new A.bn($.bG,y.d4)
d.c=new B.fN0(new A.c9(u,y.aY))
x=3
return A.b(u.ic(0,C.hd,new B.fN1()),$async$fN_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fN_,w)},
iru(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i6W(x):x},
hpK(d){var x=0,w=A.j(y.T),v,u,t
var $async$hpK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asd(u)
x=1
break}v=B.hjZ(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hpK,w)},
hpJ(d){var x=0,w=A.j(y.T),v,u,t
var $async$hpJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.ase(u)
x=1
break}v=B.hjZ(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hpJ,w)},
h6S(d){var x=0,w=A.j(y.T),v
var $async$h6S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ase(d),$async$h6S)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6S,w)},
bGl(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bGl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hpJ(d),$async$bGl)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a1(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGl,w)},
fA8(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fA8=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WQ(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cx(d.a8x(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fA8,w)},
HC(d,e,f){return B.itR(d,e,f)},
itR(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HC=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hpK(a1),$async$HC)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
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
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hUz().aHX(D.dN8,null),$async$HC)
case 4:l=d.hpF=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ae1(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bG,y.b1)
l.y=new B.fNB(f,k,new B.fNC(f,a2,k,j,a0,p),a2,j,a0,p,new A.c9(t,y.ch))
x=5
return A.b(l.a9T(0,new B.Za(r,"offer")),$async$HC)
case 5:d=l
x=7
return A.b(l.anE(0),$async$HC)
case 7:x=6
return A.b(d.a9L(0,a4),$async$HC)
case 6:x=8
return A.b(B.fN_(l),$async$HC)
case 8:x=9
return A.b(l.as0(),$async$HC)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iru(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asf(m,h),$async$HC)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hBq(h)
case 11:v=new A.bsT(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HC,w)},
fN0:function fN0(d){this.a=d},
fN1:function fN1(){},
fNC:function fNC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNB:function fNB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNA:function fNA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ivW(d){switch(d){case"new":return D.eOf
case"checking":return D.eOg
case"connected":return D.eOi
case"completed":return D.eOh
case"failed":return D.eOk
case"disconnected":return D.eOl
case"closed":return D.aTv
case"count":return D.eOj}return D.aTv},
ivX(d){switch(d){case"new":return D.aTw
case"gathering":return D.eOm
case"complete":return D.aba}return D.aTw},
iGD(d){switch(d){case"stable":return D.eOn
case"have-local-offer":return D.eOo
case"have-local-pranswer":return D.eOq
case"have-remote-offer":return D.eOp
case"have-remote-pranswer":return D.eOr
case"closed":return D.aTC}return D.aTC},
iEL(d){switch(d){case"new":return D.aTz
case"connecting":return D.aTA
case"connected":return D.aTB
case"closed":return D.abb
case"disconnected":return D.aTy
case"failed":return D.aTx}return D.abb},
abx:function abx(d,e){this.a=d
this.b=e},
PT:function PT(d,e){this.a=d
this.b=e},
Z9:function Z9(d,e){this.a=d
this.b=e},
PS:function PS(d,e){this.a=d
this.b=e},
Gb:function Gb(d,e){this.a=d
this.b=e},
cve:function cve(){},
hlR(d){var x=new B.Ga()
x.a=d
x.b=!0
return x},
Ga:function Ga(){this.b=this.a=$},
abw:function abw(){},
awK:function awK(){},
Za:function Za(d,e){this.a=d
this.b=e},
hjV(){var x=0,w=A.j(y.H)
var $async$hjV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hjV,w)},
hjY(d,e,f){var x=0,w=A.j(y.T),v
var $async$hjY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mR(D.ns))){v=null
x=1
break}v=B.h78(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hjY,w)},
hBq(d){var x,w=F.ahd.a6y(C.e3.aK(d),null)
if(w.length===0){x=C.e3.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i6V(d){var x,w,v=C.cK.aK(d)
try{x=C.cf.cF(0,F.ahc.bi5(v,!1))
return x}catch(w){x=C.cf.cF(0,v)
return x}},
hjZ(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i6V(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cf.cF(0,C.cK.aK(x))
return v}catch(u){return x}}return null},
i6W(d){var x,w,v,u,t,s=A.a([],y.s)
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
i6X(){var x,w=$.oO(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2O(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2O)
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
return A.i($async$b2O,w)},
cgS(d,e){return B.i6Y(d,e)},
i6Y(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i_("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cX,null),$async$cgS)
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
return A.i($async$cgS,w)},
b2R(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2O(d),$async$b2R)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2R,w)},
b2Q(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2Q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i6X()
r=C.a.i(f)
t=C.e3.aK(s)
x=3
return A.b(B.cgS(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b2Q)
case 3:if(!h){v=null
x=1
break}v=new A.a2f("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2Q,w)},
b2P(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2O(o),$async$b2P)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cF(0,C.cK.aK(u))
if(J.ji(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2P,w)},
cgT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(O.bHk("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cX),$async$cgT)
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
return A.i($async$cgT,w)},
b2S(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JD(),$async$b2S)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2S,w)},
as6(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$as6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as6)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2S(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as6,w)},
as4(d,e){var x=0,w=A.j(y.H)
var $async$as4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as4)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$as4)
case 2:return A.h(null,w)}})
return A.i($async$as4,w)},
a90(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a90=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a90)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JD(),$async$a90)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dw(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9_(s),$async$a90)
case 5:x=6
return A.b(B.as4(f,u),$async$a90)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a90,w)},
a91(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a91=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a91)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JD(),$async$a91)
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
return A.b(B.as4(g,q),$async$a91)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9_(u),$async$a91)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a91,w)},
a92(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a92=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a92)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JD(),$async$a92)
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
s=B.b2L(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a92)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a92)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a92,w)},
cgU(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgU)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
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
return A.i($async$cgU,w)},
JE(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgU(d),$async$JE)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2S(t),$async$JE)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.as5(d),$async$JE)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2L(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.as5(d),$async$JE)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JE,w)},
as5(d){var x=0,w=A.j(y.H)
var $async$as5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as5)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$as5)
case 2:return A.h(null,w)}})
return A.i($async$as5,w)},
b2T(){var x,w=$.oO(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a93(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hk_(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgX(d){return B.i7_(d)},
i7_(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a93(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgX)
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
return A.i($async$cgX,w)},
as8(d,e){return B.i70(d,e)},
i70(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$as8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a93(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i_("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cX,null),$async$as8)
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
return A.i($async$as8,w)},
cgZ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a93(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.as8(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgZ,w)},
cgY(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgY=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a93(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.as8(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgY,w)},
ch_(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ch_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a93(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.as8(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch_,w)},
ch0(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ch0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hk_(d)){v=null
x=1
break}x=3
return A.b(B.cgX(d),$async$ch0)
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
return A.i($async$ch0,w)},
a9a(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9a=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9a)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9a)
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
return A.i($async$a9a,w)},
asc(d){return B.i7f(d)},
i7f(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asc)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i_("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$asc)
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
return A.i($async$asc,w)},
asd(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.db(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asd)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9a(),$async$asd)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cf.cF(0,C.cK.aK(q))
if(J.ji(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asc(s),$async$asd)
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
return A.i($async$asd,w)},
asf(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asf)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9a(),$async$asf)
case 4:u=g
t=J.a1(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e3.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asc(u),$async$asf)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asf,w)},
ase(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ase=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$ase)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9a(),$async$ase)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cf.cF(0,C.cK.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ase,w)},
ar5(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ar5=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.ox)){v=null
x=1
break}x=3
return A.b(p.lw(e),$async$ar5)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.hr),$async$ar5)
case 7:q=g
o=q
o=o==null?null:J.eW(J.uY(o))
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
return A.i($async$ar5,w)},
iCR(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.v(w),5,"0")
return v},
h50(d){return B.iCT(d)},
iCT(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h50=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").M5(d,3600),$async$h50)
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
return A.i($async$h50,w)},
E_(d,e,f,g,h,i){var x=null
return B.iCQ(d,e,f,g,h,i)},
iCQ(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E_=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hBt(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hk1(r),$async$E_)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h50(o),$async$E_)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a94(r),$async$E_)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aXf)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ig(A.a([],g))
x=15
return A.b(d.fc(0,A.axy("GET",A.cG(n,0,null))).d7(0,C.HE),$async$E_)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a94(r),$async$E_)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lv(d)
u=19
case 22:x=24
return A.b(d.C(),$async$E_)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2V(r,k),$async$E_)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$E_)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WQ(r)
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
return A.b(B.a94(r),$async$E_)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E_,w)},
aTY(d){return B.iCS(d)},
iCS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTY)
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
return A.i($async$aTY,w)}},D,Y,N,Z,A_
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
E=c[260]
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
B.cvf.prototype={
aHX(d,e){return this.cUh(d,e)},
cUh(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kC(A.cz(t)))
t=J.k(u)
v=B.ic2(C.cS.gcp().aK(new A.dj(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHX,w)}}
B.b85.prototype={
bEu(d){var x=this,w=x.w
w.onclose=A.hG(new B.cva(x))
w.onopen=A.hG(new B.cvb(x))
w.onmessage=A.hG(new B.cvc(x))
w.onbufferedamountlow=A.hG(new B.cvd(x))},
gd4(d){return this.x},
ajU(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ga()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hlR(J.eW(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$ajU)
case 8:v=t.hlR(s.aqe(f,0,null))
x=1
break
case 7:case 4:v=B.hlR(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajU,w)}}
B.b86.prototype={
bEv(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cvg(x)))
w.addEventListener("icecandidate",A.hG(new B.cvh(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cvi(x)))
w.onicegatheringstatechange=A.hG(new B.cvj(x))
w.addEventListener("signalingstatechange",A.hG(new B.cvk(x)))
if(!$.htV())w.addEventListener("connectionstatechange",A.hG(new B.cvl(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cvm(x)))
w.addEventListener("track",A.hG(new B.cvn(x)))},
anE(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ej(s.createAnswer(A.kC(A.cz(A.S(y.N,y.z)))),y.aQ),$async$anE)
case 3:t=f
v=new B.Za(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anE,w)},
a9L(d,e){return this.btp(0,e)},
btp(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9L)
case 2:return A.h(null,w)}})
return A.i($async$a9L,w)},
a9T(d,e){return this.btK(0,e)},
btK(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9T)
case 2:return A.h(null,w)}})
return A.i($async$a9T,w)},
as0(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$as0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Za(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as0,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.aeo.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a09.prototype={
R(){return new B.aCs()},
gd6(){return this.c}}
B.aCs.prototype={
Z(){this.a3()
this.ago()},
ago(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ago=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2M(u.e,u.c),$async$ago)
case 2:t=e
if(v.c!=null)v.l(new B.dgu(v,t))
return A.h(null,w)}})
return A.i($async$ago,w)},
RM(){var x=0,w=A.j(y.H),v,u=this,t
var $async$RM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.as1(t.e,t.c,!1),$async$RM)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fDs)
x=1
break}x=4
return A.b(B.a8Z(u.a.c,"individual"),$async$RM)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a87(A.e6(new B.dgr(u),!1,null,y.H)),$async$RM)
case 5:case 1:return A.h(v,w)}})
return A.i($async$RM,w)},
Kl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Kl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fKN(o),$async$Kl)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a92(o.e,r,s,q),$async$Kl)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAr)
x=1
break}x=5
return A.b(B.a8Z(u.a.c,"member"),$async$Kl)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a87(A.e6(new B.dgt(u),!1,null,y.H)),$async$Kl)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Kl,w)},
yZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8Y(t.e,o,t.f,t.r,t.w,s),$async$yZ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8Z(u.a.c,"org_owner"),$async$yZ)
case 4:x=5
return A.b(B.as6(u.a.c),$async$yZ)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fLh(o),$async$yZ)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a90(s,t,o,q.c),$async$yZ)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAn)
x=1
break}x=10
return A.b(B.as6(u.a.c),$async$yZ)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a87(A.e6(new B.dgs(u),!1,null,y.H)),$async$yZ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yZ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nW:C.nf,p=B.hjX(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dK,y.m).w
w=A.m(28)
v=A.a([new A.aa(0,C.H,C.az.j(0.35),C.fR,24)],y.V)
u=y.p
v=A.p(s,A.w(A.a([A.p(s,D.fXW,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.ho,s,s,s),C.aB,D.hha,C.R,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cew,C.m),s,s,s,s,C.ev,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lS(new B.dgw(),s),C.N,v,C.ed,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeS(C.f6,C.aFY,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcmD(),s),C.af],u))
w.push(new B.aeS(C.q5,C.a6D,"Team Member","Sign in with your organization access code + password",t.gcny(),s))
w.push(C.af)
w.push(new B.aeS(C.arQ,C.a8g,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcn2(),s))
return A.c6(s,q,A.bm(!0,A.cb(A.w(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeS.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eL(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.mf,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(C.xq,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aF7.prototype={}
B.aIn.prototype={}
B.jU.prototype={
mR(d){var x=this.b,w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gasH(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.a5(x/1024,1)+" KB"
if(x<1073741824)return C.i.a5(x/1048576,1)+" MB"
return C.i.a5(x/1073741824,2)+" GB"},
al(){var x,w=this,v=A.S(y.N,y.z)
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
bhz(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jU(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cSN(d){return this.bhz(null,d)},
aHF(d){return this.bhz(d,null)}}
B.WK.prototype={
R(){return new B.aGv(new A.cB(null,y.A))},
gd6(){return this.c}}
B.aGv.prototype={
Z(){this.a3()
this.agp()},
agp(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cw(u.a.c),$async$agp)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e34(u,t))
case 1:return A.h(v,w)}})
return A.i($async$agp,w)},
agq(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$agq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fO(new A.fD(s)),$async$agq)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fEn)
case 1:return A.h(v,w)}})
return A.i($async$agq,w)},
a0t(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0t=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ar5(s.d,4),$async$a0t)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0t)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0t,w)},
akk(){var x=0,w=A.j(y.H),v,u=this,t
var $async$akk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.ac9("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$akk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akk,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nW:C.nf,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l2
else if(q.e==null)x=A.at(new A.C(C.ev,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.K(C.az.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.D,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AB,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aon,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.H,C.az.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cb(A.w(A.a([x,C.ny,w,C.lq,new A.e9(A.p(p,A.qt(p,p,!1,B.i6R(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lq,A.A(A.a([A.E(A.ep(I.E4,p,C.Xv,q.gceA(),p),1),C.ar,A.E(A.de(C.Ap,p,C.adx,q.gceB(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.R,new A.a4(1/0,p,A.ep(N.a5r,p,D.hcF,q.gcCS(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,Z.aoZ,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.WO.prototype={
R(){return new B.aGy(new A.au(C.ay,$.ay()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aGy.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.JC(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a2()},
a0u(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JC(u.d.a.a)
if(t==null){u.l(new B.e4d(u))
x=1
break}u.l(new B.e4e(u))
s=u.a
r=s.c
x=3
return A.b(B.a8X(s.d,new B.e4f(u),t,r),$async$a0u)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e4g(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0u,w)},
a3Z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3Z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cx(r.a.d)){x=1
break}r.l(new B.e4h(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.t7(r.a.c,q),$async$a3Z)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e4i(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ak0(p,m,l,j,k),$async$a3Z)
case 8:o=e
if(r.c!=null)r.l(new B.e4j(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e4k(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e4l(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3Z,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akk:D.ahN,h=j?D.am7:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.aji:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eS(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c1o,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aD,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f4,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AB,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vd(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bnd()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pr,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e4m(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mQ,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.E8(l.a.d,4)
m=A.B(new A.O(m,new B.e4n(x,new A.aJD(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.kN,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.di,p,C.N,A.p(k,A.w(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fyU)
else q.push(A.V(C.kP,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aM,A.cY(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j5,k,k,k,k,C.eZ,k,k,k)],r))}e=A.E(A.cb(A.w(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJE,k,k,C.ah),1)
u=l.f?k:l.gcCT()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ep(N.a5r,k,D.hdM,u,A.dk(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gceC()
t=A.bp(C.az,k,k,0,C.c,k,C.o3,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c6(g,h,new A.an(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.l1(new B.e4o(),A.w(A.a([e,new A.C(D.bJ6,A.w(A.a([s,C.N,i,C.af,A.bH(l.f?C.ux:D.hc0,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cp,C.a1G,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bnd.prototype={
pe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fn(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.hm(C.bC,v.length),C.aP)}}
B.WL.prototype={
R(){return new B.aGw()}}
B.aGw.prototype={
Z(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bc(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bc(x,C.b6,C.aP),v)
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
w.a2()},
agr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e35(r))
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
return A.b(B.a91(p,m,n,o,C.a.i(l).length===0?null:l),$async$agr)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fDZ)
s=[1]
x=4
break}p.K(y.q).f.T(D.fCA)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e36(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agr,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nW:C.nf,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h4k,s,s,s,1,s,!0),p=A.p(s,D.bB7,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.J4,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8Q,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8L,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c90,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
v=t.r?s:t.gceD()
u=A.bp(C.az,s,s,s,s,C.hu,s,s,s,s,s,s)
return A.c6(q,r,A.cb(A.w(A.a([p,C.di,o,C.af,x,C.af,w,C.ny,A.bH(t.r?C.ux:C.b_8,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.ae5.prototype={}
B.bAf.prototype={
a6P(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8x()))
x=3
return A.b(B.SQ(t,s),$async$a6P)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
gd6(){return this.a}}
B.OK.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a08.prototype={
R(){return new B.aCr(new A.au(C.ay,$.ay()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aCr.prototype={
Z(){this.a3()
$.aS.U$.push(new B.dgq(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a2()},
ceJ(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a3g(d),u=x.a.c,t=u?C.iZ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nW:v.a[0],p=A.m(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.az.j(u?0.25:0.12),C.fR,32)],n),l=A.p(w,Y.auB,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.H,C.az.j(0.4),C.cy,16)],n),C.avr,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.D,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vd(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzS()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.Df,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b8H),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dgo(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mQ,w,w,w,w)
f=f[1]
h=y.p
return A.eB(w,C.L,new A.cP(T.N1,new A.bQ(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xg,A.w(A.a([l,C.aM,k,C.N,j,C.ed,i,C.ed,A.A(A.a([A.E(A.dU(C.ov,new B.dgp(d),A.dk(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.m(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bQ(new A.o(w,w,w,A.m(14),A.a([new A.aa(0,C.H,C.az.j(0.35),C.cN,12)],n),M.Ry,C.m),C.bm,A.aE(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eHC,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gceI(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.Pz,w,C.da,w,w,w)}}
B.bzS.prototype={
pe(d,e){return e.any(e.a.toUpperCase())}}
B.WM.prototype={
R(){return new B.aGx(A.a([],y.r),A.aR(y.N))},
gd6(){return this.c}}
B.aGx.prototype={
Z(){var x=this
x.a3()
x.uw()
x.w=A.d1(C.jY,new B.e4b(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WV()
this.a2()},
a2N(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OJ(u.a.c),$async$a2N)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Br(u.a.c),$async$a2N)
case 4:u.l(new s.e3z(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2N,w)},
uw(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OJ(u.a.c),$async$uw)
case 3:t=e
x=4
return A.b(B.Br(u.a.c),$async$uw)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e3A(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OQ(u.d)
B.Cw(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uw,w)},
OQ(d){return this.bIC(d)},
bIC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a96(r,u.a.c),$async$OQ)
case 8:p=f
if(u.c==null){x=1
break}new B.e38(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mR(D.ns))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WT(r,u.a.c),$async$OQ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Br(u.a.c),$async$OQ)
case 12:u.l(new o.e39(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OQ,w)},
Pf(d){return this.bP4(d)},
bP4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Pf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a96(d,u.a.c),$async$Pf)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e3e(u,d,t))
x=6
return A.b(A.fO(new A.fD(t)),$async$Pf)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fO(new A.fD(r.toUpperCase())),$async$Pf)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Pf,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b0(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
ux(d,e){return this.cO3(d,e)},
cO3(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ux=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e4_(r,e))
u=3
x=6
return A.b(d.$0(),$async$ux)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e40(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ux,w)},
gaZs(){var x=this.a
return x.f||x.r||x.w},
J7(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZs()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgQ(s,n,r,q,o,t),$async$J7)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fYv(o,u.a.c),$async$J7)
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
return A.b(B.E1(s,o,r,q,n,t),$async$J7)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J7,w)},
a1P(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.as6(u.a.c),$async$a1P)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iq("No organization portal found.")
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
return A.b(A.a8(t,!1).c9(A.e6(new B.e3w(u,r,q),!1,null,y.H)),$async$a1P)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1P,w)},
a2Y(d){return this.cwd(d)},
cwc(){return this.a2Y(1)},
cwd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZs()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.as3(u.a.c),$async$a2Y)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2Y,w)},
aed(d,e,f){return this.c5a(d,e,f)},
c5a(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aed=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.ux(new B.e3t(u,d,null,e,f),"Uploading\u2026"),$async$aed)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aed,w)},
bIL(){B.hRu(!1,new B.e3c(this))
return},
cBp(){this.l(new B.e3E(this))},
aC4(){var x=0,w=A.j(y.H),v=this
var $async$aC4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bIL()
return A.h(null,w)}})
return A.i($async$aC4,w)},
ae9(){var x=0,w=A.j(y.H),v=this
var $async$ae9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e3i(v),"Importing\u2026"),$async$ae9)
case 2:return A.h(null,w)}})
return A.i($async$ae9,w)},
TP(d){return this.cNl(d)},
cNl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mR(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).c9(A.e6(new B.e3X(u,d),!1,null,y.H)),$async$TP)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mR(D.TC)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).c9(A.e6(new B.e3Y(u,d),!1,null,y.H)),$async$TP)
case 8:x=1
break
case 7:x=u.c5T(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).c9(A.e6(new B.e3Z(u,d),!1,null,y.H)),$async$TP)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TP,w)},
c5T(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cYu,C.a.aV(x,w+1).toLowerCase())},
ai3(d){return this.cmH(d)},
cmH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ai3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mR(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).c9(A.e6(new B.e3u(u,d),!1,null,y.H)),$async$ai3)
case 5:x=1
break
case 4:u.l(new B.e3v(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ai3,w)},
Ta(d){return this.cEm(d)},
cEm(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ta=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pT(t,s.c,s.f),$async$Ta)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e3Q(u,d),"Preparing QR\u2026"),$async$Ta)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ta,w)},
akK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3R(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3S(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ta(r),$async$akK)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akK,w)},
akD(d){return this.cDU(d)},
cDU(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3g(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e3K(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akD)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TP(d)
break
case"qr":u.Ta(A.a([d],y.r))
break
case"send_my_code":u.cnn(A.a([d],y.r))
break
case"save":u.ak1(d)
break
case"delete":u.K2(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akD,w)},
Zc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3f(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3g(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pT(t,s.c,s.f),$async$Zc)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e3h(u,r),"Preparing file\u2026"),$async$Zc)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zc,w)},
aj9(d){return this.cuu(d)},
cuu(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aj9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hSy(d,!1),$async$aj9)
case 3:s=f
r=s==null
q=B.a93(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aj9,w)},
ai9(){var x=0,w=A.j(y.H),v=this,u
var $async$ai9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h68(u,v.a.c),$async$ai9)
case 2:return A.h(null,w)}})
return A.i($async$ai9,w)},
bIK(){B.hRu(!1,new B.e3b(this,null))
return},
Kk(d,e){return this.cno(d,e)},
b5f(d){return this.Kk(null,d)},
cnn(d){return this.Kk(d,null)},
cno(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Kk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e3x(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y2.cq().aqj(!0,C.a3w,!1),$async$Kk)
case 10:r=g
if(r==null||J.cx(r.a)){x=1
break}x=11
return A.b(s.ux(new B.e3y(l,s,r),"Preparing\u2026"),$async$Kk)
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
return A.b(B.bIA(p,l,e,s.a.c),$async$Kk)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Kk,w)},
Jo(d){return this.c4Y(d)},
c4Y(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i6Q(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b5f(t),$async$Jo)
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
return A.b(u.ux(new B.e3r(u,d),"Receiving video\u2026"),$async$Jo)
case 11:x=1
break
case 10:x=12
return A.b(u.ux(new B.e3s(u,d),"Receiving\u2026"),$async$Jo)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jo,w)},
Fb(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Fb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DW()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aj9(t),$async$Fb)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jo(s),$async$Fb)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).c9(A.e6(new B.e3C(u),!1,null,y.N)),$async$Fb)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uw(),$async$Fb)
case 10:x=1
break
case 9:x=11
return A.b(u.Jo(C.a.i(r)),$async$Fb)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Fb,w)},
ak1(d){return this.czS(d)},
czS(d){var x=0,w=A.j(y.H),v=this
var $async$ak1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e3B(v,d),"Saving\u2026"),$async$ak1)
case 2:return A.h(null,w)}})
return A.i($async$ak1,w)},
K2(d){return this.bRt(d)},
bRt(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$K2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lE(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$K2)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgT(t),$async$K2)
case 6:case 5:s=d.a
x=7
return A.b(B.FF(u.a.c,s),$async$K2)
case 7:u.r.X(0,s)
x=8
return A.b(u.uw(),$async$K2)
case 8:case 1:return A.h(v,w)}})
return A.i($async$K2,w)},
akQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3g(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e3W(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akQ)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ai9()
break
case"import":u.ae9()
break}case 1:return A.h(v,w)}})
return A.i($async$akQ,w)},
ceG(d){var x=d.c
if(C.a.Y(x,"video/")||d.mR(D.ns))return C.rt
if(C.a.Y(x,"image/")||d.mR(D.TC))return C.vA
if(C.a.q(x,"pdf"))return S.IK
return D.ase},
B(d){var x,w,v=this,u=null,t=B.a3g(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IX,u,u,u,new B.e46(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c2_,u,u,u,v.e?u:v.gcn3(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcBo()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bX2:E.asD,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a5n,u,u,u,v.e?u:v.gceH(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p7,u,u,u,v.e?u:v.gb6m(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3P,u,u,u,v.e?u:new B.e47(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lS(new B.e48(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jH(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCo(C.jK,s,!0,t,w?u:v.gcEn(),u),1)
x.push(new A.C(C.aol,A.l1(new B.e49(),A.A(A.a([s,C.ar,A.E(new B.aCo(C.tU,"Export",!1,t,w?u:v.gbVl(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cp,C.iP,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhH(t,v.e?u:v.gb6m(),u)
else s=A.ks(!0,u,u,new B.e4a(v,t),s,u,D.bHJ,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.a0,u,C.ac,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCo.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tH,t,new A.b9(s,C.a1),t,t,t)
return A.de(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.ch,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dk(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tH,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ep(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bhH.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l1(new B.dgm(),new A.C(E.a2D,A.w(A.a([A.l1(new B.dgn(),A.p(x,A.V(C.A2,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ej,C.hz,x,x,new A.bq(0.86,1,w),s),C.ed,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.R,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ed,A.de(C.p7,x,D.hhu,this.d,A.bp(C.az,x,x,x,C.c,x,C.Px,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cp,C.D1,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aep.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.ds(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mR(D.ns))p=D.dBm
else{p=C.a.Y(p,"image/")||i.mR(D.TC)
n=y.O
p=p?A.a([C.cZ,C.az],n):A.a([C.aO.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasH()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.ns))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.b9,A.E(A.w(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h2,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.co))
if(!(!o||i.mR(D.ns)))l.push(A.hhK(C.az,!1,j,j,j,!1,j,j,new B.dgJ(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.V(C.p3,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.co))
return A.l1(new B.dgK(),new A.C(C.dU,A.aE(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a23,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cp,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0a.prototype={
R(){return new B.aCt()},
gd6(){return this.c}}
B.aCt.prototype={
Z(){this.a3()
this.yN()},
t(){B.i74(this.e)
this.a2()},
yN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t7(o.c,o.d),$async$yN)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i77(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i76(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dgG(s))
x=1
break}s.l(new B.dgH(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dgI(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yN,w)},
a3Y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t7(t.c,t.d),$async$a3Y)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fAY)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ak0(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3Y)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3Y,w)},
c4R(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kr(u,C.z,v,new B.dgE(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h7(t,C.z,v,new B.dgF(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bK
return A.tY(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a3g(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.E6,u,u,u,v.gbab(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gw
else{q=v.r
if(q!=null)t=new A.C(C.ev,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ev,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aM,A.de(C.E6,u,D.h_q,v.gbab(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c4R()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a07.prototype={
R(){return new B.aCq(A.akZ(),C.bH,C.bH)},
gd6(){return this.c}}
B.aCq.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iF(new B.dgj(v))
x.gd11().iF(new B.dgk(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bf4
x.iF(new B.dgl(v))
v.yN()},
yN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t7(p.c,p.d),$async$yN)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dgc(s))
x=1
break}x=8
return A.b(s.d.vB(0,new A.a5u(r,s.a.d.c)),$async$yN)
case 8:if(s.c==null){x=1
break}s.l(new B.dgd(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dge(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yN,w)},
a0v(){var x=0,w=A.j(y.H),v=this,u
var $async$a0v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0v)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0v)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0v,w)},
aXi(d){var x=d.a
return C.a.aZ(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3g(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gw
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bY2,C.f,o,o,new A.o(o,o,o,A.m(24),o,M.Ry,C.m),o,88,o,o,o,o,o,88)
t=A.lg(C.az,o,o,m,0,new B.dgf(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aXi(p.w)+" / "+p.aXi(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.fxl,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vD:C.fQ,o,o,o,o,o)
x=A.w(A.a([u,C.lq,t,x,C.di,A.de(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gceK(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.pX,x,o),o,o,o),o,!1,!1,o,o)}}
B.R9.prototype={
R(){return new B.aCw()},
gd6(){return this.c}}
B.aCw.prototype={
Z(){this.a3()
this.R_()},
R_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$R_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hjY(o.c,o.d,new B.dgX(s)),$async$R_)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dgY(s))
x=1
break}s.e=r
q=Q.iuM(r)
if(q==null){s.l(new B.dgZ(s))
x=1
break}s.d=q
q.aU(0,s.gb52())
x=8
return A.b(q.iW(0).d7(0,C.o2),$async$R_)
case 8:if(s.c==null){x=1
break}s.l(new B.dh_(s))
x=9
return A.b(q.qv(0),$async$R_)
case 9:q.u6(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dh0(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$R_,w)},
clb(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dh1(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DX(0,x.gb52())
w=x.d
if(w!=null)w.t()
B.iF3(x.e)
x.a2()},
agu(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2U(u.c,u.d),$async$agu)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agu,w)},
B(d){var x,w,v,u=this,t=null,s=B.a3g(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aI(t,t,t,t,C.oh,t,t,t,u.gceE(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iy(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gw
else{q=u.r
if(q!=null)s=new A.C(C.ev,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ako(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fN(x,new A.an(C.z,t,C.ac,C.t,A.a([new A.AX(s,t),A.aA(t,A.xM(A.p(t,A.V(q?K.vD:C.fQ,C.c,t,t,t,48),C.f,t,t,new A.o(C.b7,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dh3(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0c.prototype={
R(){return new B.aCu(new A.cB(null,y.A))}}
B.aCu.prototype={
gcNJ(){var x,w,v=this.a
if(v.e!==D.V1)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcNj(){var x,w,v=this.a
if(v.e!==D.B2)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcNJ()
if(x!=null){v.Sc(x)
v.e=A.d1(V.D3,new B.dgT(v,x))}w=v.gcNj()
if(w!=null){v.Sb(w)
v.f=A.d1(C.fr,new B.dgU(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Sb(d){return this.csE(d)},
csE(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asb(d),$async$Sb)
case 3:t=f
x=4
return A.b(B.chb(d),$async$Sb)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dgL(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Sb,w)},
Sc(d){return this.csF(d)},
csF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h6S(d),$async$Sc)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bGl(t),$async$Sc)
case 4:if(u.c==null){x=1
break}u.l(new B.dgM(u))
u.c.K(y.q).f.T(D.aWP)
case 1:return A.h(v,w)}})
return A.i($async$Sc,w)},
gcaq(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gceF(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3H(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DW()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fE8)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).c9(A.e6(new B.dgN(),!1,null,y.N)),$async$a3H)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bGl(s),$async$a3H)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aWP)
case 1:return A.h(v,w)}})
return A.i($async$a3H,w)},
ac0(d){return this.bP5(d)},
bP5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ac0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fO(new A.fD(C.d.aL(t,", "))),$async$ac0)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b0(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ac0,w)},
ags(d){return this.bOO(d)},
bOO(d){var x=0,w=A.j(y.H),v=this
var $async$ags=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fO(new A.fD(v.a.c)),$async$ags)
case 2:if(d.e!=null)d.K(y.q).f.T(D.fBr)
return A.h(null,w)}})
return A.i($async$ags,w)},
a3B(d){return this.czU(d)},
czU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3B=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ar5(s.d,4),$async$a3B)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_doc_share_qr.png"),$async$a3B)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3B,w)},
gb_I(){var x,w=this.a
if(w.e!==D.Kb)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
abY(d){return this.bOZ(d)},
bOZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_I()
if(t==null){x=1
break}x=3
return A.b(A.fO(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$abY)
case 3:if(d.e!=null)d.K(y.q).f.T(D.fD7)
case 1:return A.h(v,w)}})
return A.i($async$abY,w)},
agt(){var x=0,w=A.j(y.H),v=this,u
var $async$agt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WV(),$async$agt)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agt,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3g(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kb&&i!==D.V1&&i!==D.B2
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kb||t===D.V1||t===D.B2?l:A.aI(l,l,l,l,C.lG,l,l,l,m.gb2R(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qt(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcaq(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kb){t=C.az.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.N,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.m1,l,l,l)],p))}q.push(C.aM)
q.push(A.c(m.gceF(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.R,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c7T,D.h9a,new B.dgO(m,d),l)],p))}if(m.a.e===D.Kb&&m.gb_I()!=null)C.d.u(q,A.a([C.R,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c4a,D.h5K,new B.dgP(m,d),l)],p))
if(m.a.e===D.B2){x=(m.w?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GA:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.m1,l,l,l)],p))}if(m.a.e===D.V1){x=(m.r?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GA:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.m1,l,l,l),C.af,A.de(D.c_x,l,D.hck,m.gcAh(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pb(i,A.c6(v,w,new A.C(C.ae,A.w(A.a([A.E(A.p(l,A.w(q,C.l,l,C.bc,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(I.E4,l,C.Xv,new B.dgQ(m,d),l),1),C.ar,A.E(A.de(C.Ap,l,C.adx,new B.dgR(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.N,new A.a4(1/0,l,A.bH(U.BH,l,m.gb2R(),A.bp(C.aO,l,l,l,l,C.hu,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dgS(),y.C)}}
B.aen.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cb(A.w(A.a([w,C.aM,A.p(x,A.qt(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bB,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bH(C.BI,x,new B.dgb(d),x)],u),x,x,C.nM,v,x,x,x,x,D.fZn,x)}}
B.a06.prototype={
R(){return new B.aCp(A.A9(C.zm,C.oC,C.vP))}}
B.aCp.prototype={
t(){this.d.t()
this.a2()},
aAt(d){var x,w,v,u,t
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
return A.c6(A.eS(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h6h,x,x,x,1,x,!0),C.v,A.A8(this.d,C.c_,this.gaAs()),x,!1,!1,x,x)}}
B.a0d.prototype={
R(){return new B.aCv(A.A9(C.zm,C.oC,C.vP))},
gd6(){return this.c}}
B.aCv.prototype={
c5V(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aix(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aix=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N7("text/plain"),$async$aix)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fE2)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aix,w)},
acP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hSy(p,!0),$async$acP)
case 3:t=e
p=t==null
s=B.a93(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fAy)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acP,w)},
t(){this.d.t()
this.a2()},
aAt(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c5V(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.atF,v,v,v,w.gbUP(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5v,v,v,v,w.gcpT(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.rn:R.QH,v,v,v,v,v),v,v,v,new B.dgW(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hdg,v,v,v,1,v,!0)
u=A.A8(w.d,C.c_,w.gaAs())
x=A.m(20)
return A.c6(t,C.v,new A.an(C.a0,v,C.ac,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eNV],s),v),v,!1,!1,v,v)}}
B.bhI.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pP
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pP:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2J,A.A(A.a([u,C.b9,A.E(A.w(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eK,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abx.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PT.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Z9.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PS.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gb.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cve.prototype={}
B.Ga.prototype={}
B.abw.prototype={}
B.awK.prototype={}
B.Za.prototype={}
var z=a.updateTypes(["az<~>()","P(jU)","n(jU)","WM(Z)","~()","a09(Z)","G(G,jU)","R9(Z)","~(lJ)","cp(Ga)","az<jU?>(@)","WK(Z)","WO(Z)","C(jU)","jU(@)","a9<n,@>(jU)","a08(Z)","WL(Z)","a0a(Z)","a07(Z)","a0c(Z)","aen(Z)","ai<jU>()","a0d(Z)","aep(Z,G)","a06(Z)","a9<n,aG>(jU)","cp(Z9)","cp(abw)","az<cp>(Ga)"])
B.cva.prototype={
$1(d){var x=this.a
x.x=D.aTu
x.y.I(0,D.aTu)},
$S:75}
B.cvb.prototype={
$1(d){var x=this.a
x.x=D.aTt
x.y.I(0,D.aTt)},
$S:75}
B.cvc.prototype={
$1(d){var x=this.a
x.ajU(A.a4_(d.data)).bE(new B.cv9(x),y.b)},
$S:75}
B.cv9.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cvd.prototype={
$1(d){},
$S:75}
B.cvg.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.ic1(d.channel))},
$S:17}
B.cvh.prototype={
$1(d){},
$S:17}
B.cvi.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ivW(w.iceConnectionState)
x.cx=w
if($.htV())switch(w.a){case 0:x.cy=D.aTz
break
case 1:x.cy=D.aTA
break
case 3:x.cy=D.aTB
break
case 5:x.cy=D.aTx
break
case 6:x.cy=D.aTy
break
case 7:x.cy=D.abb
break
default:break}},
$S:111}
B.cvj.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ivX(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:111}
B.cvk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iGD(w.signalingState)},
$S:111}
B.cvl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iEL(w.connectionState)},
$S:111}
B.cvm.prototype={
$1(d){},
$S:111}
B.cvn.prototype={
$1(d){},
$S:17}
B.fGa.prototype={
$1(d){var x=y.F.a(new A.qK([],[]).o7(d.target.result,!1)),w=C.x2.q(x.objectStoreNames,"blobs")
if(!w)C.x_.GJ(x,"blobs")},
$S:168}
B.h5X.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xJ.fl(this.b)
$.eX.mK()
this.c.$1(d)},
$S:364}
B.h5Z.prototype={
$1(d){return this.a.$1(B.ilo(this.b,this.c))},
$S:33}
B.h5Y.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h5W.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h6b.prototype={
$1(d){var x=this
return B.hGr(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h6c.prototype={
$1(d){var x=this
return B.hGr(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fIR.prototype={
$1(d){var x=this
return B.cgN(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dgu.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dgr.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgN(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dgt.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgN(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dgs.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgN(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dgw.prototype={
$4(d,e,f,g){var x=null
return A.kf(A.A(A.a([A.aI(x,x,x,x,D.bZ8,x,x,x,new B.dgv(d),x,x,x,x,x,x),A.E(A.FX(D.Tk,!0,x,!1,C.a4A,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.Tk,x,g,C.api,0,e,f)},
$C:"$4",
$R:4,
$S:397}
B.dgv.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fKQ.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f2,y.m).w,t=this.a,s=t?C.iZ:C.c,r=A.m(28),q=A.p(v,D.bBr,C.f,v,v,D.bak,v,v,v,v,D.ap4,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c2B,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.C(C.Dh,A.w(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atV,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dU(C.dx,new B.fKO(d),v),1),C.ar,A.E(A.bH(D.h4I,v,new B.fKP(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HJ,v,v,v,v),v)},
$S:62}
B.fKO.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fKP.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fBI)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aF7(v,x))},
$S:0}
B.fLj.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f2,y.m).w,u=x.a,t=u?C.iZ:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bBh,C.f,w,w,D.bbQ,w,w,w,w,D.ap4,w,w,1/0),new A.C(C.Dh,A.w(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hpt(u,"Organization name",C.Ij,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.R,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hpt(u,"Access code",C.mA,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.R,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hpt(u,"Member password",C.E3,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.bx,A.bH(D.hdn,w,new B.fLi(r,q,p,d),A.bp(C.az,w,w,w,w,C.hu,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HJ,w,w,w,w),w)},
$S:62}
B.fLi.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fBN)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aIn(u,x,w))},
$S:0}
B.cgE.prototype={
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
p=C.a.Y(j,"http")?A.cG(j,0,null):s.b.aY(j)
u=4
x=7
return A.b(A.wa(p,null).d7(0,C.a1F),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cx(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cgK.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgL.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgM.prototype={
$1(d){return d.b},
$S:z+2}
B.cgG.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgH.prototype={
$1(d){return d.b},
$S:z+2}
B.cgF.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cgI.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgJ.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h69.prototype={
$1(d){return new B.WK(this.a,null)},
$S:z+11}
B.h6a.prototype={
$1(d){return new B.WO(this.a,this.b,this.c,null)},
$S:z+12}
B.e34.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e4d.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e4e.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e4f.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e4c(x,d))},
$S:2}
B.e4c.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4g.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4h.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e4i.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e4j.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4k.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e4l.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4o.prototype={
$3(d,e,f){return A.d3(A.dR(f,new A.r(0,(1-e)*14)),e)},
$S:92}
B.e4m.prototype={
$1(d){var x=this.a
return x.f?null:x.a0u()},
$S:2}
B.e4n.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mR(D.TC))s=C.vA
else s=C.a.Y(s,"video/")||d.mR(D.ns)?C.rt:D.ase
x=this.b.a
w=y.p
return new A.C(C.k_,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasH(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e35.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e36.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgO.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:101}
B.cgP.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:101}
B.h7a.prototype={
$2(d,e){return e===this.a},
$S:269}
B.fD7.prototype={
$1(d){return J.k(d)},
$S:15}
B.fJ2.prototype={
$1(d){var x=this.b
B.ijj(C.I7.ga8r(this.a)).bE(x.gCw(x),y.H)},
$S:128}
B.fJ3.prototype={
$1(d){return this.a.dh(0,null)},
$S:128}
B.fJ4.prototype={
$0(){return null},
$S:12}
B.ch2.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJ5.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
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
return new B.jU(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fNo.prototype={
$1(d){return d.al()},
$S:z+15}
B.fHe.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ch7.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.ns)},
$S:z+1}
B.hbs.prototype={
$1(d){return new B.a08(this.a,null)},
$S:z+16}
B.dgq.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fP()},
$S:7}
B.dgo.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.dgp.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4b.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2N()},
$S:10}
B.e3z.prototype={
$0(){var x=J.bJG(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3A.prototype={
$0(){var x=J.bJG(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e38.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e37(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHF(this.c)}},
$S:0}
B.e37.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e39.prototype={
$0(){var x=J.bJG(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3e.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e3d(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHF(this.c)}},
$S:0}
B.e3d.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4_.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e40.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e3w.prototype={
$1(d){return new B.WL(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e3t.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J7(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WP(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uw(),$async$$0)
case 5:s=J.a1(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2Y(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3c.prototype={
$1(d){this.a.aed(d,"No files selected.","Added")},
$S:364}
B.e3E.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e3D(),A.U(x).k("O<1,n>")))},
$S:0}
B.e3D.prototype={
$1(d){return d.a},
$S:z+2}
B.e3i.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y2.cq().d32(C.a3w,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.k_(o,0,null)}u=2
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
return A.b(B.asa(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cx(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uw(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e3X.prototype={
$1(d){return new B.R9(this.a.a.c,this.b,null)},
$S:z+7}
B.e3Y.prototype={
$1(d){return new B.a0a(this.a.a.c,this.b,null)},
$S:z+18}
B.e3Z.prototype={
$1(d){return new B.a07(this.a.a.c,this.b,null)},
$S:z+19}
B.e3u.prototype={
$1(d){return new B.R9(this.a.a.c,this.b,null)},
$S:z+7}
B.e3v.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e3Q.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J7(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a95(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cwc(),$async$$0)
case 5:x=6
return A.b(p.uw(),$async$$0)
case 6:r=A.U(t).k("O<1,n>")
r=new A.O(new A.O(t,new B.e3M(p),r),new B.e3N(),r.k("O<aj.E,n>")).c0(0,new B.e3O())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).c9(A.e6(new B.e3P(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pS(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WV(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3M.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e3L(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e3L.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3N.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e3O.prototype={
$1(d){return d.length!==0},
$S:3}
B.e3P.prototype={
$1(d){var x=this.a
return new B.a0c(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e3R.prototype={
$1(d){return d.a},
$S:z+2}
B.e3S.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3K.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kL,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasH(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mR(D.ns)?C.tY:C.of
p=!x||p.mR(D.ns)?"Play video":"View"
return new A.bQ(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lv,v,v,C.m),C.bm,A.bm(!0,new A.C(C.Dd,A.w(A.a([q,o,t,C.aB,B.a0b(!1,u,!1,w,p,new B.e3F(d),v),B.a0b(!1,u,!1,C.jK,"Share via QR",new B.e3G(d),"Letters/numbers QR code"),B.a0b(!1,u,!1,D.a4F,"Send to their Code",new B.e3H(d),"Enter someone else's personal code"),B.a0b(!1,u,!1,C.hP,"Download / save",new B.e3I(d),v),C.aj,B.a0b(!1,u,!0,C.eq,"Delete",new B.e3J(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:716}
B.e3F.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e3G.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e3H.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e3I.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e3J.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e3f.prototype={
$1(d){return d.a},
$S:z+2}
B.e3g.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3h.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a97(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HE(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pS(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3b.prototype={
$1(d){var x=this.a
x.ux(new B.e3a(x,d,this.b),"Preparing\u2026")},
$S:364}
B.e3a.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WP(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cx(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bIA(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3x.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e3y.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aQ(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hk0(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3r.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HC(new B.e3n(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e3o(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e3p(s))
case 5:x=8
return A.b(r.b.ic(0,C.HE,new B.e3q()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.iq("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uw(),$async$$0)
case 9:s.iq("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3n.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3k(x,d,e))},
$S:201}
B.e3k.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3o.prototype={
$1(d){return new B.aen(this.a.a,null)},
$S:z+21}
B.e3p.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e3q.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e3s.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JC(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8W(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b5f(B.JC(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asa(new B.e3l(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cx(r)){if(B.hk_(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uw(),$async$$0)
case 10:o=J.cJ(r)
p=o.eT(r,new B.e3m()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3l.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3j(x,d,e))},
$S:201}
B.e3j.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3m.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.ns)},
$S:z+1}
B.e3C.prototype={
$1(d){return new B.a0d(this.a.a.c,null)},
$S:z+23}
B.e3B.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2U(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3W.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bQ(new A.o(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lv,x,x,C.m),C.bm,A.bm(!0,new A.C(C.Dd,A.w(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kL,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a0b(!0,w,!1,C.mA,"My Code",new B.e3T(d),"Your personal code & QR \u2014 others send docs to you"),B.a0b(!1,w,!1,D.a4F,"Send to their Code",new B.e3U(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0b(!1,w,!1,W.Ah,"Import backup",new B.e3V(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:716}
B.e3T.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e3U.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bIK()},
$S:0}
B.e3V.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e48.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JM(D.Tk,x,C.a4A,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gG(D.Tk).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:682}
B.e46.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e47.prototype={
$0(){this.a.akQ()
return null},
$S:0}
B.e49.prototype={
$3(d,e,f){return A.d3(A.dR(f,new A.r(0,(1-e)*10)),e)},
$S:92}
B.e4a.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aep(e,w,v,this.b,x.e,x.ceG(w),new B.e42(x,w),new B.e43(x,v,w),new B.e44(x,w),new B.e45(x,w),null)},
$S:z+24}
B.e42.prototype={
$0(){this.a.ai3(this.b)
return null},
$S:0}
B.e43.prototype={
$0(){var x=this.a
return x.l(new B.e41(x,this.b,this.c))},
$S:0}
B.e41.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e44.prototype={
$0(){this.a.Pf(this.b)
return null},
$S:0}
B.e45.prototype={
$0(){this.a.akD(this.b)
return null},
$S:0}
B.dgm.prototype={
$3(d,e,f){return A.d3(A.dR(f,new A.r(0,(1-e)*18)),e)},
$S:92}
B.dgn.prototype={
$3(d,e,f){return A.e7(C.z,f,e,null,null)},
$S:110}
B.dgK.prototype={
$3(d,e,f){return A.d3(A.dR(f,new A.r(0,(1-e)*14)),e)},
$S:92}
B.dgJ.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.dgG.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dgH.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dgI.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dgE.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h7(w,C.z,x,new B.dgC(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dgD(this.a))
return C.bK},
$S:150}
B.dgC.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgA(this.a))
return C.bK},
$S:205}
B.dgA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgx(x))},
$S:7}
B.dgx.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgD.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgz(x))},
$S:7}
B.dgz.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgF.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgB(this.a))
return C.bK},
$S:205}
B.dgB.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgy(x))},
$S:7}
B.dgy.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgj.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgi(x,d))},
$S:1817}
B.dgi.prototype={
$0(){return this.a.f=this.b===C.wa},
$S:0}
B.dgk.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgh(x,d))},
$S:7}
B.dgh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dgl.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgg(x,d))},
$S:7}
B.dgg.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dgc.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dgd.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dge.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dgf.prototype={
$1(d){return this.a.d.O9(0,A.ds(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dgX.prototype={
$0(){var x=this.a.a
return B.t7(x.c,x.d)},
$S:1818}
B.dgY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dgZ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dh_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dh0.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dh1.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dh3.prototype={
$0(){var x=this.a
x.l(new B.dh2(x))},
$S:0}
B.dh2.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qv(0)},
$S:0}
B.dgT.prototype={
$1(d){return this.a.Sc(this.b)},
$S:10}
B.dgU.prototype={
$1(d){return this.a.Sb(this.b)},
$S:10}
B.dgL.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dgM.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dgN.prototype={
$1(d){return D.hPf},
$S:z+25}
B.dgS.prototype={
$2(d,e){if(d)B.WV()},
$S:130}
B.dgO.prototype={
$0(){return this.a.ac0(this.b)},
$S:0}
B.dgP.prototype={
$0(){return this.a.abY(this.b)},
$S:0}
B.dgQ.prototype={
$0(){return this.a.ags(this.b)},
$S:0}
B.dgR.prototype={
$0(){return this.a.a3B(this.b)},
$S:0}
B.dgb.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dgW.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qy(),$async$$0)
case 2:u.l(new B.dgV(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dgV.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ch9.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.ns)},
$S:z+1}
B.cha.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ch8.prototype={
$2(d,e){return this.bp8(d,e)},
bp8(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WW(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1819}
B.fN0.prototype={
$1(d){if(d===D.aba&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fN1.prototype={
$0(){},
$S:12}
B.fNC.prototype={
bqM(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fA8(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hBt(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqM(d,e)},
$S:549}
B.fNB.prototype={
$1(d){var x=this
d.b=new B.fNA(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fNA.prototype={
$1(d){return this.bqL(d)},
bqL(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2V(n,m),$async$$1)
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
return A.b(B.fA8(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a6(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
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
return A.b(B.a94(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aCs.prototype,"gcmD","RM",0)
x(v,"gcny","Kl",0)
x(v,"gcn2","yZ",0)
x(v=B.aGv.prototype,"gceA","agq",0)
x(v,"gceB","a0t",0)
x(v,"gcCS","akk",0)
x(v=B.aGy.prototype,"gceC","a0u",0)
x(v,"gcCT","a3Z",0)
x(B.aGw.prototype,"gceD","agr",0)
x(B.aCr.prototype,"gceI","ceJ",4)
x(v=B.aGx.prototype,"gcn3","a1P",0)
x(v,"gcBo","cBp",4)
x(v,"gb6m","aC4",0)
x(v,"gcEn","akK",0)
x(v,"gbVl","Zc",0)
x(v,"gceH","Fb",0)
x(B.aCt.prototype,"gbab","a3Y",0)
x(B.aCq.prototype,"gceK","a0v",0)
x(v=B.aCw.prototype,"gb52","clb",4)
x(v,"gceE","agu",0)
x(v=B.aCu.prototype,"gcAh","a3H",0)
x(v,"gb2R","agt",0)
w(B.aCp.prototype,"gaAs","aAt",8)
x(v=B.aCv.prototype,"gcpT","aix",0)
x(v,"gbUP","acP",0)
w(v,"gaAs","aAt",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aG,[B.cve,B.abw,B.awK,B.aF7,B.aIn,B.jU,B.ae5,B.bAf,B.Ga,B.Za])
w(B.cvf,B.cve)
w(B.b85,B.abw)
x(A.hq,[B.cva,B.cvb,B.cvc,B.cv9,B.cvd,B.cvg,B.cvh,B.cvi,B.cvj,B.cvk,B.cvl,B.cvm,B.cvn,B.fGa,B.h5X,B.h5Z,B.h5Y,B.h6b,B.h6c,B.fIR,B.dgr,B.dgt,B.dgs,B.dgw,B.fKQ,B.fLj,B.cgE,B.cgL,B.cgM,B.cgH,B.cgF,B.cgI,B.cgJ,B.h69,B.h6a,B.e4f,B.e4o,B.e4m,B.e4n,B.fD7,B.fJ2,B.fJ3,B.ch2,B.fJ5,B.fNo,B.fHe,B.fHf,B.ch7,B.hbs,B.dgq,B.dgo,B.e4b,B.e37,B.e3d,B.e3w,B.e3c,B.e3D,B.e3X,B.e3Y,B.e3Z,B.e3u,B.e3M,B.e3L,B.e3N,B.e3O,B.e3P,B.e3R,B.e3S,B.e3K,B.e3f,B.e3g,B.e3b,B.e3x,B.e3o,B.e3m,B.e3C,B.e3W,B.e48,B.e49,B.dgm,B.dgn,B.dgK,B.dgJ,B.dgE,B.dgC,B.dgA,B.dgD,B.dgF,B.dgB,B.dgj,B.dgk,B.dgl,B.dgf,B.dgT,B.dgU,B.dgN,B.ch9,B.cha,B.fN0,B.fNB,B.fNA])
w(B.b86,B.awK)
x(A.iV,[B.h5W,B.dgu,B.dgv,B.fKO,B.fKP,B.fLi,B.e34,B.e4d,B.e4e,B.e4c,B.e4g,B.e4h,B.e4i,B.e4j,B.e4k,B.e4l,B.e35,B.e36,B.fJ4,B.dgp,B.e3z,B.e3A,B.e38,B.e39,B.e3e,B.e4_,B.e40,B.e3t,B.e3E,B.e3i,B.e3v,B.e3Q,B.e3F,B.e3G,B.e3H,B.e3I,B.e3J,B.e3h,B.e3a,B.e3y,B.e3r,B.e3k,B.e3p,B.e3q,B.e3s,B.e3j,B.e3B,B.e3T,B.e3U,B.e3V,B.e46,B.e47,B.e42,B.e43,B.e41,B.e44,B.e45,B.dgG,B.dgH,B.dgI,B.dgx,B.dgz,B.dgy,B.dgi,B.dgh,B.dgg,B.dgc,B.dgd,B.dge,B.dgX,B.dgY,B.dgZ,B.dh_,B.dh0,B.dh1,B.dh3,B.dh2,B.dgL,B.dgM,B.dgO,B.dgP,B.dgQ,B.dgR,B.dgb,B.dgW,B.dgV,B.fN1])
x(A.lk,[B.aeo,B.OK,B.abx,B.PT,B.Z9,B.PS,B.Gb])
x(A.af,[B.a09,B.WK,B.WO,B.WL,B.a08,B.WM,B.a0a,B.a07,B.R9,B.a0c,B.a06,B.a0d])
x(A.ah,[B.aCs,B.aGv,B.aGy,B.aGw,B.aCr,B.aGx,B.aCt,B.aCq,B.aCw,B.aCu,B.aCp,B.aCv])
x(A.aw,[B.aeS,B.aCo,B.bhH,B.aep,B.aen,B.bhI])
x(A.iW,[B.cgK,B.cgG,B.cgO,B.cgP,B.h7a,B.e3n,B.e3l,B.e4a,B.dgS,B.ch8,B.fNC])
x(A.jn,[B.bnd,B.bzS])})()
A.jd(b.typeUniverse,JSON.parse('{"b85":{"abw":[]},"b86":{"awK":[]},"a09":{"af":[],"x":[]},"aCs":{"ah":["a09"]},"aeS":{"aw":[],"x":[]},"WK":{"af":[],"x":[]},"WO":{"af":[],"x":[]},"aGv":{"ah":["WK"]},"aGy":{"ah":["WO"]},"bnd":{"jn":[]},"WL":{"af":[],"x":[]},"aGw":{"ah":["WL"]},"a08":{"af":[],"x":[]},"WM":{"af":[],"x":[]},"aep":{"aw":[],"x":[]},"a0a":{"af":[],"x":[]},"a07":{"af":[],"x":[]},"R9":{"af":[],"x":[]},"a0c":{"af":[],"x":[]},"aen":{"aw":[],"x":[]},"a06":{"af":[],"x":[]},"a0d":{"af":[],"x":[]},"aCr":{"ah":["a08"]},"bzS":{"jn":[]},"aGx":{"ah":["WM"]},"aCo":{"aw":[],"x":[]},"bhH":{"aw":[],"x":[]},"aCt":{"ah":["a0a"]},"aCq":{"ah":["a07"]},"aCw":{"ah":["R9"]},"aCu":{"ah":["a0c"]},"aCp":{"ah":["a06"]},"aCv":{"ah":["a0d"]},"bhI":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mU"),k:x("N5()"),o:x("bo<n,n>"),F:x("rJ"),g:x("az<jU?>"),x:x("az<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bl>"),Y:x("N<a9<n,P>>"),t:x("N<a9<n,@>>"),r:x("N<jU>"),w:x("N<+file,name(md,n)>"),u:x("N<d4>"),s:x("N<n>"),E:x("N<jn>"),a:x("N<dF>"),p:x("N<x>"),Z:x("N<G>"),G:x("bl"),A:x("cB<ah<af>>"),n:x("ai<jU>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bw<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("im"),e:x("iKI"),af:x("Fm"),U:x("jU"),b:x("cp"),C:x("aG"),aK:x("wW"),ab:x("Ga"),br:x("awK"),v:x("Za"),N:x("n"),X:x("bq<H>"),Q:x("mp"),D:x("dF"),aw:x("bg<n>"),cd:x("X<a9<n,@>>"),c7:x("x"),ch:x("c9<ai<jU>>"),aW:x("c9<dF?>"),aY:x("c9<~>"),cx:x("aeo"),b1:x("bn<ai<jU>>"),cf:x("bn<dF?>"),d4:x("bn<~>"),c4:x("aF7"),bG:x("aIn"),q:x("l2"),B:x("q5<Ga>"),c6:x("q5<abx>"),y:x("P"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bl?"),_:x("ai<jU>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jU?"),R:x("aG?"),c:x("Za?"),d:x("+answerQr,transfer(n,az<ai<jU>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,OK,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dF?"),cm:x("ae5?"),bk:x("aF7?"),ag:x("aIn?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8H=new A.ax(C.az,2,C.r,-1)
D.ccz=new A.a7(C.a5,C.a9,C.w,C.a6D,null,null)
D.bak=new A.o(null,null,null,C.mZ,null,D.ccz,C.m)
D.bbQ=new A.o(null,null,null,C.mZ,null,E.J4,C.m)
D.ahN=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aji=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akk=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.am7=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h_i=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hel=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.drK=x([D.h_i,C.aj,D.hel],y.p)
D.bB7=new A.fu(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.drK,null)
D.hiU=new A.D("Create your organization",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h3U=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.dK6=x([D.hiU,C.aj,D.h3U],y.p)
D.bBh=new A.fu(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dK6,null)
D.hf_=new A.D("Team Member sign-in",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h7U=new A.D("Enter the access code and password from your organization.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.dHD=x([D.hf_,C.aj,D.h7U],y.p)
D.bBr=new A.fu(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dHD,null)
D.bHJ=new A.R(16,10,16,28)
D.bJ6=new A.R(20,0,20,16)
D.bJE=new A.R(20,8,20,16)
D.ap4=new A.R(24,22,24,20)
D.a4F=new A.a_(63394,"MaterialIcons",!1)
D.ase=new A.a_(63515,"MaterialIcons",!1)
D.bX2=new A.a_(983813,"MaterialIcons",!1)
D.bU9=new A.a_(62867,"MaterialIcons",!1)
D.bY2=new A.ae(D.bU9,44,C.c,null,null,null)
D.bZ8=new A.ae(C.km,null,C.ab,null,null,null)
D.c_x=new A.ae(C.jL,18,null,null,null,null)
D.c1o=new A.ae(D.a4F,26,C.c,null,null,null)
D.c2_=new A.ae(C.DU,null,null,null,null,null)
D.c2B=new A.ae(C.E0,null,null,null,null,null)
D.c3P=new A.ae(A_.a4P,null,null,null,null,null)
D.c4a=new A.ae(C.i3,16,null,null,null,null)
D.c7T=new A.ae(C.tX,16,null,null,null,null)
D.bYk=new A.ae(C.mA,null,null,null,null,null)
D.c8L=new A.ef(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYk,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c38=new A.ae(C.Ij,null,null,null,null,null)
D.c8Q=new A.ef(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYG=new A.ae(C.E3,null,null,null,null,null)
D.c90=new A.ef(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cZ8=x([C.fz,C.b5,C.az],y.O)
D.cew=new A.a7(C.ax,C.aD,C.w,D.cZ8,null,null)
D.cYu=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Tk=x([C.fz,C.az],y.O)
D.TC=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ns=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dBm=x([C.n9,C.az],y.O)
D.eA9={iceServers:0}
D.aNZ={urls:0}
D.dO2=new A.bo(D.aNZ,["stun:stun.l.google.com:19302"],y.o)
D.dO1=new A.bo(D.aNZ,["stun:stun1.l.google.com:19302"],y.o)
D.dge=x([D.dO2,D.dO1],A.as("N<a9<n,n>>"))
D.dN8=new A.bo(D.eA9,[D.dge],A.as("bo<n,@>"))
D.Kb=new B.OK(0,"lanDirect")
D.V0=new B.OK(1,"cloudStash")
D.e3b=new B.OK(2,"inlineInstant")
D.V1=new B.OK(3,"webrtcLink")
D.B2=new B.OK(4,"videoCloud")
D.hek=new A.D("Receive file",null,C.nD,null,null,null,null,null,null,null,null,null)
D.cO1=x([E.au3,C.aa,D.hek],y.p)
D.fsb=new A.c0(C.aK,C.bc,C.h,C.l,null,C.p,null,0,D.cO1,null)
D.eHC=new A.C(C.cq,D.fsb,null)
D.fQx=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.Jz,null,null,null)
D.h_V=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fQx,null,C.K,null,null,null,null,null,null,null)
D.eGM=new A.C(C.zD,D.h_V,null)
D.bgq=new A.cn(C.z,null,null,D.eGM,null)
D.eNV=new A.cR(0,null,0,28,null,null,D.bgq,null)
D.eOe=new B.abx(0,"RTCDataChannelConnecting")
D.aTt=new B.abx(1,"RTCDataChannelOpen")
D.aTu=new B.abx(3,"RTCDataChannelClosed")
D.eOf=new B.Gb(0,"RTCIceConnectionStateNew")
D.eOg=new B.Gb(1,"RTCIceConnectionStateChecking")
D.eOh=new B.Gb(2,"RTCIceConnectionStateCompleted")
D.eOi=new B.Gb(3,"RTCIceConnectionStateConnected")
D.eOj=new B.Gb(4,"RTCIceConnectionStateCount")
D.eOk=new B.Gb(5,"RTCIceConnectionStateFailed")
D.eOl=new B.Gb(6,"RTCIceConnectionStateDisconnected")
D.aTv=new B.Gb(7,"RTCIceConnectionStateClosed")
D.aTw=new B.Z9(0,"RTCIceGatheringStateNew")
D.eOm=new B.Z9(1,"RTCIceGatheringStateGathering")
D.aba=new B.Z9(2,"RTCIceGatheringStateComplete")
D.abb=new B.PS(0,"RTCPeerConnectionStateClosed")
D.aTx=new B.PS(1,"RTCPeerConnectionStateFailed")
D.aTy=new B.PS(2,"RTCPeerConnectionStateDisconnected")
D.aTz=new B.PS(3,"RTCPeerConnectionStateNew")
D.aTA=new B.PS(4,"RTCPeerConnectionStateConnecting")
D.aTB=new B.PS(5,"RTCPeerConnectionStateConnected")
D.eOn=new B.PT(0,"RTCSignalingStateStable")
D.eOo=new B.PT(1,"RTCSignalingStateHaveLocalOffer")
D.eOp=new B.PT(2,"RTCSignalingStateHaveRemoteOffer")
D.eOq=new B.PT(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eOr=new B.PT(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTC=new B.PT(5,"RTCSignalingStateClosed")
D.fxl=new A.av(160,48)
D.bhG=new A.fo(2,null,null,null,null,C.az,null,null,null,null)
D.fyU=new A.a4(16,16,D.bhG,null)
D.h3e=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fAn=new A.b3(D.h3e,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.haY=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new A.b3(D.haY,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjY=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.b3(D.hjY,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h2O=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fAY=new A.b3(D.h2O,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hfb=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWP=new A.b3(D.hfb,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgF=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fBr=new A.b3(D.hgF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hls=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBI=new A.b3(D.hls,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjn=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBN=new A.b3(D.hjn,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkD=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fCA=new A.b3(D.hkD,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1o=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fD7=new A.b3(D.h1o,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hcT=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new A.b3(D.hcT,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5z=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fDZ=new A.b3(D.h5z,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlx=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fE2=new A.b3(D.hlx,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1E=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fE8=new A.b3(D.h1E,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h0h=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fEn=new A.b3(D.h0h,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fXW=new A.D("NGMY DOC SHARE",null,C.aYe,null,null,null,null,null,null,null,null,null)
D.fZn=new A.D("Show this to sender",null,C.iX,null,null,null,null,null,null,null,null,null)
D.h_q=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h4k=new A.D("Organization settings",null,C.cJ,null,null,null,null,null,null,null,null,null)
D.h4I=new A.D("Sign in",null,C.ch,null,null,null,null,null,null,null,null,null)
D.h5K=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h6h=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h9a=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hc0=new A.D("Send to their Doc Share",null,C.mS,null,null,null,null,null,null,null,null,null)
D.hck=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcF=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hdg=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hdn=new A.D("Create portal",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hdM=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hha=new A.D("Share files & videos\nwith a scan.",null,C.aYh,null,null,null,null,null,null,null,null,null)
D.hhu=new A.D("Add files",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hPf=new B.a06(null)
D.aez=new B.aeo(0,"docShare")
D.aeA=new B.aeo(1,"gate")
D.Y8=new B.aeo(2,"gateNoIndividual")})();(function staticFields(){$.aRe=null
$.fxF=function(){var x=y.N
return A.S(x,x)}()
$.Hq=A.S(y.N,y.D)
$.aiy=A.S(y.N,A.as("md"))
$.SB=A.S(y.N,y.D)
$.fyl=A.S(y.N,A.as("ae5"))
$.ch1=A.S(y.S,A.as("bAf"))
$.hBs=1
$.irx=null
$.irw=null
$.iiC=null
$.hpF=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iLd","hUz",()=>new B.cvf())
x($,"iJ6","htV",()=>C.a.q(A.by(A.by(A.by(A.HW(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["S9VGjEfvu74t/jLJcw4JCQMZBP8="]=a.current})($__dart_deferred_initializers__);