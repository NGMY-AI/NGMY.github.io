((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={cth:function cth(){},
i2w(d){var x=null,w=new B.b6T(d,D.eFR,new A.pU(x,x,y.c6),new A.pU(x,x,y.B))
w.bCV(d)
return w},
b6T:function b6T(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ctc:function ctc(d){this.a=d},
ctd:function ctd(d){this.a=d},
cte:function cte(d){this.a=d},
ctb:function ctb(d){this.a=d},
ctf:function ctf(d){this.a=d},
i2x(d,e){var x=y.N
x=new B.b6U(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCW(d,e)
return x},
b6U:function b6U(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cti:function cti(d){this.a=d},
ctj:function ctj(d){this.a=d},
ctk:function ctk(d){this.a=d},
ctl:function ctl(d){this.a=d},
ctm:function ctm(d){this.a=d},
ctn:function ctn(d){this.a=d},
cto:function cto(d){this.a=d},
ctp:function ctp(d){this.a=d},
hgK(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.x9.H_(x,"ngmy_doc_share_v1",new B.fyR(),1)},
i9c(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.er(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.wS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cH.aK(d)
return x}catch(w){return v}return v},
Sp(d,e){return B.ioN(d,e)},
ioN(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQf
x=7
return A.b(o==null?$.aQf=B.hgK():o,$async$Sp)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mh(s,"blobs","readwrite")
C.iE.mi(J.mg(q,"blobs"),r,d)
x=8
return A.b(J.oz(q),$async$Sp)
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
return A.i($async$Sp,w)},
So(d){return B.ioM(d)},
ioM(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$So=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQf
x=7
return A.b(o==null?$.aQf=B.hgK():o,$async$So)
case 7:s=f
r=J.mh(s,"blobs","readonly")
x=8
return A.b(C.iE.xS(J.mg(r,"blobs"),d),$async$So)
case 8:q=f
x=9
return A.b(J.oz(r),$async$So)
case 9:o=B.i9c(q)
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
return A.i($async$So,w)},
aim(d){return B.ioL(d)},
ioL(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aim=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQf
x=7
return A.b(p==null?$.aQf=B.hgK():p,$async$aim)
case 7:s=f
r=J.mh(s,"blobs","readwrite")
C.iE.Gu(J.mg(r,"blobs"),d)
x=8
return A.b(J.oz(r),$async$aim)
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
return A.i($async$aim,w)},
fyR:function fyR(){},
ibF(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brJ(w,v))}return u},
hIn(d,e){var x,w={},v=A.aYV("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fYD(w,v,e)
C.xb.zg(v,"change",new B.fYF(w,v,!1))
C.xb.zg(v,"cancel",new B.fYE(w))
$.eX.mK()
v.click()
A.bO(C.amf,new B.fYC(w),y.H)},
fYD:function fYD(d,e,f){this.a=d
this.b=e
this.c=f},
fYF:function fYF(d,e,f){this.a=d
this.b=e
this.c=f},
fYE:function fYE(d){this.a=d},
fYC:function fYC(d){this.a=d},
DL(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DL=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUP()?3:4
break
case 3:x=5
return A.b(B.hD1(e,d,s,!0,!1,f,g,h,!1,i),$async$DL)
case 5:x=1
break
case 4:x=6
return A.b(B.S0(d,s,f,g,h,i),$async$DL)
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
return A.b(B.Jq(s,d),$async$DL)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fuc(s,d),$async$DL)
case 14:x=12
return A.b(r.hD1(q,p,o,n,m,l,k,j,a1,i),$async$DL)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ee(new B.fYS(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ee(new B.fYT(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DL,w)},
S0(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S0=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1E(e),$async$S0)
case 3:u=k
x=4
return A.b(B.ar7(d,e,!1),$async$S0)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jq(e,d),$async$S0)
case 7:if(k){v=D.adL
x=1
break}x=8
return A.b(B.Wk(e),$async$S0)
case 8:v=t?D.Xb:D.adM
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1C(d,e)){v=D.adL
x=1
break}x=11
return A.b(B.Wk(e),$async$S0)
case 11:v=t?D.Xb:D.adM
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hbz(d,e)){v=D.adL
x=1
break}x=14
return A.b(B.Wk(e),$async$S0)
case 14:v=D.Xb
x=1
break
case 13:v=t?D.Xb:D.adM
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
fuc(d,e){var x=0,w=A.j(y.y),v
var $async$fuc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1C(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1E(d),$async$fuc)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuc,w)},
hD1(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ee(new B.fBw(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hxP(d,e,f,g,h,i,j){return new B.a_A(e,j,d,g,h,i,f,null)},
fDq(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fDq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDt(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fDq)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDq,w)},
fDV(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fDV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
r=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDX(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fDV)
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
return A.i($async$fDV,w)},
hgW(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fQO(d,e){var x=0,w=A.j(y.H),v
var $async$fQO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wk(e),$async$fQO)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).ek()
case 1:return A.h(v,w)}})
return A.i($async$fQO,w)},
fYS:function fYS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fYT:function fYT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adB:function adB(d,e){this.a=d
this.b=e},
fBw:function fBw(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_A:function a_A(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBA:function aBA(){this.c=this.a=this.d=null},
ddT:function ddT(d,e){this.a=d
this.b=e},
ddQ:function ddQ(d){this.a=d},
ddS:function ddS(d){this.a=d},
ddR:function ddR(d){this.a=d},
ddV:function ddV(){},
ddU:function ddU(d){this.a=d},
ae4:function ae4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEe:function aEe(d,e){this.a=d
this.b=e},
aHp:function aHp(d,e,f){this.a=d
this.b=e
this.c=f},
fDt:function fDt(d,e,f){this.a=d
this.b=e
this.c=f},
fDr:function fDr(d){this.a=d},
fDs:function fDs(d,e,f){this.a=d
this.b=e
this.c=f},
fDX:function fDX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDW:function fDW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceU(d,e,f,g,h){return B.hYl(d,e,f,g,h)},
hYl(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ceU=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.il(r.dO(d,new B.ceV(s,e,h,g,f,q),y.g),y.l),$async$ceU)
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
return A.i($async$ceU,w)},
b1z(d,e,f,g,h){return B.hYm(d,e,f,g,h)},
hYm(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1z=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awG("GET",d)
o=A.h7Z()
if(o==null)o=new A.MM(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.H3),$async$b1z)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D4(),$async$b1z)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ch(q,h,o,e,f,"Received via QR")
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
return A.i($async$b1z,w)},
b1y(d){return B.hYj(d)},
hYj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.ov),$async$b1y)
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
return A.i($async$b1y,w)},
ceT(d){return B.hYk(d)},
hYk(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ceT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.qE),$async$ceT)
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
return A.i($async$ceT,w)},
ceV:function ceV(d,e,f,g,h,i){var _=this
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
Jo(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hYr(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jo(C.a.b_(t,u.length))}return null},
hYs(d){var x=B.Jo(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hYn(){var x,w=$.ow(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8c(d){return B.hYo(d)},
hYo(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8c)
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
return A.i($async$a8c,w)},
a8d(d,e){return B.hYp(d,e)},
hYp(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8d=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hP(d,e,!1,!1,C.cQ,null),$async$a8d)
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
return A.i($async$a8d,w)},
Cg(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cg)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jo(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8e(r),$async$Cg)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8c("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cg)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jo(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cg)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hYn()
x=14
return A.b(B.a8e(m),$async$Cg)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8d("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cg)
case 15:k=f
x=16
return A.b(B.a8d("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cg)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cg)
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
return A.i($async$Cg,w)},
a8e(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jo(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8c("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8e)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
a8f(d,e,f,g){return B.hYt(d,e,f,g)},
hYt(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8f=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jo(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8e(r),$async$a8f)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cB(d,0,new B.cf0())>1048576||g.aT(d,new B.cf1())){v=B.Fl(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8q("myCode",d,a0),$async$a8f)
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
v=B.Fl(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1H(u,g.gJ(d),a0),$async$a8f)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ow().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dO(d,new B.cf2(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1A(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8f)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
Fl(d,e,f,g,h){return B.hYq(d,e,f,g,h)},
hYq(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fl=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cB(a6,0,new B.ceX())
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
a1=B.Js(a9,q)
a0=new A.Lg(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fl)
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
return A.b(new A.abQ(a1.a,a4,"media",a1.d,a2).xP(m,n,new A.EA(!0,q.c)),$async$Fl)
case 12:J.c4(r,m);++o
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
return A.b(B.aST(r),$async$Fl)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dO(a6,new B.ceY(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1A(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fl)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aST(r),$async$Fl)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fl,w)},
b1A(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8c(t),$async$b1A)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.ceW(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8d(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1A,w)},
On(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$On=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8c("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$On)
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
return A.b(B.b1B(k,a0),$async$On)
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
return A.b(B.b1G(h),$async$On)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wr(g,a0),$async$On)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.ceZ(),q),n)
d=A.C(new A.Y(r,new B.cf_(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cW(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8d("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$On)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$On,w)},
b1B(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1B=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.isQ(k,j)
C.d.u(s,i)
x=5
return A.b(B.DJ(l,m,"Received via My Code",t,e,i),$async$b1B)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aST(s),$async$b1B)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1B,w)},
cf0:function cf0(){},
cf1:function cf1(){},
cf2:function cf2(){},
ceX:function ceX(){},
ceY:function ceY(){},
ceW:function ceW(){},
ceZ:function ceZ(){},
cf_:function cf_(){},
fYP(d,e){var x=0,w=A.j(y.H)
var $async$fYP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ee(new B.fYQ(e),!1,null,y.H)),$async$fYP)
case 2:return A.h(null,w)}})
return A.i($async$fYP,w)},
bGU(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGU=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ee(new B.fYR(g,e,f),!1,null,y.y)),$async$bGU)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGU,w)},
fYQ:function fYQ(d){this.a=d},
fYR:function fYR(d,e,f){this.a=d
this.b=e
this.c=f},
Wh:function Wh(d,e){this.c=d
this.a=e},
aFB:function aFB(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e_H:function e_H(d,e){this.a=d
this.b=e},
Wl:function Wl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFE:function aFE(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e0Q:function e0Q(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0S:function e0S(d){this.a=d},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0T:function e0T(d){this.a=d},
e0U:function e0U(d){this.a=d},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d){this.a=d},
e10:function e10(){},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(d,e){this.a=d
this.b=e},
blQ:function blQ(){},
Wi:function Wi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFC:function aFC(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e_I:function e_I(d){this.a=d},
e_J:function e_J(d){this.a=d},
hbA(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hYv(d){var x=d.l5
if(x>=0)return x
return 4.99},
hYu(d){var x=d.lL,w=y.N
w=x.jp(x,new B.cf4(),w,w)
return w},
hsO(d){var x=d.kI,w=y.N
w=x.jp(x,new B.cf5(),w,w)
return w},
b1E(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b1E)
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
return A.i($async$b1E,w)},
a8h(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8h)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a8h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
Wk(d){var x=0,w=A.j(y.H),v,u
var $async$Wk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wk)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
hbz(d,e){var x,w,v
if(B.hYv(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hYu(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1C(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hsO(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
hsP(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hsO(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cb(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dx(f,0,0,0,0,0).a).aa().ag())
d.kI=w},
ar8(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ar8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$ar8)
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
return A.i($async$ar8,w)},
ar9(d){var x=0,w=A.j(y.H),v,u,t
var $async$ar9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ar8(d),$async$ar9)
case 3:u=f
x=5
return A.b(A.az(),$async$ar9)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$ar9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ar9,w)},
ar7(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ar7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hbA(d)
if(u<=0){v=!1
x=1
break}if(B.hbz(d,e)){v=!1
x=1
break}x=3
return A.b(B.ar8(e),$async$ar7)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar7,w)},
b1D(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jq(e,d),$async$b1D)
case 3:if(g){v=-1
x=1
break}u=B.hbA(d)
if(u<=0){v=-1
x=1
break}if(B.hbz(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ar8(e),$async$b1D)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1D,w)},
cf7(d,e,f){var x=0,w=A.j(y.y),v
var $async$cf7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jq(e,d),$async$cf7)
case 3:if(h){v=!1
x=1
break}v=B.ar7(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf7,w)},
cf6(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cf6=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cf7(d,u,i.gUP()),$async$cf6)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf6,w)},
a8g(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8g=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUP()){v=!0
x=1
break}if(B.b1C(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.Ut),$async$a8g)
case 5:x=k?3:4
break
case 3:B.hsP(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8g)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Ut,"Doc Share for Organizations"),$async$a8g)
case 7:if(!k){v=!1
x=1
break}B.hsP(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8g)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
cf4:function cf4(){},
cf5:function cf5(){},
fZP(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fZP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fZP)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fqu.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hR([r],e.c))
s.toString
$.fqu.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZP,w)},
iuZ(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fqu.bq($.fqu,new B.fZR(d))},
fZR:function fZR(d){this.a=d},
fs6(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fs6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],f))
s.toString
u=A.n_(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$fs6)
case 3:C.Bv.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fs6,w)},
ahg(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fra.n(0,d,new B.adi(A.br(e,!0,v)))
x=3
return A.b(A.az(),$async$ahg)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahg)
case 2:return A.h(null,w)}})
return A.i($async$ahg,w)},
aha(d){return B.idz(d)},
idz(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aha=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fra.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aha)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fvT(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.adi(r)
$.fra.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aha,w)},
RR(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sp(d,u),$async$RR)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RR,w)},
aQA(d){return B.idx(d)},
idx(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.So(d),$async$aQA)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQA)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cH.aK(r)
x=!J.ct(q)?9:10
break
case 9:B.RR(d,q)
x=11
return A.b(J.h6(s,d),$async$aQA)
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
return A.i($async$aQA,w)},
i9E(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cd(J.er(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cd(A.wS(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
return A.f3(null,y.K)},
a35(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a35=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bF,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fBI(r,t),!1,s)
A.fB(r,"error",new B.fBJ(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iL(0,C.Ol,new B.fBK())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a35,w)},
aQU(d,e,f){return B.ifX(d,e,f)},
ifX(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQU=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a35(i),$async$aQU)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sp(o,p),$async$aQU)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahg(k,j,s),$async$aQU)
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
return A.i($async$aQU,w)},
aQT(d,e,f){return B.ifW(d,e,f)},
ifW(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQT=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQU(d,e,f),$async$aQT)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a35(f),$async$aQT)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S9.n(0,s,r)
x=11
return A.b(B.RR(s,r),$async$aQT)
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
return A.i($async$aQT,w)},
Ch(d,e,f,g,h,i){return B.hYE(d,e,f,g,h,i)},
hYE(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ch=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1K(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RR(s,d),$async$Ch)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Ch)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cK.gco().aK(d)),$async$Ch)
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
return A.b(B.Bb(e),$async$Ch)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.Hg(e,j),$async$Ch)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ch,w)},
Wm(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wm=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bb(d),$async$Wm)
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
k=B.hsR(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b1K(),null)
$.ahG.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a35(o),$async$Wm)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S9.n(0,h,g)
B.RR(h,g)
x=9
break
case 10:x=11
return A.b(B.aQT(d,m,o),$async$Wm)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wm)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wm,w)},
hbE(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hbE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hsR(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jr(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Ch(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbE,w)},
Jr(d,e,f,g,h,i){return B.hYD(d,e,f,g,h,i)},
hYD(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jr=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cT.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lg(A.dD(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jr)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h0(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.SX(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kM(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sp(k,l),$async$Jr)
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
return A.b(j.a1(0),$async$Jr)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sp(k,new Uint8Array(A.cd(n))),$async$Jr)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahg(r,q,g),$async$Jr)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1K(),null)
x=17
return A.b(B.Bb(d),$async$Jr)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.Hg(d,e),$async$Jr)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jr,w)},
Wo(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wo=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahG.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a35(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aha(s),$async$Wo)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.So(u[o]),$async$Wo)
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
case 5:i=$.S9.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rU(d,e),$async$Wo)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S9.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wo,w)},
hsR(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rU(d,e){return B.hYF(d,e)},
hYF(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S9.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahG.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a35(s),$async$rU)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S9.n(0,f,r)
B.RR(f,r)
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
return A.b(B.aha(f),$async$rU)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAk(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.So(g[l]),$async$rU)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqn()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S9.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQA(f),$async$rU)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S9.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wo(a0,a1,0,g),$async$rU)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cd(i))
$.H6.n(0,f,h)
$.S9.n(0,f,h)
B.RR(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rU,w)},
hYI(d){var x,w,v=$.ahG.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hYJ(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hR([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hYG(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arf(d,e,f,g,h){return B.hYH(d,e,f,g,h)},
hYH(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arf=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahG.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a35(s),$async$arf)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rU(g,e),$async$arf)
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
return A.b(n.iE(d).xP(h,r,new A.EA(!0,e.c)),$async$arf)
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
return A.i($async$arf,w)},
hsT(d,e,f,g,h){var x,w,v,u,t=$.hsS
$.hsS=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfi.n(0,t,new B.byL(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAk(u)))
return t},
hbF(d){var x=0,w=A.j(y.H)
var $async$hbF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbF,w)},
Js(d,e){var $async$Js=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahG.h(0,h)
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
return A.qy(B.Wo(d,e,p,o<q?o:q),$async$Js,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qy(A.GE(n),$async$Js,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qy(B.aha("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Js,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qy(B.So(h[l]),$async$Js,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qy(A.GE(k),$async$Js,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qy(B.rU(d,e),$async$Js,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qy(A.GE(A.wS(j,p,o<i?o:i)),$async$Js,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qy(null,0,w)
case 2:return A.qy(t.at(-1),1,w)}})
var x=0,w=A.hBR($async$Js,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hDM(w)},
b1M(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfi.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a62(),$async$b1M)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1M,w)},
Wn(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfi.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a62(),$async$Wn)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahg(r.c,u,r.z),$async$Wn)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1K(),null)
u=r.a
x=5
return A.b(B.Bb(u),$async$Wn)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.Hg(u,s),$async$Wn)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
a8n(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfi.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aim(u[s]),$async$a8n)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8n,w)},
cfk(d,e,f){var x=0,w=A.j(y.H)
var $async$cfk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDO(d,e,f),$async$cfk)
case 2:return A.h(null,w)}})
return A.i($async$cfk,w)},
cfl(d,e,f){var x=0,w=A.j(y.H)
var $async$cfl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDP(d,e,f),$async$cfl)
case 2:return A.h(null,w)}})
return A.i($async$cfl,w)},
Fm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bb(d),$async$Fm)
case 2:p=g
J.nO(p,new B.cfj(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahG.W(0,e)
x=3
return A.b(B.aha(v),$async$Fm)
case 3:u=g
$.fra.W(0,v)
x=4
return A.b(A.az(),$async$Fm)
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
return A.b(B.aim(s[q]),$async$Fm)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aim(v),$async$Fm)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fm)
case 14:return A.h(null,w)}})
return A.i($async$Fm,w)},
b1L(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rU(d,e),$async$b1L)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fs6(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1L,w)},
Bb(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bb)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fBL(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bb,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fFW(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bDO(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bb(d),$async$bDO)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzV(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGw(f))
x=4
return A.b(B.Hg(d,u),$async$bDO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDO,w)},
bDP(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bb(d),$async$bDP)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzW(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPE(f))
x=4
return A.b(B.Hg(d,u),$async$bDP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDP,w)},
adi:function adi(d){this.a=d},
fvT:function fvT(){},
fBI:function fBI(d,e){this.a=d
this.b=e},
fBJ:function fBJ(d){this.a=d},
fBK:function fBK(){},
cfj:function cfj(d){this.a=d},
byL:function byL(d,e,f,g,h,i,j,k,l){var _=this
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
fBL:function fBL(){},
fFW:function fFW(){},
fzV:function fzV(d){this.a=d},
fzW:function fzW(d){this.a=d},
a8o(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aT(d,new B.cfo())?3:4
break
case 3:x=5
return A.b(B.b1N(d,e),$async$a8o)
case 5:u=g
if(u!=null){t=u.c
B.Op(d,u.b,e,t)}v=u
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
return A.b(B.b1I(s),$async$a8o)
case 10:case 9:if(g){v=new A.Rc(1,D.U6,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wp(d,e),$async$a8o)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wu(!0,!0,d,e),$async$a8o)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Op(d,D.Ax,e,t)
v=new A.Rc(p,D.Ax,t)
x=1
break}v=B.cfn(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
Wp(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8q(null,d,e),$async$Wp)
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
return A.b(B.b1H(p,d.length,e),$async$Wp)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfl(e,C.d.gH(d).a,r.b),$async$Wp)
case 7:case 6:q=r.a
x=8
return A.b(B.Op(d,D.U6,e,q),$async$Wp)
case 8:v=new A.Rc(d.length,D.U6,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
Wq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mR(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8p(d,e),$async$Wq)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfg(s,d,e,t),$async$Wq)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1I(t),$async$Wq)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rU(e,d),$async$Wq)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wp(A.a([d],y.r),e),$async$Wq)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
Ws(){var x=0,w=A.j(y.H)
var $async$Ws=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hby(),$async$Ws)
case 2:x=3
return A.b(B.aTf(),$async$Ws)
case 3:return A.h(null,w)}})
return A.i($async$Ws,w)},
a8p(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1K()
x=3
return A.b(B.cfk(e,d.a,u),$async$a8p)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8p,w)},
Op(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Op=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.U6&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8p(p,f),$async$Op)
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
return A.b(B.cff(o,p,u,f),$async$Op)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfg(o,p,f,t),$async$Op)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfe(o,u,p,f),$async$Op)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Op,w)},
b1N(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfm(e,d),$async$b1N)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wu(!1,!0,d,e),$async$b1N)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rc(u.a,D.Ax,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1N,w)},
cfm(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wo(d,s,0,1),$async$cfm)
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
return A.i($async$cfm,w)},
cfn(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8q(null,d,e),$async$cfn)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hsQ(u)
if(t.length>800){v=null
x=1
break}v=new A.Rc(d.length,D.dVS,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfn,w)},
arg(d,e,f){return B.hYM(d,e,f)},
hYM(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arg=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.mY(g,1)
x=B.hbD(g)?3:4
break
case 3:x=5
return A.b(B.cfh(g),$async$arg)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mY(g,13))
try{k=B.Fn(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mY(g,13))
u=9
x=12
return A.b(B.b1G(q),$async$arg)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wr(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.hbC(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wr(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Jt(C.a.i(J.mY(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Jt(C.a.i(J.mY(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Jt(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wr(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arg,w)},
Jt(d,e,f){return B.hYK(d,e,f)},
hYK(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jt=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.b_(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b_(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1y(r),$async$Jt)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1y(A.cD(s,0,null)),$async$Jt)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ceU(o,r,a1,n,a2),$async$Jt)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ceT(q),$async$Jt)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wr(l,a2),$async$Jt)
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
return A.i($async$Jt,w)},
a8q(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rU(f,r),$async$a8q)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cK.gco().aK(q)],t,s))
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
return A.i($async$a8q,w)},
Wr(d,e){return B.hYL(d,e)},
hYL(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wr=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cH.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Ch(i,a3,d,k,l,o),$async$Wr)
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
return A.i($async$Wr,w)},
Oo:function Oo(d,e){this.a=d
this.b=e},
cfo:function cfo(){},
a2E(d){var x=A.O(d).ax.a===C.I,w=x?D.aju:D.agY,v=x?D.alf:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.ais:C.bm
return new A.aIH([w,s,v,u,t,x?C.fq:C.bQ])},
hJp(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h36(e),d,null,!0,!0,y.N)},
cf3(d,e,f,g,h,i,j,k,l){return new B.Wj(e,l,d,f,k,j,g,h,i,null)},
a_C(d,e,f,g,h,i,j){return new B.bgm(g,h,j,e,i,d,f,null)},
h36:function h36(d){this.a=d},
a_z:function a_z(d,e){this.c=d
this.a=e},
aBz:function aBz(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ddP:function ddP(d){this.a=d},
ddN:function ddN(d){this.a=d},
ddO:function ddO(d){this.a=d},
byn:function byn(){},
Wj:function Wj(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFD:function aFD(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e0O:function e0O(d){this.a=d},
e0b:function e0b(d,e){this.a=d
this.b=e},
e0c:function e0c(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e,f){this.a=d
this.b=e
this.c=f},
e_K:function e_K(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_R:function e_R(d,e,f){this.a=d
this.b=e
this.c=f},
e_Q:function e_Q(d){this.a=d},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0D:function e0D(d){this.a=d},
e08:function e08(d,e,f){this.a=d
this.b=e
this.c=f},
e05:function e05(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_P:function e_P(d){this.a=d},
e0g:function e0g(d){this.a=d},
e0f:function e0f(){},
e_V:function e_V(d){this.a=d},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0B:function e0B(d,e){this.a=d
this.b=e},
e06:function e06(d,e){this.a=d
this.b=e},
e07:function e07(d,e){this.a=d
this.b=e},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0o:function e0o(d){this.a=d},
e0n:function e0n(d){this.a=d},
e0p:function e0p(){},
e0q:function e0q(){},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0t:function e0t(){},
e0u:function e0u(d){this.a=d},
e0m:function e0m(d,e){this.a=d
this.b=e},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0j:function e0j(d){this.a=d},
e0k:function e0k(d){this.a=d},
e0l:function e0l(d){this.a=d},
e_S:function e_S(){},
e_T:function e_T(d){this.a=d},
e_U:function e_U(d,e){this.a=d
this.b=e},
e_O:function e_O(d,e){this.a=d
this.b=e},
e_N:function e_N(d,e,f){this.a=d
this.b=e
this.c=f},
e09:function e09(d){this.a=d},
e0a:function e0a(d,e,f){this.a=d
this.b=e
this.c=f},
e03:function e03(d,e){this.a=d
this.b=e},
e0_:function e0_(d){this.a=d},
e_X:function e_X(d,e,f){this.a=d
this.b=e
this.c=f},
e00:function e00(d){this.a=d},
e01:function e01(d){this.a=d},
e02:function e02(){},
e04:function e04(d,e){this.a=d
this.b=e},
e_Y:function e_Y(d){this.a=d},
e_W:function e_W(d,e,f){this.a=d
this.b=e
this.c=f},
e_Z:function e_Z(){},
e0e:function e0e(d){this.a=d},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0v:function e0v(d){this.a=d},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0x:function e0x(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0M:function e0M(){},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0G:function e0G(d,e,f){this.a=d
this.b=e
this.c=f},
e0E:function e0E(d,e,f){this.a=d
this.b=e
this.c=f},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0I:function e0I(d,e){this.a=d
this.b=e},
aBw:function aBw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgl:function bgl(d,e,f){this.c=d
this.d=e
this.a=f},
ddL:function ddL(){},
ddM:function ddM(){},
adC:function adC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
de8:function de8(){},
de7:function de7(d){this.a=d},
a_B:function a_B(d,e,f){this.c=d
this.d=e
this.a=f},
aBB:function aBB(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
de4:function de4(d){this.a=d},
de5:function de5(d,e,f){this.a=d
this.b=e
this.c=f},
de6:function de6(d,e){this.a=d
this.b=e},
de2:function de2(d,e){this.a=d
this.b=e},
de0:function de0(d){this.a=d},
ddZ:function ddZ(d){this.a=d},
ddW:function ddW(d){this.a=d},
de1:function de1(d){this.a=d},
ddY:function ddY(d){this.a=d},
de3:function de3(d){this.a=d},
de_:function de_(d){this.a=d},
ddX:function ddX(d){this.a=d},
a_y:function a_y(d,e,f){this.c=d
this.d=e
this.a=f},
aBy:function aBy(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
ddI:function ddI(d){this.a=d},
ddH:function ddH(d,e){this.a=d
this.b=e},
ddJ:function ddJ(d){this.a=d},
ddG:function ddG(d,e){this.a=d
this.b=e},
ddK:function ddK(d){this.a=d},
ddF:function ddF(d,e){this.a=d
this.b=e},
ddB:function ddB(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddD:function ddD(d,e){this.a=d
this.b=e},
ddE:function ddE(d){this.a=d},
QM:function QM(d,e,f){this.c=d
this.d=e
this.a=f},
aBE:function aBE(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
del:function del(d){this.a=d},
dem:function dem(d){this.a=d},
den:function den(d){this.a=d},
deo:function deo(d){this.a=d},
dep:function dep(d,e){this.a=d
this.b=e},
deq:function deq(d){this.a=d},
des:function des(d){this.a=d},
der:function der(d){this.a=d},
a_D:function a_D(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBC:function aBC(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
deh:function deh(d,e){this.a=d
this.b=e},
dei:function dei(d,e){this.a=d
this.b=e},
de9:function de9(d,e,f){this.a=d
this.b=e
this.c=f},
dea:function dea(d){this.a=d},
deb:function deb(){},
deg:function deg(){},
dec:function dec(d,e){this.a=d
this.b=e},
ded:function ded(d,e){this.a=d
this.b=e},
dee:function dee(d,e){this.a=d
this.b=e},
def:function def(d,e){this.a=d
this.b=e},
adA:function adA(d,e){this.c=d
this.a=e},
ddA:function ddA(d){this.a=d},
a_x:function a_x(d){this.a=d},
aBx:function aBx(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_E:function a_E(d,e){this.c=d
this.a=e},
aBD:function aBD(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dek:function dek(d){this.a=d},
dej:function dej(d){this.a=d},
bgm:function bgm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hYN(){var x,w=$.ow(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
Oq(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oq=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Oq)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Oq)
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
return A.i($async$Oq,w)},
a8r(d){return B.hYO(d)},
hYO(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8r)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hP("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$a8r)
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
return A.i($async$a8r,w)},
Wt(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oq(),$async$Wt)
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
return A.b(B.a8r(s),$async$Wt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wt,w)},
Wu(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wu)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.br(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cfq(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hYN()
t=A.U(u).k("N<1,aa<q,aJ>>")
r=A.C(new A.N(u,new B.cfr(s),t),t.k("ak.E"))
x=6
return A.b(B.Oq(),$async$Wu)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8r(q),$async$Wu)
case 7:x=8
return A.b(B.a8s(r,u,g,s),$async$Wu)
case 8:v=new A.bsd(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wu,w)},
arh(d){var x=0,w=A.j(y.y),v,u,t
var $async$arh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Oq(),$async$arh)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arh,w)},
cfs(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oq(),$async$cfs)
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
return A.i($async$cfs,w)},
a8s(d,e,f,g){return B.hYP(d,e,f,g)},
hYP(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8s=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arf("media",r,new B.cfp(s,e,g),f,q),$async$a8s)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wt(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8s)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wt(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8s)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wt(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8s)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8s,w)},
Fn(d,e,f){return B.hYQ(d,e,f)},
hYQ(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fn=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fn)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arh(b3),$async$Fn)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iR,null,g),$async$Fn)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arh(b3),$async$Fn)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oq(),$async$Fn)
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
l=new A.abQ(a8.a,b0,"media",a8.d,a9).Dp(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1z(k,n,o,s,b7),$async$Fn)
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
return A.b(new A.abQ(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fn)
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
return A.b(B.a8r(e),$async$Fn)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fn,w)},
cfq:function cfq(){},
cfr:function cfr(d){this.a=d},
cfp:function cfp(d,e,f){this.a=d
this.b=e
this.c=f},
aTf(){var x=0,w=A.j(y.H),v,u
var $async$aTf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i8X=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTf)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTf)
case 3:u=$.hh7
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTf)
case 4:$.hh7=$.ihL=$.ihM=null
return A.h(null,w)}})
return A.i($async$aTf,w)},
fFx(d){var x=0,w=A.j(y.H),v,u
var $async$fFx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aao){x=1
break}u=new A.bn($.bF,y.d4)
d.c=new B.fFy(new A.c7(u,y.aY))
x=3
return A.b(u.iL(0,C.id,new B.fFz()),$async$fFx)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fFx,w)},
ihJ(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hYx(x):x},
hhb(d){var x=0,w=A.j(y.T),v,u,t
var $async$hhb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.Y(u,"WR")){v=B.arj(u)
x=1
break}v=B.hbC(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhb,w)},
hha(d){var x=0,w=A.j(y.T),v,u,t
var $async$hha=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.Y(u,"WR")){v=B.ark(u)
x=1
break}v=B.hbC(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hha,w)},
fZy(d){var x=0,w=A.j(y.T),v
var $async$fZy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ark(d),$async$fZy)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZy,w)},
bEJ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hha(d),$async$bEJ)
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
return A.i($async$bEJ,w)},
fsU(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fsU=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wn(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Ch(d.aqn(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsU,w)},
Hi(d,e,f){return B.ik1(d,e,f)},
ik1(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hhb(a1),$async$Hi)
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
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b_(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hLp().aGN(D.dI1,null),$async$Hi)
case 4:l=d.hh7=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAk(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bF,y.b1)
l.y=new B.fG8(f,k,new B.fG9(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a95(0,new B.YF(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amM(0),$async$Hi)
case 7:x=6
return A.b(d.a8Y(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fFx(l),$async$Hi)
case 8:x=9
return A.b(l.ar9(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ihJ(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arl(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hsQ(h)
case 11:v=new A.brt(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fFy:function fFy(d){this.a=d},
fFz:function fFz(){},
fG9:function fG9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fG8:function fG8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fG7:function fG7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
im6(d){switch(d){case"new":return D.eFS
case"checking":return D.eFT
case"connected":return D.eFV
case"completed":return D.eFU
case"failed":return D.eFX
case"disconnected":return D.eFY
case"closed":return D.aSn
case"count":return D.eFW}return D.aSn},
im7(d){switch(d){case"new":return D.aSo
case"gathering":return D.eFZ
case"complete":return D.aao}return D.aSo},
iwx(d){switch(d){case"stable":return D.eG_
case"have-local-offer":return D.eG0
case"have-local-pranswer":return D.eG2
case"have-remote-offer":return D.eG1
case"have-remote-pranswer":return D.eG3
case"closed":return D.aSu}return D.aSu},
iuG(d){switch(d){case"new":return D.aSr
case"connecting":return D.aSs
case"connected":return D.aSt
case"closed":return D.aap
case"disconnected":return D.aSq
case"failed":return D.aSp}return D.aap},
aaM:function aaM(d,e){this.a=d
this.b=e},
Pv:function Pv(d,e){this.a=d
this.b=e},
YE:function YE(d,e){this.a=d
this.b=e},
Pu:function Pu(d,e){this.a=d
this.b=e},
FS:function FS(d,e){this.a=d
this.b=e},
ctg:function ctg(){},
hdn(d){var x=new B.FR()
x.a=d
x.b=!0
return x},
FR:function FR(){this.b=this.a=$},
aaL:function aaL(){},
avT:function avT(){},
YF:function YF(d,e){this.a=d
this.b=e},
hby(){var x=0,w=A.j(y.H)
var $async$hby=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hby,w)},
hbB(d,e,f){var x=0,w=A.j(y.T),v
var $async$hbB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mR(D.n7))){v=null
x=1
break}v=B.fZP(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbB,w)},
hsQ(d){var x,w=C.agm.a5M(C.dV.aK(d),null)
if(w.length===0){x=C.dV.aK(d)
return C.cK.gco().aK(x)}return C.cK.gco().aK(w)},
hYw(d){var x,w,v=C.cH.aK(d)
try{x=C.cb.cD(0,C.agl.bgF(v,!1))
return x}catch(w){x=C.cb.cD(0,v)
return x}},
hbC(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.hYw(C.a.b_(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.b_(t,w.length)
try{v=C.cb.cD(0,C.cH.aK(x))
return v}catch(u){return x}}return null},
hYx(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hYy(){var x,w=$.ow(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1F(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1F)
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
return A.i($async$b1F,w)},
cf8(d,e){return B.hYz(d,e)},
hYz(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cf8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hP("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cQ,null),$async$cf8)
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
return A.i($async$cf8,w)},
b1I(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1F(d),$async$b1I)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1I,w)},
b1H(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hYy()
r=C.a.i(f)
t=C.dV.aK(s)
x=3
return A.b(B.cf8(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cK.gco().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1H)
case 3:if(!h){v=null
x=1
break}v=new A.a1E("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1H,w)},
b1G(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1F(o),$async$b1G)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cD(0,C.cH.aK(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1G,w)},
cf9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cf9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bFF("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cQ),$async$cf9)
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
return A.i($async$cf9,w)},
b1J(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jp(),$async$b1J)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1J,w)},
arc(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arc)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1J(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arc,w)},
ara(d,e){var x=0,w=A.j(y.H)
var $async$ara=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ara)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ara)
case 2:return A.h(null,w)}})
return A.i($async$ara,w)},
a8j(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8j)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a8j)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8i(s),$async$a8j)
case 5:x=6
return A.b(B.ara(f,u),$async$a8j)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
a8k(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8k=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8k)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a8k)
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
return A.b(B.ara(g,q),$async$a8k)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8i(u),$async$a8k)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
a8l(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8l)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jp(),$async$a8l)
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
s=B.b1C(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8l)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8l)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8l,w)},
cfa(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfa)
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
return A.i($async$cfa,w)},
Jq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfa(d),$async$Jq)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1J(t),$async$Jq)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arb(d),$async$Jq)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1C(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arb(d),$async$Jq)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
arb(d){var x=0,w=A.j(y.H)
var $async$arb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arb)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arb)
case 2:return A.h(null,w)}})
return A.i($async$arb,w)},
b1K(){var x,w=$.ow(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8m(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hbD(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfd(d){return B.hYB(d)},
hYB(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8m(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfd)
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
return A.i($async$cfd,w)},
are(d,e){return B.hYC(d,e)},
hYC(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$are=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8m(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hP("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cQ,null),$async$are)
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
return A.i($async$are,w)},
cff(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cff=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8m(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.are(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cff)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cff,w)},
cfe(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8m(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.are(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfe)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfe,w)},
cfg(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfg=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8m(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.are(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfg,w)},
cfh(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hbD(d)){v=null
x=1
break}x=3
return A.b(B.cfd(d),$async$cfh)
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
return A.i($async$cfh,w)},
a8t(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8t=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8t)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8t)
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
return A.i($async$a8t,w)},
ari(d){return B.hYR(d)},
hYR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ari=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$ari)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hP("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$ari)
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
return A.i($async$ari,w)},
arj(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arj)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8t(),$async$arj)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cD(0,C.cH.aK(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dK(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.ari(s),$async$arj)
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
return A.i($async$arj,w)},
arl(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$arl)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8t(),$async$arl)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dK(A.a1(s,r,q),r,q)
r=C.dV.aK(C.a.i(e))
q.n(0,"answer",C.cK.gco().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.ari(u),$async$arl)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arl,w)},
ark(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ark=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ark)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8t(),$async$ark)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cD(0,C.cH.aK(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ark,w)},
aqb(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.r_)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$aqb)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aqb)
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
return A.i($async$aqb,w)},
isQ(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fXJ(d){return B.isS(d)},
isS(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fXJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").LD(d,3600),$async$fXJ)
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
return A.i($async$fXJ,w)},
DJ(d,e,f,g,h,i){var x=null
return B.isP(d,e,f,g,h,i)},
isP(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DJ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hsT(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hbF(r),$async$DJ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fXJ(o),$async$DJ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8n(r),$async$DJ)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aW2)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MM(A.a([],g))
x=15
return A.b(d.f9(0,A.awG("GET",A.cD(n,0,null))).dg(0,C.H3),$async$DJ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8n(r),$async$DJ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lg(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DJ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1M(r,k),$async$DJ)
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
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wn(r)
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
return A.b(B.a8n(r),$async$DJ)
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
aST(d){return B.isR(d)},
isR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aST=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").W(0,d),$async$aST)
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
return A.i($async$aST,w)}},D,H,G,I,K,L
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
B.cth.prototype={
aGN(d,e){return this.cR8(d,e)},
cR8(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dK(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cu(t)))
t=J.k(u)
v=B.i2x(C.cK.gco().aK(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGN,w)}}
B.b6T.prototype={
bCV(d){var x=this,w=x.w
w.onclose=A.hv(new B.ctc(x))
w.onopen=A.hv(new B.ctd(x))
w.onmessage=A.hv(new B.cte(x))
w.onbufferedamountlow=A.hv(new B.ctf(x))},
gd2(d){return this.x},
aj0(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aj0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FR()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hdn(J.eQ(d))
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
case 8:v=t.hdn(s.apk(f,0,null))
x=1
break
case 7:case 4:v=B.hdn(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aj0,w)}}
B.b6U.prototype={
bCW(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hv(new B.cti(x)))
w.addEventListener("icecandidate",A.hv(new B.ctj(x)))
w.addEventListener("iceconnectionstatechange",A.hv(new B.ctk(x)))
w.onicegatheringstatechange=A.hv(new B.ctl(x))
w.addEventListener("signalingstatechange",A.hv(new B.ctm(x)))
if(!$.hlh())w.addEventListener("connectionstatechange",A.hv(new B.ctn(x)))
w.addEventListener("negotiationneeded",A.hv(new B.cto(x)))
w.addEventListener("track",A.hv(new B.ctp(x)))},
amM(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kl(A.cu(A.T(y.N,y.z)))),y.aQ),$async$amM)
case 3:t=f
v=new B.YF(t.sdp,t.type)
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
ar9(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ar9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YF(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar9,w)},
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
B.adB.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_A.prototype={
S(){return new B.aBA()},
gd1(){return this.c}}
B.aBA.prototype={
Z(){this.a3()
this.afw()},
afw(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1D(u.e,u.c),$async$afw)
case 2:t=e
if(v.c!=null)v.m(new B.ddT(v,t))
return A.h(null,w)}})
return A.i($async$afw,w)},
Rg(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ar7(t.e,t.c,!1),$async$Rg)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.ftS)
x=1
break}x=4
return A.b(B.a8h(u.a.c,"individual"),$async$Rg)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7k(A.ee(new B.ddQ(u),!1,null,y.H)),$async$Rg)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rg,w)},
JY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fDq(o),$async$JY)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8l(o.e,r,s,q),$async$JY)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqR)
x=1
break}x=5
return A.b(B.a8h(u.a.c,"member"),$async$JY)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7k(A.ee(new B.ddS(u),!1,null,y.H)),$async$JY)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JY,w)},
yN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8g(t.e,o,t.f,t.r,t.w,s),$async$yN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8h(u.a.c,"org_owner"),$async$yN)
case 4:x=5
return A.b(B.arc(u.a.c),$async$yN)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fDV(o),$async$yN)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8j(s,t,o,q.c),$async$yN)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fqN)
x=1
break}x=10
return A.b(B.arc(u.a.c),$async$yN)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7k(A.ee(new B.ddR(u),!1,null,y.H)),$async$yN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yN,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.ny:C.qr,p=B.hbA(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fO0,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hl,s,s,s),C.aB,D.h73,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.ccu,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lZ(new B.ddV(),s),C.P,v,C.e4,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.ae4(C.eY,C.aES,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcka(),s),C.af],u))
w.push(new B.ae4(C.pA,C.a5M,"Team Member","Sign in with your organization access code + password",t.gcl1(),s))
w.push(C.af)
w.push(new B.ae4(C.aqR,C.a7r,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckx(),s))
return A.c5(s,q,A.bm(!0,A.ca(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae4.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.lZ,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zs,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.n(p,s,w,q,s,s,C.n),s,C.bT,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEe.prototype={}
B.aHp.prototype={}
B.jD.prototype={
mR(d){var x=this.b,w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b_(x,w+1).toLowerCase())},
garR(){var x=this.d
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
aGw(d){return this.bg8(d,null)}}
B.Wh.prototype={
S(){return new B.aFB(new A.cy(null,y.A))},
gd1(){return this.c}}
B.aFB.prototype={
Z(){this.a3()
this.afx()},
afx(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cg(u.a.c),$async$afx)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e_H(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afx,w)},
afy(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fx(s)),$async$afy)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fuN)
case 1:return A.h(v,w)}})
return A.i($async$afy,w)},
a_Z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_Z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqb(s.d,4),$async$a_Z)
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
return A.b(A.abp("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajs)
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
r=A.ca(A.x(A.a([x,C.nd,w,C.lb,new A.e6(A.o(p,A.qi(p,p,!1,B.hYs(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bT,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.ep(C.DD,p,C.Wy,q.gccq(),p),1),C.as,A.E(A.de(C.zU,p,C.acK,q.gccr(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.T,new A.a5(1/0,p,A.ep(G.a4x,p,D.h2B,q.gczV(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,I.ao1,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wl.prototype={
S(){return new B.aFE(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aFE.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.Jo(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
a0_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jo(u.d.a.a)
if(t==null){u.m(new B.e0Q(u))
x=1
break}u.m(new B.e0R(u))
s=u.a
r=s.c
x=3
return A.b(B.a8f(s.d,new B.e0S(u),t,r),$async$a0_)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e0T(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0_,w)},
a3d(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3d=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e0U(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rU(r.a.c,q),$async$a3d)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e0V(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj5(p,m,l,j,k),$async$a3d)
case 8:o=e
if(r.c!=null)r.m(new B.e0W(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.e0X(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e0Y(r))
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
q=A.a([new A.uW(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blQ()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.OH,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e0Z(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mB,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mr(l.a.d,4)
m=A.C(new A.N(m,new B.e1_(x,new A.aIH(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fpi)
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
s=A.ep(G.a4x,k,D.h3I,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gccs()
t=A.bp(C.aD,k,k,0,C.c,k,C.nF,k,new A.ba(A.l(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lC(new B.e10(),A.x(A.a([e,new A.D(D.bHn,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.tY:D.h1Y,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.ck,C.a0O,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blQ.prototype={
pb(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.ho(C.bB,v.length),C.aP)}}
B.Wi.prototype={
S(){return new B.aFC()}}
B.aFC.prototype={
Z(){var x,w,v,u=this
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
break}r.m(new B.e_I(r))
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
return A.b(B.a8k(p,m,n,o,C.a.i(l).length===0?null:l),$async$afz)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fuo)
s=[1]
x=4
break}p.K(y.q).f.T(D.ft_)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e_J(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afz,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.ny:C.qr,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fVj,s,s,s,1,s,!0),p=A.o(s,D.bzp,C.f,s,s,new A.n(s,s,s,A.l(22),s,C.Is,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
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
B.adi.prototype={}
B.byL.prototype={
a62(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a62=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.aqn()))
x=3
return A.b(B.Sp(t,s),$async$a62)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a62,w)},
gd1(){return this.a}}
B.Oo.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_z.prototype={
S(){return new B.aBz(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aBz.prototype={
Z(){this.a3()
$.aU.x1$.push(new B.ddP(this))},
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
B(d){var x=this,w=null,v=B.a2E(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.o(w,H.aty,C.f,w,w,new A.n(w,w,w,A.l(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.aun,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uW(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byn()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CM,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b75),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.ddN(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mB,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cN(C.Mq,new A.bN(new A.n(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wK,A.x(A.a([l,C.aO,k,C.P,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dV(C.o7,new B.ddO(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.ba(A.l(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bN(new A.n(w,w,w,A.l(14),A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cM,12)],n),F.QI,C.n),C.bk,A.aF(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ezf,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccy(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OQ,w,C.d7,w,w,w)}}
B.byn.prototype={
pb(d,e){return e.amG(e.a.toUpperCase())}}
B.Wj.prototype={
S(){return new B.aFD(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFD.prototype={
Z(){var x=this
x.a3()
x.uu()
x.w=A.dg(C.jJ,new B.e0O(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Ws()
this.a2()},
a26(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a26=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.On(u.a.c),$async$a26)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bb(u.a.c),$async$a26)
case 4:u.m(new s.e0b(u,e))
u.ip("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a26,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.On(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bb(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e0c(u,s))
if(t>0)u.ip("Received "+A.w(t)+" file(s) via My Code.")
u.Oo(u.d)
B.Cg(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
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
return A.b(B.a8p(r,u.a.c),$async$Oo)
case 8:p=f
if(u.c==null){x=1
break}new B.e_L(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.Y(r.c,"video/")||r.mR(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wq(r,u.a.c),$async$Oo)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bb(u.a.c),$async$Oo)
case 12:u.m(new o.e_M(u,f))
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
return A.b(B.a8p(d,u.a.c),$async$OO)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e_R(u,d,t))
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
uv(d,e){return this.cKT(d,e)},
cKT(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e0C(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e0D(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaYk(){var x=this.a
return x.f||x.r||x.w},
IO(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IO=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.b(B.cf6(s,n,r,q,o,t),$async$IO)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fQO(o,u.a.c),$async$IO)
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
return A.b(B.DL(s,o,r,q,n,t),$async$IO)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IO,w)},
a1a(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arc(u.a.c),$async$a1a)
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
return A.b(A.a6(t,!1).ce(A.ee(new B.e08(u,r,q),!1,null,y.H)),$async$a1a)
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
return A.b(B.ar9(u.a.c),$async$a2g)
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
return A.b(u.uv(new B.e05(u,d,null,e,f),"Uploading\u2026"),$async$ado)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ado,w)},
bH6(){B.hIn(!1,new B.e_P(this))
return},
cyw(){this.m(new B.e0g(this))},
aB_(){var x=0,w=A.j(y.H),v=this
var $async$aB_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bH6()
return A.h(null,w)}})
return A.i($async$aB_,w)},
adk(){var x=0,w=A.j(y.H),v=this
var $async$adk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e_V(v),"Importing\u2026"),$async$adk)
case 2:return A.h(null,w)}})
return A.i($async$adk,w)},
Tk(d){return this.cKc(d)},
cKc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e0z(u,d),!1,null,y.H)),$async$Tk)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mR(D.SK)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ee(new B.e0A(u,d),!1,null,y.H)),$async$Tk)
case 8:x=1
break
case 7:x=u.c42(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ee(new B.e0B(u,d),!1,null,y.H)),$async$Tk)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tk,w)},
c42(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cW_,C.a.b_(x,w+1).toLowerCase())},
aha(d){return this.cke(d)},
cke(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aha=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e06(u,d),!1,null,y.H)),$async$aha)
case 5:x=1
break
case 4:u.m(new B.e07(u,d))
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
return A.b(u.uv(new B.e0s(u,d),"Preparing QR\u2026"),$async$SG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SG,w)},
ajS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0t(),A.U(t).k("N<1,q>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e0u(q),s),s.k("M.E"))
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
t=B.a2E(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0m(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajL)
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
case"delete":u.JH(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajL,w)},
YL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_S(),A.U(t).k("N<1,q>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_T(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$YL)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e_U(u,r),"Preparing file\u2026"),$async$YL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YL,w)},
aif(d){return this.crL(d)},
crL(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aif=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hJp(d,!1),$async$aif)
case 3:s=f
r=s==null
q=B.a8m(r?"":s)
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
return A.b(B.fYP(u,v.a.c),$async$ahg)
case 2:return A.h(null,w)}})
return A.i($async$ahg,w)},
bH5(){B.hIn(!1,new B.e_O(this,null))
return},
JX(d,e){return this.ckS(d,e)},
b3U(d){return this.JX(null,d)},
ckR(d){return this.JX(d,null)},
ckS(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JX=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e09(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xP.cq().apt(!0,C.a2z,!1),$async$JX)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e0a(l,s,r),"Preparing\u2026"),$async$JX)
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
return A.b(B.bGU(p,l,e,s.a.c),$async$JX)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JX,w)},
J3(d){return this.c37(d)},
c37(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hYr(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3U(t),$async$J3)
case 8:x=6
break
case 7:u.ip("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ip("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uv(new B.e03(u,d),"Receiving video\u2026"),$async$J3)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e04(u,d),"Receiving\u2026"),$async$J3)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J3,w)},
ET(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ET=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DE()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aif(t),$async$ET)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J3(s),$async$ET)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0e(u),!1,null,y.N)),$async$ET)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$ET)
case 10:x=1
break
case 9:x=11
return A.b(u.J3(C.a.i(r)),$async$ET)
case 11:case 1:return A.h(v,w)}})
return A.i($async$ET,w)},
aj8(d){return this.cx3(d)},
cx3(d){var x=0,w=A.j(y.H),v=this
var $async$aj8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e0d(v,d),"Saving\u2026"),$async$aj8)
case 2:return A.h(null,w)}})
return A.i($async$aj8,w)},
JH(d){return this.bPF(d)},
bPF(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ln(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JH)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cf9(t),$async$JH)
case 6:case 5:s=d.a
x=7
return A.b(B.Fm(u.a.c,s),$async$JH)
case 7:u.r.W(0,s)
x=8
return A.b(u.uu(),$async$JH)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JH,w)},
ajY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2E(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0y(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajY)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahg()
break
case"import":u.adk()
break}case 1:return A.h(v,w)}})
return A.i($async$ajY,w)},
ccw(d){var x=d.c
if(C.a.Y(x,"video/")||d.mR(D.n7))return C.qW
if(C.a.Y(x,"image/")||d.mR(D.SK))return C.v4
if(C.a.q(x,"pdf"))return C.I8
return D.arf},
B(d){var x,w,v=this,u=null,t=B.a2E(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Ik,u,u,u,new B.e0J(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c05,u,u,u,v.e?u:v.gcky(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyv()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bVi:C.arD,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a4u,u,u,u,v.e?u:v.gccx(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb5_(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c1T,u,u,u,v.e?u:new B.e0K(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.e0L(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.ds(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.ds(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kt(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBw(C.ju,s,!0,t,w?u:v.gcBq(),u),1)
x.push(new A.D(D.bG7,A.lC(new B.e0M(),A.A(A.a([s,C.as,A.E(new B.aBw(C.tl,"Export",!1,t,w?u:v.gbTy(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.ck,C.iB,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgl(t,v.e?u:v.gb5_(),u)
else s=A.ku(!0,u,u,new B.e0N(v,t),s,u,D.bG_,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBw.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.t8,t,new A.ba(s,C.a1),t,t,t)
return A.de(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t8,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ep(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgl.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.ddL(),new A.D(C.a1G,A.x(A.a([A.lC(new B.ddM(),A.o(x,A.X(C.zw,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ed,C.hO,x,x,new A.bt(0.86,1,w),s),C.e4,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.de(C.oQ,x,D.h7n,this.d,A.bp(C.aD,x,x,x,C.c,x,C.OO,x,new A.ba(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.Cy,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adC.prototype={
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
o=!C.a.Y(p,"video/")
if(!o||i.mR(D.n7))p=D.dwL
else{p=C.a.Y(p,"image/")||i.mR(D.SK)
n=y.O
p=p?A.a([C.cW,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garR()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.ax,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mR(D.n7)))l.push(A.h9j(C.aD,!1,j,j,j,!1,j,j,new B.de7(k),j,j,new A.ba(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oI,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lC(new B.de8(),new A.D(C.el,A.aF(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a19,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.ck,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_B.prototype={
S(){return new B.aBB()},
gd1(){return this.c}}
B.aBB.prototype={
Z(){this.a3()
this.yD()},
t(){B.hYG(this.e)
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
n=B.hYJ(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hYI(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.de4(s))
x=1
break}s.m(new B.de5(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.de6(s,q))
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
break}t.K(y.q).f.T(D.frn)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj5(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3c)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3c,w)},
c30(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.z,v,new B.de2(w,t),C.h2,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fX(t,C.z,v,new B.de3(w),C.h2,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v1(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2E(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DF,u,u,u,v.gb8M(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FY
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.de(C.DF,u,D.fQt,v.gb8M(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c30()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_y.prototype={
S(){return new B.aBy(A.ak3(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBy.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fA(w,A.a3(w).k("fA<1>")).iF(new B.ddI(v))
x.gcYM().iF(new B.ddJ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a3(x).k("fA<1>"))}if(x==null)x=C.bdv
x.iF(new B.ddK(v))
v.yD()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rU(p.c,p.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.ddB(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a4N(r,s.a.d.c)),$async$yD)
case 8:if(s.c==null){x=1
break}s.m(new B.ddC(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.ddD(s,q))
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
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2E(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FY
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bWe,C.f,o,o,new A.n(o,o,o,A.l(24),o,F.QI,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.ddE(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aW8(p.w)+" / "+p.aW8(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.fnJ,o,o,o,o,o,o)
r=p.f
q=A.X(r?C.v8:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.de(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccA(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qJ,x,o),o,o,o),o,!1,!1,o,o)}}
B.QM.prototype={
S(){return new B.aBE()},
gd1(){return this.c}}
B.aBE.prototype={
Z(){this.a3()
this.Qy()},
Qy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hbB(o.c,o.d,new B.del(s)),$async$Qy)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dem(s))
x=1
break}s.e=r
q=A.ikX(r)
if(q==null){s.m(new B.den(s))
x=1
break}s.d=q
q.aV(0,s.gb3I())
x=8
return A.b(q.iY(0).dg(0,C.t4),$async$Qy)
case 8:if(s.c==null){x=1
break}s.m(new B.deo(s))
x=9
return A.b(q.qv(0),$async$Qy)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dep(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qy,w)},
ciN(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.deq(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DE(0,x.gb3I())
w=x.d
if(w!=null)w.t()
B.iuZ(x.e)
x.a2()},
afC(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1L(u.c,u.d),$async$afC)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afC,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2E(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.oP,t,t,t,u.gccu(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.im(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FY
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aju(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fG(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AH(s,t),A.ay(t,A.xx(A.o(t,A.X(q?C.v8:C.he,C.c,t,t,t,48),C.f,t,t,new A.n(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bT,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.des(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_D.prototype={
S(){return new B.aBC(new A.cy(null,y.A))}}
B.aBC.prototype={
gcKA(){var x,w,v=this.a
if(v.e!==D.U7)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcKa(){var x,w,v=this.a
if(v.e!==D.Ax)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcKA()
if(x!=null){v.RI(x)
v.e=A.dg(C.H6,new B.deh(v,x))}w=v.gcKa()
if(w!=null){v.RH(w)
v.f=A.dg(C.fM,new B.dei(v,w))}},
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
return A.b(B.arh(d),$async$RH)
case 3:t=f
x=4
return A.b(B.cfs(d),$async$RH)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.de9(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RH,w)},
RI(d){return this.cpZ(d)},
cpZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fZy(d),$async$RI)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEJ(t),$async$RI)
case 4:if(u.c==null){x=1
break}u.m(new B.dea(u))
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
for(;;)switch(x){case 0:if(!A.DE()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fuy)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ee(new B.deb(),!1,null,y.N)),$async$a2Z)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEJ(s),$async$a2Z)
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
case 2:if(d.e!=null)d.K(y.q).f.T(D.frR)
return A.h(null,w)}})
return A.i($async$afA,w)},
a2T(d){return this.cx5(d)},
cx5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqb(s.d,4),$async$a2T)
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
if(C.a.Y(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
ab9(d){return this.bNd(d)},
bNd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZA()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fx(C.a.Y(t,"http")?t:"N2|"+t)),$async$ab9)
case 3:if(d.e!=null)d.K(y.q).f.T(D.ftx)
case 1:return A.h(v,w)}})
return A.i($async$ab9,w)},
afB(){var x=0,w=A.j(y.H),v=this,u
var $async$afB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ws(),$async$afB)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afB,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2E(d),i=m.a,h=i.c
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
q=A.a([C.P,A.qi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8k(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jz){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.o(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccv(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c5U,D.h_7,new B.dec(m,d),l)],p))}if(m.a.e===D.Jz&&m.gaZA()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c2e,D.fWI,new B.ded(m,d),l)],p))
if(m.a.e===D.Ax){x=(m.w?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.h.ad(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.G1:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}if(m.a.e===D.U7){x=(m.r?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.G1:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l),C.af,A.de(D.bYH,l,D.h2h,m.gcxs(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c5(v,w,new A.D(C.ac,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.i,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(C.DD,l,C.Wy,new B.dee(m,d),l),1),C.as,A.E(A.de(C.zU,l,C.acK,new B.def(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bb,l,m.gb1F(),A.bp(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.deg(),y.C)}}
B.adA.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.o(x,A.qi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bJ(C.Bc,x,new B.ddA(d),x)],u),x,x,C.no,v,x,x,x,x,D.fPr,x)}}
B.a_x.prototype={
S(){return new B.aBx(A.zS(C.yO,C.oe,C.vm))}}
B.aBx.prototype={
t(){this.d.t()
this.a2()},
azz(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fXf,x,x,x,1,x,!0),C.w,A.zR(this.d,C.bX,this.gazy()),x,!1,!1,x,x)}}
B.a_E.prototype={
S(){return new B.aBD(A.zS(C.yO,C.oe,C.vm))},
gd1(){return this.c}}
B.aBD.prototype={
c44(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahD(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MS("text/plain"),$async$ahD)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fus)
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
return A.b(B.hJp(p,!0),$async$ac0)
case 3:t=e
p=t==null
s=B.a8m(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fqY)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$ac0,w)},
t(){this.d.t()
this.a2()},
azz(d){var x,w,v,u,t,s=this
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
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.v0:C.PX,v,v,v,v,v),v,v,v,new B.dek(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h3c,v,v,v,1,v,!0)
u=A.zR(w.d,C.bX,w.gazy())
x=A.l(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eFx],s),v),v,!1,!1,v,v)}}
B.bgm.prototype={
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
B.aaM.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pv.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YE.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pu.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FS.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ctg.prototype={}
B.FR.prototype={}
B.aaL.prototype={}
B.avT.prototype={}
B.YF.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jD)","q(jD)","Wj(Z)","~()","a_A(Z)","H(H,jD)","QM(Z)","~(nQ)","cw(FR)","aA<jD?>(@)","Wh(Z)","Wl(Z)","D(jD)","jD(@)","aa<q,@>(jD)","a_z(Z)","Wi(Z)","a_B(Z)","a_y(Z)","a_D(Z)","adA(Z)","ai<jD>()","a_E(Z)","adC(Z,H)","a_x(Z)","aa<q,aJ>(jD)","cw(YE)","cw(aaL)","aA<cw>(FR)"])
B.ctc.prototype={
$1(d){var x=this.a
x.x=D.aSm
x.y.I(0,D.aSm)},
$S:77}
B.ctd.prototype={
$1(d){var x=this.a
x.x=D.aSl
x.y.I(0,D.aSl)},
$S:77}
B.cte.prototype={
$1(d){var x=this.a
x.aj0(A.ahS(d.data)).bG(new B.ctb(x),y.b)},
$S:77}
B.ctb.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ctf.prototype={
$1(d){},
$S:77}
B.cti.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i2w(d.channel))},
$S:17}
B.ctj.prototype={
$1(d){},
$S:17}
B.ctk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.im6(w.iceConnectionState)
x.cx=w
if($.hlh())switch(w.a){case 0:x.cy=D.aSr
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
$S:111}
B.ctl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.im7(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:111}
B.ctm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iwx(w.signalingState)},
$S:111}
B.ctn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iuG(w.connectionState)},
$S:111}
B.cto.prototype={
$1(d){},
$S:111}
B.ctp.prototype={
$1(d){},
$S:17}
B.fyR.prototype={
$1(d){var x=y.F.a(new A.qw([],[]).o5(d.target.result,!1)),w=C.wB.q(x.objectStoreNames,"blobs")
if(!w)C.wy.Gp(x,"blobs")},
$S:172}
B.fYD.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xb.fs(this.b)
$.eX.mK()
this.c.$1(d)},
$S:487}
B.fYF.prototype={
$1(d){return this.a.$1(B.ibF(this.b,this.c))},
$S:32}
B.fYE.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fYC.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fYS.prototype={
$1(d){var x=this
return B.hxP(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fYT.prototype={
$1(d){var x=this
return B.hxP(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fBw.prototype={
$1(d){var x=this
return B.cf3(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.ddT.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ddQ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf3(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.ddS.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf3(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.ddR.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf3(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.ddV.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bXj,x,x,x,new B.ddU(d),x,x,x,x,x,x),A.E(A.FD(D.St,!0,x,!1,C.a3E,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.St,x,g,C.aoi,0,e,f)},
$C:"$4",
$R:4,
$S:457}
B.ddU.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDt.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eU,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.o(v,D.bzJ,C.f,v,v,D.b8L,v,v,v,v,D.ao7,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0H,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.CO,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asT,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fDr(d),v),1),C.as,A.E(A.bJ(D.fVH,v,new B.fDs(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.n),v,v,v,C.H9,v,v,v,v),v)},
$S:69}
B.fDr.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDs.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fs7)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEe(v,x))},
$S:0}
B.fDX.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eU,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bzz,C.f,w,w,D.bag,w,w,w,w,D.ao7,w,w,1/0),new A.D(C.CO,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hgW(u,"Organization name",C.HI,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hgW(u,"Access code",C.mk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hgW(u,"Member password",C.DC,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h3j,w,new B.fDW(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.n),w,w,w,C.H9,w,w,w,w),w)},
$S:69}
B.fDW.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fsc)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHp(u,x,w))},
$S:0}
B.ceV.prototype={
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
p=C.a.Y(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vR(p,null).dg(0,C.a0N),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ch(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cf0.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cf1.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cf2.prototype={
$1(d){return d.b},
$S:z+2}
B.ceX.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceY.prototype={
$1(d){return d.b},
$S:z+2}
B.ceW.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.ceZ.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cf_.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fYQ.prototype={
$1(d){return new B.Wh(this.a,null)},
$S:z+11}
B.fYR.prototype={
$1(d){return new B.Wl(this.a,this.b,this.c,null)},
$S:z+12}
B.e_H.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e0Q.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e0R.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e0S.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e0P(x,d))},
$S:2}
B.e0P.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0T.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0U.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e0V.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e0W.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0X.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e0Y.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e10.prototype={
$3(d,e,f){return A.d4(A.dN(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.e0Z.prototype={
$1(d){var x=this.a
return x.f?null:x.a0_()},
$S:2}
B.e1_.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mR(D.SK))s=C.v4
else s=C.a.Y(s,"video/")||d.mR(D.n7)?C.qW:D.arf
x=this.b.a
w=y.p
return new A.D(C.kC,A.A(A.a([A.o(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garR(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e_I.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e_J.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cf4.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:105}
B.cf5.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:105}
B.fZR.prototype={
$2(d,e){return e===this.a},
$S:344}
B.fvT.prototype={
$1(d){return J.k(d)},
$S:16}
B.fBI.prototype={
$1(d){var x=this.b
B.i9E(C.Hv.ga7F(this.a)).bG(x.gCe(x),y.H)},
$S:131}
B.fBJ.prototype={
$1(d){return this.a.dd(0,null)},
$S:131}
B.fBK.prototype={
$0(){return null},
$S:11}
B.cfj.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fBL.prototype={
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
B.fFW.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fzV.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfo.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.h36.prototype={
$1(d){return new B.a_z(this.a,null)},
$S:z+16}
B.ddP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.ddN.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.ddO.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0O.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a26()},
$S:12}
B.e0b.prototype={
$0(){var x=J.bHZ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0c.prototype={
$0(){var x=J.bHZ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_L.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_K(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGw(this.c)}},
$S:0}
B.e_K.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_M.prototype={
$0(){var x=J.bHZ(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_R.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_Q(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGw(this.c)}},
$S:0}
B.e_Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0C.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e0D.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e08.prototype={
$1(d){return new B.Wi(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e05.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IO(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wm(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2g(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_P.prototype={
$1(d){this.a.ado(d,"No files selected.","Added")},
$S:487}
B.e0g.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e0f(),A.U(x).k("N<1,q>")))},
$S:0}
B.e0f.prototype={
$1(d){return d.a},
$S:z+2}
B.e_V.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xP.cq().d_K(C.a2z,!0),$async$$0)
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
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.ip("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arg(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e0z.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e0A.prototype={
$1(d){return new B.a_B(this.a.a.c,this.b,null)},
$S:z+18}
B.e0B.prototype={
$1(d){return new B.a_y(this.a.a.c,this.b,null)},
$S:z+19}
B.e06.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e07.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0s.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IO(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8o(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cts(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e0o(p),r),new B.e0p(),r.k("N<ak.E,q>")).c_(0,new B.e0q())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0r(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Ws(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0o.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e0n(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e0n.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0p.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e0q.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0r.prototype={
$1(d){var x=this.a
return new B.a_D(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e0t.prototype={
$1(d){return d.a},
$S:z+2}
B.e0u.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0m.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kB,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garR(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mR(D.n7)?C.tp:C.nP
p=!x||p.mR(D.n7)?"Play video":"View"
return new A.bN(new A.n(s,v,new A.bH(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CK,A.x(A.a([q,o,t,C.aB,B.a_C(!1,u,!1,w,p,new B.e0h(d),v),B.a_C(!1,u,!1,C.ju,"Share via QR",new B.e0i(d),"Letters/numbers QR code"),B.a_C(!1,u,!1,D.a3J,"Send to their Code",new B.e0j(d),"Enter someone else's personal code"),B.a_C(!1,u,!1,C.hC,"Download / save",new B.e0k(d),v),C.am,B.a_C(!1,u,!0,C.ej,"Delete",new B.e0l(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:805}
B.e0h.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e0i.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e0j.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e0k.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e0l.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e_S.prototype={
$1(d){return d.a},
$S:z+2}
B.e_T.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_U.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8q(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hl(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pC(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_O.prototype={
$1(d){var x=this.a
x.uv(new B.e_N(x,d,this.b),"Preparing\u2026")},
$S:487}
B.e_N.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wm(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGU(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e09.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e0a.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hbE(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e03.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.e0_(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e00(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e01(s))
case 5:x=8
return A.b(r.b.iL(0,C.H3,new B.e02()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uu(),$async$$0)
case 9:s.ip("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0_.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_X(x,d,e))},
$S:212}
B.e_X.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e00.prototype={
$1(d){return new B.adA(this.a.a,null)},
$S:z+21}
B.e01.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e02.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e04.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jo(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8e(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3U(B.Jo(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arg(new B.e_Y(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hbD(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e_Z()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_Y.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_W(x,d,e))},
$S:212}
B.e_W.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_Z.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.e0e.prototype={
$1(d){return new B.a_E(this.a.a.c,null)},
$S:z+23}
B.e0d.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1L(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0y.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.n(v[2],x,new A.bH(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CK,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kB,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_C(!0,w,!1,C.mk,"My Code",new B.e0v(d),"Your personal code & QR \u2014 others send docs to you"),B.a_C(!1,w,!1,D.a3J,"Send to their Code",new B.e0w(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_C(!1,w,!1,C.zM,"Import backup",new B.e0x(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:805}
B.e0v.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e0w.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bH5()},
$S:0}
B.e0x.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e0L.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jy(D.St,x,C.a3E,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gH(D.St).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:814}
B.e0J.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0K.prototype={
$0(){this.a.ajY()
return null},
$S:0}
B.e0M.prototype={
$3(d,e,f){return A.d4(A.dN(f,new A.r(0,(1-e)*10)),e)},
$S:107}
B.e0N.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adC(e,w,v,this.b,x.e,x.ccw(w),new B.e0F(x,w),new B.e0G(x,v,w),new B.e0H(x,w),new B.e0I(x,w),null)},
$S:z+24}
B.e0F.prototype={
$0(){this.a.aha(this.b)
return null},
$S:0}
B.e0G.prototype={
$0(){var x=this.a
return x.m(new B.e0E(x,this.b,this.c))},
$S:0}
B.e0E.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0H.prototype={
$0(){this.a.OO(this.b)
return null},
$S:0}
B.e0I.prototype={
$0(){this.a.ajL(this.b)
return null},
$S:0}
B.ddL.prototype={
$3(d,e,f){return A.d4(A.dN(f,new A.r(0,(1-e)*18)),e)},
$S:107}
B.ddM.prototype={
$3(d,e,f){return A.e1(C.z,f,e,null,null)},
$S:115}
B.de8.prototype={
$3(d,e,f){return A.d4(A.dN(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.de7.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.de4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.de5.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.de6.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.de2.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fX(w,C.z,x,new B.de0(this.a),C.h2,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.de1(this.a))
return C.bM},
$S:148}
B.de0.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddZ(this.a))
return C.bM},
$S:203}
B.ddZ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddW(x))},
$S:7}
B.ddW.prototype={
$0(){return this.a.w=!0},
$S:0}
B.de1.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddY(x))},
$S:7}
B.ddY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.de3.prototype={
$3(d,e,f){$.aU.x1$.push(new B.de_(this.a))
return C.bM},
$S:203}
B.de_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddX(x))},
$S:7}
B.ddX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddI.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddH(x,d))},
$S:2045}
B.ddH.prototype={
$0(){return this.a.f=this.b===C.vJ},
$S:0}
B.ddJ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddG(x,d))},
$S:7}
B.ddG.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ddK.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddF(x,d))},
$S:7}
B.ddF.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ddB.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.ddC.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ddD.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.ddE.prototype={
$1(d){return this.a.d.NJ(0,A.dx(0,0,0,C.h.U(d),0,0))},
$S:6}
B.del.prototype={
$0(){var x=this.a.a
return B.rU(x.c,x.d)},
$S:2046}
B.dem.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.den.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.deo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dep.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.deq.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.des.prototype={
$0(){var x=this.a
x.m(new B.der(x))},
$S:0}
B.der.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.deh.prototype={
$1(d){return this.a.RI(this.b)},
$S:12}
B.dei.prototype={
$1(d){return this.a.RH(this.b)},
$S:12}
B.de9.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dea.prototype={
$0(){return this.a.r=!0},
$S:0}
B.deb.prototype={
$1(d){return D.hEZ},
$S:z+25}
B.deg.prototype={
$2(d,e){if(d)B.Ws()},
$S:130}
B.dec.prototype={
$0(){return this.a.abc(this.b)},
$S:0}
B.ded.prototype={
$0(){return this.a.ab9(this.b)},
$S:0}
B.dee.prototype={
$0(){return this.a.afA(this.b)},
$S:0}
B.def.prototype={
$0(){return this.a.a2T(this.b)},
$S:0}
B.ddA.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.dek.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.dej(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dej.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfq.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.cfr.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfp.prototype={
$2(d,e){return this.bnG(d,e)},
bnG(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wt(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2047}
B.fFy.prototype={
$1(d){if(d===D.aao&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fFz.prototype={
$0(){},
$S:11}
B.fG9.prototype={
bpg(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fsU(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hsT(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpg(d,e)},
$S:823}
B.fG8.prototype={
$1(d){var x=this
d.b=new B.fG7(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fG7.prototype={
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
return A.b(B.b1M(n,m),$async$$1)
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
return A.b(B.fsU(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8n(m),$async$$1)
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
x(v=B.aBA.prototype,"gcka","Rg",0)
x(v,"gcl1","JY",0)
x(v,"gckx","yN",0)
x(v=B.aFB.prototype,"gccq","afy",0)
x(v,"gccr","a_Z",0)
x(v,"gczV","ajs",0)
x(v=B.aFE.prototype,"gccs","a0_",0)
x(v,"gczW","a3d",0)
x(B.aFC.prototype,"gcct","afz",0)
x(B.aBz.prototype,"gccy","ccz",4)
x(v=B.aFD.prototype,"gcky","a1a",0)
x(v,"gcyv","cyw",4)
x(v,"gb5_","aB_",0)
x(v,"gcBq","ajS",0)
x(v,"gbTy","YL",0)
x(v,"gccx","ET",0)
x(B.aBB.prototype,"gb8M","a3c",0)
x(B.aBy.prototype,"gccA","a00",0)
x(v=B.aBE.prototype,"gb3I","ciN",4)
x(v,"gccu","afC",0)
x(v=B.aBC.prototype,"gcxs","a2Z",0)
x(v,"gb1F","afB",0)
w(B.aBx.prototype,"gazy","azz",8)
x(v=B.aBD.prototype,"gcnj","ahD",0)
x(v,"gbT1","ac0",0)
w(v,"gazy","azz",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aJ,[B.ctg,B.aaL,B.avT,B.aEe,B.aHp,B.jD,B.adi,B.byL,B.FR,B.YF])
w(B.cth,B.ctg)
w(B.b6T,B.aaL)
x(A.k8,[B.ctc,B.ctd,B.cte,B.ctb,B.ctf,B.cti,B.ctj,B.ctk,B.ctl,B.ctm,B.ctn,B.cto,B.ctp,B.fyR,B.fYD,B.fYF,B.fYE,B.fYS,B.fYT,B.fBw,B.ddQ,B.ddS,B.ddR,B.ddV,B.fDt,B.fDX,B.ceV,B.cf1,B.cf2,B.ceY,B.ceW,B.ceZ,B.cf_,B.fYQ,B.fYR,B.e0S,B.e10,B.e0Z,B.e1_,B.fvT,B.fBI,B.fBJ,B.cfj,B.fBL,B.fFW,B.fzV,B.fzW,B.cfo,B.h36,B.ddP,B.ddN,B.e0O,B.e_K,B.e_Q,B.e08,B.e_P,B.e0f,B.e0z,B.e0A,B.e0B,B.e06,B.e0o,B.e0n,B.e0p,B.e0q,B.e0r,B.e0t,B.e0u,B.e0m,B.e_S,B.e_T,B.e_O,B.e09,B.e00,B.e_Z,B.e0e,B.e0y,B.e0L,B.e0M,B.ddL,B.ddM,B.de8,B.de7,B.de2,B.de0,B.ddZ,B.de1,B.de3,B.de_,B.ddI,B.ddJ,B.ddK,B.ddE,B.deh,B.dei,B.deb,B.cfq,B.cfr,B.fFy,B.fG8,B.fG7])
w(B.b6U,B.avT)
x(A.lR,[B.fYC,B.ddT,B.ddU,B.fDr,B.fDs,B.fDW,B.e_H,B.e0Q,B.e0R,B.e0P,B.e0T,B.e0U,B.e0V,B.e0W,B.e0X,B.e0Y,B.e_I,B.e_J,B.fBK,B.ddO,B.e0b,B.e0c,B.e_L,B.e_M,B.e_R,B.e0C,B.e0D,B.e05,B.e0g,B.e_V,B.e07,B.e0s,B.e0h,B.e0i,B.e0j,B.e0k,B.e0l,B.e_U,B.e_N,B.e0a,B.e03,B.e_X,B.e01,B.e02,B.e04,B.e_W,B.e0d,B.e0v,B.e0w,B.e0x,B.e0J,B.e0K,B.e0F,B.e0G,B.e0E,B.e0H,B.e0I,B.de4,B.de5,B.de6,B.ddW,B.ddY,B.ddX,B.ddH,B.ddG,B.ddF,B.ddB,B.ddC,B.ddD,B.del,B.dem,B.den,B.deo,B.dep,B.deq,B.des,B.der,B.de9,B.dea,B.dec,B.ded,B.dee,B.def,B.ddA,B.dek,B.dej,B.fFz])
x(A.ol,[B.adB,B.Oo,B.aaM,B.Pv,B.YE,B.Pu,B.FS])
x(A.ag,[B.a_A,B.Wh,B.Wl,B.Wi,B.a_z,B.Wj,B.a_B,B.a_y,B.QM,B.a_D,B.a_x,B.a_E])
x(A.ah,[B.aBA,B.aFB,B.aFE,B.aFC,B.aBz,B.aFD,B.aBB,B.aBy,B.aBE,B.aBC,B.aBx,B.aBD])
x(A.av,[B.ae4,B.aBw,B.bgl,B.adC,B.adA,B.bgm])
x(A.lr,[B.cf0,B.ceX,B.cf4,B.cf5,B.fZR,B.e0_,B.e_Y,B.e0N,B.deg,B.cfp,B.fG9])
x(A.jL,[B.blQ,B.byn])})()
A.ng(b.typeUniverse,JSON.parse('{"b6T":{"aaL":[]},"b6U":{"avT":[]},"a_A":{"ag":[],"v":[]},"aBA":{"ah":["a_A"]},"ae4":{"av":[],"v":[]},"Wh":{"ag":[],"v":[]},"Wl":{"ag":[],"v":[]},"aFB":{"ah":["Wh"]},"aFE":{"ah":["Wl"]},"blQ":{"jL":[]},"Wi":{"ag":[],"v":[]},"aFC":{"ah":["Wi"]},"a_z":{"ag":[],"v":[]},"Wj":{"ag":[],"v":[]},"adC":{"av":[],"v":[]},"a_B":{"ag":[],"v":[]},"a_y":{"ag":[],"v":[]},"QM":{"ag":[],"v":[]},"a_D":{"ag":[],"v":[]},"adA":{"av":[],"v":[]},"a_x":{"ag":[],"v":[]},"a_E":{"ag":[],"v":[]},"aBz":{"ah":["a_z"]},"byn":{"jL":[]},"aFD":{"ah":["Wj"]},"aBw":{"av":[],"v":[]},"bgl":{"av":[],"v":[]},"aBB":{"ah":["a_B"]},"aBy":{"ah":["a_y"]},"aBE":{"ah":["QM"]},"aBC":{"ah":["a_D"]},"aBx":{"ah":["a_x"]},"aBD":{"ah":["a_E"]},"bgm":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.aC
return{J:x("no"),k:x("MQ()"),o:x("bq<q,q>"),F:x("zu"),g:x("aA<jD?>"),x:x("aA<~>"),V:x("R<ac>"),O:x("R<u>"),W:x("R<bk>"),Y:x("R<aa<q,Q>>"),t:x("R<aa<q,@>>"),r:x("R<jD>"),w:x("R<+file,name(mE,q)>"),u:x("R<cX>"),s:x("R<q>"),E:x("R<jL>"),a:x("R<e2>"),p:x("R<v>"),Z:x("R<H>"),G:x("bk"),A:x("cy<ah<ag>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bC<q,q>"),P:x("aa<q,@>"),f:x("aa<@,@>"),m:x("jY"),e:x("iAB"),af:x("F2"),U:x("jD"),b:x("cw"),C:x("aJ"),aK:x("yp"),ab:x("FR"),br:x("avT"),v:x("YF"),N:x("q"),X:x("bt<F>"),Q:x("mT"),D:x("e2"),aw:x("bl<q>"),cd:x("Y<aa<q,@>>"),c7:x("v"),ch:x("c7<ai<jD>>"),aW:x("c7<e2?>"),aY:x("c7<~>"),cx:x("adB"),b1:x("bn<ai<jD>>"),cf:x("bn<e2?>"),d4:x("bn<~>"),c4:x("aEe"),bG:x("aHp"),q:x("nG"),B:x("pU<FR>"),c6:x("pU<aaM>"),y:x("Q"),i:x("F"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("aa<q,@>?"),l:x("jD?"),R:x("aJ?"),c:x("YF?"),d:x("+answerQr,transfer(q,aA<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Oo,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e2?"),cm:x("adi?"),bk:x("aEe?"),ag:x("aHp?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b75=new A.ax(C.aD,2,C.r,-1)
D.cax=new A.a7(C.a5,C.a9,C.x,C.a5M,null,null)
D.b8L=new A.n(null,null,null,C.mJ,null,D.cax,C.n)
D.bag=new A.n(null,null,null,C.mJ,null,C.Is,C.n)
D.agY=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ais=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aju=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alf=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fQl=new A.B("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h4g=new A.B("Share the access code and member password with your team. They only sign in once.",null,C.Fd,null,null,null,null,null,null,null,null,null)
D.dnx=x([D.fQl,C.am,D.h4g],y.p)
D.bzp=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dnx,null)
D.h8M=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fUT=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fd,null,null,null,null,null,null,null,null,null)
D.dF1=x([D.h8M,C.am,D.fUT],y.p)
D.bzz=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dF1,null)
D.h4W=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fYR=new A.B("Enter the access code and password from your organization.",null,C.Fd,null,null,null,null,null,null,null,null,null)
D.dCK=x([D.h4W,C.am,D.fYR],y.p)
D.bzJ=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCK,null)
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
D.cWB=x([C.fq,C.b2,C.aD],y.O)
D.ccu=new A.a7(C.ay,C.aC,C.x,D.cWB,null,null)
D.cW_=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.St=x([C.fq,C.aD],y.O)
D.SK=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dwL=x([C.mR,C.aD],y.O)
D.erK={iceServers:0}
D.aMS={urls:0}
D.dIW=new A.bq(D.aMS,["stun:stun.l.google.com:19302"],y.o)
D.dIV=new A.bq(D.aMS,["stun:stun1.l.google.com:19302"],y.o)
D.dcO=x([D.dIW,D.dIV],A.aC("R<aa<q,q>>"))
D.dI1=new A.bq(D.erK,[D.dcO],A.aC("bq<q,@>"))
D.Jz=new B.Oo(0,"lanDirect")
D.U6=new B.Oo(1,"cloudStash")
D.dVS=new B.Oo(2,"inlineInstant")
D.U7=new B.Oo(3,"webrtcLink")
D.Ax=new B.Oo(4,"videoCloud")
D.h4f=new A.B("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLF=x([C.at1,C.ae,D.h4f],y.p)
D.fiD=new A.c8(C.aM,C.b9,C.i,C.l,null,C.p,null,0,D.cLF,null)
D.ezf=new A.D(C.co,D.fiD,null)
D.fGI=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.IX,null,null,null)
D.fQV=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fGI,null,C.K,null,null,null,null,null,null,null)
D.eyq=new A.D(C.CR,D.fQV,null)
D.beQ=new A.cj(C.z,null,null,D.eyq,null)
D.eFx=new A.cK(0,null,0,28,null,null,D.beQ,null)
D.eFR=new B.aaM(0,"RTCDataChannelConnecting")
D.aSl=new B.aaM(1,"RTCDataChannelOpen")
D.aSm=new B.aaM(3,"RTCDataChannelClosed")
D.eFS=new B.FS(0,"RTCIceConnectionStateNew")
D.eFT=new B.FS(1,"RTCIceConnectionStateChecking")
D.eFU=new B.FS(2,"RTCIceConnectionStateCompleted")
D.eFV=new B.FS(3,"RTCIceConnectionStateConnected")
D.eFW=new B.FS(4,"RTCIceConnectionStateCount")
D.eFX=new B.FS(5,"RTCIceConnectionStateFailed")
D.eFY=new B.FS(6,"RTCIceConnectionStateDisconnected")
D.aSn=new B.FS(7,"RTCIceConnectionStateClosed")
D.aSo=new B.YE(0,"RTCIceGatheringStateNew")
D.eFZ=new B.YE(1,"RTCIceGatheringStateGathering")
D.aao=new B.YE(2,"RTCIceGatheringStateComplete")
D.aap=new B.Pu(0,"RTCPeerConnectionStateClosed")
D.aSp=new B.Pu(1,"RTCPeerConnectionStateFailed")
D.aSq=new B.Pu(2,"RTCPeerConnectionStateDisconnected")
D.aSr=new B.Pu(3,"RTCPeerConnectionStateNew")
D.aSs=new B.Pu(4,"RTCPeerConnectionStateConnecting")
D.aSt=new B.Pu(5,"RTCPeerConnectionStateConnected")
D.eG_=new B.Pv(0,"RTCSignalingStateStable")
D.eG0=new B.Pv(1,"RTCSignalingStateHaveLocalOffer")
D.eG1=new B.Pv(2,"RTCSignalingStateHaveRemoteOffer")
D.eG2=new B.Pv(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eG3=new B.Pv(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSu=new B.Pv(5,"RTCSignalingStateClosed")
D.fnJ=new A.au(160,48)
D.bg5=new A.fi(2,null,null,null,null,C.aD,null,null,null,null)
D.fpi=new A.a5(16,16,D.bg5,null)
D.fUd=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fqN=new A.b0(D.fUd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0V=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fqR=new A.b0(D.h0V,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9P=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fqY=new A.b0(D.h9P,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTO=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.frn=new A.b0(D.fTO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h56=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVC=new A.b0(D.h56,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6y=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.frR=new A.b0(D.h6y,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbi=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fs7=new A.b0(D.hbi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9e=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsc=new A.b0(D.h9e,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hat=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ft_=new A.b0(D.hat,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSn=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new A.b0(D.fSn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2P=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ftS=new A.b0(D.h2P,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWx=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fuo=new A.b0(D.fWx,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbn=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fus=new A.b0(D.hbn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSD=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fuy=new A.b0(D.fSD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRh=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fuN=new A.b0(D.fRh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fO0=new A.B("NGMY DOC SHARE",null,C.aX1,null,null,null,null,null,null,null,null,null)
D.fPr=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fQt=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fVj=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fVH=new A.B("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fWI=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fXf=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_7=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h1Y=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.h2h=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2B=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h3c=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3j=new A.B("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.h3I=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h73=new A.B("Share files & videos\nwith a scan.",null,C.aX4,null,null,null,null,null,null,null,null,null)
D.h7n=new A.B("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hEZ=new B.a_x(null)
D.adL=new B.adB(0,"docShare")
D.adM=new B.adB(1,"gate")
D.Xb=new B.adB(2,"gateNoIndividual")})();(function staticFields(){$.aQf=null
$.fqu=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahG=A.T(y.N,A.aC("mE"))
$.S9=A.T(y.N,y.D)
$.fra=A.T(y.N,A.aC("adi"))
$.cfi=A.T(y.S,A.aC("byL"))
$.hsS=1
$.ihM=null
$.ihL=null
$.i8X=null
$.hh7=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iB5","hLp",()=>new B.cth())
x($,"iz_","hlh",()=>C.a.q(A.bB(A.bB(A.bB(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["C3HNMZk9iqs+igl1G+2V+DtxnPs="]=a.current})($__dart_deferred_initializers__);