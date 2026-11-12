((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={csi:function csi(){},
hZp(d){var x=null,w=new B.b64(d,D.eyk,new A.pM(x,x,y.c6),new A.pM(x,x,y.B))
w.bCh(d)
return w},
b64:function b64(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
csd:function csd(d){this.a=d},
cse:function cse(d){this.a=d},
csf:function csf(d){this.a=d},
csc:function csc(d){this.a=d},
csg:function csg(d){this.a=d},
hZq(d,e){var x=y.N
x=new B.b65(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCi(d,e)
return x},
b65:function b65(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
csj:function csj(d){this.a=d},
csk:function csk(d){this.a=d},
csl:function csl(d){this.a=d},
csm:function csm(d){this.a=d},
csn:function csn(d){this.a=d},
cso:function cso(d){this.a=d},
csp:function csp(d){this.a=d},
csq:function csq(d){this.a=d},
hds(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zz.My(x,"ngmy_doc_share_v1",new B.fwr(),1)},
i5a(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wP(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
S7(d,e){return B.ild(d,e)},
ild(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPs
x=7
return A.b(o==null?$.aPs=B.hds():o,$async$S7)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.n0(s,"blobs","readwrite")
C.j8.mx(J.n_(q,"blobs"),r,d)
x=8
return A.b(J.pV(q),$async$S7)
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
return A.i($async$S7,w)},
S6(d){return B.ilc(d)},
ilc(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPs
x=7
return A.b(o==null?$.aPs=B.hds():o,$async$S6)
case 7:s=f
r=J.n0(s,"blobs","readonly")
x=8
return A.b(C.j8.A4(J.n_(r,"blobs"),d),$async$S6)
case 8:q=f
x=9
return A.b(J.pV(r),$async$S6)
case 9:o=B.i5a(q)
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
return A.i($async$S6,w)},
ai0(d){return B.ilb(d)},
ilb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ai0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPs
x=7
return A.b(p==null?$.aPs=B.hds():p,$async$ai0)
case 7:s=f
r=J.n0(s,"blobs","readwrite")
C.j8.Gk(J.n_(r,"blobs"),d)
x=8
return A.b(J.pV(r),$async$ai0)
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
return A.i($async$ai0,w)},
fwr:function fwr(){},
i7P(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqU(w,v))}return u},
hEu(d,e){var x,w={},v=A.aY8("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fVJ(w,v,e)
C.wP.z6(v,"change",new B.fVL(w,v,!1))
C.wP.z6(v,"cancel",new B.fVK(w))
$.eW.mC()
v.click()
A.bQ(C.akR,new B.fVI(w),y.H)},
fVJ:function fVJ(d,e,f){this.a=d
this.b=e
this.c=f},
fVL:function fVL(d,e,f){this.a=d
this.b=e
this.c=f},
fVK:function fVK(d){this.a=d},
fVI:function fVI(d){this.a=d},
DG(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUx()?3:4
break
case 3:x=5
return A.b(B.hzi(e,d,s,!0,!1,f,g,h,!1,i),$async$DG)
case 5:x=1
break
case 4:x=6
return A.b(B.RL(d,s,f,g,h,i),$async$DG)
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
return A.b(B.Jj(s,d),$async$DG)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.frW(s,d),$async$DG)
case 14:x=12
return A.b(r.hzi(q,p,o,n,m,l,k,j,a1,i),$async$DG)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ca(A.e9(new B.fVY(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ca(A.e9(new B.fVZ(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DG,w)},
RL(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RL=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0P(e),$async$RL)
case 3:u=k
x=4
return A.b(B.aqx(d,e,!1),$async$RL)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jj(e,d),$async$RL)
case 7:if(k){v=D.acv
x=1
break}x=8
return A.b(B.W0(e),$async$RL)
case 8:v=t?D.Wz:D.acw
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0N(d,e)){v=D.acv
x=1
break}x=11
return A.b(B.W0(e),$async$RL)
case 11:v=t?D.Wz:D.acw
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h8o(d,e)){v=D.acv
x=1
break}x=14
return A.b(B.W0(e),$async$RL)
case 14:v=D.Wz
x=1
break
case 13:v=t?D.Wz:D.acw
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
frW(d,e){var x=0,w=A.j(y.y),v
var $async$frW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0N(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0P(d),$async$frW)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frW,w)},
hzi(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ca(A.e9(new B.fz4(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
huh(d,e,f,g,h,i,j){return new B.a_f(e,j,d,g,h,i,f,null)},
fAY(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fAY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bT(C.L,null,new B.fB0(A.S(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fAY)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAY,w)},
fBs(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fBs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bT(C.L,null,new B.fBu(A.S(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fBs)
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
return A.i($async$fBs,w)},
hdD(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bt(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fOf(d,e){var x=0,w=A.j(y.H),v
var $async$fOf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.W0(e),$async$fOf)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eO()
case 1:return A.h(v,w)}})
return A.i($async$fOf,w)},
fVY:function fVY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVZ:function fVZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
add:function add(d,e){this.a=d
this.b=e},
fz4:function fz4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_f:function a_f(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAW:function aAW(){this.c=this.a=this.d=null},
dcF:function dcF(d,e){this.a=d
this.b=e},
dcC:function dcC(d){this.a=d},
dcE:function dcE(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcH:function dcH(){},
dcG:function dcG(d){this.a=d},
adG:function adG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDz:function aDz(d,e){this.a=d
this.b=e},
aGI:function aGI(d,e,f){this.a=d
this.b=e
this.c=f},
fB0:function fB0(d,e,f){this.a=d
this.b=e
this.c=f},
fAZ:function fAZ(d){this.a=d},
fB_:function fB_(d,e,f){this.a=d
this.b=e
this.c=f},
fBu:function fBu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBt:function fBt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ce6(d,e,f,g,h){return B.hUh(d,e,f,g,h)},
hUh(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ce6=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dL(d,new B.ce7(s,e,h,g,f,q),y.g),y.l),$async$ce6)
case 3:r=p.aU(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce6,w)},
b0K(d,e,f,g,h){return B.hUi(d,e,f,g,h)},
hUi(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0K=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aw5("GET",d)
o=A.h4N()
if(o==null)o=new A.MA(A.a([],y.W))
x=7
return A.b(o.f8(0,s).dg(0,C.GB),$async$b0K)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CQ(),$async$b0K)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ck(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0K,w)},
b0J(d){return B.hUf(d)},
hUf(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vN(d,null).dg(0,C.om),$async$b0J)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.ma(A.m8(p.e)).cI(0,p.w),null)
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
return A.i($async$b0J,w)},
ce5(d){return B.hUg(d)},
hUg(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ce5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vN(d,null).dg(0,C.qw),$async$ce5)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ma(A.m8(q.e)).cI(0,q.w)
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
return A.i($async$ce5,w)},
ce7:function ce7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jB:function jB(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jh(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hUn(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.Jh(C.a.b2(t,u.length))}return null},
hUo(d){var x=B.Jh(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hUj(){var x,w=$.or(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a7P(d){return B.hUk(d)},
hUk(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bL),$async$a7P)
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
return A.i($async$a7P,w)},
a7Q(d,e){return B.hUl(d,e)},
hUl(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7Q=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cL,null),$async$a7Q)
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
return A.i($async$a7Q,w)},
Cj(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cj)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jh(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7R(r),$async$Cj)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7P("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cj)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jh(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cj)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hUj()
x=14
return A.b(B.a7R(m),$async$Cj)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7Q("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cj)
case 15:k=f
x=16
return A.b(B.a7Q("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cj)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cj)
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
return A.i($async$Cj,w)},
a7R(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jh(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7P("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7R)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7R,w)},
a7S(d,e,f,g){return B.hUp(d,e,f,g)},
hUp(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7S=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jh(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7R(r),$async$a7S)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.ced())>1048576||g.aV(d,new B.cee())){v=B.Fg(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a82("myCode",d,a0),$async$a7S)
case 4:u=a3
try{t=C.Y.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cq(s)||J.ad(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fg(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0S(u,g.gI(d),a0),$async$a7S)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.or().az(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dL(d,new B.cef(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0L(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a7S)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7S,w)},
Fg(d,e,f,g,h){return B.hUm(d,e,f,g,h)},
hUm(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fg=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Fg)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cF(a6,0,new B.ce9())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.or().az(9999)
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
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jl(a9,q)
a0=new A.L9(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fg)
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
a4=A.pj(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abr(a1.a,a4,"media",a1.d,a2).xH(m,n,new A.Ev(!0,q.c)),$async$Fg)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fg)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aS1(r),$async$Fg)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dL(a6,new B.cea(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0L(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fg)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aS1(r),$async$Fg)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fg,w)},
b0L(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7P(t),$async$b0L)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.ce8(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7Q(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0L,w)},
Oc(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oc=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7P("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oc)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cq(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aU(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a3(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b0M(k,a0),$async$Oc)
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
return A.b(B.b0R(h),$async$Oc)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.W7(g,a0),$async$Oc)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.ceb(),q),n)
d=A.C(new A.Y(r,new B.cec(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dB(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7Q("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oc)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oc,w)},
b0M(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cq(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aU(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a5(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aH(o.h(p,"partCount"))
j=o==null?null:C.i.L(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ip3(k,j)
C.d.v(s,i)
x=5
return A.b(B.DE(l,m,"Received via My Code",t,e,i),$async$b0M)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aS1(s),$async$b0M)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0M,w)},
ced:function ced(){},
cee:function cee(){},
cef:function cef(){},
ce9:function ce9(){},
cea:function cea(){},
ce8:function ce8(){},
ceb:function ceb(){},
cec:function cec(){},
fVV(d,e){var x=0,w=A.j(y.H)
var $async$fVV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ca(A.e9(new B.fVW(e),!1,null,y.H)),$async$fVV)
case 2:return A.h(null,w)}})
return A.i($async$fVV,w)},
bFT(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cq(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ca(A.e9(new B.fVX(g,e,f),!1,null,y.y)),$async$bFT)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFT,w)},
fVW:function fVW(d){this.a=d},
fVX:function fVX(d,e,f){this.a=d
this.b=e
this.c=f},
VY:function VY(d,e){this.c=d
this.a=e},
aEW:function aEW(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
W1:function W1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEZ:function aEZ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_7:function e_7(d){this.a=d},
e_8:function e_8(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_6:function e_6(d,e){this.a=d
this.b=e},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d){this.a=d},
e_c:function e_c(d,e){this.a=d
this.b=e},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_f:function e_f(d){this.a=d},
e_i:function e_i(){},
e_g:function e_g(d){this.a=d},
e_h:function e_h(d,e){this.a=d
this.b=e},
bl2:function bl2(){},
VZ:function VZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEX:function aEX(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
h8p(d){var x=d.i6
if(x>=0)return C.o.L(x)
return 10},
hUr(d){var x=d.l3
if(x>=0)return x
return 4.99},
hUq(d){var x=d.m4,w=y.N
w=x.jr(x,new B.ceh(),w,w)
return w},
hpl(d){var x=d.l4,w=y.N
w=x.jr(x,new B.cei(),w,w)
return w},
b0P(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0P)
case 7:s=f
r=A.w(p)
r=A.aS(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b0P,w)},
a7U(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7U)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7U)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7U,w)},
W0(d){var x=0,w=A.j(y.H),v,u
var $async$W0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$W0)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$W0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$W0,w)},
h8o(d,e){var x,w,v
if(B.hUr(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hUq(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0N(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hpl(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hpm(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hpl(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dp(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqy(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqy)
case 7:s=f
r=A.w(p)
r=A.eo(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aqy,w)},
aqz(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqy(d),$async$aqz)
case 3:u=f
x=5
return A.b(A.az(),$async$aqz)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqz,w)},
aqx(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h8p(d)
if(u<=0){v=!1
x=1
break}if(B.h8o(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqy(e),$async$aqx)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqx,w)},
b0O(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jj(e,d),$async$b0O)
case 3:if(g){v=-1
x=1
break}u=B.h8p(d)
if(u<=0){v=-1
x=1
break}if(B.h8o(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqy(e),$async$b0O)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0O,w)},
cek(d,e,f){var x=0,w=A.j(y.y),v
var $async$cek=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jj(e,d),$async$cek)
case 3:if(h){v=!1
x=1
break}v=B.aqx(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cek,w)},
cej(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cej=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cek(d,u,i.gUx()),$async$cej)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cej,w)},
a7T(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7T=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUx()){v=!0
x=1
break}if(B.b0N(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.TV),$async$a7T)
case 5:x=k?3:4
break
case 3:B.hpm(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7T)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lc(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TV,"Doc Share for Organizations"),$async$a7T)
case 7:if(!k){v=!1
x=1
break}B.hpm(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7T)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
ceh:function ceh(){},
cei:function cei(){},
fWP(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fWP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fWP)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.foj.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.foj.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWP,w)},
irX(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.foj.bt($.foj,new B.fWR(d))},
fWR:function fWR(d){this.a=d},
fpV(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fpV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.n2(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.j0,null,y.H),$async$fpV)
case 3:C.B9.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpV,w)},
agP(d,e,f){var x=0,w=A.j(y.H),v
var $async$agP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.foZ.n(0,d,new B.acV(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$agP)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.aw(A.I(["parts",e,"size",f],v,y.C),null)),$async$agP)
case 2:return A.h(null,w)}})
return A.i($async$agP,w)},
agJ(d){return B.i9P(d)},
i9P(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.foZ.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agJ)
case 3:u=j.aS(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cq(s)){v=null
x=1
break}o=J.b8(s,new B.ftv(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aH(J.t(t,"size"))
m=o==null?null:C.i.L(o)
q=m==null?0:m
p=new B.acV(r)
$.foZ.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agJ,w)},
RB(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.H1.n(0,d,u)
x=3
return A.b(B.S7(d,u),$async$RB)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RB,w)},
aPP(d){return B.i9N(d)},
i9N(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H1.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.S6(d),$async$aPP)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H1.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPP)
case 4:s=f
r=A.aS(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aN(r)
x=!J.cq(q)?9:10
break
case 9:B.RB(d,q)
x=11
return A.b(J.hk(s,d),$async$aPP)
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
return A.i($async$aPP,w)},
i5D(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cc(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cc(A.wP(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
return A.f3(null,y.K)},
a2L(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bE,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fz(r,"loadend",new B.fzg(r,t),!1,s)
A.fz(r,"error",new B.fzh(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iH(0,C.NT,new B.fzi())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2L,w)},
aQ8(d,e,f){return B.icb(d,e,f)},
icb(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQ8=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2L(i),$async$aQ8)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.S7(o,p),$async$aQ8)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agP(k,j,s),$async$aQ8)
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
return A.i($async$aQ8,w)},
aQ7(d,e,f){return B.ica(d,e,f)},
ica(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQ7=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQ8(d,e,f),$async$aQ7)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2L(f),$async$aQ7)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H1.n(0,s,r)
$.RS.n(0,s,r)
x=11
return A.b(B.RB(s,r),$async$aQ7)
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
return A.i($async$aQ7,w)},
Ck(d,e,f,g,h,i){return B.hUA(d,e,f,g,h,i)},
hUA(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ck=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cN.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jB(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b0V(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RB(s,d),$async$Ck)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Ck)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cP.gcu().aN(d)),$async$Ck)
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
return A.b(B.Bg(e),$async$Ck)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hb(e,j),$async$Ck)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ck,w)},
W2(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W2=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bg(d),$async$W2)
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
k=B.hpo(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jB(m,n,k,l,j,"From folder",null,B.b0V(),null)
$.ahi.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2L(o),$async$W2)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H1.n(0,h,g)
$.RS.n(0,h,g)
B.RB(h,g)
x=9
break
case 10:x=11
return A.b(B.aQ7(d,m,o),$async$W2)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hb(d,t),$async$W2)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W2,w)},
h8t(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h8t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hpo(r,C.d.gan(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jk(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Ck(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8t,w)},
Jk(d,e,f,g,h,i){return B.hUz(d,e,f,g,h,i)},
hUz(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jk=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cN.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L9(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jk)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cq(m)){x=6
break}J.h7(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SE(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kJ(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.S7(k,l),$async$Jk)
case 11:J.c5(q,k);++p
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
return A.b(j.a1(0),$async$Jk)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.S7(k,new Uint8Array(A.cc(n))),$async$Jk)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agP(r,q,g),$async$Jk)
case 16:f=new B.jB(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b0V(),null)
x=17
return A.b(B.Bg(d),$async$Jk)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hb(d,e),$async$Jk)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jk,w)},
W4(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$W4=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahi.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2L(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agJ(s),$async$W4)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.S6(u[o]),$async$W4)
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
v=A.wP(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RS.h(0,s)
if(i==null)i=$.H1.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rQ(d,e),$async$W4)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.RS.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wP(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W4,w)},
hpo(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rQ(d,e){return B.hUB(d,e)},
hUB(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rQ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RS.h(0,f)
if(e==null)e=$.H1.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahi.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2L(s),$async$rQ)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H1.n(0,f,r)
$.RS.n(0,f,r)
B.RB(f,r)
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
return A.b(B.agJ(f),$async$rQ)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azJ(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.S6(g[l]),$async$rQ)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apU()
if(!C.aI.gau(r)){$.H1.n(0,f,r)
$.RS.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPP(f),$async$rQ)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.RS.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.W4(a0,a1,0,g),$async$rQ)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.H1.n(0,f,h)
$.RS.n(0,f,h)
B.RB(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rQ,w)},
hUE(d){var x,w,v=$.ahi.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hUF(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hUC(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqF(d,e,f,g,h){return B.hUD(d,e,f,g,h)},
hUD(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqF=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahi.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2L(s),$async$aqF)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rQ(g,e),$async$aqF)
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
return A.b(n.iC(d).xH(h,r,new A.Ev(!0,e.c)),$async$aqF)
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
return A.i($async$aqF,w)},
hpq(d,e,f,g,h){var x,w,v,u,t=$.hpp
$.hpp=t+1
x=Date.now()
w=""+1000*x+"_"+C.cN.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cev.n(0,t,new B.bxS(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azJ(u)))
return t},
h8u(d){var x=0,w=A.j(y.H)
var $async$h8u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8u,w)},
Jl(d,e){var $async$Jl=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahi.h(0,h)
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
return A.qr(B.W4(d,e,p,o<q?o:q),$async$Jl,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qr(A.Gz(n),$async$Jl,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qr(B.agJ("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jl,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qr(B.S6(h[l]),$async$Jl,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qr(A.Gz(k),$async$Jl,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qr(B.rQ(d,e),$async$Jl,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qr(A.Gz(A.wP(j,p,o<i?o:i)),$async$Jl,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qr(null,0,w)
case 2:return A.qr(t.at(-1),1,w)}})
var x=0,w=A.hyc($async$Jl,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hzZ(w)},
b0X(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cev.h(0,d)
if(t==null||J.cq(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5F(),$async$b0X)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0X,w)},
W3(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$W3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cev.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5F(),$async$W3)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agP(r.c,u,r.z),$async$W3)
case 4:t=new B.jB(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b0V(),null)
u=r.a
x=5
return A.b(B.Bg(u),$async$W3)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hb(u,s),$async$W3)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W3,w)},
a8_(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cev.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ai0(u[s]),$async$a8_)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8_,w)},
cex(d,e,f){var x=0,w=A.j(y.H)
var $async$cex=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCT(d,e,f),$async$cex)
case 2:return A.h(null,w)}})
return A.i($async$cex,w)},
cey(d,e,f){var x=0,w=A.j(y.H)
var $async$cey=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCU(d,e,f),$async$cey)
case 2:return A.h(null,w)}})
return A.i($async$cey,w)},
Fh(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bg(d),$async$Fh)
case 2:p=g
J.nQ(p,new B.cew(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H1.W(0,v)
$.ahi.W(0,e)
x=3
return A.b(B.agJ(v),$async$Fh)
case 3:u=g
$.foZ.W(0,v)
x=4
return A.b(A.az(),$async$Fh)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fh)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fh)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ai0(s[q]),$async$Fh)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ai0(v),$async$Fh)
case 13:x=14
return A.b(B.Hb(d,p),$async$Fh)
case 14:return A.h(null,w)}})
return A.i($async$Fh,w)},
b0W(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rQ(d,e),$async$b0W)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fpV(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0W,w)},
Bg(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bg)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fzj(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bg,w)},
Hb(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hb)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fDu(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.aw(t,null)),$async$Hb)
case 3:return A.h(null,w)}})
return A.i($async$Hb,w)},
bCT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bg(d),$async$bCT)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxu(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG_(f))
x=4
return A.b(B.Hb(d,u),$async$bCT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCT,w)},
bCU(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bg(d),$async$bCU)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxv(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOD(f))
x=4
return A.b(B.Hb(d,u),$async$bCU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCU,w)},
acV:function acV(d){this.a=d},
ftv:function ftv(){},
fzg:function fzg(d,e){this.a=d
this.b=e},
fzh:function fzh(d){this.a=d},
fzi:function fzi(){},
cew:function cew(d){this.a=d},
bxS:function bxS(d,e,f,g,h,i,j,k,l){var _=this
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
fzj:function fzj(){},
fDu:function fDu(){},
fxu:function fxu(d){this.a=d},
fxv:function fxv(d){this.a=d},
a80(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a80=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.ceB())?3:4
break
case 3:x=5
return A.b(B.b0Y(d,e),$async$a80)
case 5:u=g
if(u!=null){t=u.c
B.Oe(d,u.b,e,t)}v=u
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
return A.b(B.b0T(s),$async$a80)
case 10:case 9:if(g){v=new A.QX(1,D.Ty,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.W5(d,e),$async$a80)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wa(!0,!0,d,e),$async$a80)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oe(d,D.Ae,e,t)
v=new A.QX(p,D.Ae,t)
x=1
break}v=B.ceA(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a80,w)},
W5(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$W5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a82(null,d,e),$async$W5)
case 3:p=g
try{u=C.Y.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cq(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0S(p,d.length,e),$async$W5)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cey(e,C.d.gH(d).a,r.b),$async$W5)
case 7:case 6:q=r.a
x=8
return A.b(B.Oe(d,D.Ty,e,q),$async$W5)
case 8:v=new A.QX(d.length,D.Ty,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W5,w)},
W6(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$W6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a81(d,e),$async$W6)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cet(s,d,e,t),$async$W6)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0T(t),$async$W6)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rQ(e,d),$async$W6)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.W5(A.a([d],y.r),e),$async$W6)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W6,w)},
W8(){var x=0,w=A.j(y.H)
var $async$W8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h8n(),$async$W8)
case 2:x=3
return A.b(B.aSo(),$async$W8)
case 3:return A.h(null,w)}})
return A.i($async$W8,w)},
a81(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a81=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0V()
x=3
return A.b(B.cex(e,d.a,u),$async$a81)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a81,w)},
Oe(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Ty&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a81(p,f),$async$Oe)
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
return A.b(B.ces(o,p,u,f),$async$Oe)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cet(o,p,f,t),$async$Oe)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cer(o,u,p,f),$async$Oe)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oe,w)},
b0Y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cez(e,d),$async$b0Y)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wa(!1,!0,d,e),$async$b0Y)
case 4:u=g
if(u!=null){t=u.b
v=new A.QX(u.a,D.Ae,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Y,w)},
cez(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cez=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.W4(d,s,0,1),$async$cez)
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
return A.i($async$cez,w)},
ceA(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ceA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a82(null,d,e),$async$ceA)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hpn(u)
if(t.length>800){v=null
x=1
break}v=new A.QX(d.length,D.dOD,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceA,w)},
aqG(d,e,f){return B.hUI(d,e,f)},
hUI(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqG=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.np(g,1)
x=B.h8s(g)?3:4
break
case 3:x=5
return A.b(B.ceu(g),$async$aqG)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.np(g,13))
try{k=B.Fi(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.np(g,13))
u=9
x=12
return A.b(B.b0R(q),$async$aqG)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W7(p,a0)
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
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h8r(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W7(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.Jm(C.a.i(J.np(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.Jm(C.a.i(J.np(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aC(k,0,k.length-1)
else h=k
v=B.Jm(h,d,a0)
x=1
break}if(J.eH(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.W7(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqG,w)},
Jm(d,e,f){return B.hUG(d,e,f)},
hUG(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jm=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aC(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0J(r),$async$Jm)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0J(A.cF(s,0,null)),$async$Jm)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cq(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ce6(o,r,a1,n,a2),$async$Jm)
case 11:m=a4
x=J.cq(m)?12:13
break
case 12:x=14
return A.b(B.ce5(q),$async$Jm)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.W7(l,a2),$async$Jm)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cq(m)?null:m
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
return A.i($async$Jm,w)},
a82(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a82=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rQ(f,r),$async$a82)
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
return A.i($async$a82,w)},
W7(d,e){return B.hUH(d,e)},
hUH(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$W7=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aU(r)
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
return A.b(B.Ck(i,a3,d,k,l,o),$async$W7)
case 9:h=a5
if(h!=null)J.c5(n,h)
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
return A.i($async$W7,w)},
Od:function Od(d,e){this.a=d
this.b=e},
ceB:function ceB(){},
a2k(d){var x=A.S(d).ax.a===C.J,w=x?D.ai3:D.afD,v=x?D.ajS:C.c,u=x?C.aP:C.T,t=x?C.bK:C.an,s=x?D.ah2:C.aO
return new A.aHY([w,s,v,u,t,x?C.fo:C.bR])},
hFm(d,e){var x=e?C.w.j(0.72):C.aU
return A.cf(null,x,!0,null,new B.h00(e),d,null,!0,!0,y.N)},
ceg(d,e,f,g,h,i,j,k,l){return new B.W_(e,l,d,f,k,j,g,h,i,null)},
a_h(d,e,f,g,h,i,j){return new B.bfA(g,h,j,e,i,d,f,null)},
h00:function h00(d){this.a=d},
a_e:function a_e(d,e){this.c=d
this.a=e},
aAV:function aAV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcB:function dcB(d){this.a=d},
dcz:function dcz(d){this.a=d},
dcA:function dcA(d){this.a=d},
bxu:function bxu(){},
W_:function W_(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEY:function aEY(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_5:function e_5(d){this.a=d},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d,e,f){this.a=d
this.b=e
this.c=f},
dZ1:function dZ1(d){this.a=d},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ8:function dZ8(d,e,f){this.a=d
this.b=e
this.c=f},
dZ7:function dZ7(d){this.a=d},
dZU:function dZU(d,e){this.a=d
this.b=e},
dZV:function dZV(d){this.a=d},
dZq:function dZq(d,e,f){this.a=d
this.b=e
this.c=f},
dZn:function dZn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZ6:function dZ6(d){this.a=d},
dZy:function dZy(d){this.a=d},
dZx:function dZx(){},
dZc:function dZc(d){this.a=d},
dZR:function dZR(d,e){this.a=d
this.b=e},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZT:function dZT(d,e){this.a=d
this.b=e},
dZo:function dZo(d,e){this.a=d
this.b=e},
dZp:function dZp(d,e){this.a=d
this.b=e},
dZK:function dZK(d,e){this.a=d
this.b=e},
dZG:function dZG(d){this.a=d},
dZF:function dZF(d){this.a=d},
dZH:function dZH(){},
dZI:function dZI(){},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
dZL:function dZL(){},
dZM:function dZM(d){this.a=d},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZz:function dZz(d){this.a=d},
dZA:function dZA(d){this.a=d},
dZB:function dZB(d){this.a=d},
dZC:function dZC(d){this.a=d},
dZD:function dZD(d){this.a=d},
dZ9:function dZ9(){},
dZa:function dZa(d){this.a=d},
dZb:function dZb(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZ4:function dZ4(d,e,f){this.a=d
this.b=e
this.c=f},
dZr:function dZr(d){this.a=d},
dZs:function dZs(d,e,f){this.a=d
this.b=e
this.c=f},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZh:function dZh(d){this.a=d},
dZe:function dZe(d,e,f){this.a=d
this.b=e
this.c=f},
dZi:function dZi(d){this.a=d},
dZj:function dZj(d){this.a=d},
dZk:function dZk(){},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZf:function dZf(d){this.a=d},
dZd:function dZd(d,e,f){this.a=d
this.b=e
this.c=f},
dZg:function dZg(){},
dZw:function dZw(d){this.a=d},
dZv:function dZv(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZN:function dZN(d){this.a=d},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZP:function dZP(d){this.a=d},
e_2:function e_2(d){this.a=d},
e_0:function e_0(d){this.a=d},
e_1:function e_1(d){this.a=d},
e_3:function e_3(){},
e_4:function e_4(d,e){this.a=d
this.b=e},
dZX:function dZX(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e,f){this.a=d
this.b=e
this.c=f},
dZW:function dZW(d,e,f){this.a=d
this.b=e
this.c=f},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e__:function e__(d,e){this.a=d
this.b=e},
aAS:function aAS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfz:function bfz(d,e,f){this.c=d
this.d=e
this.a=f},
dcx:function dcx(){},
dcy:function dcy(){},
ade:function ade(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcV:function dcV(){},
dcU:function dcU(d){this.a=d},
a_g:function a_g(d,e,f){this.c=d
this.d=e
this.a=f},
aAX:function aAX(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dcR:function dcR(d){this.a=d},
dcS:function dcS(d,e,f){this.a=d
this.b=e
this.c=f},
dcT:function dcT(d,e){this.a=d
this.b=e},
dcP:function dcP(d,e){this.a=d
this.b=e},
dcN:function dcN(d){this.a=d},
dcL:function dcL(d){this.a=d},
dcI:function dcI(d){this.a=d},
dcO:function dcO(d){this.a=d},
dcK:function dcK(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dcM:function dcM(d){this.a=d},
dcJ:function dcJ(d){this.a=d},
a_d:function a_d(d,e,f){this.c=d
this.d=e
this.a=f},
aAU:function aAU(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcu:function dcu(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcv:function dcv(d){this.a=d},
dcs:function dcs(d,e){this.a=d
this.b=e},
dcw:function dcw(d){this.a=d},
dcr:function dcr(d,e){this.a=d
this.b=e},
dcn:function dcn(d){this.a=d},
dco:function dco(d){this.a=d},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcq:function dcq(d){this.a=d},
Qw:function Qw(d,e,f){this.c=d
this.d=e
this.a=f},
aB_:function aB_(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dd7:function dd7(d){this.a=d},
dd8:function dd8(d){this.a=d},
dd9:function dd9(d){this.a=d},
dda:function dda(d){this.a=d},
ddb:function ddb(d,e){this.a=d
this.b=e},
ddc:function ddc(d){this.a=d},
dde:function dde(d){this.a=d},
ddd:function ddd(d){this.a=d},
a_i:function a_i(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAY:function aAY(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dd3:function dd3(d,e){this.a=d
this.b=e},
dd4:function dd4(d,e){this.a=d
this.b=e},
dcW:function dcW(d,e,f){this.a=d
this.b=e
this.c=f},
dcX:function dcX(d){this.a=d},
dcY:function dcY(){},
dd2:function dd2(){},
dcZ:function dcZ(d,e){this.a=d
this.b=e},
dd_:function dd_(d,e){this.a=d
this.b=e},
dd0:function dd0(d,e){this.a=d
this.b=e},
dd1:function dd1(d,e){this.a=d
this.b=e},
adc:function adc(d,e){this.c=d
this.a=e},
dcm:function dcm(d){this.a=d},
a_c:function a_c(d){this.a=d},
aAT:function aAT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_j:function a_j(d,e){this.c=d
this.a=e},
aAZ:function aAZ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dd6:function dd6(d){this.a=d},
dd5:function dd5(d){this.a=d},
bfA:function bfA(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hUJ(){var x,w=$.or(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.he(v)},
Of(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Of=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Of)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bL),$async$Of)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
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
return A.i($async$Of,w)},
a83(d){return B.hUK(d)},
hUK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a83=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a83)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cL,null),$async$a83)
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
return A.i($async$a83,w)},
W9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Of(),$async$W9)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dM(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a83(s),$async$W9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W9,w)},
Wa(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wa=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Wa)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceD(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hUJ()
t=A.U(u).k("N<1,a8<n,aE>>")
r=A.C(new A.N(u,new B.ceE(s),t),t.k("ak.E"))
x=6
return A.b(B.Of(),$async$Wa)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a83(q),$async$Wa)
case 7:x=8
return A.b(B.a84(r,u,g,s),$async$Wa)
case 8:v=new A.brp(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wa,w)},
aqH(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Of(),$async$aqH)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqH,w)},
ceF(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Of(),$async$ceF)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceF,w)},
a84(d,e,f,g){return B.hUL(d,e,f,g)},
hUL(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a84=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqF("media",r,new B.ceC(s,e,g),f,q),$async$a84)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W9(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a84)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W9(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a84)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W9(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a84)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a84,w)},
Fi(d,e,f){return B.hUM(d,e,f)},
hUM(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fi=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$Fi)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqH(b3),$async$Fi)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iu,null,g),$async$Fi)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqH(b3),$async$Fi)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Of(),$async$Fi)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
a2=A.aH(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.L(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cq(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a5(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a5(a7)
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
b0=A.pj(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abr(a8.a,b0,"media",a8.d,a9).Db(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0K(k,n,o,s,b7),$async$Fi)
case 17:j=c0
if(j!=null){J.c5(p,j);++q
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
a8=A.pj(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abr(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fi)
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
a0=A.dM(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a83(e),$async$Fi)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fi,w)},
ceD:function ceD(){},
ceE:function ceE(d){this.a=d},
ceC:function ceC(d,e,f){this.a=d
this.b=e
this.c=f},
aSo(){var x=0,w=A.j(y.H),v,u
var $async$aSo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i4Q=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aSo)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aSo)
case 3:u=$.hdQ
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aSo)
case 4:$.hdQ=$.idZ=$.ie_=null
return A.h(null,w)}})
return A.i($async$aSo,w)},
fD5(d){var x=0,w=A.j(y.H),v,u
var $async$fD5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a97){x=1
break}u=new A.bk($.bE,y.d4)
d.c=new B.fD6(new A.c2(u,y.aY))
x=3
return A.b(u.iH(0,C.ib,new B.fD7()),$async$fD5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fD5,w)},
idX(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hUt(x):x},
hdU(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqJ(u)
x=1
break}v=B.h8r(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdU,w)},
hdT(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqK(u)
x=1
break}v=B.h8r(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdT,w)},
fWy(d){var x=0,w=A.j(y.T),v
var $async$fWy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqK(d),$async$fWy)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWy,w)},
bDM(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hdT(d),$async$bDM)
case 3:q=f
if(q==null){x=1
break}t=C.Y.aQ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDM,w)},
fqM(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fqM=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.W3(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Ck(d.apU(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqM,w)},
Hd(d,e,f){return B.igq(d,e,f)},
igq(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hd=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hdU(a1),$async$Hd)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Y.aQ(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a5(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hHm().aGg(D.dCO,null),$async$Hd)
case 4:l=d.hdQ=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azJ(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bE,y.b1)
l.y=new B.fDH(f,k,new B.fDI(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8I(0,new B.Yj(r,"offer")),$async$Hd)
case 5:d=l
x=7
return A.b(l.amm(0),$async$Hd)
case 7:x=6
return A.b(d.a8A(0,a4),$async$Hd)
case 6:x=8
return A.b(B.fD5(l),$async$Hd)
case 8:x=9
return A.b(l.aqH(),$async$Hd)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.idX(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.aw(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqL(m,h),$async$Hd)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hpn(h)
case 11:v=new A.bqE(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hd,w)},
fD6:function fD6(d){this.a=d},
fD7:function fD7(){},
fDI:function fDI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDH:function fDH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDG:function fDG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iiv(d){switch(d){case"new":return D.eyl
case"checking":return D.eym
case"connected":return D.eyo
case"completed":return D.eyn
case"failed":return D.eyq
case"disconnected":return D.eyr
case"closed":return D.aQM
case"count":return D.eyp}return D.aQM},
iiw(d){switch(d){case"new":return D.aQN
case"gathering":return D.eys
case"complete":return D.a97}return D.aQN},
itu(d){switch(d){case"stable":return D.eyt
case"have-local-offer":return D.eyu
case"have-local-pranswer":return D.eyw
case"have-remote-offer":return D.eyv
case"have-remote-pranswer":return D.eyx
case"closed":return D.aQT}return D.aQT},
irD(d){switch(d){case"new":return D.aQQ
case"connecting":return D.aQR
case"connected":return D.aQS
case"closed":return D.a98
case"disconnected":return D.aQP
case"failed":return D.aQO}return D.a98},
aan:function aan(d,e){this.a=d
this.b=e},
Ph:function Ph(d,e){this.a=d
this.b=e},
Yi:function Yi(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e){this.a=d
this.b=e},
FM:function FM(d,e){this.a=d
this.b=e},
csh:function csh(){},
hac(d){var x=new B.FL()
x.a=d
x.b=!0
return x},
FL:function FL(){this.b=this.a=$},
aam:function aam(){},
avg:function avg(){},
Yj:function Yj(d,e){this.a=d
this.b=e},
h8n(){var x=0,w=A.j(y.H)
var $async$h8n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8n,w)},
h8q(d,e,f){var x=0,w=A.j(y.T),v
var $async$h8q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n7))){v=null
x=1
break}v=B.fWP(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8q,w)},
hpn(d){var x,w=F.af0.a5o(C.dS.aN(d),null)
if(w.length===0){x=C.dS.aN(d)
return C.cP.gcu().aN(x)}return C.cP.gcu().aN(w)},
hUs(d){var x,w,v=C.cI.aN(d)
try{x=C.c9.cI(0,F.af_.bg2(v,!1))
return x}catch(w){x=C.c9.cI(0,v)
return x}},
h8r(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hUs(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cI(0,C.cI.aN(x))
return v}catch(u){return x}}return null},
hUt(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aM(s,"\n")},
hUu(){var x,w=$.or(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b0Q(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bL),$async$b0Q)
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
return A.i($async$b0Q,w)},
cel(d,e){return B.hUv(d,e)},
hUv(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cel=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cL,null),$async$cel)
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
return A.i($async$cel,w)},
b0T(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0Q(d),$async$b0T)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0T,w)},
b0S(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hUu()
r=C.a.i(f)
t=C.dS.aN(s)
x=3
return A.b(B.cel(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0S)
case 3:if(!h){v=null
x=1
break}v=new A.a1k("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0S,w)},
b0R(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0Q(o),$async$b0R)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cI(0,C.cI.aN(u))
if(J.j7(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0R,w)},
cem(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cem=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEJ("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cL),$async$cem)
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
return A.i($async$cem,w)},
b0U(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ji(),$async$b0U)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0U,w)},
aqC(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqC)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0U(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqC,w)},
aqA(d,e){var x=0,w=A.j(y.H)
var $async$aqA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqA)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqA)
case 2:return A.h(null,w)}})
return A.i($async$aqA,w)},
a7W(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7W=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7W)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7W)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a7V(s),$async$a7W)
case 5:x=6
return A.b(B.aqA(f,u),$async$a7W)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7W,w)},
a7X(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7X=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7X)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7X)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a3(r,y.N,y.z)
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
return A.b(B.aqA(g,q),$async$a7X)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7V(u),$async$a7X)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7X,w)},
a7Y(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7Y=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7Y)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ji(),$async$a7Y)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b0N(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7Y)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.aw(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a7Y)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Y,w)},
cen(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cen=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cen)
case 7:s=f
p=A.w(n)
r=A.aS(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aQ(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a3(q,y.N,y.z)
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
return A.i($async$cen,w)},
Jj(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cen(d),$async$Jj)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0U(t),$async$Jj)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqB(d),$async$Jj)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0N(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqB(d),$async$Jj)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jj,w)},
aqB(d){var x=0,w=A.j(y.H)
var $async$aqB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqB)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqB)
case 2:return A.h(null,w)}})
return A.i($async$aqB,w)},
b0V(){var x,w=$.or(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a7Z(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h8s(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ceq(d){return B.hUx(d)},
hUx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ceq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7Z(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bL),$async$ceq)
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
return A.i($async$ceq,w)},
aqE(d,e){return B.hUy(d,e)},
hUy(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7Z(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cL,null),$async$aqE)
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
return A.i($async$aqE,w)},
ces(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ces=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Z(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqE(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ces)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ces,w)},
cer(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cer=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Z(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqE(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cer)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cer,w)},
cet(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cet=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Z(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqE(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cet,w)},
ceu(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ceu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h8s(d)){v=null
x=1
break}x=3
return A.b(B.ceq(d),$async$ceu)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a5(u)
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
return A.i($async$ceu,w)},
a85(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a85=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a85)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bL),$async$a85)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
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
return A.i($async$a85,w)},
aqI(d){return B.hUN(d)},
hUN(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$aqI)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cL,null),$async$aqI)
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
return A.i($async$aqI,w)},
aqJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqJ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a85(),$async$aqJ)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cI(0,C.cI.aN(q))
if(J.j7(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dM(A.a3(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqI(s),$async$aqJ)
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
return A.i($async$aqJ,w)},
aqL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aqL)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a85(),$async$aqL)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dM(A.a3(s,r,q),r,q)
r=C.dS.aN(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqI(u),$async$aqL)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqL,w)},
aqK(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqK)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a85(),$async$aqK)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cI(0,C.cI.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqK,w)},
apF(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apF=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.aq$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qi)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apF)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hh),$async$apF)
case 7:q=g
o=q
o=o==null?null:J.eS(J.vV(o))
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
return A.i($async$apF,w)},
ip3(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fUP(d){return B.ip5(d)},
ip5(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fUP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iC("media").Ln(d,3600),$async$fUP)
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
return A.i($async$fUP,w)},
DE(d,e,f,g,h,i){var x=null
return B.ip2(d,e,f,g,h,i)},
ip2(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DE=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hpq(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h8u(r),$async$DE)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fUP(o),$async$DE)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8_(r),$async$DE)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aUl)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MA(A.a([],g))
x=15
return A.b(d.f8(0,A.aw5("GET",A.cF(n,0,null))).dg(0,C.GB),$async$DE)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8_(r),$async$DE)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L9(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DE)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0X(r,k),$async$DE)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DE)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.W3(r)
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
return A.b(B.a8_(r),$async$DE)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DE,w)},
aS1(d){return B.ip4(d)},
ip4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aS1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iC("media").W(0,d),$async$aS1)
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
return A.i($async$aS1,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[156]
O=c[47]
F=c[262]
I=c[147]
P=c[232]
E=c[224]
G=c[93]
Q=c[194]
R=c[148]
S=c[230]
K=c[267]
L=c[275]
B=a.updateHolder(c[22],B)
D=c[273]
T=c[193]
M=c[214]
U=c[73]
V=c[256]
W=c[79]
X=c[62]
N=c[92]
Y=c[274]
B.csi.prototype={
aGg(d,e){return this.cQ7(d,e)},
cQ7(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dM(r,s,t)
t.v(0,d)
u=new q(A.kh(A.cv(t)))
t=J.k(u)
v=B.hZq(C.cP.gcu().aN(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGg,w)}}
B.b64.prototype={
bCh(d){var x=this,w=x.w
w.onclose=A.hp(new B.csd(x))
w.onopen=A.hp(new B.cse(x))
w.onmessage=A.hp(new B.csf(x))
w.onbufferedamountlow=A.hp(new B.csg(x))},
gde(d){return this.x},
aiz(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FL()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hac(J.eS(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiz)
case 8:v=t.hac(s.aoO(f,0,null))
x=1
break
case 7:case 4:v=B.hac(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiz,w)}}
B.b65.prototype={
bCi(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.csj(x)))
w.addEventListener("icecandidate",A.hp(new B.csk(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.csl(x)))
w.onicegatheringstatechange=A.hp(new B.csm(x))
w.addEventListener("signalingstatechange",A.hp(new B.csn(x)))
if(!$.hhR())w.addEventListener("connectionstatechange",A.hp(new B.cso(x)))
w.addEventListener("negotiationneeded",A.hp(new B.csp(x)))
w.addEventListener("track",A.hp(new B.csq(x)))},
amm(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kh(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amm)
case 3:t=f
v=new B.Yj(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amm,w)},
a8A(d,e){return this.bre(0,e)},
bre(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
a8I(d,e){return this.brz(0,e)},
brz(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
aqH(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yj(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqH,w)},
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
B.add.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_f.prototype={
S(){return new B.aAW()},
gd1(){return this.c}}
B.aAW.prototype={
Y(){this.a2()
this.af8()},
af8(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0O(u.e,u.c),$async$af8)
case 2:t=e
if(v.c!=null)v.m(new B.dcF(v,t))
return A.h(null,w)}})
return A.i($async$af8,w)},
QX(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqx(t.e,t.c,!1),$async$QX)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.M(y.q).f.U(D.fjp)
x=1
break}x=4
return A.b(B.a7U(u.a.c,"individual"),$async$QX)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a6Z(A.e9(new B.dcC(u),!1,null,y.H)),$async$QX)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QX,w)},
JI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fAY(o),$async$JI)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7Y(o.e,r,s,q),$async$JI)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.U(D.fgq)
x=1
break}x=5
return A.b(B.a7U(u.a.c,"member"),$async$JI)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a6Z(A.e9(new B.dcE(u),!1,null,y.H)),$async$JI)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JI,w)},
yD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7T(t.e,o,t.f,t.r,t.w,s),$async$yD)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7U(u.a.c,"org_owner"),$async$yD)
case 4:x=5
return A.b(B.aqC(u.a.c),$async$yD)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fBs(o),$async$yD)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7W(s,t,o,q.c),$async$yD)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.U(D.fgn)
x=1
break}x=10
return A.b(B.aqC(u.a.c),$async$yD)
case 10:o=u.c
if(o==null){x=1
break}o.M(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a6Z(A.e9(new B.dcD(u),!1,null,y.H)),$async$yD)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yD,w)},
B(d){var x,w,v,u=this,t=null,s=A.S(d).ax.a===C.J,r=s?C.jC:C.qj,q=B.h8p(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h4,24)],y.V)
v=y.p
w=A.q(t,A.x(A.a([A.q(t,D.fDi,C.f,t,t,new A.p(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.hb,t,t,t),C.aB,D.fXg,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.j,0,C.p),C.f,t,t,new A.p(t,t,t,p,w,D.c8V,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lY(new B.dcH(),t),C.U,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.T,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adG(C.f5,C.aDo,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcje(),t),C.af],v))
p.push(new B.adG(C.pq,C.a4L,"Team Member","Sign in with your organization access code + password",u.gck5(),t))
p.push(C.af)
p.push(new B.adG(C.app,C.a6p,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcjB(),t))
return A.c4(t,r,A.bm(!0,A.ci(A.x(p,C.al,t,C.e,C.j,0,C.p),C.t,t,C.y,t,F.amu,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adG.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aJ(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a9(C.a6,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ng,s,s,s),C.ay,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.S(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.z9,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.j,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDz.prototype={}
B.aGI.prototype={}
B.jB.prototype={
mI(d){var x=this.b,w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garo(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ac(x/1024,1)+" KB"
if(x<1073741824)return C.i.ac(x/1048576,1)+" MB"
return C.i.ac(x/1073741824,2)+" GB"},
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
bfw(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jB(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOD(d){return this.bfw(null,d)},
aG_(d){return this.bfw(d,null)}}
B.VY.prototype={
S(){return new B.aEW(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEW.prototype={
Y(){this.a2()
this.af9()},
af9(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cj(u.a.c),$async$af9)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dYZ(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af9,w)},
afa(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fA(s)),$async$afa)
case 3:t=u.c
if(t!=null)t.M(y.q).f.U(D.fkj)
case 1:return A.h(v,w)}})
return A.i($async$afa,w)},
a_y(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apF(s.d,4),$async$a_y)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tn(r,"ngmy_my_code_"+m+".png"),$async$a_y)
case 8:q=e
o=s.c
if(o!=null)o.M(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.M(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_y,w)},
aj0(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aj0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.ab0("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aj0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aj0,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===C.J,n=o?C.jC:C.qj,m=o?C.c:C.T,l=A.eE(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.kK
else if(q.e==null)x=A.at(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.L(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.U,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a5d,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.j,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a9(C.a6,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.am3,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.ci(A.x(A.a([x,C.nd,w,C.l5,new A.em(A.q(p,A.qa(p,p,!1,B.hUo(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l5,A.A(A.a([A.E(A.es(N.D5,C.VX,q.gcbI(),p),1),C.au,A.E(A.dg(C.zy,p,C.abu,q.gcbJ(),A.bo(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.j,0,p,p),C.X,new A.a6(1/0,p,A.es(M.a3w,D.fSO,q.gcyV(),p),p)],r),C.l,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.Om,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.W1.prototype={
S(){return new B.aEZ(new A.au(C.ax,$.aw()),A.k8(!0,null,!0,!0,null,null,!1))}}
B.aEZ.prototype={
Y(){var x,w
this.a2()
x=this.a.e
w=B.Jh(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a3()},
a_z(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jh(u.d.a.a)
if(t==null){u.m(new B.e_7(u))
x=1
break}u.m(new B.e_8(u))
s=u.a
r=s.c
x=3
return A.b(B.a7S(s.d,new B.e_9(u),t,r),$async$a_z)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_a(u))
if(q){s=u.c
s.toString
A.a7(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_z,w)},
a2O(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2O=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cq(r.a.d)){x=1
break}r.m(new B.e_b(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rQ(r.a.c,q),$async$a2O)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_c(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiL(p,m,l,j,k),$async$a2O)
case 8:o=e
if(r.c!=null)r.m(new B.e_d(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.e_e(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e_f(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2O,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===C.J,i=j?D.ai3:D.afD,h=j?D.ajS:C.c,g=j?C.aP:C.T,f=j?C.bK:C.an,e=j?D.ah2:C.aO
i=[i,e,h,g,f,j?C.fo:C.bR]
x=A.S(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eE(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.dy(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.dy(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bXl,C.f,k,k,new A.p(k,k,k,A.m(16),k,new A.a9(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ay,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.l,k,C.e,C.j,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.fs,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a5d,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uT(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bl2()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.Oh,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_g(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.L(i[1],C.r,1)
m=J.Md(l.a.d,4)
m=A.C(new A.N(m,new B.e_h(x,new A.aHY(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.li,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bA,s,C.U,e,C.U,q,C.d8,p,C.U,A.q(k,A.x(m,C.l,k,C.e,C.j,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.feU)
else q.push(A.X(C.lQ,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cT(k,A.A(q,C.l,k,C.e,C.j,0,k,k),k,k,C.b4,new A.p(u,k,s,t,k,k,C.n),C.iI,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.ci(A.x(e,C.al,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.bEV,k,k,C.ah),1)
u=l.f?k:l.gcyW()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a3w,D.fTW,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbK()
t=A.bo(C.aE,k,k,0,C.c,k,C.nC,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lB(new B.e_i(),A.x(A.a([e,new A.D(D.bEp,A.x(A.a([s,C.U,i,C.af,A.bI(l.f?C.tB:D.fS7,k,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.l,k,C.e,C.j,0,C.p),C.cw,C.a_O,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bl2.prototype={
oY(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bB,v.length),C.aQ)}}
B.VZ.prototype={
S(){return new B.aEX()}}
B.aEX.prototype={
Y(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aQ),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aQ),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
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
w.a3()},
afb(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afb=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dZ_(r))
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
return A.b(B.a7X(p,m,n,o,C.a.i(l).length===0?null:l),$async$afb)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.M(y.q).f.U(D.fjV)
s=[1]
x=4
break}p.M(y.q).f.U(D.fiy)
p=r.c
p.toString
A.a7(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dZ0(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afb,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J?C.jC:C.qj,q=A.eE(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fKw,s,s,s,1,s,!0),p=A.q(s,D.bwv,C.f,s,s,new A.p(s,s,s,A.m(22),s,E.I6,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c3t,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c3o,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c3E,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbL()
u=A.bo(C.aE,s,s,s,s,C.h5,s,s,s,s,s,s)
return A.c4(q,r,A.ci(A.x(A.a([p,C.d8,o,C.af,x,C.af,w,C.nd,A.bI(t.r?C.tB:C.aXa,s,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.acV.prototype={}
B.bxS.prototype={
a5F(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.apU()))
x=3
return A.b(B.S7(t,s),$async$a5F)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5F,w)},
gd1(){return this.a}}
B.Od.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_e.prototype={
S(){return new B.aAV(new A.au(C.ax,$.aw()),A.k8(!0,null,!0,!0,null,null,!1))}}
B.aAV.prototype={
Y(){this.a2()
$.aW.x1$.push(new B.dcB(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a3()},
cbR(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2k(d),u=x.a.c,t=u?C.iC:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jC:v.a[0],p=A.m(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h4,32)],n),l=A.q(w,T.as7,C.f,w,w,new A.p(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asW,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uT(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxu()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.GP,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b5a),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcz(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nZ,new B.dcA(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.m(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cM,12)],n)
g=y.p
return A.eO(w,C.L,new A.cS(Q.LT,A.c3(new A.D(C.yO,A.x(A.a([l,C.aR,k,C.U,j,C.dY,i,C.dY,A.A(A.a([f,C.au,A.E(A.c3(A.aJ(!1,C.a3,!0,w,A.aP(!1,A.m(14),!0,D.erA,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbQ(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.p(w,w,w,h,n,L.Qe,C.n),C.bj),2)],g),C.l,w,C.e,C.j,0,w,w)],g),C.l,w,C.e,C.Q,0,C.p),w),new A.p(t,w,o,p,m,w,C.n),C.bj),w),w,w,w,C.Op,C.d7,w,w,w)}}
B.bxu.prototype={
oY(d,e){return e.amg(e.a.toUpperCase())}}
B.W_.prototype={
S(){return new B.aEY(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEY.prototype={
Y(){var x=this
x.a2()
x.ul()
x.w=A.dc(C.jF,new B.e_5(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.W8()
this.a3()},
a1G(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$a1G)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bg(u.a.c),$async$a1G)
case 4:u.m(new s.dZt(u,e))
u.il("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1G,w)},
ul(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ul=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$ul)
case 3:t=e
x=4
return A.b(B.Bg(u.a.c),$async$ul)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dZu(u,s))
if(t>0)u.il("Received "+A.w(t)+" file(s) via My Code.")
u.O7(u.d)
B.Cj(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ul,w)},
O7(d){return this.bGk(d)},
bGk(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a81(r,u.a.c),$async$O7)
case 8:p=f
if(u.c==null){x=1
break}new B.dZ2(u,r,p).$0()
u.c.eh()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.W6(r,u.a.c),$async$O7)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bg(u.a.c),$async$O7)
case 12:u.m(new o.dZ3(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O7,w)},
Ow(d){return this.bMC(d)},
bMC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ow=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a81(d,u.a.c),$async$Ow)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZ8(u,d,t))
x=6
return A.b(A.fG(new A.fA(t)),$async$Ow)
case 6:u.il("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fA(r.toUpperCase())),$async$Ow)
case 7:u.il("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ow,w)},
il(d){var x=null,w=this.c
if(w==null)return
w.M(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
um(d,e){return this.cJS(d,e)},
cJS(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$um=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZU(r,e))
u=3
x=6
return A.b(d.$0(),$async$um)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZV(r))
$.eW.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$um,w)},
gaXQ(){var x=this.a
return x.f||x.r||x.w},
ID(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$ID=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXQ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cej(s,n,r,q,o,t),$async$ID)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.il("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fOf(o,u.a.c),$async$ID)
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
return A.b(B.DG(s,o,r,q,n,t),$async$ID)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ID,w)},
a0K(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqC(u.a.c),$async$a0K)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.il("No organization portal found.")
x=1
break}t=J.a5(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a7(t,!1).ca(A.e9(new B.dZq(u,r,q),!1,null,y.H)),$async$a0K)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0K,w)},
a1Q(d){return this.csu(d)},
cst(){return this.a1Q(1)},
csu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXQ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqz(u.a.c),$async$a1Q)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1Q,w)},
ad1(d,e,f){return this.c2F(d,e,f)},
c2F(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.il(e)
x=1
break}x=3
return A.b(u.um(new B.dZn(u,d,null,e,f),"Uploading\u2026"),$async$ad1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad1,w)},
bGt(){B.hEu(!1,new B.dZ6(this))
return},
cxw(){this.m(new B.dZy(this))},
aAv(){var x=0,w=A.j(y.H),v=this
var $async$aAv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGt()
return A.h(null,w)}})
return A.i($async$aAv,w)},
acY(){var x=0,w=A.j(y.H),v=this
var $async$acY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.um(new B.dZc(v),"Importing\u2026"),$async$acY)
case 2:return A.h(null,w)}})
return A.i($async$acY,w)},
T2(d){return this.cJb(d)},
cJb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e9(new B.dZR(u,d),!1,null,y.H)),$async$T2)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.Se)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ca(A.e9(new B.dZS(u,d),!1,null,y.H)),$async$T2)
case 8:x=1
break
case 7:x=u.c3n(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ca(A.e9(new B.dZT(u,d),!1,null,y.H)),$async$T2)
case 11:x=1
break
case 10:u.il("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T2,w)},
c3n(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cS6,C.a.b2(x,w+1).toLowerCase())},
agJ(d){return this.cji(d)},
cji(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e9(new B.dZo(u,d),!1,null,y.H)),$async$agJ)
case 5:x=1
break
case 4:u.m(new B.dZp(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agJ,w)},
Sn(d){return this.cAp(d)},
cAp(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.il("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pu(t,s.c,s.f),$async$Sn)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.um(new B.dZK(u,d),"Preparing QR\u2026"),$async$Sn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sn,w)},
ajq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZL(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZM(q),s),s.k("M.E"))
if(r.length===0){u.il("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sn(r),$async$ajq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajq,w)},
ajj(d){return this.czX(d)},
czX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2k(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZE(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajj)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T2(d)
break
case"qr":u.Sn(A.a([d],y.r))
break
case"send_my_code":u.cjV(A.a([d],y.r))
break
case"save":u.aiH(d)
break
case"delete":u.Js(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajj,w)},
Yq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZ9(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZa(q),s),s.k("M.E"))
if(r.length===0){u.il("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pu(t,s.c,s.f),$async$Yq)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.um(new B.dZb(u,r),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yq,w)},
ahO(d){return this.cqN(d)},
cqN(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hFm(d,!1),$async$ahO)
case 3:s=f
r=s==null
q=B.a7Z(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.il("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahO,w)},
agP(){var x=0,w=A.j(y.H),v=this,u
var $async$agP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fVV(u,v.a.c),$async$agP)
case 2:return A.h(null,w)}})
return A.i($async$agP,w)},
bGs(){B.hEu(!1,new B.dZ5(this,null))
return},
JH(d,e){return this.cjW(d,e)},
b3l(d){return this.JH(null,d)},
cjV(d){return this.JH(d,null)},
cjW(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZr(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xM.cq().ap0(!0,C.a1y,!1),$async$JH)
case 10:r=g
if(r==null||J.cq(r.a)){x=1
break}x=11
return A.b(s.um(new B.dZs(l,s,r),"Preparing\u2026"),$async$JH)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.il("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.il("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFT(p,l,e,s.a.c),$async$JH)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.il("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JH,w)},
IT(d){return this.c2s(d)},
c2s(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hUn(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3l(t),$async$IT)
case 8:x=6
break
case 7:u.il("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.il("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.um(new B.dZl(u,d),"Receiving video\u2026"),$async$IT)
case 11:x=1
break
case 10:x=12
return A.b(u.um(new B.dZm(u,d),"Receiving\u2026"),$async$IT)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IT,w)},
EK(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DA()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahO(t),$async$EK)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IT(s),$async$EK)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e9(new B.dZw(u),!1,null,y.N)),$async$EK)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ul(),$async$EK)
case 10:x=1
break
case 9:x=11
return A.b(u.IT(C.a.i(r)),$async$EK)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EK,w)},
aiH(d){return this.cw4(d)},
cw4(d){var x=0,w=A.j(y.H),v=this
var $async$aiH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.um(new B.dZv(v,d),"Saving\u2026"),$async$aiH)
case 2:return A.h(null,w)}})
return A.i($async$aiH,w)},
Js(d){return this.bOX(d)},
bOX(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Js=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Js)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cem(t),$async$Js)
case 6:case 5:s=d.a
x=7
return A.b(B.Fh(u.a.c,s),$async$Js)
case 7:u.r.W(0,s)
x=8
return A.b(u.ul(),$async$Js)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Js,w)},
ajx(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2k(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZQ(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajx)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agP()
break
case"import":u.acY()
break}case 1:return A.h(v,w)}})
return A.i($async$ajx,w)},
cbO(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n7))return C.qQ
if(C.a.a0(x,"image/")||d.mI(D.Se))return C.uP
if(C.a.q(x,"pdf"))return E.PJ
return D.apS},
B(d){var x,w,v=this,u=null,t=B.a2k(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.I_,u,u,u,new B.e_0(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bXV,u,u,u,v.e?u:v.gcjC(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxv()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bS4:E.aqi,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3t,u,u,u,v.e?u:v.gcbP(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oE,u,u,u,v.e?u:v.gb4q(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZG,u,u,u,v.e?u:new B.e_1(v),u,u,u,u,"More options",u))
q=A.eE(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lY(new B.e_2(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dy(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([p.j(A.S(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dy(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.S(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.k9(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAS(C.jI,s,!0,t,w?u:v.gcAq(),u),1)
x.push(new A.D(D.bD8,A.lB(new B.e_3(),A.A(A.a([s,C.au,A.E(new B.aAS(C.uQ,"Export",!1,t,w?u:v.gbST(),u),1)],o),C.l,u,C.e,C.j,0,u,u),C.cw,C.j1,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfz(t,v.e?u:v.gb4q(),u)
else s=A.ko(!0,u,u,new B.e_4(v,t),s,u,D.bD0,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAS.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bo(C.aE,t,t,0,C.c,t,C.wg,t,new A.b9(s,C.a1),t,t,t)
return A.dg(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wg,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bfz.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lB(new B.dcx(),new A.D(E.a0F,A.x(A.a([A.lB(new B.dcy(),A.q(x,A.X(C.za,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.e7,C.hF,x,x,new A.br(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dY,A.dg(C.oE,x,D.fXA,this.d,A.bo(C.aE,x,x,x,C.c,x,C.On,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.Q,0,C.p),x),C.cw,C.C5,x,x,new A.br(0,1,w),s),x,x,x)}}
B.ade.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dp(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mI(D.n7))p=D.drU
else{p=C.a.a0(p,"image/")||i.mI(D.Se)
n=y.O
p=p?A.a([C.cG,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garo()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.ay,A.d(C.d.aM(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fW,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cf))
if(!(!o||i.mI(D.n7)))l.push(A.h67(C.aE,!1,j,j,j,!1,j,j,new B.dcU(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.X(C.ow,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cf))
return A.lB(new B.dcV(),new A.D(C.eh,A.aJ(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a07,A.A(l,C.l,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bJ("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_g.prototype={
S(){return new B.aAX()},
gd1(){return this.c}}
B.aAX.prototype={
Y(){this.a2()
this.yt()},
t(){B.hUC(this.e)
this.a3()},
yt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rQ(o.c,o.d),$async$yt)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hUF(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hUE(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dcR(s))
x=1
break}s.m(new B.dcS(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dcT(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yt,w)},
a2N(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rQ(t.c,t.d),$async$a2N)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.M(y.q).f.U(D.fgX)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiL(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2N)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.M(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2N,w)},
c2l(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kE(u,C.A,v,new B.dcP(w,t),C.he,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dcQ(w),C.he,C.dB,!0,v,!1,v,v)
else return C.bM
return A.uZ(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2k(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D6,u,u,u,v.gb8c(),u,u,u,u,"Share / save",u))
r=A.eE(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ft
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dg(C.D6,u,D.fFI,v.gb8c(),A.bo(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.c2l()}return A.c4(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_d.prototype={
S(){return new B.aAU(A.ajD(),C.bE,C.bE)},
gd1(){return this.c}}
B.aAU.prototype={
Y(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fy(w,A.a4(w).k("fy<1>")).iD(new B.dcu(v))
x.gcXL().iD(new B.dcv(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fy(x,A.a4(x).k("fy<1>"))}if(x==null)x=C.bbl
x.iD(new B.dcw(v))
v.yt()},
yt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rQ(p.c,p.d),$async$yt)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dcn(s))
x=1
break}x=8
return A.b(s.d.vp(0,new A.a4r(r,s.a.d.c)),$async$yt)
case 8:if(s.c==null){x=1
break}s.m(new B.dco(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dcp(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yt,w)},
a_A(){var x=0,w=A.j(y.H),v=this,u
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_A)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_A)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_A,w)},
aVE(d){var x=d.a
return C.a.b_(C.o.u(C.o.ap(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.ap(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2k(d),m=C.o.ap(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eE(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ft
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bT5,C.f,o,o,new A.p(o,o,o,A.m(24),o,L.Qe,C.n),o,88,o,o,o,o,o,88)
t=A.kV(C.aE,o,o,m,0,new B.dcq(p),C.o.D(C.o.ap(p.w.a,1000),0,m))
x=A.d(p.aVE(p.w)+" / "+p.aVE(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aE,o,o,o,o,D.fdl,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uS:C.hx,o,o,o,o,o)
x=A.x(A.a([u,C.l5,t,x,C.d8,A.dg(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbS(),s)],y.p),C.l,o,C.e,C.Q,0,C.p)}}return A.c4(v,w,A.at(new A.D(C.qB,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qw.prototype={
S(){return new B.aB_()},
gd1(){return this.c}}
B.aB_.prototype={
Y(){this.a2()
this.Qf()},
Qf(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h8q(o.c,o.d,new B.dd7(s)),$async$Qf)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dd8(s))
x=1
break}s.e=r
q=O.ihl(r)
if(q==null){s.m(new B.dd9(s))
x=1
break}s.d=q
q.aW(0,s.gb38())
x=8
return A.b(q.iW(0).dg(0,C.rR),$async$Qf)
case 8:if(s.c==null){x=1
break}s.m(new B.dda(s))
x=9
return A.b(q.qp(0),$async$Qf)
case 9:q.tY(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.ddb(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qf,w)},
chS(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddc(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dt(0,x.gb38())
w=x.d
if(w!=null)w.t()
B.irX(x.e)
x.a3()},
afe(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0W(u.c,u.d),$async$afe)
case 2:t=e
u=v.c
if(u!=null)u.M(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afe,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2k(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eE(A.a([A.aG(t,t,t,t,C.oD,t,t,t,u.gcbM(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ft
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aj7(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AM(s,t),A.aA(t,A.zk(A.q(t,A.X(q?I.uS:C.hx,C.c,t,t,t,48),C.f,t,t,new A.p(C.aU,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b4,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dde(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_i.prototype={
S(){return new B.aAY(new A.cw(null,y.A))}}
B.aAY.prototype={
gcJz(){var x,w,v=this.a
if(v.e!==D.Tz)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcJ9(){var x,w,v=this.a
if(v.e!==D.Ae)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a2()
x=v.gcJz()
if(x!=null){v.Rn(x)
v.e=A.dc(R.GE,new B.dd3(v,x))}w=v.gcJ9()
if(w!=null){v.Rm(w)
v.f=A.dc(C.fA,new B.dd4(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rm(d){return this.cp_(d)},
cp_(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqH(d),$async$Rm)
case 3:t=f
x=4
return A.b(B.ceF(d),$async$Rm)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dcW(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rm,w)},
Rn(d){return this.cp0(d)},
cp0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fWy(d),$async$Rn)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDM(t),$async$Rn)
case 4:if(u.c==null){x=1
break}u.m(new B.dcX(u))
u.c.M(y.q).f.U(D.aTX)
case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
gc7C(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbN(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2z(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DA()){t=u.c
if(t!=null)t.M(y.q).f.U(D.fk4)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ca(A.e9(new B.dcY(),!1,null,y.N)),$async$a2z)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDM(s),$async$a2z)
case 4:t=u.c
if(t!=null)t.M(y.q).f.U(D.aTX)
case 1:return A.h(v,w)}})
return A.i($async$a2z,w)},
aaQ(d){return this.bMD(d)},
bMD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fA(C.d.aM(t,", "))),$async$aaQ)
case 3:if(d.e!=null){t=d.M(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaQ,w)},
afc(d){return this.bMm(d)},
bMm(d){var x=0,w=A.j(y.H),v=this
var $async$afc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fA(v.a.c)),$async$afc)
case 2:if(d.e!=null)d.M(y.q).f.U(D.fhq)
return A.h(null,w)}})
return A.i($async$afc,w)},
a2t(d){return this.cw6(d)},
cw6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apF(s.d,4),$async$a2t)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tn(r,"ngmy_doc_share_qr.png"),$async$a2t)
case 8:q=f
if(d.e!=null)d.M(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.M(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2t,w)},
gaZ6(){var x,w=this.a
if(w.e!==D.J9)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaN(d){return this.bMw(d)},
bMw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ6()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaN)
case 3:if(d.e!=null)d.M(y.q).f.U(D.fj4)
case 1:return A.h(v,w)}})
return A.i($async$aaN,w)},
afd(){var x=0,w=A.j(y.H),v=this,u
var $async$afd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.W8(),$async$afd)
case 2:u=v.c
if(u!=null)A.a7(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afd,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2k(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aC(h,0,44)+"\u2026"
i=i.e
i=i!==D.J9&&i!==D.Tz&&i!==D.Ae
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eE(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J9||t===D.Tz||t===D.Ae?l:A.aG(l,l,l,l,C.lp,l,l,l,m.gb1a(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.U,A.qa(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bA,A.d(""+q.d+" file(s) \xb7 "+m.gc7C(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J9){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.U,A.q(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcbN(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aM(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2w,D.fPj,new B.dcZ(m,d),l)],p))}if(m.a.e===D.J9&&m.gaZ6()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c_0,D.fLU,new B.dd_(m,d),l)],p))
if(m.a.e===D.Ae){x=(m.w?C.dI:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ac(C.i.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.U,A.q(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fw:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}if(m.a.e===D.Tz){x=(m.r?C.dI:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.U,A.q(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fw:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l),C.af,A.dg(D.bVA,l,D.fSt,m.gcwt(),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oK(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.q(l,A.x(q,C.l,l,C.bc,C.j,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D5,C.VX,new B.dd0(m,d),l),1),C.au,A.E(A.dg(C.zy,l,C.abu,new B.dd1(m,d),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.j,0,l,l),C.U,new A.a6(1/0,l,A.bI(C.AR,l,m.gb1a(),A.bo(C.aN,l,l,l,l,C.h5,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.dd2(),y.C)}}
B.adc.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.ci(A.x(A.a([w,C.aR,A.q(x,A.qa(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.Q,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bI(C.AS,x,new B.dcm(d),x)],u),x,x,C.no,v,x,x,x,x,D.fEI,x)}}
B.a_c.prototype={
S(){return new B.aAT(A.zV(C.yt,C.o4,C.v2))}}
B.aAT.prototype={
t(){this.d.t()
this.a3()},
az2(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).O(t)
return}}},
B(d){var x=null
return A.c4(A.eE(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fMq,x,x,x,1,x,!0),C.w,A.zU(this.d,C.c_,this.gaz1()),x,!1,!1,x,x)}}
B.a_j.prototype={
S(){return new B.aAZ(A.zV(C.yt,C.o4,C.v2))},
gd1(){return this.c}}
B.aAZ.prototype={
c3p(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahb(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MG("text/plain"),$async$ahb)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.M(y.q).f.U(D.fjZ)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ahb,w)},
abE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hFm(p,!0),$async$abE)
case 3:t=e
p=t==null
s=B.a7Z(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.M(y.q).f.U(D.fgx)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abE,w)},
t(){this.d.t()
this.a3()},
az2(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3p(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.ard,v,v,v,w.gbSm(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3A,v,v,v,w.gcml(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eE(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uM:P.Ps,v,v,v,v,v),v,v,v,new B.dd6(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fTr,v,v,v,1,v,!0)
u=A.zU(w.d,C.c_,w.gaz1())
x=A.m(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ey0],s),v),v,!1,!1,v,v)}}
B.bfA.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pf
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pf:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aJ(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0L,A.A(A.a([u,C.be,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aan.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Ph.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yi.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pg.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FM.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.csh.prototype={}
B.FL.prototype={}
B.aam.prototype={}
B.avg.prototype={}
B.Yj.prototype={}
var z=a.updateTypes(["aB<~>()","P(jB)","n(jB)","W_(Z)","~()","a_f(Z)","G(G,jB)","Qw(Z)","~(mi)","cr(FL)","aB<jB?>(@)","VY(Z)","W1(Z)","D(jB)","jB(@)","a8<n,@>(jB)","a_e(Z)","VZ(Z)","a_g(Z)","a_d(Z)","a_i(Z)","adc(Z)","ai<jB>()","a_j(Z)","ade(Z,G)","a_c(Z)","a8<n,aE>(jB)","cr(Yi)","cr(aam)","aB<cr>(FL)"])
B.csd.prototype={
$1(d){var x=this.a
x.x=D.aQL
x.y.J(0,D.aQL)},
$S:75}
B.cse.prototype={
$1(d){var x=this.a
x.x=D.aQK
x.y.J(0,D.aQK)},
$S:75}
B.csf.prototype={
$1(d){var x=this.a
x.aiz(A.ahw(d.data)).bG(new B.csc(x),y.b)},
$S:75}
B.csc.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csg.prototype={
$1(d){},
$S:75}
B.csj.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hZp(d.channel))},
$S:16}
B.csk.prototype={
$1(d){},
$S:16}
B.csl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iiv(w.iceConnectionState)
x.cx=w
if($.hhR())switch(w.a){case 0:x.cy=D.aQQ
break
case 1:x.cy=D.aQR
break
case 3:x.cy=D.aQS
break
case 5:x.cy=D.aQO
break
case 6:x.cy=D.aQP
break
case 7:x.cy=D.a98
break
default:break}},
$S:109}
B.csm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iiw(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.csn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.itu(w.signalingState)},
$S:109}
B.cso.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.irD(w.connectionState)},
$S:109}
B.csp.prototype={
$1(d){},
$S:109}
B.csq.prototype={
$1(d){},
$S:16}
B.fwr.prototype={
$1(d){var x=y.F.a(new A.r5([],[]).oL(d.target.result,!1)),w=C.yu.q(x.objectStoreNames,"blobs")
if(!w)C.yq.Ll(x,"blobs")},
$S:184}
B.fVJ.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wP.fq(this.b)
$.eW.mC()
this.c.$1(d)},
$S:463}
B.fVL.prototype={
$1(d){return this.a.$1(B.i7P(this.b,this.c))},
$S:33}
B.fVK.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.fVI.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fVY.prototype={
$1(d){var x=this
return B.huh(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fVZ.prototype={
$1(d){var x=this
return B.huh(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fz4.prototype={
$1(d){var x=this
return B.ceg(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcC.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceg(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcE.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceg(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcD.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceg(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcH.prototype={
$4(d,e,f,g){var x=null
return A.jZ(A.A(A.a([A.aG(x,x,x,x,D.bU9,x,x,x,new B.dcG(d),x,x,x,x,x,x),A.E(A.Fx(D.RY,!0,x,C.a2B,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.j,0,x,x),D.RY,x,g,C.amP,0,e,f)},
$C:"$4",
$R:4,
$S:440}
B.dcG.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
B.fB0.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eQ,y.o).w,t=this.a,s=t?C.iC:C.c,r=A.m(28),q=A.q(v,D.bwP,C.f,v,v,D.b6P,v,v,v,v,D.amF,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bYv,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GU,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.art,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bA,A.A(A.a([A.E(A.dU(C.dn,new B.fAZ(d),v),1),C.au,A.E(A.bI(D.fKU,v,new B.fB_(p,x,d),A.bo(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.j,0,v,v)],w),C.l,v,C.e,C.j,0,C.p),v)],w),C.l,v,C.e,C.Q,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GI,v,v,v,v),v)},
$S:64}
B.fAZ.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
B.fB_.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.M(y.q).f.U(D.fhH)
return}x=w.b.a.a
A.a7(w.c,!1).O(new B.aDz(v,x))},
$S:0}
B.fBu.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eQ,y.o).w,u=x.a,t=u?C.iC:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bwE,C.f,w,w,D.b8i,w,w,w,w,D.amF,w,w,1/0),new A.D(C.GU,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hdD(u,"Organization name",C.Hm,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hdD(u,"Access code",C.nH,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hdD(u,"Member password",H.HV,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bA,A.bI(D.fTy,w,new B.fBt(r,q,p,d),A.bo(C.aE,w,w,w,w,C.h5,w,w,w,w,w,w))],o),C.l,w,C.e,C.j,0,C.p),w)],o),C.l,w,C.e,C.Q,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GI,w,w,w,w),w)},
$S:64}
B.fBt.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.M(y.q).f.U(D.fhM)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).O(new B.aGI(u,x,w))},
$S:0}
B.ce7.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a5(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cF(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vN(p,null).dg(0,C.a_N),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ck(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ced.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cee.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cef.prototype={
$1(d){return d.b},
$S:z+2}
B.ce9.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cea.prototype={
$1(d){return d.b},
$S:z+2}
B.ce8.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.ceb.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cec.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fVW.prototype={
$1(d){return new B.VY(this.a,null)},
$S:z+11}
B.fVX.prototype={
$1(d){return new B.W1(this.a,this.b,this.c,null)},
$S:z+12}
B.dYZ.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_7.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_8.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_9.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_6(x,d))},
$S:2}
B.e_6.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_a.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_b.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_c.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_d.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_e.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e_f.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_i.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.e_g.prototype={
$1(d){var x=this.a
return x.f?null:x.a_z()},
$S:2}
B.e_h.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.Se))s=C.uP
else s=C.a.a0(s,"video/")||d.mI(D.n7)?C.qQ:D.apS
x=this.b.a
w=y.p
return new A.D(C.kV,A.A(A.a([A.q(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garo(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.l,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dZ_.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZ0.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ceh.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.cei.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.fWR.prototype={
$2(d,e){return e===this.a},
$S:281}
B.ftv.prototype={
$1(d){return J.k(d)},
$S:17}
B.fzg.prototype={
$1(d){var x=this.b
B.i5D(C.H9.ga7j(this.a)).bG(x.gC0(x),y.H)},
$S:124}
B.fzh.prototype={
$1(d){return this.a.dc(0,null)},
$S:124}
B.fzi.prototype={
$0(){return null},
$S:12}
B.cew.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzj.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aH(p.h(0,"sizeBytes"))
v=v==null?q:C.i.L(v)
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
return new B.jB(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fDu.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fxu.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxv.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ceB.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n7)},
$S:z+1}
B.h00.prototype={
$1(d){return new B.a_e(this.a,null)},
$S:z+16}
B.dcB.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fX()},
$S:7}
B.dcz.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).O(x)
return null},
$S:2}
B.dcA.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
B.e_5.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1G()},
$S:11}
B.dZt.prototype={
$0(){var x=J.bGW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZu.prototype={
$0(){var x=J.bGW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZ2.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZ1(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG_(this.c)}},
$S:0}
B.dZ1.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZ3.prototype={
$0(){var x=J.bGW(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZ8.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZ7(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG_(this.c)}},
$S:0}
B.dZ7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZU.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZV.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZq.prototype={
$1(d){return new B.VZ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZn.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.ID(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.W2(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ul(),$async$$0)
case 5:s=J.a5(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1Q(s.gI(t)),$async$$0)
case 8:case 7:r.il(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ6.prototype={
$1(d){this.a.ad1(d,"No files selected.","Added")},
$S:463}
B.dZy.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dZx(),A.U(x).k("N<1,n>")))},
$S:0}
B.dZx.prototype={
$1(d){return d.a},
$S:z+2}
B.dZc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xM.cq().cZJ(C.a1y,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jI(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.il("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.il("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqG(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cq(l)){o.il("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ul(),$async$$0)
case 9:o.il("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZR.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dZS.prototype={
$1(d){return new B.a_g(this.a.a.c,this.b,null)},
$S:z+18}
B.dZT.prototype={
$1(d){return new B.a_d(this.a.a.c,this.b,null)},
$S:z+19}
B.dZo.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dZp.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.ID(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a80(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.il("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cst(),$async$$0)
case 5:x=6
return A.b(p.ul(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dZG(p),r),new B.dZH(),r.k("N<ak.E,n>")).bY(0,new B.dZI())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e9(new B.dZJ(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pt(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.W8(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZG.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dZF(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dZF.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZH.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dZI.prototype={
$1(d){return d.length!==0},
$S:3}
B.dZJ.prototype={
$1(d){var x=this.a
return new B.a_i(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZL.prototype={
$1(d){return d.a},
$S:z+2}
B.dZM.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZE.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garo(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n7)?C.qN:C.oA
p=!x||p.mI(D.n7)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.Cf,A.x(A.a([q,o,t,C.aB,B.a_h(!1,u,!1,w,p,new B.dZz(d),v),B.a_h(!1,u,!1,C.jI,"Share via QR",new B.dZA(d),"Letters/numbers QR code"),B.a_h(!1,u,!1,D.a2G,"Send to their Code",new B.dZB(d),"Enter someone else's personal code"),B.a_h(!1,u,!1,C.hX,"Download / save",new B.dZC(d),v),C.am,B.a_h(!1,u,!0,C.ei,"Delete",new B.dZD(d),v)],y.p),C.al,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.p(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l9,v,v,C.n),C.bj)},
$S:699}
B.dZz.prototype={
$0(){A.a7(this.a,!1).O("view")
return null},
$S:0}
B.dZA.prototype={
$0(){A.a7(this.a,!1).O("qr")
return null},
$S:0}
B.dZB.prototype={
$0(){A.a7(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dZC.prototype={
$0(){A.a7(this.a,!1).O("save")
return null},
$S:0}
B.dZD.prototype={
$0(){A.a7(this.a,!1).O("delete")
return null},
$S:0}
B.dZ9.prototype={
$1(d){return d.a},
$S:z+2}
B.dZa.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZb.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a82(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hf(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pt(s.c,s.f),$async$$0)
case 4:u.il(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ5.prototype={
$1(d){var x=this.a
x.um(new B.dZ4(x,d,this.b),"Preparing\u2026")},
$S:463}
B.dZ4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.il("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.W2(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cq(s)){t.il("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFT(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.il("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZr.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZs.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h8t(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hd(new B.dZh(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.il("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dZi(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZj(s))
case 5:x=8
return A.b(r.b.iH(0,C.GB,new B.dZk()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gau(t)){s.il("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ul(),$async$$0)
case 9:s.il("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZh.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZe(x,d,e))},
$S:240}
B.dZe.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZi.prototype={
$1(d){return new B.adc(this.a.a,null)},
$S:z+21}
B.dZj.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZk.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZm.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jh(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7R(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3l(B.Jh(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqG(new B.dZf(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cq(r)){if(B.h8s(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.il(q)
x=1
break}x=10
return A.b(s.ul(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dZg()).gI(0)
s.il(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZf.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZd(x,d,e))},
$S:240}
B.dZd.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZg.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n7)},
$S:z+1}
B.dZw.prototype={
$1(d){return new B.a_j(this.a.a.c,null)},
$S:z+23}
B.dZv.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0W(u.a.c,v.b),$async$$0)
case 2:t.il(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZQ.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bm(!0,new A.D(C.Cf,A.x(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_h(!0,w,!1,C.nH,"My Code",new B.dZN(d),"Your personal code & QR \u2014 others send docs to you"),B.a_h(!1,w,!1,D.a2G,"Send to their Code",new B.dZO(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_h(!1,w,!1,S.zp,"Import backup",new B.dZP(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.p(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l9,x,x,C.n),C.bj)},
$S:699}
B.dZN.prototype={
$0(){A.a7(this.a,!1).O("my_code")
return null},
$S:0}
B.dZO.prototype={
$0(){A.a7(this.b,!1).O(null)
this.a.bGs()},
$S:0}
B.dZP.prototype={
$0(){A.a7(this.a,!1).O("import")
return null},
$S:0}
B.e_2.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jr(D.RY,x,C.a2B,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RY).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:663}
B.e_0.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
B.e_1.prototype={
$0(){this.a.ajx()
return null},
$S:0}
B.e_3.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*10)),e)},
$S:100}
B.e_4.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ade(e,w,v,this.b,x.e,x.cbO(w),new B.dZX(x,w),new B.dZY(x,v,w),new B.dZZ(x,w),new B.e__(x,w),null)},
$S:z+24}
B.dZX.prototype={
$0(){this.a.agJ(this.b)
return null},
$S:0}
B.dZY.prototype={
$0(){var x=this.a
return x.m(new B.dZW(x,this.b,this.c))},
$S:0}
B.dZW.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZZ.prototype={
$0(){this.a.Ow(this.b)
return null},
$S:0}
B.e__.prototype={
$0(){this.a.ajj(this.b)
return null},
$S:0}
B.dcx.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*18)),e)},
$S:100}
B.dcy.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:114}
B.dcV.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.dcU.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dcR.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dcS.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dcT.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dcP.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dcN(this.a),C.he,C.dB,!0,x,!1,x,x)
$.aW.x1$.push(new B.dcO(this.a))
return C.bM},
$S:135}
B.dcN.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcL(this.a))
return C.bM},
$S:191}
B.dcL.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcI(x))},
$S:7}
B.dcI.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcO.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcK(x))},
$S:7}
B.dcK.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcQ.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcM(this.a))
return C.bM},
$S:191}
B.dcM.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcJ(x))},
$S:7}
B.dcJ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcu.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dct(x,d))},
$S:1767}
B.dct.prototype={
$0(){return this.a.f=this.b===C.vq},
$S:0}
B.dcv.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcs(x,d))},
$S:7}
B.dcs.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcw.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcr(x,d))},
$S:7}
B.dcr.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dcn.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dco.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcp.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcq.prototype={
$1(d){return this.a.d.Nt(0,A.dp(0,0,0,C.i.V(d),0,0))},
$S:6}
B.dd7.prototype={
$0(){var x=this.a.a
return B.rQ(x.c,x.d)},
$S:1768}
B.dd8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dd9.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dda.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ddb.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddc.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dde.prototype={
$0(){var x=this.a
x.m(new B.ddd(x))},
$S:0}
B.ddd.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qp(0)},
$S:0}
B.dd3.prototype={
$1(d){return this.a.Rn(this.b)},
$S:11}
B.dd4.prototype={
$1(d){return this.a.Rm(this.b)},
$S:11}
B.dcW.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dcX.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcY.prototype={
$1(d){return D.hts},
$S:z+25}
B.dd2.prototype={
$2(d,e){if(d)B.W8()},
$S:128}
B.dcZ.prototype={
$0(){return this.a.aaQ(this.b)},
$S:0}
B.dd_.prototype={
$0(){return this.a.aaN(this.b)},
$S:0}
B.dd0.prototype={
$0(){return this.a.afc(this.b)},
$S:0}
B.dd1.prototype={
$0(){return this.a.a2t(this.b)},
$S:0}
B.dcm.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
B.dd6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qt(),$async$$0)
case 2:u.m(new B.dd5(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dd5.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceD.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n7)},
$S:z+1}
B.ceE.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceC.prototype={
$2(d,e){return this.bn3(d,e)},
bn3(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W9(u.c,A.I(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1769}
B.fD6.prototype={
$1(d){if(d===D.a97&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fD7.prototype={
$0(){},
$S:12}
B.fDI.prototype={
boD(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fqM(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hpq(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boD(d,e)},
$S:517}
B.fDH.prototype={
$1(d){var x=this
d.b=new B.fDG(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fDG.prototype={
$1(d){return this.boC(d)},
boC(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0X(n,m),$async$$1)
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
return A.b(B.fqM(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dc(0,s.e)
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
return A.b(B.a8_(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dc(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAW.prototype,"gcje","QX",0)
x(v,"gck5","JI",0)
x(v,"gcjB","yD",0)
x(v=B.aEW.prototype,"gcbI","afa",0)
x(v,"gcbJ","a_y",0)
x(v,"gcyV","aj0",0)
x(v=B.aEZ.prototype,"gcbK","a_z",0)
x(v,"gcyW","a2O",0)
x(B.aEX.prototype,"gcbL","afb",0)
x(B.aAV.prototype,"gcbQ","cbR",4)
x(v=B.aEY.prototype,"gcjC","a0K",0)
x(v,"gcxv","cxw",4)
x(v,"gb4q","aAv",0)
x(v,"gcAq","ajq",0)
x(v,"gbST","Yq",0)
x(v,"gcbP","EK",0)
x(B.aAX.prototype,"gb8c","a2N",0)
x(B.aAU.prototype,"gcbS","a_A",0)
x(v=B.aB_.prototype,"gb38","chS",4)
x(v,"gcbM","afe",0)
x(v=B.aAY.prototype,"gcwt","a2z",0)
x(v,"gb1a","afd",0)
w(B.aAT.prototype,"gaz1","az2",8)
x(v=B.aAZ.prototype,"gcml","ahb",0)
x(v,"gbSm","abE",0)
w(v,"gaz1","az2",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.csh,B.aam,B.avg,B.aDz,B.aGI,B.jB,B.acV,B.bxS,B.FL,B.Yj])
w(B.csi,B.csh)
w(B.b64,B.aam)
x(A.ht,[B.csd,B.cse,B.csf,B.csc,B.csg,B.csj,B.csk,B.csl,B.csm,B.csn,B.cso,B.csp,B.csq,B.fwr,B.fVJ,B.fVL,B.fVK,B.fVY,B.fVZ,B.fz4,B.dcC,B.dcE,B.dcD,B.dcH,B.fB0,B.fBu,B.ce7,B.cee,B.cef,B.cea,B.ce8,B.ceb,B.cec,B.fVW,B.fVX,B.e_9,B.e_i,B.e_g,B.e_h,B.ftv,B.fzg,B.fzh,B.cew,B.fzj,B.fDu,B.fxu,B.fxv,B.ceB,B.h00,B.dcB,B.dcz,B.e_5,B.dZ1,B.dZ7,B.dZq,B.dZ6,B.dZx,B.dZR,B.dZS,B.dZT,B.dZo,B.dZG,B.dZF,B.dZH,B.dZI,B.dZJ,B.dZL,B.dZM,B.dZE,B.dZ9,B.dZa,B.dZ5,B.dZr,B.dZi,B.dZg,B.dZw,B.dZQ,B.e_2,B.e_3,B.dcx,B.dcy,B.dcV,B.dcU,B.dcP,B.dcN,B.dcL,B.dcO,B.dcQ,B.dcM,B.dcu,B.dcv,B.dcw,B.dcq,B.dd3,B.dd4,B.dcY,B.ceD,B.ceE,B.fD6,B.fDH,B.fDG])
w(B.b65,B.avg)
x(A.iJ,[B.fVI,B.dcF,B.dcG,B.fAZ,B.fB_,B.fBt,B.dYZ,B.e_7,B.e_8,B.e_6,B.e_a,B.e_b,B.e_c,B.e_d,B.e_e,B.e_f,B.dZ_,B.dZ0,B.fzi,B.dcA,B.dZt,B.dZu,B.dZ2,B.dZ3,B.dZ8,B.dZU,B.dZV,B.dZn,B.dZy,B.dZc,B.dZp,B.dZK,B.dZz,B.dZA,B.dZB,B.dZC,B.dZD,B.dZb,B.dZ4,B.dZs,B.dZl,B.dZe,B.dZj,B.dZk,B.dZm,B.dZd,B.dZv,B.dZN,B.dZO,B.dZP,B.e_0,B.e_1,B.dZX,B.dZY,B.dZW,B.dZZ,B.e__,B.dcR,B.dcS,B.dcT,B.dcI,B.dcK,B.dcJ,B.dct,B.dcs,B.dcr,B.dcn,B.dco,B.dcp,B.dd7,B.dd8,B.dd9,B.dda,B.ddb,B.ddc,B.dde,B.ddd,B.dcW,B.dcX,B.dcZ,B.dd_,B.dd0,B.dd1,B.dcm,B.dd6,B.dd5,B.fD7])
x(A.lD,[B.add,B.Od,B.aan,B.Ph,B.Yi,B.Pg,B.FM])
x(A.ag,[B.a_f,B.VY,B.W1,B.VZ,B.a_e,B.W_,B.a_g,B.a_d,B.Qw,B.a_i,B.a_c,B.a_j])
x(A.ah,[B.aAW,B.aEW,B.aEZ,B.aEX,B.aAV,B.aEY,B.aAX,B.aAU,B.aB_,B.aAY,B.aAT,B.aAZ])
x(A.ax,[B.adG,B.aAS,B.bfz,B.ade,B.adc,B.bfA])
x(A.jw,[B.ced,B.ce9,B.ceh,B.cei,B.fWR,B.dZh,B.dZf,B.e_4,B.dd2,B.ceC,B.fDI])
x(A.j2,[B.bl2,B.bxu])})()
A.iT(b.typeUniverse,JSON.parse('{"b64":{"aam":[]},"b65":{"avg":[]},"a_f":{"ag":[],"v":[]},"aAW":{"ah":["a_f"]},"adG":{"ax":[],"v":[]},"VY":{"ag":[],"v":[]},"W1":{"ag":[],"v":[]},"aEW":{"ah":["VY"]},"aEZ":{"ah":["W1"]},"bl2":{"j2":[]},"VZ":{"ag":[],"v":[]},"aEX":{"ah":["VZ"]},"a_e":{"ag":[],"v":[]},"W_":{"ag":[],"v":[]},"ade":{"ax":[],"v":[]},"a_g":{"ag":[],"v":[]},"a_d":{"ag":[],"v":[]},"Qw":{"ag":[],"v":[]},"a_i":{"ag":[],"v":[]},"adc":{"ax":[],"v":[]},"a_c":{"ag":[],"v":[]},"a_j":{"ag":[],"v":[]},"aAV":{"ah":["a_e"]},"bxu":{"j2":[]},"aEY":{"ah":["W_"]},"aAS":{"ax":[],"v":[]},"bfz":{"ax":[],"v":[]},"aAX":{"ah":["a_g"]},"aAU":{"ah":["a_d"]},"aB_":{"ah":["Qw"]},"aAY":{"ah":["a_i"]},"aAT":{"ah":["a_c"]},"aAZ":{"ah":["a_j"]},"bfA":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uJ"),k:x("ME()"),m:x("bu<n,n>"),F:x("rq"),g:x("aB<jB?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<n,P>>"),t:x("O<a8<n,@>>"),r:x("O<jB>"),w:x("O<+file,name(lS,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j2>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<G>"),G:x("bh"),A:x("cw<ah<ag>>"),n:x("ai<jB>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bB<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iC"),e:x("ixy"),af:x("EY"),U:x("jB"),b:x("cr"),C:x("aE"),aK:x("wC"),ab:x("FL"),br:x("avg"),v:x("Yj"),N:x("n"),X:x("br<F>"),Q:x("m2"),D:x("dK"),aw:x("bJ<n>"),cd:x("Y<a8<n,@>>"),c7:x("v"),ch:x("c2<ai<jB>>"),aW:x("c2<dK?>"),aY:x("c2<~>"),cx:x("add"),b1:x("bk<ai<jB>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDz"),bG:x("aGI"),q:x("my"),B:x("pM<FL>"),c6:x("pM<aan>"),y:x("P"),i:x("F"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jB>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jB?"),R:x("aE?"),c:x("Yj?"),d:x("+answerQr,transfer(n,aB<ai<jB>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Od,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acV?"),bk:x("aDz?"),ag:x("aGI?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5a=new A.ay(C.aE,2,C.r,-1)
D.c74=new A.a9(C.a6,C.aa,C.x,C.a4L,null,null)
D.b6P=new A.p(null,null,null,C.mG,null,D.c74,C.n)
D.b8i=new A.p(null,null,null,C.mG,null,E.I6,C.n)
D.afD=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ah2=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ai3=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajS=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fFB=new A.B("Your team portal",null,C.di,null,null,null,null,null,null,null,null,null)
D.fUu=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EG,null,null,null,null,null,null,null,null,null)
D.diV=x([D.fFB,C.am,D.fUu],y.p)
D.bwv=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.diV,null)
D.fYY=new A.B("Create your organization",null,C.fE,null,null,null,null,null,null,null,null,null)
D.fK4=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EG,null,null,null,null,null,null,null,null,null)
D.dzN=x([D.fYY,C.am,D.fK4],y.p)
D.bwE=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dzN,null)
D.fV7=new A.B("Team Member sign-in",null,C.fE,null,null,null,null,null,null,null,null,null)
D.fO2=new A.B("Enter the access code and password from your organization.",null,G.EG,null,null,null,null,null,null,null,null,null)
D.dxy=x([D.fV7,C.am,D.fO2],y.p)
D.bwP=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dxy,null)
D.bD0=new A.R(16,10,16,28)
D.bD8=new A.R(16,14,16,4)
D.bEp=new A.R(20,0,20,16)
D.bEV=new A.R(20,8,20,16)
D.amF=new A.R(24,22,24,20)
D.a2G=new A.a_(63394,"MaterialIcons",!1)
D.apS=new A.a_(63515,"MaterialIcons",!1)
D.bS4=new A.a_(983813,"MaterialIcons",!1)
D.bPm=new A.a_(62867,"MaterialIcons",!1)
D.bT5=new A.ae(D.bPm,44,C.c,null,null,null)
D.bU9=new A.ae(C.k6,null,C.ab,null,null,null)
D.bVA=new A.ae(C.jr,18,null,null,null,null)
D.bXl=new A.ae(D.a2G,26,C.c,null,null,null)
D.bXV=new A.ae(C.CV,null,null,null,null,null)
D.bYv=new A.ae(C.D2,null,null,null,null,null)
D.bZG=new A.ae(W.a2R,null,null,null,null,null)
D.c_0=new A.ae(C.hL,16,null,null,null,null)
D.c2w=new A.ae(C.t3,16,null,null,null,null)
D.bTm=new A.ae(C.nH,null,null,null,null,null)
D.c3o=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTm,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZ2=new A.ae(C.Hm,null,null,null,null,null)
D.c3t=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZ2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTH=new A.ae(H.HV,null,null,null,null,null)
D.c3E=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cSF=x([C.fo,C.b1,C.aE],y.O)
D.c8V=new A.a9(C.aA,C.aF,C.x,D.cSF,null,null)
D.cS6=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RY=x([C.fo,C.aE],y.O)
D.Se=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.drU=x([C.oh,C.aE],y.O)
D.ek7={iceServers:0}
D.aLg={urls:0}
D.dDx=new A.bu(D.aLg,["stun:stun.l.google.com:19302"],y.m)
D.dDw=new A.bu(D.aLg,["stun:stun1.l.google.com:19302"],y.m)
D.d8q=x([D.dDx,D.dDw],A.as("O<a8<n,n>>"))
D.dCO=new A.bu(D.ek7,[D.d8q],A.as("bu<n,@>"))
D.J9=new B.Od(0,"lanDirect")
D.Ty=new B.Od(1,"cloudStash")
D.dOD=new B.Od(2,"inlineInstant")
D.Tz=new B.Od(3,"webrtcLink")
D.Ae=new B.Od(4,"videoCloud")
D.fUt=new A.B("Receive file",null,C.nh,null,null,null,null,null,null,null,null,null)
D.cHV=x([E.arC,C.ae,D.fUt],y.p)
D.f8h=new A.c7(C.aL,C.bc,C.j,C.l,null,C.p,null,0,D.cHV,null)
D.erA=new A.D(C.cp,D.f8h,null)
D.fwb=new A.H(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Iy,null,null,null)
D.fG9=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fwb,null,C.K,null,null,null,null,null,null,null)
D.eqL=new A.D(C.Ck,D.fG9,null)
D.bcG=new A.cg(C.A,null,null,D.eqL,null)
D.ey0=new A.cL(0,null,0,28,null,null,D.bcG,null)
D.eyk=new B.aan(0,"RTCDataChannelConnecting")
D.aQK=new B.aan(1,"RTCDataChannelOpen")
D.aQL=new B.aan(3,"RTCDataChannelClosed")
D.eyl=new B.FM(0,"RTCIceConnectionStateNew")
D.eym=new B.FM(1,"RTCIceConnectionStateChecking")
D.eyn=new B.FM(2,"RTCIceConnectionStateCompleted")
D.eyo=new B.FM(3,"RTCIceConnectionStateConnected")
D.eyp=new B.FM(4,"RTCIceConnectionStateCount")
D.eyq=new B.FM(5,"RTCIceConnectionStateFailed")
D.eyr=new B.FM(6,"RTCIceConnectionStateDisconnected")
D.aQM=new B.FM(7,"RTCIceConnectionStateClosed")
D.aQN=new B.Yi(0,"RTCIceGatheringStateNew")
D.eys=new B.Yi(1,"RTCIceGatheringStateGathering")
D.a97=new B.Yi(2,"RTCIceGatheringStateComplete")
D.a98=new B.Pg(0,"RTCPeerConnectionStateClosed")
D.aQO=new B.Pg(1,"RTCPeerConnectionStateFailed")
D.aQP=new B.Pg(2,"RTCPeerConnectionStateDisconnected")
D.aQQ=new B.Pg(3,"RTCPeerConnectionStateNew")
D.aQR=new B.Pg(4,"RTCPeerConnectionStateConnecting")
D.aQS=new B.Pg(5,"RTCPeerConnectionStateConnected")
D.eyt=new B.Ph(0,"RTCSignalingStateStable")
D.eyu=new B.Ph(1,"RTCSignalingStateHaveLocalOffer")
D.eyv=new B.Ph(2,"RTCSignalingStateHaveRemoteOffer")
D.eyw=new B.Ph(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eyx=new B.Ph(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQT=new B.Ph(5,"RTCSignalingStateClosed")
D.fdl=new A.av(160,48)
D.bdW=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.feU=new A.a6(16,16,D.bdW,null)
D.fJo=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgn=new A.b1(D.fJo,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fR5=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fgq=new A.b1(D.fR5,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_1=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fgx=new A.b1(D.h_1,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fIZ=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fgX=new A.b1(D.fIZ,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVi=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTX=new A.b1(D.fVi,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fWL=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhq=new A.b1(D.fWL,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0u=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fhH=new A.b1(D.h0u,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZr=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fhM=new A.b1(D.fZr,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_F=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new A.b1(D.h_F,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHy=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.b1(D.fHy,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fT1=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fjp=new A.b1(D.fT1,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fLK=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fjV=new A.b1(D.fLK,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0A=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fjZ=new A.b1(D.h0A,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHO=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new A.b1(D.fHO,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGv=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.b1(D.fGv,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fDi=new A.B("NGMY DOC SHARE",null,C.aVi,null,null,null,null,null,null,null,null,null)
D.fEI=new A.B("Show this to sender",null,C.iz,null,null,null,null,null,null,null,null,null)
D.fFI=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fKw=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fKU=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fLU=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fMq=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fPj=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new A.B("Send to their Doc Share",null,C.nX,null,null,null,null,null,null,null,null,null)
D.fSt=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fSO=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fTr=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTy=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fTW=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.fXg=new A.B("Share files & videos\nwith a scan.",null,C.aVl,null,null,null,null,null,null,null,null,null)
D.fXA=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hts=new B.a_c(null)
D.acv=new B.add(0,"docShare")
D.acw=new B.add(1,"gate")
D.Wz=new B.add(2,"gateNoIndividual")})();(function staticFields(){$.aPs=null
$.foj=function(){var x=y.N
return A.T(x,x)}()
$.H1=A.T(y.N,y.D)
$.ahi=A.T(y.N,A.as("lS"))
$.RS=A.T(y.N,y.D)
$.foZ=A.T(y.N,A.as("acV"))
$.cev=A.T(y.S,A.as("bxS"))
$.hpp=1
$.ie_=null
$.idZ=null
$.i4Q=null
$.hdQ=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iy2","hHm",()=>new B.csi())
x($,"ivX","hhR",()=>C.a.q(A.bA(A.bA(A.bA(A.HA(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["kqx+lNEtHMtMHFKhCEjlJaNLqBk="]=a.current})($__dart_deferred_initializers__);