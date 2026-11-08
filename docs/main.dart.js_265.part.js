((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cmh:function cmh(){},
hLQ(d){var x=null,w=new B.b4f(d,D.ent,new A.pw(x,x,y.c6),new A.pw(x,x,y.B))
w.byE(d)
return w},
b4f:function b4f(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cmc:function cmc(d){this.a=d},
cmd:function cmd(d){this.a=d},
cme:function cme(d){this.a=d},
cmb:function cmb(d){this.a=d},
cmf:function cmf(d){this.a=d},
hLR(d,e){var x=y.N
x=new B.b4g(d,e,A.T(x,y.e),A.T(x,y.z))
x.byF(d,e)
return x},
b4g:function b4g(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cmi:function cmi(d){this.a=d},
cmj:function cmj(d){this.a=d},
cmk:function cmk(d){this.a=d},
cml:function cml(d){this.a=d},
cmm:function cmm(d){this.a=d},
cmn:function cmn(d){this.a=d},
cmo:function cmo(d){this.a=d},
cmp:function cmp(d){this.a=d},
h1h(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.yZ.M4(x,"ngmy_doc_share_v1",new B.flS(),1)},
hSp(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ch(d))
if(y.J.b(d))return new Uint8Array(A.ch(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ch(A.Ae(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ch(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
Rk(d,e){return B.i6R(d,e)},
i6R(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNN
x=7
return A.b(o==null?$.aNN=B.h1h():o,$async$Rk)
case 7:s=g
r=new Uint8Array(A.ch(e))
q=J.mO(s,"blobs","readwrite")
C.iV.mm(J.mN(q,"blobs"),r,d)
x=8
return A.b(J.pF(q),$async$Rk)
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
return A.i($async$Rk,w)},
Rj(d){return B.i6Q(d)},
i6Q(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNN
x=7
return A.b(o==null?$.aNN=B.h1h():o,$async$Rj)
case 7:s=f
r=J.mO(s,"blobs","readonly")
x=8
return A.b(C.iV.zz(J.mN(r,"blobs"),d),$async$Rj)
case 8:q=f
x=9
return A.b(J.pF(r),$async$Rj)
case 9:o=B.hSp(q)
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
return A.i($async$Rj,w)},
ah0(d){return B.i6P(d)},
i6P(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ah0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNN
x=7
return A.b(p==null?$.aNN=B.h1h():p,$async$ah0)
case 7:s=f
r=J.mO(s,"blobs","readwrite")
C.iV.FS(J.mN(r,"blobs"),d)
x=8
return A.b(J.pF(r),$async$ah0)
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
return A.i($async$ah0,w)},
flS:function flS(){},
hUM(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.boG(w,v))}return u},
hrw(d,e){var x,w={},v=A.aWh("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fJT(w,v,e)
C.wm.yw(v,"change",new B.fJV(w,v,!1))
C.wm.yw(v,"cancel",new B.fJU(w))
$.eU.ms()
v.click()
A.bO(C.ahZ,new B.fJS(w),y.H)},
fJT:function fJT(d,e,f){this.a=d
this.b=e
this.c=f},
fJV:function fJV(d,e,f){this.a=d
this.b=e
this.c=f},
fJU:function fJU(d){this.a=d},
fJS:function fJS(d){this.a=d},
Da(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Da=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gcZ()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTO()?3:4
break
case 3:x=5
return A.b(B.hmB(e,d,s,!0,!1,f,g,h,!1,i),$async$Da)
case 5:x=1
break
case 4:x=6
return A.b(B.R_(d,s,f,g,h,i),$async$Da)
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
return A.b(B.IF(s,d),$async$Da)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fht(s,d),$async$Da)
case 14:x=12
return A.b(r.hmB(q,p,o,n,m,l,k,j,a1,i),$async$Da)
case 12:x=8
break
case 10:x=15
return A.b(A.a3(e,!1).cg(A.e_(new B.fK7(s,i,d,f,g,h),!1,null,y.H)),$async$Da)
case 15:x=8
break
case 11:x=16
return A.b(A.a3(e,!1).cg(A.e_(new B.fK8(s,i,d,f,g,h),!1,null,y.H)),$async$Da)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Da,w)},
R_(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$R_=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b__(e),$async$R_)
case 3:u=k
x=4
return A.b(B.apo(d,e,!1),$async$R_)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IF(e,d),$async$R_)
case 7:if(k){v=D.aaa
x=1
break}x=8
return A.b(B.V4(e),$async$R_)
case 8:v=t?D.V7:D.aab
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZY(d,e)){v=D.aaa
x=1
break}x=11
return A.b(B.V4(e),$async$R_)
case 11:v=t?D.V7:D.aab
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fXl(d,e)){v=D.aaa
x=1
break}x=14
return A.b(B.V4(e),$async$R_)
case 14:v=D.V7
x=1
break
case 13:v=t?D.V7:D.aab
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R_,w)},
fht(d,e){var x=0,w=A.j(y.y),v
var $async$fht=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZY(e,d)){v=!1
x=1
break}x=3
return A.b(B.b__(d),$async$fht)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fht,w)},
hmB(d,e,f,g,h,i,j,k,l,m){return A.a3(d,!1).cg(A.e_(new B.fo4(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hhG(d,e,f,g,h,i,j){return new B.Zc(e,j,d,g,h,i,f,null)},
fq1(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fq1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
x=3
return A.b(A.bT(C.K,null,new B.fq4(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fq1)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fq1,w)},
fqw(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fqw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
r=new A.as(C.at,u)
x=3
return A.b(A.bT(C.K,null,new B.fqy(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fqw)
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
return A.i($async$fqw,w)},
h1q(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bs(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fCq(d,e){var x=0,w=A.j(y.H),v
var $async$fCq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.V4(e),$async$fCq)
case 3:if(d.e==null){x=1
break}A.a3(d,!1).eJ()
case 1:return A.h(v,w)}})
return A.i($async$fCq,w)},
fK7:function fK7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fK8:function fK8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acf:function acf(d,e){this.a=d
this.b=e},
fo4:function fo4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zc:function Zc(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azy:function azy(){this.c=this.a=this.d=null},
d5Z:function d5Z(d,e){this.a=d
this.b=e},
d5W:function d5W(d){this.a=d},
d5Y:function d5Y(d){this.a=d},
d5X:function d5X(d){this.a=d},
d60:function d60(){},
d6_:function d6_(d){this.a=d},
acH:function acH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC8:function aC8(d,e){this.a=d
this.b=e},
aFe:function aFe(d,e,f){this.a=d
this.b=e
this.c=f},
fq4:function fq4(d,e,f){this.a=d
this.b=e
this.c=f},
fq2:function fq2(d){this.a=d},
fq3:function fq3(d,e,f){this.a=d
this.b=e
this.c=f},
fqy:function fqy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqx:function fqx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
caw(d,e,f,g,h){return B.hGL(d,e,f,g,h)},
hGL(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$caw=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dF(d,new B.cax(s,e,h,g,f,q),y.g),y.l),$async$caw)
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
return A.i($async$caw,w)},
aZV(d,e,f,g,h){return B.hGM(d,e,f,g,h)},
hGM(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZV=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auI("GET",d)
o=A.fTJ()
if(o==null)o=new A.LW(A.a([],y.W))
x=7
return A.b(o.f3(0,s).da(0,C.FE),$async$aZV)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cn(),$async$aZV)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BS(q,h,o,e,f,"Received via QR")
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
return A.i($async$aZV,w)},
aZU(d){return B.hGJ(d)},
hGJ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vn(d,null).da(0,C.o4),$async$aZU)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.T.aN(0,A.m0(A.lZ(p.e)).cz(0,p.w),null)
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
return A.i($async$aZU,w)},
cav(d){return B.hGK(d)},
hGK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cav=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vn(d,null).da(0,C.q3),$async$cav)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m0(A.lZ(q.e)).cz(0,q.w)
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
return A.i($async$cav,w)},
cax:function cax(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jp:function jp(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ID(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hGR(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.ID(C.a.b4(u,v.length))}return null},
hGS(d){var x=B.ID(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hGN(){var x,w=$.pD(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.au(10)
return C.d.hv(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(24)]},
a6T(d){return B.hGO(d)},
hGO(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a6T)
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
return A.i($async$a6T,w)},
a6U(d,e){return B.hGP(d,e)},
hGP(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6U=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cG,null),$async$a6U)
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
return A.i($async$a6U,w)},
BR(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BR)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.ID(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6V(r),$async$BR)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6T("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BR)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.ID(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BR)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hGN()
x=14
return A.b(B.a6V(m),$async$BR)
case 14:if(f!=null){x=12
break}l=new A.U(Date.now(),0,!1).a7().ad()
x=15
return A.b(B.a6U("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BR)
case 15:k=f
x=16
return A.b(B.a6U("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BR)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BR)
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
return A.i($async$BR,w)},
a6V(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.ID(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6T("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6V)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6V,w)},
a6W(d,e,f,g){return B.hGT(d,e,f,g)},
hGT(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6W=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.ID(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6V(r),$async$a6W)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cL(d,0,new B.caD())>1048576||g.b3(d,new B.caE())){v=B.EF(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a76("myCode",d,a0),$async$a6W)
case 4:u=a3
try{t=C.T.aN(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cp(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.EF(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b_2(u,g.gL(d),a0),$async$a6W)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pD().au(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dF(d,new B.caF(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZW(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.U(Date.now(),0,!1).a7().ad(),"status","pending"],i,y.z),q),$async$a6W)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
EF(d,e,f,g,h){return B.hGQ(d,e,f,g,h)},
hGQ(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EF=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$EF)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cL(a6,0,new B.caz())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pD().au(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.au(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
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
a1=B.IH(a9,q)
a0=new A.Kw(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$EF)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p4(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaw(a1.a,a4,"media",a1.d,a2).x7(m,n,new A.DW(!0,q.c)),$async$EF)
case 12:J.cc(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a3(0),$async$EF)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aQj(r),$async$EF)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dF(a6,new B.caA(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZW(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.U(Date.now(),0,!1).a7().ad(),"status","pending"],e,d),a8),$async$EF)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aQj(r),$async$EF)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EF,w)},
aZW(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6T(t),$async$aZW)
case 3:s=g
r=y.aL.a(J.q(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.cay(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6U(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZW,w)},
Nx(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Nx=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6T("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Nx)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cp(s)){v=0
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
return A.b(B.aZX(k,a0),$async$Nx)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.U(Date.now(),0,!1).a7().ad())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b_1(h),$async$Nx)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vb(g,a0),$async$Nx)
case 10:f=a3
if(f!=null&&J.cK(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.U(Date.now(),0,!1).a7().ad())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.Z(r,new B.caB(),q),n)
d=A.C(new A.Z(r,new B.caC(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d1(d,0,A.dB(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a6U("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$Nx)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nx,w)},
aZX(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cp(h)){v=0
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
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.O(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iaG(k,j)
C.d.v(s,i)
x=5
return A.b(B.D8(l,m,"Received via My Code",t,e,i),$async$aZX)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQj(s),$async$aZX)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZX,w)},
caD:function caD(){},
caE:function caE(){},
caF:function caF(){},
caz:function caz(){},
caA:function caA(){},
cay:function cay(){},
caB:function caB(){},
caC:function caC(){},
fK4(d,e){var x=0,w=A.j(y.H)
var $async$fK4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a3(d,!1).cg(A.e_(new B.fK5(e),!1,null,y.H)),$async$fK4)
case 2:return A.h(null,w)}})
return A.i($async$fK4,w)},
bDk(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bDk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cp(e)){v=!1
x=1
break}x=3
return A.b(A.a3(d,!1).cg(A.e_(new B.fK6(g,e,f),!1,null,y.y)),$async$bDk)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDk,w)},
fK5:function fK5(d){this.a=d},
fK6:function fK6(d,e,f){this.a=d
this.b=e
this.c=f},
V1:function V1(d,e){this.c=d
this.a=e},
aDu:function aDu(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dRE:function dRE(d,e){this.a=d
this.b=e},
V5:function V5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDx:function aDx(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dSN:function dSN(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d){this.a=d},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(d){this.a=d},
dSS:function dSS(d,e){this.a=d
this.b=e},
dST:function dST(d,e){this.a=d
this.b=e},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSV:function dSV(d){this.a=d},
dSY:function dSY(){},
dSW:function dSW(d){this.a=d},
dSX:function dSX(d,e){this.a=d
this.b=e},
bj_:function bj_(){},
V2:function V2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDv:function aDv(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dRF:function dRF(d){this.a=d},
dRG:function dRG(d){this.a=d},
fXm(d){var x=d.hY
if(x>=0)return C.o.O(x)
return 10},
hGV(d){var x=d.kP
if(x>=0)return x
return 4.99},
hGU(d){var x=d.ls,w=y.N
w=x.jc(x,new B.caH(),w,w)
return w},
hcJ(d){var x=d.kQ,w=y.N
w=x.jc(x,new B.caI(),w,w)
return w},
b__(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b__=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b__)
case 7:s=f
r=A.w(p)
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
return A.i($async$b__,w)},
a6Y(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a6Y)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6Y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6Y,w)},
V4(d){var x=0,w=A.j(y.H),v,u
var $async$V4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$V4)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$V4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$V4,w)},
fXl(d,e){var x,w,v
if(B.hGV(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hGU(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.U(Date.now(),0,!1))},
aZY(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hcJ(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.U(Date.now(),0,!1))},
hcK(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hcJ(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.U(Date.now(),0,!1))?v:new A.U(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a7().ad())
d.kQ=w},
app(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$app=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$app)
case 7:s=f
r=A.w(p)
r=A.ew(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$app,w)},
apq(d){var x=0,w=A.j(y.H),v,u,t
var $async$apq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.app(d),$async$apq)
case 3:u=f
x=5
return A.b(A.az(),$async$apq)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$apq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apq,w)},
apo(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fXm(d)
if(u<=0){v=!1
x=1
break}if(B.fXl(d,e)){v=!1
x=1
break}x=3
return A.b(B.app(e),$async$apo)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apo,w)},
aZZ(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IF(e,d),$async$aZZ)
case 3:if(g){v=-1
x=1
break}u=B.fXm(d)
if(u<=0){v=-1
x=1
break}if(B.fXl(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.app(e),$async$aZZ)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZZ,w)},
caK(d,e,f){var x=0,w=A.j(y.y),v
var $async$caK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IF(e,d),$async$caK)
case 3:if(h){v=!1
x=1
break}v=B.apo(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caK,w)},
caJ(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$caJ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
x=3
return A.b(B.caK(d,u,i.gTO()),$async$caJ)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caJ,w)},
a6X(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6X=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
if(i.gTO()){v=!0
x=1
break}if(B.aZY(d,u)){v=!0
x=1
break}x=5
return A.b(A.lp(u,C.Su),$async$a6X)
case 5:x=k?3:4
break
case 3:B.hcK(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6X)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kZ(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Su,"Doc Share for Organizations"),$async$a6X)
case 7:if(!k){v=!1
x=1
break}B.hcK(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6X)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6X,w)},
caH:function caH(){},
caI:function caI(){},
fKS(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fKS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fKS)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fe5.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fe5.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKS,w)},
id_(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fe5.bt($.fe5,new B.fKU(d))},
fKU:function fKU(d){this.a=d},
ffx(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$ffx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.ne(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jv,null,y.H),$async$ffx)
case 3:C.Ap.fk(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.ms()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffx,w)},
afR(d,e,f){var x=0,w=A.j(y.H),v
var $async$afR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.feD.n(0,d,new B.abX(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$afR)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.T.ao(A.G(["parts",e,"size",f],v,y.C),null)),$async$afR)
case 2:return A.h(null,w)}})
return A.i($async$afR,w)},
afL(d){return B.hWG(d)},
hWG(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.feD.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afL)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.T.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cp(s)){v=null
x=1
break}o=J.b6(s,new B.fj2(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.abX(r)
$.feD.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afL,w)},
QQ(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$QQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ch(e))
$.Gq.n(0,d,u)
x=3
return A.b(B.Rk(d,u),$async$QQ)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QQ,w)},
aO9(d){return B.hWE(d)},
hWE(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aO9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gq.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.Rj(d),$async$aO9)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.Gq.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aO9)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aM(r)
x=!J.cp(q)?9:10
break
case 9:B.QQ(d,q)
x=11
return A.b(J.hy(s,d),$async$aO9)
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
return A.i($async$aO9,w)},
hSN(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ch(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ch(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ch(A.Ae(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ch(d)),y.K)
return A.f8(null,y.K)},
a1G(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bB,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fM(r,"loadend",new B.fog(r,t),!1,s)
A.fM(r,"error",new B.foh(t),!1,s)
r.readAsArrayBuffer(d)
v=u.it(0,C.ME,new B.foi())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1G,w)},
aOt(d,e,f){return B.hYW(d,e,f)},
hYW(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aOt=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1G(i),$async$aOt)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Rk(o,p),$async$aOt)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cc(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afR(k,j,s),$async$aOt)
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
return A.i($async$aOt,w)},
aOs(d,e,f){return B.hYV(d,e,f)},
hYV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOs=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aOt(d,e,f),$async$aOs)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1G(f),$async$aOs)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gq.n(0,s,r)
$.R6.n(0,s,r)
x=11
return A.b(B.QQ(s,r),$async$aOs)
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
return A.i($async$aOs,w)},
BS(d,e,f,g,h,i){return B.hH3(d,e,f,g,h,i)},
hH3(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BS=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.au(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jp(p,q,o,n,new A.U(Date.now(),0,!1).a7().ad(),a0,f,B.b_5(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.QQ(s,d),$async$BS)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BS)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cI.gcs().aM(d)),$async$BS)
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
return A.b(B.AP(e),$async$BS)
case 12:j=a2
J.cc(j,m)
x=13
return A.b(B.GB(e,j),$async$BS)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BS,w)},
V6(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$V6=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AP(d),$async$V6)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.au(99999)
n=p.b
l=o.type
l.toString
k=B.hcM(n,null,l)
l=o.size
l.toString
j=new A.U(Date.now(),0,!1).a7().ad()
i=new B.jp(m,n,k,l,j,"From folder",null,B.b_5(),null)
$.agk.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1G(o),$async$V6)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.Gq.n(0,h,g)
$.R6.n(0,h,g)
B.QQ(h,g)
x=9
break
case 10:x=11
return A.b(B.aOs(d,m,o),$async$V6)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.M)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GB(d,t),$async$V6)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$V6,w)},
fXq(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fXq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hcM(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IG(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.BS(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXq,w)},
IG(d,e,f,g,h,i){return B.hH2(d,e,f,g,h,i)},
hH2(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IG=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.au(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kw(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IG)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cp(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ch(J.RT(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kL(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Rk(k,l),$async$IG)
case 11:J.cc(q,k);++p
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
return A.b(j.a3(0),$async$IG)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Rk(k,new Uint8Array(A.ch(n))),$async$IG)
case 15:J.cc(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afR(r,q,g),$async$IG)
case 16:f=new B.jp(i,a1,a0,g,new A.U(Date.now(),0,!1).a7().ad(),a2,null,B.b_5(),null)
x=17
return A.b(B.AP(d),$async$IG)
case 17:e=a6
J.cc(e,f)
x=18
return A.b(B.GB(d,e),$async$IG)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IG,w)},
V8(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$V8=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agk.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1G(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afL(s),$async$V8)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Rj(u[o]),$async$V8)
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
v=A.Ae(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.M)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.R6.h(0,s)
if(i==null)i=$.Gq.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.ry(d,e),$async$V8)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.R6.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Ae(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$V8,w)},
hcM(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ry(d,e){return B.hH4(d,e)},
hH4(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ry=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.R6.h(0,f)
if(e==null)e=$.Gq.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.agk.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1G(s),$async$ry)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.Gq.n(0,f,r)
$.R6.n(0,f,r)
B.QQ(f,r)
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
return A.b(B.afL(f),$async$ry)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ayi(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Rj(g[l]),$async$ry)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.M(0,k)
case 14:g.length===m||(0,A.M)(g),++l
x=13
break
case 15:r=n.aoq()
if(!C.aH.gam(r)){$.Gq.n(0,f,r)
$.R6.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aO9(f),$async$ry)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.R6.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.V8(a0,a1,0,g),$async$ry)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ch(i))
$.Gq.n(0,f,h)
$.R6.n(0,f,h)
B.QQ(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ry,w)},
hH7(d){var x,w,v=$.agk.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hH8(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hH5(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apw(d,e,f,g,h){return B.hH6(d,e,f,g,h)},
hH6(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apw=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agk.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1G(s),$async$apw)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ry(g,e),$async$apw)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eY().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.im(d).x7(h,r,new A.DW(!0,e.c)),$async$apw)
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
return A.i($async$apw,w)},
hcO(d,e,f,g,h){var x,w,v,u,t=$.hcN
$.hcN=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.au(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.caV.n(0,t,new B.bvs(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ayi(u)))
return t},
fXr(d){var x=0,w=A.j(y.H)
var $async$fXr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fXr,w)},
IH(d,e){var $async$IH=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agk.h(0,h)
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
return A.qe(B.V8(d,e,p,o<q?o:q),$async$IH,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qe(A.FX(n),$async$IH,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qe(B.afL("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IH,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qe(B.Rj(h[l]),$async$IH,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qe(A.FX(k),$async$IH,w)
case 21:case 20:case 16:h.length===r||(0,A.M)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qe(B.ry(d,e),$async$IH,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qe(A.FX(A.Ae(j,p,o<i?o:i)),$async$IH,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qe(null,0,w)
case 2:return A.qe(t.at(-1),1,w)}})
var x=0,w=A.hlu($async$IH,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hnj(w)},
b_7(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b_7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.caV.h(0,d)
if(t==null||J.cp(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a4N(),$async$b_7)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_7,w)},
V7(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$V7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.caV.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4N(),$async$V7)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afR(r.c,u,r.z),$async$V7)
case 4:t=new B.jp(r.b,r.d,r.e,r.z,new A.U(Date.now(),0,!1).a7().ad(),r.f,r.r,B.b_5(),null)
u=r.a
x=5
return A.b(B.AP(u),$async$V7)
case 5:s=f
J.cc(s,t)
x=6
return A.b(B.GB(u,s),$async$V7)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$V7,w)},
a73(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a73=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.caV.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ah0(u[s]),$async$a73)
case 6:case 4:u.length===t||(0,A.M)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a73,w)},
caX(d,e,f){var x=0,w=A.j(y.H)
var $async$caX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAn(d,e,f),$async$caX)
case 2:return A.h(null,w)}})
return A.i($async$caX,w)},
caY(d,e,f){var x=0,w=A.j(y.H)
var $async$caY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAo(d,e,f),$async$caY)
case 2:return A.h(null,w)}})
return A.i($async$caY,w)},
EG(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$EG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AP(d),$async$EG)
case 2:p=g
J.nx(p,new B.caW(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gq.W(0,v)
$.agk.W(0,e)
x=3
return A.b(B.afL(v),$async$EG)
case 3:u=g
$.feD.W(0,v)
x=4
return A.b(A.az(),$async$EG)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$EG)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$EG)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ah0(s[q]),$async$EG)
case 12:case 10:s.length===r||(0,A.M)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ah0(v),$async$EG)
case 13:x=14
return A.b(B.GB(d,p),$async$EG)
case 14:return A.h(null,w)}})
return A.i($async$EG,w)},
b_6(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b_6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ry(d,e),$async$b_6)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.ffx(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_6,w)},
AP(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AP)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.T.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.foj(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AP,w)},
GB(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GB)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fsr(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.T.ao(t,null)),$async$GB)
case 3:return A.h(null,w)}})
return A.i($async$GB,w)},
bAn(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AP(d),$async$bAn)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fmJ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEa(f))
x=4
return A.b(B.GB(d,u),$async$bAn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAn,w)},
bAo(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AP(d),$async$bAo)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fmK(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cJn(f))
x=4
return A.b(B.GB(d,u),$async$bAo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAo,w)},
abX:function abX(d){this.a=d},
fj2:function fj2(){},
fog:function fog(d,e){this.a=d
this.b=e},
foh:function foh(d){this.a=d},
foi:function foi(){},
caW:function caW(d){this.a=d},
bvs:function bvs(d,e,f,g,h,i,j,k,l){var _=this
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
foj:function foj(){},
fsr:function fsr(){},
fmJ:function fmJ(d){this.a=d},
fmK:function fmK(d){this.a=d},
a74(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a74=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b3(d,new B.cb0())?3:4
break
case 3:x=5
return A.b(B.b_8(d,e),$async$a74)
case 5:u=g
if(u!=null){t=u.c
B.Nz(d,u.b,e,t)}v=u
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
return A.b(B.b_3(s),$async$a74)
case 10:case 9:if(g){v=new A.Qd(1,D.S7,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.V9(d,e),$async$a74)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Ve(!0,!0,d,e),$async$a74)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nz(d,D.zB,e,t)
v=new A.Qd(p,D.zB,t)
x=1
break}v=B.cb_(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a74,w)},
V9(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$V9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a76(null,d,e),$async$V9)
case 3:p=g
try{u=C.T.aN(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cp(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b_2(p,d.length,e),$async$V9)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.caY(e,C.d.gI(d).a,r.b),$async$V9)
case 7:case 6:q=r.a
x=8
return A.b(B.Nz(d,D.S7,e,q),$async$V9)
case 8:v=new A.Qd(d.length,D.S7,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$V9,w)},
Va(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Va=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mx(D.mN)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a75(d,e),$async$Va)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.caT(s,d,e,t),$async$Va)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b_3(t),$async$Va)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ry(e,d),$async$Va)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.V9(A.a([d],y.r),e),$async$Va)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Va,w)},
Vc(){var x=0,w=A.j(y.H)
var $async$Vc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fXk(),$async$Vc)
case 2:x=3
return A.b(B.aQB(),$async$Vc)
case 3:return A.h(null,w)}})
return A.i($async$Vc,w)},
a75(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a75=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b_5()
x=3
return A.b(B.caX(e,d.a,u),$async$a75)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a75,w)},
Nz(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.S7&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b4(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a75(p,f),$async$Nz)
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
return A.b(B.caS(o,p,u,f),$async$Nz)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.caT(o,p,f,t),$async$Nz)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.caR(o,u,p,f),$async$Nz)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.M)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nz,w)},
b_8(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b_8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.caZ(e,d),$async$b_8)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Ve(!1,!0,d,e),$async$b_8)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qd(u.a,D.zB,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_8,w)},
caZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$caZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.V8(d,s,0,1),$async$caZ)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.M)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caZ,w)},
cb_(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cb_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a76(null,d,e),$async$cb_)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hcL(u)
if(t.length>800){v=null
x=1
break}v=new A.Qd(d.length,D.dFq,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cb_,w)},
apx(d,e,f){return B.hHb(d,e,f)},
hHb(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apx=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nd(g,1)
x=B.fXp(g)?3:4
break
case 3:x=5
return A.b(B.caU(g),$async$apx)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nd(g,13))
try{k=B.EH(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nd(g,13))
u=9
x=12
return A.b(B.b_1(q),$async$apx)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vb(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.fXo(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vb(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.II(C.a.i(J.nd(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.II(C.a.i(J.nd(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cA(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.II(h,d,a0)
x=1
break}if(J.f_(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vb(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apx,w)},
II(d,e,f){return B.hH9(d,e,f)},
hH9(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$II=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b4(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b4(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cG(A.w(s)+"/manifest.json",0,null)
q=A.cG(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZU(r),$async$II)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZU(A.cG(s,0,null)),$async$II)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cp(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.caw(o,r,a1,n,a2),$async$II)
case 11:m=a4
x=J.cp(m)?12:13
break
case 12:x=14
return A.b(B.cav(q),$async$II)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vb(l,a2),$async$II)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cp(m)?null:m
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
return A.i($async$II,w)},
a76(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a76=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.ry(f,r),$async$a76)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cI.gcs().aM(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.U(Date.now(),0,!1).a7().ad())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.T.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a76,w)},
Vb(d,e){return B.hHa(d,e)},
hHa(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vb=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.T.aN(0,a2,null)
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
break}i=C.cF.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BS(i,a3,d,k,l,o),$async$Vb)
case 9:h=a5
if(h!=null)J.cc(n,h)
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
return A.i($async$Vb,w)},
Ny:function Ny(d,e){this.a=d
this.b=e},
cb0:function cb0(){},
a1f(d){var x=A.P(d).ax.a===C.I,w=x?D.afx:D.adf,v=x?D.ah4:C.c,u=x?C.aP:C.M,t=x?C.bL:C.al,s=x?D.aey:C.aM
return new A.aGu([w,s,v,u,t,x?C.ff:C.bP])},
hsl(d,e){var x=e?C.w.j(0.72):C.aW
return A.cf(null,x,!0,null,new B.fP0(e),d,null,!0,!0,y.N)},
caG(d,e,f,g,h,i,j,k,l){return new B.V3(e,l,d,f,k,j,g,h,i,null)},
Ze(d,e,f,g,h,i,j){return new B.bdH(g,h,j,e,i,d,f,null)},
fP0:function fP0(d){this.a=d},
Zb:function Zb(d,e){this.c=d
this.a=e},
azx:function azx(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d5V:function d5V(d){this.a=d},
d5T:function d5T(d){this.a=d},
d5U:function d5U(d){this.a=d},
bv5:function bv5(){},
V3:function V3(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDw:function aDw(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dSL:function dSL(d){this.a=d},
dS8:function dS8(d,e){this.a=d
this.b=e},
dS9:function dS9(d,e){this.a=d
this.b=e},
dRI:function dRI(d,e,f){this.a=d
this.b=e
this.c=f},
dRH:function dRH(d){this.a=d},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRO:function dRO(d,e,f){this.a=d
this.b=e
this.c=f},
dRN:function dRN(d){this.a=d},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSA:function dSA(d){this.a=d},
dS5:function dS5(d,e,f){this.a=d
this.b=e
this.c=f},
dS2:function dS2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dRM:function dRM(d){this.a=d},
dSd:function dSd(d){this.a=d},
dSc:function dSc(){},
dRS:function dRS(d){this.a=d},
dSw:function dSw(d,e){this.a=d
this.b=e},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSy:function dSy(d,e){this.a=d
this.b=e},
dS3:function dS3(d,e){this.a=d
this.b=e},
dS4:function dS4(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSl:function dSl(d){this.a=d},
dSk:function dSk(d){this.a=d},
dSm:function dSm(){},
dSn:function dSn(){},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSq:function dSq(){},
dSr:function dSr(d){this.a=d},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSe:function dSe(d){this.a=d},
dSf:function dSf(d){this.a=d},
dSg:function dSg(d){this.a=d},
dSh:function dSh(d){this.a=d},
dSi:function dSi(d){this.a=d},
dRP:function dRP(){},
dRQ:function dRQ(d){this.a=d},
dRR:function dRR(d,e){this.a=d
this.b=e},
dRL:function dRL(d,e){this.a=d
this.b=e},
dRK:function dRK(d,e,f){this.a=d
this.b=e
this.c=f},
dS6:function dS6(d){this.a=d},
dS7:function dS7(d,e,f){this.a=d
this.b=e
this.c=f},
dS0:function dS0(d,e){this.a=d
this.b=e},
dRX:function dRX(d){this.a=d},
dRU:function dRU(d,e,f){this.a=d
this.b=e
this.c=f},
dRY:function dRY(d){this.a=d},
dRZ:function dRZ(d){this.a=d},
dS_:function dS_(){},
dS1:function dS1(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRT:function dRT(d,e,f){this.a=d
this.b=e
this.c=f},
dRW:function dRW(){},
dSb:function dSb(d){this.a=d},
dSa:function dSa(d,e){this.a=d
this.b=e},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSs:function dSs(d){this.a=d},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSu:function dSu(d){this.a=d},
dSI:function dSI(d){this.a=d},
dSG:function dSG(d){this.a=d},
dSH:function dSH(d){this.a=d},
dSJ:function dSJ(){},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSD:function dSD(d,e,f){this.a=d
this.b=e
this.c=f},
dSB:function dSB(d,e,f){this.a=d
this.b=e
this.c=f},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSF:function dSF(d,e){this.a=d
this.b=e},
azu:function azu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdG:function bdG(d,e,f){this.c=d
this.d=e
this.a=f},
d5R:function d5R(){},
d5S:function d5S(){},
acg:function acg(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6e:function d6e(){},
d6d:function d6d(d){this.a=d},
Zd:function Zd(d,e,f){this.c=d
this.d=e
this.a=f},
azz:function azz(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d6a:function d6a(d){this.a=d},
d6b:function d6b(d,e,f){this.a=d
this.b=e
this.c=f},
d6c:function d6c(d,e){this.a=d
this.b=e},
d68:function d68(d,e){this.a=d
this.b=e},
d66:function d66(d){this.a=d},
d64:function d64(d){this.a=d},
d61:function d61(d){this.a=d},
d67:function d67(d){this.a=d},
d63:function d63(d){this.a=d},
d69:function d69(d){this.a=d},
d65:function d65(d){this.a=d},
d62:function d62(d){this.a=d},
Za:function Za(d,e,f){this.c=d
this.d=e
this.a=f},
azw:function azw(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d5O:function d5O(d){this.a=d},
d5N:function d5N(d,e){this.a=d
this.b=e},
d5P:function d5P(d){this.a=d},
d5M:function d5M(d,e){this.a=d
this.b=e},
d5Q:function d5Q(d){this.a=d},
d5L:function d5L(d,e){this.a=d
this.b=e},
d5H:function d5H(d){this.a=d},
d5I:function d5I(d){this.a=d},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5K:function d5K(d){this.a=d},
PN:function PN(d,e,f){this.c=d
this.d=e
this.a=f},
azC:function azC(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d6r:function d6r(d){this.a=d},
d6s:function d6s(d){this.a=d},
d6t:function d6t(d){this.a=d},
d6u:function d6u(d){this.a=d},
d6v:function d6v(d,e){this.a=d
this.b=e},
d6w:function d6w(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6x:function d6x(d){this.a=d},
Zf:function Zf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azA:function azA(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d6n:function d6n(d,e){this.a=d
this.b=e},
d6o:function d6o(d,e){this.a=d
this.b=e},
d6f:function d6f(d,e,f){this.a=d
this.b=e
this.c=f},
d6g:function d6g(d){this.a=d},
d6h:function d6h(){},
d6m:function d6m(){},
d6i:function d6i(d,e){this.a=d
this.b=e},
d6j:function d6j(d,e){this.a=d
this.b=e},
d6k:function d6k(d,e){this.a=d
this.b=e},
d6l:function d6l(d,e){this.a=d
this.b=e},
ace:function ace(d,e){this.c=d
this.a=e},
d5G:function d5G(d){this.a=d},
Z9:function Z9(d){this.a=d},
azv:function azv(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Zg:function Zg(d,e){this.c=d
this.a=e},
azB:function azB(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d6q:function d6q(d){this.a=d},
d6p:function d6p(d){this.a=d},
bdH:function bdH(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hHc(){var x,w=$.pD(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"VT"+C.d.hv(v)},
NA(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$NA)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NA)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
return A.i($async$NA,w)},
a77(d){return B.hHd(d)},
hHd(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a77=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a77)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.z),!1,!1,C.cG,null),$async$a77)
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
return A.i($async$a77,w)},
Vd(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NA(),$async$Vd)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dP(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.U(Date.now(),0,!1).a7().ad())
r.n(s,d,t)
x=4
return A.b(B.a77(s),$async$Vd)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vd,w)},
Ve(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Ve=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c6(),$async$Ve)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.S(f).k("Z<1>")
u=A.C(new A.Z(f,new B.cb2(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hHc()
t=A.S(u).k("N<1,a8<n,aD>>")
r=A.C(new A.N(u,new B.cb3(s),t),t.k("ak.E"))
x=6
return A.b(B.NA(),$async$Ve)
case 6:q=i
J.aG(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.C))
x=7
return A.b(B.a77(q),$async$Ve)
case 7:x=8
return A.b(B.a78(r,u,g,s),$async$Ve)
case 8:v=new A.bp7(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ve,w)},
apy(d){var x=0,w=A.j(y.y),v,u,t
var $async$apy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NA(),$async$apy)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apy,w)},
cb4(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cb4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NA(),$async$cb4)
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
return A.i($async$cb4,w)},
a78(d,e,f,g){return B.hHe(d,e,f,g)},
hHe(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a78=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apw("media",r,new B.cb1(s,e,g),f,q),$async$a78)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vd(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a78)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vd(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$a78)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vd(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a78)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a78,w)},
EH(d,e,f){return B.hHf(d,e,f)},
hHf(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EH=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c6(),$async$EH)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apy(b3),$async$EH)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.j9,null,g),$async$EH)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apy(b3),$async$EH)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NA(),$async$EH)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.O(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cp(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
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
a8=$.eY().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p4(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaw(a8.a,b0,"media",a8.d,a9).CJ(m)
k=A.cG(l,0,null)
x=17
return A.b(B.aZV(k,n,o,s,b7),$async$EH)
case 17:j=c0
if(j!=null){J.cc(p,j);++q
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
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eY().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p4(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaw(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$EH)
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
a0=A.dP(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.U(Date.now(),0,!1).a7().ad())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a77(e),$async$EH)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EH,w)},
cb2:function cb2(){},
cb3:function cb3(d){this.a=d},
cb1:function cb1(d,e,f){this.a=d
this.b=e
this.c=f},
aQB(){var x=0,w=A.j(y.H),v,u
var $async$aQB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hSa=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aQB)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aQB)
case 3:u=$.h1D
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aQB)
case 4:$.h1D=$.i_O=$.i_P=null
return A.h(null,w)}})
return A.i($async$aQB,w)},
fs2(d){var x=0,w=A.j(y.H),v,u
var $async$fs2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a71){x=1
break}u=new A.bg($.bB,y.d4)
d.c=new B.fs3(new A.bY(u,y.aY))
x=3
return A.b(u.it(0,C.hT,new B.fs4()),$async$fs2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fs2,w)},
i_M(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hGX(x):x},
h1H(d){var x=0,w=A.j(y.T),v,u,t
var $async$h1H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,13))
if(C.a.a0(u,"WR")){v=B.apA(u)
x=1
break}v=B.fXo(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1H,w)},
h1G(d){var x=0,w=A.j(y.T),v,u,t
var $async$h1G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,14))
if(C.a.a0(u,"WR")){v=B.apB(u)
x=1
break}v=B.fXo(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1G,w)},
fKB(d){var x=0,w=A.j(y.T),v
var $async$fKB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apB(d),$async$fKB)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKB,w)},
bBf(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bBf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h1G(d),$async$bBf)
case 3:q=f
if(q==null){x=1
break}t=C.T.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBf,w)},
fgl(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fgl=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.V7(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BS(d.aoq(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgl,w)},
GD(d,e,f){return B.i2d(d,e,f)},
i2d(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GD=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h1H(a1),$async$GD)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.T.aN(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b4(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hue().aEp(D.dtL,null),$async$GD)
case 4:l=d.h1D=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ayi(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bB,y.b1)
l.y=new B.fsB(f,k,new B.fsC(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7L(0,new B.Xg(r,"offer")),$async$GD)
case 5:d=l
x=7
return A.b(l.al6(0),$async$GD)
case 7:x=6
return A.b(d.a7D(0,a4),$async$GD)
case 6:x=8
return A.b(B.fs2(l),$async$GD)
case 8:x=9
return A.b(l.apb(),$async$GD)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i_M(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.T.ao(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apC(m,h),$async$GD)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hcL(h)
case 11:v=new A.boq(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GD,w)},
fs3:function fs3(d){this.a=d},
fs4:function fs4(){},
fsC:function fsC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsB:function fsB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fsA:function fsA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i47(d){switch(d){case"new":return D.enu
case"checking":return D.env
case"connected":return D.enx
case"completed":return D.enw
case"failed":return D.enz
case"disconnected":return D.enA
case"closed":return D.aNj
case"count":return D.eny}return D.aNj},
i48(d){switch(d){case"new":return D.aNk
case"gathering":return D.enB
case"complete":return D.a71}return D.aNk},
iet(d){switch(d){case"stable":return D.enC
case"have-local-offer":return D.enD
case"have-local-pranswer":return D.enF
case"have-remote-offer":return D.enE
case"have-remote-pranswer":return D.enG
case"closed":return D.aNq}return D.aNq},
icH(d){switch(d){case"new":return D.aNn
case"connecting":return D.aNo
case"connected":return D.aNp
case"closed":return D.a72
case"disconnected":return D.aNm
case"failed":return D.aNl}return D.a72},
a9t:function a9t(d,e){this.a=d
this.b=e},
OC:function OC(d,e){this.a=d
this.b=e},
Xf:function Xf(d,e){this.a=d
this.b=e},
OB:function OB(d,e){this.a=d
this.b=e},
Fa:function Fa(d,e){this.a=d
this.b=e},
cmg:function cmg(){},
fZ9(d){var x=new B.F9()
x.a=d
x.b=!0
return x},
F9:function F9(){this.b=this.a=$},
a9s:function a9s(){},
atS:function atS(){},
Xg:function Xg(d,e){this.a=d
this.b=e},
fXk(){var x=0,w=A.j(y.H)
var $async$fXk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fXk,w)},
fXn(d,e,f){var x=0,w=A.j(y.T),v
var $async$fXn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mx(D.mN))){v=null
x=1
break}v=B.fKS(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXn,w)},
hcL(d){var x,w=F.acG.a4x(C.dI.aM(d),null)
if(w.length===0){x=C.dI.aM(d)
return C.cI.gcs().aM(x)}return C.cI.gcs().aM(w)},
hGW(d){var x,w,v=C.cF.aM(d)
try{x=C.cg.cz(0,F.acF.bd1(v,!1))
return x}catch(w){x=C.cg.cz(0,v)
return x}},
fXo(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hGW(C.a.b4(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b4(t,w.length)
try{v=C.cg.cz(0,C.cF.aM(x))
return v}catch(u){return x}}return null},
hGX(d){var x,w,v,u,t,s=A.a([],y.s)
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
hGY(){var x,w=$.pD(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"DS"+C.d.hv(v)},
b_0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b_0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b_0)
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
return A.i($async$b_0,w)},
caL(d,e){return B.hGZ(d,e)},
hGZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$caL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$caL)
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
return A.i($async$caL,w)},
b_3(d){var x=0,w=A.j(y.y),v,u,t
var $async$b_3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_0(d),$async$b_3)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_3,w)},
b_2(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b_2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hGY()
r=C.a.i(f)
t=C.dI.aM(s)
x=3
return A.b(B.caL(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cI.gcs().aM(t),"usesRemaining",999999,"createdAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$b_2)
case 3:if(!h){v=null
x=1
break}v=new A.a0h("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_2,w)},
b_1(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b_1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b_0(o),$async$b_1)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cz(0,C.cF.aM(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b_1,w)},
caM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$caM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bCa("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$caM)
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
return A.i($async$caM,w)},
b_4(d){var x=0,w=A.j(y.h),v,u,t
var $async$b_4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IE(),$async$b_4)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_4,w)},
apt(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apt)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b_4(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apt,w)},
apr(d,e){var x=0,w=A.j(y.H)
var $async$apr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apr)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apr)
case 2:return A.h(null,w)}})
return A.i($async$apr,w)},
a7_(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7_)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.IE(),$async$a7_)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.C))
x=5
return A.b(A.a6Z(s),$async$a7_)
case 5:x=6
return A.b(B.apr(f,u),$async$a7_)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7_,w)},
a70(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a70=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a70)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.IE(),$async$a70)
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
return A.b(B.apr(g,q),$async$a70)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6Z(u),$async$a70)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a70,w)},
a71(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a71=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a71)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.IE(),$async$a71)
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
s=B.aZY(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a71)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.T.ao(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.U(Date.now(),0,!1).a7().ad()],p,p),null)),$async$a71)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a71,w)},
caN(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$caN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$caN)
case 7:s=f
p=A.w(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.T.aN(0,r,null)
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
return A.i($async$caN,w)},
IF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.caN(d),$async$IF)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b_4(t),$async$IF)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aps(d),$async$IF)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZY(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aps(d),$async$IF)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IF,w)},
aps(d){var x=0,w=A.j(y.H)
var $async$aps=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aps)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aps)
case 2:return A.h(null,w)}})
return A.i($async$aps,w)},
b_5(){var x,w=$.pD(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(32)]
return C.d.hv(v)},
a72(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fXp(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
caQ(d){return B.hH0(d)},
hH0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$caQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a72(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$caQ)
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
return A.i($async$caQ,w)},
apv(d,e){return B.hH1(d,e)},
hH1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a72(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apv)
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
return A.i($async$apv,w)},
caS(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$caS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a72(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apv(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$caS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$caS,w)},
caR(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$caR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a72(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apv(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.z)),$async$caR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$caR,w)},
caT(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$caT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a72(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apv(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$caT,w)},
caU(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$caU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fXp(d)){v=null
x=1
break}x=3
return A.b(B.caQ(d),$async$caU)
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
return A.i($async$caU,w)},
a79(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a79=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a79)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a79)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
return A.i($async$a79,w)},
apz(d){return B.hHg(d)},
hHg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$apz)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.U(Date.now(),0,!1).a7().ad()],y.N,y.z),!1,!1,C.cG,null),$async$apz)
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
return A.i($async$apz,w)},
apA(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c6(),$async$apA)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a79(),$async$apA)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cz(0,C.cF.aM(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dP(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.U(Date.now(),0,!1).a7().ad())
J.aG(s,j,o)
x=9
return A.b(B.apz(s),$async$apA)
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
return A.i($async$apA,w)},
apC(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c6(),$async$apC)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a79(),$async$apC)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dP(A.a2(s,r,q),r,q)
r=C.dI.aM(C.a.i(e))
q.n(0,"answer",C.cI.gcs().aM(r))
q.n(0,"answerAt",new A.U(Date.now(),0,!1).a7().ad())
t.n(u,p,q)
x=5
return A.b(B.apz(u),$async$apC)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apC,w)},
apB(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c6(),$async$apB)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a79(),$async$apB)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cz(0,C.cF.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apB,w)},
aow(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aow=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q4)){v=null
x=1
break}x=3
return A.b(p.m2(e),$async$aow)
case 3:r=g
u=4
x=7
return A.b(r.hw(C.h7),$async$aow)
case 7:q=g
o=q
o=o==null?null:J.eV(J.vw(o))
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
return A.i($async$aow,w)},
iaG(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.u(w),5,"0")
return v},
fIZ(d){return B.iaI(d)},
iaI(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fIZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.im("media").KV(d,3600),$async$fIZ)
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
return A.i($async$fIZ,w)},
D8(d,e,f,g,h,i){var x=null
return B.iaF(d,e,f,g,h,i)},
iaF(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D8=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hcO(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fXr(r),$async$D8)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fIZ(o),$async$D8)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a73(r),$async$D8)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aQz)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LW(A.a([],g))
x=15
return A.b(d.f3(0,A.auI("GET",A.cG(n,0,null))).da(0,C.FE),$async$D8)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a73(r),$async$D8)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kw(d)
u=19
case 22:x=24
return A.b(d.C(),$async$D8)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b_7(r,k),$async$D8)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a3(0),$async$D8)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.M)(b0),++f
x=8
break
case 10:i=B.V7(r)
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
return A.b(B.a73(r),$async$D8)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D8,w)},
aQj(d){return B.iaH(d)},
iaH(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aQj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.im("media").W(0,d),$async$aQj)
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
return A.i($async$aQj,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[150]
O=c[42]
F=c[246]
I=c[140]
P=c[224]
E=c[217]
G=c[92]
Q=c[188]
R=c[141]
S=c[222]
K=c[250]
L=c[255]
B=a.updateHolder(c[21],B)
D=c[253]
T=c[187]
M=c[207]
U=c[69]
V=c[256]
W=c[75]
X=c[58]
N=c[91]
Y=c[254]
B.cmh.prototype={
aEp(d,e){return this.cKU(d,e)},
cKU(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aEp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.T(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dP(r,s,t)
t.v(0,d)
u=new q(A.kn(A.cA(t)))
t=J.k(u)
v=B.hLR(C.cI.gcs().aM(new A.dd(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aEp,w)}}
B.b4f.prototype={
byE(d){var x=this,w=x.w
w.onclose=A.hq(new B.cmc(x))
w.onopen=A.hq(new B.cmd(x))
w.onmessage=A.hq(new B.cme(x))
w.onbufferedamountlow=A.hq(new B.cmf(x))},
gdc(d){return this.x},
ahp(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.F9()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fZ9(J.eV(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$ahp)
case 8:v=t.fZ9(s.anI(f,0,null))
x=1
break
case 7:case 4:v=B.fZ9(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahp,w)}}
B.b4g.prototype={
byF(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hq(new B.cmi(x)))
w.addEventListener("icecandidate",A.hq(new B.cmj(x)))
w.addEventListener("iceconnectionstatechange",A.hq(new B.cmk(x)))
w.onicegatheringstatechange=A.hq(new B.cml(x))
w.addEventListener("signalingstatechange",A.hq(new B.cmm(x)))
if(!$.h5o())w.addEventListener("connectionstatechange",A.hq(new B.cmn(x)))
w.addEventListener("negotiationneeded",A.hq(new B.cmo(x)))
w.addEventListener("track",A.hq(new B.cmp(x)))},
al6(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$al6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kn(A.cA(A.T(y.N,y.z)))),y.aQ),$async$al6)
case 3:t=f
v=new B.Xg(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$al6,w)},
a7D(d,e){return this.bo3(0,e)},
bo3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7D)
case 2:return A.h(null,w)}})
return A.i($async$a7D,w)},
a7L(d,e){return this.boj(0,e)},
boj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7L)
case 2:return A.h(null,w)}})
return A.i($async$a7L,w)},
apb(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Xg(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apb,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.acf.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Zc.prototype={
U(){return new B.azy()},
gcZ(){return this.c}}
B.azy.prototype={
a_(){this.a2()
this.ae9()},
ae9(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ae9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZZ(u.e,u.c),$async$ae9)
case 2:t=e
if(v.c!=null)v.m(new B.d5Z(v,t))
return A.h(null,w)}})
return A.i($async$ae9,w)},
Qj(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apo(t.e,t.c,!1),$async$Qj)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.f5G)
x=1
break}x=4
return A.b(B.a6Y(u.a.c,"individual"),$async$Qj)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a3(t,!1).a67(A.e_(new B.d5W(u),!1,null,y.H)),$async$Qj)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qj,w)},
Jh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fq1(o),$async$Jh)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a71(o.e,r,s,q),$async$Jh)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.f2H)
x=1
break}x=5
return A.b(B.a6Y(u.a.c,"member"),$async$Jh)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a3(o,!1).a67(A.e_(new B.d5Y(u),!1,null,y.H)),$async$Jh)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jh,w)},
y3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$y3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6X(t.e,o,t.f,t.r,t.w,s),$async$y3)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6Y(u.a.c,"org_owner"),$async$y3)
case 4:x=5
return A.b(B.apt(u.a.c),$async$y3)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fqw(o),$async$y3)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7_(s,t,o,q.c),$async$y3)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.f2E)
x=1
break}x=10
return A.b(B.apt(u.a.c),$async$y3)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.S(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a3(o,!1).a67(A.e_(new B.d5X(u),!1,null,y.H)),$async$y3)
case 11:case 1:return A.h(v,w)}})
return A.i($async$y3,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jr:C.pT,q=B.fXm(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.fW,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fp5,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h3,t,t,t),C.aA,D.fIx,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c2g,C.n),t,t,t,t,C.ey,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lL(new B.d60(),t),C.N,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ad)
if(!u.a.x)C.d.v(p,A.a([new B.acH(C.eV,C.azW,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gceu(),t),C.ad],v))
p.push(new B.acH(C.p3,C.a2U,"Team Member","Sign in with your organization access code + password",u.gcfl(),t))
p.push(C.ad)
p.push(new B.acH(C.amo,C.a4r,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gceR(),t))
return A.c5(t,r,A.bm(!0,A.cd(A.x(p,C.aj,t,C.e,C.j,0,C.p),C.t,t,C.y,t,F.ajF,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acH.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aM(!1,r,!0,A.eF(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oy,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.yy,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aC8.prototype={}
B.aFe.prototype={}
B.jp.prototype={
mx(d){var x=this.b,w=C.a.oL(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b4(x,w+1).toLowerCase())},
gapR(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ac(x/1024,1)+" KB"
if(x<1073741824)return C.k.ac(x/1048576,1)+" MB"
return C.k.ac(x/1073741824,2)+" GB"},
ag(){var x,w=this,v=A.T(y.N,y.z)
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
bcu(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jp(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cJn(d){return this.bcu(null,d)},
aEa(d){return this.bcu(d,null)}}
B.V1.prototype={
U(){return new B.aDu(new A.cz(null,y.A))},
gcZ(){return this.c}}
B.aDu.prototype={
a_(){this.a2()
this.aea()},
aea(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aea=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BR(u.a.c),$async$aea)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dRE(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aea,w)},
aeb(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fE(new A.fA(s)),$async$aeb)
case 3:t=u.c
if(t!=null)t.J(y.q).f.S(D.f6A)
case 1:return A.h(v,w)}})
return A.i($async$aeb,w)},
ZM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ZM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aow(s.d,4),$async$ZM)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t4(r,"ngmy_my_code_"+m+".png"),$async$ZM)
case 8:q=e
o=s.c
if(o!=null)o.J(y.q).f.S(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.J(y.q).f.S(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ZM,w)},
ahR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aa5("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahR,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jr:C.pT,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mp
else if(q.e==null)x=A.at(new A.D(C.ey,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aC.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a3m,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aje,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aC.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mV,w,C.kN,new A.eG(A.p(p,A.pW(p,p,!1,B.hGS(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ad,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kN,A.B(A.a([A.E(A.es(N.Co,C.Uz,q.gc7w(),p),1),C.as,A.E(A.dq(C.yY,C.a9f,q.gc7x(),A.bp(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.es(M.a1J,D.fEd,q.gcu8(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.N6,p,p,C.ag)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.V5.prototype={
U(){return new B.aDx(new A.as(C.at,$.ax()),A.jZ(!0,null,!0,!0,null,null,!1))}}
B.aDx.prototype={
a_(){var x,w
this.a2()
x=this.a.e
w=B.ID(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
t(){var x=this.d
x.T$=$.ax()
x.P$=0
this.e.t()
this.a1()},
ZN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.ID(u.d.a.a)
if(t==null){u.m(new B.dSN(u))
x=1
break}u.m(new B.dSO(u))
s=u.a
r=s.c
x=3
return A.b(B.a6W(s.d,new B.dSP(u),t,r),$async$ZN)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dSQ(u))
if(q){s=u.c
s.toString
A.a3(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$ZN,w)},
a1Z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1Z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cp(r.a.d)){x=1
break}r.m(new B.dSR(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.ry(r.a.c,q),$async$a1Z)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dSS(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahL(p,m,l,j,k),$async$a1Z)
case 8:o=e
if(r.c!=null)r.m(new B.dST(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dSU(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dSV(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1Z,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.afx:D.adf,h=j?D.ah4:C.c,g=j?C.aP:C.M,f=j?C.bL:C.al,e=j?D.aey:C.aM
i=[i,e,h,g,f,j?C.ff:C.bP]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bQL,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.ay,C.aD,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fc,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a3m,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ur(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bj_()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.X,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.N1,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dSW(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.mf,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.Lz(l.a.d,4)
m=A.C(new A.N(m,new B.dSX(x,new A.aGu(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l_,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.N,e,C.N,q,C.d6,p,C.N,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ex,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f1c)
else q.push(A.X(C.lC,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aL,A.d9(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b7,new A.o(u,k,s,t,k,k,C.n),C.iO,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.aj,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.byY,k,k,C.ag),1)
u=l.f?k:l.gcu9()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a1J,D.fFh,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cj,k,new A.b7(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc7y()
t=A.bp(C.aC,k,k,0,C.c,k,C.nl,k,new A.b7(A.m(16),C.a0),k,k,k)
return A.c5(g,h,new A.an(C.a_,k,C.aa,C.t,A.a([f,v,A.bm(!0,A.l5(new B.dSY(),A.x(A.a([e,new A.D(D.bys,A.x(A.a([s,C.N,i,C.ad,A.bH(l.f?C.t_:D.fDA,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.Z5,k,k,new A.bn(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bj_.prototype={
oH(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hi(C.bw,v.length),C.aO)}}
B.V2.prototype={
U(){return new B.aDv()}}
B.aDv.prototype={
a_(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b4,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b4,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.at,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.T$=$.ax()
v.P$=0
v=w.e
v===$&&A.c()
v.T$=x
v.P$=0
v=w.f
v===$&&A.c()
v.T$=x
v.P$=0
w.a1()},
aec(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aec=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dRF(r))
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
return A.b(B.a70(p,m,n,o,C.a.i(l).length===0?null:l),$async$aec)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.S(D.f6b)
s=[1]
x=4
break}p.J(y.q).f.S(D.f4P)
p=r.c
p.toString
A.a3(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dRG(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aec,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jr:C.pT,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fw7,s,s,s,1,s,!0),p=A.p(s,D.bqH,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.H6,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.X,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.bXL,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.X,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.bXG,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.X,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.bXW,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.ao,s,s,s,s)
v=t.r?s:t.gc7z()
u=A.bp(C.aC,s,s,s,s,C.fX,s,s,s,s,s,s)
return A.c5(q,r,A.cd(A.x(A.a([p,C.d6,o,C.ad,x,C.ad,w,C.mV,A.bH(t.r?C.t_:C.aTk,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abX.prototype={}
B.bvs.prototype={
a4N(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ch(r.aoq()))
x=3
return A.b(B.Rk(t,s),$async$a4N)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4N,w)},
gcZ(){return this.a}}
B.Ny.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Zb.prototype={
U(){return new B.azx(new A.as(C.at,$.ax()),A.jZ(!0,null,!0,!0,null,null,!1))}}
B.azx.prototype={
a_(){this.a2()
$.aW.x1$.push(new B.d5V(this))},
t(){var x=this.d
x.T$=$.ax()
x.P$=0
this.e.t()
this.a1()},
c7F(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a3(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a1f(d),u=x.a.c,t=u?C.im:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.jr:v.a[0],p=A.m(24),o=A.I(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aC.j(u?0.25:0.12),C.fW,32)],n),l=A.p(w,T.ap0,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aC.j(0.4),C.cv,16)],n),C.apO,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ur(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bv5()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.X,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.FP,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b0s),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d5T(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.mf,w,w,w,w)
f=f[1]
f=A.E(A.dR(C.nG,new B.d5U(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cj,w,new A.b7(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.cH,12)],n)
g=y.p
return A.eP(w,C.K,new A.cT(Q.KS,A.c1(new A.D(C.ye,A.x(A.a([l,C.aL,k,C.N,j,C.dW,i,C.dW,A.B(A.a([f,C.as,A.E(A.c1(A.aF(!1,C.a1,!0,w,A.aM(!1,A.m(14),!0,D.eho,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc7E(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.OP,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.N9,C.d5,w,w,w)}}
B.bv5.prototype={
oH(d,e){return e.al1(e.a.toUpperCase())}}
B.V3.prototype={
U(){return new B.aDw(A.a([],y.r),A.aX(y.N))},
gcZ(){return this.c}}
B.aDw.prototype={
a_(){var x=this
x.a2()
x.tR()
x.w=A.dm(C.jx,new B.dSL(x))},
t(){var x=this.w
if(x!=null)x.a3(0)
B.Vc()
this.a1()},
a0Q(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nx(u.a.c),$async$a0Q)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AP(u.a.c),$async$a0Q)
case 4:u.m(new s.dS8(u,e))
u.i7("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0Q,w)},
tR(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nx(u.a.c),$async$tR)
case 3:t=e
x=4
return A.b(B.AP(u.a.c),$async$tR)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dS9(u,s))
if(t>0)u.i7("Received "+A.w(t)+" file(s) via My Code.")
u.ND(u.d)
B.BR(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tR,w)},
ND(d){return this.bCD(d)},
bCD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$ND=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a75(r,u.a.c),$async$ND)
case 8:p=f
if(u.c==null){x=1
break}new B.dRI(u,r,p).$0()
u.c.em()
case 7:if(!(C.a.a0(r.c,"video/")||r.mx(D.mN))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Va(r,u.a.c),$async$ND)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.M)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AP(u.a.c),$async$ND)
case 12:u.m(new o.dRJ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$ND,w)},
O0(d){return this.bIS(d)},
bIS(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$O0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a75(d,u.a.c),$async$O0)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dRO(u,d,t))
x=6
return A.b(A.fE(new A.fA(t)),$async$O0)
case 6:u.i7("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fE(new A.fA(r.toUpperCase())),$async$O0)
case 7:u.i7("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$O0,w)},
i7(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.S(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.V,x,x,x,x,x,x,x,x,x,x))},
tS(d,e){return this.cEM(d,e)},
cEM(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dSz(r,e))
u=3
x=6
return A.b(d.$0(),$async$tS)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dSA(r))
$.eU.ms()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tS,w)},
gaVq(){var x=this.a
return x.f||x.r||x.w},
Ic(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ic=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaVq()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.caJ(s,n,r,q,o,t),$async$Ic)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i7("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fCq(o,u.a.c),$async$Ic)
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
return A.b(B.Da(s,o,r,q,n,t),$async$Ic)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ic,w)},
a_U(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apt(u.a.c),$async$a_U)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i7("No organization portal found.")
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
return A.b(A.a3(t,!1).cg(A.e_(new B.dS5(u,r,q),!1,null,y.H)),$async$a_U)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_U,w)},
a1_(d){return this.cnG(d)},
cnF(){return this.a1_(1)},
cnG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaVq()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apq(u.a.c),$async$a1_)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1_,w)},
ac5(d,e,f){return this.bZG(d,e,f)},
bZG(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ac5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7(e)
x=1
break}x=3
return A.b(u.tS(new B.dS2(u,d,null,e,f),"Uploading\u2026"),$async$ac5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ac5,w)},
bCL(){B.hrw(!1,new B.dRM(this))
return},
csI(){this.m(new B.dSd(this))},
ayG(){var x=0,w=A.j(y.H),v=this
var $async$ayG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bCL()
return A.h(null,w)}})
return A.i($async$ayG,w)},
ac1(){var x=0,w=A.j(y.H),v=this
var $async$ac1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tS(new B.dRS(v),"Importing\u2026"),$async$ac1)
case 2:return A.h(null,w)}})
return A.i($async$ac1,w)},
Sm(d){return this.cE8(d)},
cE8(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mx(D.mN)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a3(t,!1).cg(A.e_(new B.dSw(u,d),!1,null,y.H)),$async$Sm)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mx(D.QM)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a3(t,!1).cg(A.e_(new B.dSx(u,d),!1,null,y.H)),$async$Sm)
case 8:x=1
break
case 7:x=u.c_n(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a3(t,!1).cg(A.e_(new B.dSy(u,d),!1,null,y.H)),$async$Sm)
case 11:x=1
break
case 10:u.i7("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sm,w)},
c_n(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oL(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cLa,C.a.b4(x,w+1).toLowerCase())},
afD(d){return this.cey(d)},
cey(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mx(D.mN)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a3(t,!1).cg(A.e_(new B.dS3(u,d),!1,null,y.H)),$async$afD)
case 5:x=1
break
case 4:u.m(new B.dS4(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afD,w)},
RI(d){return this.cvD(d)},
cvD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pf(t,s.c,s.f),$async$RI)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tS(new B.dSp(u,d),"Preparing QR\u2026"),$async$RI)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RI,w)},
aig(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aig=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dSq(),A.S(t).k("N<1,n>")).fH(0)}t=u.d
s=A.S(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dSr(q),s),s.k("J.E"))
if(r.length===0){u.i7("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RI(r),$async$aig)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aig,w)},
ai9(d){return this.cva(d)},
cva(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1f(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.K,null,new B.dSj(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ai9)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sm(d)
break
case"qr":u.RI(A.a([d],y.r))
break
case"send_my_code":u.cfa(A.a([d],y.r))
break
case"save":u.ahw(d)
break
case"delete":u.J2(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ai9,w)},
XF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$XF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dRP(),A.S(t).k("N<1,n>")).fH(0)}t=u.d
s=A.S(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dRQ(q),s),s.k("J.E"))
if(r.length===0){u.i7("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pf(t,s.c,s.f),$async$XF)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tS(new B.dRR(u,r),"Preparing file\u2026"),$async$XF)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XF,w)},
agI(d){return this.cm0(d)},
cm0(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hsl(d,!1),$async$agI)
case 3:s=f
r=s==null
q=B.a72(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i7("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agI,w)},
afJ(){var x=0,w=A.j(y.H),v=this,u
var $async$afJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fK4(u,v.a.c),$async$afJ)
case 2:return A.h(null,w)}})
return A.i($async$afJ,w)},
bCK(){B.hrw(!1,new B.dRL(this,null))
return},
Jg(d,e){return this.cfb(d,e)},
b0s(d){return this.Jg(null,d)},
cfa(d){return this.Jg(d,null)},
cfb(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jg=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dS6(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xk.c9().anI(!0,C.a_S,!1),$async$Jg)
case 10:r=g
if(r==null||J.cp(r.a)){x=1
break}x=11
return A.b(s.tS(new B.dS7(l,s,r),"Preparing\u2026"),$async$Jg)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.i7("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i7("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bDk(p,l,e,s.a.c),$async$Jg)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jg,w)},
Is(d){return this.bZt(d)},
bZt(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Is=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hGR(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0s(t),$async$Is)
case 8:x=6
break
case 7:u.i7("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i7("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tS(new B.dS0(u,d),"Receiving video\u2026"),$async$Is)
case 11:x=1
break
case 10:x=12
return A.b(u.tS(new B.dS1(u,d),"Receiving\u2026"),$async$Is)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Is,w)},
Ei(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ei=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.D4()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agI(t),$async$Ei)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Is(s),$async$Ei)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a3(t,!1).cg(A.e_(new B.dSb(u),!1,null,y.N)),$async$Ei)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tR(),$async$Ei)
case 10:x=1
break
case 9:x=11
return A.b(u.Is(C.a.i(r)),$async$Ei)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ei,w)},
ahw(d){return this.crg(d)},
crg(d){var x=0,w=A.j(y.H),v=this
var $async$ahw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tS(new B.dSa(v,d),"Saving\u2026"),$async$ahw)
case 2:return A.h(null,w)}})
return A.i($async$ahw,w)},
J2(d){return this.bLc(d)},
bLc(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$J2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lb(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$J2)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.caM(t),$async$J2)
case 6:case 5:s=d.a
x=7
return A.b(B.EG(u.a.c,s),$async$J2)
case 7:u.r.W(0,s)
x=8
return A.b(u.tR(),$async$J2)
case 8:case 1:return A.h(v,w)}})
return A.i($async$J2,w)},
aim(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aim=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1f(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.K,null,new B.dSv(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aim)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afJ()
break
case"import":u.ac1()
break}case 1:return A.h(v,w)}})
return A.i($async$aim,w)},
c7C(d){var x=d.c
if(C.a.a0(x,"video/")||d.mx(D.mN))return C.qi
if(C.a.a0(x,"image/")||d.mx(D.QM))return C.uj
if(C.a.q(x,"pdf"))return E.Ok
return D.amR},
B(d){var x,w,v=this,u=null,t=B.a1f(d),s=t.a,r=s[0],q=s[3],p=A.aJ(u,u,u,u,C.GZ,u,u,u,new B.dSG(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aJ(u,u,u,u,D.bRi,u,u,u,v.e?u:v.gceS(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcsH()
n.push(A.aJ(u,u,u,u,A.X(v.r.a===x?D.bLy:E.anf,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aJ(u,u,u,u,C.a1G,u,u,u,v.e?u:v.gc7D(),u,u,u,u,"Scan QR",u))
n.push(A.aJ(u,u,u,u,C.og,u,u,u,v.e?u:v.gb1z(),u,u,u,u,"Upload files",u))
n.push(A.aJ(u,u,u,u,D.bT1,u,u,u,v.e?u:new B.dSH(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lL(new B.dSI(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([C.aC.j(A.P(d).ax.a===C.I?0.12:0.08),C.aC.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.lk(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.azu(C.jB,s,!0,t,w?u:v.gcvE(),u),1)
x.push(new A.D(D.bxb,A.l5(new B.dSJ(),A.B(A.a([s,C.as,A.E(new B.azu(C.uk,"Export",!1,t,w?u:v.gbOY(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iP,u,u,new A.bn(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdG(t,v.e?u:v.gb1z(),u)
else s=A.ke(!0,u,u,new B.dSK(v,t),s,u,D.bx3,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a_,u,C.aa,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.azu.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aC,t,t,0,C.c,t,C.vR,t,new A.b7(s,C.a0),t,t,t)
return A.dq(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vR,t,new A.b7(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eZ,t,t,t),u.r,v)}}
B.bdG.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l5(new B.d5R(),new A.D(E.ZX,A.x(A.a([A.l5(new B.d5S(),A.p(x,A.X(C.yA,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ay,C.aD,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ew,C.hD,x,x,new A.bn(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dq(C.og,D.fIR,this.d,A.bp(C.aC,x,x,x,C.c,x,C.N7,x,new A.b7(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.cu,C.Bn,x,x,new A.bn(0,1,w),s),x,x,x)}}
B.acg.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aC.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mx(D.mN))p=D.dj9
else{p=C.a.a0(p,"image/")||i.mx(D.QM)
n=y.O
p=p?A.a([C.cN,C.aC],n):A.a([C.aK.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ay,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapR()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mx(D.mN))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.E(A.x(A.a([q,C.av,A.d(C.d.aG(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aJ(j,j,j,j,A.X(C.fK,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cd))
if(!(!o||i.mx(D.mN)))l.push(A.fV3(C.aC,!1,j,j,j,!1,j,j,new B.d6d(k),j,j,new A.b7(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.oa,x[4],j,j,j,j)
l.push(A.aJ(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cd))
return A.l5(new B.d6e(),new A.D(C.ea,A.aF(!1,C.a1,!0,j,A.aM(!1,r,!0,new A.D(C.Zq,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.r,-1)),j,j,C.ah),j),C.cu,h,new A.cs("docshare_row_"+i.a,y.aw),j,new A.bn(0,1,y.X),y.i)}}
B.Zd.prototype={
U(){return new B.azz()},
gcZ(){return this.c}}
B.azz.prototype={
a_(){this.a2()
this.xS()},
t(){B.hH5(this.e)
this.a1()},
xS(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.ry(o.c,o.d),$async$xS)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hH8(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hH7(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d6a(s))
x=1
break}s.m(new B.d6b(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d6c(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xS,w)},
a1Y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.ry(t.c,t.d),$async$a1Y)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.f3d)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahL(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1Y)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1Y,w)},
bZm(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ks(u,C.A,v,new B.d68(w,t),C.h5,C.dy,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fO(t,C.A,v,new B.d69(w),C.h5,C.dy,!0,v,!1,v,v)
else return C.bJ
return A.uA(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1f(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aJ(u,u,u,u,C.Cp,u,u,u,v.gb5l(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.EB
else{q=v.r
if(q!=null)t=new A.D(C.ey,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ey,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aL,A.dq(C.Cp,D.frt,v.gb5l(),A.bp(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.bZm()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.Za.prototype={
U(){return new B.azw(A.aiz(),C.bE,C.bE)},
gcZ(){return this.c}}
B.azw.prototype={
a_(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fv(w,A.a6(w).k("fv<1>")).ip(new B.d5O(v))
x.gcSi().ip(new B.d5P(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fv(x,A.a6(x).k("fv<1>"))}if(x==null)x=C.b6F
x.ip(new B.d5Q(v))
v.xS()},
xS(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ry(p.c,p.d),$async$xS)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d5H(s))
x=1
break}x=8
return A.b(s.d.Cb(0,new A.a3j(r,s.a.d.c)),$async$xS)
case 8:if(s.c==null){x=1
break}s.m(new B.d5I(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d5J(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xS,w)},
ZO(){var x=0,w=A.j(y.H),v=this,u
var $async$ZO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h6(0),$async$ZO)
case 5:x=3
break
case 4:x=6
return A.b(u.is(0),$async$ZO)
case 6:case 3:return A.h(null,w)}})
return A.i($async$ZO,w)},
aTh(d){var x=d.a
return C.a.aZ(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.u(C.o.an(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1f(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.EB
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bMy,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.OP,C.n),o,88,o,o,o,o,o,88)
t=A.l4(C.aC,o,o,m,0,new B.d5K(p),C.o.E(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aTh(p.w)+" / "+p.aTh(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aC,o,o,o,o,D.f_G,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yJ:C.id,o,o,o,o,o)
x=A.x(A.a([u,C.kN,t,x,C.d6,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc7G(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.rh,x,o),o,o,o),o,!1,!1,o,o)}}
B.PN.prototype={
U(){return new B.azC()},
gcZ(){return this.c}}
B.azC.prototype={
a_(){this.a2()
this.PF()},
PF(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PF=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fXn(o.c,o.d,new B.d6r(s)),$async$PF)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d6s(s))
x=1
break}s.e=r
q=O.i35(r)
if(q==null){s.m(new B.d6t(s))
x=1
break}s.d=q
q.aR(0,s.gb0f())
x=8
return A.b(q.io(0).da(0,C.rd),$async$PF)
case 8:if(s.c==null){x=1
break}s.m(new B.d6u(s))
x=9
return A.b(q.q4(0),$async$PF)
case 9:q.tw(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d6v(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PF,w)},
cd8(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d6w(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CZ(0,x.gb0f())
w=x.d
if(w!=null)w.t()
B.id_(x.e)
x.a1()},
aef(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aef=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_6(u.c,u.d),$async$aef)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.S(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aef,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1f(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aJ(t,t,t,t,C.p9,t,t,t,u.gc7A(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.EB
else{q=u.r
if(q!=null)s=new A.D(C.ey,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ai3(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fL(x,new A.an(C.A,t,C.aa,C.t,A.a([new A.Aj(s,t),A.aB(t,A.Dk(A.p(t,A.X(q?I.yJ:C.id,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b7,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d6y(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bJ}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.Zf.prototype={
U(){return new B.azA(new A.cz(null,y.A))}}
B.azA.prototype={
gcEt(){var x,w,v=this.a
if(v.e!==D.S8)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcE6(){var x,w,v=this.a
if(v.e!==D.zB)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a2()
x=v.gcEt()
if(x!=null){v.QJ(x)
v.e=A.dm(R.FH,new B.d6n(v,x))}w=v.gcE6()
if(w!=null){v.QI(w)
v.f=A.dm(C.fS,new B.d6o(v,w))}},
t(){var x=this.e
if(x!=null)x.a3(0)
x=this.f
if(x!=null)x.a3(0)
this.a1()},
QI(d){return this.ckd(d)},
ckd(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apy(d),$async$QI)
case 3:t=f
x=4
return A.b(B.cb4(d),$async$QI)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d6f(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QI,w)},
QJ(d){return this.cke(d)},
cke(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fKB(d),$async$QJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bBf(t),$async$QJ)
case 4:if(u.c==null){x=1
break}u.m(new B.d6g(u))
u.c.J(y.q).f.S(D.aQa)
case 1:return A.h(v,w)}})
return A.i($async$QJ,w)},
gc3s(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc7B(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1K(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.D4()){t=u.c
if(t!=null)t.J(y.q).f.S(D.f6l)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a3(t,!1).cg(A.e_(new B.d6h(),!1,null,y.N)),$async$a1K)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bBf(s),$async$a1K)
case 4:t=u.c
if(t!=null)t.J(y.q).f.S(D.aQa)
case 1:return A.h(v,w)}})
return A.i($async$a1K,w)},
a9X(d){return this.bIT(d)},
bIT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fE(new A.fA(C.d.aG(t,", "))),$async$a9X)
case 3:if(d.e!=null){t=d.J(y.q).f
t.S(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9X,w)},
aed(d){return this.bID(d)},
bID(d){var x=0,w=A.j(y.H),v=this
var $async$aed=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fE(new A.fA(v.a.c)),$async$aed)
case 2:if(d.e!=null)d.J(y.q).f.S(D.f3H)
return A.h(null,w)}})
return A.i($async$aed,w)},
a1E(d){return this.cri(d)},
cri(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aow(s.d,4),$async$a1E)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t4(r,"ngmy_doc_share_qr.png"),$async$a1E)
case 8:q=f
if(d.e!=null)d.J(y.q).f.S(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.J(y.q).f.S(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1E,w)},
gaWy(){var x,w=this.a
if(w.e!==D.I9)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b4(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b4(x,13))
return null},
a9U(d){return this.bIM(d)},
bIM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWy()
if(t==null){x=1
break}x=3
return A.b(A.fE(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9U)
case 3:if(d.e!=null)d.J(y.q).f.S(D.f5l)
case 1:return A.h(v,w)}})
return A.i($async$a9U,w)},
aee(){var x=0,w=A.j(y.H),v=this,u
var $async$aee=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vc(),$async$aee)
case 2:u=v.c
if(u!=null)A.a3(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$aee,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1f(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.I9&&i!==D.S8&&i!==D.zB
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.I9||t===D.S8||t===D.zB?l:A.aJ(l,l,l,l,C.lb,l,l,l,m.gaZt(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.pW(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gc3s(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.I9){t=C.aC.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mD,l,l,l)],p))}q.push(C.aL)
q.push(A.d(m.gc7B(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hp(D.bWP,D.fAP,new B.d6i(m,d),l)],p))}if(m.a.e===D.I9&&m.gaWy()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hp(D.bTl,D.fxt,new B.d6j(m,d),l)],p))
if(m.a.e===D.zB){x=(m.w?C.dC:C.aC).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.EE:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mD,l,l,l)],p))}if(m.a.e===D.S8){x=(m.r?C.dC:C.aC).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.EE:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mD,l,l,l),C.ad,A.dq(D.bP2,D.fDU,m.gcrG(),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ou(i,A.c5(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b8,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ad,A.B(A.a([A.E(A.es(N.Co,C.Uz,new B.d6k(m,d),l),1),C.as,A.E(A.dq(C.yY,C.a9f,new B.d6l(m,d),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bH(C.A8,m.gaZt(),A.bp(C.aK,l,l,l,l,C.fX,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d6m(),y.C)}}
B.ace.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.x(A.a([w,C.aL,A.p(x,A.pW(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ag)
return A.el(A.a([A.bH(C.wT,new B.d5G(d),x)],u),x,x,C.n1,v,x,x,x,x,D.fqt,x)}}
B.Z9.prototype={
U(){return new B.azv(A.zs(C.xU,C.nM,C.uy))}}
B.azv.prototype={
t(){this.d.t()
this.a1()},
axj(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a3(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fxZ,x,x,x,1,x,!0),C.w,A.zr(this.d,C.bW,this.gaxi()),x,!1,!1,x,x)}}
B.Zg.prototype={
U(){return new B.azB(A.zs(C.xU,C.nM,C.uy))},
gcZ(){return this.c}}
B.azB.prototype={
c_p(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ag5(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ag5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Sl("text/plain"),$async$ag5)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.S(D.f6f)
x=1
break}s=u.c
if(s!=null)A.a3(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ag5,w)},
aaJ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aaJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hsl(p,!0),$async$aaJ)
case 3:t=e
p=t==null
s=B.a72(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.S(D.f2O)
x=1
break}p=u.c
if(p!=null)A.a3(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$aaJ,w)},
t(){this.d.t()
this.a1()},
axj(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.M)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c_p(t))continue
s.e=!0
x=s.c
x.toString
A.a3(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aJ(v,v,v,v,F.ao9,v,v,v,w.gbOu(),v,v,v,v,"Enter QR share code",v),t=A.aJ(v,v,v,v,F.a1N,v,v,v,w.gchB(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aJ(v,v,v,v,A.X(w.f?C.uf:P.O7,v,v,v,v,v),v,v,v,new B.d6q(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fEN,v,v,v,1,v,!0)
u=A.zr(w.d,C.bW,w.gaxi())
x=A.m(20)
return A.c5(t,C.w,new A.an(C.a_,v,C.aa,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ena],s),v),v,!1,!1,v,v)}}
B.bdH.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oV
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oV:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aM(!1,w,!0,new A.D(C.a_2,A.B(A.a([u,C.ba,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eD,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a9t.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.OC.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Xf.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.OB.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Fa.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cmg.prototype={}
B.F9.prototype={}
B.a9s.prototype={}
B.atS.prototype={}
B.Xg.prototype={}
var z=a.updateTypes(["aA<~>()","R(jp)","n(jp)","V3(Y)","~()","Zc(Y)","H(H,jp)","PN(Y)","~(m8)","ct(F9)","aA<jp?>(@)","V1(Y)","V5(Y)","D(jp)","jp(@)","a8<n,@>(jp)","Zb(Y)","V2(Y)","Zd(Y)","Za(Y)","Zf(Y)","ace(Y)","ai<jp>()","Zg(Y)","acg(Y,H)","Z9(Y)","a8<n,aD>(jp)","ct(Xf)","ct(a9s)","aA<ct>(F9)"])
B.cmc.prototype={
$1(d){var x=this.a
x.x=D.aNi
x.y.M(0,D.aNi)},
$S:72}
B.cmd.prototype={
$1(d){var x=this.a
x.x=D.aNh
x.y.M(0,D.aNh)},
$S:72}
B.cme.prototype={
$1(d){var x=this.a
x.ahp(A.aP1(d.data)).bL(new B.cmb(x),y.b)},
$S:72}
B.cmb.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cmf.prototype={
$1(d){},
$S:72}
B.cmi.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hLQ(d.channel))},
$S:15}
B.cmj.prototype={
$1(d){},
$S:15}
B.cmk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i47(w.iceConnectionState)
x.cx=w
if($.h5o())switch(w.a){case 0:x.cy=D.aNn
break
case 1:x.cy=D.aNo
break
case 3:x.cy=D.aNp
break
case 5:x.cy=D.aNl
break
case 6:x.cy=D.aNm
break
case 7:x.cy=D.a72
break
default:break}},
$S:148}
B.cml.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i48(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:148}
B.cmm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iet(w.signalingState)},
$S:148}
B.cmn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.icH(w.connectionState)},
$S:148}
B.cmo.prototype={
$1(d){},
$S:148}
B.cmp.prototype={
$1(d){},
$S:15}
B.flS.prototype={
$1(d){var x=y.F.a(new A.rV([],[]).pM(d.target.result,!1)),w=C.xV.q(x.objectStoreNames,"blobs")
if(!w)C.xR.KT(x,"blobs")},
$S:190}
B.fJT.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wm.fk(this.b)
$.eU.ms()
this.c.$1(d)},
$S:449}
B.fJV.prototype={
$1(d){return this.a.$1(B.hUM(this.b,this.c))},
$S:35}
B.fJU.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fJS.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fK7.prototype={
$1(d){var x=this
return B.hhG(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fK8.prototype={
$1(d){var x=this
return B.hhG(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fo4.prototype={
$1(d){var x=this
return B.caG(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d5Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d5W.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.caG(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d5Y.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.caG(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d5X.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.caG(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d60.prototype={
$4(d,e,f,g){var x=null
return A.jM(A.B(A.a([A.aJ(x,x,x,x,D.bNE,x,x,x,new B.d6_(d),x,x,x,x,x,x),A.E(A.EW(D.Qu,!0,x,C.a0P,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qu,x,g,C.ak_,0,e,f)},
$C:"$4",
$R:4,
$S:401}
B.d6_.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.fq4.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eL,y.o).w,t=this.a,s=t?C.im:C.c,r=A.m(28),q=A.p(v,D.br1,C.f,v,v,D.b28,v,v,v,v,D.ajQ,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aN(v,C.X,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bs(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bRS,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FU,A.x(A.a([o,C.ad,A.aN(v,C.X,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bs(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aoo,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.ao,v,v,v,v),C.bv,A.B(A.a([A.E(A.dR(C.di,new B.fq2(d),v),1),C.as,A.E(A.bH(D.fww,new B.fq3(p,x,d),A.bp(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.MP,v,v,v,v),v)},
$S:62}
B.fq2.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.fq3.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.S(D.f3Y)
return}x=w.b.a.a
A.a3(w.c,!1).N(new B.aC8(v,x))},
$S:0}
B.fqy.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eL,y.o).w,u=x.a,t=u?C.im:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bqR,C.f,w,w,D.b3C,w,w,w,w,D.ajQ,w,w,1/0),new A.D(C.FU,A.x(A.a([A.aN(w,C.X,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.h1q(u,"Organization name",C.Gk,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.ao,w,w,w,w),C.R,A.aN(w,C.X,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.h1q(u,"Access code",C.np,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.ao,w,w,w,w),C.R,A.aN(w,C.X,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.h1q(u,"Member password",H.GU,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.ao,w,w,w,w),C.bv,A.bH(D.fEU,new B.fqx(r,q,p,d),A.bp(C.aC,w,w,w,w,C.fX,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.MP,w,w,w,w),w)},
$S:62}
B.fqx.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.S(D.f42)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a3(v.d,!1).N(new B.aFe(u,x,w))},
$S:0}
B.cax.prototype={
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
p=C.a.a0(j,"http")?A.cG(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.vn(p,null).da(0,C.Z4),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ch(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BS(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.caD.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.caE.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.caF.prototype={
$1(d){return d.b},
$S:z+2}
B.caz.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.caA.prototype={
$1(d){return d.b},
$S:z+2}
B.cay.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.caB.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.caC.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fK5.prototype={
$1(d){return new B.V1(this.a,null)},
$S:z+11}
B.fK6.prototype={
$1(d){return new B.V5(this.a,this.b,this.c,null)},
$S:z+12}
B.dRE.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dSN.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dSO.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dSP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dSM(x,d))},
$S:2}
B.dSM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dSQ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dSR.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dSS.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dST.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dSU.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dSV.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dSY.prototype={
$3(d,e,f){return A.d6(A.dJ(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.dSW.prototype={
$1(d){var x=this.a
return x.f?null:x.ZN()},
$S:2}
B.dSX.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mx(D.QM))s=C.uj
else s=C.a.a0(s,"video/")||d.mx(D.mN)?C.qi:D.amR
x=this.b.a
w=y.p
return new A.D(C.l0,A.B(A.a([A.p(v,A.X(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapR(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dRF.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dRG.prototype={
$0(){return this.a.r=!1},
$S:0}
B.caH.prototype={
$2(d,e){return new A.by(J.k(d),J.k(e),y.M)},
$S:96}
B.caI.prototype={
$2(d,e){return new A.by(J.k(d),J.k(e),y.M)},
$S:96}
B.fKU.prototype={
$2(d,e){return e===this.a},
$S:280}
B.fj2.prototype={
$1(d){return J.k(d)},
$S:17}
B.fog.prototype={
$1(d){var x=this.b
B.hSN(C.G7.ga6r(this.a)).bL(x.gaDN(x),y.H)},
$S:120}
B.foh.prototype={
$1(d){return this.a.d7(0,null)},
$S:120}
B.foi.prototype={
$0(){return null},
$S:12}
B.caW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.foj.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.O(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.U(Date.now(),0,!1).a7().ad():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jp(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fsr.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fmJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fmK.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cb0.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.fP0.prototype={
$1(d){return new B.Zb(this.a,null)},
$S:z+16}
B.d5V.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:9}
B.d5T.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a3(w,!1).N(x)
return null},
$S:2}
B.d5U.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.dSL.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0Q()},
$S:11}
B.dS8.prototype={
$0(){var x=J.bEo(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dS9.prototype={
$0(){var x=J.bEo(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dRI.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dRH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEa(this.c)}},
$S:0}
B.dRH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRJ.prototype={
$0(){var x=J.bEo(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dRO.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dRN(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEa(this.c)}},
$S:0}
B.dRN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dSz.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dSA.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dS5.prototype={
$1(d){return new B.V2(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dS2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ic(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.V6(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tR(),$async$$0)
case 5:s=J.a4(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1_(s.gL(t)),$async$$0)
case 8:case 7:r.i7(s.gam(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRM.prototype={
$1(d){this.a.ac5(d,"No files selected.","Added")},
$S:449}
B.dSd.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dSc(),A.S(x).k("N<1,n>")))},
$S:0}
B.dSc.prototype={
$1(d){return d.a},
$S:z+2}
B.dRS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xk.c9().cUg(C.a_S,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jv(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i7("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i7("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apx(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cp(l)){o.i7("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tR(),$async$$0)
case 9:o.i7("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dSw.prototype={
$1(d){return new B.PN(this.a.a.c,this.b,null)},
$S:z+7}
B.dSx.prototype={
$1(d){return new B.Zd(this.a.a.c,this.b,null)},
$S:z+18}
B.dSy.prototype={
$1(d){return new B.Za(this.a.a.c,this.b,null)},
$S:z+19}
B.dS3.prototype={
$1(d){return new B.PN(this.a.a.c,this.b,null)},
$S:z+7}
B.dS4.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dSp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ic(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a74(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i7("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cnF(),$async$$0)
case 5:x=6
return A.b(p.tR(),$async$$0)
case 6:r=A.S(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dSl(p),r),new B.dSm(),r.k("N<ak.E,n>")).c0(0,new B.dSn())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a3(t,!1).cg(A.e_(new B.dSo(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pe(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vc(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSl.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dSk(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dSk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dSm.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dSn.prototype={
$1(d){return d.length!==0},
$S:3}
B.dSo.prototype={
$1(d){var x=this.a
return new B.Zf(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dSq.prototype={
$1(d){return d.a},
$S:z+2}
B.dSr.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dSj.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kD,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapR(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mx(D.mN)?C.um:C.p6
p=!x||p.mx(D.mN)?"Play video":"View"
return A.c1(A.bm(!0,new A.D(C.Bz,A.x(A.a([q,o,t,C.aA,B.Ze(!1,u,!1,w,p,new B.dSe(d),v),B.Ze(!1,u,!1,C.jB,"Share via QR",new B.dSf(d),"Letters/numbers QR code"),B.Ze(!1,u,!1,D.a0V,"Send to their Code",new B.dSg(d),"Enter someone else's personal code"),B.Ze(!1,u,!1,C.hJ,"Download / save",new B.dSh(d),v),C.am,B.Ze(!1,u,!0,C.ec,"Delete",new B.dSi(d),v)],y.p),C.aj,v,C.e,C.P,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bI(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kS,v,v,C.n),C.bf)},
$S:690}
B.dSe.prototype={
$0(){A.a3(this.a,!1).N("view")
return null},
$S:0}
B.dSf.prototype={
$0(){A.a3(this.a,!1).N("qr")
return null},
$S:0}
B.dSg.prototype={
$0(){A.a3(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dSh.prototype={
$0(){A.a3(this.a,!1).N("save")
return null},
$S:0}
B.dSi.prototype={
$0(){A.a3(this.a,!1).N("delete")
return null},
$S:0}
B.dRP.prototype={
$1(d){return d.a},
$S:z+2}
B.dRQ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dRR.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a76(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GF(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pe(s.c,s.f),$async$$0)
case 4:u.i7(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRL.prototype={
$1(d){var x=this.a
x.tS(new B.dRK(x,d,this.b),"Preparing\u2026")},
$S:449}
B.dRK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i7("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.V6(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cp(s)){t.i7("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bDk(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dS6.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dS7.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fXq(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dS0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GD(new B.dRX(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i7("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dRY(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dRZ(s))
case 5:x=8
return A.b(r.b.it(0,C.FE,new B.dS_()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i7("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tR(),$async$$0)
case 9:s.i7("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRX.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dRU(x,d,e))},
$S:213}
B.dRU.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dRY.prototype={
$1(d){return new B.ace(this.a.a,null)},
$S:z+21}
B.dRZ.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dS_.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dS1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.ID(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6V(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0s(B.ID(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apx(new B.dRV(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cp(r)){if(B.fXp(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i7(q)
x=1
break}x=10
return A.b(s.tR(),$async$$0)
case 10:o=J.cD(r)
p=o.eV(r,new B.dRW()).gL(0)
s.i7(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRV.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dRT(x,d,e))},
$S:213}
B.dRT.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dRW.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.dSb.prototype={
$1(d){return new B.Zg(this.a.a.c,null)},
$S:z+23}
B.dSa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b_6(u.a.c,v.b),$async$$0)
case 2:t.i7(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSv.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aC.j(0.35)
return A.c1(A.bm(!0,new A.D(C.Bz,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kD,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Ze(!0,w,!1,C.np,"My Code",new B.dSs(d),"Your personal code & QR \u2014 others send docs to you"),B.Ze(!1,w,!1,D.a0V,"Send to their Code",new B.dSt(this.a,d),"Enter someone else's 5-digit code + letter"),B.Ze(!1,w,!1,S.yR,"Import backup",new B.dSu(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.P,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bI(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kS,x,x,C.n),C.bf)},
$S:690}
B.dSs.prototype={
$0(){A.a3(this.a,!1).N("my_code")
return null},
$S:0}
B.dSt.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.bCK()},
$S:0}
B.dSu.prototype={
$0(){A.a3(this.a,!1).N("import")
return null},
$S:0}
B.dSI.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IN(D.Qu,x,C.a0P,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cS(C.d.gI(D.Qu).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:653}
B.dSG.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.dSH.prototype={
$0(){this.a.aim()
return null},
$S:0}
B.dSJ.prototype={
$3(d,e,f){return A.d6(A.dJ(f,new A.t(0,(1-e)*10)),e)},
$S:100}
B.dSK.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.acg(e,w,v,this.b,x.e,x.c7C(w),new B.dSC(x,w),new B.dSD(x,v,w),new B.dSE(x,w),new B.dSF(x,w),null)},
$S:z+24}
B.dSC.prototype={
$0(){this.a.afD(this.b)
return null},
$S:0}
B.dSD.prototype={
$0(){var x=this.a
return x.m(new B.dSB(x,this.b,this.c))},
$S:0}
B.dSB.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dSE.prototype={
$0(){this.a.O0(this.b)
return null},
$S:0}
B.dSF.prototype={
$0(){this.a.ai9(this.b)
return null},
$S:0}
B.d5R.prototype={
$3(d,e,f){return A.d6(A.dJ(f,new A.t(0,(1-e)*18)),e)},
$S:100}
B.d5S.prototype={
$3(d,e,f){return A.ea(C.A,f,e,null,null)},
$S:103}
B.d6e.prototype={
$3(d,e,f){return A.d6(A.dJ(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.d6d.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d6a.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d6b.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d6c.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d68.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fO(w,C.A,x,new B.d66(this.a),C.h5,C.dy,!0,x,!1,x,x)
$.aW.x1$.push(new B.d67(this.a))
return C.bJ},
$S:139}
B.d66.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d64(this.a))
return C.bJ},
$S:184}
B.d64.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d61(x))},
$S:9}
B.d61.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d67.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d63(x))},
$S:9}
B.d63.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d69.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d65(this.a))
return C.bJ},
$S:184}
B.d65.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d62(x))},
$S:9}
B.d62.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d5O.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d5N(x,d))},
$S:1745}
B.d5N.prototype={
$0(){return this.a.f=this.b===C.uW},
$S:0}
B.d5P.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d5M(x,d))},
$S:9}
B.d5M.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d5Q.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d5L(x,d))},
$S:9}
B.d5L.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d5H.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d5I.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d5J.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d5K.prototype={
$1(d){return this.a.d.N0(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:7}
B.d6r.prototype={
$0(){var x=this.a.a
return B.ry(x.c,x.d)},
$S:1746}
B.d6s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d6t.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d6u.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d6v.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d6w.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d6y.prototype={
$0(){var x=this.a
x.m(new B.d6x(x))},
$S:0}
B.d6x.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h6(0)
else x.q4(0)},
$S:0}
B.d6n.prototype={
$1(d){return this.a.QJ(this.b)},
$S:11}
B.d6o.prototype={
$1(d){return this.a.QI(this.b)},
$S:11}
B.d6f.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d6g.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d6h.prototype={
$1(d){return D.haP},
$S:z+25}
B.d6m.prototype={
$2(d,e){if(d)B.Vc()},
$S:121}
B.d6i.prototype={
$0(){return this.a.a9X(this.b)},
$S:0}
B.d6j.prototype={
$0(){return this.a.a9U(this.b)},
$S:0}
B.d6k.prototype={
$0(){return this.a.aed(this.b)},
$S:0}
B.d6l.prototype={
$0(){return this.a.a1E(this.b)},
$S:0}
B.d5G.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.d6q.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q8(),$async$$0)
case 2:u.m(new B.d6p(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d6p.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cb2.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.cb3.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cb1.prototype={
$2(d,e){return this.bjZ(d,e)},
bjZ(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vd(u.c,A.G(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1747}
B.fs3.prototype={
$1(d){if(d===D.a71&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.fs4.prototype={
$0(){},
$S:12}
B.fsC.prototype={
bly(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fgl(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hcO(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bly(d,e)},
$S:720}
B.fsB.prototype={
$1(d){var x=this
d.b=new B.fsA(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fsA.prototype={
$1(d){return this.blx(d)},
blx(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b_7(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.T.aN(0,n,null)
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
return A.b(B.fgl(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d7(0,s.e)
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
return A.b(B.a73(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d7(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.azy.prototype,"gceu","Qj",0)
x(v,"gcfl","Jh",0)
x(v,"gceR","y3",0)
x(v=B.aDu.prototype,"gc7w","aeb",0)
x(v,"gc7x","ZM",0)
x(v,"gcu8","ahR",0)
x(v=B.aDx.prototype,"gc7y","ZN",0)
x(v,"gcu9","a1Z",0)
x(B.aDv.prototype,"gc7z","aec",0)
x(B.azx.prototype,"gc7E","c7F",4)
x(v=B.aDw.prototype,"gceS","a_U",0)
x(v,"gcsH","csI",4)
x(v,"gb1z","ayG",0)
x(v,"gcvE","aig",0)
x(v,"gbOY","XF",0)
x(v,"gc7D","Ei",0)
x(B.azz.prototype,"gb5l","a1Y",0)
x(B.azw.prototype,"gc7G","ZO",0)
x(v=B.azC.prototype,"gb0f","cd8",4)
x(v,"gc7A","aef",0)
x(v=B.azA.prototype,"gcrG","a1K",0)
x(v,"gaZt","aee",0)
w(B.azv.prototype,"gaxi","axj",8)
x(v=B.azB.prototype,"gchB","ag5",0)
x(v,"gbOu","aaJ",0)
w(v,"gaxi","axj",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cmg,B.a9s,B.atS,B.aC8,B.aFe,B.jp,B.abX,B.bvs,B.F9,B.Xg])
w(B.cmh,B.cmg)
w(B.b4f,B.a9s)
x(A.hK,[B.cmc,B.cmd,B.cme,B.cmb,B.cmf,B.cmi,B.cmj,B.cmk,B.cml,B.cmm,B.cmn,B.cmo,B.cmp,B.flS,B.fJT,B.fJV,B.fJU,B.fK7,B.fK8,B.fo4,B.d5W,B.d5Y,B.d5X,B.d60,B.fq4,B.fqy,B.cax,B.caE,B.caF,B.caA,B.cay,B.caB,B.caC,B.fK5,B.fK6,B.dSP,B.dSY,B.dSW,B.dSX,B.fj2,B.fog,B.foh,B.caW,B.foj,B.fsr,B.fmJ,B.fmK,B.cb0,B.fP0,B.d5V,B.d5T,B.dSL,B.dRH,B.dRN,B.dS5,B.dRM,B.dSc,B.dSw,B.dSx,B.dSy,B.dS3,B.dSl,B.dSk,B.dSm,B.dSn,B.dSo,B.dSq,B.dSr,B.dSj,B.dRP,B.dRQ,B.dRL,B.dS6,B.dRY,B.dRW,B.dSb,B.dSv,B.dSI,B.dSJ,B.d5R,B.d5S,B.d6e,B.d6d,B.d68,B.d66,B.d64,B.d67,B.d69,B.d65,B.d5O,B.d5P,B.d5Q,B.d5K,B.d6n,B.d6o,B.d6h,B.cb2,B.cb3,B.fs3,B.fsB,B.fsA])
w(B.b4g,B.atS)
x(A.jc,[B.fJS,B.d5Z,B.d6_,B.fq2,B.fq3,B.fqx,B.dRE,B.dSN,B.dSO,B.dSM,B.dSQ,B.dSR,B.dSS,B.dST,B.dSU,B.dSV,B.dRF,B.dRG,B.foi,B.d5U,B.dS8,B.dS9,B.dRI,B.dRJ,B.dRO,B.dSz,B.dSA,B.dS2,B.dSd,B.dRS,B.dS4,B.dSp,B.dSe,B.dSf,B.dSg,B.dSh,B.dSi,B.dRR,B.dRK,B.dS7,B.dS0,B.dRU,B.dRZ,B.dS_,B.dS1,B.dRT,B.dSa,B.dSs,B.dSt,B.dSu,B.dSG,B.dSH,B.dSC,B.dSD,B.dSB,B.dSE,B.dSF,B.d6a,B.d6b,B.d6c,B.d61,B.d63,B.d62,B.d5N,B.d5M,B.d5L,B.d5H,B.d5I,B.d5J,B.d6r,B.d6s,B.d6t,B.d6u,B.d6v,B.d6w,B.d6y,B.d6x,B.d6f,B.d6g,B.d6i,B.d6j,B.d6k,B.d6l,B.d5G,B.d6q,B.d6p,B.fs4])
x(A.lX,[B.acf,B.Ny,B.a9t,B.OC,B.Xf,B.OB,B.Fa])
x(A.ag,[B.Zc,B.V1,B.V5,B.V2,B.Zb,B.V3,B.Zd,B.Za,B.PN,B.Zf,B.Z9,B.Zg])
x(A.ah,[B.azy,B.aDu,B.aDx,B.aDv,B.azx,B.aDw,B.azz,B.azw,B.azC,B.azA,B.azv,B.azB])
x(A.av,[B.acH,B.azu,B.bdG,B.acg,B.ace,B.bdH])
x(A.ka,[B.caD,B.caz,B.caH,B.caI,B.fKU,B.dRX,B.dRV,B.dSK,B.d6m,B.cb1,B.fsC])
x(A.iU,[B.bj_,B.bv5])})()
A.jk(b.typeUniverse,JSON.parse('{"b4f":{"a9s":[]},"b4g":{"atS":[]},"Zc":{"ag":[],"v":[]},"azy":{"ah":["Zc"]},"acH":{"av":[],"v":[]},"V1":{"ag":[],"v":[]},"V5":{"ag":[],"v":[]},"aDu":{"ah":["V1"]},"aDx":{"ah":["V5"]},"bj_":{"iU":[]},"V2":{"ag":[],"v":[]},"aDv":{"ah":["V2"]},"Zb":{"ag":[],"v":[]},"V3":{"ag":[],"v":[]},"acg":{"av":[],"v":[]},"Zd":{"ag":[],"v":[]},"Za":{"ag":[],"v":[]},"PN":{"ag":[],"v":[]},"Zf":{"ag":[],"v":[]},"ace":{"av":[],"v":[]},"Z9":{"ag":[],"v":[]},"Zg":{"ag":[],"v":[]},"azx":{"ah":["Zb"]},"bv5":{"iU":[]},"aDw":{"ah":["V3"]},"azu":{"av":[],"v":[]},"bdG":{"av":[],"v":[]},"azz":{"ah":["Zd"]},"azw":{"ah":["Za"]},"azC":{"ah":["PN"]},"azA":{"ah":["Zf"]},"azv":{"ah":["Z9"]},"azB":{"ah":["Zg"]},"bdH":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.aw
return{J:x("ui"),k:x("M_()"),m:x("bu<n,n>"),F:x("ra"),g:x("aA<jp?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<n,R>>"),t:x("O<a8<n,@>>"),r:x("O<jp>"),w:x("O<+file,name(lG,n)>"),u:x("O<cS>"),s:x("O<n>"),E:x("O<iU>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<H>"),G:x("bh"),A:x("cz<ah<ag>>"),n:x("ai<jp>"),j:x("ai<@>"),I:x("ai<H>"),M:x("by<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iE"),e:x("iip"),af:x("Em"),U:x("jp"),b:x("ct"),C:x("aD"),aK:x("wb"),ab:x("F9"),br:x("atS"),v:x("Xg"),N:x("n"),X:x("bn<L>"),Q:x("lT"),D:x("dK"),aw:x("cs<n>"),cd:x("Z<a8<n,@>>"),c7:x("v"),ch:x("bY<ai<jp>>"),aW:x("bY<dK?>"),aY:x("bY<~>"),cx:x("acf"),b1:x("bg<ai<jp>>"),cf:x("bg<dK?>"),d4:x("bg<~>"),c4:x("aC8"),bG:x("aFe"),q:x("n4"),B:x("pw<F9>"),c6:x("pw<a9t>"),y:x("R"),i:x("L"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jp>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jp?"),R:x("aD?"),c:x("Xg?"),d:x("+answerQr,transfer(n,aA<ai<jp>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Ny,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("abX?"),bk:x("aC8?"),ag:x("aFe?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b0s=new A.ay(C.aC,2,C.r,-1)
D.c0o=new A.a9(C.a3,C.a8,C.x,C.a2U,null,null)
D.b28=new A.o(null,null,null,C.mm,null,D.c0o,C.n)
D.b3C=new A.o(null,null,null,C.mm,null,E.H6,C.n)
D.adf=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aey=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.afx=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ah4=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.frm=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fFQ=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DS,null,null,null,null,null,null,null,null,null)
D.daE=x([D.frm,C.am,D.fFQ],y.p)
D.bqH=new A.fj(C.ag,C.e,C.j,C.E,null,C.p,null,0,D.daE,null)
D.fKf=new A.y("Create your organization",null,C.fr,null,null,null,null,null,null,null,null,null)
D.fvI=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DS,null,null,null,null,null,null,null,null,null)
D.dqM=x([D.fKf,C.am,D.fvI],y.p)
D.bqR=new A.fj(C.ag,C.e,C.j,C.E,null,C.p,null,0,D.dqM,null)
D.fGs=new A.y("Team Member sign-in",null,C.fr,null,null,null,null,null,null,null,null,null)
D.fzA=new A.y("Enter the access code and password from your organization.",null,G.DS,null,null,null,null,null,null,null,null,null)
D.doB=x([D.fGs,C.am,D.fzA],y.p)
D.br1=new A.fj(C.ag,C.e,C.j,C.E,null,C.p,null,0,D.doB,null)
D.bx3=new A.Q(16,10,16,28)
D.bxb=new A.Q(16,14,16,4)
D.bys=new A.Q(20,0,20,16)
D.byY=new A.Q(20,8,20,16)
D.ajQ=new A.Q(24,22,24,20)
D.a0V=new A.a1(63394,"MaterialIcons",!1)
D.amR=new A.a1(63515,"MaterialIcons",!1)
D.bLy=new A.a1(983813,"MaterialIcons",!1)
D.bIW=new A.a1(62867,"MaterialIcons",!1)
D.bMy=new A.ae(D.bIW,44,C.c,null,null,null)
D.bNE=new A.ae(C.l4,null,C.ae,null,null,null)
D.bP2=new A.ae(C.jc,18,null,null,null,null)
D.bQL=new A.ae(D.a0V,26,C.c,null,null,null)
D.bRi=new A.ae(C.GM,null,null,null,null,null)
D.bRS=new A.ae(C.Ck,null,null,null,null,null)
D.bT1=new A.ae(W.a17,null,null,null,null,null)
D.bTl=new A.ae(C.hs,16,null,null,null,null)
D.bWP=new A.ae(C.rr,16,null,null,null,null)
D.bMQ=new A.ae(C.np,null,null,null,null,null)
D.bXG=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bMQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bSp=new A.ae(C.Gk,null,null,null,null,null)
D.bXL=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNb=new A.ae(H.GU,null,null,null,null,null)
D.bXW=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bNb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cLI=x([C.ff,C.b_,C.aC],y.O)
D.c2g=new A.a9(C.ay,C.aD,C.x,D.cLI,null,null)
D.cLa=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qu=x([C.ff,C.aC],y.O)
D.QM=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mN=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dj9=x([C.oP,C.aC],y.O)
D.eao={iceServers:0}
D.aHP={urls:0}
D.dus=new A.bu(D.aHP,["stun:stun.l.google.com:19302"],y.m)
D.dur=new A.bu(D.aHP,["stun:stun1.l.google.com:19302"],y.m)
D.d0K=x([D.dus,D.dur],A.aw("O<a8<n,n>>"))
D.dtL=new A.bu(D.eao,[D.d0K],A.aw("bu<n,@>"))
D.I9=new B.Ny(0,"lanDirect")
D.S7=new B.Ny(1,"cloudStash")
D.dFq=new B.Ny(2,"inlineInstant")
D.S8=new B.Ny(3,"webrtcLink")
D.zB=new B.Ny(4,"videoCloud")
D.fFP=new A.y("Receive file",null,C.nF,null,null,null,null,null,null,null,null,null)
D.cB5=x([E.aow,C.ab,D.fFP],y.p)
D.eWa=new A.cb(C.aN,C.b8,C.j,C.m,null,C.p,null,0,D.cB5,null)
D.eho=new A.D(C.cj,D.eWa,null)
D.fi9=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a3A,null,null,null)
D.frU=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fi9,null,C.L,null,null,null,null,null,null,null)
D.egD=new A.D(C.BD,D.frU,null)
D.b7X=new A.ci(C.A,null,null,D.egD,null)
D.ena=new A.cN(0,null,0,28,null,null,D.b7X,null)
D.ent=new B.a9t(0,"RTCDataChannelConnecting")
D.aNh=new B.a9t(1,"RTCDataChannelOpen")
D.aNi=new B.a9t(3,"RTCDataChannelClosed")
D.enu=new B.Fa(0,"RTCIceConnectionStateNew")
D.env=new B.Fa(1,"RTCIceConnectionStateChecking")
D.enw=new B.Fa(2,"RTCIceConnectionStateCompleted")
D.enx=new B.Fa(3,"RTCIceConnectionStateConnected")
D.eny=new B.Fa(4,"RTCIceConnectionStateCount")
D.enz=new B.Fa(5,"RTCIceConnectionStateFailed")
D.enA=new B.Fa(6,"RTCIceConnectionStateDisconnected")
D.aNj=new B.Fa(7,"RTCIceConnectionStateClosed")
D.aNk=new B.Xf(0,"RTCIceGatheringStateNew")
D.enB=new B.Xf(1,"RTCIceGatheringStateGathering")
D.a71=new B.Xf(2,"RTCIceGatheringStateComplete")
D.a72=new B.OB(0,"RTCPeerConnectionStateClosed")
D.aNl=new B.OB(1,"RTCPeerConnectionStateFailed")
D.aNm=new B.OB(2,"RTCPeerConnectionStateDisconnected")
D.aNn=new B.OB(3,"RTCPeerConnectionStateNew")
D.aNo=new B.OB(4,"RTCPeerConnectionStateConnecting")
D.aNp=new B.OB(5,"RTCPeerConnectionStateConnected")
D.enC=new B.OC(0,"RTCSignalingStateStable")
D.enD=new B.OC(1,"RTCSignalingStateHaveLocalOffer")
D.enE=new B.OC(2,"RTCSignalingStateHaveRemoteOffer")
D.enF=new B.OC(3,"RTCSignalingStateHaveLocalPrAnswer")
D.enG=new B.OC(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aNq=new B.OC(5,"RTCSignalingStateClosed")
D.f_G=new A.au(160,48)
D.b9e=new A.fi(2,null,null,null,null,C.aC,null,null,null,null)
D.f1c=new A.a7(16,16,D.b9e,null)
D.fv3=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f2E=new A.b2(D.fv3,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fCz=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f2H=new A.b2(D.fCz,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fLi=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f2O=new A.b2(D.fLi,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fuE=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f3d=new A.b2(D.fuE,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fGD=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aQa=new A.b2(D.fGD,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fI1=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f3H=new A.b2(D.fI1,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fMJ=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f3Y=new A.b2(D.fMJ,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fKJ=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f42=new A.b2(D.fKJ,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fLW=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f4P=new A.b2(D.fLW,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.ftg=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f5l=new A.b2(D.ftg,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fEp=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f5G=new A.b2(D.fEp,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fxk=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f6b=new A.b2(D.fxk,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fMP=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f6f=new A.b2(D.fMP,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.ftw=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f6l=new A.b2(D.ftw,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fse=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f6A=new A.b2(D.fse,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.t,null)
D.fp5=new A.y("NGMY DOC SHARE",null,C.aRy,null,null,null,null,null,null,null,null,null)
D.fqt=new A.y("Show this to sender",null,C.iE,null,null,null,null,null,null,null,null,null)
D.frt=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fww=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fxt=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fAP=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fDA=new A.y("Send to their Doc Share",null,C.nC,null,null,null,null,null,null,null,null,null)
D.fDU=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fEN=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fEU=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fFh=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eZ,null,null,null,null,null,null,null,null,null)
D.fIx=new A.y("Share files & videos\nwith a scan.",null,C.aRz,null,null,null,null,null,null,null,null,null)
D.fIR=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.haP=new B.Z9(null)
D.aaa=new B.acf(0,"docShare")
D.aab=new B.acf(1,"gate")
D.V7=new B.acf(2,"gateNoIndividual")})();(function staticFields(){$.aNN=null
$.fe5=function(){var x=y.N
return A.T(x,x)}()
$.Gq=A.T(y.N,y.D)
$.agk=A.T(y.N,A.aw("lG"))
$.R6=A.T(y.N,y.D)
$.feD=A.T(y.N,A.aw("abX"))
$.caV=A.T(y.S,A.aw("bvs"))
$.hcN=1
$.i_P=null
$.i_O=null
$.hSa=null
$.h1D=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iiU","hue",()=>new B.cmh())
x($,"igP","h5o",()=>C.a.q(A.bw(A.bw(A.bw(A.H0(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["pT0DGAgGGc5hzVyVMwK7OkPBLx4="]=a.current})($__dart_deferred_initializers__);