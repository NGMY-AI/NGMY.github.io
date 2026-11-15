((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crU:function crU(){},
hZD(d){var x=null,w=new B.b68(d,D.eyY,new A.pR(x,x,y.c6),new A.pR(x,x,y.B))
w.bCc(d)
return w},
b68:function b68(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crP:function crP(d){this.a=d},
crQ:function crQ(d){this.a=d},
crR:function crR(d){this.a=d},
crO:function crO(d){this.a=d},
crS:function crS(d){this.a=d},
hZE(d,e){var x=y.N
x=new B.b69(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCd(d,e)
return x},
b69:function b69(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crV:function crV(d){this.a=d},
crW:function crW(d){this.a=d},
crX:function crX(d){this.a=d},
crY:function crY(d){this.a=d},
crZ:function crZ(d){this.a=d},
cs_:function cs_(d){this.a=d},
cs0:function cs0(d){this.a=d},
cs1:function cs1(d){this.a=d},
hdG(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wT.GQ(x,"ngmy_doc_share_v1",new B.fws(),1)},
i5o(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.wT(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
Sg(d,e){return B.ils(d,e)},
ils(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sg=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPv
x=7
return A.b(o==null?$.aPv=B.hdG():o,$async$Sg)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mk(s,"blobs","readwrite")
C.iA.mc(J.mj(q,"blobs"),r,d)
x=8
return A.b(J.ow(q),$async$Sg)
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
return A.i($async$Sg,w)},
Sf(d){return B.ilr(d)},
ilr(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPv
x=7
return A.b(o==null?$.aPv=B.hdG():o,$async$Sf)
case 7:s=f
r=J.mk(s,"blobs","readonly")
x=8
return A.b(C.iA.xL(J.mj(r,"blobs"),d),$async$Sf)
case 8:q=f
x=9
return A.b(J.ow(r),$async$Sf)
case 9:o=B.i5o(q)
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
return A.i($async$Sf,w)},
ai5(d){return B.ilq(d)},
ilq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ai5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPv
x=7
return A.b(p==null?$.aPv=B.hdG():p,$async$ai5)
case 7:s=f
r=J.mk(s,"blobs","readwrite")
C.iA.Gm(J.mj(r,"blobs"),d)
x=8
return A.b(J.ow(r),$async$ai5)
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
return A.i($async$ai5,w)},
fws:function fws(){},
i83(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqX(w,v))}return u},
hEK(d,e){var x,w={},v=A.aYb("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fVU(w,v,e)
C.wV.z8(v,"change",new B.fVW(w,v,!1))
C.wV.z8(v,"cancel",new B.fVV(w))
$.eX.mD()
v.click()
A.bP(C.akR,new B.fVT(w),y.H)},
fVU:function fVU(d,e,f){this.a=d
this.b=e
this.c=f},
fVW:function fVW(d,e,f){this.a=d
this.b=e
this.c=f},
fVV:function fVV(d){this.a=d},
fVT:function fVT(d){this.a=d},
DL(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DL=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUw()?3:4
break
case 3:x=5
return A.b(B.hzy(e,d,s,!0,!1,f,g,h,!1,i),$async$DL)
case 5:x=1
break
case 4:x=6
return A.b(B.RU(d,s,f,g,h,i),$async$DL)
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
return A.b(B.Jp(s,d),$async$DL)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.frY(s,d),$async$DL)
case 14:x=12
return A.b(r.hzy(q,p,o,n,m,l,k,j,a1,i),$async$DL)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ec(new B.fW8(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ec(new B.fW9(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DL,w)},
RU(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RU=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0T(e),$async$RU)
case 3:u=k
x=4
return A.b(B.aqC(d,e,!1),$async$RU)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jp(e,d),$async$RU)
case 7:if(k){v=D.acw
x=1
break}x=8
return A.b(B.Wa(e),$async$RU)
case 8:v=t?D.Wx:D.acx
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0R(d,e)){v=D.acw
x=1
break}x=11
return A.b(B.Wa(e),$async$RU)
case 11:v=t?D.Wx:D.acx
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h8C(d,e)){v=D.acw
x=1
break}x=14
return A.b(B.Wa(e),$async$RU)
case 14:v=D.Wx
x=1
break
case 13:v=t?D.Wx:D.acx
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
frY(d,e){var x=0,w=A.j(y.y),v
var $async$frY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0R(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0T(d),$async$frY)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frY,w)},
hzy(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ec(new B.fz8(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
huw(d,e,f,g,h,i,j){return new B.a_n(e,j,d,g,h,i,f,null)},
fB2(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fB2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fB5(A.S(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fB2)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fB2,w)},
fBx(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fBx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fBz(A.S(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fBx)
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
return A.i($async$fBx,w)},
hdR(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bt(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fOn(d,e){var x=0,w=A.j(y.H),v
var $async$fOn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wa(e),$async$fOn)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fOn,w)},
fW8:function fW8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fW9:function fW9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adn:function adn(d,e){this.a=d
this.b=e},
fz8:function fz8(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_n:function a_n(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAY:function aAY(){this.c=this.a=this.d=null},
dcm:function dcm(d,e){this.a=d
this.b=e},
dcj:function dcj(d){this.a=d},
dcl:function dcl(d){this.a=d},
dck:function dck(d){this.a=d},
dco:function dco(){},
dcn:function dcn(d){this.a=d},
adQ:function adQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDB:function aDB(d,e){this.a=d
this.b=e},
aGJ:function aGJ(d,e,f){this.a=d
this.b=e
this.c=f},
fB5:function fB5(d,e,f){this.a=d
this.b=e
this.c=f},
fB3:function fB3(d){this.a=d},
fB4:function fB4(d,e,f){this.a=d
this.b=e
this.c=f},
fBz:function fBz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBy:function fBy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdE(d,e,f,g,h){return B.hUu(d,e,f,g,h)},
hUu(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdE=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dM(d,new B.cdF(s,e,h,g,f,q),y.g),y.l),$async$cdE)
case 3:r=p.aT(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdE,w)},
b0O(d,e,f,g,h){return B.hUv(d,e,f,g,h)},
hUv(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0O=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aw6("GET",d)
o=A.h52()
if(o==null)o=new A.MF(A.a([],y.W))
x=7
return A.b(o.f8(0,s).dh(0,C.GC),$async$b0O)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CS(),$async$b0O)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cm(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0O,w)},
b0N(d){return B.hUs(d)},
hUs(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.on),$async$b0N)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.md(A.mb(p.e)).cJ(0,p.w),null)
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
return A.i($async$b0N,w)},
cdD(d){return B.hUt(d)},
hUt(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.qy),$async$cdD)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.md(A.mb(q.e)).cJ(0,q.w)
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
return A.i($async$cdD,w)},
cdF:function cdF(d,e,f,g,h,i){var _=this
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
Jn(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hUA(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jn(C.a.b2(t,u.length))}return null},
hUB(d){var x=B.Jn(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hUw(){var x,w=$.ot(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a7X(d){return B.hUx(d)},
hUx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a7X)
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
return A.i($async$a7X,w)},
a7Y(d,e){return B.hUy(d,e)},
hUy(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7Y=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cM,null),$async$a7Y)
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
return A.i($async$a7Y,w)},
Cl(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cl)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jn(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7Z(r),$async$Cl)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7X("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cl)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jn(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cl)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hUw()
x=14
return A.b(B.a7Z(m),$async$Cl)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7Y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 15:k=f
x=16
return A.b(B.a7Y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cl)
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
return A.i($async$Cl,w)},
a7Z(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jn(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7X("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7Z)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Z,w)},
a8_(d,e,f,g){return B.hUC(d,e,f,g)},
hUC(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8_=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jn(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7Z(r),$async$a8_)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.cdL())>1048576||g.aV(d,new B.cdM())){v=B.Fl(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8a("myCode",d,a0),$async$a8_)
case 4:u=a3
try{t=C.Y.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cr(s)||J.ad(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fl(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0W(u,g.gI(d),a0),$async$a8_)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ot().az(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dM(d,new B.cdN(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0P(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8_)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8_,w)},
Fl(d,e,f,g,h){return B.hUz(d,e,f,g,h)},
hUz(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fl=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cG(a6,0,new B.cdH())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ot().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cN.az(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jr(a9,q)
a0=new A.Lf(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fl)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.po(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abC(a1.a,a4,"media",a1.d,a2).xI(m,n,new A.EA(!0,q.c)),$async$Fl)
case 12:J.c7(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fl)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aS7(r),$async$Fl)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dM(a6,new B.cdI(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0P(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fl)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aS7(r),$async$Fl)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fl,w)},
b0P(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7X(t),$async$b0P)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cdG(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7Y(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0P,w)},
Oh(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oh=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7X("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oh)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cr(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aT(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b0Q(k,a0),$async$Oh)
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
return A.b(B.b0V(h),$async$Oh)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wh(g,a0),$async$Oh)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdJ(),q),n)
d=A.C(new A.Y(r,new B.cdK(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7Y("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oh)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oh,w)},
b0Q(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cr(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aT(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
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
break}i=B.ipm(k,j)
C.d.v(s,i)
x=5
return A.b(B.DJ(l,m,"Received via My Code",t,e,i),$async$b0Q)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aS7(s),$async$b0Q)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Q,w)},
cdL:function cdL(){},
cdM:function cdM(){},
cdN:function cdN(){},
cdH:function cdH(){},
cdI:function cdI(){},
cdG:function cdG(){},
cdJ:function cdJ(){},
cdK:function cdK(){},
fW5(d,e){var x=0,w=A.j(y.H)
var $async$fW5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ec(new B.fW6(e),!1,null,y.H)),$async$fW5)
case 2:return A.h(null,w)}})
return A.i($async$fW5,w)},
bFV(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ec(new B.fW7(g,e,f),!1,null,y.y)),$async$bFV)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFV,w)},
fW6:function fW6(d){this.a=d},
fW7:function fW7(d,e,f){this.a=d
this.b=e
this.c=f},
W7:function W7(d,e){this.c=d
this.a=e},
aEX:function aEX(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dYU:function dYU(d,e){this.a=d
this.b=e},
Wb:function Wb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aF_:function aF_(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d){this.a=d},
e_4:function e_4(d){this.a=d},
e_1:function e_1(d,e){this.a=d
this.b=e},
e_5:function e_5(d){this.a=d},
e_6:function e_6(d){this.a=d},
e_7:function e_7(d,e){this.a=d
this.b=e},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_9:function e_9(d,e){this.a=d
this.b=e},
e_a:function e_a(d){this.a=d},
e_d:function e_d(){},
e_b:function e_b(d){this.a=d},
e_c:function e_c(d,e){this.a=d
this.b=e},
bl2:function bl2(){},
W8:function W8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEY:function aEY(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dYV:function dYV(d){this.a=d},
dYW:function dYW(d){this.a=d},
h8D(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hUE(d){var x=d.l3
if(x>=0)return x
return 4.99},
hUD(d){var x=d.m5,w=y.N
w=x.jq(x,new B.cdP(),w,w)
return w},
hpy(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdQ(),w,w)
return w},
b0T(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b0T)
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
return A.i($async$b0T,w)},
a81(d,e){var x=0,w=A.j(y.H),v,u
var $async$a81=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a81)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a81)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a81,w)},
Wa(d){var x=0,w=A.j(y.H),v,u
var $async$Wa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wa)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wa)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wa,w)},
h8C(d,e){var x,w,v
if(B.hUE(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hUD(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b0R(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hpy(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hpz(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hpy(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqD(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqD)
case 7:s=f
r=A.w(p)
r=A.el(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aqD,w)},
aqE(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqD(d),$async$aqE)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqE)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqE,w)},
aqC(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h8D(d)
if(u<=0){v=!1
x=1
break}if(B.h8C(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqD(e),$async$aqC)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqC,w)},
b0S(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jp(e,d),$async$b0S)
case 3:if(g){v=-1
x=1
break}u=B.h8D(d)
if(u<=0){v=-1
x=1
break}if(B.h8C(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqD(e),$async$b0S)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0S,w)},
cdS(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jp(e,d),$async$cdS)
case 3:if(h){v=!1
x=1
break}v=B.aqC(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdS,w)},
cdR(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdR=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdS(d,u,i.gUw()),$async$cdR)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdR,w)},
a80(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a80=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUw()){v=!0
x=1
break}if(B.b0R(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.TO),$async$a80)
case 5:x=k?3:4
break
case 3:B.hpz(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a80)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.le(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TO,"Doc Share for Organizations"),$async$a80)
case 7:if(!k){v=!1
x=1
break}B.hpz(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a80)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a80,w)},
cdP:function cdP(){},
cdQ:function cdQ(){},
fWZ(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fWZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fWZ)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fol.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.fol.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWZ,w)},
ise(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fol.br($.fol,new B.fX0(d))},
fX0:function fX0(d){this.a=d},
fpX(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fpX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],f))
s.toString
u=A.n5(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.jn,null,y.H),$async$fpX)
case 3:C.Bc.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mD()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpX,w)},
ah_(d,e,f){var x=0,w=A.j(y.H),v
var $async$ah_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fp0.n(0,d,new B.ad4(A.bq(e,!0,v)))
x=3
return A.b(A.aA(),$async$ah_)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.Y.aw(A.I(["parts",e,"size",f],v,y.C),null)),$async$ah_)
case 2:return A.h(null,w)}})
return A.i($async$ah_,w)},
agU(d){return B.ia3(d)},
ia3(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fp0.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$agU)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b8(s,new B.ftx(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ad4(r)
$.fp0.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agU,w)},
RK(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sg(d,u),$async$RK)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RK,w)},
aPS(d){return B.ia1(d)},
ia1(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sf(d),$async$aPS)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aPS)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aN(r)
x=!J.cr(q)?9:10
break
case 9:B.RK(d,q)
x=11
return A.b(J.h9(s,d),$async$aPS)
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
return A.i($async$aPS,w)},
i5R(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cd(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cd(A.wT(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
return A.f3(null,y.K)},
a2S(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fzk(r,t),!1,s)
A.fB(r,"error",new B.fzl(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.NQ,new B.fzm())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2S,w)},
aQb(d,e,f){return B.icq(d,e,f)},
icq(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQb=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2S(i),$async$aQb)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sg(o,p),$async$aQb)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c7(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ah_(k,j,s),$async$aQb)
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
return A.i($async$aQb,w)},
aQa(d,e,f){return B.icp(d,e,f)},
icp(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQa=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQb(d,e,f),$async$aQa)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2S(f),$async$aQa)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S0.n(0,s,r)
x=11
return A.b(B.RK(s,r),$async$aQa)
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
return A.i($async$aQa,w)},
Cm(d,e,f,g,h,i){return B.hUN(d,e,f,g,h,i)},
hUN(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cm=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cN.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b0Z(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RK(s,d),$async$Cm)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cm)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cP.gcu().aN(d)),$async$Cm)
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
return A.b(B.Bj(e),$async$Cm)
case 12:j=a2
J.c7(j,m)
x=13
return A.b(B.Hg(e,j),$async$Cm)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cm,w)},
Wc(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wc=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bj(d),$async$Wc)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cN.az(99999)
n=p.b
l=o.type
l.toString
k=B.hpB(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b0Z(),null)
$.ahp.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2S(o),$async$Wc)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S0.n(0,h,g)
B.RK(h,g)
x=9
break
case 10:x=11
return A.b(B.aQa(d,m,o),$async$Wc)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wc)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wc,w)},
h8H(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h8H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hpB(r,C.d.gan(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jq(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cm(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8H,w)},
Jq(d,e,f,g,h,i){return B.hUM(d,e,f,g,h,i)},
hUM(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jq=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cN.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lf(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jq)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.fW(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.SO(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sg(k,l),$async$Jq)
case 11:J.c7(q,k);++p
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
return A.b(j.a1(0),$async$Jq)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sg(k,new Uint8Array(A.cd(n))),$async$Jq)
case 15:J.c7(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ah_(r,q,g),$async$Jq)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b0Z(),null)
x=17
return A.b(B.Bj(d),$async$Jq)
case 17:e=a6
J.c7(e,f)
x=18
return A.b(B.Hg(d,e),$async$Jq)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jq,w)},
We(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$We=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahp.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2S(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agU(s),$async$We)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sf(u[o]),$async$We)
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
v=A.wT(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S0.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rU(d,e),$async$We)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S0.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wT(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$We,w)},
hpB(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gan(x):""
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
rU(d,e){return B.hUO(d,e)},
hUO(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S0.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahp.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2S(s),$async$rU)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S0.n(0,f,r)
B.RK(f,r)
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
return A.b(B.agU(f),$async$rU)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azL(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sf(g[l]),$async$rU)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apT()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S0.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPS(f),$async$rU)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S0.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.We(a0,a1,0,g),$async$rU)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cd(i))
$.H6.n(0,f,h)
$.S0.n(0,f,h)
B.RK(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rU,w)},
hUR(d){var x,w,v=$.ahp.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hUS(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hUP(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqK(d,e,f,g,h){return B.hUQ(d,e,f,g,h)},
hUQ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqK=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahp.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2S(s),$async$aqK)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rU(g,e),$async$aqK)
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
return A.b(n.iB(d).xI(h,r,new A.EA(!0,e.c)),$async$aqK)
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
return A.i($async$aqK,w)},
hpD(d,e,f,g,h){var x,w,v,u,t=$.hpC
$.hpC=t+1
x=Date.now()
w=""+1000*x+"_"+C.cN.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ce2.n(0,t,new B.bxU(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azL(u)))
return t},
h8I(d){var x=0,w=A.j(y.H)
var $async$h8I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8I,w)},
Jr(d,e){var $async$Jr=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahp.h(0,h)
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
return A.qv(B.We(d,e,p,o<q?o:q),$async$Jr,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qv(A.GE(n),$async$Jr,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qv(B.agU("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jr,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qv(B.Sf(h[l]),$async$Jr,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qv(A.GE(k),$async$Jr,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qv(B.rU(d,e),$async$Jr,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qv(A.GE(A.wT(j,p,o<i?o:i)),$async$Jr,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qv(null,0,w)
case 2:return A.qv(t.at(-1),1,w)}})
var x=0,w=A.hyr($async$Jr,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hAe(w)},
b10(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b10=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ce2.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5F(),$async$b10)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b10,w)},
Wd(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ce2.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5F(),$async$Wd)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ah_(r.c,u,r.z),$async$Wd)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b0Z(),null)
u=r.a
x=5
return A.b(B.Bj(u),$async$Wd)
case 5:s=f
J.c7(s,t)
x=6
return A.b(B.Hg(u,s),$async$Wd)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wd,w)},
a87(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a87=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ce2.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ai5(u[s]),$async$a87)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a87,w)},
ce4(d,e,f){var x=0,w=A.j(y.H)
var $async$ce4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCV(d,e,f),$async$ce4)
case 2:return A.h(null,w)}})
return A.i($async$ce4,w)},
ce5(d,e,f){var x=0,w=A.j(y.H)
var $async$ce5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCW(d,e,f),$async$ce5)
case 2:return A.h(null,w)}})
return A.i($async$ce5,w)},
Fm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bj(d),$async$Fm)
case 2:p=g
J.nT(p,new B.ce3(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahp.W(0,e)
x=3
return A.b(B.agU(v),$async$Fm)
case 3:u=g
$.fp0.W(0,v)
x=4
return A.b(A.aA(),$async$Fm)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fm)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fm)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ai5(s[q]),$async$Fm)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ai5(v),$async$Fm)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fm)
case 14:return A.h(null,w)}})
return A.i($async$Fm,w)},
b1_(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rU(d,e),$async$b1_)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fpX(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1_,w)},
Bj(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bj)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fzn(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bj,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fDz(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.Y.aw(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bCV(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bCV)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxy(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG0(f))
x=4
return A.b(B.Hg(d,u),$async$bCV)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCV,w)},
bCW(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bCW)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxz(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOs(f))
x=4
return A.b(B.Hg(d,u),$async$bCW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCW,w)},
ad4:function ad4(d){this.a=d},
ftx:function ftx(){},
fzk:function fzk(d,e){this.a=d
this.b=e},
fzl:function fzl(d){this.a=d},
fzm:function fzm(){},
ce3:function ce3(d){this.a=d},
bxU:function bxU(d,e,f,g,h,i,j,k,l){var _=this
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
fzn:function fzn(){},
fDz:function fDz(){},
fxy:function fxy(d){this.a=d},
fxz:function fxz(d){this.a=d},
a88(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a88=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.ce8())?3:4
break
case 3:x=5
return A.b(B.b11(d,e),$async$a88)
case 5:u=g
if(u!=null){t=u.c
B.Oj(d,u.b,e,t)}v=u
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
return A.b(B.b0X(s),$async$a88)
case 10:case 9:if(g){v=new A.R5(1,D.Tr,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wf(d,e),$async$a88)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wk(!0,!0,d,e),$async$a88)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oj(d,D.Ag,e,t)
v=new A.R5(p,D.Ag,t)
x=1
break}v=B.ce7(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
Wf(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8a(null,d,e),$async$Wf)
case 3:p=g
try{u=C.Y.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cr(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0W(p,d.length,e),$async$Wf)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ce5(e,C.d.gH(d).a,r.b),$async$Wf)
case 7:case 6:q=r.a
x=8
return A.b(B.Oj(d,D.Tr,e,q),$async$Wf)
case 8:v=new A.R5(d.length,D.Tr,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
Wg(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mK(D.n6)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a89(d,e),$async$Wg)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ce0(s,d,e,t),$async$Wg)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0X(t),$async$Wg)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rU(e,d),$async$Wg)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wf(A.a([d],y.r),e),$async$Wg)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
Wi(){var x=0,w=A.j(y.H)
var $async$Wi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h8B(),$async$Wi)
case 2:x=3
return A.b(B.aSt(),$async$Wi)
case 3:return A.h(null,w)}})
return A.i($async$Wi,w)},
a89(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a89=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0Z()
x=3
return A.b(B.ce4(e,d.a,u),$async$a89)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
Oj(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oj=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tr&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a89(p,f),$async$Oj)
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
return A.b(B.ce_(o,p,u,f),$async$Oj)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ce0(o,p,f,t),$async$Oj)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdZ(o,u,p,f),$async$Oj)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
b11(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b11=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ce6(e,d),$async$b11)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wk(!1,!0,d,e),$async$b11)
case 4:u=g
if(u!=null){t=u.b
v=new A.R5(u.a,D.Ag,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b11,w)},
ce6(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ce6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.We(d,s,0,1),$async$ce6)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.J)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce6,w)},
ce7(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ce7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8a(null,d,e),$async$ce7)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hpA(u)
if(t.length>800){v=null
x=1
break}v=new A.R5(d.length,D.dPj,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce7,w)},
aqL(d,e,f){return B.hUV(d,e,f)},
hUV(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqL=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nr(g,1)
x=B.h8G(g)?3:4
break
case 3:x=5
return A.b(B.ce1(g),$async$aqL)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nr(g,13))
try{k=B.Fn(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nr(g,13))
u=9
x=12
return A.b(B.b0V(q),$async$aqL)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wh(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h8F(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wh(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Js(C.a.i(J.nr(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Js(C.a.i(J.nr(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Js(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wh(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqL,w)},
Js(d,e,f){return B.hUT(d,e,f)},
hUT(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Js=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0N(r),$async$Js)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0N(A.cD(s,0,null)),$async$Js)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdE(o,r,a1,n,a2),$async$Js)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cdD(q),$async$Js)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wh(l,a2),$async$Js)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cr(m)?null:m
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
return A.i($async$Js,w)},
a8a(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rU(f,r),$async$a8a)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cP.gcu().aN(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.aw(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
Wh(d,e){return B.hUU(d,e)},
hUU(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wh=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Y.aQ(0,a2,null)
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
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cI.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cm(i,a3,d,k,l,o),$async$Wh)
case 9:h=a5
if(h!=null)J.c7(n,h)
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
return A.i($async$Wh,w)},
Oi:function Oi(d,e){this.a=d
this.b=e},
ce8:function ce8(){},
a2r(d){var x=A.S(d).ax.a===C.J,w=x?D.ai5:D.afD,v=x?D.ajT:C.c,u=x?C.aP:C.U,t=x?C.bK:C.am,s=x?D.ah2:C.aO
return new A.aHY([w,s,v,u,t,x?C.fo:C.bR])},
hFB(d,e){var x=e?C.w.j(0.72):C.aV
return A.cg(null,x,!0,null,new B.h0g(e),d,null,!0,!0,y.N)},
cdO(d,e,f,g,h,i,j,k,l){return new B.W9(e,l,d,f,k,j,g,h,i,null)},
a_p(d,e,f,g,h,i,j){return new B.bfB(g,h,j,e,i,d,f,null)},
h0g:function h0g(d){this.a=d},
a_m:function a_m(d,e){this.c=d
this.a=e},
aAX:function aAX(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dci:function dci(d){this.a=d},
dcg:function dcg(d){this.a=d},
dch:function dch(d){this.a=d},
bxw:function bxw(){},
W9:function W9(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEZ:function aEZ(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_0:function e_0(d){this.a=d},
dZo:function dZo(d,e){this.a=d
this.b=e},
dZp:function dZp(d,e){this.a=d
this.b=e},
dYY:function dYY(d,e,f){this.a=d
this.b=e
this.c=f},
dYX:function dYX(d){this.a=d},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d,e,f){this.a=d
this.b=e
this.c=f},
dZ2:function dZ2(d){this.a=d},
dZP:function dZP(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d){this.a=d},
dZl:function dZl(d,e,f){this.a=d
this.b=e
this.c=f},
dZi:function dZi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZ1:function dZ1(d){this.a=d},
dZt:function dZt(d){this.a=d},
dZs:function dZs(){},
dZ7:function dZ7(d){this.a=d},
dZM:function dZM(d,e){this.a=d
this.b=e},
dZN:function dZN(d,e){this.a=d
this.b=e},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZF:function dZF(d,e){this.a=d
this.b=e},
dZB:function dZB(d){this.a=d},
dZA:function dZA(d){this.a=d},
dZC:function dZC(){},
dZD:function dZD(){},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZG:function dZG(){},
dZH:function dZH(d){this.a=d},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZu:function dZu(d){this.a=d},
dZv:function dZv(d){this.a=d},
dZw:function dZw(d){this.a=d},
dZx:function dZx(d){this.a=d},
dZy:function dZy(d){this.a=d},
dZ4:function dZ4(){},
dZ5:function dZ5(d){this.a=d},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d,e,f){this.a=d
this.b=e
this.c=f},
dZm:function dZm(d){this.a=d},
dZn:function dZn(d,e,f){this.a=d
this.b=e
this.c=f},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZc:function dZc(d){this.a=d},
dZ9:function dZ9(d,e,f){this.a=d
this.b=e
this.c=f},
dZd:function dZd(d){this.a=d},
dZe:function dZe(d){this.a=d},
dZf:function dZf(){},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZa:function dZa(d){this.a=d},
dZ8:function dZ8(d,e,f){this.a=d
this.b=e
this.c=f},
dZb:function dZb(){},
dZr:function dZr(d){this.a=d},
dZq:function dZq(d,e){this.a=d
this.b=e},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZI:function dZI(d){this.a=d},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
dZK:function dZK(d){this.a=d},
dZY:function dZY(d){this.a=d},
dZW:function dZW(d){this.a=d},
dZX:function dZX(d){this.a=d},
dZZ:function dZZ(){},
e__:function e__(d,e){this.a=d
this.b=e},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZT:function dZT(d,e,f){this.a=d
this.b=e
this.c=f},
dZR:function dZR(d,e,f){this.a=d
this.b=e
this.c=f},
dZU:function dZU(d,e){this.a=d
this.b=e},
dZV:function dZV(d,e){this.a=d
this.b=e},
aAU:function aAU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfA:function bfA(d,e,f){this.c=d
this.d=e
this.a=f},
dce:function dce(){},
dcf:function dcf(){},
ado:function ado(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcC:function dcC(){},
dcB:function dcB(d){this.a=d},
a_o:function a_o(d,e,f){this.c=d
this.d=e
this.a=f},
aAZ:function aAZ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dcy:function dcy(d){this.a=d},
dcz:function dcz(d,e,f){this.a=d
this.b=e
this.c=f},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcw:function dcw(d,e){this.a=d
this.b=e},
dcu:function dcu(d){this.a=d},
dcs:function dcs(d){this.a=d},
dcp:function dcp(d){this.a=d},
dcv:function dcv(d){this.a=d},
dcr:function dcr(d){this.a=d},
dcx:function dcx(d){this.a=d},
dct:function dct(d){this.a=d},
dcq:function dcq(d){this.a=d},
a_l:function a_l(d,e,f){this.c=d
this.d=e
this.a=f},
aAW:function aAW(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcb:function dcb(d){this.a=d},
dca:function dca(d,e){this.a=d
this.b=e},
dcc:function dcc(d){this.a=d},
dc9:function dc9(d,e){this.a=d
this.b=e},
dcd:function dcd(d){this.a=d},
dc8:function dc8(d,e){this.a=d
this.b=e},
dc4:function dc4(d){this.a=d},
dc5:function dc5(d){this.a=d},
dc6:function dc6(d,e){this.a=d
this.b=e},
dc7:function dc7(d){this.a=d},
QE:function QE(d,e,f){this.c=d
this.d=e
this.a=f},
aB1:function aB1(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcP:function dcP(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dcR:function dcR(d){this.a=d},
dcS:function dcS(d){this.a=d},
dcT:function dcT(d,e){this.a=d
this.b=e},
dcU:function dcU(d){this.a=d},
dcW:function dcW(d){this.a=d},
dcV:function dcV(d){this.a=d},
a_q:function a_q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB_:function aB_(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
dcD:function dcD(d,e,f){this.a=d
this.b=e
this.c=f},
dcE:function dcE(d){this.a=d},
dcF:function dcF(){},
dcK:function dcK(){},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcH:function dcH(d,e){this.a=d
this.b=e},
dcI:function dcI(d,e){this.a=d
this.b=e},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
adm:function adm(d,e){this.c=d
this.a=e},
dc3:function dc3(d){this.a=d},
a_k:function a_k(d){this.a=d},
aAV:function aAV(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_r:function a_r(d,e){this.c=d
this.a=e},
aB0:function aB0(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dcO:function dcO(d){this.a=d},
dcN:function dcN(d){this.a=d},
bfB:function bfB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hUW(){var x,w=$.ot(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.he(v)},
Ok(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ok=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Ok)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Ok)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ok,w)},
a8b(d){return B.hUX(d)},
hUX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8b)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$a8b)
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
return A.i($async$a8b,w)},
Wj(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ok(),$async$Wj)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8b(s),$async$Wj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wj,w)},
Wk(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wk)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cea(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hUW()
t=A.U(u).k("N<1,a9<m,aE>>")
r=A.C(new A.N(u,new B.ceb(s),t),t.k("ak.E"))
x=6
return A.b(B.Ok(),$async$Wk)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8b(q),$async$Wk)
case 7:x=8
return A.b(B.a8c(r,u,g,s),$async$Wk)
case 8:v=new A.brr(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
aqM(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ok(),$async$aqM)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqM,w)},
cec(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cec=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ok(),$async$cec)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cec,w)},
a8c(d,e,f,g){return B.hUY(d,e,f,g)},
hUY(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8c=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqK("media",r,new B.ce9(s,e,g),f,q),$async$a8c)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wj(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8c)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wj(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8c)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wj(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8c)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8c,w)},
Fn(d,e,f){return B.hUZ(d,e,f)},
hUZ(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fn=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fn)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqM(b3),$async$Fn)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iM,null,g),$async$Fn)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqM(b3),$async$Fn)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ok(),$async$Fn)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cr(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a7(a7)
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
b0=A.po(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abC(a8.a,b0,"media",a8.d,a9).Dd(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b0O(k,n,o,s,b7),$async$Fn)
case 17:j=c0
if(j!=null){J.c7(p,j);++q
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
break}a7=g.gR(g)
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
a8=A.po(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abC(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fn)
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
a0=A.dO(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8b(e),$async$Fn)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fn,w)},
cea:function cea(){},
ceb:function ceb(d){this.a=d},
ce9:function ce9(d,e,f){this.a=d
this.b=e
this.c=f},
aSt(){var x=0,w=A.j(y.H),v,u
var $async$aSt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i53=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aSt)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aSt)
case 3:u=$.he3
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aSt)
case 4:$.he3=$.iec=$.ied=null
return A.h(null,w)}})
return A.i($async$aSt,w)},
fDa(d){var x=0,w=A.j(y.H),v,u
var $async$fDa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9b){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fDb(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.ic,new B.fDc()),$async$fDa)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fDa,w)},
iea(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hUG(x):x},
he7(d){var x=0,w=A.j(y.T),v,u,t
var $async$he7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.aqO(u)
x=1
break}v=B.h8F(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$he7,w)},
he6(d){var x=0,w=A.j(y.T),v,u,t
var $async$he6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.aqP(u)
x=1
break}v=B.h8F(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$he6,w)},
fWI(d){var x=0,w=A.j(y.T),v
var $async$fWI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqP(d),$async$fWI)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWI,w)},
bDO(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.he6(d),$async$bDO)
case 3:q=f
if(q==null){x=1
break}t=C.Y.aQ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDO,w)},
fqO(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fqO=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wd(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cm(d.apT(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqO,w)},
Hi(d,e,f){return B.igD(d,e,f)},
igD(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.he7(a1),$async$Hi)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Y.aQ(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a7(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hHB().aGh(D.dDf,null),$async$Hi)
case 4:l=d.he3=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azL(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fDM(f,k,new B.fDN(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8I(0,new B.Ys(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amj(0),$async$Hi)
case 7:x=6
return A.b(d.a8A(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fDa(l),$async$Hi)
case 8:x=9
return A.b(l.aqF(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iea(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.aw(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqQ(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hpA(h)
case 11:v=new A.bqH(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fDb:function fDb(d){this.a=d},
fDc:function fDc(){},
fDN:function fDN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDM:function fDM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDL:function fDL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iiI(d){switch(d){case"new":return D.eyZ
case"checking":return D.ez_
case"connected":return D.ez1
case"completed":return D.ez0
case"failed":return D.ez3
case"disconnected":return D.ez4
case"closed":return D.aQR
case"count":return D.ez2}return D.aQR},
iiJ(d){switch(d){case"new":return D.aQS
case"gathering":return D.ez5
case"complete":return D.a9b}return D.aQS},
itN(d){switch(d){case"stable":return D.ez6
case"have-local-offer":return D.ez7
case"have-local-pranswer":return D.ez9
case"have-remote-offer":return D.ez8
case"have-remote-pranswer":return D.eza
case"closed":return D.aQY}return D.aQY},
irW(d){switch(d){case"new":return D.aQV
case"connecting":return D.aQW
case"connected":return D.aQX
case"closed":return D.a9c
case"disconnected":return D.aQU
case"failed":return D.aQT}return D.a9c},
aay:function aay(d,e){this.a=d
this.b=e},
Po:function Po(d,e){this.a=d
this.b=e},
Yr:function Yr(d,e){this.a=d
this.b=e},
Pn:function Pn(d,e){this.a=d
this.b=e},
FR:function FR(d,e){this.a=d
this.b=e},
crT:function crT(){},
haq(d){var x=new B.FQ()
x.a=d
x.b=!0
return x},
FQ:function FQ(){this.b=this.a=$},
aax:function aax(){},
avh:function avh(){},
Ys:function Ys(d,e){this.a=d
this.b=e},
h8B(){var x=0,w=A.j(y.H)
var $async$h8B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8B,w)},
h8E(d,e,f){var x=0,w=A.j(y.T),v
var $async$h8E=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mK(D.n6))){v=null
x=1
break}v=B.fWZ(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8E,w)},
hpA(d){var x,w=F.af1.a5o(C.dT.aN(d),null)
if(w.length===0){x=C.dT.aN(d)
return C.cP.gcu().aN(x)}return C.cP.gcu().aN(w)},
hUF(d){var x,w,v=C.cI.aN(d)
try{x=C.ca.cJ(0,F.af0.bfX(v,!1))
return x}catch(w){x=C.ca.cJ(0,v)
return x}},
h8F(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hUF(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cJ(0,C.cI.aN(x))
return v}catch(u){return x}}return null},
hUG(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.a_(t,"a=extmap"))continue
if(C.a.a_(t,"a=ssrc"))continue
if(C.a.a_(t,"a=msid"))continue
if(C.a.a_(t,"a=rtcp"))continue
if(C.a.a_(t,"a=rtpmap"))continue
if(C.a.a_(t,"a=fmtp"))continue
if(C.a.a_(t,"a=rtcp-fb"))continue
if(C.a.a_(t,"a=mid:"))continue
if(C.a.a_(t,"a=group:"))continue
if(C.a.a_(t,"a=setup:"))continue
if(C.a.a_(t,"a=ice-options:"))continue
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aO(s,"\n")},
hUH(){var x,w=$.ot(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b0U(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b0U)
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
return A.i($async$b0U,w)},
cdT(d,e){return B.hUI(d,e)},
hUI(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cM,null),$async$cdT)
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
return A.i($async$cdT,w)},
b0X(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0U(d),$async$b0X)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0X,w)},
b0W(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0W=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hUH()
r=C.a.i(f)
t=C.dT.aN(s)
x=3
return A.b(B.cdT(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0W)
case 3:if(!h){v=null
x=1
break}v=new A.a1r("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0W,w)},
b0V(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0U(o),$async$b0V)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cJ(0,C.cI.aN(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0V,w)},
cdU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEL("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cM),$async$cdU)
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
return A.i($async$cdU,w)},
b0Y(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jo(),$async$b0Y)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Y,w)},
aqH(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqH)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0Y(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqH,w)},
aqF(d,e){var x=0,w=A.j(y.H)
var $async$aqF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqF)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqF)
case 2:return A.h(null,w)}})
return A.i($async$aqF,w)},
a83(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a83=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a83)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jo(),$async$a83)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a82(s),$async$a83)
case 5:x=6
return A.b(B.aqF(f,u),$async$a83)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a83,w)},
a84(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a84=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a84)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jo(),$async$a84)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.al(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqF(g,q),$async$a84)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a82(u),$async$a84)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a84,w)},
a85(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a85=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a85)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jo(),$async$a85)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b0R(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a85)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.Y.aw(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a85)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a85,w)},
cdV(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cdV)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aQ(0,r,null)
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
return A.i($async$cdV,w)},
Jp(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdV(d),$async$Jp)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0Y(t),$async$Jp)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqG(d),$async$Jp)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0R(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqG(d),$async$Jp)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jp,w)},
aqG(d){var x=0,w=A.j(y.H)
var $async$aqG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqG)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqG)
case 2:return A.h(null,w)}})
return A.i($async$aqG,w)},
b0Z(){var x,w=$.ot(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a86(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h8G(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdY(d){return B.hUK(d)},
hUK(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a86(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cdY)
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
return A.i($async$cdY,w)},
aqJ(d,e){return B.hUL(d,e)},
hUL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a86(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cM,null),$async$aqJ)
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
return A.i($async$aqJ,w)},
ce_(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ce_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a86(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqJ(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ce_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ce_,w)},
cdZ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a86(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqJ(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdZ,w)},
ce0(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ce0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a86(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqJ(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce0,w)},
ce1(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ce1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h8G(d)){v=null
x=1
break}x=3
return A.b(B.cdY(d),$async$ce1)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a7(u)
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
return A.i($async$ce1,w)},
a8d(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8d=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8d)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8d)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8d,w)},
aqN(d){return B.hV_(d)},
hV_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$aqN)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$aqN)
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
return A.i($async$aqN,w)},
aqO(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqO)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8d(),$async$aqO)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cJ(0,C.cI.aN(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqN(s),$async$aqO)
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
return A.i($async$aqO,w)},
aqQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$aqQ)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8d(),$async$aqQ)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dT.aN(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqN(u),$async$aqQ)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqQ,w)},
aqP(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqP)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8d(),$async$aqP)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cJ(0,C.cI.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqP,w)},
apI(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apI=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.ql)){v=null
x=1
break}x=3
return A.b(p.mf(e),$async$apI)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hj),$async$apI)
case 7:q=g
o=q
o=o==null?null:J.eT(J.w1(o))
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
return A.i($async$apI,w)},
ipm(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fV_(d){return B.ipo(d)},
ipo(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fV_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Lq(d,3600),$async$fV_)
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
return A.i($async$fV_,w)},
DJ(d,e,f,g,h,i){var x=null
return B.ipl(d,e,f,g,h,i)},
ipl(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DJ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hpD(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h8I(r),$async$DJ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fV_(o),$async$DJ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a87(r),$async$DJ)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aUs)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MF(A.a([],g))
x=15
return A.b(d.f8(0,A.aw6("GET",A.cD(n,0,null))).dh(0,C.GC),$async$DJ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a87(r),$async$DJ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lf(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DJ)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b10(r,k),$async$DJ)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DJ)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.Wd(r)
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
return A.b(B.a87(r),$async$DJ)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DJ,w)},
aS7(d){return B.ipn(d)},
ipn(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aS7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aS7)
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
return A.i($async$aS7,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[159]
O=c[47]
F=c[264]
I=c[151]
P=c[234]
E=c[227]
G=c[94]
Q=c[197]
R=c[152]
S=c[232]
K=c[269]
L=c[277]
B=a.updateHolder(c[22],B)
D=c[275]
T=c[196]
M=c[217]
U=c[73]
V=c[258]
W=c[79]
X=c[62]
N=c[93]
Y=c[276]
B.crU.prototype={
aGh(d,e){return this.cPX(d,e)},
cPX(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cv(t)))
t=J.k(u)
v=B.hZE(C.cP.gcu().aN(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGh,w)}}
B.b68.prototype={
bCc(d){var x=this,w=x.w
w.onclose=A.hp(new B.crP(x))
w.onopen=A.hp(new B.crQ(x))
w.onmessage=A.hp(new B.crR(x))
w.onbufferedamountlow=A.hp(new B.crS(x))},
gd6(d){return this.x},
aix(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aix=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.haq(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aix)
case 8:v=t.haq(s.aoS(f,0,null))
x=1
break
case 7:case 4:v=B.haq(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aix,w)}}
B.b69.prototype={
bCd(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crV(x)))
w.addEventListener("icecandidate",A.hp(new B.crW(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crX(x)))
w.onicegatheringstatechange=A.hp(new B.crY(x))
w.addEventListener("signalingstatechange",A.hp(new B.crZ(x)))
if(!$.hi3())w.addEventListener("connectionstatechange",A.hp(new B.cs_(x)))
w.addEventListener("negotiationneeded",A.hp(new B.cs0(x)))
w.addEventListener("track",A.hp(new B.cs1(x)))},
amj(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ki(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amj)
case 3:t=f
v=new B.Ys(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amj,w)},
a8A(d,e){return this.br8(0,e)},
br8(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8A)
case 2:return A.h(null,w)}})
return A.i($async$a8A,w)},
a8I(d,e){return this.brt(0,e)},
brt(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8I)
case 2:return A.h(null,w)}})
return A.i($async$a8I,w)},
aqF(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Ys(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqF,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adn.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_n.prototype={
S(){return new B.aAY()},
gd1(){return this.c}}
B.aAY.prototype={
Y(){this.a4()
this.af6()},
af6(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0S(u.e,u.c),$async$af6)
case 2:t=e
if(v.c!=null)v.m(new B.dcm(v,t))
return A.h(null,w)}})
return A.i($async$af6,w)},
QW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqC(t.e,t.c,!1),$async$QW)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fjX)
x=1
break}x=4
return A.b(B.a81(u.a.c,"individual"),$async$QW)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6Y(A.ec(new B.dcj(u),!1,null,y.H)),$async$QW)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QW,w)},
JM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fB2(o),$async$JM)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a85(o.e,r,s,q),$async$JM)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fgX)
x=1
break}x=5
return A.b(B.a81(u.a.c,"member"),$async$JM)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6Y(A.ec(new B.dcl(u),!1,null,y.H)),$async$JM)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JM,w)},
yF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a80(t.e,o,t.f,t.r,t.w,s),$async$yF)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a81(u.a.c,"org_owner"),$async$yF)
case 4:x=5
return A.b(B.aqH(u.a.c),$async$yF)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fBx(o),$async$yF)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a83(s,t,o,q.c),$async$yF)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fgU)
x=1
break}x=10
return A.b(B.aqH(u.a.c),$async$yF)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6Y(A.ec(new B.dck(u),!1,null,y.H)),$async$yF)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yF,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J,q=r?C.jB:C.ql,p=B.h8D(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dO,y.m).w
w=A.l(28)
v=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.h6,24)],y.V)
u=y.p
v=A.r(s,A.x(A.a([A.r(s,D.fDU,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.he,s,s,s),C.aB,D.fXS,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.n(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.c9m,C.n),s,s,s,s,C.ez,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m_(new B.dco(),s),C.T,v,C.e0,A.d(w,s,s,s,s,s,s,A.n(s,s,r?C.c:C.U,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.v(w,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.n(s,s,r?C.aT:C.am,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.v(w,A.a([new B.adQ(C.f5,C.aDp,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcj6(),s),C.af],u))
w.push(new B.adQ(C.pu,C.a4R,"Team Member","Sign in with your organization access code + password",t.gcjY(),s))
w.push(C.af)
w.push(new B.adQ(C.apt,C.a6t,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjt(),s))
return A.c4(s,q,A.bm(!0,A.ce(A.x(w,C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.adQ.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aI(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eJ(A.A(A.a([A.r(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nf,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.n(s,s,A.S(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.zd,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.j,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDB.prototype={}
B.aGJ.prototype={}
B.jD.prototype={
mK(d){var x=this.b,w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garm(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ad(x/1024,1)+" KB"
if(x<1073741824)return C.i.ad(x/1048576,1)+" MB"
return C.i.ad(x/1073741824,2)+" GB"},
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
bfq(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOs(d){return this.bfq(null,d)},
aG0(d){return this.bfq(d,null)}}
B.W7.prototype={
S(){return new B.aEX(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEX.prototype={
Y(){this.a4()
this.af7()},
af7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cl(u.a.c),$async$af7)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dYU(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af7,w)},
af8(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fF(new A.fx(s)),$async$af8)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fkS)
case 1:return A.h(v,w)}})
return A.i($async$af8,w)},
a_z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apI(s.d,4),$async$a_z)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_my_code_"+m+".png"),$async$a_z)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_z,w)},
aiZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abb("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiZ,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===C.J,n=o?C.jB:C.ql,m=o?C.c:C.U,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.n(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m2
else if(q.e==null)x=A.as(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.n(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.n(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aF.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.L(C.aF.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.n(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.r(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.n(p,p,m,p,p,p,p,p,p,p,K.a5i,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.n(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.j,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.am5,p,p,1/0)
v=A.l(20)
u=A.a([new A.ac(0,C.G,C.aF.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.ce(A.x(A.a([x,C.nc,w,C.l2,new A.en(A.r(p,A.qd(p,p,!1,B.hUB(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.n(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l2,A.A(A.a([A.E(A.es(N.D9,C.VU,q.gcbz(),p),1),C.au,A.E(A.dh(C.zC,C.abu,q.gcbA(),A.bp(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.j,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3C,D.fTq,q.gcyM(),p),p)],r),C.l,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.amC,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wb.prototype={
S(){return new B.aF_(new A.au(C.aw,$.aw()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aF_.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jn(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.t()
this.a3()},
a_A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jn(u.d.a.a)
if(t==null){u.m(new B.e_2(u))
x=1
break}u.m(new B.e_3(u))
s=u.a
r=s.c
x=3
return A.b(B.a8_(s.d,new B.e_4(u),t,r),$async$a_A)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_5(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_A,w)},
a2P(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2P=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.e_6(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rU(r.a.c,q),$async$a2P)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_7(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiP(p,m,l,j,k),$async$a2P)
case 8:o=e
if(r.c!=null)r.m(new B.e_8(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.e_9(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e_a(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2P,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===C.J,i=j?D.ai5:D.afD,h=j?D.ajT:C.c,g=j?C.aP:C.U,f=j?C.bK:C.am,e=j?D.ah2:C.aO
i=[i,e,h,g,f,j?C.fo:C.bR]
x=A.S(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.n(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.r(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.r(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.r(k,A.A(A.a([A.r(k,D.bXF,C.f,k,k,new A.p(k,k,k,A.l(16),k,new A.a8(C.aA,C.aE,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.n(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.n(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.l,k,C.e,C.j,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.fs,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.n(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.n(k,k,i[3],k,k,k,k,k,k,k,K.a5i,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bl2()],y.E)
p=A.n(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.a_,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.Ob,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aF,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_b(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.n(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.n(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.L(i[1],C.r,1)
m=J.Mi(l.a.d,4)
m=A.C(new A.N(m,new B.e_c(x,new A.aHY(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lg,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.n(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.T,e,C.T,q,C.d8,p,C.T,A.r(k,A.x(m,C.l,k,C.e,C.j,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.l(14)
s=A.L(C.aF.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.ffr)
else q.push(A.X(C.lO,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.n(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.cT(k,A.A(q,C.l,k,C.e,C.j,0,k,k),k,k,C.b1,new A.p(u,k,s,t,k,k,C.n),C.iL,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.ce(A.x(e,C.al,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.bFe,k,k,C.ah),1)
u=l.f?k:l.gcyN()
t=i[3]
s=i[1]
q=A.l(16)
s=A.es(M.a3C,D.fUx,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.n(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbB()
t=A.bp(C.aF,k,k,0,C.c,k,C.nE,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ab,C.t,A.a([f,v,A.bm(!0,A.lC(new B.e_d(),A.x(A.a([e,new A.D(D.bEI,A.x(A.a([s,C.T,i,C.af,A.bJ(l.f?C.tC:D.fSK,k,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.l,k,C.e,C.j,0,C.p),C.cw,C.a_Q,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bl2.prototype={
oY(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hh(C.bB,v.length),C.aR)}}
B.W8.prototype={
S(){return new B.aEY()}}
B.aEY.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aR),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aR),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.aw,v)},
t(){var x,w=this,v=w.d
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
w.a3()},
af9(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dYV(r))
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
return A.b(B.a84(p,m,n,o,C.a.i(l).length===0?null:l),$async$af9)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fkt)
s=[1]
x=4
break}p.L(y.q).f.T(D.fj4)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dYW(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af9,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J?C.jB:C.ql,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fL5,s,s,s,1,s,!0),p=A.r(s,D.bwP,C.f,s,s,new A.p(s,s,s,A.l(22),s,E.I5,C.n),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.a_,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c3T,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.a_,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c3O,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.a_,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c43,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbC()
u=A.bp(C.aF,s,s,s,s,C.h7,s,s,s,s,s,s)
return A.c4(q,r,A.ce(A.x(A.a([p,C.d8,o,C.af,x,C.af,w,C.nc,A.bJ(t.r?C.tC:C.aXi,s,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.ad4.prototype={}
B.bxU.prototype={
a5F(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.apT()))
x=3
return A.b(B.Sg(t,s),$async$a5F)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5F,w)},
gd1(){return this.a}}
B.Oi.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_m.prototype={
S(){return new B.aAX(new A.au(C.aw,$.aw()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aAX.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dci(this))},
t(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.t()
this.a3()},
cbI(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2r(d),u=x.a.c,t=u?C.iF:v.a[2],s=u?C.c:v.a[3],r=u?C.aT:v.a[4],q=u?C.jB:v.a[0],p=A.l(24),o=A.L(C.aF.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aF.j(u?0.25:0.12),C.h6,32)],n),l=A.r(w,T.as8,C.f,w,w,new A.p(w,w,w,A.l(18),A.a([new A.ac(0,C.G,C.aF.j(0.4),C.cA,16)],n),C.asX,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.n(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.n(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.n(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxw()],y.E),g=A.n(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.a_,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.GQ,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b5t),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcg(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.o_,new B.dch(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.l(14)
n=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.cL,12)],n)
g=y.p
return A.eP(w,C.L,new A.cP(Q.LS,A.c2(new A.D(C.yS,A.x(A.a([l,C.aQ,k,C.T,j,C.e0,i,C.e0,A.A(A.a([f,C.au,A.E(A.c2(A.aI(!1,C.a3,!0,w,A.aP(!1,A.l(14),!0,D.esl,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbH(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.p(w,w,w,h,n,L.Q7,C.n),C.bj),2)],g),C.l,w,C.e,C.j,0,w,w)],g),C.l,w,C.e,C.P,0,C.p),w),new A.p(t,w,o,p,m,w,C.n),C.bj),w),w,w,w,C.Oi,C.d7,w,w,w)}}
B.bxw.prototype={
oY(d,e){return e.amd(e.a.toUpperCase())}}
B.W9.prototype={
S(){return new B.aEZ(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEZ.prototype={
Y(){var x=this
x.a4()
x.um()
x.w=A.df(C.jE,new B.e_0(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wi()
this.a3()},
a1H(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oh(u.a.c),$async$a1H)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bj(u.a.c),$async$a1H)
case 4:u.m(new s.dZo(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1H,w)},
um(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$um=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oh(u.a.c),$async$um)
case 3:t=e
x=4
return A.b(B.Bj(u.a.c),$async$um)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dZp(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O9(u.d)
B.Cl(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$um,w)},
O9(d){return this.bGf(d)},
bGf(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a89(r,u.a.c),$async$O9)
case 8:p=f
if(u.c==null){x=1
break}new B.dYY(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a_(r.c,"video/")||r.mK(D.n6))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wg(r,u.a.c),$async$O9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bj(u.a.c),$async$O9)
case 12:u.m(new o.dYZ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O9,w)},
Oy(d){return this.bMz(d)},
bMz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a89(d,u.a.c),$async$Oy)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZ3(u,d,t))
x=6
return A.b(A.fF(new A.fx(t)),$async$Oy)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fF(new A.fx(r.toUpperCase())),$async$Oy)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
un(d,e){return this.cJH(d,e)},
cJH(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$un=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZP(r,e))
u=3
x=6
return A.b(d.$0(),$async$un)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZQ(r))
$.eX.mD()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$un,w)},
gaXM(){var x=this.a
return x.f||x.r||x.w},
IF(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXM()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdR(s,n,r,q,o,t),$async$IF)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fOn(o,u.a.c),$async$IF)
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
return A.b(B.DL(s,o,r,q,n,t),$async$IF)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IF,w)},
a0L(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqH(u.a.c),$async$a0L)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ij("No organization portal found.")
x=1
break}t=J.a7(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).ce(A.ec(new B.dZl(u,r,q),!1,null,y.H)),$async$a0L)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0L,w)},
a1R(d){return this.csk(d)},
csj(){return this.a1R(1)},
csk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXM()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqE(u.a.c),$async$a1R)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1R,w)},
ad_(d,e,f){return this.c2z(d,e,f)},
c2z(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.un(new B.dZi(u,d,null,e,f),"Uploading\u2026"),$async$ad_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad_,w)},
bGo(){B.hEK(!1,new B.dZ1(this))
return},
cxn(){this.m(new B.dZt(this))},
aAw(){var x=0,w=A.j(y.H),v=this
var $async$aAw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGo()
return A.h(null,w)}})
return A.i($async$aAw,w)},
acW(){var x=0,w=A.j(y.H),v=this
var $async$acW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.un(new B.dZ7(v),"Importing\u2026"),$async$acW)
case 2:return A.h(null,w)}})
return A.i($async$acW,w)},
T1(d){return this.cJ0(d)},
cJ0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mK(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZM(u,d),!1,null,y.H)),$async$T1)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mK(D.S7)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ec(new B.dZN(u,d),!1,null,y.H)),$async$T1)
case 8:x=1
break
case 7:x=u.c3h(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ec(new B.dZO(u,d),!1,null,y.H)),$async$T1)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T1,w)},
c3h(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cSy,C.a.b2(x,w+1).toLowerCase())},
agH(d){return this.cja(d)},
cja(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mK(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZj(u,d),!1,null,y.H)),$async$agH)
case 5:x=1
break
case 4:u.m(new B.dZk(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agH,w)},
Sm(d){return this.cAg(d)},
cAg(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$Sm)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.un(new B.dZF(u,d),"Preparing QR\u2026"),$async$Sm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sm,w)},
ajo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZG(),A.U(t).k("N<1,m>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZH(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sm(r),$async$ajo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajo,w)},
ajh(d){return this.czO(d)},
czO(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2r(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZz(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajh)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T1(d)
break
case"qr":u.Sm(A.a([d],y.r))
break
case"send_my_code":u.cjN(A.a([d],y.r))
break
case"save":u.aiF(d)
break
case"delete":u.Jw(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
Yo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZ4(),A.U(t).k("N<1,m>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZ5(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$Yo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.un(new B.dZ6(u,r),"Preparing file\u2026"),$async$Yo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yo,w)},
ahM(d){return this.cqF(d)},
cqF(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hFB(d,!1),$async$ahM)
case 3:s=f
r=s==null
q=B.a86(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
agN(){var x=0,w=A.j(y.H),v=this,u
var $async$agN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fW5(u,v.a.c),$async$agN)
case 2:return A.h(null,w)}})
return A.i($async$agN,w)},
bGn(){B.hEK(!1,new B.dZ0(this,null))
return},
JL(d,e){return this.cjO(d,e)},
b3f(d){return this.JL(null,d)},
cjN(d){return this.JL(d,null)},
cjO(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZm(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xR.cq().aoZ(!0,C.a1E,!1),$async$JL)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.un(new B.dZn(l,s,r),"Preparing\u2026"),$async$JL)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ij("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ij("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFV(p,l,e,s.a.c),$async$JL)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JL,w)},
IV(d){return this.c2m(d)},
c2m(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hUA(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3f(t),$async$IV)
case 8:x=6
break
case 7:u.ij("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ij("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.un(new B.dZg(u,d),"Receiving video\u2026"),$async$IV)
case 11:x=1
break
case 10:x=12
return A.b(u.un(new B.dZh(u,d),"Receiving\u2026"),$async$IV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IV,w)},
EM(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DF()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahM(t),$async$EM)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IV(s),$async$EM)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.dZr(u),!1,null,y.N)),$async$EM)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.um(),$async$EM)
case 10:x=1
break
case 9:x=11
return A.b(u.IV(C.a.i(r)),$async$EM)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EM,w)},
aiF(d){return this.cvW(d)},
cvW(d){var x=0,w=A.j(y.H),v=this
var $async$aiF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.un(new B.dZq(v,d),"Saving\u2026"),$async$aiF)
case 2:return A.h(null,w)}})
return A.i($async$aiF,w)},
Jw(d){return this.bOU(d)},
bOU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jw)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdU(t),$async$Jw)
case 6:case 5:s=d.a
x=7
return A.b(B.Fm(u.a.c,s),$async$Jw)
case 7:u.r.W(0,s)
x=8
return A.b(u.um(),$async$Jw)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jw,w)},
aju(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aju=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2r(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZL(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aju)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agN()
break
case"import":u.acW()
break}case 1:return A.h(v,w)}})
return A.i($async$aju,w)},
cbF(d){var x=d.c
if(C.a.a_(x,"video/")||d.mK(D.n6))return C.qR
if(C.a.a_(x,"image/")||d.mK(D.S7))return C.uP
if(C.a.q(x,"pdf"))return E.PC
return D.apV},
B(d){var x,w,v=this,u=null,t=B.a2r(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.HZ,u,u,u,new B.dZW(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bYg,u,u,u,v.e?u:v.gcju(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxm()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bSs:E.aqk,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a3z,u,u,u,v.e?u:v.gcbG(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oH,u,u,u,v.e?u:v.gb4k(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c_1,u,u,u,v.e?u:new B.dZX(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m_(new B.dZY(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.r(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.S(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.r(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.S(d).ax.a===C.J?0.12:0.08),C.aF.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kp(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAU(C.jK,s,!0,t,w?u:v.gcAh(),u),1)
x.push(new A.D(D.bDu,A.lC(new B.dZZ(),A.A(A.a([s,C.au,A.E(new B.aAU(C.uQ,"Export",!1,t,w?u:v.gbSN(),u),1)],o),C.l,u,C.e,C.j,0,u,u),C.cw,C.iv,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfA(t,v.e?u:v.gb4k(),u)
else s=A.kq(!0,u,u,new B.e__(v,t),s,u,D.bDm,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ab,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAU.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aF,t,t,0,C.c,t,C.wl,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ch,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wl,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bfA.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.dce(),new A.D(E.a0K,A.x(A.a([A.lC(new B.dcf(),A.r(x,A.X(C.ze,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a8(C.aA,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e_,C.hG,x,x,new A.br(0.86,1,w),s),C.e0,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.n(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.n(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e0,A.dh(C.oH,D.fYb,this.d,A.bp(C.aF,x,x,x,C.c,x,C.Og,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cw,C.C8,x,x,new A.br(0,1,w),s),x,x,x)}}
B.ado.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aF.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.mK(D.n6))p=D.dsk
else{p=C.a.a_(p,"image/")||i.mK(D.S7)
n=y.O
p=p?A.a([C.cG,C.aF],n):A.a([C.aN.j(0.85),C.aF.j(0.7)],n)}p=A.r(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a8(C.aA,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.n(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garm()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mK(D.n6))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.ax,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.n(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cf))
if(!(!o||i.mK(D.n6)))l.push(A.h6m(C.aF,!1,j,j,j,!1,j,j,new B.dcB(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oz,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cf))
return A.lC(new B.dcC(),new A.D(C.em,A.aI(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0b,A.A(l,C.l,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bE("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_o.prototype={
S(){return new B.aAZ()},
gd1(){return this.c}}
B.aAZ.prototype={
Y(){this.a4()
this.yv()},
t(){B.hUP(this.e)
this.a3()},
yv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rU(o.c,o.d),$async$yv)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hUS(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hUR(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dcy(s))
x=1
break}s.m(new B.dcz(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dcA(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yv,w)},
a2O(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rU(t.c,t.d),$async$a2O)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fht)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiP(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2O)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2O,w)},
c2f(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kD(u,C.A,v,new B.dcw(w,t),C.hh,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dcx(w),C.hh,C.dB,!0,v,!1,v,v)
else return C.bL
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2r(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.n(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Da,u,u,u,v.gb86(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fu
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.n(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.n(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.dh(C.Da,D.fGi,v.gb86(),A.bp(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c2f()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_l.prototype={
S(){return new B.aAW(A.ajI(),C.bE,C.bE)},
gd1(){return this.c}}
B.aAW.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fA(w,A.a4(w).k("fA<1>")).iC(new B.dcb(v))
x.gcXz().iC(new B.dcc(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a4(x).k("fA<1>"))}if(x==null)x=C.bbE
x.iC(new B.dcd(v))
v.yv()},
yv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rU(p.c,p.d),$async$yv)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dc4(s))
x=1
break}x=8
return A.b(s.d.vq(0,new A.a4z(r,s.a.d.c)),$async$yv)
case 8:if(s.c==null){x=1
break}s.m(new B.dc5(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dc6(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yv,w)},
a_B(){var x=0,w=A.j(y.H),v=this,u
var $async$a_B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_B)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_B)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_B,w)},
aVA(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2r(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.n(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fu
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.n(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.r(o,D.bTs,C.f,o,o,new A.p(o,o,o,A.l(24),o,L.Q7,C.n),o,88,o,o,o,o,o,88)
t=A.kY(C.aF,o,o,m,0,new B.dc7(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVA(p.w)+" / "+p.aVA(p.x),o,o,o,o,o,o,A.n(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aF,o,o,o,o,D.fdT,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uS:C.hx,o,o,o,o,o)
x=A.x(A.a([u,C.l2,t,x,C.d8,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbJ(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qD,x,o),o,o,o),o,!1,!1,o,o)}}
B.QE.prototype={
S(){return new B.aB1()},
gd1(){return this.c}}
B.aB1.prototype={
Y(){this.a4()
this.Qe()},
Qe(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qe=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h8E(o.c,o.d,new B.dcP(s)),$async$Qe)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcQ(s))
x=1
break}s.e=r
q=O.ihy(r)
if(q==null){s.m(new B.dcR(s))
x=1
break}s.d=q
q.aW(0,s.gb32())
x=8
return A.b(q.iX(0).dh(0,C.rU),$async$Qe)
case 8:if(s.c==null){x=1
break}s.m(new B.dcS(s))
x=9
return A.b(q.qp(0),$async$Qe)
case 9:q.tY(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dcT(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qe,w)},
chJ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcU(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dv(0,x.gb32())
w=x.d
if(w!=null)w.t()
B.ise(x.e)
x.a3()},
afc(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1_(u.c,u.d),$async$afc)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afc,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2r(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.n(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aH(t,t,t,t,C.oG,t,t,t,u.gcbD(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fu
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.n(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajb(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.AP(s,t),A.az(t,A.zo(A.r(t,A.X(q?I.uS:C.hx,C.c,t,t,t,48),C.f,t,t,new A.p(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b1,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcW(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_q.prototype={
S(){return new B.aB_(new A.cw(null,y.A))}}
B.aB_.prototype={
gcJo(){var x,w,v=this.a
if(v.e!==D.Ts)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcIZ(){var x,w,v=this.a
if(v.e!==D.Ag)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJo()
if(x!=null){v.Rm(x)
v.e=A.df(R.GF,new B.dcL(v,x))}w=v.gcIZ()
if(w!=null){v.Rl(w)
v.f=A.df(C.fH,new B.dcM(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rl(d){return this.coS(d)},
coS(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqM(d),$async$Rl)
case 3:t=f
x=4
return A.b(B.cec(d),$async$Rl)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dcD(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rl,w)},
Rm(d){return this.coT(d)},
coT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fWI(d),$async$Rm)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDO(t),$async$Rm)
case 4:if(u.c==null){x=1
break}u.m(new B.dcE(u))
u.c.L(y.q).f.T(D.aU3)
case 1:return A.h(v,w)}})
return A.i($async$Rm,w)},
gc7u(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbE(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2A(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DF()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fkD)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ec(new B.dcF(),!1,null,y.N)),$async$a2A)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDO(s),$async$a2A)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aU3)
case 1:return A.h(v,w)}})
return A.i($async$a2A,w)},
aaP(d){return this.bMA(d)},
bMA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fF(new A.fx(C.d.aO(t,", "))),$async$aaP)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaP,w)},
afa(d){return this.bMi(d)},
bMi(d){var x=0,w=A.j(y.H),v=this
var $async$afa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fF(new A.fx(v.a.c)),$async$afa)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fhX)
return A.h(null,w)}})
return A.i($async$afa,w)},
a2u(d){return this.cvY(d)},
cvY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apI(s.d,4),$async$a2u)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_doc_share_qr.png"),$async$a2u)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2u,w)},
gaZ2(){var x,w=this.a
if(w.e!==D.J8)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaM(d){return this.bMt(d)},
bMt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ2()
if(t==null){x=1
break}x=3
return A.b(A.fF(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaM)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fjC)
case 1:return A.h(v,w)}})
return A.i($async$aaM,w)},
afb(){var x=0,w=A.j(y.H),v=this,u
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wi(),$async$afb)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afb,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2r(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.J8&&i!==D.Ts&&i!==D.Ag
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.n(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J8||t===D.Ts||t===D.Ag?l:A.aH(l,l,l,l,C.lo,l,l,l,m.gb14(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.L(C.aF.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qd(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7u(),l,l,l,l,l,l,A.n(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J8){t=C.aF.j(0.12)
o=A.l(20)
C.d.v(q,A.a([C.T,A.r(l,A.d(k,l,l,l,l,l,l,A.n(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gcbE(),l,l,l,l,l,l,A.n(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.n(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2W,D.fPV,new B.dcG(m,d),l)],p))}if(m.a.e===D.J8&&m.gaZ2()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.n(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c_n,D.fMt,new B.dcH(m,d),l)],p))
if(m.a.e===D.Ag){x=(m.w?C.dI:C.aF).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ad(C.i.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.T,A.r(l,A.d(o,l,l,l,l,l,l,A.n(l,l,m.w?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}if(m.a.e===D.Ts){x=(m.r?C.dI:C.aF).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.T,A.r(l,A.d(n,l,l,l,l,l,l,A.n(l,l,o?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l),C.af,A.dh(D.bVV,D.fT5,m.gcwk(),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oP(i,A.c4(v,w,new A.D(C.ad,A.x(A.a([A.E(A.r(l,A.x(q,C.l,l,C.bb,C.j,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D9,C.VU,new B.dcI(m,d),l),1),C.au,A.E(A.dh(C.zC,C.abu,new B.dcJ(m,d),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.j,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.AU,l,m.gb14(),A.bp(C.aN,l,l,l,l,C.h7,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.dcK(),y.C)}}
B.adm.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.n(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ce(A.x(A.a([w,C.aQ,A.r(x,A.qd(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bJ(C.AV,x,new B.dc3(d),x)],u),x,x,C.no,v,x,x,x,x,D.fFi,x)}}
B.a_k.prototype={
S(){return new B.aAV(A.zZ(C.yy,C.o5,C.v4))}}
B.aAV.prototype={
t(){this.d.t()
this.a3()},
az3(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c4(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fN0,x,x,x,1,x,!0),C.w,A.zY(this.d,C.c_,this.gaz2()),x,!1,!1,x,x)}}
B.a_r.prototype={
S(){return new B.aB0(A.zZ(C.yy,C.o5,C.v4))},
gd1(){return this.c}}
B.aB0.prototype={
c3j(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ML("text/plain"),$async$ah9)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fkx)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah9,w)},
abD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hFB(p,!0),$async$abD)
case 3:t=e
p=t==null
s=B.a86(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fh3)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abD,w)},
t(){this.d.t()
this.a3()},
az3(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3j(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.are,v,v,v,w.gbSg(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a3G,v,v,v,w.gcmd(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.uM:P.Pl,v,v,v,v,v),v,v,v,new B.dcO(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fU2,v,v,v,1,v,!0)
u=A.zY(w.d,C.c_,w.gaz2())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ab,C.t,A.a([u,A.as(A.r(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eyE],s),v),v,!1,!1,v,v)}}
B.bfB.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pi
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.l(12)
u=A.r(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.n(r,r,q?C.pi:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.n(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0R,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aay.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Po.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yr.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pn.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FR.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crT.prototype={}
B.FQ.prototype={}
B.aax.prototype={}
B.avh.prototype={}
B.Ys.prototype={}
var z=a.updateTypes(["aB<~>()","P(jD)","m(jD)","W9(Z)","~()","a_n(Z)","F(F,jD)","QE(Z)","~(mm)","ct(FQ)","aB<jD?>(@)","W7(Z)","Wb(Z)","D(jD)","jD(@)","a9<m,@>(jD)","a_m(Z)","W8(Z)","a_o(Z)","a_l(Z)","a_q(Z)","adm(Z)","ai<jD>()","a_r(Z)","ado(Z,F)","a_k(Z)","a9<m,aE>(jD)","ct(Yr)","ct(aax)","aB<ct>(FQ)"])
B.crP.prototype={
$1(d){var x=this.a
x.x=D.aQQ
x.y.J(0,D.aQQ)},
$S:75}
B.crQ.prototype={
$1(d){var x=this.a
x.x=D.aQP
x.y.J(0,D.aQP)},
$S:75}
B.crR.prototype={
$1(d){var x=this.a
x.aix(A.ahC(d.data)).bG(new B.crO(x),y.b)},
$S:75}
B.crO.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crS.prototype={
$1(d){},
$S:75}
B.crV.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hZD(d.channel))},
$S:16}
B.crW.prototype={
$1(d){},
$S:16}
B.crX.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iiI(w.iceConnectionState)
x.cx=w
if($.hi3())switch(w.a){case 0:x.cy=D.aQV
break
case 1:x.cy=D.aQW
break
case 3:x.cy=D.aQX
break
case 5:x.cy=D.aQT
break
case 6:x.cy=D.aQU
break
case 7:x.cy=D.a9c
break
default:break}},
$S:108}
B.crY.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iiJ(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.crZ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.itN(w.signalingState)},
$S:108}
B.cs_.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.irW(w.connectionState)},
$S:108}
B.cs0.prototype={
$1(d){},
$S:108}
B.cs1.prototype={
$1(d){},
$S:16}
B.fws.prototype={
$1(d){var x=y.F.a(new A.qs([],[]).nZ(d.target.result,!1)),w=C.wh.q(x.objectStoreNames,"blobs")
if(!w)C.we.Gh(x,"blobs")},
$S:179}
B.fVU.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wV.fq(this.b)
$.eX.mD()
this.c.$1(d)},
$S:447}
B.fVW.prototype={
$1(d){return this.a.$1(B.i83(this.b,this.c))},
$S:32}
B.fVV.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fVT.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fW8.prototype={
$1(d){var x=this
return B.huw(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fW9.prototype={
$1(d){var x=this
return B.huw(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fz8.prototype={
$1(d){var x=this
return B.cdO(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcm.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcj.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdO(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcl.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdO(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dck.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdO(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dco.prototype={
$4(d,e,f,g){var x=null
return A.k1(A.A(A.a([A.aH(x,x,x,x,D.bUw,x,x,x,new B.dcn(d),x,x,x,x,x,x),A.E(A.FC(D.RR,!0,x,!1,C.a2H,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.j,0,x,x),D.RR,x,g,C.amT,0,e,f)},
$C:"$4",
$R:4,
$S:417}
B.dcn.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fB5.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eQ,y.m).w,t=this.a,s=t?C.iF:C.c,r=A.l(28),q=A.r(v,D.bx7,C.f,v,v,D.b77,v,v,v,v,D.amJ,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.a_,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bYR,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.r(v,A.x(A.a([q,new A.D(C.GV,A.x(A.a([o,C.af,A.aM(v,C.a_,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aru,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dn,new B.fB3(d),v),1),C.au,A.E(A.bJ(D.fLt,v,new B.fB4(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.j,0,v,v)],w),C.l,v,C.e,C.j,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GI,v,v,v,v),v)},
$S:60}
B.fB3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fB4.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fid)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDB(v,x))},
$S:0}
B.fBz.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eQ,y.m).w,u=x.a,t=u?C.iF:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.r(w,A.x(A.a([A.r(w,D.bwY,C.f,w,w,D.b8B,w,w,w,w,D.amJ,w,w,1/0),new A.D(C.GV,A.x(A.a([A.aM(w,C.a_,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hdR(u,"Organization name",C.Hn,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.a_,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hdR(u,"Access code",C.nJ,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.a_,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hdR(u,"Member password",H.HU,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bJ(D.fU9,w,new B.fBy(r,q,p,d),A.bp(C.aF,w,w,w,w,C.h7,w,w,w,w,w,w))],o),C.l,w,C.e,C.j,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GI,w,w,w,w),w)},
$S:60}
B.fBy.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fii)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGJ(u,x,w))},
$S:0}
B.cdF.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a7(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cD(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vS(p,null).dh(0,C.a_P),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cm(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdL.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdM.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdN.prototype={
$1(d){return d.b},
$S:z+2}
B.cdH.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdI.prototype={
$1(d){return d.b},
$S:z+2}
B.cdG.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cdJ.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdK.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fW6.prototype={
$1(d){return new B.W7(this.a,null)},
$S:z+11}
B.fW7.prototype={
$1(d){return new B.Wb(this.a,this.b,this.c,null)},
$S:z+12}
B.dYU.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_2.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_3.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_4.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_1(x,d))},
$S:2}
B.e_1.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_5.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_6.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_7.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_8.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_9.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e_a.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_d.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.e_b.prototype={
$1(d){var x=this.a
return x.f?null:x.a_A()},
$S:2}
B.e_c.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mK(D.S7))s=C.uP
else s=C.a.a_(s,"video/")||d.mK(D.n6)?C.qR:D.apV
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.r(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.n(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garm(),v,v,v,v,v,v,A.n(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.l,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dYV.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dYW.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdP.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.cdQ.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.fX0.prototype={
$2(d,e){return e===this.a},
$S:297}
B.ftx.prototype={
$1(d){return J.k(d)},
$S:17}
B.fzk.prototype={
$1(d){var x=this.b
B.i5R(C.Ha.ga7i(this.a)).bG(x.gC1(x),y.H)},
$S:130}
B.fzl.prototype={
$1(d){return this.a.dd(0,null)},
$S:130}
B.fzm.prototype={
$0(){return null},
$S:12}
B.ce3.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzn.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
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
B.fDz.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fxy.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxz.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ce8.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mK(D.n6)},
$S:z+1}
B.h0g.prototype={
$1(d){return new B.a_m(this.a,null)},
$S:z+16}
B.dci.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dcg.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dch.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_0.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1H()},
$S:11}
B.dZo.prototype={
$0(){var x=J.bGZ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZp.prototype={
$0(){var x=J.bGZ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYY.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYX(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG0(this.c)}},
$S:0}
B.dYX.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYZ.prototype={
$0(){var x=J.bGZ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZ3.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZ2(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG0(this.c)}},
$S:0}
B.dZ2.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZP.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZQ.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZl.prototype={
$1(d){return new B.W8(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZi.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IF(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wc(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.um(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1R(s.gI(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ1.prototype={
$1(d){this.a.ad_(d,"No files selected.","Added")},
$S:447}
B.dZt.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dZs(),A.U(x).k("N<1,m>")))},
$S:0}
B.dZs.prototype={
$1(d){return d.a},
$S:z+2}
B.dZ7.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xR.cq().cZx(C.a1E,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jK(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ij("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqL(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cr(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.um(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZM.prototype={
$1(d){return new B.QE(this.a.a.c,this.b,null)},
$S:z+7}
B.dZN.prototype={
$1(d){return new B.a_o(this.a.a.c,this.b,null)},
$S:z+18}
B.dZO.prototype={
$1(d){return new B.a_l(this.a.a.c,this.b,null)},
$S:z+19}
B.dZj.prototype={
$1(d){return new B.QE(this.a.a.c,this.b,null)},
$S:z+7}
B.dZk.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZF.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IF(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a88(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csj(),$async$$0)
case 5:x=6
return A.b(p.um(),$async$$0)
case 6:r=A.U(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dZB(p),r),new B.dZC(),r.k("N<ak.E,m>")).bY(0,new B.dZD())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.dZE(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.py(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wi(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZB.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dZA(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dZA.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZC.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dZD.prototype={
$1(d){return d.length!==0},
$S:3}
B.dZE.prototype={
$1(d){var x=this.a
return new B.a_q(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZG.prototype={
$1(d){return d.a},
$S:z+2}
B.dZH.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZz.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.as(A.r(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.n(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garm(),v,v,v,v,v,v,A.n(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mK(D.n6)?C.t6:C.pA
p=!x||p.mK(D.n6)?"Play video":"View"
return A.c2(A.bm(!0,new A.D(C.Ci,A.x(A.a([q,o,t,C.aB,B.a_p(!1,u,!1,w,p,new B.dZu(d),v),B.a_p(!1,u,!1,C.jK,"Share via QR",new B.dZv(d),"Letters/numbers QR code"),B.a_p(!1,u,!1,D.a2M,"Send to their Code",new B.dZw(d),"Enter someone else's personal code"),B.a_p(!1,u,!1,C.i_,"Download / save",new B.dZx(d),v),C.an,B.a_p(!1,u,!0,C.ei,"Delete",new B.dZy(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),new A.p(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,v,v,C.n),C.bj)},
$S:727}
B.dZu.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dZv.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dZw.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dZx.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dZy.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dZ4.prototype={
$1(d){return d.a},
$S:z+2}
B.dZ5.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZ6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8a(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hk(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.py(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ0.prototype={
$1(d){var x=this.a
x.un(new B.dZ_(x,d,this.b),"Preparing\u2026")},
$S:447}
B.dZ_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wc(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFV(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZm.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZn.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h8H(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZg.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.dZc(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dZd(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZe(s))
case 5:x=8
return A.b(r.b.iI(0,C.GC,new B.dZf()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.um(),$async$$0)
case 9:s.ij("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZc.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZ9(x,d,e))},
$S:232}
B.dZ9.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZd.prototype={
$1(d){return new B.adm(this.a.a,null)},
$S:z+21}
B.dZe.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZf.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZh.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jn(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7Z(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3f(B.Jn(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqL(new B.dZa(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h8G(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.um(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dZb()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZa.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZ8(x,d,e))},
$S:232}
B.dZ8.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZb.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mK(D.n6)},
$S:z+1}
B.dZr.prototype={
$1(d){return new B.a_r(this.a.a.c,null)},
$S:z+23}
B.dZq.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1_(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZL.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aF.j(0.35)
return A.c2(A.bm(!0,new A.D(C.Ci,A.x(A.a([A.as(A.r(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.n(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_p(!0,w,!1,C.nJ,"My Code",new B.dZI(d),"Your personal code & QR \u2014 others send docs to you"),B.a_p(!1,w,!1,D.a2M,"Send to their Code",new B.dZJ(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_p(!1,w,!1,S.zt,"Import backup",new B.dZK(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),new A.p(u,x,new A.bH(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,x,x,C.n),C.bj)},
$S:727}
B.dZI.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dZJ.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGn()},
$S:0}
B.dZK.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZY.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jx(D.RR,x,C.a2H,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.n(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RR).j(0.4+e*0.2),C.H,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:703}
B.dZW.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZX.prototype={
$0(){this.a.aju()
return null},
$S:0}
B.dZZ.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*10)),e)},
$S:100}
B.e__.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ado(e,w,v,this.b,x.e,x.cbF(w),new B.dZS(x,w),new B.dZT(x,v,w),new B.dZU(x,w),new B.dZV(x,w),null)},
$S:z+24}
B.dZS.prototype={
$0(){this.a.agH(this.b)
return null},
$S:0}
B.dZT.prototype={
$0(){var x=this.a
return x.m(new B.dZR(x,this.b,this.c))},
$S:0}
B.dZR.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZU.prototype={
$0(){this.a.Oy(this.b)
return null},
$S:0}
B.dZV.prototype={
$0(){this.a.ajh(this.b)
return null},
$S:0}
B.dce.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*18)),e)},
$S:100}
B.dcf.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:112}
B.dcC.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.dcB.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.dcy.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dcz.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dcA.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dcw.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dcu(this.a),C.hh,C.dB,!0,x,!1,x,x)
$.aW.x1$.push(new B.dcv(this.a))
return C.bL},
$S:138}
B.dcu.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcs(this.a))
return C.bL},
$S:191}
B.dcs.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcp(x))},
$S:7}
B.dcp.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcv.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcr(x))},
$S:7}
B.dcr.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcx.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dct(this.a))
return C.bL},
$S:191}
B.dct.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcq(x))},
$S:7}
B.dcq.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcb.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dca(x,d))},
$S:1764}
B.dca.prototype={
$0(){return this.a.f=this.b===C.vs},
$S:0}
B.dcc.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dc9(x,d))},
$S:7}
B.dc9.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcd.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dc8(x,d))},
$S:7}
B.dc8.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dc4.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dc5.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dc6.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dc7.prototype={
$1(d){return this.a.d.Nv(0,A.dw(0,0,0,C.i.V(d),0,0))},
$S:6}
B.dcP.prototype={
$0(){var x=this.a.a
return B.rU(x.c,x.d)},
$S:1765}
B.dcQ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dcR.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcS.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dcT.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcU.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcW.prototype={
$0(){var x=this.a
x.m(new B.dcV(x))},
$S:0}
B.dcV.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qp(0)},
$S:0}
B.dcL.prototype={
$1(d){return this.a.Rm(this.b)},
$S:11}
B.dcM.prototype={
$1(d){return this.a.Rl(this.b)},
$S:11}
B.dcD.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dcE.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcF.prototype={
$1(d){return D.hu2},
$S:z+25}
B.dcK.prototype={
$2(d,e){if(d)B.Wi()},
$S:127}
B.dcG.prototype={
$0(){return this.a.aaP(this.b)},
$S:0}
B.dcH.prototype={
$0(){return this.a.aaM(this.b)},
$S:0}
B.dcI.prototype={
$0(){return this.a.afa(this.b)},
$S:0}
B.dcJ.prototype={
$0(){return this.a.a2u(this.b)},
$S:0}
B.dc3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dcO.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qt(),$async$$0)
case 2:u.m(new B.dcN(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dcN.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cea.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mK(D.n6)},
$S:z+1}
B.ceb.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ce9.prototype={
$2(d,e){return this.bmY(d,e)},
bmY(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wj(u.c,A.I(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1766}
B.fDb.prototype={
$1(d){if(d===D.a9b&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fDc.prototype={
$0(){},
$S:12}
B.fDN.prototype={
box(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fqO(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hpD(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.box(d,e)},
$S:549}
B.fDM.prototype={
$1(d){var x=this
d.b=new B.fDL(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fDL.prototype={
$1(d){return this.bow(d)},
bow(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b10(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Y.aQ(0,n,null)
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
return A.b(B.fqO(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a87(m),$async$$1)
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
x(v=B.aAY.prototype,"gcj6","QW",0)
x(v,"gcjY","JM",0)
x(v,"gcjt","yF",0)
x(v=B.aEX.prototype,"gcbz","af8",0)
x(v,"gcbA","a_z",0)
x(v,"gcyM","aiZ",0)
x(v=B.aF_.prototype,"gcbB","a_A",0)
x(v,"gcyN","a2P",0)
x(B.aEY.prototype,"gcbC","af9",0)
x(B.aAX.prototype,"gcbH","cbI",4)
x(v=B.aEZ.prototype,"gcju","a0L",0)
x(v,"gcxm","cxn",4)
x(v,"gb4k","aAw",0)
x(v,"gcAh","ajo",0)
x(v,"gbSN","Yo",0)
x(v,"gcbG","EM",0)
x(B.aAZ.prototype,"gb86","a2O",0)
x(B.aAW.prototype,"gcbJ","a_B",0)
x(v=B.aB1.prototype,"gb32","chJ",4)
x(v,"gcbD","afc",0)
x(v=B.aB_.prototype,"gcwk","a2A",0)
x(v,"gb14","afb",0)
w(B.aAV.prototype,"gaz2","az3",8)
x(v=B.aB0.prototype,"gcmd","ah9",0)
x(v,"gbSg","abD",0)
w(v,"gaz2","az3",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.crT,B.aax,B.avh,B.aDB,B.aGJ,B.jD,B.ad4,B.bxU,B.FQ,B.Ys])
w(B.crU,B.crT)
w(B.b68,B.aax)
x(A.ht,[B.crP,B.crQ,B.crR,B.crO,B.crS,B.crV,B.crW,B.crX,B.crY,B.crZ,B.cs_,B.cs0,B.cs1,B.fws,B.fVU,B.fVW,B.fVV,B.fW8,B.fW9,B.fz8,B.dcj,B.dcl,B.dck,B.dco,B.fB5,B.fBz,B.cdF,B.cdM,B.cdN,B.cdI,B.cdG,B.cdJ,B.cdK,B.fW6,B.fW7,B.e_4,B.e_d,B.e_b,B.e_c,B.ftx,B.fzk,B.fzl,B.ce3,B.fzn,B.fDz,B.fxy,B.fxz,B.ce8,B.h0g,B.dci,B.dcg,B.e_0,B.dYX,B.dZ2,B.dZl,B.dZ1,B.dZs,B.dZM,B.dZN,B.dZO,B.dZj,B.dZB,B.dZA,B.dZC,B.dZD,B.dZE,B.dZG,B.dZH,B.dZz,B.dZ4,B.dZ5,B.dZ0,B.dZm,B.dZd,B.dZb,B.dZr,B.dZL,B.dZY,B.dZZ,B.dce,B.dcf,B.dcC,B.dcB,B.dcw,B.dcu,B.dcs,B.dcv,B.dcx,B.dct,B.dcb,B.dcc,B.dcd,B.dc7,B.dcL,B.dcM,B.dcF,B.cea,B.ceb,B.fDb,B.fDM,B.fDL])
w(B.b69,B.avh)
x(A.iJ,[B.fVT,B.dcm,B.dcn,B.fB3,B.fB4,B.fBy,B.dYU,B.e_2,B.e_3,B.e_1,B.e_5,B.e_6,B.e_7,B.e_8,B.e_9,B.e_a,B.dYV,B.dYW,B.fzm,B.dch,B.dZo,B.dZp,B.dYY,B.dYZ,B.dZ3,B.dZP,B.dZQ,B.dZi,B.dZt,B.dZ7,B.dZk,B.dZF,B.dZu,B.dZv,B.dZw,B.dZx,B.dZy,B.dZ6,B.dZ_,B.dZn,B.dZg,B.dZ9,B.dZe,B.dZf,B.dZh,B.dZ8,B.dZq,B.dZI,B.dZJ,B.dZK,B.dZW,B.dZX,B.dZS,B.dZT,B.dZR,B.dZU,B.dZV,B.dcy,B.dcz,B.dcA,B.dcp,B.dcr,B.dcq,B.dca,B.dc9,B.dc8,B.dc4,B.dc5,B.dc6,B.dcP,B.dcQ,B.dcR,B.dcS,B.dcT,B.dcU,B.dcW,B.dcV,B.dcD,B.dcE,B.dcG,B.dcH,B.dcI,B.dcJ,B.dc3,B.dcO,B.dcN,B.fDc])
x(A.lE,[B.adn,B.Oi,B.aay,B.Po,B.Yr,B.Pn,B.FR])
x(A.af,[B.a_n,B.W7,B.Wb,B.W8,B.a_m,B.W9,B.a_o,B.a_l,B.QE,B.a_q,B.a_k,B.a_r])
x(A.ah,[B.aAY,B.aEX,B.aF_,B.aEY,B.aAX,B.aEZ,B.aAZ,B.aAW,B.aB1,B.aB_,B.aAV,B.aB0])
x(A.ax,[B.adQ,B.aAU,B.bfA,B.ado,B.adm,B.bfB])
x(A.jy,[B.cdL,B.cdH,B.cdP,B.cdQ,B.fX0,B.dZc,B.dZa,B.e__,B.dcK,B.ce9,B.fDN])
x(A.j4,[B.bl2,B.bxw])})()
A.iT(b.typeUniverse,JSON.parse('{"b68":{"aax":[]},"b69":{"avh":[]},"a_n":{"af":[],"v":[]},"aAY":{"ah":["a_n"]},"adQ":{"ax":[],"v":[]},"W7":{"af":[],"v":[]},"Wb":{"af":[],"v":[]},"aEX":{"ah":["W7"]},"aF_":{"ah":["Wb"]},"bl2":{"j4":[]},"W8":{"af":[],"v":[]},"aEY":{"ah":["W8"]},"a_m":{"af":[],"v":[]},"W9":{"af":[],"v":[]},"ado":{"ax":[],"v":[]},"a_o":{"af":[],"v":[]},"a_l":{"af":[],"v":[]},"QE":{"af":[],"v":[]},"a_q":{"af":[],"v":[]},"adm":{"ax":[],"v":[]},"a_k":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"aAX":{"ah":["a_m"]},"bxw":{"j4":[]},"aEZ":{"ah":["W9"]},"aAU":{"ax":[],"v":[]},"bfA":{"ax":[],"v":[]},"aAZ":{"ah":["a_o"]},"aAW":{"ah":["a_l"]},"aB1":{"ah":["QE"]},"aB_":{"ah":["a_q"]},"aAV":{"ah":["a_k"]},"aB0":{"ah":["a_r"]},"bfB":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uN"),k:x("MJ()"),o:x("bu<m,m>"),F:x("ru"),g:x("aB<jD?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a9<m,P>>"),t:x("O<a9<m,@>>"),r:x("O<jD>"),w:x("O<+file,name(lU,m)>"),u:x("O<cU>"),s:x("O<m>"),E:x("O<j4>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<F>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<m,m>"),P:x("a9<m,@>"),f:x("a9<@,@>"),m:x("iC"),e:x("ixR"),af:x("F2"),U:x("jD"),b:x("ct"),C:x("aE"),aK:x("wH"),ab:x("FQ"),br:x("avh"),v:x("Ys"),N:x("m"),X:x("br<G>"),Q:x("m5"),D:x("dK"),aw:x("bE<m>"),cd:x("Y<a9<m,@>>"),c7:x("v"),ch:x("c3<ai<jD>>"),aW:x("c3<dK?>"),aY:x("c3<~>"),cx:x("adn"),b1:x("bk<ai<jD>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDB"),bG:x("aGJ"),q:x("mD"),B:x("pR<FQ>"),c6:x("pR<aay>"),y:x("P"),i:x("G"),z:x("@"),S:x("F"),aQ:x("bi?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("a9<m,@>?"),l:x("jD?"),R:x("aE?"),c:x("Ys?"),d:x("+answerQr,transfer(m,aB<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,Oi,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dK?"),cm:x("ad4?"),bk:x("aDB?"),ag:x("aGJ?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5t=new A.ay(C.aF,2,C.r,-1)
D.c7u=new A.a8(C.a7,C.aa,C.x,C.a4R,null,null)
D.b77=new A.p(null,null,null,C.mF,null,D.c7u,C.n)
D.b8B=new A.p(null,null,null,C.mF,null,E.I5,C.n)
D.afD=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ah2=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ai5=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajT=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fGb=new A.B("Your team portal",null,C.dk,null,null,null,null,null,null,null,null,null)
D.fV5=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EJ,null,null,null,null,null,null,null,null,null)
D.djo=x([D.fGb,C.an,D.fV5],y.p)
D.bwP=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.djo,null)
D.fZz=new A.B("Create your organization",null,C.fP,null,null,null,null,null,null,null,null,null)
D.fKF=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EJ,null,null,null,null,null,null,null,null,null)
D.dAe=x([D.fZz,C.an,D.fKF],y.p)
D.bwY=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dAe,null)
D.fVJ=new A.B("Team Member sign-in",null,C.fP,null,null,null,null,null,null,null,null,null)
D.fOD=new A.B("Enter the access code and password from your organization.",null,G.EJ,null,null,null,null,null,null,null,null,null)
D.dxZ=x([D.fVJ,C.an,D.fOD],y.p)
D.bx7=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dxZ,null)
D.bDm=new A.R(16,10,16,28)
D.bDu=new A.R(16,14,16,4)
D.bEI=new A.R(20,0,20,16)
D.bFe=new A.R(20,8,20,16)
D.amJ=new A.R(24,22,24,20)
D.a2M=new A.a0(63394,"MaterialIcons",!1)
D.apV=new A.a0(63515,"MaterialIcons",!1)
D.bSs=new A.a0(983813,"MaterialIcons",!1)
D.bPJ=new A.a0(62867,"MaterialIcons",!1)
D.bTs=new A.ae(D.bPJ,44,C.c,null,null,null)
D.bUw=new A.ae(C.k6,null,C.ac,null,null,null)
D.bVV=new A.ae(C.jq,18,null,null,null,null)
D.bXF=new A.ae(D.a2M,26,C.c,null,null,null)
D.bYg=new A.ae(C.CZ,null,null,null,null,null)
D.bYR=new A.ae(C.D6,null,null,null,null,null)
D.c_1=new A.ae(W.a2X,null,null,null,null,null)
D.c_n=new A.ae(C.hM,16,null,null,null,null)
D.c2W=new A.ae(C.t5,16,null,null,null,null)
D.bTJ=new A.ae(C.nJ,null,null,null,null,null)
D.c3O=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZo=new A.ae(C.Hn,null,null,null,null,null)
D.c3T=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZo,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bU3=new A.ae(H.HU,null,null,null,null,null)
D.c43=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bU3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cT6=x([C.fo,C.b2,C.aF],y.O)
D.c9m=new A.a8(C.aA,C.aE,C.x,D.cT6,null,null)
D.cSy=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RR=x([C.fo,C.aF],y.O)
D.S7=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n6=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dsk=x([C.oi,C.aF],y.O)
D.ekS={iceServers:0}
D.aLl={urls:0}
D.dDZ=new A.bu(D.aLl,["stun:stun.l.google.com:19302"],y.o)
D.dDY=new A.bu(D.aLl,["stun:stun1.l.google.com:19302"],y.o)
D.d8U=x([D.dDZ,D.dDY],A.at("O<a9<m,m>>"))
D.dDf=new A.bu(D.ekS,[D.d8U],A.at("bu<m,@>"))
D.J8=new B.Oi(0,"lanDirect")
D.Tr=new B.Oi(1,"cloudStash")
D.dPj=new B.Oi(2,"inlineInstant")
D.Ts=new B.Oi(3,"webrtcLink")
D.Ag=new B.Oi(4,"videoCloud")
D.fV4=new A.B("Receive file",null,C.ng,null,null,null,null,null,null,null,null,null)
D.cIm=x([E.arD,C.ae,D.fV4],y.p)
D.f8O=new A.c8(C.aL,C.bb,C.j,C.l,null,C.p,null,0,D.cIm,null)
D.esl=new A.D(C.cp,D.f8O,null)
D.fwL=new A.H(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Iy,null,null,null)
D.fGK=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fwL,null,C.K,null,null,null,null,null,null,null)
D.erv=new A.D(C.Cn,D.fGK,null)
D.bcZ=new A.ch(C.A,null,null,D.erv,null)
D.eyE=new A.cK(0,null,0,28,null,null,D.bcZ,null)
D.eyY=new B.aay(0,"RTCDataChannelConnecting")
D.aQP=new B.aay(1,"RTCDataChannelOpen")
D.aQQ=new B.aay(3,"RTCDataChannelClosed")
D.eyZ=new B.FR(0,"RTCIceConnectionStateNew")
D.ez_=new B.FR(1,"RTCIceConnectionStateChecking")
D.ez0=new B.FR(2,"RTCIceConnectionStateCompleted")
D.ez1=new B.FR(3,"RTCIceConnectionStateConnected")
D.ez2=new B.FR(4,"RTCIceConnectionStateCount")
D.ez3=new B.FR(5,"RTCIceConnectionStateFailed")
D.ez4=new B.FR(6,"RTCIceConnectionStateDisconnected")
D.aQR=new B.FR(7,"RTCIceConnectionStateClosed")
D.aQS=new B.Yr(0,"RTCIceGatheringStateNew")
D.ez5=new B.Yr(1,"RTCIceGatheringStateGathering")
D.a9b=new B.Yr(2,"RTCIceGatheringStateComplete")
D.a9c=new B.Pn(0,"RTCPeerConnectionStateClosed")
D.aQT=new B.Pn(1,"RTCPeerConnectionStateFailed")
D.aQU=new B.Pn(2,"RTCPeerConnectionStateDisconnected")
D.aQV=new B.Pn(3,"RTCPeerConnectionStateNew")
D.aQW=new B.Pn(4,"RTCPeerConnectionStateConnecting")
D.aQX=new B.Pn(5,"RTCPeerConnectionStateConnected")
D.ez6=new B.Po(0,"RTCSignalingStateStable")
D.ez7=new B.Po(1,"RTCSignalingStateHaveLocalOffer")
D.ez8=new B.Po(2,"RTCSignalingStateHaveRemoteOffer")
D.ez9=new B.Po(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eza=new B.Po(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQY=new B.Po(5,"RTCSignalingStateClosed")
D.fdT=new A.av(160,48)
D.bee=new A.fk(2,null,null,null,null,C.aF,null,null,null,null)
D.ffr=new A.a5(16,16,D.bee,null)
D.fK_=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgU=new A.b0(D.fK_,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRH=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fgX=new A.b0(D.fRH,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h_C=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new A.b0(D.h_C,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fJA=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fht=new A.b0(D.fJA,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fVU=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aU3=new A.b0(D.fVU,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fXm=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new A.b0(D.fXm,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h15=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fid=new A.b0(D.h15,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h_1=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fii=new A.b0(D.h_1,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h0g=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.b0(D.h0g,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fIa=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fjC=new A.b0(D.fIa,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTE=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fjX=new A.b0(D.fTE,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fMj=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new A.b0(D.fMj,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1b=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new A.b0(D.h1b,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fIq=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new A.b0(D.fIq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fH5=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fkS=new A.b0(D.fH5,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fDU=new A.B("NGMY DOC SHARE",null,C.aVr,null,null,null,null,null,null,null,null,null)
D.fFi=new A.B("Show this to sender",null,C.iC,null,null,null,null,null,null,null,null,null)
D.fGi=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fL5=new A.B("Organization settings",null,C.cC,null,null,null,null,null,null,null,null,null)
D.fLt=new A.B("Sign in",null,C.ch,null,null,null,null,null,null,null,null,null)
D.fMt=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fN0=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fPV=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fSK=new A.B("Send to their Doc Share",null,C.nY,null,null,null,null,null,null,null,null,null)
D.fT5=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTq=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fU2=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fU9=new A.B("Create portal",null,C.ch,null,null,null,null,null,null,null,null,null)
D.fUx=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.fXS=new A.B("Share files & videos\nwith a scan.",null,C.aVu,null,null,null,null,null,null,null,null,null)
D.fYb=new A.B("Add files",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hu2=new B.a_k(null)
D.acw=new B.adn(0,"docShare")
D.acx=new B.adn(1,"gate")
D.Wx=new B.adn(2,"gateNoIndividual")})();(function staticFields(){$.aPv=null
$.fol=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahp=A.T(y.N,A.at("lU"))
$.S0=A.T(y.N,y.D)
$.fp0=A.T(y.N,A.at("ad4"))
$.ce2=A.T(y.S,A.at("bxU"))
$.hpC=1
$.ied=null
$.iec=null
$.i53=null
$.he3=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iyl","hHB",()=>new B.crU())
x($,"iwf","hi3",()=>C.a.q(A.bB(A.bB(A.bB(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["CYHfQRsQdvcjv/8/zlw8qwMafFo="]=a.current})($__dart_deferred_initializers__);