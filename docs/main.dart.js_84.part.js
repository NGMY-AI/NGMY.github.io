((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={ctb:function ctb(){},
i2a(d){var x=null,w=new B.b6R(d,D.eFJ,new A.pU(x,x,y.c6),new A.pU(x,x,y.B))
w.bCV(d)
return w},
b6R:function b6R(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ct6:function ct6(d){this.a=d},
ct7:function ct7(d){this.a=d},
ct8:function ct8(d){this.a=d},
ct5:function ct5(d){this.a=d},
ct9:function ct9(d){this.a=d},
i2b(d,e){var x=y.N
x=new B.b6S(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCW(d,e)
return x},
b6S:function b6S(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ctc:function ctc(d){this.a=d},
ctd:function ctd(d){this.a=d},
cte:function cte(d){this.a=d},
ctf:function ctf(d){this.a=d},
ctg:function ctg(d){this.a=d},
cth:function cth(d){this.a=d},
cti:function cti(d){this.a=d},
ctj:function ctj(d){this.a=d},
hgu(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.x8.GZ(x,"ngmy_doc_share_v1",new B.fyE(),1)},
i8R(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.er(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cJ.aL(d)
return x}catch(w){return v}return v},
Sm(d,e){return B.iop(d,e)},
iop(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQd
x=7
return A.b(o==null?$.aQd=B.hgu():o,$async$Sm)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mh(s,"blobs","readwrite")
C.iE.mi(J.mg(q,"blobs"),r,d)
x=8
return A.b(J.oz(q),$async$Sm)
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
return A.i($async$Sm,w)},
Sl(d){return B.ioo(d)},
ioo(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQd
x=7
return A.b(o==null?$.aQd=B.hgu():o,$async$Sl)
case 7:s=f
r=J.mh(s,"blobs","readonly")
x=8
return A.b(C.iE.xS(J.mg(r,"blobs"),d),$async$Sl)
case 8:q=f
x=9
return A.b(J.oz(r),$async$Sl)
case 9:o=B.i8R(q)
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
return A.i($async$Sl,w)},
ail(d){return B.ion(d)},
ion(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ail=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQd
x=7
return A.b(p==null?$.aQd=B.hgu():p,$async$ail)
case 7:s=f
r=J.mh(s,"blobs","readwrite")
C.iE.Gu(J.mg(r,"blobs"),d)
x=8
return A.b(J.oz(r),$async$ail)
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
return A.i($async$ail,w)},
fyE:function fyE(){},
ibj(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brG(w,v))}return u},
hI5(d,e){var x,w={},v=A.aYT("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fYn(w,v,e)
C.xa.zg(v,"change",new B.fYp(w,v,!1))
C.xa.zg(v,"cancel",new B.fYo(w))
$.eX.mK()
v.click()
A.bO(C.amf,new B.fYm(w),y.H)},
fYn:function fYn(d,e,f){this.a=d
this.b=e
this.c=f},
fYp:function fYp(d,e,f){this.a=d
this.b=e
this.c=f},
fYo:function fYo(d){this.a=d},
fYm:function fYm(d){this.a=d},
DI(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUP()?3:4
break
case 3:x=5
return A.b(B.hCK(e,d,s,!0,!1,f,g,h,!1,i),$async$DI)
case 5:x=1
break
case 4:x=6
return A.b(B.RX(d,s,f,g,h,i),$async$DI)
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
return A.b(B.Jn(s,d),$async$DI)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fu_(s,d),$async$DI)
case 14:x=12
return A.b(r.hCK(q,p,o,n,m,l,k,j,a1,i),$async$DI)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ee(new B.fYC(s,i,d,f,g,h),!1,null,y.H)),$async$DI)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ee(new B.fYD(s,i,d,f,g,h),!1,null,y.H)),$async$DI)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DI,w)},
RX(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RX=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1C(e),$async$RX)
case 3:u=k
x=4
return A.b(B.ar6(d,e,!1),$async$RX)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jn(e,d),$async$RX)
case 7:if(k){v=D.adL
x=1
break}x=8
return A.b(B.Wg(e),$async$RX)
case 8:v=t?D.Xb:D.adM
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1A(d,e)){v=D.adL
x=1
break}x=11
return A.b(B.Wg(e),$async$RX)
case 11:v=t?D.Xb:D.adM
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hbj(d,e)){v=D.adL
x=1
break}x=14
return A.b(B.Wg(e),$async$RX)
case 14:v=D.Xb
x=1
break
case 13:v=t?D.Xb:D.adM
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RX,w)},
fu_(d,e){var x=0,w=A.j(y.y),v
var $async$fu_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1A(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1C(d),$async$fu_)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fu_,w)},
hCK(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ee(new B.fBj(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hxy(d,e,f,g,h,i,j){return new B.a_x(e,j,d,g,h,i,f,null)},
fDd(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fDd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDg(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fDd)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDd,w)},
fDI(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fDI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
r=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDK(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fDI)
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
return A.i($async$fDI,w)},
hgG(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fQA(d,e){var x=0,w=A.j(y.H),v
var $async$fQA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wg(e),$async$fQA)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).ek()
case 1:return A.h(v,w)}})
return A.i($async$fQA,w)},
fYC:function fYC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYD:function fYD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adA:function adA(d,e){this.a=d
this.b=e},
fBj:function fBj(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_x:function a_x(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBy:function aBy(){this.c=this.a=this.d=null},
ddN:function ddN(d,e){this.a=d
this.b=e},
ddK:function ddK(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddL:function ddL(d){this.a=d},
ddP:function ddP(){},
ddO:function ddO(d){this.a=d},
ae3:function ae3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEc:function aEc(d,e){this.a=d
this.b=e},
aHn:function aHn(d,e,f){this.a=d
this.b=e
this.c=f},
fDg:function fDg(d,e,f){this.a=d
this.b=e
this.c=f},
fDe:function fDe(d){this.a=d},
fDf:function fDf(d,e,f){this.a=d
this.b=e
this.c=f},
fDK:function fDK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDJ:function fDJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceR(d,e,f,g,h){return B.hY3(d,e,f,g,h)},
hY3(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ceR=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iy(r.dN(d,new B.ceS(s,e,h,g,f,q),y.g),y.l),$async$ceR)
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
return A.i($async$ceR,w)},
b1x(d,e,f,g,h){return B.hY4(d,e,f,g,h)},
hY4(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1x=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awE("GET",d)
o=A.h7J()
if(o==null)o=new A.MJ(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.H3),$async$b1x)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D4(),$async$b1x)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cf(q,h,o,e,f,"Received via QR")
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
return A.i($async$b1x,w)},
b1w(d){return B.hY1(d)},
hY1(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.ov),$async$b1w)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.mb(A.m8(p.e)).cD(0,p.w),null)
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
return A.i($async$b1w,w)},
ceQ(d){return B.hY2(d)},
hY2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ceQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.qE),$async$ceQ)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mb(A.m8(q.e)).cD(0,q.w)
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
return A.i($async$ceQ,w)},
ceS:function ceS(d,e,f,g,h,i){var _=this
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
Jl(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hY9(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Z(t,u))return B.Jl(C.a.b0(t,u.length))}return null},
hYa(d){var x=B.Jl(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hY5(){var x,w=$.ow(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8b(d){return B.hY6(d)},
hY6(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8b)
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
return A.i($async$a8b,w)},
a8c(d,e){return B.hY7(d,e)},
hY7(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8c=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hP(d,e,!1,!1,C.cQ,null),$async$a8c)
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
return A.i($async$a8c,w)},
Ce(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ce=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Ce)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jl(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8d(r),$async$Ce)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8b("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ce)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jl(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ce)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hY5()
x=14
return A.b(B.a8d(m),$async$Ce)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8c("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ce)
case 15:k=f
x=16
return A.b(B.a8c("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ce)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ce)
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
return A.i($async$Ce,w)},
a8d(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jl(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8b("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8d)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
a8e(d,e,f,g){return B.hYb(d,e,f,g)},
hYb(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8e=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jl(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8d(r),$async$a8e)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cB(d,0,new B.ceY())>1048576||g.aU(d,new B.ceZ())){v=B.Fj(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8p("myCode",d,a0),$async$a8e)
case 4:u=a3
try{t=C.W.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fj(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1F(u,g.gJ(d),a0),$async$a8e)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ow().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.cf_(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1y(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8e)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
Fj(d,e,f,g,h){return B.hY8(d,e,f,g,h)},
hY8(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fj=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fj)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cB(a6,0,new B.ceU())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ow().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cT.aw(99999)
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
a1=B.Jp(a9,q)
a0=new A.Ld(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fj)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pp(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abP(a1.a,a4,"media",a1.d,a2).xP(m,n,new A.Ey(!0,q.c)),$async$Fj)
case 12:J.c4(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fj)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSR(r),$async$Fj)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.ceV(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1y(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fj)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSR(r),$async$Fj)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fj,w)},
b1y(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8b(t),$async$b1y)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.ceT(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8c(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1y,w)},
Ok(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ok=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8b("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ok)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
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
return A.b(B.b1z(k,a0),$async$Ok)
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
return A.b(B.b1E(h),$async$Ok)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wn(g,a0),$async$Ok)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.ceW(),q),n)
d=A.C(new A.Y(r,new B.ceX(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cW(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8c("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Ok)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ok,w)},
b1z(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1z=A.e(function(f,g){if(f===1)return A.f(g,w)
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
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iss(k,j)
C.d.u(s,i)
x=5
return A.b(B.DG(l,m,"Received via My Code",t,e,i),$async$b1z)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSR(s),$async$b1z)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1z,w)},
ceY:function ceY(){},
ceZ:function ceZ(){},
cf_:function cf_(){},
ceU:function ceU(){},
ceV:function ceV(){},
ceT:function ceT(){},
ceW:function ceW(){},
ceX:function ceX(){},
fYz(d,e){var x=0,w=A.j(y.H)
var $async$fYz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ee(new B.fYA(e),!1,null,y.H)),$async$fYz)
case 2:return A.h(null,w)}})
return A.i($async$fYz,w)},
bGR(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ee(new B.fYB(g,e,f),!1,null,y.y)),$async$bGR)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGR,w)},
fYA:function fYA(d){this.a=d},
fYB:function fYB(d,e,f){this.a=d
this.b=e
this.c=f},
Wd:function Wd(d,e){this.c=d
this.a=e},
aFz:function aFz(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e_w:function e_w(d,e){this.a=d
this.b=e},
Wh:function Wh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFC:function aFC(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e0F:function e0F(d){this.a=d},
e0G:function e0G(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0I:function e0I(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0N:function e0N(d){this.a=d},
e0Q:function e0Q(){},
e0O:function e0O(d){this.a=d},
e0P:function e0P(d,e){this.a=d
this.b=e},
blN:function blN(){},
We:function We(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFA:function aFA(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e_x:function e_x(d){this.a=d},
e_y:function e_y(d){this.a=d},
hbk(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hYd(d){var x=d.l5
if(x>=0)return x
return 4.99},
hYc(d){var x=d.lL,w=y.N
w=x.jp(x,new B.cf1(),w,w)
return w},
hsx(d){var x=d.kI,w=y.N
w=x.jp(x,new B.cf2(),w,w)
return w},
b1C(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1C=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b1C)
case 7:s=f
r=A.w(p)
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
return A.i($async$b1C,w)},
a8g(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8g)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a8g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
Wg(d){var x=0,w=A.j(y.H),v,u
var $async$Wg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wg)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
hbj(d,e){var x,w,v
if(B.hYd(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hYc(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1A(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hsx(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
hsy(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hsx(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cb(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dx(f,0,0,0,0,0).a).aa().ag())
d.kI=w},
ar7(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ar7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$ar7)
case 7:s=f
r=A.w(p)
r=A.eq(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$ar7,w)},
ar8(d){var x=0,w=A.j(y.H),v,u,t
var $async$ar8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ar7(d),$async$ar8)
case 3:u=f
x=5
return A.b(A.az(),$async$ar8)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$ar8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ar8,w)},
ar6(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ar6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hbk(d)
if(u<=0){v=!1
x=1
break}if(B.hbj(d,e)){v=!1
x=1
break}x=3
return A.b(B.ar7(e),$async$ar6)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar6,w)},
b1B(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jn(e,d),$async$b1B)
case 3:if(g){v=-1
x=1
break}u=B.hbk(d)
if(u<=0){v=-1
x=1
break}if(B.hbj(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ar7(e),$async$b1B)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1B,w)},
cf4(d,e,f){var x=0,w=A.j(y.y),v
var $async$cf4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jn(e,d),$async$cf4)
case 3:if(h){v=!1
x=1
break}v=B.ar6(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf4,w)},
cf3(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cf3=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cf4(d,u,i.gUP()),$async$cf3)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf3,w)},
a8f(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8f=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUP()){v=!0
x=1
break}if(B.b1A(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.Ut),$async$a8f)
case 5:x=k?3:4
break
case 3:B.hsy(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8f)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Ut,"Doc Share for Organizations"),$async$a8f)
case 7:if(!k){v=!1
x=1
break}B.hsy(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8f)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
cf1:function cf1(){},
cf2:function cf2(){},
fZz(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fZz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fZz)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fqh.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hR([r],e.c))
s.toString
$.fqh.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZz,w)},
iuB(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fqh.bq($.fqh,new B.fZB(d))},
fZB:function fZB(d){this.a=d},
frU(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$frU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],f))
s.toString
u=A.mZ(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$frU)
case 3:C.Bv.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frU,w)},
ahf(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fqY.n(0,d,new B.adh(A.br(e,!0,v)))
x=3
return A.b(A.az(),$async$ahf)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahf)
case 2:return A.h(null,w)}})
return A.i($async$ahf,w)},
ah9(d){return B.idd(d)},
idd(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fqY.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ah9)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fvG(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.adh(r)
$.fqY.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah9,w)},
RN(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.H4.n(0,d,u)
x=3
return A.b(B.Sm(d,u),$async$RN)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RN,w)},
aQy(d){return B.idb(d)},
idb(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H4.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sl(d),$async$aQy)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H4.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQy)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cJ.aL(r)
x=!J.ct(q)?9:10
break
case 9:B.RN(d,q)
x=11
return A.b(J.h6(s,d),$async$aQy)
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
return A.i($async$aQy,w)},
i9i(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cc(J.er(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cc(A.wS(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
return A.f3(null,y.K)},
a33(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a33=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bF,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fBv(r,t),!1,s)
A.fB(r,"error",new B.fBw(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iL(0,C.Ol,new B.fBx())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a33,w)},
aQS(d,e,f){return B.ifA(d,e,f)},
ifA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQS=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.U(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a33(i),$async$aQS)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sm(o,p),$async$aQS)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahf(k,j,s),$async$aQS)
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
return A.i($async$aQS,w)},
aQR(d,e,f){return B.ifz(d,e,f)},
ifz(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQR=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQS(d,e,f),$async$aQR)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a33(f),$async$aQR)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H4.n(0,s,r)
$.S5.n(0,s,r)
x=11
return A.b(B.RN(s,r),$async$aQR)
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
return A.i($async$aQR,w)},
Cf(d,e,f,g,h,i){return B.hYm(d,e,f,g,h,i)},
hYm(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cf=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1I(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RN(s,d),$async$Cf)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cf)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cK.gcn().aL(d)),$async$Cf)
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
return A.b(B.Ba(e),$async$Cf)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.He(e,j),$async$Cf)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cf,w)},
Wi(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wi=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Ba(d),$async$Wi)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cT.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hsA(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b1I(),null)
$.ahF.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a33(o),$async$Wi)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H4.n(0,h,g)
$.S5.n(0,h,g)
B.RN(h,g)
x=9
break
case 10:x=11
return A.b(B.aQR(d,m,o),$async$Wi)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.He(d,t),$async$Wi)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wi,w)},
hbo(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hbo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hsA(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jo(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cf(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbo,w)},
Jo(d,e,f,g,h,i){return B.hYl(d,e,f,g,h,i)},
hYl(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jo=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cT.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ld(A.dD(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jo)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h0(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SU(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kM(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sm(k,l),$async$Jo)
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
return A.b(j.a1(0),$async$Jo)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sm(k,new Uint8Array(A.cc(n))),$async$Jo)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahf(r,q,g),$async$Jo)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1I(),null)
x=17
return A.b(B.Ba(d),$async$Jo)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.He(d,e),$async$Jo)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jo,w)},
Wk(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wk=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahF.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a33(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah9(s),$async$Wk)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sl(u[o]),$async$Wk)
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
v=A.wS(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S5.h(0,s)
if(i==null)i=$.H4.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rU(d,e),$async$Wk)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S5.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
hsA(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rU(d,e){return B.hYn(d,e)},
hYn(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S5.h(0,f)
if(e==null)e=$.H4.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahF.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a33(s),$async$rU)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H4.n(0,f,r)
$.S5.n(0,f,r)
B.RN(f,r)
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
return A.b(B.ah9(f),$async$rU)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAi(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sl(g[l]),$async$rU)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqm()
if(!C.aI.gau(r)){$.H4.n(0,f,r)
$.S5.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQy(f),$async$rU)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S5.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wk(a0,a1,0,g),$async$rU)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.H4.n(0,f,h)
$.S5.n(0,f,h)
B.RN(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rU,w)},
hYq(d){var x,w,v=$.ahF.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hYr(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hR([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hYo(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
are(d,e,f,g,h){return B.hYp(d,e,f,g,h)},
hYp(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$are=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahF.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a33(s),$async$are)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rU(g,e),$async$are)
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
return A.b(n.iE(d).xP(h,r,new A.Ey(!0,e.c)),$async$are)
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
return A.i($async$are,w)},
hsC(d,e,f,g,h){var x,w,v,u,t=$.hsB
$.hsB=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cff.n(0,t,new B.byI(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAi(u)))
return t},
hbp(d){var x=0,w=A.j(y.H)
var $async$hbp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbp,w)},
Jp(d,e){var $async$Jp=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahF.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.U(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qx(B.Wk(d,e,p,o<q?o:q),$async$Jp,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qx(A.GC(n),$async$Jp,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qx(B.ah9("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jp,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qx(B.Sl(h[l]),$async$Jp,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qx(A.GC(k),$async$Jp,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qx(B.rU(d,e),$async$Jp,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qx(A.GC(A.wS(j,p,o<i?o:i)),$async$Jp,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qx(null,0,w)
case 2:return A.qx(t.at(-1),1,w)}})
var x=0,w=A.hBz($async$Jp,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hDu(w)},
b1K(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cff.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a62(),$async$b1K)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1K,w)},
Wj(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cff.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a62(),$async$Wj)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahf(r.c,u,r.z),$async$Wj)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1I(),null)
u=r.a
x=5
return A.b(B.Ba(u),$async$Wj)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.He(u,s),$async$Wj)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wj,w)},
a8m(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cff.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ail(u[s]),$async$a8m)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8m,w)},
cfh(d,e,f){var x=0,w=A.j(y.H)
var $async$cfh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDL(d,e,f),$async$cfh)
case 2:return A.h(null,w)}})
return A.i($async$cfh,w)},
cfi(d,e,f){var x=0,w=A.j(y.H)
var $async$cfi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDM(d,e,f),$async$cfi)
case 2:return A.h(null,w)}})
return A.i($async$cfi,w)},
Fk(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ba(d),$async$Fk)
case 2:p=g
J.nO(p,new B.cfg(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H4.W(0,v)
$.ahF.W(0,e)
x=3
return A.b(B.ah9(v),$async$Fk)
case 3:u=g
$.fqY.W(0,v)
x=4
return A.b(A.az(),$async$Fk)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fk)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fk)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ail(s[q]),$async$Fk)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ail(v),$async$Fk)
case 13:x=14
return A.b(B.He(d,p),$async$Fk)
case 14:return A.h(null,w)}})
return A.i($async$Fk,w)},
b1J(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rU(d,e),$async$b1J)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.frU(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1J,w)},
Ba(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Ba=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Ba)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fBy(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Ba,w)},
He(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$He=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$He)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fFJ(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$He)
case 3:return A.h(null,w)}})
return A.i($async$He,w)},
bDL(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ba(d),$async$bDL)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzI(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGv(f))
x=4
return A.b(B.He(d,u),$async$bDL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDL,w)},
bDM(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ba(d),$async$bDM)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzJ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPE(f))
x=4
return A.b(B.He(d,u),$async$bDM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDM,w)},
adh:function adh(d){this.a=d},
fvG:function fvG(){},
fBv:function fBv(d,e){this.a=d
this.b=e},
fBw:function fBw(d){this.a=d},
fBx:function fBx(){},
cfg:function cfg(d){this.a=d},
byI:function byI(d,e,f,g,h,i,j,k,l){var _=this
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
fBy:function fBy(){},
fFJ:function fFJ(){},
fzI:function fzI(d){this.a=d},
fzJ:function fzJ(d){this.a=d},
a8n(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.cfl())?3:4
break
case 3:x=5
return A.b(B.b1L(d,e),$async$a8n)
case 5:u=g
if(u!=null){t=u.c
B.Om(d,u.b,e,t)}v=u
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
return A.b(B.b1G(s),$async$a8n)
case 10:case 9:if(g){v=new A.R8(1,D.U6,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wl(d,e),$async$a8n)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wq(!0,!0,d,e),$async$a8n)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Om(d,D.Ax,e,t)
v=new A.R8(p,D.Ax,t)
x=1
break}v=B.cfk(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8n,w)},
Wl(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8p(null,d,e),$async$Wl)
case 3:p=g
try{u=C.W.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1F(p,d.length,e),$async$Wl)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfi(e,C.d.gH(d).a,r.b),$async$Wl)
case 7:case 6:q=r.a
x=8
return A.b(B.Om(d,D.U6,e,q),$async$Wl)
case 8:v=new A.R8(d.length,D.U6,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
Wm(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Z(d.c,"video/")||d.mR(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8o(d,e),$async$Wm)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfd(s,d,e,t),$async$Wm)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1G(t),$async$Wm)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rU(e,d),$async$Wm)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wl(A.a([d],y.r),e),$async$Wm)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wm,w)},
Wo(){var x=0,w=A.j(y.H)
var $async$Wo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hbi(),$async$Wo)
case 2:x=3
return A.b(B.aTd(),$async$Wo)
case 3:return A.h(null,w)}})
return A.i($async$Wo,w)},
a8o(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1I()
x=3
return A.b(B.cfh(e,d.a,u),$async$a8o)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
Om(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Om=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.U6&&C.a.Z(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b0(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8o(p,f),$async$Om)
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
return A.b(B.cfc(o,p,u,f),$async$Om)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfd(o,p,f,t),$async$Om)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfb(o,u,p,f),$async$Om)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
b1L(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfj(e,d),$async$b1L)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wq(!1,!0,d,e),$async$b1L)
case 4:u=g
if(u!=null){t=u.b
v=new A.R8(u.a,D.Ax,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1L,w)},
cfj(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wk(d,s,0,1),$async$cfj)
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
return A.i($async$cfj,w)},
cfk(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8p(null,d,e),$async$cfk)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hsz(u)
if(t.length>800){v=null
x=1
break}v=new A.R8(d.length,D.dVL,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfk,w)},
arf(d,e,f){return B.hYu(d,e,f)},
hYu(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arf=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nn(g,1)
x=B.hbn(g)?3:4
break
case 3:x=5
return A.b(B.cfe(g),$async$arf)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nn(g,13))
try{k=B.Fl(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nn(g,13))
u=9
x=12
return A.b(B.b1E(q),$async$arf)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wn(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.hbm(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wn(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jq(C.a.i(J.nn(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jq(C.a.i(J.nn(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Jq(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wn(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arf,w)},
Jq(d,e,f){return B.hYs(d,e,f)},
hYs(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jq=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Z(e,"N2|"))e=C.a.i(C.a.b0(e,3))
if(C.a.Z(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b0(e,13))
if(!C.a.Z(e,"http://")&&!C.a.Z(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1w(r),$async$Jq)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1w(A.cD(s,0,null)),$async$Jq)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ceR(o,r,a1,n,a2),$async$Jq)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ceQ(q),$async$Jq)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wn(l,a2),$async$Jq)
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
return A.i($async$Jq,w)},
a8p(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8p=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rU(f,r),$async$a8p)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cK.gcn().aL(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.W.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8p,w)},
Wn(d,e){return B.hYt(d,e)},
hYt(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wn=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.W.aP(0,a2,null)
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
e=J.aT(r)
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
break}i=C.cJ.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cf(i,a3,d,k,l,o),$async$Wn)
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
return A.i($async$Wn,w)},
Ol:function Ol(d,e){this.a=d
this.b=e},
cfl:function cfl(){},
a2C(d){var x=A.O(d).ax.a===C.I,w=x?D.aju:D.agY,v=x?D.alf:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.ais:C.bm
return new A.aIF([w,s,v,u,t,x?C.fq:C.bQ])},
hJ7(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h2R(e),d,null,!0,!0,y.N)},
cf0(d,e,f,g,h,i,j,k,l){return new B.Wf(e,l,d,f,k,j,g,h,i,null)},
a_z(d,e,f,g,h,i,j){return new B.bgk(g,h,j,e,i,d,f,null)},
h2R:function h2R(d){this.a=d},
a_w:function a_w(d,e){this.c=d
this.a=e},
aBx:function aBx(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ddJ:function ddJ(d){this.a=d},
ddH:function ddH(d){this.a=d},
ddI:function ddI(d){this.a=d},
byk:function byk(){},
Wf:function Wf(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFB:function aFB(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e0D:function e0D(d){this.a=d},
e00:function e00(d,e){this.a=d
this.b=e},
e01:function e01(d,e){this.a=d
this.b=e},
e_A:function e_A(d,e,f){this.a=d
this.b=e
this.c=f},
e_z:function e_z(d){this.a=d},
e_B:function e_B(d,e){this.a=d
this.b=e},
e_G:function e_G(d,e,f){this.a=d
this.b=e
this.c=f},
e_F:function e_F(d){this.a=d},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0s:function e0s(d){this.a=d},
e_Y:function e_Y(d,e,f){this.a=d
this.b=e
this.c=f},
e_V:function e_V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_E:function e_E(d){this.a=d},
e05:function e05(d){this.a=d},
e04:function e04(){},
e_K:function e_K(d){this.a=d},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0q:function e0q(d,e){this.a=d
this.b=e},
e_W:function e_W(d,e){this.a=d
this.b=e},
e_X:function e_X(d,e){this.a=d
this.b=e},
e0h:function e0h(d,e){this.a=d
this.b=e},
e0d:function e0d(d){this.a=d},
e0c:function e0c(d){this.a=d},
e0e:function e0e(){},
e0f:function e0f(){},
e0g:function e0g(d,e){this.a=d
this.b=e},
e0i:function e0i(){},
e0j:function e0j(d){this.a=d},
e0b:function e0b(d,e){this.a=d
this.b=e},
e06:function e06(d){this.a=d},
e07:function e07(d){this.a=d},
e08:function e08(d){this.a=d},
e09:function e09(d){this.a=d},
e0a:function e0a(d){this.a=d},
e_H:function e_H(){},
e_I:function e_I(d){this.a=d},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e,f){this.a=d
this.b=e
this.c=f},
e_Z:function e_Z(d){this.a=d},
e0_:function e0_(d,e,f){this.a=d
this.b=e
this.c=f},
e_T:function e_T(d,e){this.a=d
this.b=e},
e_P:function e_P(d){this.a=d},
e_M:function e_M(d,e,f){this.a=d
this.b=e
this.c=f},
e_Q:function e_Q(d){this.a=d},
e_R:function e_R(d){this.a=d},
e_S:function e_S(){},
e_U:function e_U(d,e){this.a=d
this.b=e},
e_N:function e_N(d){this.a=d},
e_L:function e_L(d,e,f){this.a=d
this.b=e
this.c=f},
e_O:function e_O(){},
e03:function e03(d){this.a=d},
e02:function e02(d,e){this.a=d
this.b=e},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0k:function e0k(d){this.a=d},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0m:function e0m(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0B:function e0B(){},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0v:function e0v(d,e,f){this.a=d
this.b=e
this.c=f},
e0t:function e0t(d,e,f){this.a=d
this.b=e
this.c=f},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0x:function e0x(d,e){this.a=d
this.b=e},
aBu:function aBu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgj:function bgj(d,e,f){this.c=d
this.d=e
this.a=f},
ddF:function ddF(){},
ddG:function ddG(){},
adB:function adB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
de2:function de2(){},
de1:function de1(d){this.a=d},
a_y:function a_y(d,e,f){this.c=d
this.d=e
this.a=f},
aBz:function aBz(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
ddZ:function ddZ(d){this.a=d},
de_:function de_(d,e,f){this.a=d
this.b=e
this.c=f},
de0:function de0(d,e){this.a=d
this.b=e},
ddX:function ddX(d,e){this.a=d
this.b=e},
ddV:function ddV(d){this.a=d},
ddT:function ddT(d){this.a=d},
ddQ:function ddQ(d){this.a=d},
ddW:function ddW(d){this.a=d},
ddS:function ddS(d){this.a=d},
ddY:function ddY(d){this.a=d},
ddU:function ddU(d){this.a=d},
ddR:function ddR(d){this.a=d},
a_v:function a_v(d,e,f){this.c=d
this.d=e
this.a=f},
aBw:function aBw(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
ddC:function ddC(d){this.a=d},
ddB:function ddB(d,e){this.a=d
this.b=e},
ddD:function ddD(d){this.a=d},
ddA:function ddA(d,e){this.a=d
this.b=e},
ddE:function ddE(d){this.a=d},
ddz:function ddz(d,e){this.a=d
this.b=e},
ddv:function ddv(d){this.a=d},
ddw:function ddw(d){this.a=d},
ddx:function ddx(d,e){this.a=d
this.b=e},
ddy:function ddy(d){this.a=d},
QI:function QI(d,e,f){this.c=d
this.d=e
this.a=f},
aBC:function aBC(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
def:function def(d){this.a=d},
deg:function deg(d){this.a=d},
deh:function deh(d){this.a=d},
dei:function dei(d){this.a=d},
dej:function dej(d,e){this.a=d
this.b=e},
dek:function dek(d){this.a=d},
dem:function dem(d){this.a=d},
del:function del(d){this.a=d},
a_A:function a_A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBA:function aBA(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
deb:function deb(d,e){this.a=d
this.b=e},
dec:function dec(d,e){this.a=d
this.b=e},
de3:function de3(d,e,f){this.a=d
this.b=e
this.c=f},
de4:function de4(d){this.a=d},
de5:function de5(){},
dea:function dea(){},
de6:function de6(d,e){this.a=d
this.b=e},
de7:function de7(d,e){this.a=d
this.b=e},
de8:function de8(d,e){this.a=d
this.b=e},
de9:function de9(d,e){this.a=d
this.b=e},
adz:function adz(d,e){this.c=d
this.a=e},
ddu:function ddu(d){this.a=d},
a_u:function a_u(d){this.a=d},
aBv:function aBv(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_B:function a_B(d,e){this.c=d
this.a=e},
aBB:function aBB(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dee:function dee(d){this.a=d},
ded:function ded(d){this.a=d},
bgk:function bgk(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hYv(){var x,w=$.ow(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
On(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$On=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$On)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$On)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
q=A.ab(n)
$.am.$1("[doc share video cloud] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$On,w)},
a8q(d){return B.hYw(d)},
hYw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8q)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hP("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$a8q)
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
return A.i($async$a8q,w)},
Wp(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.On(),$async$Wp)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dK(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8q(s),$async$Wp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
Wq(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wq)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.br(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cfn(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hYv()
t=A.U(u).k("N<1,aa<q,aJ>>")
r=A.C(new A.N(u,new B.cfo(s),t),t.k("ak.E"))
x=6
return A.b(B.On(),$async$Wq)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8q(q),$async$Wq)
case 7:x=8
return A.b(B.a8r(r,u,g,s),$async$Wq)
case 8:v=new A.bsa(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
arg(d){var x=0,w=A.j(y.y),v,u,t
var $async$arg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.On(),$async$arg)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arg,w)},
cfp(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.On(),$async$cfp)
case 3:s=r.t(f,C.a.i(d))
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
return A.i($async$cfp,w)},
a8r(d,e,f,g){return B.hYx(d,e,f,g)},
hYx(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8r=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.are("media",r,new B.cfm(s,e,g),f,q),$async$a8r)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wp(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8r)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wp(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8r)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wp(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8r)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8r,w)},
Fl(d,e,f){return B.hYy(d,e,f)},
hYy(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fl=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Z(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arg(b3),$async$Fl)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iR,null,g),$async$Fl)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arg(b3),$async$Fl)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.On(),$async$Fl)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aI(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ct(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a8(a4)
r=a1.gJ(a4)
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
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pp(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abP(a8.a,b0,"media",a8.d,a9).Dp(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1x(k,n,o,s,b7),$async$Fl)
case 17:j=c0
if(j!=null){J.c4(p,j);++q
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pp(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abP(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fl)
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
a0=A.dK(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8q(e),$async$Fl)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fl,w)},
cfn:function cfn(){},
cfo:function cfo(d){this.a=d},
cfm:function cfm(d,e,f){this.a=d
this.b=e
this.c=f},
aTd(){var x=0,w=A.j(y.H),v,u
var $async$aTd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i8B=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTd)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTd)
case 3:u=$.hgS
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTd)
case 4:$.hgS=$.iho=$.ihp=null
return A.h(null,w)}})
return A.i($async$aTd,w)},
fFk(d){var x=0,w=A.j(y.H),v,u
var $async$fFk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aao){x=1
break}u=new A.bn($.bF,y.d4)
d.c=new B.fFl(new A.c7(u,y.aY))
x=3
return A.b(u.iL(0,C.id,new B.fFm()),$async$fFk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fFk,w)},
ihm(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hYf(x):x},
hgW(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Z(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.Z(u,"WR")){v=B.ari(u)
x=1
break}v=B.hbm(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgW,w)},
hgV(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Z(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.Z(u,"WR")){v=B.arj(u)
x=1
break}v=B.hbm(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgV,w)},
fZi(d){var x=0,w=A.j(y.T),v
var $async$fZi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arj(d),$async$fZi)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZi,w)},
bEH(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hgV(d),$async$bEH)
case 3:q=f
if(q==null){x=1
break}t=C.W.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEH,w)},
fsH(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fsH=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wj(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cf(d.aqm(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsH,w)},
Hg(d,e,f){return B.ijE(d,e,f)},
ijE(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hg=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hgW(a1),$async$Hg)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.W.aP(0,e,null)
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
if(C.a.Z(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b0(o,13))
m=C.a.Z(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hL7().aGM(D.dHW,null),$async$Hg)
case 4:l=d.hgS=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAi(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bF,y.b1)
l.y=new B.fFW(f,k,new B.fFX(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a95(0,new B.YC(r,"offer")),$async$Hg)
case 5:d=l
x=7
return A.b(l.amM(0),$async$Hg)
case 7:x=6
return A.b(d.a8Y(0,a4),$async$Hg)
case 6:x=8
return A.b(B.fFk(l),$async$Hg)
case 8:x=9
return A.b(l.ar8(),$async$Hg)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ihm(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ark(m,h),$async$Hg)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hsz(h)
case 11:v=new A.brq(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hg,w)},
fFl:function fFl(d){this.a=d},
fFm:function fFm(){},
fFX:function fFX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFW:function fFW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fFV:function fFV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ilJ(d){switch(d){case"new":return D.eFK
case"checking":return D.eFL
case"connected":return D.eFN
case"completed":return D.eFM
case"failed":return D.eFP
case"disconnected":return D.eFQ
case"closed":return D.aSn
case"count":return D.eFO}return D.aSn},
ilK(d){switch(d){case"new":return D.aSo
case"gathering":return D.eFR
case"complete":return D.aao}return D.aSo},
iw9(d){switch(d){case"stable":return D.eFS
case"have-local-offer":return D.eFT
case"have-local-pranswer":return D.eFV
case"have-remote-offer":return D.eFU
case"have-remote-pranswer":return D.eFW
case"closed":return D.aSu}return D.aSu},
iui(d){switch(d){case"new":return D.aSr
case"connecting":return D.aSs
case"connected":return D.aSt
case"closed":return D.aap
case"disconnected":return D.aSq
case"failed":return D.aSp}return D.aap},
aaL:function aaL(d,e){this.a=d
this.b=e},
Pr:function Pr(d,e){this.a=d
this.b=e},
YB:function YB(d,e){this.a=d
this.b=e},
Pq:function Pq(d,e){this.a=d
this.b=e},
FQ:function FQ(d,e){this.a=d
this.b=e},
cta:function cta(){},
hd7(d){var x=new B.FP()
x.a=d
x.b=!0
return x},
FP:function FP(){this.b=this.a=$},
aaK:function aaK(){},
avR:function avR(){},
YC:function YC(d,e){this.a=d
this.b=e},
hbi(){var x=0,w=A.j(y.H)
var $async$hbi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbi,w)},
hbl(d,e,f){var x=0,w=A.j(y.T),v
var $async$hbl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Z(e.c,"video/")||e.mR(D.n7))){v=null
x=1
break}v=B.fZz(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbl,w)},
hsz(d){var x,w=C.agm.a5M(C.dV.aL(d),null)
if(w.length===0){x=C.dV.aL(d)
return C.cK.gcn().aL(x)}return C.cK.gcn().aL(w)},
hYe(d){var x,w,v=C.cJ.aL(d)
try{x=C.cb.cD(0,C.agl.bgF(v,!1))
return x}catch(w){x=C.cb.cD(0,v)
return x}},
hbm(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Z(t,s))return B.hYe(C.a.b0(t,s.length))
w=e+"|"
if(C.a.Z(t,w)){x=C.a.b0(t,w.length)
try{v=C.cb.cD(0,C.cJ.aL(x))
return v}catch(u){return x}}return null},
hYf(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.Z(t,"a=extmap"))continue
if(C.a.Z(t,"a=ssrc"))continue
if(C.a.Z(t,"a=msid"))continue
if(C.a.Z(t,"a=rtcp"))continue
if(C.a.Z(t,"a=rtpmap"))continue
if(C.a.Z(t,"a=fmtp"))continue
if(C.a.Z(t,"a=rtcp-fb"))continue
if(C.a.Z(t,"a=mid:"))continue
if(C.a.Z(t,"a=group:"))continue
if(C.a.Z(t,"a=setup:"))continue
if(C.a.Z(t,"a=ice-options:"))continue
if(C.a.Z(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hYg(){var x,w=$.ow(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1D(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1D=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1D)
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
return A.i($async$b1D,w)},
cf5(d,e){return B.hYh(d,e)},
hYh(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cf5=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hP("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cQ,null),$async$cf5)
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
return A.i($async$cf5,w)},
b1G(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1D(d),$async$b1G)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1G,w)},
b1F(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1F=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hYg()
r=C.a.i(f)
t=C.dV.aL(s)
x=3
return A.b(B.cf5(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cK.gcn().aL(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1F)
case 3:if(!h){v=null
x=1
break}v=new A.a1B("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1F,w)},
b1E(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1D(o),$async$b1E)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cD(0,C.cJ.aL(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1E,w)},
cf6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cf6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bFD("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cQ),$async$cf6)
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
return A.i($async$cf6,w)},
b1H(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jm(),$async$b1H)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1H,w)},
arb(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arb)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1H(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arb,w)},
ar9(d,e){var x=0,w=A.j(y.H)
var $async$ar9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ar9)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ar9)
case 2:return A.h(null,w)}})
return A.i($async$ar9,w)},
a8i(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8i)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jm(),$async$a8i)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8h(s),$async$a8i)
case 5:x=6
return A.b(B.ar9(f,u),$async$a8i)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
a8j(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8j=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8j)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jm(),$async$a8j)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
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
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.ar9(g,q),$async$a8j)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8h(u),$async$a8j)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
a8k(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8k=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8k)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jm(),$async$a8k)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1A(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8k)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8k)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
cf7(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cf7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cf7)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.W.aP(0,r,null)
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
return A.i($async$cf7,w)},
Jn(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cf7(d),$async$Jn)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1H(t),$async$Jn)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ara(d),$async$Jn)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1A(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ara(d),$async$Jn)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jn,w)},
ara(d){var x=0,w=A.j(y.H)
var $async$ara=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ara)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ara)
case 2:return A.h(null,w)}})
return A.i($async$ara,w)},
b1I(){var x,w=$.ow(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8l(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hbn(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfa(d){return B.hYj(d)},
hYj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8l(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfa)
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
return A.i($async$cfa,w)},
ard(d,e){return B.hYk(d,e)},
hYk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ard=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8l(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hP("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cQ,null),$async$ard)
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
return A.i($async$ard,w)},
cfc(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfc=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8l(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ard(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfc)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfc,w)},
cfb(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfb=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8l(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ard(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfb,w)},
cfd(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfd=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8l(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ard(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfd,w)},
cfe(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hbn(d)){v=null
x=1
break}x=3
return A.b(B.cfa(d),$async$cfe)
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
return A.i($async$cfe,w)},
a8s(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8s=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8s)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8s)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
q=A.ab(n)
$.am.$1("[doc share webrtc stash] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8s,w)},
arh(d){return B.hYz(d)},
hYz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$arh)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hP("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$arh)
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
return A.i($async$arh,w)},
ari(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ari=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ari)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8s(),$async$ari)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cD(0,C.cJ.aL(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dK(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.arh(s),$async$ari)
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
return A.i($async$ari,w)},
ark(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ark=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$ark)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8s(),$async$ark)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dK(A.a1(s,r,q),r,q)
r=C.dV.aL(C.a.i(e))
q.n(0,"answer",C.cK.gcn().aL(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arh(u),$async$ark)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ark,w)},
arj(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arj)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8s(),$async$arj)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cD(0,C.cJ.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arj,w)},
aqa(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqa=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.qZ)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$aqa)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aqa)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.tp(o))
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
return A.i($async$aqa,w)},
iss(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fXt(d){return B.isu(d)},
isu(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fXt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").LC(d,3600),$async$fXt)
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
return A.i($async$fXt,w)},
DG(d,e,f,g,h,i){var x=null
return B.isr(d,e,f,g,h,i)},
isr(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DG=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hsC(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hbp(r),$async$DG)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fXt(o),$async$DG)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8m(r),$async$DG)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aW2)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MJ(A.a([],g))
x=15
return A.b(d.f9(0,A.awE("GET",A.cD(n,0,null))).dg(0,C.H3),$async$DG)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8m(r),$async$DG)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ld(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DG)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1K(r,k),$async$DG)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DG)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wj(r)
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
return A.b(B.a8m(r),$async$DG)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DG,w)},
aSR(d){return B.ist(d)},
ist(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").W(0,d),$async$aSR)
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
return A.i($async$aSR,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[143]
F=c[147]
B=a.updateHolder(c[17],B)
D=c[146]
H=c[112]
G=c[121]
I=c[43]
K=c[138]
L=c[45]
B.ctb.prototype={
aGM(d,e){return this.cR8(d,e)},
cR8(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dK(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cu(t)))
t=J.k(u)
v=B.i2b(C.cK.gcn().aL(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGM,w)}}
B.b6R.prototype={
bCV(d){var x=this,w=x.w
w.onclose=A.hv(new B.ct6(x))
w.onopen=A.hv(new B.ct7(x))
w.onmessage=A.hv(new B.ct8(x))
w.onbufferedamountlow=A.hv(new B.ct9(x))},
gd2(d){return this.x},
aj0(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aj0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FP()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hd7(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aj0)
case 8:v=t.hd7(s.apj(f,0,null))
x=1
break
case 7:case 4:v=B.hd7(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aj0,w)}}
B.b6S.prototype={
bCW(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hv(new B.ctc(x)))
w.addEventListener("icecandidate",A.hv(new B.ctd(x)))
w.addEventListener("iceconnectionstatechange",A.hv(new B.cte(x)))
w.onicegatheringstatechange=A.hv(new B.ctf(x))
w.addEventListener("signalingstatechange",A.hv(new B.ctg(x)))
if(!$.hl2())w.addEventListener("connectionstatechange",A.hv(new B.cth(x)))
w.addEventListener("negotiationneeded",A.hv(new B.cti(x)))
w.addEventListener("track",A.hv(new B.ctj(x)))},
amM(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kl(A.cu(A.T(y.N,y.z)))),y.aQ),$async$amM)
case 3:t=f
v=new B.YC(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amM,w)},
a8Y(d,e){return this.brR(0,e)},
brR(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8Y)
case 2:return A.h(null,w)}})
return A.i($async$a8Y,w)},
a95(d,e){return this.bsb(0,e)},
bsb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a95=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a95)
case 2:return A.h(null,w)}})
return A.i($async$a95,w)},
ar8(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ar8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YC(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar8,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.adA.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_x.prototype={
S(){return new B.aBy()},
gd1(){return this.c}}
B.aBy.prototype={
Y(){this.a3()
this.afw()},
afw(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1B(u.e,u.c),$async$afw)
case 2:t=e
if(v.c!=null)v.m(new B.ddN(v,t))
return A.h(null,w)}})
return A.i($async$afw,w)},
Rg(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ar6(t.e,t.c,!1),$async$Rg)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.ftE)
x=1
break}x=4
return A.b(B.a8g(u.a.c,"individual"),$async$Rg)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7k(A.ee(new B.ddK(u),!1,null,y.H)),$async$Rg)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rg,w)},
JX(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fDd(o),$async$JX)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8k(o.e,r,s,q),$async$JX)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqD)
x=1
break}x=5
return A.b(B.a8g(u.a.c,"member"),$async$JX)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7k(A.ee(new B.ddM(u),!1,null,y.H)),$async$JX)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JX,w)},
yN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8f(t.e,o,t.f,t.r,t.w,s),$async$yN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8g(u.a.c,"org_owner"),$async$yN)
case 4:x=5
return A.b(B.arb(u.a.c),$async$yN)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fDI(o),$async$yN)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8i(s,t,o,q.c),$async$yN)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqz)
x=1
break}x=10
return A.b(B.arb(u.a.c),$async$yN)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7k(A.ee(new B.ddL(u),!1,null,y.H)),$async$yN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yN,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.ny:C.qr,p=B.hbk(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fNN,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hl,s,s,s),C.aB,D.h6Q,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.ccu,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lZ(new B.ddP(),s),C.P,v,C.e4,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.ae3(C.eY,C.aES,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcka(),s),C.af],u))
w.push(new B.ae3(C.pA,C.a5M,"Team Member","Sign in with your organization access code + password",t.gcl1(),s))
w.push(C.af)
w.push(new B.ae3(C.aqR,C.a7r,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckx(),s))
return A.c5(s,q,A.bm(!0,A.ca(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae3.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.lZ,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zs,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.n(p,s,w,q,s,s,C.n),s,C.bT,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEc.prototype={}
B.aHn.prototype={}
B.jD.prototype={
mR(d){var x=this.b,w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b0(x,w+1).toLowerCase())},
garQ(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.ad(x/1024,1)+" KB"
if(x<1073741824)return C.h.ad(x/1048576,1)+" MB"
return C.h.ad(x/1073741824,2)+" GB"},
aj(){var x,w=this,v=A.T(y.N,y.z)
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
bg8(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPE(d){return this.bg8(null,d)},
aGv(d){return this.bg8(d,null)}}
B.Wd.prototype={
S(){return new B.aFz(new A.cy(null,y.A))},
gd1(){return this.c}}
B.aFz.prototype={
Y(){this.a3()
this.afx()},
afx(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ce(u.a.c),$async$afx)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e_w(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afx,w)},
afy(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fx(s)),$async$afy)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fuz)
case 1:return A.h(v,w)}})
return A.i($async$afy,w)},
a_Z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_Z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqa(s.d,4),$async$a_Z)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_my_code_"+m+".png"),$async$a_Z)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_Z,w)},
ajs(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abo("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajs,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.ny:C.qr,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m6
else if(q.e==null)x=A.as(new A.D(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.m(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.m(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.o(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,E.a6c,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,C.ant,p,p,1/0)
v=A.l(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nd,w,C.lb,new A.e6(A.o(p,A.qh(p,p,!1,B.hYa(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bT,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.ep(C.DD,p,C.Wy,q.gccq(),p),1),C.as,A.E(A.de(C.zU,p,C.acK,q.gccr(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.T,new A.a5(1/0,p,A.ep(G.a4x,p,D.h2n,q.gczV(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,I.ao1,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wh.prototype={
S(){return new B.aFC(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aFC.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jl(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
a0_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jl(u.d.a.a)
if(t==null){u.m(new B.e0F(u))
x=1
break}u.m(new B.e0G(u))
s=u.a
r=s.c
x=3
return A.b(B.a8e(s.d,new B.e0H(u),t,r),$async$a0_)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e0I(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0_,w)},
a3d(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3d=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e0J(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rU(r.a.c,q),$async$a3d)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e0K(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj4(p,m,l,j,k),$async$a3d)
case 8:o=e
if(r.c!=null)r.m(new B.e0L(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.e0M(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e0N(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3d,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.aju:D.agY,h=j?D.alf:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.ais:C.bm
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.ds(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.ds(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c_v,C.f,k,k,new A.n(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,E.a6c,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uW(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blN()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.OH,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e0O(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mB,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mo(l.a.d,4)
m=A.C(new A.N(m,new B.e0P(x,new A.aIF(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fp4)
else q.push(A.X(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.n(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bHU,k,k,C.ah),1)
u=l.f?k:l.gczW()
t=i[3]
s=i[1]
q=A.l(16)
s=A.ep(G.a4x,k,D.h3u,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gccs()
t=A.bp(C.aD,k,k,0,C.c,k,C.nF,k,new A.ba(A.l(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lC(new B.e0Q(),A.x(A.a([e,new A.D(D.bHn,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.tY:D.h1K,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.ck,C.a0O,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blN.prototype={
pb(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.ho(C.bB,v.length),C.aP)}}
B.We.prototype={
S(){return new B.aFA()}}
B.aFA.prototype={
Y(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bb(w,C.b7,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.at(new A.bb(x,C.b7,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.at(C.aw,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.V$=$.aw()
v.R$=0
v=w.e
v===$&&A.c()
v.V$=x
v.R$=0
v=w.f
v===$&&A.c()
v.V$=x
v.R$=0
w.a2()},
afz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e_x(r))
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
return A.b(B.a8j(p,m,n,o,C.a.i(l).length===0?null:l),$async$afz)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fua)
s=[1]
x=4
break}p.K(y.q).f.T(D.fsM)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e_y(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afz,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.ny:C.qr,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fV5,s,s,s,1,s,!0),p=A.o(s,D.bzp,C.f,s,s,new A.n(s,s,s,A.l(22),s,C.Is,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c6R,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c71,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcct()
u=A.bp(C.aD,s,s,s,s,C.hg,s,s,s,s,s,s)
return A.c5(q,r,A.ca(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bJ(t.r?C.tY:C.aYT,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adh.prototype={}
B.byI.prototype={
a62(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a62=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.aqm()))
x=3
return A.b(B.Sm(t,s),$async$a62)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a62,w)},
gd1(){return this.a}}
B.Ol.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_w.prototype={
S(){return new B.aBx(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aBx.prototype={
Y(){this.a3()
$.aU.x1$.push(new B.ddJ(this))},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
ccz(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2C(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.o(w,H.aty,C.f,w,w,new A.n(w,w,w,A.l(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.aun,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uW(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byk()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CM,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b75),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.ddH(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mB,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cN(C.Mq,new A.bN(new A.n(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wJ,A.x(A.a([l,C.aO,k,C.P,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dV(C.o7,new B.ddI(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.ba(A.l(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bN(new A.n(w,w,w,A.l(14),A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cM,12)],n),F.QI,C.n),C.bk,A.aF(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ez7,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccy(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OQ,w,C.d7,w,w,w)}}
B.byk.prototype={
pb(d,e){return e.amG(e.a.toUpperCase())}}
B.Wf.prototype={
S(){return new B.aFB(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFB.prototype={
Y(){var x=this
x.a3()
x.us()
x.w=A.dg(C.jJ,new B.e0D(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wo()
this.a2()},
a26(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a26=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ok(u.a.c),$async$a26)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Ba(u.a.c),$async$a26)
case 4:u.m(new s.e00(u,e))
u.ip("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a26,w)},
us(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$us=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ok(u.a.c),$async$us)
case 3:t=e
x=4
return A.b(B.Ba(u.a.c),$async$us)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e01(u,s))
if(t>0)u.ip("Received "+A.w(t)+" file(s) via My Code.")
u.Oo(u.d)
B.Ce(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$us,w)},
Oo(d){return this.bGY(d)},
bGY(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Oo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8o(r,u.a.c),$async$Oo)
case 8:p=f
if(u.c==null){x=1
break}new B.e_A(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.Z(r.c,"video/")||r.mR(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wm(r,u.a.c),$async$Oo)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Ba(u.a.c),$async$Oo)
case 12:u.m(new o.e_B(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
OO(d){return this.bNj(d)},
bNj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8o(d,u.a.c),$async$OO)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e_G(u,d,t))
x=6
return A.b(A.fH(new A.fx(t)),$async$OO)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fx(r.toUpperCase())),$async$OO)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OO,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
ut(d,e){return this.cKT(d,e)},
cKT(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ut=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e0r(r,e))
u=3
x=6
return A.b(d.$0(),$async$ut)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e0s(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ut,w)},
gaYk(){var x=this.a
return x.f||x.r||x.w},
IN(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYk()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cf3(s,n,r,q,o,t),$async$IN)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fQA(o,u.a.c),$async$IN)
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
return A.b(B.DI(s,o,r,q,n,t),$async$IN)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IN,w)},
a1a(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arb(u.a.c),$async$a1a)
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
return A.b(A.a6(t,!1).ce(A.ee(new B.e_Y(u,r,q),!1,null,y.H)),$async$a1a)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1a,w)},
a2g(d){return this.ctt(d)},
cts(){return this.a2g(1)},
ctt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYk()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ar8(u.a.c),$async$a2g)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2g,w)},
ado(d,e,f){return this.c3k(d,e,f)},
c3k(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ado=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.ut(new B.e_V(u,d,null,e,f),"Uploading\u2026"),$async$ado)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ado,w)},
bH6(){B.hI5(!1,new B.e_E(this))
return},
cyw(){this.m(new B.e05(this))},
aAZ(){var x=0,w=A.j(y.H),v=this
var $async$aAZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bH6()
return A.h(null,w)}})
return A.i($async$aAZ,w)},
adk(){var x=0,w=A.j(y.H),v=this
var $async$adk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e_K(v),"Importing\u2026"),$async$adk)
case 2:return A.h(null,w)}})
return A.i($async$adk,w)},
Tk(d){return this.cKc(d)},
cKc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Z(t,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e0o(u,d),!1,null,y.H)),$async$Tk)
case 5:x=1
break
case 4:x=C.a.Z(t,"image/")||d.mR(D.SK)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ee(new B.e0p(u,d),!1,null,y.H)),$async$Tk)
case 8:x=1
break
case 7:x=u.c42(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ee(new B.e0q(u,d),!1,null,y.H)),$async$Tk)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tk,w)},
c42(d){var x,w
if(C.a.Z(d.c,"audio/"))return!0
x=d.b
w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cVY,C.a.b0(x,w+1).toLowerCase())},
aha(d){return this.cke(d)},
cke(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aha=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Z(d.c,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e_W(u,d),!1,null,y.H)),$async$aha)
case 5:x=1
break
case 4:u.m(new B.e_X(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aha,w)},
SG(d){return this.cBp(d)},
cBp(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$SG)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e0h(u,d),"Preparing QR\u2026"),$async$SG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SG,w)},
ajS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0i(),A.U(t).k("N<1,q>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e0j(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SG(r),$async$ajS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajS,w)},
ajL(d){return this.cAX(d)},
cAX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2C(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0b(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajL)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tk(d)
break
case"qr":u.SG(A.a([d],y.r))
break
case"send_my_code":u.ckR(A.a([d],y.r))
break
case"save":u.aj8(d)
break
case"delete":u.JG(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajL,w)},
YL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_H(),A.U(t).k("N<1,q>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_I(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$YL)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e_J(u,r),"Preparing file\u2026"),$async$YL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YL,w)},
aif(d){return this.crL(d)},
crL(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aif=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hJ7(d,!1),$async$aif)
case 3:s=f
r=s==null
q=B.a8l(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ip("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aif,w)},
ahg(){var x=0,w=A.j(y.H),v=this,u
var $async$ahg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fYz(u,v.a.c),$async$ahg)
case 2:return A.h(null,w)}})
return A.i($async$ahg,w)},
bH5(){B.hI5(!1,new B.e_D(this,null))
return},
JW(d,e){return this.ckS(d,e)},
b3U(d){return this.JW(null,d)},
ckR(d){return this.JW(d,null)},
ckS(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e_Z(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xP.cq().aps(!0,C.a2z,!1),$async$JW)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.ut(new B.e0_(l,s,r),"Preparing\u2026"),$async$JW)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
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
return A.b(B.bGR(p,l,e,s.a.c),$async$JW)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JW,w)},
J2(d){return this.c37(d)},
c37(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Z(q,"NGMYDOCRCV|")||C.a.Z(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hY9(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3U(t),$async$J2)
case 8:x=6
break
case 7:u.ip("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ip("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Z(d,"NGMYDOCSYNC3|")||C.a.Z(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.ut(new B.e_T(u,d),"Receiving video\u2026"),$async$J2)
case 11:x=1
break
case 10:x=12
return A.b(u.ut(new B.e_U(u,d),"Receiving\u2026"),$async$J2)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J2,w)},
ET(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ET=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DB()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aif(t),$async$ET)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J2(s),$async$ET)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e03(u),!1,null,y.N)),$async$ET)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.us(),$async$ET)
case 10:x=1
break
case 9:x=11
return A.b(u.J2(C.a.i(r)),$async$ET)
case 11:case 1:return A.h(v,w)}})
return A.i($async$ET,w)},
aj8(d){return this.cx3(d)},
cx3(d){var x=0,w=A.j(y.H),v=this
var $async$aj8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e02(v,d),"Saving\u2026"),$async$aj8)
case 2:return A.h(null,w)}})
return A.i($async$aj8,w)},
JG(d){return this.bPF(d)},
bPF(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ln(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JG)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cf6(t),$async$JG)
case 6:case 5:s=d.a
x=7
return A.b(B.Fk(u.a.c,s),$async$JG)
case 7:u.r.W(0,s)
x=8
return A.b(u.us(),$async$JG)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JG,w)},
ajY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2C(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0n(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajY)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahg()
break
case"import":u.adk()
break}case 1:return A.h(v,w)}})
return A.i($async$ajY,w)},
ccw(d){var x=d.c
if(C.a.Z(x,"video/")||d.mR(D.n7))return C.qW
if(C.a.Z(x,"image/")||d.mR(D.SK))return C.v4
if(C.a.q(x,"pdf"))return C.I8
return D.arf},
B(d){var x,w,v=this,u=null,t=B.a2C(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Ik,u,u,u,new B.e0y(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c05,u,u,u,v.e?u:v.gcky(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyv()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bVi:C.arD,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a4u,u,u,u,v.e?u:v.gccx(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb5_(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c1T,u,u,u,v.e?u:new B.e0z(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.e0A(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.ds(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.ds(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kt(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBu(C.ju,s,!0,t,w?u:v.gcBq(),u),1)
x.push(new A.D(D.bG7,A.lC(new B.e0B(),A.A(A.a([s,C.as,A.E(new B.aBu(C.tl,"Export",!1,t,w?u:v.gbTy(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.ck,C.iB,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgj(t,v.e?u:v.gb5_(),u)
else s=A.ku(!0,u,u,new B.e0C(v,t),s,u,D.bG_,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBu.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.t8,t,new A.ba(s,C.a1),t,t,t)
return A.de(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t8,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ep(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgj.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.ddF(),new A.D(C.a1G,A.x(A.a([A.lC(new B.ddG(),A.o(x,A.X(C.zw,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ed,C.hO,x,x,new A.bt(0.86,1,w),s),C.e4,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.de(C.oQ,x,D.h79,this.d,A.bp(C.aD,x,x,x,C.c,x,C.OO,x,new A.ba(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.Cy,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adB.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dx(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.Z(p,"video/")
if(!o||i.mR(D.n7))p=D.dwF
else{p=C.a.Z(p,"image/")||i.mR(D.SK)
n=y.O
p=p?A.a([C.cW,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garQ()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.ax,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mR(D.n7)))l.push(A.h93(C.aD,!1,j,j,j,!1,j,j,new B.de1(k),j,j,new A.ba(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oI,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lC(new B.de2(),new A.D(C.el,A.aF(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a19,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.ck,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_y.prototype={
S(){return new B.aBz()},
gd1(){return this.c}}
B.aBz.prototype={
Y(){this.a3()
this.yD()},
t(){B.hYo(this.e)
this.a2()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rU(o.c,o.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hYr(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hYq(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.ddZ(s))
x=1
break}s.m(new B.de_(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.de0(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a3c(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rU(t.c,t.d),$async$a3c)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fr9)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj4(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3c)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3c,w)},
c30(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.z,v,new B.ddX(w,t),C.h2,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fX(t,C.z,v,new B.ddY(w),C.h2,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v1(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2C(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DF,u,u,u,v.gb8M(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FY
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.de(C.DF,u,D.fQf,v.gb8M(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c30()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_v.prototype={
S(){return new B.aBw(A.ak2(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBw.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fA(w,A.a3(w).k("fA<1>")).iF(new B.ddC(v))
x.gcYL().iF(new B.ddD(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a3(x).k("fA<1>"))}if(x==null)x=C.bdv
x.iF(new B.ddE(v))
v.yD()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rU(p.c,p.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.ddv(s))
x=1
break}x=8
return A.b(s.d.vx(0,new A.a4L(r,s.a.d.c)),$async$yD)
case 8:if(s.c==null){x=1
break}s.m(new B.ddw(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.ddx(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a00(){var x=0,w=A.j(y.H),v=this,u
var $async$a00=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a00)
case 5:x=3
break
case 4:x=6
return A.b(u.iK(0),$async$a00)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a00,w)},
aW8(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2C(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FY
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bWe,C.f,o,o,new A.n(o,o,o,A.l(24),o,F.QI,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.ddy(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aW8(p.w)+" / "+p.aW8(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.fnv,o,o,o,o,o,o)
r=p.f
q=A.X(r?C.v8:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.de(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccA(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qJ,x,o),o,o,o),o,!1,!1,o,o)}}
B.QI.prototype={
S(){return new B.aBC()},
gd1(){return this.c}}
B.aBC.prototype={
Y(){this.a3()
this.Qy()},
Qy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hbl(o.c,o.d,new B.def(s)),$async$Qy)
case 7:r=e
if(r==null||r.length===0){s.m(new B.deg(s))
x=1
break}s.e=r
q=A.ikz(r)
if(q==null){s.m(new B.deh(s))
x=1
break}s.d=q
q.aV(0,s.gb3I())
x=8
return A.b(q.iY(0).dg(0,C.t4),$async$Qy)
case 8:if(s.c==null){x=1
break}s.m(new B.dei(s))
x=9
return A.b(q.qv(0),$async$Qy)
case 9:q.u2(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dej(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qy,w)},
ciN(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dek(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DE(0,x.gb3I())
w=x.d
if(w!=null)w.t()
B.iuB(x.e)
x.a2()},
afC(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1J(u.c,u.d),$async$afC)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afC,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2C(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.oP,t,t,t,u.gccu(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FY
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajt(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fG(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AG(s,t),A.ay(t,A.xx(A.o(t,A.X(q?C.v8:C.he,C.c,t,t,t,48),C.f,t,t,new A.n(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bT,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dem(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_A.prototype={
S(){return new B.aBA(new A.cy(null,y.A))}}
B.aBA.prototype={
gcKA(){var x,w,v=this.a
if(v.e!==D.U7)return null
x=C.a.i(v.c)
if(!C.a.Z(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.Z(w,"WR"))return w
return null},
gcKa(){var x,w,v=this.a
if(v.e!==D.Ax)return null
x=C.a.i(v.c)
if(!C.a.Z(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.Z(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcKA()
if(x!=null){v.RI(x)
v.e=A.dg(C.H6,new B.deb(v,x))}w=v.gcKa()
if(w!=null){v.RH(w)
v.f=A.dg(C.fM,new B.dec(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RH(d){return this.cpY(d)},
cpY(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arg(d),$async$RH)
case 3:t=f
x=4
return A.b(B.cfp(d),$async$RH)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.de3(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RH,w)},
RI(d){return this.cpZ(d)},
cpZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fZi(d),$async$RI)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEH(t),$async$RI)
case 4:if(u.c==null){x=1
break}u.m(new B.de4(u))
u.c.K(y.q).f.T(D.aVC)
case 1:return A.h(v,w)}})
return A.i($async$RI,w)},
gc8k(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccv(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2Z(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2Z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DB()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fuk)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ee(new B.de5(),!1,null,y.N)),$async$a2Z)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEH(s),$async$a2Z)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aVC)
case 1:return A.h(v,w)}})
return A.i($async$a2Z,w)},
abc(d){return this.bNk(d)},
bNk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fx(C.d.aN(t,", "))),$async$abc)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abc,w)},
afA(d){return this.bN2(d)},
bN2(d){var x=0,w=A.j(y.H),v=this
var $async$afA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fx(v.a.c)),$async$afA)
case 2:if(d.e!=null)d.K(y.q).f.T(D.frD)
return A.h(null,w)}})
return A.i($async$afA,w)},
a2T(d){return this.cx5(d)},
cx5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqa(s.d,4),$async$a2T)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_doc_share_qr.png"),$async$a2T)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2T,w)},
gaZA(){var x,w=this.a
if(w.e!==D.Jz)return null
x=C.a.i(w.c)
if(C.a.Z(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.Z(x,"http://")||C.a.Z(x,"https://"))return x
if(C.a.Z(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
ab9(d){return this.bNd(d)},
bNd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZA()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fx(C.a.Z(t,"http")?t:"N2|"+t)),$async$ab9)
case 3:if(d.e!=null)d.K(y.q).f.T(D.ftj)
case 1:return A.h(v,w)}})
return A.i($async$ab9,w)},
afB(){var x=0,w=A.j(y.H),v=this,u
var $async$afB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wo(),$async$afB)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afB,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2C(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jz&&i!==D.U7&&i!==D.Ax
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jz||t===D.U7||t===D.Ax?l:A.aH(l,l,l,l,C.ls,l,l,l,m.gb1F(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qh(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8k(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jz){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.o(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccv(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c5U,D.fZU,new B.de6(m,d),l)],p))}if(m.a.e===D.Jz&&m.gaZA()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c2e,D.fWu,new B.de7(m,d),l)],p))
if(m.a.e===D.Ax){x=(m.w?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.h.ad(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.G1:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}if(m.a.e===D.U7){x=(m.r?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.G1:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l),C.af,A.de(D.bYH,l,D.h23,m.gcxs(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c5(v,w,new A.D(C.ac,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.i,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(C.DD,l,C.Wy,new B.de8(m,d),l),1),C.as,A.E(A.de(C.zU,l,C.acK,new B.de9(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bb,l,m.gb1F(),A.bp(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dea(),y.C)}}
B.adz.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.o(x,A.qh(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bJ(C.Bc,x,new B.ddu(d),x)],u),x,x,C.no,v,x,x,x,x,D.fPd,x)}}
B.a_u.prototype={
S(){return new B.aBv(A.zR(C.yO,C.oe,C.vl))}}
B.aBv.prototype={
t(){this.d.t()
this.a2()},
azy(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Z(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fX1,x,x,x,1,x,!0),C.w,A.zQ(this.d,C.bX,this.gazx()),x,!1,!1,x,x)}}
B.a_B.prototype={
S(){return new B.aBB(A.zR(C.yO,C.oe,C.vl))},
gd1(){return this.c}}
B.aBB.prototype={
c44(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Z(x,"NGMYDOCSYNC")||C.a.Z(x,"N2|")||C.a.Z(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahD(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MP("text/plain"),$async$ahD)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fue)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahD,w)},
ac0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ac0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hJ7(p,!0),$async$ac0)
case 3:t=e
p=t==null
s=B.a8l(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fqK)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$ac0,w)},
t(){this.d.t()
this.a2()},
azy(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c44(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.asD,v,v,v,w.gbT1(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a4B,v,v,v,w.gcnj(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.v0:C.PX,v,v,v,v,v),v,v,v,new B.dee(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h2Z,v,v,v,1,v,!0)
u=A.zQ(w.d,C.bX,w.gazx())
x=A.l(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eFp],s),v),v,!1,!1,v,v)}}
B.bgk.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pq
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.o(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pq:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1M,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aaL.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pr.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YB.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pq.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FQ.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cta.prototype={}
B.FP.prototype={}
B.aaK.prototype={}
B.avR.prototype={}
B.YC.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jD)","q(jD)","Wf(Z)","~()","a_x(Z)","H(H,jD)","QI(Z)","~(nQ)","cw(FP)","aA<jD?>(@)","Wd(Z)","Wh(Z)","D(jD)","jD(@)","aa<q,@>(jD)","a_w(Z)","We(Z)","a_y(Z)","a_v(Z)","a_A(Z)","adz(Z)","ai<jD>()","a_B(Z)","adB(Z,H)","a_u(Z)","aa<q,aJ>(jD)","cw(YB)","cw(aaK)","aA<cw>(FP)"])
B.ct6.prototype={
$1(d){var x=this.a
x.x=D.aSm
x.y.I(0,D.aSm)},
$S:77}
B.ct7.prototype={
$1(d){var x=this.a
x.x=D.aSl
x.y.I(0,D.aSl)},
$S:77}
B.ct8.prototype={
$1(d){var x=this.a
x.aj0(A.ahR(d.data)).bG(new B.ct5(x),y.b)},
$S:77}
B.ct5.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ct9.prototype={
$1(d){},
$S:77}
B.ctc.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i2a(d.channel))},
$S:17}
B.ctd.prototype={
$1(d){},
$S:17}
B.cte.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ilJ(w.iceConnectionState)
x.cx=w
if($.hl2())switch(w.a){case 0:x.cy=D.aSr
break
case 1:x.cy=D.aSs
break
case 3:x.cy=D.aSt
break
case 5:x.cy=D.aSp
break
case 6:x.cy=D.aSq
break
case 7:x.cy=D.aap
break
default:break}},
$S:110}
B.ctf.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ilK(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:110}
B.ctg.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iw9(w.signalingState)},
$S:110}
B.cth.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iui(w.connectionState)},
$S:110}
B.cti.prototype={
$1(d){},
$S:110}
B.ctj.prototype={
$1(d){},
$S:17}
B.fyE.prototype={
$1(d){var x=y.F.a(new A.qv([],[]).o5(d.target.result,!1)),w=C.wA.q(x.objectStoreNames,"blobs")
if(!w)C.wx.Gp(x,"blobs")},
$S:167}
B.fYn.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xa.fs(this.b)
$.eX.mK()
this.c.$1(d)},
$S:468}
B.fYp.prototype={
$1(d){return this.a.$1(B.ibj(this.b,this.c))},
$S:32}
B.fYo.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fYm.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fYC.prototype={
$1(d){var x=this
return B.hxy(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fYD.prototype={
$1(d){var x=this
return B.hxy(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fBj.prototype={
$1(d){var x=this
return B.cf0(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.ddN.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ddK.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf0(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.ddM.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf0(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.ddL.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf0(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.ddP.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bXj,x,x,x,new B.ddO(d),x,x,x,x,x,x),A.E(A.FB(D.St,!0,x,!1,C.a3E,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.St,x,g,C.aoi,0,e,f)},
$C:"$4",
$R:4,
$S:481}
B.ddO.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDg.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eU,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.o(v,D.bzJ,C.f,v,v,D.b8L,v,v,v,v,D.ao7,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0H,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.CO,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asT,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fDe(d),v),1),C.as,A.E(A.bJ(D.fVt,v,new B.fDf(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.n),v,v,v,C.H9,v,v,v,v),v)},
$S:69}
B.fDe.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDf.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.frU)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEc(v,x))},
$S:0}
B.fDK.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eU,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bzz,C.f,w,w,D.bag,w,w,w,w,D.ao7,w,w,1/0),new A.D(C.CO,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hgG(u,"Organization name",C.HI,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hgG(u,"Access code",C.mk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hgG(u,"Member password",C.DC,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h35,w,new B.fDJ(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.n),w,w,w,C.H9,w,w,w,w),w)},
$S:69}
B.fDJ.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.frZ)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHn(u,x,w))},
$S:0}
B.ceS.prototype={
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
p=C.a.Z(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vR(p,null).dg(0,C.a0N),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cf(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ceY.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceZ.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cf_.prototype={
$1(d){return d.b},
$S:z+2}
B.ceU.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceV.prototype={
$1(d){return d.b},
$S:z+2}
B.ceT.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.ceW.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.ceX.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fYA.prototype={
$1(d){return new B.Wd(this.a,null)},
$S:z+11}
B.fYB.prototype={
$1(d){return new B.Wh(this.a,this.b,this.c,null)},
$S:z+12}
B.e_w.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e0F.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e0G.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e0H.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e0E(x,d))},
$S:2}
B.e0E.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0I.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0J.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e0K.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e0L.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0M.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e0N.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0Q.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.r(0,(1-e)*14)),e)},
$S:108}
B.e0O.prototype={
$1(d){var x=this.a
return x.f?null:x.a0_()},
$S:2}
B.e0P.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.Z(s,"image/")||d.mR(D.SK))s=C.v4
else s=C.a.Z(s,"video/")||d.mR(D.n7)?C.qW:D.arf
x=this.b.a
w=y.p
return new A.D(C.kC,A.A(A.a([A.o(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garQ(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e_x.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e_y.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cf1.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:102}
B.cf2.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:102}
B.fZB.prototype={
$2(d,e){return e===this.a},
$S:298}
B.fvG.prototype={
$1(d){return J.k(d)},
$S:16}
B.fBv.prototype={
$1(d){var x=this.b
B.i9i(C.Hv.ga7F(this.a)).bG(x.gCe(x),y.H)},
$S:128}
B.fBw.prototype={
$1(d){return this.a.dd(0,null)},
$S:128}
B.fBx.prototype={
$0(){return null},
$S:11}
B.cfg.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fBy.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
v=v==null?q:C.h.M(v)
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
B.fFJ.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fzI.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfl.prototype={
$1(d){return C.a.Z(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.h2R.prototype={
$1(d){return new B.a_w(this.a,null)},
$S:z+16}
B.ddJ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.ddH.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.ddI.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0D.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a26()},
$S:12}
B.e00.prototype={
$0(){var x=J.bHW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e01.prototype={
$0(){var x=J.bHW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_A.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_z(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGv(this.c)}},
$S:0}
B.e_z.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_B.prototype={
$0(){var x=J.bHW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_G.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_F(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGv(this.c)}},
$S:0}
B.e_F.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0r.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e0s.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e_Y.prototype={
$1(d){return new B.We(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e_V.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IN(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wi(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.us(),$async$$0)
case 5:s=J.a8(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a2g(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_E.prototype={
$1(d){this.a.ado(d,"No files selected.","Added")},
$S:468}
B.e05.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e04(),A.U(x).k("N<1,q>")))},
$S:0}
B.e04.prototype={
$1(d){return d.a},
$S:z+2}
B.e_K.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xP.cq().d_J(C.a2z,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
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
p=A.ab(j)
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ip("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Z(m,"NGMYDOCSYNC")&&!C.a.Z(m,"{")){s.a.ip("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arf(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.us(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e0o.prototype={
$1(d){return new B.QI(this.a.a.c,this.b,null)},
$S:z+7}
B.e0p.prototype={
$1(d){return new B.a_y(this.a.a.c,this.b,null)},
$S:z+18}
B.e0q.prototype={
$1(d){return new B.a_v(this.a.a.c,this.b,null)},
$S:z+19}
B.e_W.prototype={
$1(d){return new B.QI(this.a.a.c,this.b,null)},
$S:z+7}
B.e_X.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0h.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IN(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8n(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cts(),$async$$0)
case 5:x=6
return A.b(p.us(),$async$$0)
case 6:r=A.U(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e0d(p),r),new B.e0e(),r.k("N<ak.E,q>")).c_(0,new B.e0f())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0g(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wo(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0d.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e0c(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e0c.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0e.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e0f.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0g.prototype={
$1(d){var x=this.a
return new B.a_A(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e0i.prototype={
$1(d){return d.a},
$S:z+2}
B.e0j.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0b.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kB,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garQ(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Z(p.c,"video/")
w=!x||p.mR(D.n7)?C.tp:C.nP
p=!x||p.mR(D.n7)?"Play video":"View"
return new A.bN(new A.n(s,v,new A.bH(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CK,A.x(A.a([q,o,t,C.aB,B.a_z(!1,u,!1,w,p,new B.e06(d),v),B.a_z(!1,u,!1,C.ju,"Share via QR",new B.e07(d),"Letters/numbers QR code"),B.a_z(!1,u,!1,D.a3J,"Send to their Code",new B.e08(d),"Enter someone else's personal code"),B.a_z(!1,u,!1,C.hC,"Download / save",new B.e09(d),v),C.am,B.a_z(!1,u,!0,C.ej,"Delete",new B.e0a(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:742}
B.e06.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e07.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e08.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e09.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e0a.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e_H.prototype={
$1(d){return d.a},
$S:z+2}
B.e_I.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_J.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8p(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hi(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pC(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_D.prototype={
$1(d){var x=this.a
x.ut(new B.e_C(x,d,this.b),"Preparing\u2026")},
$S:468}
B.e_C.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wi(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGR(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_Z.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e0_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hbo(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_T.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hg(new B.e_P(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e_Q(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e_R(s))
case 5:x=8
return A.b(r.b.iL(0,C.H3,new B.e_S()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.us(),$async$$0)
case 9:s.ip("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_P.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_M(x,d,e))},
$S:220}
B.e_M.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_Q.prototype={
$1(d){return new B.adz(this.a.a,null)},
$S:z+21}
B.e_R.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e_S.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e_U.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jl(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8d(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3U(B.Jl(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arf(new B.e_N(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hbn(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Z(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.us(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e_O()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_N.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_L(x,d,e))},
$S:220}
B.e_L.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_O.prototype={
$1(d){return C.a.Z(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.e03.prototype={
$1(d){return new B.a_B(this.a.a.c,null)},
$S:z+23}
B.e02.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1J(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0n.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.n(v[2],x,new A.bH(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CK,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kB,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_z(!0,w,!1,C.mk,"My Code",new B.e0k(d),"Your personal code & QR \u2014 others send docs to you"),B.a_z(!1,w,!1,D.a3J,"Send to their Code",new B.e0l(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_z(!1,w,!1,C.zM,"Import backup",new B.e0m(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:742}
B.e0k.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e0l.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bH5()},
$S:0}
B.e0m.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e0A.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jv(D.St,x,C.a3E,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gH(D.St).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:832}
B.e0y.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0z.prototype={
$0(){this.a.ajY()
return null},
$S:0}
B.e0B.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.r(0,(1-e)*10)),e)},
$S:108}
B.e0C.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adB(e,w,v,this.b,x.e,x.ccw(w),new B.e0u(x,w),new B.e0v(x,v,w),new B.e0w(x,w),new B.e0x(x,w),null)},
$S:z+24}
B.e0u.prototype={
$0(){this.a.aha(this.b)
return null},
$S:0}
B.e0v.prototype={
$0(){var x=this.a
return x.m(new B.e0t(x,this.b,this.c))},
$S:0}
B.e0t.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0w.prototype={
$0(){this.a.OO(this.b)
return null},
$S:0}
B.e0x.prototype={
$0(){this.a.ajL(this.b)
return null},
$S:0}
B.ddF.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.r(0,(1-e)*18)),e)},
$S:108}
B.ddG.prototype={
$3(d,e,f){return A.e1(C.z,f,e,null,null)},
$S:115}
B.de2.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.r(0,(1-e)*14)),e)},
$S:108}
B.de1.prototype={
$1(d){return this.a.y.$0()},
$S:85}
B.ddZ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.de_.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.de0.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.ddX.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fX(w,C.z,x,new B.ddV(this.a),C.h2,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.ddW(this.a))
return C.bM},
$S:147}
B.ddV.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddT(this.a))
return C.bM},
$S:195}
B.ddT.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddQ(x))},
$S:7}
B.ddQ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddW.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddS(x))},
$S:7}
B.ddS.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddY.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddU(this.a))
return C.bM},
$S:195}
B.ddU.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddR(x))},
$S:7}
B.ddR.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddC.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddB(x,d))},
$S:2045}
B.ddB.prototype={
$0(){return this.a.f=this.b===C.vI},
$S:0}
B.ddD.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddA(x,d))},
$S:7}
B.ddA.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ddE.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddz(x,d))},
$S:7}
B.ddz.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ddv.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.ddw.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ddx.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.ddy.prototype={
$1(d){return this.a.d.NJ(0,A.dx(0,0,0,C.h.U(d),0,0))},
$S:6}
B.def.prototype={
$0(){var x=this.a.a
return B.rU(x.c,x.d)},
$S:2046}
B.deg.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.deh.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dei.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dej.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dek.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dem.prototype={
$0(){var x=this.a
x.m(new B.del(x))},
$S:0}
B.del.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.deb.prototype={
$1(d){return this.a.RI(this.b)},
$S:12}
B.dec.prototype={
$1(d){return this.a.RH(this.b)},
$S:12}
B.de3.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.de4.prototype={
$0(){return this.a.r=!0},
$S:0}
B.de5.prototype={
$1(d){return D.hEL},
$S:z+25}
B.dea.prototype={
$2(d,e){if(d)B.Wo()},
$S:130}
B.de6.prototype={
$0(){return this.a.abc(this.b)},
$S:0}
B.de7.prototype={
$0(){return this.a.ab9(this.b)},
$S:0}
B.de8.prototype={
$0(){return this.a.afA(this.b)},
$S:0}
B.de9.prototype={
$0(){return this.a.a2T(this.b)},
$S:0}
B.ddu.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.dee.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.ded(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ded.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfn.prototype={
$1(d){return C.a.Z(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.cfo.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfm.prototype={
$2(d,e){return this.bnG(d,e)},
bnG(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wp(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2047}
B.fFl.prototype={
$1(d){if(d===D.aao&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fFm.prototype={
$0(){},
$S:11}
B.fFX.prototype={
bpg(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fsH(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hsC(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpg(d,e)},
$S:822}
B.fFW.prototype={
$1(d){var x=this
d.b=new B.fFV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fFV.prototype={
$1(d){return this.bpf(d)},
bpf(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1K(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.W.aP(0,n,null)
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
return A.b(B.fsH(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
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
return A.b(B.a8m(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aBy.prototype,"gcka","Rg",0)
x(v,"gcl1","JX",0)
x(v,"gckx","yN",0)
x(v=B.aFz.prototype,"gccq","afy",0)
x(v,"gccr","a_Z",0)
x(v,"gczV","ajs",0)
x(v=B.aFC.prototype,"gccs","a0_",0)
x(v,"gczW","a3d",0)
x(B.aFA.prototype,"gcct","afz",0)
x(B.aBx.prototype,"gccy","ccz",4)
x(v=B.aFB.prototype,"gcky","a1a",0)
x(v,"gcyv","cyw",4)
x(v,"gb5_","aAZ",0)
x(v,"gcBq","ajS",0)
x(v,"gbTy","YL",0)
x(v,"gccx","ET",0)
x(B.aBz.prototype,"gb8M","a3c",0)
x(B.aBw.prototype,"gccA","a00",0)
x(v=B.aBC.prototype,"gb3I","ciN",4)
x(v,"gccu","afC",0)
x(v=B.aBA.prototype,"gcxs","a2Z",0)
x(v,"gb1F","afB",0)
w(B.aBv.prototype,"gazx","azy",8)
x(v=B.aBB.prototype,"gcnj","ahD",0)
x(v,"gbT1","ac0",0)
w(v,"gazx","azy",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aJ,[B.cta,B.aaK,B.avR,B.aEc,B.aHn,B.jD,B.adh,B.byI,B.FP,B.YC])
w(B.ctb,B.cta)
w(B.b6R,B.aaK)
x(A.k8,[B.ct6,B.ct7,B.ct8,B.ct5,B.ct9,B.ctc,B.ctd,B.cte,B.ctf,B.ctg,B.cth,B.cti,B.ctj,B.fyE,B.fYn,B.fYp,B.fYo,B.fYC,B.fYD,B.fBj,B.ddK,B.ddM,B.ddL,B.ddP,B.fDg,B.fDK,B.ceS,B.ceZ,B.cf_,B.ceV,B.ceT,B.ceW,B.ceX,B.fYA,B.fYB,B.e0H,B.e0Q,B.e0O,B.e0P,B.fvG,B.fBv,B.fBw,B.cfg,B.fBy,B.fFJ,B.fzI,B.fzJ,B.cfl,B.h2R,B.ddJ,B.ddH,B.e0D,B.e_z,B.e_F,B.e_Y,B.e_E,B.e04,B.e0o,B.e0p,B.e0q,B.e_W,B.e0d,B.e0c,B.e0e,B.e0f,B.e0g,B.e0i,B.e0j,B.e0b,B.e_H,B.e_I,B.e_D,B.e_Z,B.e_Q,B.e_O,B.e03,B.e0n,B.e0A,B.e0B,B.ddF,B.ddG,B.de2,B.de1,B.ddX,B.ddV,B.ddT,B.ddW,B.ddY,B.ddU,B.ddC,B.ddD,B.ddE,B.ddy,B.deb,B.dec,B.de5,B.cfn,B.cfo,B.fFl,B.fFW,B.fFV])
w(B.b6S,B.avR)
x(A.lR,[B.fYm,B.ddN,B.ddO,B.fDe,B.fDf,B.fDJ,B.e_w,B.e0F,B.e0G,B.e0E,B.e0I,B.e0J,B.e0K,B.e0L,B.e0M,B.e0N,B.e_x,B.e_y,B.fBx,B.ddI,B.e00,B.e01,B.e_A,B.e_B,B.e_G,B.e0r,B.e0s,B.e_V,B.e05,B.e_K,B.e_X,B.e0h,B.e06,B.e07,B.e08,B.e09,B.e0a,B.e_J,B.e_C,B.e0_,B.e_T,B.e_M,B.e_R,B.e_S,B.e_U,B.e_L,B.e02,B.e0k,B.e0l,B.e0m,B.e0y,B.e0z,B.e0u,B.e0v,B.e0t,B.e0w,B.e0x,B.ddZ,B.de_,B.de0,B.ddQ,B.ddS,B.ddR,B.ddB,B.ddA,B.ddz,B.ddv,B.ddw,B.ddx,B.def,B.deg,B.deh,B.dei,B.dej,B.dek,B.dem,B.del,B.de3,B.de4,B.de6,B.de7,B.de8,B.de9,B.ddu,B.dee,B.ded,B.fFm])
x(A.ol,[B.adA,B.Ol,B.aaL,B.Pr,B.YB,B.Pq,B.FQ])
x(A.ag,[B.a_x,B.Wd,B.Wh,B.We,B.a_w,B.Wf,B.a_y,B.a_v,B.QI,B.a_A,B.a_u,B.a_B])
x(A.ah,[B.aBy,B.aFz,B.aFC,B.aFA,B.aBx,B.aFB,B.aBz,B.aBw,B.aBC,B.aBA,B.aBv,B.aBB])
x(A.av,[B.ae3,B.aBu,B.bgj,B.adB,B.adz,B.bgk])
x(A.lr,[B.ceY,B.ceU,B.cf1,B.cf2,B.fZB,B.e_P,B.e_N,B.e0C,B.dea,B.cfm,B.fFX])
x(A.jL,[B.blN,B.byk])})()
A.nf(b.typeUniverse,JSON.parse('{"b6R":{"aaK":[]},"b6S":{"avR":[]},"a_x":{"ag":[],"v":[]},"aBy":{"ah":["a_x"]},"ae3":{"av":[],"v":[]},"Wd":{"ag":[],"v":[]},"Wh":{"ag":[],"v":[]},"aFz":{"ah":["Wd"]},"aFC":{"ah":["Wh"]},"blN":{"jL":[]},"We":{"ag":[],"v":[]},"aFA":{"ah":["We"]},"a_w":{"ag":[],"v":[]},"Wf":{"ag":[],"v":[]},"adB":{"av":[],"v":[]},"a_y":{"ag":[],"v":[]},"a_v":{"ag":[],"v":[]},"QI":{"ag":[],"v":[]},"a_A":{"ag":[],"v":[]},"adz":{"av":[],"v":[]},"a_u":{"ag":[],"v":[]},"a_B":{"ag":[],"v":[]},"aBx":{"ah":["a_w"]},"byk":{"jL":[]},"aFB":{"ah":["Wf"]},"aBu":{"av":[],"v":[]},"bgj":{"av":[],"v":[]},"aBz":{"ah":["a_y"]},"aBw":{"ah":["a_v"]},"aBC":{"ah":["QI"]},"aBA":{"ah":["a_A"]},"aBv":{"ah":["a_u"]},"aBB":{"ah":["a_B"]},"bgk":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.aC
return{J:x("no"),k:x("MN()"),o:x("bq<q,q>"),F:x("zt"),g:x("aA<jD?>"),x:x("aA<~>"),V:x("R<ac>"),O:x("R<u>"),W:x("R<bk>"),Y:x("R<aa<q,Q>>"),t:x("R<aa<q,@>>"),r:x("R<jD>"),w:x("R<+file,name(mE,q)>"),u:x("R<cX>"),s:x("R<q>"),E:x("R<jL>"),a:x("R<e2>"),p:x("R<v>"),Z:x("R<H>"),G:x("bk"),A:x("cy<ah<ag>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bC<q,q>"),P:x("aa<q,@>"),f:x("aa<@,@>"),m:x("jY"),e:x("iAd"),af:x("F0"),U:x("jD"),b:x("cw"),C:x("aJ"),aK:x("yp"),ab:x("FP"),br:x("avR"),v:x("YC"),N:x("q"),X:x("bt<F>"),Q:x("mT"),D:x("e2"),aw:x("bl<q>"),cd:x("Y<aa<q,@>>"),c7:x("v"),ch:x("c7<ai<jD>>"),aW:x("c7<e2?>"),aY:x("c7<~>"),cx:x("adA"),b1:x("bn<ai<jD>>"),cf:x("bn<e2?>"),d4:x("bn<~>"),c4:x("aEc"),bG:x("aHn"),q:x("nG"),B:x("pU<FP>"),c6:x("pU<aaL>"),y:x("Q"),i:x("F"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("aa<q,@>?"),l:x("jD?"),R:x("aJ?"),c:x("YC?"),d:x("+answerQr,transfer(q,aA<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Ol,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e2?"),cm:x("adh?"),bk:x("aEc?"),ag:x("aHn?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b75=new A.ax(C.aD,2,C.r,-1)
D.cax=new A.a7(C.a5,C.a9,C.x,C.a5M,null,null)
D.b8L=new A.n(null,null,null,C.mJ,null,D.cax,C.n)
D.bag=new A.n(null,null,null,C.mJ,null,C.Is,C.n)
D.agY=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ais=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aju=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alf=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fQ7=new A.B("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h42=new A.B("Share the access code and member password with your team. They only sign in once.",null,C.Fd,null,null,null,null,null,null,null,null,null)
D.dnu=x([D.fQ7,C.am,D.h42],y.p)
D.bzp=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dnu,null)
D.h8y=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fUF=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fd,null,null,null,null,null,null,null,null,null)
D.dEW=x([D.h8y,C.am,D.fUF],y.p)
D.bzz=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dEW,null)
D.h4I=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fYD=new A.B("Enter the access code and password from your organization.",null,C.Fd,null,null,null,null,null,null,null,null,null)
D.dCE=x([D.h4I,C.am,D.fYD],y.p)
D.bzJ=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCE,null)
D.bG_=new A.P(16,10,16,28)
D.bG7=new A.P(16,14,16,4)
D.bHn=new A.P(20,0,20,16)
D.bHU=new A.P(20,8,20,16)
D.ao7=new A.P(24,22,24,20)
D.a3J=new A.a_(63394,"MaterialIcons",!1)
D.arf=new A.a_(63515,"MaterialIcons",!1)
D.bVi=new A.a_(983813,"MaterialIcons",!1)
D.bSq=new A.a_(62867,"MaterialIcons",!1)
D.bWe=new A.ae(D.bSq,44,C.c,null,null,null)
D.bXj=new A.ae(C.kb,null,C.ab,null,null,null)
D.bYH=new A.ae(C.jv,18,null,null,null,null)
D.c_v=new A.ae(D.a3J,26,C.c,null,null,null)
D.c05=new A.ae(C.Dr,null,null,null,null,null)
D.c0H=new A.ae(C.Dz,null,null,null,null,null)
D.c1T=new A.ae(L.a3U,null,null,null,null,null)
D.c2e=new A.ae(C.hR,16,null,null,null,null)
D.c5U=new A.ae(C.to,16,null,null,null,null)
D.bWw=new A.ae(C.mk,null,null,null,null,null)
D.c6M=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1e=new A.ae(C.HI,null,null,null,null,null)
D.c6R=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c1e,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bWR=new A.ae(C.DC,null,null,null,null,null)
D.c71=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cWz=x([C.fq,C.b2,C.aD],y.O)
D.ccu=new A.a7(C.ay,C.aC,C.x,D.cWz,null,null)
D.cVY=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.St=x([C.fq,C.aD],y.O)
D.SK=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dwF=x([C.mR,C.aD],y.O)
D.erD={iceServers:0}
D.aMS={urls:0}
D.dIQ=new A.bq(D.aMS,["stun:stun.l.google.com:19302"],y.o)
D.dIP=new A.bq(D.aMS,["stun:stun1.l.google.com:19302"],y.o)
D.dcL=x([D.dIQ,D.dIP],A.aC("R<aa<q,q>>"))
D.dHW=new A.bq(D.erD,[D.dcL],A.aC("bq<q,@>"))
D.Jz=new B.Ol(0,"lanDirect")
D.U6=new B.Ol(1,"cloudStash")
D.dVL=new B.Ol(2,"inlineInstant")
D.U7=new B.Ol(3,"webrtcLink")
D.Ax=new B.Ol(4,"videoCloud")
D.h41=new A.B("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLE=x([C.at1,C.ae,D.h41],y.p)
D.fip=new A.c8(C.aM,C.b9,C.i,C.l,null,C.p,null,0,D.cLE,null)
D.ez7=new A.D(C.co,D.fip,null)
D.fGu=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.IX,null,null,null)
D.fQH=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fGu,null,C.K,null,null,null,null,null,null,null)
D.eyi=new A.D(C.CR,D.fQH,null)
D.beQ=new A.cj(C.z,null,null,D.eyi,null)
D.eFp=new A.cK(0,null,0,28,null,null,D.beQ,null)
D.eFJ=new B.aaL(0,"RTCDataChannelConnecting")
D.aSl=new B.aaL(1,"RTCDataChannelOpen")
D.aSm=new B.aaL(3,"RTCDataChannelClosed")
D.eFK=new B.FQ(0,"RTCIceConnectionStateNew")
D.eFL=new B.FQ(1,"RTCIceConnectionStateChecking")
D.eFM=new B.FQ(2,"RTCIceConnectionStateCompleted")
D.eFN=new B.FQ(3,"RTCIceConnectionStateConnected")
D.eFO=new B.FQ(4,"RTCIceConnectionStateCount")
D.eFP=new B.FQ(5,"RTCIceConnectionStateFailed")
D.eFQ=new B.FQ(6,"RTCIceConnectionStateDisconnected")
D.aSn=new B.FQ(7,"RTCIceConnectionStateClosed")
D.aSo=new B.YB(0,"RTCIceGatheringStateNew")
D.eFR=new B.YB(1,"RTCIceGatheringStateGathering")
D.aao=new B.YB(2,"RTCIceGatheringStateComplete")
D.aap=new B.Pq(0,"RTCPeerConnectionStateClosed")
D.aSp=new B.Pq(1,"RTCPeerConnectionStateFailed")
D.aSq=new B.Pq(2,"RTCPeerConnectionStateDisconnected")
D.aSr=new B.Pq(3,"RTCPeerConnectionStateNew")
D.aSs=new B.Pq(4,"RTCPeerConnectionStateConnecting")
D.aSt=new B.Pq(5,"RTCPeerConnectionStateConnected")
D.eFS=new B.Pr(0,"RTCSignalingStateStable")
D.eFT=new B.Pr(1,"RTCSignalingStateHaveLocalOffer")
D.eFU=new B.Pr(2,"RTCSignalingStateHaveRemoteOffer")
D.eFV=new B.Pr(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eFW=new B.Pr(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSu=new B.Pr(5,"RTCSignalingStateClosed")
D.fnv=new A.au(160,48)
D.bg5=new A.fi(2,null,null,null,null,C.aD,null,null,null,null)
D.fp4=new A.a5(16,16,D.bg5,null)
D.fU_=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fqz=new A.b0(D.fU_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0H=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fqD=new A.b0(D.h0H,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9B=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fqK=new A.b0(D.h9B,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTA=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fr9=new A.b0(D.fTA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4T=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVC=new A.b0(D.h4T,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6k=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.b0(D.h6k,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hb4=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.frU=new A.b0(D.hb4,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h90=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new A.b0(D.h90,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haf=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new A.b0(D.haf,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fS9=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new A.b0(D.fS9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2B=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.b0(D.h2B,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWj=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fua=new A.b0(D.fWj,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hb9=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fue=new A.b0(D.hb9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSp=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new A.b0(D.fSp,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fR3=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fuz=new A.b0(D.fR3,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNN=new A.B("NGMY DOC SHARE",null,C.aX1,null,null,null,null,null,null,null,null,null)
D.fPd=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fQf=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fV5=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fVt=new A.B("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fWu=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fX1=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZU=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h1K=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.h23=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2n=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h2Z=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h35=new A.B("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.h3u=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h6Q=new A.B("Share files & videos\nwith a scan.",null,C.aX4,null,null,null,null,null,null,null,null,null)
D.h79=new A.B("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hEL=new B.a_u(null)
D.adL=new B.adA(0,"docShare")
D.adM=new B.adA(1,"gate")
D.Xb=new B.adA(2,"gateNoIndividual")})();(function staticFields(){$.aQd=null
$.fqh=function(){var x=y.N
return A.T(x,x)}()
$.H4=A.T(y.N,y.D)
$.ahF=A.T(y.N,A.aC("mE"))
$.S5=A.T(y.N,y.D)
$.fqY=A.T(y.N,A.aC("adh"))
$.cff=A.T(y.S,A.aC("byI"))
$.hsB=1
$.ihp=null
$.iho=null
$.i8B=null
$.hgS=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iAI","hL7",()=>new B.ctb())
x($,"iyC","hl2",()=>C.a.q(A.bB(A.bB(A.bB(A.HD(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["nAQXsZR/1mst7nF81sU0qA7kf6s="]=a.current})($__dart_deferred_initializers__);