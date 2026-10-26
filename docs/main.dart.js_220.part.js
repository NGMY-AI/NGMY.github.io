((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={ccV:function ccV(){},
hlA(d){var x=null,w=new B.b05(d,D.dRc,new A.oQ(x,x,y.c6),new A.oQ(x,x,y.B))
w.brs(d)
return w},
b05:function b05(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ccQ:function ccQ(d){this.a=d},
ccR:function ccR(d){this.a=d},
ccS:function ccS(d){this.a=d},
ccP:function ccP(d){this.a=d},
ccT:function ccT(d){this.a=d},
hlB(d,e){var x=y.N
x=new B.b06(d,e,A.Q(x,y.e),A.Q(x,y.z))
x.brt(d,e)
return x},
b06:function b06(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ccW:function ccW(d){this.a=d},
ccX:function ccX(d){this.a=d},
ccY:function ccY(d){this.a=d},
ccZ:function ccZ(d){this.a=d},
cd_:function cd_(d){this.a=d},
cd0:function cd0(d){this.a=d},
cd1:function cd1(d){this.a=d},
cd2:function cd2(d){this.a=d},
fDQ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xi.Kk(x,"ngmy_doc_share_v1",new B.f2x(),1)},
hs3(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.AU(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
Pb(d,e){return B.hGx(d,e)},
hGx(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aK6
x=7
return A.b(o==null?$.aK6=B.fDQ():o,$async$Pb)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.me(s,"blobs","readwrite")
C.ik.lK(J.mc(q,"blobs"),r,d)
x=8
return A.b(J.oZ(q),$async$Pb)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pb,w)},
Pa(d){return B.hGw(d)},
hGw(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aK6
x=7
return A.b(o==null?$.aK6=B.fDQ():o,$async$Pa)
case 7:s=f
r=J.me(s,"blobs","readonly")
x=8
return A.b(C.ik.ys(J.mc(r,"blobs"),d),$async$Pa)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$Pa)
case 9:o=B.hs3(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pa,w)},
aea(d){return B.hGv(d)},
hGv(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aea=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aK6
x=7
return A.b(p==null?$.aK6=B.fDQ():p,$async$aea)
case 7:s=f
r=J.me(s,"blobs","readwrite")
C.ik.En(J.mc(r,"blobs"),d)
x=8
return A.b(J.oZ(r),$async$aea)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aea,w)},
f2x:function f2x(){},
huf(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkb(w,v))}return u},
h1O(d,e){var x,w={},v=A.aSc("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fn_(w,v,e)
C.uH.xl(v,"change",new B.fn1(w,v,!1))
C.uH.xl(v,"cancel",new B.fn0(w))
$.eI.lT()
v.click()
A.bK(C.abG,new B.fmZ(w),y.H)},
fn_:function fn_(d,e,f){this.a=d
this.b=e
this.c=f},
fn1:function fn1(d,e,f){this.a=d
this.b=e
this.c=f},
fn0:function fn0(d){this.a=d},
fmZ:function fmZ(d){this.a=d},
BE(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BE=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd5()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRI()?3:4
break
case 3:x=5
return A.b(B.fY6(e,d,s,!0,!1,f,g,h,!1,i),$async$BE)
case 5:x=1
break
case 4:x=6
return A.b(B.OP(d,s,f,g,h,i),$async$BE)
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
return A.b(B.GK(s,d),$async$BE)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.eZ7(s,d),$async$BE)
case 14:x=12
return A.b(r.fY6(q,p,o,n,m,l,k,j,a1,i),$async$BE)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ct(A.eO(new B.fne(s,i,d,f,g,h),!1,null,y.H)),$async$BE)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ct(A.eO(new B.fnf(s,i,d,f,g,h),!1,null,y.H)),$async$BE)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BE,w)},
OP(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OP=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVR(e),$async$OP)
case 3:u=k
x=4
return A.b(B.ama(d,e,!1),$async$OP)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GK(e,d),$async$OP)
case 7:if(k){v=D.a57
x=1
break}x=8
return A.b(B.SI(e),$async$OP)
case 8:v=t?D.Rx:D.a58
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aVP(d,e)){v=D.a57
x=1
break}x=11
return A.b(B.SI(e),$async$OP)
case 11:v=t?D.Rx:D.a58
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fz7(d,e)){v=D.a57
x=1
break}x=14
return A.b(B.SI(e),$async$OP)
case 14:v=D.Rx
x=1
break
case 13:v=t?D.Rx:D.a58
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OP,w)},
eZ7(d,e){var x=0,w=A.j(y.y),v
var $async$eZ7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aVP(e,d)){v=!1
x=1
break}x=3
return A.b(B.aVR(d),$async$eZ7)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZ7,w)},
fY6(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ct(A.eO(new B.f3Q(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fTm(d,e,f,g,h,i,j){return new B.WP(e,j,d,g,h,i,f,null)},
f5M(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f5M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c1(C.K,new B.f5P(A.K(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f5M)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f5M,w)},
f6g(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f6g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c1(C.K,new B.f6i(A.K(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f6g)
case 3:q=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
r.R$=u
r.O$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6g,w)},
fDY(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b2(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
ffB(d,e){var x=0,w=A.j(y.H),v
var $async$ffB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SI(e),$async$ffB)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eC()
case 1:return A.h(v,w)}})
return A.i($async$ffB,w)},
fne:function fne(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnf:function fnf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9D:function a9D(d,e){this.a=d
this.b=e},
f3Q:function f3Q(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WP:function WP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aw_:function aw_(){this.c=this.a=this.d=null},
cWg:function cWg(d,e){this.a=d
this.b=e},
cWd:function cWd(d){this.a=d},
cWf:function cWf(d){this.a=d},
cWe:function cWe(d){this.a=d},
cWi:function cWi(){},
cWh:function cWh(d){this.a=d},
aa4:function aa4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayt:function ayt(d,e){this.a=d
this.b=e},
aBz:function aBz(d,e,f){this.a=d
this.b=e
this.c=f},
f5P:function f5P(d,e,f){this.a=d
this.b=e
this.c=f},
f5N:function f5N(d){this.a=d},
f5O:function f5O(d,e,f){this.a=d
this.b=e
this.c=f},
f6i:function f6i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6h:function f6h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1F(d,e,f,g,h){return B.hgB(d,e,f,g,h)},
hgB(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c1F=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gH(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iA(r.di(d,new B.c1G(s,e,h,g,f,q),y.g),y.l),$async$c1F)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1F,w)},
aVM(d,e,f,g,h){return B.hgC(d,e,f,g,h)},
hgC(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVM=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arl("GET",d)
o=A.fvC()
if(o==null)o=new A.JX(A.a([],y.W))
x=7
return A.b(o.eK(0,s).cJ(0,C.Dk),$async$aVM)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.B7(),$async$aVM)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Aj(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share pull url web] "+f+": "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVM,w)},
aVL(d){return B.hgz(d)},
hgz(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.up(d,null).cJ(0,C.nd),$async$aVL)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aC(0,A.io(A.im(p.e)).c4(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVL,w)},
c1E(d){return B.hgA(d)},
hgA(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.up(d,null).cJ(0,C.oV),$async$c1E)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.io(A.im(q.e)).c4(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a5(o)
$.ak.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1E,w)},
c1G:function c1G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j8:function j8(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
GI(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hgH(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GI(C.a.aV(u,v.length))}return null},
hgI(d){var x=B.GI(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hgD(){var x,w=$.oX(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aF(10)
return C.d.fL(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aF(24)]},
a4q(d){return B.hgE(d)},
hgE(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bE),$async$a4q)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4q,w)},
a4r(d,e){return B.hgF(d,e)},
hgF(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4r=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hr(d,e,!1,!1,C.cy,null),$async$a4r)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4r,w)},
Ai(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ai=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aw(),$async$Ai)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GI(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4s(r),$async$Ai)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4q("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ai)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GI(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ai)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hgD()
x=14
return A.b(B.a4s(m),$async$Ai)
case 14:if(f!=null){x=12
break}l=new A.N(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4r("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ai)
case 15:k=f
x=16
return A.b(B.a4r("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ai)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ai)
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
return A.i($async$Ai,w)},
a4s(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GI(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4q("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4s)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4s,w)},
a4t(d,e,f,g){return B.hgJ(d,e,f,g)},
hgJ(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4t=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GI(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4s(r),$async$a4t)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c1M())>1048576||g.bd(d,new B.c1N())){v=B.D3(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4E("myCode",d,a0),$async$a4t)
case 4:u=a3
try{t=C.Q.aC(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ch(s)||J.aa(s)!==g.gH(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D3(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aVU(u,g.gH(d),a0),$async$a4t)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oX().aF(9999)
k=n.b
j=g.gH(d)
i=y.N
h=g.di(d,new B.c1O(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aVN(A.D(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4t)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gH(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4t,w)},
D3(d,e,f,g,h){return B.hgG(d,e,f,g,h)},
hgG(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D3=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$D3)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c1I())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oX().aF(9999)
h=Date.now()
g=""+1000*h+"_"+C.cz.aF(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aI(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GM(a9,q)
a0=new A.Ix(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D3)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eL().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.op(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a7V(a1.a,a4,"media",a1.d,a2).w0(m,n,new A.Co(!0,q.c)),$async$D3)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$D3)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMu(r),$async$D3)
case 16:v=!1
x=1
break
case 15:f.push(A.D(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gH(a6)
a1=l.di(a6,new B.c1J(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aVN(A.D(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D3)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMu(r),$async$D3)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gH(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D3,w)},
aVN(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aVN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4q(t),$async$aVN)
case 3:s=g
r=y.aL.a(J.q(s==null?A.D(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c1H(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4r(t,A.D(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVN,w)},
Lt(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lt=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4q("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lt)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ch(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.Y(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aVO(k,a0),$async$Lt)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aVT(h),$async$Lt)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SP(g,a0),$async$Lt)
case 10:f=a3
if(f!=null&&J.ct(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("E.E")
e=A.z(new A.a3(r,new B.c1K(),q),n)
d=A.z(new A.a3(r,new B.c1L(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dg(d,0,A.dL(50,"count",y.S),A.R(d).c))
x=11
return A.b(B.a4r("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.D(["deliveries",q],p,o)),$async$Lt)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lt,w)},
aVO(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aVO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ch(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a6(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aQ(o.h(p,"partCount"))
j=o==null?null:C.k.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hKe(k,j)
C.d.v(s,i)
x=5
return A.b(B.BC(l,m,"Received via My Code",t,e,i),$async$aVO)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMu(s),$async$aVO)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVO,w)},
c1M:function c1M(){},
c1N:function c1N(){},
c1O:function c1O(){},
c1I:function c1I(){},
c1J:function c1J(){},
c1H:function c1H(){},
c1K:function c1K(){},
c1L:function c1L(){},
fnb(d,e){var x=0,w=A.j(y.H)
var $async$fnb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ct(A.eO(new B.fnc(e),!1,null,y.H)),$async$fnb)
case 2:return A.h(null,w)}})
return A.i($async$fnb,w)},
byA(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ct(A.eO(new B.fnd(g,e,f),!1,null,y.y)),$async$byA)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byA,w)},
fnc:function fnc(d){this.a=d},
fnd:function fnd(d,e,f){this.a=d
this.b=e
this.c=f},
SF:function SF(d,e){this.c=d
this.a=e},
azQ:function azQ(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dFE:function dFE(d,e){this.a=d
this.b=e},
SJ:function SJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azT:function azT(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dGN:function dGN(d){this.a=d},
dGO:function dGO(d){this.a=d},
dGP:function dGP(d){this.a=d},
dGM:function dGM(d,e){this.a=d
this.b=e},
dGQ:function dGQ(d){this.a=d},
dGR:function dGR(d){this.a=d},
dGS:function dGS(d,e){this.a=d
this.b=e},
dGT:function dGT(d,e){this.a=d
this.b=e},
dGU:function dGU(d,e){this.a=d
this.b=e},
dGV:function dGV(d){this.a=d},
dGY:function dGY(){},
dGW:function dGW(d){this.a=d},
dGX:function dGX(d,e){this.a=d
this.b=e},
bez:function bez(){},
SG:function SG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azR:function azR(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dFF:function dFF(d){this.a=d},
dFG:function dFG(d){this.a=d},
fz8(d){var x=d.hC
if(x>=0)return C.o.M(x)
return 10},
hgL(d){var x=d.k9
if(x>=0)return x
return 4.99},
hgK(d){var x=d.kR,w=y.N
w=x.iC(x,new B.c1Q(),w,w)
return w},
fOx(d){var x=d.ka,w=y.N
w=x.iC(x,new B.c1R(),w,w)
return w},
aVR(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aVR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aVR)
case 7:s=f
r=A.t(p)
r=A.aR(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aVR,w)},
a4v(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$a4v)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4v)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4v,w)},
SI(d){var x=0,w=A.j(y.H),v,u
var $async$SI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$SI)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
fz7(d,e){var x,w,v
if(B.hgL(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hgK(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.ca(new A.N(Date.now(),0,!1))},
aVP(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fOx(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.ca(new A.N(Date.now(),0,!1))},
fOy(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Y(B.fOx(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.ca(new A.N(Date.now(),0,!1))?v:new A.N(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amb(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amb)
case 7:s=f
r=A.t(p)
r=A.eX(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amb,w)},
amc(d){var x=0,w=A.j(y.H),v,u,t
var $async$amc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amb(d),$async$amc)
case 3:u=f
x=5
return A.b(A.aw(),$async$amc)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$amc)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amc,w)},
ama(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ama=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fz8(d)
if(u<=0){v=!1
x=1
break}if(B.fz7(d,e)){v=!1
x=1
break}x=3
return A.b(B.amb(e),$async$ama)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ama,w)},
aVQ(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aVQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GK(e,d),$async$aVQ)
case 3:if(g){v=-1
x=1
break}u=B.fz8(d)
if(u<=0){v=-1
x=1
break}if(B.fz7(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amb(e),$async$aVQ)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVQ,w)},
c1T(d,e,f){var x=0,w=A.j(y.y),v
var $async$c1T=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GK(e,d),$async$c1T)
case 3:if(h){v=!1
x=1
break}v=B.ama(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1T,w)},
c1S(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c1S=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
x=3
return A.b(B.c1T(d,u,i.gRI()),$async$c1S)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1S,w)},
a4u(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4u=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
if(i.gRI()){v=!0
x=1
break}if(B.aVP(d,u)){v=!0
x=1
break}x=5
return A.b(A.kY(u,C.Pa),$async$a4u)
case 5:x=k?3:4
break
case 3:B.fOy(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4u)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kD(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Pa,"Doc Share for Organizations"),$async$a4u)
case 7:if(!k){v=!1
x=1
break}B.fOy(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4u)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4u,w)},
c1Q:function c1Q(){},
c1R:function c1R(){},
fnI(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fnI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fnI)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eVX.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hC([r],e.c))
s.toString
$.eVX.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnI,w)},
hMl(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eVX.bk($.eVX,new B.fnK(d))},
fnK:function fnK(d){this.a=d},
eXh(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eXh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aI(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],f))
s.toString
u=A.mE(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.jb,null,y.H),$async$eXh)
case 3:C.yx.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lT()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eXh,w)},
ad5(d,e,f){var x=0,w=A.j(y.H),v
var $async$ad5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eWt.m(0,d,new B.a9k(A.bi(e,!0,v)))
x=3
return A.b(A.aw(),$async$ad5)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.D(["parts",e,"size",f],v,y.C),null)),$async$ad5)
case 2:return A.h(null,w)}})
return A.i($async$ad5,w)},
ad_(d){return B.hvX(d)},
hvX(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ad_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eWt.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ad_)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aC(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b4(s,new B.f_L(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.a9k(r)
$.eWt.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ad_,w)},
OF(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EE.m(0,d,u)
x=3
return A.b(B.Pb(d,u),$async$OF)
case 3:t=g
if(!t)$.ak.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OF,w)},
aKq(d){return B.hvV(d)},
hvV(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EE.h(0,d)
if(n!=null&&!C.aD.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pa(d),$async$aKq)
case 3:p=f
if(p!=null&&!C.aD.gah(p)){$.EE.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKq)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aE(r)
x=!J.ch(q)?9:10
break
case 9:B.OF(d,q)
x=11
return A.b(J.hB(s,d),$async$aKq)
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
return A.i($async$aKq,w)},
hso(d){if(d==null)return A.f2(null,y.K)
if(y.J.b(d))return A.f2(new Uint8Array(A.cl(J.eP(d,0,null))),y.K)
if(y.D.b(d))return A.f2(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f2(new Uint8Array(A.cl(A.AU(d,0,null))),y.K)
if(y.I.b(d))return A.f2(new Uint8Array(A.cl(d)),y.K)
return A.f2(null,y.K)},
a_d(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bL(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f41(r,t),!1,s)
A.fA(r,"error",new B.f42(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.Jz,new B.f43())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_d,w)},
aKK(d,e,f){return B.hy8(d,e,f)},
hy8(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKK=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_d(i),$async$aKK)
case 10:p=a0
if(p==null||p.length===0){$.ak.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Pb(o,p),$async$aKK)
case 11:n=a0
if(!n){$.ak.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.ad5(k,j,s),$async$aKK)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a5(h)
$.ak.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKK,w)},
aKJ(d,e,f){return B.hy7(d,e,f)},
hy7(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKJ=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKK(d,e,f),$async$aKJ)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_d(f),$async$aKJ)
case 10:r=h
if(r==null||r.length===0){$.ak.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EE.m(0,s,r)
$.OX.m(0,s,r)
x=11
return A.b(B.OF(s,r),$async$aKJ)
case 11:q=h
if(!q)$.ak.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKJ,w)},
Aj(d,e,f,g,h,i){return B.hgU(d,e,f,g,h,i)},
hgU(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Aj=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cz.aF(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j8(p,q,o,n,new A.N(Date.now(),0,!1).a4().aa(),a0,f,B.aVX(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OF(s,d),$async$Aj)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aw(),$async$Aj)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cM.gcq().aE(d)),$async$Aj)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.ak.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.zs(e),$async$Aj)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.EN(e,j),$async$Aj)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Aj,w)},
SK(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zs(d),$async$SK)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cz.aF(99999)
n=p.b
l=o.type
l.toString
k=B.fOA(n,null,l)
l=o.size
l.toString
j=new A.N(Date.now(),0,!1).a4().aa()
i=new B.j8(m,n,k,l,j,"From folder",null,B.aVX(),null)
$.adx.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_d(o),$async$SK)
case 7:g=a1
x=g!=null&&!C.aD.gah(g)?8:10
break
case 8:$.EE.m(0,h,g)
$.OX.m(0,h,g)
B.OF(h,g)
x=9
break
case 10:x=11
return A.b(B.aKJ(d,m,o),$async$SK)
case 11:case 9:r.G(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EN(d,t),$async$SK)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
fzc(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fzc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fOA(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GL(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aD.gah(s)){v=B.Aj(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzc,w)},
GL(d,e,f,g,h,i){return B.hgT(d,e,f,g,h,i)},
hgT(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GL=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cz.aF(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ix(A.dL(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GL)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ch(m)){x=6
break}J.fS(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PI(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.km(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pb(k,l),$async$GL)
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
return A.b(j.a9(0),$async$GL)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pb(k,new Uint8Array(A.cl(n))),$async$GL)
case 15:J.ci(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ad5(r,q,g),$async$GL)
case 16:f=new B.j8(i,a1,a0,g,new A.N(Date.now(),0,!1).a4().aa(),a2,null,B.aVX(),null)
x=17
return A.b(B.zs(d),$async$GL)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.EN(d,e),$async$GL)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GL,w)},
SM(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SM=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adx.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_d(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ad_(s),$async$SM)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pa(u[o]),$async$SM)
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
v=A.AU(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.OX.h(0,s)
if(i==null)i=$.EE.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qN(d,e),$async$SM)
case 12:i=a0
if(i!=null&&!C.aD.gah(i))$.OX.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AU(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SM,w)},
fOA(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gai(x):""
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
qN(d,e){return B.hgV(d,e)},
hgV(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OX.h(0,f)
if(e==null)e=$.EE.h(0,f)
if(e!=null&&!C.aD.gah(e)){v=e
x=1
break}s=$.adx.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_d(s),$async$qN)
case 9:r=a3
if(r!=null&&!C.aD.gah(r)){$.EE.m(0,f,r)
$.OX.m(0,f,r)
B.OF(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a5(d)
$.ak.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ad_(f),$async$qN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auO(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pa(g[l]),$async$qN)
case 16:k=a3
if(k!=null&&!C.aD.gah(k))n.G(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.akB()
if(!C.aD.gah(r)){$.EE.m(0,f,r)
$.OX.m(0,f,r)
v=r
x=1
break}$.ak.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKq(f),$async$qN)
case 17:j=a3
if(j!=null&&!C.aD.gah(j)){$.OX.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SM(a0,a1,0,g),$async$qN)
case 20:i=a3
if(i!=null&&!C.aD.gah(i)){h=new Uint8Array(A.cl(i))
$.EE.m(0,f,h)
$.OX.m(0,f,h)
B.OF(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qN,w)},
hgY(d){var x,w,v=$.adx.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hgZ(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hC([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hgW(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ami(d,e,f,g,h){return B.hgX(d,e,f,g,h)},
hgX(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ami=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adx.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_d(s),$async$ami)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qN(g,e),$async$ami)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eL().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w0(h,r,new A.Co(!0,e.c)),$async$ami)
case 12:f.$2(J.aa(r),J.aa(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.ak.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ami,w)},
fOC(d,e,f,g,h){var x,w,v,u,t=$.fOB
$.fOB=t+1
x=Date.now()
w=""+1000*x+"_"+C.cz.aF(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c23.m(0,t,new B.bqN(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auO(u)))
return t},
fzd(d){var x=0,w=A.j(y.H)
var $async$fzd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fzd,w)},
GM(d,e){var $async$GM=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adx.h(0,h)
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
return A.py(B.SM(d,e,p,o<q?o:q),$async$GM,w)
case 8:n=a1
x=n!=null&&!C.aD.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.py(A.Ed(n),$async$GM,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.py(B.ad_("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GM,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.py(B.Pa(h[l]),$async$GM,w)
case 18:k=a1
x=k!=null&&!C.aD.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.py(A.Ed(k),$async$GM,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.py(B.qN(d,e),$async$GM,w)
case 22:j=a1
x=j!=null&&!C.aD.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.py(A.Ed(A.AU(j,p,o<i?o:i)),$async$GM,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.py(null,0,w)
case 2:return A.py(t.at(-1),1,w)}})
var x=0,w=A.fX1($async$GM,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.fYM(w)},
aVZ(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aVZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c23.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.G(0,e)
case 3:if(!(u.gH(u)>=1048576)){x=4
break}x=5
return A.b(t.a1U(),$async$aVZ)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVZ,w)},
SL(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c23.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a1U(),$async$SL)
case 3:u=r.w
if(u.length===0||r.z<=0){$.ak.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ad5(r.c,u,r.z),$async$SL)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.N(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aVX(),null)
u=r.a
x=5
return A.b(B.zs(u),$async$SL)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.EN(u,s),$async$SL)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
a4B(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c23.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aea(u[s]),$async$a4B)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
c25(d,e,f){var x=0,w=A.j(y.H)
var $async$c25=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvL(d,e,f),$async$c25)
case 2:return A.h(null,w)}})
return A.i($async$c25,w)},
c26(d,e,f){var x=0,w=A.j(y.H)
var $async$c26=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvM(d,e,f),$async$c26)
case 2:return A.h(null,w)}})
return A.i($async$c26,w)},
D4(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zs(d),$async$D4)
case 2:p=g
J.mY(p,new B.c24(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EE.W(0,v)
$.adx.W(0,e)
x=3
return A.b(B.ad_(v),$async$D4)
case 3:u=g
$.eWt.W(0,v)
x=4
return A.b(A.aw(),$async$D4)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$D4)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$D4)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aea(s[q]),$async$D4)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aea(v),$async$D4)
case 13:x=14
return A.b(B.EN(d,p),$async$D4)
case 14:return A.h(null,w)}})
return A.i($async$D4,w)},
aVY(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aVY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qN(d,e),$async$aVY)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eXh(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVY,w)},
zs(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$zs)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aC(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f44(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zs,w)},
EN(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$EN)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.f7W(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$EN)
case 3:return A.h(null,w)}})
return A.i($async$EN,w)},
bvL(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zs(d),$async$bvL)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f2J(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azu(f))
x=4
return A.b(B.EN(d,u),$async$bvL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvL,w)},
bvM(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zs(d),$async$bvM)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f2K(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cy_(f))
x=4
return A.b(B.EN(d,u),$async$bvM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvM,w)},
a9k:function a9k(d){this.a=d},
f_L:function f_L(){},
f41:function f41(d,e){this.a=d
this.b=e},
f42:function f42(d){this.a=d},
f43:function f43(){},
c24:function c24(d){this.a=d},
bqN:function bqN(d,e,f,g,h,i,j,k,l){var _=this
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
f44:function f44(){},
f7W:function f7W(){},
f2J:function f2J(d){this.a=d},
f2K:function f2K(d){this.a=d},
a4C(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bd(d,new B.c29())?3:4
break
case 3:x=5
return A.b(B.aW_(d,e),$async$a4C)
case 5:u=g
if(u!=null){t=u.c
B.Lv(d,u.b,e,t)}v=u
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
return A.b(B.aVV(s),$async$a4C)
case 10:case 9:if(g){v=new A.O2(1,D.OO,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SN(d,e),$async$a4C)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SS(!0,!0,d,e),$async$a4C)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Lv(d,D.xO,e,t)
v=new A.O2(p,D.xO,t)
x=1
break}v=B.c28(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4C,w)},
SN(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4E(null,d,e),$async$SN)
case 3:p=g
try{u=C.Q.aC(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ch(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aVU(p,d.length,e),$async$SN)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c26(e,C.d.gI(d).a,r.b),$async$SN)
case 7:case 6:q=r.a
x=8
return A.b(B.Lv(d,D.OO,e,q),$async$SN)
case 8:v=new A.O2(d.length,D.OO,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
SO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lY(D.m0)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4D(d,e),$async$SO)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c21(s,d,e,t),$async$SO)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aVV(t),$async$SO)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qN(e,d),$async$SO)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SN(A.a([d],y.r),e),$async$SO)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
SQ(){var x=0,w=A.j(y.H)
var $async$SQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fz6(),$async$SQ)
case 2:x=3
return A.b(B.aML(),$async$SQ)
case 3:return A.h(null,w)}})
return A.i($async$SQ,w)},
a4D(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aVX()
x=3
return A.b(B.c25(e,d.a,u),$async$a4D)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4D,w)},
Lv(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OO&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4D(p,f),$async$Lv)
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
return A.b(B.c20(o,p,u,f),$async$Lv)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c21(o,p,f,t),$async$Lv)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c2_(o,u,p,f),$async$Lv)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lv,w)},
aW_(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aW_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c27(e,d),$async$aW_)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SS(!1,!0,d,e),$async$aW_)
case 4:u=g
if(u!=null){t=u.b
v=new A.O2(u.a,D.xO,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW_,w)},
c27(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c27=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SM(d,s,0,1),$async$c27)
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
return A.i($async$c27,w)},
c28(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c28=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4E(null,d,e),$async$c28)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fOz(u)
if(t.length>800){v=null
x=1
break}v=new A.O2(d.length,D.ddz,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c28,w)},
amj(d,e,f){return B.hh1(d,e,f)},
hh1(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amj=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cT(g,"\ufeff"))g=J.md(g,1)
x=B.fzb(g)?3:4
break
case 3:x=5
return A.b(B.c22(g),$async$amj)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cT(g,"NGMYDOCSYNC4|")){s=C.a.i(J.md(g,13))
try{k=B.D5(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a5(a1)
$.ak.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cT(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.md(g,13))
u=9
x=12
return A.b(B.aVT(q),$async$amj)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SP(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a5(f)
$.ak.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cT(g,"NGMYDOCSYNC0|"))try{n=B.fza(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SP(n,a0)
v=k
x=1
break}catch(a1){m=A.a5(a1)
$.ak.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cT(g,"N2|")){v=B.GN(C.a.i(J.md(g,3)),d,a0)
x=1
break}if(J.cT(g,"NGMYDOCSYNC2|")){v=B.GN(C.a.i(J.md(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GN(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SP(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amj,w)},
GN(d,e,f){return B.hh_(d,e,f)},
hh_(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GN=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cp(A.t(s)+"/manifest.json",0,null)
q=A.cp(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVL(r),$async$GN)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVL(A.cp(s,0,null)),$async$GN)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c1F(o,r,a1,n,a2),$async$GN)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.c1E(q),$async$GN)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SP(l,a2),$async$GN)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ch(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a5(d)
$.ak.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GN,w)},
a4E(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4E=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qN(f,r),$async$a4E)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.D(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcq().aE(q)],t,s))
x=3
break
case 4:u=A.Q(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.N(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.aj(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4E,w)},
SP(d,e){return B.hh0(d,e)},
hh0(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SP=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aC(0,a2,null)
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
o=J.y(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cw.aE(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.Aj(i,a3,d,k,l,o),$async$SP)
case 9:h=a5
if(h!=null)J.ci(n,h)
x=7
break
case 8:f=J.aa(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a5(a1)
$.ak.$1("[doc share bundle] "+A.t(g))
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
Lu:function Lu(d,e){this.a=d
this.b=e},
c29:function c29(){},
ZN(d){var x=A.K(d).ax.a===C.H,w=x?D.a9B:D.a7Y,v=x?D.aaZ:C.c,u=x?C.aN:C.M,t=x?C.bP:C.ak,s=x?D.a8U:C.aJ
return new A.aCL([w,s,v,u,t,x?C.eT:C.bU])},
h2v(d,e){var x=e?C.x.j(0.72):C.aV
return A.cb(null,x,!0,null,new B.frG(e),d,null,!0,!0,y.N)},
c1P(d,e,f,g,h,i,j,k,l){return new B.SH(e,l,d,f,k,j,g,h,i,null)},
WR(d,e,f,g,h,i,j){return new B.b9i(g,h,j,e,i,d,f,null)},
frG:function frG(d){this.a=d},
WO:function WO(d,e){this.c=d
this.a=e},
avZ:function avZ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cWc:function cWc(d){this.a=d},
cWa:function cWa(d){this.a=d},
cWb:function cWb(d){this.a=d},
bqs:function bqs(){},
SH:function SH(d,e,f,g,h,i,j,k,l,m){var _=this
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
azS:function azS(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dGL:function dGL(d){this.a=d},
dG8:function dG8(d,e){this.a=d
this.b=e},
dG9:function dG9(d,e){this.a=d
this.b=e},
dFI:function dFI(d,e,f){this.a=d
this.b=e
this.c=f},
dFH:function dFH(d){this.a=d},
dFJ:function dFJ(d,e){this.a=d
this.b=e},
dFO:function dFO(d,e,f){this.a=d
this.b=e
this.c=f},
dFN:function dFN(d){this.a=d},
dGz:function dGz(d,e){this.a=d
this.b=e},
dGA:function dGA(d){this.a=d},
dG5:function dG5(d,e,f){this.a=d
this.b=e
this.c=f},
dG2:function dG2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dFM:function dFM(d){this.a=d},
dGd:function dGd(d){this.a=d},
dGc:function dGc(){},
dFS:function dFS(d){this.a=d},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGx:function dGx(d,e){this.a=d
this.b=e},
dGy:function dGy(d,e){this.a=d
this.b=e},
dG3:function dG3(d,e){this.a=d
this.b=e},
dG4:function dG4(d,e){this.a=d
this.b=e},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGl:function dGl(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGm:function dGm(){},
dGn:function dGn(){},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGq:function dGq(){},
dGr:function dGr(d){this.a=d},
dGj:function dGj(d,e){this.a=d
this.b=e},
dGe:function dGe(d){this.a=d},
dGf:function dGf(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGh:function dGh(d){this.a=d},
dGi:function dGi(d){this.a=d},
dFP:function dFP(){},
dFQ:function dFQ(d){this.a=d},
dFR:function dFR(d,e){this.a=d
this.b=e},
dFL:function dFL(d,e){this.a=d
this.b=e},
dFK:function dFK(d,e,f){this.a=d
this.b=e
this.c=f},
dG6:function dG6(d){this.a=d},
dG7:function dG7(d,e,f){this.a=d
this.b=e
this.c=f},
dG0:function dG0(d,e){this.a=d
this.b=e},
dFX:function dFX(d){this.a=d},
dFU:function dFU(d,e,f){this.a=d
this.b=e
this.c=f},
dFY:function dFY(d){this.a=d},
dFZ:function dFZ(d){this.a=d},
dG_:function dG_(){},
dG1:function dG1(d,e){this.a=d
this.b=e},
dFV:function dFV(d){this.a=d},
dFT:function dFT(d,e,f){this.a=d
this.b=e
this.c=f},
dFW:function dFW(){},
dGb:function dGb(d){this.a=d},
dGa:function dGa(d,e){this.a=d
this.b=e},
dGv:function dGv(d,e){this.a=d
this.b=e},
dGs:function dGs(d){this.a=d},
dGt:function dGt(d,e){this.a=d
this.b=e},
dGu:function dGu(d){this.a=d},
dGI:function dGI(d){this.a=d},
dGG:function dGG(d){this.a=d},
dGH:function dGH(d){this.a=d},
dGJ:function dGJ(){},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGD:function dGD(d,e,f){this.a=d
this.b=e
this.c=f},
dGB:function dGB(d,e,f){this.a=d
this.b=e
this.c=f},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGF:function dGF(d,e){this.a=d
this.b=e},
avW:function avW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9h:function b9h(d,e,f){this.c=d
this.d=e
this.a=f},
cW8:function cW8(){},
cW9:function cW9(){},
a9E:function a9E(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWw:function cWw(){},
cWv:function cWv(d){this.a=d},
WQ:function WQ(d,e,f){this.c=d
this.d=e
this.a=f},
aw0:function aw0(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWs:function cWs(d){this.a=d},
cWt:function cWt(d,e,f){this.a=d
this.b=e
this.c=f},
cWu:function cWu(d,e){this.a=d
this.b=e},
cWq:function cWq(d,e){this.a=d
this.b=e},
cWo:function cWo(d){this.a=d},
cWm:function cWm(d){this.a=d},
cWj:function cWj(d){this.a=d},
cWp:function cWp(d){this.a=d},
cWl:function cWl(d){this.a=d},
cWr:function cWr(d){this.a=d},
cWn:function cWn(d){this.a=d},
cWk:function cWk(d){this.a=d},
WN:function WN(d,e,f){this.c=d
this.d=e
this.a=f},
avY:function avY(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cW5:function cW5(d){this.a=d},
cW4:function cW4(d,e){this.a=d
this.b=e},
cW6:function cW6(d){this.a=d},
cW3:function cW3(d,e){this.a=d
this.b=e},
cW7:function cW7(d){this.a=d},
cW2:function cW2(d,e){this.a=d
this.b=e},
cVZ:function cVZ(d){this.a=d},
cW_:function cW_(d){this.a=d},
cW0:function cW0(d,e){this.a=d
this.b=e},
cW1:function cW1(d){this.a=d},
NF:function NF(d,e,f){this.c=d
this.d=e
this.a=f},
aw3:function aw3(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cWJ:function cWJ(d){this.a=d},
cWK:function cWK(d){this.a=d},
cWL:function cWL(d){this.a=d},
cWM:function cWM(d){this.a=d},
cWN:function cWN(d,e){this.a=d
this.b=e},
cWO:function cWO(d){this.a=d},
cWQ:function cWQ(d){this.a=d},
cWP:function cWP(d){this.a=d},
WS:function WS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aw1:function aw1(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cWF:function cWF(d,e){this.a=d
this.b=e},
cWG:function cWG(d,e){this.a=d
this.b=e},
cWx:function cWx(d,e,f){this.a=d
this.b=e
this.c=f},
cWy:function cWy(d){this.a=d},
cWz:function cWz(){},
cWE:function cWE(){},
cWA:function cWA(d,e){this.a=d
this.b=e},
cWB:function cWB(d,e){this.a=d
this.b=e},
cWC:function cWC(d,e){this.a=d
this.b=e},
cWD:function cWD(d,e){this.a=d
this.b=e},
a9C:function a9C(d,e){this.c=d
this.a=e},
cVY:function cVY(d){this.a=d},
WM:function WM(d){this.a=d},
avX:function avX(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WT:function WT(d,e){this.c=d
this.a=e},
aw2:function aw2(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cWI:function cWI(d){this.a=d},
cWH:function cWH(d){this.a=d},
b9i:function b9i(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hh2(){var x,w=$.oX(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aF(32)]
return"VT"+C.d.fL(v)},
Lw(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lw=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$Lw)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$Lw)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.Y(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.Q(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Lw,w)},
a4F(d){return B.hh3(d)},
hh3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4F)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_video_relay_v1",A.D(["relays",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4F)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.ak.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4F,w)},
SR(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lw(),$async$SR)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.Y(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4F(s),$async$SR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SR,w)},
SS(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bZ(),$async$SS)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bi(f,!0,y.U)
else{t=A.R(f).k("a3<1>")
u=A.z(new A.a3(f,new B.c2b(),t),t.k("E.E"))}if(u.length===0){v=null
x=1
break}s=B.hh2()
t=A.R(u).k("I<1,a0<n,aC>>")
r=A.z(new A.I(u,new B.c2c(s),t),t.k("ai.E"))
x=6
return A.b(B.Lw(),$async$SS)
case 6:q=i
J.aE(q,s,A.D(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4F(q),$async$SS)
case 7:x=8
return A.b(B.a4G(r,u,g,s),$async$SS)
case 8:v=new A.bkD(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SS,w)},
amk(d){var x=0,w=A.j(y.y),v,u,t
var $async$amk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lw(),$async$amk)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amk,w)},
c2d(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lw(),$async$c2d)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2d,w)},
a4G(d,e,f,g){return B.hh4(d,e,f,g)},
hh4(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4G=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.ami("media",r,new B.c2a(s,e,g),f,q),$async$a4G)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SR(g,A.D(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4G)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SR(g,A.D(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4G)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.ak.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SR(g,A.D(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4G)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4G,w)},
D5(d,e,f){return B.hh5(d,e,f)},
hh5(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D5=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$D5)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amk(b3),$async$D5)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kQ,null,g),$async$D5)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amk(b3),$async$D5)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lw(),$async$D5)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ch(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gH(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a6(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.aa(m)===0){x=11
break}u=14
a8=$.eL().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.op(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a7V(a8.a,b0,"media",a8.d,a9).Bs(m)
k=A.cp(l,0,null)
x=17
return A.b(B.aVM(k,n,o,s,b7),$async$D5)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a5(b4)
$.ak.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.aa(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.eL().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.op(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a7V(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D5)
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
a0=A.dQ(A.Y(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4F(e),$async$D5)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D5,w)},
c2b:function c2b(){},
c2c:function c2c(d){this.a=d},
c2a:function c2a(d,e,f){this.a=d
this.b=e
this.c=f},
aML(){var x=0,w=A.j(y.H),v,u
var $async$aML=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hrR=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aML)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aML)
case 3:u=$.fE8
u=u==null?null:u.bw(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aML)
case 4:$.fE8=$.hzT=$.hzU=null
return A.h(null,w)}})
return A.i($async$aML,w)},
f7y(d){var x=0,w=A.j(y.H),v,u
var $async$f7y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2c){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f7z(new A.bL(u,y.aY))
x=3
return A.b(u.i0(0,C.hq,new B.f7A()),$async$f7y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f7y,w)},
hzR(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hgN(x):x},
fEc(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amm(u)
x=1
break}v=B.fza(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEc,w)},
fEb(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.amn(u)
x=1
break}v=B.fza(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEb,w)},
fns(d){var x=0,w=A.j(y.T),v
var $async$fns=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amn(d),$async$fns)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fns,w)},
bwC(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fEb(d),$async$bwC)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aC(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwC,w)},
eY5(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eY5=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SL(g)
x=1
break}if(d.gH(d)<=0){v=null
x=1
break}v=B.Aj(d.akB(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eY5,w)},
EP(d,e,f){return B.hC5(d,e,f)},
hC5(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EP=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fEc(a1),$async$EP)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aC(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a6(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h4h().azJ(D.d1W,null),$async$EP)
case 4:l=d.fE8=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auO(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f82(f,k,new B.f83(f,a2,k,j,a0,p),a2,j,a0,p,new A.bL(t,y.ch))
x=5
return A.b(l.a4J(0,new B.UX(r,"offer")),$async$EP)
case 5:d=l
x=7
return A.b(l.ahw(0),$async$EP)
case 7:x=6
return A.b(d.a4B(0,a4),$async$EP)
case 6:x=8
return A.b(B.f7y(l),$async$EP)
case 8:x=9
return A.b(l.alj(),$async$EP)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hzR(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.D(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amo(m,h),$async$EP)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fOz(h)
case 11:v=new A.bjW(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EP,w)},
f7z:function f7z(d){this.a=d},
f7A:function f7A(){},
f83:function f83(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f82:function f82(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f81:function f81(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hDS(d){switch(d){case"new":return D.dRd
case"checking":return D.dRe
case"connected":return D.dRg
case"completed":return D.dRf
case"failed":return D.dRi
case"disconnected":return D.dRj
case"closed":return D.aFK
case"count":return D.dRh}return D.aFK},
hDT(d){switch(d){case"new":return D.aFL
case"gathering":return D.dRk
case"complete":return D.a2c}return D.aFL},
hNO(d){switch(d){case"stable":return D.dRl
case"have-local-offer":return D.dRm
case"have-local-pranswer":return D.dRo
case"have-remote-offer":return D.dRn
case"have-remote-pranswer":return D.dRp
case"closed":return D.aFR}return D.aFR},
hM7(d){switch(d){case"new":return D.aFO
case"connecting":return D.aFP
case"connected":return D.aFQ
case"closed":return D.a2d
case"disconnected":return D.aFN
case"failed":return D.aFM}return D.a2d},
a6U:function a6U(d,e){this.a=d
this.b=e},
Mx:function Mx(d,e){this.a=d
this.b=e},
UW:function UW(d,e){this.a=d
this.b=e},
Mw:function Mw(d,e){this.a=d
this.b=e},
Dy:function Dy(d,e){this.a=d
this.b=e},
ccU:function ccU(){},
fAQ(d){var x=new B.Dx()
x.a=d
x.b=!0
return x},
Dx:function Dx(){this.b=this.a=$},
a6T:function a6T(){},
aqw:function aqw(){},
UX:function UX(d,e){this.a=d
this.b=e},
fz6(){var x=0,w=A.j(y.H)
var $async$fz6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fz6,w)},
fz9(d,e,f){var x=0,w=A.j(y.T),v
var $async$fz9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lY(D.m0))){v=null
x=1
break}v=B.fnI(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fz9,w)},
fOz(d){var x,w=F.a7u.a1E(C.dB.aE(d),null)
if(w.length===0){x=C.dB.aE(d)
return C.cM.gcq().aE(x)}return C.cM.gcq().aE(w)},
hgM(d){var x,w,v=C.cw.aE(d)
try{x=C.c0.c4(0,F.a7t.b6H(v,!1))
return x}catch(w){x=C.c0.c4(0,v)
return x}},
fza(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hgM(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c0.c4(0,C.cw.aE(x))
return v}catch(u){return x}}return null},
hgN(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hgO(){var x,w=$.oX(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aF(32)]
return"DS"+C.d.fL(v)},
aVS(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aVS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aVS)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVS,w)},
c1U(d,e){return B.hgP(d,e)},
hgP(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c1U=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c1U)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1U,w)},
aVV(d){var x=0,w=A.j(y.y),v,u,t
var $async$aVV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVS(d),$async$aVV)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVV,w)},
aVU(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aVU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hgO()
r=C.a.i(f)
t=C.dB.aE(s)
x=3
return A.b(B.c1U(u,A.D(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcq().aE(t),"usesRemaining",999999,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aVU)
case 3:if(!h){v=null
x=1
break}v=new A.YS("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVU,w)},
aVT(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aVT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aVS(o),$async$aVT)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.c0.c4(0,C.cw.aE(u))
if(J.iJ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a5(n)
$.ak.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aVT,w)},
c1V(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c1V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.bxw("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c1V)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1V,w)},
aVW(d){var x=0,w=A.j(y.h),v,u,t
var $async$aVW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GJ(),$async$aVW)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Y(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVW,w)},
amf(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amf)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aVW(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amf,w)},
amd(d,e){var x=0,w=A.j(y.H)
var $async$amd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amd)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amd)
case 2:return A.h(null,w)}})
return A.i($async$amd,w)},
a4x(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4x=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4x)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GJ(),$async$a4x)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dd(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.D(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4w(s),$async$a4x)
case 5:x=6
return A.b(B.amd(f,u),$async$a4x)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4x,w)},
a4y(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4y=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4y)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GJ(),$async$a4y)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.Y(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.m(0,"schoolName",q)
p.m(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.m(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.m(0,"loginCode",q)
s.W(u,t)
s.m(u,o,p)
x=8
return A.b(B.amd(g,q),$async$a4y)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4w(u),$async$a4y)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4y,w)},
a4z(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4z)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GJ(),$async$a4z)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aVP(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aw(),$async$a4z)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.D(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.N(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4z)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4z,w)},
c1W(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c1W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c1W)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aC(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.Y(q,y.N,y.z)
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
return A.i($async$c1W,w)},
GK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c1W(d),$async$GK)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aVW(t),$async$GK)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ame(d),$async$GK)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aVP(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ame(d),$async$GK)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GK,w)},
ame(d){var x=0,w=A.j(y.H)
var $async$ame=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$ame)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ame)
case 2:return A.h(null,w)}})
return A.i($async$ame,w)},
aVX(){var x,w=$.oX(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aF(32)]
return C.d.fL(v)},
a4A(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fzb(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c1Z(d){return B.hgR(d)},
hgR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c1Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4A(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c1Z)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1Z,w)},
amh(d,e){return B.hgS(d,e)},
hgS(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amh=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4A(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$amh)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amh,w)},
c20(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c20=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4A(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amh(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c20)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c20,w)},
c2_(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4A(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amh(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2_,w)},
c21(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c21=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4A(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amh(u,A.D(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c21,w)},
c22(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c22=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fzb(d)){v=null
x=1
break}x=3
return A.b(B.c1Z(d),$async$c22)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a6(u)
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
return A.i($async$c22,w)},
a4H(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4H=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4H)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a4H)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.Y(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.Q(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4H,w)},
aml(d){return B.hh6(d)},
hh6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aml=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$aml)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.D(["signals",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$aml)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.ak.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aml,w)},
amm(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cT(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$amm)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4H(),$async$amm)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.c0.c4(0,C.cw.aE(q))
if(J.iJ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.Y(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.N(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.aml(s),$async$amm)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a5(i)
$.ak.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amm,w)},
amo(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bZ(),$async$amo)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4H(),$async$amo)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.Y(s,r,q),r,q)
r=C.dB.aE(C.a.i(e))
q.m(0,"answer",C.cM.gcq().aE(r))
q.m(0,"answerAt",new A.N(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.aml(u),$async$amo)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amo,w)},
amn(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$amn)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4H(),$async$amn)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.c0.c4(0,C.cw.aE(u))
v=r
x=1
break}catch(n){t=A.a5(n)
$.ak.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amn,w)},
alo(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alo=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q1)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alo)
case 3:r=g
u=4
x=7
return A.b(r.hk(C.fR),$async$alo)
case 7:q=g
o=q
o=o==null?null:J.f7(J.xE(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.p()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$alo,w)},
hKe(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fm6(d){return B.hKg(d)},
hKg(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fm6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eL().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Jc(d,3600),$async$fm6)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fm6,w)},
BC(d,e,f,g,h,i){var x=null
return B.hKd(d,e,f,g,h,i)},
hKd(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BC=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fOC(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fzd(r),$async$BC)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fm6(o),$async$BC)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4B(r),$async$BC)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIy)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JX(A.a([],g))
x=15
return A.b(d.eK(0,A.arl("GET",A.cp(n,0,null))).cJ(0,C.Dk),$async$BC)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4B(r),$async$BC)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ix(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BC)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aVZ(r,k),$async$BC)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BC)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.SL(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a5(a4)
$.ak.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4B(r),$async$BC)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BC,w)},
aMu(d){return B.hKf(d)},
hKf(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eL().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMu)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMu,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[209]
H=c[101]
P=c[190]
E=c[181]
G=c[83]
Q=c[154]
R=c[102]
S=c[188]
I=c[214]
K=c[220]
B=a.updateHolder(c[21],B)
D=c[218]
T=c[153]
L=c[171]
U=c[62]
V=c[221]
W=c[68]
X=c[53]
M=c[82]
Y=c[219]
N=c[112]
B.ccV.prototype={
azJ(d,e){return this.czu(d,e)},
czu(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$azJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.D(["mandatory",A.Q(t,t),"optional",A.a([A.D(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.k1(A.cs(t)))
t=J.k(u)
v=B.hlB(C.cM.gcq().aE(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$azJ,w)}}
B.b05.prototype={
brs(d){var x=this,w=x.w
w.onclose=A.h7(new B.ccQ(x))
w.onopen=A.h7(new B.ccR(x))
w.onmessage=A.h7(new B.ccS(x))
w.onbufferedamountlow=A.h7(new B.ccT(x))},
gdh(d){return this.x},
adW(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$adW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dx()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fAQ(J.f7(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$adW)
case 8:v=t.fAQ(s.akC(f,0,null))
x=1
break
case 7:case 4:v=B.fAQ(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adW,w)}}
B.b06.prototype={
brt(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.ccW(x)))
w.addEventListener("icecandidate",A.h7(new B.ccX(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.ccY(x)))
w.onicegatheringstatechange=A.h7(new B.ccZ(x))
w.addEventListener("signalingstatechange",A.h7(new B.cd_(x)))
if(!$.fHy())w.addEventListener("connectionstatechange",A.h7(new B.cd0(x)))
w.addEventListener("negotiationneeded",A.h7(new B.cd1(x)))
w.addEventListener("track",A.h7(new B.cd2(x)))},
ahw(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k1(A.cs(A.Q(y.N,y.z)))),y.aQ),$async$ahw)
case 3:t=f
v=new B.UX(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahw,w)},
a4B(d,e){return this.bh7(0,e)},
bh7(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4B)
case 2:return A.h(null,w)}})
return A.i($async$a4B,w)},
a4J(d,e){return this.bhn(0,e)},
bhn(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4J)
case 2:return A.h(null,w)}})
return A.i($async$a4J,w)},
alj(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.UX(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alj,w)},
bw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f2(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bw,w)}}
B.a9D.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WP.prototype={
S(){return new B.aw_()},
gd5(){return this.c}}
B.aw_.prototype={
Z(){this.a0()
this.aaO()},
aaO(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVQ(u.e,u.c),$async$aaO)
case 2:t=e
if(v.c!=null)v.n(new B.cWg(v,t))
return A.h(null,w)}})
return A.i($async$aaO,w)},
Ok(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ok=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ama(t.e,t.c,!1),$async$Ok)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ejT)
x=1
break}x=4
return A.b(B.a4v(u.a.c,"individual"),$async$Ok)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3a(A.eO(new B.cWd(u),!1,null,y.H)),$async$Ok)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ok,w)},
HC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f5M(o),$async$HC)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4z(o.e,r,s,q),$async$HC)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.egY)
x=1
break}x=5
return A.b(B.a4v(u.a.c,"member"),$async$HC)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3a(A.eO(new B.cWf(u),!1,null,y.H)),$async$HC)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HC,w)},
wR(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4u(t.e,o,t.f,t.r,t.w,s),$async$wR)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4v(u.a.c,"org_owner"),$async$wR)
case 4:x=5
return A.b(B.amf(u.a.c),$async$wR)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f6g(o),$async$wR)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4x(s,t,o,q.c),$async$wR)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.egV)
x=1
break}x=10
return A.b(B.amf(u.a.c),$async$wR)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3a(A.eO(new B.cWe(u),!1,null,y.H)),$async$wR)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wR,w)},
B(d){var x,w,v,u=this,t=null,s=A.K(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fz8(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.a9(0,C.G,C.az.j(0.35),C.fx,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eBG,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h_,t,t,t),C.aA,D.eT6,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bHe,C.n),t,t,t,t,C.el,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lh(new B.cWi(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aP:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aa4(C.eG,C.asO,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc4K(),t),C.aa],v))
p.push(new B.aa4(C.o5,C.Zi,"Team Member","Sign in with your organization access code + password",u.gc5z(),t))
p.push(C.aa)
p.push(new B.aa4(C.afU,C.a_D,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc55(),t))
return A.cg(t,r,A.br(!0,A.cf(A.u(p,C.ah,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adl,t,t,C.af),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aa4.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.er(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a_,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.C(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.or,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.K(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A1,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayt.prototype={}
B.aBz.prototype={}
B.j8.prototype={
lY(d){var x=this.b,w=C.a.nY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
galY(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.Q(y.N,y.z)
v.m(0,"id",w.a)
v.m(0,"name",w.b)
v.m(0,"mime",w.c)
v.m(0,"sizeBytes",w.d)
v.m(0,"createdAt",w.e)
x=w.f
if(x!=null&&C.a.i(x).length!==0)v.m(0,"note",x)
x=w.r
if(x!=null&&C.a.i(x).length!==0)v.m(0,"fromSender",x)
x=w.w
if(x!=null&&C.a.i(x).length!==0)v.m(0,"shortCode",x)
x=w.x
if(x!=null&&C.a.i(x).length!==0)v.m(0,"stashToken",x)
return v},
b6c(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cy_(d){return this.b6c(null,d)},
azu(d){return this.b6c(d,null)}}
B.SF.prototype={
S(){return new B.azQ(new A.cn(null,y.A))},
gd5(){return this.c}}
B.azQ.prototype={
Z(){this.a0()
this.aaP()},
aaP(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ai(u.a.c),$async$aaP)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dFE(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaP,w)},
aaQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$aaQ)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.ekN)
case 1:return A.h(v,w)}})
return A.i($async$aaQ,w)},
Xf(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alo(s.d,4),$async$Xf)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_my_code_"+m+".png"),$async$Xf)
case 8:q=e
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xf,w)},
aeo(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7u("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeo,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===C.H,n=o?C.iT:C.oO,m=o?C.c:C.M,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mf
else if(q.e==null)x=A.as(new A.B(C.el,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.az.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZI,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a_,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.acW,p,p,1/0)
v=A.m(20)
u=A.a([new A.a9(0,C.G,C.az.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cf(A.u(A.a([x,C.m8,w,C.ka,new A.ep(A.p(p,A.pi(p,p,!1,B.hgI(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ka,A.A(A.a([A.C(A.ex(M.Ah,C.R3,q.gbZ_(),p),1),C.aw,A.C(A.dj(C.xh,C.a4u,q.gbZ0(),A.bk(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a4(1/0,p,A.ex(L.Yb,D.ePl,q.gcjE(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JX,p,p,C.af)
x=r}return A.cg(l,n,x,p,!1,!1,p,p)}}
B.SJ.prototype={
S(){return new B.azT(new A.ao(C.aq,$.at()),A.k5(!0,null,!0,!0,null,null,!1))}}
B.azT.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GI(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
Xg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GI(u.d.a.a)
if(t==null){u.n(new B.dGN(u))
x=1
break}u.n(new B.dGO(u))
s=u.a
r=s.c
x=3
return A.b(B.a4t(s.d,new B.dGP(u),t,r),$async$Xg)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dGQ(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xg,w)},
a_j(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_j=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.n(new B.dGR(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.qN(r.a.c,q),$async$a_j)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dGS(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aeU(p,m,l,j,k),$async$a_j)
case 8:o=e
if(r.c!=null)r.n(new B.dGT(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a5(h)
if(r.c!=null)r.n(new B.dGU(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dGV(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_j,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===C.H,i=j?D.a9B:D.a7Y,h=j?D.aaZ:C.c,g=j?C.aN:C.M,f=j?C.bP:C.ak,e=j?D.a8U:C.aJ
i=[i,e,h,g,f,j?C.eT:C.bU]
x=A.K(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.B,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.B,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bwi,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aE,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.C(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.ft,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZI,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uJ(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bez()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.JQ,k,k,"",k,!0,new A.b2(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b2(4,A.m(18),new A.ay(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ad,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dGW(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JB(l.a.d,4)
m=A.z(new A.I(m,new B.dGX(x,new A.aCL(i)),m.$ti.k("I<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.B(C.nj,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a1,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.efw)
else q.push(A.V(C.kW,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.C(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aS,A.de(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b8,new A.o(u,k,s,t,k,k,C.n),C.i9,k,k,k,C.eF,k,k,k)],r))}e=A.C(A.cf(A.u(e,C.ah,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bhx,k,k,C.af),1)
u=l.f?k:l.gcjF()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(L.Yb,D.eQf,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.c9,k,new A.b5(q,C.W),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZ1()
t=A.bk(C.az,k,k,0,C.c,k,C.mu,k,new A.b5(A.m(16),C.W),k,k,k)
return A.cg(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mT(new B.dGY(),A.u(A.a([e,new A.B(D.bh2,A.u(A.a([s,C.P,i,C.aa,A.bJ(l.f?C.qN:D.eOL,u,t)],r),C.ah,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UB,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bez.prototype={
nU(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f4(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h1(C.bn,v.length),C.aL)}}
B.SG.prototype={
S(){return new B.azR()}}
B.azR.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,C.aY,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.bb(x,C.aY,C.aL),v)
u.f!==$&&A.aO()
u.f=new A.ao(C.aq,v)},
p(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.at()
v.O$=0
v=w.e
v===$&&A.c()
v.R$=x
v.O$=0
v=w.f
v===$&&A.c()
v.R$=x
v.O$=0
w.a2()},
aaR(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aaR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dFF(r))
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
return A.b(B.a4y(p,m,n,o,C.a.i(l).length===0?null:l),$async$aaR)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.eko)
s=[1]
x=4
break}p.F(y.q).f.P(D.ej1)
p=r.c
p.toString
A.a7(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dFG(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aaR,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax.a===C.H?C.iT:C.oO,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eHX,s,s,s,1,s,!0),p=A.p(s,D.baA,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.EL,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bD_,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCV,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bD9,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gbZ2()
u=A.bk(C.az,s,s,s,s,C.fV,s,s,s,s,s,s)
return A.cg(q,r,A.cf(A.u(A.a([p,C.d1,o,C.aa,x,C.aa,w,C.m8,A.bJ(t.r?C.qN:C.aL2,v,u)],y.p),C.ah,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.af),s,!1,!1,s,s)}}
B.a9k.prototype={}
B.bqN.prototype={
a1U(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a1U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gH(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akB()))
x=3
return A.b(B.Pb(t,s),$async$a1U)
case 3:if(!e){$.ak.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a1U,w)},
gd5(){return this.a}}
B.Lu.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WO.prototype={
S(){return new B.avZ(new A.ao(C.aq,$.at()),A.k5(!0,null,!0,!0,null,null,!1))}}
B.avZ.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cWc(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZ8(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZN(d),u=x.a.c,t=u?C.hm:v.a[2],s=u?C.c:v.a[3],r=u?C.aP:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.H(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.a9(0,C.G,C.az.j(u?0.25:0.12),C.fx,32)],n),l=A.p(w,T.aiu,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.a9(0,C.G,C.az.j(0.4),C.cv,16)],n),C.ajg,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uJ(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqs()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.Dx,w,w,"",w,!0,new A.b2(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b2(4,A.m(16),D.aPX),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ad,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cWa(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lz,w,w,w,w)
f=f[1]
f=A.C(A.dU(C.mU,new B.cWb(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.c9,w,new A.b5(A.m(14),C.W),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.a9(0,C.G,C.az.j(0.35),C.cC,12)],n)
g=y.p
return A.eB(w,C.K,new A.d3(Q.I6,A.bQ(new A.B(C.wt,A.u(A.a([l,C.aS,k,C.P,j,C.dW,i,C.dW,A.A(A.a([f,C.aw,A.C(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dMu,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZ7(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LG,C.n),C.b6),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b6),w),w,w,w,C.JZ,C.cZ,w,w,w)}}
B.bqs.prototype={
nU(d,e){return e.ahr(e.a.toUpperCase())}}
B.SH.prototype={
S(){return new B.azS(A.a([],y.r),A.aY(y.N))},
gd5(){return this.c}}
B.azS.prototype={
Z(){var x=this
x.a0()
x.rN()
x.w=A.dE(C.iV,new B.dGL(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SQ()
this.a2()},
Zc(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lt(u.a.c),$async$Zc)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zs(u.a.c),$async$Zc)
case 4:u.n(new s.dG8(u,e))
u.hL("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zc,w)},
rN(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lt(u.a.c),$async$rN)
case 3:t=e
x=4
return A.b(B.zs(u.a.c),$async$rN)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dG9(u,s))
if(t>0)u.hL("Received "+A.t(t)+" file(s) via My Code.")
u.LP(u.d)
B.Ai(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rN,w)},
LP(d){return this.bvh(d)},
bvh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4D(r,u.a.c),$async$LP)
case 8:p=f
if(u.c==null){x=1
break}new B.dFI(u,r,p).$0()
u.c.e2()
case 7:if(!(C.a.a_(r.c,"video/")||r.lY(D.m0))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SO(r,u.a.c),$async$LP)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zs(u.a.c),$async$LP)
case 12:u.n(new o.dFJ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LP,w)},
Ma(d){return this.bBh(d)},
bBh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ma=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4D(d,u.a.c),$async$Ma)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dFO(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$Ma)
case 6:u.hL("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$Ma)
case 7:u.hL("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ma,w)},
hL(d){var x=null,w=this.c
if(w==null)return
w.F(y.q).f.P(A.b_(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rO(d,e){return this.ctJ(d,e)},
ctJ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGz(r,e))
u=3
x=6
return A.b(d.$0(),$async$rO)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dGA(r))
$.eI.lT()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rO,w)},
gaQ9(){var x=this.a
return x.f||x.r||x.w},
GE(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQ9()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c1S(s,n,r,q,o,t),$async$GE)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hL("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.ffB(o,u.a.c),$async$GE)
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
return A.b(B.BE(s,o,r,q,n,t),$async$GE)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GE,w)},
Yi(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amf(u.a.c),$async$Yi)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hL("No organization portal found.")
x=1
break}t=J.a6(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a7(t,!1).ct(A.eO(new B.dG5(u,r,q),!1,null,y.H)),$async$Yi)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yi,w)},
Zn(d){return this.cdt(d)},
cds(){return this.Zn(1)},
cdt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQ9()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amc(u.a.c),$async$Zn)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zn,w)},
a8V(d,e,f){return this.bRk(d,e,f)},
bRk(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a8V=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL(e)
x=1
break}x=3
return A.b(u.rO(new B.dG2(u,d,null,e,f),"Uploading\u2026"),$async$a8V)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8V,w)},
bvq(){B.h1O(!1,new B.dFM(this))
return},
cih(){this.n(new B.dGd(this))},
auj(){var x=0,w=A.j(y.H),v=this
var $async$auj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvq()
return A.h(null,w)}})
return A.i($async$auj,w)},
a8R(){var x=0,w=A.j(y.H),v=this
var $async$a8R=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dFS(v),"Importing\u2026"),$async$a8R)
case 2:return A.h(null,w)}})
return A.i($async$a8R,w)},
Qi(d){return this.ctb(d)},
ctb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lY(D.m0)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ct(A.eO(new B.dGw(u,d),!1,null,y.H)),$async$Qi)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lY(D.NA)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ct(A.eO(new B.dGx(u,d),!1,null,y.H)),$async$Qi)
case 8:x=1
break
case 7:x=u.bS1(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ct(A.eO(new B.dGy(u,d),!1,null,y.H)),$async$Qi)
case 11:x=1
break
case 10:u.hL("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qi,w)},
bS1(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.coc,C.a.aV(x,w+1).toLowerCase())},
ac8(d){return this.c4O(d)},
c4O(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ac8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lY(D.m0)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ct(A.eO(new B.dG3(u,d),!1,null,y.H)),$async$ac8)
case 5:x=1
break
case 4:u.n(new B.dG4(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ac8,w)},
PH(d){return this.cl4(d)},
cl4(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$PH)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dGp(u,d),"Preparing QR\u2026"),$async$PH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PH,w)},
aeN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aeN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dGq(),A.R(t).k("I<1,n>")).fF(0)}t=u.d
s=A.R(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dGr(q),s),s.k("E.E"))
if(r.length===0){u.hL("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PH(r),$async$aeN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeN,w)},
aeG(d){return this.ckE(d)},
ckE(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZN(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,new B.dGj(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeG)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qi(d)
break
case"qr":u.PH(A.a([d],y.r))
break
case"send_my_code":u.c5o(A.a([d],y.r))
break
case"save":u.ae2(d)
break
case"delete":u.Hn(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeG,w)},
Vk(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dFP(),A.R(t).k("I<1,n>")).fF(0)}t=u.d
s=A.R(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dFQ(q),s),s.k("E.E"))
if(r.length===0){u.hL("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$Vk)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dFR(u,r),"Preparing file\u2026"),$async$Vk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vk,w)},
adf(d){return this.cbZ(d)},
cbZ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h2v(d,!1),$async$adf)
case 3:s=f
r=s==null
q=B.a4A(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hL("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adf,w)},
ace(){var x=0,w=A.j(y.H),v=this,u
var $async$ace=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fnb(u,v.a.c),$async$ace)
case 2:return A.h(null,w)}})
return A.i($async$ace,w)},
bvp(){B.h1O(!1,new B.dFL(this,null))
return},
HB(d,e){return this.c5p(d,e)},
aVC(d){return this.HB(null,d)},
c5o(d){return this.HB(d,null)},
c5p(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.R(p).k("a3<1>")
k=A.z(new A.a3(p,new B.dG6(s),o),o.k("E.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wd.c2().ajY(!0,C.Wk,!1),$async$HB)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.rO(new B.dG7(l,s,r),"Preparing\u2026"),$async$HB)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a5(j)
$.ak.$1("[doc share send my code pick] "+A.t(q))
s.hL("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hL("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.byA(p,l,e,s.a.c),$async$HB)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HB,w)},
GT(d){return this.bR7(d)},
bR7(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hgH(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aVC(t),$async$GT)
case 8:x=6
break
case 7:u.hL("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ad("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hL("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.rO(new B.dG0(u,d),"Receiving video\u2026"),$async$GT)
case 11:x=1
break
case 10:x=12
return A.b(u.rO(new B.dG1(u,d),"Receiving\u2026"),$async$GT)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GT,w)},
CT(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Bx()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adf(t),$async$CT)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GT(s),$async$CT)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ct(A.eO(new B.dGb(u),!1,null,y.N)),$async$CT)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rN(),$async$CT)
case 10:x=1
break
case 9:x=11
return A.b(u.GT(C.a.i(r)),$async$CT)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CT,w)},
ae2(d){return this.cgT(d)},
cgT(d){var x=0,w=A.j(y.H),v=this
var $async$ae2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dGa(v,d),"Saving\u2026"),$async$ae2)
case 2:return A.h(null,w)}})
return A.i($async$ae2,w)},
Hn(d){return this.bDy(d)},
bDy(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hn)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c1V(t),$async$Hn)
case 6:case 5:s=d.a
x=7
return A.b(B.D4(u.a.c,s),$async$Hn)
case 7:u.r.W(0,s)
x=8
return A.b(u.rN(),$async$Hn)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hn,w)},
aeT(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZN(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,new B.dGv(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aeT)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ace()
break
case"import":u.a8R()
break}case 1:return A.h(v,w)}})
return A.i($async$aeT,w)},
bZ5(d){var x=d.c
if(C.a.a_(x,"video/")||d.lY(D.m0))return C.pa
if(C.a.a_(x,"image/")||d.lY(D.NA))return C.rT
if(C.a.q(x,"pdf"))return E.Lc
return D.agj},
B(d){var x,w,v=this,u=null,t=B.ZN(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EE,u,u,u,new B.dGG(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwO,u,u,u,v.e?u:v.gc56(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcig()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.brd:E.agJ,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y8,u,u,u,v.e?u:v.gbZ6(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nr,u,u,u,v.e?u:v.gaWE(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.byr,u,u,u,v.e?u:new B.dGH(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lh(new B.dGI(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.B,0.5,C.w,u,0,A.a([p.j(A.K(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.B,0.5,C.w,u,0,A.a([C.az.j(A.K(d).ax.a===C.H?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mO(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.C(new B.avW(C.j0,s,!0,t,w?u:v.gcl5(),u),1)
x.push(new A.B(D.bfP,A.mT(new B.dGJ(),A.A(A.a([s,C.aw,A.C(new B.avW(C.ut,"Export",!1,t,w?u:v.gbGY(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ib,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9h(t,v.e?u:v.gaWE(),u)
else s=A.jS(!0,u,u,new B.dGK(v,t),s,u,D.bfH,u,u,!1,!1)
x.push(A.C(s,1))
return A.cg(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.avW.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.az,t,t,0,C.c,t,C.ub,t,new A.b5(s,C.W),t,t,t)
return A.dj(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ub,t,new A.b5(s,C.W),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ex(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eB,t,t,t),u.r,v)}}
B.b9h.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mT(new B.cW8(),new A.B(E.Vx,A.u(A.a([A.mT(new B.cW9(),A.p(x,A.V(C.wN,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aE,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ic,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dj(C.nr,D.eTo,this.d,A.bk(C.az,x,x,x,C.c,x,C.Vs,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zq,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9E.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lY(D.m0))p=D.cTy
else{p=C.a.a_(p,"image/")||i.lY(D.NA)
n=y.O
p=p?A.a([C.cW,C.az],n):A.a([C.aK.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aE,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.galY()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lY(D.m0))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.C(A.u(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fv,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lY(D.m0)))l.push(A.fwW(C.az,!1,j,j,j,!1,j,j,new B.cWv(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.no,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mT(new B.cWw(),new A.B(C.e3,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.B(C.UY,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ay(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WQ.prototype={
S(){return new B.aw0()},
gd5(){return this.c}}
B.aw0.prototype={
Z(){this.a0()
this.wJ()},
p(){B.hgW(this.e)
this.a2()},
wJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qN(o.c,o.d),$async$wJ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aD.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hgZ(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hgY(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWs(s))
x=1
break}s.n(new B.cWt(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a5(l)
if(s.c==null){x=1
break}s.n(new B.cWu(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wJ,w)},
a_i(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qN(t.c,t.d),$async$a_i)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ehv)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aeU(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_i)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_i,w)},
bR0(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k6(u,C.B,v,new B.cWq(w,t),C.fP,C.dp,!0,v,v,v,v)
else if(t!=null&&!C.aD.gah(t))x=A.fC(t,C.B,v,new B.cWr(w),C.fP,C.dp,!0,v,!1,v,v)
else return C.bF
return A.tG(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZN(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ai,u,u,u,v.gb_l(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cr
else{q=v.r
if(q!=null)t=new A.B(C.el,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.B(C.el,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aS,A.dj(C.Ai,D.eDO,v.gb_l(),A.bk(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bR0()}return A.cg(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WN.prototype={
S(){return new B.avY(A.afF(),C.bt,C.bt)},
gd5(){return this.c}}
B.avY.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fk(w,A.a2(w).k("fk<1>")).hX(new B.cW5(v))
x.gcGB().hX(new B.cW6(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fk(x,A.a2(x).k("fk<1>"))}if(x==null)x=C.aVL
x.hX(new B.cW7(v))
v.wJ()},
wJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qN(p.c,p.d),$async$wJ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cVZ(s))
x=1
break}x=8
return A.b(s.d.AW(0,new A.a0W(r,s.a.d.c)),$async$wJ)
case 8:if(s.c==null){x=1
break}s.n(new B.cW_(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
if(s.c==null){x=1
break}s.n(new B.cW0(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wJ,w)},
Xh(){var x=0,w=A.j(y.H),v=this,u
var $async$Xh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$Xh)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xh)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xh,w)},
aO6(d){var x=d.a
return C.a.aU(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZN(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cr
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bsb,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LG,C.n),o,88,o,o,o,o,o,88)
t=A.mt(C.az,o,o,m,0,new B.cW1(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aO6(p.w)+" / "+p.aO6(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.az,o,o,o,o,D.ee4,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.wZ:C.j_,o,o,o,o,o)
x=A.u(A.a([u,C.ka,t,x,C.d1,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZ9(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cg(v,w,A.as(new A.B(C.uf,x,o),o,o,o),o,!1,!1,o,o)}}
B.NF.prototype={
S(){return new B.aw3()},
gd5(){return this.c}}
B.aw3.prototype={
Z(){this.a0()
this.NF()},
NF(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NF=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fz9(o.c,o.d,new B.cWJ(s)),$async$NF)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cWK(s))
x=1
break}s.e=r
q=O.hCU(r)
if(q==null){s.n(new B.cWL(s))
x=1
break}s.d=q
q.aJ(0,s.gaVr())
x=8
return A.b(q.hW(0).cJ(0,C.rA),$async$NF)
case 8:if(s.c==null){x=1
break}s.n(new B.cWM(s))
x=9
return A.b(q.p5(0),$async$NF)
case 9:q.rp(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
if(s.c==null){x=1
break}s.n(new B.cWN(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NF,w)},
c3s(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cWO(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BF(0,x.gaVr())
w=x.d
if(w!=null)w.p()
B.hMl(x.e)
x.a2()},
aaU(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVY(u.c,u.d),$async$aaU)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aaU,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZN(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aF(t,t,t,t,C.ob,t,t,t,u.gbZ3(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i5(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cr
else{q=u.r
if(q!=null)s=new A.B(C.el,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.af9(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fT(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.z_(s,t),A.aJ(t,A.Fj(A.p(t,A.V(q?H.wZ:C.j_,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b8,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cWQ(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cg(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WS.prototype={
S(){return new B.aw1(new A.cn(null,y.A))}}
B.aw1.prototype={
gctt(){var x,w,v=this.a
if(v.e!==D.OP)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gct9(){var x,w,v=this.a
if(v.e!==D.xO)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gctt()
if(x!=null){v.OJ(x)
v.e=A.dE(R.Dn,new B.cWF(v,x))}w=v.gct9()
if(w!=null){v.OI(w)
v.f=A.dE(C.fZ,new B.cWG(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OI(d){return this.cag(d)},
cag(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amk(d),$async$OI)
case 3:t=f
x=4
return A.b(B.c2d(d),$async$OI)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWx(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
OJ(d){return this.cah(d)},
cah(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fns(d),$async$OJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwC(t),$async$OJ)
case 4:if(u.c==null){x=1
break}u.n(new B.cWy(u))
u.c.F(y.q).f.P(D.aI9)
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
gbVS(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZ4(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_3(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Bx()){t=u.c
if(t!=null)t.F(y.q).f.P(D.eky)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ct(A.eO(new B.cWz(),!1,null,y.N)),$async$a_3)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwC(s),$async$a_3)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aI9)
case 1:return A.h(v,w)}})
return A.i($async$a_3,w)},
a6R(d){return this.bBi(d)},
bBi(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aG(t,", "))),$async$a6R)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b_(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
aaS(d){return this.bB2(d)},
bB2(d){var x=0,w=A.j(y.H),v=this
var $async$aaS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$aaS)
case 2:if(d.e!=null)d.F(y.q).f.P(D.ehY)
return A.h(null,w)}})
return A.i($async$aaS,w)},
ZZ(d){return this.cgV(d)},
cgV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ZZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alo(s.d,4),$async$ZZ)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_doc_share_qr.png"),$async$ZZ)
case 8:q=f
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a5(n)
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ZZ,w)},
gaRb(){var x,w=this.a
if(w.e!==D.FM)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6O(d){return this.bBb(d)},
bBb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRb()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6O)
case 3:if(d.e!=null)d.F(y.q).f.P(D.ejy)
case 1:return A.h(v,w)}})
return A.i($async$a6O,w)},
aaT(){var x=0,w=A.j(y.H),v=this,u
var $async$aaT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SQ(),$async$aaT)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$aaT,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZN(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FM&&i!==D.OP&&i!==D.xO
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FM||t===D.OP||t===D.xO?l:A.aF(l,l,l,l,C.kZ,l,l,l,m.gaTK(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gbVS(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FM){t=C.az.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mv,l,l,l)],p))}q.push(C.aS)
q.push(A.d(m.gbZ4(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bC2,D.eM9,new B.cWA(m,d),l)],p))}if(m.a.e===D.FM&&m.gaRb()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a1,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.byL,D.eJc,new B.cWB(m,d),l)],p))
if(m.a.e===D.xO){x=(m.w?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cu:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mv,l,l,l)],p))}if(m.a.e===D.OP){x=(m.r?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cu:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mv,l,l,l),C.aa,A.dj(D.buF,D.eP3,m.gchi(),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.cg(v,w,new A.B(C.a8,A.u(A.a([A.C(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.A(A.a([A.C(A.ex(M.Ah,C.R3,new B.cWC(m,d),l),1),C.aw,A.C(A.dj(C.xh,C.a4u,new B.cWD(m,d),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a4(1/0,l,A.bJ(C.yi,m.gaTK(),A.bk(C.aK,l,l,l,l,C.fV,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWE(),y.C)}}
B.a9C.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cf(A.u(A.a([w,C.aS,A.p(x,A.pi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.af)
return A.ei(A.a([A.bJ(C.BO,new B.cVY(d),x)],u),x,x,C.mi,v,x,x,x,x,D.eCQ,x)}}
B.WM.prototype={
S(){return new B.avX(A.y7(C.w9,C.n1,C.t3))}}
B.avX.prototype={
p(){this.d.p()
this.a2()},
at2(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).K(t)
return}}},
B(d){var x=null
return A.cg(A.eH(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eJC,x,x,x,1,x,!0),C.x,A.y6(this.d,C.bM,this.gat1()),x,!1,!1,x,x)}}
B.WT.prototype={
S(){return new B.aw2(A.y7(C.w9,C.n1,C.t3))},
gd5(){return this.c}}
B.aw2.prototype={
bS3(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acB(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q8("text/plain"),$async$acB)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.eks)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acB,w)},
a7B(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h2v(p,!0),$async$a7B)
case 3:t=e
p=t==null
s=B.a4A(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.eh4)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7B,w)},
p(){this.d.p()
this.a2()},
at2(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bS3(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahB,v,v,v,w.gbGw(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yf,v,v,v,w.gc7H(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rR:P.KW,v,v,v,v,v),v,v,v,new B.cWI(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.ePP,v,v,v,1,v,!0)
u=A.y6(w.d,C.bM,w.gat1())
x=A.m(20)
return A.cg(t,C.x,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dQV],s),v),v,!1,!1,v,v)}}
B.b9i.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nW
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nW:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.B(C.VD,A.A(A.a([u,C.bd,A.C(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.em,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a6U.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mx.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UW.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mw.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dy.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.ccU.prototype={}
B.Dx.prototype={}
B.a6T.prototype={}
B.aqw.prototype={}
B.UX.prototype={}
var z=a.updateTypes(["au<~>()","S(j8)","n(j8)","SH(Z)","~()","WP(Z)","G(G,j8)","NF(Z)","~(lC)","cr(Dx)","au<j8?>(@)","SF(Z)","SJ(Z)","B(j8)","j8(@)","a0<n,@>(j8)","WO(Z)","SG(Z)","WQ(Z)","WN(Z)","WS(Z)","a9C(Z)","al<j8>()","WT(Z)","a9E(Z,G)","WM(Z)","a0<n,aC>(j8)","cr(UW)","cr(a6T)","au<cr>(Dx)"])
B.ccQ.prototype={
$1(d){var x=this.a
x.x=D.aFJ
x.y.G(0,D.aFJ)},
$S:68}
B.ccR.prototype={
$1(d){var x=this.a
x.x=D.aFI
x.y.G(0,D.aFI)},
$S:68}
B.ccS.prototype={
$1(d){var x=this.a
x.adW(A.aLe(d.data)).bA(new B.ccP(x),y.b)},
$S:68}
B.ccP.prototype={
$1(d){var x=this.a
x.z.G(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ccT.prototype={
$1(d){},
$S:68}
B.ccW.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hlA(d.channel))},
$S:15}
B.ccX.prototype={
$1(d){},
$S:15}
B.ccY.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hDS(w.iceConnectionState)
x.cx=w
if($.fHy())switch(w.a){case 0:x.cy=D.aFO
break
case 1:x.cy=D.aFP
break
case 3:x.cy=D.aFQ
break
case 5:x.cy=D.aFM
break
case 6:x.cy=D.aFN
break
case 7:x.cy=D.a2d
break
default:break}},
$S:142}
B.ccZ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hDT(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.cd_.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hNO(w.signalingState)},
$S:142}
B.cd0.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hM7(w.connectionState)},
$S:142}
B.cd1.prototype={
$1(d){},
$S:142}
B.cd2.prototype={
$1(d){},
$S:15}
B.f2x.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wa.q(x.objectStoreNames,"blobs")
if(!w)C.w6.Ja(x,"blobs")},
$S:182}
B.fn_.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uH.f1(this.b)
$.eI.lT()
this.c.$1(d)},
$S:429}
B.fn1.prototype={
$1(d){return this.a.$1(B.huf(this.b,this.c))},
$S:31}
B.fn0.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fmZ.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fne.prototype={
$1(d){var x=this
return B.fTm(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fnf.prototype={
$1(d){var x=this
return B.fTm(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f3Q.prototype={
$1(d){var x=this
return B.c1P(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWg.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWd.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1P(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWf.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1P(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWe.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1P(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWi.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.A(A.a([A.aF(x,x,x,x,D.bth,x,x,x,new B.cWh(d),x,x,x,x,x,x),A.C(A.Dj(D.Nm,!0,x,C.Xj,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nm,x,g,C.adE,0,e,f)},
$C:"$4",
$R:4,
$S:352}
B.cWh.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f5P.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.en,y.o).w,t=this.a,s=t?C.hm:C.c,r=A.m(28),q=A.p(v,D.baT,C.h,v,v,D.aRy,v,v,v,v,D.adv,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b2(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxm,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.B(new A.L(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.B(C.zE,A.u(A.a([o,C.aa,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b2(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahP,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bv,A.A(A.a([A.C(A.dU(C.de,new B.f5N(d),v),1),C.aw,A.C(A.bJ(D.eIf,new B.f5O(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JG,v,v,v,v),v)},
$S:60}
B.f5N.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f5O.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eic)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayt(v,x))},
$S:0}
B.f6i.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.en,y.o).w,u=x.a,t=u?C.hm:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.B(new A.L(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.baJ,C.h,w,w,D.aSU,w,w,w,w,D.adv,w,w,1/0),new A.B(C.zE,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fDY(u,"Organization name",C.E0,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fDY(u,"Access code",C.mB,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fDY(u,"Member password",N.Ez,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bv,A.bJ(D.ePT,new B.f6h(r,q,p,d),A.bk(C.az,w,w,w,w,C.fV,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JG,w,w,w,w),w)},
$S:60}
B.f6h.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eih)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBz(u,x,w))},
$S:0}
B.c1G.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a6(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cp(j,0,null):s.b.aN(j)
u=4
x=7
return A.b(A.up(p,null).cJ(0,C.UA),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Aj(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a5(h)
$.ak.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c1M.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1N.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c1O.prototype={
$1(d){return d.b},
$S:z+2}
B.c1I.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1J.prototype={
$1(d){return d.b},
$S:z+2}
B.c1H.prototype={
$1(d){return A.Y(y.f.a(d),y.N,y.z)},
$S:12}
B.c1K.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c1L.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fnc.prototype={
$1(d){return new B.SF(this.a,null)},
$S:z+11}
B.fnd.prototype={
$1(d){return new B.SJ(this.a,this.b,this.c,null)},
$S:z+12}
B.dFE.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dGN.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dGO.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dGP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dGM(x,d))},
$S:2}
B.dGM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGQ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGR.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dGS.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dGT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGU.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dGV.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGY.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.dGW.prototype={
$1(d){var x=this.a
return x.f?null:x.Xg()},
$S:2}
B.dGX.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lY(D.NA))s=C.rT
else s=C.a.a_(s,"video/")||d.lY(D.m0)?C.pa:D.agj
x=this.b.a
w=y.p
return new A.B(C.lk,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.C(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.galY(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dFF.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dFG.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c1Q.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:92}
B.c1R.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:92}
B.fnK.prototype={
$2(d,e){return e===this.a},
$S:330}
B.f_L.prototype={
$1(d){return J.k(d)},
$S:17}
B.f41.prototype={
$1(d){var x=this.b
B.hso(C.DN.ga3s(this.a)).bA(x.gcwo(x),y.H)},
$S:114}
B.f42.prototype={
$1(d){return this.a.cZ(0,null)},
$S:114}
B.f43.prototype={
$0(){return null},
$S:11}
B.c24.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f44.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Y(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.N(Date.now(),0,!1).a4().aa():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.j8(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f7W.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f2J.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f2K.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c29.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lY(D.m0)},
$S:z+1}
B.frG.prototype={
$1(d){return new B.WO(this.a,null)},
$S:z+16}
B.cWc.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:8}
B.cWa.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cWb.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGL.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zc()},
$S:14}
B.dG8.prototype={
$0(){var x=J.bzB(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dG9.prototype={
$0(){var x=J.bzB(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFI.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFH(this.b))
if(w>=0){x=x.d
x[w]=x[w].azu(this.c)}},
$S:0}
B.dFH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFJ.prototype={
$0(){var x=J.bzB(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFO.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFN(this.b))
if(w>=0){x=x.d
x[w]=x[w].azu(this.c)}},
$S:0}
B.dFN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGz.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dGA.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dG5.prototype={
$1(d){return new B.SG(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dG2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GE(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SK(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rN(),$async$$0)
case 5:s=J.a6(t)
x=s.gcg(t)?6:7
break
case 6:x=8
return A.b(r.Zn(s.gH(t)),$async$$0)
case 8:case 7:r.hL(s.gah(t)?u.d:u.e+" "+s.gH(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFM.prototype={
$1(d){this.a.a8V(d,"No files selected.","Added")},
$S:429}
B.dGd.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.I(x,new B.dGc(),A.R(x).k("I<1,n>")))},
$S:0}
B.dGc.prototype={
$1(d){return d.a},
$S:z+2}
B.dFS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wd.c2().cIv(C.Wk,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aD.gah(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jd(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a5(j)
$.ak.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hL("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hL("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.amj(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.hL("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rN(),$async$$0)
case 9:o.hL("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dGw.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dGx.prototype={
$1(d){return new B.WQ(this.a.a.c,this.b,null)},
$S:z+18}
B.dGy.prototype={
$1(d){return new B.WN(this.a.a.c,this.b,null)},
$S:z+19}
B.dG3.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dG4.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.G(0,w)},
$S:0}
B.dGp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GE(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4C(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hL("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cds(),$async$$0)
case 5:x=6
return A.b(p.rN(),$async$$0)
case 6:r=A.R(t).k("I<1,n>")
r=new A.I(new A.I(t,new B.dGl(p),r),new B.dGm(),r.k("I<ai.E,n>")).bZ(0,new B.dGn())
q=A.z(r,r.$ti.k("E.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ct(A.eO(new B.dGo(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SQ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGl.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dGk(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dGk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGm.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dGn.prototype={
$1(d){return d.length!==0},
$S:3}
B.dGo.prototype={
$1(d){var x=this.a
return new B.WS(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dGq.prototype={
$1(d){return d.a},
$S:z+2}
B.dGr.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGj.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.as(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kR,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.galY(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lY(D.m0)?C.rV:C.o9
p=!x||p.lY(D.m0)?"Play video":"View"
return A.bQ(A.br(!0,new A.B(C.zA,A.u(A.a([q,o,t,C.aA,B.WR(!1,u,!1,w,p,new B.dGe(d),v),B.WR(!1,u,!1,C.j0,"Share via QR",new B.dGf(d),"Letters/numbers QR code"),B.WR(!1,u,!1,D.Xo,"Send to their Code",new B.dGg(d),"Enter someone else's personal code"),B.WR(!1,u,!1,C.hf,"Download / save",new B.dGh(d),v),C.ar,B.WR(!1,u,!0,C.e4,"Delete",new B.dGi(d),v)],y.p),C.ah,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c2(new A.ay(r,1,C.r,-1),C.W,C.W,C.W),C.kh,v,v,C.n),C.b6)},
$S:528}
B.dGe.prototype={
$0(){A.a7(this.a,!1).K("view")
return null},
$S:0}
B.dGf.prototype={
$0(){A.a7(this.a,!1).K("qr")
return null},
$S:0}
B.dGg.prototype={
$0(){A.a7(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dGh.prototype={
$0(){A.a7(this.a,!1).K("save")
return null},
$S:0}
B.dGi.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
B.dFP.prototype={
$1(d){return d.a},
$S:z+2}
B.dFQ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFR.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4E(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.ES(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oz(s.c,s.f),$async$$0)
case 4:u.hL(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFL.prototype={
$1(d){var x=this.a
x.rO(new B.dFK(x,d,this.b),"Preparing\u2026")},
$S:429}
B.dFK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hL("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SK(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.hL("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byA(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG6.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dG7.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fzc(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.G(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EP(new B.dFX(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hL("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dFY(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dFZ(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dk,new B.dG_()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hL("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rN(),$async$$0)
case 9:s.hL("Received "+q.gH(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFX.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFU(x,d,e))},
$S:133}
B.dFU.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFY.prototype={
$1(d){return new B.a9C(this.a.a,null)},
$S:z+21}
B.dFZ.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dG_.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dG1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GI(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4s(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aVC(B.GI(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amj(new B.dFV(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.fzb(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hL(q)
x=1
break}x=10
return A.b(s.rN(),$async$$0)
case 10:o=J.cB(r)
p=o.eB(r,new B.dFW()).gH(0)
s.hL(p>0?"Received "+p+" video(s).":"Restored "+o.gH(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFV.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFT(x,d,e))},
$S:133}
B.dFT.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFW.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lY(D.m0)},
$S:z+1}
B.dGb.prototype={
$1(d){return new B.WT(this.a.a.c,null)},
$S:z+23}
B.dGa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aVY(u.a.c,v.b),$async$$0)
case 2:t.hL(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGv.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.az.j(0.35)
return A.bQ(A.br(!0,new A.B(C.zA,A.u(A.a([A.as(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kR,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.WR(!0,w,!1,C.mB,"My Code",new B.dGs(d),"Your personal code & QR \u2014 others send docs to you"),B.WR(!1,w,!1,D.Xo,"Send to their Code",new B.dGt(this.a,d),"Enter someone else's 5-digit code + letter"),B.WR(!1,w,!1,S.x6,"Import backup",new B.dGu(d),".ngmydoc file from another device")],y.p),C.ah,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c2(new A.ay(t,1,C.r,-1),C.W,C.W,C.W),C.kh,x,x,C.n),C.b6)},
$S:528}
B.dGs.prototype={
$0(){A.a7(this.a,!1).K("my_code")
return null},
$S:0}
B.dGt.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.bvp()},
$S:0}
B.dGu.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dGI.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.GR(D.Nm,x,C.Xj,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nm).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:688}
B.dGG.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGH.prototype={
$0(){this.a.aeT()
return null},
$S:0}
B.dGJ.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:106}
B.dGK.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9E(e,w,v,this.b,x.e,x.bZ5(w),new B.dGC(x,w),new B.dGD(x,v,w),new B.dGE(x,w),new B.dGF(x,w),null)},
$S:z+24}
B.dGC.prototype={
$0(){this.a.ac8(this.b)
return null},
$S:0}
B.dGD.prototype={
$0(){var x=this.a
return x.n(new B.dGB(x,this.b,this.c))},
$S:0}
B.dGB.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.G(0,w)},
$S:0}
B.dGE.prototype={
$0(){this.a.Ma(this.b)
return null},
$S:0}
B.dGF.prototype={
$0(){this.a.aeG(this.b)
return null},
$S:0}
B.cW8.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:106}
B.cW9.prototype={
$3(d,e,f){return A.e4(C.B,f,e,null,null)},
$S:126}
B.cWw.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.cWv.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cWs.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWt.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWu.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWq.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aD.gah(w))return A.fC(w,C.B,x,new B.cWo(this.a),C.fP,C.dp,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWp(this.a))
return C.bF},
$S:132}
B.cWo.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWm(this.a))
return C.bF},
$S:196}
B.cWm.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWj(x))},
$S:8}
B.cWj.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWp.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWl(x))},
$S:8}
B.cWl.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWr.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWn(this.a))
return C.bF},
$S:196}
B.cWn.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWk(x))},
$S:8}
B.cWk.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cW5.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW4(x,d))},
$S:1726}
B.cW4.prototype={
$0(){return this.a.f=this.b===C.tr},
$S:0}
B.cW6.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW3(x,d))},
$S:8}
B.cW3.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cW7.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW2(x,d))},
$S:8}
B.cW2.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cVZ.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cW_.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cW0.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cW1.prototype={
$1(d){return this.a.d.Le(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cWJ.prototype={
$0(){var x=this.a.a
return B.qN(x.c,x.d)},
$S:1727}
B.cWK.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cWL.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cWM.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cWN.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cWO.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cWQ.prototype={
$0(){var x=this.a
x.n(new B.cWP(x))},
$S:0}
B.cWP.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cWF.prototype={
$1(d){return this.a.OJ(this.b)},
$S:14}
B.cWG.prototype={
$1(d){return this.a.OI(this.b)},
$S:14}
B.cWx.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWy.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWz.prototype={
$1(d){return D.f1W},
$S:z+25}
B.cWE.prototype={
$2(d,e){if(d)B.SQ()},
$S:115}
B.cWA.prototype={
$0(){return this.a.a6R(this.b)},
$S:0}
B.cWB.prototype={
$0(){return this.a.a6O(this.b)},
$S:0}
B.cWC.prototype={
$0(){return this.a.aaS(this.b)},
$S:0}
B.cWD.prototype={
$0(){return this.a.ZZ(this.b)},
$S:0}
B.cVY.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cWI.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cWH(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cWH.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2b.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lY(D.m0)},
$S:z+1}
B.c2c.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.D(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2a.prototype={
$2(d,e){return this.bdb(d,e)},
bdb(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SR(u.c,A.D(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1728}
B.f7z.prototype={
$1(d){if(d===D.a2c&&(this.a.a.a&30)===0)this.a.fA(0)},
$S:z+27}
B.f7A.prototype={
$0(){},
$S:11}
B.f83.prototype={
beJ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eY5(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fOC(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.beJ(d,e)},
$S:701}
B.f82.prototype={
$1(d){var x=this
d.b=new B.f81(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f81.prototype={
$1(d){return this.beI(d)},
beI(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aVZ(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.G(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aC(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.y(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.y(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.eY5(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.cZ(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a5(j)
$.ak.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4B(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.cZ(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aw_.prototype,"gc4K","Ok",0)
x(v,"gc5z","HC",0)
x(v,"gc55","wR",0)
x(v=B.azQ.prototype,"gbZ_","aaQ",0)
x(v,"gbZ0","Xf",0)
x(v,"gcjE","aeo",0)
x(v=B.azT.prototype,"gbZ1","Xg",0)
x(v,"gcjF","a_j",0)
x(B.azR.prototype,"gbZ2","aaR",0)
x(B.avZ.prototype,"gbZ7","bZ8",4)
x(v=B.azS.prototype,"gc56","Yi",0)
x(v,"gcig","cih",4)
x(v,"gaWE","auj",0)
x(v,"gcl5","aeN",0)
x(v,"gbGY","Vk",0)
x(v,"gbZ6","CT",0)
x(B.aw0.prototype,"gb_l","a_i",0)
x(B.avY.prototype,"gbZ9","Xh",0)
x(v=B.aw3.prototype,"gaVr","c3s",4)
x(v,"gbZ3","aaU",0)
x(v=B.aw1.prototype,"gchi","a_3",0)
x(v,"gaTK","aaT",0)
w(B.avX.prototype,"gat1","at2",8)
x(v=B.aw2.prototype,"gc7H","acB",0)
x(v,"gbGw","a7B",0)
w(v,"gat1","at2",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ccU,B.a6T,B.aqw,B.ayt,B.aBz,B.j8,B.a9k,B.bqN,B.Dx,B.UX])
w(B.ccV,B.ccU)
w(B.b05,B.a6T)
x(A.i2,[B.ccQ,B.ccR,B.ccS,B.ccP,B.ccT,B.ccW,B.ccX,B.ccY,B.ccZ,B.cd_,B.cd0,B.cd1,B.cd2,B.f2x,B.fn_,B.fn1,B.fn0,B.fne,B.fnf,B.f3Q,B.cWd,B.cWf,B.cWe,B.cWi,B.f5P,B.f6i,B.c1G,B.c1N,B.c1O,B.c1J,B.c1H,B.c1K,B.c1L,B.fnc,B.fnd,B.dGP,B.dGY,B.dGW,B.dGX,B.f_L,B.f41,B.f42,B.c24,B.f44,B.f7W,B.f2J,B.f2K,B.c29,B.frG,B.cWc,B.cWa,B.dGL,B.dFH,B.dFN,B.dG5,B.dFM,B.dGc,B.dGw,B.dGx,B.dGy,B.dG3,B.dGl,B.dGk,B.dGm,B.dGn,B.dGo,B.dGq,B.dGr,B.dGj,B.dFP,B.dFQ,B.dFL,B.dG6,B.dFY,B.dFW,B.dGb,B.dGv,B.dGI,B.dGJ,B.cW8,B.cW9,B.cWw,B.cWv,B.cWq,B.cWo,B.cWm,B.cWp,B.cWr,B.cWn,B.cW5,B.cW6,B.cW7,B.cW1,B.cWF,B.cWG,B.cWz,B.c2b,B.c2c,B.f7z,B.f82,B.f81])
w(B.b06,B.aqw)
x(A.jk,[B.fmZ,B.cWg,B.cWh,B.f5N,B.f5O,B.f6h,B.dFE,B.dGN,B.dGO,B.dGM,B.dGQ,B.dGR,B.dGS,B.dGT,B.dGU,B.dGV,B.dFF,B.dFG,B.f43,B.cWb,B.dG8,B.dG9,B.dFI,B.dFJ,B.dFO,B.dGz,B.dGA,B.dG2,B.dGd,B.dFS,B.dG4,B.dGp,B.dGe,B.dGf,B.dGg,B.dGh,B.dGi,B.dFR,B.dFK,B.dG7,B.dG0,B.dFU,B.dFZ,B.dG_,B.dG1,B.dFT,B.dGa,B.dGs,B.dGt,B.dGu,B.dGG,B.dGH,B.dGC,B.dGD,B.dGB,B.dGE,B.dGF,B.cWs,B.cWt,B.cWu,B.cWj,B.cWl,B.cWk,B.cW4,B.cW3,B.cW2,B.cVZ,B.cW_,B.cW0,B.cWJ,B.cWK,B.cWL,B.cWM,B.cWN,B.cWO,B.cWQ,B.cWP,B.cWx,B.cWy,B.cWA,B.cWB,B.cWC,B.cWD,B.cVY,B.cWI,B.cWH,B.f7A])
x(A.ma,[B.a9D,B.Lu,B.a6U,B.Mx,B.UW,B.Mw,B.Dy])
x(A.ae,[B.WP,B.SF,B.SJ,B.SG,B.WO,B.SH,B.WQ,B.WN,B.NF,B.WS,B.WM,B.WT])
x(A.ag,[B.aw_,B.azQ,B.azT,B.azR,B.avZ,B.azS,B.aw0,B.avY,B.aw3,B.aw1,B.avX,B.aw2])
x(A.ar,[B.aa4,B.avW,B.b9h,B.a9E,B.a9C,B.b9i])
x(A.kw,[B.c1M,B.c1I,B.c1Q,B.c1R,B.fnK,B.dFX,B.dFV,B.dGK,B.cWE,B.c2a,B.f83])
x(A.j_,[B.bez,B.bqs])})()
A.kc(b.typeUniverse,JSON.parse('{"b05":{"a6T":[]},"b06":{"aqw":[]},"WP":{"ae":[],"r":[]},"aw_":{"ag":["WP"]},"aa4":{"ar":[],"r":[]},"SF":{"ae":[],"r":[]},"SJ":{"ae":[],"r":[]},"azQ":{"ag":["SF"]},"azT":{"ag":["SJ"]},"bez":{"j_":[]},"SG":{"ae":[],"r":[]},"azR":{"ag":["SG"]},"WO":{"ae":[],"r":[]},"SH":{"ae":[],"r":[]},"a9E":{"ar":[],"r":[]},"WQ":{"ae":[],"r":[]},"WN":{"ae":[],"r":[]},"NF":{"ae":[],"r":[]},"WS":{"ae":[],"r":[]},"a9C":{"ar":[],"r":[]},"WM":{"ae":[],"r":[]},"WT":{"ae":[],"r":[]},"avZ":{"ag":["WO"]},"bqs":{"j_":[]},"azS":{"ag":["SH"]},"avW":{"ar":[],"r":[]},"b9h":{"ar":[],"r":[]},"aw0":{"ag":["WQ"]},"avY":{"ag":["WN"]},"aw3":{"ag":["NF"]},"aw1":{"ag":["WS"]},"avX":{"ag":["WM"]},"aw2":{"ag":["WT"]},"b9i":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tr"),k:x("K1()"),m:x("bt<n,n>"),F:x("qq"),g:x("au<j8?>"),x:x("au<~>"),V:x("M<a9>"),O:x("M<x>"),W:x("M<be>"),Y:x("M<a0<n,S>>"),t:x("M<a0<n,@>>"),r:x("M<j8>"),w:x("M<+file,name(lc,n)>"),u:x("M<cI>"),s:x("M<n>"),E:x("M<j_>"),a:x("M<dz>"),p:x("M<r>"),Z:x("M<G>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("al<j8>"),j:x("al<@>"),I:x("al<G>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iB"),e:x("hRB"),af:x("CM"),U:x("j8"),b:x("cr"),C:x("aC"),aK:x("vd"),ab:x("Dx"),br:x("aqw"),v:x("UX"),N:x("n"),X:x("bm<P>"),Q:x("lo"),D:x("dz"),aw:x("cv<n>"),cd:x("a3<a0<n,@>>"),c7:x("r"),ch:x("bL<al<j8>>"),aW:x("bL<dz?>"),aY:x("bL<~>"),cx:x("a9D"),b1:x("bd<al<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayt"),bG:x("aBz"),q:x("mw"),B:x("oQ<Dx>"),c6:x("oQ<a6U>"),y:x("S"),i:x("P"),z:x("@"),S:x("G"),aQ:x("be?"),_:x("al<j8>?"),aL:x("al<@>?"),h:x("a0<n,@>?"),l:x("j8?"),R:x("aC?"),c:x("UX?"),d:x("+answerQr,transfer(n,au<al<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Lu,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9k?"),bk:x("ayt?"),ag:x("aBz?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPX=new A.ay(C.az,2,C.r,-1)
D.bFv=new A.a8(C.a_,C.a7,C.w,C.Zi,null,null)
D.aRy=new A.o(null,null,null,C.mZ,null,D.bFv,C.n)
D.aSU=new A.o(null,null,null,C.mZ,null,E.EL,C.n)
D.a7Y=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8U=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9B=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaZ=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eDI=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eQK=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.H6,null,null,null,null,null,null,null,null,null)
D.cMs=x([D.eDI,C.ar,D.eQK],y.p)
D.baA=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cMs,null)
D.eUD=new A.w("Create your organization",null,C.h5,null,null,null,null,null,null,null,null,null)
D.eHC=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.H6,null,null,null,null,null,null,null,null,null)
D.d_1=x([D.eUD,C.ar,D.eHC],y.p)
D.baJ=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.d_1,null)
D.eRf=new A.w("Team Member sign-in",null,C.h5,null,null,null,null,null,null,null,null,null)
D.eL2=new A.w("Enter the access code and password from your organization.",null,G.H6,null,null,null,null,null,null,null,null,null)
D.cYc=x([D.eRf,C.ar,D.eL2],y.p)
D.baT=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cYc,null)
D.bfH=new A.L(16,10,16,28)
D.bfP=new A.L(16,14,16,4)
D.bh2=new A.L(20,0,20,16)
D.bhx=new A.L(20,8,20,16)
D.adv=new A.L(24,22,24,20)
D.Xo=new A.a_(63394,"MaterialIcons",!1)
D.agj=new A.a_(63515,"MaterialIcons",!1)
D.brd=new A.a_(983813,"MaterialIcons",!1)
D.bor=new A.a_(62867,"MaterialIcons",!1)
D.bsb=new A.ac(D.bor,44,C.c,null,null,null)
D.bth=new A.ac(C.rN,null,C.al,null,null,null)
D.buF=new A.ac(C.iF,18,null,null,null,null)
D.bwi=new A.ac(D.Xo,26,C.c,null,null,null)
D.bwO=new A.ac(C.Ep,null,null,null,null,null)
D.bxm=new A.ac(C.x8,null,null,null,null,null)
D.byr=new A.ac(W.La,null,null,null,null,null)
D.byL=new A.ac(C.hg,16,null,null,null,null)
D.bC2=new A.ac(C.qj,16,null,null,null,null)
D.bst=new A.ac(C.mB,null,null,null,null,null)
D.bCV=new A.dZ(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bst,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxT=new A.ac(C.E0,null,null,null,null,null)
D.bD_=new A.dZ(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsO=new A.ac(N.Ez,null,null,null,null,null)
D.bD9=new A.dZ(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.coH=x([C.eT,C.aW,C.az],y.O)
D.bHe=new A.a8(C.ax,C.aE,C.w,D.coH,null,null)
D.coc=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nm=x([C.eT,C.az],y.O)
D.NA=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m0=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cTy=x([C.q1,C.az],y.O)
D.dI8={iceServers:0}
D.aAG={urls:0}
D.d2B=new A.bt(D.aAG,["stun:stun.l.google.com:19302"],y.m)
D.d2A=new A.bt(D.aAG,["stun:stun1.l.google.com:19302"],y.m)
D.cDI=x([D.d2B,D.d2A],A.aA("M<a0<n,n>>"))
D.d1W=new A.bt(D.dI8,[D.cDI],A.aA("bt<n,@>"))
D.FM=new B.Lu(0,"lanDirect")
D.OO=new B.Lu(1,"cloudStash")
D.ddz=new B.Lu(2,"inlineInstant")
D.OP=new B.Lu(3,"webrtcLink")
D.xO=new B.Lu(4,"videoCloud")
D.eQJ=new A.w("Receive file",null,C.mS,null,null,null,null,null,null,null,null,null)
D.ceq=x([E.ahY,C.ab,D.eQJ],y.p)
D.eaw=new A.cD(C.aZ,C.b5,C.j,C.m,null,C.p,null,0,D.ceq,null)
D.dMu=new A.B(C.c9,D.eaw,null)
D.evh=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZW,null,null,null)
D.eEd=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.evh,null,C.L,null,null,null,null,null,null,null)
D.dLP=new A.B(C.zH,D.eEd,null)
D.aWU=new A.cw(C.B,null,null,D.dLP,null)
D.dQV=new A.cE(0,null,0,28,null,null,D.aWU,null)
D.dRc=new B.a6U(0,"RTCDataChannelConnecting")
D.aFI=new B.a6U(1,"RTCDataChannelOpen")
D.aFJ=new B.a6U(3,"RTCDataChannelClosed")
D.dRd=new B.Dy(0,"RTCIceConnectionStateNew")
D.dRe=new B.Dy(1,"RTCIceConnectionStateChecking")
D.dRf=new B.Dy(2,"RTCIceConnectionStateCompleted")
D.dRg=new B.Dy(3,"RTCIceConnectionStateConnected")
D.dRh=new B.Dy(4,"RTCIceConnectionStateCount")
D.dRi=new B.Dy(5,"RTCIceConnectionStateFailed")
D.dRj=new B.Dy(6,"RTCIceConnectionStateDisconnected")
D.aFK=new B.Dy(7,"RTCIceConnectionStateClosed")
D.aFL=new B.UW(0,"RTCIceGatheringStateNew")
D.dRk=new B.UW(1,"RTCIceGatheringStateGathering")
D.a2c=new B.UW(2,"RTCIceGatheringStateComplete")
D.a2d=new B.Mw(0,"RTCPeerConnectionStateClosed")
D.aFM=new B.Mw(1,"RTCPeerConnectionStateFailed")
D.aFN=new B.Mw(2,"RTCPeerConnectionStateDisconnected")
D.aFO=new B.Mw(3,"RTCPeerConnectionStateNew")
D.aFP=new B.Mw(4,"RTCPeerConnectionStateConnecting")
D.aFQ=new B.Mw(5,"RTCPeerConnectionStateConnected")
D.dRl=new B.Mx(0,"RTCSignalingStateStable")
D.dRm=new B.Mx(1,"RTCSignalingStateHaveLocalOffer")
D.dRn=new B.Mx(2,"RTCSignalingStateHaveRemoteOffer")
D.dRo=new B.Mx(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dRp=new B.Mx(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFR=new B.Mx(5,"RTCSignalingStateClosed")
D.ee4=new A.ap(160,48)
D.aY1=new A.f9(2,null,null,null,null,C.az,null,null,null,null)
D.efw=new A.a4(16,16,D.aY1,null)
D.eH3=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.egV=new A.aX(D.eH3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNP=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.egY=new A.aX(D.eNP,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVC=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eh4=new A.aX(D.eVC,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eGJ=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ehv=new A.aX(D.eGJ,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRo=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aI9=new A.aX(D.eRo,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eSG=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ehY=new A.aX(D.eSG,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWV=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eic=new A.aX(D.eWV,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eV4=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eih=new A.aX(D.eV4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWc=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ej1=new A.aX(D.eWc,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eFt=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ejy=new A.aX(D.eFt,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.ePw=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ejT=new A.aX(D.ePw,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eJ2=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eko=new A.aX(D.eJ2,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eX0=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eks=new A.aX(D.eX0,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eFI=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eky=new A.aX(D.eFI,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eEx=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ekN=new A.aX(D.eEx,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eBG=new A.w("NGMY DOC SHARE",null,C.aJp,null,null,null,null,null,null,null,null,null)
D.eCQ=new A.w("Show this to sender",null,C.kc,null,null,null,null,null,null,null,null,null)
D.eDO=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eHX=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eIf=new A.w("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eJc=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eJC=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eM9=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eOL=new A.w("Send to their Doc Share",null,C.mR,null,null,null,null,null,null,null,null,null)
D.eP3=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ePl=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.ePP=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.ePT=new A.w("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eQf=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eB,null,null,null,null,null,null,null,null,null)
D.eT6=new A.w("Share files & videos\nwith a scan.",null,C.aJq,null,null,null,null,null,null,null,null,null)
D.eTo=new A.w("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.f1W=new B.WM(null)
D.a57=new B.a9D(0,"docShare")
D.a58=new B.a9D(1,"gate")
D.Rx=new B.a9D(2,"gateNoIndividual")})();(function staticFields(){$.aK6=null
$.eVX=function(){var x=y.N
return A.Q(x,x)}()
$.EE=A.Q(y.N,y.D)
$.adx=A.Q(y.N,A.aA("lc"))
$.OX=A.Q(y.N,y.D)
$.eWt=A.Q(y.N,A.aA("a9k"))
$.c23=A.Q(y.S,A.aA("bqN"))
$.fOB=1
$.hzU=null
$.hzT=null
$.hrR=null
$.fE8=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hS5","h4h",()=>new B.ccV())
x($,"hQ0","fHy",()=>C.a.q(A.bp(A.bp(A.bp(A.Fa(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["slFGtsM9+nxtZS6/arKhIo6GsVw="]=a.current})($__dart_deferred_initializers__);