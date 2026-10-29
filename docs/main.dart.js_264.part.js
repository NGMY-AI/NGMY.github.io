((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cja:function cja(){},
hJD(d){var x=null,w=new B.b3A(d,D.eil,new A.pq(x,x,y.c6),new A.pq(x,x,y.B))
w.bxY(d)
return w},
b3A:function b3A(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cj5:function cj5(d){this.a=d},
cj6:function cj6(d){this.a=d},
cj7:function cj7(d){this.a=d},
cj4:function cj4(d){this.a=d},
cj8:function cj8(d){this.a=d},
hJE(d,e){var x=y.N
x=new B.b3B(d,e,A.U(x,y.e),A.U(x,y.z))
x.bxZ(d,e)
return x},
b3B:function b3B(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cjb:function cjb(d){this.a=d},
cjc:function cjc(d){this.a=d},
cjd:function cjd(d){this.a=d},
cje:function cje(d){this.a=d},
cjf:function cjf(d){this.a=d},
cjg:function cjg(d){this.a=d},
cjh:function cjh(d){this.a=d},
cji:function cji(d){this.a=d},
h_w(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yJ.LQ(x,"ngmy_doc_share_v1",new B.flc(),1)},
hQc(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.f0(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.A4(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aK(d)
return x}catch(w){return v}return v},
QV(d,e){return B.i4o(d,e)},
i4o(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNe
x=7
return A.b(o==null?$.aNe=B.h_w():o,$async$QV)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mI(s,"blobs","readwrite")
C.iM.mm(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.pB(q),$async$QV)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb put] "+A.u(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QV,w)},
QU(d){return B.i4n(d)},
i4n(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNe
x=7
return A.b(o==null?$.aNe=B.h_w():o,$async$QU)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iM.zt(J.mG(r,"blobs"),d),$async$QU)
case 8:q=f
x=9
return A.b(J.pB(r),$async$QU)
case 9:o=B.hQc(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QU,w)},
agE(d){return B.i4m(d)},
i4m(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNe
x=7
return A.b(p==null?$.aNe=B.h_w():p,$async$agE)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iM.FI(J.mG(r,"blobs"),d)
x=8
return A.b(J.pB(r),$async$agE)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.u(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agE,w)},
flc:function flc(){},
hSv(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bo7(w,v))}return u},
hpx(d,e){var x,w={},v=A.aVE("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fIB(w,v,e)
C.w4.yn(v,"change",new B.fID(w,v,!1))
C.w4.yn(v,"cancel",new B.fIC(w))
$.eT.mt()
v.click()
A.bN(C.ah3,new B.fIA(w),y.H)},
fIB:function fIB(d,e,f){this.a=d
this.b=e
this.c=f},
fID:function fID(d,e,f){this.a=d
this.b=e
this.c=f},
fIC:function fIC(d){this.a=d},
fIA:function fIA(d){this.a=d},
CY(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CY=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTr()?3:4
break
case 3:x=5
return A.b(B.hkD(e,d,s,!0,!1,f,g,h,!1,i),$async$CY)
case 5:x=1
break
case 4:x=6
return A.b(B.Qz(d,s,f,g,h,i),$async$CY)
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
return A.b(B.Il(s,d),$async$CY)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fgE(s,d),$async$CY)
case 14:x=12
return A.b(r.hkD(q,p,o,n,m,l,k,j,a1,i),$async$CY)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cm(A.e9(new B.fIQ(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cm(A.e9(new B.fIR(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CY,w)},
Qz(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qz=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZl(e),$async$Qz)
case 3:u=k
x=4
return A.b(B.aoL(d,e,!1),$async$Qz)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Il(e,d),$async$Qz)
case 7:if(k){v=D.a9y
x=1
break}x=8
return A.b(B.UE(e),$async$Qz)
case 8:v=t?D.UH:D.a9z
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZj(d,e)){v=D.a9y
x=1
break}x=11
return A.b(B.UE(e),$async$Qz)
case 11:v=t?D.UH:D.a9z
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fVH(d,e)){v=D.a9y
x=1
break}x=14
return A.b(B.UE(e),$async$Qz)
case 14:v=D.UH
x=1
break
case 13:v=t?D.UH:D.a9z
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qz,w)},
fgE(d,e){var x=0,w=A.j(y.y),v
var $async$fgE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZj(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZl(d),$async$fgE)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgE,w)},
hkD(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cm(A.e9(new B.fnn(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hfM(d,e,f,g,h,i,j){return new B.YS(e,j,d,g,h,i,f,null)},
fpk(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fpk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fpn(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fpk)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpk,w)},
fpP(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fpP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fpR(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fpP)
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
return A.i($async$fpP,w)},
h_F(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fBb(d,e){var x=0,w=A.j(y.H),v
var $async$fBb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UE(e),$async$fBb)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fBb,w)},
fIQ:function fIQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIR:function fIR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abW:function abW(d,e){this.a=d
this.b=e},
fnn:function fnn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YS:function YS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayP:function ayP(){this.c=this.a=this.d=null},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2s:function d2s(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2x:function d2x(){},
d2w:function d2w(d){this.a=d},
aco:function aco(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBm:function aBm(d,e){this.a=d
this.b=e},
aEy:function aEy(d,e,f){this.a=d
this.b=e
this.c=f},
fpn:function fpn(d,e,f){this.a=d
this.b=e
this.c=f},
fpl:function fpl(d){this.a=d},
fpm:function fpm(d,e,f){this.a=d
this.b=e
this.c=f},
fpR:function fpR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpQ:function fpQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7F(d,e,f,g,h){return B.hEx(d,e,f,g,h)},
hEx(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7F=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iO(r.dz(d,new B.c7G(s,e,h,g,f,q),y.g),y.l),$async$c7F)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7F,w)},
aZg(d,e,f,g,h){return B.hEy(d,e,f,g,h)},
hEy(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZg=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.au3("GET",d)
o=A.fS6()
if(o==null)o=new A.LD(A.a([],y.W))
x=7
return A.b(o.eZ(0,s).d7(0,C.Fk),$async$aZg)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cg(),$async$aZg)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BC(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share pull url web] "+f+": "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZg,w)},
aZf(d){return B.hEv(d)},
hEv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d7(0,C.nZ),$async$aZf)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aJ(0,A.lS(A.lP(p.e)).cA(0,p.w),null)
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
$.am.$1("[doc share lan manifest web] "+A.u(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZf,w)},
c7E(d){return B.hEw(d)},
hEw(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d7(0,C.pV),$async$c7E)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lS(A.lP(q.e)).cA(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
$.am.$1("[doc share lan text web] "+A.u(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7E,w)},
c7G:function c7G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jn:function jn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ij(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hED(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ij(C.a.b5(u,v.length))}return null},
hEE(d){var x=B.Ij(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hEz(){var x,w=$.py(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.h2(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a6z(d){return B.hEA(d)},
hEA(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bJ),$async$a6z)
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
$.am.$1("[doc share my code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6z,w)},
a6A(d,e){return B.hEB(d,e)},
hEB(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6A=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cH,null),$async$a6A)
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
$.am.$1("[doc share my code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6A,w)},
BB(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BB)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ij(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6B(r),$async$BB)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BB)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Ij(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BB)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hEz()
x=14
return A.b(B.a6B(m),$async$BB)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6A("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BB)
case 15:k=f
x=16
return A.b(B.a6A("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BB)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BB)
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
return A.i($async$BB,w)},
a6B(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ij(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6B)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6B,w)},
a6C(d,e,f,g){return B.hEF(d,e,f,g)},
hEF(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6C=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Ij(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6B(r),$async$a6C)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c7M())>1048576||g.b6(d,new B.c7N())){v=B.Er(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6N("myCode",d,a0),$async$a6C)
case 4:u=a3
try{t=C.S.aJ(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Er(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZo(u,g.gM(d),a0),$async$a6C)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.py().aw(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c7O(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZh(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6C)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6C,w)},
Er(d,e,f,g,h){return B.hEC(d,e,f,g,h)},
hEC(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Er=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Er)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c7I())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.py().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cG.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.In(a9,q)
a0=new A.Kd(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Er)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aV(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oZ(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaa(a1.a,a4,"media",a1.d,a2).wY(m,n,new A.DJ(!0,q.c)),$async$Er)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Er)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPK(r),$async$Er)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dz(a6,new B.c7J(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZh(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Er)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPK(r),$async$Er)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Er,w)},
aZh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6z(t),$async$aZh)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7H(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6A(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZh,w)},
Nd(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Nd=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6z("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Nd)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cn(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aZi(k,a0),$async$Nd)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZn(h),$async$Nd)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UL(g,a0),$async$Nd)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c7K(),q),n)
d=A.C(new A.a_(r,new B.c7L(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.db(d,0,A.dI(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6A("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Nd)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nd,w)},
aZi(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cn(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a4(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.i8a(k,j)
C.d.v(s,i)
x=5
return A.b(B.CW(l,m,"Received via My Code",t,e,i),$async$aZi)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPK(s),$async$aZi)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZi,w)},
c7M:function c7M(){},
c7N:function c7N(){},
c7O:function c7O(){},
c7I:function c7I(){},
c7J:function c7J(){},
c7H:function c7H(){},
c7K:function c7K(){},
c7L:function c7L(){},
fIN(d,e){var x=0,w=A.j(y.H)
var $async$fIN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cm(A.e9(new B.fIO(e),!1,null,y.H)),$async$fIN)
case 2:return A.h(null,w)}})
return A.i($async$fIN,w)},
bCP(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCP=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cm(A.e9(new B.fIP(g,e,f),!1,null,y.y)),$async$bCP)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCP,w)},
fIO:function fIO(d){this.a=d},
fIP:function fIP(d,e,f){this.a=d
this.b=e
this.c=f},
UB:function UB(d,e){this.c=d
this.a=e},
aCJ:function aCJ(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dPh:function dPh(d,e){this.a=d
this.b=e},
UF:function UF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCM:function aCM(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dQq:function dQq(d){this.a=d},
dQr:function dQr(d){this.a=d},
dQs:function dQs(d){this.a=d},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQt:function dQt(d){this.a=d},
dQu:function dQu(d){this.a=d},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQy:function dQy(d){this.a=d},
dQB:function dQB(){},
dQz:function dQz(d){this.a=d},
dQA:function dQA(d,e){this.a=d
this.b=e},
bik:function bik(){},
UC:function UC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCK:function aCK(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dPi:function dPi(d){this.a=d},
dPj:function dPj(d){this.a=d},
fVI(d){var x=d.hW
if(x>=0)return C.o.N(x)
return 10},
hEH(d){var x=d.kN
if(x>=0)return x
return 4.99},
hEG(d){var x=d.lr,w=y.N
w=x.j9(x,new B.c7Q(),w,w)
return w},
haQ(d){var x=d.kO,w=y.N
w=x.j9(x,new B.c7R(),w,w)
return w},
aZl(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aZl)
case 7:s=f
r=A.u(p)
r=A.aU(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aZl,w)},
a6E(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a6E)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a6E)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6E,w)},
UE(d){var x=0,w=A.j(y.H),v,u
var $async$UE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$UE)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UE,w)},
fVH(d,e){var x,w,v
if(B.hEH(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hEG(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aZj(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.haQ(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
haR(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.haQ(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bR(A.dE(f,0,0,0,0,0).a).a6().ac())
d.kO=w},
aoM(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aoM)
case 7:s=f
r=A.u(p)
r=A.f2(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoM,w)},
aoN(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoM(d),$async$aoN)
case 3:u=f
x=5
return A.b(A.az(),$async$aoN)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoN,w)},
aoL(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fVI(d)
if(u<=0){v=!1
x=1
break}if(B.fVH(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoM(e),$async$aoL)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoL,w)},
aZk(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Il(e,d),$async$aZk)
case 3:if(g){v=-1
x=1
break}u=B.fVI(d)
if(u<=0){v=-1
x=1
break}if(B.fVH(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoM(e),$async$aZk)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZk,w)},
c7T(d,e,f){var x=0,w=A.j(y.y),v
var $async$c7T=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Il(e,d),$async$c7T)
case 3:if(h){v=!1
x=1
break}v=B.aoL(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7T,w)},
c7S(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c7S=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c7T(d,u,i.gTr()),$async$c7S)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7S,w)},
a6D(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6D=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTr()){v=!0
x=1
break}if(B.aZj(d,u)){v=!0
x=1
break}x=5
return A.b(A.lh(u,C.S5),$async$a6D)
case 5:x=k?3:4
break
case 3:B.haR(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6D)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kW(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.S5,"Doc Share for Organizations"),$async$a6D)
case 7:if(!k){v=!1
x=1
break}B.haR(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6D)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6D,w)},
c7Q:function c7Q(){},
c7R:function c7R(){},
fJs(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fJs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fJs)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fdn.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fdn.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJs,w)},
iau(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fdn.bq($.fdn,new B.fJu(d))},
fJu:function fJu(d){this.a=d},
feJ(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$feJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jl,null,y.H),$async$feJ)
case 3:C.A9.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eT.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$feJ,w)},
afw(d,e,f){var x=0,w=A.j(y.H),v
var $async$afw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fdR.n(0,d,new B.abD(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$afw)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afw)
case 2:return A.h(null,w)}})
return A.i($async$afw,w)},
afq(d){return B.hUl(d)},
hUl(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fdR.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afq)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aJ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fip(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abD(r)
$.fdR.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afq,w)},
Qp(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.G8.n(0,d,u)
x=3
return A.b(B.QV(d,u),$async$Qp)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qp,w)},
aNA(d){return B.hUj(d)},
hUj(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.G8.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QU(d),$async$aNA)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.G8.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aNA)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aK(r)
x=!J.cn(q)?9:10
break
case 9:B.Qp(d,q)
x=11
return A.b(J.hy(s,d),$async$aNA)
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
return A.i($async$aNA,w)},
hQz(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.ce(J.f0(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.ce(A.A4(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.ce(d)),y.K)
return A.f9(null,y.K)},
a1k(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fM(r,"loadend",new B.fnz(r,t),!1,s)
A.fM(r,"error",new B.fnA(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iq(0,C.Me,new B.fnB())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1k,w)},
aNU(d,e,f){return B.hWA(d,e,f)},
hWA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNU=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1k(i),$async$aNU)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QV(o,p),$async$aNU)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afw(k,j,s),$async$aNU)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.u(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNU,w)},
aNT(d,e,f){return B.hWz(d,e,f)},
hWz(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNT=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNU(d,e,f),$async$aNT)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1k(f),$async$aNT)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.G8.n(0,s,r)
$.QG.n(0,s,r)
x=11
return A.b(B.Qp(s,r),$async$aNT)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.u(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNT,w)},
BC(d,e,f,g,h,i){return B.hEQ(d,e,f,g,h,i)},
hEQ(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BC=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aZr(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qp(s,d),$async$BC)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BC)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cV.gcB().aK(d)),$async$BC)
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
return A.b(B.AE(e),$async$BC)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.Gk(e,j),$async$BC)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BC,w)},
UG(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AE(d),$async$UG)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cG.aw(99999)
n=p.b
l=o.type
l.toString
k=B.haT(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZr(),null)
$.afZ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1k(o),$async$UG)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.G8.n(0,h,g)
$.QG.n(0,h,g)
B.Qp(h,g)
x=9
break
case 10:x=11
return A.b(B.aNT(d,m,o),$async$UG)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gk(d,t),$async$UG)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UG,w)},
fVM(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fVM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.haT(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Im(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.BC(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVM,w)},
Im(d,e,f,g,h,i){return B.hEP(d,e,f,g,h,i)},
hEP(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Im=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kd(A.dI(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Im)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h5(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rt(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.QV(k,l),$async$Im)
case 11:J.ci(q,k);++p
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
return A.b(j.a7(0),$async$Im)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.QV(k,new Uint8Array(A.ce(n))),$async$Im)
case 15:J.ci(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afw(r,q,g),$async$Im)
case 16:f=new B.jn(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aZr(),null)
x=17
return A.b(B.AE(d),$async$Im)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.Gk(d,e),$async$Im)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Im,w)},
UI(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UI=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afZ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1k(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afq(s),$async$UI)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QU(u[o]),$async$UI)
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
v=A.A4(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QG.h(0,s)
if(i==null)i=$.G8.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rr(d,e),$async$UI)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QG.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A4(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UI,w)},
haT(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rr(d,e){return B.hER(d,e)},
hER(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rr=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QG.h(0,f)
if(e==null)e=$.G8.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.afZ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1k(s),$async$rr)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.G8.n(0,f,r)
$.QG.n(0,f,r)
B.Qp(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.u(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afq(f),$async$rr)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axC(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QU(g[l]),$async$rr)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.anK()
if(!C.aH.gam(r)){$.G8.n(0,f,r)
$.QG.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNA(f),$async$rr)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QG.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UI(a0,a1,0,g),$async$rr)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ce(i))
$.G8.n(0,f,h)
$.QG.n(0,f,h)
B.Qp(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rr,w)},
hEU(d){var x,w,v=$.afZ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hEV(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hES(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoT(d,e,f,g,h){return B.hET(d,e,f,g,h)},
hET(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoT=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afZ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1k(s),$async$aoT)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rr(g,e),$async$aoT)
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
return A.b(n.ij(d).wY(h,r,new A.DJ(!0,e.c)),$async$aoT)
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
$.am.$1("[doc share upload web] "+e.b+": "+A.u(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoT,w)},
haV(d,e,f,g,h){var x,w,v,u,t=$.haU
$.haU=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c83.n(0,t,new B.buS(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axC(u)))
return t},
fVN(d){var x=0,w=A.j(y.H)
var $async$fVN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVN,w)},
In(d,e){var $async$In=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afZ.h(0,h)
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
return A.q9(B.UI(d,e,p,o<q?o:q),$async$In,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q9(A.FG(n),$async$In,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q9(B.afq("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$In,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q9(B.QU(h[l]),$async$In,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q9(A.FG(k),$async$In,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q9(B.rr(d,e),$async$In,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q9(A.FG(A.A4(j,p,o<i?o:i)),$async$In,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q9(null,0,w)
case 2:return A.q9(t.at(-1),1,w)}})
var x=0,w=A.hjw($async$In,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hll(w)},
aZt(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c83.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4g(),$async$aZt)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZt,w)},
UH(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c83.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4g(),$async$UH)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afw(r.c,u,r.z),$async$UH)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZr(),null)
u=r.a
x=5
return A.b(B.AE(u),$async$UH)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.Gk(u,s),$async$UH)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UH,w)},
a6K(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c83.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agE(u[s]),$async$a6K)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6K,w)},
c85(d,e,f){var x=0,w=A.j(y.H)
var $async$c85=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzS(d,e,f),$async$c85)
case 2:return A.h(null,w)}})
return A.i($async$c85,w)},
c86(d,e,f){var x=0,w=A.j(y.H)
var $async$c86=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzT(d,e,f),$async$c86)
case 2:return A.h(null,w)}})
return A.i($async$c86,w)},
Es(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Es=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AE(d),$async$Es)
case 2:p=g
J.nt(p,new B.c84(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.G8.W(0,v)
$.afZ.W(0,e)
x=3
return A.b(B.afq(v),$async$Es)
case 3:u=g
$.fdR.W(0,v)
x=4
return A.b(A.az(),$async$Es)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Es)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Es)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agE(s[q]),$async$Es)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agE(v),$async$Es)
case 13:x=14
return A.b(B.Gk(d,p),$async$Es)
case 14:return A.h(null,w)}})
return A.i($async$Es,w)},
aZs(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rr(d,e),$async$aZs)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.feJ(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZs,w)},
AE(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AE)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aJ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fnC(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AE,w)},
Gk(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Gk)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.frC(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gk)
case 3:return A.h(null,w)}})
return A.i($async$Gk,w)},
bzS(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AE(d),$async$bzS)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fm1(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDt(f))
x=4
return A.b(B.Gk(d,u),$async$bzS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzS,w)},
bzT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AE(d),$async$bzT)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fm2(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cIf(f))
x=4
return A.b(B.Gk(d,u),$async$bzT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzT,w)},
abD:function abD(d){this.a=d},
fip:function fip(){},
fnz:function fnz(d,e){this.a=d
this.b=e},
fnA:function fnA(d){this.a=d},
fnB:function fnB(){},
c84:function c84(d){this.a=d},
buS:function buS(d,e,f,g,h,i,j,k,l){var _=this
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
fnC:function fnC(){},
frC:function frC(){},
fm1:function fm1(d){this.a=d},
fm2:function fm2(d){this.a=d},
a6L(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b6(d,new B.c89())?3:4
break
case 3:x=5
return A.b(B.aZu(d,e),$async$a6L)
case 5:u=g
if(u!=null){t=u.c
B.Nf(d,u.b,e,t)}v=u
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
return A.b(B.aZp(s),$async$a6L)
case 10:case 9:if(g){v=new A.PO(1,D.RJ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UJ(d,e),$async$a6L)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UO(!0,!0,d,e),$async$a6L)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nf(d,D.zj,e,t)
v=new A.PO(p,D.zj,t)
x=1
break}v=B.c88(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6L,w)},
UJ(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6N(null,d,e),$async$UJ)
case 3:p=g
try{u=C.S.aJ(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZo(p,d.length,e),$async$UJ)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c86(e,C.d.gI(d).a,r.b),$async$UJ)
case 7:case 6:q=r.a
x=8
return A.b(B.Nf(d,D.RJ,e,q),$async$UJ)
case 8:v=new A.PO(d.length,D.RJ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UJ,w)},
UK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mF)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6M(d,e),$async$UK)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c81(s,d,e,t),$async$UK)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZp(t),$async$UK)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rr(e,d),$async$UK)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UJ(A.a([d],y.r),e),$async$UK)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UK,w)},
UM(){var x=0,w=A.j(y.H)
var $async$UM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fVG(),$async$UM)
case 2:x=3
return A.b(B.aQ0(),$async$UM)
case 3:return A.h(null,w)}})
return A.i($async$UM,w)},
a6M(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZr()
x=3
return A.b(B.c85(e,d.a,u),$async$a6M)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6M,w)},
Nf(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nf=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RJ&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6M(p,f),$async$Nf)
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
return A.b(B.c80(o,p,u,f),$async$Nf)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c81(o,p,f,t),$async$Nf)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c8_(o,u,p,f),$async$Nf)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nf,w)},
aZu(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c87(e,d),$async$aZu)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UO(!1,!0,d,e),$async$aZu)
case 4:u=g
if(u!=null){t=u.b
v=new A.PO(u.a,D.zj,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZu,w)},
c87(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c87=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UI(d,s,0,1),$async$c87)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.K)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c87,w)},
c88(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c88=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6N(null,d,e),$async$c88)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.haS(u)
if(t.length>800){v=null
x=1
break}v=new A.PO(d.length,D.dB6,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c88,w)},
aoU(d,e,f){return B.hEY(d,e,f)},
hEY(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mH(g,1)
x=B.fVL(g)?3:4
break
case 3:x=5
return A.b(B.c82(g),$async$aoU)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mH(g,13))
try{k=B.Et(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mH(g,13))
u=9
x=12
return A.b(B.aZn(q),$async$aoU)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UL(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.u(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fVK(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UL(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.Io(C.a.i(J.mH(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.Io(C.a.i(J.mH(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Io(h,d,a0)
x=1
break}if(J.f4(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UL(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoU,w)},
Io(d,e,f){return B.hEW(d,e,f)},
hEW(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Io=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cE(A.u(s)+"/manifest.json",0,null)
q=A.cE(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZf(r),$async$Io)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZf(A.cE(s,0,null)),$async$Io)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7F(o,r,a1,n,a2),$async$Io)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c7E(q),$async$Io)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UL(l,a2),$async$Io)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cn(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ab(d)
$.am.$1("[doc share lan import] "+A.u(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Io,w)},
a6N(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6N=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rr(f,r),$async$a6N)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cV.gcB().aK(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
UL(d,e){return B.hEX(d,e)},
hEX(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UL=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aJ(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.q(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.q(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.q(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.q(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cI.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BC(i,a3,d,k,l,o),$async$UL)
case 9:h=a5
if(h!=null)J.ci(n,h)
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
$.am.$1("[doc share bundle] "+A.u(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$UL,w)},
Ne:function Ne(d,e){this.a=d
this.b=e},
c89:function c89(){},
a0U(d){var x=A.P(d).ax.a===C.I,w=x?D.aeK:D.acy,v=x?D.agb:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.adN:C.aL
return new A.aFM([w,s,v,u,t,x?C.fd:C.bT])},
hqg(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fNA(e),d,null,!0,!0,y.N)},
c7P(d,e,f,g,h,i,j,k,l){return new B.UD(e,l,d,f,k,j,g,h,i,null)},
YU(d,e,f,g,h,i,j){return new B.bd_(g,h,j,e,i,d,f,null)},
fNA:function fNA(d){this.a=d},
YR:function YR(d,e){this.c=d
this.a=e},
ayO:function ayO(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2r:function d2r(d){this.a=d},
d2p:function d2p(d){this.a=d},
d2q:function d2q(d){this.a=d},
buw:function buw(){},
UD:function UD(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCL:function aCL(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dQo:function dQo(d){this.a=d},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPl:function dPl(d,e,f){this.a=d
this.b=e
this.c=f},
dPk:function dPk(d){this.a=d},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPr:function dPr(d,e,f){this.a=d
this.b=e
this.c=f},
dPq:function dPq(d){this.a=d},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dPJ:function dPJ(d,e,f){this.a=d
this.b=e
this.c=f},
dPG:function dPG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPp:function dPp(d){this.a=d},
dPR:function dPR(d){this.a=d},
dPQ:function dPQ(){},
dPv:function dPv(d){this.a=d},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQa:function dQa(d,e){this.a=d
this.b=e},
dQb:function dQb(d,e){this.a=d
this.b=e},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPI:function dPI(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d){this.a=d},
dPY:function dPY(d){this.a=d},
dQ_:function dQ_(){},
dQ0:function dQ0(){},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ3:function dQ3(){},
dQ4:function dQ4(d){this.a=d},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPS:function dPS(d){this.a=d},
dPT:function dPT(d){this.a=d},
dPU:function dPU(d){this.a=d},
dPV:function dPV(d){this.a=d},
dPW:function dPW(d){this.a=d},
dPs:function dPs(){},
dPt:function dPt(d){this.a=d},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPn:function dPn(d,e,f){this.a=d
this.b=e
this.c=f},
dPK:function dPK(d){this.a=d},
dPL:function dPL(d,e,f){this.a=d
this.b=e
this.c=f},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPA:function dPA(d){this.a=d},
dPx:function dPx(d,e,f){this.a=d
this.b=e
this.c=f},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d){this.a=d},
dPD:function dPD(){},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPy:function dPy(d){this.a=d},
dPw:function dPw(d,e,f){this.a=d
this.b=e
this.c=f},
dPz:function dPz(){},
dPP:function dPP(d){this.a=d},
dPO:function dPO(d,e){this.a=d
this.b=e},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d){this.a=d},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d){this.a=d},
dQl:function dQl(d){this.a=d},
dQj:function dQj(d){this.a=d},
dQk:function dQk(d){this.a=d},
dQm:function dQm(){},
dQn:function dQn(d,e){this.a=d
this.b=e},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQg:function dQg(d,e,f){this.a=d
this.b=e
this.c=f},
dQe:function dQe(d,e,f){this.a=d
this.b=e
this.c=f},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQi:function dQi(d,e){this.a=d
this.b=e},
ayL:function ayL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcZ:function bcZ(d,e,f){this.c=d
this.d=e
this.a=f},
d2n:function d2n(){},
d2o:function d2o(){},
abX:function abX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d2L:function d2L(){},
d2K:function d2K(d){this.a=d},
YT:function YT(d,e,f){this.c=d
this.d=e
this.a=f},
ayQ:function ayQ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2H:function d2H(d){this.a=d},
d2I:function d2I(d,e,f){this.a=d
this.b=e
this.c=f},
d2J:function d2J(d,e){this.a=d
this.b=e},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2D:function d2D(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2y:function d2y(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2G:function d2G(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2z:function d2z(d){this.a=d},
YQ:function YQ(d,e,f){this.c=d
this.d=e
this.a=f},
ayN:function ayN(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d2k:function d2k(d){this.a=d},
d2j:function d2j(d,e){this.a=d
this.b=e},
d2l:function d2l(d){this.a=d},
d2i:function d2i(d,e){this.a=d
this.b=e},
d2m:function d2m(d){this.a=d},
d2h:function d2h(d,e){this.a=d
this.b=e},
d2d:function d2d(d){this.a=d},
d2e:function d2e(d){this.a=d},
d2f:function d2f(d,e){this.a=d
this.b=e},
d2g:function d2g(d){this.a=d},
Pq:function Pq(d,e,f){this.c=d
this.d=e
this.a=f},
ayT:function ayT(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d2Y:function d2Y(d){this.a=d},
d2Z:function d2Z(d){this.a=d},
d3_:function d3_(d){this.a=d},
d30:function d30(d){this.a=d},
d31:function d31(d,e){this.a=d
this.b=e},
d32:function d32(d){this.a=d},
d34:function d34(d){this.a=d},
d33:function d33(d){this.a=d},
YV:function YV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayR:function ayR(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d2U:function d2U(d,e){this.a=d
this.b=e},
d2V:function d2V(d,e){this.a=d
this.b=e},
d2M:function d2M(d,e,f){this.a=d
this.b=e
this.c=f},
d2N:function d2N(d){this.a=d},
d2O:function d2O(){},
d2T:function d2T(){},
d2P:function d2P(d,e){this.a=d
this.b=e},
d2Q:function d2Q(d,e){this.a=d
this.b=e},
d2R:function d2R(d,e){this.a=d
this.b=e},
d2S:function d2S(d,e){this.a=d
this.b=e},
abV:function abV(d,e){this.c=d
this.a=e},
d2c:function d2c(d){this.a=d},
YP:function YP(d){this.a=d},
ayM:function ayM(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YW:function YW(d,e){this.c=d
this.a=e},
ayS:function ayS(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d2X:function d2X(d){this.a=d},
d2W:function d2W(d){this.a=d},
bd_:function bd_(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hEZ(){var x,w=$.py(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.h2(v)},
Ng(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ng=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ng)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Ng)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share video cloud] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ng,w)},
a6O(d){return B.hF_(d)},
hF_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6O)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6O)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6O,w)},
UN(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ng(),$async$UN)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6O(s),$async$UN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UN,w)},
UO(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UO)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.T(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c8b(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hEZ()
t=A.T(u).k("M<1,a5<m,aD>>")
r=A.C(new A.M(u,new B.c8c(s),t),t.k("ak.E"))
x=6
return A.b(B.Ng(),$async$UO)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6O(q),$async$UO)
case 7:x=8
return A.b(B.a6P(r,u,g,s),$async$UO)
case 8:v=new A.boz(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UO,w)},
aoV(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ng(),$async$aoV)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoV,w)},
c8d(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c8d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ng(),$async$c8d)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a4(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8d,w)},
a6P(d,e,f,g){return B.hF0(d,e,f,g)},
hF0(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6P=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoT("media",r,new B.c8a(s,e,g),f,q),$async$a6P)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UN(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6P)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UN(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6P)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UN(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6P)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6P,w)},
Et(d,e,f){return B.hF1(d,e,f)},
hF1(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Et=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Et)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoV(b3),$async$Et)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ku,null,g),$async$Et)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoV(b3),$async$Et)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ng(),$async$Et)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cn(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a4(a7)
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
b0=A.oZ(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaa(a8.a,b0,"media",a8.d,a9).CB(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZg(k,n,o,s,b7),$async$Et)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.am.$1("[doc share video cloud] download "+A.u(o)+": "+A.u(i))
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
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
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
a8=A.oZ(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaa(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Et)
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
a0=A.dQ(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6O(e),$async$Et)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Et,w)},
c8b:function c8b(){},
c8c:function c8c(d){this.a=d},
c8a:function c8a(d,e,f){this.a=d
this.b=e
this.c=f},
aQ0(){var x=0,w=A.j(y.H),v,u
var $async$aQ0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hPY=null
v=y.H
u=A.dS(null,v)
x=2
return A.b(u,$async$aQ0)
case 2:u=A.dS(null,v)
x=3
return A.b(u,$async$aQ0)
case 3:u=$.h_R
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dS(u,v),$async$aQ0)
case 4:$.h_R=$.hYr=$.hYs=null
return A.h(null,w)}})
return A.i($async$aQ0,w)},
frd(d){var x=0,w=A.j(y.H),v,u
var $async$frd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6n){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fre(new A.bX(u,y.aY))
x=3
return A.b(u.iq(0,C.hO,new B.frf()),$async$frd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$frd,w)},
hYp(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hEJ(x):x},
h_V(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.aoX(u)
x=1
break}v=B.fVK(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_V,w)},
h_U(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.aoY(u)
x=1
break}v=B.fVK(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_U,w)},
fJc(d){var x=0,w=A.j(y.T),v
var $async$fJc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoY(d),$async$fJc)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJc,w)},
bAJ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h_U(d),$async$bAJ)
case 3:q=f
if(q==null){x=1
break}t=C.S.aJ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAJ,w)},
ffx(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ffx=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UH(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BC(d.anK(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffx,w)},
Gm(d,e,f){return B.i_P(d,e,f)},
i_P(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gm=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h_V(a1),$async$Gm)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aJ(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a4(u)
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
return A.b($.hs9().aDI(D.dp2,null),$async$Gm)
case 4:l=d.h_R=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axC(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.frL(f,k,new B.frM(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a7e(0,new B.WX(r,"offer")),$async$Gm)
case 5:d=l
x=7
return A.b(l.aky(0),$async$Gm)
case 7:x=6
return A.b(d.a76(0,a4),$async$Gm)
case 6:x=8
return A.b(B.frd(l),$async$Gm)
case 8:x=9
return A.b(l.aot(),$async$Gm)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hYp(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoZ(m,h),$async$Gm)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.haS(h)
case 11:v=new A.bnR(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gm,w)},
fre:function fre(d){this.a=d},
frf:function frf(){},
frM:function frM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
frL:function frL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
frK:function frK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i1H(d){switch(d){case"new":return D.eim
case"checking":return D.ein
case"connected":return D.eip
case"completed":return D.eio
case"failed":return D.eir
case"disconnected":return D.eis
case"closed":return D.aMe
case"count":return D.eiq}return D.aMe},
i1I(d){switch(d){case"new":return D.aMf
case"gathering":return D.eit
case"complete":return D.a6n}return D.aMf},
ibY(d){switch(d){case"stable":return D.eiu
case"have-local-offer":return D.eiv
case"have-local-pranswer":return D.eix
case"have-remote-offer":return D.eiw
case"have-remote-pranswer":return D.eiy
case"closed":return D.aMl}return D.aMl},
iab(d){switch(d){case"new":return D.aMi
case"connecting":return D.aMj
case"connected":return D.aMk
case"closed":return D.a6o
case"disconnected":return D.aMh
case"failed":return D.aMg}return D.a6o},
a96:function a96(d,e){this.a=d
this.b=e},
Og:function Og(d,e){this.a=d
this.b=e},
WW:function WW(d,e){this.a=d
this.b=e},
Of:function Of(d,e){this.a=d
this.b=e},
EW:function EW(d,e){this.a=d
this.b=e},
cj9:function cj9(){},
fXt(d){var x=new B.EV()
x.a=d
x.b=!0
return x},
EV:function EV(){this.b=this.a=$},
a95:function a95(){},
ate:function ate(){},
WX:function WX(d,e){this.a=d
this.b=e},
fVG(){var x=0,w=A.j(y.H)
var $async$fVG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVG,w)},
fVJ(d,e,f){var x=0,w=A.j(y.T),v
var $async$fVJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mF))){v=null
x=1
break}v=B.fJs(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVJ,w)},
haS(d){var x,w=F.ac_.a40(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cV.gcB().aK(x)}return C.cV.gcB().aK(w)},
hEI(d){var x,w,v=C.cI.aK(d)
try{x=C.cg.cA(0,F.abZ.bcu(v,!1))
return x}catch(w){x=C.cg.cA(0,v)
return x}},
fVK(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hEI(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.cg.cA(0,C.cI.aK(x))
return v}catch(u){return x}}return null},
hEJ(d){var x,w,v,u,t,s=A.a([],y.s)
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
hEK(){var x,w=$.py(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.h2(v)},
aZm(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZm)
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
$.am.$1("[doc share qr stash] load "+A.u(p)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZm,w)},
c7U(d,e){return B.hEL(d,e)},
hEL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c7U=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c7U)
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
$.am.$1("[doc share qr stash] save "+A.u(p)+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7U,w)},
aZp(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZm(d),$async$aZp)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZp,w)},
aZo(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hEK()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c7U(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cV.gcB().aK(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZo)
case 3:if(!h){v=null
x=1
break}v=new A.a_X("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZo,w)},
aZn(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZm(o),$async$aZn)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cA(0,C.cI.aK(u))
if(J.iY(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZn,w)},
c7V(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c7V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBG("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c7V)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.u(q)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7V,w)},
aZq(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ik(),$async$aZq)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZq,w)},
aoQ(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoQ)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZq(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoQ,w)},
aoO(d,e){var x=0,w=A.j(y.H)
var $async$aoO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoO)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoO)
case 2:return A.h(null,w)}})
return A.i($async$aoO,w)},
a6G(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6G=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6G)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ik(),$async$a6G)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6F(s),$async$a6G)
case 5:x=6
return A.b(B.aoO(f,u),$async$a6G)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6G,w)},
a6H(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6H=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6H)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ik(),$async$a6H)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a4(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ai(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aoO(g,q),$async$a6H)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6F(u),$async$a6H)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6H,w)},
a6I(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6I=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6I)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ik(),$async$a6I)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a4(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aZj(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6I)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6I)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
c7W(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c7W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c7W)
case 7:s=f
p=A.u(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aJ(0,r,null)
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
return A.i($async$c7W,w)},
Il(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Il=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7W(d),$async$Il)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZq(t),$async$Il)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoP(d),$async$Il)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZj(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoP(d),$async$Il)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Il,w)},
aoP(d){var x=0,w=A.j(y.H)
var $async$aoP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoP)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoP)
case 2:return A.h(null,w)}})
return A.i($async$aoP,w)},
aZr(){var x,w=$.py(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.h2(v)},
a6J(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fVL(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7Z(d){return B.hEN(d)},
hEN(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6J(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c7Z)
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
$.am.$1("[doc share short code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7Z,w)},
aoS(d,e){return B.hEO(d,e)},
hEO(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6J(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aoS)
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
$.am.$1("[doc share short code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoS,w)},
c80(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c80=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6J(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoS(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c80)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c80,w)},
c8_(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6J(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoS(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c8_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8_,w)},
c81(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c81=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6J(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoS(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c81,w)},
c82(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c82=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fVL(d)){v=null
x=1
break}x=3
return A.b(B.c7Z(d),$async$c82)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a4(u)
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
return A.i($async$c82,w)},
a6Q(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6Q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6Q)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6Q)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share webrtc stash] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6Q,w)},
aoW(d){return B.hF2(d)},
hF2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoW)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoW)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoW,w)},
aoX(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoX)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6Q(),$async$aoX)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cA(0,C.cI.aK(q))
if(J.iY(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aG(s,j,o)
x=9
return A.b(B.aoW(s),$async$aoX)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.u(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoX,w)},
aoZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoZ)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6Q(),$async$aoZ)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aK(C.a.i(e))
q.n(0,"answer",C.cV.gcB().aK(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.aoW(u),$async$aoZ)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoZ,w)},
aoY(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoY)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6Q(),$async$aoY)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cA(0,C.cI.aK(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoY,w)},
anY(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.m1(e),$async$anY)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.h0),$async$anY)
case 7:q=g
o=q
o=o==null?null:J.eW(J.vq(o))
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
return A.i($async$anY,w)},
i8a(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aV(C.o.u(w),5,"0")
return v},
fHI(d){return B.i8c(d)},
i8c(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fHI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").KF(d,3600),$async$fHI)
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
$.am.$1("[supabase signed url] "+d+": "+A.u(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fHI,w)},
CW(d,e,f,g,h,i){var x=null
return B.i89(d,e,f,g,h,i)},
i89(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CW=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.haV(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fVN(r),$async$CW)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fHI(o),$async$CW)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6K(r),$async$CW)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPx)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LD(A.a([],g))
x=15
return A.b(d.eZ(0,A.au3("GET",A.cE(n,0,null))).d7(0,C.Fk),$async$CW)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6K(r),$async$CW)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kd(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CW)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZt(r,k),$async$CW)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CW)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.UH(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.u(j))
x=27
return A.b(B.a6K(r),$async$CW)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CW,w)},
aPK(d){return B.i8b(d)},
i8b(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").W(0,d),$async$aPK)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPK,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[147]
O=c[40]
F=c[241]
I=c[139]
P=c[221]
E=c[214]
G=c[87]
Q=c[186]
R=c[140]
S=c[219]
K=c[245]
L=c[250]
B=a.updateHolder(c[21],B)
D=c[248]
T=c[185]
M=c[204]
U=c[65]
V=c[251]
W=c[71]
X=c[55]
N=c[86]
Y=c[249]
B.cja.prototype={
aDI(d,e){return this.cJM(d,e)},
cJM(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.kl(A.cz(t)))
t=J.k(u)
v=B.hJE(C.cV.gcB().aK(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDI,w)}}
B.b3A.prototype={
bxY(d){var x=this,w=x.w
w.onclose=A.ho(new B.cj5(x))
w.onopen=A.ho(new B.cj6(x))
w.onmessage=A.ho(new B.cj7(x))
w.onbufferedamountlow=A.ho(new B.cj8(x))},
gdc(d){return this.x},
agQ(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EV()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fXt(J.eW(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$agQ)
case 8:v=t.fXt(s.anb(f,0,null))
x=1
break
case 7:case 4:v=B.fXt(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agQ,w)}}
B.b3B.prototype={
bxZ(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.cjb(x)))
w.addEventListener("icecandidate",A.ho(new B.cjc(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.cjd(x)))
w.onicegatheringstatechange=A.ho(new B.cje(x))
w.addEventListener("signalingstatechange",A.ho(new B.cjf(x)))
if(!$.h3B())w.addEventListener("connectionstatechange",A.ho(new B.cjg(x)))
w.addEventListener("negotiationneeded",A.ho(new B.cjh(x)))
w.addEventListener("track",A.ho(new B.cji(x)))},
aky(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aky=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.kl(A.cz(A.U(y.N,y.z)))),y.aQ),$async$aky)
case 3:t=f
v=new B.WX(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aky,w)},
a76(d,e){return this.bnn(0,e)},
bnn(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a76=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a76)
case 2:return A.h(null,w)}})
return A.i($async$a76,w)},
a7e(d,e){return this.bnD(0,e)},
bnD(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7e)
case 2:return A.h(null,w)}})
return A.i($async$a7e,w)},
aot(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aot=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WX(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aot,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.abW.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YS.prototype={
S(){return new B.ayP()},
gde(){return this.c}}
B.ayP.prototype={
a_(){this.a1()
this.adz()},
adz(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZk(u.e,u.c),$async$adz)
case 2:t=e
if(v.c!=null)v.m(new B.d2v(v,t))
return A.h(null,w)}})
return A.i($async$adz,w)},
PZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoL(t.e,t.c,!1),$async$PZ)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f_C)
x=1
break}x=4
return A.b(B.a6E(u.a.c,"individual"),$async$PZ)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5B(A.e9(new B.d2s(u),!1,null,y.H)),$async$PZ)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PZ,w)},
J2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fpk(o),$async$J2)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6I(o.e,r,s,q),$async$J2)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eXH)
x=1
break}x=5
return A.b(B.a6E(u.a.c,"member"),$async$J2)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5B(A.e9(new B.d2u(u),!1,null,y.H)),$async$J2)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J2,w)},
xT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6D(t.e,o,t.f,t.r,t.w,s),$async$xT)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6E(u.a.c,"org_owner"),$async$xT)
case 4:x=5
return A.b(B.aoQ(u.a.c),$async$xT)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fpP(o),$async$xT)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6G(s,t,o,q.c),$async$xT)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eXE)
x=1
break}x=10
return A.b(B.aoQ(u.a.c),$async$xT)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5B(A.e9(new B.d2t(u),!1,null,y.H)),$async$xT)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xT,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jg:C.pL,q=B.fVI(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fP,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fis,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h7,t,t,t),C.aB,D.fBt,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZu,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lD(new B.d2x(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.aco(C.eT,C.ayX,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcdw(),t),C.ac],v))
p.push(new B.aco(C.oU,C.a2e,"Team Member","Sign in with your organization access code + password",u.gcen(),t))
p.push(C.ac)
p.push(new B.aco(C.alt,C.a3N,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcdT(),t))
return A.c7(t,r,A.bm(!0,A.cd(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiJ,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.aco.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eo,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ph,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BH,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aBm.prototype={}
B.aEy.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gap7(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
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
bbY(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cIf(d){return this.bbY(null,d)},
aDt(d){return this.bbY(d,null)}}
B.UB.prototype={
S(){return new B.aCJ(new A.cs(null,y.A))},
gde(){return this.c}}
B.aCJ.prototype={
a_(){this.a1()
this.adA()},
adA(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BB(u.a.c),$async$adA)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dPh(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adA,w)},
adB(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fN(new A.fE(s)),$async$adB)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.f0w)
case 1:return A.h(v,w)}})
return A.i($async$adB,w)},
Zk(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zk=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anY(s.d,4),$async$Zk)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t_(r,"ngmy_my_code_"+m+".png"),$async$Zk)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zk,w)},
ahi(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9K("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahi)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahi,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jg:C.pL,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.av(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2G,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aij,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mO,w,C.kF,new A.ex(A.p(p,A.pT(p,p,!1,B.hEE(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kF,A.B(A.a([A.E(A.eD(N.C2,C.U9,q.gc6x(),p),1),C.at,A.E(A.dn(C.yI,C.a8E,q.gc6y(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.eD(M.a16,D.fxh,q.gct8(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MG,p,p,C.ah)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.UF.prototype={
S(){return new B.aCM(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.aCM.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Ij(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ij(u.d.a.a)
if(t==null){u.m(new B.dQq(u))
x=1
break}u.m(new B.dQr(u))
s=u.a
r=s.c
x=3
return A.b(B.a6C(s.d,new B.dQs(u),t,r),$async$Zl)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dQt(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zl,w)},
a1w(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1w=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dQu(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rr(r.a.c,q),$async$a1w)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dQv(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aho(p,m,l,j,k),$async$a1w)
case 8:o=e
if(r.c!=null)r.m(new B.dQw(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dQx(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dQy(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1w,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aeK:D.acy,h=j?D.agb:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.adN:C.aL
i=[i,e,h,g,f,j?C.fd:C.bT]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bN7,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eo,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2G,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ul(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bik()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.MA,k,k,"",k,!0,new A.b4(4,A.n(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dQz(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m5,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lg(l.a.d,4)
m=A.C(new A.M(m,new B.dQA(x,new A.aFM(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lP,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eWd)
else q.push(A.X(C.lo,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iF,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bvB,k,k,C.ah),1)
u=l.f?k:l.gct9()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eD(M.a16,D.fyh,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6z()
t=A.bn(C.aE,k,k,0,C.c,k,C.nf,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c7(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mE(new B.dQB(),A.x(A.a([e,new A.D(D.bv6,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rR:D.fwG,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.Yv,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bik.prototype={
oz(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hg(C.bw,v.length),C.aO)}}
B.UC.prototype={
S(){return new B.aCK()}}
B.aCK.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b5,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b5,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.T$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.T$=x
v.P$=0
v=w.f
v===$&&A.c()
v.T$=x
v.P$=0
w.a2()},
adC(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adC=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dPi(r))
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
return A.b(B.a6H(p,m,n,o,C.a.i(l).length===0?null:l),$async$adC)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.f07)
s=[1]
x=4
break}p.K(y.q).f.U(D.eZL)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dPj(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adC,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jg:C.pL,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fpi,s,s,s,1,s,!0),p=A.p(s,D.bns,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GN,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bU2,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bTY,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUd,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc6A()
u=A.bn(C.aE,s,s,s,s,C.fQ,s,s,s,s,s,s)
return A.c7(q,r,A.cd(A.x(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rR:C.aSe,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abD.prototype={}
B.buS.prototype={
a4g(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anK()))
x=3
return A.b(B.QV(t,s),$async$a4g)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4g,w)},
gde(){return this.a}}
B.Ne.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YR.prototype={
S(){return new B.ayO(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.ayO.prototype={
a_(){this.a1()
$.aV.x1$.push(new B.d2r(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6G(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0U(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jg:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fP,32)],n),l=A.p(w,T.ao5,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.aoT,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ul(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buw()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fw,w,w,"",w,!0,new A.b4(4,A.n(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.aZH),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2p(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m5,w,w,w,w)
f=f[1]
f=A.E(A.dV(C.nD,new B.d2q(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Ks,A.c_(new A.D(C.xT,A.x(A.a([l,C.aR,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c_(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ech,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6F(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.Or,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MI,C.d1,w,w,w)}}
B.buw.prototype={
oz(d,e){return e.akt(e.a.toUpperCase())}}
B.UD.prototype={
S(){return new B.aCL(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aCL.prototype={
a_(){var x=this
x.a1()
x.tI()
x.w=A.dv(C.jm,new B.dQo(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UM()
this.a2()},
a0o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nd(u.a.c),$async$a0o)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AE(u.a.c),$async$a0o)
case 4:u.m(new s.dPM(u,e))
u.i5("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0o,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nd(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.AE(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dPN(u,s))
if(t>0)u.i5("Received "+A.u(t)+" file(s) via My Code.")
u.No(u.d)
B.BB(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
No(d){return this.bBW(d)},
bBW(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$No=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6M(r,u.a.c),$async$No)
case 8:p=f
if(u.c==null){x=1
break}new B.dPl(u,r,p).$0()
u.c.ef()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mF))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UK(r,u.a.c),$async$No)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AE(u.a.c),$async$No)
case 12:u.m(new o.dPm(u,f))
case 1:return A.h(v,w)}})
return A.i($async$No,w)},
NL(d){return this.bIc(d)},
bIc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6M(d,u.a.c),$async$NL)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dPr(u,d,t))
x=6
return A.b(A.fN(new A.fE(t)),$async$NL)
case 6:u.i5("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fN(new A.fE(r.toUpperCase())),$async$NL)
case 7:u.i5("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NL,w)},
i5(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cDK(d,e)},
cDK(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dQc(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dQd(r))
$.eT.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUP(){var x=this.a
return x.f||x.r||x.w},
HZ(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUP()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c7S(s,n,r,q,o,t),$async$HZ)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i5("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fBb(o,u.a.c),$async$HZ)
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
return A.b(B.CY(s,o,r,q,n,t),$async$HZ)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HZ,w)},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoQ(u.a.c),$async$a_s)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i5("No organization portal found.")
x=1
break}t=J.a4(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).cm(A.e9(new B.dPJ(u,r,q),!1,null,y.H)),$async$a_s)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
a0z(d){return this.cmG(d)},
cmF(){return this.a0z(1)},
cmG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUP()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoN(u.a.c),$async$a0z)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0z,w)},
abz(d,e,f){return this.bYQ(d,e,f)},
bYQ(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i5(e)
x=1
break}x=3
return A.b(u.tJ(new B.dPG(u,d,null,e,f),"Uploading\u2026"),$async$abz)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abz,w)},
bC3(){B.hpx(!1,new B.dPp(this))
return},
crI(){this.m(new B.dPR(this))},
axY(){var x=0,w=A.j(y.H),v=this
var $async$axY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bC3()
return A.h(null,w)}})
return A.i($async$axY,w)},
abv(){var x=0,w=A.j(y.H),v=this
var $async$abv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPv(v),"Importing\u2026"),$async$abv)
case 2:return A.h(null,w)}})
return A.i($async$abv,w)},
S0(d){return this.cD9(d)},
cD9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.e9(new B.dQ9(u,d),!1,null,y.H)),$async$S0)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qn)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cm(A.e9(new B.dQa(u,d),!1,null,y.H)),$async$S0)
case 8:x=1
break
case 7:x=u.bZx(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cm(A.e9(new B.dQb(u,d),!1,null,y.H)),$async$S0)
case 11:x=1
break
case 10:u.i5("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
bZx(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cH6,C.a.b5(x,w+1).toLowerCase())},
af2(d){return this.cdA(d)},
cdA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.e9(new B.dPH(u,d),!1,null,y.H)),$async$af2)
case 5:x=1
break
case 4:u.m(new B.dPI(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af2,w)},
Rn(d){return this.cuF(d)},
cuF(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i5("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p9(t,s.c,s.f),$async$Rn)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dQ2(u,d),"Preparing QR\u2026"),$async$Rn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
ahI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQ3(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dQ4(q),s),s.k("J.E"))
if(r.length===0){u.i5("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rn(r),$async$ahI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahI,w)},
ahB(d){return this.cuc(d)},
cuc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0U(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dPX(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahB)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S0(d)
break
case"qr":u.Rn(A.a([d],y.r))
break
case"send_my_code":u.cec(A.a([d],y.r))
break
case"save":u.agX(d)
break
case"delete":u.IO(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahB,w)},
Xf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPs(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPt(q),s),s.k("J.E"))
if(r.length===0){u.i5("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p9(t,s.c,s.f),$async$Xf)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPu(u,r),"Preparing file\u2026"),$async$Xf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xf,w)},
ag8(d){return this.cl0(d)},
cl0(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ag8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hqg(d,!1),$async$ag8)
case 3:s=f
r=s==null
q=B.a6J(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i5("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag8,w)},
af8(){var x=0,w=A.j(y.H),v=this,u
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fIN(u,v.a.c),$async$af8)
case 2:return A.h(null,w)}})
return A.i($async$af8,w)},
bC2(){B.hpx(!1,new B.dPo(this,null))
return},
J1(d,e){return this.ced(d,e)},
b_X(d){return this.J1(null,d)},
cec(d){return this.J1(d,null)},
ced(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J1=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dPK(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xa.c7().an2(!0,C.a_l,!1),$async$J1)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dPL(l,s,r),"Preparing\u2026"),$async$J1)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
s.i5("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i5("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCP(p,l,e,s.a.c),$async$J1)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i5("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J1,w)},
If(d){return this.bYD(d)},
bYD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$If=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hED(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_X(t),$async$If)
case 8:x=6
break
case 7:u.i5("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i5("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tJ(new B.dPE(u,d),"Receiving video\u2026"),$async$If)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dPF(u,d),"Receiving\u2026"),$async$If)
case 12:case 1:return A.h(v,w)}})
return A.i($async$If,w)},
E9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$E9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CS()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ag8(t),$async$E9)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.If(s),$async$E9)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.e9(new B.dPP(u),!1,null,y.N)),$async$E9)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$E9)
case 10:x=1
break
case 9:x=11
return A.b(u.If(C.a.i(r)),$async$E9)
case 11:case 1:return A.h(v,w)}})
return A.i($async$E9,w)},
agX(d){return this.cqg(d)},
cqg(d){var x=0,w=A.j(y.H),v=this
var $async$agX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPO(v,d),"Saving\u2026"),$async$agX)
case 2:return A.h(null,w)}})
return A.i($async$agX,w)},
IO(d){return this.bKw(d)},
bKw(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l5(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IO)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c7V(t),$async$IO)
case 6:case 5:s=d.a
x=7
return A.b(B.Es(u.a.c,s),$async$IO)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IO)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IO,w)},
ahO(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0U(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dQ8(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahO)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.af8()
break
case"import":u.abv()
break}case 1:return A.h(v,w)}})
return A.i($async$ahO,w)},
c6D(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mF))return C.qa
if(C.a.a0(x,"image/")||d.my(D.Qn))return C.u4
if(C.a.t(x,"pdf"))return E.NX
return D.alW},
B(d){var x,w,v=this,u=null,t=B.a0U(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GF,u,u,u,new B.dQj(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bNE,u,u,u,v.e?u:v.gcdU(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcrH()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bHY:E.amj,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a13,u,u,u,v.e?u:v.gc6E(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o8,u,u,u,v.e?u:v.gb14(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bPl,u,u,u,v.e?u:new B.dQk(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lD(new B.dQl(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m5(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayL(C.jt,s,!0,t,w?u:v.gcuG(),u),1)
x.push(new A.D(D.btT,A.mE(new B.dQm(),A.B(A.a([s,C.at,A.E(new B.ayL(C.vS,"Export",!1,t,w?u:v.gbO8(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iG,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcZ(t,v.e?u:v.gb14(),u)
else s=A.kb(!0,u,u,new B.dQn(v,t),s,u,D.btL,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayL.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vz,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vz,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.eD(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bcZ.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mE(new B.d2n(),new A.D(E.Zp,A.x(A.a([A.mE(new B.d2o(),A.p(x,A.X(C.yd,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.az,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ew,C.ii,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o8,D.fBM,this.d,A.bn(C.aE,x,x,x,C.c,x,C.Zk,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.B5,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.abX.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.my(D.mF))p=D.dew
else{p=C.a.a0(p,"image/")||i.my(D.Qn)
n=y.O
p=p?A.a([C.cS,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gap7()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mF))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mF)))l.push(A.fTr(C.aE,!1,j,j,j,!1,j,j,new B.d2K(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.o6,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mE(new B.d2L(),new A.D(C.e6,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.YS,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ag),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.YT.prototype={
S(){return new B.ayQ()},
gde(){return this.c}}
B.ayQ.prototype={
a_(){this.a1()
this.xK()},
q(){B.hES(this.e)
this.a2()},
xK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rr(o.c,o.d),$async$xK)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hEV(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hEU(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2H(s))
x=1
break}s.m(new B.d2I(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d2J(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xK,w)},
a1v(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rr(t.c,t.d),$async$a1v)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.eYd)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aho(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1v)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1v,w)},
bYw(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kq(u,C.A,v,new B.d2F(w,t),C.fZ,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fP(t,C.A,v,new B.d2G(w),C.fZ,C.dv,!0,v,!1,v,v)
else return C.bI
return A.uu(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0U(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.C3,u,u,u,v.gb4V(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Eh
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.C3,D.fkJ,v.gb4V(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bYw()}return A.c7(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YQ.prototype={
S(){return new B.ayN(A.aid(),C.bx,C.bx)},
gde(){return this.c}}
B.ayN.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fw(w,A.a3(w).k("fw<1>")).il(new B.d2k(v))
x.gcR8().il(new B.d2l(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a3(x).k("fw<1>"))}if(x==null)x=C.b4Q
x.il(new B.d2m(v))
v.xK()},
xK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rr(p.c,p.d),$async$xK)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d2d(s))
x=1
break}x=8
return A.b(s.d.C4(0,new A.a3_(r,s.a.d.c)),$async$xK)
case 8:if(s.c==null){x=1
break}s.m(new B.d2e(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d2f(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xK,w)},
Zm(){var x=0,w=A.j(y.H),v=this,u
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$Zm)
case 5:x=3
break
case 4:x=6
return A.b(u.ip(0),$async$Zm)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zm,w)},
aSG(d){var x=d.a
return C.a.aV(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aV(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0U(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Eh
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bIX,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Or,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aE,o,o,m,0,new B.d2g(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aSG(p.w)+" / "+p.aSG(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eUJ,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yn:C.iJ,o,o,o,o,o)
x=A.x(A.a([u,C.kF,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6H(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c7(v,w,A.av(new A.D(C.rb,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pq.prototype={
S(){return new B.ayT()},
gde(){return this.c}}
B.ayT.prototype={
a_(){this.a1()
this.Pl()},
Pl(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fVJ(o.c,o.d,new B.d2Y(s)),$async$Pl)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2Z(s))
x=1
break}s.e=r
q=O.i0F(r)
if(q==null){s.m(new B.d3_(s))
x=1
break}s.d=q
q.aQ(0,s.gb_L())
x=8
return A.b(q.ik(0).d7(0,C.r7),$async$Pl)
case 8:if(s.c==null){x=1
break}s.m(new B.d30(s))
x=9
return A.b(q.pT(0),$async$Pl)
case 9:q.ti(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d31(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pl,w)},
ccb(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d32(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CQ(0,x.gb_L())
w=x.d
if(w!=null)w.q()
B.iau(x.e)
x.a2()},
adF(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZs(u.c,u.d),$async$adF)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adF,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0U(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p0,t,t,t,u.gc6B(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Eh
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahH(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A9(s,t),A.aC(t,A.D7(A.p(t,A.X(q?I.yn:C.iJ,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d34(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c7(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YV.prototype={
S(){return new B.ayR(new A.cs(null,y.A))}}
B.ayR.prototype={
gcDt(){var x,w,v=this.a
if(v.e!==D.RK)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcD7(){var x,w,v=this.a
if(v.e!==D.zj)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcDt()
if(x!=null){v.Qn(x)
v.e=A.dv(R.Fo,new B.d2U(v,x))}w=v.gcD7()
if(w!=null){v.Qm(w)
v.f=A.dv(C.fX,new B.d2V(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qm(d){return this.cjc(d)},
cjc(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoV(d),$async$Qm)
case 3:t=f
x=4
return A.b(B.c8d(d),$async$Qm)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d2M(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qm,w)},
Qn(d){return this.cjd(d)},
cjd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fJc(d),$async$Qn)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAJ(t),$async$Qn)
case 4:if(u.c==null){x=1
break}u.m(new B.d2N(u))
u.c.K(y.q).f.U(D.aP8)
case 1:return A.h(v,w)}})
return A.i($async$Qn,w)},
gc2z(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6C(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1h(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CS()){t=u.c
if(t!=null)t.K(y.q).f.U(D.f0h)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cm(A.e9(new B.d2O(),!1,null,y.N)),$async$a1h)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAJ(s),$async$a1h)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aP8)
case 1:return A.h(v,w)}})
return A.i($async$a1h,w)},
a9q(d){return this.bId(d)},
bId(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fN(new A.fE(C.d.aH(t,", "))),$async$a9q)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9q,w)},
adD(d){return this.bHY(d)},
bHY(d){var x=0,w=A.j(y.H),v=this
var $async$adD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fN(new A.fE(v.a.c)),$async$adD)
case 2:if(d.e!=null)d.K(y.q).f.U(D.eYG)
return A.h(null,w)}})
return A.i($async$adD,w)},
a1c(d){return this.cqi(d)},
cqi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anY(s.d,4),$async$a1c)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t_(r,"ngmy_doc_share_qr.png"),$async$a1c)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1c,w)},
gaVW(){var x,w=this.a
if(w.e!==D.HQ)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
a9n(d){return this.bI6(d)},
bI6(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaVW()
if(t==null){x=1
break}x=3
return A.b(A.fN(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9n)
case 3:if(d.e!=null)d.K(y.q).f.U(D.f_h)
case 1:return A.h(v,w)}})
return A.i($async$a9n,w)},
adE(){var x=0,w=A.j(y.H),v=this,u
var $async$adE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UM(),$async$adE)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adE,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0U(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HQ&&i!==D.RK&&i!==D.zj
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HQ||t===D.RK||t===D.zj?l:A.aH(l,l,l,l,C.l2,l,l,l,m.gaYV(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pT(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc2z(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HQ){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc6C(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bT6,D.ftV,new B.d2P(m,d),l)],p))}if(m.a.e===D.HQ&&m.gaVW()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bPF,D.fqF,new B.d2Q(m,d),l)],p))
if(m.a.e===D.zj){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ek:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}if(m.a.e===D.RK){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ek:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l),C.ac,A.dn(D.bLq,D.fwZ,m.gcqG(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.on(i,A.c7(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eD(N.C2,C.U9,new B.d2R(m,d),l),1),C.at,A.E(A.dn(C.yI,C.a8E,new B.d2S(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zT,m.gaYV(),A.bn(C.aK,l,l,l,l,C.fQ,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d2T(),y.C)}}
B.abV.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cd(A.x(A.a([w,C.aR,A.p(x,A.pT(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.em(A.a([A.bG(C.zU,new B.d2c(d),x)],u),x,x,C.mX,v,x,x,x,x,D.fjK,x)}}
B.YP.prototype={
S(){return new B.ayM(A.ze(C.xA,C.nK,C.ui))}}
B.ayM.prototype={
q(){this.d.q()
this.a2()},
awA(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c7(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fr8,x,x,x,1,x,!0),C.w,A.zd(this.d,C.bV,this.gawz()),x,!1,!1,x,x)}}
B.YW.prototype={
S(){return new B.ayS(A.ze(C.xA,C.nK,C.ui))},
gde(){return this.c}}
B.ayS.prototype={
bZz(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afv(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RW("text/plain"),$async$afv)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.f0b)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afv,w)},
aab(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aab=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hqg(p,!0),$async$aab)
case 3:t=e
p=t==null
s=B.a6J(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.eXO)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aab,w)},
q(){this.d.q()
this.a2()},
awA(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZz(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.anc,v,v,v,w.gbNH(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a1a,v,v,v,w.gcgC(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.rh:P.NI,v,v,v,v,v),v,v,v,new B.d2X(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fxQ,v,v,v,1,v,!0)
u=A.zd(w.d,C.bV,w.gawz())
x=A.n(20)
return A.c7(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ei2],s),v),v,!1,!1,v,v)}}
B.bd_.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oM
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oM:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Zv,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a96.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Og.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WW.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Of.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EW.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cj9.prototype={}
B.EV.prototype={}
B.a95.prototype={}
B.ate.prototype={}
B.WX.prototype={}
var z=a.updateTypes(["aA<~>()","R(jn)","m(jn)","UD(Y)","~()","YS(Y)","G(G,jn)","Pq(Y)","~(m0)","cr(EV)","aA<jn?>(@)","UB(Y)","UF(Y)","D(jn)","jn(@)","a5<m,@>(jn)","YR(Y)","UC(Y)","YT(Y)","YQ(Y)","YV(Y)","abV(Y)","ai<jn>()","YW(Y)","abX(Y,G)","YP(Y)","a5<m,aD>(jn)","cr(WW)","cr(a95)","aA<cr>(EV)"])
B.cj5.prototype={
$1(d){var x=this.a
x.x=D.aMd
x.y.L(0,D.aMd)},
$S:68}
B.cj6.prototype={
$1(d){var x=this.a
x.x=D.aMc
x.y.L(0,D.aMc)},
$S:68}
B.cj7.prototype={
$1(d){var x=this.a
x.agQ(A.aOt(d.data)).bA(new B.cj4(x),y.b)},
$S:68}
B.cj4.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cj8.prototype={
$1(d){},
$S:68}
B.cjb.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hJD(d.channel))},
$S:15}
B.cjc.prototype={
$1(d){},
$S:15}
B.cjd.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i1H(w.iceConnectionState)
x.cx=w
if($.h3B())switch(w.a){case 0:x.cy=D.aMi
break
case 1:x.cy=D.aMj
break
case 3:x.cy=D.aMk
break
case 5:x.cy=D.aMg
break
case 6:x.cy=D.aMh
break
case 7:x.cy=D.a6o
break
default:break}},
$S:148}
B.cje.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i1I(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:148}
B.cjf.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ibY(w.signalingState)},
$S:148}
B.cjg.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iab(w.connectionState)},
$S:148}
B.cjh.prototype={
$1(d){},
$S:148}
B.cji.prototype={
$1(d){},
$S:15}
B.flc.prototype={
$1(d){var x=y.F.a(new A.rP([],[]).pB(d.target.result,!1)),w=C.xB.t(x.objectStoreNames,"blobs")
if(!w)C.xx.KD(x,"blobs")},
$S:202}
B.fIB.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w4.fg(this.b)
$.eT.mt()
this.c.$1(d)},
$S:453}
B.fID.prototype={
$1(d){return this.a.$1(B.hSv(this.b,this.c))},
$S:34}
B.fIC.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fIA.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fIQ.prototype={
$1(d){var x=this
return B.hfM(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fIR.prototype={
$1(d){var x=this
return B.hfM(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fnn.prototype={
$1(d){var x=this
return B.c7P(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2v.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2s.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7P(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2u.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7P(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2t.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7P(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d2x.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bK1,x,x,x,new B.d2w(d),x,x,x,x,x,x),A.E(A.EH(D.Q7,!0,x,C.a0g,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Q7,x,g,C.aj3,0,e,f)},
$C:"$4",
$R:4,
$S:436}
B.d2w.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpn.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eG,y.o).w,t=this.a,s=t?C.id:C.c,r=A.n(28),q=A.p(v,D.bnM,C.f,v,v,D.b0l,v,v,v,v,D.aiU,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOc,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FB,A.x(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ans,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dV(C.df,new B.fpl(d),v),1),C.at,A.E(A.bG(D.fpG,new B.fpm(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mo,v,v,v,v),v)},
$S:60}
B.fpl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpm.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.eYV)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aBm(v,x))},
$S:0}
B.fpR.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eG,y.o).w,u=x.a,t=u?C.id:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bnC,C.f,w,w,D.b1O,w,w,w,w,D.aiU,w,w,1/0),new A.D(C.FB,A.x(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h_F(u,"Organization name",C.G2,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h_F(u,"Access code",C.nk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h_F(u,"Member password",H.GA,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fxV,new B.fpQ(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fQ,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mo,w,w,w,w),w)},
$S:60}
B.fpQ.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.eZ_)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEy(u,x,w))},
$S:0}
B.c7G.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a4(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cE(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.vi(p,null).d7(0,C.Yu),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BC(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.am.$1("[doc share lan web] "+A.u(r)+": "+A.u(m))
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
B.c7M.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7N.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c7O.prototype={
$1(d){return d.b},
$S:z+2}
B.c7I.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7J.prototype={
$1(d){return d.b},
$S:z+2}
B.c7H.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c7K.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c7L.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fIO.prototype={
$1(d){return new B.UB(this.a,null)},
$S:z+11}
B.fIP.prototype={
$1(d){return new B.UF(this.a,this.b,this.c,null)},
$S:z+12}
B.dPh.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dQq.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dQr.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dQs.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dQp(x,d))},
$S:2}
B.dQp.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQt.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQu.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dQv.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQw.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQx.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dQy.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQB.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.dQz.prototype={
$1(d){var x=this.a
return x.f?null:x.Zl()},
$S:2}
B.dQA.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qn))s=C.u4
else s=C.a.a0(s,"video/")||d.my(D.mF)?C.qa:D.alW
x=this.b.a
w=y.p
return new A.D(C.kV,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gap7(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dPi.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dPj.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c7Q.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.c7R.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.fJu.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fip.prototype={
$1(d){return J.k(d)},
$S:17}
B.fnz.prototype={
$1(d){var x=this.b
B.hQz(C.FQ.ga5U(this.a)).bA(x.gcGy(x),y.H)},
$S:124}
B.fnA.prototype={
$1(d){return this.a.d4(0,null)},
$S:124}
B.fnB.prototype={
$0(){return null},
$S:11}
B.c84.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnC.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.S(Date.now(),0,!1).a6().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.frC.prototype={
$1(d){return d.ah()},
$S:z+15}
B.fm1.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fm2.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c89.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.fNA.prototype={
$1(d){return new B.YR(this.a,null)},
$S:z+16}
B.d2r.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:8}
B.d2p.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d2q.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQo.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0o()},
$S:12}
B.dPM.prototype={
$0(){var x=J.bDT(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPN.prototype={
$0(){var x=J.bDT(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPl.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPk(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDt(this.c)}},
$S:0}
B.dPk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPm.prototype={
$0(){var x=J.bDT(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPr.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPq(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDt(this.c)}},
$S:0}
B.dPq.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQc.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dQd.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dPJ.prototype={
$1(d){return new B.UC(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dPG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HZ(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UG(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0z(s.gM(t)),$async$$0)
case 8:case 7:r.i5(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPp.prototype={
$1(d){this.a.abz(d,"No files selected.","Added")},
$S:453}
B.dPR.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dPQ(),A.T(x).k("M<1,m>")))},
$S:0}
B.dPQ.prototype={
$1(d){return d.a},
$S:z+2}
B.dPv.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xa.c7().cT5(C.a_l,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.js(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ab(j)
$.am.$1("[doc share import] "+A.u(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.i5("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i5("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoU(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i5("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tI(),$async$$0)
case 9:o.i5("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ9.prototype={
$1(d){return new B.Pq(this.a.a.c,this.b,null)},
$S:z+7}
B.dQa.prototype={
$1(d){return new B.YT(this.a.a.c,this.b,null)},
$S:z+18}
B.dQb.prototype={
$1(d){return new B.YQ(this.a.a.c,this.b,null)},
$S:z+19}
B.dPH.prototype={
$1(d){return new B.Pq(this.a.a.c,this.b,null)},
$S:z+7}
B.dPI.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQ2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HZ(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6L(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i5("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cmF(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.T(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dPZ(p),r),new B.dQ_(),r.k("M<ak.E,m>")).c0(0,new B.dQ0())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.e9(new B.dQ1(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p8(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UM(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPZ.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dPY(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPY.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQ_.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dQ0.prototype={
$1(d){return d.length!==0},
$S:3}
B.dQ1.prototype={
$1(d){var x=this.a
return new B.YV(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dQ3.prototype={
$1(d){return d.a},
$S:z+2}
B.dQ4.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPX.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gap7(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mF)?C.u6:C.oY
p=!x||p.my(D.mF)?"Play video":"View"
return A.c_(A.bm(!0,new A.D(C.Bh,A.x(A.a([q,o,t,C.aB,B.YU(!1,u,!1,w,p,new B.dPS(d),v),B.YU(!1,u,!1,C.jt,"Share via QR",new B.dPT(d),"Letters/numbers QR code"),B.YU(!1,u,!1,D.a0m,"Send to their Code",new B.dPU(d),"Enter someone else's personal code"),B.YU(!1,u,!1,C.hC,"Download / save",new B.dPV(d),v),C.am,B.YU(!1,u,!0,C.e7,"Delete",new B.dPW(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,v,v,C.n),C.bf)},
$S:687}
B.dPS.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dPT.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dPU.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dPV.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dPW.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dPs.prototype={
$1(d){return d.a},
$S:z+2}
B.dPt.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPu.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6N(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gp(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p8(s.c,s.f),$async$$0)
case 4:u.i5(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPo.prototype={
$1(d){var x=this.a
x.tJ(new B.dPn(x,d,this.b),"Preparing\u2026")},
$S:453}
B.dPn.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i5("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UG(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i5("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCP(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i5("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPK.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dPL.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fVM(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPE.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gm(new B.dPA(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i5("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dPB(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dPC(s))
case 5:x=8
return A.b(r.b.iq(0,C.Fk,new B.dPD()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i5("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i5("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPA.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPx(x,d,e))},
$S:140}
B.dPx.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPB.prototype={
$1(d){return new B.abV(this.a.a,null)},
$S:z+21}
B.dPC.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dPD.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dPF.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ij(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6B(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_X(B.Ij(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoU(new B.dPy(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fVL(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i5(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dPz()).gM(0)
s.i5(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPy.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPw(x,d,e))},
$S:140}
B.dPw.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPz.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.dPP.prototype={
$1(d){return new B.YW(this.a.a.c,null)},
$S:z+23}
B.dPO.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZs(u.a.c,v.b),$async$$0)
case 2:t.i5(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ8.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.D(C.Bh,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YU(!0,w,!1,C.nk,"My Code",new B.dQ5(d),"Your personal code & QR \u2014 others send docs to you"),B.YU(!1,w,!1,D.a0m,"Send to their Code",new B.dQ6(this.a,d),"Enter someone else's 5-digit code + letter"),B.YU(!1,w,!1,S.yx,"Import backup",new B.dQ7(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,x,x,C.n),C.bf)},
$S:687}
B.dQ5.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dQ6.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bC2()},
$S:0}
B.dQ7.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dQl.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.It(D.Q7,x,C.a0g,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.Q7).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dQj.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQk.prototype={
$0(){this.a.ahO()
return null},
$S:0}
B.dQm.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*10)),e)},
$S:100}
B.dQn.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abX(e,w,v,this.b,x.e,x.c6D(w),new B.dQf(x,w),new B.dQg(x,v,w),new B.dQh(x,w),new B.dQi(x,w),null)},
$S:z+24}
B.dQf.prototype={
$0(){this.a.af2(this.b)
return null},
$S:0}
B.dQg.prototype={
$0(){var x=this.a
return x.m(new B.dQe(x,this.b,this.c))},
$S:0}
B.dQe.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQh.prototype={
$0(){this.a.NL(this.b)
return null},
$S:0}
B.dQi.prototype={
$0(){this.a.ahB(this.b)
return null},
$S:0}
B.d2n.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*18)),e)},
$S:100}
B.d2o.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:136}
B.d2L.prototype={
$3(d,e,f){return A.de(A.dW(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.d2K.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d2H.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d2I.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d2J.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d2F.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fP(w,C.A,x,new B.d2D(this.a),C.fZ,C.dv,!0,x,!1,x,x)
$.aV.x1$.push(new B.d2E(this.a))
return C.bI},
$S:137}
B.d2D.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d2B(this.a))
return C.bI},
$S:199}
B.d2B.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2y(x))},
$S:8}
B.d2y.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2E.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2A(x))},
$S:8}
B.d2A.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2G.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d2C(this.a))
return C.bI},
$S:199}
B.d2C.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2z(x))},
$S:8}
B.d2z.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2k.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2j(x,d))},
$S:1739}
B.d2j.prototype={
$0(){return this.a.f=this.b===C.uE},
$S:0}
B.d2l.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2i(x,d))},
$S:8}
B.d2i.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d2m.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2h(x,d))},
$S:8}
B.d2h.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2d.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d2e.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d2f.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d2g.prototype={
$1(d){return this.a.d.ML(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d2Y.prototype={
$0(){var x=this.a.a
return B.rr(x.c,x.d)},
$S:1740}
B.d2Z.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d3_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d30.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d31.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d32.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d34.prototype={
$0(){var x=this.a
x.m(new B.d33(x))},
$S:0}
B.d33.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pT(0)},
$S:0}
B.d2U.prototype={
$1(d){return this.a.Qn(this.b)},
$S:12}
B.d2V.prototype={
$1(d){return this.a.Qm(this.b)},
$S:12}
B.d2M.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d2N.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d2O.prototype={
$1(d){return D.h2q},
$S:z+25}
B.d2T.prototype={
$2(d,e){if(d)B.UM()},
$S:122}
B.d2P.prototype={
$0(){return this.a.a9q(this.b)},
$S:0}
B.d2Q.prototype={
$0(){return this.a.a9n(this.b)},
$S:0}
B.d2R.prototype={
$0(){return this.a.adD(this.b)},
$S:0}
B.d2S.prototype={
$0(){return this.a.a1c(this.b)},
$S:0}
B.d2c.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d2X.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pX(),$async$$0)
case 2:u.m(new B.d2W(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d2W.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c8b.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.c8c.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c8a.prototype={
$2(d,e){return this.bjm(d,e)},
bjm(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UN(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1741}
B.fre.prototype={
$1(d){if(d===D.a6n&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.frf.prototype={
$0(){},
$S:11}
B.frM.prototype={
bkV(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ffx(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.haV(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bkV(d,e)},
$S:679}
B.frL.prototype={
$1(d){var x=this
d.b=new B.frK(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.frK.prototype={
$1(d){return this.bkU(d)},
bkU(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZt(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aJ(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
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
return A.b(B.ffx(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.u(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6K(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ayP.prototype,"gcdw","PZ",0)
x(v,"gcen","J2",0)
x(v,"gcdT","xT",0)
x(v=B.aCJ.prototype,"gc6x","adB",0)
x(v,"gc6y","Zk",0)
x(v,"gct8","ahi",0)
x(v=B.aCM.prototype,"gc6z","Zl",0)
x(v,"gct9","a1w",0)
x(B.aCK.prototype,"gc6A","adC",0)
x(B.ayO.prototype,"gc6F","c6G",4)
x(v=B.aCL.prototype,"gcdU","a_s",0)
x(v,"gcrH","crI",4)
x(v,"gb14","axY",0)
x(v,"gcuG","ahI",0)
x(v,"gbO8","Xf",0)
x(v,"gc6E","E9",0)
x(B.ayQ.prototype,"gb4V","a1v",0)
x(B.ayN.prototype,"gc6H","Zm",0)
x(v=B.ayT.prototype,"gb_L","ccb",4)
x(v,"gc6B","adF",0)
x(v=B.ayR.prototype,"gcqG","a1h",0)
x(v,"gaYV","adE",0)
w(B.ayM.prototype,"gawz","awA",8)
x(v=B.ayS.prototype,"gcgC","afv",0)
x(v,"gbNH","aab",0)
w(v,"gawz","awA",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cj9,B.a95,B.ate,B.aBm,B.aEy,B.jn,B.abD,B.buS,B.EV,B.WX])
w(B.cja,B.cj9)
w(B.b3A,B.a95)
x(A.hZ,[B.cj5,B.cj6,B.cj7,B.cj4,B.cj8,B.cjb,B.cjc,B.cjd,B.cje,B.cjf,B.cjg,B.cjh,B.cji,B.flc,B.fIB,B.fID,B.fIC,B.fIQ,B.fIR,B.fnn,B.d2s,B.d2u,B.d2t,B.d2x,B.fpn,B.fpR,B.c7G,B.c7N,B.c7O,B.c7J,B.c7H,B.c7K,B.c7L,B.fIO,B.fIP,B.dQs,B.dQB,B.dQz,B.dQA,B.fip,B.fnz,B.fnA,B.c84,B.fnC,B.frC,B.fm1,B.fm2,B.c89,B.fNA,B.d2r,B.d2p,B.dQo,B.dPk,B.dPq,B.dPJ,B.dPp,B.dPQ,B.dQ9,B.dQa,B.dQb,B.dPH,B.dPZ,B.dPY,B.dQ_,B.dQ0,B.dQ1,B.dQ3,B.dQ4,B.dPX,B.dPs,B.dPt,B.dPo,B.dPK,B.dPB,B.dPz,B.dPP,B.dQ8,B.dQl,B.dQm,B.d2n,B.d2o,B.d2L,B.d2K,B.d2F,B.d2D,B.d2B,B.d2E,B.d2G,B.d2C,B.d2k,B.d2l,B.d2m,B.d2g,B.d2U,B.d2V,B.d2O,B.c8b,B.c8c,B.fre,B.frL,B.frK])
w(B.b3B,B.ate)
x(A.ja,[B.fIA,B.d2v,B.d2w,B.fpl,B.fpm,B.fpQ,B.dPh,B.dQq,B.dQr,B.dQp,B.dQt,B.dQu,B.dQv,B.dQw,B.dQx,B.dQy,B.dPi,B.dPj,B.fnB,B.d2q,B.dPM,B.dPN,B.dPl,B.dPm,B.dPr,B.dQc,B.dQd,B.dPG,B.dPR,B.dPv,B.dPI,B.dQ2,B.dPS,B.dPT,B.dPU,B.dPV,B.dPW,B.dPu,B.dPn,B.dPL,B.dPE,B.dPx,B.dPC,B.dPD,B.dPF,B.dPw,B.dPO,B.dQ5,B.dQ6,B.dQ7,B.dQj,B.dQk,B.dQf,B.dQg,B.dQe,B.dQh,B.dQi,B.d2H,B.d2I,B.d2J,B.d2y,B.d2A,B.d2z,B.d2j,B.d2i,B.d2h,B.d2d,B.d2e,B.d2f,B.d2Y,B.d2Z,B.d3_,B.d30,B.d31,B.d32,B.d34,B.d33,B.d2M,B.d2N,B.d2P,B.d2Q,B.d2R,B.d2S,B.d2c,B.d2X,B.d2W,B.frf])
x(A.mc,[B.abW,B.Ne,B.a96,B.Og,B.WW,B.Of,B.EW])
x(A.ag,[B.YS,B.UB,B.UF,B.UC,B.YR,B.UD,B.YT,B.YQ,B.Pq,B.YV,B.YP,B.YW])
x(A.ah,[B.ayP,B.aCJ,B.aCM,B.aCK,B.ayO,B.aCL,B.ayQ,B.ayN,B.ayT,B.ayR,B.ayM,B.ayS])
x(A.au,[B.aco,B.ayL,B.bcZ,B.abX,B.abV,B.bd_])
x(A.km,[B.c7M,B.c7I,B.c7Q,B.c7R,B.fJu,B.dPA,B.dPy,B.dQn,B.d2T,B.c8a,B.frM])
x(A.iT,[B.bik,B.buw])})()
A.k0(b.typeUniverse,JSON.parse('{"b3A":{"a95":[]},"b3B":{"ate":[]},"YS":{"ag":[],"t":[]},"ayP":{"ah":["YS"]},"aco":{"au":[],"t":[]},"UB":{"ag":[],"t":[]},"UF":{"ag":[],"t":[]},"aCJ":{"ah":["UB"]},"aCM":{"ah":["UF"]},"bik":{"iT":[]},"UC":{"ag":[],"t":[]},"aCK":{"ah":["UC"]},"YR":{"ag":[],"t":[]},"UD":{"ag":[],"t":[]},"abX":{"au":[],"t":[]},"YT":{"ag":[],"t":[]},"YQ":{"ag":[],"t":[]},"Pq":{"ag":[],"t":[]},"YV":{"ag":[],"t":[]},"abV":{"au":[],"t":[]},"YP":{"ag":[],"t":[]},"YW":{"ag":[],"t":[]},"ayO":{"ah":["YR"]},"buw":{"iT":[]},"aCL":{"ah":["UD"]},"ayL":{"au":[],"t":[]},"bcZ":{"au":[],"t":[]},"ayQ":{"ah":["YT"]},"ayN":{"ah":["YQ"]},"ayT":{"ah":["Pq"]},"ayR":{"ah":["YV"]},"ayM":{"ah":["YP"]},"ayS":{"ah":["YW"]},"bd_":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ud"),k:x("LH()"),m:x("bk<m,m>"),F:x("r3"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a5<m,R>>"),t:x("O<a5<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(ly,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iT>"),a:x("O<dL>"),p:x("O<t>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<m,m>"),P:x("a5<m,@>"),f:x("a5<@,@>"),o:x("iD"),e:x("ifT"),af:x("E9"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("w7"),ab:x("EV"),br:x("ate"),v:x("WX"),N:x("m"),X:x("bq<L>"),Q:x("lK"),D:x("dL"),aw:x("cx<m>"),cd:x("a_<a5<m,@>>"),c7:x("t"),ch:x("bX<ai<jn>>"),aW:x("bX<dL?>"),aY:x("bX<~>"),cx:x("abW"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBm"),bG:x("aEy"),q:x("n2"),B:x("pq<EV>"),c6:x("pq<a96>"),y:x("R"),i:x("L"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a5<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("WX?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,Ne,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abD?"),bk:x("aBm?"),ag:x("aEy?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aZH=new A.ay(C.aE,2,C.q,-1)
D.bXD=new A.a8(C.a3,C.a8,C.x,C.a2e,null,null)
D.b0l=new A.o(null,null,null,C.mc,null,D.bXD,C.n)
D.b1O=new A.o(null,null,null,C.mc,null,E.GN,C.n)
D.acy=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adN=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aeK=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.agb=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fkC=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fyQ=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Dx,null,null,null,null,null,null,null,null,null)
D.d6d=x([D.fkC,C.am,D.fyQ],y.p)
D.bns=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d6d,null)
D.fD9=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.foU=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dx,null,null,null,null,null,null,null,null,null)
D.dm0=x([D.fD9,C.am,D.foU],y.p)
D.bnC=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dm0,null)
D.fzq=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fsI=new A.y("Enter the access code and password from your organization.",null,G.Dx,null,null,null,null,null,null,null,null,null)
D.djQ=x([D.fzq,C.am,D.fsI],y.p)
D.bnM=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.djQ,null)
D.btL=new A.Q(16,10,16,28)
D.btT=new A.Q(16,14,16,4)
D.bv6=new A.Q(20,0,20,16)
D.bvB=new A.Q(20,8,20,16)
D.aiU=new A.Q(24,22,24,20)
D.a0m=new A.a0(63394,"MaterialIcons",!1)
D.alW=new A.a0(63515,"MaterialIcons",!1)
D.bHY=new A.a0(983813,"MaterialIcons",!1)
D.bFb=new A.a0(62867,"MaterialIcons",!1)
D.bIX=new A.ae(D.bFb,44,C.c,null,null,null)
D.bK1=new A.ae(C.q0,null,C.ad,null,null,null)
D.bLq=new A.ae(C.j2,18,null,null,null,null)
D.bN7=new A.ae(D.a0m,26,C.c,null,null,null)
D.bNE=new A.ae(C.BU,null,null,null,null,null)
D.bOc=new A.ae(C.yz,null,null,null,null,null)
D.bPl=new A.ae(W.NV,null,null,null,null,null)
D.bPF=new A.ae(C.hq,16,null,null,null,null)
D.bT6=new A.ae(C.rl,16,null,null,null,null)
D.bJe=new A.ae(C.nk,null,null,null,null,null)
D.bTY=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJe,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOK=new A.ae(C.G2,null,null,null,null,null)
D.bU2=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJz=new A.ae(H.GA,null,null,null,null,null)
D.bUd=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cHE=x([C.fd,C.aZ,C.aE],y.O)
D.bZu=new A.a8(C.az,C.aC,C.x,D.cHE,null,null)
D.cH6=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Q7=x([C.fd,C.aE],y.O)
D.Qn=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mF=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dew=x([C.pE,C.aE],y.O)
D.e6m={iceServers:0}
D.aGS={urls:0}
D.dpL=new A.bk(D.aGS,["stun:stun.l.google.com:19302"],y.m)
D.dpK=new A.bk(D.aGS,["stun:stun1.l.google.com:19302"],y.m)
D.cXu=x([D.dpL,D.dpK],A.ax("O<a5<m,m>>"))
D.dp2=new A.bk(D.e6m,[D.cXu],A.ax("bk<m,@>"))
D.HQ=new B.Ne(0,"lanDirect")
D.RJ=new B.Ne(1,"cloudStash")
D.dB6=new B.Ne(2,"inlineInstant")
D.RK=new B.Ne(3,"webrtcLink")
D.zj=new B.Ne(4,"videoCloud")
D.fyP=new A.y("Receive file",null,C.nC,null,null,null,null,null,null,null,null,null)
D.cx7=x([E.anA,C.ab,D.fyP],y.p)
D.eQe=new A.cl(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cx7,null)
D.ech=new A.D(C.cm,D.eQe,null)
D.fbK=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2U,null,null,null)
D.fl9=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fbK,null,C.L,null,null,null,null,null,null,null)
D.ebz=new A.D(C.Bm,D.fl9,null)
D.b63=new A.cp(C.A,null,null,D.ebz,null)
D.ei2=new A.cL(0,null,0,28,null,null,D.b63,null)
D.eil=new B.a96(0,"RTCDataChannelConnecting")
D.aMc=new B.a96(1,"RTCDataChannelOpen")
D.aMd=new B.a96(3,"RTCDataChannelClosed")
D.eim=new B.EW(0,"RTCIceConnectionStateNew")
D.ein=new B.EW(1,"RTCIceConnectionStateChecking")
D.eio=new B.EW(2,"RTCIceConnectionStateCompleted")
D.eip=new B.EW(3,"RTCIceConnectionStateConnected")
D.eiq=new B.EW(4,"RTCIceConnectionStateCount")
D.eir=new B.EW(5,"RTCIceConnectionStateFailed")
D.eis=new B.EW(6,"RTCIceConnectionStateDisconnected")
D.aMe=new B.EW(7,"RTCIceConnectionStateClosed")
D.aMf=new B.WW(0,"RTCIceGatheringStateNew")
D.eit=new B.WW(1,"RTCIceGatheringStateGathering")
D.a6n=new B.WW(2,"RTCIceGatheringStateComplete")
D.a6o=new B.Of(0,"RTCPeerConnectionStateClosed")
D.aMg=new B.Of(1,"RTCPeerConnectionStateFailed")
D.aMh=new B.Of(2,"RTCPeerConnectionStateDisconnected")
D.aMi=new B.Of(3,"RTCPeerConnectionStateNew")
D.aMj=new B.Of(4,"RTCPeerConnectionStateConnecting")
D.aMk=new B.Of(5,"RTCPeerConnectionStateConnected")
D.eiu=new B.Og(0,"RTCSignalingStateStable")
D.eiv=new B.Og(1,"RTCSignalingStateHaveLocalOffer")
D.eiw=new B.Og(2,"RTCSignalingStateHaveRemoteOffer")
D.eix=new B.Og(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eiy=new B.Og(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMl=new B.Og(5,"RTCSignalingStateClosed")
D.eUJ=new A.ar(160,48)
D.b7h=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eWd=new A.a7(16,16,D.b7h,null)
D.foh=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXE=new A.b1(D.foh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvF=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eXH=new A.b1(D.fvF,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fEd=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eXO=new A.b1(D.fEd,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fnS=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eYd=new A.b1(D.fnS,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzB=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aP8=new A.b1(D.fzB,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fAZ=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eYG=new A.b1(D.fAZ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fFC=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eYV=new A.b1(D.fFC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fDD=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ_=new A.b1(D.fDD,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fEQ=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new A.b1(D.fEQ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmw=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new A.b1(D.fmw,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxt=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f_C=new A.b1(D.fxt,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fqv=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f07=new A.b1(D.fqv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fFI=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0b=new A.b1(D.fFI,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmM=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0h=new A.b1(D.fmM,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.flv=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0w=new A.b1(D.flv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fis=new A.y("NGMY DOC SHARE",null,C.aQs,null,null,null,null,null,null,null,null,null)
D.fjK=new A.y("Show this to sender",null,C.kf,null,null,null,null,null,null,null,null,null)
D.fkJ=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fpi=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fpG=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fqF=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fr8=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fwG=new A.y("Send to their Doc Share",null,C.nA,null,null,null,null,null,null,null,null,null)
D.fwZ=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxh=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fxQ=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxV=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fyh=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fBt=new A.y("Share files & videos\nwith a scan.",null,C.aQt,null,null,null,null,null,null,null,null,null)
D.fBM=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h2q=new B.YP(null)
D.a9y=new B.abW(0,"docShare")
D.a9z=new B.abW(1,"gate")
D.UH=new B.abW(2,"gateNoIndividual")})();(function staticFields(){$.aNe=null
$.fdn=function(){var x=y.N
return A.U(x,x)}()
$.G8=A.U(y.N,y.D)
$.afZ=A.U(y.N,A.ax("ly"))
$.QG=A.U(y.N,y.D)
$.fdR=A.U(y.N,A.ax("abD"))
$.c83=A.U(y.S,A.ax("buS"))
$.haU=1
$.hYs=null
$.hYr=null
$.hPY=null
$.h_R=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ign","hs9",()=>new B.cja())
x($,"iei","h3B",()=>C.a.t(A.bu(A.bu(A.bu(A.GJ(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["dcSCutHS+9IYiJvge2FGzuPdj80="]=a.current})($__dart_deferred_initializers__);