((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cd1:function cd1(){},
hm2(d){var x=null,w=new B.b09(d,D.dRm,new A.oQ(x,x,y.c6),new A.oQ(x,x,y.B))
w.brH(d)
return w},
b09:function b09(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ccX:function ccX(d){this.a=d},
ccY:function ccY(d){this.a=d},
ccZ:function ccZ(d){this.a=d},
ccW:function ccW(d){this.a=d},
cd_:function cd_(d){this.a=d},
hm3(d,e){var x=y.N
x=new B.b0a(d,e,A.Q(x,y.e),A.Q(x,y.z))
x.brI(d,e)
return x},
b0a:function b0a(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cd2:function cd2(d){this.a=d},
cd3:function cd3(d){this.a=d},
cd4:function cd4(d){this.a=d},
cd5:function cd5(d){this.a=d},
cd6:function cd6(d){this.a=d},
cd7:function cd7(d){this.a=d},
cd8:function cd8(d){this.a=d},
cd9:function cd9(d){this.a=d},
fEd(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xi.Kl(x,"ngmy_doc_share_v1",new B.f2X(),1)},
hsw(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.AU(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
Pc(d,e){return B.hGZ(d,e)},
hGZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKb
x=7
return A.b(o==null?$.aKb=B.fEd():o,$async$Pc)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mf(s,"blobs","readwrite")
C.il.lK(J.md(q,"blobs"),r,d)
x=8
return A.b(J.oZ(q),$async$Pc)
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
return A.i($async$Pc,w)},
Pb(d){return B.hGY(d)},
hGY(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKb
x=7
return A.b(o==null?$.aKb=B.fEd():o,$async$Pb)
case 7:s=f
r=J.mf(s,"blobs","readonly")
x=8
return A.b(C.il.yu(J.md(r,"blobs"),d),$async$Pb)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$Pb)
case 9:o=B.hsw(q)
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
return A.i($async$Pb,w)},
aef(d){return B.hGX(d)},
hGX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aef=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKb
x=7
return A.b(p==null?$.aKb=B.fEd():p,$async$aef)
case 7:s=f
r=J.mf(s,"blobs","readwrite")
C.il.Ep(J.md(r,"blobs"),d)
x=8
return A.b(J.oZ(r),$async$aef)
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
return A.i($async$aef,w)},
f2X:function f2X(){},
huI(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkg(w,v))}return u},
h2e(d,e){var x,w={},v=A.aSg("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fnm(w,v,e)
C.uI.xm(v,"change",new B.fno(w,v,!1))
C.uI.xm(v,"cancel",new B.fnn(w))
$.eJ.lU()
v.click()
A.bK(C.abI,new B.fnl(w),y.H)},
fnm:function fnm(d,e,f){this.a=d
this.b=e
this.c=f},
fno:function fno(d,e,f){this.a=d
this.b=e
this.c=f},
fnn:function fnn(d){this.a=d},
fnl:function fnl(d){this.a=d},
BE(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BE=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd5()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRI()?3:4
break
case 3:x=5
return A.b(B.fYv(e,d,s,!0,!1,f,g,h,!1,i),$async$BE)
case 5:x=1
break
case 4:x=6
return A.b(B.OQ(d,s,f,g,h,i),$async$BE)
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
return A.b(B.GL(s,d),$async$BE)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.eZx(s,d),$async$BE)
case 14:x=12
return A.b(r.fYv(q,p,o,n,m,l,k,j,a1,i),$async$BE)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cr(A.eI(new B.fnB(s,i,d,f,g,h),!1,null,y.H)),$async$BE)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cr(A.eI(new B.fnC(s,i,d,f,g,h),!1,null,y.H)),$async$BE)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BE,w)},
OQ(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OQ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVV(e),$async$OQ)
case 3:u=k
x=4
return A.b(B.amf(d,e,!1),$async$OQ)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GL(e,d),$async$OQ)
case 7:if(k){v=D.a5a
x=1
break}x=8
return A.b(B.SJ(e),$async$OQ)
case 8:v=t?D.Ry:D.a5b
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aVT(d,e)){v=D.a5a
x=1
break}x=11
return A.b(B.SJ(e),$async$OQ)
case 11:v=t?D.Ry:D.a5b
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fzu(d,e)){v=D.a5a
x=1
break}x=14
return A.b(B.SJ(e),$async$OQ)
case 14:v=D.Ry
x=1
break
case 13:v=t?D.Ry:D.a5b
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OQ,w)},
eZx(d,e){var x=0,w=A.j(y.y),v
var $async$eZx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aVT(e,d)){v=!1
x=1
break}x=3
return A.b(B.aVV(d),$async$eZx)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZx,w)},
fYv(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cr(A.eI(new B.f4f(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fTM(d,e,f,g,h,i,j){return new B.WR(e,j,d,g,h,i,f,null)},
f6b(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f6b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c1(C.K,new B.f6e(A.K(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f6b)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6b,w)},
f6G(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f6G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c1(C.K,new B.f6I(A.K(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f6G)
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
return A.i($async$f6G,w)},
fEl(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b2(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
ffZ(d,e){var x=0,w=A.j(y.H),v
var $async$ffZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SJ(e),$async$ffZ)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eB()
case 1:return A.h(v,w)}})
return A.i($async$ffZ,w)},
fnB:function fnB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnC:function fnC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9G:function a9G(d,e){this.a=d
this.b=e},
f4f:function f4f(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WR:function WR(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aw4:function aw4(){this.c=this.a=this.d=null},
cWn:function cWn(d,e){this.a=d
this.b=e},
cWk:function cWk(d){this.a=d},
cWm:function cWm(d){this.a=d},
cWl:function cWl(d){this.a=d},
cWp:function cWp(){},
cWo:function cWo(d){this.a=d},
aa7:function aa7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayy:function ayy(d,e){this.a=d
this.b=e},
aBF:function aBF(d,e,f){this.a=d
this.b=e
this.c=f},
f6e:function f6e(d,e,f){this.a=d
this.b=e
this.c=f},
f6c:function f6c(d){this.a=d},
f6d:function f6d(d,e,f){this.a=d
this.b=e
this.c=f},
f6I:function f6I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6H:function f6H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1M(d,e,f,g,h){return B.hh3(d,e,f,g,h)},
hh3(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c1M=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gG(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.di(d,new B.c1N(s,e,h,g,f,q),y.g),y.l),$async$c1M)
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
return A.i($async$c1M,w)},
aVQ(d,e,f,g,h){return B.hh4(d,e,f,g,h)},
hh4(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVQ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arq("GET",d)
o=A.fvZ()
if(o==null)o=new A.JY(A.a([],y.W))
x=7
return A.b(o.eK(0,s).cJ(0,C.Dm),$async$aVQ)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ba(),$async$aVQ)
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
return A.i($async$aVQ,w)},
aVP(d){return B.hh1(d)},
hh1(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uq(d,null).cJ(0,C.nd),$async$aVP)
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
return A.i($async$aVP,w)},
c1L(d){return B.hh2(d)},
hh2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uq(d,null).cJ(0,C.oV),$async$c1L)
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
return A.i($async$c1L,w)},
c1N:function c1N(d,e,f,g,h,i){var _=this
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
GJ(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hh9(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GJ(C.a.aV(u,v.length))}return null},
hha(d){var x=B.GJ(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hh5(){var x,w=$.oX(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aG(10)
return C.d.fL(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aG(24)]},
a4t(d){return B.hh6(d)},
hh6(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bE),$async$a4t)
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
return A.i($async$a4t,w)},
a4u(d,e){return B.hh7(d,e)},
hh7(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4u=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hs(d,e,!1,!1,C.cy,null),$async$a4u)
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
return A.i($async$a4u,w)},
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
r=B.GJ(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4v(r),$async$Ai)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4t("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ai)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GJ(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ai)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hh5()
x=14
return A.b(B.a4v(m),$async$Ai)
case 14:if(f!=null){x=12
break}l=new A.N(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4u("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ai)
case 15:k=f
x=16
return A.b(B.a4u("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ai)
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
a4v(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GJ(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4t("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4v)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4v,w)},
a4w(d,e,f,g){return B.hhb(d,e,f,g)},
hhb(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4w=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GJ(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4v(r),$async$a4w)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c1T())>1048576||g.bd(d,new B.c1U())){v=B.D3(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4H("myCode",d,a0),$async$a4w)
case 4:u=a3
try{t=C.Q.aC(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ch(s)||J.aa(s)!==g.gG(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D3(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aVY(u,g.gG(d),a0),$async$a4w)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oX().aG(9999)
k=n.b
j=g.gG(d)
i=y.N
h=g.di(d,new B.c1V(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aVR(A.D(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4w)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gG(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4w,w)},
D3(d,e,f,g,h){return B.hh8(d,e,f,g,h)},
hh8(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D3=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$D3)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c1P())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oX().aG(9999)
h=Date.now()
g=""+1000*h+"_"+C.cA.aG(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aJ(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GN(a9,q)
a0=new A.Iy(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D3)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.op(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a7Y(a1.a,a4,"media",a1.d,a2).w3(m,n,new A.Co(!0,q.c)),$async$D3)
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
return A.b(B.aMy(r),$async$D3)
case 16:v=!1
x=1
break
case 15:f.push(A.D(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gG(a6)
a1=l.di(a6,new B.c1Q(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aVR(A.D(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D3)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMy(r),$async$D3)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gG(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D3,w)},
aVR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aVR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4t(t),$async$aVR)
case 3:s=g
r=y.aL.a(J.q(s==null?A.D(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c1O(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4u(t,A.D(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVR,w)},
Lu(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lu=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4t("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lu)
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
break}k=A.Z(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aVS(k,a0),$async$Lu)
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
return A.b(B.aVX(h),$async$Lu)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SQ(g,a0),$async$Lu)
case 10:f=a3
if(f!=null&&J.ct(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("E.E")
e=A.z(new A.a4(r,new B.c1R(),q),n)
d=A.z(new A.a4(r,new B.c1S(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.R(d).c))
x=11
return A.b(B.a4u("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.D(["deliveries",q],p,o)),$async$Lu)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lu,w)},
aVS(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aVS=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.hKH(k,j)
C.d.v(s,i)
x=5
return A.b(B.BC(l,m,"Received via My Code",t,e,i),$async$aVS)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMy(s),$async$aVS)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVS,w)},
c1T:function c1T(){},
c1U:function c1U(){},
c1V:function c1V(){},
c1P:function c1P(){},
c1Q:function c1Q(){},
c1O:function c1O(){},
c1R:function c1R(){},
c1S:function c1S(){},
fny(d,e){var x=0,w=A.j(y.H)
var $async$fny=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cr(A.eI(new B.fnz(e),!1,null,y.H)),$async$fny)
case 2:return A.h(null,w)}})
return A.i($async$fny,w)},
byH(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byH=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cr(A.eI(new B.fnA(g,e,f),!1,null,y.y)),$async$byH)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byH,w)},
fnz:function fnz(d){this.a=d},
fnA:function fnA(d,e,f){this.a=d
this.b=e
this.c=f},
SG:function SG(d,e){this.c=d
this.a=e},
azV:function azV(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dFL:function dFL(d,e){this.a=d
this.b=e},
SK:function SK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azY:function azY(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dGU:function dGU(d){this.a=d},
dGV:function dGV(d){this.a=d},
dGW:function dGW(d){this.a=d},
dGT:function dGT(d,e){this.a=d
this.b=e},
dGX:function dGX(d){this.a=d},
dGY:function dGY(d){this.a=d},
dGZ:function dGZ(d,e){this.a=d
this.b=e},
dH_:function dH_(d,e){this.a=d
this.b=e},
dH0:function dH0(d,e){this.a=d
this.b=e},
dH1:function dH1(d){this.a=d},
dH4:function dH4(){},
dH2:function dH2(d){this.a=d},
dH3:function dH3(d,e){this.a=d
this.b=e},
beE:function beE(){},
SH:function SH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azW:function azW(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dFM:function dFM(d){this.a=d},
dFN:function dFN(d){this.a=d},
fzv(d){var x=d.hC
if(x>=0)return C.o.M(x)
return 10},
hhd(d){var x=d.k9
if(x>=0)return x
return 4.99},
hhc(d){var x=d.kR,w=y.N
w=x.iC(x,new B.c1X(),w,w)
return w},
fOX(d){var x=d.ka,w=y.N
w=x.iC(x,new B.c1Y(),w,w)
return w},
aVV(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aVV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aVV)
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
return A.i($async$aVV,w)},
a4y(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$a4y)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4y,w)},
SJ(d){var x=0,w=A.j(y.H),v,u
var $async$SJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$SJ)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SJ,w)},
fzu(d,e){var x,w,v
if(B.hhd(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hhc(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.ca(new A.N(Date.now(),0,!1))},
aVT(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fOX(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.ca(new A.N(Date.now(),0,!1))},
fOY(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fOX(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.ca(new A.N(Date.now(),0,!1))?v:new A.N(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amg(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amg)
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
return A.i($async$amg,w)},
amh(d){var x=0,w=A.j(y.H),v,u,t
var $async$amh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amg(d),$async$amh)
case 3:u=f
x=5
return A.b(A.aw(),$async$amh)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$amh)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amh,w)},
amf(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fzv(d)
if(u<=0){v=!1
x=1
break}if(B.fzu(d,e)){v=!1
x=1
break}x=3
return A.b(B.amg(e),$async$amf)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amf,w)},
aVU(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aVU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GL(e,d),$async$aVU)
case 3:if(g){v=-1
x=1
break}u=B.fzv(d)
if(u<=0){v=-1
x=1
break}if(B.fzu(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amg(e),$async$aVU)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVU,w)},
c2_(d,e,f){var x=0,w=A.j(y.y),v
var $async$c2_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GL(e,d),$async$c2_)
case 3:if(h){v=!1
x=1
break}v=B.amf(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2_,w)},
c1Z(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c1Z=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
x=3
return A.b(B.c2_(d,u,i.gRI()),$async$c1Z)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1Z,w)},
a4x(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4x=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
if(i.gRI()){v=!0
x=1
break}if(B.aVT(d,u)){v=!0
x=1
break}x=5
return A.b(A.kZ(u,C.Pa),$async$a4x)
case 5:x=k?3:4
break
case 3:B.fOY(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4x)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kD(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Pa,"Doc Share for Organizations"),$async$a4x)
case 7:if(!k){v=!1
x=1
break}B.fOY(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4x)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4x,w)},
c1X:function c1X(){},
c1Y:function c1Y(){},
fo3(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fo3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fo3)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eWm.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hC([r],e.c))
s.toString
$.eWm.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fo3,w)},
hMO(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eWm.bk($.eWm,new B.fo5(d))},
fo5:function fo5(d){this.a=d},
eXH(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eXH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],f))
s.toString
u=A.mF(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.jb,null,y.H),$async$eXH)
case 3:C.yx.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eJ.lU()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eXH,w)},
ad9(d,e,f){var x=0,w=A.j(y.H),v
var $async$ad9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eWT.m(0,d,new B.a9n(A.bi(e,!0,v)))
x=3
return A.b(A.aw(),$async$ad9)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.D(["parts",e,"size",f],v,y.C),null)),$async$ad9)
case 2:return A.h(null,w)}})
return A.i($async$ad9,w)},
ad3(d){return B.hwp(d)},
hwp(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ad3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eWT.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ad3)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aC(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b4(s,new B.f0a(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.a9n(r)
$.eWT.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ad3,w)},
OG(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EE.m(0,d,u)
x=3
return A.b(B.Pc(d,u),$async$OG)
case 3:t=g
if(!t)$.ak.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OG,w)},
aKv(d){return B.hwn(d)},
hwn(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EE.h(0,d)
if(n!=null&&!C.aD.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pb(d),$async$aKv)
case 3:p=f
if(p!=null&&!C.aD.gah(p)){$.EE.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKv)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aE(r)
x=!J.ch(q)?9:10
break
case 9:B.OG(d,q)
x=11
return A.b(J.hB(s,d),$async$aKv)
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
return A.i($async$aKv,w)},
hsR(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.cl(J.eP(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.cl(A.AU(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
return A.f7(null,y.K)},
a_f(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bM(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f4r(r,t),!1,s)
A.fA(r,"error",new B.f4s(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.Jz,new B.f4t())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_f,w)},
aKP(d,e,f){return B.hyB(d,e,f)},
hyB(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKP=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_f(i),$async$aKP)
case 10:p=a0
if(p==null||p.length===0){$.ak.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Pc(o,p),$async$aKP)
case 11:n=a0
if(!n){$.ak.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.ad9(k,j,s),$async$aKP)
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
return A.i($async$aKP,w)},
aKO(d,e,f){return B.hyA(d,e,f)},
hyA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKO=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKP(d,e,f),$async$aKO)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_f(f),$async$aKO)
case 10:r=h
if(r==null||r.length===0){$.ak.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EE.m(0,s,r)
$.OY.m(0,s,r)
x=11
return A.b(B.OG(s,r),$async$aKO)
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
return A.i($async$aKO,w)},
Aj(d,e,f,g,h,i){return B.hhm(d,e,f,g,h,i)},
hhm(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Aj=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cA.aG(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j8(p,q,o,n,new A.N(Date.now(),0,!1).a4().aa(),a0,f,B.aW0(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OG(s,d),$async$Aj)
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
return A.b(B.zr(e),$async$Aj)
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
SL(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SL=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zr(d),$async$SL)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cA.aG(99999)
n=p.b
l=o.type
l.toString
k=B.fP_(n,null,l)
l=o.size
l.toString
j=new A.N(Date.now(),0,!1).a4().aa()
i=new B.j8(m,n,k,l,j,"From folder",null,B.aW0(),null)
$.adB.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_f(o),$async$SL)
case 7:g=a1
x=g!=null&&!C.aD.gah(g)?8:10
break
case 8:$.EE.m(0,h,g)
$.OY.m(0,h,g)
B.OG(h,g)
x=9
break
case 10:x=11
return A.b(B.aKO(d,m,o),$async$SL)
case 11:case 9:r.H(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EN(d,t),$async$SL)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
fzz(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fzz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fP_(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GM(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aD.gah(s)){v=B.Aj(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzz,w)},
GM(d,e,f,g,h,i){return B.hhl(d,e,f,g,h,i)},
hhl(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GM=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cA.aG(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Iy(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GM)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ch(m)){x=6
break}J.fT(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PJ(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kn(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pc(k,l),$async$GM)
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
return A.b(j.a9(0),$async$GM)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pc(k,new Uint8Array(A.cl(n))),$async$GM)
case 15:J.ci(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ad9(r,q,g),$async$GM)
case 16:f=new B.j8(i,a1,a0,g,new A.N(Date.now(),0,!1).a4().aa(),a2,null,B.aW0(),null)
x=17
return A.b(B.zr(d),$async$GM)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.EN(d,e),$async$GM)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GM,w)},
SN(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SN=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adB.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_f(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ad3(s),$async$SN)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pb(u[o]),$async$SN)
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
case 5:i=$.OY.h(0,s)
if(i==null)i=$.EE.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qN(d,e),$async$SN)
case 12:i=a0
if(i!=null&&!C.aD.gah(i))$.OY.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AU(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
fP_(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qN(d,e){return B.hhn(d,e)},
hhn(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OY.h(0,f)
if(e==null)e=$.EE.h(0,f)
if(e!=null&&!C.aD.gah(e)){v=e
x=1
break}s=$.adB.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_f(s),$async$qN)
case 9:r=a3
if(r!=null&&!C.aD.gah(r)){$.EE.m(0,f,r)
$.OY.m(0,f,r)
B.OG(f,r)
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
return A.b(B.ad3(f),$async$qN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auT(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pb(g[l]),$async$qN)
case 16:k=a3
if(k!=null&&!C.aD.gah(k))n.H(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.akH()
if(!C.aD.gah(r)){$.EE.m(0,f,r)
$.OY.m(0,f,r)
v=r
x=1
break}$.ak.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKv(f),$async$qN)
case 17:j=a3
if(j!=null&&!C.aD.gah(j)){$.OY.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SN(a0,a1,0,g),$async$qN)
case 20:i=a3
if(i!=null&&!C.aD.gah(i)){h=new Uint8Array(A.cl(i))
$.EE.m(0,f,h)
$.OY.m(0,f,h)
B.OG(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qN,w)},
hhq(d){var x,w,v=$.adB.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hhr(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hC([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hho(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amn(d,e,f,g,h){return B.hhp(d,e,f,g,h)},
hhp(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amn=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adB.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_f(s),$async$amn)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qN(g,e),$async$amn)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eM().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w3(h,r,new A.Co(!0,e.c)),$async$amn)
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
return A.i($async$amn,w)},
fP1(d,e,f,g,h){var x,w,v,u,t=$.fP0
$.fP0=t+1
x=Date.now()
w=""+1000*x+"_"+C.cA.aG(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2a.m(0,t,new B.bqS(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auT(u)))
return t},
fzA(d){var x=0,w=A.j(y.H)
var $async$fzA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fzA,w)},
GN(d,e){var $async$GN=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adB.h(0,h)
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
return A.pz(B.SN(d,e,p,o<q?o:q),$async$GN,w)
case 8:n=a1
x=n!=null&&!C.aD.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pz(A.Ed(n),$async$GN,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pz(B.ad3("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GN,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pz(B.Pb(h[l]),$async$GN,w)
case 18:k=a1
x=k!=null&&!C.aD.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pz(A.Ed(k),$async$GN,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pz(B.qN(d,e),$async$GN,w)
case 22:j=a1
x=j!=null&&!C.aD.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pz(A.Ed(A.AU(j,p,o<i?o:i)),$async$GN,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pz(null,0,w)
case 2:return A.pz(t.at(-1),1,w)}})
var x=0,w=A.fXq($async$GN,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.fZb(w)},
aW2(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aW2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2a.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.H(0,e)
case 3:if(!(u.gG(u)>=1048576)){x=4
break}x=5
return A.b(t.a1X(),$async$aW2)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW2,w)},
SM(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2a.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a1X(),$async$SM)
case 3:u=r.w
if(u.length===0||r.z<=0){$.ak.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ad9(r.c,u,r.z),$async$SM)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.N(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aW0(),null)
u=r.a
x=5
return A.b(B.zr(u),$async$SM)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.EN(u,s),$async$SM)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SM,w)},
a4E(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2a.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aef(u[s]),$async$a4E)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4E,w)},
c2c(d,e,f){var x=0,w=A.j(y.H)
var $async$c2c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvQ(d,e,f),$async$c2c)
case 2:return A.h(null,w)}})
return A.i($async$c2c,w)},
c2d(d,e,f){var x=0,w=A.j(y.H)
var $async$c2d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvR(d,e,f),$async$c2d)
case 2:return A.h(null,w)}})
return A.i($async$c2d,w)},
D4(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zr(d),$async$D4)
case 2:p=g
J.mZ(p,new B.c2b(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EE.W(0,v)
$.adB.W(0,e)
x=3
return A.b(B.ad3(v),$async$D4)
case 3:u=g
$.eWT.W(0,v)
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
return A.b(B.aef(s[q]),$async$D4)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aef(v),$async$D4)
case 13:x=14
return A.b(B.EN(d,p),$async$D4)
case 14:return A.h(null,w)}})
return A.i($async$D4,w)},
aW1(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aW1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qN(d,e),$async$aW1)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eXH(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW1,w)},
zr(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$zr)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aC(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f4u(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zr,w)},
EN(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$EN)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.f8l(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$EN)
case 3:return A.h(null,w)}})
return A.i($async$EN,w)},
bvQ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bvQ)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f38(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azH(f))
x=4
return A.b(B.EN(d,u),$async$bvQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvQ,w)},
bvR(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bvR)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f39(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cyh(f))
x=4
return A.b(B.EN(d,u),$async$bvR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvR,w)},
a9n:function a9n(d){this.a=d},
f0a:function f0a(){},
f4r:function f4r(d,e){this.a=d
this.b=e},
f4s:function f4s(d){this.a=d},
f4t:function f4t(){},
c2b:function c2b(d){this.a=d},
bqS:function bqS(d,e,f,g,h,i,j,k,l){var _=this
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
f4u:function f4u(){},
f8l:function f8l(){},
f38:function f38(d){this.a=d},
f39:function f39(d){this.a=d},
a4F(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bd(d,new B.c2g())?3:4
break
case 3:x=5
return A.b(B.aW3(d,e),$async$a4F)
case 5:u=g
if(u!=null){t=u.c
B.Lw(d,u.b,e,t)}v=u
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
return A.b(B.aVZ(s),$async$a4F)
case 10:case 9:if(g){v=new A.O3(1,D.OO,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SO(d,e),$async$a4F)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.ST(!0,!0,d,e),$async$a4F)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Lw(d,D.xO,e,t)
v=new A.O3(p,D.xO,t)
x=1
break}v=B.c2f(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4F,w)},
SO(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4H(null,d,e),$async$SO)
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
return A.b(B.aVY(p,d.length,e),$async$SO)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2d(e,C.d.gI(d).a,r.b),$async$SO)
case 7:case 6:q=r.a
x=8
return A.b(B.Lw(d,D.OO,e,q),$async$SO)
case 8:v=new A.O3(d.length,D.OO,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
SP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lZ(D.m2)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4G(d,e),$async$SP)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c28(s,d,e,t),$async$SP)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aVZ(t),$async$SP)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qN(e,d),$async$SP)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SO(A.a([d],y.r),e),$async$SP)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SP,w)},
SR(){var x=0,w=A.j(y.H)
var $async$SR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fzt(),$async$SR)
case 2:x=3
return A.b(B.aMP(),$async$SR)
case 3:return A.h(null,w)}})
return A.i($async$SR,w)},
a4G(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aW0()
x=3
return A.b(B.c2c(e,d.a,u),$async$a4G)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4G,w)},
Lw(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lw=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OO&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4G(p,f),$async$Lw)
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
return A.b(B.c27(o,p,u,f),$async$Lw)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c28(o,p,f,t),$async$Lw)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c26(o,u,p,f),$async$Lw)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lw,w)},
aW3(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aW3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2e(e,d),$async$aW3)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.ST(!1,!0,d,e),$async$aW3)
case 4:u=g
if(u!=null){t=u.b
v=new A.O3(u.a,D.xO,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW3,w)},
c2e(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SN(d,s,0,1),$async$c2e)
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
return A.i($async$c2e,w)},
c2f(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4H(null,d,e),$async$c2f)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fOZ(u)
if(t.length>800){v=null
x=1
break}v=new A.O3(d.length,D.ddJ,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2f,w)},
amo(d,e,f){return B.hhu(d,e,f)},
hhu(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amo=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cT(g,"\ufeff"))g=J.me(g,1)
x=B.fzy(g)?3:4
break
case 3:x=5
return A.b(B.c29(g),$async$amo)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cT(g,"NGMYDOCSYNC4|")){s=C.a.i(J.me(g,13))
try{k=B.D5(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a5(a1)
$.ak.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cT(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.me(g,13))
u=9
x=12
return A.b(B.aVX(q),$async$amo)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SQ(p,a0)
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
case 11:case 7:if(J.cT(g,"NGMYDOCSYNC0|"))try{n=B.fzx(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SQ(n,a0)
v=k
x=1
break}catch(a1){m=A.a5(a1)
$.ak.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cT(g,"N2|")){v=B.GO(C.a.i(J.me(g,3)),d,a0)
x=1
break}if(J.cT(g,"NGMYDOCSYNC2|")){v=B.GO(C.a.i(J.me(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GO(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SQ(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amo,w)},
GO(d,e,f){return B.hhs(d,e,f)},
hhs(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GO=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cq(A.t(s)+"/manifest.json",0,null)
q=A.cq(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVP(r),$async$GO)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVP(A.cq(s,0,null)),$async$GO)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c1M(o,r,a1,n,a2),$async$GO)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.c1L(q),$async$GO)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SQ(l,a2),$async$GO)
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
return A.i($async$GO,w)},
a4H(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qN(f,r),$async$a4H)
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
return A.i($async$a4H,w)},
SQ(d,e){return B.hht(d,e)},
hht(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SQ=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.Aj(i,a3,d,k,l,o),$async$SQ)
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
return A.i($async$SQ,w)},
Lv:function Lv(d,e){this.a=d
this.b=e},
c2g:function c2g(){},
ZP(d){var x=A.K(d).ax.a===C.H,w=x?D.a9E:D.a80,v=x?D.ab0:C.c,u=x?C.aN:C.M,t=x?C.bP:C.al,s=x?D.a8X:C.aJ
return new A.aCR([w,s,v,u,t,x?C.eT:C.bU])},
h2W(d,e){var x=e?C.x.j(0.72):C.aV
return A.cb(null,x,!0,null,new B.fs1(e),d,null,!0,!0,y.N)},
c1W(d,e,f,g,h,i,j,k,l){return new B.SI(e,l,d,f,k,j,g,h,i,null)},
WT(d,e,f,g,h,i,j){return new B.b9n(g,h,j,e,i,d,f,null)},
fs1:function fs1(d){this.a=d},
WQ:function WQ(d,e){this.c=d
this.a=e},
aw3:function aw3(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cWj:function cWj(d){this.a=d},
cWh:function cWh(d){this.a=d},
cWi:function cWi(d){this.a=d},
bqx:function bqx(){},
SI:function SI(d,e,f,g,h,i,j,k,l,m){var _=this
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
azX:function azX(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dGS:function dGS(d){this.a=d},
dGf:function dGf(d,e){this.a=d
this.b=e},
dGg:function dGg(d,e){this.a=d
this.b=e},
dFP:function dFP(d,e,f){this.a=d
this.b=e
this.c=f},
dFO:function dFO(d){this.a=d},
dFQ:function dFQ(d,e){this.a=d
this.b=e},
dFV:function dFV(d,e,f){this.a=d
this.b=e
this.c=f},
dFU:function dFU(d){this.a=d},
dGG:function dGG(d,e){this.a=d
this.b=e},
dGH:function dGH(d){this.a=d},
dGc:function dGc(d,e,f){this.a=d
this.b=e
this.c=f},
dG9:function dG9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dFT:function dFT(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGj:function dGj(){},
dFZ:function dFZ(d){this.a=d},
dGD:function dGD(d,e){this.a=d
this.b=e},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGF:function dGF(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
dGb:function dGb(d,e){this.a=d
this.b=e},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGs:function dGs(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGt:function dGt(){},
dGu:function dGu(){},
dGv:function dGv(d,e){this.a=d
this.b=e},
dGx:function dGx(){},
dGy:function dGy(d){this.a=d},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGl:function dGl(d){this.a=d},
dGm:function dGm(d){this.a=d},
dGn:function dGn(d){this.a=d},
dGo:function dGo(d){this.a=d},
dGp:function dGp(d){this.a=d},
dFW:function dFW(){},
dFX:function dFX(d){this.a=d},
dFY:function dFY(d,e){this.a=d
this.b=e},
dFS:function dFS(d,e){this.a=d
this.b=e},
dFR:function dFR(d,e,f){this.a=d
this.b=e
this.c=f},
dGd:function dGd(d){this.a=d},
dGe:function dGe(d,e,f){this.a=d
this.b=e
this.c=f},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG3:function dG3(d){this.a=d},
dG0:function dG0(d,e,f){this.a=d
this.b=e
this.c=f},
dG4:function dG4(d){this.a=d},
dG5:function dG5(d){this.a=d},
dG6:function dG6(){},
dG8:function dG8(d,e){this.a=d
this.b=e},
dG1:function dG1(d){this.a=d},
dG_:function dG_(d,e,f){this.a=d
this.b=e
this.c=f},
dG2:function dG2(){},
dGi:function dGi(d){this.a=d},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGz:function dGz(d){this.a=d},
dGA:function dGA(d,e){this.a=d
this.b=e},
dGB:function dGB(d){this.a=d},
dGP:function dGP(d){this.a=d},
dGN:function dGN(d){this.a=d},
dGO:function dGO(d){this.a=d},
dGQ:function dGQ(){},
dGR:function dGR(d,e){this.a=d
this.b=e},
dGJ:function dGJ(d,e){this.a=d
this.b=e},
dGK:function dGK(d,e,f){this.a=d
this.b=e
this.c=f},
dGI:function dGI(d,e,f){this.a=d
this.b=e
this.c=f},
dGL:function dGL(d,e){this.a=d
this.b=e},
dGM:function dGM(d,e){this.a=d
this.b=e},
aw0:function aw0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9m:function b9m(d,e,f){this.c=d
this.d=e
this.a=f},
cWf:function cWf(){},
cWg:function cWg(){},
a9H:function a9H(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWD:function cWD(){},
cWC:function cWC(d){this.a=d},
WS:function WS(d,e,f){this.c=d
this.d=e
this.a=f},
aw5:function aw5(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWz:function cWz(d){this.a=d},
cWA:function cWA(d,e,f){this.a=d
this.b=e
this.c=f},
cWB:function cWB(d,e){this.a=d
this.b=e},
cWx:function cWx(d,e){this.a=d
this.b=e},
cWv:function cWv(d){this.a=d},
cWt:function cWt(d){this.a=d},
cWq:function cWq(d){this.a=d},
cWw:function cWw(d){this.a=d},
cWs:function cWs(d){this.a=d},
cWy:function cWy(d){this.a=d},
cWu:function cWu(d){this.a=d},
cWr:function cWr(d){this.a=d},
WP:function WP(d,e,f){this.c=d
this.d=e
this.a=f},
aw2:function aw2(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cWc:function cWc(d){this.a=d},
cWb:function cWb(d,e){this.a=d
this.b=e},
cWd:function cWd(d){this.a=d},
cWa:function cWa(d,e){this.a=d
this.b=e},
cWe:function cWe(d){this.a=d},
cW9:function cW9(d,e){this.a=d
this.b=e},
cW5:function cW5(d){this.a=d},
cW6:function cW6(d){this.a=d},
cW7:function cW7(d,e){this.a=d
this.b=e},
cW8:function cW8(d){this.a=d},
NG:function NG(d,e,f){this.c=d
this.d=e
this.a=f},
aw8:function aw8(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cWQ:function cWQ(d){this.a=d},
cWR:function cWR(d){this.a=d},
cWS:function cWS(d){this.a=d},
cWT:function cWT(d){this.a=d},
cWU:function cWU(d,e){this.a=d
this.b=e},
cWV:function cWV(d){this.a=d},
cWX:function cWX(d){this.a=d},
cWW:function cWW(d){this.a=d},
WU:function WU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aw6:function aw6(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cWM:function cWM(d,e){this.a=d
this.b=e},
cWN:function cWN(d,e){this.a=d
this.b=e},
cWE:function cWE(d,e,f){this.a=d
this.b=e
this.c=f},
cWF:function cWF(d){this.a=d},
cWG:function cWG(){},
cWL:function cWL(){},
cWH:function cWH(d,e){this.a=d
this.b=e},
cWI:function cWI(d,e){this.a=d
this.b=e},
cWJ:function cWJ(d,e){this.a=d
this.b=e},
cWK:function cWK(d,e){this.a=d
this.b=e},
a9F:function a9F(d,e){this.c=d
this.a=e},
cW4:function cW4(d){this.a=d},
WO:function WO(d){this.a=d},
aw1:function aw1(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WV:function WV(d,e){this.c=d
this.a=e},
aw7:function aw7(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cWP:function cWP(d){this.a=d},
cWO:function cWO(d){this.a=d},
b9n:function b9n(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hhv(){var x,w=$.oX(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aG(32)]
return"VT"+C.d.fL(v)},
Lx(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$Lx)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$Lx)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
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
return A.i($async$Lx,w)},
a4I(d){return B.hhw(d)},
hhw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4I)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_video_relay_v1",A.D(["relays",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4I)
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
return A.i($async$a4I,w)},
SS(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lx(),$async$SS)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.Z(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4I(s),$async$SS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SS,w)},
ST(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$ST=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bZ(),$async$ST)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bi(f,!0,y.U)
else{t=A.R(f).k("a4<1>")
u=A.z(new A.a4(f,new B.c2i(),t),t.k("E.E"))}if(u.length===0){v=null
x=1
break}s=B.hhv()
t=A.R(u).k("I<1,a1<n,aC>>")
r=A.z(new A.I(u,new B.c2j(s),t),t.k("ai.E"))
x=6
return A.b(B.Lx(),$async$ST)
case 6:q=i
J.aE(q,s,A.D(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4I(q),$async$ST)
case 7:x=8
return A.b(B.a4J(r,u,g,s),$async$ST)
case 8:v=new A.bkI(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ST,w)},
amp(d){var x=0,w=A.j(y.y),v,u,t
var $async$amp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lx(),$async$amp)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amp,w)},
c2k(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lx(),$async$c2k)
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
return A.i($async$c2k,w)},
a4J(d,e,f,g){return B.hhx(d,e,f,g)},
hhx(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4J=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.amn("media",r,new B.c2h(s,e,g),f,q),$async$a4J)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SS(g,A.D(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4J)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SS(g,A.D(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4J)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.ak.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SS(g,A.D(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4J)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4J,w)},
D5(d,e,f){return B.hhy(d,e,f)},
hhy(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.amp(b3),$async$D5)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kT,null,g),$async$D5)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amp(b3),$async$D5)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lx(),$async$D5)
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
r=a1.gG(a4)
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
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.op(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a7Y(a8.a,b0,"media",a8.d,a9).Bu(m)
k=A.cq(l,0,null)
x=17
return A.b(B.aVQ(k,n,o,s,b7),$async$D5)
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
a2=$.eM().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.op(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a7Y(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D5)
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
a0=A.dQ(A.Z(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4I(e),$async$D5)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D5,w)},
c2i:function c2i(){},
c2j:function c2j(d){this.a=d},
c2h:function c2h(d,e,f){this.a=d
this.b=e
this.c=f},
aMP(){var x=0,w=A.j(y.H),v,u
var $async$aMP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hsj=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aMP)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aMP)
case 3:u=$.fEw
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aMP)
case 4:$.fEw=$.hAl=$.hAm=null
return A.h(null,w)}})
return A.i($async$aMP,w)},
f7Y(d){var x=0,w=A.j(y.H),v,u
var $async$f7Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2g){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f7Z(new A.bM(u,y.aY))
x=3
return A.b(u.i0(0,C.hq,new B.f8_()),$async$f7Y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f7Y,w)},
hAj(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hhf(x):x},
fEA(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amr(u)
x=1
break}v=B.fzx(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEA,w)},
fEz(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.ams(u)
x=1
break}v=B.fzx(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEz,w)},
fnP(d){var x=0,w=A.j(y.T),v
var $async$fnP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ams(d),$async$fnP)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnP,w)},
bwH(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fEz(d),$async$bwH)
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
return A.i($async$bwH,w)},
eYv(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eYv=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SM(g)
x=1
break}if(d.gG(d)<=0){v=null
x=1
break}v=B.Aj(d.akH(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYv,w)},
EP(d,e,f){return B.hCy(d,e,f)},
hCy(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EP=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fEA(a1),$async$EP)
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
return A.b($.h4J().azW(D.d1Z,null),$async$EP)
case 4:l=d.fEw=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auT(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f8s(f,k,new B.f8t(f,a2,k,j,a0,p),a2,j,a0,p,new A.bM(t,y.ch))
x=5
return A.b(l.a4M(0,new B.UZ(r,"offer")),$async$EP)
case 5:d=l
x=7
return A.b(l.ahC(0),$async$EP)
case 7:x=6
return A.b(d.a4E(0,a4),$async$EP)
case 6:x=8
return A.b(B.f7Y(l),$async$EP)
case 8:x=9
return A.b(l.alq(),$async$EP)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hAj(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.D(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amt(m,h),$async$EP)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fOZ(h)
case 11:v=new A.bk0(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EP,w)},
f7Z:function f7Z(d){this.a=d},
f8_:function f8_(){},
f8t:function f8t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8s:function f8s(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f8r:function f8r(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hEk(d){switch(d){case"new":return D.dRn
case"checking":return D.dRo
case"connected":return D.dRq
case"completed":return D.dRp
case"failed":return D.dRs
case"disconnected":return D.dRt
case"closed":return D.aFH
case"count":return D.dRr}return D.aFH},
hEl(d){switch(d){case"new":return D.aFI
case"gathering":return D.dRu
case"complete":return D.a2g}return D.aFI},
hOg(d){switch(d){case"stable":return D.dRv
case"have-local-offer":return D.dRw
case"have-local-pranswer":return D.dRy
case"have-remote-offer":return D.dRx
case"have-remote-pranswer":return D.dRz
case"closed":return D.aFO}return D.aFO},
hMA(d){switch(d){case"new":return D.aFL
case"connecting":return D.aFM
case"connected":return D.aFN
case"closed":return D.a2h
case"disconnected":return D.aFK
case"failed":return D.aFJ}return D.a2h},
a6X:function a6X(d,e){this.a=d
this.b=e},
My:function My(d,e){this.a=d
this.b=e},
UY:function UY(d,e){this.a=d
this.b=e},
Mx:function Mx(d,e){this.a=d
this.b=e},
Dy:function Dy(d,e){this.a=d
this.b=e},
cd0:function cd0(){},
fBc(d){var x=new B.Dx()
x.a=d
x.b=!0
return x},
Dx:function Dx(){this.b=this.a=$},
a6W:function a6W(){},
aqB:function aqB(){},
UZ:function UZ(d,e){this.a=d
this.b=e},
fzt(){var x=0,w=A.j(y.H)
var $async$fzt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fzt,w)},
fzw(d,e,f){var x=0,w=A.j(y.T),v
var $async$fzw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lZ(D.m2))){v=null
x=1
break}v=B.fo3(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzw,w)},
fOZ(d){var x,w=F.a7x.a1H(C.dB.aE(d),null)
if(w.length===0){x=C.dB.aE(d)
return C.cM.gcq().aE(x)}return C.cM.gcq().aE(w)},
hhe(d){var x,w,v=C.cw.aE(d)
try{x=C.c0.c4(0,F.a7w.b6W(v,!1))
return x}catch(w){x=C.c0.c4(0,v)
return x}},
fzx(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hhe(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c0.c4(0,C.cw.aE(x))
return v}catch(u){return x}}return null},
hhf(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aF(s,"\n")},
hhg(){var x,w=$.oX(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aG(32)]
return"DS"+C.d.fL(v)},
aVW(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aVW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aVW)
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
return A.i($async$aVW,w)},
c20(d,e){return B.hhh(d,e)},
hhh(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c20=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c20)
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
return A.i($async$c20,w)},
aVZ(d){var x=0,w=A.j(y.y),v,u,t
var $async$aVZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVW(d),$async$aVZ)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVZ,w)},
aVY(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aVY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hhg()
r=C.a.i(f)
t=C.dB.aE(s)
x=3
return A.b(B.c20(u,A.D(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcq().aE(t),"usesRemaining",999999,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aVY)
case 3:if(!h){v=null
x=1
break}v=new A.YU("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVY,w)},
aVX(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aVX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aVW(o),$async$aVX)
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
return A.i($async$aVX,w)},
c21(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c21=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.bxB("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c21)
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
return A.i($async$c21,w)},
aW_(d){var x=0,w=A.j(y.h),v,u,t
var $async$aW_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GK(),$async$aW_)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW_,w)},
amk(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amk)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aW_(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amk,w)},
ami(d,e){var x=0,w=A.j(y.H)
var $async$ami=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$ami)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ami)
case 2:return A.h(null,w)}})
return A.i($async$ami,w)},
a4A(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4A=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4A)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GK(),$async$a4A)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.D(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4z(s),$async$a4A)
case 5:x=6
return A.b(B.ami(f,u),$async$a4A)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4A,w)},
a4B(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4B=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4B)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GK(),$async$a4B)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.Z(r,y.N,y.z)
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
return A.b(B.ami(g,q),$async$a4B)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4z(u),$async$a4B)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
a4C(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4C)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GK(),$async$a4C)
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
s=B.aVT(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aw(),$async$a4C)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.D(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.N(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4C,w)},
c22(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c22=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c22)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aC(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.Z(q,y.N,y.z)
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
return A.i($async$c22,w)},
GL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c22(d),$async$GL)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aW_(t),$async$GL)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amj(d),$async$GL)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aVT(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amj(d),$async$GL)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GL,w)},
amj(d){var x=0,w=A.j(y.H)
var $async$amj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amj)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amj)
case 2:return A.h(null,w)}})
return A.i($async$amj,w)},
aW0(){var x,w=$.oX(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aG(32)]
return C.d.fL(v)},
a4D(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fzy(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c25(d){return B.hhj(d)},
hhj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c25=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4D(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c25)
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
return A.i($async$c25,w)},
amm(d,e){return B.hhk(d,e)},
hhk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4D(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$amm)
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
return A.i($async$amm,w)},
c27(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c27=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4D(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amm(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c27)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c27,w)},
c26(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c26=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4D(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amm(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c26)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c26,w)},
c28(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c28=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4D(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amm(u,A.D(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c28,w)},
c29(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c29=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fzy(d)){v=null
x=1
break}x=3
return A.b(B.c25(d),$async$c29)
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
return A.i($async$c29,w)},
a4K(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4K)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a4K)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
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
return A.i($async$a4K,w)},
amq(d){return B.hhz(d)},
hhz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$amq)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_webrtc_signal_v1",A.D(["signals",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amq)
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
return A.i($async$amq,w)},
amr(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cT(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$amr)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4K(),$async$amr)
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
o=A.dQ(A.Z(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.N(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amq(s),$async$amr)
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
return A.i($async$amr,w)},
amt(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bZ(),$async$amt)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4K(),$async$amt)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.Z(s,r,q),r,q)
r=C.dB.aE(C.a.i(e))
q.m(0,"answer",C.cM.gcq().aE(r))
q.m(0,"answerAt",new A.N(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amq(u),$async$amt)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amt,w)},
ams(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ams=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$ams)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4K(),$async$ams)
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
return A.i($async$ams,w)},
alt(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alt=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q1)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alt)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fI),$async$alt)
case 7:q=g
o=q
o=o==null?null:J.f2(J.vY(o))
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
return A.i($async$alt,w)},
hKH(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fmt(d){return B.hKJ(d)},
hKJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fmt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Je(d,3600),$async$fmt)
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
return A.i($async$fmt,w)},
BC(d,e,f,g,h,i){var x=null
return B.hKG(d,e,f,g,h,i)},
hKG(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BC=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fP1(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fzA(r),$async$BC)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fmt(o),$async$BC)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4E(r),$async$BC)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIw)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JY(A.a([],g))
x=15
return A.b(d.eK(0,A.arq("GET",A.cq(n,0,null))).cJ(0,C.Dm),$async$BC)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4E(r),$async$BC)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Iy(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BC)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aW2(r,k),$async$BC)
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
case 10:i=B.SM(r)
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
return A.b(B.a4E(r),$async$BC)
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
aMy(d){return B.hKI(d)},
hKI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMy)
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
return A.i($async$aMy,w)}},D,T,L,U,V,W,X,M,Y,N
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
B.cd1.prototype={
azW(d,e){return this.czM(d,e)},
czM(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$azW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.D(["mandatory",A.Q(t,t),"optional",A.a([A.D(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.k2(A.cs(t)))
t=J.k(u)
v=B.hm3(C.cM.gcq().aE(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$azW,w)}}
B.b09.prototype={
brH(d){var x=this,w=x.w
w.onclose=A.h7(new B.ccX(x))
w.onopen=A.h7(new B.ccY(x))
w.onmessage=A.h7(new B.ccZ(x))
w.onbufferedamountlow=A.h7(new B.cd_(x))},
gdh(d){return this.x},
ae0(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ae0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dx()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fBc(J.f2(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ae0)
case 8:v=t.fBc(s.akH(f,0,null))
x=1
break
case 7:case 4:v=B.fBc(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ae0,w)}}
B.b0a.prototype={
brI(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.cd2(x)))
w.addEventListener("icecandidate",A.h7(new B.cd3(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.cd4(x)))
w.onicegatheringstatechange=A.h7(new B.cd5(x))
w.addEventListener("signalingstatechange",A.h7(new B.cd6(x)))
if(!$.fHX())w.addEventListener("connectionstatechange",A.h7(new B.cd7(x)))
w.addEventListener("negotiationneeded",A.h7(new B.cd8(x)))
w.addEventListener("track",A.h7(new B.cd9(x)))},
ahC(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k2(A.cs(A.Q(y.N,y.z)))),y.aQ),$async$ahC)
case 3:t=f
v=new B.UZ(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahC,w)},
a4E(d,e){return this.bhm(0,e)},
bhm(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4E)
case 2:return A.h(null,w)}})
return A.i($async$a4E,w)},
a4M(d,e){return this.bhC(0,e)},
bhC(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4M)
case 2:return A.h(null,w)}})
return A.i($async$a4M,w)},
alq(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.UZ(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alq,w)},
bx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx,w)}}
B.a9G.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WR.prototype={
S(){return new B.aw4()},
gd5(){return this.c}}
B.aw4.prototype={
Z(){this.a0()
this.aaR()},
aaR(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVU(u.e,u.c),$async$aaR)
case 2:t=e
if(v.c!=null)v.n(new B.cWn(v,t))
return A.h(null,w)}})
return A.i($async$aaR,w)},
Ok(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ok=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amf(t.e,t.c,!1),$async$Ok)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ek7)
x=1
break}x=4
return A.b(B.a4y(u.a.c,"individual"),$async$Ok)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3d(A.eI(new B.cWk(u),!1,null,y.H)),$async$Ok)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ok,w)},
HE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f6b(o),$async$HE)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4C(o.e,r,s,q),$async$HE)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.ehc)
x=1
break}x=5
return A.b(B.a4y(u.a.c,"member"),$async$HE)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3d(A.eI(new B.cWm(u),!1,null,y.H)),$async$HE)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HE,w)},
wU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4x(t.e,o,t.f,t.r,t.w,s),$async$wU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4y(u.a.c,"org_owner"),$async$wU)
case 4:x=5
return A.b(B.amk(u.a.c),$async$wU)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f6G(o),$async$wU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4A(s,t,o,q.c),$async$wU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.eh9)
x=1
break}x=10
return A.b(B.amk(u.a.c),$async$wU)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3d(A.eI(new B.cWl(u),!1,null,y.H)),$async$wU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wU,w)},
B(d){var x,w,v,u=this,t=null,s=A.K(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fzv(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.a9(0,C.G,C.aA.j(0.35),C.fz,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eBU,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h_,t,t,t),C.az,D.eTo,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bHg,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.li(new B.cWp(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aa7(C.eG,C.asQ,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc5_(),t),C.aa],v))
p.push(new B.aa7(C.o6,C.Zm,"Team Member","Sign in with your organization access code + password",u.gc5P(),t))
p.push(C.aa)
p.push(new B.aa7(C.afX,C.a_I,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5l(),t))
return A.cf(t,r,A.br(!0,A.cg(A.u(p,C.af,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adn,t,t,C.ag),!0,!1,C.ah,!0,!0),t,!1,!1,t,t)}}
B.aa7.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.G(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.er(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a_,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.C(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.or,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.K(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A2,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayy.prototype={}
B.aBF.prototype={}
B.j8.prototype={
lZ(d){var x=this.b,w=C.a.nY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gam3(){var x=this.d
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
b6s(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cyh(d){return this.b6s(null,d)},
azH(d){return this.b6s(d,null)}}
B.SG.prototype={
S(){return new B.azV(new A.cn(null,y.A))},
gd5(){return this.c}}
B.azV.prototype={
Z(){this.a0()
this.aaS()},
aaS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ai(u.a.c),$async$aaS)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dFL(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaS,w)},
aaT(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$aaT)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.el1)
case 1:return A.h(v,w)}})
return A.i($async$aaT,w)},
Xh(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xh=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alt(s.d,4),$async$Xh)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_my_code_"+m+".png"),$async$Xh)
case 8:q=e
o=s.c
if(o!=null)o.F(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
o=s.c
if(o!=null)o.F(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xh,w)},
aet(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aet=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7x("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aet)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aet,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===C.H,n=o?C.iT:C.oO,m=o?C.c:C.M,l=A.eB(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.as(new A.B(C.em,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aA.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.G(C.aA.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZM,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a_,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.acY,p,p,1/0)
v=A.m(20)
u=A.a([new A.a9(0,C.G,C.aA.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cg(A.u(A.a([x,C.ma,w,C.ka,new A.ep(A.p(p,A.pj(p,p,!1,B.hha(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ka,A.A(A.a([A.C(A.ey(M.Ai,C.R4,q.gbZd(),p),1),C.aw,A.C(A.dj(C.xh,C.a4x,q.gbZe(),A.bk(C.aA,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ey(L.Yf,D.ePB,q.gcjU(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JX,p,p,C.ag)
x=r}return A.cf(l,n,x,p,!1,!1,p,p)}}
B.SK.prototype={
S(){return new B.azY(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.azY.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GJ(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
Xi(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GJ(u.d.a.a)
if(t==null){u.n(new B.dGU(u))
x=1
break}u.n(new B.dGV(u))
s=u.a
r=s.c
x=3
return A.b(B.a4w(s.d,new B.dGW(u),t,r),$async$Xi)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dGX(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xi,w)},
a_m(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_m=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.n(new B.dGY(r))
u=4
q=J.fn(r.a.d)
x=7
return A.b(B.qN(r.a.c,q),$async$a_m)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dGZ(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aeZ(p,m,l,j,k),$async$a_m)
case 8:o=e
if(r.c!=null)r.n(new B.dH_(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a5(h)
if(r.c!=null)r.n(new B.dH0(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dH1(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_m,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===C.H,i=j?D.a9E:D.a80,h=j?D.ab0:C.c,g=j?C.aN:C.M,f=j?C.bP:C.al,e=j?D.a8X:C.aJ
i=[i,e,h,g,f,j?C.eT:C.bU]
x=A.K(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eB(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.w,k,0,A.a([C.aA.j(x?0.12:0.08),C.aA.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.G(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bwi,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aE,C.w,A.a([i[5].j(0.85),C.aA],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.C(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZM,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uK(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.beE()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.JQ,k,k,"",k,!0,new A.b2(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b2(4,A.m(18),new A.ay(C.aA,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ad,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dH2(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.G(i[1],C.r,1)
m=J.JC(l.a.d,4)
m=A.z(new A.I(m,new B.dH3(x,new A.aCR(i)),m.$ti.k("I<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.B(C.nj,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a1,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aA.j(x?0.16:0.1)
t=A.m(14)
s=A.G(C.aA.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.efL)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.C(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.ia,k,k,k,C.eF,k,k,k)],r))}e=A.C(A.cg(A.u(e,C.af,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bhw,k,k,C.ag),1)
u=l.f?k:l.gcjV()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(L.Yf,D.eQv,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.c9,k,new A.b5(q,C.W),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZf()
t=A.bk(C.aA,k,k,0,C.c,k,C.mv,k,new A.b5(A.m(16),C.W),k,k,k)
return A.cf(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mU(new B.dH4(),A.u(A.a([e,new A.B(D.bh1,A.u(A.a([s,C.P,i,C.aa,A.bJ(l.f?C.qN:D.eP0,u,t)],r),C.af,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UE,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ah,!0,!0)],r),k),k,!1,!1,k,k)}}
B.beE.prototype={
nU(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f4(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h1(C.bn,v.length),C.aL)}}
B.SH.prototype={
S(){return new B.azW()}}
B.azW.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,C.aZ,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.bb(x,C.aZ,C.aL),v)
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
aaU(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aaU=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dFM(r))
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
return A.b(B.a4B(p,m,n,o,C.a.i(l).length===0?null:l),$async$aaU)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.ekD)
s=[1]
x=4
break}p.F(y.q).f.P(D.ejg)
p=r.c
p.toString
A.a7(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dFN(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aaU,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax.a===C.H?C.iT:C.oO,q=A.eB(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eId,s,s,s,1,s,!0),p=A.p(s,D.bay,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.EN,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bD1,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCX,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bDb,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gbZg()
u=A.bk(C.aA,s,s,s,s,C.fV,s,s,s,s,s,s)
return A.cf(q,r,A.cg(A.u(A.a([p,C.d1,o,C.aa,x,C.aa,w,C.ma,A.bJ(t.r?C.qN:C.aL1,v,u)],y.p),C.af,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ag),s,!1,!1,s,s)}}
B.a9n.prototype={}
B.bqS.prototype={
a1X(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a1X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gG(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akH()))
x=3
return A.b(B.Pc(t,s),$async$a1X)
case 3:if(!e){$.ak.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a1X,w)},
gd5(){return this.a}}
B.Lv.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WQ.prototype={
S(){return new B.aw3(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aw3.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cWj(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZm(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZP(d),u=x.a.c,t=u?C.hm:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.G(C.aA.j(0.35),C.r,1),n=y.V,m=A.a([new A.a9(0,C.G,C.aA.j(u?0.25:0.12),C.fz,32)],n),l=A.p(w,T.aix,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.a9(0,C.G,C.aA.j(0.4),C.cv,16)],n),C.ajj,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uK(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqx()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.Dz,w,w,"",w,!0,new A.b2(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b2(4,A.m(16),D.aPW),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ad,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cWh(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lA,w,w,w,w)
f=f[1]
f=A.C(A.dU(C.mU,new B.cWi(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.c9,w,new A.b5(A.m(14),C.W),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.a9(0,C.G,C.aA.j(0.35),C.cD,12)],n)
g=y.p
return A.eC(w,C.K,new A.d3(Q.I8,A.bQ(new A.B(C.wt,A.u(A.a([l,C.aO,k,C.P,j,C.dW,i,C.dW,A.A(A.a([f,C.aw,A.C(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dME,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZl(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LG,C.n),C.b7),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b7),w),w,w,w,C.JZ,C.cZ,w,w,w)}}
B.bqx.prototype={
nU(d,e){return e.ahx(e.a.toUpperCase())}}
B.SI.prototype={
S(){return new B.azX(A.a([],y.r),A.aZ(y.N))},
gd5(){return this.c}}
B.azX.prototype={
Z(){var x=this
x.a0()
x.rQ()
x.w=A.dE(C.iV,new B.dGS(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SR()
this.a2()},
Zf(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lu(u.a.c),$async$Zf)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zr(u.a.c),$async$Zf)
case 4:u.n(new s.dGf(u,e))
u.hL("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zf,w)},
rQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lu(u.a.c),$async$rQ)
case 3:t=e
x=4
return A.b(B.zr(u.a.c),$async$rQ)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dGg(u,s))
if(t>0)u.hL("Received "+A.t(t)+" file(s) via My Code.")
u.LQ(u.d)
B.Ai(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rQ,w)},
LQ(d){return this.bvw(d)},
bvw(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4G(r,u.a.c),$async$LQ)
case 8:p=f
if(u.c==null){x=1
break}new B.dFP(u,r,p).$0()
u.c.e2()
case 7:if(!(C.a.a_(r.c,"video/")||r.lZ(D.m2))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SP(r,u.a.c),$async$LQ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zr(u.a.c),$async$LQ)
case 12:u.n(new o.dFQ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LQ,w)},
Mb(d){return this.bBv(d)},
bBv(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4G(d,u.a.c),$async$Mb)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dFV(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$Mb)
case 6:u.hL("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$Mb)
case 7:u.hL("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Mb,w)},
hL(d){var x=null,w=this.c
if(w==null)return
w.F(y.q).f.P(A.b0(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rR(d,e){return this.cu0(d,e)},
cu0(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGG(r,e))
u=3
x=6
return A.b(d.$0(),$async$rR)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dGH(r))
$.eJ.lU()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rR,w)},
gaQo(){var x=this.a
return x.f||x.r||x.w},
GG(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQo()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c1Z(s,n,r,q,o,t),$async$GG)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hL("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.ffZ(o,u.a.c),$async$GG)
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
return A.b(B.BE(s,o,r,q,n,t),$async$GG)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GG,w)},
Yl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amk(u.a.c),$async$Yl)
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
return A.b(A.a7(t,!1).cr(A.eI(new B.dGc(u,r,q),!1,null,y.H)),$async$Yl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yl,w)},
Zq(d){return this.cdJ(d)},
cdI(){return this.Zq(1)},
cdJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQo()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amh(u.a.c),$async$Zq)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zq,w)},
a8Y(d,e,f){return this.bRy(d,e,f)},
bRy(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a8Y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL(e)
x=1
break}x=3
return A.b(u.rR(new B.dG9(u,d,null,e,f),"Uploading\u2026"),$async$a8Y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8Y,w)},
bvF(){B.h2e(!1,new B.dFT(this))
return},
cix(){this.n(new B.dGk(this))},
auq(){var x=0,w=A.j(y.H),v=this
var $async$auq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvF()
return A.h(null,w)}})
return A.i($async$auq,w)},
a8U(){var x=0,w=A.j(y.H),v=this
var $async$a8U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dFZ(v),"Importing\u2026"),$async$a8U)
case 2:return A.h(null,w)}})
return A.i($async$a8U,w)},
Qi(d){return this.ctu(d)},
ctu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lZ(D.m2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cr(A.eI(new B.dGD(u,d),!1,null,y.H)),$async$Qi)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lZ(D.NA)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cr(A.eI(new B.dGE(u,d),!1,null,y.H)),$async$Qi)
case 8:x=1
break
case 7:x=u.bSf(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cr(A.eI(new B.dGF(u,d),!1,null,y.H)),$async$Qi)
case 11:x=1
break
case 10:u.hL("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qi,w)},
bSf(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.coe,C.a.aV(x,w+1).toLowerCase())},
acd(d){return this.c53(d)},
c53(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lZ(D.m2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cr(A.eI(new B.dGa(u,d),!1,null,y.H)),$async$acd)
case 5:x=1
break
case 4:u.n(new B.dGb(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acd,w)},
PH(d){return this.clk(d)},
clk(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(u.rR(new B.dGw(u,d),"Preparing QR\u2026"),$async$PH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PH,w)},
aeS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aeS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dGx(),A.R(t).k("I<1,n>")).fF(0)}t=u.d
s=A.R(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dGy(q),s),s.k("E.E"))
if(r.length===0){u.hL("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PH(r),$async$aeS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeS,w)},
aeL(d){return this.ckU(d)},
ckU(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZP(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,new B.dGq(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeL)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qi(d)
break
case"qr":u.PH(A.a([d],y.r))
break
case"send_my_code":u.c5E(A.a([d],y.r))
break
case"save":u.ae7(d)
break
case"delete":u.Ho(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeL,w)},
Vm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dFW(),A.R(t).k("I<1,n>")).fF(0)}t=u.d
s=A.R(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dFX(q),s),s.k("E.E"))
if(r.length===0){u.hL("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$Vm)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dFY(u,r),"Preparing file\u2026"),$async$Vm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vm,w)},
adk(d){return this.cce(d)},
cce(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h2W(d,!1),$async$adk)
case 3:s=f
r=s==null
q=B.a4D(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hL("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adk,w)},
acj(){var x=0,w=A.j(y.H),v=this,u
var $async$acj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fny(u,v.a.c),$async$acj)
case 2:return A.h(null,w)}})
return A.i($async$acj,w)},
bvE(){B.h2e(!1,new B.dFS(this,null))
return},
HD(d,e){return this.c5F(d,e)},
aVS(d){return this.HD(null,d)},
c5E(d){return this.HD(d,null)},
c5F(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.R(p).k("a4<1>")
k=A.z(new A.a4(p,new B.dGd(s),o),o.k("E.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wf.c2().ak3(!0,C.Wn,!1),$async$HD)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.rR(new B.dGe(l,s,r),"Preparing\u2026"),$async$HD)
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
return A.b(B.byH(p,l,e,s.a.c),$async$HD)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HD,w)},
GV(d){return this.bRl(d)},
bRl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hh9(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aVS(t),$async$GV)
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
return A.b(u.rR(new B.dG7(u,d),"Receiving video\u2026"),$async$GV)
case 11:x=1
break
case 10:x=12
return A.b(u.rR(new B.dG8(u,d),"Receiving\u2026"),$async$GV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GV,w)},
CV(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Bx()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adk(t),$async$CV)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GV(s),$async$CV)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cr(A.eI(new B.dGi(u),!1,null,y.N)),$async$CV)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rQ(),$async$CV)
case 10:x=1
break
case 9:x=11
return A.b(u.GV(C.a.i(r)),$async$CV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CV,w)},
ae7(d){return this.ch8(d)},
ch8(d){var x=0,w=A.j(y.H),v=this
var $async$ae7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGh(v,d),"Saving\u2026"),$async$ae7)
case 2:return A.h(null,w)}})
return A.i($async$ae7,w)},
Ho(d){return this.bDN(d)},
bDN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ho=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ho)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c21(t),$async$Ho)
case 6:case 5:s=d.a
x=7
return A.b(B.D4(u.a.c,s),$async$Ho)
case 7:u.r.W(0,s)
x=8
return A.b(u.rQ(),$async$Ho)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ho,w)},
aeY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZP(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,new B.dGC(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aeY)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acj()
break
case"import":u.a8U()
break}case 1:return A.h(v,w)}})
return A.i($async$aeY,w)},
bZj(d){var x=d.c
if(C.a.a_(x,"video/")||d.lZ(D.m2))return C.pa
if(C.a.a_(x,"image/")||d.lZ(D.NA))return C.rV
if(C.a.q(x,"pdf"))return E.Lc
return D.agm},
B(d){var x,w,v=this,u=null,t=B.ZP(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EG,u,u,u,new B.dGN(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwO,u,u,u,v.e?u:v.gc5m(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gciw()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.brc:E.agM,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Yc,u,u,u,v.e?u:v.gbZk(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nr,u,u,u,v.e?u:v.gaWV(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bys,u,u,u,v.e?u:new B.dGO(v),u,u,u,u,"More options",u))
q=A.eB(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.li(new B.dGP(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.w,u,0,A.a([p.j(A.K(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.w,u,0,A.a([C.aA.j(A.K(d).ax.a===C.H?0.12:0.08),C.aA.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mP(s[1].j(0.5),u,C.aA,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.C(new B.aw0(C.j0,s,!0,t,w?u:v.gcll(),u),1)
x.push(new A.B(D.bfO,A.mU(new B.dGQ(),A.A(A.a([s,C.aw,A.C(new B.aw0(C.uu,"Export",!1,t,w?u:v.gbHb(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ic,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9m(t,v.e?u:v.gaWV(),u)
else s=A.jT(!0,u,u,new B.dGR(v,t),s,u,D.bfG,u,u,!1,!1)
x.push(A.C(s,1))
return A.cf(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aw0.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aA,t,t,0,C.c,t,C.uc,t,new A.b5(s,C.W),t,t,t)
return A.dj(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uc,t,new A.b5(s,C.W),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ey(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eB,t,t,t),u.r,v)}}
B.b9m.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aA.j(0.16)],y.O),t=A.G(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mU(new B.cWf(),new A.B(E.VA,A.u(A.a([A.mU(new B.cWg(),A.p(x,A.V(C.wN,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aE,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.id,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dj(C.nr,D.eTG,this.d,A.bk(C.aA,x,x,x,C.c,x,C.Vv,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zr,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9H.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aA.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lZ(D.m2))p=D.cTB
else{p=C.a.a_(p,"image/")||i.lZ(D.NA)
n=y.O
p=p?A.a([C.cW,C.aA],n):A.a([C.aK.j(0.85),C.aA.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aE,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gam3()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lZ(D.m2))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.C(A.u(A.a([q,C.au,A.d(C.d.aF(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fx,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lZ(D.m2)))l.push(A.fxi(C.aA,!1,j,j,j,!1,j,j,new B.cWC(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.no,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mU(new B.cWD(),new A.B(C.e3,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.B(C.V0,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ay(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WS.prototype={
S(){return new B.aw5()},
gd5(){return this.c}}
B.aw5.prototype={
Z(){this.a0()
this.wM()},
p(){B.hho(this.e)
this.a2()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qN(o.c,o.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aD.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hhr(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hhq(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWz(s))
x=1
break}s.n(new B.cWA(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a5(l)
if(s.c==null){x=1
break}s.n(new B.cWB(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
a_l(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qN(t.c,t.d),$async$a_l)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ehJ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aeZ(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_l)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_l,w)},
bRe(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k7(u,C.B,v,new B.cWx(w,t),C.fG,C.dp,!0,v,v,v,v)
else if(t!=null&&!C.aD.gah(t))x=A.fC(t,C.B,v,new B.cWy(w),C.fG,C.dp,!0,v,!1,v,v)
else return C.bF
return A.tH(C.ah,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZP(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Aj,u,u,u,v.gb_D(),u,u,u,u,"Share / save",u))
r=A.eB(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ct
else{q=v.r
if(q!=null)t=new A.B(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.B(C.em,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dj(C.Aj,D.eE1,v.gb_D(),A.bk(C.aA,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRe()}return A.cf(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WP.prototype={
S(){return new B.aw2(A.afK(),C.bt,C.bt)},
gd5(){return this.c}}
B.aw2.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fl(w,A.a2(w).k("fl<1>")).hX(new B.cWc(v))
x.gcGT().hX(new B.cWd(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fl(x,A.a2(x).k("fl<1>"))}if(x==null)x=C.aVK
x.hX(new B.cWe(v))
v.wM()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qN(p.c,p.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cW5(s))
x=1
break}x=8
return A.b(s.d.AZ(0,new A.a0Z(r,s.a.d.c)),$async$wM)
case 8:if(s.c==null){x=1
break}s.n(new B.cW6(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
if(s.c==null){x=1
break}s.n(new B.cW7(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
Xj(){var x=0,w=A.j(y.H),v=this,u
var $async$Xj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$Xj)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xj)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xj,w)},
aOl(d){var x=d.a
return C.a.aU(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZP(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eB(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ct
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bsa,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LG,C.n),o,88,o,o,o,o,o,88)
t=A.m8(C.aA,o,o,m,0,new B.cW8(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOl(p.w)+" / "+p.aOl(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aA,o,o,o,o,D.eek,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.wZ:C.j_,o,o,o,o,o)
x=A.u(A.a([u,C.ka,t,x,C.d1,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZn(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cf(v,w,A.as(new A.B(C.ug,x,o),o,o,o),o,!1,!1,o,o)}}
B.NG.prototype={
S(){return new B.aw8()},
gd5(){return this.c}}
B.aw8.prototype={
Z(){this.a0()
this.NG()},
NG(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fzw(o.c,o.d,new B.cWQ(s)),$async$NG)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cWR(s))
x=1
break}s.e=r
q=O.hDm(r)
if(q==null){s.n(new B.cWS(s))
x=1
break}s.d=q
q.aJ(0,s.gaVH())
x=8
return A.b(q.hW(0).cJ(0,C.rC),$async$NG)
case 8:if(s.c==null){x=1
break}s.n(new B.cWT(s))
x=9
return A.b(q.p5(0),$async$NG)
case 9:q.rr(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
if(s.c==null){x=1
break}s.n(new B.cWU(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NG,w)},
c3I(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cWV(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BH(0,x.gaVH())
w=x.d
if(w!=null)w.p()
B.hMO(x.e)
x.a2()},
aaX(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aW1(u.c,u.d),$async$aaX)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aaX,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZP(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eB(A.a([A.aF(t,t,t,t,C.oc,t,t,t,u.gbZh(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i5(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ct
else{q=u.r
if(q!=null)s=new A.B(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afe(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fN(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.yZ(s,t),A.aI(t,A.Fj(A.p(t,A.V(q?H.wZ:C.j_,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b9,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cWX(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cf(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WU.prototype={
S(){return new B.aw6(new A.cn(null,y.A))}}
B.aw6.prototype={
gctL(){var x,w,v=this.a
if(v.e!==D.OP)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcts(){var x,w,v=this.a
if(v.e!==D.xO)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gctL()
if(x!=null){v.OJ(x)
v.e=A.dE(R.Dp,new B.cWM(v,x))}w=v.gcts()
if(w!=null){v.OI(w)
v.f=A.dE(C.fZ,new B.cWN(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OI(d){return this.caw(d)},
caw(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amp(d),$async$OI)
case 3:t=f
x=4
return A.b(B.c2k(d),$async$OI)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWE(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
OJ(d){return this.cax(d)},
cax(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fnP(d),$async$OJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwH(t),$async$OJ)
case 4:if(u.c==null){x=1
break}u.n(new B.cWF(u))
u.c.F(y.q).f.P(D.aI7)
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
gbW5(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZi(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_6(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Bx()){t=u.c
if(t!=null)t.F(y.q).f.P(D.ekN)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cr(A.eI(new B.cWG(),!1,null,y.N)),$async$a_6)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwH(s),$async$a_6)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aI7)
case 1:return A.h(v,w)}})
return A.i($async$a_6,w)},
a6U(d){return this.bBw(d)},
bBw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aF(t,", "))),$async$a6U)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b0(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6U,w)},
aaV(d){return this.bBg(d)},
bBg(d){var x=0,w=A.j(y.H),v=this
var $async$aaV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$aaV)
case 2:if(d.e!=null)d.F(y.q).f.P(D.eib)
return A.h(null,w)}})
return A.i($async$aaV,w)},
a_1(d){return this.cha(d)},
cha(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alt(s.d,4),$async$a_1)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_doc_share_qr.png"),$async$a_1)
case 8:q=f
if(d.e!=null)d.F(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a5(n)
if(d.e!=null)d.F(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_1,w)},
gaRq(){var x,w=this.a
if(w.e!==D.FO)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6R(d){return this.bBp(d)},
bBp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRq()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6R)
case 3:if(d.e!=null)d.F(y.q).f.P(D.ejN)
case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
aaW(){var x=0,w=A.j(y.H),v=this,u
var $async$aaW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SR(),$async$aaW)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$aaW,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZP(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FO&&i!==D.OP&&i!==D.xO
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eB(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FO||t===D.OP||t===D.xO?l:A.aF(l,l,l,l,C.kz,l,l,l,m.gaU_(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.G(C.aA.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pj(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbW5(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FO){t=C.aA.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gbZi(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aF(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bC4,D.eMq,new B.cWH(m,d),l)],p))}if(m.a.e===D.FO&&m.gaRq()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a1,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.byN,D.eJt,new B.cWI(m,d),l)],p))
if(m.a.e===D.xO){x=(m.w?C.dr:C.aA).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cw:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}if(m.a.e===D.OP){x=(m.r?C.dr:C.aA).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cw:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l),C.aa,A.dj(D.buE,D.ePj,m.gchy(),A.bk(C.aA,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.cf(v,w,new A.B(C.a8,A.u(A.a([A.C(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.A(A.a([A.C(A.ey(M.Ai,C.R4,new B.cWJ(m,d),l),1),C.aw,A.C(A.dj(C.xh,C.a4x,new B.cWK(m,d),A.bk(C.aA,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bJ(C.yi,m.gaU_(),A.bk(C.aK,l,l,l,l,C.fV,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWL(),y.C)}}
B.a9F.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cg(A.u(A.a([w,C.aO,A.p(x,A.pj(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ag)
return A.ei(A.a([A.bJ(C.BQ,new B.cW4(d),x)],u),x,x,C.mj,v,x,x,x,x,D.eD3,x)}}
B.WO.prototype={
S(){return new B.aw1(A.y7(C.wa,C.n1,C.t5))}}
B.aw1.prototype={
p(){this.d.p()
this.a2()},
at9(d){var x,w,v,u,t
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
return A.cf(A.eB(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eJT,x,x,x,1,x,!0),C.x,A.y6(this.d,C.bM,this.gat8()),x,!1,!1,x,x)}}
B.WV.prototype={
S(){return new B.aw7(A.y7(C.wa,C.n1,C.t5))},
gd5(){return this.c}}
B.aw7.prototype={
bSh(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acG(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q9("text/plain"),$async$acG)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.ekH)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acG,w)},
a7E(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h2W(p,!0),$async$a7E)
case 3:t=e
p=t==null
s=B.a4D(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.ehj)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7E,w)},
p(){this.d.p()
this.a2()},
at9(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSh(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahE,v,v,v,w.gbGK(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yj,v,v,v,w.gc7X(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eB(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rT:P.KW,v,v,v,v,v),v,v,v,new B.cWP(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eQ4,v,v,v,1,v,!0)
u=A.y6(w.d,C.bM,w.gat8())
x=A.m(20)
return A.cf(t,C.x,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.G(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dR4],s),v),v,!1,!1,v,v)}}
B.b9n.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nX
else x=s.w?C.aA:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aA.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nX:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.B(C.VG,A.A(A.a([u,C.ba,A.C(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ek,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a6X.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.My.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UY.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mx.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dy.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cd0.prototype={}
B.Dx.prototype={}
B.a6W.prototype={}
B.aqB.prototype={}
B.UZ.prototype={}
var z=a.updateTypes(["au<~>()","S(j8)","n(j8)","SI(Y)","~()","WR(Y)","H(H,j8)","NG(Y)","~(lC)","cp(Dx)","au<j8?>(@)","SG(Y)","SK(Y)","B(j8)","j8(@)","a1<n,@>(j8)","WQ(Y)","SH(Y)","WS(Y)","WP(Y)","WU(Y)","a9F(Y)","al<j8>()","WV(Y)","a9H(Y,H)","WO(Y)","a1<n,aC>(j8)","cp(UY)","cp(a6W)","au<cp>(Dx)"])
B.ccX.prototype={
$1(d){var x=this.a
x.x=D.aFG
x.y.H(0,D.aFG)},
$S:68}
B.ccY.prototype={
$1(d){var x=this.a
x.x=D.aFF
x.y.H(0,D.aFF)},
$S:68}
B.ccZ.prototype={
$1(d){var x=this.a
x.ae0(A.aLj(d.data)).bw(new B.ccW(x),y.b)},
$S:68}
B.ccW.prototype={
$1(d){var x=this.a
x.z.H(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cd_.prototype={
$1(d){},
$S:68}
B.cd2.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hm2(d.channel))},
$S:15}
B.cd3.prototype={
$1(d){},
$S:15}
B.cd4.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hEk(w.iceConnectionState)
x.cx=w
if($.fHX())switch(w.a){case 0:x.cy=D.aFL
break
case 1:x.cy=D.aFM
break
case 3:x.cy=D.aFN
break
case 5:x.cy=D.aFJ
break
case 6:x.cy=D.aFK
break
case 7:x.cy=D.a2h
break
default:break}},
$S:152}
B.cd5.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hEl(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:152}
B.cd6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hOg(w.signalingState)},
$S:152}
B.cd7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hMA(w.connectionState)},
$S:152}
B.cd8.prototype={
$1(d){},
$S:152}
B.cd9.prototype={
$1(d){},
$S:15}
B.f2X.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wb.q(x.objectStoreNames,"blobs")
if(!w)C.w7.Jc(x,"blobs")},
$S:180}
B.fnm.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uI.f1(this.b)
$.eJ.lU()
this.c.$1(d)},
$S:435}
B.fno.prototype={
$1(d){return this.a.$1(B.huI(this.b,this.c))},
$S:30}
B.fnn.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fnl.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fnB.prototype={
$1(d){var x=this
return B.fTM(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fnC.prototype={
$1(d){var x=this
return B.fTM(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f4f.prototype={
$1(d){var x=this
return B.c1W(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWn.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWk.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1W(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWm.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1W(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWl.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1W(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWp.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.A(A.a([A.aF(x,x,x,x,D.btg,x,x,x,new B.cWo(d),x,x,x,x,x,x),A.C(A.Dj(D.Nm,!0,x,C.Xm,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nm,x,g,C.adG,0,e,f)},
$C:"$4",
$R:4,
$S:406}
B.cWo.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6e.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.en,y.o).w,t=this.a,s=t?C.hm:C.c,r=A.m(28),q=A.p(v,D.baR,C.h,v,v,D.aRx,v,v,v,v,D.adx,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b2(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxm,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.B(new A.L(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.B(C.zF,A.u(A.a([o,C.aa,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b2(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahS,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.A(A.a([A.C(A.dU(C.de,new B.f6c(d),v),1),C.aw,A.C(A.bJ(D.eIw,new B.f6d(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JG,v,v,v,v),v)},
$S:60}
B.f6c.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6d.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eiq)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayy(v,x))},
$S:0}
B.f6I.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.en,y.o).w,u=x.a,t=u?C.hm:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.B(new A.L(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.baH,C.h,w,w,D.aST,w,w,w,w,D.adx,w,w,1/0),new A.B(C.zF,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fEl(u,"Organization name",C.E2,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fEl(u,"Access code",C.mC,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fEl(u,"Member password",N.EB,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bJ(D.eQ8,new B.f6H(r,q,p,d),A.bk(C.aA,w,w,w,w,C.fV,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JG,w,w,w,w),w)},
$S:60}
B.f6H.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eiv)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBF(u,x,w))},
$S:0}
B.c1N.prototype={
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
p=C.a.a_(j,"http")?A.cq(j,0,null):s.b.aN(j)
u=4
x=7
return A.b(A.uq(p,null).cJ(0,C.UD),$async$$1)
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
B.c1T.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1U.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c1V.prototype={
$1(d){return d.b},
$S:z+2}
B.c1P.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1Q.prototype={
$1(d){return d.b},
$S:z+2}
B.c1O.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c1R.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c1S.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fnz.prototype={
$1(d){return new B.SG(this.a,null)},
$S:z+11}
B.fnA.prototype={
$1(d){return new B.SK(this.a,this.b,this.c,null)},
$S:z+12}
B.dFL.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dGU.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dGV.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dGW.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dGT(x,d))},
$S:2}
B.dGT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGY.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dGZ.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dH_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dH0.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dH1.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dH4.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:105}
B.dH2.prototype={
$1(d){var x=this.a
return x.f?null:x.Xi()},
$S:2}
B.dH3.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aA.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lZ(D.NA))s=C.rV
else s=C.a.a_(s,"video/")||d.lZ(D.m2)?C.pa:D.agm
x=this.b.a
w=y.p
return new A.B(C.lm,A.A(A.a([A.p(v,A.V(s,C.aA,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.C(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gam3(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dFM.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dFN.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c1X.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.c1Y.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.fo5.prototype={
$2(d,e){return e===this.a},
$S:296}
B.f0a.prototype={
$1(d){return J.k(d)},
$S:17}
B.f4r.prototype={
$1(d){var x=this.b
B.hsR(C.DP.ga3v(this.a)).bw(x.gcwG(x),y.H)},
$S:124}
B.f4s.prototype={
$1(d){return this.a.cZ(0,null)},
$S:124}
B.f4t.prototype={
$0(){return null},
$S:11}
B.c2b.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f4u.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Z(y.f.a(d),y.N,y.z),o=p.h(0,"id")
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
B.f8l.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f38.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f39.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2g.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.fs1.prototype={
$1(d){return new B.WQ(this.a,null)},
$S:z+16}
B.cWj.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:9}
B.cWh.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cWi.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGS.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zf()},
$S:14}
B.dGf.prototype={
$0(){var x=J.bzJ(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGg.prototype={
$0(){var x=J.bzJ(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFP.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFO(this.b))
if(w>=0){x=x.d
x[w]=x[w].azH(this.c)}},
$S:0}
B.dFO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFQ.prototype={
$0(){var x=J.bzJ(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFV.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFU(this.b))
if(w>=0){x=x.d
x[w]=x[w].azH(this.c)}},
$S:0}
B.dFU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGG.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dGH.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dGc.prototype={
$1(d){return new B.SH(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dG9.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GG(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SL(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rQ(),$async$$0)
case 5:s=J.a6(t)
x=s.gcg(t)?6:7
break
case 6:x=8
return A.b(r.Zq(s.gG(t)),$async$$0)
case 8:case 7:r.hL(s.gah(t)?u.d:u.e+" "+s.gG(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFT.prototype={
$1(d){this.a.a8Y(d,"No files selected.","Added")},
$S:435}
B.dGk.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.I(x,new B.dGj(),A.R(x).k("I<1,n>")))},
$S:0}
B.dGj.prototype={
$1(d){return d.a},
$S:z+2}
B.dFZ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wf.c2().cIN(C.Wn,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
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
return A.b(B.amo(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.hL("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rQ(),$async$$0)
case 9:o.hL("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dGD.prototype={
$1(d){return new B.NG(this.a.a.c,this.b,null)},
$S:z+7}
B.dGE.prototype={
$1(d){return new B.WS(this.a.a.c,this.b,null)},
$S:z+18}
B.dGF.prototype={
$1(d){return new B.WP(this.a.a.c,this.b,null)},
$S:z+19}
B.dGa.prototype={
$1(d){return new B.NG(this.a.a.c,this.b,null)},
$S:z+7}
B.dGb.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.H(0,w)},
$S:0}
B.dGw.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GG(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4F(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hL("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cdI(),$async$$0)
case 5:x=6
return A.b(p.rQ(),$async$$0)
case 6:r=A.R(t).k("I<1,n>")
r=new A.I(new A.I(t,new B.dGs(p),r),new B.dGt(),r.k("I<ai.E,n>")).bZ(0,new B.dGu())
q=A.z(r,r.$ti.k("E.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cr(A.eI(new B.dGv(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SR(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGs.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dGr(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dGr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGt.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dGu.prototype={
$1(d){return d.length!==0},
$S:3}
B.dGv.prototype={
$1(d){var x=this.a
return new B.WU(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dGx.prototype={
$1(d){return d.a},
$S:z+2}
B.dGy.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGq.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aA.j(0.35),q=A.as(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gam3(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lZ(D.m2)?C.rX:C.oa
p=!x||p.lZ(D.m2)?"Play video":"View"
return A.bQ(A.br(!0,new A.B(C.zB,A.u(A.a([q,o,t,C.az,B.WT(!1,u,!1,w,p,new B.dGl(d),v),B.WT(!1,u,!1,C.j0,"Share via QR",new B.dGm(d),"Letters/numbers QR code"),B.WT(!1,u,!1,D.Xr,"Send to their Code",new B.dGn(d),"Enter someone else's personal code"),B.WT(!1,u,!1,C.hf,"Download / save",new B.dGo(d),v),C.ar,B.WT(!1,u,!0,C.e4,"Delete",new B.dGp(d),v)],y.p),C.af,v,C.e,C.R,0,C.p),v),!0,!1,C.ah,!0,!0),new A.o(s,v,new A.c2(new A.ay(r,1,C.r,-1),C.W,C.W,C.W),C.kh,v,v,C.n),C.b7)},
$S:524}
B.dGl.prototype={
$0(){A.a7(this.a,!1).K("view")
return null},
$S:0}
B.dGm.prototype={
$0(){A.a7(this.a,!1).K("qr")
return null},
$S:0}
B.dGn.prototype={
$0(){A.a7(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dGo.prototype={
$0(){A.a7(this.a,!1).K("save")
return null},
$S:0}
B.dGp.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
B.dFW.prototype={
$1(d){return d.a},
$S:z+2}
B.dFX.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFY.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4H(null,v.b,u.a.c),$async$$0)
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
B.dFS.prototype={
$1(d){var x=this.a
x.rR(new B.dFR(x,d,this.b),"Preparing\u2026")},
$S:435}
B.dFR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hL("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SL(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.hL("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byH(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGd.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dGe.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fzz(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.H(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG7.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EP(new B.dG3(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hL("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dG4(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dG5(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dm,new B.dG6()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hL("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rQ(),$async$$0)
case 9:s.hL("Received "+q.gG(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG3.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dG0(x,d,e))},
$S:140}
B.dG0.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dG4.prototype={
$1(d){return new B.a9F(this.a.a,null)},
$S:z+21}
B.dG5.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dG6.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dG8.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GJ(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4v(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aVS(B.GJ(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amo(new B.dG1(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.fzy(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hL(q)
x=1
break}x=10
return A.b(s.rQ(),$async$$0)
case 10:o=J.cB(r)
p=o.eC(r,new B.dG2()).gG(0)
s.hL(p>0?"Received "+p+" video(s).":"Restored "+o.gG(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG1.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dG_(x,d,e))},
$S:140}
B.dG_.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dG2.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.dGi.prototype={
$1(d){return new B.WV(this.a.a.c,null)},
$S:z+23}
B.dGh.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aW1(u.a.c,v.b),$async$$0)
case 2:t.hL(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGC.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aA.j(0.35)
return A.bQ(A.br(!0,new A.B(C.zB,A.u(A.a([A.as(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.WT(!0,w,!1,C.mC,"My Code",new B.dGz(d),"Your personal code & QR \u2014 others send docs to you"),B.WT(!1,w,!1,D.Xr,"Send to their Code",new B.dGA(this.a,d),"Enter someone else's 5-digit code + letter"),B.WT(!1,w,!1,S.x6,"Import backup",new B.dGB(d),".ngmydoc file from another device")],y.p),C.af,x,C.e,C.R,0,C.p),x),!0,!1,C.ah,!0,!0),new A.o(u,x,new A.c2(new A.ay(t,1,C.r,-1),C.W,C.W,C.W),C.kh,x,x,C.n),C.b7)},
$S:524}
B.dGz.prototype={
$0(){A.a7(this.a,!1).K("my_code")
return null},
$S:0}
B.dGA.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.bvE()},
$S:0}
B.dGB.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dGP.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.GS(D.Nm,x,C.Xm,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nm).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:552}
B.dGN.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGO.prototype={
$0(){this.a.aeY()
return null},
$S:0}
B.dGQ.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:105}
B.dGR.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9H(e,w,v,this.b,x.e,x.bZj(w),new B.dGJ(x,w),new B.dGK(x,v,w),new B.dGL(x,w),new B.dGM(x,w),null)},
$S:z+24}
B.dGJ.prototype={
$0(){this.a.acd(this.b)
return null},
$S:0}
B.dGK.prototype={
$0(){var x=this.a
return x.n(new B.dGI(x,this.b,this.c))},
$S:0}
B.dGI.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.H(0,w)},
$S:0}
B.dGL.prototype={
$0(){this.a.Mb(this.b)
return null},
$S:0}
B.dGM.prototype={
$0(){this.a.aeL(this.b)
return null},
$S:0}
B.cWf.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:105}
B.cWg.prototype={
$3(d,e,f){return A.e4(C.B,f,e,null,null)},
$S:137}
B.cWD.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:105}
B.cWC.prototype={
$1(d){return this.a.y.$0()},
$S:77}
B.cWz.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWA.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWB.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWx.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aD.gah(w))return A.fC(w,C.B,x,new B.cWv(this.a),C.fG,C.dp,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWw(this.a))
return C.bF},
$S:133}
B.cWv.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWt(this.a))
return C.bF},
$S:176}
B.cWt.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWq(x))},
$S:9}
B.cWq.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWw.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWs(x))},
$S:9}
B.cWs.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWy.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWu(this.a))
return C.bF},
$S:176}
B.cWu.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWr(x))},
$S:9}
B.cWr.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWc.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWb(x,d))},
$S:1729}
B.cWb.prototype={
$0(){return this.a.f=this.b===C.tt},
$S:0}
B.cWd.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWa(x,d))},
$S:9}
B.cWa.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cWe.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW9(x,d))},
$S:9}
B.cW9.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cW5.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cW6.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cW7.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cW8.prototype={
$1(d){return this.a.d.Lf(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cWQ.prototype={
$0(){var x=this.a.a
return B.qN(x.c,x.d)},
$S:1730}
B.cWR.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cWS.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cWT.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cWU.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cWV.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cWX.prototype={
$0(){var x=this.a
x.n(new B.cWW(x))},
$S:0}
B.cWW.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cWM.prototype={
$1(d){return this.a.OJ(this.b)},
$S:14}
B.cWN.prototype={
$1(d){return this.a.OI(this.b)},
$S:14}
B.cWE.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWF.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWG.prototype={
$1(d){return D.f2g},
$S:z+25}
B.cWL.prototype={
$2(d,e){if(d)B.SR()},
$S:117}
B.cWH.prototype={
$0(){return this.a.a6U(this.b)},
$S:0}
B.cWI.prototype={
$0(){return this.a.a6R(this.b)},
$S:0}
B.cWJ.prototype={
$0(){return this.a.aaV(this.b)},
$S:0}
B.cWK.prototype={
$0(){return this.a.a_1(this.b)},
$S:0}
B.cW4.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cWP.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cWO(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cWO.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2i.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.c2j.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.D(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2h.prototype={
$2(d,e){return this.bdq(d,e)},
bdq(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SS(u.c,A.D(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1731}
B.f7Z.prototype={
$1(d){if(d===D.a2g&&(this.a.a.a&30)===0)this.a.fA(0)},
$S:z+27}
B.f8_.prototype={
$0(){},
$S:11}
B.f8t.prototype={
beY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eYv(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fP1(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.beY(d,e)},
$S:733}
B.f8s.prototype={
$1(d){var x=this
d.b=new B.f8r(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f8r.prototype={
$1(d){return this.beX(d)},
beX(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aW2(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.H(0,m)
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
return A.b(B.eYv(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a4E(m),$async$$1)
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
x(v=B.aw4.prototype,"gc5_","Ok",0)
x(v,"gc5P","HE",0)
x(v,"gc5l","wU",0)
x(v=B.azV.prototype,"gbZd","aaT",0)
x(v,"gbZe","Xh",0)
x(v,"gcjU","aet",0)
x(v=B.azY.prototype,"gbZf","Xi",0)
x(v,"gcjV","a_m",0)
x(B.azW.prototype,"gbZg","aaU",0)
x(B.aw3.prototype,"gbZl","bZm",4)
x(v=B.azX.prototype,"gc5m","Yl",0)
x(v,"gciw","cix",4)
x(v,"gaWV","auq",0)
x(v,"gcll","aeS",0)
x(v,"gbHb","Vm",0)
x(v,"gbZk","CV",0)
x(B.aw5.prototype,"gb_D","a_l",0)
x(B.aw2.prototype,"gbZn","Xj",0)
x(v=B.aw8.prototype,"gaVH","c3I",4)
x(v,"gbZh","aaX",0)
x(v=B.aw6.prototype,"gchy","a_6",0)
x(v,"gaU_","aaW",0)
w(B.aw1.prototype,"gat8","at9",8)
x(v=B.aw7.prototype,"gc7X","acG",0)
x(v,"gbGK","a7E",0)
w(v,"gat8","at9",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cd0,B.a6W,B.aqB,B.ayy,B.aBF,B.j8,B.a9n,B.bqS,B.Dx,B.UZ])
w(B.cd1,B.cd0)
w(B.b09,B.a6W)
x(A.i2,[B.ccX,B.ccY,B.ccZ,B.ccW,B.cd_,B.cd2,B.cd3,B.cd4,B.cd5,B.cd6,B.cd7,B.cd8,B.cd9,B.f2X,B.fnm,B.fno,B.fnn,B.fnB,B.fnC,B.f4f,B.cWk,B.cWm,B.cWl,B.cWp,B.f6e,B.f6I,B.c1N,B.c1U,B.c1V,B.c1Q,B.c1O,B.c1R,B.c1S,B.fnz,B.fnA,B.dGW,B.dH4,B.dH2,B.dH3,B.f0a,B.f4r,B.f4s,B.c2b,B.f4u,B.f8l,B.f38,B.f39,B.c2g,B.fs1,B.cWj,B.cWh,B.dGS,B.dFO,B.dFU,B.dGc,B.dFT,B.dGj,B.dGD,B.dGE,B.dGF,B.dGa,B.dGs,B.dGr,B.dGt,B.dGu,B.dGv,B.dGx,B.dGy,B.dGq,B.dFW,B.dFX,B.dFS,B.dGd,B.dG4,B.dG2,B.dGi,B.dGC,B.dGP,B.dGQ,B.cWf,B.cWg,B.cWD,B.cWC,B.cWx,B.cWv,B.cWt,B.cWw,B.cWy,B.cWu,B.cWc,B.cWd,B.cWe,B.cW8,B.cWM,B.cWN,B.cWG,B.c2i,B.c2j,B.f7Z,B.f8s,B.f8r])
w(B.b0a,B.aqB)
x(A.jk,[B.fnl,B.cWn,B.cWo,B.f6c,B.f6d,B.f6H,B.dFL,B.dGU,B.dGV,B.dGT,B.dGX,B.dGY,B.dGZ,B.dH_,B.dH0,B.dH1,B.dFM,B.dFN,B.f4t,B.cWi,B.dGf,B.dGg,B.dFP,B.dFQ,B.dFV,B.dGG,B.dGH,B.dG9,B.dGk,B.dFZ,B.dGb,B.dGw,B.dGl,B.dGm,B.dGn,B.dGo,B.dGp,B.dFY,B.dFR,B.dGe,B.dG7,B.dG0,B.dG5,B.dG6,B.dG8,B.dG_,B.dGh,B.dGz,B.dGA,B.dGB,B.dGN,B.dGO,B.dGJ,B.dGK,B.dGI,B.dGL,B.dGM,B.cWz,B.cWA,B.cWB,B.cWq,B.cWs,B.cWr,B.cWb,B.cWa,B.cW9,B.cW5,B.cW6,B.cW7,B.cWQ,B.cWR,B.cWS,B.cWT,B.cWU,B.cWV,B.cWX,B.cWW,B.cWE,B.cWF,B.cWH,B.cWI,B.cWJ,B.cWK,B.cW4,B.cWP,B.cWO,B.f8_])
x(A.mb,[B.a9G,B.Lv,B.a6X,B.My,B.UY,B.Mx,B.Dy])
x(A.ae,[B.WR,B.SG,B.SK,B.SH,B.WQ,B.SI,B.WS,B.WP,B.NG,B.WU,B.WO,B.WV])
x(A.ag,[B.aw4,B.azV,B.azY,B.azW,B.aw3,B.azX,B.aw5,B.aw2,B.aw8,B.aw6,B.aw1,B.aw7])
x(A.ar,[B.aa7,B.aw0,B.b9m,B.a9H,B.a9F,B.b9n])
x(A.kw,[B.c1T,B.c1P,B.c1X,B.c1Y,B.fo5,B.dG3,B.dG1,B.dGR,B.cWL,B.c2h,B.f8t])
x(A.j_,[B.beE,B.bqx])})()
A.kd(b.typeUniverse,JSON.parse('{"b09":{"a6W":[]},"b0a":{"aqB":[]},"WR":{"ae":[],"r":[]},"aw4":{"ag":["WR"]},"aa7":{"ar":[],"r":[]},"SG":{"ae":[],"r":[]},"SK":{"ae":[],"r":[]},"azV":{"ag":["SG"]},"azY":{"ag":["SK"]},"beE":{"j_":[]},"SH":{"ae":[],"r":[]},"azW":{"ag":["SH"]},"WQ":{"ae":[],"r":[]},"SI":{"ae":[],"r":[]},"a9H":{"ar":[],"r":[]},"WS":{"ae":[],"r":[]},"WP":{"ae":[],"r":[]},"NG":{"ae":[],"r":[]},"WU":{"ae":[],"r":[]},"a9F":{"ar":[],"r":[]},"WO":{"ae":[],"r":[]},"WV":{"ae":[],"r":[]},"aw3":{"ag":["WQ"]},"bqx":{"j_":[]},"azX":{"ag":["SI"]},"aw0":{"ar":[],"r":[]},"b9m":{"ar":[],"r":[]},"aw5":{"ag":["WS"]},"aw2":{"ag":["WP"]},"aw8":{"ag":["NG"]},"aw6":{"ag":["WU"]},"aw1":{"ag":["WO"]},"aw7":{"ag":["WV"]},"b9n":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tt"),k:x("K1()"),m:x("bt<n,n>"),F:x("qq"),g:x("au<j8?>"),x:x("au<~>"),V:x("M<a9>"),O:x("M<x>"),W:x("M<be>"),Y:x("M<a1<n,S>>"),t:x("M<a1<n,@>>"),r:x("M<j8>"),w:x("M<+file,name(ld,n)>"),u:x("M<cI>"),s:x("M<n>"),E:x("M<j_>"),a:x("M<dz>"),p:x("M<r>"),Z:x("M<H>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("al<j8>"),j:x("al<@>"),I:x("al<H>"),M:x("bq<n,n>"),P:x("a1<n,@>"),f:x("a1<@,@>"),o:x("iA"),e:x("hS3"),af:x("CM"),U:x("j8"),b:x("cp"),C:x("aC"),aK:x("ve"),ab:x("Dx"),br:x("aqB"),v:x("UZ"),N:x("n"),X:x("bm<P>"),Q:x("lo"),D:x("dz"),aw:x("cv<n>"),cd:x("a4<a1<n,@>>"),c7:x("r"),ch:x("bM<al<j8>>"),aW:x("bM<dz?>"),aY:x("bM<~>"),cx:x("a9G"),b1:x("bd<al<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayy"),bG:x("aBF"),q:x("mx"),B:x("oQ<Dx>"),c6:x("oQ<a6X>"),y:x("S"),i:x("P"),z:x("@"),S:x("H"),aQ:x("be?"),_:x("al<j8>?"),aL:x("al<@>?"),h:x("a1<n,@>?"),l:x("j8?"),R:x("aC?"),c:x("UZ?"),d:x("+answerQr,transfer(n,au<al<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Lv,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9n?"),bk:x("ayy?"),ag:x("aBF?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPW=new A.ay(C.aA,2,C.r,-1)
D.bFx=new A.a8(C.a_,C.a7,C.w,C.Zm,null,null)
D.aRx=new A.o(null,null,null,C.mZ,null,D.bFx,C.n)
D.aST=new A.o(null,null,null,C.mZ,null,E.EN,C.n)
D.a80=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8X=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9E=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ab0=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eDW=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eR_=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.H8,null,null,null,null,null,null,null,null,null)
D.cMv=x([D.eDW,C.ar,D.eR_],y.p)
D.bay=new A.fs(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.cMv,null)
D.eUW=new A.w("Create your organization",null,C.h5,null,null,null,null,null,null,null,null,null)
D.eHS=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.H8,null,null,null,null,null,null,null,null,null)
D.d_4=x([D.eUW,C.ar,D.eHS],y.p)
D.baH=new A.fs(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d_4,null)
D.eRx=new A.w("Team Member sign-in",null,C.h5,null,null,null,null,null,null,null,null,null)
D.eLj=new A.w("Enter the access code and password from your organization.",null,G.H8,null,null,null,null,null,null,null,null,null)
D.cYf=x([D.eRx,C.ar,D.eLj],y.p)
D.baR=new A.fs(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.cYf,null)
D.bfG=new A.L(16,10,16,28)
D.bfO=new A.L(16,14,16,4)
D.bh1=new A.L(20,0,20,16)
D.bhw=new A.L(20,8,20,16)
D.adx=new A.L(24,22,24,20)
D.Xr=new A.a_(63394,"MaterialIcons",!1)
D.agm=new A.a_(63515,"MaterialIcons",!1)
D.brc=new A.a_(983813,"MaterialIcons",!1)
D.boq=new A.a_(62867,"MaterialIcons",!1)
D.bsa=new A.ac(D.boq,44,C.c,null,null,null)
D.btg=new A.ac(C.rP,null,C.ak,null,null,null)
D.buE=new A.ac(C.iF,18,null,null,null,null)
D.bwi=new A.ac(D.Xr,26,C.c,null,null,null)
D.bwO=new A.ac(C.Er,null,null,null,null,null)
D.bxm=new A.ac(C.x8,null,null,null,null,null)
D.bys=new A.ac(W.La,null,null,null,null,null)
D.byN=new A.ac(C.hg,16,null,null,null,null)
D.bC4=new A.ac(C.qk,16,null,null,null,null)
D.bss=new A.ac(C.mC,null,null,null,null,null)
D.bCX=new A.dZ(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bss,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxT=new A.ac(C.E2,null,null,null,null,null)
D.bD1=new A.dZ(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsN=new A.ac(N.EB,null,null,null,null,null)
D.bDb=new A.dZ(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.coJ=x([C.eT,C.aW,C.aA],y.O)
D.bHg=new A.a8(C.ax,C.aE,C.w,D.coJ,null,null)
D.coe=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nm=x([C.eT,C.aA],y.O)
D.NA=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m2=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cTB=x([C.q2,C.aA],y.O)
D.dIi={iceServers:0}
D.aAD={urls:0}
D.d2E=new A.bt(D.aAD,["stun:stun.l.google.com:19302"],y.m)
D.d2D=new A.bt(D.aAD,["stun:stun1.l.google.com:19302"],y.m)
D.cDL=x([D.d2E,D.d2D],A.aA("M<a1<n,n>>"))
D.d1Z=new A.bt(D.dIi,[D.cDL],A.aA("bt<n,@>"))
D.FO=new B.Lv(0,"lanDirect")
D.OO=new B.Lv(1,"cloudStash")
D.ddJ=new B.Lv(2,"inlineInstant")
D.OP=new B.Lv(3,"webrtcLink")
D.xO=new B.Lv(4,"videoCloud")
D.eQZ=new A.w("Receive file",null,C.mS,null,null,null,null,null,null,null,null,null)
D.ces=x([E.ai0,C.ab,D.eQZ],y.p)
D.eaM=new A.cD(C.aY,C.b5,C.j,C.m,null,C.p,null,0,D.ces,null)
D.dME=new A.B(C.c9,D.eaM,null)
D.evv=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a__,null,null,null)
D.eEr=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.evv,null,C.L,null,null,null,null,null,null,null)
D.dLZ=new A.B(C.zI,D.eEr,null)
D.aWT=new A.cw(C.B,null,null,D.dLZ,null)
D.dR4=new A.cE(0,null,0,28,null,null,D.aWT,null)
D.dRm=new B.a6X(0,"RTCDataChannelConnecting")
D.aFF=new B.a6X(1,"RTCDataChannelOpen")
D.aFG=new B.a6X(3,"RTCDataChannelClosed")
D.dRn=new B.Dy(0,"RTCIceConnectionStateNew")
D.dRo=new B.Dy(1,"RTCIceConnectionStateChecking")
D.dRp=new B.Dy(2,"RTCIceConnectionStateCompleted")
D.dRq=new B.Dy(3,"RTCIceConnectionStateConnected")
D.dRr=new B.Dy(4,"RTCIceConnectionStateCount")
D.dRs=new B.Dy(5,"RTCIceConnectionStateFailed")
D.dRt=new B.Dy(6,"RTCIceConnectionStateDisconnected")
D.aFH=new B.Dy(7,"RTCIceConnectionStateClosed")
D.aFI=new B.UY(0,"RTCIceGatheringStateNew")
D.dRu=new B.UY(1,"RTCIceGatheringStateGathering")
D.a2g=new B.UY(2,"RTCIceGatheringStateComplete")
D.a2h=new B.Mx(0,"RTCPeerConnectionStateClosed")
D.aFJ=new B.Mx(1,"RTCPeerConnectionStateFailed")
D.aFK=new B.Mx(2,"RTCPeerConnectionStateDisconnected")
D.aFL=new B.Mx(3,"RTCPeerConnectionStateNew")
D.aFM=new B.Mx(4,"RTCPeerConnectionStateConnecting")
D.aFN=new B.Mx(5,"RTCPeerConnectionStateConnected")
D.dRv=new B.My(0,"RTCSignalingStateStable")
D.dRw=new B.My(1,"RTCSignalingStateHaveLocalOffer")
D.dRx=new B.My(2,"RTCSignalingStateHaveRemoteOffer")
D.dRy=new B.My(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dRz=new B.My(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFO=new B.My(5,"RTCSignalingStateClosed")
D.eek=new A.ap(160,48)
D.aY0=new A.f9(2,null,null,null,null,C.aA,null,null,null,null)
D.efL=new A.a3(16,16,D.aY0,null)
D.eHj=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eh9=new A.aY(D.eHj,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eO4=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ehc=new A.aY(D.eO4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVW=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ehj=new A.aY(D.eVW,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eGX=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ehJ=new A.aY(D.eGX,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRG=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aI7=new A.aY(D.eRG,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eSY=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eib=new A.aY(D.eSY,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXe=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eiq=new A.aY(D.eXe,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVn=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eiv=new A.aY(D.eVn,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWw=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ejg=new A.aY(D.eWw,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eFH=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ejN=new A.aY(D.eFH,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.ePM=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ek7=new A.aY(D.ePM,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eJj=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ekD=new A.aY(D.eJj,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXk=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekH=new A.aY(D.eXk,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eFW=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ekN=new A.aY(D.eFW,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eEL=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.el1=new A.aY(D.eEL,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eBU=new A.w("NGMY DOC SHARE",null,C.aJn,null,null,null,null,null,null,null,null,null)
D.eD3=new A.w("Show this to sender",null,C.kc,null,null,null,null,null,null,null,null,null)
D.eE1=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eId=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eIw=new A.w("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eJt=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eJT=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eMq=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eP0=new A.w("Send to their Doc Share",null,C.mR,null,null,null,null,null,null,null,null,null)
D.ePj=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ePB=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eQ4=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eQ8=new A.w("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eQv=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eB,null,null,null,null,null,null,null,null,null)
D.eTo=new A.w("Share files & videos\nwith a scan.",null,C.aJo,null,null,null,null,null,null,null,null,null)
D.eTG=new A.w("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.f2g=new B.WO(null)
D.a5a=new B.a9G(0,"docShare")
D.a5b=new B.a9G(1,"gate")
D.Ry=new B.a9G(2,"gateNoIndividual")})();(function staticFields(){$.aKb=null
$.eWm=function(){var x=y.N
return A.Q(x,x)}()
$.EE=A.Q(y.N,y.D)
$.adB=A.Q(y.N,A.aA("ld"))
$.OY=A.Q(y.N,y.D)
$.eWT=A.Q(y.N,A.aA("a9n"))
$.c2a=A.Q(y.S,A.aA("bqS"))
$.fP0=1
$.hAm=null
$.hAl=null
$.hsj=null
$.fEw=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hSy","h4J",()=>new B.cd1())
x($,"hQt","fHX",()=>C.a.q(A.bp(A.bp(A.bp(A.Fa(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["kN7z23m68SbClmqNXRLlJgm6Xj4="]=a.current})($__dart_deferred_initializers__);