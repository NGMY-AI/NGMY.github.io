((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cvh:function cvh(){},
icd(d){var x=null,w=new B.b89(d,D.eOl,new A.q5(x,x,y.c6),new A.q5(x,x,y.B))
w.bEx(d)
return w},
b89:function b89(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cvc:function cvc(d){this.a=d},
cvd:function cvd(d){this.a=d},
cve:function cve(d){this.a=d},
cvb:function cvb(d){this.a=d},
cvf:function cvf(d){this.a=d},
ice(d,e){var x=y.N
x=new B.b8a(d,e,A.S(x,y.e),A.S(x,y.z))
x.bEy(d,e)
return x},
b8a:function b8a(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cvi:function cvi(d){this.a=d},
cvj:function cvj(d){this.a=d},
cvk:function cvk(d){this.a=d},
cvl:function cvl(d){this.a=d},
cvm:function cvm(d){this.a=d},
cvn:function cvn(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvp:function cvp(d){this.a=d},
hpr(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bd("IndexedDB not available"))
return C.xE.Hj(x,"ngmy_doc_share_v1",new B.fGk(),1)},
ij3(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eB(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.vZ(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cK.aK(d)
return x}catch(w){return v}return v},
SR(d,e){return B.iyV(d,e)},
iyV(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRi
x=7
return A.b(o==null?$.aRi=B.hpr():o,$async$SR)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mA(s,"blobs","readwrite")
C.iU.mk(J.mz(q,"blobs"),r,d)
x=8
return A.b(J.oS(q),$async$SR)
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
SQ(d){return B.iyU(d)},
iyU(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRi
x=7
return A.b(o==null?$.aRi=B.hpr():o,$async$SQ)
case 7:s=f
r=J.mA(s,"blobs","readonly")
x=8
return A.b(C.iU.y0(J.mz(r,"blobs"),d),$async$SQ)
case 8:q=f
x=9
return A.b(J.oS(r),$async$SQ)
case 9:o=B.ij3(q)
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
ajd(d){return B.iyT(d)},
iyT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRi
x=7
return A.b(p==null?$.aRi=B.hpr():p,$async$ajd)
case 7:s=f
r=J.mA(s,"blobs","readwrite")
C.iU.GP(J.mz(r,"blobs"),d)
x=8
return A.b(J.oS(r),$async$ajd)
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
fGk:function fGk(){},
ilB(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btb(w,v))}return u},
hRG(d,e){var x,w={},v=A.b_5("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h66(w,v,e)
C.xG.x0(v,"change",new B.h68(w,v,!1))
C.xG.x0(v,"cancel",new B.h67(w))
$.eX.mL()
v.click()
A.bO(C.and,new B.h65(w),y.H)},
h66:function h66(d,e,f){this.a=d
this.b=e
this.c=f},
h68:function h68(d,e,f){this.a=d
this.b=e
this.c=f},
h67:function h67(d){this.a=d},
h65:function h65(d){this.a=d},
E3(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E3=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVh()?3:4
break
case 3:x=5
return A.b(B.hM8(e,d,s,!0,!1,f,g,h,!1,i),$async$E3)
case 5:x=1
break
case 4:x=6
return A.b(B.Ss(d,s,f,g,h,i),$async$E3)
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
return A.b(B.JF(s,d),$async$E3)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fBB(s,d),$async$E3)
case 14:x=12
return A.b(r.hM8(q,p,o,n,m,l,k,j,a1,i),$async$E3)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).ca(A.e7(new B.h6l(s,i,d,f,g,h),!1,null,y.H)),$async$E3)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).ca(A.e7(new B.h6m(s,i,d,f,g,h),!1,null,y.H)),$async$E3)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E3,w)},
Ss(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Ss=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2R(e),$async$Ss)
case 3:u=k
x=4
return A.b(B.as1(d,e,!1),$async$Ss)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JF(e,d),$async$Ss)
case 7:if(k){v=D.aeC
x=1
break}x=8
return A.b(B.WO(e),$async$Ss)
case 8:v=t?D.Y5:D.aeD
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2P(d,e)){v=D.aeC
x=1
break}x=11
return A.b(B.WO(e),$async$Ss)
case 11:v=t?D.Y5:D.aeD
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hk6(d,e)){v=D.aeC
x=1
break}x=14
return A.b(B.WO(e),$async$Ss)
case 14:v=D.Y5
x=1
break
case 13:v=t?D.Y5:D.aeD
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ss,w)},
fBB(d,e){var x=0,w=A.j(y.y),v
var $async$fBB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2P(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2R(d),$async$fBB)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBB,w)},
hM8(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).ca(A.e7(new B.fJ0(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hGC(d,e,f,g,h,i,j){return new B.a09(e,j,d,g,h,i,f,null)},
fKX(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fKX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fL_(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fKX)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKX,w)},
fLr(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fLr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fLt(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fLr)
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
return A.i($async$fLr,w)},
hpE(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fYF(d,e){var x=0,w=A.j(y.H),v
var $async$fYF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WO(e),$async$fYF)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e4()
case 1:return A.h(v,w)}})
return A.i($async$fYF,w)},
h6l:function h6l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h6m:function h6m(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aep:function aep(d,e){this.a=d
this.b=e},
fJ0:function fJ0(d,e,f,g,h,i,j,k,l){var _=this
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
dgw:function dgw(d,e){this.a=d
this.b=e},
dgt:function dgt(d){this.a=d},
dgv:function dgv(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgy:function dgy(){},
dgx:function dgx(d){this.a=d},
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
fL_:function fL_(d,e,f){this.a=d
this.b=e
this.c=f},
fKY:function fKY(d){this.a=d},
fKZ:function fKZ(d,e,f){this.a=d
this.b=e
this.c=f},
fLt:function fLt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLs:function fLs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgF(d,e,f,g,h){return B.i6W(d,e,f,g,h)},
i6W(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cgF=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dQ(d,new B.cgG(s,e,h,g,f,q),y.g),y.l),$async$cgF)
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
return A.i($async$cgF,w)},
b2M(d,e,f,g,h){return B.i6X(d,e,f,g,h)},
i6X(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2M=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axy("GET",d)
o=A.bJ8()
if(o==null)o=new A.Ih(A.a([],y.W))
x=7
return A.b(o.fc(0,s).d7(0,C.HE),$async$b2M)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Do(),$async$b2M)
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
return A.i($async$b2M,w)},
b2L(d){return B.i6U(d)},
i6U(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wa(d,null).d7(0,C.oU),$async$b2L)
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
return A.i($async$b2L,w)},
cgE(d){return B.i6V(d)},
i6V(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cgE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wa(d,null).d7(0,C.ra),$async$cgE)
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
return A.i($async$cgE,w)},
cgG:function cgG(d,e,f,g,h,i){var _=this
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
i71(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JD(C.a.aV(t,u.length))}return null},
i72(d){var x=B.JD(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i6Y(){var x,w=$.oO(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8V(d){return B.i6Z(d)},
i6Z(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.fb(d,null,!1,C.bN),$async$a8V)
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
return A.i($async$a8V,w)},
a8W(d,e){return B.i7_(d,e)},
i7_(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8W=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i0(d,e,!1,!1,C.cY,null),$async$a8W)
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
return A.i($async$a8W,w)},
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
return A.b(B.a8X(r),$async$Cw)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8V("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cw)
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
break}m=B.i6Y()
x=14
return A.b(B.a8X(m),$async$Cw)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8W("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
case 15:k=f
x=16
return A.b(B.a8W("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
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
a8X(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JD(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8V("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8X)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8X,w)},
a8Y(d,e,f,g){return B.i73(d,e,f,g)},
i73(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8Y=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JD(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8X(r),$async$a8Y)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cgM())>1048576||g.aR(d,new B.cgN())){v=B.FG(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a98("myCode",d,a0),$async$a8Y)
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
v=B.FG(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2U(u,g.gJ(d),a0),$async$a8Y)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oO().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dQ(d,new B.cgO(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2N(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8Y)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Y,w)},
FG(d,e,f,g,h){return B.i70(d,e,f,g,h)},
i70(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FG=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$FG)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cJ(a6)
k=l.cD(a6,0,new B.cgI())
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
a1=B.JH(a9,q)
a0=new A.Lw(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FG)
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
return A.b(new A.acB(a1.a,a4,"media",a1.d,a2).xY(m,n,new A.EW(!0,q.c)),$async$FG)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FG)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aU1(r),$async$FG)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dQ(a6,new B.cgJ(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2N(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FG)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aU1(r),$async$FG)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FG,w)},
b2N(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8V(t),$async$b2N)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cgH(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8W(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2N,w)},
OK(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OK=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8V("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OK)
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
return A.b(B.b2O(k,a0),$async$OK)
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
return A.b(B.b2T(h),$async$OK)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WV(g,a0),$async$OK)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cgK(),q),n)
d=A.B(new A.X(r,new B.cgL(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cV(d,0,A.dz(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8W("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OK)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OK,w)},
b2O(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2O=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iD4(k,j)
C.d.u(s,i)
x=5
return A.b(B.E1(l,m,"Received via My Code",t,e,i),$async$b2O)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aU1(s),$async$b2O)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2O,w)},
cgM:function cgM(){},
cgN:function cgN(){},
cgO:function cgO(){},
cgI:function cgI(){},
cgJ:function cgJ(){},
cgH:function cgH(){},
cgK:function cgK(){},
cgL:function cgL(){},
h6i(d,e){var x=0,w=A.j(y.H)
var $async$h6i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).ca(A.e7(new B.h6j(e),!1,null,y.H)),$async$h6i)
case 2:return A.h(null,w)}})
return A.i($async$h6i,w)},
bIC(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bIC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cx(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).ca(A.e7(new B.h6k(g,e,f),!1,null,y.y)),$async$bIC)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bIC,w)},
h6j:function h6j(d){this.a=d},
h6k:function h6k(d,e,f){this.a=d
this.b=e
this.c=f},
WL:function WL(d,e){this.c=d
this.a=e},
aGw:function aGw(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e36:function e36(d,e){this.a=d
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
e4f:function e4f(d){this.a=d},
e4g:function e4g(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4i:function e4i(d){this.a=d},
e4j:function e4j(d){this.a=d},
e4k:function e4k(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4m:function e4m(d,e){this.a=d
this.b=e},
e4n:function e4n(d){this.a=d},
e4q:function e4q(){},
e4o:function e4o(d){this.a=d},
e4p:function e4p(d,e){this.a=d
this.b=e},
bnf:function bnf(){},
WM:function WM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGx:function aGx(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e37:function e37(d){this.a=d},
e38:function e38(d){this.a=d},
hk7(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i75(d){var x=d.l3
if(x>=0)return x
return 4.99},
i74(d){var x=d.lM,w=y.N
w=x.iX(x,new B.cgQ(),w,w)
return w},
hBz(d){var x=d.kF,w=y.N
w=x.iX(x,new B.cgR(),w,w)
return w},
b2R(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2R=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2R)
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
return A.i($async$b2R,w)},
a9_(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9_)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a9_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9_,w)},
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
hk6(d,e){var x,w,v
if(B.i75(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i74(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.c9(new A.W(Date.now(),0,!1))},
b2P(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hBz(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.c9(new A.W(Date.now(),0,!1))},
hBA(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hBz(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.c9(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.dt(f,0,0,0,0,0).a).aa().ag())
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
break}u=B.hk7(d)
if(u<=0){v=!1
x=1
break}if(B.hk6(d,e)){v=!1
x=1
break}x=3
return A.b(B.as2(e),$async$as1)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as1,w)},
b2Q(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JF(e,d),$async$b2Q)
case 3:if(g){v=-1
x=1
break}u=B.hk7(d)
if(u<=0){v=-1
x=1
break}if(B.hk6(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.as2(e),$async$b2Q)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2Q,w)},
cgT(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JF(e,d),$async$cgT)
case 3:if(h){v=!1
x=1
break}v=B.as1(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgT,w)},
cgS(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgS=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgT(d,u,i.gVh()),$async$cgS)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgS,w)},
a8Z(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8Z=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gVh()){v=!0
x=1
break}if(B.b2P(d,u)){v=!0
x=1
break}x=5
return A.b(A.lW(u,C.Vn),$async$a8Z)
case 5:x=k?3:4
break
case 3:B.hBA(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8Z)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lw(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Vn,"Doc Share for Organizations"),$async$a8Z)
case 7:if(!k){v=!1
x=1
break}B.hBA(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8Z)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Z,w)},
cgQ:function cgQ(){},
cgR:function cgR(){},
h7i(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h7i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h7i)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fxP.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i2([r],e.c))
s.toString
$.fxP.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7i,w)},
iFh(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fxP.br($.fxP,new B.h7k(d))},
h7k:function h7k(d){this.a=d},
fzu(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fzu=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bO(C.jC,null,y.H),$async$fzu)
case 3:C.C0.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mL()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzu,w)},
ai9(d,e,f){var x=0,w=A.j(y.H),v
var $async$ai9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fyv.n(0,d,new B.ae6(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ai9)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ai9)
case 2:return A.h(null,w)}})
return A.i($async$ai9,w)},
ai3(d){return B.inv(d)},
inv(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ai3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fyv.h(0,d)
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
break}o=J.b8(s,new B.fDh(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ae6(r)
$.fyv.n(0,d,p)
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
aRD(d){return B.int(d)},
int(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hs.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SQ(d),$async$aRD)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hs.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRD)
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
return A.b(J.fS(s,d),$async$aRD)
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
return A.i($async$aRD,w)},
ijv(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cd(J.eB(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cd(A.vZ(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
return A.f9(null,y.K)},
a3I(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bm($.bG,y.cf)
t=new A.ca(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fJc(r,t),!1,s)
A.fI(r,"error",new B.fJd(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.P7,new B.fJe())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3I,w)},
aRY(d,e,f){return B.ipS(d,e,f)},
ipS(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRY=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3I(i),$async$aRY)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SR(o,p),$async$aRY)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ai9(k,j,s),$async$aRY)
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
return A.i($async$aRY,w)},
aRX(d,e,f){return B.ipR(d,e,f)},
ipR(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRX=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRY(d,e,f),$async$aRX)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3I(f),$async$aRX)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hs.n(0,s,r)
$.SC.n(0,s,r)
x=11
return A.b(B.Si(s,r),$async$aRX)
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
return A.i($async$aRX,w)},
Cx(d,e,f,g,h,i){return B.i7e(d,e,f,g,h,i)},
i7e(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
m=new B.jU(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b2X(),null)
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
m=""+1000*n+"_"+C.cV.av(99999)
n=p.b
l=o.type
l.toString
k=B.hBC(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jU(m,n,k,l,j,"From folder",null,B.b2X(),null)
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
return A.b(B.aRX(d,m,o),$async$WQ)
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
hkb(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hkb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hBC(r,C.d.gal(r.split(".")),null)
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
return A.i($async$hkb,w)},
JG(d,e,f,g,h,i){return B.i7d(d,e,f,g,h,i)},
i7d(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JG=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.av(99999)
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
case 16:f=new B.jU(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b2X(),null)
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
v=A.vZ(n,k,j>m?m:j)
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
v=A.vZ(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WS,w)},
hBC(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t7(d,e){return B.i7f(d,e)},
i7f(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
case 15:r=n.a8y()
if(!C.aI.gar(r)){$.Hs.n(0,f,r)
$.SC.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRD(f),$async$t7)
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
i7i(d){var x,w,v=$.aiy.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i7j(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i2([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i7g(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
as9(d,e,f,g,h){return B.i7h(d,e,f,g,h)},
i7h(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
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
return A.b(n.iE(d).xY(h,r,new A.EW(!0,e.c)),$async$as9)
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
hBE(d,e,f,g,h){var x,w,v,u,t=$.hBD
$.hBD=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ch3.n(0,t,new B.bAh(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ae2(u)))
return t},
hkc(d){var x=0,w=A.j(y.H)
var $async$hkc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hkc,w)},
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
return A.qM(A.GZ(n),$async$JH,w)
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
return A.qM(A.GZ(k),$async$JH,w)
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
return A.qM(A.GZ(A.vZ(j,p,o<i?o:i)),$async$JH,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qM(null,0,w)
case 2:return A.qM(t.at(-1),1,w)}})
var x=0,w=A.hKO($async$JH,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hMT(w)},
b2Z(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ch3.h(0,d)
if(t==null||J.cx(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6Q(),$async$b2Z)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2Z,w)},
WR(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ch3.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6Q(),$async$WR)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ai9(r.c,u,r.z),$async$WR)
case 4:t=new B.jU(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b2X(),null)
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
a95(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a95=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ch3.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajd(u[s]),$async$a95)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a95,w)},
ch5(d,e,f){var x=0,w=A.j(y.H)
var $async$ch5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFp(d,e,f),$async$ch5)
case 2:return A.h(null,w)}})
return A.i($async$ch5,w)},
ch6(d,e,f){var x=0,w=A.j(y.H)
var $async$ch6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFq(d,e,f),$async$ch6)
case 2:return A.h(null,w)}})
return A.i($async$ch6,w)},
FH(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Br(d),$async$FH)
case 2:p=g
J.nh(p,new B.ch4(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hs.X(0,v)
$.aiy.X(0,e)
x=3
return A.b(B.ai3(v),$async$FH)
case 3:u=g
$.fyv.X(0,v)
x=4
return A.b(A.aB(),$async$FH)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FH)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FH)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajd(s[q]),$async$FH)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajd(v),$async$FH)
case 13:x=14
return A.b(B.HC(d,p),$async$FH)
case 14:return A.h(null,w)}})
return A.i($async$FH,w)},
b2Y(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t7(d,e),$async$b2Y)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fzu(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2Y,w)},
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
break}r=J.b8(u,new B.fJf(),y.U)
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
t=J.b8(e,new B.fNy(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$HC)
case 3:return A.h(null,w)}})
return A.i($async$HC,w)},
bFp(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFp)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHo(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHH(f))
x=4
return A.b(B.HC(d,u),$async$bFp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFp,w)},
bFq(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFq)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHp(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cSQ(f))
x=4
return A.b(B.HC(d,u),$async$bFq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFq,w)},
ae6:function ae6(d){this.a=d},
fDh:function fDh(){},
fJc:function fJc(d,e){this.a=d
this.b=e},
fJd:function fJd(d){this.a=d},
fJe:function fJe(){},
ch4:function ch4(d){this.a=d},
bAh:function bAh(d,e,f,g,h,i,j,k,l){var _=this
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
fJf:function fJf(){},
fNy:function fNy(){},
fHo:function fHo(d){this.a=d},
fHp:function fHp(d){this.a=d},
a96(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a96=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.ch9())?3:4
break
case 3:x=5
return A.b(B.b3_(d,e),$async$a96)
case 5:u=g
if(u!=null){t=u.c
B.OM(d,u.b,e,t)}v=u
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
return A.b(B.b2V(s),$async$a96)
case 10:case 9:if(g){v=new A.RD(1,D.V0,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WT(d,e),$async$a96)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WY(!0,!0,d,e),$async$a96)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OM(d,D.B3,e,t)
v=new A.RD(p,D.B3,t)
x=1
break}v=B.ch8(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a96,w)},
WT(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a98(null,d,e),$async$WT)
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
return A.b(B.b2U(p,d.length,e),$async$WT)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ch6(e,C.d.gG(d).a,r.b),$async$WT)
case 7:case 6:q=r.a
x=8
return A.b(B.OM(d,D.V0,e,q),$async$WT)
case 8:v=new A.RD(d.length,D.V0,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WT,w)},
WU(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mS(D.ns)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a97(d,e),$async$WU)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ch1(s,d,e,t),$async$WU)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2V(t),$async$WU)
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
return A.b(B.hk5(),$async$WW)
case 2:x=3
return A.b(B.aUn(),$async$WW)
case 3:return A.h(null,w)}})
return A.i($async$WW,w)},
a97(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a97=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2X()
x=3
return A.b(B.ch5(e,d.a,u),$async$a97)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a97,w)},
OM(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OM=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.V0&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a97(p,f),$async$OM)
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
return A.b(B.ch0(o,p,u,f),$async$OM)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ch1(o,p,f,t),$async$OM)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ch_(o,u,p,f),$async$OM)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OM,w)},
b3_(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ch7(e,d),$async$b3_)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WY(!1,!0,d,e),$async$b3_)
case 4:u=g
if(u!=null){t=u.b
v=new A.RD(u.a,D.B3,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3_,w)},
ch7(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ch7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WS(d,s,0,1),$async$ch7)
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
return A.i($async$ch7,w)},
ch8(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ch8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a98(null,d,e),$async$ch8)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hBB(u)
if(t.length>800){v=null
x=1
break}v=new A.RD(d.length,D.e3i,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch8,w)},
asa(d,e,f){return B.i7m(d,e,f)},
i7m(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asa=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.db(g,"\ufeff"))g=J.ni(g,1)
x=B.hka(g)?3:4
break
case 3:x=5
return A.b(B.ch2(g),$async$asa)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.db(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ni(g,13))
try{k=B.FI(d,a0,s)
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
return A.b(B.b2T(q),$async$asa)
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
case 11:case 7:if(J.db(g,"NGMYDOCSYNC0|"))try{n=B.hk9(g,"NGMYDOCSYNC0")
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
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
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
JI(d,e,f){return B.i7k(d,e,f)},
i7k(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JI=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.b2L(r),$async$JI)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2L(A.cG(s,0,null)),$async$JI)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cx(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cgF(o,r,a1,n,a2),$async$JI)
case 11:m=a4
x=J.cx(m)?12:13
break
case 12:x=14
return A.b(B.cgE(q),$async$JI)
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
a98(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a98=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aQ(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t7(f,r),$async$a98)
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
return A.i($async$a98,w)},
WV(d,e){return B.i7l(d,e)},
i7l(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
OL:function OL(d,e){this.a=d
this.b=e},
ch9:function ch9(){},
a3h(d){var x=A.Q(d).ax.a===C.I,w=x?D.ako:D.ahR,v=x?D.amd:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajm:C.bn
return new A.aJF([w,s,v,u,t,x?C.fz:C.bU])},
hSK(d,e){var x=e?C.v.j(0.72):C.b9
return A.ce(null,x,!0,null,new B.hbC(e),d,null,!0,!0,y.N)},
cgP(d,e,f,g,h,i,j,k,l){return new B.WN(e,l,d,f,k,j,g,h,i,null)},
a0b(d,e,f,g,h,i,j){return new B.bhM(g,h,j,e,i,d,f,null)},
hbC:function hbC(d){this.a=d},
a08:function a08(d,e){this.c=d
this.a=e},
aCr:function aCr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgs:function dgs(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgr:function dgr(d){this.a=d},
bzU:function bzU(){},
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
e4d:function e4d(d){this.a=d},
e3B:function e3B(d,e){this.a=d
this.b=e},
e3C:function e3C(d,e){this.a=d
this.b=e},
e3a:function e3a(d,e,f){this.a=d
this.b=e
this.c=f},
e39:function e39(d){this.a=d},
e3b:function e3b(d,e){this.a=d
this.b=e},
e3g:function e3g(d,e,f){this.a=d
this.b=e
this.c=f},
e3f:function e3f(d){this.a=d},
e41:function e41(d,e){this.a=d
this.b=e},
e42:function e42(d){this.a=d},
e3y:function e3y(d,e,f){this.a=d
this.b=e
this.c=f},
e3v:function e3v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3e:function e3e(d){this.a=d},
e3G:function e3G(d){this.a=d},
e3F:function e3F(){},
e3k:function e3k(d){this.a=d},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e4_:function e4_(d,e){this.a=d
this.b=e},
e40:function e40(d,e){this.a=d
this.b=e},
e3w:function e3w(d,e){this.a=d
this.b=e},
e3x:function e3x(d,e){this.a=d
this.b=e},
e3S:function e3S(d,e){this.a=d
this.b=e},
e3O:function e3O(d){this.a=d},
e3N:function e3N(d){this.a=d},
e3P:function e3P(){},
e3Q:function e3Q(){},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3T:function e3T(){},
e3U:function e3U(d){this.a=d},
e3M:function e3M(d,e){this.a=d
this.b=e},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d){this.a=d},
e3J:function e3J(d){this.a=d},
e3K:function e3K(d){this.a=d},
e3L:function e3L(d){this.a=d},
e3h:function e3h(){},
e3i:function e3i(d){this.a=d},
e3j:function e3j(d,e){this.a=d
this.b=e},
e3d:function e3d(d,e){this.a=d
this.b=e},
e3c:function e3c(d,e,f){this.a=d
this.b=e
this.c=f},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d,e,f){this.a=d
this.b=e
this.c=f},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3p:function e3p(d){this.a=d},
e3m:function e3m(d,e,f){this.a=d
this.b=e
this.c=f},
e3q:function e3q(d){this.a=d},
e3r:function e3r(d){this.a=d},
e3s:function e3s(){},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3n:function e3n(d){this.a=d},
e3l:function e3l(d,e,f){this.a=d
this.b=e
this.c=f},
e3o:function e3o(){},
e3E:function e3E(d){this.a=d},
e3D:function e3D(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d,e){this.a=d
this.b=e},
e3V:function e3V(d){this.a=d},
e3W:function e3W(d,e){this.a=d
this.b=e},
e3X:function e3X(d){this.a=d},
e4a:function e4a(d){this.a=d},
e48:function e48(d){this.a=d},
e49:function e49(d){this.a=d},
e4b:function e4b(){},
e4c:function e4c(d,e){this.a=d
this.b=e},
e44:function e44(d,e){this.a=d
this.b=e},
e45:function e45(d,e,f){this.a=d
this.b=e
this.c=f},
e43:function e43(d,e,f){this.a=d
this.b=e
this.c=f},
e46:function e46(d,e){this.a=d
this.b=e},
e47:function e47(d,e){this.a=d
this.b=e},
aCo:function aCo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhL:function bhL(d,e,f){this.c=d
this.d=e
this.a=f},
dgo:function dgo(){},
dgp:function dgp(){},
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
dgM:function dgM(){},
dgL:function dgL(d){this.a=d},
a0a:function a0a(d,e,f){this.c=d
this.d=e
this.a=f},
aCt:function aCt(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dgI:function dgI(d){this.a=d},
dgJ:function dgJ(d,e,f){this.a=d
this.b=e
this.c=f},
dgK:function dgK(d,e){this.a=d
this.b=e},
dgG:function dgG(d,e){this.a=d
this.b=e},
dgE:function dgE(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgF:function dgF(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgH:function dgH(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgA:function dgA(d){this.a=d},
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
dgl:function dgl(d){this.a=d},
dgk:function dgk(d,e){this.a=d
this.b=e},
dgm:function dgm(d){this.a=d},
dgj:function dgj(d,e){this.a=d
this.b=e},
dgn:function dgn(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dge:function dge(d){this.a=d},
dgf:function dgf(d){this.a=d},
dgg:function dgg(d,e){this.a=d
this.b=e},
dgh:function dgh(d){this.a=d},
Ra:function Ra(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dgZ:function dgZ(d){this.a=d},
dh_:function dh_(d){this.a=d},
dh0:function dh0(d){this.a=d},
dh1:function dh1(d){this.a=d},
dh2:function dh2(d,e){this.a=d
this.b=e},
dh3:function dh3(d){this.a=d},
dh5:function dh5(d){this.a=d},
dh4:function dh4(d){this.a=d},
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
dgV:function dgV(d,e){this.a=d
this.b=e},
dgW:function dgW(d,e){this.a=d
this.b=e},
dgN:function dgN(d,e,f){this.a=d
this.b=e
this.c=f},
dgO:function dgO(d){this.a=d},
dgP:function dgP(){},
dgU:function dgU(){},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgR:function dgR(d,e){this.a=d
this.b=e},
dgS:function dgS(d,e){this.a=d
this.b=e},
dgT:function dgT(d,e){this.a=d
this.b=e},
aeo:function aeo(d,e){this.c=d
this.a=e},
dgd:function dgd(d){this.a=d},
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
dgY:function dgY(d){this.a=d},
dgX:function dgX(d){this.a=d},
bhM:function bhM(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i7n(){var x,w=$.oO(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
ON(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$ON=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$ON)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$ON)
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
return A.i($async$ON,w)},
a99(d){return B.i7o(d)},
i7o(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a99=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$a99)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i0("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cY,null),$async$a99)
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
return A.i($async$a99,w)},
WX(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ON(),$async$WX)
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
return A.b(B.a99(s),$async$WX)
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
return A.b(A.cf(),$async$WY)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.chb(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i7n()
t=A.U(u).k("O<1,a9<n,aG>>")
r=A.B(new A.O(u,new B.chc(s),t),t.k("aj.E"))
x=6
return A.b(B.ON(),$async$WY)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a99(q),$async$WY)
case 7:x=8
return A.b(B.a9a(r,u,g,s),$async$WY)
case 8:v=new A.btH(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WY,w)},
asb(d){var x=0,w=A.j(y.y),v,u,t
var $async$asb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.ON(),$async$asb)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asb,w)},
chd(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.ON(),$async$chd)
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
return A.i($async$chd,w)},
a9a(d,e,f,g){return B.i7p(d,e,f,g)},
i7p(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9a=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.as9("media",r,new B.cha(s,e,g),f,q),$async$a9a)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WX(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9a)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WX(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9a)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WX(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9a)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9a,w)},
FI(d,e,f){return B.i7q(d,e,f)},
i7q(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FI=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cf(),$async$FI)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asb(b3),$async$FI)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.j4,null,g),$async$FI)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asb(b3),$async$FI)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.ON(),$async$FI)
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
l=new A.acB(a8.a,b0,"media",a8.d,a9).DJ(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b2M(k,n,o,s,b7),$async$FI)
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
return A.b(new A.acB(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FI)
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
return A.b(B.a99(e),$async$FI)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FI,w)},
chb:function chb(){},
chc:function chc(d){this.a=d},
cha:function cha(d,e,f){this.a=d
this.b=e
this.c=f},
aUn(){var x=0,w=A.j(y.H),v,u
var $async$aUn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.iiO=null
v=y.H
u=A.dS(null,v)
x=2
return A.b(u,$async$aUn)
case 2:u=A.dS(null,v)
x=3
return A.b(u,$async$aUn)
case 3:u=$.hpQ
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dS(u,v),$async$aUn)
case 4:$.hpQ=$.irJ=$.irK=null
return A.h(null,w)}})
return A.i($async$aUn,w)},
fN9(d){var x=0,w=A.j(y.H),v,u
var $async$fN9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abc){x=1
break}u=new A.bm($.bG,y.d4)
d.c=new B.fNa(new A.ca(u,y.aY))
x=3
return A.b(u.ic(0,C.hd,new B.fNb()),$async$fN9)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fN9,w)},
irH(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i77(x):x},
hpV(d){var x=0,w=A.j(y.T),v,u,t
var $async$hpV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asd(u)
x=1
break}v=B.hk9(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hpV,w)},
hpU(d){var x=0,w=A.j(y.T),v,u,t
var $async$hpU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.ase(u)
x=1
break}v=B.hk9(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hpU,w)},
h71(d){var x=0,w=A.j(y.T),v
var $async$h71=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ase(d),$async$h71)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h71,w)},
bGn(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bGn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hpU(d),$async$bGn)
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
return A.i($async$bGn,w)},
fAi(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fAi=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WR(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cx(d.a8y(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAi,w)},
HD(d,e,f){return B.iu4(d,e,f)},
iu4(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HD=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hpV(a1),$async$HD)
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
return A.b($.hUL().aHZ(D.dNf,null),$async$HD)
case 4:l=d.hpQ=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ae2(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bm($.bG,y.b1)
l.y=new B.fNL(f,k,new B.fNM(f,a2,k,j,a0,p),a2,j,a0,p,new A.ca(t,y.ch))
x=5
return A.b(l.a9U(0,new B.Za(r,"offer")),$async$HD)
case 5:d=l
x=7
return A.b(l.anG(0),$async$HD)
case 7:x=6
return A.b(d.a9M(0,a4),$async$HD)
case 6:x=8
return A.b(B.fN9(l),$async$HD)
case 8:x=9
return A.b(l.as2(),$async$HD)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.irH(f,s)
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
case 12:g="NGMYDOCSYNC3A|z|"+B.hBB(h)
case 11:v=new A.bsW(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HD,w)},
fNa:function fNa(d){this.a=d},
fNb:function fNb(){},
fNM:function fNM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNL:function fNL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNK:function fNK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iw9(d){switch(d){case"new":return D.eOm
case"checking":return D.eOn
case"connected":return D.eOp
case"completed":return D.eOo
case"failed":return D.eOr
case"disconnected":return D.eOs
case"closed":return D.aTB
case"count":return D.eOq}return D.aTB},
iwa(d){switch(d){case"new":return D.aTC
case"gathering":return D.eOt
case"complete":return D.abc}return D.aTC},
iGS(d){switch(d){case"stable":return D.eOu
case"have-local-offer":return D.eOv
case"have-local-pranswer":return D.eOx
case"have-remote-offer":return D.eOw
case"have-remote-pranswer":return D.eOy
case"closed":return D.aTI}return D.aTI},
iEZ(d){switch(d){case"new":return D.aTF
case"connecting":return D.aTG
case"connected":return D.aTH
case"closed":return D.abd
case"disconnected":return D.aTE
case"failed":return D.aTD}return D.abd},
aby:function aby(d,e){this.a=d
this.b=e},
PU:function PU(d,e){this.a=d
this.b=e},
Z9:function Z9(d,e){this.a=d
this.b=e},
PT:function PT(d,e){this.a=d
this.b=e},
Gd:function Gd(d,e){this.a=d
this.b=e},
cvg:function cvg(){},
hm1(d){var x=new B.Gc()
x.a=d
x.b=!0
return x},
Gc:function Gc(){this.b=this.a=$},
abx:function abx(){},
awK:function awK(){},
Za:function Za(d,e){this.a=d
this.b=e},
hk5(){var x=0,w=A.j(y.H)
var $async$hk5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hk5,w)},
hk8(d,e,f){var x=0,w=A.j(y.T),v
var $async$hk8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mS(D.ns))){v=null
x=1
break}v=B.h7i(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hk8,w)},
hBB(d){var x,w=F.ahh.a6z(C.e3.aK(d),null)
if(w.length===0){x=C.e3.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i76(d){var x,w,v=C.cK.aK(d)
try{x=C.cf.cF(0,F.ahg.bi6(v,!1))
return x}catch(w){x=C.cf.cF(0,v)
return x}},
hk9(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i76(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cf.cF(0,C.cK.aK(x))
return v}catch(u){return x}}return null},
i77(d){var x,w,v,u,t,s=A.a([],y.s)
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
i78(){var x,w=$.oO(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2S(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2S)
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
return A.i($async$b2S,w)},
cgU(d,e){return B.i79(d,e)},
i79(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgU=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i0("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cY,null),$async$cgU)
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
return A.i($async$cgU,w)},
b2V(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2S(d),$async$b2V)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2V,w)},
b2U(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2U=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i78()
r=C.a.i(f)
t=C.e3.aK(s)
x=3
return A.b(B.cgU(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b2U)
case 3:if(!h){v=null
x=1
break}v=new A.a2g("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2U,w)},
b2T(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2S(o),$async$b2T)
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
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2T,w)},
cgV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(O.bHm("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cY),$async$cgV)
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
return A.i($async$cgV,w)},
b2W(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JE(),$async$b2W)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2W,w)},
as6(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$as6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as6)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2W(s)
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
a91(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a91=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$a91)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JE(),$async$a91)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dw(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a90(s),$async$a91)
case 5:x=6
return A.b(B.as4(f,u),$async$a91)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a91,w)},
a92(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a92=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$a92)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JE(),$async$a92)
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
return A.b(B.as4(g,q),$async$a92)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a90(u),$async$a92)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a92,w)},
a93(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a93=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$a93)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JE(),$async$a93)
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
s=B.b2P(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a93)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a93)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a93,w)},
cgW(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgW)
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
return A.i($async$cgW,w)},
JF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgW(d),$async$JF)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2W(t),$async$JF)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.as5(d),$async$JF)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2P(e,J.k(u==null?"":u))
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
b2X(){var x,w=$.oO(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a94(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hka(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgZ(d){return B.i7b(d)},
i7b(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a94(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgZ)
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
return A.i($async$cgZ,w)},
as8(d,e){return B.i7c(d,e)},
i7c(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$as8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a94(d)
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
ch0(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ch0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a94(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.as8(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ch0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ch0,w)},
ch_(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ch_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a94(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.as8(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ch_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ch_,w)},
ch1(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ch1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a94(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.as8(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch1,w)},
ch2(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ch2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hka(d)){v=null
x=1
break}x=3
return A.b(B.cgZ(d),$async$ch2)
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
return A.i($async$ch2,w)},
a9b(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9b=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$a9b)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9b)
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
return A.i($async$a9b,w)},
asc(d){return B.i7r(d)},
i7r(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cf(),$async$asc)
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
return A.b(A.cf(),$async$asd)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9b(),$async$asd)
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
return A.b(A.cf(),$async$asf)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9b(),$async$asf)
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
return A.b(A.cf(),$async$ase)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9b(),$async$ase)
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
break}p=n.gbg()
if(!(p instanceof A.ox)){v=null
x=1
break}x=3
return A.b(p.lx(e),$async$ar5)
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
iD4(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.v(w),5,"0")
return v},
h5a(d){return B.iD6(d)},
iD6(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h5a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").M6(d,3600),$async$h5a)
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
return A.i($async$h5a,w)},
E1(d,e,f,g,h,i){var x=null
return B.iD3(d,e,f,g,h,i)},
iD3(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E1=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hBE(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hkc(r),$async$E1)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h5a(o),$async$E1)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a95(r),$async$E1)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aXm)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ih(A.a([],g))
x=15
return A.b(d.fc(0,A.axy("GET",A.cG(n,0,null))).d7(0,C.HE),$async$E1)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a95(r),$async$E1)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lw(d)
u=19
case 22:x=24
return A.b(d.C(),$async$E1)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2Z(r,k),$async$E1)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$E1)
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
return A.b(B.a95(r),$async$E1)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E1,w)},
aU1(d){return B.iD5(d)},
iD5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aU1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aU1)
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
return A.i($async$aU1,w)}},D,Y,N,Z,A_
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
B.cvh.prototype={
aHZ(d,e){return this.cUk(d,e)},
cUk(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kC(A.cz(t)))
t=J.k(u)
v=B.ice(C.cS.gcp().aK(new A.dk(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHZ,w)}}
B.b89.prototype={
bEx(d){var x=this,w=x.w
w.onclose=A.hG(new B.cvc(x))
w.onopen=A.hG(new B.cvd(x))
w.onmessage=A.hG(new B.cve(x))
w.onbufferedamountlow=A.hG(new B.cvf(x))},
gd4(d){return this.x},
ajW(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gc()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hm1(J.eW(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$ajW)
case 8:v=t.hm1(s.aqe(f,0,null))
x=1
break
case 7:case 4:v=B.hm1(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajW,w)}}
B.b8a.prototype={
bEy(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cvi(x)))
w.addEventListener("icecandidate",A.hG(new B.cvj(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cvk(x)))
w.onicegatheringstatechange=A.hG(new B.cvl(x))
w.addEventListener("signalingstatechange",A.hG(new B.cvm(x)))
if(!$.hu5())w.addEventListener("connectionstatechange",A.hG(new B.cvn(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cvo(x)))
w.addEventListener("track",A.hG(new B.cvp(x)))},
anG(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ej(s.createAnswer(A.kC(A.cz(A.S(y.N,y.z)))),y.aQ),$async$anG)
case 3:t=f
v=new B.Za(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anG,w)},
a9M(d,e){return this.btr(0,e)},
btr(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9M)
case 2:return A.h(null,w)}})
return A.i($async$a9M,w)},
a9U(d,e){return this.btM(0,e)},
btM(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9U)
case 2:return A.h(null,w)}})
return A.i($async$a9U,w)},
as2(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$as2=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.i($async$as2,w)},
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
B.a09.prototype={
R(){return new B.aCs()},
gd6(){return this.c}}
B.aCs.prototype={
Z(){this.a3()
this.agq()},
agq(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2Q(u.e,u.c),$async$agq)
case 2:t=e
if(v.c!=null)v.l(new B.dgw(v,t))
return A.h(null,w)}})
return A.i($async$agq,w)},
RM(){var x=0,w=A.j(y.H),v,u=this,t
var $async$RM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.as1(t.e,t.c,!1),$async$RM)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fDx)
x=1
break}x=4
return A.b(B.a9_(u.a.c,"individual"),$async$RM)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a88(A.e7(new B.dgt(u),!1,null,y.H)),$async$RM)
case 5:case 1:return A.h(v,w)}})
return A.i($async$RM,w)},
Km(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Km=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fKX(o),$async$Km)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a93(o.e,r,s,q),$async$Km)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAw)
x=1
break}x=5
return A.b(B.a9_(u.a.c,"member"),$async$Km)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a88(A.e7(new B.dgv(u),!1,null,y.H)),$async$Km)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Km,w)},
z_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$z_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8Z(t.e,o,t.f,t.r,t.w,s),$async$z_)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9_(u.a.c,"org_owner"),$async$z_)
case 4:x=5
return A.b(B.as6(u.a.c),$async$z_)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fLr(o),$async$z_)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a91(s,t,o,q.c),$async$z_)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAs)
x=1
break}x=10
return A.b(B.as6(u.a.c),$async$z_)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a88(A.e7(new B.dgu(u),!1,null,y.H)),$async$z_)
case 11:case 1:return A.h(v,w)}})
return A.i($async$z_,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nW:C.nh,p=B.hk7(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dK,y.m).w
w=A.m(28)
v=A.a([new A.aa(0,C.H,C.az.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.p(s,A.w(A.a([A.p(s,D.fXZ,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.ho,s,s,s),C.aB,D.hhd,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.ceB,C.m),s,s,s,s,C.ev,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lS(new B.dgy(),s),C.N,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeT(C.f6,C.aG4,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcmG(),s),C.af],u))
w.push(new B.aeT(C.q4,C.a6D,"Team Member","Sign in with your organization access code + password",t.gcnB(),s))
w.push(C.af)
w.push(new B.aeT(C.arW,C.a8h,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcn5(),s))
return A.c6(s,q,A.bo(!0,A.cc(A.w(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeT.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eL(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lQ,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(C.A_,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aF7.prototype={}
B.aIo.prototype={}
B.jU.prototype={
mS(d){var x=this.b,w=C.a.pj(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gasJ(){var x=this.d
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
bhA(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jU(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cSQ(d){return this.bhA(null,d)},
aHH(d){return this.bhA(d,null)}}
B.WL.prototype={
R(){return new B.aGw(new A.cB(null,y.A))},
gd6(){return this.c}}
B.aGw.prototype={
Z(){this.a3()
this.agr()},
agr(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cw(u.a.c),$async$agr)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e36(u,t))
case 1:return A.h(v,w)}})
return A.i($async$agr,w)},
ags(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ags=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fO(new A.fD(s)),$async$ags)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fEs)
case 1:return A.h(v,w)}})
return A.i($async$ags,w)},
a0u(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0u=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ar5(s.d,4),$async$a0u)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0u)
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
return A.i($async$a0u,w)},
akm(){var x=0,w=A.j(y.H),v,u=this,t
var $async$akm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aca("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$akm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akm,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nW:C.nh,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l2
else if(q.e==null)x=A.at(new A.C(C.ev,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.K(C.az.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AC,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aos,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.H,C.az.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.ny,w,C.lp,new A.e9(A.p(p,A.qt(p,p,!1,B.i72(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lp,A.A(A.a([A.E(A.em(I.E4,p,C.Xs,q.gceD(),p),1),C.ar,A.E(A.de(C.Aq,p,C.adA,q.gceE(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a4(1/0,p,A.em(N.a5r,p,D.hcI,q.gcCV(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,Z.ap3,p,p,C.ah)
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
a0v(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JD(u.d.a.a)
if(t==null){u.l(new B.e4f(u))
x=1
break}u.l(new B.e4g(u))
s=u.a
r=s.c
x=3
return A.b(B.a8Y(s.d,new B.e4h(u),t,r),$async$a0v)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e4i(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0v,w)},
a4_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cx(r.a.d)){x=1
break}r.l(new B.e4j(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.t7(r.a.c,q),$async$a4_)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e4k(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ak0(p,m,l,j,k),$async$a4_)
case 8:o=e
if(r.c!=null)r.l(new B.e4l(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e4m(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e4n(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4_,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ako:D.ahR,h=j?D.amd:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajm:C.bn
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
t=A.p(k,A.A(A.a([A.p(k,D.c1v,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f4,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AC,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vd(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bnf()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Ps,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e4o(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mS,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.Ea(l.a.d,4)
m=A.B(new A.O(m,new B.e4p(x,new A.aJF(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.kO,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.p(k,A.w(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fz_)
else q.push(A.V(C.kQ,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cY(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j3,k,k,k,k,C.eZ,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJM,k,k,C.ah),1)
u=l.f?k:l.gcCW()
t=i[3]
s=i[1]
q=A.m(16)
s=A.em(N.a5r,k,D.hdP,u,A.dh(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gceF()
t=A.bp(C.az,k,k,0,C.c,k,C.o3,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ab,C.t,A.a([f,v,A.bo(!0,A.l1(new B.e4q(),A.w(A.a([e,new A.C(D.bJe,A.w(A.a([s,C.N,i,C.af,A.bH(l.f?C.uv:D.hc3,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cn,C.a1E,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bnf.prototype={
pf(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fn(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hm(C.bB,v.length),C.aP)}}
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
agt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e37(r))
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
return A.b(B.a92(p,m,n,o,C.a.i(l).length===0?null:l),$async$agt)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fE3)
s=[1]
x=4
break}p.K(y.q).f.T(D.fCF)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e38(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agt,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nW:C.nh,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h4n,s,s,s,1,s,!0),p=A.p(s,D.bBf,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.J4,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8V,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8Q,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c95,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
v=t.r?s:t.gceG()
u=A.bp(C.az,s,s,s,s,C.ht,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.ny,A.bH(t.r?C.uv:C.b_h,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.ae6.prototype={}
B.bAh.prototype={
a6Q(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8y()))
x=3
return A.b(B.SR(t,s),$async$a6Q)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6Q,w)},
gd6(){return this.a}}
B.OL.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a08.prototype={
R(){return new B.aCr(new A.au(C.ay,$.ay()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aCr.prototype={
Z(){this.a3()
$.aS.U$.push(new B.dgs(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a2()},
ceM(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a3h(d),u=x.a.c,t=u?C.iY:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nW:v.a[0],p=A.m(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.az.j(u?0.25:0.12),C.fF,32)],n),l=A.p(w,Y.auI,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.H,C.az.j(0.4),C.cy,16)],n),C.avz,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vd(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzU()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.Df,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b8P),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dgq(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mS,w,w,w,w)
f=f[1]
h=y.p
return A.ez(w,C.L,new A.cP(T.N3,new A.bP(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xe,A.w(A.a([l,C.aN,k,C.N,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dU(C.ov,new B.dgr(d),A.dh(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.m(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.o(w,w,w,A.m(14),A.a([new A.aa(0,C.H,C.az.j(0.35),C.cN,12)],n),M.Rz,C.m),C.bm,A.aE(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eHJ,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gceL(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PA,w,C.da,w,w,w)}}
B.bzU.prototype={
pf(d,e){return e.anA(e.a.toUpperCase())}}
B.WN.prototype={
R(){return new B.aGy(A.a([],y.r),A.aR(y.N))},
gd6(){return this.c}}
B.aGy.prototype={
Z(){var x=this
x.a3()
x.ux()
x.w=A.d3(C.jY,new B.e4d(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WW()
this.a2()},
a2O(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OK(u.a.c),$async$a2O)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Br(u.a.c),$async$a2O)
case 4:u.l(new s.e3B(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2O,w)},
ux(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ux=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OK(u.a.c),$async$ux)
case 3:t=e
x=4
return A.b(B.Br(u.a.c),$async$ux)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e3C(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OQ(u.d)
B.Cw(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ux,w)},
OQ(d){return this.bIF(d)},
bIF(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a97(r,u.a.c),$async$OQ)
case 8:p=f
if(u.c==null){x=1
break}new B.e3a(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mS(D.ns))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WU(r,u.a.c),$async$OQ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Br(u.a.c),$async$OQ)
case 12:u.l(new o.e3b(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OQ,w)},
Pf(d){return this.bP7(d)},
bP7(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Pf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a97(d,u.a.c),$async$Pf)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e3g(u,d,t))
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
uy(d,e){return this.cO6(d,e)},
cO6(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uy=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e41(r,e))
u=3
x=6
return A.b(d.$0(),$async$uy)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e42(r))
$.eX.mL()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uy,w)},
gaZu(){var x=this.a
return x.f||x.r||x.w},
J8(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZu()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgS(s,n,r,q,o,t),$async$J8)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fYF(o,u.a.c),$async$J8)
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
return A.b(B.E3(s,o,r,q,n,t),$async$J8)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J8,w)},
a1Q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.as6(u.a.c),$async$a1Q)
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
return A.b(A.a8(t,!1).ca(A.e7(new B.e3y(u,r,q),!1,null,y.H)),$async$a1Q)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1Q,w)},
a2Z(d){return this.cwg(d)},
cwf(){return this.a2Z(1)},
cwg(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZu()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.as3(u.a.c),$async$a2Z)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2Z,w)},
aef(d,e,f){return this.c5d(d,e,f)},
c5d(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aef=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uy(new B.e3v(u,d,null,e,f),"Uploading\u2026"),$async$aef)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aef,w)},
bIO(){B.hRG(!1,new B.e3e(this))
return},
cBs(){this.l(new B.e3G(this))},
aC6(){var x=0,w=A.j(y.H),v=this
var $async$aC6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bIO()
return A.h(null,w)}})
return A.i($async$aC6,w)},
aeb(){var x=0,w=A.j(y.H),v=this
var $async$aeb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uy(new B.e3k(v),"Importing\u2026"),$async$aeb)
case 2:return A.h(null,w)}})
return A.i($async$aeb,w)},
TP(d){return this.cNo(d)},
cNo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mS(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).ca(A.e7(new B.e3Z(u,d),!1,null,y.H)),$async$TP)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mS(D.TD)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).ca(A.e7(new B.e4_(u,d),!1,null,y.H)),$async$TP)
case 8:x=1
break
case 7:x=u.c5W(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).ca(A.e7(new B.e40(u,d),!1,null,y.H)),$async$TP)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TP,w)},
c5W(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pj(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cYz,C.a.aV(x,w+1).toLowerCase())},
ai5(d){return this.cmK(d)},
cmK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ai5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mS(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).ca(A.e7(new B.e3w(u,d),!1,null,y.H)),$async$ai5)
case 5:x=1
break
case 4:u.l(new B.e3x(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ai5,w)},
Ta(d){return this.cEp(d)},
cEp(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(u.uy(new B.e3S(u,d),"Preparing QR\u2026"),$async$Ta)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ta,w)},
akM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3T(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3U(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ta(r),$async$akM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akM,w)},
akF(d){return this.cDX(d)},
cDX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3h(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e3M(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akF)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TP(d)
break
case"qr":u.Ta(A.a([d],y.r))
break
case"send_my_code":u.cnq(A.a([d],y.r))
break
case"save":u.ak3(d)
break
case"delete":u.K3(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akF,w)},
Zd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3h(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3i(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pT(t,s.c,s.f),$async$Zd)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uy(new B.e3j(u,r),"Preparing file\u2026"),$async$Zd)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zd,w)},
ajb(d){return this.cux(d)},
cux(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ajb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hSK(d,!1),$async$ajb)
case 3:s=f
r=s==null
q=B.a94(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajb,w)},
aib(){var x=0,w=A.j(y.H),v=this,u
var $async$aib=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h6i(u,v.a.c),$async$aib)
case 2:return A.h(null,w)}})
return A.i($async$aib,w)},
bIN(){B.hRG(!1,new B.e3d(this,null))
return},
Kl(d,e){return this.cnr(d,e)},
b5g(d){return this.Kl(null,d)},
cnq(d){return this.Kl(d,null)},
cnr(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Kl=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e3z(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y2.cq().aql(!0,C.a3w,!1),$async$Kl)
case 10:r=g
if(r==null||J.cx(r.a)){x=1
break}x=11
return A.b(s.uy(new B.e3A(l,s,r),"Preparing\u2026"),$async$Kl)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
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
return A.b(B.bIC(p,l,e,s.a.c),$async$Kl)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Kl,w)},
Jp(d){return this.c50(d)},
c50(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i71(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b5g(t),$async$Jp)
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
return A.b(u.uy(new B.e3t(u,d),"Receiving video\u2026"),$async$Jp)
case 11:x=1
break
case 10:x=12
return A.b(u.uy(new B.e3u(u,d),"Receiving\u2026"),$async$Jp)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jp,w)},
Fc(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Fc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DY()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ajb(t),$async$Fc)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jp(s),$async$Fc)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).ca(A.e7(new B.e3E(u),!1,null,y.N)),$async$Fc)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ux(),$async$Fc)
case 10:x=1
break
case 9:x=11
return A.b(u.Jp(C.a.i(r)),$async$Fc)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Fc,w)},
ak3(d){return this.czV(d)},
czV(d){var x=0,w=A.j(y.H),v=this
var $async$ak3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uy(new B.e3D(v,d),"Saving\u2026"),$async$ak3)
case 2:return A.h(null,w)}})
return A.i($async$ak3,w)},
K3(d){return this.bRw(d)},
bRw(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$K3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lE(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$K3)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgV(t),$async$K3)
case 6:case 5:s=d.a
x=7
return A.b(B.FH(u.a.c,s),$async$K3)
case 7:u.r.X(0,s)
x=8
return A.b(u.ux(),$async$K3)
case 8:case 1:return A.h(v,w)}})
return A.i($async$K3,w)},
akS(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3h(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e3Y(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akS)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aib()
break
case"import":u.aeb()
break}case 1:return A.h(v,w)}})
return A.i($async$akS,w)},
ceJ(d){var x=d.c
if(C.a.Y(x,"video/")||d.mS(D.ns))return C.ru
if(C.a.Y(x,"image/")||d.mS(D.TD))return C.vB
if(C.a.q(x,"pdf"))return S.IK
return D.ask},
B(d){var x,w,v=this,u=null,t=B.a3h(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IX,u,u,u,new B.e48(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c26,u,u,u,v.e?u:v.gcn6(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcBr()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bX9:E.asJ,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a5n,u,u,u,v.e?u:v.gceK(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p7,u,u,u,v.e?u:v.gb6n(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3V,u,u,u,v.e?u:new B.e49(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lS(new B.e4a(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jH(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCo(C.jI,s,!0,t,w?u:v.gcEq(),u),1)
x.push(new A.C(C.aoq,A.l1(new B.e4b(),A.A(A.a([s,C.ar,A.E(new B.aCo(C.tS,"Export",!1,t,w?u:v.gbVo(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cn,C.iO,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhL(t,v.e?u:v.gb6n(),u)
else s=A.ks(!0,u,u,new B.e4c(v,t),s,u,D.bHR,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ab,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCo.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tF,t,new A.b9(s,C.a1),t,t,t)
return A.de(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.ch,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dh(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tF,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.em(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bhL.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l1(new B.dgo(),new A.C(E.a2D,A.w(A.a([A.l1(new B.dgp(),A.p(x,A.V(C.A3,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eg,C.hy,x,x,new A.bq(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.de(C.p7,x,D.hhx,this.d,A.bp(C.az,x,x,x,C.c,x,C.Py,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.D1,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeq.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dt(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mS(D.ns))p=D.dBs
else{p=C.a.Y(p,"image/")||i.mS(D.TD)
n=y.O
p=p?A.a([C.cX,C.az],n):A.a([C.aO.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasJ()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mS(D.ns))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.w(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h2,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.mS(D.ns)))l.push(A.hhV(C.az,!1,j,j,j,!1,j,j,new B.dgL(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.V(C.p3,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l1(new B.dgM(),new A.C(C.dV,A.aE(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a23,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0a.prototype={
R(){return new B.aCt()},
gd6(){return this.c}}
B.aCt.prototype={
Z(){this.a3()
this.yO()},
t(){B.i7g(this.e)
this.a2()},
yO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t7(o.c,o.d),$async$yO)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i7j(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i7i(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dgI(s))
x=1
break}s.l(new B.dgJ(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dgK(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yO,w)},
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
break}t.K(y.q).f.T(D.fB2)
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
c4U(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kr(u,C.z,v,new B.dgG(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h7(t,C.z,v,new B.dgH(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bK
return A.tY(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a3h(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.E6,u,u,u,v.gbac(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gw
else{q=v.r
if(q!=null)t=new A.C(C.ev,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ev,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.de(C.E6,u,D.h_t,v.gbac(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c4U()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a07.prototype={
R(){return new B.aCq(A.akZ(),C.bH,C.bH)},
gd6(){return this.c}}
B.aCq.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iF(new B.dgl(v))
x.gd13().iF(new B.dgm(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bfa
x.iF(new B.dgn(v))
v.yO()},
yO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t7(p.c,p.d),$async$yO)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dge(s))
x=1
break}x=8
return A.b(s.d.vB(0,new A.a5v(r,s.a.d.c)),$async$yO)
case 8:if(s.c==null){x=1
break}s.l(new B.dgf(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dgg(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yO,w)},
a0w(){var x=0,w=A.j(y.H),v=this,u
var $async$a0w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0w)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0w)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0w,w)},
aXk(d){var x=d.a
return C.a.aZ(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3h(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gw
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bY9,C.f,o,o,new A.o(o,o,o,A.m(24),o,M.Rz,C.m),o,88,o,o,o,o,o,88)
t=A.lg(C.az,o,o,m,0,new B.dgh(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aXk(p.w)+" / "+p.aXk(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.fxr,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vE:C.fQ,o,o,o,o,o)
x=A.w(A.a([u,C.lp,t,x,C.df,A.de(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gceN(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.pW,x,o),o,o,o),o,!1,!1,o,o)}}
B.Ra.prototype={
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
return A.b(B.hk8(o.c,o.d,new B.dgZ(s)),$async$R_)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dh_(s))
x=1
break}s.e=r
q=Q.iv_(r)
if(q==null){s.l(new B.dh0(s))
x=1
break}s.d=q
q.aU(0,s.gb53())
x=8
return A.b(q.iW(0).d7(0,C.o2),$async$R_)
case 8:if(s.c==null){x=1
break}s.l(new B.dh1(s))
x=9
return A.b(q.qw(0),$async$R_)
case 9:q.u7(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dh2(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$R_,w)},
cle(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dh3(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DY(0,x.gb53())
w=x.d
if(w!=null)w.t()
B.iFh(x.e)
x.a2()},
agw(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2Y(u.c,u.d),$async$agw)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agw,w)},
B(d){var x,w,v,u=this,t=null,s=B.a3h(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aI(t,t,t,t,C.oh,t,t,t,u.gceH(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iy(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gw
else{q=u.r
if(q!=null)s=new A.C(C.ev,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ako(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fN(x,new A.am(C.z,t,C.ab,C.t,A.a([new A.AX(s,t),A.aA(t,A.xM(A.p(t,A.V(q?K.vE:C.fQ,C.c,t,t,t,48),C.f,t,t,new A.o(C.b9,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dh5(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0c.prototype={
R(){return new B.aCu(new A.cB(null,y.A))}}
B.aCu.prototype={
gcNM(){var x,w,v=this.a
if(v.e!==D.V1)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcNm(){var x,w,v=this.a
if(v.e!==D.B3)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcNM()
if(x!=null){v.Sc(x)
v.e=A.d3(V.D3,new B.dgV(v,x))}w=v.gcNm()
if(w!=null){v.Sb(w)
v.f=A.d3(C.fr,new B.dgW(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Sb(d){return this.csH(d)},
csH(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asb(d),$async$Sb)
case 3:t=f
x=4
return A.b(B.chd(d),$async$Sb)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dgN(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Sb,w)},
Sc(d){return this.csI(d)},
csI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h71(d),$async$Sc)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bGn(t),$async$Sc)
case 4:if(u.c==null){x=1
break}u.l(new B.dgO(u))
u.c.K(y.q).f.T(D.aWW)
case 1:return A.h(v,w)}})
return A.i($async$Sc,w)},
gcat(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gceI(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3I(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DY()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fEd)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).ca(A.e7(new B.dgP(),!1,null,y.N)),$async$a3I)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bGn(s),$async$a3I)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aWW)
case 1:return A.h(v,w)}})
return A.i($async$a3I,w)},
ac1(d){return this.bP8(d)},
bP8(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ac1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fO(new A.fD(C.d.aL(t,", "))),$async$ac1)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b0(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ac1,w)},
agu(d){return this.bOR(d)},
bOR(d){var x=0,w=A.j(y.H),v=this
var $async$agu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fO(new A.fD(v.a.c)),$async$agu)
case 2:if(d.e!=null)d.K(y.q).f.T(D.fBw)
return A.h(null,w)}})
return A.i($async$agu,w)},
a3C(d){return this.czX(d)},
czX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
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
gb_K(){var x,w=this.a
if(w.e!==D.Kb)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
abZ(d){return this.bP1(d)},
bP1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_K()
if(t==null){x=1
break}x=3
return A.b(A.fO(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$abZ)
case 3:if(d.e!=null)d.K(y.q).f.T(D.fDc)
case 1:return A.h(v,w)}})
return A.i($async$abZ,w)},
agv(){var x=0,w=A.j(y.H),v=this,u
var $async$agv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WW(),$async$agv)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agv,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3h(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kb&&i!==D.V1&&i!==D.B3
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kb||t===D.V1||t===D.B3?l:A.aI(l,l,l,l,C.lH,l,l,l,m.gb2T(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qt(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcat(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kb){t=C.az.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.N,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lD,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gceI(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c7Y,D.h9d,new B.dgQ(m,d),l)],p))}if(m.a.e===D.Kb&&m.gb_K()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c4g,D.h5N,new B.dgR(m,d),l)],p))
if(m.a.e===D.B3){x=(m.w?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GA:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lD,l,l,l)],p))}if(m.a.e===D.V1){x=(m.r?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GA:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lD,l,l,l),C.af,A.de(D.c_E,l,D.hcn,m.gcAk(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pb(i,A.c6(v,w,new A.C(C.ae,A.w(A.a([A.E(A.p(l,A.w(q,C.l,l,C.bb,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.em(I.E4,l,C.Xs,new B.dgS(m,d),l),1),C.ar,A.E(A.de(C.Aq,l,C.adA,new B.dgT(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.N,new A.a4(1/0,l,A.bH(U.BH,l,m.gb2T(),A.bp(C.aO,l,l,l,l,C.ht,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dgU(),y.C)}}
B.aeo.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cc(A.w(A.a([w,C.aN,A.p(x,A.qt(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bH(C.BI,x,new B.dgd(d),x)],u),x,x,C.nM,v,x,x,x,x,D.fZq,x)}}
B.a06.prototype={
R(){return new B.aCp(A.A9(C.zl,C.oC,C.vQ))}}
B.aCp.prototype={
t(){this.d.t()
this.a2()},
aAv(d){var x,w,v,u,t
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
return A.c6(A.eS(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h6k,x,x,x,1,x,!0),C.v,A.A8(this.d,C.c_,this.gaAu()),x,!1,!1,x,x)}}
B.a0d.prototype={
R(){return new B.aCv(A.A9(C.zl,C.oC,C.vQ))},
gd6(){return this.c}}
B.aCv.prototype={
c5Y(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aiz(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N8("text/plain"),$async$aiz)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fE7)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aiz,w)},
acQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hSK(p,!0),$async$acQ)
case 3:t=e
p=t==null
s=B.a94(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fAD)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acQ,w)},
t(){this.d.t()
this.a2()},
aAv(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c5Y(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.atL,v,v,v,w.gbUS(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5v,v,v,v,w.gcpW(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.ro:R.QI,v,v,v,v,v),v,v,v,new B.dgY(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hdj,v,v,v,1,v,!0)
u=A.A8(w.d,C.c_,w.gaAu())
x=A.m(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ab,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eO1],s),v),v,!1,!1,v,v)}}
B.bhM.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pO
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pO:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2J,A.A(A.a([u,C.bc,A.E(A.w(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eL,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aby.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PU.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Z9.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PT.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gd.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cvg.prototype={}
B.Gc.prototype={}
B.abx.prototype={}
B.awK.prototype={}
B.Za.prototype={}
var z=a.updateTypes(["az<~>()","P(jU)","n(jU)","WN(Z)","~()","a09(Z)","G(G,jU)","Ra(Z)","~(lJ)","cp(Gc)","az<jU?>(@)","WL(Z)","WP(Z)","C(jU)","jU(@)","a9<n,@>(jU)","a08(Z)","WM(Z)","a0a(Z)","a07(Z)","a0c(Z)","aeo(Z)","ai<jU>()","a0d(Z)","aeq(Z,G)","a06(Z)","a9<n,aG>(jU)","cp(Z9)","cp(abx)","az<cp>(Gc)"])
B.cvc.prototype={
$1(d){var x=this.a
x.x=D.aTA
x.y.I(0,D.aTA)},
$S:74}
B.cvd.prototype={
$1(d){var x=this.a
x.x=D.aTz
x.y.I(0,D.aTz)},
$S:74}
B.cve.prototype={
$1(d){var x=this.a
x.ajW(A.a40(d.data)).bE(new B.cvb(x),y.b)},
$S:74}
B.cvb.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cvf.prototype={
$1(d){},
$S:74}
B.cvi.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.icd(d.channel))},
$S:17}
B.cvj.prototype={
$1(d){},
$S:17}
B.cvk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iw9(w.iceConnectionState)
x.cx=w
if($.hu5())switch(w.a){case 0:x.cy=D.aTF
break
case 1:x.cy=D.aTG
break
case 3:x.cy=D.aTH
break
case 5:x.cy=D.aTD
break
case 6:x.cy=D.aTE
break
case 7:x.cy=D.abd
break
default:break}},
$S:111}
B.cvl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iwa(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:111}
B.cvm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iGS(w.signalingState)},
$S:111}
B.cvn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iEZ(w.connectionState)},
$S:111}
B.cvo.prototype={
$1(d){},
$S:111}
B.cvp.prototype={
$1(d){},
$S:17}
B.fGk.prototype={
$1(d){var x=y.F.a(new A.qK([],[]).o8(d.target.result,!1)),w=C.x2.q(x.objectStoreNames,"blobs")
if(!w)C.x_.GJ(x,"blobs")},
$S:169}
B.h66.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xG.fl(this.b)
$.eX.mL()
this.c.$1(d)},
$S:364}
B.h68.prototype={
$1(d){return this.a.$1(B.ilB(this.b,this.c))},
$S:33}
B.h67.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h65.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h6l.prototype={
$1(d){var x=this
return B.hGC(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h6m.prototype={
$1(d){var x=this
return B.hGC(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJ0.prototype={
$1(d){var x=this
return B.cgP(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dgw.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dgt.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgP(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dgv.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgP(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dgu.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgP(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dgy.prototype={
$4(d,e,f,g){var x=null
return A.kf(A.A(A.a([A.aI(x,x,x,x,D.bZf,x,x,x,new B.dgx(d),x,x,x,x,x,x),A.E(A.FZ(D.Tl,!0,x,!1,C.a4A,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.Tl,x,g,C.apo,0,e,f)},
$C:"$4",
$R:4,
$S:397}
B.dgx.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fL_.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f2,y.m).w,t=this.a,s=t?C.iY:C.c,r=A.m(28),q=A.p(v,D.bBz,C.f,v,v,D.bar,v,v,v,v,D.ap9,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c2I,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.C(C.Di,A.w(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.au0,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dU(C.dx,new B.fKY(d),v),1),C.ar,A.E(A.bH(D.h4L,v,new B.fKZ(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HJ,v,v,v,v),v)},
$S:65}
B.fKY.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fKZ.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fBN)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aF7(v,x))},
$S:0}
B.fLt.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f2,y.m).w,u=x.a,t=u?C.iY:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bBp,C.f,w,w,D.bbW,w,w,w,w,D.ap9,w,w,1/0),new A.C(C.Di,A.w(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hpE(u,"Organization name",C.Ii,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hpE(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hpE(u,"Member password",C.E3,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.bx,A.bH(D.hdq,w,new B.fLs(r,q,p,d),A.bp(C.az,w,w,w,w,C.ht,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HJ,w,w,w,w),w)},
$S:65}
B.fLs.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fBS)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aIo(u,x,w))},
$S:0}
B.cgG.prototype={
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
return A.b(A.wa(p,null).d7(0,C.a1D),$async$$1)
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
B.cgM.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgN.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgO.prototype={
$1(d){return d.b},
$S:z+2}
B.cgI.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgJ.prototype={
$1(d){return d.b},
$S:z+2}
B.cgH.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cgK.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgL.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h6j.prototype={
$1(d){return new B.WL(this.a,null)},
$S:z+11}
B.h6k.prototype={
$1(d){return new B.WP(this.a,this.b,this.c,null)},
$S:z+12}
B.e36.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e4f.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e4g.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e4h.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e4e(x,d))},
$S:2}
B.e4e.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4i.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4j.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e4k.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e4l.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4m.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e4n.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4q.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*14)),e)},
$S:93}
B.e4o.prototype={
$1(d){var x=this.a
return x.f?null:x.a0v()},
$S:2}
B.e4p.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mS(D.TD))s=C.vB
else s=C.a.Y(s,"video/")||d.mS(D.ns)?C.ru:D.ask
x=this.b.a
w=y.p
return new A.C(C.k_,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasJ(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e37.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e38.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgQ.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:102}
B.cgR.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:102}
B.h7k.prototype={
$2(d,e){return e===this.a},
$S:269}
B.fDh.prototype={
$1(d){return J.k(d)},
$S:15}
B.fJc.prototype={
$1(d){var x=this.b
B.ijv(C.I6.ga8s(this.a)).bE(x.gCy(x),y.H)},
$S:128}
B.fJd.prototype={
$1(d){return this.a.dh(0,null)},
$S:128}
B.fJe.prototype={
$0(){return null},
$S:12}
B.ch4.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJf.prototype={
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
B.fNy.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fHo.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHp.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ch9.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mS(D.ns)},
$S:z+1}
B.hbC.prototype={
$1(d){return new B.a08(this.a,null)},
$S:z+16}
B.dgs.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fP()},
$S:7}
B.dgq.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.dgr.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4d.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2O()},
$S:10}
B.e3B.prototype={
$0(){var x=J.bJI(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3C.prototype={
$0(){var x=J.bJI(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3a.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e39(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHH(this.c)}},
$S:0}
B.e39.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3b.prototype={
$0(){var x=J.bJI(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3g.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e3f(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHH(this.c)}},
$S:0}
B.e3f.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e41.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e42.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e3y.prototype={
$1(d){return new B.WM(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e3v.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J8(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WQ(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ux(),$async$$0)
case 5:s=J.a1(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2Z(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3e.prototype={
$1(d){this.a.aef(d,"No files selected.","Added")},
$S:364}
B.e3G.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e3F(),A.U(x).k("O<1,n>")))},
$S:0}
B.e3F.prototype={
$1(d){return d.a},
$S:z+2}
B.e3k.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y2.cq().d34(C.a3w,!0),$async$$0)
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
$.an.$1("[doc share import] "+A.v(p))
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
return A.b(o.ux(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e3Z.prototype={
$1(d){return new B.Ra(this.a.a.c,this.b,null)},
$S:z+7}
B.e4_.prototype={
$1(d){return new B.a0a(this.a.a.c,this.b,null)},
$S:z+18}
B.e40.prototype={
$1(d){return new B.a07(this.a.a.c,this.b,null)},
$S:z+19}
B.e3w.prototype={
$1(d){return new B.Ra(this.a.a.c,this.b,null)},
$S:z+7}
B.e3x.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e3S.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J8(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a96(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cwf(),$async$$0)
case 5:x=6
return A.b(p.ux(),$async$$0)
case 6:r=A.U(t).k("O<1,n>")
r=new A.O(new A.O(t,new B.e3O(p),r),new B.e3P(),r.k("O<aj.E,n>")).c0(0,new B.e3Q())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).ca(A.e7(new B.e3R(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pS(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WW(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3O.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e3N(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e3N.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3P.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e3Q.prototype={
$1(d){return d.length!==0},
$S:3}
B.e3R.prototype={
$1(d){var x=this.a
return new B.a0c(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e3T.prototype={
$1(d){return d.a},
$S:z+2}
B.e3U.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3M.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasJ(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mS(D.ns)?C.tW:C.of
p=!x||p.mS(D.ns)?"Play video":"View"
return new A.bP(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lu,v,v,C.m),C.bm,A.bo(!0,new A.C(C.Dd,A.w(A.a([q,o,t,C.aB,B.a0b(!1,u,!1,w,p,new B.e3H(d),v),B.a0b(!1,u,!1,C.jI,"Share via QR",new B.e3I(d),"Letters/numbers QR code"),B.a0b(!1,u,!1,D.a4F,"Send to their Code",new B.e3J(d),"Enter someone else's personal code"),B.a0b(!1,u,!1,C.hP,"Download / save",new B.e3K(d),v),C.aj,B.a0b(!1,u,!0,C.eq,"Delete",new B.e3L(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:716}
B.e3H.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e3I.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e3J.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e3K.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e3L.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e3h.prototype={
$1(d){return d.a},
$S:z+2}
B.e3i.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3j.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a98(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HF(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pS(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3d.prototype={
$1(d){var x=this.a
x.uy(new B.e3c(x,d,this.b),"Preparing\u2026")},
$S:364}
B.e3c.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WQ(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cx(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bIC(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3z.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e3A.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aQ(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hkb(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3t.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HD(new B.e3p(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e3q(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e3r(s))
case 5:x=8
return A.b(r.b.ic(0,C.HE,new B.e3s()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.iq("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ux(),$async$$0)
case 9:s.iq("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3p.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3m(x,d,e))},
$S:201}
B.e3m.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3q.prototype={
$1(d){return new B.aeo(this.a.a,null)},
$S:z+21}
B.e3r.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e3s.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e3u.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JD(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8X(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b5g(B.JD(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asa(new B.e3n(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cx(r)){if(B.hka(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.ux(),$async$$0)
case 10:o=J.cJ(r)
p=o.eT(r,new B.e3o()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3n.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3l(x,d,e))},
$S:201}
B.e3l.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3o.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mS(D.ns)},
$S:z+1}
B.e3E.prototype={
$1(d){return new B.a0d(this.a.a.c,null)},
$S:z+23}
B.e3D.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2Y(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3Y.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.o(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lu,x,x,C.m),C.bm,A.bo(!0,new A.C(C.Dd,A.w(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a0b(!0,w,!1,C.mC,"My Code",new B.e3V(d),"Your personal code & QR \u2014 others send docs to you"),B.a0b(!1,w,!1,D.a4F,"Send to their Code",new B.e3W(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0b(!1,w,!1,W.Ai,"Import backup",new B.e3X(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:716}
B.e3V.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e3W.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bIN()},
$S:0}
B.e3X.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e4a.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JN(D.Tl,x,C.a4A,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gG(D.Tl).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:682}
B.e48.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e49.prototype={
$0(){this.a.akS()
return null},
$S:0}
B.e4b.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*10)),e)},
$S:93}
B.e4c.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeq(e,w,v,this.b,x.e,x.ceJ(w),new B.e44(x,w),new B.e45(x,v,w),new B.e46(x,w),new B.e47(x,w),null)},
$S:z+24}
B.e44.prototype={
$0(){this.a.ai5(this.b)
return null},
$S:0}
B.e45.prototype={
$0(){var x=this.a
return x.l(new B.e43(x,this.b,this.c))},
$S:0}
B.e43.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e46.prototype={
$0(){this.a.Pf(this.b)
return null},
$S:0}
B.e47.prototype={
$0(){this.a.akF(this.b)
return null},
$S:0}
B.dgo.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*18)),e)},
$S:93}
B.dgp.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:110}
B.dgM.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*14)),e)},
$S:93}
B.dgL.prototype={
$1(d){return this.a.y.$0()},
$S:90}
B.dgI.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dgJ.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dgK.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dgG.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h7(w,C.z,x,new B.dgE(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dgF(this.a))
return C.bK},
$S:150}
B.dgE.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgC(this.a))
return C.bK},
$S:205}
B.dgC.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgz(x))},
$S:7}
B.dgz.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgF.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgB(x))},
$S:7}
B.dgB.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgH.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgD(this.a))
return C.bK},
$S:205}
B.dgD.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgA(x))},
$S:7}
B.dgA.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgl.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgk(x,d))},
$S:1819}
B.dgk.prototype={
$0(){return this.a.f=this.b===C.wb},
$S:0}
B.dgm.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgj(x,d))},
$S:7}
B.dgj.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dgn.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgi(x,d))},
$S:7}
B.dgi.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dge.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dgf.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dgg.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dgh.prototype={
$1(d){return this.a.d.O9(0,A.dt(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dgZ.prototype={
$0(){var x=this.a.a
return B.t7(x.c,x.d)},
$S:1820}
B.dh_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dh0.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dh1.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dh2.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dh3.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dh5.prototype={
$0(){var x=this.a
x.l(new B.dh4(x))},
$S:0}
B.dh4.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qw(0)},
$S:0}
B.dgV.prototype={
$1(d){return this.a.Sc(this.b)},
$S:10}
B.dgW.prototype={
$1(d){return this.a.Sb(this.b)},
$S:10}
B.dgN.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dgO.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dgP.prototype={
$1(d){return D.hPi},
$S:z+25}
B.dgU.prototype={
$2(d,e){if(d)B.WW()},
$S:130}
B.dgQ.prototype={
$0(){return this.a.ac1(this.b)},
$S:0}
B.dgR.prototype={
$0(){return this.a.abZ(this.b)},
$S:0}
B.dgS.prototype={
$0(){return this.a.agu(this.b)},
$S:0}
B.dgT.prototype={
$0(){return this.a.a3C(this.b)},
$S:0}
B.dgd.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dgY.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.l(new B.dgX(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dgX.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.chb.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mS(D.ns)},
$S:z+1}
B.chc.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cha.prototype={
$2(d,e){return this.bpa(d,e)},
bpa(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WX(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1821}
B.fNa.prototype={
$1(d){if(d===D.abc&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fNb.prototype={
$0(){},
$S:12}
B.fNM.prototype={
bqO(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fAi(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hBE(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqO(d,e)},
$S:549}
B.fNL.prototype={
$1(d){var x=this
d.b=new B.fNK(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fNK.prototype={
$1(d){return this.bqN(d)},
bqN(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2Z(n,m),$async$$1)
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
return A.b(B.fAi(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a95(m),$async$$1)
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
x(v=B.aCs.prototype,"gcmG","RM",0)
x(v,"gcnB","Km",0)
x(v,"gcn5","z_",0)
x(v=B.aGw.prototype,"gceD","ags",0)
x(v,"gceE","a0u",0)
x(v,"gcCV","akm",0)
x(v=B.aGz.prototype,"gceF","a0v",0)
x(v,"gcCW","a4_",0)
x(B.aGx.prototype,"gceG","agt",0)
x(B.aCr.prototype,"gceL","ceM",4)
x(v=B.aGy.prototype,"gcn6","a1Q",0)
x(v,"gcBr","cBs",4)
x(v,"gb6n","aC6",0)
x(v,"gcEq","akM",0)
x(v,"gbVo","Zd",0)
x(v,"gceK","Fc",0)
x(B.aCt.prototype,"gbac","a3Z",0)
x(B.aCq.prototype,"gceN","a0w",0)
x(v=B.aCw.prototype,"gb53","cle",4)
x(v,"gceH","agw",0)
x(v=B.aCu.prototype,"gcAk","a3I",0)
x(v,"gb2T","agv",0)
w(B.aCp.prototype,"gaAu","aAv",8)
x(v=B.aCv.prototype,"gcpW","aiz",0)
x(v,"gbUS","acQ",0)
w(v,"gaAu","aAv",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aG,[B.cvg,B.abx,B.awK,B.aF7,B.aIo,B.jU,B.ae6,B.bAh,B.Gc,B.Za])
w(B.cvh,B.cvg)
w(B.b89,B.abx)
x(A.hq,[B.cvc,B.cvd,B.cve,B.cvb,B.cvf,B.cvi,B.cvj,B.cvk,B.cvl,B.cvm,B.cvn,B.cvo,B.cvp,B.fGk,B.h66,B.h68,B.h67,B.h6l,B.h6m,B.fJ0,B.dgt,B.dgv,B.dgu,B.dgy,B.fL_,B.fLt,B.cgG,B.cgN,B.cgO,B.cgJ,B.cgH,B.cgK,B.cgL,B.h6j,B.h6k,B.e4h,B.e4q,B.e4o,B.e4p,B.fDh,B.fJc,B.fJd,B.ch4,B.fJf,B.fNy,B.fHo,B.fHp,B.ch9,B.hbC,B.dgs,B.dgq,B.e4d,B.e39,B.e3f,B.e3y,B.e3e,B.e3F,B.e3Z,B.e4_,B.e40,B.e3w,B.e3O,B.e3N,B.e3P,B.e3Q,B.e3R,B.e3T,B.e3U,B.e3M,B.e3h,B.e3i,B.e3d,B.e3z,B.e3q,B.e3o,B.e3E,B.e3Y,B.e4a,B.e4b,B.dgo,B.dgp,B.dgM,B.dgL,B.dgG,B.dgE,B.dgC,B.dgF,B.dgH,B.dgD,B.dgl,B.dgm,B.dgn,B.dgh,B.dgV,B.dgW,B.dgP,B.chb,B.chc,B.fNa,B.fNL,B.fNK])
w(B.b8a,B.awK)
x(A.iV,[B.h65,B.dgw,B.dgx,B.fKY,B.fKZ,B.fLs,B.e36,B.e4f,B.e4g,B.e4e,B.e4i,B.e4j,B.e4k,B.e4l,B.e4m,B.e4n,B.e37,B.e38,B.fJe,B.dgr,B.e3B,B.e3C,B.e3a,B.e3b,B.e3g,B.e41,B.e42,B.e3v,B.e3G,B.e3k,B.e3x,B.e3S,B.e3H,B.e3I,B.e3J,B.e3K,B.e3L,B.e3j,B.e3c,B.e3A,B.e3t,B.e3m,B.e3r,B.e3s,B.e3u,B.e3l,B.e3D,B.e3V,B.e3W,B.e3X,B.e48,B.e49,B.e44,B.e45,B.e43,B.e46,B.e47,B.dgI,B.dgJ,B.dgK,B.dgz,B.dgB,B.dgA,B.dgk,B.dgj,B.dgi,B.dge,B.dgf,B.dgg,B.dgZ,B.dh_,B.dh0,B.dh1,B.dh2,B.dh3,B.dh5,B.dh4,B.dgN,B.dgO,B.dgQ,B.dgR,B.dgS,B.dgT,B.dgd,B.dgY,B.dgX,B.fNb])
x(A.lk,[B.aep,B.OL,B.aby,B.PU,B.Z9,B.PT,B.Gd])
x(A.af,[B.a09,B.WL,B.WP,B.WM,B.a08,B.WN,B.a0a,B.a07,B.Ra,B.a0c,B.a06,B.a0d])
x(A.ah,[B.aCs,B.aGw,B.aGz,B.aGx,B.aCr,B.aGy,B.aCt,B.aCq,B.aCw,B.aCu,B.aCp,B.aCv])
x(A.aw,[B.aeT,B.aCo,B.bhL,B.aeq,B.aeo,B.bhM])
x(A.iW,[B.cgM,B.cgI,B.cgQ,B.cgR,B.h7k,B.e3p,B.e3n,B.e4c,B.dgU,B.cha,B.fNM])
x(A.jn,[B.bnf,B.bzU])})()
A.jd(b.typeUniverse,JSON.parse('{"b89":{"abx":[]},"b8a":{"awK":[]},"a09":{"af":[],"x":[]},"aCs":{"ah":["a09"]},"aeT":{"aw":[],"x":[]},"WL":{"af":[],"x":[]},"WP":{"af":[],"x":[]},"aGw":{"ah":["WL"]},"aGz":{"ah":["WP"]},"bnf":{"jn":[]},"WM":{"af":[],"x":[]},"aGx":{"ah":["WM"]},"a08":{"af":[],"x":[]},"WN":{"af":[],"x":[]},"aeq":{"aw":[],"x":[]},"a0a":{"af":[],"x":[]},"a07":{"af":[],"x":[]},"Ra":{"af":[],"x":[]},"a0c":{"af":[],"x":[]},"aeo":{"aw":[],"x":[]},"a06":{"af":[],"x":[]},"a0d":{"af":[],"x":[]},"aCr":{"ah":["a08"]},"bzU":{"jn":[]},"aGy":{"ah":["WN"]},"aCo":{"aw":[],"x":[]},"bhL":{"aw":[],"x":[]},"aCt":{"ah":["a0a"]},"aCq":{"ah":["a07"]},"aCw":{"ah":["Ra"]},"aCu":{"ah":["a0c"]},"aCp":{"ah":["a06"]},"aCv":{"ah":["a0d"]},"bhM":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mU"),k:x("N6()"),o:x("bn<n,n>"),F:x("rJ"),g:x("az<jU?>"),x:x("az<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bl>"),Y:x("N<a9<n,P>>"),t:x("N<a9<n,@>>"),r:x("N<jU>"),w:x("N<+file,name(md,n)>"),u:x("N<d4>"),s:x("N<n>"),E:x("N<jn>"),a:x("N<dF>"),p:x("N<x>"),Z:x("N<G>"),G:x("bl"),A:x("cB<ah<af>>"),n:x("ai<jU>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bw<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("im"),e:x("iKX"),af:x("Fo"),U:x("jU"),b:x("cp"),C:x("aG"),aK:x("wW"),ab:x("Gc"),br:x("awK"),v:x("Za"),N:x("n"),X:x("bq<H>"),Q:x("mp"),D:x("dF"),aw:x("bg<n>"),cd:x("X<a9<n,@>>"),c7:x("x"),ch:x("ca<ai<jU>>"),aW:x("ca<dF?>"),aY:x("ca<~>"),cx:x("aep"),b1:x("bm<ai<jU>>"),cf:x("bm<dF?>"),d4:x("bm<~>"),c4:x("aF7"),bG:x("aIo"),q:x("l2"),B:x("q5<Gc>"),c6:x("q5<aby>"),y:x("P"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bl?"),_:x("ai<jU>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jU?"),R:x("aG?"),c:x("Za?"),d:x("+answerQr,transfer(n,az<ai<jU>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,OL,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dF?"),cm:x("ae6?"),bk:x("aF7?"),ag:x("aIo?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8P=new A.ax(C.az,2,C.r,-1)
D.ccE=new A.a6(C.a5,C.a9,C.w,C.a6D,null,null)
D.bar=new A.o(null,null,null,C.n0,null,D.ccE,C.m)
D.bbW=new A.o(null,null,null,C.n0,null,E.J4,C.m)
D.ahR=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajm=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ako=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amd=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h_l=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.heo=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FK,null,null,null,null,null,null,null,null,null)
D.drQ=x([D.h_l,C.aj,D.heo],y.p)
D.bBf=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.drQ,null)
D.hiX=new A.D("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h3X=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FK,null,null,null,null,null,null,null,null,null)
D.dKd=x([D.hiX,C.aj,D.h3X],y.p)
D.bBp=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dKd,null)
D.hf2=new A.D("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h7X=new A.D("Enter the access code and password from your organization.",null,H.FK,null,null,null,null,null,null,null,null,null)
D.dHK=x([D.hf2,C.aj,D.h7X],y.p)
D.bBz=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dHK,null)
D.bHR=new A.R(16,10,16,28)
D.bJe=new A.R(20,0,20,16)
D.bJM=new A.R(20,8,20,16)
D.ap9=new A.R(24,22,24,20)
D.a4F=new A.a_(63394,"MaterialIcons",!1)
D.ask=new A.a_(63515,"MaterialIcons",!1)
D.bX9=new A.a_(983813,"MaterialIcons",!1)
D.bUg=new A.a_(62867,"MaterialIcons",!1)
D.bY9=new A.ae(D.bUg,44,C.c,null,null,null)
D.bZf=new A.ae(C.km,null,C.ac,null,null,null)
D.c_E=new A.ae(C.jJ,18,null,null,null,null)
D.c1v=new A.ae(D.a4F,26,C.c,null,null,null)
D.c26=new A.ae(C.DU,null,null,null,null,null)
D.c2I=new A.ae(C.E0,null,null,null,null,null)
D.c3V=new A.ae(A_.a4P,null,null,null,null,null)
D.c4g=new A.ae(C.i4,16,null,null,null,null)
D.c7Y=new A.ae(C.tV,16,null,null,null,null)
D.bYr=new A.ae(C.mC,null,null,null,null,null)
D.c8Q=new A.ef(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYr,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3f=new A.ae(C.Ii,null,null,null,null,null)
D.c8V=new A.ef(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c3f,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYN=new A.ae(C.E3,null,null,null,null,null)
D.c95=new A.ef(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cZd=x([C.fz,C.b5,C.az],y.O)
D.ceB=new A.a6(C.aw,C.aD,C.w,D.cZd,null,null)
D.cYz=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Tl=x([C.fz,C.az],y.O)
D.TD=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ns=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dBs=x([C.nb,C.az],y.O)
D.eAg={iceServers:0}
D.aO5={urls:0}
D.dO9=new A.bn(D.aO5,["stun:stun.l.google.com:19302"],y.o)
D.dO8=new A.bn(D.aO5,["stun:stun1.l.google.com:19302"],y.o)
D.dgk=x([D.dO9,D.dO8],A.as("N<a9<n,n>>"))
D.dNf=new A.bn(D.eAg,[D.dgk],A.as("bn<n,@>"))
D.Kb=new B.OL(0,"lanDirect")
D.V0=new B.OL(1,"cloudStash")
D.e3i=new B.OL(2,"inlineInstant")
D.V1=new B.OL(3,"webrtcLink")
D.B3=new B.OL(4,"videoCloud")
D.hen=new A.D("Receive file",null,C.nD,null,null,null,null,null,null,null,null,null)
D.cO6=x([E.au9,C.aa,D.hen],y.p)
D.fsi=new A.c0(C.aK,C.bb,C.h,C.l,null,C.p,null,0,D.cO6,null)
D.eHJ=new A.C(C.cq,D.fsi,null)
D.fQA=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.Jz,null,null,null)
D.h_Y=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fQA,null,C.K,null,null,null,null,null,null,null)
D.eGT=new A.C(C.zD,D.h_Y,null)
D.bgw=new A.cn(C.z,null,null,D.eGT,null)
D.eO1=new A.cR(0,null,0,28,null,null,D.bgw,null)
D.eOl=new B.aby(0,"RTCDataChannelConnecting")
D.aTz=new B.aby(1,"RTCDataChannelOpen")
D.aTA=new B.aby(3,"RTCDataChannelClosed")
D.eOm=new B.Gd(0,"RTCIceConnectionStateNew")
D.eOn=new B.Gd(1,"RTCIceConnectionStateChecking")
D.eOo=new B.Gd(2,"RTCIceConnectionStateCompleted")
D.eOp=new B.Gd(3,"RTCIceConnectionStateConnected")
D.eOq=new B.Gd(4,"RTCIceConnectionStateCount")
D.eOr=new B.Gd(5,"RTCIceConnectionStateFailed")
D.eOs=new B.Gd(6,"RTCIceConnectionStateDisconnected")
D.aTB=new B.Gd(7,"RTCIceConnectionStateClosed")
D.aTC=new B.Z9(0,"RTCIceGatheringStateNew")
D.eOt=new B.Z9(1,"RTCIceGatheringStateGathering")
D.abc=new B.Z9(2,"RTCIceGatheringStateComplete")
D.abd=new B.PT(0,"RTCPeerConnectionStateClosed")
D.aTD=new B.PT(1,"RTCPeerConnectionStateFailed")
D.aTE=new B.PT(2,"RTCPeerConnectionStateDisconnected")
D.aTF=new B.PT(3,"RTCPeerConnectionStateNew")
D.aTG=new B.PT(4,"RTCPeerConnectionStateConnecting")
D.aTH=new B.PT(5,"RTCPeerConnectionStateConnected")
D.eOu=new B.PU(0,"RTCSignalingStateStable")
D.eOv=new B.PU(1,"RTCSignalingStateHaveLocalOffer")
D.eOw=new B.PU(2,"RTCSignalingStateHaveRemoteOffer")
D.eOx=new B.PU(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eOy=new B.PU(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTI=new B.PU(5,"RTCSignalingStateClosed")
D.fxr=new A.av(160,48)
D.bhM=new A.fo(2,null,null,null,null,C.az,null,null,null,null)
D.fz_=new A.a4(16,16,D.bhM,null)
D.h3h=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new A.b3(D.h3h,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hb0=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.b3(D.hb0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hk0=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fAD=new A.b3(D.hk0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h2R=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fB2=new A.b3(D.h2R,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hfe=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWW=new A.b3(D.hfe,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgI=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new A.b3(D.hgI,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlv=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBN=new A.b3(D.hlv,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjq=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new A.b3(D.hjq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkG=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fCF=new A.b3(D.hkG,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1r=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new A.b3(D.h1r,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hcW=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fDx=new A.b3(D.hcW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5C=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fE3=new A.b3(D.h5C,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlA=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fE7=new A.b3(D.hlA,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1H=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new A.b3(D.h1H,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h0k=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fEs=new A.b3(D.h0k,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fXZ=new A.D("NGMY DOC SHARE",null,C.aYm,null,null,null,null,null,null,null,null,null)
D.fZq=new A.D("Show this to sender",null,C.iW,null,null,null,null,null,null,null,null,null)
D.h_t=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h4n=new A.D("Organization settings",null,C.cJ,null,null,null,null,null,null,null,null,null)
D.h4L=new A.D("Sign in",null,C.ch,null,null,null,null,null,null,null,null,null)
D.h5N=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h6k=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h9d=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hc3=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.hcn=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcI=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hdj=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hdq=new A.D("Create portal",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hdP=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hhd=new A.D("Share files & videos\nwith a scan.",null,C.aYp,null,null,null,null,null,null,null,null,null)
D.hhx=new A.D("Add files",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hPi=new B.a06(null)
D.aeC=new B.aep(0,"docShare")
D.aeD=new B.aep(1,"gate")
D.Y5=new B.aep(2,"gateNoIndividual")})();(function staticFields(){$.aRi=null
$.fxP=function(){var x=y.N
return A.S(x,x)}()
$.Hs=A.S(y.N,y.D)
$.aiy=A.S(y.N,A.as("md"))
$.SC=A.S(y.N,y.D)
$.fyv=A.S(y.N,A.as("ae6"))
$.ch3=A.S(y.S,A.as("bAh"))
$.hBD=1
$.irK=null
$.irJ=null
$.iiO=null
$.hpQ=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iLs","hUL",()=>new B.cvh())
x($,"iJl","hu5",()=>C.a.q(A.by(A.by(A.by(A.HX(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["hMjYksz+L/hfKXP+nzR0J0bz7No="]=a.current})($__dart_deferred_initializers__);