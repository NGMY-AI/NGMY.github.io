((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={ctJ:function ctJ(){},
i4o(d){var x=null,w=new B.b75(d,D.eGm,new A.pT(x,x,y.c6),new A.pT(x,x,y.B))
w.bDn(d)
return w},
b75:function b75(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ctE:function ctE(d){this.a=d},
ctF:function ctF(d){this.a=d},
ctG:function ctG(d){this.a=d},
ctD:function ctD(d){this.a=d},
ctH:function ctH(d){this.a=d},
i4p(d,e){var x=y.N
x=new B.b76(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDo(d,e)
return x},
b76:function b76(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ctK:function ctK(d){this.a=d},
ctL:function ctL(d){this.a=d},
ctM:function ctM(d){this.a=d},
ctN:function ctN(d){this.a=d},
ctO:function ctO(d){this.a=d},
ctP:function ctP(d){this.a=d},
ctQ:function ctQ(d){this.a=d},
ctR:function ctR(d){this.a=d},
his(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bb("IndexedDB not available"))
return C.xj.H3(x,"ngmy_doc_share_v1",new B.fAf(),1)},
ib4(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.c9(d))
if(y.J.b(d))return new Uint8Array(A.c9(J.ev(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.c9(A.vJ(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.c9(d))
if(typeof d=="string")try{x=C.cD.aK(d)
return x}catch(w){return v}return v},
Ss(d,e){return B.iqI(d,e)},
iqI(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Ss=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQp
x=7
return A.b(o==null?$.aQp=B.his():o,$async$Ss)
case 7:s=g
r=new Uint8Array(A.c9(e))
q=J.me(s,"blobs","readwrite")
C.iK.mi(J.md(q,"blobs"),r,d)
x=8
return A.b(J.oA(q),$async$Ss)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$Ss,w)},
Sr(d){return B.iqH(d)},
iqH(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQp
x=7
return A.b(o==null?$.aQp=B.his():o,$async$Sr)
case 7:s=f
r=J.me(s,"blobs","readonly")
x=8
return A.b(C.iK.xT(J.md(r,"blobs"),d),$async$Sr)
case 8:q=f
x=9
return A.b(J.oA(r),$async$Sr)
case 9:o=B.ib4(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$Sr,w)},
aiu(d){return B.iqG(d)},
iqG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQp
x=7
return A.b(p==null?$.aQp=B.his():p,$async$aiu)
case 7:s=f
r=J.me(s,"blobs","readwrite")
C.iK.Gz(J.md(r,"blobs"),d)
x=8
return A.b(J.oA(r),$async$aiu)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aiu,w)},
fAf:function fAf(){},
idA(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brZ(w,v))}return u},
hKg(d,e){var x,w={},v=A.aZ4("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h_j(w,v,e)
C.xl.zi(v,"change",new B.h_l(w,v,!1))
C.xl.zi(v,"cancel",new B.h_k(w))
$.eX.mK()
v.click()
A.bN(C.amy,new B.h_i(w),y.H)},
h_j:function h_j(d,e,f){this.a=d
this.b=e
this.c=f},
h_l:function h_l(d,e,f){this.a=d
this.b=e
this.c=f},
h_k:function h_k(d){this.a=d},
h_i:function h_i(d){this.a=d},
DT(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DT=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd2()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUV()?3:4
break
case 3:x=5
return A.b(B.hES(e,d,s,!0,!1,f,g,h,!1,i),$async$DT)
case 5:x=1
break
case 4:x=6
return A.b(B.S4(d,s,f,g,h,i),$async$DT)
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
return A.b(B.Jt(s,d),$async$DT)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fvB(s,d),$async$DT)
case 14:x=12
return A.b(r.hES(q,p,o,n,m,l,k,j,a1,i),$async$DT)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cc(A.ed(new B.h_y(s,i,d,f,g,h),!1,null,y.H)),$async$DT)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cc(A.ed(new B.h_z(s,i,d,f,g,h),!1,null,y.H)),$async$DT)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DT,w)},
S4(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S4=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1P(e),$async$S4)
case 3:u=k
x=4
return A.b(B.arg(d,e,!1),$async$S4)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jt(e,d),$async$S4)
case 7:if(k){v=D.adY
x=1
break}x=8
return A.b(B.Wp(e),$async$S4)
case 8:v=t?D.Xw:D.adZ
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1N(d,e)){v=D.adY
x=1
break}x=11
return A.b(B.Wp(e),$async$S4)
case 11:v=t?D.Xw:D.adZ
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hdh(d,e)){v=D.adY
x=1
break}x=14
return A.b(B.Wp(e),$async$S4)
case 14:v=D.Xw
x=1
break
case 13:v=t?D.Xw:D.adZ
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S4,w)},
fvB(d,e){var x=0,w=A.j(y.y),v
var $async$fvB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1N(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1P(d),$async$fvB)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fvB,w)},
hES(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cc(A.ed(new B.fCW(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hzA(d,e,f,g,h,i,j){return new B.a_G(e,j,d,g,h,i,f,null)},
fEQ(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fEQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fET(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fEQ)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEQ,w)},
fFk(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fFk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
r=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fFm(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fFk)
case 3:q=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
r.V$=u
r.R$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFk,w)},
hiE(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fSg(d,e){var x=0,w=A.j(y.H),v
var $async$fSg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wp(e),$async$fSg)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).ec()
case 1:return A.h(v,w)}})
return A.i($async$fSg,w)},
h_y:function h_y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h_z:function h_z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adK:function adK(d,e){this.a=d
this.b=e},
fCW:function fCW(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_G:function a_G(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBJ:function aBJ(){this.c=this.a=this.d=null},
deE:function deE(d,e){this.a=d
this.b=e},
deB:function deB(d){this.a=d},
deD:function deD(d){this.a=d},
deC:function deC(d){this.a=d},
deG:function deG(){},
deF:function deF(d){this.a=d},
aed:function aed(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEn:function aEn(d,e){this.a=d
this.b=e},
aHz:function aHz(d,e,f){this.a=d
this.b=e
this.c=f},
fET:function fET(d,e,f){this.a=d
this.b=e
this.c=f},
fER:function fER(d){this.a=d},
fES:function fES(d,e,f){this.a=d
this.b=e
this.c=f},
fFm:function fFm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFl:function fFl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfg(d,e,f,g,h){return B.i_c(d,e,f,g,h)},
i_c(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cfg=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.ic(r.dO(d,new B.cfh(s,e,h,g,f,q),y.g),y.l),$async$cfg)
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
return A.i($async$cfg,w)},
b1K(d,e,f,g,h){return B.i_d(d,e,f,g,h)},
i_d(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1K=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awO("GET",d)
o=A.h9I()
if(o==null)o=new A.MQ(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dc(0,C.Hg),$async$b1K)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D9(),$async$b1K)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cp(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$b1K,w)},
b1J(d){return B.i_a(d)},
i_a(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vV(d,null).dc(0,C.oB),$async$b1J)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aP(0,A.m8(A.m4(p.e)).cE(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
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
return A.i($async$b1J,w)},
cff(d){return B.i_b(d)},
i_b(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cff=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vV(d,null).dc(0,C.qP),$async$cff)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m8(A.m4(q.e)).cE(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.aa(o)
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
return A.i($async$cff,w)},
cfh:function cfh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jD:function jD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jr(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i_i(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.X(t,u))return B.Jr(C.a.aX(t,u.length))}return null},
i_j(d){var x=B.Jr(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i_e(){var x,w=$.ox(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hh(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8k(d){return B.i_f(d)},
i_f(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8k)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$a8k,w)},
a8l(d,e){return B.i_g(d,e)},
i_g(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8l=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hR(d,e,!1,!1,C.cS,null),$async$a8l)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$a8l,w)},
Co(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Co=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Co)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.u(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jr(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8m(r),$async$Co)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8k("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Co)
case 7:q=f
s=q==null?null:J.u(q,"code")
p=B.Jr(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aG("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Co)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i_e()
x=14
return A.b(B.a8m(m),$async$Co)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8l("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Co)
case 15:k=f
x=16
return A.b(B.a8l("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Co)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aG("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Co)
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
return A.i($async$Co,w)},
a8m(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jr(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8k("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8m)
case 3:u=f
t=u==null?null:J.u(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8m,w)},
a8n(d,e,f,g){return B.i_k(d,e,f,g)},
i_k(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8n=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jr(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8m(r),$async$a8n)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cC(d,0,new B.cfn())>1048576||g.aS(d,new B.cfo())){v=B.Fu(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8y("myCode",d,a0),$async$a8n)
case 4:u=a3
try{t=C.X.aP(0,u,null)
if(y.f.b(t)){s=J.u(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fu(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1S(u,g.gL(d),a0),$async$a8n)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ox().aw(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dO(d,new B.cfp(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1L(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8n)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8n,w)},
Fu(d,e,f,g,h){return B.i_h(d,e,f,g,h)},
i_h(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fu=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$Fu)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cC(a6,0,new B.cfj())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ox().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cU.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jv(a9,q)
a0=new A.Lk(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fu)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nz(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abY(a1.a,a4,"media",a1.d,a2).xQ(m,n,new A.EJ(!0,q.c)),$async$Fu)
case 12:J.c4(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fu)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aT4(r),$async$Fu)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dO(a6,new B.cfk(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1L(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fu)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aT4(r),$async$Fu)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fu,w)},
b1L(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8k(t),$async$b1L)
case 3:s=g
r=y.aL.a(J.u(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.cfi(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8l(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1L,w)},
Or(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Or=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8k("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Or)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.u(t,"deliveries")
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
return A.b(B.b1M(k,a0),$async$Or)
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
return A.b(B.b1R(h),$async$Or)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Ww(g,a0),$async$Or)
case 10:f=a3
if(f!=null&&J.cK(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.Y(r,new B.cfl(),q),n)
d=A.B(new A.Y(r,new B.cfm(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cU(d,0,A.dy(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a8l("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Or)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Or,w)},
b1M(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1M=A.e(function(f,g){if(f===1)return A.f(g,w)
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
o=A.aI(o.h(p,"partCount"))
j=o==null?null:C.i.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iuQ(k,j)
C.d.u(s,i)
x=5
return A.b(B.DR(l,m,"Received via My Code",t,e,i),$async$b1M)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aT4(s),$async$b1M)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1M,w)},
cfn:function cfn(){},
cfo:function cfo(){},
cfp:function cfp(){},
cfj:function cfj(){},
cfk:function cfk(){},
cfi:function cfi(){},
cfl:function cfl(){},
cfm:function cfm(){},
h_v(d,e){var x=0,w=A.j(y.H)
var $async$h_v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cc(A.ed(new B.h_w(e),!1,null,y.H)),$async$h_v)
case 2:return A.h(null,w)}})
return A.i($async$h_v,w)},
bHe(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bHe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cc(A.ed(new B.h_x(g,e,f),!1,null,y.y)),$async$bHe)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHe,w)},
h_w:function h_w(d){this.a=d},
h_x:function h_x(d,e,f){this.a=d
this.b=e
this.c=f},
Wm:function Wm(d,e){this.c=d
this.a=e},
aFK:function aFK(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e0r:function e0r(d,e){this.a=d
this.b=e},
Wq:function Wq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFN:function aFN(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e1A:function e1A(d){this.a=d},
e1B:function e1B(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(d){this.a=d},
e1L:function e1L(){},
e1J:function e1J(d){this.a=d},
e1K:function e1K(d,e){this.a=d
this.b=e},
bm5:function bm5(){},
Wn:function Wn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFL:function aFL(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e0s:function e0s(d){this.a=d},
e0t:function e0t(d){this.a=d},
hdi(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i_m(d){var x=d.l3
if(x>=0)return x
return 4.99},
i_l(d){var x=d.lM,w=y.N
w=x.jp(x,new B.cfr(),w,w)
return w},
huy(d){var x=d.kH,w=y.N
w=x.jp(x,new B.cfs(),w,w)
return w},
b1P(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b1P)
case 7:s=f
r=A.v(p)
r=A.aW(J.u(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b1P,w)},
a8p(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8p)
case 4:x=3
return A.b(g.aG("String","ngmy_doc_share_path_"+u,e),$async$a8p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8p,w)},
Wp(d){var x=0,w=A.j(y.H),v,u
var $async$Wp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wp)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wp)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
hdh(d,e){var x,w,v
if(B.i_m(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i_l(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1N(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.huy(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
huz(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.huy(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cb(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bQ(A.dv(f,0,0,0,0,0).a).aa().ag())
d.kH=w},
arh(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$arh)
case 7:s=f
r=A.v(p)
r=A.eq(J.u(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$arh,w)},
ari(d){var x=0,w=A.j(y.H),v,u,t
var $async$ari=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arh(d),$async$ari)
case 3:u=f
x=5
return A.b(A.az(),$async$ari)
case 5:x=4
return A.b(f.aG("Int","ngmy_doc_share_usage_"+t,u+1),$async$ari)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ari,w)},
arg(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hdi(d)
if(u<=0){v=!1
x=1
break}if(B.hdh(d,e)){v=!1
x=1
break}x=3
return A.b(B.arh(e),$async$arg)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arg,w)},
b1O(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jt(e,d),$async$b1O)
case 3:if(g){v=-1
x=1
break}u=B.hdi(d)
if(u<=0){v=-1
x=1
break}if(B.hdh(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arh(e),$async$b1O)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1O,w)},
cfu(d,e,f){var x=0,w=A.j(y.y),v
var $async$cfu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jt(e,d),$async$cfu)
case 3:if(h){v=!1
x=1
break}v=B.arg(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfu,w)},
cft(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cft=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd2()
x=3
return A.b(B.cfu(d,u,i.gUV()),$async$cft)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cft,w)},
a8o(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8o=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd2()
if(i.gUV()){v=!0
x=1
break}if(B.b1N(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.UM),$async$a8o)
case 5:x=k?3:4
break
case 3:B.huz(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8o)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.UM,"Doc Share for Organizations"),$async$a8o)
case 7:if(!k){v=!1
x=1
break}B.huz(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8o)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
cfr:function cfr(){},
cfs:function cfs(){},
h0v(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h0v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h0v)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.frQ.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hT([r],e.c))
s.toString
$.frQ.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h0v,w)},
ix1(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.frQ.bq($.frQ,new B.h0x(d))},
h0x:function h0x(d){this.a=d},
ftv(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$ftv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hT([d],f))
s.toString
u=A.n0(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jw,null,y.H),$async$ftv)
case 3:C.BH.ft(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftv,w)},
ahp(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fsw.n(0,d,new B.adr(A.bs(e,!0,v)))
x=3
return A.b(A.az(),$async$ahp)
case 3:x=2
return A.b(h.aG("String",d+"_manifest",C.X.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahp)
case 2:return A.h(null,w)}})
return A.i($async$ahp,w)},
ahj(d){return B.ifu(d)},
ifu(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fsw.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ahj)
case 3:u=j.aW(i.u(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.u(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fxh(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.u(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adr(r)
$.fsw.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahj,w)},
RV(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.c9(e))
$.He.n(0,d,u)
x=3
return A.b(B.Ss(d,u),$async$RV)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RV,w)},
aQK(d){return B.ifs(d)},
ifs(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.He.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sr(d),$async$aQK)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.He.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQK)
case 4:s=f
r=A.aW(J.u(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cD.aK(r)
x=!J.ct(q)?9:10
break
case 9:B.RV(d,q)
x=11
return A.b(J.fO(s,d),$async$aQK)
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
return A.i($async$aQK,w)},
ibw(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.c9(J.ev(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.c9(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.c9(A.vJ(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.c9(d)),y.K)
return A.f3(null,y.K)},
a3b(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.c8(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fD7(r,t),!1,s)
A.fC(r,"error",new B.fD8(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ix(0,C.OB,new B.fD9())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3b,w)},
aR4(d,e,f){return B.ihR(d,e,f)},
ihR(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aR4=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3b(i),$async$aR4)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Ss(o,p),$async$aR4)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahp(k,j,s),$async$aR4)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.aa(h)
$.am.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aR4,w)},
aR3(d,e,f){return B.ihQ(d,e,f)},
ihQ(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aR3=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aR4(d,e,f),$async$aR3)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3b(f),$async$aR3)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.He.n(0,s,r)
$.Sd.n(0,s,r)
x=11
return A.b(B.RV(s,r),$async$aR3)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aR3,w)},
Cp(d,e,f,g,h,i){return B.i_v(d,e,f,g,h,i)},
i_v(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cp=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cU.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1V(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RV(s,d),$async$Cp)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cp)
case 10:r=a2
x=11
return A.b(r.aG("String",s,C.cL.gco().aK(d)),$async$Cp)
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
return A.b(B.Bh(e),$async$Cp)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.Ho(e,j),$async$Cp)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cp,w)},
Wr(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wr=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bh(d),$async$Wr)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cU.aw(99999)
n=p.b
l=o.type
l.toString
k=B.huB(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b1V(),null)
$.ahO.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3b(o),$async$Wr)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.He.n(0,h,g)
$.Sd.n(0,h,g)
B.RV(h,g)
x=9
break
case 10:x=11
return A.b(B.aR3(d,m,o),$async$Wr)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Ho(d,t),$async$Wr)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wr,w)},
hdm(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hdm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.huB(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ju(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cp(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdm,w)},
Ju(d,e,f,g,h,i){return B.i_u(d,e,f,g,h,i)},
i_u(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ju=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cU.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lk(A.dy(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ju)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h2(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.c9(J.T1(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kN(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.Ss(k,l),$async$Ju)
case 11:J.c4(q,k);++p
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
return A.b(j.a1(0),$async$Ju)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.Ss(k,new Uint8Array(A.c9(n))),$async$Ju)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahp(r,q,g),$async$Ju)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1V(),null)
x=17
return A.b(B.Bh(d),$async$Ju)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.Ho(d,e),$async$Ju)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ju,w)},
Wt(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wt=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahO.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3b(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahj(s),$async$Wt)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sr(u[o]),$async$Wt)
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
v=A.vJ(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Sd.h(0,s)
if(i==null)i=$.He.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rX(d,e),$async$Wt)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.Sd.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vJ(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wt,w)},
huB(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rX(d,e){return B.i_w(d,e)},
i_w(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Sd.h(0,f)
if(e==null)e=$.He.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahO.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3b(s),$async$rX)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.He.n(0,f,r)
$.Sd.n(0,f,r)
B.RV(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.aa(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahj(f),$async$rX)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adn(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sr(g[l]),$async$rX)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a7Y()
if(!C.aI.gau(r)){$.He.n(0,f,r)
$.Sd.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQK(f),$async$rX)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.Sd.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wt(a0,a1,0,g),$async$rX)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.c9(i))
$.He.n(0,f,h)
$.Sd.n(0,f,h)
B.RV(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rX,w)},
i_z(d){var x,w,v=$.ahO.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i_A(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hT([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i_x(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aro(d,e,f,g,h){return B.i_y(d,e,f,g,h)},
i_y(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aro=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahO.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3b(s),$async$aro)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rX(g,e),$async$aro)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f0().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iF(d).xQ(h,r,new A.EJ(!0,e.c)),$async$aro)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
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
return A.i($async$aro,w)},
huD(d,e,f,g,h){var x,w,v,u,t=$.huC
$.huC=t+1
x=Date.now()
w=""+1000*x+"_"+C.cU.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfF.n(0,t,new B.bz1(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adn(u)))
return t},
hdn(d){var x=0,w=A.j(y.H)
var $async$hdn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hdn,w)},
Jv(d,e){var $async$Jv=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahO.h(0,h)
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
return A.qB(B.Wt(d,e,p,o<q?o:q),$async$Jv,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qB(A.GM(n),$async$Jv,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qB(B.ahj("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jv,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qB(B.Sr(h[l]),$async$Jv,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qB(A.GM(k),$async$Jv,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qB(B.rX(d,e),$async$Jv,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qB(A.GM(A.vJ(j,p,o<i?o:i)),$async$Jv,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qB(null,0,w)
case 2:return A.qB(t.at(-1),1,w)}})
var x=0,w=A.hDD($async$Jv,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hFC(w)},
b1X(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfF.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a6f(),$async$b1X)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1X,w)},
Ws(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Ws=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfF.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6f(),$async$Ws)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahp(r.c,u,r.z),$async$Ws)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1V(),null)
u=r.a
x=5
return A.b(B.Bh(u),$async$Ws)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.Ho(u,s),$async$Ws)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ws,w)},
a8v(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfF.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiu(u[s]),$async$a8v)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8v,w)},
cfH(d,e,f){var x=0,w=A.j(y.H)
var $async$cfH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bE4(d,e,f),$async$cfH)
case 2:return A.h(null,w)}})
return A.i($async$cfH,w)},
cfI(d,e,f){var x=0,w=A.j(y.H)
var $async$cfI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bE5(d,e,f),$async$cfI)
case 2:return A.h(null,w)}})
return A.i($async$cfI,w)},
Fv(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bh(d),$async$Fv)
case 2:p=g
J.mY(p,new B.cfG(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.He.W(0,v)
$.ahO.W(0,e)
x=3
return A.b(B.ahj(v),$async$Fv)
case 3:u=g
$.fsw.W(0,v)
x=4
return A.b(A.az(),$async$Fv)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fv)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fv)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiu(s[q]),$async$Fv)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiu(v),$async$Fv)
case 13:x=14
return A.b(B.Ho(d,p),$async$Fv)
case 14:return A.h(null,w)}})
return A.i($async$Fv,w)},
b1W(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rX(d,e),$async$b1W)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.ftv(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1W,w)},
Bh(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bh)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.u(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fDa(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bh,w)},
Ho(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Ho=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Ho)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fHn(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aG("String","ngmy_doc_share_index_v1_"+u,C.X.av(t,null)),$async$Ho)
case 3:return A.h(null,w)}})
return A.i($async$Ho,w)},
bE4(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bE4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bh(d),$async$bE4)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fBj(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGN(f))
x=4
return A.b(B.Ho(d,u),$async$bE4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bE4,w)},
bE5(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bE5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bh(d),$async$bE5)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fBk(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cQt(f))
x=4
return A.b(B.Ho(d,u),$async$bE5)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bE5,w)},
adr:function adr(d){this.a=d},
fxh:function fxh(){},
fD7:function fD7(d,e){this.a=d
this.b=e},
fD8:function fD8(d){this.a=d},
fD9:function fD9(){},
cfG:function cfG(d){this.a=d},
bz1:function bz1(d,e,f,g,h,i,j,k,l){var _=this
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
fDa:function fDa(){},
fHn:function fHn(){},
fBj:function fBj(d){this.a=d},
fBk:function fBk(d){this.a=d},
a8w(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aS(d,new B.cfL())?3:4
break
case 3:x=5
return A.b(B.b1Y(d,e),$async$a8w)
case 5:u=g
if(u!=null){t=u.c
B.Ot(d,u.b,e,t)}v=u
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
return A.b(B.b1T(s),$async$a8w)
case 10:case 9:if(g){v=new A.Rg(1,D.Up,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wu(d,e),$async$a8w)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wz(!0,!0,d,e),$async$a8w)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ot(d,D.AI,e,t)
v=new A.Rg(p,D.AI,t)
x=1
break}v=B.cfK(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8w,w)},
Wu(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8y(null,d,e),$async$Wu)
case 3:p=g
try{u=C.X.aP(0,p,null)
t=y.f.b(u)?J.u(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1S(p,d.length,e),$async$Wu)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfI(e,C.d.gH(d).a,r.b),$async$Wu)
case 7:case 6:q=r.a
x=8
return A.b(B.Ot(d,D.Up,e,q),$async$Wu)
case 8:v=new A.Rg(d.length,D.Up,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wu,w)},
Wv(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.X(d.c,"video/")||d.mR(D.nc)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8x(d,e),$async$Wv)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfD(s,d,e,t),$async$Wv)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1T(t),$async$Wv)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rX(e,d),$async$Wv)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wu(A.a([d],y.r),e),$async$Wv)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wv,w)},
Wx(){var x=0,w=A.j(y.H)
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hdg(),$async$Wx)
case 2:x=3
return A.b(B.aTq(),$async$Wx)
case 3:return A.h(null,w)}})
return A.i($async$Wx,w)},
a8x(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1V()
x=3
return A.b(B.cfH(e,d.a,u),$async$a8x)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8x,w)},
Ot(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ot=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Up&&C.a.X(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aX(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8x(p,f),$async$Ot)
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
return A.b(B.cfC(o,p,u,f),$async$Ot)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfD(o,p,f,t),$async$Ot)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfB(o,u,p,f),$async$Ot)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ot,w)},
b1Y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfJ(e,d),$async$b1Y)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wz(!1,!0,d,e),$async$b1Y)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rg(u.a,D.AI,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1Y,w)},
cfJ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wt(d,s,0,1),$async$cfJ)
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
return A.i($async$cfJ,w)},
cfK(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8y(null,d,e),$async$cfK)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.huA(u)
if(t.length>800){v=null
x=1
break}v=new A.Rg(d.length,D.dWn,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfK,w)},
arp(d,e,f){return B.i_D(d,e,f)},
i_D(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arp=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.mZ(g,1)
x=B.hdl(g)?3:4
break
case 3:x=5
return A.b(B.cfE(g),$async$arp)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mZ(g,13))
try{k=B.Fw(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mZ(g,13))
u=9
x=12
return A.b(B.b1R(q),$async$arp)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ww(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.aa(f)
$.am.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.hdk(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ww(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Jw(C.a.i(J.mZ(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Jw(C.a.i(J.mZ(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.az(k,0,k.length-1)
else h=k
v=B.Jw(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Ww(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arp,w)},
Jw(d,e,f){return B.i_B(d,e,f)},
i_B(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jw=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.X(e,"N2|"))e=C.a.i(C.a.aX(e,3))
if(C.a.X(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aX(e,13))
if(!C.a.X(e,"http://")&&!C.a.X(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.az(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.v(s)+"/manifest.json",0,null)
q=A.cD(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1J(r),$async$Jw)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1J(A.cD(s,0,null)),$async$Jw)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.u(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.u(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cfg(o,r,a1,n,a2),$async$Jw)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.cff(q),$async$Jw)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Ww(l,a2),$async$Jw)
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
k=A.aa(d)
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
return A.i($async$Jw,w)},
a8y(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rX(f,r),$async$a8y)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cL.gco().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8y,w)},
Ww(d,e){return B.i_C(d,e)},
i_C(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ww=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aP(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.u(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.u(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.u(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.u(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aT(r)
case 7:if(!e.C()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.u(m,"name")
l=J.k(d==null?"file":d)
d=J.u(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.u(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cD.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cp(i,a3,d,k,l,o),$async$Ww)
case 9:h=a5
if(h!=null)J.c4(n,h)
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
g=A.aa(a1)
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
return A.i($async$Ww,w)},
Os:function Os(d,e){this.a=d
this.b=e},
cfL:function cfL(){},
a2L(d){var x=A.O(d).ax.a===C.I,w=x?D.ajG:D.ah7,v=x?D.alx:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aiE:C.bn
return new A.aIR([w,s,v,u,t,x?C.fs:C.bQ])},
hLh(d,e){var x=e?C.w.j(0.72):C.b6
return A.ce(null,x,!0,null,new B.h4N(e),d,null,!0,!0,y.N)},
cfq(d,e,f,g,h,i,j,k,l){return new B.Wo(e,l,d,f,k,j,g,h,i,null)},
a_I(d,e,f,g,h,i,j){return new B.bgC(g,h,j,e,i,d,f,null)},
h4N:function h4N(d){this.a=d},
a_F:function a_F(d,e){this.c=d
this.a=e},
aBI:function aBI(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
deA:function deA(d){this.a=d},
dey:function dey(d){this.a=d},
dez:function dez(d){this.a=d},
byE:function byE(){},
Wo:function Wo(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFM:function aFM(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e1y:function e1y(d){this.a=d},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0v:function e0v(d,e,f){this.a=d
this.b=e
this.c=f},
e0u:function e0u(d){this.a=d},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0B:function e0B(d,e,f){this.a=d
this.b=e
this.c=f},
e0A:function e0A(d){this.a=d},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1n:function e1n(d){this.a=d},
e0T:function e0T(d,e,f){this.a=d
this.b=e
this.c=f},
e0Q:function e0Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e0z:function e0z(d){this.a=d},
e10:function e10(d){this.a=d},
e1_:function e1_(){},
e0F:function e0F(d){this.a=d},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1l:function e1l(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0S:function e0S(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e){this.a=d
this.b=e},
e18:function e18(d){this.a=d},
e17:function e17(d){this.a=d},
e19:function e19(){},
e1a:function e1a(){},
e1b:function e1b(d,e){this.a=d
this.b=e},
e1d:function e1d(){},
e1e:function e1e(d){this.a=d},
e16:function e16(d,e){this.a=d
this.b=e},
e11:function e11(d){this.a=d},
e12:function e12(d){this.a=d},
e13:function e13(d){this.a=d},
e14:function e14(d){this.a=d},
e15:function e15(d){this.a=d},
e0C:function e0C(){},
e0D:function e0D(d){this.a=d},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0x:function e0x(d,e,f){this.a=d
this.b=e
this.c=f},
e0U:function e0U(d){this.a=d},
e0V:function e0V(d,e,f){this.a=d
this.b=e
this.c=f},
e0O:function e0O(d,e){this.a=d
this.b=e},
e0K:function e0K(d){this.a=d},
e0H:function e0H(d,e,f){this.a=d
this.b=e
this.c=f},
e0L:function e0L(d){this.a=d},
e0M:function e0M(d){this.a=d},
e0N:function e0N(){},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0I:function e0I(d){this.a=d},
e0G:function e0G(d,e,f){this.a=d
this.b=e
this.c=f},
e0J:function e0J(){},
e0Z:function e0Z(d){this.a=d},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e1i:function e1i(d,e){this.a=d
this.b=e},
e1f:function e1f(d){this.a=d},
e1g:function e1g(d,e){this.a=d
this.b=e},
e1h:function e1h(d){this.a=d},
e1v:function e1v(d){this.a=d},
e1t:function e1t(d){this.a=d},
e1u:function e1u(d){this.a=d},
e1w:function e1w(){},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1q:function e1q(d,e,f){this.a=d
this.b=e
this.c=f},
e1o:function e1o(d,e,f){this.a=d
this.b=e
this.c=f},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
aBF:function aBF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgB:function bgB(d,e,f){this.c=d
this.d=e
this.a=f},
dew:function dew(){},
dex:function dex(){},
adL:function adL(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
deU:function deU(){},
deT:function deT(d){this.a=d},
a_H:function a_H(d,e,f){this.c=d
this.d=e
this.a=f},
aBK:function aBK(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
deQ:function deQ(d){this.a=d},
deR:function deR(d,e,f){this.a=d
this.b=e
this.c=f},
deS:function deS(d,e){this.a=d
this.b=e},
deO:function deO(d,e){this.a=d
this.b=e},
deM:function deM(d){this.a=d},
deK:function deK(d){this.a=d},
deH:function deH(d){this.a=d},
deN:function deN(d){this.a=d},
deJ:function deJ(d){this.a=d},
deP:function deP(d){this.a=d},
deL:function deL(d){this.a=d},
deI:function deI(d){this.a=d},
a_E:function a_E(d,e,f){this.c=d
this.d=e
this.a=f},
aBH:function aBH(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
det:function det(d){this.a=d},
des:function des(d,e){this.a=d
this.b=e},
deu:function deu(d){this.a=d},
der:function der(d,e){this.a=d
this.b=e},
dev:function dev(d){this.a=d},
deq:function deq(d,e){this.a=d
this.b=e},
dem:function dem(d){this.a=d},
den:function den(d){this.a=d},
deo:function deo(d,e){this.a=d
this.b=e},
dep:function dep(d){this.a=d},
QQ:function QQ(d,e,f){this.c=d
this.d=e
this.a=f},
aBN:function aBN(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
df6:function df6(d){this.a=d},
df7:function df7(d){this.a=d},
df8:function df8(d){this.a=d},
df9:function df9(d){this.a=d},
dfa:function dfa(d,e){this.a=d
this.b=e},
dfb:function dfb(d){this.a=d},
dfd:function dfd(d){this.a=d},
dfc:function dfc(d){this.a=d},
a_J:function a_J(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBL:function aBL(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
df2:function df2(d,e){this.a=d
this.b=e},
df3:function df3(d,e){this.a=d
this.b=e},
deV:function deV(d,e,f){this.a=d
this.b=e
this.c=f},
deW:function deW(d){this.a=d},
deX:function deX(){},
df1:function df1(){},
deY:function deY(d,e){this.a=d
this.b=e},
deZ:function deZ(d,e){this.a=d
this.b=e},
df_:function df_(d,e){this.a=d
this.b=e},
df0:function df0(d,e){this.a=d
this.b=e},
adJ:function adJ(d,e){this.c=d
this.a=e},
del:function del(d){this.a=d},
a_D:function a_D(d){this.a=d},
aBG:function aBG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_K:function a_K(d,e){this.c=d
this.a=e},
aBM:function aBM(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
df5:function df5(d){this.a=d},
df4:function df4(d){this.a=d},
bgC:function bgC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i_E(){var x,w=$.ox(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hh(v)},
Ou(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ou=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$Ou)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Ou)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.u(s,"relays")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.aa(n)
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
return A.i($async$Ou,w)},
a8z(d){return B.i_F(d)},
i_F(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8z)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hR("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cS,null),$async$a8z)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8z,w)},
Wy(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ou(),$async$Wy)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dI(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8z(s),$async$Wy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wy,w)},
Wz(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ca(),$async$Wz)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bs(f,!0,y.U)
else{t=A.T(f).k("Y<1>")
u=A.B(new A.Y(f,new B.cfN(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i_E()
t=A.T(u).k("N<1,ac<q,aK>>")
r=A.B(new A.N(u,new B.cfO(s),t),t.k("ak.E"))
x=6
return A.b(B.Ou(),$async$Wz)
case 6:q=i
J.aJ(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8z(q),$async$Wz)
case 7:x=8
return A.b(B.a8A(r,u,g,s),$async$Wz)
case 8:v=new A.bsu(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wz,w)},
arq(d){var x=0,w=A.j(y.y),v,u,t
var $async$arq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ou(),$async$arq)
case 3:u=t.u(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.u(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arq,w)},
cfP(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ou(),$async$cfP)
case 3:s=r.u(f,C.a.i(d))
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
return A.i($async$cfP,w)},
a8A(d,e,f,g){return B.i_G(d,e,f,g)},
i_G(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8A=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.u(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aro("media",r,new B.cfM(s,e,g),f,q),$async$a8A)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wy(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8A)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wy(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8A)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.Wy(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8A)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8A,w)},
Fw(d,e,f){return B.i_H(d,e,f)},
i_H(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fw=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.X(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ca(),$async$Fw)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arq(b3),$async$Fw)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.iV,null,g),$async$Fw)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arq(b3),$async$Fw)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ou(),$async$Fw)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aI(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ct(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a8(a4)
r=a1.gL(a4)
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
a8=$.f0().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nz(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abY(a8.a,b0,"media",a8.d,a9).Du(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1K(k,n,o,s,b7),$async$Fw)
case 17:j=c0
if(j!=null){J.c4(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.aa(b4)
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
case 18:g.W(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.u(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f0().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nz(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abY(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fw)
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
a0=A.dI(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8z(e),$async$Fw)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fw,w)},
cfN:function cfN(){},
cfO:function cfO(d){this.a=d},
cfM:function cfM(d,e,f){this.a=d
this.b=e
this.c=f},
aTq(){var x=0,w=A.j(y.H),v,u
var $async$aTq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.iaP=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTq)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTq)
case 3:u=$.hiQ
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTq)
case 4:$.hiQ=$.ijE=$.ijF=null
return A.h(null,w)}})
return A.i($async$aTq,w)},
fGZ(d){var x=0,w=A.j(y.H),v,u
var $async$fGZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaC){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fH_(new A.c8(u,y.aY))
x=3
return A.b(u.ix(0,C.hU,new B.fH0()),$async$fGZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fGZ,w)},
ijC(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i_o(x):x},
hiU(d){var x=0,w=A.j(y.T),v,u,t
var $async$hiU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aX(t,13))
if(C.a.X(u,"WR")){v=B.ars(u)
x=1
break}v=B.hdk(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hiU,w)},
hiT(d){var x=0,w=A.j(y.T),v,u,t
var $async$hiT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aX(t,14))
if(C.a.X(u,"WR")){v=B.art(u)
x=1
break}v=B.hdk(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hiT,w)},
h0e(d){var x=0,w=A.j(y.T),v
var $async$h0e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.art(d),$async$h0e)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h0e,w)},
bF0(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bF0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hiT(d),$async$bF0)
case 3:q=f
if(q==null){x=1
break}t=C.X.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bF0,w)},
fui(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fui=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Ws(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.Cp(d.a7Y(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fui,w)},
Hq(d,e,f){return B.ilX(d,e,f)},
ilX(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hq=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hiU(a1),$async$Hq)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aP(0,e,null)
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
if(C.a.X(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aX(o,13))
m=C.a.X(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hNh().aH3(D.dIv,null),$async$Hq)
case 4:l=d.hiQ=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adn(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fHA(f,k,new B.fHB(f,a2,k,j,a0,p),a2,j,a0,p,new A.c8(t,y.ch))
x=5
return A.b(l.a9j(0,new B.YK(r,"offer")),$async$Hq)
case 5:d=l
x=7
return A.b(l.an_(0),$async$Hq)
case 7:x=6
return A.b(d.a9b(0,a4),$async$Hq)
case 6:x=8
return A.b(B.fGZ(l),$async$Hq)
case 8:x=9
return A.b(l.arn(),$async$Hq)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ijC(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aru(m,h),$async$Hq)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.huA(h)
case 11:v=new A.brJ(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hq,w)},
fH_:function fH_(d){this.a=d},
fH0:function fH0(){},
fHB:function fHB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fHA:function fHA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fHz:function fHz(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
io1(d){switch(d){case"new":return D.eGn
case"checking":return D.eGo
case"connected":return D.eGq
case"completed":return D.eGp
case"failed":return D.eGs
case"disconnected":return D.eGt
case"closed":return D.aSJ
case"count":return D.eGr}return D.aSJ},
io2(d){switch(d){case"new":return D.aSK
case"gathering":return D.eGu
case"complete":return D.aaC}return D.aSK},
iyA(d){switch(d){case"stable":return D.eGv
case"have-local-offer":return D.eGw
case"have-local-pranswer":return D.eGy
case"have-remote-offer":return D.eGx
case"have-remote-pranswer":return D.eGz
case"closed":return D.aSQ}return D.aSQ},
iwJ(d){switch(d){case"new":return D.aSN
case"connecting":return D.aSO
case"connected":return D.aSP
case"closed":return D.aaD
case"disconnected":return D.aSM
case"failed":return D.aSL}return D.aaD},
aaV:function aaV(d,e){this.a=d
this.b=e},
Pz:function Pz(d,e){this.a=d
this.b=e},
YJ:function YJ(d,e){this.a=d
this.b=e},
Py:function Py(d,e){this.a=d
this.b=e},
G0:function G0(d,e){this.a=d
this.b=e},
ctI:function ctI(){},
hf6(d){var x=new B.G_()
x.a=d
x.b=!0
return x},
G_:function G_(){this.b=this.a=$},
aaU:function aaU(){},
aw0:function aw0(){},
YK:function YK(d,e){this.a=d
this.b=e},
hdg(){var x=0,w=A.j(y.H)
var $async$hdg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hdg,w)},
hdj(d,e,f){var x=0,w=A.j(y.T),v
var $async$hdj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.X(e.c,"video/")||e.mR(D.nc))){v=null
x=1
break}v=B.h0v(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdj,w)},
huA(d){var x,w=C.agy.a5Z(C.dV.aK(d),null)
if(w.length===0){x=C.dV.aK(d)
return C.cL.gco().aK(x)}return C.cL.gco().aK(w)},
i_n(d){var x,w,v=C.cD.aK(d)
try{x=C.cb.cE(0,C.agx.bh5(v,!1))
return x}catch(w){x=C.cb.cE(0,v)
return x}},
hdk(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.X(t,s))return B.i_n(C.a.aX(t,s.length))
w=e+"|"
if(C.a.X(t,w)){x=C.a.aX(t,w.length)
try{v=C.cb.cE(0,C.cD.aK(x))
return v}catch(u){return x}}return null},
i_o(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.X(t,"a=extmap"))continue
if(C.a.X(t,"a=ssrc"))continue
if(C.a.X(t,"a=msid"))continue
if(C.a.X(t,"a=rtcp"))continue
if(C.a.X(t,"a=rtpmap"))continue
if(C.a.X(t,"a=fmtp"))continue
if(C.a.X(t,"a=rtcp-fb"))continue
if(C.a.X(t,"a=mid:"))continue
if(C.a.X(t,"a=group:"))continue
if(C.a.X(t,"a=setup:"))continue
if(C.a.X(t,"a=ice-options:"))continue
if(C.a.X(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
i_p(){var x,w=$.ox(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hh(v)},
b1Q(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1Q)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$b1Q,w)},
cfv(d,e){return B.i_q(d,e)},
i_q(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cfv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hR("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cS,null),$async$cfv)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$cfv,w)},
b1T(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1Q(d),$async$b1T)
case 3:t=f
if(t!=null){u=J.u(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1T,w)},
b1S(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i_p()
r=C.a.i(f)
t=C.dV.aK(s)
x=3
return A.b(B.cfv(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gco().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1S)
case 3:if(!h){v=null
x=1
break}v=new A.a1K("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1S,w)},
b1R(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1Q(o),$async$b1R)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.u(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cE(0,C.cD.aK(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1R,w)},
cfw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cfw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bG_("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cS),$async$cfw)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cfw,w)},
b1U(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Js(),$async$b1U)
case 3:u=t.u(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1U,w)},
arl(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arl)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.u(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1U(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arl,w)},
arj(d,e){var x=0,w=A.j(y.H)
var $async$arj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arj)
case 3:x=2
return A.b(g.aG("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arj)
case 2:return A.h(null,w)}})
return A.i($async$arj,w)},
a8r(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8r)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Js(),$async$a8r)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.ds(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8q(s),$async$a8r)
case 5:x=6
return A.b(B.arj(f,u),$async$a8r)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8r,w)},
a8s(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8s=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8s)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Js(),$async$a8s)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.u(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a1(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.an(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.arj(g,q),$async$a8s)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8q(u),$async$a8s)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8s,w)},
a8t(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8t)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Js(),$async$a8t)
case 4:u=o.u(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1N(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8t)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aG("String","ngmy_doc_share_school_session_"+s,C.X.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8t)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8t,w)},
cfx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfx)
case 7:s=f
p=A.v(n)
r=A.aW(J.u(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aP(0,r,null)
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
return A.i($async$cfx,w)},
Jt(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfx(d),$async$Jt)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.u(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1U(t),$async$Jt)
case 4:s=g
x=s==null||!J.z(J.u(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ark(d),$async$Jt)
case 7:v=!1
x=1
break
case 6:u=J.u(s,"ownerEmail")
u=B.b1N(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ark(d),$async$Jt)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jt,w)},
ark(d){var x=0,w=A.j(y.H)
var $async$ark=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ark)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ark)
case 2:return A.h(null,w)}})
return A.i($async$ark,w)},
b1V(){var x,w=$.ox(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hh(v)},
a8u(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hdl(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfA(d){return B.i_s(d)},
i_s(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8u(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfA)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$cfA,w)},
arn(d,e){return B.i_t(d,e)},
i_t(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8u(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hR("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cS,null),$async$arn)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$arn,w)},
cfC(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8u(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arn(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfC)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfC,w)},
cfB(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8u(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arn(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfB,w)},
cfD(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfD=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8u(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arn(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfD,w)},
cfE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hdl(d)){v=null
x=1
break}x=3
return A.b(B.cfA(d),$async$cfE)
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
return A.i($async$cfE,w)},
a8B(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8B=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8B)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8B)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.u(s,"signals")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.aa(n)
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
return A.i($async$a8B,w)},
arr(d){return B.i_I(d)},
i_I(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$arr)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hR("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cS,null),$async$arr)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arr,w)},
ars(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ars=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ca(),$async$ars)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8B(),$async$ars)
case 4:s=f
r=J.u(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.u(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cE(0,C.cD.aK(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dI(A.a1(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aJ(s,j,o)
x=9
return A.b(B.arr(s),$async$ars)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.aa(i)
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
return A.i($async$ars,w)},
aru(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aru=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ca(),$async$aru)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8B(),$async$aru)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dI(A.a1(s,r,q),r,q)
r=C.dV.aK(C.a.i(e))
q.n(0,"answer",C.cL.gco().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arr(u),$async$aru)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aru,w)},
art(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$art=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ca(),$async$art)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8B(),$async$art)
case 4:s=o.u(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.u(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cE(0,C.cD.aK(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$art,w)},
aqj(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qp)){v=null
x=1
break}x=3
return A.b(p.lx(e),$async$aqj)
case 3:r=g
u=4
x=7
return A.b(r.hk(C.hi),$async$aqj)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.uL(o))
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
return A.i($async$aqj,w)},
iuQ(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fZo(d){return B.iuS(d)},
iuS(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fZo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iF("media").LL(d,3600),$async$fZo)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$fZo,w)},
DR(d,e,f,g,h,i){var x=null
return B.iuP(d,e,f,g,h,i)},
iuP(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DR=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.huD(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hdn(r),$async$DR)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fZo(o),$async$DR)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8v(r),$async$DR)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWr)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MQ(A.a([],g))
x=15
return A.b(d.f9(0,A.awO("GET",A.cD(n,0,null))).dc(0,C.Hg),$async$DR)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8v(r),$async$DR)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lk(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DR)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1X(r,k),$async$DR)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DR)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Ws(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.aa(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a8v(r),$async$DR)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DR,w)},
aT4(d){return B.iuR(d)},
iuR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aT4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iF("media").W(0,d),$async$aT4)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aT4,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[96]
F=c[117]
B=a.updateHolder(c[17],B)
D=c[116]
H=c[82]
G=c[92]
I=c[38]
K=c[110]
L=c[40]
B.ctJ.prototype={
aH3(d,e){return this.cRY(d,e)},
cRY(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aH3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dI(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cv(t)))
t=J.k(u)
v=B.i4p(C.cL.gco().aK(new A.da(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aH3,w)}}
B.b75.prototype={
bDn(d){var x=this,w=x.w
w.onclose=A.hw(new B.ctE(x))
w.onopen=A.hw(new B.ctF(x))
w.onmessage=A.hw(new B.ctG(x))
w.onbufferedamountlow=A.hw(new B.ctH(x))},
gd3(d){return this.x},
ajd(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G_()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hf6(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$ajd)
case 8:v=t.hf6(s.aps(f,0,null))
x=1
break
case 7:case 4:v=B.hf6(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajd,w)}}
B.b76.prototype={
bDo(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hw(new B.ctK(x)))
w.addEventListener("icecandidate",A.hw(new B.ctL(x)))
w.addEventListener("iceconnectionstatechange",A.hw(new B.ctM(x)))
w.onicegatheringstatechange=A.hw(new B.ctN(x))
w.addEventListener("signalingstatechange",A.hw(new B.ctO(x)))
if(!$.hn1())w.addEventListener("connectionstatechange",A.hw(new B.ctP(x)))
w.addEventListener("negotiationneeded",A.hw(new B.ctQ(x)))
w.addEventListener("track",A.hw(new B.ctR(x)))},
an_(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$an_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ei(s.createAnswer(A.kl(A.cv(A.S(y.N,y.z)))),y.aQ),$async$an_)
case 3:t=f
v=new B.YK(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$an_,w)},
a9b(d,e){return this.bsj(0,e)},
bsj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9b)
case 2:return A.h(null,w)}})
return A.i($async$a9b,w)},
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
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9j)
case 2:return A.h(null,w)}})
return A.i($async$a9j,w)},
arn(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YK(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arn,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adK.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_G.prototype={
T(){return new B.aBJ()},
gd2(){return this.c}}
B.aBJ.prototype={
Z(){this.a4()
this.afJ()},
afJ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1O(u.e,u.c),$async$afJ)
case 2:t=e
if(v.c!=null)v.l(new B.deE(v,t))
return A.h(null,w)}})
return A.i($async$afJ,w)},
Rn(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arg(t.e,t.c,!1),$async$Rn)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fux)
x=1
break}x=4
return A.b(B.a8p(u.a.c,"individual"),$async$Rn)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7x(A.ed(new B.deB(u),!1,null,y.H)),$async$Rn)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
K2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$K2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fEQ(o),$async$K2)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8t(o.e,r,s,q),$async$K2)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.frw)
x=1
break}x=5
return A.b(B.a8p(u.a.c,"member"),$async$K2)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7x(A.ed(new B.deD(u),!1,null,y.H)),$async$K2)
case 6:case 1:return A.h(v,w)}})
return A.i($async$K2,w)},
yP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8o(t.e,o,t.f,t.r,t.w,s),$async$yP)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8p(u.a.c,"org_owner"),$async$yP)
case 4:x=5
return A.b(B.arl(u.a.c),$async$yP)
case 5:r=e
x=r==null||!J.z(J.u(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fFk(o),$async$yP)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8r(s,t,o,q.c),$async$yP)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.frs)
x=1
break}x=10
return A.b(B.arl(u.a.c),$async$yP)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7x(A.ed(new B.deC(u),!1,null,y.H)),$async$yP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yP,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.nE:C.qB,p=B.hdi(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aD(d,C.dF,y.m).w
w=A.m(28)
v=A.a([new A.ab(0,C.H,C.aD.j(0.35),C.fU,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fOK,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.hr,s,s,s),C.aB,D.h7Q,C.T,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.D,s,C.e,C.h,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.cd6,C.m),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lV(new B.deG(),s),C.P,v,C.e4,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aed(C.eY,C.aFb,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gckO(),s),C.af],u))
w.push(new B.aed(C.pJ,C.a65,"Team Member","Sign in with your organization access code + password",t.gclF(),s))
w.push(C.af)
w.push(new B.aed(C.ar8,C.a7I,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcla(),s))
return A.c5(s,q,A.bm(!0,A.cc(A.x(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aed.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.m5,s,s,s),C.aw,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.D,s,C.e,C.h,0,C.p),1),A.W(C.zE,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.n(p,s,w,q,s,s,C.m),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aEn.prototype={}
B.aHz.prototype={}
B.jD.prototype={
mR(d){var x=this.b,w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aX(x,w+1).toLowerCase())},
gas3(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ac(x/1024,1)+" KB"
if(x<1073741824)return C.i.ac(x/1048576,1)+" MB"
return C.i.ac(x/1073741824,2)+" GB"},
aj(){var x,w=this,v=A.S(y.N,y.z)
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
bgz(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cQt(d){return this.bgz(null,d)},
aGN(d){return this.bgz(d,null)}}
B.Wm.prototype={
T(){return new B.aFK(new A.cB(null,y.A))},
gd2(){return this.c}}
B.aFK.prototype={
Z(){this.a4()
this.afK()},
afK(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Co(u.a.c),$async$afK)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e0r(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afK,w)},
afL(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fy(s)),$async$afL)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fvs)
case 1:return A.h(v,w)}})
return A.i($async$afL,w)},
a08(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a08=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqj(s.d,4),$async$a08)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rp(r,"ngmy_my_code_"+m+".png"),$async$a08)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a08,w)},
ajF(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abx("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajF)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajF,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.nE:C.qB,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lJ
else if(q.e==null)x=A.as(new A.D(C.eA,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.G,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.o(p,A.x(A.a([t,C.P,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,E.SI,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,C.anM,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.H,C.aD.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.cc(A.x(A.a([x,C.ni,w,C.lg,new A.e6(A.o(p,A.qi(p,p,!1,B.i_j(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lg,A.A(A.a([A.E(A.eo(C.DL,p,C.WT,q.gcd2(),p),1),C.as,A.E(A.db(C.A5,p,C.acX,q.gcd3(),A.bn(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.T,new A.a5(1/0,p,A.eo(G.a4S,p,D.h3n,q.gcAG(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,I.aok,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wq.prototype={
T(){return new B.aFN(new A.at(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aFN.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.Jr(x==null?"":x)
if(w!=null)this.d.sb2(0,w)},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a3()},
a09(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a09=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jr(u.d.a.a)
if(t==null){u.l(new B.e1A(u))
x=1
break}u.l(new B.e1B(u))
s=u.a
r=s.c
x=3
return A.b(B.a8n(s.d,new B.e1C(u),t,r),$async$a09)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e1D(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a09,w)},
a3q(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.l(new B.e1E(r))
u=4
q=J.fl(r.a.d)
x=7
return A.b(B.rX(r.a.c,q),$async$a3q)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e1F(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aje(p,m,l,j,k),$async$a3q)
case 8:o=e
if(r.c!=null)r.l(new B.e1G(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.l(new B.e1H(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e1I(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3q,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ajG:D.ah7,h=j?D.alx:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aiE:C.bn
i=[i,e,h,g,f,j?C.fs:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dp(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dp(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c03,C.f,k,k,new A.n(k,k,k,A.m(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.m),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.D,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.m),k,k,k,k,C.fo,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.G,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,E.SI,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uY(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bm5()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.OW,k,k,"",k,!0,new A.b6(4,A.m(18),new A.aw(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.aw(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e1J(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mF,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.G,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.Mv(l.a.d,4)
m=A.B(new A.N(m,new B.e1K(x,new A.aIR(i)),m.$ti.k("N<ak.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ls,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.dc,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.m),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fpZ)
else q.push(A.W(C.l4,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cV(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b_,new A.n(u,k,s,t,k,k,C.m),C.iU,k,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cc(A.x(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bIp,k,k,C.ah),1)
u=l.f?k:l.gcAH()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eo(G.a4S,k,D.h4u,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.ba(q,C.a1),new A.aw(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcd4()
t=A.bn(C.aD,k,k,0,C.c,k,C.nL,k,new A.ba(A.m(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lC(new B.e1L(),A.x(A.a([e,new A.D(D.bHT,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.u7:D.h2K,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.ck,C.a15,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bm5.prototype={
pg(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.ho(C.bC,v.length),C.aP)}}
B.Wn.prototype={
T(){return new B.aFL()}}
B.aFL.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bc(w,C.b8,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.at(new A.bc(x,C.b8,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.at(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.ax()
v.R$=0
v=w.e
v===$&&A.d()
v.V$=x
v.R$=0
v=w.f
v===$&&A.d()
v.V$=x
v.R$=0
w.a3()},
afM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e0s(r))
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
return A.b(B.a8s(p,m,n,o,C.a.i(l).length===0?null:l),$async$afM)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.fv3)
s=[1]
x=4
break}p.K(y.q).f.U(D.ftF)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e0t(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afM,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.nE:C.qB,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fW3,s,s,s,1,s,!0),p=A.o(s,D.bzV,C.f,s,s,new A.n(s,s,s,A.m(22),s,C.IF,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c7q,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c7l,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c7B,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcd5()
u=A.bn(C.aD,s,s,s,s,C.hl,s,s,s,s,s,s)
return A.c5(q,r,A.cc(A.x(A.a([p,C.dc,o,C.af,x,C.af,w,C.ni,A.bJ(t.r?C.u7:C.aZh,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adr.prototype={}
B.bz1.prototype={
a6f(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.c9(r.a7Y()))
x=3
return A.b(B.Ss(t,s),$async$a6f)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6f,w)},
gd2(){return this.a}}
B.Os.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_F.prototype={
T(){return new B.aBI(new A.at(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aBI.prototype={
Z(){this.a4()
$.aU.x1$.push(new B.deA(this))},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a3()},
cdb(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2L(d),u=x.a.c,t=u?C.iO:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nE:v.a[0],p=A.m(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.H,C.aD.j(u?0.25:0.12),C.fU,32)],n),l=A.o(w,H.atQ,C.f,w,w,new A.n(w,w,w,A.m(18),A.a([new A.ab(0,C.H,C.aD.j(0.4),C.cz,16)],n),C.auF,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.G,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uY(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byE()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CV,w,w,"",w,!0,new A.b6(4,A.m(16),new A.aw(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b7u),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dey(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mF,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cO(C.MB,new A.bP(new A.n(t,w,o,p,m,w,C.m),C.bl,new A.D(C.wT,A.x(A.a([l,C.aO,k,C.P,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dU(C.oe,new B.dez(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.ba(A.m(14),C.a1),new A.aw(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bP(new A.n(w,w,w,A.m(14),A.a([new A.ab(0,C.H,C.aD.j(0.35),C.cN,12)],n),F.QY,C.m),C.bl,A.aF(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.ezL,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcda(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.P4,w,C.d7,w,w,w)}}
B.byE.prototype={
pg(d,e){return e.amU(e.a.toUpperCase())}}
B.Wo.prototype={
T(){return new B.aFM(A.a([],y.r),A.aR(y.N))},
gd2(){return this.c}}
B.aFM.prototype={
Z(){var x=this
x.a4()
x.uv()
x.w=A.dg(C.jP,new B.e1y(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wx()
this.a3()},
a2j(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Or(u.a.c),$async$a2j)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bh(u.a.c),$async$a2j)
case 4:u.l(new s.e0W(u,e))
u.ip("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2j,w)},
uv(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Or(u.a.c),$async$uv)
case 3:t=e
x=4
return A.b(B.Bh(u.a.c),$async$uv)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e0X(u,s))
if(t>0)u.ip("Received "+A.v(t)+" file(s) via My Code.")
u.Ow(u.d)
B.Co(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uv,w)},
Ow(d){return this.bHr(d)},
bHr(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ow=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8x(r,u.a.c),$async$Ow)
case 8:p=f
if(u.c==null){x=1
break}new B.e0v(u,r,p).$0()
u.c.er()
case 7:if(!(C.a.X(r.c,"video/")||r.mR(D.nc))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wv(r,u.a.c),$async$Ow)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bh(u.a.c),$async$Ow)
case 12:u.l(new o.e0w(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Ow,w)},
OW(d){return this.bNR(d)},
bNR(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8x(d,u.a.c),$async$OW)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e0B(u,d,t))
x=6
return A.b(A.fH(new A.fy(t)),$async$OW)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fy(r.toUpperCase())),$async$OW)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OW,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uw(d,e){return this.cLJ(d,e)},
cLJ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e1m(r,e))
u=3
x=6
return A.b(d.$0(),$async$uw)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e1n(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uw,w)},
gaYA(){var x=this.a
return x.f||x.r||x.w},
IR(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYA()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cft(s,n,r,q,o,t),$async$IR)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fSg(o,u.a.c),$async$IR)
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
return A.b(B.DT(s,o,r,q,n,t),$async$IR)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IR,w)},
a1m(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1m=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arl(u.a.c),$async$a1m)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ip("No organization portal found.")
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
return A.b(A.a6(t,!1).cc(A.ed(new B.e0T(u,r,q),!1,null,y.H)),$async$a1m)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1m,w)},
a2t(d){return this.cua(d)},
cu9(){return this.a2t(1)},
cua(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYA()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ari(u.a.c),$async$a2t)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2t,w)},
adD(d,e,f){return this.c3S(d,e,f)},
c3S(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.uw(new B.e0Q(u,d,null,e,f),"Uploading\u2026"),$async$adD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adD,w)},
bHA(){B.hKg(!1,new B.e0z(this))
return},
czg(){this.l(new B.e10(this))},
aBf(){var x=0,w=A.j(y.H),v=this
var $async$aBf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHA()
return A.h(null,w)}})
return A.i($async$aBf,w)},
adz(){var x=0,w=A.j(y.H),v=this
var $async$adz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uw(new B.e0F(v),"Importing\u2026"),$async$adz)
case 2:return A.h(null,w)}})
return A.i($async$adz,w)},
Tr(d){return this.cL1(d)},
cL1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.X(t,"video/")||d.mR(D.nc)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cc(A.ed(new B.e1j(u,d),!1,null,y.H)),$async$Tr)
case 5:x=1
break
case 4:x=C.a.X(t,"image/")||d.mR(D.T1)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cc(A.ed(new B.e1k(u,d),!1,null,y.H)),$async$Tr)
case 8:x=1
break
case 7:x=u.c4A(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cc(A.ed(new B.e1l(u,d),!1,null,y.H)),$async$Tr)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tr,w)},
c4A(d){var x,w
if(C.a.X(d.c,"audio/"))return!0
x=d.b
w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cWI,C.a.aX(x,w+1).toLowerCase())},
ahn(d){return this.ckS(d)},
ckS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.X(d.c,"video/")||d.mR(D.nc)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cc(A.ed(new B.e0R(u,d),!1,null,y.H)),$async$ahn)
case 5:x=1
break
case 4:u.l(new B.e0S(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahn,w)},
SN(d){return this.cCa(d)},
cCa(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pF(t,s.c,s.f),$async$SN)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uw(new B.e1c(u,d),"Preparing QR\u2026"),$async$SN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
ak4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ak4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e1d(),A.T(t).k("N<1,q>")).fF(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e1e(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SN(r),$async$ak4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ak4,w)},
ajY(d){return this.cBI(d)},
cBI(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2L(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e16(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajY)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tr(d)
break
case"qr":u.SN(A.a([d],y.r))
break
case"send_my_code":u.clu(A.a([d],y.r))
break
case"save":u.ajl(d)
break
case"delete":u.JM(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajY,w)},
YS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0C(),A.T(t).k("N<1,q>")).fF(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e0D(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pF(t,s.c,s.f),$async$YS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uw(new B.e0E(u,r),"Preparing file\u2026"),$async$YS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YS,w)},
ait(d){return this.cst(d)},
cst(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ait=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hLh(d,!1),$async$ait)
case 3:s=f
r=s==null
q=B.a8u(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ip("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ait,w)},
aht(){var x=0,w=A.j(y.H),v=this,u
var $async$aht=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h_v(u,v.a.c),$async$aht)
case 2:return A.h(null,w)}})
return A.i($async$aht,w)},
bHz(){B.hKg(!1,new B.e0y(this,null))
return},
K1(d,e){return this.clv(d,e)},
b4i(d){return this.K1(null,d)},
clu(d){return this.K1(d,null)},
clv(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$K1=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Y<1>")
k=A.B(new A.Y(p,new B.e0U(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xU.cq().apH(!0,C.a2T,!1),$async$K1)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.uw(new B.e0V(l,s,r),"Preparing\u2026"),$async$K1)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.v(q))
s.ip("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ip("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bHe(p,l,e,s.a.c),$async$K1)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$K1,w)},
J7(d){return this.c3F(d)},
c3F(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.X(q,"NGMYDOCRCV|")||C.a.X(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i_i(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4i(t),$async$J7)
case 8:x=6
break
case 7:u.ip("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ip("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.X(d,"NGMYDOCSYNC3|")||C.a.X(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uw(new B.e0O(u,d),"Receiving video\u2026"),$async$J7)
case 11:x=1
break
case 10:x=12
return A.b(u.uw(new B.e0P(u,d),"Receiving\u2026"),$async$J7)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J7,w)},
EY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DM()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ait(t),$async$EY)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J7(s),$async$EY)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cc(A.ed(new B.e0Z(u),!1,null,y.N)),$async$EY)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uv(),$async$EY)
case 10:x=1
break
case 9:x=11
return A.b(u.J7(C.a.i(r)),$async$EY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EY,w)},
ajl(d){return this.cxN(d)},
cxN(d){var x=0,w=A.j(y.H),v=this
var $async$ajl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uw(new B.e0Y(v,d),"Saving\u2026"),$async$ajl)
case 2:return A.h(null,w)}})
return A.i($async$ajl,w)},
JM(d){return this.bQd(d)},
bQd(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lm(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JM)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cfw(t),$async$JM)
case 6:case 5:s=d.a
x=7
return A.b(B.Fv(u.a.c,s),$async$JM)
case 7:u.r.W(0,s)
x=8
return A.b(u.uv(),$async$JM)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JM,w)},
aka(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aka=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2L(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e1i(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aka)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aht()
break
case"import":u.adz()
break}case 1:return A.h(v,w)}})
return A.i($async$aka,w)},
cd8(d){var x=d.c
if(C.a.X(x,"video/")||d.mR(D.nc))return C.r6
if(C.a.X(x,"image/")||d.mR(D.T1))return C.ve
if(C.a.q(x,"pdf"))return C.Il
return D.arw},
B(d){var x,w,v=this,u=null,t=B.a2L(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Ix,u,u,u,new B.e1t(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c0E,u,u,u,v.e?u:v.gclb(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gczf()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bVQ:C.arU,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a4P,u,u,u,v.e?u:v.gcd9(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oW,u,u,u,v.e?u:v.gb5o(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c2r,u,u,u,v.e?u:new B.e1u(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lV(new B.e1v(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kc(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBF(C.jB,s,!0,t,w?u:v.gcCb(),u),1)
x.push(new A.D(D.bGC,A.lC(new B.e1w(),A.A(A.a([s,C.as,A.E(new B.aBF(C.tu,"Export",!1,t,w?u:v.gbU5(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.ck,C.iG,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgB(t,v.e?u:v.gb5o(),u)
else s=A.kt(!0,u,u,new B.e1x(v,t),s,u,D.bGu,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBF.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bn(C.aD,t,t,0,C.c,t,C.th,t,new A.ba(s,C.a1),t,t,t)
return A.db(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cd,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.th,t,new A.ba(s,C.a1),new A.aw(v,1,C.r,-1),t,t,t,t)
return A.eo(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgB.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.dew(),new A.D(C.a2_,A.x(A.a([A.lC(new B.dex(),A.o(x,A.W(C.zI,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ee,C.hC,x,x,new A.bt(0.86,1,w),s),C.e4,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.db(C.oW,x,D.h89,this.d,A.bn(C.aD,x,x,x,C.c,x,C.P2,x,new A.ba(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.CJ,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adL.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.X(p,"video/")
if(!o||i.mR(D.nc))p=D.dxg
else{p=C.a.X(p,"image/")||i.mR(D.T1)
n=y.O
p=p?A.a([C.cX,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.G,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gas3()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.nc))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.E(A.x(A.a([q,C.aw,A.c(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.D,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fS,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cj))
if(!(!o||i.mR(D.nc)))l.push(A.hb2(C.aD,!1,j,j,j,!1,j,j,new B.deT(k),j,j,new A.ba(A.m(5),C.a1),j,j,!1,u))
x=A.W(C.oP,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cj))
return A.lC(new B.deU(),new A.D(C.e8,A.aF(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1t,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.aw(t,s,C.r,-1)),j,j,C.aj),j),C.ck,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_H.prototype={
T(){return new B.aBK()},
gd2(){return this.c}}
B.aBK.prototype={
Z(){this.a4()
this.yE()},
t(){B.i_x(this.e)
this.a3()},
yE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rX(o.c,o.d),$async$yE)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i_A(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i_z(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.deQ(s))
x=1
break}s.l(new B.deR(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.l(new B.deS(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yE,w)},
a3p(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rX(t.c,t.d),$async$a3p)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fs2)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aje(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3p)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3p,w)},
c3y(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.z,v,new B.deO(w,t),C.h7,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fY(t,C.z,v,new B.deP(w),C.h7,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v4(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2L(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DN,u,u,u,v.gb9c(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.G8
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.db(C.DN,u,D.fRd,v.gb9c(),A.bn(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c3y()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_E.prototype={
T(){return new B.aBH(A.akd(),C.bF,C.bF)},
gd2(){return this.c}}
B.aBH.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fB(w,A.a4(w).k("fB<1>")).iG(new B.det(v))
x.gcZB().iG(new B.deu(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a4(x).k("fB<1>"))}if(x==null)x=C.bdU
x.iG(new B.dev(v))
v.yE()},
yE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rX(p.c,p.d),$async$yE)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dem(s))
x=1
break}x=8
return A.b(s.d.vz(0,new A.a4U(r,s.a.d.c)),$async$yE)
case 8:if(s.c==null){x=1
break}s.l(new B.den(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.l(new B.deo(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yE,w)},
a0a(){var x=0,w=A.j(y.H),v=this,u
var $async$a0a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hj(0),$async$a0a)
case 5:x=3
break
case 4:x=6
return A.b(u.iL(0),$async$a0a)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0a,w)},
aWq(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2L(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.G,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.G8
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bWM,C.f,o,o,new A.n(o,o,o,A.m(24),o,F.QY,C.m),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.dep(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.c(p.aWq(p.w)+" / "+p.aWq(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aD,o,o,o,o,D.foq,o,o,o,o,o,o)
r=p.f
q=A.W(r?C.vh:C.h8,o,o,o,o,o)
x=A.x(A.a([u,C.lg,t,x,C.dc,A.db(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcdc(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qU,x,o),o,o,o),o,!1,!1,o,o)}}
B.QQ.prototype={
T(){return new B.aBN()},
gd2(){return this.c}}
B.aBN.prototype={
Z(){this.a4()
this.QF()},
QF(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QF=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hdj(o.c,o.d,new B.df6(s)),$async$QF)
case 7:r=e
if(r==null||r.length===0){s.l(new B.df7(s))
x=1
break}s.e=r
q=A.imS(r)
if(q==null){s.l(new B.df8(s))
x=1
break}s.d=q
q.aV(0,s.gb46())
x=8
return A.b(q.iY(0).dc(0,C.pC),$async$QF)
case 8:if(s.c==null){x=1
break}s.l(new B.df9(s))
x=9
return A.b(q.qw(0),$async$QF)
case 9:q.u5(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.l(new B.dfa(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QF,w)},
cjq(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dfb(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DJ(0,x.gb46())
w=x.d
if(w!=null)w.t()
B.ix1(x.e)
x.a3()},
afP(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1W(u.c,u.d),$async$afP)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afP,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2L(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.G,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.nY,t,t,t,u.gcd6(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.G8
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajE(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AN(s,t),A.ay(t,A.xC(A.o(t,A.W(q?C.vh:C.h8,C.c,t,t,t,48),C.f,t,t,new A.n(C.b6,t,t,v,t,t,C.m),t,t,t,t,C.bS,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dfd(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_J.prototype={
T(){return new B.aBL(new A.cB(null,y.A))}}
B.aBL.prototype={
gcLp(){var x,w,v=this.a
if(v.e!==D.Uq)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aX(x,13))
if(C.a.X(w,"WR"))return w
return null},
gcL_(){var x,w,v=this.a
if(v.e!==D.AI)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aX(x,13))
if(C.a.X(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcLp()
if(x!=null){v.RO(x)
v.e=A.dg(C.Hj,new B.df2(v,x))}w=v.gcL_()
if(w!=null){v.RN(w)
v.f=A.dg(C.fQ,new B.df3(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
RN(d){return this.cqE(d)},
cqE(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arq(d),$async$RN)
case 3:t=f
x=4
return A.b(B.cfP(d),$async$RN)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.deV(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RN,w)},
RO(d){return this.cqF(d)},
cqF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h0e(d),$async$RO)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bF0(t),$async$RO)
case 4:if(u.c==null){x=1
break}u.l(new B.deW(u))
u.c.K(y.q).f.U(D.aW0)
case 1:return A.h(v,w)}})
return A.i($async$RO,w)},
gc8W(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcd7(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3b(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DM()){t=u.c
if(t!=null)t.K(y.q).f.U(D.fvd)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cc(A.ed(new B.deX(),!1,null,y.N)),$async$a3b)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bF0(s),$async$a3b)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aW0)
case 1:return A.h(v,w)}})
return A.i($async$a3b,w)},
abr(d){return this.bNS(d)},
bNS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fy(C.d.aN(t,", "))),$async$abr)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abr,w)},
afN(d){return this.bNA(d)},
bNA(d){var x=0,w=A.j(y.H),v=this
var $async$afN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fy(v.a.c)),$async$afN)
case 2:if(d.e!=null)d.K(y.q).f.U(D.fsw)
return A.h(null,w)}})
return A.i($async$afN,w)},
a35(d){return this.cxP(d)},
cxP(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a35=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqj(s.d,4),$async$a35)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rp(r,"ngmy_doc_share_qr.png"),$async$a35)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a35,w)},
gaZQ(){var x,w=this.a
if(w.e!==D.JK)return null
x=C.a.i(w.c)
if(C.a.X(x,"N2|"))return C.a.i(C.a.aX(x,3))
if(C.a.X(x,"http://")||C.a.X(x,"https://"))return x
if(C.a.X(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aX(x,13))
return null},
abo(d){return this.bNL(d)},
bNL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZQ()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fy(C.a.X(t,"http")?t:"N2|"+t)),$async$abo)
case 3:if(d.e!=null)d.K(y.q).f.U(D.fuc)
case 1:return A.h(v,w)}})
return A.i($async$abo,w)},
afO(){var x=0,w=A.j(y.H),v=this,u
var $async$afO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wx(),$async$afO)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afO,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2L(d),i=m.a,h=i.c
if(h.length>48)h=C.a.az(h,0,44)+"\u2026"
i=i.e
i=i!==D.JK&&i!==D.Uq&&i!==D.AI
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.JK||t===D.Uq||t===D.AI?l:A.aH(l,l,l,l,C.lx,l,l,l,m.gb1X(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gc8W(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.JK){t=C.aD.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.P,A.o(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.G,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.m),l,l,l,l,C.lV,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcd7(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.T,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c6t,D.h_U,new B.deY(m,d),l)],p))}if(m.a.e===D.JK&&m.gaZQ()!=null)C.d.u(q,A.a([C.T,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c2N,D.fXs,new B.deZ(m,d),l)],p))
if(m.a.e===D.AI){x=(m.w?C.dM:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ac(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gc:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.G,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.m),l,l,l,l,C.lV,l,l,l)],p))}if(m.a.e===D.Uq){x=(m.r?C.dM:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gc:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.G,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.m),l,l,l,l,C.lV,l,l,l),C.af,A.db(D.bZe,l,D.h33,m.gcyb(),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oS(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.h,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.eo(C.DL,l,C.WT,new B.df_(m,d),l),1),C.as,A.E(A.db(C.A5,l,C.acX,new B.df0(m,d),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bn,l,m.gb1X(),A.bn(C.aN,l,l,l,l,C.hl,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.df1(),y.C)}}
B.adJ.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cc(A.x(A.a([w,C.aO,A.o(x,A.qi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bJ(C.Bo,x,new B.del(d),x)],u),x,x,C.nu,v,x,x,x,x,D.fQb,x)}}
B.a_D.prototype={
T(){return new B.aBG(A.zZ(C.yZ,C.ok,C.vv))}}
B.aBG.prototype={
t(){this.d.t()
this.a3()},
azM(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.X(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fY_,x,x,x,1,x,!0),C.w,A.zY(this.d,C.bZ,this.gazL()),x,!1,!1,x,x)}}
B.a_K.prototype={
T(){return new B.aBM(A.zZ(C.yZ,C.ok,C.vv))},
gd2(){return this.c}}
B.aBM.prototype={
c4C(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.X(x,"NGMYDOCSYNC")||C.a.X(x,"N2|")||C.a.X(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MW("text/plain"),$async$ahQ)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.fv7)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahQ,w)},
acf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hLh(p,!0),$async$acf)
case 3:t=e
p=t==null
s=B.a8u(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.frD)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acf,w)},
t(){this.d.t()
this.a3()},
azM(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c4C(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.asV,v,v,v,w.gbTz(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a4W,v,v,v,w.gcnZ(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.va:C.Qb,v,v,v,v,v),v,v,v,new B.df5(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h3Z,v,v,v,1,v,!0)
u=A.zY(w.d,C.bZ,w.gazL())
x=A.m(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eG2],s),v),v,!1,!1,v,v)}}
B.bgC.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.py
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.o(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.py:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.G,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a25,A.A(A.a([u,C.ba,A.E(A.x(t,C.D,r,C.e,C.h,0,C.p),1),A.W(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaV.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pz.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YJ.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Py.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.G0.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ctI.prototype={}
B.G_.prototype={}
B.aaU.prototype={}
B.aw0.prototype={}
B.YK.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jD)","q(jD)","Wo(Z)","~()","a_G(Z)","H(H,jD)","QQ(Z)","~(nU)","cw(G_)","aA<jD?>(@)","Wm(Z)","Wq(Z)","D(jD)","jD(@)","ac<q,@>(jD)","a_F(Z)","Wn(Z)","a_H(Z)","a_E(Z)","a_J(Z)","adJ(Z)","ai<jD>()","a_K(Z)","adL(Z,H)","a_D(Z)","ac<q,aK>(jD)","cw(YJ)","cw(aaU)","aA<cw>(G_)"])
B.ctE.prototype={
$1(d){var x=this.a
x.x=D.aSI
x.y.I(0,D.aSI)},
$S:79}
B.ctF.prototype={
$1(d){var x=this.a
x.x=D.aSH
x.y.I(0,D.aSH)},
$S:79}
B.ctG.prototype={
$1(d){var x=this.a
x.ajd(A.ai_(d.data)).bF(new B.ctD(x),y.b)},
$S:79}
B.ctD.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ctH.prototype={
$1(d){},
$S:79}
B.ctK.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i4o(d.channel))},
$S:17}
B.ctL.prototype={
$1(d){},
$S:17}
B.ctM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.io1(w.iceConnectionState)
x.cx=w
if($.hn1())switch(w.a){case 0:x.cy=D.aSN
break
case 1:x.cy=D.aSO
break
case 3:x.cy=D.aSP
break
case 5:x.cy=D.aSL
break
case 6:x.cy=D.aSM
break
case 7:x.cy=D.aaD
break
default:break}},
$S:112}
B.ctN.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.io2(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:112}
B.ctO.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iyA(w.signalingState)},
$S:112}
B.ctP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iwJ(w.connectionState)},
$S:112}
B.ctQ.prototype={
$1(d){},
$S:112}
B.ctR.prototype={
$1(d){},
$S:17}
B.fAf.prototype={
$1(d){var x=y.F.a(new A.qy([],[]).o8(d.target.result,!1)),w=C.wJ.q(x.objectStoreNames,"blobs")
if(!w)C.wG.Gu(x,"blobs")},
$S:186}
B.h_j.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xl.ft(this.b)
$.eX.mK()
this.c.$1(d)},
$S:383}
B.h_l.prototype={
$1(d){return this.a.$1(B.idA(this.b,this.c))},
$S:31}
B.h_k.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.h_i.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h_y.prototype={
$1(d){var x=this
return B.hzA(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h_z.prototype={
$1(d){var x=this
return B.hzA(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fCW.prototype={
$1(d){var x=this
return B.cfq(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.deE.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.deB.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfq(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.deD.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfq(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.deC.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfq(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.deG.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bXR,x,x,x,new B.deF(d),x,x,x,x,x,x),A.E(A.FM(D.SL,!0,x,!1,C.a3Z,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.SL,x,g,C.aoB,0,e,f)},
$C:"$4",
$R:4,
$S:480}
B.deF.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fET.prototype={
$1(d){var x,w,v=null,u=A.aD(d,C.eV,y.m).w,t=this.a,s=t?C.iO:C.c,r=A.m(28),q=A.o(v,D.bAe,C.f,v,v,D.b99,v,v,v,v,D.aoq,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c1f,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.CX,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ata,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dU(C.dp,new B.fER(d),v),1),C.as,A.E(A.bJ(D.fWr,v,new B.fES(p,x,d),A.bn(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.m),v,v,v,C.Hn,v,v,v,v),v)},
$S:66}
B.fER.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fES.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.fsN)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEn(v,x))},
$S:0}
B.fFm.prototype={
$1(d){var x=this,w=null,v=A.aD(d,C.eV,y.m).w,u=x.a,t=u?C.iO:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bA4,C.f,w,w,D.baF,w,w,w,w,D.aoq,w,w,1/0),new A.D(C.CX,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hiE(u,"Organization name",C.HV,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hiE(u,"Access code",C.mo,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hiE(u,"Member password",C.DK,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h45,w,new B.fFl(r,q,p,d),A.bn(C.aD,w,w,w,w,C.hl,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.m),w,w,w,C.Hn,w,w,w,w),w)},
$S:66}
B.fFl.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.fsS)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHz(u,x,w))},
$S:0}
B.cfh.prototype={
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
p=C.a.X(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vV(p,null).dc(0,C.a14),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.c9(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cp(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.aa(h)
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
B.cfn.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfo.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cfp.prototype={
$1(d){return d.b},
$S:z+2}
B.cfj.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfk.prototype={
$1(d){return d.b},
$S:z+2}
B.cfi.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cfl.prototype={
$1(d){var x=J.u(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cfm.prototype={
$1(d){var x=J.u(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h_w.prototype={
$1(d){return new B.Wm(this.a,null)},
$S:z+11}
B.h_x.prototype={
$1(d){return new B.Wq(this.a,this.b,this.c,null)},
$S:z+12}
B.e0r.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e1A.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e1B.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e1C.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e1z(x,d))},
$S:2}
B.e1z.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1D.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1E.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e1F.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e1G.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1H.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e1I.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1L.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:108}
B.e1J.prototype={
$1(d){var x=this.a
return x.f?null:x.a09()},
$S:2}
B.e1K.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.X(s,"image/")||d.mR(D.T1))s=C.ve
else s=C.a.X(s,"video/")||d.mR(D.nc)?C.r6:D.arw
x=this.b.a
w=y.p
return new A.D(C.kc,A.A(A.a([A.o(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gas3(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.D,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e0s.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e0t.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cfr.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:100}
B.cfs.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:100}
B.h0x.prototype={
$2(d,e){return e===this.a},
$S:265}
B.fxh.prototype={
$1(d){return J.k(d)},
$S:16}
B.fD7.prototype={
$1(d){var x=this.b
B.ibw(C.HJ.ga7S(this.a)).bF(x.gCi(x),y.H)},
$S:133}
B.fD8.prototype={
$1(d){return this.a.de(0,null)},
$S:133}
B.fD9.prototype={
$0(){return null},
$S:11}
B.cfG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fDa.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
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
return new B.jD(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fHn.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fBj.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fBk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfL.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nc)},
$S:z+1}
B.h4N.prototype={
$1(d){return new B.a_F(this.a,null)},
$S:z+16}
B.deA.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fX()},
$S:7}
B.dey.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.dez.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e1y.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2j()},
$S:12}
B.e0W.prototype={
$0(){var x=J.bIl(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0X.prototype={
$0(){var x=J.bIl(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0v.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e0u(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGN(this.c)}},
$S:0}
B.e0u.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0w.prototype={
$0(){var x=J.bIl(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0B.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e0A(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGN(this.c)}},
$S:0}
B.e0A.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1m.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e1n.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e0T.prototype={
$1(d){return new B.Wn(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e0Q.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IR(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wr(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uv(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2t(s.gL(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0z.prototype={
$1(d){this.a.adD(d,"No files selected.","Added")},
$S:383}
B.e10.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e1_(),A.T(x).k("N<1,q>")))},
$S:0}
B.e1_.prototype={
$1(d){return d.a},
$S:z+2}
B.e0F.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xU.cq().d0z(C.a2T,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fl(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jJ(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.aa(j)
$.am.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ip("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.X(m,"NGMYDOCSYNC")&&!C.a.X(m,"{")){s.a.ip("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arp(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uv(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e1j.prototype={
$1(d){return new B.QQ(this.a.a.c,this.b,null)},
$S:z+7}
B.e1k.prototype={
$1(d){return new B.a_H(this.a.a.c,this.b,null)},
$S:z+18}
B.e1l.prototype={
$1(d){return new B.a_E(this.a.a.c,this.b,null)},
$S:z+19}
B.e0R.prototype={
$1(d){return new B.QQ(this.a.a.c,this.b,null)},
$S:z+7}
B.e0S.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e1c.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IR(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8w(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cu9(),$async$$0)
case 5:x=6
return A.b(p.uv(),$async$$0)
case 6:r=A.T(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e18(p),r),new B.e19(),r.k("N<ak.E,q>")).c0(0,new B.e1a())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cc(A.ed(new B.e1b(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pE(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wx(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e18.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e17(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e17.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e19.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e1a.prototype={
$1(d){return d.length!==0},
$S:3}
B.e1b.prototype={
$1(d){var x=this.a
return new B.a_J(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e1d.prototype={
$1(d){return d.a},
$S:z+2}
B.e1e.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e16.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kG,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gas3(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.X(p.c,"video/")
w=!x||p.mR(D.nc)?C.tz:C.nW
p=!x||p.mR(D.nc)?"Play video":"View"
return new A.bP(new A.n(s,v,new A.bF(new A.aw(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lk,v,v,C.m),C.bl,A.bm(!0,new A.D(C.CT,A.x(A.a([q,o,t,C.aB,B.a_I(!1,u,!1,w,p,new B.e11(d),v),B.a_I(!1,u,!1,C.jB,"Share via QR",new B.e12(d),"Letters/numbers QR code"),B.a_I(!1,u,!1,D.a43,"Send to their Code",new B.e13(d),"Enter someone else's personal code"),B.a_I(!1,u,!1,C.hH,"Download / save",new B.e14(d),v),C.am,B.a_I(!1,u,!0,C.ek,"Delete",new B.e15(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:799}
B.e11.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e12.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e13.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e14.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e15.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e0C.prototype={
$1(d){return d.a},
$S:z+2}
B.e0D.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0E.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8y(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hs(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pE(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0y.prototype={
$1(d){var x=this.a
x.uw(new B.e0x(x,d,this.b),"Preparing\u2026")},
$S:383}
B.e0x.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wr(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bHe(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0U.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e0V.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hdm(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0O.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hq(new B.e0K(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e0L(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e0M(s))
case 5:x=8
return A.b(r.b.ix(0,C.Hg,new B.e0N()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uv(),$async$$0)
case 9:s.ip("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0K.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e0H(x,d,e))},
$S:222}
B.e0H.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0L.prototype={
$1(d){return new B.adJ(this.a.a,null)},
$S:z+21}
B.e0M.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e0N.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e0P.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jr(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8m(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4i(B.Jr(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arp(new B.e0I(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hdl(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.X(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.uv(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e0J()).gL(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0I.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e0G(x,d,e))},
$S:222}
B.e0G.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0J.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nc)},
$S:z+1}
B.e0Z.prototype={
$1(d){return new B.a_K(this.a.a.c,null)},
$S:z+23}
B.e0Y.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1W(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1i.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.n(v[2],x,new A.bF(new A.aw(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lk,x,x,C.m),C.bl,A.bm(!0,new A.D(C.CT,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kG,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_I(!0,w,!1,C.mo,"My Code",new B.e1f(d),"Your personal code & QR \u2014 others send docs to you"),B.a_I(!1,w,!1,D.a43,"Send to their Code",new B.e1g(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_I(!1,w,!1,C.zY,"Import backup",new B.e1h(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:799}
B.e1f.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e1g.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bHz()},
$S:0}
B.e1h.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e1v.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JB(D.SL,x,C.a3Z,g,e,32),C.as,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d8(C.d.gH(D.SL).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:781}
B.e1t.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e1u.prototype={
$0(){this.a.aka()
return null},
$S:0}
B.e1w.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*10)),e)},
$S:108}
B.e1x.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adL(e,w,v,this.b,x.e,x.cd8(w),new B.e1p(x,w),new B.e1q(x,v,w),new B.e1r(x,w),new B.e1s(x,w),null)},
$S:z+24}
B.e1p.prototype={
$0(){this.a.ahn(this.b)
return null},
$S:0}
B.e1q.prototype={
$0(){var x=this.a
return x.l(new B.e1o(x,this.b,this.c))},
$S:0}
B.e1o.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e1r.prototype={
$0(){this.a.OW(this.b)
return null},
$S:0}
B.e1s.prototype={
$0(){this.a.ajY(this.b)
return null},
$S:0}
B.dew.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*18)),e)},
$S:108}
B.dex.prototype={
$3(d,e,f){return A.e1(C.z,f,e,null,null)},
$S:117}
B.deU.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:108}
B.deT.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.deQ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.deR.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.deS.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.deO.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fY(w,C.z,x,new B.deM(this.a),C.h7,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.deN(this.a))
return C.bM},
$S:140}
B.deM.prototype={
$3(d,e,f){$.aU.x1$.push(new B.deK(this.a))
return C.bM},
$S:197}
B.deK.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.deH(x))},
$S:7}
B.deH.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deN.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.deJ(x))},
$S:7}
B.deJ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deP.prototype={
$3(d,e,f){$.aU.x1$.push(new B.deL(this.a))
return C.bM},
$S:197}
B.deL.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.deI(x))},
$S:7}
B.deI.prototype={
$0(){return this.a.w=!0},
$S:0}
B.det.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.des(x,d))},
$S:2154}
B.des.prototype={
$0(){return this.a.f=this.b===C.vS},
$S:0}
B.deu.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.der(x,d))},
$S:7}
B.der.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dev.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deq(x,d))},
$S:7}
B.deq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dem.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.den.prototype={
$0(){return this.a.e=!1},
$S:0}
B.deo.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dep.prototype={
$1(d){return this.a.d.NR(0,A.dv(0,0,0,C.i.S(d),0,0))},
$S:6}
B.df6.prototype={
$0(){var x=this.a.a
return B.rX(x.c,x.d)},
$S:2155}
B.df7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.df8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.df9.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dfa.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dfb.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dfd.prototype={
$0(){var x=this.a
x.l(new B.dfc(x))},
$S:0}
B.dfc.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hj(0)
else x.qw(0)},
$S:0}
B.df2.prototype={
$1(d){return this.a.RO(this.b)},
$S:12}
B.df3.prototype={
$1(d){return this.a.RN(this.b)},
$S:12}
B.deV.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.deW.prototype={
$0(){return this.a.r=!0},
$S:0}
B.deX.prototype={
$1(d){return D.hFQ},
$S:z+25}
B.df1.prototype={
$2(d,e){if(d)B.Wx()},
$S:131}
B.deY.prototype={
$0(){return this.a.abr(this.b)},
$S:0}
B.deZ.prototype={
$0(){return this.a.abo(this.b)},
$S:0}
B.df_.prototype={
$0(){return this.a.afN(this.b)},
$S:0}
B.df0.prototype={
$0(){return this.a.a35(this.b)},
$S:0}
B.del.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.df5.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qA(),$async$$0)
case 2:u.l(new B.df4(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.df4.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfN.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nc)},
$S:z+1}
B.cfO.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfM.prototype={
$2(d,e){return this.bo6(d,e)},
bo6(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wy(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2156}
B.fH_.prototype={
$1(d){if(d===D.aaC&&(this.a.a.a&30)===0)this.a.h2(0)},
$S:z+27}
B.fH0.prototype={
$0(){},
$S:11}
B.fHB.prototype={
bpI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fui(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.huD(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpI(d,e)},
$S:597}
B.fHA.prototype={
$1(d){var x=this
d.b=new B.fHz(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fHz.prototype={
$1(d){return this.bpH(d)},
bpH(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1X(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.X.aP(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.u(r,"type")
q=J.k(n==null?"":n)
x=J.z(q,"meta")?13:15
break
case 13:n=J.u(r,"name")
n=J.k(n==null?"file":n)
m=J.u(r,"mime")
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
return A.b(B.fui(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.de(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.aa(j)
$.am.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8v(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.de(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aBJ.prototype,"gckO","Rn",0)
x(v,"gclF","K2",0)
x(v,"gcla","yP",0)
x(v=B.aFK.prototype,"gcd2","afL",0)
x(v,"gcd3","a08",0)
x(v,"gcAG","ajF",0)
x(v=B.aFN.prototype,"gcd4","a09",0)
x(v,"gcAH","a3q",0)
x(B.aFL.prototype,"gcd5","afM",0)
x(B.aBI.prototype,"gcda","cdb",4)
x(v=B.aFM.prototype,"gclb","a1m",0)
x(v,"gczf","czg",4)
x(v,"gb5o","aBf",0)
x(v,"gcCb","ak4",0)
x(v,"gbU5","YS",0)
x(v,"gcd9","EY",0)
x(B.aBK.prototype,"gb9c","a3p",0)
x(B.aBH.prototype,"gcdc","a0a",0)
x(v=B.aBN.prototype,"gb46","cjq",4)
x(v,"gcd6","afP",0)
x(v=B.aBL.prototype,"gcyb","a3b",0)
x(v,"gb1X","afO",0)
w(B.aBG.prototype,"gazL","azM",8)
x(v=B.aBM.prototype,"gcnZ","ahQ",0)
x(v,"gbTz","acf",0)
w(v,"gazL","azM",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aK,[B.ctI,B.aaU,B.aw0,B.aEn,B.aHz,B.jD,B.adr,B.bz1,B.G_,B.YK])
w(B.ctJ,B.ctI)
w(B.b75,B.aaU)
x(A.kp,[B.ctE,B.ctF,B.ctG,B.ctD,B.ctH,B.ctK,B.ctL,B.ctM,B.ctN,B.ctO,B.ctP,B.ctQ,B.ctR,B.fAf,B.h_j,B.h_l,B.h_k,B.h_y,B.h_z,B.fCW,B.deB,B.deD,B.deC,B.deG,B.fET,B.fFm,B.cfh,B.cfo,B.cfp,B.cfk,B.cfi,B.cfl,B.cfm,B.h_w,B.h_x,B.e1C,B.e1L,B.e1J,B.e1K,B.fxh,B.fD7,B.fD8,B.cfG,B.fDa,B.fHn,B.fBj,B.fBk,B.cfL,B.h4N,B.deA,B.dey,B.e1y,B.e0u,B.e0A,B.e0T,B.e0z,B.e1_,B.e1j,B.e1k,B.e1l,B.e0R,B.e18,B.e17,B.e19,B.e1a,B.e1b,B.e1d,B.e1e,B.e16,B.e0C,B.e0D,B.e0y,B.e0U,B.e0L,B.e0J,B.e0Z,B.e1i,B.e1v,B.e1w,B.dew,B.dex,B.deU,B.deT,B.deO,B.deM,B.deK,B.deN,B.deP,B.deL,B.det,B.deu,B.dev,B.dep,B.df2,B.df3,B.deX,B.cfN,B.cfO,B.fH_,B.fHA,B.fHz])
w(B.b76,B.aw0)
x(A.mB,[B.h_i,B.deE,B.deF,B.fER,B.fES,B.fFl,B.e0r,B.e1A,B.e1B,B.e1z,B.e1D,B.e1E,B.e1F,B.e1G,B.e1H,B.e1I,B.e0s,B.e0t,B.fD9,B.dez,B.e0W,B.e0X,B.e0v,B.e0w,B.e0B,B.e1m,B.e1n,B.e0Q,B.e10,B.e0F,B.e0S,B.e1c,B.e11,B.e12,B.e13,B.e14,B.e15,B.e0E,B.e0x,B.e0V,B.e0O,B.e0H,B.e0M,B.e0N,B.e0P,B.e0G,B.e0Y,B.e1f,B.e1g,B.e1h,B.e1t,B.e1u,B.e1p,B.e1q,B.e1o,B.e1r,B.e1s,B.deQ,B.deR,B.deS,B.deH,B.deJ,B.deI,B.des,B.der,B.deq,B.dem,B.den,B.deo,B.df6,B.df7,B.df8,B.df9,B.dfa,B.dfb,B.dfd,B.dfc,B.deV,B.deW,B.deY,B.deZ,B.df_,B.df0,B.del,B.df5,B.df4,B.fH0])
x(A.qz,[B.adK,B.Os,B.aaV,B.Pz,B.YJ,B.Py,B.G0])
x(A.ag,[B.a_G,B.Wm,B.Wq,B.Wn,B.a_F,B.Wo,B.a_H,B.a_E,B.QQ,B.a_J,B.a_D,B.a_K])
x(A.ah,[B.aBJ,B.aFK,B.aFN,B.aFL,B.aBI,B.aFM,B.aBK,B.aBH,B.aBN,B.aBL,B.aBG,B.aBM])
x(A.av,[B.aed,B.aBF,B.bgB,B.adL,B.adJ,B.bgC])
x(A.mh,[B.cfn,B.cfj,B.cfr,B.cfs,B.h0x,B.e0K,B.e0I,B.e1x,B.df1,B.cfM,B.fHB])
x(A.jL,[B.bm5,B.byE])})()
A.nK(b.typeUniverse,JSON.parse('{"b75":{"aaU":[]},"b76":{"aw0":[]},"a_G":{"ag":[],"w":[]},"aBJ":{"ah":["a_G"]},"aed":{"av":[],"w":[]},"Wm":{"ag":[],"w":[]},"Wq":{"ag":[],"w":[]},"aFK":{"ah":["Wm"]},"aFN":{"ah":["Wq"]},"bm5":{"jL":[]},"Wn":{"ag":[],"w":[]},"aFL":{"ah":["Wn"]},"a_F":{"ag":[],"w":[]},"Wo":{"ag":[],"w":[]},"adL":{"av":[],"w":[]},"a_H":{"ag":[],"w":[]},"a_E":{"ag":[],"w":[]},"QQ":{"ag":[],"w":[]},"a_J":{"ag":[],"w":[]},"adJ":{"av":[],"w":[]},"a_D":{"ag":[],"w":[]},"a_K":{"ag":[],"w":[]},"aBI":{"ah":["a_F"]},"byE":{"jL":[]},"aFM":{"ah":["Wo"]},"aBF":{"av":[],"w":[]},"bgB":{"av":[],"w":[]},"aBK":{"ah":["a_H"]},"aBH":{"ah":["a_E"]},"aBN":{"ah":["QQ"]},"aBL":{"ah":["a_J"]},"aBG":{"ah":["a_D"]},"aBM":{"ah":["a_K"]},"bgC":{"av":[],"w":[]}}'))
var y=(function rtii(){var x=A.aE
return{J:x("np"),k:x("MU()"),o:x("bq<q,q>"),F:x("zB"),g:x("aA<jD?>"),x:x("aA<~>"),V:x("U<ab>"),O:x("U<t>"),W:x("U<bk>"),Y:x("U<ac<q,Q>>"),t:x("U<ac<q,@>>"),r:x("U<jD>"),w:x("U<+file,name(mE,q)>"),u:x("U<d8>"),s:x("U<q>"),E:x("U<jL>"),a:x("U<e2>"),p:x("U<w>"),Z:x("U<H>"),G:x("bk"),A:x("cB<ah<ag>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bC<q,q>"),P:x("ac<q,@>"),f:x("ac<@,@>"),m:x("kH"),e:x("iCF"),af:x("Fb"),U:x("jD"),b:x("cw"),C:x("aK"),aK:x("yv"),ab:x("G_"),br:x("aw0"),v:x("YK"),N:x("q"),X:x("bt<G>"),Q:x("mT"),D:x("e2"),aw:x("bl<q>"),cd:x("Y<ac<q,@>>"),c7:x("w"),ch:x("c8<ai<jD>>"),aW:x("c8<e2?>"),aY:x("c8<~>"),cx:x("adK"),b1:x("bo<ai<jD>>"),cf:x("bo<e2?>"),d4:x("bo<~>"),c4:x("aEn"),bG:x("aHz"),q:x("p6"),B:x("pT<G_>"),c6:x("pT<aaV>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("ac<q,@>?"),l:x("jD?"),R:x("aK?"),c:x("YK?"),d:x("+answerQr,transfer(q,aA<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Os,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e2?"),cm:x("adr?"),bk:x("aEn?"),ag:x("aHz?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b7u=new A.aw(C.aD,2,C.r,-1)
D.cb8=new A.a7(C.a5,C.a9,C.x,C.a65,null,null)
D.b99=new A.n(null,null,null,C.mO,null,D.cb8,C.m)
D.baF=new A.n(null,null,null,C.mO,null,C.IF,C.m)
D.ah7=new A.t(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aiE=new A.t(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ajG=new A.t(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alx=new A.t(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fR5=new A.C("Your team portal",null,C.dn,null,null,null,null,null,null,null,null,null)
D.h53=new A.C("Share the access code and member password with your team. They only sign in once.",null,C.Fn,null,null,null,null,null,null,null,null,null)
D.do7=x([D.fR5,C.am,D.h53],y.p)
D.bzV=new A.fo(C.ah,C.e,C.h,C.D,null,C.p,null,0,D.do7,null)
D.h9z=new A.C("Create your organization",null,C.fW,null,null,null,null,null,null,null,null,null)
D.fVD=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fn,null,null,null,null,null,null,null,null,null)
D.dFu=x([D.h9z,C.am,D.fVD],y.p)
D.bA4=new A.fo(C.ah,C.e,C.h,C.D,null,C.p,null,0,D.dFu,null)
D.h5I=new A.C("Team Member sign-in",null,C.fW,null,null,null,null,null,null,null,null,null)
D.fZB=new A.C("Enter the access code and password from your organization.",null,C.Fn,null,null,null,null,null,null,null,null,null)
D.dDf=x([D.h5I,C.am,D.fZB],y.p)
D.bAe=new A.fo(C.ah,C.e,C.h,C.D,null,C.p,null,0,D.dDf,null)
D.bGu=new A.P(16,10,16,28)
D.bGC=new A.P(16,14,16,4)
D.bHT=new A.P(20,0,20,16)
D.bIp=new A.P(20,8,20,16)
D.aoq=new A.P(24,22,24,20)
D.a43=new A.a_(63394,"MaterialIcons",!1)
D.arw=new A.a_(63515,"MaterialIcons",!1)
D.bVQ=new A.a_(983813,"MaterialIcons",!1)
D.bSX=new A.a_(62867,"MaterialIcons",!1)
D.bWM=new A.ae(D.bSX,44,C.c,null,null,null)
D.bXR=new A.ae(C.kh,null,C.ac,null,null,null)
D.bZe=new A.ae(C.jC,18,null,null,null,null)
D.c03=new A.ae(D.a43,26,C.c,null,null,null)
D.c0E=new A.ae(C.DA,null,null,null,null,null)
D.c1f=new A.ae(C.DH,null,null,null,null,null)
D.c2r=new A.ae(L.a4f,null,null,null,null,null)
D.c2N=new A.ae(C.hY,16,null,null,null,null)
D.c6t=new A.ae(C.ty,16,null,null,null,null)
D.bX3=new A.ae(C.mo,null,null,null,null,null)
D.c7l=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bX3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1N=new A.ae(C.HV,null,null,null,null,null)
D.c7q=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c1N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bXo=new A.ae(C.DK,null,null,null,null,null)
D.c7B=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXo,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cXj=x([C.fs,C.b5,C.aD],y.O)
D.cd6=new A.a7(C.ay,C.aC,C.x,D.cXj,null,null)
D.cWI=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.SL=x([C.fs,C.aD],y.O)
D.T1=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nc=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dxg=x([C.mX,C.aD],y.O)
D.esi={iceServers:0}
D.aNc={urls:0}
D.dJp=new A.bq(D.aNc,["stun:stun.l.google.com:19302"],y.o)
D.dJo=new A.bq(D.aNc,["stun:stun1.l.google.com:19302"],y.o)
D.ddq=x([D.dJp,D.dJo],A.aE("U<ac<q,q>>"))
D.dIv=new A.bq(D.esi,[D.ddq],A.aE("bq<q,@>"))
D.JK=new B.Os(0,"lanDirect")
D.Up=new B.Os(1,"cloudStash")
D.dWn=new B.Os(2,"inlineInstant")
D.Uq=new B.Os(3,"webrtcLink")
D.AI=new B.Os(4,"videoCloud")
D.h52=new A.C("Receive file",null,C.nl,null,null,null,null,null,null,null,null,null)
D.cMn=x([C.atj,C.ab,D.h52],y.p)
D.fjj=new A.c6(C.aM,C.b9,C.h,C.l,null,C.p,null,0,D.cMn,null)
D.ezL=new A.D(C.cm,D.fjj,null)
D.fHp=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.J9,null,null,null)
D.fRF=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fHp,null,C.K,null,null,null,null,null,null,null)
D.eyV=new A.D(C.D_,D.fRF,null)
D.bff=new A.cl(C.z,null,null,D.eyV,null)
D.eG2=new A.cL(0,null,0,28,null,null,D.bff,null)
D.eGm=new B.aaV(0,"RTCDataChannelConnecting")
D.aSH=new B.aaV(1,"RTCDataChannelOpen")
D.aSI=new B.aaV(3,"RTCDataChannelClosed")
D.eGn=new B.G0(0,"RTCIceConnectionStateNew")
D.eGo=new B.G0(1,"RTCIceConnectionStateChecking")
D.eGp=new B.G0(2,"RTCIceConnectionStateCompleted")
D.eGq=new B.G0(3,"RTCIceConnectionStateConnected")
D.eGr=new B.G0(4,"RTCIceConnectionStateCount")
D.eGs=new B.G0(5,"RTCIceConnectionStateFailed")
D.eGt=new B.G0(6,"RTCIceConnectionStateDisconnected")
D.aSJ=new B.G0(7,"RTCIceConnectionStateClosed")
D.aSK=new B.YJ(0,"RTCIceGatheringStateNew")
D.eGu=new B.YJ(1,"RTCIceGatheringStateGathering")
D.aaC=new B.YJ(2,"RTCIceGatheringStateComplete")
D.aaD=new B.Py(0,"RTCPeerConnectionStateClosed")
D.aSL=new B.Py(1,"RTCPeerConnectionStateFailed")
D.aSM=new B.Py(2,"RTCPeerConnectionStateDisconnected")
D.aSN=new B.Py(3,"RTCPeerConnectionStateNew")
D.aSO=new B.Py(4,"RTCPeerConnectionStateConnecting")
D.aSP=new B.Py(5,"RTCPeerConnectionStateConnected")
D.eGv=new B.Pz(0,"RTCSignalingStateStable")
D.eGw=new B.Pz(1,"RTCSignalingStateHaveLocalOffer")
D.eGx=new B.Pz(2,"RTCSignalingStateHaveRemoteOffer")
D.eGy=new B.Pz(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eGz=new B.Pz(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSQ=new B.Pz(5,"RTCSignalingStateClosed")
D.foq=new A.au(160,48)
D.bgv=new A.fm(2,null,null,null,null,C.aD,null,null,null,null)
D.fpZ=new A.a5(16,16,D.bgv,null)
D.fUY=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.frs=new A.b0(D.fUY,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1H=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.b0(D.h1H,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haC=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.b0(D.haC,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fUx=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fs2=new A.b0(D.fUx,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5T=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aW0=new A.b0(D.h5T,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h7k=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fsw=new A.b0(D.h7k,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hc6=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsN=new A.b0(D.hc6,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.ha1=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsS=new A.b0(D.ha1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbh=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ftF=new A.b0(D.hbh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fT7=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fuc=new A.b0(D.fT7,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3B=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fux=new A.b0(D.h3B,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXh=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fv3=new A.b0(D.fXh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hcb=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fv7=new A.b0(D.hcb,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTn=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new A.b0(D.fTn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fS1=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fvs=new A.b0(D.fS1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOK=new A.C("NGMY DOC SHARE",null,C.aXr,null,null,null,null,null,null,null,null,null)
D.fQb=new A.C("Show this to sender",null,C.iM,null,null,null,null,null,null,null,null,null)
D.fRd=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fW3=new A.C("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fWr=new A.C("Sign in",null,C.cd,null,null,null,null,null,null,null,null,null)
D.fXs=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fY_=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_U=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h2K=new A.C("Send to their Doc Share",null,C.nk,null,null,null,null,null,null,null,null,null)
D.h33=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3n=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h3Z=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h45=new A.C("Create portal",null,C.cd,null,null,null,null,null,null,null,null,null)
D.h4u=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h7Q=new A.C("Share files & videos\nwith a scan.",null,C.aXu,null,null,null,null,null,null,null,null,null)
D.h89=new A.C("Add files",null,C.cd,null,null,null,null,null,null,null,null,null)
D.hFQ=new B.a_D(null)
D.adY=new B.adK(0,"docShare")
D.adZ=new B.adK(1,"gate")
D.Xw=new B.adK(2,"gateNoIndividual")})();(function staticFields(){$.aQp=null
$.frQ=function(){var x=y.N
return A.S(x,x)}()
$.He=A.S(y.N,y.D)
$.ahO=A.S(y.N,A.aE("mE"))
$.Sd=A.S(y.N,y.D)
$.fsw=A.S(y.N,A.aE("adr"))
$.cfF=A.S(y.S,A.aE("bz1"))
$.huC=1
$.ijF=null
$.ijE=null
$.iaP=null
$.hiQ=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iD9","hNh",()=>new B.ctJ())
x($,"iB3","hn1",()=>C.a.q(A.bB(A.bB(A.bB(A.HM(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["+Xyrg4zppQ9izSxFATZ4gxiSWh4="]=a.current})($__dart_deferred_initializers__);