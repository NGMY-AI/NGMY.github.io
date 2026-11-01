((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cjB:function cjB(){},
hKO(d){var x=null,w=new B.b3P(d,D.eiD,new A.pr(x,x,y.c6),new A.pr(x,x,y.B))
w.by4(d)
return w},
b3P:function b3P(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cjw:function cjw(d){this.a=d},
cjx:function cjx(d){this.a=d},
cjy:function cjy(d){this.a=d},
cjv:function cjv(d){this.a=d},
cjz:function cjz(d){this.a=d},
hKP(d,e){var x=y.N
x=new B.b3Q(d,e,A.U(x,y.e),A.U(x,y.z))
x.by5(d,e)
return x},
b3Q:function b3Q(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cjC:function cjC(d){this.a=d},
cjD:function cjD(d){this.a=d},
cjE:function cjE(d){this.a=d},
cjF:function cjF(d){this.a=d},
cjG:function cjG(d){this.a=d},
cjH:function cjH(d){this.a=d},
cjI:function cjI(d){this.a=d},
cjJ:function cjJ(d){this.a=d},
h0C(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yK.LU(x,"ngmy_doc_share_v1",new B.fm6(),1)},
hRn(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.f1(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.A4(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cI.aL(d)
return x}catch(w){return v}return v},
R_(d,e){return B.i5C(d,e)},
i5C(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNq
x=7
return A.b(o==null?$.aNq=B.h0C():o,$async$R_)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mK(s,"blobs","readwrite")
C.iO.mm(J.mI(q,"blobs"),r,d)
x=8
return A.b(J.pB(q),$async$R_)
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
return A.i($async$R_,w)},
QZ(d){return B.i5B(d)},
i5B(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNq
x=7
return A.b(o==null?$.aNq=B.h0C():o,$async$QZ)
case 7:s=f
r=J.mK(s,"blobs","readonly")
x=8
return A.b(C.iO.zv(J.mI(r,"blobs"),d),$async$QZ)
case 8:q=f
x=9
return A.b(J.pB(r),$async$QZ)
case 9:o=B.hRn(q)
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
return A.i($async$QZ,w)},
agM(d){return B.i5A(d)},
i5A(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNq
x=7
return A.b(p==null?$.aNq=B.h0C():p,$async$agM)
case 7:s=f
r=J.mK(s,"blobs","readwrite")
C.iO.FK(J.mI(r,"blobs"),d)
x=8
return A.b(J.pB(r),$async$agM)
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
return A.i($async$agM,w)},
fm6:function fm6(){},
hTH(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bom(w,v))}return u},
hqH(d,e){var x,w={},v=A.aVT("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fJF(w,v,e)
C.w5.yr(v,"change",new B.fJH(w,v,!1))
C.w5.yr(v,"cancel",new B.fJG(w))
$.eU.mt()
v.click()
A.bN(C.ahd,new B.fJE(w),y.H)},
fJF:function fJF(d,e,f){this.a=d
this.b=e
this.c=f},
fJH:function fJH(d,e,f){this.a=d
this.b=e
this.c=f},
fJG:function fJG(d){this.a=d},
fJE:function fJE(d){this.a=d},
CZ(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CZ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTu()?3:4
break
case 3:x=5
return A.b(B.hlN(e,d,s,!0,!1,f,g,h,!1,i),$async$CZ)
case 5:x=1
break
case 4:x=6
return A.b(B.QF(d,s,f,g,h,i),$async$CZ)
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
return A.b(B.Iq(s,d),$async$CZ)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fhx(s,d),$async$CZ)
case 14:x=12
return A.b(r.hlN(q,p,o,n,m,l,k,j,a1,i),$async$CZ)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cm(A.ea(new B.fJU(s,i,d,f,g,h),!1,null,y.H)),$async$CZ)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cm(A.ea(new B.fJV(s,i,d,f,g,h),!1,null,y.H)),$async$CZ)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CZ,w)},
QF(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QF=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZA(e),$async$QF)
case 3:u=k
x=4
return A.b(B.aoY(d,e,!1),$async$QF)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Iq(e,d),$async$QF)
case 7:if(k){v=D.a9H
x=1
break}x=8
return A.b(B.UL(e),$async$QF)
case 8:v=t?D.UK:D.a9I
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZy(d,e)){v=D.a9H
x=1
break}x=11
return A.b(B.UL(e),$async$QF)
case 11:v=t?D.UK:D.a9I
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fWM(d,e)){v=D.a9H
x=1
break}x=14
return A.b(B.UL(e),$async$QF)
case 14:v=D.UK
x=1
break
case 13:v=t?D.UK:D.a9I
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QF,w)},
fhx(d,e){var x=0,w=A.j(y.y),v
var $async$fhx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZy(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZA(d),$async$fhx)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fhx,w)},
hlN(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cm(A.ea(new B.fok(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hgV(d,e,f,g,h,i,j){return new B.YZ(e,j,d,g,h,i,f,null)},
fqh(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fqh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fqk(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fqh)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqh,w)},
fqM(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fqM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fqO(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fqM)
case 3:q=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
r.U$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqM,w)},
h0L(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fCf(d,e){var x=0,w=A.j(y.H),v
var $async$fCf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UL(e),$async$fCf)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fCf,w)},
fJU:function fJU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJV:function fJV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ac3:function ac3(d,e){this.a=d
this.b=e},
fok:function fok(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YZ:function YZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az0:function az0(){this.c=this.a=this.d=null},
d2Y:function d2Y(d,e){this.a=d
this.b=e},
d2V:function d2V(d){this.a=d},
d2X:function d2X(d){this.a=d},
d2W:function d2W(d){this.a=d},
d3_:function d3_(){},
d2Z:function d2Z(d){this.a=d},
acw:function acw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBy:function aBy(d,e){this.a=d
this.b=e},
aEK:function aEK(d,e,f){this.a=d
this.b=e
this.c=f},
fqk:function fqk(d,e,f){this.a=d
this.b=e
this.c=f},
fqi:function fqi(d){this.a=d},
fqj:function fqj(d,e,f){this.a=d
this.b=e
this.c=f},
fqO:function fqO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqN:function fqN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c86(d,e,f,g,h){return B.hFJ(d,e,f,g,h)},
hFJ(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c86=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dz(d,new B.c87(s,e,h,g,f,q),y.g),y.l),$async$c86)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c86,w)},
aZv(d,e,f,g,h){return B.hFK(d,e,f,g,h)},
hFK(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZv=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auf("GET",d)
o=A.fT9()
if(o==null)o=new A.LI(A.a([],y.W))
x=7
return A.b(o.f_(0,s).d8(0,C.Fp),$async$aZv)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ch(),$async$aZv)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BE(q,h,o,e,f,"Received via QR")
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
return A.i($async$aZv,w)},
aZu(d){return B.hFH(d)},
hFH(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d8(0,C.o0),$async$aZu)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aK(0,A.lT(A.lR(p.e)).cB(0,p.w),null)
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
return A.i($async$aZu,w)},
c85(d){return B.hFI(d)},
hFI(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c85=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d8(0,C.pW),$async$c85)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lT(A.lR(q.e)).cB(0,q.w)
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
return A.i($async$c85,w)},
c87:function c87(d,e,f,g,h,i){var _=this
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
Io(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hFP(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Io(C.a.b5(u,v.length))}return null},
hFQ(d){var x=B.Io(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hFL(){var x,w=$.py(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.h2(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a6G(d){return B.hFM(d)},
hFM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bJ),$async$a6G)
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
return A.i($async$a6G,w)},
a6H(d,e){return B.hFN(d,e)},
hFN(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6H=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cH,null),$async$a6H)
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
return A.i($async$a6H,w)},
BD(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$BD)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Io(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6I(r),$async$BD)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6G("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BD)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Io(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BD)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hFL()
x=14
return A.b(B.a6I(m),$async$BD)
case 14:if(f!=null){x=12
break}l=new A.T(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6H("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 15:k=f
x=16
return A.b(B.a6H("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BD)
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
return A.i($async$BD,w)},
a6I(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Io(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6G("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6I)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
a6J(d,e,f,g){return B.hFR(d,e,f,g)},
hFR(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6J=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gan(d)){v=!1
x=1
break}r=B.Io(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6I(r),$async$a6J)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c8d())>1048576||g.b6(d,new B.c8e())){v=B.Eu(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6U("myCode",d,a0),$async$a6J)
case 4:u=a3
try{t=C.S.aK(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Eu(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZD(u,g.gM(d),a0),$async$a6J)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.py().av(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c8f(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZw(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6J)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6J,w)},
Eu(d,e,f,g,h){return B.hFO(d,e,f,g,h)},
hFO(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eu=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Eu)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c89())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.py().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cG.av(99999)
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
a1=B.Is(a9,q)
a0=new A.Kh(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Eu)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aW(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p_(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aai(a1.a,a4,"media",a1.d,a2).x0(m,n,new A.DL(!0,q.c)),$async$Eu)
case 12:J.ce(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Eu)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPX(r),$async$Eu)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dz(a6,new B.c8a(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZw(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Eu)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPX(r),$async$Eu)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Eu,w)},
aZw(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6G(t),$async$aZw)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c88(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6H(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZw,w)},
Ni(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ni=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6G("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ni)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cn(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aZx(k,a0),$async$Ni)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZC(h),$async$Ni)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.US(g,a0),$async$Ni)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c8b(),q),n)
d=A.C(new A.a_(r,new B.c8c(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d9(d,0,A.dG(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a6H("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Ni)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ni,w)},
aZx(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cn(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
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
break}i=B.i9o(k,j)
C.d.v(s,i)
x=5
return A.b(B.CX(l,m,"Received via My Code",t,e,i),$async$aZx)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPX(s),$async$aZx)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZx,w)},
c8d:function c8d(){},
c8e:function c8e(){},
c8f:function c8f(){},
c89:function c89(){},
c8a:function c8a(){},
c88:function c88(){},
c8b:function c8b(){},
c8c:function c8c(){},
fJR(d,e){var x=0,w=A.j(y.H)
var $async$fJR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cm(A.ea(new B.fJS(e),!1,null,y.H)),$async$fJR)
case 2:return A.h(null,w)}})
return A.i($async$fJR,w)},
bD5(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bD5=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cm(A.ea(new B.fJT(g,e,f),!1,null,y.y)),$async$bD5)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bD5,w)},
fJS:function fJS(d){this.a=d},
fJT:function fJT(d,e,f){this.a=d
this.b=e
this.c=f},
UI:function UI(d,e){this.c=d
this.a=e},
aCV:function aCV(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dPK:function dPK(d,e){this.a=d
this.b=e},
UM:function UM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCY:function aCY(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dQT:function dQT(d){this.a=d},
dQU:function dQU(d){this.a=d},
dQV:function dQV(d){this.a=d},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQW:function dQW(d){this.a=d},
dQX:function dQX(d){this.a=d},
dQY:function dQY(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR0:function dR0(d){this.a=d},
dR3:function dR3(){},
dR1:function dR1(d){this.a=d},
dR2:function dR2(d,e){this.a=d
this.b=e},
biz:function biz(){},
UJ:function UJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCW:function aCW(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dPL:function dPL(d){this.a=d},
dPM:function dPM(d){this.a=d},
fWN(d){var x=d.hZ
if(x>=0)return C.o.N(x)
return 10},
hFT(d){var x=d.kN
if(x>=0)return x
return 4.99},
hFS(d){var x=d.lt,w=y.N
w=x.ja(x,new B.c8h(),w,w)
return w},
hbY(d){var x=d.kO,w=y.N
w=x.ja(x,new B.c8i(),w,w)
return w},
aZA(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZA)
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
return A.i($async$aZA,w)},
a6L(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a6L)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6L)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6L,w)},
UL(d){var x=0,w=A.j(y.H),v,u
var $async$UL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$UL)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UL)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UL,w)},
fWM(d,e){var x,w,v
if(B.hFT(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hFS(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.T(Date.now(),0,!1))},
aZy(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hbY(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.T(Date.now(),0,!1))},
hbZ(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hbY(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.T(Date.now(),0,!1))?v:new A.T(Date.now(),0,!1)
w.n(0,t,u.bR(A.dE(f,0,0,0,0,0).a).a6().ac())
d.kO=w},
aoZ(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aoZ)
case 7:s=f
r=A.u(p)
r=A.eP(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoZ,w)},
ap_(d){var x=0,w=A.j(y.H),v,u,t
var $async$ap_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoZ(d),$async$ap_)
case 3:u=f
x=5
return A.b(A.ay(),$async$ap_)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$ap_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ap_,w)},
aoY(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fWN(d)
if(u<=0){v=!1
x=1
break}if(B.fWM(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoZ(e),$async$aoY)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoY,w)},
aZz(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Iq(e,d),$async$aZz)
case 3:if(g){v=-1
x=1
break}u=B.fWN(d)
if(u<=0){v=-1
x=1
break}if(B.fWM(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoZ(e),$async$aZz)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZz,w)},
c8k(d,e,f){var x=0,w=A.j(y.y),v
var $async$c8k=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Iq(e,d),$async$c8k)
case 3:if(h){v=!1
x=1
break}v=B.aoY(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8k,w)},
c8j(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c8j=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c8k(d,u,i.gTu()),$async$c8j)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8j,w)},
a6K(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6K=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTu()){v=!0
x=1
break}if(B.aZy(d,u)){v=!0
x=1
break}x=5
return A.b(A.lk(u,C.S9),$async$a6K)
case 5:x=k?3:4
break
case 3:B.hbZ(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6K)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kY(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.S9,"Doc Share for Organizations"),$async$a6K)
case 7:if(!k){v=!1
x=1
break}B.hbZ(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6K)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6K,w)},
c8h:function c8h(){},
c8i:function c8i(){},
fKw(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fKw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fKw)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fee.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fee.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKw,w)},
ibI(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fee.br($.fee,new B.fKy(d))},
fKy:function fKy(d){this.a=d},
ffA(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$ffA=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bN(C.jn,null,y.H),$async$ffA)
case 3:C.Ac.ff(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffA,w)},
afE(d,e,f){var x=0,w=A.j(y.H),v
var $async$afE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.feI.n(0,d,new B.abL(A.bo(e,!0,v)))
x=3
return A.b(A.ay(),$async$afE)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afE)
case 2:return A.h(null,w)}})
return A.i($async$afE,w)},
afy(d){return B.hVy(d)},
hVy(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.feI.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$afy)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aK(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fji(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abL(r)
$.feI.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afy,w)},
Qv(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.Gc.n(0,d,u)
x=3
return A.b(B.R_(d,u),$async$Qv)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qv,w)},
aNM(d){return B.hVw(d)},
hVw(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gc.h(0,d)
if(n!=null&&!C.aH.gan(n)){v=n
x=1
break}x=3
return A.b(B.QZ(d),$async$aNM)
case 3:p=f
if(p!=null&&!C.aH.gan(p)){$.Gc.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aNM)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aL(r)
x=!J.cn(q)?9:10
break
case 9:B.Qv(d,q)
x=11
return A.b(J.hy(s,d),$async$aNM)
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
return A.i($async$aNM,w)},
hRK(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cf(J.f1(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cf(A.A4(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cf(d)),y.K)
return A.f9(null,y.K)},
a1r(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fM(r,"loadend",new B.fox(r,t),!1,s)
A.fM(r,"error",new B.foy(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ir(0,C.Mh,new B.foz())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1r,w)},
aO5(d,e,f){return B.hXN(d,e,f)},
hXN(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aO5=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1r(i),$async$aO5)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.R_(o,p),$async$aO5)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.ce(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afE(k,j,s),$async$aO5)
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
return A.i($async$aO5,w)},
aO4(d,e,f){return B.hXM(d,e,f)},
hXM(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aO4=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aO5(d,e,f),$async$aO4)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1r(f),$async$aO4)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gc.n(0,s,r)
$.QM.n(0,s,r)
x=11
return A.b(B.Qv(s,r),$async$aO4)
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
return A.i($async$aO4,w)},
BE(d,e,f,g,h,i){return B.hG1(d,e,f,g,h,i)},
hG1(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BE=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.T(Date.now(),0,!1).a6().ac(),a0,f,B.aZG(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qv(s,d),$async$BE)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$BE)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cS.gcw().aL(d)),$async$BE)
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
return A.b(B.AF(e),$async$BE)
case 12:j=a2
J.ce(j,m)
x=13
return A.b(B.Go(e,j),$async$BE)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BE,w)},
UN(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UN=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AF(d),$async$UN)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cG.av(99999)
n=p.b
l=o.type
l.toString
k=B.hc0(n,null,l)
l=o.size
l.toString
j=new A.T(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZG(),null)
$.ag6.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1r(o),$async$UN)
case 7:g=a1
x=g!=null&&!C.aH.gan(g)?8:10
break
case 8:$.Gc.n(0,h,g)
$.QM.n(0,h,g)
B.Qv(h,g)
x=9
break
case 10:x=11
return A.b(B.aO4(d,m,o),$async$UN)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Go(d,t),$async$UN)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UN,w)},
fWR(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fWR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hc0(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ir(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gan(s)){v=B.BE(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWR,w)},
Ir(d,e,f,g,h,i){return B.hG0(d,e,f,g,h,i)},
hG0(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ir=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kh(A.dG(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ir)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.Ry(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kK(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.R_(k,l),$async$Ir)
case 11:J.ce(q,k);++p
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
return A.b(j.a7(0),$async$Ir)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.R_(k,new Uint8Array(A.cf(n))),$async$Ir)
case 15:J.ce(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afE(r,q,g),$async$Ir)
case 16:f=new B.jn(i,a1,a0,g,new A.T(Date.now(),0,!1).a6().ac(),a2,null,B.aZG(),null)
x=17
return A.b(B.AF(d),$async$Ir)
case 17:e=a6
J.ce(e,f)
x=18
return A.b(B.Go(d,e),$async$Ir)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ir,w)},
UP(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UP=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ag6.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1r(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afy(s),$async$UP)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QZ(u[o]),$async$UP)
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
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QM.h(0,s)
if(i==null)i=$.Gc.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rs(d,e),$async$UP)
case 12:i=a0
if(i!=null&&!C.aH.gan(i))$.QM.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A4(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UP,w)},
hc0(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rs(d,e){return B.hG2(d,e)},
hG2(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rs=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QM.h(0,f)
if(e==null)e=$.Gc.h(0,f)
if(e!=null&&!C.aH.gan(e)){v=e
x=1
break}s=$.ag6.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1r(s),$async$rs)
case 9:r=a3
if(r!=null&&!C.aH.gan(r)){$.Gc.n(0,f,r)
$.QM.n(0,f,r)
B.Qv(f,r)
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
return A.b(B.afy(f),$async$rs)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axO(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QZ(g[l]),$async$rs)
case 16:k=a3
if(k!=null&&!C.aH.gan(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.anR()
if(!C.aH.gan(r)){$.Gc.n(0,f,r)
$.QM.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNM(f),$async$rs)
case 17:j=a3
if(j!=null&&!C.aH.gan(j)){$.QM.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UP(a0,a1,0,g),$async$rs)
case 20:i=a3
if(i!=null&&!C.aH.gan(i)){h=new Uint8Array(A.cf(i))
$.Gc.n(0,f,h)
$.QM.n(0,f,h)
B.Qv(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rs,w)},
hG5(d){var x,w,v=$.ag6.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hG6(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hG3(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ap5(d,e,f,g,h){return B.hG4(d,e,f,g,h)},
hG4(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ap5=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ag6.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1r(s),$async$ap5)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rs(g,e),$async$ap5)
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
return A.b(n.ik(d).x0(h,r,new A.DL(!0,e.c)),$async$ap5)
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
return A.i($async$ap5,w)},
hc2(d,e,f,g,h){var x,w,v,u,t=$.hc1
$.hc1=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c8v.n(0,t,new B.bv8(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axO(u)))
return t},
fWS(d){var x=0,w=A.j(y.H)
var $async$fWS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fWS,w)},
Is(d,e){var $async$Is=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ag6.h(0,h)
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
return A.q9(B.UP(d,e,p,o<q?o:q),$async$Is,w)
case 8:n=a1
x=n!=null&&!C.aH.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q9(A.FK(n),$async$Is,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q9(B.afy("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Is,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q9(B.QZ(h[l]),$async$Is,w)
case 18:k=a1
x=k!=null&&!C.aH.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q9(A.FK(k),$async$Is,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q9(B.rs(d,e),$async$Is,w)
case 22:j=a1
x=j!=null&&!C.aH.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q9(A.FK(A.A4(j,p,o<i?o:i)),$async$Is,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q9(null,0,w)
case 2:return A.q9(t.at(-1),1,w)}})
var x=0,w=A.hkG($async$Is,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hmv(w)},
aZI(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c8v.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4k(),$async$aZI)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZI,w)},
UO(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8v.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4k(),$async$UO)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afE(r.c,u,r.z),$async$UO)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.T(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZG(),null)
u=r.a
x=5
return A.b(B.AF(u),$async$UO)
case 5:s=f
J.ce(s,t)
x=6
return A.b(B.Go(u,s),$async$UO)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UO,w)},
a6R(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8v.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agM(u[s]),$async$a6R)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
c8x(d,e,f){var x=0,w=A.j(y.H)
var $async$c8x=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bA9(d,e,f),$async$c8x)
case 2:return A.h(null,w)}})
return A.i($async$c8x,w)},
c8y(d,e,f){var x=0,w=A.j(y.H)
var $async$c8y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAa(d,e,f),$async$c8y)
case 2:return A.h(null,w)}})
return A.i($async$c8y,w)},
Ev(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ev=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AF(d),$async$Ev)
case 2:p=g
J.nt(p,new B.c8w(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gc.W(0,v)
$.ag6.W(0,e)
x=3
return A.b(B.afy(v),$async$Ev)
case 3:u=g
$.feI.W(0,v)
x=4
return A.b(A.ay(),$async$Ev)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ev)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ev)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agM(s[q]),$async$Ev)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agM(v),$async$Ev)
case 13:x=14
return A.b(B.Go(d,p),$async$Ev)
case 14:return A.h(null,w)}})
return A.i($async$Ev,w)},
aZH(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rs(d,e),$async$aZH)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.ffA(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZH,w)},
AF(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$AF)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aK(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.foA(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AF,w)},
Go(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Go=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Go)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fsz(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Go)
case 3:return A.h(null,w)}})
return A.i($async$Go,w)},
bA9(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bA9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AF(d),$async$bA9)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fmZ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDA(f))
x=4
return A.b(B.Go(d,u),$async$bA9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bA9,w)},
bAa(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AF(d),$async$bAa)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fn_(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cIz(f))
x=4
return A.b(B.Go(d,u),$async$bAa)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAa,w)},
abL:function abL(d){this.a=d},
fji:function fji(){},
fox:function fox(d,e){this.a=d
this.b=e},
foy:function foy(d){this.a=d},
foz:function foz(){},
c8w:function c8w(d){this.a=d},
bv8:function bv8(d,e,f,g,h,i,j,k,l){var _=this
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
foA:function foA(){},
fsz:function fsz(){},
fmZ:function fmZ(d){this.a=d},
fn_:function fn_(d){this.a=d},
a6S(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b6(d,new B.c8B())?3:4
break
case 3:x=5
return A.b(B.aZJ(d,e),$async$a6S)
case 5:u=g
if(u!=null){t=u.c
B.Nk(d,u.b,e,t)}v=u
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
return A.b(B.aZE(s),$async$a6S)
case 10:case 9:if(g){v=new A.PU(1,D.RN,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UQ(d,e),$async$a6S)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UV(!0,!0,d,e),$async$a6S)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nk(d,D.zl,e,t)
v=new A.PU(p,D.zl,t)
x=1
break}v=B.c8A(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6S,w)},
UQ(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6U(null,d,e),$async$UQ)
case 3:p=g
try{u=C.S.aK(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZD(p,d.length,e),$async$UQ)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c8y(e,C.d.gI(d).a,r.b),$async$UQ)
case 7:case 6:q=r.a
x=8
return A.b(B.Nk(d,D.RN,e,q),$async$UQ)
case 8:v=new A.PU(d.length,D.RN,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UQ,w)},
UR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mG)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6T(d,e),$async$UR)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c8t(s,d,e,t),$async$UR)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZE(t),$async$UR)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rs(e,d),$async$UR)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UQ(A.a([d],y.r),e),$async$UR)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UR,w)},
UT(){var x=0,w=A.j(y.H)
var $async$UT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fWL(),$async$UT)
case 2:x=3
return A.b(B.aQd(),$async$UT)
case 3:return A.h(null,w)}})
return A.i($async$UT,w)},
a6T(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZG()
x=3
return A.b(B.c8x(e,d.a,u),$async$a6T)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6T,w)},
Nk(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RN&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6T(p,f),$async$Nk)
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
return A.b(B.c8s(o,p,u,f),$async$Nk)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c8t(o,p,f,t),$async$Nk)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c8r(o,u,p,f),$async$Nk)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nk,w)},
aZJ(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8z(e,d),$async$aZJ)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UV(!1,!0,d,e),$async$aZJ)
case 4:u=g
if(u!=null){t=u.b
v=new A.PU(u.a,D.zl,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZJ,w)},
c8z(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c8z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UP(d,s,0,1),$async$c8z)
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
return A.i($async$c8z,w)},
c8A(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c8A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6U(null,d,e),$async$c8A)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hc_(u)
if(t.length>800){v=null
x=1
break}v=new A.PU(d.length,D.dBo,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8A,w)},
ap6(d,e,f){return B.hG9(d,e,f)},
hG9(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ap6=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mJ(g,1)
x=B.fWQ(g)?3:4
break
case 3:x=5
return A.b(B.c8u(g),$async$ap6)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mJ(g,13))
try{k=B.Ew(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mJ(g,13))
u=9
x=12
return A.b(B.aZC(q),$async$ap6)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.US(p,a0)
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
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fWP(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.US(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.It(C.a.i(J.mJ(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.It(C.a.i(J.mJ(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.It(h,d,a0)
x=1
break}if(J.f4(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.US(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ap6,w)},
It(d,e,f){return B.hG7(d,e,f)},
hG7(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$It=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cE(A.u(s)+"/manifest.json",0,null)
q=A.cE(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZu(r),$async$It)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZu(A.cE(s,0,null)),$async$It)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c86(o,r,a1,n,a2),$async$It)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c85(q),$async$It)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.US(l,a2),$async$It)
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
return A.i($async$It,w)},
a6U(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6U=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rs(f,r),$async$a6U)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcw().aL(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.T(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6U,w)},
US(d,e){return B.hG8(d,e)},
hG8(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$US=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aK(0,a2,null)
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
e=J.aV(r)
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
break}i=C.cI.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BE(i,a3,d,k,l,o),$async$US)
case 9:h=a5
if(h!=null)J.ce(n,h)
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
return A.i($async$US,w)},
Nj:function Nj(d,e){this.a=d
this.b=e},
c8B:function c8B(){},
a10(d){var x=A.P(d).ax.a===C.I,w=x?D.aeU:D.acH,v=x?D.agl:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.adW:C.aL
return new A.aFY([w,s,v,u,t,x?C.fd:C.bT])},
hrp(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fOE(e),d,null,!0,!0,y.N)},
c8g(d,e,f,g,h,i,j,k,l){return new B.UK(e,l,d,f,k,j,g,h,i,null)},
Z0(d,e,f,g,h,i,j){return new B.bde(g,h,j,e,i,d,f,null)},
fOE:function fOE(d){this.a=d},
YY:function YY(d,e){this.c=d
this.a=e},
az_:function az_(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2U:function d2U(d){this.a=d},
d2S:function d2S(d){this.a=d},
d2T:function d2T(d){this.a=d},
buN:function buN(){},
UK:function UK(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCX:function aCX(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dQR:function dQR(d){this.a=d},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQf:function dQf(d,e){this.a=d
this.b=e},
dPO:function dPO(d,e,f){this.a=d
this.b=e
this.c=f},
dPN:function dPN(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPU:function dPU(d,e,f){this.a=d
this.b=e
this.c=f},
dPT:function dPT(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQG:function dQG(d){this.a=d},
dQb:function dQb(d,e,f){this.a=d
this.b=e
this.c=f},
dQ8:function dQ8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPS:function dPS(d){this.a=d},
dQj:function dQj(d){this.a=d},
dQi:function dQi(){},
dPY:function dPY(d){this.a=d},
dQC:function dQC(d,e){this.a=d
this.b=e},
dQD:function dQD(d,e){this.a=d
this.b=e},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQa:function dQa(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQr:function dQr(d){this.a=d},
dQq:function dQq(d){this.a=d},
dQs:function dQs(){},
dQt:function dQt(){},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQw:function dQw(){},
dQx:function dQx(d){this.a=d},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQk:function dQk(d){this.a=d},
dQl:function dQl(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQn:function dQn(d){this.a=d},
dQo:function dQo(d){this.a=d},
dPV:function dPV(){},
dPW:function dPW(d){this.a=d},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d,e,f){this.a=d
this.b=e
this.c=f},
dQc:function dQc(d){this.a=d},
dQd:function dQd(d,e,f){this.a=d
this.b=e
this.c=f},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dQ_:function dQ_(d,e,f){this.a=d
this.b=e
this.c=f},
dQ3:function dQ3(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
dQ5:function dQ5(){},
dQ7:function dQ7(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d){this.a=d},
dPZ:function dPZ(d,e,f){this.a=d
this.b=e
this.c=f},
dQ1:function dQ1(){},
dQh:function dQh(d){this.a=d},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQy:function dQy(d){this.a=d},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQA:function dQA(d){this.a=d},
dQO:function dQO(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQN:function dQN(d){this.a=d},
dQP:function dQP(){},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQI:function dQI(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
dQK:function dQK(d,e){this.a=d
this.b=e},
dQL:function dQL(d,e){this.a=d
this.b=e},
ayX:function ayX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdd:function bdd(d,e,f){this.c=d
this.d=e
this.a=f},
d2Q:function d2Q(){},
d2R:function d2R(){},
ac4:function ac4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3d:function d3d(){},
d3c:function d3c(d){this.a=d},
Z_:function Z_(d,e,f){this.c=d
this.d=e
this.a=f},
az1:function az1(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d39:function d39(d){this.a=d},
d3a:function d3a(d,e,f){this.a=d
this.b=e
this.c=f},
d3b:function d3b(d,e){this.a=d
this.b=e},
d37:function d37(d,e){this.a=d
this.b=e},
d35:function d35(d){this.a=d},
d33:function d33(d){this.a=d},
d30:function d30(d){this.a=d},
d36:function d36(d){this.a=d},
d32:function d32(d){this.a=d},
d38:function d38(d){this.a=d},
d34:function d34(d){this.a=d},
d31:function d31(d){this.a=d},
YX:function YX(d,e,f){this.c=d
this.d=e
this.a=f},
ayZ:function ayZ(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d2N:function d2N(d){this.a=d},
d2M:function d2M(d,e){this.a=d
this.b=e},
d2O:function d2O(d){this.a=d},
d2L:function d2L(d,e){this.a=d
this.b=e},
d2P:function d2P(d){this.a=d},
d2K:function d2K(d,e){this.a=d
this.b=e},
d2G:function d2G(d){this.a=d},
d2H:function d2H(d){this.a=d},
d2I:function d2I(d,e){this.a=d
this.b=e},
d2J:function d2J(d){this.a=d},
Pw:function Pw(d,e,f){this.c=d
this.d=e
this.a=f},
az4:function az4(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d3q:function d3q(d){this.a=d},
d3r:function d3r(d){this.a=d},
d3s:function d3s(d){this.a=d},
d3t:function d3t(d){this.a=d},
d3u:function d3u(d,e){this.a=d
this.b=e},
d3v:function d3v(d){this.a=d},
d3x:function d3x(d){this.a=d},
d3w:function d3w(d){this.a=d},
Z1:function Z1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az2:function az2(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3n:function d3n(d,e){this.a=d
this.b=e},
d3e:function d3e(d,e,f){this.a=d
this.b=e
this.c=f},
d3f:function d3f(d){this.a=d},
d3g:function d3g(){},
d3l:function d3l(){},
d3h:function d3h(d,e){this.a=d
this.b=e},
d3i:function d3i(d,e){this.a=d
this.b=e},
d3j:function d3j(d,e){this.a=d
this.b=e},
d3k:function d3k(d,e){this.a=d
this.b=e},
ac2:function ac2(d,e){this.c=d
this.a=e},
d2F:function d2F(d){this.a=d},
YW:function YW(d){this.a=d},
ayY:function ayY(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Z2:function Z2(d,e){this.c=d
this.a=e},
az3:function az3(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d3p:function d3p(d){this.a=d},
d3o:function d3o(d){this.a=d},
bde:function bde(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hGa(){var x,w=$.py(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.h2(v)},
Nl(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Nl)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Nl)
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
return A.i($async$Nl,w)},
a6V(d){return B.hGb(d)},
hGb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6V)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6V)
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
return A.i($async$a6V,w)},
UU(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nl(),$async$UU)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.T(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6V(s),$async$UU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UU,w)},
UV(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UV)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.S(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c8D(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hGa()
t=A.S(u).k("M<1,a5<m,aD>>")
r=A.C(new A.M(u,new B.c8E(s),t),t.k("ak.E"))
x=6
return A.b(B.Nl(),$async$UV)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6V(q),$async$UV)
case 7:x=8
return A.b(B.a6W(r,u,g,s),$async$UV)
case 8:v=new A.boO(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UV,w)},
ap7(d){var x=0,w=A.j(y.y),v,u,t
var $async$ap7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nl(),$async$ap7)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap7,w)},
c8F(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c8F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nl(),$async$c8F)
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
return A.i($async$c8F,w)},
a6W(d,e,f,g){return B.hGc(d,e,f,g)},
hGc(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6W=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ap5("media",r,new B.c8C(s,e,g),f,q),$async$a6W)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UU(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6W)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UU(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6W)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UU(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6W)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6W,w)},
Ew(d,e,f){return B.hGd(d,e,f)},
hGd(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ew=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ew)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ap7(b3),$async$Ew)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kv,null,g),$async$Ew)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ap7(b3),$async$Ew)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nl(),$async$Ew)
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p_(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aai(a8.a,b0,"media",a8.d,a9).CC(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZv(k,n,o,s,b7),$async$Ew)
case 17:j=c0
if(j!=null){J.ce(p,j);++q
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p_(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aai(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ew)
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
a0.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6V(e),$async$Ew)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ew,w)},
c8D:function c8D(){},
c8E:function c8E(d){this.a=d},
c8C:function c8C(d,e,f){this.a=d
this.b=e
this.c=f},
aQd(){var x=0,w=A.j(y.H),v,u
var $async$aQd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hR8=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aQd)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aQd)
case 3:u=$.h0X
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aQd)
case 4:$.h0X=$.hZE=$.hZF=null
return A.h(null,w)}})
return A.i($async$aQd,w)},
fsa(d){var x=0,w=A.j(y.H),v,u
var $async$fsa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6p){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fsb(new A.bY(u,y.aY))
x=3
return A.b(u.ir(0,C.hO,new B.fsc()),$async$fsa)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fsa,w)},
hZC(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hFV(x):x},
h10(d){var x=0,w=A.j(y.T),v,u,t
var $async$h10=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.ap9(u)
x=1
break}v=B.fWP(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h10,w)},
h1_(d){var x=0,w=A.j(y.T),v,u,t
var $async$h1_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.apa(u)
x=1
break}v=B.fWP(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1_,w)},
fKg(d){var x=0,w=A.j(y.T),v
var $async$fKg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apa(d),$async$fKg)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKg,w)},
bB0(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bB0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h1_(d),$async$bB0)
case 3:q=f
if(q==null){x=1
break}t=C.S.aK(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB0,w)},
fgq(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fgq=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UO(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BE(d.anR(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgq,w)},
Gq(d,e,f){return B.i11(d,e,f)},
i11(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gq=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h10(a1),$async$Gq)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aK(0,e,null)
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
return A.b($.hti().aDP(D.dpl,null),$async$Gq)
case 4:l=d.h0X=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axO(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fsI(f,k,new B.fsJ(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7k(0,new B.X3(r,"offer")),$async$Gq)
case 5:d=l
x=7
return A.b(l.akF(0),$async$Gq)
case 7:x=6
return A.b(d.a7c(0,a4),$async$Gq)
case 6:x=8
return A.b(B.fsa(l),$async$Gq)
case 8:x=9
return A.b(l.aoB(),$async$Gq)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hZC(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apb(m,h),$async$Gq)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hc_(h)
case 11:v=new A.bo5(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gq,w)},
fsb:function fsb(d){this.a=d},
fsc:function fsc(){},
fsJ:function fsJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsI:function fsI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fsH:function fsH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i2V(d){switch(d){case"new":return D.eiE
case"checking":return D.eiF
case"connected":return D.eiH
case"completed":return D.eiG
case"failed":return D.eiJ
case"disconnected":return D.eiK
case"closed":return D.aMr
case"count":return D.eiI}return D.aMr},
i2W(d){switch(d){case"new":return D.aMs
case"gathering":return D.eiL
case"complete":return D.a6p}return D.aMs},
idb(d){switch(d){case"stable":return D.eiM
case"have-local-offer":return D.eiN
case"have-local-pranswer":return D.eiP
case"have-remote-offer":return D.eiO
case"have-remote-pranswer":return D.eiQ
case"closed":return D.aMy}return D.aMy},
ibp(d){switch(d){case"new":return D.aMv
case"connecting":return D.aMw
case"connected":return D.aMx
case"closed":return D.a6q
case"disconnected":return D.aMu
case"failed":return D.aMt}return D.a6q},
a9e:function a9e(d,e){this.a=d
this.b=e},
Om:function Om(d,e){this.a=d
this.b=e},
X2:function X2(d,e){this.a=d
this.b=e},
Ol:function Ol(d,e){this.a=d
this.b=e},
F_:function F_(d,e){this.a=d
this.b=e},
cjA:function cjA(){},
fYz(d){var x=new B.EZ()
x.a=d
x.b=!0
return x},
EZ:function EZ(){this.b=this.a=$},
a9d:function a9d(){},
atq:function atq(){},
X3:function X3(d,e){this.a=d
this.b=e},
fWL(){var x=0,w=A.j(y.H)
var $async$fWL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fWL,w)},
fWO(d,e,f){var x=0,w=A.j(y.T),v
var $async$fWO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mG))){v=null
x=1
break}v=B.fKw(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWO,w)},
hc_(d){var x,w=F.ac8.a44(C.dK.aL(d),null)
if(w.length===0){x=C.dK.aL(d)
return C.cS.gcw().aL(x)}return C.cS.gcw().aL(w)},
hFU(d){var x,w,v=C.cI.aL(d)
try{x=C.cg.cB(0,F.ac7.bcB(v,!1))
return x}catch(w){x=C.cg.cB(0,v)
return x}},
fWP(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hFU(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.cg.cB(0,C.cI.aL(x))
return v}catch(u){return x}}return null},
hFV(d){var x,w,v,u,t,s=A.a([],y.s)
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
hFW(){var x,w=$.py(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.h2(v)},
aZB(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZB)
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
return A.i($async$aZB,w)},
c8l(d,e){return B.hFX(d,e)},
hFX(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c8l=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c8l)
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
return A.i($async$c8l,w)},
aZE(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZB(d),$async$aZE)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZE,w)},
aZD(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hFW()
r=C.a.i(f)
t=C.dK.aL(s)
x=3
return A.b(B.c8l(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcw().aL(t),"usesRemaining",999999,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZD)
case 3:if(!h){v=null
x=1
break}v=new A.a03("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZD,w)},
aZC(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZB(o),$async$aZC)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cB(0,C.cI.aL(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZC,w)},
c8m(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c8m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBX("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c8m)
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
return A.i($async$c8m,w)},
aZF(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ip(),$async$aZF)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZF,w)},
ap2(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ap2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap2)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZF(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap2,w)},
ap0(d,e){var x=0,w=A.j(y.H)
var $async$ap0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap0)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ap0)
case 2:return A.h(null,w)}})
return A.i($async$ap0,w)},
a6N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6N)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ip(),$async$a6N)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6M(s),$async$a6N)
case 5:x=6
return A.b(B.ap0(f,u),$async$a6N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
a6O(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6O=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6O)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ip(),$async$a6O)
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
return A.b(B.ap0(g,q),$async$a6O)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6M(u),$async$a6O)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6O,w)},
a6P(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6P=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6P)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ip(),$async$a6P)
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
s=B.aZy(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a6P)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.T(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6P)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
c8n(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c8n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c8n)
case 7:s=f
p=A.u(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aK(0,r,null)
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
return A.i($async$c8n,w)},
Iq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Iq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8n(d),$async$Iq)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZF(t),$async$Iq)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ap1(d),$async$Iq)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZy(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ap1(d),$async$Iq)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iq,w)},
ap1(d){var x=0,w=A.j(y.H)
var $async$ap1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap1)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ap1)
case 2:return A.h(null,w)}})
return A.i($async$ap1,w)},
aZG(){var x,w=$.py(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.h2(v)},
a6Q(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fWQ(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c8q(d){return B.hFZ(d)},
hFZ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c8q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6Q(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c8q)
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
return A.i($async$c8q,w)},
ap4(d,e){return B.hG_(d,e)},
hG_(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ap4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6Q(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$ap4)
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
return A.i($async$ap4,w)},
c8s(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8s=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6Q(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ap4(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c8s)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8s,w)},
c8r(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6Q(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ap4(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c8r)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8r,w)},
c8t(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c8t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6Q(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ap4(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8t,w)},
c8u(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c8u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fWQ(d)){v=null
x=1
break}x=3
return A.b(B.c8q(d),$async$c8u)
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
return A.i($async$c8u,w)},
a6X(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6X=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6X)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6X)
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
return A.i($async$a6X,w)},
ap8(d){return B.hGe(d)},
hGe(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ap8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$ap8)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$ap8)
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
return A.i($async$ap8,w)},
ap9(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ap9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ap9)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6X(),$async$ap9)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cB(0,C.cI.aL(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.T(Date.now(),0,!1).a6().ac())
J.aG(s,j,o)
x=9
return A.b(B.ap8(s),$async$ap9)
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
return A.i($async$ap9,w)},
apb(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$apb)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6X(),$async$apb)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aL(C.a.i(e))
q.n(0,"answer",C.cS.gcw().aL(r))
q.n(0,"answerAt",new A.T(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.ap8(u),$async$apb)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apb,w)},
apa(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$apa)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6X(),$async$apa)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cB(0,C.cI.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apa,w)},
ao5(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ao5=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.m2(e),$async$ao5)
case 3:r=g
u=4
x=7
return A.b(r.hw(C.h0),$async$ao5)
case 7:q=g
o=q
o=o==null?null:J.eX(J.vq(o))
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
return A.i($async$ao5,w)},
i9o(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aW(C.o.u(w),5,"0")
return v},
fIM(d){return B.i9q(d)},
i9q(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fIM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").KJ(d,3600),$async$fIM)
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
return A.i($async$fIM,w)},
CX(d,e,f,g,h,i){var x=null
return B.i9n(d,e,f,g,h,i)},
i9n(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CX=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hc2(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fWS(r),$async$CX)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fIM(o),$async$CX)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6R(r),$async$CX)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPG)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LI(A.a([],g))
x=15
return A.b(d.f_(0,A.auf("GET",A.cE(n,0,null))).d8(0,C.Fp),$async$CX)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6R(r),$async$CX)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kh(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CX)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZI(r,k),$async$CX)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CX)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.UO(r)
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
return A.b(B.a6R(r),$async$CX)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CX,w)},
aPX(d){return B.i9p(d)},
i9p(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").W(0,d),$async$aPX)
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
return A.i($async$aPX,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[145]
O=c[40]
F=c[238]
I=c[137]
P=c[218]
E=c[211]
G=c[87]
Q=c[183]
R=c[138]
S=c[216]
K=c[242]
L=c[247]
B=a.updateHolder(c[21],B)
D=c[245]
T=c[182]
M=c[201]
U=c[65]
V=c[248]
W=c[71]
X=c[55]
N=c[86]
Y=c[246]
B.cjB.prototype={
aDP(d,e){return this.cK4(d,e)},
cK4(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.km(A.cz(t)))
t=J.k(u)
v=B.hKP(C.cS.gcw().aL(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDP,w)}}
B.b3P.prototype={
by4(d){var x=this,w=x.w
w.onclose=A.ho(new B.cjw(x))
w.onopen=A.ho(new B.cjx(x))
w.onmessage=A.ho(new B.cjy(x))
w.onbufferedamountlow=A.ho(new B.cjz(x))},
gdc(d){return this.x},
agX(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EZ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fYz(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$agX)
case 8:v=t.fYz(s.anj(f,0,null))
x=1
break
case 7:case 4:v=B.fYz(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agX,w)}}
B.b3Q.prototype={
by5(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.cjC(x)))
w.addEventListener("icecandidate",A.ho(new B.cjD(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.cjE(x)))
w.onicegatheringstatechange=A.ho(new B.cjF(x))
w.addEventListener("signalingstatechange",A.ho(new B.cjG(x)))
if(!$.h4I())w.addEventListener("connectionstatechange",A.ho(new B.cjH(x)))
w.addEventListener("negotiationneeded",A.ho(new B.cjI(x)))
w.addEventListener("track",A.ho(new B.cjJ(x)))},
akF(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.km(A.cz(A.U(y.N,y.z)))),y.aQ),$async$akF)
case 3:t=f
v=new B.X3(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akF,w)},
a7c(d,e){return this.bnu(0,e)},
bnu(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7c)
case 2:return A.h(null,w)}})
return A.i($async$a7c,w)},
a7k(d,e){return this.bnK(0,e)},
bnK(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7k)
case 2:return A.h(null,w)}})
return A.i($async$a7k,w)},
aoB(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aoB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.X3(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoB,w)},
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
B.ac3.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YZ.prototype={
T(){return new B.az0()},
gde(){return this.c}}
B.az0.prototype={
Z(){this.a1()
this.adG()},
adG(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZz(u.e,u.c),$async$adG)
case 2:t=e
if(v.c!=null)v.m(new B.d2Y(v,t))
return A.h(null,w)}})
return A.i($async$adG,w)},
Q1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoY(t.e,t.c,!1),$async$Q1)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.f_Z)
x=1
break}x=4
return A.b(B.a6L(u.a.c,"individual"),$async$Q1)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5F(A.ea(new B.d2V(u),!1,null,y.H)),$async$Q1)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Q1,w)},
J5(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fqh(o),$async$J5)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6P(o.e,r,s,q),$async$J5)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.eY1)
x=1
break}x=5
return A.b(B.a6L(u.a.c,"member"),$async$J5)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5F(A.ea(new B.d2X(u),!1,null,y.H)),$async$J5)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J5,w)},
xX(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6K(t.e,o,t.f,t.r,t.w,s),$async$xX)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6L(u.a.c,"org_owner"),$async$xX)
case 4:x=5
return A.b(B.ap2(u.a.c),$async$xX)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fqM(o),$async$xX)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6N(s,t,o,q.c),$async$xX)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.eXZ)
x=1
break}x=10
return A.b(B.ap2(u.a.c),$async$xX)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5F(A.ea(new B.d2W(u),!1,null,y.H)),$async$xX)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xX,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.ji:C.pM,q=B.fWN(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fQ,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fiQ,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h7,t,t,t),C.aB,D.fBT,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZG,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lF(new B.d3_(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acw(C.eT,C.az9,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcdL(),t),C.ac],v))
p.push(new B.acw(C.oW,C.a2h,"Team Member","Sign in with your organization access code + password",u.gceC(),t))
p.push(C.ac)
p.push(new B.acw(C.alC,C.a3P,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gce7(),t))
return A.c6(t,r,A.bm(!0,A.cd(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiS,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acw.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ep,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.os,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BK,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aBy.prototype={}
B.aEK.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oE(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gapf(){var x=this.d
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
bc3(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cIz(d){return this.bc3(null,d)},
aDA(d){return this.bc3(d,null)}}
B.UI.prototype={
T(){return new B.aCV(new A.cs(null,y.A))},
gde(){return this.c}}
B.aCV.prototype={
Z(){this.a1()
this.adH()},
adH(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BD(u.a.c),$async$adH)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dPK(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adH,w)},
adI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fN(new A.fF(s)),$async$adI)
case 3:t=u.c
if(t!=null)t.J(y.q).f.S(D.f0T)
case 1:return A.h(v,w)}})
return A.i($async$adI,w)},
Zn(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zn=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ao5(s.d,4),$async$Zn)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_my_code_"+m+".png"),$async$Zn)
case 8:q=e
o=s.c
if(o!=null)o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zn,w)},
ahp(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9S("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahp)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahp,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.ji:C.pM,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lJ
else if(q.e==null)x=A.av(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2J,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.ais,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mO,w,C.kG,new A.ex(A.p(p,A.pT(p,p,!1,B.hFQ(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kG,A.B(A.a([A.E(A.eA(N.C7,C.Uc,q.gc6M(),p),1),C.at,A.E(A.dn(C.yJ,C.a8L,q.gc6N(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.eA(M.a18,D.fxF,q.gctq(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MK,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.UM.prototype={
T(){return new B.aCY(new A.as(C.as,$.aw()),A.jT(!0,null,!0,!0,null,null,!1))}}
B.aCY.prototype={
Z(){var x,w
this.a1()
x=this.a.e
w=B.Io(x==null?"":x)
if(w!=null)this.d.saY(0,w)},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Io(u.d.a.a)
if(t==null){u.m(new B.dQT(u))
x=1
break}u.m(new B.dQU(u))
s=u.a
r=s.c
x=3
return A.b(B.a6J(s.d,new B.dQV(u),t,r),$async$Zo)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dQW(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zo,w)},
a1z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dQX(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rs(r.a.c,q),$async$a1z)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dQY(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahw(p,m,l,j,k),$async$a1z)
case 8:o=e
if(r.c!=null)r.m(new B.dQZ(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dR_(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dR0(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1z,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aeU:D.acH,h=j?D.agl:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.adW:C.aL
i=[i,e,h,g,f,j?C.fd:C.bT]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bNi,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ep,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2J,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ul(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biz()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.ME,k,k,"",k,!0,new A.b4(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.az(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dR1(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m6,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lm(l.a.d,4)
m=A.C(new A.M(m,new B.dR2(x,new A.aFY(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lQ,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ek,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eWy)
else q.push(A.X(C.lq,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bd,new A.o(u,k,s,t,k,k,C.n),C.iH,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bvN,k,k,C.ah),1)
u=l.f?k:l.gctr()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eA(M.a18,D.fyG,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.Y),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6O()
t=A.bn(C.aE,k,k,0,C.c,k,C.ng,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c6(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mG(new B.dR3(),A.x(A.a([e,new A.D(D.bvi,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rU:D.fx3,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.Yy,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biz.prototype={
oA(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hi(C.bw,v.length),C.aO)}}
B.UJ.prototype={
T(){return new B.aCW()}}
B.aCW.prototype={
Z(){var x,w,v,u=this
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
x=v.U$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.U$=x
v.P$=0
v=w.f
v===$&&A.c()
v.U$=x
v.P$=0
w.a2()},
adJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dPL(r))
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
return A.b(B.a6O(p,m,n,o,C.a.i(l).length===0?null:l),$async$adJ)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.S(D.f0u)
s=[1]
x=4
break}p.J(y.q).f.S(D.f_7)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dPM(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adJ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.ji:C.pM,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fpG,s,s,s,1,s,!0),p=A.p(s,D.bnE,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GR,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bUe,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bU9,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUp,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc6P()
u=A.bn(C.aE,s,s,s,s,C.fR,s,s,s,s,s,s)
return A.c6(q,r,A.cd(A.x(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rU:C.aSn,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abL.prototype={}
B.bv8.prototype={
a4k(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.anR()))
x=3
return A.b(B.R_(t,s),$async$a4k)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4k,w)},
gde(){return this.a}}
B.Nj.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YY.prototype={
T(){return new B.az_(new A.as(C.as,$.aw()),A.jT(!0,null,!0,!0,null,null,!1))}}
B.az_.prototype={
Z(){this.a1()
$.aW.x1$.push(new B.d2U(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6V(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a10(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.ji:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.aof,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cC,16)],n),C.ap2,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ul(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buN()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.FB,w,w,"",w,!0,new A.b4(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.aZO),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2S(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m6,w,w,w,w)
f=f[1]
f=A.E(A.dW(C.nF,new B.d2T(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.Y),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Kx,A.c_(new A.D(C.xV,A.x(A.a([l,C.aR,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c_(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ecz,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6U(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.Ov,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MM,C.d1,w,w,w)}}
B.buN.prototype={
oA(d,e){return e.akA(e.a.toUpperCase())}}
B.UK.prototype={
T(){return new B.aCX(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aCX.prototype={
Z(){var x=this
x.a1()
x.tL()
x.w=A.dv(C.jo,new B.dQR(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UT()
this.a2()},
a0r(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ni(u.a.c),$async$a0r)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AF(u.a.c),$async$a0r)
case 4:u.m(new s.dQe(u,e))
u.i8("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0r,w)},
tL(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ni(u.a.c),$async$tL)
case 3:t=e
x=4
return A.b(B.AF(u.a.c),$async$tL)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dQf(u,s))
if(t>0)u.i8("Received "+A.u(t)+" file(s) via My Code.")
u.Nr(u.d)
B.BD(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tL,w)},
Nr(d){return this.bC3(d)},
bC3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6T(r,u.a.c),$async$Nr)
case 8:p=f
if(u.c==null){x=1
break}new B.dPO(u,r,p).$0()
u.c.eg()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mG))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UR(r,u.a.c),$async$Nr)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AF(u.a.c),$async$Nr)
case 12:u.m(new o.dPP(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nr,w)},
NO(d){return this.bIn(d)},
bIn(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6T(d,u.a.c),$async$NO)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dPU(u,d,t))
x=6
return A.b(A.fN(new A.fF(t)),$async$NO)
case 6:u.i8("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fN(new A.fF(r.toUpperCase())),$async$NO)
case 7:u.i8("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NO,w)},
i8(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.S(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tM(d,e){return this.cE3(d,e)},
cE3(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dQF(r,e))
u=3
x=6
return A.b(d.$0(),$async$tM)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dQG(r))
$.eU.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tM,w)},
gaUU(){var x=this.a
return x.f||x.r||x.w},
I1(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUU()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c8j(s,n,r,q,o,t),$async$I1)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i8("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fCf(o,u.a.c),$async$I1)
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
return A.b(B.CZ(s,o,r,q,n,t),$async$I1)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I1,w)},
a_v(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap2(u.a.c),$async$a_v)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i8("No organization portal found.")
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
return A.b(A.a6(t,!1).cm(A.ea(new B.dQb(u,r,q),!1,null,y.H)),$async$a_v)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_v,w)},
a0C(d){return this.cmW(d)},
cmV(){return this.a0C(1)},
cmW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUU()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ap_(u.a.c),$async$a0C)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0C,w)},
abG(d,e,f){return this.bZ4(d,e,f)},
bZ4(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8(e)
x=1
break}x=3
return A.b(u.tM(new B.dQ8(u,d,null,e,f),"Uploading\u2026"),$async$abG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abG,w)},
bCb(){B.hqH(!1,new B.dPS(this))
return},
crZ(){this.m(new B.dQj(this))},
ay6(){var x=0,w=A.j(y.H),v=this
var $async$ay6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bCb()
return A.h(null,w)}})
return A.i($async$ay6,w)},
abC(){var x=0,w=A.j(y.H),v=this
var $async$abC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dPY(v),"Importing\u2026"),$async$abC)
case 2:return A.h(null,w)}})
return A.i($async$abC,w)},
S3(d){return this.cDs(d)},
cDs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mG)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.ea(new B.dQC(u,d),!1,null,y.H)),$async$S3)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qr)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cm(A.ea(new B.dQD(u,d),!1,null,y.H)),$async$S3)
case 8:x=1
break
case 7:x=u.bZM(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cm(A.ea(new B.dQE(u,d),!1,null,y.H)),$async$S3)
case 11:x=1
break
case 10:u.i8("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S3,w)},
bZM(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oE(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cHk,C.a.b5(x,w+1).toLowerCase())},
af9(d){return this.cdP(d)},
cdP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mG)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.ea(new B.dQ9(u,d),!1,null,y.H)),$async$af9)
case 5:x=1
break
case 4:u.m(new B.dQa(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af9,w)},
Rp(d){return this.cuV(d)},
cuV(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pa(t,s.c,s.f),$async$Rp)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dQv(u,d),"Preparing QR\u2026"),$async$Rp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rp,w)},
ahP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQw(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dQx(q),s),s.k("J.E"))
if(r.length===0){u.i8("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rp(r),$async$ahP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahP,w)},
ahI(d){return this.cus(d)},
cus(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a10(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dQp(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahI)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S3(d)
break
case"qr":u.Rp(A.a([d],y.r))
break
case"send_my_code":u.cer(A.a([d],y.r))
break
case"save":u.ah3(d)
break
case"delete":u.IR(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahI,w)},
Xi(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPV(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPW(q),s),s.k("J.E"))
if(r.length===0){u.i8("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pa(t,s.c,s.f),$async$Xi)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dPX(u,r),"Preparing file\u2026"),$async$Xi)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xi,w)},
agf(d){return this.clg(d)},
clg(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hrp(d,!1),$async$agf)
case 3:s=f
r=s==null
q=B.a6Q(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i8("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agf,w)},
aff(){var x=0,w=A.j(y.H),v=this,u
var $async$aff=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fJR(u,v.a.c),$async$aff)
case 2:return A.h(null,w)}})
return A.i($async$aff,w)},
bCa(){B.hqH(!1,new B.dPR(this,null))
return},
J4(d,e){return this.ces(d,e)},
b01(d){return this.J4(null,d)},
cer(d){return this.J4(d,null)},
ces(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dQc(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xc.c7().ana(!0,C.a_o,!1),$async$J4)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tM(new B.dQd(l,s,r),"Preparing\u2026"),$async$J4)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
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
return A.b(B.bD5(p,l,e,s.a.c),$async$J4)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J4,w)},
Ii(d){return this.bYS(d)},
bYS(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hFP(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b01(t),$async$Ii)
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
return A.b(u.tM(new B.dQ6(u,d),"Receiving video\u2026"),$async$Ii)
case 11:x=1
break
case 10:x=12
return A.b(u.tM(new B.dQ7(u,d),"Receiving\u2026"),$async$Ii)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ii,w)},
Ea(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ea=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CT()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agf(t),$async$Ea)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ii(s),$async$Ea)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.ea(new B.dQh(u),!1,null,y.N)),$async$Ea)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tL(),$async$Ea)
case 10:x=1
break
case 9:x=11
return A.b(u.Ii(C.a.i(r)),$async$Ea)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ea,w)},
ah3(d){return this.cqx(d)},
cqx(d){var x=0,w=A.j(y.H),v=this
var $async$ah3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dQg(v,d),"Saving\u2026"),$async$ah3)
case 2:return A.h(null,w)}})
return A.i($async$ah3,w)},
IR(d){return this.bKH(d)},
bKH(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l8(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IR)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c8m(t),$async$IR)
case 6:case 5:s=d.a
x=7
return A.b(B.Ev(u.a.c,s),$async$IR)
case 7:u.r.W(0,s)
x=8
return A.b(u.tL(),$async$IR)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IR,w)},
ahV(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a10(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dQB(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahV)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aff()
break
case"import":u.abC()
break}case 1:return A.h(v,w)}})
return A.i($async$ahV,w)},
c6S(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mG))return C.qb
if(C.a.a0(x,"image/")||d.my(D.Qr))return C.u6
if(C.a.t(x,"pdf"))return E.O0
return D.am4},
B(d){var x,w,v=this,u=null,t=B.a10(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GJ,u,u,u,new B.dQM(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bNP,u,u,u,v.e?u:v.gce8(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcrY()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bI8:E.amt,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a15,u,u,u,v.e?u:v.gc6T(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o9,u,u,u,v.e?u:v.gb19(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bPx,u,u,u,v.e?u:new B.dQN(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lF(new B.dQO(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m6(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayX(C.ju,s,!0,t,w?u:v.gcuW(),u),1)
x.push(new A.D(D.bu4,A.mG(new B.dQP(),A.B(A.a([s,C.at,A.E(new B.ayX(C.vT,"Export",!1,t,w?u:v.gbOn(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iI,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdd(t,v.e?u:v.gb19(),u)
else s=A.kc(!0,u,u,new B.dQQ(v,t),s,u,D.btX,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayX.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vA,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vA,t,new A.b7(s,C.Y),new A.az(v,1,C.q,-1),t,t,t,t)
return A.eA(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bdd.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mG(new B.d2Q(),new A.D(E.Zs,A.x(A.a([A.mG(new B.d2R(),A.p(x,A.X(C.yf,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.az,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ey,C.ii,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o9,D.fCb,this.d,A.bn(C.aE,x,x,x,C.c,x,C.Zn,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.B8,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ac4.prototype={
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
if(!o||i.my(D.mG))p=D.deN
else{p=C.a.a0(p,"image/")||i.my(D.Qr)
n=y.O
p=p?A.a([C.cP,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapf()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mG))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mG)))l.push(A.fUv(C.aE,!1,j,j,j,!1,j,j,new B.d3c(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.o7,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mG(new B.d3d(),new A.D(C.e6,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.YV,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ag),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.Z_.prototype={
T(){return new B.az1()},
gde(){return this.c}}
B.az1.prototype={
Z(){this.a1()
this.xN()},
q(){B.hG3(this.e)
this.a2()},
xN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rs(o.c,o.d),$async$xN)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hG6(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hG5(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d39(s))
x=1
break}s.m(new B.d3a(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d3b(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xN,w)},
a1y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rs(t.c,t.d),$async$a1y)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.eYy)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahw(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1y)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1y,w)},
bYL(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kr(u,C.A,v,new B.d37(w,t),C.fZ,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gan(t))x=A.fP(t,C.A,v,new B.d38(w),C.fZ,C.dv,!0,v,!1,v,v)
else return C.bI
return A.uu(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a10(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.C8,u,u,u,v.gb5_(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Em
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.C8,D.fl6,v.gb5_(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bYL()}return A.c6(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YX.prototype={
T(){return new B.ayZ(A.ail(),C.bx,C.bx)},
gde(){return this.c}}
B.ayZ.prototype={
Z(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fw(w,A.a3(w).k("fw<1>")).im(new B.d2N(v))
x.gcRs().im(new B.d2O(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a3(x).k("fw<1>"))}if(x==null)x=C.b4X
x.im(new B.d2P(v))
v.xN()},
xN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rs(p.c,p.d),$async$xN)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d2G(s))
x=1
break}x=8
return A.b(s.d.C5(0,new A.a35(r,s.a.d.c)),$async$xN)
case 8:if(s.c==null){x=1
break}s.m(new B.d2H(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d2I(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xN,w)},
Zp(){var x=0,w=A.j(y.H),v=this,u
var $async$Zp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$Zp)
case 5:x=3
break
case 4:x=6
return A.b(u.iq(0),$async$Zp)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zp,w)},
aSL(d){var x=d.a
return C.a.aW(C.o.u(C.o.am(x,6e7)%60),2,"0")+":"+C.a.aW(C.o.u(C.o.am(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a10(d),m=C.o.am(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Em
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJ7,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Ov,C.n),o,88,o,o,o,o,o,88)
t=A.l2(C.aE,o,o,m,0,new B.d2J(p),C.o.D(C.o.am(p.w.a,1000),0,m))
x=A.d(p.aSL(p.w)+" / "+p.aSL(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eV0,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yp:C.iL,o,o,o,o,o)
x=A.x(A.a([u,C.kG,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6W(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c6(v,w,A.av(new A.D(C.rd,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pw.prototype={
T(){return new B.az4()},
gde(){return this.c}}
B.az4.prototype={
Z(){this.a1()
this.Po()},
Po(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Po=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fWO(o.c,o.d,new B.d3q(s)),$async$Po)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d3r(s))
x=1
break}s.e=r
q=O.i1S(r)
if(q==null){s.m(new B.d3s(s))
x=1
break}s.d=q
q.aR(0,s.gb_Q())
x=8
return A.b(q.il(0).d8(0,C.r9),$async$Po)
case 8:if(s.c==null){x=1
break}s.m(new B.d3t(s))
x=9
return A.b(q.pV(0),$async$Po)
case 9:q.tm(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d3u(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Po,w)},
ccq(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d3v(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CR(0,x.gb_Q())
w=x.d
if(w!=null)w.q()
B.ibI(x.e)
x.a2()},
adM(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZH(u.c,u.d),$async$adM)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adM,w)},
B(d){var x,w,v,u=this,t=null,s=B.a10(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p2,t,t,t,u.gc6Q(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Em
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahP(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fL(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A9(s,t),A.aC(t,A.D9(A.p(t,A.X(q?I.yp:C.iL,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bd,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d3x(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c6(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Z1.prototype={
T(){return new B.az2(new A.cs(null,y.A))}}
B.az2.prototype={
gcDM(){var x,w,v=this.a
if(v.e!==D.RO)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDq(){var x,w,v=this.a
if(v.e!==D.zl)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a1()
x=v.gcDM()
if(x!=null){v.Qq(x)
v.e=A.dv(R.Ft,new B.d3m(v,x))}w=v.gcDq()
if(w!=null){v.Qp(w)
v.f=A.dv(C.fX,new B.d3n(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qp(d){return this.cjs(d)},
cjs(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ap7(d),$async$Qp)
case 3:t=f
x=4
return A.b(B.c8F(d),$async$Qp)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d3e(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qp,w)},
Qq(d){return this.cjt(d)},
cjt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fKg(d),$async$Qq)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bB0(t),$async$Qq)
case 4:if(u.c==null){x=1
break}u.m(new B.d3f(u))
u.c.J(y.q).f.S(D.aPh)
case 1:return A.h(v,w)}})
return A.i($async$Qq,w)},
gc2O(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6R(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1k(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CT()){t=u.c
if(t!=null)t.J(y.q).f.S(D.f0E)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cm(A.ea(new B.d3g(),!1,null,y.N)),$async$a1k)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bB0(s),$async$a1k)
case 4:t=u.c
if(t!=null)t.J(y.q).f.S(D.aPh)
case 1:return A.h(v,w)}})
return A.i($async$a1k,w)},
a9w(d){return this.bIo(d)},
bIo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fN(new A.fF(C.d.aG(t,", "))),$async$a9w)
case 3:if(d.e!=null){t=d.J(y.q).f
t.S(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9w,w)},
adK(d){return this.bI8(d)},
bI8(d){var x=0,w=A.j(y.H),v=this
var $async$adK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fN(new A.fF(v.a.c)),$async$adK)
case 2:if(d.e!=null)d.J(y.q).f.S(D.eZ1)
return A.h(null,w)}})
return A.i($async$adK,w)},
a1f(d){return this.cqz(d)},
cqz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ao5(s.d,4),$async$a1f)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_doc_share_qr.png"),$async$a1f)
case 8:q=f
if(d.e!=null)d.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1f,w)},
gaW1(){var x,w=this.a
if(w.e!==D.HU)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
a9t(d){return this.bIh(d)},
bIh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaW1()
if(t==null){x=1
break}x=3
return A.b(A.fN(new A.fF(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9t)
case 3:if(d.e!=null)d.J(y.q).f.S(D.f_E)
case 1:return A.h(v,w)}})
return A.i($async$a9t,w)},
adL(){var x=0,w=A.j(y.H),v=this,u
var $async$adL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UT(),$async$adL)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adL,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a10(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HU&&i!==D.RO&&i!==D.zl
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HU||t===D.RO||t===D.zl?l:A.aH(l,l,l,l,C.l3,l,l,l,m.gaZ_(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pT(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc2O(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HU){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mt,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc6R(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bTi,D.fui,new B.d3h(m,d),l)],p))}if(m.a.e===D.HU&&m.gaW1()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bPR,D.fr2,new B.d3i(m,d),l)],p))
if(m.a.e===D.zl){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ep:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mt,l,l,l)],p))}if(m.a.e===D.RO){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ep:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mt,l,l,l),C.ac,A.dn(D.bLB,D.fxm,m.gcqX(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.op(i,A.c6(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eA(N.C7,C.Uc,new B.d3j(m,d),l),1),C.at,A.E(A.dn(C.yJ,C.a8L,new B.d3k(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zV,m.gaZ_(),A.bn(C.aK,l,l,l,l,C.fR,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d3l(),y.C)}}
B.ac2.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cd(A.x(A.a([w,C.aR,A.p(x,A.pT(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.em(A.a([A.bG(C.zW,new B.d2F(d),x)],u),x,x,C.mX,v,x,x,x,x,D.fk7,x)}}
B.YW.prototype={
T(){return new B.ayY(A.zf(C.xC,C.nM,C.ul))}}
B.ayY.prototype={
q(){this.d.q()
this.a2()},
awJ(d){var x,w,v,u,t
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
return A.c6(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.frw,x,x,x,1,x,!0),C.w,A.ze(this.d,C.bV,this.gawI()),x,!1,!1,x,x)}}
B.Z2.prototype={
T(){return new B.az3(A.zf(C.xC,C.nM,C.ul))},
gde(){return this.c}}
B.az3.prototype={
bZO(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afC(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.S0("text/plain"),$async$afC)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.S(D.f0y)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afC,w)},
aaj(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aaj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hrp(p,!0),$async$aaj)
case 3:t=e
p=t==null
s=B.a6Q(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.S(D.eY8)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aaj,w)},
q(){this.d.q()
this.a2()},
awJ(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZO(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.anm,v,v,v,w.gbNU(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a1c,v,v,v,w.gcgR(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.rj:P.NM,v,v,v,v,v),v,v,v,new B.d3p(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fyd,v,v,v,1,v,!0)
u=A.ze(w.d,C.bV,w.gawI())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eik],s),v),v,!1,!1,v,v)}}
B.bde.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oO
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oO:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Zy,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.eA,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a9e.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Om.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.X2.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Ol.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.F_.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cjA.prototype={}
B.EZ.prototype={}
B.a9d.prototype={}
B.atq.prototype={}
B.X3.prototype={}
var z=a.updateTypes(["aA<~>()","R(jn)","m(jn)","UK(Y)","~()","YZ(Y)","G(G,jn)","Pw(Y)","~(m0)","cr(EZ)","aA<jn?>(@)","UI(Y)","UM(Y)","D(jn)","jn(@)","a5<m,@>(jn)","YY(Y)","UJ(Y)","Z_(Y)","YX(Y)","Z1(Y)","ac2(Y)","ai<jn>()","Z2(Y)","ac4(Y,G)","YW(Y)","a5<m,aD>(jn)","cr(X2)","cr(a9d)","aA<cr>(EZ)"])
B.cjw.prototype={
$1(d){var x=this.a
x.x=D.aMq
x.y.L(0,D.aMq)},
$S:68}
B.cjx.prototype={
$1(d){var x=this.a
x.x=D.aMp
x.y.L(0,D.aMp)},
$S:68}
B.cjy.prototype={
$1(d){var x=this.a
x.agX(A.aOF(d.data)).bC(new B.cjv(x),y.b)},
$S:68}
B.cjv.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cjz.prototype={
$1(d){},
$S:68}
B.cjC.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hKO(d.channel))},
$S:15}
B.cjD.prototype={
$1(d){},
$S:15}
B.cjE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i2V(w.iceConnectionState)
x.cx=w
if($.h4I())switch(w.a){case 0:x.cy=D.aMv
break
case 1:x.cy=D.aMw
break
case 3:x.cy=D.aMx
break
case 5:x.cy=D.aMt
break
case 6:x.cy=D.aMu
break
case 7:x.cy=D.a6q
break
default:break}},
$S:157}
B.cjF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i2W(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:157}
B.cjG.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.idb(w.signalingState)},
$S:157}
B.cjH.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ibp(w.connectionState)},
$S:157}
B.cjI.prototype={
$1(d){},
$S:157}
B.cjJ.prototype={
$1(d){},
$S:15}
B.fm6.prototype={
$1(d){var x=y.F.a(new A.rQ([],[]).pD(d.target.result,!1)),w=C.xD.t(x.objectStoreNames,"blobs")
if(!w)C.xz.KH(x,"blobs")},
$S:192}
B.fJF.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w5.ff(this.b)
$.eU.mt()
this.c.$1(d)},
$S:407}
B.fJH.prototype={
$1(d){return this.a.$1(B.hTH(this.b,this.c))},
$S:35}
B.fJG.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fJE.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fJU.prototype={
$1(d){var x=this
return B.hgV(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJV.prototype={
$1(d){var x=this
return B.hgV(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fok.prototype={
$1(d){var x=this
return B.c8g(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2Y.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2V.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c8g(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2X.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c8g(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2W.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c8g(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d3_.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bKc,x,x,x,new B.d2Z(d),x,x,x,x,x,x),A.E(A.EL(D.Qa,!0,x,C.a0j,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qa,x,g,C.ajc,0,e,f)},
$C:"$4",
$R:4,
$S:431}
B.d2Z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fqk.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eG,y.o).w,t=this.a,s=t?C.id:C.c,r=A.n(28),q=A.p(v,D.bnY,C.f,v,v,D.b0s,v,v,v,v,D.aj2,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOn,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FG,A.x(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anC,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dW(C.df,new B.fqi(d),v),1),C.at,A.E(A.bG(D.fq3,new B.fqj(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Ms,v,v,v,v),v)},
$S:62}
B.fqi.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fqj.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.S(D.eZg)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aBy(v,x))},
$S:0}
B.fqO.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eG,y.o).w,u=x.a,t=u?C.id:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bnO,C.f,w,w,D.b1V,w,w,w,w,D.aj2,w,w,1/0),new A.D(C.FG,A.x(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h0L(u,"Organization name",C.G7,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h0L(u,"Access code",C.nl,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h0L(u,"Member password",H.GE,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fyj,new B.fqN(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fR,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Ms,w,w,w,w),w)},
$S:62}
B.fqN.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.S(D.eZl)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEK(u,x,w))},
$S:0}
B.c87.prototype={
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
return A.b(A.vi(p,null).d8(0,C.Yx),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BE(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c8d.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c8e.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c8f.prototype={
$1(d){return d.b},
$S:z+2}
B.c89.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c8a.prototype={
$1(d){return d.b},
$S:z+2}
B.c88.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c8b.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c8c.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fJS.prototype={
$1(d){return new B.UI(this.a,null)},
$S:z+11}
B.fJT.prototype={
$1(d){return new B.UM(this.a,this.b,this.c,null)},
$S:z+12}
B.dPK.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dQT.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dQU.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dQV.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dQS(x,d))},
$S:2}
B.dQS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQW.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQX.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dQY.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dR_.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dR0.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dR3.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:105}
B.dR1.prototype={
$1(d){var x=this.a
return x.f?null:x.Zo()},
$S:2}
B.dR2.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qr))s=C.u6
else s=C.a.a0(s,"video/")||d.my(D.mG)?C.qb:D.am4
x=this.b.a
w=y.p
return new A.D(C.kW,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapf(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dPL.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dPM.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c8h.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:93}
B.c8i.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:93}
B.fKy.prototype={
$2(d,e){return e===this.a},
$S:281}
B.fji.prototype={
$1(d){return J.k(d)},
$S:17}
B.fox.prototype={
$1(d){var x=this.b
B.hRK(C.FV.ga6_(this.a)).bC(x.gcGS(x),y.H)},
$S:121}
B.foy.prototype={
$1(d){return this.a.d5(0,null)},
$S:121}
B.foz.prototype={
$0(){return null},
$S:11}
B.c8w.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.foA.prototype={
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
u=J.k(u==null?new A.T(Date.now(),0,!1).a6().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fsz.prototype={
$1(d){return d.ah()},
$S:z+15}
B.fmZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fn_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c8B.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mG)},
$S:z+1}
B.fOE.prototype={
$1(d){return new B.YY(this.a,null)},
$S:z+16}
B.d2U.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:8}
B.d2S.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d2T.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQR.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0r()},
$S:12}
B.dQe.prototype={
$0(){var x=J.bEa(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQf.prototype={
$0(){var x=J.bEa(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPO.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPN(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDA(this.c)}},
$S:0}
B.dPN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPP.prototype={
$0(){var x=J.bEa(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPU.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPT(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDA(this.c)}},
$S:0}
B.dPT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQF.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dQG.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dQb.prototype={
$1(d){return new B.UJ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dQ8.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I1(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UN(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tL(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0C(s.gM(t)),$async$$0)
case 8:case 7:r.i8(s.gan(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPS.prototype={
$1(d){this.a.abG(d,"No files selected.","Added")},
$S:407}
B.dQj.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dQi(),A.S(x).k("M<1,m>")))},
$S:0}
B.dQi.prototype={
$1(d){return d.a},
$S:z+2}
B.dPY.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xc.c7().cTp(C.a_o,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gan(o)}else o=!1
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i8("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i8("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ap6(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i8("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tL(),$async$$0)
case 9:o.i8("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dQC.prototype={
$1(d){return new B.Pw(this.a.a.c,this.b,null)},
$S:z+7}
B.dQD.prototype={
$1(d){return new B.Z_(this.a.a.c,this.b,null)},
$S:z+18}
B.dQE.prototype={
$1(d){return new B.YX(this.a.a.c,this.b,null)},
$S:z+19}
B.dQ9.prototype={
$1(d){return new B.Pw(this.a.a.c,this.b,null)},
$S:z+7}
B.dQa.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQv.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I1(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6S(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i8("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cmV(),$async$$0)
case 5:x=6
return A.b(p.tL(),$async$$0)
case 6:r=A.S(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dQr(p),r),new B.dQs(),r.k("M<ak.E,m>")).c0(0,new B.dQt())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.ea(new B.dQu(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p9(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UT(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQr.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dQq(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dQq.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQs.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dQt.prototype={
$1(d){return d.length!==0},
$S:3}
B.dQu.prototype={
$1(d){var x=this.a
return new B.Z1(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dQw.prototype={
$1(d){return d.a},
$S:z+2}
B.dQx.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dQp.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kV,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapf(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mG)?C.u8:C.p_
p=!x||p.my(D.mG)?"Play video":"View"
return A.c_(A.bm(!0,new A.D(C.Bk,A.x(A.a([q,o,t,C.aB,B.Z0(!1,u,!1,w,p,new B.dQk(d),v),B.Z0(!1,u,!1,C.ju,"Share via QR",new B.dQl(d),"Letters/numbers QR code"),B.Z0(!1,u,!1,D.a0p,"Send to their Code",new B.dQm(d),"Enter someone else's personal code"),B.Z0(!1,u,!1,C.hC,"Download / save",new B.dQn(d),v),C.am,B.Z0(!1,u,!0,C.e7,"Delete",new B.dQo(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kM,v,v,C.n),C.bf)},
$S:689}
B.dQk.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dQl.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dQm.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dQn.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dQo.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dPV.prototype={
$1(d){return d.a},
$S:z+2}
B.dPW.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPX.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6U(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gt(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p9(s.c,s.f),$async$$0)
case 4:u.i8(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPR.prototype={
$1(d){var x=this.a
x.tM(new B.dPQ(x,d,this.b),"Preparing\u2026")},
$S:407}
B.dPQ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i8("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UN(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i8("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bD5(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQc.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dQd.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fWR(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ6.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gq(new B.dQ2(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i8("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dQ3(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dQ4(s))
case 5:x=8
return A.b(r.b.ir(0,C.Fp,new B.dQ5()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gan(t)){s.i8("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tL(),$async$$0)
case 9:s.i8("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ2.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQ_(x,d,e))},
$S:144}
B.dQ_.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQ3.prototype={
$1(d){return new B.ac2(this.a.a,null)},
$S:z+21}
B.dQ4.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dQ5.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dQ7.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Io(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6I(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b01(B.Io(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ap6(new B.dQ0(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fWQ(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i8(q)
x=1
break}x=10
return A.b(s.tL(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dQ1()).gM(0)
s.i8(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ0.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPZ(x,d,e))},
$S:144}
B.dPZ.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQ1.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mG)},
$S:z+1}
B.dQh.prototype={
$1(d){return new B.Z2(this.a.a.c,null)},
$S:z+23}
B.dQg.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZH(u.a.c,v.b),$async$$0)
case 2:t.i8(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQB.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.D(C.Bk,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kV,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.Z0(!0,w,!1,C.nl,"My Code",new B.dQy(d),"Your personal code & QR \u2014 others send docs to you"),B.Z0(!1,w,!1,D.a0p,"Send to their Code",new B.dQz(this.a,d),"Enter someone else's 5-digit code + letter"),B.Z0(!1,w,!1,S.yz,"Import backup",new B.dQA(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kM,x,x,C.n),C.bf)},
$S:689}
B.dQy.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dQz.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bCa()},
$S:0}
B.dQA.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dQO.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Iy(D.Qa,x,C.a0j,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.Qa).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:652}
B.dQM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQN.prototype={
$0(){this.a.ahV()
return null},
$S:0}
B.dQP.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*10)),e)},
$S:105}
B.dQQ.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.ac4(e,w,v,this.b,x.e,x.c6S(w),new B.dQI(x,w),new B.dQJ(x,v,w),new B.dQK(x,w),new B.dQL(x,w),null)},
$S:z+24}
B.dQI.prototype={
$0(){this.a.af9(this.b)
return null},
$S:0}
B.dQJ.prototype={
$0(){var x=this.a
return x.m(new B.dQH(x,this.b,this.c))},
$S:0}
B.dQH.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQK.prototype={
$0(){this.a.NO(this.b)
return null},
$S:0}
B.dQL.prototype={
$0(){this.a.ahI(this.b)
return null},
$S:0}
B.d2Q.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*18)),e)},
$S:105}
B.d2R.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:136}
B.d3d.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:105}
B.d3c.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d39.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d3a.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d3b.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d37.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gan(w))return A.fP(w,C.A,x,new B.d35(this.a),C.fZ,C.dv,!0,x,!1,x,x)
$.aW.x1$.push(new B.d36(this.a))
return C.bI},
$S:133}
B.d35.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d33(this.a))
return C.bI},
$S:193}
B.d33.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d30(x))},
$S:8}
B.d30.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d36.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d32(x))},
$S:8}
B.d32.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d38.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d34(this.a))
return C.bI},
$S:193}
B.d34.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d31(x))},
$S:8}
B.d31.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2N.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2M(x,d))},
$S:1743}
B.d2M.prototype={
$0(){return this.a.f=this.b===C.uG},
$S:0}
B.d2O.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2L(x,d))},
$S:8}
B.d2L.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d2P.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2K(x,d))},
$S:8}
B.d2K.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2G.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d2H.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d2I.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d2J.prototype={
$1(d){return this.a.d.MP(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d3q.prototype={
$0(){var x=this.a.a
return B.rs(x.c,x.d)},
$S:1744}
B.d3r.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d3s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d3t.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d3u.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d3v.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d3x.prototype={
$0(){var x=this.a
x.m(new B.d3w(x))},
$S:0}
B.d3w.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pV(0)},
$S:0}
B.d3m.prototype={
$1(d){return this.a.Qq(this.b)},
$S:12}
B.d3n.prototype={
$1(d){return this.a.Qp(this.b)},
$S:12}
B.d3e.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d3f.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d3g.prototype={
$1(d){return D.h39},
$S:z+25}
B.d3l.prototype={
$2(d,e){if(d)B.UT()},
$S:119}
B.d3h.prototype={
$0(){return this.a.a9w(this.b)},
$S:0}
B.d3i.prototype={
$0(){return this.a.a9t(this.b)},
$S:0}
B.d3j.prototype={
$0(){return this.a.adK(this.b)},
$S:0}
B.d3k.prototype={
$0(){return this.a.a1f(this.b)},
$S:0}
B.d2F.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d3p.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pZ(),$async$$0)
case 2:u.m(new B.d3o(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d3o.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c8D.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mG)},
$S:z+1}
B.c8E.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c8C.prototype={
$2(d,e){return this.bjt(d,e)},
bjt(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UU(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.fsb.prototype={
$1(d){if(d===D.a6p&&(this.a.a.a&30)===0)this.a.fV(0)},
$S:z+27}
B.fsc.prototype={
$0(){},
$S:11}
B.fsJ.prototype={
bl1(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fgq(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hc2(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bl1(d,e)},
$S:541}
B.fsI.prototype={
$1(d){var x=this
d.b=new B.fsH(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fsH.prototype={
$1(d){return this.bl0(d)},
bl0(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZI(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aK(0,n,null)
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
return A.b(B.fgq(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
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
return A.b(B.a6R(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.az0.prototype,"gcdL","Q1",0)
x(v,"gceC","J5",0)
x(v,"gce7","xX",0)
x(v=B.aCV.prototype,"gc6M","adI",0)
x(v,"gc6N","Zn",0)
x(v,"gctq","ahp",0)
x(v=B.aCY.prototype,"gc6O","Zo",0)
x(v,"gctr","a1z",0)
x(B.aCW.prototype,"gc6P","adJ",0)
x(B.az_.prototype,"gc6U","c6V",4)
x(v=B.aCX.prototype,"gce8","a_v",0)
x(v,"gcrY","crZ",4)
x(v,"gb19","ay6",0)
x(v,"gcuW","ahP",0)
x(v,"gbOn","Xi",0)
x(v,"gc6T","Ea",0)
x(B.az1.prototype,"gb5_","a1y",0)
x(B.ayZ.prototype,"gc6W","Zp",0)
x(v=B.az4.prototype,"gb_Q","ccq",4)
x(v,"gc6Q","adM",0)
x(v=B.az2.prototype,"gcqX","a1k",0)
x(v,"gaZ_","adL",0)
w(B.ayY.prototype,"gawI","awJ",8)
x(v=B.az3.prototype,"gcgR","afC",0)
x(v,"gbNU","aaj",0)
w(v,"gawI","awJ",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cjA,B.a9d,B.atq,B.aBy,B.aEK,B.jn,B.abL,B.bv8,B.EZ,B.X3])
w(B.cjB,B.cjA)
w(B.b3P,B.a9d)
x(A.i_,[B.cjw,B.cjx,B.cjy,B.cjv,B.cjz,B.cjC,B.cjD,B.cjE,B.cjF,B.cjG,B.cjH,B.cjI,B.cjJ,B.fm6,B.fJF,B.fJH,B.fJG,B.fJU,B.fJV,B.fok,B.d2V,B.d2X,B.d2W,B.d3_,B.fqk,B.fqO,B.c87,B.c8e,B.c8f,B.c8a,B.c88,B.c8b,B.c8c,B.fJS,B.fJT,B.dQV,B.dR3,B.dR1,B.dR2,B.fji,B.fox,B.foy,B.c8w,B.foA,B.fsz,B.fmZ,B.fn_,B.c8B,B.fOE,B.d2U,B.d2S,B.dQR,B.dPN,B.dPT,B.dQb,B.dPS,B.dQi,B.dQC,B.dQD,B.dQE,B.dQ9,B.dQr,B.dQq,B.dQs,B.dQt,B.dQu,B.dQw,B.dQx,B.dQp,B.dPV,B.dPW,B.dPR,B.dQc,B.dQ3,B.dQ1,B.dQh,B.dQB,B.dQO,B.dQP,B.d2Q,B.d2R,B.d3d,B.d3c,B.d37,B.d35,B.d33,B.d36,B.d38,B.d34,B.d2N,B.d2O,B.d2P,B.d2J,B.d3m,B.d3n,B.d3g,B.c8D,B.c8E,B.fsb,B.fsI,B.fsH])
w(B.b3Q,B.atq)
x(A.ja,[B.fJE,B.d2Y,B.d2Z,B.fqi,B.fqj,B.fqN,B.dPK,B.dQT,B.dQU,B.dQS,B.dQW,B.dQX,B.dQY,B.dQZ,B.dR_,B.dR0,B.dPL,B.dPM,B.foz,B.d2T,B.dQe,B.dQf,B.dPO,B.dPP,B.dPU,B.dQF,B.dQG,B.dQ8,B.dQj,B.dPY,B.dQa,B.dQv,B.dQk,B.dQl,B.dQm,B.dQn,B.dQo,B.dPX,B.dPQ,B.dQd,B.dQ6,B.dQ_,B.dQ4,B.dQ5,B.dQ7,B.dPZ,B.dQg,B.dQy,B.dQz,B.dQA,B.dQM,B.dQN,B.dQI,B.dQJ,B.dQH,B.dQK,B.dQL,B.d39,B.d3a,B.d3b,B.d30,B.d32,B.d31,B.d2M,B.d2L,B.d2K,B.d2G,B.d2H,B.d2I,B.d3q,B.d3r,B.d3s,B.d3t,B.d3u,B.d3v,B.d3x,B.d3w,B.d3e,B.d3f,B.d3h,B.d3i,B.d3j,B.d3k,B.d2F,B.d3p,B.d3o,B.fsc])
x(A.md,[B.ac3,B.Nj,B.a9e,B.Om,B.X2,B.Ol,B.F_])
x(A.ag,[B.YZ,B.UI,B.UM,B.UJ,B.YY,B.UK,B.Z_,B.YX,B.Pw,B.Z1,B.YW,B.Z2])
x(A.ah,[B.az0,B.aCV,B.aCY,B.aCW,B.az_,B.aCX,B.az1,B.ayZ,B.az4,B.az2,B.ayY,B.az3])
x(A.au,[B.acw,B.ayX,B.bdd,B.ac4,B.ac2,B.bde])
x(A.kn,[B.c8d,B.c89,B.c8h,B.c8i,B.fKy,B.dQ2,B.dQ0,B.dQQ,B.d3l,B.c8C,B.fsJ])
x(A.iU,[B.biz,B.buN])})()
A.k1(b.typeUniverse,JSON.parse('{"b3P":{"a9d":[]},"b3Q":{"atq":[]},"YZ":{"ag":[],"t":[]},"az0":{"ah":["YZ"]},"acw":{"au":[],"t":[]},"UI":{"ag":[],"t":[]},"UM":{"ag":[],"t":[]},"aCV":{"ah":["UI"]},"aCY":{"ah":["UM"]},"biz":{"iU":[]},"UJ":{"ag":[],"t":[]},"aCW":{"ah":["UJ"]},"YY":{"ag":[],"t":[]},"UK":{"ag":[],"t":[]},"ac4":{"au":[],"t":[]},"Z_":{"ag":[],"t":[]},"YX":{"ag":[],"t":[]},"Pw":{"ag":[],"t":[]},"Z1":{"ag":[],"t":[]},"ac2":{"au":[],"t":[]},"YW":{"ag":[],"t":[]},"Z2":{"ag":[],"t":[]},"az_":{"ah":["YY"]},"buN":{"iU":[]},"aCX":{"ah":["UK"]},"ayX":{"au":[],"t":[]},"bdd":{"au":[],"t":[]},"az1":{"ah":["Z_"]},"ayZ":{"ah":["YX"]},"az4":{"ah":["Pw"]},"az2":{"ah":["Z1"]},"ayY":{"ah":["YW"]},"az3":{"ah":["Z2"]},"bde":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ud"),k:x("LM()"),m:x("bk<m,m>"),F:x("r3"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a5<m,R>>"),t:x("O<a5<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(lA,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iU>"),a:x("O<dL>"),p:x("O<t>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<m,m>"),P:x("a5<m,@>"),f:x("a5<@,@>"),o:x("iE"),e:x("ih7"),af:x("Eb"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("w8"),ab:x("EZ"),br:x("atq"),v:x("X3"),N:x("m"),X:x("bq<K>"),Q:x("lM"),D:x("dL"),aw:x("cx<m>"),cd:x("a_<a5<m,@>>"),c7:x("t"),ch:x("bY<ai<jn>>"),aW:x("bY<dL?>"),aY:x("bY<~>"),cx:x("ac3"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBy"),bG:x("aEK"),q:x("n2"),B:x("pr<EZ>"),c6:x("pr<a9e>"),y:x("R"),i:x("K"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a5<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("X3?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,Nj,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abL?"),bk:x("aBy?"),ag:x("aEK?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aZO=new A.az(C.aE,2,C.q,-1)
D.bXP=new A.a8(C.a3,C.a8,C.x,C.a2h,null,null)
D.b0s=new A.o(null,null,null,C.md,null,D.bXP,C.n)
D.b1V=new A.o(null,null,null,C.md,null,E.GR,C.n)
D.acH=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adW=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aeU=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.agl=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fl_=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fze=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DC,null,null,null,null,null,null,null,null,null)
D.d6t=x([D.fl_,C.am,D.fze],y.p)
D.bnE=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d6t,null)
D.fDz=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fph=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DC,null,null,null,null,null,null,null,null,null)
D.dmi=x([D.fDz,C.am,D.fph],y.p)
D.bnO=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dmi,null)
D.fzQ=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.ft5=new A.y("Enter the access code and password from your organization.",null,G.DC,null,null,null,null,null,null,null,null,null)
D.dk6=x([D.fzQ,C.am,D.ft5],y.p)
D.bnY=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dk6,null)
D.btX=new A.Q(16,10,16,28)
D.bu4=new A.Q(16,14,16,4)
D.bvi=new A.Q(20,0,20,16)
D.bvN=new A.Q(20,8,20,16)
D.aj2=new A.Q(24,22,24,20)
D.a0p=new A.a0(63394,"MaterialIcons",!1)
D.am4=new A.a0(63515,"MaterialIcons",!1)
D.bI8=new A.a0(983813,"MaterialIcons",!1)
D.bFn=new A.a0(62867,"MaterialIcons",!1)
D.bJ7=new A.ae(D.bFn,44,C.c,null,null,null)
D.bKc=new A.ae(C.q1,null,C.ad,null,null,null)
D.bLB=new A.ae(C.j4,18,null,null,null,null)
D.bNi=new A.ae(D.a0p,26,C.c,null,null,null)
D.bNP=new A.ae(C.BZ,null,null,null,null,null)
D.bOn=new A.ae(C.yA,null,null,null,null,null)
D.bPx=new A.ae(W.NZ,null,null,null,null,null)
D.bPR=new A.ae(C.hq,16,null,null,null,null)
D.bTi=new A.ae(C.rn,16,null,null,null,null)
D.bJp=new A.ae(C.nl,null,null,null,null,null)
D.bU9=new A.e4(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOV=new A.ae(C.G7,null,null,null,null,null)
D.bUe=new A.e4(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJK=new A.ae(H.GE,null,null,null,null,null)
D.bUp=new A.e4(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cHR=x([C.fd,C.aZ,C.aE],y.O)
D.bZG=new A.a8(C.az,C.aC,C.x,D.cHR,null,null)
D.cHk=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qa=x([C.fd,C.aE],y.O)
D.Qr=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mG=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.deN=x([C.pF,C.aE],y.O)
D.e6E={iceServers:0}
D.aH4={urls:0}
D.dq3=new A.bk(D.aH4,["stun:stun.l.google.com:19302"],y.m)
D.dq2=new A.bk(D.aH4,["stun:stun1.l.google.com:19302"],y.m)
D.cXI=x([D.dq3,D.dq2],A.ax("O<a5<m,m>>"))
D.dpl=new A.bk(D.e6E,[D.cXI],A.ax("bk<m,@>"))
D.HU=new B.Nj(0,"lanDirect")
D.RN=new B.Nj(1,"cloudStash")
D.dBo=new B.Nj(2,"inlineInstant")
D.RO=new B.Nj(3,"webrtcLink")
D.zl=new B.Nj(4,"videoCloud")
D.fzd=new A.y("Receive file",null,C.nE,null,null,null,null,null,null,null,null,null)
D.cxk=x([E.anK,C.ab,D.fzd],y.p)
D.eQw=new A.cl(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cxk,null)
D.ecz=new A.D(C.cm,D.eQw,null)
D.fc7=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2X,null,null,null)
D.flx=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fc7,null,C.L,null,null,null,null,null,null,null)
D.ebR=new A.D(C.Bp,D.flx,null)
D.b6a=new A.cp(C.A,null,null,D.ebR,null)
D.eik=new A.cL(0,null,0,28,null,null,D.b6a,null)
D.eiD=new B.a9e(0,"RTCDataChannelConnecting")
D.aMp=new B.a9e(1,"RTCDataChannelOpen")
D.aMq=new B.a9e(3,"RTCDataChannelClosed")
D.eiE=new B.F_(0,"RTCIceConnectionStateNew")
D.eiF=new B.F_(1,"RTCIceConnectionStateChecking")
D.eiG=new B.F_(2,"RTCIceConnectionStateCompleted")
D.eiH=new B.F_(3,"RTCIceConnectionStateConnected")
D.eiI=new B.F_(4,"RTCIceConnectionStateCount")
D.eiJ=new B.F_(5,"RTCIceConnectionStateFailed")
D.eiK=new B.F_(6,"RTCIceConnectionStateDisconnected")
D.aMr=new B.F_(7,"RTCIceConnectionStateClosed")
D.aMs=new B.X2(0,"RTCIceGatheringStateNew")
D.eiL=new B.X2(1,"RTCIceGatheringStateGathering")
D.a6p=new B.X2(2,"RTCIceGatheringStateComplete")
D.a6q=new B.Ol(0,"RTCPeerConnectionStateClosed")
D.aMt=new B.Ol(1,"RTCPeerConnectionStateFailed")
D.aMu=new B.Ol(2,"RTCPeerConnectionStateDisconnected")
D.aMv=new B.Ol(3,"RTCPeerConnectionStateNew")
D.aMw=new B.Ol(4,"RTCPeerConnectionStateConnecting")
D.aMx=new B.Ol(5,"RTCPeerConnectionStateConnected")
D.eiM=new B.Om(0,"RTCSignalingStateStable")
D.eiN=new B.Om(1,"RTCSignalingStateHaveLocalOffer")
D.eiO=new B.Om(2,"RTCSignalingStateHaveRemoteOffer")
D.eiP=new B.Om(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eiQ=new B.Om(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMy=new B.Om(5,"RTCSignalingStateClosed")
D.eV0=new A.ar(160,48)
D.b7o=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eWy=new A.a7(16,16,D.b7o,null)
D.foG=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXZ=new A.b1(D.foG,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fw2=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eY1=new A.b1(D.fw2,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fED=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eY8=new A.b1(D.fED,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fof=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eYy=new A.b1(D.fof,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fA0=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPh=new A.b1(D.fA0,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fBo=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eZ1=new A.b1(D.fBo,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fG1=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZg=new A.b1(D.fG1,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fE2=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZl=new A.b1(D.fE2,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFf=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f_7=new A.b1(D.fFf,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmU=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f_E=new A.b1(D.fmU,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fxR=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f_Z=new A.b1(D.fxR,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fqT=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f0u=new A.b1(D.fqT,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fG7=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0y=new A.b1(D.fG7,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fn9=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0E=new A.b1(D.fn9,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.flT=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0T=new A.b1(D.flT,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fiQ=new A.y("NGMY DOC SHARE",null,C.aQB,null,null,null,null,null,null,null,null,null)
D.fk7=new A.y("Show this to sender",null,C.kg,null,null,null,null,null,null,null,null,null)
D.fl6=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fpG=new A.y("Organization settings",null,C.cD,null,null,null,null,null,null,null,null,null)
D.fq3=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fr2=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fui=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fx3=new A.y("Send to their Doc Share",null,C.nC,null,null,null,null,null,null,null,null,null)
D.fxm=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxF=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fyd=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fyj=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fyG=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fBT=new A.y("Share files & videos\nwith a scan.",null,C.aQC,null,null,null,null,null,null,null,null,null)
D.fCb=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h39=new B.YW(null)
D.a9H=new B.ac3(0,"docShare")
D.a9I=new B.ac3(1,"gate")
D.UK=new B.ac3(2,"gateNoIndividual")})();(function staticFields(){$.aNq=null
$.fee=function(){var x=y.N
return A.U(x,x)}()
$.Gc=A.U(y.N,y.D)
$.ag6=A.U(y.N,A.ax("lA"))
$.QM=A.U(y.N,y.D)
$.feI=A.U(y.N,A.ax("abL"))
$.c8v=A.U(y.S,A.ax("bv8"))
$.hc1=1
$.hZF=null
$.hZE=null
$.hR8=null
$.h0X=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ihC","hti",()=>new B.cjB())
x($,"ifx","h4I",()=>C.a.t(A.bu(A.bu(A.bu(A.GO(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["6FrGrTfsvXFvNbM+47EFnkkIt88="]=a.current})($__dart_deferred_initializers__);