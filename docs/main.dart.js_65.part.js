((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={ctK:function ctK(){},
i3C(d){var x=null,w=new B.b70(d,D.eGj,new A.pR(x,x,y.c6),new A.pR(x,x,y.B))
w.bD7(d)
return w},
b70:function b70(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ctF:function ctF(d){this.a=d},
ctG:function ctG(d){this.a=d},
ctH:function ctH(d){this.a=d},
ctE:function ctE(d){this.a=d},
ctI:function ctI(d){this.a=d},
i3D(d,e){var x=y.N
x=new B.b71(d,e,A.S(x,y.e),A.S(x,y.z))
x.bD8(d,e)
return x},
b71:function b71(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ctL:function ctL(d){this.a=d},
ctM:function ctM(d){this.a=d},
ctN:function ctN(d){this.a=d},
ctO:function ctO(d){this.a=d},
ctP:function ctP(d){this.a=d},
ctQ:function ctQ(d){this.a=d},
ctR:function ctR(d){this.a=d},
ctS:function ctS(d){this.a=d},
hhL(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bb("IndexedDB not available"))
return C.xa.H1(x,"ngmy_doc_share_v1",new B.fzB(),1)},
iah(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.eo(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wV(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cD.aK(d)
return x}catch(w){return v}return v},
So(d,e){return B.ipT(d,e)},
ipT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$So=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQj
x=7
return A.b(o==null?$.aQj=B.hhL():o,$async$So)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mc(s,"blobs","readwrite")
C.iG.mj(J.mb(q,"blobs"),r,d)
x=8
return A.b(J.oy(q),$async$So)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$So,w)},
Sn(d){return B.ipS(d)},
ipS(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQj
x=7
return A.b(o==null?$.aQj=B.hhL():o,$async$Sn)
case 7:s=f
r=J.mc(s,"blobs","readonly")
x=8
return A.b(C.iG.xS(J.mb(r,"blobs"),d),$async$Sn)
case 8:q=f
x=9
return A.b(J.oy(r),$async$Sn)
case 9:o=B.iah(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$Sn,w)},
air(d){return B.ipR(d)},
ipR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$air=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQj
x=7
return A.b(p==null?$.aQj=B.hhL():p,$async$air)
case 7:s=f
r=J.mc(s,"blobs","readwrite")
C.iG.Gw(J.mb(r,"blobs"),d)
x=8
return A.b(J.oy(r),$async$air)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$air,w)},
fzB:function fzB(){},
icM(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brT(w,v))}return u},
hJw(d,e){var x,w={},v=A.aZ0("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fZA(w,v,e)
C.xc.zg(v,"change",new B.fZC(w,v,!1))
C.xc.zg(v,"cancel",new B.fZB(w))
$.eX.mK()
v.click()
A.bO(C.amg,new B.fZz(w),y.H)},
fZA:function fZA(d,e,f){this.a=d
this.b=e
this.c=f},
fZC:function fZC(d,e,f){this.a=d
this.b=e
this.c=f},
fZB:function fZB(d){this.a=d},
fZz:function fZz(d){this.a=d},
DQ(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DQ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUR()?3:4
break
case 3:x=5
return A.b(B.hE5(e,d,s,!0,!1,f,g,h,!1,i),$async$DQ)
case 5:x=1
break
case 4:x=6
return A.b(B.S0(d,s,f,g,h,i),$async$DQ)
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
return A.b(B.Jr(s,d),$async$DQ)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fuY(s,d),$async$DQ)
case 14:x=12
return A.b(r.hE5(q,p,o,n,m,l,k,j,a1,i),$async$DQ)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cf(A.eg(new B.fZP(s,i,d,f,g,h),!1,null,y.H)),$async$DQ)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cf(A.eg(new B.fZQ(s,i,d,f,g,h),!1,null,y.H)),$async$DQ)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DQ,w)},
S0(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S0=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1K(e),$async$S0)
case 3:u=k
x=4
return A.b(B.arc(d,e,!1),$async$S0)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jr(e,d),$async$S0)
case 7:if(k){v=D.adL
x=1
break}x=8
return A.b(B.Wl(e),$async$S0)
case 8:v=t?D.Xi:D.adM
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1I(d,e)){v=D.adL
x=1
break}x=11
return A.b(B.Wl(e),$async$S0)
case 11:v=t?D.Xi:D.adM
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hcA(d,e)){v=D.adL
x=1
break}x=14
return A.b(B.Wl(e),$async$S0)
case 14:v=D.Xi
x=1
break
case 13:v=t?D.Xi:D.adM
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
fuY(d,e){var x=0,w=A.j(y.y),v
var $async$fuY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1I(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1K(d),$async$fuY)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuY,w)},
hE5(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cf(A.eg(new B.fCg(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hyQ(d,e,f,g,h,i,j){return new B.a_B(e,j,d,g,h,i,f,null)},
fEa(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fEa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fEd(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fEa)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEa,w)},
fEF(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fEF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
r=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fEH(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fEF)
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
return A.i($async$fEF,w)},
hhX(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fRA(d,e){var x=0,w=A.j(y.H),v
var $async$fRA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wl(e),$async$fRA)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eb()
case 1:return A.h(v,w)}})
return A.i($async$fRA,w)},
fZP:function fZP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZQ:function fZQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adH:function adH(d,e){this.a=d
this.b=e},
fCg:function fCg(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_B:function a_B(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBE:function aBE(){this.c=this.a=this.d=null},
der:function der(d,e){this.a=d
this.b=e},
deo:function deo(d){this.a=d},
deq:function deq(d){this.a=d},
dep:function dep(d){this.a=d},
det:function det(){},
des:function des(d){this.a=d},
aea:function aea(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEi:function aEi(d,e){this.a=d
this.b=e},
aHt:function aHt(d,e,f){this.a=d
this.b=e
this.c=f},
fEd:function fEd(d,e,f){this.a=d
this.b=e
this.c=f},
fEb:function fEb(d){this.a=d},
fEc:function fEc(d,e,f){this.a=d
this.b=e
this.c=f},
fEH:function fEH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEG:function fEG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfd(d,e,f,g,h){return B.hZr(d,e,f,g,h)},
hZr(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cfd=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.ic(r.dO(d,new B.cfe(s,e,h,g,f,q),y.g),y.l),$async$cfd)
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
return A.i($async$cfd,w)},
b1F(d,e,f,g,h){return B.hZs(d,e,f,g,h)},
hZs(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1F=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awK("GET",d)
o=A.h8Z()
if(o==null)o=new A.MO(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dc(0,C.H8),$async$b1F)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D6(),$async$b1F)
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
p=A.aa(m)
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
return A.i($async$b1F,w)},
b1E(d){return B.hZp(d)},
hZp(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dc(0,C.ov),$async$b1E)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.m5(A.m2(p.e)).cE(0,p.w),null)
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
return A.i($async$b1E,w)},
cfc(d){return B.hZq(d)},
hZq(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cfc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dc(0,C.qG),$async$cfc)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m5(A.m2(q.e)).cE(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.aa(o)
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
return A.i($async$cfc,w)},
cfe:function cfe(d,e,f,g,h,i){var _=this
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
Jp(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hZx(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.X(t,u))return B.Jp(C.a.aY(t,u.length))}return null},
hZy(d){var x=B.Jp(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hZt(){var x,w=$.ov(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hh(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8g(d){return B.hZu(d)},
hZu(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8g)
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
return A.i($async$a8g,w)},
a8h(d,e){return B.hZv(d,e)},
hZv(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8h=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hQ(d,e,!1,!1,C.cR,null),$async$a8h)
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
return A.i($async$a8h,w)},
Cl(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cl)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jp(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8i(r),$async$Cl)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8g("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cl)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jp(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aG("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cl)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hZt()
x=14
return A.b(B.a8i(m),$async$Cl)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8h("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 15:k=f
x=16
return A.b(B.a8h("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aG("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cl)
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
a8i(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jp(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8g("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8i)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
a8j(d,e,f,g){return B.hZz(d,e,f,g)},
hZz(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8j=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jp(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8i(r),$async$a8j)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cC(d,0,new B.cfk())>1048576||g.aS(d,new B.cfl())){v=B.Fq(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8u("myCode",d,a0),$async$a8j)
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
v=B.Fq(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1N(u,g.gJ(d),a0),$async$a8j)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ov().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dO(d,new B.cfm(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1G(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8j)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
Fq(d,e,f,g,h){return B.hZw(d,e,f,g,h)},
hZw(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fq=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fq)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cC(a6,0,new B.cfg())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ov().aw(9999)
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
a1=B.Jt(a9,q)
a0=new A.Li(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fq)
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
a4=A.ny(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abW(a1.a,a4,"media",a1.d,a2).xP(m,n,new A.EF(!0,q.c)),$async$Fq)
case 12:J.c4(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fq)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSZ(r),$async$Fq)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dO(a6,new B.cfh(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1G(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fq)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSZ(r),$async$Fq)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fq,w)},
b1G(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8g(t),$async$b1G)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.cff(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8h(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1G,w)},
Oo(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oo=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8g("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oo)
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
return A.b(B.b1H(k,a0),$async$Oo)
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
return A.b(B.b1M(h),$async$Oo)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Ws(g,a0),$async$Oo)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.Y(r,new B.cfi(),q),n)
d=A.B(new A.Y(r,new B.cfj(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cT(d,0,A.dA(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a8h("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Oo)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1H(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1H=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iu0(k,j)
C.d.u(s,i)
x=5
return A.b(B.DO(l,m,"Received via My Code",t,e,i),$async$b1H)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSZ(s),$async$b1H)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1H,w)},
cfk:function cfk(){},
cfl:function cfl(){},
cfm:function cfm(){},
cfg:function cfg(){},
cfh:function cfh(){},
cff:function cff(){},
cfi:function cfi(){},
cfj:function cfj(){},
fZM(d,e){var x=0,w=A.j(y.H)
var $async$fZM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cf(A.eg(new B.fZN(e),!1,null,y.H)),$async$fZM)
case 2:return A.h(null,w)}})
return A.i($async$fZM,w)},
bH9(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bH9=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cf(A.eg(new B.fZO(g,e,f),!1,null,y.y)),$async$bH9)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH9,w)},
fZN:function fZN(d){this.a=d},
fZO:function fZO(d,e,f){this.a=d
this.b=e
this.c=f},
Wi:function Wi(d,e){this.c=d
this.a=e},
aFF:function aFF(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e0e:function e0e(d,e){this.a=d
this.b=e},
Wm:function Wm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFI:function aFI(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e1n:function e1n(d){this.a=d},
e1o:function e1o(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1q:function e1q(d){this.a=d},
e1r:function e1r(d){this.a=d},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1u:function e1u(d,e){this.a=d
this.b=e},
e1v:function e1v(d){this.a=d},
e1y:function e1y(){},
e1w:function e1w(d){this.a=d},
e1x:function e1x(d,e){this.a=d
this.b=e},
bm_:function bm_(){},
Wj:function Wj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFG:function aFG(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e0f:function e0f(d){this.a=d},
e0g:function e0g(d){this.a=d},
hcB(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hZB(d){var x=d.l5
if(x>=0)return x
return 4.99},
hZA(d){var x=d.lN,w=y.N
w=x.jq(x,new B.cfo(),w,w)
return w},
htO(d){var x=d.kI,w=y.N
w=x.jq(x,new B.cfp(),w,w)
return w},
b1K(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b1K)
case 7:s=f
r=A.w(p)
r=A.aW(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b1K,w)},
a8l(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8l)
case 4:x=3
return A.b(g.aG("String","ngmy_doc_share_path_"+u,e),$async$a8l)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8l,w)},
Wl(d){var x=0,w=A.j(y.H),v,u
var $async$Wl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wl)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
hcA(d,e){var x,w,v
if(B.hZB(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hZA(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1I(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.htO(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
htP(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.htO(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cb(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dx(f,0,0,0,0,0).a).aa().ag())
d.kI=w},
ard(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ard=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$ard)
case 7:s=f
r=A.w(p)
r=A.er(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$ard,w)},
are(d){var x=0,w=A.j(y.H),v,u,t
var $async$are=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ard(d),$async$are)
case 3:u=f
x=5
return A.b(A.az(),$async$are)
case 5:x=4
return A.b(f.aG("Int","ngmy_doc_share_usage_"+t,u+1),$async$are)
case 4:case 1:return A.h(v,w)}})
return A.i($async$are,w)},
arc(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hcB(d)
if(u<=0){v=!1
x=1
break}if(B.hcA(d,e)){v=!1
x=1
break}x=3
return A.b(B.ard(e),$async$arc)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arc,w)},
b1J(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jr(e,d),$async$b1J)
case 3:if(g){v=-1
x=1
break}u=B.hcB(d)
if(u<=0){v=-1
x=1
break}if(B.hcA(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ard(e),$async$b1J)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1J,w)},
cfr(d,e,f){var x=0,w=A.j(y.y),v
var $async$cfr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jr(e,d),$async$cfr)
case 3:if(h){v=!1
x=1
break}v=B.arc(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfr,w)},
cfq(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cfq=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cfr(d,u,i.gUR()),$async$cfq)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfq,w)},
a8k(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8k=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUR()){v=!0
x=1
break}if(B.b1I(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.UB),$async$a8k)
case 5:x=k?3:4
break
case 3:B.htP(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8k)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.UB,"Doc Share for Organizations"),$async$a8k)
case 7:if(!k){v=!1
x=1
break}B.htP(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8k)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
cfo:function cfo(){},
cfp:function cfp(){},
h_M(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h_M=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h_M)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.frd.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.frd.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_M,w)},
iwb(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.frd.bq($.frd,new B.h_O(d))},
h_O:function h_O(d){this.a=d},
fsS(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fsS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.mZ(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$fsS)
case 3:C.Bx.ft(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsS,w)},
ahm(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.frU.n(0,d,new B.ado(A.bs(e,!0,v)))
x=3
return A.b(A.az(),$async$ahm)
case 3:x=2
return A.b(h.aG("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahm)
case 2:return A.h(null,w)}})
return A.i($async$ahm,w)},
ahg(d){return B.ieG(d)},
ieG(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.frU.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ahg)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fwE(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.ado(r)
$.frU.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahg,w)},
RR(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.Ha.n(0,d,u)
x=3
return A.b(B.So(d,u),$async$RR)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RR,w)},
aQE(d){return B.ieE(d)},
ieE(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Ha.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sn(d),$async$aQE)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.Ha.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQE)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cD.aK(r)
x=!J.ct(q)?9:10
break
case 9:B.RR(d,q)
x=11
return A.b(J.fN(s,d),$async$aQE)
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
return A.i($async$aQE,w)},
iaJ(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cc(J.eo(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cc(A.wV(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
return A.f3(null,y.K)},
a36(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a36=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bF,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fCs(r,t),!1,s)
A.fC(r,"error",new B.fCt(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ix(0,C.Or,new B.fCu())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a36,w)},
aQZ(d,e,f){return B.ih2(d,e,f)},
ih2(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQZ=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a36(i),$async$aQZ)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.So(o,p),$async$aQZ)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahm(k,j,s),$async$aQZ)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.aa(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQZ,w)},
aQY(d,e,f){return B.ih1(d,e,f)},
ih1(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQY=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQZ(d,e,f),$async$aQY)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a36(f),$async$aQY)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Ha.n(0,s,r)
$.S9.n(0,s,r)
x=11
return A.b(B.RR(s,r),$async$aQY)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQY,w)},
Cm(d,e,f,g,h,i){return B.hZK(d,e,f,g,h,i)},
hZK(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cm=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1Q(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RR(s,d),$async$Cm)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cm)
case 10:r=a2
x=11
return A.b(r.aG("String",s,C.cL.gco().aK(d)),$async$Cm)
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
return A.b(B.Bd(e),$async$Cm)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.Hk(e,j),$async$Cm)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cm,w)},
Wn(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wn=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bd(d),$async$Wn)
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
k=B.htR(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b1Q(),null)
$.ahL.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a36(o),$async$Wn)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.Ha.n(0,h,g)
$.S9.n(0,h,g)
B.RR(h,g)
x=9
break
case 10:x=11
return A.b(B.aQY(d,m,o),$async$Wn)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hk(d,t),$async$Wn)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
hcF(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hcF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.htR(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Js(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cm(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hcF,w)},
Js(d,e,f,g,h,i){return B.hZJ(d,e,f,g,h,i)},
hZJ(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Js=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cT.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Li(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Js)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h1(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SY(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kL(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.So(k,l),$async$Js)
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
return A.b(j.a1(0),$async$Js)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.So(k,new Uint8Array(A.cc(n))),$async$Js)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahm(r,q,g),$async$Js)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1Q(),null)
x=17
return A.b(B.Bd(d),$async$Js)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.Hk(d,e),$async$Js)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Js,w)},
Wp(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wp=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahL.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a36(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahg(s),$async$Wp)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sn(u[o]),$async$Wp)
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
v=A.wV(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S9.h(0,s)
if(i==null)i=$.Ha.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rV(d,e),$async$Wp)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S9.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wV(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
htR(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rV(d,e){return B.hZL(d,e)},
hZL(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rV=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S9.h(0,f)
if(e==null)e=$.Ha.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahL.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a36(s),$async$rV)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.Ha.n(0,f,r)
$.S9.n(0,f,r)
B.RR(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.aa(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahg(f),$async$rV)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAo(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sn(g[l]),$async$rV)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqs()
if(!C.aI.gau(r)){$.Ha.n(0,f,r)
$.S9.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQE(f),$async$rV)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S9.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wp(a0,a1,0,g),$async$rV)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.Ha.n(0,f,h)
$.S9.n(0,f,h)
B.RR(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rV,w)},
hZO(d){var x,w,v=$.ahL.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hZP(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hZM(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ark(d,e,f,g,h){return B.hZN(d,e,f,g,h)},
hZN(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ark=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahL.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a36(s),$async$ark)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rV(g,e),$async$ark)
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
return A.b(n.iF(d).xP(h,r,new A.EF(!0,e.c)),$async$ark)
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
return A.i($async$ark,w)},
htT(d,e,f,g,h){var x,w,v,u,t=$.htS
$.htS=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfC.n(0,t,new B.byW(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAo(u)))
return t},
hcG(d){var x=0,w=A.j(y.H)
var $async$hcG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hcG,w)},
Jt(d,e){var $async$Jt=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahL.h(0,h)
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
return A.qy(B.Wp(d,e,p,o<q?o:q),$async$Jt,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qy(A.GI(n),$async$Jt,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qy(B.ahg("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jt,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qy(B.Sn(h[l]),$async$Jt,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qy(A.GI(k),$async$Jt,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qy(B.rV(d,e),$async$Jt,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qy(A.GI(A.wV(j,p,o<i?o:i)),$async$Jt,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qy(null,0,w)
case 2:return A.qy(t.at(-1),1,w)}})
var x=0,w=A.hCS($async$Jt,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hEQ(w)},
b1S(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfC.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a68(),$async$b1S)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1S,w)},
Wo(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfC.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a68(),$async$Wo)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahm(r.c,u,r.z),$async$Wo)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1Q(),null)
u=r.a
x=5
return A.b(B.Bd(u),$async$Wo)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.Hk(u,s),$async$Wo)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wo,w)},
a8r(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfC.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.air(u[s]),$async$a8r)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8r,w)},
cfE(d,e,f){var x=0,w=A.j(y.H)
var $async$cfE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDZ(d,e,f),$async$cfE)
case 2:return A.h(null,w)}})
return A.i($async$cfE,w)},
cfF(d,e,f){var x=0,w=A.j(y.H)
var $async$cfF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bE_(d,e,f),$async$cfF)
case 2:return A.h(null,w)}})
return A.i($async$cfF,w)},
Fr(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bd(d),$async$Fr)
case 2:p=g
J.mW(p,new B.cfD(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Ha.W(0,v)
$.ahL.W(0,e)
x=3
return A.b(B.ahg(v),$async$Fr)
case 3:u=g
$.frU.W(0,v)
x=4
return A.b(A.az(),$async$Fr)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fr)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fr)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.air(s[q]),$async$Fr)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.air(v),$async$Fr)
case 13:x=14
return A.b(B.Hk(d,p),$async$Fr)
case 14:return A.h(null,w)}})
return A.i($async$Fr,w)},
b1R(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rV(d,e),$async$b1R)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fsS(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1R,w)},
Bd(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bd)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fCv(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bd,w)},
Hk(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hk)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fGH(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aG("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hk)
case 3:return A.h(null,w)}})
return A.i($async$Hk,w)},
bDZ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bd(d),$async$bDZ)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fAF(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGB(f))
x=4
return A.b(B.Hk(d,u),$async$bDZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDZ,w)},
bE_(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bE_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bd(d),$async$bE_)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fAG(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPX(f))
x=4
return A.b(B.Hk(d,u),$async$bE_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bE_,w)},
ado:function ado(d){this.a=d},
fwE:function fwE(){},
fCs:function fCs(d,e){this.a=d
this.b=e},
fCt:function fCt(d){this.a=d},
fCu:function fCu(){},
cfD:function cfD(d){this.a=d},
byW:function byW(d,e,f,g,h,i,j,k,l){var _=this
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
fCv:function fCv(){},
fGH:function fGH(){},
fAF:function fAF(d){this.a=d},
fAG:function fAG(d){this.a=d},
a8s(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aS(d,new B.cfI())?3:4
break
case 3:x=5
return A.b(B.b1T(d,e),$async$a8s)
case 5:u=g
if(u!=null){t=u.c
B.Oq(d,u.b,e,t)}v=u
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
return A.b(B.b1O(s),$async$a8s)
case 10:case 9:if(g){v=new A.Rc(1,D.Ue,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wq(d,e),$async$a8s)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wv(!0,!0,d,e),$async$a8s)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oq(d,D.Az,e,t)
v=new A.Rc(p,D.Az,t)
x=1
break}v=B.cfH(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8s,w)},
Wq(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8u(null,d,e),$async$Wq)
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
return A.b(B.b1N(p,d.length,e),$async$Wq)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfF(e,C.d.gH(d).a,r.b),$async$Wq)
case 7:case 6:q=r.a
x=8
return A.b(B.Oq(d,D.Ue,e,q),$async$Wq)
case 8:v=new A.Rc(d.length,D.Ue,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
Wr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.X(d.c,"video/")||d.mR(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8t(d,e),$async$Wr)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfA(s,d,e,t),$async$Wr)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1O(t),$async$Wr)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rV(e,d),$async$Wr)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wq(A.a([d],y.r),e),$async$Wr)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wr,w)},
Wt(){var x=0,w=A.j(y.H)
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hcz(),$async$Wt)
case 2:x=3
return A.b(B.aTl(),$async$Wt)
case 3:return A.h(null,w)}})
return A.i($async$Wt,w)},
a8t(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1Q()
x=3
return A.b(B.cfE(e,d.a,u),$async$a8t)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8t,w)},
Oq(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Ue&&C.a.X(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8t(p,f),$async$Oq)
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
return A.b(B.cfz(o,p,u,f),$async$Oq)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfA(o,p,f,t),$async$Oq)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfy(o,u,p,f),$async$Oq)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oq,w)},
b1T(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfG(e,d),$async$b1T)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wv(!1,!0,d,e),$async$b1T)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rc(u.a,D.Az,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1T,w)},
cfG(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wp(d,s,0,1),$async$cfG)
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
return A.i($async$cfG,w)},
cfH(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8u(null,d,e),$async$cfH)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.htQ(u)
if(t.length>800){v=null
x=1
break}v=new A.Rc(d.length,D.dWl,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfH,w)},
arl(d,e,f){return B.hZS(d,e,f)},
hZS(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arl=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.mX(g,1)
x=B.hcE(g)?3:4
break
case 3:x=5
return A.b(B.cfB(g),$async$arl)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mX(g,13))
try{k=B.Fs(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mX(g,13))
u=9
x=12
return A.b(B.b1M(q),$async$arl)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ws(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.aa(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.hcD(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ws(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Ju(C.a.i(J.mX(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Ju(C.a.i(J.mX(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Ju(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Ws(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arl,w)},
Ju(d,e,f){return B.hZQ(d,e,f)},
hZQ(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ju=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.X(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.X(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.X(e,"http://")&&!C.a.X(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1E(r),$async$Ju)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1E(A.cD(s,0,null)),$async$Ju)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cfd(o,r,a1,n,a2),$async$Ju)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.cfc(q),$async$Ju)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Ws(l,a2),$async$Ju)
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
return A.i($async$Ju,w)},
a8u(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8u=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rV(f,r),$async$a8u)
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
v=C.W.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8u,w)},
Ws(d,e){return B.hZR(d,e)},
hZR(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ws=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cD.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cm(i,a3,d,k,l,o),$async$Ws)
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
return A.i($async$Ws,w)},
Op:function Op(d,e){this.a=d
this.b=e},
cfI:function cfI(){},
a2G(d){var x=A.O(d).ax.a===C.I,w=x?D.ajr:D.agW,v=x?D.ale:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aiq:C.bm
return new A.aIL([w,s,v,u,t,x?C.fq:C.bQ])},
hKw(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h43(e),d,null,!0,!0,y.N)},
cfn(d,e,f,g,h,i,j,k,l){return new B.Wk(e,l,d,f,k,j,g,h,i,null)},
a_D(d,e,f,g,h,i,j){return new B.bgw(g,h,j,e,i,d,f,null)},
h43:function h43(d){this.a=d},
a_A:function a_A(d,e){this.c=d
this.a=e},
aBD:function aBD(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
den:function den(d){this.a=d},
del:function del(d){this.a=d},
dem:function dem(d){this.a=d},
byy:function byy(){},
Wk:function Wk(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFH:function aFH(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e1l:function e1l(d){this.a=d},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0i:function e0i(d,e,f){this.a=d
this.b=e
this.c=f},
e0h:function e0h(d){this.a=d},
e0j:function e0j(d,e){this.a=d
this.b=e},
e0o:function e0o(d,e,f){this.a=d
this.b=e
this.c=f},
e0n:function e0n(d){this.a=d},
e19:function e19(d,e){this.a=d
this.b=e},
e1a:function e1a(d){this.a=d},
e0G:function e0G(d,e,f){this.a=d
this.b=e
this.c=f},
e0D:function e0D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e0m:function e0m(d){this.a=d},
e0O:function e0O(d){this.a=d},
e0N:function e0N(){},
e0s:function e0s(d){this.a=d},
e16:function e16(d,e){this.a=d
this.b=e},
e17:function e17(d,e){this.a=d
this.b=e},
e18:function e18(d,e){this.a=d
this.b=e},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0F:function e0F(d,e){this.a=d
this.b=e},
e1_:function e1_(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
e0V:function e0V(d){this.a=d},
e0X:function e0X(){},
e0Y:function e0Y(){},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e10:function e10(){},
e11:function e11(d){this.a=d},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0S:function e0S(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0p:function e0p(){},
e0q:function e0q(d){this.a=d},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0k:function e0k(d,e,f){this.a=d
this.b=e
this.c=f},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d,e,f){this.a=d
this.b=e
this.c=f},
e0B:function e0B(d,e){this.a=d
this.b=e},
e0x:function e0x(d){this.a=d},
e0u:function e0u(d,e,f){this.a=d
this.b=e
this.c=f},
e0y:function e0y(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0A:function e0A(){},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0v:function e0v(d){this.a=d},
e0t:function e0t(d,e,f){this.a=d
this.b=e
this.c=f},
e0w:function e0w(){},
e0M:function e0M(d){this.a=d},
e0L:function e0L(d,e){this.a=d
this.b=e},
e15:function e15(d,e){this.a=d
this.b=e},
e12:function e12(d){this.a=d},
e13:function e13(d,e){this.a=d
this.b=e},
e14:function e14(d){this.a=d},
e1i:function e1i(d){this.a=d},
e1g:function e1g(d){this.a=d},
e1h:function e1h(d){this.a=d},
e1j:function e1j(){},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e,f){this.a=d
this.b=e
this.c=f},
e1b:function e1b(d,e,f){this.a=d
this.b=e
this.c=f},
e1e:function e1e(d,e){this.a=d
this.b=e},
e1f:function e1f(d,e){this.a=d
this.b=e},
aBA:function aBA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgv:function bgv(d,e,f){this.c=d
this.d=e
this.a=f},
dej:function dej(){},
dek:function dek(){},
adI:function adI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
deH:function deH(){},
deG:function deG(d){this.a=d},
a_C:function a_C(d,e,f){this.c=d
this.d=e
this.a=f},
aBF:function aBF(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
deD:function deD(d){this.a=d},
deE:function deE(d,e,f){this.a=d
this.b=e
this.c=f},
deF:function deF(d,e){this.a=d
this.b=e},
deB:function deB(d,e){this.a=d
this.b=e},
dez:function dez(d){this.a=d},
dex:function dex(d){this.a=d},
deu:function deu(d){this.a=d},
deA:function deA(d){this.a=d},
dew:function dew(d){this.a=d},
deC:function deC(d){this.a=d},
dey:function dey(d){this.a=d},
dev:function dev(d){this.a=d},
a_z:function a_z(d,e,f){this.c=d
this.d=e
this.a=f},
aBC:function aBC(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
deg:function deg(d){this.a=d},
def:function def(d,e){this.a=d
this.b=e},
deh:function deh(d){this.a=d},
dee:function dee(d,e){this.a=d
this.b=e},
dei:function dei(d){this.a=d},
ded:function ded(d,e){this.a=d
this.b=e},
de9:function de9(d){this.a=d},
dea:function dea(d){this.a=d},
deb:function deb(d,e){this.a=d
this.b=e},
dec:function dec(d){this.a=d},
QM:function QM(d,e,f){this.c=d
this.d=e
this.a=f},
aBI:function aBI(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
deU:function deU(d){this.a=d},
deV:function deV(d){this.a=d},
deW:function deW(d){this.a=d},
deX:function deX(d){this.a=d},
deY:function deY(d,e){this.a=d
this.b=e},
deZ:function deZ(d){this.a=d},
df0:function df0(d){this.a=d},
df_:function df_(d){this.a=d},
a_E:function a_E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBG:function aBG(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
deQ:function deQ(d,e){this.a=d
this.b=e},
deR:function deR(d,e){this.a=d
this.b=e},
deI:function deI(d,e,f){this.a=d
this.b=e
this.c=f},
deJ:function deJ(d){this.a=d},
deK:function deK(){},
deP:function deP(){},
deL:function deL(d,e){this.a=d
this.b=e},
deM:function deM(d,e){this.a=d
this.b=e},
deN:function deN(d,e){this.a=d
this.b=e},
deO:function deO(d,e){this.a=d
this.b=e},
adG:function adG(d,e){this.c=d
this.a=e},
de8:function de8(d){this.a=d},
a_y:function a_y(d){this.a=d},
aBB:function aBB(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_F:function a_F(d,e){this.c=d
this.a=e},
aBH:function aBH(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
deT:function deT(d){this.a=d},
deS:function deS(d){this.a=d},
bgw:function bgw(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hZT(){var x,w=$.ov(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hh(v)},
Or(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Or=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Or)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Or)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
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
q=A.aa(n)
$.am.$1("[doc share video cloud] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Or,w)},
a8v(d){return B.hZU(d)},
hZU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8v)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hQ("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cR,null),$async$a8v)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8v,w)},
Wu(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Or(),$async$Wu)
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
return A.b(B.a8v(s),$async$Wu)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wu,w)},
Wv(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wv)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bs(f,!0,y.U)
else{t=A.T(f).k("Y<1>")
u=A.B(new A.Y(f,new B.cfK(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hZT()
t=A.T(u).k("N<1,ac<q,aK>>")
r=A.B(new A.N(u,new B.cfL(s),t),t.k("ak.E"))
x=6
return A.b(B.Or(),$async$Wv)
case 6:q=i
J.aJ(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8v(q),$async$Wv)
case 7:x=8
return A.b(B.a8w(r,u,g,s),$async$Wv)
case 8:v=new A.bso(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wv,w)},
arm(d){var x=0,w=A.j(y.y),v,u,t
var $async$arm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Or(),$async$arm)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arm,w)},
cfM(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Or(),$async$cfM)
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
return A.i($async$cfM,w)},
a8w(d,e,f,g){return B.hZV(d,e,f,g)},
hZV(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8w=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ark("media",r,new B.cfJ(s,e,g),f,q),$async$a8w)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wu(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8w)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wu(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8w)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wu(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8w)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8w,w)},
Fs(d,e,f){return B.hZW(d,e,f)},
hZW(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fs=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.X(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fs)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arm(b3),$async$Fs)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iR,null,g),$async$Fs)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arm(b3),$async$Fs)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Or(),$async$Fs)
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
b0=A.ny(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abW(a8.a,b0,"media",a8.d,a9).Dr(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1F(k,n,o,s,b7),$async$Fs)
case 17:j=c0
if(j!=null){J.c4(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.aa(b4)
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
a8=A.ny(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abW(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fs)
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
return A.b(B.a8v(e),$async$Fs)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fs,w)},
cfK:function cfK(){},
cfL:function cfL(d){this.a=d},
cfJ:function cfJ(d,e,f){this.a=d
this.b=e
this.c=f},
aTl(){var x=0,w=A.j(y.H),v,u
var $async$aTl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ia1=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTl)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTl)
case 3:u=$.hi8
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTl)
case 4:$.hi8=$.iiQ=$.iiR=null
return A.h(null,w)}})
return A.i($async$aTl,w)},
fGi(d){var x=0,w=A.j(y.H),v,u
var $async$fGi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aam){x=1
break}u=new A.bn($.bF,y.d4)
d.c=new B.fGj(new A.c7(u,y.aY))
x=3
return A.b(u.ix(0,C.ie,new B.fGk()),$async$fGi)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fGi,w)},
iiO(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hZD(x):x},
hic(d){var x=0,w=A.j(y.T),v,u,t
var $async$hic=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.X(u,"WR")){v=B.aro(u)
x=1
break}v=B.hcD(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hic,w)},
hib(d){var x=0,w=A.j(y.T),v,u,t
var $async$hib=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.X(u,"WR")){v=B.arp(u)
x=1
break}v=B.hcD(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hib,w)},
h_v(d){var x=0,w=A.j(y.T),v
var $async$h_v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arp(d),$async$h_v)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_v,w)},
bEV(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hib(d),$async$bEV)
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
return A.i($async$bEV,w)},
ftF(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ftF=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wo(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cm(d.aqs(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftF,w)},
Hm(d,e,f){return B.il7(d,e,f)},
il7(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hm=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hic(a1),$async$Hm)
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
if(C.a.X(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.X(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hMw().aGS(D.dIt,null),$async$Hm)
case 4:l=d.hi8=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAo(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bF,y.b1)
l.y=new B.fGU(f,k,new B.fGV(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a9b(0,new B.YG(r,"offer")),$async$Hm)
case 5:d=l
x=7
return A.b(l.amR(0),$async$Hm)
case 7:x=6
return A.b(d.a93(0,a4),$async$Hm)
case 6:x=8
return A.b(B.fGi(l),$async$Hm)
case 8:x=9
return A.b(l.arf(),$async$Hm)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iiO(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arq(m,h),$async$Hm)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.htQ(h)
case 11:v=new A.brD(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hm,w)},
fGj:function fGj(d){this.a=d},
fGk:function fGk(){},
fGV:function fGV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGU:function fGU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fGT:function fGT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
inc(d){switch(d){case"new":return D.eGk
case"checking":return D.eGl
case"connected":return D.eGn
case"completed":return D.eGm
case"failed":return D.eGp
case"disconnected":return D.eGq
case"closed":return D.aSs
case"count":return D.eGo}return D.aSs},
ind(d){switch(d){case"new":return D.aSt
case"gathering":return D.eGr
case"complete":return D.aam}return D.aSt},
ixK(d){switch(d){case"stable":return D.eGs
case"have-local-offer":return D.eGt
case"have-local-pranswer":return D.eGv
case"have-remote-offer":return D.eGu
case"have-remote-pranswer":return D.eGw
case"closed":return D.aSz}return D.aSz},
ivT(d){switch(d){case"new":return D.aSw
case"connecting":return D.aSx
case"connected":return D.aSy
case"closed":return D.aan
case"disconnected":return D.aSv
case"failed":return D.aSu}return D.aan},
aaR:function aaR(d,e){this.a=d
this.b=e},
Pv:function Pv(d,e){this.a=d
this.b=e},
YF:function YF(d,e){this.a=d
this.b=e},
Pu:function Pu(d,e){this.a=d
this.b=e},
FX:function FX(d,e){this.a=d
this.b=e},
ctJ:function ctJ(){},
hep(d){var x=new B.FW()
x.a=d
x.b=!0
return x},
FW:function FW(){this.b=this.a=$},
aaQ:function aaQ(){},
avX:function avX(){},
YG:function YG(d,e){this.a=d
this.b=e},
hcz(){var x=0,w=A.j(y.H)
var $async$hcz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hcz,w)},
hcC(d,e,f){var x=0,w=A.j(y.T),v
var $async$hcC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.X(e.c,"video/")||e.mR(D.n7))){v=null
x=1
break}v=B.h_M(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hcC,w)},
htQ(d){var x,w=C.agm.a5S(C.dW.aK(d),null)
if(w.length===0){x=C.dW.aK(d)
return C.cL.gco().aK(x)}return C.cL.gco().aK(w)},
hZC(d){var x,w,v=C.cD.aK(d)
try{x=C.cb.cE(0,C.agl.bgQ(v,!1))
return x}catch(w){x=C.cb.cE(0,v)
return x}},
hcD(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.X(t,s))return B.hZC(C.a.aY(t,s.length))
w=e+"|"
if(C.a.X(t,w)){x=C.a.aY(t,w.length)
try{v=C.cb.cE(0,C.cD.aK(x))
return v}catch(u){return x}}return null},
hZD(d){var x,w,v,u,t,s=A.a([],y.s)
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
hZE(){var x,w=$.ov(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hh(v)},
b1L(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1L)
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
return A.i($async$b1L,w)},
cfs(d,e){return B.hZF(d,e)},
hZF(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cfs=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hQ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cR,null),$async$cfs)
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
return A.i($async$cfs,w)},
b1O(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1L(d),$async$b1O)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1O,w)},
b1N(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1N=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hZE()
r=C.a.i(f)
t=C.dW.aK(s)
x=3
return A.b(B.cfs(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gco().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1N)
case 3:if(!h){v=null
x=1
break}v=new A.a1F("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1N,w)},
b1M(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1L(o),$async$b1M)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cE(0,C.cD.aK(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1M,w)},
cft(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cft=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bFU("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cR),$async$cft)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cft,w)},
b1P(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jq(),$async$b1P)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1P,w)},
arh(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arh)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1P(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arh,w)},
arf(d,e){var x=0,w=A.j(y.H)
var $async$arf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arf)
case 3:x=2
return A.b(g.aG("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arf)
case 2:return A.h(null,w)}})
return A.i($async$arf,w)},
a8n(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8n=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8n)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8n)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dr(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8m(s),$async$a8n)
case 5:x=6
return A.b(B.arf(f,u),$async$a8n)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8n,w)},
a8o(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8o=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8o)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8o)
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
if(o!==t&&s.an(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.arf(g,q),$async$a8o)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8m(u),$async$a8o)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
a8p(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8p=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8p)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jq(),$async$a8p)
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
s=B.b1I(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8p)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aG("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8p)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8p,w)},
cfu(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfu)
case 7:s=f
p=A.w(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cfu,w)},
Jr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfu(d),$async$Jr)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1P(t),$async$Jr)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arg(d),$async$Jr)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1I(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arg(d),$async$Jr)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jr,w)},
arg(d){var x=0,w=A.j(y.H)
var $async$arg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arg)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arg)
case 2:return A.h(null,w)}})
return A.i($async$arg,w)},
b1Q(){var x,w=$.ov(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hh(v)},
a8q(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hcE(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfx(d){return B.hZH(d)},
hZH(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8q(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfx)
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
return A.i($async$cfx,w)},
arj(d,e){return B.hZI(d,e)},
hZI(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8q(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hQ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cR,null),$async$arj)
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
return A.i($async$arj,w)},
cfz(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8q(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arj(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfz)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfz,w)},
cfy(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfy=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8q(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arj(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfy)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfy,w)},
cfA(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8q(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arj(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfA,w)},
cfB(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hcE(d)){v=null
x=1
break}x=3
return A.b(B.cfx(d),$async$cfB)
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
return A.i($async$cfB,w)},
a8x(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8x=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8x)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8x)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
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
q=A.aa(n)
$.am.$1("[doc share webrtc stash] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8x,w)},
arn(d){return B.hZX(d)},
hZX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$arn)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hQ("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cR,null),$async$arn)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arn,w)},
aro(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aro=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aro)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8x(),$async$aro)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
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
return A.b(B.arn(s),$async$aro)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.aa(i)
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
return A.i($async$aro,w)},
arq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$arq)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8x(),$async$arq)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dI(A.a1(s,r,q),r,q)
r=C.dW.aK(C.a.i(e))
q.n(0,"answer",C.cL.gco().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arn(u),$async$arq)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arq,w)},
arp(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arp)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8x(),$async$arp)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cE(0,C.cD.aK(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arp,w)},
aqf(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.qm)){v=null
x=1
break}x=3
return A.b(p.lz(e),$async$aqf)
case 3:r=g
u=4
x=7
return A.b(r.hc(C.he),$async$aqf)
case 7:q=g
o=q
o=o==null?null:J.eM(J.uJ(o))
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
return A.i($async$aqf,w)},
iu0(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fYG(d){return B.iu2(d)},
iu2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fYG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iF("media").LJ(d,3600),$async$fYG)
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
return A.i($async$fYG,w)},
DO(d,e,f,g,h,i){var x=null
return B.iu_(d,e,f,g,h,i)},
iu_(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DO=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.htT(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hcG(r),$async$DO)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fYG(o),$async$DO)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8r(r),$async$DO)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aWa)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MO(A.a([],g))
x=15
return A.b(d.f9(0,A.awK("GET",A.cD(n,0,null))).dc(0,C.H8),$async$DO)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8r(r),$async$DO)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Li(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DO)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1S(r,k),$async$DO)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DO)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wo(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.aa(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a8r(r),$async$DO)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DO,w)},
aSZ(d){return B.iu1(d)},
iu1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iF("media").W(0,d),$async$aSZ)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSZ,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[108]
F=c[111]
B=a.updateHolder(c[16],B)
D=c[110]
H=c[79]
G=c[88]
I=c[36]
K=c[103]
L=c[38]
B.ctK.prototype={
aGS(d,e){return this.cRr(d,e)},
cRr(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dI(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cu(t)))
t=J.k(u)
v=B.i3D(C.cL.gco().aK(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGS,w)}}
B.b70.prototype={
bD7(d){var x=this,w=x.w
w.onclose=A.hv(new B.ctF(x))
w.onopen=A.hv(new B.ctG(x))
w.onmessage=A.hv(new B.ctH(x))
w.onbufferedamountlow=A.hv(new B.ctI(x))},
gd3(d){return this.x},
aj4(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aj4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FW()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hep(J.eM(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.e9(d.arrayBuffer(),y.af),$async$aj4)
case 8:v=t.hep(s.apo(f,0,null))
x=1
break
case 7:case 4:v=B.hep(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aj4,w)}}
B.b71.prototype={
bD8(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hv(new B.ctL(x)))
w.addEventListener("icecandidate",A.hv(new B.ctM(x)))
w.addEventListener("iceconnectionstatechange",A.hv(new B.ctN(x)))
w.onicegatheringstatechange=A.hv(new B.ctO(x))
w.addEventListener("signalingstatechange",A.hv(new B.ctP(x)))
if(!$.hmj())w.addEventListener("connectionstatechange",A.hv(new B.ctQ(x)))
w.addEventListener("negotiationneeded",A.hv(new B.ctR(x)))
w.addEventListener("track",A.hv(new B.ctS(x)))},
amR(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.e9(s.createAnswer(A.kl(A.cu(A.S(y.N,y.z)))),y.aQ),$async$amR)
case 3:t=f
v=new B.YG(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amR,w)},
a93(d,e){return this.bs3(0,e)},
bs3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a93=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.e9(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a93)
case 2:return A.h(null,w)}})
return A.i($async$a93,w)},
a9b(d,e){return this.bso(0,e)},
bso(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.e9(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9b)
case 2:return A.h(null,w)}})
return A.i($async$a9b,w)},
arf(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YG(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arf,w)},
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
B.adH.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_B.prototype={
T(){return new B.aBE()},
gd1(){return this.c}}
B.aBE.prototype={
Z(){this.a3()
this.afA()},
afA(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1J(u.e,u.c),$async$afA)
case 2:t=e
if(v.c!=null)v.m(new B.der(v,t))
return A.h(null,w)}})
return A.i($async$afA,w)},
Rk(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arc(t.e,t.c,!1),$async$Rk)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fuq)
x=1
break}x=4
return A.b(B.a8l(u.a.c,"individual"),$async$Rk)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7q(A.eg(new B.deo(u),!1,null,y.H)),$async$Rk)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rk,w)},
K1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$K1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fEa(o),$async$K1)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8p(o.e,r,s,q),$async$K1)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.frp)
x=1
break}x=5
return A.b(B.a8l(u.a.c,"member"),$async$K1)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7q(A.eg(new B.deq(u),!1,null,y.H)),$async$K1)
case 6:case 1:return A.h(v,w)}})
return A.i($async$K1,w)},
yN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8k(t.e,o,t.f,t.r,t.w,s),$async$yN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8l(u.a.c,"org_owner"),$async$yN)
case 4:x=5
return A.b(B.arh(u.a.c),$async$yN)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fEF(o),$async$yN)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8n(s,t,o,q.c),$async$yN)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.frl)
x=1
break}x=10
return A.b(B.arh(u.a.c),$async$yN)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7q(A.eg(new B.dep(u),!1,null,y.H)),$async$yN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yN,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.ny:C.qs,p=B.hcB(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aD(d,C.dE,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fOz,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hn,s,s,s),C.aB,D.h7C,C.U,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.ccH,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lT(new B.det(),s),C.P,v,C.e3,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aea(C.eY,C.aEV,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gckq(),s),C.af],u))
w.push(new B.aea(C.pz,C.a5O,"Team Member","Sign in with your organization access code + password",t.gclh(),s))
w.push(C.af)
w.push(new B.aea(C.aqS,C.a7s,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckN(),s))
return A.c5(s,q,A.bm(!0,A.cb(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aea.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.m_,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zu,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.n(p,s,w,q,s,s,C.n),s,C.bT,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aEi.prototype={}
B.aHt.prototype={}
B.jD.prototype={
mR(d){var x=this.b,w=C.a.ph(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
garW(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.ad(x/1024,1)+" KB"
if(x<1073741824)return C.h.ad(x/1048576,1)+" MB"
return C.h.ad(x/1073741824,2)+" GB"},
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
bgj(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPX(d){return this.bgj(null,d)},
aGB(d){return this.bgj(d,null)}}
B.Wi.prototype={
T(){return new B.aFF(new A.cB(null,y.A))},
gd1(){return this.c}}
B.aFF.prototype={
Z(){this.a3()
this.afB()},
afB(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cl(u.a.c),$async$afB)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e0e(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afB,w)},
afC(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fx(s)),$async$afC)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fvl)
case 1:return A.h(v,w)}})
return A.i($async$afC,w)},
a03(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a03=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqf(s.d,4),$async$a03)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rn(r,"ngmy_my_code_"+m+".png"),$async$a03)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a03,w)},
ajw(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abu("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajw,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.ny:C.qs,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m7
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
w=A.o(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,E.a6d,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,C.anu,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aD.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.nd,w,C.lb,new A.e5(A.o(p,A.qf(p,p,!1,B.hZy(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bT,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.eq(C.DC,p,C.WF,q.gccH(),p),1),C.as,A.E(A.db(C.zW,p,C.acK,q.gccI(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.U,new A.a5(1/0,p,A.eq(G.a4A,p,D.h39,q.gcAd(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,I.ao2,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wm.prototype={
T(){return new B.aFI(new A.at(C.ax,$.aw()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aFI.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.Jp(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
a04(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a04=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jp(u.d.a.a)
if(t==null){u.m(new B.e1n(u))
x=1
break}u.m(new B.e1o(u))
s=u.a
r=s.c
x=3
return A.b(B.a8j(s.d,new B.e1p(u),t,r),$async$a04)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e1q(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a04,w)},
a3k(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3k=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e1r(r))
u=4
q=J.fl(r.a.d)
x=7
return A.b(B.rV(r.a.c,q),$async$a3k)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e1s(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aja(p,m,l,j,k),$async$a3k)
case 8:o=e
if(r.c!=null)r.m(new B.e1t(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.e1u(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e1v(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3k,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ajr:D.agW,h=j?D.ale:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aiq:C.bm
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dn(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dn(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c_H,C.f,k,k,new A.n(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,E.a6d,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uW(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bm_()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.ON,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e1w(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mt(l.a.d,4)
m=A.B(new A.N(m,new B.e1x(x,new A.aIL(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fpS)
else q.push(A.X(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cU(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.n(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bI6,k,k,C.ah),1)
u=l.f?k:l.gcAe()
t=i[3]
s=i[1]
q=A.l(16)
s=A.eq(G.a4A,k,D.h4g,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gccJ()
t=A.bp(C.aD,k,k,0,C.c,k,C.nF,k,new A.ba(A.l(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lB(new B.e1y(),A.x(A.a([e,new A.D(D.bHA,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.u_:D.h2x,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.ck,C.a0R,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bm_.prototype={
pd(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.ho(C.bB,v.length),C.aP)}}
B.Wj.prototype={
T(){return new B.aFG()}}
B.aFG.prototype={
Z(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bc(w,C.b7,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.at(new A.bc(x,C.b7,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.at(C.ax,v)},
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
afD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e0f(r))
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
return A.b(B.a8o(p,m,n,o,C.a.i(l).length===0?null:l),$async$afD)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.fuX)
s=[1]
x=4
break}p.K(y.q).f.U(D.fty)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e0g(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afD,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.ny:C.qs,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fVR,s,s,s,1,s,!0),p=A.o(s,D.bzC,C.f,s,s,new A.n(s,s,s,A.l(22),s,C.Ix,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c72,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6Y,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c7d,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gccK()
u=A.bp(C.aD,s,s,s,s,C.hh,s,s,s,s,s,s)
return A.c5(q,r,A.cb(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bJ(t.r?C.u_:C.aZ0,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.ado.prototype={}
B.byW.prototype={
a68(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a68=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.aqs()))
x=3
return A.b(B.So(t,s),$async$a68)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a68,w)},
gd1(){return this.a}}
B.Op.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_A.prototype={
T(){return new B.aBD(new A.at(C.ax,$.aw()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aBD.prototype={
Z(){this.a3()
$.aU.x1$.push(new B.den(this))},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
ccQ(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2G(d),u=x.a.c,t=u?C.iK:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.o(w,H.atz,C.f,w,w,new A.n(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.auo,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uW(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byy()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CL,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b7d),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.del(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cN(C.Mt,new A.bN(new A.n(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wL,A.x(A.a([l,C.aO,k,C.P,j,C.e3,i,C.e3,A.A(A.a([A.E(A.dV(C.o8,new B.dem(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.ba(A.l(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bN(new A.n(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aD.j(0.35),C.cM,12)],n),F.QP,C.n),C.bk,A.aE(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ezI,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccP(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OW,w,C.d7,w,w,w)}}
B.byy.prototype={
pd(d,e){return e.amL(e.a.toUpperCase())}}
B.Wk.prototype={
T(){return new B.aFH(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFH.prototype={
Z(){var x=this
x.a3()
x.uw()
x.w=A.dh(C.jJ,new B.e1l(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wt()
this.a2()},
a2d(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oo(u.a.c),$async$a2d)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bd(u.a.c),$async$a2d)
case 4:u.m(new s.e0J(u,e))
u.ip("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2d,w)},
uw(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oo(u.a.c),$async$uw)
case 3:t=e
x=4
return A.b(B.Bd(u.a.c),$async$uw)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e0K(u,s))
if(t>0)u.ip("Received "+A.w(t)+" file(s) via My Code.")
u.Ou(u.d)
B.Cl(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uw,w)},
Ou(d){return this.bHa(d)},
bHa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8t(r,u.a.c),$async$Ou)
case 8:p=f
if(u.c==null){x=1
break}new B.e0i(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.X(r.c,"video/")||r.mR(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wr(r,u.a.c),$async$Ou)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bd(u.a.c),$async$Ou)
case 12:u.m(new o.e0j(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Ou,w)},
OU(d){return this.bNy(d)},
bNy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8t(d,u.a.c),$async$OU)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e0o(u,d,t))
x=6
return A.b(A.fH(new A.fx(t)),$async$OU)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fx(r.toUpperCase())),$async$OU)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OU,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
ux(d,e){return this.cLb(d,e)},
cLb(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ux=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e19(r,e))
u=3
x=6
return A.b(d.$0(),$async$ux)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e1a(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ux,w)},
gaYq(){var x=this.a
return x.f||x.r||x.w},
IQ(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYq()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cfq(s,n,r,q,o,t),$async$IQ)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fRA(o,u.a.c),$async$IQ)
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
return A.b(B.DQ(s,o,r,q,n,t),$async$IQ)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IQ,w)},
a1g(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arh(u.a.c),$async$a1g)
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
return A.b(A.a6(t,!1).cf(A.eg(new B.e0G(u,r,q),!1,null,y.H)),$async$a1g)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1g,w)},
a2n(d){return this.ctM(d)},
ctL(){return this.a2n(1)},
ctM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYq()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.are(u.a.c),$async$a2n)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2n,w)},
adu(d,e,f){return this.c3A(d,e,f)},
c3A(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.ux(new B.e0D(u,d,null,e,f),"Uploading\u2026"),$async$adu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adu,w)},
bHj(){B.hJw(!1,new B.e0m(this))
return},
cyP(){this.m(new B.e0O(this))},
aB3(){var x=0,w=A.j(y.H),v=this
var $async$aB3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHj()
return A.h(null,w)}})
return A.i($async$aB3,w)},
adq(){var x=0,w=A.j(y.H),v=this
var $async$adq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e0s(v),"Importing\u2026"),$async$adq)
case 2:return A.h(null,w)}})
return A.i($async$adq,w)},
Tn(d){return this.cKv(d)},
cKv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.X(t,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cf(A.eg(new B.e16(u,d),!1,null,y.H)),$async$Tn)
case 5:x=1
break
case 4:x=C.a.X(t,"image/")||d.mR(D.SR)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cf(A.eg(new B.e17(u,d),!1,null,y.H)),$async$Tn)
case 8:x=1
break
case 7:x=u.c4i(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cf(A.eg(new B.e18(u,d),!1,null,y.H)),$async$Tn)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tn,w)},
c4i(d){var x,w
if(C.a.X(d.c,"audio/"))return!0
x=d.b
w=C.a.ph(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cWg,C.a.aY(x,w+1).toLowerCase())},
ahe(d){return this.cku(d)},
cku(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.X(d.c,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cf(A.eg(new B.e0E(u,d),!1,null,y.H)),$async$ahe)
case 5:x=1
break
case 4:u.m(new B.e0F(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahe,w)},
SJ(d){return this.cBI(d)},
cBI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pB(t,s.c,s.f),$async$SJ)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e1_(u,d),"Preparing QR\u2026"),$async$SJ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SJ,w)},
ajW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e10(),A.T(t).k("N<1,q>")).fF(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e11(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SJ(r),$async$ajW)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajW,w)},
ajP(d){return this.cBf(d)},
cBf(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2G(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0U(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajP)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tn(d)
break
case"qr":u.SJ(A.a([d],y.r))
break
case"send_my_code":u.cl6(A.a([d],y.r))
break
case"save":u.ajc(d)
break
case"delete":u.JL(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajP,w)},
YN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0p(),A.T(t).k("N<1,q>")).fF(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e0q(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pB(t,s.c,s.f),$async$YN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e0r(u,r),"Preparing file\u2026"),$async$YN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YN,w)},
aij(d){return this.cs3(d)},
cs3(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aij=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hKw(d,!1),$async$aij)
case 3:s=f
r=s==null
q=B.a8q(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ip("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aij,w)},
ahk(){var x=0,w=A.j(y.H),v=this,u
var $async$ahk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fZM(u,v.a.c),$async$ahk)
case 2:return A.h(null,w)}})
return A.i($async$ahk,w)},
bHi(){B.hJw(!1,new B.e0l(this,null))
return},
K0(d,e){return this.cl7(d,e)},
b43(d){return this.K0(null,d)},
cl6(d){return this.K0(d,null)},
cl7(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$K0=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Y<1>")
k=A.B(new A.Y(p,new B.e0H(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xS.cq().apy(!0,C.a2C,!1),$async$K0)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.ux(new B.e0I(l,s,r),"Preparing\u2026"),$async$K0)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
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
return A.b(B.bH9(p,l,e,s.a.c),$async$K0)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$K0,w)},
J6(d){return this.c3n(d)},
c3n(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.X(q,"NGMYDOCRCV|")||C.a.X(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hZx(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b43(t),$async$J6)
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
return A.b(u.ux(new B.e0B(u,d),"Receiving video\u2026"),$async$J6)
case 11:x=1
break
case 10:x=12
return A.b(u.ux(new B.e0C(u,d),"Receiving\u2026"),$async$J6)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J6,w)},
EV(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DJ()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aij(t),$async$EV)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J6(s),$async$EV)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cf(A.eg(new B.e0M(u),!1,null,y.N)),$async$EV)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uw(),$async$EV)
case 10:x=1
break
case 9:x=11
return A.b(u.J6(C.a.i(r)),$async$EV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EV,w)},
ajc(d){return this.cxm(d)},
cxm(d){var x=0,w=A.j(y.H),v=this
var $async$ajc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e0L(v,d),"Saving\u2026"),$async$ajc)
case 2:return A.h(null,w)}})
return A.i($async$ajc,w)},
JL(d){return this.bPU(d)},
bPU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lm(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JL)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cft(t),$async$JL)
case 6:case 5:s=d.a
x=7
return A.b(B.Fr(u.a.c,s),$async$JL)
case 7:u.r.W(0,s)
x=8
return A.b(u.uw(),$async$JL)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JL,w)},
ak1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ak1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2G(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e15(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ak1)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahk()
break
case"import":u.adq()
break}case 1:return A.h(v,w)}})
return A.i($async$ak1,w)},
ccN(d){var x=d.c
if(C.a.X(x,"video/")||d.mR(D.n7))return C.qY
if(C.a.X(x,"image/")||d.mR(D.SR))return C.v7
if(C.a.q(x,"pdf"))return C.Id
return D.arg},
B(d){var x,w,v=this,u=null,t=B.a2G(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Ip,u,u,u,new B.e1g(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c0h,u,u,u,v.e?u:v.gckO(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyO()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bVu:C.arE,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a4x,u,u,u,v.e?u:v.gccO(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oP,u,u,u,v.e?u:v.gb59(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c24,u,u,u,v.e?u:new B.e1h(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lT(new B.e1i(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dn(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dn(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kc(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBA(C.ju,s,!0,t,w?u:v.gcBJ(),u),1)
x.push(new A.D(D.bGk,A.lB(new B.e1j(),A.A(A.a([s,C.as,A.E(new B.aBA(C.tn,"Export",!1,t,w?u:v.gbTO(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.ck,C.iD,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgv(t,v.e?u:v.gb59(),u)
else s=A.ks(!0,u,u,new B.e1k(v,t),s,u,D.bGc,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBA.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.ta,t,new A.ba(s,C.a1),t,t,t)
return A.db(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ta,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eq(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bgv.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lB(new B.dej(),new A.D(C.a1J,A.x(A.a([A.lB(new B.dek(),A.o(x,A.X(C.zy,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ed,C.hz,x,x,new A.bt(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.U,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e3,A.db(C.oP,x,D.h7W,this.d,A.bp(C.aD,x,x,x,C.c,x,C.OU,x,new A.ba(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.Cy,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adI.prototype={
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
o=!C.a.X(p,"video/")
if(!o||i.mR(D.n7))p=D.dx6
else{p=C.a.X(p,"image/")||i.mR(D.SR)
n=y.O
p=p?A.a([C.cX,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garW()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.aw,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ci))
if(!(!o||i.mR(D.n7)))l.push(A.haj(C.aD,!1,j,j,j,!1,j,j,new B.deG(k),j,j,new A.ba(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oI,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ci))
return A.lB(new B.deH(),new A.D(C.el,A.aE(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1c,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.aj),j),C.ck,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_C.prototype={
T(){return new B.aBF()},
gd1(){return this.c}}
B.aBF.prototype={
Z(){this.a3()
this.yD()},
t(){B.hZM(this.e)
this.a2()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rV(o.c,o.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hZP(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hZO(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.deD(s))
x=1
break}s.m(new B.deE(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.deF(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a3j(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rV(t.c,t.d),$async$a3j)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.frW)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aja(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3j)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3j,w)},
c3g(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kE(u,C.A,v,new B.deB(w,t),C.fO,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fY(t,C.A,v,new B.deC(w),C.fO,C.dB,!0,v,!1,v,v)
else return C.bM
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2G(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DE,u,u,u,v.gb8X(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.G_
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.db(C.DE,u,D.fR1,v.gb8X(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c3g()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_z.prototype={
T(){return new B.aBC(A.ak9(),C.bD,C.bD)},
gd1(){return this.c}}
B.aBC.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a4(w).k("fB<1>")).iG(new B.deg(v))
x.gcZ4().iG(new B.deh(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a4(x).k("fB<1>"))}if(x==null)x=C.bdD
x.iG(new B.dei(v))
v.yD()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rV(p.c,p.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.de9(s))
x=1
break}x=8
return A.b(s.d.vz(0,new A.a4Q(r,s.a.d.c)),$async$yD)
case 8:if(s.c==null){x=1
break}s.m(new B.dea(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.deb(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a05(){var x=0,w=A.j(y.H),v=this,u
var $async$a05=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hj(0),$async$a05)
case 5:x=3
break
case 4:x=6
return A.b(u.iL(0),$async$a05)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a05,w)},
aWe(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2G(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.G_
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bWq,C.f,o,o,new A.n(o,o,o,A.l(24),o,F.QP,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.dec(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aWe(p.w)+" / "+p.aWe(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.foj,o,o,o,o,o,o)
r=p.f
q=A.X(r?C.vb:C.hd,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.db(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccR(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qL,x,o),o,o,o),o,!1,!1,o,o)}}
B.QM.prototype={
T(){return new B.aBI()},
gd1(){return this.c}}
B.aBI.prototype={
Z(){this.a3()
this.QC()},
QC(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QC=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hcC(o.c,o.d,new B.deU(s)),$async$QC)
case 7:r=e
if(r==null||r.length===0){s.m(new B.deV(s))
x=1
break}s.e=r
q=A.im2(r)
if(q==null){s.m(new B.deW(s))
x=1
break}s.d=q
q.aV(0,s.gb3S())
x=8
return A.b(q.iY(0).dc(0,C.t6),$async$QC)
case 8:if(s.c==null){x=1
break}s.m(new B.deX(s))
x=9
return A.b(q.qw(0),$async$QC)
case 9:q.u6(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.deY(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QC,w)},
cj2(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.deZ(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DG(0,x.gb3S())
w=x.d
if(w!=null)w.t()
B.iwb(x.e)
x.a2()},
afG(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1R(u.c,u.d),$async$afG)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afG,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2G(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.nR,t,t,t,u.gccL(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.G_
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajA(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fG(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AJ(s,t),A.ay(t,A.xA(A.o(t,A.X(q?C.vb:C.hd,C.c,t,t,t,48),C.f,t,t,new A.n(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bT,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.df0(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_E.prototype={
T(){return new B.aBG(new A.cB(null,y.A))}}
B.aBG.prototype={
gcKT(){var x,w,v=this.a
if(v.e!==D.Uf)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"WR"))return w
return null},
gcKt(){var x,w,v=this.a
if(v.e!==D.Az)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcKT()
if(x!=null){v.RL(x)
v.e=A.dh(C.Hb,new B.deQ(v,x))}w=v.gcKt()
if(w!=null){v.RK(w)
v.f=A.dh(C.fM,new B.deR(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RK(d){return this.cqg(d)},
cqg(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arm(d),$async$RK)
case 3:t=f
x=4
return A.b(B.cfM(d),$async$RK)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.deI(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RK,w)},
RL(d){return this.cqh(d)},
cqh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h_v(d),$async$RL)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEV(t),$async$RL)
case 4:if(u.c==null){x=1
break}u.m(new B.deJ(u))
u.c.K(y.q).f.U(D.aVK)
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
gc8A(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccM(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a35(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a35=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DJ()){t=u.c
if(t!=null)t.K(y.q).f.U(D.fv6)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cf(A.eg(new B.deK(),!1,null,y.N)),$async$a35)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEV(s),$async$a35)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aVK)
case 1:return A.h(v,w)}})
return A.i($async$a35,w)},
abi(d){return this.bNz(d)},
bNz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fx(C.d.aN(t,", "))),$async$abi)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abi,w)},
afE(d){return this.bNh(d)},
bNh(d){var x=0,w=A.j(y.H),v=this
var $async$afE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fx(v.a.c)),$async$afE)
case 2:if(d.e!=null)d.K(y.q).f.U(D.fsp)
return A.h(null,w)}})
return A.i($async$afE,w)},
a3_(d){return this.cxo(d)},
cxo(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqf(s.d,4),$async$a3_)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rn(r,"ngmy_doc_share_qr.png"),$async$a3_)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3_,w)},
gaZG(){var x,w=this.a
if(w.e!==D.JC)return null
x=C.a.i(w.c)
if(C.a.X(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.X(x,"http://")||C.a.X(x,"https://"))return x
if(C.a.X(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abf(d){return this.bNs(d)},
bNs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZG()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fx(C.a.X(t,"http")?t:"N2|"+t)),$async$abf)
case 3:if(d.e!=null)d.K(y.q).f.U(D.fu5)
case 1:return A.h(v,w)}})
return A.i($async$abf,w)},
afF(){var x=0,w=A.j(y.H),v=this,u
var $async$afF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wt(),$async$afF)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afF,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2G(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.JC&&i!==D.Uf&&i!==D.Az
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.JC||t===D.Uf||t===D.Az?l:A.aH(l,l,l,l,C.ls,l,l,l,m.gb1N(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qf(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8A(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.JC){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.o(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.n),l,l,l,l,C.lP,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccM(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.U,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c65,D.h_G,new B.deL(m,d),l)],p))}if(m.a.e===D.JC&&m.gaZG()!=null)C.d.u(q,A.a([C.U,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c2q,D.fXf,new B.deM(m,d),l)],p))
if(m.a.e===D.Az){x=(m.w?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.h.ad(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lP,l,l,l)],p))}if(m.a.e===D.Uf){x=(m.r?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lP,l,l,l),C.af,A.db(D.bYT,l,D.h2Q,m.gcxL(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c5(v,w,new A.D(C.ac,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.i,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.eq(C.DC,l,C.WF,new B.deN(m,d),l),1),C.as,A.E(A.db(C.zW,l,C.acK,new B.deO(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bd,l,m.gb1N(),A.bp(C.aN,l,l,l,l,C.hh,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.deP(),y.C)}}
B.adG.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.o(x,A.qf(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.en(A.a([A.bJ(C.Be,x,new B.de8(d),x)],u),x,x,C.no,v,x,x,x,x,D.fQ0,x)}}
B.a_y.prototype={
T(){return new B.aBB(A.zV(C.yP,C.oe,C.vo))}}
B.aBB.prototype={
t(){this.d.t()
this.a2()},
azD(d){var x,w,v,u,t
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
return A.c5(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fXN,x,x,x,1,x,!0),C.w,A.zU(this.d,C.bY,this.gazC()),x,!1,!1,x,x)}}
B.a_F.prototype={
T(){return new B.aBH(A.zV(C.yP,C.oe,C.vo))},
gd1(){return this.c}}
B.aBH.prototype={
c4k(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.X(x,"NGMYDOCSYNC")||C.a.X(x,"N2|")||C.a.X(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahH(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MU("text/plain"),$async$ahH)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.fv0)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahH,w)},
ac6(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ac6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hKw(p,!0),$async$ac6)
case 3:t=e
p=t==null
s=B.a8q(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.frw)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$ac6,w)},
t(){this.d.t()
this.a2()},
azD(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c4k(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.asE,v,v,v,w.gbTh(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a4E,v,v,v,w.gcnB(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.v3:C.Q2,v,v,v,v,v),v,v,v,new B.deT(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h3L,v,v,v,1,v,!0)
u=A.zU(w.d,C.bY,w.gazC())
x=A.l(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eG_],s),v),v,!1,!1,v,v)}}
B.bgw.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pp
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.o(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pp:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1P,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaR.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pv.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YF.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pu.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FX.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ctJ.prototype={}
B.FW.prototype={}
B.aaQ.prototype={}
B.avX.prototype={}
B.YG.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jD)","q(jD)","Wk(Z)","~()","a_B(Z)","H(H,jD)","QM(Z)","~(nQ)","cw(FW)","aB<jD?>(@)","Wi(Z)","Wm(Z)","D(jD)","jD(@)","ac<q,@>(jD)","a_A(Z)","Wj(Z)","a_C(Z)","a_z(Z)","a_E(Z)","adG(Z)","ai<jD>()","a_F(Z)","adI(Z,H)","a_y(Z)","ac<q,aK>(jD)","cw(YF)","cw(aaQ)","aB<cw>(FW)"])
B.ctF.prototype={
$1(d){var x=this.a
x.x=D.aSr
x.y.I(0,D.aSr)},
$S:78}
B.ctG.prototype={
$1(d){var x=this.a
x.x=D.aSq
x.y.I(0,D.aSq)},
$S:78}
B.ctH.prototype={
$1(d){var x=this.a
x.aj4(A.ahX(d.data)).bG(new B.ctE(x),y.b)},
$S:78}
B.ctE.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ctI.prototype={
$1(d){},
$S:78}
B.ctL.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i3C(d.channel))},
$S:17}
B.ctM.prototype={
$1(d){},
$S:17}
B.ctN.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.inc(w.iceConnectionState)
x.cx=w
if($.hmj())switch(w.a){case 0:x.cy=D.aSw
break
case 1:x.cy=D.aSx
break
case 3:x.cy=D.aSy
break
case 5:x.cy=D.aSu
break
case 6:x.cy=D.aSv
break
case 7:x.cy=D.aan
break
default:break}},
$S:114}
B.ctO.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ind(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:114}
B.ctP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ixK(w.signalingState)},
$S:114}
B.ctQ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ivT(w.connectionState)},
$S:114}
B.ctR.prototype={
$1(d){},
$S:114}
B.ctS.prototype={
$1(d){},
$S:17}
B.fzB.prototype={
$1(d){var x=y.F.a(new A.qv([],[]).o8(d.target.result,!1)),w=C.wC.q(x.objectStoreNames,"blobs")
if(!w)C.wz.Gr(x,"blobs")},
$S:173}
B.fZA.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xc.ft(this.b)
$.eX.mK()
this.c.$1(d)},
$S:491}
B.fZC.prototype={
$1(d){return this.a.$1(B.icM(this.b,this.c))},
$S:32}
B.fZB.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fZz.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fZP.prototype={
$1(d){var x=this
return B.hyQ(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fZQ.prototype={
$1(d){var x=this
return B.hyQ(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fCg.prototype={
$1(d){var x=this
return B.cfn(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.der.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.deo.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfn(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.deq.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfn(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dep.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfn(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.det.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bXv,x,x,x,new B.des(d),x,x,x,x,x,x),A.E(A.FI(D.SB,!0,x,!1,C.a3H,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.SB,x,g,C.aoj,0,e,f)},
$C:"$4",
$R:4,
$S:474}
B.des.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fEd.prototype={
$1(d){var x,w,v=null,u=A.aD(d,C.eU,y.m).w,t=this.a,s=t?C.iK:C.c,r=A.l(28),q=A.o(v,D.bzW,C.f,v,v,D.b8T,v,v,v,v,D.ao8,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0T,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.CN,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asU,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fEb(d),v),1),C.as,A.E(A.bJ(D.fWe,v,new B.fEc(p,x,d),A.bp(C.b3,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.n),v,v,v,C.He,v,v,v,v),v)},
$S:70}
B.fEb.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fEc.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.fsG)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEi(v,x))},
$S:0}
B.fEH.prototype={
$1(d){var x=this,w=null,v=A.aD(d,C.eU,y.m).w,u=x.a,t=u?C.iK:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bzM,C.f,w,w,D.bao,w,w,w,w,D.ao8,w,w,1/0),new A.D(C.CN,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hhX(u,"Organization name",C.HN,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.U,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hhX(u,"Access code",C.mj,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.U,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hhX(u,"Member password",C.DB,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h3S,w,new B.fEG(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hh,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.n),w,w,w,C.He,w,w,w,w),w)},
$S:70}
B.fEG.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.fsL)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHt(u,x,w))},
$S:0}
B.cfe.prototype={
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
return A.b(A.vS(p,null).dc(0,C.a0Q),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
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
m=A.aa(h)
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
B.cfk.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfl.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cfm.prototype={
$1(d){return d.b},
$S:z+2}
B.cfg.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfh.prototype={
$1(d){return d.b},
$S:z+2}
B.cff.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cfi.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cfj.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fZN.prototype={
$1(d){return new B.Wi(this.a,null)},
$S:z+11}
B.fZO.prototype={
$1(d){return new B.Wm(this.a,this.b,this.c,null)},
$S:z+12}
B.e0e.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e1n.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e1o.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e1p.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e1m(x,d))},
$S:2}
B.e1m.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1q.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1r.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e1s.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e1t.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1u.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e1v.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1y.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.e1w.prototype={
$1(d){var x=this.a
return x.f?null:x.a04()},
$S:2}
B.e1x.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.X(s,"image/")||d.mR(D.SR))s=C.v7
else s=C.a.X(s,"video/")||d.mR(D.n7)?C.qY:D.arg
x=this.b.a
w=y.p
return new A.D(C.k7,A.A(A.a([A.o(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garW(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e0f.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e0g.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cfo.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:104}
B.cfp.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:104}
B.h_O.prototype={
$2(d,e){return e===this.a},
$S:261}
B.fwE.prototype={
$1(d){return J.k(d)},
$S:16}
B.fCs.prototype={
$1(d){var x=this.b
B.iaJ(C.HA.ga7L(this.a)).bG(x.gCg(x),y.H)},
$S:137}
B.fCt.prototype={
$1(d){return this.a.de(0,null)},
$S:137}
B.fCu.prototype={
$0(){return null},
$S:11}
B.cfD.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fCv.prototype={
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
B.fGH.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fAF.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fAG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfI.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.h43.prototype={
$1(d){return new B.a_A(this.a,null)},
$S:z+16}
B.den.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.del.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.dem.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e1l.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2d()},
$S:12}
B.e0J.prototype={
$0(){var x=J.bIg(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0K.prototype={
$0(){var x=J.bIg(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0i.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e0h(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGB(this.c)}},
$S:0}
B.e0h.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0j.prototype={
$0(){var x=J.bIg(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0o.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e0n(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGB(this.c)}},
$S:0}
B.e0n.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e19.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e1a.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e0G.prototype={
$1(d){return new B.Wj(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e0D.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IQ(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wn(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uw(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2n(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0m.prototype={
$1(d){this.a.adu(d,"No files selected.","Added")},
$S:491}
B.e0O.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e0N(),A.T(x).k("N<1,q>")))},
$S:0}
B.e0N.prototype={
$1(d){return d.a},
$S:z+2}
B.e0s.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xS.cq().d02(C.a2C,!0),$async$$0)
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
$.am.$1("[doc share import] "+A.w(p))
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
return A.b(B.arl(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uw(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e16.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e17.prototype={
$1(d){return new B.a_C(this.a.a.c,this.b,null)},
$S:z+18}
B.e18.prototype={
$1(d){return new B.a_z(this.a.a.c,this.b,null)},
$S:z+19}
B.e0E.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e0F.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e1_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IQ(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8s(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ctL(),$async$$0)
case 5:x=6
return A.b(p.uw(),$async$$0)
case 6:r=A.T(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e0W(p),r),new B.e0X(),r.k("N<ak.E,q>")).c0(0,new B.e0Y())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cf(A.eg(new B.e0Z(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pA(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wt(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0W.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e0V(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e0V.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0X.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e0Y.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0Z.prototype={
$1(d){var x=this.a
return new B.a_E(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e10.prototype={
$1(d){return d.a},
$S:z+2}
B.e11.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0U.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kB,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garW(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.X(p.c,"video/")
w=!x||p.mR(D.n7)?C.tr:C.nP
p=!x||p.mR(D.n7)?"Play video":"View"
return new A.bN(new A.n(s,v,new A.bG(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CJ,A.x(A.a([q,o,t,C.aB,B.a_D(!1,u,!1,w,p,new B.e0P(d),v),B.a_D(!1,u,!1,C.ju,"Share via QR",new B.e0Q(d),"Letters/numbers QR code"),B.a_D(!1,u,!1,D.a3M,"Send to their Code",new B.e0R(d),"Enter someone else's personal code"),B.a_D(!1,u,!1,C.hE,"Download / save",new B.e0S(d),v),C.am,B.a_D(!1,u,!0,C.ej,"Delete",new B.e0T(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:815}
B.e0P.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e0Q.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e0R.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e0S.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e0T.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e0p.prototype={
$1(d){return d.a},
$S:z+2}
B.e0q.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0r.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8u(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Ho(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pA(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0l.prototype={
$1(d){var x=this.a
x.ux(new B.e0k(x,d,this.b),"Preparing\u2026")},
$S:491}
B.e0k.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wn(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bH9(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0H.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e0I.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hcF(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0B.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hm(new B.e0x(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e0y(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e0z(s))
case 5:x=8
return A.b(r.b.ix(0,C.H8,new B.e0A()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uw(),$async$$0)
case 9:s.ip("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0x.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e0u(x,d,e))},
$S:253}
B.e0u.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0y.prototype={
$1(d){return new B.adG(this.a.a,null)},
$S:z+21}
B.e0z.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e0A.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e0C.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jp(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8i(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b43(B.Jp(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arl(new B.e0v(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hcE(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.X(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.uw(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e0w()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0v.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e0t(x,d,e))},
$S:253}
B.e0t.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0w.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.e0M.prototype={
$1(d){return new B.a_F(this.a.a.c,null)},
$S:z+23}
B.e0L.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1R(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e15.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.n(v[2],x,new A.bG(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CJ,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kB,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_D(!0,w,!1,C.mj,"My Code",new B.e12(d),"Your personal code & QR \u2014 others send docs to you"),B.a_D(!1,w,!1,D.a3M,"Send to their Code",new B.e13(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_D(!1,w,!1,C.zO,"Import backup",new B.e14(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:815}
B.e12.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e13.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bHi()},
$S:0}
B.e14.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e1i.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jz(D.SB,x,C.a3H,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d6(C.d.gH(D.SB).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:802}
B.e1g.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e1h.prototype={
$0(){this.a.ak1()
return null},
$S:0}
B.e1j.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*10)),e)},
$S:107}
B.e1k.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adI(e,w,v,this.b,x.e,x.ccN(w),new B.e1c(x,w),new B.e1d(x,v,w),new B.e1e(x,w),new B.e1f(x,w),null)},
$S:z+24}
B.e1c.prototype={
$0(){this.a.ahe(this.b)
return null},
$S:0}
B.e1d.prototype={
$0(){var x=this.a
return x.m(new B.e1b(x,this.b,this.c))},
$S:0}
B.e1b.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e1e.prototype={
$0(){this.a.OU(this.b)
return null},
$S:0}
B.e1f.prototype={
$0(){this.a.ajP(this.b)
return null},
$S:0}
B.dej.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*18)),e)},
$S:107}
B.dek.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:117}
B.deH.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.deG.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.deD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.deE.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.deF.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.deB.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fY(w,C.A,x,new B.dez(this.a),C.fO,C.dB,!0,x,!1,x,x)
$.aU.x1$.push(new B.deA(this.a))
return C.bM},
$S:155}
B.dez.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dex(this.a))
return C.bM},
$S:200}
B.dex.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.deu(x))},
$S:7}
B.deu.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dew(x))},
$S:7}
B.dew.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deC.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dey(this.a))
return C.bM},
$S:200}
B.dey.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dev(x))},
$S:7}
B.dev.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deg.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.def(x,d))},
$S:2151}
B.def.prototype={
$0(){return this.a.f=this.b===C.vL},
$S:0}
B.deh.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dee(x,d))},
$S:7}
B.dee.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dei.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ded(x,d))},
$S:7}
B.ded.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.de9.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dea.prototype={
$0(){return this.a.e=!1},
$S:0}
B.deb.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dec.prototype={
$1(d){return this.a.d.NP(0,A.dx(0,0,0,C.h.S(d),0,0))},
$S:6}
B.deU.prototype={
$0(){var x=this.a.a
return B.rV(x.c,x.d)},
$S:2152}
B.deV.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.deW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.deX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.deY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.deZ.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.df0.prototype={
$0(){var x=this.a
x.m(new B.df_(x))},
$S:0}
B.df_.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hj(0)
else x.qw(0)},
$S:0}
B.deQ.prototype={
$1(d){return this.a.RL(this.b)},
$S:12}
B.deR.prototype={
$1(d){return this.a.RK(this.b)},
$S:12}
B.deI.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.deJ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.deK.prototype={
$1(d){return D.hFz},
$S:z+25}
B.deP.prototype={
$2(d,e){if(d)B.Wt()},
$S:131}
B.deL.prototype={
$0(){return this.a.abi(this.b)},
$S:0}
B.deM.prototype={
$0(){return this.a.abf(this.b)},
$S:0}
B.deN.prototype={
$0(){return this.a.afE(this.b)},
$S:0}
B.deO.prototype={
$0(){return this.a.a3_(this.b)},
$S:0}
B.de8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.deT.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qA(),$async$$0)
case 2:u.m(new B.deS(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.deS.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfK.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.cfL.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfJ.prototype={
$2(d,e){return this.bnR(d,e)},
bnR(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wu(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2153}
B.fGj.prototype={
$1(d){if(d===D.aam&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fGk.prototype={
$0(){},
$S:11}
B.fGV.prototype={
bpt(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ftF(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.htT(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpt(d,e)},
$S:573}
B.fGU.prototype={
$1(d){var x=this
d.b=new B.fGT(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fGT.prototype={
$1(d){return this.bps(d)},
bps(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1S(n,m),$async$$1)
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
return A.b(B.ftF(l,n.b,m,n.c,s.d),$async$$1)
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
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8r(m),$async$$1)
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
x(v=B.aBE.prototype,"gckq","Rk",0)
x(v,"gclh","K1",0)
x(v,"gckN","yN",0)
x(v=B.aFF.prototype,"gccH","afC",0)
x(v,"gccI","a03",0)
x(v,"gcAd","ajw",0)
x(v=B.aFI.prototype,"gccJ","a04",0)
x(v,"gcAe","a3k",0)
x(B.aFG.prototype,"gccK","afD",0)
x(B.aBD.prototype,"gccP","ccQ",4)
x(v=B.aFH.prototype,"gckO","a1g",0)
x(v,"gcyO","cyP",4)
x(v,"gb59","aB3",0)
x(v,"gcBJ","ajW",0)
x(v,"gbTO","YN",0)
x(v,"gccO","EV",0)
x(B.aBF.prototype,"gb8X","a3j",0)
x(B.aBC.prototype,"gccR","a05",0)
x(v=B.aBI.prototype,"gb3S","cj2",4)
x(v,"gccL","afG",0)
x(v=B.aBG.prototype,"gcxL","a35",0)
x(v,"gb1N","afF",0)
w(B.aBB.prototype,"gazC","azD",8)
x(v=B.aBH.prototype,"gcnB","ahH",0)
x(v,"gbTh","ac6",0)
w(v,"gazC","azD",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aK,[B.ctJ,B.aaQ,B.avX,B.aEi,B.aHt,B.jD,B.ado,B.byW,B.FW,B.YG])
w(B.ctK,B.ctJ)
w(B.b70,B.aaQ)
x(A.kX,[B.ctF,B.ctG,B.ctH,B.ctE,B.ctI,B.ctL,B.ctM,B.ctN,B.ctO,B.ctP,B.ctQ,B.ctR,B.ctS,B.fzB,B.fZA,B.fZC,B.fZB,B.fZP,B.fZQ,B.fCg,B.deo,B.deq,B.dep,B.det,B.fEd,B.fEH,B.cfe,B.cfl,B.cfm,B.cfh,B.cff,B.cfi,B.cfj,B.fZN,B.fZO,B.e1p,B.e1y,B.e1w,B.e1x,B.fwE,B.fCs,B.fCt,B.cfD,B.fCv,B.fGH,B.fAF,B.fAG,B.cfI,B.h43,B.den,B.del,B.e1l,B.e0h,B.e0n,B.e0G,B.e0m,B.e0N,B.e16,B.e17,B.e18,B.e0E,B.e0W,B.e0V,B.e0X,B.e0Y,B.e0Z,B.e10,B.e11,B.e0U,B.e0p,B.e0q,B.e0l,B.e0H,B.e0y,B.e0w,B.e0M,B.e15,B.e1i,B.e1j,B.dej,B.dek,B.deH,B.deG,B.deB,B.dez,B.dex,B.deA,B.deC,B.dey,B.deg,B.deh,B.dei,B.dec,B.deQ,B.deR,B.deK,B.cfK,B.cfL,B.fGj,B.fGU,B.fGT])
w(B.b71,B.avX)
x(A.np,[B.fZz,B.der,B.des,B.fEb,B.fEc,B.fEG,B.e0e,B.e1n,B.e1o,B.e1m,B.e1q,B.e1r,B.e1s,B.e1t,B.e1u,B.e1v,B.e0f,B.e0g,B.fCu,B.dem,B.e0J,B.e0K,B.e0i,B.e0j,B.e0o,B.e19,B.e1a,B.e0D,B.e0O,B.e0s,B.e0F,B.e1_,B.e0P,B.e0Q,B.e0R,B.e0S,B.e0T,B.e0r,B.e0k,B.e0I,B.e0B,B.e0u,B.e0z,B.e0A,B.e0C,B.e0t,B.e0L,B.e12,B.e13,B.e14,B.e1g,B.e1h,B.e1c,B.e1d,B.e1b,B.e1e,B.e1f,B.deD,B.deE,B.deF,B.deu,B.dew,B.dev,B.def,B.dee,B.ded,B.de9,B.dea,B.deb,B.deU,B.deV,B.deW,B.deX,B.deY,B.deZ,B.df0,B.df_,B.deI,B.deJ,B.deL,B.deM,B.deN,B.deO,B.de8,B.deT,B.deS,B.fGk])
x(A.qw,[B.adH,B.Op,B.aaR,B.Pv,B.YF,B.Pu,B.FX])
x(A.ag,[B.a_B,B.Wi,B.Wm,B.Wj,B.a_A,B.Wk,B.a_C,B.a_z,B.QM,B.a_E,B.a_y,B.a_F])
x(A.ah,[B.aBE,B.aFF,B.aFI,B.aFG,B.aBD,B.aFH,B.aBF,B.aBC,B.aBI,B.aBG,B.aBB,B.aBH])
x(A.av,[B.aea,B.aBA,B.bgv,B.adI,B.adG,B.bgw])
x(A.n0,[B.cfk,B.cfg,B.cfo,B.cfp,B.h_O,B.e0x,B.e0v,B.e1k,B.deP,B.cfJ,B.fGV])
x(A.jL,[B.bm_,B.byy])})()
A.p4(b.typeUniverse,JSON.parse('{"b70":{"aaQ":[]},"b71":{"avX":[]},"a_B":{"ag":[],"v":[]},"aBE":{"ah":["a_B"]},"aea":{"av":[],"v":[]},"Wi":{"ag":[],"v":[]},"Wm":{"ag":[],"v":[]},"aFF":{"ah":["Wi"]},"aFI":{"ah":["Wm"]},"bm_":{"jL":[]},"Wj":{"ag":[],"v":[]},"aFG":{"ah":["Wj"]},"a_A":{"ag":[],"v":[]},"Wk":{"ag":[],"v":[]},"adI":{"av":[],"v":[]},"a_C":{"ag":[],"v":[]},"a_z":{"ag":[],"v":[]},"QM":{"ag":[],"v":[]},"a_E":{"ag":[],"v":[]},"adG":{"av":[],"v":[]},"a_y":{"ag":[],"v":[]},"a_F":{"ag":[],"v":[]},"aBD":{"ah":["a_A"]},"byy":{"jL":[]},"aFH":{"ah":["Wk"]},"aBA":{"av":[],"v":[]},"bgv":{"av":[],"v":[]},"aBF":{"ah":["a_C"]},"aBC":{"ah":["a_z"]},"aBI":{"ah":["QM"]},"aBG":{"ah":["a_E"]},"aBB":{"ah":["a_y"]},"aBH":{"ah":["a_F"]},"bgw":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.aF
return{J:x("nn"),k:x("MS()"),o:x("bq<q,q>"),F:x("zx"),g:x("aB<jD?>"),x:x("aB<~>"),V:x("U<ab>"),O:x("U<u>"),W:x("U<bk>"),Y:x("U<ac<q,Q>>"),t:x("U<ac<q,@>>"),r:x("U<jD>"),w:x("U<+file,name(mC,q)>"),u:x("U<d6>"),s:x("U<q>"),E:x("U<jL>"),a:x("U<e8>"),p:x("U<v>"),Z:x("U<H>"),G:x("bk"),A:x("cB<ah<ag>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bC<q,q>"),P:x("ac<q,@>"),f:x("ac<@,@>"),m:x("kF"),e:x("iBP"),af:x("F7"),U:x("jD"),b:x("cw"),C:x("aK"),aK:x("ys"),ab:x("FW"),br:x("avX"),v:x("YG"),N:x("q"),X:x("bt<G>"),Q:x("mR"),D:x("e8"),aw:x("bl<q>"),cd:x("Y<ac<q,@>>"),c7:x("v"),ch:x("c7<ai<jD>>"),aW:x("c7<e8?>"),aY:x("c7<~>"),cx:x("adH"),b1:x("bn<ai<jD>>"),cf:x("bn<e8?>"),d4:x("bn<~>"),c4:x("aEi"),bG:x("aHt"),q:x("pP"),B:x("pR<FW>"),c6:x("pR<aaR>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("ac<q,@>?"),l:x("jD?"),R:x("aK?"),c:x("YG?"),d:x("+answerQr,transfer(q,aB<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Op,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e8?"),cm:x("ado?"),bk:x("aEi?"),ag:x("aHt?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b7d=new A.ax(C.aD,2,C.r,-1)
D.caK=new A.a7(C.a5,C.a9,C.x,C.a5O,null,null)
D.b8T=new A.n(null,null,null,C.mJ,null,D.caK,C.n)
D.bao=new A.n(null,null,null,C.mJ,null,C.Ix,C.n)
D.agW=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aiq=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ajr=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ale=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fQU=new A.C("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h4Q=new A.C("Share the access code and member password with your team. They only sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dnV=x([D.fQU,C.am,D.h4Q],y.p)
D.bzC=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dnV,null)
D.h9k=new A.C("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fVq=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dFs=x([D.h9k,C.am,D.fVq],y.p)
D.bzM=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dFs,null)
D.h5u=new A.C("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fZp=new A.C("Enter the access code and password from your organization.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dD9=x([D.h5u,C.am,D.fZp],y.p)
D.bzW=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dD9,null)
D.bGc=new A.P(16,10,16,28)
D.bGk=new A.P(16,14,16,4)
D.bHA=new A.P(20,0,20,16)
D.bI6=new A.P(20,8,20,16)
D.ao8=new A.P(24,22,24,20)
D.a3M=new A.a_(63394,"MaterialIcons",!1)
D.arg=new A.a_(63515,"MaterialIcons",!1)
D.bVu=new A.a_(983813,"MaterialIcons",!1)
D.bSC=new A.a_(62867,"MaterialIcons",!1)
D.bWq=new A.ae(D.bSC,44,C.c,null,null,null)
D.bXv=new A.ae(C.kc,null,C.aa,null,null,null)
D.bYT=new A.ae(C.jv,18,null,null,null,null)
D.c_H=new A.ae(D.a3M,26,C.c,null,null,null)
D.c0h=new A.ae(C.Dq,null,null,null,null,null)
D.c0T=new A.ae(C.Dy,null,null,null,null,null)
D.c24=new A.ae(L.a3X,null,null,null,null,null)
D.c2q=new A.ae(C.hT,16,null,null,null,null)
D.c65=new A.ae(C.tq,16,null,null,null,null)
D.bWI=new A.ae(C.mj,null,null,null,null,null)
D.c6Y=new A.e7(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1q=new A.ae(C.HN,null,null,null,null,null)
D.c72=new A.e7(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c1q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bX2=new A.ae(C.DB,null,null,null,null,null)
D.c7d=new A.e7(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bX2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cWS=x([C.fq,C.b3,C.aD],y.O)
D.ccH=new A.a7(C.ay,C.aC,C.x,D.cWS,null,null)
D.cWg=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.SB=x([C.fq,C.aD],y.O)
D.SR=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dx6=x([C.mS,C.aD],y.O)
D.esh={iceServers:0}
D.aMW={urls:0}
D.dJn=new A.bq(D.aMW,["stun:stun.l.google.com:19302"],y.o)
D.dJm=new A.bq(D.aMW,["stun:stun1.l.google.com:19302"],y.o)
D.dd6=x([D.dJn,D.dJm],A.aF("U<ac<q,q>>"))
D.dIt=new A.bq(D.esh,[D.dd6],A.aF("bq<q,@>"))
D.JC=new B.Op(0,"lanDirect")
D.Ue=new B.Op(1,"cloudStash")
D.dWl=new B.Op(2,"inlineInstant")
D.Uf=new B.Op(3,"webrtcLink")
D.Az=new B.Op(4,"videoCloud")
D.h4P=new A.C("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLV=x([C.at2,C.ae,D.h4P],y.p)
D.fjc=new A.c8(C.aM,C.b9,C.i,C.l,null,C.p,null,0,D.cLV,null)
D.ezI=new A.D(C.co,D.fjc,null)
D.fHf=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.J1,null,null,null)
D.fRt=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fHf,null,C.K,null,null,null,null,null,null,null)
D.eyT=new A.D(C.CQ,D.fRt,null)
D.beZ=new A.cl(C.A,null,null,D.eyT,null)
D.eG_=new A.cK(0,null,0,28,null,null,D.beZ,null)
D.eGj=new B.aaR(0,"RTCDataChannelConnecting")
D.aSq=new B.aaR(1,"RTCDataChannelOpen")
D.aSr=new B.aaR(3,"RTCDataChannelClosed")
D.eGk=new B.FX(0,"RTCIceConnectionStateNew")
D.eGl=new B.FX(1,"RTCIceConnectionStateChecking")
D.eGm=new B.FX(2,"RTCIceConnectionStateCompleted")
D.eGn=new B.FX(3,"RTCIceConnectionStateConnected")
D.eGo=new B.FX(4,"RTCIceConnectionStateCount")
D.eGp=new B.FX(5,"RTCIceConnectionStateFailed")
D.eGq=new B.FX(6,"RTCIceConnectionStateDisconnected")
D.aSs=new B.FX(7,"RTCIceConnectionStateClosed")
D.aSt=new B.YF(0,"RTCIceGatheringStateNew")
D.eGr=new B.YF(1,"RTCIceGatheringStateGathering")
D.aam=new B.YF(2,"RTCIceGatheringStateComplete")
D.aan=new B.Pu(0,"RTCPeerConnectionStateClosed")
D.aSu=new B.Pu(1,"RTCPeerConnectionStateFailed")
D.aSv=new B.Pu(2,"RTCPeerConnectionStateDisconnected")
D.aSw=new B.Pu(3,"RTCPeerConnectionStateNew")
D.aSx=new B.Pu(4,"RTCPeerConnectionStateConnecting")
D.aSy=new B.Pu(5,"RTCPeerConnectionStateConnected")
D.eGs=new B.Pv(0,"RTCSignalingStateStable")
D.eGt=new B.Pv(1,"RTCSignalingStateHaveLocalOffer")
D.eGu=new B.Pv(2,"RTCSignalingStateHaveRemoteOffer")
D.eGv=new B.Pv(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eGw=new B.Pv(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSz=new B.Pv(5,"RTCSignalingStateClosed")
D.foj=new A.au(160,48)
D.bge=new A.fm(2,null,null,null,null,C.aD,null,null,null,null)
D.fpS=new A.a5(16,16,D.bge,null)
D.fUL=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.frl=new A.b0(D.fUL,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1u=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.frp=new A.b0(D.h1u,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.han=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.b0(D.han,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fUl=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.frW=new A.b0(D.fUl,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5F=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVK=new A.b0(D.h5F,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h76=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fsp=new A.b0(D.h76,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbR=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsG=new A.b0(D.hbR,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9N=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsL=new A.b0(D.h9N,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hb1=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fty=new A.b0(D.hb1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSW=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fu5=new A.b0(D.fSW,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3n=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fuq=new A.b0(D.h3n,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fX4=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fuX=new A.b0(D.fX4,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbW=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new A.b0(D.hbW,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTb=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fv6=new A.b0(D.fTb,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRQ=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fvl=new A.b0(D.fRQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOz=new A.C("NGMY DOC SHARE",null,C.aXa,null,null,null,null,null,null,null,null,null)
D.fQ0=new A.C("Show this to sender",null,C.iI,null,null,null,null,null,null,null,null,null)
D.fR1=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fVR=new A.C("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fWe=new A.C("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fXf=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_G=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h2x=new A.C("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.h2Q=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h39=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h3L=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3S=new A.C("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.h4g=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.h7C=new A.C("Share files & videos\nwith a scan.",null,C.aXd,null,null,null,null,null,null,null,null,null)
D.h7W=new A.C("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hFz=new B.a_y(null)
D.adL=new B.adH(0,"docShare")
D.adM=new B.adH(1,"gate")
D.Xi=new B.adH(2,"gateNoIndividual")})();(function staticFields(){$.aQj=null
$.frd=function(){var x=y.N
return A.S(x,x)}()
$.Ha=A.S(y.N,y.D)
$.ahL=A.S(y.N,A.aF("mC"))
$.S9=A.S(y.N,y.D)
$.frU=A.S(y.N,A.aF("ado"))
$.cfC=A.S(y.S,A.aF("byW"))
$.htS=1
$.iiR=null
$.iiQ=null
$.ia1=null
$.hi8=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iCj","hMw",()=>new B.ctK())
x($,"iAd","hmj",()=>C.a.q(A.bB(A.bB(A.bB(A.HI(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["7qrjEbRxEyLySEYz60qsm/uTgpw="]=a.current})($__dart_deferred_initializers__);