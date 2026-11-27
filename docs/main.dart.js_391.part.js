((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cvj:function cvj(){},
icg(d){var x=null,w=new B.b8b(d,D.eOi,new A.q5(x,x,y.c6),new A.q5(x,x,y.B))
w.bEB(d)
return w},
b8b:function b8b(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cve:function cve(d){this.a=d},
cvf:function cvf(d){this.a=d},
cvg:function cvg(d){this.a=d},
cvd:function cvd(d){this.a=d},
cvh:function cvh(d){this.a=d},
ich(d,e){var x=y.N
x=new B.b8c(d,e,A.S(x,y.e),A.S(x,y.z))
x.bEC(d,e)
return x},
b8c:function b8c(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cvk:function cvk(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvn:function cvn(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvp:function cvp(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvr:function cvr(d){this.a=d},
hpu(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bd("IndexedDB not available"))
return C.xE.Hl(x,"ngmy_doc_share_v1",new B.fGm(),1)},
ij7(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eA(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w_(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cK.aK(d)
return x}catch(w){return v}return v},
SR(d,e){return B.iyZ(d,e)},
iyZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRj
x=7
return A.b(o==null?$.aRj=B.hpu():o,$async$SR)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mA(s,"blobs","readwrite")
C.iU.ml(J.mz(q,"blobs"),r,d)
x=8
return A.b(J.oT(q),$async$SR)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$SR,w)},
SQ(d){return B.iyY(d)},
iyY(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRj
x=7
return A.b(o==null?$.aRj=B.hpu():o,$async$SQ)
case 7:s=f
r=J.mA(s,"blobs","readonly")
x=8
return A.b(C.iU.y3(J.mz(r,"blobs"),d),$async$SQ)
case 8:q=f
x=9
return A.b(J.oT(r),$async$SQ)
case 9:o=B.ij7(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$SQ,w)},
ajd(d){return B.iyX(d)},
iyX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRj
x=7
return A.b(p==null?$.aRj=B.hpu():p,$async$ajd)
case 7:s=f
r=J.mA(s,"blobs","readwrite")
C.iU.GR(J.mz(r,"blobs"),d)
x=8
return A.b(J.oT(r),$async$ajd)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ajd,w)},
fGm:function fGm(){},
ilF(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btf(w,v))}return u},
hRI(d,e){var x,w={},v=A.b_7("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h68(w,v,e)
C.xG.x3(v,"change",new B.h6a(w,v,!1))
C.xG.x3(v,"cancel",new B.h69(w))
$.eX.mN()
v.click()
A.bO(C.anc,new B.h67(w),y.H)},
h68:function h68(d,e,f){this.a=d
this.b=e
this.c=f},
h6a:function h6a(d,e,f){this.a=d
this.b=e
this.c=f},
h69:function h69(d){this.a=d},
h67:function h67(d){this.a=d},
E2(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E2=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVi()?3:4
break
case 3:x=5
return A.b(B.hMa(e,d,s,!0,!1,f,g,h,!1,i),$async$E2)
case 5:x=1
break
case 4:x=6
return A.b(B.Ss(d,s,f,g,h,i),$async$E2)
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
return A.b(B.JF(s,d),$async$E2)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fBD(s,d),$async$E2)
case 14:x=12
return A.b(r.hMa(q,p,o,n,m,l,k,j,a1,i),$async$E2)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).ca(A.e7(new B.h6n(s,i,d,f,g,h),!1,null,y.H)),$async$E2)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).ca(A.e7(new B.h6o(s,i,d,f,g,h),!1,null,y.H)),$async$E2)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E2,w)},
Ss(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Ss=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2T(e),$async$Ss)
case 3:u=k
x=4
return A.b(B.as1(d,e,!1),$async$Ss)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JF(e,d),$async$Ss)
case 7:if(k){v=D.aeB
x=1
break}x=8
return A.b(B.WO(e),$async$Ss)
case 8:v=t?D.Y5:D.aeC
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2R(d,e)){v=D.aeB
x=1
break}x=11
return A.b(B.WO(e),$async$Ss)
case 11:v=t?D.Y5:D.aeC
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hk9(d,e)){v=D.aeB
x=1
break}x=14
return A.b(B.WO(e),$async$Ss)
case 14:v=D.Y5
x=1
break
case 13:v=t?D.Y5:D.aeC
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ss,w)},
fBD(d,e){var x=0,w=A.j(y.y),v
var $async$fBD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2R(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2T(d),$async$fBD)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBD,w)},
hMa(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).ca(A.e7(new B.fJ2(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hGE(d,e,f,g,h,i,j){return new B.a0a(e,j,d,g,h,i,f,null)},
fKZ(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fKZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fL1(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fKZ)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKZ,w)},
fLt(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fLt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fLv(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fLt)
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
return A.i($async$fLt,w)},
hpH(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fYH(d,e){var x=0,w=A.j(y.H),v
var $async$fYH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WO(e),$async$fYH)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e4()
case 1:return A.h(v,w)}})
return A.i($async$fYH,w)},
h6n:function h6n(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h6o:function h6o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aep:function aep(d,e){this.a=d
this.b=e},
fJ2:function fJ2(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0a:function a0a(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCs:function aCs(){this.c=this.a=this.d=null},
dgy:function dgy(d,e){this.a=d
this.b=e},
dgv:function dgv(d){this.a=d},
dgx:function dgx(d){this.a=d},
dgw:function dgw(d){this.a=d},
dgA:function dgA(){},
dgz:function dgz(d){this.a=d},
aeT:function aeT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF7:function aF7(d,e){this.a=d
this.b=e},
aIo:function aIo(d,e,f){this.a=d
this.b=e
this.c=f},
fL1:function fL1(d,e,f){this.a=d
this.b=e
this.c=f},
fL_:function fL_(d){this.a=d},
fL0:function fL0(d,e,f){this.a=d
this.b=e
this.c=f},
fLv:function fLv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLu:function fLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgH(d,e,f,g,h){return B.i6Z(d,e,f,g,h)},
i6Z(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cgH=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dR(d,new B.cgI(s,e,h,g,f,q),y.g),y.l),$async$cgH)
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
return A.i($async$cgH,w)},
b2O(d,e,f,g,h){return B.i7_(d,e,f,g,h)},
i7_(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2O=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axy("GET",d)
o=A.bJa()
if(o==null)o=new A.Ih(A.a([],y.W))
x=7
return A.b(o.fc(0,s).d7(0,C.HD),$async$b2O)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dp(),$async$b2O)
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
return A.i($async$b2O,w)},
b2N(d){return B.i6X(d)},
i6X(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wb(d,null).d7(0,C.oU),$async$b2N)
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
return A.i($async$b2N,w)},
cgG(d){return B.i6Y(d)},
i6Y(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cgG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wb(d,null).d7(0,C.rb),$async$cgG)
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
return A.i($async$cgG,w)},
cgI:function cgI(d,e,f,g,h,i){var _=this
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
JD(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i74(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JD(C.a.aV(t,u.length))}return null},
i75(d){var x=B.JD(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i70(){var x,w=$.oP(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8W(d){return B.i71(d)},
i71(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.fb(d,null,!1,C.bN),$async$a8W)
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
return A.i($async$a8W,w)},
a8X(d,e){return B.i72(d,e)},
i72(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8X=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i0(d,e,!1,!1,C.cY,null),$async$a8X)
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
return A.i($async$a8X,w)},
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
r=B.JD(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8Y(r),$async$Cw)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8W("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cw)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JD(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cw)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i70()
x=14
return A.b(B.a8Y(m),$async$Cw)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8X("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
case 15:k=f
x=16
return A.b(B.a8X("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
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
a8Y(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JD(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8W("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8Y)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Y,w)},
a8Z(d,e,f,g){return B.i76(d,e,f,g)},
i76(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8Z=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JD(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8Y(r),$async$a8Z)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cgO())>1048576||g.aR(d,new B.cgP())){v=B.FF(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a99("myCode",d,a0),$async$a8Z)
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
v=B.FF(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2W(u,g.gJ(d),a0),$async$a8Z)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oP().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dR(d,new B.cgQ(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2P(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8Z)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Z,w)},
FF(d,e,f,g,h){return B.i73(d,e,f,g,h)},
i73(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FF=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FF)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cJ(a6)
k=l.cD(a6,0,new B.cgK())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oP().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cV.aw(99999)
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
a1=B.JH(a9,q)
a0=new A.Lw(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FF)
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
return A.b(new A.acB(a1.a,a4,"media",a1.d,a2).xZ(m,n,new A.EV(!0,q.c)),$async$FF)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FF)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aU3(r),$async$FF)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dR(a6,new B.cgL(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2P(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FF)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aU3(r),$async$FF)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FF,w)},
b2P(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8W(t),$async$b2P)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cgJ(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8X(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2P,w)},
OL(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OL=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8W("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OL)
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
return A.b(B.b2Q(k,a0),$async$OL)
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
return A.b(B.b2V(h),$async$OL)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WV(g,a0),$async$OL)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cgM(),q),n)
d=A.B(new A.X(r,new B.cgN(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cV(d,0,A.dz(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8X("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OL)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OL,w)},
b2Q(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2Q=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iDb(k,j)
C.d.u(s,i)
x=5
return A.b(B.E0(l,m,"Received via My Code",t,e,i),$async$b2Q)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aU3(s),$async$b2Q)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2Q,w)},
cgO:function cgO(){},
cgP:function cgP(){},
cgQ:function cgQ(){},
cgK:function cgK(){},
cgL:function cgL(){},
cgJ:function cgJ(){},
cgM:function cgM(){},
cgN:function cgN(){},
h6k(d,e){var x=0,w=A.j(y.H)
var $async$h6k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).ca(A.e7(new B.h6l(e),!1,null,y.H)),$async$h6k)
case 2:return A.h(null,w)}})
return A.i($async$h6k,w)},
bIE(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bIE=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cx(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).ca(A.e7(new B.h6m(g,e,f),!1,null,y.y)),$async$bIE)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bIE,w)},
h6l:function h6l(d){this.a=d},
h6m:function h6m(d,e,f){this.a=d
this.b=e
this.c=f},
WL:function WL(d,e){this.c=d
this.a=e},
aGw:function aGw(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e3d:function e3d(d,e){this.a=d
this.b=e},
WP:function WP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGz:function aGz(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e4m:function e4m(d){this.a=d},
e4n:function e4n(d){this.a=d},
e4o:function e4o(d){this.a=d},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4p:function e4p(d){this.a=d},
e4q:function e4q(d){this.a=d},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4s:function e4s(d,e){this.a=d
this.b=e},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4u:function e4u(d){this.a=d},
e4x:function e4x(){},
e4v:function e4v(d){this.a=d},
e4w:function e4w(d,e){this.a=d
this.b=e},
bni:function bni(){},
WM:function WM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGx:function aGx(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e3e:function e3e(d){this.a=d},
e3f:function e3f(d){this.a=d},
hka(d){var x=d.i9
if(x>=0)return C.o.M(x)
return 10},
i78(d){var x=d.l4
if(x>=0)return x
return 4.99},
i77(d){var x=d.lN,w=y.N
w=x.iY(x,new B.cgS(),w,w)
return w},
hBB(d){var x=d.kG,w=y.N
w=x.iY(x,new B.cgT(),w,w)
return w},
b2T(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2T)
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
return A.i($async$b2T,w)},
a90(d,e){var x=0,w=A.j(y.H),v,u
var $async$a90=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a90)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a90)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a90,w)},
WO(d){var x=0,w=A.j(y.H),v,u
var $async$WO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WO)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WO,w)},
hk9(d,e){var x,w,v
if(B.i78(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i77(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.c9(new A.W(Date.now(),0,!1))},
b2R(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hBB(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.c9(new A.W(Date.now(),0,!1))},
hBC(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hBB(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.c9(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.du(f,0,0,0,0,0).a).aa().ag())
d.kG=w},
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
break}u=B.hka(d)
if(u<=0){v=!1
x=1
break}if(B.hk9(d,e)){v=!1
x=1
break}x=3
return A.b(B.as2(e),$async$as1)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as1,w)},
b2S(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JF(e,d),$async$b2S)
case 3:if(g){v=-1
x=1
break}u=B.hka(d)
if(u<=0){v=-1
x=1
break}if(B.hk9(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.as2(e),$async$b2S)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2S,w)},
cgV(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JF(e,d),$async$cgV)
case 3:if(h){v=!1
x=1
break}v=B.as1(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgV,w)},
cgU(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgU=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgV(d,u,i.gVi()),$async$cgU)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgU,w)},
a9_(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a9_=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gVi()){v=!0
x=1
break}if(B.b2R(d,u)){v=!0
x=1
break}x=5
return A.b(A.lW(u,C.Vn),$async$a9_)
case 5:x=k?3:4
break
case 3:B.hBC(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a9_)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lw(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Vn,"Doc Share for Organizations"),$async$a9_)
case 7:if(!k){v=!1
x=1
break}B.hBC(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a9_)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9_,w)},
cgS:function cgS(){},
cgT:function cgT(){},
h7k(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h7k=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h7k)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fxR.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i2([r],e.c))
s.toString
$.fxR.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7k,w)},
iFp(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fxR.br($.fxR,new B.h7m(d))},
h7m:function h7m(d){this.a=d},
fzw(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fzw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i2([d],f))
s.toString
u=A.nj(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jC,null,y.H),$async$fzw)
case 3:C.C0.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mN()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzw,w)},
ai9(d,e,f){var x=0,w=A.j(y.H),v
var $async$ai9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fyx.n(0,d,new B.ae6(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ai9)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ai9)
case 2:return A.h(null,w)}})
return A.i($async$ai9,w)},
ai3(d){return B.inz(d)},
inz(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ai3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fyx.h(0,d)
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
break}o=J.b8(s,new B.fDj(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ae6(r)
$.fyx.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ai3,w)},
Si(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Si=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.Hs.n(0,d,u)
x=3
return A.b(B.SR(d,u),$async$Si)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Si,w)},
aRE(d){return B.inx(d)},
inx(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hs.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SQ(d),$async$aRE)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hs.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRE)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cK.aK(r)
x=!J.cx(q)?9:10
break
case 9:B.Si(d,q)
x=11
return A.b(J.fN(s,d),$async$aRE)
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
return A.i($async$aRE,w)},
ijz(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cd(J.eA(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cd(A.w_(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
return A.f9(null,y.K)},
a3I(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bm($.bG,y.cf)
t=new A.cb(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fJe(r,t),!1,s)
A.fI(r,"error",new B.fJf(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ie(0,C.P8,new B.fJg())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3I,w)},
aRZ(d,e,f){return B.ipW(d,e,f)},
ipW(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRZ=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3I(i),$async$aRZ)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SR(o,p),$async$aRZ)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ai9(k,j,s),$async$aRZ)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.an.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRZ,w)},
aRY(d,e,f){return B.ipV(d,e,f)},
ipV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRY=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRZ(d,e,f),$async$aRY)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3I(f),$async$aRY)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hs.n(0,s,r)
$.SC.n(0,s,r)
x=11
return A.b(B.Si(s,r),$async$aRY)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRY,w)},
Cx(d,e,f,g,h,i){return B.i7h(d,e,f,g,h,i)},
i7h(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cx=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cV.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jU(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b2Z(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Si(s,d),$async$Cx)
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
case 9:case 5:if(!l&&n>524288)$.an.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.Br(e),$async$Cx)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.HC(e,j),$async$Cx)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cx,w)},
WQ(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WQ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Br(d),$async$WQ)
case 3:t=a1
s=e.length,r=J.cJ(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cV.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hBE(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jU(m,n,k,l,j,"From folder",null,B.b2Z(),null)
$.aiy.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3I(o),$async$WQ)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hs.n(0,h,g)
$.SC.n(0,h,g)
B.Si(h,g)
x=9
break
case 10:x=11
return A.b(B.aRY(d,m,o),$async$WQ)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HC(d,t),$async$WQ)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WQ,w)},
hke(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hke=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hBE(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JG(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.Cx(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hke,w)},
JG(d,e,f,g,h,i){return B.i7g(d,e,f,g,h,i)},
i7g(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JG=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lw(A.dz(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JG)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cx(m)){x=6
break}J.h4(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.Tr(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kz(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SR(k,l),$async$JG)
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
return A.b(j.a1(0),$async$JG)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SR(k,new Uint8Array(A.cd(n))),$async$JG)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ai9(r,q,g),$async$JG)
case 16:f=new B.jU(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b2Z(),null)
x=17
return A.b(B.Br(d),$async$JG)
case 17:e=a6
J.c8(e,f)
x=18
return A.b(B.HC(d,e),$async$JG)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JG,w)},
WS(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WS=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiy.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3I(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ai3(s),$async$WS)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SQ(u[o]),$async$WS)
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
v=A.w_(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SC.h(0,s)
if(i==null)i=$.Hs.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t7(d,e),$async$WS)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SC.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w_(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WS,w)},
hBE(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t7(d,e){return B.i7i(d,e)},
i7i(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t7=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SC.h(0,f)
if(e==null)e=$.Hs.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiy.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3I(s),$async$t7)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hs.n(0,f,r)
$.SC.n(0,f,r)
B.Si(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ai3(f),$async$t7)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ae2(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SQ(g[l]),$async$t7)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8z()
if(!C.aI.gar(r)){$.Hs.n(0,f,r)
$.SC.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRE(f),$async$t7)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SC.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WS(a0,a1,0,g),$async$t7)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.Hs.n(0,f,h)
$.SC.n(0,f,h)
B.Si(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t7,w)},
i7l(d){var x,w,v=$.aiy.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i7m(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i2([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i7j(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
as9(d,e,f,g,h){return B.i7k(d,e,f,g,h)},
i7k(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
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
return A.b(B.a3I(s),$async$as9)
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
return A.b(n.iG(d).xZ(h,r,new A.EV(!0,e.c)),$async$as9)
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
return A.i($async$as9,w)},
hBG(d,e,f,g,h){var x,w,v,u,t=$.hBF
$.hBF=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ch5.n(0,t,new B.bAk(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ae2(u)))
return t},
hkf(d){var x=0,w=A.j(y.H)
var $async$hkf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hkf,w)},
JH(d,e){var $async$JH=A.e(function(a0,a1){switch(a0){case 2:s=v
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
return A.qM(B.WS(d,e,p,o<q?o:q),$async$JH,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qM(A.GY(n),$async$JH,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qM(B.ai3("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JH,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qM(B.SQ(h[l]),$async$JH,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qM(A.GY(k),$async$JH,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qM(B.t7(d,e),$async$JH,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qM(A.GY(A.w_(j,p,o<i?o:i)),$async$JH,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qM(null,0,w)
case 2:return A.qM(t.at(-1),1,w)}})
var x=0,w=A.hKQ($async$JH,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hMV(w)},
b30(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b30=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ch5.h(0,d)
if(t==null||J.cx(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6R(),$async$b30)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b30,w)},
WR(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ch5.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6R(),$async$WR)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ai9(r.c,u,r.z),$async$WR)
case 4:t=new B.jU(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b2Z(),null)
u=r.a
x=5
return A.b(B.Br(u),$async$WR)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.HC(u,s),$async$WR)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WR,w)},
a96(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a96=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ch5.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajd(u[s]),$async$a96)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a96,w)},
ch7(d,e,f){var x=0,w=A.j(y.H)
var $async$ch7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFs(d,e,f),$async$ch7)
case 2:return A.h(null,w)}})
return A.i($async$ch7,w)},
ch8(d,e,f){var x=0,w=A.j(y.H)
var $async$ch8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFt(d,e,f),$async$ch8)
case 2:return A.h(null,w)}})
return A.i($async$ch8,w)},
FG(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Br(d),$async$FG)
case 2:p=g
J.nh(p,new B.ch6(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hs.X(0,v)
$.aiy.X(0,e)
x=3
return A.b(B.ai3(v),$async$FG)
case 3:u=g
$.fyx.X(0,v)
x=4
return A.b(A.aB(),$async$FG)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FG)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FG)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajd(s[q]),$async$FG)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajd(v),$async$FG)
case 13:x=14
return A.b(B.HC(d,p),$async$FG)
case 14:return A.h(null,w)}})
return A.i($async$FG,w)},
b3_(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t7(d,e),$async$b3_)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fzw(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3_,w)},
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
break}r=J.b8(u,new B.fJh(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Br,w)},
HC(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HC)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fNA(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$HC)
case 3:return A.h(null,w)}})
return A.i($async$HC,w)},
bFs(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFs)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHq(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHK(f))
x=4
return A.b(B.HC(d,u),$async$bFs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFs,w)},
bFt(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFt)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHr(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cSR(f))
x=4
return A.b(B.HC(d,u),$async$bFt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFt,w)},
ae6:function ae6(d){this.a=d},
fDj:function fDj(){},
fJe:function fJe(d,e){this.a=d
this.b=e},
fJf:function fJf(d){this.a=d},
fJg:function fJg(){},
ch6:function ch6(d){this.a=d},
bAk:function bAk(d,e,f,g,h,i,j,k,l){var _=this
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
fJh:function fJh(){},
fNA:function fNA(){},
fHq:function fHq(d){this.a=d},
fHr:function fHr(d){this.a=d},
a97(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a97=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.chb())?3:4
break
case 3:x=5
return A.b(B.b31(d,e),$async$a97)
case 5:u=g
if(u!=null){t=u.c
B.ON(d,u.b,e,t)}v=u
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
return A.b(B.b2X(s),$async$a97)
case 10:case 9:if(g){v=new A.RD(1,D.V0,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WT(d,e),$async$a97)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WY(!0,!0,d,e),$async$a97)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.ON(d,D.B3,e,t)
v=new A.RD(p,D.B3,t)
x=1
break}v=B.cha(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a97,w)},
WT(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a99(null,d,e),$async$WT)
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
return A.b(B.b2W(p,d.length,e),$async$WT)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ch8(e,C.d.gG(d).a,r.b),$async$WT)
case 7:case 6:q=r.a
x=8
return A.b(B.ON(d,D.V0,e,q),$async$WT)
case 8:v=new A.RD(d.length,D.V0,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WT,w)},
WU(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mU(D.ns)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a98(d,e),$async$WU)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ch3(s,d,e,t),$async$WU)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2X(t),$async$WU)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t7(e,d),$async$WU)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WT(A.a([d],y.r),e),$async$WU)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WU,w)},
WW(){var x=0,w=A.j(y.H)
var $async$WW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hk8(),$async$WW)
case 2:x=3
return A.b(B.aUp(),$async$WW)
case 3:return A.h(null,w)}})
return A.i($async$WW,w)},
a98(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a98=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2Z()
x=3
return A.b(B.ch7(e,d.a,u),$async$a98)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a98,w)},
ON(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$ON=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.V0&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a98(p,f),$async$ON)
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
return A.b(B.ch2(o,p,u,f),$async$ON)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ch3(o,p,f,t),$async$ON)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ch1(o,u,p,f),$async$ON)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ON,w)},
b31(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b31=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ch9(e,d),$async$b31)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WY(!1,!0,d,e),$async$b31)
case 4:u=g
if(u!=null){t=u.b
v=new A.RD(u.a,D.B3,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b31,w)},
ch9(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ch9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WS(d,s,0,1),$async$ch9)
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
return A.i($async$ch9,w)},
cha(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cha=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a99(null,d,e),$async$cha)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hBD(u)
if(t.length>800){v=null
x=1
break}v=new A.RD(d.length,D.e3f,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cha,w)},
asa(d,e,f){return B.i7p(d,e,f)},
i7p(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asa=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.db(g,"\ufeff"))g=J.ni(g,1)
x=B.hkd(g)?3:4
break
case 3:x=5
return A.b(B.ch4(g),$async$asa)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.db(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ni(g,13))
try{k=B.FH(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.db(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ni(g,13))
u=9
x=12
return A.b(B.b2V(q),$async$asa)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WV(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ac(f)
$.an.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.db(g,"NGMYDOCSYNC0|"))try{n=B.hkc(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WV(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.db(g,"N2|")){v=B.JI(C.a.i(J.ni(g,3)),d,a0)
x=1
break}if(J.db(g,"NGMYDOCSYNC2|")){v=B.JI(C.a.i(J.ni(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JI(h,d,a0)
x=1
break}if(J.eF(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WV(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asa,w)},
JI(d,e,f){return B.i7n(d,e,f)},
i7n(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JI=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cG(A.v(s)+"/manifest.json",0,null)
q=A.cG(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2N(r),$async$JI)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2N(A.cG(s,0,null)),$async$JI)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cx(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cgH(o,r,a1,n,a2),$async$JI)
case 11:m=a4
x=J.cx(m)?12:13
break
case 12:x=14
return A.b(B.cgG(q),$async$JI)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WV(l,a2),$async$JI)
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
return A.i($async$JI,w)},
a99(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a99=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aQ(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t7(f,r),$async$a99)
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
return A.i($async$a99,w)},
WV(d,e){return B.i7o(d,e)},
i7o(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WV=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.Cx(i,a3,d,k,l,o),$async$WV)
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
return A.i($async$WV,w)},
OM:function OM(d,e){this.a=d
this.b=e},
chb:function chb(){},
a3h(d){var x=A.Q(d).ax.a===C.I,w=x?D.akn:D.ahQ,v=x?D.amc:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajl:C.bn
return new A.aJF([w,s,v,u,t,x?C.fz:C.bU])},
hSM(d,e){var x=e?C.v.j(0.72):C.b9
return A.cf(null,x,!0,null,new B.hbF(e),d,null,!0,!0,y.N)},
cgR(d,e,f,g,h,i,j,k,l){return new B.WN(e,l,d,f,k,j,g,h,i,null)},
a0c(d,e,f,g,h,i,j){return new B.bhO(g,h,j,e,i,d,f,null)},
hbF:function hbF(d){this.a=d},
a09:function a09(d,e){this.c=d
this.a=e},
aCr:function aCr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgu:function dgu(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d){this.a=d},
bzX:function bzX(){},
WN:function WN(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGy:function aGy(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e4k:function e4k(d){this.a=d},
e3I:function e3I(d,e){this.a=d
this.b=e},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3h:function e3h(d,e,f){this.a=d
this.b=e
this.c=f},
e3g:function e3g(d){this.a=d},
e3i:function e3i(d,e){this.a=d
this.b=e},
e3n:function e3n(d,e,f){this.a=d
this.b=e
this.c=f},
e3m:function e3m(d){this.a=d},
e48:function e48(d,e){this.a=d
this.b=e},
e49:function e49(d){this.a=d},
e3F:function e3F(d,e,f){this.a=d
this.b=e
this.c=f},
e3C:function e3C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3l:function e3l(d){this.a=d},
e3N:function e3N(d){this.a=d},
e3M:function e3M(){},
e3r:function e3r(d){this.a=d},
e45:function e45(d,e){this.a=d
this.b=e},
e46:function e46(d,e){this.a=d
this.b=e},
e47:function e47(d,e){this.a=d
this.b=e},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e3V:function e3V(d){this.a=d},
e3U:function e3U(d){this.a=d},
e3W:function e3W(){},
e3X:function e3X(){},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e4_:function e4_(){},
e40:function e40(d){this.a=d},
e3T:function e3T(d,e){this.a=d
this.b=e},
e3O:function e3O(d){this.a=d},
e3P:function e3P(d){this.a=d},
e3Q:function e3Q(d){this.a=d},
e3R:function e3R(d){this.a=d},
e3S:function e3S(d){this.a=d},
e3o:function e3o(){},
e3p:function e3p(d){this.a=d},
e3q:function e3q(d,e){this.a=d
this.b=e},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3j:function e3j(d,e,f){this.a=d
this.b=e
this.c=f},
e3G:function e3G(d){this.a=d},
e3H:function e3H(d,e,f){this.a=d
this.b=e
this.c=f},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3w:function e3w(d){this.a=d},
e3t:function e3t(d,e,f){this.a=d
this.b=e
this.c=f},
e3x:function e3x(d){this.a=d},
e3y:function e3y(d){this.a=d},
e3z:function e3z(){},
e3B:function e3B(d,e){this.a=d
this.b=e},
e3u:function e3u(d){this.a=d},
e3s:function e3s(d,e,f){this.a=d
this.b=e
this.c=f},
e3v:function e3v(){},
e3L:function e3L(d){this.a=d},
e3K:function e3K(d,e){this.a=d
this.b=e},
e44:function e44(d,e){this.a=d
this.b=e},
e41:function e41(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
e43:function e43(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4f:function e4f(d){this.a=d},
e4g:function e4g(d){this.a=d},
e4i:function e4i(){},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4b:function e4b(d,e){this.a=d
this.b=e},
e4c:function e4c(d,e,f){this.a=d
this.b=e
this.c=f},
e4a:function e4a(d,e,f){this.a=d
this.b=e
this.c=f},
e4d:function e4d(d,e){this.a=d
this.b=e},
e4e:function e4e(d,e){this.a=d
this.b=e},
aCo:function aCo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhN:function bhN(d,e,f){this.c=d
this.d=e
this.a=f},
dgq:function dgq(){},
dgr:function dgr(){},
aeq:function aeq(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgO:function dgO(){},
dgN:function dgN(d){this.a=d},
a0b:function a0b(d,e,f){this.c=d
this.d=e
this.a=f},
aCt:function aCt(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d,e,f){this.a=d
this.b=e
this.c=f},
dgM:function dgM(d,e){this.a=d
this.b=e},
dgI:function dgI(d,e){this.a=d
this.b=e},
dgG:function dgG(d){this.a=d},
dgE:function dgE(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgH:function dgH(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgJ:function dgJ(d){this.a=d},
dgF:function dgF(d){this.a=d},
dgC:function dgC(d){this.a=d},
a08:function a08(d,e,f){this.c=d
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
dgn:function dgn(d){this.a=d},
dgm:function dgm(d,e){this.a=d
this.b=e},
dgo:function dgo(d){this.a=d},
dgl:function dgl(d,e){this.a=d
this.b=e},
dgp:function dgp(d){this.a=d},
dgk:function dgk(d,e){this.a=d
this.b=e},
dgg:function dgg(d){this.a=d},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dgj:function dgj(d){this.a=d},
Rb:function Rb(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dh0:function dh0(d){this.a=d},
dh1:function dh1(d){this.a=d},
dh2:function dh2(d){this.a=d},
dh3:function dh3(d){this.a=d},
dh4:function dh4(d,e){this.a=d
this.b=e},
dh5:function dh5(d){this.a=d},
dh7:function dh7(d){this.a=d},
dh6:function dh6(d){this.a=d},
a0d:function a0d(d,e,f,g,h){var _=this
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
dgX:function dgX(d,e){this.a=d
this.b=e},
dgY:function dgY(d,e){this.a=d
this.b=e},
dgP:function dgP(d,e,f){this.a=d
this.b=e
this.c=f},
dgQ:function dgQ(d){this.a=d},
dgR:function dgR(){},
dgW:function dgW(){},
dgS:function dgS(d,e){this.a=d
this.b=e},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgU:function dgU(d,e){this.a=d
this.b=e},
dgV:function dgV(d,e){this.a=d
this.b=e},
aeo:function aeo(d,e){this.c=d
this.a=e},
dgf:function dgf(d){this.a=d},
a07:function a07(d){this.a=d},
aCp:function aCp(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0e:function a0e(d,e){this.c=d
this.a=e},
aCv:function aCv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dh_:function dh_(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
bhO:function bhO(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i7q(){var x,w=$.oP(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hl(v)},
OO(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OO)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OO)
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
return A.i($async$OO,w)},
a9a(d){return B.i7r(d)},
i7r(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9a)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i0("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cY,null),$async$a9a)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.an.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9a,w)},
WX(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OO(),$async$WX)
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
return A.b(B.a9a(s),$async$WX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WX,w)},
WY(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WY=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$WY)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.chd(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i7q()
t=A.U(u).k("O<1,a9<n,aG>>")
r=A.B(new A.O(u,new B.che(s),t),t.k("aj.E"))
x=6
return A.b(B.OO(),$async$WY)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9a(q),$async$WY)
case 7:x=8
return A.b(B.a9b(r,u,g,s),$async$WY)
case 8:v=new A.btL(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WY,w)},
asb(d){var x=0,w=A.j(y.y),v,u,t
var $async$asb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OO(),$async$asb)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asb,w)},
chf(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OO(),$async$chf)
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
return A.i($async$chf,w)},
a9b(d,e,f,g){return B.i7s(d,e,f,g)},
i7s(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9b=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.as9("media",r,new B.chc(s,e,g),f,q),$async$a9b)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WX(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9b)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WX(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9b)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WX(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9b)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9b,w)},
FH(d,e,f){return B.i7t(d,e,f)},
i7t(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FH=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FH)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asb(b3),$async$FH)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.j4,null,g),$async$FH)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asb(b3),$async$FH)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OO(),$async$FH)
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
l=new A.acB(a8.a,b0,"media",a8.d,a9).DK(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b2O(k,n,o,s,b7),$async$FH)
case 17:j=c0
if(j!=null){J.c8(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
$.an.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
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
return A.b(new A.acB(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FH)
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
return A.b(B.a9a(e),$async$FH)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FH,w)},
chd:function chd(){},
che:function che(d){this.a=d},
chc:function chc(d,e,f){this.a=d
this.b=e
this.c=f},
aUp(){var x=0,w=A.j(y.H),v,u
var $async$aUp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.iiS=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aUp)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aUp)
case 3:u=$.hpT
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aUp)
case 4:$.hpT=$.irN=$.irO=null
return A.h(null,w)}})
return A.i($async$aUp,w)},
fNb(d){var x=0,w=A.j(y.H),v,u
var $async$fNb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abb){x=1
break}u=new A.bm($.bG,y.d4)
d.c=new B.fNc(new A.cb(u,y.aY))
x=3
return A.b(u.ie(0,C.hc,new B.fNd()),$async$fNb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fNb,w)},
irL(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i7a(x):x},
hpY(d){var x=0,w=A.j(y.T),v,u,t
var $async$hpY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asd(u)
x=1
break}v=B.hkc(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hpY,w)},
hpX(d){var x=0,w=A.j(y.T),v,u,t
var $async$hpX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.ase(u)
x=1
break}v=B.hkc(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hpX,w)},
h73(d){var x=0,w=A.j(y.T),v
var $async$h73=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ase(d),$async$h73)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h73,w)},
bGq(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bGq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hpX(d),$async$bGq)
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
return A.i($async$bGq,w)},
fAk(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fAk=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WR(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cx(d.a8z(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAk,w)},
HD(d,e,f){return B.iu8(d,e,f)},
iu8(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HD=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hpY(a1),$async$HD)
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
return A.b($.hUN().aI1(D.dNc,null),$async$HD)
case 4:l=d.hpT=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ae2(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bm($.bG,y.b1)
l.y=new B.fNN(f,k,new B.fNO(f,a2,k,j,a0,p),a2,j,a0,p,new A.cb(t,y.ch))
x=5
return A.b(l.a9V(0,new B.Zb(r,"offer")),$async$HD)
case 5:d=l
x=7
return A.b(l.anJ(0),$async$HD)
case 7:x=6
return A.b(d.a9N(0,a4),$async$HD)
case 6:x=8
return A.b(B.fNb(l),$async$HD)
case 8:x=9
return A.b(l.as5(),$async$HD)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.irL(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asf(m,h),$async$HD)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hBD(h)
case 11:v=new A.bt_(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HD,w)},
fNc:function fNc(d){this.a=d},
fNd:function fNd(){},
fNO:function fNO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNN:function fNN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNM:function fNM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iwd(d){switch(d){case"new":return D.eOj
case"checking":return D.eOk
case"connected":return D.eOm
case"completed":return D.eOl
case"failed":return D.eOo
case"disconnected":return D.eOp
case"closed":return D.aTA
case"count":return D.eOn}return D.aTA},
iwe(d){switch(d){case"new":return D.aTB
case"gathering":return D.eOq
case"complete":return D.abb}return D.aTB},
iH_(d){switch(d){case"stable":return D.eOr
case"have-local-offer":return D.eOs
case"have-local-pranswer":return D.eOu
case"have-remote-offer":return D.eOt
case"have-remote-pranswer":return D.eOv
case"closed":return D.aTH}return D.aTH},
iF6(d){switch(d){case"new":return D.aTE
case"connecting":return D.aTF
case"connected":return D.aTG
case"closed":return D.abc
case"disconnected":return D.aTD
case"failed":return D.aTC}return D.abc},
aby:function aby(d,e){this.a=d
this.b=e},
PV:function PV(d,e){this.a=d
this.b=e},
Za:function Za(d,e){this.a=d
this.b=e},
PU:function PU(d,e){this.a=d
this.b=e},
Gc:function Gc(d,e){this.a=d
this.b=e},
cvi:function cvi(){},
hm4(d){var x=new B.Gb()
x.a=d
x.b=!0
return x},
Gb:function Gb(){this.b=this.a=$},
abx:function abx(){},
awK:function awK(){},
Zb:function Zb(d,e){this.a=d
this.b=e},
hk8(){var x=0,w=A.j(y.H)
var $async$hk8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hk8,w)},
hkb(d,e,f){var x=0,w=A.j(y.T),v
var $async$hkb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mU(D.ns))){v=null
x=1
break}v=B.h7k(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hkb,w)},
hBD(d){var x,w=F.ahg.a6A(C.e3.aK(d),null)
if(w.length===0){x=C.e3.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i79(d){var x,w,v=C.cK.aK(d)
try{x=C.cf.cF(0,F.ahf.bib(v,!1))
return x}catch(w){x=C.cf.cF(0,v)
return x}},
hkc(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i79(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cf.cF(0,C.cK.aK(x))
return v}catch(u){return x}}return null},
i7a(d){var x,w,v,u,t,s=A.a([],y.s)
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
i7b(){var x,w=$.oP(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hl(v)},
b2U(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2U)
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
return A.i($async$b2U,w)},
cgW(d,e){return B.i7c(d,e)},
i7c(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i0("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cY,null),$async$cgW)
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
return A.i($async$cgW,w)},
b2X(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2U(d),$async$b2X)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2X,w)},
b2W(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2W=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i7b()
r=C.a.i(f)
t=C.e3.aK(s)
x=3
return A.b(B.cgW(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b2W)
case 3:if(!h){v=null
x=1
break}v=new A.a2h("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2W,w)},
b2V(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2U(o),$async$b2V)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cF(0,C.cK.aK(u))
if(J.j7(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2V,w)},
cgX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(O.bHp("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cY),$async$cgX)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgX,w)},
b2Y(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JE(),$async$b2Y)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2Y,w)},
as6(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$as6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as6)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2Y(s)
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
a92(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a92=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a92)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JE(),$async$a92)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dw(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a91(s),$async$a92)
case 5:x=6
return A.b(B.as4(f,u),$async$a92)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a92,w)},
a93(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a93=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a93)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JE(),$async$a93)
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
return A.b(B.as4(g,q),$async$a93)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a91(u),$async$a93)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a93,w)},
a94(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a94=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a94)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JE(),$async$a94)
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
s=B.b2R(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a94)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a94)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a94,w)},
cgY(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgY)
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
return A.i($async$cgY,w)},
JF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgY(d),$async$JF)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2Y(t),$async$JF)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.as5(d),$async$JF)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2R(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.as5(d),$async$JF)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JF,w)},
as5(d){var x=0,w=A.j(y.H)
var $async$as5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as5)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$as5)
case 2:return A.h(null,w)}})
return A.i($async$as5,w)},
b2Z(){var x,w=$.oP(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hl(v)},
a95(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hkd(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ch0(d){return B.i7e(d)},
i7e(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ch0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a95(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$ch0)
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
return A.i($async$ch0,w)},
as8(d,e){return B.i7f(d,e)},
i7f(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$as8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a95(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cY,null),$async$as8)
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
return A.i($async$as8,w)},
ch2(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ch2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a95(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.as8(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ch2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ch2,w)},
ch1(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ch1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a95(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.as8(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ch1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ch1,w)},
ch3(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ch3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a95(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.as8(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch3,w)},
ch4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ch4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hkd(d)){v=null
x=1
break}x=3
return A.b(B.ch0(d),$async$ch4)
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
return A.i($async$ch4,w)},
a9c(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9c=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9c)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9c)
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
return A.i($async$a9c,w)},
asc(d){return B.i7u(d)},
i7u(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asc)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i0("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cY,null),$async$asc)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.an.$1("[doc share webrtc stash] save: "+A.v(s))
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
return A.b(B.a9c(),$async$asd)
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
if(J.j7(p).length===0){v=null
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
return A.b(B.a9c(),$async$asf)
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
return A.b(B.a9c(),$async$ase)
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
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ase,w)},
ar5(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ar5=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.ox)){v=null
x=1
break}x=3
return A.b(p.ly(e),$async$ar5)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.hq),$async$ar5)
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
iDb(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.v(w),5,"0")
return v},
h5c(d){return B.iDd(d)},
iDd(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h5c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iG("media").M6(d,3600),$async$h5c)
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
return A.i($async$h5c,w)},
E0(d,e,f,g,h,i){var x=null
return B.iDa(d,e,f,g,h,i)},
iDa(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E0=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hBG(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hkf(r),$async$E0)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h5c(o),$async$E0)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a96(r),$async$E0)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aXk)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ih(A.a([],g))
x=15
return A.b(d.fc(0,A.axy("GET",A.cG(n,0,null))).d7(0,C.HD),$async$E0)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a96(r),$async$E0)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lw(d)
u=19
case 22:x=24
return A.b(d.C(),$async$E0)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b30(r,k),$async$E0)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$E0)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WR(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ac(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a96(r),$async$E0)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E0,w)},
aU3(d){return B.iDc(d)},
iDc(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aU3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iG("media").X(0,d),$async$aU3)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aU3,w)}},D,Y,N,Z,A_
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
B.cvj.prototype={
aI1(d,e){return this.cUl(d,e)},
cUl(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aI1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kC(A.cz(t)))
t=J.k(u)
v=B.ich(C.cS.gcp().aK(new A.dl(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aI1,w)}}
B.b8b.prototype={
bEB(d){var x=this,w=x.w
w.onclose=A.hG(new B.cve(x))
w.onopen=A.hG(new B.cvf(x))
w.onmessage=A.hG(new B.cvg(x))
w.onbufferedamountlow=A.hG(new B.cvh(x))},
gd4(d){return this.x},
ajZ(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gb()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hm4(J.eW(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$ajZ)
case 8:v=t.hm4(s.aqe(f,0,null))
x=1
break
case 7:case 4:v=B.hm4(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajZ,w)}}
B.b8c.prototype={
bEC(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cvk(x)))
w.addEventListener("icecandidate",A.hG(new B.cvl(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cvm(x)))
w.onicegatheringstatechange=A.hG(new B.cvn(x))
w.addEventListener("signalingstatechange",A.hG(new B.cvo(x)))
if(!$.hu7())w.addEventListener("connectionstatechange",A.hG(new B.cvp(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cvq(x)))
w.addEventListener("track",A.hG(new B.cvr(x)))},
anJ(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ej(s.createAnswer(A.kC(A.cz(A.S(y.N,y.z)))),y.aQ),$async$anJ)
case 3:t=f
v=new B.Zb(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anJ,w)},
a9N(d,e){return this.btv(0,e)},
btv(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9N)
case 2:return A.h(null,w)}})
return A.i($async$a9N,w)},
a9V(d,e){return this.btQ(0,e)},
btQ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9V)
case 2:return A.h(null,w)}})
return A.i($async$a9V,w)},
as5(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$as5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zb(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as5,w)},
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
B.aep.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0a.prototype={
R(){return new B.aCs()},
gd6(){return this.c}}
B.aCs.prototype={
Z(){this.a3()
this.ags()},
ags(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ags=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2S(u.e,u.c),$async$ags)
case 2:t=e
if(v.c!=null)v.l(new B.dgy(v,t))
return A.h(null,w)}})
return A.i($async$ags,w)},
RN(){var x=0,w=A.j(y.H),v,u=this,t
var $async$RN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.as1(t.e,t.c,!1),$async$RN)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fDu)
x=1
break}x=4
return A.b(B.a90(u.a.c,"individual"),$async$RN)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a89(A.e7(new B.dgv(u),!1,null,y.H)),$async$RN)
case 5:case 1:return A.h(v,w)}})
return A.i($async$RN,w)},
Kn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Kn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fKZ(o),$async$Kn)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a94(o.e,r,s,q),$async$Kn)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAt)
x=1
break}x=5
return A.b(B.a90(u.a.c,"member"),$async$Kn)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a89(A.e7(new B.dgx(u),!1,null,y.H)),$async$Kn)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Kn,w)},
z0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$z0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a9_(t.e,o,t.f,t.r,t.w,s),$async$z0)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a90(u.a.c,"org_owner"),$async$z0)
case 4:x=5
return A.b(B.as6(u.a.c),$async$z0)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fLt(o),$async$z0)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a92(s,t,o,q.c),$async$z0)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAp)
x=1
break}x=10
return A.b(B.as6(u.a.c),$async$z0)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a89(A.e7(new B.dgw(u),!1,null,y.H)),$async$z0)
case 11:case 1:return A.h(v,w)}})
return A.i($async$z0,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nW:C.nh,p=B.hka(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dK,y.m).w
w=A.m(28)
v=A.a([new A.aa(0,C.H,C.az.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.p(s,A.w(A.a([A.p(s,D.fXW,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.ho,s,s,s),C.aB,D.hha,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cez,C.m),s,s,s,s,C.ev,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lS(new B.dgA(),s),C.N,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeT(C.f7,C.aG3,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcmI(),s),C.af],u))
w.push(new B.aeT(C.q4,C.a6C,"Team Member","Sign in with your organization access code + password",t.gcnD(),s))
w.push(C.af)
w.push(new B.aeT(C.arV,C.a8g,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcn7(),s))
return A.c6(s,q,A.bo(!0,A.cc(A.w(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeT.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eL(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lR,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(C.zZ,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aF7.prototype={}
B.aIo.prototype={}
B.jU.prototype={
mU(d){var x=this.b,w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gasM(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.a5(x/1024,1)+" KB"
if(x<1073741824)return C.i.a5(x/1048576,1)+" MB"
return C.i.a5(x/1073741824,2)+" GB"},
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
bhF(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jU(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cSR(d){return this.bhF(null,d)},
aHK(d){return this.bhF(d,null)}}
B.WL.prototype={
R(){return new B.aGw(new A.cB(null,y.A))},
gd6(){return this.c}}
B.aGw.prototype={
Z(){this.a3()
this.agt()},
agt(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cw(u.a.c),$async$agt)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e3d(u,t))
case 1:return A.h(v,w)}})
return A.i($async$agt,w)},
agu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$agu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fP(new A.fD(s)),$async$agu)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fEp)
case 1:return A.h(v,w)}})
return A.i($async$agu,w)},
a0v(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0v=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ar5(s.d,4),$async$a0v)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0v)
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
return A.i($async$a0v,w)},
akp(){var x=0,w=A.j(y.H),v,u=this,t
var $async$akp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aca("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$akp)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akp,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nW:C.nh,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AC,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aor,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.H,C.az.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.ny,w,C.lp,new A.e9(A.p(p,A.qt(p,p,!1,B.i75(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lp,A.A(A.a([A.E(A.em(I.E4,p,C.Xs,q.gceG(),p),1),C.ar,A.E(A.de(C.Aq,p,C.adz,q.gceH(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a4(1/0,p,A.em(N.a5q,p,D.hcF,q.gcCV(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,Z.ap2,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.WP.prototype={
R(){return new B.aGz(new A.au(C.ay,$.ay()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aGz.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.JD(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a2()},
a0w(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JD(u.d.a.a)
if(t==null){u.l(new B.e4m(u))
x=1
break}u.l(new B.e4n(u))
s=u.a
r=s.c
x=3
return A.b(B.a8Z(s.d,new B.e4o(u),t,r),$async$a0w)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e4p(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0w,w)},
a4_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cx(r.a.d)){x=1
break}r.l(new B.e4q(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.t7(r.a.c,q),$async$a4_)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e4r(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ak0(p,m,l,j,k),$async$a4_)
case 8:o=e
if(r.c!=null)r.l(new B.e4s(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e4t(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e4u(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4_,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akn:D.ahQ,h=j?D.amc:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajl:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eS(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dp(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dp(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c1t,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f5,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AC,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vd(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bni()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pt,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e4v(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mS,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.E9(l.a.d,4)
m=A.B(new A.O(m,new B.e4w(x,new A.aJF(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.kO,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.p(k,A.w(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fyW)
else q.push(A.V(C.kQ,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cY(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j3,k,k,k,k,C.eZ,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJJ,k,k,C.ah),1)
u=l.f?k:l.gcCW()
t=i[3]
s=i[1]
q=A.m(16)
s=A.em(N.a5q,k,D.hdM,u,A.dh(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gceI()
t=A.bp(C.az,k,k,0,C.c,k,C.o3,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ac,C.t,A.a([f,v,A.bo(!0,A.l1(new B.e4x(),A.w(A.a([e,new A.C(D.bJc,A.w(A.a([s,C.N,i,C.af,A.bH(l.f?C.uv:D.hc0,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cn,C.a1D,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bni.prototype={
pg(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fn(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hl(C.bB,v.length),C.aP)}}
B.WM.prototype={
R(){return new B.aGx()}}
B.aGx.prototype={
Z(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bb(w,C.b8,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bb(x,C.b8,C.aP),v)
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
agv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e3e(r))
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
return A.b(B.a93(p,m,n,o,C.a.i(l).length===0?null:l),$async$agv)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fE0)
s=[1]
x=4
break}p.K(y.q).f.T(D.fCC)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e3f(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agv,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nW:C.nh,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h4k,s,s,s,1,s,!0),p=A.p(s,D.bBd,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.J3,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8T,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8O,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c93,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gceJ()
u=A.bp(C.az,s,s,s,s,C.ht,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.ny,A.bH(t.r?C.uv:C.b_f,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.ae6.prototype={}
B.bAk.prototype={
a6R(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6R=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8z()))
x=3
return A.b(B.SR(t,s),$async$a6R)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
gd6(){return this.a}}
B.OM.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a09.prototype={
R(){return new B.aCr(new A.au(C.ay,$.ay()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aCr.prototype={
Z(){this.a3()
$.aS.U$.push(new B.dgu(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a2()},
ceP(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a3h(d),u=x.a.c,t=u?C.iY:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nW:v.a[0],p=A.m(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.az.j(u?0.25:0.12),C.fF,32)],n),l=A.p(w,Y.auH,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.H,C.az.j(0.4),C.cy,16)],n),C.avy,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.D,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vd(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzX()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.Dg,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b8N),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dgs(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mS,w,w,w,w)
f=f[1]
h=y.p
return A.eB(w,C.L,new A.cP(T.N4,new A.bP(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xe,A.w(A.a([l,C.aN,k,C.N,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dV(C.ov,new B.dgt(d),A.dh(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.m(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.o(w,w,w,A.m(14),A.a([new A.aa(0,C.H,C.az.j(0.35),C.cN,12)],n),M.RA,C.m),C.bm,A.aE(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eHG,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gceO(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PB,w,C.db,w,w,w)}}
B.bzX.prototype={
pg(d,e){return e.anD(e.a.toUpperCase())}}
B.WN.prototype={
R(){return new B.aGy(A.a([],y.r),A.aR(y.N))},
gd6(){return this.c}}
B.aGy.prototype={
Z(){var x=this
x.a3()
x.uz()
x.w=A.d4(C.jX,new B.e4k(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WW()
this.a2()},
a2O(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OL(u.a.c),$async$a2O)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Br(u.a.c),$async$a2O)
case 4:u.l(new s.e3I(u,e))
u.ir("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2O,w)},
uz(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OL(u.a.c),$async$uz)
case 3:t=e
x=4
return A.b(B.Br(u.a.c),$async$uz)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e3J(u,s))
if(t>0)u.ir("Received "+A.v(t)+" file(s) via My Code.")
u.OR(u.d)
B.Cw(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uz,w)},
OR(d){return this.bIJ(d)},
bIJ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a98(r,u.a.c),$async$OR)
case 8:p=f
if(u.c==null){x=1
break}new B.e3h(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mU(D.ns))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WU(r,u.a.c),$async$OR)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Br(u.a.c),$async$OR)
case 12:u.l(new o.e3i(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OR,w)},
Pg(d){return this.bPa(d)},
bPa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Pg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a98(d,u.a.c),$async$Pg)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e3n(u,d,t))
x=6
return A.b(A.fP(new A.fD(t)),$async$Pg)
case 6:u.ir("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fP(new A.fD(r.toUpperCase())),$async$Pg)
case 7:u.ir("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Pg,w)},
ir(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b0(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uA(d,e){return this.cO7(d,e)},
cO7(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uA=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e48(r,e))
u=3
x=6
return A.b(d.$0(),$async$uA)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e49(r))
$.eX.mN()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uA,w)},
gaZy(){var x=this.a
return x.f||x.r||x.w},
J9(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZy()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgU(s,n,r,q,o,t),$async$J9)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ir("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fYH(o,u.a.c),$async$J9)
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
return A.b(B.E2(s,o,r,q,n,t),$async$J9)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J9,w)},
a1Q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.as6(u.a.c),$async$a1Q)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ir("No organization portal found.")
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
return A.b(A.a8(t,!1).ca(A.e7(new B.e3F(u,r,q),!1,null,y.H)),$async$a1Q)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1Q,w)},
a2Z(d){return this.cwh(d)},
cwg(){return this.a2Z(1)},
cwh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZy()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.as3(u.a.c),$async$a2Z)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2Z,w)},
aeg(d,e,f){return this.c5g(d,e,f)},
c5g(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aeg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ir(e)
x=1
break}x=3
return A.b(u.uA(new B.e3C(u,d,null,e,f),"Uploading\u2026"),$async$aeg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeg,w)},
bIS(){B.hRI(!1,new B.e3l(this))
return},
cBs(){this.l(new B.e3N(this))},
aC9(){var x=0,w=A.j(y.H),v=this
var $async$aC9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bIS()
return A.h(null,w)}})
return A.i($async$aC9,w)},
aec(){var x=0,w=A.j(y.H),v=this
var $async$aec=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uA(new B.e3r(v),"Importing\u2026"),$async$aec)
case 2:return A.h(null,w)}})
return A.i($async$aec,w)},
TQ(d){return this.cNp(d)},
cNp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mU(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).ca(A.e7(new B.e45(u,d),!1,null,y.H)),$async$TQ)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mU(D.TE)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).ca(A.e7(new B.e46(u,d),!1,null,y.H)),$async$TQ)
case 8:x=1
break
case 7:x=u.c5Z(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).ca(A.e7(new B.e47(u,d),!1,null,y.H)),$async$TQ)
case 11:x=1
break
case 10:u.ir("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TQ,w)},
c5Z(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cYx,C.a.aV(x,w+1).toLowerCase())},
ai7(d){return this.cmM(d)},
cmM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ai7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mU(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).ca(A.e7(new B.e3D(u,d),!1,null,y.H)),$async$ai7)
case 5:x=1
break
case 4:u.l(new B.e3E(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ai7,w)},
Tb(d){return this.cEp(d)},
cEp(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Tb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ir("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pT(t,s.c,s.f),$async$Tb)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uA(new B.e3Z(u,d),"Preparing QR\u2026"),$async$Tb)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Tb,w)},
akP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e4_(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e40(q),s),s.k("M.E"))
if(r.length===0){u.ir("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Tb(r),$async$akP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akP,w)},
akI(d){return this.cDX(d)},
cDX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3h(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e3T(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akI)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TQ(d)
break
case"qr":u.Tb(A.a([d],y.r))
break
case"send_my_code":u.cns(A.a([d],y.r))
break
case"save":u.ak6(d)
break
case"delete":u.K4(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akI,w)},
Ze(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ze=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3o(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3p(q),s),s.k("M.E"))
if(r.length===0){u.ir("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pT(t,s.c,s.f),$async$Ze)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uA(new B.e3q(u,r),"Preparing file\u2026"),$async$Ze)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ze,w)},
aje(d){return this.cuy(d)},
cuy(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aje=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hSM(d,!1),$async$aje)
case 3:s=f
r=s==null
q=B.a95(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ir("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aje,w)},
aid(){var x=0,w=A.j(y.H),v=this,u
var $async$aid=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h6k(u,v.a.c),$async$aid)
case 2:return A.h(null,w)}})
return A.i($async$aid,w)},
bIR(){B.hRI(!1,new B.e3k(this,null))
return},
Km(d,e){return this.cnt(d,e)},
b5k(d){return this.Km(null,d)},
cns(d){return this.Km(d,null)},
cnt(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Km=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e3G(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y2.cq().aqo(!0,C.a3v,!1),$async$Km)
case 10:r=g
if(r==null||J.cx(r.a)){x=1
break}x=11
return A.b(s.uA(new B.e3H(l,s,r),"Preparing\u2026"),$async$Km)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.ir("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ir("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bIE(p,l,e,s.a.c),$async$Km)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ir("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Km,w)},
Jq(d){return this.c53(d)},
c53(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i74(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b5k(t),$async$Jq)
case 8:x=6
break
case 7:u.ir("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ir("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uA(new B.e3A(u,d),"Receiving video\u2026"),$async$Jq)
case 11:x=1
break
case 10:x=12
return A.b(u.uA(new B.e3B(u,d),"Receiving\u2026"),$async$Jq)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
Fe(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Fe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DX()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aje(t),$async$Fe)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jq(s),$async$Fe)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).ca(A.e7(new B.e3L(u),!1,null,y.N)),$async$Fe)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uz(),$async$Fe)
case 10:x=1
break
case 9:x=11
return A.b(u.Jq(C.a.i(r)),$async$Fe)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Fe,w)},
ak6(d){return this.czW(d)},
czW(d){var x=0,w=A.j(y.H),v=this
var $async$ak6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uA(new B.e3K(v,d),"Saving\u2026"),$async$ak6)
case 2:return A.h(null,w)}})
return A.i($async$ak6,w)},
K4(d){return this.bRz(d)},
bRz(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$K4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lE(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$K4)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgX(t),$async$K4)
case 6:case 5:s=d.a
x=7
return A.b(B.FG(u.a.c,s),$async$K4)
case 7:u.r.X(0,s)
x=8
return A.b(u.uz(),$async$K4)
case 8:case 1:return A.h(v,w)}})
return A.i($async$K4,w)},
akV(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3h(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e44(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akV)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aid()
break
case"import":u.aec()
break}case 1:return A.h(v,w)}})
return A.i($async$akV,w)},
ceM(d){var x=d.c
if(C.a.Y(x,"video/")||d.mU(D.ns))return C.rv
if(C.a.Y(x,"image/")||d.mU(D.TE))return C.vB
if(C.a.q(x,"pdf"))return S.IJ
return D.asj},
B(d){var x,w,v=this,u=null,t=B.a3h(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.IW,u,u,u,new B.e4f(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c24,u,u,u,v.e?u:v.gcn8(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcBr()
n.push(A.aH(u,u,u,u,A.V(v.r.a===x?D.bX7:E.asI,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a5m,u,u,u,v.e?u:v.gceN(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.p7,u,u,u,v.e?u:v.gb6r(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c3T,u,u,u,v.e?u:new B.e4g(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lS(new B.e4h(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jG(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCo(C.jI,s,!0,t,w?u:v.gcEq(),u),1)
x.push(new A.C(C.aop,A.l1(new B.e4i(),A.A(A.a([s,C.ar,A.E(new B.aCo(C.tS,"Export",!1,t,w?u:v.gbVr(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cn,C.iO,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhN(t,v.e?u:v.gb6r(),u)
else s=A.ks(!0,u,u,new B.e4j(v,t),s,u,D.bHP,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ac,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCo.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tF,t,new A.b9(s,C.a1),t,t,t)
return A.de(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.ch,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dh(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tF,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.em(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bhN.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l1(new B.dgq(),new A.C(E.a2C,A.w(A.a([A.l1(new B.dgr(),A.p(x,A.V(C.A2,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eg,C.hy,x,x,new A.bq(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.de(C.p7,x,D.hhu,this.d,A.bp(C.az,x,x,x,C.c,x,C.Pz,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.D2,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeq.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.du(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mU(D.ns))p=D.dBq
else{p=C.a.Y(p,"image/")||i.mU(D.TE)
n=y.O
p=p?A.a([C.cX,C.az],n):A.a([C.aO.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasM()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mU(D.ns))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.w(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.V(C.h2,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.mU(D.ns)))l.push(A.hhY(C.az,!1,j,j,j,!1,j,j,new B.dgN(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.V(C.p3,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l1(new B.dgO(),new A.C(C.dV,A.aE(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a22,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0b.prototype={
R(){return new B.aCt()},
gd6(){return this.c}}
B.aCt.prototype={
Z(){this.a3()
this.yP()},
t(){B.i7j(this.e)
this.a2()},
yP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t7(o.c,o.d),$async$yP)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i7m(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i7l(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dgK(s))
x=1
break}s.l(new B.dgL(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dgM(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yP,w)},
a3Z(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3Z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t7(t.c,t.d),$async$a3Z)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fB_)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ak0(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3Z)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3Z,w)},
c4X(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kr(u,C.z,v,new B.dgI(w,t),C.hf,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h7(t,C.z,v,new B.dgJ(w),C.hf,C.dE,!0,v,!1,v,v)
else return C.bK
return A.tY(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a3h(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.E6,u,u,u,v.gbah(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gv
else{q=v.r
if(q!=null)t=new A.C(C.ev,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ev,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.de(C.E6,u,D.h_q,v.gbah(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c4X()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a08.prototype={
R(){return new B.aCq(A.akZ(),C.bH,C.bH)},
gd6(){return this.c}}
B.aCq.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iH(new B.dgn(v))
x.gd14().iH(new B.dgo(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bf8
x.iH(new B.dgp(v))
v.yP()},
yP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t7(p.c,p.d),$async$yP)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dgg(s))
x=1
break}x=8
return A.b(s.d.vC(0,new A.a5v(r,s.a.d.c)),$async$yP)
case 8:if(s.c==null){x=1
break}s.l(new B.dgh(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dgi(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yP,w)},
a0x(){var x=0,w=A.j(y.H),v=this,u
var $async$a0x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0x)
case 5:x=3
break
case 4:x=6
return A.b(u.iL(0),$async$a0x)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0x,w)},
aXo(d){var x=d.a
return C.a.aZ(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3h(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gv
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bY7,C.f,o,o,new A.o(o,o,o,A.m(24),o,M.RA,C.m),o,88,o,o,o,o,o,88)
t=A.lg(C.az,o,o,m,0,new B.dgj(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aXo(p.w)+" / "+p.aXo(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.fxo,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vE:C.fQ,o,o,o,o,o)
x=A.w(A.a([u,C.lp,t,x,C.df,A.de(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gceQ(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.pW,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rb.prototype={
R(){return new B.aCw()},
gd6(){return this.c}}
B.aCw.prototype={
Z(){this.a3()
this.R0()},
R0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$R0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hkb(o.c,o.d,new B.dh0(s)),$async$R0)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dh1(s))
x=1
break}s.e=r
q=Q.iv3(r)
if(q==null){s.l(new B.dh2(s))
x=1
break}s.d=q
q.aU(0,s.gb57())
x=8
return A.b(q.iX(0).d7(0,C.o2),$async$R0)
case 8:if(s.c==null){x=1
break}s.l(new B.dh3(s))
x=9
return A.b(q.qx(0),$async$R0)
case 9:q.u9(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dh4(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$R0,w)},
clg(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dh5(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DZ(0,x.gb57())
w=x.d
if(w!=null)w.t()
B.iFp(x.e)
x.a2()},
agy(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3_(u.c,u.d),$async$agy)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agy,w)},
B(d){var x,w,v,u=this,t=null,s=B.a3h(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aH(t,t,t,t,C.oh,t,t,t,u.gceK(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iy(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gv
else{q=u.r
if(q!=null)s=new A.C(C.ev,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ako(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fO(x,new A.am(C.z,t,C.ac,C.t,A.a([new A.AX(s,t),A.aA(t,A.xM(A.p(t,A.V(q?K.vE:C.fQ,C.c,t,t,t,48),C.f,t,t,new A.o(C.b9,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dh7(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0d.prototype={
R(){return new B.aCu(new A.cB(null,y.A))}}
B.aCu.prototype={
gcNN(){var x,w,v=this.a
if(v.e!==D.V1)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcNn(){var x,w,v=this.a
if(v.e!==D.B3)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcNN()
if(x!=null){v.Sd(x)
v.e=A.d4(V.D4,new B.dgX(v,x))}w=v.gcNn()
if(w!=null){v.Sc(w)
v.f=A.d4(C.fr,new B.dgY(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Sc(d){return this.csI(d)},
csI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asb(d),$async$Sc)
case 3:t=f
x=4
return A.b(B.chf(d),$async$Sc)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dgP(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Sc,w)},
Sd(d){return this.csJ(d)},
csJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h73(d),$async$Sd)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bGq(t),$async$Sd)
case 4:if(u.c==null){x=1
break}u.l(new B.dgQ(u))
u.c.K(y.q).f.T(D.aWU)
case 1:return A.h(v,w)}})
return A.i($async$Sd,w)},
gcaw(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gceL(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3I(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DX()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fEa)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).ca(A.e7(new B.dgR(),!1,null,y.N)),$async$a3I)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bGq(s),$async$a3I)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aWU)
case 1:return A.h(v,w)}})
return A.i($async$a3I,w)},
ac2(d){return this.bPb(d)},
bPb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ac2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fP(new A.fD(C.d.aL(t,", "))),$async$ac2)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b0(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ac2,w)},
agw(d){return this.bOU(d)},
bOU(d){var x=0,w=A.j(y.H),v=this
var $async$agw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fP(new A.fD(v.a.c)),$async$agw)
case 2:if(d.e!=null)d.K(y.q).f.T(D.fBt)
return A.h(null,w)}})
return A.i($async$agw,w)},
a3C(d){return this.czY(d)},
czY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3C=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ar5(s.d,4),$async$a3C)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_doc_share_qr.png"),$async$a3C)
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
return A.i($async$a3C,w)},
gb_O(){var x,w=this.a
if(w.e!==D.Kb)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
ac_(d){return this.bP4(d)},
bP4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ac_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_O()
if(t==null){x=1
break}x=3
return A.b(A.fP(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$ac_)
case 3:if(d.e!=null)d.K(y.q).f.T(D.fD9)
case 1:return A.h(v,w)}})
return A.i($async$ac_,w)},
agx(){var x=0,w=A.j(y.H),v=this,u
var $async$agx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WW(),$async$agx)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agx,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3h(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kb&&i!==D.V1&&i!==D.B3
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kb||t===D.V1||t===D.B3?l:A.aH(l,l,l,l,C.lI,l,l,l,m.gb2X(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qt(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcaw(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kb){t=C.az.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.N,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gceL(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c7W,D.h9a,new B.dgS(m,d),l)],p))}if(m.a.e===D.Kb&&m.gb_O()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c4e,D.h5K,new B.dgT(m,d),l)],p))
if(m.a.e===D.B3){x=(m.w?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gz:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}if(m.a.e===D.V1){x=(m.r?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gz:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l),C.af,A.de(D.c_C,l,D.hck,m.gcAl(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pc(i,A.c6(v,w,new A.C(C.ae,A.w(A.a([A.E(A.p(l,A.w(q,C.l,l,C.bb,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.em(I.E4,l,C.Xs,new B.dgU(m,d),l),1),C.ar,A.E(A.de(C.Aq,l,C.adz,new B.dgV(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.N,new A.a4(1/0,l,A.bH(U.BH,l,m.gb2X(),A.bp(C.aO,l,l,l,l,C.ht,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dgW(),y.C)}}
B.aeo.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cc(A.w(A.a([w,C.aN,A.p(x,A.qt(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bH(C.BI,x,new B.dgf(d),x)],u),x,x,C.nM,v,x,x,x,x,D.fZn,x)}}
B.a07.prototype={
R(){return new B.aCp(A.A9(C.zk,C.oC,C.vQ))}}
B.aCp.prototype={
t(){this.d.t()
this.a2()},
aAy(d){var x,w,v,u,t
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
return A.c6(A.eS(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h6h,x,x,x,1,x,!0),C.v,A.A8(this.d,C.c0,this.gaAx()),x,!1,!1,x,x)}}
B.a0e.prototype={
R(){return new B.aCv(A.A9(C.zk,C.oC,C.vQ))},
gd6(){return this.c}}
B.aCv.prototype={
c60(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aiC(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N9("text/plain"),$async$aiC)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fE4)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aiC,w)},
acR(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hSM(p,!0),$async$acR)
case 3:t=e
p=t==null
s=B.a95(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fAA)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acR,w)},
t(){this.d.t()
this.a2()},
aAy(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c60(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.atK,v,v,v,w.gbUV(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a5u,v,v,v,w.gcpY(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aH(v,v,v,v,A.V(w.f?C.rp:R.QJ,v,v,v,v,v),v,v,v,new B.dh_(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hdg,v,v,v,1,v,!0)
u=A.A8(w.d,C.c0,w.gaAx())
x=A.m(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ac,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eNZ],s),v),v,!1,!1,v,v)}}
B.bhO.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pO
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pO:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2I,A.A(A.a([u,C.bc,A.E(A.w(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eL,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aby.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PV.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Za.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PU.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gc.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cvi.prototype={}
B.Gb.prototype={}
B.abx.prototype={}
B.awK.prototype={}
B.Zb.prototype={}
var z=a.updateTypes(["az<~>()","P(jU)","n(jU)","WN(Z)","~()","a0a(Z)","G(G,jU)","Rb(Z)","~(lJ)","cp(Gb)","az<jU?>(@)","WL(Z)","WP(Z)","C(jU)","jU(@)","a9<n,@>(jU)","a09(Z)","WM(Z)","a0b(Z)","a08(Z)","a0d(Z)","aeo(Z)","ai<jU>()","a0e(Z)","aeq(Z,G)","a07(Z)","a9<n,aG>(jU)","cp(Za)","cp(abx)","az<cp>(Gb)"])
B.cve.prototype={
$1(d){var x=this.a
x.x=D.aTz
x.y.I(0,D.aTz)},
$S:74}
B.cvf.prototype={
$1(d){var x=this.a
x.x=D.aTy
x.y.I(0,D.aTy)},
$S:74}
B.cvg.prototype={
$1(d){var x=this.a
x.ajZ(A.a40(d.data)).bD(new B.cvd(x),y.b)},
$S:74}
B.cvd.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cvh.prototype={
$1(d){},
$S:74}
B.cvk.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.icg(d.channel))},
$S:18}
B.cvl.prototype={
$1(d){},
$S:18}
B.cvm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iwd(w.iceConnectionState)
x.cx=w
if($.hu7())switch(w.a){case 0:x.cy=D.aTE
break
case 1:x.cy=D.aTF
break
case 3:x.cy=D.aTG
break
case 5:x.cy=D.aTC
break
case 6:x.cy=D.aTD
break
case 7:x.cy=D.abc
break
default:break}},
$S:107}
B.cvn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iwe(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.cvo.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iH_(w.signalingState)},
$S:107}
B.cvp.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iF6(w.connectionState)},
$S:107}
B.cvq.prototype={
$1(d){},
$S:107}
B.cvr.prototype={
$1(d){},
$S:18}
B.fGm.prototype={
$1(d){var x=y.F.a(new A.qK([],[]).o9(d.target.result,!1)),w=C.x2.q(x.objectStoreNames,"blobs")
if(!w)C.x_.GL(x,"blobs")},
$S:181}
B.h68.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xG.fl(this.b)
$.eX.mN()
this.c.$1(d)},
$S:452}
B.h6a.prototype={
$1(d){return this.a.$1(B.ilF(this.b,this.c))},
$S:33}
B.h69.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h67.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h6n.prototype={
$1(d){var x=this
return B.hGE(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h6o.prototype={
$1(d){var x=this
return B.hGE(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJ2.prototype={
$1(d){var x=this
return B.cgR(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dgy.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dgv.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgR(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dgx.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgR(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dgw.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgR(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dgA.prototype={
$4(d,e,f,g){var x=null
return A.kf(A.A(A.a([A.aH(x,x,x,x,D.bZd,x,x,x,new B.dgz(d),x,x,x,x,x,x),A.E(A.FY(D.Tm,!0,x,!1,C.a4z,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.Tm,x,g,C.apn,0,e,f)},
$C:"$4",
$R:4,
$S:422}
B.dgz.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fL1.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f3,y.m).w,t=this.a,s=t?C.iY:C.c,r=A.m(28),q=A.p(v,D.bBx,C.f,v,v,D.bap,v,v,v,v,D.ap8,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c2G,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.C(C.Dj,A.w(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.au_,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dx,new B.fL_(d),v),1),C.ar,A.E(A.bH(D.h4I,v,new B.fL0(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HI,v,v,v,v),v)},
$S:62}
B.fL_.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fL0.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fBK)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aF7(v,x))},
$S:0}
B.fLv.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f3,y.m).w,u=x.a,t=u?C.iY:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bBn,C.f,w,w,D.bbU,w,w,w,w,D.ap8,w,w,1/0),new A.C(C.Dj,A.w(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hpH(u,"Organization name",C.Ih,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hpH(u,"Access code",C.mB,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hpH(u,"Member password",C.E3,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bH(D.hdn,w,new B.fLu(r,q,p,d),A.bp(C.az,w,w,w,w,C.ht,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HI,w,w,w,w),w)},
$S:62}
B.fLu.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fBP)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aIo(u,x,w))},
$S:0}
B.cgI.prototype={
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
return A.b(A.wb(p,null).d7(0,C.a1C),$async$$1)
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
B.cgO.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgP.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgQ.prototype={
$1(d){return d.b},
$S:z+2}
B.cgK.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgL.prototype={
$1(d){return d.b},
$S:z+2}
B.cgJ.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cgM.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgN.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h6l.prototype={
$1(d){return new B.WL(this.a,null)},
$S:z+11}
B.h6m.prototype={
$1(d){return new B.WP(this.a,this.b,this.c,null)},
$S:z+12}
B.e3d.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e4m.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e4n.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e4o.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e4l(x,d))},
$S:2}
B.e4l.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4p.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4q.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e4r.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e4s.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4t.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e4u.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4x.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*14)),e)},
$S:92}
B.e4v.prototype={
$1(d){var x=this.a
return x.f?null:x.a0w()},
$S:2}
B.e4w.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mU(D.TE))s=C.vB
else s=C.a.Y(s,"video/")||d.mU(D.ns)?C.rv:D.asj
x=this.b.a
w=y.p
return new A.C(C.jY,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasM(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e3e.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e3f.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgS.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:101}
B.cgT.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:101}
B.h7m.prototype={
$2(d,e){return e===this.a},
$S:245}
B.fDj.prototype={
$1(d){return J.k(d)},
$S:15}
B.fJe.prototype={
$1(d){var x=this.b
B.ijz(C.I5.ga8t(this.a)).bD(x.gCz(x),y.H)},
$S:132}
B.fJf.prototype={
$1(d){return this.a.dh(0,null)},
$S:132}
B.fJg.prototype={
$0(){return null},
$S:12}
B.ch6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJh.prototype={
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
B.fNA.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fHq.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHr.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.chb.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mU(D.ns)},
$S:z+1}
B.hbF.prototype={
$1(d){return new B.a09(this.a,null)},
$S:z+16}
B.dgu.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fP()},
$S:7}
B.dgs.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.dgt.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4k.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2O()},
$S:10}
B.e3I.prototype={
$0(){var x=J.bJK(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3J.prototype={
$0(){var x=J.bJK(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3h.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e3g(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHK(this.c)}},
$S:0}
B.e3g.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3i.prototype={
$0(){var x=J.bJK(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3n.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e3m(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHK(this.c)}},
$S:0}
B.e3m.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e48.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e49.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e3F.prototype={
$1(d){return new B.WM(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e3C.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J9(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WQ(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uz(),$async$$0)
case 5:s=J.a1(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2Z(s.gJ(t)),$async$$0)
case 8:case 7:r.ir(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3l.prototype={
$1(d){this.a.aeg(d,"No files selected.","Added")},
$S:452}
B.e3N.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e3M(),A.U(x).k("O<1,n>")))},
$S:0}
B.e3M.prototype={
$1(d){return d.a},
$S:z+2}
B.e3r.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y2.cq().d35(C.a3v,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
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
$.an.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ir("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.ir("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asa(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cx(l)){o.ir("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uz(),$async$$0)
case 9:o.ir("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e45.prototype={
$1(d){return new B.Rb(this.a.a.c,this.b,null)},
$S:z+7}
B.e46.prototype={
$1(d){return new B.a0b(this.a.a.c,this.b,null)},
$S:z+18}
B.e47.prototype={
$1(d){return new B.a08(this.a.a.c,this.b,null)},
$S:z+19}
B.e3D.prototype={
$1(d){return new B.Rb(this.a.a.c,this.b,null)},
$S:z+7}
B.e3E.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e3Z.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J9(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a97(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ir("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cwg(),$async$$0)
case 5:x=6
return A.b(p.uz(),$async$$0)
case 6:r=A.U(t).k("O<1,n>")
r=new A.O(new A.O(t,new B.e3V(p),r),new B.e3W(),r.k("O<aj.E,n>")).c0(0,new B.e3X())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).ca(A.e7(new B.e3Y(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pS(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WW(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3V.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e3U(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e3U.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3W.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e3X.prototype={
$1(d){return d.length!==0},
$S:3}
B.e3Y.prototype={
$1(d){var x=this.a
return new B.a0d(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e4_.prototype={
$1(d){return d.a},
$S:z+2}
B.e40.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3T.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasM(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mU(D.ns)?C.tW:C.of
p=!x||p.mU(D.ns)?"Play video":"View"
return new A.bP(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lu,v,v,C.m),C.bm,A.bo(!0,new A.C(C.De,A.w(A.a([q,o,t,C.aB,B.a0c(!1,u,!1,w,p,new B.e3O(d),v),B.a0c(!1,u,!1,C.jI,"Share via QR",new B.e3P(d),"Letters/numbers QR code"),B.a0c(!1,u,!1,D.a4E,"Send to their Code",new B.e3Q(d),"Enter someone else's personal code"),B.a0c(!1,u,!1,C.hP,"Download / save",new B.e3R(d),v),C.aj,B.a0c(!1,u,!0,C.eq,"Delete",new B.e3S(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:745}
B.e3O.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e3P.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e3Q.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e3R.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e3S.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e3o.prototype={
$1(d){return d.a},
$S:z+2}
B.e3p.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3q.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a99(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HF(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pS(s.c,s.f),$async$$0)
case 4:u.ir(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3k.prototype={
$1(d){var x=this.a
x.uA(new B.e3j(x,d,this.b),"Preparing\u2026")},
$S:452}
B.e3j.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ir("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WQ(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cx(s)){t.ir("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bIE(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ir("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3G.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e3H.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aQ(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hke(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3A.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HD(new B.e3w(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ir("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e3x(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e3y(s))
case 5:x=8
return A.b(r.b.ie(0,C.HD,new B.e3z()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.ir("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uz(),$async$$0)
case 9:s.ir("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3w.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3t(x,d,e))},
$S:184}
B.e3t.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3x.prototype={
$1(d){return new B.aeo(this.a.a,null)},
$S:z+21}
B.e3y.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e3z.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e3B.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JD(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8Y(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b5k(B.JD(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asa(new B.e3u(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cx(r)){if(B.hkd(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ir(q)
x=1
break}x=10
return A.b(s.uz(),$async$$0)
case 10:o=J.cJ(r)
p=o.eT(r,new B.e3v()).gJ(0)
s.ir(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3u.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3s(x,d,e))},
$S:184}
B.e3s.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3v.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mU(D.ns)},
$S:z+1}
B.e3L.prototype={
$1(d){return new B.a0e(this.a.a.c,null)},
$S:z+23}
B.e3K.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3_(u.a.c,v.b),$async$$0)
case 2:t.ir(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e44.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.o(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lu,x,x,C.m),C.bm,A.bo(!0,new A.C(C.De,A.w(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a0c(!0,w,!1,C.mB,"My Code",new B.e41(d),"Your personal code & QR \u2014 others send docs to you"),B.a0c(!1,w,!1,D.a4E,"Send to their Code",new B.e42(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0c(!1,w,!1,W.Ai,"Import backup",new B.e43(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:745}
B.e41.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e42.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bIR()},
$S:0}
B.e43.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e4h.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JN(D.Tm,x,C.a4z,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d3(C.d.gG(D.Tm).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:725}
B.e4f.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4g.prototype={
$0(){this.a.akV()
return null},
$S:0}
B.e4i.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*10)),e)},
$S:92}
B.e4j.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeq(e,w,v,this.b,x.e,x.ceM(w),new B.e4b(x,w),new B.e4c(x,v,w),new B.e4d(x,w),new B.e4e(x,w),null)},
$S:z+24}
B.e4b.prototype={
$0(){this.a.ai7(this.b)
return null},
$S:0}
B.e4c.prototype={
$0(){var x=this.a
return x.l(new B.e4a(x,this.b,this.c))},
$S:0}
B.e4a.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e4d.prototype={
$0(){this.a.Pg(this.b)
return null},
$S:0}
B.e4e.prototype={
$0(){this.a.akI(this.b)
return null},
$S:0}
B.dgq.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*18)),e)},
$S:92}
B.dgr.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:112}
B.dgO.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*14)),e)},
$S:92}
B.dgN.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.dgK.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dgL.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dgM.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dgI.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h7(w,C.z,x,new B.dgG(this.a),C.hf,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dgH(this.a))
return C.bK},
$S:151}
B.dgG.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgE(this.a))
return C.bK},
$S:201}
B.dgE.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgB(x))},
$S:7}
B.dgB.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgH.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgD(x))},
$S:7}
B.dgD.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgJ.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgF(this.a))
return C.bK},
$S:201}
B.dgF.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgC(x))},
$S:7}
B.dgC.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgn.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgm(x,d))},
$S:1818}
B.dgm.prototype={
$0(){return this.a.f=this.b===C.wb},
$S:0}
B.dgo.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgl(x,d))},
$S:7}
B.dgl.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dgp.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgk(x,d))},
$S:7}
B.dgk.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dgg.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dgh.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dgi.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dgj.prototype={
$1(d){return this.a.d.Oa(0,A.du(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dh0.prototype={
$0(){var x=this.a.a
return B.t7(x.c,x.d)},
$S:1819}
B.dh1.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dh2.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dh3.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dh4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dh5.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dh7.prototype={
$0(){var x=this.a
x.l(new B.dh6(x))},
$S:0}
B.dh6.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qx(0)},
$S:0}
B.dgX.prototype={
$1(d){return this.a.Sd(this.b)},
$S:10}
B.dgY.prototype={
$1(d){return this.a.Sc(this.b)},
$S:10}
B.dgP.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dgQ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dgR.prototype={
$1(d){return D.hPf},
$S:z+25}
B.dgW.prototype={
$2(d,e){if(d)B.WW()},
$S:133}
B.dgS.prototype={
$0(){return this.a.ac2(this.b)},
$S:0}
B.dgT.prototype={
$0(){return this.a.ac_(this.b)},
$S:0}
B.dgU.prototype={
$0(){return this.a.agw(this.b)},
$S:0}
B.dgV.prototype={
$0(){return this.a.a3C(this.b)},
$S:0}
B.dgf.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dh_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qB(),$async$$0)
case 2:u.l(new B.dgZ(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dgZ.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.chd.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mU(D.ns)},
$S:z+1}
B.che.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.chc.prototype={
$2(d,e){return this.bpe(d,e)},
bpe(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WX(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1820}
B.fNc.prototype={
$1(d){if(d===D.abb&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fNd.prototype={
$0(){},
$S:12}
B.fNO.prototype={
bqS(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fAk(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hBG(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqS(d,e)},
$S:557}
B.fNN.prototype={
$1(d){var x=this
d.b=new B.fNM(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fNM.prototype={
$1(d){return this.bqR(d)},
bqR(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b30(n,m),$async$$1)
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
return A.b(B.fAk(l,n.b,m,n.c,s.d),$async$$1)
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
$.an.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a96(m),$async$$1)
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
x(v=B.aCs.prototype,"gcmI","RN",0)
x(v,"gcnD","Kn",0)
x(v,"gcn7","z0",0)
x(v=B.aGw.prototype,"gceG","agu",0)
x(v,"gceH","a0v",0)
x(v,"gcCV","akp",0)
x(v=B.aGz.prototype,"gceI","a0w",0)
x(v,"gcCW","a4_",0)
x(B.aGx.prototype,"gceJ","agv",0)
x(B.aCr.prototype,"gceO","ceP",4)
x(v=B.aGy.prototype,"gcn8","a1Q",0)
x(v,"gcBr","cBs",4)
x(v,"gb6r","aC9",0)
x(v,"gcEq","akP",0)
x(v,"gbVr","Ze",0)
x(v,"gceN","Fe",0)
x(B.aCt.prototype,"gbah","a3Z",0)
x(B.aCq.prototype,"gceQ","a0x",0)
x(v=B.aCw.prototype,"gb57","clg",4)
x(v,"gceK","agy",0)
x(v=B.aCu.prototype,"gcAl","a3I",0)
x(v,"gb2X","agx",0)
w(B.aCp.prototype,"gaAx","aAy",8)
x(v=B.aCv.prototype,"gcpY","aiC",0)
x(v,"gbUV","acR",0)
w(v,"gaAx","aAy",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aG,[B.cvi,B.abx,B.awK,B.aF7,B.aIo,B.jU,B.ae6,B.bAk,B.Gb,B.Zb])
w(B.cvj,B.cvi)
w(B.b8b,B.abx)
x(A.hp,[B.cve,B.cvf,B.cvg,B.cvd,B.cvh,B.cvk,B.cvl,B.cvm,B.cvn,B.cvo,B.cvp,B.cvq,B.cvr,B.fGm,B.h68,B.h6a,B.h69,B.h6n,B.h6o,B.fJ2,B.dgv,B.dgx,B.dgw,B.dgA,B.fL1,B.fLv,B.cgI,B.cgP,B.cgQ,B.cgL,B.cgJ,B.cgM,B.cgN,B.h6l,B.h6m,B.e4o,B.e4x,B.e4v,B.e4w,B.fDj,B.fJe,B.fJf,B.ch6,B.fJh,B.fNA,B.fHq,B.fHr,B.chb,B.hbF,B.dgu,B.dgs,B.e4k,B.e3g,B.e3m,B.e3F,B.e3l,B.e3M,B.e45,B.e46,B.e47,B.e3D,B.e3V,B.e3U,B.e3W,B.e3X,B.e3Y,B.e4_,B.e40,B.e3T,B.e3o,B.e3p,B.e3k,B.e3G,B.e3x,B.e3v,B.e3L,B.e44,B.e4h,B.e4i,B.dgq,B.dgr,B.dgO,B.dgN,B.dgI,B.dgG,B.dgE,B.dgH,B.dgJ,B.dgF,B.dgn,B.dgo,B.dgp,B.dgj,B.dgX,B.dgY,B.dgR,B.chd,B.che,B.fNc,B.fNN,B.fNM])
w(B.b8c,B.awK)
x(A.iV,[B.h67,B.dgy,B.dgz,B.fL_,B.fL0,B.fLu,B.e3d,B.e4m,B.e4n,B.e4l,B.e4p,B.e4q,B.e4r,B.e4s,B.e4t,B.e4u,B.e3e,B.e3f,B.fJg,B.dgt,B.e3I,B.e3J,B.e3h,B.e3i,B.e3n,B.e48,B.e49,B.e3C,B.e3N,B.e3r,B.e3E,B.e3Z,B.e3O,B.e3P,B.e3Q,B.e3R,B.e3S,B.e3q,B.e3j,B.e3H,B.e3A,B.e3t,B.e3y,B.e3z,B.e3B,B.e3s,B.e3K,B.e41,B.e42,B.e43,B.e4f,B.e4g,B.e4b,B.e4c,B.e4a,B.e4d,B.e4e,B.dgK,B.dgL,B.dgM,B.dgB,B.dgD,B.dgC,B.dgm,B.dgl,B.dgk,B.dgg,B.dgh,B.dgi,B.dh0,B.dh1,B.dh2,B.dh3,B.dh4,B.dh5,B.dh7,B.dh6,B.dgP,B.dgQ,B.dgS,B.dgT,B.dgU,B.dgV,B.dgf,B.dh_,B.dgZ,B.fNd])
x(A.lk,[B.aep,B.OM,B.aby,B.PV,B.Za,B.PU,B.Gc])
x(A.af,[B.a0a,B.WL,B.WP,B.WM,B.a09,B.WN,B.a0b,B.a08,B.Rb,B.a0d,B.a07,B.a0e])
x(A.ah,[B.aCs,B.aGw,B.aGz,B.aGx,B.aCr,B.aGy,B.aCt,B.aCq,B.aCw,B.aCu,B.aCp,B.aCv])
x(A.aw,[B.aeT,B.aCo,B.bhN,B.aeq,B.aeo,B.bhO])
x(A.iW,[B.cgO,B.cgK,B.cgS,B.cgT,B.h7m,B.e3w,B.e3u,B.e4j,B.dgW,B.chc,B.fNO])
x(A.jn,[B.bni,B.bzX])})()
A.je(b.typeUniverse,JSON.parse('{"b8b":{"abx":[]},"b8c":{"awK":[]},"a0a":{"af":[],"x":[]},"aCs":{"ah":["a0a"]},"aeT":{"aw":[],"x":[]},"WL":{"af":[],"x":[]},"WP":{"af":[],"x":[]},"aGw":{"ah":["WL"]},"aGz":{"ah":["WP"]},"bni":{"jn":[]},"WM":{"af":[],"x":[]},"aGx":{"ah":["WM"]},"a09":{"af":[],"x":[]},"WN":{"af":[],"x":[]},"aeq":{"aw":[],"x":[]},"a0b":{"af":[],"x":[]},"a08":{"af":[],"x":[]},"Rb":{"af":[],"x":[]},"a0d":{"af":[],"x":[]},"aeo":{"aw":[],"x":[]},"a07":{"af":[],"x":[]},"a0e":{"af":[],"x":[]},"aCr":{"ah":["a09"]},"bzX":{"jn":[]},"aGy":{"ah":["WN"]},"aCo":{"aw":[],"x":[]},"bhN":{"aw":[],"x":[]},"aCt":{"ah":["a0b"]},"aCq":{"ah":["a08"]},"aCw":{"ah":["Rb"]},"aCu":{"ah":["a0d"]},"aCp":{"ah":["a07"]},"aCv":{"ah":["a0e"]},"bhO":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mV"),k:x("N7()"),o:x("bn<n,n>"),F:x("rJ"),g:x("az<jU?>"),x:x("az<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bl>"),Y:x("N<a9<n,P>>"),t:x("N<a9<n,@>>"),r:x("N<jU>"),w:x("N<+file,name(me,n)>"),u:x("N<d3>"),s:x("N<n>"),E:x("N<jn>"),a:x("N<dF>"),p:x("N<x>"),Z:x("N<G>"),G:x("bl"),A:x("cB<ah<af>>"),n:x("ai<jU>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bw<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("im"),e:x("iL4"),af:x("Fn"),U:x("jU"),b:x("cp"),C:x("aG"),aK:x("wW"),ab:x("Gb"),br:x("awK"),v:x("Zb"),N:x("n"),X:x("bq<H>"),Q:x("mq"),D:x("dF"),aw:x("bg<n>"),cd:x("X<a9<n,@>>"),c7:x("x"),ch:x("cb<ai<jU>>"),aW:x("cb<dF?>"),aY:x("cb<~>"),cx:x("aep"),b1:x("bm<ai<jU>>"),cf:x("bm<dF?>"),d4:x("bm<~>"),c4:x("aF7"),bG:x("aIo"),q:x("l2"),B:x("q5<Gb>"),c6:x("q5<aby>"),y:x("P"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bl?"),_:x("ai<jU>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jU?"),R:x("aG?"),c:x("Zb?"),d:x("+answerQr,transfer(n,az<ai<jU>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,OM,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dF?"),cm:x("ae6?"),bk:x("aF7?"),ag:x("aIo?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8N=new A.ax(C.az,2,C.r,-1)
D.ccC=new A.a6(C.a5,C.a9,C.w,C.a6C,null,null)
D.bap=new A.o(null,null,null,C.n0,null,D.ccC,C.m)
D.bbU=new A.o(null,null,null,C.n0,null,E.J3,C.m)
D.ahQ=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajl=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akn=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amc=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h_i=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hel=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.drO=x([D.h_i,C.aj,D.hel],y.p)
D.bBd=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.drO,null)
D.hiU=new A.D("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h3U=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.dKa=x([D.hiU,C.aj,D.h3U],y.p)
D.bBn=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dKa,null)
D.hf_=new A.D("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h7U=new A.D("Enter the access code and password from your organization.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.dHH=x([D.hf_,C.aj,D.h7U],y.p)
D.bBx=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dHH,null)
D.bHP=new A.R(16,10,16,28)
D.bJc=new A.R(20,0,20,16)
D.bJJ=new A.R(20,8,20,16)
D.ap8=new A.R(24,22,24,20)
D.a4E=new A.a_(63394,"MaterialIcons",!1)
D.asj=new A.a_(63515,"MaterialIcons",!1)
D.bX7=new A.a_(983813,"MaterialIcons",!1)
D.bUe=new A.a_(62867,"MaterialIcons",!1)
D.bY7=new A.ae(D.bUe,44,C.c,null,null,null)
D.bZd=new A.ae(C.kl,null,C.ab,null,null,null)
D.c_C=new A.ae(C.jJ,18,null,null,null,null)
D.c1t=new A.ae(D.a4E,26,C.c,null,null,null)
D.c24=new A.ae(C.DV,null,null,null,null,null)
D.c2G=new A.ae(C.E0,null,null,null,null,null)
D.c3T=new A.ae(A_.a4O,null,null,null,null,null)
D.c4e=new A.ae(C.i4,16,null,null,null,null)
D.c7W=new A.ae(C.tV,16,null,null,null,null)
D.bYp=new A.ae(C.mB,null,null,null,null,null)
D.c8O=new A.ef(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3d=new A.ae(C.Ih,null,null,null,null,null)
D.c8T=new A.ef(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c3d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYL=new A.ae(C.E3,null,null,null,null,null)
D.c93=new A.ef(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cZb=x([C.fz,C.b5,C.az],y.O)
D.cez=new A.a6(C.aw,C.aD,C.w,D.cZb,null,null)
D.cYx=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Tm=x([C.fz,C.az],y.O)
D.TE=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ns=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dBq=x([C.nb,C.az],y.O)
D.eAc={iceServers:0}
D.aO4={urls:0}
D.dO6=new A.bn(D.aO4,["stun:stun.l.google.com:19302"],y.o)
D.dO5=new A.bn(D.aO4,["stun:stun1.l.google.com:19302"],y.o)
D.dgi=x([D.dO6,D.dO5],A.as("N<a9<n,n>>"))
D.dNc=new A.bn(D.eAc,[D.dgi],A.as("bn<n,@>"))
D.Kb=new B.OM(0,"lanDirect")
D.V0=new B.OM(1,"cloudStash")
D.e3f=new B.OM(2,"inlineInstant")
D.V1=new B.OM(3,"webrtcLink")
D.B3=new B.OM(4,"videoCloud")
D.hek=new A.D("Receive file",null,C.nD,null,null,null,null,null,null,null,null,null)
D.cO4=x([E.au8,C.aa,D.hek],y.p)
D.fsf=new A.c0(C.aK,C.bb,C.h,C.l,null,C.p,null,0,D.cO4,null)
D.eHG=new A.C(C.cq,D.fsf,null)
D.fQx=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.Jy,null,null,null)
D.h_V=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fQx,null,C.K,null,null,null,null,null,null,null)
D.eGQ=new A.C(C.zC,D.h_V,null)
D.bgu=new A.cn(C.z,null,null,D.eGQ,null)
D.eNZ=new A.cR(0,null,0,28,null,null,D.bgu,null)
D.eOi=new B.aby(0,"RTCDataChannelConnecting")
D.aTy=new B.aby(1,"RTCDataChannelOpen")
D.aTz=new B.aby(3,"RTCDataChannelClosed")
D.eOj=new B.Gc(0,"RTCIceConnectionStateNew")
D.eOk=new B.Gc(1,"RTCIceConnectionStateChecking")
D.eOl=new B.Gc(2,"RTCIceConnectionStateCompleted")
D.eOm=new B.Gc(3,"RTCIceConnectionStateConnected")
D.eOn=new B.Gc(4,"RTCIceConnectionStateCount")
D.eOo=new B.Gc(5,"RTCIceConnectionStateFailed")
D.eOp=new B.Gc(6,"RTCIceConnectionStateDisconnected")
D.aTA=new B.Gc(7,"RTCIceConnectionStateClosed")
D.aTB=new B.Za(0,"RTCIceGatheringStateNew")
D.eOq=new B.Za(1,"RTCIceGatheringStateGathering")
D.abb=new B.Za(2,"RTCIceGatheringStateComplete")
D.abc=new B.PU(0,"RTCPeerConnectionStateClosed")
D.aTC=new B.PU(1,"RTCPeerConnectionStateFailed")
D.aTD=new B.PU(2,"RTCPeerConnectionStateDisconnected")
D.aTE=new B.PU(3,"RTCPeerConnectionStateNew")
D.aTF=new B.PU(4,"RTCPeerConnectionStateConnecting")
D.aTG=new B.PU(5,"RTCPeerConnectionStateConnected")
D.eOr=new B.PV(0,"RTCSignalingStateStable")
D.eOs=new B.PV(1,"RTCSignalingStateHaveLocalOffer")
D.eOt=new B.PV(2,"RTCSignalingStateHaveRemoteOffer")
D.eOu=new B.PV(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eOv=new B.PV(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTH=new B.PV(5,"RTCSignalingStateClosed")
D.fxo=new A.av(160,48)
D.bhK=new A.fs(2,null,null,null,null,C.az,null,null,null,null)
D.fyW=new A.a4(16,16,D.bhK,null)
D.h3e=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fAp=new A.b3(D.h3e,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.haY=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fAt=new A.b3(D.haY,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjY=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fAA=new A.b3(D.hjY,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h2O=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fB_=new A.b3(D.h2O,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hfb=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWU=new A.b3(D.hfb,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgF=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fBt=new A.b3(D.hgF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hls=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBK=new A.b3(D.hls,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjn=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBP=new A.b3(D.hjn,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkD=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fCC=new A.b3(D.hkD,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1o=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fD9=new A.b3(D.h1o,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hcT=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fDu=new A.b3(D.hcT,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5z=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fE0=new A.b3(D.h5z,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlx=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fE4=new A.b3(D.hlx,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1E=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fEa=new A.b3(D.h1E,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h0h=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fEp=new A.b3(D.h0h,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fXW=new A.D("NGMY DOC SHARE",null,C.aYk,null,null,null,null,null,null,null,null,null)
D.fZn=new A.D("Show this to sender",null,C.iW,null,null,null,null,null,null,null,null,null)
D.h_q=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h4k=new A.D("Organization settings",null,C.cJ,null,null,null,null,null,null,null,null,null)
D.h4I=new A.D("Sign in",null,C.ch,null,null,null,null,null,null,null,null,null)
D.h5K=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h6h=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h9a=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hc0=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.hck=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcF=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hdg=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hdn=new A.D("Create portal",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hdM=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hha=new A.D("Share files & videos\nwith a scan.",null,C.aYn,null,null,null,null,null,null,null,null,null)
D.hhu=new A.D("Add files",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hPf=new B.a07(null)
D.aeB=new B.aep(0,"docShare")
D.aeC=new B.aep(1,"gate")
D.Y5=new B.aep(2,"gateNoIndividual")})();(function staticFields(){$.aRj=null
$.fxR=function(){var x=y.N
return A.S(x,x)}()
$.Hs=A.S(y.N,y.D)
$.aiy=A.S(y.N,A.as("me"))
$.SC=A.S(y.N,y.D)
$.fyx=A.S(y.N,A.as("ae6"))
$.ch5=A.S(y.S,A.as("bAk"))
$.hBF=1
$.irO=null
$.irN=null
$.iiS=null
$.hpT=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iLA","hUN",()=>new B.cvj())
x($,"iJt","hu7",()=>C.a.q(A.by(A.by(A.by(A.HX(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["xePlYBqLiLgBacS+2IuR9ffNS1c="]=a.current})($__dart_deferred_initializers__);